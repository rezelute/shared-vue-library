import { m as f } from "../messages-uGUYYM-c.js";
import { ref as l } from "vue";
const i = {
  DEFAULT_LIFE: 4e3
};
function d(n) {
  function e(o) {
    const {
      type: t,
      severity: r,
      summary: s,
      detail: a,
      life: c = i.DEFAULT_LIFE,
      json: u = null
    } = o;
    n.add({
      severity: r,
      summary: s,
      detail: a,
      life: c
    }), r === "error" && u && console.error(o);
  }
  return { addToast: e, messages: f };
}
function m(n) {
  const e = l(!1);
  async function o(t) {
    try {
      if (t.value = !0, !(await fetch(n, { method: "HEAD" })).ok) throw new Error("Server is down");
      e.value = !0;
    } catch (r) {
      console.error(r), e.value = !1;
    } finally {
      t.value = !1;
    }
  }
  return { checkServer: o, connectionReady: e };
}
const p = {
  useToasting: d,
  useServerStatus: m
};
export {
  p as default,
  m as useServerStatus,
  d as useToasting
};
