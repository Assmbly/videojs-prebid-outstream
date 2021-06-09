import videojs, { VideoJsPlayer } from 'video.js';
import { VASTParser, VastResponse, VastCreativeLinear } from 'vast-client';
import { VPAIDParser } from './vpaid';

// TODO
// Add logger for debug option
// When destroyed, clear all listeners on window
// When destroyed, clear vpaid container
export default function register(vjs: typeof videojs = videojs) {
    const vjsPlugin = vjs.getPlugin('plugin');

    class Plugin extends vjsPlugin implements PrebidOutStreamPlugin.Instance {
        player: VideoJsPlayer;
        options?: PrebidOutStreamPlugin.Options;

        constructor(player: VideoJsPlayer, options?: PrebidOutStreamPlugin.Options) {
            super(player);

            this.player = player;
            this.options = options;

            this.parse();
        }

        parse = async () => {
            const vp = new VASTParser();

            try {
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
                this.trigger('outstream.error', e);
            }
        };

        isLinearCreative(creative: any): creative is VastCreativeLinear {
            return creative?.mediaFiles !== undefined;
        }

        display(response: VastResponse) {
            const creative = response.ads?.[0].creatives?.[0];
            if (!this.isLinearCreative(creative)) {
                // non linear creative
                return;
            }

            if (creative.apiFramework === 'VPAID') {
                if (this.options?.useVPAID) {
                    // Resolve VPAID
                    const parser = new VPAIDParser(creative);
                    parser.inject(this.player.el());
                }
            } else {
                // Resolve vast
                const source = this.player.selectSource(creative.mediaFiles);
                this.player.preload(true);
                this.player.src(source);

                // Autoplay
            }

            // Play all ads up until max duration
        }
    }

    vjs.registerPlugin('outstream', Plugin);
}
