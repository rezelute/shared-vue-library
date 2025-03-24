import { ref as Et, readonly as ri, getCurrentInstance as oi, onMounted as ii, nextTick as ai, watch as si, useId as ui, mergeProps as ge, createElementBlock as Mt, openBlock as Xe, createElementVNode as xo, renderSlot as Ot, createTextVNode as li, toDisplayString as Do, resolveComponent as Wn, resolveDirective as ci, withDirectives as di, createBlock as on, resolveDynamicComponent as fi, withCtx as hi, createCommentVNode as Gn, normalizeClass as Xn, defineComponent as Lo, computed as gi, unref as hn } from "vue";
import { defineStore as vi } from "pinia";
var pi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function un(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var gn = {}, dt = {}, Kt = {}, ee = {}, vn = {}, pn = {}, ft = {}, Me = {}, zn;
function mi() {
  if (zn) return Me;
  zn = 1;
  var e = Me && Me.__awaiter || function(h, f, g, l) {
    function o(u) {
      return u instanceof g ? u : new g(function(c) {
        c(u);
      });
    }
    return new (g || (g = Promise))(function(u, c) {
      function a(p) {
        try {
          d(l.next(p));
        } catch (y) {
          c(y);
        }
      }
      function i(p) {
        try {
          d(l.throw(p));
        } catch (y) {
          c(y);
        }
      }
      function d(p) {
        p.done ? u(p.value) : o(p.value).then(a, i);
      }
      d((l = l.apply(h, f || [])).next());
    });
  }, t = Me && Me.__generator || function(h, f) {
    var g = {
      label: 0,
      sent: function() {
        if (u[0] & 1) throw u[1];
        return u[1];
      },
      trys: [],
      ops: []
    }, l, o, u, c;
    return c = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (c[Symbol.iterator] = function() {
      return this;
    }), c;
    function a(d) {
      return function(p) {
        return i([d, p]);
      };
    }
    function i(d) {
      if (l) throw new TypeError("Generator is already executing.");
      for (; g; )
        try {
          if (l = 1, o && (u = d[0] & 2 ? o.return : d[0] ? o.throw || ((u = o.return) && u.call(o), 0) : o.next) && !(u = u.call(o, d[1])).done)
            return u;
          switch (o = 0, u && (d = [d[0] & 2, u.value]), d[0]) {
            case 0:
            case 1:
              u = d;
              break;
            case 4:
              return g.label++, { value: d[1], done: !1 };
            case 5:
              g.label++, o = d[1], d = [0];
              continue;
            case 7:
              d = g.ops.pop(), g.trys.pop();
              continue;
            default:
              if (u = g.trys, !(u = u.length > 0 && u[u.length - 1]) && (d[0] === 6 || d[0] === 2)) {
                g = 0;
                continue;
              }
              if (d[0] === 3 && (!u || d[1] > u[0] && d[1] < u[3])) {
                g.label = d[1];
                break;
              }
              if (d[0] === 6 && g.label < u[1]) {
                g.label = u[1], u = d;
                break;
              }
              if (u && g.label < u[2]) {
                g.label = u[2], g.ops.push(d);
                break;
              }
              u[2] && g.ops.pop(), g.trys.pop();
              continue;
          }
          d = f.call(h, g);
        } catch (p) {
          d = [6, p], o = 0;
        } finally {
          l = u = 0;
        }
      if (d[0] & 5) throw d[1];
      return { value: d[0] ? d[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Me, "__esModule", { value: !0 }), Me.defaultWindowHandlerImplementation = void 0;
  function n() {
    if (typeof window > "u")
      throw Error(
        "If you are using this package with server-side rendering, please make sure that you are checking if the window object is defined."
      );
    return window;
  }
  var r = {
    key: function(h) {
      return e(this, void 0, void 0, function() {
        return t(this, function(f) {
          return [2, n().localStorage.key(h)];
        });
      });
    },
    clear: function() {
      return e(this, void 0, void 0, function() {
        return t(this, function(h) {
          return [2, n().localStorage.clear()];
        });
      });
    },
    getItem: function(h) {
      return e(this, void 0, void 0, function() {
        return t(this, function(f) {
          return [2, n().localStorage.getItem(h)];
        });
      });
    },
    removeItem: function(h) {
      return e(this, void 0, void 0, function() {
        return t(this, function(f) {
          return [2, n().localStorage.removeItem(h)];
        });
      });
    },
    setItem: function(h, f) {
      return e(this, void 0, void 0, function() {
        return t(this, function(g) {
          return [2, n().localStorage.setItem(h, f)];
        });
      });
    },
    keySync: function(h) {
      return n().localStorage.key(h);
    },
    clearSync: function() {
      return n().localStorage.clear();
    },
    getItemSync: function(h) {
      return n().localStorage.getItem(h);
    },
    removeItemSync: function(h) {
      return n().localStorage.removeItem(h);
    },
    setItemSync: function(h, f) {
      return n().localStorage.setItem(h, f);
    }
  }, s = {
    key: function(h) {
      return e(this, void 0, void 0, function() {
        return t(this, function(f) {
          return [2, n().sessionStorage.key(h)];
        });
      });
    },
    clear: function() {
      return e(this, void 0, void 0, function() {
        return t(this, function(h) {
          return [2, n().sessionStorage.clear()];
        });
      });
    },
    getItem: function(h) {
      return e(this, void 0, void 0, function() {
        return t(this, function(f) {
          return [2, n().sessionStorage.getItem(h)];
        });
      });
    },
    removeItem: function(h) {
      return e(this, void 0, void 0, function() {
        return t(this, function(f) {
          return [2, n().sessionStorage.removeItem(h)];
        });
      });
    },
    setItem: function(h, f) {
      return e(this, void 0, void 0, function() {
        return t(this, function(g) {
          return [2, n().sessionStorage.setItem(h, f)];
        });
      });
    },
    keySync: function(h) {
      return n().sessionStorage.key(h);
    },
    clearSync: function() {
      return n().sessionStorage.clear();
    },
    getItemSync: function(h) {
      return n().sessionStorage.getItem(h);
    },
    removeItemSync: function(h) {
      return n().sessionStorage.removeItem(h);
    },
    setItemSync: function(h, f) {
      return n().sessionStorage.setItem(h, f);
    }
  };
  return Me.defaultWindowHandlerImplementation = {
    history: {
      replaceState: function(h, f, g) {
        return n().history.replaceState(h, f, g);
      },
      getState: function() {
        return n().history.state;
      }
    },
    location: {
      getHref: function() {
        return n().location.href;
      },
      setHref: function(h) {
        n().location.href = h;
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
      assign: function(h) {
        n().location.assign(h);
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
    sessionStorage: s
  }, Me;
}
var Kn;
function Ye() {
  if (Kn) return ft;
  Kn = 1, Object.defineProperty(ft, "__esModule", { value: !0 }), ft.WindowHandlerReference = void 0;
  var e = mi(), t = (
    /** @class */
    function() {
      function n(r) {
        var s = function(h) {
          return h;
        };
        r !== void 0 && (s = r), this.windowHandler = s(e.defaultWindowHandlerImplementation);
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
  return ft.WindowHandlerReference = t, ft.default = t, ft;
}
var Qn;
function bi() {
  return Qn || (Qn = 1, function(e) {
    function t(n) {
      for (var r in n) e.hasOwnProperty(r) || (e[r] = n[r]);
    }
    e.__esModule = !0, t(Ye());
  }(pn)), pn;
}
var Jn;
function ln() {
  return Jn || (Jn = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.WindowHandlerReference = void 0;
    var t = bi();
    Object.defineProperty(e, "WindowHandlerReference", {
      enumerable: !0,
      get: function() {
        return t.WindowHandlerReference;
      }
    });
  }(vn)), vn;
}
var Ze = {}, Yn;
function yi() {
  return Yn || (Yn = 1, Object.defineProperty(Ze, "__esModule", { value: !0 }), Ze.SSR_ERROR = Ze.DEFAULT_API_BASE_PATH = void 0, Ze.DEFAULT_API_BASE_PATH = "/auth", Ze.SSR_ERROR = `
If you are trying to use this method doing server-side-rendering, please make sure you move this method inside a componentDidMount method or useEffect hook.`), Ze;
}
var Qt = {}, Zn;
function Si() {
  if (Zn) return Qt;
  Zn = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  var e = (
    /** @class */
    /* @__PURE__ */ function() {
      function n(r) {
        var s = this;
        this.getAsStringDangerous = function() {
          return s.value;
        }, this.value = t(r);
      }
      return n;
    }()
  );
  Qt.default = e;
  function t(n, r) {
    r === void 0 && (r = !1);
    function s(f) {
      return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
        f
      );
    }
    n = n.trim();
    try {
      if (!n.startsWith("http://") && !n.startsWith("https://"))
        throw new Error("Error converting to proper URL");
      var h = new URL(n);
      return r ? h.hostname.startsWith("localhost") || s(h.hostname) ? n = "http://" + h.host : n = "https://" + h.host : n = h.protocol + "//" + h.host, n;
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
  return Qt;
}
var Jt = {}, er;
function Mo() {
  if (er) return Jt;
  er = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  var e = (
    /** @class */
    /* @__PURE__ */ function() {
      function r(s) {
        var h = this;
        this.startsWith = function(f) {
          return h.value.startsWith(f.value);
        }, this.appendPath = function(f) {
          return new r(h.value + f.value);
        }, this.getAsStringDangerous = function() {
          return h.value;
        }, this.value = t(s);
      }
      return r;
    }()
  );
  Jt.default = e;
  function t(r) {
    r = r.trim();
    try {
      if (!r.startsWith("http://") && !r.startsWith("https://"))
        throw new Error("Error converting to proper URL");
      var s = new URL(r);
      return r = s.pathname, r.charAt(r.length - 1) === "/" ? r.substr(0, r.length - 1) : r;
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
      var s = new URL(r);
      return s.hostname.indexOf(".") !== -1;
    } catch {
    }
    try {
      var s = new URL("http://" + r);
      return s.hostname.indexOf(".") !== -1;
    } catch {
    }
    return !1;
  }
  return Jt;
}
var mn = {}, kt = {}, oe = {}, ht = {}, tr;
function wi() {
  if (tr) return ht;
  tr = 1, Object.defineProperty(ht, "__esModule", { value: !0 }), ht.isAnIpAddress = void 0;
  function e(r) {
    return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      r
    );
  }
  ht.isAnIpAddress = e;
  var t = (
    /** @class */
    /* @__PURE__ */ function() {
      function r(s) {
        var h = this;
        this.getAsStringDangerous = function() {
          return h.value;
        }, this.value = n(s);
      }
      return r;
    }()
  );
  ht.default = t;
  function n(r, s) {
    s === void 0 && (s = !1), r = r.trim();
    try {
      if (!r.startsWith("http://") && !r.startsWith("https://"))
        throw new Error("converting to proper URL");
      var h = new URL(r);
      return s ? h.hostname.startsWith("localhost") || e(h.hostname) ? r = "http://" + h.host : r = "https://" + h.host : r = h.protocol + "//" + h.host, r;
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
  return ht;
}
var Yt = {}, nr;
function ki() {
  if (nr) return Yt;
  nr = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  var e = (
    /** @class */
    /* @__PURE__ */ function() {
      function r(s) {
        var h = this;
        this.startsWith = function(f) {
          return h.value.startsWith(f.value);
        }, this.appendPath = function(f) {
          return new r(h.value + f.value);
        }, this.getAsStringDangerous = function() {
          return h.value;
        }, this.value = t(s);
      }
      return r;
    }()
  );
  Yt.default = e;
  function t(r) {
    r = r.trim();
    try {
      if (!r.startsWith("http://") && !r.startsWith("https://"))
        throw new Error("converting to proper URL");
      var s = new URL(r);
      return r = s.pathname, r.charAt(r.length - 1) === "/" ? r.substr(0, r.length - 1) : r;
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
      var s = new URL(r);
      return s.hostname.indexOf(".") !== -1;
    } catch {
    }
    try {
      var s = new URL("http://" + r);
      return s.hostname.indexOf(".") !== -1;
    } catch {
    }
    return !1;
  }
  return Yt;
}
var rr;
function xn() {
  if (rr) return oe;
  rr = 1;
  var e = oe && oe.__assign || function() {
    return e = Object.assign || function(a) {
      for (var i, d = 1, p = arguments.length; d < p; d++) {
        i = arguments[d];
        for (var y in i) Object.prototype.hasOwnProperty.call(i, y) && (a[y] = i[y]);
      }
      return a;
    }, e.apply(this, arguments);
  }, t = oe && oe.__awaiter || function(a, i, d, p) {
    function y(v) {
      return v instanceof d ? v : new d(function(b) {
        b(v);
      });
    }
    return new (d || (d = Promise))(function(v, b) {
      function S(k) {
        try {
          w(p.next(k));
        } catch (I) {
          b(I);
        }
      }
      function m(k) {
        try {
          w(p.throw(k));
        } catch (I) {
          b(I);
        }
      }
      function w(k) {
        k.done ? v(k.value) : y(k.value).then(S, m);
      }
      w((p = p.apply(a, i || [])).next());
    });
  }, n = oe && oe.__generator || function(a, i) {
    var d = {
      label: 0,
      sent: function() {
        if (v[0] & 1) throw v[1];
        return v[1];
      },
      trys: [],
      ops: []
    }, p, y, v, b;
    return b = { next: S(0), throw: S(1), return: S(2) }, typeof Symbol == "function" && (b[Symbol.iterator] = function() {
      return this;
    }), b;
    function S(w) {
      return function(k) {
        return m([w, k]);
      };
    }
    function m(w) {
      if (p) throw new TypeError("Generator is already executing.");
      for (; d; )
        try {
          if (p = 1, y && (v = w[0] & 2 ? y.return : w[0] ? y.throw || ((v = y.return) && v.call(y), 0) : y.next) && !(v = v.call(y, w[1])).done)
            return v;
          switch (y = 0, v && (w = [w[0] & 2, v.value]), w[0]) {
            case 0:
            case 1:
              v = w;
              break;
            case 4:
              return d.label++, { value: w[1], done: !1 };
            case 5:
              d.label++, y = w[1], w = [0];
              continue;
            case 7:
              w = d.ops.pop(), d.trys.pop();
              continue;
            default:
              if (v = d.trys, !(v = v.length > 0 && v[v.length - 1]) && (w[0] === 6 || w[0] === 2)) {
                d = 0;
                continue;
              }
              if (w[0] === 3 && (!v || w[1] > v[0] && w[1] < v[3])) {
                d.label = w[1];
                break;
              }
              if (w[0] === 6 && d.label < v[1]) {
                d.label = v[1], v = w;
                break;
              }
              if (v && d.label < v[2]) {
                d.label = v[2], d.ops.push(w);
                break;
              }
              v[2] && d.ops.pop(), d.trys.pop();
              continue;
          }
          w = i.call(a, d);
        } catch (k) {
          w = [6, k], y = 0;
        } finally {
          p = v = 0;
        }
      if (w[0] & 5) throw w[1];
      return { value: w[0] ? w[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(oe, "__esModule", { value: !0 }), oe.matchesDomainOrSubdomain = oe.getNormalisedUserContext = oe.validateAndNormaliseInputOrThrowError = oe.normaliseSessionScopeOrThrowError = oe.normaliseURLPathOrThrowError = oe.normaliseURLDomainOrThrowError = void 0;
  var r = wi(), s = ki(), h = Ye();
  function f(a) {
    var i = new r.default(a).getAsStringDangerous();
    return i;
  }
  oe.normaliseURLDomainOrThrowError = f;
  function g(a) {
    return new s.default(a).getAsStringDangerous();
  }
  oe.normaliseURLPathOrThrowError = g;
  function l(a) {
    function i(p) {
      p = p.trim().toLowerCase(), p.startsWith(".") && (p = p.substr(1)), !p.startsWith("http://") && !p.startsWith("https://") && (p = "http://" + p);
      try {
        var y = new URL(p);
        return p = y.hostname, p;
      } catch {
        throw new Error("Please provide a valid sessionScope");
      }
    }
    var d = i(a);
    return d === "localhost" || (0, r.isAnIpAddress)(d) ? d : a.startsWith(".") ? "." + d : d;
  }
  oe.normaliseSessionScopeOrThrowError = l;
  function o(a) {
    var i = this, d = f(a.apiDomain), p = g("/auth");
    a.apiBasePath !== void 0 && (p = g(a.apiBasePath));
    var y = h.default.getReferenceOrThrow().windowHandler.location.getHostName(), v = l(
      a !== void 0 && a.sessionTokenFrontendDomain !== void 0 ? a.sessionTokenFrontendDomain : y
    ), b = 401;
    a.sessionExpiredStatusCode !== void 0 && (b = a.sessionExpiredStatusCode);
    var S = 403;
    if (a.invalidClaimStatusCode !== void 0 && (S = a.invalidClaimStatusCode), b === S)
      throw new Error("sessionExpiredStatusCode and invalidClaimStatusCode cannot be the same.");
    var m = !0;
    a.autoAddCredentials !== void 0 && (m = a.autoAddCredentials);
    var w = !1;
    a.isInIframe !== void 0 && (w = a.isInIframe);
    var k = void 0;
    a.sessionTokenBackendDomain !== void 0 && (k = l(a.sessionTokenBackendDomain));
    var I = 10;
    if (a.maxRetryAttemptsForSessionRefresh !== void 0) {
      if (a.maxRetryAttemptsForSessionRefresh < 0)
        throw new Error("maxRetryAttemptsForSessionRefresh must be greater than or equal to 0.");
      I = a.maxRetryAttemptsForSessionRefresh;
    }
    var R = function(E) {
      return t(i, void 0, void 0, function() {
        return n(this, function(A) {
          return [2, { url: E.url, requestInit: E.requestInit }];
        });
      });
    };
    a.preAPIHook !== void 0 && (R = a.preAPIHook);
    var T = function() {
      return t(i, void 0, void 0, function() {
        return n(this, function(E) {
          return [
            2
            /*return*/
          ];
        });
      });
    };
    a.postAPIHook !== void 0 && (T = a.postAPIHook);
    var O = function() {
    };
    a.onHandleEvent !== void 0 && (O = a.onHandleEvent);
    var C = e(
      {
        functions: function(E) {
          return E;
        }
      },
      a.override
    );
    return {
      apiDomain: d,
      apiBasePath: p,
      sessionTokenFrontendDomain: v,
      sessionExpiredStatusCode: b,
      invalidClaimStatusCode: S,
      autoAddCredentials: m,
      isInIframe: w,
      tokenTransferMethod: a.tokenTransferMethod !== void 0 ? a.tokenTransferMethod : "cookie",
      sessionTokenBackendDomain: k,
      maxRetryAttemptsForSessionRefresh: I,
      preAPIHook: R,
      postAPIHook: T,
      onHandleEvent: O,
      override: C
    };
  }
  oe.validateAndNormaliseInputOrThrowError = o;
  function u(a) {
    return a === void 0 ? {} : a;
  }
  oe.getNormalisedUserContext = u;
  function c(a, i) {
    for (var d = a.split("."), p = 0; p < d.length; p++) {
      var y = d.slice(p).join(".");
      if (y === i || ".".concat(y) === i)
        return !0;
    }
    return !1;
  }
  return oe.matchesDomainOrSubdomain = c, oe;
}
var Ue = {}, et = {}, or;
function Dn() {
  return or || (or = 1, function(e) {
    var t = et && et.__awaiter || function(s, h, f, g) {
      function l(o) {
        return o instanceof f ? o : new f(function(u) {
          u(o);
        });
      }
      return new (f || (f = Promise))(function(o, u) {
        function c(d) {
          try {
            i(g.next(d));
          } catch (p) {
            u(p);
          }
        }
        function a(d) {
          try {
            i(g.throw(d));
          } catch (p) {
            u(p);
          }
        }
        function i(d) {
          d.done ? o(d.value) : l(d.value).then(c, a);
        }
        i((g = g.apply(s, h || [])).next());
      });
    }, n = et && et.__generator || function(s, h) {
      var f = {
        label: 0,
        sent: function() {
          if (o[0] & 1) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      }, g, l, o, u;
      return u = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
        return this;
      }), u;
      function c(i) {
        return function(d) {
          return a([i, d]);
        };
      }
      function a(i) {
        if (g) throw new TypeError("Generator is already executing.");
        for (; f; )
          try {
            if (g = 1, l && (o = i[0] & 2 ? l.return : i[0] ? l.throw || ((o = l.return) && o.call(l), 0) : l.next) && !(o = o.call(l, i[1])).done)
              return o;
            switch (l = 0, o && (i = [i[0] & 2, o.value]), i[0]) {
              case 0:
              case 1:
                o = i;
                break;
              case 4:
                return f.label++, { value: i[1], done: !1 };
              case 5:
                f.label++, l = i[1], i = [0];
                continue;
              case 7:
                i = f.ops.pop(), f.trys.pop();
                continue;
              default:
                if (o = f.trys, !(o = o.length > 0 && o[o.length - 1]) && (i[0] === 6 || i[0] === 2)) {
                  f = 0;
                  continue;
                }
                if (i[0] === 3 && (!o || i[1] > o[0] && i[1] < o[3])) {
                  f.label = i[1];
                  break;
                }
                if (i[0] === 6 && f.label < o[1]) {
                  f.label = o[1], o = i;
                  break;
                }
                if (o && f.label < o[2]) {
                  f.label = o[2], f.ops.push(i);
                  break;
                }
                o[2] && f.ops.pop(), f.trys.pop();
                continue;
            }
            i = h.call(s, f);
          } catch (d) {
            i = [6, d], l = 0;
          } finally {
            g = o = 0;
          }
        if (i[0] & 5) throw i[1];
        return { value: i[0] ? i[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ProcessState = e.PROCESS_STATE = void 0, function(s) {
      s[s.CALLING_INTERCEPTION_REQUEST = 0] = "CALLING_INTERCEPTION_REQUEST", s[s.CALLING_INTERCEPTION_RESPONSE = 1] = "CALLING_INTERCEPTION_RESPONSE";
    }(e.PROCESS_STATE || (e.PROCESS_STATE = {}));
    var r = (
      /** @class */
      function() {
        function s() {
          var h = this;
          this.history = [], this.addState = function(f) {
            try {
              process !== void 0 && process.env !== void 0 && process.env.TEST_MODE === "testing" && h.history.push(f);
            } catch {
            }
          }, this.getEventByLastEventByName = function(f) {
            for (var g = h.history.length - 1; g >= 0; g--)
              if (h.history[g] == f)
                return h.history[g];
          }, this.reset = function() {
            h.history = [];
          }, this.waitForEvent = function(f, g) {
            return g === void 0 && (g = 7e3), t(h, void 0, void 0, function() {
              var l, o = this;
              return n(this, function(u) {
                return l = Date.now(), [
                  2,
                  new Promise(function(c) {
                    var a = o;
                    function i() {
                      var d = a.getEventByLastEventByName(f);
                      d === void 0 ? Date.now() - l > g ? c(void 0) : setTimeout(i, 1e3) : c(d);
                    }
                    i();
                  })
                ];
              });
            });
          };
        }
        return s.getInstance = function() {
          return s.instance == null && (s.instance = new s()), s.instance;
        }, s;
      }()
    );
    e.ProcessState = r;
  }(et)), et;
}
var tt = {}, ir;
function Ln() {
  return ir || (ir = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.supported_fdi = tt.package_version = void 0, tt.package_version = "20.1.5", tt.supported_fdi = ["1.16", "1.17", "1.18", "1.19", "2.0", "3.0", "3.1", "4.0"]), tt;
}
var gt = {}, He = {}, ar;
function _i() {
  if (ar) return He;
  ar = 1;
  var e = He && He.__awaiter || function(r, s, h, f) {
    function g(l) {
      return l instanceof h ? l : new h(function(o) {
        o(l);
      });
    }
    return new (h || (h = Promise))(function(l, o) {
      function u(i) {
        try {
          a(f.next(i));
        } catch (d) {
          o(d);
        }
      }
      function c(i) {
        try {
          a(f.throw(i));
        } catch (d) {
          o(d);
        }
      }
      function a(i) {
        i.done ? l(i.value) : g(i.value).then(u, c);
      }
      a((f = f.apply(r, s || [])).next());
    });
  }, t = He && He.__generator || function(r, s) {
    var h = {
      label: 0,
      sent: function() {
        if (l[0] & 1) throw l[1];
        return l[1];
      },
      trys: [],
      ops: []
    }, f, g, l, o;
    return o = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
      return this;
    }), o;
    function u(a) {
      return function(i) {
        return c([a, i]);
      };
    }
    function c(a) {
      if (f) throw new TypeError("Generator is already executing.");
      for (; h; )
        try {
          if (f = 1, g && (l = a[0] & 2 ? g.return : a[0] ? g.throw || ((l = g.return) && l.call(g), 0) : g.next) && !(l = l.call(g, a[1])).done)
            return l;
          switch (g = 0, l && (a = [a[0] & 2, l.value]), a[0]) {
            case 0:
            case 1:
              l = a;
              break;
            case 4:
              return h.label++, { value: a[1], done: !1 };
            case 5:
              h.label++, g = a[1], a = [0];
              continue;
            case 7:
              a = h.ops.pop(), h.trys.pop();
              continue;
            default:
              if (l = h.trys, !(l = l.length > 0 && l[l.length - 1]) && (a[0] === 6 || a[0] === 2)) {
                h = 0;
                continue;
              }
              if (a[0] === 3 && (!l || a[1] > l[0] && a[1] < l[3])) {
                h.label = a[1];
                break;
              }
              if (a[0] === 6 && h.label < l[1]) {
                h.label = l[1], l = a;
                break;
              }
              if (l && h.label < l[2]) {
                h.label = l[2], h.ops.push(a);
                break;
              }
              l[2] && h.ops.pop(), h.trys.pop();
              continue;
          }
          a = s.call(r, h);
        } catch (i) {
          a = [6, i], g = 0;
        } finally {
          f = l = 0;
        }
      if (a[0] & 5) throw a[1];
      return { value: a[0] ? a[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(He, "__esModule", { value: !0 }), He.defaultCookieHandlerImplementation = void 0;
  var n = Ye();
  return He.defaultCookieHandlerImplementation = {
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
        return t(this, function(s) {
          return n.default.getReferenceOrThrow().windowHandler.getWindowUnsafe().document.cookie = r, [
            2
            /*return*/
          ];
        });
      });
    }
  }, He;
}
var sr;
function Mn() {
  if (sr) return gt;
  sr = 1, Object.defineProperty(gt, "__esModule", { value: !0 }), gt.CookieHandlerReference = void 0;
  var e = _i(), t = (
    /** @class */
    function() {
      function n(r) {
        var s = function(h) {
          return h;
        };
        r !== void 0 && (s = r), this.cookieHandler = s(e.defaultCookieHandlerImplementation);
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
  return gt.CookieHandlerReference = t, gt.default = t, gt;
}
var vt = {}, Ne = {}, Zt = {}, ur;
function Ii() {
  if (ur) return Zt;
  ur = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  var e = (
    /** @class */
    function() {
      function n() {
        var r = this;
        this.locked = /* @__PURE__ */ new Map(), this.addToLocked = function(s, h) {
          var f = r.locked.get(s);
          f === void 0 ? h === void 0 ? r.locked.set(s, []) : r.locked.set(s, [h]) : h !== void 0 && (f.unshift(h), r.locked.set(s, f));
        }, this.isLocked = function(s) {
          return r.locked.has(s);
        }, this.lock = function(s) {
          return new Promise(function(h, f) {
            r.isLocked(s) ? r.addToLocked(s, h) : (r.addToLocked(s), h());
          });
        }, this.unlock = function(s) {
          var h = r.locked.get(s);
          if (h === void 0 || h.length === 0) {
            r.locked.delete(s);
            return;
          }
          var f = h.pop();
          r.locked.set(s, h), f !== void 0 && setTimeout(f, 0);
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
  return Zt.default = t, Zt;
}
var lr;
function Ti() {
  if (lr) return Ne;
  lr = 1;
  var e = Ne && Ne.__awaiter || function(u, c, a, i) {
    return new (a || (a = Promise))(function(d, p) {
      function y(S) {
        try {
          b(i.next(S));
        } catch (m) {
          p(m);
        }
      }
      function v(S) {
        try {
          b(i.throw(S));
        } catch (m) {
          p(m);
        }
      }
      function b(S) {
        S.done ? d(S.value) : new a(function(m) {
          m(S.value);
        }).then(y, v);
      }
      b((i = i.apply(u, c || [])).next());
    });
  }, t = Ne && Ne.__generator || function(u, c) {
    var a = { label: 0, sent: function() {
      if (p[0] & 1) throw p[1];
      return p[1];
    }, trys: [], ops: [] }, i, d, p, y;
    return y = { next: v(0), throw: v(1), return: v(2) }, typeof Symbol == "function" && (y[Symbol.iterator] = function() {
      return this;
    }), y;
    function v(S) {
      return function(m) {
        return b([S, m]);
      };
    }
    function b(S) {
      if (i) throw new TypeError("Generator is already executing.");
      for (; a; ) try {
        if (i = 1, d && (p = S[0] & 2 ? d.return : S[0] ? d.throw || ((p = d.return) && p.call(d), 0) : d.next) && !(p = p.call(d, S[1])).done) return p;
        switch (d = 0, p && (S = [S[0] & 2, p.value]), S[0]) {
          case 0:
          case 1:
            p = S;
            break;
          case 4:
            return a.label++, { value: S[1], done: !1 };
          case 5:
            a.label++, d = S[1], S = [0];
            continue;
          case 7:
            S = a.ops.pop(), a.trys.pop();
            continue;
          default:
            if (p = a.trys, !(p = p.length > 0 && p[p.length - 1]) && (S[0] === 6 || S[0] === 2)) {
              a = 0;
              continue;
            }
            if (S[0] === 3 && (!p || S[1] > p[0] && S[1] < p[3])) {
              a.label = S[1];
              break;
            }
            if (S[0] === 6 && a.label < p[1]) {
              a.label = p[1], p = S;
              break;
            }
            if (p && a.label < p[2]) {
              a.label = p[2], a.ops.push(S);
              break;
            }
            p[2] && a.ops.pop(), a.trys.pop();
            continue;
        }
        S = c.call(u, a);
      } catch (m) {
        S = [6, m], d = 0;
      } finally {
        i = p = 0;
      }
      if (S[0] & 5) throw S[1];
      return { value: S[0] ? S[1] : void 0, done: !0 };
    }
  }, n = Ne;
  Object.defineProperty(Ne, "__esModule", { value: !0 });
  var r = Ii(), s = "browser-tabs-lock-key", h = {
    key: function(u) {
      return e(n, void 0, void 0, function() {
        return t(this, function(c) {
          throw new Error("Unsupported");
        });
      });
    },
    getItem: function(u) {
      return e(n, void 0, void 0, function() {
        return t(this, function(c) {
          throw new Error("Unsupported");
        });
      });
    },
    clear: function() {
      return e(n, void 0, void 0, function() {
        return t(this, function(u) {
          return [2, window.localStorage.clear()];
        });
      });
    },
    removeItem: function(u) {
      return e(n, void 0, void 0, function() {
        return t(this, function(c) {
          throw new Error("Unsupported");
        });
      });
    },
    setItem: function(u, c) {
      return e(n, void 0, void 0, function() {
        return t(this, function(a) {
          throw new Error("Unsupported");
        });
      });
    },
    keySync: function(u) {
      return window.localStorage.key(u);
    },
    getItemSync: function(u) {
      return window.localStorage.getItem(u);
    },
    clearSync: function() {
      return window.localStorage.clear();
    },
    removeItemSync: function(u) {
      return window.localStorage.removeItem(u);
    },
    setItemSync: function(u, c) {
      return window.localStorage.setItem(u, c);
    }
  };
  function f(u) {
    return new Promise(function(c) {
      return setTimeout(c, u);
    });
  }
  function g(u) {
    for (var c = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", a = "", i = 0; i < u; i++) {
      var d = Math.floor(Math.random() * c.length);
      a += c[d];
    }
    return a;
  }
  function l() {
    return Date.now().toString() + g(15);
  }
  var o = (
    /** @class */
    function() {
      function u(c) {
        this.acquiredIatSet = /* @__PURE__ */ new Set(), this.storageHandler = void 0, this.id = l(), this.acquireLock = this.acquireLock.bind(this), this.releaseLock = this.releaseLock.bind(this), this.releaseLock__private__ = this.releaseLock__private__.bind(this), this.waitForSomethingToChange = this.waitForSomethingToChange.bind(this), this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(this), this.storageHandler = c, u.waiters === void 0 && (u.waiters = []);
      }
      return u.prototype.acquireLock = function(c, a) {
        return a === void 0 && (a = 5e3), e(this, void 0, void 0, function() {
          var i, d, p, y, v, b, S, m;
          return t(this, function(w) {
            switch (w.label) {
              case 0:
                i = Date.now() + g(4), d = Date.now() + a, p = s + "-" + c, y = this.storageHandler === void 0 ? h : this.storageHandler, w.label = 1;
              case 1:
                return Date.now() < d ? [4, f(30)] : [3, 8];
              case 2:
                return w.sent(), v = y.getItemSync(p), v !== null ? [3, 5] : (b = this.id + "-" + c + "-" + i, [4, f(Math.floor(Math.random() * 25))]);
              case 3:
                return w.sent(), y.setItemSync(p, JSON.stringify({
                  id: this.id,
                  iat: i,
                  timeoutKey: b,
                  timeAcquired: Date.now(),
                  timeRefreshed: Date.now()
                })), [4, f(30)];
              case 4:
                return w.sent(), S = y.getItemSync(p), S !== null && (m = JSON.parse(S), m.id === this.id && m.iat === i) ? (this.acquiredIatSet.add(i), this.refreshLockWhileAcquired(p, i), [2, !0]) : [3, 7];
              case 5:
                return u.lockCorrector(this.storageHandler === void 0 ? h : this.storageHandler), [4, this.waitForSomethingToChange(d)];
              case 6:
                w.sent(), w.label = 7;
              case 7:
                return i = Date.now() + g(4), [3, 1];
              case 8:
                return [2, !1];
            }
          });
        });
      }, u.prototype.refreshLockWhileAcquired = function(c, a) {
        return e(this, void 0, void 0, function() {
          var i = this;
          return t(this, function(d) {
            return setTimeout(function() {
              return e(i, void 0, void 0, function() {
                var p, y, v;
                return t(this, function(b) {
                  switch (b.label) {
                    case 0:
                      return [4, r.default().lock(a)];
                    case 1:
                      if (b.sent(), !this.acquiredIatSet.has(a))
                        return r.default().unlock(a), [
                          2
                          /*return*/
                        ];
                      if (p = this.storageHandler === void 0 ? h : this.storageHandler, y = p.getItemSync(c), y !== null)
                        v = JSON.parse(y), v.timeRefreshed = Date.now(), p.setItemSync(c, JSON.stringify(v)), r.default().unlock(a);
                      else
                        return r.default().unlock(a), [
                          2
                          /*return*/
                        ];
                      return this.refreshLockWhileAcquired(c, a), [
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
      }, u.prototype.waitForSomethingToChange = function(c) {
        return e(this, void 0, void 0, function() {
          return t(this, function(a) {
            switch (a.label) {
              case 0:
                return [4, new Promise(function(i) {
                  var d = !1, p = Date.now(), y = 50, v = !1;
                  function b() {
                    if (v || (window.removeEventListener("storage", b), u.removeFromWaiting(b), clearTimeout(S), v = !0), !d) {
                      d = !0;
                      var m = y - (Date.now() - p);
                      m > 0 ? setTimeout(i, m) : i(null);
                    }
                  }
                  window.addEventListener("storage", b), u.addToWaiting(b);
                  var S = setTimeout(b, Math.max(0, c - Date.now()));
                })];
              case 1:
                return a.sent(), [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, u.addToWaiting = function(c) {
        this.removeFromWaiting(c), u.waiters !== void 0 && u.waiters.push(c);
      }, u.removeFromWaiting = function(c) {
        u.waiters !== void 0 && (u.waiters = u.waiters.filter(function(a) {
          return a !== c;
        }));
      }, u.notifyWaiters = function() {
        if (u.waiters !== void 0) {
          var c = u.waiters.slice();
          c.forEach(function(a) {
            return a();
          });
        }
      }, u.prototype.releaseLock = function(c) {
        return e(this, void 0, void 0, function() {
          return t(this, function(a) {
            switch (a.label) {
              case 0:
                return [4, this.releaseLock__private__(c)];
              case 1:
                return [2, a.sent()];
            }
          });
        });
      }, u.prototype.releaseLock__private__ = function(c) {
        return e(this, void 0, void 0, function() {
          var a, i, d, p;
          return t(this, function(y) {
            switch (y.label) {
              case 0:
                return a = this.storageHandler === void 0 ? h : this.storageHandler, i = s + "-" + c, d = a.getItemSync(i), d === null ? [
                  2
                  /*return*/
                ] : (p = JSON.parse(d), p.id !== this.id ? [3, 2] : [4, r.default().lock(p.iat)]);
              case 1:
                y.sent(), this.acquiredIatSet.delete(p.iat), a.removeItemSync(i), r.default().unlock(p.iat), u.notifyWaiters(), y.label = 2;
              case 2:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, u.lockCorrector = function(c) {
        for (var a = Date.now() - 5e3, i = c, d = [], p = 0; ; ) {
          var y = i.keySync(p);
          if (y === null)
            break;
          d.push(y), p++;
        }
        for (var v = !1, b = 0; b < d.length; b++) {
          var S = d[b];
          if (S.includes(s)) {
            var m = i.getItemSync(S);
            if (m !== null) {
              var w = JSON.parse(m);
              (w.timeRefreshed === void 0 && w.timeAcquired < a || w.timeRefreshed !== void 0 && w.timeRefreshed < a) && (i.removeItemSync(S), v = !0);
            }
          }
        }
        v && u.notifyWaiters();
      }, u.waiters = void 0, u;
    }()
  );
  return Ne.default = o, Ne;
}
var cr;
function Un() {
  if (cr) return vt;
  cr = 1, Object.defineProperty(vt, "__esModule", { value: !0 }), vt.LockFactoryReference = void 0;
  var e = Ti(), t = function(r) {
    return function() {
      return Promise.resolve(new e.default(r));
    };
  }, n = (
    /** @class */
    function() {
      function r(s) {
        this.lockFactory = s;
      }
      return r.init = function(s, h) {
        this.instance === void 0 && (this.instance = new r(
          s ?? t(h)
        ));
      }, r.getReferenceOrThrow = function() {
        if (r.instance === void 0)
          throw new Error("SuperTokensLockReference must be initialized before calling this method.");
        return r.instance;
      }, r;
    }()
  );
  return vt.LockFactoryReference = n, vt.default = n, vt;
}
var je = {}, dr;
function Gt() {
  if (dr) return je;
  dr = 1, Object.defineProperty(je, "__esModule", { value: !0 }), je.logDebugMessage = je.disableLogging = je.enableLogging = void 0;
  var e = Ln(), t = "com.supertokens", n = !1;
  function r() {
    n = !0;
  }
  je.enableLogging = r;
  function s() {
    n = !1;
  }
  je.disableLogging = s;
  function h(f) {
    n && console.log(
      "".concat(t, ' {t: "').concat((/* @__PURE__ */ new Date()).toISOString(), '", message: "').concat(f, '", supertokens-website-ver: "').concat(e.package_version, '"}')
    );
  }
  return je.logDebugMessage = h, je;
}
var pt = {}, _t = {}, fr;
function Ri() {
  if (fr) return _t;
  fr = 1, Object.defineProperty(_t, "__esModule", { value: !0 }), _t.DateProvider = void 0;
  var e = Ye(), t = (
    /** @class */
    function() {
      function n() {
        this.clockSkewInMillis = 0, this.thresholdInSeconds = 7;
      }
      return n.init = function() {
        if (n.instance === void 0) {
          n.instance = new n();
          var r = e.default.getReferenceOrThrow().windowHandler.localStorage, s = r.getItemSync(n.CLOCK_SKEW_KEY), h = s !== null ? parseInt(s, 10) : 0;
          n.instance.setClientClockSkewInMillis(h);
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
        var s = e.default.getReferenceOrThrow().windowHandler.localStorage;
        s.setItemSync(n.CLOCK_SKEW_KEY, String(r));
      }, n.prototype.getClientClockSkewInMillis = function() {
        return this.clockSkewInMillis;
      }, n.prototype.now = function() {
        return Date.now() + this.getClientClockSkewInMillis();
      }, n.CLOCK_SKEW_KEY = "__st_clockSkewInMillis", n;
    }()
  );
  return _t.DateProvider = t, _t;
}
var hr;
function St() {
  if (hr) return pt;
  hr = 1, Object.defineProperty(pt, "__esModule", { value: !0 }), pt.DateProviderReference = void 0;
  var e = Ri(), t = (
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
  return pt.DateProviderReference = t, pt.default = t, pt;
}
var gr;
function Xt() {
  return gr || (gr = 1, function(e) {
    var t = Ue && Ue.__assign || function() {
      return t = Object.assign || function(_) {
        for (var $, P = 1, x = arguments.length; P < x; P++) {
          $ = arguments[P];
          for (var D in $) Object.prototype.hasOwnProperty.call($, D) && (_[D] = $[D]);
        }
        return _;
      }, t.apply(this, arguments);
    }, n = Ue && Ue.__awaiter || function(_, $, P, x) {
      function D(H) {
        return H instanceof P ? H : new P(function(q) {
          q(H);
        });
      }
      return new (P || (P = Promise))(function(H, q) {
        function M(Z) {
          try {
            F(x.next(Z));
          } catch (re) {
            q(re);
          }
        }
        function W(Z) {
          try {
            F(x.throw(Z));
          } catch (re) {
            q(re);
          }
        }
        function F(Z) {
          Z.done ? H(Z.value) : D(Z.value).then(M, W);
        }
        F((x = x.apply(_, $ || [])).next());
      });
    }, r = Ue && Ue.__generator || function(_, $) {
      var P = {
        label: 0,
        sent: function() {
          if (H[0] & 1) throw H[1];
          return H[1];
        },
        trys: [],
        ops: []
      }, x, D, H, q;
      return q = { next: M(0), throw: M(1), return: M(2) }, typeof Symbol == "function" && (q[Symbol.iterator] = function() {
        return this;
      }), q;
      function M(F) {
        return function(Z) {
          return W([F, Z]);
        };
      }
      function W(F) {
        if (x) throw new TypeError("Generator is already executing.");
        for (; P; )
          try {
            if (x = 1, D && (H = F[0] & 2 ? D.return : F[0] ? D.throw || ((H = D.return) && H.call(D), 0) : D.next) && !(H = H.call(D, F[1])).done)
              return H;
            switch (D = 0, H && (F = [F[0] & 2, H.value]), F[0]) {
              case 0:
              case 1:
                H = F;
                break;
              case 4:
                return P.label++, { value: F[1], done: !1 };
              case 5:
                P.label++, D = F[1], F = [0];
                continue;
              case 7:
                F = P.ops.pop(), P.trys.pop();
                continue;
              default:
                if (H = P.trys, !(H = H.length > 0 && H[H.length - 1]) && (F[0] === 6 || F[0] === 2)) {
                  P = 0;
                  continue;
                }
                if (F[0] === 3 && (!H || F[1] > H[0] && F[1] < H[3])) {
                  P.label = F[1];
                  break;
                }
                if (F[0] === 6 && P.label < H[1]) {
                  P.label = H[1], H = F;
                  break;
                }
                if (H && P.label < H[2]) {
                  P.label = H[2], P.ops.push(F);
                  break;
                }
                H[2] && P.ops.pop(), P.trys.pop();
                continue;
            }
            F = $.call(_, P);
          } catch (Z) {
            F = [6, Z], D = 0;
          } finally {
            x = H = 0;
          }
        if (F[0] & 5) throw F[1];
        return { value: F[0] ? F[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.updateClockSkewUsingFrontToken = e.fireSessionUpdateEventsIfNecessary = e.setFrontToken = e.getFrontToken = e.setAntiCSRF = e.saveLastAccessTokenUpdate = e.getTokenForHeaderAuth = e.setToken = e.getStorageNameForToken = e.getLocalSessionState = e.onInvalidClaimResponse = e.onTokenUpdate = e.onUnauthorisedResponse = e.FrontToken = e.AntiCsrfToken = void 0;
    var s = Dn(), h = Ln(), f = Mn(), g = Ye(), l = Un(), o = Gt(), u = St(), c = (
      /** @class */
      function() {
        function _() {
        }
        return _.getToken = function($) {
          return n(this, void 0, void 0, function() {
            var P;
            return r(this, function(x) {
              switch (x.label) {
                case 0:
                  return (0, o.logDebugMessage)("AntiCsrfToken.getToken: called"), $ === void 0 ? (_.tokenInfo = void 0, (0, o.logDebugMessage)("AntiCsrfToken.getToken: returning undefined"), [2, void 0]) : _.tokenInfo !== void 0 ? [3, 2] : [4, ae()];
                case 1:
                  return P = x.sent(), P === null ? ((0, o.logDebugMessage)("AntiCsrfToken.getToken: returning undefined"), [2, void 0]) : (_.tokenInfo = {
                    antiCsrf: P,
                    associatedAccessTokenUpdate: $
                  }, [3, 4]);
                case 2:
                  return _.tokenInfo.associatedAccessTokenUpdate === $ ? [3, 4] : (_.tokenInfo = void 0, [4, _.getToken($)]);
                case 3:
                  return [2, x.sent()];
                case 4:
                  return (0, o.logDebugMessage)("AntiCsrfToken.getToken: returning: " + _.tokenInfo.antiCsrf), [2, _.tokenInfo.antiCsrf];
              }
            });
          });
        }, _.removeToken = function() {
          return n(this, void 0, void 0, function() {
            return r(this, function($) {
              switch ($.label) {
                case 0:
                  return (0, o.logDebugMessage)("AntiCsrfToken.removeToken: called"), _.tokenInfo = void 0, [4, se(void 0)];
                case 1:
                  return $.sent(), [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, _.setItem = function($, P) {
          return n(this, void 0, void 0, function() {
            return r(this, function(x) {
              switch (x.label) {
                case 0:
                  return $ === void 0 ? (_.tokenInfo = void 0, [
                    2
                    /*return*/
                  ]) : ((0, o.logDebugMessage)("AntiCsrfToken.setItem: called"), [4, se(P)]);
                case 1:
                  return x.sent(), _.tokenInfo = {
                    antiCsrf: P,
                    associatedAccessTokenUpdate: $
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
    e.AntiCsrfToken = c;
    var a = (
      /** @class */
      function() {
        function _() {
        }
        return _.getTokenInfo = function() {
          return n(this, void 0, void 0, function() {
            var $, P;
            return r(this, function(x) {
              switch (x.label) {
                case 0:
                  return (0, o.logDebugMessage)("FrontToken.getTokenInfo: called"), [4, j()];
                case 1:
                  return $ = x.sent(), $ !== null ? [3, 5] : [4, k(!1)];
                case 2:
                  return x.sent().status !== "EXISTS" ? [3, 4] : [
                    4,
                    new Promise(function(D) {
                      _.waiters.push(D);
                    })
                  ];
                case 3:
                  return x.sent(), [2, _.getTokenInfo()];
                case 4:
                  return [2, void 0];
                case 5:
                  return P = L($), (0, o.logDebugMessage)("FrontToken.getTokenInfo: returning ate: " + P.ate), (0, o.logDebugMessage)("FrontToken.getTokenInfo: returning uid: " + P.uid), (0, o.logDebugMessage)("FrontToken.getTokenInfo: returning up: " + P.up), [2, P];
              }
            });
          });
        }, _.removeToken = function() {
          return n(this, void 0, void 0, function() {
            return r(this, function($) {
              switch ($.label) {
                case 0:
                  return (0, o.logDebugMessage)("FrontToken.removeToken: called"), [4, N(void 0)];
                case 1:
                  return $.sent(), [4, R("access", "")];
                case 2:
                  return $.sent(), [4, R("refresh", "")];
                case 3:
                  return $.sent(), [4, c.removeToken()];
                case 4:
                  return $.sent(), _.waiters.forEach(function(P) {
                    return P(void 0);
                  }), _.waiters = [], [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, _.setItem = function($) {
          return n(this, void 0, void 0, function() {
            return r(this, function(P) {
              switch (P.label) {
                case 0:
                  return [4, Y()];
                case 1:
                  return P.sent(), $ === "remove" ? [2, _.removeToken()] : ((0, o.logDebugMessage)("FrontToken.setItem: called"), [4, N($)]);
                case 2:
                  return P.sent(), _.waiters.forEach(function(x) {
                    return x(void 0);
                  }), _.waiters = [], [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, _.doesTokenExists = function() {
          return n(this, void 0, void 0, function() {
            var $;
            return r(this, function(P) {
              switch (P.label) {
                case 0:
                  return [4, U()];
                case 1:
                  return $ = P.sent(), [2, $ !== null];
              }
            });
          });
        }, _.waiters = [], _;
      }()
    );
    e.FrontToken = a;
    var i = (
      /** @class */
      function() {
        function _() {
        }
        _.init = function(P, x) {
          (0, o.logDebugMessage)("init: called"), (0, o.logDebugMessage)("init: Input apiBasePath: " + P.apiBasePath), (0, o.logDebugMessage)("init: Input apiDomain: " + P.apiDomain), (0, o.logDebugMessage)("init: Input autoAddCredentials: " + P.autoAddCredentials), (0, o.logDebugMessage)("init: Input sessionTokenBackendDomain: " + P.sessionTokenBackendDomain), (0, o.logDebugMessage)("init: Input isInIframe: " + P.isInIframe), (0, o.logDebugMessage)("init: Input sessionExpiredStatusCode: " + P.sessionExpiredStatusCode), (0, o.logDebugMessage)("init: Input sessionTokenFrontendDomain: " + P.sessionTokenFrontendDomain), (0, o.logDebugMessage)("init: Input tokenTransferMethod: " + P.tokenTransferMethod);
          var D = g.default.getReferenceOrThrow().windowHandler.getWindowUnsafe();
          _.env = D === void 0 || D.fetch === void 0 ? pi : D, _.refreshTokenUrl = P.apiDomain + P.apiBasePath + "/session/refresh", _.signOutUrl = P.apiDomain + P.apiBasePath + "/signout", _.rid = "session", _.config = P, _.env.__supertokensOriginalFetch === void 0 && ((0, o.logDebugMessage)("init: __supertokensOriginalFetch is undefined"), _.env.__supertokensOriginalFetch = _.env.fetch.bind(_.env), _.env.__supertokensSessionRecipe = x, _.env.fetch = _.env.__supertokensSessionRecipe.addFetchInterceptorsAndReturnModifiedFetch({
            originalFetch: _.env.__supertokensOriginalFetch,
            userContext: {}
          }), _.env.__supertokensSessionRecipe.addXMLHttpRequestInterceptor({
            userContext: {}
          })), _.recipeImpl = _.env.__supertokensSessionRecipe, _.initCalled = !0;
        };
        var $;
        return $ = _, _.initCalled = !1, _.doRequest = function(P, x, D) {
          return n(void 0, void 0, void 0, function() {
            var H, q, M, W, F, Z, re, ke, pe, me, _e, J, be, wt, Ke;
            return r($, function(le) {
              switch (le.label) {
                case 0:
                  if (!_.initCalled)
                    throw Error("init function not called");
                  (0, o.logDebugMessage)("doRequest: start of fetch interception"), H = !1;
                  try {
                    q = void 0, typeof D == "string" ? q = D : typeof D == "object" && (typeof D.url == "string" ? q = D.url : typeof D.href == "string" && (q = D.href)), H = !_.recipeImpl.shouldDoInterceptionBasedOnUrl(
                      q,
                      _.config.apiDomain,
                      _.config.sessionTokenBackendDomain
                    );
                  } catch (Bn) {
                    if (Bn.message === "Please provide a valid domain name")
                      (0, o.logDebugMessage)(
                        "doRequest: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                      ), H = !_.recipeImpl.shouldDoInterceptionBasedOnUrl(
                        g.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                        _.config.apiDomain,
                        _.config.sessionTokenBackendDomain
                      );
                    else
                      throw Bn;
                  }
                  return (0, o.logDebugMessage)("doRequest: Value of doNotDoInterception: " + H), H ? ((0, o.logDebugMessage)("doRequest: Returning without interception"), [4, P(x)]) : [3, 2];
                case 1:
                  return [2, le.sent()];
                case 2:
                  return M = new Headers(
                    x !== void 0 && x.headers !== void 0 ? x.headers : D.headers
                  ), M.has("Authorization") ? [4, O("access")] : [3, 5];
                case 3:
                  return W = le.sent(), [4, O("refresh")];
                case 4:
                  F = le.sent(), W !== void 0 && F !== void 0 && M.get("Authorization") === "Bearer ".concat(W) && ((0, o.logDebugMessage)(
                    "doRequest: Removing Authorization from user provided headers because it contains our access token"
                  ), M.delete("Authorization")), le.label = 5;
                case 5:
                  (0, o.logDebugMessage)("doRequest: Interception started"), s.ProcessState.getInstance().addState(
                    s.PROCESS_STATE.CALLING_INTERCEPTION_REQUEST
                  ), Z = 0, re = void 0, le.label = 6;
                case 6:
                  return [4, k(!0)];
                case 7:
                  return ke = le.sent(), pe = new Headers(M), me = t(t({}, x), { headers: pe }), ke.status !== "EXISTS" ? [3, 9] : [4, c.getToken(ke.lastAccessTokenUpdate)];
                case 8:
                  _e = le.sent(), _e !== void 0 && ((0, o.logDebugMessage)("doRequest: Adding anti-csrf token to request"), pe.set("anti-csrf", _e)), le.label = 9;
                case 9:
                  return _.config.autoAddCredentials && ((0, o.logDebugMessage)("doRequest: Adding credentials include"), me === void 0 ? me = {
                    credentials: "include"
                  } : me.credentials === void 0 && (me = t(t({}, me), {
                    credentials: "include"
                  }))), pe.has("rid") ? (0, o.logDebugMessage)("doRequest: rid header was already there in request") : ((0, o.logDebugMessage)("doRequest: Adding rid header: anti-csrf"), pe.set("rid", "anti-csrf")), J = _.config.tokenTransferMethod, (0, o.logDebugMessage)("doRequest: Adding st-auth-mode header: " + J), pe.set("st-auth-mode", J), [4, E(pe)];
                case 10:
                  return le.sent(), (0, o.logDebugMessage)("doRequest: Making user's http call"), [4, P(me)];
                case 11:
                  return be = le.sent(), (0, o.logDebugMessage)("doRequest: User's http call ended"), [4, A(be)];
                case 12:
                  if (le.sent(), B(
                    ke.status === "EXISTS",
                    be.status,
                    be.headers.get("front-token")
                  ), be.status !== _.config.sessionExpiredStatusCode)
                    return [3, 14];
                  if ((0, o.logDebugMessage)("doRequest: Status code is: " + be.status), Z >= _.config.maxRetryAttemptsForSessionRefresh)
                    throw (0, o.logDebugMessage)(
                      "doRequest: Maximum session refresh attempts reached. sessionRefreshAttempts: ".concat(Z, ", maxRetryAttemptsForSessionRefresh: ").concat(_.config.maxRetryAttemptsForSessionRefresh)
                    ), wt = "Received a 401 response from ".concat(
                      D,
                      ". Attempted to refresh the session and retry the request with the updated session tokens "
                    ).concat(
                      _.config.maxRetryAttemptsForSessionRefresh,
                      " times, but each attempt resulted in a 401 error. The maximum session refresh limit has been reached. Please investigate your API. To increase the session refresh attempts, update maxRetryAttemptsForSessionRefresh in the config."
                    ), console.error(wt), new Error(wt);
                  return [4, S(ke)];
                case 13:
                  if (Ke = le.sent(), Z++, (0, o.logDebugMessage)("doRequest: sessionRefreshAttempts: " + Z), Ke.result !== "RETRY") {
                    if ((0, o.logDebugMessage)("doRequest: Not retrying original request"), Ke.error !== void 0)
                      if (Ke.error instanceof Response)
                        re = Ke.error;
                      else
                        throw Ke.error;
                    else
                      re = be;
                    return [3, 18];
                  }
                  return (0, o.logDebugMessage)("doRequest: Retrying original request"), [3, 17];
                case 14:
                  return be.status !== _.config.invalidClaimStatusCode ? [3, 16] : [4, w(be)];
                case 15:
                  le.sent(), le.label = 16;
                case 16:
                  return [2, be];
                case 17:
                  return [3, 6];
                case 18:
                  return [2, re];
              }
            });
          });
        }, _.attemptRefreshingSession = function() {
          return n(void 0, void 0, void 0, function() {
            var P, x;
            return r($, function(D) {
              switch (D.label) {
                case 0:
                  if (!_.initCalled)
                    throw Error("init function not called");
                  return [4, k(!1)];
                case 1:
                  return P = D.sent(), [4, S(P)];
                case 2:
                  if (x = D.sent(), x.result === "API_ERROR")
                    throw x.error;
                  return [2, x.result === "RETRY"];
              }
            });
          });
        }, _;
      }()
    );
    e.default = i;
    var d = "st-last-access-token-update", p = "st-refresh-token", y = "st-access-token", v = "sAntiCsrf", b = "sFrontToken";
    function S(_) {
      return n(this, void 0, void 0, function() {
        var $, P, x, D, H, q, M, W, F, Z, re, ke, pe, me, _e;
        return r(this, function(J) {
          switch (J.label) {
            case 0:
              return [4, l.default.getReferenceOrThrow().lockFactory()];
            case 1:
              $ = J.sent(), J.label = 2;
            case 2:
              return (0, o.logDebugMessage)("onUnauthorisedResponse: trying to acquire lock"), [4, $.acquireLock("REFRESH_TOKEN_USE", 1e3)];
            case 3:
              if (!J.sent()) return [3, 21];
              (0, o.logDebugMessage)("onUnauthorisedResponse: lock acquired"), J.label = 4;
            case 4:
              return J.trys.push([4, 17, 19, 21]), [4, k(!1)];
            case 5:
              return P = J.sent(), P.status === "NOT_EXISTS" ? ((0, o.logDebugMessage)(
                "onUnauthorisedResponse: Not refreshing because local session state is NOT_EXISTS"
              ), i.config.onHandleEvent({
                action: "UNAUTHORISED",
                sessionExpiredOrRevoked: !1,
                userContext: {}
              }), [2, { result: "SESSION_EXPIRED" }]) : (x = P.status === "EXISTS", D = _.status === "EXISTS", H = P.status !== _.status, q = "lastAccessTokenUpdate" in P && "lastAccessTokenUpdate" in _ && P.lastAccessTokenUpdate !== _.lastAccessTokenUpdate, H && x ? ((0, o.logDebugMessage)(
                "onUnauthorisedResponse: Retrying early because session status has changed and postLockLSS.status is EXISTS"
              ), [2, { result: "RETRY" }]) : x && D && q ? ((0, o.logDebugMessage)(
                "onUnauthorisedResponse: Retrying early because pre and post lastAccessTokenUpdate don't match"
              ), [2, { result: "RETRY" }]) : (M = new Headers(), _.status !== "EXISTS" ? [3, 7] : [4, c.getToken(_.lastAccessTokenUpdate)]));
            case 6:
              W = J.sent(), W !== void 0 && ((0, o.logDebugMessage)(
                "onUnauthorisedResponse: Adding anti-csrf token to refresh API call"
              ), M.set("anti-csrf", W)), J.label = 7;
            case 7:
              return (0, o.logDebugMessage)("onUnauthorisedResponse: Adding rid and fdi-versions to refresh call header"), M.set("rid", i.rid), M.set("fdi-version", h.supported_fdi.join(",")), F = i.config.tokenTransferMethod, (0, o.logDebugMessage)("onUnauthorisedResponse: Adding st-auth-mode header: " + F), M.set("st-auth-mode", F), [4, E(M, !0)];
            case 8:
              return J.sent(), (0, o.logDebugMessage)("onUnauthorisedResponse: Calling refresh pre API hook"), [
                4,
                i.config.preAPIHook({
                  action: "REFRESH_SESSION",
                  requestInit: {
                    method: "post",
                    credentials: "include",
                    headers: M
                  },
                  url: i.refreshTokenUrl,
                  userContext: {}
                })
              ];
            case 9:
              return Z = J.sent(), (0, o.logDebugMessage)("onUnauthorisedResponse: Making refresh call"), [
                4,
                i.env.__supertokensOriginalFetch(Z.url, Z.requestInit)
              ];
            case 10:
              return re = J.sent(), (0, o.logDebugMessage)("onUnauthorisedResponse: Refresh call ended"), [4, A(re)];
            case 11:
              return J.sent(), (0, o.logDebugMessage)("onUnauthorisedResponse: Refresh status code is: " + re.status), ke = re.status === i.config.sessionExpiredStatusCode, re.headers.get("front-token") !== null ? [3, 14] : ke ? [4, a.setItem("remove")] : [3, 13];
            case 12:
              return J.sent(), [3, 14];
            case 13:
              if (re.status === 200)
                throw pe = "The 'front-token' header is missing from a successful refresh-session response. The most likely causes are proxy settings (e.g.: 'front-token' missing from 'access-control-expose-headers' or a proxy stripping this header). Please investigate your API.", console.error(pe), new Error(pe);
              J.label = 14;
            case 14:
              if (B(
                _.status === "EXISTS",
                re.status,
                ke && re.headers.get("front-token") === null ? "remove" : re.headers.get("front-token")
              ), re.status >= 300)
                throw re;
              return [
                4,
                i.config.postAPIHook({
                  action: "REFRESH_SESSION",
                  fetchResponse: re.clone(),
                  requestInit: Z.requestInit,
                  url: Z.url,
                  userContext: {}
                })
              ];
            case 15:
              return J.sent(), [4, k(!1)];
            case 16:
              return J.sent().status === "NOT_EXISTS" ? ((0, o.logDebugMessage)(
                "onUnauthorisedResponse: local session doesn't exist, so returning session expired"
              ), [2, { result: "SESSION_EXPIRED" }]) : (i.config.onHandleEvent({
                action: "REFRESH_SESSION",
                userContext: {}
              }), (0, o.logDebugMessage)("onUnauthorisedResponse: Sending RETRY signal"), [2, { result: "RETRY" }]);
            case 17:
              return me = J.sent(), [4, k(!1)];
            case 18:
              return J.sent().status === "NOT_EXISTS" ? ((0, o.logDebugMessage)(
                "onUnauthorisedResponse: local session doesn't exist, so returning session expired"
              ), [2, { result: "SESSION_EXPIRED", error: me }]) : ((0, o.logDebugMessage)("onUnauthorisedResponse: sending API_ERROR"), [2, { result: "API_ERROR", error: me }]);
            case 19:
              return [4, $.releaseLock("REFRESH_TOKEN_USE")];
            case 20:
              return J.sent(), (0, o.logDebugMessage)("onUnauthorisedResponse: Released lock"), [
                7
                /*endfinally*/
              ];
            case 21:
              return [4, k(!1)];
            case 22:
              return _e = J.sent(), _e.status === "NOT_EXISTS" ? ((0, o.logDebugMessage)(
                "onUnauthorisedResponse: lock acquired failed and local session doesn't exist, so sending SESSION_EXPIRED"
              ), [2, { result: "SESSION_EXPIRED" }]) : _e.status !== _.status || _e.status === "EXISTS" && _.status === "EXISTS" && _e.lastAccessTokenUpdate !== _.lastAccessTokenUpdate ? ((0, o.logDebugMessage)(
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
    e.onUnauthorisedResponse = S;
    function m() {
      (0, o.logDebugMessage)("onTokenUpdate: firing ACCESS_TOKEN_PAYLOAD_UPDATED event"), i.config.onHandleEvent({
        action: "ACCESS_TOKEN_PAYLOAD_UPDATED",
        userContext: {}
      });
    }
    e.onTokenUpdate = m;
    function w(_) {
      return n(this, void 0, void 0, function() {
        var $;
        return r(this, function(P) {
          switch (P.label) {
            case 0:
              return P.trys.push([0, 2, , 3]), [
                4,
                i.recipeImpl.getInvalidClaimsFromResponse({
                  response: _,
                  userContext: {}
                })
              ];
            case 1:
              return $ = P.sent(), $ && i.config.onHandleEvent({
                action: "API_INVALID_CLAIM",
                claimValidationErrors: $,
                userContext: {}
              }), [3, 3];
            case 2:
              return P.sent(), [3, 3];
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    e.onInvalidClaimResponse = w;
    function k(_) {
      return n(this, void 0, void 0, function() {
        var $, P, x, D, H, q, M;
        return r(this, function(W) {
          switch (W.label) {
            case 0:
              return (0, o.logDebugMessage)("getLocalSessionState: called"), [4, C(d)];
            case 1:
              return $ = W.sent(), [4, a.doesTokenExists()];
            case 2:
              return P = W.sent(), P && $ !== void 0 ? ((0, o.logDebugMessage)("getLocalSessionState: returning EXISTS since both frontToken and lastAccessTokenUpdate exists"), [2, { status: "EXISTS", lastAccessTokenUpdate: $ }]) : [3, 3];
            case 3:
              return $ ? ((0, o.logDebugMessage)("getLocalSessionState: returning NOT_EXISTS since frontToken was cleared but lastAccessTokenUpdate exists"), [2, { status: "NOT_EXISTS" }]) : [3, 4];
            case 4:
              return x = {
                status: "MAY_EXIST"
              }, _ ? ((0, o.logDebugMessage)("getLocalSessionState: trying to refresh"), [4, S(x)]) : [3, 8];
            case 5:
              return D = W.sent(), D.result !== "RETRY" ? ((0, o.logDebugMessage)(
                "getLocalSessionState: return NOT_EXISTS in case error from backend" + D.result
              ), [
                2,
                {
                  status: "NOT_EXISTS"
                }
              ]) : [4, C(d)];
            case 6:
              return H = W.sent(), [4, a.doesTokenExists()];
            case 7:
              if (q = W.sent(), !q || H === void 0)
                throw M = "Failed to retrieve local session state from cookies after a successful session refresh. This indicates a configuration error or that the browser is preventing cookie writes.", console.error(M), new Error(M);
              return (0, o.logDebugMessage)("getLocalSessionState: returning EXISTS since both frontToken and lastAccessTokenUpdate exists post refresh"), [2, { status: "EXISTS", lastAccessTokenUpdate: H }];
            case 8:
              return (0, o.logDebugMessage)("getLocalSessionState: returning: " + x.status), [2, x];
          }
        });
      });
    }
    e.getLocalSessionState = k;
    function I(_) {
      switch (_) {
        case "access":
          return y;
        case "refresh":
          return p;
      }
    }
    e.getStorageNameForToken = I;
    function R(_, $) {
      var P = I(_);
      return $ !== "" ? ((0, o.logDebugMessage)("setToken: saved ".concat(_, " token into cookies")), T(P, $, Date.now() + 31536e5)) : ((0, o.logDebugMessage)("setToken: cleared ".concat(_, " token from cookies")), T(P, $, 0));
    }
    e.setToken = R;
    function T(_, $, P) {
      var x = "Fri, 31 Dec 9999 23:59:59 GMT";
      P !== Number.MAX_SAFE_INTEGER && (x = new Date(P).toUTCString());
      var D = i.config.sessionTokenFrontendDomain;
      return D === "localhost" || D === g.default.getReferenceOrThrow().windowHandler.location.getHostName() ? f.default.getReferenceOrThrow().cookieHandler.setCookie(
        "".concat(_, "=").concat($, ";expires=").concat(x, ";path=/;samesite=").concat(i.config.isInIframe ? "none;secure" : "lax")
      ) : f.default.getReferenceOrThrow().cookieHandler.setCookie(
        "".concat(_, "=").concat($, ";expires=").concat(x, ";domain=").concat(D, ";path=/;samesite=").concat(i.config.isInIframe ? "none;secure" : "lax")
      );
    }
    function O(_) {
      return n(this, void 0, void 0, function() {
        var $;
        return r(this, function(P) {
          return $ = I(_), [2, C($)];
        });
      });
    }
    e.getTokenForHeaderAuth = O;
    function C(_) {
      return n(this, void 0, void 0, function() {
        var $, P, x, D;
        return r(this, function(H) {
          switch (H.label) {
            case 0:
              return P = "; ", [4, f.default.getReferenceOrThrow().cookieHandler.getCookie()];
            case 1:
              return $ = P + H.sent(), x = $.split("; " + _ + "="), x.length >= 2 && (D = x.pop(), D !== void 0) ? [2, D.split(";").shift()] : [2, void 0];
          }
        });
      });
    }
    function E(_, $) {
      return $ === void 0 && ($ = !1), n(this, void 0, void 0, function() {
        var P, x;
        return r(this, function(D) {
          switch (D.label) {
            case 0:
              return (0, o.logDebugMessage)("setTokenHeaders: adding existing tokens as header"), [4, O("access")];
            case 1:
              return P = D.sent(), [4, O("refresh")];
            case 2:
              return x = D.sent(), ($ || P !== void 0) && x !== void 0 ? _.has("Authorization") ? (0, o.logDebugMessage)(
                "setAuthorizationHeaderIfRequired: Authorization header defined by the user, not adding"
              ) : ((0, o.logDebugMessage)(
                "setAuthorizationHeaderIfRequired: added authorization header"
              ), _.set(
                "Authorization",
                "Bearer ".concat($ ? x : P)
              )) : (0, o.logDebugMessage)(
                "setAuthorizationHeaderIfRequired: token for header based auth not found"
              ), [
                2
                /*return*/
              ];
          }
        });
      });
    }
    function A(_) {
      return n(this, void 0, void 0, function() {
        var $, P, x, D, H;
        return r(this, function(q) {
          switch (q.label) {
            case 0:
              return (0, o.logDebugMessage)("saveTokensFromHeaders: Saving updated tokens from the response headers"), $ = _.headers.get("st-refresh-token"), $ === null ? [3, 2] : ((0, o.logDebugMessage)("saveTokensFromHeaders: saving new refresh token"), [4, R("refresh", $)]);
            case 1:
              q.sent(), q.label = 2;
            case 2:
              return P = _.headers.get("st-access-token"), P === null ? [3, 4] : ((0, o.logDebugMessage)("saveTokensFromHeaders: saving new access token"), [4, R("access", P)]);
            case 3:
              q.sent(), q.label = 4;
            case 4:
              return x = _.headers.get("front-token"), x === null ? [3, 6] : ((0, o.logDebugMessage)("saveTokensFromHeaders: Setting sFrontToken: " + x), [4, a.setItem(x)]);
            case 5:
              q.sent(), (0, e.updateClockSkewUsingFrontToken)({ frontToken: x, responseHeaders: _.headers }), q.label = 6;
            case 6:
              return D = _.headers.get("anti-csrf"), D === null ? [3, 9] : [4, k(!1)];
            case 7:
              return H = q.sent(), H.status !== "EXISTS" ? [3, 9] : ((0, o.logDebugMessage)("saveTokensFromHeaders: Setting anti-csrf token"), [4, c.setItem(H.lastAccessTokenUpdate, D)]);
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
    var G = void 0;
    function Y() {
      return n(this, void 0, void 0, function() {
        var _;
        return r(this, function($) {
          switch ($.label) {
            case 0:
              return (0, o.logDebugMessage)("saveLastAccessTokenUpdate: called"), _ = Date.now().toString(), (0, o.logDebugMessage)("saveLastAccessTokenUpdate: setting " + _), [4, T(d, _, Number.MAX_SAFE_INTEGER)];
            case 1:
              return $.sent(), G !== void 0 ? [3, 3] : [4, C(d)];
            case 2:
              G = $.sent() === _, $.label = 3;
            case 3:
              return G === !1 && console.warn(
                "Saving to cookies was not successful, this indicates a configuration error or the browser preventing us from writing the cookies."
              ), [4, T("sIRTFrontend", "", 0)];
            case 4:
              return $.sent(), [
                2
                /*return*/
              ];
          }
        });
      });
    }
    e.saveLastAccessTokenUpdate = Y;
    function ae() {
      return n(this, void 0, void 0, function() {
        function _() {
          return n(this, void 0, void 0, function() {
            var P, x, D, H, q;
            return r(this, function(M) {
              switch (M.label) {
                case 0:
                  return x = "; ", [
                    4,
                    f.default.getReferenceOrThrow().cookieHandler.getCookie()
                  ];
                case 1:
                  return P = x + M.sent(), D = P.split("; " + v + "="), D.length >= 2 && (H = D.pop(), H !== void 0) ? (q = H.split(";").shift(), q === void 0 ? [2, null] : [2, q]) : [2, null];
              }
            });
          });
        }
        var $;
        return r(this, function(P) {
          switch (P.label) {
            case 0:
              return (0, o.logDebugMessage)("getAntiCSRFToken: called"), [4, k(!0)];
            case 1:
              return P.sent().status !== "EXISTS" ? ((0, o.logDebugMessage)(
                "getAntiCSRFToken: Returning because local session state != EXISTS"
              ), [2, null]) : [4, _()];
            case 2:
              return $ = P.sent(), (0, o.logDebugMessage)("getAntiCSRFToken: returning: " + $), [2, $];
          }
        });
      });
    }
    function se(_) {
      return n(this, void 0, void 0, function() {
        return r(this, function($) {
          switch ($.label) {
            case 0:
              return (0, o.logDebugMessage)("setAntiCSRF: called: " + _), _ === void 0 ? [3, 2] : [4, T(v, _, Number.MAX_SAFE_INTEGER)];
            case 1:
              return $.sent(), [3, 4];
            case 2:
              return [4, T(v, "", 0)];
            case 3:
              $.sent(), $.label = 4;
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
    function U() {
      return n(this, void 0, void 0, function() {
        var _;
        return r(this, function($) {
          switch ($.label) {
            case 0:
              return (0, o.logDebugMessage)("getFrontTokenFromCookie: called"), [4, C(b)];
            case 1:
              return _ = $.sent(), [2, _ === void 0 ? null : _];
          }
        });
      });
    }
    function L(_) {
      return JSON.parse(decodeURIComponent(escape(atob(_))));
    }
    function j() {
      return n(this, void 0, void 0, function() {
        var _;
        return r(this, function($) {
          switch ($.label) {
            case 0:
              return (0, o.logDebugMessage)("getFrontToken: called"), [4, k(!0)];
            case 1:
              return $.sent().status !== "EXISTS" ? ((0, o.logDebugMessage)("getFrontToken: Returning because sIRTFrontend != EXISTS"), [2, null]) : [4, U()];
            case 2:
              return _ = $.sent(), (0, o.logDebugMessage)("getFrontToken: returning: " + _), [2, _];
          }
        });
      });
    }
    e.getFrontToken = j;
    function N(_) {
      return n(this, void 0, void 0, function() {
        var $, P, x;
        return r(this, function(D) {
          switch (D.label) {
            case 0:
              return (0, o.logDebugMessage)("setFrontToken: called"), [4, U()];
            case 1:
              return $ = D.sent(), $ !== null && _ !== void 0 && (P = L($).up, x = L(_).up, JSON.stringify(P) !== JSON.stringify(x) && m()), _ !== void 0 ? [3, 3] : [4, T(b, "", 0)];
            case 2:
              return D.sent(), [3, 5];
            case 3:
              return [4, T(b, _, Number.MAX_SAFE_INTEGER)];
            case 4:
              D.sent(), D.label = 5;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    e.setFrontToken = N;
    function B(_, $, P) {
      if (P == null) {
        (0, o.logDebugMessage)(
          "fireSessionUpdateEventsIfNecessary returning early because the front token was not updated"
        );
        return;
      }
      var x = P !== "remove";
      (0, o.logDebugMessage)(
        "fireSessionUpdateEventsIfNecessary wasLoggedIn: ".concat(_, " frontTokenExistsAfter: ").concat(x, " status: ").concat($)
      ), _ ? x || ($ === i.config.sessionExpiredStatusCode ? ((0, o.logDebugMessage)("onUnauthorisedResponse: firing UNAUTHORISED event"), i.config.onHandleEvent({
        action: "UNAUTHORISED",
        sessionExpiredOrRevoked: !0,
        userContext: {}
      })) : ((0, o.logDebugMessage)("onUnauthorisedResponse: firing SIGN_OUT event"), i.config.onHandleEvent({
        action: "SIGN_OUT",
        userContext: {}
      }))) : x && ((0, o.logDebugMessage)("onUnauthorisedResponse: firing SESSION_CREATED event"), i.config.onHandleEvent({
        action: "SESSION_CREATED",
        userContext: {}
      }));
    }
    e.fireSessionUpdateEventsIfNecessary = B;
    var Q = function(_) {
      var $ = _.frontToken, P = _.responseHeaders;
      if ((0, o.logDebugMessage)("updateClockSkewUsingFrontToken: frontToken: " + $), $ == null || $ === "remove") {
        (0, o.logDebugMessage)(
          "updateClockSkewUsingFrontToken: the access token payload wasn't updated or is being removed, skipping clock skew update"
        );
        return;
      }
      var x = L($), D = i.recipeImpl.calculateClockSkewInMillis({
        accessTokenPayload: x.up,
        responseHeaders: P
      });
      u.default.getReferenceOrThrow().dateProvider.setClientClockSkewInMillis(D), (0, o.logDebugMessage)("updateClockSkewUsingFrontToken: Client clock synchronized successfully");
    };
    e.updateClockSkewUsingFrontToken = Q;
  }(Ue)), Ue;
}
var mt = {}, vr;
function Uo() {
  if (vr) return mt;
  vr = 1, Object.defineProperty(mt, "__esModule", { value: !0 }), mt.SessionClaimValidatorStore = void 0;
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
  return mt.SessionClaimValidatorStore = e, mt.default = e, mt;
}
var pr;
function Ci() {
  if (pr) return kt;
  pr = 1, Object.defineProperty(kt, "__esModule", { value: !0 }), kt.getGlobalClaimValidators = void 0;
  var e = xn(), t = Xt(), n = Uo();
  function r(s, h) {
    var f = (0, e.getNormalisedUserContext)(h), g = n.default.getClaimValidatorsAddedByOtherRecipes(), l = t.default.recipeImpl.getGlobalClaimValidators({
      claimValidatorsAddedByOtherRecipes: g,
      userContext: f
    }), o = s !== void 0 ? s(l, f) : l;
    return o;
  }
  return kt.getGlobalClaimValidators = r, kt;
}
var mr;
function Pi() {
  return mr || (mr = 1, function(e) {
    function t(n) {
      for (var r in n) e.hasOwnProperty(r) || (e[r] = n[r]);
    }
    e.__esModule = !0, t(Ci());
  }(mn)), mn;
}
var br;
function Re() {
  if (br) return ee;
  br = 1, Object.defineProperty(ee, "__esModule", { value: !0 }), ee.normaliseUser = ee.normaliseUserResponse = ee.getGlobalClaimValidators = ee.getHashFromLocation = ee.getNormalisedUserContext = ee.checkForSSRErrorAndAppendIfNeeded = ee.getAllQueryParams = ee.getQueryParams = ee.isTest = ee.normaliseInputAppInfoOrThrowError = ee.appendQueryParamsToURL = void 0;
  var e = ln(), t = yi(), n = Si(), r = Mo(), s = Pi();
  function h(v, b) {
    if (b === void 0)
      return v;
    try {
      var S = new URL(v);
      return Object.entries(b).forEach(function(k) {
        var I = k[0], R = k[1];
        S.searchParams.set(I, R);
      }), S.href;
    } catch {
      var m = v.startsWith("/") ? "http:localhost" : "http://localhost/", w = new URL("".concat(m).concat(v));
      return Object.entries(b).forEach(function(I) {
        var R = I[0], T = I[1];
        w.searchParams.set(R, T);
      }), "".concat(w.pathname).concat(w.search);
    }
  }
  ee.appendQueryParamsToURL = h;
  function f(v, b) {
    return b !== void 0 ? new r.default(b) : new r.default(v);
  }
  function g(v) {
    if (v === void 0)
      throw new Error("Please provide the appInfo object when calling supertokens.init");
    if (v.apiDomain === void 0)
      throw new Error("Please provide your apiDomain inside the appInfo object when calling supertokens.init");
    if (v.appName === void 0)
      throw new Error("Please provide your appName inside the appInfo object when calling supertokens.init");
    var b = new r.default("");
    return v.apiGatewayPath !== void 0 && (b = new r.default(v.apiGatewayPath)), {
      appName: v.appName,
      apiDomain: new n.default(v.apiDomain),
      apiBasePath: b.appendPath(
        f(t.DEFAULT_API_BASE_PATH, v.apiBasePath)
      )
    };
  }
  ee.normaliseInputAppInfoOrThrowError = g;
  function l() {
    try {
      return process.env.TEST_MODE === "testing";
    } catch {
      return !1;
    }
  }
  ee.isTest = l;
  function o(v) {
    var b = new URLSearchParams(
      e.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getSearch()
    ), S = b.get(v);
    if (S !== null)
      return S;
  }
  ee.getQueryParams = o;
  function u() {
    return new URLSearchParams(
      e.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getSearch()
    );
  }
  ee.getAllQueryParams = u;
  function c(v) {
    return typeof window > "u" && (v = v + t.SSR_ERROR), v;
  }
  ee.checkForSSRErrorAndAppendIfNeeded = c;
  function a(v) {
    return v === void 0 ? {} : v;
  }
  ee.getNormalisedUserContext = a;
  function i() {
    return e.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getHash().substring(1);
  }
  ee.getHashFromLocation = i;
  function d(v) {
    var b = v.overrideGlobalClaimValidators, S = v.userContext;
    return (0, s.getGlobalClaimValidators)(b, S);
  }
  ee.getGlobalClaimValidators = d;
  function p(v, b) {
    return "createdNewRecipeUser" in b ? b : {
      createdNewRecipeUser: b.createdNewUser,
      user: y(v, b.user)
    };
  }
  ee.normaliseUserResponse = p;
  function y(v, b) {
    if ("loginMethods" in b)
      return b;
    var S = b.email !== void 0 ? [b.email] : [], m = b.phoneNumber !== void 0 ? [b.phoneNumber] : [], w = b.thirdParty !== void 0 ? [b.thirdParty] : [];
    return {
      id: b.id,
      emails: S,
      phoneNumbers: m,
      thirdParty: w,
      isPrimaryUser: !1,
      tenantIds: b.tenantIds,
      timeJoined: b.timeJoined,
      loginMethods: [
        {
          recipeId: v,
          recipeUserId: b.id,
          timeJoined: b.timeJoined,
          tenantIds: b.tenantIds,
          email: b.email,
          phoneNumber: b.email
        }
      ]
    };
  }
  return ee.normaliseUser = y, ee;
}
var bn = {}, yn = {}, yr;
function $i() {
  return yr || (yr = 1, function(e) {
    function t(n) {
      for (var r in n) e.hasOwnProperty(r) || (e[r] = n[r]);
    }
    e.__esModule = !0, t(Mn());
  }(yn)), yn;
}
var Sr;
function Oi() {
  return Sr || (Sr = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CookieHandlerReference = void 0;
    var t = $i();
    Object.defineProperty(e, "CookieHandlerReference", {
      enumerable: !0,
      get: function() {
        return t.CookieHandlerReference;
      }
    });
  }(bn)), bn;
}
var It = {}, wr;
function Ai() {
  if (wr) return It;
  wr = 1, Object.defineProperty(It, "__esModule", { value: !0 }), It.PostSuperTokensInitCallbacks = void 0;
  var e = (
    /** @class */
    function() {
      function t() {
      }
      return t.addPostInitCallback = function(n) {
        t.postInitCallbacks.push(n);
      }, t.runPostInitCallbacks = function() {
        for (var n = 0, r = t.postInitCallbacks; n < r.length; n++) {
          var s = r[n];
          s();
        }
      }, t.postInitCallbacks = [], t;
    }()
  );
  return It.PostSuperTokensInitCallbacks = e, It;
}
var Ce = {}, nt = {}, Tt = {}, Fe = {}, kr;
function Ei() {
  if (kr) return Fe;
  kr = 1;
  var e = Fe && Fe.__awaiter || function(r, s, h, f) {
    function g(l) {
      return l instanceof h ? l : new h(function(o) {
        o(l);
      });
    }
    return new (h || (h = Promise))(function(l, o) {
      function u(i) {
        try {
          a(f.next(i));
        } catch (d) {
          o(d);
        }
      }
      function c(i) {
        try {
          a(f.throw(i));
        } catch (d) {
          o(d);
        }
      }
      function a(i) {
        i.done ? l(i.value) : g(i.value).then(u, c);
      }
      a((f = f.apply(r, s || [])).next());
    });
  }, t = Fe && Fe.__generator || function(r, s) {
    var h = {
      label: 0,
      sent: function() {
        if (l[0] & 1) throw l[1];
        return l[1];
      },
      trys: [],
      ops: []
    }, f, g, l, o;
    return o = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
      return this;
    }), o;
    function u(a) {
      return function(i) {
        return c([a, i]);
      };
    }
    function c(a) {
      if (f) throw new TypeError("Generator is already executing.");
      for (; h; )
        try {
          if (f = 1, g && (l = a[0] & 2 ? g.return : a[0] ? g.throw || ((l = g.return) && l.call(g), 0) : g.next) && !(l = l.call(g, a[1])).done)
            return l;
          switch (g = 0, l && (a = [a[0] & 2, l.value]), a[0]) {
            case 0:
            case 1:
              l = a;
              break;
            case 4:
              return h.label++, { value: a[1], done: !1 };
            case 5:
              h.label++, g = a[1], a = [0];
              continue;
            case 7:
              a = h.ops.pop(), h.trys.pop();
              continue;
            default:
              if (l = h.trys, !(l = l.length > 0 && l[l.length - 1]) && (a[0] === 6 || a[0] === 2)) {
                h = 0;
                continue;
              }
              if (a[0] === 3 && (!l || a[1] > l[0] && a[1] < l[3])) {
                h.label = a[1];
                break;
              }
              if (a[0] === 6 && h.label < l[1]) {
                h.label = l[1], l = a;
                break;
              }
              if (l && h.label < l[2]) {
                h.label = l[2], h.ops.push(a);
                break;
              }
              l[2] && h.ops.pop(), h.trys.pop();
              continue;
          }
          a = s.call(r, h);
        } catch (i) {
          a = [6, i], g = 0;
        } finally {
          f = l = 0;
        }
      if (a[0] & 5) throw a[1];
      return { value: a[0] ? a[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.normaliseRecipeModuleConfig = void 0;
  function n(r) {
    var s = this, h = r.preAPIHook;
    h === void 0 && (h = function(g) {
      return e(s, void 0, void 0, function() {
        return t(this, function(l) {
          return [2, g];
        });
      });
    });
    var f = r.postAPIHook;
    return f === void 0 && (f = function() {
      return e(s, void 0, void 0, function() {
        return t(this, function(g) {
          return [
            2
            /*return*/
          ];
        });
      });
    }), {
      recipeId: r.recipeId,
      appInfo: r.appInfo,
      clientType: r.clientType,
      preAPIHook: h,
      postAPIHook: f
    };
  }
  return Fe.normaliseRecipeModuleConfig = n, Fe;
}
var _r;
function Hn() {
  if (_r) return Tt;
  _r = 1, Object.defineProperty(Tt, "__esModule", { value: !0 }), Tt.normaliseAuthRecipe = void 0;
  var e = Ei();
  function t(n) {
    return (0, e.normaliseRecipeModuleConfig)(n);
  }
  return Tt.normaliseAuthRecipe = t, Tt;
}
var Ir;
function xi() {
  if (Ir) return nt;
  Ir = 1;
  var e = nt && nt.__assign || function() {
    return e = Object.assign || function(r) {
      for (var s, h = 1, f = arguments.length; h < f; h++) {
        s = arguments[h];
        for (var g in s) Object.prototype.hasOwnProperty.call(s, g) && (r[g] = s[g]);
      }
      return r;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(nt, "__esModule", { value: !0 }), nt.normaliseUserInput = void 0;
  var t = Hn();
  function n(r) {
    var s = e(
      {
        functions: function(h) {
          return h;
        }
      },
      r.override
    );
    return e(e({}, (0, t.normaliseAuthRecipe)(r)), { override: s });
  }
  return nt.normaliseUserInput = n, nt;
}
var bt = {}, rt = {}, Tr;
function Di() {
  if (Tr) return rt;
  Tr = 1;
  var e = rt && rt.__assign || function() {
    return e = Object.assign || function(n) {
      for (var r, s = 1, h = arguments.length; s < h; s++) {
        r = arguments[s];
        for (var f in r) Object.prototype.hasOwnProperty.call(r, f) && (n[f] = r[f]);
      }
      return n;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(rt, "__esModule", { value: !0 }), rt.getProxyObject = void 0;
  function t(n) {
    for (var r = e(e({}, n), { _call: function(o, u) {
      throw new Error("This function should only be called through the recipe object");
    } }), s = Object.keys(r), h = function(o) {
      o !== "_call" && (r[o] = function() {
        for (var u = [], c = 0; c < arguments.length; c++)
          u[c] = arguments[c];
        return this._call(o, u);
      });
    }, f = 0, g = s; f < g.length; f++) {
      var l = g[f];
      h(l);
    }
    return r;
  }
  return rt.getProxyObject = t, rt;
}
var Rr;
function cn() {
  if (Rr) return bt;
  Rr = 1, Object.defineProperty(bt, "__esModule", { value: !0 }), bt.OverrideableBuilder = void 0;
  var e = Di(), t = (
    /** @class */
    function() {
      function n(r) {
        this.layers = [r], this.proxies = [];
      }
      return n.prototype.override = function(r) {
        for (var s = (0, e.getProxyObject)(this.layers[0]), h = r(s, this), f = 0, g = Object.keys(this.layers[0]); f < g.length; f++) {
          var l = g[f];
          h[l] === s[l] || l === "_call" ? delete h[l] : h[l] === void 0 && (h[l] = null);
        }
        return this.layers.push(h), this.proxies.push(s), this;
      }, n.prototype.build = function() {
        var r = this;
        if (this.result)
          return this.result;
        this.result = {};
        for (var s = 0, h = this.layers; s < h.length; s++)
          for (var f = h[s], g = 0, l = Object.keys(f); g < l.length; g++) {
            var o = l[g], u = f[o];
            u !== void 0 && (u === null ? this.result[o] = void 0 : typeof u == "function" ? this.result[o] = u.bind(this.result) : this.result[o] = u);
          }
        for (var c = function(d) {
          var p = a.proxies[d];
          p._call = function(y, v) {
            for (var b = d; b >= 0; --b) {
              var S = r.layers[b][y];
              if (S != null)
                return S.bind(r.result).apply(void 0, v);
            }
          };
        }, a = this, i = 0; i < this.proxies.length; ++i)
          c(i);
        return this.result;
      }, n;
    }()
  );
  return bt.OverrideableBuilder = t, bt.default = t, bt;
}
var Pe = {}, $e = {}, ot = {}, Cr;
function Li() {
  return Cr || (Cr = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.supported_fdi = ot.package_version = void 0, ot.package_version = "0.14.0", ot.supported_fdi = ["3.1", "4.0"]), ot;
}
var en = {}, Sn = {}, it = {}, Pr;
function Ho() {
  if (Pr) return it;
  Pr = 1;
  var e = it && it.__extends || /* @__PURE__ */ function() {
    var n = function(r, s) {
      return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, f) {
        h.__proto__ = f;
      } || function(h, f) {
        for (var g in f) Object.prototype.hasOwnProperty.call(f, g) && (h[g] = f[g]);
      }, n(r, s);
    };
    return function(r, s) {
      if (typeof s != "function" && s !== null)
        throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
      n(r, s);
      function h() {
        this.constructor = r;
      }
      r.prototype = s === null ? Object.create(s) : (h.prototype = s.prototype, new h());
    };
  }();
  Object.defineProperty(it, "__esModule", { value: !0 }), it.STGeneralError = void 0;
  var t = (
    /** @class */
    function(n) {
      e(r, n);
      function r(s) {
        var h = n.call(this, s) || this;
        return h.isSuperTokensGeneralError = !0, h;
      }
      return r.isThisError = function(s) {
        return s.isSuperTokensGeneralError === !0;
      }, r;
    }(Error)
  );
  return it.STGeneralError = t, it;
}
var $r;
function Mi() {
  return $r || ($r = 1, function(e) {
    function t(r) {
      for (var s in r) e.hasOwnProperty(s) || (e[s] = r[s]);
    }
    e.__esModule = !0;
    let n = Ho();
    n.default !== void 0 ? t(n) : t({
      default: n,
      ...n
    });
  }(Sn)), Sn;
}
var Or;
function No() {
  if (Or) return en;
  Or = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  var e = Mi();
  return en.default = e.STGeneralError, en;
}
var Ar;
function Nn() {
  if (Ar) return $e;
  Ar = 1;
  var e = $e && $e.__assign || function() {
    return e = Object.assign || function(g) {
      for (var l, o = 1, u = arguments.length; o < u; o++) {
        l = arguments[o];
        for (var c in l) Object.prototype.hasOwnProperty.call(l, c) && (g[c] = l[c]);
      }
      return g;
    }, e.apply(this, arguments);
  }, t = $e && $e.__awaiter || function(g, l, o, u) {
    function c(a) {
      return a instanceof o ? a : new o(function(i) {
        i(a);
      });
    }
    return new (o || (o = Promise))(function(a, i) {
      function d(v) {
        try {
          y(u.next(v));
        } catch (b) {
          i(b);
        }
      }
      function p(v) {
        try {
          y(u.throw(v));
        } catch (b) {
          i(b);
        }
      }
      function y(v) {
        v.done ? a(v.value) : c(v.value).then(d, p);
      }
      y((u = u.apply(g, l || [])).next());
    });
  }, n = $e && $e.__generator || function(g, l) {
    var o = {
      label: 0,
      sent: function() {
        if (a[0] & 1) throw a[1];
        return a[1];
      },
      trys: [],
      ops: []
    }, u, c, a, i;
    return i = { next: d(0), throw: d(1), return: d(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
      return this;
    }), i;
    function d(y) {
      return function(v) {
        return p([y, v]);
      };
    }
    function p(y) {
      if (u) throw new TypeError("Generator is already executing.");
      for (; o; )
        try {
          if (u = 1, c && (a = y[0] & 2 ? c.return : y[0] ? c.throw || ((a = c.return) && a.call(c), 0) : c.next) && !(a = a.call(c, y[1])).done)
            return a;
          switch (c = 0, a && (y = [y[0] & 2, a.value]), y[0]) {
            case 0:
            case 1:
              a = y;
              break;
            case 4:
              return o.label++, { value: y[1], done: !1 };
            case 5:
              o.label++, c = y[1], y = [0];
              continue;
            case 7:
              y = o.ops.pop(), o.trys.pop();
              continue;
            default:
              if (a = o.trys, !(a = a.length > 0 && a[a.length - 1]) && (y[0] === 6 || y[0] === 2)) {
                o = 0;
                continue;
              }
              if (y[0] === 3 && (!a || y[1] > a[0] && y[1] < a[3])) {
                o.label = y[1];
                break;
              }
              if (y[0] === 6 && o.label < a[1]) {
                o.label = a[1], a = y;
                break;
              }
              if (a && o.label < a[2]) {
                o.label = a[2], o.ops.push(y);
                break;
              }
              a[2] && o.ops.pop(), o.trys.pop();
              continue;
          }
          y = l.call(g, o);
        } catch (v) {
          y = [6, v], c = 0;
        } finally {
          u = a = 0;
        }
      if (y[0] & 5) throw y[1];
      return { value: y[0] ? y[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty($e, "__esModule", { value: !0 });
  var r = Mo(), s = Li(), h = No(), f = (
    /** @class */
    function() {
      function g(o, u) {
        var c = this;
        this.recipeId = o, this.appInfo = u, this.get = function(a, i, d, p, y, v) {
          return t(c, void 0, void 0, function() {
            var b, S;
            return n(this, function(m) {
              switch (m.label) {
                case 0:
                  return [
                    4,
                    this.fetch(
                      this.getFullUrl(a, i, p),
                      e({ method: "GET" }, d),
                      y,
                      v
                    )
                  ];
                case 1:
                  return b = m.sent(), [4, this.getResponseJsonOrThrowGeneralError(b)];
                case 2:
                  return S = m.sent(), [
                    2,
                    {
                      jsonBody: S,
                      fetchResponse: b
                    }
                  ];
              }
            });
          });
        }, this.post = function(a, i, d, p, y) {
          return t(c, void 0, void 0, function() {
            var v, b;
            return n(this, function(S) {
              switch (S.label) {
                case 0:
                  if (d.body === void 0)
                    throw new Error("Post request must have a body");
                  return [
                    4,
                    this.fetch(
                      this.getFullUrl(a, i),
                      e({ method: "POST" }, d),
                      p,
                      y
                    )
                  ];
                case 1:
                  return v = S.sent(), [4, this.getResponseJsonOrThrowGeneralError(v)];
                case 2:
                  return b = S.sent(), [
                    2,
                    {
                      jsonBody: b,
                      fetchResponse: v
                    }
                  ];
              }
            });
          });
        }, this.delete = function(a, i, d, p, y) {
          return t(c, void 0, void 0, function() {
            var v, b;
            return n(this, function(S) {
              switch (S.label) {
                case 0:
                  return [
                    4,
                    this.fetch(
                      this.getFullUrl(a, i),
                      e({ method: "DELETE" }, d),
                      p,
                      y
                    )
                  ];
                case 1:
                  return v = S.sent(), [4, this.getResponseJsonOrThrowGeneralError(v)];
                case 2:
                  return b = S.sent(), [
                    2,
                    {
                      jsonBody: b,
                      fetchResponse: v
                    }
                  ];
              }
            });
          });
        }, this.put = function(a, i, d, p, y) {
          return t(c, void 0, void 0, function() {
            var v, b;
            return n(this, function(S) {
              switch (S.label) {
                case 0:
                  return [
                    4,
                    this.fetch(
                      this.getFullUrl(a, i),
                      e({ method: "PUT" }, d),
                      p,
                      y
                    )
                  ];
                case 1:
                  return v = S.sent(), [4, this.getResponseJsonOrThrowGeneralError(v)];
                case 2:
                  return b = S.sent(), [
                    2,
                    {
                      jsonBody: b,
                      fetchResponse: v
                    }
                  ];
              }
            });
          });
        }, this.fetch = function(a, i, d, p) {
          return t(c, void 0, void 0, function() {
            var y, v, b, S, m, w;
            return n(this, function(k) {
              switch (k.label) {
                case 0:
                  return i === void 0 ? y = {} : y = i.headers, [
                    4,
                    this.callPreAPIHook({
                      preAPIHook: d,
                      url: a,
                      requestInit: e(e({}, i), {
                        headers: e(e({}, y), {
                          "fdi-version": s.supported_fdi.join(","),
                          "Content-Type": "application/json",
                          rid: this.recipeId
                        })
                      })
                    })
                  ];
                case 1:
                  return v = k.sent(), b = v.requestInit, S = v.url, [4, fetch(S, b)];
                case 2:
                  if (m = k.sent(), m.status >= 300)
                    throw m;
                  return p === void 0 ? [3, 4] : (w = m.clone(), [
                    4,
                    p({
                      requestInit: b,
                      url: a,
                      fetchResponse: w
                    })
                  ]);
                case 3:
                  k.sent(), k.label = 4;
                case 4:
                  return [2, m];
              }
            });
          });
        }, this.callPreAPIHook = function(a) {
          return t(c, void 0, void 0, function() {
            var i;
            return n(this, function(d) {
              switch (d.label) {
                case 0:
                  return a.preAPIHook === void 0 ? [
                    2,
                    {
                      url: a.url,
                      requestInit: a.requestInit
                    }
                  ] : [
                    4,
                    a.preAPIHook({
                      url: a.url,
                      requestInit: a.requestInit
                    })
                  ];
                case 1:
                  return i = d.sent(), [2, i];
              }
            });
          });
        }, this.getFullUrl = function(a, i, d) {
          var p = c.appInfo.apiBasePath.getAsStringDangerous();
          a !== void 0 && a !== "public" && (p = "".concat(p, "/").concat(a));
          var y = new r.default(i), v = "".concat(c.appInfo.apiDomain.getAsStringDangerous()).concat(p).concat(y.getAsStringDangerous());
          return d === void 0 ? v : v + "?" + new URLSearchParams(d);
        }, this.getResponseJsonOrThrowGeneralError = function(a) {
          return t(c, void 0, void 0, function() {
            var i, d;
            return n(this, function(p) {
              switch (p.label) {
                case 0:
                  return [4, a.clone().json()];
                case 1:
                  if (i = p.sent(), i.status === "GENERAL_ERROR")
                    throw d = i.message === void 0 ? "No Error Message Provided" : i.message, new h.default(d);
                  return [2, i];
              }
            });
          });
        };
      }
      var l;
      return l = g, g.preparePreAPIHook = function(o) {
        var u = o.recipePreAPIHook, c = o.action, a = o.options, i = o.userContext;
        return function(d) {
          return t(void 0, void 0, void 0, function() {
            var p;
            return n(l, function(y) {
              switch (y.label) {
                case 0:
                  return [
                    4,
                    u(
                      e(e({}, d), { action: c, userContext: i })
                    )
                  ];
                case 1:
                  return p = y.sent(), a === void 0 || a.preAPIHook === void 0 ? [2, p] : [
                    2,
                    a.preAPIHook({
                      url: p.url,
                      requestInit: p.requestInit,
                      userContext: i
                    })
                  ];
              }
            });
          });
        };
      }, g.preparePostAPIHook = function(o) {
        var u = o.recipePostAPIHook, c = o.action, a = o.userContext;
        return function(i) {
          return t(void 0, void 0, void 0, function() {
            return n(l, function(d) {
              switch (d.label) {
                case 0:
                  return [
                    4,
                    u(
                      e(e({}, i), { userContext: a, action: c })
                    )
                  ];
                case 1:
                  return d.sent(), [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
      }, g;
    }()
  );
  return $e.default = f, $e;
}
var Er;
function Ui() {
  if (Er) return Pe;
  Er = 1;
  var e = Pe && Pe.__awaiter || function(h, f, g, l) {
    function o(u) {
      return u instanceof g ? u : new g(function(c) {
        c(u);
      });
    }
    return new (g || (g = Promise))(function(u, c) {
      function a(p) {
        try {
          d(l.next(p));
        } catch (y) {
          c(y);
        }
      }
      function i(p) {
        try {
          d(l.throw(p));
        } catch (y) {
          c(y);
        }
      }
      function d(p) {
        p.done ? u(p.value) : o(p.value).then(a, i);
      }
      d((l = l.apply(h, f || [])).next());
    });
  }, t = Pe && Pe.__generator || function(h, f) {
    var g = {
      label: 0,
      sent: function() {
        if (u[0] & 1) throw u[1];
        return u[1];
      },
      trys: [],
      ops: []
    }, l, o, u, c;
    return c = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (c[Symbol.iterator] = function() {
      return this;
    }), c;
    function a(d) {
      return function(p) {
        return i([d, p]);
      };
    }
    function i(d) {
      if (l) throw new TypeError("Generator is already executing.");
      for (; g; )
        try {
          if (l = 1, o && (u = d[0] & 2 ? o.return : d[0] ? o.throw || ((u = o.return) && u.call(o), 0) : o.next) && !(u = u.call(o, d[1])).done)
            return u;
          switch (o = 0, u && (d = [d[0] & 2, u.value]), d[0]) {
            case 0:
            case 1:
              u = d;
              break;
            case 4:
              return g.label++, { value: d[1], done: !1 };
            case 5:
              g.label++, o = d[1], d = [0];
              continue;
            case 7:
              d = g.ops.pop(), g.trys.pop();
              continue;
            default:
              if (u = g.trys, !(u = u.length > 0 && u[u.length - 1]) && (d[0] === 6 || d[0] === 2)) {
                g = 0;
                continue;
              }
              if (d[0] === 3 && (!u || d[1] > u[0] && d[1] < u[3])) {
                g.label = d[1];
                break;
              }
              if (d[0] === 6 && g.label < u[1]) {
                g.label = u[1], u = d;
                break;
              }
              if (u && g.label < u[2]) {
                g.label = u[2], g.ops.push(d);
                break;
              }
              u[2] && g.ops.pop(), g.trys.pop();
              continue;
          }
          d = f.call(h, g);
        } catch (p) {
          d = [6, p], o = 0;
        } finally {
          l = u = 0;
        }
      if (d[0] & 5) throw d[1];
      return { value: d[0] ? d[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Pe, "__esModule", { value: !0 }), Pe.getRecipeImplementation = void 0;
  var n = Nn(), r = Re();
  function s(h) {
    var f = new n.default(h.recipeId, h.appInfo);
    return {
      getTenantId: function() {
        var g = (0, r.getQueryParams)("tenantId");
        if ((g == null ? void 0 : g.trim()) !== "")
          return g;
      },
      getLoginMethods: function(g) {
        var l = g.tenantId, o = g.options, u = g.userContext;
        return e(this, void 0, void 0, function() {
          var c, a, i, d, p;
          return t(this, function(y) {
            switch (y.label) {
              case 0:
                return c = {}, h.clientType !== void 0 && (c.clientType = h.clientType), [
                  4,
                  f.get(
                    l,
                    "/loginmethods",
                    {},
                    c,
                    n.default.preparePreAPIHook({
                      recipePreAPIHook: h.preAPIHook,
                      action: "GET_LOGIN_METHODS",
                      options: o,
                      userContext: u
                    }),
                    n.default.preparePostAPIHook({
                      recipePostAPIHook: h.postAPIHook,
                      action: "GET_LOGIN_METHODS",
                      userContext: u
                    })
                  )
                ];
              case 1:
                return a = y.sent(), i = a.jsonBody, d = a.fetchResponse, i.firstFactors === void 0 ? (p = [], i.emailPassword.enabled && p.push("emailpassword"), i.thirdParty.enabled && p.push("thirdparty"), i.passwordless.enabled && (p.push("otp-email"), p.push("otp-phone"), p.push("link-email"), p.push("link-phone"))) : p = i.firstFactors, [
                  2,
                  {
                    status: "OK",
                    thirdParty: {
                      providers: i.thirdParty.providers
                    },
                    firstFactors: p,
                    fetchResponse: d
                  }
                ];
            }
          });
        });
      }
    };
  }
  return Pe.default = s, Pe.getRecipeImplementation = s, Pe;
}
var Oe = {}, tn = {}, xr;
function jo() {
  if (xr) return tn;
  xr = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  var e = (
    /** @class */
    /* @__PURE__ */ function() {
      function t(n) {
        this.config = n;
      }
      return t;
    }()
  );
  return tn.default = e, tn;
}
var ce = {}, wn = {}, at = {}, Ae = {}, de = {}, qe = {}, Dr;
function Hi() {
  if (Dr) return qe;
  Dr = 1;
  var e = qe && qe.__awaiter || function(s, h, f, g) {
    function l(o) {
      return o instanceof f ? o : new f(function(u) {
        u(o);
      });
    }
    return new (f || (f = Promise))(function(o, u) {
      function c(d) {
        try {
          i(g.next(d));
        } catch (p) {
          u(p);
        }
      }
      function a(d) {
        try {
          i(g.throw(d));
        } catch (p) {
          u(p);
        }
      }
      function i(d) {
        d.done ? o(d.value) : l(d.value).then(c, a);
      }
      i((g = g.apply(s, h || [])).next());
    });
  }, t = qe && qe.__generator || function(s, h) {
    var f = {
      label: 0,
      sent: function() {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    }, g, l, o, u;
    return u = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
      return this;
    }), u;
    function c(i) {
      return function(d) {
        return a([i, d]);
      };
    }
    function a(i) {
      if (g) throw new TypeError("Generator is already executing.");
      for (; f; )
        try {
          if (g = 1, l && (o = i[0] & 2 ? l.return : i[0] ? l.throw || ((o = l.return) && o.call(l), 0) : l.next) && !(o = o.call(l, i[1])).done)
            return o;
          switch (l = 0, o && (i = [i[0] & 2, o.value]), i[0]) {
            case 0:
            case 1:
              o = i;
              break;
            case 4:
              return f.label++, { value: i[1], done: !1 };
            case 5:
              f.label++, l = i[1], i = [0];
              continue;
            case 7:
              i = f.ops.pop(), f.trys.pop();
              continue;
            default:
              if (o = f.trys, !(o = o.length > 0 && o[o.length - 1]) && (i[0] === 6 || i[0] === 2)) {
                f = 0;
                continue;
              }
              if (i[0] === 3 && (!o || i[1] > o[0] && i[1] < o[3])) {
                f.label = i[1];
                break;
              }
              if (i[0] === 6 && f.label < o[1]) {
                f.label = o[1], o = i;
                break;
              }
              if (o && f.label < o[2]) {
                f.label = o[2], f.ops.push(i);
                break;
              }
              o[2] && f.ops.pop(), f.trys.pop();
              continue;
          }
          i = h.call(s, f);
        } catch (d) {
          i = [6, d], l = 0;
        } finally {
          g = o = 0;
        }
      if (i[0] & 5) throw i[1];
      return { value: i[0] ? i[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(qe, "__esModule", { value: !0 }), qe.createAxiosErrorFromFetchResp = void 0;
  function n(s, h, f, g, l) {
    return s.config = h, f && (s.code = f), s.request = g, s.response = l, s.isAxiosError = !0, s.toJSON = function() {
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
    }, s;
  }
  function r(s) {
    return e(this, void 0, void 0, function() {
      var h, f, g, l, o;
      return t(this, function(u) {
        switch (u.label) {
          case 0:
            if (h = {
              url: s.url,
              headers: s.headers
            }, f = "status" in s, !f) return [3, 12];
            if (l = s.headers.get("content-type"), o = void 0, l !== null) return [3, 5];
            u.label = 1;
          case 1:
            return u.trys.push([1, 3, , 4]), [4, s.text()];
          case 2:
            return o = u.sent(), [3, 4];
          case 3:
            return u.sent(), o = "", [3, 4];
          case 4:
            return [3, 11];
          case 5:
            return l.includes("application/json") ? [4, s.json()] : [3, 7];
          case 6:
            return o = u.sent(), [3, 11];
          case 7:
            return l.includes("text/") ? [4, s.text()] : [3, 9];
          case 8:
            return o = u.sent(), [3, 11];
          case 9:
            return [4, s.blob()];
          case 10:
            o = u.sent(), u.label = 11;
          case 11:
            g = {
              data: o,
              status: s.status,
              statusText: s.statusText,
              headers: s.headers,
              config: h,
              request: void 0
            }, u.label = 12;
          case 12:
            return [
              2,
              n(
                f ? new Error("Request failed with status code " + s.status) : s,
                h,
                s.code,
                void 0,
                g
              )
            ];
        }
      });
    });
  }
  return qe.createAxiosErrorFromFetchResp = r, qe;
}
var Lr;
function Ni() {
  if (Lr) return de;
  Lr = 1;
  var e = de && de.__assign || function() {
    return e = Object.assign || function(b) {
      for (var S, m = 1, w = arguments.length; m < w; m++) {
        S = arguments[m];
        for (var k in S) Object.prototype.hasOwnProperty.call(S, k) && (b[k] = S[k]);
      }
      return b;
    }, e.apply(this, arguments);
  }, t = de && de.__awaiter || function(b, S, m, w) {
    function k(I) {
      return I instanceof m ? I : new m(function(R) {
        R(I);
      });
    }
    return new (m || (m = Promise))(function(I, R) {
      function T(E) {
        try {
          C(w.next(E));
        } catch (A) {
          R(A);
        }
      }
      function O(E) {
        try {
          C(w.throw(E));
        } catch (A) {
          R(A);
        }
      }
      function C(E) {
        E.done ? I(E.value) : k(E.value).then(T, O);
      }
      C((w = w.apply(b, S || [])).next());
    });
  }, n = de && de.__generator || function(b, S) {
    var m = {
      label: 0,
      sent: function() {
        if (I[0] & 1) throw I[1];
        return I[1];
      },
      trys: [],
      ops: []
    }, w, k, I, R;
    return R = { next: T(0), throw: T(1), return: T(2) }, typeof Symbol == "function" && (R[Symbol.iterator] = function() {
      return this;
    }), R;
    function T(C) {
      return function(E) {
        return O([C, E]);
      };
    }
    function O(C) {
      if (w) throw new TypeError("Generator is already executing.");
      for (; m; )
        try {
          if (w = 1, k && (I = C[0] & 2 ? k.return : C[0] ? k.throw || ((I = k.return) && I.call(k), 0) : k.next) && !(I = I.call(k, C[1])).done)
            return I;
          switch (k = 0, I && (C = [C[0] & 2, I.value]), C[0]) {
            case 0:
            case 1:
              I = C;
              break;
            case 4:
              return m.label++, { value: C[1], done: !1 };
            case 5:
              m.label++, k = C[1], C = [0];
              continue;
            case 7:
              C = m.ops.pop(), m.trys.pop();
              continue;
            default:
              if (I = m.trys, !(I = I.length > 0 && I[I.length - 1]) && (C[0] === 6 || C[0] === 2)) {
                m = 0;
                continue;
              }
              if (C[0] === 3 && (!I || C[1] > I[0] && C[1] < I[3])) {
                m.label = C[1];
                break;
              }
              if (C[0] === 6 && m.label < I[1]) {
                m.label = I[1], I = C;
                break;
              }
              if (I && m.label < I[2]) {
                m.label = I[2], m.ops.push(C);
                break;
              }
              I[2] && m.ops.pop(), m.trys.pop();
              continue;
          }
          C = S.call(b, m);
        } catch (E) {
          C = [6, E], k = 0;
        } finally {
          w = I = 0;
        }
      if (C[0] & 5) throw C[1];
      return { value: C[0] ? C[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(de, "__esModule", { value: !0 }), de.responseErrorInterceptor = de.responseInterceptor = de.interceptorFunctionRequestFulfilled = void 0;
  var r = Hi(), s = Xt(), h = Dn(), f = Ye(), g = Gt();
  function l(b) {
    b.__supertokensSessionRefreshAttempts === void 0 && (b.__supertokensSessionRefreshAttempts = 0), b.__supertokensSessionRefreshAttempts++;
  }
  function o(b) {
    return b.__supertokensSessionRefreshAttempts === void 0 && (b.__supertokensSessionRefreshAttempts = 0), b.__supertokensSessionRefreshAttempts >= s.default.config.maxRetryAttemptsForSessionRefresh;
  }
  function u(b) {
    var S = b.url === void 0 ? "" : b.url, m = b.baseURL;
    return m !== void 0 && (S.charAt(0) === "/" && m.charAt(m.length - 1) === "/" ? S = m + S.substr(1) : S.charAt(0) !== "/" && m.charAt(m.length - 1) !== "/" ? S = m + "/" + S : S = m + S), S;
  }
  function c(b) {
    return t(this, void 0, void 0, function() {
      var S, m, w, k, I, R;
      return n(this, function(T) {
        switch (T.label) {
          case 0:
            (0, g.logDebugMessage)("interceptorFunctionRequestFulfilled: started axios interception"), S = u(b), m = !1;
            try {
              m = typeof S == "string" && !s.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                S,
                s.default.config.apiDomain,
                s.default.config.sessionTokenBackendDomain
              );
            } catch (O) {
              if (O.message === "Please provide a valid domain name")
                (0, g.logDebugMessage)(
                  "interceptorFunctionRequestFulfilled: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                ), m = !s.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                  f.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                  s.default.config.apiDomain,
                  s.default.config.sessionTokenBackendDomain
                );
              else
                throw O;
            }
            return (0, g.logDebugMessage)("interceptorFunctionRequestFulfilled: Value of doNotDoInterception: " + m), m ? ((0, g.logDebugMessage)(
              "interceptorFunctionRequestFulfilled: Returning config unchanged"
            ), [2, b]) : ((0, g.logDebugMessage)("interceptorFunctionRequestFulfilled: Modifying config"), h.ProcessState.getInstance().addState(
              h.PROCESS_STATE.CALLING_INTERCEPTION_REQUEST
            ), [4, (0, s.getLocalSessionState)(!0)]);
          case 1:
            return w = T.sent(), k = b, w.status !== "EXISTS" ? [3, 3] : [4, s.AntiCsrfToken.getToken(w.lastAccessTokenUpdate)];
          case 2:
            I = T.sent(), I !== void 0 && ((0, g.logDebugMessage)(
              "interceptorFunctionRequestFulfilled: Adding anti-csrf token to request"
            ), k = e(e({}, k), {
              headers: k === void 0 ? {
                "anti-csrf": I
              } : e(e({}, k.headers), { "anti-csrf": I })
            })), T.label = 3;
          case 3:
            return s.default.config.autoAddCredentials && k.withCredentials === void 0 && ((0, g.logDebugMessage)(
              "interceptorFunctionRequestFulfilled: Adding credentials include"
            ), k = e(e({}, k), { withCredentials: !0 })), (0, g.logDebugMessage)("interceptorFunctionRequestFulfilled: Adding rid header: anti-csrf (it may be overriden by the user's provided rid)"), k = e(e({}, k), {
              headers: k === void 0 ? {
                rid: "anti-csrf"
              } : e({ rid: "anti-csrf" }, k.headers)
            }), R = s.default.config.tokenTransferMethod, (0, g.logDebugMessage)("interceptorFunctionRequestFulfilled: Adding st-auth-mode header: " + R), k.headers["st-auth-mode"] = R, [4, v(k)];
          case 4:
            return k = T.sent(), [4, p(k)];
          case 5:
            return T.sent(), (0, g.logDebugMessage)("interceptorFunctionRequestFulfilled: returning modified config"), [2, k];
        }
      });
    });
  }
  de.interceptorFunctionRequestFulfilled = c;
  function a(b) {
    var S = this;
    return function(m) {
      return t(S, void 0, void 0, function() {
        var w, k, I, R;
        return n(this, function(T) {
          switch (T.label) {
            case 0:
              if (w = !1, !s.default.initCalled)
                throw new Error("init function not called");
              (0, g.logDebugMessage)("responseInterceptor: started"), (0, g.logDebugMessage)("responseInterceptor: already intercepted: " + m.headers["x-supertokens-xhr-intercepted"]), k = u(m.config);
              try {
                w = typeof k == "string" && !s.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                  k,
                  s.default.config.apiDomain,
                  s.default.config.sessionTokenBackendDomain
                ) || !!m.headers["x-supertokens-xhr-intercepted"];
              } catch (O) {
                if (O.message === "Please provide a valid domain name")
                  (0, g.logDebugMessage)(
                    "responseInterceptor: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                  ), w = !s.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                    f.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                    s.default.config.apiDomain,
                    s.default.config.sessionTokenBackendDomain
                  ) || !!m.headers["x-supertokens-xhr-intercepted"];
                else
                  throw O;
              }
              return (0, g.logDebugMessage)("responseInterceptor: Value of doNotDoInterception: " + w), w ? ((0, g.logDebugMessage)("responseInterceptor: Returning without interception"), [2, m]) : ((0, g.logDebugMessage)("responseInterceptor: Interception started"), h.ProcessState.getInstance().addState(
                h.PROCESS_STATE.CALLING_INTERCEPTION_RESPONSE
              ), [4, (0, s.getLocalSessionState)(!1)]);
            case 1:
              return I = T.sent(), [4, y(m)];
            case 2:
              return T.sent(), (0, s.fireSessionUpdateEventsIfNecessary)(I.status === "EXISTS", m.status, m.headers["front-token"]), m.status !== s.default.config.sessionExpiredStatusCode ? [3, 3] : ((0, g.logDebugMessage)("responseInterceptor: Status code is: " + m.status), R = m.config, [
                2,
                d.doRequest(
                  function(O) {
                    return b(O);
                  },
                  R,
                  k,
                  m,
                  void 0,
                  !0
                )
              ]);
            case 3:
              return m.status !== s.default.config.invalidClaimStatusCode ? [3, 5] : [4, (0, s.onInvalidClaimResponse)(m)];
            case 4:
              T.sent(), T.label = 5;
            case 5:
              return [2, m];
          }
        });
      });
    };
  }
  de.responseInterceptor = a;
  function i(b) {
    var S = this;
    return function(m) {
      return t(S, void 0, void 0, function() {
        var w;
        return n(this, function(k) {
          switch (k.label) {
            case 0:
              if ((0, g.logDebugMessage)("responseErrorInterceptor: called"), (0, g.logDebugMessage)("responseErrorInterceptor: already intercepted: " + (m.response && m.response.headers["x-supertokens-xhr-intercepted"])), m.response === void 0 || m.response.headers["x-supertokens-xhr-intercepted"])
                throw m;
              return m.response !== void 0 && m.response.status === s.default.config.sessionExpiredStatusCode ? ((0, g.logDebugMessage)("responseErrorInterceptor: Status code is: " + m.response.status), w = m.config, [
                2,
                d.doRequest(
                  function(I) {
                    return b(I);
                  },
                  w,
                  u(w),
                  void 0,
                  m,
                  !0
                )
              ]) : [3, 1];
            case 1:
              return m.response !== void 0 && m.response.status === s.default.config.invalidClaimStatusCode ? [4, (0, s.onInvalidClaimResponse)(m.response)] : [3, 3];
            case 2:
              k.sent(), k.label = 3;
            case 3:
              throw m;
          }
        });
      });
    };
  }
  de.responseErrorInterceptor = i;
  var d = (
    /** @class */
    function() {
      function b() {
      }
      var S;
      return S = b, b.doRequest = function(m, w, k, I, R, T) {
        return T === void 0 && (T = !1), t(void 0, void 0, void 0, function() {
          var O, C, E, A, G, Y, ae, se, j, U, L, j, N, B, Q;
          return n(S, function(_) {
            switch (_.label) {
              case 0:
                if (!s.default.initCalled)
                  throw Error("init function not called");
                (0, g.logDebugMessage)("doRequest: called"), O = !1;
                try {
                  O = typeof k == "string" && !s.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                    k,
                    s.default.config.apiDomain,
                    s.default.config.sessionTokenBackendDomain
                  ) && T;
                } catch ($) {
                  if ($.message === "Please provide a valid domain name")
                    (0, g.logDebugMessage)(
                      "doRequest: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                    ), O = !s.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                      f.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                      s.default.config.apiDomain,
                      s.default.config.sessionTokenBackendDomain
                    ) && T;
                  else
                    throw $;
                }
                if ((0, g.logDebugMessage)("doRequest: Value of doNotDoInterception: " + O), !O) return [3, 2];
                if ((0, g.logDebugMessage)("doRequest: Returning without interception"), R !== void 0)
                  throw R;
                return I !== void 0 ? [2, I] : [4, m(w)];
              case 1:
                return [2, _.sent()];
              case 2:
                return (0, g.logDebugMessage)("doRequest: Interception started"), [4, v(w)];
              case 3:
                w = _.sent(), C = void 0, _.label = 4;
              case 4:
                return [4, (0, s.getLocalSessionState)(!0)];
              case 5:
                return E = _.sent(), A = w, E.status !== "EXISTS" ? [3, 7] : [4, s.AntiCsrfToken.getToken(E.lastAccessTokenUpdate)];
              case 6:
                G = _.sent(), G !== void 0 && ((0, g.logDebugMessage)("doRequest: Adding anti-csrf token to request"), A = e(e({}, A), {
                  headers: A === void 0 ? {
                    "anti-csrf": G
                  } : e(e({}, A.headers), {
                    "anti-csrf": G
                  })
                })), _.label = 7;
              case 7:
                return s.default.config.autoAddCredentials && A.withCredentials === void 0 && ((0, g.logDebugMessage)("doRequest: Adding credentials include"), A = e(e({}, A), { withCredentials: !0 })), (0, g.logDebugMessage)("doRequest: Adding rid header: anti-csrf (May get overriden by user's rid)"), A = e(e({}, A), {
                  headers: A === void 0 ? {
                    rid: "anti-csrf"
                  } : e({ rid: "anti-csrf" }, A.headers)
                }), Y = s.default.config.tokenTransferMethod, (0, g.logDebugMessage)("doRequest: Adding st-auth-mode header: " + Y), A.headers["st-auth-mode"] = Y, [4, p(A)];
              case 8:
                _.sent(), _.label = 9;
              case 9:
                if (_.trys.push([9, 14, , 27]), ae = R, se = I, R = void 0, I = void 0, ae !== void 0)
                  throw (0, g.logDebugMessage)(
                    "doRequest: Not making call because localPrevError is not undefined"
                  ), ae;
                return se !== void 0 ? (0, g.logDebugMessage)(
                  "doRequest: Not making call because localPrevResponse is not undefined"
                ) : (0, g.logDebugMessage)("doRequest: Making user's http call"), se !== void 0 ? [3, 11] : [4, m(A)];
              case 10:
                return U = _.sent(), [3, 12];
              case 11:
                U = se, _.label = 12;
              case 12:
                return j = U, (0, g.logDebugMessage)("doRequest: User's http call ended"), [4, y(j)];
              case 13:
                return _.sent(), (0, s.fireSessionUpdateEventsIfNecessary)(E.status === "EXISTS", j.status, j.headers["front-token"]), [2, j];
              case 14:
                return L = _.sent(), j = L.response, j === void 0 ? [3, 25] : [4, y(j)];
              case 15:
                if (_.sent(), (0, s.fireSessionUpdateEventsIfNecessary)(E.status === "EXISTS", j.status, j.headers["front-token"]), j.status !== s.default.config.sessionExpiredStatusCode)
                  return [3, 21];
                if ((0, g.logDebugMessage)("doRequest: Status code is: " + j.status), o(w))
                  throw (0, g.logDebugMessage)(
                    "doRequest: Maximum session refresh attempts reached. sessionRefreshAttempts: ".concat(
                      w.__supertokensSessionRefreshAttempts,
                      ", maxRetryAttemptsForSessionRefresh: "
                    ).concat(s.default.config.maxRetryAttemptsForSessionRefresh)
                  ), N = "Received a 401 response from ".concat(
                    k,
                    ". Attempted to refresh the session and retry the request with the updated session tokens "
                  ).concat(
                    s.default.config.maxRetryAttemptsForSessionRefresh,
                    " times, but each attempt resulted in a 401 error. The maximum session refresh limit has been reached. Please investigate your API. To increase the session refresh attempts, update maxRetryAttemptsForSessionRefresh in the config."
                  ), console.error(N), new Error(N);
                return [4, (0, s.onUnauthorisedResponse)(E)];
              case 16:
                return B = _.sent(), l(w), (0, g.logDebugMessage)("doRequest: sessionRefreshAttempts: " + w.__supertokensSessionRefreshAttempts), B.result === "RETRY" ? [3, 20] : ((0, g.logDebugMessage)("doRequest: Not retrying original request"), B.error === void 0 ? [3, 18] : [4, (0, r.createAxiosErrorFromFetchResp)(B.error)]);
              case 17:
                return Q = _.sent(), [3, 19];
              case 18:
                Q = L, _.label = 19;
              case 19:
                return C = Q, [3, 28];
              case 20:
                return (0, g.logDebugMessage)("doRequest: Retrying original request"), [3, 24];
              case 21:
                return j.status !== s.default.config.invalidClaimStatusCode ? [3, 23] : [4, (0, s.onInvalidClaimResponse)(j)];
              case 22:
                _.sent(), _.label = 23;
              case 23:
                throw L;
              case 24:
                return [3, 26];
              case 25:
                throw L;
              case 26:
                return [3, 27];
              case 27:
                return [3, 4];
              case 28:
                throw C;
            }
          });
        });
      }, b;
    }()
  );
  de.default = d;
  function p(b) {
    return t(this, void 0, void 0, function() {
      var S, m;
      return n(this, function(w) {
        switch (w.label) {
          case 0:
            return b.headers === void 0 && (b.headers = {}), (0, g.logDebugMessage)("setAuthorizationHeaderIfRequired: adding existing tokens as header"), [4, (0, s.getTokenForHeaderAuth)("access")];
          case 1:
            return S = w.sent(), [4, (0, s.getTokenForHeaderAuth)("refresh")];
          case 2:
            return m = w.sent(), S !== void 0 && m !== void 0 ? b.headers.Authorization !== void 0 || b.headers.authorization !== void 0 ? (0, g.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: Authorization header defined by the user, not adding"
            ) : ((0, g.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: added authorization header"
            ), b.headers = e(e({}, b.headers), {
              Authorization: "Bearer ".concat(S)
            }), b.__supertokensAddedAuthHeader = !0) : (0, g.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: token for header based auth not found"
            ), [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function y(b) {
    return t(this, void 0, void 0, function() {
      var S, m, w, k, I, R;
      return n(this, function(T) {
        switch (T.label) {
          case 0:
            return (0, g.logDebugMessage)("saveTokensFromHeaders: Saving updated tokens from the response"), S = b.headers["st-refresh-token"], S === void 0 ? [3, 2] : ((0, g.logDebugMessage)("saveTokensFromHeaders: saving new refresh token"), [4, (0, s.setToken)("refresh", S)]);
          case 1:
            T.sent(), T.label = 2;
          case 2:
            return m = b.headers["st-access-token"], m === void 0 ? [3, 4] : ((0, g.logDebugMessage)("saveTokensFromHeaders: saving new access token"), [4, (0, s.setToken)("access", m)]);
          case 3:
            T.sent(), T.label = 4;
          case 4:
            return w = b.headers["front-token"], w === void 0 ? [3, 6] : ((0, g.logDebugMessage)("doRequest: Setting sFrontToken: " + w), [4, s.FrontToken.setItem(w)]);
          case 5:
            T.sent(), k = new Headers(), Object.entries(b.headers).forEach(function(O) {
              var C = O[0], E = O[1];
              Array.isArray(E) ? E.forEach(function(A) {
                return k.append(C, A);
              }) : k.append(C, E);
            }), (0, s.updateClockSkewUsingFrontToken)({ frontToken: w, responseHeaders: k }), T.label = 6;
          case 6:
            return I = b.headers["anti-csrf"], I === void 0 ? [3, 9] : [4, (0, s.getLocalSessionState)(!1)];
          case 7:
            return R = T.sent(), R.status !== "EXISTS" ? [3, 9] : ((0, g.logDebugMessage)("doRequest: Setting anti-csrf token"), [4, s.AntiCsrfToken.setItem(R.lastAccessTokenUpdate, I)]);
          case 8:
            T.sent(), T.label = 9;
          case 9:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function v(b) {
    return t(this, void 0, void 0, function() {
      var S, m, w, k;
      return n(this, function(I) {
        switch (I.label) {
          case 0:
            return [4, (0, s.getTokenForHeaderAuth)("access")];
          case 1:
            return S = I.sent(), [4, (0, s.getTokenForHeaderAuth)("refresh")];
          case 2:
            return m = I.sent(), w = b.headers.Authorization || b.headers.authorization, S !== void 0 && m !== void 0 && (w === "Bearer ".concat(S) || "__supertokensAddedAuthHeader" in b) ? ((0, g.logDebugMessage)(
              "removeAuthHeaderIfMatchesLocalToken: Removing Authorization from user provided headers because it contains our access token"
            ), k = e(e({}, b), { headers: e({}, b.headers) }), delete k.headers.authorization, delete k.headers.Authorization, [2, k]) : [2, b];
        }
      });
    });
  }
  return de;
}
var Ve = {}, Mr;
function ji() {
  if (Mr) return Ve;
  Mr = 1;
  var e = Ve && Ve.__awaiter || function(a, i, d, p) {
    function y(v) {
      return v instanceof d ? v : new d(function(b) {
        b(v);
      });
    }
    return new (d || (d = Promise))(function(v, b) {
      function S(k) {
        try {
          w(p.next(k));
        } catch (I) {
          b(I);
        }
      }
      function m(k) {
        try {
          w(p.throw(k));
        } catch (I) {
          b(I);
        }
      }
      function w(k) {
        k.done ? v(k.value) : y(k.value).then(S, m);
      }
      w((p = p.apply(a, i || [])).next());
    });
  }, t = Ve && Ve.__generator || function(a, i) {
    var d = {
      label: 0,
      sent: function() {
        if (v[0] & 1) throw v[1];
        return v[1];
      },
      trys: [],
      ops: []
    }, p, y, v, b;
    return b = { next: S(0), throw: S(1), return: S(2) }, typeof Symbol == "function" && (b[Symbol.iterator] = function() {
      return this;
    }), b;
    function S(w) {
      return function(k) {
        return m([w, k]);
      };
    }
    function m(w) {
      if (p) throw new TypeError("Generator is already executing.");
      for (; d; )
        try {
          if (p = 1, y && (v = w[0] & 2 ? y.return : w[0] ? y.throw || ((v = y.return) && v.call(y), 0) : y.next) && !(v = v.call(y, w[1])).done)
            return v;
          switch (y = 0, v && (w = [w[0] & 2, v.value]), w[0]) {
            case 0:
            case 1:
              v = w;
              break;
            case 4:
              return d.label++, { value: w[1], done: !1 };
            case 5:
              d.label++, y = w[1], w = [0];
              continue;
            case 7:
              w = d.ops.pop(), d.trys.pop();
              continue;
            default:
              if (v = d.trys, !(v = v.length > 0 && v[v.length - 1]) && (w[0] === 6 || w[0] === 2)) {
                d = 0;
                continue;
              }
              if (w[0] === 3 && (!v || w[1] > v[0] && w[1] < v[3])) {
                d.label = w[1];
                break;
              }
              if (w[0] === 6 && d.label < v[1]) {
                d.label = v[1], v = w;
                break;
              }
              if (v && d.label < v[2]) {
                d.label = v[2], d.ops.push(w);
                break;
              }
              v[2] && d.ops.pop(), d.trys.pop();
              continue;
          }
          w = i.call(a, d);
        } catch (k) {
          w = [6, k], y = 0;
        } finally {
          p = v = 0;
        }
      if (w[0] & 5) throw w[1];
      return { value: w[0] ? w[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Ve, "__esModule", { value: !0 }), Ve.addInterceptorsToXMLHttpRequest = void 0;
  var n = Xt(), r = Gt(), s = Ye(), h = Dn(), f = ["readystatechange", "abort", "error", "load", "loadend", "loadstart", "progress", "timeout"];
  function g() {
    var a = new Promise(function(d) {
      return setTimeout(d, 0);
    }), i = XMLHttpRequest;
    (0, r.logDebugMessage)("addInterceptorsToXMLHttpRequest called"), XMLHttpRequest = function() {
      var d = new i(), p = this, y = [], v = [], b = {}, S, m = /* @__PURE__ */ new Map(), w = a;
      function k(U) {
        w = w.finally(function() {
          var L;
          return (L = U()) === null || L === void 0 ? void 0 : L.catch(function(j) {
            var N = new ProgressEvent("error");
            N.error = j, p.onerror !== void 0 && p.onerror !== null && p.onerror(N), E("error", N);
          });
        });
      }
      var I = "", R = !1, T = void 0, O, C = 0;
      p.onload = null, p.onreadystatechange = null, p.onloadend = null, p.addEventListener = function(U, L, j) {
        var N = m.get(U);
        N === void 0 && (N = /* @__PURE__ */ new Set(), m.set(U, N)), N.add(L);
      }, p.removeEventListener = function(U, L) {
        var j = m.get(U);
        j === void 0 && (j = /* @__PURE__ */ new Set(), m.set(U, j)), j.delete(L);
      };
      function E(U, L) {
        var j = m.get(U);
        (0, r.logDebugMessage)(
          "XHRInterceptor dispatching ".concat(L.type, " to ").concat(j ? j.size : 0, " listeners")
        ), j && Array.from(j).forEach(function(N) {
          return N.apply(p, [L]);
        });
      }
      function A() {
        return e(this, void 0, void 0, function() {
          var U, L, j;
          return t(this, function(N) {
            switch (N.label) {
              case 0:
                if (T === void 0)
                  throw new Error("Should never come here..");
                if ((0, r.logDebugMessage)("XHRInterceptor.handleRetryPostRefreshing: preRequestLSS " + T.status), C >= n.default.config.maxRetryAttemptsForSessionRefresh)
                  throw (0, r.logDebugMessage)(
                    "XHRInterceptor.handleRetryPostRefreshing: Maximum session refresh attempts reached. sessionRefreshAttempts: ".concat(C, ", maxRetryAttemptsForSessionRefresh: ").concat(n.default.config.maxRetryAttemptsForSessionRefresh)
                  ), b.status = 0, b.statusText = "", b.responseType = "", U = "Received a 401 response from ".concat(
                    I,
                    ". Attempted to refresh the session and retry the request with the updated session tokens "
                  ).concat(
                    n.default.config.maxRetryAttemptsForSessionRefresh,
                    " times, but each attempt resulted in a 401 error. The maximum session refresh limit has been reached. Please investigate your API. To increase the session refresh attempts, update maxRetryAttemptsForSessionRefresh in the config."
                  ), console.error(U), new Error(U);
                return [4, (0, n.onUnauthorisedResponse)(T)];
              case 1:
                if (L = N.sent(), C++, (0, r.logDebugMessage)("XHRInterceptor.handleRetryPostRefreshing: sessionRefreshAttempts: " + C), L.result !== "RETRY") {
                  if ((0, r.logDebugMessage)(
                    "XHRInterceptor.handleRetryPostRefreshing: Not retrying original request " + !!L.error
                  ), L.error !== void 0)
                    throw L.error;
                  return [2, !0];
                }
                return (0, r.logDebugMessage)("XHRInterceptor.handleRetryPostRefreshing: Retrying original request"), j = new i(), ae(p, j, !0), y.forEach(function(B) {
                  B(j);
                }), se(j, O), [2, !1];
            }
          });
        });
      }
      function G(U) {
        return e(this, void 0, void 0, function() {
          var L, j, N, B, Q;
          return t(this, function(_) {
            switch (_.label) {
              case 0:
                if (R)
                  return (0, r.logDebugMessage)(
                    "XHRInterceptor.handleResponse: Returning without interception"
                  ), [2, !0];
                _.label = 1;
              case 1:
                return _.trys.push([1, 7, , 11]), (0, r.logDebugMessage)("XHRInterceptor.handleResponse: Interception started"), h.ProcessState.getInstance().addState(
                  h.PROCESS_STATE.CALLING_INTERCEPTION_RESPONSE
                ), L = U.status, j = c(U), [4, u(j)];
              case 2:
                return _.sent(), (0, n.fireSessionUpdateEventsIfNecessary)(T.status === "EXISTS", L, j.get("front-token")), L !== n.default.config.sessionExpiredStatusCode ? [3, 4] : ((0, r.logDebugMessage)("responseInterceptor: Status code is: " + L), [4, A()]);
              case 3:
                return [2, _.sent()];
              case 4:
                return L !== n.default.config.invalidClaimStatusCode ? [3, 6] : [4, (0, n.onInvalidClaimResponse)({ data: U.responseText })];
              case 5:
                _.sent(), _.label = 6;
              case 6:
                return [2, !0];
              case 7:
                return N = _.sent(), (0, r.logDebugMessage)("XHRInterceptor.handleResponse: caught error"), N.status === void 0 ? [3, 9] : [4, l(N)];
              case 8:
                if (B = _.sent(), b.status = B.status, b.statusText = B.statusText, b.responseType = B.responseType, S = B.headers, B.responseType === "json")
                  try {
                    b.response = JSON.parse(B.responseText);
                  } catch {
                    b.response = B.responseText;
                  }
                else
                  b.response = B.responseText;
                return b.responseText = B.responseText, [3, 10];
              case 9:
                Q = new ProgressEvent("error"), Q.error = N, p.onerror !== void 0 && p.onerror !== null && p.onerror(Q), E("error", Q), _.label = 10;
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
      p.open = function(U, L) {
        (0, r.logDebugMessage)("XHRInterceptor.open called");
        var j = arguments;
        I = L;
        try {
          R = typeof I == "string" && !n.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
            I,
            n.default.config.apiDomain,
            n.default.config.sessionTokenBackendDomain
          ) || typeof I != "string" && !n.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
            I.toString(),
            n.default.config.apiDomain,
            n.default.config.sessionTokenBackendDomain
          );
        } catch (N) {
          if (N.message === "Please provide a valid domain name")
            (0, r.logDebugMessage)(
              "XHRInterceptor.open: Trying shouldDoInterceptionBasedOnUrl with location.origin"
            ), R = !n.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
              s.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
              n.default.config.apiDomain,
              n.default.config.sessionTokenBackendDomain
            );
          else
            throw N;
        }
        k(function() {
          y.push(function(N) {
            N.open.apply(N, j);
          }), d.open.apply(d, j);
        });
      }, p.send = function(U) {
        O = U, se(d, O);
      }, p.setRequestHeader = function(U, L) {
        var j = this;
        if ((0, r.logDebugMessage)("XHRInterceptor.setRequestHeader: Called with ".concat(U)), R) {
          k(function() {
            return d.setRequestHeader(U, L);
          });
          return;
        }
        U !== "anti-csrf" && k(function() {
          return e(j, void 0, void 0, function() {
            var N, B;
            return t(this, function(Q) {
              switch (Q.label) {
                case 0:
                  return U.toLowerCase() !== "authorization" ? [3, 3] : ((0, r.logDebugMessage)("XHRInterceptor.setRequestHeader: checking if user provided auth header matches local token"), [4, (0, n.getTokenForHeaderAuth)("access")]);
                case 1:
                  return N = Q.sent(), [4, (0, n.getTokenForHeaderAuth)("refresh")];
                case 2:
                  if (B = Q.sent(), N !== void 0 && B !== void 0 && L === "Bearer ".concat(N))
                    return (0, r.logDebugMessage)(
                      "XHRInterceptor.setRequestHeader: skipping Authorization from user provided headers because it contains our access token"
                    ), [
                      2
                      /*return*/
                    ];
                  Q.label = 3;
                case 3:
                  return y.push(function(_) {
                    _.setRequestHeader(U, L);
                  }), v.push({ name: U, value: L }), d.setRequestHeader(U, L), [
                    2
                    /*return*/
                  ];
              }
            });
          });
        });
      };
      var Y = void 0;
      ae(p, d, !1);
      function ae(U, L, j) {
        var N, B = ["load", "loadend", "readystatechange"];
        (0, r.logDebugMessage)("XHRInterceptor.setUpXHR called");
        for (var Q = function(M) {
          (0, r.logDebugMessage)("XHRInterceptor added listener for event ".concat(M)), L.addEventListener(M, function(W) {
            (0, r.logDebugMessage)("XHRInterceptor got event ".concat(M)), B.includes(M) || E(M, W);
          });
        }, _ = 0, $ = f; _ < $.length; _++) {
          var P = $[_];
          Q(P);
        }
        if (L.onload = function(M) {
          N === void 0 && (N = G(L)), N.then(function(W) {
            W && (U.onload && U.onload(M), E("load", M));
          });
        }, L.onreadystatechange = function(M) {
          L.readyState === i.DONE ? (N === void 0 && (N = G(L)), N.then(function(W) {
            W && (U.onreadystatechange && U.onreadystatechange(M), E("readystatechange", M));
          })) : (U.onreadystatechange && U.onreadystatechange(M), E("readystatechange", M));
        }, L.onloadend = function(M) {
          N === void 0 && (N = G(L)), N.then(function(W) {
            W && (U.onloadend && U.onloadend(M), E("loadend", M));
          });
        }, U.getAllResponseHeaders = function() {
          var M;
          return S ? (M = "", S.forEach(function(W, F) {
            return M += "".concat(F, ": ").concat(W, `\r
`);
          })) : M = L.getAllResponseHeaders(), M + `x-supertokens-xhr-intercepted: true\r
`;
        }, U.getResponseHeader = function(M) {
          return M === "x-supertokens-xhr-intercepted" ? "true" : S ? S.get(M) : L.getResponseHeader(M);
        }, Y === void 0) {
          Y = [];
          for (var x in L)
            x in U || Y.push(x);
        }
        for (var D = function(M) {
          typeof L[M] == "function" ? Object.defineProperty(U, M, {
            configurable: !0,
            value: function() {
              var W = arguments;
              return j || y.push(function(F) {
                F[M].apply(F, W);
              }), L[M].apply(L, W);
            }
          }) : Object.defineProperty(U, M, {
            configurable: !0,
            get: function() {
              return b[M] !== void 0 ? b[M] : L[M];
            },
            set: function(W) {
              j || y.push(function(F) {
                F[M] = W;
              }), (0, r.logDebugMessage)("XHRInterceptor.set[".concat(M, "] = ").concat(W)), L[M] = W;
            }
          });
        }, H = 0, q = Y; H < q.length; H++) {
          var x = q[H];
          D(x);
        }
      }
      function se(U, L) {
        var j = this;
        if ((0, r.logDebugMessage)("XHRInterceptor.send: called"), (0, r.logDebugMessage)("XHRInterceptor.send: Value of doNotDoInterception: " + R), R) {
          (0, r.logDebugMessage)("XHRInterceptor.send: Returning without interception"), k(function() {
            return U.send(L);
          });
          return;
        }
        (0, r.logDebugMessage)("XHRInterceptor.send: Interception started"), h.ProcessState.getInstance().addState(
          h.PROCESS_STATE.CALLING_INTERCEPTION_REQUEST
        ), k(function() {
          return e(j, void 0, void 0, function() {
            var N, B;
            return t(this, function(Q) {
              switch (Q.label) {
                case 0:
                  return [4, (0, n.getLocalSessionState)(!0)];
                case 1:
                  return T = Q.sent(), T.status !== "EXISTS" ? [3, 3] : [
                    4,
                    n.AntiCsrfToken.getToken(T.lastAccessTokenUpdate)
                  ];
                case 2:
                  N = Q.sent(), N !== void 0 && ((0, r.logDebugMessage)(
                    "XHRInterceptor.send: Adding anti-csrf token to request"
                  ), U.setRequestHeader("anti-csrf", N)), Q.label = 3;
                case 3:
                  return n.default.config.autoAddCredentials && ((0, r.logDebugMessage)("XHRInterceptor.send: Adding credentials include"), p.withCredentials = !0), v.some(function(_) {
                    return _.name === "rid";
                  }) ? (0, r.logDebugMessage)(
                    "XHRInterceptor.send: rid header was already there in request"
                  ) : ((0, r.logDebugMessage)("XHRInterceptor.send: Adding rid header: anti-csrf"), U.setRequestHeader("rid", "anti-csrf")), B = n.default.config.tokenTransferMethod, v.some(function(_) {
                    return _.name === "st-auth-mode";
                  }) ? (0, r.logDebugMessage)(
                    "XHRInterceptor.send: st-auth-mode header was already there in request"
                  ) : ((0, r.logDebugMessage)(
                    "XHRInterceptor.send: Adding st-auth-mode header: " + B
                  ), U.setRequestHeader("st-auth-mode", B)), [4, o(U, v)];
                case 4:
                  return Q.sent(), (0, r.logDebugMessage)("XHRInterceptor.send: Making user's http call"), [2, U.send(L)];
              }
            });
          });
        });
      }
    }, XMLHttpRequest.__interceptedBySuperTokens = !0, XMLHttpRequest.__original = i;
  }
  Ve.addInterceptorsToXMLHttpRequest = g;
  function l(a) {
    return e(this, void 0, void 0, function() {
      var i, d, p, y, v;
      return t(this, function(b) {
        switch (b.label) {
          case 0:
            if (i = a.headers.get("content-type"), d = "", p = "text", i !== null) return [3, 5];
            b.label = 1;
          case 1:
            return b.trys.push([1, 3, , 4]), [4, a.text()];
          case 2:
            return d = b.sent(), [3, 4];
          case 3:
            return b.sent(), d = "", [3, 4];
          case 4:
            return [3, 9];
          case 5:
            return i.includes("application/json") ? (p = "json", v = (y = JSON).stringify, [4, a.json()]) : [3, 7];
          case 6:
            return d = v.apply(y, [b.sent()]), [3, 9];
          case 7:
            return i.includes("text/") ? [4, a.text()] : [3, 9];
          case 8:
            d = b.sent(), b.label = 9;
          case 9:
            return [
              2,
              {
                status: a.status,
                responseText: d,
                statusText: a.statusText,
                responseType: p,
                headers: a.headers
              }
            ];
        }
      });
    });
  }
  function o(a, i) {
    return e(this, void 0, void 0, function() {
      var d, p;
      return t(this, function(y) {
        switch (y.label) {
          case 0:
            return (0, r.logDebugMessage)("setAuthorizationHeaderIfRequired: adding existing tokens as header"), [4, (0, n.getTokenForHeaderAuth)("access")];
          case 1:
            return d = y.sent(), [4, (0, n.getTokenForHeaderAuth)("refresh")];
          case 2:
            return p = y.sent(), d !== void 0 && p !== void 0 ? i.some(function(v) {
              var b = v.name;
              return b.toLowerCase() === "authorization";
            }) ? (0, r.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: Authorization header defined by the user, not adding"
            ) : d !== void 0 && ((0, r.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: added authorization header"
            ), a.setRequestHeader("Authorization", "Bearer ".concat(d))) : (0, r.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: token for header based auth not found"
            ), [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function u(a) {
    return e(this, void 0, void 0, function() {
      var i, d, p, y, v;
      return t(this, function(b) {
        switch (b.label) {
          case 0:
            return (0, r.logDebugMessage)("saveTokensFromHeaders: Saving updated tokens from the response"), i = a.get("st-refresh-token"), i === null ? [3, 2] : ((0, r.logDebugMessage)("saveTokensFromHeaders: saving new refresh token"), [4, (0, n.setToken)("refresh", i)]);
          case 1:
            b.sent(), b.label = 2;
          case 2:
            return d = a.get("st-access-token"), d === null ? [3, 4] : ((0, r.logDebugMessage)("saveTokensFromHeaders: saving new access token"), [4, (0, n.setToken)("access", d)]);
          case 3:
            b.sent(), b.label = 4;
          case 4:
            return p = a.get("front-token"), p === null ? [3, 6] : ((0, r.logDebugMessage)("saveTokensFromHeaders: Setting sFrontToken: " + p), [4, n.FrontToken.setItem(p)]);
          case 5:
            b.sent(), (0, n.updateClockSkewUsingFrontToken)({ frontToken: p, responseHeaders: a }), b.label = 6;
          case 6:
            return y = a.get("anti-csrf"), y === null ? [3, 9] : [4, (0, n.getLocalSessionState)(!1)];
          case 7:
            return v = b.sent(), v.status !== "EXISTS" ? [3, 9] : ((0, r.logDebugMessage)("saveTokensFromHeaders: Setting anti-csrf token"), [4, n.AntiCsrfToken.setItem(v.lastAccessTokenUpdate, y)]);
          case 8:
            b.sent(), b.label = 9;
          case 9:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function c(a) {
    return new Headers(
      a.getAllResponseHeaders().split(`\r
`).map(function(i) {
        var d = i.indexOf(": ");
        return d === -1 ? ["", ""] : [i.slice(0, d), i.slice(d + 2)];
      }).filter(function(i) {
        return i[0].length !== 0;
      })
    );
  }
  return Ve;
}
var Ur;
function Fi() {
  if (Ur) return Ae;
  Ur = 1;
  var e = Ae && Ae.__assign || function() {
    return e = Object.assign || function(p) {
      for (var y, v = 1, b = arguments.length; v < b; v++) {
        y = arguments[v];
        for (var S in y) Object.prototype.hasOwnProperty.call(y, S) && (p[S] = y[S]);
      }
      return p;
    }, e.apply(this, arguments);
  }, t = Ae && Ae.__awaiter || function(p, y, v, b) {
    function S(m) {
      return m instanceof v ? m : new v(function(w) {
        w(m);
      });
    }
    return new (v || (v = Promise))(function(m, w) {
      function k(T) {
        try {
          R(b.next(T));
        } catch (O) {
          w(O);
        }
      }
      function I(T) {
        try {
          R(b.throw(T));
        } catch (O) {
          w(O);
        }
      }
      function R(T) {
        T.done ? m(T.value) : S(T.value).then(k, I);
      }
      R((b = b.apply(p, y || [])).next());
    });
  }, n = Ae && Ae.__generator || function(p, y) {
    var v = {
      label: 0,
      sent: function() {
        if (m[0] & 1) throw m[1];
        return m[1];
      },
      trys: [],
      ops: []
    }, b, S, m, w;
    return w = { next: k(0), throw: k(1), return: k(2) }, typeof Symbol == "function" && (w[Symbol.iterator] = function() {
      return this;
    }), w;
    function k(R) {
      return function(T) {
        return I([R, T]);
      };
    }
    function I(R) {
      if (b) throw new TypeError("Generator is already executing.");
      for (; v; )
        try {
          if (b = 1, S && (m = R[0] & 2 ? S.return : R[0] ? S.throw || ((m = S.return) && m.call(S), 0) : S.next) && !(m = m.call(S, R[1])).done)
            return m;
          switch (S = 0, m && (R = [R[0] & 2, m.value]), R[0]) {
            case 0:
            case 1:
              m = R;
              break;
            case 4:
              return v.label++, { value: R[1], done: !1 };
            case 5:
              v.label++, S = R[1], R = [0];
              continue;
            case 7:
              R = v.ops.pop(), v.trys.pop();
              continue;
            default:
              if (m = v.trys, !(m = m.length > 0 && m[m.length - 1]) && (R[0] === 6 || R[0] === 2)) {
                v = 0;
                continue;
              }
              if (R[0] === 3 && (!m || R[1] > m[0] && R[1] < m[3])) {
                v.label = R[1];
                break;
              }
              if (R[0] === 6 && v.label < m[1]) {
                v.label = m[1], m = R;
                break;
              }
              if (m && v.label < m[2]) {
                v.label = m[2], v.ops.push(R);
                break;
              }
              m[2] && v.ops.pop(), v.trys.pop();
              continue;
          }
          R = y.call(p, v);
        } catch (T) {
          R = [6, T], S = 0;
        } finally {
          b = m = 0;
        }
      if (R[0] & 5) throw R[1];
      return { value: R[0] ? R[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Ae, "__esModule", { value: !0 });
  var r = Xt(), s = Ni(), h = Ln(), f = Gt(), g = Ho(), l = ji(), o = xn(), u = St(), c = Un(), a = 100, i = "CLAIM_REFRESH_LOCK";
  function d(p) {
    return {
      addXMLHttpRequestInterceptor: function(y) {
        (0, f.logDebugMessage)("addXMLHttpRequestInterceptorAndReturnModified: called"), (0, l.addInterceptorsToXMLHttpRequest)();
      },
      addFetchInterceptorsAndReturnModifiedFetch: function(y) {
        return (0, f.logDebugMessage)("addFetchInterceptorsAndReturnModifiedFetch: called"), function(v, b) {
          return t(this, void 0, void 0, function() {
            return n(this, function(S) {
              switch (S.label) {
                case 0:
                  return [
                    4,
                    r.default.doRequest(
                      function(m) {
                        return y.originalFetch(
                          typeof v == "object" && "clone" in v ? v.clone() : v,
                          e({}, m)
                        );
                      },
                      b,
                      v
                    )
                  ];
                case 1:
                  return [2, S.sent()];
              }
            });
          });
        };
      },
      addAxiosInterceptors: function(y) {
        if ((0, f.logDebugMessage)("addAxiosInterceptors: called"), XMLHttpRequest.__interceptedBySuperTokens) {
          console.warn(
            "Not adding axios interceptor since XMLHttpRequest is already added. This is just a warning."
          ), console.warn("Our axios and XMLHttpRequest interceptors cannot be used at the same time."), console.warn(
            "Since XMLHttpRequest is added automatically and supports axios by default, you can just remove addAxiosInterceptors from your code."
          ), console.warn(
            "If you want to continue using our axios interceptor, you can override addXMLHttpRequestInterceptor with an empty function."
          ), (0, f.logDebugMessage)(
            "addAxiosInterceptors: not adding, because XHR interceptors are already in place"
          );
          return;
        }
        for (var v = y.axiosInstance.interceptors.request, b = 0; b < v.handlers.length; b++)
          if (v.handlers[b].fulfilled === s.interceptorFunctionRequestFulfilled) {
            (0, f.logDebugMessage)(
              "addAxiosInterceptors: not adding because already added on this instance"
            );
            return;
          }
        y.axiosInstance.interceptors.request.use(s.interceptorFunctionRequestFulfilled, function(S) {
          return t(this, void 0, void 0, function() {
            return n(this, function(m) {
              throw S;
            });
          });
        }), y.axiosInstance.interceptors.response.use(
          (0, s.responseInterceptor)(y.axiosInstance),
          (0, s.responseErrorInterceptor)(y.axiosInstance)
        );
      },
      getUserId: function(y) {
        return t(this, void 0, void 0, function() {
          var v;
          return n(this, function(b) {
            switch (b.label) {
              case 0:
                return (0, f.logDebugMessage)("getUserId: called"), [4, r.FrontToken.getTokenInfo()];
              case 1:
                if (v = b.sent(), v === void 0)
                  throw new Error("No session exists");
                return (0, f.logDebugMessage)("getUserId: returning: " + v.uid), [2, v.uid];
            }
          });
        });
      },
      getAccessTokenPayloadSecurely: function(y) {
        return t(this, void 0, void 0, function() {
          var v, b;
          return n(this, function(S) {
            switch (S.label) {
              case 0:
                return (0, f.logDebugMessage)("getAccessTokenPayloadSecurely: called"), [4, r.FrontToken.getTokenInfo()];
              case 1:
                if (v = S.sent(), v === void 0)
                  throw new Error("No session exists");
                return v.ate < u.default.getReferenceOrThrow().dateProvider.now() ? ((0, f.logDebugMessage)("getAccessTokenPayloadSecurely: access token expired. Refreshing session"), [4, r.default.attemptRefreshingSession()]) : [3, 5];
              case 2:
                return b = S.sent(), b ? [
                  4,
                  this.getAccessTokenPayloadSecurely({
                    userContext: y.userContext
                  })
                ] : [3, 4];
              case 3:
                return [2, S.sent()];
              case 4:
                throw new Error("Could not refresh session");
              case 5:
                return (0, f.logDebugMessage)("getAccessTokenPayloadSecurely: returning: " + JSON.stringify(v.up)), [2, v.up];
            }
          });
        });
      },
      doesSessionExist: function(y) {
        return t(this, void 0, void 0, function() {
          var v, b, S;
          return n(this, function(m) {
            switch (m.label) {
              case 0:
                return (0, f.logDebugMessage)("doesSessionExist: called"), [4, r.FrontToken.getTokenInfo()];
              case 1:
                return v = m.sent(), v === void 0 ? ((0, f.logDebugMessage)("doesSessionExist: access token does not exist locally"), [2, !1]) : v.ate < u.default.getReferenceOrThrow().dateProvider.now() ? ((0, f.logDebugMessage)("doesSessionExist: access token expired. Refreshing session"), [4, (0, r.getLocalSessionState)(!1)]) : [3, 4];
              case 2:
                return b = m.sent(), [4, (0, r.onUnauthorisedResponse)(b)];
              case 3:
                return S = m.sent(), [2, S.result === "RETRY"];
              case 4:
                return [2, !0];
            }
          });
        });
      },
      signOut: function(y) {
        return t(this, void 0, void 0, function() {
          var v, b, S, m;
          return n(this, function(w) {
            switch (w.label) {
              case 0:
                return (0, f.logDebugMessage)("signOut: called"), [4, this.doesSessionExist(y)];
              case 1:
                return w.sent() ? ((0, f.logDebugMessage)("signOut: Calling refresh pre API hook"), [
                  4,
                  p.preAPIHook({
                    action: "SIGN_OUT",
                    requestInit: {
                      method: "post",
                      headers: {
                        "fdi-version": h.supported_fdi.join(","),
                        rid: r.default.rid
                      }
                    },
                    url: r.default.signOutUrl,
                    userContext: y.userContext
                  })
                ]) : ((0, f.logDebugMessage)("signOut: exiting early because session does not exist"), (0, f.logDebugMessage)("signOut: firing SIGN_OUT event"), p.onHandleEvent({
                  action: "SIGN_OUT",
                  userContext: y.userContext
                }), [
                  2
                  /*return*/
                ]);
              case 2:
                return v = w.sent(), (0, f.logDebugMessage)("signOut: Calling API"), [4, fetch(v.url, v.requestInit)];
              case 3:
                if (b = w.sent(), (0, f.logDebugMessage)("signOut: API ended"), (0, f.logDebugMessage)("signOut: API responded with status code: " + b.status), b.status === p.sessionExpiredStatusCode)
                  return [
                    2
                    /*return*/
                  ];
                if (b.status >= 300)
                  throw b;
                return [
                  4,
                  p.postAPIHook({
                    action: "SIGN_OUT",
                    requestInit: v.requestInit,
                    url: v.url,
                    fetchResponse: b.clone(),
                    userContext: y.userContext
                  })
                ];
              case 4:
                return w.sent(), [4, b.clone().json()];
              case 5:
                if (S = w.sent(), S.status === "GENERAL_ERROR")
                  throw (0, f.logDebugMessage)("doRequest: Throwing general error"), m = S.message === void 0 ? "No Error Message Provided" : S.message, new g.STGeneralError(m);
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      },
      getInvalidClaimsFromResponse: function(y) {
        return t(this, void 0, void 0, function() {
          var v;
          return n(this, function(b) {
            switch (b.label) {
              case 0:
                return "body" in y.response ? [4, y.response.clone().json()] : [3, 2];
              case 1:
                return v = b.sent(), [3, 3];
              case 2:
                typeof y.response.data == "string" ? v = JSON.parse(y.response.data) : v = y.response.data, b.label = 3;
              case 3:
                return [2, v.claimValidationErrors];
            }
          });
        });
      },
      getGlobalClaimValidators: function(y) {
        return y.claimValidatorsAddedByOtherRecipes;
      },
      validateClaims: function(y) {
        return t(this, void 0, void 0, function() {
          var v, b, S, m, w, k, C, I, R, T, O, C, E;
          return n(this, function(A) {
            switch (A.label) {
              case 0:
                b = 0, A.label = 1;
              case 1:
                return ++b < a ? [4, c.default.getReferenceOrThrow().lockFactory()] : [3, 20];
              case 2:
                return S = A.sent(), (0, f.logDebugMessage)("validateClaims: trying to acquire claim refresh lock"), [4, S.acquireLock(i)];
              case 3:
                if (m = A.sent(), !m) return [3, 18];
                A.label = 4;
              case 4:
                return A.trys.push([4, , 15, 17]), [
                  4,
                  this.getAccessTokenPayloadSecurely({
                    userContext: y.userContext
                  })
                ];
              case 5:
                v = A.sent(), (0, f.logDebugMessage)("validateClaims: claim refresh lock acquired"), w = 0, k = y.claimValidators, A.label = 6;
              case 6:
                return w < k.length ? (C = k[w], [4, C.shouldRefresh(v, y.userContext)]) : [3, 14];
              case 7:
                if (!A.sent()) return [3, 13];
                A.label = 8;
              case 8:
                return A.trys.push([8, 10, , 11]), [4, C.refresh(y.userContext)];
              case 9:
                return A.sent(), [3, 11];
              case 10:
                return I = A.sent(), console.error(
                  "Encountered an error while refreshing validator ".concat(C.id),
                  I
                ), [3, 11];
              case 11:
                return [
                  4,
                  this.getAccessTokenPayloadSecurely({
                    userContext: y.userContext
                  })
                ];
              case 12:
                v = A.sent(), A.label = 13;
              case 13:
                return w++, [3, 6];
              case 14:
                return [3, 17];
              case 15:
                return (0, f.logDebugMessage)("validateClaims: releasing claim refresh lock"), [4, S.releaseLock(i)];
              case 16:
                return A.sent(), [
                  7
                  /*endfinally*/
                ];
              case 17:
                return [3, 20];
              case 18:
                (0, f.logDebugMessage)("validateClaims: Retrying refresh lock ".concat(b, "/").concat(a)), A.label = 19;
              case 19:
                return [3, 1];
              case 20:
                return b !== a ? [3, 22] : ((0, f.logDebugMessage)("validateClaims: ran out of retries while trying to acquire claim refresh lock"), [
                  4,
                  this.getAccessTokenPayloadSecurely({ userContext: y.userContext })
                ]);
              case 21:
                v = A.sent(), A.label = 22;
              case 22:
                R = [], T = 0, O = y.claimValidators, A.label = 23;
              case 23:
                return T < O.length ? (C = O[T], [4, C.validate(v, y.userContext)]) : [3, 26];
              case 24:
                E = A.sent(), E.isValid || R.push({
                  id: C.id,
                  reason: E.reason
                }), A.label = 25;
              case 25:
                return T++, [3, 23];
              case 26:
                return [2, R];
            }
          });
        });
      },
      shouldDoInterceptionBasedOnUrl: function(y, v, b) {
        if ((0, f.logDebugMessage)(
          "shouldDoInterceptionBasedOnUrl: toCheckUrl: " + y + " apiDomain: " + v + " sessionTokenBackendDomain: " + b
        ), y.includes("superTokensDoNotDoInterception"))
          return !1;
        y = (0, o.normaliseURLDomainOrThrowError)(y);
        var S = new URL(y), m = S.hostname, w = !1;
        if (v !== "") {
          v = (0, o.normaliseURLDomainOrThrowError)(v);
          var k = new URL(v);
          w = m === k.hostname;
        }
        if (b === void 0 || w)
          return w;
        var I = (0, o.normaliseSessionScopeOrThrowError)(b);
        return (0, o.matchesDomainOrSubdomain)(m, I);
      },
      calculateClockSkewInMillis: function(y) {
        var v = y.accessTokenPayload;
        (0, f.logDebugMessage)("calculateClockSkewInMillis: called");
        var b = v == null ? void 0 : v.iat;
        if (b === void 0 || typeof b != "number")
          return (0, f.logDebugMessage)(
            "calculateClockSkewInMillis: payload iat is undefined or not a number. This may happen due to an unsupported backend sdk. Returning 0"
          ), 0;
        var S = b * 1e3, m = S - Date.now();
        return (0, f.logDebugMessage)("calculateClockSkewInMillis: returning " + m), m;
      }
    };
  }
  return Ae.default = d, Ae;
}
var Rt = {}, Hr;
function Fo() {
  if (Hr) return Rt;
  Hr = 1, Object.defineProperty(Rt, "__esModule", { value: !0 }), Rt.PrimitiveClaim = void 0;
  var e = St(), t = (
    /** @class */
    function() {
      function n(r) {
        var s = this;
        this.validators = {
          hasValue: function(h, f, g) {
            f === void 0 && (f = s.defaultMaxAgeInSeconds);
            var l = e.default.getReferenceOrThrow().dateProvider;
            return {
              id: g !== void 0 ? g : s.id,
              refresh: function(o) {
                return s.refresh(o);
              },
              shouldRefresh: function(o, u) {
                if (f !== void 0 && f < l.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      l.getThresholdInSeconds()
                    )
                  );
                return s.getValueFromPayload(o, u) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                f !== void 0 && o[s.id].t < l.now() - f * 1e3;
              },
              validate: function(o, u) {
                var c = s.getValueFromPayload(o, u);
                if (c === void 0)
                  return {
                    isValid: !1,
                    reason: { message: "value does not exist", expectedValue: h, actualValue: c }
                  };
                var a = (l.now() - s.getLastFetchedTime(o, u)) / 1e3;
                return f !== void 0 && a > f ? {
                  isValid: !1,
                  reason: {
                    message: "expired",
                    ageInSeconds: a,
                    maxAgeInSeconds: f
                  }
                } : c !== h ? {
                  isValid: !1,
                  reason: { message: "wrong value", expectedValue: h, actualValue: c }
                } : { isValid: !0 };
              }
            };
          }
        }, this.id = r.id, this.refresh = r.refresh, this.defaultMaxAgeInSeconds = r.defaultMaxAgeInSeconds;
      }
      return n.prototype.getValueFromPayload = function(r, s) {
        return r[this.id] !== void 0 ? r[this.id].v : void 0;
      }, n.prototype.getLastFetchedTime = function(r, s) {
        return r[this.id] !== void 0 ? r[this.id].t : void 0;
      }, n;
    }()
  );
  return Rt.PrimitiveClaim = t, Rt;
}
var Be = {}, Nr;
function qi() {
  if (Nr) return Be;
  Nr = 1;
  var e = Be && Be.__awaiter || function(s, h, f, g) {
    function l(o) {
      return o instanceof f ? o : new f(function(u) {
        u(o);
      });
    }
    return new (f || (f = Promise))(function(o, u) {
      function c(d) {
        try {
          i(g.next(d));
        } catch (p) {
          u(p);
        }
      }
      function a(d) {
        try {
          i(g.throw(d));
        } catch (p) {
          u(p);
        }
      }
      function i(d) {
        d.done ? o(d.value) : l(d.value).then(c, a);
      }
      i((g = g.apply(s, h || [])).next());
    });
  }, t = Be && Be.__generator || function(s, h) {
    var f = {
      label: 0,
      sent: function() {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    }, g, l, o, u;
    return u = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
      return this;
    }), u;
    function c(i) {
      return function(d) {
        return a([i, d]);
      };
    }
    function a(i) {
      if (g) throw new TypeError("Generator is already executing.");
      for (; f; )
        try {
          if (g = 1, l && (o = i[0] & 2 ? l.return : i[0] ? l.throw || ((o = l.return) && o.call(l), 0) : l.next) && !(o = o.call(l, i[1])).done)
            return o;
          switch (l = 0, o && (i = [i[0] & 2, o.value]), i[0]) {
            case 0:
            case 1:
              o = i;
              break;
            case 4:
              return f.label++, { value: i[1], done: !1 };
            case 5:
              f.label++, l = i[1], i = [0];
              continue;
            case 7:
              i = f.ops.pop(), f.trys.pop();
              continue;
            default:
              if (o = f.trys, !(o = o.length > 0 && o[o.length - 1]) && (i[0] === 6 || i[0] === 2)) {
                f = 0;
                continue;
              }
              if (i[0] === 3 && (!o || i[1] > o[0] && i[1] < o[3])) {
                f.label = i[1];
                break;
              }
              if (i[0] === 6 && f.label < o[1]) {
                f.label = o[1], o = i;
                break;
              }
              if (o && f.label < o[2]) {
                f.label = o[2], f.ops.push(i);
                break;
              }
              o[2] && f.ops.pop(), f.trys.pop();
              continue;
          }
          i = h.call(s, f);
        } catch (d) {
          i = [6, d], l = 0;
        } finally {
          g = o = 0;
        }
      if (i[0] & 5) throw i[1];
      return { value: i[0] ? i[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Be, "__esModule", { value: !0 }), Be.PrimitiveArrayClaim = void 0;
  var n = St(), r = (
    /** @class */
    function() {
      function s(h) {
        var f = this;
        this.validators = {
          includes: function(g, l, o) {
            l === void 0 && (l = f.defaultMaxAgeInSeconds);
            var u = n.default.getReferenceOrThrow().dateProvider;
            return {
              id: o !== void 0 ? o : f.id,
              refresh: function(c) {
                return f.refresh(c);
              },
              shouldRefresh: function(c, a) {
                if (l !== void 0 && l < u.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      u.getThresholdInSeconds()
                    )
                  );
                return f.getValueFromPayload(c, a) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                l !== void 0 && c[f.id].t < u.now() - l * 1e3;
              },
              validate: function(c, a) {
                return e(f, void 0, void 0, function() {
                  var i, d;
                  return t(this, function(p) {
                    return i = this.getValueFromPayload(c, a), i === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToInclude: g,
                          actualValue: i
                        }
                      }
                    ] : (d = (u.now() - this.getLastFetchedTime(c, a)) / 1e3, l !== void 0 && d > l ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: d,
                          maxAgeInSeconds: l
                        }
                      }
                    ] : i.includes(g) ? [2, { isValid: !0 }] : [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "wrong value",
                          expectedToInclude: g,
                          actualValue: i
                        }
                      }
                    ]);
                  });
                });
              }
            };
          },
          excludes: function(g, l, o) {
            l === void 0 && (l = f.defaultMaxAgeInSeconds);
            var u = n.default.getReferenceOrThrow().dateProvider;
            return {
              id: o !== void 0 ? o : f.id,
              refresh: function(c) {
                return f.refresh(c);
              },
              shouldRefresh: function(c, a) {
                if (l !== void 0 && l < u.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      u.getThresholdInSeconds()
                    )
                  );
                return f.getValueFromPayload(c, a) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                l !== void 0 && c[f.id].t < u.now() - l * 1e3;
              },
              validate: function(c, a) {
                return e(f, void 0, void 0, function() {
                  var i, d;
                  return t(this, function(p) {
                    return i = this.getValueFromPayload(c, a), i === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToNotInclude: g,
                          actualValue: i
                        }
                      }
                    ] : (d = (u.now() - this.getLastFetchedTime(c, a)) / 1e3, l !== void 0 && d > l ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: d,
                          maxAgeInSeconds: l
                        }
                      }
                    ] : i.includes(g) ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "wrong value",
                          expectedToNotInclude: g,
                          actualValue: i
                        }
                      }
                    ] : [2, { isValid: !0 }]);
                  });
                });
              }
            };
          },
          includesAll: function(g, l, o) {
            l === void 0 && (l = f.defaultMaxAgeInSeconds);
            var u = n.default.getReferenceOrThrow().dateProvider;
            return {
              id: o !== void 0 ? o : f.id,
              refresh: function(c) {
                return f.refresh(c);
              },
              shouldRefresh: function(c, a) {
                if (l !== void 0 && l < u.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      u.getThresholdInSeconds()
                    )
                  );
                return f.getValueFromPayload(c, a) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                l !== void 0 && c[f.id].t < u.now() - l * 1e3;
              },
              validate: function(c, a) {
                return e(f, void 0, void 0, function() {
                  var i, d, p, y;
                  return t(this, function(v) {
                    return i = this.getValueFromPayload(c, a), i === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToInclude: g,
                          actualValue: i
                        }
                      }
                    ] : (d = (u.now() - this.getLastFetchedTime(c, a)) / 1e3, l !== void 0 && d > l ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: d,
                          maxAgeInSeconds: l
                        }
                      }
                    ] : (p = new Set(i), y = g.every(function(b) {
                      return p.has(b);
                    }), [
                      2,
                      y ? { isValid: y } : {
                        isValid: y,
                        reason: {
                          message: "wrong value",
                          expectedToInclude: g,
                          actualValue: i
                        }
                      }
                    ]));
                  });
                });
              }
            };
          },
          includesAny: function(g, l, o) {
            l === void 0 && (l = f.defaultMaxAgeInSeconds);
            var u = n.default.getReferenceOrThrow().dateProvider;
            return {
              id: o !== void 0 ? o : f.id,
              refresh: function(c) {
                return f.refresh(c);
              },
              shouldRefresh: function(c, a) {
                if (l !== void 0 && l < u.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      u.getThresholdInSeconds()
                    )
                  );
                return f.getValueFromPayload(c, a) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                l !== void 0 && c[f.id].t < u.now() - l * 1e3;
              },
              validate: function(c, a) {
                return e(f, void 0, void 0, function() {
                  var i, d, p, y;
                  return t(this, function(v) {
                    return i = this.getValueFromPayload(c, a), i === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToInclude: g,
                          actualValue: i
                        }
                      }
                    ] : (d = (u.now() - this.getLastFetchedTime(c, a)) / 1e3, l !== void 0 && d > l ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: d,
                          maxAgeInSeconds: l
                        }
                      }
                    ] : (p = new Set(i), y = g.some(function(b) {
                      return p.has(b);
                    }), [
                      2,
                      y ? { isValid: y } : {
                        isValid: y,
                        reason: {
                          message: "wrong value",
                          expectedToIncludeAtLeastOneOf: g,
                          actualValue: i
                        }
                      }
                    ]));
                  });
                });
              }
            };
          },
          excludesAll: function(g, l, o) {
            l === void 0 && (l = f.defaultMaxAgeInSeconds);
            var u = n.default.getReferenceOrThrow().dateProvider;
            return {
              id: o !== void 0 ? o : f.id,
              refresh: function(c) {
                return f.refresh(c);
              },
              shouldRefresh: function(c, a) {
                if (l !== void 0 && l < u.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      u.getThresholdInSeconds()
                    )
                  );
                return f.getValueFromPayload(c, a) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                l !== void 0 && c[f.id].t < u.now() - l * 1e3;
              },
              validate: function(c, a) {
                return e(f, void 0, void 0, function() {
                  var i, d, p, y;
                  return t(this, function(v) {
                    return i = this.getValueFromPayload(c, a), i === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToNotInclude: g,
                          actualValue: i
                        }
                      }
                    ] : (d = (u.now() - this.getLastFetchedTime(c, a)) / 1e3, l !== void 0 && d > l ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: d,
                          maxAgeInSeconds: l
                        }
                      }
                    ] : (p = new Set(i), y = g.every(function(b) {
                      return !p.has(b);
                    }), [
                      2,
                      y ? { isValid: y } : {
                        isValid: y,
                        reason: {
                          message: "wrong value",
                          expectedToNotInclude: g,
                          actualValue: i
                        }
                      }
                    ]));
                  });
                });
              }
            };
          }
        }, this.id = h.id, this.refresh = h.refresh, this.defaultMaxAgeInSeconds = h.defaultMaxAgeInSeconds;
      }
      return s.prototype.getValueFromPayload = function(h, f) {
        return h[this.id] !== void 0 ? h[this.id].v : void 0;
      }, s.prototype.getLastFetchedTime = function(h, f) {
        return h[this.id] !== void 0 ? h[this.id].t : void 0;
      }, s;
    }()
  );
  return Be.PrimitiveArrayClaim = r, Be;
}
var We = {}, jr;
function Vi() {
  if (jr) return We;
  jr = 1;
  var e = We && We.__extends || /* @__PURE__ */ function() {
    var s = function(h, f) {
      return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(g, l) {
        g.__proto__ = l;
      } || function(g, l) {
        for (var o in l) Object.prototype.hasOwnProperty.call(l, o) && (g[o] = l[o]);
      }, s(h, f);
    };
    return function(h, f) {
      if (typeof f != "function" && f !== null)
        throw new TypeError("Class extends value " + String(f) + " is not a constructor or null");
      s(h, f);
      function g() {
        this.constructor = h;
      }
      h.prototype = f === null ? Object.create(f) : (g.prototype = f.prototype, new g());
    };
  }(), t = We && We.__assign || function() {
    return t = Object.assign || function(s) {
      for (var h, f = 1, g = arguments.length; f < g; f++) {
        h = arguments[f];
        for (var l in h) Object.prototype.hasOwnProperty.call(h, l) && (s[l] = h[l]);
      }
      return s;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(We, "__esModule", { value: !0 }), We.BooleanClaim = void 0;
  var n = Fo(), r = (
    /** @class */
    function(s) {
      e(h, s);
      function h(f) {
        var g = s.call(this, f) || this;
        return g.validators = t(t({}, g.validators), {
          isTrue: function(l) {
            return g.validators.hasValue(!0, l);
          },
          isFalse: function(l) {
            return g.validators.hasValue(!1, l);
          }
        }), g;
      }
      return h;
    }(n.PrimitiveClaim)
  );
  return We.BooleanClaim = r, We;
}
var Fr;
function Bi() {
  return Fr || (Fr = 1, function(e) {
    var t = at && at.__awaiter || function(v, b, S, m) {
      function w(k) {
        return k instanceof S ? k : new S(function(I) {
          I(k);
        });
      }
      return new (S || (S = Promise))(function(k, I) {
        function R(C) {
          try {
            O(m.next(C));
          } catch (E) {
            I(E);
          }
        }
        function T(C) {
          try {
            O(m.throw(C));
          } catch (E) {
            I(E);
          }
        }
        function O(C) {
          C.done ? k(C.value) : w(C.value).then(R, T);
        }
        O((m = m.apply(v, b || [])).next());
      });
    }, n = at && at.__generator || function(v, b) {
      var S = {
        label: 0,
        sent: function() {
          if (k[0] & 1) throw k[1];
          return k[1];
        },
        trys: [],
        ops: []
      }, m, w, k, I;
      return I = { next: R(0), throw: R(1), return: R(2) }, typeof Symbol == "function" && (I[Symbol.iterator] = function() {
        return this;
      }), I;
      function R(O) {
        return function(C) {
          return T([O, C]);
        };
      }
      function T(O) {
        if (m) throw new TypeError("Generator is already executing.");
        for (; S; )
          try {
            if (m = 1, w && (k = O[0] & 2 ? w.return : O[0] ? w.throw || ((k = w.return) && k.call(w), 0) : w.next) && !(k = k.call(w, O[1])).done)
              return k;
            switch (w = 0, k && (O = [O[0] & 2, k.value]), O[0]) {
              case 0:
              case 1:
                k = O;
                break;
              case 4:
                return S.label++, { value: O[1], done: !1 };
              case 5:
                S.label++, w = O[1], O = [0];
                continue;
              case 7:
                O = S.ops.pop(), S.trys.pop();
                continue;
              default:
                if (k = S.trys, !(k = k.length > 0 && k[k.length - 1]) && (O[0] === 6 || O[0] === 2)) {
                  S = 0;
                  continue;
                }
                if (O[0] === 3 && (!k || O[1] > k[0] && O[1] < k[3])) {
                  S.label = O[1];
                  break;
                }
                if (O[0] === 6 && S.label < k[1]) {
                  S.label = k[1], k = O;
                  break;
                }
                if (k && S.label < k[2]) {
                  S.label = k[2], S.ops.push(O);
                  break;
                }
                k[2] && S.ops.pop(), S.trys.pop();
                continue;
            }
            O = b.call(v, S);
          } catch (C) {
            O = [6, C], w = 0;
          } finally {
            m = k = 0;
          }
        if (O[0] & 5) throw O[1];
        return { value: O[0] ? O[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.BooleanClaim = e.PrimitiveArrayClaim = e.PrimitiveClaim = e.getInvalidClaimsFromResponse = e.getClaimValue = e.validateClaims = e.signOut = e.addAxiosInterceptors = e.doesSessionExist = e.attemptRefreshingSession = e.getAccessToken = e.getAccessTokenPayloadSecurely = e.getUserId = e.init = void 0;
    var r = Xt(), s = Fi(), h = cn(), f = xn(), g = Mn(), l = Ye(), o = Un(), u = Uo(), c = Gt(), a = St(), i = (
      /** @class */
      function() {
        function v() {
        }
        v.init = function(S) {
          g.default.init(S.cookieHandler), l.default.init(S.windowHandler), a.default.init(S.dateProvider), o.default.init(
            S.lockFactory,
            l.default.getReferenceOrThrow().windowHandler.localStorage
          );
          var m = (0, f.validateAndNormaliseInputOrThrowError)(S);
          S.enableDebugLogs !== void 0 && S.enableDebugLogs && (0, c.enableLogging)();
          var w = new h.default(
            (0, s.default)({
              onHandleEvent: m.onHandleEvent,
              preAPIHook: m.preAPIHook,
              postAPIHook: m.postAPIHook,
              sessionExpiredStatusCode: m.sessionExpiredStatusCode
            })
          ).override(m.override.functions).build();
          r.default.init(m, w), v.axiosInterceptorQueue.forEach(function(k) {
            k();
          }), v.axiosInterceptorQueue = [];
        }, v.getUserId = function(S) {
          return r.default.recipeImpl.getUserId({
            userContext: (0, f.getNormalisedUserContext)(S === void 0 ? void 0 : S.userContext)
          });
        }, v.getAccessTokenPayloadSecurely = function(S) {
          return t(this, void 0, void 0, function() {
            return n(this, function(m) {
              return [
                2,
                r.default.recipeImpl.getAccessTokenPayloadSecurely({
                  userContext: (0, f.getNormalisedUserContext)(
                    S === void 0 ? void 0 : S.userContext
                  )
                })
              ];
            });
          });
        };
        var b;
        return b = v, v.axiosInterceptorQueue = [], v.attemptRefreshingSession = function() {
          return t(void 0, void 0, void 0, function() {
            return n(b, function(S) {
              return [2, r.default.attemptRefreshingSession()];
            });
          });
        }, v.doesSessionExist = function(S) {
          return r.default.recipeImpl.doesSessionExist({
            userContext: (0, f.getNormalisedUserContext)(S === void 0 ? void 0 : S.userContext)
          });
        }, v.addAxiosInterceptors = function(S, m) {
          r.default.initCalled ? r.default.recipeImpl.addAxiosInterceptors({
            axiosInstance: S,
            userContext: (0, f.getNormalisedUserContext)(m)
          }) : v.axiosInterceptorQueue.push(function() {
            r.default.recipeImpl.addAxiosInterceptors({
              axiosInstance: S,
              userContext: (0, f.getNormalisedUserContext)(m)
            });
          });
        }, v.signOut = function(S) {
          return r.default.recipeImpl.signOut({
            userContext: (0, f.getNormalisedUserContext)(S === void 0 ? void 0 : S.userContext)
          });
        }, v.getInvalidClaimsFromResponse = function(S) {
          return t(this, void 0, void 0, function() {
            return n(this, function(m) {
              return [
                2,
                r.default.recipeImpl.getInvalidClaimsFromResponse({
                  response: S.response,
                  userContext: (0, f.getNormalisedUserContext)(S.userContext)
                })
              ];
            });
          });
        }, v.getClaimValue = function(S) {
          return t(this, void 0, void 0, function() {
            var m, w;
            return n(this, function(k) {
              switch (k.label) {
                case 0:
                  return m = (0, f.getNormalisedUserContext)(
                    S === void 0 ? void 0 : S.userContext
                  ), [
                    4,
                    v.getAccessTokenPayloadSecurely({ userContext: m })
                  ];
                case 1:
                  return w = k.sent(), [2, S.claim.getValueFromPayload(w, m)];
              }
            });
          });
        }, v.validateClaims = function(S, m) {
          var w = (0, f.getNormalisedUserContext)(m), k = u.SessionClaimValidatorStore.getClaimValidatorsAddedByOtherRecipes(), I = r.default.recipeImpl.getGlobalClaimValidators({
            claimValidatorsAddedByOtherRecipes: k,
            userContext: w
          }), R = S !== void 0 ? S(I, w) : I;
          return R.length === 0 ? [] : r.default.recipeImpl.validateClaims({
            claimValidators: R,
            userContext: (0, f.getNormalisedUserContext)(m)
          });
        }, v.getAccessToken = function(S) {
          return t(void 0, void 0, void 0, function() {
            return n(b, function(m) {
              switch (m.label) {
                case 0:
                  return [
                    4,
                    r.default.recipeImpl.doesSessionExist({
                      userContext: (0, f.getNormalisedUserContext)(
                        S === void 0 ? void 0 : S.userContext
                      )
                    })
                  ];
                case 1:
                  return m.sent() ? [2, (0, r.getTokenForHeaderAuth)("access")] : [2, void 0];
              }
            });
          });
        }, v;
      }()
    );
    e.default = i, e.init = i.init, e.getUserId = i.getUserId, e.getAccessTokenPayloadSecurely = i.getAccessTokenPayloadSecurely, e.getAccessToken = i.getAccessToken, e.attemptRefreshingSession = i.attemptRefreshingSession, e.doesSessionExist = i.doesSessionExist, e.addAxiosInterceptors = i.addAxiosInterceptors, e.signOut = i.signOut, e.validateClaims = i.validateClaims, e.getClaimValue = i.getClaimValue, e.getInvalidClaimsFromResponse = i.getInvalidClaimsFromResponse;
    var d = Fo();
    Object.defineProperty(e, "PrimitiveClaim", {
      enumerable: !0,
      get: function() {
        return d.PrimitiveClaim;
      }
    });
    var p = qi();
    Object.defineProperty(e, "PrimitiveArrayClaim", {
      enumerable: !0,
      get: function() {
        return p.PrimitiveArrayClaim;
      }
    });
    var y = Vi();
    Object.defineProperty(e, "BooleanClaim", {
      enumerable: !0,
      get: function() {
        return y.BooleanClaim;
      }
    });
  }(at)), at;
}
var qr;
function qo() {
  return qr || (qr = 1, function(e) {
    function t(n) {
      for (var r in n) e.hasOwnProperty(r) || (e[r] = n[r]);
    }
    e.__esModule = !0, t(Bi());
  }(wn)), wn;
}
var Ct = {}, Vr;
function Wi() {
  return Vr || (Vr = 1, Object.defineProperty(Ct, "__esModule", { value: !0 }), Ct.EMAILVERIFICATION_CLAIM_ID = void 0, Ct.EMAILVERIFICATION_CLAIM_ID = "st-ev"), Ct;
}
var Br;
function Vo() {
  if (Br) return ce;
  Br = 1;
  var e = ce && ce.__extends || /* @__PURE__ */ function() {
    var c = function(a, i) {
      return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, p) {
        d.__proto__ = p;
      } || function(d, p) {
        for (var y in p) Object.prototype.hasOwnProperty.call(p, y) && (d[y] = p[y]);
      }, c(a, i);
    };
    return function(a, i) {
      if (typeof i != "function" && i !== null)
        throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
      c(a, i);
      function d() {
        this.constructor = a;
      }
      a.prototype = i === null ? Object.create(i) : (d.prototype = i.prototype, new d());
    };
  }(), t = ce && ce.__assign || function() {
    return t = Object.assign || function(c) {
      for (var a, i = 1, d = arguments.length; i < d; i++) {
        a = arguments[i];
        for (var p in a) Object.prototype.hasOwnProperty.call(a, p) && (c[p] = a[p]);
      }
      return c;
    }, t.apply(this, arguments);
  }, n = ce && ce.__awaiter || function(c, a, i, d) {
    function p(y) {
      return y instanceof i ? y : new i(function(v) {
        v(y);
      });
    }
    return new (i || (i = Promise))(function(y, v) {
      function b(w) {
        try {
          m(d.next(w));
        } catch (k) {
          v(k);
        }
      }
      function S(w) {
        try {
          m(d.throw(w));
        } catch (k) {
          v(k);
        }
      }
      function m(w) {
        w.done ? y(w.value) : p(w.value).then(b, S);
      }
      m((d = d.apply(c, a || [])).next());
    });
  }, r = ce && ce.__generator || function(c, a) {
    var i = {
      label: 0,
      sent: function() {
        if (y[0] & 1) throw y[1];
        return y[1];
      },
      trys: [],
      ops: []
    }, d, p, y, v;
    return v = { next: b(0), throw: b(1), return: b(2) }, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
      return this;
    }), v;
    function b(m) {
      return function(w) {
        return S([m, w]);
      };
    }
    function S(m) {
      if (d) throw new TypeError("Generator is already executing.");
      for (; i; )
        try {
          if (d = 1, p && (y = m[0] & 2 ? p.return : m[0] ? p.throw || ((y = p.return) && y.call(p), 0) : p.next) && !(y = y.call(p, m[1])).done)
            return y;
          switch (p = 0, y && (m = [m[0] & 2, y.value]), m[0]) {
            case 0:
            case 1:
              y = m;
              break;
            case 4:
              return i.label++, { value: m[1], done: !1 };
            case 5:
              i.label++, p = m[1], m = [0];
              continue;
            case 7:
              m = i.ops.pop(), i.trys.pop();
              continue;
            default:
              if (y = i.trys, !(y = y.length > 0 && y[y.length - 1]) && (m[0] === 6 || m[0] === 2)) {
                i = 0;
                continue;
              }
              if (m[0] === 3 && (!y || m[1] > y[0] && m[1] < y[3])) {
                i.label = m[1];
                break;
              }
              if (m[0] === 6 && i.label < y[1]) {
                i.label = y[1], y = m;
                break;
              }
              if (y && i.label < y[2]) {
                i.label = y[2], i.ops.push(m);
                break;
              }
              y[2] && i.ops.pop(), i.trys.pop();
              continue;
          }
          m = a.call(c, i);
        } catch (w) {
          m = [6, w], p = 0;
        } finally {
          d = y = 0;
        }
      if (m[0] & 5) throw m[1];
      return { value: m[0] ? m[1] : void 0, done: !0 };
    }
  }, s = ce && ce.__spreadArray || function(c, a, i) {
    if (i || arguments.length === 2)
      for (var d = 0, p = a.length, y; d < p; d++)
        (y || !(d in a)) && (y || (y = Array.prototype.slice.call(a, 0, d)), y[d] = a[d]);
    return c.concat(y || Array.prototype.slice.call(a));
  };
  Object.defineProperty(ce, "__esModule", { value: !0 }), ce.Recipe = void 0;
  var h = jo(), f = qo(), g = Re(), l = Wi(), o = [l.EMAILVERIFICATION_CLAIM_ID], u = (
    /** @class */
    function(c) {
      e(a, c);
      function a(i) {
        var d = c.call(this, i) || this;
        return d.getUserId = function(p) {
          return f.default.getUserId({
            userContext: p.userContext
          });
        }, d.getAccessToken = function(p) {
          return n(d, void 0, void 0, function() {
            return r(this, function(y) {
              return [
                2,
                f.default.getAccessToken({
                  userContext: p.userContext
                })
              ];
            });
          });
        }, d.getAccessTokenPayloadSecurely = function(p) {
          return n(d, void 0, void 0, function() {
            return r(this, function(y) {
              return [
                2,
                f.default.getAccessTokenPayloadSecurely({
                  userContext: p.userContext
                })
              ];
            });
          });
        }, d.doesSessionExist = function(p) {
          return f.default.doesSessionExist({
            userContext: p.userContext
          });
        }, d.signOut = function(p) {
          return f.default.signOut({
            userContext: p.userContext
          });
        }, d.attemptRefreshingSession = function() {
          return n(d, void 0, void 0, function() {
            return r(this, function(p) {
              return [2, f.default.attemptRefreshingSession()];
            });
          });
        }, d.validateClaims = function(p) {
          return f.default.validateClaims(p.overrideGlobalClaimValidators, p.userContext);
        }, f.default.init(
          t(t({}, i), {
            override: {
              functions: function(p, y) {
                var v;
                return y.override(function(b) {
                  return t(t({}, b), {
                    getGlobalClaimValidators: function(S) {
                      var m = b.getGlobalClaimValidators(S);
                      return s(
                        s(
                          [],
                          m.filter(function(w) {
                            return o.includes(w.id);
                          }),
                          !0
                        ),
                        m.filter(function(w) {
                          return !o.includes(w.id);
                        }),
                        !0
                      );
                    }
                  });
                }), !((v = i.override) === null || v === void 0) && v.functions && y.override(i.override.functions), p;
              }
            },
            preAPIHook: function(p) {
              return n(d, void 0, void 0, function() {
                var y, v;
                return r(this, function(b) {
                  return y = new Headers(p.requestInit.headers), y.set("rid", i.recipeId), v = t(t({}, p), {
                    requestInit: t(t({}, p.requestInit), { headers: y })
                  }), i.preAPIHook === void 0 ? [2, v] : [2, i.preAPIHook(p)];
                });
              });
            },
            apiDomain: i.appInfo.apiDomain.getAsStringDangerous(),
            apiBasePath: i.appInfo.apiBasePath.getAsStringDangerous()
          })
        ), d;
      }
      return a.init = function(i) {
        return function(d, p, y) {
          return a.instance = new a(
            t(t({}, i), {
              appInfo: d,
              recipeId: a.RECIPE_ID,
              enableDebugLogs: y
            })
          ), a.instance;
        };
      }, a.prototype.getClaimValue = function(i) {
        return f.default.getClaimValue(i);
      }, a.prototype.getInvalidClaimsFromResponse = function(i) {
        return f.default.getInvalidClaimsFromResponse(i);
      }, a.addAxiosInterceptors = function(i, d) {
        return f.default.addAxiosInterceptors(i, d);
      }, a.getInstanceOrThrow = function() {
        if (a.instance === void 0) {
          var i = "No instance of Session found. Ensure that the 'Session.init' method is called within the 'SuperTokens.init' recipeList.";
          throw i = (0, g.checkForSSRErrorAndAppendIfNeeded)(i), Error(i);
        }
        return a.instance;
      }, a.reset = function() {
        (0, g.isTest)() && (a.instance = void 0);
      }, a.RECIPE_ID = "session", a;
    }(h.default)
  );
  return ce.Recipe = u, ce.default = u, ce;
}
var Wr;
function jn() {
  if (Wr) return Oe;
  Wr = 1;
  var e = Oe && Oe.__extends || /* @__PURE__ */ function() {
    var f = function(g, l) {
      return f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, u) {
        o.__proto__ = u;
      } || function(o, u) {
        for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (o[c] = u[c]);
      }, f(g, l);
    };
    return function(g, l) {
      if (typeof l != "function" && l !== null)
        throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
      f(g, l);
      function o() {
        this.constructor = g;
      }
      g.prototype = l === null ? Object.create(l) : (o.prototype = l.prototype, new o());
    };
  }(), t = Oe && Oe.__awaiter || function(f, g, l, o) {
    function u(c) {
      return c instanceof l ? c : new l(function(a) {
        a(c);
      });
    }
    return new (l || (l = Promise))(function(c, a) {
      function i(y) {
        try {
          p(o.next(y));
        } catch (v) {
          a(v);
        }
      }
      function d(y) {
        try {
          p(o.throw(y));
        } catch (v) {
          a(v);
        }
      }
      function p(y) {
        y.done ? c(y.value) : u(y.value).then(i, d);
      }
      p((o = o.apply(f, g || [])).next());
    });
  }, n = Oe && Oe.__generator || function(f, g) {
    var l = {
      label: 0,
      sent: function() {
        if (c[0] & 1) throw c[1];
        return c[1];
      },
      trys: [],
      ops: []
    }, o, u, c, a;
    return a = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
      return this;
    }), a;
    function i(p) {
      return function(y) {
        return d([p, y]);
      };
    }
    function d(p) {
      if (o) throw new TypeError("Generator is already executing.");
      for (; l; )
        try {
          if (o = 1, u && (c = p[0] & 2 ? u.return : p[0] ? u.throw || ((c = u.return) && c.call(u), 0) : u.next) && !(c = c.call(u, p[1])).done)
            return c;
          switch (u = 0, c && (p = [p[0] & 2, c.value]), p[0]) {
            case 0:
            case 1:
              c = p;
              break;
            case 4:
              return l.label++, { value: p[1], done: !1 };
            case 5:
              l.label++, u = p[1], p = [0];
              continue;
            case 7:
              p = l.ops.pop(), l.trys.pop();
              continue;
            default:
              if (c = l.trys, !(c = c.length > 0 && c[c.length - 1]) && (p[0] === 6 || p[0] === 2)) {
                l = 0;
                continue;
              }
              if (p[0] === 3 && (!c || p[1] > c[0] && p[1] < c[3])) {
                l.label = p[1];
                break;
              }
              if (p[0] === 6 && l.label < c[1]) {
                l.label = c[1], c = p;
                break;
              }
              if (c && l.label < c[2]) {
                l.label = c[2], l.ops.push(p);
                break;
              }
              c[2] && l.ops.pop(), l.trys.pop();
              continue;
          }
          p = g.call(f, l);
        } catch (y) {
          p = [6, y], u = 0;
        } finally {
          o = c = 0;
        }
      if (p[0] & 5) throw p[1];
      return { value: p[0] ? p[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Oe, "__esModule", { value: !0 });
  var r = jo(), s = Vo(), h = (
    /** @class */
    function(f) {
      e(g, f);
      function g(l) {
        var o = f.call(this, l) || this;
        return o.signOut = function(u) {
          return t(o, void 0, void 0, function() {
            return n(this, function(c) {
              switch (c.label) {
                case 0:
                  return [
                    4,
                    s.default.getInstanceOrThrow().signOut({
                      userContext: u.userContext
                    })
                  ];
                case 1:
                  return [2, c.sent()];
              }
            });
          });
        }, o;
      }
      return g;
    }(r.default)
  );
  return Oe.default = h, Oe;
}
var Gr;
function dn() {
  if (Gr) return Ce;
  Gr = 1;
  var e = Ce && Ce.__extends || /* @__PURE__ */ function() {
    var l = function(o, u) {
      return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, a) {
        c.__proto__ = a;
      } || function(c, a) {
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (c[i] = a[i]);
      }, l(o, u);
    };
    return function(o, u) {
      if (typeof u != "function" && u !== null)
        throw new TypeError("Class extends value " + String(u) + " is not a constructor or null");
      l(o, u);
      function c() {
        this.constructor = o;
      }
      o.prototype = u === null ? Object.create(u) : (c.prototype = u.prototype, new c());
    };
  }(), t = Ce && Ce.__assign || function() {
    return t = Object.assign || function(l) {
      for (var o, u = 1, c = arguments.length; u < c; u++) {
        o = arguments[u];
        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (l[a] = o[a]);
      }
      return l;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(Ce, "__esModule", { value: !0 }), Ce.Recipe = void 0;
  var n = xi(), r = cn(), s = Ui(), h = Re(), f = jn(), g = (
    /** @class */
    function(l) {
      e(o, l);
      function o(u) {
        var c = l.call(this, (0, n.normaliseUserInput)(u)) || this, a = new r.default(
          (0, s.default)({
            recipeId: c.config.recipeId,
            appInfo: c.config.appInfo,
            clientType: c.config.clientType,
            preAPIHook: c.config.preAPIHook,
            postAPIHook: c.config.postAPIHook
          })
        );
        return c.recipeImplementation = a.override(c.config.override.functions).build(), c;
      }
      return o.init = function(u) {
        return function(c, a) {
          return o.instance = new o(
            t(t({}, u), { recipeId: o.RECIPE_ID, appInfo: c, clientType: a })
          ), o.instance;
        };
      }, o.getInstanceOrThrow = function() {
        if (o.instance === void 0) {
          var u = "No instance of Multitenancy found. Ensure that 'SuperTokens.init' method has been called.";
          throw u = (0, h.checkForSSRErrorAndAppendIfNeeded)(u), Error(u);
        }
        return o.instance;
      }, o.reset = function() {
        (0, h.isTest)() && (o.instance = void 0);
      }, o.RECIPE_ID = "multitenancy", o;
    }(f.default)
  );
  return Ce.Recipe = g, Ce.default = g, Ce;
}
var kn = {}, _n = {}, Xr;
function Gi() {
  return Xr || (Xr = 1, function(e) {
    function t(n) {
      for (var r in n) e.hasOwnProperty(r) || (e[r] = n[r]);
    }
    e.__esModule = !0, t(St());
  }(_n)), _n;
}
var zr;
function Xi() {
  return zr || (zr = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.DateProviderReference = void 0;
    var t = Gi();
    Object.defineProperty(e, "DateProviderReference", {
      enumerable: !0,
      get: function() {
        return t.DateProviderReference;
      }
    });
  }(kn)), kn;
}
var Kr;
function zi() {
  if (Kr) return Kt;
  Kr = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  var e = Re(), t = Oi(), n = ln(), r = Ai(), s = dn(), h = Xi(), f = (
    /** @class */
    function() {
      function g(l) {
        var o = this;
        if (this.recipeList = [], this.appInfo = (0, e.normaliseInputAppInfoOrThrowError)(l.appInfo), l.recipeList === void 0 || l.recipeList.length === 0)
          throw new Error(
            "Please provide at least one recipe to the supertokens.init function call. See https://supertokens.io/docs/emailpassword/quick-setup/frontend"
          );
        var u = !1;
        l.enableDebugLogs !== void 0 && (u = l.enableDebugLogs);
        var c = !1;
        this.recipeList = l.recipeList.map(function(a) {
          var i = a(o.appInfo, l.clientType, u);
          return i.config.recipeId === s.Recipe.RECIPE_ID && (c = !0), i;
        }), c || this.recipeList.push(s.Recipe.init()(this.appInfo, l.clientType, u));
      }
      return g.init = function(l) {
        if (t.CookieHandlerReference.init(l.cookieHandler), n.WindowHandlerReference.init(l.windowHandler), h.DateProviderReference.init(l.dateProvider), g.instance !== void 0) {
          console.warn("SuperTokens was already initialized");
          return;
        }
        g.instance = new g(l), r.PostSuperTokensInitCallbacks.runPostInitCallbacks();
      }, g.getInstanceOrThrow = function() {
        if (g.instance === void 0) {
          var l = "SuperTokens must be initialized before calling this method.";
          throw l = (0, e.checkForSSRErrorAndAppendIfNeeded)(l), new Error(l);
        }
        return g.instance;
      }, g.reset = function() {
        if (!(0, e.isTest)()) {
          console.warn("Calling reset() is only supported during testing");
          return;
        }
        s.Recipe.reset(), g.instance = void 0;
      }, g;
    }()
  );
  return Kt.default = f, Kt;
}
var Qr;
function Ki() {
  if (Qr) return dt;
  Qr = 1, Object.defineProperty(dt, "__esModule", { value: !0 }), dt.init = void 0;
  var e = zi(), t = (
    /** @class */
    function() {
      function n() {
      }
      return n.init = function(r) {
        e.default.init(r);
      }, n;
    }()
  );
  return dt.default = t, dt.init = t.init, dt;
}
var Jr;
function Qi() {
  return Jr || (Jr = 1, function(e) {
    function t(n) {
      for (var r in n) e.hasOwnProperty(r) || (e[r] = n[r]);
    }
    e.__esModule = !0, t(Ki());
  }(gn)), gn;
}
var Ji = Qi();
const Yi = /* @__PURE__ */ un(Ji);
var In = {}, X = {}, Ee = {}, st = {}, Yr;
function Zi() {
  if (Yr) return st;
  Yr = 1;
  var e = st && st.__assign || function() {
    return e = Object.assign || function(r) {
      for (var s, h = 1, f = arguments.length; h < f; h++) {
        s = arguments[h];
        for (var g in s) Object.prototype.hasOwnProperty.call(s, g) && (r[g] = s[g]);
      }
      return r;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(st, "__esModule", { value: !0 }), st.normaliseUserInput = void 0;
  var t = Hn();
  function n(r) {
    var s = e(
      {
        functions: function(h) {
          return h;
        }
      },
      r.override
    );
    return e(e({}, (0, t.normaliseAuthRecipe)(r)), { override: s });
  }
  return st.normaliseUserInput = n, st;
}
var ye = {}, Pt = {}, Zr;
function ea() {
  return Zr || (Zr = 1, Object.defineProperty(Pt, "__esModule", { value: !0 }), Pt.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY = void 0, Pt.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY = "supertokens-passwordless-loginAttemptInfo"), Pt;
}
var eo;
function ta() {
  if (eo) return ye;
  eo = 1;
  var e = ye && ye.__assign || function() {
    return e = Object.assign || function(o) {
      for (var u, c = 1, a = arguments.length; c < a; c++) {
        u = arguments[c];
        for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (o[i] = u[i]);
      }
      return o;
    }, e.apply(this, arguments);
  }, t = ye && ye.__awaiter || function(o, u, c, a) {
    function i(d) {
      return d instanceof c ? d : new c(function(p) {
        p(d);
      });
    }
    return new (c || (c = Promise))(function(d, p) {
      function y(S) {
        try {
          b(a.next(S));
        } catch (m) {
          p(m);
        }
      }
      function v(S) {
        try {
          b(a.throw(S));
        } catch (m) {
          p(m);
        }
      }
      function b(S) {
        S.done ? d(S.value) : i(S.value).then(y, v);
      }
      b((a = a.apply(o, u || [])).next());
    });
  }, n = ye && ye.__generator || function(o, u) {
    var c = {
      label: 0,
      sent: function() {
        if (d[0] & 1) throw d[1];
        return d[1];
      },
      trys: [],
      ops: []
    }, a, i, d, p;
    return p = { next: y(0), throw: y(1), return: y(2) }, typeof Symbol == "function" && (p[Symbol.iterator] = function() {
      return this;
    }), p;
    function y(b) {
      return function(S) {
        return v([b, S]);
      };
    }
    function v(b) {
      if (a) throw new TypeError("Generator is already executing.");
      for (; c; )
        try {
          if (a = 1, i && (d = b[0] & 2 ? i.return : b[0] ? i.throw || ((d = i.return) && d.call(i), 0) : i.next) && !(d = d.call(i, b[1])).done)
            return d;
          switch (i = 0, d && (b = [b[0] & 2, d.value]), b[0]) {
            case 0:
            case 1:
              d = b;
              break;
            case 4:
              return c.label++, { value: b[1], done: !1 };
            case 5:
              c.label++, i = b[1], b = [0];
              continue;
            case 7:
              b = c.ops.pop(), c.trys.pop();
              continue;
            default:
              if (d = c.trys, !(d = d.length > 0 && d[d.length - 1]) && (b[0] === 6 || b[0] === 2)) {
                c = 0;
                continue;
              }
              if (b[0] === 3 && (!d || b[1] > d[0] && b[1] < d[3])) {
                c.label = b[1];
                break;
              }
              if (b[0] === 6 && c.label < d[1]) {
                c.label = d[1], d = b;
                break;
              }
              if (d && c.label < d[2]) {
                c.label = d[2], c.ops.push(b);
                break;
              }
              d[2] && c.ops.pop(), c.trys.pop();
              continue;
          }
          b = u.call(o, c);
        } catch (S) {
          b = [6, S], i = 0;
        } finally {
          a = d = 0;
        }
      if (b[0] & 5) throw b[1];
      return { value: b[0] ? b[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(ye, "__esModule", { value: !0 }), ye.getRecipeImplementation = void 0;
  var r = ln(), s = Nn(), h = Re(), f = dn(), g = ea();
  function l(o) {
    var u = new s.default(o.recipeId, o.appInfo);
    return {
      createCode: function(c) {
        return t(this, void 0, void 0, function() {
          var a, i, d, p, y, v;
          return n(this, function(b) {
            switch (b.label) {
              case 0:
                return "email" in c && (a = {
                  email: c.email,
                  shouldTryLinkingWithSessionUser: c.shouldTryLinkingWithSessionUser
                }), "phoneNumber" in c && (a = {
                  phoneNumber: c.phoneNumber,
                  shouldTryLinkingWithSessionUser: c.shouldTryLinkingWithSessionUser
                }), v = (y = u).post, [
                  4,
                  f.default.getInstanceOrThrow().recipeImplementation.getTenantId({
                    userContext: c.userContext
                  })
                ];
              case 1:
                return [
                  4,
                  v.apply(y, [
                    b.sent(),
                    "/signinup/code",
                    { body: JSON.stringify(a) },
                    s.default.preparePreAPIHook({
                      recipePreAPIHook: o.preAPIHook,
                      action: "PASSWORDLESS_CREATE_CODE",
                      userContext: c.userContext,
                      options: c.options
                    }),
                    s.default.preparePostAPIHook({
                      recipePostAPIHook: o.postAPIHook,
                      action: "PASSWORDLESS_CREATE_CODE",
                      userContext: c.userContext
                    })
                  ])
                ];
              case 2:
                return i = b.sent(), d = i.jsonBody, p = i.fetchResponse, [2, e(e({}, d), { fetchResponse: p })];
            }
          });
        });
      },
      resendCode: function(c) {
        return t(this, void 0, void 0, function() {
          var a, i, d, p;
          return n(this, function(y) {
            switch (y.label) {
              case 0:
                return a = {
                  deviceId: c.deviceId,
                  preAuthSessionId: c.preAuthSessionId,
                  shouldTryLinkingWithSessionUser: c.shouldTryLinkingWithSessionUser
                }, [
                  4,
                  u.post(
                    c.tenantId,
                    "/signinup/code/resend",
                    { body: JSON.stringify(a) },
                    s.default.preparePreAPIHook({
                      recipePreAPIHook: o.preAPIHook,
                      action: "PASSWORDLESS_RESEND_CODE",
                      userContext: c.userContext,
                      options: c.options
                    }),
                    s.default.preparePostAPIHook({
                      recipePostAPIHook: o.postAPIHook,
                      action: "PASSWORDLESS_RESEND_CODE",
                      userContext: c.userContext
                    })
                  )
                ];
              case 1:
                return i = y.sent(), d = i.jsonBody, p = i.fetchResponse, [
                  2,
                  {
                    status: d.status,
                    fetchResponse: p
                  }
                ];
            }
          });
        });
      },
      consumeCode: function(c) {
        return t(this, void 0, void 0, function() {
          var a, i, d, p;
          return n(this, function(y) {
            switch (y.label) {
              case 0:
                return "userInputCode" in c ? a = {
                  userInputCode: c.userInputCode,
                  deviceId: c.deviceId,
                  preAuthSessionId: c.preAuthSessionId,
                  shouldTryLinkingWithSessionUser: c.shouldTryLinkingWithSessionUser
                } : a = {
                  linkCode: c.linkCode,
                  preAuthSessionId: c.preAuthSessionId,
                  shouldTryLinkingWithSessionUser: c.shouldTryLinkingWithSessionUser
                }, [
                  4,
                  u.post(
                    c.tenantId,
                    "/signinup/code/consume",
                    { body: JSON.stringify(a) },
                    s.default.preparePreAPIHook({
                      recipePreAPIHook: o.preAPIHook,
                      action: "PASSWORDLESS_CONSUME_CODE",
                      userContext: c.userContext,
                      options: c.options
                    }),
                    s.default.preparePostAPIHook({
                      recipePostAPIHook: o.postAPIHook,
                      action: "PASSWORDLESS_CONSUME_CODE",
                      userContext: c.userContext
                    })
                  )
                ];
              case 1:
                return i = y.sent(), d = i.jsonBody, p = i.fetchResponse, d.status !== "OK" ? [
                  2,
                  e(e({}, d), { fetchResponse: p })
                ] : [
                  2,
                  e(
                    e(
                      { status: "OK" },
                      (0, h.normaliseUserResponse)("passwordless", d)
                    ),
                    { fetchResponse: p }
                  )
                ];
            }
          });
        });
      },
      getTenantIdFromURL: function() {
        return (0, h.getQueryParams)("tenantId");
      },
      getLinkCodeFromURL: function() {
        return (0, h.getHashFromLocation)();
      },
      getPreAuthSessionIdFromURL: function() {
        var c = (0, h.getQueryParams)("preAuthSessionId");
        return c === void 0 ? "" : c;
      },
      doesEmailExist: function(c) {
        return t(this, void 0, void 0, function() {
          var a, i, d, p, y;
          return n(this, function(v) {
            switch (v.label) {
              case 0:
                return y = (p = u).get, [
                  4,
                  f.default.getInstanceOrThrow().recipeImplementation.getTenantId({
                    userContext: c.userContext
                  })
                ];
              case 1:
                return [
                  4,
                  y.apply(p, [
                    v.sent(),
                    "/passwordless/email/exists",
                    {},
                    { email: c.email },
                    s.default.preparePreAPIHook({
                      recipePreAPIHook: o.preAPIHook,
                      action: "EMAIL_EXISTS",
                      userContext: c.userContext,
                      options: c.options
                    }),
                    s.default.preparePostAPIHook({
                      recipePostAPIHook: o.postAPIHook,
                      action: "EMAIL_EXISTS",
                      userContext: c.userContext
                    })
                  ])
                ];
              case 2:
                return a = v.sent(), i = a.jsonBody, d = a.fetchResponse, [
                  2,
                  {
                    status: i.status,
                    doesExist: i.exists,
                    fetchResponse: d
                  }
                ];
            }
          });
        });
      },
      doesPhoneNumberExist: function(c) {
        return t(this, void 0, void 0, function() {
          var a, i, d, p, y;
          return n(this, function(v) {
            switch (v.label) {
              case 0:
                return y = (p = u).get, [
                  4,
                  f.default.getInstanceOrThrow().recipeImplementation.getTenantId({
                    userContext: c.userContext
                  })
                ];
              case 1:
                return [
                  4,
                  y.apply(p, [
                    v.sent(),
                    "/passwordless/phonenumber/exists",
                    {},
                    { phoneNumber: c.phoneNumber },
                    s.default.preparePreAPIHook({
                      recipePreAPIHook: o.preAPIHook,
                      action: "PHONE_NUMBER_EXISTS",
                      userContext: c.userContext,
                      options: c.options
                    }),
                    s.default.preparePostAPIHook({
                      recipePostAPIHook: o.postAPIHook,
                      action: "PHONE_NUMBER_EXISTS",
                      userContext: c.userContext
                    })
                  ])
                ];
              case 2:
                return a = v.sent(), i = a.jsonBody, d = a.fetchResponse, [
                  2,
                  {
                    status: i.status,
                    doesExist: i.exists,
                    fetchResponse: d
                  }
                ];
            }
          });
        });
      },
      getLoginAttemptInfo: function() {
        return t(this, void 0, void 0, function() {
          var c;
          return n(this, function(a) {
            switch (a.label) {
              case 0:
                return [
                  4,
                  r.WindowHandlerReference.getReferenceOrThrow().windowHandler.localStorage.getItem(
                    g.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY
                  )
                ];
              case 1:
                if (c = a.sent(), c === null)
                  return [2, void 0];
                try {
                  return [2, JSON.parse(c)];
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
      setLoginAttemptInfo: function(c) {
        return t(this, void 0, void 0, function() {
          return n(this, function(a) {
            switch (a.label) {
              case 0:
                return [
                  4,
                  r.WindowHandlerReference.getReferenceOrThrow().windowHandler.localStorage.setItem(
                    g.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY,
                    JSON.stringify(
                      e(
                        {
                          // This can make future changes/migrations a lot cleaner
                          version: 1
                        },
                        c.attemptInfo
                      )
                    )
                  )
                ];
              case 1:
                return a.sent(), [
                  2
                  /*return*/
                ];
            }
          });
        });
      },
      clearLoginAttemptInfo: function() {
        return t(this, void 0, void 0, function() {
          return n(this, function(c) {
            return r.WindowHandlerReference.getReferenceOrThrow().windowHandler.localStorage.removeItem(
              g.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY
            ), [
              2
              /*return*/
            ];
          });
        });
      }
    };
  }
  return ye.default = l, ye.getRecipeImplementation = l, ye;
}
var to;
function na() {
  if (to) return Ee;
  to = 1;
  var e = Ee && Ee.__extends || /* @__PURE__ */ function() {
    var l = function(o, u) {
      return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, a) {
        c.__proto__ = a;
      } || function(c, a) {
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (c[i] = a[i]);
      }, l(o, u);
    };
    return function(o, u) {
      if (typeof u != "function" && u !== null)
        throw new TypeError("Class extends value " + String(u) + " is not a constructor or null");
      l(o, u);
      function c() {
        this.constructor = o;
      }
      o.prototype = u === null ? Object.create(u) : (c.prototype = u.prototype, new c());
    };
  }(), t = Ee && Ee.__assign || function() {
    return t = Object.assign || function(l) {
      for (var o, u = 1, c = arguments.length; u < c; u++) {
        o = arguments[u];
        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (l[a] = o[a]);
      }
      return l;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.Recipe = void 0;
  var n = cn(), r = Re(), s = jn(), h = Zi(), f = ta(), g = (
    /** @class */
    function(l) {
      e(o, l);
      function o(u) {
        var c = l.call(this, (0, h.normaliseUserInput)(u)) || this, a = new n.default(
          (0, f.default)({
            recipeId: c.config.recipeId,
            appInfo: c.config.appInfo,
            clientType: c.config.clientType,
            preAPIHook: c.config.preAPIHook,
            postAPIHook: c.config.postAPIHook
          })
        );
        return c.recipeImplementation = a.override(c.config.override.functions).build(), c;
      }
      return o.init = function(u) {
        return function(c, a) {
          return o.instance = new o(
            t(t({}, u), { recipeId: o.RECIPE_ID, appInfo: c, clientType: a })
          ), o.instance;
        };
      }, o.getInstanceOrThrow = function() {
        if (o.instance === void 0) {
          var u = "No instance of Passwordless found. Ensure that the 'Passwordless.init' method is called within the 'SuperTokens.init' recipeList.";
          throw u = (0, r.checkForSSRErrorAndAppendIfNeeded)(u), Error(u);
        }
        return o.instance;
      }, o.reset = function() {
        (0, r.isTest)() && (o.instance = void 0);
      }, o.RECIPE_ID = "passwordless", o;
    }(s.default)
  );
  return Ee.Recipe = g, Ee.default = g, Ee;
}
var no;
function ra() {
  if (no) return X;
  no = 1;
  var e = X && X.__assign || function() {
    return e = Object.assign || function(m) {
      for (var w, k = 1, I = arguments.length; k < I; k++) {
        w = arguments[k];
        for (var R in w) Object.prototype.hasOwnProperty.call(w, R) && (m[R] = w[R]);
      }
      return m;
    }, e.apply(this, arguments);
  }, t = X && X.__awaiter || function(m, w, k, I) {
    function R(T) {
      return T instanceof k ? T : new k(function(O) {
        O(T);
      });
    }
    return new (k || (k = Promise))(function(T, O) {
      function C(G) {
        try {
          A(I.next(G));
        } catch (Y) {
          O(Y);
        }
      }
      function E(G) {
        try {
          A(I.throw(G));
        } catch (Y) {
          O(Y);
        }
      }
      function A(G) {
        G.done ? T(G.value) : R(G.value).then(C, E);
      }
      A((I = I.apply(m, w || [])).next());
    });
  }, n = X && X.__generator || function(m, w) {
    var k = {
      label: 0,
      sent: function() {
        if (T[0] & 1) throw T[1];
        return T[1];
      },
      trys: [],
      ops: []
    }, I, R, T, O;
    return O = { next: C(0), throw: C(1), return: C(2) }, typeof Symbol == "function" && (O[Symbol.iterator] = function() {
      return this;
    }), O;
    function C(A) {
      return function(G) {
        return E([A, G]);
      };
    }
    function E(A) {
      if (I) throw new TypeError("Generator is already executing.");
      for (; k; )
        try {
          if (I = 1, R && (T = A[0] & 2 ? R.return : A[0] ? R.throw || ((T = R.return) && T.call(R), 0) : R.next) && !(T = T.call(R, A[1])).done)
            return T;
          switch (R = 0, T && (A = [A[0] & 2, T.value]), A[0]) {
            case 0:
            case 1:
              T = A;
              break;
            case 4:
              return k.label++, { value: A[1], done: !1 };
            case 5:
              k.label++, R = A[1], A = [0];
              continue;
            case 7:
              A = k.ops.pop(), k.trys.pop();
              continue;
            default:
              if (T = k.trys, !(T = T.length > 0 && T[T.length - 1]) && (A[0] === 6 || A[0] === 2)) {
                k = 0;
                continue;
              }
              if (A[0] === 3 && (!T || A[1] > T[0] && A[1] < T[3])) {
                k.label = A[1];
                break;
              }
              if (A[0] === 6 && k.label < T[1]) {
                k.label = T[1], T = A;
                break;
              }
              if (T && k.label < T[2]) {
                k.label = T[2], k.ops.push(A);
                break;
              }
              T[2] && k.ops.pop(), k.trys.pop();
              continue;
          }
          A = w.call(m, k);
        } catch (G) {
          A = [6, G], R = 0;
        } finally {
          I = T = 0;
        }
      if (A[0] & 5) throw A[1];
      return { value: A[0] ? A[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(X, "__esModule", { value: !0 }), X.clearLoginAttemptInfo = X.setLoginAttemptInfo = X.getLoginAttemptInfo = X.getTenantIdFromURL = X.getPreAuthSessionIdFromURL = X.getLinkCodeFromURL = X.signOut = X.doesPhoneNumberExist = X.doesEmailExist = X.consumeCode = X.resendCode = X.createCode = X.init = void 0;
  var r = Re(), s = dn(), h = na(), f = (
    /** @class */
    function() {
      function m() {
      }
      return m.init = function(w) {
        return h.default.init(w);
      }, m.createCode = function(w) {
        var k, I;
        return t(this, void 0, void 0, function() {
          var R, T, O, C, E;
          return n(this, function(A) {
            switch (A.label) {
              case 0:
                return R = h.default.getInstanceOrThrow(), T = R.recipeImplementation, O = (0, r.getNormalisedUserContext)(w.userContext), [
                  4,
                  s.default.getInstanceOrThrow().recipeImplementation.getTenantId({
                    userContext: w.userContext
                  })
                ];
              case 1:
                return C = A.sent(), [
                  4,
                  T.createCode(
                    e(e({}, w), {
                      shouldTryLinkingWithSessionUser: (k = w.shouldTryLinkingWithSessionUser) !== null && k !== void 0 ? k : !1,
                      userContext: O
                    })
                  )
                ];
              case 2:
                return E = A.sent(), E.status !== "OK" ? [3, 4] : [
                  4,
                  T.setLoginAttemptInfo({
                    attemptInfo: {
                      tenantId: C,
                      deviceId: E.deviceId,
                      preAuthSessionId: E.preAuthSessionId,
                      shouldTryLinkingWithSessionUser: (I = w.shouldTryLinkingWithSessionUser) !== null && I !== void 0 ? I : !1,
                      flowType: E.flowType
                    },
                    userContext: O
                  })
                ];
              case 3:
                A.sent(), A.label = 4;
              case 4:
                return [2, E];
            }
          });
        });
      }, m.resendCode = function(w) {
        return t(this, void 0, void 0, function() {
          var k, I, R, T;
          return n(this, function(O) {
            switch (O.label) {
              case 0:
                return k = h.default.getInstanceOrThrow(), I = k.recipeImplementation, R = (0, r.getNormalisedUserContext)(
                  w == null ? void 0 : w.userContext
                ), [
                  4,
                  I.getLoginAttemptInfo({
                    userContext: R
                  })
                ];
              case 1:
                return T = O.sent(), [
                  2,
                  I.resendCode(
                    e(e({}, w), {
                      tenantId: T == null ? void 0 : T.tenantId,
                      userContext: R,
                      deviceId: T === void 0 ? "" : T.deviceId,
                      preAuthSessionId: T === void 0 ? "" : T.preAuthSessionId,
                      shouldTryLinkingWithSessionUser: T == null ? void 0 : T.shouldTryLinkingWithSessionUser
                    })
                  )
                ];
            }
          });
        });
      }, m.consumeCode = function(w) {
        var k;
        return t(this, void 0, void 0, function() {
          var I, R, T, O, C, E, E, A, G, Y;
          return n(this, function(ae) {
            switch (ae.label) {
              case 0:
                return I = h.default.getInstanceOrThrow(), R = I.recipeImplementation, T = (0, r.getNormalisedUserContext)(
                  w == null ? void 0 : w.userContext
                ), w !== void 0 && "userInputCode" in w ? [
                  4,
                  R.getLoginAttemptInfo({
                    userContext: T
                  })
                ] : [3, 2];
              case 1:
                return C = ae.sent(), E = (k = C == null ? void 0 : C.shouldTryLinkingWithSessionUser) !== null && k !== void 0 ? k : !1, O = {
                  userInputCode: w.userInputCode,
                  deviceId: C === void 0 ? "" : C.deviceId,
                  preAuthSessionId: C === void 0 ? "" : C.preAuthSessionId,
                  shouldTryLinkingWithSessionUser: E,
                  tenantId: C == null ? void 0 : C.tenantId
                }, [3, 3];
              case 2:
                E = !1, A = R.getLinkCodeFromURL({
                  userContext: T
                }), G = R.getTenantIdFromURL({
                  userContext: T
                }), Y = R.getPreAuthSessionIdFromURL({
                  userContext: T
                }), O = {
                  tenantId: G,
                  linkCode: A,
                  preAuthSessionId: Y,
                  shouldTryLinkingWithSessionUser: E
                }, ae.label = 3;
              case 3:
                return [
                  2,
                  R.consumeCode(
                    e(
                      {
                        userContext: T,
                        options: w == null ? void 0 : w.options
                      },
                      O
                    )
                  )
                ];
            }
          });
        });
      }, m.getLinkCodeFromURL = function(w) {
        return h.default.getInstanceOrThrow().recipeImplementation.getLinkCodeFromURL(
          e(e({}, w), {
            userContext: (0, r.getNormalisedUserContext)(
              w == null ? void 0 : w.userContext
            )
          })
        );
      }, m.getPreAuthSessionIdFromURL = function(w) {
        return h.default.getInstanceOrThrow().recipeImplementation.getPreAuthSessionIdFromURL(
          e(e({}, w), {
            userContext: (0, r.getNormalisedUserContext)(
              w == null ? void 0 : w.userContext
            )
          })
        );
      }, m.getTenantIdFromURL = function(w) {
        return h.default.getInstanceOrThrow().recipeImplementation.getTenantIdFromURL(
          e(e({}, w), {
            userContext: (0, r.getNormalisedUserContext)(
              w == null ? void 0 : w.userContext
            )
          })
        );
      }, m.doesEmailExist = function(w) {
        return h.default.getInstanceOrThrow().recipeImplementation.doesEmailExist(
          e(e({}, w), { userContext: (0, r.getNormalisedUserContext)(w.userContext) })
        );
      }, m.doesPhoneNumberExist = function(w) {
        return h.default.getInstanceOrThrow().recipeImplementation.doesPhoneNumberExist(
          e(e({}, w), { userContext: (0, r.getNormalisedUserContext)(w.userContext) })
        );
      }, m.getLoginAttemptInfo = function(w) {
        return h.default.getInstanceOrThrow().recipeImplementation.getLoginAttemptInfo(
          e(e({}, w), {
            userContext: (0, r.getNormalisedUserContext)(
              w == null ? void 0 : w.userContext
            )
          })
        );
      }, m.setLoginAttemptInfo = function(w) {
        return t(this, void 0, void 0, function() {
          var k, I, R;
          return n(this, function(T) {
            switch (T.label) {
              case 0:
                return k = (0, r.getNormalisedUserContext)(w.userContext), I = h.default.getInstanceOrThrow(), [
                  4,
                  s.default.getInstanceOrThrow().recipeImplementation.getTenantId({ userContext: k })
                ];
              case 1:
                return R = T.sent(), [
                  2,
                  I.recipeImplementation.setLoginAttemptInfo({
                    attemptInfo: e(
                      {
                        tenantId: R,
                        shouldTryLinkingWithSessionUser: w.attemptInfo.shouldTryLinkingWithSessionUser
                      },
                      w.attemptInfo
                    ),
                    userContext: k
                  })
                ];
            }
          });
        });
      }, m.clearLoginAttemptInfo = function(w) {
        return h.default.getInstanceOrThrow().recipeImplementation.clearLoginAttemptInfo(
          e(e({}, w), {
            userContext: (0, r.getNormalisedUserContext)(
              w == null ? void 0 : w.userContext
            )
          })
        );
      }, m.signOut = function(w) {
        return h.default.getInstanceOrThrow().signOut({
          userContext: (0, r.getNormalisedUserContext)(
            w == null ? void 0 : w.userContext
          )
        });
      }, m;
    }()
  );
  X.default = f;
  var g = f.init;
  X.init = g;
  var l = f.createCode;
  X.createCode = l;
  var o = f.resendCode;
  X.resendCode = o;
  var u = f.consumeCode;
  X.consumeCode = u;
  var c = f.doesEmailExist;
  X.doesEmailExist = c;
  var a = f.doesPhoneNumberExist;
  X.doesPhoneNumberExist = a;
  var i = f.signOut;
  X.signOut = i;
  var d = f.getLinkCodeFromURL;
  X.getLinkCodeFromURL = d;
  var p = f.getPreAuthSessionIdFromURL;
  X.getPreAuthSessionIdFromURL = p;
  var y = f.getTenantIdFromURL;
  X.getTenantIdFromURL = y;
  var v = f.getLoginAttemptInfo;
  X.getLoginAttemptInfo = v;
  var b = f.setLoginAttemptInfo;
  X.setLoginAttemptInfo = b;
  var S = f.clearLoginAttemptInfo;
  return X.clearLoginAttemptInfo = S, X;
}
var ro;
function oa() {
  return ro || (ro = 1, function(e) {
    function t(n) {
      for (var r in n) e.hasOwnProperty(r) || (e[r] = n[r]);
    }
    e.__esModule = !0, t(ra());
  }(In)), In;
}
var ia = oa();
const aa = /* @__PURE__ */ un(ia);
var Tn = {}, ie = {}, xe = {}, ut = {}, oo;
function sa() {
  if (oo) return ut;
  oo = 1;
  var e = ut && ut.__assign || function() {
    return e = Object.assign || function(r) {
      for (var s, h = 1, f = arguments.length; h < f; h++) {
        s = arguments[h];
        for (var g in s) Object.prototype.hasOwnProperty.call(s, g) && (r[g] = s[g]);
      }
      return r;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(ut, "__esModule", { value: !0 }), ut.normaliseUserInput = void 0;
  var t = Hn();
  function n(r) {
    var s = e(
      {
        functions: function(h) {
          return h;
        }
      },
      r.override
    );
    return e(e({}, (0, t.normaliseAuthRecipe)(r)), { override: s });
  }
  return ut.normaliseUserInput = n, ut;
}
var Se = {}, io;
function ua() {
  if (io) return Se;
  io = 1;
  var e = Se && Se.__assign || function() {
    return e = Object.assign || function(l) {
      for (var o, u = 1, c = arguments.length; u < c; u++) {
        o = arguments[u];
        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (l[a] = o[a]);
      }
      return l;
    }, e.apply(this, arguments);
  }, t = Se && Se.__awaiter || function(l, o, u, c) {
    function a(i) {
      return i instanceof u ? i : new u(function(d) {
        d(i);
      });
    }
    return new (u || (u = Promise))(function(i, d) {
      function p(b) {
        try {
          v(c.next(b));
        } catch (S) {
          d(S);
        }
      }
      function y(b) {
        try {
          v(c.throw(b));
        } catch (S) {
          d(S);
        }
      }
      function v(b) {
        b.done ? i(b.value) : a(b.value).then(p, y);
      }
      v((c = c.apply(l, o || [])).next());
    });
  }, n = Se && Se.__generator || function(l, o) {
    var u = {
      label: 0,
      sent: function() {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: []
    }, c, a, i, d;
    return d = { next: p(0), throw: p(1), return: p(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
      return this;
    }), d;
    function p(v) {
      return function(b) {
        return y([v, b]);
      };
    }
    function y(v) {
      if (c) throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (c = 1, a && (i = v[0] & 2 ? a.return : v[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, v[1])).done)
            return i;
          switch (a = 0, i && (v = [v[0] & 2, i.value]), v[0]) {
            case 0:
            case 1:
              i = v;
              break;
            case 4:
              return u.label++, { value: v[1], done: !1 };
            case 5:
              u.label++, a = v[1], v = [0];
              continue;
            case 7:
              v = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (i = u.trys, !(i = i.length > 0 && i[i.length - 1]) && (v[0] === 6 || v[0] === 2)) {
                u = 0;
                continue;
              }
              if (v[0] === 3 && (!i || v[1] > i[0] && v[1] < i[3])) {
                u.label = v[1];
                break;
              }
              if (v[0] === 6 && u.label < i[1]) {
                u.label = i[1], i = v;
                break;
              }
              if (i && u.label < i[2]) {
                u.label = i[2], u.ops.push(v);
                break;
              }
              i[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          v = o.call(l, u);
        } catch (b) {
          v = [6, b], a = 0;
        } finally {
          c = i = 0;
        }
      if (v[0] & 5) throw v[1];
      return { value: v[0] ? v[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Se, "__esModule", { value: !0 }), Se.getRecipeImplementation = void 0;
  var r = Nn(), s = Re(), h = No(), f = ln();
  function g(l) {
    var o = new r.default(l.recipeId, l.appInfo);
    return {
      getStateAndOtherInfoFromStorage: function() {
        var u = f.WindowHandlerReference.getReferenceOrThrow().windowHandler.sessionStorage.getItemSync(
          "supertokens-oauth-state-2"
        );
        if (u !== null)
          try {
            return JSON.parse(u);
          } catch {
            return;
          }
      },
      setStateAndOtherInfoToStorage: function(u) {
        return t(this, void 0, void 0, function() {
          var c;
          return n(this, function(a) {
            switch (a.label) {
              case 0:
                return c = JSON.stringify(e({}, u.state)), [
                  4,
                  f.WindowHandlerReference.getReferenceOrThrow().windowHandler.sessionStorage.setItem(
                    "supertokens-oauth-state-2",
                    c
                  )
                ];
              case 1:
                return a.sent(), [
                  2
                  /*return*/
                ];
            }
          });
        });
      },
      getAuthorisationURLWithQueryParamsAndSetState: function(u) {
        return t(this, void 0, void 0, function() {
          var c, a, i, d, p;
          return n(this, function(y) {
            switch (y.label) {
              case 0:
                return [
                  4,
                  this.getAuthorisationURLFromBackend({
                    thirdPartyId: u.thirdPartyId,
                    tenantId: u.tenantId,
                    redirectURIOnProviderDashboard: u.redirectURIOnProviderDashboard || u.frontendRedirectURI,
                    userContext: u.userContext,
                    options: u.options
                  })
                ];
              case 1:
                return c = y.sent(), a = u.redirectURIOnProviderDashboard !== void 0 && u.frontendRedirectURI !== u.redirectURIOnProviderDashboard ? u.frontendRedirectURI : void 0, i = this.generateStateToSendToOAuthProvider({
                  frontendRedirectURI: a,
                  userContext: u.userContext
                }), d = Date.now() + 1e3 * 60 * 10, [
                  4,
                  this.setStateAndOtherInfoToStorage({
                    state: {
                      stateForAuthProvider: i,
                      thirdPartyId: u.thirdPartyId,
                      tenantId: u.tenantId,
                      expiresAt: d,
                      redirectURIOnProviderDashboard: u.redirectURIOnProviderDashboard || u.frontendRedirectURI,
                      shouldTryLinkingWithSessionUser: u.shouldTryLinkingWithSessionUser,
                      pkceCodeVerifier: c.pkceCodeVerifier
                    },
                    userContext: u.userContext
                  })
                ];
              case 2:
                return y.sent(), p = (0, s.appendQueryParamsToURL)(c.urlWithQueryParams, {
                  state: i
                }), [2, p];
            }
          });
        });
      },
      getAuthorisationURLFromBackend: function(u) {
        return t(this, void 0, void 0, function() {
          var c, a, i, d;
          return n(this, function(p) {
            switch (p.label) {
              case 0:
                return c = {
                  thirdPartyId: u.thirdPartyId,
                  redirectURIOnProviderDashboard: u.redirectURIOnProviderDashboard
                }, l.clientType !== void 0 && (c.clientType = l.clientType), [
                  4,
                  o.get(
                    u.tenantId,
                    "/authorisationurl",
                    {},
                    c,
                    r.default.preparePreAPIHook({
                      recipePreAPIHook: l.preAPIHook,
                      action: "GET_AUTHORISATION_URL",
                      options: u.options,
                      userContext: u.userContext
                    }),
                    r.default.preparePostAPIHook({
                      recipePostAPIHook: l.postAPIHook,
                      action: "GET_AUTHORISATION_URL",
                      userContext: u.userContext
                    })
                  )
                ];
              case 1:
                return a = p.sent(), i = a.jsonBody, d = a.fetchResponse, [
                  2,
                  {
                    status: "OK",
                    urlWithQueryParams: i.urlWithQueryParams,
                    pkceCodeVerifier: i.pkceCodeVerifier,
                    fetchResponse: d
                  }
                ];
            }
          });
        });
      },
      signInAndUp: function(u) {
        return t(this, void 0, void 0, function() {
          var c, a, i, d, p, y, v, b, S;
          return n(this, function(m) {
            switch (m.label) {
              case 0:
                return c = this.getStateAndOtherInfoFromStorage({
                  userContext: u.userContext
                }), a = this.getAuthStateFromURL({
                  userContext: u.userContext
                }), [
                  4,
                  this.verifyAndGetStateOrThrowError({
                    stateFromAuthProvider: a,
                    stateObjectFromStorage: c,
                    userContext: u.userContext
                  })
                ];
              case 1:
                if (i = m.sent(), d = this.getAuthErrorFromURL({
                  userContext: u.userContext
                }), d !== void 0)
                  throw new Error("Auth provider responded with error: ".concat(d));
                return p = (0, s.getAllQueryParams)(), y = Object.fromEntries(p), [
                  4,
                  o.post(
                    i.tenantId,
                    "/signinup",
                    {
                      body: JSON.stringify({
                        thirdPartyId: i.thirdPartyId,
                        clientType: l.clientType,
                        redirectURIInfo: {
                          redirectURIOnProviderDashboard: i.redirectURIOnProviderDashboard,
                          redirectURIQueryParams: y,
                          pkceCodeVerifier: i.pkceCodeVerifier
                        },
                        shouldTryLinkingWithSessionUser: i.shouldTryLinkingWithSessionUser
                      })
                    },
                    r.default.preparePreAPIHook({
                      recipePreAPIHook: l.preAPIHook,
                      action: "THIRD_PARTY_SIGN_IN_UP",
                      options: u.options,
                      userContext: u.userContext
                    }),
                    r.default.preparePostAPIHook({
                      recipePostAPIHook: l.postAPIHook,
                      action: "THIRD_PARTY_SIGN_IN_UP",
                      userContext: u.userContext
                    })
                  )
                ];
              case 2:
                if (v = m.sent(), b = v.jsonBody, S = v.fetchResponse, b.status === "FIELD_ERROR")
                  throw new h.default(b.error);
                return b.status !== "OK" ? [
                  2,
                  e(e({}, b), { fetchResponse: S })
                ] : [
                  2,
                  e(
                    e(
                      { status: "OK" },
                      (0, s.normaliseUserResponse)("thirdparty", b)
                    ),
                    { fetchResponse: S }
                  )
                ];
            }
          });
        });
      },
      generateStateToSendToOAuthProvider: function(u) {
        var c = {
          state: "".concat(1e20).replace(/[018]/g, function(a) {
            return (parseInt(a) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> parseInt(a) / 4).toString(16);
          })
        };
        return u !== void 0 && u.frontendRedirectURI !== void 0 && (c.frontendRedirectURI = u.frontendRedirectURI), btoa(JSON.stringify(c));
      },
      verifyAndGetStateOrThrowError: function(u) {
        return t(this, void 0, void 0, function() {
          return n(this, function(c) {
            if (u.stateObjectFromStorage === void 0 || u.stateObjectFromStorage.stateForAuthProvider === void 0)
              throw new Error("No valid auth state present in session storage");
            if (u.stateFromAuthProvider === void 0)
              throw new Error("No state recieved from auth provider");
            if (u.stateObjectFromStorage.expiresAt < Date.now())
              throw new Error("Auth state verification failed. The auth provider took too long to respond");
            if (u.stateFromAuthProvider !== u.stateObjectFromStorage.stateForAuthProvider)
              throw new Error(
                "Auth state verification failed. The auth provider responded with an invalid state"
              );
            return [2, u.stateObjectFromStorage];
          });
        });
      },
      getAuthErrorFromURL: function() {
        return (0, s.getQueryParams)("error");
      },
      getAuthStateFromURL: function() {
        var u = (0, s.getQueryParams)("state");
        return u === void 0 ? "" : u;
      }
    };
  }
  return Se.default = g, Se.getRecipeImplementation = g, Se;
}
var ao;
function la() {
  if (ao) return xe;
  ao = 1;
  var e = xe && xe.__extends || /* @__PURE__ */ function() {
    var l = function(o, u) {
      return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, a) {
        c.__proto__ = a;
      } || function(c, a) {
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (c[i] = a[i]);
      }, l(o, u);
    };
    return function(o, u) {
      if (typeof u != "function" && u !== null)
        throw new TypeError("Class extends value " + String(u) + " is not a constructor or null");
      l(o, u);
      function c() {
        this.constructor = o;
      }
      o.prototype = u === null ? Object.create(u) : (c.prototype = u.prototype, new c());
    };
  }(), t = xe && xe.__assign || function() {
    return t = Object.assign || function(l) {
      for (var o, u = 1, c = arguments.length; u < c; u++) {
        o = arguments[u];
        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (l[a] = o[a]);
      }
      return l;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(xe, "__esModule", { value: !0 }), xe.Recipe = void 0;
  var n = sa(), r = cn(), s = ua(), h = Re(), f = jn(), g = (
    /** @class */
    function(l) {
      e(o, l);
      function o(u) {
        var c = l.call(this, (0, n.normaliseUserInput)(u)) || this, a = new r.default(
          (0, s.default)({
            recipeId: c.config.recipeId,
            appInfo: c.config.appInfo,
            clientType: c.config.clientType,
            preAPIHook: c.config.preAPIHook,
            postAPIHook: c.config.postAPIHook
          })
        );
        return c.recipeImplementation = a.override(c.config.override.functions).build(), c;
      }
      return o.init = function(u) {
        return function(c, a) {
          return o.instance = new o(
            t(t({}, u), { recipeId: o.RECIPE_ID, appInfo: c, clientType: a })
          ), o.instance;
        };
      }, o.getInstanceOrThrow = function() {
        if (o.instance === void 0) {
          var u = "No instance of ThirdParty found. Ensure that the 'ThirdParty.init' method is called within the 'SuperTokens.init' recipeList.";
          throw u = (0, h.checkForSSRErrorAndAppendIfNeeded)(u), Error(u);
        }
        return o.instance;
      }, o.reset = function() {
        (0, h.isTest)() && (o.instance = void 0);
      }, o.RECIPE_ID = "thirdparty", o;
    }(f.default)
  );
  return xe.Recipe = g, xe.default = g, xe;
}
var so;
function ca() {
  if (so) return ie;
  so = 1;
  var e = ie && ie.__assign || function() {
    return e = Object.assign || function(a) {
      for (var i, d = 1, p = arguments.length; d < p; d++) {
        i = arguments[d];
        for (var y in i) Object.prototype.hasOwnProperty.call(i, y) && (a[y] = i[y]);
      }
      return a;
    }, e.apply(this, arguments);
  }, t = ie && ie.__awaiter || function(a, i, d, p) {
    function y(v) {
      return v instanceof d ? v : new d(function(b) {
        b(v);
      });
    }
    return new (d || (d = Promise))(function(v, b) {
      function S(k) {
        try {
          w(p.next(k));
        } catch (I) {
          b(I);
        }
      }
      function m(k) {
        try {
          w(p.throw(k));
        } catch (I) {
          b(I);
        }
      }
      function w(k) {
        k.done ? v(k.value) : y(k.value).then(S, m);
      }
      w((p = p.apply(a, i || [])).next());
    });
  }, n = ie && ie.__generator || function(a, i) {
    var d = {
      label: 0,
      sent: function() {
        if (v[0] & 1) throw v[1];
        return v[1];
      },
      trys: [],
      ops: []
    }, p, y, v, b;
    return b = { next: S(0), throw: S(1), return: S(2) }, typeof Symbol == "function" && (b[Symbol.iterator] = function() {
      return this;
    }), b;
    function S(w) {
      return function(k) {
        return m([w, k]);
      };
    }
    function m(w) {
      if (p) throw new TypeError("Generator is already executing.");
      for (; d; )
        try {
          if (p = 1, y && (v = w[0] & 2 ? y.return : w[0] ? y.throw || ((v = y.return) && v.call(y), 0) : y.next) && !(v = v.call(y, w[1])).done)
            return v;
          switch (y = 0, v && (w = [w[0] & 2, v.value]), w[0]) {
            case 0:
            case 1:
              v = w;
              break;
            case 4:
              return d.label++, { value: w[1], done: !1 };
            case 5:
              d.label++, y = w[1], w = [0];
              continue;
            case 7:
              w = d.ops.pop(), d.trys.pop();
              continue;
            default:
              if (v = d.trys, !(v = v.length > 0 && v[v.length - 1]) && (w[0] === 6 || w[0] === 2)) {
                d = 0;
                continue;
              }
              if (w[0] === 3 && (!v || w[1] > v[0] && w[1] < v[3])) {
                d.label = w[1];
                break;
              }
              if (w[0] === 6 && d.label < v[1]) {
                d.label = v[1], v = w;
                break;
              }
              if (v && d.label < v[2]) {
                d.label = v[2], d.ops.push(w);
                break;
              }
              v[2] && d.ops.pop(), d.trys.pop();
              continue;
          }
          w = i.call(a, d);
        } catch (k) {
          w = [6, k], y = 0;
        } finally {
          p = v = 0;
        }
      if (w[0] & 5) throw w[1];
      return { value: w[0] ? w[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(ie, "__esModule", { value: !0 }), ie.signOut = ie.signInAndUp = ie.getAuthorisationURLWithQueryParamsAndSetState = ie.getStateAndOtherInfoFromStorage = ie.init = void 0;
  var r = Re(), s = dn(), h = la(), f = (
    /** @class */
    function() {
      function a() {
      }
      return a.init = function(i) {
        return h.default.init(i);
      }, a.signOut = function(i) {
        return h.default.getInstanceOrThrow().signOut({
          userContext: (0, r.getNormalisedUserContext)(
            i == null ? void 0 : i.userContext
          )
        });
      }, a.getStateAndOtherInfoFromStorage = function(i) {
        return h.default.getInstanceOrThrow().recipeImplementation.getStateAndOtherInfoFromStorage(
          e(e({}, i), {
            userContext: (0, r.getNormalisedUserContext)(
              i == null ? void 0 : i.userContext
            )
          })
        );
      }, a.getAuthorisationURLWithQueryParamsAndSetState = function(i) {
        return t(this, void 0, void 0, function() {
          var d, p, y;
          return n(this, function(v) {
            switch (v.label) {
              case 0:
                return d = (0, r.getNormalisedUserContext)(i.userContext), p = h.default.getInstanceOrThrow(), [
                  4,
                  s.default.getInstanceOrThrow().recipeImplementation.getTenantId({ userContext: d })
                ];
              case 1:
                return y = v.sent(), [
                  2,
                  p.recipeImplementation.getAuthorisationURLWithQueryParamsAndSetState(
                    e(e({ tenantId: y }, i), {
                      shouldTryLinkingWithSessionUser: i == null ? void 0 : i.shouldTryLinkingWithSessionUser,
                      userContext: d
                    })
                  )
                ];
            }
          });
        });
      }, a.signInAndUp = function(i) {
        return h.default.getInstanceOrThrow().recipeImplementation.signInAndUp(
          e(e({}, i), {
            userContext: (0, r.getNormalisedUserContext)(
              i == null ? void 0 : i.userContext
            )
          })
        );
      }, a;
    }()
  );
  ie.default = f;
  var g = f.init;
  ie.init = g;
  var l = f.getAuthorisationURLWithQueryParamsAndSetState;
  ie.getAuthorisationURLWithQueryParamsAndSetState = l;
  var o = f.getStateAndOtherInfoFromStorage;
  ie.getStateAndOtherInfoFromStorage = o;
  var u = f.signInAndUp;
  ie.signInAndUp = u;
  var c = f.signOut;
  return ie.signOut = c, ie;
}
var uo;
function da() {
  return uo || (uo = 1, function(e) {
    function t(n) {
      for (var r in n) e.hasOwnProperty(r) || (e[r] = n[r]);
    }
    e.__esModule = !0, t(ca());
  }(Tn)), Tn;
}
var fa = da();
const ha = /* @__PURE__ */ un(fa);
var Rn = {}, lt = {}, lo;
function ga() {
  return lo || (lo = 1, function(e) {
    var t = lt && lt.__awaiter || function(b, S, m, w) {
      function k(I) {
        return I instanceof m ? I : new m(function(R) {
          R(I);
        });
      }
      return new (m || (m = Promise))(function(I, R) {
        function T(E) {
          try {
            C(w.next(E));
          } catch (A) {
            R(A);
          }
        }
        function O(E) {
          try {
            C(w.throw(E));
          } catch (A) {
            R(A);
          }
        }
        function C(E) {
          E.done ? I(E.value) : k(E.value).then(T, O);
        }
        C((w = w.apply(b, S || [])).next());
      });
    }, n = lt && lt.__generator || function(b, S) {
      var m = {
        label: 0,
        sent: function() {
          if (I[0] & 1) throw I[1];
          return I[1];
        },
        trys: [],
        ops: []
      }, w, k, I, R;
      return R = { next: T(0), throw: T(1), return: T(2) }, typeof Symbol == "function" && (R[Symbol.iterator] = function() {
        return this;
      }), R;
      function T(C) {
        return function(E) {
          return O([C, E]);
        };
      }
      function O(C) {
        if (w) throw new TypeError("Generator is already executing.");
        for (; m; )
          try {
            if (w = 1, k && (I = C[0] & 2 ? k.return : C[0] ? k.throw || ((I = k.return) && I.call(k), 0) : k.next) && !(I = I.call(k, C[1])).done)
              return I;
            switch (k = 0, I && (C = [C[0] & 2, I.value]), C[0]) {
              case 0:
              case 1:
                I = C;
                break;
              case 4:
                return m.label++, { value: C[1], done: !1 };
              case 5:
                m.label++, k = C[1], C = [0];
                continue;
              case 7:
                C = m.ops.pop(), m.trys.pop();
                continue;
              default:
                if (I = m.trys, !(I = I.length > 0 && I[I.length - 1]) && (C[0] === 6 || C[0] === 2)) {
                  m = 0;
                  continue;
                }
                if (C[0] === 3 && (!I || C[1] > I[0] && C[1] < I[3])) {
                  m.label = C[1];
                  break;
                }
                if (C[0] === 6 && m.label < I[1]) {
                  m.label = I[1], I = C;
                  break;
                }
                if (I && m.label < I[2]) {
                  m.label = I[2], m.ops.push(C);
                  break;
                }
                I[2] && m.ops.pop(), m.trys.pop();
                continue;
            }
            C = S.call(b, m);
          } catch (E) {
            C = [6, E], k = 0;
          } finally {
            w = I = 0;
          }
        if (C[0] & 5) throw C[1];
        return { value: C[0] ? C[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.getInvalidClaimsFromResponse = e.getClaimValue = e.validateClaims = e.signOut = e.addAxiosInterceptors = e.doesSessionExist = e.attemptRefreshingSession = e.getAccessToken = e.getAccessTokenPayloadSecurely = e.getUserId = e.init = e.BooleanClaim = e.PrimitiveArrayClaim = e.PrimitiveClaim = void 0;
    var r = Re(), s = Vo(), h = (
      /** @class */
      function() {
        function b() {
        }
        return b.init = function(S) {
          return s.default.init(S);
        }, b.getUserId = function(S) {
          return s.default.getInstanceOrThrow().getUserId({
            userContext: (0, r.getNormalisedUserContext)(
              S == null ? void 0 : S.userContext
            )
          });
        }, b.getAccessToken = function(S) {
          return s.default.getInstanceOrThrow().getAccessToken({
            userContext: (0, r.getNormalisedUserContext)(
              S == null ? void 0 : S.userContext
            )
          });
        }, b.getAccessTokenPayloadSecurely = function(S) {
          return t(this, void 0, void 0, function() {
            return n(this, function(m) {
              return [
                2,
                s.default.getInstanceOrThrow().getAccessTokenPayloadSecurely({
                  userContext: (0, r.getNormalisedUserContext)(
                    S == null ? void 0 : S.userContext
                  )
                })
              ];
            });
          });
        }, b.attemptRefreshingSession = function() {
          return t(this, void 0, void 0, function() {
            return n(this, function(S) {
              return [2, s.default.getInstanceOrThrow().attemptRefreshingSession()];
            });
          });
        }, b.doesSessionExist = function(S) {
          return s.default.getInstanceOrThrow().doesSessionExist({
            userContext: (0, r.getNormalisedUserContext)(
              S == null ? void 0 : S.userContext
            )
          });
        }, b.addAxiosInterceptors = function(S, m) {
          return s.default.addAxiosInterceptors(S, (0, r.getNormalisedUserContext)(m));
        }, b.signOut = function(S) {
          return s.default.getInstanceOrThrow().signOut({
            userContext: (0, r.getNormalisedUserContext)(
              S == null ? void 0 : S.userContext
            )
          });
        }, b.getClaimValue = function(S) {
          return s.default.getInstanceOrThrow().getClaimValue({
            claim: S.claim,
            userContext: (0, r.getNormalisedUserContext)(
              S == null ? void 0 : S.userContext
            )
          });
        }, b.validateClaims = function(S) {
          return s.default.getInstanceOrThrow().validateClaims({
            overrideGlobalClaimValidators: S == null ? void 0 : S.overrideGlobalClaimValidators,
            userContext: (0, r.getNormalisedUserContext)(
              S == null ? void 0 : S.userContext
            )
          });
        }, b.getInvalidClaimsFromResponse = function(S) {
          return s.default.getInstanceOrThrow().getInvalidClaimsFromResponse({
            response: S.response,
            userContext: (0, r.getNormalisedUserContext)(
              S == null ? void 0 : S.userContext
            )
          });
        }, b;
      }()
    );
    e.default = h;
    var f = h.init;
    e.init = f;
    var g = h.getUserId;
    e.getUserId = g;
    var l = h.getAccessTokenPayloadSecurely;
    e.getAccessTokenPayloadSecurely = l;
    var o = h.getAccessToken;
    e.getAccessToken = o;
    var u = h.attemptRefreshingSession;
    e.attemptRefreshingSession = u;
    var c = h.doesSessionExist;
    e.doesSessionExist = c;
    var a = h.addAxiosInterceptors;
    e.addAxiosInterceptors = a;
    var i = h.signOut;
    e.signOut = i;
    var d = h.validateClaims;
    e.validateClaims = d;
    var p = h.getClaimValue;
    e.getClaimValue = p;
    var y = h.getInvalidClaimsFromResponse;
    e.getInvalidClaimsFromResponse = y;
    var v = qo();
    Object.defineProperty(e, "PrimitiveClaim", {
      enumerable: !0,
      get: function() {
        return v.PrimitiveClaim;
      }
    }), Object.defineProperty(e, "PrimitiveArrayClaim", {
      enumerable: !0,
      get: function() {
        return v.PrimitiveArrayClaim;
      }
    }), Object.defineProperty(e, "BooleanClaim", {
      enumerable: !0,
      get: function() {
        return v.BooleanClaim;
      }
    });
  }(lt)), lt;
}
var co;
function va() {
  return co || (co = 1, function(e) {
    function t(n) {
      for (var r in n) e.hasOwnProperty(r) || (e[r] = n[r]);
    }
    e.__esModule = !0, t(ga());
  }(Rn)), Rn;
}
var pa = va();
const Bo = /* @__PURE__ */ un(pa);
function xt(...e) {
  if (e) {
    let t = [];
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      if (!r)
        continue;
      const s = typeof r;
      if (s === "string" || s === "number")
        t.push(r);
      else if (s === "object") {
        const h = Array.isArray(r) ? [xt(...r)] : Object.entries(r).map(([f, g]) => g ? f : void 0);
        t = h.length ? t.concat(h.filter((f) => !!f)) : t;
      }
    }
    return t.join(" ").trim();
  }
}
function ma(e, t) {
  return e ? e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className) : !1;
}
function ba(e, t) {
  if (e && t) {
    const n = (r) => {
      ma(e, r) || (e.classList ? e.classList.add(r) : e.className += " " + r);
    };
    [t].flat().filter(Boolean).forEach((r) => r.split(" ").forEach(n));
  }
}
function Cn(e, t) {
  if (e && t) {
    const n = (r) => {
      e.classList ? e.classList.remove(r) : e.className = e.className.replace(new RegExp("(^|\\b)" + r.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [t].flat().filter(Boolean).forEach((r) => r.split(" ").forEach(n));
  }
}
function fo(e) {
  return e ? Math.abs(e.scrollLeft) : 0;
}
function ya(e, t) {
  return e instanceof HTMLElement ? e.offsetWidth : 0;
}
function Sa(e) {
  if (e) {
    let t = e.parentNode;
    return t && t instanceof ShadowRoot && t.host && (t = t.host), t;
  }
  return null;
}
function wa(e) {
  return !!(e !== null && typeof e < "u" && e.nodeName && Sa(e));
}
function zt(e) {
  return typeof HTMLElement < "u" ? e instanceof HTMLElement : e !== null && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
}
function an(e, t = {}) {
  if (zt(e)) {
    const n = (r, s) => {
      var h, f;
      const g = (h = e == null ? void 0 : e.$attrs) != null && h[r] ? [(f = e == null ? void 0 : e.$attrs) == null ? void 0 : f[r]] : [];
      return [s].flat().reduce((l, o) => {
        if (o != null) {
          const u = typeof o;
          if (u === "string" || u === "number")
            l.push(o);
          else if (u === "object") {
            const c = Array.isArray(o) ? n(r, o) : Object.entries(o).map(([a, i]) => r === "style" && (i || i === 0) ? `${a.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${i}` : i ? a : void 0);
            l = c.length ? l.concat(c.filter((a) => !!a)) : l;
          }
        }
        return l;
      }, g);
    };
    Object.entries(t).forEach(([r, s]) => {
      if (s != null) {
        const h = r.match(/^on(.+)/);
        h ? e.addEventListener(h[1].toLowerCase(), s) : r === "p-bind" || r === "pBind" ? an(e, s) : (s = r === "class" ? [...new Set(n("class", s))].join(" ").trim() : r === "style" ? n("style", s).join(";").trim() : s, (e.$attrs = e.$attrs || {}) && (e.$attrs[r] = s), e.setAttribute(r, s));
      }
    });
  }
}
function ka(e, t = {}, ...n) {
  {
    const r = document.createElement(e);
    return an(r, t), r.append(...n), r;
  }
}
function _a(e, t) {
  return zt(e) ? e.matches(t) ? e : e.querySelector(t) : null;
}
function Ia(e, t) {
  if (zt(e)) {
    const n = e.getAttribute(t);
    return isNaN(n) ? n === "true" || n === "false" ? n === "true" : n : +n;
  }
}
function ho(e) {
  if (e) {
    let t = e.offsetHeight;
    const n = getComputedStyle(e);
    return t -= parseFloat(n.paddingTop) + parseFloat(n.paddingBottom) + parseFloat(n.borderTopWidth) + parseFloat(n.borderBottomWidth), t;
  }
  return 0;
}
function Ta(e) {
  if (e) {
    const t = e.getBoundingClientRect();
    return {
      top: t.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: t.left + (window.pageXOffset || fo(document.documentElement) || fo(document.body) || 0)
    };
  }
  return {
    top: "auto",
    left: "auto"
  };
}
function Ra(e, t) {
  return e ? e.offsetHeight : 0;
}
function go(e) {
  if (e) {
    let t = e.offsetWidth;
    const n = getComputedStyle(e);
    return t -= parseFloat(n.paddingLeft) + parseFloat(n.paddingRight) + parseFloat(n.borderLeftWidth) + parseFloat(n.borderRightWidth), t;
  }
  return 0;
}
function Ca() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Pa(e, t = "", n) {
  zt(e) && n !== null && n !== void 0 && e.setAttribute(t, n);
}
function Wo() {
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
      r && r.forEach((s) => {
        s(n);
      });
    },
    clear() {
      e.clear();
    }
  };
}
function ct(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && typeof e == "object" && Object.keys(e).length === 0;
}
function Fn(e) {
  return typeof e == "function" && "call" in e && "apply" in e;
}
function te(e) {
  return !ct(e);
}
function Je(e, t = !0) {
  return e instanceof Object && e.constructor === Object && (t || Object.keys(e).length !== 0);
}
function we(e, ...t) {
  return Fn(e) ? e(...t) : e;
}
function ve(e, t = !0) {
  return typeof e == "string" && (t || e !== "");
}
function Le(e) {
  return ve(e) ? e.replace(/(-|_)/g, "").toLowerCase() : e;
}
function qn(e, t = "", n = {}) {
  const r = Le(t).split("."), s = r.shift();
  if (s) {
    if (Je(e)) {
      const h = Object.keys(e).find((f) => Le(f) === s) || "";
      return qn(we(e[h], n), r.join("."), n);
    }
    return;
  }
  return we(e, n);
}
function fn(e, t = !0) {
  return Array.isArray(e) && (t || e.length !== 0);
}
function $a(e) {
  return te(e) && !isNaN(e);
}
function ze(e, t) {
  if (t) {
    const n = t.test(e);
    return t.lastIndex = 0, n;
  }
  return !1;
}
function Dt(e) {
  return e && e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":");
}
function Oa(e) {
  return ve(e, !1) ? e[0].toUpperCase() + e.slice(1) : e;
}
function Go(e) {
  return ve(e) ? e.replace(/(_)/g, "-").replace(/[A-Z]/g, (t, n) => n === 0 ? t : "-" + t.toLowerCase()).toLowerCase() : e;
}
function vo(e) {
  return ve(e) ? e.replace(/[A-Z]/g, (t, n) => n === 0 ? t : "." + t.toLowerCase()).toLowerCase() : e;
}
var nn = {};
function Aa(e = "pui_id_") {
  return Object.hasOwn(nn, e) || (nn[e] = 0), nn[e]++, `${e}${nn[e]}`;
}
var Ea = Object.defineProperty, xa = Object.defineProperties, Da = Object.getOwnPropertyDescriptors, sn = Object.getOwnPropertySymbols, Xo = Object.prototype.hasOwnProperty, zo = Object.prototype.propertyIsEnumerable, po = (e, t, n) => t in e ? Ea(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Te = (e, t) => {
  for (var n in t || (t = {}))
    Xo.call(t, n) && po(e, n, t[n]);
  if (sn)
    for (var n of sn(t))
      zo.call(t, n) && po(e, n, t[n]);
  return e;
}, Pn = (e, t) => xa(e, Da(t)), Ge = (e, t) => {
  var n = {};
  for (var r in e)
    Xo.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && sn)
    for (var r of sn(e))
      t.indexOf(r) < 0 && zo.call(e, r) && (n[r] = e[r]);
  return n;
}, La = Wo(), fe = La;
function mo(e, t) {
  fn(e) ? e.push(...t || []) : Je(e) && Object.assign(e, t);
}
function Ma(e) {
  return Je(e) && e.hasOwnProperty("$value") && e.hasOwnProperty("$type") ? e.$value : e;
}
function Ua(e) {
  return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function On(e = "", t = "") {
  return Ua(`${ve(e, !1) && ve(t, !1) ? `${e}-` : e}${t}`);
}
function Ko(e = "", t = "") {
  return `--${On(e, t)}`;
}
function Ha(e = "") {
  const t = (e.match(/{/g) || []).length, n = (e.match(/}/g) || []).length;
  return (t + n) % 2 !== 0;
}
function Qo(e, t = "", n = "", r = [], s) {
  if (ve(e)) {
    const h = /{([^}]*)}/g, f = e.trim();
    if (Ha(f))
      return;
    if (ze(f, h)) {
      const g = f.replaceAll(h, (u) => {
        const a = u.replace(/{|}/g, "").split(".").filter((i) => !r.some((d) => ze(i, d)));
        return `var(${Ko(n, Go(a.join("-")))}${te(s) ? `, ${s}` : ""})`;
      }), l = /(\d+\s+[\+\-\*\/]\s+\d+)/g, o = /var\([^)]+\)/g;
      return ze(g.replace(o, "0"), l) ? `calc(${g})` : g;
    }
    return f;
  } else if ($a(e))
    return e;
}
function Na(e, t, n) {
  ve(t, !1) && e.push(`${t}:${n};`);
}
function yt(e, t) {
  return e ? `${e}{${t}}` : "";
}
var Lt = (...e) => ja(ne.getTheme(), ...e), ja = (e = {}, t, n, r) => {
  if (t) {
    const { variable: s, options: h } = ne.defaults || {}, { prefix: f, transform: g } = (e == null ? void 0 : e.options) || h || {}, o = ze(t, /{([^}]*)}/g) ? t : `{${t}}`;
    return r === "value" || ct(r) && g === "strict" ? ne.getTokenValue(t) : Qo(o, void 0, f, [s.excludedKeyRegex], n);
  }
  return "";
};
function Fa(e, t = {}) {
  const n = ne.defaults.variable, { prefix: r = n.prefix, selector: s = n.selector, excludedKeyRegex: h = n.excludedKeyRegex } = t, f = (o, u = "") => Object.entries(o).reduce(
    (c, [a, i]) => {
      const d = ze(a, h) ? On(u) : On(u, Go(a)), p = Ma(i);
      if (Je(p)) {
        const { variables: y, tokens: v } = f(p, d);
        mo(c.tokens, v), mo(c.variables, y);
      } else
        c.tokens.push((r ? d.replace(`${r}-`, "") : d).replaceAll("-", ".")), Na(c.variables, Ko(d), Qo(p, d, r, [h]));
      return c;
    },
    { variables: [], tokens: [] }
  ), { variables: g, tokens: l } = f(e, r);
  return {
    value: g,
    tokens: l,
    declarations: g.join(""),
    css: yt(s, g.join(""))
  };
}
var Ie = {
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
        return (r = t.map((s) => s.resolve(n)).find((s) => s.matched)) != null ? r : this.rules.custom.resolve(n);
      });
    }
  },
  _toVariables(e, t) {
    return Fa(e, { prefix: t == null ? void 0 : t.prefix });
  },
  getCommon({ name: e = "", theme: t = {}, params: n, set: r, defaults: s }) {
    var h, f, g, l, o, u, c;
    const { preset: a, options: i } = t;
    let d, p, y, v, b, S, m;
    if (te(a) && i.transform !== "strict") {
      const { primitive: w, semantic: k, extend: I } = a, R = k || {}, { colorScheme: T } = R, O = Ge(R, ["colorScheme"]), C = I || {}, { colorScheme: E } = C, A = Ge(C, ["colorScheme"]), G = T || {}, { dark: Y } = G, ae = Ge(G, ["dark"]), se = E || {}, { dark: U } = se, L = Ge(se, ["dark"]), j = te(w) ? this._toVariables({ primitive: w }, i) : {}, N = te(O) ? this._toVariables({ semantic: O }, i) : {}, B = te(ae) ? this._toVariables({ light: ae }, i) : {}, Q = te(Y) ? this._toVariables({ dark: Y }, i) : {}, _ = te(A) ? this._toVariables({ semantic: A }, i) : {}, $ = te(L) ? this._toVariables({ light: L }, i) : {}, P = te(U) ? this._toVariables({ dark: U }, i) : {}, [x, D] = [(h = j.declarations) != null ? h : "", j.tokens], [H, q] = [(f = N.declarations) != null ? f : "", N.tokens || []], [M, W] = [(g = B.declarations) != null ? g : "", B.tokens || []], [F, Z] = [(l = Q.declarations) != null ? l : "", Q.tokens || []], [re, ke] = [(o = _.declarations) != null ? o : "", _.tokens || []], [pe, me] = [(u = $.declarations) != null ? u : "", $.tokens || []], [_e, J] = [(c = P.declarations) != null ? c : "", P.tokens || []];
      d = this.transformCSS(e, x, "light", "variable", i, r, s), p = D;
      const be = this.transformCSS(e, `${H}${M}`, "light", "variable", i, r, s), wt = this.transformCSS(e, `${F}`, "dark", "variable", i, r, s);
      y = `${be}${wt}`, v = [.../* @__PURE__ */ new Set([...q, ...W, ...Z])];
      const Ke = this.transformCSS(e, `${re}${pe}color-scheme:light`, "light", "variable", i, r, s), le = this.transformCSS(e, `${_e}color-scheme:dark`, "dark", "variable", i, r, s);
      b = `${Ke}${le}`, S = [.../* @__PURE__ */ new Set([...ke, ...me, ...J])], m = we(a.css, { dt: Lt });
    }
    return {
      primitive: {
        css: d,
        tokens: p
      },
      semantic: {
        css: y,
        tokens: v
      },
      global: {
        css: b,
        tokens: S
      },
      style: m
    };
  },
  getPreset({ name: e = "", preset: t = {}, options: n, params: r, set: s, defaults: h, selector: f }) {
    var g, l, o;
    let u, c, a;
    if (te(t) && n.transform !== "strict") {
      const i = e.replace("-directive", ""), d = t, { colorScheme: p, extend: y, css: v } = d, b = Ge(d, ["colorScheme", "extend", "css"]), S = y || {}, { colorScheme: m } = S, w = Ge(S, ["colorScheme"]), k = p || {}, { dark: I } = k, R = Ge(k, ["dark"]), T = m || {}, { dark: O } = T, C = Ge(T, ["dark"]), E = te(b) ? this._toVariables({ [i]: Te(Te({}, b), w) }, n) : {}, A = te(R) ? this._toVariables({ [i]: Te(Te({}, R), C) }, n) : {}, G = te(I) ? this._toVariables({ [i]: Te(Te({}, I), O) }, n) : {}, [Y, ae] = [(g = E.declarations) != null ? g : "", E.tokens || []], [se, U] = [(l = A.declarations) != null ? l : "", A.tokens || []], [L, j] = [(o = G.declarations) != null ? o : "", G.tokens || []], N = this.transformCSS(i, `${Y}${se}`, "light", "variable", n, s, h, f), B = this.transformCSS(i, L, "dark", "variable", n, s, h, f);
      u = `${N}${B}`, c = [.../* @__PURE__ */ new Set([...ae, ...U, ...j])], a = we(v, { dt: Lt });
    }
    return {
      css: u,
      tokens: c,
      style: a
    };
  },
  getPresetC({ name: e = "", theme: t = {}, params: n, set: r, defaults: s }) {
    var h;
    const { preset: f, options: g } = t, l = (h = f == null ? void 0 : f.components) == null ? void 0 : h[e];
    return this.getPreset({ name: e, preset: l, options: g, params: n, set: r, defaults: s });
  },
  // @deprecated - use getPresetC instead
  getPresetD({ name: e = "", theme: t = {}, params: n, set: r, defaults: s }) {
    var h, f;
    const g = e.replace("-directive", ""), { preset: l, options: o } = t, u = ((h = l == null ? void 0 : l.components) == null ? void 0 : h[g]) || ((f = l == null ? void 0 : l.directives) == null ? void 0 : f[g]);
    return this.getPreset({ name: g, preset: u, options: o, params: n, set: r, defaults: s });
  },
  applyDarkColorScheme(e) {
    return !(e.darkModeSelector === "none" || e.darkModeSelector === !1);
  },
  getColorSchemeOption(e, t) {
    var n;
    return this.applyDarkColorScheme(e) ? this.regex.resolve(e.darkModeSelector === !0 ? t.options.darkModeSelector : (n = e.darkModeSelector) != null ? n : t.options.darkModeSelector) : [];
  },
  getLayerOrder(e, t = {}, n, r) {
    const { cssLayer: s } = t;
    return s ? `@layer ${we(s.order || "primeui", n)}` : "";
  },
  getCommonStyleSheet({ name: e = "", theme: t = {}, params: n, props: r = {}, set: s, defaults: h }) {
    const f = this.getCommon({ name: e, theme: t, params: n, set: s, defaults: h }), g = Object.entries(r).reduce((l, [o, u]) => l.push(`${o}="${u}"`) && l, []).join(" ");
    return Object.entries(f || {}).reduce((l, [o, u]) => {
      if (u != null && u.css) {
        const c = Dt(u == null ? void 0 : u.css), a = `${o}-variables`;
        l.push(`<style type="text/css" data-primevue-style-id="${a}" ${g}>${c}</style>`);
      }
      return l;
    }, []).join("");
  },
  getStyleSheet({ name: e = "", theme: t = {}, params: n, props: r = {}, set: s, defaults: h }) {
    var f;
    const g = { name: e, theme: t, params: n, set: s, defaults: h }, l = (f = e.includes("-directive") ? this.getPresetD(g) : this.getPresetC(g)) == null ? void 0 : f.css, o = Object.entries(r).reduce((u, [c, a]) => u.push(`${c}="${a}"`) && u, []).join(" ");
    return l ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${o}>${Dt(l)}</style>` : "";
  },
  createTokens(e = {}, t, n = "", r = "", s = {}) {
    return Object.entries(e).forEach(([h, f]) => {
      const g = ze(h, t.variable.excludedKeyRegex) ? n : n ? `${n}.${vo(h)}` : vo(h), l = r ? `${r}.${h}` : h;
      Je(f) ? this.createTokens(f, t, g, l, s) : (s[g] || (s[g] = {
        paths: [],
        computed(o, u = {}) {
          var c, a;
          return this.paths.length === 1 ? (c = this.paths[0]) == null ? void 0 : c.computed(this.paths[0].scheme, u.binding) : o && o !== "none" ? (a = this.paths.find((i) => i.scheme === o)) == null ? void 0 : a.computed(o, u.binding) : this.paths.map((i) => i.computed(i.scheme, u[i.scheme]));
        }
      }), s[g].paths.push({
        path: l,
        value: f,
        scheme: l.includes("colorScheme.light") ? "light" : l.includes("colorScheme.dark") ? "dark" : "none",
        computed(o, u = {}) {
          const c = /{([^}]*)}/g;
          let a = f;
          if (u.name = this.path, u.binding || (u.binding = {}), ze(f, c)) {
            const d = f.trim().replaceAll(c, (v) => {
              var b;
              const S = v.replace(/{|}/g, ""), m = (b = s[S]) == null ? void 0 : b.computed(o, u);
              return fn(m) && m.length === 2 ? `light-dark(${m[0].value},${m[1].value})` : m == null ? void 0 : m.value;
            }), p = /(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g, y = /var\([^)]+\)/g;
            a = ze(d.replace(y, "0"), p) ? `calc(${d})` : d;
          }
          return ct(u.binding) && delete u.binding, {
            colorScheme: o,
            path: this.path,
            paths: u,
            value: a.includes("undefined") ? void 0 : a
          };
        }
      }));
    }), s;
  },
  getTokenValue(e, t, n) {
    var r;
    const h = ((l) => l.split(".").filter((u) => !ze(u.toLowerCase(), n.variable.excludedKeyRegex)).join("."))(t), f = t.includes("colorScheme.light") ? "light" : t.includes("colorScheme.dark") ? "dark" : void 0, g = [(r = e[h]) == null ? void 0 : r.computed(f)].flat().filter((l) => l);
    return g.length === 1 ? g[0].value : g.reduce((l = {}, o) => {
      const u = o, { colorScheme: c } = u, a = Ge(u, ["colorScheme"]);
      return l[c] = a, l;
    }, void 0);
  },
  getSelectorRule(e, t, n, r) {
    return n === "class" || n === "attr" ? yt(te(t) ? `${e}${t},${e} ${t}` : e, r) : yt(e, te(t) ? yt(t, r) : r);
  },
  transformCSS(e, t, n, r, s = {}, h, f, g) {
    if (te(t)) {
      const { cssLayer: l } = s;
      if (r !== "style") {
        const o = this.getColorSchemeOption(s, f);
        t = n === "dark" ? o.reduce((u, { type: c, selector: a }) => (te(a) && (u += a.includes("[CSS]") ? a.replace("[CSS]", t) : this.getSelectorRule(a, g, c, t)), u), "") : yt(g ?? ":root", t);
      }
      if (l) {
        const o = {
          name: "primeui"
        };
        Je(l) && (o.name = we(l.name, { name: e, type: r })), te(o.name) && (t = yt(`@layer ${o.name}`, t), h == null || h.layerNames(o.name));
      }
      return t;
    }
    return "";
  }
}, ne = {
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
    t && (this._theme = Pn(Te({}, t), {
      options: Te(Te({}, this.defaults.options), t.options)
    }), this._tokens = Ie.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
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
    this._theme = Pn(Te({}, this.theme), { preset: e }), this._tokens = Ie.createTokens(e, this.defaults), this.clearLoadedStyleNames(), fe.emit("preset:change", e), fe.emit("theme:change", this.theme);
  },
  getOptions() {
    return this.options;
  },
  setOptions(e) {
    this._theme = Pn(Te({}, this.theme), { options: e }), this.clearLoadedStyleNames(), fe.emit("options:change", e), fe.emit("theme:change", this.theme);
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
    return Ie.getTokenValue(this.tokens, e, this.defaults);
  },
  getCommon(e = "", t) {
    return Ie.getCommon({ name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getComponent(e = "", t) {
    const n = { name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return Ie.getPresetC(n);
  },
  // @deprecated - use getComponent instead
  getDirective(e = "", t) {
    const n = { name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return Ie.getPresetD(n);
  },
  getCustomPreset(e = "", t, n, r) {
    const s = { name: e, preset: t, options: this.options, selector: n, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return Ie.getPreset(s);
  },
  getLayerOrderCSS(e = "") {
    return Ie.getLayerOrder(e, this.options, { names: this.getLayerNames() }, this.defaults);
  },
  transformCSS(e = "", t, n = "style", r) {
    return Ie.transformCSS(e, t, r, n, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
  },
  getCommonStyleSheet(e = "", t, n = {}) {
    return Ie.getCommonStyleSheet({ name: e, theme: this.theme, params: t, props: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getStyleSheet(e, t, n = {}) {
    return Ie.getStyleSheet({ name: e, theme: this.theme, params: t, props: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
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
}, Qe = {
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
}, qa = ({ dt: e }) => `
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
function Ut(e) {
  "@babel/helpers - typeof";
  return Ut = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ut(e);
}
function bo(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function yo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bo(Object(n), !0).forEach(function(r) {
      Va(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bo(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Va(e, t, n) {
  return (t = Ba(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ba(e) {
  var t = Wa(e, "string");
  return Ut(t) == "symbol" ? t : t + "";
}
function Wa(e, t) {
  if (Ut(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Ut(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ga(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  oi() ? ii(e) : t ? e() : ai(e);
}
var Xa = 0;
function za(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Et(!1), r = Et(e), s = Et(null), h = Ca() ? window.document : void 0, f = t.document, g = f === void 0 ? h : f, l = t.immediate, o = l === void 0 ? !0 : l, u = t.manual, c = u === void 0 ? !1 : u, a = t.name, i = a === void 0 ? "style_".concat(++Xa) : a, d = t.id, p = d === void 0 ? void 0 : d, y = t.media, v = y === void 0 ? void 0 : y, b = t.nonce, S = b === void 0 ? void 0 : b, m = t.first, w = m === void 0 ? !1 : m, k = t.onMounted, I = k === void 0 ? void 0 : k, R = t.onUpdated, T = R === void 0 ? void 0 : R, O = t.onLoad, C = O === void 0 ? void 0 : O, E = t.props, A = E === void 0 ? {} : E, G = function() {
  }, Y = function(U) {
    var L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (g) {
      var j = yo(yo({}, A), L), N = j.name || i, B = j.id || p, Q = j.nonce || S;
      s.value = g.querySelector('style[data-primevue-style-id="'.concat(N, '"]')) || g.getElementById(B) || g.createElement("style"), s.value.isConnected || (r.value = U || e, an(s.value, {
        type: "text/css",
        id: B,
        media: v,
        nonce: Q
      }), w ? g.head.prepend(s.value) : g.head.appendChild(s.value), Pa(s.value, "data-primevue-style-id", N), an(s.value, j), s.value.onload = function(_) {
        return C == null ? void 0 : C(_, {
          name: N
        });
      }, I == null || I(N)), !n.value && (G = si(r, function(_) {
        s.value.textContent = _, T == null || T(N);
      }, {
        immediate: !0
      }), n.value = !0);
    }
  }, ae = function() {
    !g || !n.value || (G(), wa(s.value) && g.head.removeChild(s.value), n.value = !1);
  };
  return o && !c && Ga(Y), {
    id: p,
    name: i,
    el: s,
    css: r,
    unload: ae,
    load: Y,
    isLoaded: ri(n)
  };
}
function Ht(e) {
  "@babel/helpers - typeof";
  return Ht = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ht(e);
}
function So(e, t) {
  return Ya(e) || Ja(e, t) || Qa(e, t) || Ka();
}
function Ka() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qa(e, t) {
  if (e) {
    if (typeof e == "string") return wo(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? wo(e, t) : void 0;
  }
}
function wo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ja(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, s, h, f, g = [], l = !0, o = !1;
    try {
      if (h = (n = n.call(e)).next, t !== 0) for (; !(l = (r = h.call(n)).done) && (g.push(r.value), g.length !== t); l = !0) ;
    } catch (u) {
      o = !0, s = u;
    } finally {
      try {
        if (!l && n.return != null && (f = n.return(), Object(f) !== f)) return;
      } finally {
        if (o) throw s;
      }
    }
    return g;
  }
}
function Ya(e) {
  if (Array.isArray(e)) return e;
}
function ko(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function $n(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ko(Object(n), !0).forEach(function(r) {
      Za(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ko(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Za(e, t, n) {
  return (t = es(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function es(e) {
  var t = ts(e, "string");
  return Ht(t) == "symbol" ? t : t + "";
}
function ts(e, t) {
  if (Ht(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Ht(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ns = function(t) {
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
}, rs = {}, os = {}, ue = {
  name: "base",
  css: ns,
  style: qa,
  classes: rs,
  inlineStyles: os,
  load: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(h) {
      return h;
    }, s = r(we(t, {
      dt: Lt
    }));
    return te(s) ? za(Dt(s), $n({
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
      var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return ne.transformCSS(n.name || t.name, "".concat(s).concat(r));
    });
  },
  getCommonTheme: function(t) {
    return ne.getCommon(this.name, t);
  },
  getComponentTheme: function(t) {
    return ne.getComponent(this.name, t);
  },
  getDirectiveTheme: function(t) {
    return ne.getDirective(this.name, t);
  },
  getPresetTheme: function(t, n, r) {
    return ne.getCustomPreset(this.name, t, n, r);
  },
  getLayerOrderThemeCSS: function() {
    return ne.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var r = we(this.css, {
        dt: Lt
      }) || "", s = Dt("".concat(r).concat(t)), h = Object.entries(n).reduce(function(f, g) {
        var l = So(g, 2), o = l[0], u = l[1];
        return f.push("".concat(o, '="').concat(u, '"')) && f;
      }, []).join(" ");
      return te(s) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(h, ">").concat(s, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return ne.getCommonStyleSheet(this.name, t, n);
  },
  getThemeStyleSheet: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [ne.getStyleSheet(this.name, t, n)];
    if (this.style) {
      var s = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), h = we(this.style, {
        dt: Lt
      }), f = Dt(ne.transformCSS(s, h)), g = Object.entries(n).reduce(function(l, o) {
        var u = So(o, 2), c = u[0], a = u[1];
        return l.push("".concat(c, '="').concat(a, '"')) && l;
      }, []).join(" ");
      te(f) && r.push('<style type="text/css" data-primevue-style-id="'.concat(s, '" ').concat(g, ">").concat(f, "</style>"));
    }
    return r.join("");
  },
  extend: function(t) {
    return $n($n({}, this), {}, {
      css: void 0,
      style: void 0
    }, t);
  }
};
function is() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pc", t = ui();
  return "".concat(e).concat(t.replace("v-", "").replaceAll("-", "_"));
}
var _o = ue.extend({
  name: "common"
});
function Nt(e) {
  "@babel/helpers - typeof";
  return Nt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nt(e);
}
function as(e) {
  return Zo(e) || ss(e) || Yo(e) || Jo();
}
function ss(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function $t(e, t) {
  return Zo(e) || us(e, t) || Yo(e, t) || Jo();
}
function Jo() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yo(e, t) {
  if (e) {
    if (typeof e == "string") return Io(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Io(e, t) : void 0;
  }
}
function Io(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function us(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, s, h, f, g = [], l = !0, o = !1;
    try {
      if (h = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        l = !1;
      } else for (; !(l = (r = h.call(n)).done) && (g.push(r.value), g.length !== t); l = !0) ;
    } catch (u) {
      o = !0, s = u;
    } finally {
      try {
        if (!l && n.return != null && (f = n.return(), Object(f) !== f)) return;
      } finally {
        if (o) throw s;
      }
    }
    return g;
  }
}
function Zo(e) {
  if (Array.isArray(e)) return e;
}
function To(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? To(Object(n), !0).forEach(function(r) {
      At(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : To(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function At(e, t, n) {
  return (t = ls(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ls(e) {
  var t = cs(e, "string");
  return Nt(t) == "symbol" ? t : t + "";
}
function cs(e, t) {
  if (Nt(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Nt(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Vn = {
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
    var t, n, r, s, h, f, g, l, o, u, c, a = (t = this.pt) === null || t === void 0 ? void 0 : t._usept, i = a ? (n = this.pt) === null || n === void 0 || (n = n.originalValue) === null || n === void 0 ? void 0 : n[this.$.type.name] : void 0, d = a ? (r = this.pt) === null || r === void 0 || (r = r.value) === null || r === void 0 ? void 0 : r[this.$.type.name] : this.pt;
    (s = d || i) === null || s === void 0 || (s = s.hooks) === null || s === void 0 || (h = s.onBeforeCreate) === null || h === void 0 || h.call(s);
    var p = (f = this.$primevueConfig) === null || f === void 0 || (f = f.pt) === null || f === void 0 ? void 0 : f._usept, y = p ? (g = this.$primevue) === null || g === void 0 || (g = g.config) === null || g === void 0 || (g = g.pt) === null || g === void 0 ? void 0 : g.originalValue : void 0, v = p ? (l = this.$primevue) === null || l === void 0 || (l = l.config) === null || l === void 0 || (l = l.pt) === null || l === void 0 ? void 0 : l.value : (o = this.$primevue) === null || o === void 0 || (o = o.config) === null || o === void 0 ? void 0 : o.pt;
    (u = v || y) === null || u === void 0 || (u = u[this.$.type.name]) === null || u === void 0 || (u = u.hooks) === null || u === void 0 || (c = u.onBeforeCreate) === null || c === void 0 || c.call(u), this.$attrSelector = is(), this.uid = this.$attrs.id || this.$attrSelector.replace("pc", "pv_id_");
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    var t;
    this.rootEl = _a(zt(this.$el) ? this.$el : (t = this.$el) === null || t === void 0 ? void 0 : t.parentElement, "[".concat(this.$attrSelector, "]")), this.rootEl && (this.rootEl.$pc = z({
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
      for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
        r[s - 1] = arguments[s];
      return Fn(t) ? t.apply(void 0, r) : ge.apply(void 0, r);
    },
    _load: function() {
      Qe.isStyleNameLoaded("base") || (ue.loadCSS(this.$styleOptions), this._loadGlobalStyles(), Qe.setLoadedStyleName("base")), this._loadThemeStyles();
    },
    _loadStyles: function() {
      this._load(), this._themeChangeListener(this._load);
    },
    _loadCoreStyles: function() {
      var t, n;
      !Qe.isStyleNameLoaded((t = this.$style) === null || t === void 0 ? void 0 : t.name) && (n = this.$style) !== null && n !== void 0 && n.name && (_o.loadCSS(this.$styleOptions), this.$options.style && this.$style.loadCSS(this.$styleOptions), Qe.setLoadedStyleName(this.$style.name));
    },
    _loadGlobalStyles: function() {
      var t = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      te(t) && ue.load(t, z({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function() {
      var t, n;
      if (!(this.isUnstyled || this.$theme === "none")) {
        if (!ne.isStyleNameLoaded("common")) {
          var r, s, h = ((r = this.$style) === null || r === void 0 || (s = r.getCommonTheme) === null || s === void 0 ? void 0 : s.call(r)) || {}, f = h.primitive, g = h.semantic, l = h.global, o = h.style;
          ue.load(f == null ? void 0 : f.css, z({
            name: "primitive-variables"
          }, this.$styleOptions)), ue.load(g == null ? void 0 : g.css, z({
            name: "semantic-variables"
          }, this.$styleOptions)), ue.load(l == null ? void 0 : l.css, z({
            name: "global-variables"
          }, this.$styleOptions)), ue.loadStyle(z({
            name: "global-style"
          }, this.$styleOptions), o), ne.setLoadedStyleName("common");
        }
        if (!ne.isStyleNameLoaded((t = this.$style) === null || t === void 0 ? void 0 : t.name) && (n = this.$style) !== null && n !== void 0 && n.name) {
          var u, c, a, i, d = ((u = this.$style) === null || u === void 0 || (c = u.getComponentTheme) === null || c === void 0 ? void 0 : c.call(u)) || {}, p = d.css, y = d.style;
          (a = this.$style) === null || a === void 0 || a.load(p, z({
            name: "".concat(this.$style.name, "-variables")
          }, this.$styleOptions)), (i = this.$style) === null || i === void 0 || i.loadStyle(z({
            name: "".concat(this.$style.name, "-style")
          }, this.$styleOptions), y), ne.setLoadedStyleName(this.$style.name);
        }
        if (!ne.isStyleNameLoaded("layer-order")) {
          var v, b, S = (v = this.$style) === null || v === void 0 || (b = v.getLayerOrderThemeCSS) === null || b === void 0 ? void 0 : b.call(v);
          ue.load(S, z({
            name: "layer-order",
            first: !0
          }, this.$styleOptions)), ne.setLoadedStyleName("layer-order");
        }
      }
    },
    _loadScopedThemeStyles: function(t) {
      var n, r, s, h = ((n = this.$style) === null || n === void 0 || (r = n.getPresetTheme) === null || r === void 0 ? void 0 : r.call(n, t, "[".concat(this.$attrSelector, "]"))) || {}, f = h.css, g = (s = this.$style) === null || s === void 0 ? void 0 : s.load(f, z({
        name: "".concat(this.$attrSelector, "-").concat(this.$style.name)
      }, this.$styleOptions));
      this.scopedStyleEl = g.el;
    },
    _unloadScopedThemeStyles: function() {
      var t;
      (t = this.scopedStyleEl) === null || t === void 0 || (t = t.value) === null || t === void 0 || t.remove();
    },
    _themeChangeListener: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      };
      Qe.clearLoadedStyleNames(), fe.on("theme:change", t);
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
      return qn(t, n, r);
    },
    _getPTValue: function() {
      var t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, f = /./g.test(r) && !!s[r.split(".")[0]], g = this._getPropValue("ptOptions") || ((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.ptOptions) || {}, l = g.mergeSections, o = l === void 0 ? !0 : l, u = g.mergeProps, c = u === void 0 ? !1 : u, a = h ? f ? this._useGlobalPT(this._getPTClassValue, r, s) : this._useDefaultPT(this._getPTClassValue, r, s) : void 0, i = f ? void 0 : this._getPTSelf(n, this._getPTClassValue, r, z(z({}, s), {}, {
        global: a || {}
      })), d = this._getPTDatasets(r);
      return o || !o && i ? c ? this._mergeProps(c, a, i, d) : z(z(z({}, a), i), d) : z(z({}, i), d);
    },
    _getPTSelf: function() {
      for (var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
        r[s - 1] = arguments[s];
      return ge(
        this._usePT.apply(this, [this._getPT(t, this.$name)].concat(r)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(r))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function() {
      var t, n, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", s = "data-pc-", h = r === "root" && te((t = this.pt) === null || t === void 0 ? void 0 : t["data-pc-section"]);
      return r !== "transition" && z(z({}, r === "root" && z(z(At({}, "".concat(s, "name"), Le(h ? (n = this.pt) === null || n === void 0 ? void 0 : n["data-pc-section"] : this.$.type.name)), h && At({}, "".concat(s, "extend"), Le(this.$.type.name))), {}, At({}, "".concat(this.$attrSelector), ""))), {}, At({}, "".concat(s, "section"), Le(r)));
    },
    _getPTClassValue: function() {
      var t = this._getOptionValue.apply(this, arguments);
      return ve(t) || fn(t) ? {
        class: t
      } : t;
    },
    _getPT: function(t) {
      var n = this, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", s = arguments.length > 2 ? arguments[2] : void 0, h = function(g) {
        var l, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, u = s ? s(g) : g, c = Le(r), a = Le(n.$name);
        return (l = o ? c !== a ? u == null ? void 0 : u[c] : void 0 : u == null ? void 0 : u[c]) !== null && l !== void 0 ? l : u;
      };
      return t != null && t.hasOwnProperty("_usept") ? {
        _usept: t._usept,
        originalValue: h(t.originalValue),
        value: h(t.value)
      } : h(t, !0);
    },
    _usePT: function(t, n, r, s) {
      var h = function(p) {
        return n(p, r, s);
      };
      if (t != null && t.hasOwnProperty("_usept")) {
        var f, g = t._usept || ((f = this.$primevueConfig) === null || f === void 0 ? void 0 : f.ptOptions) || {}, l = g.mergeSections, o = l === void 0 ? !0 : l, u = g.mergeProps, c = u === void 0 ? !1 : u, a = h(t.originalValue), i = h(t.value);
        return a === void 0 && i === void 0 ? void 0 : ve(i) ? i : ve(a) ? a : o || !o && i ? c ? this._mergeProps(c, a, i) : z(z({}, a), i) : i;
      }
      return h(t);
    },
    _useGlobalPT: function(t, n, r) {
      return this._usePT(this.globalPT, t, n, r);
    },
    _useDefaultPT: function(t, n, r) {
      return this._usePT(this.defaultPT, t, n, r);
    },
    ptm: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, t, z(z({}, this.$params), n));
    },
    ptmi: function() {
      var t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = ge(this.$_attrsWithoutPT, this.ptm(n, r));
      return s != null && s.hasOwnProperty("id") && ((t = s.id) !== null && t !== void 0 || (s.id = this.$id)), s;
    },
    ptmo: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(t, n, z({
        instance: this
      }, r), !1);
    },
    cx: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.isUnstyled ? void 0 : this._getOptionValue(this.$style.classes, t, z(z({}, this.$params), n));
    },
    sx: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (n) {
        var s = this._getOptionValue(this.$style.inlineStyles, t, z(z({}, this.$params), r)), h = this._getOptionValue(_o.inlineStyles, t, z(z({}, this.$params), r));
        return [h, s];
      }
    }
  },
  computed: {
    globalPT: function() {
      var t, n = this;
      return this._getPT((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.pt, void 0, function(r) {
        return we(r, {
          instance: n
        });
      });
    },
    defaultPT: function() {
      var t, n = this;
      return this._getPT((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.pt, void 0, function(r) {
        return n._getOptionValue(r, n.$name, z({}, n.$params)) || we(r, z({}, n.$params));
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
        var s = $t(r, 1), h = s[0];
        return n == null ? void 0 : n.includes(h);
      }));
    },
    $theme: function() {
      var t;
      return (t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.theme;
    },
    $style: function() {
      return z(z({
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
        var n = $t(t, 1), r = n[0];
        return r == null ? void 0 : r.startsWith("pt:");
      }).reduce(function(t, n) {
        var r = $t(n, 2), s = r[0], h = r[1], f = s.split(":"), g = as(f), l = g.slice(1);
        return l == null || l.reduce(function(o, u, c, a) {
          return !o[u] && (o[u] = c === a.length - 1 ? h : {}), o[u];
        }, t), t;
      }, {});
    },
    $_attrsWithoutPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(t) {
        var n = $t(t, 1), r = n[0];
        return !(r != null && r.startsWith("pt:"));
      }).reduce(function(t, n) {
        var r = $t(n, 2), s = r[0], h = r[1];
        return t[s] = h, t;
      }, {});
    }
  }
}, ds = `
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
`, fs = ue.extend({
  name: "baseicon",
  css: ds
});
function jt(e) {
  "@babel/helpers - typeof";
  return jt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jt(e);
}
function Ro(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Co(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ro(Object(n), !0).forEach(function(r) {
      hs(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ro(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function hs(e, t, n) {
  return (t = gs(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function gs(e) {
  var t = vs(e, "string");
  return jt(t) == "symbol" ? t : t + "";
}
function vs(e, t) {
  if (jt(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (jt(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ps = {
  name: "BaseIcon",
  extends: Vn,
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
  style: fs,
  provide: function() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function() {
      var t = ct(this.label);
      return Co(Co({}, !this.isUnstyled && {
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
}, ei = {
  name: "SpinnerIcon",
  extends: ps
};
function ms(e, t, n, r, s, h) {
  return Xe(), Mt("svg", ge({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), t[0] || (t[0] = [xo("path", {
    d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
ei.render = ms;
var bs = ({ dt: e }) => `
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
`, ys = {
  root: function(t) {
    var n = t.props, r = t.instance;
    return ["p-badge p-component", {
      "p-badge-circle": te(n.value) && String(n.value).length === 1,
      "p-badge-dot": ct(n.value) && !r.$slots.default,
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
}, Ss = ue.extend({
  name: "badge",
  style: bs,
  classes: ys
}), ws = {
  name: "BaseBadge",
  extends: Vn,
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
  style: Ss,
  provide: function() {
    return {
      $pcBadge: this,
      $parentInstance: this
    };
  }
};
function Ft(e) {
  "@babel/helpers - typeof";
  return Ft = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ft(e);
}
function Po(e, t, n) {
  return (t = ks(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ks(e) {
  var t = _s(e, "string");
  return Ft(t) == "symbol" ? t : t + "";
}
function _s(e, t) {
  if (Ft(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Ft(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ti = {
  name: "Badge",
  extends: ws,
  inheritAttrs: !1,
  computed: {
    dataP: function() {
      return xt(Po(Po({
        circle: this.value != null && String(this.value).length === 1,
        empty: this.value == null && !this.$slots.default
      }, this.severity, this.severity), this.size, this.size));
    }
  }
}, Is = ["data-p"];
function Ts(e, t, n, r, s, h) {
  return Xe(), Mt("span", ge({
    class: e.cx("root"),
    "data-p": h.dataP
  }, e.ptmi("root")), [Ot(e.$slots, "default", {}, function() {
    return [li(Do(e.value), 1)];
  })], 16, Is);
}
ti.render = Ts;
var rn = Wo();
function qt(e) {
  "@babel/helpers - typeof";
  return qt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qt(e);
}
function $o(e, t) {
  return $s(e) || Ps(e, t) || Cs(e, t) || Rs();
}
function Rs() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Cs(e, t) {
  if (e) {
    if (typeof e == "string") return Oo(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Oo(e, t) : void 0;
  }
}
function Oo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ps(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, s, h, f, g = [], l = !0, o = !1;
    try {
      if (h = (n = n.call(e)).next, t !== 0) for (; !(l = (r = h.call(n)).done) && (g.push(r.value), g.length !== t); l = !0) ;
    } catch (u) {
      o = !0, s = u;
    } finally {
      try {
        if (!l && n.return != null && (f = n.return(), Object(f) !== f)) return;
      } finally {
        if (o) throw s;
      }
    }
    return g;
  }
}
function $s(e) {
  if (Array.isArray(e)) return e;
}
function Ao(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ao(Object(n), !0).forEach(function(r) {
      An(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ao(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function An(e, t, n) {
  return (t = Os(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Os(e) {
  var t = As(e, "string");
  return qt(t) == "symbol" ? t : t + "";
}
function As(e, t) {
  if (qt(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (qt(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var V = {
  _getMeta: function() {
    return [Je(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], we(Je(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(t, n) {
    var r, s, h;
    return (r = (t == null || (s = t.instance) === null || s === void 0 ? void 0 : s.$primevue) || (n == null || (h = n.ctx) === null || h === void 0 || (h = h.appContext) === null || h === void 0 || (h = h.config) === null || h === void 0 || (h = h.globalProperties) === null || h === void 0 ? void 0 : h.$primevue)) === null || r === void 0 ? void 0 : r.config;
  },
  _getOptionValue: qn,
  _getPTValue: function() {
    var t, n, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, g = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, l = function() {
      var b = V._getOptionValue.apply(V, arguments);
      return ve(b) || fn(b) ? {
        class: b
      } : b;
    }, o = ((t = r.binding) === null || t === void 0 || (t = t.value) === null || t === void 0 ? void 0 : t.ptOptions) || ((n = r.$primevueConfig) === null || n === void 0 ? void 0 : n.ptOptions) || {}, u = o.mergeSections, c = u === void 0 ? !0 : u, a = o.mergeProps, i = a === void 0 ? !1 : a, d = g ? V._useDefaultPT(r, r.defaultPT(), l, h, f) : void 0, p = V._usePT(r, V._getPT(s, r.$name), l, h, K(K({}, f), {}, {
      global: d || {}
    })), y = V._getPTDatasets(r, h);
    return c || !c && p ? i ? V._mergeProps(r, i, d, p, y) : K(K(K({}, d), p), y) : K(K({}, p), y);
  },
  _getPTDatasets: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = "data-pc-";
    return K(K({}, n === "root" && An({}, "".concat(r, "name"), Le(t.$name))), {}, An({}, "".concat(r, "section"), Le(n)));
  },
  _getPT: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 ? arguments[2] : void 0, s = function(f) {
      var g, l = r ? r(f) : f, o = Le(n);
      return (g = l == null ? void 0 : l[o]) !== null && g !== void 0 ? g : l;
    };
    return t && Object.hasOwn(t, "_usept") ? {
      _usept: t._usept,
      originalValue: s(t.originalValue),
      value: s(t.value)
    } : s(t);
  },
  _usePT: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0, s = arguments.length > 3 ? arguments[3] : void 0, h = arguments.length > 4 ? arguments[4] : void 0, f = function(y) {
      return r(y, s, h);
    };
    if (n && Object.hasOwn(n, "_usept")) {
      var g, l = n._usept || ((g = t.$primevueConfig) === null || g === void 0 ? void 0 : g.ptOptions) || {}, o = l.mergeSections, u = o === void 0 ? !0 : o, c = l.mergeProps, a = c === void 0 ? !1 : c, i = f(n.originalValue), d = f(n.value);
      return i === void 0 && d === void 0 ? void 0 : ve(d) ? d : ve(i) ? i : u || !u && d ? a ? V._mergeProps(t, a, i, d) : K(K({}, i), d) : d;
    }
    return f(n);
  },
  _useDefaultPT: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, s = arguments.length > 3 ? arguments[3] : void 0, h = arguments.length > 4 ? arguments[4] : void 0;
    return V._usePT(t, n, r, s, h);
  },
  _loadStyles: function() {
    var t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0, s = arguments.length > 2 ? arguments[2] : void 0, h = V._getConfig(r, s), f = {
      nonce: h == null || (t = h.csp) === null || t === void 0 ? void 0 : t.nonce
    };
    V._loadCoreStyles(n, f), V._loadThemeStyles(n, f), V._loadScopedThemeStyles(n, f), V._removeThemeListeners(n), n.$loadStyles = function() {
      return V._loadThemeStyles(n, f);
    }, V._themeChangeListener(n.$loadStyles);
  },
  _loadCoreStyles: function() {
    var t, n, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
    if (!Qe.isStyleNameLoaded((t = r.$style) === null || t === void 0 ? void 0 : t.name) && (n = r.$style) !== null && n !== void 0 && n.name) {
      var h;
      ue.loadCSS(s), (h = r.$style) === null || h === void 0 || h.loadCSS(s), Qe.setLoadedStyleName(r.$style.name);
    }
  },
  _loadThemeStyles: function() {
    var t, n, r, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, h = arguments.length > 1 ? arguments[1] : void 0;
    if (!(s != null && s.isUnstyled() || (s == null || (t = s.theme) === null || t === void 0 ? void 0 : t.call(s)) === "none")) {
      if (!ne.isStyleNameLoaded("common")) {
        var f, g, l = ((f = s.$style) === null || f === void 0 || (g = f.getCommonTheme) === null || g === void 0 ? void 0 : g.call(f)) || {}, o = l.primitive, u = l.semantic, c = l.global, a = l.style;
        ue.load(o == null ? void 0 : o.css, K({
          name: "primitive-variables"
        }, h)), ue.load(u == null ? void 0 : u.css, K({
          name: "semantic-variables"
        }, h)), ue.load(c == null ? void 0 : c.css, K({
          name: "global-variables"
        }, h)), ue.loadStyle(K({
          name: "global-style"
        }, h), a), ne.setLoadedStyleName("common");
      }
      if (!ne.isStyleNameLoaded((n = s.$style) === null || n === void 0 ? void 0 : n.name) && (r = s.$style) !== null && r !== void 0 && r.name) {
        var i, d, p, y, v = ((i = s.$style) === null || i === void 0 || (d = i.getDirectiveTheme) === null || d === void 0 ? void 0 : d.call(i)) || {}, b = v.css, S = v.style;
        (p = s.$style) === null || p === void 0 || p.load(b, K({
          name: "".concat(s.$style.name, "-variables")
        }, h)), (y = s.$style) === null || y === void 0 || y.loadStyle(K({
          name: "".concat(s.$style.name, "-style")
        }, h), S), ne.setLoadedStyleName(s.$style.name);
      }
      if (!ne.isStyleNameLoaded("layer-order")) {
        var m, w, k = (m = s.$style) === null || m === void 0 || (w = m.getLayerOrderThemeCSS) === null || w === void 0 ? void 0 : w.call(m);
        ue.load(k, K({
          name: "layer-order",
          first: !0
        }, h)), ne.setLoadedStyleName("layer-order");
      }
    }
  },
  _loadScopedThemeStyles: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, r = t.preset();
    if (r && t.$attrSelector) {
      var s, h, f, g = ((s = t.$style) === null || s === void 0 || (h = s.getPresetTheme) === null || h === void 0 ? void 0 : h.call(s, r, "[".concat(t.$attrSelector, "]"))) || {}, l = g.css, o = (f = t.$style) === null || f === void 0 ? void 0 : f.load(l, K({
        name: "".concat(t.$attrSelector, "-").concat(t.$style.name)
      }, n));
      t.scopedStyleEl = o.el;
    }
  },
  _themeChangeListener: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    Qe.clearLoadedStyleNames(), fe.on("theme:change", t);
  },
  _removeThemeListeners: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    fe.off("theme:change", t.$loadStyles);
  },
  _hook: function(t, n, r, s, h, f) {
    var g, l, o = "on".concat(Oa(n)), u = V._getConfig(s, h), c = r == null ? void 0 : r.$instance, a = V._usePT(c, V._getPT(s == null || (g = s.value) === null || g === void 0 ? void 0 : g.pt, t), V._getOptionValue, "hooks.".concat(o)), i = V._useDefaultPT(c, u == null || (l = u.pt) === null || l === void 0 || (l = l.directives) === null || l === void 0 ? void 0 : l[t], V._getOptionValue, "hooks.".concat(o)), d = {
      el: r,
      binding: s,
      vnode: h,
      prevVnode: f
    };
    a == null || a(c, d), i == null || i(c, d);
  },
  /* eslint-disable-next-line no-unused-vars */
  _mergeProps: function() {
    for (var t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
      r[s - 2] = arguments[s];
    return Fn(t) ? t.apply(void 0, r) : ge.apply(void 0, r);
  },
  _extend: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = function(g, l, o, u, c) {
      var a, i, d, p;
      l._$instances = l._$instances || {};
      var y = V._getConfig(o, u), v = l._$instances[t] || {}, b = ct(v) ? K(K({}, n), n == null ? void 0 : n.methods) : {};
      l._$instances[t] = K(K({}, v), {}, {
        /* new instance variables to pass in directive methods */
        $name: t,
        $host: l,
        $binding: o,
        $modifiers: o == null ? void 0 : o.modifiers,
        $value: o == null ? void 0 : o.value,
        $el: v.$el || l || void 0,
        $style: K({
          classes: void 0,
          inlineStyles: void 0,
          load: function() {
          },
          loadCSS: function() {
          },
          loadStyle: function() {
          }
        }, n == null ? void 0 : n.style),
        $primevueConfig: y,
        $attrSelector: (a = l.$pd) === null || a === void 0 || (a = a[t]) === null || a === void 0 ? void 0 : a.attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return V._getPT(y == null ? void 0 : y.pt, void 0, function(m) {
            var w;
            return m == null || (w = m.directives) === null || w === void 0 ? void 0 : w[t];
          });
        },
        isUnstyled: function() {
          var m, w;
          return ((m = l._$instances[t]) === null || m === void 0 || (m = m.$binding) === null || m === void 0 || (m = m.value) === null || m === void 0 ? void 0 : m.unstyled) !== void 0 ? (w = l._$instances[t]) === null || w === void 0 || (w = w.$binding) === null || w === void 0 || (w = w.value) === null || w === void 0 ? void 0 : w.unstyled : y == null ? void 0 : y.unstyled;
        },
        theme: function() {
          var m;
          return (m = l._$instances[t]) === null || m === void 0 || (m = m.$primevueConfig) === null || m === void 0 ? void 0 : m.theme;
        },
        preset: function() {
          var m;
          return (m = l._$instances[t]) === null || m === void 0 || (m = m.$binding) === null || m === void 0 || (m = m.value) === null || m === void 0 ? void 0 : m.dt;
        },
        /* instance's methods */
        ptm: function() {
          var m, w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return V._getPTValue(l._$instances[t], (m = l._$instances[t]) === null || m === void 0 || (m = m.$binding) === null || m === void 0 || (m = m.value) === null || m === void 0 ? void 0 : m.pt, w, K({}, k));
        },
        ptmo: function() {
          var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return V._getPTValue(l._$instances[t], m, w, k, !1);
        },
        cx: function() {
          var m, w, k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (m = l._$instances[t]) !== null && m !== void 0 && m.isUnstyled() ? void 0 : V._getOptionValue((w = l._$instances[t]) === null || w === void 0 || (w = w.$style) === null || w === void 0 ? void 0 : w.classes, k, K({}, I));
        },
        sx: function() {
          var m, w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, I = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return k ? V._getOptionValue((m = l._$instances[t]) === null || m === void 0 || (m = m.$style) === null || m === void 0 ? void 0 : m.inlineStyles, w, K({}, I)) : void 0;
        }
      }, b), l.$instance = l._$instances[t], (i = (d = l.$instance)[g]) === null || i === void 0 || i.call(d, l, o, u, c), l["$".concat(t)] = l.$instance, V._hook(t, g, l, o, u, c), l.$pd || (l.$pd = {}), l.$pd[t] = K(K({}, (p = l.$pd) === null || p === void 0 ? void 0 : p[t]), {}, {
        name: t,
        instance: l._$instances[t]
      });
    }, s = function(g) {
      var l, o, u, c = g._$instances[t], a = c == null ? void 0 : c.watch, i = function(y) {
        var v, b = y.newValue, S = y.oldValue;
        return a == null || (v = a.config) === null || v === void 0 ? void 0 : v.call(c, b, S);
      }, d = function(y) {
        var v, b = y.newValue, S = y.oldValue;
        return a == null || (v = a["config.ripple"]) === null || v === void 0 ? void 0 : v.call(c, b, S);
      };
      c.$watchersCallback = {
        config: i,
        "config.ripple": d
      }, a == null || (l = a.config) === null || l === void 0 || l.call(c, c == null ? void 0 : c.$primevueConfig), rn.on("config:change", i), a == null || (o = a["config.ripple"]) === null || o === void 0 || o.call(c, c == null || (u = c.$primevueConfig) === null || u === void 0 ? void 0 : u.ripple), rn.on("config:ripple:change", d);
    }, h = function(g) {
      var l = g._$instances[t].$watchersCallback;
      l && (rn.off("config:change", l.config), rn.off("config:ripple:change", l["config.ripple"]));
    };
    return {
      created: function(g, l, o, u) {
        g.$pd || (g.$pd = {}), g.$pd[t] = {
          name: t,
          attrSelector: Aa("pd")
        }, r("created", g, l, o, u);
      },
      beforeMount: function(g, l, o, u) {
        var c;
        V._loadStyles((c = g.$pd[t]) === null || c === void 0 ? void 0 : c.instance, l, o), r("beforeMount", g, l, o, u), s(g);
      },
      mounted: function(g, l, o, u) {
        var c;
        V._loadStyles((c = g.$pd[t]) === null || c === void 0 ? void 0 : c.instance, l, o), r("mounted", g, l, o, u);
      },
      beforeUpdate: function(g, l, o, u) {
        r("beforeUpdate", g, l, o, u);
      },
      updated: function(g, l, o, u) {
        var c;
        V._loadStyles((c = g.$pd[t]) === null || c === void 0 ? void 0 : c.instance, l, o), r("updated", g, l, o, u);
      },
      beforeUnmount: function(g, l, o, u) {
        var c;
        h(g), V._removeThemeListeners((c = g.$pd[t]) === null || c === void 0 ? void 0 : c.instance), r("beforeUnmount", g, l, o, u);
      },
      unmounted: function(g, l, o, u) {
        var c;
        (c = g.$pd[t]) === null || c === void 0 || (c = c.instance) === null || c === void 0 || (c = c.scopedStyleEl) === null || c === void 0 || (c = c.value) === null || c === void 0 || c.remove(), r("unmounted", g, l, o, u);
      }
    };
  },
  extend: function() {
    var t = V._getMeta.apply(V, arguments), n = $o(t, 2), r = n[0], s = n[1];
    return K({
      extend: function() {
        var f = V._getMeta.apply(V, arguments), g = $o(f, 2), l = g[0], o = g[1];
        return V.extend(l, K(K(K({}, s), s == null ? void 0 : s.methods), o));
      }
    }, V._extend(r, s));
  }
}, Es = ({ dt: e }) => `
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
`, xs = {
  root: "p-ink"
}, Ds = ue.extend({
  name: "ripple-directive",
  style: Es,
  classes: xs
}), Ls = V.extend({
  style: Ds
});
function Vt(e) {
  "@babel/helpers - typeof";
  return Vt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vt(e);
}
function Ms(e) {
  return js(e) || Ns(e) || Hs(e) || Us();
}
function Us() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hs(e, t) {
  if (e) {
    if (typeof e == "string") return En(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? En(e, t) : void 0;
  }
}
function Ns(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function js(e) {
  if (Array.isArray(e)) return En(e);
}
function En(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Eo(e, t, n) {
  return (t = Fs(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Fs(e) {
  var t = qs(e, "string");
  return Vt(t) == "symbol" ? t : t + "";
}
function qs(e, t) {
  if (Vt(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Vt(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Vs = Ls.extend("ripple", {
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
      n || (n = ka("span", Eo(Eo({
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
      var n = this, r = t.currentTarget, s = this.getInk(r);
      if (!(!s || getComputedStyle(s, null).display === "none")) {
        if (!this.isUnstyled() && Cn(s, "p-ink-active"), s.setAttribute("data-p-ink-active", "false"), !ho(s) && !go(s)) {
          var h = Math.max(ya(r), Ra(r));
          s.style.height = h + "px", s.style.width = h + "px";
        }
        var f = Ta(r), g = t.pageX - f.left + document.body.scrollTop - go(s) / 2, l = t.pageY - f.top + document.body.scrollLeft - ho(s) / 2;
        s.style.top = l + "px", s.style.left = g + "px", !this.isUnstyled() && ba(s, "p-ink-active"), s.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          s && (!n.isUnstyled() && Cn(s, "p-ink-active"), s.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(t) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && Cn(t.currentTarget, "p-ink-active"), t.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(t) {
      return t && t.children ? Ms(t.children).find(function(n) {
        return Ia(n, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
}), Bs = ({ dt: e }) => `
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
function Bt(e) {
  "@babel/helpers - typeof";
  return Bt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bt(e);
}
function De(e, t, n) {
  return (t = Ws(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ws(e) {
  var t = Gs(e, "string");
  return Bt(t) == "symbol" ? t : t + "";
}
function Gs(e, t) {
  if (Bt(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Bt(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Xs = {
  root: function(t) {
    var n = t.instance, r = t.props;
    return ["p-button p-component", De(De(De(De(De(De(De(De(De({
      "p-button-icon-only": n.hasIcon && !r.label && !r.badge,
      "p-button-vertical": (r.iconPos === "top" || r.iconPos === "bottom") && r.label,
      "p-button-loading": r.loading,
      "p-button-link": r.link || r.variant === "link"
    }, "p-button-".concat(r.severity), r.severity), "p-button-raised", r.raised), "p-button-rounded", r.rounded), "p-button-text", r.text || r.variant === "text"), "p-button-outlined", r.outlined || r.variant === "outlined"), "p-button-sm", r.size === "small"), "p-button-lg", r.size === "large"), "p-button-plain", r.plain), "p-button-fluid", n.hasFluid)];
  },
  loadingIcon: "p-button-loading-icon",
  icon: function(t) {
    var n = t.props;
    return ["p-button-icon", De({}, "p-button-icon-".concat(n.iconPos), n.label)];
  },
  label: "p-button-label"
}, zs = ue.extend({
  name: "button",
  style: Bs,
  classes: Xs
}), Ks = {
  name: "BaseButton",
  extends: Vn,
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
  style: zs,
  provide: function() {
    return {
      $pcButton: this,
      $parentInstance: this
    };
  }
};
function Wt(e) {
  "@babel/helpers - typeof";
  return Wt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wt(e);
}
function he(e, t, n) {
  return (t = Qs(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Qs(e) {
  var t = Js(e, "string");
  return Wt(t) == "symbol" ? t : t + "";
}
function Js(e, t) {
  if (Wt(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Wt(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ni = {
  name: "Button",
  extends: Ks,
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
      return ge(this.asAttrs, this.a11yAttrs, this.getPTOptions("root"));
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
      return ct(this.fluid) ? !!this.$pcFluid : this.fluid;
    },
    dataP: function() {
      return xt(he(he(he(he(he(he(he(he(he(he({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge), "loading", this.loading), "fluid", this.hasFluid), "rounded", this.rounded), "raised", this.raised), "outlined", this.outlined || this.variant === "outlined"), "text", this.text || this.variant === "text"), "link", this.link || this.variant === "link"), "vertical", (this.iconPos === "top" || this.iconPos === "bottom") && this.label));
    },
    dataIconP: function() {
      return xt(he(he({}, this.iconPos, this.iconPos), this.size, this.size));
    },
    dataLabelP: function() {
      return xt(he(he({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge));
    }
  },
  components: {
    SpinnerIcon: ei,
    Badge: ti
  },
  directives: {
    ripple: Vs
  }
}, Ys = ["data-p"], Zs = ["data-p"];
function eu(e, t, n, r, s, h) {
  var f = Wn("SpinnerIcon"), g = Wn("Badge"), l = ci("ripple");
  return e.asChild ? Ot(e.$slots, "default", {
    key: 1,
    class: Xn(e.cx("root")),
    a11yAttrs: h.a11yAttrs
  }) : di((Xe(), on(fi(e.as), ge({
    key: 0,
    class: e.cx("root"),
    "data-p": h.dataP
  }, h.attrs), {
    default: hi(function() {
      return [Ot(e.$slots, "default", {}, function() {
        return [e.loading ? Ot(e.$slots, "loadingicon", ge({
          key: 0,
          class: [e.cx("loadingIcon"), e.cx("icon")]
        }, e.ptm("loadingIcon")), function() {
          return [e.loadingIcon ? (Xe(), Mt("span", ge({
            key: 0,
            class: [e.cx("loadingIcon"), e.cx("icon"), e.loadingIcon]
          }, e.ptm("loadingIcon")), null, 16)) : (Xe(), on(f, ge({
            key: 1,
            class: [e.cx("loadingIcon"), e.cx("icon")],
            spin: ""
          }, e.ptm("loadingIcon")), null, 16, ["class"]))];
        }) : Ot(e.$slots, "icon", ge({
          key: 1,
          class: [e.cx("icon")]
        }, e.ptm("icon")), function() {
          return [e.icon ? (Xe(), Mt("span", ge({
            key: 0,
            class: [e.cx("icon"), e.icon, e.iconClass],
            "data-p": h.dataIconP
          }, e.ptm("icon")), null, 16, Ys)) : Gn("", !0)];
        }), xo("span", ge({
          class: e.cx("label")
        }, e.ptm("label"), {
          "data-p": h.dataLabelP
        }), Do(e.label || " "), 17, Zs), e.badge ? (Xe(), on(g, {
          key: 2,
          value: e.badge,
          class: Xn(e.badgeClass),
          severity: e.badgeSeverity,
          unstyled: e.unstyled,
          pt: e.ptm("pcBadge")
        }, null, 8, ["value", "class", "severity", "unstyled", "pt"])) : Gn("", !0)];
      })];
    }),
    _: 3
  }, 16, ["class", "data-p"])), [[l]]);
}
ni.render = eu;
const tu = vi("userStore", () => {
  const e = Et(!1), t = localStorage.getItem("theme") || "light", n = Et(t);
  document.documentElement.classList.toggle("dark", t === "dark");
  function r() {
    const h = n.value === "light" ? "dark" : "light";
    localStorage.setItem("theme", h), n.value = h, document.documentElement.classList.toggle("dark", h === "dark");
  }
  async function s() {
    e.value = await Bo.doesSessionExist();
  }
  return {
    isSignedIn: e,
    updateAuth: s,
    theme: n,
    toggleTheme: r
  };
}), nu = /* @__PURE__ */ Lo({
  __name: "ThemeToggle",
  setup(e) {
    const t = tu(), n = gi(() => t.theme === "light" ? "pi pi-sun" : "pi pi-moon");
    return (r, s) => (Xe(), on(hn(ni), {
      icon: hn(n),
      id: "themeToggle",
      onClick: s[0] || (s[0] = (h) => hn(t).toggleTheme()),
      variant: "outlined",
      "aria-label": "Toggle theme"
    }, null, 8, ["icon"]));
  }
}), ru = /* @__PURE__ */ Lo({
  __name: "Toaster",
  setup(e) {
    return (t, n) => (Xe(), Mt("div"));
  }
}), au = (e) => {
  Yi.init({
    appInfo: {
      appName: e.appInfo.appName,
      apiDomain: e.appInfo.apiDomain,
      apiBasePath: e.appInfo.apiBasePath || "/auth"
    },
    recipeList: [Bo.init(), aa.init({}), ha.init()]
  });
}, su = {
  install: (e) => {
    e.component("ThemeToggle", nu), e.component("Toaster", ru);
  }
};
export {
  nu as ThemeToggle,
  ru as Toaster,
  su as default,
  au as initializeSuperTokens,
  tu as useUserStore
};
