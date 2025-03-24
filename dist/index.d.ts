import { AppInfoUserInput } from '../node_modules/supertokens-web-js/lib/build/types';
import { default as ThemeToggle } from './components/themeToggle/ThemeToggle.vue';
import { default as Toaster } from './components/toaster/Toaster.vue';
import { useUserStore } from './stores/userStore';
declare const initializeSuperTokens: (config: {
    appInfo: AppInfoUserInput;
}) => void;
export { ThemeToggle, Toaster, useUserStore, initializeSuperTokens };
declare const _default: {
    install: (app: any) => void;
};
export default _default;
