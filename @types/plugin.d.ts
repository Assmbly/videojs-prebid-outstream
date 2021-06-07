import 'video.js';

declare module 'video.js' {
    // tell the type system our plugin method exists...
    export interface VideoJsPlayer {
        outstream: (options?: Partial<PrebidOutstreamPluginOptions>) => PrebidOutstreamPlugin;
    }
    // tell the type system our plugin options exist...
    export interface VideoJsPlayerPluginOptions {
        outstream?: Partial<PrebidOutstreamPluginOptions>;
    }
}

export type PrebidOutstreamPlugin = import('video.js').Plugin & _PrebidOutstreamPlugin;

interface _PrebidOutstreamPlugin {
    write: () => void;
}

export type PrebidOutstreamPluginOptions = import('vast-client').VastRequestOptions & _PrebidOutstreamPluginOptions;

interface _PrebidOutstreamPluginOptions {
    adTagUrl: string;
    adXml: string;
}
