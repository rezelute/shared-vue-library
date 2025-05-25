import { r as y, a as D, b as z, c as O, d as L, g as j, S as E, P as M, T as W } from "./index-uWjXttH_.js";
var d = {}, o = {}, c = {}, p = {}, f = {}, h;
function $() {
  return h || (h = 1, function(e) {
    function r(n) {
      for (var i in n) e.hasOwnProperty(i) || (e[i] = n[i]);
    }
    e.__esModule = !0, r(y());
  }(f)), f;
}
var I;
function A() {
  return I || (I = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CookieHandlerReference = void 0;
    var r = $();
    Object.defineProperty(e, "CookieHandlerReference", {
      enumerable: !0,
      get: function() {
        return r.CookieHandlerReference;
      }
    });
  }(p)), p;
}
var u = {}, _;
function B() {
  if (_) return u;
  _ = 1, Object.defineProperty(u, "__esModule", { value: !0 }), u.PostSuperTokensInitCallbacks = void 0;
  var e = (
    /** @class */
    function() {
      function r() {
      }
      return r.addPostInitCallback = function(n) {
        r.postInitCallbacks.push(n);
      }, r.runPostInitCallbacks = function() {
        for (var n = 0, i = r.postInitCallbacks; n < i.length; n++) {
          var s = i[n];
          s();
        }
      }, r.postInitCallbacks = [], r;
    }()
  );
  return u.PostSuperTokensInitCallbacks = e, u;
}
var v = {}, k = {}, S;
function J() {
  return S || (S = 1, function(e) {
    function r(n) {
      for (var i in n) e.hasOwnProperty(i) || (e[i] = n[i]);
    }
    e.__esModule = !0, r(D());
  }(k)), k;
}
var C;
function F() {
  return C || (C = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.DateProviderReference = void 0;
    var r = J();
    Object.defineProperty(e, "DateProviderReference", {
      enumerable: !0,
      get: function() {
        return r.DateProviderReference;
      }
    });
  }(v)), v;
}
var T;
function N() {
  if (T) return c;
  T = 1, Object.defineProperty(c, "__esModule", { value: !0 });
  var e = z(), r = A(), n = O(), i = B(), s = L(), g = F(), m = (
    /** @class */
    function() {
      function a(t) {
        var w = this;
        if (this.recipeList = [], this.appInfo = (0, e.normaliseInputAppInfoOrThrowError)(t.appInfo), t.recipeList === void 0 || t.recipeList.length === 0)
          throw new Error(
            "Please provide at least one recipe to the supertokens.init function call. See https://supertokens.io/docs/emailpassword/quick-setup/frontend"
          );
        var l = !1;
        t.enableDebugLogs !== void 0 && (l = t.enableDebugLogs);
        var P = !1;
        this.recipeList = t.recipeList.map(function(H) {
          var b = H(w.appInfo, t.clientType, l);
          return b.config.recipeId === s.Recipe.RECIPE_ID && (P = !0), b;
        }), P || this.recipeList.push(s.Recipe.init()(this.appInfo, t.clientType, l));
      }
      return a.init = function(t) {
        if (r.CookieHandlerReference.init(t.cookieHandler), n.WindowHandlerReference.init(t.windowHandler), g.DateProviderReference.init(t.dateProvider), a.instance !== void 0) {
          console.warn("SuperTokens was already initialized");
          return;
        }
        a.instance = new a(t), i.PostSuperTokensInitCallbacks.runPostInitCallbacks();
      }, a.getInstanceOrThrow = function() {
        if (a.instance === void 0) {
          var t = "SuperTokens must be initialized before calling this method.";
          throw t = (0, e.checkForSSRErrorAndAppendIfNeeded)(t), new Error(t);
        }
        return a.instance;
      }, a.reset = function() {
        if (!(0, e.isTest)()) {
          console.warn("Calling reset() is only supported during testing");
          return;
        }
        s.Recipe.reset(), a.instance = void 0;
      }, a;
    }()
  );
  return c.default = m, c;
}
var R;
function U() {
  if (R) return o;
  R = 1, Object.defineProperty(o, "__esModule", { value: !0 }), o.init = void 0;
  var e = N(), r = (
    /** @class */
    function() {
      function n() {
      }
      return n.init = function(i) {
        e.default.init(i);
      }, n;
    }()
  );
  return o.default = r, o.init = r.init, o;
}
var q;
function G() {
  return q || (q = 1, function(e) {
    function r(n) {
      for (var i in n) e.hasOwnProperty(i) || (e[i] = n[i]);
    }
    e.__esModule = !0, r(U());
  }(d)), d;
}
var K = G();
const Q = /* @__PURE__ */ j(K), V = {
  semantic: {
    primary: {
      50: "{green.50}",
      100: "{green.100}",
      200: "{green.200}",
      300: "{green.300}",
      400: "{green.400}",
      500: "{green.500}",
      600: "{green.600}",
      700: "{green.700}",
      800: "{green.800}",
      900: "{green.900}",
      950: "{green.950}"
    },
    colorScheme: {
      light: {
        surface: {
          0: "#fff",
          50: "{amber.50}",
          100: "{zinc.100}",
          200: "{zinc.200}",
          300: "{zinc.300}",
          400: "{zinc.400}",
          500: "{zinc.500}",
          600: "{zinc.600}",
          700: "{zinc.700}",
          800: "{zinc.800}",
          900: "{zinc.900}",
          950: "{zinc.950}"
        }
      },
      dark: {
        surface: {
          0: "{amber.50}",
          50: "{slate.50}",
          100: "{slate.50}",
          200: "{slate.100}",
          300: "{slate.200}",
          400: "{slate.300}",
          500: "{slate.400}",
          600: "{slate.500}",
          700: "{slate.600}",
          800: "{slate.700}",
          900: "{slate.800}",
          950: "{slate.950}"
        }
      }
    }
  },
  components: {
    menubar: {
      colorScheme: {
        light: {
          root: {
            background: "#fff"
          }
        },
        dark: {
          root: {
            background: "{surface.900}"
          }
        }
      }
    }
  }
}, Y = {
  preset1: V
}, Z = (e) => {
  Q.init({
    appInfo: {
      appName: e.appInfo.appName,
      apiDomain: e.appInfo.apiDomain,
      apiBasePath: e.appInfo.apiBasePath || "/auth"
    },
    recipeList: [E.init(), M.init({}), W.init()]
  });
};
export {
  Z as initializeSuperTokens,
  Y as themePresets
};
