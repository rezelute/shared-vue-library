import { default as normalizeError } from './error/normalizeError.util';
import { getRedirectTargetWithQueryParams } from './url';
declare const injectionKeys: {
    API_DOMAIN_KEY: import('vue').InjectionKey<string>;
};
export { getRedirectTargetWithQueryParams, injectionKeys, normalizeError };
declare const _default: {
    getRedirectTargetWithQueryParams: typeof getRedirectTargetWithQueryParams;
    injectionKeys: {
        API_DOMAIN_KEY: import('vue').InjectionKey<string>;
    };
    normalizeError: typeof normalizeError;
};
export default _default;
