export interface ILogger {
    log: (...message: any[]) => void;
    debug: (...message: any[]) => void;
    warn: (...message: any[]) => void;
    error: (...message: any[]) => void;
}

export default class LogWrapper implements ILogger {
    constructor(readonly prefix: string, readonly logger: ILogger) {}

    call(level: 'debug' | 'log' | 'error' | 'warn', ...message: any[]) {
        this.logger[level](this.prefix, ...message);
    }

    log(...message: any[]) {
        this.call('log', ...message);
    }

    debug(...message: any[]) {
        this.call('debug', ...message);
    }

    warn(...message: any[]) {
        this.call('warn', ...message);
    }

    error(...message: any[]) {
        this.call('error', ...message);
    }
}

export function getLogger(prefix: string, debug?: boolean): ILogger {
    if (debug && console) {
        return new LogWrapper(prefix, console);
    }

    // Send all logs into the abyss
    return new LogWrapper(prefix, {
        log: () => {
            // Squelch
        },
        debug: () => {
            // Squelch
        },
        warn: () => {
            // Squelch
        },
        error: () => {
            // Squelch
        },
    });
}
