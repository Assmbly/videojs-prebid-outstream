import { VASTTracker } from 'vast-client';
import { BaseWithCreative } from './index';
export declare function displayVPAID(
    {
        player,
        logger,
        options,
        display: { creative, media },
    }: BaseWithCreative,
    tracker: VASTTracker
): void;
