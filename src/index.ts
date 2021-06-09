import videojs, { VideoJsPlayer } from 'video.js';
import { VASTParser, VastResponse, VastCreativeLinear } from 'vast-client';
import { VPAIDParser } from './vpaid';

// TODO
// Add logger for debug option
// When destroyed, clear all listeners on window
// When destroyed, clear vpaid container
export default function register(vjs: typeof videojs = videojs) {
    const vjsPlugin = vjs.getPlugin('plugin');

    const Plugin = class Plugin extends vjsPlugin implements PrebidOutStreamPlugin.Instance {
        player: VideoJsPlayer;
        options?: PrebidOutStreamPlugin.Options;

        constructor(player: VideoJsPlayer, options?: PrebidOutStreamPlugin.Options) {
            super(player, options);

            this.player = player;
            this.options = options;

            this.log('debug', 'Initialized plugin with options', options);
            this.parse();
        }

        log(level: 'debug' | 'log' | 'error' | 'warn', ...message: any[]) {
            if (this.options?.debug) {
                console[level]('prebid-outstream: ', ...message);
            }
        }

        parse = async () => {
            this.log('debug', 'Starting to parse vast...');

            try {
                const vp = new VASTParser();

                if (this.options?.adTagUrl) {
                    const response = await vp.getAndParseVAST(this.options.adTagUrl, this.options);
                    this.display(response);
                }

                if (this.options?.adXml) {
                    // Needs try catch block to catch parser errors
                    const xmlParser = new DOMParser();
                    const doc = xmlParser.parseFromString(this.options.adXml, 'text/xml');
                    const response = await vp.parseVAST(doc, this.options);
                    this.display(response);
                }
            } catch (e) {
                // Ad error
                this.log('error', 'Exception Caught: ', e);
                this.trigger('outstream.error', e);
            }
        };

        isLinearCreative(creative: any): creative is VastCreativeLinear {
            return creative?.mediaFiles !== undefined;
        }

        display(response: VastResponse) {
            this.log('debug', 'Displaying ad...');
            const creative = response.ads?.[0].creatives?.[0];
            if (!this.isLinearCreative(creative)) {
                // non linear creative
                return;
            }

            if (creative.apiFramework === 'VPAID') {
                this.log('debug', 'Loading VPAID ad...');

                if (this.options?.useVPAID) {
                    // Resolve VPAID
                    const parser = new VPAIDParser(creative);
                    parser.inject(this.player.el());
                }
            } else {
                this.log('debug', 'Loading VAST without VPAID...');

                // Resolve vast
                const source = this.player.selectSource(creative.mediaFiles);
                this.player.preload(true);
                this.player.src(source);

                // Autoplay
            }

            // Play all ads up until max duration
        }
    };

    vjs.registerPlugin('outstream', Plugin);
}
