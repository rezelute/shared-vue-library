var wr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pt(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var Rt = {}, Ge = {}, Oe = {}, X = {}, kt = {}, St = {}, Xe = {}, be = {}, Bt;
function Ir() {
  if (Bt) return be;
  Bt = 1;
  var s = be && be.__awaiter || function(f, u, p, v) {
    function t(a) {
      return a instanceof p ? a : new p(function(i) {
        i(a);
      });
    }
    return new (p || (p = Promise))(function(a, i) {
      function e(c) {
        try {
          r(v.next(c));
        } catch (l) {
          i(l);
        }
      }
      function n(c) {
        try {
          r(v.throw(c));
        } catch (l) {
          i(l);
        }
      }
      function r(c) {
        c.done ? a(c.value) : t(c.value).then(e, n);
      }
      r((v = v.apply(f, u || [])).next());
    });
  }, R = be && be.__generator || function(f, u) {
    var p = {
      label: 0,
      sent: function() {
        if (a[0] & 1) throw a[1];
        return a[1];
      },
      trys: [],
      ops: []
    }, v, t, a, i;
    return i = { next: e(0), throw: e(1), return: e(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
      return this;
    }), i;
    function e(r) {
      return function(c) {
        return n([r, c]);
      };
    }
    function n(r) {
      if (v) throw new TypeError("Generator is already executing.");
      for (; p; )
        try {
          if (v = 1, t && (a = r[0] & 2 ? t.return : r[0] ? t.throw || ((a = t.return) && a.call(t), 0) : t.next) && !(a = a.call(t, r[1])).done)
            return a;
          switch (t = 0, a && (r = [r[0] & 2, a.value]), r[0]) {
            case 0:
            case 1:
              a = r;
              break;
            case 4:
              return p.label++, { value: r[1], done: !1 };
            case 5:
              p.label++, t = r[1], r = [0];
              continue;
            case 7:
              r = p.ops.pop(), p.trys.pop();
              continue;
            default:
              if (a = p.trys, !(a = a.length > 0 && a[a.length - 1]) && (r[0] === 6 || r[0] === 2)) {
                p = 0;
                continue;
              }
              if (r[0] === 3 && (!a || r[1] > a[0] && r[1] < a[3])) {
                p.label = r[1];
                break;
              }
              if (r[0] === 6 && p.label < a[1]) {
                p.label = a[1], a = r;
                break;
              }
              if (a && p.label < a[2]) {
                p.label = a[2], p.ops.push(r);
                break;
              }
              a[2] && p.ops.pop(), p.trys.pop();
              continue;
          }
          r = u.call(f, p);
        } catch (c) {
          r = [6, c], t = 0;
        } finally {
          v = a = 0;
        }
      if (r[0] & 5) throw r[1];
      return { value: r[0] ? r[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(be, "__esModule", { value: !0 }), be.defaultWindowHandlerImplementation = void 0;
  function d() {
    if (typeof window > "u")
      throw Error(
        "If you are using this package with server-side rendering, please make sure that you are checking if the window object is defined."
      );
    return window;
  }
  var o = {
    key: function(f) {
      return s(this, void 0, void 0, function() {
        return R(this, function(u) {
          return [2, d().localStorage.key(f)];
        });
      });
    },
    clear: function() {
      return s(this, void 0, void 0, function() {
        return R(this, function(f) {
          return [2, d().localStorage.clear()];
        });
      });
    },
    getItem: function(f) {
      return s(this, void 0, void 0, function() {
        return R(this, function(u) {
          return [2, d().localStorage.getItem(f)];
        });
      });
    },
    removeItem: function(f) {
      return s(this, void 0, void 0, function() {
        return R(this, function(u) {
          return [2, d().localStorage.removeItem(f)];
        });
      });
    },
    setItem: function(f, u) {
      return s(this, void 0, void 0, function() {
        return R(this, function(p) {
          return [2, d().localStorage.setItem(f, u)];
        });
      });
    },
    keySync: function(f) {
      return d().localStorage.key(f);
    },
    clearSync: function() {
      return d().localStorage.clear();
    },
    getItemSync: function(f) {
      return d().localStorage.getItem(f);
    },
    removeItemSync: function(f) {
      return d().localStorage.removeItem(f);
    },
    setItemSync: function(f, u) {
      return d().localStorage.setItem(f, u);
    }
  }, g = {
    key: function(f) {
      return s(this, void 0, void 0, function() {
        return R(this, function(u) {
          return [2, d().sessionStorage.key(f)];
        });
      });
    },
    clear: function() {
      return s(this, void 0, void 0, function() {
        return R(this, function(f) {
          return [2, d().sessionStorage.clear()];
        });
      });
    },
    getItem: function(f) {
      return s(this, void 0, void 0, function() {
        return R(this, function(u) {
          return [2, d().sessionStorage.getItem(f)];
        });
      });
    },
    removeItem: function(f) {
      return s(this, void 0, void 0, function() {
        return R(this, function(u) {
          return [2, d().sessionStorage.removeItem(f)];
        });
      });
    },
    setItem: function(f, u) {
      return s(this, void 0, void 0, function() {
        return R(this, function(p) {
          return [2, d().sessionStorage.setItem(f, u)];
        });
      });
    },
    keySync: function(f) {
      return d().sessionStorage.key(f);
    },
    clearSync: function() {
      return d().sessionStorage.clear();
    },
    getItemSync: function(f) {
      return d().sessionStorage.getItem(f);
    },
    removeItemSync: function(f) {
      return d().sessionStorage.removeItem(f);
    },
    setItemSync: function(f, u) {
      return d().sessionStorage.setItem(f, u);
    }
  };
  return be.defaultWindowHandlerImplementation = {
    history: {
      replaceState: function(f, u, p) {
        return d().history.replaceState(f, u, p);
      },
      getState: function() {
        return d().history.state;
      }
    },
    location: {
      getHref: function() {
        return d().location.href;
      },
      setHref: function(f) {
        d().location.href = f;
      },
      getSearch: function() {
        return d().location.search;
      },
      getHash: function() {
        return d().location.hash;
      },
      getPathName: function() {
        return d().location.pathname;
      },
      assign: function(f) {
        d().location.assign(f);
      },
      getHostName: function() {
        return d().location.hostname;
      },
      getHost: function() {
        return d().location.host;
      },
      getOrigin: function() {
        return d().location.origin;
      }
    },
    getDocument: function() {
      return d().document;
    },
    getWindowUnsafe: function() {
      return d().window;
    },
    localStorage: o,
    sessionStorage: g
  }, be;
}
var Gt;
function De() {
  if (Gt) return Xe;
  Gt = 1, Object.defineProperty(Xe, "__esModule", { value: !0 }), Xe.WindowHandlerReference = void 0;
  var s = Ir(), R = (
    /** @class */
    (function() {
      function d(o) {
        var g = function(f) {
          return f;
        };
        o !== void 0 && (g = o), this.windowHandler = g(s.defaultWindowHandlerImplementation);
      }
      return d.init = function(o) {
        d.instance === void 0 && (d.instance = new d(o));
      }, d.getReferenceOrThrow = function() {
        if (d.instance === void 0)
          throw new Error("SuperTokensWindowHandler must be initialized before calling this method.");
        return d.instance;
      }, d;
    })()
  );
  return Xe.WindowHandlerReference = R, Xe.default = R, Xe;
}
var Xt;
function br() {
  return Xt || (Xt = 1, (function(s) {
    function R(d) {
      for (var o in d) s.hasOwnProperty(o) || (s[o] = d[o]);
    }
    s.__esModule = !0, R(De());
  })(St)), St;
}
var zt;
function yt() {
  return zt || (zt = 1, (function(s) {
    Object.defineProperty(s, "__esModule", { value: !0 }), s.WindowHandlerReference = void 0;
    var R = br();
    Object.defineProperty(s, "WindowHandlerReference", {
      enumerable: !0,
      get: function() {
        return R.WindowHandlerReference;
      }
    });
  })(kt)), kt;
}
var xe = {}, Qt;
function Rr() {
  return Qt || (Qt = 1, Object.defineProperty(xe, "__esModule", { value: !0 }), xe.SSR_ERROR = xe.DEFAULT_API_BASE_PATH = void 0, xe.DEFAULT_API_BASE_PATH = "/auth", xe.SSR_ERROR = `
If you are trying to use this method doing server-side-rendering, please make sure you move this method inside a componentDidMount method or useEffect hook.`), xe;
}
var dt = {}, Jt;
function kr() {
  if (Jt) return dt;
  Jt = 1, Object.defineProperty(dt, "__esModule", { value: !0 });
  var s = (
    /** @class */
    /* @__PURE__ */ (function() {
      function d(o) {
        var g = this;
        this.getAsStringDangerous = function() {
          return g.value;
        }, this.value = R(o);
      }
      return d;
    })()
  );
  dt.default = s;
  function R(d, o) {
    o === void 0 && (o = !1);
    function g(u) {
      return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
        u
      );
    }
    d = d.trim();
    try {
      if (!d.startsWith("http://") && !d.startsWith("https://"))
        throw new Error("Error converting to proper URL");
      var f = new URL(d);
      return o ? f.hostname.startsWith("localhost") || g(f.hostname) ? d = "http://" + f.host : d = "https://" + f.host : d = f.protocol + "//" + f.host, d;
    } catch {
    }
    if (d.startsWith("/"))
      throw new Error("Please provide a valid domain name");
    if (d.indexOf(".") === 0 && (d = d.substr(1)), (d.indexOf(".") !== -1 || d.startsWith("localhost")) && !d.startsWith("http://") && !d.startsWith("https://")) {
      d = "https://" + d;
      try {
        return new URL(d), R(d, !0);
      } catch {
      }
    }
    throw new Error("Please provide a valid domain name");
  }
  return dt;
}
var ft = {}, Kt;
function lr() {
  if (Kt) return ft;
  Kt = 1, Object.defineProperty(ft, "__esModule", { value: !0 });
  var s = (
    /** @class */
    /* @__PURE__ */ (function() {
      function o(g) {
        var f = this;
        this.startsWith = function(u) {
          return f.value.startsWith(u.value);
        }, this.appendPath = function(u) {
          return new o(f.value + u.value);
        }, this.getAsStringDangerous = function() {
          return f.value;
        }, this.value = R(g);
      }
      return o;
    })()
  );
  ft.default = s;
  function R(o) {
    o = o.trim();
    try {
      if (!o.startsWith("http://") && !o.startsWith("https://"))
        throw new Error("Error converting to proper URL");
      var g = new URL(o);
      return o = g.pathname, o.charAt(o.length - 1) === "/" ? o.substr(0, o.length - 1) : o;
    } catch {
    }
    if ((d(o) || o.startsWith("localhost")) && !o.startsWith("http://") && !o.startsWith("https://"))
      return o = "http://" + o, R(o);
    o.charAt(0) !== "/" && (o = "/" + o);
    try {
      return new URL("http://example.com" + o), R("http://example.com" + o);
    } catch {
      throw new Error("Please provide a valid URL path");
    }
  }
  function d(o) {
    if (o.indexOf(".") === -1 || o.startsWith("/"))
      return !1;
    try {
      var g = new URL(o);
      return g.hostname.indexOf(".") !== -1;
    } catch {
    }
    try {
      var g = new URL("http://" + o);
      return g.hostname.indexOf(".") !== -1;
    } catch {
    }
    return !1;
  }
  return ft;
}
var et = {}, Yt;
function dr() {
  return Yt || (Yt = 1, Object.defineProperty(et, "__esModule", { value: !0 }), et.nonPublicConfigProperties = void 0, et.nonPublicConfigProperties = ["experimental"]), et;
}
var Tt = {}, tt = {}, $ = {}, ze = {}, Zt;
function Sr() {
  if (Zt) return ze;
  Zt = 1, Object.defineProperty(ze, "__esModule", { value: !0 }), ze.isAnIpAddress = void 0;
  function s(o) {
    return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      o
    );
  }
  ze.isAnIpAddress = s;
  var R = (
    /** @class */
    /* @__PURE__ */ (function() {
      function o(g) {
        var f = this;
        this.getAsStringDangerous = function() {
          return f.value;
        }, this.value = d(g);
      }
      return o;
    })()
  );
  ze.default = R;
  function d(o, g) {
    g === void 0 && (g = !1), o = o.trim();
    try {
      if (!o.startsWith("http://") && !o.startsWith("https://"))
        throw new Error("converting to proper URL");
      var f = new URL(o);
      return g ? f.hostname.startsWith("localhost") || s(f.hostname) ? o = "http://" + f.host : o = "https://" + f.host : o = f.protocol + "//" + f.host, o;
    } catch {
    }
    if (o.startsWith("/"))
      throw new Error("Please provide a valid domain name");
    if (o.indexOf(".") === 0 && (o = o.substr(1)), (o.indexOf(".") !== -1 || o.startsWith("localhost")) && !o.startsWith("http://") && !o.startsWith("https://")) {
      o = "https://" + o;
      try {
        return new URL(o), d(o, !0);
      } catch {
      }
    }
    throw new Error("Please provide a valid domain name");
  }
  return ze;
}
var ht = {}, $t;
function Tr() {
  if ($t) return ht;
  $t = 1, Object.defineProperty(ht, "__esModule", { value: !0 });
  var s = (
    /** @class */
    /* @__PURE__ */ (function() {
      function o(g) {
        var f = this;
        this.startsWith = function(u) {
          return f.value.startsWith(u.value);
        }, this.appendPath = function(u) {
          return new o(f.value + u.value);
        }, this.getAsStringDangerous = function() {
          return f.value;
        }, this.value = R(g);
      }
      return o;
    })()
  );
  ht.default = s;
  function R(o) {
    o = o.trim();
    try {
      if (!o.startsWith("http://") && !o.startsWith("https://"))
        throw new Error("converting to proper URL");
      var g = new URL(o);
      return o = g.pathname, o.charAt(o.length - 1) === "/" ? o.substr(0, o.length - 1) : o;
    } catch {
    }
    if ((d(o) || o.startsWith("localhost")) && !o.startsWith("http://") && !o.startsWith("https://"))
      return o = "http://" + o, R(o);
    o.charAt(0) !== "/" && (o = "/" + o);
    try {
      return new URL("http://example.com" + o), R("http://example.com" + o);
    } catch {
      throw new Error("Please provide a valid URL path");
    }
  }
  function d(o) {
    if (o.indexOf(".") === -1 || o.startsWith("/"))
      return !1;
    try {
      var g = new URL(o);
      return g.hostname.indexOf(".") !== -1;
    } catch {
    }
    try {
      var g = new URL("http://" + o);
      return g.hostname.indexOf(".") !== -1;
    } catch {
    }
    return !1;
  }
  return ht;
}
var en;
function Ut() {
  if (en) return $;
  en = 1;
  var s = $ && $.__assign || function() {
    return s = Object.assign || function(e) {
      for (var n, r = 1, c = arguments.length; r < c; r++) {
        n = arguments[r];
        for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
      }
      return e;
    }, s.apply(this, arguments);
  }, R = $ && $.__awaiter || function(e, n, r, c) {
    function l(h) {
      return h instanceof r ? h : new r(function(m) {
        m(h);
      });
    }
    return new (r || (r = Promise))(function(h, m) {
      function y(b) {
        try {
          I(c.next(b));
        } catch (k) {
          m(k);
        }
      }
      function w(b) {
        try {
          I(c.throw(b));
        } catch (k) {
          m(k);
        }
      }
      function I(b) {
        b.done ? h(b.value) : l(b.value).then(y, w);
      }
      I((c = c.apply(e, n || [])).next());
    });
  }, d = $ && $.__generator || function(e, n) {
    var r = {
      label: 0,
      sent: function() {
        if (h[0] & 1) throw h[1];
        return h[1];
      },
      trys: [],
      ops: []
    }, c, l, h, m;
    return m = { next: y(0), throw: y(1), return: y(2) }, typeof Symbol == "function" && (m[Symbol.iterator] = function() {
      return this;
    }), m;
    function y(I) {
      return function(b) {
        return w([I, b]);
      };
    }
    function w(I) {
      if (c) throw new TypeError("Generator is already executing.");
      for (; r; )
        try {
          if (c = 1, l && (h = I[0] & 2 ? l.return : I[0] ? l.throw || ((h = l.return) && h.call(l), 0) : l.next) && !(h = h.call(l, I[1])).done)
            return h;
          switch (l = 0, h && (I = [I[0] & 2, h.value]), I[0]) {
            case 0:
            case 1:
              h = I;
              break;
            case 4:
              return r.label++, { value: I[1], done: !1 };
            case 5:
              r.label++, l = I[1], I = [0];
              continue;
            case 7:
              I = r.ops.pop(), r.trys.pop();
              continue;
            default:
              if (h = r.trys, !(h = h.length > 0 && h[h.length - 1]) && (I[0] === 6 || I[0] === 2)) {
                r = 0;
                continue;
              }
              if (I[0] === 3 && (!h || I[1] > h[0] && I[1] < h[3])) {
                r.label = I[1];
                break;
              }
              if (I[0] === 6 && r.label < h[1]) {
                r.label = h[1], h = I;
                break;
              }
              if (h && r.label < h[2]) {
                r.label = h[2], r.ops.push(I);
                break;
              }
              h[2] && r.ops.pop(), r.trys.pop();
              continue;
          }
          I = n.call(e, r);
        } catch (b) {
          I = [6, b], l = 0;
        } finally {
          c = h = 0;
        }
      if (I[0] & 5) throw I[1];
      return { value: I[0] ? I[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty($, "__esModule", { value: !0 }), $.matchesDomainOrSubdomain = $.getNormalisedUserContext = $.validateAndNormaliseInputOrThrowError = $.normaliseSessionScopeOrThrowError = $.normaliseURLPathOrThrowError = $.normaliseURLDomainOrThrowError = void 0;
  var o = Sr(), g = Tr(), f = De();
  function u(e) {
    var n = new o.default(e).getAsStringDangerous();
    return n;
  }
  $.normaliseURLDomainOrThrowError = u;
  function p(e) {
    return new g.default(e).getAsStringDangerous();
  }
  $.normaliseURLPathOrThrowError = p;
  function v(e) {
    function n(c) {
      c = c.trim().toLowerCase(), c.startsWith(".") && (c = c.substr(1)), !c.startsWith("http://") && !c.startsWith("https://") && (c = "http://" + c);
      try {
        var l = new URL(c);
        return c = l.hostname, c;
      } catch {
        throw new Error("Please provide a valid sessionScope");
      }
    }
    var r = n(e);
    return r === "localhost" || (0, o.isAnIpAddress)(r) ? r : e.startsWith(".") ? "." + r : r;
  }
  $.normaliseSessionScopeOrThrowError = v;
  function t(e) {
    var n = this, r = u(e.apiDomain), c = p("/auth");
    e.apiBasePath !== void 0 && (c = p(e.apiBasePath));
    var l = f.default.getReferenceOrThrow().windowHandler.location.getHostName(), h = v(
      e !== void 0 && e.sessionTokenFrontendDomain !== void 0 ? e.sessionTokenFrontendDomain : l
    ), m = 401;
    e.sessionExpiredStatusCode !== void 0 && (m = e.sessionExpiredStatusCode);
    var y = 403;
    if (e.invalidClaimStatusCode !== void 0 && (y = e.invalidClaimStatusCode), m === y)
      throw new Error("sessionExpiredStatusCode and invalidClaimStatusCode cannot be the same.");
    var w = !0;
    e.autoAddCredentials !== void 0 && (w = e.autoAddCredentials);
    var I = !1;
    e.isInIframe !== void 0 && (I = e.isInIframe);
    var b = void 0;
    e.sessionTokenBackendDomain !== void 0 && (b = v(e.sessionTokenBackendDomain));
    var k = 10;
    if (e.maxRetryAttemptsForSessionRefresh !== void 0) {
      if (e.maxRetryAttemptsForSessionRefresh < 0)
        throw new Error("maxRetryAttemptsForSessionRefresh must be greater than or equal to 0.");
      k = e.maxRetryAttemptsForSessionRefresh;
    }
    var _ = function(D) {
      return R(n, void 0, void 0, function() {
        return d(this, function(O) {
          return [2, { url: D.url, requestInit: D.requestInit }];
        });
      });
    };
    e.preAPIHook !== void 0 && (_ = e.preAPIHook);
    var T = function() {
      return R(n, void 0, void 0, function() {
        return d(this, function(D) {
          return [
            2
            /*return*/
          ];
        });
      });
    };
    e.postAPIHook !== void 0 && (T = e.postAPIHook);
    var P = function() {
    };
    e.onHandleEvent !== void 0 && (P = e.onHandleEvent);
    var C = s(
      {
        functions: function(D) {
          return D;
        }
      },
      e.override
    );
    return {
      apiDomain: r,
      apiBasePath: c,
      sessionTokenFrontendDomain: h,
      sessionExpiredStatusCode: m,
      invalidClaimStatusCode: y,
      autoAddCredentials: w,
      isInIframe: I,
      tokenTransferMethod: e.tokenTransferMethod !== void 0 ? e.tokenTransferMethod : "cookie",
      sessionTokenBackendDomain: b,
      maxRetryAttemptsForSessionRefresh: k,
      preAPIHook: _,
      postAPIHook: T,
      onHandleEvent: P,
      override: C
    };
  }
  $.validateAndNormaliseInputOrThrowError = t;
  function a(e) {
    return e === void 0 ? {} : e;
  }
  $.getNormalisedUserContext = a;
  function i(e, n) {
    for (var r = e.split("."), c = 0; c < r.length; c++) {
      var l = r.slice(c).join(".");
      if (l === n || ".".concat(l) === n)
        return !0;
    }
    return !1;
  }
  return $.matchesDomainOrSubdomain = i, $;
}
var Re = {}, Me = {}, tn;
function Ht() {
  return tn || (tn = 1, (function(s) {
    var R = Me && Me.__awaiter || function(g, f, u, p) {
      function v(t) {
        return t instanceof u ? t : new u(function(a) {
          a(t);
        });
      }
      return new (u || (u = Promise))(function(t, a) {
        function i(r) {
          try {
            n(p.next(r));
          } catch (c) {
            a(c);
          }
        }
        function e(r) {
          try {
            n(p.throw(r));
          } catch (c) {
            a(c);
          }
        }
        function n(r) {
          r.done ? t(r.value) : v(r.value).then(i, e);
        }
        n((p = p.apply(g, f || [])).next());
      });
    }, d = Me && Me.__generator || function(g, f) {
      var u = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, p, v, t, a;
      return a = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
        return this;
      }), a;
      function i(n) {
        return function(r) {
          return e([n, r]);
        };
      }
      function e(n) {
        if (p) throw new TypeError("Generator is already executing.");
        for (; u; )
          try {
            if (p = 1, v && (t = n[0] & 2 ? v.return : n[0] ? v.throw || ((t = v.return) && t.call(v), 0) : v.next) && !(t = t.call(v, n[1])).done)
              return t;
            switch (v = 0, t && (n = [n[0] & 2, t.value]), n[0]) {
              case 0:
              case 1:
                t = n;
                break;
              case 4:
                return u.label++, { value: n[1], done: !1 };
              case 5:
                u.label++, v = n[1], n = [0];
                continue;
              case 7:
                n = u.ops.pop(), u.trys.pop();
                continue;
              default:
                if (t = u.trys, !(t = t.length > 0 && t[t.length - 1]) && (n[0] === 6 || n[0] === 2)) {
                  u = 0;
                  continue;
                }
                if (n[0] === 3 && (!t || n[1] > t[0] && n[1] < t[3])) {
                  u.label = n[1];
                  break;
                }
                if (n[0] === 6 && u.label < t[1]) {
                  u.label = t[1], t = n;
                  break;
                }
                if (t && u.label < t[2]) {
                  u.label = t[2], u.ops.push(n);
                  break;
                }
                t[2] && u.ops.pop(), u.trys.pop();
                continue;
            }
            n = f.call(g, u);
          } catch (r) {
            n = [6, r], v = 0;
          } finally {
            p = t = 0;
          }
        if (n[0] & 5) throw n[1];
        return { value: n[0] ? n[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(s, "__esModule", { value: !0 }), s.ProcessState = s.PROCESS_STATE = void 0, (function(g) {
      g[g.CALLING_INTERCEPTION_REQUEST = 0] = "CALLING_INTERCEPTION_REQUEST", g[g.CALLING_INTERCEPTION_RESPONSE = 1] = "CALLING_INTERCEPTION_RESPONSE";
    })(s.PROCESS_STATE || (s.PROCESS_STATE = {}));
    var o = (
      /** @class */
      (function() {
        function g() {
          var f = this;
          this.history = [], this.addState = function(u) {
            try {
              process !== void 0 && process.env !== void 0 && process.env.TEST_MODE === "testing" && f.history.push(u);
            } catch {
            }
          }, this.getEventByLastEventByName = function(u) {
            for (var p = f.history.length - 1; p >= 0; p--)
              if (f.history[p] == u)
                return f.history[p];
          }, this.reset = function() {
            f.history = [];
          }, this.waitForEvent = function(u, p) {
            return p === void 0 && (p = 7e3), R(f, void 0, void 0, function() {
              var v, t = this;
              return d(this, function(a) {
                return v = Date.now(), [
                  2,
                  new Promise(function(i) {
                    var e = t;
                    function n() {
                      var r = e.getEventByLastEventByName(u);
                      r === void 0 ? Date.now() - v > p ? i(void 0) : setTimeout(n, 1e3) : i(r);
                    }
                    n();
                  })
                ];
              });
            });
          };
        }
        return g.getInstance = function() {
          return g.instance == null && (g.instance = new g()), g.instance;
        }, g;
      })()
    );
    s.ProcessState = o;
  })(Me)), Me;
}
var Ue = {}, nn;
function Lt() {
  return nn || (nn = 1, Object.defineProperty(Ue, "__esModule", { value: !0 }), Ue.supported_fdi = Ue.package_version = void 0, Ue.package_version = "20.1.6", Ue.supported_fdi = ["1.16", "1.17", "1.18", "1.19", "2.0", "3.0", "3.1", "4.0", "4.1"]), Ue;
}
var Qe = {}, ke = {}, rn;
function _r() {
  if (rn) return ke;
  rn = 1;
  var s = ke && ke.__awaiter || function(o, g, f, u) {
    function p(v) {
      return v instanceof f ? v : new f(function(t) {
        t(v);
      });
    }
    return new (f || (f = Promise))(function(v, t) {
      function a(n) {
        try {
          e(u.next(n));
        } catch (r) {
          t(r);
        }
      }
      function i(n) {
        try {
          e(u.throw(n));
        } catch (r) {
          t(r);
        }
      }
      function e(n) {
        n.done ? v(n.value) : p(n.value).then(a, i);
      }
      e((u = u.apply(o, g || [])).next());
    });
  }, R = ke && ke.__generator || function(o, g) {
    var f = {
      label: 0,
      sent: function() {
        if (v[0] & 1) throw v[1];
        return v[1];
      },
      trys: [],
      ops: []
    }, u, p, v, t;
    return t = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (t[Symbol.iterator] = function() {
      return this;
    }), t;
    function a(e) {
      return function(n) {
        return i([e, n]);
      };
    }
    function i(e) {
      if (u) throw new TypeError("Generator is already executing.");
      for (; f; )
        try {
          if (u = 1, p && (v = e[0] & 2 ? p.return : e[0] ? p.throw || ((v = p.return) && v.call(p), 0) : p.next) && !(v = v.call(p, e[1])).done)
            return v;
          switch (p = 0, v && (e = [e[0] & 2, v.value]), e[0]) {
            case 0:
            case 1:
              v = e;
              break;
            case 4:
              return f.label++, { value: e[1], done: !1 };
            case 5:
              f.label++, p = e[1], e = [0];
              continue;
            case 7:
              e = f.ops.pop(), f.trys.pop();
              continue;
            default:
              if (v = f.trys, !(v = v.length > 0 && v[v.length - 1]) && (e[0] === 6 || e[0] === 2)) {
                f = 0;
                continue;
              }
              if (e[0] === 3 && (!v || e[1] > v[0] && e[1] < v[3])) {
                f.label = e[1];
                break;
              }
              if (e[0] === 6 && f.label < v[1]) {
                f.label = v[1], v = e;
                break;
              }
              if (v && f.label < v[2]) {
                f.label = v[2], f.ops.push(e);
                break;
              }
              v[2] && f.ops.pop(), f.trys.pop();
              continue;
          }
          e = g.call(o, f);
        } catch (n) {
          e = [6, n], p = 0;
        } finally {
          u = v = 0;
        }
      if (e[0] & 5) throw e[1];
      return { value: e[0] ? e[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(ke, "__esModule", { value: !0 }), ke.defaultCookieHandlerImplementation = void 0;
  var d = De();
  return ke.defaultCookieHandlerImplementation = {
    getCookie: function() {
      return s(this, void 0, void 0, function() {
        return R(this, function(o) {
          return [
            2,
            d.default.getReferenceOrThrow().windowHandler.getWindowUnsafe().document.cookie
          ];
        });
      });
    },
    setCookie: function(o) {
      return s(this, void 0, void 0, function() {
        return R(this, function(g) {
          return d.default.getReferenceOrThrow().windowHandler.getWindowUnsafe().document.cookie = o, [
            2
            /*return*/
          ];
        });
      });
    }
  }, ke;
}
var on;
function qt() {
  if (on) return Qe;
  on = 1, Object.defineProperty(Qe, "__esModule", { value: !0 }), Qe.CookieHandlerReference = void 0;
  var s = _r(), R = (
    /** @class */
    (function() {
      function d(o) {
        var g = function(f) {
          return f;
        };
        o !== void 0 && (g = o), this.cookieHandler = g(s.defaultCookieHandlerImplementation);
      }
      return d.init = function(o) {
        d.instance === void 0 && (d.instance = new d(o));
      }, d.getReferenceOrThrow = function() {
        if (d.instance === void 0)
          throw new Error("SuperTokensCookieHandler must be initialized before calling this method.");
        return d.instance;
      }, d;
    })()
  );
  return Qe.CookieHandlerReference = R, Qe.default = R, Qe;
}
var Je = {}, Se = {}, gt = {}, sn;
function Cr() {
  if (sn) return gt;
  sn = 1, Object.defineProperty(gt, "__esModule", { value: !0 });
  var s = (
    /** @class */
    (function() {
      function d() {
        var o = this;
        this.locked = /* @__PURE__ */ new Map(), this.addToLocked = function(g, f) {
          var u = o.locked.get(g);
          u === void 0 ? f === void 0 ? o.locked.set(g, []) : o.locked.set(g, [f]) : f !== void 0 && (u.unshift(f), o.locked.set(g, u));
        }, this.isLocked = function(g) {
          return o.locked.has(g);
        }, this.lock = function(g) {
          return new Promise(function(f, u) {
            o.isLocked(g) ? o.addToLocked(g, f) : (o.addToLocked(g), f());
          });
        }, this.unlock = function(g) {
          var f = o.locked.get(g);
          if (f === void 0 || f.length === 0) {
            o.locked.delete(g);
            return;
          }
          var u = f.pop();
          o.locked.set(g, f), u !== void 0 && setTimeout(u, 0);
        };
      }
      return d.getInstance = function() {
        return d.instance === void 0 && (d.instance = new d()), d.instance;
      }, d;
    })()
  );
  function R() {
    return s.getInstance();
  }
  return gt.default = R, gt;
}
var an;
function Pr() {
  if (an) return Se;
  an = 1;
  var s = Se && Se.__awaiter || function(a, i, e, n) {
    return new (e || (e = Promise))(function(r, c) {
      function l(y) {
        try {
          m(n.next(y));
        } catch (w) {
          c(w);
        }
      }
      function h(y) {
        try {
          m(n.throw(y));
        } catch (w) {
          c(w);
        }
      }
      function m(y) {
        y.done ? r(y.value) : new e(function(w) {
          w(y.value);
        }).then(l, h);
      }
      m((n = n.apply(a, i || [])).next());
    });
  }, R = Se && Se.__generator || function(a, i) {
    var e = { label: 0, sent: function() {
      if (c[0] & 1) throw c[1];
      return c[1];
    }, trys: [], ops: [] }, n, r, c, l;
    return l = { next: h(0), throw: h(1), return: h(2) }, typeof Symbol == "function" && (l[Symbol.iterator] = function() {
      return this;
    }), l;
    function h(y) {
      return function(w) {
        return m([y, w]);
      };
    }
    function m(y) {
      if (n) throw new TypeError("Generator is already executing.");
      for (; e; ) try {
        if (n = 1, r && (c = y[0] & 2 ? r.return : y[0] ? r.throw || ((c = r.return) && c.call(r), 0) : r.next) && !(c = c.call(r, y[1])).done) return c;
        switch (r = 0, c && (y = [y[0] & 2, c.value]), y[0]) {
          case 0:
          case 1:
            c = y;
            break;
          case 4:
            return e.label++, { value: y[1], done: !1 };
          case 5:
            e.label++, r = y[1], y = [0];
            continue;
          case 7:
            y = e.ops.pop(), e.trys.pop();
            continue;
          default:
            if (c = e.trys, !(c = c.length > 0 && c[c.length - 1]) && (y[0] === 6 || y[0] === 2)) {
              e = 0;
              continue;
            }
            if (y[0] === 3 && (!c || y[1] > c[0] && y[1] < c[3])) {
              e.label = y[1];
              break;
            }
            if (y[0] === 6 && e.label < c[1]) {
              e.label = c[1], c = y;
              break;
            }
            if (c && e.label < c[2]) {
              e.label = c[2], e.ops.push(y);
              break;
            }
            c[2] && e.ops.pop(), e.trys.pop();
            continue;
        }
        y = i.call(a, e);
      } catch (w) {
        y = [6, w], r = 0;
      } finally {
        n = c = 0;
      }
      if (y[0] & 5) throw y[1];
      return { value: y[0] ? y[1] : void 0, done: !0 };
    }
  }, d = Se;
  Object.defineProperty(Se, "__esModule", { value: !0 });
  var o = Cr(), g = "browser-tabs-lock-key", f = {
    key: function(a) {
      return s(d, void 0, void 0, function() {
        return R(this, function(i) {
          throw new Error("Unsupported");
        });
      });
    },
    getItem: function(a) {
      return s(d, void 0, void 0, function() {
        return R(this, function(i) {
          throw new Error("Unsupported");
        });
      });
    },
    clear: function() {
      return s(d, void 0, void 0, function() {
        return R(this, function(a) {
          return [2, window.localStorage.clear()];
        });
      });
    },
    removeItem: function(a) {
      return s(d, void 0, void 0, function() {
        return R(this, function(i) {
          throw new Error("Unsupported");
        });
      });
    },
    setItem: function(a, i) {
      return s(d, void 0, void 0, function() {
        return R(this, function(e) {
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
    setItemSync: function(a, i) {
      return window.localStorage.setItem(a, i);
    }
  };
  function u(a) {
    return new Promise(function(i) {
      return setTimeout(i, a);
    });
  }
  function p(a) {
    for (var i = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", e = "", n = 0; n < a; n++) {
      var r = Math.floor(Math.random() * i.length);
      e += i[r];
    }
    return e;
  }
  function v() {
    return Date.now().toString() + p(15);
  }
  var t = (
    /** @class */
    (function() {
      function a(i) {
        this.acquiredIatSet = /* @__PURE__ */ new Set(), this.storageHandler = void 0, this.id = v(), this.acquireLock = this.acquireLock.bind(this), this.releaseLock = this.releaseLock.bind(this), this.releaseLock__private__ = this.releaseLock__private__.bind(this), this.waitForSomethingToChange = this.waitForSomethingToChange.bind(this), this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(this), this.storageHandler = i, a.waiters === void 0 && (a.waiters = []);
      }
      return a.prototype.acquireLock = function(i, e) {
        return e === void 0 && (e = 5e3), s(this, void 0, void 0, function() {
          var n, r, c, l, h, m, y, w;
          return R(this, function(I) {
            switch (I.label) {
              case 0:
                n = Date.now() + p(4), r = Date.now() + e, c = g + "-" + i, l = this.storageHandler === void 0 ? f : this.storageHandler, I.label = 1;
              case 1:
                return Date.now() < r ? [4, u(30)] : [3, 8];
              case 2:
                return I.sent(), h = l.getItemSync(c), h !== null ? [3, 5] : (m = this.id + "-" + i + "-" + n, [4, u(Math.floor(Math.random() * 25))]);
              case 3:
                return I.sent(), l.setItemSync(c, JSON.stringify({
                  id: this.id,
                  iat: n,
                  timeoutKey: m,
                  timeAcquired: Date.now(),
                  timeRefreshed: Date.now()
                })), [4, u(30)];
              case 4:
                return I.sent(), y = l.getItemSync(c), y !== null && (w = JSON.parse(y), w.id === this.id && w.iat === n) ? (this.acquiredIatSet.add(n), this.refreshLockWhileAcquired(c, n), [2, !0]) : [3, 7];
              case 5:
                return a.lockCorrector(this.storageHandler === void 0 ? f : this.storageHandler), [4, this.waitForSomethingToChange(r)];
              case 6:
                I.sent(), I.label = 7;
              case 7:
                return n = Date.now() + p(4), [3, 1];
              case 8:
                return [2, !1];
            }
          });
        });
      }, a.prototype.refreshLockWhileAcquired = function(i, e) {
        return s(this, void 0, void 0, function() {
          var n = this;
          return R(this, function(r) {
            return setTimeout(function() {
              return s(n, void 0, void 0, function() {
                var c, l, h;
                return R(this, function(m) {
                  switch (m.label) {
                    case 0:
                      return [4, o.default().lock(e)];
                    case 1:
                      if (m.sent(), !this.acquiredIatSet.has(e))
                        return o.default().unlock(e), [
                          2
                          /*return*/
                        ];
                      if (c = this.storageHandler === void 0 ? f : this.storageHandler, l = c.getItemSync(i), l !== null)
                        h = JSON.parse(l), h.timeRefreshed = Date.now(), c.setItemSync(i, JSON.stringify(h)), o.default().unlock(e);
                      else
                        return o.default().unlock(e), [
                          2
                          /*return*/
                        ];
                      return this.refreshLockWhileAcquired(i, e), [
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
      }, a.prototype.waitForSomethingToChange = function(i) {
        return s(this, void 0, void 0, function() {
          return R(this, function(e) {
            switch (e.label) {
              case 0:
                return [4, new Promise(function(n) {
                  var r = !1, c = Date.now(), l = 50, h = !1;
                  function m() {
                    if (h || (window.removeEventListener("storage", m), a.removeFromWaiting(m), clearTimeout(y), h = !0), !r) {
                      r = !0;
                      var w = l - (Date.now() - c);
                      w > 0 ? setTimeout(n, w) : n(null);
                    }
                  }
                  window.addEventListener("storage", m), a.addToWaiting(m);
                  var y = setTimeout(m, Math.max(0, i - Date.now()));
                })];
              case 1:
                return e.sent(), [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, a.addToWaiting = function(i) {
        this.removeFromWaiting(i), a.waiters !== void 0 && a.waiters.push(i);
      }, a.removeFromWaiting = function(i) {
        a.waiters !== void 0 && (a.waiters = a.waiters.filter(function(e) {
          return e !== i;
        }));
      }, a.notifyWaiters = function() {
        if (a.waiters !== void 0) {
          var i = a.waiters.slice();
          i.forEach(function(e) {
            return e();
          });
        }
      }, a.prototype.releaseLock = function(i) {
        return s(this, void 0, void 0, function() {
          return R(this, function(e) {
            switch (e.label) {
              case 0:
                return [4, this.releaseLock__private__(i)];
              case 1:
                return [2, e.sent()];
            }
          });
        });
      }, a.prototype.releaseLock__private__ = function(i) {
        return s(this, void 0, void 0, function() {
          var e, n, r, c;
          return R(this, function(l) {
            switch (l.label) {
              case 0:
                return e = this.storageHandler === void 0 ? f : this.storageHandler, n = g + "-" + i, r = e.getItemSync(n), r === null ? [
                  2
                  /*return*/
                ] : (c = JSON.parse(r), c.id !== this.id ? [3, 2] : [4, o.default().lock(c.iat)]);
              case 1:
                l.sent(), this.acquiredIatSet.delete(c.iat), e.removeItemSync(n), o.default().unlock(c.iat), a.notifyWaiters(), l.label = 2;
              case 2:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, a.lockCorrector = function(i) {
        for (var e = Date.now() - 5e3, n = i, r = [], c = 0; ; ) {
          var l = n.keySync(c);
          if (l === null)
            break;
          r.push(l), c++;
        }
        for (var h = !1, m = 0; m < r.length; m++) {
          var y = r[m];
          if (y.includes(g)) {
            var w = n.getItemSync(y);
            if (w !== null) {
              var I = JSON.parse(w);
              (I.timeRefreshed === void 0 && I.timeAcquired < e || I.timeRefreshed !== void 0 && I.timeRefreshed < e) && (n.removeItemSync(y), h = !0);
            }
          }
        }
        h && a.notifyWaiters();
      }, a.waiters = void 0, a;
    })()
  );
  return Se.default = t, Se;
}
var un;
function Ft() {
  if (un) return Je;
  un = 1, Object.defineProperty(Je, "__esModule", { value: !0 }), Je.LockFactoryReference = void 0;
  var s = Pr(), R = function(o) {
    return function() {
      return Promise.resolve(new s.default(o));
    };
  }, d = (
    /** @class */
    (function() {
      function o(g) {
        this.lockFactory = g;
      }
      return o.init = function(g, f) {
        this.instance === void 0 && (this.instance = new o(
          g ?? R(f)
        ));
      }, o.getReferenceOrThrow = function() {
        if (o.instance === void 0)
          throw new Error("SuperTokensLockReference must be initialized before calling this method.");
        return o.instance;
      }, o;
    })()
  );
  return Je.LockFactoryReference = d, Je.default = d, Je;
}
var Te = {}, cn;
function ct() {
  if (cn) return Te;
  cn = 1, Object.defineProperty(Te, "__esModule", { value: !0 }), Te.logDebugMessage = Te.disableLogging = Te.enableLogging = void 0;
  var s = Lt(), R = "com.supertokens", d = !1;
  function o() {
    d = !0;
  }
  Te.enableLogging = o;
  function g() {
    d = !1;
  }
  Te.disableLogging = g;
  function f(u) {
    d && console.log(
      "".concat(R, ' {t: "').concat((/* @__PURE__ */ new Date()).toISOString(), '", message: "').concat(u, '", supertokens-website-ver: "').concat(s.package_version, '"}')
    );
  }
  return Te.logDebugMessage = f, Te;
}
var Ke = {}, nt = {}, ln;
function Ar() {
  if (ln) return nt;
  ln = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.DateProvider = void 0;
  var s = De(), R = (
    /** @class */
    (function() {
      function d() {
        this.clockSkewInMillis = 0, this.thresholdInSeconds = 7;
      }
      return d.init = function() {
        if (d.instance === void 0) {
          d.instance = new d();
          var o = s.default.getReferenceOrThrow().windowHandler.localStorage, g = o.getItemSync(d.CLOCK_SKEW_KEY), f = g !== null ? parseInt(g, 10) : 0;
          d.instance.setClientClockSkewInMillis(f);
        }
      }, d.getReferenceOrThrow = function() {
        if (d.instance === void 0)
          throw new Error("DateProvider must be initialized before calling this method.");
        return d.instance;
      }, d.prototype.getThresholdInSeconds = function() {
        return this.thresholdInSeconds;
      }, d.prototype.setThresholdInSeconds = function(o) {
        this.thresholdInSeconds = o;
      }, d.prototype.setClientClockSkewInMillis = function(o) {
        this.clockSkewInMillis = Math.abs(o) >= this.thresholdInSeconds * 1e3 ? o : 0;
        var g = s.default.getReferenceOrThrow().windowHandler.localStorage;
        g.setItemSync(d.CLOCK_SKEW_KEY, String(o));
      }, d.prototype.getClientClockSkewInMillis = function() {
        return this.clockSkewInMillis;
      }, d.prototype.now = function() {
        return Date.now() + this.getClientClockSkewInMillis();
      }, d.CLOCK_SKEW_KEY = "__st_clockSkewInMillis", d;
    })()
  );
  return nt.DateProvider = R, nt;
}
var dn;
function $e() {
  if (dn) return Ke;
  dn = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.DateProviderReference = void 0;
  var s = Ar(), R = (
    /** @class */
    (function() {
      function d(o) {
        o !== void 0 ? this.dateProvider = o() : (s.DateProvider.init(), this.dateProvider = s.DateProvider.getReferenceOrThrow());
      }
      return d.init = function(o) {
        d.instance === void 0 && (d.instance = new d(o));
      }, d.getReferenceOrThrow = function() {
        if (d.instance === void 0)
          throw new Error("SuperTokensDateProvider must be initialized before calling this method.");
        return d.instance;
      }, d;
    })()
  );
  return Ke.DateProviderReference = R, Ke.default = R, Ke;
}
var fn;
function lt() {
  return fn || (fn = 1, (function(s) {
    var R = Re && Re.__assign || function() {
      return R = Object.assign || function(S) {
        for (var E, A = 1, x = arguments.length; A < x; A++) {
          E = arguments[A];
          for (var M in E) Object.prototype.hasOwnProperty.call(E, M) && (S[M] = E[M]);
        }
        return S;
      }, R.apply(this, arguments);
    }, d = Re && Re.__awaiter || function(S, E, A, x) {
      function M(L) {
        return L instanceof A ? L : new A(function(V) {
          V(L);
        });
      }
      return new (A || (A = Promise))(function(L, V) {
        function H(Y) {
          try {
            j(x.next(Y));
          } catch (Z) {
            V(Z);
          }
        }
        function G(Y) {
          try {
            j(x.throw(Y));
          } catch (Z) {
            V(Z);
          }
        }
        function j(Y) {
          Y.done ? L(Y.value) : M(Y.value).then(H, G);
        }
        j((x = x.apply(S, E || [])).next());
      });
    }, o = Re && Re.__generator || function(S, E) {
      var A = {
        label: 0,
        sent: function() {
          if (L[0] & 1) throw L[1];
          return L[1];
        },
        trys: [],
        ops: []
      }, x, M, L, V;
      return V = { next: H(0), throw: H(1), return: H(2) }, typeof Symbol == "function" && (V[Symbol.iterator] = function() {
        return this;
      }), V;
      function H(j) {
        return function(Y) {
          return G([j, Y]);
        };
      }
      function G(j) {
        if (x) throw new TypeError("Generator is already executing.");
        for (; A; )
          try {
            if (x = 1, M && (L = j[0] & 2 ? M.return : j[0] ? M.throw || ((L = M.return) && L.call(M), 0) : M.next) && !(L = L.call(M, j[1])).done)
              return L;
            switch (M = 0, L && (j = [j[0] & 2, L.value]), j[0]) {
              case 0:
              case 1:
                L = j;
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
                if (L = A.trys, !(L = L.length > 0 && L[L.length - 1]) && (j[0] === 6 || j[0] === 2)) {
                  A = 0;
                  continue;
                }
                if (j[0] === 3 && (!L || j[1] > L[0] && j[1] < L[3])) {
                  A.label = j[1];
                  break;
                }
                if (j[0] === 6 && A.label < L[1]) {
                  A.label = L[1], L = j;
                  break;
                }
                if (L && A.label < L[2]) {
                  A.label = L[2], A.ops.push(j);
                  break;
                }
                L[2] && A.ops.pop(), A.trys.pop();
                continue;
            }
            j = E.call(S, A);
          } catch (Y) {
            j = [6, Y], M = 0;
          } finally {
            x = L = 0;
          }
        if (j[0] & 5) throw j[1];
        return { value: j[0] ? j[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(s, "__esModule", { value: !0 }), s.updateClockSkewUsingFrontToken = s.fireSessionUpdateEventsIfNecessary = s.setFrontToken = s.getFrontToken = s.setAntiCSRF = s.saveLastAccessTokenUpdate = s.getTokenForHeaderAuth = s.setToken = s.getStorageNameForToken = s.getLocalSessionState = s.onInvalidClaimResponse = s.onTokenUpdate = s.onUnauthorisedResponse = s.FrontToken = s.AntiCsrfToken = void 0;
    var g = Ht(), f = Lt(), u = qt(), p = De(), v = Ft(), t = ct(), a = $e(), i = (
      /** @class */
      (function() {
        function S() {
        }
        return S.getToken = function(E) {
          return d(this, void 0, void 0, function() {
            var A;
            return o(this, function(x) {
              switch (x.label) {
                case 0:
                  return (0, t.logDebugMessage)("AntiCsrfToken.getToken: called"), E === void 0 ? (S.tokenInfo = void 0, (0, t.logDebugMessage)("AntiCsrfToken.getToken: returning undefined"), [2, void 0]) : S.tokenInfo !== void 0 ? [3, 2] : [4, te()];
                case 1:
                  return A = x.sent(), A === null ? ((0, t.logDebugMessage)("AntiCsrfToken.getToken: returning undefined"), [2, void 0]) : (S.tokenInfo = {
                    antiCsrf: A,
                    associatedAccessTokenUpdate: E
                  }, [3, 4]);
                case 2:
                  return S.tokenInfo.associatedAccessTokenUpdate === E ? [3, 4] : (S.tokenInfo = void 0, [4, S.getToken(E)]);
                case 3:
                  return [2, x.sent()];
                case 4:
                  return (0, t.logDebugMessage)("AntiCsrfToken.getToken: returning: " + S.tokenInfo.antiCsrf), [2, S.tokenInfo.antiCsrf];
              }
            });
          });
        }, S.removeToken = function() {
          return d(this, void 0, void 0, function() {
            return o(this, function(E) {
              switch (E.label) {
                case 0:
                  return (0, t.logDebugMessage)("AntiCsrfToken.removeToken: called"), S.tokenInfo = void 0, [4, oe(void 0)];
                case 1:
                  return E.sent(), [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, S.setItem = function(E, A) {
          return d(this, void 0, void 0, function() {
            return o(this, function(x) {
              switch (x.label) {
                case 0:
                  return E === void 0 ? (S.tokenInfo = void 0, [
                    2
                    /*return*/
                  ]) : ((0, t.logDebugMessage)("AntiCsrfToken.setItem: called"), [4, oe(A)]);
                case 1:
                  return x.sent(), S.tokenInfo = {
                    antiCsrf: A,
                    associatedAccessTokenUpdate: E
                  }, [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, S;
      })()
    );
    s.AntiCsrfToken = i;
    var e = (
      /** @class */
      (function() {
        function S() {
        }
        return S.getTokenInfo = function() {
          return d(this, void 0, void 0, function() {
            var E, A;
            return o(this, function(x) {
              switch (x.label) {
                case 0:
                  return (0, t.logDebugMessage)("FrontToken.getTokenInfo: called"), [4, F()];
                case 1:
                  return E = x.sent(), E !== null ? [3, 5] : [4, b(!1)];
                case 2:
                  return x.sent().status !== "EXISTS" ? [3, 4] : [
                    4,
                    new Promise(function(M) {
                      S.waiters.push(M);
                    })
                  ];
                case 3:
                  return x.sent(), [2, S.getTokenInfo()];
                case 4:
                  return [2, void 0];
                case 5:
                  return A = U(E), (0, t.logDebugMessage)("FrontToken.getTokenInfo: returning ate: " + A.ate), (0, t.logDebugMessage)("FrontToken.getTokenInfo: returning uid: " + A.uid), (0, t.logDebugMessage)("FrontToken.getTokenInfo: returning up: " + A.up), [2, A];
              }
            });
          });
        }, S.removeToken = function() {
          return d(this, void 0, void 0, function() {
            return o(this, function(E) {
              switch (E.label) {
                case 0:
                  return (0, t.logDebugMessage)("FrontToken.removeToken: called"), [4, N(void 0)];
                case 1:
                  return E.sent(), [4, _("access", "")];
                case 2:
                  return E.sent(), [4, _("refresh", "")];
                case 3:
                  return E.sent(), [4, i.removeToken()];
                case 4:
                  return E.sent(), S.waiters.forEach(function(A) {
                    return A(void 0);
                  }), S.waiters = [], [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, S.setItem = function(E) {
          return d(this, void 0, void 0, function() {
            return o(this, function(A) {
              switch (A.label) {
                case 0:
                  return [4, Q()];
                case 1:
                  return A.sent(), E === "remove" ? [2, S.removeToken()] : ((0, t.logDebugMessage)("FrontToken.setItem: called"), [4, N(E)]);
                case 2:
                  return A.sent(), S.waiters.forEach(function(x) {
                    return x(void 0);
                  }), S.waiters = [], [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, S.doesTokenExists = function() {
          return d(this, void 0, void 0, function() {
            var E;
            return o(this, function(A) {
              switch (A.label) {
                case 0:
                  return [4, q()];
                case 1:
                  return E = A.sent(), [2, E !== null];
              }
            });
          });
        }, S.waiters = [], S;
      })()
    );
    s.FrontToken = e;
    var n = (
      /** @class */
      (function() {
        function S() {
        }
        S.init = function(A, x) {
          (0, t.logDebugMessage)("init: called"), (0, t.logDebugMessage)("init: Input apiBasePath: " + A.apiBasePath), (0, t.logDebugMessage)("init: Input apiDomain: " + A.apiDomain), (0, t.logDebugMessage)("init: Input autoAddCredentials: " + A.autoAddCredentials), (0, t.logDebugMessage)("init: Input sessionTokenBackendDomain: " + A.sessionTokenBackendDomain), (0, t.logDebugMessage)("init: Input isInIframe: " + A.isInIframe), (0, t.logDebugMessage)("init: Input sessionExpiredStatusCode: " + A.sessionExpiredStatusCode), (0, t.logDebugMessage)("init: Input sessionTokenFrontendDomain: " + A.sessionTokenFrontendDomain), (0, t.logDebugMessage)("init: Input tokenTransferMethod: " + A.tokenTransferMethod);
          var M = p.default.getReferenceOrThrow().windowHandler.getWindowUnsafe();
          S.env = M === void 0 || M.fetch === void 0 ? wr : M, S.refreshTokenUrl = A.apiDomain + A.apiBasePath + "/session/refresh", S.signOutUrl = A.apiDomain + A.apiBasePath + "/signout", S.rid = "session", S.config = A, S.env.__supertokensOriginalFetch === void 0 && ((0, t.logDebugMessage)("init: __supertokensOriginalFetch is undefined"), S.env.__supertokensOriginalFetch = S.env.fetch.bind(S.env), S.env.__supertokensSessionRecipe = x, S.env.fetch = S.env.__supertokensSessionRecipe.addFetchInterceptorsAndReturnModifiedFetch({
            originalFetch: S.env.__supertokensOriginalFetch,
            userContext: {}
          }), S.env.__supertokensSessionRecipe.addXMLHttpRequestInterceptor({
            userContext: {}
          })), S.recipeImpl = S.env.__supertokensSessionRecipe, S.initCalled = !0;
        };
        var E;
        return E = S, S.initCalled = !1, S.doRequest = function(A, x, M) {
          return d(void 0, void 0, void 0, function() {
            var L, V, H, G, j, Y, Z, we, ue, ce, Ie, J, de, bt, Be;
            return o(E, function(ie) {
              switch (ie.label) {
                case 0:
                  if (!S.initCalled)
                    throw Error("init function not called");
                  (0, t.logDebugMessage)("doRequest: start of fetch interception"), L = !1;
                  try {
                    V = void 0, typeof M == "string" ? V = M : typeof M == "object" && (typeof M.url == "string" ? V = M.url : typeof M.href == "string" && (V = M.href)), L = !S.recipeImpl.shouldDoInterceptionBasedOnUrl(
                      V,
                      S.config.apiDomain,
                      S.config.sessionTokenBackendDomain
                    );
                  } catch (Wt) {
                    if (Wt.message === "Please provide a valid domain name")
                      (0, t.logDebugMessage)(
                        "doRequest: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                      ), L = !S.recipeImpl.shouldDoInterceptionBasedOnUrl(
                        p.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                        S.config.apiDomain,
                        S.config.sessionTokenBackendDomain
                      );
                    else
                      throw Wt;
                  }
                  return (0, t.logDebugMessage)("doRequest: Value of doNotDoInterception: " + L), L ? ((0, t.logDebugMessage)("doRequest: Returning without interception"), [4, A(x)]) : [3, 2];
                case 1:
                  return [2, ie.sent()];
                case 2:
                  return H = new Headers(
                    x !== void 0 && x.headers !== void 0 ? x.headers : M.headers
                  ), H.has("Authorization") ? [4, P("access")] : [3, 5];
                case 3:
                  return G = ie.sent(), [4, P("refresh")];
                case 4:
                  j = ie.sent(), G !== void 0 && j !== void 0 && H.get("Authorization") === "Bearer ".concat(G) && ((0, t.logDebugMessage)(
                    "doRequest: Removing Authorization from user provided headers because it contains our access token"
                  ), H.delete("Authorization")), ie.label = 5;
                case 5:
                  (0, t.logDebugMessage)("doRequest: Interception started"), g.ProcessState.getInstance().addState(
                    g.PROCESS_STATE.CALLING_INTERCEPTION_REQUEST
                  ), Y = 0, Z = void 0, ie.label = 6;
                case 6:
                  return [4, b(!0)];
                case 7:
                  return we = ie.sent(), ue = new Headers(H), ce = R(R({}, x), { headers: ue }), we.status !== "EXISTS" ? [3, 9] : [4, i.getToken(we.lastAccessTokenUpdate)];
                case 8:
                  Ie = ie.sent(), Ie !== void 0 && ((0, t.logDebugMessage)("doRequest: Adding anti-csrf token to request"), ue.set("anti-csrf", Ie)), ie.label = 9;
                case 9:
                  return S.config.autoAddCredentials && ((0, t.logDebugMessage)("doRequest: Adding credentials include"), ce === void 0 ? ce = {
                    credentials: "include"
                  } : ce.credentials === void 0 && (ce = R(R({}, ce), {
                    credentials: "include"
                  }))), ue.has("rid") ? (0, t.logDebugMessage)("doRequest: rid header was already there in request") : ((0, t.logDebugMessage)("doRequest: Adding rid header: anti-csrf"), ue.set("rid", "anti-csrf")), J = S.config.tokenTransferMethod, (0, t.logDebugMessage)("doRequest: Adding st-auth-mode header: " + J), ue.set("st-auth-mode", J), [4, D(ue)];
                case 10:
                  return ie.sent(), (0, t.logDebugMessage)("doRequest: Making user's http call"), [4, A(ce)];
                case 11:
                  return de = ie.sent(), (0, t.logDebugMessage)("doRequest: User's http call ended"), [4, O(de)];
                case 12:
                  if (ie.sent(), z(
                    we.status === "EXISTS",
                    de.status,
                    de.headers.get("front-token")
                  ), de.status !== S.config.sessionExpiredStatusCode)
                    return [3, 14];
                  if ((0, t.logDebugMessage)("doRequest: Status code is: " + de.status), Y >= S.config.maxRetryAttemptsForSessionRefresh)
                    throw (0, t.logDebugMessage)(
                      "doRequest: Maximum session refresh attempts reached. sessionRefreshAttempts: ".concat(Y, ", maxRetryAttemptsForSessionRefresh: ").concat(S.config.maxRetryAttemptsForSessionRefresh)
                    ), bt = "Received a 401 response from ".concat(
                      M,
                      ". Attempted to refresh the session and retry the request with the updated session tokens "
                    ).concat(
                      S.config.maxRetryAttemptsForSessionRefresh,
                      " times, but each attempt resulted in a 401 error. The maximum session refresh limit has been reached. Please investigate your API. To increase the session refresh attempts, update maxRetryAttemptsForSessionRefresh in the config."
                    ), console.error(bt), new Error(bt);
                  return [4, y(we)];
                case 13:
                  if (Be = ie.sent(), Y++, (0, t.logDebugMessage)("doRequest: sessionRefreshAttempts: " + Y), Be.result !== "RETRY") {
                    if ((0, t.logDebugMessage)("doRequest: Not retrying original request"), Be.error !== void 0)
                      if (Be.error instanceof Response)
                        Z = Be.error;
                      else
                        throw Be.error;
                    else
                      Z = de;
                    return [3, 18];
                  }
                  return (0, t.logDebugMessage)("doRequest: Retrying original request"), [3, 17];
                case 14:
                  return de.status !== S.config.invalidClaimStatusCode ? [3, 16] : [4, I(de)];
                case 15:
                  ie.sent(), ie.label = 16;
                case 16:
                  return [2, de];
                case 17:
                  return [3, 6];
                case 18:
                  return [2, Z];
              }
            });
          });
        }, S.attemptRefreshingSession = function() {
          return d(void 0, void 0, void 0, function() {
            var A, x;
            return o(E, function(M) {
              switch (M.label) {
                case 0:
                  if (!S.initCalled)
                    throw Error("init function not called");
                  return [4, b(!1)];
                case 1:
                  return A = M.sent(), [4, y(A)];
                case 2:
                  if (x = M.sent(), x.result === "API_ERROR")
                    throw x.error;
                  return [2, x.result === "RETRY"];
              }
            });
          });
        }, S;
      })()
    );
    s.default = n;
    var r = "st-last-access-token-update", c = "st-refresh-token", l = "st-access-token", h = "sAntiCsrf", m = "sFrontToken";
    function y(S) {
      return d(this, void 0, void 0, function() {
        var E, A, x, M, L, V, H, G, j, Y, Z, we, ue, ce, Ie;
        return o(this, function(J) {
          switch (J.label) {
            case 0:
              return [4, v.default.getReferenceOrThrow().lockFactory()];
            case 1:
              E = J.sent(), J.label = 2;
            case 2:
              return (0, t.logDebugMessage)("onUnauthorisedResponse: trying to acquire lock"), [4, E.acquireLock("REFRESH_TOKEN_USE", 1e3)];
            case 3:
              if (!J.sent()) return [3, 21];
              (0, t.logDebugMessage)("onUnauthorisedResponse: lock acquired"), J.label = 4;
            case 4:
              return J.trys.push([4, 17, 19, 21]), [4, b(!1)];
            case 5:
              return A = J.sent(), A.status === "NOT_EXISTS" ? ((0, t.logDebugMessage)(
                "onUnauthorisedResponse: Not refreshing because local session state is NOT_EXISTS"
              ), n.config.onHandleEvent({
                action: "UNAUTHORISED",
                sessionExpiredOrRevoked: !1,
                userContext: {}
              }), [2, { result: "SESSION_EXPIRED" }]) : (x = A.status === "EXISTS", M = S.status === "EXISTS", L = A.status !== S.status, V = "lastAccessTokenUpdate" in A && "lastAccessTokenUpdate" in S && A.lastAccessTokenUpdate !== S.lastAccessTokenUpdate, L && x ? ((0, t.logDebugMessage)(
                "onUnauthorisedResponse: Retrying early because session status has changed and postLockLSS.status is EXISTS"
              ), [2, { result: "RETRY" }]) : x && M && V ? ((0, t.logDebugMessage)(
                "onUnauthorisedResponse: Retrying early because pre and post lastAccessTokenUpdate don't match"
              ), [2, { result: "RETRY" }]) : (H = new Headers(), S.status !== "EXISTS" ? [3, 7] : [4, i.getToken(S.lastAccessTokenUpdate)]));
            case 6:
              G = J.sent(), G !== void 0 && ((0, t.logDebugMessage)(
                "onUnauthorisedResponse: Adding anti-csrf token to refresh API call"
              ), H.set("anti-csrf", G)), J.label = 7;
            case 7:
              return (0, t.logDebugMessage)("onUnauthorisedResponse: Adding rid and fdi-versions to refresh call header"), H.set("rid", n.rid), H.set("fdi-version", f.supported_fdi.join(",")), j = n.config.tokenTransferMethod, (0, t.logDebugMessage)("onUnauthorisedResponse: Adding st-auth-mode header: " + j), H.set("st-auth-mode", j), [4, D(H, !0)];
            case 8:
              return J.sent(), (0, t.logDebugMessage)("onUnauthorisedResponse: Calling refresh pre API hook"), [
                4,
                n.config.preAPIHook({
                  action: "REFRESH_SESSION",
                  requestInit: {
                    method: "post",
                    credentials: "include",
                    headers: H
                  },
                  url: n.refreshTokenUrl,
                  userContext: {}
                })
              ];
            case 9:
              return Y = J.sent(), (0, t.logDebugMessage)("onUnauthorisedResponse: Making refresh call"), [
                4,
                n.env.__supertokensOriginalFetch(Y.url, Y.requestInit)
              ];
            case 10:
              return Z = J.sent(), (0, t.logDebugMessage)("onUnauthorisedResponse: Refresh call ended"), [4, O(Z)];
            case 11:
              return J.sent(), (0, t.logDebugMessage)("onUnauthorisedResponse: Refresh status code is: " + Z.status), we = Z.status === n.config.sessionExpiredStatusCode, Z.headers.get("front-token") !== null ? [3, 14] : we ? [4, e.setItem("remove")] : [3, 13];
            case 12:
              return J.sent(), [3, 14];
            case 13:
              if (Z.status === 200)
                throw ue = "The 'front-token' header is missing from a successful refresh-session response. The most likely causes are proxy settings (e.g.: 'front-token' missing from 'access-control-expose-headers' or a proxy stripping this header). Please investigate your API.", console.error(ue), new Error(ue);
              J.label = 14;
            case 14:
              if (z(
                S.status === "EXISTS",
                Z.status,
                we && Z.headers.get("front-token") === null ? "remove" : Z.headers.get("front-token")
              ), Z.status >= 300)
                throw Z;
              return [
                4,
                n.config.postAPIHook({
                  action: "REFRESH_SESSION",
                  fetchResponse: Z.clone(),
                  requestInit: Y.requestInit,
                  url: Y.url,
                  userContext: {}
                })
              ];
            case 15:
              return J.sent(), [4, b(!1)];
            case 16:
              return J.sent().status === "NOT_EXISTS" ? ((0, t.logDebugMessage)(
                "onUnauthorisedResponse: local session doesn't exist, so returning session expired"
              ), [2, { result: "SESSION_EXPIRED" }]) : (n.config.onHandleEvent({
                action: "REFRESH_SESSION",
                userContext: {}
              }), (0, t.logDebugMessage)("onUnauthorisedResponse: Sending RETRY signal"), [2, { result: "RETRY" }]);
            case 17:
              return ce = J.sent(), [4, b(!1)];
            case 18:
              return J.sent().status === "NOT_EXISTS" ? ((0, t.logDebugMessage)(
                "onUnauthorisedResponse: local session doesn't exist, so returning session expired"
              ), [2, { result: "SESSION_EXPIRED", error: ce }]) : ((0, t.logDebugMessage)("onUnauthorisedResponse: sending API_ERROR"), [2, { result: "API_ERROR", error: ce }]);
            case 19:
              return [4, E.releaseLock("REFRESH_TOKEN_USE")];
            case 20:
              return J.sent(), (0, t.logDebugMessage)("onUnauthorisedResponse: Released lock"), [
                7
                /*endfinally*/
              ];
            case 21:
              return [4, b(!1)];
            case 22:
              return Ie = J.sent(), Ie.status === "NOT_EXISTS" ? ((0, t.logDebugMessage)(
                "onUnauthorisedResponse: lock acquired failed and local session doesn't exist, so sending SESSION_EXPIRED"
              ), [2, { result: "SESSION_EXPIRED" }]) : Ie.status !== S.status || Ie.status === "EXISTS" && S.status === "EXISTS" && Ie.lastAccessTokenUpdate !== S.lastAccessTokenUpdate ? ((0, t.logDebugMessage)(
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
    s.onUnauthorisedResponse = y;
    function w() {
      (0, t.logDebugMessage)("onTokenUpdate: firing ACCESS_TOKEN_PAYLOAD_UPDATED event"), n.config.onHandleEvent({
        action: "ACCESS_TOKEN_PAYLOAD_UPDATED",
        userContext: {}
      });
    }
    s.onTokenUpdate = w;
    function I(S) {
      return d(this, void 0, void 0, function() {
        var E;
        return o(this, function(A) {
          switch (A.label) {
            case 0:
              return A.trys.push([0, 2, , 3]), [
                4,
                n.recipeImpl.getInvalidClaimsFromResponse({
                  response: S,
                  userContext: {}
                })
              ];
            case 1:
              return E = A.sent(), E && n.config.onHandleEvent({
                action: "API_INVALID_CLAIM",
                claimValidationErrors: E,
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
    s.onInvalidClaimResponse = I;
    function b(S) {
      return d(this, void 0, void 0, function() {
        var E, A, x, M, L, V, H;
        return o(this, function(G) {
          switch (G.label) {
            case 0:
              return (0, t.logDebugMessage)("getLocalSessionState: called"), [4, C(r)];
            case 1:
              return E = G.sent(), [4, e.doesTokenExists()];
            case 2:
              return A = G.sent(), A && E !== void 0 ? ((0, t.logDebugMessage)("getLocalSessionState: returning EXISTS since both frontToken and lastAccessTokenUpdate exists"), [2, { status: "EXISTS", lastAccessTokenUpdate: E }]) : [3, 3];
            case 3:
              return E ? ((0, t.logDebugMessage)("getLocalSessionState: returning NOT_EXISTS since frontToken was cleared but lastAccessTokenUpdate exists"), [2, { status: "NOT_EXISTS" }]) : [3, 4];
            case 4:
              return x = {
                status: "MAY_EXIST"
              }, S ? ((0, t.logDebugMessage)("getLocalSessionState: trying to refresh"), [4, y(x)]) : [3, 8];
            case 5:
              return M = G.sent(), M.result !== "RETRY" ? ((0, t.logDebugMessage)(
                "getLocalSessionState: return NOT_EXISTS in case error from backend" + M.result
              ), [
                2,
                {
                  status: "NOT_EXISTS"
                }
              ]) : [4, C(r)];
            case 6:
              return L = G.sent(), [4, e.doesTokenExists()];
            case 7:
              if (V = G.sent(), !V || L === void 0)
                throw H = "Failed to retrieve local session state from cookies after a successful session refresh. This indicates a configuration error or that the browser is preventing cookie writes.", console.error(H), new Error(H);
              return (0, t.logDebugMessage)("getLocalSessionState: returning EXISTS since both frontToken and lastAccessTokenUpdate exists post refresh"), [2, { status: "EXISTS", lastAccessTokenUpdate: L }];
            case 8:
              return (0, t.logDebugMessage)("getLocalSessionState: returning: " + x.status), [2, x];
          }
        });
      });
    }
    s.getLocalSessionState = b;
    function k(S) {
      switch (S) {
        case "access":
          return l;
        case "refresh":
          return c;
      }
    }
    s.getStorageNameForToken = k;
    function _(S, E) {
      var A = k(S);
      return E !== "" ? ((0, t.logDebugMessage)("setToken: saved ".concat(S, " token into cookies")), T(A, E, Date.now() + 31536e5)) : ((0, t.logDebugMessage)("setToken: cleared ".concat(S, " token from cookies")), T(A, E, 0));
    }
    s.setToken = _;
    function T(S, E, A) {
      var x = "Fri, 31 Dec 9999 23:59:59 GMT";
      A !== Number.MAX_SAFE_INTEGER && (x = new Date(A).toUTCString());
      var M = n.config.sessionTokenFrontendDomain;
      return M === "localhost" || M === p.default.getReferenceOrThrow().windowHandler.location.getHostName() ? u.default.getReferenceOrThrow().cookieHandler.setCookie(
        "".concat(S, "=").concat(E, ";expires=").concat(x, ";path=/;samesite=").concat(n.config.isInIframe ? "none;secure" : "lax")
      ) : u.default.getReferenceOrThrow().cookieHandler.setCookie(
        "".concat(S, "=").concat(E, ";expires=").concat(x, ";domain=").concat(M, ";path=/;samesite=").concat(n.config.isInIframe ? "none;secure" : "lax")
      );
    }
    function P(S) {
      return d(this, void 0, void 0, function() {
        var E;
        return o(this, function(A) {
          return E = k(S), [2, C(E)];
        });
      });
    }
    s.getTokenForHeaderAuth = P;
    function C(S) {
      return d(this, void 0, void 0, function() {
        var E, A, x, M;
        return o(this, function(L) {
          switch (L.label) {
            case 0:
              return A = "; ", [4, u.default.getReferenceOrThrow().cookieHandler.getCookie()];
            case 1:
              return E = A + L.sent(), x = E.split("; " + S + "="), x.length >= 2 && (M = x.pop(), M !== void 0) ? [2, M.split(";").shift()] : [2, void 0];
          }
        });
      });
    }
    function D(S, E) {
      return E === void 0 && (E = !1), d(this, void 0, void 0, function() {
        var A, x;
        return o(this, function(M) {
          switch (M.label) {
            case 0:
              return (0, t.logDebugMessage)("setTokenHeaders: adding existing tokens as header"), [4, P("access")];
            case 1:
              return A = M.sent(), [4, P("refresh")];
            case 2:
              return x = M.sent(), (E || A !== void 0) && x !== void 0 ? S.has("Authorization") ? (0, t.logDebugMessage)(
                "setAuthorizationHeaderIfRequired: Authorization header defined by the user, not adding"
              ) : ((0, t.logDebugMessage)(
                "setAuthorizationHeaderIfRequired: added authorization header"
              ), S.set(
                "Authorization",
                "Bearer ".concat(E ? x : A)
              )) : (0, t.logDebugMessage)(
                "setAuthorizationHeaderIfRequired: token for header based auth not found"
              ), [
                2
                /*return*/
              ];
          }
        });
      });
    }
    function O(S) {
      return d(this, void 0, void 0, function() {
        var E, A, x, M, L;
        return o(this, function(V) {
          switch (V.label) {
            case 0:
              return (0, t.logDebugMessage)("saveTokensFromHeaders: Saving updated tokens from the response headers"), E = S.headers.get("st-refresh-token"), E === null ? [3, 2] : ((0, t.logDebugMessage)("saveTokensFromHeaders: saving new refresh token"), [4, _("refresh", E)]);
            case 1:
              V.sent(), V.label = 2;
            case 2:
              return A = S.headers.get("st-access-token"), A === null ? [3, 4] : ((0, t.logDebugMessage)("saveTokensFromHeaders: saving new access token"), [4, _("access", A)]);
            case 3:
              V.sent(), V.label = 4;
            case 4:
              return x = S.headers.get("front-token"), x === null ? [3, 6] : ((0, t.logDebugMessage)("saveTokensFromHeaders: Setting sFrontToken: " + x), [4, e.setItem(x)]);
            case 5:
              V.sent(), (0, s.updateClockSkewUsingFrontToken)({ frontToken: x, responseHeaders: S.headers }), V.label = 6;
            case 6:
              return M = S.headers.get("anti-csrf"), M === null ? [3, 9] : [4, b(!1)];
            case 7:
              return L = V.sent(), L.status !== "EXISTS" ? [3, 9] : ((0, t.logDebugMessage)("saveTokensFromHeaders: Setting anti-csrf token"), [4, i.setItem(L.lastAccessTokenUpdate, M)]);
            case 8:
              V.sent(), V.label = 9;
            case 9:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    var W = void 0;
    function Q() {
      return d(this, void 0, void 0, function() {
        var S;
        return o(this, function(E) {
          switch (E.label) {
            case 0:
              return (0, t.logDebugMessage)("saveLastAccessTokenUpdate: called"), S = Date.now().toString(), (0, t.logDebugMessage)("saveLastAccessTokenUpdate: setting " + S), [4, T(r, S, Number.MAX_SAFE_INTEGER)];
            case 1:
              return E.sent(), W !== void 0 ? [3, 3] : [4, C(r)];
            case 2:
              W = E.sent() === S, E.label = 3;
            case 3:
              return W === !1 && console.warn(
                "Saving to cookies was not successful, this indicates a configuration error or the browser preventing us from writing the cookies."
              ), [4, T("sIRTFrontend", "", 0)];
            case 4:
              return E.sent(), [
                2
                /*return*/
              ];
          }
        });
      });
    }
    s.saveLastAccessTokenUpdate = Q;
    function te() {
      return d(this, void 0, void 0, function() {
        function S() {
          return d(this, void 0, void 0, function() {
            var A, x, M, L, V;
            return o(this, function(H) {
              switch (H.label) {
                case 0:
                  return x = "; ", [
                    4,
                    u.default.getReferenceOrThrow().cookieHandler.getCookie()
                  ];
                case 1:
                  return A = x + H.sent(), M = A.split("; " + h + "="), M.length >= 2 && (L = M.pop(), L !== void 0) ? (V = L.split(";").shift(), V === void 0 ? [2, null] : [2, V]) : [2, null];
              }
            });
          });
        }
        var E;
        return o(this, function(A) {
          switch (A.label) {
            case 0:
              return (0, t.logDebugMessage)("getAntiCSRFToken: called"), [4, b(!0)];
            case 1:
              return A.sent().status !== "EXISTS" ? ((0, t.logDebugMessage)(
                "getAntiCSRFToken: Returning because local session state != EXISTS"
              ), [2, null]) : [4, S()];
            case 2:
              return E = A.sent(), (0, t.logDebugMessage)("getAntiCSRFToken: returning: " + E), [2, E];
          }
        });
      });
    }
    function oe(S) {
      return d(this, void 0, void 0, function() {
        return o(this, function(E) {
          switch (E.label) {
            case 0:
              return (0, t.logDebugMessage)("setAntiCSRF: called: " + S), S === void 0 ? [3, 2] : [4, T(h, S, Number.MAX_SAFE_INTEGER)];
            case 1:
              return E.sent(), [3, 4];
            case 2:
              return [4, T(h, "", 0)];
            case 3:
              E.sent(), E.label = 4;
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    s.setAntiCSRF = oe;
    function q() {
      return d(this, void 0, void 0, function() {
        var S;
        return o(this, function(E) {
          switch (E.label) {
            case 0:
              return (0, t.logDebugMessage)("getFrontTokenFromCookie: called"), [4, C(m)];
            case 1:
              return S = E.sent(), [2, S === void 0 ? null : S];
          }
        });
      });
    }
    function U(S) {
      return JSON.parse(decodeURIComponent(escape(atob(S))));
    }
    function F() {
      return d(this, void 0, void 0, function() {
        var S;
        return o(this, function(E) {
          switch (E.label) {
            case 0:
              return (0, t.logDebugMessage)("getFrontToken: called"), [4, b(!0)];
            case 1:
              return E.sent().status !== "EXISTS" ? ((0, t.logDebugMessage)("getFrontToken: Returning because sIRTFrontend != EXISTS"), [2, null]) : [4, q()];
            case 2:
              return S = E.sent(), (0, t.logDebugMessage)("getFrontToken: returning: " + S), [2, S];
          }
        });
      });
    }
    s.getFrontToken = F;
    function N(S) {
      return d(this, void 0, void 0, function() {
        var E, A, x;
        return o(this, function(M) {
          switch (M.label) {
            case 0:
              return (0, t.logDebugMessage)("setFrontToken: called"), [4, q()];
            case 1:
              return E = M.sent(), E !== null && S !== void 0 && (A = U(E).up, x = U(S).up, JSON.stringify(A) !== JSON.stringify(x) && w()), S !== void 0 ? [3, 3] : [4, T(m, "", 0)];
            case 2:
              return M.sent(), [3, 5];
            case 3:
              return [4, T(m, S, Number.MAX_SAFE_INTEGER)];
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
    s.setFrontToken = N;
    function z(S, E, A) {
      if (A == null) {
        (0, t.logDebugMessage)(
          "fireSessionUpdateEventsIfNecessary returning early because the front token was not updated"
        );
        return;
      }
      var x = A !== "remove";
      (0, t.logDebugMessage)(
        "fireSessionUpdateEventsIfNecessary wasLoggedIn: ".concat(S, " frontTokenExistsAfter: ").concat(x, " status: ").concat(E)
      ), S ? x || (E === n.config.sessionExpiredStatusCode ? ((0, t.logDebugMessage)("onUnauthorisedResponse: firing UNAUTHORISED event"), n.config.onHandleEvent({
        action: "UNAUTHORISED",
        sessionExpiredOrRevoked: !0,
        userContext: {}
      })) : ((0, t.logDebugMessage)("onUnauthorisedResponse: firing SIGN_OUT event"), n.config.onHandleEvent({
        action: "SIGN_OUT",
        userContext: {}
      }))) : x && ((0, t.logDebugMessage)("onUnauthorisedResponse: firing SESSION_CREATED event"), n.config.onHandleEvent({
        action: "SESSION_CREATED",
        userContext: {}
      }));
    }
    s.fireSessionUpdateEventsIfNecessary = z;
    var K = function(S) {
      var E = S.frontToken, A = S.responseHeaders;
      if ((0, t.logDebugMessage)("updateClockSkewUsingFrontToken: frontToken: " + E), E == null || E === "remove") {
        (0, t.logDebugMessage)(
          "updateClockSkewUsingFrontToken: the access token payload wasn't updated or is being removed, skipping clock skew update"
        );
        return;
      }
      var x = U(E), M = n.recipeImpl.calculateClockSkewInMillis({
        accessTokenPayload: x.up,
        responseHeaders: A
      });
      a.default.getReferenceOrThrow().dateProvider.setClientClockSkewInMillis(M), (0, t.logDebugMessage)("updateClockSkewUsingFrontToken: Client clock synchronized successfully");
    };
    s.updateClockSkewUsingFrontToken = K;
  })(Re)), Re;
}
var Ye = {}, hn;
function fr() {
  if (hn) return Ye;
  hn = 1, Object.defineProperty(Ye, "__esModule", { value: !0 }), Ye.SessionClaimValidatorStore = void 0;
  var s = (
    /** @class */
    (function() {
      function R() {
      }
      return R.claimValidatorsAddedByOtherRecipes = [], R.addClaimValidatorFromOtherRecipe = function(d) {
        R.claimValidatorsAddedByOtherRecipes.push(d);
      }, R.getClaimValidatorsAddedByOtherRecipes = function() {
        return R.claimValidatorsAddedByOtherRecipes;
      }, R;
    })()
  );
  return Ye.SessionClaimValidatorStore = s, Ye.default = s, Ye;
}
var gn;
function Er() {
  if (gn) return tt;
  gn = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.getGlobalClaimValidators = void 0;
  var s = Ut(), R = lt(), d = fr();
  function o(g, f) {
    var u = (0, s.getNormalisedUserContext)(f), p = d.default.getClaimValidatorsAddedByOtherRecipes(), v = R.default.recipeImpl.getGlobalClaimValidators({
      claimValidatorsAddedByOtherRecipes: p,
      userContext: u
    }), t = g !== void 0 ? g(v, u) : v;
    return t;
  }
  return tt.getGlobalClaimValidators = o, tt;
}
var vn;
function Or() {
  return vn || (vn = 1, (function(s) {
    function R(d) {
      for (var o in d) s.hasOwnProperty(o) || (s[o] = d[o]);
    }
    s.__esModule = !0, R(Er());
  })(Tt)), Tt;
}
var mn;
function le() {
  if (mn) return X;
  mn = 1;
  var s = X && X.__assign || function() {
    return s = Object.assign || function(b) {
      for (var k, _ = 1, T = arguments.length; _ < T; _++) {
        k = arguments[_];
        for (var P in k) Object.prototype.hasOwnProperty.call(k, P) && (b[P] = k[P]);
      }
      return b;
    }, s.apply(this, arguments);
  };
  Object.defineProperty(X, "__esModule", { value: !0 }), X.getPublicConfig = X.getPublicPlugin = X.applyPlugins = X.normaliseUser = X.normaliseUserResponse = X.getGlobalClaimValidators = X.getHashFromLocation = X.getNormalisedUserContext = X.checkForSSRErrorAndAppendIfNeeded = X.getAllQueryParams = X.getQueryParams = X.isTest = X.normaliseInputAppInfoOrThrowError = X.appendQueryParamsToURL = void 0;
  var R = yt(), d = Rr(), o = kr(), g = lr(), f = dr(), u = Or();
  function p(b, k) {
    if (k === void 0)
      return b;
    try {
      var _ = new URL(b);
      return Object.entries(k).forEach(function(C) {
        var D = C[0], O = C[1];
        _.searchParams.set(D, O);
      }), _.href;
    } catch {
      var T = b.startsWith("/") ? "http:localhost" : "http://localhost/", P = new URL("".concat(T).concat(b));
      return Object.entries(k).forEach(function(D) {
        var O = D[0], W = D[1];
        P.searchParams.set(O, W);
      }), "".concat(P.pathname).concat(P.search);
    }
  }
  X.appendQueryParamsToURL = p;
  function v(b, k) {
    return k !== void 0 ? new g.default(k) : new g.default(b);
  }
  function t(b) {
    if (b === void 0)
      throw new Error("Please provide the appInfo object when calling supertokens.init");
    if (b.apiDomain === void 0)
      throw new Error("Please provide your apiDomain inside the appInfo object when calling supertokens.init");
    if (b.appName === void 0)
      throw new Error("Please provide your appName inside the appInfo object when calling supertokens.init");
    var k = new g.default("");
    return b.apiGatewayPath !== void 0 && (k = new g.default(b.apiGatewayPath)), {
      appName: b.appName,
      apiDomain: new o.default(b.apiDomain),
      apiBasePath: k.appendPath(
        v(d.DEFAULT_API_BASE_PATH, b.apiBasePath)
      )
    };
  }
  X.normaliseInputAppInfoOrThrowError = t;
  function a() {
    try {
      return process.env.TEST_MODE === "testing";
    } catch {
      return !1;
    }
  }
  X.isTest = a;
  function i(b) {
    var k = new URLSearchParams(
      R.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getSearch()
    ), _ = k.get(b);
    if (_ !== null)
      return _;
  }
  X.getQueryParams = i;
  function e() {
    return new URLSearchParams(
      R.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getSearch()
    );
  }
  X.getAllQueryParams = e;
  function n(b) {
    return typeof window > "u" && (b = b + d.SSR_ERROR), b;
  }
  X.checkForSSRErrorAndAppendIfNeeded = n;
  function r(b) {
    return b === void 0 ? {} : b;
  }
  X.getNormalisedUserContext = r;
  function c() {
    return R.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getHash().substring(1);
  }
  X.getHashFromLocation = c;
  function l(b) {
    var k = b.overrideGlobalClaimValidators, _ = b.userContext;
    return (0, u.getGlobalClaimValidators)(k, _);
  }
  X.getGlobalClaimValidators = l;
  function h(b, k) {
    return "createdNewRecipeUser" in k ? k : {
      createdNewRecipeUser: k.createdNewUser,
      user: m(b, k.user)
    };
  }
  X.normaliseUserResponse = h;
  function m(b, k) {
    if ("loginMethods" in k)
      return k;
    var _ = k.email !== void 0 ? [k.email] : [], T = k.phoneNumber !== void 0 ? [k.phoneNumber] : [], P = k.thirdParty !== void 0 ? [k.thirdParty] : [], C = k.webauthn !== void 0 ? k.webauthn : { credentialIds: [] };
    return {
      id: k.id,
      emails: _,
      phoneNumbers: T,
      thirdParty: P,
      webauthn: C,
      isPrimaryUser: !1,
      tenantIds: k.tenantIds,
      timeJoined: k.timeJoined,
      loginMethods: [
        {
          recipeId: b,
          recipeUserId: k.id,
          timeJoined: k.timeJoined,
          tenantIds: k.tenantIds,
          email: k.email,
          phoneNumber: k.email
        }
      ]
    };
  }
  X.normaliseUser = m;
  function y(b, k, _) {
    for (var T, P = s({}, k ?? {}), C = [(T = P.override) === null || T === void 0 ? void 0 : T.functions], D = 0, O = _; D < O.length; D++) {
      var W = O[D], Q = W[b];
      Q && (P = s({}, Q.config ? Q.config(P) : P), Q.functions !== void 0 && C.push(Q.functions));
    }
    return C = C.reverse().filter(function(te) {
      return te !== void 0;
    }), C.length > 0 && (P.override = s(s({}, P.override), {
      functions: function(te, oe) {
        for (var q = 0, U = C; q < U.length; q++) {
          var F = U[q];
          oe.override(F);
        }
        return te;
      }
    })), P;
  }
  X.applyPlugins = y;
  function w(b) {
    return {
      id: b.id,
      initialized: !b.init,
      version: b.version,
      exports: b.exports,
      compatibleWebJSSDKVersions: b.compatibleWebJSSDKVersions
    };
  }
  X.getPublicPlugin = w;
  function I(b) {
    var k = Object.keys(b), _ = k.reduce(function(T, P) {
      var C;
      return f.nonPublicConfigProperties.includes(P) ? T : s(s({}, T), (C = {}, C[P] = b[P], C));
    }, {});
    return _;
  }
  return X.getPublicConfig = I, X;
}
var _t = {}, Ct = {}, pn;
function Dr() {
  return pn || (pn = 1, (function(s) {
    function R(d) {
      for (var o in d) s.hasOwnProperty(o) || (s[o] = d[o]);
    }
    s.__esModule = !0, R(qt());
  })(Ct)), Ct;
}
var yn;
function xr() {
  return yn || (yn = 1, (function(s) {
    Object.defineProperty(s, "__esModule", { value: !0 }), s.CookieHandlerReference = void 0;
    var R = Dr();
    Object.defineProperty(s, "CookieHandlerReference", {
      enumerable: !0,
      get: function() {
        return R.CookieHandlerReference;
      }
    });
  })(_t)), _t;
}
var rt = {}, wn;
function Mr() {
  if (wn) return rt;
  wn = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.PostSuperTokensInitCallbacks = void 0;
  var s = (
    /** @class */
    (function() {
      function R() {
      }
      return R.addPostInitCallback = function(d) {
        R.postInitCallbacks.push(d);
      }, R.runPostInitCallbacks = function() {
        for (var d = 0, o = R.postInitCallbacks; d < o.length; d++) {
          var g = o[d];
          g();
        }
      }, R.postInitCallbacks = [], R;
    })()
  );
  return rt.PostSuperTokensInitCallbacks = s, rt;
}
var fe = {}, He = {}, it = {}, _e = {}, In;
function Ur() {
  if (In) return _e;
  In = 1;
  var s = _e && _e.__awaiter || function(o, g, f, u) {
    function p(v) {
      return v instanceof f ? v : new f(function(t) {
        t(v);
      });
    }
    return new (f || (f = Promise))(function(v, t) {
      function a(n) {
        try {
          e(u.next(n));
        } catch (r) {
          t(r);
        }
      }
      function i(n) {
        try {
          e(u.throw(n));
        } catch (r) {
          t(r);
        }
      }
      function e(n) {
        n.done ? v(n.value) : p(n.value).then(a, i);
      }
      e((u = u.apply(o, g || [])).next());
    });
  }, R = _e && _e.__generator || function(o, g) {
    var f = {
      label: 0,
      sent: function() {
        if (v[0] & 1) throw v[1];
        return v[1];
      },
      trys: [],
      ops: []
    }, u, p, v, t;
    return t = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (t[Symbol.iterator] = function() {
      return this;
    }), t;
    function a(e) {
      return function(n) {
        return i([e, n]);
      };
    }
    function i(e) {
      if (u) throw new TypeError("Generator is already executing.");
      for (; f; )
        try {
          if (u = 1, p && (v = e[0] & 2 ? p.return : e[0] ? p.throw || ((v = p.return) && v.call(p), 0) : p.next) && !(v = v.call(p, e[1])).done)
            return v;
          switch (p = 0, v && (e = [e[0] & 2, v.value]), e[0]) {
            case 0:
            case 1:
              v = e;
              break;
            case 4:
              return f.label++, { value: e[1], done: !1 };
            case 5:
              f.label++, p = e[1], e = [0];
              continue;
            case 7:
              e = f.ops.pop(), f.trys.pop();
              continue;
            default:
              if (v = f.trys, !(v = v.length > 0 && v[v.length - 1]) && (e[0] === 6 || e[0] === 2)) {
                f = 0;
                continue;
              }
              if (e[0] === 3 && (!v || e[1] > v[0] && e[1] < v[3])) {
                f.label = e[1];
                break;
              }
              if (e[0] === 6 && f.label < v[1]) {
                f.label = v[1], v = e;
                break;
              }
              if (v && f.label < v[2]) {
                f.label = v[2], f.ops.push(e);
                break;
              }
              v[2] && f.ops.pop(), f.trys.pop();
              continue;
          }
          e = g.call(o, f);
        } catch (n) {
          e = [6, n], p = 0;
        } finally {
          u = v = 0;
        }
      if (e[0] & 5) throw e[1];
      return { value: e[0] ? e[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(_e, "__esModule", { value: !0 }), _e.normaliseRecipeModuleConfig = void 0;
  function d(o) {
    var g = this, f = o.preAPIHook;
    f === void 0 && (f = function(p) {
      return s(g, void 0, void 0, function() {
        return R(this, function(v) {
          return [2, p];
        });
      });
    });
    var u = o.postAPIHook;
    return u === void 0 && (u = function() {
      return s(g, void 0, void 0, function() {
        return R(this, function(p) {
          return [
            2
            /*return*/
          ];
        });
      });
    }), {
      recipeId: o.recipeId,
      appInfo: o.appInfo,
      clientType: o.clientType,
      preAPIHook: f,
      postAPIHook: u
    };
  }
  return _e.normaliseRecipeModuleConfig = d, _e;
}
var bn;
function Nt() {
  if (bn) return it;
  bn = 1, Object.defineProperty(it, "__esModule", { value: !0 }), it.normaliseAuthRecipe = void 0;
  var s = Ur();
  function R(d) {
    return (0, s.normaliseRecipeModuleConfig)(d);
  }
  return it.normaliseAuthRecipe = R, it;
}
var Rn;
function Hr() {
  if (Rn) return He;
  Rn = 1;
  var s = He && He.__assign || function() {
    return s = Object.assign || function(o) {
      for (var g, f = 1, u = arguments.length; f < u; f++) {
        g = arguments[f];
        for (var p in g) Object.prototype.hasOwnProperty.call(g, p) && (o[p] = g[p]);
      }
      return o;
    }, s.apply(this, arguments);
  };
  Object.defineProperty(He, "__esModule", { value: !0 }), He.normaliseUserInput = void 0;
  var R = Nt();
  function d(o) {
    var g = s(
      {
        functions: function(f) {
          return f;
        }
      },
      o.override
    );
    return s(s({}, (0, R.normaliseAuthRecipe)(o)), { override: g });
  }
  return He.normaliseUserInput = d, He;
}
var Ze = {}, Le = {}, kn;
function Lr() {
  if (kn) return Le;
  kn = 1;
  var s = Le && Le.__assign || function() {
    return s = Object.assign || function(d) {
      for (var o, g = 1, f = arguments.length; g < f; g++) {
        o = arguments[g];
        for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (d[u] = o[u]);
      }
      return d;
    }, s.apply(this, arguments);
  };
  Object.defineProperty(Le, "__esModule", { value: !0 }), Le.getProxyObject = void 0;
  function R(d) {
    for (var o = s(s({}, d), { _call: function(t, a) {
      throw new Error("This function should only be called through the recipe object");
    } }), g = Object.keys(o), f = function(t) {
      t !== "_call" && (o[t] = function() {
        for (var a = [], i = 0; i < arguments.length; i++)
          a[i] = arguments[i];
        return this._call(t, a);
      });
    }, u = 0, p = g; u < p.length; u++) {
      var v = p[u];
      f(v);
    }
    return o;
  }
  return Le.getProxyObject = R, Le;
}
var Sn;
function wt() {
  if (Sn) return Ze;
  Sn = 1, Object.defineProperty(Ze, "__esModule", { value: !0 }), Ze.OverrideableBuilder = void 0;
  var s = Lr(), R = (
    /** @class */
    (function() {
      function d(o) {
        this.layers = [o], this.proxies = [];
      }
      return d.prototype.override = function(o) {
        for (var g = (0, s.getProxyObject)(this.layers[0]), f = o(g, this), u = 0, p = Object.keys(this.layers[0]); u < p.length; u++) {
          var v = p[u];
          f[v] === g[v] || v === "_call" ? delete f[v] : f[v] === void 0 && (f[v] = null);
        }
        return this.layers.push(f), this.proxies.push(g), this;
      }, d.prototype.build = function() {
        var o = this;
        if (this.result)
          return this.result;
        this.result = {};
        for (var g = 0, f = this.layers; g < f.length; g++)
          for (var u = f[g], p = 0, v = Object.keys(u); p < v.length; p++) {
            var t = v[p], a = u[t];
            a !== void 0 && (a === null ? this.result[t] = void 0 : typeof a == "function" ? this.result[t] = a.bind(this.result) : this.result[t] = a);
          }
        for (var i = function(r) {
          var c = e.proxies[r];
          c._call = function(l, h) {
            for (var m = r; m >= 0; --m) {
              var y = o.layers[m][l];
              if (y != null)
                return y.bind(o.result).apply(void 0, h);
            }
          };
        }, e = this, n = 0; n < this.proxies.length; ++n)
          i(n);
        return this.result;
      }, d;
    })()
  );
  return Ze.OverrideableBuilder = R, Ze.default = R, Ze;
}
var he = {}, ge = {}, qe = {}, Tn;
function hr() {
  return Tn || (Tn = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.supported_fdi = qe.package_version = void 0, qe.package_version = "0.16.0", qe.supported_fdi = ["3.1", "4.0", "4.1", "4.2"]), qe;
}
var vt = {}, Pt = {}, Fe = {}, _n;
function gr() {
  if (_n) return Fe;
  _n = 1;
  var s = Fe && Fe.__extends || /* @__PURE__ */ (function() {
    var d = function(o, g) {
      return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(f, u) {
        f.__proto__ = u;
      } || function(f, u) {
        for (var p in u) Object.prototype.hasOwnProperty.call(u, p) && (f[p] = u[p]);
      }, d(o, g);
    };
    return function(o, g) {
      if (typeof g != "function" && g !== null)
        throw new TypeError("Class extends value " + String(g) + " is not a constructor or null");
      d(o, g);
      function f() {
        this.constructor = o;
      }
      o.prototype = g === null ? Object.create(g) : (f.prototype = g.prototype, new f());
    };
  })();
  Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.STGeneralError = void 0;
  var R = (
    /** @class */
    (function(d) {
      s(o, d);
      function o(g) {
        var f = d.call(this, g) || this;
        return f.isSuperTokensGeneralError = !0, f;
      }
      return o.isThisError = function(g) {
        return g.isSuperTokensGeneralError === !0;
      }, o;
    })(Error)
  );
  return Fe.STGeneralError = R, Fe;
}
var Cn;
function qr() {
  return Cn || (Cn = 1, (function(s) {
    function R(o) {
      for (var g in o) s.hasOwnProperty(g) || (s[g] = o[g]);
    }
    s.__esModule = !0;
    let d = gr();
    d.default !== void 0 ? R(d) : R({
      default: d,
      ...d
    });
  })(Pt)), Pt;
}
var Pn;
function Fr() {
  if (Pn) return vt;
  Pn = 1, Object.defineProperty(vt, "__esModule", { value: !0 });
  var s = qr();
  return vt.default = s.STGeneralError, vt;
}
var An;
function jt() {
  if (An) return ge;
  An = 1;
  var s = ge && ge.__assign || function() {
    return s = Object.assign || function(p) {
      for (var v, t = 1, a = arguments.length; t < a; t++) {
        v = arguments[t];
        for (var i in v) Object.prototype.hasOwnProperty.call(v, i) && (p[i] = v[i]);
      }
      return p;
    }, s.apply(this, arguments);
  }, R = ge && ge.__awaiter || function(p, v, t, a) {
    function i(e) {
      return e instanceof t ? e : new t(function(n) {
        n(e);
      });
    }
    return new (t || (t = Promise))(function(e, n) {
      function r(h) {
        try {
          l(a.next(h));
        } catch (m) {
          n(m);
        }
      }
      function c(h) {
        try {
          l(a.throw(h));
        } catch (m) {
          n(m);
        }
      }
      function l(h) {
        h.done ? e(h.value) : i(h.value).then(r, c);
      }
      l((a = a.apply(p, v || [])).next());
    });
  }, d = ge && ge.__generator || function(p, v) {
    var t = {
      label: 0,
      sent: function() {
        if (e[0] & 1) throw e[1];
        return e[1];
      },
      trys: [],
      ops: []
    }, a, i, e, n;
    return n = { next: r(0), throw: r(1), return: r(2) }, typeof Symbol == "function" && (n[Symbol.iterator] = function() {
      return this;
    }), n;
    function r(l) {
      return function(h) {
        return c([l, h]);
      };
    }
    function c(l) {
      if (a) throw new TypeError("Generator is already executing.");
      for (; t; )
        try {
          if (a = 1, i && (e = l[0] & 2 ? i.return : l[0] ? i.throw || ((e = i.return) && e.call(i), 0) : i.next) && !(e = e.call(i, l[1])).done)
            return e;
          switch (i = 0, e && (l = [l[0] & 2, e.value]), l[0]) {
            case 0:
            case 1:
              e = l;
              break;
            case 4:
              return t.label++, { value: l[1], done: !1 };
            case 5:
              t.label++, i = l[1], l = [0];
              continue;
            case 7:
              l = t.ops.pop(), t.trys.pop();
              continue;
            default:
              if (e = t.trys, !(e = e.length > 0 && e[e.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                t = 0;
                continue;
              }
              if (l[0] === 3 && (!e || l[1] > e[0] && l[1] < e[3])) {
                t.label = l[1];
                break;
              }
              if (l[0] === 6 && t.label < e[1]) {
                t.label = e[1], e = l;
                break;
              }
              if (e && t.label < e[2]) {
                t.label = e[2], t.ops.push(l);
                break;
              }
              e[2] && t.ops.pop(), t.trys.pop();
              continue;
          }
          l = v.call(p, t);
        } catch (h) {
          l = [6, h], i = 0;
        } finally {
          a = e = 0;
        }
      if (l[0] & 5) throw l[1];
      return { value: l[0] ? l[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(ge, "__esModule", { value: !0 });
  var o = lr(), g = hr(), f = Fr(), u = (
    /** @class */
    (function() {
      function p(t, a) {
        var i = this;
        this.recipeId = t, this.appInfo = a, this.getPath = function(e) {
          for (var n, r, c = typeof e == "string" ? e : e.path, l = typeof e == "string" ? {} : (n = e.pathParams) !== null && n !== void 0 ? n : {}, h = typeof e == "string" ? {} : (r = e.queryParams) !== null && r !== void 0 ? r : {}, m = String(c), y = 0, w = Object.entries(l); y < w.length; y++) {
            var I = w[y], b = I[0], k = I[1];
            m = m.replace(new RegExp("<".concat(b, ">"), "g"), String(k));
          }
          m = new o.default(m).getAsStringDangerous(), m.startsWith("/public/") && (m = m.substring(7));
          var _ = new URLSearchParams(h), T = _.toString();
          return T.length > 0 && (m += "?" + _.toString()), m;
        }, this.safelyStringifyBody = function(e) {
          return e ? JSON.stringify(e) : "{}";
        }, this.get = function(e, n, r, c) {
          return R(i, void 0, void 0, function() {
            var l, h, m;
            return d(this, function(y) {
              switch (y.label) {
                case 0:
                  return l = this.getFullUrl(e), [
                    4,
                    this.fetch(
                      l,
                      s(s({ method: "GET" }, n), { body: void 0 }),
                      r,
                      c
                    )
                  ];
                case 1:
                  return h = y.sent(), [4, this.getResponseJsonOrThrowGeneralError(h)];
                case 2:
                  return m = y.sent(), [
                    2,
                    {
                      jsonBody: m,
                      fetchResponse: h
                    }
                  ];
              }
            });
          });
        }, this.post = function(e, n, r, c) {
          return R(i, void 0, void 0, function() {
            var l, h;
            return d(this, function(m) {
              switch (m.label) {
                case 0:
                  return [
                    4,
                    this.fetch(
                      this.getFullUrl(e),
                      s(s({ method: "POST" }, n), {
                        body: this.safelyStringifyBody(n.body)
                      }),
                      r,
                      c
                    )
                  ];
                case 1:
                  return l = m.sent(), [4, this.getResponseJsonOrThrowGeneralError(l)];
                case 2:
                  return h = m.sent(), [
                    2,
                    {
                      jsonBody: h,
                      fetchResponse: l
                    }
                  ];
              }
            });
          });
        }, this.delete = function(e, n, r, c) {
          return R(i, void 0, void 0, function() {
            var l, h;
            return d(this, function(m) {
              switch (m.label) {
                case 0:
                  return [
                    4,
                    this.fetch(
                      this.getFullUrl(e),
                      s(s({ method: "DELETE" }, n), {
                        body: this.safelyStringifyBody(n.body)
                      }),
                      r,
                      c
                    )
                  ];
                case 1:
                  return l = m.sent(), [4, this.getResponseJsonOrThrowGeneralError(l)];
                case 2:
                  return h = m.sent(), [
                    2,
                    {
                      jsonBody: h,
                      fetchResponse: l
                    }
                  ];
              }
            });
          });
        }, this.put = function(e, n, r, c) {
          return R(i, void 0, void 0, function() {
            var l, h;
            return d(this, function(m) {
              switch (m.label) {
                case 0:
                  return [
                    4,
                    this.fetch(
                      this.getFullUrl(e),
                      s(s({ method: "PUT" }, n), {
                        body: this.safelyStringifyBody(n.body)
                      }),
                      r,
                      c
                    )
                  ];
                case 1:
                  return l = m.sent(), [4, this.getResponseJsonOrThrowGeneralError(l)];
                case 2:
                  return h = m.sent(), [
                    2,
                    {
                      jsonBody: h,
                      fetchResponse: l
                    }
                  ];
              }
            });
          });
        }, this.fetch = function(e, n, r, c) {
          return R(i, void 0, void 0, function() {
            var l, h, m, y, w, I;
            return d(this, function(b) {
              switch (b.label) {
                case 0:
                  return n === void 0 ? l = {} : l = n.headers, [
                    4,
                    this.callPreAPIHook({
                      preAPIHook: r,
                      url: e,
                      requestInit: s(s({}, n), {
                        headers: s(s({}, l), {
                          "fdi-version": g.supported_fdi.join(","),
                          "Content-Type": "application/json",
                          rid: this.recipeId
                        })
                      })
                    })
                  ];
                case 1:
                  return h = b.sent(), m = h.requestInit, y = h.url, [4, fetch(y, m)];
                case 2:
                  if (w = b.sent(), w.status >= 300)
                    throw w;
                  return c === void 0 ? [3, 4] : (I = w.clone(), [
                    4,
                    c({
                      requestInit: m,
                      url: e,
                      fetchResponse: I
                    })
                  ]);
                case 3:
                  b.sent(), b.label = 4;
                case 4:
                  return [2, w];
              }
            });
          });
        }, this.callPreAPIHook = function(e) {
          return R(i, void 0, void 0, function() {
            var n;
            return d(this, function(r) {
              switch (r.label) {
                case 0:
                  return e.preAPIHook === void 0 ? [
                    2,
                    {
                      url: e.url,
                      requestInit: e.requestInit
                    }
                  ] : [
                    4,
                    e.preAPIHook({
                      url: e.url,
                      requestInit: e.requestInit
                    })
                  ];
                case 1:
                  return n = r.sent(), [2, n];
              }
            });
          });
        }, this.getFullUrl = function(e) {
          var n = i.appInfo.apiBasePath.getAsStringDangerous(), r = i.getPath(e);
          return "".concat(i.appInfo.apiDomain.getAsStringDangerous()).concat(n).concat(r);
        }, this.getResponseJsonOrThrowGeneralError = function(e) {
          return R(i, void 0, void 0, function() {
            var n, r;
            return d(this, function(c) {
              switch (c.label) {
                case 0:
                  return [4, e.clone().json()];
                case 1:
                  if (n = c.sent(), n.status === "GENERAL_ERROR")
                    throw r = n.message === void 0 ? "No Error Message Provided" : n.message, new f.default(r);
                  return [2, n];
              }
            });
          });
        };
      }
      var v;
      return v = p, p.preparePreAPIHook = function(t) {
        var a = t.recipePreAPIHook, i = t.action, e = t.options, n = t.userContext;
        return function(r) {
          return R(void 0, void 0, void 0, function() {
            var c;
            return d(v, function(l) {
              switch (l.label) {
                case 0:
                  return [
                    4,
                    a(
                      s(s({}, r), { action: i, userContext: n })
                    )
                  ];
                case 1:
                  return c = l.sent(), e === void 0 || e.preAPIHook === void 0 ? [2, c] : [
                    2,
                    e.preAPIHook({
                      url: c.url,
                      requestInit: c.requestInit,
                      userContext: n
                    })
                  ];
              }
            });
          });
        };
      }, p.preparePostAPIHook = function(t) {
        var a = t.recipePostAPIHook, i = t.action, e = t.userContext;
        return function(n) {
          return R(void 0, void 0, void 0, function() {
            return d(v, function(r) {
              switch (r.label) {
                case 0:
                  return [
                    4,
                    a(
                      s(s({}, n), { userContext: e, action: i })
                    )
                  ];
                case 1:
                  return r.sent(), [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
      }, p;
    })()
  );
  return ge.default = u, ge;
}
var En;
function Nr() {
  if (En) return he;
  En = 1;
  var s = he && he.__awaiter || function(f, u, p, v) {
    function t(a) {
      return a instanceof p ? a : new p(function(i) {
        i(a);
      });
    }
    return new (p || (p = Promise))(function(a, i) {
      function e(c) {
        try {
          r(v.next(c));
        } catch (l) {
          i(l);
        }
      }
      function n(c) {
        try {
          r(v.throw(c));
        } catch (l) {
          i(l);
        }
      }
      function r(c) {
        c.done ? a(c.value) : t(c.value).then(e, n);
      }
      r((v = v.apply(f, u || [])).next());
    });
  }, R = he && he.__generator || function(f, u) {
    var p = {
      label: 0,
      sent: function() {
        if (a[0] & 1) throw a[1];
        return a[1];
      },
      trys: [],
      ops: []
    }, v, t, a, i;
    return i = { next: e(0), throw: e(1), return: e(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
      return this;
    }), i;
    function e(r) {
      return function(c) {
        return n([r, c]);
      };
    }
    function n(r) {
      if (v) throw new TypeError("Generator is already executing.");
      for (; p; )
        try {
          if (v = 1, t && (a = r[0] & 2 ? t.return : r[0] ? t.throw || ((a = t.return) && a.call(t), 0) : t.next) && !(a = a.call(t, r[1])).done)
            return a;
          switch (t = 0, a && (r = [r[0] & 2, a.value]), r[0]) {
            case 0:
            case 1:
              a = r;
              break;
            case 4:
              return p.label++, { value: r[1], done: !1 };
            case 5:
              p.label++, t = r[1], r = [0];
              continue;
            case 7:
              r = p.ops.pop(), p.trys.pop();
              continue;
            default:
              if (a = p.trys, !(a = a.length > 0 && a[a.length - 1]) && (r[0] === 6 || r[0] === 2)) {
                p = 0;
                continue;
              }
              if (r[0] === 3 && (!a || r[1] > a[0] && r[1] < a[3])) {
                p.label = r[1];
                break;
              }
              if (r[0] === 6 && p.label < a[1]) {
                p.label = a[1], a = r;
                break;
              }
              if (a && p.label < a[2]) {
                p.label = a[2], p.ops.push(r);
                break;
              }
              a[2] && p.ops.pop(), p.trys.pop();
              continue;
          }
          r = u.call(f, p);
        } catch (c) {
          r = [6, c], t = 0;
        } finally {
          v = a = 0;
        }
      if (r[0] & 5) throw r[1];
      return { value: r[0] ? r[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(he, "__esModule", { value: !0 }), he.getRecipeImplementation = void 0;
  var d = jt(), o = le();
  function g(f) {
    var u = new d.default(f.recipeId, f.appInfo);
    return {
      getTenantId: function() {
        var p = (0, o.getQueryParams)("tenantId");
        if (p?.trim() !== "")
          return p;
      },
      getLoginMethods: function(p) {
        var v = p.tenantId, t = p.options, a = p.userContext;
        return s(this, void 0, void 0, function() {
          var i, e, n, r, c;
          return R(this, function(l) {
            switch (l.label) {
              case 0:
                return i = {}, f.clientType !== void 0 && (i.clientType = f.clientType), [
                  4,
                  u.get(
                    {
                      path: "/<tenantId>/loginmethods",
                      pathParams: {
                        tenantId: v || "public"
                      },
                      queryParams: i
                    },
                    {},
                    d.default.preparePreAPIHook({
                      recipePreAPIHook: f.preAPIHook,
                      action: "GET_LOGIN_METHODS",
                      options: t,
                      userContext: a
                    }),
                    d.default.preparePostAPIHook({
                      recipePostAPIHook: f.postAPIHook,
                      action: "GET_LOGIN_METHODS",
                      userContext: a
                    })
                  )
                ];
              case 1:
                return e = l.sent(), n = e.jsonBody, r = e.fetchResponse, n.firstFactors === void 0 ? (c = [], n.emailPassword.enabled && c.push("emailpassword"), n.thirdParty.enabled && c.push("thirdparty"), n.passwordless.enabled && (c.push("otp-email"), c.push("otp-phone"), c.push("link-email"), c.push("link-phone"))) : c = n.firstFactors, [
                  2,
                  {
                    status: "OK",
                    thirdParty: {
                      providers: n.thirdParty.providers
                    },
                    firstFactors: c,
                    fetchResponse: r
                  }
                ];
            }
          });
        });
      }
    };
  }
  return he.default = g, he.getRecipeImplementation = g, he;
}
var ve = {}, mt = {}, On;
function vr() {
  if (On) return mt;
  On = 1, Object.defineProperty(mt, "__esModule", { value: !0 });
  var s = (
    /** @class */
    /* @__PURE__ */ (function() {
      function R(d) {
        this.config = d;
      }
      return R;
    })()
  );
  return mt.default = s, mt;
}
var ne = {}, At = {}, Ne = {}, me = {}, re = {}, Ce = {}, Dn;
function jr() {
  if (Dn) return Ce;
  Dn = 1;
  var s = Ce && Ce.__awaiter || function(g, f, u, p) {
    function v(t) {
      return t instanceof u ? t : new u(function(a) {
        a(t);
      });
    }
    return new (u || (u = Promise))(function(t, a) {
      function i(r) {
        try {
          n(p.next(r));
        } catch (c) {
          a(c);
        }
      }
      function e(r) {
        try {
          n(p.throw(r));
        } catch (c) {
          a(c);
        }
      }
      function n(r) {
        r.done ? t(r.value) : v(r.value).then(i, e);
      }
      n((p = p.apply(g, f || [])).next());
    });
  }, R = Ce && Ce.__generator || function(g, f) {
    var u = {
      label: 0,
      sent: function() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    }, p, v, t, a;
    return a = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
      return this;
    }), a;
    function i(n) {
      return function(r) {
        return e([n, r]);
      };
    }
    function e(n) {
      if (p) throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (p = 1, v && (t = n[0] & 2 ? v.return : n[0] ? v.throw || ((t = v.return) && t.call(v), 0) : v.next) && !(t = t.call(v, n[1])).done)
            return t;
          switch (v = 0, t && (n = [n[0] & 2, t.value]), n[0]) {
            case 0:
            case 1:
              t = n;
              break;
            case 4:
              return u.label++, { value: n[1], done: !1 };
            case 5:
              u.label++, v = n[1], n = [0];
              continue;
            case 7:
              n = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (t = u.trys, !(t = t.length > 0 && t[t.length - 1]) && (n[0] === 6 || n[0] === 2)) {
                u = 0;
                continue;
              }
              if (n[0] === 3 && (!t || n[1] > t[0] && n[1] < t[3])) {
                u.label = n[1];
                break;
              }
              if (n[0] === 6 && u.label < t[1]) {
                u.label = t[1], t = n;
                break;
              }
              if (t && u.label < t[2]) {
                u.label = t[2], u.ops.push(n);
                break;
              }
              t[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          n = f.call(g, u);
        } catch (r) {
          n = [6, r], v = 0;
        } finally {
          p = t = 0;
        }
      if (n[0] & 5) throw n[1];
      return { value: n[0] ? n[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Ce, "__esModule", { value: !0 }), Ce.createAxiosErrorFromFetchResp = void 0;
  function d(g, f, u, p, v) {
    return g.config = f, u && (g.code = u), g.request = p, g.response = v, g.isAxiosError = !0, g.toJSON = function() {
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
    }, g;
  }
  function o(g) {
    return s(this, void 0, void 0, function() {
      var f, u, p, v, t;
      return R(this, function(a) {
        switch (a.label) {
          case 0:
            if (f = {
              url: g.url,
              headers: g.headers
            }, u = "status" in g, !u) return [3, 12];
            if (v = g.headers.get("content-type"), t = void 0, v !== null) return [3, 5];
            a.label = 1;
          case 1:
            return a.trys.push([1, 3, , 4]), [4, g.text()];
          case 2:
            return t = a.sent(), [3, 4];
          case 3:
            return a.sent(), t = "", [3, 4];
          case 4:
            return [3, 11];
          case 5:
            return v.includes("application/json") ? [4, g.json()] : [3, 7];
          case 6:
            return t = a.sent(), [3, 11];
          case 7:
            return v.includes("text/") ? [4, g.text()] : [3, 9];
          case 8:
            return t = a.sent(), [3, 11];
          case 9:
            return [4, g.blob()];
          case 10:
            t = a.sent(), a.label = 11;
          case 11:
            p = {
              data: t,
              status: g.status,
              statusText: g.statusText,
              headers: g.headers,
              config: f,
              request: void 0
            }, a.label = 12;
          case 12:
            return [
              2,
              d(
                u ? new Error("Request failed with status code " + g.status) : g,
                f,
                g.code,
                void 0,
                p
              )
            ];
        }
      });
    });
  }
  return Ce.createAxiosErrorFromFetchResp = o, Ce;
}
var xn;
function Vr() {
  if (xn) return re;
  xn = 1;
  var s = re && re.__assign || function() {
    return s = Object.assign || function(m) {
      for (var y, w = 1, I = arguments.length; w < I; w++) {
        y = arguments[w];
        for (var b in y) Object.prototype.hasOwnProperty.call(y, b) && (m[b] = y[b]);
      }
      return m;
    }, s.apply(this, arguments);
  }, R = re && re.__awaiter || function(m, y, w, I) {
    function b(k) {
      return k instanceof w ? k : new w(function(_) {
        _(k);
      });
    }
    return new (w || (w = Promise))(function(k, _) {
      function T(D) {
        try {
          C(I.next(D));
        } catch (O) {
          _(O);
        }
      }
      function P(D) {
        try {
          C(I.throw(D));
        } catch (O) {
          _(O);
        }
      }
      function C(D) {
        D.done ? k(D.value) : b(D.value).then(T, P);
      }
      C((I = I.apply(m, y || [])).next());
    });
  }, d = re && re.__generator || function(m, y) {
    var w = {
      label: 0,
      sent: function() {
        if (k[0] & 1) throw k[1];
        return k[1];
      },
      trys: [],
      ops: []
    }, I, b, k, _;
    return _ = { next: T(0), throw: T(1), return: T(2) }, typeof Symbol == "function" && (_[Symbol.iterator] = function() {
      return this;
    }), _;
    function T(C) {
      return function(D) {
        return P([C, D]);
      };
    }
    function P(C) {
      if (I) throw new TypeError("Generator is already executing.");
      for (; w; )
        try {
          if (I = 1, b && (k = C[0] & 2 ? b.return : C[0] ? b.throw || ((k = b.return) && k.call(b), 0) : b.next) && !(k = k.call(b, C[1])).done)
            return k;
          switch (b = 0, k && (C = [C[0] & 2, k.value]), C[0]) {
            case 0:
            case 1:
              k = C;
              break;
            case 4:
              return w.label++, { value: C[1], done: !1 };
            case 5:
              w.label++, b = C[1], C = [0];
              continue;
            case 7:
              C = w.ops.pop(), w.trys.pop();
              continue;
            default:
              if (k = w.trys, !(k = k.length > 0 && k[k.length - 1]) && (C[0] === 6 || C[0] === 2)) {
                w = 0;
                continue;
              }
              if (C[0] === 3 && (!k || C[1] > k[0] && C[1] < k[3])) {
                w.label = C[1];
                break;
              }
              if (C[0] === 6 && w.label < k[1]) {
                w.label = k[1], k = C;
                break;
              }
              if (k && w.label < k[2]) {
                w.label = k[2], w.ops.push(C);
                break;
              }
              k[2] && w.ops.pop(), w.trys.pop();
              continue;
          }
          C = y.call(m, w);
        } catch (D) {
          C = [6, D], b = 0;
        } finally {
          I = k = 0;
        }
      if (C[0] & 5) throw C[1];
      return { value: C[0] ? C[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(re, "__esModule", { value: !0 }), re.responseErrorInterceptor = re.responseInterceptor = re.interceptorFunctionRequestFulfilled = void 0;
  var o = jr(), g = lt(), f = Ht(), u = De(), p = ct();
  function v(m) {
    m.__supertokensSessionRefreshAttempts === void 0 && (m.__supertokensSessionRefreshAttempts = 0), m.__supertokensSessionRefreshAttempts++;
  }
  function t(m) {
    return m.__supertokensSessionRefreshAttempts === void 0 && (m.__supertokensSessionRefreshAttempts = 0), m.__supertokensSessionRefreshAttempts >= g.default.config.maxRetryAttemptsForSessionRefresh;
  }
  function a(m) {
    var y = m.url === void 0 ? "" : m.url, w = m.baseURL;
    return w !== void 0 && (y.charAt(0) === "/" && w.charAt(w.length - 1) === "/" ? y = w + y.substr(1) : y.charAt(0) !== "/" && w.charAt(w.length - 1) !== "/" ? y = w + "/" + y : y = w + y), y;
  }
  function i(m) {
    return R(this, void 0, void 0, function() {
      var y, w, I, b, k, _;
      return d(this, function(T) {
        switch (T.label) {
          case 0:
            (0, p.logDebugMessage)("interceptorFunctionRequestFulfilled: started axios interception"), y = a(m), w = !1;
            try {
              w = typeof y == "string" && !g.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                y,
                g.default.config.apiDomain,
                g.default.config.sessionTokenBackendDomain
              );
            } catch (P) {
              if (P.message === "Please provide a valid domain name")
                (0, p.logDebugMessage)(
                  "interceptorFunctionRequestFulfilled: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                ), w = !g.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                  u.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                  g.default.config.apiDomain,
                  g.default.config.sessionTokenBackendDomain
                );
              else
                throw P;
            }
            return (0, p.logDebugMessage)("interceptorFunctionRequestFulfilled: Value of doNotDoInterception: " + w), w ? ((0, p.logDebugMessage)(
              "interceptorFunctionRequestFulfilled: Returning config unchanged"
            ), [2, m]) : ((0, p.logDebugMessage)("interceptorFunctionRequestFulfilled: Modifying config"), f.ProcessState.getInstance().addState(
              f.PROCESS_STATE.CALLING_INTERCEPTION_REQUEST
            ), [4, (0, g.getLocalSessionState)(!0)]);
          case 1:
            return I = T.sent(), b = m, I.status !== "EXISTS" ? [3, 3] : [4, g.AntiCsrfToken.getToken(I.lastAccessTokenUpdate)];
          case 2:
            k = T.sent(), k !== void 0 && ((0, p.logDebugMessage)(
              "interceptorFunctionRequestFulfilled: Adding anti-csrf token to request"
            ), b = s(s({}, b), {
              headers: b === void 0 ? {
                "anti-csrf": k
              } : s(s({}, b.headers), { "anti-csrf": k })
            })), T.label = 3;
          case 3:
            return g.default.config.autoAddCredentials && b.withCredentials === void 0 && ((0, p.logDebugMessage)(
              "interceptorFunctionRequestFulfilled: Adding credentials include"
            ), b = s(s({}, b), { withCredentials: !0 })), (0, p.logDebugMessage)("interceptorFunctionRequestFulfilled: Adding rid header: anti-csrf (it may be overriden by the user's provided rid)"), b = s(s({}, b), {
              headers: b === void 0 ? {
                rid: "anti-csrf"
              } : s({ rid: "anti-csrf" }, b.headers)
            }), _ = g.default.config.tokenTransferMethod, (0, p.logDebugMessage)("interceptorFunctionRequestFulfilled: Adding st-auth-mode header: " + _), b.headers["st-auth-mode"] = _, [4, h(b)];
          case 4:
            return b = T.sent(), [4, c(b)];
          case 5:
            return T.sent(), (0, p.logDebugMessage)("interceptorFunctionRequestFulfilled: returning modified config"), [2, b];
        }
      });
    });
  }
  re.interceptorFunctionRequestFulfilled = i;
  function e(m) {
    var y = this;
    return function(w) {
      return R(y, void 0, void 0, function() {
        var I, b, k, _;
        return d(this, function(T) {
          switch (T.label) {
            case 0:
              if (I = !1, !g.default.initCalled)
                throw new Error("init function not called");
              (0, p.logDebugMessage)("responseInterceptor: started"), (0, p.logDebugMessage)("responseInterceptor: already intercepted: " + w.headers["x-supertokens-xhr-intercepted"]), b = a(w.config);
              try {
                I = typeof b == "string" && !g.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                  b,
                  g.default.config.apiDomain,
                  g.default.config.sessionTokenBackendDomain
                ) || !!w.headers["x-supertokens-xhr-intercepted"];
              } catch (P) {
                if (P.message === "Please provide a valid domain name")
                  (0, p.logDebugMessage)(
                    "responseInterceptor: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                  ), I = !g.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                    u.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                    g.default.config.apiDomain,
                    g.default.config.sessionTokenBackendDomain
                  ) || !!w.headers["x-supertokens-xhr-intercepted"];
                else
                  throw P;
              }
              return (0, p.logDebugMessage)("responseInterceptor: Value of doNotDoInterception: " + I), I ? ((0, p.logDebugMessage)("responseInterceptor: Returning without interception"), [2, w]) : ((0, p.logDebugMessage)("responseInterceptor: Interception started"), f.ProcessState.getInstance().addState(
                f.PROCESS_STATE.CALLING_INTERCEPTION_RESPONSE
              ), [4, (0, g.getLocalSessionState)(!1)]);
            case 1:
              return k = T.sent(), [4, l(w)];
            case 2:
              return T.sent(), (0, g.fireSessionUpdateEventsIfNecessary)(k.status === "EXISTS", w.status, w.headers["front-token"]), w.status !== g.default.config.sessionExpiredStatusCode ? [3, 3] : ((0, p.logDebugMessage)("responseInterceptor: Status code is: " + w.status), _ = w.config, [
                2,
                r.doRequest(
                  function(P) {
                    return m(P);
                  },
                  _,
                  b,
                  w,
                  void 0,
                  !0
                )
              ]);
            case 3:
              return w.status !== g.default.config.invalidClaimStatusCode ? [3, 5] : [4, (0, g.onInvalidClaimResponse)(w)];
            case 4:
              T.sent(), T.label = 5;
            case 5:
              return [2, w];
          }
        });
      });
    };
  }
  re.responseInterceptor = e;
  function n(m) {
    var y = this;
    return function(w) {
      return R(y, void 0, void 0, function() {
        var I;
        return d(this, function(b) {
          switch (b.label) {
            case 0:
              if ((0, p.logDebugMessage)("responseErrorInterceptor: called"), (0, p.logDebugMessage)("responseErrorInterceptor: already intercepted: " + (w.response && w.response.headers["x-supertokens-xhr-intercepted"])), w.response === void 0 || w.response.headers["x-supertokens-xhr-intercepted"])
                throw w;
              return w.response !== void 0 && w.response.status === g.default.config.sessionExpiredStatusCode ? ((0, p.logDebugMessage)("responseErrorInterceptor: Status code is: " + w.response.status), I = w.config, [
                2,
                r.doRequest(
                  function(k) {
                    return m(k);
                  },
                  I,
                  a(I),
                  void 0,
                  w,
                  !0
                )
              ]) : [3, 1];
            case 1:
              return w.response !== void 0 && w.response.status === g.default.config.invalidClaimStatusCode ? [4, (0, g.onInvalidClaimResponse)(w.response)] : [3, 3];
            case 2:
              b.sent(), b.label = 3;
            case 3:
              throw w;
          }
        });
      });
    };
  }
  re.responseErrorInterceptor = n;
  var r = (
    /** @class */
    (function() {
      function m() {
      }
      var y;
      return y = m, m.doRequest = function(w, I, b, k, _, T) {
        return T === void 0 && (T = !1), R(void 0, void 0, void 0, function() {
          var P, C, D, O, W, Q, te, oe, F, q, U, F, N, z, K;
          return d(y, function(S) {
            switch (S.label) {
              case 0:
                if (!g.default.initCalled)
                  throw Error("init function not called");
                (0, p.logDebugMessage)("doRequest: called"), P = !1;
                try {
                  P = typeof b == "string" && !g.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                    b,
                    g.default.config.apiDomain,
                    g.default.config.sessionTokenBackendDomain
                  ) && T;
                } catch (E) {
                  if (E.message === "Please provide a valid domain name")
                    (0, p.logDebugMessage)(
                      "doRequest: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                    ), P = !g.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                      u.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                      g.default.config.apiDomain,
                      g.default.config.sessionTokenBackendDomain
                    ) && T;
                  else
                    throw E;
                }
                if ((0, p.logDebugMessage)("doRequest: Value of doNotDoInterception: " + P), !P) return [3, 2];
                if ((0, p.logDebugMessage)("doRequest: Returning without interception"), _ !== void 0)
                  throw _;
                return k !== void 0 ? [2, k] : [4, w(I)];
              case 1:
                return [2, S.sent()];
              case 2:
                return (0, p.logDebugMessage)("doRequest: Interception started"), [4, h(I)];
              case 3:
                I = S.sent(), C = void 0, S.label = 4;
              case 4:
                return [4, (0, g.getLocalSessionState)(!0)];
              case 5:
                return D = S.sent(), O = I, D.status !== "EXISTS" ? [3, 7] : [4, g.AntiCsrfToken.getToken(D.lastAccessTokenUpdate)];
              case 6:
                W = S.sent(), W !== void 0 && ((0, p.logDebugMessage)("doRequest: Adding anti-csrf token to request"), O = s(s({}, O), {
                  headers: O === void 0 ? {
                    "anti-csrf": W
                  } : s(s({}, O.headers), {
                    "anti-csrf": W
                  })
                })), S.label = 7;
              case 7:
                return g.default.config.autoAddCredentials && O.withCredentials === void 0 && ((0, p.logDebugMessage)("doRequest: Adding credentials include"), O = s(s({}, O), { withCredentials: !0 })), (0, p.logDebugMessage)("doRequest: Adding rid header: anti-csrf (May get overriden by user's rid)"), O = s(s({}, O), {
                  headers: O === void 0 ? {
                    rid: "anti-csrf"
                  } : s({ rid: "anti-csrf" }, O.headers)
                }), Q = g.default.config.tokenTransferMethod, (0, p.logDebugMessage)("doRequest: Adding st-auth-mode header: " + Q), O.headers["st-auth-mode"] = Q, [4, c(O)];
              case 8:
                S.sent(), S.label = 9;
              case 9:
                if (S.trys.push([9, 14, , 27]), te = _, oe = k, _ = void 0, k = void 0, te !== void 0)
                  throw (0, p.logDebugMessage)(
                    "doRequest: Not making call because localPrevError is not undefined"
                  ), te;
                return oe !== void 0 ? (0, p.logDebugMessage)(
                  "doRequest: Not making call because localPrevResponse is not undefined"
                ) : (0, p.logDebugMessage)("doRequest: Making user's http call"), oe !== void 0 ? [3, 11] : [4, w(O)];
              case 10:
                return q = S.sent(), [3, 12];
              case 11:
                q = oe, S.label = 12;
              case 12:
                return F = q, (0, p.logDebugMessage)("doRequest: User's http call ended"), [4, l(F)];
              case 13:
                return S.sent(), (0, g.fireSessionUpdateEventsIfNecessary)(D.status === "EXISTS", F.status, F.headers["front-token"]), [2, F];
              case 14:
                return U = S.sent(), F = U.response, F === void 0 ? [3, 25] : [4, l(F)];
              case 15:
                if (S.sent(), (0, g.fireSessionUpdateEventsIfNecessary)(D.status === "EXISTS", F.status, F.headers["front-token"]), F.status !== g.default.config.sessionExpiredStatusCode)
                  return [3, 21];
                if ((0, p.logDebugMessage)("doRequest: Status code is: " + F.status), t(I))
                  throw (0, p.logDebugMessage)(
                    "doRequest: Maximum session refresh attempts reached. sessionRefreshAttempts: ".concat(
                      I.__supertokensSessionRefreshAttempts,
                      ", maxRetryAttemptsForSessionRefresh: "
                    ).concat(g.default.config.maxRetryAttemptsForSessionRefresh)
                  ), N = "Received a 401 response from ".concat(
                    b,
                    ". Attempted to refresh the session and retry the request with the updated session tokens "
                  ).concat(
                    g.default.config.maxRetryAttemptsForSessionRefresh,
                    " times, but each attempt resulted in a 401 error. The maximum session refresh limit has been reached. Please investigate your API. To increase the session refresh attempts, update maxRetryAttemptsForSessionRefresh in the config."
                  ), console.error(N), new Error(N);
                return [4, (0, g.onUnauthorisedResponse)(D)];
              case 16:
                return z = S.sent(), v(I), (0, p.logDebugMessage)("doRequest: sessionRefreshAttempts: " + I.__supertokensSessionRefreshAttempts), z.result === "RETRY" ? [3, 20] : ((0, p.logDebugMessage)("doRequest: Not retrying original request"), z.error === void 0 ? [3, 18] : [4, (0, o.createAxiosErrorFromFetchResp)(z.error)]);
              case 17:
                return K = S.sent(), [3, 19];
              case 18:
                K = U, S.label = 19;
              case 19:
                return C = K, [3, 28];
              case 20:
                return (0, p.logDebugMessage)("doRequest: Retrying original request"), [3, 24];
              case 21:
                return F.status !== g.default.config.invalidClaimStatusCode ? [3, 23] : [4, (0, g.onInvalidClaimResponse)(F)];
              case 22:
                S.sent(), S.label = 23;
              case 23:
                throw U;
              case 24:
                return [3, 26];
              case 25:
                throw U;
              case 26:
                return [3, 27];
              case 27:
                return [3, 4];
              case 28:
                throw C;
            }
          });
        });
      }, m;
    })()
  );
  re.default = r;
  function c(m) {
    return R(this, void 0, void 0, function() {
      var y, w;
      return d(this, function(I) {
        switch (I.label) {
          case 0:
            return m.headers === void 0 && (m.headers = {}), (0, p.logDebugMessage)("setAuthorizationHeaderIfRequired: adding existing tokens as header"), [4, (0, g.getTokenForHeaderAuth)("access")];
          case 1:
            return y = I.sent(), [4, (0, g.getTokenForHeaderAuth)("refresh")];
          case 2:
            return w = I.sent(), y !== void 0 && w !== void 0 ? m.headers.Authorization !== void 0 || m.headers.authorization !== void 0 ? (0, p.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: Authorization header defined by the user, not adding"
            ) : ((0, p.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: added authorization header"
            ), m.headers = s(s({}, m.headers), {
              Authorization: "Bearer ".concat(y)
            }), m.__supertokensAddedAuthHeader = !0) : (0, p.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: token for header based auth not found"
            ), [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function l(m) {
    return R(this, void 0, void 0, function() {
      var y, w, I, b, k, _;
      return d(this, function(T) {
        switch (T.label) {
          case 0:
            return (0, p.logDebugMessage)("saveTokensFromHeaders: Saving updated tokens from the response"), y = m.headers["st-refresh-token"], y === void 0 ? [3, 2] : ((0, p.logDebugMessage)("saveTokensFromHeaders: saving new refresh token"), [4, (0, g.setToken)("refresh", y)]);
          case 1:
            T.sent(), T.label = 2;
          case 2:
            return w = m.headers["st-access-token"], w === void 0 ? [3, 4] : ((0, p.logDebugMessage)("saveTokensFromHeaders: saving new access token"), [4, (0, g.setToken)("access", w)]);
          case 3:
            T.sent(), T.label = 4;
          case 4:
            return I = m.headers["front-token"], I === void 0 ? [3, 6] : ((0, p.logDebugMessage)("doRequest: Setting sFrontToken: " + I), [4, g.FrontToken.setItem(I)]);
          case 5:
            T.sent(), b = new Headers(), Object.entries(m.headers).forEach(function(P) {
              var C = P[0], D = P[1];
              Array.isArray(D) ? D.forEach(function(O) {
                return b.append(C, O);
              }) : b.append(C, D);
            }), (0, g.updateClockSkewUsingFrontToken)({ frontToken: I, responseHeaders: b }), T.label = 6;
          case 6:
            return k = m.headers["anti-csrf"], k === void 0 ? [3, 9] : [4, (0, g.getLocalSessionState)(!1)];
          case 7:
            return _ = T.sent(), _.status !== "EXISTS" ? [3, 9] : ((0, p.logDebugMessage)("doRequest: Setting anti-csrf token"), [4, g.AntiCsrfToken.setItem(_.lastAccessTokenUpdate, k)]);
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
  function h(m) {
    return R(this, void 0, void 0, function() {
      var y, w, I, b;
      return d(this, function(k) {
        switch (k.label) {
          case 0:
            return [4, (0, g.getTokenForHeaderAuth)("access")];
          case 1:
            return y = k.sent(), [4, (0, g.getTokenForHeaderAuth)("refresh")];
          case 2:
            return w = k.sent(), I = m.headers.Authorization || m.headers.authorization, y !== void 0 && w !== void 0 && (I === "Bearer ".concat(y) || "__supertokensAddedAuthHeader" in m) ? ((0, p.logDebugMessage)(
              "removeAuthHeaderIfMatchesLocalToken: Removing Authorization from user provided headers because it contains our access token"
            ), b = s(s({}, m), { headers: s({}, m.headers) }), delete b.headers.authorization, delete b.headers.Authorization, [2, b]) : [2, m];
        }
      });
    });
  }
  return re;
}
var Pe = {}, Mn;
function Wr() {
  if (Mn) return Pe;
  Mn = 1;
  var s = Pe && Pe.__awaiter || function(e, n, r, c) {
    function l(h) {
      return h instanceof r ? h : new r(function(m) {
        m(h);
      });
    }
    return new (r || (r = Promise))(function(h, m) {
      function y(b) {
        try {
          I(c.next(b));
        } catch (k) {
          m(k);
        }
      }
      function w(b) {
        try {
          I(c.throw(b));
        } catch (k) {
          m(k);
        }
      }
      function I(b) {
        b.done ? h(b.value) : l(b.value).then(y, w);
      }
      I((c = c.apply(e, n || [])).next());
    });
  }, R = Pe && Pe.__generator || function(e, n) {
    var r = {
      label: 0,
      sent: function() {
        if (h[0] & 1) throw h[1];
        return h[1];
      },
      trys: [],
      ops: []
    }, c, l, h, m;
    return m = { next: y(0), throw: y(1), return: y(2) }, typeof Symbol == "function" && (m[Symbol.iterator] = function() {
      return this;
    }), m;
    function y(I) {
      return function(b) {
        return w([I, b]);
      };
    }
    function w(I) {
      if (c) throw new TypeError("Generator is already executing.");
      for (; r; )
        try {
          if (c = 1, l && (h = I[0] & 2 ? l.return : I[0] ? l.throw || ((h = l.return) && h.call(l), 0) : l.next) && !(h = h.call(l, I[1])).done)
            return h;
          switch (l = 0, h && (I = [I[0] & 2, h.value]), I[0]) {
            case 0:
            case 1:
              h = I;
              break;
            case 4:
              return r.label++, { value: I[1], done: !1 };
            case 5:
              r.label++, l = I[1], I = [0];
              continue;
            case 7:
              I = r.ops.pop(), r.trys.pop();
              continue;
            default:
              if (h = r.trys, !(h = h.length > 0 && h[h.length - 1]) && (I[0] === 6 || I[0] === 2)) {
                r = 0;
                continue;
              }
              if (I[0] === 3 && (!h || I[1] > h[0] && I[1] < h[3])) {
                r.label = I[1];
                break;
              }
              if (I[0] === 6 && r.label < h[1]) {
                r.label = h[1], h = I;
                break;
              }
              if (h && r.label < h[2]) {
                r.label = h[2], r.ops.push(I);
                break;
              }
              h[2] && r.ops.pop(), r.trys.pop();
              continue;
          }
          I = n.call(e, r);
        } catch (b) {
          I = [6, b], l = 0;
        } finally {
          c = h = 0;
        }
      if (I[0] & 5) throw I[1];
      return { value: I[0] ? I[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Pe, "__esModule", { value: !0 }), Pe.addInterceptorsToXMLHttpRequest = void 0;
  var d = lt(), o = ct(), g = De(), f = Ht(), u = ["readystatechange", "abort", "error", "load", "loadend", "loadstart", "progress", "timeout"];
  function p() {
    var e = new Promise(function(r) {
      return setTimeout(r, 0);
    }), n = XMLHttpRequest;
    (0, o.logDebugMessage)("addInterceptorsToXMLHttpRequest called"), XMLHttpRequest = function() {
      var r = new n(), c = this, l = [], h = [], m = {}, y, w = /* @__PURE__ */ new Map(), I = e;
      function b(q) {
        I = I.finally(function() {
          var U;
          return (U = q()) === null || U === void 0 ? void 0 : U.catch(function(F) {
            var N = new ProgressEvent("error");
            N.error = F, c.onerror !== void 0 && c.onerror !== null && c.onerror(N), D("error", N);
          });
        });
      }
      var k = "", _ = !1, T = void 0, P, C = 0;
      c.onload = null, c.onreadystatechange = null, c.onloadend = null, c.addEventListener = function(q, U, F) {
        var N = w.get(q);
        N === void 0 && (N = /* @__PURE__ */ new Set(), w.set(q, N)), N.add(U);
      }, c.removeEventListener = function(q, U) {
        var F = w.get(q);
        F === void 0 && (F = /* @__PURE__ */ new Set(), w.set(q, F)), F.delete(U);
      };
      function D(q, U) {
        var F = w.get(q);
        (0, o.logDebugMessage)(
          "XHRInterceptor dispatching ".concat(U.type, " to ").concat(F ? F.size : 0, " listeners")
        ), F && Array.from(F).forEach(function(N) {
          return N.apply(c, [U]);
        });
      }
      function O() {
        return s(this, void 0, void 0, function() {
          var q, U, F;
          return R(this, function(N) {
            switch (N.label) {
              case 0:
                if (T === void 0)
                  throw new Error("Should never come here..");
                if ((0, o.logDebugMessage)("XHRInterceptor.handleRetryPostRefreshing: preRequestLSS " + T.status), C >= d.default.config.maxRetryAttemptsForSessionRefresh)
                  throw (0, o.logDebugMessage)(
                    "XHRInterceptor.handleRetryPostRefreshing: Maximum session refresh attempts reached. sessionRefreshAttempts: ".concat(C, ", maxRetryAttemptsForSessionRefresh: ").concat(d.default.config.maxRetryAttemptsForSessionRefresh)
                  ), m.status = 0, m.statusText = "", m.responseType = "", q = "Received a 401 response from ".concat(
                    k,
                    ". Attempted to refresh the session and retry the request with the updated session tokens "
                  ).concat(
                    d.default.config.maxRetryAttemptsForSessionRefresh,
                    " times, but each attempt resulted in a 401 error. The maximum session refresh limit has been reached. Please investigate your API. To increase the session refresh attempts, update maxRetryAttemptsForSessionRefresh in the config."
                  ), console.error(q), new Error(q);
                return [4, (0, d.onUnauthorisedResponse)(T)];
              case 1:
                if (U = N.sent(), C++, (0, o.logDebugMessage)("XHRInterceptor.handleRetryPostRefreshing: sessionRefreshAttempts: " + C), U.result !== "RETRY") {
                  if ((0, o.logDebugMessage)(
                    "XHRInterceptor.handleRetryPostRefreshing: Not retrying original request " + !!U.error
                  ), U.error !== void 0)
                    throw U.error;
                  return [2, !0];
                }
                return (0, o.logDebugMessage)("XHRInterceptor.handleRetryPostRefreshing: Retrying original request"), F = new n(), te(c, F, !0), l.forEach(function(z) {
                  z(F);
                }), oe(F, P), [2, !1];
            }
          });
        });
      }
      function W(q) {
        return s(this, void 0, void 0, function() {
          var U, F, N, z, K;
          return R(this, function(S) {
            switch (S.label) {
              case 0:
                if (_)
                  return (0, o.logDebugMessage)(
                    "XHRInterceptor.handleResponse: Returning without interception"
                  ), [2, !0];
                S.label = 1;
              case 1:
                return S.trys.push([1, 7, , 11]), (0, o.logDebugMessage)("XHRInterceptor.handleResponse: Interception started"), f.ProcessState.getInstance().addState(
                  f.PROCESS_STATE.CALLING_INTERCEPTION_RESPONSE
                ), U = q.status, F = i(q), [4, a(F)];
              case 2:
                return S.sent(), (0, d.fireSessionUpdateEventsIfNecessary)(T.status === "EXISTS", U, F.get("front-token")), U !== d.default.config.sessionExpiredStatusCode ? [3, 4] : ((0, o.logDebugMessage)("responseInterceptor: Status code is: " + U), [4, O()]);
              case 3:
                return [2, S.sent()];
              case 4:
                return U !== d.default.config.invalidClaimStatusCode ? [3, 6] : [4, (0, d.onInvalidClaimResponse)({ data: q.responseText })];
              case 5:
                S.sent(), S.label = 6;
              case 6:
                return [2, !0];
              case 7:
                return N = S.sent(), (0, o.logDebugMessage)("XHRInterceptor.handleResponse: caught error"), N.status === void 0 ? [3, 9] : [4, v(N)];
              case 8:
                if (z = S.sent(), m.status = z.status, m.statusText = z.statusText, m.responseType = z.responseType, y = z.headers, z.responseType === "json")
                  try {
                    m.response = JSON.parse(z.responseText);
                  } catch {
                    m.response = z.responseText;
                  }
                else
                  m.response = z.responseText;
                return m.responseText = z.responseText, [3, 10];
              case 9:
                K = new ProgressEvent("error"), K.error = N, c.onerror !== void 0 && c.onerror !== null && c.onerror(K), D("error", K), S.label = 10;
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
      c.open = function(q, U) {
        (0, o.logDebugMessage)("XHRInterceptor.open called");
        var F = arguments;
        k = U;
        try {
          _ = typeof k == "string" && !d.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
            k,
            d.default.config.apiDomain,
            d.default.config.sessionTokenBackendDomain
          ) || typeof k != "string" && !d.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
            k.toString(),
            d.default.config.apiDomain,
            d.default.config.sessionTokenBackendDomain
          );
        } catch (N) {
          if (N.message === "Please provide a valid domain name")
            (0, o.logDebugMessage)(
              "XHRInterceptor.open: Trying shouldDoInterceptionBasedOnUrl with location.origin"
            ), _ = !d.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
              g.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
              d.default.config.apiDomain,
              d.default.config.sessionTokenBackendDomain
            );
          else
            throw N;
        }
        b(function() {
          l.push(function(N) {
            N.open.apply(N, F);
          }), r.open.apply(r, F);
        });
      }, c.send = function(q) {
        P = q, oe(r, P);
      }, c.setRequestHeader = function(q, U) {
        var F = this;
        if ((0, o.logDebugMessage)("XHRInterceptor.setRequestHeader: Called with ".concat(q)), _) {
          b(function() {
            return r.setRequestHeader(q, U);
          });
          return;
        }
        q !== "anti-csrf" && b(function() {
          return s(F, void 0, void 0, function() {
            var N, z;
            return R(this, function(K) {
              switch (K.label) {
                case 0:
                  return q.toLowerCase() !== "authorization" ? [3, 3] : ((0, o.logDebugMessage)("XHRInterceptor.setRequestHeader: checking if user provided auth header matches local token"), [4, (0, d.getTokenForHeaderAuth)("access")]);
                case 1:
                  return N = K.sent(), [4, (0, d.getTokenForHeaderAuth)("refresh")];
                case 2:
                  if (z = K.sent(), N !== void 0 && z !== void 0 && U === "Bearer ".concat(N))
                    return (0, o.logDebugMessage)(
                      "XHRInterceptor.setRequestHeader: skipping Authorization from user provided headers because it contains our access token"
                    ), [
                      2
                      /*return*/
                    ];
                  K.label = 3;
                case 3:
                  return l.push(function(S) {
                    S.setRequestHeader(q, U);
                  }), h.push({ name: q, value: U }), r.setRequestHeader(q, U), [
                    2
                    /*return*/
                  ];
              }
            });
          });
        });
      };
      var Q = void 0;
      te(c, r, !1);
      function te(q, U, F) {
        var N, z = ["load", "loadend", "readystatechange"];
        (0, o.logDebugMessage)("XHRInterceptor.setUpXHR called");
        for (var K = function(H) {
          (0, o.logDebugMessage)("XHRInterceptor added listener for event ".concat(H)), U.addEventListener(H, function(G) {
            (0, o.logDebugMessage)("XHRInterceptor got event ".concat(H)), z.includes(H) || D(H, G);
          });
        }, S = 0, E = u; S < E.length; S++) {
          var A = E[S];
          K(A);
        }
        if (U.onload = function(H) {
          N === void 0 && (N = W(U)), N.then(function(G) {
            G && (q.onload && q.onload(H), D("load", H));
          });
        }, U.onreadystatechange = function(H) {
          U.readyState === n.DONE ? (N === void 0 && (N = W(U)), N.then(function(G) {
            G && (q.onreadystatechange && q.onreadystatechange(H), D("readystatechange", H));
          })) : (q.onreadystatechange && q.onreadystatechange(H), D("readystatechange", H));
        }, U.onloadend = function(H) {
          N === void 0 && (N = W(U)), N.then(function(G) {
            G && (q.onloadend && q.onloadend(H), D("loadend", H));
          });
        }, q.getAllResponseHeaders = function() {
          var H;
          return y ? (H = "", y.forEach(function(G, j) {
            return H += "".concat(j, ": ").concat(G, `\r
`);
          })) : H = U.getAllResponseHeaders(), H + `x-supertokens-xhr-intercepted: true\r
`;
        }, q.getResponseHeader = function(H) {
          return H === "x-supertokens-xhr-intercepted" ? "true" : y ? y.get(H) : U.getResponseHeader(H);
        }, Q === void 0) {
          Q = [];
          for (var x in U)
            x in q || Q.push(x);
        }
        for (var M = function(H) {
          typeof U[H] == "function" ? Object.defineProperty(q, H, {
            configurable: !0,
            value: function() {
              var G = arguments;
              return F || l.push(function(j) {
                j[H].apply(j, G);
              }), U[H].apply(U, G);
            }
          }) : Object.defineProperty(q, H, {
            configurable: !0,
            get: function() {
              return m[H] !== void 0 ? m[H] : U[H];
            },
            set: function(G) {
              F || l.push(function(j) {
                j[H] = G;
              }), (0, o.logDebugMessage)("XHRInterceptor.set[".concat(H, "] = ").concat(G)), U[H] = G;
            }
          });
        }, L = 0, V = Q; L < V.length; L++) {
          var x = V[L];
          M(x);
        }
      }
      function oe(q, U) {
        var F = this;
        if ((0, o.logDebugMessage)("XHRInterceptor.send: called"), (0, o.logDebugMessage)("XHRInterceptor.send: Value of doNotDoInterception: " + _), _) {
          (0, o.logDebugMessage)("XHRInterceptor.send: Returning without interception"), b(function() {
            return q.send(U);
          });
          return;
        }
        (0, o.logDebugMessage)("XHRInterceptor.send: Interception started"), f.ProcessState.getInstance().addState(
          f.PROCESS_STATE.CALLING_INTERCEPTION_REQUEST
        ), b(function() {
          return s(F, void 0, void 0, function() {
            var N, z;
            return R(this, function(K) {
              switch (K.label) {
                case 0:
                  return [4, (0, d.getLocalSessionState)(!0)];
                case 1:
                  return T = K.sent(), T.status !== "EXISTS" ? [3, 3] : [
                    4,
                    d.AntiCsrfToken.getToken(T.lastAccessTokenUpdate)
                  ];
                case 2:
                  N = K.sent(), N !== void 0 && ((0, o.logDebugMessage)(
                    "XHRInterceptor.send: Adding anti-csrf token to request"
                  ), q.setRequestHeader("anti-csrf", N)), K.label = 3;
                case 3:
                  return d.default.config.autoAddCredentials && ((0, o.logDebugMessage)("XHRInterceptor.send: Adding credentials include"), c.withCredentials = !0), h.some(function(S) {
                    return S.name === "rid";
                  }) ? (0, o.logDebugMessage)(
                    "XHRInterceptor.send: rid header was already there in request"
                  ) : ((0, o.logDebugMessage)("XHRInterceptor.send: Adding rid header: anti-csrf"), q.setRequestHeader("rid", "anti-csrf")), z = d.default.config.tokenTransferMethod, h.some(function(S) {
                    return S.name === "st-auth-mode";
                  }) ? (0, o.logDebugMessage)(
                    "XHRInterceptor.send: st-auth-mode header was already there in request"
                  ) : ((0, o.logDebugMessage)(
                    "XHRInterceptor.send: Adding st-auth-mode header: " + z
                  ), q.setRequestHeader("st-auth-mode", z)), [4, t(q, h)];
                case 4:
                  return K.sent(), (0, o.logDebugMessage)("XHRInterceptor.send: Making user's http call"), [2, q.send(U)];
              }
            });
          });
        });
      }
    }, XMLHttpRequest.__interceptedBySuperTokens = !0, XMLHttpRequest.__original = n;
  }
  Pe.addInterceptorsToXMLHttpRequest = p;
  function v(e) {
    return s(this, void 0, void 0, function() {
      var n, r, c, l, h;
      return R(this, function(m) {
        switch (m.label) {
          case 0:
            if (n = e.headers.get("content-type"), r = "", c = "text", n !== null) return [3, 5];
            m.label = 1;
          case 1:
            return m.trys.push([1, 3, , 4]), [4, e.text()];
          case 2:
            return r = m.sent(), [3, 4];
          case 3:
            return m.sent(), r = "", [3, 4];
          case 4:
            return [3, 9];
          case 5:
            return n.includes("application/json") ? (c = "json", h = (l = JSON).stringify, [4, e.json()]) : [3, 7];
          case 6:
            return r = h.apply(l, [m.sent()]), [3, 9];
          case 7:
            return n.includes("text/") ? [4, e.text()] : [3, 9];
          case 8:
            r = m.sent(), m.label = 9;
          case 9:
            return [
              2,
              {
                status: e.status,
                responseText: r,
                statusText: e.statusText,
                responseType: c,
                headers: e.headers
              }
            ];
        }
      });
    });
  }
  function t(e, n) {
    return s(this, void 0, void 0, function() {
      var r, c;
      return R(this, function(l) {
        switch (l.label) {
          case 0:
            return (0, o.logDebugMessage)("setAuthorizationHeaderIfRequired: adding existing tokens as header"), [4, (0, d.getTokenForHeaderAuth)("access")];
          case 1:
            return r = l.sent(), [4, (0, d.getTokenForHeaderAuth)("refresh")];
          case 2:
            return c = l.sent(), r !== void 0 && c !== void 0 ? n.some(function(h) {
              var m = h.name;
              return m.toLowerCase() === "authorization";
            }) ? (0, o.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: Authorization header defined by the user, not adding"
            ) : r !== void 0 && ((0, o.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: added authorization header"
            ), e.setRequestHeader("Authorization", "Bearer ".concat(r))) : (0, o.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: token for header based auth not found"
            ), [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function a(e) {
    return s(this, void 0, void 0, function() {
      var n, r, c, l, h;
      return R(this, function(m) {
        switch (m.label) {
          case 0:
            return (0, o.logDebugMessage)("saveTokensFromHeaders: Saving updated tokens from the response"), n = e.get("st-refresh-token"), n === null ? [3, 2] : ((0, o.logDebugMessage)("saveTokensFromHeaders: saving new refresh token"), [4, (0, d.setToken)("refresh", n)]);
          case 1:
            m.sent(), m.label = 2;
          case 2:
            return r = e.get("st-access-token"), r === null ? [3, 4] : ((0, o.logDebugMessage)("saveTokensFromHeaders: saving new access token"), [4, (0, d.setToken)("access", r)]);
          case 3:
            m.sent(), m.label = 4;
          case 4:
            return c = e.get("front-token"), c === null ? [3, 6] : ((0, o.logDebugMessage)("saveTokensFromHeaders: Setting sFrontToken: " + c), [4, d.FrontToken.setItem(c)]);
          case 5:
            m.sent(), (0, d.updateClockSkewUsingFrontToken)({ frontToken: c, responseHeaders: e }), m.label = 6;
          case 6:
            return l = e.get("anti-csrf"), l === null ? [3, 9] : [4, (0, d.getLocalSessionState)(!1)];
          case 7:
            return h = m.sent(), h.status !== "EXISTS" ? [3, 9] : ((0, o.logDebugMessage)("saveTokensFromHeaders: Setting anti-csrf token"), [4, d.AntiCsrfToken.setItem(h.lastAccessTokenUpdate, l)]);
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
  function i(e) {
    return new Headers(
      e.getAllResponseHeaders().split(`\r
`).map(function(n) {
        var r = n.indexOf(": ");
        return r === -1 ? ["", ""] : [n.slice(0, r), n.slice(r + 2)];
      }).filter(function(n) {
        return n[0].length !== 0;
      })
    );
  }
  return Pe;
}
var Un;
function Br() {
  if (Un) return me;
  Un = 1;
  var s = me && me.__assign || function() {
    return s = Object.assign || function(c) {
      for (var l, h = 1, m = arguments.length; h < m; h++) {
        l = arguments[h];
        for (var y in l) Object.prototype.hasOwnProperty.call(l, y) && (c[y] = l[y]);
      }
      return c;
    }, s.apply(this, arguments);
  }, R = me && me.__awaiter || function(c, l, h, m) {
    function y(w) {
      return w instanceof h ? w : new h(function(I) {
        I(w);
      });
    }
    return new (h || (h = Promise))(function(w, I) {
      function b(T) {
        try {
          _(m.next(T));
        } catch (P) {
          I(P);
        }
      }
      function k(T) {
        try {
          _(m.throw(T));
        } catch (P) {
          I(P);
        }
      }
      function _(T) {
        T.done ? w(T.value) : y(T.value).then(b, k);
      }
      _((m = m.apply(c, l || [])).next());
    });
  }, d = me && me.__generator || function(c, l) {
    var h = {
      label: 0,
      sent: function() {
        if (w[0] & 1) throw w[1];
        return w[1];
      },
      trys: [],
      ops: []
    }, m, y, w, I;
    return I = { next: b(0), throw: b(1), return: b(2) }, typeof Symbol == "function" && (I[Symbol.iterator] = function() {
      return this;
    }), I;
    function b(_) {
      return function(T) {
        return k([_, T]);
      };
    }
    function k(_) {
      if (m) throw new TypeError("Generator is already executing.");
      for (; h; )
        try {
          if (m = 1, y && (w = _[0] & 2 ? y.return : _[0] ? y.throw || ((w = y.return) && w.call(y), 0) : y.next) && !(w = w.call(y, _[1])).done)
            return w;
          switch (y = 0, w && (_ = [_[0] & 2, w.value]), _[0]) {
            case 0:
            case 1:
              w = _;
              break;
            case 4:
              return h.label++, { value: _[1], done: !1 };
            case 5:
              h.label++, y = _[1], _ = [0];
              continue;
            case 7:
              _ = h.ops.pop(), h.trys.pop();
              continue;
            default:
              if (w = h.trys, !(w = w.length > 0 && w[w.length - 1]) && (_[0] === 6 || _[0] === 2)) {
                h = 0;
                continue;
              }
              if (_[0] === 3 && (!w || _[1] > w[0] && _[1] < w[3])) {
                h.label = _[1];
                break;
              }
              if (_[0] === 6 && h.label < w[1]) {
                h.label = w[1], w = _;
                break;
              }
              if (w && h.label < w[2]) {
                h.label = w[2], h.ops.push(_);
                break;
              }
              w[2] && h.ops.pop(), h.trys.pop();
              continue;
          }
          _ = l.call(c, h);
        } catch (T) {
          _ = [6, T], y = 0;
        } finally {
          m = w = 0;
        }
      if (_[0] & 5) throw _[1];
      return { value: _[0] ? _[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(me, "__esModule", { value: !0 });
  var o = lt(), g = Vr(), f = Lt(), u = ct(), p = gr(), v = Wr(), t = Ut(), a = $e(), i = Ft(), e = 100, n = "CLAIM_REFRESH_LOCK";
  function r(c) {
    return {
      addXMLHttpRequestInterceptor: function(l) {
        (0, u.logDebugMessage)("addXMLHttpRequestInterceptorAndReturnModified: called"), (0, v.addInterceptorsToXMLHttpRequest)();
      },
      addFetchInterceptorsAndReturnModifiedFetch: function(l) {
        return (0, u.logDebugMessage)("addFetchInterceptorsAndReturnModifiedFetch: called"), function(h, m) {
          return R(this, void 0, void 0, function() {
            return d(this, function(y) {
              switch (y.label) {
                case 0:
                  return [
                    4,
                    o.default.doRequest(
                      function(w) {
                        return l.originalFetch(
                          typeof h == "object" && "clone" in h ? h.clone() : h,
                          s({}, w)
                        );
                      },
                      m,
                      h
                    )
                  ];
                case 1:
                  return [2, y.sent()];
              }
            });
          });
        };
      },
      addAxiosInterceptors: function(l) {
        if ((0, u.logDebugMessage)("addAxiosInterceptors: called"), XMLHttpRequest.__interceptedBySuperTokens) {
          console.warn(
            "Not adding axios interceptor since XMLHttpRequest is already added. This is just a warning."
          ), console.warn("Our axios and XMLHttpRequest interceptors cannot be used at the same time."), console.warn(
            "Since XMLHttpRequest is added automatically and supports axios by default, you can just remove addAxiosInterceptors from your code."
          ), console.warn(
            "If you want to continue using our axios interceptor, you can override addXMLHttpRequestInterceptor with an empty function."
          ), (0, u.logDebugMessage)(
            "addAxiosInterceptors: not adding, because XHR interceptors are already in place"
          );
          return;
        }
        for (var h = l.axiosInstance.interceptors.request, m = 0; m < h.handlers.length; m++)
          if (h.handlers[m].fulfilled === g.interceptorFunctionRequestFulfilled) {
            (0, u.logDebugMessage)(
              "addAxiosInterceptors: not adding because already added on this instance"
            );
            return;
          }
        l.axiosInstance.interceptors.request.use(g.interceptorFunctionRequestFulfilled, function(y) {
          return R(this, void 0, void 0, function() {
            return d(this, function(w) {
              throw y;
            });
          });
        }), l.axiosInstance.interceptors.response.use(
          (0, g.responseInterceptor)(l.axiosInstance),
          (0, g.responseErrorInterceptor)(l.axiosInstance)
        );
      },
      getUserId: function(l) {
        return R(this, void 0, void 0, function() {
          var h;
          return d(this, function(m) {
            switch (m.label) {
              case 0:
                return (0, u.logDebugMessage)("getUserId: called"), [4, o.FrontToken.getTokenInfo()];
              case 1:
                if (h = m.sent(), h === void 0)
                  throw new Error("No session exists");
                return (0, u.logDebugMessage)("getUserId: returning: " + h.uid), [2, h.uid];
            }
          });
        });
      },
      getAccessTokenPayloadSecurely: function(l) {
        return R(this, void 0, void 0, function() {
          var h, m;
          return d(this, function(y) {
            switch (y.label) {
              case 0:
                return (0, u.logDebugMessage)("getAccessTokenPayloadSecurely: called"), [4, o.FrontToken.getTokenInfo()];
              case 1:
                if (h = y.sent(), h === void 0)
                  throw new Error("No session exists");
                return h.ate < a.default.getReferenceOrThrow().dateProvider.now() ? ((0, u.logDebugMessage)("getAccessTokenPayloadSecurely: access token expired. Refreshing session"), [4, o.default.attemptRefreshingSession()]) : [3, 5];
              case 2:
                return m = y.sent(), m ? [
                  4,
                  this.getAccessTokenPayloadSecurely({
                    userContext: l.userContext
                  })
                ] : [3, 4];
              case 3:
                return [2, y.sent()];
              case 4:
                throw new Error("Could not refresh session");
              case 5:
                return (0, u.logDebugMessage)("getAccessTokenPayloadSecurely: returning: " + JSON.stringify(h.up)), [2, h.up];
            }
          });
        });
      },
      doesSessionExist: function(l) {
        return R(this, void 0, void 0, function() {
          var h, m, y;
          return d(this, function(w) {
            switch (w.label) {
              case 0:
                return (0, u.logDebugMessage)("doesSessionExist: called"), [4, o.FrontToken.getTokenInfo()];
              case 1:
                return h = w.sent(), h === void 0 ? ((0, u.logDebugMessage)("doesSessionExist: access token does not exist locally"), [2, !1]) : h.ate < a.default.getReferenceOrThrow().dateProvider.now() ? ((0, u.logDebugMessage)("doesSessionExist: access token expired. Refreshing session"), [4, (0, o.getLocalSessionState)(!1)]) : [3, 4];
              case 2:
                return m = w.sent(), [4, (0, o.onUnauthorisedResponse)(m)];
              case 3:
                return y = w.sent(), [2, y.result === "RETRY"];
              case 4:
                return [2, !0];
            }
          });
        });
      },
      signOut: function(l) {
        return R(this, void 0, void 0, function() {
          var h, m, y, w;
          return d(this, function(I) {
            switch (I.label) {
              case 0:
                return (0, u.logDebugMessage)("signOut: called"), [4, this.doesSessionExist(l)];
              case 1:
                return I.sent() ? ((0, u.logDebugMessage)("signOut: Calling refresh pre API hook"), [
                  4,
                  c.preAPIHook({
                    action: "SIGN_OUT",
                    requestInit: {
                      method: "post",
                      headers: {
                        "fdi-version": f.supported_fdi.join(","),
                        rid: o.default.rid
                      }
                    },
                    url: o.default.signOutUrl,
                    userContext: l.userContext
                  })
                ]) : ((0, u.logDebugMessage)("signOut: exiting early because session does not exist"), (0, u.logDebugMessage)("signOut: firing SIGN_OUT event"), c.onHandleEvent({
                  action: "SIGN_OUT",
                  userContext: l.userContext
                }), [
                  2
                  /*return*/
                ]);
              case 2:
                return h = I.sent(), (0, u.logDebugMessage)("signOut: Calling API"), [4, fetch(h.url, h.requestInit)];
              case 3:
                if (m = I.sent(), (0, u.logDebugMessage)("signOut: API ended"), (0, u.logDebugMessage)("signOut: API responded with status code: " + m.status), m.status === c.sessionExpiredStatusCode)
                  return [
                    2
                    /*return*/
                  ];
                if (m.status >= 300)
                  throw m;
                return [
                  4,
                  c.postAPIHook({
                    action: "SIGN_OUT",
                    requestInit: h.requestInit,
                    url: h.url,
                    fetchResponse: m.clone(),
                    userContext: l.userContext
                  })
                ];
              case 4:
                return I.sent(), [4, m.clone().json()];
              case 5:
                if (y = I.sent(), y.status === "GENERAL_ERROR")
                  throw (0, u.logDebugMessage)("doRequest: Throwing general error"), w = y.message === void 0 ? "No Error Message Provided" : y.message, new p.STGeneralError(w);
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      },
      getInvalidClaimsFromResponse: function(l) {
        return R(this, void 0, void 0, function() {
          var h;
          return d(this, function(m) {
            switch (m.label) {
              case 0:
                return "body" in l.response ? [4, l.response.clone().json()] : [3, 2];
              case 1:
                return h = m.sent(), [3, 3];
              case 2:
                typeof l.response.data == "string" ? h = JSON.parse(l.response.data) : h = l.response.data, m.label = 3;
              case 3:
                return [2, h.claimValidationErrors];
            }
          });
        });
      },
      getGlobalClaimValidators: function(l) {
        return l.claimValidatorsAddedByOtherRecipes;
      },
      validateClaims: function(l) {
        return R(this, void 0, void 0, function() {
          var h, m, y, w, I, b, C, k, _, T, P, C, D;
          return d(this, function(O) {
            switch (O.label) {
              case 0:
                m = 0, O.label = 1;
              case 1:
                return ++m < e ? [4, i.default.getReferenceOrThrow().lockFactory()] : [3, 20];
              case 2:
                return y = O.sent(), (0, u.logDebugMessage)("validateClaims: trying to acquire claim refresh lock"), [4, y.acquireLock(n)];
              case 3:
                if (w = O.sent(), !w) return [3, 18];
                O.label = 4;
              case 4:
                return O.trys.push([4, , 15, 17]), [
                  4,
                  this.getAccessTokenPayloadSecurely({
                    userContext: l.userContext
                  })
                ];
              case 5:
                h = O.sent(), (0, u.logDebugMessage)("validateClaims: claim refresh lock acquired"), I = 0, b = l.claimValidators, O.label = 6;
              case 6:
                return I < b.length ? (C = b[I], [4, C.shouldRefresh(h, l.userContext)]) : [3, 14];
              case 7:
                if (!O.sent()) return [3, 13];
                O.label = 8;
              case 8:
                return O.trys.push([8, 10, , 11]), [4, C.refresh(l.userContext)];
              case 9:
                return O.sent(), [3, 11];
              case 10:
                return k = O.sent(), console.error(
                  "Encountered an error while refreshing validator ".concat(C.id),
                  k
                ), [3, 11];
              case 11:
                return [
                  4,
                  this.getAccessTokenPayloadSecurely({
                    userContext: l.userContext
                  })
                ];
              case 12:
                h = O.sent(), O.label = 13;
              case 13:
                return I++, [3, 6];
              case 14:
                return [3, 17];
              case 15:
                return (0, u.logDebugMessage)("validateClaims: releasing claim refresh lock"), [4, y.releaseLock(n)];
              case 16:
                return O.sent(), [
                  7
                  /*endfinally*/
                ];
              case 17:
                return [3, 20];
              case 18:
                (0, u.logDebugMessage)("validateClaims: Retrying refresh lock ".concat(m, "/").concat(e)), O.label = 19;
              case 19:
                return [3, 1];
              case 20:
                return m !== e ? [3, 22] : ((0, u.logDebugMessage)("validateClaims: ran out of retries while trying to acquire claim refresh lock"), [
                  4,
                  this.getAccessTokenPayloadSecurely({ userContext: l.userContext })
                ]);
              case 21:
                h = O.sent(), O.label = 22;
              case 22:
                _ = [], T = 0, P = l.claimValidators, O.label = 23;
              case 23:
                return T < P.length ? (C = P[T], [4, C.validate(h, l.userContext)]) : [3, 26];
              case 24:
                D = O.sent(), D.isValid || _.push({
                  id: C.id,
                  reason: D.reason
                }), O.label = 25;
              case 25:
                return T++, [3, 23];
              case 26:
                return [2, _];
            }
          });
        });
      },
      shouldDoInterceptionBasedOnUrl: function(l, h, m) {
        if ((0, u.logDebugMessage)(
          "shouldDoInterceptionBasedOnUrl: toCheckUrl: " + l + " apiDomain: " + h + " sessionTokenBackendDomain: " + m
        ), l.includes("superTokensDoNotDoInterception"))
          return !1;
        l = (0, t.normaliseURLDomainOrThrowError)(l);
        var y = new URL(l), w = y.hostname, I = !1;
        if (h !== "") {
          h = (0, t.normaliseURLDomainOrThrowError)(h);
          var b = new URL(h);
          I = w === b.hostname;
        }
        if (m === void 0 || I)
          return I;
        var k = (0, t.normaliseSessionScopeOrThrowError)(m);
        return (0, t.matchesDomainOrSubdomain)(w, k);
      },
      calculateClockSkewInMillis: function(l) {
        var h = l.accessTokenPayload;
        (0, u.logDebugMessage)("calculateClockSkewInMillis: called");
        var m = h?.iat;
        if (m === void 0 || typeof m != "number")
          return (0, u.logDebugMessage)(
            "calculateClockSkewInMillis: payload iat is undefined or not a number. This may happen due to an unsupported backend sdk. Returning 0"
          ), 0;
        var y = m * 1e3, w = y - Date.now();
        return (0, u.logDebugMessage)("calculateClockSkewInMillis: returning " + w), w;
      }
    };
  }
  return me.default = r, me;
}
var ot = {}, Hn;
function mr() {
  if (Hn) return ot;
  Hn = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.PrimitiveClaim = void 0;
  var s = $e(), R = (
    /** @class */
    (function() {
      function d(o) {
        var g = this;
        this.validators = {
          hasValue: function(f, u, p) {
            u === void 0 && (u = g.defaultMaxAgeInSeconds);
            var v = s.default.getReferenceOrThrow().dateProvider;
            return {
              id: p !== void 0 ? p : g.id,
              refresh: function(t) {
                return g.refresh(t);
              },
              shouldRefresh: function(t, a) {
                if (u !== void 0 && u < v.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      v.getThresholdInSeconds()
                    )
                  );
                return g.getValueFromPayload(t, a) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                u !== void 0 && t[g.id].t < v.now() - u * 1e3;
              },
              validate: function(t, a) {
                var i = g.getValueFromPayload(t, a);
                if (i === void 0)
                  return {
                    isValid: !1,
                    reason: { message: "value does not exist", expectedValue: f, actualValue: i }
                  };
                var e = (v.now() - g.getLastFetchedTime(t, a)) / 1e3;
                return u !== void 0 && e > u ? {
                  isValid: !1,
                  reason: {
                    message: "expired",
                    ageInSeconds: e,
                    maxAgeInSeconds: u
                  }
                } : i !== f ? {
                  isValid: !1,
                  reason: { message: "wrong value", expectedValue: f, actualValue: i }
                } : { isValid: !0 };
              }
            };
          }
        }, this.id = o.id, this.refresh = o.refresh, this.defaultMaxAgeInSeconds = o.defaultMaxAgeInSeconds;
      }
      return d.prototype.getValueFromPayload = function(o, g) {
        return o[this.id] !== void 0 ? o[this.id].v : void 0;
      }, d.prototype.getLastFetchedTime = function(o, g) {
        return o[this.id] !== void 0 ? o[this.id].t : void 0;
      }, d;
    })()
  );
  return ot.PrimitiveClaim = R, ot;
}
var Ae = {}, Ln;
function Gr() {
  if (Ln) return Ae;
  Ln = 1;
  var s = Ae && Ae.__awaiter || function(g, f, u, p) {
    function v(t) {
      return t instanceof u ? t : new u(function(a) {
        a(t);
      });
    }
    return new (u || (u = Promise))(function(t, a) {
      function i(r) {
        try {
          n(p.next(r));
        } catch (c) {
          a(c);
        }
      }
      function e(r) {
        try {
          n(p.throw(r));
        } catch (c) {
          a(c);
        }
      }
      function n(r) {
        r.done ? t(r.value) : v(r.value).then(i, e);
      }
      n((p = p.apply(g, f || [])).next());
    });
  }, R = Ae && Ae.__generator || function(g, f) {
    var u = {
      label: 0,
      sent: function() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    }, p, v, t, a;
    return a = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
      return this;
    }), a;
    function i(n) {
      return function(r) {
        return e([n, r]);
      };
    }
    function e(n) {
      if (p) throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (p = 1, v && (t = n[0] & 2 ? v.return : n[0] ? v.throw || ((t = v.return) && t.call(v), 0) : v.next) && !(t = t.call(v, n[1])).done)
            return t;
          switch (v = 0, t && (n = [n[0] & 2, t.value]), n[0]) {
            case 0:
            case 1:
              t = n;
              break;
            case 4:
              return u.label++, { value: n[1], done: !1 };
            case 5:
              u.label++, v = n[1], n = [0];
              continue;
            case 7:
              n = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (t = u.trys, !(t = t.length > 0 && t[t.length - 1]) && (n[0] === 6 || n[0] === 2)) {
                u = 0;
                continue;
              }
              if (n[0] === 3 && (!t || n[1] > t[0] && n[1] < t[3])) {
                u.label = n[1];
                break;
              }
              if (n[0] === 6 && u.label < t[1]) {
                u.label = t[1], t = n;
                break;
              }
              if (t && u.label < t[2]) {
                u.label = t[2], u.ops.push(n);
                break;
              }
              t[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          n = f.call(g, u);
        } catch (r) {
          n = [6, r], v = 0;
        } finally {
          p = t = 0;
        }
      if (n[0] & 5) throw n[1];
      return { value: n[0] ? n[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Ae, "__esModule", { value: !0 }), Ae.PrimitiveArrayClaim = void 0;
  var d = $e(), o = (
    /** @class */
    (function() {
      function g(f) {
        var u = this;
        this.validators = {
          includes: function(p, v, t) {
            v === void 0 && (v = u.defaultMaxAgeInSeconds);
            var a = d.default.getReferenceOrThrow().dateProvider;
            return {
              id: t !== void 0 ? t : u.id,
              refresh: function(i) {
                return u.refresh(i);
              },
              shouldRefresh: function(i, e) {
                if (v !== void 0 && v < a.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      a.getThresholdInSeconds()
                    )
                  );
                return u.getValueFromPayload(i, e) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                v !== void 0 && i[u.id].t < a.now() - v * 1e3;
              },
              validate: function(i, e) {
                return s(u, void 0, void 0, function() {
                  var n, r;
                  return R(this, function(c) {
                    return n = this.getValueFromPayload(i, e), n === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToInclude: p,
                          actualValue: n
                        }
                      }
                    ] : (r = (a.now() - this.getLastFetchedTime(i, e)) / 1e3, v !== void 0 && r > v ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: r,
                          maxAgeInSeconds: v
                        }
                      }
                    ] : n.includes(p) ? [2, { isValid: !0 }] : [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "wrong value",
                          expectedToInclude: p,
                          actualValue: n
                        }
                      }
                    ]);
                  });
                });
              }
            };
          },
          excludes: function(p, v, t) {
            v === void 0 && (v = u.defaultMaxAgeInSeconds);
            var a = d.default.getReferenceOrThrow().dateProvider;
            return {
              id: t !== void 0 ? t : u.id,
              refresh: function(i) {
                return u.refresh(i);
              },
              shouldRefresh: function(i, e) {
                if (v !== void 0 && v < a.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      a.getThresholdInSeconds()
                    )
                  );
                return u.getValueFromPayload(i, e) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                v !== void 0 && i[u.id].t < a.now() - v * 1e3;
              },
              validate: function(i, e) {
                return s(u, void 0, void 0, function() {
                  var n, r;
                  return R(this, function(c) {
                    return n = this.getValueFromPayload(i, e), n === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToNotInclude: p,
                          actualValue: n
                        }
                      }
                    ] : (r = (a.now() - this.getLastFetchedTime(i, e)) / 1e3, v !== void 0 && r > v ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: r,
                          maxAgeInSeconds: v
                        }
                      }
                    ] : n.includes(p) ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "wrong value",
                          expectedToNotInclude: p,
                          actualValue: n
                        }
                      }
                    ] : [2, { isValid: !0 }]);
                  });
                });
              }
            };
          },
          includesAll: function(p, v, t) {
            v === void 0 && (v = u.defaultMaxAgeInSeconds);
            var a = d.default.getReferenceOrThrow().dateProvider;
            return {
              id: t !== void 0 ? t : u.id,
              refresh: function(i) {
                return u.refresh(i);
              },
              shouldRefresh: function(i, e) {
                if (v !== void 0 && v < a.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      a.getThresholdInSeconds()
                    )
                  );
                return u.getValueFromPayload(i, e) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                v !== void 0 && i[u.id].t < a.now() - v * 1e3;
              },
              validate: function(i, e) {
                return s(u, void 0, void 0, function() {
                  var n, r, c, l;
                  return R(this, function(h) {
                    return n = this.getValueFromPayload(i, e), n === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToInclude: p,
                          actualValue: n
                        }
                      }
                    ] : (r = (a.now() - this.getLastFetchedTime(i, e)) / 1e3, v !== void 0 && r > v ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: r,
                          maxAgeInSeconds: v
                        }
                      }
                    ] : (c = new Set(n), l = p.every(function(m) {
                      return c.has(m);
                    }), [
                      2,
                      l ? { isValid: l } : {
                        isValid: l,
                        reason: {
                          message: "wrong value",
                          expectedToInclude: p,
                          actualValue: n
                        }
                      }
                    ]));
                  });
                });
              }
            };
          },
          includesAny: function(p, v, t) {
            v === void 0 && (v = u.defaultMaxAgeInSeconds);
            var a = d.default.getReferenceOrThrow().dateProvider;
            return {
              id: t !== void 0 ? t : u.id,
              refresh: function(i) {
                return u.refresh(i);
              },
              shouldRefresh: function(i, e) {
                if (v !== void 0 && v < a.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      a.getThresholdInSeconds()
                    )
                  );
                return u.getValueFromPayload(i, e) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                v !== void 0 && i[u.id].t < a.now() - v * 1e3;
              },
              validate: function(i, e) {
                return s(u, void 0, void 0, function() {
                  var n, r, c, l;
                  return R(this, function(h) {
                    return n = this.getValueFromPayload(i, e), n === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToInclude: p,
                          actualValue: n
                        }
                      }
                    ] : (r = (a.now() - this.getLastFetchedTime(i, e)) / 1e3, v !== void 0 && r > v ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: r,
                          maxAgeInSeconds: v
                        }
                      }
                    ] : (c = new Set(n), l = p.some(function(m) {
                      return c.has(m);
                    }), [
                      2,
                      l ? { isValid: l } : {
                        isValid: l,
                        reason: {
                          message: "wrong value",
                          expectedToIncludeAtLeastOneOf: p,
                          actualValue: n
                        }
                      }
                    ]));
                  });
                });
              }
            };
          },
          excludesAll: function(p, v, t) {
            v === void 0 && (v = u.defaultMaxAgeInSeconds);
            var a = d.default.getReferenceOrThrow().dateProvider;
            return {
              id: t !== void 0 ? t : u.id,
              refresh: function(i) {
                return u.refresh(i);
              },
              shouldRefresh: function(i, e) {
                if (v !== void 0 && v < a.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      a.getThresholdInSeconds()
                    )
                  );
                return u.getValueFromPayload(i, e) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                v !== void 0 && i[u.id].t < a.now() - v * 1e3;
              },
              validate: function(i, e) {
                return s(u, void 0, void 0, function() {
                  var n, r, c, l;
                  return R(this, function(h) {
                    return n = this.getValueFromPayload(i, e), n === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToNotInclude: p,
                          actualValue: n
                        }
                      }
                    ] : (r = (a.now() - this.getLastFetchedTime(i, e)) / 1e3, v !== void 0 && r > v ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: r,
                          maxAgeInSeconds: v
                        }
                      }
                    ] : (c = new Set(n), l = p.every(function(m) {
                      return !c.has(m);
                    }), [
                      2,
                      l ? { isValid: l } : {
                        isValid: l,
                        reason: {
                          message: "wrong value",
                          expectedToNotInclude: p,
                          actualValue: n
                        }
                      }
                    ]));
                  });
                });
              }
            };
          }
        }, this.id = f.id, this.refresh = f.refresh, this.defaultMaxAgeInSeconds = f.defaultMaxAgeInSeconds;
      }
      return g.prototype.getValueFromPayload = function(f, u) {
        return f[this.id] !== void 0 ? f[this.id].v : void 0;
      }, g.prototype.getLastFetchedTime = function(f, u) {
        return f[this.id] !== void 0 ? f[this.id].t : void 0;
      }, g;
    })()
  );
  return Ae.PrimitiveArrayClaim = o, Ae;
}
var Ee = {}, qn;
function Xr() {
  if (qn) return Ee;
  qn = 1;
  var s = Ee && Ee.__extends || /* @__PURE__ */ (function() {
    var g = function(f, u) {
      return g = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(p, v) {
        p.__proto__ = v;
      } || function(p, v) {
        for (var t in v) Object.prototype.hasOwnProperty.call(v, t) && (p[t] = v[t]);
      }, g(f, u);
    };
    return function(f, u) {
      if (typeof u != "function" && u !== null)
        throw new TypeError("Class extends value " + String(u) + " is not a constructor or null");
      g(f, u);
      function p() {
        this.constructor = f;
      }
      f.prototype = u === null ? Object.create(u) : (p.prototype = u.prototype, new p());
    };
  })(), R = Ee && Ee.__assign || function() {
    return R = Object.assign || function(g) {
      for (var f, u = 1, p = arguments.length; u < p; u++) {
        f = arguments[u];
        for (var v in f) Object.prototype.hasOwnProperty.call(f, v) && (g[v] = f[v]);
      }
      return g;
    }, R.apply(this, arguments);
  };
  Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.BooleanClaim = void 0;
  var d = mr(), o = (
    /** @class */
    (function(g) {
      s(f, g);
      function f(u) {
        var p = g.call(this, u) || this;
        return p.validators = R(R({}, p.validators), {
          isTrue: function(v) {
            return p.validators.hasValue(!0, v);
          },
          isFalse: function(v) {
            return p.validators.hasValue(!1, v);
          }
        }), p;
      }
      return f;
    })(d.PrimitiveClaim)
  );
  return Ee.BooleanClaim = o, Ee;
}
var Fn;
function zr() {
  return Fn || (Fn = 1, (function(s) {
    var R = Ne && Ne.__awaiter || function(h, m, y, w) {
      function I(b) {
        return b instanceof y ? b : new y(function(k) {
          k(b);
        });
      }
      return new (y || (y = Promise))(function(b, k) {
        function _(C) {
          try {
            P(w.next(C));
          } catch (D) {
            k(D);
          }
        }
        function T(C) {
          try {
            P(w.throw(C));
          } catch (D) {
            k(D);
          }
        }
        function P(C) {
          C.done ? b(C.value) : I(C.value).then(_, T);
        }
        P((w = w.apply(h, m || [])).next());
      });
    }, d = Ne && Ne.__generator || function(h, m) {
      var y = {
        label: 0,
        sent: function() {
          if (b[0] & 1) throw b[1];
          return b[1];
        },
        trys: [],
        ops: []
      }, w, I, b, k;
      return k = { next: _(0), throw: _(1), return: _(2) }, typeof Symbol == "function" && (k[Symbol.iterator] = function() {
        return this;
      }), k;
      function _(P) {
        return function(C) {
          return T([P, C]);
        };
      }
      function T(P) {
        if (w) throw new TypeError("Generator is already executing.");
        for (; y; )
          try {
            if (w = 1, I && (b = P[0] & 2 ? I.return : P[0] ? I.throw || ((b = I.return) && b.call(I), 0) : I.next) && !(b = b.call(I, P[1])).done)
              return b;
            switch (I = 0, b && (P = [P[0] & 2, b.value]), P[0]) {
              case 0:
              case 1:
                b = P;
                break;
              case 4:
                return y.label++, { value: P[1], done: !1 };
              case 5:
                y.label++, I = P[1], P = [0];
                continue;
              case 7:
                P = y.ops.pop(), y.trys.pop();
                continue;
              default:
                if (b = y.trys, !(b = b.length > 0 && b[b.length - 1]) && (P[0] === 6 || P[0] === 2)) {
                  y = 0;
                  continue;
                }
                if (P[0] === 3 && (!b || P[1] > b[0] && P[1] < b[3])) {
                  y.label = P[1];
                  break;
                }
                if (P[0] === 6 && y.label < b[1]) {
                  y.label = b[1], b = P;
                  break;
                }
                if (b && y.label < b[2]) {
                  y.label = b[2], y.ops.push(P);
                  break;
                }
                b[2] && y.ops.pop(), y.trys.pop();
                continue;
            }
            P = m.call(h, y);
          } catch (C) {
            P = [6, C], I = 0;
          } finally {
            w = b = 0;
          }
        if (P[0] & 5) throw P[1];
        return { value: P[0] ? P[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(s, "__esModule", { value: !0 }), s.BooleanClaim = s.PrimitiveArrayClaim = s.PrimitiveClaim = s.getInvalidClaimsFromResponse = s.getClaimValue = s.validateClaims = s.signOut = s.addAxiosInterceptors = s.doesSessionExist = s.attemptRefreshingSession = s.getAccessToken = s.getAccessTokenPayloadSecurely = s.getUserId = s.init = void 0;
    var o = lt(), g = Br(), f = wt(), u = Ut(), p = qt(), v = De(), t = Ft(), a = fr(), i = ct(), e = $e(), n = (
      /** @class */
      (function() {
        function h() {
        }
        h.init = function(y) {
          p.default.init(y.cookieHandler), v.default.init(y.windowHandler), e.default.init(y.dateProvider), t.default.init(
            y.lockFactory,
            v.default.getReferenceOrThrow().windowHandler.localStorage
          );
          var w = (0, u.validateAndNormaliseInputOrThrowError)(y);
          y.enableDebugLogs !== void 0 && y.enableDebugLogs && (0, i.enableLogging)();
          var I = new f.default(
            (0, g.default)({
              onHandleEvent: w.onHandleEvent,
              preAPIHook: w.preAPIHook,
              postAPIHook: w.postAPIHook,
              sessionExpiredStatusCode: w.sessionExpiredStatusCode
            })
          ).override(w.override.functions).build();
          o.default.init(w, I), h.axiosInterceptorQueue.forEach(function(b) {
            b();
          }), h.axiosInterceptorQueue = [];
        }, h.getUserId = function(y) {
          return o.default.recipeImpl.getUserId({
            userContext: (0, u.getNormalisedUserContext)(y === void 0 ? void 0 : y.userContext)
          });
        }, h.getAccessTokenPayloadSecurely = function(y) {
          return R(this, void 0, void 0, function() {
            return d(this, function(w) {
              return [
                2,
                o.default.recipeImpl.getAccessTokenPayloadSecurely({
                  userContext: (0, u.getNormalisedUserContext)(
                    y === void 0 ? void 0 : y.userContext
                  )
                })
              ];
            });
          });
        };
        var m;
        return m = h, h.axiosInterceptorQueue = [], h.attemptRefreshingSession = function() {
          return R(void 0, void 0, void 0, function() {
            return d(m, function(y) {
              return [2, o.default.attemptRefreshingSession()];
            });
          });
        }, h.doesSessionExist = function(y) {
          return o.default.recipeImpl.doesSessionExist({
            userContext: (0, u.getNormalisedUserContext)(y === void 0 ? void 0 : y.userContext)
          });
        }, h.addAxiosInterceptors = function(y, w) {
          o.default.initCalled ? o.default.recipeImpl.addAxiosInterceptors({
            axiosInstance: y,
            userContext: (0, u.getNormalisedUserContext)(w)
          }) : h.axiosInterceptorQueue.push(function() {
            o.default.recipeImpl.addAxiosInterceptors({
              axiosInstance: y,
              userContext: (0, u.getNormalisedUserContext)(w)
            });
          });
        }, h.signOut = function(y) {
          return o.default.recipeImpl.signOut({
            userContext: (0, u.getNormalisedUserContext)(y === void 0 ? void 0 : y.userContext)
          });
        }, h.getInvalidClaimsFromResponse = function(y) {
          return R(this, void 0, void 0, function() {
            return d(this, function(w) {
              return [
                2,
                o.default.recipeImpl.getInvalidClaimsFromResponse({
                  response: y.response,
                  userContext: (0, u.getNormalisedUserContext)(y.userContext)
                })
              ];
            });
          });
        }, h.getClaimValue = function(y) {
          return R(this, void 0, void 0, function() {
            var w, I;
            return d(this, function(b) {
              switch (b.label) {
                case 0:
                  return w = (0, u.getNormalisedUserContext)(
                    y === void 0 ? void 0 : y.userContext
                  ), [
                    4,
                    h.getAccessTokenPayloadSecurely({ userContext: w })
                  ];
                case 1:
                  return I = b.sent(), [2, y.claim.getValueFromPayload(I, w)];
              }
            });
          });
        }, h.validateClaims = function(y, w) {
          var I = (0, u.getNormalisedUserContext)(w), b = a.SessionClaimValidatorStore.getClaimValidatorsAddedByOtherRecipes(), k = o.default.recipeImpl.getGlobalClaimValidators({
            claimValidatorsAddedByOtherRecipes: b,
            userContext: I
          }), _ = y !== void 0 ? y(k, I) : k;
          return _.length === 0 ? [] : o.default.recipeImpl.validateClaims({
            claimValidators: _,
            userContext: (0, u.getNormalisedUserContext)(w)
          });
        }, h.getAccessToken = function(y) {
          return R(void 0, void 0, void 0, function() {
            return d(m, function(w) {
              switch (w.label) {
                case 0:
                  return [
                    4,
                    o.default.recipeImpl.doesSessionExist({
                      userContext: (0, u.getNormalisedUserContext)(
                        y === void 0 ? void 0 : y.userContext
                      )
                    })
                  ];
                case 1:
                  return w.sent() ? [2, (0, o.getTokenForHeaderAuth)("access")] : [2, void 0];
              }
            });
          });
        }, h;
      })()
    );
    s.default = n, s.init = n.init, s.getUserId = n.getUserId, s.getAccessTokenPayloadSecurely = n.getAccessTokenPayloadSecurely, s.getAccessToken = n.getAccessToken, s.attemptRefreshingSession = n.attemptRefreshingSession, s.doesSessionExist = n.doesSessionExist, s.addAxiosInterceptors = n.addAxiosInterceptors, s.signOut = n.signOut, s.validateClaims = n.validateClaims, s.getClaimValue = n.getClaimValue, s.getInvalidClaimsFromResponse = n.getInvalidClaimsFromResponse;
    var r = mr();
    Object.defineProperty(s, "PrimitiveClaim", {
      enumerable: !0,
      get: function() {
        return r.PrimitiveClaim;
      }
    });
    var c = Gr();
    Object.defineProperty(s, "PrimitiveArrayClaim", {
      enumerable: !0,
      get: function() {
        return c.PrimitiveArrayClaim;
      }
    });
    var l = Xr();
    Object.defineProperty(s, "BooleanClaim", {
      enumerable: !0,
      get: function() {
        return l.BooleanClaim;
      }
    });
  })(Ne)), Ne;
}
var Nn;
function pr() {
  return Nn || (Nn = 1, (function(s) {
    function R(d) {
      for (var o in d) s.hasOwnProperty(o) || (s[o] = d[o]);
    }
    s.__esModule = !0, R(zr());
  })(At)), At;
}
var st = {}, jn;
function Qr() {
  return jn || (jn = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.EMAILVERIFICATION_CLAIM_ID = void 0, st.EMAILVERIFICATION_CLAIM_ID = "st-ev"), st;
}
var Vn;
function yr() {
  if (Vn) return ne;
  Vn = 1;
  var s = ne && ne.__extends || /* @__PURE__ */ (function() {
    var i = function(e, n) {
      return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, c) {
        r.__proto__ = c;
      } || function(r, c) {
        for (var l in c) Object.prototype.hasOwnProperty.call(c, l) && (r[l] = c[l]);
      }, i(e, n);
    };
    return function(e, n) {
      if (typeof n != "function" && n !== null)
        throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
      i(e, n);
      function r() {
        this.constructor = e;
      }
      e.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  })(), R = ne && ne.__assign || function() {
    return R = Object.assign || function(i) {
      for (var e, n = 1, r = arguments.length; n < r; n++) {
        e = arguments[n];
        for (var c in e) Object.prototype.hasOwnProperty.call(e, c) && (i[c] = e[c]);
      }
      return i;
    }, R.apply(this, arguments);
  }, d = ne && ne.__awaiter || function(i, e, n, r) {
    function c(l) {
      return l instanceof n ? l : new n(function(h) {
        h(l);
      });
    }
    return new (n || (n = Promise))(function(l, h) {
      function m(I) {
        try {
          w(r.next(I));
        } catch (b) {
          h(b);
        }
      }
      function y(I) {
        try {
          w(r.throw(I));
        } catch (b) {
          h(b);
        }
      }
      function w(I) {
        I.done ? l(I.value) : c(I.value).then(m, y);
      }
      w((r = r.apply(i, e || [])).next());
    });
  }, o = ne && ne.__generator || function(i, e) {
    var n = {
      label: 0,
      sent: function() {
        if (l[0] & 1) throw l[1];
        return l[1];
      },
      trys: [],
      ops: []
    }, r, c, l, h;
    return h = { next: m(0), throw: m(1), return: m(2) }, typeof Symbol == "function" && (h[Symbol.iterator] = function() {
      return this;
    }), h;
    function m(w) {
      return function(I) {
        return y([w, I]);
      };
    }
    function y(w) {
      if (r) throw new TypeError("Generator is already executing.");
      for (; n; )
        try {
          if (r = 1, c && (l = w[0] & 2 ? c.return : w[0] ? c.throw || ((l = c.return) && l.call(c), 0) : c.next) && !(l = l.call(c, w[1])).done)
            return l;
          switch (c = 0, l && (w = [w[0] & 2, l.value]), w[0]) {
            case 0:
            case 1:
              l = w;
              break;
            case 4:
              return n.label++, { value: w[1], done: !1 };
            case 5:
              n.label++, c = w[1], w = [0];
              continue;
            case 7:
              w = n.ops.pop(), n.trys.pop();
              continue;
            default:
              if (l = n.trys, !(l = l.length > 0 && l[l.length - 1]) && (w[0] === 6 || w[0] === 2)) {
                n = 0;
                continue;
              }
              if (w[0] === 3 && (!l || w[1] > l[0] && w[1] < l[3])) {
                n.label = w[1];
                break;
              }
              if (w[0] === 6 && n.label < l[1]) {
                n.label = l[1], l = w;
                break;
              }
              if (l && n.label < l[2]) {
                n.label = l[2], n.ops.push(w);
                break;
              }
              l[2] && n.ops.pop(), n.trys.pop();
              continue;
          }
          w = e.call(i, n);
        } catch (I) {
          w = [6, I], c = 0;
        } finally {
          r = l = 0;
        }
      if (w[0] & 5) throw w[1];
      return { value: w[0] ? w[1] : void 0, done: !0 };
    }
  }, g = ne && ne.__spreadArray || function(i, e, n) {
    if (n || arguments.length === 2)
      for (var r = 0, c = e.length, l; r < c; r++)
        (l || !(r in e)) && (l || (l = Array.prototype.slice.call(e, 0, r)), l[r] = e[r]);
    return i.concat(l || Array.prototype.slice.call(e));
  };
  Object.defineProperty(ne, "__esModule", { value: !0 }), ne.Recipe = void 0;
  var f = vr(), u = pr(), p = le(), v = Qr(), t = [v.EMAILVERIFICATION_CLAIM_ID], a = (
    /** @class */
    (function(i) {
      s(e, i);
      function e(n) {
        var r = i.call(this, n) || this;
        return r.getUserId = function(c) {
          return u.default.getUserId({
            userContext: c.userContext
          });
        }, r.getAccessToken = function(c) {
          return d(r, void 0, void 0, function() {
            return o(this, function(l) {
              return [
                2,
                u.default.getAccessToken({
                  userContext: c.userContext
                })
              ];
            });
          });
        }, r.getAccessTokenPayloadSecurely = function(c) {
          return d(r, void 0, void 0, function() {
            return o(this, function(l) {
              return [
                2,
                u.default.getAccessTokenPayloadSecurely({
                  userContext: c.userContext
                })
              ];
            });
          });
        }, r.doesSessionExist = function(c) {
          return u.default.doesSessionExist({
            userContext: c.userContext
          });
        }, r.signOut = function(c) {
          return u.default.signOut({
            userContext: c.userContext
          });
        }, r.attemptRefreshingSession = function() {
          return d(r, void 0, void 0, function() {
            return o(this, function(c) {
              return [2, u.default.attemptRefreshingSession()];
            });
          });
        }, r.validateClaims = function(c) {
          return u.default.validateClaims(c.overrideGlobalClaimValidators, c.userContext);
        }, u.default.init(
          R(R({}, n), {
            override: {
              functions: function(c, l) {
                var h;
                return l.override(function(m) {
                  return R(R({}, m), {
                    getGlobalClaimValidators: function(y) {
                      var w = m.getGlobalClaimValidators(y);
                      return g(
                        g(
                          [],
                          w.filter(function(I) {
                            return t.includes(I.id);
                          }),
                          !0
                        ),
                        w.filter(function(I) {
                          return !t.includes(I.id);
                        }),
                        !0
                      );
                    }
                  });
                }), !((h = n.override) === null || h === void 0) && h.functions && l.override(n.override.functions), c;
              }
            },
            preAPIHook: function(c) {
              return d(r, void 0, void 0, function() {
                var l, h;
                return o(this, function(m) {
                  return l = new Headers(c.requestInit.headers), l.set("rid", n.recipeId), h = R(R({}, c), {
                    requestInit: R(R({}, c.requestInit), { headers: l })
                  }), n.preAPIHook === void 0 ? [2, h] : [2, n.preAPIHook(c)];
                });
              });
            },
            apiDomain: n.appInfo.apiDomain.getAsStringDangerous(),
            apiBasePath: n.appInfo.apiBasePath.getAsStringDangerous()
          })
        ), r;
      }
      return e.init = function(n) {
        return function(r, c, l, h) {
          return e.instance = new e(
            R(
              R(
                {},
                (0, p.applyPlugins)(
                  e.RECIPE_ID,
                  n,
                  h ?? []
                )
              ),
              { appInfo: r, recipeId: e.RECIPE_ID, enableDebugLogs: l }
            )
          ), e.instance;
        };
      }, e.prototype.getClaimValue = function(n) {
        return u.default.getClaimValue(n);
      }, e.prototype.getInvalidClaimsFromResponse = function(n) {
        return u.default.getInvalidClaimsFromResponse(n);
      }, e.addAxiosInterceptors = function(n, r) {
        return u.default.addAxiosInterceptors(n, r);
      }, e.getInstanceOrThrow = function() {
        if (e.instance === void 0) {
          var n = "No instance of Session found. Ensure that the 'Session.init' method is called within the 'SuperTokens.init' recipeList.";
          throw n = (0, p.checkForSSRErrorAndAppendIfNeeded)(n), Error(n);
        }
        return e.instance;
      }, e.reset = function() {
        (0, p.isTest)() && (e.instance = void 0);
      }, e.RECIPE_ID = "session", e;
    })(f.default)
  );
  return ne.Recipe = a, ne.default = a, ne;
}
var Wn;
function Vt() {
  if (Wn) return ve;
  Wn = 1;
  var s = ve && ve.__extends || /* @__PURE__ */ (function() {
    var u = function(p, v) {
      return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, a) {
        t.__proto__ = a;
      } || function(t, a) {
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (t[i] = a[i]);
      }, u(p, v);
    };
    return function(p, v) {
      if (typeof v != "function" && v !== null)
        throw new TypeError("Class extends value " + String(v) + " is not a constructor or null");
      u(p, v);
      function t() {
        this.constructor = p;
      }
      p.prototype = v === null ? Object.create(v) : (t.prototype = v.prototype, new t());
    };
  })(), R = ve && ve.__awaiter || function(u, p, v, t) {
    function a(i) {
      return i instanceof v ? i : new v(function(e) {
        e(i);
      });
    }
    return new (v || (v = Promise))(function(i, e) {
      function n(l) {
        try {
          c(t.next(l));
        } catch (h) {
          e(h);
        }
      }
      function r(l) {
        try {
          c(t.throw(l));
        } catch (h) {
          e(h);
        }
      }
      function c(l) {
        l.done ? i(l.value) : a(l.value).then(n, r);
      }
      c((t = t.apply(u, p || [])).next());
    });
  }, d = ve && ve.__generator || function(u, p) {
    var v = {
      label: 0,
      sent: function() {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: []
    }, t, a, i, e;
    return e = { next: n(0), throw: n(1), return: n(2) }, typeof Symbol == "function" && (e[Symbol.iterator] = function() {
      return this;
    }), e;
    function n(c) {
      return function(l) {
        return r([c, l]);
      };
    }
    function r(c) {
      if (t) throw new TypeError("Generator is already executing.");
      for (; v; )
        try {
          if (t = 1, a && (i = c[0] & 2 ? a.return : c[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, c[1])).done)
            return i;
          switch (a = 0, i && (c = [c[0] & 2, i.value]), c[0]) {
            case 0:
            case 1:
              i = c;
              break;
            case 4:
              return v.label++, { value: c[1], done: !1 };
            case 5:
              v.label++, a = c[1], c = [0];
              continue;
            case 7:
              c = v.ops.pop(), v.trys.pop();
              continue;
            default:
              if (i = v.trys, !(i = i.length > 0 && i[i.length - 1]) && (c[0] === 6 || c[0] === 2)) {
                v = 0;
                continue;
              }
              if (c[0] === 3 && (!i || c[1] > i[0] && c[1] < i[3])) {
                v.label = c[1];
                break;
              }
              if (c[0] === 6 && v.label < i[1]) {
                v.label = i[1], i = c;
                break;
              }
              if (i && v.label < i[2]) {
                v.label = i[2], v.ops.push(c);
                break;
              }
              i[2] && v.ops.pop(), v.trys.pop();
              continue;
          }
          c = p.call(u, v);
        } catch (l) {
          c = [6, l], a = 0;
        } finally {
          t = i = 0;
        }
      if (c[0] & 5) throw c[1];
      return { value: c[0] ? c[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(ve, "__esModule", { value: !0 });
  var o = vr(), g = yr(), f = (
    /** @class */
    (function(u) {
      s(p, u);
      function p(v) {
        var t = u.call(this, v) || this;
        return t.signOut = function(a) {
          return R(t, void 0, void 0, function() {
            return d(this, function(i) {
              switch (i.label) {
                case 0:
                  return [
                    4,
                    g.default.getInstanceOrThrow().signOut({
                      userContext: a.userContext
                    })
                  ];
                case 1:
                  return [2, i.sent()];
              }
            });
          });
        }, t;
      }
      return p;
    })(o.default)
  );
  return ve.default = f, ve;
}
var Bn;
function It() {
  if (Bn) return fe;
  Bn = 1;
  var s = fe && fe.__extends || /* @__PURE__ */ (function() {
    var v = function(t, a) {
      return v = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, e) {
        i.__proto__ = e;
      } || function(i, e) {
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (i[n] = e[n]);
      }, v(t, a);
    };
    return function(t, a) {
      if (typeof a != "function" && a !== null)
        throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
      v(t, a);
      function i() {
        this.constructor = t;
      }
      t.prototype = a === null ? Object.create(a) : (i.prototype = a.prototype, new i());
    };
  })(), R = fe && fe.__assign || function() {
    return R = Object.assign || function(v) {
      for (var t, a = 1, i = arguments.length; a < i; a++) {
        t = arguments[a];
        for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (v[e] = t[e]);
      }
      return v;
    }, R.apply(this, arguments);
  };
  Object.defineProperty(fe, "__esModule", { value: !0 }), fe.Recipe = void 0;
  var d = Hr(), o = wt(), g = Nr(), f = le(), u = Vt(), p = (
    /** @class */
    (function(v) {
      s(t, v);
      function t(a) {
        var i = v.call(this, (0, d.normaliseUserInput)(a)) || this, e = new o.default(
          (0, g.default)({
            recipeId: i.config.recipeId,
            appInfo: i.config.appInfo,
            clientType: i.config.clientType,
            preAPIHook: i.config.preAPIHook,
            postAPIHook: i.config.postAPIHook
          })
        );
        return i.recipeImplementation = e.override(i.config.override.functions).build(), i;
      }
      return t.init = function(a) {
        return function(i, e, n, r) {
          return t.instance = new t(
            R(
              R(
                {},
                (0, f.applyPlugins)(
                  t.RECIPE_ID,
                  a,
                  r ?? []
                )
              ),
              { recipeId: t.RECIPE_ID, appInfo: i, clientType: e }
            )
          ), t.instance;
        };
      }, t.getInstanceOrThrow = function() {
        if (t.instance === void 0) {
          var a = "No instance of Multitenancy found. Ensure that 'SuperTokens.init' method has been called.";
          throw a = (0, f.checkForSSRErrorAndAppendIfNeeded)(a), Error(a);
        }
        return t.instance;
      }, t.reset = function() {
        (0, f.isTest)() && (t.instance = void 0);
      }, t.RECIPE_ID = "multitenancy", t;
    })(u.default)
  );
  return fe.Recipe = p, fe.default = p, fe;
}
var Et = {}, Ot = {}, Gn;
function Jr() {
  return Gn || (Gn = 1, (function(s) {
    function R(d) {
      for (var o in d) s.hasOwnProperty(o) || (s[o] = d[o]);
    }
    s.__esModule = !0, R($e());
  })(Ot)), Ot;
}
var Xn;
function Kr() {
  return Xn || (Xn = 1, (function(s) {
    Object.defineProperty(s, "__esModule", { value: !0 }), s.DateProviderReference = void 0;
    var R = Jr();
    Object.defineProperty(s, "DateProviderReference", {
      enumerable: !0,
      get: function() {
        return R.DateProviderReference;
      }
    });
  })(Et)), Et;
}
var at = {}, zn;
function Yr() {
  if (zn) return at;
  zn = 1, Object.defineProperty(at, "__esModule", { value: !0 }), at.isVersionCompatible = void 0;
  var s = function(g) {
    var f = g.match(/^(\d+)\.(\d+)\.(\d+)(?:-(.+))?$/);
    if (!f)
      throw new Error("Invalid version format: ".concat(g));
    return {
      major: parseInt(f[1]),
      minor: parseInt(f[2]),
      patch: parseInt(f[3]),
      prerelease: f[4]
    };
  }, R = function(g, f) {
    return g.major !== f.major ? g.major - f.major : g.minor !== f.minor ? g.minor - f.minor : g.patch !== f.patch ? g.patch - f.patch : g.prerelease && !f.prerelease ? -1 : !g.prerelease && f.prerelease ? 1 : g.prerelease && f.prerelease ? g.prerelease.localeCompare(f.prerelease) : 0;
  }, d = function(g, f) {
    var u = s(g);
    if (f === g) return !0;
    var p = f.match(/^([<>=~^]+)\s*(.+)$/);
    if (p) {
      var v = p[1], t = p[2], a = s(t), i = R(u, a);
      switch (v) {
        case ">=":
          return i >= 0;
        case ">":
          return i > 0;
        case "<=":
          return i <= 0;
        case "<":
          return i < 0;
        case "=":
        case "==":
          return i === 0;
        case "~":
          return u.major === a.major && u.minor === a.minor && u.patch >= a.patch;
        case "^":
          return a.major === 0 ? u.major === 0 && u.minor === a.minor && u.patch >= a.patch : u.major === a.major && u.minor >= a.minor;
        default:
          return !1;
      }
    }
    var e = f.match(/^(\d+)\.(\d+)\.x$/);
    if (e)
      return u.major === parseInt(e[1], 10) && u.minor === parseInt(e[2], 10);
    var n = f.match(/^(\d+)\.x$/);
    if (n)
      return u.major === parseInt(n[1], 10);
    var r = s(f);
    return R(u, r) === 0;
  }, o = function(g, f) {
    for (var u = Array.isArray(f) ? f : [f], p = 0, v = u; p < v.length; p++) {
      var t = v[p];
      if (d(g, t))
        return !0;
    }
    return !1;
  };
  return at.isVersionCompatible = o, at;
}
var Qn;
function Zr() {
  if (Qn) return Oe;
  Qn = 1;
  var s = Oe && Oe.__assign || function() {
    return s = Object.assign || function(i) {
      for (var e, n = 1, r = arguments.length; n < r; n++) {
        e = arguments[n];
        for (var c in e) Object.prototype.hasOwnProperty.call(e, c) && (i[c] = e[c]);
      }
      return i;
    }, s.apply(this, arguments);
  }, R = Oe && Oe.__rest || function(i, e) {
    var n = {};
    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && e.indexOf(r) < 0 && (n[r] = i[r]);
    if (i != null && typeof Object.getOwnPropertySymbols == "function")
      for (var c = 0, r = Object.getOwnPropertySymbols(i); c < r.length; c++)
        e.indexOf(r[c]) < 0 && Object.prototype.propertyIsEnumerable.call(i, r[c]) && (n[r[c]] = i[r[c]]);
    return n;
  };
  Object.defineProperty(Oe, "__esModule", { value: !0 });
  var d = le(), o = xr(), g = yt(), f = Mr(), u = It(), p = Kr(), v = hr(), t = Yr(), a = (
    /** @class */
    (function() {
      function i(e) {
        var n = this, r;
        if (this.recipeList = [], this.pluginList = [], this.appInfo = (0, d.normaliseInputAppInfoOrThrowError)(e.appInfo), e.recipeList === void 0 || e.recipeList.length === 0)
          throw new Error(
            "Please provide at least one recipe to the supertokens.init function call. See https://supertokens.io/docs/emailpassword/quick-setup/frontend"
          );
        var c = [];
        if (!((r = e.experimental) === null || r === void 0) && r.plugins)
          for (var l = 0, h = e.experimental.plugins; l < h.length; l++) {
            var m = h[l];
            if (m.compatibleWebJSSDKVersions) {
              var y = (0, t.isVersionCompatible)(
                v.package_version,
                m.compatibleWebJSSDKVersions
              );
              if (!y)
                throw new Error(
                  "Incompatible SDK version for plugin ".concat(m.id, '. Version "').concat(v.package_version, '" not found in compatible versions: ').concat(JSON.stringify(m.compatibleWebJSSDKVersions))
                );
            }
            if (m.dependencies) {
              var w = m.dependencies(
                (0, d.getPublicConfig)(s(s({}, e), { appInfo: this.appInfo })),
                c.map(d.getPublicPlugin),
                v.package_version
              );
              if (w.status === "ERROR")
                throw new Error(w.message);
              w.pluginsToAdd && c.push.apply(c, w.pluginsToAdd);
            }
            c.push(m);
          }
        var I = c.filter(function(D, O) {
          return c.some(function(W, Q) {
            return W.id === D.id && Q !== O;
          });
        });
        if (I.length > 0)
          throw new Error(
            "Duplicate plugin IDs: ".concat(
              I.map(function(D) {
                return D.id;
              }).join(", ")
            )
          );
        this.pluginList = c.map(d.getPublicPlugin);
        for (var b = function(D) {
          var O = c[D];
          if (O.config) {
            var W = O.config(
              (0, d.getPublicConfig)(s(s({}, e), { appInfo: k.appInfo }))
            ) || {};
            W.appInfo;
            var Q = R(W, ["appInfo"]);
            e = s(s({}, e), Q);
          }
          var te = c[D].init;
          te && f.PostSuperTokensInitCallbacks.addPostInitCallback(function() {
            te(
              (0, d.getPublicConfig)(s(s({}, e), { appInfo: n.appInfo })),
              n.pluginList,
              v.package_version
            ), n.pluginList[D].initialized = !0;
          });
        }, k = this, _ = 0; _ < this.pluginList.length; _ += 1)
          b(_);
        var T = c.filter(function(D) {
          return D.overrideMap !== void 0;
        }).map(function(D) {
          return D.overrideMap;
        }), P = !1;
        e.enableDebugLogs !== void 0 && (P = e.enableDebugLogs);
        var C = !1;
        this.recipeList = e.recipeList.map(function(D) {
          var O = D(n.appInfo, e.clientType, P, T);
          return O.config.recipeId === u.Recipe.RECIPE_ID && (C = !0), O;
        }), C || this.recipeList.push(
          u.Recipe.init()(this.appInfo, e.clientType, P, T)
        );
      }
      return i.init = function(e) {
        if (o.CookieHandlerReference.init(e.cookieHandler), g.WindowHandlerReference.init(e.windowHandler), p.DateProviderReference.init(e.dateProvider), i.instance !== void 0) {
          console.warn("SuperTokens was already initialized");
          return;
        }
        i.instance = new i(e), f.PostSuperTokensInitCallbacks.runPostInitCallbacks();
      }, i.getInstanceOrThrow = function() {
        if (i.instance === void 0) {
          var e = "SuperTokens must be initialized before calling this method.";
          throw e = (0, d.checkForSSRErrorAndAppendIfNeeded)(e), new Error(e);
        }
        return i.instance;
      }, i.reset = function() {
        if (!(0, d.isTest)()) {
          console.warn("Calling reset() is only supported during testing");
          return;
        }
        u.Recipe.reset(), i.instance = void 0;
      }, i;
    })()
  );
  return Oe.default = a, Oe;
}
var Jn;
function $r() {
  if (Jn) return Ge;
  Jn = 1, Object.defineProperty(Ge, "__esModule", { value: !0 }), Ge.init = void 0;
  var s = Zr(), R = (
    /** @class */
    (function() {
      function d() {
      }
      return d.init = function(o) {
        s.default.init(o);
      }, d;
    })()
  );
  return Ge.default = R, Ge.init = R.init, Ge;
}
var Kn;
function ei() {
  return Kn || (Kn = 1, (function(s) {
    function R(d) {
      for (var o in d) s.hasOwnProperty(o) || (s[o] = d[o]);
    }
    s.__esModule = !0, R($r());
  })(Rt)), Rt;
}
var ti = ei();
const yi = /* @__PURE__ */ pt(ti);
dr();
var Dt = {}, B = {}, pe = {}, je = {}, Yn;
function ni() {
  if (Yn) return je;
  Yn = 1;
  var s = je && je.__assign || function() {
    return s = Object.assign || function(o) {
      for (var g, f = 1, u = arguments.length; f < u; f++) {
        g = arguments[f];
        for (var p in g) Object.prototype.hasOwnProperty.call(g, p) && (o[p] = g[p]);
      }
      return o;
    }, s.apply(this, arguments);
  };
  Object.defineProperty(je, "__esModule", { value: !0 }), je.normaliseUserInput = void 0;
  var R = Nt();
  function d(o) {
    var g = s(
      {
        functions: function(f) {
          return f;
        }
      },
      o.override
    );
    return s(s({}, (0, R.normaliseAuthRecipe)(o)), { override: g });
  }
  return je.normaliseUserInput = d, je;
}
var se = {}, ut = {}, Zn;
function ri() {
  return Zn || (Zn = 1, Object.defineProperty(ut, "__esModule", { value: !0 }), ut.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY = void 0, ut.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY = "supertokens-passwordless-loginAttemptInfo"), ut;
}
var $n;
function ii() {
  if ($n) return se;
  $n = 1;
  var s = se && se.__assign || function() {
    return s = Object.assign || function(t) {
      for (var a, i = 1, e = arguments.length; i < e; i++) {
        a = arguments[i];
        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
      }
      return t;
    }, s.apply(this, arguments);
  }, R = se && se.__awaiter || function(t, a, i, e) {
    function n(r) {
      return r instanceof i ? r : new i(function(c) {
        c(r);
      });
    }
    return new (i || (i = Promise))(function(r, c) {
      function l(y) {
        try {
          m(e.next(y));
        } catch (w) {
          c(w);
        }
      }
      function h(y) {
        try {
          m(e.throw(y));
        } catch (w) {
          c(w);
        }
      }
      function m(y) {
        y.done ? r(y.value) : n(y.value).then(l, h);
      }
      m((e = e.apply(t, a || [])).next());
    });
  }, d = se && se.__generator || function(t, a) {
    var i = {
      label: 0,
      sent: function() {
        if (r[0] & 1) throw r[1];
        return r[1];
      },
      trys: [],
      ops: []
    }, e, n, r, c;
    return c = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (c[Symbol.iterator] = function() {
      return this;
    }), c;
    function l(m) {
      return function(y) {
        return h([m, y]);
      };
    }
    function h(m) {
      if (e) throw new TypeError("Generator is already executing.");
      for (; i; )
        try {
          if (e = 1, n && (r = m[0] & 2 ? n.return : m[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, m[1])).done)
            return r;
          switch (n = 0, r && (m = [m[0] & 2, r.value]), m[0]) {
            case 0:
            case 1:
              r = m;
              break;
            case 4:
              return i.label++, { value: m[1], done: !1 };
            case 5:
              i.label++, n = m[1], m = [0];
              continue;
            case 7:
              m = i.ops.pop(), i.trys.pop();
              continue;
            default:
              if (r = i.trys, !(r = r.length > 0 && r[r.length - 1]) && (m[0] === 6 || m[0] === 2)) {
                i = 0;
                continue;
              }
              if (m[0] === 3 && (!r || m[1] > r[0] && m[1] < r[3])) {
                i.label = m[1];
                break;
              }
              if (m[0] === 6 && i.label < r[1]) {
                i.label = r[1], r = m;
                break;
              }
              if (r && i.label < r[2]) {
                i.label = r[2], i.ops.push(m);
                break;
              }
              r[2] && i.ops.pop(), i.trys.pop();
              continue;
          }
          m = a.call(t, i);
        } catch (y) {
          m = [6, y], n = 0;
        } finally {
          e = r = 0;
        }
      if (m[0] & 5) throw m[1];
      return { value: m[0] ? m[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(se, "__esModule", { value: !0 }), se.getRecipeImplementation = void 0;
  var o = yt(), g = jt(), f = le(), u = It(), p = ri();
  function v(t) {
    var a = new g.default(t.recipeId, t.appInfo);
    return {
      createCode: function(i) {
        return R(this, void 0, void 0, function() {
          var e, n, r, c, l, h, m, y;
          return d(this, function(w) {
            switch (w.label) {
              case 0:
                return "email" in i && (e = {
                  email: i.email,
                  shouldTryLinkingWithSessionUser: i.shouldTryLinkingWithSessionUser
                }), "phoneNumber" in i && (e = {
                  phoneNumber: i.phoneNumber,
                  shouldTryLinkingWithSessionUser: i.shouldTryLinkingWithSessionUser
                }), h = (l = a).post, m = {
                  path: "/<tenantId>/signinup/code"
                }, y = {}, [
                  4,
                  u.default.getInstanceOrThrow().recipeImplementation.getTenantId({
                    userContext: i.userContext
                  })
                ];
              case 1:
                return [
                  4,
                  h.apply(l, [
                    (m.pathParams = (y.tenantId = w.sent() || "public", y), m),
                    { body: e },
                    g.default.preparePreAPIHook({
                      recipePreAPIHook: t.preAPIHook,
                      action: "PASSWORDLESS_CREATE_CODE",
                      userContext: i.userContext,
                      options: i.options
                    }),
                    g.default.preparePostAPIHook({
                      recipePostAPIHook: t.postAPIHook,
                      action: "PASSWORDLESS_CREATE_CODE",
                      userContext: i.userContext
                    })
                  ])
                ];
              case 2:
                return n = w.sent(), r = n.jsonBody, c = n.fetchResponse, [2, s(s({}, r), { fetchResponse: c })];
            }
          });
        });
      },
      resendCode: function(i) {
        return R(this, void 0, void 0, function() {
          var e, n, r, c;
          return d(this, function(l) {
            switch (l.label) {
              case 0:
                return e = {
                  deviceId: i.deviceId,
                  preAuthSessionId: i.preAuthSessionId,
                  shouldTryLinkingWithSessionUser: i.shouldTryLinkingWithSessionUser
                }, [
                  4,
                  a.post(
                    {
                      path: "/<tenantId>/signinup/code/resend",
                      pathParams: {
                        tenantId: i.tenantId || "public"
                      }
                    },
                    { body: e },
                    g.default.preparePreAPIHook({
                      recipePreAPIHook: t.preAPIHook,
                      action: "PASSWORDLESS_RESEND_CODE",
                      userContext: i.userContext,
                      options: i.options
                    }),
                    g.default.preparePostAPIHook({
                      recipePostAPIHook: t.postAPIHook,
                      action: "PASSWORDLESS_RESEND_CODE",
                      userContext: i.userContext
                    })
                  )
                ];
              case 1:
                return n = l.sent(), r = n.jsonBody, c = n.fetchResponse, [
                  2,
                  {
                    status: r.status,
                    fetchResponse: c
                  }
                ];
            }
          });
        });
      },
      consumeCode: function(i) {
        return R(this, void 0, void 0, function() {
          var e, n, r, c;
          return d(this, function(l) {
            switch (l.label) {
              case 0:
                return "userInputCode" in i ? e = {
                  userInputCode: i.userInputCode,
                  deviceId: i.deviceId,
                  preAuthSessionId: i.preAuthSessionId,
                  shouldTryLinkingWithSessionUser: i.shouldTryLinkingWithSessionUser
                } : e = {
                  linkCode: i.linkCode,
                  preAuthSessionId: i.preAuthSessionId,
                  shouldTryLinkingWithSessionUser: i.shouldTryLinkingWithSessionUser
                }, [
                  4,
                  a.post(
                    {
                      path: "/<tenantId>/signinup/code/consume",
                      pathParams: {
                        tenantId: i.tenantId || "public"
                      }
                    },
                    { body: e },
                    g.default.preparePreAPIHook({
                      recipePreAPIHook: t.preAPIHook,
                      action: "PASSWORDLESS_CONSUME_CODE",
                      userContext: i.userContext,
                      options: i.options
                    }),
                    g.default.preparePostAPIHook({
                      recipePostAPIHook: t.postAPIHook,
                      action: "PASSWORDLESS_CONSUME_CODE",
                      userContext: i.userContext
                    })
                  )
                ];
              case 1:
                return n = l.sent(), r = n.jsonBody, c = n.fetchResponse, r.status !== "OK" ? [
                  2,
                  s(s({}, r), { fetchResponse: c })
                ] : [
                  2,
                  s(
                    s(
                      { status: "OK" },
                      (0, f.normaliseUserResponse)("passwordless", r)
                    ),
                    { fetchResponse: c }
                  )
                ];
            }
          });
        });
      },
      getTenantIdFromURL: function() {
        return (0, f.getQueryParams)("tenantId");
      },
      getLinkCodeFromURL: function() {
        return (0, f.getHashFromLocation)();
      },
      getPreAuthSessionIdFromURL: function() {
        var i = (0, f.getQueryParams)("preAuthSessionId");
        return i === void 0 ? "" : i;
      },
      doesEmailExist: function(i) {
        return R(this, void 0, void 0, function() {
          var e, n, r, c, l, h, m;
          return d(this, function(y) {
            switch (y.label) {
              case 0:
                return l = (c = a).get, h = {
                  path: "/<tenantId>/passwordless/email/exists"
                }, m = {}, [
                  4,
                  u.default.getInstanceOrThrow().recipeImplementation.getTenantId({
                    userContext: i.userContext
                  })
                ];
              case 1:
                return [
                  4,
                  l.apply(c, [
                    (h.pathParams = (m.tenantId = y.sent() || "public", m), h.queryParams = {
                      email: i.email
                    }, h),
                    {},
                    g.default.preparePreAPIHook({
                      recipePreAPIHook: t.preAPIHook,
                      action: "EMAIL_EXISTS",
                      userContext: i.userContext,
                      options: i.options
                    }),
                    g.default.preparePostAPIHook({
                      recipePostAPIHook: t.postAPIHook,
                      action: "EMAIL_EXISTS",
                      userContext: i.userContext
                    })
                  ])
                ];
              case 2:
                return e = y.sent(), n = e.jsonBody, r = e.fetchResponse, [
                  2,
                  {
                    status: n.status,
                    doesExist: n.exists,
                    fetchResponse: r
                  }
                ];
            }
          });
        });
      },
      doesPhoneNumberExist: function(i) {
        return R(this, void 0, void 0, function() {
          var e, n, r, c, l, h, m;
          return d(this, function(y) {
            switch (y.label) {
              case 0:
                return l = (c = a).get, h = {
                  path: "/<tenantId>/passwordless/phonenumber/exists"
                }, m = {}, [
                  4,
                  u.default.getInstanceOrThrow().recipeImplementation.getTenantId({
                    userContext: i.userContext
                  })
                ];
              case 1:
                return [
                  4,
                  l.apply(c, [
                    (h.pathParams = (m.tenantId = y.sent() || "public", m), h.queryParams = {
                      phoneNumber: i.phoneNumber
                    }, h),
                    {},
                    g.default.preparePreAPIHook({
                      recipePreAPIHook: t.preAPIHook,
                      action: "PHONE_NUMBER_EXISTS",
                      userContext: i.userContext,
                      options: i.options
                    }),
                    g.default.preparePostAPIHook({
                      recipePostAPIHook: t.postAPIHook,
                      action: "PHONE_NUMBER_EXISTS",
                      userContext: i.userContext
                    })
                  ])
                ];
              case 2:
                return e = y.sent(), n = e.jsonBody, r = e.fetchResponse, [
                  2,
                  {
                    status: n.status,
                    doesExist: n.exists,
                    fetchResponse: r
                  }
                ];
            }
          });
        });
      },
      getLoginAttemptInfo: function() {
        return R(this, void 0, void 0, function() {
          var i;
          return d(this, function(e) {
            switch (e.label) {
              case 0:
                return [
                  4,
                  o.WindowHandlerReference.getReferenceOrThrow().windowHandler.localStorage.getItem(
                    p.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY
                  )
                ];
              case 1:
                if (i = e.sent(), i === null)
                  return [2, void 0];
                try {
                  return [2, JSON.parse(i)];
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
      setLoginAttemptInfo: function(i) {
        return R(this, void 0, void 0, function() {
          return d(this, function(e) {
            switch (e.label) {
              case 0:
                return [
                  4,
                  o.WindowHandlerReference.getReferenceOrThrow().windowHandler.localStorage.setItem(
                    p.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY,
                    JSON.stringify(
                      s(
                        {
                          // This can make future changes/migrations a lot cleaner
                          version: 1
                        },
                        i.attemptInfo
                      )
                    )
                  )
                ];
              case 1:
                return e.sent(), [
                  2
                  /*return*/
                ];
            }
          });
        });
      },
      clearLoginAttemptInfo: function() {
        return R(this, void 0, void 0, function() {
          return d(this, function(i) {
            return o.WindowHandlerReference.getReferenceOrThrow().windowHandler.localStorage.removeItem(
              p.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY
            ), [
              2
              /*return*/
            ];
          });
        });
      }
    };
  }
  return se.default = v, se.getRecipeImplementation = v, se;
}
var er;
function oi() {
  if (er) return pe;
  er = 1;
  var s = pe && pe.__extends || /* @__PURE__ */ (function() {
    var v = function(t, a) {
      return v = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, e) {
        i.__proto__ = e;
      } || function(i, e) {
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (i[n] = e[n]);
      }, v(t, a);
    };
    return function(t, a) {
      if (typeof a != "function" && a !== null)
        throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
      v(t, a);
      function i() {
        this.constructor = t;
      }
      t.prototype = a === null ? Object.create(a) : (i.prototype = a.prototype, new i());
    };
  })(), R = pe && pe.__assign || function() {
    return R = Object.assign || function(v) {
      for (var t, a = 1, i = arguments.length; a < i; a++) {
        t = arguments[a];
        for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (v[e] = t[e]);
      }
      return v;
    }, R.apply(this, arguments);
  };
  Object.defineProperty(pe, "__esModule", { value: !0 }), pe.Recipe = void 0;
  var d = wt(), o = le(), g = Vt(), f = ni(), u = ii(), p = (
    /** @class */
    (function(v) {
      s(t, v);
      function t(a) {
        var i = v.call(this, (0, f.normaliseUserInput)(a)) || this, e = new d.default(
          (0, u.default)({
            recipeId: i.config.recipeId,
            appInfo: i.config.appInfo,
            clientType: i.config.clientType,
            preAPIHook: i.config.preAPIHook,
            postAPIHook: i.config.postAPIHook
          })
        );
        return i.recipeImplementation = e.override(i.config.override.functions).build(), i;
      }
      return t.init = function(a) {
        return function(i, e, n, r) {
          return t.instance = new t(
            R(
              R(
                {},
                (0, o.applyPlugins)(
                  t.RECIPE_ID,
                  a,
                  r ?? []
                )
              ),
              { recipeId: t.RECIPE_ID, appInfo: i, clientType: e }
            )
          ), t.instance;
        };
      }, t.getInstanceOrThrow = function() {
        if (t.instance === void 0) {
          var a = "No instance of Passwordless found. Ensure that the 'Passwordless.init' method is called within the 'SuperTokens.init' recipeList.";
          throw a = (0, o.checkForSSRErrorAndAppendIfNeeded)(a), Error(a);
        }
        return t.instance;
      }, t.reset = function() {
        (0, o.isTest)() && (t.instance = void 0);
      }, t.RECIPE_ID = "passwordless", t;
    })(g.default)
  );
  return pe.Recipe = p, pe.default = p, pe;
}
var tr;
function si() {
  if (tr) return B;
  tr = 1;
  var s = B && B.__assign || function() {
    return s = Object.assign || function(w) {
      for (var I, b = 1, k = arguments.length; b < k; b++) {
        I = arguments[b];
        for (var _ in I) Object.prototype.hasOwnProperty.call(I, _) && (w[_] = I[_]);
      }
      return w;
    }, s.apply(this, arguments);
  }, R = B && B.__awaiter || function(w, I, b, k) {
    function _(T) {
      return T instanceof b ? T : new b(function(P) {
        P(T);
      });
    }
    return new (b || (b = Promise))(function(T, P) {
      function C(W) {
        try {
          O(k.next(W));
        } catch (Q) {
          P(Q);
        }
      }
      function D(W) {
        try {
          O(k.throw(W));
        } catch (Q) {
          P(Q);
        }
      }
      function O(W) {
        W.done ? T(W.value) : _(W.value).then(C, D);
      }
      O((k = k.apply(w, I || [])).next());
    });
  }, d = B && B.__generator || function(w, I) {
    var b = {
      label: 0,
      sent: function() {
        if (T[0] & 1) throw T[1];
        return T[1];
      },
      trys: [],
      ops: []
    }, k, _, T, P;
    return P = { next: C(0), throw: C(1), return: C(2) }, typeof Symbol == "function" && (P[Symbol.iterator] = function() {
      return this;
    }), P;
    function C(O) {
      return function(W) {
        return D([O, W]);
      };
    }
    function D(O) {
      if (k) throw new TypeError("Generator is already executing.");
      for (; b; )
        try {
          if (k = 1, _ && (T = O[0] & 2 ? _.return : O[0] ? _.throw || ((T = _.return) && T.call(_), 0) : _.next) && !(T = T.call(_, O[1])).done)
            return T;
          switch (_ = 0, T && (O = [O[0] & 2, T.value]), O[0]) {
            case 0:
            case 1:
              T = O;
              break;
            case 4:
              return b.label++, { value: O[1], done: !1 };
            case 5:
              b.label++, _ = O[1], O = [0];
              continue;
            case 7:
              O = b.ops.pop(), b.trys.pop();
              continue;
            default:
              if (T = b.trys, !(T = T.length > 0 && T[T.length - 1]) && (O[0] === 6 || O[0] === 2)) {
                b = 0;
                continue;
              }
              if (O[0] === 3 && (!T || O[1] > T[0] && O[1] < T[3])) {
                b.label = O[1];
                break;
              }
              if (O[0] === 6 && b.label < T[1]) {
                b.label = T[1], T = O;
                break;
              }
              if (T && b.label < T[2]) {
                b.label = T[2], b.ops.push(O);
                break;
              }
              T[2] && b.ops.pop(), b.trys.pop();
              continue;
          }
          O = I.call(w, b);
        } catch (W) {
          O = [6, W], _ = 0;
        } finally {
          k = T = 0;
        }
      if (O[0] & 5) throw O[1];
      return { value: O[0] ? O[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(B, "__esModule", { value: !0 }), B.clearLoginAttemptInfo = B.setLoginAttemptInfo = B.getLoginAttemptInfo = B.getTenantIdFromURL = B.getPreAuthSessionIdFromURL = B.getLinkCodeFromURL = B.signOut = B.doesPhoneNumberExist = B.doesEmailExist = B.consumeCode = B.resendCode = B.createCode = B.init = void 0;
  var o = le(), g = It(), f = oi(), u = (
    /** @class */
    (function() {
      function w() {
      }
      return w.init = function(I) {
        return f.default.init(I);
      }, w.createCode = function(I) {
        var b, k;
        return R(this, void 0, void 0, function() {
          var _, T, P, C, D;
          return d(this, function(O) {
            switch (O.label) {
              case 0:
                return _ = f.default.getInstanceOrThrow(), T = _.recipeImplementation, P = (0, o.getNormalisedUserContext)(I.userContext), [
                  4,
                  g.default.getInstanceOrThrow().recipeImplementation.getTenantId({
                    userContext: I.userContext
                  })
                ];
              case 1:
                return C = O.sent(), [
                  4,
                  T.createCode(
                    s(s({}, I), {
                      shouldTryLinkingWithSessionUser: (b = I.shouldTryLinkingWithSessionUser) !== null && b !== void 0 ? b : !1,
                      userContext: P
                    })
                  )
                ];
              case 2:
                return D = O.sent(), D.status !== "OK" ? [3, 4] : [
                  4,
                  T.setLoginAttemptInfo({
                    attemptInfo: {
                      tenantId: C,
                      deviceId: D.deviceId,
                      preAuthSessionId: D.preAuthSessionId,
                      shouldTryLinkingWithSessionUser: (k = I.shouldTryLinkingWithSessionUser) !== null && k !== void 0 ? k : !1,
                      flowType: D.flowType
                    },
                    userContext: P
                  })
                ];
              case 3:
                O.sent(), O.label = 4;
              case 4:
                return [2, D];
            }
          });
        });
      }, w.resendCode = function(I) {
        return R(this, void 0, void 0, function() {
          var b, k, _, T;
          return d(this, function(P) {
            switch (P.label) {
              case 0:
                return b = f.default.getInstanceOrThrow(), k = b.recipeImplementation, _ = (0, o.getNormalisedUserContext)(
                  I?.userContext
                ), [
                  4,
                  k.getLoginAttemptInfo({
                    userContext: _
                  })
                ];
              case 1:
                return T = P.sent(), [
                  2,
                  k.resendCode(
                    s(s({}, I), {
                      tenantId: T?.tenantId,
                      userContext: _,
                      deviceId: T === void 0 ? "" : T.deviceId,
                      preAuthSessionId: T === void 0 ? "" : T.preAuthSessionId,
                      shouldTryLinkingWithSessionUser: T?.shouldTryLinkingWithSessionUser
                    })
                  )
                ];
            }
          });
        });
      }, w.consumeCode = function(I) {
        var b;
        return R(this, void 0, void 0, function() {
          var k, _, T, P, C, D, D, O, W, Q;
          return d(this, function(te) {
            switch (te.label) {
              case 0:
                return k = f.default.getInstanceOrThrow(), _ = k.recipeImplementation, T = (0, o.getNormalisedUserContext)(
                  I?.userContext
                ), I !== void 0 && "userInputCode" in I ? [
                  4,
                  _.getLoginAttemptInfo({
                    userContext: T
                  })
                ] : [3, 2];
              case 1:
                return C = te.sent(), D = (b = C?.shouldTryLinkingWithSessionUser) !== null && b !== void 0 ? b : !1, P = {
                  userInputCode: I.userInputCode,
                  deviceId: C === void 0 ? "" : C.deviceId,
                  preAuthSessionId: C === void 0 ? "" : C.preAuthSessionId,
                  shouldTryLinkingWithSessionUser: D,
                  tenantId: C?.tenantId
                }, [3, 3];
              case 2:
                D = !1, O = _.getLinkCodeFromURL({
                  userContext: T
                }), W = _.getTenantIdFromURL({
                  userContext: T
                }), Q = _.getPreAuthSessionIdFromURL({
                  userContext: T
                }), P = {
                  tenantId: W,
                  linkCode: O,
                  preAuthSessionId: Q,
                  shouldTryLinkingWithSessionUser: D
                }, te.label = 3;
              case 3:
                return [
                  2,
                  _.consumeCode(
                    s(
                      {
                        userContext: T,
                        options: I?.options
                      },
                      P
                    )
                  )
                ];
            }
          });
        });
      }, w.getLinkCodeFromURL = function(I) {
        return f.default.getInstanceOrThrow().recipeImplementation.getLinkCodeFromURL(
          s(s({}, I), {
            userContext: (0, o.getNormalisedUserContext)(
              I?.userContext
            )
          })
        );
      }, w.getPreAuthSessionIdFromURL = function(I) {
        return f.default.getInstanceOrThrow().recipeImplementation.getPreAuthSessionIdFromURL(
          s(s({}, I), {
            userContext: (0, o.getNormalisedUserContext)(
              I?.userContext
            )
          })
        );
      }, w.getTenantIdFromURL = function(I) {
        return f.default.getInstanceOrThrow().recipeImplementation.getTenantIdFromURL(
          s(s({}, I), {
            userContext: (0, o.getNormalisedUserContext)(
              I?.userContext
            )
          })
        );
      }, w.doesEmailExist = function(I) {
        return f.default.getInstanceOrThrow().recipeImplementation.doesEmailExist(
          s(s({}, I), { userContext: (0, o.getNormalisedUserContext)(I.userContext) })
        );
      }, w.doesPhoneNumberExist = function(I) {
        return f.default.getInstanceOrThrow().recipeImplementation.doesPhoneNumberExist(
          s(s({}, I), { userContext: (0, o.getNormalisedUserContext)(I.userContext) })
        );
      }, w.getLoginAttemptInfo = function(I) {
        return f.default.getInstanceOrThrow().recipeImplementation.getLoginAttemptInfo(
          s(s({}, I), {
            userContext: (0, o.getNormalisedUserContext)(
              I?.userContext
            )
          })
        );
      }, w.setLoginAttemptInfo = function(I) {
        return R(this, void 0, void 0, function() {
          var b, k, _;
          return d(this, function(T) {
            switch (T.label) {
              case 0:
                return b = (0, o.getNormalisedUserContext)(I.userContext), k = f.default.getInstanceOrThrow(), [
                  4,
                  g.default.getInstanceOrThrow().recipeImplementation.getTenantId({ userContext: b })
                ];
              case 1:
                return _ = T.sent(), [
                  2,
                  k.recipeImplementation.setLoginAttemptInfo({
                    attemptInfo: s(
                      {
                        tenantId: _,
                        shouldTryLinkingWithSessionUser: I.attemptInfo.shouldTryLinkingWithSessionUser
                      },
                      I.attemptInfo
                    ),
                    userContext: b
                  })
                ];
            }
          });
        });
      }, w.clearLoginAttemptInfo = function(I) {
        return f.default.getInstanceOrThrow().recipeImplementation.clearLoginAttemptInfo(
          s(s({}, I), {
            userContext: (0, o.getNormalisedUserContext)(
              I?.userContext
            )
          })
        );
      }, w.signOut = function(I) {
        return f.default.getInstanceOrThrow().signOut({
          userContext: (0, o.getNormalisedUserContext)(
            I?.userContext
          )
        });
      }, w;
    })()
  );
  B.default = u;
  var p = u.init;
  B.init = p;
  var v = u.createCode;
  B.createCode = v;
  var t = u.resendCode;
  B.resendCode = t;
  var a = u.consumeCode;
  B.consumeCode = a;
  var i = u.doesEmailExist;
  B.doesEmailExist = i;
  var e = u.doesPhoneNumberExist;
  B.doesPhoneNumberExist = e;
  var n = u.signOut;
  B.signOut = n;
  var r = u.getLinkCodeFromURL;
  B.getLinkCodeFromURL = r;
  var c = u.getPreAuthSessionIdFromURL;
  B.getPreAuthSessionIdFromURL = c;
  var l = u.getTenantIdFromURL;
  B.getTenantIdFromURL = l;
  var h = u.getLoginAttemptInfo;
  B.getLoginAttemptInfo = h;
  var m = u.setLoginAttemptInfo;
  B.setLoginAttemptInfo = m;
  var y = u.clearLoginAttemptInfo;
  return B.clearLoginAttemptInfo = y, B;
}
var nr;
function ai() {
  return nr || (nr = 1, (function(s) {
    function R(d) {
      for (var o in d) s.hasOwnProperty(o) || (s[o] = d[o]);
    }
    s.__esModule = !0, R(si());
  })(Dt)), Dt;
}
var ui = ai();
const wi = /* @__PURE__ */ pt(ui);
var xt = {}, Ve = {}, rr;
function ci() {
  return rr || (rr = 1, (function(s) {
    var R = Ve && Ve.__awaiter || function(m, y, w, I) {
      function b(k) {
        return k instanceof w ? k : new w(function(_) {
          _(k);
        });
      }
      return new (w || (w = Promise))(function(k, _) {
        function T(D) {
          try {
            C(I.next(D));
          } catch (O) {
            _(O);
          }
        }
        function P(D) {
          try {
            C(I.throw(D));
          } catch (O) {
            _(O);
          }
        }
        function C(D) {
          D.done ? k(D.value) : b(D.value).then(T, P);
        }
        C((I = I.apply(m, y || [])).next());
      });
    }, d = Ve && Ve.__generator || function(m, y) {
      var w = {
        label: 0,
        sent: function() {
          if (k[0] & 1) throw k[1];
          return k[1];
        },
        trys: [],
        ops: []
      }, I, b, k, _;
      return _ = { next: T(0), throw: T(1), return: T(2) }, typeof Symbol == "function" && (_[Symbol.iterator] = function() {
        return this;
      }), _;
      function T(C) {
        return function(D) {
          return P([C, D]);
        };
      }
      function P(C) {
        if (I) throw new TypeError("Generator is already executing.");
        for (; w; )
          try {
            if (I = 1, b && (k = C[0] & 2 ? b.return : C[0] ? b.throw || ((k = b.return) && k.call(b), 0) : b.next) && !(k = k.call(b, C[1])).done)
              return k;
            switch (b = 0, k && (C = [C[0] & 2, k.value]), C[0]) {
              case 0:
              case 1:
                k = C;
                break;
              case 4:
                return w.label++, { value: C[1], done: !1 };
              case 5:
                w.label++, b = C[1], C = [0];
                continue;
              case 7:
                C = w.ops.pop(), w.trys.pop();
                continue;
              default:
                if (k = w.trys, !(k = k.length > 0 && k[k.length - 1]) && (C[0] === 6 || C[0] === 2)) {
                  w = 0;
                  continue;
                }
                if (C[0] === 3 && (!k || C[1] > k[0] && C[1] < k[3])) {
                  w.label = C[1];
                  break;
                }
                if (C[0] === 6 && w.label < k[1]) {
                  w.label = k[1], k = C;
                  break;
                }
                if (k && w.label < k[2]) {
                  w.label = k[2], w.ops.push(C);
                  break;
                }
                k[2] && w.ops.pop(), w.trys.pop();
                continue;
            }
            C = y.call(m, w);
          } catch (D) {
            C = [6, D], b = 0;
          } finally {
            I = k = 0;
          }
        if (C[0] & 5) throw C[1];
        return { value: C[0] ? C[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(s, "__esModule", { value: !0 }), s.getInvalidClaimsFromResponse = s.getClaimValue = s.validateClaims = s.signOut = s.addAxiosInterceptors = s.doesSessionExist = s.attemptRefreshingSession = s.getAccessToken = s.getAccessTokenPayloadSecurely = s.getUserId = s.init = s.BooleanClaim = s.PrimitiveArrayClaim = s.PrimitiveClaim = void 0;
    var o = le(), g = yr(), f = (
      /** @class */
      (function() {
        function m() {
        }
        return m.init = function(y) {
          return g.default.init(y);
        }, m.getUserId = function(y) {
          return g.default.getInstanceOrThrow().getUserId({
            userContext: (0, o.getNormalisedUserContext)(
              y?.userContext
            )
          });
        }, m.getAccessToken = function(y) {
          return g.default.getInstanceOrThrow().getAccessToken({
            userContext: (0, o.getNormalisedUserContext)(
              y?.userContext
            )
          });
        }, m.getAccessTokenPayloadSecurely = function(y) {
          return R(this, void 0, void 0, function() {
            return d(this, function(w) {
              return [
                2,
                g.default.getInstanceOrThrow().getAccessTokenPayloadSecurely({
                  userContext: (0, o.getNormalisedUserContext)(
                    y?.userContext
                  )
                })
              ];
            });
          });
        }, m.attemptRefreshingSession = function() {
          return R(this, void 0, void 0, function() {
            return d(this, function(y) {
              return [2, g.default.getInstanceOrThrow().attemptRefreshingSession()];
            });
          });
        }, m.doesSessionExist = function(y) {
          return g.default.getInstanceOrThrow().doesSessionExist({
            userContext: (0, o.getNormalisedUserContext)(
              y?.userContext
            )
          });
        }, m.addAxiosInterceptors = function(y, w) {
          return g.default.addAxiosInterceptors(y, (0, o.getNormalisedUserContext)(w));
        }, m.signOut = function(y) {
          return g.default.getInstanceOrThrow().signOut({
            userContext: (0, o.getNormalisedUserContext)(
              y?.userContext
            )
          });
        }, m.getClaimValue = function(y) {
          return g.default.getInstanceOrThrow().getClaimValue({
            claim: y.claim,
            userContext: (0, o.getNormalisedUserContext)(
              y?.userContext
            )
          });
        }, m.validateClaims = function(y) {
          return g.default.getInstanceOrThrow().validateClaims({
            overrideGlobalClaimValidators: y?.overrideGlobalClaimValidators,
            userContext: (0, o.getNormalisedUserContext)(
              y?.userContext
            )
          });
        }, m.getInvalidClaimsFromResponse = function(y) {
          return g.default.getInstanceOrThrow().getInvalidClaimsFromResponse({
            response: y.response,
            userContext: (0, o.getNormalisedUserContext)(
              y?.userContext
            )
          });
        }, m;
      })()
    );
    s.default = f;
    var u = f.init;
    s.init = u;
    var p = f.getUserId;
    s.getUserId = p;
    var v = f.getAccessTokenPayloadSecurely;
    s.getAccessTokenPayloadSecurely = v;
    var t = f.getAccessToken;
    s.getAccessToken = t;
    var a = f.attemptRefreshingSession;
    s.attemptRefreshingSession = a;
    var i = f.doesSessionExist;
    s.doesSessionExist = i;
    var e = f.addAxiosInterceptors;
    s.addAxiosInterceptors = e;
    var n = f.signOut;
    s.signOut = n;
    var r = f.validateClaims;
    s.validateClaims = r;
    var c = f.getClaimValue;
    s.getClaimValue = c;
    var l = f.getInvalidClaimsFromResponse;
    s.getInvalidClaimsFromResponse = l;
    var h = pr();
    Object.defineProperty(s, "PrimitiveClaim", {
      enumerable: !0,
      get: function() {
        return h.PrimitiveClaim;
      }
    }), Object.defineProperty(s, "PrimitiveArrayClaim", {
      enumerable: !0,
      get: function() {
        return h.PrimitiveArrayClaim;
      }
    }), Object.defineProperty(s, "BooleanClaim", {
      enumerable: !0,
      get: function() {
        return h.BooleanClaim;
      }
    });
  })(Ve)), Ve;
}
var ir;
function li() {
  return ir || (ir = 1, (function(s) {
    function R(d) {
      for (var o in d) s.hasOwnProperty(o) || (s[o] = d[o]);
    }
    s.__esModule = !0, R(ci());
  })(xt)), xt;
}
var di = li();
const Ii = /* @__PURE__ */ pt(di);
var Mt = {}, ee = {}, ye = {}, We = {}, or;
function fi() {
  if (or) return We;
  or = 1;
  var s = We && We.__assign || function() {
    return s = Object.assign || function(o) {
      for (var g, f = 1, u = arguments.length; f < u; f++) {
        g = arguments[f];
        for (var p in g) Object.prototype.hasOwnProperty.call(g, p) && (o[p] = g[p]);
      }
      return o;
    }, s.apply(this, arguments);
  };
  Object.defineProperty(We, "__esModule", { value: !0 }), We.normaliseUserInput = void 0;
  var R = Nt();
  function d(o) {
    var g = s(
      {
        functions: function(f) {
          return f;
        }
      },
      o.override
    );
    return s(s({}, (0, R.normaliseAuthRecipe)(o)), { override: g });
  }
  return We.normaliseUserInput = d, We;
}
var ae = {}, sr;
function hi() {
  if (sr) return ae;
  sr = 1;
  var s = ae && ae.__assign || function() {
    return s = Object.assign || function(p) {
      for (var v, t = 1, a = arguments.length; t < a; t++) {
        v = arguments[t];
        for (var i in v) Object.prototype.hasOwnProperty.call(v, i) && (p[i] = v[i]);
      }
      return p;
    }, s.apply(this, arguments);
  }, R = ae && ae.__awaiter || function(p, v, t, a) {
    function i(e) {
      return e instanceof t ? e : new t(function(n) {
        n(e);
      });
    }
    return new (t || (t = Promise))(function(e, n) {
      function r(h) {
        try {
          l(a.next(h));
        } catch (m) {
          n(m);
        }
      }
      function c(h) {
        try {
          l(a.throw(h));
        } catch (m) {
          n(m);
        }
      }
      function l(h) {
        h.done ? e(h.value) : i(h.value).then(r, c);
      }
      l((a = a.apply(p, v || [])).next());
    });
  }, d = ae && ae.__generator || function(p, v) {
    var t = {
      label: 0,
      sent: function() {
        if (e[0] & 1) throw e[1];
        return e[1];
      },
      trys: [],
      ops: []
    }, a, i, e, n;
    return n = { next: r(0), throw: r(1), return: r(2) }, typeof Symbol == "function" && (n[Symbol.iterator] = function() {
      return this;
    }), n;
    function r(l) {
      return function(h) {
        return c([l, h]);
      };
    }
    function c(l) {
      if (a) throw new TypeError("Generator is already executing.");
      for (; t; )
        try {
          if (a = 1, i && (e = l[0] & 2 ? i.return : l[0] ? i.throw || ((e = i.return) && e.call(i), 0) : i.next) && !(e = e.call(i, l[1])).done)
            return e;
          switch (i = 0, e && (l = [l[0] & 2, e.value]), l[0]) {
            case 0:
            case 1:
              e = l;
              break;
            case 4:
              return t.label++, { value: l[1], done: !1 };
            case 5:
              t.label++, i = l[1], l = [0];
              continue;
            case 7:
              l = t.ops.pop(), t.trys.pop();
              continue;
            default:
              if (e = t.trys, !(e = e.length > 0 && e[e.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                t = 0;
                continue;
              }
              if (l[0] === 3 && (!e || l[1] > e[0] && l[1] < e[3])) {
                t.label = l[1];
                break;
              }
              if (l[0] === 6 && t.label < e[1]) {
                t.label = e[1], e = l;
                break;
              }
              if (e && t.label < e[2]) {
                t.label = e[2], t.ops.push(l);
                break;
              }
              e[2] && t.ops.pop(), t.trys.pop();
              continue;
          }
          l = v.call(p, t);
        } catch (h) {
          l = [6, h], i = 0;
        } finally {
          a = e = 0;
        }
      if (l[0] & 5) throw l[1];
      return { value: l[0] ? l[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(ae, "__esModule", { value: !0 }), ae.getRecipeImplementation = void 0;
  var o = jt(), g = le(), f = yt();
  function u(p) {
    var v = new o.default(p.recipeId, p.appInfo);
    return {
      getStateAndOtherInfoFromStorage: function() {
        var t = f.WindowHandlerReference.getReferenceOrThrow().windowHandler.sessionStorage.getItemSync(
          "supertokens-oauth-state-2"
        );
        if (t !== null)
          try {
            return JSON.parse(t);
          } catch {
            return;
          }
      },
      setStateAndOtherInfoToStorage: function(t) {
        return R(this, void 0, void 0, function() {
          var a;
          return d(this, function(i) {
            switch (i.label) {
              case 0:
                return a = JSON.stringify(s({}, t.state)), [
                  4,
                  f.WindowHandlerReference.getReferenceOrThrow().windowHandler.sessionStorage.setItem(
                    "supertokens-oauth-state-2",
                    a
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
      getAuthorisationURLWithQueryParamsAndSetState: function(t) {
        return R(this, void 0, void 0, function() {
          var a, i, e, n, r;
          return d(this, function(c) {
            switch (c.label) {
              case 0:
                return [
                  4,
                  this.getAuthorisationURLFromBackend({
                    thirdPartyId: t.thirdPartyId,
                    tenantId: t.tenantId,
                    redirectURIOnProviderDashboard: t.redirectURIOnProviderDashboard || t.frontendRedirectURI,
                    userContext: t.userContext,
                    options: t.options
                  })
                ];
              case 1:
                return a = c.sent(), i = t.redirectURIOnProviderDashboard !== void 0 && t.frontendRedirectURI !== t.redirectURIOnProviderDashboard ? t.frontendRedirectURI : void 0, e = this.generateStateToSendToOAuthProvider({
                  frontendRedirectURI: i,
                  userContext: t.userContext
                }), n = Date.now() + 1e3 * 60 * 10, [
                  4,
                  this.setStateAndOtherInfoToStorage({
                    state: {
                      stateForAuthProvider: e,
                      thirdPartyId: t.thirdPartyId,
                      tenantId: t.tenantId,
                      expiresAt: n,
                      redirectURIOnProviderDashboard: t.redirectURIOnProviderDashboard || t.frontendRedirectURI,
                      shouldTryLinkingWithSessionUser: t.shouldTryLinkingWithSessionUser,
                      pkceCodeVerifier: a.pkceCodeVerifier
                    },
                    userContext: t.userContext
                  })
                ];
              case 2:
                return c.sent(), r = (0, g.appendQueryParamsToURL)(a.urlWithQueryParams, {
                  state: e
                }), [2, r];
            }
          });
        });
      },
      getAuthorisationURLFromBackend: function(t) {
        return R(this, void 0, void 0, function() {
          var a, i, e;
          return d(this, function(n) {
            switch (n.label) {
              case 0:
                return [
                  4,
                  v.get(
                    {
                      path: "/<tenantId>/authorisationurl",
                      pathParams: {
                        tenantId: t.tenantId || "public"
                      },
                      queryParams: s(
                        {
                          thirdPartyId: t.thirdPartyId,
                          redirectURIOnProviderDashboard: t.redirectURIOnProviderDashboard
                        },
                        p.clientType !== void 0 ? { clientType: p.clientType } : {}
                      )
                    },
                    {},
                    o.default.preparePreAPIHook({
                      recipePreAPIHook: p.preAPIHook,
                      action: "GET_AUTHORISATION_URL",
                      options: t.options,
                      userContext: t.userContext
                    }),
                    o.default.preparePostAPIHook({
                      recipePostAPIHook: p.postAPIHook,
                      action: "GET_AUTHORISATION_URL",
                      userContext: t.userContext
                    })
                  )
                ];
              case 1:
                return a = n.sent(), i = a.jsonBody, e = a.fetchResponse, [
                  2,
                  {
                    status: "OK",
                    urlWithQueryParams: i.urlWithQueryParams,
                    pkceCodeVerifier: i.pkceCodeVerifier,
                    fetchResponse: e
                  }
                ];
            }
          });
        });
      },
      signInAndUp: function(t) {
        return R(this, void 0, void 0, function() {
          var a, i, e, n, r, c, l, h, m;
          return d(this, function(y) {
            switch (y.label) {
              case 0:
                return a = this.getStateAndOtherInfoFromStorage({
                  userContext: t.userContext
                }), i = this.getAuthStateFromURL({
                  userContext: t.userContext
                }), [
                  4,
                  this.verifyAndGetStateOrThrowError({
                    stateFromAuthProvider: i,
                    stateObjectFromStorage: a,
                    userContext: t.userContext
                  })
                ];
              case 1:
                if (e = y.sent(), n = this.getAuthErrorFromURL({
                  userContext: t.userContext
                }), n !== void 0)
                  throw new Error("Auth provider responded with error: ".concat(n));
                return r = (0, g.getAllQueryParams)(), c = Object.fromEntries(r), [
                  4,
                  v.post(
                    {
                      path: "/<tenantId>/signinup",
                      pathParams: {
                        tenantId: e.tenantId || "public"
                      }
                    },
                    {
                      body: {
                        thirdPartyId: e.thirdPartyId,
                        clientType: p.clientType,
                        redirectURIInfo: {
                          redirectURIOnProviderDashboard: e.redirectURIOnProviderDashboard,
                          redirectURIQueryParams: c,
                          pkceCodeVerifier: e.pkceCodeVerifier
                        },
                        shouldTryLinkingWithSessionUser: e.shouldTryLinkingWithSessionUser
                      }
                    },
                    o.default.preparePreAPIHook({
                      recipePreAPIHook: p.preAPIHook,
                      action: "THIRD_PARTY_SIGN_IN_UP",
                      options: t.options,
                      userContext: t.userContext
                    }),
                    o.default.preparePostAPIHook({
                      recipePostAPIHook: p.postAPIHook,
                      action: "THIRD_PARTY_SIGN_IN_UP",
                      userContext: t.userContext
                    })
                  )
                ];
              case 2:
                return l = y.sent(), h = l.jsonBody, m = l.fetchResponse, h.status !== "OK" ? [
                  2,
                  s(s({}, h), { fetchResponse: m })
                ] : [
                  2,
                  s(
                    s(
                      { status: "OK" },
                      (0, g.normaliseUserResponse)("thirdparty", h)
                    ),
                    { fetchResponse: m }
                  )
                ];
            }
          });
        });
      },
      generateStateToSendToOAuthProvider: function(t) {
        var a = {
          state: "".concat(1e20).replace(/[018]/g, function(i) {
            return (parseInt(i) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> parseInt(i) / 4).toString(16);
          })
        };
        return t !== void 0 && t.frontendRedirectURI !== void 0 && (a.frontendRedirectURI = t.frontendRedirectURI), btoa(JSON.stringify(a));
      },
      verifyAndGetStateOrThrowError: function(t) {
        return R(this, void 0, void 0, function() {
          return d(this, function(a) {
            if (t.stateObjectFromStorage === void 0 || t.stateObjectFromStorage.stateForAuthProvider === void 0)
              throw new Error("No valid auth state present in session storage");
            if (t.stateFromAuthProvider === void 0)
              throw new Error("No state recieved from auth provider");
            if (t.stateObjectFromStorage.expiresAt < Date.now())
              throw new Error("Auth state verification failed. The auth provider took too long to respond");
            if (t.stateFromAuthProvider !== t.stateObjectFromStorage.stateForAuthProvider)
              throw new Error(
                "Auth state verification failed. The auth provider responded with an invalid state"
              );
            return [2, t.stateObjectFromStorage];
          });
        });
      },
      getAuthErrorFromURL: function() {
        return (0, g.getQueryParams)("error");
      },
      getAuthStateFromURL: function() {
        var t = (0, g.getQueryParams)("state");
        return t === void 0 ? "" : t;
      }
    };
  }
  return ae.default = u, ae.getRecipeImplementation = u, ae;
}
var ar;
function gi() {
  if (ar) return ye;
  ar = 1;
  var s = ye && ye.__extends || /* @__PURE__ */ (function() {
    var v = function(t, a) {
      return v = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, e) {
        i.__proto__ = e;
      } || function(i, e) {
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (i[n] = e[n]);
      }, v(t, a);
    };
    return function(t, a) {
      if (typeof a != "function" && a !== null)
        throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
      v(t, a);
      function i() {
        this.constructor = t;
      }
      t.prototype = a === null ? Object.create(a) : (i.prototype = a.prototype, new i());
    };
  })(), R = ye && ye.__assign || function() {
    return R = Object.assign || function(v) {
      for (var t, a = 1, i = arguments.length; a < i; a++) {
        t = arguments[a];
        for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (v[e] = t[e]);
      }
      return v;
    }, R.apply(this, arguments);
  };
  Object.defineProperty(ye, "__esModule", { value: !0 }), ye.Recipe = void 0;
  var d = fi(), o = wt(), g = hi(), f = le(), u = Vt(), p = (
    /** @class */
    (function(v) {
      s(t, v);
      function t(a) {
        var i = v.call(this, (0, d.normaliseUserInput)(a)) || this, e = new o.default(
          (0, g.default)({
            recipeId: i.config.recipeId,
            appInfo: i.config.appInfo,
            clientType: i.config.clientType,
            preAPIHook: i.config.preAPIHook,
            postAPIHook: i.config.postAPIHook
          })
        );
        return i.recipeImplementation = e.override(i.config.override.functions).build(), i;
      }
      return t.init = function(a) {
        return function(i, e, n, r) {
          return t.instance = new t(
            R(
              R(
                {},
                (0, f.applyPlugins)(
                  t.RECIPE_ID,
                  a,
                  r ?? []
                )
              ),
              { recipeId: t.RECIPE_ID, appInfo: i, clientType: e }
            )
          ), t.instance;
        };
      }, t.getInstanceOrThrow = function() {
        if (t.instance === void 0) {
          var a = "No instance of ThirdParty found. Ensure that the 'ThirdParty.init' method is called within the 'SuperTokens.init' recipeList.";
          throw a = (0, f.checkForSSRErrorAndAppendIfNeeded)(a), Error(a);
        }
        return t.instance;
      }, t.reset = function() {
        (0, f.isTest)() && (t.instance = void 0);
      }, t.RECIPE_ID = "thirdparty", t;
    })(u.default)
  );
  return ye.Recipe = p, ye.default = p, ye;
}
var ur;
function vi() {
  if (ur) return ee;
  ur = 1;
  var s = ee && ee.__assign || function() {
    return s = Object.assign || function(e) {
      for (var n, r = 1, c = arguments.length; r < c; r++) {
        n = arguments[r];
        for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
      }
      return e;
    }, s.apply(this, arguments);
  }, R = ee && ee.__awaiter || function(e, n, r, c) {
    function l(h) {
      return h instanceof r ? h : new r(function(m) {
        m(h);
      });
    }
    return new (r || (r = Promise))(function(h, m) {
      function y(b) {
        try {
          I(c.next(b));
        } catch (k) {
          m(k);
        }
      }
      function w(b) {
        try {
          I(c.throw(b));
        } catch (k) {
          m(k);
        }
      }
      function I(b) {
        b.done ? h(b.value) : l(b.value).then(y, w);
      }
      I((c = c.apply(e, n || [])).next());
    });
  }, d = ee && ee.__generator || function(e, n) {
    var r = {
      label: 0,
      sent: function() {
        if (h[0] & 1) throw h[1];
        return h[1];
      },
      trys: [],
      ops: []
    }, c, l, h, m;
    return m = { next: y(0), throw: y(1), return: y(2) }, typeof Symbol == "function" && (m[Symbol.iterator] = function() {
      return this;
    }), m;
    function y(I) {
      return function(b) {
        return w([I, b]);
      };
    }
    function w(I) {
      if (c) throw new TypeError("Generator is already executing.");
      for (; r; )
        try {
          if (c = 1, l && (h = I[0] & 2 ? l.return : I[0] ? l.throw || ((h = l.return) && h.call(l), 0) : l.next) && !(h = h.call(l, I[1])).done)
            return h;
          switch (l = 0, h && (I = [I[0] & 2, h.value]), I[0]) {
            case 0:
            case 1:
              h = I;
              break;
            case 4:
              return r.label++, { value: I[1], done: !1 };
            case 5:
              r.label++, l = I[1], I = [0];
              continue;
            case 7:
              I = r.ops.pop(), r.trys.pop();
              continue;
            default:
              if (h = r.trys, !(h = h.length > 0 && h[h.length - 1]) && (I[0] === 6 || I[0] === 2)) {
                r = 0;
                continue;
              }
              if (I[0] === 3 && (!h || I[1] > h[0] && I[1] < h[3])) {
                r.label = I[1];
                break;
              }
              if (I[0] === 6 && r.label < h[1]) {
                r.label = h[1], h = I;
                break;
              }
              if (h && r.label < h[2]) {
                r.label = h[2], r.ops.push(I);
                break;
              }
              h[2] && r.ops.pop(), r.trys.pop();
              continue;
          }
          I = n.call(e, r);
        } catch (b) {
          I = [6, b], l = 0;
        } finally {
          c = h = 0;
        }
      if (I[0] & 5) throw I[1];
      return { value: I[0] ? I[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(ee, "__esModule", { value: !0 }), ee.signOut = ee.signInAndUp = ee.getAuthorisationURLWithQueryParamsAndSetState = ee.getStateAndOtherInfoFromStorage = ee.init = void 0;
  var o = le(), g = It(), f = gi(), u = (
    /** @class */
    (function() {
      function e() {
      }
      return e.init = function(n) {
        return f.default.init(n);
      }, e.signOut = function(n) {
        return f.default.getInstanceOrThrow().signOut({
          userContext: (0, o.getNormalisedUserContext)(
            n?.userContext
          )
        });
      }, e.getStateAndOtherInfoFromStorage = function(n) {
        return f.default.getInstanceOrThrow().recipeImplementation.getStateAndOtherInfoFromStorage(
          s(s({}, n), {
            userContext: (0, o.getNormalisedUserContext)(
              n?.userContext
            )
          })
        );
      }, e.getAuthorisationURLWithQueryParamsAndSetState = function(n) {
        return R(this, void 0, void 0, function() {
          var r, c, l;
          return d(this, function(h) {
            switch (h.label) {
              case 0:
                return r = (0, o.getNormalisedUserContext)(n.userContext), c = f.default.getInstanceOrThrow(), [
                  4,
                  g.default.getInstanceOrThrow().recipeImplementation.getTenantId({ userContext: r })
                ];
              case 1:
                return l = h.sent(), [
                  2,
                  c.recipeImplementation.getAuthorisationURLWithQueryParamsAndSetState(
                    s(s({ tenantId: l }, n), {
                      shouldTryLinkingWithSessionUser: n?.shouldTryLinkingWithSessionUser,
                      userContext: r
                    })
                  )
                ];
            }
          });
        });
      }, e.signInAndUp = function(n) {
        return f.default.getInstanceOrThrow().recipeImplementation.signInAndUp(
          s(s({}, n), {
            userContext: (0, o.getNormalisedUserContext)(
              n?.userContext
            )
          })
        );
      }, e;
    })()
  );
  ee.default = u;
  var p = u.init;
  ee.init = p;
  var v = u.getAuthorisationURLWithQueryParamsAndSetState;
  ee.getAuthorisationURLWithQueryParamsAndSetState = v;
  var t = u.getStateAndOtherInfoFromStorage;
  ee.getStateAndOtherInfoFromStorage = t;
  var a = u.signInAndUp;
  ee.signInAndUp = a;
  var i = u.signOut;
  return ee.signOut = i, ee;
}
var cr;
function mi() {
  return cr || (cr = 1, (function(s) {
    function R(d) {
      for (var o in d) s.hasOwnProperty(o) || (s[o] = d[o]);
    }
    s.__esModule = !0, R(vi());
  })(Mt)), Mt;
}
var pi = mi();
const bi = /* @__PURE__ */ pt(pi);
export {
  wi as P,
  yi as S,
  bi as T,
  Ii as a,
  ui as p,
  pi as t
};
