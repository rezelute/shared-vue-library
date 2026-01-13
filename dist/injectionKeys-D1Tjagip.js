import "vue";
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
      headers: e(t.headers)
    };
  if (typeof t == "object" && t !== null)
    try {
      return JSON.parse(JSON.stringify(t));
    } catch {
      return { message: "Non-serializable object error", original: String(t) };
    }
  return { message: String(t) };
}
function e(t) {
  const s = {};
  return t.forEach((n, a) => {
    s[a] = n;
  }), s;
}
const u = Symbol("API_DOMAIN");
export {
  u as A,
  i as n
};
