import { inject as u } from "vue";
import { t as i } from "./toastContent-DuextbwO.js";
var T = Symbol();
function m() {
  var o = u(T);
  if (!o)
    throw new Error("No PrimeVue Toast provided!");
  return o;
}
const c = {
  DEFAULT_LIFE: 4e3
};
function l() {
  const o = m();
  function e({ severity: r, summary: n, detail: a, life: s = c.DEFAULT_LIFE, json: t = null }) {
    o.add({
      severity: r,
      summary: n,
      detail: a,
      life: s
    }), r === "error" && t && console.error(t);
  }
  return { addToast: e, toastContent: i };
}
export {
  l as u
};
