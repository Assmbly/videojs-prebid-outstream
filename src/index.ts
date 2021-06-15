import videojs, { VideoJsPlayer } from 'video.js';
import { VastCreativeLinear, VastCreative, VASTTracker } from 'vast-client';

import { displayVPAID } from './vpaid';
import { displayVASTNative, parseVAST } from './vast';
import { getLogger, ILogger } from './logger';
import CloseComponent from './component/close';

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
    creative: VastCreativeLinear;
}

// TODO
// Add logger for debug option
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
                    remainingTimeDisplay: false,
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
                },
                ...options,
                ...{ adControls },
            };

            this.setup();
        }

        async setup() {
            const logger = getLogger(`prebid-outstream: ${this.player.id()}:`, this.options.debug);
            logger.debug('Initialize plugin with options', this.options);

            try {
                const props = { player: this.player, options: this.options, logger };
                const response = await parseVAST(props);

                logger.debug('Vast parsed: ', response);

                // Find creative to display
                const creative = response.ads?.[0].creatives?.find((c) => this.isLinearCreative(c));
                if (!this.isLinearCreative(creative)) {
                    // non-linear creative
                    return;
                }

                logger.debug('Loading creative: ', creative);

                const propsWithCreative = { ...props, creative };

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
                if (
                    creative.apiFramework === 'VPAID' ||
                    creative.mediaFiles.some((media) => media.apiFramework === 'VPAID')
                ) {
                    displayVPAID(propsWithCreative);
                } else {
                    displayVASTNative(propsWithCreative);
                }

                const tracker = new VASTTracker(null, response.ads[0], creative);
                if (this.options.showClose) {
                    this.player.el().appendChild(CloseComponent({onClick: () => {
                        logger.debug('Sending ad closed...');
                        tracker.skip();
                        this.player.trigger('adclose');
                        // TODO: Unload ad
                    }}))
                }


                this.player.on('canplay', () => {
                    logger.debug('Sending tracking impression...');
                    tracker.trackImpression();
                });

                this.player.on('ended', () => {
                    logger.debug('Sending tracking complete...');
                    tracker.complete();
                });

                this.player.on('timeupdate', () => {
                    tracker.setProgress(this.player.currentTime());
                });

                this.player.on('fullscreenchange', () => {
                    logger.debug('Sending full screen change...', this.player.isFullscreen());
                    tracker.setFullscreen(this.player.isFullscreen());
                });

                this.player.on('volumechange', () => {
                    tracker.setMuted(this.player.muted());
                });

                this.player.on('play', () => {
                    logger.debug('Sending resume tracking...');
                    tracker.setPaused(false);
                });
                this.player.on('pause', () => {
                    logger.debug('Sending pause tracking...');
                    tracker.setPaused(true);
                });

                if (creative.videoClickThroughURLTemplate?.url) {
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
                                    tracker.click();
                                    window.open(creative.videoClickThroughURLTemplate!.url, '_blank');
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
            }
        }

        isLinearCreative(creative?: VastCreative): creative is VastCreativeLinear {
            return creative?.type === 'linear';
        }
    };

    vjs.registerPlugin('outstream', Plugin);
}
