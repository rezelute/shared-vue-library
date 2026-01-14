import "vue";
class a extends Error {
  response;
  data;
  constructor(s, e, n) {
    super(s), this.name = "ApiResponseError", this.response = {
      status: e.status,
      statusText: e.statusText,
      url: e.url
    }, this.data = n;
  }
}
function r(t) {
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
      headers: o(t.headers)
    };
  if (typeof t == "object" && t !== null)
    try {
      return JSON.parse(JSON.stringify(t));
    } catch {
      return { message: "Non-serializable object error", original: String(t) };
    }
  return { message: String(t) };
}
function o(t) {
  const s = {};
  return t.forEach((e, n) => {
    s[n] = e;
  }), s;
}
const i = Symbol("API_DOMAIN");
function u(t) {
  const { redirect: s, ...e } = t;
  if (!s) return null;
  const n = new URLSearchParams(e).toString();
  return n ? `${s}?${n}` : s;
}
const c = {
  API_DOMAIN_KEY: i
}, f = { getRedirectTargetWithQueryParams: u, injectionKeys: c, normalizeError: r, ApiResponseError: a };
export {
  a as ApiResponseError,
  f as default,
  u as getRedirectTargetWithQueryParams,
  c as injectionKeys,
  r as normalizeError
};
