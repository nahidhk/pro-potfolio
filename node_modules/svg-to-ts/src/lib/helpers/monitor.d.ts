import ora from 'ora';
export declare const generateSpinner: (text?: string) => ora.Ora;
export declare const callAndMonitorAsync: <T>(fn: (...args: any) => Promise<T>, spinnerMessage: string) => Promise<T>;
export declare const callAndMonitor: <T>(fn: (...args: any) => T, spinnerMessage: string) => T;
