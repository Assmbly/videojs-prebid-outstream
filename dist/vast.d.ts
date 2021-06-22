import { VastResponse } from 'vast-client';
import { BaseProps, BaseWithCreativeAndTracker } from './index';
export declare function parseVAST({ logger, options }: BaseProps): Promise<VastResponse>;
export declare function displayVASTNative({ player, logger, display: { media }, tracker }: BaseWithCreativeAndTracker): void;
