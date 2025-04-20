import { defineStore as Jr } from "pinia";
import { ref as gt, readonly as Qr, getCurrentInstance as cn, onMounted as Zr, nextTick as eo, watch as to, useId as no, mergeProps as ee, createElementBlock as ge, openBlock as ue, createCommentVNode as Ye, createElementVNode as bt, renderSlot as Te, createTextVNode as Jt, toDisplayString as nn, resolveComponent as fn, resolveDirective as ro, withDirectives as oo, createBlock as qt, resolveDynamicComponent as io, withCtx as Ir, normalizeClass as hn, defineComponent as so, createVNode as gn, unref as vn } from "vue";
var ao = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function uo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Q = {}, Vt = {}, Bt = {}, Qe = {}, Pe = {}, pn;
function lo() {
  if (pn) return Pe;
  pn = 1;
  var e = Pe && Pe.__awaiter || function(u, i, d, l) {
    function s(g) {
      return g instanceof d ? g : new d(function(b) {
        b(g);
      });
    }
    return new (d || (d = Promise))(function(g, b) {
      function c(y) {
        try {
          h(l.next(y));
        } catch (S) {
          b(S);
        }
      }
      function a(y) {
        try {
          h(l.throw(y));
        } catch (S) {
          b(S);
        }
      }
      function h(y) {
        y.done ? g(y.value) : s(y.value).then(c, a);
      }
      h((l = l.apply(u, i || [])).next());
    });
  }, t = Pe && Pe.__generator || function(u, i) {
    var d = {
      label: 0,
      sent: function() {
        if (g[0] & 1) throw g[1];
        return g[1];
      },
      trys: [],
      ops: []
    }, l, s, g, b;
    return b = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (b[Symbol.iterator] = function() {
      return this;
    }), b;
    function c(h) {
      return function(y) {
        return a([h, y]);
      };
    }
    function a(h) {
      if (l) throw new TypeError("Generator is already executing.");
      for (; d; )
        try {
          if (l = 1, s && (g = h[0] & 2 ? s.return : h[0] ? s.throw || ((g = s.return) && g.call(s), 0) : s.next) && !(g = g.call(s, h[1])).done)
            return g;
          switch (s = 0, g && (h = [h[0] & 2, g.value]), h[0]) {
            case 0:
            case 1:
              g = h;
              break;
            case 4:
              return d.label++, { value: h[1], done: !1 };
            case 5:
              d.label++, s = h[1], h = [0];
              continue;
            case 7:
              h = d.ops.pop(), d.trys.pop();
              continue;
            default:
              if (g = d.trys, !(g = g.length > 0 && g[g.length - 1]) && (h[0] === 6 || h[0] === 2)) {
                d = 0;
                continue;
              }
              if (h[0] === 3 && (!g || h[1] > g[0] && h[1] < g[3])) {
                d.label = h[1];
                break;
              }
              if (h[0] === 6 && d.label < g[1]) {
                d.label = g[1], g = h;
                break;
              }
              if (g && d.label < g[2]) {
                d.label = g[2], d.ops.push(h);
                break;
              }
              g[2] && d.ops.pop(), d.trys.pop();
              continue;
          }
          h = i.call(u, d);
        } catch (y) {
          h = [6, y], s = 0;
        } finally {
          l = g = 0;
        }
      if (h[0] & 5) throw h[1];
      return { value: h[0] ? h[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Pe, "__esModule", { value: !0 }), Pe.defaultWindowHandlerImplementation = void 0;
  function n() {
    if (typeof window > "u")
      throw Error(
        "If you are using this package with server-side rendering, please make sure that you are checking if the window object is defined."
      );
    return window;
  }
  var r = {
    key: function(u) {
      return e(this, void 0, void 0, function() {
        return t(this, function(i) {
          return [2, n().localStorage.key(u)];
        });
      });
    },
    clear: function() {
      return e(this, void 0, void 0, function() {
        return t(this, function(u) {
          return [2, n().localStorage.clear()];
        });
      });
    },
    getItem: function(u) {
      return e(this, void 0, void 0, function() {
        return t(this, function(i) {
          return [2, n().localStorage.getItem(u)];
        });
      });
    },
    removeItem: function(u) {
      return e(this, void 0, void 0, function() {
        return t(this, function(i) {
          return [2, n().localStorage.removeItem(u)];
        });
      });
    },
    setItem: function(u, i) {
      return e(this, void 0, void 0, function() {
        return t(this, function(d) {
          return [2, n().localStorage.setItem(u, i)];
        });
      });
    },
    keySync: function(u) {
      return n().localStorage.key(u);
    },
    clearSync: function() {
      return n().localStorage.clear();
    },
    getItemSync: function(u) {
      return n().localStorage.getItem(u);
    },
    removeItemSync: function(u) {
      return n().localStorage.removeItem(u);
    },
    setItemSync: function(u, i) {
      return n().localStorage.setItem(u, i);
    }
  }, o = {
    key: function(u) {
      return e(this, void 0, void 0, function() {
        return t(this, function(i) {
          return [2, n().sessionStorage.key(u)];
        });
      });
    },
    clear: function() {
      return e(this, void 0, void 0, function() {
        return t(this, function(u) {
          return [2, n().sessionStorage.clear()];
        });
      });
    },
    getItem: function(u) {
      return e(this, void 0, void 0, function() {
        return t(this, function(i) {
          return [2, n().sessionStorage.getItem(u)];
        });
      });
    },
    removeItem: function(u) {
      return e(this, void 0, void 0, function() {
        return t(this, function(i) {
          return [2, n().sessionStorage.removeItem(u)];
        });
      });
    },
    setItem: function(u, i) {
      return e(this, void 0, void 0, function() {
        return t(this, function(d) {
          return [2, n().sessionStorage.setItem(u, i)];
        });
      });
    },
    keySync: function(u) {
      return n().sessionStorage.key(u);
    },
    clearSync: function() {
      return n().sessionStorage.clear();
    },
    getItemSync: function(u) {
      return n().sessionStorage.getItem(u);
    },
    removeItemSync: function(u) {
      return n().sessionStorage.removeItem(u);
    },
    setItemSync: function(u, i) {
      return n().sessionStorage.setItem(u, i);
    }
  };
  return Pe.defaultWindowHandlerImplementation = {
    history: {
      replaceState: function(u, i, d) {
        return n().history.replaceState(u, i, d);
      },
      getState: function() {
        return n().history.state;
      }
    },
    location: {
      getHref: function() {
        return n().location.href;
      },
      setHref: function(u) {
        n().location.href = u;
      },
      getSearch: function() {
        return n().location.search;
      },
      getHash: function() {
        return n().location.hash;
      },
      getPathName: function() {
        return n().location.pathname;
      },
      assign: function(u) {
        n().location.assign(u);
      },
      getHostName: function() {
        return n().location.hostname;
      },
      getHost: function() {
        return n().location.host;
      },
      getOrigin: function() {
        return n().location.origin;
      }
    },
    getDocument: function() {
      return n().document;
    },
    getWindowUnsafe: function() {
      return n().window;
    },
    localStorage: r,
    sessionStorage: o
  }, Pe;
}
var mn;
function qe() {
  if (mn) return Qe;
  mn = 1, Object.defineProperty(Qe, "__esModule", { value: !0 }), Qe.WindowHandlerReference = void 0;
  var e = lo(), t = (
    /** @class */
    function() {
      function n(r) {
        var o = function(u) {
          return u;
        };
        r !== void 0 && (o = r), this.windowHandler = o(e.defaultWindowHandlerImplementation);
      }
      return n.init = function(r) {
        n.instance === void 0 && (n.instance = new n(r));
      }, n.getReferenceOrThrow = function() {
        if (n.instance === void 0)
          throw new Error("SuperTokensWindowHandler must be initialized before calling this method.");
        return n.instance;
      }, n;
    }()
  );
  return Qe.WindowHandlerReference = t, Qe.default = t, Qe;
}
var bn;
function co() {
  return bn || (bn = 1, function(e) {
    function t(n) {
      for (var r in n) e.hasOwnProperty(r) || (e[r] = n[r]);
    }
    e.__esModule = !0, t(qe());
  }(Bt)), Bt;
}
var yn;
function fo() {
  return yn || (yn = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.WindowHandlerReference = void 0;
    var t = co();
    Object.defineProperty(e, "WindowHandlerReference", {
      enumerable: !0,
      get: function() {
        return t.WindowHandlerReference;
      }
    });
  }(Vt)), Vt;
}
var Ve = {}, Sn;
function ho() {
  return Sn || (Sn = 1, Object.defineProperty(Ve, "__esModule", { value: !0 }), Ve.SSR_ERROR = Ve.DEFAULT_API_BASE_PATH = void 0, Ve.DEFAULT_API_BASE_PATH = "/auth", Ve.SSR_ERROR = `
If you are trying to use this method doing server-side-rendering, please make sure you move this method inside a componentDidMount method or useEffect hook.`), Ve;
}
var Et = {}, kn;
function go() {
  if (kn) return Et;
  kn = 1, Object.defineProperty(Et, "__esModule", { value: !0 });
  var e = (
    /** @class */
    /* @__PURE__ */ function() {
      function n(r) {
        var o = this;
        this.getAsStringDangerous = function() {
          return o.value;
        }, this.value = t(r);
      }
      return n;
    }()
  );
  Et.default = e;
  function t(n, r) {
    r === void 0 && (r = !1);
    function o(i) {
      return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
        i
      );
    }
    n = n.trim();
    try {
      if (!n.startsWith("http://") && !n.startsWith("https://"))
        throw new Error("Error converting to proper URL");
      var u = new URL(n);
      return r ? u.hostname.startsWith("localhost") || o(u.hostname) ? n = "http://" + u.host : n = "https://" + u.host : n = u.protocol + "//" + u.host, n;
    } catch {
    }
    if (n.startsWith("/"))
      throw new Error("Please provide a valid domain name");
    if (n.indexOf(".") === 0 && (n = n.substr(1)), (n.indexOf(".") !== -1 || n.startsWith("localhost")) && !n.startsWith("http://") && !n.startsWith("https://")) {
      n = "https://" + n;
      try {
        return new URL(n), t(n, !0);
      } catch {
      }
    }
    throw new Error("Please provide a valid domain name");
  }
  return Et;
}
var Dt = {}, wn;
function vo() {
  if (wn) return Dt;
  wn = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  var e = (
    /** @class */
    /* @__PURE__ */ function() {
      function r(o) {
        var u = this;
        this.startsWith = function(i) {
          return u.value.startsWith(i.value);
        }, this.appendPath = function(i) {
          return new r(u.value + i.value);
        }, this.getAsStringDangerous = function() {
          return u.value;
        }, this.value = t(o);
      }
      return r;
    }()
  );
  Dt.default = e;
  function t(r) {
    r = r.trim();
    try {
      if (!r.startsWith("http://") && !r.startsWith("https://"))
        throw new Error("Error converting to proper URL");
      var o = new URL(r);
      return r = o.pathname, r.charAt(r.length - 1) === "/" ? r.substr(0, r.length - 1) : r;
    } catch {
    }
    if ((n(r) || r.startsWith("localhost")) && !r.startsWith("http://") && !r.startsWith("https://"))
      return r = "http://" + r, t(r);
    r.charAt(0) !== "/" && (r = "/" + r);
    try {
      return new URL("http://example.com" + r), t("http://example.com" + r);
    } catch {
      throw new Error("Please provide a valid URL path");
    }
  }
  function n(r) {
    if (r.indexOf(".") === -1 || r.startsWith("/"))
      return !1;
    try {
      var o = new URL(r);
      return o.hostname.indexOf(".") !== -1;
    } catch {
    }
    try {
      var o = new URL("http://" + r);
      return o.hostname.indexOf(".") !== -1;
    } catch {
    }
    return !1;
  }
  return Dt;
}
var Wt = {}, ut = {}, re = {}, Ze = {}, _n;
function po() {
  if (_n) return Ze;
  _n = 1, Object.defineProperty(Ze, "__esModule", { value: !0 }), Ze.isAnIpAddress = void 0;
  function e(r) {
    return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      r
    );
  }
  Ze.isAnIpAddress = e;
  var t = (
    /** @class */
    /* @__PURE__ */ function() {
      function r(o) {
        var u = this;
        this.getAsStringDangerous = function() {
          return u.value;
        }, this.value = n(o);
      }
      return r;
    }()
  );
  Ze.default = t;
  function n(r, o) {
    o === void 0 && (o = !1), r = r.trim();
    try {
      if (!r.startsWith("http://") && !r.startsWith("https://"))
        throw new Error("converting to proper URL");
      var u = new URL(r);
      return o ? u.hostname.startsWith("localhost") || e(u.hostname) ? r = "http://" + u.host : r = "https://" + u.host : r = u.protocol + "//" + u.host, r;
    } catch {
    }
    if (r.startsWith("/"))
      throw new Error("Please provide a valid domain name");
    if (r.indexOf(".") === 0 && (r = r.substr(1)), (r.indexOf(".") !== -1 || r.startsWith("localhost")) && !r.startsWith("http://") && !r.startsWith("https://")) {
      r = "https://" + r;
      try {
        return new URL(r), n(r, !0);
      } catch {
      }
    }
    throw new Error("Please provide a valid domain name");
  }
  return Ze;
}
var xt = {}, Tn;
function mo() {
  if (Tn) return xt;
  Tn = 1, Object.defineProperty(xt, "__esModule", { value: !0 });
  var e = (
    /** @class */
    /* @__PURE__ */ function() {
      function r(o) {
        var u = this;
        this.startsWith = function(i) {
          return u.value.startsWith(i.value);
        }, this.appendPath = function(i) {
          return new r(u.value + i.value);
        }, this.getAsStringDangerous = function() {
          return u.value;
        }, this.value = t(o);
      }
      return r;
    }()
  );
  xt.default = e;
  function t(r) {
    r = r.trim();
    try {
      if (!r.startsWith("http://") && !r.startsWith("https://"))
        throw new Error("converting to proper URL");
      var o = new URL(r);
      return r = o.pathname, r.charAt(r.length - 1) === "/" ? r.substr(0, r.length - 1) : r;
    } catch {
    }
    if ((n(r) || r.startsWith("localhost")) && !r.startsWith("http://") && !r.startsWith("https://"))
      return r = "http://" + r, t(r);
    r.charAt(0) !== "/" && (r = "/" + r);
    try {
      return new URL("http://example.com" + r), t("http://example.com" + r);
    } catch {
      throw new Error("Please provide a valid URL path");
    }
  }
  function n(r) {
    if (r.indexOf(".") === -1 || r.startsWith("/"))
      return !1;
    try {
      var o = new URL(r);
      return o.hostname.indexOf(".") !== -1;
    } catch {
    }
    try {
      var o = new URL("http://" + r);
      return o.hostname.indexOf(".") !== -1;
    } catch {
    }
    return !1;
  }
  return xt;
}
var $n;
function rn() {
  if ($n) return re;
  $n = 1;
  var e = re && re.__assign || function() {
    return e = Object.assign || function(c) {
      for (var a, h = 1, y = arguments.length; h < y; h++) {
        a = arguments[h];
        for (var S in a) Object.prototype.hasOwnProperty.call(a, S) && (c[S] = a[S]);
      }
      return c;
    }, e.apply(this, arguments);
  }, t = re && re.__awaiter || function(c, a, h, y) {
    function S(p) {
      return p instanceof h ? p : new h(function(m) {
        m(p);
      });
    }
    return new (h || (h = Promise))(function(p, m) {
      function v(w) {
        try {
          k(y.next(w));
        } catch (T) {
          m(T);
        }
      }
      function f(w) {
        try {
          k(y.throw(w));
        } catch (T) {
          m(T);
        }
      }
      function k(w) {
        w.done ? p(w.value) : S(w.value).then(v, f);
      }
      k((y = y.apply(c, a || [])).next());
    });
  }, n = re && re.__generator || function(c, a) {
    var h = {
      label: 0,
      sent: function() {
        if (p[0] & 1) throw p[1];
        return p[1];
      },
      trys: [],
      ops: []
    }, y, S, p, m;
    return m = { next: v(0), throw: v(1), return: v(2) }, typeof Symbol == "function" && (m[Symbol.iterator] = function() {
      return this;
    }), m;
    function v(k) {
      return function(w) {
        return f([k, w]);
      };
    }
    function f(k) {
      if (y) throw new TypeError("Generator is already executing.");
      for (; h; )
        try {
          if (y = 1, S && (p = k[0] & 2 ? S.return : k[0] ? S.throw || ((p = S.return) && p.call(S), 0) : S.next) && !(p = p.call(S, k[1])).done)
            return p;
          switch (S = 0, p && (k = [k[0] & 2, p.value]), k[0]) {
            case 0:
            case 1:
              p = k;
              break;
            case 4:
              return h.label++, { value: k[1], done: !1 };
            case 5:
              h.label++, S = k[1], k = [0];
              continue;
            case 7:
              k = h.ops.pop(), h.trys.pop();
              continue;
            default:
              if (p = h.trys, !(p = p.length > 0 && p[p.length - 1]) && (k[0] === 6 || k[0] === 2)) {
                h = 0;
                continue;
              }
              if (k[0] === 3 && (!p || k[1] > p[0] && k[1] < p[3])) {
                h.label = k[1];
                break;
              }
              if (k[0] === 6 && h.label < p[1]) {
                h.label = p[1], p = k;
                break;
              }
              if (p && h.label < p[2]) {
                h.label = p[2], h.ops.push(k);
                break;
              }
              p[2] && h.ops.pop(), h.trys.pop();
              continue;
          }
          k = a.call(c, h);
        } catch (w) {
          k = [6, w], S = 0;
        } finally {
          y = p = 0;
        }
      if (k[0] & 5) throw k[1];
      return { value: k[0] ? k[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(re, "__esModule", { value: !0 }), re.matchesDomainOrSubdomain = re.getNormalisedUserContext = re.validateAndNormaliseInputOrThrowError = re.normaliseSessionScopeOrThrowError = re.normaliseURLPathOrThrowError = re.normaliseURLDomainOrThrowError = void 0;
  var r = po(), o = mo(), u = qe();
  function i(c) {
    var a = new r.default(c).getAsStringDangerous();
    return a;
  }
  re.normaliseURLDomainOrThrowError = i;
  function d(c) {
    return new o.default(c).getAsStringDangerous();
  }
  re.normaliseURLPathOrThrowError = d;
  function l(c) {
    function a(y) {
      y = y.trim().toLowerCase(), y.startsWith(".") && (y = y.substr(1)), !y.startsWith("http://") && !y.startsWith("https://") && (y = "http://" + y);
      try {
        var S = new URL(y);
        return y = S.hostname, y;
      } catch {
        throw new Error("Please provide a valid sessionScope");
      }
    }
    var h = a(c);
    return h === "localhost" || (0, r.isAnIpAddress)(h) ? h : c.startsWith(".") ? "." + h : h;
  }
  re.normaliseSessionScopeOrThrowError = l;
  function s(c) {
    var a = this, h = i(c.apiDomain), y = d("/auth");
    c.apiBasePath !== void 0 && (y = d(c.apiBasePath));
    var S = u.default.getReferenceOrThrow().windowHandler.location.getHostName(), p = l(
      c !== void 0 && c.sessionTokenFrontendDomain !== void 0 ? c.sessionTokenFrontendDomain : S
    ), m = 401;
    c.sessionExpiredStatusCode !== void 0 && (m = c.sessionExpiredStatusCode);
    var v = 403;
    if (c.invalidClaimStatusCode !== void 0 && (v = c.invalidClaimStatusCode), m === v)
      throw new Error("sessionExpiredStatusCode and invalidClaimStatusCode cannot be the same.");
    var f = !0;
    c.autoAddCredentials !== void 0 && (f = c.autoAddCredentials);
    var k = !1;
    c.isInIframe !== void 0 && (k = c.isInIframe);
    var w = void 0;
    c.sessionTokenBackendDomain !== void 0 && (w = l(c.sessionTokenBackendDomain));
    var T = 10;
    if (c.maxRetryAttemptsForSessionRefresh !== void 0) {
      if (c.maxRetryAttemptsForSessionRefresh < 0)
        throw new Error("maxRetryAttemptsForSessionRefresh must be greater than or equal to 0.");
      T = c.maxRetryAttemptsForSessionRefresh;
    }
    var C = function(x) {
      return t(a, void 0, void 0, function() {
        return n(this, function(H) {
          return [2, { url: x.url, requestInit: x.requestInit }];
        });
      });
    };
    c.preAPIHook !== void 0 && (C = c.preAPIHook);
    var P = function() {
      return t(a, void 0, void 0, function() {
        return n(this, function(x) {
          return [
            2
            /*return*/
          ];
        });
      });
    };
    c.postAPIHook !== void 0 && (P = c.postAPIHook);
    var O = function() {
    };
    c.onHandleEvent !== void 0 && (O = c.onHandleEvent);
    var I = e(
      {
        functions: function(x) {
          return x;
        }
      },
      c.override
    );
    return {
      apiDomain: h,
      apiBasePath: y,
      sessionTokenFrontendDomain: p,
      sessionExpiredStatusCode: m,
      invalidClaimStatusCode: v,
      autoAddCredentials: f,
      isInIframe: k,
      tokenTransferMethod: c.tokenTransferMethod !== void 0 ? c.tokenTransferMethod : "cookie",
      sessionTokenBackendDomain: w,
      maxRetryAttemptsForSessionRefresh: T,
      preAPIHook: C,
      postAPIHook: P,
      onHandleEvent: O,
      override: I
    };
  }
  re.validateAndNormaliseInputOrThrowError = s;
  function g(c) {
    return c === void 0 ? {} : c;
  }
  re.getNormalisedUserContext = g;
  function b(c, a) {
    for (var h = c.split("."), y = 0; y < h.length; y++) {
      var S = h.slice(y).join(".");
      if (S === a || ".".concat(S) === a)
        return !0;
    }
    return !1;
  }
  return re.matchesDomainOrSubdomain = b, re;
}
var Oe = {}, Be = {}, Rn;
function on() {
  return Rn || (Rn = 1, function(e) {
    var t = Be && Be.__awaiter || function(o, u, i, d) {
      function l(s) {
        return s instanceof i ? s : new i(function(g) {
          g(s);
        });
      }
      return new (i || (i = Promise))(function(s, g) {
        function b(h) {
          try {
            a(d.next(h));
          } catch (y) {
            g(y);
          }
        }
        function c(h) {
          try {
            a(d.throw(h));
          } catch (y) {
            g(y);
          }
        }
        function a(h) {
          h.done ? s(h.value) : l(h.value).then(b, c);
        }
        a((d = d.apply(o, u || [])).next());
      });
    }, n = Be && Be.__generator || function(o, u) {
      var i = {
        label: 0,
        sent: function() {
          if (s[0] & 1) throw s[1];
          return s[1];
        },
        trys: [],
        ops: []
      }, d, l, s, g;
      return g = { next: b(0), throw: b(1), return: b(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function b(a) {
        return function(h) {
          return c([a, h]);
        };
      }
      function c(a) {
        if (d) throw new TypeError("Generator is already executing.");
        for (; i; )
          try {
            if (d = 1, l && (s = a[0] & 2 ? l.return : a[0] ? l.throw || ((s = l.return) && s.call(l), 0) : l.next) && !(s = s.call(l, a[1])).done)
              return s;
            switch (l = 0, s && (a = [a[0] & 2, s.value]), a[0]) {
              case 0:
              case 1:
                s = a;
                break;
              case 4:
                return i.label++, { value: a[1], done: !1 };
              case 5:
                i.label++, l = a[1], a = [0];
                continue;
              case 7:
                a = i.ops.pop(), i.trys.pop();
                continue;
              default:
                if (s = i.trys, !(s = s.length > 0 && s[s.length - 1]) && (a[0] === 6 || a[0] === 2)) {
                  i = 0;
                  continue;
                }
                if (a[0] === 3 && (!s || a[1] > s[0] && a[1] < s[3])) {
                  i.label = a[1];
                  break;
                }
                if (a[0] === 6 && i.label < s[1]) {
                  i.label = s[1], s = a;
                  break;
                }
                if (s && i.label < s[2]) {
                  i.label = s[2], i.ops.push(a);
                  break;
                }
                s[2] && i.ops.pop(), i.trys.pop();
                continue;
            }
            a = u.call(o, i);
          } catch (h) {
            a = [6, h], l = 0;
          } finally {
            d = s = 0;
          }
        if (a[0] & 5) throw a[1];
        return { value: a[0] ? a[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ProcessState = e.PROCESS_STATE = void 0, function(o) {
      o[o.CALLING_INTERCEPTION_REQUEST = 0] = "CALLING_INTERCEPTION_REQUEST", o[o.CALLING_INTERCEPTION_RESPONSE = 1] = "CALLING_INTERCEPTION_RESPONSE";
    }(e.PROCESS_STATE || (e.PROCESS_STATE = {}));
    var r = (
      /** @class */
      function() {
        function o() {
          var u = this;
          this.history = [], this.addState = function(i) {
            try {
              process !== void 0 && process.env !== void 0 && process.env.TEST_MODE === "testing" && u.history.push(i);
            } catch {
            }
          }, this.getEventByLastEventByName = function(i) {
            for (var d = u.history.length - 1; d >= 0; d--)
              if (u.history[d] == i)
                return u.history[d];
          }, this.reset = function() {
            u.history = [];
          }, this.waitForEvent = function(i, d) {
            return d === void 0 && (d = 7e3), t(u, void 0, void 0, function() {
              var l, s = this;
              return n(this, function(g) {
                return l = Date.now(), [
                  2,
                  new Promise(function(b) {
                    var c = s;
                    function a() {
                      var h = c.getEventByLastEventByName(i);
                      h === void 0 ? Date.now() - l > d ? b(void 0) : setTimeout(a, 1e3) : b(h);
                    }
                    a();
                  })
                ];
              });
            });
          };
        }
        return o.getInstance = function() {
          return o.instance == null && (o.instance = new o()), o.instance;
        }, o;
      }()
    );
    e.ProcessState = r;
  }(Be)), Be;
}
var We = {}, In;
function sn() {
  return In || (In = 1, Object.defineProperty(We, "__esModule", { value: !0 }), We.supported_fdi = We.package_version = void 0, We.package_version = "20.1.6", We.supported_fdi = ["1.16", "1.17", "1.18", "1.19", "2.0", "3.0", "3.1", "4.0", "4.1"]), We;
}
var et = {}, Ae = {}, Cn;
function bo() {
  if (Cn) return Ae;
  Cn = 1;
  var e = Ae && Ae.__awaiter || function(r, o, u, i) {
    function d(l) {
      return l instanceof u ? l : new u(function(s) {
        s(l);
      });
    }
    return new (u || (u = Promise))(function(l, s) {
      function g(a) {
        try {
          c(i.next(a));
        } catch (h) {
          s(h);
        }
      }
      function b(a) {
        try {
          c(i.throw(a));
        } catch (h) {
          s(h);
        }
      }
      function c(a) {
        a.done ? l(a.value) : d(a.value).then(g, b);
      }
      c((i = i.apply(r, o || [])).next());
    });
  }, t = Ae && Ae.__generator || function(r, o) {
    var u = {
      label: 0,
      sent: function() {
        if (l[0] & 1) throw l[1];
        return l[1];
      },
      trys: [],
      ops: []
    }, i, d, l, s;
    return s = { next: g(0), throw: g(1), return: g(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
      return this;
    }), s;
    function g(c) {
      return function(a) {
        return b([c, a]);
      };
    }
    function b(c) {
      if (i) throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (i = 1, d && (l = c[0] & 2 ? d.return : c[0] ? d.throw || ((l = d.return) && l.call(d), 0) : d.next) && !(l = l.call(d, c[1])).done)
            return l;
          switch (d = 0, l && (c = [c[0] & 2, l.value]), c[0]) {
            case 0:
            case 1:
              l = c;
              break;
            case 4:
              return u.label++, { value: c[1], done: !1 };
            case 5:
              u.label++, d = c[1], c = [0];
              continue;
            case 7:
              c = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (l = u.trys, !(l = l.length > 0 && l[l.length - 1]) && (c[0] === 6 || c[0] === 2)) {
                u = 0;
                continue;
              }
              if (c[0] === 3 && (!l || c[1] > l[0] && c[1] < l[3])) {
                u.label = c[1];
                break;
              }
              if (c[0] === 6 && u.label < l[1]) {
                u.label = l[1], l = c;
                break;
              }
              if (l && u.label < l[2]) {
                u.label = l[2], u.ops.push(c);
                break;
              }
              l[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          c = o.call(r, u);
        } catch (a) {
          c = [6, a], d = 0;
        } finally {
          i = l = 0;
        }
      if (c[0] & 5) throw c[1];
      return { value: c[0] ? c[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Ae, "__esModule", { value: !0 }), Ae.defaultCookieHandlerImplementation = void 0;
  var n = qe();
  return Ae.defaultCookieHandlerImplementation = {
    getCookie: function() {
      return e(this, void 0, void 0, function() {
        return t(this, function(r) {
          return [
            2,
            n.default.getReferenceOrThrow().windowHandler.getWindowUnsafe().document.cookie
          ];
        });
      });
    },
    setCookie: function(r) {
      return e(this, void 0, void 0, function() {
        return t(this, function(o) {
          return n.default.getReferenceOrThrow().windowHandler.getWindowUnsafe().document.cookie = r, [
            2
            /*return*/
          ];
        });
      });
    }
  }, Ae;
}
var Pn;
function Cr() {
  if (Pn) return et;
  Pn = 1, Object.defineProperty(et, "__esModule", { value: !0 }), et.CookieHandlerReference = void 0;
  var e = bo(), t = (
    /** @class */
    function() {
      function n(r) {
        var o = function(u) {
          return u;
        };
        r !== void 0 && (o = r), this.cookieHandler = o(e.defaultCookieHandlerImplementation);
      }
      return n.init = function(r) {
        n.instance === void 0 && (n.instance = new n(r));
      }, n.getReferenceOrThrow = function() {
        if (n.instance === void 0)
          throw new Error("SuperTokensCookieHandler must be initialized before calling this method.");
        return n.instance;
      }, n;
    }()
  );
  return et.CookieHandlerReference = t, et.default = t, et;
}
var tt = {}, Ee = {}, Mt = {}, On;
function yo() {
  if (On) return Mt;
  On = 1, Object.defineProperty(Mt, "__esModule", { value: !0 });
  var e = (
    /** @class */
    function() {
      function n() {
        var r = this;
        this.locked = /* @__PURE__ */ new Map(), this.addToLocked = function(o, u) {
          var i = r.locked.get(o);
          i === void 0 ? u === void 0 ? r.locked.set(o, []) : r.locked.set(o, [u]) : u !== void 0 && (i.unshift(u), r.locked.set(o, i));
        }, this.isLocked = function(o) {
          return r.locked.has(o);
        }, this.lock = function(o) {
          return new Promise(function(u, i) {
            r.isLocked(o) ? r.addToLocked(o, u) : (r.addToLocked(o), u());
          });
        }, this.unlock = function(o) {
          var u = r.locked.get(o);
          if (u === void 0 || u.length === 0) {
            r.locked.delete(o);
            return;
          }
          var i = u.pop();
          r.locked.set(o, u), i !== void 0 && setTimeout(i, 0);
        };
      }
      return n.getInstance = function() {
        return n.instance === void 0 && (n.instance = new n()), n.instance;
      }, n;
    }()
  );
  function t() {
    return e.getInstance();
  }
  return Mt.default = t, Mt;
}
var An;
function So() {
  if (An) return Ee;
  An = 1;
  var e = Ee && Ee.__awaiter || function(g, b, c, a) {
    return new (c || (c = Promise))(function(h, y) {
      function S(v) {
        try {
          m(a.next(v));
        } catch (f) {
          y(f);
        }
      }
      function p(v) {
        try {
          m(a.throw(v));
        } catch (f) {
          y(f);
        }
      }
      function m(v) {
        v.done ? h(v.value) : new c(function(f) {
          f(v.value);
        }).then(S, p);
      }
      m((a = a.apply(g, b || [])).next());
    });
  }, t = Ee && Ee.__generator || function(g, b) {
    var c = { label: 0, sent: function() {
      if (y[0] & 1) throw y[1];
      return y[1];
    }, trys: [], ops: [] }, a, h, y, S;
    return S = { next: p(0), throw: p(1), return: p(2) }, typeof Symbol == "function" && (S[Symbol.iterator] = function() {
      return this;
    }), S;
    function p(v) {
      return function(f) {
        return m([v, f]);
      };
    }
    function m(v) {
      if (a) throw new TypeError("Generator is already executing.");
      for (; c; ) try {
        if (a = 1, h && (y = v[0] & 2 ? h.return : v[0] ? h.throw || ((y = h.return) && y.call(h), 0) : h.next) && !(y = y.call(h, v[1])).done) return y;
        switch (h = 0, y && (v = [v[0] & 2, y.value]), v[0]) {
          case 0:
          case 1:
            y = v;
            break;
          case 4:
            return c.label++, { value: v[1], done: !1 };
          case 5:
            c.label++, h = v[1], v = [0];
            continue;
          case 7:
            v = c.ops.pop(), c.trys.pop();
            continue;
          default:
            if (y = c.trys, !(y = y.length > 0 && y[y.length - 1]) && (v[0] === 6 || v[0] === 2)) {
              c = 0;
              continue;
            }
            if (v[0] === 3 && (!y || v[1] > y[0] && v[1] < y[3])) {
              c.label = v[1];
              break;
            }
            if (v[0] === 6 && c.label < y[1]) {
              c.label = y[1], y = v;
              break;
            }
            if (y && c.label < y[2]) {
              c.label = y[2], c.ops.push(v);
              break;
            }
            y[2] && c.ops.pop(), c.trys.pop();
            continue;
        }
        v = b.call(g, c);
      } catch (f) {
        v = [6, f], h = 0;
      } finally {
        a = y = 0;
      }
      if (v[0] & 5) throw v[1];
      return { value: v[0] ? v[1] : void 0, done: !0 };
    }
  }, n = Ee;
  Object.defineProperty(Ee, "__esModule", { value: !0 });
  var r = yo(), o = "browser-tabs-lock-key", u = {
    key: function(g) {
      return e(n, void 0, void 0, function() {
        return t(this, function(b) {
          throw new Error("Unsupported");
        });
      });
    },
    getItem: function(g) {
      return e(n, void 0, void 0, function() {
        return t(this, function(b) {
          throw new Error("Unsupported");
        });
      });
    },
    clear: function() {
      return e(n, void 0, void 0, function() {
        return t(this, function(g) {
          return [2, window.localStorage.clear()];
        });
      });
    },
    removeItem: function(g) {
      return e(n, void 0, void 0, function() {
        return t(this, function(b) {
          throw new Error("Unsupported");
        });
      });
    },
    setItem: function(g, b) {
      return e(n, void 0, void 0, function() {
        return t(this, function(c) {
          throw new Error("Unsupported");
        });
      });
    },
    keySync: function(g) {
      return window.localStorage.key(g);
    },
    getItemSync: function(g) {
      return window.localStorage.getItem(g);
    },
    clearSync: function() {
      return window.localStorage.clear();
    },
    removeItemSync: function(g) {
      return window.localStorage.removeItem(g);
    },
    setItemSync: function(g, b) {
      return window.localStorage.setItem(g, b);
    }
  };
  function i(g) {
    return new Promise(function(b) {
      return setTimeout(b, g);
    });
  }
  function d(g) {
    for (var b = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", c = "", a = 0; a < g; a++) {
      var h = Math.floor(Math.random() * b.length);
      c += b[h];
    }
    return c;
  }
  function l() {
    return Date.now().toString() + d(15);
  }
  var s = (
    /** @class */
    function() {
      function g(b) {
        this.acquiredIatSet = /* @__PURE__ */ new Set(), this.storageHandler = void 0, this.id = l(), this.acquireLock = this.acquireLock.bind(this), this.releaseLock = this.releaseLock.bind(this), this.releaseLock__private__ = this.releaseLock__private__.bind(this), this.waitForSomethingToChange = this.waitForSomethingToChange.bind(this), this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(this), this.storageHandler = b, g.waiters === void 0 && (g.waiters = []);
      }
      return g.prototype.acquireLock = function(b, c) {
        return c === void 0 && (c = 5e3), e(this, void 0, void 0, function() {
          var a, h, y, S, p, m, v, f;
          return t(this, function(k) {
            switch (k.label) {
              case 0:
                a = Date.now() + d(4), h = Date.now() + c, y = o + "-" + b, S = this.storageHandler === void 0 ? u : this.storageHandler, k.label = 1;
              case 1:
                return Date.now() < h ? [4, i(30)] : [3, 8];
              case 2:
                return k.sent(), p = S.getItemSync(y), p !== null ? [3, 5] : (m = this.id + "-" + b + "-" + a, [4, i(Math.floor(Math.random() * 25))]);
              case 3:
                return k.sent(), S.setItemSync(y, JSON.stringify({
                  id: this.id,
                  iat: a,
                  timeoutKey: m,
                  timeAcquired: Date.now(),
                  timeRefreshed: Date.now()
                })), [4, i(30)];
              case 4:
                return k.sent(), v = S.getItemSync(y), v !== null && (f = JSON.parse(v), f.id === this.id && f.iat === a) ? (this.acquiredIatSet.add(a), this.refreshLockWhileAcquired(y, a), [2, !0]) : [3, 7];
              case 5:
                return g.lockCorrector(this.storageHandler === void 0 ? u : this.storageHandler), [4, this.waitForSomethingToChange(h)];
              case 6:
                k.sent(), k.label = 7;
              case 7:
                return a = Date.now() + d(4), [3, 1];
              case 8:
                return [2, !1];
            }
          });
        });
      }, g.prototype.refreshLockWhileAcquired = function(b, c) {
        return e(this, void 0, void 0, function() {
          var a = this;
          return t(this, function(h) {
            return setTimeout(function() {
              return e(a, void 0, void 0, function() {
                var y, S, p;
                return t(this, function(m) {
                  switch (m.label) {
                    case 0:
                      return [4, r.default().lock(c)];
                    case 1:
                      if (m.sent(), !this.acquiredIatSet.has(c))
                        return r.default().unlock(c), [
                          2
                          /*return*/
                        ];
                      if (y = this.storageHandler === void 0 ? u : this.storageHandler, S = y.getItemSync(b), S !== null)
                        p = JSON.parse(S), p.timeRefreshed = Date.now(), y.setItemSync(b, JSON.stringify(p)), r.default().unlock(c);
                      else
                        return r.default().unlock(c), [
                          2
                          /*return*/
                        ];
                      return this.refreshLockWhileAcquired(b, c), [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }, 1e3), [
              2
              /*return*/
            ];
          });
        });
      }, g.prototype.waitForSomethingToChange = function(b) {
        return e(this, void 0, void 0, function() {
          return t(this, function(c) {
            switch (c.label) {
              case 0:
                return [4, new Promise(function(a) {
                  var h = !1, y = Date.now(), S = 50, p = !1;
                  function m() {
                    if (p || (window.removeEventListener("storage", m), g.removeFromWaiting(m), clearTimeout(v), p = !0), !h) {
                      h = !0;
                      var f = S - (Date.now() - y);
                      f > 0 ? setTimeout(a, f) : a(null);
                    }
                  }
                  window.addEventListener("storage", m), g.addToWaiting(m);
                  var v = setTimeout(m, Math.max(0, b - Date.now()));
                })];
              case 1:
                return c.sent(), [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, g.addToWaiting = function(b) {
        this.removeFromWaiting(b), g.waiters !== void 0 && g.waiters.push(b);
      }, g.removeFromWaiting = function(b) {
        g.waiters !== void 0 && (g.waiters = g.waiters.filter(function(c) {
          return c !== b;
        }));
      }, g.notifyWaiters = function() {
        if (g.waiters !== void 0) {
          var b = g.waiters.slice();
          b.forEach(function(c) {
            return c();
          });
        }
      }, g.prototype.releaseLock = function(b) {
        return e(this, void 0, void 0, function() {
          return t(this, function(c) {
            switch (c.label) {
              case 0:
                return [4, this.releaseLock__private__(b)];
              case 1:
                return [2, c.sent()];
            }
          });
        });
      }, g.prototype.releaseLock__private__ = function(b) {
        return e(this, void 0, void 0, function() {
          var c, a, h, y;
          return t(this, function(S) {
            switch (S.label) {
              case 0:
                return c = this.storageHandler === void 0 ? u : this.storageHandler, a = o + "-" + b, h = c.getItemSync(a), h === null ? [
                  2
                  /*return*/
                ] : (y = JSON.parse(h), y.id !== this.id ? [3, 2] : [4, r.default().lock(y.iat)]);
              case 1:
                S.sent(), this.acquiredIatSet.delete(y.iat), c.removeItemSync(a), r.default().unlock(y.iat), g.notifyWaiters(), S.label = 2;
              case 2:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, g.lockCorrector = function(b) {
        for (var c = Date.now() - 5e3, a = b, h = [], y = 0; ; ) {
          var S = a.keySync(y);
          if (S === null)
            break;
          h.push(S), y++;
        }
        for (var p = !1, m = 0; m < h.length; m++) {
          var v = h[m];
          if (v.includes(o)) {
            var f = a.getItemSync(v);
            if (f !== null) {
              var k = JSON.parse(f);
              (k.timeRefreshed === void 0 && k.timeAcquired < c || k.timeRefreshed !== void 0 && k.timeRefreshed < c) && (a.removeItemSync(v), p = !0);
            }
          }
        }
        p && g.notifyWaiters();
      }, g.waiters = void 0, g;
    }()
  );
  return Ee.default = s, Ee;
}
var En;
function an() {
  if (En) return tt;
  En = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.LockFactoryReference = void 0;
  var e = So(), t = function(r) {
    return function() {
      return Promise.resolve(new e.default(r));
    };
  }, n = (
    /** @class */
    function() {
      function r(o) {
        this.lockFactory = o;
      }
      return r.init = function(o, u) {
        this.instance === void 0 && (this.instance = new r(
          o ?? t(u)
        ));
      }, r.getReferenceOrThrow = function() {
        if (r.instance === void 0)
          throw new Error("SuperTokensLockReference must be initialized before calling this method.");
        return r.instance;
      }, r;
    }()
  );
  return tt.LockFactoryReference = n, tt.default = n, tt;
}
var De = {}, Dn;
function Ct() {
  if (Dn) return De;
  Dn = 1, Object.defineProperty(De, "__esModule", { value: !0 }), De.logDebugMessage = De.disableLogging = De.enableLogging = void 0;
  var e = sn(), t = "com.supertokens", n = !1;
  function r() {
    n = !0;
  }
  De.enableLogging = r;
  function o() {
    n = !1;
  }
  De.disableLogging = o;
  function u(i) {
    n && console.log(
      "".concat(t, ' {t: "').concat((/* @__PURE__ */ new Date()).toISOString(), '", message: "').concat(i, '", supertokens-website-ver: "').concat(e.package_version, '"}')
    );
  }
  return De.logDebugMessage = u, De;
}
var nt = {}, lt = {}, xn;
function ko() {
  if (xn) return lt;
  xn = 1, Object.defineProperty(lt, "__esModule", { value: !0 }), lt.DateProvider = void 0;
  var e = qe(), t = (
    /** @class */
    function() {
      function n() {
        this.clockSkewInMillis = 0, this.thresholdInSeconds = 7;
      }
      return n.init = function() {
        if (n.instance === void 0) {
          n.instance = new n();
          var r = e.default.getReferenceOrThrow().windowHandler.localStorage, o = r.getItemSync(n.CLOCK_SKEW_KEY), u = o !== null ? parseInt(o, 10) : 0;
          n.instance.setClientClockSkewInMillis(u);
        }
      }, n.getReferenceOrThrow = function() {
        if (n.instance === void 0)
          throw new Error("DateProvider must be initialized before calling this method.");
        return n.instance;
      }, n.prototype.getThresholdInSeconds = function() {
        return this.thresholdInSeconds;
      }, n.prototype.setThresholdInSeconds = function(r) {
        this.thresholdInSeconds = r;
      }, n.prototype.setClientClockSkewInMillis = function(r) {
        this.clockSkewInMillis = Math.abs(r) >= this.thresholdInSeconds * 1e3 ? r : 0;
        var o = e.default.getReferenceOrThrow().windowHandler.localStorage;
        o.setItemSync(n.CLOCK_SKEW_KEY, String(r));
      }, n.prototype.getClientClockSkewInMillis = function() {
        return this.clockSkewInMillis;
      }, n.prototype.now = function() {
        return Date.now() + this.getClientClockSkewInMillis();
      }, n.CLOCK_SKEW_KEY = "__st_clockSkewInMillis", n;
    }()
  );
  return lt.DateProvider = t, lt;
}
var Mn;
function Pt() {
  if (Mn) return nt;
  Mn = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.DateProviderReference = void 0;
  var e = ko(), t = (
    /** @class */
    function() {
      function n(r) {
        r !== void 0 ? this.dateProvider = r() : (e.DateProvider.init(), this.dateProvider = e.DateProvider.getReferenceOrThrow());
      }
      return n.init = function(r) {
        n.instance === void 0 && (n.instance = new n(r));
      }, n.getReferenceOrThrow = function() {
        if (n.instance === void 0)
          throw new Error("SuperTokensDateProvider must be initialized before calling this method.");
        return n.instance;
      }, n;
    }()
  );
  return nt.DateProviderReference = t, nt.default = t, nt;
}
var Ln;
function Ot() {
  return Ln || (Ln = 1, function(e) {
    var t = Oe && Oe.__assign || function() {
      return t = Object.assign || function(_) {
        for (var R, $ = 1, A = arguments.length; $ < A; $++) {
          R = arguments[$];
          for (var E in R) Object.prototype.hasOwnProperty.call(R, E) && (_[E] = R[E]);
        }
        return _;
      }, t.apply(this, arguments);
    }, n = Oe && Oe.__awaiter || function(_, R, $, A) {
      function E(N) {
        return N instanceof $ ? N : new $(function(q) {
          q(N);
        });
      }
      return new ($ || ($ = Promise))(function(N, q) {
        function M(J) {
          try {
            j(A.next(J));
          } catch (te) {
            q(te);
          }
        }
        function W(J) {
          try {
            j(A.throw(J));
          } catch (te) {
            q(te);
          }
        }
        function j(J) {
          J.done ? N(J.value) : E(J.value).then(M, W);
        }
        j((A = A.apply(_, R || [])).next());
      });
    }, r = Oe && Oe.__generator || function(_, R) {
      var $ = {
        label: 0,
        sent: function() {
          if (N[0] & 1) throw N[1];
          return N[1];
        },
        trys: [],
        ops: []
      }, A, E, N, q;
      return q = { next: M(0), throw: M(1), return: M(2) }, typeof Symbol == "function" && (q[Symbol.iterator] = function() {
        return this;
      }), q;
      function M(j) {
        return function(J) {
          return W([j, J]);
        };
      }
      function W(j) {
        if (A) throw new TypeError("Generator is already executing.");
        for (; $; )
          try {
            if (A = 1, E && (N = j[0] & 2 ? E.return : j[0] ? E.throw || ((N = E.return) && N.call(E), 0) : E.next) && !(N = N.call(E, j[1])).done)
              return N;
            switch (E = 0, N && (j = [j[0] & 2, N.value]), j[0]) {
              case 0:
              case 1:
                N = j;
                break;
              case 4:
                return $.label++, { value: j[1], done: !1 };
              case 5:
                $.label++, E = j[1], j = [0];
                continue;
              case 7:
                j = $.ops.pop(), $.trys.pop();
                continue;
              default:
                if (N = $.trys, !(N = N.length > 0 && N[N.length - 1]) && (j[0] === 6 || j[0] === 2)) {
                  $ = 0;
                  continue;
                }
                if (j[0] === 3 && (!N || j[1] > N[0] && j[1] < N[3])) {
                  $.label = j[1];
                  break;
                }
                if (j[0] === 6 && $.label < N[1]) {
                  $.label = N[1], N = j;
                  break;
                }
                if (N && $.label < N[2]) {
                  $.label = N[2], $.ops.push(j);
                  break;
                }
                N[2] && $.ops.pop(), $.trys.pop();
                continue;
            }
            j = R.call(_, $);
          } catch (J) {
            j = [6, J], E = 0;
          } finally {
            A = N = 0;
          }
        if (j[0] & 5) throw j[1];
        return { value: j[0] ? j[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.updateClockSkewUsingFrontToken = e.fireSessionUpdateEventsIfNecessary = e.setFrontToken = e.getFrontToken = e.setAntiCSRF = e.saveLastAccessTokenUpdate = e.getTokenForHeaderAuth = e.setToken = e.getStorageNameForToken = e.getLocalSessionState = e.onInvalidClaimResponse = e.onTokenUpdate = e.onUnauthorisedResponse = e.FrontToken = e.AntiCsrfToken = void 0;
    var o = on(), u = sn(), i = Cr(), d = qe(), l = an(), s = Ct(), g = Pt(), b = (
      /** @class */
      function() {
        function _() {
        }
        return _.getToken = function(R) {
          return n(this, void 0, void 0, function() {
            var $;
            return r(this, function(A) {
              switch (A.label) {
                case 0:
                  return (0, s.logDebugMessage)("AntiCsrfToken.getToken: called"), R === void 0 ? (_.tokenInfo = void 0, (0, s.logDebugMessage)("AntiCsrfToken.getToken: returning undefined"), [2, void 0]) : _.tokenInfo !== void 0 ? [3, 2] : [4, ce()];
                case 1:
                  return $ = A.sent(), $ === null ? ((0, s.logDebugMessage)("AntiCsrfToken.getToken: returning undefined"), [2, void 0]) : (_.tokenInfo = {
                    antiCsrf: $,
                    associatedAccessTokenUpdate: R
                  }, [3, 4]);
                case 2:
                  return _.tokenInfo.associatedAccessTokenUpdate === R ? [3, 4] : (_.tokenInfo = void 0, [4, _.getToken(R)]);
                case 3:
                  return [2, A.sent()];
                case 4:
                  return (0, s.logDebugMessage)("AntiCsrfToken.getToken: returning: " + _.tokenInfo.antiCsrf), [2, _.tokenInfo.antiCsrf];
              }
            });
          });
        }, _.removeToken = function() {
          return n(this, void 0, void 0, function() {
            return r(this, function(R) {
              switch (R.label) {
                case 0:
                  return (0, s.logDebugMessage)("AntiCsrfToken.removeToken: called"), _.tokenInfo = void 0, [4, se(void 0)];
                case 1:
                  return R.sent(), [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, _.setItem = function(R, $) {
          return n(this, void 0, void 0, function() {
            return r(this, function(A) {
              switch (A.label) {
                case 0:
                  return R === void 0 ? (_.tokenInfo = void 0, [
                    2
                    /*return*/
                  ]) : ((0, s.logDebugMessage)("AntiCsrfToken.setItem: called"), [4, se($)]);
                case 1:
                  return A.sent(), _.tokenInfo = {
                    antiCsrf: $,
                    associatedAccessTokenUpdate: R
                  }, [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, _;
      }()
    );
    e.AntiCsrfToken = b;
    var c = (
      /** @class */
      function() {
        function _() {
        }
        return _.getTokenInfo = function() {
          return n(this, void 0, void 0, function() {
            var R, $;
            return r(this, function(A) {
              switch (A.label) {
                case 0:
                  return (0, s.logDebugMessage)("FrontToken.getTokenInfo: called"), [4, F()];
                case 1:
                  return R = A.sent(), R !== null ? [3, 5] : [4, w(!1)];
                case 2:
                  return A.sent().status !== "EXISTS" ? [3, 4] : [
                    4,
                    new Promise(function(E) {
                      _.waiters.push(E);
                    })
                  ];
                case 3:
                  return A.sent(), [2, _.getTokenInfo()];
                case 4:
                  return [2, void 0];
                case 5:
                  return $ = D(R), (0, s.logDebugMessage)("FrontToken.getTokenInfo: returning ate: " + $.ate), (0, s.logDebugMessage)("FrontToken.getTokenInfo: returning uid: " + $.uid), (0, s.logDebugMessage)("FrontToken.getTokenInfo: returning up: " + $.up), [2, $];
              }
            });
          });
        }, _.removeToken = function() {
          return n(this, void 0, void 0, function() {
            return r(this, function(R) {
              switch (R.label) {
                case 0:
                  return (0, s.logDebugMessage)("FrontToken.removeToken: called"), [4, U(void 0)];
                case 1:
                  return R.sent(), [4, C("access", "")];
                case 2:
                  return R.sent(), [4, C("refresh", "")];
                case 3:
                  return R.sent(), [4, b.removeToken()];
                case 4:
                  return R.sent(), _.waiters.forEach(function($) {
                    return $(void 0);
                  }), _.waiters = [], [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, _.setItem = function(R) {
          return n(this, void 0, void 0, function() {
            return r(this, function($) {
              switch ($.label) {
                case 0:
                  return [4, ie()];
                case 1:
                  return $.sent(), R === "remove" ? [2, _.removeToken()] : ((0, s.logDebugMessage)("FrontToken.setItem: called"), [4, U(R)]);
                case 2:
                  return $.sent(), _.waiters.forEach(function(A) {
                    return A(void 0);
                  }), _.waiters = [], [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, _.doesTokenExists = function() {
          return n(this, void 0, void 0, function() {
            var R;
            return r(this, function($) {
              switch ($.label) {
                case 0:
                  return [4, L()];
                case 1:
                  return R = $.sent(), [2, R !== null];
              }
            });
          });
        }, _.waiters = [], _;
      }()
    );
    e.FrontToken = c;
    var a = (
      /** @class */
      function() {
        function _() {
        }
        _.init = function($, A) {
          (0, s.logDebugMessage)("init: called"), (0, s.logDebugMessage)("init: Input apiBasePath: " + $.apiBasePath), (0, s.logDebugMessage)("init: Input apiDomain: " + $.apiDomain), (0, s.logDebugMessage)("init: Input autoAddCredentials: " + $.autoAddCredentials), (0, s.logDebugMessage)("init: Input sessionTokenBackendDomain: " + $.sessionTokenBackendDomain), (0, s.logDebugMessage)("init: Input isInIframe: " + $.isInIframe), (0, s.logDebugMessage)("init: Input sessionExpiredStatusCode: " + $.sessionExpiredStatusCode), (0, s.logDebugMessage)("init: Input sessionTokenFrontendDomain: " + $.sessionTokenFrontendDomain), (0, s.logDebugMessage)("init: Input tokenTransferMethod: " + $.tokenTransferMethod);
          var E = d.default.getReferenceOrThrow().windowHandler.getWindowUnsafe();
          _.env = E === void 0 || E.fetch === void 0 ? ao : E, _.refreshTokenUrl = $.apiDomain + $.apiBasePath + "/session/refresh", _.signOutUrl = $.apiDomain + $.apiBasePath + "/signout", _.rid = "session", _.config = $, _.env.__supertokensOriginalFetch === void 0 && ((0, s.logDebugMessage)("init: __supertokensOriginalFetch is undefined"), _.env.__supertokensOriginalFetch = _.env.fetch.bind(_.env), _.env.__supertokensSessionRecipe = A, _.env.fetch = _.env.__supertokensSessionRecipe.addFetchInterceptorsAndReturnModifiedFetch({
            originalFetch: _.env.__supertokensOriginalFetch,
            userContext: {}
          }), _.env.__supertokensSessionRecipe.addXMLHttpRequestInterceptor({
            userContext: {}
          })), _.recipeImpl = _.env.__supertokensSessionRecipe, _.initCalled = !0;
        };
        var R;
        return R = _, _.initCalled = !1, _.doRequest = function($, A, E) {
          return n(void 0, void 0, void 0, function() {
            var N, q, M, W, j, J, te, Se, pe, me, ke, K, be, at, Fe;
            return r(R, function(ae) {
              switch (ae.label) {
                case 0:
                  if (!_.initCalled)
                    throw Error("init function not called");
                  (0, s.logDebugMessage)("doRequest: start of fetch interception"), N = !1;
                  try {
                    q = void 0, typeof E == "string" ? q = E : typeof E == "object" && (typeof E.url == "string" ? q = E.url : typeof E.href == "string" && (q = E.href)), N = !_.recipeImpl.shouldDoInterceptionBasedOnUrl(
                      q,
                      _.config.apiDomain,
                      _.config.sessionTokenBackendDomain
                    );
                  } catch (dn) {
                    if (dn.message === "Please provide a valid domain name")
                      (0, s.logDebugMessage)(
                        "doRequest: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                      ), N = !_.recipeImpl.shouldDoInterceptionBasedOnUrl(
                        d.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                        _.config.apiDomain,
                        _.config.sessionTokenBackendDomain
                      );
                    else
                      throw dn;
                  }
                  return (0, s.logDebugMessage)("doRequest: Value of doNotDoInterception: " + N), N ? ((0, s.logDebugMessage)("doRequest: Returning without interception"), [4, $(A)]) : [3, 2];
                case 1:
                  return [2, ae.sent()];
                case 2:
                  return M = new Headers(
                    A !== void 0 && A.headers !== void 0 ? A.headers : E.headers
                  ), M.has("Authorization") ? [4, O("access")] : [3, 5];
                case 3:
                  return W = ae.sent(), [4, O("refresh")];
                case 4:
                  j = ae.sent(), W !== void 0 && j !== void 0 && M.get("Authorization") === "Bearer ".concat(W) && ((0, s.logDebugMessage)(
                    "doRequest: Removing Authorization from user provided headers because it contains our access token"
                  ), M.delete("Authorization")), ae.label = 5;
                case 5:
                  (0, s.logDebugMessage)("doRequest: Interception started"), o.ProcessState.getInstance().addState(
                    o.PROCESS_STATE.CALLING_INTERCEPTION_REQUEST
                  ), J = 0, te = void 0, ae.label = 6;
                case 6:
                  return [4, w(!0)];
                case 7:
                  return Se = ae.sent(), pe = new Headers(M), me = t(t({}, A), { headers: pe }), Se.status !== "EXISTS" ? [3, 9] : [4, b.getToken(Se.lastAccessTokenUpdate)];
                case 8:
                  ke = ae.sent(), ke !== void 0 && ((0, s.logDebugMessage)("doRequest: Adding anti-csrf token to request"), pe.set("anti-csrf", ke)), ae.label = 9;
                case 9:
                  return _.config.autoAddCredentials && ((0, s.logDebugMessage)("doRequest: Adding credentials include"), me === void 0 ? me = {
                    credentials: "include"
                  } : me.credentials === void 0 && (me = t(t({}, me), {
                    credentials: "include"
                  }))), pe.has("rid") ? (0, s.logDebugMessage)("doRequest: rid header was already there in request") : ((0, s.logDebugMessage)("doRequest: Adding rid header: anti-csrf"), pe.set("rid", "anti-csrf")), K = _.config.tokenTransferMethod, (0, s.logDebugMessage)("doRequest: Adding st-auth-mode header: " + K), pe.set("st-auth-mode", K), [4, x(pe)];
                case 10:
                  return ae.sent(), (0, s.logDebugMessage)("doRequest: Making user's http call"), [4, $(me)];
                case 11:
                  return be = ae.sent(), (0, s.logDebugMessage)("doRequest: User's http call ended"), [4, H(be)];
                case 12:
                  if (ae.sent(), B(
                    Se.status === "EXISTS",
                    be.status,
                    be.headers.get("front-token")
                  ), be.status !== _.config.sessionExpiredStatusCode)
                    return [3, 14];
                  if ((0, s.logDebugMessage)("doRequest: Status code is: " + be.status), J >= _.config.maxRetryAttemptsForSessionRefresh)
                    throw (0, s.logDebugMessage)(
                      "doRequest: Maximum session refresh attempts reached. sessionRefreshAttempts: ".concat(J, ", maxRetryAttemptsForSessionRefresh: ").concat(_.config.maxRetryAttemptsForSessionRefresh)
                    ), at = "Received a 401 response from ".concat(
                      E,
                      ". Attempted to refresh the session and retry the request with the updated session tokens "
                    ).concat(
                      _.config.maxRetryAttemptsForSessionRefresh,
                      " times, but each attempt resulted in a 401 error. The maximum session refresh limit has been reached. Please investigate your API. To increase the session refresh attempts, update maxRetryAttemptsForSessionRefresh in the config."
                    ), console.error(at), new Error(at);
                  return [4, v(Se)];
                case 13:
                  if (Fe = ae.sent(), J++, (0, s.logDebugMessage)("doRequest: sessionRefreshAttempts: " + J), Fe.result !== "RETRY") {
                    if ((0, s.logDebugMessage)("doRequest: Not retrying original request"), Fe.error !== void 0)
                      if (Fe.error instanceof Response)
                        te = Fe.error;
                      else
                        throw Fe.error;
                    else
                      te = be;
                    return [3, 18];
                  }
                  return (0, s.logDebugMessage)("doRequest: Retrying original request"), [3, 17];
                case 14:
                  return be.status !== _.config.invalidClaimStatusCode ? [3, 16] : [4, k(be)];
                case 15:
                  ae.sent(), ae.label = 16;
                case 16:
                  return [2, be];
                case 17:
                  return [3, 6];
                case 18:
                  return [2, te];
              }
            });
          });
        }, _.attemptRefreshingSession = function() {
          return n(void 0, void 0, void 0, function() {
            var $, A;
            return r(R, function(E) {
              switch (E.label) {
                case 0:
                  if (!_.initCalled)
                    throw Error("init function not called");
                  return [4, w(!1)];
                case 1:
                  return $ = E.sent(), [4, v($)];
                case 2:
                  if (A = E.sent(), A.result === "API_ERROR")
                    throw A.error;
                  return [2, A.result === "RETRY"];
              }
            });
          });
        }, _;
      }()
    );
    e.default = a;
    var h = "st-last-access-token-update", y = "st-refresh-token", S = "st-access-token", p = "sAntiCsrf", m = "sFrontToken";
    function v(_) {
      return n(this, void 0, void 0, function() {
        var R, $, A, E, N, q, M, W, j, J, te, Se, pe, me, ke;
        return r(this, function(K) {
          switch (K.label) {
            case 0:
              return [4, l.default.getReferenceOrThrow().lockFactory()];
            case 1:
              R = K.sent(), K.label = 2;
            case 2:
              return (0, s.logDebugMessage)("onUnauthorisedResponse: trying to acquire lock"), [4, R.acquireLock("REFRESH_TOKEN_USE", 1e3)];
            case 3:
              if (!K.sent()) return [3, 21];
              (0, s.logDebugMessage)("onUnauthorisedResponse: lock acquired"), K.label = 4;
            case 4:
              return K.trys.push([4, 17, 19, 21]), [4, w(!1)];
            case 5:
              return $ = K.sent(), $.status === "NOT_EXISTS" ? ((0, s.logDebugMessage)(
                "onUnauthorisedResponse: Not refreshing because local session state is NOT_EXISTS"
              ), a.config.onHandleEvent({
                action: "UNAUTHORISED",
                sessionExpiredOrRevoked: !1,
                userContext: {}
              }), [2, { result: "SESSION_EXPIRED" }]) : (A = $.status === "EXISTS", E = _.status === "EXISTS", N = $.status !== _.status, q = "lastAccessTokenUpdate" in $ && "lastAccessTokenUpdate" in _ && $.lastAccessTokenUpdate !== _.lastAccessTokenUpdate, N && A ? ((0, s.logDebugMessage)(
                "onUnauthorisedResponse: Retrying early because session status has changed and postLockLSS.status is EXISTS"
              ), [2, { result: "RETRY" }]) : A && E && q ? ((0, s.logDebugMessage)(
                "onUnauthorisedResponse: Retrying early because pre and post lastAccessTokenUpdate don't match"
              ), [2, { result: "RETRY" }]) : (M = new Headers(), _.status !== "EXISTS" ? [3, 7] : [4, b.getToken(_.lastAccessTokenUpdate)]));
            case 6:
              W = K.sent(), W !== void 0 && ((0, s.logDebugMessage)(
                "onUnauthorisedResponse: Adding anti-csrf token to refresh API call"
              ), M.set("anti-csrf", W)), K.label = 7;
            case 7:
              return (0, s.logDebugMessage)("onUnauthorisedResponse: Adding rid and fdi-versions to refresh call header"), M.set("rid", a.rid), M.set("fdi-version", u.supported_fdi.join(",")), j = a.config.tokenTransferMethod, (0, s.logDebugMessage)("onUnauthorisedResponse: Adding st-auth-mode header: " + j), M.set("st-auth-mode", j), [4, x(M, !0)];
            case 8:
              return K.sent(), (0, s.logDebugMessage)("onUnauthorisedResponse: Calling refresh pre API hook"), [
                4,
                a.config.preAPIHook({
                  action: "REFRESH_SESSION",
                  requestInit: {
                    method: "post",
                    credentials: "include",
                    headers: M
                  },
                  url: a.refreshTokenUrl,
                  userContext: {}
                })
              ];
            case 9:
              return J = K.sent(), (0, s.logDebugMessage)("onUnauthorisedResponse: Making refresh call"), [
                4,
                a.env.__supertokensOriginalFetch(J.url, J.requestInit)
              ];
            case 10:
              return te = K.sent(), (0, s.logDebugMessage)("onUnauthorisedResponse: Refresh call ended"), [4, H(te)];
            case 11:
              return K.sent(), (0, s.logDebugMessage)("onUnauthorisedResponse: Refresh status code is: " + te.status), Se = te.status === a.config.sessionExpiredStatusCode, te.headers.get("front-token") !== null ? [3, 14] : Se ? [4, c.setItem("remove")] : [3, 13];
            case 12:
              return K.sent(), [3, 14];
            case 13:
              if (te.status === 200)
                throw pe = "The 'front-token' header is missing from a successful refresh-session response. The most likely causes are proxy settings (e.g.: 'front-token' missing from 'access-control-expose-headers' or a proxy stripping this header). Please investigate your API.", console.error(pe), new Error(pe);
              K.label = 14;
            case 14:
              if (B(
                _.status === "EXISTS",
                te.status,
                Se && te.headers.get("front-token") === null ? "remove" : te.headers.get("front-token")
              ), te.status >= 300)
                throw te;
              return [
                4,
                a.config.postAPIHook({
                  action: "REFRESH_SESSION",
                  fetchResponse: te.clone(),
                  requestInit: J.requestInit,
                  url: J.url,
                  userContext: {}
                })
              ];
            case 15:
              return K.sent(), [4, w(!1)];
            case 16:
              return K.sent().status === "NOT_EXISTS" ? ((0, s.logDebugMessage)(
                "onUnauthorisedResponse: local session doesn't exist, so returning session expired"
              ), [2, { result: "SESSION_EXPIRED" }]) : (a.config.onHandleEvent({
                action: "REFRESH_SESSION",
                userContext: {}
              }), (0, s.logDebugMessage)("onUnauthorisedResponse: Sending RETRY signal"), [2, { result: "RETRY" }]);
            case 17:
              return me = K.sent(), [4, w(!1)];
            case 18:
              return K.sent().status === "NOT_EXISTS" ? ((0, s.logDebugMessage)(
                "onUnauthorisedResponse: local session doesn't exist, so returning session expired"
              ), [2, { result: "SESSION_EXPIRED", error: me }]) : ((0, s.logDebugMessage)("onUnauthorisedResponse: sending API_ERROR"), [2, { result: "API_ERROR", error: me }]);
            case 19:
              return [4, R.releaseLock("REFRESH_TOKEN_USE")];
            case 20:
              return K.sent(), (0, s.logDebugMessage)("onUnauthorisedResponse: Released lock"), [
                7
                /*endfinally*/
              ];
            case 21:
              return [4, w(!1)];
            case 22:
              return ke = K.sent(), ke.status === "NOT_EXISTS" ? ((0, s.logDebugMessage)(
                "onUnauthorisedResponse: lock acquired failed and local session doesn't exist, so sending SESSION_EXPIRED"
              ), [2, { result: "SESSION_EXPIRED" }]) : ke.status !== _.status || ke.status === "EXISTS" && _.status === "EXISTS" && ke.lastAccessTokenUpdate !== _.lastAccessTokenUpdate ? ((0, s.logDebugMessage)(
                "onUnauthorisedResponse: lock acquired failed and retrying early because pre and post lastAccessTokenUpdate don't match"
              ), [2, { result: "RETRY" }]) : [3, 2];
            case 23:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    e.onUnauthorisedResponse = v;
    function f() {
      (0, s.logDebugMessage)("onTokenUpdate: firing ACCESS_TOKEN_PAYLOAD_UPDATED event"), a.config.onHandleEvent({
        action: "ACCESS_TOKEN_PAYLOAD_UPDATED",
        userContext: {}
      });
    }
    e.onTokenUpdate = f;
    function k(_) {
      return n(this, void 0, void 0, function() {
        var R;
        return r(this, function($) {
          switch ($.label) {
            case 0:
              return $.trys.push([0, 2, , 3]), [
                4,
                a.recipeImpl.getInvalidClaimsFromResponse({
                  response: _,
                  userContext: {}
                })
              ];
            case 1:
              return R = $.sent(), R && a.config.onHandleEvent({
                action: "API_INVALID_CLAIM",
                claimValidationErrors: R,
                userContext: {}
              }), [3, 3];
            case 2:
              return $.sent(), [3, 3];
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    e.onInvalidClaimResponse = k;
    function w(_) {
      return n(this, void 0, void 0, function() {
        var R, $, A, E, N, q, M;
        return r(this, function(W) {
          switch (W.label) {
            case 0:
              return (0, s.logDebugMessage)("getLocalSessionState: called"), [4, I(h)];
            case 1:
              return R = W.sent(), [4, c.doesTokenExists()];
            case 2:
              return $ = W.sent(), $ && R !== void 0 ? ((0, s.logDebugMessage)("getLocalSessionState: returning EXISTS since both frontToken and lastAccessTokenUpdate exists"), [2, { status: "EXISTS", lastAccessTokenUpdate: R }]) : [3, 3];
            case 3:
              return R ? ((0, s.logDebugMessage)("getLocalSessionState: returning NOT_EXISTS since frontToken was cleared but lastAccessTokenUpdate exists"), [2, { status: "NOT_EXISTS" }]) : [3, 4];
            case 4:
              return A = {
                status: "MAY_EXIST"
              }, _ ? ((0, s.logDebugMessage)("getLocalSessionState: trying to refresh"), [4, v(A)]) : [3, 8];
            case 5:
              return E = W.sent(), E.result !== "RETRY" ? ((0, s.logDebugMessage)(
                "getLocalSessionState: return NOT_EXISTS in case error from backend" + E.result
              ), [
                2,
                {
                  status: "NOT_EXISTS"
                }
              ]) : [4, I(h)];
            case 6:
              return N = W.sent(), [4, c.doesTokenExists()];
            case 7:
              if (q = W.sent(), !q || N === void 0)
                throw M = "Failed to retrieve local session state from cookies after a successful session refresh. This indicates a configuration error or that the browser is preventing cookie writes.", console.error(M), new Error(M);
              return (0, s.logDebugMessage)("getLocalSessionState: returning EXISTS since both frontToken and lastAccessTokenUpdate exists post refresh"), [2, { status: "EXISTS", lastAccessTokenUpdate: N }];
            case 8:
              return (0, s.logDebugMessage)("getLocalSessionState: returning: " + A.status), [2, A];
          }
        });
      });
    }
    e.getLocalSessionState = w;
    function T(_) {
      switch (_) {
        case "access":
          return S;
        case "refresh":
          return y;
      }
    }
    e.getStorageNameForToken = T;
    function C(_, R) {
      var $ = T(_);
      return R !== "" ? ((0, s.logDebugMessage)("setToken: saved ".concat(_, " token into cookies")), P($, R, Date.now() + 31536e5)) : ((0, s.logDebugMessage)("setToken: cleared ".concat(_, " token from cookies")), P($, R, 0));
    }
    e.setToken = C;
    function P(_, R, $) {
      var A = "Fri, 31 Dec 9999 23:59:59 GMT";
      $ !== Number.MAX_SAFE_INTEGER && (A = new Date($).toUTCString());
      var E = a.config.sessionTokenFrontendDomain;
      return E === "localhost" || E === d.default.getReferenceOrThrow().windowHandler.location.getHostName() ? i.default.getReferenceOrThrow().cookieHandler.setCookie(
        "".concat(_, "=").concat(R, ";expires=").concat(A, ";path=/;samesite=").concat(a.config.isInIframe ? "none;secure" : "lax")
      ) : i.default.getReferenceOrThrow().cookieHandler.setCookie(
        "".concat(_, "=").concat(R, ";expires=").concat(A, ";domain=").concat(E, ";path=/;samesite=").concat(a.config.isInIframe ? "none;secure" : "lax")
      );
    }
    function O(_) {
      return n(this, void 0, void 0, function() {
        var R;
        return r(this, function($) {
          return R = T(_), [2, I(R)];
        });
      });
    }
    e.getTokenForHeaderAuth = O;
    function I(_) {
      return n(this, void 0, void 0, function() {
        var R, $, A, E;
        return r(this, function(N) {
          switch (N.label) {
            case 0:
              return $ = "; ", [4, i.default.getReferenceOrThrow().cookieHandler.getCookie()];
            case 1:
              return R = $ + N.sent(), A = R.split("; " + _ + "="), A.length >= 2 && (E = A.pop(), E !== void 0) ? [2, E.split(";").shift()] : [2, void 0];
          }
        });
      });
    }
    function x(_, R) {
      return R === void 0 && (R = !1), n(this, void 0, void 0, function() {
        var $, A;
        return r(this, function(E) {
          switch (E.label) {
            case 0:
              return (0, s.logDebugMessage)("setTokenHeaders: adding existing tokens as header"), [4, O("access")];
            case 1:
              return $ = E.sent(), [4, O("refresh")];
            case 2:
              return A = E.sent(), (R || $ !== void 0) && A !== void 0 ? _.has("Authorization") ? (0, s.logDebugMessage)(
                "setAuthorizationHeaderIfRequired: Authorization header defined by the user, not adding"
              ) : ((0, s.logDebugMessage)(
                "setAuthorizationHeaderIfRequired: added authorization header"
              ), _.set(
                "Authorization",
                "Bearer ".concat(R ? A : $)
              )) : (0, s.logDebugMessage)(
                "setAuthorizationHeaderIfRequired: token for header based auth not found"
              ), [
                2
                /*return*/
              ];
          }
        });
      });
    }
    function H(_) {
      return n(this, void 0, void 0, function() {
        var R, $, A, E, N;
        return r(this, function(q) {
          switch (q.label) {
            case 0:
              return (0, s.logDebugMessage)("saveTokensFromHeaders: Saving updated tokens from the response headers"), R = _.headers.get("st-refresh-token"), R === null ? [3, 2] : ((0, s.logDebugMessage)("saveTokensFromHeaders: saving new refresh token"), [4, C("refresh", R)]);
            case 1:
              q.sent(), q.label = 2;
            case 2:
              return $ = _.headers.get("st-access-token"), $ === null ? [3, 4] : ((0, s.logDebugMessage)("saveTokensFromHeaders: saving new access token"), [4, C("access", $)]);
            case 3:
              q.sent(), q.label = 4;
            case 4:
              return A = _.headers.get("front-token"), A === null ? [3, 6] : ((0, s.logDebugMessage)("saveTokensFromHeaders: Setting sFrontToken: " + A), [4, c.setItem(A)]);
            case 5:
              q.sent(), (0, e.updateClockSkewUsingFrontToken)({ frontToken: A, responseHeaders: _.headers }), q.label = 6;
            case 6:
              return E = _.headers.get("anti-csrf"), E === null ? [3, 9] : [4, w(!1)];
            case 7:
              return N = q.sent(), N.status !== "EXISTS" ? [3, 9] : ((0, s.logDebugMessage)("saveTokensFromHeaders: Setting anti-csrf token"), [4, b.setItem(N.lastAccessTokenUpdate, E)]);
            case 8:
              q.sent(), q.label = 9;
            case 9:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    var ne = void 0;
    function ie() {
      return n(this, void 0, void 0, function() {
        var _;
        return r(this, function(R) {
          switch (R.label) {
            case 0:
              return (0, s.logDebugMessage)("saveLastAccessTokenUpdate: called"), _ = Date.now().toString(), (0, s.logDebugMessage)("saveLastAccessTokenUpdate: setting " + _), [4, P(h, _, Number.MAX_SAFE_INTEGER)];
            case 1:
              return R.sent(), ne !== void 0 ? [3, 3] : [4, I(h)];
            case 2:
              ne = R.sent() === _, R.label = 3;
            case 3:
              return ne === !1 && console.warn(
                "Saving to cookies was not successful, this indicates a configuration error or the browser preventing us from writing the cookies."
              ), [4, P("sIRTFrontend", "", 0)];
            case 4:
              return R.sent(), [
                2
                /*return*/
              ];
          }
        });
      });
    }
    e.saveLastAccessTokenUpdate = ie;
    function ce() {
      return n(this, void 0, void 0, function() {
        function _() {
          return n(this, void 0, void 0, function() {
            var $, A, E, N, q;
            return r(this, function(M) {
              switch (M.label) {
                case 0:
                  return A = "; ", [
                    4,
                    i.default.getReferenceOrThrow().cookieHandler.getCookie()
                  ];
                case 1:
                  return $ = A + M.sent(), E = $.split("; " + p + "="), E.length >= 2 && (N = E.pop(), N !== void 0) ? (q = N.split(";").shift(), q === void 0 ? [2, null] : [2, q]) : [2, null];
              }
            });
          });
        }
        var R;
        return r(this, function($) {
          switch ($.label) {
            case 0:
              return (0, s.logDebugMessage)("getAntiCSRFToken: called"), [4, w(!0)];
            case 1:
              return $.sent().status !== "EXISTS" ? ((0, s.logDebugMessage)(
                "getAntiCSRFToken: Returning because local session state != EXISTS"
              ), [2, null]) : [4, _()];
            case 2:
              return R = $.sent(), (0, s.logDebugMessage)("getAntiCSRFToken: returning: " + R), [2, R];
          }
        });
      });
    }
    function se(_) {
      return n(this, void 0, void 0, function() {
        return r(this, function(R) {
          switch (R.label) {
            case 0:
              return (0, s.logDebugMessage)("setAntiCSRF: called: " + _), _ === void 0 ? [3, 2] : [4, P(p, _, Number.MAX_SAFE_INTEGER)];
            case 1:
              return R.sent(), [3, 4];
            case 2:
              return [4, P(p, "", 0)];
            case 3:
              R.sent(), R.label = 4;
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    e.setAntiCSRF = se;
    function L() {
      return n(this, void 0, void 0, function() {
        var _;
        return r(this, function(R) {
          switch (R.label) {
            case 0:
              return (0, s.logDebugMessage)("getFrontTokenFromCookie: called"), [4, I(m)];
            case 1:
              return _ = R.sent(), [2, _ === void 0 ? null : _];
          }
        });
      });
    }
    function D(_) {
      return JSON.parse(decodeURIComponent(escape(atob(_))));
    }
    function F() {
      return n(this, void 0, void 0, function() {
        var _;
        return r(this, function(R) {
          switch (R.label) {
            case 0:
              return (0, s.logDebugMessage)("getFrontToken: called"), [4, w(!0)];
            case 1:
              return R.sent().status !== "EXISTS" ? ((0, s.logDebugMessage)("getFrontToken: Returning because sIRTFrontend != EXISTS"), [2, null]) : [4, L()];
            case 2:
              return _ = R.sent(), (0, s.logDebugMessage)("getFrontToken: returning: " + _), [2, _];
          }
        });
      });
    }
    e.getFrontToken = F;
    function U(_) {
      return n(this, void 0, void 0, function() {
        var R, $, A;
        return r(this, function(E) {
          switch (E.label) {
            case 0:
              return (0, s.logDebugMessage)("setFrontToken: called"), [4, L()];
            case 1:
              return R = E.sent(), R !== null && _ !== void 0 && ($ = D(R).up, A = D(_).up, JSON.stringify($) !== JSON.stringify(A) && f()), _ !== void 0 ? [3, 3] : [4, P(m, "", 0)];
            case 2:
              return E.sent(), [3, 5];
            case 3:
              return [4, P(m, _, Number.MAX_SAFE_INTEGER)];
            case 4:
              E.sent(), E.label = 5;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    e.setFrontToken = U;
    function B(_, R, $) {
      if ($ == null) {
        (0, s.logDebugMessage)(
          "fireSessionUpdateEventsIfNecessary returning early because the front token was not updated"
        );
        return;
      }
      var A = $ !== "remove";
      (0, s.logDebugMessage)(
        "fireSessionUpdateEventsIfNecessary wasLoggedIn: ".concat(_, " frontTokenExistsAfter: ").concat(A, " status: ").concat(R)
      ), _ ? A || (R === a.config.sessionExpiredStatusCode ? ((0, s.logDebugMessage)("onUnauthorisedResponse: firing UNAUTHORISED event"), a.config.onHandleEvent({
        action: "UNAUTHORISED",
        sessionExpiredOrRevoked: !0,
        userContext: {}
      })) : ((0, s.logDebugMessage)("onUnauthorisedResponse: firing SIGN_OUT event"), a.config.onHandleEvent({
        action: "SIGN_OUT",
        userContext: {}
      }))) : A && ((0, s.logDebugMessage)("onUnauthorisedResponse: firing SESSION_CREATED event"), a.config.onHandleEvent({
        action: "SESSION_CREATED",
        userContext: {}
      }));
    }
    e.fireSessionUpdateEventsIfNecessary = B;
    var G = function(_) {
      var R = _.frontToken, $ = _.responseHeaders;
      if ((0, s.logDebugMessage)("updateClockSkewUsingFrontToken: frontToken: " + R), R == null || R === "remove") {
        (0, s.logDebugMessage)(
          "updateClockSkewUsingFrontToken: the access token payload wasn't updated or is being removed, skipping clock skew update"
        );
        return;
      }
      var A = D(R), E = a.recipeImpl.calculateClockSkewInMillis({
        accessTokenPayload: A.up,
        responseHeaders: $
      });
      g.default.getReferenceOrThrow().dateProvider.setClientClockSkewInMillis(E), (0, s.logDebugMessage)("updateClockSkewUsingFrontToken: Client clock synchronized successfully");
    };
    e.updateClockSkewUsingFrontToken = G;
  }(Oe)), Oe;
}
var rt = {}, Nn;
function Pr() {
  if (Nn) return rt;
  Nn = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.SessionClaimValidatorStore = void 0;
  var e = (
    /** @class */
    function() {
      function t() {
      }
      return t.claimValidatorsAddedByOtherRecipes = [], t.addClaimValidatorFromOtherRecipe = function(n) {
        t.claimValidatorsAddedByOtherRecipes.push(n);
      }, t.getClaimValidatorsAddedByOtherRecipes = function() {
        return t.claimValidatorsAddedByOtherRecipes;
      }, t;
    }()
  );
  return rt.SessionClaimValidatorStore = e, rt.default = e, rt;
}
var Hn;
function wo() {
  if (Hn) return ut;
  Hn = 1, Object.defineProperty(ut, "__esModule", { value: !0 }), ut.getGlobalClaimValidators = void 0;
  var e = rn(), t = Ot(), n = Pr();
  function r(o, u) {
    var i = (0, e.getNormalisedUserContext)(u), d = n.default.getClaimValidatorsAddedByOtherRecipes(), l = t.default.recipeImpl.getGlobalClaimValidators({
      claimValidatorsAddedByOtherRecipes: d,
      userContext: i
    }), s = o !== void 0 ? o(l, i) : l;
    return s;
  }
  return ut.getGlobalClaimValidators = r, ut;
}
var Un;
function _o() {
  return Un || (Un = 1, function(e) {
    function t(n) {
      for (var r in n) e.hasOwnProperty(r) || (e[r] = n[r]);
    }
    e.__esModule = !0, t(wo());
  }(Wt)), Wt;
}
var Fn;
function Or() {
  if (Fn) return Q;
  Fn = 1, Object.defineProperty(Q, "__esModule", { value: !0 }), Q.normaliseUser = Q.normaliseUserResponse = Q.getGlobalClaimValidators = Q.getHashFromLocation = Q.getNormalisedUserContext = Q.checkForSSRErrorAndAppendIfNeeded = Q.getAllQueryParams = Q.getQueryParams = Q.isTest = Q.normaliseInputAppInfoOrThrowError = Q.appendQueryParamsToURL = void 0;
  var e = fo(), t = ho(), n = go(), r = vo(), o = _o();
  function u(p, m) {
    if (m === void 0)
      return p;
    try {
      var v = new URL(p);
      return Object.entries(m).forEach(function(w) {
        var T = w[0], C = w[1];
        v.searchParams.set(T, C);
      }), v.href;
    } catch {
      var f = p.startsWith("/") ? "http:localhost" : "http://localhost/", k = new URL("".concat(f).concat(p));
      return Object.entries(m).forEach(function(T) {
        var C = T[0], P = T[1];
        k.searchParams.set(C, P);
      }), "".concat(k.pathname).concat(k.search);
    }
  }
  Q.appendQueryParamsToURL = u;
  function i(p, m) {
    return m !== void 0 ? new r.default(m) : new r.default(p);
  }
  function d(p) {
    if (p === void 0)
      throw new Error("Please provide the appInfo object when calling supertokens.init");
    if (p.apiDomain === void 0)
      throw new Error("Please provide your apiDomain inside the appInfo object when calling supertokens.init");
    if (p.appName === void 0)
      throw new Error("Please provide your appName inside the appInfo object when calling supertokens.init");
    var m = new r.default("");
    return p.apiGatewayPath !== void 0 && (m = new r.default(p.apiGatewayPath)), {
      appName: p.appName,
      apiDomain: new n.default(p.apiDomain),
      apiBasePath: m.appendPath(
        i(t.DEFAULT_API_BASE_PATH, p.apiBasePath)
      )
    };
  }
  Q.normaliseInputAppInfoOrThrowError = d;
  function l() {
    try {
      return process.env.TEST_MODE === "testing";
    } catch {
      return !1;
    }
  }
  Q.isTest = l;
  function s(p) {
    var m = new URLSearchParams(
      e.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getSearch()
    ), v = m.get(p);
    if (v !== null)
      return v;
  }
  Q.getQueryParams = s;
  function g() {
    return new URLSearchParams(
      e.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getSearch()
    );
  }
  Q.getAllQueryParams = g;
  function b(p) {
    return typeof window > "u" && (p = p + t.SSR_ERROR), p;
  }
  Q.checkForSSRErrorAndAppendIfNeeded = b;
  function c(p) {
    return p === void 0 ? {} : p;
  }
  Q.getNormalisedUserContext = c;
  function a() {
    return e.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getHash().substring(1);
  }
  Q.getHashFromLocation = a;
  function h(p) {
    var m = p.overrideGlobalClaimValidators, v = p.userContext;
    return (0, o.getGlobalClaimValidators)(m, v);
  }
  Q.getGlobalClaimValidators = h;
  function y(p, m) {
    return "createdNewRecipeUser" in m ? m : {
      createdNewRecipeUser: m.createdNewUser,
      user: S(p, m.user)
    };
  }
  Q.normaliseUserResponse = y;
  function S(p, m) {
    if ("loginMethods" in m)
      return m;
    var v = m.email !== void 0 ? [m.email] : [], f = m.phoneNumber !== void 0 ? [m.phoneNumber] : [], k = m.thirdParty !== void 0 ? [m.thirdParty] : [];
    return {
      id: m.id,
      emails: v,
      phoneNumbers: f,
      thirdParty: k,
      isPrimaryUser: !1,
      tenantIds: m.tenantIds,
      timeJoined: m.timeJoined,
      loginMethods: [
        {
          recipeId: p,
          recipeUserId: m.id,
          timeJoined: m.timeJoined,
          tenantIds: m.tenantIds,
          email: m.email,
          phoneNumber: m.email
        }
      ]
    };
  }
  return Q.normaliseUser = S, Q;
}
var ot = {}, Xe = {}, jn;
function To() {
  if (jn) return Xe;
  jn = 1;
  var e = Xe && Xe.__assign || function() {
    return e = Object.assign || function(n) {
      for (var r, o = 1, u = arguments.length; o < u; o++) {
        r = arguments[o];
        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
      }
      return n;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(Xe, "__esModule", { value: !0 }), Xe.getProxyObject = void 0;
  function t(n) {
    for (var r = e(e({}, n), { _call: function(s, g) {
      throw new Error("This function should only be called through the recipe object");
    } }), o = Object.keys(r), u = function(s) {
      s !== "_call" && (r[s] = function() {
        for (var g = [], b = 0; b < arguments.length; b++)
          g[b] = arguments[b];
        return this._call(s, g);
      });
    }, i = 0, d = o; i < d.length; i++) {
      var l = d[i];
      u(l);
    }
    return r;
  }
  return Xe.getProxyObject = t, Xe;
}
var qn;
function $o() {
  if (qn) return ot;
  qn = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.OverrideableBuilder = void 0;
  var e = To(), t = (
    /** @class */
    function() {
      function n(r) {
        this.layers = [r], this.proxies = [];
      }
      return n.prototype.override = function(r) {
        for (var o = (0, e.getProxyObject)(this.layers[0]), u = r(o, this), i = 0, d = Object.keys(this.layers[0]); i < d.length; i++) {
          var l = d[i];
          u[l] === o[l] || l === "_call" ? delete u[l] : u[l] === void 0 && (u[l] = null);
        }
        return this.layers.push(u), this.proxies.push(o), this;
      }, n.prototype.build = function() {
        var r = this;
        if (this.result)
          return this.result;
        this.result = {};
        for (var o = 0, u = this.layers; o < u.length; o++)
          for (var i = u[o], d = 0, l = Object.keys(i); d < l.length; d++) {
            var s = l[d], g = i[s];
            g !== void 0 && (g === null ? this.result[s] = void 0 : typeof g == "function" ? this.result[s] = g.bind(this.result) : this.result[s] = g);
          }
        for (var b = function(h) {
          var y = c.proxies[h];
          y._call = function(S, p) {
            for (var m = h; m >= 0; --m) {
              var v = r.layers[m][S];
              if (v != null)
                return v.bind(r.result).apply(void 0, p);
            }
          };
        }, c = this, a = 0; a < this.proxies.length; ++a)
          b(a);
        return this.result;
      }, n;
    }()
  );
  return ot.OverrideableBuilder = t, ot.default = t, ot;
}
var ze = {}, Vn;
function Ro() {
  if (Vn) return ze;
  Vn = 1;
  var e = ze && ze.__extends || /* @__PURE__ */ function() {
    var n = function(r, o) {
      return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, i) {
        u.__proto__ = i;
      } || function(u, i) {
        for (var d in i) Object.prototype.hasOwnProperty.call(i, d) && (u[d] = i[d]);
      }, n(r, o);
    };
    return function(r, o) {
      if (typeof o != "function" && o !== null)
        throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
      n(r, o);
      function u() {
        this.constructor = r;
      }
      r.prototype = o === null ? Object.create(o) : (u.prototype = o.prototype, new u());
    };
  }();
  Object.defineProperty(ze, "__esModule", { value: !0 }), ze.STGeneralError = void 0;
  var t = (
    /** @class */
    function(n) {
      e(r, n);
      function r(o) {
        var u = n.call(this, o) || this;
        return u.isSuperTokensGeneralError = !0, u;
      }
      return r.isThisError = function(o) {
        return o.isSuperTokensGeneralError === !0;
      }, r;
    }(Error)
  );
  return ze.STGeneralError = t, ze;
}
var Lt = {}, Bn;
function Io() {
  if (Bn) return Lt;
  Bn = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  var e = (
    /** @class */
    /* @__PURE__ */ function() {
      function t(n) {
        this.config = n;
      }
      return t;
    }()
  );
  return Lt.default = e, Lt;
}
var le = {}, Xt = {}, Ge = {}, $e = {}, de = {}, xe = {}, Wn;
function Co() {
  if (Wn) return xe;
  Wn = 1;
  var e = xe && xe.__awaiter || function(o, u, i, d) {
    function l(s) {
      return s instanceof i ? s : new i(function(g) {
        g(s);
      });
    }
    return new (i || (i = Promise))(function(s, g) {
      function b(h) {
        try {
          a(d.next(h));
        } catch (y) {
          g(y);
        }
      }
      function c(h) {
        try {
          a(d.throw(h));
        } catch (y) {
          g(y);
        }
      }
      function a(h) {
        h.done ? s(h.value) : l(h.value).then(b, c);
      }
      a((d = d.apply(o, u || [])).next());
    });
  }, t = xe && xe.__generator || function(o, u) {
    var i = {
      label: 0,
      sent: function() {
        if (s[0] & 1) throw s[1];
        return s[1];
      },
      trys: [],
      ops: []
    }, d, l, s, g;
    return g = { next: b(0), throw: b(1), return: b(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function b(a) {
      return function(h) {
        return c([a, h]);
      };
    }
    function c(a) {
      if (d) throw new TypeError("Generator is already executing.");
      for (; i; )
        try {
          if (d = 1, l && (s = a[0] & 2 ? l.return : a[0] ? l.throw || ((s = l.return) && s.call(l), 0) : l.next) && !(s = s.call(l, a[1])).done)
            return s;
          switch (l = 0, s && (a = [a[0] & 2, s.value]), a[0]) {
            case 0:
            case 1:
              s = a;
              break;
            case 4:
              return i.label++, { value: a[1], done: !1 };
            case 5:
              i.label++, l = a[1], a = [0];
              continue;
            case 7:
              a = i.ops.pop(), i.trys.pop();
              continue;
            default:
              if (s = i.trys, !(s = s.length > 0 && s[s.length - 1]) && (a[0] === 6 || a[0] === 2)) {
                i = 0;
                continue;
              }
              if (a[0] === 3 && (!s || a[1] > s[0] && a[1] < s[3])) {
                i.label = a[1];
                break;
              }
              if (a[0] === 6 && i.label < s[1]) {
                i.label = s[1], s = a;
                break;
              }
              if (s && i.label < s[2]) {
                i.label = s[2], i.ops.push(a);
                break;
              }
              s[2] && i.ops.pop(), i.trys.pop();
              continue;
          }
          a = u.call(o, i);
        } catch (h) {
          a = [6, h], l = 0;
        } finally {
          d = s = 0;
        }
      if (a[0] & 5) throw a[1];
      return { value: a[0] ? a[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(xe, "__esModule", { value: !0 }), xe.createAxiosErrorFromFetchResp = void 0;
  function n(o, u, i, d, l) {
    return o.config = u, i && (o.code = i), o.request = d, o.response = l, o.isAxiosError = !0, o.toJSON = function() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: this.config,
        code: this.code
      };
    }, o;
  }
  function r(o) {
    return e(this, void 0, void 0, function() {
      var u, i, d, l, s;
      return t(this, function(g) {
        switch (g.label) {
          case 0:
            if (u = {
              url: o.url,
              headers: o.headers
            }, i = "status" in o, !i) return [3, 12];
            if (l = o.headers.get("content-type"), s = void 0, l !== null) return [3, 5];
            g.label = 1;
          case 1:
            return g.trys.push([1, 3, , 4]), [4, o.text()];
          case 2:
            return s = g.sent(), [3, 4];
          case 3:
            return g.sent(), s = "", [3, 4];
          case 4:
            return [3, 11];
          case 5:
            return l.includes("application/json") ? [4, o.json()] : [3, 7];
          case 6:
            return s = g.sent(), [3, 11];
          case 7:
            return l.includes("text/") ? [4, o.text()] : [3, 9];
          case 8:
            return s = g.sent(), [3, 11];
          case 9:
            return [4, o.blob()];
          case 10:
            s = g.sent(), g.label = 11;
          case 11:
            d = {
              data: s,
              status: o.status,
              statusText: o.statusText,
              headers: o.headers,
              config: u,
              request: void 0
            }, g.label = 12;
          case 12:
            return [
              2,
              n(
                i ? new Error("Request failed with status code " + o.status) : o,
                u,
                o.code,
                void 0,
                d
              )
            ];
        }
      });
    });
  }
  return xe.createAxiosErrorFromFetchResp = r, xe;
}
var Xn;
function Po() {
  if (Xn) return de;
  Xn = 1;
  var e = de && de.__assign || function() {
    return e = Object.assign || function(m) {
      for (var v, f = 1, k = arguments.length; f < k; f++) {
        v = arguments[f];
        for (var w in v) Object.prototype.hasOwnProperty.call(v, w) && (m[w] = v[w]);
      }
      return m;
    }, e.apply(this, arguments);
  }, t = de && de.__awaiter || function(m, v, f, k) {
    function w(T) {
      return T instanceof f ? T : new f(function(C) {
        C(T);
      });
    }
    return new (f || (f = Promise))(function(T, C) {
      function P(x) {
        try {
          I(k.next(x));
        } catch (H) {
          C(H);
        }
      }
      function O(x) {
        try {
          I(k.throw(x));
        } catch (H) {
          C(H);
        }
      }
      function I(x) {
        x.done ? T(x.value) : w(x.value).then(P, O);
      }
      I((k = k.apply(m, v || [])).next());
    });
  }, n = de && de.__generator || function(m, v) {
    var f = {
      label: 0,
      sent: function() {
        if (T[0] & 1) throw T[1];
        return T[1];
      },
      trys: [],
      ops: []
    }, k, w, T, C;
    return C = { next: P(0), throw: P(1), return: P(2) }, typeof Symbol == "function" && (C[Symbol.iterator] = function() {
      return this;
    }), C;
    function P(I) {
      return function(x) {
        return O([I, x]);
      };
    }
    function O(I) {
      if (k) throw new TypeError("Generator is already executing.");
      for (; f; )
        try {
          if (k = 1, w && (T = I[0] & 2 ? w.return : I[0] ? w.throw || ((T = w.return) && T.call(w), 0) : w.next) && !(T = T.call(w, I[1])).done)
            return T;
          switch (w = 0, T && (I = [I[0] & 2, T.value]), I[0]) {
            case 0:
            case 1:
              T = I;
              break;
            case 4:
              return f.label++, { value: I[1], done: !1 };
            case 5:
              f.label++, w = I[1], I = [0];
              continue;
            case 7:
              I = f.ops.pop(), f.trys.pop();
              continue;
            default:
              if (T = f.trys, !(T = T.length > 0 && T[T.length - 1]) && (I[0] === 6 || I[0] === 2)) {
                f = 0;
                continue;
              }
              if (I[0] === 3 && (!T || I[1] > T[0] && I[1] < T[3])) {
                f.label = I[1];
                break;
              }
              if (I[0] === 6 && f.label < T[1]) {
                f.label = T[1], T = I;
                break;
              }
              if (T && f.label < T[2]) {
                f.label = T[2], f.ops.push(I);
                break;
              }
              T[2] && f.ops.pop(), f.trys.pop();
              continue;
          }
          I = v.call(m, f);
        } catch (x) {
          I = [6, x], w = 0;
        } finally {
          k = T = 0;
        }
      if (I[0] & 5) throw I[1];
      return { value: I[0] ? I[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(de, "__esModule", { value: !0 }), de.responseErrorInterceptor = de.responseInterceptor = de.interceptorFunctionRequestFulfilled = void 0;
  var r = Co(), o = Ot(), u = on(), i = qe(), d = Ct();
  function l(m) {
    m.__supertokensSessionRefreshAttempts === void 0 && (m.__supertokensSessionRefreshAttempts = 0), m.__supertokensSessionRefreshAttempts++;
  }
  function s(m) {
    return m.__supertokensSessionRefreshAttempts === void 0 && (m.__supertokensSessionRefreshAttempts = 0), m.__supertokensSessionRefreshAttempts >= o.default.config.maxRetryAttemptsForSessionRefresh;
  }
  function g(m) {
    var v = m.url === void 0 ? "" : m.url, f = m.baseURL;
    return f !== void 0 && (v.charAt(0) === "/" && f.charAt(f.length - 1) === "/" ? v = f + v.substr(1) : v.charAt(0) !== "/" && f.charAt(f.length - 1) !== "/" ? v = f + "/" + v : v = f + v), v;
  }
  function b(m) {
    return t(this, void 0, void 0, function() {
      var v, f, k, w, T, C;
      return n(this, function(P) {
        switch (P.label) {
          case 0:
            (0, d.logDebugMessage)("interceptorFunctionRequestFulfilled: started axios interception"), v = g(m), f = !1;
            try {
              f = typeof v == "string" && !o.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                v,
                o.default.config.apiDomain,
                o.default.config.sessionTokenBackendDomain
              );
            } catch (O) {
              if (O.message === "Please provide a valid domain name")
                (0, d.logDebugMessage)(
                  "interceptorFunctionRequestFulfilled: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                ), f = !o.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                  i.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                  o.default.config.apiDomain,
                  o.default.config.sessionTokenBackendDomain
                );
              else
                throw O;
            }
            return (0, d.logDebugMessage)("interceptorFunctionRequestFulfilled: Value of doNotDoInterception: " + f), f ? ((0, d.logDebugMessage)(
              "interceptorFunctionRequestFulfilled: Returning config unchanged"
            ), [2, m]) : ((0, d.logDebugMessage)("interceptorFunctionRequestFulfilled: Modifying config"), u.ProcessState.getInstance().addState(
              u.PROCESS_STATE.CALLING_INTERCEPTION_REQUEST
            ), [4, (0, o.getLocalSessionState)(!0)]);
          case 1:
            return k = P.sent(), w = m, k.status !== "EXISTS" ? [3, 3] : [4, o.AntiCsrfToken.getToken(k.lastAccessTokenUpdate)];
          case 2:
            T = P.sent(), T !== void 0 && ((0, d.logDebugMessage)(
              "interceptorFunctionRequestFulfilled: Adding anti-csrf token to request"
            ), w = e(e({}, w), {
              headers: w === void 0 ? {
                "anti-csrf": T
              } : e(e({}, w.headers), { "anti-csrf": T })
            })), P.label = 3;
          case 3:
            return o.default.config.autoAddCredentials && w.withCredentials === void 0 && ((0, d.logDebugMessage)(
              "interceptorFunctionRequestFulfilled: Adding credentials include"
            ), w = e(e({}, w), { withCredentials: !0 })), (0, d.logDebugMessage)("interceptorFunctionRequestFulfilled: Adding rid header: anti-csrf (it may be overriden by the user's provided rid)"), w = e(e({}, w), {
              headers: w === void 0 ? {
                rid: "anti-csrf"
              } : e({ rid: "anti-csrf" }, w.headers)
            }), C = o.default.config.tokenTransferMethod, (0, d.logDebugMessage)("interceptorFunctionRequestFulfilled: Adding st-auth-mode header: " + C), w.headers["st-auth-mode"] = C, [4, p(w)];
          case 4:
            return w = P.sent(), [4, y(w)];
          case 5:
            return P.sent(), (0, d.logDebugMessage)("interceptorFunctionRequestFulfilled: returning modified config"), [2, w];
        }
      });
    });
  }
  de.interceptorFunctionRequestFulfilled = b;
  function c(m) {
    var v = this;
    return function(f) {
      return t(v, void 0, void 0, function() {
        var k, w, T, C;
        return n(this, function(P) {
          switch (P.label) {
            case 0:
              if (k = !1, !o.default.initCalled)
                throw new Error("init function not called");
              (0, d.logDebugMessage)("responseInterceptor: started"), (0, d.logDebugMessage)("responseInterceptor: already intercepted: " + f.headers["x-supertokens-xhr-intercepted"]), w = g(f.config);
              try {
                k = typeof w == "string" && !o.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                  w,
                  o.default.config.apiDomain,
                  o.default.config.sessionTokenBackendDomain
                ) || !!f.headers["x-supertokens-xhr-intercepted"];
              } catch (O) {
                if (O.message === "Please provide a valid domain name")
                  (0, d.logDebugMessage)(
                    "responseInterceptor: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                  ), k = !o.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                    i.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                    o.default.config.apiDomain,
                    o.default.config.sessionTokenBackendDomain
                  ) || !!f.headers["x-supertokens-xhr-intercepted"];
                else
                  throw O;
              }
              return (0, d.logDebugMessage)("responseInterceptor: Value of doNotDoInterception: " + k), k ? ((0, d.logDebugMessage)("responseInterceptor: Returning without interception"), [2, f]) : ((0, d.logDebugMessage)("responseInterceptor: Interception started"), u.ProcessState.getInstance().addState(
                u.PROCESS_STATE.CALLING_INTERCEPTION_RESPONSE
              ), [4, (0, o.getLocalSessionState)(!1)]);
            case 1:
              return T = P.sent(), [4, S(f)];
            case 2:
              return P.sent(), (0, o.fireSessionUpdateEventsIfNecessary)(T.status === "EXISTS", f.status, f.headers["front-token"]), f.status !== o.default.config.sessionExpiredStatusCode ? [3, 3] : ((0, d.logDebugMessage)("responseInterceptor: Status code is: " + f.status), C = f.config, [
                2,
                h.doRequest(
                  function(O) {
                    return m(O);
                  },
                  C,
                  w,
                  f,
                  void 0,
                  !0
                )
              ]);
            case 3:
              return f.status !== o.default.config.invalidClaimStatusCode ? [3, 5] : [4, (0, o.onInvalidClaimResponse)(f)];
            case 4:
              P.sent(), P.label = 5;
            case 5:
              return [2, f];
          }
        });
      });
    };
  }
  de.responseInterceptor = c;
  function a(m) {
    var v = this;
    return function(f) {
      return t(v, void 0, void 0, function() {
        var k;
        return n(this, function(w) {
          switch (w.label) {
            case 0:
              if ((0, d.logDebugMessage)("responseErrorInterceptor: called"), (0, d.logDebugMessage)("responseErrorInterceptor: already intercepted: " + (f.response && f.response.headers["x-supertokens-xhr-intercepted"])), f.response === void 0 || f.response.headers["x-supertokens-xhr-intercepted"])
                throw f;
              return f.response !== void 0 && f.response.status === o.default.config.sessionExpiredStatusCode ? ((0, d.logDebugMessage)("responseErrorInterceptor: Status code is: " + f.response.status), k = f.config, [
                2,
                h.doRequest(
                  function(T) {
                    return m(T);
                  },
                  k,
                  g(k),
                  void 0,
                  f,
                  !0
                )
              ]) : [3, 1];
            case 1:
              return f.response !== void 0 && f.response.status === o.default.config.invalidClaimStatusCode ? [4, (0, o.onInvalidClaimResponse)(f.response)] : [3, 3];
            case 2:
              w.sent(), w.label = 3;
            case 3:
              throw f;
          }
        });
      });
    };
  }
  de.responseErrorInterceptor = a;
  var h = (
    /** @class */
    function() {
      function m() {
      }
      var v;
      return v = m, m.doRequest = function(f, k, w, T, C, P) {
        return P === void 0 && (P = !1), t(void 0, void 0, void 0, function() {
          var O, I, x, H, ne, ie, ce, se, F, L, D, F, U, B, G;
          return n(v, function(_) {
            switch (_.label) {
              case 0:
                if (!o.default.initCalled)
                  throw Error("init function not called");
                (0, d.logDebugMessage)("doRequest: called"), O = !1;
                try {
                  O = typeof w == "string" && !o.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                    w,
                    o.default.config.apiDomain,
                    o.default.config.sessionTokenBackendDomain
                  ) && P;
                } catch (R) {
                  if (R.message === "Please provide a valid domain name")
                    (0, d.logDebugMessage)(
                      "doRequest: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                    ), O = !o.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                      i.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                      o.default.config.apiDomain,
                      o.default.config.sessionTokenBackendDomain
                    ) && P;
                  else
                    throw R;
                }
                if ((0, d.logDebugMessage)("doRequest: Value of doNotDoInterception: " + O), !O) return [3, 2];
                if ((0, d.logDebugMessage)("doRequest: Returning without interception"), C !== void 0)
                  throw C;
                return T !== void 0 ? [2, T] : [4, f(k)];
              case 1:
                return [2, _.sent()];
              case 2:
                return (0, d.logDebugMessage)("doRequest: Interception started"), [4, p(k)];
              case 3:
                k = _.sent(), I = void 0, _.label = 4;
              case 4:
                return [4, (0, o.getLocalSessionState)(!0)];
              case 5:
                return x = _.sent(), H = k, x.status !== "EXISTS" ? [3, 7] : [4, o.AntiCsrfToken.getToken(x.lastAccessTokenUpdate)];
              case 6:
                ne = _.sent(), ne !== void 0 && ((0, d.logDebugMessage)("doRequest: Adding anti-csrf token to request"), H = e(e({}, H), {
                  headers: H === void 0 ? {
                    "anti-csrf": ne
                  } : e(e({}, H.headers), {
                    "anti-csrf": ne
                  })
                })), _.label = 7;
              case 7:
                return o.default.config.autoAddCredentials && H.withCredentials === void 0 && ((0, d.logDebugMessage)("doRequest: Adding credentials include"), H = e(e({}, H), { withCredentials: !0 })), (0, d.logDebugMessage)("doRequest: Adding rid header: anti-csrf (May get overriden by user's rid)"), H = e(e({}, H), {
                  headers: H === void 0 ? {
                    rid: "anti-csrf"
                  } : e({ rid: "anti-csrf" }, H.headers)
                }), ie = o.default.config.tokenTransferMethod, (0, d.logDebugMessage)("doRequest: Adding st-auth-mode header: " + ie), H.headers["st-auth-mode"] = ie, [4, y(H)];
              case 8:
                _.sent(), _.label = 9;
              case 9:
                if (_.trys.push([9, 14, , 27]), ce = C, se = T, C = void 0, T = void 0, ce !== void 0)
                  throw (0, d.logDebugMessage)(
                    "doRequest: Not making call because localPrevError is not undefined"
                  ), ce;
                return se !== void 0 ? (0, d.logDebugMessage)(
                  "doRequest: Not making call because localPrevResponse is not undefined"
                ) : (0, d.logDebugMessage)("doRequest: Making user's http call"), se !== void 0 ? [3, 11] : [4, f(H)];
              case 10:
                return L = _.sent(), [3, 12];
              case 11:
                L = se, _.label = 12;
              case 12:
                return F = L, (0, d.logDebugMessage)("doRequest: User's http call ended"), [4, S(F)];
              case 13:
                return _.sent(), (0, o.fireSessionUpdateEventsIfNecessary)(x.status === "EXISTS", F.status, F.headers["front-token"]), [2, F];
              case 14:
                return D = _.sent(), F = D.response, F === void 0 ? [3, 25] : [4, S(F)];
              case 15:
                if (_.sent(), (0, o.fireSessionUpdateEventsIfNecessary)(x.status === "EXISTS", F.status, F.headers["front-token"]), F.status !== o.default.config.sessionExpiredStatusCode)
                  return [3, 21];
                if ((0, d.logDebugMessage)("doRequest: Status code is: " + F.status), s(k))
                  throw (0, d.logDebugMessage)(
                    "doRequest: Maximum session refresh attempts reached. sessionRefreshAttempts: ".concat(
                      k.__supertokensSessionRefreshAttempts,
                      ", maxRetryAttemptsForSessionRefresh: "
                    ).concat(o.default.config.maxRetryAttemptsForSessionRefresh)
                  ), U = "Received a 401 response from ".concat(
                    w,
                    ". Attempted to refresh the session and retry the request with the updated session tokens "
                  ).concat(
                    o.default.config.maxRetryAttemptsForSessionRefresh,
                    " times, but each attempt resulted in a 401 error. The maximum session refresh limit has been reached. Please investigate your API. To increase the session refresh attempts, update maxRetryAttemptsForSessionRefresh in the config."
                  ), console.error(U), new Error(U);
                return [4, (0, o.onUnauthorisedResponse)(x)];
              case 16:
                return B = _.sent(), l(k), (0, d.logDebugMessage)("doRequest: sessionRefreshAttempts: " + k.__supertokensSessionRefreshAttempts), B.result === "RETRY" ? [3, 20] : ((0, d.logDebugMessage)("doRequest: Not retrying original request"), B.error === void 0 ? [3, 18] : [4, (0, r.createAxiosErrorFromFetchResp)(B.error)]);
              case 17:
                return G = _.sent(), [3, 19];
              case 18:
                G = D, _.label = 19;
              case 19:
                return I = G, [3, 28];
              case 20:
                return (0, d.logDebugMessage)("doRequest: Retrying original request"), [3, 24];
              case 21:
                return F.status !== o.default.config.invalidClaimStatusCode ? [3, 23] : [4, (0, o.onInvalidClaimResponse)(F)];
              case 22:
                _.sent(), _.label = 23;
              case 23:
                throw D;
              case 24:
                return [3, 26];
              case 25:
                throw D;
              case 26:
                return [3, 27];
              case 27:
                return [3, 4];
              case 28:
                throw I;
            }
          });
        });
      }, m;
    }()
  );
  de.default = h;
  function y(m) {
    return t(this, void 0, void 0, function() {
      var v, f;
      return n(this, function(k) {
        switch (k.label) {
          case 0:
            return m.headers === void 0 && (m.headers = {}), (0, d.logDebugMessage)("setAuthorizationHeaderIfRequired: adding existing tokens as header"), [4, (0, o.getTokenForHeaderAuth)("access")];
          case 1:
            return v = k.sent(), [4, (0, o.getTokenForHeaderAuth)("refresh")];
          case 2:
            return f = k.sent(), v !== void 0 && f !== void 0 ? m.headers.Authorization !== void 0 || m.headers.authorization !== void 0 ? (0, d.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: Authorization header defined by the user, not adding"
            ) : ((0, d.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: added authorization header"
            ), m.headers = e(e({}, m.headers), {
              Authorization: "Bearer ".concat(v)
            }), m.__supertokensAddedAuthHeader = !0) : (0, d.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: token for header based auth not found"
            ), [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function S(m) {
    return t(this, void 0, void 0, function() {
      var v, f, k, w, T, C;
      return n(this, function(P) {
        switch (P.label) {
          case 0:
            return (0, d.logDebugMessage)("saveTokensFromHeaders: Saving updated tokens from the response"), v = m.headers["st-refresh-token"], v === void 0 ? [3, 2] : ((0, d.logDebugMessage)("saveTokensFromHeaders: saving new refresh token"), [4, (0, o.setToken)("refresh", v)]);
          case 1:
            P.sent(), P.label = 2;
          case 2:
            return f = m.headers["st-access-token"], f === void 0 ? [3, 4] : ((0, d.logDebugMessage)("saveTokensFromHeaders: saving new access token"), [4, (0, o.setToken)("access", f)]);
          case 3:
            P.sent(), P.label = 4;
          case 4:
            return k = m.headers["front-token"], k === void 0 ? [3, 6] : ((0, d.logDebugMessage)("doRequest: Setting sFrontToken: " + k), [4, o.FrontToken.setItem(k)]);
          case 5:
            P.sent(), w = new Headers(), Object.entries(m.headers).forEach(function(O) {
              var I = O[0], x = O[1];
              Array.isArray(x) ? x.forEach(function(H) {
                return w.append(I, H);
              }) : w.append(I, x);
            }), (0, o.updateClockSkewUsingFrontToken)({ frontToken: k, responseHeaders: w }), P.label = 6;
          case 6:
            return T = m.headers["anti-csrf"], T === void 0 ? [3, 9] : [4, (0, o.getLocalSessionState)(!1)];
          case 7:
            return C = P.sent(), C.status !== "EXISTS" ? [3, 9] : ((0, d.logDebugMessage)("doRequest: Setting anti-csrf token"), [4, o.AntiCsrfToken.setItem(C.lastAccessTokenUpdate, T)]);
          case 8:
            P.sent(), P.label = 9;
          case 9:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function p(m) {
    return t(this, void 0, void 0, function() {
      var v, f, k, w;
      return n(this, function(T) {
        switch (T.label) {
          case 0:
            return [4, (0, o.getTokenForHeaderAuth)("access")];
          case 1:
            return v = T.sent(), [4, (0, o.getTokenForHeaderAuth)("refresh")];
          case 2:
            return f = T.sent(), k = m.headers.Authorization || m.headers.authorization, v !== void 0 && f !== void 0 && (k === "Bearer ".concat(v) || "__supertokensAddedAuthHeader" in m) ? ((0, d.logDebugMessage)(
              "removeAuthHeaderIfMatchesLocalToken: Removing Authorization from user provided headers because it contains our access token"
            ), w = e(e({}, m), { headers: e({}, m.headers) }), delete w.headers.authorization, delete w.headers.Authorization, [2, w]) : [2, m];
        }
      });
    });
  }
  return de;
}
var Me = {}, zn;
function Oo() {
  if (zn) return Me;
  zn = 1;
  var e = Me && Me.__awaiter || function(c, a, h, y) {
    function S(p) {
      return p instanceof h ? p : new h(function(m) {
        m(p);
      });
    }
    return new (h || (h = Promise))(function(p, m) {
      function v(w) {
        try {
          k(y.next(w));
        } catch (T) {
          m(T);
        }
      }
      function f(w) {
        try {
          k(y.throw(w));
        } catch (T) {
          m(T);
        }
      }
      function k(w) {
        w.done ? p(w.value) : S(w.value).then(v, f);
      }
      k((y = y.apply(c, a || [])).next());
    });
  }, t = Me && Me.__generator || function(c, a) {
    var h = {
      label: 0,
      sent: function() {
        if (p[0] & 1) throw p[1];
        return p[1];
      },
      trys: [],
      ops: []
    }, y, S, p, m;
    return m = { next: v(0), throw: v(1), return: v(2) }, typeof Symbol == "function" && (m[Symbol.iterator] = function() {
      return this;
    }), m;
    function v(k) {
      return function(w) {
        return f([k, w]);
      };
    }
    function f(k) {
      if (y) throw new TypeError("Generator is already executing.");
      for (; h; )
        try {
          if (y = 1, S && (p = k[0] & 2 ? S.return : k[0] ? S.throw || ((p = S.return) && p.call(S), 0) : S.next) && !(p = p.call(S, k[1])).done)
            return p;
          switch (S = 0, p && (k = [k[0] & 2, p.value]), k[0]) {
            case 0:
            case 1:
              p = k;
              break;
            case 4:
              return h.label++, { value: k[1], done: !1 };
            case 5:
              h.label++, S = k[1], k = [0];
              continue;
            case 7:
              k = h.ops.pop(), h.trys.pop();
              continue;
            default:
              if (p = h.trys, !(p = p.length > 0 && p[p.length - 1]) && (k[0] === 6 || k[0] === 2)) {
                h = 0;
                continue;
              }
              if (k[0] === 3 && (!p || k[1] > p[0] && k[1] < p[3])) {
                h.label = k[1];
                break;
              }
              if (k[0] === 6 && h.label < p[1]) {
                h.label = p[1], p = k;
                break;
              }
              if (p && h.label < p[2]) {
                h.label = p[2], h.ops.push(k);
                break;
              }
              p[2] && h.ops.pop(), h.trys.pop();
              continue;
          }
          k = a.call(c, h);
        } catch (w) {
          k = [6, w], S = 0;
        } finally {
          y = p = 0;
        }
      if (k[0] & 5) throw k[1];
      return { value: k[0] ? k[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Me, "__esModule", { value: !0 }), Me.addInterceptorsToXMLHttpRequest = void 0;
  var n = Ot(), r = Ct(), o = qe(), u = on(), i = ["readystatechange", "abort", "error", "load", "loadend", "loadstart", "progress", "timeout"];
  function d() {
    var c = new Promise(function(h) {
      return setTimeout(h, 0);
    }), a = XMLHttpRequest;
    (0, r.logDebugMessage)("addInterceptorsToXMLHttpRequest called"), XMLHttpRequest = function() {
      var h = new a(), y = this, S = [], p = [], m = {}, v, f = /* @__PURE__ */ new Map(), k = c;
      function w(L) {
        k = k.finally(function() {
          var D;
          return (D = L()) === null || D === void 0 ? void 0 : D.catch(function(F) {
            var U = new ProgressEvent("error");
            U.error = F, y.onerror !== void 0 && y.onerror !== null && y.onerror(U), x("error", U);
          });
        });
      }
      var T = "", C = !1, P = void 0, O, I = 0;
      y.onload = null, y.onreadystatechange = null, y.onloadend = null, y.addEventListener = function(L, D, F) {
        var U = f.get(L);
        U === void 0 && (U = /* @__PURE__ */ new Set(), f.set(L, U)), U.add(D);
      }, y.removeEventListener = function(L, D) {
        var F = f.get(L);
        F === void 0 && (F = /* @__PURE__ */ new Set(), f.set(L, F)), F.delete(D);
      };
      function x(L, D) {
        var F = f.get(L);
        (0, r.logDebugMessage)(
          "XHRInterceptor dispatching ".concat(D.type, " to ").concat(F ? F.size : 0, " listeners")
        ), F && Array.from(F).forEach(function(U) {
          return U.apply(y, [D]);
        });
      }
      function H() {
        return e(this, void 0, void 0, function() {
          var L, D, F;
          return t(this, function(U) {
            switch (U.label) {
              case 0:
                if (P === void 0)
                  throw new Error("Should never come here..");
                if ((0, r.logDebugMessage)("XHRInterceptor.handleRetryPostRefreshing: preRequestLSS " + P.status), I >= n.default.config.maxRetryAttemptsForSessionRefresh)
                  throw (0, r.logDebugMessage)(
                    "XHRInterceptor.handleRetryPostRefreshing: Maximum session refresh attempts reached. sessionRefreshAttempts: ".concat(I, ", maxRetryAttemptsForSessionRefresh: ").concat(n.default.config.maxRetryAttemptsForSessionRefresh)
                  ), m.status = 0, m.statusText = "", m.responseType = "", L = "Received a 401 response from ".concat(
                    T,
                    ". Attempted to refresh the session and retry the request with the updated session tokens "
                  ).concat(
                    n.default.config.maxRetryAttemptsForSessionRefresh,
                    " times, but each attempt resulted in a 401 error. The maximum session refresh limit has been reached. Please investigate your API. To increase the session refresh attempts, update maxRetryAttemptsForSessionRefresh in the config."
                  ), console.error(L), new Error(L);
                return [4, (0, n.onUnauthorisedResponse)(P)];
              case 1:
                if (D = U.sent(), I++, (0, r.logDebugMessage)("XHRInterceptor.handleRetryPostRefreshing: sessionRefreshAttempts: " + I), D.result !== "RETRY") {
                  if ((0, r.logDebugMessage)(
                    "XHRInterceptor.handleRetryPostRefreshing: Not retrying original request " + !!D.error
                  ), D.error !== void 0)
                    throw D.error;
                  return [2, !0];
                }
                return (0, r.logDebugMessage)("XHRInterceptor.handleRetryPostRefreshing: Retrying original request"), F = new a(), ce(y, F, !0), S.forEach(function(B) {
                  B(F);
                }), se(F, O), [2, !1];
            }
          });
        });
      }
      function ne(L) {
        return e(this, void 0, void 0, function() {
          var D, F, U, B, G;
          return t(this, function(_) {
            switch (_.label) {
              case 0:
                if (C)
                  return (0, r.logDebugMessage)(
                    "XHRInterceptor.handleResponse: Returning without interception"
                  ), [2, !0];
                _.label = 1;
              case 1:
                return _.trys.push([1, 7, , 11]), (0, r.logDebugMessage)("XHRInterceptor.handleResponse: Interception started"), u.ProcessState.getInstance().addState(
                  u.PROCESS_STATE.CALLING_INTERCEPTION_RESPONSE
                ), D = L.status, F = b(L), [4, g(F)];
              case 2:
                return _.sent(), (0, n.fireSessionUpdateEventsIfNecessary)(P.status === "EXISTS", D, F.get("front-token")), D !== n.default.config.sessionExpiredStatusCode ? [3, 4] : ((0, r.logDebugMessage)("responseInterceptor: Status code is: " + D), [4, H()]);
              case 3:
                return [2, _.sent()];
              case 4:
                return D !== n.default.config.invalidClaimStatusCode ? [3, 6] : [4, (0, n.onInvalidClaimResponse)({ data: L.responseText })];
              case 5:
                _.sent(), _.label = 6;
              case 6:
                return [2, !0];
              case 7:
                return U = _.sent(), (0, r.logDebugMessage)("XHRInterceptor.handleResponse: caught error"), U.status === void 0 ? [3, 9] : [4, l(U)];
              case 8:
                if (B = _.sent(), m.status = B.status, m.statusText = B.statusText, m.responseType = B.responseType, v = B.headers, B.responseType === "json")
                  try {
                    m.response = JSON.parse(B.responseText);
                  } catch {
                    m.response = B.responseText;
                  }
                else
                  m.response = B.responseText;
                return m.responseText = B.responseText, [3, 10];
              case 9:
                G = new ProgressEvent("error"), G.error = U, y.onerror !== void 0 && y.onerror !== null && y.onerror(G), x("error", G), _.label = 10;
              case 10:
                return [2, !0];
              case 11:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }
      y.open = function(L, D) {
        (0, r.logDebugMessage)("XHRInterceptor.open called");
        var F = arguments;
        T = D;
        try {
          C = typeof T == "string" && !n.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
            T,
            n.default.config.apiDomain,
            n.default.config.sessionTokenBackendDomain
          ) || typeof T != "string" && !n.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
            T.toString(),
            n.default.config.apiDomain,
            n.default.config.sessionTokenBackendDomain
          );
        } catch (U) {
          if (U.message === "Please provide a valid domain name")
            (0, r.logDebugMessage)(
              "XHRInterceptor.open: Trying shouldDoInterceptionBasedOnUrl with location.origin"
            ), C = !n.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
              o.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
              n.default.config.apiDomain,
              n.default.config.sessionTokenBackendDomain
            );
          else
            throw U;
        }
        w(function() {
          S.push(function(U) {
            U.open.apply(U, F);
          }), h.open.apply(h, F);
        });
      }, y.send = function(L) {
        O = L, se(h, O);
      }, y.setRequestHeader = function(L, D) {
        var F = this;
        if ((0, r.logDebugMessage)("XHRInterceptor.setRequestHeader: Called with ".concat(L)), C) {
          w(function() {
            return h.setRequestHeader(L, D);
          });
          return;
        }
        L !== "anti-csrf" && w(function() {
          return e(F, void 0, void 0, function() {
            var U, B;
            return t(this, function(G) {
              switch (G.label) {
                case 0:
                  return L.toLowerCase() !== "authorization" ? [3, 3] : ((0, r.logDebugMessage)("XHRInterceptor.setRequestHeader: checking if user provided auth header matches local token"), [4, (0, n.getTokenForHeaderAuth)("access")]);
                case 1:
                  return U = G.sent(), [4, (0, n.getTokenForHeaderAuth)("refresh")];
                case 2:
                  if (B = G.sent(), U !== void 0 && B !== void 0 && D === "Bearer ".concat(U))
                    return (0, r.logDebugMessage)(
                      "XHRInterceptor.setRequestHeader: skipping Authorization from user provided headers because it contains our access token"
                    ), [
                      2
                      /*return*/
                    ];
                  G.label = 3;
                case 3:
                  return S.push(function(_) {
                    _.setRequestHeader(L, D);
                  }), p.push({ name: L, value: D }), h.setRequestHeader(L, D), [
                    2
                    /*return*/
                  ];
              }
            });
          });
        });
      };
      var ie = void 0;
      ce(y, h, !1);
      function ce(L, D, F) {
        var U, B = ["load", "loadend", "readystatechange"];
        (0, r.logDebugMessage)("XHRInterceptor.setUpXHR called");
        for (var G = function(M) {
          (0, r.logDebugMessage)("XHRInterceptor added listener for event ".concat(M)), D.addEventListener(M, function(W) {
            (0, r.logDebugMessage)("XHRInterceptor got event ".concat(M)), B.includes(M) || x(M, W);
          });
        }, _ = 0, R = i; _ < R.length; _++) {
          var $ = R[_];
          G($);
        }
        if (D.onload = function(M) {
          U === void 0 && (U = ne(D)), U.then(function(W) {
            W && (L.onload && L.onload(M), x("load", M));
          });
        }, D.onreadystatechange = function(M) {
          D.readyState === a.DONE ? (U === void 0 && (U = ne(D)), U.then(function(W) {
            W && (L.onreadystatechange && L.onreadystatechange(M), x("readystatechange", M));
          })) : (L.onreadystatechange && L.onreadystatechange(M), x("readystatechange", M));
        }, D.onloadend = function(M) {
          U === void 0 && (U = ne(D)), U.then(function(W) {
            W && (L.onloadend && L.onloadend(M), x("loadend", M));
          });
        }, L.getAllResponseHeaders = function() {
          var M;
          return v ? (M = "", v.forEach(function(W, j) {
            return M += "".concat(j, ": ").concat(W, `\r
`);
          })) : M = D.getAllResponseHeaders(), M + `x-supertokens-xhr-intercepted: true\r
`;
        }, L.getResponseHeader = function(M) {
          return M === "x-supertokens-xhr-intercepted" ? "true" : v ? v.get(M) : D.getResponseHeader(M);
        }, ie === void 0) {
          ie = [];
          for (var A in D)
            A in L || ie.push(A);
        }
        for (var E = function(M) {
          typeof D[M] == "function" ? Object.defineProperty(L, M, {
            configurable: !0,
            value: function() {
              var W = arguments;
              return F || S.push(function(j) {
                j[M].apply(j, W);
              }), D[M].apply(D, W);
            }
          }) : Object.defineProperty(L, M, {
            configurable: !0,
            get: function() {
              return m[M] !== void 0 ? m[M] : D[M];
            },
            set: function(W) {
              F || S.push(function(j) {
                j[M] = W;
              }), (0, r.logDebugMessage)("XHRInterceptor.set[".concat(M, "] = ").concat(W)), D[M] = W;
            }
          });
        }, N = 0, q = ie; N < q.length; N++) {
          var A = q[N];
          E(A);
        }
      }
      function se(L, D) {
        var F = this;
        if ((0, r.logDebugMessage)("XHRInterceptor.send: called"), (0, r.logDebugMessage)("XHRInterceptor.send: Value of doNotDoInterception: " + C), C) {
          (0, r.logDebugMessage)("XHRInterceptor.send: Returning without interception"), w(function() {
            return L.send(D);
          });
          return;
        }
        (0, r.logDebugMessage)("XHRInterceptor.send: Interception started"), u.ProcessState.getInstance().addState(
          u.PROCESS_STATE.CALLING_INTERCEPTION_REQUEST
        ), w(function() {
          return e(F, void 0, void 0, function() {
            var U, B;
            return t(this, function(G) {
              switch (G.label) {
                case 0:
                  return [4, (0, n.getLocalSessionState)(!0)];
                case 1:
                  return P = G.sent(), P.status !== "EXISTS" ? [3, 3] : [
                    4,
                    n.AntiCsrfToken.getToken(P.lastAccessTokenUpdate)
                  ];
                case 2:
                  U = G.sent(), U !== void 0 && ((0, r.logDebugMessage)(
                    "XHRInterceptor.send: Adding anti-csrf token to request"
                  ), L.setRequestHeader("anti-csrf", U)), G.label = 3;
                case 3:
                  return n.default.config.autoAddCredentials && ((0, r.logDebugMessage)("XHRInterceptor.send: Adding credentials include"), y.withCredentials = !0), p.some(function(_) {
                    return _.name === "rid";
                  }) ? (0, r.logDebugMessage)(
                    "XHRInterceptor.send: rid header was already there in request"
                  ) : ((0, r.logDebugMessage)("XHRInterceptor.send: Adding rid header: anti-csrf"), L.setRequestHeader("rid", "anti-csrf")), B = n.default.config.tokenTransferMethod, p.some(function(_) {
                    return _.name === "st-auth-mode";
                  }) ? (0, r.logDebugMessage)(
                    "XHRInterceptor.send: st-auth-mode header was already there in request"
                  ) : ((0, r.logDebugMessage)(
                    "XHRInterceptor.send: Adding st-auth-mode header: " + B
                  ), L.setRequestHeader("st-auth-mode", B)), [4, s(L, p)];
                case 4:
                  return G.sent(), (0, r.logDebugMessage)("XHRInterceptor.send: Making user's http call"), [2, L.send(D)];
              }
            });
          });
        });
      }
    }, XMLHttpRequest.__interceptedBySuperTokens = !0, XMLHttpRequest.__original = a;
  }
  Me.addInterceptorsToXMLHttpRequest = d;
  function l(c) {
    return e(this, void 0, void 0, function() {
      var a, h, y, S, p;
      return t(this, function(m) {
        switch (m.label) {
          case 0:
            if (a = c.headers.get("content-type"), h = "", y = "text", a !== null) return [3, 5];
            m.label = 1;
          case 1:
            return m.trys.push([1, 3, , 4]), [4, c.text()];
          case 2:
            return h = m.sent(), [3, 4];
          case 3:
            return m.sent(), h = "", [3, 4];
          case 4:
            return [3, 9];
          case 5:
            return a.includes("application/json") ? (y = "json", p = (S = JSON).stringify, [4, c.json()]) : [3, 7];
          case 6:
            return h = p.apply(S, [m.sent()]), [3, 9];
          case 7:
            return a.includes("text/") ? [4, c.text()] : [3, 9];
          case 8:
            h = m.sent(), m.label = 9;
          case 9:
            return [
              2,
              {
                status: c.status,
                responseText: h,
                statusText: c.statusText,
                responseType: y,
                headers: c.headers
              }
            ];
        }
      });
    });
  }
  function s(c, a) {
    return e(this, void 0, void 0, function() {
      var h, y;
      return t(this, function(S) {
        switch (S.label) {
          case 0:
            return (0, r.logDebugMessage)("setAuthorizationHeaderIfRequired: adding existing tokens as header"), [4, (0, n.getTokenForHeaderAuth)("access")];
          case 1:
            return h = S.sent(), [4, (0, n.getTokenForHeaderAuth)("refresh")];
          case 2:
            return y = S.sent(), h !== void 0 && y !== void 0 ? a.some(function(p) {
              var m = p.name;
              return m.toLowerCase() === "authorization";
            }) ? (0, r.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: Authorization header defined by the user, not adding"
            ) : h !== void 0 && ((0, r.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: added authorization header"
            ), c.setRequestHeader("Authorization", "Bearer ".concat(h))) : (0, r.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: token for header based auth not found"
            ), [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function g(c) {
    return e(this, void 0, void 0, function() {
      var a, h, y, S, p;
      return t(this, function(m) {
        switch (m.label) {
          case 0:
            return (0, r.logDebugMessage)("saveTokensFromHeaders: Saving updated tokens from the response"), a = c.get("st-refresh-token"), a === null ? [3, 2] : ((0, r.logDebugMessage)("saveTokensFromHeaders: saving new refresh token"), [4, (0, n.setToken)("refresh", a)]);
          case 1:
            m.sent(), m.label = 2;
          case 2:
            return h = c.get("st-access-token"), h === null ? [3, 4] : ((0, r.logDebugMessage)("saveTokensFromHeaders: saving new access token"), [4, (0, n.setToken)("access", h)]);
          case 3:
            m.sent(), m.label = 4;
          case 4:
            return y = c.get("front-token"), y === null ? [3, 6] : ((0, r.logDebugMessage)("saveTokensFromHeaders: Setting sFrontToken: " + y), [4, n.FrontToken.setItem(y)]);
          case 5:
            m.sent(), (0, n.updateClockSkewUsingFrontToken)({ frontToken: y, responseHeaders: c }), m.label = 6;
          case 6:
            return S = c.get("anti-csrf"), S === null ? [3, 9] : [4, (0, n.getLocalSessionState)(!1)];
          case 7:
            return p = m.sent(), p.status !== "EXISTS" ? [3, 9] : ((0, r.logDebugMessage)("saveTokensFromHeaders: Setting anti-csrf token"), [4, n.AntiCsrfToken.setItem(p.lastAccessTokenUpdate, S)]);
          case 8:
            m.sent(), m.label = 9;
          case 9:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function b(c) {
    return new Headers(
      c.getAllResponseHeaders().split(`\r
`).map(function(a) {
        var h = a.indexOf(": ");
        return h === -1 ? ["", ""] : [a.slice(0, h), a.slice(h + 2)];
      }).filter(function(a) {
        return a[0].length !== 0;
      })
    );
  }
  return Me;
}
var Gn;
function Ao() {
  if (Gn) return $e;
  Gn = 1;
  var e = $e && $e.__assign || function() {
    return e = Object.assign || function(y) {
      for (var S, p = 1, m = arguments.length; p < m; p++) {
        S = arguments[p];
        for (var v in S) Object.prototype.hasOwnProperty.call(S, v) && (y[v] = S[v]);
      }
      return y;
    }, e.apply(this, arguments);
  }, t = $e && $e.__awaiter || function(y, S, p, m) {
    function v(f) {
      return f instanceof p ? f : new p(function(k) {
        k(f);
      });
    }
    return new (p || (p = Promise))(function(f, k) {
      function w(P) {
        try {
          C(m.next(P));
        } catch (O) {
          k(O);
        }
      }
      function T(P) {
        try {
          C(m.throw(P));
        } catch (O) {
          k(O);
        }
      }
      function C(P) {
        P.done ? f(P.value) : v(P.value).then(w, T);
      }
      C((m = m.apply(y, S || [])).next());
    });
  }, n = $e && $e.__generator || function(y, S) {
    var p = {
      label: 0,
      sent: function() {
        if (f[0] & 1) throw f[1];
        return f[1];
      },
      trys: [],
      ops: []
    }, m, v, f, k;
    return k = { next: w(0), throw: w(1), return: w(2) }, typeof Symbol == "function" && (k[Symbol.iterator] = function() {
      return this;
    }), k;
    function w(C) {
      return function(P) {
        return T([C, P]);
      };
    }
    function T(C) {
      if (m) throw new TypeError("Generator is already executing.");
      for (; p; )
        try {
          if (m = 1, v && (f = C[0] & 2 ? v.return : C[0] ? v.throw || ((f = v.return) && f.call(v), 0) : v.next) && !(f = f.call(v, C[1])).done)
            return f;
          switch (v = 0, f && (C = [C[0] & 2, f.value]), C[0]) {
            case 0:
            case 1:
              f = C;
              break;
            case 4:
              return p.label++, { value: C[1], done: !1 };
            case 5:
              p.label++, v = C[1], C = [0];
              continue;
            case 7:
              C = p.ops.pop(), p.trys.pop();
              continue;
            default:
              if (f = p.trys, !(f = f.length > 0 && f[f.length - 1]) && (C[0] === 6 || C[0] === 2)) {
                p = 0;
                continue;
              }
              if (C[0] === 3 && (!f || C[1] > f[0] && C[1] < f[3])) {
                p.label = C[1];
                break;
              }
              if (C[0] === 6 && p.label < f[1]) {
                p.label = f[1], f = C;
                break;
              }
              if (f && p.label < f[2]) {
                p.label = f[2], p.ops.push(C);
                break;
              }
              f[2] && p.ops.pop(), p.trys.pop();
              continue;
          }
          C = S.call(y, p);
        } catch (P) {
          C = [6, P], v = 0;
        } finally {
          m = f = 0;
        }
      if (C[0] & 5) throw C[1];
      return { value: C[0] ? C[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty($e, "__esModule", { value: !0 });
  var r = Ot(), o = Po(), u = sn(), i = Ct(), d = Ro(), l = Oo(), s = rn(), g = Pt(), b = an(), c = 100, a = "CLAIM_REFRESH_LOCK";
  function h(y) {
    return {
      addXMLHttpRequestInterceptor: function(S) {
        (0, i.logDebugMessage)("addXMLHttpRequestInterceptorAndReturnModified: called"), (0, l.addInterceptorsToXMLHttpRequest)();
      },
      addFetchInterceptorsAndReturnModifiedFetch: function(S) {
        return (0, i.logDebugMessage)("addFetchInterceptorsAndReturnModifiedFetch: called"), function(p, m) {
          return t(this, void 0, void 0, function() {
            return n(this, function(v) {
              switch (v.label) {
                case 0:
                  return [
                    4,
                    r.default.doRequest(
                      function(f) {
                        return S.originalFetch(
                          typeof p == "object" && "clone" in p ? p.clone() : p,
                          e({}, f)
                        );
                      },
                      m,
                      p
                    )
                  ];
                case 1:
                  return [2, v.sent()];
              }
            });
          });
        };
      },
      addAxiosInterceptors: function(S) {
        if ((0, i.logDebugMessage)("addAxiosInterceptors: called"), XMLHttpRequest.__interceptedBySuperTokens) {
          console.warn(
            "Not adding axios interceptor since XMLHttpRequest is already added. This is just a warning."
          ), console.warn("Our axios and XMLHttpRequest interceptors cannot be used at the same time."), console.warn(
            "Since XMLHttpRequest is added automatically and supports axios by default, you can just remove addAxiosInterceptors from your code."
          ), console.warn(
            "If you want to continue using our axios interceptor, you can override addXMLHttpRequestInterceptor with an empty function."
          ), (0, i.logDebugMessage)(
            "addAxiosInterceptors: not adding, because XHR interceptors are already in place"
          );
          return;
        }
        for (var p = S.axiosInstance.interceptors.request, m = 0; m < p.handlers.length; m++)
          if (p.handlers[m].fulfilled === o.interceptorFunctionRequestFulfilled) {
            (0, i.logDebugMessage)(
              "addAxiosInterceptors: not adding because already added on this instance"
            );
            return;
          }
        S.axiosInstance.interceptors.request.use(o.interceptorFunctionRequestFulfilled, function(v) {
          return t(this, void 0, void 0, function() {
            return n(this, function(f) {
              throw v;
            });
          });
        }), S.axiosInstance.interceptors.response.use(
          (0, o.responseInterceptor)(S.axiosInstance),
          (0, o.responseErrorInterceptor)(S.axiosInstance)
        );
      },
      getUserId: function(S) {
        return t(this, void 0, void 0, function() {
          var p;
          return n(this, function(m) {
            switch (m.label) {
              case 0:
                return (0, i.logDebugMessage)("getUserId: called"), [4, r.FrontToken.getTokenInfo()];
              case 1:
                if (p = m.sent(), p === void 0)
                  throw new Error("No session exists");
                return (0, i.logDebugMessage)("getUserId: returning: " + p.uid), [2, p.uid];
            }
          });
        });
      },
      getAccessTokenPayloadSecurely: function(S) {
        return t(this, void 0, void 0, function() {
          var p, m;
          return n(this, function(v) {
            switch (v.label) {
              case 0:
                return (0, i.logDebugMessage)("getAccessTokenPayloadSecurely: called"), [4, r.FrontToken.getTokenInfo()];
              case 1:
                if (p = v.sent(), p === void 0)
                  throw new Error("No session exists");
                return p.ate < g.default.getReferenceOrThrow().dateProvider.now() ? ((0, i.logDebugMessage)("getAccessTokenPayloadSecurely: access token expired. Refreshing session"), [4, r.default.attemptRefreshingSession()]) : [3, 5];
              case 2:
                return m = v.sent(), m ? [
                  4,
                  this.getAccessTokenPayloadSecurely({
                    userContext: S.userContext
                  })
                ] : [3, 4];
              case 3:
                return [2, v.sent()];
              case 4:
                throw new Error("Could not refresh session");
              case 5:
                return (0, i.logDebugMessage)("getAccessTokenPayloadSecurely: returning: " + JSON.stringify(p.up)), [2, p.up];
            }
          });
        });
      },
      doesSessionExist: function(S) {
        return t(this, void 0, void 0, function() {
          var p, m, v;
          return n(this, function(f) {
            switch (f.label) {
              case 0:
                return (0, i.logDebugMessage)("doesSessionExist: called"), [4, r.FrontToken.getTokenInfo()];
              case 1:
                return p = f.sent(), p === void 0 ? ((0, i.logDebugMessage)("doesSessionExist: access token does not exist locally"), [2, !1]) : p.ate < g.default.getReferenceOrThrow().dateProvider.now() ? ((0, i.logDebugMessage)("doesSessionExist: access token expired. Refreshing session"), [4, (0, r.getLocalSessionState)(!1)]) : [3, 4];
              case 2:
                return m = f.sent(), [4, (0, r.onUnauthorisedResponse)(m)];
              case 3:
                return v = f.sent(), [2, v.result === "RETRY"];
              case 4:
                return [2, !0];
            }
          });
        });
      },
      signOut: function(S) {
        return t(this, void 0, void 0, function() {
          var p, m, v, f;
          return n(this, function(k) {
            switch (k.label) {
              case 0:
                return (0, i.logDebugMessage)("signOut: called"), [4, this.doesSessionExist(S)];
              case 1:
                return k.sent() ? ((0, i.logDebugMessage)("signOut: Calling refresh pre API hook"), [
                  4,
                  y.preAPIHook({
                    action: "SIGN_OUT",
                    requestInit: {
                      method: "post",
                      headers: {
                        "fdi-version": u.supported_fdi.join(","),
                        rid: r.default.rid
                      }
                    },
                    url: r.default.signOutUrl,
                    userContext: S.userContext
                  })
                ]) : ((0, i.logDebugMessage)("signOut: exiting early because session does not exist"), (0, i.logDebugMessage)("signOut: firing SIGN_OUT event"), y.onHandleEvent({
                  action: "SIGN_OUT",
                  userContext: S.userContext
                }), [
                  2
                  /*return*/
                ]);
              case 2:
                return p = k.sent(), (0, i.logDebugMessage)("signOut: Calling API"), [4, fetch(p.url, p.requestInit)];
              case 3:
                if (m = k.sent(), (0, i.logDebugMessage)("signOut: API ended"), (0, i.logDebugMessage)("signOut: API responded with status code: " + m.status), m.status === y.sessionExpiredStatusCode)
                  return [
                    2
                    /*return*/
                  ];
                if (m.status >= 300)
                  throw m;
                return [
                  4,
                  y.postAPIHook({
                    action: "SIGN_OUT",
                    requestInit: p.requestInit,
                    url: p.url,
                    fetchResponse: m.clone(),
                    userContext: S.userContext
                  })
                ];
              case 4:
                return k.sent(), [4, m.clone().json()];
              case 5:
                if (v = k.sent(), v.status === "GENERAL_ERROR")
                  throw (0, i.logDebugMessage)("doRequest: Throwing general error"), f = v.message === void 0 ? "No Error Message Provided" : v.message, new d.STGeneralError(f);
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      },
      getInvalidClaimsFromResponse: function(S) {
        return t(this, void 0, void 0, function() {
          var p;
          return n(this, function(m) {
            switch (m.label) {
              case 0:
                return "body" in S.response ? [4, S.response.clone().json()] : [3, 2];
              case 1:
                return p = m.sent(), [3, 3];
              case 2:
                typeof S.response.data == "string" ? p = JSON.parse(S.response.data) : p = S.response.data, m.label = 3;
              case 3:
                return [2, p.claimValidationErrors];
            }
          });
        });
      },
      getGlobalClaimValidators: function(S) {
        return S.claimValidatorsAddedByOtherRecipes;
      },
      validateClaims: function(S) {
        return t(this, void 0, void 0, function() {
          var p, m, v, f, k, w, I, T, C, P, O, I, x;
          return n(this, function(H) {
            switch (H.label) {
              case 0:
                m = 0, H.label = 1;
              case 1:
                return ++m < c ? [4, b.default.getReferenceOrThrow().lockFactory()] : [3, 20];
              case 2:
                return v = H.sent(), (0, i.logDebugMessage)("validateClaims: trying to acquire claim refresh lock"), [4, v.acquireLock(a)];
              case 3:
                if (f = H.sent(), !f) return [3, 18];
                H.label = 4;
              case 4:
                return H.trys.push([4, , 15, 17]), [
                  4,
                  this.getAccessTokenPayloadSecurely({
                    userContext: S.userContext
                  })
                ];
              case 5:
                p = H.sent(), (0, i.logDebugMessage)("validateClaims: claim refresh lock acquired"), k = 0, w = S.claimValidators, H.label = 6;
              case 6:
                return k < w.length ? (I = w[k], [4, I.shouldRefresh(p, S.userContext)]) : [3, 14];
              case 7:
                if (!H.sent()) return [3, 13];
                H.label = 8;
              case 8:
                return H.trys.push([8, 10, , 11]), [4, I.refresh(S.userContext)];
              case 9:
                return H.sent(), [3, 11];
              case 10:
                return T = H.sent(), console.error(
                  "Encountered an error while refreshing validator ".concat(I.id),
                  T
                ), [3, 11];
              case 11:
                return [
                  4,
                  this.getAccessTokenPayloadSecurely({
                    userContext: S.userContext
                  })
                ];
              case 12:
                p = H.sent(), H.label = 13;
              case 13:
                return k++, [3, 6];
              case 14:
                return [3, 17];
              case 15:
                return (0, i.logDebugMessage)("validateClaims: releasing claim refresh lock"), [4, v.releaseLock(a)];
              case 16:
                return H.sent(), [
                  7
                  /*endfinally*/
                ];
              case 17:
                return [3, 20];
              case 18:
                (0, i.logDebugMessage)("validateClaims: Retrying refresh lock ".concat(m, "/").concat(c)), H.label = 19;
              case 19:
                return [3, 1];
              case 20:
                return m !== c ? [3, 22] : ((0, i.logDebugMessage)("validateClaims: ran out of retries while trying to acquire claim refresh lock"), [
                  4,
                  this.getAccessTokenPayloadSecurely({ userContext: S.userContext })
                ]);
              case 21:
                p = H.sent(), H.label = 22;
              case 22:
                C = [], P = 0, O = S.claimValidators, H.label = 23;
              case 23:
                return P < O.length ? (I = O[P], [4, I.validate(p, S.userContext)]) : [3, 26];
              case 24:
                x = H.sent(), x.isValid || C.push({
                  id: I.id,
                  reason: x.reason
                }), H.label = 25;
              case 25:
                return P++, [3, 23];
              case 26:
                return [2, C];
            }
          });
        });
      },
      shouldDoInterceptionBasedOnUrl: function(S, p, m) {
        if ((0, i.logDebugMessage)(
          "shouldDoInterceptionBasedOnUrl: toCheckUrl: " + S + " apiDomain: " + p + " sessionTokenBackendDomain: " + m
        ), S.includes("superTokensDoNotDoInterception"))
          return !1;
        S = (0, s.normaliseURLDomainOrThrowError)(S);
        var v = new URL(S), f = v.hostname, k = !1;
        if (p !== "") {
          p = (0, s.normaliseURLDomainOrThrowError)(p);
          var w = new URL(p);
          k = f === w.hostname;
        }
        if (m === void 0 || k)
          return k;
        var T = (0, s.normaliseSessionScopeOrThrowError)(m);
        return (0, s.matchesDomainOrSubdomain)(f, T);
      },
      calculateClockSkewInMillis: function(S) {
        var p = S.accessTokenPayload;
        (0, i.logDebugMessage)("calculateClockSkewInMillis: called");
        var m = p == null ? void 0 : p.iat;
        if (m === void 0 || typeof m != "number")
          return (0, i.logDebugMessage)(
            "calculateClockSkewInMillis: payload iat is undefined or not a number. This may happen due to an unsupported backend sdk. Returning 0"
          ), 0;
        var v = m * 1e3, f = v - Date.now();
        return (0, i.logDebugMessage)("calculateClockSkewInMillis: returning " + f), f;
      }
    };
  }
  return $e.default = h, $e;
}
var dt = {}, Kn;
function Ar() {
  if (Kn) return dt;
  Kn = 1, Object.defineProperty(dt, "__esModule", { value: !0 }), dt.PrimitiveClaim = void 0;
  var e = Pt(), t = (
    /** @class */
    function() {
      function n(r) {
        var o = this;
        this.validators = {
          hasValue: function(u, i, d) {
            i === void 0 && (i = o.defaultMaxAgeInSeconds);
            var l = e.default.getReferenceOrThrow().dateProvider;
            return {
              id: d !== void 0 ? d : o.id,
              refresh: function(s) {
                return o.refresh(s);
              },
              shouldRefresh: function(s, g) {
                if (i !== void 0 && i < l.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      l.getThresholdInSeconds()
                    )
                  );
                return o.getValueFromPayload(s, g) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                i !== void 0 && s[o.id].t < l.now() - i * 1e3;
              },
              validate: function(s, g) {
                var b = o.getValueFromPayload(s, g);
                if (b === void 0)
                  return {
                    isValid: !1,
                    reason: { message: "value does not exist", expectedValue: u, actualValue: b }
                  };
                var c = (l.now() - o.getLastFetchedTime(s, g)) / 1e3;
                return i !== void 0 && c > i ? {
                  isValid: !1,
                  reason: {
                    message: "expired",
                    ageInSeconds: c,
                    maxAgeInSeconds: i
                  }
                } : b !== u ? {
                  isValid: !1,
                  reason: { message: "wrong value", expectedValue: u, actualValue: b }
                } : { isValid: !0 };
              }
            };
          }
        }, this.id = r.id, this.refresh = r.refresh, this.defaultMaxAgeInSeconds = r.defaultMaxAgeInSeconds;
      }
      return n.prototype.getValueFromPayload = function(r, o) {
        return r[this.id] !== void 0 ? r[this.id].v : void 0;
      }, n.prototype.getLastFetchedTime = function(r, o) {
        return r[this.id] !== void 0 ? r[this.id].t : void 0;
      }, n;
    }()
  );
  return dt.PrimitiveClaim = t, dt;
}
var Le = {}, Yn;
function Eo() {
  if (Yn) return Le;
  Yn = 1;
  var e = Le && Le.__awaiter || function(o, u, i, d) {
    function l(s) {
      return s instanceof i ? s : new i(function(g) {
        g(s);
      });
    }
    return new (i || (i = Promise))(function(s, g) {
      function b(h) {
        try {
          a(d.next(h));
        } catch (y) {
          g(y);
        }
      }
      function c(h) {
        try {
          a(d.throw(h));
        } catch (y) {
          g(y);
        }
      }
      function a(h) {
        h.done ? s(h.value) : l(h.value).then(b, c);
      }
      a((d = d.apply(o, u || [])).next());
    });
  }, t = Le && Le.__generator || function(o, u) {
    var i = {
      label: 0,
      sent: function() {
        if (s[0] & 1) throw s[1];
        return s[1];
      },
      trys: [],
      ops: []
    }, d, l, s, g;
    return g = { next: b(0), throw: b(1), return: b(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function b(a) {
      return function(h) {
        return c([a, h]);
      };
    }
    function c(a) {
      if (d) throw new TypeError("Generator is already executing.");
      for (; i; )
        try {
          if (d = 1, l && (s = a[0] & 2 ? l.return : a[0] ? l.throw || ((s = l.return) && s.call(l), 0) : l.next) && !(s = s.call(l, a[1])).done)
            return s;
          switch (l = 0, s && (a = [a[0] & 2, s.value]), a[0]) {
            case 0:
            case 1:
              s = a;
              break;
            case 4:
              return i.label++, { value: a[1], done: !1 };
            case 5:
              i.label++, l = a[1], a = [0];
              continue;
            case 7:
              a = i.ops.pop(), i.trys.pop();
              continue;
            default:
              if (s = i.trys, !(s = s.length > 0 && s[s.length - 1]) && (a[0] === 6 || a[0] === 2)) {
                i = 0;
                continue;
              }
              if (a[0] === 3 && (!s || a[1] > s[0] && a[1] < s[3])) {
                i.label = a[1];
                break;
              }
              if (a[0] === 6 && i.label < s[1]) {
                i.label = s[1], s = a;
                break;
              }
              if (s && i.label < s[2]) {
                i.label = s[2], i.ops.push(a);
                break;
              }
              s[2] && i.ops.pop(), i.trys.pop();
              continue;
          }
          a = u.call(o, i);
        } catch (h) {
          a = [6, h], l = 0;
        } finally {
          d = s = 0;
        }
      if (a[0] & 5) throw a[1];
      return { value: a[0] ? a[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Le, "__esModule", { value: !0 }), Le.PrimitiveArrayClaim = void 0;
  var n = Pt(), r = (
    /** @class */
    function() {
      function o(u) {
        var i = this;
        this.validators = {
          includes: function(d, l, s) {
            l === void 0 && (l = i.defaultMaxAgeInSeconds);
            var g = n.default.getReferenceOrThrow().dateProvider;
            return {
              id: s !== void 0 ? s : i.id,
              refresh: function(b) {
                return i.refresh(b);
              },
              shouldRefresh: function(b, c) {
                if (l !== void 0 && l < g.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      g.getThresholdInSeconds()
                    )
                  );
                return i.getValueFromPayload(b, c) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                l !== void 0 && b[i.id].t < g.now() - l * 1e3;
              },
              validate: function(b, c) {
                return e(i, void 0, void 0, function() {
                  var a, h;
                  return t(this, function(y) {
                    return a = this.getValueFromPayload(b, c), a === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToInclude: d,
                          actualValue: a
                        }
                      }
                    ] : (h = (g.now() - this.getLastFetchedTime(b, c)) / 1e3, l !== void 0 && h > l ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: h,
                          maxAgeInSeconds: l
                        }
                      }
                    ] : a.includes(d) ? [2, { isValid: !0 }] : [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "wrong value",
                          expectedToInclude: d,
                          actualValue: a
                        }
                      }
                    ]);
                  });
                });
              }
            };
          },
          excludes: function(d, l, s) {
            l === void 0 && (l = i.defaultMaxAgeInSeconds);
            var g = n.default.getReferenceOrThrow().dateProvider;
            return {
              id: s !== void 0 ? s : i.id,
              refresh: function(b) {
                return i.refresh(b);
              },
              shouldRefresh: function(b, c) {
                if (l !== void 0 && l < g.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      g.getThresholdInSeconds()
                    )
                  );
                return i.getValueFromPayload(b, c) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                l !== void 0 && b[i.id].t < g.now() - l * 1e3;
              },
              validate: function(b, c) {
                return e(i, void 0, void 0, function() {
                  var a, h;
                  return t(this, function(y) {
                    return a = this.getValueFromPayload(b, c), a === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToNotInclude: d,
                          actualValue: a
                        }
                      }
                    ] : (h = (g.now() - this.getLastFetchedTime(b, c)) / 1e3, l !== void 0 && h > l ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: h,
                          maxAgeInSeconds: l
                        }
                      }
                    ] : a.includes(d) ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "wrong value",
                          expectedToNotInclude: d,
                          actualValue: a
                        }
                      }
                    ] : [2, { isValid: !0 }]);
                  });
                });
              }
            };
          },
          includesAll: function(d, l, s) {
            l === void 0 && (l = i.defaultMaxAgeInSeconds);
            var g = n.default.getReferenceOrThrow().dateProvider;
            return {
              id: s !== void 0 ? s : i.id,
              refresh: function(b) {
                return i.refresh(b);
              },
              shouldRefresh: function(b, c) {
                if (l !== void 0 && l < g.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      g.getThresholdInSeconds()
                    )
                  );
                return i.getValueFromPayload(b, c) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                l !== void 0 && b[i.id].t < g.now() - l * 1e3;
              },
              validate: function(b, c) {
                return e(i, void 0, void 0, function() {
                  var a, h, y, S;
                  return t(this, function(p) {
                    return a = this.getValueFromPayload(b, c), a === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToInclude: d,
                          actualValue: a
                        }
                      }
                    ] : (h = (g.now() - this.getLastFetchedTime(b, c)) / 1e3, l !== void 0 && h > l ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: h,
                          maxAgeInSeconds: l
                        }
                      }
                    ] : (y = new Set(a), S = d.every(function(m) {
                      return y.has(m);
                    }), [
                      2,
                      S ? { isValid: S } : {
                        isValid: S,
                        reason: {
                          message: "wrong value",
                          expectedToInclude: d,
                          actualValue: a
                        }
                      }
                    ]));
                  });
                });
              }
            };
          },
          includesAny: function(d, l, s) {
            l === void 0 && (l = i.defaultMaxAgeInSeconds);
            var g = n.default.getReferenceOrThrow().dateProvider;
            return {
              id: s !== void 0 ? s : i.id,
              refresh: function(b) {
                return i.refresh(b);
              },
              shouldRefresh: function(b, c) {
                if (l !== void 0 && l < g.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      g.getThresholdInSeconds()
                    )
                  );
                return i.getValueFromPayload(b, c) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                l !== void 0 && b[i.id].t < g.now() - l * 1e3;
              },
              validate: function(b, c) {
                return e(i, void 0, void 0, function() {
                  var a, h, y, S;
                  return t(this, function(p) {
                    return a = this.getValueFromPayload(b, c), a === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToInclude: d,
                          actualValue: a
                        }
                      }
                    ] : (h = (g.now() - this.getLastFetchedTime(b, c)) / 1e3, l !== void 0 && h > l ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: h,
                          maxAgeInSeconds: l
                        }
                      }
                    ] : (y = new Set(a), S = d.some(function(m) {
                      return y.has(m);
                    }), [
                      2,
                      S ? { isValid: S } : {
                        isValid: S,
                        reason: {
                          message: "wrong value",
                          expectedToIncludeAtLeastOneOf: d,
                          actualValue: a
                        }
                      }
                    ]));
                  });
                });
              }
            };
          },
          excludesAll: function(d, l, s) {
            l === void 0 && (l = i.defaultMaxAgeInSeconds);
            var g = n.default.getReferenceOrThrow().dateProvider;
            return {
              id: s !== void 0 ? s : i.id,
              refresh: function(b) {
                return i.refresh(b);
              },
              shouldRefresh: function(b, c) {
                if (l !== void 0 && l < g.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      g.getThresholdInSeconds()
                    )
                  );
                return i.getValueFromPayload(b, c) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                l !== void 0 && b[i.id].t < g.now() - l * 1e3;
              },
              validate: function(b, c) {
                return e(i, void 0, void 0, function() {
                  var a, h, y, S;
                  return t(this, function(p) {
                    return a = this.getValueFromPayload(b, c), a === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToNotInclude: d,
                          actualValue: a
                        }
                      }
                    ] : (h = (g.now() - this.getLastFetchedTime(b, c)) / 1e3, l !== void 0 && h > l ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: h,
                          maxAgeInSeconds: l
                        }
                      }
                    ] : (y = new Set(a), S = d.every(function(m) {
                      return !y.has(m);
                    }), [
                      2,
                      S ? { isValid: S } : {
                        isValid: S,
                        reason: {
                          message: "wrong value",
                          expectedToNotInclude: d,
                          actualValue: a
                        }
                      }
                    ]));
                  });
                });
              }
            };
          }
        }, this.id = u.id, this.refresh = u.refresh, this.defaultMaxAgeInSeconds = u.defaultMaxAgeInSeconds;
      }
      return o.prototype.getValueFromPayload = function(u, i) {
        return u[this.id] !== void 0 ? u[this.id].v : void 0;
      }, o.prototype.getLastFetchedTime = function(u, i) {
        return u[this.id] !== void 0 ? u[this.id].t : void 0;
      }, o;
    }()
  );
  return Le.PrimitiveArrayClaim = r, Le;
}
var Ne = {}, Jn;
function Do() {
  if (Jn) return Ne;
  Jn = 1;
  var e = Ne && Ne.__extends || /* @__PURE__ */ function() {
    var o = function(u, i) {
      return o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, l) {
        d.__proto__ = l;
      } || function(d, l) {
        for (var s in l) Object.prototype.hasOwnProperty.call(l, s) && (d[s] = l[s]);
      }, o(u, i);
    };
    return function(u, i) {
      if (typeof i != "function" && i !== null)
        throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
      o(u, i);
      function d() {
        this.constructor = u;
      }
      u.prototype = i === null ? Object.create(i) : (d.prototype = i.prototype, new d());
    };
  }(), t = Ne && Ne.__assign || function() {
    return t = Object.assign || function(o) {
      for (var u, i = 1, d = arguments.length; i < d; i++) {
        u = arguments[i];
        for (var l in u) Object.prototype.hasOwnProperty.call(u, l) && (o[l] = u[l]);
      }
      return o;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(Ne, "__esModule", { value: !0 }), Ne.BooleanClaim = void 0;
  var n = Ar(), r = (
    /** @class */
    function(o) {
      e(u, o);
      function u(i) {
        var d = o.call(this, i) || this;
        return d.validators = t(t({}, d.validators), {
          isTrue: function(l) {
            return d.validators.hasValue(!0, l);
          },
          isFalse: function(l) {
            return d.validators.hasValue(!1, l);
          }
        }), d;
      }
      return u;
    }(n.PrimitiveClaim)
  );
  return Ne.BooleanClaim = r, Ne;
}
var Qn;
function xo() {
  return Qn || (Qn = 1, function(e) {
    var t = Ge && Ge.__awaiter || function(p, m, v, f) {
      function k(w) {
        return w instanceof v ? w : new v(function(T) {
          T(w);
        });
      }
      return new (v || (v = Promise))(function(w, T) {
        function C(I) {
          try {
            O(f.next(I));
          } catch (x) {
            T(x);
          }
        }
        function P(I) {
          try {
            O(f.throw(I));
          } catch (x) {
            T(x);
          }
        }
        function O(I) {
          I.done ? w(I.value) : k(I.value).then(C, P);
        }
        O((f = f.apply(p, m || [])).next());
      });
    }, n = Ge && Ge.__generator || function(p, m) {
      var v = {
        label: 0,
        sent: function() {
          if (w[0] & 1) throw w[1];
          return w[1];
        },
        trys: [],
        ops: []
      }, f, k, w, T;
      return T = { next: C(0), throw: C(1), return: C(2) }, typeof Symbol == "function" && (T[Symbol.iterator] = function() {
        return this;
      }), T;
      function C(O) {
        return function(I) {
          return P([O, I]);
        };
      }
      function P(O) {
        if (f) throw new TypeError("Generator is already executing.");
        for (; v; )
          try {
            if (f = 1, k && (w = O[0] & 2 ? k.return : O[0] ? k.throw || ((w = k.return) && w.call(k), 0) : k.next) && !(w = w.call(k, O[1])).done)
              return w;
            switch (k = 0, w && (O = [O[0] & 2, w.value]), O[0]) {
              case 0:
              case 1:
                w = O;
                break;
              case 4:
                return v.label++, { value: O[1], done: !1 };
              case 5:
                v.label++, k = O[1], O = [0];
                continue;
              case 7:
                O = v.ops.pop(), v.trys.pop();
                continue;
              default:
                if (w = v.trys, !(w = w.length > 0 && w[w.length - 1]) && (O[0] === 6 || O[0] === 2)) {
                  v = 0;
                  continue;
                }
                if (O[0] === 3 && (!w || O[1] > w[0] && O[1] < w[3])) {
                  v.label = O[1];
                  break;
                }
                if (O[0] === 6 && v.label < w[1]) {
                  v.label = w[1], w = O;
                  break;
                }
                if (w && v.label < w[2]) {
                  v.label = w[2], v.ops.push(O);
                  break;
                }
                w[2] && v.ops.pop(), v.trys.pop();
                continue;
            }
            O = m.call(p, v);
          } catch (I) {
            O = [6, I], k = 0;
          } finally {
            f = w = 0;
          }
        if (O[0] & 5) throw O[1];
        return { value: O[0] ? O[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.BooleanClaim = e.PrimitiveArrayClaim = e.PrimitiveClaim = e.getInvalidClaimsFromResponse = e.getClaimValue = e.validateClaims = e.signOut = e.addAxiosInterceptors = e.doesSessionExist = e.attemptRefreshingSession = e.getAccessToken = e.getAccessTokenPayloadSecurely = e.getUserId = e.init = void 0;
    var r = Ot(), o = Ao(), u = $o(), i = rn(), d = Cr(), l = qe(), s = an(), g = Pr(), b = Ct(), c = Pt(), a = (
      /** @class */
      function() {
        function p() {
        }
        p.init = function(v) {
          d.default.init(v.cookieHandler), l.default.init(v.windowHandler), c.default.init(v.dateProvider), s.default.init(
            v.lockFactory,
            l.default.getReferenceOrThrow().windowHandler.localStorage
          );
          var f = (0, i.validateAndNormaliseInputOrThrowError)(v);
          v.enableDebugLogs !== void 0 && v.enableDebugLogs && (0, b.enableLogging)();
          var k = new u.default(
            (0, o.default)({
              onHandleEvent: f.onHandleEvent,
              preAPIHook: f.preAPIHook,
              postAPIHook: f.postAPIHook,
              sessionExpiredStatusCode: f.sessionExpiredStatusCode
            })
          ).override(f.override.functions).build();
          r.default.init(f, k), p.axiosInterceptorQueue.forEach(function(w) {
            w();
          }), p.axiosInterceptorQueue = [];
        }, p.getUserId = function(v) {
          return r.default.recipeImpl.getUserId({
            userContext: (0, i.getNormalisedUserContext)(v === void 0 ? void 0 : v.userContext)
          });
        }, p.getAccessTokenPayloadSecurely = function(v) {
          return t(this, void 0, void 0, function() {
            return n(this, function(f) {
              return [
                2,
                r.default.recipeImpl.getAccessTokenPayloadSecurely({
                  userContext: (0, i.getNormalisedUserContext)(
                    v === void 0 ? void 0 : v.userContext
                  )
                })
              ];
            });
          });
        };
        var m;
        return m = p, p.axiosInterceptorQueue = [], p.attemptRefreshingSession = function() {
          return t(void 0, void 0, void 0, function() {
            return n(m, function(v) {
              return [2, r.default.attemptRefreshingSession()];
            });
          });
        }, p.doesSessionExist = function(v) {
          return r.default.recipeImpl.doesSessionExist({
            userContext: (0, i.getNormalisedUserContext)(v === void 0 ? void 0 : v.userContext)
          });
        }, p.addAxiosInterceptors = function(v, f) {
          r.default.initCalled ? r.default.recipeImpl.addAxiosInterceptors({
            axiosInstance: v,
            userContext: (0, i.getNormalisedUserContext)(f)
          }) : p.axiosInterceptorQueue.push(function() {
            r.default.recipeImpl.addAxiosInterceptors({
              axiosInstance: v,
              userContext: (0, i.getNormalisedUserContext)(f)
            });
          });
        }, p.signOut = function(v) {
          return r.default.recipeImpl.signOut({
            userContext: (0, i.getNormalisedUserContext)(v === void 0 ? void 0 : v.userContext)
          });
        }, p.getInvalidClaimsFromResponse = function(v) {
          return t(this, void 0, void 0, function() {
            return n(this, function(f) {
              return [
                2,
                r.default.recipeImpl.getInvalidClaimsFromResponse({
                  response: v.response,
                  userContext: (0, i.getNormalisedUserContext)(v.userContext)
                })
              ];
            });
          });
        }, p.getClaimValue = function(v) {
          return t(this, void 0, void 0, function() {
            var f, k;
            return n(this, function(w) {
              switch (w.label) {
                case 0:
                  return f = (0, i.getNormalisedUserContext)(
                    v === void 0 ? void 0 : v.userContext
                  ), [
                    4,
                    p.getAccessTokenPayloadSecurely({ userContext: f })
                  ];
                case 1:
                  return k = w.sent(), [2, v.claim.getValueFromPayload(k, f)];
              }
            });
          });
        }, p.validateClaims = function(v, f) {
          var k = (0, i.getNormalisedUserContext)(f), w = g.SessionClaimValidatorStore.getClaimValidatorsAddedByOtherRecipes(), T = r.default.recipeImpl.getGlobalClaimValidators({
            claimValidatorsAddedByOtherRecipes: w,
            userContext: k
          }), C = v !== void 0 ? v(T, k) : T;
          return C.length === 0 ? [] : r.default.recipeImpl.validateClaims({
            claimValidators: C,
            userContext: (0, i.getNormalisedUserContext)(f)
          });
        }, p.getAccessToken = function(v) {
          return t(void 0, void 0, void 0, function() {
            return n(m, function(f) {
              switch (f.label) {
                case 0:
                  return [
                    4,
                    r.default.recipeImpl.doesSessionExist({
                      userContext: (0, i.getNormalisedUserContext)(
                        v === void 0 ? void 0 : v.userContext
                      )
                    })
                  ];
                case 1:
                  return f.sent() ? [2, (0, r.getTokenForHeaderAuth)("access")] : [2, void 0];
              }
            });
          });
        }, p;
      }()
    );
    e.default = a, e.init = a.init, e.getUserId = a.getUserId, e.getAccessTokenPayloadSecurely = a.getAccessTokenPayloadSecurely, e.getAccessToken = a.getAccessToken, e.attemptRefreshingSession = a.attemptRefreshingSession, e.doesSessionExist = a.doesSessionExist, e.addAxiosInterceptors = a.addAxiosInterceptors, e.signOut = a.signOut, e.validateClaims = a.validateClaims, e.getClaimValue = a.getClaimValue, e.getInvalidClaimsFromResponse = a.getInvalidClaimsFromResponse;
    var h = Ar();
    Object.defineProperty(e, "PrimitiveClaim", {
      enumerable: !0,
      get: function() {
        return h.PrimitiveClaim;
      }
    });
    var y = Eo();
    Object.defineProperty(e, "PrimitiveArrayClaim", {
      enumerable: !0,
      get: function() {
        return y.PrimitiveArrayClaim;
      }
    });
    var S = Do();
    Object.defineProperty(e, "BooleanClaim", {
      enumerable: !0,
      get: function() {
        return S.BooleanClaim;
      }
    });
  }(Ge)), Ge;
}
var Zn;
function Er() {
  return Zn || (Zn = 1, function(e) {
    function t(n) {
      for (var r in n) e.hasOwnProperty(r) || (e[r] = n[r]);
    }
    e.__esModule = !0, t(xo());
  }(Xt)), Xt;
}
var ct = {}, er;
function Mo() {
  return er || (er = 1, Object.defineProperty(ct, "__esModule", { value: !0 }), ct.EMAILVERIFICATION_CLAIM_ID = void 0, ct.EMAILVERIFICATION_CLAIM_ID = "st-ev"), ct;
}
var tr;
function Lo() {
  if (tr) return le;
  tr = 1;
  var e = le && le.__extends || /* @__PURE__ */ function() {
    var b = function(c, a) {
      return b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, y) {
        h.__proto__ = y;
      } || function(h, y) {
        for (var S in y) Object.prototype.hasOwnProperty.call(y, S) && (h[S] = y[S]);
      }, b(c, a);
    };
    return function(c, a) {
      if (typeof a != "function" && a !== null)
        throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
      b(c, a);
      function h() {
        this.constructor = c;
      }
      c.prototype = a === null ? Object.create(a) : (h.prototype = a.prototype, new h());
    };
  }(), t = le && le.__assign || function() {
    return t = Object.assign || function(b) {
      for (var c, a = 1, h = arguments.length; a < h; a++) {
        c = arguments[a];
        for (var y in c) Object.prototype.hasOwnProperty.call(c, y) && (b[y] = c[y]);
      }
      return b;
    }, t.apply(this, arguments);
  }, n = le && le.__awaiter || function(b, c, a, h) {
    function y(S) {
      return S instanceof a ? S : new a(function(p) {
        p(S);
      });
    }
    return new (a || (a = Promise))(function(S, p) {
      function m(k) {
        try {
          f(h.next(k));
        } catch (w) {
          p(w);
        }
      }
      function v(k) {
        try {
          f(h.throw(k));
        } catch (w) {
          p(w);
        }
      }
      function f(k) {
        k.done ? S(k.value) : y(k.value).then(m, v);
      }
      f((h = h.apply(b, c || [])).next());
    });
  }, r = le && le.__generator || function(b, c) {
    var a = {
      label: 0,
      sent: function() {
        if (S[0] & 1) throw S[1];
        return S[1];
      },
      trys: [],
      ops: []
    }, h, y, S, p;
    return p = { next: m(0), throw: m(1), return: m(2) }, typeof Symbol == "function" && (p[Symbol.iterator] = function() {
      return this;
    }), p;
    function m(f) {
      return function(k) {
        return v([f, k]);
      };
    }
    function v(f) {
      if (h) throw new TypeError("Generator is already executing.");
      for (; a; )
        try {
          if (h = 1, y && (S = f[0] & 2 ? y.return : f[0] ? y.throw || ((S = y.return) && S.call(y), 0) : y.next) && !(S = S.call(y, f[1])).done)
            return S;
          switch (y = 0, S && (f = [f[0] & 2, S.value]), f[0]) {
            case 0:
            case 1:
              S = f;
              break;
            case 4:
              return a.label++, { value: f[1], done: !1 };
            case 5:
              a.label++, y = f[1], f = [0];
              continue;
            case 7:
              f = a.ops.pop(), a.trys.pop();
              continue;
            default:
              if (S = a.trys, !(S = S.length > 0 && S[S.length - 1]) && (f[0] === 6 || f[0] === 2)) {
                a = 0;
                continue;
              }
              if (f[0] === 3 && (!S || f[1] > S[0] && f[1] < S[3])) {
                a.label = f[1];
                break;
              }
              if (f[0] === 6 && a.label < S[1]) {
                a.label = S[1], S = f;
                break;
              }
              if (S && a.label < S[2]) {
                a.label = S[2], a.ops.push(f);
                break;
              }
              S[2] && a.ops.pop(), a.trys.pop();
              continue;
          }
          f = c.call(b, a);
        } catch (k) {
          f = [6, k], y = 0;
        } finally {
          h = S = 0;
        }
      if (f[0] & 5) throw f[1];
      return { value: f[0] ? f[1] : void 0, done: !0 };
    }
  }, o = le && le.__spreadArray || function(b, c, a) {
    if (a || arguments.length === 2)
      for (var h = 0, y = c.length, S; h < y; h++)
        (S || !(h in c)) && (S || (S = Array.prototype.slice.call(c, 0, h)), S[h] = c[h]);
    return b.concat(S || Array.prototype.slice.call(c));
  };
  Object.defineProperty(le, "__esModule", { value: !0 }), le.Recipe = void 0;
  var u = Io(), i = Er(), d = Or(), l = Mo(), s = [l.EMAILVERIFICATION_CLAIM_ID], g = (
    /** @class */
    function(b) {
      e(c, b);
      function c(a) {
        var h = b.call(this, a) || this;
        return h.getUserId = function(y) {
          return i.default.getUserId({
            userContext: y.userContext
          });
        }, h.getAccessToken = function(y) {
          return n(h, void 0, void 0, function() {
            return r(this, function(S) {
              return [
                2,
                i.default.getAccessToken({
                  userContext: y.userContext
                })
              ];
            });
          });
        }, h.getAccessTokenPayloadSecurely = function(y) {
          return n(h, void 0, void 0, function() {
            return r(this, function(S) {
              return [
                2,
                i.default.getAccessTokenPayloadSecurely({
                  userContext: y.userContext
                })
              ];
            });
          });
        }, h.doesSessionExist = function(y) {
          return i.default.doesSessionExist({
            userContext: y.userContext
          });
        }, h.signOut = function(y) {
          return i.default.signOut({
            userContext: y.userContext
          });
        }, h.attemptRefreshingSession = function() {
          return n(h, void 0, void 0, function() {
            return r(this, function(y) {
              return [2, i.default.attemptRefreshingSession()];
            });
          });
        }, h.validateClaims = function(y) {
          return i.default.validateClaims(y.overrideGlobalClaimValidators, y.userContext);
        }, i.default.init(
          t(t({}, a), {
            override: {
              functions: function(y, S) {
                var p;
                return S.override(function(m) {
                  return t(t({}, m), {
                    getGlobalClaimValidators: function(v) {
                      var f = m.getGlobalClaimValidators(v);
                      return o(
                        o(
                          [],
                          f.filter(function(k) {
                            return s.includes(k.id);
                          }),
                          !0
                        ),
                        f.filter(function(k) {
                          return !s.includes(k.id);
                        }),
                        !0
                      );
                    }
                  });
                }), !((p = a.override) === null || p === void 0) && p.functions && S.override(a.override.functions), y;
              }
            },
            preAPIHook: function(y) {
              return n(h, void 0, void 0, function() {
                var S, p;
                return r(this, function(m) {
                  return S = new Headers(y.requestInit.headers), S.set("rid", a.recipeId), p = t(t({}, y), {
                    requestInit: t(t({}, y.requestInit), { headers: S })
                  }), a.preAPIHook === void 0 ? [2, p] : [2, a.preAPIHook(y)];
                });
              });
            },
            apiDomain: a.appInfo.apiDomain.getAsStringDangerous(),
            apiBasePath: a.appInfo.apiBasePath.getAsStringDangerous()
          })
        ), h;
      }
      return c.init = function(a) {
        return function(h, y, S) {
          return c.instance = new c(
            t(t({}, a), {
              appInfo: h,
              recipeId: c.RECIPE_ID,
              enableDebugLogs: S
            })
          ), c.instance;
        };
      }, c.prototype.getClaimValue = function(a) {
        return i.default.getClaimValue(a);
      }, c.prototype.getInvalidClaimsFromResponse = function(a) {
        return i.default.getInvalidClaimsFromResponse(a);
      }, c.addAxiosInterceptors = function(a, h) {
        return i.default.addAxiosInterceptors(a, h);
      }, c.getInstanceOrThrow = function() {
        if (c.instance === void 0) {
          var a = "No instance of Session found. Ensure that the 'Session.init' method is called within the 'SuperTokens.init' recipeList.";
          throw a = (0, d.checkForSSRErrorAndAppendIfNeeded)(a), Error(a);
        }
        return c.instance;
      }, c.reset = function() {
        (0, d.isTest)() && (c.instance = void 0);
      }, c.RECIPE_ID = "session", c;
    }(u.default)
  );
  return le.Recipe = g, le.default = g, le;
}
var zt = {}, Ke = {}, nr;
function No() {
  return nr || (nr = 1, function(e) {
    var t = Ke && Ke.__awaiter || function(m, v, f, k) {
      function w(T) {
        return T instanceof f ? T : new f(function(C) {
          C(T);
        });
      }
      return new (f || (f = Promise))(function(T, C) {
        function P(x) {
          try {
            I(k.next(x));
          } catch (H) {
            C(H);
          }
        }
        function O(x) {
          try {
            I(k.throw(x));
          } catch (H) {
            C(H);
          }
        }
        function I(x) {
          x.done ? T(x.value) : w(x.value).then(P, O);
        }
        I((k = k.apply(m, v || [])).next());
      });
    }, n = Ke && Ke.__generator || function(m, v) {
      var f = {
        label: 0,
        sent: function() {
          if (T[0] & 1) throw T[1];
          return T[1];
        },
        trys: [],
        ops: []
      }, k, w, T, C;
      return C = { next: P(0), throw: P(1), return: P(2) }, typeof Symbol == "function" && (C[Symbol.iterator] = function() {
        return this;
      }), C;
      function P(I) {
        return function(x) {
          return O([I, x]);
        };
      }
      function O(I) {
        if (k) throw new TypeError("Generator is already executing.");
        for (; f; )
          try {
            if (k = 1, w && (T = I[0] & 2 ? w.return : I[0] ? w.throw || ((T = w.return) && T.call(w), 0) : w.next) && !(T = T.call(w, I[1])).done)
              return T;
            switch (w = 0, T && (I = [I[0] & 2, T.value]), I[0]) {
              case 0:
              case 1:
                T = I;
                break;
              case 4:
                return f.label++, { value: I[1], done: !1 };
              case 5:
                f.label++, w = I[1], I = [0];
                continue;
              case 7:
                I = f.ops.pop(), f.trys.pop();
                continue;
              default:
                if (T = f.trys, !(T = T.length > 0 && T[T.length - 1]) && (I[0] === 6 || I[0] === 2)) {
                  f = 0;
                  continue;
                }
                if (I[0] === 3 && (!T || I[1] > T[0] && I[1] < T[3])) {
                  f.label = I[1];
                  break;
                }
                if (I[0] === 6 && f.label < T[1]) {
                  f.label = T[1], T = I;
                  break;
                }
                if (T && f.label < T[2]) {
                  f.label = T[2], f.ops.push(I);
                  break;
                }
                T[2] && f.ops.pop(), f.trys.pop();
                continue;
            }
            I = v.call(m, f);
          } catch (x) {
            I = [6, x], w = 0;
          } finally {
            k = T = 0;
          }
        if (I[0] & 5) throw I[1];
        return { value: I[0] ? I[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.getInvalidClaimsFromResponse = e.getClaimValue = e.validateClaims = e.signOut = e.addAxiosInterceptors = e.doesSessionExist = e.attemptRefreshingSession = e.getAccessToken = e.getAccessTokenPayloadSecurely = e.getUserId = e.init = e.BooleanClaim = e.PrimitiveArrayClaim = e.PrimitiveClaim = void 0;
    var r = Or(), o = Lo(), u = (
      /** @class */
      function() {
        function m() {
        }
        return m.init = function(v) {
          return o.default.init(v);
        }, m.getUserId = function(v) {
          return o.default.getInstanceOrThrow().getUserId({
            userContext: (0, r.getNormalisedUserContext)(
              v == null ? void 0 : v.userContext
            )
          });
        }, m.getAccessToken = function(v) {
          return o.default.getInstanceOrThrow().getAccessToken({
            userContext: (0, r.getNormalisedUserContext)(
              v == null ? void 0 : v.userContext
            )
          });
        }, m.getAccessTokenPayloadSecurely = function(v) {
          return t(this, void 0, void 0, function() {
            return n(this, function(f) {
              return [
                2,
                o.default.getInstanceOrThrow().getAccessTokenPayloadSecurely({
                  userContext: (0, r.getNormalisedUserContext)(
                    v == null ? void 0 : v.userContext
                  )
                })
              ];
            });
          });
        }, m.attemptRefreshingSession = function() {
          return t(this, void 0, void 0, function() {
            return n(this, function(v) {
              return [2, o.default.getInstanceOrThrow().attemptRefreshingSession()];
            });
          });
        }, m.doesSessionExist = function(v) {
          return o.default.getInstanceOrThrow().doesSessionExist({
            userContext: (0, r.getNormalisedUserContext)(
              v == null ? void 0 : v.userContext
            )
          });
        }, m.addAxiosInterceptors = function(v, f) {
          return o.default.addAxiosInterceptors(v, (0, r.getNormalisedUserContext)(f));
        }, m.signOut = function(v) {
          return o.default.getInstanceOrThrow().signOut({
            userContext: (0, r.getNormalisedUserContext)(
              v == null ? void 0 : v.userContext
            )
          });
        }, m.getClaimValue = function(v) {
          return o.default.getInstanceOrThrow().getClaimValue({
            claim: v.claim,
            userContext: (0, r.getNormalisedUserContext)(
              v == null ? void 0 : v.userContext
            )
          });
        }, m.validateClaims = function(v) {
          return o.default.getInstanceOrThrow().validateClaims({
            overrideGlobalClaimValidators: v == null ? void 0 : v.overrideGlobalClaimValidators,
            userContext: (0, r.getNormalisedUserContext)(
              v == null ? void 0 : v.userContext
            )
          });
        }, m.getInvalidClaimsFromResponse = function(v) {
          return o.default.getInstanceOrThrow().getInvalidClaimsFromResponse({
            response: v.response,
            userContext: (0, r.getNormalisedUserContext)(
              v == null ? void 0 : v.userContext
            )
          });
        }, m;
      }()
    );
    e.default = u;
    var i = u.init;
    e.init = i;
    var d = u.getUserId;
    e.getUserId = d;
    var l = u.getAccessTokenPayloadSecurely;
    e.getAccessTokenPayloadSecurely = l;
    var s = u.getAccessToken;
    e.getAccessToken = s;
    var g = u.attemptRefreshingSession;
    e.attemptRefreshingSession = g;
    var b = u.doesSessionExist;
    e.doesSessionExist = b;
    var c = u.addAxiosInterceptors;
    e.addAxiosInterceptors = c;
    var a = u.signOut;
    e.signOut = a;
    var h = u.validateClaims;
    e.validateClaims = h;
    var y = u.getClaimValue;
    e.getClaimValue = y;
    var S = u.getInvalidClaimsFromResponse;
    e.getInvalidClaimsFromResponse = S;
    var p = Er();
    Object.defineProperty(e, "PrimitiveClaim", {
      enumerable: !0,
      get: function() {
        return p.PrimitiveClaim;
      }
    }), Object.defineProperty(e, "PrimitiveArrayClaim", {
      enumerable: !0,
      get: function() {
        return p.PrimitiveArrayClaim;
      }
    }), Object.defineProperty(e, "BooleanClaim", {
      enumerable: !0,
      get: function() {
        return p.BooleanClaim;
      }
    });
  }(Ke)), Ke;
}
var rr;
function Ho() {
  return rr || (rr = 1, function(e) {
    function t(n) {
      for (var r in n) e.hasOwnProperty(r) || (e[r] = n[r]);
    }
    e.__esModule = !0, t(No());
  }(zt)), zt;
}
var Uo = Ho();
const Fo = /* @__PURE__ */ uo(Uo), Gs = Jr("userStore", () => {
  const e = gt(!1), t = gt(!1);
  async function n() {
    try {
      t.value = !0, e.value = await Fo.doesSessionExist();
    } catch (r) {
      e.value = !1, console.error("Error checking session status", r);
    } finally {
      t.value = !1;
    }
  }
  return {
    isFetchingSession: t,
    isSignedIn: e,
    updateAuth: n
  };
}), Ks = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
var jo = Object.defineProperty, or = Object.getOwnPropertySymbols, qo = Object.prototype.hasOwnProperty, Vo = Object.prototype.propertyIsEnumerable, ir = (e, t, n) => t in e ? jo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Bo = (e, t) => {
  for (var n in t || (t = {}))
    qo.call(t, n) && ir(e, n, t[n]);
  if (or)
    for (var n of or(t))
      Vo.call(t, n) && ir(e, n, t[n]);
  return e;
};
function Je(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && typeof e == "object" && Object.keys(e).length === 0;
}
function un(e) {
  return typeof e == "function" && "call" in e && "apply" in e;
}
function Y(e) {
  return !Je(e);
}
function Ce(e, t = !0) {
  return e instanceof Object && e.constructor === Object && (t || Object.keys(e).length !== 0);
}
function Dr(e = {}, t = {}) {
  const n = Bo({}, e);
  return Object.keys(t).forEach((r) => {
    const o = r;
    Ce(t[o]) && o in e && Ce(e[o]) ? n[o] = Dr(e[o], t[o]) : n[o] = t[o];
  }), n;
}
function xr(...e) {
  return e.reduce((t, n, r) => r === 0 ? n : Dr(t, n), {});
}
function Ys(e, t) {
  let n = -1;
  if (Y(e))
    try {
      n = e.findLastIndex(t);
    } catch {
      n = e.lastIndexOf([...e].reverse().find(t));
    }
  return n;
}
function ye(e, ...t) {
  return un(e) ? e(...t) : e;
}
function ve(e, t = !0) {
  return typeof e == "string" && (t || e !== "");
}
function Ie(e) {
  return ve(e) ? e.replace(/(-|_)/g, "").toLowerCase() : e;
}
function ln(e, t = "", n = {}) {
  const r = Ie(t).split("."), o = r.shift();
  if (o) {
    if (Ce(e)) {
      const u = Object.keys(e).find((i) => Ie(i) === o) || "";
      return ln(ye(e[u], n), r.join("."), n);
    }
    return;
  }
  return ye(e, n);
}
function jt(e, t = !0) {
  return Array.isArray(e) && (t || e.length !== 0);
}
function Wo(e) {
  return Y(e) && !isNaN(e);
}
function Js(e = "") {
  return Y(e) && e.length === 1 && !!e.match(/\S| /);
}
function Ue(e, t) {
  if (t) {
    const n = t.test(e);
    return t.lastIndex = 0, n;
  }
  return !1;
}
function Qs(...e) {
  return xr(...e);
}
function vt(e) {
  return e && e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":");
}
function Xo(e) {
  return ve(e, !1) ? e[0].toUpperCase() + e.slice(1) : e;
}
function Mr(e) {
  return ve(e) ? e.replace(/(_)/g, "-").replace(/[A-Z]/g, (t, n) => n === 0 ? t : "-" + t.toLowerCase()).toLowerCase() : e;
}
function sr(e) {
  return ve(e) ? e.replace(/[A-Z]/g, (t, n) => n === 0 ? t : "." + t.toLowerCase()).toLowerCase() : e;
}
function Lr() {
  const e = /* @__PURE__ */ new Map();
  return {
    on(t, n) {
      let r = e.get(t);
      return r ? r.push(n) : r = [n], e.set(t, r), this;
    },
    off(t, n) {
      const r = e.get(t);
      return r && r.splice(r.indexOf(n) >>> 0, 1), this;
    },
    emit(t, n) {
      const r = e.get(t);
      r && r.forEach((o) => {
        o(n);
      });
    },
    clear() {
      e.clear();
    }
  };
}
function pt(...e) {
  if (e) {
    let t = [];
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      if (!r)
        continue;
      const o = typeof r;
      if (o === "string" || o === "number")
        t.push(r);
      else if (o === "object") {
        const u = Array.isArray(r) ? [pt(...r)] : Object.entries(r).map(([i, d]) => d ? i : void 0);
        t = u.length ? t.concat(u.filter((i) => !!i)) : t;
      }
    }
    return t.join(" ").trim();
  }
}
function zo(e, t) {
  return e ? e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className) : !1;
}
function Go(e, t) {
  if (e && t) {
    const n = (r) => {
      zo(e, r) || (e.classList ? e.classList.add(r) : e.className += " " + r);
    };
    [t].flat().filter(Boolean).forEach((r) => r.split(" ").forEach(n));
  }
}
function Gt(e, t) {
  if (e && t) {
    const n = (r) => {
      e.classList ? e.classList.remove(r) : e.className = e.className.replace(new RegExp("(^|\\b)" + r.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [t].flat().filter(Boolean).forEach((r) => r.split(" ").forEach(n));
  }
}
function ar(e) {
  for (const t of document == null ? void 0 : document.styleSheets)
    try {
      for (const n of t == null ? void 0 : t.cssRules)
        for (const r of n == null ? void 0 : n.style)
          if (e.test(r))
            return { name: r, value: n.style.getPropertyValue(r).trim() };
    } catch {
    }
  return null;
}
function Ko(e) {
  const t = { width: 0, height: 0 };
  return e && (e.style.visibility = "hidden", e.style.display = "block", t.width = e.offsetWidth, t.height = e.offsetHeight, e.style.display = "none", e.style.visibility = "visible"), t;
}
function Yo() {
  const e = window, t = document, n = t.documentElement, r = t.getElementsByTagName("body")[0], o = e.innerWidth || n.clientWidth || r.clientWidth, u = e.innerHeight || n.clientHeight || r.clientHeight;
  return { width: o, height: u };
}
function Qt(e) {
  return e ? Math.abs(e.scrollLeft) : 0;
}
function Jo() {
  const e = document.documentElement;
  return (window.pageXOffset || Qt(e)) - (e.clientLeft || 0);
}
function Qo() {
  const e = document.documentElement;
  return (window.pageYOffset || e.scrollTop) - (e.clientTop || 0);
}
function Zo(e) {
  return e ? getComputedStyle(e).direction === "rtl" : !1;
}
function Zs(e, t, n = !0) {
  var r, o, u, i;
  if (e) {
    const d = e.offsetParent ? { width: e.offsetWidth, height: e.offsetHeight } : Ko(e), l = d.height, s = d.width, g = t.offsetHeight, b = t.offsetWidth, c = t.getBoundingClientRect(), a = Qo(), h = Jo(), y = Yo();
    let S, p, m = "top";
    c.top + g + l > y.height ? (S = c.top + a - l, m = "bottom", S < 0 && (S = a)) : S = g + c.top + a, c.left + s > y.width ? p = Math.max(0, c.left + h + b - s) : p = c.left + h, Zo(e) ? e.style.insetInlineEnd = p + "px" : e.style.insetInlineStart = p + "px", e.style.top = S + "px", e.style.transformOrigin = m, n && (e.style.marginTop = m === "bottom" ? `calc(${(o = (r = ar(/-anchor-gutter$/)) == null ? void 0 : r.value) != null ? o : "2px"} * -1)` : (i = (u = ar(/-anchor-gutter$/)) == null ? void 0 : u.value) != null ? i : "");
  }
}
function ea(e, t) {
  e && (typeof t == "string" ? e.style.cssText = t : Object.entries(t || {}).forEach(([n, r]) => e.style[n] = r));
}
function ei(e, t) {
  return e instanceof HTMLElement ? e.offsetWidth : 0;
}
function Nr(e) {
  if (e) {
    let t = e.parentNode;
    return t && t instanceof ShadowRoot && t.host && (t = t.host), t;
  }
  return null;
}
function ti(e) {
  return !!(e !== null && typeof e < "u" && e.nodeName && Nr(e));
}
function st(e) {
  return typeof Element < "u" ? e instanceof Element : e !== null && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
}
function Ut(e, t = {}) {
  if (st(e)) {
    const n = (r, o) => {
      var u, i;
      const d = (u = e == null ? void 0 : e.$attrs) != null && u[r] ? [(i = e == null ? void 0 : e.$attrs) == null ? void 0 : i[r]] : [];
      return [o].flat().reduce((l, s) => {
        if (s != null) {
          const g = typeof s;
          if (g === "string" || g === "number")
            l.push(s);
          else if (g === "object") {
            const b = Array.isArray(s) ? n(r, s) : Object.entries(s).map(([c, a]) => r === "style" && (a || a === 0) ? `${c.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${a}` : a ? c : void 0);
            l = b.length ? l.concat(b.filter((c) => !!c)) : l;
          }
        }
        return l;
      }, d);
    };
    Object.entries(t).forEach(([r, o]) => {
      if (o != null) {
        const u = r.match(/^on(.+)/);
        u ? e.addEventListener(u[1].toLowerCase(), o) : r === "p-bind" || r === "pBind" ? Ut(e, o) : (o = r === "class" ? [...new Set(n("class", o))].join(" ").trim() : r === "style" ? n("style", o).join(";").trim() : o, (e.$attrs = e.$attrs || {}) && (e.$attrs[r] = o), e.setAttribute(r, o));
      }
    });
  }
}
function ni(e, t = {}, ...n) {
  {
    const r = document.createElement(e);
    return Ut(r, t), r.append(...n), r;
  }
}
function ta(e, t) {
  return st(e) ? Array.from(e.querySelectorAll(t)) : [];
}
function Hr(e, t) {
  return st(e) ? e.matches(t) ? e : e.querySelector(t) : null;
}
function na(e, t) {
  e && document.activeElement !== e && e.focus(t);
}
function ri(e, t) {
  if (st(e)) {
    const n = e.getAttribute(t);
    return isNaN(n) ? n === "true" || n === "false" ? n === "true" : n : +n;
  }
}
function ur(e) {
  if (e) {
    let t = e.offsetHeight;
    const n = getComputedStyle(e);
    return t -= parseFloat(n.paddingTop) + parseFloat(n.paddingBottom) + parseFloat(n.borderTopWidth) + parseFloat(n.borderBottomWidth), t;
  }
  return 0;
}
function oi(e) {
  if (e) {
    const t = e.getBoundingClientRect();
    return {
      top: t.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: t.left + (window.pageXOffset || Qt(document.documentElement) || Qt(document.body) || 0)
    };
  }
  return {
    top: "auto",
    left: "auto"
  };
}
function ii(e, t) {
  return e ? e.offsetHeight : 0;
}
function Ur(e, t = []) {
  const n = Nr(e);
  return n === null ? t : Ur(n, t.concat([n]));
}
function ra(e) {
  const t = [];
  if (e) {
    const n = Ur(e), r = /(auto|scroll)/, o = (u) => {
      try {
        const i = window.getComputedStyle(u, null);
        return r.test(i.getPropertyValue("overflow")) || r.test(i.getPropertyValue("overflowX")) || r.test(i.getPropertyValue("overflowY"));
      } catch {
        return !1;
      }
    };
    for (const u of n) {
      const i = u.nodeType === 1 && u.dataset.scrollselectors;
      if (i) {
        const d = i.split(",");
        for (const l of d) {
          const s = Hr(u, l);
          s && o(s) && t.push(s);
        }
      }
      u.nodeType !== 9 && o(u) && t.push(u);
    }
  }
  return t;
}
function lr(e) {
  if (e) {
    let t = e.offsetWidth;
    const n = getComputedStyle(e);
    return t -= parseFloat(n.paddingLeft) + parseFloat(n.paddingRight) + parseFloat(n.borderLeftWidth) + parseFloat(n.borderRightWidth), t;
  }
  return 0;
}
function si() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function oa() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
function ai(e, t = "", n) {
  st(e) && n !== null && n !== void 0 && e.setAttribute(t, n);
}
var Nt = {};
function ui(e = "pui_id_") {
  return Object.hasOwn(Nt, e) || (Nt[e] = 0), Nt[e]++, `${e}${Nt[e]}`;
}
var li = Object.defineProperty, di = Object.defineProperties, ci = Object.getOwnPropertyDescriptors, Ft = Object.getOwnPropertySymbols, Fr = Object.prototype.hasOwnProperty, jr = Object.prototype.propertyIsEnumerable, dr = (e, t, n) => t in e ? li(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, _e = (e, t) => {
  for (var n in t || (t = {}))
    Fr.call(t, n) && dr(e, n, t[n]);
  if (Ft)
    for (var n of Ft(t))
      jr.call(t, n) && dr(e, n, t[n]);
  return e;
}, Kt = (e, t) => di(e, ci(t)), He = (e, t) => {
  var n = {};
  for (var r in e)
    Fr.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Ft)
    for (var r of Ft(e))
      t.indexOf(r) < 0 && jr.call(e, r) && (n[r] = e[r]);
  return n;
};
function ia(...e) {
  return xr(...e);
}
var fi = Lr(), fe = fi;
function cr(e, t) {
  jt(e) ? e.push(...t || []) : Ce(e) && Object.assign(e, t);
}
function hi(e) {
  return Ce(e) && e.hasOwnProperty("$value") && e.hasOwnProperty("$type") ? e.$value : e;
}
function gi(e) {
  return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function Zt(e = "", t = "") {
  return gi(`${ve(e, !1) && ve(t, !1) ? `${e}-` : e}${t}`);
}
function qr(e = "", t = "") {
  return `--${Zt(e, t)}`;
}
function vi(e = "") {
  const t = (e.match(/{/g) || []).length, n = (e.match(/}/g) || []).length;
  return (t + n) % 2 !== 0;
}
function Vr(e, t = "", n = "", r = [], o) {
  if (ve(e)) {
    const u = /{([^}]*)}/g, i = e.trim();
    if (vi(i))
      return;
    if (Ue(i, u)) {
      const d = i.replaceAll(u, (g) => {
        const c = g.replace(/{|}/g, "").split(".").filter((a) => !r.some((h) => Ue(a, h)));
        return `var(${qr(n, Mr(c.join("-")))}${Y(o) ? `, ${o}` : ""})`;
      }), l = /(\d+\s+[\+\-\*\/]\s+\d+)/g, s = /var\([^)]+\)/g;
      return Ue(d.replace(s, "0"), l) ? `calc(${d})` : d;
    }
    return i;
  } else if (Wo(e))
    return e;
}
function pi(e, t, n) {
  ve(t, !1) && e.push(`${t}:${n};`);
}
function it(e, t) {
  return e ? `${e}{${t}}` : "";
}
var mt = (...e) => mi(Z.getTheme(), ...e), mi = (e = {}, t, n, r) => {
  if (t) {
    const { variable: o, options: u } = Z.defaults || {}, { prefix: i, transform: d } = (e == null ? void 0 : e.options) || u || {}, s = Ue(t, /{([^}]*)}/g) ? t : `{${t}}`;
    return r === "value" || Je(r) && d === "strict" ? Z.getTokenValue(t) : Vr(s, void 0, i, [o.excludedKeyRegex], n);
  }
  return "";
};
function bi(e, t = {}) {
  const n = Z.defaults.variable, { prefix: r = n.prefix, selector: o = n.selector, excludedKeyRegex: u = n.excludedKeyRegex } = t, i = (s, g = "") => Object.entries(s).reduce(
    (b, [c, a]) => {
      const h = Ue(c, u) ? Zt(g) : Zt(g, Mr(c)), y = hi(a);
      if (Ce(y)) {
        const { variables: S, tokens: p } = i(y, h);
        cr(b.tokens, p), cr(b.variables, S);
      } else
        b.tokens.push((r ? h.replace(`${r}-`, "") : h).replaceAll("-", ".")), pi(b.variables, qr(h), Vr(y, h, r, [u]));
      return b;
    },
    { variables: [], tokens: [] }
  ), { variables: d, tokens: l } = i(e, r);
  return {
    value: d,
    tokens: l,
    declarations: d.join(""),
    css: it(o, d.join(""))
  };
}
var we = {
  regex: {
    rules: {
      class: {
        pattern: /^\.([a-zA-Z][\w-]*)$/,
        resolve(e) {
          return { type: "class", selector: e, matched: this.pattern.test(e.trim()) };
        }
      },
      attr: {
        pattern: /^\[(.*)\]$/,
        resolve(e) {
          return { type: "attr", selector: `:root${e}`, matched: this.pattern.test(e.trim()) };
        }
      },
      media: {
        pattern: /^@media (.*)$/,
        resolve(e) {
          return { type: "media", selector: `${e}{:root{[CSS]}}`, matched: this.pattern.test(e.trim()) };
        }
      },
      system: {
        pattern: /^system$/,
        resolve(e) {
          return { type: "system", selector: "@media (prefers-color-scheme: dark){:root{[CSS]}}", matched: this.pattern.test(e.trim()) };
        }
      },
      custom: {
        resolve(e) {
          return { type: "custom", selector: e, matched: !0 };
        }
      }
    },
    resolve(e) {
      const t = Object.keys(this.rules).filter((n) => n !== "custom").map((n) => this.rules[n]);
      return [e].flat().map((n) => {
        var r;
        return (r = t.map((o) => o.resolve(n)).find((o) => o.matched)) != null ? r : this.rules.custom.resolve(n);
      });
    }
  },
  _toVariables(e, t) {
    return bi(e, { prefix: t == null ? void 0 : t.prefix });
  },
  getCommon({ name: e = "", theme: t = {}, params: n, set: r, defaults: o }) {
    var u, i, d, l, s, g, b;
    const { preset: c, options: a } = t;
    let h, y, S, p, m, v, f;
    if (Y(c) && a.transform !== "strict") {
      const { primitive: k, semantic: w, extend: T } = c, C = w || {}, { colorScheme: P } = C, O = He(C, ["colorScheme"]), I = T || {}, { colorScheme: x } = I, H = He(I, ["colorScheme"]), ne = P || {}, { dark: ie } = ne, ce = He(ne, ["dark"]), se = x || {}, { dark: L } = se, D = He(se, ["dark"]), F = Y(k) ? this._toVariables({ primitive: k }, a) : {}, U = Y(O) ? this._toVariables({ semantic: O }, a) : {}, B = Y(ce) ? this._toVariables({ light: ce }, a) : {}, G = Y(ie) ? this._toVariables({ dark: ie }, a) : {}, _ = Y(H) ? this._toVariables({ semantic: H }, a) : {}, R = Y(D) ? this._toVariables({ light: D }, a) : {}, $ = Y(L) ? this._toVariables({ dark: L }, a) : {}, [A, E] = [(u = F.declarations) != null ? u : "", F.tokens], [N, q] = [(i = U.declarations) != null ? i : "", U.tokens || []], [M, W] = [(d = B.declarations) != null ? d : "", B.tokens || []], [j, J] = [(l = G.declarations) != null ? l : "", G.tokens || []], [te, Se] = [(s = _.declarations) != null ? s : "", _.tokens || []], [pe, me] = [(g = R.declarations) != null ? g : "", R.tokens || []], [ke, K] = [(b = $.declarations) != null ? b : "", $.tokens || []];
      h = this.transformCSS(e, A, "light", "variable", a, r, o), y = E;
      const be = this.transformCSS(e, `${N}${M}`, "light", "variable", a, r, o), at = this.transformCSS(e, `${j}`, "dark", "variable", a, r, o);
      S = `${be}${at}`, p = [.../* @__PURE__ */ new Set([...q, ...W, ...J])];
      const Fe = this.transformCSS(e, `${te}${pe}color-scheme:light`, "light", "variable", a, r, o), ae = this.transformCSS(e, `${ke}color-scheme:dark`, "dark", "variable", a, r, o);
      m = `${Fe}${ae}`, v = [.../* @__PURE__ */ new Set([...Se, ...me, ...K])], f = ye(c.css, { dt: mt });
    }
    return {
      primitive: {
        css: h,
        tokens: y
      },
      semantic: {
        css: S,
        tokens: p
      },
      global: {
        css: m,
        tokens: v
      },
      style: f
    };
  },
  getPreset({ name: e = "", preset: t = {}, options: n, params: r, set: o, defaults: u, selector: i }) {
    var d, l, s;
    let g, b, c;
    if (Y(t) && n.transform !== "strict") {
      const a = e.replace("-directive", ""), h = t, { colorScheme: y, extend: S, css: p } = h, m = He(h, ["colorScheme", "extend", "css"]), v = S || {}, { colorScheme: f } = v, k = He(v, ["colorScheme"]), w = y || {}, { dark: T } = w, C = He(w, ["dark"]), P = f || {}, { dark: O } = P, I = He(P, ["dark"]), x = Y(m) ? this._toVariables({ [a]: _e(_e({}, m), k) }, n) : {}, H = Y(C) ? this._toVariables({ [a]: _e(_e({}, C), I) }, n) : {}, ne = Y(T) ? this._toVariables({ [a]: _e(_e({}, T), O) }, n) : {}, [ie, ce] = [(d = x.declarations) != null ? d : "", x.tokens || []], [se, L] = [(l = H.declarations) != null ? l : "", H.tokens || []], [D, F] = [(s = ne.declarations) != null ? s : "", ne.tokens || []], U = this.transformCSS(a, `${ie}${se}`, "light", "variable", n, o, u, i), B = this.transformCSS(a, D, "dark", "variable", n, o, u, i);
      g = `${U}${B}`, b = [.../* @__PURE__ */ new Set([...ce, ...L, ...F])], c = ye(p, { dt: mt });
    }
    return {
      css: g,
      tokens: b,
      style: c
    };
  },
  getPresetC({ name: e = "", theme: t = {}, params: n, set: r, defaults: o }) {
    var u;
    const { preset: i, options: d } = t, l = (u = i == null ? void 0 : i.components) == null ? void 0 : u[e];
    return this.getPreset({ name: e, preset: l, options: d, params: n, set: r, defaults: o });
  },
  // @deprecated - use getPresetC instead
  getPresetD({ name: e = "", theme: t = {}, params: n, set: r, defaults: o }) {
    var u, i;
    const d = e.replace("-directive", ""), { preset: l, options: s } = t, g = ((u = l == null ? void 0 : l.components) == null ? void 0 : u[d]) || ((i = l == null ? void 0 : l.directives) == null ? void 0 : i[d]);
    return this.getPreset({ name: d, preset: g, options: s, params: n, set: r, defaults: o });
  },
  applyDarkColorScheme(e) {
    return !(e.darkModeSelector === "none" || e.darkModeSelector === !1);
  },
  getColorSchemeOption(e, t) {
    var n;
    return this.applyDarkColorScheme(e) ? this.regex.resolve(e.darkModeSelector === !0 ? t.options.darkModeSelector : (n = e.darkModeSelector) != null ? n : t.options.darkModeSelector) : [];
  },
  getLayerOrder(e, t = {}, n, r) {
    const { cssLayer: o } = t;
    return o ? `@layer ${ye(o.order || "primeui", n)}` : "";
  },
  getCommonStyleSheet({ name: e = "", theme: t = {}, params: n, props: r = {}, set: o, defaults: u }) {
    const i = this.getCommon({ name: e, theme: t, params: n, set: o, defaults: u }), d = Object.entries(r).reduce((l, [s, g]) => l.push(`${s}="${g}"`) && l, []).join(" ");
    return Object.entries(i || {}).reduce((l, [s, g]) => {
      if (g != null && g.css) {
        const b = vt(g == null ? void 0 : g.css), c = `${s}-variables`;
        l.push(`<style type="text/css" data-primevue-style-id="${c}" ${d}>${b}</style>`);
      }
      return l;
    }, []).join("");
  },
  getStyleSheet({ name: e = "", theme: t = {}, params: n, props: r = {}, set: o, defaults: u }) {
    var i;
    const d = { name: e, theme: t, params: n, set: o, defaults: u }, l = (i = e.includes("-directive") ? this.getPresetD(d) : this.getPresetC(d)) == null ? void 0 : i.css, s = Object.entries(r).reduce((g, [b, c]) => g.push(`${b}="${c}"`) && g, []).join(" ");
    return l ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${s}>${vt(l)}</style>` : "";
  },
  createTokens(e = {}, t, n = "", r = "", o = {}) {
    return Object.entries(e).forEach(([u, i]) => {
      const d = Ue(u, t.variable.excludedKeyRegex) ? n : n ? `${n}.${sr(u)}` : sr(u), l = r ? `${r}.${u}` : u;
      Ce(i) ? this.createTokens(i, t, d, l, o) : (o[d] || (o[d] = {
        paths: [],
        computed(s, g = {}) {
          var b, c;
          return this.paths.length === 1 ? (b = this.paths[0]) == null ? void 0 : b.computed(this.paths[0].scheme, g.binding) : s && s !== "none" ? (c = this.paths.find((a) => a.scheme === s)) == null ? void 0 : c.computed(s, g.binding) : this.paths.map((a) => a.computed(a.scheme, g[a.scheme]));
        }
      }), o[d].paths.push({
        path: l,
        value: i,
        scheme: l.includes("colorScheme.light") ? "light" : l.includes("colorScheme.dark") ? "dark" : "none",
        computed(s, g = {}) {
          const b = /{([^}]*)}/g;
          let c = i;
          if (g.name = this.path, g.binding || (g.binding = {}), Ue(i, b)) {
            const h = i.trim().replaceAll(b, (p) => {
              var m;
              const v = p.replace(/{|}/g, ""), f = (m = o[v]) == null ? void 0 : m.computed(s, g);
              return jt(f) && f.length === 2 ? `light-dark(${f[0].value},${f[1].value})` : f == null ? void 0 : f.value;
            }), y = /(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g, S = /var\([^)]+\)/g;
            c = Ue(h.replace(S, "0"), y) ? `calc(${h})` : h;
          }
          return Je(g.binding) && delete g.binding, {
            colorScheme: s,
            path: this.path,
            paths: g,
            value: c.includes("undefined") ? void 0 : c
          };
        }
      }));
    }), o;
  },
  getTokenValue(e, t, n) {
    var r;
    const u = ((l) => l.split(".").filter((g) => !Ue(g.toLowerCase(), n.variable.excludedKeyRegex)).join("."))(t), i = t.includes("colorScheme.light") ? "light" : t.includes("colorScheme.dark") ? "dark" : void 0, d = [(r = e[u]) == null ? void 0 : r.computed(i)].flat().filter((l) => l);
    return d.length === 1 ? d[0].value : d.reduce((l = {}, s) => {
      const g = s, { colorScheme: b } = g, c = He(g, ["colorScheme"]);
      return l[b] = c, l;
    }, void 0);
  },
  getSelectorRule(e, t, n, r) {
    return n === "class" || n === "attr" ? it(Y(t) ? `${e}${t},${e} ${t}` : e, r) : it(e, Y(t) ? it(t, r) : r);
  },
  transformCSS(e, t, n, r, o = {}, u, i, d) {
    if (Y(t)) {
      const { cssLayer: l } = o;
      if (r !== "style") {
        const s = this.getColorSchemeOption(o, i);
        t = n === "dark" ? s.reduce((g, { type: b, selector: c }) => (Y(c) && (g += c.includes("[CSS]") ? c.replace("[CSS]", t) : this.getSelectorRule(c, d, b, t)), g), "") : it(d ?? ":root", t);
      }
      if (l) {
        const s = {
          name: "primeui"
        };
        Ce(l) && (s.name = ye(l.name, { name: e, type: r })), Y(s.name) && (t = it(`@layer ${s.name}`, t), u == null || u.layerNames(s.name));
      }
      return t;
    }
    return "";
  }
}, Z = {
  defaults: {
    variable: {
      prefix: "p",
      selector: ":root",
      excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi
    },
    options: {
      prefix: "p",
      darkModeSelector: "system",
      cssLayer: !1
    }
  },
  _theme: void 0,
  _layerNames: /* @__PURE__ */ new Set(),
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  _loadingStyles: /* @__PURE__ */ new Set(),
  _tokens: {},
  update(e = {}) {
    const { theme: t } = e;
    t && (this._theme = Kt(_e({}, t), {
      options: _e(_e({}, this.defaults.options), t.options)
    }), this._tokens = we.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
  },
  get theme() {
    return this._theme;
  },
  get preset() {
    var e;
    return ((e = this.theme) == null ? void 0 : e.preset) || {};
  },
  get options() {
    var e;
    return ((e = this.theme) == null ? void 0 : e.options) || {};
  },
  get tokens() {
    return this._tokens;
  },
  getTheme() {
    return this.theme;
  },
  setTheme(e) {
    this.update({ theme: e }), fe.emit("theme:change", e);
  },
  getPreset() {
    return this.preset;
  },
  setPreset(e) {
    this._theme = Kt(_e({}, this.theme), { preset: e }), this._tokens = we.createTokens(e, this.defaults), this.clearLoadedStyleNames(), fe.emit("preset:change", e), fe.emit("theme:change", this.theme);
  },
  getOptions() {
    return this.options;
  },
  setOptions(e) {
    this._theme = Kt(_e({}, this.theme), { options: e }), this.clearLoadedStyleNames(), fe.emit("options:change", e), fe.emit("theme:change", this.theme);
  },
  getLayerNames() {
    return [...this._layerNames];
  },
  setLayerNames(e) {
    this._layerNames.add(e);
  },
  getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded(e) {
    return this._loadedStyleNames.has(e);
  },
  setLoadedStyleName(e) {
    this._loadedStyleNames.add(e);
  },
  deleteLoadedStyleName(e) {
    this._loadedStyleNames.delete(e);
  },
  clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  },
  getTokenValue(e) {
    return we.getTokenValue(this.tokens, e, this.defaults);
  },
  getCommon(e = "", t) {
    return we.getCommon({ name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getComponent(e = "", t) {
    const n = { name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return we.getPresetC(n);
  },
  // @deprecated - use getComponent instead
  getDirective(e = "", t) {
    const n = { name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return we.getPresetD(n);
  },
  getCustomPreset(e = "", t, n, r) {
    const o = { name: e, preset: t, options: this.options, selector: n, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return we.getPreset(o);
  },
  getLayerOrderCSS(e = "") {
    return we.getLayerOrder(e, this.options, { names: this.getLayerNames() }, this.defaults);
  },
  transformCSS(e = "", t, n = "style", r) {
    return we.transformCSS(e, t, r, n, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
  },
  getCommonStyleSheet(e = "", t, n = {}) {
    return we.getCommonStyleSheet({ name: e, theme: this.theme, params: t, props: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getStyleSheet(e, t, n = {}) {
    return we.getStyleSheet({ name: e, theme: this.theme, params: t, props: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  onStyleMounted(e) {
    this._loadingStyles.add(e);
  },
  onStyleUpdated(e) {
    this._loadingStyles.add(e);
  },
  onStyleLoaded(e, { name: t }) {
    this._loadingStyles.size && (this._loadingStyles.delete(t), fe.emit(`theme:${t}:load`, e), !this._loadingStyles.size && fe.emit("theme:load"));
  }
}, je = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames: function() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded: function(t) {
    return this._loadedStyleNames.has(t);
  },
  setLoadedStyleName: function(t) {
    this._loadedStyleNames.add(t);
  },
  deleteLoadedStyleName: function(t) {
    this._loadedStyleNames.delete(t);
  },
  clearLoadedStyleNames: function() {
    this._loadedStyleNames.clear();
  }
}, yi = ({ dt: e }) => `
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${e("disabled.opacity")};
}

.pi {
    font-size: ${e("icon.size")};
}

.p-icon {
    width: ${e("icon.size")};
    height: ${e("icon.size")};
}

.p-overlay-mask {
    background: ${e("mask.background")};
    color: ${e("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${e("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${e("mask.transition.duration")} forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${e("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${e("mask.background")};
    }
    to {
        background: transparent;
    }
}
`;
function yt(e) {
  "@babel/helpers - typeof";
  return yt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yt(e);
}
function fr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function hr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fr(Object(n), !0).forEach(function(r) {
      Si(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Si(e, t, n) {
  return (t = ki(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ki(e) {
  var t = wi(e, "string");
  return yt(t) == "symbol" ? t : t + "";
}
function wi(e, t) {
  if (yt(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (yt(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _i(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  cn() && cn().components ? Zr(e) : t ? e() : eo(e);
}
var Ti = 0;
function $i(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = gt(!1), r = gt(e), o = gt(null), u = si() ? window.document : void 0, i = t.document, d = i === void 0 ? u : i, l = t.immediate, s = l === void 0 ? !0 : l, g = t.manual, b = g === void 0 ? !1 : g, c = t.name, a = c === void 0 ? "style_".concat(++Ti) : c, h = t.id, y = h === void 0 ? void 0 : h, S = t.media, p = S === void 0 ? void 0 : S, m = t.nonce, v = m === void 0 ? void 0 : m, f = t.first, k = f === void 0 ? !1 : f, w = t.onMounted, T = w === void 0 ? void 0 : w, C = t.onUpdated, P = C === void 0 ? void 0 : C, O = t.onLoad, I = O === void 0 ? void 0 : O, x = t.props, H = x === void 0 ? {} : x, ne = function() {
  }, ie = function(L) {
    var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (d) {
      var F = hr(hr({}, H), D), U = F.name || a, B = F.id || y, G = F.nonce || v;
      o.value = d.querySelector('style[data-primevue-style-id="'.concat(U, '"]')) || d.getElementById(B) || d.createElement("style"), o.value.isConnected || (r.value = L || e, Ut(o.value, {
        type: "text/css",
        id: B,
        media: p,
        nonce: G
      }), k ? d.head.prepend(o.value) : d.head.appendChild(o.value), ai(o.value, "data-primevue-style-id", U), Ut(o.value, F), o.value.onload = function(_) {
        return I == null ? void 0 : I(_, {
          name: U
        });
      }, T == null || T(U)), !n.value && (ne = to(r, function(_) {
        o.value.textContent = _, P == null || P(U);
      }, {
        immediate: !0
      }), n.value = !0);
    }
  }, ce = function() {
    !d || !n.value || (ne(), ti(o.value) && d.head.removeChild(o.value), n.value = !1, o.value = null);
  };
  return s && !b && _i(ie), {
    id: y,
    name: a,
    el: o,
    css: r,
    unload: ce,
    load: ie,
    isLoaded: Qr(n)
  };
}
function St(e) {
  "@babel/helpers - typeof";
  return St = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, St(e);
}
function gr(e, t) {
  return Pi(e) || Ci(e, t) || Ii(e, t) || Ri();
}
function Ri() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ii(e, t) {
  if (e) {
    if (typeof e == "string") return vr(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? vr(e, t) : void 0;
  }
}
function vr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ci(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, u, i, d = [], l = !0, s = !1;
    try {
      if (u = (n = n.call(e)).next, t !== 0) for (; !(l = (r = u.call(n)).done) && (d.push(r.value), d.length !== t); l = !0) ;
    } catch (g) {
      s = !0, o = g;
    } finally {
      try {
        if (!l && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (s) throw o;
      }
    }
    return d;
  }
}
function Pi(e) {
  if (Array.isArray(e)) return e;
}
function pr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Yt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pr(Object(n), !0).forEach(function(r) {
      Oi(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Oi(e, t, n) {
  return (t = Ai(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ai(e) {
  var t = Ei(e, "string");
  return St(t) == "symbol" ? t : t + "";
}
function Ei(e, t) {
  if (St(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (St(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Di = function(t) {
  var n = t.dt;
  return `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    pointer-events: none;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: `.concat(n("scrollbar.width"), `;
}
`);
}, xi = {}, Mi = {}, oe = {
  name: "base",
  css: Di,
  style: yi,
  classes: xi,
  inlineStyles: Mi,
  load: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(u) {
      return u;
    }, o = r(ye(t, {
      dt: mt
    }));
    return Y(o) ? $i(vt(o), Yt({
      name: this.name
    }, n)) : {};
  },
  loadCSS: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, t);
  },
  loadStyle: function() {
    var t = this, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return this.load(this.style, n, function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return Z.transformCSS(n.name || t.name, "".concat(o).concat(r));
    });
  },
  getCommonTheme: function(t) {
    return Z.getCommon(this.name, t);
  },
  getComponentTheme: function(t) {
    return Z.getComponent(this.name, t);
  },
  getDirectiveTheme: function(t) {
    return Z.getDirective(this.name, t);
  },
  getPresetTheme: function(t, n, r) {
    return Z.getCustomPreset(this.name, t, n, r);
  },
  getLayerOrderThemeCSS: function() {
    return Z.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var r = ye(this.css, {
        dt: mt
      }) || "", o = vt("".concat(r).concat(t)), u = Object.entries(n).reduce(function(i, d) {
        var l = gr(d, 2), s = l[0], g = l[1];
        return i.push("".concat(s, '="').concat(g, '"')) && i;
      }, []).join(" ");
      return Y(o) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(u, ">").concat(o, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Z.getCommonStyleSheet(this.name, t, n);
  },
  getThemeStyleSheet: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [Z.getStyleSheet(this.name, t, n)];
    if (this.style) {
      var o = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), u = ye(this.style, {
        dt: mt
      }), i = vt(Z.transformCSS(o, u)), d = Object.entries(n).reduce(function(l, s) {
        var g = gr(s, 2), b = g[0], c = g[1];
        return l.push("".concat(b, '="').concat(c, '"')) && l;
      }, []).join(" ");
      Y(i) && r.push('<style type="text/css" data-primevue-style-id="'.concat(o, '" ').concat(d, ">").concat(i, "</style>"));
    }
    return r.join("");
  },
  extend: function(t) {
    return Yt(Yt({}, this), {}, {
      css: void 0,
      style: void 0
    }, t);
  }
};
function Li() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pc", t = no();
  return "".concat(e).concat(t.replace("v-", "").replaceAll("-", "_"));
}
var mr = oe.extend({
  name: "common"
});
function kt(e) {
  "@babel/helpers - typeof";
  return kt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kt(e);
}
function Ni(e) {
  return Xr(e) || Hi(e) || Wr(e) || Br();
}
function Hi(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ft(e, t) {
  return Xr(e) || Ui(e, t) || Wr(e, t) || Br();
}
function Br() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wr(e, t) {
  if (e) {
    if (typeof e == "string") return br(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? br(e, t) : void 0;
  }
}
function br(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ui(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, u, i, d = [], l = !0, s = !1;
    try {
      if (u = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        l = !1;
      } else for (; !(l = (r = u.call(n)).done) && (d.push(r.value), d.length !== t); l = !0) ;
    } catch (g) {
      s = !0, o = g;
    } finally {
      try {
        if (!l && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (s) throw o;
      }
    }
    return d;
  }
}
function Xr(e) {
  if (Array.isArray(e)) return e;
}
function yr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function X(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yr(Object(n), !0).forEach(function(r) {
      ht(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function ht(e, t, n) {
  return (t = Fi(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Fi(e) {
  var t = ji(e, "string");
  return kt(t) == "symbol" ? t : t + "";
}
function ji(e, t) {
  if (kt(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (kt(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var At = {
  name: "BaseComponent",
  props: {
    pt: {
      type: Object,
      default: void 0
    },
    ptOptions: {
      type: Object,
      default: void 0
    },
    unstyled: {
      type: Boolean,
      default: void 0
    },
    dt: {
      type: Object,
      default: void 0
    }
  },
  inject: {
    $parentInstance: {
      default: void 0
    }
  },
  watch: {
    isUnstyled: {
      immediate: !0,
      handler: function(t) {
        fe.off("theme:change", this._loadCoreStyles), t || (this._loadCoreStyles(), this._themeChangeListener(this._loadCoreStyles));
      }
    },
    dt: {
      immediate: !0,
      handler: function(t, n) {
        var r = this;
        fe.off("theme:change", this._themeScopedListener), t ? (this._loadScopedThemeStyles(t), this._themeScopedListener = function() {
          return r._loadScopedThemeStyles(t);
        }, this._themeChangeListener(this._themeScopedListener)) : this._unloadScopedThemeStyles();
      }
    }
  },
  scopedStyleEl: void 0,
  rootEl: void 0,
  uid: void 0,
  $attrSelector: void 0,
  beforeCreate: function() {
    var t, n, r, o, u, i, d, l, s, g, b, c = (t = this.pt) === null || t === void 0 ? void 0 : t._usept, a = c ? (n = this.pt) === null || n === void 0 || (n = n.originalValue) === null || n === void 0 ? void 0 : n[this.$.type.name] : void 0, h = c ? (r = this.pt) === null || r === void 0 || (r = r.value) === null || r === void 0 ? void 0 : r[this.$.type.name] : this.pt;
    (o = h || a) === null || o === void 0 || (o = o.hooks) === null || o === void 0 || (u = o.onBeforeCreate) === null || u === void 0 || u.call(o);
    var y = (i = this.$primevueConfig) === null || i === void 0 || (i = i.pt) === null || i === void 0 ? void 0 : i._usept, S = y ? (d = this.$primevue) === null || d === void 0 || (d = d.config) === null || d === void 0 || (d = d.pt) === null || d === void 0 ? void 0 : d.originalValue : void 0, p = y ? (l = this.$primevue) === null || l === void 0 || (l = l.config) === null || l === void 0 || (l = l.pt) === null || l === void 0 ? void 0 : l.value : (s = this.$primevue) === null || s === void 0 || (s = s.config) === null || s === void 0 ? void 0 : s.pt;
    (g = p || S) === null || g === void 0 || (g = g[this.$.type.name]) === null || g === void 0 || (g = g.hooks) === null || g === void 0 || (b = g.onBeforeCreate) === null || b === void 0 || b.call(g), this.$attrSelector = Li(), this.uid = this.$attrs.id || this.$attrSelector.replace("pc", "pv_id_");
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    var t;
    this.rootEl = Hr(st(this.$el) ? this.$el : (t = this.$el) === null || t === void 0 ? void 0 : t.parentElement, "[".concat(this.$attrSelector, "]")), this.rootEl && (this.rootEl.$pc = X({
      name: this.$.type.name,
      attrSelector: this.$attrSelector
    }, this.$params)), this._loadStyles(), this._hook("onBeforeMount");
  },
  mounted: function() {
    this._hook("onMounted");
  },
  beforeUpdate: function() {
    this._hook("onBeforeUpdate");
  },
  updated: function() {
    this._hook("onUpdated");
  },
  beforeUnmount: function() {
    this._hook("onBeforeUnmount");
  },
  unmounted: function() {
    this._removeThemeListeners(), this._unloadScopedThemeStyles(), this._hook("onUnmounted");
  },
  methods: {
    _hook: function(t) {
      if (!this.$options.hostName) {
        var n = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, "hooks.".concat(t)), r = this._useDefaultPT(this._getOptionValue, "hooks.".concat(t));
        n == null || n(), r == null || r();
      }
    },
    _mergeProps: function(t) {
      for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
        r[o - 1] = arguments[o];
      return un(t) ? t.apply(void 0, r) : ee.apply(void 0, r);
    },
    _load: function() {
      je.isStyleNameLoaded("base") || (oe.loadCSS(this.$styleOptions), this._loadGlobalStyles(), je.setLoadedStyleName("base")), this._loadThemeStyles();
    },
    _loadStyles: function() {
      this._load(), this._themeChangeListener(this._load);
    },
    _loadCoreStyles: function() {
      var t, n;
      !je.isStyleNameLoaded((t = this.$style) === null || t === void 0 ? void 0 : t.name) && (n = this.$style) !== null && n !== void 0 && n.name && (mr.loadCSS(this.$styleOptions), this.$options.style && this.$style.loadCSS(this.$styleOptions), je.setLoadedStyleName(this.$style.name));
    },
    _loadGlobalStyles: function() {
      var t = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      Y(t) && oe.load(t, X({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function() {
      var t, n;
      if (!(this.isUnstyled || this.$theme === "none")) {
        if (!Z.isStyleNameLoaded("common")) {
          var r, o, u = ((r = this.$style) === null || r === void 0 || (o = r.getCommonTheme) === null || o === void 0 ? void 0 : o.call(r)) || {}, i = u.primitive, d = u.semantic, l = u.global, s = u.style;
          oe.load(i == null ? void 0 : i.css, X({
            name: "primitive-variables"
          }, this.$styleOptions)), oe.load(d == null ? void 0 : d.css, X({
            name: "semantic-variables"
          }, this.$styleOptions)), oe.load(l == null ? void 0 : l.css, X({
            name: "global-variables"
          }, this.$styleOptions)), oe.loadStyle(X({
            name: "global-style"
          }, this.$styleOptions), s), Z.setLoadedStyleName("common");
        }
        if (!Z.isStyleNameLoaded((t = this.$style) === null || t === void 0 ? void 0 : t.name) && (n = this.$style) !== null && n !== void 0 && n.name) {
          var g, b, c, a, h = ((g = this.$style) === null || g === void 0 || (b = g.getComponentTheme) === null || b === void 0 ? void 0 : b.call(g)) || {}, y = h.css, S = h.style;
          (c = this.$style) === null || c === void 0 || c.load(y, X({
            name: "".concat(this.$style.name, "-variables")
          }, this.$styleOptions)), (a = this.$style) === null || a === void 0 || a.loadStyle(X({
            name: "".concat(this.$style.name, "-style")
          }, this.$styleOptions), S), Z.setLoadedStyleName(this.$style.name);
        }
        if (!Z.isStyleNameLoaded("layer-order")) {
          var p, m, v = (p = this.$style) === null || p === void 0 || (m = p.getLayerOrderThemeCSS) === null || m === void 0 ? void 0 : m.call(p);
          oe.load(v, X({
            name: "layer-order",
            first: !0
          }, this.$styleOptions)), Z.setLoadedStyleName("layer-order");
        }
      }
    },
    _loadScopedThemeStyles: function(t) {
      var n, r, o, u = ((n = this.$style) === null || n === void 0 || (r = n.getPresetTheme) === null || r === void 0 ? void 0 : r.call(n, t, "[".concat(this.$attrSelector, "]"))) || {}, i = u.css, d = (o = this.$style) === null || o === void 0 ? void 0 : o.load(i, X({
        name: "".concat(this.$attrSelector, "-").concat(this.$style.name)
      }, this.$styleOptions));
      this.scopedStyleEl = d.el;
    },
    _unloadScopedThemeStyles: function() {
      var t;
      (t = this.scopedStyleEl) === null || t === void 0 || (t = t.value) === null || t === void 0 || t.remove();
    },
    _themeChangeListener: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      };
      je.clearLoadedStyleNames(), fe.on("theme:change", t);
    },
    _removeThemeListeners: function() {
      fe.off("theme:change", this._loadCoreStyles), fe.off("theme:change", this._load), fe.off("theme:change", this._themeScopedListener);
    },
    _getHostInstance: function(t) {
      return t ? this.$options.hostName ? t.$.type.name === this.$options.hostName ? t : this._getHostInstance(t.$parentInstance) : t.$parentInstance : void 0;
    },
    _getPropValue: function(t) {
      var n;
      return this[t] || ((n = this._getHostInstance(this)) === null || n === void 0 ? void 0 : n[t]);
    },
    _getOptionValue: function(t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return ln(t, n, r);
    },
    _getPTValue: function() {
      var t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, i = /./g.test(r) && !!o[r.split(".")[0]], d = this._getPropValue("ptOptions") || ((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.ptOptions) || {}, l = d.mergeSections, s = l === void 0 ? !0 : l, g = d.mergeProps, b = g === void 0 ? !1 : g, c = u ? i ? this._useGlobalPT(this._getPTClassValue, r, o) : this._useDefaultPT(this._getPTClassValue, r, o) : void 0, a = i ? void 0 : this._getPTSelf(n, this._getPTClassValue, r, X(X({}, o), {}, {
        global: c || {}
      })), h = this._getPTDatasets(r);
      return s || !s && a ? b ? this._mergeProps(b, c, a, h) : X(X(X({}, c), a), h) : X(X({}, a), h);
    },
    _getPTSelf: function() {
      for (var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
        r[o - 1] = arguments[o];
      return ee(
        this._usePT.apply(this, [this._getPT(t, this.$name)].concat(r)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(r))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function() {
      var t, n, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", o = "data-pc-", u = r === "root" && Y((t = this.pt) === null || t === void 0 ? void 0 : t["data-pc-section"]);
      return r !== "transition" && X(X({}, r === "root" && X(X(ht({}, "".concat(o, "name"), Ie(u ? (n = this.pt) === null || n === void 0 ? void 0 : n["data-pc-section"] : this.$.type.name)), u && ht({}, "".concat(o, "extend"), Ie(this.$.type.name))), {}, ht({}, "".concat(this.$attrSelector), ""))), {}, ht({}, "".concat(o, "section"), Ie(r)));
    },
    _getPTClassValue: function() {
      var t = this._getOptionValue.apply(this, arguments);
      return ve(t) || jt(t) ? {
        class: t
      } : t;
    },
    _getPT: function(t) {
      var n = this, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 ? arguments[2] : void 0, u = function(d) {
        var l, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, g = o ? o(d) : d, b = Ie(r), c = Ie(n.$name);
        return (l = s ? b !== c ? g == null ? void 0 : g[b] : void 0 : g == null ? void 0 : g[b]) !== null && l !== void 0 ? l : g;
      };
      return t != null && t.hasOwnProperty("_usept") ? {
        _usept: t._usept,
        originalValue: u(t.originalValue),
        value: u(t.value)
      } : u(t, !0);
    },
    _usePT: function(t, n, r, o) {
      var u = function(y) {
        return n(y, r, o);
      };
      if (t != null && t.hasOwnProperty("_usept")) {
        var i, d = t._usept || ((i = this.$primevueConfig) === null || i === void 0 ? void 0 : i.ptOptions) || {}, l = d.mergeSections, s = l === void 0 ? !0 : l, g = d.mergeProps, b = g === void 0 ? !1 : g, c = u(t.originalValue), a = u(t.value);
        return c === void 0 && a === void 0 ? void 0 : ve(a) ? a : ve(c) ? c : s || !s && a ? b ? this._mergeProps(b, c, a) : X(X({}, c), a) : a;
      }
      return u(t);
    },
    _useGlobalPT: function(t, n, r) {
      return this._usePT(this.globalPT, t, n, r);
    },
    _useDefaultPT: function(t, n, r) {
      return this._usePT(this.defaultPT, t, n, r);
    },
    ptm: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, t, X(X({}, this.$params), n));
    },
    ptmi: function() {
      var t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = ee(this.$_attrsWithoutPT, this.ptm(n, r));
      return o != null && o.hasOwnProperty("id") && ((t = o.id) !== null && t !== void 0 || (o.id = this.$id)), o;
    },
    ptmo: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(t, n, X({
        instance: this
      }, r), !1);
    },
    cx: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.isUnstyled ? void 0 : this._getOptionValue(this.$style.classes, t, X(X({}, this.$params), n));
    },
    sx: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (n) {
        var o = this._getOptionValue(this.$style.inlineStyles, t, X(X({}, this.$params), r)), u = this._getOptionValue(mr.inlineStyles, t, X(X({}, this.$params), r));
        return [u, o];
      }
    }
  },
  computed: {
    globalPT: function() {
      var t, n = this;
      return this._getPT((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.pt, void 0, function(r) {
        return ye(r, {
          instance: n
        });
      });
    },
    defaultPT: function() {
      var t, n = this;
      return this._getPT((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.pt, void 0, function(r) {
        return n._getOptionValue(r, n.$name, X({}, n.$params)) || ye(r, X({}, n.$params));
      });
    },
    isUnstyled: function() {
      var t;
      return this.unstyled !== void 0 ? this.unstyled : (t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.unstyled;
    },
    $id: function() {
      return this.$attrs.id || this.uid;
    },
    $inProps: function() {
      var t, n = Object.keys(((t = this.$.vnode) === null || t === void 0 ? void 0 : t.props) || {});
      return Object.fromEntries(Object.entries(this.$props).filter(function(r) {
        var o = ft(r, 1), u = o[0];
        return n == null ? void 0 : n.includes(u);
      }));
    },
    $theme: function() {
      var t;
      return (t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.theme;
    },
    $style: function() {
      return X(X({
        classes: void 0,
        inlineStyles: void 0,
        load: function() {
        },
        loadCSS: function() {
        },
        loadStyle: function() {
        }
      }, (this._getHostInstance(this) || {}).$style), this.$options.style);
    },
    $styleOptions: function() {
      var t;
      return {
        nonce: (t = this.$primevueConfig) === null || t === void 0 || (t = t.csp) === null || t === void 0 ? void 0 : t.nonce
      };
    },
    $primevueConfig: function() {
      var t;
      return (t = this.$primevue) === null || t === void 0 ? void 0 : t.config;
    },
    $name: function() {
      return this.$options.hostName || this.$.type.name;
    },
    $params: function() {
      var t = this._getHostInstance(this) || this.$parent;
      return {
        instance: this,
        props: this.$props,
        state: this.$data,
        attrs: this.$attrs,
        parent: {
          instance: t,
          props: t == null ? void 0 : t.$props,
          state: t == null ? void 0 : t.$data,
          attrs: t == null ? void 0 : t.$attrs
        }
      };
    },
    $_attrsPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(t) {
        var n = ft(t, 1), r = n[0];
        return r == null ? void 0 : r.startsWith("pt:");
      }).reduce(function(t, n) {
        var r = ft(n, 2), o = r[0], u = r[1], i = o.split(":"), d = Ni(i), l = d.slice(1);
        return l == null || l.reduce(function(s, g, b, c) {
          return !s[g] && (s[g] = b === c.length - 1 ? u : {}), s[g];
        }, t), t;
      }, {});
    },
    $_attrsWithoutPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(t) {
        var n = ft(t, 1), r = n[0];
        return !(r != null && r.startsWith("pt:"));
      }).reduce(function(t, n) {
        var r = ft(n, 2), o = r[0], u = r[1];
        return t[o] = u, t;
      }, {});
    }
  }
}, qi = ({ dt: e }) => `
.p-card {
    background: ${e("card.background")};
    color: ${e("card.color")};
    box-shadow: ${e("card.shadow")};
    border-radius: ${e("card.border.radius")};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${e("card.caption.gap")};
}

.p-card-body {
    padding: ${e("card.body.padding")};
    display: flex;
    flex-direction: column;
    gap: ${e("card.body.gap")};
}

.p-card-title {
    font-size: ${e("card.title.font.size")};
    font-weight: ${e("card.title.font.weight")};
}

.p-card-subtitle {
    color: ${e("card.subtitle.color")};
}
`, Vi = {
  root: "p-card p-component",
  header: "p-card-header",
  body: "p-card-body",
  caption: "p-card-caption",
  title: "p-card-title",
  subtitle: "p-card-subtitle",
  content: "p-card-content",
  footer: "p-card-footer"
}, Bi = oe.extend({
  name: "card",
  style: qi,
  classes: Vi
}), Wi = {
  name: "BaseCard",
  extends: At,
  style: Bi,
  provide: function() {
    return {
      $pcCard: this,
      $parentInstance: this
    };
  }
}, Xi = {
  name: "Card",
  extends: Wi,
  inheritAttrs: !1
};
function zi(e, t, n, r, o, u) {
  return ue(), ge("div", ee({
    class: e.cx("root")
  }, e.ptmi("root")), [e.$slots.header ? (ue(), ge("div", ee({
    key: 0,
    class: e.cx("header")
  }, e.ptm("header")), [Te(e.$slots, "header")], 16)) : Ye("", !0), bt("div", ee({
    class: e.cx("body")
  }, e.ptm("body")), [e.$slots.title || e.$slots.subtitle ? (ue(), ge("div", ee({
    key: 0,
    class: e.cx("caption")
  }, e.ptm("caption")), [e.$slots.title ? (ue(), ge("div", ee({
    key: 0,
    class: e.cx("title")
  }, e.ptm("title")), [Te(e.$slots, "title")], 16)) : Ye("", !0), e.$slots.subtitle ? (ue(), ge("div", ee({
    key: 1,
    class: e.cx("subtitle")
  }, e.ptm("subtitle")), [Te(e.$slots, "subtitle")], 16)) : Ye("", !0)], 16)) : Ye("", !0), bt("div", ee({
    class: e.cx("content")
  }, e.ptm("content")), [Te(e.$slots, "content")], 16), e.$slots.footer ? (ue(), ge("div", ee({
    key: 1,
    class: e.cx("footer")
  }, e.ptm("footer")), [Te(e.$slots, "footer")], 16)) : Ye("", !0)], 16)], 16);
}
Xi.render = zi;
var Gi = `
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`, Ki = oe.extend({
  name: "baseicon",
  css: Gi
});
function wt(e) {
  "@babel/helpers - typeof";
  return wt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wt(e);
}
function Sr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function kr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sr(Object(n), !0).forEach(function(r) {
      Yi(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Yi(e, t, n) {
  return (t = Ji(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ji(e) {
  var t = Qi(e, "string");
  return wt(t) == "symbol" ? t : t + "";
}
function Qi(e, t) {
  if (wt(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (wt(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Zi = {
  name: "BaseIcon",
  extends: At,
  props: {
    label: {
      type: String,
      default: void 0
    },
    spin: {
      type: Boolean,
      default: !1
    }
  },
  style: Ki,
  provide: function() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function() {
      var t = Je(this.label);
      return kr(kr({}, !this.isUnstyled && {
        class: ["p-icon", {
          "p-icon-spin": this.spin
        }]
      }), {}, {
        role: t ? void 0 : "img",
        "aria-label": t ? void 0 : this.label,
        "aria-hidden": t
      });
    }
  }
}, zr = {
  name: "SpinnerIcon",
  extends: Zi
};
function es(e, t, n, r, o, u) {
  return ue(), ge("svg", ee({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), t[0] || (t[0] = [bt("path", {
    d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
zr.render = es;
var ts = ({ dt: e }) => `
.p-badge {
    display: inline-flex;
    border-radius: ${e("badge.border.radius")};
    align-items: center;
    justify-content: center;
    padding: ${e("badge.padding")};
    background: ${e("badge.primary.background")};
    color: ${e("badge.primary.color")};
    font-size: ${e("badge.font.size")};
    font-weight: ${e("badge.font.weight")};
    min-width: ${e("badge.min.width")};
    height: ${e("badge.height")};
}

.p-badge-dot {
    width: ${e("badge.dot.size")};
    min-width: ${e("badge.dot.size")};
    height: ${e("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${e("badge.secondary.background")};
    color: ${e("badge.secondary.color")};
}

.p-badge-success {
    background: ${e("badge.success.background")};
    color: ${e("badge.success.color")};
}

.p-badge-info {
    background: ${e("badge.info.background")};
    color: ${e("badge.info.color")};
}

.p-badge-warn {
    background: ${e("badge.warn.background")};
    color: ${e("badge.warn.color")};
}

.p-badge-danger {
    background: ${e("badge.danger.background")};
    color: ${e("badge.danger.color")};
}

.p-badge-contrast {
    background: ${e("badge.contrast.background")};
    color: ${e("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${e("badge.sm.font.size")};
    min-width: ${e("badge.sm.min.width")};
    height: ${e("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${e("badge.lg.font.size")};
    min-width: ${e("badge.lg.min.width")};
    height: ${e("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${e("badge.xl.font.size")};
    min-width: ${e("badge.xl.min.width")};
    height: ${e("badge.xl.height")};
}
`, ns = {
  root: function(t) {
    var n = t.props, r = t.instance;
    return ["p-badge p-component", {
      "p-badge-circle": Y(n.value) && String(n.value).length === 1,
      "p-badge-dot": Je(n.value) && !r.$slots.default,
      "p-badge-sm": n.size === "small",
      "p-badge-lg": n.size === "large",
      "p-badge-xl": n.size === "xlarge",
      "p-badge-info": n.severity === "info",
      "p-badge-success": n.severity === "success",
      "p-badge-warn": n.severity === "warn",
      "p-badge-danger": n.severity === "danger",
      "p-badge-secondary": n.severity === "secondary",
      "p-badge-contrast": n.severity === "contrast"
    }];
  }
}, rs = oe.extend({
  name: "badge",
  style: ts,
  classes: ns
}), os = {
  name: "BaseBadge",
  extends: At,
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    severity: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null
    }
  },
  style: rs,
  provide: function() {
    return {
      $pcBadge: this,
      $parentInstance: this
    };
  }
};
function _t(e) {
  "@babel/helpers - typeof";
  return _t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _t(e);
}
function wr(e, t, n) {
  return (t = is(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function is(e) {
  var t = ss(e, "string");
  return _t(t) == "symbol" ? t : t + "";
}
function ss(e, t) {
  if (_t(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (_t(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Gr = {
  name: "Badge",
  extends: os,
  inheritAttrs: !1,
  computed: {
    dataP: function() {
      return pt(wr(wr({
        circle: this.value != null && String(this.value).length === 1,
        empty: this.value == null && !this.$slots.default
      }, this.severity, this.severity), this.size, this.size));
    }
  }
}, as = ["data-p"];
function us(e, t, n, r, o, u) {
  return ue(), ge("span", ee({
    class: e.cx("root"),
    "data-p": u.dataP
  }, e.ptmi("root")), [Te(e.$slots, "default", {}, function() {
    return [Jt(nn(e.value), 1)];
  })], 16, as);
}
Gr.render = us;
var Ht = Lr();
function Tt(e) {
  "@babel/helpers - typeof";
  return Tt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Tt(e);
}
function _r(e, t) {
  return fs(e) || cs(e, t) || ds(e, t) || ls();
}
function ls() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ds(e, t) {
  if (e) {
    if (typeof e == "string") return Tr(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Tr(e, t) : void 0;
  }
}
function Tr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function cs(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, u, i, d = [], l = !0, s = !1;
    try {
      if (u = (n = n.call(e)).next, t !== 0) for (; !(l = (r = u.call(n)).done) && (d.push(r.value), d.length !== t); l = !0) ;
    } catch (g) {
      s = !0, o = g;
    } finally {
      try {
        if (!l && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (s) throw o;
      }
    }
    return d;
  }
}
function fs(e) {
  if (Array.isArray(e)) return e;
}
function $r(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $r(Object(n), !0).forEach(function(r) {
      en(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $r(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function en(e, t, n) {
  return (t = hs(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function hs(e) {
  var t = gs(e, "string");
  return Tt(t) == "symbol" ? t : t + "";
}
function gs(e, t) {
  if (Tt(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Tt(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var V = {
  _getMeta: function() {
    return [Ce(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], ye(Ce(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(t, n) {
    var r, o, u;
    return (r = (t == null || (o = t.instance) === null || o === void 0 ? void 0 : o.$primevue) || (n == null || (u = n.ctx) === null || u === void 0 || (u = u.appContext) === null || u === void 0 || (u = u.config) === null || u === void 0 || (u = u.globalProperties) === null || u === void 0 ? void 0 : u.$primevue)) === null || r === void 0 ? void 0 : r.config;
  },
  _getOptionValue: ln,
  _getPTValue: function() {
    var t, n, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, d = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, l = function() {
      var m = V._getOptionValue.apply(V, arguments);
      return ve(m) || jt(m) ? {
        class: m
      } : m;
    }, s = ((t = r.binding) === null || t === void 0 || (t = t.value) === null || t === void 0 ? void 0 : t.ptOptions) || ((n = r.$primevueConfig) === null || n === void 0 ? void 0 : n.ptOptions) || {}, g = s.mergeSections, b = g === void 0 ? !0 : g, c = s.mergeProps, a = c === void 0 ? !1 : c, h = d ? V._useDefaultPT(r, r.defaultPT(), l, u, i) : void 0, y = V._usePT(r, V._getPT(o, r.$name), l, u, z(z({}, i), {}, {
      global: h || {}
    })), S = V._getPTDatasets(r, u);
    return b || !b && y ? a ? V._mergeProps(r, a, h, y, S) : z(z(z({}, h), y), S) : z(z({}, y), S);
  },
  _getPTDatasets: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = "data-pc-";
    return z(z({}, n === "root" && en({}, "".concat(r, "name"), Ie(t.$name))), {}, en({}, "".concat(r, "section"), Ie(n)));
  },
  _getPT: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 ? arguments[2] : void 0, o = function(i) {
      var d, l = r ? r(i) : i, s = Ie(n);
      return (d = l == null ? void 0 : l[s]) !== null && d !== void 0 ? d : l;
    };
    return t && Object.hasOwn(t, "_usept") ? {
      _usept: t._usept,
      originalValue: o(t.originalValue),
      value: o(t.value)
    } : o(t);
  },
  _usePT: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0, o = arguments.length > 3 ? arguments[3] : void 0, u = arguments.length > 4 ? arguments[4] : void 0, i = function(S) {
      return r(S, o, u);
    };
    if (n && Object.hasOwn(n, "_usept")) {
      var d, l = n._usept || ((d = t.$primevueConfig) === null || d === void 0 ? void 0 : d.ptOptions) || {}, s = l.mergeSections, g = s === void 0 ? !0 : s, b = l.mergeProps, c = b === void 0 ? !1 : b, a = i(n.originalValue), h = i(n.value);
      return a === void 0 && h === void 0 ? void 0 : ve(h) ? h : ve(a) ? a : g || !g && h ? c ? V._mergeProps(t, c, a, h) : z(z({}, a), h) : h;
    }
    return i(n);
  },
  _useDefaultPT: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, o = arguments.length > 3 ? arguments[3] : void 0, u = arguments.length > 4 ? arguments[4] : void 0;
    return V._usePT(t, n, r, o, u);
  },
  _loadStyles: function() {
    var t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0, o = arguments.length > 2 ? arguments[2] : void 0, u = V._getConfig(r, o), i = {
      nonce: u == null || (t = u.csp) === null || t === void 0 ? void 0 : t.nonce
    };
    V._loadCoreStyles(n, i), V._loadThemeStyles(n, i), V._loadScopedThemeStyles(n, i), V._removeThemeListeners(n), n.$loadStyles = function() {
      return V._loadThemeStyles(n, i);
    }, V._themeChangeListener(n.$loadStyles);
  },
  _loadCoreStyles: function() {
    var t, n, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
    if (!je.isStyleNameLoaded((t = r.$style) === null || t === void 0 ? void 0 : t.name) && (n = r.$style) !== null && n !== void 0 && n.name) {
      var u;
      oe.loadCSS(o), (u = r.$style) === null || u === void 0 || u.loadCSS(o), je.setLoadedStyleName(r.$style.name);
    }
  },
  _loadThemeStyles: function() {
    var t, n, r, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = arguments.length > 1 ? arguments[1] : void 0;
    if (!(o != null && o.isUnstyled() || (o == null || (t = o.theme) === null || t === void 0 ? void 0 : t.call(o)) === "none")) {
      if (!Z.isStyleNameLoaded("common")) {
        var i, d, l = ((i = o.$style) === null || i === void 0 || (d = i.getCommonTheme) === null || d === void 0 ? void 0 : d.call(i)) || {}, s = l.primitive, g = l.semantic, b = l.global, c = l.style;
        oe.load(s == null ? void 0 : s.css, z({
          name: "primitive-variables"
        }, u)), oe.load(g == null ? void 0 : g.css, z({
          name: "semantic-variables"
        }, u)), oe.load(b == null ? void 0 : b.css, z({
          name: "global-variables"
        }, u)), oe.loadStyle(z({
          name: "global-style"
        }, u), c), Z.setLoadedStyleName("common");
      }
      if (!Z.isStyleNameLoaded((n = o.$style) === null || n === void 0 ? void 0 : n.name) && (r = o.$style) !== null && r !== void 0 && r.name) {
        var a, h, y, S, p = ((a = o.$style) === null || a === void 0 || (h = a.getDirectiveTheme) === null || h === void 0 ? void 0 : h.call(a)) || {}, m = p.css, v = p.style;
        (y = o.$style) === null || y === void 0 || y.load(m, z({
          name: "".concat(o.$style.name, "-variables")
        }, u)), (S = o.$style) === null || S === void 0 || S.loadStyle(z({
          name: "".concat(o.$style.name, "-style")
        }, u), v), Z.setLoadedStyleName(o.$style.name);
      }
      if (!Z.isStyleNameLoaded("layer-order")) {
        var f, k, w = (f = o.$style) === null || f === void 0 || (k = f.getLayerOrderThemeCSS) === null || k === void 0 ? void 0 : k.call(f);
        oe.load(w, z({
          name: "layer-order",
          first: !0
        }, u)), Z.setLoadedStyleName("layer-order");
      }
    }
  },
  _loadScopedThemeStyles: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, r = t.preset();
    if (r && t.$attrSelector) {
      var o, u, i, d = ((o = t.$style) === null || o === void 0 || (u = o.getPresetTheme) === null || u === void 0 ? void 0 : u.call(o, r, "[".concat(t.$attrSelector, "]"))) || {}, l = d.css, s = (i = t.$style) === null || i === void 0 ? void 0 : i.load(l, z({
        name: "".concat(t.$attrSelector, "-").concat(t.$style.name)
      }, n));
      t.scopedStyleEl = s.el;
    }
  },
  _themeChangeListener: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    je.clearLoadedStyleNames(), fe.on("theme:change", t);
  },
  _removeThemeListeners: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    fe.off("theme:change", t.$loadStyles), t.$loadStyles = void 0;
  },
  _hook: function(t, n, r, o, u, i) {
    var d, l, s = "on".concat(Xo(n)), g = V._getConfig(o, u), b = r == null ? void 0 : r.$instance, c = V._usePT(b, V._getPT(o == null || (d = o.value) === null || d === void 0 ? void 0 : d.pt, t), V._getOptionValue, "hooks.".concat(s)), a = V._useDefaultPT(b, g == null || (l = g.pt) === null || l === void 0 || (l = l.directives) === null || l === void 0 ? void 0 : l[t], V._getOptionValue, "hooks.".concat(s)), h = {
      el: r,
      binding: o,
      vnode: u,
      prevVnode: i
    };
    c == null || c(b, h), a == null || a(b, h);
  },
  /* eslint-disable-next-line no-unused-vars */
  _mergeProps: function() {
    for (var t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
      r[o - 2] = arguments[o];
    return un(t) ? t.apply(void 0, r) : ee.apply(void 0, r);
  },
  _extend: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = function(d, l, s, g, b) {
      var c, a, h, y;
      l._$instances = l._$instances || {};
      var S = V._getConfig(s, g), p = l._$instances[t] || {}, m = Je(p) ? z(z({}, n), n == null ? void 0 : n.methods) : {};
      l._$instances[t] = z(z({}, p), {}, {
        /* new instance variables to pass in directive methods */
        $name: t,
        $host: l,
        $binding: s,
        $modifiers: s == null ? void 0 : s.modifiers,
        $value: s == null ? void 0 : s.value,
        $el: p.$el || l || void 0,
        $style: z({
          classes: void 0,
          inlineStyles: void 0,
          load: function() {
          },
          loadCSS: function() {
          },
          loadStyle: function() {
          }
        }, n == null ? void 0 : n.style),
        $primevueConfig: S,
        $attrSelector: (c = l.$pd) === null || c === void 0 || (c = c[t]) === null || c === void 0 ? void 0 : c.attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return V._getPT(S == null ? void 0 : S.pt, void 0, function(f) {
            var k;
            return f == null || (k = f.directives) === null || k === void 0 ? void 0 : k[t];
          });
        },
        isUnstyled: function() {
          var f, k;
          return ((f = l._$instances[t]) === null || f === void 0 || (f = f.$binding) === null || f === void 0 || (f = f.value) === null || f === void 0 ? void 0 : f.unstyled) !== void 0 ? (k = l._$instances[t]) === null || k === void 0 || (k = k.$binding) === null || k === void 0 || (k = k.value) === null || k === void 0 ? void 0 : k.unstyled : S == null ? void 0 : S.unstyled;
        },
        theme: function() {
          var f;
          return (f = l._$instances[t]) === null || f === void 0 || (f = f.$primevueConfig) === null || f === void 0 ? void 0 : f.theme;
        },
        preset: function() {
          var f;
          return (f = l._$instances[t]) === null || f === void 0 || (f = f.$binding) === null || f === void 0 || (f = f.value) === null || f === void 0 ? void 0 : f.dt;
        },
        /* instance's methods */
        ptm: function() {
          var f, k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return V._getPTValue(l._$instances[t], (f = l._$instances[t]) === null || f === void 0 || (f = f.$binding) === null || f === void 0 || (f = f.value) === null || f === void 0 ? void 0 : f.pt, k, z({}, w));
        },
        ptmo: function() {
          var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return V._getPTValue(l._$instances[t], f, k, w, !1);
        },
        cx: function() {
          var f, k, w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (f = l._$instances[t]) !== null && f !== void 0 && f.isUnstyled() ? void 0 : V._getOptionValue((k = l._$instances[t]) === null || k === void 0 || (k = k.$style) === null || k === void 0 ? void 0 : k.classes, w, z({}, T));
        },
        sx: function() {
          var f, k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, T = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return w ? V._getOptionValue((f = l._$instances[t]) === null || f === void 0 || (f = f.$style) === null || f === void 0 ? void 0 : f.inlineStyles, k, z({}, T)) : void 0;
        }
      }, m), l.$instance = l._$instances[t], (a = (h = l.$instance)[d]) === null || a === void 0 || a.call(h, l, s, g, b), l["$".concat(t)] = l.$instance, V._hook(t, d, l, s, g, b), l.$pd || (l.$pd = {}), l.$pd[t] = z(z({}, (y = l.$pd) === null || y === void 0 ? void 0 : y[t]), {}, {
        name: t,
        instance: l._$instances[t]
      });
    }, o = function(d) {
      var l, s, g, b = d._$instances[t], c = b == null ? void 0 : b.watch, a = function(S) {
        var p, m = S.newValue, v = S.oldValue;
        return c == null || (p = c.config) === null || p === void 0 ? void 0 : p.call(b, m, v);
      }, h = function(S) {
        var p, m = S.newValue, v = S.oldValue;
        return c == null || (p = c["config.ripple"]) === null || p === void 0 ? void 0 : p.call(b, m, v);
      };
      b.$watchersCallback = {
        config: a,
        "config.ripple": h
      }, c == null || (l = c.config) === null || l === void 0 || l.call(b, b == null ? void 0 : b.$primevueConfig), Ht.on("config:change", a), c == null || (s = c["config.ripple"]) === null || s === void 0 || s.call(b, b == null || (g = b.$primevueConfig) === null || g === void 0 ? void 0 : g.ripple), Ht.on("config:ripple:change", h);
    }, u = function(d) {
      var l = d._$instances[t].$watchersCallback;
      l && (Ht.off("config:change", l.config), Ht.off("config:ripple:change", l["config.ripple"]), d._$instances[t].$watchersCallback = void 0);
    };
    return {
      created: function(d, l, s, g) {
        d.$pd || (d.$pd = {}), d.$pd[t] = {
          name: t,
          attrSelector: ui("pd")
        }, r("created", d, l, s, g);
      },
      beforeMount: function(d, l, s, g) {
        var b;
        V._loadStyles((b = d.$pd[t]) === null || b === void 0 ? void 0 : b.instance, l, s), r("beforeMount", d, l, s, g), o(d);
      },
      mounted: function(d, l, s, g) {
        var b;
        V._loadStyles((b = d.$pd[t]) === null || b === void 0 ? void 0 : b.instance, l, s), r("mounted", d, l, s, g);
      },
      beforeUpdate: function(d, l, s, g) {
        r("beforeUpdate", d, l, s, g);
      },
      updated: function(d, l, s, g) {
        var b;
        V._loadStyles((b = d.$pd[t]) === null || b === void 0 ? void 0 : b.instance, l, s), r("updated", d, l, s, g);
      },
      beforeUnmount: function(d, l, s, g) {
        var b;
        u(d), V._removeThemeListeners((b = d.$pd[t]) === null || b === void 0 ? void 0 : b.instance), r("beforeUnmount", d, l, s, g);
      },
      unmounted: function(d, l, s, g) {
        var b;
        (b = d.$pd[t]) === null || b === void 0 || (b = b.instance) === null || b === void 0 || (b = b.scopedStyleEl) === null || b === void 0 || (b = b.value) === null || b === void 0 || b.remove(), r("unmounted", d, l, s, g);
      }
    };
  },
  extend: function() {
    var t = V._getMeta.apply(V, arguments), n = _r(t, 2), r = n[0], o = n[1];
    return z({
      extend: function() {
        var i = V._getMeta.apply(V, arguments), d = _r(i, 2), l = d[0], s = d[1];
        return V.extend(l, z(z(z({}, o), o == null ? void 0 : o.methods), s));
      }
    }, V._extend(r, o));
  }
}, vs = ({ dt: e }) => `
.p-ink {
    display: block;
    position: absolute;
    background: ${e("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`, ps = {
  root: "p-ink"
}, ms = oe.extend({
  name: "ripple-directive",
  style: vs,
  classes: ps
}), bs = V.extend({
  style: ms
});
function $t(e) {
  "@babel/helpers - typeof";
  return $t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $t(e);
}
function ys(e) {
  return _s(e) || ws(e) || ks(e) || Ss();
}
function Ss() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ks(e, t) {
  if (e) {
    if (typeof e == "string") return tn(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? tn(e, t) : void 0;
  }
}
function ws(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function _s(e) {
  if (Array.isArray(e)) return tn(e);
}
function tn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Rr(e, t, n) {
  return (t = Ts(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ts(e) {
  var t = $s(e, "string");
  return $t(t) == "symbol" ? t : t + "";
}
function $s(e, t) {
  if ($t(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if ($t(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Rs = bs.extend("ripple", {
  watch: {
    "config.ripple": function(t) {
      t ? (this.createRipple(this.$host), this.bindEvents(this.$host), this.$host.setAttribute("data-pd-ripple", !0), this.$host.style.overflow = "hidden", this.$host.style.position = "relative") : (this.remove(this.$host), this.$host.removeAttribute("data-pd-ripple"));
    }
  },
  unmounted: function(t) {
    this.remove(t);
  },
  timeout: void 0,
  methods: {
    bindEvents: function(t) {
      t.addEventListener("mousedown", this.onMouseDown.bind(this));
    },
    unbindEvents: function(t) {
      t.removeEventListener("mousedown", this.onMouseDown.bind(this));
    },
    createRipple: function(t) {
      var n = this.getInk(t);
      n || (n = ni("span", Rr(Rr({
        role: "presentation",
        "aria-hidden": !0,
        "data-p-ink": !0,
        "data-p-ink-active": !1,
        class: !this.isUnstyled() && this.cx("root"),
        onAnimationEnd: this.onAnimationEnd.bind(this)
      }, this.$attrSelector, ""), "p-bind", this.ptm("root"))), t.appendChild(n), this.$el = n);
    },
    remove: function(t) {
      var n = this.getInk(t);
      n && (this.$host.style.overflow = "", this.$host.style.position = "", this.unbindEvents(t), n.removeEventListener("animationend", this.onAnimationEnd), n.remove());
    },
    onMouseDown: function(t) {
      var n = this, r = t.currentTarget, o = this.getInk(r);
      if (!(!o || getComputedStyle(o, null).display === "none")) {
        if (!this.isUnstyled() && Gt(o, "p-ink-active"), o.setAttribute("data-p-ink-active", "false"), !ur(o) && !lr(o)) {
          var u = Math.max(ei(r), ii(r));
          o.style.height = u + "px", o.style.width = u + "px";
        }
        var i = oi(r), d = t.pageX - i.left + document.body.scrollTop - lr(o) / 2, l = t.pageY - i.top + document.body.scrollLeft - ur(o) / 2;
        o.style.top = l + "px", o.style.left = d + "px", !this.isUnstyled() && Go(o, "p-ink-active"), o.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          o && (!n.isUnstyled() && Gt(o, "p-ink-active"), o.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(t) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && Gt(t.currentTarget, "p-ink-active"), t.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(t) {
      return t && t.children ? ys(t.children).find(function(n) {
        return ri(n, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
}), Is = ({ dt: e }) => `
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("button.primary.color")};
    background: ${e("button.primary.background")};
    border: 1px solid ${e("button.primary.border.color")};
    padding: ${e("button.padding.y")} ${e("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("button.transition.duration")}, color ${e("button.transition.duration")}, border-color ${e("button.transition.duration")},
            outline-color ${e("button.transition.duration")}, box-shadow ${e("button.transition.duration")};
    border-radius: ${e("button.border.radius")};
    outline-color: transparent;
    gap: ${e("button.gap")};
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${e("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${e("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${e("button.sm.font.size")};
    padding: ${e("button.sm.padding.y")} ${e("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${e("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${e("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${e("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${e("button.lg.font.size")};
    padding: ${e("button.lg.padding.y")} ${e("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${e("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${e("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${e("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${e("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${e("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${e("button.primary.hover.background")};
    border: 1px solid ${e("button.primary.hover.border.color")};
    color: ${e("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${e("button.primary.active.background")};
    border: 1px solid ${e("button.primary.active.border.color")};
    color: ${e("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${e("button.primary.focus.ring.shadow")};
    outline: ${e("button.focus.ring.width")} ${e("button.focus.ring.style")} ${e("button.primary.focus.ring.color")};
    outline-offset: ${e("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${e("button.badge.size")};
    height: ${e("button.badge.size")};
    line-height: ${e("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${e("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${e("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${e("button.secondary.background")};
    border: 1px solid ${e("button.secondary.border.color")};
    color: ${e("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${e("button.secondary.hover.background")};
    border: 1px solid ${e("button.secondary.hover.border.color")};
    color: ${e("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${e("button.secondary.active.background")};
    border: 1px solid ${e("button.secondary.active.border.color")};
    color: ${e("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${e("button.secondary.focus.ring.color")};
    box-shadow: ${e("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${e("button.success.background")};
    border: 1px solid ${e("button.success.border.color")};
    color: ${e("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${e("button.success.hover.background")};
    border: 1px solid ${e("button.success.hover.border.color")};
    color: ${e("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${e("button.success.active.background")};
    border: 1px solid ${e("button.success.active.border.color")};
    color: ${e("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${e("button.success.focus.ring.color")};
    box-shadow: ${e("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${e("button.info.background")};
    border: 1px solid ${e("button.info.border.color")};
    color: ${e("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${e("button.info.hover.background")};
    border: 1px solid ${e("button.info.hover.border.color")};
    color: ${e("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${e("button.info.active.background")};
    border: 1px solid ${e("button.info.active.border.color")};
    color: ${e("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${e("button.info.focus.ring.color")};
    box-shadow: ${e("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${e("button.warn.background")};
    border: 1px solid ${e("button.warn.border.color")};
    color: ${e("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${e("button.warn.hover.background")};
    border: 1px solid ${e("button.warn.hover.border.color")};
    color: ${e("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${e("button.warn.active.background")};
    border: 1px solid ${e("button.warn.active.border.color")};
    color: ${e("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${e("button.warn.focus.ring.color")};
    box-shadow: ${e("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${e("button.help.background")};
    border: 1px solid ${e("button.help.border.color")};
    color: ${e("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${e("button.help.hover.background")};
    border: 1px solid ${e("button.help.hover.border.color")};
    color: ${e("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${e("button.help.active.background")};
    border: 1px solid ${e("button.help.active.border.color")};
    color: ${e("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${e("button.help.focus.ring.color")};
    box-shadow: ${e("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${e("button.danger.background")};
    border: 1px solid ${e("button.danger.border.color")};
    color: ${e("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${e("button.danger.hover.background")};
    border: 1px solid ${e("button.danger.hover.border.color")};
    color: ${e("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${e("button.danger.active.background")};
    border: 1px solid ${e("button.danger.active.border.color")};
    color: ${e("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${e("button.danger.focus.ring.color")};
    box-shadow: ${e("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${e("button.contrast.background")};
    border: 1px solid ${e("button.contrast.border.color")};
    color: ${e("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${e("button.contrast.hover.background")};
    border: 1px solid ${e("button.contrast.hover.border.color")};
    color: ${e("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${e("button.contrast.active.background")};
    border: 1px solid ${e("button.contrast.active.border.color")};
    color: ${e("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${e("button.contrast.focus.ring.color")};
    box-shadow: ${e("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${e("button.outlined.primary.hover.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${e("button.outlined.primary.active.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${e("button.outlined.secondary.hover.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${e("button.outlined.success.hover.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${e("button.outlined.success.active.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${e("button.outlined.info.hover.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${e("button.outlined.info.active.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${e("button.outlined.warn.hover.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${e("button.outlined.warn.active.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${e("button.outlined.help.hover.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${e("button.outlined.help.active.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${e("button.outlined.danger.hover.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${e("button.outlined.danger.active.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${e("button.outlined.contrast.hover.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${e("button.outlined.contrast.active.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${e("button.outlined.plain.hover.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${e("button.outlined.plain.active.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${e("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${e("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${e("button.text.success.hover.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${e("button.text.info.hover.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${e("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${e("button.text.help.hover.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${e("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${e("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${e("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.active.color")};
}
`;
function Rt(e) {
  "@babel/helpers - typeof";
  return Rt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rt(e);
}
function Re(e, t, n) {
  return (t = Cs(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Cs(e) {
  var t = Ps(e, "string");
  return Rt(t) == "symbol" ? t : t + "";
}
function Ps(e, t) {
  if (Rt(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Rt(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Os = {
  root: function(t) {
    var n = t.instance, r = t.props;
    return ["p-button p-component", Re(Re(Re(Re(Re(Re(Re(Re(Re({
      "p-button-icon-only": n.hasIcon && !r.label && !r.badge,
      "p-button-vertical": (r.iconPos === "top" || r.iconPos === "bottom") && r.label,
      "p-button-loading": r.loading,
      "p-button-link": r.link || r.variant === "link"
    }, "p-button-".concat(r.severity), r.severity), "p-button-raised", r.raised), "p-button-rounded", r.rounded), "p-button-text", r.text || r.variant === "text"), "p-button-outlined", r.outlined || r.variant === "outlined"), "p-button-sm", r.size === "small"), "p-button-lg", r.size === "large"), "p-button-plain", r.plain), "p-button-fluid", n.hasFluid)];
  },
  loadingIcon: "p-button-loading-icon",
  icon: function(t) {
    var n = t.props;
    return ["p-button-icon", Re({}, "p-button-icon-".concat(n.iconPos), n.label)];
  },
  label: "p-button-label"
}, As = oe.extend({
  name: "button",
  style: Is,
  classes: Os
}), Es = {
  name: "BaseButton",
  extends: At,
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconPos: {
      type: String,
      default: "left"
    },
    iconClass: {
      type: [String, Object],
      default: null
    },
    badge: {
      type: String,
      default: null
    },
    badgeClass: {
      type: [String, Object],
      default: null
    },
    badgeSeverity: {
      type: String,
      default: "secondary"
    },
    loading: {
      type: Boolean,
      default: !1
    },
    loadingIcon: {
      type: String,
      default: void 0
    },
    as: {
      type: [String, Object],
      default: "BUTTON"
    },
    asChild: {
      type: Boolean,
      default: !1
    },
    link: {
      type: Boolean,
      default: !1
    },
    severity: {
      type: String,
      default: null
    },
    raised: {
      type: Boolean,
      default: !1
    },
    rounded: {
      type: Boolean,
      default: !1
    },
    text: {
      type: Boolean,
      default: !1
    },
    outlined: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: null
    },
    plain: {
      type: Boolean,
      default: !1
    },
    fluid: {
      type: Boolean,
      default: null
    }
  },
  style: As,
  provide: function() {
    return {
      $pcButton: this,
      $parentInstance: this
    };
  }
};
function It(e) {
  "@babel/helpers - typeof";
  return It = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, It(e);
}
function he(e, t, n) {
  return (t = Ds(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ds(e) {
  var t = xs(e, "string");
  return It(t) == "symbol" ? t : t + "";
}
function xs(e, t) {
  if (It(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (It(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Kr = {
  name: "Button",
  extends: Es,
  inheritAttrs: !1,
  inject: {
    $pcFluid: {
      default: null
    }
  },
  methods: {
    getPTOptions: function(t) {
      var n = t === "root" ? this.ptmi : this.ptm;
      return n(t, {
        context: {
          disabled: this.disabled
        }
      });
    }
  },
  computed: {
    disabled: function() {
      return this.$attrs.disabled || this.$attrs.disabled === "" || this.loading;
    },
    defaultAriaLabel: function() {
      return this.label ? this.label + (this.badge ? " " + this.badge : "") : this.$attrs.ariaLabel;
    },
    hasIcon: function() {
      return this.icon || this.$slots.icon;
    },
    attrs: function() {
      return ee(this.asAttrs, this.a11yAttrs, this.getPTOptions("root"));
    },
    asAttrs: function() {
      return this.as === "BUTTON" ? {
        type: "button",
        disabled: this.disabled
      } : void 0;
    },
    a11yAttrs: function() {
      return {
        "aria-label": this.defaultAriaLabel,
        "data-pc-name": "button",
        "data-p-disabled": this.disabled,
        "data-p-severity": this.severity
      };
    },
    hasFluid: function() {
      return Je(this.fluid) ? !!this.$pcFluid : this.fluid;
    },
    dataP: function() {
      return pt(he(he(he(he(he(he(he(he(he(he({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge), "loading", this.loading), "fluid", this.hasFluid), "rounded", this.rounded), "raised", this.raised), "outlined", this.outlined || this.variant === "outlined"), "text", this.text || this.variant === "text"), "link", this.link || this.variant === "link"), "vertical", (this.iconPos === "top" || this.iconPos === "bottom") && this.label));
    },
    dataIconP: function() {
      return pt(he(he({}, this.iconPos, this.iconPos), this.size, this.size));
    },
    dataLabelP: function() {
      return pt(he(he({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge));
    }
  },
  components: {
    SpinnerIcon: zr,
    Badge: Gr
  },
  directives: {
    ripple: Rs
  }
}, Ms = ["data-p"], Ls = ["data-p"];
function Ns(e, t, n, r, o, u) {
  var i = fn("SpinnerIcon"), d = fn("Badge"), l = ro("ripple");
  return e.asChild ? Te(e.$slots, "default", {
    key: 1,
    class: hn(e.cx("root")),
    a11yAttrs: u.a11yAttrs
  }) : oo((ue(), qt(io(e.as), ee({
    key: 0,
    class: e.cx("root"),
    "data-p": u.dataP
  }, u.attrs), {
    default: Ir(function() {
      return [Te(e.$slots, "default", {}, function() {
        return [e.loading ? Te(e.$slots, "loadingicon", ee({
          key: 0,
          class: [e.cx("loadingIcon"), e.cx("icon")]
        }, e.ptm("loadingIcon")), function() {
          return [e.loadingIcon ? (ue(), ge("span", ee({
            key: 0,
            class: [e.cx("loadingIcon"), e.cx("icon"), e.loadingIcon]
          }, e.ptm("loadingIcon")), null, 16)) : (ue(), qt(i, ee({
            key: 1,
            class: [e.cx("loadingIcon"), e.cx("icon")],
            spin: ""
          }, e.ptm("loadingIcon")), null, 16, ["class"]))];
        }) : Te(e.$slots, "icon", ee({
          key: 1,
          class: [e.cx("icon")]
        }, e.ptm("icon")), function() {
          return [e.icon ? (ue(), ge("span", ee({
            key: 0,
            class: [e.cx("icon"), e.icon, e.iconClass],
            "data-p": u.dataIconP
          }, e.ptm("icon")), null, 16, Ms)) : Ye("", !0)];
        }), bt("span", ee({
          class: e.cx("label")
        }, e.ptm("label"), {
          "data-p": u.dataLabelP
        }), nn(e.label || " "), 17, Ls), e.badge ? (ue(), qt(d, {
          key: 2,
          value: e.badge,
          class: hn(e.badgeClass),
          severity: e.badgeSeverity,
          unstyled: e.unstyled,
          pt: e.ptm("pcBadge")
        }, null, 8, ["value", "class", "severity", "unstyled", "pt"])) : Ye("", !0)];
      })];
    }),
    _: 3
  }, 16, ["class", "data-p"])), [[l]]);
}
Kr.render = Ns;
var Hs = ({ dt: e }) => `
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: ${e("progressspinner.colorOne")};
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: ${e("progressspinner.color.one")};
    }
    40% {
        stroke: ${e("progressspinner.color.two")};
    }
    66% {
        stroke: ${e("progressspinner.color.three")};
    }
    80%,
    90% {
        stroke: ${e("progressspinner.color.four")};
    }
}
`, Us = {
  root: "p-progressspinner",
  spin: "p-progressspinner-spin",
  circle: "p-progressspinner-circle"
}, Fs = oe.extend({
  name: "progressspinner",
  style: Hs,
  classes: Us
}), js = {
  name: "BaseProgressSpinner",
  extends: At,
  props: {
    strokeWidth: {
      type: String,
      default: "2"
    },
    fill: {
      type: String,
      default: "none"
    },
    animationDuration: {
      type: String,
      default: "2s"
    }
  },
  style: Fs,
  provide: function() {
    return {
      $pcProgressSpinner: this,
      $parentInstance: this
    };
  }
}, Yr = {
  name: "ProgressSpinner",
  extends: js,
  inheritAttrs: !1,
  computed: {
    svgStyle: function() {
      return {
        "animation-duration": this.animationDuration
      };
    }
  }
}, qs = ["fill", "stroke-width"];
function Vs(e, t, n, r, o, u) {
  return ue(), ge("div", ee({
    class: e.cx("root"),
    role: "progressbar"
  }, e.ptmi("root")), [(ue(), ge("svg", ee({
    class: e.cx("spin"),
    viewBox: "25 25 50 50",
    style: u.svgStyle
  }, e.ptm("spin")), [bt("circle", ee({
    class: e.cx("circle"),
    cx: "50",
    cy: "50",
    r: "20",
    fill: e.fill,
    "stroke-width": e.strokeWidth,
    strokeMiterlimit: "10"
  }, e.ptm("circle")), null, 16, qs)], 16))], 16);
}
Yr.render = Vs;
const Bs = {
  key: 0,
  class: "border flex flex-grow items-center justify-center w-full"
}, Ws = { key: 1 }, sa = /* @__PURE__ */ so({
  __name: "PageLoader",
  props: {
    isLoading: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, n) => t.isLoading ? (ue(), ge("div", Bs, [
      Jt(" isLoading2 " + nn(t.isLoading) + " ", 1),
      gn(vn(Yr), { "aria-label": "Loading" }),
      gn(vn(Kr), {
        type: "button",
        onClick: n[0] || (n[0] = () => {
          console.log("hello");
        })
      }, {
        default: Ir(() => n[1] || (n[1] = [
          Jt("Send deletion email")
        ])),
        _: 1
      })
    ])) : (ue(), ge("div", Ws, [
      Te(t.$slots, "default")
    ]));
  }
});
export {
  ei as A,
  oe as B,
  ea as C,
  na as D,
  Lr as E,
  ta as F,
  Hr as G,
  ye as H,
  Zi as I,
  Ys as J,
  Je as K,
  Js as L,
  Ht as P,
  Rs as R,
  Fo as S,
  Ks as _,
  Ro as a,
  vo as b,
  Or as c,
  Io as d,
  Lo as e,
  $o as f,
  Pt as g,
  fo as h,
  uo as i,
  Y as j,
  pt as k,
  Xi as l,
  Kr as m,
  oa as n,
  sa as o,
  Yr as p,
  Qs as q,
  Cr as r,
  At as s,
  fe as t,
  Gs as u,
  Z as v,
  ia as w,
  si as x,
  ra as y,
  Zs as z
};
