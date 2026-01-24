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
    summary: a,
    message: e,
    details: r,
    cause: n
  }) {
    super(e), this.name = "AppError", this.type = s, this.details = r, this.cause = n, this.summary = a;
  }
}
function o(t) {
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
  return t.forEach((a, e) => {
    s[e] = a;
  }), s;
}
function c(t) {
  const { redirect: s, ...a } = t;
  if (!s) return null;
  const e = new URLSearchParams(a).toString();
  return e ? `${s}?${e}` : s;
}
const m = { getRedirectTargetWithQueryParams: c, normalizeError: o, AppError: i };
export {
  i as AppError,
  m as default,
  c as getRedirectTargetWithQueryParams,
  o as normalizeError
};
