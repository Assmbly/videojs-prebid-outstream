import { VastResponse } from 'vast-client';
import { BaseProps, BaseWithCreative } from './index';
export declare function parseVAST({ logger, options }: BaseProps): Promise<VastResponse>;
export declare function displayVASTNative({ player, logger, display: { media } }: BaseWithCreative): void;
