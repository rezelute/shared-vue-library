class o extends Error {
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
class i extends Error {
  type;
  // error type identifier
  summary;
  // short summary for logging
  details;
  // additional error details (object or array)
  cause;
  // stack trace of the original error
  constructor({
    type: s,
    summary: e,
    message: r,
    details: a,
    cause: n
  }) {
    super(r), this.name = "AppError", this.type = s, this.details = a, this.cause = n, this.summary = e;
  }
}
function u(t) {
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
      headers: c(t.headers)
    };
  if (typeof t == "object" && t !== null)
    try {
      return JSON.parse(JSON.stringify(t));
    } catch {
      return { message: "Non-serializable object error", original: String(t) };
    }
  return { message: String(t) };
}
function c(t) {
  const s = {};
  return t.forEach((e, r) => {
    s[r] = e;
  }), s;
}
function l(t) {
  const { redirect: s, ...e } = t;
  if (!s) return null;
  const r = new URLSearchParams(e).toString();
  return r ? `${s}?${r}` : s;
}
const m = { getRedirectTargetWithQueryParams: l, normalizeError: u, ApiResponseError: o, AppError: i };
export {
  o as ApiResponseError,
  i as AppError,
  m as default,
  l as getRedirectTargetWithQueryParams,
  u as normalizeError
};
