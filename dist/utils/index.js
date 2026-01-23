class n extends Error {
  response;
  data;
  constructor(s, e, r) {
    super(s), this.name = "ApiResponseError", this.response = {
      status: e.status,
      statusText: e.statusText,
      url: e.url
    }, this.data = r;
  }
}
class o extends Error {
  type;
  // error type identifier
  details;
  // additional error details (object or array)
  cause;
  // stack trace of the original error
  constructor({
    type: s,
    message: e,
    details: r,
    cause: a
  }) {
    super(e), this.name = "AppError", this.type = s, this.details = r, this.cause = a;
  }
}
function i(t) {
  if (t instanceof Error)
    return {
      name: t.name,
      message: t.message,
      stack: t.stack
    };
  if (t instanceof Response)
    return {
      status: t.status,
      statusText: t.statusText,
      url: t.url,
      headers: u(t.headers)
    };
  if (typeof t == "object" && t !== null)
    try {
      return JSON.parse(JSON.stringify(t));
    } catch {
      return { message: "Non-serializable object error", original: String(t) };
    }
  return { message: String(t) };
}
function u(t) {
  const s = {};
  return t.forEach((e, r) => {
    s[r] = e;
  }), s;
}
function c(t) {
  const { redirect: s, ...e } = t;
  if (!s) return null;
  const r = new URLSearchParams(e).toString();
  return r ? `${s}?${r}` : s;
}
const l = { getRedirectTargetWithQueryParams: c, normalizeError: i, ApiResponseError: n, AppError: o };
export {
  n as ApiResponseError,
  o as AppError,
  l as default,
  c as getRedirectTargetWithQueryParams,
  i as normalizeError
};
