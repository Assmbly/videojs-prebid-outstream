import videojs, { VideoJsPlayer } from 'video.js';
import { VastCreativeLinear, VastMediaFile, VastAd, VASTTracker } from 'vast-client';
import { ILogger } from './logger';
import './index.css';
export declare type PrebidOutStreamPluginOptions = PrebidOutStreamPlugin.Options;
export interface BaseProps {
    options: PrebidOutStreamPlugin.Options;
    player: VideoJsPlayer;
    logger: ILogger;
}
export interface BaseWithCreative extends BaseProps {
    display: DisplayMedia;
}
export interface BaseWithCreativeAndTracker extends BaseWithCreative {
    tracker: VASTTracker;
}
interface DisplayMedia {
    ad: VastAd;
    creative: VastCreativeLinear;
    media: VastMediaFile;
}
export default function register(vjs?: typeof videojs): void;
export {};
