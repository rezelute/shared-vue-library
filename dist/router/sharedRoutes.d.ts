export type SharedRoute = {
    path: string;
    name: string;
    props?: Record<string, any>;
    meta?: Record<string, any>;
};
export declare const sharedRoutes: SharedRoute[];
