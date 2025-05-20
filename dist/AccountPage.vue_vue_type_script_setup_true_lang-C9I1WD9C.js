import { defineComponent as s, ref as u, createElementBlock as a, openBlock as i, createVNode as l, unref as _ } from "vue";
import { _ as m } from "./Account.vue_vue_type_script_setup_true_lang-CbaaLZ0n.js";
import { u as f } from "./NotFoundPage.vue_vue_type_style_index_0_scoped_86d9ef49_lang-Bq7sQBuW.js";
import { useRoute as d } from "vue-router";
const p = { class: "container flex items-center justify-center w-full" }, A = /* @__PURE__ */ s({
  __name: "AccountPage",
  setup(k) {
    const { addToast: o } = f(), r = d(), t = u(r.query.del_token);
    function n(e) {
      o({
        ...e,
        ...e.type !== "email_same_as_current" && { life: 0 }
      });
    }
    function c(e) {
      o({
        ...e,
        life: 0
      }), t.value = void 0;
    }
    return (e, T) => (i(), a("div", p, [
      l(m, {
        deleteToken: _(t),
        onChangeEmailError: n,
        onDeleteAccountRequestError: n,
        onDeleteAccountError: c
      }, null, 8, ["deleteToken"])
    ]));
  }
});
export {
  A as _
};
