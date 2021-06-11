declare namespace PrebidOutStreamPlugin {
    export type Instance = import('@types/video.js').Plugin & PluginInstance;
    interface PluginInstance {
        parse: () => Promise<void>;
    }

    export type Options = import('@types/vast-client').VastRequestOptions & (VastURLOptions | VastXMLOptions);
    interface PluginOptions {
        adControls?: import('@types/video.js').ControlBarOptions;
        debug?: boolean;
        useVPAID?: boolean;
    }

    export interface VastURLOptions extends PluginOptions {
        adTagUrl: string;
    }

    export interface VastXMLOptions extends PluginOptions {
        adXml: string;
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
