import "vue";
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
      headers: n(t.headers)
    };
  if (typeof t == "object" && t !== null)
    try {
      return JSON.parse(JSON.stringify(t));
    } catch {
      return { message: "Non-serializable object error", original: String(t) };
    }
  return { message: String(t) };
}
function n(t) {
  const s = {};
  return t.forEach((e, a) => {
    s[a] = e;
  }), s;
}
class i extends Error {
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
const u = Symbol("API_DOMAIN");
function c(t) {
  const { redirect: s, ...e } = t;
  if (!s) return null;
  const a = new URLSearchParams(e).toString();
  return a ? `${s}?${a}` : s;
}
export {
  u as A,
  i as a,
  c as g,
  o as n
};
