import { defineComponent as N, createElementBlock as T, openBlock as h, createElementVNode as u, createStaticVNode as D, toDisplayString as _, ref as y, createBlock as x, unref as l, withCtx as b, createVNode as w, withModifiers as P, isRef as E, resolveComponent as B, mergeProps as F, Fragment as M, renderList as U, renderSlot as W, normalizeClass as V, watch as j, computed as R, createCommentVNode as G, createTextVNode as k, onMounted as z } from "vue";
import { a as $, p as I, t as v, B as K, i as q } from "./toastContent-DuextbwO.js";
import { _ as H } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import { s as O, _ as Y, a as S, b as J, c as Q, d as X, e as Z } from "./index-R7LR5p2Z.js";
import { useRoute as ee, useRouter as te } from "vue-router";
const ne = { class: "gsi-material-button-content-wrapper" }, oe = { class: "gsi-material-button-icon" }, se = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  style: { display: "block" }
}, ie = { class: "gsi-material-button-contents" }, re = { style: { display: "none" } }, ae = /* @__PURE__ */ N({
  __name: "GoogleAuthIcon",
  props: {
    authType: { default: "Sign in" }
  },
  setup(n) {
    async function e() {
      try {
        const t = await $.getAuthorisationURLWithQueryParamsAndSetState({
          thirdPartyId: "google",
          // This is where Google should redirect the user back after login or error.
          // This URL goes on the Google's dashboard as well: https://support.google.com/cloud/answer/6158849?hl=en
          frontendRedirectURI: "https://localhost:5173/signup?thirdPartyId=google"
        });
        window.location.assign(t);
      } catch (t) {
        console.error("Google sign in: ", t.message);
      }
    }
    return (t, s) => (h(), T("button", {
      class: "gsi-material-button",
      onClick: e
    }, [
      s[1] || (s[1] = u("div", { class: "gsi-material-button-state" }, null, -1)),
      u("div", ne, [
        u("div", oe, [
          (h(), T("svg", se, s[0] || (s[0] = [
            D('<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" data-v-521170bf></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" data-v-521170bf></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" data-v-521170bf></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" data-v-521170bf></path><path fill="none" d="M0 0h48v48H0z" data-v-521170bf></path>', 5)
          ])))
        ]),
        u("span", ie, _(t.authType) + " with Google", 1),
        u("span", re, _(t.authType) + " with Google", 1)
      ])
    ]));
  }
}), le = /* @__PURE__ */ H(ae, [["__scopeId", "data-v-521170bf"]]), ue = { class: "h1" }, pe = /* @__PURE__ */ N({
  __name: "SignInUpForm",
  props: {
    pageAuthType: {}
  },
  emits: ["sendCodeSuccess", "notify"],
  setup(n, { emit: e }) {
    const t = e, s = y(!1), i = y("mytestemail1235667@gmail.com"), a = y(!1), f = y(!1);
    async function g() {
      if (f.value = !0, !!a.value)
        try {
          s.value = !0;
          const r = await I.createCode({
            email: i.value,
            shouldTryLinkingWithSessionUser: !1,
            // If true, SuperTokens will attempt to link the passwordless code to an existing session user
            userContext: {}
            // Optionally include user context
          });
          console.log("Create code response: ", r), r.status === "SIGN_IN_UP_NOT_ALLOWED" ? t("notify", {
            type: "sign_in_up_not_allowed",
            severity: "error",
            summary: v.error.somethingWentWrong.summary,
            detail: v.error.somethingWentWrong.detail,
            json: r
          }) : t("sendCodeSuccess", !0);
        } catch (r) {
          t("notify", {
            type: "unexpected",
            severity: "error",
            summary: v.error.somethingWentWrong.summary,
            detail: v.error.somethingWentWrong.detail,
            json: r
          });
        } finally {
          s.value = !1;
        }
    }
    return (r, c) => (h(), x(l(O), { class: "max-w-xl p-12 w-full" }, {
      title: b(() => [
        u("h1", ue, _(r.pageAuthType), 1)
      ]),
      content: b(() => [
        u("section", null, [
          w(le, { authType: r.pageAuthType }, null, 8, ["authType"]),
          c[4] || (c[4] = u("div", { class: "flex items-center my-10" }, [
            u("hr", { class: "flex-1 border-gray-300" }),
            u("span", { class: "px-4 text-gray-500 uppercase" }, "Or"),
            u("hr", { class: "flex-1 border-gray-300" })
          ], -1)),
          u("form", {
            class: "spacing-form",
            onSubmit: c[2] || (c[2] = P(() => {
            }, ["prevent"]))
          }, [
            c[3] || (c[3] = u("p", null, " This website offers a Passwordless Sign-In option. Instead of remembering a password, you'll receive a one-time code via email each time you sign in. ", -1)),
            w(Y, {
              email: l(i),
              "onUpdate:email": c[0] || (c[0] = (C) => E(i) ? i.value = C : null),
              isSubmitClicked: l(f),
              onValidityChanged: c[1] || (c[1] = (C) => {
                console.log("val is now", C), a.value = C;
              })
            }, null, 8, ["email", "isSubmitClicked"]),
            w(l(S), {
              label: r.pageAuthType,
              submit: "submit",
              loading: l(s),
              onClick: g
            }, null, 8, ["label", "loading"])
          ], 32)
        ])
      ]),
      _: 1
    }));
  }
});
var de = ({ dt: n }) => `
.p-inputotp {
    display: flex;
    align-items: center;
    gap: ${n("inputotp.gap")};
}

.p-inputotp-input {
    text-align: center;
    width: ${n("inputotp.input.width")};
}

.p-inputotp-input.p-inputtext-sm {
    text-align: center;
    width: ${n("inputotp.input.sm.width")};
}

.p-inputotp-input.p-inputtext-lg {
    text-align: center;
    width: ${n("inputotp.input.lg.width")};
}
`, ce = {
  root: "p-inputotp p-component",
  pcInputText: "p-inputotp-input"
}, me = K.extend({
  name: "inputotp",
  style: de,
  classes: ce
}), fe = {
  name: "BaseInputOtp",
  extends: Q,
  props: {
    readonly: {
      type: Boolean,
      default: !1
    },
    tabindex: {
      type: Number,
      default: null
    },
    length: {
      type: Number,
      default: 4
    },
    mask: {
      type: Boolean,
      default: !1
    },
    integerOnly: {
      type: Boolean,
      default: !1
    }
  },
  style: me,
  provide: function() {
    return {
      $pcInputOtp: this,
      $parentInstance: this
    };
  }
}, L = {
  name: "InputOtp",
  extends: fe,
  inheritAttrs: !1,
  emits: ["change", "focus", "blur"],
  data: function() {
    return {
      tokens: []
    };
  },
  watch: {
    modelValue: {
      immediate: !0,
      handler: function(e) {
        this.tokens = e ? e.split("") : new Array(this.length);
      }
    }
  },
  methods: {
    getTemplateAttrs: function(e) {
      return {
        value: this.tokens[e]
      };
    },
    getTemplateEvents: function(e) {
      var t = this;
      return {
        input: function(i) {
          return t.onInput(i, e);
        },
        keydown: function(i) {
          return t.onKeyDown(i);
        },
        focus: function(i) {
          return t.onFocus(i);
        },
        blur: function(i) {
          return t.onBlur(i);
        },
        paste: function(i) {
          return t.onPaste(i);
        }
      };
    },
    onInput: function(e, t) {
      this.tokens[t] = e.target.value, this.updateModel(e), e.inputType === "deleteContentBackward" ? this.moveToPrev(e) : (e.inputType === "insertText" || e.inputType === "deleteContentForward" || q() && e instanceof CustomEvent) && this.moveToNext(e);
    },
    updateModel: function(e) {
      var t = this.tokens.join("");
      this.writeValue(t, e), this.$emit("change", {
        originalEvent: e,
        value: t
      });
    },
    moveToPrev: function(e) {
      var t = this.findPrevInput(e.target);
      t && (t.focus(), t.select());
    },
    moveToNext: function(e) {
      var t = this.findNextInput(e.target);
      t && (t.focus(), t.select());
    },
    findNextInput: function(e) {
      var t = e.nextElementSibling;
      if (t)
        return t.nodeName === "INPUT" ? t : this.findNextInput(t);
    },
    findPrevInput: function(e) {
      var t = e.previousElementSibling;
      if (t)
        return t.nodeName === "INPUT" ? t : this.findPrevInput(t);
    },
    onFocus: function(e) {
      e.target.select(), this.$emit("focus", e);
    },
    onBlur: function(e) {
      this.$emit("blur", e);
    },
    onClick: function(e) {
      setTimeout(function() {
        return e.target.select();
      }, 1);
    },
    onKeyDown: function(e) {
      if (!(e.ctrlKey || e.metaKey))
        switch (e.code) {
          case "ArrowLeft":
            this.moveToPrev(e), e.preventDefault();
            break;
          case "ArrowUp":
          case "ArrowDown":
            e.preventDefault();
            break;
          case "Backspace":
            e.target.value.length === 0 && (this.moveToPrev(e), e.preventDefault());
            break;
          case "ArrowRight":
            this.moveToNext(e), e.preventDefault();
            break;
          case "Enter":
          case "NumpadEnter":
          case "Tab":
            break;
          default:
            (this.integerOnly && !(e.code !== "Space" && Number(e.key) >= 0 && Number(e.key) <= 9) || this.tokens.join("").length >= this.length && e.code !== "Delete") && e.preventDefault();
            break;
        }
    },
    onPaste: function(e) {
      var t = e.clipboardData.getData("text");
      if (t.length) {
        var s = t.substring(0, this.length);
        (!this.integerOnly || !isNaN(s)) && (this.tokens = s.split(""), this.updateModel(e));
      }
      e.preventDefault();
    }
  },
  computed: {
    inputMode: function() {
      return this.integerOnly ? "numeric" : "text";
    },
    inputType: function() {
      return this.mask ? "password" : "text";
    }
  },
  components: {
    OtpInputText: J
  }
};
function ge(n, e, t, s, i, a) {
  var f = B("OtpInputText");
  return h(), T("div", F({
    class: n.cx("root")
  }, n.ptmi("root")), [(h(!0), T(M, null, U(n.length, function(g) {
    return W(n.$slots, "default", {
      key: g,
      events: a.getTemplateEvents(g - 1),
      attrs: a.getTemplateAttrs(g - 1),
      index: g
    }, function() {
      return [w(f, {
        value: i.tokens[g - 1],
        type: a.inputType,
        class: V(n.cx("pcInputText")),
        name: n.$formName,
        inputmode: a.inputMode,
        variant: n.variant,
        readonly: n.readonly,
        disabled: n.disabled,
        size: n.size,
        invalid: n.invalid,
        tabindex: n.tabindex,
        unstyled: n.unstyled,
        onInput: function(c) {
          return a.onInput(c, g - 1);
        },
        onFocus: e[0] || (e[0] = function(r) {
          return a.onFocus(r);
        }),
        onBlur: e[1] || (e[1] = function(r) {
          return a.onBlur(r);
        }),
        onPaste: e[2] || (e[2] = function(r) {
          return a.onPaste(r);
        }),
        onKeydown: e[3] || (e[3] = function(r) {
          return a.onKeyDown(r);
        }),
        onClick: e[4] || (e[4] = function(r) {
          return a.onClick(r);
        }),
        pt: n.ptm("pcInputText")
      }, null, 8, ["value", "type", "class", "name", "inputmode", "variant", "readonly", "disabled", "size", "invalid", "tabindex", "unstyled", "onInput", "pt"])];
    });
  }), 128))], 16);
}
L.render = ge;
const ye = { class: "px-4 py-8 sm:p-8" }, ve = { class: "flex flex-col items-stretch gap-4 sm:flex-row sm:items-start" }, he = { class: "spacing-form" }, we = { class: "spacing-form" }, be = /* @__PURE__ */ N({
  __name: "VerifyCode",
  props: {
    pageAuthType: {}
  },
  emits: ["verificationCodeSuccess", "resendCodeSuccess", "notify", "restartFlow"],
  setup(n, { emit: e }) {
    const t = e, s = y(""), i = y(null), a = y(0), f = y(0), g = y(!1), r = y(!1);
    j(s, () => {
      i.value !== null && (i.value = null);
    });
    const c = R(() => {
      if (s.value.length < 6)
        return "Please enter a valid code length";
      if (f.value > 0 && a.value > 0 && a.value < f.value)
        return `Invalid code. You have ${f.value - a.value} attempts left.`;
    });
    async function C() {
      const m = "Unable to process your OTP code", o = "Please try again later.";
      if (i.value = !0, s.value.length < 6) {
        i.value = !1;
        return;
      }
      try {
        g.value = !0;
        const d = await I.consumeCode({ userInputCode: s.value });
        d.status === "OK" ? (await I.clearLoginAttemptInfo(), d.createdNewRecipeUser && d.user.loginMethods.length === 1 ? console.info("New user signed up successfully") : console.info("Existing user signed in successfully"), i.value = !0, t("verificationCodeSuccess", {
          summary: "Code verified",
          detail: "You have successfully signed in."
        })) : (console.error("Submit code: ", d), d.status === "INCORRECT_USER_INPUT_CODE_ERROR" ? (a.value = d.failedCodeInputAttemptCount, f.value = d.maximumCodeInputAttempts, i.value = !1) : (await I.clearLoginAttemptInfo(), t("notify", {
          type: "input_code_invalid",
          severity: "error",
          summary: m,
          detail: o,
          json: d
        })));
      } catch (d) {
        t("notify", {
          type: "unexpected",
          severity: "error",
          summary: v.error.somethingWentWrong.summary,
          detail: v.error.somethingWentWrong.detail,
          json: d
        });
      } finally {
        g.value = !1;
      }
    }
    async function A() {
      const m = "Resend OTP failed", o = "Please try again later.";
      try {
        r.value = !0;
        const d = await I.resendCode();
        console.log("resend code response: ", d), d.status === "RESTART_FLOW_ERROR" ? (await I.clearLoginAttemptInfo(), t("notify", {
          type: "restart_flow_error",
          severity: "error",
          summary: m,
          detail: o,
          json: d
        })) : t("resendCodeSuccess", {
          summary: "Code re-sent",
          detail: "Please check your email for the new code."
        });
      } catch (d) {
        t("notify", {
          type: "unexpected",
          severity: "error",
          summary: v.error.somethingWentWrong.summary,
          detail: v.error.somethingWentWrong.detail,
          json: d
        });
      } finally {
        r.value = !1;
      }
    }
    function p() {
      I.clearLoginAttemptInfo(), t("restartFlow");
    }
    return (m, o) => (h(), T("div", ye, [
      w(l(O), { class: "max-w-xl p-0 sm:p-12 w-full mx-auto" }, {
        title: b(() => [
          u("div", ve, [
            w(l(S), {
              class: "me-4 sm:me-0",
              type: "button",
              variant: "outlined",
              icon: "pi pi-arrow-left",
              "aria-label": "Start over",
              onClick: p
            }),
            o[2] || (o[2] = u("h1", { class: "h1 mt-0 sm:mt-0" }, "Input validation code", -1))
          ])
        ]),
        content: b(() => [
          u("form", {
            class: "spacing-groups",
            onSubmit: o[1] || (o[1] = P(() => {
            }, ["prevent"]))
          }, [
            u("div", he, [
              o[4] || (o[4] = u("p", null, " To finish the signup process, enter the code that was emailed to you. Note that the code is only valid for 10 minutes. ", -1)),
              u("div", null, [
                w(l(L), {
                  modelValue: l(s),
                  "onUpdate:modelValue": o[0] || (o[0] = (d) => E(s) ? s.value = d : null),
                  length: 6,
                  class: "w-50",
                  type: "text",
                  placeholder: "Input email code",
                  required: "",
                  invalid: l(i) === !1
                }, null, 8, ["modelValue", "invalid"]),
                l(i) === !1 ? (h(), x(l(X), {
                  key: 0,
                  severity: "error",
                  size: "small",
                  variant: "simple"
                }, {
                  default: b(() => [
                    k(_(l(c)), 1)
                  ]),
                  _: 1
                })) : G("", !0)
              ]),
              w(l(S), {
                class: "w-fit",
                type: "submit",
                loading: l(g),
                onClick: C
              }, {
                default: b(() => o[3] || (o[3] = [
                  k(" Submit code ")
                ])),
                _: 1
              }, 8, ["loading"])
            ]),
            u("div", we, [
              o[6] || (o[6] = u("p", null, "If you didnt receive an email, please check your Junk folder or resend another code.", -1)),
              w(l(S), {
                class: "w-fit",
                type: "button",
                loading: l(r),
                onClick: A
              }, {
                default: b(() => o[5] || (o[5] = [
                  k(" Resend code ")
                ])),
                _: 1
              }, 8, ["loading"])
            ])
          ], 32)
        ]),
        _: 1
      })
    ]));
  }
}), Ce = {
  key: 0,
  class: "border flex flex-grow items-center justify-center w-full"
}, Ie = { key: 1 }, Te = /* @__PURE__ */ N({
  __name: "PageLoader",
  props: {
    isLoading: { type: Boolean, default: !1 }
  },
  setup(n) {
    return (e, t) => e.isLoading ? (h(), T("div", Ce, [
      k(" isLoading2 " + _(e.isLoading) + " ", 1),
      w(l(Z), { "aria-label": "Loading" }),
      w(l(S), {
        type: "button",
        onClick: t[0] || (t[0] = () => {
          console.log("hello");
        })
      }, {
        default: b(() => t[1] || (t[1] = [
          k("Send deletion email")
        ])),
        _: 1
      })
    ])) : (h(), T("div", Ie, [
      W(e.$slots, "default")
    ]));
  }
}), Ae = /* @__PURE__ */ N({
  __name: "SignInUp",
  emits: ["notify", "resendCodeSuccess"],
  setup(n, { emit: e }) {
    const t = e, s = ee(), i = te(), a = y(!0), f = y(!1);
    z(async () => {
      f.value = !!await r(), i.currentRoute.value.query.thirdPartyId === "google" && await c();
    });
    const g = R(() => s.name === "signup" ? "Sign up" : "Sign in");
    async function r() {
      a.value = !0;
      try {
        const p = await I.getLoginAttemptInfo();
        return p && console.info("Code already sent: ", p), p !== void 0;
      } catch (p) {
        t("notify", {
          type: "unexpected",
          severity: "error",
          summary: v.error.somethingWentWrong.summary,
          detail: v.error.somethingWentWrong.detail,
          json: p
        });
      } finally {
        a.value = !1;
      }
    }
    async function c() {
      const p = "Failed to sign in with Google", m = "Please try again later or try another form of login.";
      try {
        a.value = !0;
        const o = await $.signInAndUp();
        o.status === "OK" ? (console.log("handleGoogleCallback> ", o.user), o.createdNewRecipeUser && o.user.loginMethods.length === 1 ? console.log("New user signed up successfully") : console.log("Existing user signed in successfully"), window.location.assign("/home")) : o.status === "SIGN_IN_UP_NOT_ALLOWED" ? t("notify", {
          type: "sign_in_up_not_allowed",
          severity: "error",
          summary: p,
          detail: m,
          json: o
        }) : (t("notify", {
          type: "unexpected",
          severity: "error",
          summary: p,
          detail: m,
          json: o
        }), window.location.assign("/signin"));
      } catch (o) {
        t("notify", {
          type: "unexpected",
          severity: "error",
          summary: v.error.somethingWentWrong.summary,
          detail: v.error.somethingWentWrong.detail,
          json: o
        });
      } finally {
        a.value = !1;
      }
    }
    function C(p) {
      window.location.href = "/home";
    }
    function A(p) {
      (p.type === "restart_flow_error" || p.type === "input_code_invalid") && (f.value = !1), t("notify", p);
    }
    return (p, m) => (h(), x(Te, { isLoading: l(a) }, {
      default: b(() => [
        l(f) ? (h(), x(be, {
          key: 1,
          pageAuthType: l(g),
          onVerificationCodeSuccess: C,
          onResendCodeSuccess: m[2] || (m[2] = (...o) => p.$emit("resendCodeSuccess", ...o)),
          onRestartFlow: m[3] || (m[3] = () => f.value = !1),
          onNotify: A
        }, null, 8, ["pageAuthType"])) : (h(), x(pe, {
          key: 0,
          pageAuthType: l(g),
          onSendCodeSuccess: m[0] || (m[0] = () => f.value = !0),
          onNotify: m[1] || (m[1] = (o) => p.$emit("notify", o))
        }, null, 8, ["pageAuthType"]))
      ]),
      _: 1
    }, 8, ["isLoading"]));
  }
});
export {
  Ae as _,
  Te as a
};
