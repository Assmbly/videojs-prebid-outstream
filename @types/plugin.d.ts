declare namespace PrebidOutStreamPlugin {
    export type Instance = import('@types/video.js').Plugin & PluginInstance;
    interface PluginInstance {
        parse: () => Promise<void>;
    }

    export type Options = import('@types/vast-client').VastRequestOptions & PluginOptions;
    interface PluginOptions {
        adTagUrl: string;
        adXml: string;
        debug: boolean;
        useVPAID: boolean;
    }
}

//VastRequestOptions
//     timeout?: number; default 0
//     withCredentials?: boolean; default false
//     wrapperLimit?: number; default 0
//     urlHandler?: VASTClientUrlHandler; default undefined
//     resolveAll?: boolean; default true
//     allowMultipleAds: boolean
//     followAdditionalWrappers: boolean
