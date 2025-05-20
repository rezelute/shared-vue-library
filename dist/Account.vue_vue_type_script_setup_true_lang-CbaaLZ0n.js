import { defineComponent as v, createElementBlock as f, openBlock as c, createElementVNode as i, normalizeClass as R, renderSlot as C, ref as p, createBlock as g, unref as s, withCtx as m, withModifiers as W, createVNode as y, isRef as I, createTextVNode as T, toDisplayString as E, onMounted as P, mergeProps as z, createCommentVNode as $ } from "vue";
import { s as b, _ as L, a as A, e as B, f as U, g as V } from "./index-R7LR5p2Z.js";
import { t as _, S as D, B as X } from "./toastContent-DuextbwO.js";
const q = async () => await fetch("https://localhost:443/auth/get-email", {
  method: "GET",
  credentials: "include",
  headers: {
    "Content-Type": "application/json"
  }
}), M = async (t) => await fetch("https://localhost:443/auth/change-email", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  credentials: "include",
  body: JSON.stringify({ email: t })
}), O = async () => await fetch("https://localhost:443/auth/request-delete", {
  method: "POST",
  credentials: "include"
}), Y = async (t) => await fetch("https://localhost:443/auth/delete-account", {
  method: "DELETE",
  credentials: "include",
  headers: {
    "X-Delete-Token": t,
    "Content-Type": "application/json"
  }
}), w = { getEmail: q, changeEmail: M, requestDelete: O, deleteAccount: Y }, F = { class: "flex flex-col items-center gap-4 text-center" }, G = { class: "flex flex-col gap-2" }, j = /* @__PURE__ */ v({
  __name: "ActionConfirmMsg",
  props: {
    iconClass: {}
  },
  setup(t) {
    return (e, n) => (c(), f("div", F, [
      i("i", {
        class: R([e.iconClass, "border-2 p-4 rounded-full text-primary"]),
        style: { "font-size": "1.2rem !important" }
      }, null, 2),
      i("div", G, [
        C(e.$slots, "default")
      ])
    ]));
  }
}), J = {
  key: 0,
  class: "spacing-elements"
}, K = { class: "text-primary break-all px-2" }, H = "No changes have been made", Q = "The new email address you provided is the same as the current one. Please enter a different email address.", Z = /* @__PURE__ */ v({
  __name: "ChangeEmail",
  emits: ["notify"],
  setup(t, { emit: e }) {
    const n = e, o = p("mytestemail1235667@gmail.com"), d = p(!1), a = p(!1), r = p(!1), u = p(!1);
    async function N() {
      if (u.value = !0, !!r.value)
        try {
          d.value = !0;
          const h = await w.changeEmail(o.value);
          if (!h.ok)
            throw h;
          a.value = !0;
        } catch (h) {
          if (a.value = !1, h instanceof Response) {
            const l = await h.json();
            l.error === "EMAIL_SAME_AS_CURRENT" && n("notify", {
              type: "email_same_as_current",
              severity: "info",
              summary: H,
              detail: Q,
              json: l
            });
          } else
            n("notify", {
              type: "unexpected",
              severity: "error",
              summary: _.error.somethingWentWrong.summary,
              detail: _.error.somethingWentWrong.detail,
              json: h
            });
        } finally {
          d.value = !1;
        }
    }
    return (h, l) => (c(), g(s(b), null, {
      title: m(() => l[2] || (l[2] = [
        i("h2", { class: "h2" }, "Change your email", -1)
      ])),
      content: m(() => [
        s(a) ? (c(), g(j, {
          key: 1,
          iconClass: "pi pi-envelope"
        }, {
          default: m(() => [
            i("p", null, [
              l[5] || (l[5] = i("span", { class: "block text-wrap" }, "We have a verification email to:", -1)),
              i("strong", K, E(s(o)), 1),
              l[6] || (l[6] = i("span", { class: "block" }, " Please check the inbox of your new email and click on the verification link to change your email. ", -1))
            ])
          ]),
          _: 1
        })) : (c(), f("div", J, [
          l[4] || (l[4] = i("p", null, " You will receive an email to your old email to verify your new email address. Please click on the email link to update your email. ", -1)),
          i("form", {
            class: "spacing-form",
            onSubmit: W(N, ["prevent"])
          }, [
            y(L, {
              email: s(o),
              "onUpdate:email": l[0] || (l[0] = (S) => I(o) ? o.value = S : null),
              isSubmitClicked: s(u),
              labelText: "Enter your new email",
              onValidityChanged: l[1] || (l[1] = (S) => {
                r.value = S;
              })
            }, null, 8, ["email", "isSubmitClicked"]),
            y(s(A), {
              type: "submit",
              loading: s(d)
            }, {
              default: m(() => l[3] || (l[3] = [
                T("Change email")
              ])),
              _: 1
            }, 8, ["loading"])
          ], 32)
        ]))
      ]),
      _: 1
    }));
  }
}), ee = {
  key: 0,
  class: "spacing-elements"
}, te = /* @__PURE__ */ v({
  __name: "DeleteAccountRequest",
  emits: ["notify"],
  setup(t, { emit: e }) {
    const n = e, o = p(!1), d = p(!1);
    async function a() {
      try {
        d.value = !0;
        const r = await w.requestDelete();
        if (r.ok)
          o.value = !0;
        else
          throw r;
      } catch (r) {
        o.value = !1, n("notify", {
          type: "unexpected",
          severity: "error",
          summary: _.error.somethingWentWrong.summary,
          detail: _.error.somethingWentWrong.detail,
          json: r
        });
      } finally {
        d.value = !1;
      }
    }
    return (r, u) => (c(), g(s(b), null, {
      title: m(() => u[0] || (u[0] = [
        i("h2", { class: "h2" }, "Delete your account", -1)
      ])),
      content: m(() => [
        s(o) ? (c(), g(j, {
          key: 1,
          iconClass: "pi pi-envelope"
        }, {
          default: m(() => u[3] || (u[3] = [
            i("p", null, " We have sent you an email to verify your account deletion. Please check your inbox and click on the verification link. ", -1)
          ])),
          _: 1
        })) : (c(), f("div", ee, [
          u[2] || (u[2] = i("p", null, " You will receive an email to verify your account deletion. Please click on the email link to delete your account. ", -1)),
          y(s(A), {
            type: "button",
            isLoading: s(d),
            onClick: a
          }, {
            default: m(() => u[1] || (u[1] = [
              T("Send deletion email")
            ])),
            _: 1
          }, 8, ["isLoading"])
        ]))
      ]),
      _: 1
    }));
  }
}), ne = { class: "spacing-elements p-12" }, oe = /* @__PURE__ */ v({
  __name: "DeleteAccountAction",
  props: {
    deleteToken: {}
  },
  emits: ["notify"],
  setup(t, { emit: e }) {
    const n = e, o = t;
    P(() => {
      o.deleteToken && d();
    });
    async function d() {
      const a = "We failed to delete your account!", r = "Something went wrong while deleting your account. Please try again or contact us to let us know about this issue.";
      try {
        const u = await w.deleteAccount(o.deleteToken);
        if (!u.ok)
          throw u;
        await D.signOut(), window.location.href = "/goodbye";
      } catch (u) {
        n("notify", {
          type: "delete_account_fail",
          severity: "error",
          summary: a,
          detail: r,
          json: u
        });
      }
    }
    return (a, r) => (c(), g(s(b), null, {
      content: m(() => [
        i("div", ne, [
          r[0] || (r[0] = i("p", { class: "text-2xl" }, "Deleting your account, please dont close this window.", -1)),
          y(s(B))
        ])
      ]),
      _: 1
    }));
  }
});
var se = ({ dt: t }) => `
.p-skeleton {
    overflow: hidden;
    background: ${t("skeleton.background")};
    border-radius: ${t("skeleton.border.radius")};
}

.p-skeleton::after {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), ${t("skeleton.animation.background")}, rgba(255, 255, 255, 0));
}

[dir='rtl'] .p-skeleton::after {
    animation-name: p-skeleton-animation-rtl;
}

.p-skeleton-circle {
    border-radius: 50%;
}

.p-skeleton-animation-none::after {
    animation: none;
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}

@keyframes p-skeleton-animation-rtl {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(-100%);
    }
}
`, ie = {
  root: {
    position: "relative"
  }
}, re = {
  root: function(e) {
    var n = e.props;
    return ["p-skeleton p-component", {
      "p-skeleton-circle": n.shape === "circle",
      "p-skeleton-animation-none": n.animation === "none"
    }];
  }
}, ae = X.extend({
  name: "skeleton",
  style: se,
  classes: re,
  inlineStyles: ie
}), le = {
  name: "BaseSkeleton",
  extends: U,
  props: {
    shape: {
      type: String,
      default: "rectangle"
    },
    size: {
      type: String,
      default: null
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "1rem"
    },
    borderRadius: {
      type: String,
      default: null
    },
    animation: {
      type: String,
      default: "wave"
    }
  },
  style: ae,
  provide: function() {
    return {
      $pcSkeleton: this,
      $parentInstance: this
    };
  }
};
function k(t) {
  "@babel/helpers - typeof";
  return k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, k(t);
}
function ue(t, e, n) {
  return (e = ce(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function ce(t) {
  var e = de(t, "string");
  return k(e) == "symbol" ? e : e + "";
}
function de(t, e) {
  if (k(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (k(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var x = {
  name: "Skeleton",
  extends: le,
  inheritAttrs: !1,
  computed: {
    containerStyle: function() {
      return this.size ? {
        width: this.size,
        height: this.size,
        borderRadius: this.borderRadius
      } : {
        width: this.width,
        height: this.height,
        borderRadius: this.borderRadius
      };
    },
    dataP: function() {
      return V(ue({}, this.shape, this.shape));
    }
  }
}, me = ["data-p"];
function pe(t, e, n, o, d, a) {
  return c(), f("div", z({
    class: t.cx("root"),
    style: [t.sx("root"), a.containerStyle],
    "aria-hidden": "true"
  }, t.ptmi("root"), {
    "data-p": a.dataP
  }), null, 16, me);
}
x.render = pe;
const fe = {
  key: 0,
  class: "spacing-elements"
}, ye = {
  key: 0,
  class: "flex flex-row gap-2"
}, he = { class: "text-primary break-all" }, ge = {
  key: 1,
  class: "flex flex-row gap-2"
}, ve = { class: "text-primary break-all px-2" }, ke = {
  key: 1,
  class: "spacing-elements"
}, _e = /* @__PURE__ */ v({
  __name: "UserAccountInfo",
  setup(t) {
    const e = p(""), n = p(""), o = p(!1);
    P(() => {
      d();
    });
    async function d() {
      try {
        o.value = !0, e.value = await D.getUserId();
        const a = await w.getEmail();
        if (!a.ok)
          throw new Error(`Error getting user email: ${a.status} - ${a.statusText}`);
        const r = await a.json();
        n.value = r.email;
      } catch (a) {
        console.error("Error fetching user getUserInfo: ", a);
      } finally {
        o.value = !1;
      }
    }
    return (a, r) => !s(o) && (s(e) || s(n)) || s(o) ? (c(), g(s(b), { key: 0 }, {
      title: m(() => r[0] || (r[0] = [
        i("h2", { class: "h2" }, "Your details", -1)
      ])),
      content: m(() => [
        s(o) ? (c(), f("div", ke, [
          y(s(x), { height: "2rem" }),
          y(s(x), { height: "2rem" })
        ])) : (c(), f("div", fe, [
          s(e) ? (c(), f("div", ye, [
            r[1] || (r[1] = i("div", null, "ID:", -1)),
            i("div", null, [
              i("code", he, E(s(e)), 1)
            ])
          ])) : $("", !0),
          s(n) ? (c(), f("div", ge, [
            r[2] || (r[2] = i("div", null, "Email:", -1)),
            i("div", null, [
              i("strong", ve, E(s(n)), 1)
            ])
          ])) : $("", !0)
        ]))
      ]),
      _: 1
    })) : $("", !0);
  }
}), be = {
  key: 0,
  class: "max-w-xl mt-10"
}, we = { class: "spacing-page-sections" }, Se = { key: 1 }, Ce = /* @__PURE__ */ v({
  __name: "Account",
  props: {
    deleteToken: {}
  },
  setup(t) {
    return (e, n) => e.deleteToken ? (c(), f("div", Se, [
      y(oe, {
        deleteToken: e.deleteToken,
        onNotify: n[2] || (n[2] = (...o) => e.$emit("deleteAccountError", ...o))
      }, null, 8, ["deleteToken"])
    ])) : (c(), f("div", be, [
      C(e.$slots, "default", { id: "header" }, () => [
        n[3] || (n[3] = i("h1", { class: "h1 text-color" }, "Your account", -1))
      ]),
      i("div", we, [
        y(_e),
        y(Z, {
          onNotify: n[0] || (n[0] = (...o) => e.$emit("changeEmailError", ...o))
        }),
        y(te, {
          onNotify: n[1] || (n[1] = (...o) => e.$emit("deleteAccountRequestError", ...o))
        })
      ])
    ]));
  }
});
export {
  Ce as _
};
