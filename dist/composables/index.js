import { ref as o } from "vue";
function n(s) {
  const e = o(!1), r = o(!1);
  async function a() {
    try {
      if (r.value = !0, !(await fetch(s, { method: "HEAD" })).ok) throw new Error("Server is down");
      e.value = !0;
    } catch (t) {
      console.error(t), e.value = !1;
    } finally {
      r.value = !1;
    }
  }
  return { checkServerHealth: a, isHealthy: e, isLoading: r };
}
const c = {
  useServerStatus: n
};
export {
  c as default,
  n as useServerStatus
};
