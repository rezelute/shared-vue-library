import { ApiResponseError } from "./error/ApiResponseError"
import { AppError } from "./error/AppError"
import normalizeError from "./error/normalizeError.util"
import { getRedirectTargetWithQueryParams } from "./url"

// named import - import { normalizeError, AppError } from "@/utils"
export { getRedirectTargetWithQueryParams, normalizeError, ApiResponseError, AppError }

// default import - import Utils from "@/utils"
export default { getRedirectTargetWithQueryParams, normalizeError, ApiResponseError, AppError }
