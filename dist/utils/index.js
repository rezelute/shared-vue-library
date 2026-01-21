class n extends Error {
  response;
  data;
  constructor(s, e, a) {
    super(s), this.name = "ApiResponseError", this.response = {
      status: e.status,
      statusText: e.statusText,
      url: e.url
    }, this.data = a;
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
  return t.forEach((e, a) => {
    s[a] = e;
  }), s;
}
function u(t) {
  const { redirect: s, ...e } = t;
  if (!s) return null;
  const a = new URLSearchParams(e).toString();
  return a ? `${s}?${a}` : s;
}
const i = { getRedirectTargetWithQueryParams: u, normalizeError: r, ApiResponseError: n };
export {
  n as ApiResponseError,
  i as default,
  u as getRedirectTargetWithQueryParams,
  r as normalizeError
};
