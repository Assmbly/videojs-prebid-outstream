import { BaseProps, BaseWithCreative } from './index';
import { VastResponse } from 'vast-client';
export declare function parseVAST({ logger, options }: BaseProps): Promise<VastResponse>;
export declare function displayVASTNative({ creative, player, logger }: BaseWithCreative): void;
