import videojs, { VideoJsPlayer } from 'video.js';
import { VastCreativeLinear, VastCreative, VastMediaFile, VastAd, VASTTracker } from 'vast-client';

import { displayVPAID } from './vpaid';
import { displayVASTNative, parseVAST } from './vast';
import { getLogger, ILogger } from './logger';
import CloseComponent from './component/close';
import { createTracker } from './tracker';
import VastError, { LINEAR_ERROR, VAST_NO_ADS } from './errors';

import './index.css';

export type PrebidOutStreamPluginOptions = PrebidOutStreamPlugin.Options;

export interface BaseProps {
    options: PrebidOutStreamPlugin.Options;
    player: VideoJsPlayer;
    logger: ILogger;
}

export interface BaseWithCreative {
    options: PrebidOutStreamPlugin.Options;
    player: VideoJsPlayer;
    logger: ILogger;
    display: DisplayMedia;
}

interface DisplayMedia {
    ad: VastAd;
    creative: VastCreativeLinear;
    media: VastMediaFile;
}

// TODO
// When destroyed, clear all listeners on window
// When destroyed, clear vpaid container
export default function register(vjs: typeof videojs = videojs) {
    const vjsPlugin = vjs.getPlugin('plugin');

    const Plugin = class Plugin extends vjsPlugin implements PrebidOutStreamPlugin.Instance {
        player: VideoJsPlayer;
        options: PrebidOutStreamPlugin.Options;

        constructor(player: VideoJsPlayer, options?: PrebidOutStreamPlugin.Options) {
            super(player, options);

            this.player = player;

            // Set option defaults
            const adControls = {
                ...{
                    volumePanel: true,
                    playToggle: false,
                    captionsButton: true,
                    chaptersButton: false,
                    subtitlesButton: false,
                    remainingTimeDisplay: true,
                    progressControl: false,
                    fullscreenToggle: true,
                    playbackRateMenuButton: false,
                    pictureInPictureToggle: false,
                    currentTimeDisplay: false,
                    timeDivider: false,
                    durationDisplay: false,
                    liveDisplay: false,
                    seekToLive: false,
                    customControlSpacer: false,
                    descriptionsButton: false,
                    subsCapsButton: false,
                    audioTrackButton: false,
                },
                ...options?.adControls,
            };

            this.options = {
                ...{
                    adTagUrl: '',
                    adXml: '',
                    debug: false,
                    useVPAID: true,
                    showClose: true,
                    resolveAll: false, // Defaults parsing to the first ad in vast only
                    minVPAIDAdStart: 5000,
                },
                ...options,
                ...{ adControls },
            };

            this.setup();
        }

        async setup() {
            const logger = getLogger(`prebid-outstream: ${this.player.id()}:`, this.options.debug);
            logger.debug('Initialize plugin with options', this.options);

            let tracker: VASTTracker | undefined;

            try {
                const props = { player: this.player, options: this.options, logger };
                const response = await parseVAST(props);

                // At this point, vast tracker should be reasonably instantiated

                logger.debug('Vast parsed: ', response);

                if (!response.ads) {
                    throw new VastError(VAST_NO_ADS, 'no ads found in vast');
                }

                // Find linear creative from ads to display
                let display: DisplayMedia | Record<string, never> = {};
                for (const ad of response.ads) {
                    if (!ad.creatives) {
                        continue;
                    }

                    for (const creative of ad.creatives) {
                        if (!this.isLinearCreative(creative) || !creative.mediaFiles) {
                            continue;
                        }

                        // Sort mediafiles by euclidean distance to player size
                        const media = creative.mediaFiles
                            .sort((a, b) => {
                                const distanceA = Math.hypot(
                                    a.width - this.player.width(),
                                    a.height - this.player.height()
                                );
                                const distanceB = Math.hypot(
                                    b.width - this.player.width(),
                                    b.height - this.player.height()
                                );
                                return distanceA - distanceB;
                            })
                            .find((m) => m.mimeType !== 'video/x-flv');

                        if (media) {
                            display = {
                                ad,
                                creative,
                                media,
                            };

                            break;
                        }
                    }
                }

                if (!display.media) {
                    throw new VastError(LINEAR_ERROR, 'no suitable media found in vast');
                }

                logger.debug('Loading creative: ', display.creative);
                logger.debug('Loading media: ', display.media);

                const propsWithCreative: BaseWithCreative = { ...props, display: display as DisplayMedia };

                logger.debug('Setting up tracker...');
                tracker = createTracker(propsWithCreative);

                // TODO if the player fails to play ad source, forward error to tracker

                // Hide each control element except for the ones selected in the adControls
                // options
                Object.keys(this.options.adControls).forEach((key) => {
                    if (this.options.adControls[key]) {
                        this.player.controlBar.getChild(key)?.show();
                    } else {
                        this.player.controlBar.getChild(key)?.hide();
                    }
                });

                // Check for VPAID
                if (display.creative.apiFramework === 'VPAID' || display.media.apiFramework === 'VPAID') {
                    displayVPAID(propsWithCreative);
                } else {
                    displayVASTNative(propsWithCreative);
                }

                // Setup close button functionality
                if (this.options.showClose) {
                    this.player.el().appendChild(
                        CloseComponent({
                            onClick: () => {
                                logger.debug('Sending ad closed...');
                                this.player.trigger('adclose');
                                tracker!.skip();
                                // TODO: Unload ad
                            },
                        })
                    );
                }

                // Setup clickthrough tracking and functionality
                if (display.creative.videoClickThroughURLTemplate?.url) {
                    // Use mouseup and touchend event because
                    // 1. mouseup event changes player pause state when clicking on video
                    // 2. touch events are blocked for mobile: https://github.com/videojs/video.js/blob/main/src/js/player.js#L2044
                    ['mouseup', 'touchend'].forEach((eventName) => {
                        this.player.el().addEventListener(
                            eventName,
                            (e) => {
                                const elem = e.target as HTMLElement;
                                if (elem.tagName === 'VIDEO' && !this.player.paused()) {
                                    logger.debug('Sending click event on video...');
                                    this.player.trigger('adclick');
                                    tracker!.click();
                                }
                            },
                            { capture: true, passive: true }
                        );
                    });
                }

                // Replicate big play button capabilities for mobile
                this.player.el().addEventListener(
                    'touchend',
                    (e) => {
                        const elem = e.target as HTMLElement;
                        if (elem.tagName === 'VIDEO') {
                            if (this.player.paused()) {
                                // TODO Silence "uncaught play promise" error messages
                                this.player.play();
                            } else {
                                this.player.pause();
                            }
                        }
                    },
                    { capture: true, passive: true }
                );
            } catch (e) {
                logger.error('Exception caught: ', e);
                this.player.error(`POP: ${e.message}`);

                if (e instanceof VastError) {
                    // If tracker is defined fast-forward error to tracker
                    if (tracker) {
                        tracker.errorWithCode(e.vastErrorCode.toString());
                    }
                    this.player.trigger('aderror');
                }

                // Also trigger player error
                this.player.trigger('error');
            }
        }

        isLinearCreative(creative?: VastCreative): creative is VastCreativeLinear {
            return creative?.type === 'linear';
        }
    };

    vjs.registerPlugin('outstream', Plugin);
}
