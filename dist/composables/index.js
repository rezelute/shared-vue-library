import { ref as a } from "vue";
function s(o) {
  const e = a(!1);
  async function n(r) {
    try {
      if (r.value = !0, !(await fetch(o, { method: "HEAD" })).ok) throw new Error("Server is down");
      e.value = !0;
    } catch (t) {
      console.error(t), e.value = !1;
    } finally {
      r.value = !1;
    }
  }
  return { checkServer: n, connectionReady: e };
}
const u = {
  useServerStatus: s
};
export {
  u as default,
  s as useServerStatus
};
