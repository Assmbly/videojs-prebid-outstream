import videojs, { VideoJsPlayer } from 'video.js';
import { VastResponse, VastCreativeLinear } from 'vast-client';
export declare class Plugin extends videojs.Plugin implements PrebidOutStreamPlugin.Instance {
    player: VideoJsPlayer;
    options?: PrebidOutStreamPlugin.Options;
    constructor(player: VideoJsPlayer, options?: PrebidOutStreamPlugin.Options);
    parse: () => Promise<void>;
    isLinearCreative(creative: any): creative is VastCreativeLinear;
    display(response: VastResponse): void;
}
export default function register(vjs: typeof videojs): void;
