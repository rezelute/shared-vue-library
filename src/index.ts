// supertokens
import SuperTokens from "supertokens-web-js";
import Passwordless from "supertokens-web-js/recipe/passwordless";
import ThirdParty from "supertokens-web-js/recipe/thirdparty";
import Session from "supertokens-web-js/recipe/session";
import { type AppInfoUserInput } from "supertokens-web-js/lib/build/types";

// shared STORES
import { useUserStore } from "./stores/userStore";

// shared routes
import { sharedRoutes } from "./router/sharedRoutes";
import { setupAuthGuard } from "./router/routeGuards";

// shared utils
import { setupPrimeVue } from "./primeVueSetup";

// shared COMPOSABLES
import useToast from "./composables/toast";

const initializeSuperTokens = (config: { appInfo: AppInfoUserInput }) => {
   SuperTokens.init({
      appInfo: {
         appName: config.appInfo.appName,
         apiDomain: config.appInfo.apiDomain,
         apiBasePath: config.appInfo.apiBasePath || "/auth",
      },
      recipeList: [Session.init(), Passwordless.init({}), ThirdParty.init()],
   });
};

const stores = {
   useUserStore,
};

const baseRouting = {
   routes: sharedRoutes,
   setupAuthGuard,
};

const composables = {
   useToast,
};

// export declare type GlobalTypes = {
//    emitNotify: EmitNotify
// }

export { stores, baseRouting, initializeSuperTokens, setupPrimeVue, composables };

// export default {
//    install: (app: any) => {
//       app.component("ThemeToggle", ThemeToggle);
//    },
// };
