// supertokens
import SuperTokens from "supertokens-web-js";
import { type AppInfoUserInput } from "supertokens-web-js/lib/build/types";
import Passwordless from "supertokens-web-js/recipe/passwordless";
import Session from "supertokens-web-js/recipe/session";
import ThirdParty from "supertokens-web-js/recipe/thirdparty";
import { customThemes, setupPrimeVue } from "./utils/primeThemePresets";

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

export { initializeSuperTokens, customThemes, setupPrimeVue };
