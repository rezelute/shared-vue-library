import { r as Gt, a as Kt, b as Qt, c as Y, d as zt, e as Jt, f as $e, g as Yt, h as Ue, i as Le, _ as $t, s as Xt, j as Be, B as Ut, k as Zt, l as ue, m as pe, n as en, o as Lt, S as Ne, p as tn, u as Nt } from "./PageLoader.vue_vue_type_script_setup_true_lang-C31nk_to.js";
import { defineComponent as D, createElementBlock as N, openBlock as R, createElementVNode as b, createStaticVNode as nn, toDisplayString as ee, mergeProps as Fe, inject as ae, ref as j, createBlock as M, unref as S, withCtx as $, createVNode as L, withModifiers as je, isRef as He, resolveComponent as rn, Fragment as on, renderList as sn, renderSlot as Ft, normalizeClass as jt, computed as X, createCommentVNode as Ee, createTextVNode as he, reactive as an, h as un, getCurrentInstance as ln, watchEffect as cn, onMounted as Ie } from "vue";
var xe = {}, se = {}, me = {}, ke = {}, Se = {}, Ge;
function dn() {
  return Ge || (Ge = 1, function(e) {
    function t(i) {
      for (var c in i) e.hasOwnProperty(c) || (e[c] = i[c]);
    }
    e.__esModule = !0, t(Gt());
  }(Se)), Se;
}
var Ke;
function fn() {
  return Ke || (Ke = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CookieHandlerReference = void 0;
    var t = dn();
    Object.defineProperty(e, "CookieHandlerReference", {
      enumerable: !0,
      get: function() {
        return t.CookieHandlerReference;
      }
    });
  }(ke)), ke;
}
var ce = {}, Qe;
function pn() {
  if (Qe) return ce;
  Qe = 1, Object.defineProperty(ce, "__esModule", { value: !0 }), ce.PostSuperTokensInitCallbacks = void 0;
  var e = (
    /** @class */
    function() {
      function t() {
      }
      return t.addPostInitCallback = function(i) {
        t.postInitCallbacks.push(i);
      }, t.runPostInitCallbacks = function() {
        for (var i = 0, c = t.postInitCallbacks; i < c.length; i++) {
          var h = c[i];
          h();
        }
      }, t.postInitCallbacks = [], t;
    }()
  );
  return ce.PostSuperTokensInitCallbacks = e, ce;
}
var V = {}, te = {}, de = {}, J = {}, ze;
function hn() {
  if (ze) return J;
  ze = 1;
  var e = J && J.__awaiter || function(c, h, d, g) {
    function f(u) {
      return u instanceof d ? u : new d(function(a) {
        a(u);
      });
    }
    return new (d || (d = Promise))(function(u, a) {
      function r(s) {
        try {
          o(g.next(s));
        } catch (l) {
          a(l);
        }
      }
      function n(s) {
        try {
          o(g.throw(s));
        } catch (l) {
          a(l);
        }
      }
      function o(s) {
        s.done ? u(s.value) : f(s.value).then(r, n);
      }
      o((g = g.apply(c, h || [])).next());
    });
  }, t = J && J.__generator || function(c, h) {
    var d = {
      label: 0,
      sent: function() {
        if (u[0] & 1) throw u[1];
        return u[1];
      },
      trys: [],
      ops: []
    }, g, f, u, a;
    return a = { next: r(0), throw: r(1), return: r(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
      return this;
    }), a;
    function r(o) {
      return function(s) {
        return n([o, s]);
      };
    }
    function n(o) {
      if (g) throw new TypeError("Generator is already executing.");
      for (; d; )
        try {
          if (g = 1, f && (u = o[0] & 2 ? f.return : o[0] ? f.throw || ((u = f.return) && u.call(f), 0) : f.next) && !(u = u.call(f, o[1])).done)
            return u;
          switch (f = 0, u && (o = [o[0] & 2, u.value]), o[0]) {
            case 0:
            case 1:
              u = o;
              break;
            case 4:
              return d.label++, { value: o[1], done: !1 };
            case 5:
              d.label++, f = o[1], o = [0];
              continue;
            case 7:
              o = d.ops.pop(), d.trys.pop();
              continue;
            default:
              if (u = d.trys, !(u = u.length > 0 && u[u.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                d = 0;
                continue;
              }
              if (o[0] === 3 && (!u || o[1] > u[0] && o[1] < u[3])) {
                d.label = o[1];
                break;
              }
              if (o[0] === 6 && d.label < u[1]) {
                d.label = u[1], u = o;
                break;
              }
              if (u && d.label < u[2]) {
                d.label = u[2], d.ops.push(o);
                break;
              }
              u[2] && d.ops.pop(), d.trys.pop();
              continue;
          }
          o = h.call(c, d);
        } catch (s) {
          o = [6, s], f = 0;
        } finally {
          g = u = 0;
        }
      if (o[0] & 5) throw o[1];
      return { value: o[0] ? o[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(J, "__esModule", { value: !0 }), J.normaliseRecipeModuleConfig = void 0;
  function i(c) {
    var h = this, d = c.preAPIHook;
    d === void 0 && (d = function(f) {
      return e(h, void 0, void 0, function() {
        return t(this, function(u) {
          return [2, f];
        });
      });
    });
    var g = c.postAPIHook;
    return g === void 0 && (g = function() {
      return e(h, void 0, void 0, function() {
        return t(this, function(f) {
          return [
            2
            /*return*/
          ];
        });
      });
    }), {
      recipeId: c.recipeId,
      appInfo: c.appInfo,
      clientType: c.clientType,
      preAPIHook: d,
      postAPIHook: g
    };
  }
  return J.normaliseRecipeModuleConfig = i, J;
}
var Je;
function De() {
  if (Je) return de;
  Je = 1, Object.defineProperty(de, "__esModule", { value: !0 }), de.normaliseAuthRecipe = void 0;
  var e = hn();
  function t(i) {
    return (0, e.normaliseRecipeModuleConfig)(i);
  }
  return de.normaliseAuthRecipe = t, de;
}
var Ye;
function vn() {
  if (Ye) return te;
  Ye = 1;
  var e = te && te.__assign || function() {
    return e = Object.assign || function(c) {
      for (var h, d = 1, g = arguments.length; d < g; d++) {
        h = arguments[d];
        for (var f in h) Object.prototype.hasOwnProperty.call(h, f) && (c[f] = h[f]);
      }
      return c;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(te, "__esModule", { value: !0 }), te.normaliseUserInput = void 0;
  var t = De();
  function i(c) {
    var h = e(
      {
        functions: function(d) {
          return d;
        }
      },
      c.override
    );
    return e(e({}, (0, t.normaliseAuthRecipe)(c)), { override: h });
  }
  return te.normaliseUserInput = i, te;
}
var B = {}, G = {}, ne = {}, Xe;
function mn() {
  return Xe || (Xe = 1, Object.defineProperty(ne, "__esModule", { value: !0 }), ne.supported_fdi = ne.package_version = void 0, ne.package_version = "0.14.0", ne.supported_fdi = ["3.1", "4.0"]), ne;
}
var ge = {}, Ce = {}, Ze;
function gn() {
  return Ze || (Ze = 1, function(e) {
    function t(c) {
      for (var h in c) e.hasOwnProperty(h) || (e[h] = c[h]);
    }
    e.__esModule = !0;
    let i = Kt();
    i.default !== void 0 ? t(i) : t({
      default: i,
      ...i
    });
  }(Ce)), Ce;
}
var et;
function Ht() {
  if (et) return ge;
  et = 1, Object.defineProperty(ge, "__esModule", { value: !0 });
  var e = gn();
  return ge.default = e.STGeneralError, ge;
}
var tt;
function We() {
  if (tt) return G;
  tt = 1;
  var e = G && G.__assign || function() {
    return e = Object.assign || function(f) {
      for (var u, a = 1, r = arguments.length; a < r; a++) {
        u = arguments[a];
        for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (f[n] = u[n]);
      }
      return f;
    }, e.apply(this, arguments);
  }, t = G && G.__awaiter || function(f, u, a, r) {
    function n(o) {
      return o instanceof a ? o : new a(function(s) {
        s(o);
      });
    }
    return new (a || (a = Promise))(function(o, s) {
      function l(v) {
        try {
          m(r.next(v));
        } catch (I) {
          s(I);
        }
      }
      function p(v) {
        try {
          m(r.throw(v));
        } catch (I) {
          s(I);
        }
      }
      function m(v) {
        v.done ? o(v.value) : n(v.value).then(l, p);
      }
      m((r = r.apply(f, u || [])).next());
    });
  }, i = G && G.__generator || function(f, u) {
    var a = {
      label: 0,
      sent: function() {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    }, r, n, o, s;
    return s = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
      return this;
    }), s;
    function l(m) {
      return function(v) {
        return p([m, v]);
      };
    }
    function p(m) {
      if (r) throw new TypeError("Generator is already executing.");
      for (; a; )
        try {
          if (r = 1, n && (o = m[0] & 2 ? n.return : m[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, m[1])).done)
            return o;
          switch (n = 0, o && (m = [m[0] & 2, o.value]), m[0]) {
            case 0:
            case 1:
              o = m;
              break;
            case 4:
              return a.label++, { value: m[1], done: !1 };
            case 5:
              a.label++, n = m[1], m = [0];
              continue;
            case 7:
              m = a.ops.pop(), a.trys.pop();
              continue;
            default:
              if (o = a.trys, !(o = o.length > 0 && o[o.length - 1]) && (m[0] === 6 || m[0] === 2)) {
                a = 0;
                continue;
              }
              if (m[0] === 3 && (!o || m[1] > o[0] && m[1] < o[3])) {
                a.label = m[1];
                break;
              }
              if (m[0] === 6 && a.label < o[1]) {
                a.label = o[1], o = m;
                break;
              }
              if (o && a.label < o[2]) {
                a.label = o[2], a.ops.push(m);
                break;
              }
              o[2] && a.ops.pop(), a.trys.pop();
              continue;
          }
          m = u.call(f, a);
        } catch (v) {
          m = [6, v], n = 0;
        } finally {
          r = o = 0;
        }
      if (m[0] & 5) throw m[1];
      return { value: m[0] ? m[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(G, "__esModule", { value: !0 });
  var c = Qt(), h = mn(), d = Ht(), g = (
    /** @class */
    function() {
      function f(a, r) {
        var n = this;
        this.recipeId = a, this.appInfo = r, this.get = function(o, s, l, p, m, v) {
          return t(n, void 0, void 0, function() {
            var I, P;
            return i(this, function(x) {
              switch (x.label) {
                case 0:
                  return [
                    4,
                    this.fetch(
                      this.getFullUrl(o, s, p),
                      e({ method: "GET" }, l),
                      m,
                      v
                    )
                  ];
                case 1:
                  return I = x.sent(), [4, this.getResponseJsonOrThrowGeneralError(I)];
                case 2:
                  return P = x.sent(), [
                    2,
                    {
                      jsonBody: P,
                      fetchResponse: I
                    }
                  ];
              }
            });
          });
        }, this.post = function(o, s, l, p, m) {
          return t(n, void 0, void 0, function() {
            var v, I;
            return i(this, function(P) {
              switch (P.label) {
                case 0:
                  if (l.body === void 0)
                    throw new Error("Post request must have a body");
                  return [
                    4,
                    this.fetch(
                      this.getFullUrl(o, s),
                      e({ method: "POST" }, l),
                      p,
                      m
                    )
                  ];
                case 1:
                  return v = P.sent(), [4, this.getResponseJsonOrThrowGeneralError(v)];
                case 2:
                  return I = P.sent(), [
                    2,
                    {
                      jsonBody: I,
                      fetchResponse: v
                    }
                  ];
              }
            });
          });
        }, this.delete = function(o, s, l, p, m) {
          return t(n, void 0, void 0, function() {
            var v, I;
            return i(this, function(P) {
              switch (P.label) {
                case 0:
                  return [
                    4,
                    this.fetch(
                      this.getFullUrl(o, s),
                      e({ method: "DELETE" }, l),
                      p,
                      m
                    )
                  ];
                case 1:
                  return v = P.sent(), [4, this.getResponseJsonOrThrowGeneralError(v)];
                case 2:
                  return I = P.sent(), [
                    2,
                    {
                      jsonBody: I,
                      fetchResponse: v
                    }
                  ];
              }
            });
          });
        }, this.put = function(o, s, l, p, m) {
          return t(n, void 0, void 0, function() {
            var v, I;
            return i(this, function(P) {
              switch (P.label) {
                case 0:
                  return [
                    4,
                    this.fetch(
                      this.getFullUrl(o, s),
                      e({ method: "PUT" }, l),
                      p,
                      m
                    )
                  ];
                case 1:
                  return v = P.sent(), [4, this.getResponseJsonOrThrowGeneralError(v)];
                case 2:
                  return I = P.sent(), [
                    2,
                    {
                      jsonBody: I,
                      fetchResponse: v
                    }
                  ];
              }
            });
          });
        }, this.fetch = function(o, s, l, p) {
          return t(n, void 0, void 0, function() {
            var m, v, I, P, x, y;
            return i(this, function(w) {
              switch (w.label) {
                case 0:
                  return s === void 0 ? m = {} : m = s.headers, [
                    4,
                    this.callPreAPIHook({
                      preAPIHook: l,
                      url: o,
                      requestInit: e(e({}, s), {
                        headers: e(e({}, m), {
                          "fdi-version": h.supported_fdi.join(","),
                          "Content-Type": "application/json",
                          rid: this.recipeId
                        })
                      })
                    })
                  ];
                case 1:
                  return v = w.sent(), I = v.requestInit, P = v.url, [4, fetch(P, I)];
                case 2:
                  if (x = w.sent(), x.status >= 300)
                    throw x;
                  return p === void 0 ? [3, 4] : (y = x.clone(), [
                    4,
                    p({
                      requestInit: I,
                      url: o,
                      fetchResponse: y
                    })
                  ]);
                case 3:
                  w.sent(), w.label = 4;
                case 4:
                  return [2, x];
              }
            });
          });
        }, this.callPreAPIHook = function(o) {
          return t(n, void 0, void 0, function() {
            var s;
            return i(this, function(l) {
              switch (l.label) {
                case 0:
                  return o.preAPIHook === void 0 ? [
                    2,
                    {
                      url: o.url,
                      requestInit: o.requestInit
                    }
                  ] : [
                    4,
                    o.preAPIHook({
                      url: o.url,
                      requestInit: o.requestInit
                    })
                  ];
                case 1:
                  return s = l.sent(), [2, s];
              }
            });
          });
        }, this.getFullUrl = function(o, s, l) {
          var p = n.appInfo.apiBasePath.getAsStringDangerous();
          o !== void 0 && o !== "public" && (p = "".concat(p, "/").concat(o));
          var m = new c.default(s), v = "".concat(n.appInfo.apiDomain.getAsStringDangerous()).concat(p).concat(m.getAsStringDangerous());
          return l === void 0 ? v : v + "?" + new URLSearchParams(l);
        }, this.getResponseJsonOrThrowGeneralError = function(o) {
          return t(n, void 0, void 0, function() {
            var s, l;
            return i(this, function(p) {
              switch (p.label) {
                case 0:
                  return [4, o.clone().json()];
                case 1:
                  if (s = p.sent(), s.status === "GENERAL_ERROR")
                    throw l = s.message === void 0 ? "No Error Message Provided" : s.message, new d.default(l);
                  return [2, s];
              }
            });
          });
        };
      }
      var u;
      return u = f, f.preparePreAPIHook = function(a) {
        var r = a.recipePreAPIHook, n = a.action, o = a.options, s = a.userContext;
        return function(l) {
          return t(void 0, void 0, void 0, function() {
            var p;
            return i(u, function(m) {
              switch (m.label) {
                case 0:
                  return [
                    4,
                    r(
                      e(e({}, l), { action: n, userContext: s })
                    )
                  ];
                case 1:
                  return p = m.sent(), o === void 0 || o.preAPIHook === void 0 ? [2, p] : [
                    2,
                    o.preAPIHook({
                      url: p.url,
                      requestInit: p.requestInit,
                      userContext: s
                    })
                  ];
              }
            });
          });
        };
      }, f.preparePostAPIHook = function(a) {
        var r = a.recipePostAPIHook, n = a.action, o = a.userContext;
        return function(s) {
          return t(void 0, void 0, void 0, function() {
            return i(u, function(l) {
              switch (l.label) {
                case 0:
                  return [
                    4,
                    r(
                      e(e({}, s), { userContext: o, action: n })
                    )
                  ];
                case 1:
                  return l.sent(), [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
      }, f;
    }()
  );
  return G.default = g, G;
}
var nt;
function yn() {
  if (nt) return B;
  nt = 1;
  var e = B && B.__awaiter || function(d, g, f, u) {
    function a(r) {
      return r instanceof f ? r : new f(function(n) {
        n(r);
      });
    }
    return new (f || (f = Promise))(function(r, n) {
      function o(p) {
        try {
          l(u.next(p));
        } catch (m) {
          n(m);
        }
      }
      function s(p) {
        try {
          l(u.throw(p));
        } catch (m) {
          n(m);
        }
      }
      function l(p) {
        p.done ? r(p.value) : a(p.value).then(o, s);
      }
      l((u = u.apply(d, g || [])).next());
    });
  }, t = B && B.__generator || function(d, g) {
    var f = {
      label: 0,
      sent: function() {
        if (r[0] & 1) throw r[1];
        return r[1];
      },
      trys: [],
      ops: []
    }, u, a, r, n;
    return n = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (n[Symbol.iterator] = function() {
      return this;
    }), n;
    function o(l) {
      return function(p) {
        return s([l, p]);
      };
    }
    function s(l) {
      if (u) throw new TypeError("Generator is already executing.");
      for (; f; )
        try {
          if (u = 1, a && (r = l[0] & 2 ? a.return : l[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, l[1])).done)
            return r;
          switch (a = 0, r && (l = [l[0] & 2, r.value]), l[0]) {
            case 0:
            case 1:
              r = l;
              break;
            case 4:
              return f.label++, { value: l[1], done: !1 };
            case 5:
              f.label++, a = l[1], l = [0];
              continue;
            case 7:
              l = f.ops.pop(), f.trys.pop();
              continue;
            default:
              if (r = f.trys, !(r = r.length > 0 && r[r.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                f = 0;
                continue;
              }
              if (l[0] === 3 && (!r || l[1] > r[0] && l[1] < r[3])) {
                f.label = l[1];
                break;
              }
              if (l[0] === 6 && f.label < r[1]) {
                f.label = r[1], r = l;
                break;
              }
              if (r && f.label < r[2]) {
                f.label = r[2], f.ops.push(l);
                break;
              }
              r[2] && f.ops.pop(), f.trys.pop();
              continue;
          }
          l = g.call(d, f);
        } catch (p) {
          l = [6, p], a = 0;
        } finally {
          u = r = 0;
        }
      if (l[0] & 5) throw l[1];
      return { value: l[0] ? l[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(B, "__esModule", { value: !0 }), B.getRecipeImplementation = void 0;
  var i = We(), c = Y();
  function h(d) {
    var g = new i.default(d.recipeId, d.appInfo);
    return {
      getTenantId: function() {
        var f = (0, c.getQueryParams)("tenantId");
        if ((f == null ? void 0 : f.trim()) !== "")
          return f;
      },
      getLoginMethods: function(f) {
        var u = f.tenantId, a = f.options, r = f.userContext;
        return e(this, void 0, void 0, function() {
          var n, o, s, l, p;
          return t(this, function(m) {
            switch (m.label) {
              case 0:
                return n = {}, d.clientType !== void 0 && (n.clientType = d.clientType), [
                  4,
                  g.get(
                    u,
                    "/loginmethods",
                    {},
                    n,
                    i.default.preparePreAPIHook({
                      recipePreAPIHook: d.preAPIHook,
                      action: "GET_LOGIN_METHODS",
                      options: a,
                      userContext: r
                    }),
                    i.default.preparePostAPIHook({
                      recipePostAPIHook: d.postAPIHook,
                      action: "GET_LOGIN_METHODS",
                      userContext: r
                    })
                  )
                ];
              case 1:
                return o = m.sent(), s = o.jsonBody, l = o.fetchResponse, s.firstFactors === void 0 ? (p = [], s.emailPassword.enabled && p.push("emailpassword"), s.thirdParty.enabled && p.push("thirdparty"), s.passwordless.enabled && (p.push("otp-email"), p.push("otp-phone"), p.push("link-email"), p.push("link-phone"))) : p = s.firstFactors, [
                  2,
                  {
                    status: "OK",
                    thirdParty: {
                      providers: s.thirdParty.providers
                    },
                    firstFactors: p,
                    fetchResponse: l
                  }
                ];
            }
          });
        });
      }
    };
  }
  return B.default = h, B.getRecipeImplementation = h, B;
}
var K = {}, rt;
function qe() {
  if (rt) return K;
  rt = 1;
  var e = K && K.__extends || /* @__PURE__ */ function() {
    var g = function(f, u) {
      return g = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, r) {
        a.__proto__ = r;
      } || function(a, r) {
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (a[n] = r[n]);
      }, g(f, u);
    };
    return function(f, u) {
      if (typeof u != "function" && u !== null)
        throw new TypeError("Class extends value " + String(u) + " is not a constructor or null");
      g(f, u);
      function a() {
        this.constructor = f;
      }
      f.prototype = u === null ? Object.create(u) : (a.prototype = u.prototype, new a());
    };
  }(), t = K && K.__awaiter || function(g, f, u, a) {
    function r(n) {
      return n instanceof u ? n : new u(function(o) {
        o(n);
      });
    }
    return new (u || (u = Promise))(function(n, o) {
      function s(m) {
        try {
          p(a.next(m));
        } catch (v) {
          o(v);
        }
      }
      function l(m) {
        try {
          p(a.throw(m));
        } catch (v) {
          o(v);
        }
      }
      function p(m) {
        m.done ? n(m.value) : r(m.value).then(s, l);
      }
      p((a = a.apply(g, f || [])).next());
    });
  }, i = K && K.__generator || function(g, f) {
    var u = {
      label: 0,
      sent: function() {
        if (n[0] & 1) throw n[1];
        return n[1];
      },
      trys: [],
      ops: []
    }, a, r, n, o;
    return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
      return this;
    }), o;
    function s(p) {
      return function(m) {
        return l([p, m]);
      };
    }
    function l(p) {
      if (a) throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (a = 1, r && (n = p[0] & 2 ? r.return : p[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, p[1])).done)
            return n;
          switch (r = 0, n && (p = [p[0] & 2, n.value]), p[0]) {
            case 0:
            case 1:
              n = p;
              break;
            case 4:
              return u.label++, { value: p[1], done: !1 };
            case 5:
              u.label++, r = p[1], p = [0];
              continue;
            case 7:
              p = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (n = u.trys, !(n = n.length > 0 && n[n.length - 1]) && (p[0] === 6 || p[0] === 2)) {
                u = 0;
                continue;
              }
              if (p[0] === 3 && (!n || p[1] > n[0] && p[1] < n[3])) {
                u.label = p[1];
                break;
              }
              if (p[0] === 6 && u.label < n[1]) {
                u.label = n[1], n = p;
                break;
              }
              if (n && u.label < n[2]) {
                u.label = n[2], u.ops.push(p);
                break;
              }
              n[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          p = f.call(g, u);
        } catch (m) {
          p = [6, m], r = 0;
        } finally {
          a = n = 0;
        }
      if (p[0] & 5) throw p[1];
      return { value: p[0] ? p[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(K, "__esModule", { value: !0 });
  var c = zt(), h = Jt(), d = (
    /** @class */
    function(g) {
      e(f, g);
      function f(u) {
        var a = g.call(this, u) || this;
        return a.signOut = function(r) {
          return t(a, void 0, void 0, function() {
            return i(this, function(n) {
              switch (n.label) {
                case 0:
                  return [
                    4,
                    h.default.getInstanceOrThrow().signOut({
                      userContext: r.userContext
                    })
                  ];
                case 1:
                  return [2, n.sent()];
              }
            });
          });
        }, a;
      }
      return f;
    }(c.default)
  );
  return K.default = d, K;
}
var ot;
function _e() {
  if (ot) return V;
  ot = 1;
  var e = V && V.__extends || /* @__PURE__ */ function() {
    var u = function(a, r) {
      return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, o) {
        n.__proto__ = o;
      } || function(n, o) {
        for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s]);
      }, u(a, r);
    };
    return function(a, r) {
      if (typeof r != "function" && r !== null)
        throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
      u(a, r);
      function n() {
        this.constructor = a;
      }
      a.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
    };
  }(), t = V && V.__assign || function() {
    return t = Object.assign || function(u) {
      for (var a, r = 1, n = arguments.length; r < n; r++) {
        a = arguments[r];
        for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (u[o] = a[o]);
      }
      return u;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(V, "__esModule", { value: !0 }), V.Recipe = void 0;
  var i = vn(), c = $e(), h = yn(), d = Y(), g = qe(), f = (
    /** @class */
    function(u) {
      e(a, u);
      function a(r) {
        var n = u.call(this, (0, i.normaliseUserInput)(r)) || this, o = new c.default(
          (0, h.default)({
            recipeId: n.config.recipeId,
            appInfo: n.config.appInfo,
            clientType: n.config.clientType,
            preAPIHook: n.config.preAPIHook,
            postAPIHook: n.config.postAPIHook
          })
        );
        return n.recipeImplementation = o.override(n.config.override.functions).build(), n;
      }
      return a.init = function(r) {
        return function(n, o) {
          return a.instance = new a(
            t(t({}, r), { recipeId: a.RECIPE_ID, appInfo: n, clientType: o })
          ), a.instance;
        };
      }, a.getInstanceOrThrow = function() {
        if (a.instance === void 0) {
          var r = "No instance of Multitenancy found. Ensure that 'SuperTokens.init' method has been called.";
          throw r = (0, d.checkForSSRErrorAndAppendIfNeeded)(r), Error(r);
        }
        return a.instance;
      }, a.reset = function() {
        (0, d.isTest)() && (a.instance = void 0);
      }, a.RECIPE_ID = "multitenancy", a;
    }(g.default)
  );
  return V.Recipe = f, V.default = f, V;
}
var Ae = {}, Te = {}, it;
function In() {
  return it || (it = 1, function(e) {
    function t(i) {
      for (var c in i) e.hasOwnProperty(c) || (e[c] = i[c]);
    }
    e.__esModule = !0, t(Yt());
  }(Te)), Te;
}
var st;
function _n() {
  return st || (st = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.DateProviderReference = void 0;
    var t = In();
    Object.defineProperty(e, "DateProviderReference", {
      enumerable: !0,
      get: function() {
        return t.DateProviderReference;
      }
    });
  }(Ae)), Ae;
}
var at;
function wn() {
  if (at) return me;
  at = 1, Object.defineProperty(me, "__esModule", { value: !0 });
  var e = Y(), t = fn(), i = Ue(), c = pn(), h = _e(), d = _n(), g = (
    /** @class */
    function() {
      function f(u) {
        var a = this;
        if (this.recipeList = [], this.appInfo = (0, e.normaliseInputAppInfoOrThrowError)(u.appInfo), u.recipeList === void 0 || u.recipeList.length === 0)
          throw new Error(
            "Please provide at least one recipe to the supertokens.init function call. See https://supertokens.io/docs/emailpassword/quick-setup/frontend"
          );
        var r = !1;
        u.enableDebugLogs !== void 0 && (r = u.enableDebugLogs);
        var n = !1;
        this.recipeList = u.recipeList.map(function(o) {
          var s = o(a.appInfo, u.clientType, r);
          return s.config.recipeId === h.Recipe.RECIPE_ID && (n = !0), s;
        }), n || this.recipeList.push(h.Recipe.init()(this.appInfo, u.clientType, r));
      }
      return f.init = function(u) {
        if (t.CookieHandlerReference.init(u.cookieHandler), i.WindowHandlerReference.init(u.windowHandler), d.DateProviderReference.init(u.dateProvider), f.instance !== void 0) {
          console.warn("SuperTokens was already initialized");
          return;
        }
        f.instance = new f(u), c.PostSuperTokensInitCallbacks.runPostInitCallbacks();
      }, f.getInstanceOrThrow = function() {
        if (f.instance === void 0) {
          var u = "SuperTokens must be initialized before calling this method.";
          throw u = (0, e.checkForSSRErrorAndAppendIfNeeded)(u), new Error(u);
        }
        return f.instance;
      }, f.reset = function() {
        if (!(0, e.isTest)()) {
          console.warn("Calling reset() is only supported during testing");
          return;
        }
        h.Recipe.reset(), f.instance = void 0;
      }, f;
    }()
  );
  return me.default = g, me;
}
var ut;
function bn() {
  if (ut) return se;
  ut = 1, Object.defineProperty(se, "__esModule", { value: !0 }), se.init = void 0;
  var e = wn(), t = (
    /** @class */
    function() {
      function i() {
      }
      return i.init = function(c) {
        e.default.init(c);
      }, i;
    }()
  );
  return se.default = t, se.init = t.init, se;
}
var lt;
function Pn() {
  return lt || (lt = 1, function(e) {
    function t(i) {
      for (var c in i) e.hasOwnProperty(c) || (e[c] = i[c]);
    }
    e.__esModule = !0, t(bn());
  }(xe)), xe;
}
var xn = Pn();
const kn = /* @__PURE__ */ Le(xn);
var Re = {}, C = {}, Q = {}, re = {}, ct;
function Sn() {
  if (ct) return re;
  ct = 1;
  var e = re && re.__assign || function() {
    return e = Object.assign || function(c) {
      for (var h, d = 1, g = arguments.length; d < g; d++) {
        h = arguments[d];
        for (var f in h) Object.prototype.hasOwnProperty.call(h, f) && (c[f] = h[f]);
      }
      return c;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(re, "__esModule", { value: !0 }), re.normaliseUserInput = void 0;
  var t = De();
  function i(c) {
    var h = e(
      {
        functions: function(d) {
          return d;
        }
      },
      c.override
    );
    return e(e({}, (0, t.normaliseAuthRecipe)(c)), { override: h });
  }
  return re.normaliseUserInput = i, re;
}
var W = {}, fe = {}, dt;
function Cn() {
  return dt || (dt = 1, Object.defineProperty(fe, "__esModule", { value: !0 }), fe.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY = void 0, fe.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY = "supertokens-passwordless-loginAttemptInfo"), fe;
}
var ft;
function An() {
  if (ft) return W;
  ft = 1;
  var e = W && W.__assign || function() {
    return e = Object.assign || function(a) {
      for (var r, n = 1, o = arguments.length; n < o; n++) {
        r = arguments[n];
        for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (a[s] = r[s]);
      }
      return a;
    }, e.apply(this, arguments);
  }, t = W && W.__awaiter || function(a, r, n, o) {
    function s(l) {
      return l instanceof n ? l : new n(function(p) {
        p(l);
      });
    }
    return new (n || (n = Promise))(function(l, p) {
      function m(P) {
        try {
          I(o.next(P));
        } catch (x) {
          p(x);
        }
      }
      function v(P) {
        try {
          I(o.throw(P));
        } catch (x) {
          p(x);
        }
      }
      function I(P) {
        P.done ? l(P.value) : s(P.value).then(m, v);
      }
      I((o = o.apply(a, r || [])).next());
    });
  }, i = W && W.__generator || function(a, r) {
    var n = {
      label: 0,
      sent: function() {
        if (l[0] & 1) throw l[1];
        return l[1];
      },
      trys: [],
      ops: []
    }, o, s, l, p;
    return p = { next: m(0), throw: m(1), return: m(2) }, typeof Symbol == "function" && (p[Symbol.iterator] = function() {
      return this;
    }), p;
    function m(I) {
      return function(P) {
        return v([I, P]);
      };
    }
    function v(I) {
      if (o) throw new TypeError("Generator is already executing.");
      for (; n; )
        try {
          if (o = 1, s && (l = I[0] & 2 ? s.return : I[0] ? s.throw || ((l = s.return) && l.call(s), 0) : s.next) && !(l = l.call(s, I[1])).done)
            return l;
          switch (s = 0, l && (I = [I[0] & 2, l.value]), I[0]) {
            case 0:
            case 1:
              l = I;
              break;
            case 4:
              return n.label++, { value: I[1], done: !1 };
            case 5:
              n.label++, s = I[1], I = [0];
              continue;
            case 7:
              I = n.ops.pop(), n.trys.pop();
              continue;
            default:
              if (l = n.trys, !(l = l.length > 0 && l[l.length - 1]) && (I[0] === 6 || I[0] === 2)) {
                n = 0;
                continue;
              }
              if (I[0] === 3 && (!l || I[1] > l[0] && I[1] < l[3])) {
                n.label = I[1];
                break;
              }
              if (I[0] === 6 && n.label < l[1]) {
                n.label = l[1], l = I;
                break;
              }
              if (l && n.label < l[2]) {
                n.label = l[2], n.ops.push(I);
                break;
              }
              l[2] && n.ops.pop(), n.trys.pop();
              continue;
          }
          I = r.call(a, n);
        } catch (P) {
          I = [6, P], s = 0;
        } finally {
          o = l = 0;
        }
      if (I[0] & 5) throw I[1];
      return { value: I[0] ? I[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(W, "__esModule", { value: !0 }), W.getRecipeImplementation = void 0;
  var c = Ue(), h = We(), d = Y(), g = _e(), f = Cn();
  function u(a) {
    var r = new h.default(a.recipeId, a.appInfo);
    return {
      createCode: function(n) {
        return t(this, void 0, void 0, function() {
          var o, s, l, p, m, v;
          return i(this, function(I) {
            switch (I.label) {
              case 0:
                return "email" in n && (o = {
                  email: n.email,
                  shouldTryLinkingWithSessionUser: n.shouldTryLinkingWithSessionUser
                }), "phoneNumber" in n && (o = {
                  phoneNumber: n.phoneNumber,
                  shouldTryLinkingWithSessionUser: n.shouldTryLinkingWithSessionUser
                }), v = (m = r).post, [
                  4,
                  g.default.getInstanceOrThrow().recipeImplementation.getTenantId({
                    userContext: n.userContext
                  })
                ];
              case 1:
                return [
                  4,
                  v.apply(m, [
                    I.sent(),
                    "/signinup/code",
                    { body: JSON.stringify(o) },
                    h.default.preparePreAPIHook({
                      recipePreAPIHook: a.preAPIHook,
                      action: "PASSWORDLESS_CREATE_CODE",
                      userContext: n.userContext,
                      options: n.options
                    }),
                    h.default.preparePostAPIHook({
                      recipePostAPIHook: a.postAPIHook,
                      action: "PASSWORDLESS_CREATE_CODE",
                      userContext: n.userContext
                    })
                  ])
                ];
              case 2:
                return s = I.sent(), l = s.jsonBody, p = s.fetchResponse, [2, e(e({}, l), { fetchResponse: p })];
            }
          });
        });
      },
      resendCode: function(n) {
        return t(this, void 0, void 0, function() {
          var o, s, l, p;
          return i(this, function(m) {
            switch (m.label) {
              case 0:
                return o = {
                  deviceId: n.deviceId,
                  preAuthSessionId: n.preAuthSessionId,
                  shouldTryLinkingWithSessionUser: n.shouldTryLinkingWithSessionUser
                }, [
                  4,
                  r.post(
                    n.tenantId,
                    "/signinup/code/resend",
                    { body: JSON.stringify(o) },
                    h.default.preparePreAPIHook({
                      recipePreAPIHook: a.preAPIHook,
                      action: "PASSWORDLESS_RESEND_CODE",
                      userContext: n.userContext,
                      options: n.options
                    }),
                    h.default.preparePostAPIHook({
                      recipePostAPIHook: a.postAPIHook,
                      action: "PASSWORDLESS_RESEND_CODE",
                      userContext: n.userContext
                    })
                  )
                ];
              case 1:
                return s = m.sent(), l = s.jsonBody, p = s.fetchResponse, [
                  2,
                  {
                    status: l.status,
                    fetchResponse: p
                  }
                ];
            }
          });
        });
      },
      consumeCode: function(n) {
        return t(this, void 0, void 0, function() {
          var o, s, l, p;
          return i(this, function(m) {
            switch (m.label) {
              case 0:
                return "userInputCode" in n ? o = {
                  userInputCode: n.userInputCode,
                  deviceId: n.deviceId,
                  preAuthSessionId: n.preAuthSessionId,
                  shouldTryLinkingWithSessionUser: n.shouldTryLinkingWithSessionUser
                } : o = {
                  linkCode: n.linkCode,
                  preAuthSessionId: n.preAuthSessionId,
                  shouldTryLinkingWithSessionUser: n.shouldTryLinkingWithSessionUser
                }, [
                  4,
                  r.post(
                    n.tenantId,
                    "/signinup/code/consume",
                    { body: JSON.stringify(o) },
                    h.default.preparePreAPIHook({
                      recipePreAPIHook: a.preAPIHook,
                      action: "PASSWORDLESS_CONSUME_CODE",
                      userContext: n.userContext,
                      options: n.options
                    }),
                    h.default.preparePostAPIHook({
                      recipePostAPIHook: a.postAPIHook,
                      action: "PASSWORDLESS_CONSUME_CODE",
                      userContext: n.userContext
                    })
                  )
                ];
              case 1:
                return s = m.sent(), l = s.jsonBody, p = s.fetchResponse, l.status !== "OK" ? [
                  2,
                  e(e({}, l), { fetchResponse: p })
                ] : [
                  2,
                  e(
                    e(
                      { status: "OK" },
                      (0, d.normaliseUserResponse)("passwordless", l)
                    ),
                    { fetchResponse: p }
                  )
                ];
            }
          });
        });
      },
      getTenantIdFromURL: function() {
        return (0, d.getQueryParams)("tenantId");
      },
      getLinkCodeFromURL: function() {
        return (0, d.getHashFromLocation)();
      },
      getPreAuthSessionIdFromURL: function() {
        var n = (0, d.getQueryParams)("preAuthSessionId");
        return n === void 0 ? "" : n;
      },
      doesEmailExist: function(n) {
        return t(this, void 0, void 0, function() {
          var o, s, l, p, m;
          return i(this, function(v) {
            switch (v.label) {
              case 0:
                return m = (p = r).get, [
                  4,
                  g.default.getInstanceOrThrow().recipeImplementation.getTenantId({
                    userContext: n.userContext
                  })
                ];
              case 1:
                return [
                  4,
                  m.apply(p, [
                    v.sent(),
                    "/passwordless/email/exists",
                    {},
                    { email: n.email },
                    h.default.preparePreAPIHook({
                      recipePreAPIHook: a.preAPIHook,
                      action: "EMAIL_EXISTS",
                      userContext: n.userContext,
                      options: n.options
                    }),
                    h.default.preparePostAPIHook({
                      recipePostAPIHook: a.postAPIHook,
                      action: "EMAIL_EXISTS",
                      userContext: n.userContext
                    })
                  ])
                ];
              case 2:
                return o = v.sent(), s = o.jsonBody, l = o.fetchResponse, [
                  2,
                  {
                    status: s.status,
                    doesExist: s.exists,
                    fetchResponse: l
                  }
                ];
            }
          });
        });
      },
      doesPhoneNumberExist: function(n) {
        return t(this, void 0, void 0, function() {
          var o, s, l, p, m;
          return i(this, function(v) {
            switch (v.label) {
              case 0:
                return m = (p = r).get, [
                  4,
                  g.default.getInstanceOrThrow().recipeImplementation.getTenantId({
                    userContext: n.userContext
                  })
                ];
              case 1:
                return [
                  4,
                  m.apply(p, [
                    v.sent(),
                    "/passwordless/phonenumber/exists",
                    {},
                    { phoneNumber: n.phoneNumber },
                    h.default.preparePreAPIHook({
                      recipePreAPIHook: a.preAPIHook,
                      action: "PHONE_NUMBER_EXISTS",
                      userContext: n.userContext,
                      options: n.options
                    }),
                    h.default.preparePostAPIHook({
                      recipePostAPIHook: a.postAPIHook,
                      action: "PHONE_NUMBER_EXISTS",
                      userContext: n.userContext
                    })
                  ])
                ];
              case 2:
                return o = v.sent(), s = o.jsonBody, l = o.fetchResponse, [
                  2,
                  {
                    status: s.status,
                    doesExist: s.exists,
                    fetchResponse: l
                  }
                ];
            }
          });
        });
      },
      getLoginAttemptInfo: function() {
        return t(this, void 0, void 0, function() {
          var n;
          return i(this, function(o) {
            switch (o.label) {
              case 0:
                return [
                  4,
                  c.WindowHandlerReference.getReferenceOrThrow().windowHandler.localStorage.getItem(
                    f.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY
                  )
                ];
              case 1:
                if (n = o.sent(), n === null)
                  return [2, void 0];
                try {
                  return [2, JSON.parse(n)];
                } catch {
                  return [2, void 0];
                }
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      },
      setLoginAttemptInfo: function(n) {
        return t(this, void 0, void 0, function() {
          return i(this, function(o) {
            switch (o.label) {
              case 0:
                return [
                  4,
                  c.WindowHandlerReference.getReferenceOrThrow().windowHandler.localStorage.setItem(
                    f.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY,
                    JSON.stringify(
                      e(
                        {
                          // This can make future changes/migrations a lot cleaner
                          version: 1
                        },
                        n.attemptInfo
                      )
                    )
                  )
                ];
              case 1:
                return o.sent(), [
                  2
                  /*return*/
                ];
            }
          });
        });
      },
      clearLoginAttemptInfo: function() {
        return t(this, void 0, void 0, function() {
          return i(this, function(n) {
            return c.WindowHandlerReference.getReferenceOrThrow().windowHandler.localStorage.removeItem(
              f.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY
            ), [
              2
              /*return*/
            ];
          });
        });
      }
    };
  }
  return W.default = u, W.getRecipeImplementation = u, W;
}
var pt;
function Tn() {
  if (pt) return Q;
  pt = 1;
  var e = Q && Q.__extends || /* @__PURE__ */ function() {
    var u = function(a, r) {
      return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, o) {
        n.__proto__ = o;
      } || function(n, o) {
        for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s]);
      }, u(a, r);
    };
    return function(a, r) {
      if (typeof r != "function" && r !== null)
        throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
      u(a, r);
      function n() {
        this.constructor = a;
      }
      a.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
    };
  }(), t = Q && Q.__assign || function() {
    return t = Object.assign || function(u) {
      for (var a, r = 1, n = arguments.length; r < n; r++) {
        a = arguments[r];
        for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (u[o] = a[o]);
      }
      return u;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(Q, "__esModule", { value: !0 }), Q.Recipe = void 0;
  var i = $e(), c = Y(), h = qe(), d = Sn(), g = An(), f = (
    /** @class */
    function(u) {
      e(a, u);
      function a(r) {
        var n = u.call(this, (0, d.normaliseUserInput)(r)) || this, o = new i.default(
          (0, g.default)({
            recipeId: n.config.recipeId,
            appInfo: n.config.appInfo,
            clientType: n.config.clientType,
            preAPIHook: n.config.preAPIHook,
            postAPIHook: n.config.postAPIHook
          })
        );
        return n.recipeImplementation = o.override(n.config.override.functions).build(), n;
      }
      return a.init = function(r) {
        return function(n, o) {
          return a.instance = new a(
            t(t({}, r), { recipeId: a.RECIPE_ID, appInfo: n, clientType: o })
          ), a.instance;
        };
      }, a.getInstanceOrThrow = function() {
        if (a.instance === void 0) {
          var r = "No instance of Passwordless found. Ensure that the 'Passwordless.init' method is called within the 'SuperTokens.init' recipeList.";
          throw r = (0, c.checkForSSRErrorAndAppendIfNeeded)(r), Error(r);
        }
        return a.instance;
      }, a.reset = function() {
        (0, c.isTest)() && (a.instance = void 0);
      }, a.RECIPE_ID = "passwordless", a;
    }(h.default)
  );
  return Q.Recipe = f, Q.default = f, Q;
}
var ht;
function Rn() {
  if (ht) return C;
  ht = 1;
  var e = C && C.__assign || function() {
    return e = Object.assign || function(x) {
      for (var y, w = 1, T = arguments.length; w < T; w++) {
        y = arguments[w];
        for (var A in y) Object.prototype.hasOwnProperty.call(y, A) && (x[A] = y[A]);
      }
      return x;
    }, e.apply(this, arguments);
  }, t = C && C.__awaiter || function(x, y, w, T) {
    function A(_) {
      return _ instanceof w ? _ : new w(function(U) {
        U(_);
      });
    }
    return new (w || (w = Promise))(function(_, U) {
      function O(H) {
        try {
          k(T.next(H));
        } catch (ie) {
          U(ie);
        }
      }
      function F(H) {
        try {
          k(T.throw(H));
        } catch (ie) {
          U(ie);
        }
      }
      function k(H) {
        H.done ? _(H.value) : A(H.value).then(O, F);
      }
      k((T = T.apply(x, y || [])).next());
    });
  }, i = C && C.__generator || function(x, y) {
    var w = {
      label: 0,
      sent: function() {
        if (_[0] & 1) throw _[1];
        return _[1];
      },
      trys: [],
      ops: []
    }, T, A, _, U;
    return U = { next: O(0), throw: O(1), return: O(2) }, typeof Symbol == "function" && (U[Symbol.iterator] = function() {
      return this;
    }), U;
    function O(k) {
      return function(H) {
        return F([k, H]);
      };
    }
    function F(k) {
      if (T) throw new TypeError("Generator is already executing.");
      for (; w; )
        try {
          if (T = 1, A && (_ = k[0] & 2 ? A.return : k[0] ? A.throw || ((_ = A.return) && _.call(A), 0) : A.next) && !(_ = _.call(A, k[1])).done)
            return _;
          switch (A = 0, _ && (k = [k[0] & 2, _.value]), k[0]) {
            case 0:
            case 1:
              _ = k;
              break;
            case 4:
              return w.label++, { value: k[1], done: !1 };
            case 5:
              w.label++, A = k[1], k = [0];
              continue;
            case 7:
              k = w.ops.pop(), w.trys.pop();
              continue;
            default:
              if (_ = w.trys, !(_ = _.length > 0 && _[_.length - 1]) && (k[0] === 6 || k[0] === 2)) {
                w = 0;
                continue;
              }
              if (k[0] === 3 && (!_ || k[1] > _[0] && k[1] < _[3])) {
                w.label = k[1];
                break;
              }
              if (k[0] === 6 && w.label < _[1]) {
                w.label = _[1], _ = k;
                break;
              }
              if (_ && w.label < _[2]) {
                w.label = _[2], w.ops.push(k);
                break;
              }
              _[2] && w.ops.pop(), w.trys.pop();
              continue;
          }
          k = y.call(x, w);
        } catch (H) {
          k = [6, H], A = 0;
        } finally {
          T = _ = 0;
        }
      if (k[0] & 5) throw k[1];
      return { value: k[0] ? k[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(C, "__esModule", { value: !0 }), C.clearLoginAttemptInfo = C.setLoginAttemptInfo = C.getLoginAttemptInfo = C.getTenantIdFromURL = C.getPreAuthSessionIdFromURL = C.getLinkCodeFromURL = C.signOut = C.doesPhoneNumberExist = C.doesEmailExist = C.consumeCode = C.resendCode = C.createCode = C.init = void 0;
  var c = Y(), h = _e(), d = Tn(), g = (
    /** @class */
    function() {
      function x() {
      }
      return x.init = function(y) {
        return d.default.init(y);
      }, x.createCode = function(y) {
        var w, T;
        return t(this, void 0, void 0, function() {
          var A, _, U, O, F;
          return i(this, function(k) {
            switch (k.label) {
              case 0:
                return A = d.default.getInstanceOrThrow(), _ = A.recipeImplementation, U = (0, c.getNormalisedUserContext)(y.userContext), [
                  4,
                  h.default.getInstanceOrThrow().recipeImplementation.getTenantId({
                    userContext: y.userContext
                  })
                ];
              case 1:
                return O = k.sent(), [
                  4,
                  _.createCode(
                    e(e({}, y), {
                      shouldTryLinkingWithSessionUser: (w = y.shouldTryLinkingWithSessionUser) !== null && w !== void 0 ? w : !1,
                      userContext: U
                    })
                  )
                ];
              case 2:
                return F = k.sent(), F.status !== "OK" ? [3, 4] : [
                  4,
                  _.setLoginAttemptInfo({
                    attemptInfo: {
                      tenantId: O,
                      deviceId: F.deviceId,
                      preAuthSessionId: F.preAuthSessionId,
                      shouldTryLinkingWithSessionUser: (T = y.shouldTryLinkingWithSessionUser) !== null && T !== void 0 ? T : !1,
                      flowType: F.flowType
                    },
                    userContext: U
                  })
                ];
              case 3:
                k.sent(), k.label = 4;
              case 4:
                return [2, F];
            }
          });
        });
      }, x.resendCode = function(y) {
        return t(this, void 0, void 0, function() {
          var w, T, A, _;
          return i(this, function(U) {
            switch (U.label) {
              case 0:
                return w = d.default.getInstanceOrThrow(), T = w.recipeImplementation, A = (0, c.getNormalisedUserContext)(
                  y == null ? void 0 : y.userContext
                ), [
                  4,
                  T.getLoginAttemptInfo({
                    userContext: A
                  })
                ];
              case 1:
                return _ = U.sent(), [
                  2,
                  T.resendCode(
                    e(e({}, y), {
                      tenantId: _ == null ? void 0 : _.tenantId,
                      userContext: A,
                      deviceId: _ === void 0 ? "" : _.deviceId,
                      preAuthSessionId: _ === void 0 ? "" : _.preAuthSessionId,
                      shouldTryLinkingWithSessionUser: _ == null ? void 0 : _.shouldTryLinkingWithSessionUser
                    })
                  )
                ];
            }
          });
        });
      }, x.consumeCode = function(y) {
        var w;
        return t(this, void 0, void 0, function() {
          var T, A, _, U, O, F, F, k, H, ie;
          return i(this, function(Pe) {
            switch (Pe.label) {
              case 0:
                return T = d.default.getInstanceOrThrow(), A = T.recipeImplementation, _ = (0, c.getNormalisedUserContext)(
                  y == null ? void 0 : y.userContext
                ), y !== void 0 && "userInputCode" in y ? [
                  4,
                  A.getLoginAttemptInfo({
                    userContext: _
                  })
                ] : [3, 2];
              case 1:
                return O = Pe.sent(), F = (w = O == null ? void 0 : O.shouldTryLinkingWithSessionUser) !== null && w !== void 0 ? w : !1, U = {
                  userInputCode: y.userInputCode,
                  deviceId: O === void 0 ? "" : O.deviceId,
                  preAuthSessionId: O === void 0 ? "" : O.preAuthSessionId,
                  shouldTryLinkingWithSessionUser: F,
                  tenantId: O == null ? void 0 : O.tenantId
                }, [3, 3];
              case 2:
                F = !1, k = A.getLinkCodeFromURL({
                  userContext: _
                }), H = A.getTenantIdFromURL({
                  userContext: _
                }), ie = A.getPreAuthSessionIdFromURL({
                  userContext: _
                }), U = {
                  tenantId: H,
                  linkCode: k,
                  preAuthSessionId: ie,
                  shouldTryLinkingWithSessionUser: F
                }, Pe.label = 3;
              case 3:
                return [
                  2,
                  A.consumeCode(
                    e(
                      {
                        userContext: _,
                        options: y == null ? void 0 : y.options
                      },
                      U
                    )
                  )
                ];
            }
          });
        });
      }, x.getLinkCodeFromURL = function(y) {
        return d.default.getInstanceOrThrow().recipeImplementation.getLinkCodeFromURL(
          e(e({}, y), {
            userContext: (0, c.getNormalisedUserContext)(
              y == null ? void 0 : y.userContext
            )
          })
        );
      }, x.getPreAuthSessionIdFromURL = function(y) {
        return d.default.getInstanceOrThrow().recipeImplementation.getPreAuthSessionIdFromURL(
          e(e({}, y), {
            userContext: (0, c.getNormalisedUserContext)(
              y == null ? void 0 : y.userContext
            )
          })
        );
      }, x.getTenantIdFromURL = function(y) {
        return d.default.getInstanceOrThrow().recipeImplementation.getTenantIdFromURL(
          e(e({}, y), {
            userContext: (0, c.getNormalisedUserContext)(
              y == null ? void 0 : y.userContext
            )
          })
        );
      }, x.doesEmailExist = function(y) {
        return d.default.getInstanceOrThrow().recipeImplementation.doesEmailExist(
          e(e({}, y), { userContext: (0, c.getNormalisedUserContext)(y.userContext) })
        );
      }, x.doesPhoneNumberExist = function(y) {
        return d.default.getInstanceOrThrow().recipeImplementation.doesPhoneNumberExist(
          e(e({}, y), { userContext: (0, c.getNormalisedUserContext)(y.userContext) })
        );
      }, x.getLoginAttemptInfo = function(y) {
        return d.default.getInstanceOrThrow().recipeImplementation.getLoginAttemptInfo(
          e(e({}, y), {
            userContext: (0, c.getNormalisedUserContext)(
              y == null ? void 0 : y.userContext
            )
          })
        );
      }, x.setLoginAttemptInfo = function(y) {
        return t(this, void 0, void 0, function() {
          var w, T, A;
          return i(this, function(_) {
            switch (_.label) {
              case 0:
                return w = (0, c.getNormalisedUserContext)(y.userContext), T = d.default.getInstanceOrThrow(), [
                  4,
                  h.default.getInstanceOrThrow().recipeImplementation.getTenantId({ userContext: w })
                ];
              case 1:
                return A = _.sent(), [
                  2,
                  T.recipeImplementation.setLoginAttemptInfo({
                    attemptInfo: e(
                      {
                        tenantId: A,
                        shouldTryLinkingWithSessionUser: y.attemptInfo.shouldTryLinkingWithSessionUser
                      },
                      y.attemptInfo
                    ),
                    userContext: w
                  })
                ];
            }
          });
        });
      }, x.clearLoginAttemptInfo = function(y) {
        return d.default.getInstanceOrThrow().recipeImplementation.clearLoginAttemptInfo(
          e(e({}, y), {
            userContext: (0, c.getNormalisedUserContext)(
              y == null ? void 0 : y.userContext
            )
          })
        );
      }, x.signOut = function(y) {
        return d.default.getInstanceOrThrow().signOut({
          userContext: (0, c.getNormalisedUserContext)(
            y == null ? void 0 : y.userContext
          )
        });
      }, x;
    }()
  );
  C.default = g;
  var f = g.init;
  C.init = f;
  var u = g.createCode;
  C.createCode = u;
  var a = g.resendCode;
  C.resendCode = a;
  var r = g.consumeCode;
  C.consumeCode = r;
  var n = g.doesEmailExist;
  C.doesEmailExist = n;
  var o = g.doesPhoneNumberExist;
  C.doesPhoneNumberExist = o;
  var s = g.signOut;
  C.signOut = s;
  var l = g.getLinkCodeFromURL;
  C.getLinkCodeFromURL = l;
  var p = g.getPreAuthSessionIdFromURL;
  C.getPreAuthSessionIdFromURL = p;
  var m = g.getTenantIdFromURL;
  C.getTenantIdFromURL = m;
  var v = g.getLoginAttemptInfo;
  C.getLoginAttemptInfo = v;
  var I = g.setLoginAttemptInfo;
  C.setLoginAttemptInfo = I;
  var P = g.clearLoginAttemptInfo;
  return C.clearLoginAttemptInfo = P, C;
}
var vt;
function On() {
  return vt || (vt = 1, function(e) {
    function t(i) {
      for (var c in i) e.hasOwnProperty(c) || (e[c] = i[c]);
    }
    e.__esModule = !0, t(Rn());
  }(Re)), Re;
}
var Z = On();
const En = /* @__PURE__ */ Le(Z);
var Oe = {}, E = {}, z = {}, oe = {}, mt;
function $n() {
  if (mt) return oe;
  mt = 1;
  var e = oe && oe.__assign || function() {
    return e = Object.assign || function(c) {
      for (var h, d = 1, g = arguments.length; d < g; d++) {
        h = arguments[d];
        for (var f in h) Object.prototype.hasOwnProperty.call(h, f) && (c[f] = h[f]);
      }
      return c;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(oe, "__esModule", { value: !0 }), oe.normaliseUserInput = void 0;
  var t = De();
  function i(c) {
    var h = e(
      {
        functions: function(d) {
          return d;
        }
      },
      c.override
    );
    return e(e({}, (0, t.normaliseAuthRecipe)(c)), { override: h });
  }
  return oe.normaliseUserInput = i, oe;
}
var q = {}, gt;
function Un() {
  if (gt) return q;
  gt = 1;
  var e = q && q.__assign || function() {
    return e = Object.assign || function(u) {
      for (var a, r = 1, n = arguments.length; r < n; r++) {
        a = arguments[r];
        for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (u[o] = a[o]);
      }
      return u;
    }, e.apply(this, arguments);
  }, t = q && q.__awaiter || function(u, a, r, n) {
    function o(s) {
      return s instanceof r ? s : new r(function(l) {
        l(s);
      });
    }
    return new (r || (r = Promise))(function(s, l) {
      function p(I) {
        try {
          v(n.next(I));
        } catch (P) {
          l(P);
        }
      }
      function m(I) {
        try {
          v(n.throw(I));
        } catch (P) {
          l(P);
        }
      }
      function v(I) {
        I.done ? s(I.value) : o(I.value).then(p, m);
      }
      v((n = n.apply(u, a || [])).next());
    });
  }, i = q && q.__generator || function(u, a) {
    var r = {
      label: 0,
      sent: function() {
        if (s[0] & 1) throw s[1];
        return s[1];
      },
      trys: [],
      ops: []
    }, n, o, s, l;
    return l = { next: p(0), throw: p(1), return: p(2) }, typeof Symbol == "function" && (l[Symbol.iterator] = function() {
      return this;
    }), l;
    function p(v) {
      return function(I) {
        return m([v, I]);
      };
    }
    function m(v) {
      if (n) throw new TypeError("Generator is already executing.");
      for (; r; )
        try {
          if (n = 1, o && (s = v[0] & 2 ? o.return : v[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, v[1])).done)
            return s;
          switch (o = 0, s && (v = [v[0] & 2, s.value]), v[0]) {
            case 0:
            case 1:
              s = v;
              break;
            case 4:
              return r.label++, { value: v[1], done: !1 };
            case 5:
              r.label++, o = v[1], v = [0];
              continue;
            case 7:
              v = r.ops.pop(), r.trys.pop();
              continue;
            default:
              if (s = r.trys, !(s = s.length > 0 && s[s.length - 1]) && (v[0] === 6 || v[0] === 2)) {
                r = 0;
                continue;
              }
              if (v[0] === 3 && (!s || v[1] > s[0] && v[1] < s[3])) {
                r.label = v[1];
                break;
              }
              if (v[0] === 6 && r.label < s[1]) {
                r.label = s[1], s = v;
                break;
              }
              if (s && r.label < s[2]) {
                r.label = s[2], r.ops.push(v);
                break;
              }
              s[2] && r.ops.pop(), r.trys.pop();
              continue;
          }
          v = a.call(u, r);
        } catch (I) {
          v = [6, I], o = 0;
        } finally {
          n = s = 0;
        }
      if (v[0] & 5) throw v[1];
      return { value: v[0] ? v[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(q, "__esModule", { value: !0 }), q.getRecipeImplementation = void 0;
  var c = We(), h = Y(), d = Ht(), g = Ue();
  function f(u) {
    var a = new c.default(u.recipeId, u.appInfo);
    return {
      getStateAndOtherInfoFromStorage: function() {
        var r = g.WindowHandlerReference.getReferenceOrThrow().windowHandler.sessionStorage.getItemSync(
          "supertokens-oauth-state-2"
        );
        if (r !== null)
          try {
            return JSON.parse(r);
          } catch {
            return;
          }
      },
      setStateAndOtherInfoToStorage: function(r) {
        return t(this, void 0, void 0, function() {
          var n;
          return i(this, function(o) {
            switch (o.label) {
              case 0:
                return n = JSON.stringify(e({}, r.state)), [
                  4,
                  g.WindowHandlerReference.getReferenceOrThrow().windowHandler.sessionStorage.setItem(
                    "supertokens-oauth-state-2",
                    n
                  )
                ];
              case 1:
                return o.sent(), [
                  2
                  /*return*/
                ];
            }
          });
        });
      },
      getAuthorisationURLWithQueryParamsAndSetState: function(r) {
        return t(this, void 0, void 0, function() {
          var n, o, s, l, p;
          return i(this, function(m) {
            switch (m.label) {
              case 0:
                return [
                  4,
                  this.getAuthorisationURLFromBackend({
                    thirdPartyId: r.thirdPartyId,
                    tenantId: r.tenantId,
                    redirectURIOnProviderDashboard: r.redirectURIOnProviderDashboard || r.frontendRedirectURI,
                    userContext: r.userContext,
                    options: r.options
                  })
                ];
              case 1:
                return n = m.sent(), o = r.redirectURIOnProviderDashboard !== void 0 && r.frontendRedirectURI !== r.redirectURIOnProviderDashboard ? r.frontendRedirectURI : void 0, s = this.generateStateToSendToOAuthProvider({
                  frontendRedirectURI: o,
                  userContext: r.userContext
                }), l = Date.now() + 1e3 * 60 * 10, [
                  4,
                  this.setStateAndOtherInfoToStorage({
                    state: {
                      stateForAuthProvider: s,
                      thirdPartyId: r.thirdPartyId,
                      tenantId: r.tenantId,
                      expiresAt: l,
                      redirectURIOnProviderDashboard: r.redirectURIOnProviderDashboard || r.frontendRedirectURI,
                      shouldTryLinkingWithSessionUser: r.shouldTryLinkingWithSessionUser,
                      pkceCodeVerifier: n.pkceCodeVerifier
                    },
                    userContext: r.userContext
                  })
                ];
              case 2:
                return m.sent(), p = (0, h.appendQueryParamsToURL)(n.urlWithQueryParams, {
                  state: s
                }), [2, p];
            }
          });
        });
      },
      getAuthorisationURLFromBackend: function(r) {
        return t(this, void 0, void 0, function() {
          var n, o, s, l;
          return i(this, function(p) {
            switch (p.label) {
              case 0:
                return n = {
                  thirdPartyId: r.thirdPartyId,
                  redirectURIOnProviderDashboard: r.redirectURIOnProviderDashboard
                }, u.clientType !== void 0 && (n.clientType = u.clientType), [
                  4,
                  a.get(
                    r.tenantId,
                    "/authorisationurl",
                    {},
                    n,
                    c.default.preparePreAPIHook({
                      recipePreAPIHook: u.preAPIHook,
                      action: "GET_AUTHORISATION_URL",
                      options: r.options,
                      userContext: r.userContext
                    }),
                    c.default.preparePostAPIHook({
                      recipePostAPIHook: u.postAPIHook,
                      action: "GET_AUTHORISATION_URL",
                      userContext: r.userContext
                    })
                  )
                ];
              case 1:
                return o = p.sent(), s = o.jsonBody, l = o.fetchResponse, [
                  2,
                  {
                    status: "OK",
                    urlWithQueryParams: s.urlWithQueryParams,
                    pkceCodeVerifier: s.pkceCodeVerifier,
                    fetchResponse: l
                  }
                ];
            }
          });
        });
      },
      signInAndUp: function(r) {
        return t(this, void 0, void 0, function() {
          var n, o, s, l, p, m, v, I, P;
          return i(this, function(x) {
            switch (x.label) {
              case 0:
                return n = this.getStateAndOtherInfoFromStorage({
                  userContext: r.userContext
                }), o = this.getAuthStateFromURL({
                  userContext: r.userContext
                }), [
                  4,
                  this.verifyAndGetStateOrThrowError({
                    stateFromAuthProvider: o,
                    stateObjectFromStorage: n,
                    userContext: r.userContext
                  })
                ];
              case 1:
                if (s = x.sent(), l = this.getAuthErrorFromURL({
                  userContext: r.userContext
                }), l !== void 0)
                  throw new Error("Auth provider responded with error: ".concat(l));
                return p = (0, h.getAllQueryParams)(), m = Object.fromEntries(p), [
                  4,
                  a.post(
                    s.tenantId,
                    "/signinup",
                    {
                      body: JSON.stringify({
                        thirdPartyId: s.thirdPartyId,
                        clientType: u.clientType,
                        redirectURIInfo: {
                          redirectURIOnProviderDashboard: s.redirectURIOnProviderDashboard,
                          redirectURIQueryParams: m,
                          pkceCodeVerifier: s.pkceCodeVerifier
                        },
                        shouldTryLinkingWithSessionUser: s.shouldTryLinkingWithSessionUser
                      })
                    },
                    c.default.preparePreAPIHook({
                      recipePreAPIHook: u.preAPIHook,
                      action: "THIRD_PARTY_SIGN_IN_UP",
                      options: r.options,
                      userContext: r.userContext
                    }),
                    c.default.preparePostAPIHook({
                      recipePostAPIHook: u.postAPIHook,
                      action: "THIRD_PARTY_SIGN_IN_UP",
                      userContext: r.userContext
                    })
                  )
                ];
              case 2:
                if (v = x.sent(), I = v.jsonBody, P = v.fetchResponse, I.status === "FIELD_ERROR")
                  throw new d.default(I.error);
                return I.status !== "OK" ? [
                  2,
                  e(e({}, I), { fetchResponse: P })
                ] : [
                  2,
                  e(
                    e(
                      { status: "OK" },
                      (0, h.normaliseUserResponse)("thirdparty", I)
                    ),
                    { fetchResponse: P }
                  )
                ];
            }
          });
        });
      },
      generateStateToSendToOAuthProvider: function(r) {
        var n = {
          state: "".concat(1e20).replace(/[018]/g, function(o) {
            return (parseInt(o) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> parseInt(o) / 4).toString(16);
          })
        };
        return r !== void 0 && r.frontendRedirectURI !== void 0 && (n.frontendRedirectURI = r.frontendRedirectURI), btoa(JSON.stringify(n));
      },
      verifyAndGetStateOrThrowError: function(r) {
        return t(this, void 0, void 0, function() {
          return i(this, function(n) {
            if (r.stateObjectFromStorage === void 0 || r.stateObjectFromStorage.stateForAuthProvider === void 0)
              throw new Error("No valid auth state present in session storage");
            if (r.stateFromAuthProvider === void 0)
              throw new Error("No state recieved from auth provider");
            if (r.stateObjectFromStorage.expiresAt < Date.now())
              throw new Error("Auth state verification failed. The auth provider took too long to respond");
            if (r.stateFromAuthProvider !== r.stateObjectFromStorage.stateForAuthProvider)
              throw new Error(
                "Auth state verification failed. The auth provider responded with an invalid state"
              );
            return [2, r.stateObjectFromStorage];
          });
        });
      },
      getAuthErrorFromURL: function() {
        return (0, h.getQueryParams)("error");
      },
      getAuthStateFromURL: function() {
        var r = (0, h.getQueryParams)("state");
        return r === void 0 ? "" : r;
      }
    };
  }
  return q.default = f, q.getRecipeImplementation = f, q;
}
var yt;
function Ln() {
  if (yt) return z;
  yt = 1;
  var e = z && z.__extends || /* @__PURE__ */ function() {
    var u = function(a, r) {
      return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, o) {
        n.__proto__ = o;
      } || function(n, o) {
        for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s]);
      }, u(a, r);
    };
    return function(a, r) {
      if (typeof r != "function" && r !== null)
        throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
      u(a, r);
      function n() {
        this.constructor = a;
      }
      a.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
    };
  }(), t = z && z.__assign || function() {
    return t = Object.assign || function(u) {
      for (var a, r = 1, n = arguments.length; r < n; r++) {
        a = arguments[r];
        for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (u[o] = a[o]);
      }
      return u;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(z, "__esModule", { value: !0 }), z.Recipe = void 0;
  var i = $n(), c = $e(), h = Un(), d = Y(), g = qe(), f = (
    /** @class */
    function(u) {
      e(a, u);
      function a(r) {
        var n = u.call(this, (0, i.normaliseUserInput)(r)) || this, o = new c.default(
          (0, h.default)({
            recipeId: n.config.recipeId,
            appInfo: n.config.appInfo,
            clientType: n.config.clientType,
            preAPIHook: n.config.preAPIHook,
            postAPIHook: n.config.postAPIHook
          })
        );
        return n.recipeImplementation = o.override(n.config.override.functions).build(), n;
      }
      return a.init = function(r) {
        return function(n, o) {
          return a.instance = new a(
            t(t({}, r), { recipeId: a.RECIPE_ID, appInfo: n, clientType: o })
          ), a.instance;
        };
      }, a.getInstanceOrThrow = function() {
        if (a.instance === void 0) {
          var r = "No instance of ThirdParty found. Ensure that the 'ThirdParty.init' method is called within the 'SuperTokens.init' recipeList.";
          throw r = (0, d.checkForSSRErrorAndAppendIfNeeded)(r), Error(r);
        }
        return a.instance;
      }, a.reset = function() {
        (0, d.isTest)() && (a.instance = void 0);
      }, a.RECIPE_ID = "thirdparty", a;
    }(g.default)
  );
  return z.Recipe = f, z.default = f, z;
}
var It;
function Nn() {
  if (It) return E;
  It = 1;
  var e = E && E.__assign || function() {
    return e = Object.assign || function(o) {
      for (var s, l = 1, p = arguments.length; l < p; l++) {
        s = arguments[l];
        for (var m in s) Object.prototype.hasOwnProperty.call(s, m) && (o[m] = s[m]);
      }
      return o;
    }, e.apply(this, arguments);
  }, t = E && E.__awaiter || function(o, s, l, p) {
    function m(v) {
      return v instanceof l ? v : new l(function(I) {
        I(v);
      });
    }
    return new (l || (l = Promise))(function(v, I) {
      function P(w) {
        try {
          y(p.next(w));
        } catch (T) {
          I(T);
        }
      }
      function x(w) {
        try {
          y(p.throw(w));
        } catch (T) {
          I(T);
        }
      }
      function y(w) {
        w.done ? v(w.value) : m(w.value).then(P, x);
      }
      y((p = p.apply(o, s || [])).next());
    });
  }, i = E && E.__generator || function(o, s) {
    var l = {
      label: 0,
      sent: function() {
        if (v[0] & 1) throw v[1];
        return v[1];
      },
      trys: [],
      ops: []
    }, p, m, v, I;
    return I = { next: P(0), throw: P(1), return: P(2) }, typeof Symbol == "function" && (I[Symbol.iterator] = function() {
      return this;
    }), I;
    function P(y) {
      return function(w) {
        return x([y, w]);
      };
    }
    function x(y) {
      if (p) throw new TypeError("Generator is already executing.");
      for (; l; )
        try {
          if (p = 1, m && (v = y[0] & 2 ? m.return : y[0] ? m.throw || ((v = m.return) && v.call(m), 0) : m.next) && !(v = v.call(m, y[1])).done)
            return v;
          switch (m = 0, v && (y = [y[0] & 2, v.value]), y[0]) {
            case 0:
            case 1:
              v = y;
              break;
            case 4:
              return l.label++, { value: y[1], done: !1 };
            case 5:
              l.label++, m = y[1], y = [0];
              continue;
            case 7:
              y = l.ops.pop(), l.trys.pop();
              continue;
            default:
              if (v = l.trys, !(v = v.length > 0 && v[v.length - 1]) && (y[0] === 6 || y[0] === 2)) {
                l = 0;
                continue;
              }
              if (y[0] === 3 && (!v || y[1] > v[0] && y[1] < v[3])) {
                l.label = y[1];
                break;
              }
              if (y[0] === 6 && l.label < v[1]) {
                l.label = v[1], v = y;
                break;
              }
              if (v && l.label < v[2]) {
                l.label = v[2], l.ops.push(y);
                break;
              }
              v[2] && l.ops.pop(), l.trys.pop();
              continue;
          }
          y = s.call(o, l);
        } catch (w) {
          y = [6, w], m = 0;
        } finally {
          p = v = 0;
        }
      if (y[0] & 5) throw y[1];
      return { value: y[0] ? y[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(E, "__esModule", { value: !0 }), E.signOut = E.signInAndUp = E.getAuthorisationURLWithQueryParamsAndSetState = E.getStateAndOtherInfoFromStorage = E.init = void 0;
  var c = Y(), h = _e(), d = Ln(), g = (
    /** @class */
    function() {
      function o() {
      }
      return o.init = function(s) {
        return d.default.init(s);
      }, o.signOut = function(s) {
        return d.default.getInstanceOrThrow().signOut({
          userContext: (0, c.getNormalisedUserContext)(
            s == null ? void 0 : s.userContext
          )
        });
      }, o.getStateAndOtherInfoFromStorage = function(s) {
        return d.default.getInstanceOrThrow().recipeImplementation.getStateAndOtherInfoFromStorage(
          e(e({}, s), {
            userContext: (0, c.getNormalisedUserContext)(
              s == null ? void 0 : s.userContext
            )
          })
        );
      }, o.getAuthorisationURLWithQueryParamsAndSetState = function(s) {
        return t(this, void 0, void 0, function() {
          var l, p, m;
          return i(this, function(v) {
            switch (v.label) {
              case 0:
                return l = (0, c.getNormalisedUserContext)(s.userContext), p = d.default.getInstanceOrThrow(), [
                  4,
                  h.default.getInstanceOrThrow().recipeImplementation.getTenantId({ userContext: l })
                ];
              case 1:
                return m = v.sent(), [
                  2,
                  p.recipeImplementation.getAuthorisationURLWithQueryParamsAndSetState(
                    e(e({ tenantId: m }, s), {
                      shouldTryLinkingWithSessionUser: s == null ? void 0 : s.shouldTryLinkingWithSessionUser,
                      userContext: l
                    })
                  )
                ];
            }
          });
        });
      }, o.signInAndUp = function(s) {
        return d.default.getInstanceOrThrow().recipeImplementation.signInAndUp(
          e(e({}, s), {
            userContext: (0, c.getNormalisedUserContext)(
              s == null ? void 0 : s.userContext
            )
          })
        );
      }, o;
    }()
  );
  E.default = g;
  var f = g.init;
  E.init = f;
  var u = g.getAuthorisationURLWithQueryParamsAndSetState;
  E.getAuthorisationURLWithQueryParamsAndSetState = u;
  var a = g.getStateAndOtherInfoFromStorage;
  E.getStateAndOtherInfoFromStorage = a;
  var r = g.signInAndUp;
  E.signInAndUp = r;
  var n = g.signOut;
  return E.signOut = n, E;
}
var _t;
function Fn() {
  return _t || (_t = 1, function(e) {
    function t(i) {
      for (var c in i) e.hasOwnProperty(c) || (e[c] = i[c]);
    }
    e.__esModule = !0, t(Nn());
  }(Oe)), Oe;
}
var Me = Fn();
const jn = /* @__PURE__ */ Le(Me), Hn = { class: "gsi-material-button-content-wrapper" }, Dn = { class: "gsi-material-button-icon" }, Wn = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  style: { display: "block" }
}, qn = { class: "gsi-material-button-contents" }, Mn = { style: { display: "none" } }, Vn = /* @__PURE__ */ D({
  __name: "GoogleAuthIcon",
  props: {
    authType: { default: "Sign in" }
  },
  setup(e) {
    async function t() {
      try {
        const i = await Me.getAuthorisationURLWithQueryParamsAndSetState({
          thirdPartyId: "google",
          // This is where Google should redirect the user back after login or error.
          // This URL goes on the Google's dashboard as well: https://support.google.com/cloud/answer/6158849?hl=en
          frontendRedirectURI: "https://localhost:5173/signup?thirdPartyId=google"
        });
        window.location.assign(i);
      } catch (i) {
        console.error("Google sign in: ", i.message);
      }
    }
    return (i, c) => (R(), N("button", {
      class: "gsi-material-button",
      onClick: t
    }, [
      c[1] || (c[1] = b("div", { class: "gsi-material-button-state" }, null, -1)),
      b("div", Hn, [
        b("div", Dn, [
          (R(), N("svg", Wn, c[0] || (c[0] = [
            nn('<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" data-v-521170bf></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" data-v-521170bf></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" data-v-521170bf></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" data-v-521170bf></path><path fill="none" d="M0 0h48v48H0z" data-v-521170bf></path>', 5)
          ])))
        ]),
        b("span", qn, ee(i.authType) + " with Google", 1),
        b("span", Mn, ee(i.authType) + " with Google", 1)
      ])
    ]));
  }
}), Bn = /* @__PURE__ */ $t(Vn, [["__scopeId", "data-v-521170bf"]]);
var Gn = {
  name: "BaseEditableHolder",
  extends: Xt,
  emits: ["update:modelValue", "value-change"],
  props: {
    modelValue: {
      type: null,
      default: void 0
    },
    defaultValue: {
      type: null,
      default: void 0
    },
    name: {
      type: String,
      default: void 0
    },
    invalid: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    formControl: {
      type: Object,
      default: void 0
    }
  },
  inject: {
    $parentInstance: {
      default: void 0
    },
    $pcForm: {
      default: void 0
    },
    $pcFormField: {
      default: void 0
    }
  },
  data: function() {
    return {
      d_value: this.defaultValue || this.modelValue
    };
  },
  watch: {
    modelValue: function(t) {
      this.d_value = t;
    },
    defaultValue: function(t) {
      this.d_value = t;
    },
    $formName: {
      immediate: !0,
      handler: function(t) {
        var i, c;
        this.formField = ((i = this.$pcForm) === null || i === void 0 || (c = i.register) === null || c === void 0 ? void 0 : c.call(i, t, this.$formControl)) || {};
      }
    },
    $formControl: {
      immediate: !0,
      handler: function(t) {
        var i, c;
        this.formField = ((i = this.$pcForm) === null || i === void 0 || (c = i.register) === null || c === void 0 ? void 0 : c.call(i, this.$formName, t)) || {};
      }
    },
    $formDefaultValue: {
      immediate: !0,
      handler: function(t) {
        this.d_value !== t && (this.d_value = t);
      }
    },
    $formValue: {
      immediate: !1,
      handler: function(t) {
        var i;
        (i = this.$pcForm) !== null && i !== void 0 && i.getFieldState(this.$formName) && t !== this.d_value && (this.d_value = t);
      }
    }
  },
  formField: {},
  methods: {
    writeValue: function(t, i) {
      var c, h;
      this.controlled && (this.d_value = t, this.$emit("update:modelValue", t)), this.$emit("value-change", t), (c = (h = this.formField).onChange) === null || c === void 0 || c.call(h, {
        originalEvent: i,
        value: t
      });
    },
    // @todo move to @primeuix/utils
    findNonEmpty: function() {
      for (var t = arguments.length, i = new Array(t), c = 0; c < t; c++)
        i[c] = arguments[c];
      return i.find(Be);
    }
  },
  computed: {
    $filled: function() {
      return Be(this.d_value);
    },
    $invalid: function() {
      var t, i;
      return !this.$formNovalidate && this.findNonEmpty(this.invalid, (t = this.$pcFormField) === null || t === void 0 || (t = t.$field) === null || t === void 0 ? void 0 : t.invalid, (i = this.$pcForm) === null || i === void 0 || (i = i.getFieldState(this.$formName)) === null || i === void 0 ? void 0 : i.invalid);
    },
    $formName: function() {
      var t;
      return this.$formNovalidate ? void 0 : this.name || ((t = this.$formControl) === null || t === void 0 ? void 0 : t.name);
    },
    $formControl: function() {
      var t;
      return this.formControl || ((t = this.$pcFormField) === null || t === void 0 ? void 0 : t.formControl);
    },
    $formNovalidate: function() {
      var t;
      return (t = this.$formControl) === null || t === void 0 ? void 0 : t.novalidate;
    },
    $formDefaultValue: function() {
      var t, i;
      return this.findNonEmpty(this.d_value, (t = this.$pcFormField) === null || t === void 0 ? void 0 : t.initialValue, (i = this.$pcForm) === null || i === void 0 || (i = i.initialValues) === null || i === void 0 ? void 0 : i[this.$formName]);
    },
    $formValue: function() {
      var t, i;
      return this.findNonEmpty((t = this.$pcFormField) === null || t === void 0 || (t = t.$field) === null || t === void 0 ? void 0 : t.value, (i = this.$pcForm) === null || i === void 0 || (i = i.getFieldState(this.$formName)) === null || i === void 0 ? void 0 : i.value);
    },
    controlled: function() {
      return this.$inProps.hasOwnProperty("modelValue") || !this.$inProps.hasOwnProperty("modelValue") && !this.$inProps.hasOwnProperty("defaultValue");
    },
    // @deprecated use $filled instead
    filled: function() {
      return this.$filled;
    }
  }
}, Dt = {
  name: "BaseInput",
  extends: Gn,
  props: {
    size: {
      type: String,
      default: null
    },
    fluid: {
      type: Boolean,
      default: null
    },
    variant: {
      type: String,
      default: null
    }
  },
  inject: {
    $parentInstance: {
      default: void 0
    },
    $pcFluid: {
      default: void 0
    }
  },
  computed: {
    $variant: function() {
      var t;
      return (t = this.variant) !== null && t !== void 0 ? t : this.$primevue.config.inputStyle || this.$primevue.config.inputVariant;
    },
    $fluid: function() {
      var t;
      return (t = this.fluid) !== null && t !== void 0 ? t : !!this.$pcFluid;
    },
    // @deprecated use $fluid instead
    hasFluid: function() {
      return this.$fluid;
    }
  }
}, Kn = ({ dt: e }) => `
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${e("inputtext.color")};
    background: ${e("inputtext.background")};
    padding-block: ${e("inputtext.padding.y")};
    padding-inline: ${e("inputtext.padding.x")};
    border: 1px solid ${e("inputtext.border.color")};
    transition: background ${e("inputtext.transition.duration")}, color ${e("inputtext.transition.duration")}, border-color ${e("inputtext.transition.duration")}, outline-color ${e("inputtext.transition.duration")}, box-shadow ${e("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${e("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("inputtext.shadow")};
}

.p-inputtext:enabled:hover {
    border-color: ${e("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${e("inputtext.focus.border.color")};
    box-shadow: ${e("inputtext.focus.ring.shadow")};
    outline: ${e("inputtext.focus.ring.width")} ${e("inputtext.focus.ring.style")} ${e("inputtext.focus.ring.color")};
    outline-offset: ${e("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${e("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${e("inputtext.filled.background")};
}

.p-inputtext.p-variant-filled:enabled:hover {
    background: ${e("inputtext.filled.hover.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${e("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${e("inputtext.disabled.background")};
    color: ${e("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${e("inputtext.placeholder.color")};
}

.p-inputtext.p-invalid::placeholder {
    color: ${e("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${e("inputtext.sm.font.size")};
    padding-block: ${e("inputtext.sm.padding.y")};
    padding-inline: ${e("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${e("inputtext.lg.font.size")};
    padding-block: ${e("inputtext.lg.padding.y")};
    padding-inline: ${e("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`, Qn = {
  root: function(t) {
    var i = t.instance, c = t.props;
    return ["p-inputtext p-component", {
      "p-filled": i.$filled,
      "p-inputtext-sm p-inputfield-sm": c.size === "small",
      "p-inputtext-lg p-inputfield-lg": c.size === "large",
      "p-invalid": i.$invalid,
      "p-variant-filled": i.$variant === "filled",
      "p-inputtext-fluid": i.$fluid
    }];
  }
}, zn = Ut.extend({
  name: "inputtext",
  style: Kn,
  classes: Qn
}), Jn = {
  name: "BaseInputText",
  extends: Dt,
  style: zn,
  provide: function() {
    return {
      $pcInputText: this,
      $parentInstance: this
    };
  }
};
function ve(e) {
  "@babel/helpers - typeof";
  return ve = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ve(e);
}
function Yn(e, t, i) {
  return (t = Xn(t)) in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i, e;
}
function Xn(e) {
  var t = Zn(e, "string");
  return ve(t) == "symbol" ? t : t + "";
}
function Zn(e, t) {
  if (ve(e) != "object" || !e) return e;
  var i = e[Symbol.toPrimitive];
  if (i !== void 0) {
    var c = i.call(e, t);
    if (ve(c) != "object") return c;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var we = {
  name: "InputText",
  extends: Jn,
  inheritAttrs: !1,
  methods: {
    onInput: function(t) {
      this.writeValue(t.target.value, t);
    }
  },
  computed: {
    attrs: function() {
      return Fe(this.ptmi("root", {
        context: {
          filled: this.$filled,
          disabled: this.disabled
        }
      }), this.formField);
    },
    dataP: function() {
      return Zt(Yn({
        invalid: this.$invalid,
        fluid: this.$fluid,
        filled: this.$variant === "filled"
      }, this.size, this.size));
    }
  }
}, er = ["value", "name", "disabled", "aria-invalid", "data-p"];
function tr(e, t, i, c, h, d) {
  return R(), N("input", Fe({
    type: "text",
    class: e.cx("root"),
    value: e.d_value,
    name: e.name,
    disabled: e.disabled,
    "aria-invalid": e.$invalid || void 0,
    "data-p": d.dataP,
    onInput: t[0] || (t[0] = function() {
      return d.onInput && d.onInput.apply(d, arguments);
    })
  }, d.attrs), null, 16, er);
}
we.render = tr;
var nr = Symbol();
function rr() {
  var e = ae(nr);
  if (!e)
    throw new Error("No PrimeVue Toast provided!");
  return e;
}
const or = {
  error: {
    somethingWentWrong: {
      summary: "Something went wrong",
      detail: "Sorry but something isnt working as expected! Please try again later. We have been notified of the issue."
    }
  }
}, ir = {
  DEFAULT_LIFE: 4e3
};
function le() {
  const e = rr();
  function t({
    severity: i,
    summary: c,
    detail: h,
    life: d = ir.DEFAULT_LIFE,
    error: g
  }) {
    e.add({
      severity: i,
      summary: c,
      detail: h,
      life: d
    }), i === "danger" && g && console.error(g);
  }
  return { addToast: t, toastContent: or };
}
const sr = { class: "h1" }, ar = /* @__PURE__ */ D({
  __name: "SignInUpForm",
  props: {
    pageAuthType: {}
  },
  emits: ["sendCodeSuccess"],
  setup(e, { emit: t }) {
    const i = t, { addToast: c, toastContent: h } = le(), d = j(!1), g = j("mytestemail1235667@gmail.com");
    async function f() {
      try {
        d.value = !0;
        const u = await Z.createCode({
          email: g.value,
          shouldTryLinkingWithSessionUser: !1,
          // If true, SuperTokens will attempt to link the passwordless code to an existing session user
          userContext: {}
          // Optionally include user context
        });
        console.log("Create code response: ", u), u.status === "SIGN_IN_UP_NOT_ALLOWED" ? c({
          severity: "error",
          summary: h.error.somethingWentWrong.summary,
          detail: h.error.somethingWentWrong.detail,
          error: u
        }) : i("sendCodeSuccess", !0);
      } catch (u) {
        i("sendCodeSuccess", !1), c({
          severity: "error",
          summary: h.error.somethingWentWrong.summary,
          detail: h.error.somethingWentWrong.detail,
          error: u
        });
      } finally {
        d.value = !1;
      }
    }
    return (u, a) => (R(), M(S(ue), { class: "max-w-xl p-12 w-full" }, {
      title: $(() => [
        b("h1", sr, ee(u.pageAuthType), 1)
      ]),
      content: $(() => [
        b("section", null, [
          L(Bn, { authType: u.pageAuthType }, null, 8, ["authType"]),
          a[3] || (a[3] = b("div", { class: "flex items-center my-10" }, [
            b("hr", { class: "flex-1 border-gray-300" }),
            b("span", { class: "px-4 text-gray-500 uppercase" }, "Or"),
            b("hr", { class: "flex-1 border-gray-300" })
          ], -1)),
          b("form", {
            onSubmit: a[1] || (a[1] = je(() => {
            }, ["prevent"])),
            class: "spacing-form"
          }, [
            a[2] || (a[2] = b("p", null, " This website offers a Passwordless Sign-In option. Instead of remembering a password, you'll receive a one-time code via email each time you sign in. ", -1)),
            L(S(we), {
              modelValue: S(g),
              "onUpdate:modelValue": a[0] || (a[0] = (r) => He(g) ? g.value = r : null),
              placeholder: "Email",
              required: ""
            }, null, 8, ["modelValue"]),
            L(S(pe), {
              label: u.pageAuthType,
              submit: "submit",
              onClick: f,
              loading: S(d)
            }, null, 8, ["label", "loading"])
          ], 32)
        ])
      ]),
      _: 1
    }));
  }
});
var ur = ({ dt: e }) => `
.p-inputotp {
    display: flex;
    align-items: center;
    gap: ${e("inputotp.gap")};
}

.p-inputotp-input {
    text-align: center;
    width: ${e("inputotp.input.width")};
}

.p-inputotp-input.p-inputtext-sm {
    text-align: center;
    width: ${e("inputotp.input.sm.width")};
}

.p-inputotp-input.p-inputtext-lg {
    text-align: center;
    width: ${e("inputotp.input.lg.width")};
}
`, lr = {
  root: "p-inputotp p-component",
  pcInputText: "p-inputotp-input"
}, cr = Ut.extend({
  name: "inputotp",
  style: ur,
  classes: lr
}), dr = {
  name: "BaseInputOtp",
  extends: Dt,
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
  style: cr,
  provide: function() {
    return {
      $pcInputOtp: this,
      $parentInstance: this
    };
  }
}, Wt = {
  name: "InputOtp",
  extends: dr,
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
      handler: function(t) {
        this.tokens = t ? t.split("") : new Array(this.length);
      }
    }
  },
  methods: {
    getTemplateAttrs: function(t) {
      return {
        value: this.tokens[t]
      };
    },
    getTemplateEvents: function(t) {
      var i = this;
      return {
        input: function(h) {
          return i.onInput(h, t);
        },
        keydown: function(h) {
          return i.onKeyDown(h);
        },
        focus: function(h) {
          return i.onFocus(h);
        },
        blur: function(h) {
          return i.onBlur(h);
        },
        paste: function(h) {
          return i.onPaste(h);
        }
      };
    },
    onInput: function(t, i) {
      this.tokens[i] = t.target.value, this.updateModel(t), t.inputType === "deleteContentBackward" ? this.moveToPrev(t) : (t.inputType === "insertText" || t.inputType === "deleteContentForward" || en() && t instanceof CustomEvent) && this.moveToNext(t);
    },
    updateModel: function(t) {
      var i = this.tokens.join("");
      this.writeValue(i, t), this.$emit("change", {
        originalEvent: t,
        value: i
      });
    },
    moveToPrev: function(t) {
      var i = this.findPrevInput(t.target);
      i && (i.focus(), i.select());
    },
    moveToNext: function(t) {
      var i = this.findNextInput(t.target);
      i && (i.focus(), i.select());
    },
    findNextInput: function(t) {
      var i = t.nextElementSibling;
      if (i)
        return i.nodeName === "INPUT" ? i : this.findNextInput(i);
    },
    findPrevInput: function(t) {
      var i = t.previousElementSibling;
      if (i)
        return i.nodeName === "INPUT" ? i : this.findPrevInput(i);
    },
    onFocus: function(t) {
      t.target.select(), this.$emit("focus", t);
    },
    onBlur: function(t) {
      this.$emit("blur", t);
    },
    onClick: function(t) {
      setTimeout(function() {
        return t.target.select();
      }, 1);
    },
    onKeyDown: function(t) {
      if (!(t.ctrlKey || t.metaKey))
        switch (t.code) {
          case "ArrowLeft":
            this.moveToPrev(t), t.preventDefault();
            break;
          case "ArrowUp":
          case "ArrowDown":
            t.preventDefault();
            break;
          case "Backspace":
            t.target.value.length === 0 && (this.moveToPrev(t), t.preventDefault());
            break;
          case "ArrowRight":
            this.moveToNext(t), t.preventDefault();
            break;
          case "Enter":
          case "NumpadEnter":
          case "Tab":
            break;
          default:
            (this.integerOnly && !(t.code !== "Space" && Number(t.key) >= 0 && Number(t.key) <= 9) || this.tokens.join("").length >= this.length && t.code !== "Delete") && t.preventDefault();
            break;
        }
    },
    onPaste: function(t) {
      var i = t.clipboardData.getData("text");
      if (i.length) {
        var c = i.substring(0, this.length);
        (!this.integerOnly || !isNaN(c)) && (this.tokens = c.split(""), this.updateModel(t));
      }
      t.preventDefault();
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
    OtpInputText: we
  }
};
function fr(e, t, i, c, h, d) {
  var g = rn("OtpInputText");
  return R(), N("div", Fe({
    class: e.cx("root")
  }, e.ptmi("root")), [(R(!0), N(on, null, sn(e.length, function(f) {
    return Ft(e.$slots, "default", {
      key: f,
      events: d.getTemplateEvents(f - 1),
      attrs: d.getTemplateAttrs(f - 1),
      index: f
    }, function() {
      return [L(g, {
        value: h.tokens[f - 1],
        type: d.inputType,
        class: jt(e.cx("pcInputText")),
        name: e.$formName,
        inputmode: d.inputMode,
        variant: e.variant,
        readonly: e.readonly,
        disabled: e.disabled,
        size: e.size,
        invalid: e.invalid,
        tabindex: e.tabindex,
        unstyled: e.unstyled,
        onInput: function(a) {
          return d.onInput(a, f - 1);
        },
        onFocus: t[0] || (t[0] = function(u) {
          return d.onFocus(u);
        }),
        onBlur: t[1] || (t[1] = function(u) {
          return d.onBlur(u);
        }),
        onPaste: t[2] || (t[2] = function(u) {
          return d.onPaste(u);
        }),
        onKeydown: t[3] || (t[3] = function(u) {
          return d.onKeyDown(u);
        }),
        onClick: t[4] || (t[4] = function(u) {
          return d.onClick(u);
        }),
        pt: e.ptm("pcInputText")
      }, null, 8, ["value", "type", "class", "name", "inputmode", "variant", "readonly", "disabled", "size", "invalid", "tabindex", "unstyled", "onInput", "pt"])];
    });
  }), 128))], 16);
}
Wt.render = fr;
const pr = { class: "spacing-form" }, hr = {
  key: 0,
  class: "validation"
}, vr = { class: "spacing-form" }, mr = /* @__PURE__ */ D({
  __name: "VerifyCode",
  props: {
    pageAuthType: {}
  },
  emits: ["verificationCodeSuccess", "resendCodeSuccess"],
  setup(e, { emit: t }) {
    const i = t, { addToast: c, toastContent: h } = le(), d = j(""), g = j(!1), f = j(0), u = j(0), a = X(() => `Invalid code. You have ${u.value - f.value} attempts left.`);
    async function r() {
      const o = "Error processing your OTP code", s = "Please try again later.";
      g.value = !1;
      try {
        const l = await Z.consumeCode({ userInputCode: d.value });
        l.status === "OK" ? (await Z.clearLoginAttemptInfo(), l.createdNewRecipeUser && l.user.loginMethods.length === 1 ? console.info("New user signed up successfully") : console.info("Existing user signed in successfully"), window.location.href = "/home") : (console.error("Submit code: ", l), l.status === "INCORRECT_USER_INPUT_CODE_ERROR" ? (f.value = l.failedCodeInputAttemptCount, u.value = l.maximumCodeInputAttempts, g.value = !0) : (await Z.clearLoginAttemptInfo(), c({
          severity: "error",
          summary: o,
          detail: s,
          error: l
        }), i("verificationCodeSuccess", !1)));
      } catch (l) {
        c({
          severity: "error",
          summary: h.error.somethingWentWrong.summary,
          detail: h.error.somethingWentWrong.detail,
          error: l
        }), i("verificationCodeSuccess", !1);
      }
    }
    async function n() {
      const o = "Resend OTP failed", s = "Please try again later.";
      try {
        const l = await Z.resendCode();
        console.log("resend code response: ", l), l.status === "RESTART_FLOW_ERROR" ? (await Z.clearLoginAttemptInfo(), c({
          severity: "error",
          summary: o,
          detail: s,
          error: l
        }), i("resendCodeSuccess", !1)) : (c({
          severity: "success",
          summary: "Code re-sent",
          detail: "Please check your email for the new code."
        }), i("resendCodeSuccess", !0));
      } catch (l) {
        c({
          severity: "error",
          summary: h.error.somethingWentWrong.summary,
          detail: h.error.somethingWentWrong.detail,
          error: l
        }), i("resendCodeSuccess", !1);
      }
    }
    return (o, s) => (R(), M(S(ue), { class: "max-w-xl p-12 w-full mx-auto" }, {
      title: $(() => s[2] || (s[2] = [
        b("h1", { class: "h1 mt-0" }, "Input validation code", -1)
      ])),
      content: $(() => [
        b("form", {
          onSubmit: s[1] || (s[1] = je(() => {
          }, ["prevent"])),
          class: "spacing-groups"
        }, [
          b("div", pr, [
            s[4] || (s[4] = b("p", null, " To finish the signup process, enter the code that was emailed to you. Note that the code is only valid for 10 minutes. ", -1)),
            L(S(Wt), {
              length: 6,
              class: "w-50",
              modelValue: S(d),
              "onUpdate:modelValue": s[0] || (s[0] = (l) => He(d) ? d.value = l : null),
              type: "text",
              placeholder: "Input email code",
              required: ""
            }, null, 8, ["modelValue"]),
            S(g) ? (R(), N("p", hr, ee(S(a)), 1)) : Ee("", !0),
            L(S(pe), {
              class: "w-fit",
              type: "submit",
              onClick: r
            }, {
              default: $(() => s[3] || (s[3] = [
                he("Submit code")
              ])),
              _: 1
            })
          ]),
          b("div", vr, [
            s[6] || (s[6] = b("p", null, "If you didnt receive an email, please check your Junk folder or resend another code.", -1)),
            L(S(pe), {
              class: "w-fit",
              type: "button",
              onClick: n
            }, {
              default: $(() => s[5] || (s[5] = [
                he("Resend code")
              ])),
              _: 1
            })
          ])
        ], 32)
      ]),
      _: 1
    }));
  }
});
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const gr = typeof document < "u", yr = () => {
}, ye = Array.isArray;
function wt(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
function bt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Ir(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const i in e)
    if (!_r(e[i], t[i]))
      return !1;
  return !0;
}
function _r(e, t) {
  return ye(e) ? Pt(e, t) : ye(t) ? Pt(t, e) : e === t;
}
function Pt(e, t) {
  return ye(t) ? e.length === t.length && e.every((i, c) => i === t[c]) : e.length === 1 && e[0] === t;
}
var xt;
(function(e) {
  e.pop = "pop", e.push = "push";
})(xt || (xt = {}));
var kt;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(kt || (kt = {}));
function St(e) {
  return typeof e == "string" || e && typeof e == "object";
}
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var Ct;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Ct || (Ct = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const Ve = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), qt = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function At(e) {
  const t = ae(Ve), i = ae(qt);
  let c = !1, h = null;
  const d = X(() => {
    const r = S(e.to);
    return process.env.NODE_ENV !== "production" && (!c || r !== h) && (St(r) || (c ? wt(`Invalid value for prop "to" in useLink()
- to:`, r, `
- previous to:`, h, `
- props:`, e) : wt(`Invalid value for prop "to" in useLink()
- to:`, r, `
- props:`, e)), h = r, c = !0), t.resolve(r);
  }), g = X(() => {
    const { matched: r } = d.value, { length: n } = r, o = r[n - 1], s = i.matched;
    if (!o || !s.length)
      return -1;
    const l = s.findIndex(bt.bind(null, o));
    if (l > -1)
      return l;
    const p = Tt(r[n - 2]);
    return (
      // we are dealing with nested routes
      n > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Tt(o) === p && // avoid comparing the child with its parent
      s[s.length - 1].path !== p ? s.findIndex(bt.bind(null, r[n - 2])) : l
    );
  }), f = X(() => g.value > -1 && kr(i.params, d.value.params)), u = X(() => g.value > -1 && g.value === i.matched.length - 1 && Ir(i.params, d.value.params));
  function a(r = {}) {
    if (xr(r)) {
      const n = t[S(e.replace) ? "replace" : "push"](
        S(e.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(yr);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => n), n;
    }
    return Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && gr) {
    const r = ln();
    if (r) {
      const n = {
        route: d.value,
        isActive: f.value,
        isExactActive: u.value,
        error: null
      };
      r.__vrl_devtools = r.__vrl_devtools || [], r.__vrl_devtools.push(n), cn(() => {
        n.route = d.value, n.isActive = f.value, n.isExactActive = u.value, n.error = St(S(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: d,
    href: X(() => d.value.href),
    isActive: f,
    isExactActive: u,
    navigate: a
  };
}
function wr(e) {
  return e.length === 1 ? e[0] : e;
}
const br = /* @__PURE__ */ D({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: At,
  setup(e, { slots: t }) {
    const i = an(At(e)), { options: c } = ae(Ve), h = X(() => ({
      [Rt(e.activeClass, c.linkActiveClass, "router-link-active")]: i.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Rt(e.exactActiveClass, c.linkExactActiveClass, "router-link-exact-active")]: i.isExactActive
    }));
    return () => {
      const d = t.default && wr(t.default(i));
      return e.custom ? d : un("a", {
        "aria-current": i.isExactActive ? e.ariaCurrentValue : null,
        href: i.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: i.navigate,
        class: h.value
      }, d);
    };
  }
}), Pr = br;
function xr(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function kr(e, t) {
  for (const i in t) {
    const c = t[i], h = e[i];
    if (typeof c == "string") {
      if (c !== h)
        return !1;
    } else if (!ye(h) || h.length !== c.length || c.some((d, g) => d !== h[g]))
      return !1;
  }
  return !0;
}
function Tt(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Rt = (e, t, i) => e ?? t ?? i;
function Mt() {
  return ae(Ve);
}
function Vt(e) {
  return ae(qt);
}
const Sr = /* @__PURE__ */ D({
  __name: "SignInUp",
  setup(e) {
    const { addToast: t, toastContent: i } = le(), c = Vt(), h = Mt(), d = j(!0), g = j(!1);
    Ie(async () => {
      g.value = !!await u(), h.currentRoute.value.query.thirdPartyId === "google" && await a();
    });
    const f = X(() => c.name === "signup" ? "Sign up" : "Sign in");
    async function u() {
      d.value = !0;
      try {
        const r = await Z.getLoginAttemptInfo();
        return r && console.info("Code already sent: ", r), r !== void 0;
      } catch (r) {
        t({
          severity: "error",
          summary: i.error.somethingWentWrong.summary,
          detail: i.error.somethingWentWrong.detail,
          error: r
        });
      } finally {
        d.value = !1;
      }
    }
    async function a() {
      const r = "Failed to sign in with Google", n = "Please try again later or try another form of login.";
      try {
        d.value = !0;
        const o = await Me.signInAndUp();
        o.status === "OK" ? (console.log("handleGoogleCallback> ", o.user), o.createdNewRecipeUser && o.user.loginMethods.length === 1 ? console.log("New user signed up successfully") : console.log("Existing user signed in successfully"), window.location.assign("/home")) : o.status === "SIGN_IN_UP_NOT_ALLOWED" ? t({
          severity: "error",
          summary: r,
          detail: n,
          error: o
        }) : (t({
          severity: "error",
          summary: r,
          detail: n,
          error: o
        }), window.location.assign("/signin"));
      } catch (o) {
        t({
          severity: "error",
          summary: i.error.somethingWentWrong.summary,
          detail: i.error.somethingWentWrong.detail,
          error: o
        });
      } finally {
        d.value = !1;
      }
    }
    return (r, n) => (R(), M(Lt, { isLoading: S(d) }, {
      default: $(() => [
        S(g) ? (R(), M(mr, {
          key: 1,
          pageAuthType: S(f),
          onVerificationCodeSuccess: n[1] || (n[1] = (o) => g.value = o),
          onResendCodeSuccess: n[2] || (n[2] = (o) => g.value = o)
        }, null, 8, ["pageAuthType"])) : (R(), M(ar, {
          key: 0,
          pageAuthType: S(f),
          onSendCodeSuccess: n[0] || (n[0] = (o) => g.value = o)
        }, null, 8, ["pageAuthType"]))
      ]),
      _: 1
    }, 8, ["isLoading"]));
  }
}), Cr = { class: "flex flex-grow items-center justify-center w-full" }, Ot = /* @__PURE__ */ D({
  __name: "AuthPage",
  setup(e) {
    return (t, i) => (R(), N("div", Cr, [
      L(Sr)
    ]));
  }
}), Et = 5e3, Ar = /* @__PURE__ */ D({
  __name: "GoodbyePage",
  setup(e) {
    const t = Mt();
    return Ie(() => {
      setTimeout(() => {
        t.push("/");
      }, Et);
    }), (i, c) => (R(), N("div", null, [
      c[0] || (c[0] = b("h1", null, "Goodbye", -1)),
      c[1] || (c[1] = b("p", null, "Your account has been deleted, thank you for visiting!", -1)),
      b("p", null, "You will be redirected to the landing page in " + ee(Et) + " seconds automatically.")
    ]));
  }
}), Tr = async () => await fetch("https://localhost:443/auth/get-email", {
  method: "GET",
  credentials: "include",
  headers: {
    "Content-Type": "application/json"
  }
}), Rr = async (e) => await fetch("https://localhost:443/auth/change-email", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  credentials: "include",
  body: JSON.stringify({ email: e })
}), Or = async () => await fetch("https://localhost:443/auth/request-delete", {
  method: "POST",
  credentials: "include"
}), Er = async (e) => await fetch("https://localhost:443/auth/delete-account", {
  method: "DELETE",
  credentials: "include",
  headers: {
    "X-Delete-Token": e,
    "Content-Type": "application/json"
  }
}), be = { getEmail: Tr, changeEmail: Rr, requestDelete: Or, deleteAccount: Er }, $r = { class: "flex flex-col items-center gap-4 text-center" }, Ur = { class: "flex flex-col gap-2" }, Bt = /* @__PURE__ */ D({
  __name: "ActionConfirmMsg",
  props: {
    iconClass: {}
  },
  setup(e) {
    return (t, i) => (R(), N("div", $r, [
      b("i", {
        class: jt([t.iconClass, "border-2 p-4 rounded-full text-primary"]),
        style: { "font-size": "1.2rem !important" }
      }, null, 2),
      b("div", Ur, [
        Ft(t.$slots, "default")
      ])
    ]));
  }
}), Lr = {
  key: 0,
  class: "spacing-elements"
}, Nr = { class: "text-primary break-all px-2" }, Fr = /* @__PURE__ */ D({
  __name: "ChangeEmail",
  setup(e) {
    const { addToast: t, toastContent: i } = le(), c = j(""), h = j(!1);
    async function d() {
      try {
        const g = await be.changeEmail(c.value);
        if (!g.ok)
          throw h.value = !1, new Error(`Error changing email: ${g.status} - ${g.statusText}`);
        h.value = !0;
      } catch (g) {
        h.value = !1, t({
          severity: "error",
          summary: i.error.somethingWentWrong.summary,
          detail: i.error.somethingWentWrong.detail,
          error: g
        });
      }
    }
    return (g, f) => (R(), M(S(ue), null, {
      title: $(() => f[1] || (f[1] = [
        b("h2", { class: "h2" }, "Change your email", -1)
      ])),
      content: $(() => [
        S(h) ? (R(), M(Bt, {
          key: 1,
          iconClass: "pi pi-envelope"
        }, {
          default: $(() => [
            b("p", null, [
              f[5] || (f[5] = b("span", { class: "block text-wrap" }, "We have a verification email to:", -1)),
              b("strong", Nr, ee(S(c)), 1),
              f[6] || (f[6] = b("span", { class: "block" }, " Please check the inbox of your new email and click on the verification link to change your email. ", -1))
            ])
          ]),
          _: 1
        })) : (R(), N("div", Lr, [
          f[4] || (f[4] = b("p", null, " You will receive an email to your old email to verify your new email address. Please click on the email link to update your email. ", -1)),
          b("form", {
            onSubmit: je(d, ["prevent"]),
            class: "spacing-form"
          }, [
            f[3] || (f[3] = b("label", {
              for: "email",
              class: "label"
            }, "Enter your new email", -1)),
            L(S(we), {
              modelValue: S(c),
              "onUpdate:modelValue": f[0] || (f[0] = (u) => He(c) ? c.value = u : null),
              type: "email",
              id: "email",
              name: "email",
              required: ""
            }, null, 8, ["modelValue"]),
            L(S(pe), { type: "submit" }, {
              default: $(() => f[2] || (f[2] = [
                he("Change email")
              ])),
              _: 1
            })
          ], 32)
        ]))
      ]),
      _: 1
    }));
  }
}), jr = {
  key: 0,
  class: "spacing-elements"
}, Hr = /* @__PURE__ */ D({
  __name: "DeleteAccount",
  setup(e) {
    const { addToast: t, toastContent: i } = le(), c = j(!1);
    async function h() {
      try {
        const d = await be.requestDelete();
        if (d.ok)
          c.value = !0;
        else
          throw new Error(`Error requesting account deletion: ${d.status} - ${d.statusText}`);
      } catch (d) {
        c.value = !1, t({
          severity: "error",
          summary: i.error.somethingWentWrong.summary,
          detail: i.error.somethingWentWrong.detail,
          error: d
        });
      }
    }
    return (d, g) => (R(), M(S(ue), null, {
      title: $(() => g[0] || (g[0] = [
        b("h2", { class: "h2" }, "Delete your account", -1)
      ])),
      content: $(() => [
        S(c) ? (R(), M(Bt, {
          key: 1,
          iconClass: "pi pi-envelope"
        }, {
          default: $(() => g[3] || (g[3] = [
            b("p", null, " We have sent you an email to verify your account deletion. Please check your inbox and click on the verification link. ", -1)
          ])),
          _: 1
        })) : (R(), N("div", jr, [
          g[2] || (g[2] = b("p", null, " You will receive an email to verify your account deletion. Please click on the email link to delete your account. ", -1)),
          L(S(pe), {
            type: "button",
            onClick: h
          }, {
            default: $(() => g[1] || (g[1] = [
              he("Send deletion email")
            ])),
            _: 1
          })
        ]))
      ]),
      _: 1
    }));
  }
}), Dr = { class: "spacing-elements" }, Wr = {
  key: 0,
  class: "flex flex-row gap-2"
}, qr = { class: "text-primary break-all" }, Mr = {
  key: 1,
  class: "flex flex-row gap-2"
}, Vr = { class: "text-primary break-all px-2" }, Br = /* @__PURE__ */ D({
  __name: "YourAccount",
  setup(e) {
    const t = j(""), i = j("");
    Ie(() => {
      c();
    });
    async function c() {
      try {
        t.value = await Ne.getUserId();
        const h = await be.getEmail();
        if (!h.ok)
          throw new Error(`Error getting user email: ${h.status} - ${h.statusText}`);
        const d = await h.json();
        i.value = d.email;
      } catch (h) {
        console.error("Error fetching user email: ", h);
      }
    }
    return (h, d) => (R(), M(S(ue), null, {
      title: $(() => d[0] || (d[0] = [
        b("h2", { class: "h2" }, "Your details", -1)
      ])),
      content: $(() => [
        b("div", Dr, [
          S(t) ? (R(), N("div", Wr, [
            d[1] || (d[1] = b("div", null, "ID:", -1)),
            b("div", null, [
              b("code", qr, ee(S(t)), 1)
            ])
          ])) : Ee("", !0),
          S(i) ? (R(), N("div", Mr, [
            d[2] || (d[2] = b("div", null, "Email:", -1)),
            b("div", null, [
              b("strong", Vr, ee(S(i)), 1)
            ])
          ])) : Ee("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), Gr = { class: "container flex items-center justify-center w-full" }, Kr = {
  key: 0,
  class: "max-w-xl"
}, Qr = { class: "spacing-page-sections" }, zr = { key: 1 }, Jr = { class: "spacing-elements p-12" }, Yr = /* @__PURE__ */ D({
  __name: "AccountPage",
  setup(e) {
    const { addToast: t } = le(), i = Vt(), c = j(!1), h = j(i.query.del_token);
    Ie(() => {
      h.value && d();
    });
    async function d() {
      const g = "We failed to delete your account!", f = "Something went wrong while deleting your account. Please try again or contact us to let us know about this issue.";
      try {
        const u = await be.deleteAccount(h.value);
        if (!u.ok)
          throw new Error(`Error deleting account: ${u.status} - ${u.statusText}`);
        await Ne.signOut(), window.location.href = "/goodbye";
      } catch (u) {
        t({
          severity: "error",
          summary: g,
          detail: f,
          life: 0,
          error: { msg: "Failed to delete user account", error: u }
        }), h.value = void 0;
      }
    }
    return (g, f) => (R(), M(Lt, { isLoading: S(c) }, {
      default: $(() => [
        b("div", Gr, [
          S(h) ? (R(), N("div", zr, [
            L(S(ue), null, {
              content: $(() => [
                b("div", Jr, [
                  f[1] || (f[1] = b("p", { class: "text-2xl" }, "Deleting your account...", -1)),
                  L(S(tn))
                ])
              ]),
              _: 1
            })
          ])) : (R(), N("div", Kr, [
            f[0] || (f[0] = b("h1", { class: "h1 text-color" }, "Your account", -1)),
            b("div", Qr, [
              L(Br),
              L(Fr),
              L(Hr)
            ])
          ]))
        ])
      ]),
      _: 1
    }, 8, ["isLoading"]));
  }
}), Xr = { class: "not-found-page" }, Zr = /* @__PURE__ */ D({
  __name: "NotFoundPage",
  setup(e) {
    return (t, i) => (R(), N("div", Xr, [
      i[1] || (i[1] = b("h1", null, "Page Not Found", -1)),
      i[2] || (i[2] = b("p", null, "Sorry, the page you are looking for does not exist.", -1)),
      L(S(Pr), { to: "/" }, {
        default: $(() => i[0] || (i[0] = [
          he("Go back to Home")
        ])),
        _: 1
      })
    ]));
  }
}), eo = /* @__PURE__ */ $t(Zr, [["__scopeId", "data-v-86d9ef49"]]), to = {
  class: "container max-w-xl rounded-2xl mt-10 p-8",
  style: { background: "white" }
}, no = /* @__PURE__ */ D({
  __name: "ErrorPage",
  setup(e) {
    return (t, i) => (R(), N("div", to));
  }
}), ro = [
  {
    path: "/account",
    name: "account",
    component: Yr,
    meta: { requiresAuth: !0 }
  },
  {
    path: "/goodbye",
    name: "goodbye",
    component: Ar
  },
  {
    path: "/signup",
    name: "signup",
    component: Ot,
    props: { authType: "signup" },
    meta: { guestOnly: !0 }
  },
  {
    path: "/signin",
    name: "signin",
    component: Ot,
    props: { authType: "signin" },
    meta: { guestOnly: !0 }
  },
  {
    path: "/error",
    name: "error",
    component: no
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: eo
  }
];
function oo(e) {
  e.beforeEach(async (t, i, c) => {
    const h = Nt();
    await h.updateAuth(), t.meta.requiresAuth && !h.isSignedIn ? c("/signin") : t.meta.guestOnly && h.isSignedIn ? c("/home") : c();
  });
}
const ao = (e) => {
  kn.init({
    appInfo: {
      appName: e.appInfo.appName,
      apiDomain: e.appInfo.apiDomain,
      apiBasePath: e.appInfo.apiBasePath || "/auth"
    },
    recipeList: [Ne.init(), En.init({}), jn.init()]
  });
}, uo = {
  useUserStore: Nt
}, lo = {
  routes: ro,
  setupAuthGuard: oo
};
export {
  lo as baseRouting,
  ao as initializeSuperTokens,
  uo as stores
};
