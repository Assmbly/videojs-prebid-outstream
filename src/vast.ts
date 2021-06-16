import videojs from 'video.js';
import { VASTParser, VastResponse } from 'vast-client';

import VastError from './errors';
import { BaseProps, BaseWithCreative } from './index';

function isVastXMLOption(options?: PrebidOutStreamPlugin.Options): options is PrebidOutStreamPlugin.VastXMLOptions {
    return !!(options as any)?.adXml;
}

function isVastURLOption(options?: PrebidOutStreamPlugin.Options): options is PrebidOutStreamPlugin.VastURLOptions {
    return !!(options as any)?.adTagUrl;
}

export async function parseVAST({ logger, options }: BaseProps): Promise<VastResponse> {
    logger.debug('Starting to parse vast...');

    // TODO switch to VASTClient as it is preferred to reduce requests
    // when resolving vast wrappers
    const vp = new VASTParser();
    vp.on('VAST-error', ({ ERRORCODE, ERRORMESSAGE }) => {
        // Note: These errors are automatically sent to the corresponding tracking
        // https://github.com/dailymotion/vast-client-js/blob/master/docs/api/vast-parser.md#error-tracking
        throw new VastError(ERRORCODE, ERRORMESSAGE);
    });

    if (isVastURLOption(options)) {
        return await vp.getAndParseVAST(options.adTagUrl, options);
    }

    if (isVastXMLOption(options)) {
        // Needs try catch block to catch parser errors
        const xmlParser = new DOMParser();
        const doc = xmlParser.parseFromString(options.adXml, 'text/xml');
        return await vp.parseVAST(doc, options);
    }

    throw new Error('no vast provided in options');
}

export function displayVASTNative({ player, logger, display: { media } }: BaseWithCreative) {
    logger.debug('Displaying native VAST...');

    const source: videojs.Tech.SourceObject = {
        src: media.fileURL || '',
        type: media.mimeType || undefined,
    };

    logger.debug('Loading selected source...', source);

    player.preload(true);
    player.src(source.src);
}
