import videojs, { VideoJsPlayer } from 'video.js';
import { VastCreativeLinear, VastMediaFile, VastAd } from 'vast-client';
import { ILogger } from './logger';
import './index.css';
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
    display: DisplayMedia;
}
interface DisplayMedia {
    ad: VastAd;
    creative: VastCreativeLinear;
    media: VastMediaFile;
}
export default function register(vjs?: typeof videojs): void;
export {};
