export declare const messagePrefix = "svg-to-ts:";
export declare class Logger {
    private static verbose;
    static changeVisibility(verbose: boolean): void;
    static printWelcomeMessage(): void;
    static generationSuccess(path: string): void;
    static info(message: string): void;
    static verboseInfo(message: string): void;
    static error(message: string): void;
    private static logWithPrefix;
}
