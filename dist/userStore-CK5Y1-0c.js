import { defineStore as n } from "pinia";
import { S as a } from "./toastContent-DuextbwO.js";
import { ref as r } from "vue";
const f = n("userStore", () => {
  const e = r(!1), s = r(!1);
  async function o() {
    try {
      s.value = !0, e.value = await a.doesSessionExist();
    } catch (t) {
      e.value = !1, console.error("Error checking session status", t);
    } finally {
      s.value = !1;
    }
  }
  return {
    isFetchingSession: s,
    isSignedIn: e,
    updateAuth: o
  };
});
export {
  f as u
};
