import { AppInfoUserInput } from '../node_modules/supertokens-web-js/lib/build/types';
import { setupAuthGuard } from './router/routeGuards';
import { setupPrimeVue } from './primeVueSetup';
declare const initializeSuperTokens: (config: {
    appInfo: AppInfoUserInput;
}) => void;
declare const stores: {
    useUserStore: import('../node_modules/pinia/dist/pinia').StoreDefinition<"userStore", Pick<{
        isFetchingSession: globalThis.Ref<boolean, boolean>;
        isSignedIn: globalThis.Ref<boolean, boolean>;
        updateAuth: () => Promise<void>;
    }, "isFetchingSession" | "isSignedIn">, Pick<{
        isFetchingSession: globalThis.Ref<boolean, boolean>;
        isSignedIn: globalThis.Ref<boolean, boolean>;
        updateAuth: () => Promise<void>;
    }, never>, Pick<{
        isFetchingSession: globalThis.Ref<boolean, boolean>;
        isSignedIn: globalThis.Ref<boolean, boolean>;
        updateAuth: () => Promise<void>;
    }, "updateAuth">>;
};
declare const baseRouting: {
    routes: ({
        path: string;
        name: string;
        component: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
        meta: {
            requiresAuth: boolean;
            guestOnly?: undefined;
        };
        props?: undefined;
    } | {
        path: string;
        name: string;
        component: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
        meta?: undefined;
        props?: undefined;
    } | {
        path: string;
        name: string;
        component: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
        props: {
            authType: string;
        };
        meta: {
            guestOnly: boolean;
            requiresAuth?: undefined;
        };
    })[];
    setupAuthGuard: typeof setupAuthGuard;
};
export { stores, baseRouting, initializeSuperTokens, setupPrimeVue };
