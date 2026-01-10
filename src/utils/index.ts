import normalizeError from "./error/normalizeError.util"
import { API_DOMAIN_KEY } from "./injectionKeys"
import { getRedirectTargetWithQueryParams } from "./url"

const injectionKeys = {
   API_DOMAIN_KEY,
}

export { getRedirectTargetWithQueryParams, injectionKeys, normalizeError }

export default { getRedirectTargetWithQueryParams, injectionKeys, normalizeError }
