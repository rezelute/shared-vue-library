import { t as f } from "../toastContent-Cmim6dQm.js";
import { ref as l } from "vue";
const i = {
  DEFAULT_LIFE: 4e3
};
function d(o) {
  function e(t) {
    const {
      type: n,
      severity: r,
      summary: s,
      detail: a,
      life: c = i.DEFAULT_LIFE,
      json: u = null
    } = t;
    o.add({
      severity: r,
      summary: s,
      detail: a,
      life: c
    }), r === "error" && u && console.error(t);
  }
  return { addToast: e, toastContent: f };
}
function v(o) {
  const e = l(!1);
  async function t(n) {
    try {
      if (n.value = !0, !(await fetch(o, { method: "HEAD" })).ok) throw new Error("Server is down");
      e.value = !0;
    } catch (r) {
      console.error(r), e.value = !1;
    } finally {
      n.value = !1;
    }
  }
  return { checkServer: t, connectionReady: e };
}
const p = {
  useToasting: d,
  useServerStatus: v
};
export {
  p as default,
  v as useServerStatus,
  d as useToasting
};
