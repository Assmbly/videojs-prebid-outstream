import videojs, { VideoJsPlayer } from 'video.js';
import { VASTParser } from 'vast-client';

const VjsPlugin = videojs.getPlugin('plugin');

// implement the plugin that adds the button the the controlBar
export class Plugin extends VjsPlugin implements PrebidOutstreamPlugin {
    constructor(player: VideoJsPlayer, options?: PrebidOutstreamPluginOptions) {
        super(player);

        const vp = new VASTParser();

        if (options.adTagUrl) {
            vp.getAndParseVAST(options.adTagUrl, options);
        }

        if (options.adXml) {
            vp.parseVAST(options.adXml, options);
        }
    }

    write() {
        console.log('writing plugin...');
    }
}

videojs.registerPlugin('outstream', Plugin);
