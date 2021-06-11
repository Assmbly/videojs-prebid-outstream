export interface ILogger {
    log: (...message: any[]) => void;
    debug: (...message: any[]) => void;
    warn: (...message: any[]) => void;
    error: (...message: any[]) => void;
}
export default class LogWrapper implements ILogger {
    readonly prefix: string;
    readonly logger: ILogger;
    constructor(prefix: string, logger: ILogger);
    call(level: 'debug' | 'log' | 'error' | 'warn', ...message: any[]): void;
    log(...message: any[]): void;
    debug(...message: any[]): void;
    warn(...message: any[]): void;
    error(...message: any[]): void;
}
export declare function getLogger(prefix: string, debug?: boolean): ILogger;
