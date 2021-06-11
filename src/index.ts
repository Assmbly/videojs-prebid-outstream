import videojs, { VideoJsPlayer } from 'video.js';
import { VastCreativeLinear, VastCreative, VASTTracker } from 'vast-client';

import { displayVPAID } from './vpaid';
import { displayVASTNative, parseVAST } from './vast';
import { getLogger, ILogger } from './logger';

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

                // Find creative
                const creative = response.ads?.[0].creatives?.find((c) => this.isLinearCreative(c));
                if (!this.isLinearCreative(creative)) {
                    // non linear creative
                    return;
                }

                logger.debug('Loading creative: ', creative);

                const propsWithCreative = { ...props, creative };

                // Remove and reinitialize control bar?
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
                this.player.on('canplay', () => {
                    // Check if source = creative source?
                    tracker.trackImpression();
                });

                this.player.on('ended', () => {
                    tracker.complete();
                });
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
