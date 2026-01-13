import { A as a, n } from "../injectionKeys-D1Tjagip.js";
class o extends Error {
  response;
  data;
  constructor(t, r, s) {
    super(t), this.name = "ApiResponseError", this.response = {
      status: r.status,
      statusText: r.statusText,
      url: r.url
    }, this.data = s;
  }
}
function i(e) {
  const { redirect: t, ...r } = e;
  if (!t) return null;
  const s = new URLSearchParams(r).toString();
  return s ? `${t}?${s}` : t;
}
const u = {
  API_DOMAIN_KEY: a
}, d = { getRedirectTargetWithQueryParams: i, injectionKeys: u, normalizeError: n, ApiResponseError: o };
export {
  o as ApiResponseError,
  d as default,
  i as getRedirectTargetWithQueryParams,
  u as injectionKeys,
  n as normalizeError
};
