// supertokens
import SuperTokens from "supertokens-web-js";
import Passwordless from "supertokens-web-js/recipe/passwordless";
import ThirdParty from "supertokens-web-js/recipe/thirdparty";
import Session from "supertokens-web-js/recipe/session";
import { type AppInfoUserInput } from "supertokens-web-js/lib/build/types";

// shared utils
import { themePresets } from "./primeThemePresets";

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

export { initializeSuperTokens, themePresets };

// export default {
//    install: (app: any) => {
//       app.component("ThemeToggle", ThemeToggle);
//    },
// };
