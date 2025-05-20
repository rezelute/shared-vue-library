import { ref as xt, readonly as Kr, getCurrentInstance as on, onMounted as Qr, nextTick as Jr, watch as Yr } from "vue";
var Zr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Gt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var J = {}, Dt = {}, Mt = {}, et = {}, _e = {}, sn;
function eo() {
  if (sn) return _e;
  sn = 1;
  var e = _e && _e.__awaiter || function(g, d, m, f) {
    function s(a) {
      return a instanceof m ? a : new m(function(c) {
        c(a);
      });
    }
    return new (m || (m = Promise))(function(a, c) {
      function i(v) {
        try {
          u(f.next(v));
        } catch (y) {
          c(y);
        }
      }
      function r(v) {
        try {
          u(f.throw(v));
        } catch (y) {
          c(y);
        }
      }
      function u(v) {
        v.done ? a(v.value) : s(v.value).then(i, r);
      }
      u((f = f.apply(g, d || [])).next());
    });
  }, o = _e && _e.__generator || function(g, d) {
    var m = {
      label: 0,
      sent: function() {
        if (a[0] & 1) throw a[1];
        return a[1];
      },
      trys: [],
      ops: []
    }, f, s, a, c;
    return c = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (c[Symbol.iterator] = function() {
      return this;
    }), c;
    function i(u) {
      return function(v) {
        return r([u, v]);
      };
    }
    function r(u) {
      if (f) throw new TypeError("Generator is already executing.");
      for (; m; )
        try {
          if (f = 1, s && (a = u[0] & 2 ? s.return : u[0] ? s.throw || ((a = s.return) && a.call(s), 0) : s.next) && !(a = a.call(s, u[1])).done)
            return a;
          switch (s = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
            case 0:
            case 1:
              a = u;
              break;
            case 4:
              return m.label++, { value: u[1], done: !1 };
            case 5:
              m.label++, s = u[1], u = [0];
              continue;
            case 7:
              u = m.ops.pop(), m.trys.pop();
              continue;
            default:
              if (a = m.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                m = 0;
                continue;
              }
              if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
                m.label = u[1];
                break;
              }
              if (u[0] === 6 && m.label < a[1]) {
                m.label = a[1], a = u;
                break;
              }
              if (a && m.label < a[2]) {
                m.label = a[2], m.ops.push(u);
                break;
              }
              a[2] && m.ops.pop(), m.trys.pop();
              continue;
          }
          u = d.call(g, m);
        } catch (v) {
          u = [6, v], s = 0;
        } finally {
          f = a = 0;
        }
      if (u[0] & 5) throw u[1];
      return { value: u[0] ? u[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(_e, "__esModule", { value: !0 }), _e.defaultWindowHandlerImplementation = void 0;
  function t() {
    if (typeof window > "u")
      throw Error(
        "If you are using this package with server-side rendering, please make sure that you are checking if the window object is defined."
      );
    return window;
  }
  var n = {
    key: function(g) {
      return e(this, void 0, void 0, function() {
        return o(this, function(d) {
          return [2, t().localStorage.key(g)];
        });
      });
    },
    clear: function() {
      return e(this, void 0, void 0, function() {
        return o(this, function(g) {
          return [2, t().localStorage.clear()];
        });
      });
    },
    getItem: function(g) {
      return e(this, void 0, void 0, function() {
        return o(this, function(d) {
          return [2, t().localStorage.getItem(g)];
        });
      });
    },
    removeItem: function(g) {
      return e(this, void 0, void 0, function() {
        return o(this, function(d) {
          return [2, t().localStorage.removeItem(g)];
        });
      });
    },
    setItem: function(g, d) {
      return e(this, void 0, void 0, function() {
        return o(this, function(m) {
          return [2, t().localStorage.setItem(g, d)];
        });
      });
    },
    keySync: function(g) {
      return t().localStorage.key(g);
    },
    clearSync: function() {
      return t().localStorage.clear();
    },
    getItemSync: function(g) {
      return t().localStorage.getItem(g);
    },
    removeItemSync: function(g) {
      return t().localStorage.removeItem(g);
    },
    setItemSync: function(g, d) {
      return t().localStorage.setItem(g, d);
    }
  }, l = {
    key: function(g) {
      return e(this, void 0, void 0, function() {
        return o(this, function(d) {
          return [2, t().sessionStorage.key(g)];
        });
      });
    },
    clear: function() {
      return e(this, void 0, void 0, function() {
        return o(this, function(g) {
          return [2, t().sessionStorage.clear()];
        });
      });
    },
    getItem: function(g) {
      return e(this, void 0, void 0, function() {
        return o(this, function(d) {
          return [2, t().sessionStorage.getItem(g)];
        });
      });
    },
    removeItem: function(g) {
      return e(this, void 0, void 0, function() {
        return o(this, function(d) {
          return [2, t().sessionStorage.removeItem(g)];
        });
      });
    },
    setItem: function(g, d) {
      return e(this, void 0, void 0, function() {
        return o(this, function(m) {
          return [2, t().sessionStorage.setItem(g, d)];
        });
      });
    },
    keySync: function(g) {
      return t().sessionStorage.key(g);
    },
    clearSync: function() {
      return t().sessionStorage.clear();
    },
    getItemSync: function(g) {
      return t().sessionStorage.getItem(g);
    },
    removeItemSync: function(g) {
      return t().sessionStorage.removeItem(g);
    },
    setItemSync: function(g, d) {
      return t().sessionStorage.setItem(g, d);
    }
  };
  return _e.defaultWindowHandlerImplementation = {
    history: {
      replaceState: function(g, d, m) {
        return t().history.replaceState(g, d, m);
      },
      getState: function() {
        return t().history.state;
      }
    },
    location: {
      getHref: function() {
        return t().location.href;
      },
      setHref: function(g) {
        t().location.href = g;
      },
      getSearch: function() {
        return t().location.search;
      },
      getHash: function() {
        return t().location.hash;
      },
      getPathName: function() {
        return t().location.pathname;
      },
      assign: function(g) {
        t().location.assign(g);
      },
      getHostName: function() {
        return t().location.hostname;
      },
      getHost: function() {
        return t().location.host;
      },
      getOrigin: function() {
        return t().location.origin;
      }
    },
    getDocument: function() {
      return t().document;
    },
    getWindowUnsafe: function() {
      return t().window;
    },
    localStorage: n,
    sessionStorage: l
  }, _e;
}
var an;
function je() {
  if (an) return et;
  an = 1, Object.defineProperty(et, "__esModule", { value: !0 }), et.WindowHandlerReference = void 0;
  var e = eo(), o = (
    /** @class */
    function() {
      function t(n) {
        var l = function(g) {
          return g;
        };
        n !== void 0 && (l = n), this.windowHandler = l(e.defaultWindowHandlerImplementation);
      }
      return t.init = function(n) {
        t.instance === void 0 && (t.instance = new t(n));
      }, t.getReferenceOrThrow = function() {
        if (t.instance === void 0)
          throw new Error("SuperTokensWindowHandler must be initialized before calling this method.");
        return t.instance;
      }, t;
    }()
  );
  return et.WindowHandlerReference = o, et.default = o, et;
}
var un;
function to() {
  return un || (un = 1, function(e) {
    function o(t) {
      for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
    }
    e.__esModule = !0, o(je());
  }(Mt)), Mt;
}
var cn;
function Xt() {
  return cn || (cn = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.WindowHandlerReference = void 0;
    var o = to();
    Object.defineProperty(e, "WindowHandlerReference", {
      enumerable: !0,
      get: function() {
        return o.WindowHandlerReference;
      }
    });
  }(Dt)), Dt;
}
var $e = {}, ln;
function no() {
  return ln || (ln = 1, Object.defineProperty($e, "__esModule", { value: !0 }), $e.SSR_ERROR = $e.DEFAULT_API_BASE_PATH = void 0, $e.DEFAULT_API_BASE_PATH = "/auth", $e.SSR_ERROR = `
If you are trying to use this method doing server-side-rendering, please make sure you move this method inside a componentDidMount method or useEffect hook.`), $e;
}
var Rt = {}, dn;
function ro() {
  if (dn) return Rt;
  dn = 1, Object.defineProperty(Rt, "__esModule", { value: !0 });
  var e = (
    /** @class */
    /* @__PURE__ */ function() {
      function t(n) {
        var l = this;
        this.getAsStringDangerous = function() {
          return l.value;
        }, this.value = o(n);
      }
      return t;
    }()
  );
  Rt.default = e;
  function o(t, n) {
    n === void 0 && (n = !1);
    function l(d) {
      return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
        d
      );
    }
    t = t.trim();
    try {
      if (!t.startsWith("http://") && !t.startsWith("https://"))
        throw new Error("Error converting to proper URL");
      var g = new URL(t);
      return n ? g.hostname.startsWith("localhost") || l(g.hostname) ? t = "http://" + g.host : t = "https://" + g.host : t = g.protocol + "//" + g.host, t;
    } catch {
    }
    if (t.startsWith("/"))
      throw new Error("Please provide a valid domain name");
    if (t.indexOf(".") === 0 && (t = t.substr(1)), (t.indexOf(".") !== -1 || t.startsWith("localhost")) && !t.startsWith("http://") && !t.startsWith("https://")) {
      t = "https://" + t;
      try {
        return new URL(t), o(t, !0);
      } catch {
      }
    }
    throw new Error("Please provide a valid domain name");
  }
  return Rt;
}
var kt = {}, fn;
function Ar() {
  if (fn) return kt;
  fn = 1, Object.defineProperty(kt, "__esModule", { value: !0 });
  var e = (
    /** @class */
    /* @__PURE__ */ function() {
      function n(l) {
        var g = this;
        this.startsWith = function(d) {
          return g.value.startsWith(d.value);
        }, this.appendPath = function(d) {
          return new n(g.value + d.value);
        }, this.getAsStringDangerous = function() {
          return g.value;
        }, this.value = o(l);
      }
      return n;
    }()
  );
  kt.default = e;
  function o(n) {
    n = n.trim();
    try {
      if (!n.startsWith("http://") && !n.startsWith("https://"))
        throw new Error("Error converting to proper URL");
      var l = new URL(n);
      return n = l.pathname, n.charAt(n.length - 1) === "/" ? n.substr(0, n.length - 1) : n;
    } catch {
    }
    if ((t(n) || n.startsWith("localhost")) && !n.startsWith("http://") && !n.startsWith("https://"))
      return n = "http://" + n, o(n);
    n.charAt(0) !== "/" && (n = "/" + n);
    try {
      return new URL("http://example.com" + n), o("http://example.com" + n);
    } catch {
      throw new Error("Please provide a valid URL path");
    }
  }
  function t(n) {
    if (n.indexOf(".") === -1 || n.startsWith("/"))
      return !1;
    try {
      var l = new URL(n);
      return l.hostname.indexOf(".") !== -1;
    } catch {
    }
    try {
      var l = new URL("http://" + n);
      return l.hostname.indexOf(".") !== -1;
    } catch {
    }
    return !1;
  }
  return kt;
}
var Lt = {}, ct = {}, ee = {}, tt = {}, hn;
function oo() {
  if (hn) return tt;
  hn = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.isAnIpAddress = void 0;
  function e(n) {
    return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      n
    );
  }
  tt.isAnIpAddress = e;
  var o = (
    /** @class */
    /* @__PURE__ */ function() {
      function n(l) {
        var g = this;
        this.getAsStringDangerous = function() {
          return g.value;
        }, this.value = t(l);
      }
      return n;
    }()
  );
  tt.default = o;
  function t(n, l) {
    l === void 0 && (l = !1), n = n.trim();
    try {
      if (!n.startsWith("http://") && !n.startsWith("https://"))
        throw new Error("converting to proper URL");
      var g = new URL(n);
      return l ? g.hostname.startsWith("localhost") || e(g.hostname) ? n = "http://" + g.host : n = "https://" + g.host : n = g.protocol + "//" + g.host, n;
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
  return tt;
}
var It = {}, gn;
function io() {
  if (gn) return It;
  gn = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  var e = (
    /** @class */
    /* @__PURE__ */ function() {
      function n(l) {
        var g = this;
        this.startsWith = function(d) {
          return g.value.startsWith(d.value);
        }, this.appendPath = function(d) {
          return new n(g.value + d.value);
        }, this.getAsStringDangerous = function() {
          return g.value;
        }, this.value = o(l);
      }
      return n;
    }()
  );
  It.default = e;
  function o(n) {
    n = n.trim();
    try {
      if (!n.startsWith("http://") && !n.startsWith("https://"))
        throw new Error("converting to proper URL");
      var l = new URL(n);
      return n = l.pathname, n.charAt(n.length - 1) === "/" ? n.substr(0, n.length - 1) : n;
    } catch {
    }
    if ((t(n) || n.startsWith("localhost")) && !n.startsWith("http://") && !n.startsWith("https://"))
      return n = "http://" + n, o(n);
    n.charAt(0) !== "/" && (n = "/" + n);
    try {
      return new URL("http://example.com" + n), o("http://example.com" + n);
    } catch {
      throw new Error("Please provide a valid URL path");
    }
  }
  function t(n) {
    if (n.indexOf(".") === -1 || n.startsWith("/"))
      return !1;
    try {
      var l = new URL(n);
      return l.hostname.indexOf(".") !== -1;
    } catch {
    }
    try {
      var l = new URL("http://" + n);
      return l.hostname.indexOf(".") !== -1;
    } catch {
    }
    return !1;
  }
  return It;
}
var vn;
function zt() {
  if (vn) return ee;
  vn = 1;
  var e = ee && ee.__assign || function() {
    return e = Object.assign || function(i) {
      for (var r, u = 1, v = arguments.length; u < v; u++) {
        r = arguments[u];
        for (var y in r) Object.prototype.hasOwnProperty.call(r, y) && (i[y] = r[y]);
      }
      return i;
    }, e.apply(this, arguments);
  }, o = ee && ee.__awaiter || function(i, r, u, v) {
    function y(h) {
      return h instanceof u ? h : new u(function(p) {
        p(h);
      });
    }
    return new (u || (u = Promise))(function(h, p) {
      function w(R) {
        try {
          S(v.next(R));
        } catch (I) {
          p(I);
        }
      }
      function b(R) {
        try {
          S(v.throw(R));
        } catch (I) {
          p(I);
        }
      }
      function S(R) {
        R.done ? h(R.value) : y(R.value).then(w, b);
      }
      S((v = v.apply(i, r || [])).next());
    });
  }, t = ee && ee.__generator || function(i, r) {
    var u = {
      label: 0,
      sent: function() {
        if (h[0] & 1) throw h[1];
        return h[1];
      },
      trys: [],
      ops: []
    }, v, y, h, p;
    return p = { next: w(0), throw: w(1), return: w(2) }, typeof Symbol == "function" && (p[Symbol.iterator] = function() {
      return this;
    }), p;
    function w(S) {
      return function(R) {
        return b([S, R]);
      };
    }
    function b(S) {
      if (v) throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (v = 1, y && (h = S[0] & 2 ? y.return : S[0] ? y.throw || ((h = y.return) && h.call(y), 0) : y.next) && !(h = h.call(y, S[1])).done)
            return h;
          switch (y = 0, h && (S = [S[0] & 2, h.value]), S[0]) {
            case 0:
            case 1:
              h = S;
              break;
            case 4:
              return u.label++, { value: S[1], done: !1 };
            case 5:
              u.label++, y = S[1], S = [0];
              continue;
            case 7:
              S = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (h = u.trys, !(h = h.length > 0 && h[h.length - 1]) && (S[0] === 6 || S[0] === 2)) {
                u = 0;
                continue;
              }
              if (S[0] === 3 && (!h || S[1] > h[0] && S[1] < h[3])) {
                u.label = S[1];
                break;
              }
              if (S[0] === 6 && u.label < h[1]) {
                u.label = h[1], h = S;
                break;
              }
              if (h && u.label < h[2]) {
                u.label = h[2], u.ops.push(S);
                break;
              }
              h[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          S = r.call(i, u);
        } catch (R) {
          S = [6, R], y = 0;
        } finally {
          v = h = 0;
        }
      if (S[0] & 5) throw S[1];
      return { value: S[0] ? S[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(ee, "__esModule", { value: !0 }), ee.matchesDomainOrSubdomain = ee.getNormalisedUserContext = ee.validateAndNormaliseInputOrThrowError = ee.normaliseSessionScopeOrThrowError = ee.normaliseURLPathOrThrowError = ee.normaliseURLDomainOrThrowError = void 0;
  var n = oo(), l = io(), g = je();
  function d(i) {
    var r = new n.default(i).getAsStringDangerous();
    return r;
  }
  ee.normaliseURLDomainOrThrowError = d;
  function m(i) {
    return new l.default(i).getAsStringDangerous();
  }
  ee.normaliseURLPathOrThrowError = m;
  function f(i) {
    function r(v) {
      v = v.trim().toLowerCase(), v.startsWith(".") && (v = v.substr(1)), !v.startsWith("http://") && !v.startsWith("https://") && (v = "http://" + v);
      try {
        var y = new URL(v);
        return v = y.hostname, v;
      } catch {
        throw new Error("Please provide a valid sessionScope");
      }
    }
    var u = r(i);
    return u === "localhost" || (0, n.isAnIpAddress)(u) ? u : i.startsWith(".") ? "." + u : u;
  }
  ee.normaliseSessionScopeOrThrowError = f;
  function s(i) {
    var r = this, u = d(i.apiDomain), v = m("/auth");
    i.apiBasePath !== void 0 && (v = m(i.apiBasePath));
    var y = g.default.getReferenceOrThrow().windowHandler.location.getHostName(), h = f(
      i !== void 0 && i.sessionTokenFrontendDomain !== void 0 ? i.sessionTokenFrontendDomain : y
    ), p = 401;
    i.sessionExpiredStatusCode !== void 0 && (p = i.sessionExpiredStatusCode);
    var w = 403;
    if (i.invalidClaimStatusCode !== void 0 && (w = i.invalidClaimStatusCode), p === w)
      throw new Error("sessionExpiredStatusCode and invalidClaimStatusCode cannot be the same.");
    var b = !0;
    i.autoAddCredentials !== void 0 && (b = i.autoAddCredentials);
    var S = !1;
    i.isInIframe !== void 0 && (S = i.isInIframe);
    var R = void 0;
    i.sessionTokenBackendDomain !== void 0 && (R = f(i.sessionTokenBackendDomain));
    var I = 10;
    if (i.maxRetryAttemptsForSessionRefresh !== void 0) {
      if (i.maxRetryAttemptsForSessionRefresh < 0)
        throw new Error("maxRetryAttemptsForSessionRefresh must be greater than or equal to 0.");
      I = i.maxRetryAttemptsForSessionRefresh;
    }
    var T = function(x) {
      return o(r, void 0, void 0, function() {
        return t(this, function(E) {
          return [2, { url: x.url, requestInit: x.requestInit }];
        });
      });
    };
    i.preAPIHook !== void 0 && (T = i.preAPIHook);
    var _ = function() {
      return o(r, void 0, void 0, function() {
        return t(this, function(x) {
          return [
            2
            /*return*/
          ];
        });
      });
    };
    i.postAPIHook !== void 0 && (_ = i.postAPIHook);
    var P = function() {
    };
    i.onHandleEvent !== void 0 && (P = i.onHandleEvent);
    var C = e(
      {
        functions: function(x) {
          return x;
        }
      },
      i.override
    );
    return {
      apiDomain: u,
      apiBasePath: v,
      sessionTokenFrontendDomain: h,
      sessionExpiredStatusCode: p,
      invalidClaimStatusCode: w,
      autoAddCredentials: b,
      isInIframe: S,
      tokenTransferMethod: i.tokenTransferMethod !== void 0 ? i.tokenTransferMethod : "cookie",
      sessionTokenBackendDomain: R,
      maxRetryAttemptsForSessionRefresh: I,
      preAPIHook: T,
      postAPIHook: _,
      onHandleEvent: P,
      override: C
    };
  }
  ee.validateAndNormaliseInputOrThrowError = s;
  function a(i) {
    return i === void 0 ? {} : i;
  }
  ee.getNormalisedUserContext = a;
  function c(i, r) {
    for (var u = i.split("."), v = 0; v < u.length; v++) {
      var y = u.slice(v).join(".");
      if (y === r || ".".concat(y) === r)
        return !0;
    }
    return !1;
  }
  return ee.matchesDomainOrSubdomain = c, ee;
}
var Te = {}, Ve = {}, mn;
function Kt() {
  return mn || (mn = 1, function(e) {
    var o = Ve && Ve.__awaiter || function(l, g, d, m) {
      function f(s) {
        return s instanceof d ? s : new d(function(a) {
          a(s);
        });
      }
      return new (d || (d = Promise))(function(s, a) {
        function c(u) {
          try {
            r(m.next(u));
          } catch (v) {
            a(v);
          }
        }
        function i(u) {
          try {
            r(m.throw(u));
          } catch (v) {
            a(v);
          }
        }
        function r(u) {
          u.done ? s(u.value) : f(u.value).then(c, i);
        }
        r((m = m.apply(l, g || [])).next());
      });
    }, t = Ve && Ve.__generator || function(l, g) {
      var d = {
        label: 0,
        sent: function() {
          if (s[0] & 1) throw s[1];
          return s[1];
        },
        trys: [],
        ops: []
      }, m, f, s, a;
      return a = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
        return this;
      }), a;
      function c(r) {
        return function(u) {
          return i([r, u]);
        };
      }
      function i(r) {
        if (m) throw new TypeError("Generator is already executing.");
        for (; d; )
          try {
            if (m = 1, f && (s = r[0] & 2 ? f.return : r[0] ? f.throw || ((s = f.return) && s.call(f), 0) : f.next) && !(s = s.call(f, r[1])).done)
              return s;
            switch (f = 0, s && (r = [r[0] & 2, s.value]), r[0]) {
              case 0:
              case 1:
                s = r;
                break;
              case 4:
                return d.label++, { value: r[1], done: !1 };
              case 5:
                d.label++, f = r[1], r = [0];
                continue;
              case 7:
                r = d.ops.pop(), d.trys.pop();
                continue;
              default:
                if (s = d.trys, !(s = s.length > 0 && s[s.length - 1]) && (r[0] === 6 || r[0] === 2)) {
                  d = 0;
                  continue;
                }
                if (r[0] === 3 && (!s || r[1] > s[0] && r[1] < s[3])) {
                  d.label = r[1];
                  break;
                }
                if (r[0] === 6 && d.label < s[1]) {
                  d.label = s[1], s = r;
                  break;
                }
                if (s && d.label < s[2]) {
                  d.label = s[2], d.ops.push(r);
                  break;
                }
                s[2] && d.ops.pop(), d.trys.pop();
                continue;
            }
            r = g.call(l, d);
          } catch (u) {
            r = [6, u], f = 0;
          } finally {
            m = s = 0;
          }
        if (r[0] & 5) throw r[1];
        return { value: r[0] ? r[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ProcessState = e.PROCESS_STATE = void 0, function(l) {
      l[l.CALLING_INTERCEPTION_REQUEST = 0] = "CALLING_INTERCEPTION_REQUEST", l[l.CALLING_INTERCEPTION_RESPONSE = 1] = "CALLING_INTERCEPTION_RESPONSE";
    }(e.PROCESS_STATE || (e.PROCESS_STATE = {}));
    var n = (
      /** @class */
      function() {
        function l() {
          var g = this;
          this.history = [], this.addState = function(d) {
            try {
              process !== void 0 && process.env !== void 0 && process.env.TEST_MODE === "testing" && g.history.push(d);
            } catch {
            }
          }, this.getEventByLastEventByName = function(d) {
            for (var m = g.history.length - 1; m >= 0; m--)
              if (g.history[m] == d)
                return g.history[m];
          }, this.reset = function() {
            g.history = [];
          }, this.waitForEvent = function(d, m) {
            return m === void 0 && (m = 7e3), o(g, void 0, void 0, function() {
              var f, s = this;
              return t(this, function(a) {
                return f = Date.now(), [
                  2,
                  new Promise(function(c) {
                    var i = s;
                    function r() {
                      var u = i.getEventByLastEventByName(d);
                      u === void 0 ? Date.now() - f > m ? c(void 0) : setTimeout(r, 1e3) : c(u);
                    }
                    r();
                  })
                ];
              });
            });
          };
        }
        return l.getInstance = function() {
          return l.instance == null && (l.instance = new l()), l.instance;
        }, l;
      }()
    );
    e.ProcessState = n;
  }(Ve)), Ve;
}
var We = {}, pn;
function Qt() {
  return pn || (pn = 1, Object.defineProperty(We, "__esModule", { value: !0 }), We.supported_fdi = We.package_version = void 0, We.package_version = "20.1.6", We.supported_fdi = ["1.16", "1.17", "1.18", "1.19", "2.0", "3.0", "3.1", "4.0", "4.1"]), We;
}
var nt = {}, Ce = {}, yn;
function so() {
  if (yn) return Ce;
  yn = 1;
  var e = Ce && Ce.__awaiter || function(n, l, g, d) {
    function m(f) {
      return f instanceof g ? f : new g(function(s) {
        s(f);
      });
    }
    return new (g || (g = Promise))(function(f, s) {
      function a(r) {
        try {
          i(d.next(r));
        } catch (u) {
          s(u);
        }
      }
      function c(r) {
        try {
          i(d.throw(r));
        } catch (u) {
          s(u);
        }
      }
      function i(r) {
        r.done ? f(r.value) : m(r.value).then(a, c);
      }
      i((d = d.apply(n, l || [])).next());
    });
  }, o = Ce && Ce.__generator || function(n, l) {
    var g = {
      label: 0,
      sent: function() {
        if (f[0] & 1) throw f[1];
        return f[1];
      },
      trys: [],
      ops: []
    }, d, m, f, s;
    return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
      return this;
    }), s;
    function a(i) {
      return function(r) {
        return c([i, r]);
      };
    }
    function c(i) {
      if (d) throw new TypeError("Generator is already executing.");
      for (; g; )
        try {
          if (d = 1, m && (f = i[0] & 2 ? m.return : i[0] ? m.throw || ((f = m.return) && f.call(m), 0) : m.next) && !(f = f.call(m, i[1])).done)
            return f;
          switch (m = 0, f && (i = [i[0] & 2, f.value]), i[0]) {
            case 0:
            case 1:
              f = i;
              break;
            case 4:
              return g.label++, { value: i[1], done: !1 };
            case 5:
              g.label++, m = i[1], i = [0];
              continue;
            case 7:
              i = g.ops.pop(), g.trys.pop();
              continue;
            default:
              if (f = g.trys, !(f = f.length > 0 && f[f.length - 1]) && (i[0] === 6 || i[0] === 2)) {
                g = 0;
                continue;
              }
              if (i[0] === 3 && (!f || i[1] > f[0] && i[1] < f[3])) {
                g.label = i[1];
                break;
              }
              if (i[0] === 6 && g.label < f[1]) {
                g.label = f[1], f = i;
                break;
              }
              if (f && g.label < f[2]) {
                g.label = f[2], g.ops.push(i);
                break;
              }
              f[2] && g.ops.pop(), g.trys.pop();
              continue;
          }
          i = l.call(n, g);
        } catch (r) {
          i = [6, r], m = 0;
        } finally {
          d = f = 0;
        }
      if (i[0] & 5) throw i[1];
      return { value: i[0] ? i[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Ce, "__esModule", { value: !0 }), Ce.defaultCookieHandlerImplementation = void 0;
  var t = je();
  return Ce.defaultCookieHandlerImplementation = {
    getCookie: function() {
      return e(this, void 0, void 0, function() {
        return o(this, function(n) {
          return [
            2,
            t.default.getReferenceOrThrow().windowHandler.getWindowUnsafe().document.cookie
          ];
        });
      });
    },
    setCookie: function(n) {
      return e(this, void 0, void 0, function() {
        return o(this, function(l) {
          return t.default.getReferenceOrThrow().windowHandler.getWindowUnsafe().document.cookie = n, [
            2
            /*return*/
          ];
        });
      });
    }
  }, Ce;
}
var wn;
function Or() {
  if (wn) return nt;
  wn = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.CookieHandlerReference = void 0;
  var e = so(), o = (
    /** @class */
    function() {
      function t(n) {
        var l = function(g) {
          return g;
        };
        n !== void 0 && (l = n), this.cookieHandler = l(e.defaultCookieHandlerImplementation);
      }
      return t.init = function(n) {
        t.instance === void 0 && (t.instance = new t(n));
      }, t.getReferenceOrThrow = function() {
        if (t.instance === void 0)
          throw new Error("SuperTokensCookieHandler must be initialized before calling this method.");
        return t.instance;
      }, t;
    }()
  );
  return nt.CookieHandlerReference = o, nt.default = o, nt;
}
var rt = {}, Ae = {}, _t = {}, bn;
function ao() {
  if (bn) return _t;
  bn = 1, Object.defineProperty(_t, "__esModule", { value: !0 });
  var e = (
    /** @class */
    function() {
      function t() {
        var n = this;
        this.locked = /* @__PURE__ */ new Map(), this.addToLocked = function(l, g) {
          var d = n.locked.get(l);
          d === void 0 ? g === void 0 ? n.locked.set(l, []) : n.locked.set(l, [g]) : g !== void 0 && (d.unshift(g), n.locked.set(l, d));
        }, this.isLocked = function(l) {
          return n.locked.has(l);
        }, this.lock = function(l) {
          return new Promise(function(g, d) {
            n.isLocked(l) ? n.addToLocked(l, g) : (n.addToLocked(l), g());
          });
        }, this.unlock = function(l) {
          var g = n.locked.get(l);
          if (g === void 0 || g.length === 0) {
            n.locked.delete(l);
            return;
          }
          var d = g.pop();
          n.locked.set(l, g), d !== void 0 && setTimeout(d, 0);
        };
      }
      return t.getInstance = function() {
        return t.instance === void 0 && (t.instance = new t()), t.instance;
      }, t;
    }()
  );
  function o() {
    return e.getInstance();
  }
  return _t.default = o, _t;
}
var Sn;
function uo() {
  if (Sn) return Ae;
  Sn = 1;
  var e = Ae && Ae.__awaiter || function(a, c, i, r) {
    return new (i || (i = Promise))(function(u, v) {
      function y(w) {
        try {
          p(r.next(w));
        } catch (b) {
          v(b);
        }
      }
      function h(w) {
        try {
          p(r.throw(w));
        } catch (b) {
          v(b);
        }
      }
      function p(w) {
        w.done ? u(w.value) : new i(function(b) {
          b(w.value);
        }).then(y, h);
      }
      p((r = r.apply(a, c || [])).next());
    });
  }, o = Ae && Ae.__generator || function(a, c) {
    var i = { label: 0, sent: function() {
      if (v[0] & 1) throw v[1];
      return v[1];
    }, trys: [], ops: [] }, r, u, v, y;
    return y = { next: h(0), throw: h(1), return: h(2) }, typeof Symbol == "function" && (y[Symbol.iterator] = function() {
      return this;
    }), y;
    function h(w) {
      return function(b) {
        return p([w, b]);
      };
    }
    function p(w) {
      if (r) throw new TypeError("Generator is already executing.");
      for (; i; ) try {
        if (r = 1, u && (v = w[0] & 2 ? u.return : w[0] ? u.throw || ((v = u.return) && v.call(u), 0) : u.next) && !(v = v.call(u, w[1])).done) return v;
        switch (u = 0, v && (w = [w[0] & 2, v.value]), w[0]) {
          case 0:
          case 1:
            v = w;
            break;
          case 4:
            return i.label++, { value: w[1], done: !1 };
          case 5:
            i.label++, u = w[1], w = [0];
            continue;
          case 7:
            w = i.ops.pop(), i.trys.pop();
            continue;
          default:
            if (v = i.trys, !(v = v.length > 0 && v[v.length - 1]) && (w[0] === 6 || w[0] === 2)) {
              i = 0;
              continue;
            }
            if (w[0] === 3 && (!v || w[1] > v[0] && w[1] < v[3])) {
              i.label = w[1];
              break;
            }
            if (w[0] === 6 && i.label < v[1]) {
              i.label = v[1], v = w;
              break;
            }
            if (v && i.label < v[2]) {
              i.label = v[2], i.ops.push(w);
              break;
            }
            v[2] && i.ops.pop(), i.trys.pop();
            continue;
        }
        w = c.call(a, i);
      } catch (b) {
        w = [6, b], u = 0;
      } finally {
        r = v = 0;
      }
      if (w[0] & 5) throw w[1];
      return { value: w[0] ? w[1] : void 0, done: !0 };
    }
  }, t = Ae;
  Object.defineProperty(Ae, "__esModule", { value: !0 });
  var n = ao(), l = "browser-tabs-lock-key", g = {
    key: function(a) {
      return e(t, void 0, void 0, function() {
        return o(this, function(c) {
          throw new Error("Unsupported");
        });
      });
    },
    getItem: function(a) {
      return e(t, void 0, void 0, function() {
        return o(this, function(c) {
          throw new Error("Unsupported");
        });
      });
    },
    clear: function() {
      return e(t, void 0, void 0, function() {
        return o(this, function(a) {
          return [2, window.localStorage.clear()];
        });
      });
    },
    removeItem: function(a) {
      return e(t, void 0, void 0, function() {
        return o(this, function(c) {
          throw new Error("Unsupported");
        });
      });
    },
    setItem: function(a, c) {
      return e(t, void 0, void 0, function() {
        return o(this, function(i) {
          throw new Error("Unsupported");
        });
      });
    },
    keySync: function(a) {
      return window.localStorage.key(a);
    },
    getItemSync: function(a) {
      return window.localStorage.getItem(a);
    },
    clearSync: function() {
      return window.localStorage.clear();
    },
    removeItemSync: function(a) {
      return window.localStorage.removeItem(a);
    },
    setItemSync: function(a, c) {
      return window.localStorage.setItem(a, c);
    }
  };
  function d(a) {
    return new Promise(function(c) {
      return setTimeout(c, a);
    });
  }
  function m(a) {
    for (var c = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", i = "", r = 0; r < a; r++) {
      var u = Math.floor(Math.random() * c.length);
      i += c[u];
    }
    return i;
  }
  function f() {
    return Date.now().toString() + m(15);
  }
  var s = (
    /** @class */
    function() {
      function a(c) {
        this.acquiredIatSet = /* @__PURE__ */ new Set(), this.storageHandler = void 0, this.id = f(), this.acquireLock = this.acquireLock.bind(this), this.releaseLock = this.releaseLock.bind(this), this.releaseLock__private__ = this.releaseLock__private__.bind(this), this.waitForSomethingToChange = this.waitForSomethingToChange.bind(this), this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(this), this.storageHandler = c, a.waiters === void 0 && (a.waiters = []);
      }
      return a.prototype.acquireLock = function(c, i) {
        return i === void 0 && (i = 5e3), e(this, void 0, void 0, function() {
          var r, u, v, y, h, p, w, b;
          return o(this, function(S) {
            switch (S.label) {
              case 0:
                r = Date.now() + m(4), u = Date.now() + i, v = l + "-" + c, y = this.storageHandler === void 0 ? g : this.storageHandler, S.label = 1;
              case 1:
                return Date.now() < u ? [4, d(30)] : [3, 8];
              case 2:
                return S.sent(), h = y.getItemSync(v), h !== null ? [3, 5] : (p = this.id + "-" + c + "-" + r, [4, d(Math.floor(Math.random() * 25))]);
              case 3:
                return S.sent(), y.setItemSync(v, JSON.stringify({
                  id: this.id,
                  iat: r,
                  timeoutKey: p,
                  timeAcquired: Date.now(),
                  timeRefreshed: Date.now()
                })), [4, d(30)];
              case 4:
                return S.sent(), w = y.getItemSync(v), w !== null && (b = JSON.parse(w), b.id === this.id && b.iat === r) ? (this.acquiredIatSet.add(r), this.refreshLockWhileAcquired(v, r), [2, !0]) : [3, 7];
              case 5:
                return a.lockCorrector(this.storageHandler === void 0 ? g : this.storageHandler), [4, this.waitForSomethingToChange(u)];
              case 6:
                S.sent(), S.label = 7;
              case 7:
                return r = Date.now() + m(4), [3, 1];
              case 8:
                return [2, !1];
            }
          });
        });
      }, a.prototype.refreshLockWhileAcquired = function(c, i) {
        return e(this, void 0, void 0, function() {
          var r = this;
          return o(this, function(u) {
            return setTimeout(function() {
              return e(r, void 0, void 0, function() {
                var v, y, h;
                return o(this, function(p) {
                  switch (p.label) {
                    case 0:
                      return [4, n.default().lock(i)];
                    case 1:
                      if (p.sent(), !this.acquiredIatSet.has(i))
                        return n.default().unlock(i), [
                          2
                          /*return*/
                        ];
                      if (v = this.storageHandler === void 0 ? g : this.storageHandler, y = v.getItemSync(c), y !== null)
                        h = JSON.parse(y), h.timeRefreshed = Date.now(), v.setItemSync(c, JSON.stringify(h)), n.default().unlock(i);
                      else
                        return n.default().unlock(i), [
                          2
                          /*return*/
                        ];
                      return this.refreshLockWhileAcquired(c, i), [
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
      }, a.prototype.waitForSomethingToChange = function(c) {
        return e(this, void 0, void 0, function() {
          return o(this, function(i) {
            switch (i.label) {
              case 0:
                return [4, new Promise(function(r) {
                  var u = !1, v = Date.now(), y = 50, h = !1;
                  function p() {
                    if (h || (window.removeEventListener("storage", p), a.removeFromWaiting(p), clearTimeout(w), h = !0), !u) {
                      u = !0;
                      var b = y - (Date.now() - v);
                      b > 0 ? setTimeout(r, b) : r(null);
                    }
                  }
                  window.addEventListener("storage", p), a.addToWaiting(p);
                  var w = setTimeout(p, Math.max(0, c - Date.now()));
                })];
              case 1:
                return i.sent(), [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, a.addToWaiting = function(c) {
        this.removeFromWaiting(c), a.waiters !== void 0 && a.waiters.push(c);
      }, a.removeFromWaiting = function(c) {
        a.waiters !== void 0 && (a.waiters = a.waiters.filter(function(i) {
          return i !== c;
        }));
      }, a.notifyWaiters = function() {
        if (a.waiters !== void 0) {
          var c = a.waiters.slice();
          c.forEach(function(i) {
            return i();
          });
        }
      }, a.prototype.releaseLock = function(c) {
        return e(this, void 0, void 0, function() {
          return o(this, function(i) {
            switch (i.label) {
              case 0:
                return [4, this.releaseLock__private__(c)];
              case 1:
                return [2, i.sent()];
            }
          });
        });
      }, a.prototype.releaseLock__private__ = function(c) {
        return e(this, void 0, void 0, function() {
          var i, r, u, v;
          return o(this, function(y) {
            switch (y.label) {
              case 0:
                return i = this.storageHandler === void 0 ? g : this.storageHandler, r = l + "-" + c, u = i.getItemSync(r), u === null ? [
                  2
                  /*return*/
                ] : (v = JSON.parse(u), v.id !== this.id ? [3, 2] : [4, n.default().lock(v.iat)]);
              case 1:
                y.sent(), this.acquiredIatSet.delete(v.iat), i.removeItemSync(r), n.default().unlock(v.iat), a.notifyWaiters(), y.label = 2;
              case 2:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, a.lockCorrector = function(c) {
        for (var i = Date.now() - 5e3, r = c, u = [], v = 0; ; ) {
          var y = r.keySync(v);
          if (y === null)
            break;
          u.push(y), v++;
        }
        for (var h = !1, p = 0; p < u.length; p++) {
          var w = u[p];
          if (w.includes(l)) {
            var b = r.getItemSync(w);
            if (b !== null) {
              var S = JSON.parse(b);
              (S.timeRefreshed === void 0 && S.timeAcquired < i || S.timeRefreshed !== void 0 && S.timeRefreshed < i) && (r.removeItemSync(w), h = !0);
            }
          }
        }
        h && a.notifyWaiters();
      }, a.waiters = void 0, a;
    }()
  );
  return Ae.default = s, Ae;
}
var Rn;
function Jt() {
  if (Rn) return rt;
  Rn = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.LockFactoryReference = void 0;
  var e = uo(), o = function(n) {
    return function() {
      return Promise.resolve(new e.default(n));
    };
  }, t = (
    /** @class */
    function() {
      function n(l) {
        this.lockFactory = l;
      }
      return n.init = function(l, g) {
        this.instance === void 0 && (this.instance = new n(
          l ?? o(g)
        ));
      }, n.getReferenceOrThrow = function() {
        if (n.instance === void 0)
          throw new Error("SuperTokensLockReference must be initialized before calling this method.");
        return n.instance;
      }, n;
    }()
  );
  return rt.LockFactoryReference = t, rt.default = t, rt;
}
var Oe = {}, kn;
function wt() {
  if (kn) return Oe;
  kn = 1, Object.defineProperty(Oe, "__esModule", { value: !0 }), Oe.logDebugMessage = Oe.disableLogging = Oe.enableLogging = void 0;
  var e = Qt(), o = "com.supertokens", t = !1;
  function n() {
    t = !0;
  }
  Oe.enableLogging = n;
  function l() {
    t = !1;
  }
  Oe.disableLogging = l;
  function g(d) {
    t && console.log(
      "".concat(o, ' {t: "').concat((/* @__PURE__ */ new Date()).toISOString(), '", message: "').concat(d, '", supertokens-website-ver: "').concat(e.package_version, '"}')
    );
  }
  return Oe.logDebugMessage = g, Oe;
}
var ot = {}, lt = {}, In;
function co() {
  if (In) return lt;
  In = 1, Object.defineProperty(lt, "__esModule", { value: !0 }), lt.DateProvider = void 0;
  var e = je(), o = (
    /** @class */
    function() {
      function t() {
        this.clockSkewInMillis = 0, this.thresholdInSeconds = 7;
      }
      return t.init = function() {
        if (t.instance === void 0) {
          t.instance = new t();
          var n = e.default.getReferenceOrThrow().windowHandler.localStorage, l = n.getItemSync(t.CLOCK_SKEW_KEY), g = l !== null ? parseInt(l, 10) : 0;
          t.instance.setClientClockSkewInMillis(g);
        }
      }, t.getReferenceOrThrow = function() {
        if (t.instance === void 0)
          throw new Error("DateProvider must be initialized before calling this method.");
        return t.instance;
      }, t.prototype.getThresholdInSeconds = function() {
        return this.thresholdInSeconds;
      }, t.prototype.setThresholdInSeconds = function(n) {
        this.thresholdInSeconds = n;
      }, t.prototype.setClientClockSkewInMillis = function(n) {
        this.clockSkewInMillis = Math.abs(n) >= this.thresholdInSeconds * 1e3 ? n : 0;
        var l = e.default.getReferenceOrThrow().windowHandler.localStorage;
        l.setItemSync(t.CLOCK_SKEW_KEY, String(n));
      }, t.prototype.getClientClockSkewInMillis = function() {
        return this.clockSkewInMillis;
      }, t.prototype.now = function() {
        return Date.now() + this.getClientClockSkewInMillis();
      }, t.CLOCK_SKEW_KEY = "__st_clockSkewInMillis", t;
    }()
  );
  return lt.DateProvider = o, lt;
}
var _n;
function bt() {
  if (_n) return ot;
  _n = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.DateProviderReference = void 0;
  var e = co(), o = (
    /** @class */
    function() {
      function t(n) {
        n !== void 0 ? this.dateProvider = n() : (e.DateProvider.init(), this.dateProvider = e.DateProvider.getReferenceOrThrow());
      }
      return t.init = function(n) {
        t.instance === void 0 && (t.instance = new t(n));
      }, t.getReferenceOrThrow = function() {
        if (t.instance === void 0)
          throw new Error("SuperTokensDateProvider must be initialized before calling this method.");
        return t.instance;
      }, t;
    }()
  );
  return ot.DateProviderReference = o, ot.default = o, ot;
}
var Tn;
function St() {
  return Tn || (Tn = 1, function(e) {
    var o = Te && Te.__assign || function() {
      return o = Object.assign || function(k) {
        for (var O, A = 1, D = arguments.length; A < D; A++) {
          O = arguments[A];
          for (var M in O) Object.prototype.hasOwnProperty.call(O, M) && (k[M] = O[M]);
        }
        return k;
      }, o.apply(this, arguments);
    }, t = Te && Te.__awaiter || function(k, O, A, D) {
      function M(N) {
        return N instanceof A ? N : new A(function($) {
          $(N);
        });
      }
      return new (A || (A = Promise))(function(N, $) {
        function U(Q) {
          try {
            j(D.next(Q));
          } catch (Z) {
            $(Z);
          }
        }
        function W(Q) {
          try {
            j(D.throw(Q));
          } catch (Z) {
            $(Z);
          }
        }
        function j(Q) {
          Q.done ? N(Q.value) : M(Q.value).then(U, W);
        }
        j((D = D.apply(k, O || [])).next());
      });
    }, n = Te && Te.__generator || function(k, O) {
      var A = {
        label: 0,
        sent: function() {
          if (N[0] & 1) throw N[1];
          return N[1];
        },
        trys: [],
        ops: []
      }, D, M, N, $;
      return $ = { next: U(0), throw: U(1), return: U(2) }, typeof Symbol == "function" && ($[Symbol.iterator] = function() {
        return this;
      }), $;
      function U(j) {
        return function(Q) {
          return W([j, Q]);
        };
      }
      function W(j) {
        if (D) throw new TypeError("Generator is already executing.");
        for (; A; )
          try {
            if (D = 1, M && (N = j[0] & 2 ? M.return : j[0] ? M.throw || ((N = M.return) && N.call(M), 0) : M.next) && !(N = N.call(M, j[1])).done)
              return N;
            switch (M = 0, N && (j = [j[0] & 2, N.value]), j[0]) {
              case 0:
              case 1:
                N = j;
                break;
              case 4:
                return A.label++, { value: j[1], done: !1 };
              case 5:
                A.label++, M = j[1], j = [0];
                continue;
              case 7:
                j = A.ops.pop(), A.trys.pop();
                continue;
              default:
                if (N = A.trys, !(N = N.length > 0 && N[N.length - 1]) && (j[0] === 6 || j[0] === 2)) {
                  A = 0;
                  continue;
                }
                if (j[0] === 3 && (!N || j[1] > N[0] && j[1] < N[3])) {
                  A.label = j[1];
                  break;
                }
                if (j[0] === 6 && A.label < N[1]) {
                  A.label = N[1], N = j;
                  break;
                }
                if (N && A.label < N[2]) {
                  A.label = N[2], A.ops.push(j);
                  break;
                }
                N[2] && A.ops.pop(), A.trys.pop();
                continue;
            }
            j = O.call(k, A);
          } catch (Q) {
            j = [6, Q], M = 0;
          } finally {
            D = N = 0;
          }
        if (j[0] & 5) throw j[1];
        return { value: j[0] ? j[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.updateClockSkewUsingFrontToken = e.fireSessionUpdateEventsIfNecessary = e.setFrontToken = e.getFrontToken = e.setAntiCSRF = e.saveLastAccessTokenUpdate = e.getTokenForHeaderAuth = e.setToken = e.getStorageNameForToken = e.getLocalSessionState = e.onInvalidClaimResponse = e.onTokenUpdate = e.onUnauthorisedResponse = e.FrontToken = e.AntiCsrfToken = void 0;
    var l = Kt(), g = Qt(), d = Or(), m = je(), f = Jt(), s = wt(), a = bt(), c = (
      /** @class */
      function() {
        function k() {
        }
        return k.getToken = function(O) {
          return t(this, void 0, void 0, function() {
            var A;
            return n(this, function(D) {
              switch (D.label) {
                case 0:
                  return (0, s.logDebugMessage)("AntiCsrfToken.getToken: called"), O === void 0 ? (k.tokenInfo = void 0, (0, s.logDebugMessage)("AntiCsrfToken.getToken: returning undefined"), [2, void 0]) : k.tokenInfo !== void 0 ? [3, 2] : [4, ne()];
                case 1:
                  return A = D.sent(), A === null ? ((0, s.logDebugMessage)("AntiCsrfToken.getToken: returning undefined"), [2, void 0]) : (k.tokenInfo = {
                    antiCsrf: A,
                    associatedAccessTokenUpdate: O
                  }, [3, 4]);
                case 2:
                  return k.tokenInfo.associatedAccessTokenUpdate === O ? [3, 4] : (k.tokenInfo = void 0, [4, k.getToken(O)]);
                case 3:
                  return [2, D.sent()];
                case 4:
                  return (0, s.logDebugMessage)("AntiCsrfToken.getToken: returning: " + k.tokenInfo.antiCsrf), [2, k.tokenInfo.antiCsrf];
              }
            });
          });
        }, k.removeToken = function() {
          return t(this, void 0, void 0, function() {
            return n(this, function(O) {
              switch (O.label) {
                case 0:
                  return (0, s.logDebugMessage)("AntiCsrfToken.removeToken: called"), k.tokenInfo = void 0, [4, re(void 0)];
                case 1:
                  return O.sent(), [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, k.setItem = function(O, A) {
          return t(this, void 0, void 0, function() {
            return n(this, function(D) {
              switch (D.label) {
                case 0:
                  return O === void 0 ? (k.tokenInfo = void 0, [
                    2
                    /*return*/
                  ]) : ((0, s.logDebugMessage)("AntiCsrfToken.setItem: called"), [4, re(A)]);
                case 1:
                  return D.sent(), k.tokenInfo = {
                    antiCsrf: A,
                    associatedAccessTokenUpdate: O
                  }, [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, k;
      }()
    );
    e.AntiCsrfToken = c;
    var i = (
      /** @class */
      function() {
        function k() {
        }
        return k.getTokenInfo = function() {
          return t(this, void 0, void 0, function() {
            var O, A;
            return n(this, function(D) {
              switch (D.label) {
                case 0:
                  return (0, s.logDebugMessage)("FrontToken.getTokenInfo: called"), [4, q()];
                case 1:
                  return O = D.sent(), O !== null ? [3, 5] : [4, R(!1)];
                case 2:
                  return D.sent().status !== "EXISTS" ? [3, 4] : [
                    4,
                    new Promise(function(M) {
                      k.waiters.push(M);
                    })
                  ];
                case 3:
                  return D.sent(), [2, k.getTokenInfo()];
                case 4:
                  return [2, void 0];
                case 5:
                  return A = L(O), (0, s.logDebugMessage)("FrontToken.getTokenInfo: returning ate: " + A.ate), (0, s.logDebugMessage)("FrontToken.getTokenInfo: returning uid: " + A.uid), (0, s.logDebugMessage)("FrontToken.getTokenInfo: returning up: " + A.up), [2, A];
              }
            });
          });
        }, k.removeToken = function() {
          return t(this, void 0, void 0, function() {
            return n(this, function(O) {
              switch (O.label) {
                case 0:
                  return (0, s.logDebugMessage)("FrontToken.removeToken: called"), [4, F(void 0)];
                case 1:
                  return O.sent(), [4, T("access", "")];
                case 2:
                  return O.sent(), [4, T("refresh", "")];
                case 3:
                  return O.sent(), [4, c.removeToken()];
                case 4:
                  return O.sent(), k.waiters.forEach(function(A) {
                    return A(void 0);
                  }), k.waiters = [], [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, k.setItem = function(O) {
          return t(this, void 0, void 0, function() {
            return n(this, function(A) {
              switch (A.label) {
                case 0:
                  return [4, K()];
                case 1:
                  return A.sent(), O === "remove" ? [2, k.removeToken()] : ((0, s.logDebugMessage)("FrontToken.setItem: called"), [4, F(O)]);
                case 2:
                  return A.sent(), k.waiters.forEach(function(D) {
                    return D(void 0);
                  }), k.waiters = [], [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, k.doesTokenExists = function() {
          return t(this, void 0, void 0, function() {
            var O;
            return n(this, function(A) {
              switch (A.label) {
                case 0:
                  return [4, H()];
                case 1:
                  return O = A.sent(), [2, O !== null];
              }
            });
          });
        }, k.waiters = [], k;
      }()
    );
    e.FrontToken = i;
    var r = (
      /** @class */
      function() {
        function k() {
        }
        k.init = function(A, D) {
          (0, s.logDebugMessage)("init: called"), (0, s.logDebugMessage)("init: Input apiBasePath: " + A.apiBasePath), (0, s.logDebugMessage)("init: Input apiDomain: " + A.apiDomain), (0, s.logDebugMessage)("init: Input autoAddCredentials: " + A.autoAddCredentials), (0, s.logDebugMessage)("init: Input sessionTokenBackendDomain: " + A.sessionTokenBackendDomain), (0, s.logDebugMessage)("init: Input isInIframe: " + A.isInIframe), (0, s.logDebugMessage)("init: Input sessionExpiredStatusCode: " + A.sessionExpiredStatusCode), (0, s.logDebugMessage)("init: Input sessionTokenFrontendDomain: " + A.sessionTokenFrontendDomain), (0, s.logDebugMessage)("init: Input tokenTransferMethod: " + A.tokenTransferMethod);
          var M = m.default.getReferenceOrThrow().windowHandler.getWindowUnsafe();
          k.env = M === void 0 || M.fetch === void 0 ? Zr : M, k.refreshTokenUrl = A.apiDomain + A.apiBasePath + "/session/refresh", k.signOutUrl = A.apiDomain + A.apiBasePath + "/signout", k.rid = "session", k.config = A, k.env.__supertokensOriginalFetch === void 0 && ((0, s.logDebugMessage)("init: __supertokensOriginalFetch is undefined"), k.env.__supertokensOriginalFetch = k.env.fetch.bind(k.env), k.env.__supertokensSessionRecipe = D, k.env.fetch = k.env.__supertokensSessionRecipe.addFetchInterceptorsAndReturnModifiedFetch({
            originalFetch: k.env.__supertokensOriginalFetch,
            userContext: {}
          }), k.env.__supertokensSessionRecipe.addXMLHttpRequestInterceptor({
            userContext: {}
          })), k.recipeImpl = k.env.__supertokensSessionRecipe, k.initCalled = !0;
        };
        var O;
        return O = k, k.initCalled = !1, k.doRequest = function(A, D, M) {
          return t(void 0, void 0, void 0, function() {
            var N, $, U, W, j, Q, Z, he, ae, ue, ge, z, le, ut, Ne;
            return n(O, function(oe) {
              switch (oe.label) {
                case 0:
                  if (!k.initCalled)
                    throw Error("init function not called");
                  (0, s.logDebugMessage)("doRequest: start of fetch interception"), N = !1;
                  try {
                    $ = void 0, typeof M == "string" ? $ = M : typeof M == "object" && (typeof M.url == "string" ? $ = M.url : typeof M.href == "string" && ($ = M.href)), N = !k.recipeImpl.shouldDoInterceptionBasedOnUrl(
                      $,
                      k.config.apiDomain,
                      k.config.sessionTokenBackendDomain
                    );
                  } catch (rn) {
                    if (rn.message === "Please provide a valid domain name")
                      (0, s.logDebugMessage)(
                        "doRequest: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                      ), N = !k.recipeImpl.shouldDoInterceptionBasedOnUrl(
                        m.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                        k.config.apiDomain,
                        k.config.sessionTokenBackendDomain
                      );
                    else
                      throw rn;
                  }
                  return (0, s.logDebugMessage)("doRequest: Value of doNotDoInterception: " + N), N ? ((0, s.logDebugMessage)("doRequest: Returning without interception"), [4, A(D)]) : [3, 2];
                case 1:
                  return [2, oe.sent()];
                case 2:
                  return U = new Headers(
                    D !== void 0 && D.headers !== void 0 ? D.headers : M.headers
                  ), U.has("Authorization") ? [4, P("access")] : [3, 5];
                case 3:
                  return W = oe.sent(), [4, P("refresh")];
                case 4:
                  j = oe.sent(), W !== void 0 && j !== void 0 && U.get("Authorization") === "Bearer ".concat(W) && ((0, s.logDebugMessage)(
                    "doRequest: Removing Authorization from user provided headers because it contains our access token"
                  ), U.delete("Authorization")), oe.label = 5;
                case 5:
                  (0, s.logDebugMessage)("doRequest: Interception started"), l.ProcessState.getInstance().addState(
                    l.PROCESS_STATE.CALLING_INTERCEPTION_REQUEST
                  ), Q = 0, Z = void 0, oe.label = 6;
                case 6:
                  return [4, R(!0)];
                case 7:
                  return he = oe.sent(), ae = new Headers(U), ue = o(o({}, D), { headers: ae }), he.status !== "EXISTS" ? [3, 9] : [4, c.getToken(he.lastAccessTokenUpdate)];
                case 8:
                  ge = oe.sent(), ge !== void 0 && ((0, s.logDebugMessage)("doRequest: Adding anti-csrf token to request"), ae.set("anti-csrf", ge)), oe.label = 9;
                case 9:
                  return k.config.autoAddCredentials && ((0, s.logDebugMessage)("doRequest: Adding credentials include"), ue === void 0 ? ue = {
                    credentials: "include"
                  } : ue.credentials === void 0 && (ue = o(o({}, ue), {
                    credentials: "include"
                  }))), ae.has("rid") ? (0, s.logDebugMessage)("doRequest: rid header was already there in request") : ((0, s.logDebugMessage)("doRequest: Adding rid header: anti-csrf"), ae.set("rid", "anti-csrf")), z = k.config.tokenTransferMethod, (0, s.logDebugMessage)("doRequest: Adding st-auth-mode header: " + z), ae.set("st-auth-mode", z), [4, x(ae)];
                case 10:
                  return oe.sent(), (0, s.logDebugMessage)("doRequest: Making user's http call"), [4, A(ue)];
                case 11:
                  return le = oe.sent(), (0, s.logDebugMessage)("doRequest: User's http call ended"), [4, E(le)];
                case 12:
                  if (oe.sent(), V(
                    he.status === "EXISTS",
                    le.status,
                    le.headers.get("front-token")
                  ), le.status !== k.config.sessionExpiredStatusCode)
                    return [3, 14];
                  if ((0, s.logDebugMessage)("doRequest: Status code is: " + le.status), Q >= k.config.maxRetryAttemptsForSessionRefresh)
                    throw (0, s.logDebugMessage)(
                      "doRequest: Maximum session refresh attempts reached. sessionRefreshAttempts: ".concat(Q, ", maxRetryAttemptsForSessionRefresh: ").concat(k.config.maxRetryAttemptsForSessionRefresh)
                    ), ut = "Received a 401 response from ".concat(
                      M,
                      ". Attempted to refresh the session and retry the request with the updated session tokens "
                    ).concat(
                      k.config.maxRetryAttemptsForSessionRefresh,
                      " times, but each attempt resulted in a 401 error. The maximum session refresh limit has been reached. Please investigate your API. To increase the session refresh attempts, update maxRetryAttemptsForSessionRefresh in the config."
                    ), console.error(ut), new Error(ut);
                  return [4, w(he)];
                case 13:
                  if (Ne = oe.sent(), Q++, (0, s.logDebugMessage)("doRequest: sessionRefreshAttempts: " + Q), Ne.result !== "RETRY") {
                    if ((0, s.logDebugMessage)("doRequest: Not retrying original request"), Ne.error !== void 0)
                      if (Ne.error instanceof Response)
                        Z = Ne.error;
                      else
                        throw Ne.error;
                    else
                      Z = le;
                    return [3, 18];
                  }
                  return (0, s.logDebugMessage)("doRequest: Retrying original request"), [3, 17];
                case 14:
                  return le.status !== k.config.invalidClaimStatusCode ? [3, 16] : [4, S(le)];
                case 15:
                  oe.sent(), oe.label = 16;
                case 16:
                  return [2, le];
                case 17:
                  return [3, 6];
                case 18:
                  return [2, Z];
              }
            });
          });
        }, k.attemptRefreshingSession = function() {
          return t(void 0, void 0, void 0, function() {
            var A, D;
            return n(O, function(M) {
              switch (M.label) {
                case 0:
                  if (!k.initCalled)
                    throw Error("init function not called");
                  return [4, R(!1)];
                case 1:
                  return A = M.sent(), [4, w(A)];
                case 2:
                  if (D = M.sent(), D.result === "API_ERROR")
                    throw D.error;
                  return [2, D.result === "RETRY"];
              }
            });
          });
        }, k;
      }()
    );
    e.default = r;
    var u = "st-last-access-token-update", v = "st-refresh-token", y = "st-access-token", h = "sAntiCsrf", p = "sFrontToken";
    function w(k) {
      return t(this, void 0, void 0, function() {
        var O, A, D, M, N, $, U, W, j, Q, Z, he, ae, ue, ge;
        return n(this, function(z) {
          switch (z.label) {
            case 0:
              return [4, f.default.getReferenceOrThrow().lockFactory()];
            case 1:
              O = z.sent(), z.label = 2;
            case 2:
              return (0, s.logDebugMessage)("onUnauthorisedResponse: trying to acquire lock"), [4, O.acquireLock("REFRESH_TOKEN_USE", 1e3)];
            case 3:
              if (!z.sent()) return [3, 21];
              (0, s.logDebugMessage)("onUnauthorisedResponse: lock acquired"), z.label = 4;
            case 4:
              return z.trys.push([4, 17, 19, 21]), [4, R(!1)];
            case 5:
              return A = z.sent(), A.status === "NOT_EXISTS" ? ((0, s.logDebugMessage)(
                "onUnauthorisedResponse: Not refreshing because local session state is NOT_EXISTS"
              ), r.config.onHandleEvent({
                action: "UNAUTHORISED",
                sessionExpiredOrRevoked: !1,
                userContext: {}
              }), [2, { result: "SESSION_EXPIRED" }]) : (D = A.status === "EXISTS", M = k.status === "EXISTS", N = A.status !== k.status, $ = "lastAccessTokenUpdate" in A && "lastAccessTokenUpdate" in k && A.lastAccessTokenUpdate !== k.lastAccessTokenUpdate, N && D ? ((0, s.logDebugMessage)(
                "onUnauthorisedResponse: Retrying early because session status has changed and postLockLSS.status is EXISTS"
              ), [2, { result: "RETRY" }]) : D && M && $ ? ((0, s.logDebugMessage)(
                "onUnauthorisedResponse: Retrying early because pre and post lastAccessTokenUpdate don't match"
              ), [2, { result: "RETRY" }]) : (U = new Headers(), k.status !== "EXISTS" ? [3, 7] : [4, c.getToken(k.lastAccessTokenUpdate)]));
            case 6:
              W = z.sent(), W !== void 0 && ((0, s.logDebugMessage)(
                "onUnauthorisedResponse: Adding anti-csrf token to refresh API call"
              ), U.set("anti-csrf", W)), z.label = 7;
            case 7:
              return (0, s.logDebugMessage)("onUnauthorisedResponse: Adding rid and fdi-versions to refresh call header"), U.set("rid", r.rid), U.set("fdi-version", g.supported_fdi.join(",")), j = r.config.tokenTransferMethod, (0, s.logDebugMessage)("onUnauthorisedResponse: Adding st-auth-mode header: " + j), U.set("st-auth-mode", j), [4, x(U, !0)];
            case 8:
              return z.sent(), (0, s.logDebugMessage)("onUnauthorisedResponse: Calling refresh pre API hook"), [
                4,
                r.config.preAPIHook({
                  action: "REFRESH_SESSION",
                  requestInit: {
                    method: "post",
                    credentials: "include",
                    headers: U
                  },
                  url: r.refreshTokenUrl,
                  userContext: {}
                })
              ];
            case 9:
              return Q = z.sent(), (0, s.logDebugMessage)("onUnauthorisedResponse: Making refresh call"), [
                4,
                r.env.__supertokensOriginalFetch(Q.url, Q.requestInit)
              ];
            case 10:
              return Z = z.sent(), (0, s.logDebugMessage)("onUnauthorisedResponse: Refresh call ended"), [4, E(Z)];
            case 11:
              return z.sent(), (0, s.logDebugMessage)("onUnauthorisedResponse: Refresh status code is: " + Z.status), he = Z.status === r.config.sessionExpiredStatusCode, Z.headers.get("front-token") !== null ? [3, 14] : he ? [4, i.setItem("remove")] : [3, 13];
            case 12:
              return z.sent(), [3, 14];
            case 13:
              if (Z.status === 200)
                throw ae = "The 'front-token' header is missing from a successful refresh-session response. The most likely causes are proxy settings (e.g.: 'front-token' missing from 'access-control-expose-headers' or a proxy stripping this header). Please investigate your API.", console.error(ae), new Error(ae);
              z.label = 14;
            case 14:
              if (V(
                k.status === "EXISTS",
                Z.status,
                he && Z.headers.get("front-token") === null ? "remove" : Z.headers.get("front-token")
              ), Z.status >= 300)
                throw Z;
              return [
                4,
                r.config.postAPIHook({
                  action: "REFRESH_SESSION",
                  fetchResponse: Z.clone(),
                  requestInit: Q.requestInit,
                  url: Q.url,
                  userContext: {}
                })
              ];
            case 15:
              return z.sent(), [4, R(!1)];
            case 16:
              return z.sent().status === "NOT_EXISTS" ? ((0, s.logDebugMessage)(
                "onUnauthorisedResponse: local session doesn't exist, so returning session expired"
              ), [2, { result: "SESSION_EXPIRED" }]) : (r.config.onHandleEvent({
                action: "REFRESH_SESSION",
                userContext: {}
              }), (0, s.logDebugMessage)("onUnauthorisedResponse: Sending RETRY signal"), [2, { result: "RETRY" }]);
            case 17:
              return ue = z.sent(), [4, R(!1)];
            case 18:
              return z.sent().status === "NOT_EXISTS" ? ((0, s.logDebugMessage)(
                "onUnauthorisedResponse: local session doesn't exist, so returning session expired"
              ), [2, { result: "SESSION_EXPIRED", error: ue }]) : ((0, s.logDebugMessage)("onUnauthorisedResponse: sending API_ERROR"), [2, { result: "API_ERROR", error: ue }]);
            case 19:
              return [4, O.releaseLock("REFRESH_TOKEN_USE")];
            case 20:
              return z.sent(), (0, s.logDebugMessage)("onUnauthorisedResponse: Released lock"), [
                7
                /*endfinally*/
              ];
            case 21:
              return [4, R(!1)];
            case 22:
              return ge = z.sent(), ge.status === "NOT_EXISTS" ? ((0, s.logDebugMessage)(
                "onUnauthorisedResponse: lock acquired failed and local session doesn't exist, so sending SESSION_EXPIRED"
              ), [2, { result: "SESSION_EXPIRED" }]) : ge.status !== k.status || ge.status === "EXISTS" && k.status === "EXISTS" && ge.lastAccessTokenUpdate !== k.lastAccessTokenUpdate ? ((0, s.logDebugMessage)(
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
    e.onUnauthorisedResponse = w;
    function b() {
      (0, s.logDebugMessage)("onTokenUpdate: firing ACCESS_TOKEN_PAYLOAD_UPDATED event"), r.config.onHandleEvent({
        action: "ACCESS_TOKEN_PAYLOAD_UPDATED",
        userContext: {}
      });
    }
    e.onTokenUpdate = b;
    function S(k) {
      return t(this, void 0, void 0, function() {
        var O;
        return n(this, function(A) {
          switch (A.label) {
            case 0:
              return A.trys.push([0, 2, , 3]), [
                4,
                r.recipeImpl.getInvalidClaimsFromResponse({
                  response: k,
                  userContext: {}
                })
              ];
            case 1:
              return O = A.sent(), O && r.config.onHandleEvent({
                action: "API_INVALID_CLAIM",
                claimValidationErrors: O,
                userContext: {}
              }), [3, 3];
            case 2:
              return A.sent(), [3, 3];
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    e.onInvalidClaimResponse = S;
    function R(k) {
      return t(this, void 0, void 0, function() {
        var O, A, D, M, N, $, U;
        return n(this, function(W) {
          switch (W.label) {
            case 0:
              return (0, s.logDebugMessage)("getLocalSessionState: called"), [4, C(u)];
            case 1:
              return O = W.sent(), [4, i.doesTokenExists()];
            case 2:
              return A = W.sent(), A && O !== void 0 ? ((0, s.logDebugMessage)("getLocalSessionState: returning EXISTS since both frontToken and lastAccessTokenUpdate exists"), [2, { status: "EXISTS", lastAccessTokenUpdate: O }]) : [3, 3];
            case 3:
              return O ? ((0, s.logDebugMessage)("getLocalSessionState: returning NOT_EXISTS since frontToken was cleared but lastAccessTokenUpdate exists"), [2, { status: "NOT_EXISTS" }]) : [3, 4];
            case 4:
              return D = {
                status: "MAY_EXIST"
              }, k ? ((0, s.logDebugMessage)("getLocalSessionState: trying to refresh"), [4, w(D)]) : [3, 8];
            case 5:
              return M = W.sent(), M.result !== "RETRY" ? ((0, s.logDebugMessage)(
                "getLocalSessionState: return NOT_EXISTS in case error from backend" + M.result
              ), [
                2,
                {
                  status: "NOT_EXISTS"
                }
              ]) : [4, C(u)];
            case 6:
              return N = W.sent(), [4, i.doesTokenExists()];
            case 7:
              if ($ = W.sent(), !$ || N === void 0)
                throw U = "Failed to retrieve local session state from cookies after a successful session refresh. This indicates a configuration error or that the browser is preventing cookie writes.", console.error(U), new Error(U);
              return (0, s.logDebugMessage)("getLocalSessionState: returning EXISTS since both frontToken and lastAccessTokenUpdate exists post refresh"), [2, { status: "EXISTS", lastAccessTokenUpdate: N }];
            case 8:
              return (0, s.logDebugMessage)("getLocalSessionState: returning: " + D.status), [2, D];
          }
        });
      });
    }
    e.getLocalSessionState = R;
    function I(k) {
      switch (k) {
        case "access":
          return y;
        case "refresh":
          return v;
      }
    }
    e.getStorageNameForToken = I;
    function T(k, O) {
      var A = I(k);
      return O !== "" ? ((0, s.logDebugMessage)("setToken: saved ".concat(k, " token into cookies")), _(A, O, Date.now() + 31536e5)) : ((0, s.logDebugMessage)("setToken: cleared ".concat(k, " token from cookies")), _(A, O, 0));
    }
    e.setToken = T;
    function _(k, O, A) {
      var D = "Fri, 31 Dec 9999 23:59:59 GMT";
      A !== Number.MAX_SAFE_INTEGER && (D = new Date(A).toUTCString());
      var M = r.config.sessionTokenFrontendDomain;
      return M === "localhost" || M === m.default.getReferenceOrThrow().windowHandler.location.getHostName() ? d.default.getReferenceOrThrow().cookieHandler.setCookie(
        "".concat(k, "=").concat(O, ";expires=").concat(D, ";path=/;samesite=").concat(r.config.isInIframe ? "none;secure" : "lax")
      ) : d.default.getReferenceOrThrow().cookieHandler.setCookie(
        "".concat(k, "=").concat(O, ";expires=").concat(D, ";domain=").concat(M, ";path=/;samesite=").concat(r.config.isInIframe ? "none;secure" : "lax")
      );
    }
    function P(k) {
      return t(this, void 0, void 0, function() {
        var O;
        return n(this, function(A) {
          return O = I(k), [2, C(O)];
        });
      });
    }
    e.getTokenForHeaderAuth = P;
    function C(k) {
      return t(this, void 0, void 0, function() {
        var O, A, D, M;
        return n(this, function(N) {
          switch (N.label) {
            case 0:
              return A = "; ", [4, d.default.getReferenceOrThrow().cookieHandler.getCookie()];
            case 1:
              return O = A + N.sent(), D = O.split("; " + k + "="), D.length >= 2 && (M = D.pop(), M !== void 0) ? [2, M.split(";").shift()] : [2, void 0];
          }
        });
      });
    }
    function x(k, O) {
      return O === void 0 && (O = !1), t(this, void 0, void 0, function() {
        var A, D;
        return n(this, function(M) {
          switch (M.label) {
            case 0:
              return (0, s.logDebugMessage)("setTokenHeaders: adding existing tokens as header"), [4, P("access")];
            case 1:
              return A = M.sent(), [4, P("refresh")];
            case 2:
              return D = M.sent(), (O || A !== void 0) && D !== void 0 ? k.has("Authorization") ? (0, s.logDebugMessage)(
                "setAuthorizationHeaderIfRequired: Authorization header defined by the user, not adding"
              ) : ((0, s.logDebugMessage)(
                "setAuthorizationHeaderIfRequired: added authorization header"
              ), k.set(
                "Authorization",
                "Bearer ".concat(O ? D : A)
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
    function E(k) {
      return t(this, void 0, void 0, function() {
        var O, A, D, M, N;
        return n(this, function($) {
          switch ($.label) {
            case 0:
              return (0, s.logDebugMessage)("saveTokensFromHeaders: Saving updated tokens from the response headers"), O = k.headers.get("st-refresh-token"), O === null ? [3, 2] : ((0, s.logDebugMessage)("saveTokensFromHeaders: saving new refresh token"), [4, T("refresh", O)]);
            case 1:
              $.sent(), $.label = 2;
            case 2:
              return A = k.headers.get("st-access-token"), A === null ? [3, 4] : ((0, s.logDebugMessage)("saveTokensFromHeaders: saving new access token"), [4, T("access", A)]);
            case 3:
              $.sent(), $.label = 4;
            case 4:
              return D = k.headers.get("front-token"), D === null ? [3, 6] : ((0, s.logDebugMessage)("saveTokensFromHeaders: Setting sFrontToken: " + D), [4, i.setItem(D)]);
            case 5:
              $.sent(), (0, e.updateClockSkewUsingFrontToken)({ frontToken: D, responseHeaders: k.headers }), $.label = 6;
            case 6:
              return M = k.headers.get("anti-csrf"), M === null ? [3, 9] : [4, R(!1)];
            case 7:
              return N = $.sent(), N.status !== "EXISTS" ? [3, 9] : ((0, s.logDebugMessage)("saveTokensFromHeaders: Setting anti-csrf token"), [4, c.setItem(N.lastAccessTokenUpdate, M)]);
            case 8:
              $.sent(), $.label = 9;
            case 9:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    var B = void 0;
    function K() {
      return t(this, void 0, void 0, function() {
        var k;
        return n(this, function(O) {
          switch (O.label) {
            case 0:
              return (0, s.logDebugMessage)("saveLastAccessTokenUpdate: called"), k = Date.now().toString(), (0, s.logDebugMessage)("saveLastAccessTokenUpdate: setting " + k), [4, _(u, k, Number.MAX_SAFE_INTEGER)];
            case 1:
              return O.sent(), B !== void 0 ? [3, 3] : [4, C(u)];
            case 2:
              B = O.sent() === k, O.label = 3;
            case 3:
              return B === !1 && console.warn(
                "Saving to cookies was not successful, this indicates a configuration error or the browser preventing us from writing the cookies."
              ), [4, _("sIRTFrontend", "", 0)];
            case 4:
              return O.sent(), [
                2
                /*return*/
              ];
          }
        });
      });
    }
    e.saveLastAccessTokenUpdate = K;
    function ne() {
      return t(this, void 0, void 0, function() {
        function k() {
          return t(this, void 0, void 0, function() {
            var A, D, M, N, $;
            return n(this, function(U) {
              switch (U.label) {
                case 0:
                  return D = "; ", [
                    4,
                    d.default.getReferenceOrThrow().cookieHandler.getCookie()
                  ];
                case 1:
                  return A = D + U.sent(), M = A.split("; " + h + "="), M.length >= 2 && (N = M.pop(), N !== void 0) ? ($ = N.split(";").shift(), $ === void 0 ? [2, null] : [2, $]) : [2, null];
              }
            });
          });
        }
        var O;
        return n(this, function(A) {
          switch (A.label) {
            case 0:
              return (0, s.logDebugMessage)("getAntiCSRFToken: called"), [4, R(!0)];
            case 1:
              return A.sent().status !== "EXISTS" ? ((0, s.logDebugMessage)(
                "getAntiCSRFToken: Returning because local session state != EXISTS"
              ), [2, null]) : [4, k()];
            case 2:
              return O = A.sent(), (0, s.logDebugMessage)("getAntiCSRFToken: returning: " + O), [2, O];
          }
        });
      });
    }
    function re(k) {
      return t(this, void 0, void 0, function() {
        return n(this, function(O) {
          switch (O.label) {
            case 0:
              return (0, s.logDebugMessage)("setAntiCSRF: called: " + k), k === void 0 ? [3, 2] : [4, _(h, k, Number.MAX_SAFE_INTEGER)];
            case 1:
              return O.sent(), [3, 4];
            case 2:
              return [4, _(h, "", 0)];
            case 3:
              O.sent(), O.label = 4;
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    e.setAntiCSRF = re;
    function H() {
      return t(this, void 0, void 0, function() {
        var k;
        return n(this, function(O) {
          switch (O.label) {
            case 0:
              return (0, s.logDebugMessage)("getFrontTokenFromCookie: called"), [4, C(p)];
            case 1:
              return k = O.sent(), [2, k === void 0 ? null : k];
          }
        });
      });
    }
    function L(k) {
      return JSON.parse(decodeURIComponent(escape(atob(k))));
    }
    function q() {
      return t(this, void 0, void 0, function() {
        var k;
        return n(this, function(O) {
          switch (O.label) {
            case 0:
              return (0, s.logDebugMessage)("getFrontToken: called"), [4, R(!0)];
            case 1:
              return O.sent().status !== "EXISTS" ? ((0, s.logDebugMessage)("getFrontToken: Returning because sIRTFrontend != EXISTS"), [2, null]) : [4, H()];
            case 2:
              return k = O.sent(), (0, s.logDebugMessage)("getFrontToken: returning: " + k), [2, k];
          }
        });
      });
    }
    e.getFrontToken = q;
    function F(k) {
      return t(this, void 0, void 0, function() {
        var O, A, D;
        return n(this, function(M) {
          switch (M.label) {
            case 0:
              return (0, s.logDebugMessage)("setFrontToken: called"), [4, H()];
            case 1:
              return O = M.sent(), O !== null && k !== void 0 && (A = L(O).up, D = L(k).up, JSON.stringify(A) !== JSON.stringify(D) && b()), k !== void 0 ? [3, 3] : [4, _(p, "", 0)];
            case 2:
              return M.sent(), [3, 5];
            case 3:
              return [4, _(p, k, Number.MAX_SAFE_INTEGER)];
            case 4:
              M.sent(), M.label = 5;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    e.setFrontToken = F;
    function V(k, O, A) {
      if (A == null) {
        (0, s.logDebugMessage)(
          "fireSessionUpdateEventsIfNecessary returning early because the front token was not updated"
        );
        return;
      }
      var D = A !== "remove";
      (0, s.logDebugMessage)(
        "fireSessionUpdateEventsIfNecessary wasLoggedIn: ".concat(k, " frontTokenExistsAfter: ").concat(D, " status: ").concat(O)
      ), k ? D || (O === r.config.sessionExpiredStatusCode ? ((0, s.logDebugMessage)("onUnauthorisedResponse: firing UNAUTHORISED event"), r.config.onHandleEvent({
        action: "UNAUTHORISED",
        sessionExpiredOrRevoked: !0,
        userContext: {}
      })) : ((0, s.logDebugMessage)("onUnauthorisedResponse: firing SIGN_OUT event"), r.config.onHandleEvent({
        action: "SIGN_OUT",
        userContext: {}
      }))) : D && ((0, s.logDebugMessage)("onUnauthorisedResponse: firing SESSION_CREATED event"), r.config.onHandleEvent({
        action: "SESSION_CREATED",
        userContext: {}
      }));
    }
    e.fireSessionUpdateEventsIfNecessary = V;
    var X = function(k) {
      var O = k.frontToken, A = k.responseHeaders;
      if ((0, s.logDebugMessage)("updateClockSkewUsingFrontToken: frontToken: " + O), O == null || O === "remove") {
        (0, s.logDebugMessage)(
          "updateClockSkewUsingFrontToken: the access token payload wasn't updated or is being removed, skipping clock skew update"
        );
        return;
      }
      var D = L(O), M = r.recipeImpl.calculateClockSkewInMillis({
        accessTokenPayload: D.up,
        responseHeaders: A
      });
      a.default.getReferenceOrThrow().dateProvider.setClientClockSkewInMillis(M), (0, s.logDebugMessage)("updateClockSkewUsingFrontToken: Client clock synchronized successfully");
    };
    e.updateClockSkewUsingFrontToken = X;
  }(Te)), Te;
}
var it = {}, Cn;
function Pr() {
  if (Cn) return it;
  Cn = 1, Object.defineProperty(it, "__esModule", { value: !0 }), it.SessionClaimValidatorStore = void 0;
  var e = (
    /** @class */
    function() {
      function o() {
      }
      return o.claimValidatorsAddedByOtherRecipes = [], o.addClaimValidatorFromOtherRecipe = function(t) {
        o.claimValidatorsAddedByOtherRecipes.push(t);
      }, o.getClaimValidatorsAddedByOtherRecipes = function() {
        return o.claimValidatorsAddedByOtherRecipes;
      }, o;
    }()
  );
  return it.SessionClaimValidatorStore = e, it.default = e, it;
}
var An;
function lo() {
  if (An) return ct;
  An = 1, Object.defineProperty(ct, "__esModule", { value: !0 }), ct.getGlobalClaimValidators = void 0;
  var e = zt(), o = St(), t = Pr();
  function n(l, g) {
    var d = (0, e.getNormalisedUserContext)(g), m = t.default.getClaimValidatorsAddedByOtherRecipes(), f = o.default.recipeImpl.getGlobalClaimValidators({
      claimValidatorsAddedByOtherRecipes: m,
      userContext: d
    }), s = l !== void 0 ? l(f, d) : f;
    return s;
  }
  return ct.getGlobalClaimValidators = n, ct;
}
var On;
function fo() {
  return On || (On = 1, function(e) {
    function o(t) {
      for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
    }
    e.__esModule = !0, o(lo());
  }(Lt)), Lt;
}
var Pn;
function Ie() {
  if (Pn) return J;
  Pn = 1, Object.defineProperty(J, "__esModule", { value: !0 }), J.normaliseUser = J.normaliseUserResponse = J.getGlobalClaimValidators = J.getHashFromLocation = J.getNormalisedUserContext = J.checkForSSRErrorAndAppendIfNeeded = J.getAllQueryParams = J.getQueryParams = J.isTest = J.normaliseInputAppInfoOrThrowError = J.appendQueryParamsToURL = void 0;
  var e = Xt(), o = no(), t = ro(), n = Ar(), l = fo();
  function g(h, p) {
    if (p === void 0)
      return h;
    try {
      var w = new URL(h);
      return Object.entries(p).forEach(function(R) {
        var I = R[0], T = R[1];
        w.searchParams.set(I, T);
      }), w.href;
    } catch {
      var b = h.startsWith("/") ? "http:localhost" : "http://localhost/", S = new URL("".concat(b).concat(h));
      return Object.entries(p).forEach(function(I) {
        var T = I[0], _ = I[1];
        S.searchParams.set(T, _);
      }), "".concat(S.pathname).concat(S.search);
    }
  }
  J.appendQueryParamsToURL = g;
  function d(h, p) {
    return p !== void 0 ? new n.default(p) : new n.default(h);
  }
  function m(h) {
    if (h === void 0)
      throw new Error("Please provide the appInfo object when calling supertokens.init");
    if (h.apiDomain === void 0)
      throw new Error("Please provide your apiDomain inside the appInfo object when calling supertokens.init");
    if (h.appName === void 0)
      throw new Error("Please provide your appName inside the appInfo object when calling supertokens.init");
    var p = new n.default("");
    return h.apiGatewayPath !== void 0 && (p = new n.default(h.apiGatewayPath)), {
      appName: h.appName,
      apiDomain: new t.default(h.apiDomain),
      apiBasePath: p.appendPath(
        d(o.DEFAULT_API_BASE_PATH, h.apiBasePath)
      )
    };
  }
  J.normaliseInputAppInfoOrThrowError = m;
  function f() {
    try {
      return process.env.TEST_MODE === "testing";
    } catch {
      return !1;
    }
  }
  J.isTest = f;
  function s(h) {
    var p = new URLSearchParams(
      e.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getSearch()
    ), w = p.get(h);
    if (w !== null)
      return w;
  }
  J.getQueryParams = s;
  function a() {
    return new URLSearchParams(
      e.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getSearch()
    );
  }
  J.getAllQueryParams = a;
  function c(h) {
    return typeof window > "u" && (h = h + o.SSR_ERROR), h;
  }
  J.checkForSSRErrorAndAppendIfNeeded = c;
  function i(h) {
    return h === void 0 ? {} : h;
  }
  J.getNormalisedUserContext = i;
  function r() {
    return e.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getHash().substring(1);
  }
  J.getHashFromLocation = r;
  function u(h) {
    var p = h.overrideGlobalClaimValidators, w = h.userContext;
    return (0, l.getGlobalClaimValidators)(p, w);
  }
  J.getGlobalClaimValidators = u;
  function v(h, p) {
    return "createdNewRecipeUser" in p ? p : {
      createdNewRecipeUser: p.createdNewUser,
      user: y(h, p.user)
    };
  }
  J.normaliseUserResponse = v;
  function y(h, p) {
    if ("loginMethods" in p)
      return p;
    var w = p.email !== void 0 ? [p.email] : [], b = p.phoneNumber !== void 0 ? [p.phoneNumber] : [], S = p.thirdParty !== void 0 ? [p.thirdParty] : [];
    return {
      id: p.id,
      emails: w,
      phoneNumbers: b,
      thirdParty: S,
      isPrimaryUser: !1,
      tenantIds: p.tenantIds,
      timeJoined: p.timeJoined,
      loginMethods: [
        {
          recipeId: h,
          recipeUserId: p.id,
          timeJoined: p.timeJoined,
          tenantIds: p.tenantIds,
          email: p.email,
          phoneNumber: p.email
        }
      ]
    };
  }
  return J.normaliseUser = y, J;
}
var pe = {}, Be = {}, dt = {}, Pe = {}, En;
function ho() {
  if (En) return Pe;
  En = 1;
  var e = Pe && Pe.__awaiter || function(n, l, g, d) {
    function m(f) {
      return f instanceof g ? f : new g(function(s) {
        s(f);
      });
    }
    return new (g || (g = Promise))(function(f, s) {
      function a(r) {
        try {
          i(d.next(r));
        } catch (u) {
          s(u);
        }
      }
      function c(r) {
        try {
          i(d.throw(r));
        } catch (u) {
          s(u);
        }
      }
      function i(r) {
        r.done ? f(r.value) : m(r.value).then(a, c);
      }
      i((d = d.apply(n, l || [])).next());
    });
  }, o = Pe && Pe.__generator || function(n, l) {
    var g = {
      label: 0,
      sent: function() {
        if (f[0] & 1) throw f[1];
        return f[1];
      },
      trys: [],
      ops: []
    }, d, m, f, s;
    return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
      return this;
    }), s;
    function a(i) {
      return function(r) {
        return c([i, r]);
      };
    }
    function c(i) {
      if (d) throw new TypeError("Generator is already executing.");
      for (; g; )
        try {
          if (d = 1, m && (f = i[0] & 2 ? m.return : i[0] ? m.throw || ((f = m.return) && f.call(m), 0) : m.next) && !(f = f.call(m, i[1])).done)
            return f;
          switch (m = 0, f && (i = [i[0] & 2, f.value]), i[0]) {
            case 0:
            case 1:
              f = i;
              break;
            case 4:
              return g.label++, { value: i[1], done: !1 };
            case 5:
              g.label++, m = i[1], i = [0];
              continue;
            case 7:
              i = g.ops.pop(), g.trys.pop();
              continue;
            default:
              if (f = g.trys, !(f = f.length > 0 && f[f.length - 1]) && (i[0] === 6 || i[0] === 2)) {
                g = 0;
                continue;
              }
              if (i[0] === 3 && (!f || i[1] > f[0] && i[1] < f[3])) {
                g.label = i[1];
                break;
              }
              if (i[0] === 6 && g.label < f[1]) {
                g.label = f[1], f = i;
                break;
              }
              if (f && g.label < f[2]) {
                g.label = f[2], g.ops.push(i);
                break;
              }
              f[2] && g.ops.pop(), g.trys.pop();
              continue;
          }
          i = l.call(n, g);
        } catch (r) {
          i = [6, r], m = 0;
        } finally {
          d = f = 0;
        }
      if (i[0] & 5) throw i[1];
      return { value: i[0] ? i[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Pe, "__esModule", { value: !0 }), Pe.normaliseRecipeModuleConfig = void 0;
  function t(n) {
    var l = this, g = n.preAPIHook;
    g === void 0 && (g = function(m) {
      return e(l, void 0, void 0, function() {
        return o(this, function(f) {
          return [2, m];
        });
      });
    });
    var d = n.postAPIHook;
    return d === void 0 && (d = function() {
      return e(l, void 0, void 0, function() {
        return o(this, function(m) {
          return [
            2
            /*return*/
          ];
        });
      });
    }), {
      recipeId: n.recipeId,
      appInfo: n.appInfo,
      clientType: n.clientType,
      preAPIHook: g,
      postAPIHook: d
    };
  }
  return Pe.normaliseRecipeModuleConfig = t, Pe;
}
var xn;
function Yt() {
  if (xn) return dt;
  xn = 1, Object.defineProperty(dt, "__esModule", { value: !0 }), dt.normaliseAuthRecipe = void 0;
  var e = ho();
  function o(t) {
    return (0, e.normaliseRecipeModuleConfig)(t);
  }
  return dt.normaliseAuthRecipe = o, dt;
}
var Dn;
function go() {
  if (Dn) return Be;
  Dn = 1;
  var e = Be && Be.__assign || function() {
    return e = Object.assign || function(n) {
      for (var l, g = 1, d = arguments.length; g < d; g++) {
        l = arguments[g];
        for (var m in l) Object.prototype.hasOwnProperty.call(l, m) && (n[m] = l[m]);
      }
      return n;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(Be, "__esModule", { value: !0 }), Be.normaliseUserInput = void 0;
  var o = Yt();
  function t(n) {
    var l = e(
      {
        functions: function(g) {
          return g;
        }
      },
      n.override
    );
    return e(e({}, (0, o.normaliseAuthRecipe)(n)), { override: l });
  }
  return Be.normaliseUserInput = t, Be;
}
var st = {}, Ge = {}, Mn;
function vo() {
  if (Mn) return Ge;
  Mn = 1;
  var e = Ge && Ge.__assign || function() {
    return e = Object.assign || function(t) {
      for (var n, l = 1, g = arguments.length; l < g; l++) {
        n = arguments[l];
        for (var d in n) Object.prototype.hasOwnProperty.call(n, d) && (t[d] = n[d]);
      }
      return t;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(Ge, "__esModule", { value: !0 }), Ge.getProxyObject = void 0;
  function o(t) {
    for (var n = e(e({}, t), { _call: function(s, a) {
      throw new Error("This function should only be called through the recipe object");
    } }), l = Object.keys(n), g = function(s) {
      s !== "_call" && (n[s] = function() {
        for (var a = [], c = 0; c < arguments.length; c++)
          a[c] = arguments[c];
        return this._call(s, a);
      });
    }, d = 0, m = l; d < m.length; d++) {
      var f = m[d];
      g(f);
    }
    return n;
  }
  return Ge.getProxyObject = o, Ge;
}
var Ln;
function Pt() {
  if (Ln) return st;
  Ln = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.OverrideableBuilder = void 0;
  var e = vo(), o = (
    /** @class */
    function() {
      function t(n) {
        this.layers = [n], this.proxies = [];
      }
      return t.prototype.override = function(n) {
        for (var l = (0, e.getProxyObject)(this.layers[0]), g = n(l, this), d = 0, m = Object.keys(this.layers[0]); d < m.length; d++) {
          var f = m[d];
          g[f] === l[f] || f === "_call" ? delete g[f] : g[f] === void 0 && (g[f] = null);
        }
        return this.layers.push(g), this.proxies.push(l), this;
      }, t.prototype.build = function() {
        var n = this;
        if (this.result)
          return this.result;
        this.result = {};
        for (var l = 0, g = this.layers; l < g.length; l++)
          for (var d = g[l], m = 0, f = Object.keys(d); m < f.length; m++) {
            var s = f[m], a = d[s];
            a !== void 0 && (a === null ? this.result[s] = void 0 : typeof a == "function" ? this.result[s] = a.bind(this.result) : this.result[s] = a);
          }
        for (var c = function(u) {
          var v = i.proxies[u];
          v._call = function(y, h) {
            for (var p = u; p >= 0; --p) {
              var w = n.layers[p][y];
              if (w != null)
                return w.bind(n.result).apply(void 0, h);
            }
          };
        }, i = this, r = 0; r < this.proxies.length; ++r)
          c(r);
        return this.result;
      }, t;
    }()
  );
  return st.OverrideableBuilder = o, st.default = o, st;
}
var ye = {}, we = {}, Xe = {}, Un;
function mo() {
  return Un || (Un = 1, Object.defineProperty(Xe, "__esModule", { value: !0 }), Xe.supported_fdi = Xe.package_version = void 0, Xe.package_version = "0.14.0", Xe.supported_fdi = ["3.1", "4.0"]), Xe;
}
var Tt = {}, Ut = {}, ze = {}, Hn;
function Er() {
  if (Hn) return ze;
  Hn = 1;
  var e = ze && ze.__extends || /* @__PURE__ */ function() {
    var t = function(n, l) {
      return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(g, d) {
        g.__proto__ = d;
      } || function(g, d) {
        for (var m in d) Object.prototype.hasOwnProperty.call(d, m) && (g[m] = d[m]);
      }, t(n, l);
    };
    return function(n, l) {
      if (typeof l != "function" && l !== null)
        throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
      t(n, l);
      function g() {
        this.constructor = n;
      }
      n.prototype = l === null ? Object.create(l) : (g.prototype = l.prototype, new g());
    };
  }();
  Object.defineProperty(ze, "__esModule", { value: !0 }), ze.STGeneralError = void 0;
  var o = (
    /** @class */
    function(t) {
      e(n, t);
      function n(l) {
        var g = t.call(this, l) || this;
        return g.isSuperTokensGeneralError = !0, g;
      }
      return n.isThisError = function(l) {
        return l.isSuperTokensGeneralError === !0;
      }, n;
    }(Error)
  );
  return ze.STGeneralError = o, ze;
}
var Nn;
function po() {
  return Nn || (Nn = 1, function(e) {
    function o(n) {
      for (var l in n) e.hasOwnProperty(l) || (e[l] = n[l]);
    }
    e.__esModule = !0;
    let t = Er();
    t.default !== void 0 ? o(t) : o({
      default: t,
      ...t
    });
  }(Ut)), Ut;
}
var Fn;
function xr() {
  if (Fn) return Tt;
  Fn = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
  var e = po();
  return Tt.default = e.STGeneralError, Tt;
}
var qn;
function Zt() {
  if (qn) return we;
  qn = 1;
  var e = we && we.__assign || function() {
    return e = Object.assign || function(m) {
      for (var f, s = 1, a = arguments.length; s < a; s++) {
        f = arguments[s];
        for (var c in f) Object.prototype.hasOwnProperty.call(f, c) && (m[c] = f[c]);
      }
      return m;
    }, e.apply(this, arguments);
  }, o = we && we.__awaiter || function(m, f, s, a) {
    function c(i) {
      return i instanceof s ? i : new s(function(r) {
        r(i);
      });
    }
    return new (s || (s = Promise))(function(i, r) {
      function u(h) {
        try {
          y(a.next(h));
        } catch (p) {
          r(p);
        }
      }
      function v(h) {
        try {
          y(a.throw(h));
        } catch (p) {
          r(p);
        }
      }
      function y(h) {
        h.done ? i(h.value) : c(h.value).then(u, v);
      }
      y((a = a.apply(m, f || [])).next());
    });
  }, t = we && we.__generator || function(m, f) {
    var s = {
      label: 0,
      sent: function() {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: []
    }, a, c, i, r;
    return r = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (r[Symbol.iterator] = function() {
      return this;
    }), r;
    function u(y) {
      return function(h) {
        return v([y, h]);
      };
    }
    function v(y) {
      if (a) throw new TypeError("Generator is already executing.");
      for (; s; )
        try {
          if (a = 1, c && (i = y[0] & 2 ? c.return : y[0] ? c.throw || ((i = c.return) && i.call(c), 0) : c.next) && !(i = i.call(c, y[1])).done)
            return i;
          switch (c = 0, i && (y = [y[0] & 2, i.value]), y[0]) {
            case 0:
            case 1:
              i = y;
              break;
            case 4:
              return s.label++, { value: y[1], done: !1 };
            case 5:
              s.label++, c = y[1], y = [0];
              continue;
            case 7:
              y = s.ops.pop(), s.trys.pop();
              continue;
            default:
              if (i = s.trys, !(i = i.length > 0 && i[i.length - 1]) && (y[0] === 6 || y[0] === 2)) {
                s = 0;
                continue;
              }
              if (y[0] === 3 && (!i || y[1] > i[0] && y[1] < i[3])) {
                s.label = y[1];
                break;
              }
              if (y[0] === 6 && s.label < i[1]) {
                s.label = i[1], i = y;
                break;
              }
              if (i && s.label < i[2]) {
                s.label = i[2], s.ops.push(y);
                break;
              }
              i[2] && s.ops.pop(), s.trys.pop();
              continue;
          }
          y = f.call(m, s);
        } catch (h) {
          y = [6, h], c = 0;
        } finally {
          a = i = 0;
        }
      if (y[0] & 5) throw y[1];
      return { value: y[0] ? y[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(we, "__esModule", { value: !0 });
  var n = Ar(), l = mo(), g = xr(), d = (
    /** @class */
    function() {
      function m(s, a) {
        var c = this;
        this.recipeId = s, this.appInfo = a, this.get = function(i, r, u, v, y, h) {
          return o(c, void 0, void 0, function() {
            var p, w;
            return t(this, function(b) {
              switch (b.label) {
                case 0:
                  return [
                    4,
                    this.fetch(
                      this.getFullUrl(i, r, v),
                      e({ method: "GET" }, u),
                      y,
                      h
                    )
                  ];
                case 1:
                  return p = b.sent(), [4, this.getResponseJsonOrThrowGeneralError(p)];
                case 2:
                  return w = b.sent(), [
                    2,
                    {
                      jsonBody: w,
                      fetchResponse: p
                    }
                  ];
              }
            });
          });
        }, this.post = function(i, r, u, v, y) {
          return o(c, void 0, void 0, function() {
            var h, p;
            return t(this, function(w) {
              switch (w.label) {
                case 0:
                  if (u.body === void 0)
                    throw new Error("Post request must have a body");
                  return [
                    4,
                    this.fetch(
                      this.getFullUrl(i, r),
                      e({ method: "POST" }, u),
                      v,
                      y
                    )
                  ];
                case 1:
                  return h = w.sent(), [4, this.getResponseJsonOrThrowGeneralError(h)];
                case 2:
                  return p = w.sent(), [
                    2,
                    {
                      jsonBody: p,
                      fetchResponse: h
                    }
                  ];
              }
            });
          });
        }, this.delete = function(i, r, u, v, y) {
          return o(c, void 0, void 0, function() {
            var h, p;
            return t(this, function(w) {
              switch (w.label) {
                case 0:
                  return [
                    4,
                    this.fetch(
                      this.getFullUrl(i, r),
                      e({ method: "DELETE" }, u),
                      v,
                      y
                    )
                  ];
                case 1:
                  return h = w.sent(), [4, this.getResponseJsonOrThrowGeneralError(h)];
                case 2:
                  return p = w.sent(), [
                    2,
                    {
                      jsonBody: p,
                      fetchResponse: h
                    }
                  ];
              }
            });
          });
        }, this.put = function(i, r, u, v, y) {
          return o(c, void 0, void 0, function() {
            var h, p;
            return t(this, function(w) {
              switch (w.label) {
                case 0:
                  return [
                    4,
                    this.fetch(
                      this.getFullUrl(i, r),
                      e({ method: "PUT" }, u),
                      v,
                      y
                    )
                  ];
                case 1:
                  return h = w.sent(), [4, this.getResponseJsonOrThrowGeneralError(h)];
                case 2:
                  return p = w.sent(), [
                    2,
                    {
                      jsonBody: p,
                      fetchResponse: h
                    }
                  ];
              }
            });
          });
        }, this.fetch = function(i, r, u, v) {
          return o(c, void 0, void 0, function() {
            var y, h, p, w, b, S;
            return t(this, function(R) {
              switch (R.label) {
                case 0:
                  return r === void 0 ? y = {} : y = r.headers, [
                    4,
                    this.callPreAPIHook({
                      preAPIHook: u,
                      url: i,
                      requestInit: e(e({}, r), {
                        headers: e(e({}, y), {
                          "fdi-version": l.supported_fdi.join(","),
                          "Content-Type": "application/json",
                          rid: this.recipeId
                        })
                      })
                    })
                  ];
                case 1:
                  return h = R.sent(), p = h.requestInit, w = h.url, [4, fetch(w, p)];
                case 2:
                  if (b = R.sent(), b.status >= 300)
                    throw b;
                  return v === void 0 ? [3, 4] : (S = b.clone(), [
                    4,
                    v({
                      requestInit: p,
                      url: i,
                      fetchResponse: S
                    })
                  ]);
                case 3:
                  R.sent(), R.label = 4;
                case 4:
                  return [2, b];
              }
            });
          });
        }, this.callPreAPIHook = function(i) {
          return o(c, void 0, void 0, function() {
            var r;
            return t(this, function(u) {
              switch (u.label) {
                case 0:
                  return i.preAPIHook === void 0 ? [
                    2,
                    {
                      url: i.url,
                      requestInit: i.requestInit
                    }
                  ] : [
                    4,
                    i.preAPIHook({
                      url: i.url,
                      requestInit: i.requestInit
                    })
                  ];
                case 1:
                  return r = u.sent(), [2, r];
              }
            });
          });
        }, this.getFullUrl = function(i, r, u) {
          var v = c.appInfo.apiBasePath.getAsStringDangerous();
          i !== void 0 && i !== "public" && (v = "".concat(v, "/").concat(i));
          var y = new n.default(r), h = "".concat(c.appInfo.apiDomain.getAsStringDangerous()).concat(v).concat(y.getAsStringDangerous());
          return u === void 0 ? h : h + "?" + new URLSearchParams(u);
        }, this.getResponseJsonOrThrowGeneralError = function(i) {
          return o(c, void 0, void 0, function() {
            var r, u;
            return t(this, function(v) {
              switch (v.label) {
                case 0:
                  return [4, i.clone().json()];
                case 1:
                  if (r = v.sent(), r.status === "GENERAL_ERROR")
                    throw u = r.message === void 0 ? "No Error Message Provided" : r.message, new g.default(u);
                  return [2, r];
              }
            });
          });
        };
      }
      var f;
      return f = m, m.preparePreAPIHook = function(s) {
        var a = s.recipePreAPIHook, c = s.action, i = s.options, r = s.userContext;
        return function(u) {
          return o(void 0, void 0, void 0, function() {
            var v;
            return t(f, function(y) {
              switch (y.label) {
                case 0:
                  return [
                    4,
                    a(
                      e(e({}, u), { action: c, userContext: r })
                    )
                  ];
                case 1:
                  return v = y.sent(), i === void 0 || i.preAPIHook === void 0 ? [2, v] : [
                    2,
                    i.preAPIHook({
                      url: v.url,
                      requestInit: v.requestInit,
                      userContext: r
                    })
                  ];
              }
            });
          });
        };
      }, m.preparePostAPIHook = function(s) {
        var a = s.recipePostAPIHook, c = s.action, i = s.userContext;
        return function(r) {
          return o(void 0, void 0, void 0, function() {
            return t(f, function(u) {
              switch (u.label) {
                case 0:
                  return [
                    4,
                    a(
                      e(e({}, r), { userContext: i, action: c })
                    )
                  ];
                case 1:
                  return u.sent(), [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
      }, m;
    }()
  );
  return we.default = d, we;
}
var jn;
function yo() {
  if (jn) return ye;
  jn = 1;
  var e = ye && ye.__awaiter || function(g, d, m, f) {
    function s(a) {
      return a instanceof m ? a : new m(function(c) {
        c(a);
      });
    }
    return new (m || (m = Promise))(function(a, c) {
      function i(v) {
        try {
          u(f.next(v));
        } catch (y) {
          c(y);
        }
      }
      function r(v) {
        try {
          u(f.throw(v));
        } catch (y) {
          c(y);
        }
      }
      function u(v) {
        v.done ? a(v.value) : s(v.value).then(i, r);
      }
      u((f = f.apply(g, d || [])).next());
    });
  }, o = ye && ye.__generator || function(g, d) {
    var m = {
      label: 0,
      sent: function() {
        if (a[0] & 1) throw a[1];
        return a[1];
      },
      trys: [],
      ops: []
    }, f, s, a, c;
    return c = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (c[Symbol.iterator] = function() {
      return this;
    }), c;
    function i(u) {
      return function(v) {
        return r([u, v]);
      };
    }
    function r(u) {
      if (f) throw new TypeError("Generator is already executing.");
      for (; m; )
        try {
          if (f = 1, s && (a = u[0] & 2 ? s.return : u[0] ? s.throw || ((a = s.return) && a.call(s), 0) : s.next) && !(a = a.call(s, u[1])).done)
            return a;
          switch (s = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
            case 0:
            case 1:
              a = u;
              break;
            case 4:
              return m.label++, { value: u[1], done: !1 };
            case 5:
              m.label++, s = u[1], u = [0];
              continue;
            case 7:
              u = m.ops.pop(), m.trys.pop();
              continue;
            default:
              if (a = m.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                m = 0;
                continue;
              }
              if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
                m.label = u[1];
                break;
              }
              if (u[0] === 6 && m.label < a[1]) {
                m.label = a[1], a = u;
                break;
              }
              if (a && m.label < a[2]) {
                m.label = a[2], m.ops.push(u);
                break;
              }
              a[2] && m.ops.pop(), m.trys.pop();
              continue;
          }
          u = d.call(g, m);
        } catch (v) {
          u = [6, v], s = 0;
        } finally {
          f = a = 0;
        }
      if (u[0] & 5) throw u[1];
      return { value: u[0] ? u[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(ye, "__esModule", { value: !0 }), ye.getRecipeImplementation = void 0;
  var t = Zt(), n = Ie();
  function l(g) {
    var d = new t.default(g.recipeId, g.appInfo);
    return {
      getTenantId: function() {
        var m = (0, n.getQueryParams)("tenantId");
        if ((m == null ? void 0 : m.trim()) !== "")
          return m;
      },
      getLoginMethods: function(m) {
        var f = m.tenantId, s = m.options, a = m.userContext;
        return e(this, void 0, void 0, function() {
          var c, i, r, u, v;
          return o(this, function(y) {
            switch (y.label) {
              case 0:
                return c = {}, g.clientType !== void 0 && (c.clientType = g.clientType), [
                  4,
                  d.get(
                    f,
                    "/loginmethods",
                    {},
                    c,
                    t.default.preparePreAPIHook({
                      recipePreAPIHook: g.preAPIHook,
                      action: "GET_LOGIN_METHODS",
                      options: s,
                      userContext: a
                    }),
                    t.default.preparePostAPIHook({
                      recipePostAPIHook: g.postAPIHook,
                      action: "GET_LOGIN_METHODS",
                      userContext: a
                    })
                  )
                ];
              case 1:
                return i = y.sent(), r = i.jsonBody, u = i.fetchResponse, r.firstFactors === void 0 ? (v = [], r.emailPassword.enabled && v.push("emailpassword"), r.thirdParty.enabled && v.push("thirdparty"), r.passwordless.enabled && (v.push("otp-email"), v.push("otp-phone"), v.push("link-email"), v.push("link-phone"))) : v = r.firstFactors, [
                  2,
                  {
                    status: "OK",
                    thirdParty: {
                      providers: r.thirdParty.providers
                    },
                    firstFactors: v,
                    fetchResponse: u
                  }
                ];
            }
          });
        });
      }
    };
  }
  return ye.default = l, ye.getRecipeImplementation = l, ye;
}
var be = {}, Ct = {}, $n;
function Dr() {
  if ($n) return Ct;
  $n = 1, Object.defineProperty(Ct, "__esModule", { value: !0 });
  var e = (
    /** @class */
    /* @__PURE__ */ function() {
      function o(t) {
        this.config = t;
      }
      return o;
    }()
  );
  return Ct.default = e, Ct;
}
var ie = {}, Ht = {}, Ke = {}, Se = {}, se = {}, Ee = {}, Vn;
function wo() {
  if (Vn) return Ee;
  Vn = 1;
  var e = Ee && Ee.__awaiter || function(l, g, d, m) {
    function f(s) {
      return s instanceof d ? s : new d(function(a) {
        a(s);
      });
    }
    return new (d || (d = Promise))(function(s, a) {
      function c(u) {
        try {
          r(m.next(u));
        } catch (v) {
          a(v);
        }
      }
      function i(u) {
        try {
          r(m.throw(u));
        } catch (v) {
          a(v);
        }
      }
      function r(u) {
        u.done ? s(u.value) : f(u.value).then(c, i);
      }
      r((m = m.apply(l, g || [])).next());
    });
  }, o = Ee && Ee.__generator || function(l, g) {
    var d = {
      label: 0,
      sent: function() {
        if (s[0] & 1) throw s[1];
        return s[1];
      },
      trys: [],
      ops: []
    }, m, f, s, a;
    return a = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
      return this;
    }), a;
    function c(r) {
      return function(u) {
        return i([r, u]);
      };
    }
    function i(r) {
      if (m) throw new TypeError("Generator is already executing.");
      for (; d; )
        try {
          if (m = 1, f && (s = r[0] & 2 ? f.return : r[0] ? f.throw || ((s = f.return) && s.call(f), 0) : f.next) && !(s = s.call(f, r[1])).done)
            return s;
          switch (f = 0, s && (r = [r[0] & 2, s.value]), r[0]) {
            case 0:
            case 1:
              s = r;
              break;
            case 4:
              return d.label++, { value: r[1], done: !1 };
            case 5:
              d.label++, f = r[1], r = [0];
              continue;
            case 7:
              r = d.ops.pop(), d.trys.pop();
              continue;
            default:
              if (s = d.trys, !(s = s.length > 0 && s[s.length - 1]) && (r[0] === 6 || r[0] === 2)) {
                d = 0;
                continue;
              }
              if (r[0] === 3 && (!s || r[1] > s[0] && r[1] < s[3])) {
                d.label = r[1];
                break;
              }
              if (r[0] === 6 && d.label < s[1]) {
                d.label = s[1], s = r;
                break;
              }
              if (s && d.label < s[2]) {
                d.label = s[2], d.ops.push(r);
                break;
              }
              s[2] && d.ops.pop(), d.trys.pop();
              continue;
          }
          r = g.call(l, d);
        } catch (u) {
          r = [6, u], f = 0;
        } finally {
          m = s = 0;
        }
      if (r[0] & 5) throw r[1];
      return { value: r[0] ? r[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.createAxiosErrorFromFetchResp = void 0;
  function t(l, g, d, m, f) {
    return l.config = g, d && (l.code = d), l.request = m, l.response = f, l.isAxiosError = !0, l.toJSON = function() {
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
    }, l;
  }
  function n(l) {
    return e(this, void 0, void 0, function() {
      var g, d, m, f, s;
      return o(this, function(a) {
        switch (a.label) {
          case 0:
            if (g = {
              url: l.url,
              headers: l.headers
            }, d = "status" in l, !d) return [3, 12];
            if (f = l.headers.get("content-type"), s = void 0, f !== null) return [3, 5];
            a.label = 1;
          case 1:
            return a.trys.push([1, 3, , 4]), [4, l.text()];
          case 2:
            return s = a.sent(), [3, 4];
          case 3:
            return a.sent(), s = "", [3, 4];
          case 4:
            return [3, 11];
          case 5:
            return f.includes("application/json") ? [4, l.json()] : [3, 7];
          case 6:
            return s = a.sent(), [3, 11];
          case 7:
            return f.includes("text/") ? [4, l.text()] : [3, 9];
          case 8:
            return s = a.sent(), [3, 11];
          case 9:
            return [4, l.blob()];
          case 10:
            s = a.sent(), a.label = 11;
          case 11:
            m = {
              data: s,
              status: l.status,
              statusText: l.statusText,
              headers: l.headers,
              config: g,
              request: void 0
            }, a.label = 12;
          case 12:
            return [
              2,
              t(
                d ? new Error("Request failed with status code " + l.status) : l,
                g,
                l.code,
                void 0,
                m
              )
            ];
        }
      });
    });
  }
  return Ee.createAxiosErrorFromFetchResp = n, Ee;
}
var Wn;
function bo() {
  if (Wn) return se;
  Wn = 1;
  var e = se && se.__assign || function() {
    return e = Object.assign || function(p) {
      for (var w, b = 1, S = arguments.length; b < S; b++) {
        w = arguments[b];
        for (var R in w) Object.prototype.hasOwnProperty.call(w, R) && (p[R] = w[R]);
      }
      return p;
    }, e.apply(this, arguments);
  }, o = se && se.__awaiter || function(p, w, b, S) {
    function R(I) {
      return I instanceof b ? I : new b(function(T) {
        T(I);
      });
    }
    return new (b || (b = Promise))(function(I, T) {
      function _(x) {
        try {
          C(S.next(x));
        } catch (E) {
          T(E);
        }
      }
      function P(x) {
        try {
          C(S.throw(x));
        } catch (E) {
          T(E);
        }
      }
      function C(x) {
        x.done ? I(x.value) : R(x.value).then(_, P);
      }
      C((S = S.apply(p, w || [])).next());
    });
  }, t = se && se.__generator || function(p, w) {
    var b = {
      label: 0,
      sent: function() {
        if (I[0] & 1) throw I[1];
        return I[1];
      },
      trys: [],
      ops: []
    }, S, R, I, T;
    return T = { next: _(0), throw: _(1), return: _(2) }, typeof Symbol == "function" && (T[Symbol.iterator] = function() {
      return this;
    }), T;
    function _(C) {
      return function(x) {
        return P([C, x]);
      };
    }
    function P(C) {
      if (S) throw new TypeError("Generator is already executing.");
      for (; b; )
        try {
          if (S = 1, R && (I = C[0] & 2 ? R.return : C[0] ? R.throw || ((I = R.return) && I.call(R), 0) : R.next) && !(I = I.call(R, C[1])).done)
            return I;
          switch (R = 0, I && (C = [C[0] & 2, I.value]), C[0]) {
            case 0:
            case 1:
              I = C;
              break;
            case 4:
              return b.label++, { value: C[1], done: !1 };
            case 5:
              b.label++, R = C[1], C = [0];
              continue;
            case 7:
              C = b.ops.pop(), b.trys.pop();
              continue;
            default:
              if (I = b.trys, !(I = I.length > 0 && I[I.length - 1]) && (C[0] === 6 || C[0] === 2)) {
                b = 0;
                continue;
              }
              if (C[0] === 3 && (!I || C[1] > I[0] && C[1] < I[3])) {
                b.label = C[1];
                break;
              }
              if (C[0] === 6 && b.label < I[1]) {
                b.label = I[1], I = C;
                break;
              }
              if (I && b.label < I[2]) {
                b.label = I[2], b.ops.push(C);
                break;
              }
              I[2] && b.ops.pop(), b.trys.pop();
              continue;
          }
          C = w.call(p, b);
        } catch (x) {
          C = [6, x], R = 0;
        } finally {
          S = I = 0;
        }
      if (C[0] & 5) throw C[1];
      return { value: C[0] ? C[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(se, "__esModule", { value: !0 }), se.responseErrorInterceptor = se.responseInterceptor = se.interceptorFunctionRequestFulfilled = void 0;
  var n = wo(), l = St(), g = Kt(), d = je(), m = wt();
  function f(p) {
    p.__supertokensSessionRefreshAttempts === void 0 && (p.__supertokensSessionRefreshAttempts = 0), p.__supertokensSessionRefreshAttempts++;
  }
  function s(p) {
    return p.__supertokensSessionRefreshAttempts === void 0 && (p.__supertokensSessionRefreshAttempts = 0), p.__supertokensSessionRefreshAttempts >= l.default.config.maxRetryAttemptsForSessionRefresh;
  }
  function a(p) {
    var w = p.url === void 0 ? "" : p.url, b = p.baseURL;
    return b !== void 0 && (w.charAt(0) === "/" && b.charAt(b.length - 1) === "/" ? w = b + w.substr(1) : w.charAt(0) !== "/" && b.charAt(b.length - 1) !== "/" ? w = b + "/" + w : w = b + w), w;
  }
  function c(p) {
    return o(this, void 0, void 0, function() {
      var w, b, S, R, I, T;
      return t(this, function(_) {
        switch (_.label) {
          case 0:
            (0, m.logDebugMessage)("interceptorFunctionRequestFulfilled: started axios interception"), w = a(p), b = !1;
            try {
              b = typeof w == "string" && !l.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                w,
                l.default.config.apiDomain,
                l.default.config.sessionTokenBackendDomain
              );
            } catch (P) {
              if (P.message === "Please provide a valid domain name")
                (0, m.logDebugMessage)(
                  "interceptorFunctionRequestFulfilled: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                ), b = !l.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                  d.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                  l.default.config.apiDomain,
                  l.default.config.sessionTokenBackendDomain
                );
              else
                throw P;
            }
            return (0, m.logDebugMessage)("interceptorFunctionRequestFulfilled: Value of doNotDoInterception: " + b), b ? ((0, m.logDebugMessage)(
              "interceptorFunctionRequestFulfilled: Returning config unchanged"
            ), [2, p]) : ((0, m.logDebugMessage)("interceptorFunctionRequestFulfilled: Modifying config"), g.ProcessState.getInstance().addState(
              g.PROCESS_STATE.CALLING_INTERCEPTION_REQUEST
            ), [4, (0, l.getLocalSessionState)(!0)]);
          case 1:
            return S = _.sent(), R = p, S.status !== "EXISTS" ? [3, 3] : [4, l.AntiCsrfToken.getToken(S.lastAccessTokenUpdate)];
          case 2:
            I = _.sent(), I !== void 0 && ((0, m.logDebugMessage)(
              "interceptorFunctionRequestFulfilled: Adding anti-csrf token to request"
            ), R = e(e({}, R), {
              headers: R === void 0 ? {
                "anti-csrf": I
              } : e(e({}, R.headers), { "anti-csrf": I })
            })), _.label = 3;
          case 3:
            return l.default.config.autoAddCredentials && R.withCredentials === void 0 && ((0, m.logDebugMessage)(
              "interceptorFunctionRequestFulfilled: Adding credentials include"
            ), R = e(e({}, R), { withCredentials: !0 })), (0, m.logDebugMessage)("interceptorFunctionRequestFulfilled: Adding rid header: anti-csrf (it may be overriden by the user's provided rid)"), R = e(e({}, R), {
              headers: R === void 0 ? {
                rid: "anti-csrf"
              } : e({ rid: "anti-csrf" }, R.headers)
            }), T = l.default.config.tokenTransferMethod, (0, m.logDebugMessage)("interceptorFunctionRequestFulfilled: Adding st-auth-mode header: " + T), R.headers["st-auth-mode"] = T, [4, h(R)];
          case 4:
            return R = _.sent(), [4, v(R)];
          case 5:
            return _.sent(), (0, m.logDebugMessage)("interceptorFunctionRequestFulfilled: returning modified config"), [2, R];
        }
      });
    });
  }
  se.interceptorFunctionRequestFulfilled = c;
  function i(p) {
    var w = this;
    return function(b) {
      return o(w, void 0, void 0, function() {
        var S, R, I, T;
        return t(this, function(_) {
          switch (_.label) {
            case 0:
              if (S = !1, !l.default.initCalled)
                throw new Error("init function not called");
              (0, m.logDebugMessage)("responseInterceptor: started"), (0, m.logDebugMessage)("responseInterceptor: already intercepted: " + b.headers["x-supertokens-xhr-intercepted"]), R = a(b.config);
              try {
                S = typeof R == "string" && !l.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                  R,
                  l.default.config.apiDomain,
                  l.default.config.sessionTokenBackendDomain
                ) || !!b.headers["x-supertokens-xhr-intercepted"];
              } catch (P) {
                if (P.message === "Please provide a valid domain name")
                  (0, m.logDebugMessage)(
                    "responseInterceptor: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                  ), S = !l.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                    d.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                    l.default.config.apiDomain,
                    l.default.config.sessionTokenBackendDomain
                  ) || !!b.headers["x-supertokens-xhr-intercepted"];
                else
                  throw P;
              }
              return (0, m.logDebugMessage)("responseInterceptor: Value of doNotDoInterception: " + S), S ? ((0, m.logDebugMessage)("responseInterceptor: Returning without interception"), [2, b]) : ((0, m.logDebugMessage)("responseInterceptor: Interception started"), g.ProcessState.getInstance().addState(
                g.PROCESS_STATE.CALLING_INTERCEPTION_RESPONSE
              ), [4, (0, l.getLocalSessionState)(!1)]);
            case 1:
              return I = _.sent(), [4, y(b)];
            case 2:
              return _.sent(), (0, l.fireSessionUpdateEventsIfNecessary)(I.status === "EXISTS", b.status, b.headers["front-token"]), b.status !== l.default.config.sessionExpiredStatusCode ? [3, 3] : ((0, m.logDebugMessage)("responseInterceptor: Status code is: " + b.status), T = b.config, [
                2,
                u.doRequest(
                  function(P) {
                    return p(P);
                  },
                  T,
                  R,
                  b,
                  void 0,
                  !0
                )
              ]);
            case 3:
              return b.status !== l.default.config.invalidClaimStatusCode ? [3, 5] : [4, (0, l.onInvalidClaimResponse)(b)];
            case 4:
              _.sent(), _.label = 5;
            case 5:
              return [2, b];
          }
        });
      });
    };
  }
  se.responseInterceptor = i;
  function r(p) {
    var w = this;
    return function(b) {
      return o(w, void 0, void 0, function() {
        var S;
        return t(this, function(R) {
          switch (R.label) {
            case 0:
              if ((0, m.logDebugMessage)("responseErrorInterceptor: called"), (0, m.logDebugMessage)("responseErrorInterceptor: already intercepted: " + (b.response && b.response.headers["x-supertokens-xhr-intercepted"])), b.response === void 0 || b.response.headers["x-supertokens-xhr-intercepted"])
                throw b;
              return b.response !== void 0 && b.response.status === l.default.config.sessionExpiredStatusCode ? ((0, m.logDebugMessage)("responseErrorInterceptor: Status code is: " + b.response.status), S = b.config, [
                2,
                u.doRequest(
                  function(I) {
                    return p(I);
                  },
                  S,
                  a(S),
                  void 0,
                  b,
                  !0
                )
              ]) : [3, 1];
            case 1:
              return b.response !== void 0 && b.response.status === l.default.config.invalidClaimStatusCode ? [4, (0, l.onInvalidClaimResponse)(b.response)] : [3, 3];
            case 2:
              R.sent(), R.label = 3;
            case 3:
              throw b;
          }
        });
      });
    };
  }
  se.responseErrorInterceptor = r;
  var u = (
    /** @class */
    function() {
      function p() {
      }
      var w;
      return w = p, p.doRequest = function(b, S, R, I, T, _) {
        return _ === void 0 && (_ = !1), o(void 0, void 0, void 0, function() {
          var P, C, x, E, B, K, ne, re, q, H, L, q, F, V, X;
          return t(w, function(k) {
            switch (k.label) {
              case 0:
                if (!l.default.initCalled)
                  throw Error("init function not called");
                (0, m.logDebugMessage)("doRequest: called"), P = !1;
                try {
                  P = typeof R == "string" && !l.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                    R,
                    l.default.config.apiDomain,
                    l.default.config.sessionTokenBackendDomain
                  ) && _;
                } catch (O) {
                  if (O.message === "Please provide a valid domain name")
                    (0, m.logDebugMessage)(
                      "doRequest: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                    ), P = !l.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                      d.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                      l.default.config.apiDomain,
                      l.default.config.sessionTokenBackendDomain
                    ) && _;
                  else
                    throw O;
                }
                if ((0, m.logDebugMessage)("doRequest: Value of doNotDoInterception: " + P), !P) return [3, 2];
                if ((0, m.logDebugMessage)("doRequest: Returning without interception"), T !== void 0)
                  throw T;
                return I !== void 0 ? [2, I] : [4, b(S)];
              case 1:
                return [2, k.sent()];
              case 2:
                return (0, m.logDebugMessage)("doRequest: Interception started"), [4, h(S)];
              case 3:
                S = k.sent(), C = void 0, k.label = 4;
              case 4:
                return [4, (0, l.getLocalSessionState)(!0)];
              case 5:
                return x = k.sent(), E = S, x.status !== "EXISTS" ? [3, 7] : [4, l.AntiCsrfToken.getToken(x.lastAccessTokenUpdate)];
              case 6:
                B = k.sent(), B !== void 0 && ((0, m.logDebugMessage)("doRequest: Adding anti-csrf token to request"), E = e(e({}, E), {
                  headers: E === void 0 ? {
                    "anti-csrf": B
                  } : e(e({}, E.headers), {
                    "anti-csrf": B
                  })
                })), k.label = 7;
              case 7:
                return l.default.config.autoAddCredentials && E.withCredentials === void 0 && ((0, m.logDebugMessage)("doRequest: Adding credentials include"), E = e(e({}, E), { withCredentials: !0 })), (0, m.logDebugMessage)("doRequest: Adding rid header: anti-csrf (May get overriden by user's rid)"), E = e(e({}, E), {
                  headers: E === void 0 ? {
                    rid: "anti-csrf"
                  } : e({ rid: "anti-csrf" }, E.headers)
                }), K = l.default.config.tokenTransferMethod, (0, m.logDebugMessage)("doRequest: Adding st-auth-mode header: " + K), E.headers["st-auth-mode"] = K, [4, v(E)];
              case 8:
                k.sent(), k.label = 9;
              case 9:
                if (k.trys.push([9, 14, , 27]), ne = T, re = I, T = void 0, I = void 0, ne !== void 0)
                  throw (0, m.logDebugMessage)(
                    "doRequest: Not making call because localPrevError is not undefined"
                  ), ne;
                return re !== void 0 ? (0, m.logDebugMessage)(
                  "doRequest: Not making call because localPrevResponse is not undefined"
                ) : (0, m.logDebugMessage)("doRequest: Making user's http call"), re !== void 0 ? [3, 11] : [4, b(E)];
              case 10:
                return H = k.sent(), [3, 12];
              case 11:
                H = re, k.label = 12;
              case 12:
                return q = H, (0, m.logDebugMessage)("doRequest: User's http call ended"), [4, y(q)];
              case 13:
                return k.sent(), (0, l.fireSessionUpdateEventsIfNecessary)(x.status === "EXISTS", q.status, q.headers["front-token"]), [2, q];
              case 14:
                return L = k.sent(), q = L.response, q === void 0 ? [3, 25] : [4, y(q)];
              case 15:
                if (k.sent(), (0, l.fireSessionUpdateEventsIfNecessary)(x.status === "EXISTS", q.status, q.headers["front-token"]), q.status !== l.default.config.sessionExpiredStatusCode)
                  return [3, 21];
                if ((0, m.logDebugMessage)("doRequest: Status code is: " + q.status), s(S))
                  throw (0, m.logDebugMessage)(
                    "doRequest: Maximum session refresh attempts reached. sessionRefreshAttempts: ".concat(
                      S.__supertokensSessionRefreshAttempts,
                      ", maxRetryAttemptsForSessionRefresh: "
                    ).concat(l.default.config.maxRetryAttemptsForSessionRefresh)
                  ), F = "Received a 401 response from ".concat(
                    R,
                    ". Attempted to refresh the session and retry the request with the updated session tokens "
                  ).concat(
                    l.default.config.maxRetryAttemptsForSessionRefresh,
                    " times, but each attempt resulted in a 401 error. The maximum session refresh limit has been reached. Please investigate your API. To increase the session refresh attempts, update maxRetryAttemptsForSessionRefresh in the config."
                  ), console.error(F), new Error(F);
                return [4, (0, l.onUnauthorisedResponse)(x)];
              case 16:
                return V = k.sent(), f(S), (0, m.logDebugMessage)("doRequest: sessionRefreshAttempts: " + S.__supertokensSessionRefreshAttempts), V.result === "RETRY" ? [3, 20] : ((0, m.logDebugMessage)("doRequest: Not retrying original request"), V.error === void 0 ? [3, 18] : [4, (0, n.createAxiosErrorFromFetchResp)(V.error)]);
              case 17:
                return X = k.sent(), [3, 19];
              case 18:
                X = L, k.label = 19;
              case 19:
                return C = X, [3, 28];
              case 20:
                return (0, m.logDebugMessage)("doRequest: Retrying original request"), [3, 24];
              case 21:
                return q.status !== l.default.config.invalidClaimStatusCode ? [3, 23] : [4, (0, l.onInvalidClaimResponse)(q)];
              case 22:
                k.sent(), k.label = 23;
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
      }, p;
    }()
  );
  se.default = u;
  function v(p) {
    return o(this, void 0, void 0, function() {
      var w, b;
      return t(this, function(S) {
        switch (S.label) {
          case 0:
            return p.headers === void 0 && (p.headers = {}), (0, m.logDebugMessage)("setAuthorizationHeaderIfRequired: adding existing tokens as header"), [4, (0, l.getTokenForHeaderAuth)("access")];
          case 1:
            return w = S.sent(), [4, (0, l.getTokenForHeaderAuth)("refresh")];
          case 2:
            return b = S.sent(), w !== void 0 && b !== void 0 ? p.headers.Authorization !== void 0 || p.headers.authorization !== void 0 ? (0, m.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: Authorization header defined by the user, not adding"
            ) : ((0, m.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: added authorization header"
            ), p.headers = e(e({}, p.headers), {
              Authorization: "Bearer ".concat(w)
            }), p.__supertokensAddedAuthHeader = !0) : (0, m.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: token for header based auth not found"
            ), [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function y(p) {
    return o(this, void 0, void 0, function() {
      var w, b, S, R, I, T;
      return t(this, function(_) {
        switch (_.label) {
          case 0:
            return (0, m.logDebugMessage)("saveTokensFromHeaders: Saving updated tokens from the response"), w = p.headers["st-refresh-token"], w === void 0 ? [3, 2] : ((0, m.logDebugMessage)("saveTokensFromHeaders: saving new refresh token"), [4, (0, l.setToken)("refresh", w)]);
          case 1:
            _.sent(), _.label = 2;
          case 2:
            return b = p.headers["st-access-token"], b === void 0 ? [3, 4] : ((0, m.logDebugMessage)("saveTokensFromHeaders: saving new access token"), [4, (0, l.setToken)("access", b)]);
          case 3:
            _.sent(), _.label = 4;
          case 4:
            return S = p.headers["front-token"], S === void 0 ? [3, 6] : ((0, m.logDebugMessage)("doRequest: Setting sFrontToken: " + S), [4, l.FrontToken.setItem(S)]);
          case 5:
            _.sent(), R = new Headers(), Object.entries(p.headers).forEach(function(P) {
              var C = P[0], x = P[1];
              Array.isArray(x) ? x.forEach(function(E) {
                return R.append(C, E);
              }) : R.append(C, x);
            }), (0, l.updateClockSkewUsingFrontToken)({ frontToken: S, responseHeaders: R }), _.label = 6;
          case 6:
            return I = p.headers["anti-csrf"], I === void 0 ? [3, 9] : [4, (0, l.getLocalSessionState)(!1)];
          case 7:
            return T = _.sent(), T.status !== "EXISTS" ? [3, 9] : ((0, m.logDebugMessage)("doRequest: Setting anti-csrf token"), [4, l.AntiCsrfToken.setItem(T.lastAccessTokenUpdate, I)]);
          case 8:
            _.sent(), _.label = 9;
          case 9:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function h(p) {
    return o(this, void 0, void 0, function() {
      var w, b, S, R;
      return t(this, function(I) {
        switch (I.label) {
          case 0:
            return [4, (0, l.getTokenForHeaderAuth)("access")];
          case 1:
            return w = I.sent(), [4, (0, l.getTokenForHeaderAuth)("refresh")];
          case 2:
            return b = I.sent(), S = p.headers.Authorization || p.headers.authorization, w !== void 0 && b !== void 0 && (S === "Bearer ".concat(w) || "__supertokensAddedAuthHeader" in p) ? ((0, m.logDebugMessage)(
              "removeAuthHeaderIfMatchesLocalToken: Removing Authorization from user provided headers because it contains our access token"
            ), R = e(e({}, p), { headers: e({}, p.headers) }), delete R.headers.authorization, delete R.headers.Authorization, [2, R]) : [2, p];
        }
      });
    });
  }
  return se;
}
var xe = {}, Bn;
function So() {
  if (Bn) return xe;
  Bn = 1;
  var e = xe && xe.__awaiter || function(i, r, u, v) {
    function y(h) {
      return h instanceof u ? h : new u(function(p) {
        p(h);
      });
    }
    return new (u || (u = Promise))(function(h, p) {
      function w(R) {
        try {
          S(v.next(R));
        } catch (I) {
          p(I);
        }
      }
      function b(R) {
        try {
          S(v.throw(R));
        } catch (I) {
          p(I);
        }
      }
      function S(R) {
        R.done ? h(R.value) : y(R.value).then(w, b);
      }
      S((v = v.apply(i, r || [])).next());
    });
  }, o = xe && xe.__generator || function(i, r) {
    var u = {
      label: 0,
      sent: function() {
        if (h[0] & 1) throw h[1];
        return h[1];
      },
      trys: [],
      ops: []
    }, v, y, h, p;
    return p = { next: w(0), throw: w(1), return: w(2) }, typeof Symbol == "function" && (p[Symbol.iterator] = function() {
      return this;
    }), p;
    function w(S) {
      return function(R) {
        return b([S, R]);
      };
    }
    function b(S) {
      if (v) throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (v = 1, y && (h = S[0] & 2 ? y.return : S[0] ? y.throw || ((h = y.return) && h.call(y), 0) : y.next) && !(h = h.call(y, S[1])).done)
            return h;
          switch (y = 0, h && (S = [S[0] & 2, h.value]), S[0]) {
            case 0:
            case 1:
              h = S;
              break;
            case 4:
              return u.label++, { value: S[1], done: !1 };
            case 5:
              u.label++, y = S[1], S = [0];
              continue;
            case 7:
              S = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (h = u.trys, !(h = h.length > 0 && h[h.length - 1]) && (S[0] === 6 || S[0] === 2)) {
                u = 0;
                continue;
              }
              if (S[0] === 3 && (!h || S[1] > h[0] && S[1] < h[3])) {
                u.label = S[1];
                break;
              }
              if (S[0] === 6 && u.label < h[1]) {
                u.label = h[1], h = S;
                break;
              }
              if (h && u.label < h[2]) {
                u.label = h[2], u.ops.push(S);
                break;
              }
              h[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          S = r.call(i, u);
        } catch (R) {
          S = [6, R], y = 0;
        } finally {
          v = h = 0;
        }
      if (S[0] & 5) throw S[1];
      return { value: S[0] ? S[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(xe, "__esModule", { value: !0 }), xe.addInterceptorsToXMLHttpRequest = void 0;
  var t = St(), n = wt(), l = je(), g = Kt(), d = ["readystatechange", "abort", "error", "load", "loadend", "loadstart", "progress", "timeout"];
  function m() {
    var i = new Promise(function(u) {
      return setTimeout(u, 0);
    }), r = XMLHttpRequest;
    (0, n.logDebugMessage)("addInterceptorsToXMLHttpRequest called"), XMLHttpRequest = function() {
      var u = new r(), v = this, y = [], h = [], p = {}, w, b = /* @__PURE__ */ new Map(), S = i;
      function R(H) {
        S = S.finally(function() {
          var L;
          return (L = H()) === null || L === void 0 ? void 0 : L.catch(function(q) {
            var F = new ProgressEvent("error");
            F.error = q, v.onerror !== void 0 && v.onerror !== null && v.onerror(F), x("error", F);
          });
        });
      }
      var I = "", T = !1, _ = void 0, P, C = 0;
      v.onload = null, v.onreadystatechange = null, v.onloadend = null, v.addEventListener = function(H, L, q) {
        var F = b.get(H);
        F === void 0 && (F = /* @__PURE__ */ new Set(), b.set(H, F)), F.add(L);
      }, v.removeEventListener = function(H, L) {
        var q = b.get(H);
        q === void 0 && (q = /* @__PURE__ */ new Set(), b.set(H, q)), q.delete(L);
      };
      function x(H, L) {
        var q = b.get(H);
        (0, n.logDebugMessage)(
          "XHRInterceptor dispatching ".concat(L.type, " to ").concat(q ? q.size : 0, " listeners")
        ), q && Array.from(q).forEach(function(F) {
          return F.apply(v, [L]);
        });
      }
      function E() {
        return e(this, void 0, void 0, function() {
          var H, L, q;
          return o(this, function(F) {
            switch (F.label) {
              case 0:
                if (_ === void 0)
                  throw new Error("Should never come here..");
                if ((0, n.logDebugMessage)("XHRInterceptor.handleRetryPostRefreshing: preRequestLSS " + _.status), C >= t.default.config.maxRetryAttemptsForSessionRefresh)
                  throw (0, n.logDebugMessage)(
                    "XHRInterceptor.handleRetryPostRefreshing: Maximum session refresh attempts reached. sessionRefreshAttempts: ".concat(C, ", maxRetryAttemptsForSessionRefresh: ").concat(t.default.config.maxRetryAttemptsForSessionRefresh)
                  ), p.status = 0, p.statusText = "", p.responseType = "", H = "Received a 401 response from ".concat(
                    I,
                    ". Attempted to refresh the session and retry the request with the updated session tokens "
                  ).concat(
                    t.default.config.maxRetryAttemptsForSessionRefresh,
                    " times, but each attempt resulted in a 401 error. The maximum session refresh limit has been reached. Please investigate your API. To increase the session refresh attempts, update maxRetryAttemptsForSessionRefresh in the config."
                  ), console.error(H), new Error(H);
                return [4, (0, t.onUnauthorisedResponse)(_)];
              case 1:
                if (L = F.sent(), C++, (0, n.logDebugMessage)("XHRInterceptor.handleRetryPostRefreshing: sessionRefreshAttempts: " + C), L.result !== "RETRY") {
                  if ((0, n.logDebugMessage)(
                    "XHRInterceptor.handleRetryPostRefreshing: Not retrying original request " + !!L.error
                  ), L.error !== void 0)
                    throw L.error;
                  return [2, !0];
                }
                return (0, n.logDebugMessage)("XHRInterceptor.handleRetryPostRefreshing: Retrying original request"), q = new r(), ne(v, q, !0), y.forEach(function(V) {
                  V(q);
                }), re(q, P), [2, !1];
            }
          });
        });
      }
      function B(H) {
        return e(this, void 0, void 0, function() {
          var L, q, F, V, X;
          return o(this, function(k) {
            switch (k.label) {
              case 0:
                if (T)
                  return (0, n.logDebugMessage)(
                    "XHRInterceptor.handleResponse: Returning without interception"
                  ), [2, !0];
                k.label = 1;
              case 1:
                return k.trys.push([1, 7, , 11]), (0, n.logDebugMessage)("XHRInterceptor.handleResponse: Interception started"), g.ProcessState.getInstance().addState(
                  g.PROCESS_STATE.CALLING_INTERCEPTION_RESPONSE
                ), L = H.status, q = c(H), [4, a(q)];
              case 2:
                return k.sent(), (0, t.fireSessionUpdateEventsIfNecessary)(_.status === "EXISTS", L, q.get("front-token")), L !== t.default.config.sessionExpiredStatusCode ? [3, 4] : ((0, n.logDebugMessage)("responseInterceptor: Status code is: " + L), [4, E()]);
              case 3:
                return [2, k.sent()];
              case 4:
                return L !== t.default.config.invalidClaimStatusCode ? [3, 6] : [4, (0, t.onInvalidClaimResponse)({ data: H.responseText })];
              case 5:
                k.sent(), k.label = 6;
              case 6:
                return [2, !0];
              case 7:
                return F = k.sent(), (0, n.logDebugMessage)("XHRInterceptor.handleResponse: caught error"), F.status === void 0 ? [3, 9] : [4, f(F)];
              case 8:
                if (V = k.sent(), p.status = V.status, p.statusText = V.statusText, p.responseType = V.responseType, w = V.headers, V.responseType === "json")
                  try {
                    p.response = JSON.parse(V.responseText);
                  } catch {
                    p.response = V.responseText;
                  }
                else
                  p.response = V.responseText;
                return p.responseText = V.responseText, [3, 10];
              case 9:
                X = new ProgressEvent("error"), X.error = F, v.onerror !== void 0 && v.onerror !== null && v.onerror(X), x("error", X), k.label = 10;
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
      v.open = function(H, L) {
        (0, n.logDebugMessage)("XHRInterceptor.open called");
        var q = arguments;
        I = L;
        try {
          T = typeof I == "string" && !t.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
            I,
            t.default.config.apiDomain,
            t.default.config.sessionTokenBackendDomain
          ) || typeof I != "string" && !t.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
            I.toString(),
            t.default.config.apiDomain,
            t.default.config.sessionTokenBackendDomain
          );
        } catch (F) {
          if (F.message === "Please provide a valid domain name")
            (0, n.logDebugMessage)(
              "XHRInterceptor.open: Trying shouldDoInterceptionBasedOnUrl with location.origin"
            ), T = !t.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
              l.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
              t.default.config.apiDomain,
              t.default.config.sessionTokenBackendDomain
            );
          else
            throw F;
        }
        R(function() {
          y.push(function(F) {
            F.open.apply(F, q);
          }), u.open.apply(u, q);
        });
      }, v.send = function(H) {
        P = H, re(u, P);
      }, v.setRequestHeader = function(H, L) {
        var q = this;
        if ((0, n.logDebugMessage)("XHRInterceptor.setRequestHeader: Called with ".concat(H)), T) {
          R(function() {
            return u.setRequestHeader(H, L);
          });
          return;
        }
        H !== "anti-csrf" && R(function() {
          return e(q, void 0, void 0, function() {
            var F, V;
            return o(this, function(X) {
              switch (X.label) {
                case 0:
                  return H.toLowerCase() !== "authorization" ? [3, 3] : ((0, n.logDebugMessage)("XHRInterceptor.setRequestHeader: checking if user provided auth header matches local token"), [4, (0, t.getTokenForHeaderAuth)("access")]);
                case 1:
                  return F = X.sent(), [4, (0, t.getTokenForHeaderAuth)("refresh")];
                case 2:
                  if (V = X.sent(), F !== void 0 && V !== void 0 && L === "Bearer ".concat(F))
                    return (0, n.logDebugMessage)(
                      "XHRInterceptor.setRequestHeader: skipping Authorization from user provided headers because it contains our access token"
                    ), [
                      2
                      /*return*/
                    ];
                  X.label = 3;
                case 3:
                  return y.push(function(k) {
                    k.setRequestHeader(H, L);
                  }), h.push({ name: H, value: L }), u.setRequestHeader(H, L), [
                    2
                    /*return*/
                  ];
              }
            });
          });
        });
      };
      var K = void 0;
      ne(v, u, !1);
      function ne(H, L, q) {
        var F, V = ["load", "loadend", "readystatechange"];
        (0, n.logDebugMessage)("XHRInterceptor.setUpXHR called");
        for (var X = function(U) {
          (0, n.logDebugMessage)("XHRInterceptor added listener for event ".concat(U)), L.addEventListener(U, function(W) {
            (0, n.logDebugMessage)("XHRInterceptor got event ".concat(U)), V.includes(U) || x(U, W);
          });
        }, k = 0, O = d; k < O.length; k++) {
          var A = O[k];
          X(A);
        }
        if (L.onload = function(U) {
          F === void 0 && (F = B(L)), F.then(function(W) {
            W && (H.onload && H.onload(U), x("load", U));
          });
        }, L.onreadystatechange = function(U) {
          L.readyState === r.DONE ? (F === void 0 && (F = B(L)), F.then(function(W) {
            W && (H.onreadystatechange && H.onreadystatechange(U), x("readystatechange", U));
          })) : (H.onreadystatechange && H.onreadystatechange(U), x("readystatechange", U));
        }, L.onloadend = function(U) {
          F === void 0 && (F = B(L)), F.then(function(W) {
            W && (H.onloadend && H.onloadend(U), x("loadend", U));
          });
        }, H.getAllResponseHeaders = function() {
          var U;
          return w ? (U = "", w.forEach(function(W, j) {
            return U += "".concat(j, ": ").concat(W, `\r
`);
          })) : U = L.getAllResponseHeaders(), U + `x-supertokens-xhr-intercepted: true\r
`;
        }, H.getResponseHeader = function(U) {
          return U === "x-supertokens-xhr-intercepted" ? "true" : w ? w.get(U) : L.getResponseHeader(U);
        }, K === void 0) {
          K = [];
          for (var D in L)
            D in H || K.push(D);
        }
        for (var M = function(U) {
          typeof L[U] == "function" ? Object.defineProperty(H, U, {
            configurable: !0,
            value: function() {
              var W = arguments;
              return q || y.push(function(j) {
                j[U].apply(j, W);
              }), L[U].apply(L, W);
            }
          }) : Object.defineProperty(H, U, {
            configurable: !0,
            get: function() {
              return p[U] !== void 0 ? p[U] : L[U];
            },
            set: function(W) {
              q || y.push(function(j) {
                j[U] = W;
              }), (0, n.logDebugMessage)("XHRInterceptor.set[".concat(U, "] = ").concat(W)), L[U] = W;
            }
          });
        }, N = 0, $ = K; N < $.length; N++) {
          var D = $[N];
          M(D);
        }
      }
      function re(H, L) {
        var q = this;
        if ((0, n.logDebugMessage)("XHRInterceptor.send: called"), (0, n.logDebugMessage)("XHRInterceptor.send: Value of doNotDoInterception: " + T), T) {
          (0, n.logDebugMessage)("XHRInterceptor.send: Returning without interception"), R(function() {
            return H.send(L);
          });
          return;
        }
        (0, n.logDebugMessage)("XHRInterceptor.send: Interception started"), g.ProcessState.getInstance().addState(
          g.PROCESS_STATE.CALLING_INTERCEPTION_REQUEST
        ), R(function() {
          return e(q, void 0, void 0, function() {
            var F, V;
            return o(this, function(X) {
              switch (X.label) {
                case 0:
                  return [4, (0, t.getLocalSessionState)(!0)];
                case 1:
                  return _ = X.sent(), _.status !== "EXISTS" ? [3, 3] : [
                    4,
                    t.AntiCsrfToken.getToken(_.lastAccessTokenUpdate)
                  ];
                case 2:
                  F = X.sent(), F !== void 0 && ((0, n.logDebugMessage)(
                    "XHRInterceptor.send: Adding anti-csrf token to request"
                  ), H.setRequestHeader("anti-csrf", F)), X.label = 3;
                case 3:
                  return t.default.config.autoAddCredentials && ((0, n.logDebugMessage)("XHRInterceptor.send: Adding credentials include"), v.withCredentials = !0), h.some(function(k) {
                    return k.name === "rid";
                  }) ? (0, n.logDebugMessage)(
                    "XHRInterceptor.send: rid header was already there in request"
                  ) : ((0, n.logDebugMessage)("XHRInterceptor.send: Adding rid header: anti-csrf"), H.setRequestHeader("rid", "anti-csrf")), V = t.default.config.tokenTransferMethod, h.some(function(k) {
                    return k.name === "st-auth-mode";
                  }) ? (0, n.logDebugMessage)(
                    "XHRInterceptor.send: st-auth-mode header was already there in request"
                  ) : ((0, n.logDebugMessage)(
                    "XHRInterceptor.send: Adding st-auth-mode header: " + V
                  ), H.setRequestHeader("st-auth-mode", V)), [4, s(H, h)];
                case 4:
                  return X.sent(), (0, n.logDebugMessage)("XHRInterceptor.send: Making user's http call"), [2, H.send(L)];
              }
            });
          });
        });
      }
    }, XMLHttpRequest.__interceptedBySuperTokens = !0, XMLHttpRequest.__original = r;
  }
  xe.addInterceptorsToXMLHttpRequest = m;
  function f(i) {
    return e(this, void 0, void 0, function() {
      var r, u, v, y, h;
      return o(this, function(p) {
        switch (p.label) {
          case 0:
            if (r = i.headers.get("content-type"), u = "", v = "text", r !== null) return [3, 5];
            p.label = 1;
          case 1:
            return p.trys.push([1, 3, , 4]), [4, i.text()];
          case 2:
            return u = p.sent(), [3, 4];
          case 3:
            return p.sent(), u = "", [3, 4];
          case 4:
            return [3, 9];
          case 5:
            return r.includes("application/json") ? (v = "json", h = (y = JSON).stringify, [4, i.json()]) : [3, 7];
          case 6:
            return u = h.apply(y, [p.sent()]), [3, 9];
          case 7:
            return r.includes("text/") ? [4, i.text()] : [3, 9];
          case 8:
            u = p.sent(), p.label = 9;
          case 9:
            return [
              2,
              {
                status: i.status,
                responseText: u,
                statusText: i.statusText,
                responseType: v,
                headers: i.headers
              }
            ];
        }
      });
    });
  }
  function s(i, r) {
    return e(this, void 0, void 0, function() {
      var u, v;
      return o(this, function(y) {
        switch (y.label) {
          case 0:
            return (0, n.logDebugMessage)("setAuthorizationHeaderIfRequired: adding existing tokens as header"), [4, (0, t.getTokenForHeaderAuth)("access")];
          case 1:
            return u = y.sent(), [4, (0, t.getTokenForHeaderAuth)("refresh")];
          case 2:
            return v = y.sent(), u !== void 0 && v !== void 0 ? r.some(function(h) {
              var p = h.name;
              return p.toLowerCase() === "authorization";
            }) ? (0, n.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: Authorization header defined by the user, not adding"
            ) : u !== void 0 && ((0, n.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: added authorization header"
            ), i.setRequestHeader("Authorization", "Bearer ".concat(u))) : (0, n.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: token for header based auth not found"
            ), [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function a(i) {
    return e(this, void 0, void 0, function() {
      var r, u, v, y, h;
      return o(this, function(p) {
        switch (p.label) {
          case 0:
            return (0, n.logDebugMessage)("saveTokensFromHeaders: Saving updated tokens from the response"), r = i.get("st-refresh-token"), r === null ? [3, 2] : ((0, n.logDebugMessage)("saveTokensFromHeaders: saving new refresh token"), [4, (0, t.setToken)("refresh", r)]);
          case 1:
            p.sent(), p.label = 2;
          case 2:
            return u = i.get("st-access-token"), u === null ? [3, 4] : ((0, n.logDebugMessage)("saveTokensFromHeaders: saving new access token"), [4, (0, t.setToken)("access", u)]);
          case 3:
            p.sent(), p.label = 4;
          case 4:
            return v = i.get("front-token"), v === null ? [3, 6] : ((0, n.logDebugMessage)("saveTokensFromHeaders: Setting sFrontToken: " + v), [4, t.FrontToken.setItem(v)]);
          case 5:
            p.sent(), (0, t.updateClockSkewUsingFrontToken)({ frontToken: v, responseHeaders: i }), p.label = 6;
          case 6:
            return y = i.get("anti-csrf"), y === null ? [3, 9] : [4, (0, t.getLocalSessionState)(!1)];
          case 7:
            return h = p.sent(), h.status !== "EXISTS" ? [3, 9] : ((0, n.logDebugMessage)("saveTokensFromHeaders: Setting anti-csrf token"), [4, t.AntiCsrfToken.setItem(h.lastAccessTokenUpdate, y)]);
          case 8:
            p.sent(), p.label = 9;
          case 9:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function c(i) {
    return new Headers(
      i.getAllResponseHeaders().split(`\r
`).map(function(r) {
        var u = r.indexOf(": ");
        return u === -1 ? ["", ""] : [r.slice(0, u), r.slice(u + 2)];
      }).filter(function(r) {
        return r[0].length !== 0;
      })
    );
  }
  return xe;
}
var Gn;
function Ro() {
  if (Gn) return Se;
  Gn = 1;
  var e = Se && Se.__assign || function() {
    return e = Object.assign || function(v) {
      for (var y, h = 1, p = arguments.length; h < p; h++) {
        y = arguments[h];
        for (var w in y) Object.prototype.hasOwnProperty.call(y, w) && (v[w] = y[w]);
      }
      return v;
    }, e.apply(this, arguments);
  }, o = Se && Se.__awaiter || function(v, y, h, p) {
    function w(b) {
      return b instanceof h ? b : new h(function(S) {
        S(b);
      });
    }
    return new (h || (h = Promise))(function(b, S) {
      function R(_) {
        try {
          T(p.next(_));
        } catch (P) {
          S(P);
        }
      }
      function I(_) {
        try {
          T(p.throw(_));
        } catch (P) {
          S(P);
        }
      }
      function T(_) {
        _.done ? b(_.value) : w(_.value).then(R, I);
      }
      T((p = p.apply(v, y || [])).next());
    });
  }, t = Se && Se.__generator || function(v, y) {
    var h = {
      label: 0,
      sent: function() {
        if (b[0] & 1) throw b[1];
        return b[1];
      },
      trys: [],
      ops: []
    }, p, w, b, S;
    return S = { next: R(0), throw: R(1), return: R(2) }, typeof Symbol == "function" && (S[Symbol.iterator] = function() {
      return this;
    }), S;
    function R(T) {
      return function(_) {
        return I([T, _]);
      };
    }
    function I(T) {
      if (p) throw new TypeError("Generator is already executing.");
      for (; h; )
        try {
          if (p = 1, w && (b = T[0] & 2 ? w.return : T[0] ? w.throw || ((b = w.return) && b.call(w), 0) : w.next) && !(b = b.call(w, T[1])).done)
            return b;
          switch (w = 0, b && (T = [T[0] & 2, b.value]), T[0]) {
            case 0:
            case 1:
              b = T;
              break;
            case 4:
              return h.label++, { value: T[1], done: !1 };
            case 5:
              h.label++, w = T[1], T = [0];
              continue;
            case 7:
              T = h.ops.pop(), h.trys.pop();
              continue;
            default:
              if (b = h.trys, !(b = b.length > 0 && b[b.length - 1]) && (T[0] === 6 || T[0] === 2)) {
                h = 0;
                continue;
              }
              if (T[0] === 3 && (!b || T[1] > b[0] && T[1] < b[3])) {
                h.label = T[1];
                break;
              }
              if (T[0] === 6 && h.label < b[1]) {
                h.label = b[1], b = T;
                break;
              }
              if (b && h.label < b[2]) {
                h.label = b[2], h.ops.push(T);
                break;
              }
              b[2] && h.ops.pop(), h.trys.pop();
              continue;
          }
          T = y.call(v, h);
        } catch (_) {
          T = [6, _], w = 0;
        } finally {
          p = b = 0;
        }
      if (T[0] & 5) throw T[1];
      return { value: T[0] ? T[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Se, "__esModule", { value: !0 });
  var n = St(), l = bo(), g = Qt(), d = wt(), m = Er(), f = So(), s = zt(), a = bt(), c = Jt(), i = 100, r = "CLAIM_REFRESH_LOCK";
  function u(v) {
    return {
      addXMLHttpRequestInterceptor: function(y) {
        (0, d.logDebugMessage)("addXMLHttpRequestInterceptorAndReturnModified: called"), (0, f.addInterceptorsToXMLHttpRequest)();
      },
      addFetchInterceptorsAndReturnModifiedFetch: function(y) {
        return (0, d.logDebugMessage)("addFetchInterceptorsAndReturnModifiedFetch: called"), function(h, p) {
          return o(this, void 0, void 0, function() {
            return t(this, function(w) {
              switch (w.label) {
                case 0:
                  return [
                    4,
                    n.default.doRequest(
                      function(b) {
                        return y.originalFetch(
                          typeof h == "object" && "clone" in h ? h.clone() : h,
                          e({}, b)
                        );
                      },
                      p,
                      h
                    )
                  ];
                case 1:
                  return [2, w.sent()];
              }
            });
          });
        };
      },
      addAxiosInterceptors: function(y) {
        if ((0, d.logDebugMessage)("addAxiosInterceptors: called"), XMLHttpRequest.__interceptedBySuperTokens) {
          console.warn(
            "Not adding axios interceptor since XMLHttpRequest is already added. This is just a warning."
          ), console.warn("Our axios and XMLHttpRequest interceptors cannot be used at the same time."), console.warn(
            "Since XMLHttpRequest is added automatically and supports axios by default, you can just remove addAxiosInterceptors from your code."
          ), console.warn(
            "If you want to continue using our axios interceptor, you can override addXMLHttpRequestInterceptor with an empty function."
          ), (0, d.logDebugMessage)(
            "addAxiosInterceptors: not adding, because XHR interceptors are already in place"
          );
          return;
        }
        for (var h = y.axiosInstance.interceptors.request, p = 0; p < h.handlers.length; p++)
          if (h.handlers[p].fulfilled === l.interceptorFunctionRequestFulfilled) {
            (0, d.logDebugMessage)(
              "addAxiosInterceptors: not adding because already added on this instance"
            );
            return;
          }
        y.axiosInstance.interceptors.request.use(l.interceptorFunctionRequestFulfilled, function(w) {
          return o(this, void 0, void 0, function() {
            return t(this, function(b) {
              throw w;
            });
          });
        }), y.axiosInstance.interceptors.response.use(
          (0, l.responseInterceptor)(y.axiosInstance),
          (0, l.responseErrorInterceptor)(y.axiosInstance)
        );
      },
      getUserId: function(y) {
        return o(this, void 0, void 0, function() {
          var h;
          return t(this, function(p) {
            switch (p.label) {
              case 0:
                return (0, d.logDebugMessage)("getUserId: called"), [4, n.FrontToken.getTokenInfo()];
              case 1:
                if (h = p.sent(), h === void 0)
                  throw new Error("No session exists");
                return (0, d.logDebugMessage)("getUserId: returning: " + h.uid), [2, h.uid];
            }
          });
        });
      },
      getAccessTokenPayloadSecurely: function(y) {
        return o(this, void 0, void 0, function() {
          var h, p;
          return t(this, function(w) {
            switch (w.label) {
              case 0:
                return (0, d.logDebugMessage)("getAccessTokenPayloadSecurely: called"), [4, n.FrontToken.getTokenInfo()];
              case 1:
                if (h = w.sent(), h === void 0)
                  throw new Error("No session exists");
                return h.ate < a.default.getReferenceOrThrow().dateProvider.now() ? ((0, d.logDebugMessage)("getAccessTokenPayloadSecurely: access token expired. Refreshing session"), [4, n.default.attemptRefreshingSession()]) : [3, 5];
              case 2:
                return p = w.sent(), p ? [
                  4,
                  this.getAccessTokenPayloadSecurely({
                    userContext: y.userContext
                  })
                ] : [3, 4];
              case 3:
                return [2, w.sent()];
              case 4:
                throw new Error("Could not refresh session");
              case 5:
                return (0, d.logDebugMessage)("getAccessTokenPayloadSecurely: returning: " + JSON.stringify(h.up)), [2, h.up];
            }
          });
        });
      },
      doesSessionExist: function(y) {
        return o(this, void 0, void 0, function() {
          var h, p, w;
          return t(this, function(b) {
            switch (b.label) {
              case 0:
                return (0, d.logDebugMessage)("doesSessionExist: called"), [4, n.FrontToken.getTokenInfo()];
              case 1:
                return h = b.sent(), h === void 0 ? ((0, d.logDebugMessage)("doesSessionExist: access token does not exist locally"), [2, !1]) : h.ate < a.default.getReferenceOrThrow().dateProvider.now() ? ((0, d.logDebugMessage)("doesSessionExist: access token expired. Refreshing session"), [4, (0, n.getLocalSessionState)(!1)]) : [3, 4];
              case 2:
                return p = b.sent(), [4, (0, n.onUnauthorisedResponse)(p)];
              case 3:
                return w = b.sent(), [2, w.result === "RETRY"];
              case 4:
                return [2, !0];
            }
          });
        });
      },
      signOut: function(y) {
        return o(this, void 0, void 0, function() {
          var h, p, w, b;
          return t(this, function(S) {
            switch (S.label) {
              case 0:
                return (0, d.logDebugMessage)("signOut: called"), [4, this.doesSessionExist(y)];
              case 1:
                return S.sent() ? ((0, d.logDebugMessage)("signOut: Calling refresh pre API hook"), [
                  4,
                  v.preAPIHook({
                    action: "SIGN_OUT",
                    requestInit: {
                      method: "post",
                      headers: {
                        "fdi-version": g.supported_fdi.join(","),
                        rid: n.default.rid
                      }
                    },
                    url: n.default.signOutUrl,
                    userContext: y.userContext
                  })
                ]) : ((0, d.logDebugMessage)("signOut: exiting early because session does not exist"), (0, d.logDebugMessage)("signOut: firing SIGN_OUT event"), v.onHandleEvent({
                  action: "SIGN_OUT",
                  userContext: y.userContext
                }), [
                  2
                  /*return*/
                ]);
              case 2:
                return h = S.sent(), (0, d.logDebugMessage)("signOut: Calling API"), [4, fetch(h.url, h.requestInit)];
              case 3:
                if (p = S.sent(), (0, d.logDebugMessage)("signOut: API ended"), (0, d.logDebugMessage)("signOut: API responded with status code: " + p.status), p.status === v.sessionExpiredStatusCode)
                  return [
                    2
                    /*return*/
                  ];
                if (p.status >= 300)
                  throw p;
                return [
                  4,
                  v.postAPIHook({
                    action: "SIGN_OUT",
                    requestInit: h.requestInit,
                    url: h.url,
                    fetchResponse: p.clone(),
                    userContext: y.userContext
                  })
                ];
              case 4:
                return S.sent(), [4, p.clone().json()];
              case 5:
                if (w = S.sent(), w.status === "GENERAL_ERROR")
                  throw (0, d.logDebugMessage)("doRequest: Throwing general error"), b = w.message === void 0 ? "No Error Message Provided" : w.message, new m.STGeneralError(b);
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      },
      getInvalidClaimsFromResponse: function(y) {
        return o(this, void 0, void 0, function() {
          var h;
          return t(this, function(p) {
            switch (p.label) {
              case 0:
                return "body" in y.response ? [4, y.response.clone().json()] : [3, 2];
              case 1:
                return h = p.sent(), [3, 3];
              case 2:
                typeof y.response.data == "string" ? h = JSON.parse(y.response.data) : h = y.response.data, p.label = 3;
              case 3:
                return [2, h.claimValidationErrors];
            }
          });
        });
      },
      getGlobalClaimValidators: function(y) {
        return y.claimValidatorsAddedByOtherRecipes;
      },
      validateClaims: function(y) {
        return o(this, void 0, void 0, function() {
          var h, p, w, b, S, R, C, I, T, _, P, C, x;
          return t(this, function(E) {
            switch (E.label) {
              case 0:
                p = 0, E.label = 1;
              case 1:
                return ++p < i ? [4, c.default.getReferenceOrThrow().lockFactory()] : [3, 20];
              case 2:
                return w = E.sent(), (0, d.logDebugMessage)("validateClaims: trying to acquire claim refresh lock"), [4, w.acquireLock(r)];
              case 3:
                if (b = E.sent(), !b) return [3, 18];
                E.label = 4;
              case 4:
                return E.trys.push([4, , 15, 17]), [
                  4,
                  this.getAccessTokenPayloadSecurely({
                    userContext: y.userContext
                  })
                ];
              case 5:
                h = E.sent(), (0, d.logDebugMessage)("validateClaims: claim refresh lock acquired"), S = 0, R = y.claimValidators, E.label = 6;
              case 6:
                return S < R.length ? (C = R[S], [4, C.shouldRefresh(h, y.userContext)]) : [3, 14];
              case 7:
                if (!E.sent()) return [3, 13];
                E.label = 8;
              case 8:
                return E.trys.push([8, 10, , 11]), [4, C.refresh(y.userContext)];
              case 9:
                return E.sent(), [3, 11];
              case 10:
                return I = E.sent(), console.error(
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
                h = E.sent(), E.label = 13;
              case 13:
                return S++, [3, 6];
              case 14:
                return [3, 17];
              case 15:
                return (0, d.logDebugMessage)("validateClaims: releasing claim refresh lock"), [4, w.releaseLock(r)];
              case 16:
                return E.sent(), [
                  7
                  /*endfinally*/
                ];
              case 17:
                return [3, 20];
              case 18:
                (0, d.logDebugMessage)("validateClaims: Retrying refresh lock ".concat(p, "/").concat(i)), E.label = 19;
              case 19:
                return [3, 1];
              case 20:
                return p !== i ? [3, 22] : ((0, d.logDebugMessage)("validateClaims: ran out of retries while trying to acquire claim refresh lock"), [
                  4,
                  this.getAccessTokenPayloadSecurely({ userContext: y.userContext })
                ]);
              case 21:
                h = E.sent(), E.label = 22;
              case 22:
                T = [], _ = 0, P = y.claimValidators, E.label = 23;
              case 23:
                return _ < P.length ? (C = P[_], [4, C.validate(h, y.userContext)]) : [3, 26];
              case 24:
                x = E.sent(), x.isValid || T.push({
                  id: C.id,
                  reason: x.reason
                }), E.label = 25;
              case 25:
                return _++, [3, 23];
              case 26:
                return [2, T];
            }
          });
        });
      },
      shouldDoInterceptionBasedOnUrl: function(y, h, p) {
        if ((0, d.logDebugMessage)(
          "shouldDoInterceptionBasedOnUrl: toCheckUrl: " + y + " apiDomain: " + h + " sessionTokenBackendDomain: " + p
        ), y.includes("superTokensDoNotDoInterception"))
          return !1;
        y = (0, s.normaliseURLDomainOrThrowError)(y);
        var w = new URL(y), b = w.hostname, S = !1;
        if (h !== "") {
          h = (0, s.normaliseURLDomainOrThrowError)(h);
          var R = new URL(h);
          S = b === R.hostname;
        }
        if (p === void 0 || S)
          return S;
        var I = (0, s.normaliseSessionScopeOrThrowError)(p);
        return (0, s.matchesDomainOrSubdomain)(b, I);
      },
      calculateClockSkewInMillis: function(y) {
        var h = y.accessTokenPayload;
        (0, d.logDebugMessage)("calculateClockSkewInMillis: called");
        var p = h == null ? void 0 : h.iat;
        if (p === void 0 || typeof p != "number")
          return (0, d.logDebugMessage)(
            "calculateClockSkewInMillis: payload iat is undefined or not a number. This may happen due to an unsupported backend sdk. Returning 0"
          ), 0;
        var w = p * 1e3, b = w - Date.now();
        return (0, d.logDebugMessage)("calculateClockSkewInMillis: returning " + b), b;
      }
    };
  }
  return Se.default = u, Se;
}
var ft = {}, Xn;
function Mr() {
  if (Xn) return ft;
  Xn = 1, Object.defineProperty(ft, "__esModule", { value: !0 }), ft.PrimitiveClaim = void 0;
  var e = bt(), o = (
    /** @class */
    function() {
      function t(n) {
        var l = this;
        this.validators = {
          hasValue: function(g, d, m) {
            d === void 0 && (d = l.defaultMaxAgeInSeconds);
            var f = e.default.getReferenceOrThrow().dateProvider;
            return {
              id: m !== void 0 ? m : l.id,
              refresh: function(s) {
                return l.refresh(s);
              },
              shouldRefresh: function(s, a) {
                if (d !== void 0 && d < f.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      f.getThresholdInSeconds()
                    )
                  );
                return l.getValueFromPayload(s, a) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                d !== void 0 && s[l.id].t < f.now() - d * 1e3;
              },
              validate: function(s, a) {
                var c = l.getValueFromPayload(s, a);
                if (c === void 0)
                  return {
                    isValid: !1,
                    reason: { message: "value does not exist", expectedValue: g, actualValue: c }
                  };
                var i = (f.now() - l.getLastFetchedTime(s, a)) / 1e3;
                return d !== void 0 && i > d ? {
                  isValid: !1,
                  reason: {
                    message: "expired",
                    ageInSeconds: i,
                    maxAgeInSeconds: d
                  }
                } : c !== g ? {
                  isValid: !1,
                  reason: { message: "wrong value", expectedValue: g, actualValue: c }
                } : { isValid: !0 };
              }
            };
          }
        }, this.id = n.id, this.refresh = n.refresh, this.defaultMaxAgeInSeconds = n.defaultMaxAgeInSeconds;
      }
      return t.prototype.getValueFromPayload = function(n, l) {
        return n[this.id] !== void 0 ? n[this.id].v : void 0;
      }, t.prototype.getLastFetchedTime = function(n, l) {
        return n[this.id] !== void 0 ? n[this.id].t : void 0;
      }, t;
    }()
  );
  return ft.PrimitiveClaim = o, ft;
}
var De = {}, zn;
function ko() {
  if (zn) return De;
  zn = 1;
  var e = De && De.__awaiter || function(l, g, d, m) {
    function f(s) {
      return s instanceof d ? s : new d(function(a) {
        a(s);
      });
    }
    return new (d || (d = Promise))(function(s, a) {
      function c(u) {
        try {
          r(m.next(u));
        } catch (v) {
          a(v);
        }
      }
      function i(u) {
        try {
          r(m.throw(u));
        } catch (v) {
          a(v);
        }
      }
      function r(u) {
        u.done ? s(u.value) : f(u.value).then(c, i);
      }
      r((m = m.apply(l, g || [])).next());
    });
  }, o = De && De.__generator || function(l, g) {
    var d = {
      label: 0,
      sent: function() {
        if (s[0] & 1) throw s[1];
        return s[1];
      },
      trys: [],
      ops: []
    }, m, f, s, a;
    return a = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
      return this;
    }), a;
    function c(r) {
      return function(u) {
        return i([r, u]);
      };
    }
    function i(r) {
      if (m) throw new TypeError("Generator is already executing.");
      for (; d; )
        try {
          if (m = 1, f && (s = r[0] & 2 ? f.return : r[0] ? f.throw || ((s = f.return) && s.call(f), 0) : f.next) && !(s = s.call(f, r[1])).done)
            return s;
          switch (f = 0, s && (r = [r[0] & 2, s.value]), r[0]) {
            case 0:
            case 1:
              s = r;
              break;
            case 4:
              return d.label++, { value: r[1], done: !1 };
            case 5:
              d.label++, f = r[1], r = [0];
              continue;
            case 7:
              r = d.ops.pop(), d.trys.pop();
              continue;
            default:
              if (s = d.trys, !(s = s.length > 0 && s[s.length - 1]) && (r[0] === 6 || r[0] === 2)) {
                d = 0;
                continue;
              }
              if (r[0] === 3 && (!s || r[1] > s[0] && r[1] < s[3])) {
                d.label = r[1];
                break;
              }
              if (r[0] === 6 && d.label < s[1]) {
                d.label = s[1], s = r;
                break;
              }
              if (s && d.label < s[2]) {
                d.label = s[2], d.ops.push(r);
                break;
              }
              s[2] && d.ops.pop(), d.trys.pop();
              continue;
          }
          r = g.call(l, d);
        } catch (u) {
          r = [6, u], f = 0;
        } finally {
          m = s = 0;
        }
      if (r[0] & 5) throw r[1];
      return { value: r[0] ? r[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(De, "__esModule", { value: !0 }), De.PrimitiveArrayClaim = void 0;
  var t = bt(), n = (
    /** @class */
    function() {
      function l(g) {
        var d = this;
        this.validators = {
          includes: function(m, f, s) {
            f === void 0 && (f = d.defaultMaxAgeInSeconds);
            var a = t.default.getReferenceOrThrow().dateProvider;
            return {
              id: s !== void 0 ? s : d.id,
              refresh: function(c) {
                return d.refresh(c);
              },
              shouldRefresh: function(c, i) {
                if (f !== void 0 && f < a.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      a.getThresholdInSeconds()
                    )
                  );
                return d.getValueFromPayload(c, i) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                f !== void 0 && c[d.id].t < a.now() - f * 1e3;
              },
              validate: function(c, i) {
                return e(d, void 0, void 0, function() {
                  var r, u;
                  return o(this, function(v) {
                    return r = this.getValueFromPayload(c, i), r === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToInclude: m,
                          actualValue: r
                        }
                      }
                    ] : (u = (a.now() - this.getLastFetchedTime(c, i)) / 1e3, f !== void 0 && u > f ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: u,
                          maxAgeInSeconds: f
                        }
                      }
                    ] : r.includes(m) ? [2, { isValid: !0 }] : [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "wrong value",
                          expectedToInclude: m,
                          actualValue: r
                        }
                      }
                    ]);
                  });
                });
              }
            };
          },
          excludes: function(m, f, s) {
            f === void 0 && (f = d.defaultMaxAgeInSeconds);
            var a = t.default.getReferenceOrThrow().dateProvider;
            return {
              id: s !== void 0 ? s : d.id,
              refresh: function(c) {
                return d.refresh(c);
              },
              shouldRefresh: function(c, i) {
                if (f !== void 0 && f < a.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      a.getThresholdInSeconds()
                    )
                  );
                return d.getValueFromPayload(c, i) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                f !== void 0 && c[d.id].t < a.now() - f * 1e3;
              },
              validate: function(c, i) {
                return e(d, void 0, void 0, function() {
                  var r, u;
                  return o(this, function(v) {
                    return r = this.getValueFromPayload(c, i), r === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToNotInclude: m,
                          actualValue: r
                        }
                      }
                    ] : (u = (a.now() - this.getLastFetchedTime(c, i)) / 1e3, f !== void 0 && u > f ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: u,
                          maxAgeInSeconds: f
                        }
                      }
                    ] : r.includes(m) ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "wrong value",
                          expectedToNotInclude: m,
                          actualValue: r
                        }
                      }
                    ] : [2, { isValid: !0 }]);
                  });
                });
              }
            };
          },
          includesAll: function(m, f, s) {
            f === void 0 && (f = d.defaultMaxAgeInSeconds);
            var a = t.default.getReferenceOrThrow().dateProvider;
            return {
              id: s !== void 0 ? s : d.id,
              refresh: function(c) {
                return d.refresh(c);
              },
              shouldRefresh: function(c, i) {
                if (f !== void 0 && f < a.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      a.getThresholdInSeconds()
                    )
                  );
                return d.getValueFromPayload(c, i) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                f !== void 0 && c[d.id].t < a.now() - f * 1e3;
              },
              validate: function(c, i) {
                return e(d, void 0, void 0, function() {
                  var r, u, v, y;
                  return o(this, function(h) {
                    return r = this.getValueFromPayload(c, i), r === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToInclude: m,
                          actualValue: r
                        }
                      }
                    ] : (u = (a.now() - this.getLastFetchedTime(c, i)) / 1e3, f !== void 0 && u > f ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: u,
                          maxAgeInSeconds: f
                        }
                      }
                    ] : (v = new Set(r), y = m.every(function(p) {
                      return v.has(p);
                    }), [
                      2,
                      y ? { isValid: y } : {
                        isValid: y,
                        reason: {
                          message: "wrong value",
                          expectedToInclude: m,
                          actualValue: r
                        }
                      }
                    ]));
                  });
                });
              }
            };
          },
          includesAny: function(m, f, s) {
            f === void 0 && (f = d.defaultMaxAgeInSeconds);
            var a = t.default.getReferenceOrThrow().dateProvider;
            return {
              id: s !== void 0 ? s : d.id,
              refresh: function(c) {
                return d.refresh(c);
              },
              shouldRefresh: function(c, i) {
                if (f !== void 0 && f < a.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      a.getThresholdInSeconds()
                    )
                  );
                return d.getValueFromPayload(c, i) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                f !== void 0 && c[d.id].t < a.now() - f * 1e3;
              },
              validate: function(c, i) {
                return e(d, void 0, void 0, function() {
                  var r, u, v, y;
                  return o(this, function(h) {
                    return r = this.getValueFromPayload(c, i), r === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToInclude: m,
                          actualValue: r
                        }
                      }
                    ] : (u = (a.now() - this.getLastFetchedTime(c, i)) / 1e3, f !== void 0 && u > f ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: u,
                          maxAgeInSeconds: f
                        }
                      }
                    ] : (v = new Set(r), y = m.some(function(p) {
                      return v.has(p);
                    }), [
                      2,
                      y ? { isValid: y } : {
                        isValid: y,
                        reason: {
                          message: "wrong value",
                          expectedToIncludeAtLeastOneOf: m,
                          actualValue: r
                        }
                      }
                    ]));
                  });
                });
              }
            };
          },
          excludesAll: function(m, f, s) {
            f === void 0 && (f = d.defaultMaxAgeInSeconds);
            var a = t.default.getReferenceOrThrow().dateProvider;
            return {
              id: s !== void 0 ? s : d.id,
              refresh: function(c) {
                return d.refresh(c);
              },
              shouldRefresh: function(c, i) {
                if (f !== void 0 && f < a.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      a.getThresholdInSeconds()
                    )
                  );
                return d.getValueFromPayload(c, i) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                f !== void 0 && c[d.id].t < a.now() - f * 1e3;
              },
              validate: function(c, i) {
                return e(d, void 0, void 0, function() {
                  var r, u, v, y;
                  return o(this, function(h) {
                    return r = this.getValueFromPayload(c, i), r === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToNotInclude: m,
                          actualValue: r
                        }
                      }
                    ] : (u = (a.now() - this.getLastFetchedTime(c, i)) / 1e3, f !== void 0 && u > f ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: u,
                          maxAgeInSeconds: f
                        }
                      }
                    ] : (v = new Set(r), y = m.every(function(p) {
                      return !v.has(p);
                    }), [
                      2,
                      y ? { isValid: y } : {
                        isValid: y,
                        reason: {
                          message: "wrong value",
                          expectedToNotInclude: m,
                          actualValue: r
                        }
                      }
                    ]));
                  });
                });
              }
            };
          }
        }, this.id = g.id, this.refresh = g.refresh, this.defaultMaxAgeInSeconds = g.defaultMaxAgeInSeconds;
      }
      return l.prototype.getValueFromPayload = function(g, d) {
        return g[this.id] !== void 0 ? g[this.id].v : void 0;
      }, l.prototype.getLastFetchedTime = function(g, d) {
        return g[this.id] !== void 0 ? g[this.id].t : void 0;
      }, l;
    }()
  );
  return De.PrimitiveArrayClaim = n, De;
}
var Me = {}, Kn;
function Io() {
  if (Kn) return Me;
  Kn = 1;
  var e = Me && Me.__extends || /* @__PURE__ */ function() {
    var l = function(g, d) {
      return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, f) {
        m.__proto__ = f;
      } || function(m, f) {
        for (var s in f) Object.prototype.hasOwnProperty.call(f, s) && (m[s] = f[s]);
      }, l(g, d);
    };
    return function(g, d) {
      if (typeof d != "function" && d !== null)
        throw new TypeError("Class extends value " + String(d) + " is not a constructor or null");
      l(g, d);
      function m() {
        this.constructor = g;
      }
      g.prototype = d === null ? Object.create(d) : (m.prototype = d.prototype, new m());
    };
  }(), o = Me && Me.__assign || function() {
    return o = Object.assign || function(l) {
      for (var g, d = 1, m = arguments.length; d < m; d++) {
        g = arguments[d];
        for (var f in g) Object.prototype.hasOwnProperty.call(g, f) && (l[f] = g[f]);
      }
      return l;
    }, o.apply(this, arguments);
  };
  Object.defineProperty(Me, "__esModule", { value: !0 }), Me.BooleanClaim = void 0;
  var t = Mr(), n = (
    /** @class */
    function(l) {
      e(g, l);
      function g(d) {
        var m = l.call(this, d) || this;
        return m.validators = o(o({}, m.validators), {
          isTrue: function(f) {
            return m.validators.hasValue(!0, f);
          },
          isFalse: function(f) {
            return m.validators.hasValue(!1, f);
          }
        }), m;
      }
      return g;
    }(t.PrimitiveClaim)
  );
  return Me.BooleanClaim = n, Me;
}
var Qn;
function _o() {
  return Qn || (Qn = 1, function(e) {
    var o = Ke && Ke.__awaiter || function(h, p, w, b) {
      function S(R) {
        return R instanceof w ? R : new w(function(I) {
          I(R);
        });
      }
      return new (w || (w = Promise))(function(R, I) {
        function T(C) {
          try {
            P(b.next(C));
          } catch (x) {
            I(x);
          }
        }
        function _(C) {
          try {
            P(b.throw(C));
          } catch (x) {
            I(x);
          }
        }
        function P(C) {
          C.done ? R(C.value) : S(C.value).then(T, _);
        }
        P((b = b.apply(h, p || [])).next());
      });
    }, t = Ke && Ke.__generator || function(h, p) {
      var w = {
        label: 0,
        sent: function() {
          if (R[0] & 1) throw R[1];
          return R[1];
        },
        trys: [],
        ops: []
      }, b, S, R, I;
      return I = { next: T(0), throw: T(1), return: T(2) }, typeof Symbol == "function" && (I[Symbol.iterator] = function() {
        return this;
      }), I;
      function T(P) {
        return function(C) {
          return _([P, C]);
        };
      }
      function _(P) {
        if (b) throw new TypeError("Generator is already executing.");
        for (; w; )
          try {
            if (b = 1, S && (R = P[0] & 2 ? S.return : P[0] ? S.throw || ((R = S.return) && R.call(S), 0) : S.next) && !(R = R.call(S, P[1])).done)
              return R;
            switch (S = 0, R && (P = [P[0] & 2, R.value]), P[0]) {
              case 0:
              case 1:
                R = P;
                break;
              case 4:
                return w.label++, { value: P[1], done: !1 };
              case 5:
                w.label++, S = P[1], P = [0];
                continue;
              case 7:
                P = w.ops.pop(), w.trys.pop();
                continue;
              default:
                if (R = w.trys, !(R = R.length > 0 && R[R.length - 1]) && (P[0] === 6 || P[0] === 2)) {
                  w = 0;
                  continue;
                }
                if (P[0] === 3 && (!R || P[1] > R[0] && P[1] < R[3])) {
                  w.label = P[1];
                  break;
                }
                if (P[0] === 6 && w.label < R[1]) {
                  w.label = R[1], R = P;
                  break;
                }
                if (R && w.label < R[2]) {
                  w.label = R[2], w.ops.push(P);
                  break;
                }
                R[2] && w.ops.pop(), w.trys.pop();
                continue;
            }
            P = p.call(h, w);
          } catch (C) {
            P = [6, C], S = 0;
          } finally {
            b = R = 0;
          }
        if (P[0] & 5) throw P[1];
        return { value: P[0] ? P[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.BooleanClaim = e.PrimitiveArrayClaim = e.PrimitiveClaim = e.getInvalidClaimsFromResponse = e.getClaimValue = e.validateClaims = e.signOut = e.addAxiosInterceptors = e.doesSessionExist = e.attemptRefreshingSession = e.getAccessToken = e.getAccessTokenPayloadSecurely = e.getUserId = e.init = void 0;
    var n = St(), l = Ro(), g = Pt(), d = zt(), m = Or(), f = je(), s = Jt(), a = Pr(), c = wt(), i = bt(), r = (
      /** @class */
      function() {
        function h() {
        }
        h.init = function(w) {
          m.default.init(w.cookieHandler), f.default.init(w.windowHandler), i.default.init(w.dateProvider), s.default.init(
            w.lockFactory,
            f.default.getReferenceOrThrow().windowHandler.localStorage
          );
          var b = (0, d.validateAndNormaliseInputOrThrowError)(w);
          w.enableDebugLogs !== void 0 && w.enableDebugLogs && (0, c.enableLogging)();
          var S = new g.default(
            (0, l.default)({
              onHandleEvent: b.onHandleEvent,
              preAPIHook: b.preAPIHook,
              postAPIHook: b.postAPIHook,
              sessionExpiredStatusCode: b.sessionExpiredStatusCode
            })
          ).override(b.override.functions).build();
          n.default.init(b, S), h.axiosInterceptorQueue.forEach(function(R) {
            R();
          }), h.axiosInterceptorQueue = [];
        }, h.getUserId = function(w) {
          return n.default.recipeImpl.getUserId({
            userContext: (0, d.getNormalisedUserContext)(w === void 0 ? void 0 : w.userContext)
          });
        }, h.getAccessTokenPayloadSecurely = function(w) {
          return o(this, void 0, void 0, function() {
            return t(this, function(b) {
              return [
                2,
                n.default.recipeImpl.getAccessTokenPayloadSecurely({
                  userContext: (0, d.getNormalisedUserContext)(
                    w === void 0 ? void 0 : w.userContext
                  )
                })
              ];
            });
          });
        };
        var p;
        return p = h, h.axiosInterceptorQueue = [], h.attemptRefreshingSession = function() {
          return o(void 0, void 0, void 0, function() {
            return t(p, function(w) {
              return [2, n.default.attemptRefreshingSession()];
            });
          });
        }, h.doesSessionExist = function(w) {
          return n.default.recipeImpl.doesSessionExist({
            userContext: (0, d.getNormalisedUserContext)(w === void 0 ? void 0 : w.userContext)
          });
        }, h.addAxiosInterceptors = function(w, b) {
          n.default.initCalled ? n.default.recipeImpl.addAxiosInterceptors({
            axiosInstance: w,
            userContext: (0, d.getNormalisedUserContext)(b)
          }) : h.axiosInterceptorQueue.push(function() {
            n.default.recipeImpl.addAxiosInterceptors({
              axiosInstance: w,
              userContext: (0, d.getNormalisedUserContext)(b)
            });
          });
        }, h.signOut = function(w) {
          return n.default.recipeImpl.signOut({
            userContext: (0, d.getNormalisedUserContext)(w === void 0 ? void 0 : w.userContext)
          });
        }, h.getInvalidClaimsFromResponse = function(w) {
          return o(this, void 0, void 0, function() {
            return t(this, function(b) {
              return [
                2,
                n.default.recipeImpl.getInvalidClaimsFromResponse({
                  response: w.response,
                  userContext: (0, d.getNormalisedUserContext)(w.userContext)
                })
              ];
            });
          });
        }, h.getClaimValue = function(w) {
          return o(this, void 0, void 0, function() {
            var b, S;
            return t(this, function(R) {
              switch (R.label) {
                case 0:
                  return b = (0, d.getNormalisedUserContext)(
                    w === void 0 ? void 0 : w.userContext
                  ), [
                    4,
                    h.getAccessTokenPayloadSecurely({ userContext: b })
                  ];
                case 1:
                  return S = R.sent(), [2, w.claim.getValueFromPayload(S, b)];
              }
            });
          });
        }, h.validateClaims = function(w, b) {
          var S = (0, d.getNormalisedUserContext)(b), R = a.SessionClaimValidatorStore.getClaimValidatorsAddedByOtherRecipes(), I = n.default.recipeImpl.getGlobalClaimValidators({
            claimValidatorsAddedByOtherRecipes: R,
            userContext: S
          }), T = w !== void 0 ? w(I, S) : I;
          return T.length === 0 ? [] : n.default.recipeImpl.validateClaims({
            claimValidators: T,
            userContext: (0, d.getNormalisedUserContext)(b)
          });
        }, h.getAccessToken = function(w) {
          return o(void 0, void 0, void 0, function() {
            return t(p, function(b) {
              switch (b.label) {
                case 0:
                  return [
                    4,
                    n.default.recipeImpl.doesSessionExist({
                      userContext: (0, d.getNormalisedUserContext)(
                        w === void 0 ? void 0 : w.userContext
                      )
                    })
                  ];
                case 1:
                  return b.sent() ? [2, (0, n.getTokenForHeaderAuth)("access")] : [2, void 0];
              }
            });
          });
        }, h;
      }()
    );
    e.default = r, e.init = r.init, e.getUserId = r.getUserId, e.getAccessTokenPayloadSecurely = r.getAccessTokenPayloadSecurely, e.getAccessToken = r.getAccessToken, e.attemptRefreshingSession = r.attemptRefreshingSession, e.doesSessionExist = r.doesSessionExist, e.addAxiosInterceptors = r.addAxiosInterceptors, e.signOut = r.signOut, e.validateClaims = r.validateClaims, e.getClaimValue = r.getClaimValue, e.getInvalidClaimsFromResponse = r.getInvalidClaimsFromResponse;
    var u = Mr();
    Object.defineProperty(e, "PrimitiveClaim", {
      enumerable: !0,
      get: function() {
        return u.PrimitiveClaim;
      }
    });
    var v = ko();
    Object.defineProperty(e, "PrimitiveArrayClaim", {
      enumerable: !0,
      get: function() {
        return v.PrimitiveArrayClaim;
      }
    });
    var y = Io();
    Object.defineProperty(e, "BooleanClaim", {
      enumerable: !0,
      get: function() {
        return y.BooleanClaim;
      }
    });
  }(Ke)), Ke;
}
var Jn;
function Lr() {
  return Jn || (Jn = 1, function(e) {
    function o(t) {
      for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
    }
    e.__esModule = !0, o(_o());
  }(Ht)), Ht;
}
var ht = {}, Yn;
function To() {
  return Yn || (Yn = 1, Object.defineProperty(ht, "__esModule", { value: !0 }), ht.EMAILVERIFICATION_CLAIM_ID = void 0, ht.EMAILVERIFICATION_CLAIM_ID = "st-ev"), ht;
}
var Zn;
function Ur() {
  if (Zn) return ie;
  Zn = 1;
  var e = ie && ie.__extends || /* @__PURE__ */ function() {
    var c = function(i, r) {
      return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, v) {
        u.__proto__ = v;
      } || function(u, v) {
        for (var y in v) Object.prototype.hasOwnProperty.call(v, y) && (u[y] = v[y]);
      }, c(i, r);
    };
    return function(i, r) {
      if (typeof r != "function" && r !== null)
        throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
      c(i, r);
      function u() {
        this.constructor = i;
      }
      i.prototype = r === null ? Object.create(r) : (u.prototype = r.prototype, new u());
    };
  }(), o = ie && ie.__assign || function() {
    return o = Object.assign || function(c) {
      for (var i, r = 1, u = arguments.length; r < u; r++) {
        i = arguments[r];
        for (var v in i) Object.prototype.hasOwnProperty.call(i, v) && (c[v] = i[v]);
      }
      return c;
    }, o.apply(this, arguments);
  }, t = ie && ie.__awaiter || function(c, i, r, u) {
    function v(y) {
      return y instanceof r ? y : new r(function(h) {
        h(y);
      });
    }
    return new (r || (r = Promise))(function(y, h) {
      function p(S) {
        try {
          b(u.next(S));
        } catch (R) {
          h(R);
        }
      }
      function w(S) {
        try {
          b(u.throw(S));
        } catch (R) {
          h(R);
        }
      }
      function b(S) {
        S.done ? y(S.value) : v(S.value).then(p, w);
      }
      b((u = u.apply(c, i || [])).next());
    });
  }, n = ie && ie.__generator || function(c, i) {
    var r = {
      label: 0,
      sent: function() {
        if (y[0] & 1) throw y[1];
        return y[1];
      },
      trys: [],
      ops: []
    }, u, v, y, h;
    return h = { next: p(0), throw: p(1), return: p(2) }, typeof Symbol == "function" && (h[Symbol.iterator] = function() {
      return this;
    }), h;
    function p(b) {
      return function(S) {
        return w([b, S]);
      };
    }
    function w(b) {
      if (u) throw new TypeError("Generator is already executing.");
      for (; r; )
        try {
          if (u = 1, v && (y = b[0] & 2 ? v.return : b[0] ? v.throw || ((y = v.return) && y.call(v), 0) : v.next) && !(y = y.call(v, b[1])).done)
            return y;
          switch (v = 0, y && (b = [b[0] & 2, y.value]), b[0]) {
            case 0:
            case 1:
              y = b;
              break;
            case 4:
              return r.label++, { value: b[1], done: !1 };
            case 5:
              r.label++, v = b[1], b = [0];
              continue;
            case 7:
              b = r.ops.pop(), r.trys.pop();
              continue;
            default:
              if (y = r.trys, !(y = y.length > 0 && y[y.length - 1]) && (b[0] === 6 || b[0] === 2)) {
                r = 0;
                continue;
              }
              if (b[0] === 3 && (!y || b[1] > y[0] && b[1] < y[3])) {
                r.label = b[1];
                break;
              }
              if (b[0] === 6 && r.label < y[1]) {
                r.label = y[1], y = b;
                break;
              }
              if (y && r.label < y[2]) {
                r.label = y[2], r.ops.push(b);
                break;
              }
              y[2] && r.ops.pop(), r.trys.pop();
              continue;
          }
          b = i.call(c, r);
        } catch (S) {
          b = [6, S], v = 0;
        } finally {
          u = y = 0;
        }
      if (b[0] & 5) throw b[1];
      return { value: b[0] ? b[1] : void 0, done: !0 };
    }
  }, l = ie && ie.__spreadArray || function(c, i, r) {
    if (r || arguments.length === 2)
      for (var u = 0, v = i.length, y; u < v; u++)
        (y || !(u in i)) && (y || (y = Array.prototype.slice.call(i, 0, u)), y[u] = i[u]);
    return c.concat(y || Array.prototype.slice.call(i));
  };
  Object.defineProperty(ie, "__esModule", { value: !0 }), ie.Recipe = void 0;
  var g = Dr(), d = Lr(), m = Ie(), f = To(), s = [f.EMAILVERIFICATION_CLAIM_ID], a = (
    /** @class */
    function(c) {
      e(i, c);
      function i(r) {
        var u = c.call(this, r) || this;
        return u.getUserId = function(v) {
          return d.default.getUserId({
            userContext: v.userContext
          });
        }, u.getAccessToken = function(v) {
          return t(u, void 0, void 0, function() {
            return n(this, function(y) {
              return [
                2,
                d.default.getAccessToken({
                  userContext: v.userContext
                })
              ];
            });
          });
        }, u.getAccessTokenPayloadSecurely = function(v) {
          return t(u, void 0, void 0, function() {
            return n(this, function(y) {
              return [
                2,
                d.default.getAccessTokenPayloadSecurely({
                  userContext: v.userContext
                })
              ];
            });
          });
        }, u.doesSessionExist = function(v) {
          return d.default.doesSessionExist({
            userContext: v.userContext
          });
        }, u.signOut = function(v) {
          return d.default.signOut({
            userContext: v.userContext
          });
        }, u.attemptRefreshingSession = function() {
          return t(u, void 0, void 0, function() {
            return n(this, function(v) {
              return [2, d.default.attemptRefreshingSession()];
            });
          });
        }, u.validateClaims = function(v) {
          return d.default.validateClaims(v.overrideGlobalClaimValidators, v.userContext);
        }, d.default.init(
          o(o({}, r), {
            override: {
              functions: function(v, y) {
                var h;
                return y.override(function(p) {
                  return o(o({}, p), {
                    getGlobalClaimValidators: function(w) {
                      var b = p.getGlobalClaimValidators(w);
                      return l(
                        l(
                          [],
                          b.filter(function(S) {
                            return s.includes(S.id);
                          }),
                          !0
                        ),
                        b.filter(function(S) {
                          return !s.includes(S.id);
                        }),
                        !0
                      );
                    }
                  });
                }), !((h = r.override) === null || h === void 0) && h.functions && y.override(r.override.functions), v;
              }
            },
            preAPIHook: function(v) {
              return t(u, void 0, void 0, function() {
                var y, h;
                return n(this, function(p) {
                  return y = new Headers(v.requestInit.headers), y.set("rid", r.recipeId), h = o(o({}, v), {
                    requestInit: o(o({}, v.requestInit), { headers: y })
                  }), r.preAPIHook === void 0 ? [2, h] : [2, r.preAPIHook(v)];
                });
              });
            },
            apiDomain: r.appInfo.apiDomain.getAsStringDangerous(),
            apiBasePath: r.appInfo.apiBasePath.getAsStringDangerous()
          })
        ), u;
      }
      return i.init = function(r) {
        return function(u, v, y) {
          return i.instance = new i(
            o(o({}, r), {
              appInfo: u,
              recipeId: i.RECIPE_ID,
              enableDebugLogs: y
            })
          ), i.instance;
        };
      }, i.prototype.getClaimValue = function(r) {
        return d.default.getClaimValue(r);
      }, i.prototype.getInvalidClaimsFromResponse = function(r) {
        return d.default.getInvalidClaimsFromResponse(r);
      }, i.addAxiosInterceptors = function(r, u) {
        return d.default.addAxiosInterceptors(r, u);
      }, i.getInstanceOrThrow = function() {
        if (i.instance === void 0) {
          var r = "No instance of Session found. Ensure that the 'Session.init' method is called within the 'SuperTokens.init' recipeList.";
          throw r = (0, m.checkForSSRErrorAndAppendIfNeeded)(r), Error(r);
        }
        return i.instance;
      }, i.reset = function() {
        (0, m.isTest)() && (i.instance = void 0);
      }, i.RECIPE_ID = "session", i;
    }(g.default)
  );
  return ie.Recipe = a, ie.default = a, ie;
}
var er;
function en() {
  if (er) return be;
  er = 1;
  var e = be && be.__extends || /* @__PURE__ */ function() {
    var d = function(m, f) {
      return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, a) {
        s.__proto__ = a;
      } || function(s, a) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (s[c] = a[c]);
      }, d(m, f);
    };
    return function(m, f) {
      if (typeof f != "function" && f !== null)
        throw new TypeError("Class extends value " + String(f) + " is not a constructor or null");
      d(m, f);
      function s() {
        this.constructor = m;
      }
      m.prototype = f === null ? Object.create(f) : (s.prototype = f.prototype, new s());
    };
  }(), o = be && be.__awaiter || function(d, m, f, s) {
    function a(c) {
      return c instanceof f ? c : new f(function(i) {
        i(c);
      });
    }
    return new (f || (f = Promise))(function(c, i) {
      function r(y) {
        try {
          v(s.next(y));
        } catch (h) {
          i(h);
        }
      }
      function u(y) {
        try {
          v(s.throw(y));
        } catch (h) {
          i(h);
        }
      }
      function v(y) {
        y.done ? c(y.value) : a(y.value).then(r, u);
      }
      v((s = s.apply(d, m || [])).next());
    });
  }, t = be && be.__generator || function(d, m) {
    var f = {
      label: 0,
      sent: function() {
        if (c[0] & 1) throw c[1];
        return c[1];
      },
      trys: [],
      ops: []
    }, s, a, c, i;
    return i = { next: r(0), throw: r(1), return: r(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
      return this;
    }), i;
    function r(v) {
      return function(y) {
        return u([v, y]);
      };
    }
    function u(v) {
      if (s) throw new TypeError("Generator is already executing.");
      for (; f; )
        try {
          if (s = 1, a && (c = v[0] & 2 ? a.return : v[0] ? a.throw || ((c = a.return) && c.call(a), 0) : a.next) && !(c = c.call(a, v[1])).done)
            return c;
          switch (a = 0, c && (v = [v[0] & 2, c.value]), v[0]) {
            case 0:
            case 1:
              c = v;
              break;
            case 4:
              return f.label++, { value: v[1], done: !1 };
            case 5:
              f.label++, a = v[1], v = [0];
              continue;
            case 7:
              v = f.ops.pop(), f.trys.pop();
              continue;
            default:
              if (c = f.trys, !(c = c.length > 0 && c[c.length - 1]) && (v[0] === 6 || v[0] === 2)) {
                f = 0;
                continue;
              }
              if (v[0] === 3 && (!c || v[1] > c[0] && v[1] < c[3])) {
                f.label = v[1];
                break;
              }
              if (v[0] === 6 && f.label < c[1]) {
                f.label = c[1], c = v;
                break;
              }
              if (c && f.label < c[2]) {
                f.label = c[2], f.ops.push(v);
                break;
              }
              c[2] && f.ops.pop(), f.trys.pop();
              continue;
          }
          v = m.call(d, f);
        } catch (y) {
          v = [6, y], a = 0;
        } finally {
          s = c = 0;
        }
      if (v[0] & 5) throw v[1];
      return { value: v[0] ? v[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(be, "__esModule", { value: !0 });
  var n = Dr(), l = Ur(), g = (
    /** @class */
    function(d) {
      e(m, d);
      function m(f) {
        var s = d.call(this, f) || this;
        return s.signOut = function(a) {
          return o(s, void 0, void 0, function() {
            return t(this, function(c) {
              switch (c.label) {
                case 0:
                  return [
                    4,
                    l.default.getInstanceOrThrow().signOut({
                      userContext: a.userContext
                    })
                  ];
                case 1:
                  return [2, c.sent()];
              }
            });
          });
        }, s;
      }
      return m;
    }(n.default)
  );
  return be.default = g, be;
}
var tr;
function tn() {
  if (tr) return pe;
  tr = 1;
  var e = pe && pe.__extends || /* @__PURE__ */ function() {
    var f = function(s, a) {
      return f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, i) {
        c.__proto__ = i;
      } || function(c, i) {
        for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (c[r] = i[r]);
      }, f(s, a);
    };
    return function(s, a) {
      if (typeof a != "function" && a !== null)
        throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
      f(s, a);
      function c() {
        this.constructor = s;
      }
      s.prototype = a === null ? Object.create(a) : (c.prototype = a.prototype, new c());
    };
  }(), o = pe && pe.__assign || function() {
    return o = Object.assign || function(f) {
      for (var s, a = 1, c = arguments.length; a < c; a++) {
        s = arguments[a];
        for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (f[i] = s[i]);
      }
      return f;
    }, o.apply(this, arguments);
  };
  Object.defineProperty(pe, "__esModule", { value: !0 }), pe.Recipe = void 0;
  var t = go(), n = Pt(), l = yo(), g = Ie(), d = en(), m = (
    /** @class */
    function(f) {
      e(s, f);
      function s(a) {
        var c = f.call(this, (0, t.normaliseUserInput)(a)) || this, i = new n.default(
          (0, l.default)({
            recipeId: c.config.recipeId,
            appInfo: c.config.appInfo,
            clientType: c.config.clientType,
            preAPIHook: c.config.preAPIHook,
            postAPIHook: c.config.postAPIHook
          })
        );
        return c.recipeImplementation = i.override(c.config.override.functions).build(), c;
      }
      return s.init = function(a) {
        return function(c, i) {
          return s.instance = new s(
            o(o({}, a), { recipeId: s.RECIPE_ID, appInfo: c, clientType: i })
          ), s.instance;
        };
      }, s.getInstanceOrThrow = function() {
        if (s.instance === void 0) {
          var a = "No instance of Multitenancy found. Ensure that 'SuperTokens.init' method has been called.";
          throw a = (0, g.checkForSSRErrorAndAppendIfNeeded)(a), Error(a);
        }
        return s.instance;
      }, s.reset = function() {
        (0, g.isTest)() && (s.instance = void 0);
      }, s.RECIPE_ID = "multitenancy", s;
    }(d.default)
  );
  return pe.Recipe = m, pe.default = m, pe;
}
var Nt = {}, G = {}, Re = {}, Qe = {}, nr;
function Co() {
  if (nr) return Qe;
  nr = 1;
  var e = Qe && Qe.__assign || function() {
    return e = Object.assign || function(n) {
      for (var l, g = 1, d = arguments.length; g < d; g++) {
        l = arguments[g];
        for (var m in l) Object.prototype.hasOwnProperty.call(l, m) && (n[m] = l[m]);
      }
      return n;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(Qe, "__esModule", { value: !0 }), Qe.normaliseUserInput = void 0;
  var o = Yt();
  function t(n) {
    var l = e(
      {
        functions: function(g) {
          return g;
        }
      },
      n.override
    );
    return e(e({}, (0, o.normaliseAuthRecipe)(n)), { override: l });
  }
  return Qe.normaliseUserInput = t, Qe;
}
var de = {}, gt = {}, rr;
function Ao() {
  return rr || (rr = 1, Object.defineProperty(gt, "__esModule", { value: !0 }), gt.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY = void 0, gt.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY = "supertokens-passwordless-loginAttemptInfo"), gt;
}
var or;
function Oo() {
  if (or) return de;
  or = 1;
  var e = de && de.__assign || function() {
    return e = Object.assign || function(s) {
      for (var a, c = 1, i = arguments.length; c < i; c++) {
        a = arguments[c];
        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (s[r] = a[r]);
      }
      return s;
    }, e.apply(this, arguments);
  }, o = de && de.__awaiter || function(s, a, c, i) {
    function r(u) {
      return u instanceof c ? u : new c(function(v) {
        v(u);
      });
    }
    return new (c || (c = Promise))(function(u, v) {
      function y(w) {
        try {
          p(i.next(w));
        } catch (b) {
          v(b);
        }
      }
      function h(w) {
        try {
          p(i.throw(w));
        } catch (b) {
          v(b);
        }
      }
      function p(w) {
        w.done ? u(w.value) : r(w.value).then(y, h);
      }
      p((i = i.apply(s, a || [])).next());
    });
  }, t = de && de.__generator || function(s, a) {
    var c = {
      label: 0,
      sent: function() {
        if (u[0] & 1) throw u[1];
        return u[1];
      },
      trys: [],
      ops: []
    }, i, r, u, v;
    return v = { next: y(0), throw: y(1), return: y(2) }, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
      return this;
    }), v;
    function y(p) {
      return function(w) {
        return h([p, w]);
      };
    }
    function h(p) {
      if (i) throw new TypeError("Generator is already executing.");
      for (; c; )
        try {
          if (i = 1, r && (u = p[0] & 2 ? r.return : p[0] ? r.throw || ((u = r.return) && u.call(r), 0) : r.next) && !(u = u.call(r, p[1])).done)
            return u;
          switch (r = 0, u && (p = [p[0] & 2, u.value]), p[0]) {
            case 0:
            case 1:
              u = p;
              break;
            case 4:
              return c.label++, { value: p[1], done: !1 };
            case 5:
              c.label++, r = p[1], p = [0];
              continue;
            case 7:
              p = c.ops.pop(), c.trys.pop();
              continue;
            default:
              if (u = c.trys, !(u = u.length > 0 && u[u.length - 1]) && (p[0] === 6 || p[0] === 2)) {
                c = 0;
                continue;
              }
              if (p[0] === 3 && (!u || p[1] > u[0] && p[1] < u[3])) {
                c.label = p[1];
                break;
              }
              if (p[0] === 6 && c.label < u[1]) {
                c.label = u[1], u = p;
                break;
              }
              if (u && c.label < u[2]) {
                c.label = u[2], c.ops.push(p);
                break;
              }
              u[2] && c.ops.pop(), c.trys.pop();
              continue;
          }
          p = a.call(s, c);
        } catch (w) {
          p = [6, w], r = 0;
        } finally {
          i = u = 0;
        }
      if (p[0] & 5) throw p[1];
      return { value: p[0] ? p[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(de, "__esModule", { value: !0 }), de.getRecipeImplementation = void 0;
  var n = Xt(), l = Zt(), g = Ie(), d = tn(), m = Ao();
  function f(s) {
    var a = new l.default(s.recipeId, s.appInfo);
    return {
      createCode: function(c) {
        return o(this, void 0, void 0, function() {
          var i, r, u, v, y, h;
          return t(this, function(p) {
            switch (p.label) {
              case 0:
                return "email" in c && (i = {
                  email: c.email,
                  shouldTryLinkingWithSessionUser: c.shouldTryLinkingWithSessionUser
                }), "phoneNumber" in c && (i = {
                  phoneNumber: c.phoneNumber,
                  shouldTryLinkingWithSessionUser: c.shouldTryLinkingWithSessionUser
                }), h = (y = a).post, [
                  4,
                  d.default.getInstanceOrThrow().recipeImplementation.getTenantId({
                    userContext: c.userContext
                  })
                ];
              case 1:
                return [
                  4,
                  h.apply(y, [
                    p.sent(),
                    "/signinup/code",
                    { body: JSON.stringify(i) },
                    l.default.preparePreAPIHook({
                      recipePreAPIHook: s.preAPIHook,
                      action: "PASSWORDLESS_CREATE_CODE",
                      userContext: c.userContext,
                      options: c.options
                    }),
                    l.default.preparePostAPIHook({
                      recipePostAPIHook: s.postAPIHook,
                      action: "PASSWORDLESS_CREATE_CODE",
                      userContext: c.userContext
                    })
                  ])
                ];
              case 2:
                return r = p.sent(), u = r.jsonBody, v = r.fetchResponse, [2, e(e({}, u), { fetchResponse: v })];
            }
          });
        });
      },
      resendCode: function(c) {
        return o(this, void 0, void 0, function() {
          var i, r, u, v;
          return t(this, function(y) {
            switch (y.label) {
              case 0:
                return i = {
                  deviceId: c.deviceId,
                  preAuthSessionId: c.preAuthSessionId,
                  shouldTryLinkingWithSessionUser: c.shouldTryLinkingWithSessionUser
                }, [
                  4,
                  a.post(
                    c.tenantId,
                    "/signinup/code/resend",
                    { body: JSON.stringify(i) },
                    l.default.preparePreAPIHook({
                      recipePreAPIHook: s.preAPIHook,
                      action: "PASSWORDLESS_RESEND_CODE",
                      userContext: c.userContext,
                      options: c.options
                    }),
                    l.default.preparePostAPIHook({
                      recipePostAPIHook: s.postAPIHook,
                      action: "PASSWORDLESS_RESEND_CODE",
                      userContext: c.userContext
                    })
                  )
                ];
              case 1:
                return r = y.sent(), u = r.jsonBody, v = r.fetchResponse, [
                  2,
                  {
                    status: u.status,
                    fetchResponse: v
                  }
                ];
            }
          });
        });
      },
      consumeCode: function(c) {
        return o(this, void 0, void 0, function() {
          var i, r, u, v;
          return t(this, function(y) {
            switch (y.label) {
              case 0:
                return "userInputCode" in c ? i = {
                  userInputCode: c.userInputCode,
                  deviceId: c.deviceId,
                  preAuthSessionId: c.preAuthSessionId,
                  shouldTryLinkingWithSessionUser: c.shouldTryLinkingWithSessionUser
                } : i = {
                  linkCode: c.linkCode,
                  preAuthSessionId: c.preAuthSessionId,
                  shouldTryLinkingWithSessionUser: c.shouldTryLinkingWithSessionUser
                }, [
                  4,
                  a.post(
                    c.tenantId,
                    "/signinup/code/consume",
                    { body: JSON.stringify(i) },
                    l.default.preparePreAPIHook({
                      recipePreAPIHook: s.preAPIHook,
                      action: "PASSWORDLESS_CONSUME_CODE",
                      userContext: c.userContext,
                      options: c.options
                    }),
                    l.default.preparePostAPIHook({
                      recipePostAPIHook: s.postAPIHook,
                      action: "PASSWORDLESS_CONSUME_CODE",
                      userContext: c.userContext
                    })
                  )
                ];
              case 1:
                return r = y.sent(), u = r.jsonBody, v = r.fetchResponse, u.status !== "OK" ? [
                  2,
                  e(e({}, u), { fetchResponse: v })
                ] : [
                  2,
                  e(
                    e(
                      { status: "OK" },
                      (0, g.normaliseUserResponse)("passwordless", u)
                    ),
                    { fetchResponse: v }
                  )
                ];
            }
          });
        });
      },
      getTenantIdFromURL: function() {
        return (0, g.getQueryParams)("tenantId");
      },
      getLinkCodeFromURL: function() {
        return (0, g.getHashFromLocation)();
      },
      getPreAuthSessionIdFromURL: function() {
        var c = (0, g.getQueryParams)("preAuthSessionId");
        return c === void 0 ? "" : c;
      },
      doesEmailExist: function(c) {
        return o(this, void 0, void 0, function() {
          var i, r, u, v, y;
          return t(this, function(h) {
            switch (h.label) {
              case 0:
                return y = (v = a).get, [
                  4,
                  d.default.getInstanceOrThrow().recipeImplementation.getTenantId({
                    userContext: c.userContext
                  })
                ];
              case 1:
                return [
                  4,
                  y.apply(v, [
                    h.sent(),
                    "/passwordless/email/exists",
                    {},
                    { email: c.email },
                    l.default.preparePreAPIHook({
                      recipePreAPIHook: s.preAPIHook,
                      action: "EMAIL_EXISTS",
                      userContext: c.userContext,
                      options: c.options
                    }),
                    l.default.preparePostAPIHook({
                      recipePostAPIHook: s.postAPIHook,
                      action: "EMAIL_EXISTS",
                      userContext: c.userContext
                    })
                  ])
                ];
              case 2:
                return i = h.sent(), r = i.jsonBody, u = i.fetchResponse, [
                  2,
                  {
                    status: r.status,
                    doesExist: r.exists,
                    fetchResponse: u
                  }
                ];
            }
          });
        });
      },
      doesPhoneNumberExist: function(c) {
        return o(this, void 0, void 0, function() {
          var i, r, u, v, y;
          return t(this, function(h) {
            switch (h.label) {
              case 0:
                return y = (v = a).get, [
                  4,
                  d.default.getInstanceOrThrow().recipeImplementation.getTenantId({
                    userContext: c.userContext
                  })
                ];
              case 1:
                return [
                  4,
                  y.apply(v, [
                    h.sent(),
                    "/passwordless/phonenumber/exists",
                    {},
                    { phoneNumber: c.phoneNumber },
                    l.default.preparePreAPIHook({
                      recipePreAPIHook: s.preAPIHook,
                      action: "PHONE_NUMBER_EXISTS",
                      userContext: c.userContext,
                      options: c.options
                    }),
                    l.default.preparePostAPIHook({
                      recipePostAPIHook: s.postAPIHook,
                      action: "PHONE_NUMBER_EXISTS",
                      userContext: c.userContext
                    })
                  ])
                ];
              case 2:
                return i = h.sent(), r = i.jsonBody, u = i.fetchResponse, [
                  2,
                  {
                    status: r.status,
                    doesExist: r.exists,
                    fetchResponse: u
                  }
                ];
            }
          });
        });
      },
      getLoginAttemptInfo: function() {
        return o(this, void 0, void 0, function() {
          var c;
          return t(this, function(i) {
            switch (i.label) {
              case 0:
                return [
                  4,
                  n.WindowHandlerReference.getReferenceOrThrow().windowHandler.localStorage.getItem(
                    m.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY
                  )
                ];
              case 1:
                if (c = i.sent(), c === null)
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
        return o(this, void 0, void 0, function() {
          return t(this, function(i) {
            switch (i.label) {
              case 0:
                return [
                  4,
                  n.WindowHandlerReference.getReferenceOrThrow().windowHandler.localStorage.setItem(
                    m.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY,
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
                return i.sent(), [
                  2
                  /*return*/
                ];
            }
          });
        });
      },
      clearLoginAttemptInfo: function() {
        return o(this, void 0, void 0, function() {
          return t(this, function(c) {
            return n.WindowHandlerReference.getReferenceOrThrow().windowHandler.localStorage.removeItem(
              m.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY
            ), [
              2
              /*return*/
            ];
          });
        });
      }
    };
  }
  return de.default = f, de.getRecipeImplementation = f, de;
}
var ir;
function Po() {
  if (ir) return Re;
  ir = 1;
  var e = Re && Re.__extends || /* @__PURE__ */ function() {
    var f = function(s, a) {
      return f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, i) {
        c.__proto__ = i;
      } || function(c, i) {
        for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (c[r] = i[r]);
      }, f(s, a);
    };
    return function(s, a) {
      if (typeof a != "function" && a !== null)
        throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
      f(s, a);
      function c() {
        this.constructor = s;
      }
      s.prototype = a === null ? Object.create(a) : (c.prototype = a.prototype, new c());
    };
  }(), o = Re && Re.__assign || function() {
    return o = Object.assign || function(f) {
      for (var s, a = 1, c = arguments.length; a < c; a++) {
        s = arguments[a];
        for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (f[i] = s[i]);
      }
      return f;
    }, o.apply(this, arguments);
  };
  Object.defineProperty(Re, "__esModule", { value: !0 }), Re.Recipe = void 0;
  var t = Pt(), n = Ie(), l = en(), g = Co(), d = Oo(), m = (
    /** @class */
    function(f) {
      e(s, f);
      function s(a) {
        var c = f.call(this, (0, g.normaliseUserInput)(a)) || this, i = new t.default(
          (0, d.default)({
            recipeId: c.config.recipeId,
            appInfo: c.config.appInfo,
            clientType: c.config.clientType,
            preAPIHook: c.config.preAPIHook,
            postAPIHook: c.config.postAPIHook
          })
        );
        return c.recipeImplementation = i.override(c.config.override.functions).build(), c;
      }
      return s.init = function(a) {
        return function(c, i) {
          return s.instance = new s(
            o(o({}, a), { recipeId: s.RECIPE_ID, appInfo: c, clientType: i })
          ), s.instance;
        };
      }, s.getInstanceOrThrow = function() {
        if (s.instance === void 0) {
          var a = "No instance of Passwordless found. Ensure that the 'Passwordless.init' method is called within the 'SuperTokens.init' recipeList.";
          throw a = (0, n.checkForSSRErrorAndAppendIfNeeded)(a), Error(a);
        }
        return s.instance;
      }, s.reset = function() {
        (0, n.isTest)() && (s.instance = void 0);
      }, s.RECIPE_ID = "passwordless", s;
    }(l.default)
  );
  return Re.Recipe = m, Re.default = m, Re;
}
var sr;
function Eo() {
  if (sr) return G;
  sr = 1;
  var e = G && G.__assign || function() {
    return e = Object.assign || function(b) {
      for (var S, R = 1, I = arguments.length; R < I; R++) {
        S = arguments[R];
        for (var T in S) Object.prototype.hasOwnProperty.call(S, T) && (b[T] = S[T]);
      }
      return b;
    }, e.apply(this, arguments);
  }, o = G && G.__awaiter || function(b, S, R, I) {
    function T(_) {
      return _ instanceof R ? _ : new R(function(P) {
        P(_);
      });
    }
    return new (R || (R = Promise))(function(_, P) {
      function C(B) {
        try {
          E(I.next(B));
        } catch (K) {
          P(K);
        }
      }
      function x(B) {
        try {
          E(I.throw(B));
        } catch (K) {
          P(K);
        }
      }
      function E(B) {
        B.done ? _(B.value) : T(B.value).then(C, x);
      }
      E((I = I.apply(b, S || [])).next());
    });
  }, t = G && G.__generator || function(b, S) {
    var R = {
      label: 0,
      sent: function() {
        if (_[0] & 1) throw _[1];
        return _[1];
      },
      trys: [],
      ops: []
    }, I, T, _, P;
    return P = { next: C(0), throw: C(1), return: C(2) }, typeof Symbol == "function" && (P[Symbol.iterator] = function() {
      return this;
    }), P;
    function C(E) {
      return function(B) {
        return x([E, B]);
      };
    }
    function x(E) {
      if (I) throw new TypeError("Generator is already executing.");
      for (; R; )
        try {
          if (I = 1, T && (_ = E[0] & 2 ? T.return : E[0] ? T.throw || ((_ = T.return) && _.call(T), 0) : T.next) && !(_ = _.call(T, E[1])).done)
            return _;
          switch (T = 0, _ && (E = [E[0] & 2, _.value]), E[0]) {
            case 0:
            case 1:
              _ = E;
              break;
            case 4:
              return R.label++, { value: E[1], done: !1 };
            case 5:
              R.label++, T = E[1], E = [0];
              continue;
            case 7:
              E = R.ops.pop(), R.trys.pop();
              continue;
            default:
              if (_ = R.trys, !(_ = _.length > 0 && _[_.length - 1]) && (E[0] === 6 || E[0] === 2)) {
                R = 0;
                continue;
              }
              if (E[0] === 3 && (!_ || E[1] > _[0] && E[1] < _[3])) {
                R.label = E[1];
                break;
              }
              if (E[0] === 6 && R.label < _[1]) {
                R.label = _[1], _ = E;
                break;
              }
              if (_ && R.label < _[2]) {
                R.label = _[2], R.ops.push(E);
                break;
              }
              _[2] && R.ops.pop(), R.trys.pop();
              continue;
          }
          E = S.call(b, R);
        } catch (B) {
          E = [6, B], T = 0;
        } finally {
          I = _ = 0;
        }
      if (E[0] & 5) throw E[1];
      return { value: E[0] ? E[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(G, "__esModule", { value: !0 }), G.clearLoginAttemptInfo = G.setLoginAttemptInfo = G.getLoginAttemptInfo = G.getTenantIdFromURL = G.getPreAuthSessionIdFromURL = G.getLinkCodeFromURL = G.signOut = G.doesPhoneNumberExist = G.doesEmailExist = G.consumeCode = G.resendCode = G.createCode = G.init = void 0;
  var n = Ie(), l = tn(), g = Po(), d = (
    /** @class */
    function() {
      function b() {
      }
      return b.init = function(S) {
        return g.default.init(S);
      }, b.createCode = function(S) {
        var R, I;
        return o(this, void 0, void 0, function() {
          var T, _, P, C, x;
          return t(this, function(E) {
            switch (E.label) {
              case 0:
                return T = g.default.getInstanceOrThrow(), _ = T.recipeImplementation, P = (0, n.getNormalisedUserContext)(S.userContext), [
                  4,
                  l.default.getInstanceOrThrow().recipeImplementation.getTenantId({
                    userContext: S.userContext
                  })
                ];
              case 1:
                return C = E.sent(), [
                  4,
                  _.createCode(
                    e(e({}, S), {
                      shouldTryLinkingWithSessionUser: (R = S.shouldTryLinkingWithSessionUser) !== null && R !== void 0 ? R : !1,
                      userContext: P
                    })
                  )
                ];
              case 2:
                return x = E.sent(), x.status !== "OK" ? [3, 4] : [
                  4,
                  _.setLoginAttemptInfo({
                    attemptInfo: {
                      tenantId: C,
                      deviceId: x.deviceId,
                      preAuthSessionId: x.preAuthSessionId,
                      shouldTryLinkingWithSessionUser: (I = S.shouldTryLinkingWithSessionUser) !== null && I !== void 0 ? I : !1,
                      flowType: x.flowType
                    },
                    userContext: P
                  })
                ];
              case 3:
                E.sent(), E.label = 4;
              case 4:
                return [2, x];
            }
          });
        });
      }, b.resendCode = function(S) {
        return o(this, void 0, void 0, function() {
          var R, I, T, _;
          return t(this, function(P) {
            switch (P.label) {
              case 0:
                return R = g.default.getInstanceOrThrow(), I = R.recipeImplementation, T = (0, n.getNormalisedUserContext)(
                  S == null ? void 0 : S.userContext
                ), [
                  4,
                  I.getLoginAttemptInfo({
                    userContext: T
                  })
                ];
              case 1:
                return _ = P.sent(), [
                  2,
                  I.resendCode(
                    e(e({}, S), {
                      tenantId: _ == null ? void 0 : _.tenantId,
                      userContext: T,
                      deviceId: _ === void 0 ? "" : _.deviceId,
                      preAuthSessionId: _ === void 0 ? "" : _.preAuthSessionId,
                      shouldTryLinkingWithSessionUser: _ == null ? void 0 : _.shouldTryLinkingWithSessionUser
                    })
                  )
                ];
            }
          });
        });
      }, b.consumeCode = function(S) {
        var R;
        return o(this, void 0, void 0, function() {
          var I, T, _, P, C, x, x, E, B, K;
          return t(this, function(ne) {
            switch (ne.label) {
              case 0:
                return I = g.default.getInstanceOrThrow(), T = I.recipeImplementation, _ = (0, n.getNormalisedUserContext)(
                  S == null ? void 0 : S.userContext
                ), S !== void 0 && "userInputCode" in S ? [
                  4,
                  T.getLoginAttemptInfo({
                    userContext: _
                  })
                ] : [3, 2];
              case 1:
                return C = ne.sent(), x = (R = C == null ? void 0 : C.shouldTryLinkingWithSessionUser) !== null && R !== void 0 ? R : !1, P = {
                  userInputCode: S.userInputCode,
                  deviceId: C === void 0 ? "" : C.deviceId,
                  preAuthSessionId: C === void 0 ? "" : C.preAuthSessionId,
                  shouldTryLinkingWithSessionUser: x,
                  tenantId: C == null ? void 0 : C.tenantId
                }, [3, 3];
              case 2:
                x = !1, E = T.getLinkCodeFromURL({
                  userContext: _
                }), B = T.getTenantIdFromURL({
                  userContext: _
                }), K = T.getPreAuthSessionIdFromURL({
                  userContext: _
                }), P = {
                  tenantId: B,
                  linkCode: E,
                  preAuthSessionId: K,
                  shouldTryLinkingWithSessionUser: x
                }, ne.label = 3;
              case 3:
                return [
                  2,
                  T.consumeCode(
                    e(
                      {
                        userContext: _,
                        options: S == null ? void 0 : S.options
                      },
                      P
                    )
                  )
                ];
            }
          });
        });
      }, b.getLinkCodeFromURL = function(S) {
        return g.default.getInstanceOrThrow().recipeImplementation.getLinkCodeFromURL(
          e(e({}, S), {
            userContext: (0, n.getNormalisedUserContext)(
              S == null ? void 0 : S.userContext
            )
          })
        );
      }, b.getPreAuthSessionIdFromURL = function(S) {
        return g.default.getInstanceOrThrow().recipeImplementation.getPreAuthSessionIdFromURL(
          e(e({}, S), {
            userContext: (0, n.getNormalisedUserContext)(
              S == null ? void 0 : S.userContext
            )
          })
        );
      }, b.getTenantIdFromURL = function(S) {
        return g.default.getInstanceOrThrow().recipeImplementation.getTenantIdFromURL(
          e(e({}, S), {
            userContext: (0, n.getNormalisedUserContext)(
              S == null ? void 0 : S.userContext
            )
          })
        );
      }, b.doesEmailExist = function(S) {
        return g.default.getInstanceOrThrow().recipeImplementation.doesEmailExist(
          e(e({}, S), { userContext: (0, n.getNormalisedUserContext)(S.userContext) })
        );
      }, b.doesPhoneNumberExist = function(S) {
        return g.default.getInstanceOrThrow().recipeImplementation.doesPhoneNumberExist(
          e(e({}, S), { userContext: (0, n.getNormalisedUserContext)(S.userContext) })
        );
      }, b.getLoginAttemptInfo = function(S) {
        return g.default.getInstanceOrThrow().recipeImplementation.getLoginAttemptInfo(
          e(e({}, S), {
            userContext: (0, n.getNormalisedUserContext)(
              S == null ? void 0 : S.userContext
            )
          })
        );
      }, b.setLoginAttemptInfo = function(S) {
        return o(this, void 0, void 0, function() {
          var R, I, T;
          return t(this, function(_) {
            switch (_.label) {
              case 0:
                return R = (0, n.getNormalisedUserContext)(S.userContext), I = g.default.getInstanceOrThrow(), [
                  4,
                  l.default.getInstanceOrThrow().recipeImplementation.getTenantId({ userContext: R })
                ];
              case 1:
                return T = _.sent(), [
                  2,
                  I.recipeImplementation.setLoginAttemptInfo({
                    attemptInfo: e(
                      {
                        tenantId: T,
                        shouldTryLinkingWithSessionUser: S.attemptInfo.shouldTryLinkingWithSessionUser
                      },
                      S.attemptInfo
                    ),
                    userContext: R
                  })
                ];
            }
          });
        });
      }, b.clearLoginAttemptInfo = function(S) {
        return g.default.getInstanceOrThrow().recipeImplementation.clearLoginAttemptInfo(
          e(e({}, S), {
            userContext: (0, n.getNormalisedUserContext)(
              S == null ? void 0 : S.userContext
            )
          })
        );
      }, b.signOut = function(S) {
        return g.default.getInstanceOrThrow().signOut({
          userContext: (0, n.getNormalisedUserContext)(
            S == null ? void 0 : S.userContext
          )
        });
      }, b;
    }()
  );
  G.default = d;
  var m = d.init;
  G.init = m;
  var f = d.createCode;
  G.createCode = f;
  var s = d.resendCode;
  G.resendCode = s;
  var a = d.consumeCode;
  G.consumeCode = a;
  var c = d.doesEmailExist;
  G.doesEmailExist = c;
  var i = d.doesPhoneNumberExist;
  G.doesPhoneNumberExist = i;
  var r = d.signOut;
  G.signOut = r;
  var u = d.getLinkCodeFromURL;
  G.getLinkCodeFromURL = u;
  var v = d.getPreAuthSessionIdFromURL;
  G.getPreAuthSessionIdFromURL = v;
  var y = d.getTenantIdFromURL;
  G.getTenantIdFromURL = y;
  var h = d.getLoginAttemptInfo;
  G.getLoginAttemptInfo = h;
  var p = d.setLoginAttemptInfo;
  G.setLoginAttemptInfo = p;
  var w = d.clearLoginAttemptInfo;
  return G.clearLoginAttemptInfo = w, G;
}
var ar;
function xo() {
  return ar || (ar = 1, function(e) {
    function o(t) {
      for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
    }
    e.__esModule = !0, o(Eo());
  }(Nt)), Nt;
}
var Do = xo();
const Fi = /* @__PURE__ */ Gt(Do);
var Ft = {}, te = {}, ke = {}, Je = {}, ur;
function Mo() {
  if (ur) return Je;
  ur = 1;
  var e = Je && Je.__assign || function() {
    return e = Object.assign || function(n) {
      for (var l, g = 1, d = arguments.length; g < d; g++) {
        l = arguments[g];
        for (var m in l) Object.prototype.hasOwnProperty.call(l, m) && (n[m] = l[m]);
      }
      return n;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(Je, "__esModule", { value: !0 }), Je.normaliseUserInput = void 0;
  var o = Yt();
  function t(n) {
    var l = e(
      {
        functions: function(g) {
          return g;
        }
      },
      n.override
    );
    return e(e({}, (0, o.normaliseAuthRecipe)(n)), { override: l });
  }
  return Je.normaliseUserInput = t, Je;
}
var fe = {}, cr;
function Lo() {
  if (cr) return fe;
  cr = 1;
  var e = fe && fe.__assign || function() {
    return e = Object.assign || function(f) {
      for (var s, a = 1, c = arguments.length; a < c; a++) {
        s = arguments[a];
        for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (f[i] = s[i]);
      }
      return f;
    }, e.apply(this, arguments);
  }, o = fe && fe.__awaiter || function(f, s, a, c) {
    function i(r) {
      return r instanceof a ? r : new a(function(u) {
        u(r);
      });
    }
    return new (a || (a = Promise))(function(r, u) {
      function v(p) {
        try {
          h(c.next(p));
        } catch (w) {
          u(w);
        }
      }
      function y(p) {
        try {
          h(c.throw(p));
        } catch (w) {
          u(w);
        }
      }
      function h(p) {
        p.done ? r(p.value) : i(p.value).then(v, y);
      }
      h((c = c.apply(f, s || [])).next());
    });
  }, t = fe && fe.__generator || function(f, s) {
    var a = {
      label: 0,
      sent: function() {
        if (r[0] & 1) throw r[1];
        return r[1];
      },
      trys: [],
      ops: []
    }, c, i, r, u;
    return u = { next: v(0), throw: v(1), return: v(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
      return this;
    }), u;
    function v(h) {
      return function(p) {
        return y([h, p]);
      };
    }
    function y(h) {
      if (c) throw new TypeError("Generator is already executing.");
      for (; a; )
        try {
          if (c = 1, i && (r = h[0] & 2 ? i.return : h[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, h[1])).done)
            return r;
          switch (i = 0, r && (h = [h[0] & 2, r.value]), h[0]) {
            case 0:
            case 1:
              r = h;
              break;
            case 4:
              return a.label++, { value: h[1], done: !1 };
            case 5:
              a.label++, i = h[1], h = [0];
              continue;
            case 7:
              h = a.ops.pop(), a.trys.pop();
              continue;
            default:
              if (r = a.trys, !(r = r.length > 0 && r[r.length - 1]) && (h[0] === 6 || h[0] === 2)) {
                a = 0;
                continue;
              }
              if (h[0] === 3 && (!r || h[1] > r[0] && h[1] < r[3])) {
                a.label = h[1];
                break;
              }
              if (h[0] === 6 && a.label < r[1]) {
                a.label = r[1], r = h;
                break;
              }
              if (r && a.label < r[2]) {
                a.label = r[2], a.ops.push(h);
                break;
              }
              r[2] && a.ops.pop(), a.trys.pop();
              continue;
          }
          h = s.call(f, a);
        } catch (p) {
          h = [6, p], i = 0;
        } finally {
          c = r = 0;
        }
      if (h[0] & 5) throw h[1];
      return { value: h[0] ? h[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(fe, "__esModule", { value: !0 }), fe.getRecipeImplementation = void 0;
  var n = Zt(), l = Ie(), g = xr(), d = Xt();
  function m(f) {
    var s = new n.default(f.recipeId, f.appInfo);
    return {
      getStateAndOtherInfoFromStorage: function() {
        var a = d.WindowHandlerReference.getReferenceOrThrow().windowHandler.sessionStorage.getItemSync(
          "supertokens-oauth-state-2"
        );
        if (a !== null)
          try {
            return JSON.parse(a);
          } catch {
            return;
          }
      },
      setStateAndOtherInfoToStorage: function(a) {
        return o(this, void 0, void 0, function() {
          var c;
          return t(this, function(i) {
            switch (i.label) {
              case 0:
                return c = JSON.stringify(e({}, a.state)), [
                  4,
                  d.WindowHandlerReference.getReferenceOrThrow().windowHandler.sessionStorage.setItem(
                    "supertokens-oauth-state-2",
                    c
                  )
                ];
              case 1:
                return i.sent(), [
                  2
                  /*return*/
                ];
            }
          });
        });
      },
      getAuthorisationURLWithQueryParamsAndSetState: function(a) {
        return o(this, void 0, void 0, function() {
          var c, i, r, u, v;
          return t(this, function(y) {
            switch (y.label) {
              case 0:
                return [
                  4,
                  this.getAuthorisationURLFromBackend({
                    thirdPartyId: a.thirdPartyId,
                    tenantId: a.tenantId,
                    redirectURIOnProviderDashboard: a.redirectURIOnProviderDashboard || a.frontendRedirectURI,
                    userContext: a.userContext,
                    options: a.options
                  })
                ];
              case 1:
                return c = y.sent(), i = a.redirectURIOnProviderDashboard !== void 0 && a.frontendRedirectURI !== a.redirectURIOnProviderDashboard ? a.frontendRedirectURI : void 0, r = this.generateStateToSendToOAuthProvider({
                  frontendRedirectURI: i,
                  userContext: a.userContext
                }), u = Date.now() + 1e3 * 60 * 10, [
                  4,
                  this.setStateAndOtherInfoToStorage({
                    state: {
                      stateForAuthProvider: r,
                      thirdPartyId: a.thirdPartyId,
                      tenantId: a.tenantId,
                      expiresAt: u,
                      redirectURIOnProviderDashboard: a.redirectURIOnProviderDashboard || a.frontendRedirectURI,
                      shouldTryLinkingWithSessionUser: a.shouldTryLinkingWithSessionUser,
                      pkceCodeVerifier: c.pkceCodeVerifier
                    },
                    userContext: a.userContext
                  })
                ];
              case 2:
                return y.sent(), v = (0, l.appendQueryParamsToURL)(c.urlWithQueryParams, {
                  state: r
                }), [2, v];
            }
          });
        });
      },
      getAuthorisationURLFromBackend: function(a) {
        return o(this, void 0, void 0, function() {
          var c, i, r, u;
          return t(this, function(v) {
            switch (v.label) {
              case 0:
                return c = {
                  thirdPartyId: a.thirdPartyId,
                  redirectURIOnProviderDashboard: a.redirectURIOnProviderDashboard
                }, f.clientType !== void 0 && (c.clientType = f.clientType), [
                  4,
                  s.get(
                    a.tenantId,
                    "/authorisationurl",
                    {},
                    c,
                    n.default.preparePreAPIHook({
                      recipePreAPIHook: f.preAPIHook,
                      action: "GET_AUTHORISATION_URL",
                      options: a.options,
                      userContext: a.userContext
                    }),
                    n.default.preparePostAPIHook({
                      recipePostAPIHook: f.postAPIHook,
                      action: "GET_AUTHORISATION_URL",
                      userContext: a.userContext
                    })
                  )
                ];
              case 1:
                return i = v.sent(), r = i.jsonBody, u = i.fetchResponse, [
                  2,
                  {
                    status: "OK",
                    urlWithQueryParams: r.urlWithQueryParams,
                    pkceCodeVerifier: r.pkceCodeVerifier,
                    fetchResponse: u
                  }
                ];
            }
          });
        });
      },
      signInAndUp: function(a) {
        return o(this, void 0, void 0, function() {
          var c, i, r, u, v, y, h, p, w;
          return t(this, function(b) {
            switch (b.label) {
              case 0:
                return c = this.getStateAndOtherInfoFromStorage({
                  userContext: a.userContext
                }), i = this.getAuthStateFromURL({
                  userContext: a.userContext
                }), [
                  4,
                  this.verifyAndGetStateOrThrowError({
                    stateFromAuthProvider: i,
                    stateObjectFromStorage: c,
                    userContext: a.userContext
                  })
                ];
              case 1:
                if (r = b.sent(), u = this.getAuthErrorFromURL({
                  userContext: a.userContext
                }), u !== void 0)
                  throw new Error("Auth provider responded with error: ".concat(u));
                return v = (0, l.getAllQueryParams)(), y = Object.fromEntries(v), [
                  4,
                  s.post(
                    r.tenantId,
                    "/signinup",
                    {
                      body: JSON.stringify({
                        thirdPartyId: r.thirdPartyId,
                        clientType: f.clientType,
                        redirectURIInfo: {
                          redirectURIOnProviderDashboard: r.redirectURIOnProviderDashboard,
                          redirectURIQueryParams: y,
                          pkceCodeVerifier: r.pkceCodeVerifier
                        },
                        shouldTryLinkingWithSessionUser: r.shouldTryLinkingWithSessionUser
                      })
                    },
                    n.default.preparePreAPIHook({
                      recipePreAPIHook: f.preAPIHook,
                      action: "THIRD_PARTY_SIGN_IN_UP",
                      options: a.options,
                      userContext: a.userContext
                    }),
                    n.default.preparePostAPIHook({
                      recipePostAPIHook: f.postAPIHook,
                      action: "THIRD_PARTY_SIGN_IN_UP",
                      userContext: a.userContext
                    })
                  )
                ];
              case 2:
                if (h = b.sent(), p = h.jsonBody, w = h.fetchResponse, p.status === "FIELD_ERROR")
                  throw new g.default(p.error);
                return p.status !== "OK" ? [
                  2,
                  e(e({}, p), { fetchResponse: w })
                ] : [
                  2,
                  e(
                    e(
                      { status: "OK" },
                      (0, l.normaliseUserResponse)("thirdparty", p)
                    ),
                    { fetchResponse: w }
                  )
                ];
            }
          });
        });
      },
      generateStateToSendToOAuthProvider: function(a) {
        var c = {
          state: "".concat(1e20).replace(/[018]/g, function(i) {
            return (parseInt(i) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> parseInt(i) / 4).toString(16);
          })
        };
        return a !== void 0 && a.frontendRedirectURI !== void 0 && (c.frontendRedirectURI = a.frontendRedirectURI), btoa(JSON.stringify(c));
      },
      verifyAndGetStateOrThrowError: function(a) {
        return o(this, void 0, void 0, function() {
          return t(this, function(c) {
            if (a.stateObjectFromStorage === void 0 || a.stateObjectFromStorage.stateForAuthProvider === void 0)
              throw new Error("No valid auth state present in session storage");
            if (a.stateFromAuthProvider === void 0)
              throw new Error("No state recieved from auth provider");
            if (a.stateObjectFromStorage.expiresAt < Date.now())
              throw new Error("Auth state verification failed. The auth provider took too long to respond");
            if (a.stateFromAuthProvider !== a.stateObjectFromStorage.stateForAuthProvider)
              throw new Error(
                "Auth state verification failed. The auth provider responded with an invalid state"
              );
            return [2, a.stateObjectFromStorage];
          });
        });
      },
      getAuthErrorFromURL: function() {
        return (0, l.getQueryParams)("error");
      },
      getAuthStateFromURL: function() {
        var a = (0, l.getQueryParams)("state");
        return a === void 0 ? "" : a;
      }
    };
  }
  return fe.default = m, fe.getRecipeImplementation = m, fe;
}
var lr;
function Uo() {
  if (lr) return ke;
  lr = 1;
  var e = ke && ke.__extends || /* @__PURE__ */ function() {
    var f = function(s, a) {
      return f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, i) {
        c.__proto__ = i;
      } || function(c, i) {
        for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (c[r] = i[r]);
      }, f(s, a);
    };
    return function(s, a) {
      if (typeof a != "function" && a !== null)
        throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
      f(s, a);
      function c() {
        this.constructor = s;
      }
      s.prototype = a === null ? Object.create(a) : (c.prototype = a.prototype, new c());
    };
  }(), o = ke && ke.__assign || function() {
    return o = Object.assign || function(f) {
      for (var s, a = 1, c = arguments.length; a < c; a++) {
        s = arguments[a];
        for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (f[i] = s[i]);
      }
      return f;
    }, o.apply(this, arguments);
  };
  Object.defineProperty(ke, "__esModule", { value: !0 }), ke.Recipe = void 0;
  var t = Mo(), n = Pt(), l = Lo(), g = Ie(), d = en(), m = (
    /** @class */
    function(f) {
      e(s, f);
      function s(a) {
        var c = f.call(this, (0, t.normaliseUserInput)(a)) || this, i = new n.default(
          (0, l.default)({
            recipeId: c.config.recipeId,
            appInfo: c.config.appInfo,
            clientType: c.config.clientType,
            preAPIHook: c.config.preAPIHook,
            postAPIHook: c.config.postAPIHook
          })
        );
        return c.recipeImplementation = i.override(c.config.override.functions).build(), c;
      }
      return s.init = function(a) {
        return function(c, i) {
          return s.instance = new s(
            o(o({}, a), { recipeId: s.RECIPE_ID, appInfo: c, clientType: i })
          ), s.instance;
        };
      }, s.getInstanceOrThrow = function() {
        if (s.instance === void 0) {
          var a = "No instance of ThirdParty found. Ensure that the 'ThirdParty.init' method is called within the 'SuperTokens.init' recipeList.";
          throw a = (0, g.checkForSSRErrorAndAppendIfNeeded)(a), Error(a);
        }
        return s.instance;
      }, s.reset = function() {
        (0, g.isTest)() && (s.instance = void 0);
      }, s.RECIPE_ID = "thirdparty", s;
    }(d.default)
  );
  return ke.Recipe = m, ke.default = m, ke;
}
var dr;
function Ho() {
  if (dr) return te;
  dr = 1;
  var e = te && te.__assign || function() {
    return e = Object.assign || function(i) {
      for (var r, u = 1, v = arguments.length; u < v; u++) {
        r = arguments[u];
        for (var y in r) Object.prototype.hasOwnProperty.call(r, y) && (i[y] = r[y]);
      }
      return i;
    }, e.apply(this, arguments);
  }, o = te && te.__awaiter || function(i, r, u, v) {
    function y(h) {
      return h instanceof u ? h : new u(function(p) {
        p(h);
      });
    }
    return new (u || (u = Promise))(function(h, p) {
      function w(R) {
        try {
          S(v.next(R));
        } catch (I) {
          p(I);
        }
      }
      function b(R) {
        try {
          S(v.throw(R));
        } catch (I) {
          p(I);
        }
      }
      function S(R) {
        R.done ? h(R.value) : y(R.value).then(w, b);
      }
      S((v = v.apply(i, r || [])).next());
    });
  }, t = te && te.__generator || function(i, r) {
    var u = {
      label: 0,
      sent: function() {
        if (h[0] & 1) throw h[1];
        return h[1];
      },
      trys: [],
      ops: []
    }, v, y, h, p;
    return p = { next: w(0), throw: w(1), return: w(2) }, typeof Symbol == "function" && (p[Symbol.iterator] = function() {
      return this;
    }), p;
    function w(S) {
      return function(R) {
        return b([S, R]);
      };
    }
    function b(S) {
      if (v) throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (v = 1, y && (h = S[0] & 2 ? y.return : S[0] ? y.throw || ((h = y.return) && h.call(y), 0) : y.next) && !(h = h.call(y, S[1])).done)
            return h;
          switch (y = 0, h && (S = [S[0] & 2, h.value]), S[0]) {
            case 0:
            case 1:
              h = S;
              break;
            case 4:
              return u.label++, { value: S[1], done: !1 };
            case 5:
              u.label++, y = S[1], S = [0];
              continue;
            case 7:
              S = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (h = u.trys, !(h = h.length > 0 && h[h.length - 1]) && (S[0] === 6 || S[0] === 2)) {
                u = 0;
                continue;
              }
              if (S[0] === 3 && (!h || S[1] > h[0] && S[1] < h[3])) {
                u.label = S[1];
                break;
              }
              if (S[0] === 6 && u.label < h[1]) {
                u.label = h[1], h = S;
                break;
              }
              if (h && u.label < h[2]) {
                u.label = h[2], u.ops.push(S);
                break;
              }
              h[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          S = r.call(i, u);
        } catch (R) {
          S = [6, R], y = 0;
        } finally {
          v = h = 0;
        }
      if (S[0] & 5) throw S[1];
      return { value: S[0] ? S[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(te, "__esModule", { value: !0 }), te.signOut = te.signInAndUp = te.getAuthorisationURLWithQueryParamsAndSetState = te.getStateAndOtherInfoFromStorage = te.init = void 0;
  var n = Ie(), l = tn(), g = Uo(), d = (
    /** @class */
    function() {
      function i() {
      }
      return i.init = function(r) {
        return g.default.init(r);
      }, i.signOut = function(r) {
        return g.default.getInstanceOrThrow().signOut({
          userContext: (0, n.getNormalisedUserContext)(
            r == null ? void 0 : r.userContext
          )
        });
      }, i.getStateAndOtherInfoFromStorage = function(r) {
        return g.default.getInstanceOrThrow().recipeImplementation.getStateAndOtherInfoFromStorage(
          e(e({}, r), {
            userContext: (0, n.getNormalisedUserContext)(
              r == null ? void 0 : r.userContext
            )
          })
        );
      }, i.getAuthorisationURLWithQueryParamsAndSetState = function(r) {
        return o(this, void 0, void 0, function() {
          var u, v, y;
          return t(this, function(h) {
            switch (h.label) {
              case 0:
                return u = (0, n.getNormalisedUserContext)(r.userContext), v = g.default.getInstanceOrThrow(), [
                  4,
                  l.default.getInstanceOrThrow().recipeImplementation.getTenantId({ userContext: u })
                ];
              case 1:
                return y = h.sent(), [
                  2,
                  v.recipeImplementation.getAuthorisationURLWithQueryParamsAndSetState(
                    e(e({ tenantId: y }, r), {
                      shouldTryLinkingWithSessionUser: r == null ? void 0 : r.shouldTryLinkingWithSessionUser,
                      userContext: u
                    })
                  )
                ];
            }
          });
        });
      }, i.signInAndUp = function(r) {
        return g.default.getInstanceOrThrow().recipeImplementation.signInAndUp(
          e(e({}, r), {
            userContext: (0, n.getNormalisedUserContext)(
              r == null ? void 0 : r.userContext
            )
          })
        );
      }, i;
    }()
  );
  te.default = d;
  var m = d.init;
  te.init = m;
  var f = d.getAuthorisationURLWithQueryParamsAndSetState;
  te.getAuthorisationURLWithQueryParamsAndSetState = f;
  var s = d.getStateAndOtherInfoFromStorage;
  te.getStateAndOtherInfoFromStorage = s;
  var a = d.signInAndUp;
  te.signInAndUp = a;
  var c = d.signOut;
  return te.signOut = c, te;
}
var fr;
function No() {
  return fr || (fr = 1, function(e) {
    function o(t) {
      for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
    }
    e.__esModule = !0, o(Ho());
  }(Ft)), Ft;
}
var Fo = No();
const qi = /* @__PURE__ */ Gt(Fo);
var qt = {}, Ye = {}, hr;
function qo() {
  return hr || (hr = 1, function(e) {
    var o = Ye && Ye.__awaiter || function(p, w, b, S) {
      function R(I) {
        return I instanceof b ? I : new b(function(T) {
          T(I);
        });
      }
      return new (b || (b = Promise))(function(I, T) {
        function _(x) {
          try {
            C(S.next(x));
          } catch (E) {
            T(E);
          }
        }
        function P(x) {
          try {
            C(S.throw(x));
          } catch (E) {
            T(E);
          }
        }
        function C(x) {
          x.done ? I(x.value) : R(x.value).then(_, P);
        }
        C((S = S.apply(p, w || [])).next());
      });
    }, t = Ye && Ye.__generator || function(p, w) {
      var b = {
        label: 0,
        sent: function() {
          if (I[0] & 1) throw I[1];
          return I[1];
        },
        trys: [],
        ops: []
      }, S, R, I, T;
      return T = { next: _(0), throw: _(1), return: _(2) }, typeof Symbol == "function" && (T[Symbol.iterator] = function() {
        return this;
      }), T;
      function _(C) {
        return function(x) {
          return P([C, x]);
        };
      }
      function P(C) {
        if (S) throw new TypeError("Generator is already executing.");
        for (; b; )
          try {
            if (S = 1, R && (I = C[0] & 2 ? R.return : C[0] ? R.throw || ((I = R.return) && I.call(R), 0) : R.next) && !(I = I.call(R, C[1])).done)
              return I;
            switch (R = 0, I && (C = [C[0] & 2, I.value]), C[0]) {
              case 0:
              case 1:
                I = C;
                break;
              case 4:
                return b.label++, { value: C[1], done: !1 };
              case 5:
                b.label++, R = C[1], C = [0];
                continue;
              case 7:
                C = b.ops.pop(), b.trys.pop();
                continue;
              default:
                if (I = b.trys, !(I = I.length > 0 && I[I.length - 1]) && (C[0] === 6 || C[0] === 2)) {
                  b = 0;
                  continue;
                }
                if (C[0] === 3 && (!I || C[1] > I[0] && C[1] < I[3])) {
                  b.label = C[1];
                  break;
                }
                if (C[0] === 6 && b.label < I[1]) {
                  b.label = I[1], I = C;
                  break;
                }
                if (I && b.label < I[2]) {
                  b.label = I[2], b.ops.push(C);
                  break;
                }
                I[2] && b.ops.pop(), b.trys.pop();
                continue;
            }
            C = w.call(p, b);
          } catch (x) {
            C = [6, x], R = 0;
          } finally {
            S = I = 0;
          }
        if (C[0] & 5) throw C[1];
        return { value: C[0] ? C[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.getInvalidClaimsFromResponse = e.getClaimValue = e.validateClaims = e.signOut = e.addAxiosInterceptors = e.doesSessionExist = e.attemptRefreshingSession = e.getAccessToken = e.getAccessTokenPayloadSecurely = e.getUserId = e.init = e.BooleanClaim = e.PrimitiveArrayClaim = e.PrimitiveClaim = void 0;
    var n = Ie(), l = Ur(), g = (
      /** @class */
      function() {
        function p() {
        }
        return p.init = function(w) {
          return l.default.init(w);
        }, p.getUserId = function(w) {
          return l.default.getInstanceOrThrow().getUserId({
            userContext: (0, n.getNormalisedUserContext)(
              w == null ? void 0 : w.userContext
            )
          });
        }, p.getAccessToken = function(w) {
          return l.default.getInstanceOrThrow().getAccessToken({
            userContext: (0, n.getNormalisedUserContext)(
              w == null ? void 0 : w.userContext
            )
          });
        }, p.getAccessTokenPayloadSecurely = function(w) {
          return o(this, void 0, void 0, function() {
            return t(this, function(b) {
              return [
                2,
                l.default.getInstanceOrThrow().getAccessTokenPayloadSecurely({
                  userContext: (0, n.getNormalisedUserContext)(
                    w == null ? void 0 : w.userContext
                  )
                })
              ];
            });
          });
        }, p.attemptRefreshingSession = function() {
          return o(this, void 0, void 0, function() {
            return t(this, function(w) {
              return [2, l.default.getInstanceOrThrow().attemptRefreshingSession()];
            });
          });
        }, p.doesSessionExist = function(w) {
          return l.default.getInstanceOrThrow().doesSessionExist({
            userContext: (0, n.getNormalisedUserContext)(
              w == null ? void 0 : w.userContext
            )
          });
        }, p.addAxiosInterceptors = function(w, b) {
          return l.default.addAxiosInterceptors(w, (0, n.getNormalisedUserContext)(b));
        }, p.signOut = function(w) {
          return l.default.getInstanceOrThrow().signOut({
            userContext: (0, n.getNormalisedUserContext)(
              w == null ? void 0 : w.userContext
            )
          });
        }, p.getClaimValue = function(w) {
          return l.default.getInstanceOrThrow().getClaimValue({
            claim: w.claim,
            userContext: (0, n.getNormalisedUserContext)(
              w == null ? void 0 : w.userContext
            )
          });
        }, p.validateClaims = function(w) {
          return l.default.getInstanceOrThrow().validateClaims({
            overrideGlobalClaimValidators: w == null ? void 0 : w.overrideGlobalClaimValidators,
            userContext: (0, n.getNormalisedUserContext)(
              w == null ? void 0 : w.userContext
            )
          });
        }, p.getInvalidClaimsFromResponse = function(w) {
          return l.default.getInstanceOrThrow().getInvalidClaimsFromResponse({
            response: w.response,
            userContext: (0, n.getNormalisedUserContext)(
              w == null ? void 0 : w.userContext
            )
          });
        }, p;
      }()
    );
    e.default = g;
    var d = g.init;
    e.init = d;
    var m = g.getUserId;
    e.getUserId = m;
    var f = g.getAccessTokenPayloadSecurely;
    e.getAccessTokenPayloadSecurely = f;
    var s = g.getAccessToken;
    e.getAccessToken = s;
    var a = g.attemptRefreshingSession;
    e.attemptRefreshingSession = a;
    var c = g.doesSessionExist;
    e.doesSessionExist = c;
    var i = g.addAxiosInterceptors;
    e.addAxiosInterceptors = i;
    var r = g.signOut;
    e.signOut = r;
    var u = g.validateClaims;
    e.validateClaims = u;
    var v = g.getClaimValue;
    e.getClaimValue = v;
    var y = g.getInvalidClaimsFromResponse;
    e.getInvalidClaimsFromResponse = y;
    var h = Lr();
    Object.defineProperty(e, "PrimitiveClaim", {
      enumerable: !0,
      get: function() {
        return h.PrimitiveClaim;
      }
    }), Object.defineProperty(e, "PrimitiveArrayClaim", {
      enumerable: !0,
      get: function() {
        return h.PrimitiveArrayClaim;
      }
    }), Object.defineProperty(e, "BooleanClaim", {
      enumerable: !0,
      get: function() {
        return h.BooleanClaim;
      }
    });
  }(Ye)), Ye;
}
var gr;
function jo() {
  return gr || (gr = 1, function(e) {
    function o(t) {
      for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
    }
    e.__esModule = !0, o(qo());
  }(qt)), qt;
}
var $o = jo();
const ji = /* @__PURE__ */ Gt($o);
var Vo = Object.defineProperty, vr = Object.getOwnPropertySymbols, Wo = Object.prototype.hasOwnProperty, Bo = Object.prototype.propertyIsEnumerable, mr = (e, o, t) => o in e ? Vo(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, Go = (e, o) => {
  for (var t in o || (o = {}))
    Wo.call(o, t) && mr(e, t, o[t]);
  if (vr)
    for (var t of vr(o))
      Bo.call(o, t) && mr(e, t, o[t]);
  return e;
};
function nn(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && typeof e == "object" && Object.keys(e).length === 0;
}
function Xo(e) {
  return typeof e == "function" && "call" in e && "apply" in e;
}
function Y(e) {
  return !nn(e);
}
function Fe(e, o = !0) {
  return e instanceof Object && e.constructor === Object && (o || Object.keys(e).length !== 0);
}
function Hr(e = {}, o = {}) {
  const t = Go({}, e);
  return Object.keys(o).forEach((n) => {
    const l = n;
    Fe(o[l]) && l in e && Fe(e[l]) ? t[l] = Hr(e[l], o[l]) : t[l] = o[l];
  }), t;
}
function Nr(...e) {
  return e.reduce((o, t, n) => n === 0 ? t : Hr(o, t), {});
}
function $i(e, o) {
  let t = -1;
  if (Y(e))
    try {
      t = e.findLastIndex(o);
    } catch {
      t = e.lastIndexOf([...e].reverse().find(o));
    }
  return t;
}
function Ue(e, ...o) {
  return Xo(e) ? e(...o) : e;
}
function qe(e, o = !0) {
  return typeof e == "string" && (o || e !== "");
}
function pr(e) {
  return qe(e) ? e.replace(/(-|_)/g, "").toLowerCase() : e;
}
function zo(e, o = "", t = {}) {
  const n = pr(o).split("."), l = n.shift();
  if (l) {
    if (Fe(e)) {
      const g = Object.keys(e).find((d) => pr(d) === l) || "";
      return zo(Ue(e[g], t), n.join("."), t);
    }
    return;
  }
  return Ue(e, t);
}
function Fr(e, o = !0) {
  return Array.isArray(e) && (o || e.length !== 0);
}
function Ko(e) {
  return Y(e) && !isNaN(e);
}
function Vi(e = "") {
  return Y(e) && e.length === 1 && !!e.match(/\S| /);
}
function He(e, o) {
  if (o) {
    const t = o.test(e);
    return o.lastIndex = 0, t;
  }
  return !1;
}
function Wi(...e) {
  return Nr(...e);
}
function vt(e) {
  return e && e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":");
}
function Bi(e) {
  return qe(e, !1) ? e[0].toUpperCase() + e.slice(1) : e;
}
function qr(e) {
  return qe(e) ? e.replace(/(_)/g, "-").replace(/[A-Z]/g, (o, t) => t === 0 ? o : "-" + o.toLowerCase()).toLowerCase() : e;
}
function yr(e) {
  return qe(e) ? e.replace(/[A-Z]/g, (o, t) => t === 0 ? o : "." + o.toLowerCase()).toLowerCase() : e;
}
function jr() {
  const e = /* @__PURE__ */ new Map();
  return {
    on(o, t) {
      let n = e.get(o);
      return n ? n.push(t) : n = [t], e.set(o, n), this;
    },
    off(o, t) {
      const n = e.get(o);
      return n && n.splice(n.indexOf(t) >>> 0, 1), this;
    },
    emit(o, t) {
      const n = e.get(o);
      n && n.forEach((l) => {
        l(t);
      });
    },
    clear() {
      e.clear();
    }
  };
}
function Qo(e, o) {
  return e ? e.classList ? e.classList.contains(o) : new RegExp("(^| )" + o + "( |$)", "gi").test(e.className) : !1;
}
function Gi(e, o) {
  if (e && o) {
    const t = (n) => {
      Qo(e, n) || (e.classList ? e.classList.add(n) : e.className += " " + n);
    };
    [o].flat().filter(Boolean).forEach((n) => n.split(" ").forEach(t));
  }
}
function Xi(e, o) {
  if (e && o) {
    const t = (n) => {
      e.classList ? e.classList.remove(n) : e.className = e.className.replace(new RegExp("(^|\\b)" + n.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [o].flat().filter(Boolean).forEach((n) => n.split(" ").forEach(t));
  }
}
function wr(e) {
  for (const o of document == null ? void 0 : document.styleSheets)
    try {
      for (const t of o == null ? void 0 : o.cssRules)
        for (const n of t == null ? void 0 : t.style)
          if (e.test(n))
            return { name: n, value: t.style.getPropertyValue(n).trim() };
    } catch {
    }
  return null;
}
function Jo(e) {
  const o = { width: 0, height: 0 };
  return e && (e.style.visibility = "hidden", e.style.display = "block", o.width = e.offsetWidth, o.height = e.offsetHeight, e.style.display = "none", e.style.visibility = "visible"), o;
}
function $r() {
  const e = window, o = document, t = o.documentElement, n = o.getElementsByTagName("body")[0], l = e.innerWidth || t.clientWidth || n.clientWidth, g = e.innerHeight || t.clientHeight || n.clientHeight;
  return { width: l, height: g };
}
function Wt(e) {
  return e ? Math.abs(e.scrollLeft) : 0;
}
function Yo() {
  const e = document.documentElement;
  return (window.pageXOffset || Wt(e)) - (e.clientLeft || 0);
}
function Zo() {
  const e = document.documentElement;
  return (window.pageYOffset || e.scrollTop) - (e.clientTop || 0);
}
function ei(e) {
  return e ? getComputedStyle(e).direction === "rtl" : !1;
}
function zi(e, o, t = !0) {
  var n, l, g, d;
  if (e) {
    const m = e.offsetParent ? { width: e.offsetWidth, height: e.offsetHeight } : Jo(e), f = m.height, s = m.width, a = o.offsetHeight, c = o.offsetWidth, i = o.getBoundingClientRect(), r = Zo(), u = Yo(), v = $r();
    let y, h, p = "top";
    i.top + a + f > v.height ? (y = i.top + r - f, p = "bottom", y < 0 && (y = r)) : y = a + i.top + r, i.left + s > v.width ? h = Math.max(0, i.left + u + c - s) : h = i.left + u, ei(e) ? e.style.insetInlineEnd = h + "px" : e.style.insetInlineStart = h + "px", e.style.top = y + "px", e.style.transformOrigin = p, t && (e.style.marginTop = p === "bottom" ? `calc(${(l = (n = wr(/-anchor-gutter$/)) == null ? void 0 : n.value) != null ? l : "2px"} * -1)` : (d = (g = wr(/-anchor-gutter$/)) == null ? void 0 : g.value) != null ? d : "");
  }
}
function ti(e, o) {
  e && (typeof o == "string" ? e.style.cssText = o : Object.entries(o || {}).forEach(([t, n]) => e.style[t] = n));
}
function ni(e, o) {
  return e instanceof HTMLElement ? e.offsetWidth : 0;
}
function Vr(e) {
  if (e) {
    let o = e.parentNode;
    return o && o instanceof ShadowRoot && o.host && (o = o.host), o;
  }
  return null;
}
function ri(e) {
  return !!(e !== null && typeof e < "u" && e.nodeName && Vr(e));
}
function Et(e) {
  return typeof Element < "u" ? e instanceof Element : e !== null && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
}
var jt = void 0;
function br(e) {
  {
    if (jt != null) return jt;
    const o = document.createElement("div");
    ti(o, {
      width: "100px",
      height: "100px",
      overflow: "scroll",
      position: "absolute",
      top: "-9999px"
    }), document.body.appendChild(o);
    const t = o.offsetWidth - o.clientWidth;
    return document.body.removeChild(o), jt = t, t;
  }
}
function At(e, o = {}) {
  if (Et(e)) {
    const t = (n, l) => {
      var g, d;
      const m = (g = e == null ? void 0 : e.$attrs) != null && g[n] ? [(d = e == null ? void 0 : e.$attrs) == null ? void 0 : d[n]] : [];
      return [l].flat().reduce((f, s) => {
        if (s != null) {
          const a = typeof s;
          if (a === "string" || a === "number")
            f.push(s);
          else if (a === "object") {
            const c = Array.isArray(s) ? t(n, s) : Object.entries(s).map(([i, r]) => n === "style" && (r || r === 0) ? `${i.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${r}` : r ? i : void 0);
            f = c.length ? f.concat(c.filter((i) => !!i)) : f;
          }
        }
        return f;
      }, m);
    };
    Object.entries(o).forEach(([n, l]) => {
      if (l != null) {
        const g = n.match(/^on(.+)/);
        g ? e.addEventListener(g[1].toLowerCase(), l) : n === "p-bind" || n === "pBind" ? At(e, l) : (l = n === "class" ? [...new Set(t("class", l))].join(" ").trim() : n === "style" ? t("style", l).join(";").trim() : l, (e.$attrs = e.$attrs || {}) && (e.$attrs[n] = l), e.setAttribute(n, l));
      }
    });
  }
}
function Ki(e, o = {}, ...t) {
  {
    const n = document.createElement(e);
    return At(n, o), n.append(...t), n;
  }
}
function oi(e, o) {
  return Et(e) ? e.matches(o) ? e : e.querySelector(o) : null;
}
function Qi(e, o) {
  e && document.activeElement !== e && e.focus(o);
}
function Ji(e, o) {
  if (Et(e)) {
    const t = e.getAttribute(o);
    return isNaN(t) ? t === "true" || t === "false" ? t === "true" : t : +t;
  }
}
function Yi(e) {
  if (e) {
    let o = e.offsetHeight;
    const t = getComputedStyle(e);
    return o -= parseFloat(t.paddingTop) + parseFloat(t.paddingBottom) + parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), o;
  }
  return 0;
}
function ii(e) {
  if (e) {
    e.style.visibility = "hidden", e.style.display = "block";
    const o = e.offsetHeight;
    return e.style.display = "none", e.style.visibility = "visible", o;
  }
  return 0;
}
function si(e) {
  if (e) {
    e.style.visibility = "hidden", e.style.display = "block";
    const o = e.offsetWidth;
    return e.style.display = "none", e.style.visibility = "visible", o;
  }
  return 0;
}
function ai(e) {
  if (e) {
    const o = e.getBoundingClientRect();
    return {
      top: o.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: o.left + (window.pageXOffset || Wt(document.documentElement) || Wt(document.body) || 0)
    };
  }
  return {
    top: "auto",
    left: "auto"
  };
}
function ui(e, o) {
  return e ? e.offsetHeight : 0;
}
function Wr(e, o = []) {
  const t = Vr(e);
  return t === null ? o : Wr(t, o.concat([t]));
}
function Zi(e) {
  const o = [];
  if (e) {
    const t = Wr(e), n = /(auto|scroll)/, l = (g) => {
      try {
        const d = window.getComputedStyle(g, null);
        return n.test(d.getPropertyValue("overflow")) || n.test(d.getPropertyValue("overflowX")) || n.test(d.getPropertyValue("overflowY"));
      } catch {
        return !1;
      }
    };
    for (const g of t) {
      const d = g.nodeType === 1 && g.dataset.scrollselectors;
      if (d) {
        const m = d.split(",");
        for (const f of m) {
          const s = oi(g, f);
          s && l(s) && o.push(s);
        }
      }
      g.nodeType !== 9 && l(g) && o.push(g);
    }
  }
  return o;
}
function es(e) {
  if (e) {
    let o = e.offsetWidth;
    const t = getComputedStyle(e);
    return o -= parseFloat(t.paddingLeft) + parseFloat(t.paddingRight) + parseFloat(t.borderLeftWidth) + parseFloat(t.borderRightWidth), o;
  }
  return 0;
}
function ci() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function ts() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
function ns(e, o) {
  var t, n;
  if (e) {
    const l = e.parentElement, g = ai(l), d = $r(), m = e.offsetParent ? e.offsetWidth : si(e), f = e.offsetParent ? e.offsetHeight : ii(e), s = ni((t = l == null ? void 0 : l.children) == null ? void 0 : t[0]), a = ui((n = l == null ? void 0 : l.children) == null ? void 0 : n[0]);
    let c = "", i = "";
    g.left + s + m > d.width - br() ? g.left < m ? o % 2 === 1 ? c = g.left ? "-" + g.left + "px" : "100%" : o % 2 === 0 && (c = d.width - m - br() + "px") : c = "-100%" : c = "100%", e.getBoundingClientRect().top + a + f > d.height ? i = `-${f - a}px` : i = "0px", e.style.top = i, e.style.insetInlineStart = c;
  }
}
function li(e, o = "", t) {
  Et(e) && t !== null && t !== void 0 && e.setAttribute(o, t);
}
var di = Object.defineProperty, fi = Object.defineProperties, hi = Object.getOwnPropertyDescriptors, Ot = Object.getOwnPropertySymbols, Br = Object.prototype.hasOwnProperty, Gr = Object.prototype.propertyIsEnumerable, Sr = (e, o, t) => o in e ? di(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, me = (e, o) => {
  for (var t in o || (o = {}))
    Br.call(o, t) && Sr(e, t, o[t]);
  if (Ot)
    for (var t of Ot(o))
      Gr.call(o, t) && Sr(e, t, o[t]);
  return e;
}, $t = (e, o) => fi(e, hi(o)), Le = (e, o) => {
  var t = {};
  for (var n in e)
    Br.call(e, n) && o.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Ot)
    for (var n of Ot(e))
      o.indexOf(n) < 0 && Gr.call(e, n) && (t[n] = e[n]);
  return t;
};
function rs(...e) {
  return Nr(...e);
}
var gi = jr(), Ze = gi;
function Rr(e, o) {
  Fr(e) ? e.push(...o || []) : Fe(e) && Object.assign(e, o);
}
function vi(e) {
  return Fe(e) && e.hasOwnProperty("$value") && e.hasOwnProperty("$type") ? e.$value : e;
}
function mi(e) {
  return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function Bt(e = "", o = "") {
  return mi(`${qe(e, !1) && qe(o, !1) ? `${e}-` : e}${o}`);
}
function Xr(e = "", o = "") {
  return `--${Bt(e, o)}`;
}
function pi(e = "") {
  const o = (e.match(/{/g) || []).length, t = (e.match(/}/g) || []).length;
  return (o + t) % 2 !== 0;
}
function zr(e, o = "", t = "", n = [], l) {
  if (qe(e)) {
    const g = /{([^}]*)}/g, d = e.trim();
    if (pi(d))
      return;
    if (He(d, g)) {
      const m = d.replaceAll(g, (a) => {
        const i = a.replace(/{|}/g, "").split(".").filter((r) => !n.some((u) => He(r, u)));
        return `var(${Xr(t, qr(i.join("-")))}${Y(l) ? `, ${l}` : ""})`;
      }), f = /(\d+\s+[\+\-\*\/]\s+\d+)/g, s = /var\([^)]+\)/g;
      return He(m.replace(s, "0"), f) ? `calc(${m})` : m;
    }
    return d;
  } else if (Ko(e))
    return e;
}
function yi(e, o, t) {
  qe(o, !1) && e.push(`${o}:${t};`);
}
function at(e, o) {
  return e ? `${e}{${o}}` : "";
}
var mt = (...e) => wi(ce.getTheme(), ...e), wi = (e = {}, o, t, n) => {
  if (o) {
    const { variable: l, options: g } = ce.defaults || {}, { prefix: d, transform: m } = (e == null ? void 0 : e.options) || g || {}, s = He(o, /{([^}]*)}/g) ? o : `{${o}}`;
    return n === "value" || nn(n) && m === "strict" ? ce.getTokenValue(o) : zr(s, void 0, d, [l.excludedKeyRegex], t);
  }
  return "";
};
function bi(e, o = {}) {
  const t = ce.defaults.variable, { prefix: n = t.prefix, selector: l = t.selector, excludedKeyRegex: g = t.excludedKeyRegex } = o, d = (s, a = "") => Object.entries(s).reduce(
    (c, [i, r]) => {
      const u = He(i, g) ? Bt(a) : Bt(a, qr(i)), v = vi(r);
      if (Fe(v)) {
        const { variables: y, tokens: h } = d(v, u);
        Rr(c.tokens, h), Rr(c.variables, y);
      } else
        c.tokens.push((n ? u.replace(`${n}-`, "") : u).replaceAll("-", ".")), yi(c.variables, Xr(u), zr(v, u, n, [g]));
      return c;
    },
    { variables: [], tokens: [] }
  ), { variables: m, tokens: f } = d(e, n);
  return {
    value: m,
    tokens: f,
    declarations: m.join(""),
    css: at(l, m.join(""))
  };
}
var ve = {
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
      const o = Object.keys(this.rules).filter((t) => t !== "custom").map((t) => this.rules[t]);
      return [e].flat().map((t) => {
        var n;
        return (n = o.map((l) => l.resolve(t)).find((l) => l.matched)) != null ? n : this.rules.custom.resolve(t);
      });
    }
  },
  _toVariables(e, o) {
    return bi(e, { prefix: o == null ? void 0 : o.prefix });
  },
  getCommon({ name: e = "", theme: o = {}, params: t, set: n, defaults: l }) {
    var g, d, m, f, s, a, c;
    const { preset: i, options: r } = o;
    let u, v, y, h, p, w, b;
    if (Y(i) && r.transform !== "strict") {
      const { primitive: S, semantic: R, extend: I } = i, T = R || {}, { colorScheme: _ } = T, P = Le(T, ["colorScheme"]), C = I || {}, { colorScheme: x } = C, E = Le(C, ["colorScheme"]), B = _ || {}, { dark: K } = B, ne = Le(B, ["dark"]), re = x || {}, { dark: H } = re, L = Le(re, ["dark"]), q = Y(S) ? this._toVariables({ primitive: S }, r) : {}, F = Y(P) ? this._toVariables({ semantic: P }, r) : {}, V = Y(ne) ? this._toVariables({ light: ne }, r) : {}, X = Y(K) ? this._toVariables({ dark: K }, r) : {}, k = Y(E) ? this._toVariables({ semantic: E }, r) : {}, O = Y(L) ? this._toVariables({ light: L }, r) : {}, A = Y(H) ? this._toVariables({ dark: H }, r) : {}, [D, M] = [(g = q.declarations) != null ? g : "", q.tokens], [N, $] = [(d = F.declarations) != null ? d : "", F.tokens || []], [U, W] = [(m = V.declarations) != null ? m : "", V.tokens || []], [j, Q] = [(f = X.declarations) != null ? f : "", X.tokens || []], [Z, he] = [(s = k.declarations) != null ? s : "", k.tokens || []], [ae, ue] = [(a = O.declarations) != null ? a : "", O.tokens || []], [ge, z] = [(c = A.declarations) != null ? c : "", A.tokens || []];
      u = this.transformCSS(e, D, "light", "variable", r, n, l), v = M;
      const le = this.transformCSS(e, `${N}${U}`, "light", "variable", r, n, l), ut = this.transformCSS(e, `${j}`, "dark", "variable", r, n, l);
      y = `${le}${ut}`, h = [.../* @__PURE__ */ new Set([...$, ...W, ...Q])];
      const Ne = this.transformCSS(e, `${Z}${ae}color-scheme:light`, "light", "variable", r, n, l), oe = this.transformCSS(e, `${ge}color-scheme:dark`, "dark", "variable", r, n, l);
      p = `${Ne}${oe}`, w = [.../* @__PURE__ */ new Set([...he, ...ue, ...z])], b = Ue(i.css, { dt: mt });
    }
    return {
      primitive: {
        css: u,
        tokens: v
      },
      semantic: {
        css: y,
        tokens: h
      },
      global: {
        css: p,
        tokens: w
      },
      style: b
    };
  },
  getPreset({ name: e = "", preset: o = {}, options: t, params: n, set: l, defaults: g, selector: d }) {
    var m, f, s;
    let a, c, i;
    if (Y(o) && t.transform !== "strict") {
      const r = e.replace("-directive", ""), u = o, { colorScheme: v, extend: y, css: h } = u, p = Le(u, ["colorScheme", "extend", "css"]), w = y || {}, { colorScheme: b } = w, S = Le(w, ["colorScheme"]), R = v || {}, { dark: I } = R, T = Le(R, ["dark"]), _ = b || {}, { dark: P } = _, C = Le(_, ["dark"]), x = Y(p) ? this._toVariables({ [r]: me(me({}, p), S) }, t) : {}, E = Y(T) ? this._toVariables({ [r]: me(me({}, T), C) }, t) : {}, B = Y(I) ? this._toVariables({ [r]: me(me({}, I), P) }, t) : {}, [K, ne] = [(m = x.declarations) != null ? m : "", x.tokens || []], [re, H] = [(f = E.declarations) != null ? f : "", E.tokens || []], [L, q] = [(s = B.declarations) != null ? s : "", B.tokens || []], F = this.transformCSS(r, `${K}${re}`, "light", "variable", t, l, g, d), V = this.transformCSS(r, L, "dark", "variable", t, l, g, d);
      a = `${F}${V}`, c = [.../* @__PURE__ */ new Set([...ne, ...H, ...q])], i = Ue(h, { dt: mt });
    }
    return {
      css: a,
      tokens: c,
      style: i
    };
  },
  getPresetC({ name: e = "", theme: o = {}, params: t, set: n, defaults: l }) {
    var g;
    const { preset: d, options: m } = o, f = (g = d == null ? void 0 : d.components) == null ? void 0 : g[e];
    return this.getPreset({ name: e, preset: f, options: m, params: t, set: n, defaults: l });
  },
  // @deprecated - use getPresetC instead
  getPresetD({ name: e = "", theme: o = {}, params: t, set: n, defaults: l }) {
    var g, d;
    const m = e.replace("-directive", ""), { preset: f, options: s } = o, a = ((g = f == null ? void 0 : f.components) == null ? void 0 : g[m]) || ((d = f == null ? void 0 : f.directives) == null ? void 0 : d[m]);
    return this.getPreset({ name: m, preset: a, options: s, params: t, set: n, defaults: l });
  },
  applyDarkColorScheme(e) {
    return !(e.darkModeSelector === "none" || e.darkModeSelector === !1);
  },
  getColorSchemeOption(e, o) {
    var t;
    return this.applyDarkColorScheme(e) ? this.regex.resolve(e.darkModeSelector === !0 ? o.options.darkModeSelector : (t = e.darkModeSelector) != null ? t : o.options.darkModeSelector) : [];
  },
  getLayerOrder(e, o = {}, t, n) {
    const { cssLayer: l } = o;
    return l ? `@layer ${Ue(l.order || "primeui", t)}` : "";
  },
  getCommonStyleSheet({ name: e = "", theme: o = {}, params: t, props: n = {}, set: l, defaults: g }) {
    const d = this.getCommon({ name: e, theme: o, params: t, set: l, defaults: g }), m = Object.entries(n).reduce((f, [s, a]) => f.push(`${s}="${a}"`) && f, []).join(" ");
    return Object.entries(d || {}).reduce((f, [s, a]) => {
      if (a != null && a.css) {
        const c = vt(a == null ? void 0 : a.css), i = `${s}-variables`;
        f.push(`<style type="text/css" data-primevue-style-id="${i}" ${m}>${c}</style>`);
      }
      return f;
    }, []).join("");
  },
  getStyleSheet({ name: e = "", theme: o = {}, params: t, props: n = {}, set: l, defaults: g }) {
    var d;
    const m = { name: e, theme: o, params: t, set: l, defaults: g }, f = (d = e.includes("-directive") ? this.getPresetD(m) : this.getPresetC(m)) == null ? void 0 : d.css, s = Object.entries(n).reduce((a, [c, i]) => a.push(`${c}="${i}"`) && a, []).join(" ");
    return f ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${s}>${vt(f)}</style>` : "";
  },
  createTokens(e = {}, o, t = "", n = "", l = {}) {
    return Object.entries(e).forEach(([g, d]) => {
      const m = He(g, o.variable.excludedKeyRegex) ? t : t ? `${t}.${yr(g)}` : yr(g), f = n ? `${n}.${g}` : g;
      Fe(d) ? this.createTokens(d, o, m, f, l) : (l[m] || (l[m] = {
        paths: [],
        computed(s, a = {}) {
          var c, i;
          return this.paths.length === 1 ? (c = this.paths[0]) == null ? void 0 : c.computed(this.paths[0].scheme, a.binding) : s && s !== "none" ? (i = this.paths.find((r) => r.scheme === s)) == null ? void 0 : i.computed(s, a.binding) : this.paths.map((r) => r.computed(r.scheme, a[r.scheme]));
        }
      }), l[m].paths.push({
        path: f,
        value: d,
        scheme: f.includes("colorScheme.light") ? "light" : f.includes("colorScheme.dark") ? "dark" : "none",
        computed(s, a = {}) {
          const c = /{([^}]*)}/g;
          let i = d;
          if (a.name = this.path, a.binding || (a.binding = {}), He(d, c)) {
            const u = d.trim().replaceAll(c, (h) => {
              var p;
              const w = h.replace(/{|}/g, ""), b = (p = l[w]) == null ? void 0 : p.computed(s, a);
              return Fr(b) && b.length === 2 ? `light-dark(${b[0].value},${b[1].value})` : b == null ? void 0 : b.value;
            }), v = /(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g, y = /var\([^)]+\)/g;
            i = He(u.replace(y, "0"), v) ? `calc(${u})` : u;
          }
          return nn(a.binding) && delete a.binding, {
            colorScheme: s,
            path: this.path,
            paths: a,
            value: i.includes("undefined") ? void 0 : i
          };
        }
      }));
    }), l;
  },
  getTokenValue(e, o, t) {
    var n;
    const g = ((f) => f.split(".").filter((a) => !He(a.toLowerCase(), t.variable.excludedKeyRegex)).join("."))(o), d = o.includes("colorScheme.light") ? "light" : o.includes("colorScheme.dark") ? "dark" : void 0, m = [(n = e[g]) == null ? void 0 : n.computed(d)].flat().filter((f) => f);
    return m.length === 1 ? m[0].value : m.reduce((f = {}, s) => {
      const a = s, { colorScheme: c } = a, i = Le(a, ["colorScheme"]);
      return f[c] = i, f;
    }, void 0);
  },
  getSelectorRule(e, o, t, n) {
    return t === "class" || t === "attr" ? at(Y(o) ? `${e}${o},${e} ${o}` : e, n) : at(e, Y(o) ? at(o, n) : n);
  },
  transformCSS(e, o, t, n, l = {}, g, d, m) {
    if (Y(o)) {
      const { cssLayer: f } = l;
      if (n !== "style") {
        const s = this.getColorSchemeOption(l, d);
        o = t === "dark" ? s.reduce((a, { type: c, selector: i }) => (Y(i) && (a += i.includes("[CSS]") ? i.replace("[CSS]", o) : this.getSelectorRule(i, m, c, o)), a), "") : at(m ?? ":root", o);
      }
      if (f) {
        const s = {
          name: "primeui"
        };
        Fe(f) && (s.name = Ue(f.name, { name: e, type: n })), Y(s.name) && (o = at(`@layer ${s.name}`, o), g == null || g.layerNames(s.name));
      }
      return o;
    }
    return "";
  }
}, ce = {
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
    const { theme: o } = e;
    o && (this._theme = $t(me({}, o), {
      options: me(me({}, this.defaults.options), o.options)
    }), this._tokens = ve.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
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
    this.update({ theme: e }), Ze.emit("theme:change", e);
  },
  getPreset() {
    return this.preset;
  },
  setPreset(e) {
    this._theme = $t(me({}, this.theme), { preset: e }), this._tokens = ve.createTokens(e, this.defaults), this.clearLoadedStyleNames(), Ze.emit("preset:change", e), Ze.emit("theme:change", this.theme);
  },
  getOptions() {
    return this.options;
  },
  setOptions(e) {
    this._theme = $t(me({}, this.theme), { options: e }), this.clearLoadedStyleNames(), Ze.emit("options:change", e), Ze.emit("theme:change", this.theme);
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
    return ve.getTokenValue(this.tokens, e, this.defaults);
  },
  getCommon(e = "", o) {
    return ve.getCommon({ name: e, theme: this.theme, params: o, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getComponent(e = "", o) {
    const t = { name: e, theme: this.theme, params: o, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return ve.getPresetC(t);
  },
  // @deprecated - use getComponent instead
  getDirective(e = "", o) {
    const t = { name: e, theme: this.theme, params: o, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return ve.getPresetD(t);
  },
  getCustomPreset(e = "", o, t, n) {
    const l = { name: e, preset: o, options: this.options, selector: t, params: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return ve.getPreset(l);
  },
  getLayerOrderCSS(e = "") {
    return ve.getLayerOrder(e, this.options, { names: this.getLayerNames() }, this.defaults);
  },
  transformCSS(e = "", o, t = "style", n) {
    return ve.transformCSS(e, o, n, t, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
  },
  getCommonStyleSheet(e = "", o, t = {}) {
    return ve.getCommonStyleSheet({ name: e, theme: this.theme, params: o, props: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getStyleSheet(e, o, t = {}) {
    return ve.getStyleSheet({ name: e, theme: this.theme, params: o, props: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  onStyleMounted(e) {
    this._loadingStyles.add(e);
  },
  onStyleUpdated(e) {
    this._loadingStyles.add(e);
  },
  onStyleLoaded(e, { name: o }) {
    this._loadingStyles.size && (this._loadingStyles.delete(o), Ze.emit(`theme:${o}:load`, e), !this._loadingStyles.size && Ze.emit("theme:load"));
  }
}, Si = ({ dt: e }) => `
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
function pt(e) {
  "@babel/helpers - typeof";
  return pt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, pt(e);
}
function kr(e, o) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    o && (n = n.filter(function(l) {
      return Object.getOwnPropertyDescriptor(e, l).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Ir(e) {
  for (var o = 1; o < arguments.length; o++) {
    var t = arguments[o] != null ? arguments[o] : {};
    o % 2 ? kr(Object(t), !0).forEach(function(n) {
      Ri(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : kr(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function Ri(e, o, t) {
  return (o = ki(o)) in e ? Object.defineProperty(e, o, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = t, e;
}
function ki(e) {
  var o = Ii(e, "string");
  return pt(o) == "symbol" ? o : o + "";
}
function Ii(e, o) {
  if (pt(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, o);
    if (pt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
function _i(e) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  on() && on().components ? Qr(e) : o ? e() : Jr(e);
}
var Ti = 0;
function Ci(e) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = xt(!1), n = xt(e), l = xt(null), g = ci() ? window.document : void 0, d = o.document, m = d === void 0 ? g : d, f = o.immediate, s = f === void 0 ? !0 : f, a = o.manual, c = a === void 0 ? !1 : a, i = o.name, r = i === void 0 ? "style_".concat(++Ti) : i, u = o.id, v = u === void 0 ? void 0 : u, y = o.media, h = y === void 0 ? void 0 : y, p = o.nonce, w = p === void 0 ? void 0 : p, b = o.first, S = b === void 0 ? !1 : b, R = o.onMounted, I = R === void 0 ? void 0 : R, T = o.onUpdated, _ = T === void 0 ? void 0 : T, P = o.onLoad, C = P === void 0 ? void 0 : P, x = o.props, E = x === void 0 ? {} : x, B = function() {
  }, K = function(H) {
    var L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (m) {
      var q = Ir(Ir({}, E), L), F = q.name || r, V = q.id || v, X = q.nonce || w;
      l.value = m.querySelector('style[data-primevue-style-id="'.concat(F, '"]')) || m.getElementById(V) || m.createElement("style"), l.value.isConnected || (n.value = H || e, At(l.value, {
        type: "text/css",
        id: V,
        media: h,
        nonce: X
      }), S ? m.head.prepend(l.value) : m.head.appendChild(l.value), li(l.value, "data-primevue-style-id", F), At(l.value, q), l.value.onload = function(k) {
        return C == null ? void 0 : C(k, {
          name: F
        });
      }, I == null || I(F)), !t.value && (B = Yr(n, function(k) {
        l.value.textContent = k, _ == null || _(F);
      }, {
        immediate: !0
      }), t.value = !0);
    }
  }, ne = function() {
    !m || !t.value || (B(), ri(l.value) && m.head.removeChild(l.value), t.value = !1, l.value = null);
  };
  return s && !c && _i(K), {
    id: v,
    name: r,
    el: l,
    css: n,
    unload: ne,
    load: K,
    isLoaded: Kr(t)
  };
}
function yt(e) {
  "@babel/helpers - typeof";
  return yt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, yt(e);
}
function _r(e, o) {
  return Ei(e) || Pi(e, o) || Oi(e, o) || Ai();
}
function Ai() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Oi(e, o) {
  if (e) {
    if (typeof e == "string") return Tr(e, o);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Tr(e, o) : void 0;
  }
}
function Tr(e, o) {
  (o == null || o > e.length) && (o = e.length);
  for (var t = 0, n = Array(o); t < o; t++) n[t] = e[t];
  return n;
}
function Pi(e, o) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n, l, g, d, m = [], f = !0, s = !1;
    try {
      if (g = (t = t.call(e)).next, o !== 0) for (; !(f = (n = g.call(t)).done) && (m.push(n.value), m.length !== o); f = !0) ;
    } catch (a) {
      s = !0, l = a;
    } finally {
      try {
        if (!f && t.return != null && (d = t.return(), Object(d) !== d)) return;
      } finally {
        if (s) throw l;
      }
    }
    return m;
  }
}
function Ei(e) {
  if (Array.isArray(e)) return e;
}
function Cr(e, o) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    o && (n = n.filter(function(l) {
      return Object.getOwnPropertyDescriptor(e, l).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Vt(e) {
  for (var o = 1; o < arguments.length; o++) {
    var t = arguments[o] != null ? arguments[o] : {};
    o % 2 ? Cr(Object(t), !0).forEach(function(n) {
      xi(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Cr(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function xi(e, o, t) {
  return (o = Di(o)) in e ? Object.defineProperty(e, o, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = t, e;
}
function Di(e) {
  var o = Mi(e, "string");
  return yt(o) == "symbol" ? o : o + "";
}
function Mi(e, o) {
  if (yt(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, o);
    if (yt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
var Li = function(o) {
  var t = o.dt;
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
    padding-right: `.concat(t("scrollbar.width"), `;
}
`);
}, Ui = {}, Hi = {}, os = {
  name: "base",
  css: Li,
  style: Si,
  classes: Ui,
  inlineStyles: Hi,
  load: function(o) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(g) {
      return g;
    }, l = n(Ue(o, {
      dt: mt
    }));
    return Y(l) ? Ci(vt(l), Vt({
      name: this.name
    }, t)) : {};
  },
  loadCSS: function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, o);
  },
  loadStyle: function() {
    var o = this, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return this.load(this.style, t, function() {
      var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return ce.transformCSS(t.name || o.name, "".concat(l).concat(n));
    });
  },
  getCommonTheme: function(o) {
    return ce.getCommon(this.name, o);
  },
  getComponentTheme: function(o) {
    return ce.getComponent(this.name, o);
  },
  getDirectiveTheme: function(o) {
    return ce.getDirective(this.name, o);
  },
  getPresetTheme: function(o, t, n) {
    return ce.getCustomPreset(this.name, o, t, n);
  },
  getLayerOrderThemeCSS: function() {
    return ce.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var n = Ue(this.css, {
        dt: mt
      }) || "", l = vt("".concat(n).concat(o)), g = Object.entries(t).reduce(function(d, m) {
        var f = _r(m, 2), s = f[0], a = f[1];
        return d.push("".concat(s, '="').concat(a, '"')) && d;
      }, []).join(" ");
      return Y(l) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(g, ">").concat(l, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function(o) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return ce.getCommonStyleSheet(this.name, o, t);
  },
  getThemeStyleSheet: function(o) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [ce.getStyleSheet(this.name, o, t)];
    if (this.style) {
      var l = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), g = Ue(this.style, {
        dt: mt
      }), d = vt(ce.transformCSS(l, g)), m = Object.entries(t).reduce(function(f, s) {
        var a = _r(s, 2), c = a[0], i = a[1];
        return f.push("".concat(c, '="').concat(i, '"')) && f;
      }, []).join(" ");
      Y(d) && n.push('<style type="text/css" data-primevue-style-id="'.concat(l, '" ').concat(m, ">").concat(d, "</style>"));
    }
    return n.join("");
  },
  extend: function(o) {
    return Vt(Vt({}, this), {}, {
      css: void 0,
      style: void 0
    }, o);
  }
}, is = jr();
const ss = {
  error: {
    somethingWentWrong: {
      summary: "Something went wrong",
      detail: "Sorry but something isnt working as expected! Please try again later. We have been notified of the issue."
    }
  }
};
export {
  Fe as A,
  os as B,
  Ji as C,
  Xi as D,
  jr as E,
  Yi as F,
  es as G,
  ui as H,
  ai as I,
  Gi as J,
  Ki as K,
  Or as L,
  bt as M,
  Ie as N,
  Xt as O,
  is as P,
  tn as Q,
  Gt as R,
  ji as S,
  Wi as T,
  rs as U,
  Fi as V,
  qi as W,
  Fo as a,
  Y as b,
  $i as c,
  nn as d,
  Qi as e,
  oi as f,
  Vi as g,
  Zi as h,
  ts as i,
  ci as j,
  zi as k,
  ni as l,
  ti as m,
  ns as n,
  qe as o,
  Do as p,
  Fr as q,
  Ue as r,
  pr as s,
  ss as t,
  zo as u,
  Ze as v,
  ce as w,
  Xo as x,
  Et as y,
  Bi as z
};
