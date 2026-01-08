import { type InjectionKey } from "vue"

// Injection key for API domain
// Consumer app should provide this key with the API domain value
export const API_DOMAIN_KEY: InjectionKey<string> = Symbol("API_DOMAIN")
