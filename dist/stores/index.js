import { defineStore as a } from "pinia";
import { ref as s } from "vue";
const i = a("userStore", () => {
  const e = s(!1), r = s(!1);
  async function t(o) {
    try {
      r.value = !0, e.value = o;
    } catch (n) {
      e.value = !1, console.error("Error checking session status", n);
    } finally {
      r.value = !1;
    }
  }
  return {
    isFetchingSession: r,
    isSignedIn: e,
    updateAuth: t
  };
}), l = { useUserStore: i };
export {
  l as default,
  i as useUserStore
};
