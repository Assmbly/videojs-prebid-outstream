import videojs, { VideoJsPlayer } from 'video.js';
import { VastCreativeLinear } from 'vast-client';
import { ILogger } from './logger';
export declare type PrebidOutStreamPluginOptions = PrebidOutStreamPlugin.Options;
export interface BaseProps {
    options: PrebidOutStreamPlugin.Options;
    player: VideoJsPlayer;
    logger: ILogger;
}
export interface BaseWithCreative {
    options: PrebidOutStreamPlugin.Options;
    player: VideoJsPlayer;
    logger: ILogger;
    creative: VastCreativeLinear;
}
export default function register(vjs?: typeof videojs): void;
