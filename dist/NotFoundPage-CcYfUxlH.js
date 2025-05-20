import { defineComponent as t, createElementBlock as n, openBlock as r, createElementVNode as e, createVNode as d, unref as a, withCtx as p, createTextVNode as s } from "vue";
import { RouterLink as u } from "vue-router";
import "./NotFoundPage.vue_vue_type_style_index_0_scoped_86d9ef49_lang-Bq7sQBuW.js";
import { _ as m } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const f = { class: "not-found-page" }, i = /* @__PURE__ */ t({
  __name: "NotFoundPage",
  setup(l) {
    return (_, o) => (r(), n("div", f, [
      o[1] || (o[1] = e("h1", null, "Page Not Found", -1)),
      o[2] || (o[2] = e("p", null, "Sorry, the page you are looking for does not exist.", -1)),
      d(a(u), { to: "/" }, {
        default: p(() => o[0] || (o[0] = [
          s("Go back to Home")
        ])),
        _: 1
      })
    ]));
  }
}), k = /* @__PURE__ */ m(i, [["__scopeId", "data-v-86d9ef49"]]);
export {
  k as default
};
