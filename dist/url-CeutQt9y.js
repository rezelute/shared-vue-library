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
      headers: a(t.headers)
    };
  if (typeof t == "object" && t !== null)
    try {
      return JSON.parse(JSON.stringify(t));
    } catch {
      return { message: "Non-serializable object error", original: String(t) };
    }
  return { message: String(t) };
}
function a(t) {
  const s = {};
  return t.forEach((n, e) => {
    s[e] = n;
  }), s;
}
const i = Symbol("API_DOMAIN");
function c(t) {
  const { redirect: s, ...n } = t;
  if (!s) return null;
  const e = new URLSearchParams(n).toString();
  return e ? `${s}?${e}` : s;
}
export {
  i as A,
  c as g,
  o as n
};
