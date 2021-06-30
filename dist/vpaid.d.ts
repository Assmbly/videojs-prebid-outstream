import { BaseWithCreativeAndTracker } from './index';
interface VPAIDProps extends BaseWithCreativeAndTracker {
    handleError: PrebidOutStreamPlugin.Instance['handleError'];
}
export declare function displayVPAID({ player, logger, options, display: { creative, media }, tracker, handleError, }: VPAIDProps): void;
export {};
