declare namespace PrebidOutStreamPlugin {
    export type Instance = import('@types/video.js').Plugin & PluginInstance;
    interface PluginInstance {
        parse: () => Promise<void>;
        handleError: (main: () => Promise<void>) => Promise<void>;
    }

    export type Options = import('@types/vast-client').VastRequestOptions & (VastURLOptions | VastXMLOptions);
    interface PluginOptions {
        adControls?: import('@types/video.js').ControlBarOptions;
        debug?: boolean;
        useVPAID?: boolean;
        showClose?: boolean;
        maxVPAIDAdStart?: number;
    }

    export interface VastURLOptions extends PluginOptions {
        adTagUrl: string;
    }

    export interface VastXMLOptions extends PluginOptions {
        adXml: string;
    }
}
