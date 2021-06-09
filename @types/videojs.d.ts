import 'video.js';
declare module 'video.js' {
    // tell the type system our plugin method exists...
    export interface VideoJsPlayer {
        outstream: (options?: Partial<PrebidOutStreamPlugin.Options>) => PrebidOutStreamPlugin.Instance;
    }
    // tell the type system our plugin options exist...
    export interface VideoJsPlayerPluginOptions {
        outstream?: Partial<PrebidOutStreamPlugin.Options>;
    }
}
