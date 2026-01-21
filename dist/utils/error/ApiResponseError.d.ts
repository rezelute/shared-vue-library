type SerializableResponse = {
    status: number;
    statusText: string;
    url: string;
};
export declare class ApiResponseError extends Error {
    response: SerializableResponse;
    data: any;
    constructor(message: string, response: Response, data: any);
}
export {};
