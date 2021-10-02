import 'vast-client';
declare module 'vast-client' {
    interface VASTTracker extends EventEmitter {
        error(macros?: Record<string, unknown>, isCustomCode?: boolean): void;
        beforeAdLoadSrc: string;
    }
}
