export declare class AppError extends Error {
    type: string;
    details?: any;
    cause?: Error;
    constructor({ type, message, details, cause, }: {
        type: string;
        message: string;
        details?: any;
        cause?: Error;
    });
}
