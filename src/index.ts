// supertokens
import SuperTokens from "supertokens-web-js";
import Passwordless from "supertokens-web-js/recipe/passwordless";
import ThirdParty from "supertokens-web-js/recipe/thirdparty";
import Session from "supertokens-web-js/recipe/session";
import { type AppInfoUserInput } from "supertokens-web-js/lib/build/types";
// shared library components/stores/composables
import ThemeToggle from "./components/themeToggle/ThemeToggle.vue";
import Toaster from "./components/toaster/Toaster.vue";
import { useUserStore } from "./stores/userStore";

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

export { ThemeToggle, Toaster, useUserStore, initializeSuperTokens };

export default {
   install: (app: any) => {
      app.component("ThemeToggle", ThemeToggle);
      app.component("Toaster", Toaster);
   },
};
