import { m as f, u as S, S as x, l as I, _ as b } from "../PageLoader.vue_vue_type_script_setup_true_lang-Cl6VvrRE.js";
import { o as W } from "../PageLoader.vue_vue_type_script_setup_true_lang-Cl6VvrRE.js";
import { defineComponent as c, ref as l, computed as m, createBlock as h, openBlock as u, unref as r, createElementBlock as v, createElementVNode as o, createVNode as k, onMounted as T, withCtx as _, createTextVNode as g, createCommentVNode as y } from "vue";
const A = /* @__PURE__ */ c({
  __name: "ThemeToggle",
  setup(s) {
    const e = localStorage.getItem("theme") || "light", n = l(e);
    document.documentElement.classList.toggle("dark", e === "dark");
    const t = m(() => n.value === "light" ? "pi pi-sun" : "pi pi-moon");
    function p() {
      const i = n.value === "light" ? "dark" : "light";
      localStorage.setItem("theme", i), n.value = i, document.documentElement.classList.toggle("dark", i === "dark");
    }
    return (i, a) => (u(), h(r(f), {
      icon: r(t),
      id: "themeToggle",
      onClick: a[0] || (a[0] = (d) => p()),
      variant: "outlined",
      "aria-label": "Toggle theme"
    }, null, 8, ["icon"]));
  }
}), w = { class: "bg-surface-0 dark:bg-surface-900" }, L = { class: "container" }, V = /* @__PURE__ */ c({
  __name: "SiteNavigation",
  props: {
    items: {},
    userSignedIn: { type: Boolean, default: !1 }
  },
  setup(s) {
    const e = s, n = S(), t = l(!1);
    l(null);
    const p = l([
      { label: "Sign in", icon: "pi pi-sign-in", to: "/signin" },
      { label: "Sign up", icon: "pi pi-user-plus", to: "/signup" }
    ]), i = m(() => e.userSignedIn ? e.items : [...e.items || [], ...p.value]);
    m(() => [
      ...i.value,
      ...e.userSignedIn ? [
        {
          label: "Sign out",
          icon: "pi pi-sign-out",
          command: () => a()
        }
      ] : []
      // If not logged in, this returns an empty array (no item added)
    ]);
    async function a() {
      try {
        t.value = !0, await x.signOut(), n.updateAuth(), window.location.assign("signin");
      } catch {
      } finally {
        t.value = !1;
      }
    }
    return (d, $) => (u(), v("header", w, [
      o("div", L, [
        o("div", null, [
          k(r(f), {
            onClick: a,
            icon: "pi pi-sign-out",
            "aria-label": "Sign out",
            variant: "outlined",
            loading: r(t)
          }, null, 8, ["loading"])
        ])
      ])
    ]));
  }
}), O = /* @__PURE__ */ c({
  __name: "AppErrorInfo",
  props: {
    error: {}
  },
  setup(s) {
    const e = s;
    return T(() => {
      console.error("App error: ", e.error);
    }), (n, t) => (u(), h(r(I), { class: "p-10" }, {
      title: _(() => t[0] || (t[0] = [
        o("h2", { class: "text-4xl font-semibold text-gray-800 text-center" }, [
          g(" Oops "),
          o("i", { class: "text-4xl not-italic" }, "🥲")
        ], -1)
      ])),
      content: _(() => t[1] || (t[1] = [
        o("p", { class: "mt-10 text-xl" }, [
          g(" Something went wrong! We have been notified about this. In the meantime, please try visiting the "),
          o("a", {
            href: "/",
            class: "underline"
          }, "homepage"),
          g(" or try again later. ")
        ], -1)
      ])),
      _: 1
    }));
  }
}), E = {
  key: 0,
  class: "bar"
}, N = /* @__PURE__ */ c({
  __name: "PageInfiniteLoader",
  props: {
    isLoading: { type: Boolean }
  },
  setup(s) {
    return (e, n) => e.isLoading ? (u(), v("div", E, n[0] || (n[0] = [
      o("div", null, null, -1)
    ]))) : y("", !0);
  }
}), P = /* @__PURE__ */ b(N, [["__scopeId", "data-v-a36ba306"]]);
export {
  O as AppErrorInfo,
  P as PageInfiniteLoader,
  W as PageLoader,
  V as SiteNavigation,
  A as ThemeToggle
};
