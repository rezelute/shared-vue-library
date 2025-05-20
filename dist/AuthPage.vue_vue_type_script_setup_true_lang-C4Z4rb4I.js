import { defineComponent as n, createElementBlock as r, openBlock as s, createVNode as c } from "vue";
import { _ as a } from "./SignInUp.vue_vue_type_script_setup_true_lang-V9puaooh.js";
import { u as i } from "./NotFoundPage.vue_vue_type_style_index_0_scoped_86d9ef49_lang-Bq7sQBuW.js";
const _ = { class: "flex flex-grow items-center justify-center w-full" }, d = /* @__PURE__ */ n({
  __name: "AuthPage",
  setup(f) {
    const { addToast: o } = i();
    function t(e) {
      o({
        ...e,
        life: 0
      });
    }
    return (e, m) => (s(), r("div", _, [
      c(a, { onNotify: t })
    ]));
  }
});
export {
  d as _
};
