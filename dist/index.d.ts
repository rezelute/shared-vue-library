import { AppInfoUserInput } from '../node_modules/supertokens-web-js/lib/build/types';
import { setupAuthGuard } from './router/routeGuards';
import { setupPrimeVue } from './primeVueSetup';
import { default as useToast } from './composables/toast';
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
        component: () => Promise<typeof import("./pages/AccountPage.vue")>;
        meta: {
            requiresAuth: boolean;
            guestOnly?: undefined;
        };
        props?: undefined;
    } | {
        path: string;
        name: string;
        component: () => Promise<typeof import("./pages/GoodbyePage.vue")>;
        meta?: undefined;
        props?: undefined;
    } | {
        path: string;
        name: string;
        component: () => Promise<typeof import("./pages/AuthPage.vue")>;
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
declare const composables: {
    useToast: typeof useToast;
};
export { stores, baseRouting, initializeSuperTokens, setupPrimeVue, composables };
