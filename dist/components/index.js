import { useId as cn, mergeProps as b, createElementBlock as h, openBlock as p, createElementVNode as g, renderSlot as _, createTextVNode as H, toDisplayString as F, resolveComponent as G, resolveDirective as je, withDirectives as Ve, createBlock as C, resolveDynamicComponent as ae, withCtx as S, createCommentVNode as x, normalizeClass as X, createStaticVNode as At, defineComponent as j, Transition as Ee, createVNode as L, unref as z, ref as M, computed as q, Teleport as pn, Fragment as fe, renderList as Mt, onMounted as de, mergeModels as ie, useModel as Fe, withModifiers as Be, inject as tt, watch as mn } from "vue";
import { m as be, B as D, a as le, C as Dt, s as W, g as ne, F as jt, N as ee, S as U, c as Vt, z as Me, b as fn, l as se, n as gn, i as dt, P as ze, Q as bn, d as We, T as ct, R as pt, v as ge, e as Ft, K as hn, W as Bt, U as Nt, A as vn, f as yn, t as kn, M as mt, Y as Kt, D as $n, h as Rt, j as N, J as In, k as Sn, L as wn, o as ce, I as ft, p as xn, r as Ut, q as Cn, u as Pn, _ as _n } from "../index-DExoY821.js";
import { S as Ln, t as Wt, p as te } from "../supertokens-vendor-Dsnq9j4O.js";
import { m as V } from "../messages-Bdsuw548.js";
import { u as Tn } from "../userStore-DKVnZxFM.js";
import { n as K, a as nt, A as ot, g as En } from "../url-Bg-ZCs1f.js";
import { z as Ht } from "zod";
import { useRoute as Gt, useRouter as qt } from "vue-router";
function Q(...t) {
  if (t) {
    let e = [];
    for (let n = 0; n < t.length; n++) {
      let o = t[n];
      if (!o) continue;
      let r = typeof o;
      if (r === "string" || r === "number") e.push(o);
      else if (r === "object") {
        let i = Array.isArray(o) ? [Q(...o)] : Object.entries(o).map(([l, u]) => u ? l : void 0);
        e = i.length ? e.concat(i.filter((l) => !!l)) : e;
      }
    }
    return e.join(" ").trim();
  }
}
var Ae = {};
function On(t = "pui_id_") {
  return Object.hasOwn(Ae, t) || (Ae[t] = 0), Ae[t]++, `${t}${Ae[t]}`;
}
function zn() {
  let t = [], e = (l, u, s = 999) => {
    let a = r(l, u, s), d = a.value + (a.key === l ? 0 : s) + 1;
    return t.push({ key: l, value: d }), d;
  }, n = (l) => {
    t = t.filter((u) => u.value !== l);
  }, o = (l, u) => r(l).value, r = (l, u, s = 0) => [...t].reverse().find((a) => !0) || { key: l, value: s }, i = (l) => l && parseInt(l.style.zIndex, 10) || 0;
  return { get: i, set: (l, u, s) => {
    u && (u.style.zIndex = String(e(l, !0, s)));
  }, clear: (l) => {
    l && (n(i(l)), l.style.zIndex = "");
  }, getCurrent: (l) => o(l) };
}
var ue = zn(), oe = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames: function() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded: function(e) {
    return this._loadedStyleNames.has(e);
  },
  setLoadedStyleName: function(e) {
    this._loadedStyleNames.add(e);
  },
  deleteLoadedStyleName: function(e) {
    this._loadedStyleNames.delete(e);
  },
  clearLoadedStyleNames: function() {
    this._loadedStyleNames.clear();
  }
};
function An() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pc", e = cn();
  return "".concat(t).concat(e.replace("v-", "").replaceAll("-", "_"));
}
var gt = D.extend({
  name: "common"
});
function he(t) {
  "@babel/helpers - typeof";
  return he = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, he(t);
}
function Mn(t) {
  return Xt(t) || Dn(t) || Yt(t) || Zt();
}
function Dn(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function pe(t, e) {
  return Xt(t) || jn(t, e) || Yt(t, e) || Zt();
}
function Zt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yt(t, e) {
  if (t) {
    if (typeof t == "string") return He(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? He(t, e) : void 0;
  }
}
function He(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function jn(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var o, r, i, l, u = [], s = !0, a = !1;
    try {
      if (i = (n = n.call(t)).next, e === 0) {
        if (Object(n) !== n) return;
        s = !1;
      } else for (; !(s = (o = i.call(n)).done) && (u.push(o.value), u.length !== e); s = !0) ;
    } catch (d) {
      a = !0, r = d;
    } finally {
      try {
        if (!s && n.return != null && (l = n.return(), Object(l) !== l)) return;
      } finally {
        if (a) throw r;
      }
    }
    return u;
  }
}
function Xt(t) {
  if (Array.isArray(t)) return t;
}
function bt(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function P(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? bt(Object(n), !0).forEach(function(o) {
      me(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : bt(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function me(t, e, n) {
  return (e = Vn(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Vn(t) {
  var e = Fn(t, "string");
  return he(e) == "symbol" ? e : e + "";
}
function Fn(t, e) {
  if (he(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (he(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Z = {
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
      handler: function(e) {
        ee.off("theme:change", this._loadCoreStyles), e || (this._loadCoreStyles(), this._themeChangeListener(this._loadCoreStyles));
      }
    },
    dt: {
      immediate: !0,
      handler: function(e, n) {
        var o = this;
        ee.off("theme:change", this._themeScopedListener), e ? (this._loadScopedThemeStyles(e), this._themeScopedListener = function() {
          return o._loadScopedThemeStyles(e);
        }, this._themeChangeListener(this._themeScopedListener)) : this._unloadScopedThemeStyles();
      }
    }
  },
  scopedStyleEl: void 0,
  rootEl: void 0,
  uid: void 0,
  $attrSelector: void 0,
  beforeCreate: function() {
    var e, n, o, r, i, l, u, s, a, d, c, m = (e = this.pt) === null || e === void 0 ? void 0 : e._usept, y = m ? (n = this.pt) === null || n === void 0 || (n = n.originalValue) === null || n === void 0 ? void 0 : n[this.$.type.name] : void 0, f = m ? (o = this.pt) === null || o === void 0 || (o = o.value) === null || o === void 0 ? void 0 : o[this.$.type.name] : this.pt;
    (r = f || y) === null || r === void 0 || (r = r.hooks) === null || r === void 0 || (i = r.onBeforeCreate) === null || i === void 0 || i.call(r);
    var k = (l = this.$primevueConfig) === null || l === void 0 || (l = l.pt) === null || l === void 0 ? void 0 : l._usept, v = k ? (u = this.$primevue) === null || u === void 0 || (u = u.config) === null || u === void 0 || (u = u.pt) === null || u === void 0 ? void 0 : u.originalValue : void 0, $ = k ? (s = this.$primevue) === null || s === void 0 || (s = s.config) === null || s === void 0 || (s = s.pt) === null || s === void 0 ? void 0 : s.value : (a = this.$primevue) === null || a === void 0 || (a = a.config) === null || a === void 0 ? void 0 : a.pt;
    (d = $ || v) === null || d === void 0 || (d = d[this.$.type.name]) === null || d === void 0 || (d = d.hooks) === null || d === void 0 || (c = d.onBeforeCreate) === null || c === void 0 || c.call(d), this.$attrSelector = An(), this.uid = this.$attrs.id || this.$attrSelector.replace("pc", "pv_id_");
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    var e;
    this.rootEl = Me(fn(this.$el) ? this.$el : (e = this.$el) === null || e === void 0 ? void 0 : e.parentElement, "[".concat(this.$attrSelector, "]")), this.rootEl && (this.rootEl.$pc = P({
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
    _hook: function(e) {
      if (!this.$options.hostName) {
        var n = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, "hooks.".concat(e)), o = this._useDefaultPT(this._getOptionValue, "hooks.".concat(e));
        n?.(), o?.();
      }
    },
    _mergeProps: function(e) {
      for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
        o[r - 1] = arguments[r];
      return Vt(e) ? e.apply(void 0, o) : b.apply(void 0, o);
    },
    _load: function() {
      oe.isStyleNameLoaded("base") || (D.loadCSS(this.$styleOptions), this._loadGlobalStyles(), oe.setLoadedStyleName("base")), this._loadThemeStyles();
    },
    _loadStyles: function() {
      this._load(), this._themeChangeListener(this._load);
    },
    _loadCoreStyles: function() {
      var e, n;
      !oe.isStyleNameLoaded((e = this.$style) === null || e === void 0 ? void 0 : e.name) && (n = this.$style) !== null && n !== void 0 && n.name && (gt.loadCSS(this.$styleOptions), this.$options.style && this.$style.loadCSS(this.$styleOptions), oe.setLoadedStyleName(this.$style.name));
    },
    _loadGlobalStyles: function() {
      var e = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      W(e) && D.load(e, P({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function() {
      var e, n;
      if (!(this.isUnstyled || this.$theme === "none")) {
        if (!U.isStyleNameLoaded("common")) {
          var o, r, i = ((o = this.$style) === null || o === void 0 || (r = o.getCommonTheme) === null || r === void 0 ? void 0 : r.call(o)) || {}, l = i.primitive, u = i.semantic, s = i.global, a = i.style;
          D.load(l?.css, P({
            name: "primitive-variables"
          }, this.$styleOptions)), D.load(u?.css, P({
            name: "semantic-variables"
          }, this.$styleOptions)), D.load(s?.css, P({
            name: "global-variables"
          }, this.$styleOptions)), D.loadStyle(P({
            name: "global-style"
          }, this.$styleOptions), a), U.setLoadedStyleName("common");
        }
        if (!U.isStyleNameLoaded((e = this.$style) === null || e === void 0 ? void 0 : e.name) && (n = this.$style) !== null && n !== void 0 && n.name) {
          var d, c, m, y, f = ((d = this.$style) === null || d === void 0 || (c = d.getComponentTheme) === null || c === void 0 ? void 0 : c.call(d)) || {}, k = f.css, v = f.style;
          (m = this.$style) === null || m === void 0 || m.load(k, P({
            name: "".concat(this.$style.name, "-variables")
          }, this.$styleOptions)), (y = this.$style) === null || y === void 0 || y.loadStyle(P({
            name: "".concat(this.$style.name, "-style")
          }, this.$styleOptions), v), U.setLoadedStyleName(this.$style.name);
        }
        if (!U.isStyleNameLoaded("layer-order")) {
          var $, E, A = ($ = this.$style) === null || $ === void 0 || (E = $.getLayerOrderThemeCSS) === null || E === void 0 ? void 0 : E.call($);
          D.load(A, P({
            name: "layer-order",
            first: !0
          }, this.$styleOptions)), U.setLoadedStyleName("layer-order");
        }
      }
    },
    _loadScopedThemeStyles: function(e) {
      var n, o, r, i = ((n = this.$style) === null || n === void 0 || (o = n.getPresetTheme) === null || o === void 0 ? void 0 : o.call(n, e, "[".concat(this.$attrSelector, "]"))) || {}, l = i.css, u = (r = this.$style) === null || r === void 0 ? void 0 : r.load(l, P({
        name: "".concat(this.$attrSelector, "-").concat(this.$style.name)
      }, this.$styleOptions));
      this.scopedStyleEl = u.el;
    },
    _unloadScopedThemeStyles: function() {
      var e;
      (e = this.scopedStyleEl) === null || e === void 0 || (e = e.value) === null || e === void 0 || e.remove();
    },
    _themeChangeListener: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      };
      oe.clearLoadedStyleNames(), ee.on("theme:change", e);
    },
    _removeThemeListeners: function() {
      ee.off("theme:change", this._loadCoreStyles), ee.off("theme:change", this._load), ee.off("theme:change", this._themeScopedListener);
    },
    _getHostInstance: function(e) {
      return e ? this.$options.hostName ? e.$.type.name === this.$options.hostName ? e : this._getHostInstance(e.$parentInstance) : e.$parentInstance : void 0;
    },
    _getPropValue: function(e) {
      var n;
      return this[e] || ((n = this._getHostInstance(this)) === null || n === void 0 ? void 0 : n[e]);
    },
    _getOptionValue: function(e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return jt(e, n, o);
    },
    _getPTValue: function() {
      var e, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, l = /./g.test(o) && !!r[o.split(".")[0]], u = this._getPropValue("ptOptions") || ((e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.ptOptions) || {}, s = u.mergeSections, a = s === void 0 ? !0 : s, d = u.mergeProps, c = d === void 0 ? !1 : d, m = i ? l ? this._useGlobalPT(this._getPTClassValue, o, r) : this._useDefaultPT(this._getPTClassValue, o, r) : void 0, y = l ? void 0 : this._getPTSelf(n, this._getPTClassValue, o, P(P({}, r), {}, {
        global: m || {}
      })), f = this._getPTDatasets(o);
      return a || !a && y ? c ? this._mergeProps(c, m, y, f) : P(P(P({}, m), y), f) : P(P({}, y), f);
    },
    _getPTSelf: function() {
      for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
        o[r - 1] = arguments[r];
      return b(
        this._usePT.apply(this, [this._getPT(e, this.$name)].concat(o)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(o))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function() {
      var e, n, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = "data-pc-", i = o === "root" && W((e = this.pt) === null || e === void 0 ? void 0 : e["data-pc-section"]);
      return o !== "transition" && P(P({}, o === "root" && P(P(me({}, "".concat(r, "name"), ne(i ? (n = this.pt) === null || n === void 0 ? void 0 : n["data-pc-section"] : this.$.type.name)), i && me({}, "".concat(r, "extend"), ne(this.$.type.name))), {}, me({}, "".concat(this.$attrSelector), ""))), {}, me({}, "".concat(r, "section"), ne(o)));
    },
    _getPTClassValue: function() {
      var e = this._getOptionValue.apply(this, arguments);
      return le(e) || Dt(e) ? {
        class: e
      } : e;
    },
    _getPT: function(e) {
      var n = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 ? arguments[2] : void 0, i = function(u) {
        var s, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, d = r ? r(u) : u, c = ne(o), m = ne(n.$name);
        return (s = a ? c !== m ? d?.[c] : void 0 : d?.[c]) !== null && s !== void 0 ? s : d;
      };
      return e != null && e.hasOwnProperty("_usept") ? {
        _usept: e._usept,
        originalValue: i(e.originalValue),
        value: i(e.value)
      } : i(e, !0);
    },
    _usePT: function(e, n, o, r) {
      var i = function(k) {
        return n(k, o, r);
      };
      if (e != null && e.hasOwnProperty("_usept")) {
        var l, u = e._usept || ((l = this.$primevueConfig) === null || l === void 0 ? void 0 : l.ptOptions) || {}, s = u.mergeSections, a = s === void 0 ? !0 : s, d = u.mergeProps, c = d === void 0 ? !1 : d, m = i(e.originalValue), y = i(e.value);
        return m === void 0 && y === void 0 ? void 0 : le(y) ? y : le(m) ? m : a || !a && y ? c ? this._mergeProps(c, m, y) : P(P({}, m), y) : y;
      }
      return i(e);
    },
    _useGlobalPT: function(e, n, o) {
      return this._usePT(this.globalPT, e, n, o);
    },
    _useDefaultPT: function(e, n, o) {
      return this._usePT(this.defaultPT, e, n, o);
    },
    ptm: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, e, P(P({}, this.$params), n));
    },
    ptmi: function() {
      var e, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = b(this.$_attrsWithoutPT, this.ptm(n, o));
      return r?.hasOwnProperty("id") && ((e = r.id) !== null && e !== void 0 || (r.id = this.$id)), r;
    },
    ptmo: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(e, n, P({
        instance: this
      }, o), !1);
    },
    cx: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.isUnstyled ? void 0 : this._getOptionValue(this.$style.classes, e, P(P({}, this.$params), n));
    },
    sx: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (n) {
        var r = this._getOptionValue(this.$style.inlineStyles, e, P(P({}, this.$params), o)), i = this._getOptionValue(gt.inlineStyles, e, P(P({}, this.$params), o));
        return [i, r];
      }
    }
  },
  computed: {
    globalPT: function() {
      var e, n = this;
      return this._getPT((e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.pt, void 0, function(o) {
        return be(o, {
          instance: n
        });
      });
    },
    defaultPT: function() {
      var e, n = this;
      return this._getPT((e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.pt, void 0, function(o) {
        return n._getOptionValue(o, n.$name, P({}, n.$params)) || be(o, P({}, n.$params));
      });
    },
    isUnstyled: function() {
      var e;
      return this.unstyled !== void 0 ? this.unstyled : (e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.unstyled;
    },
    $id: function() {
      return this.$attrs.id || this.uid;
    },
    $inProps: function() {
      var e, n = Object.keys(((e = this.$.vnode) === null || e === void 0 ? void 0 : e.props) || {});
      return Object.fromEntries(Object.entries(this.$props).filter(function(o) {
        var r = pe(o, 1), i = r[0];
        return n?.includes(i);
      }));
    },
    $theme: function() {
      var e;
      return (e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.theme;
    },
    $style: function() {
      return P(P({
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
      var e;
      return {
        nonce: (e = this.$primevueConfig) === null || e === void 0 || (e = e.csp) === null || e === void 0 ? void 0 : e.nonce
      };
    },
    $primevueConfig: function() {
      var e;
      return (e = this.$primevue) === null || e === void 0 ? void 0 : e.config;
    },
    $name: function() {
      return this.$options.hostName || this.$.type.name;
    },
    $params: function() {
      var e = this._getHostInstance(this) || this.$parent;
      return {
        instance: this,
        props: this.$props,
        state: this.$data,
        attrs: this.$attrs,
        parent: {
          instance: e,
          props: e?.$props,
          state: e?.$data,
          attrs: e?.$attrs
        }
      };
    },
    $_attrsPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(e) {
        var n = pe(e, 1), o = n[0];
        return o?.startsWith("pt:");
      }).reduce(function(e, n) {
        var o = pe(n, 2), r = o[0], i = o[1], l = r.split(":"), u = Mn(l), s = He(u).slice(1);
        return s?.reduce(function(a, d, c, m) {
          return !a[d] && (a[d] = c === m.length - 1 ? i : {}), a[d];
        }, e), e;
      }, {});
    },
    $_attrsWithoutPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(e) {
        var n = pe(e, 1), o = n[0];
        return !(o != null && o.startsWith("pt:"));
      }).reduce(function(e, n) {
        var o = pe(n, 2), r = o[0], i = o[1];
        return e[r] = i, e;
      }, {});
    }
  }
}, Bn = `
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
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
`, Nn = D.extend({
  name: "baseicon",
  css: Bn
});
function ve(t) {
  "@babel/helpers - typeof";
  return ve = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ve(t);
}
function ht(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function vt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ht(Object(n), !0).forEach(function(o) {
      Kn(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ht(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function Kn(t, e, n) {
  return (e = Rn(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Rn(t) {
  var e = Un(t, "string");
  return ve(e) == "symbol" ? e : e + "";
}
function Un(t, e) {
  if (ve(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (ve(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Oe = {
  name: "BaseIcon",
  extends: Z,
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
  style: Nn,
  provide: function() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function() {
      var e = se(this.label);
      return vt(vt({}, !this.isUnstyled && {
        class: ["p-icon", {
          "p-icon-spin": this.spin
        }]
      }), {}, {
        role: e ? void 0 : "img",
        "aria-label": e ? void 0 : this.label,
        "aria-hidden": e
      });
    }
  }
}, Jt = {
  name: "SpinnerIcon",
  extends: Oe
};
function Wn(t) {
  return Zn(t) || qn(t) || Gn(t) || Hn();
}
function Hn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gn(t, e) {
  if (t) {
    if (typeof t == "string") return Ge(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ge(t, e) : void 0;
  }
}
function qn(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Zn(t) {
  if (Array.isArray(t)) return Ge(t);
}
function Ge(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function Yn(t, e, n, o, r, i) {
  return p(), h("svg", b({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t.pti()), Wn(e[0] || (e[0] = [g("path", {
    d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
Jt.render = Yn;
var Xn = `
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`, Jn = {
  root: function(e) {
    var n = e.props, o = e.instance;
    return ["p-badge p-component", {
      "p-badge-circle": W(n.value) && String(n.value).length === 1,
      "p-badge-dot": se(n.value) && !o.$slots.default,
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
}, Qn = D.extend({
  name: "badge",
  style: Xn,
  classes: Jn
}), eo = {
  name: "BaseBadge",
  extends: Z,
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
  style: Qn,
  provide: function() {
    return {
      $pcBadge: this,
      $parentInstance: this
    };
  }
};
function ye(t) {
  "@babel/helpers - typeof";
  return ye = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ye(t);
}
function yt(t, e, n) {
  return (e = to(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function to(t) {
  var e = no(t, "string");
  return ye(e) == "symbol" ? e : e + "";
}
function no(t, e) {
  if (ye(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (ye(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Qt = {
  name: "Badge",
  extends: eo,
  inheritAttrs: !1,
  computed: {
    dataP: function() {
      return Q(yt(yt({
        circle: this.value != null && String(this.value).length === 1,
        empty: this.value == null && !this.$slots.default
      }, this.severity, this.severity), this.size, this.size));
    }
  }
}, oo = ["data-p"];
function io(t, e, n, o, r, i) {
  return p(), h("span", b({
    class: t.cx("root"),
    "data-p": i.dataP
  }, t.ptmi("root")), [_(t.$slots, "default", {}, function() {
    return [H(F(t.value), 1)];
  })], 16, oo);
}
Qt.render = io;
function ke(t) {
  "@babel/helpers - typeof";
  return ke = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ke(t);
}
function kt(t, e) {
  return lo(t) || so(t, e) || ao(t, e) || ro();
}
function ro() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ao(t, e) {
  if (t) {
    if (typeof t == "string") return $t(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? $t(t, e) : void 0;
  }
}
function $t(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function so(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var o, r, i, l, u = [], s = !0, a = !1;
    try {
      if (i = (n = n.call(t)).next, e !== 0) for (; !(s = (o = i.call(n)).done) && (u.push(o.value), u.length !== e); s = !0) ;
    } catch (d) {
      a = !0, r = d;
    } finally {
      try {
        if (!s && n.return != null && (l = n.return(), Object(l) !== l)) return;
      } finally {
        if (a) throw r;
      }
    }
    return u;
  }
}
function lo(t) {
  if (Array.isArray(t)) return t;
}
function It(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function T(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? It(Object(n), !0).forEach(function(o) {
      qe(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : It(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function qe(t, e, n) {
  return (e = uo(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function uo(t) {
  var e = co(t, "string");
  return ke(e) == "symbol" ? e : e + "";
}
function co(t, e) {
  if (ke(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (ke(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var w = {
  _getMeta: function() {
    return [dt(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], be(dt(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(e, n) {
    var o, r, i;
    return (o = (e == null || (r = e.instance) === null || r === void 0 ? void 0 : r.$primevue) || (n == null || (i = n.ctx) === null || i === void 0 || (i = i.appContext) === null || i === void 0 || (i = i.config) === null || i === void 0 || (i = i.globalProperties) === null || i === void 0 ? void 0 : i.$primevue)) === null || o === void 0 ? void 0 : o.config;
  },
  _getOptionValue: jt,
  _getPTValue: function() {
    var e, n, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, s = function() {
      var E = w._getOptionValue.apply(w, arguments);
      return le(E) || Dt(E) ? {
        class: E
      } : E;
    }, a = ((e = o.binding) === null || e === void 0 || (e = e.value) === null || e === void 0 ? void 0 : e.ptOptions) || ((n = o.$primevueConfig) === null || n === void 0 ? void 0 : n.ptOptions) || {}, d = a.mergeSections, c = d === void 0 ? !0 : d, m = a.mergeProps, y = m === void 0 ? !1 : m, f = u ? w._useDefaultPT(o, o.defaultPT(), s, i, l) : void 0, k = w._usePT(o, w._getPT(r, o.$name), s, i, T(T({}, l), {}, {
      global: f || {}
    })), v = w._getPTDatasets(o, i);
    return c || !c && k ? y ? w._mergeProps(o, y, f, k, v) : T(T(T({}, f), k), v) : T(T({}, k), v);
  },
  _getPTDatasets: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = "data-pc-";
    return T(T({}, n === "root" && qe({}, "".concat(o, "name"), ne(e.$name))), {}, qe({}, "".concat(o, "section"), ne(n)));
  },
  _getPT: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 ? arguments[2] : void 0, r = function(l) {
      var u, s = o ? o(l) : l, a = ne(n);
      return (u = s?.[a]) !== null && u !== void 0 ? u : s;
    };
    return e && Object.hasOwn(e, "_usept") ? {
      _usept: e._usept,
      originalValue: r(e.originalValue),
      value: r(e.value)
    } : r(e);
  },
  _usePT: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, o = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0, l = function(v) {
      return o(v, r, i);
    };
    if (n && Object.hasOwn(n, "_usept")) {
      var u, s = n._usept || ((u = e.$primevueConfig) === null || u === void 0 ? void 0 : u.ptOptions) || {}, a = s.mergeSections, d = a === void 0 ? !0 : a, c = s.mergeProps, m = c === void 0 ? !1 : c, y = l(n.originalValue), f = l(n.value);
      return y === void 0 && f === void 0 ? void 0 : le(f) ? f : le(y) ? y : d || !d && f ? m ? w._mergeProps(e, m, y, f) : T(T({}, y), f) : f;
    }
    return l(n);
  },
  _useDefaultPT: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0;
    return w._usePT(e, n, o, r, i);
  },
  _loadStyles: function() {
    var e, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0, i = w._getConfig(o, r), l = {
      nonce: i == null || (e = i.csp) === null || e === void 0 ? void 0 : e.nonce
    };
    w._loadCoreStyles(n, l), w._loadThemeStyles(n, l), w._loadScopedThemeStyles(n, l), w._removeThemeListeners(n), n.$loadStyles = function() {
      return w._loadThemeStyles(n, l);
    }, w._themeChangeListener(n.$loadStyles);
  },
  _loadCoreStyles: function() {
    var e, n, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    if (!oe.isStyleNameLoaded((e = o.$style) === null || e === void 0 ? void 0 : e.name) && (n = o.$style) !== null && n !== void 0 && n.name) {
      var i;
      D.loadCSS(r), (i = o.$style) === null || i === void 0 || i.loadCSS(r), oe.setLoadedStyleName(o.$style.name);
    }
  },
  _loadThemeStyles: function() {
    var e, n, o, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
    if (!(r != null && r.isUnstyled() || (r == null || (e = r.theme) === null || e === void 0 ? void 0 : e.call(r)) === "none")) {
      if (!U.isStyleNameLoaded("common")) {
        var l, u, s = ((l = r.$style) === null || l === void 0 || (u = l.getCommonTheme) === null || u === void 0 ? void 0 : u.call(l)) || {}, a = s.primitive, d = s.semantic, c = s.global, m = s.style;
        D.load(a?.css, T({
          name: "primitive-variables"
        }, i)), D.load(d?.css, T({
          name: "semantic-variables"
        }, i)), D.load(c?.css, T({
          name: "global-variables"
        }, i)), D.loadStyle(T({
          name: "global-style"
        }, i), m), U.setLoadedStyleName("common");
      }
      if (!U.isStyleNameLoaded((n = r.$style) === null || n === void 0 ? void 0 : n.name) && (o = r.$style) !== null && o !== void 0 && o.name) {
        var y, f, k, v, $ = ((y = r.$style) === null || y === void 0 || (f = y.getDirectiveTheme) === null || f === void 0 ? void 0 : f.call(y)) || {}, E = $.css, A = $.style;
        (k = r.$style) === null || k === void 0 || k.load(E, T({
          name: "".concat(r.$style.name, "-variables")
        }, i)), (v = r.$style) === null || v === void 0 || v.loadStyle(T({
          name: "".concat(r.$style.name, "-style")
        }, i), A), U.setLoadedStyleName(r.$style.name);
      }
      if (!U.isStyleNameLoaded("layer-order")) {
        var I, O, J = (I = r.$style) === null || I === void 0 || (O = I.getLayerOrderThemeCSS) === null || O === void 0 ? void 0 : O.call(I);
        D.load(J, T({
          name: "layer-order",
          first: !0
        }, i)), U.setLoadedStyleName("layer-order");
      }
    }
  },
  _loadScopedThemeStyles: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, o = e.preset();
    if (o && e.$attrSelector) {
      var r, i, l, u = ((r = e.$style) === null || r === void 0 || (i = r.getPresetTheme) === null || i === void 0 ? void 0 : i.call(r, o, "[".concat(e.$attrSelector, "]"))) || {}, s = u.css, a = (l = e.$style) === null || l === void 0 ? void 0 : l.load(s, T({
        name: "".concat(e.$attrSelector, "-").concat(e.$style.name)
      }, n));
      e.scopedStyleEl = a.el;
    }
  },
  _themeChangeListener: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    oe.clearLoadedStyleNames(), ee.on("theme:change", e);
  },
  _removeThemeListeners: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ee.off("theme:change", e.$loadStyles), e.$loadStyles = void 0;
  },
  _hook: function(e, n, o, r, i, l) {
    var u, s, a = "on".concat(gn(n)), d = w._getConfig(r, i), c = o?.$instance, m = w._usePT(c, w._getPT(r == null || (u = r.value) === null || u === void 0 ? void 0 : u.pt, e), w._getOptionValue, "hooks.".concat(a)), y = w._useDefaultPT(c, d == null || (s = d.pt) === null || s === void 0 || (s = s.directives) === null || s === void 0 ? void 0 : s[e], w._getOptionValue, "hooks.".concat(a)), f = {
      el: o,
      binding: r,
      vnode: i,
      prevVnode: l
    };
    m?.(c, f), y?.(c, f);
  },
  /* eslint-disable-next-line no-unused-vars */
  _mergeProps: function() {
    for (var e = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
      o[r - 2] = arguments[r];
    return Vt(e) ? e.apply(void 0, o) : b.apply(void 0, o);
  },
  _extend: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = function(u, s, a, d, c) {
      var m, y, f, k;
      s._$instances = s._$instances || {};
      var v = w._getConfig(a, d), $ = s._$instances[e] || {}, E = se($) ? T(T({}, n), n?.methods) : {};
      s._$instances[e] = T(T({}, $), {}, {
        /* new instance variables to pass in directive methods */
        $name: e,
        $host: s,
        $binding: a,
        $modifiers: a?.modifiers,
        $value: a?.value,
        $el: $.$el || s || void 0,
        $style: T({
          classes: void 0,
          inlineStyles: void 0,
          load: function() {
          },
          loadCSS: function() {
          },
          loadStyle: function() {
          }
        }, n?.style),
        $primevueConfig: v,
        $attrSelector: (m = s.$pd) === null || m === void 0 || (m = m[e]) === null || m === void 0 ? void 0 : m.attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return w._getPT(v?.pt, void 0, function(I) {
            var O;
            return I == null || (O = I.directives) === null || O === void 0 ? void 0 : O[e];
          });
        },
        isUnstyled: function() {
          var I, O;
          return ((I = s._$instances[e]) === null || I === void 0 || (I = I.$binding) === null || I === void 0 || (I = I.value) === null || I === void 0 ? void 0 : I.unstyled) !== void 0 ? (O = s._$instances[e]) === null || O === void 0 || (O = O.$binding) === null || O === void 0 || (O = O.value) === null || O === void 0 ? void 0 : O.unstyled : v?.unstyled;
        },
        theme: function() {
          var I;
          return (I = s._$instances[e]) === null || I === void 0 || (I = I.$primevueConfig) === null || I === void 0 ? void 0 : I.theme;
        },
        preset: function() {
          var I;
          return (I = s._$instances[e]) === null || I === void 0 || (I = I.$binding) === null || I === void 0 || (I = I.value) === null || I === void 0 ? void 0 : I.dt;
        },
        /* instance's methods */
        ptm: function() {
          var I, O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", J = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return w._getPTValue(s._$instances[e], (I = s._$instances[e]) === null || I === void 0 || (I = I.$binding) === null || I === void 0 || (I = I.value) === null || I === void 0 ? void 0 : I.pt, O, T({}, J));
        },
        ptmo: function() {
          var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", J = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return w._getPTValue(s._$instances[e], I, O, J, !1);
        },
        cx: function() {
          var I, O, J = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", Ue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (I = s._$instances[e]) !== null && I !== void 0 && I.isUnstyled() ? void 0 : w._getOptionValue((O = s._$instances[e]) === null || O === void 0 || (O = O.$style) === null || O === void 0 ? void 0 : O.classes, J, T({}, Ue));
        },
        sx: function() {
          var I, O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", J = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, Ue = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return J ? w._getOptionValue((I = s._$instances[e]) === null || I === void 0 || (I = I.$style) === null || I === void 0 ? void 0 : I.inlineStyles, O, T({}, Ue)) : void 0;
        }
      }, E), s.$instance = s._$instances[e], (y = (f = s.$instance)[u]) === null || y === void 0 || y.call(f, s, a, d, c), s["$".concat(e)] = s.$instance, w._hook(e, u, s, a, d, c), s.$pd || (s.$pd = {}), s.$pd[e] = T(T({}, (k = s.$pd) === null || k === void 0 ? void 0 : k[e]), {}, {
        name: e,
        instance: s._$instances[e]
      });
    }, r = function(u) {
      var s, a, d, c = u._$instances[e], m = c?.watch, y = function(v) {
        var $, E = v.newValue, A = v.oldValue;
        return m == null || ($ = m.config) === null || $ === void 0 ? void 0 : $.call(c, E, A);
      }, f = function(v) {
        var $, E = v.newValue, A = v.oldValue;
        return m == null || ($ = m["config.ripple"]) === null || $ === void 0 ? void 0 : $.call(c, E, A);
      };
      c.$watchersCallback = {
        config: y,
        "config.ripple": f
      }, m == null || (s = m.config) === null || s === void 0 || s.call(c, c?.$primevueConfig), ze.on("config:change", y), m == null || (a = m["config.ripple"]) === null || a === void 0 || a.call(c, c == null || (d = c.$primevueConfig) === null || d === void 0 ? void 0 : d.ripple), ze.on("config:ripple:change", f);
    }, i = function(u) {
      var s = u._$instances[e].$watchersCallback;
      s && (ze.off("config:change", s.config), ze.off("config:ripple:change", s["config.ripple"]), u._$instances[e].$watchersCallback = void 0);
    };
    return {
      created: function(u, s, a, d) {
        u.$pd || (u.$pd = {}), u.$pd[e] = {
          name: e,
          attrSelector: On("pd")
        }, o("created", u, s, a, d);
      },
      beforeMount: function(u, s, a, d) {
        var c;
        w._loadStyles((c = u.$pd[e]) === null || c === void 0 ? void 0 : c.instance, s, a), o("beforeMount", u, s, a, d), r(u);
      },
      mounted: function(u, s, a, d) {
        var c;
        w._loadStyles((c = u.$pd[e]) === null || c === void 0 ? void 0 : c.instance, s, a), o("mounted", u, s, a, d);
      },
      beforeUpdate: function(u, s, a, d) {
        o("beforeUpdate", u, s, a, d);
      },
      updated: function(u, s, a, d) {
        var c;
        w._loadStyles((c = u.$pd[e]) === null || c === void 0 ? void 0 : c.instance, s, a), o("updated", u, s, a, d);
      },
      beforeUnmount: function(u, s, a, d) {
        var c;
        i(u), w._removeThemeListeners((c = u.$pd[e]) === null || c === void 0 ? void 0 : c.instance), o("beforeUnmount", u, s, a, d);
      },
      unmounted: function(u, s, a, d) {
        var c;
        (c = u.$pd[e]) === null || c === void 0 || (c = c.instance) === null || c === void 0 || (c = c.scopedStyleEl) === null || c === void 0 || (c = c.value) === null || c === void 0 || c.remove(), o("unmounted", u, s, a, d);
      }
    };
  },
  extend: function() {
    var e = w._getMeta.apply(w, arguments), n = kt(e, 2), o = n[0], r = n[1];
    return T({
      extend: function() {
        var l = w._getMeta.apply(w, arguments), u = kt(l, 2), s = u[0], a = u[1];
        return w.extend(s, T(T(T({}, r), r?.methods), a));
      }
    }, w._extend(o, r));
  }
}, po = `
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
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
`, mo = {
  root: "p-ink"
}, fo = D.extend({
  name: "ripple-directive",
  style: po,
  classes: mo
}), go = w.extend({
  style: fo
});
function $e(t) {
  "@babel/helpers - typeof";
  return $e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, $e(t);
}
function bo(t) {
  return ko(t) || yo(t) || vo(t) || ho();
}
function ho() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vo(t, e) {
  if (t) {
    if (typeof t == "string") return Ze(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ze(t, e) : void 0;
  }
}
function yo(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function ko(t) {
  if (Array.isArray(t)) return Ze(t);
}
function Ze(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function St(t, e, n) {
  return (e = $o(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function $o(t) {
  var e = Io(t, "string");
  return $e(e) == "symbol" ? e : e + "";
}
function Io(t, e) {
  if ($e(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if ($e(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Ne = go.extend("ripple", {
  watch: {
    "config.ripple": function(e) {
      e ? (this.createRipple(this.$host), this.bindEvents(this.$host), this.$host.setAttribute("data-pd-ripple", !0), this.$host.style.overflow = "hidden", this.$host.style.position = "relative") : (this.remove(this.$host), this.$host.removeAttribute("data-pd-ripple"));
    }
  },
  unmounted: function(e) {
    this.remove(e);
  },
  timeout: void 0,
  methods: {
    bindEvents: function(e) {
      e.addEventListener("mousedown", this.onMouseDown.bind(this));
    },
    unbindEvents: function(e) {
      e.removeEventListener("mousedown", this.onMouseDown.bind(this));
    },
    createRipple: function(e) {
      var n = this.getInk(e);
      n || (n = Nt("span", St(St({
        role: "presentation",
        "aria-hidden": !0,
        "data-p-ink": !0,
        "data-p-ink-active": !1,
        class: !this.isUnstyled() && this.cx("root"),
        onAnimationEnd: this.onAnimationEnd.bind(this)
      }, this.$attrSelector, ""), "p-bind", this.ptm("root"))), e.appendChild(n), this.$el = n);
    },
    remove: function(e) {
      var n = this.getInk(e);
      n && (this.$host.style.overflow = "", this.$host.style.position = "", this.unbindEvents(e), n.removeEventListener("animationend", this.onAnimationEnd), n.remove());
    },
    onMouseDown: function(e) {
      var n = this, o = e.currentTarget, r = this.getInk(o);
      if (!(!r || getComputedStyle(r, null).display === "none")) {
        if (!this.isUnstyled() && We(r, "p-ink-active"), r.setAttribute("data-p-ink-active", "false"), !ct(r) && !pt(r)) {
          var i = Math.max(ge(o), Ft(o));
          r.style.height = i + "px", r.style.width = i + "px";
        }
        var l = hn(o), u = e.pageX - l.left + document.body.scrollTop - pt(r) / 2, s = e.pageY - l.top + document.body.scrollLeft - ct(r) / 2;
        r.style.top = s + "px", r.style.left = u + "px", !this.isUnstyled() && Bt(r, "p-ink-active"), r.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          r && (!n.isUnstyled() && We(r, "p-ink-active"), r.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(e) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && We(e.currentTarget, "p-ink-active"), e.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(e) {
      return e && e.children ? bo(e.children).find(function(n) {
        return bn(n, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
}), So = `
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
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
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;
function Ie(t) {
  "@babel/helpers - typeof";
  return Ie = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ie(t);
}
function Y(t, e, n) {
  return (e = wo(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function wo(t) {
  var e = xo(t, "string");
  return Ie(e) == "symbol" ? e : e + "";
}
function xo(t, e) {
  if (Ie(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (Ie(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Co = {
  root: function(e) {
    var n = e.instance, o = e.props;
    return ["p-button p-component", Y(Y(Y(Y(Y(Y(Y(Y(Y({
      "p-button-icon-only": n.hasIcon && !o.label && !o.badge,
      "p-button-vertical": (o.iconPos === "top" || o.iconPos === "bottom") && o.label,
      "p-button-loading": o.loading,
      "p-button-link": o.link || o.variant === "link"
    }, "p-button-".concat(o.severity), o.severity), "p-button-raised", o.raised), "p-button-rounded", o.rounded), "p-button-text", o.text || o.variant === "text"), "p-button-outlined", o.outlined || o.variant === "outlined"), "p-button-sm", o.size === "small"), "p-button-lg", o.size === "large"), "p-button-plain", o.plain), "p-button-fluid", n.hasFluid)];
  },
  loadingIcon: "p-button-loading-icon",
  icon: function(e) {
    var n = e.props;
    return ["p-button-icon", Y({}, "p-button-icon-".concat(n.iconPos), n.label)];
  },
  label: "p-button-label"
}, Po = D.extend({
  name: "button",
  style: So,
  classes: Co
}), _o = {
  name: "BaseButton",
  extends: Z,
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
  style: Po,
  provide: function() {
    return {
      $pcButton: this,
      $parentInstance: this
    };
  }
};
function Se(t) {
  "@babel/helpers - typeof";
  return Se = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Se(t);
}
function B(t, e, n) {
  return (e = Lo(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Lo(t) {
  var e = To(t, "string");
  return Se(e) == "symbol" ? e : e + "";
}
function To(t, e) {
  if (Se(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (Se(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var R = {
  name: "Button",
  extends: _o,
  inheritAttrs: !1,
  inject: {
    $pcFluid: {
      default: null
    }
  },
  methods: {
    getPTOptions: function(e) {
      var n = e === "root" ? this.ptmi : this.ptm;
      return n(e, {
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
      return b(this.asAttrs, this.a11yAttrs, this.getPTOptions("root"));
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
      return se(this.fluid) ? !!this.$pcFluid : this.fluid;
    },
    dataP: function() {
      return Q(B(B(B(B(B(B(B(B(B(B({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge), "loading", this.loading), "fluid", this.hasFluid), "rounded", this.rounded), "raised", this.raised), "outlined", this.outlined || this.variant === "outlined"), "text", this.text || this.variant === "text"), "link", this.link || this.variant === "link"), "vertical", (this.iconPos === "top" || this.iconPos === "bottom") && this.label));
    },
    dataIconP: function() {
      return Q(B(B({}, this.iconPos, this.iconPos), this.size, this.size));
    },
    dataLabelP: function() {
      return Q(B(B({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge));
    }
  },
  components: {
    SpinnerIcon: Jt,
    Badge: Qt
  },
  directives: {
    ripple: Ne
  }
}, Eo = ["data-p"], Oo = ["data-p"];
function zo(t, e, n, o, r, i) {
  var l = G("SpinnerIcon"), u = G("Badge"), s = je("ripple");
  return t.asChild ? _(t.$slots, "default", {
    key: 1,
    class: X(t.cx("root")),
    a11yAttrs: i.a11yAttrs
  }) : Ve((p(), C(ae(t.as), b({
    key: 0,
    class: t.cx("root"),
    "data-p": i.dataP
  }, i.attrs), {
    default: S(function() {
      return [_(t.$slots, "default", {}, function() {
        return [t.loading ? _(t.$slots, "loadingicon", b({
          key: 0,
          class: [t.cx("loadingIcon"), t.cx("icon")]
        }, t.ptm("loadingIcon")), function() {
          return [t.loadingIcon ? (p(), h("span", b({
            key: 0,
            class: [t.cx("loadingIcon"), t.cx("icon"), t.loadingIcon]
          }, t.ptm("loadingIcon")), null, 16)) : (p(), C(l, b({
            key: 1,
            class: [t.cx("loadingIcon"), t.cx("icon")],
            spin: ""
          }, t.ptm("loadingIcon")), null, 16, ["class"]))];
        }) : _(t.$slots, "icon", b({
          key: 1,
          class: [t.cx("icon")]
        }, t.ptm("icon")), function() {
          return [t.icon ? (p(), h("span", b({
            key: 0,
            class: [t.cx("icon"), t.icon, t.iconClass],
            "data-p": i.dataIconP
          }, t.ptm("icon")), null, 16, Eo)) : x("", !0)];
        }), t.label ? (p(), h("span", b({
          key: 2,
          class: t.cx("label")
        }, t.ptm("label"), {
          "data-p": i.dataLabelP
        }), F(t.label), 17, Oo)) : x("", !0), t.badge ? (p(), C(u, {
          key: 3,
          value: t.badge,
          class: X(t.badgeClass),
          severity: t.badgeSeverity,
          unstyled: t.unstyled,
          pt: t.ptm("pcBadge")
        }, null, 8, ["value", "class", "severity", "unstyled", "pt"])) : x("", !0)];
      })];
    }),
    _: 3
  }, 16, ["class", "data-p"])), [[s]]);
}
R.render = zo;
var Ao = `
    .p-progressspinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progressspinner::before {
        content: '';
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
        stroke: dt('progressspinner.colorOne');
        animation:
            p-progressspinner-dash 1.5s ease-in-out infinite,
            p-progressspinner-color 6s ease-in-out infinite;
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
            stroke: dt('progressspinner.color.one');
        }
        40% {
            stroke: dt('progressspinner.color.two');
        }
        66% {
            stroke: dt('progressspinner.color.three');
        }
        80%,
        90% {
            stroke: dt('progressspinner.color.four');
        }
    }
`, Mo = {
  root: "p-progressspinner",
  spin: "p-progressspinner-spin",
  circle: "p-progressspinner-circle"
}, Do = D.extend({
  name: "progressspinner",
  style: Ao,
  classes: Mo
}), jo = {
  name: "BaseProgressSpinner",
  extends: Z,
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
  style: Do,
  provide: function() {
    return {
      $pcProgressSpinner: this,
      $parentInstance: this
    };
  }
}, it = {
  name: "ProgressSpinner",
  extends: jo,
  inheritAttrs: !1,
  computed: {
    svgStyle: function() {
      return {
        "animation-duration": this.animationDuration
      };
    }
  }
}, Vo = ["fill", "stroke-width"];
function Fo(t, e, n, o, r, i) {
  return p(), h("div", b({
    class: t.cx("root"),
    role: "progressbar"
  }, t.ptmi("root")), [(p(), h("svg", b({
    class: t.cx("spin"),
    viewBox: "25 25 50 50",
    style: i.svgStyle
  }, t.ptm("spin")), [g("circle", b({
    class: t.cx("circle"),
    cx: "50",
    cy: "50",
    r: "20",
    fill: t.fill,
    "stroke-width": t.strokeWidth,
    strokeMiterlimit: "10"
  }, t.ptm("circle")), null, 16, Vo)], 16))], 16);
}
it.render = Fo;
const Ke = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, r] of e)
    n[o] = r;
  return n;
}, Bo = {}, No = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 500 450",
  style: { "enable-background": "new 0 0 500 450" }
};
function Ko(t, e) {
  return p(), h("div", null, [
    (p(), h("svg", No, [...e[0] || (e[0] = [
      At(`<g id="BACKGROUND"><rect style="fill:none;stroke-miterlimit:10;" width="500" height="450"></rect><g><polygon style="fill:#cad2f9;" points="388.296,114.275 382.231,114.275 382.231,108.21 377.927,108.21 377.927,114.275
			371.863,114.275 371.863,118.579 377.927,118.579 377.927,124.645 382.231,124.645 382.231,118.579 388.296,118.579 		"></polygon><polygon style="fill:#cad2f9;" points="351.733,91.401 347.335,91.401 347.335,87.002 344.213,87.002 344.213,91.401
			339.815,91.401 339.815,94.523 344.213,94.523 344.213,98.921 347.335,98.921 347.335,94.523 351.733,94.523 		"></polygon><polygon style="fill:#cad2f9;" points="161.694,162.728 157.295,162.728 157.295,158.329 154.174,158.329 154.174,162.728
			149.776,162.728 149.776,165.849 154.174,165.849 154.174,170.248 157.295,170.248 157.295,165.849 161.694,165.849 		"></polygon><polygon style="fill:#cad2f9;" points="42.831,261.986 36.766,261.986 36.766,255.92 32.462,255.92 32.462,261.986
			26.398,261.986 26.398,266.29 32.462,266.29 32.462,272.355 36.766,272.355 36.766,266.29 42.831,266.29 		"></polygon><polygon style="fill:#cad2f9;" points="456.824,156.768 452.426,156.768 452.426,152.37 449.304,152.37 449.304,156.768
			444.906,156.768 444.906,159.89 449.304,159.89 449.304,164.288 452.426,164.288 452.426,159.89 456.824,159.89 		"></polygon></g><g><circle style="fill:#eef1ff;" cx="338.256" cy="124.475" r="3.793"></circle><circle style="fill:#eef1ff;" cx="402.233" cy="87.002" r="2.003"></circle><path style="fill:#eef1ff;" d="M232.298,186.72c0,1.106-0.897,2.003-2.003,2.003c-1.106,0-2.003-0.897-2.003-2.003
			c0-1.106,0.897-2.003,2.003-2.003C231.401,184.717,232.298,185.614,232.298,186.72z"></path><path style="fill:#eef1ff;" d="M433.285,120.359c0,2.095-1.698,3.793-3.793,3.793c-2.095,0-3.793-1.698-3.793-3.793
			c0-2.095,1.698-3.793,3.793-3.793C431.587,116.565,433.285,118.264,433.285,120.359z"></path><path style="fill:#eef1ff;" d="M201.698,153.125c0,1.106-0.897,2.003-2.003,2.003c-1.106,0-2.003-0.897-2.003-2.003
			c0-1.106,0.897-2.003,2.003-2.003C200.801,151.122,201.698,152.018,201.698,153.125z"></path><path style="fill:#eef1ff;" d="M144.638,89.005c0,1.106-0.897,2.003-2.003,2.003s-2.003-0.897-2.003-2.003
			c0-1.106,0.897-2.003,2.003-2.003S144.638,87.899,144.638,89.005z"></path><path style="fill:#eef1ff;" d="M58.693,206.878c0,2.095-1.698,3.793-3.793,3.793c-2.095,0-3.793-1.698-3.793-3.793
			c0-2.095,1.698-3.793,3.793-3.793C56.994,203.085,58.693,204.783,58.693,206.878z"></path><circle style="fill:#eef1ff;" cx="158.065" cy="239.968" r="3.793"></circle><circle style="fill:#eef1ff;" cx="61.039" cy="108.787" r="3.793"></circle><path style="fill:#eef1ff;" d="M22.192,293.877c0,1.106-0.897,2.003-2.003,2.003c-1.106,0-2.003-0.897-2.003-2.003
			c0-1.106,0.897-2.003,2.003-2.003C21.296,291.874,22.192,292.771,22.192,293.877z"></path><path style="fill:#eef1ff;" d="M462.428,363.332c0,1.106-0.897,2.003-2.003,2.003c-1.106,0-2.003-0.897-2.003-2.003
			s0.897-2.003,2.003-2.003C461.532,361.329,462.428,362.225,462.428,363.332z"></path></g></g><g id="OBJECTS"><ellipse style="fill:#edf0fc;" cx="242.196" cy="405.066" rx="224.587" ry="29.935"></ellipse><g><path style="fill:#e2e6ff;" d="M439.884,234.492c12.715,3.679,30.948-4.96,25.898-14.796c-4.217-8.214-19.354,6.302-24.974,12.138
			c1.25-3.624,2.406-7.28,3.462-10.965c10.87-7.468,15.855-26.804,5.127-29.237c-9.197-2.086-7.534,19.789-6.68,27.438
			c-0.711,2.542-1.484,5.066-2.289,7.579c0.956-11.306-5.044-23.668-13.548-20.395c-9.735,3.747,7.885,24.446,10.978,27.966
			c-0.121,0.335-0.232,0.673-0.354,1.007c-1.439,3.934-2.999,7.826-4.674,11.667c1.744-11.042-3.084-23.457-11.712-21.018
			c-9.856,2.786,5.043,24.258,8.196,28.624c-1.421,2.905-2.908,5.778-4.483,8.603c-1.179,2.114-2.414,4.199-3.685,6.261
			c3.91-11.285,0.211-26.243-9.266-24.368c-10.234,2.024,3.579,25.433,6.02,29.426c-2.97,4.418-6.185,8.668-9.658,12.701
			c5.029-10.936,2.647-26.451-7.044-25.368c-10.11,1.13,0.858,24.435,3.354,29.475c-3.928,4.156-8.172,8.01-12.711,11.472
			c7.073-9.686,7.864-25.227-1.801-26.145c-10.055-0.956-4.241,23.75-2.774,29.432c-3.652,2.462-7.476,4.673-11.467,6.58
			c-1.414,0.676-2.845,1.314-4.294,1.91c-1.174,0.483-0.66,2.42,0.532,1.929c5.907-2.432,11.507-5.491,16.762-9.062
			c9.62,9.232,30.204,9.759,30.068-1.41c-0.111-9.164-19.828-3.084-27.585-0.336c4.024-2.92,7.836-6.142,11.409-9.625
			c1.258-1.226,2.477-2.49,3.677-3.771c11.322,6.994,31.468,3.289,29.057-7.588c-1.964-8.858-19.68,0.84-26.856,5.184
			c4.111-4.636,7.867-9.587,11.306-14.744c11.898,5.786,31.317,0.398,28.029-10.151c-2.679-8.594-19.283,2.318-26.171,7.306
			c0.839-1.32,1.661-2.65,2.46-3.993c2.542-4.27,4.882-8.656,7.053-13.126c12.316,5.01,31.527-1.936,27.375-12.258
			c-3.517-8.743-20.534,5.047-26.35,10.111c2.068-4.395,3.979-8.865,5.732-13.393C438.653,237.874,439.275,236.186,439.884,234.492z
			"></path><path style="fill:#e2e6ff;" d="M60.667,323.455c-0.688-13.218-14.822-27.617-22.461-19.624
			c-6.38,6.675,12.293,16.223,19.647,19.622c-3.833,0.006-7.666,0.111-11.494,0.32c-10.616-7.825-30.518-6.202-29.304,4.731
			c1.041,9.373,21.165,0.637,28.113-2.674c2.634-0.161,5.272-0.256,7.911-0.319c-10.996,2.8-20.711,12.517-14.833,19.479
			c6.728,7.971,20.515-15.456,22.829-19.531c0.356,0.004,0.712-0.001,1.068,0.005c4.189,0.072,8.376,0.271,12.554,0.596
			c-11.004,1.968-21.153,10.596-16.023,17.949c5.86,8.4,21.269-12.71,24.361-17.118c3.21,0.391,6.411,0.855,9.596,1.418
			c2.384,0.421,4.758,0.905,7.122,1.431c-11.943,0.001-24.864,8.395-19.99,16.735c5.264,9.007,22.858-11.711,25.832-15.325
			c5.147,1.359,10.215,3.005,15.163,4.966c-11.98-1.17-25.859,6.161-21.662,14.963c4.378,9.182,22.807-8.813,26.751-12.823
			c5.213,2.35,10.245,5.098,15.002,8.253c-11.468-3.511-26.411,0.831-24.114,10.264c2.39,9.813,23.829-3.771,28.717-7.018
			c3.523,2.645,6.863,5.534,9.973,8.68c1.101,1.114,2.173,2.258,3.211,3.432c0.841,0.951,2.502-0.169,1.648-1.134
			c-4.233-4.785-8.956-9.074-14.052-12.87c5.572-12.113-0.671-31.735-11.18-27.948c-8.622,3.106,3.579,19.744,8.716,26.174
			c-4.077-2.846-8.369-5.393-12.83-7.628c-1.57-0.787-3.163-1.525-4.767-2.239c2.901-12.988-7.198-30.81-16.685-24.969
			c-7.727,4.757,7.239,18.32,13.693,23.677c-5.727-2.366-11.635-4.293-17.634-5.854c1.57-13.137-9.88-29.721-18.77-23.159
			c-7.242,5.345,8.505,17.46,15.474,22.335c-1.522-0.36-3.048-0.701-4.578-1.017c-4.867-1.003-9.778-1.778-14.712-2.366
			c0.7-13.277-12.154-29.154-20.547-21.851c-7.109,6.186,11.494,17.749,18.183,21.585c-4.83-0.515-9.679-0.856-14.531-1.03
			C64.265,323.51,62.466,323.475,60.667,323.455z"></path></g><g><path style="fill:#eb725f;" d="M445.79,280.51c3.036-1.819,6.182-3.455,9.411-4.9c15.272,2.361,27.796-6.748,27.796-6.748
			c-17.311-5.237-25.483,2.342-27.957,5.401c-1.024,0.465-2.04,0.938-3.035,1.422c-4.783,2.329-9.341,5.085-13.624,8.208
			c9.238-10.12,10.037-23.336,10.037-23.336c-16.517,10.999-14.131,23.318-13.402,25.909c-3.712,2.984-7.181,6.265-10.369,9.808
			c6.103-13.448,1.562-27.335,1.562-27.335c-11.183,16.121-4.707,26.646-2.982,28.951c-2.382,2.781-4.599,5.708-6.617,8.782
			c-0.605,0.922-1.171,1.867-1.74,2.811c2.729-14.285-4.64-26.566-4.64-26.566c-7.157,17.791,0.944,26.618,3.362,28.749
			c-2.518,4.453-4.649,9.11-6.427,13.905c1.826-13.501-4.932-24.767-4.932-24.767c-7.301,18.15,1.281,26.976,3.506,28.875
			c-1.16,3.579-2.156,7.213-2.952,10.89c-0.177,0.816,1.077,1.165,1.254,0.346c1.258-5.816,2.992-11.503,5.188-16.98
			c15.692-0.616,26.289-12.341,26.289-12.341c-14.601-1.269-21.598,4.465-24.681,8.549c1.763-3.917,3.785-7.703,6.06-11.333
			c15.365,3.011,28.356-5.884,28.356-5.884c-14.417-4.811-22.635-0.393-26.412,2.913c2.386-3.493,5.026-6.817,7.921-9.944
			c14.835,4.798,28.745-2.397,28.745-2.397c-12.438-5.935-20.748-3.712-25.288-1.145c0.896-0.859,1.814-1.701,2.754-2.524
			c2.641-2.312,5.432-4.462,8.34-6.448c13.728,7.554,28.821,3.025,28.821,3.025C459.226,278.436,450.77,278.903,445.79,280.51z"></path><path style="fill:#eb725f;" d="M56.121,373.32c-3.54,0.012-7.08-0.189-10.594-0.598c-11.921-9.834-27.341-8.404-27.341-8.404
			c12.204,13.348,23.101,11.009,26.791,9.645c1.118,0.124,2.232,0.236,3.335,0.328c5.302,0.442,10.628,0.402,15.905-0.093
			c-13.113,3.977-20.553,14.929-20.553,14.929c19.818-1.014,24.063-12.821,24.76-15.421c4.716-0.668,9.374-1.715,13.925-3.131
			c-12.118,8.441-15.312,22.698-15.312,22.698c17.851-8.142,17.663-20.499,17.358-23.361c3.468-1.174,6.871-2.556,10.176-4.167
			c0.992-0.483,1.961-1.007,2.932-1.526c-9.645,10.884-9.588,25.206-9.588,25.206c15.243-11.635,12.792-23.362,11.802-26.43
			c4.441-2.541,8.652-5.455,12.63-8.668c-8.469,10.672-8.417,23.809-8.417,23.809c15.551-11.87,12.685-23.842,11.743-26.611
			c2.826-2.483,5.539-5.098,8.102-7.852c0.569-0.611-0.331-1.552-0.901-0.938c-4.054,4.356-8.45,8.359-13.136,11.944
			c-13.804-7.49-28.903-2.827-28.903-2.827c11.902,8.552,20.846,7.199,25.584,5.264c-3.517,2.466-7.19,4.687-11,6.645
			c-11.669-10.44-27.38-9.433-27.38-9.433c9.933,11.503,19.255,11.905,24.192,10.994c-3.836,1.783-7.804,3.291-11.89,4.499
			c-10.3-11.705-25.933-12.63-25.933-12.63c7.658,11.458,15.937,13.794,21.152,13.908c-1.21,0.281-2.429,0.536-3.657,0.762
			c-3.452,0.638-6.95,1.06-10.464,1.281c-7.94-13.508-23.228-17.328-23.228-17.328C43.512,368.237,51.019,372.157,56.121,373.32z"></path></g><path style="fill:#92a6f4;" d="M413.055,404.825c0,2.422-1.981,4.403-4.403,4.403H253.535c-2.422,0-4.403-1.982-4.403-4.403
		V175.303c0-2.422,1.981-4.403,4.403-4.403h155.117c2.422,0,4.403,1.981,4.403,4.403V404.825z"></path><rect x="256.838" y="183.734" style="fill:#d0dbf7;" width="148.512" height="203.853"></rect><g><g><g><g><rect x="273.891" y="198.964" style="fill:#f5f9ff;" width="114.404" height="172.382"></rect><rect x="273.891" y="198.964" style="fill:#e2e6ff;" width="114.404" height="10.526"></rect></g><g><path style="fill:#eb725f;" d="M283.076,204.47c0,1.33-1.078,2.409-2.409,2.409c-1.33,0-2.409-1.078-2.409-2.409
						c0-1.33,1.078-2.409,2.409-2.409C281.997,202.061,283.076,203.139,283.076,204.47z"></path><path style="fill:#f9ab43;" d="M291.186,204.47c0,1.33-1.078,2.409-2.409,2.409c-1.33,0-2.409-1.078-2.409-2.409
						c0-1.33,1.078-2.409,2.409-2.409C290.108,202.061,291.186,203.139,291.186,204.47z"></path><path style="fill:#6e7fdd;" d="M299.297,204.47c0,1.33-1.078,2.409-2.409,2.409c-1.33,0-2.409-1.078-2.409-2.409
						c0-1.33,1.078-2.409,2.409-2.409C298.219,202.061,299.297,203.139,299.297,204.47z"></path></g></g></g><polygon style="fill:#e2e6ff;" points="363.947,266.887 354.272,257.212 331.094,280.389 307.915,257.212 298.241,266.887
			321.419,290.064 298.241,313.241 307.915,322.915 331.094,299.738 354.272,322.915 363.947,313.241 340.768,290.064 		"></polygon></g><g><path style="fill:#6e7fdd;" d="M311.811,402.044c0,2.283-1.868,4.15-4.15,4.15H90.156c-2.283,0-4.15-1.867-4.15-4.15V261.362
			c0-2.283,1.868-4.15,4.15-4.15h217.505c2.283,0,4.15,1.868,4.15,4.15V402.044z"></path><rect x="92.609" y="264.138" style="fill:#d0dbf7;" width="212.6" height="135.131"></rect><path style="fill:#6e7fdd;" d="M71.336,392.552v11.987c0,2.579,2.11,4.689,4.689,4.689h245.767c2.579,0,4.689-2.11,4.689-4.689
			v-11.987H71.336z"></path><path style="fill:#92a6f4;" d="M161.13,392.552v3.55c0,0.764,0.625,1.389,1.389,1.389h72.781c0.764,0,1.389-0.625,1.389-1.389
			v-3.55H161.13z"></path></g><g><g><path style="fill:#f9ab43;" d="M435.318,383.056c-0.684,3.081-3.826,5.601-6.982,5.601h-66.928c-3.156,0-6.298-2.521-6.982-5.601
				L339.5,315.855c-0.684-3.081,1.338-5.601,4.494-5.601h101.757c3.156,0,5.178,2.521,4.494,5.601L435.318,383.056z"></path><path style="fill:#ffcf74;" d="M409.788,318.263c-3.156,0-6.606,2.431-7.668,5.403l-3.182,8.907
				c-1.062,2.972-4.512,5.403-7.668,5.403h-48.575c-3.156,0-5.068,2.494-4.25,5.542l16.151,60.168
				c0.818,3.048,4.069,5.542,7.225,5.542h66.311c3.156,0,6.407-2.494,7.225-5.542l16.151-60.168
				c0.818-3.048,2.356-7.973,3.418-10.945l3.182-8.907c1.062-2.972-0.652-5.403-3.808-5.403H409.788z"></path><path style="opacity:0.1;fill:#0046a0;" d="M454.3,318.263h-17.898c2.154,6.196,3.339,12.82,3.339,19.714
				c0,34.296-28.881,62.098-64.508,62.098c-7.979,0-15.615-1.404-22.668-3.953l2.031,7.565c0.818,3.048,4.069,5.542,7.225,5.542
				h66.311c3.156,0,6.407-2.494,7.225-5.542l16.151-60.168c0.818-3.048,2.356-7.973,3.418-10.945l3.182-8.907
				C459.169,320.694,457.456,318.263,454.3,318.263z"></path></g><g><g><path style="fill:#eb725f;" d="M388.296,363.332c0,3.33-1.935,6.03-4.321,6.03s-4.321-2.7-4.321-6.03
					c0-3.33,1.935-6.03,4.321-6.03S388.296,360.001,388.296,363.332z"></path><path style="fill:#eb725f;" d="M417.026,363.332c0,3.33-1.935,6.03-4.322,6.03c-2.387,0-4.321-2.7-4.321-6.03
					c0-3.33,1.935-6.03,4.321-6.03C415.091,357.302,417.026,360.001,417.026,363.332z"></path></g><g><path style="fill:#eb725f;" d="M388.435,380.193c1.482-1.623,3.543-2.898,5.594-3.638c5.19-1.871,10.207,0.084,14.161,3.638
					c1.056,0.949,2.624-0.61,1.563-1.563c-4.382-3.94-10.068-6.254-15.897-4.349c-2.557,0.835-5.153,2.343-6.984,4.349
					C385.914,379.679,387.474,381.246,388.435,380.193L388.435,380.193z"></path></g></g></g><g><g><g><g><rect x="106.777" y="309.547" style="fill:#f8faff;" width="97.916" height="72.23"></rect><rect x="106.777" y="309.547" style="fill:#e2e6ff;" width="97.916" height="9.009"></rect></g><g><path style="fill:#eb725f;" d="M114.637,314.259c0,1.139-0.923,2.062-2.062,2.062c-1.138,0-2.061-0.923-2.061-2.062
						s0.923-2.062,2.061-2.062C113.714,312.198,114.637,313.121,114.637,314.259z"></path><path style="fill:#f9ab43;" d="M121.579,314.259c0,1.139-0.923,2.062-2.062,2.062c-1.139,0-2.062-0.923-2.062-2.062
						s0.923-2.062,2.062-2.062C120.656,312.198,121.579,313.121,121.579,314.259z"></path><path style="fill:#6e7fdd;" d="M128.521,314.259c0,1.139-0.923,2.062-2.062,2.062c-1.139,0-2.062-0.923-2.062-2.062
						s0.923-2.062,2.062-2.062C127.598,312.198,128.521,313.121,128.521,314.259z"></path></g></g><g><path style="fill:#d0dbf7;" d="M150.031,354.436c0-3.019,1.199-5.371,3.595-7.059l1.154-0.798
					c1.095-0.71,1.857-1.294,2.286-1.753c0.428-0.458,0.644-1.028,0.644-1.709c0-1.716-1.436-2.575-4.307-2.575
					c-1.331,0-2.708,0.178-4.128,0.533c-1.42,0.355-2.767,0.859-4.039,1.509v-6.836c2.722-1.243,5.771-1.864,9.144-1.864
					c3.64,0,6.525,0.762,8.655,2.286c2.131,1.524,3.196,3.632,3.196,6.325c0,1.509-0.34,2.73-1.02,3.662
					c-0.681,0.932-1.835,1.975-3.462,3.129c-1.095,0.799-1.895,1.413-2.397,1.843c-0.503,0.429-0.88,0.91-1.131,1.442
					c-0.252,0.533-0.377,1.184-0.377,1.953v0.844h-7.812V354.436z M150.941,365.067c-0.785-0.784-1.177-1.753-1.177-2.908
					c0-1.183,0.392-2.16,1.177-2.929c0.783-0.769,1.768-1.154,2.951-1.154c1.154,0,2.138,0.392,2.952,1.176
					c0.813,0.785,1.221,1.754,1.221,2.908c0,1.154-0.408,2.124-1.221,2.908c-0.814,0.784-1.798,1.176-2.952,1.176
					C152.709,366.243,151.724,365.851,150.941,365.067z"></path></g></g><g><g><g><rect x="191.835" y="279.612" style="fill:#f5f9ff;" width="97.916" height="72.23"></rect><rect x="191.835" y="279.612" style="fill:#e2e6ff;" width="97.916" height="9.009"></rect></g><g><circle style="fill:#eb725f;" cx="197.633" cy="284.325" r="2.062"></circle><path style="fill:#f9ab43;" d="M206.637,284.325c0,1.139-0.923,2.062-2.062,2.062c-1.139,0-2.062-0.923-2.062-2.062
						c0-1.139,0.923-2.062,2.062-2.062C205.714,282.263,206.637,283.186,206.637,284.325z"></path><circle style="fill:#6e7fdd;" cx="211.517" cy="284.325" r="2.062"></circle></g></g><g><path style="fill:#d0dbf7;" d="M235.089,324.501c0-3.019,1.199-5.371,3.595-7.059l1.154-0.798
					c1.095-0.71,1.857-1.294,2.286-1.753c0.428-0.458,0.644-1.028,0.644-1.709c0-1.716-1.436-2.575-4.307-2.575
					c-1.331,0-2.707,0.178-4.128,0.533c-1.42,0.355-2.767,0.859-4.039,1.509v-6.836c2.722-1.243,5.771-1.864,9.144-1.864
					c3.64,0,6.525,0.762,8.655,2.286c2.131,1.524,3.196,3.632,3.196,6.325c0,1.509-0.34,2.73-1.02,3.662
					c-0.681,0.932-1.835,1.975-3.462,3.129c-1.095,0.799-1.895,1.413-2.397,1.843c-0.503,0.429-0.88,0.909-1.131,1.442
					c-0.252,0.533-0.377,1.184-0.377,1.953v0.844h-7.812V324.501z M235.999,335.132c-0.785-0.784-1.177-1.753-1.177-2.908
					c0-1.183,0.392-2.16,1.177-2.929c0.783-0.77,1.768-1.154,2.951-1.154c1.154,0,2.138,0.392,2.952,1.176
					c0.813,0.785,1.221,1.754,1.221,2.908c0,1.154-0.408,2.124-1.221,2.908c-0.814,0.784-1.798,1.176-2.952,1.176
					C237.767,336.308,236.782,335.916,235.999,335.132z"></path></g></g></g><g><g><path style="fill:#e2e6ff;" d="M217.414,190.637l-15.505,4.212l-4.246-15.63l-31.646,8.597l14.776,54.39l47.213-12.827
				l-10.513-38.696L217.414,190.637z M201.527,221.919c-0.435,0.727-1.07,1.204-1.905,1.431c-0.856,0.233-1.646,0.143-2.367-0.271
				c-0.722-0.413-1.196-1.037-1.423-1.872c-0.233-0.856-0.141-1.64,0.276-2.351c0.415-0.711,1.052-1.183,1.909-1.415
				c0.835-0.227,1.624-0.137,2.367,0.271c0.743,0.408,1.228,1.029,1.455,1.864C202.066,220.41,201.961,221.192,201.527,221.919z
				 M203.865,206.593c-0.31,0.808-0.94,1.79-1.89,2.945c-0.635,0.794-1.093,1.395-1.373,1.804c-0.279,0.41-0.458,0.831-0.535,1.266
				c-0.077,0.435-0.04,0.931,0.111,1.487l0.166,0.611l-5.652,1.536l-0.183-0.674c-0.593-2.184-0.188-4.122,1.214-5.814l0.678-0.804
				c0.653-0.729,1.09-1.301,1.31-1.718c0.22-0.416,0.264-0.87,0.13-1.363c-0.337-1.242-1.545-1.581-3.622-1.016
				c-0.964,0.262-1.924,0.661-2.882,1.197c-0.957,0.536-1.833,1.165-2.626,1.885l-1.344-4.946c1.725-1.434,3.809-2.483,6.25-3.146
				c2.633-0.715,4.871-0.731,6.712-0.048c1.841,0.684,3.026,2,3.555,3.948C204.179,204.835,204.173,205.784,203.865,206.593z"></path><polygon style="fill:#e2e6ff;" points="200.675,179.89 203.821,191.469 215.306,188.349 			"></polygon></g><g><path style="fill:#e2e6ff;" d="M305.325,128.659l-20.874-6.685l6.739-21.043l-42.604-13.643l-23.449,73.225l63.563,20.355
				l16.683-52.096L305.325,128.659z M263.925,152.676c-1.038,0.51-2.118,0.585-3.242,0.225c-1.152-0.369-1.99-1.058-2.508-2.066
				c-0.52-1.008-0.599-2.075-0.239-3.199c0.369-1.152,1.055-1.982,2.06-2.487c1.003-0.505,2.082-0.573,3.235-0.204
				c1.124,0.36,1.96,1.049,2.509,2.066c0.547,1.018,0.642,2.089,0.282,3.213C265.661,151.349,264.962,152.166,263.925,152.676z
				 M277.974,136.867c-0.955,0.695-2.404,1.351-4.349,1.968c-1.316,0.437-2.286,0.786-2.91,1.047
				c-0.624,0.261-1.141,0.611-1.552,1.052c-0.412,0.441-0.737,1.036-0.977,1.784l-0.263,0.822l-7.61-2.437l0.291-0.908
				c0.942-2.941,2.843-4.858,5.704-5.754l1.373-0.418c1.288-0.35,2.213-0.681,2.774-0.994c0.56-0.313,0.948-0.801,1.16-1.464
				c0.535-1.672-0.596-2.956-3.392-3.851c-1.297-0.415-2.693-0.671-4.188-0.769c-1.493-0.097-2.963-0.027-4.405,0.21l2.132-6.659
				c3.039-0.361,6.202-0.015,9.488,1.037c3.545,1.135,6.119,2.778,7.718,4.927c1.6,2.15,1.98,4.535,1.14,7.158
				C279.64,135.089,278.928,136.171,277.974,136.867z"></path><polygon style="fill:#e2e6ff;" points="294.139,103.935 289.148,119.523 304.61,124.475 			"></polygon></g></g><g><g><path style="fill:#eb725f;" d="M429.492,207.762c0,4.578-3.746,8.324-8.324,8.324h-89.209c-4.578,0-8.324-3.746-8.324-8.324
				V151.88c0-4.578,3.746-8.324,8.324-8.324h89.209c4.578,0,8.324,3.746,8.324,8.324V207.762z"></path><g><g><path style="fill:#ffffff;" d="M400.808,204.454h-48.489c-2.734,0-4.894-1.093-5.925-2.997c-1.031-1.905-0.766-4.31,0.728-6.6
						v-0.001l23.618-36.184c1.446-2.215,3.569-3.486,5.823-3.486c2.255,0,4.377,1.271,5.823,3.485l23.618,36.185
						c1.494,2.289,1.759,4.695,0.728,6.6C405.701,203.362,403.542,204.454,400.808,204.454z M351.416,197.66
						c-0.53,0.812-0.537,1.282-0.509,1.364c0.044,0.051,0.443,0.303,1.412,0.303h48.489c0.969,0,1.367-0.252,1.42-0.319
						c0.019-0.066,0.012-0.537-0.518-1.348l-23.618-36.185c-0.474-0.727-1.046-1.161-1.529-1.161c-0.483,0-1.055,0.434-1.53,1.161
						L351.416,197.66z"></path></g><g><path style="fill:#ffffff;" d="M375.078,194.643c-0.391-0.391-0.587-0.875-0.587-1.451c0-0.576,0.196-1.059,0.587-1.451
						c0.392-0.392,0.875-0.588,1.451-0.588c0.576,0,1.065,0.196,1.469,0.588c0.402,0.392,0.604,0.875,0.604,1.451
						c0,0.576-0.202,1.059-0.604,1.451c-0.404,0.391-0.893,0.587-1.469,0.587C375.953,195.23,375.47,195.034,375.078,194.643z
						 M373.869,170.566h5.388l-1.001,17.237h-3.386L373.869,170.566z"></path></g></g></g><g><path style="fill:#eb725f;" d="M142.635,278.816c0,3.794-3.104,6.899-6.899,6.899H61.799c-3.794,0-6.899-3.105-6.899-6.899V232.5
				c0-3.794,3.105-6.899,6.899-6.899h73.938c3.795,0,6.899,3.105,6.899,6.899V278.816z"></path><path style="fill:#ffffff;" d="M98.767,231.647c-13.239,0-24.01,10.771-24.01,24.01c0,13.239,10.771,24.011,24.01,24.011
				s24.01-10.771,24.01-24.011C122.778,242.418,112.007,231.647,98.767,231.647z M98.767,236.175c4.557,0,8.751,1.577,12.073,4.208
				L83.493,267.73c-2.631-3.322-4.208-7.516-4.208-12.073C79.285,244.915,88.024,236.175,98.767,236.175z M98.767,275.141
				c-4.557,0-8.751-1.577-12.073-4.209l27.347-27.347c2.632,3.322,4.209,7.516,4.209,12.073
				C118.25,266.4,109.51,275.141,98.767,275.141z"></path></g></g><g><g><g><g><rect x="260.103" y="388.614" transform="matrix(0.9023 -0.4312 0.4312 0.9023 -140.699 163.7569)" style="fill:#eb725f;" width="61.579" height="7.283"></rect></g><g><rect x="296.912" y="380.271" transform="matrix(0.9023 -0.4312 0.4312 0.9023 -135.3933 170.4643)" style="fill:#ffcf74;" width="22.88" height="7.283"></rect></g></g><g><path style="fill:#eb725f;" d="M370.83,354.057c-7.388-15.461-25.911-22.005-41.372-14.617
					c-15.461,7.388-22.005,25.911-14.617,41.372c7.388,15.461,25.911,22.005,41.372,14.617
					C371.674,388.04,378.218,369.518,370.83,354.057z M320.943,377.896c-5.778-12.091-0.66-26.576,11.431-32.353
					c12.091-5.778,26.576-0.66,32.353,11.431c5.778,12.091,0.66,26.576-11.431,32.353
					C341.206,395.104,326.721,389.986,320.943,377.896z"></path><ellipse transform="matrix(0.9754 -0.2206 0.2206 0.9754 -72.6168 84.6914)" style="opacity:0.3;fill:#f5f9ff;" cx="342.835" cy="367.434" rx="24.263" ry="24.263"></ellipse></g></g><path style="fill:#ffffff;" d="M342.413,361.734c-3.52,1.682-7.738,0.192-9.42-3.328c-1.682-3.52-0.192-7.738,3.328-9.42
			c3.52-1.682,7.738-0.192,9.42,3.328C347.424,355.834,345.934,360.052,342.413,361.734z"></path></g><g><g><path style="fill:#d0dbf7;" d="M181.061,125.511c0.982-4.219,3.424-7.118,7.322-8.697l1.873-0.74
				c1.762-0.636,3.017-1.205,3.766-1.706c0.748-0.501,1.235-1.228,1.456-2.179c0.559-2.399-1.17-4.066-5.182-5
				c-1.861-0.433-3.842-0.632-5.944-0.598c-2.1,0.034-4.146,0.3-6.137,0.795l2.224-9.555c4.209-0.851,8.673-0.728,13.388,0.37
				c5.088,1.184,8.874,3.189,11.355,6.012c2.483,2.824,3.285,6.118,2.409,9.881c-0.491,2.11-1.364,3.705-2.618,4.787
				c-1.256,1.081-3.208,2.163-5.858,3.247c-1.791,0.761-3.108,1.359-3.951,1.796c-0.843,0.436-1.527,0.985-2.051,1.648
				c-0.526,0.663-0.913,1.532-1.163,2.606l-0.275,1.18l-10.92-2.542L181.061,125.511z M178.874,140.667
				c-0.842-1.351-1.074-2.834-0.699-4.447c0.385-1.654,1.251-2.892,2.598-3.712c1.345-0.821,2.847-1.038,4.501-0.653
				c1.613,0.375,2.861,1.244,3.744,2.604c0.881,1.362,1.135,2.848,0.76,4.462s-1.261,2.836-2.652,3.667
				c-1.393,0.831-2.896,1.059-4.509,0.683C180.963,142.886,179.714,142.018,178.874,140.667z"></path></g><g><path style="fill:#d0dbf7;" d="M107.406,208.685c-1.131-2.312-1.095-4.563,0.108-6.754l0.585-1.044
				c0.573-0.954,0.938-1.687,1.094-2.199c0.156-0.512,0.108-1.029-0.147-1.55c-0.643-1.314-2.065-1.434-4.263-0.358
				c-1.02,0.499-2.007,1.151-2.962,1.955c-0.954,0.804-1.797,1.694-2.528,2.669l-2.562-5.236c1.619-1.972,3.721-3.59,6.305-4.854
				c2.788-1.364,5.284-1.861,7.486-1.492c2.203,0.369,3.809,1.585,4.818,3.647c0.566,1.156,0.762,2.218,0.591,3.187
				c-0.173,0.969-0.666,2.201-1.479,3.694c-0.539,1.023-0.921,1.792-1.146,2.31c-0.224,0.517-0.334,1.027-0.326,1.529
				c0.007,0.503,0.155,1.048,0.443,1.637l0.316,0.647l-5.984,2.928L107.406,208.685z M112.087,216.486
				c-0.895-0.306-1.559-0.902-1.991-1.786c-0.443-0.906-0.509-1.801-0.196-2.685c0.311-0.883,0.922-1.547,1.828-1.99
				c0.884-0.432,1.785-0.501,2.702-0.206c0.917,0.297,1.592,0.886,2.024,1.77c0.433,0.884,0.484,1.779,0.155,2.684
				c-0.33,0.906-0.937,1.574-1.821,2.007C113.882,216.724,112.98,216.793,112.087,216.486z"></path></g></g><g><path style="fill:#ffcf74;" d="M97.448,164.964v-3.922h-4.971c-0.328-2.231-1.203-4.279-2.489-6.01l3.515-3.515l-2.773-2.773
			l-3.515,3.515c-1.731-1.286-3.779-2.161-6.01-2.489v-4.971h-3.922v4.971c-2.231,0.328-4.279,1.202-6.01,2.489l-3.515-3.515
			l-2.773,2.773l3.515,3.515c-1.286,1.731-2.161,3.779-2.489,6.01h-4.971v3.922h4.971c0.328,2.231,1.203,4.279,2.489,6.01
			l-3.515,3.515l2.773,2.773l3.515-3.515c1.731,1.286,3.779,2.161,6.01,2.489v4.971h3.922v-4.971
			c2.231-0.328,4.279-1.203,6.01-2.489l3.515,3.515l2.773-2.773l-3.515-3.515c1.286-1.731,2.161-3.779,2.489-6.01H97.448z
			 M79.243,171.296c-4.58,0-8.293-3.713-8.293-8.293c0-4.58,3.713-8.293,8.293-8.293s8.293,3.713,8.293,8.293
			C87.536,167.583,83.824,171.296,79.243,171.296z"></path><path style="fill:#f9ab43;" d="M139.709,140.801v-5.488h-6.956c-0.459-3.122-1.683-5.988-3.483-8.41l4.918-4.918l-3.881-3.881
			l-4.918,4.918c-2.422-1.8-5.288-3.023-8.41-3.483v-6.956h-5.488v6.956c-3.122,0.459-5.988,1.683-8.41,3.483l-4.918-4.918
			l-3.881,3.881l4.918,4.918c-1.8,2.422-3.024,5.288-3.483,8.41h-6.956v5.488h6.956c0.459,3.122,1.683,5.988,3.483,8.41
			l-4.918,4.918l3.881,3.881l4.918-4.918c2.422,1.8,5.288,3.023,8.41,3.483v6.956h5.488v-6.956c3.122-0.459,5.988-1.683,8.41-3.483
			l4.918,4.918l3.881-3.881l-4.918-4.918c1.8-2.422,3.023-5.288,3.483-8.41H139.709z M114.235,149.662
			c-6.409,0-11.605-5.196-11.605-11.605c0-6.409,5.196-11.605,11.605-11.605c6.409,0,11.604,5.195,11.604,11.605
			C125.84,144.466,120.644,149.662,114.235,149.662z"></path></g></g>`, 2)
    ])]))
  ]);
}
const Ro = /* @__PURE__ */ Ke(Bo, [["render", Ko]]), Uo = {
  key: "loading",
  class: "w-full",
  role: "status",
  "aria-live": "polite"
}, Wo = { class: "vstack-sm p-12" }, Ho = {
  key: 0,
  class: "text-center mt-4"
}, Go = {
  key: 1,
  class: "sr-only"
}, qo = {
  key: "error",
  class: "w-full"
}, Zo = { class: "vstack-sm p-12 text-center items-center" }, Yo = { class: "w-96" }, Xo = { key: "loaded" }, Jo = /* @__PURE__ */ j({
  __name: "PageLoader",
  props: {
    isLoading: { type: Boolean, default: !1 },
    loadingText: {},
    showPreloadSlot: { type: Boolean, default: !1 },
    isError: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (e, n) => (p(), C(Ee, {
      name: "fade",
      mode: "out-in"
    }, {
      default: S(() => [
        t.showPreloadSlot && t.isLoading ? (p(), h("div", Uo, [
          g("div", Wo, [
            _(e.$slots, "preloader", {}, () => [
              L(z(it), { "aria-label": "Loading" }),
              t.loadingText ? (p(), h("div", Ho, F(t.loadingText), 1)) : (p(), h("span", Go, "Loading..."))
            ], !0)
          ])
        ])) : t.isError ? (p(), h("div", qo, [
          _(e.$slots, "error", {}, () => [
            g("div", Zo, [
              g("div", Yo, [
                L(Ro)
              ]),
              n[2] || (n[2] = g("p", null, "Something went wrong, please try again later.", -1)),
              L(z(R), {
                type: "button",
                class: "btn mt-4 w-fit",
                onClick: n[0] || (n[0] = (o) => e.$emit("retry"))
              }, {
                default: S(() => [...n[1] || (n[1] = [
                  H("Retry", -1)
                ])]),
                _: 1
              })
            ])
          ], !0)
        ])) : (p(), h("div", Xo, [
          _(e.$slots, "default", {}, void 0, !0)
        ]))
      ]),
      _: 3
    }));
  }
}), rt = /* @__PURE__ */ Ke(Jo, [["__scopeId", "data-v-ef75b673"]]), Qo = /* @__PURE__ */ j({
  __name: "ThemeToggle",
  setup(t) {
    const e = localStorage.getItem("theme") || "light", n = M(e);
    document.documentElement.classList.toggle("dark", e === "dark");
    const o = q(() => n.value === "light" ? "pi pi-sun" : "pi pi-moon");
    function r() {
      const i = n.value === "light" ? "dark" : "light";
      localStorage.setItem("theme", i), n.value = i, document.documentElement.classList.toggle("dark", i === "dark");
    }
    return (i, l) => (p(), C(z(R), {
      id: "themeToggle",
      icon: o.value,
      variant: "outlined",
      "aria-label": "Toggle theme",
      onClick: l[0] || (l[0] = (u) => r())
    }, null, 8, ["icon"]));
  }
});
function we(t) {
  "@babel/helpers - typeof";
  return we = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, we(t);
}
function ei(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function ti(t, e) {
  for (var n = 0; n < e.length; n++) {
    var o = e[n];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, oi(o.key), o);
  }
}
function ni(t, e, n) {
  return e && ti(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function oi(t) {
  var e = ii(t, "string");
  return we(e) == "symbol" ? e : e + "";
}
function ii(t, e) {
  if (we(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (we(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var ri = /* @__PURE__ */ (function() {
  function t(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
    };
    ei(this, t), this.element = e, this.listener = n;
  }
  return ni(t, [{
    key: "bindScrollListener",
    value: function() {
      this.scrollableParents = vn(this.element);
      for (var n = 0; n < this.scrollableParents.length; n++)
        this.scrollableParents[n].addEventListener("scroll", this.listener);
    }
  }, {
    key: "unbindScrollListener",
    value: function() {
      if (this.scrollableParents)
        for (var n = 0; n < this.scrollableParents.length; n++)
          this.scrollableParents[n].removeEventListener("scroll", this.listener);
    }
  }, {
    key: "destroy",
    value: function() {
      this.unbindScrollListener(), this.element = null, this.listener = null, this.scrollableParents = null;
    }
  }]);
})(), ai = yn(), at = {
  name: "Portal",
  props: {
    appendTo: {
      type: [String, Object],
      default: "body"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  data: function() {
    return {
      mounted: !1
    };
  },
  mounted: function() {
    this.mounted = kn();
  },
  computed: {
    inline: function() {
      return this.disabled || this.appendTo === "self";
    }
  }
};
function si(t, e, n, o, r, i) {
  return i.inline ? _(t.$slots, "default", {
    key: 0
  }) : r.mounted ? (p(), C(pn, {
    key: 1,
    to: n.appendTo
  }, [_(t.$slots, "default")], 8, ["to"])) : x("", !0);
}
at.render = si;
var li = `
    .p-tieredmenu {
        background: dt('tieredmenu.background');
        color: dt('tieredmenu.color');
        border: 1px solid dt('tieredmenu.border.color');
        border-radius: dt('tieredmenu.border.radius');
        min-width: 12.5rem;
    }

    .p-tieredmenu-root-list,
    .p-tieredmenu-submenu {
        margin: 0;
        padding: dt('tieredmenu.list.padding');
        list-style: none;
        outline: 0 none;
        display: flex;
        flex-direction: column;
        gap: dt('tieredmenu.list.gap');
    }

    .p-tieredmenu-submenu {
        position: absolute;
        min-width: 100%;
        z-index: 1;
        background: dt('tieredmenu.background');
        color: dt('tieredmenu.color');
        border: 1px solid dt('tieredmenu.border.color');
        border-radius: dt('tieredmenu.border.radius');
        box-shadow: dt('tieredmenu.shadow');
    }

    .p-tieredmenu-item {
        position: relative;
    }

    .p-tieredmenu-item-content {
        transition:
            background dt('tieredmenu.transition.duration'),
            color dt('tieredmenu.transition.duration');
        border-radius: dt('tieredmenu.item.border.radius');
        color: dt('tieredmenu.item.color');
    }

    .p-tieredmenu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('tieredmenu.item.padding');
        gap: dt('tieredmenu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-tieredmenu-item-label {
        line-height: 1;
    }

    .p-tieredmenu-item-icon {
        color: dt('tieredmenu.item.icon.color');
    }

    .p-tieredmenu-submenu-icon {
        color: dt('tieredmenu.submenu.icon.color');
        margin-left: auto;
        font-size: dt('tieredmenu.submenu.icon.size');
        width: dt('tieredmenu.submenu.icon.size');
        height: dt('tieredmenu.submenu.icon.size');
    }

    .p-tieredmenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-tieredmenu-item.p-focus > .p-tieredmenu-item-content {
        color: dt('tieredmenu.item.focus.color');
        background: dt('tieredmenu.item.focus.background');
    }

    .p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
        color: dt('tieredmenu.item.icon.focus.color');
    }

    .p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
        color: dt('tieredmenu.submenu.icon.focus.color');
    }

    .p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover {
        color: dt('tieredmenu.item.focus.color');
        background: dt('tieredmenu.item.focus.background');
    }

    .p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-item-icon {
        color: dt('tieredmenu.item.icon.focus.color');
    }

    .p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-submenu-icon {
        color: dt('tieredmenu.submenu.icon.focus.color');
    }

    .p-tieredmenu-item-active > .p-tieredmenu-item-content {
        color: dt('tieredmenu.item.active.color');
        background: dt('tieredmenu.item.active.background');
    }

    .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
        color: dt('tieredmenu.item.icon.active.color');
    }

    .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
        color: dt('tieredmenu.submenu.icon.active.color');
    }

    .p-tieredmenu-separator {
        border-block-start: 1px solid dt('tieredmenu.separator.border.color');
    }

    .p-tieredmenu-overlay {
        box-shadow: dt('tieredmenu.shadow');
    }

    .p-tieredmenu-mobile .p-tieredmenu-submenu {
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('tieredmenu.submenu.mobile.indent');
        padding-inline-end: 0;
    }

    .p-tieredmenu-mobile .p-tieredmenu-submenu:dir(rtl) {
        padding-inline-start: 0;
        padding-inline-end: dt('tieredmenu.submenu.mobile.indent');
    }

    .p-tieredmenu-mobile .p-tieredmenu-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-tieredmenu-mobile .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
        transform: rotate(-90deg);
    }
`, ui = {
  submenu: function(e) {
    var n = e.instance, o = e.processedItem;
    return {
      display: n.isItemActive(o) ? "flex" : "none"
    };
  }
}, di = {
  root: function(e) {
    var n = e.props, o = e.instance;
    return ["p-tieredmenu p-component", {
      "p-tieredmenu-overlay": n.popup,
      "p-tieredmenu-mobile": o.queryMatches
    }];
  },
  start: "p-tieredmenu-start",
  rootList: "p-tieredmenu-root-list",
  item: function(e) {
    var n = e.instance, o = e.processedItem;
    return ["p-tieredmenu-item", {
      "p-tieredmenu-item-active": n.isItemActive(o),
      "p-focus": n.isItemFocused(o),
      "p-disabled": n.isItemDisabled(o)
    }];
  },
  itemContent: "p-tieredmenu-item-content",
  itemLink: "p-tieredmenu-item-link",
  itemIcon: "p-tieredmenu-item-icon",
  itemLabel: "p-tieredmenu-item-label",
  submenuIcon: "p-tieredmenu-submenu-icon",
  submenu: "p-tieredmenu-submenu",
  separator: "p-tieredmenu-separator",
  end: "p-tieredmenu-end"
}, ci = D.extend({
  name: "tieredmenu",
  style: li,
  classes: di,
  inlineStyles: ui
}), en = {
  name: "AngleRightIcon",
  extends: Oe
};
function pi(t) {
  return bi(t) || gi(t) || fi(t) || mi();
}
function mi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fi(t, e) {
  if (t) {
    if (typeof t == "string") return Ye(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ye(t, e) : void 0;
  }
}
function gi(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function bi(t) {
  if (Array.isArray(t)) return Ye(t);
}
function Ye(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function hi(t, e, n, o, r, i) {
  return p(), h("svg", b({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t.pti()), pi(e[0] || (e[0] = [g("path", {
    d: "M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
en.render = hi;
var vi = {
  name: "BaseTieredMenu",
  extends: Z,
  props: {
    popup: {
      type: Boolean,
      default: !1
    },
    model: {
      type: Array,
      default: null
    },
    appendTo: {
      type: [String, Object],
      default: "body"
    },
    breakpoint: {
      type: String,
      default: "960px"
    },
    autoZIndex: {
      type: Boolean,
      default: !0
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    tabindex: {
      type: Number,
      default: 0
    },
    ariaLabelledby: {
      type: String,
      default: null
    },
    ariaLabel: {
      type: String,
      default: null
    }
  },
  style: ci,
  provide: function() {
    return {
      $pcTieredMenu: this,
      $parentInstance: this
    };
  }
}, tn = {
  name: "TieredMenuSub",
  hostName: "TieredMenu",
  extends: Z,
  emits: ["item-click", "item-mouseenter", "item-mousemove"],
  container: null,
  props: {
    menuId: {
      type: String,
      default: null
    },
    focusedItemId: {
      type: String,
      default: null
    },
    items: {
      type: Array,
      default: null
    },
    visible: {
      type: Boolean,
      default: !1
    },
    level: {
      type: Number,
      default: 0
    },
    templates: {
      type: Object,
      default: null
    },
    activeItemPath: {
      type: Object,
      default: null
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    getItemId: function(e) {
      return "".concat(this.menuId, "_").concat(e.key);
    },
    getItemKey: function(e) {
      return this.getItemId(e);
    },
    getItemProp: function(e, n, o) {
      return e && e.item ? be(e.item[n], o) : void 0;
    },
    getItemLabel: function(e) {
      return this.getItemProp(e, "label");
    },
    getItemLabelId: function(e) {
      return "".concat(this.menuId, "_").concat(e.key, "_label");
    },
    getPTOptions: function(e, n, o) {
      return this.ptm(o, {
        context: {
          item: e.item,
          index: n,
          active: this.isItemActive(e),
          focused: this.isItemFocused(e),
          disabled: this.isItemDisabled(e)
        }
      });
    },
    isItemActive: function(e) {
      return this.activeItemPath.some(function(n) {
        return n.key === e.key;
      });
    },
    isItemVisible: function(e) {
      return this.getItemProp(e, "visible") !== !1;
    },
    isItemDisabled: function(e) {
      return this.getItemProp(e, "disabled");
    },
    isItemFocused: function(e) {
      return this.focusedItemId === this.getItemId(e);
    },
    isItemGroup: function(e) {
      return W(e.items);
    },
    onEnter: function() {
      Sn(this.container, this.level);
    },
    onItemClick: function(e, n) {
      this.getItemProp(n, "command", {
        originalEvent: e,
        item: n.item
      }), this.$emit("item-click", {
        originalEvent: e,
        processedItem: n,
        isFocus: !0
      });
    },
    onItemMouseEnter: function(e, n) {
      this.$emit("item-mouseenter", {
        originalEvent: e,
        processedItem: n
      });
    },
    onItemMouseMove: function(e, n) {
      this.$emit("item-mousemove", {
        originalEvent: e,
        processedItem: n
      });
    },
    getAriaSetSize: function() {
      var e = this;
      return this.items.filter(function(n) {
        return e.isItemVisible(n) && !e.getItemProp(n, "separator");
      }).length;
    },
    getAriaPosInset: function(e) {
      var n = this;
      return e - this.items.slice(0, e).filter(function(o) {
        return n.isItemVisible(o) && n.getItemProp(o, "separator");
      }).length + 1;
    },
    getMenuItemProps: function(e, n) {
      return {
        action: b({
          class: this.cx("itemLink"),
          tabindex: -1
        }, this.getPTOptions(e, n, "itemLink")),
        icon: b({
          class: [this.cx("itemIcon"), this.getItemProp(e, "icon")]
        }, this.getPTOptions(e, n, "itemIcon")),
        label: b({
          class: this.cx("itemLabel")
        }, this.getPTOptions(e, n, "itemLabel")),
        submenuicon: b({
          class: this.cx("submenuIcon")
        }, this.getPTOptions(e, n, "submenuIcon"))
      };
    },
    containerRef: function(e) {
      this.container = e;
    }
  },
  components: {
    AngleRightIcon: en
  },
  directives: {
    ripple: Ne
  }
}, yi = ["tabindex"], ki = ["id", "aria-label", "aria-disabled", "aria-expanded", "aria-haspopup", "aria-level", "aria-setsize", "aria-posinset", "data-p-active", "data-p-focused", "data-p-disabled"], $i = ["onClick", "onMouseenter", "onMousemove"], Ii = ["href", "target"], Si = ["id"], wi = ["id"];
function xi(t, e, n, o, r, i) {
  var l = G("AngleRightIcon"), u = G("TieredMenuSub", !0), s = je("ripple");
  return p(), C(Ee, b({
    name: "p-tieredmenu",
    onEnter: i.onEnter
  }, t.ptm("menu.transition")), {
    default: S(function() {
      return [n.level === 0 || n.visible ? (p(), h("ul", {
        key: 0,
        ref: i.containerRef,
        tabindex: n.tabindex
      }, [(p(!0), h(fe, null, Mt(n.items, function(a, d) {
        return p(), h(fe, {
          key: i.getItemKey(a)
        }, [i.isItemVisible(a) && !i.getItemProp(a, "separator") ? (p(), h("li", b({
          key: 0,
          id: i.getItemId(a),
          style: i.getItemProp(a, "style"),
          class: [t.cx("item", {
            processedItem: a
          }), i.getItemProp(a, "class")],
          role: "menuitem",
          "aria-label": i.getItemLabel(a),
          "aria-disabled": i.isItemDisabled(a) || void 0,
          "aria-expanded": i.isItemGroup(a) ? i.isItemActive(a) : void 0,
          "aria-haspopup": i.isItemGroup(a) && !i.getItemProp(a, "to") ? "menu" : void 0,
          "aria-level": n.level + 1,
          "aria-setsize": i.getAriaSetSize(),
          "aria-posinset": i.getAriaPosInset(d)
        }, {
          ref_for: !0
        }, i.getPTOptions(a, d, "item"), {
          "data-p-active": i.isItemActive(a),
          "data-p-focused": i.isItemFocused(a),
          "data-p-disabled": i.isItemDisabled(a)
        }), [g("div", b({
          class: t.cx("itemContent"),
          onClick: function(m) {
            return i.onItemClick(m, a);
          },
          onMouseenter: function(m) {
            return i.onItemMouseEnter(m, a);
          },
          onMousemove: function(m) {
            return i.onItemMouseMove(m, a);
          }
        }, {
          ref_for: !0
        }, i.getPTOptions(a, d, "itemContent")), [n.templates.item ? (p(), C(ae(n.templates.item), {
          key: 1,
          item: a.item,
          hasSubmenu: i.getItemProp(a, "items"),
          label: i.getItemLabel(a),
          props: i.getMenuItemProps(a, d)
        }, null, 8, ["item", "hasSubmenu", "label", "props"])) : Ve((p(), h("a", b({
          key: 0,
          href: i.getItemProp(a, "url"),
          class: t.cx("itemLink"),
          target: i.getItemProp(a, "target"),
          tabindex: "-1"
        }, {
          ref_for: !0
        }, i.getPTOptions(a, d, "itemLink")), [n.templates.itemicon ? (p(), C(ae(n.templates.itemicon), {
          key: 0,
          item: a.item,
          class: X(t.cx("itemIcon"))
        }, null, 8, ["item", "class"])) : i.getItemProp(a, "icon") ? (p(), h("span", b({
          key: 1,
          class: [t.cx("itemIcon"), i.getItemProp(a, "icon")]
        }, {
          ref_for: !0
        }, i.getPTOptions(a, d, "itemIcon")), null, 16)) : x("", !0), g("span", b({
          id: i.getItemLabelId(a),
          class: t.cx("itemLabel")
        }, {
          ref_for: !0
        }, i.getPTOptions(a, d, "itemLabel")), F(i.getItemLabel(a)), 17, Si), i.getItemProp(a, "items") ? (p(), h(fe, {
          key: 2
        }, [n.templates.submenuicon ? (p(), C(ae(n.templates.submenuicon), b({
          key: 0,
          class: t.cx("submenuIcon"),
          active: i.isItemActive(a)
        }, {
          ref_for: !0
        }, i.getPTOptions(a, d, "submenuIcon")), null, 16, ["class", "active"])) : (p(), C(l, b({
          key: 1,
          class: t.cx("submenuIcon")
        }, {
          ref_for: !0
        }, i.getPTOptions(a, d, "submenuIcon")), null, 16, ["class"]))], 64)) : x("", !0)], 16, Ii)), [[s]])], 16, $i), i.isItemVisible(a) && i.isItemGroup(a) ? (p(), C(u, b({
          key: 0,
          id: i.getItemId(a) + "_list",
          class: t.cx("submenu"),
          style: t.sx("submenu", !0, {
            processedItem: a
          }),
          "aria-labelledby": i.getItemLabelId(a),
          role: "menu",
          menuId: n.menuId,
          focusedItemId: n.focusedItemId,
          items: a.items,
          templates: n.templates,
          activeItemPath: n.activeItemPath,
          level: n.level + 1,
          visible: i.isItemActive(a) && i.isItemGroup(a),
          pt: t.pt,
          unstyled: t.unstyled,
          onItemClick: e[0] || (e[0] = function(c) {
            return t.$emit("item-click", c);
          }),
          onItemMouseenter: e[1] || (e[1] = function(c) {
            return t.$emit("item-mouseenter", c);
          }),
          onItemMousemove: e[2] || (e[2] = function(c) {
            return t.$emit("item-mousemove", c);
          })
        }, {
          ref_for: !0
        }, t.ptm("submenu")), null, 16, ["id", "class", "style", "aria-labelledby", "menuId", "focusedItemId", "items", "templates", "activeItemPath", "level", "visible", "pt", "unstyled"])) : x("", !0)], 16, ki)) : x("", !0), i.isItemVisible(a) && i.getItemProp(a, "separator") ? (p(), h("li", b({
          key: 1,
          id: i.getItemId(a),
          style: i.getItemProp(a, "style"),
          class: [t.cx("separator"), i.getItemProp(a, "class")],
          role: "separator"
        }, {
          ref_for: !0
        }, t.ptm("separator")), null, 16, wi)) : x("", !0)], 64);
      }), 128))], 8, yi)) : x("", !0)];
    }),
    _: 1
  }, 16, ["onEnter"]);
}
tn.render = xi;
var nn = {
  name: "TieredMenu",
  extends: vi,
  inheritAttrs: !1,
  emits: ["focus", "blur", "before-show", "before-hide", "hide", "show"],
  outsideClickListener: null,
  matchMediaListener: null,
  scrollHandler: null,
  resizeListener: null,
  target: null,
  container: null,
  menubar: null,
  searchTimeout: null,
  searchValue: null,
  data: function() {
    return {
      focused: !1,
      focusedItemInfo: {
        index: -1,
        level: 0,
        parentKey: ""
      },
      activeItemPath: [],
      visible: !this.popup,
      submenuVisible: !1,
      dirty: !1,
      query: null,
      queryMatches: !1
    };
  },
  watch: {
    activeItemPath: function(e) {
      this.popup || (W(e) ? (this.bindOutsideClickListener(), this.bindResizeListener()) : (this.unbindOutsideClickListener(), this.unbindResizeListener()));
    }
  },
  mounted: function() {
    this.bindMatchMediaListener();
  },
  beforeUnmount: function() {
    this.unbindOutsideClickListener(), this.unbindResizeListener(), this.unbindMatchMediaListener(), this.scrollHandler && (this.scrollHandler.destroy(), this.scrollHandler = null), this.container && this.autoZIndex && ue.clear(this.container), this.target = null, this.container = null;
  },
  methods: {
    getItemProp: function(e, n) {
      return e ? be(e[n]) : void 0;
    },
    getItemLabel: function(e) {
      return this.getItemProp(e, "label");
    },
    isItemDisabled: function(e) {
      return this.getItemProp(e, "disabled");
    },
    isItemVisible: function(e) {
      return this.getItemProp(e, "visible") !== !1;
    },
    isItemGroup: function(e) {
      return W(this.getItemProp(e, "items"));
    },
    isItemSeparator: function(e) {
      return this.getItemProp(e, "separator");
    },
    getProccessedItemLabel: function(e) {
      return e ? this.getItemLabel(e.item) : void 0;
    },
    isProccessedItemGroup: function(e) {
      return e && W(e.items);
    },
    toggle: function(e) {
      this.visible ? this.hide(e, !0) : this.show(e);
    },
    show: function(e, n) {
      this.popup && (this.$emit("before-show"), this.visible = !0, this.target = this.target || e.currentTarget, this.relatedTarget = e.relatedTarget || null), n && N(this.menubar);
    },
    hide: function(e, n) {
      this.popup && (this.$emit("before-hide"), this.visible = !1), this.activeItemPath = [], this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      }, n && N(this.relatedTarget || this.target || this.menubar), this.dirty = !1;
    },
    onFocus: function(e) {
      this.focused = !0, this.popup || (this.focusedItemInfo = this.focusedItemInfo.index !== -1 ? this.focusedItemInfo : {
        index: this.findFirstFocusedItemIndex(),
        level: 0,
        parentKey: ""
      }), this.$emit("focus", e);
    },
    onBlur: function(e) {
      this.focused = !1, this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      }, this.searchValue = "", this.dirty = !1, this.$emit("blur", e);
    },
    onKeyDown: function(e) {
      if (this.disabled) {
        e.preventDefault();
        return;
      }
      var n = e.metaKey || e.ctrlKey;
      switch (e.code) {
        case "ArrowDown":
          this.onArrowDownKey(e);
          break;
        case "ArrowUp":
          this.onArrowUpKey(e);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(e);
          break;
        case "ArrowRight":
          this.onArrowRightKey(e);
          break;
        case "Home":
          this.onHomeKey(e);
          break;
        case "End":
          this.onEndKey(e);
          break;
        case "Space":
          this.onSpaceKey(e);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(e);
          break;
        case "Escape":
          this.onEscapeKey(e);
          break;
        case "Tab":
          this.onTabKey(e);
          break;
        case "PageDown":
        case "PageUp":
        case "Backspace":
        case "ShiftLeft":
        case "ShiftRight":
          break;
        default:
          !n && In(e.key) && this.searchItems(e, e.key);
          break;
      }
    },
    onItemChange: function(e, n) {
      var o = e.processedItem, r = e.isFocus;
      if (!se(o)) {
        var i = o.index, l = o.key, u = o.level, s = o.parentKey, a = o.items, d = W(a), c = this.activeItemPath.filter(function(m) {
          return m.parentKey !== s && m.parentKey !== l;
        });
        d && (c.push(o), this.submenuVisible = !0), this.focusedItemInfo = {
          index: i,
          level: u,
          parentKey: s
        }, d && (this.dirty = !0), r && N(this.menubar), !(n === "hover" && this.queryMatches) && (this.activeItemPath = c);
      }
    },
    onOverlayClick: function(e) {
      ai.emit("overlay-click", {
        originalEvent: e,
        target: this.target
      });
    },
    onItemClick: function(e) {
      var n = e.originalEvent, o = e.processedItem, r = this.isProccessedItemGroup(o), i = se(o.parent), l = this.isSelected(o);
      if (l) {
        var u = o.index, s = o.key, a = o.level, d = o.parentKey;
        this.activeItemPath = this.activeItemPath.filter(function(m) {
          return s !== m.key && s.startsWith(m.key);
        }), this.focusedItemInfo = {
          index: u,
          level: a,
          parentKey: d
        }, this.dirty = !i, N(this.menubar);
      } else if (r)
        this.onItemChange(e);
      else {
        var c = i ? o : this.activeItemPath.find(function(m) {
          return m.parentKey === "";
        });
        this.hide(n), this.changeFocusedItemIndex(n, c ? c.index : -1), N(this.menubar);
      }
    },
    onItemMouseEnter: function(e) {
      this.dirty && this.onItemChange(e, "hover");
    },
    onItemMouseMove: function(e) {
      this.focused && this.changeFocusedItemIndex(e, e.processedItem.index);
    },
    onArrowDownKey: function(e) {
      var n = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();
      this.changeFocusedItemIndex(e, n), e.preventDefault();
    },
    onArrowUpKey: function(e) {
      if (e.altKey) {
        if (this.focusedItemInfo.index !== -1) {
          var n = this.visibleItems[this.focusedItemInfo.index], o = this.isProccessedItemGroup(n);
          !o && this.onItemChange({
            originalEvent: e,
            processedItem: n
          });
        }
        this.popup && this.hide(e, !0), e.preventDefault();
      } else {
        var r = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemIndex(e, r), e.preventDefault();
      }
    },
    onArrowLeftKey: function(e) {
      var n = this, o = this.visibleItems[this.focusedItemInfo.index], r = this.activeItemPath.find(function(l) {
        return l.key === o.parentKey;
      }), i = se(o.parent);
      i || (this.focusedItemInfo = {
        index: -1,
        parentKey: r ? r.parentKey : ""
      }, this.searchValue = "", this.onArrowDownKey(e)), this.activeItemPath = this.activeItemPath.filter(function(l) {
        return l.parentKey !== n.focusedItemInfo.parentKey;
      }), e.preventDefault();
    },
    onArrowRightKey: function(e) {
      var n = this.visibleItems[this.focusedItemInfo.index], o = this.isProccessedItemGroup(n);
      o && (this.onItemChange({
        originalEvent: e,
        processedItem: n
      }), this.focusedItemInfo = {
        index: -1,
        parentKey: n.key
      }, this.searchValue = "", this.onArrowDownKey(e)), e.preventDefault();
    },
    onHomeKey: function(e) {
      this.changeFocusedItemIndex(e, this.findFirstItemIndex()), e.preventDefault();
    },
    onEndKey: function(e) {
      this.changeFocusedItemIndex(e, this.findLastItemIndex()), e.preventDefault();
    },
    onEnterKey: function(e) {
      if (this.focusedItemInfo.index !== -1) {
        var n = Me(this.menubar, 'li[id="'.concat("".concat(this.focusedItemId), '"]')), o = n && Me(n, '[data-pc-section="itemlink"]');
        if (o ? o.click() : n && n.click(), !this.popup) {
          var r = this.visibleItems[this.focusedItemInfo.index], i = this.isProccessedItemGroup(r);
          !i && (this.focusedItemInfo.index = this.findFirstFocusedItemIndex());
        }
      }
      e.preventDefault();
    },
    onSpaceKey: function(e) {
      this.onEnterKey(e);
    },
    onEscapeKey: function(e) {
      if (this.popup || this.focusedItemInfo.level !== 0) {
        var n = this.focusedItemInfo;
        this.hide(e, !1), this.focusedItemInfo = {
          index: Number(n.parentKey.split("_")[0]),
          level: 0,
          parentKey: ""
        }, this.popup && N(this.target);
      }
      e.preventDefault();
    },
    onTabKey: function(e) {
      if (this.focusedItemInfo.index !== -1) {
        var n = this.visibleItems[this.focusedItemInfo.index], o = this.isProccessedItemGroup(n);
        !o && this.onItemChange({
          originalEvent: e,
          processedItem: n
        });
      }
      this.hide();
    },
    onEnter: function(e) {
      this.autoZIndex && ue.set("menu", e, this.baseZIndex + this.$primevue.config.zIndex.menu), Rt(e, {
        position: "absolute",
        top: "0"
      }), this.alignOverlay(), N(this.menubar), this.scrollInView();
    },
    onAfterEnter: function() {
      this.bindOutsideClickListener(), this.bindScrollListener(), this.bindResizeListener(), this.$emit("show");
    },
    onLeave: function() {
      this.unbindOutsideClickListener(), this.unbindScrollListener(), this.unbindResizeListener(), this.$emit("hide"), this.container = null, this.dirty = !1;
    },
    onAfterLeave: function(e) {
      this.autoZIndex && ue.clear(e);
    },
    alignOverlay: function() {
      $n(this.container, this.target);
      var e = ge(this.target);
      e > ge(this.container) && (this.container.style.minWidth = ge(this.target) + "px");
    },
    bindOutsideClickListener: function() {
      var e = this;
      this.outsideClickListener || (this.outsideClickListener = function(n) {
        var o = e.container && !e.container.contains(n.target), r = e.popup ? !(e.target && (e.target === n.target || e.target.contains(n.target))) : !0;
        o && r && e.hide();
      }, document.addEventListener("click", this.outsideClickListener, !0));
    },
    unbindOutsideClickListener: function() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener, !0), this.outsideClickListener = null);
    },
    bindScrollListener: function() {
      var e = this;
      this.scrollHandler || (this.scrollHandler = new ri(this.target, function(n) {
        e.hide(n, !0);
      })), this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function() {
      this.scrollHandler && this.scrollHandler.unbindScrollListener();
    },
    bindResizeListener: function() {
      var e = this;
      this.resizeListener || (this.resizeListener = function(n) {
        Kt() || e.hide(n, !0);
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener: function() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    },
    bindMatchMediaListener: function() {
      var e = this;
      if (!this.matchMediaListener) {
        var n = matchMedia("(max-width: ".concat(this.breakpoint, ")"));
        this.query = n, this.queryMatches = n.matches, this.matchMediaListener = function() {
          e.queryMatches = n.matches;
        }, this.query.addEventListener("change", this.matchMediaListener);
      }
    },
    unbindMatchMediaListener: function() {
      this.matchMediaListener && (this.query.removeEventListener("change", this.matchMediaListener), this.matchMediaListener = null);
    },
    isItemMatched: function(e) {
      var n;
      return this.isValidItem(e) && ((n = this.getProccessedItemLabel(e)) === null || n === void 0 ? void 0 : n.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()));
    },
    isValidItem: function(e) {
      return !!e && !this.isItemDisabled(e.item) && !this.isItemSeparator(e.item) && this.isItemVisible(e.item);
    },
    isValidSelectedItem: function(e) {
      return this.isValidItem(e) && this.isSelected(e);
    },
    isSelected: function(e) {
      return this.activeItemPath.some(function(n) {
        return n.key === e.key;
      });
    },
    findFirstItemIndex: function() {
      var e = this;
      return this.visibleItems.findIndex(function(n) {
        return e.isValidItem(n);
      });
    },
    findLastItemIndex: function() {
      var e = this;
      return mt(this.visibleItems, function(n) {
        return e.isValidItem(n);
      });
    },
    findNextItemIndex: function(e) {
      var n = this, o = e < this.visibleItems.length - 1 ? this.visibleItems.slice(e + 1).findIndex(function(r) {
        return n.isValidItem(r);
      }) : -1;
      return o > -1 ? o + e + 1 : e;
    },
    findPrevItemIndex: function(e) {
      var n = this, o = e > 0 ? mt(this.visibleItems.slice(0, e), function(r) {
        return n.isValidItem(r);
      }) : -1;
      return o > -1 ? o : e;
    },
    findSelectedItemIndex: function() {
      var e = this;
      return this.visibleItems.findIndex(function(n) {
        return e.isValidSelectedItem(n);
      });
    },
    findFirstFocusedItemIndex: function() {
      var e = this.findSelectedItemIndex();
      return e < 0 ? this.findFirstItemIndex() : e;
    },
    findLastFocusedItemIndex: function() {
      var e = this.findSelectedItemIndex();
      return e < 0 ? this.findLastItemIndex() : e;
    },
    searchItems: function(e, n) {
      var o = this;
      this.searchValue = (this.searchValue || "") + n;
      var r = -1, i = !1;
      return this.focusedItemInfo.index !== -1 ? (r = this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(l) {
        return o.isItemMatched(l);
      }), r = r === -1 ? this.visibleItems.slice(0, this.focusedItemInfo.index).findIndex(function(l) {
        return o.isItemMatched(l);
      }) : r + this.focusedItemInfo.index) : r = this.visibleItems.findIndex(function(l) {
        return o.isItemMatched(l);
      }), r !== -1 && (i = !0), r === -1 && this.focusedItemInfo.index === -1 && (r = this.findFirstFocusedItemIndex()), r !== -1 && this.changeFocusedItemIndex(e, r), this.searchTimeout && clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout(function() {
        o.searchValue = "", o.searchTimeout = null;
      }, 500), i;
    },
    changeFocusedItemIndex: function(e, n) {
      this.focusedItemInfo.index !== n && (this.focusedItemInfo.index = n, this.scrollInView());
    },
    scrollInView: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1, n = e !== -1 ? "".concat(this.$id, "_").concat(e) : this.focusedItemId, o = Me(this.menubar, 'li[id="'.concat(n, '"]'));
      o && o.scrollIntoView && o.scrollIntoView({
        block: "nearest",
        inline: "start"
      });
    },
    createProcessedItems: function(e) {
      var n = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "", l = [];
      return e && e.forEach(function(u, s) {
        var a = (i !== "" ? i + "_" : "") + s, d = {
          item: u,
          index: s,
          level: o,
          key: a,
          parent: r,
          parentKey: i
        };
        d.items = n.createProcessedItems(u.items, o + 1, d, a), l.push(d);
      }), l;
    },
    containerRef: function(e) {
      this.container = e;
    },
    menubarRef: function(e) {
      this.menubar = e ? e.$el : void 0;
    }
  },
  computed: {
    processedItems: function() {
      return this.createProcessedItems(this.model || []);
    },
    visibleItems: function() {
      var e = this, n = this.activeItemPath.find(function(o) {
        return o.key === e.focusedItemInfo.parentKey;
      });
      return n ? n.items : this.processedItems;
    },
    focusedItemId: function() {
      return this.focusedItemInfo.index !== -1 ? "".concat(this.$id).concat(W(this.focusedItemInfo.parentKey) ? "_" + this.focusedItemInfo.parentKey : "", "_").concat(this.focusedItemInfo.index) : null;
    }
  },
  components: {
    TieredMenuSub: tn,
    Portal: at
  }
}, Ci = ["id"];
function Pi(t, e, n, o, r, i) {
  var l = G("TieredMenuSub"), u = G("Portal");
  return p(), C(u, {
    appendTo: t.appendTo,
    disabled: !t.popup
  }, {
    default: S(function() {
      return [L(Ee, b({
        name: "p-anchored-overlay",
        onEnter: i.onEnter,
        onAfterEnter: i.onAfterEnter,
        onLeave: i.onLeave,
        onAfterLeave: i.onAfterLeave
      }, t.ptm("transition")), {
        default: S(function() {
          return [r.visible ? (p(), h("div", b({
            key: 0,
            ref: i.containerRef,
            id: t.$id,
            class: t.cx("root"),
            onClick: e[0] || (e[0] = function() {
              return i.onOverlayClick && i.onOverlayClick.apply(i, arguments);
            })
          }, t.ptmi("root")), [t.$slots.start ? (p(), h("div", b({
            key: 0,
            class: t.cx("start")
          }, t.ptm("start")), [_(t.$slots, "start")], 16)) : x("", !0), L(l, b({
            ref: i.menubarRef,
            id: t.$id + "_list",
            class: t.cx("rootList"),
            tabindex: t.disabled ? -1 : t.tabindex,
            role: "menubar",
            "aria-label": t.ariaLabel,
            "aria-labelledby": t.ariaLabelledby,
            "aria-disabled": t.disabled || void 0,
            "aria-orientation": "vertical",
            "aria-activedescendant": r.focused ? i.focusedItemId : void 0,
            menuId: t.$id,
            focusedItemId: r.focused ? i.focusedItemId : void 0,
            items: i.processedItems,
            templates: t.$slots,
            activeItemPath: r.activeItemPath,
            level: 0,
            visible: r.submenuVisible,
            pt: t.pt,
            unstyled: t.unstyled,
            onFocus: i.onFocus,
            onBlur: i.onBlur,
            onKeydown: i.onKeyDown,
            onItemClick: i.onItemClick,
            onItemMouseenter: i.onItemMouseEnter,
            onItemMousemove: i.onItemMouseMove
          }, t.ptm("rootList")), null, 16, ["id", "class", "tabindex", "aria-label", "aria-labelledby", "aria-disabled", "aria-activedescendant", "menuId", "focusedItemId", "items", "templates", "activeItemPath", "visible", "pt", "unstyled", "onFocus", "onBlur", "onKeydown", "onItemClick", "onItemMouseenter", "onItemMousemove"]), t.$slots.end ? (p(), h("div", b({
            key: 1,
            class: t.cx("end")
          }, t.ptm("end")), [_(t.$slots, "end")], 16)) : x("", !0)], 16, Ci)) : x("", !0)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo", "disabled"]);
}
nn.render = Pi;
const _i = { class: "bg-surface-0 dark:bg-surface-900" }, Li = { class: "container" }, Ti = { class: "flex py-4" }, Ei = { class: "flex gap-3 sm:gap-5 ml-auto h-12 items-center" }, Oi = { class: "ml-2" }, zi = ["aria-label", "onClick"], Ai = { class: "ml-2" }, rs = /* @__PURE__ */ j({
  name: "SiteNavigation",
  __name: "SiteNavigation",
  props: {
    items: {},
    userSignedIn: { type: Boolean, default: !1 }
  },
  emits: ["signoutSuccess", "signoutError"],
  setup(t, { emit: e }) {
    const n = e, o = t, r = Tn(), i = M(!1), l = M(null), u = M([
      { type: "link", label: "Sign in", icon: "pi pi-sign-in", to: "/signin" },
      { type: "link", label: "Sign up", icon: "pi pi-user-plus", to: "/signup" }
    ]), s = M([
      {
        type: "button",
        label: "Sign Out",
        icon: "pi pi-sign-out",
        "aria-label": "Sign out",
        command: m
      }
    ]), a = q(() => !o.items || !o.items.length ? [] : o.items.map((y) => ({
      ...y,
      type: "link"
    }))), d = q(() => o.userSignedIn ? [...a.value, ...s.value] : [...a.value, ...u.value]), c = (y) => {
      l.value?.toggle(y);
    };
    async function m() {
      try {
        i.value = !0, await Ln.signOut(), r.updateAuth(), n("signoutSuccess");
      } catch (y) {
        n("signoutError", {
          type: "unexpected",
          severity: "error",
          summary: V.error.somethingWentWrong.summary,
          detail: V.error.somethingWentWrong.detail,
          json: K(y)
        });
      } finally {
        i.value = !1;
      }
    }
    return (y, f) => {
      const k = G("RouterLink"), v = G("router-link");
      return p(), h("header", _i, [
        g("div", Li, [
          g("nav", Ti, [
            L(z(R), {
              asChild: "",
              variant: "link"
            }, {
              default: S(($) => [
                L(k, {
                  to: t.userSignedIn ? "/home" : "/",
                  class: X([$.class, "!p-0"])
                }, {
                  default: S(() => [
                    _(y.$slots, "logo")
                  ]),
                  _: 3
                }, 8, ["to", "class"])
              ]),
              _: 3
            }),
            g("div", Ei, [
              L(z(R), {
                icon: "pi pi-bars",
                "aria-label": "Navigation menu",
                "aria-haspopup": "true",
                "aria-controls": "overlay_tmenu",
                onClick: c
              }),
              L(z(nn), {
                id: "overlay_tmenu",
                ref_key: "tieredMenu",
                ref: l,
                model: d.value,
                popup: ""
              }, {
                item: S(({ item: $, props: E }) => [
                  $.type === "link" ? (p(), C(v, b({
                    key: 0,
                    to: $.to
                  }, E.action), {
                    default: S(() => [
                      g("span", {
                        class: X($.icon)
                      }, null, 2),
                      g("span", Oi, F($.label), 1)
                    ]),
                    _: 2
                  }, 1040, ["to"])) : $.type === "button" ? (p(), h("button", {
                    key: 1,
                    "aria-label": $["aria-label"],
                    class: "p-tieredmenu-item-link",
                    onClick: (A) => $.command?.({ originalEvent: A, item: $ })
                  }, [
                    g("span", {
                      class: X($.icon)
                    }, null, 2),
                    g("span", Ai, F($.label), 1)
                  ], 8, zi)) : x("", !0)
                ]),
                _: 1
              }, 8, ["model"]),
              L(Qo)
            ])
          ])
        ])
      ]);
    };
  }
});
var Mi = `
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`, Di = {
  root: "p-card p-component",
  header: "p-card-header",
  body: "p-card-body",
  caption: "p-card-caption",
  title: "p-card-title",
  subtitle: "p-card-subtitle",
  content: "p-card-content",
  footer: "p-card-footer"
}, ji = D.extend({
  name: "card",
  style: Mi,
  classes: Di
}), Vi = {
  name: "BaseCard",
  extends: Z,
  style: ji,
  provide: function() {
    return {
      $pcCard: this,
      $parentInstance: this
    };
  }
}, re = {
  name: "Card",
  extends: Vi,
  inheritAttrs: !1
};
function Fi(t, e, n, o, r, i) {
  return p(), h("div", b({
    class: t.cx("root")
  }, t.ptmi("root")), [t.$slots.header ? (p(), h("div", b({
    key: 0,
    class: t.cx("header")
  }, t.ptm("header")), [_(t.$slots, "header")], 16)) : x("", !0), g("div", b({
    class: t.cx("body")
  }, t.ptm("body")), [t.$slots.title || t.$slots.subtitle ? (p(), h("div", b({
    key: 0,
    class: t.cx("caption")
  }, t.ptm("caption")), [t.$slots.title ? (p(), h("div", b({
    key: 0,
    class: t.cx("title")
  }, t.ptm("title")), [_(t.$slots, "title")], 16)) : x("", !0), t.$slots.subtitle ? (p(), h("div", b({
    key: 1,
    class: t.cx("subtitle")
  }, t.ptm("subtitle")), [_(t.$slots, "subtitle")], 16)) : x("", !0)], 16)) : x("", !0), g("div", b({
    class: t.cx("content")
  }, t.ptm("content")), [_(t.$slots, "content")], 16), t.$slots.footer ? (p(), h("div", b({
    key: 1,
    class: t.cx("footer")
  }, t.ptm("footer")), [_(t.$slots, "footer")], 16)) : x("", !0)], 16)], 16);
}
re.render = Fi;
const as = /* @__PURE__ */ j({
  __name: "AppErrorInfo",
  props: {
    error: {}
  },
  setup(t) {
    const e = t;
    return de(() => {
      console.error("App error: ", e.error);
    }), (n, o) => (p(), C(z(re), { class: "p-10" }, {
      title: S(() => [...o[0] || (o[0] = [
        g("h2", { class: "text-4xl font-semibold text-gray-800 text-center" }, [
          H(" Oops "),
          g("i", { class: "text-4xl not-italic" }, "🥲")
        ], -1)
      ])]),
      content: S(() => [...o[1] || (o[1] = [
        g("p", { class: "mt-10 text-xl" }, [
          H(" Something went wrong! We have been notified about this. In the meantime, please try visiting the "),
          g("a", {
            href: "/",
            class: "underline"
          }, "homepage"),
          H(" or try again later. ")
        ], -1)
      ])]),
      _: 1
    }));
  }
}), Bi = {
  key: 0,
  class: "bar"
}, Ni = /* @__PURE__ */ j({
  __name: "PageInfiniteLoader",
  props: {
    isLoading: { type: Boolean }
  },
  setup(t) {
    return (e, n) => t.isLoading ? (p(), h("div", Bi, [...n[0] || (n[0] = [
      g("div", null, null, -1)
    ])])) : x("", !0);
  }
}), ss = /* @__PURE__ */ Ke(Ni, [["__scopeId", "data-v-61696455"]]);
var st = {
  name: "TimesIcon",
  extends: Oe
};
function Ki(t) {
  return Hi(t) || Wi(t) || Ui(t) || Ri();
}
function Ri() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ui(t, e) {
  if (t) {
    if (typeof t == "string") return Xe(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Xe(t, e) : void 0;
  }
}
function Wi(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Hi(t) {
  if (Array.isArray(t)) return Xe(t);
}
function Xe(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function Gi(t, e, n, o, r, i) {
  return p(), h("svg", b({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t.pti()), Ki(e[0] || (e[0] = [g("path", {
    d: "M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
st.render = Gi;
var on = {
  name: "WindowMaximizeIcon",
  extends: Oe
};
function qi(t) {
  return Ji(t) || Xi(t) || Yi(t) || Zi();
}
function Zi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yi(t, e) {
  if (t) {
    if (typeof t == "string") return Je(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Je(t, e) : void 0;
  }
}
function Xi(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Ji(t) {
  if (Array.isArray(t)) return Je(t);
}
function Je(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function Qi(t, e, n, o, r, i) {
  return p(), h("svg", b({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t.pti()), qi(e[0] || (e[0] = [g("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
on.render = Qi;
var rn = {
  name: "WindowMinimizeIcon",
  extends: Oe
};
function er(t) {
  return ir(t) || or(t) || nr(t) || tr();
}
function tr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nr(t, e) {
  if (t) {
    if (typeof t == "string") return Qe(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Qe(t, e) : void 0;
  }
}
function or(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function ir(t) {
  if (Array.isArray(t)) return Qe(t);
}
function Qe(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function rr(t, e, n, o, r, i) {
  return p(), h("svg", b({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t.pti()), er(e[0] || (e[0] = [g("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
rn.render = rr;
var ar = D.extend({
  name: "focustrap-directive"
}), sr = w.extend({
  style: ar
});
function xe(t) {
  "@babel/helpers - typeof";
  return xe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, xe(t);
}
function wt(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function xt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? wt(Object(n), !0).forEach(function(o) {
      lr(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : wt(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function lr(t, e, n) {
  return (e = ur(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function ur(t) {
  var e = dr(t, "string");
  return xe(e) == "symbol" ? e : e + "";
}
function dr(t, e) {
  if (xe(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (xe(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var cr = sr.extend("focustrap", {
  mounted: function(e, n) {
    var o = n.value || {}, r = o.disabled;
    r || (this.createHiddenFocusableElements(e, n), this.bind(e, n), this.autoElementFocus(e, n)), e.setAttribute("data-pd-focustrap", !0), this.$el = e;
  },
  updated: function(e, n) {
    var o = n.value || {}, r = o.disabled;
    r && this.unbind(e);
  },
  unmounted: function(e) {
    this.unbind(e);
  },
  methods: {
    getComputedSelector: function(e) {
      return ':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(e ?? "");
    },
    bind: function(e, n) {
      var o = this, r = n.value || {}, i = r.onFocusIn, l = r.onFocusOut;
      e.$_pfocustrap_mutationobserver = new MutationObserver(function(u) {
        u.forEach(function(s) {
          if (s.type === "childList" && !e.contains(document.activeElement)) {
            var a = function(c) {
              var m = ft(c) ? ft(c, o.getComputedSelector(e.$_pfocustrap_focusableselector)) ? c : ce(e, o.getComputedSelector(e.$_pfocustrap_focusableselector)) : ce(c);
              return W(m) ? m : c.nextSibling && a(c.nextSibling);
            };
            N(a(s.nextSibling));
          }
        });
      }), e.$_pfocustrap_mutationobserver.disconnect(), e.$_pfocustrap_mutationobserver.observe(e, {
        childList: !0
      }), e.$_pfocustrap_focusinlistener = function(u) {
        return i && i(u);
      }, e.$_pfocustrap_focusoutlistener = function(u) {
        return l && l(u);
      }, e.addEventListener("focusin", e.$_pfocustrap_focusinlistener), e.addEventListener("focusout", e.$_pfocustrap_focusoutlistener);
    },
    unbind: function(e) {
      e.$_pfocustrap_mutationobserver && e.$_pfocustrap_mutationobserver.disconnect(), e.$_pfocustrap_focusinlistener && e.removeEventListener("focusin", e.$_pfocustrap_focusinlistener) && (e.$_pfocustrap_focusinlistener = null), e.$_pfocustrap_focusoutlistener && e.removeEventListener("focusout", e.$_pfocustrap_focusoutlistener) && (e.$_pfocustrap_focusoutlistener = null);
    },
    autoFocus: function(e) {
      this.autoElementFocus(this.$el, {
        value: xt(xt({}, e), {}, {
          autoFocus: !0
        })
      });
    },
    autoElementFocus: function(e, n) {
      var o = n.value || {}, r = o.autoFocusSelector, i = r === void 0 ? "" : r, l = o.firstFocusableSelector, u = l === void 0 ? "" : l, s = o.autoFocus, a = s === void 0 ? !1 : s, d = ce(e, "[autofocus]".concat(this.getComputedSelector(i)));
      a && !d && (d = ce(e, this.getComputedSelector(u))), N(d);
    },
    onFirstHiddenElementFocus: function(e) {
      var n, o = e.currentTarget, r = e.relatedTarget, i = r === o.$_pfocustrap_lasthiddenfocusableelement || !((n = this.$el) !== null && n !== void 0 && n.contains(r)) ? ce(o.parentElement, this.getComputedSelector(o.$_pfocustrap_focusableselector)) : o.$_pfocustrap_lasthiddenfocusableelement;
      N(i);
    },
    onLastHiddenElementFocus: function(e) {
      var n, o = e.currentTarget, r = e.relatedTarget, i = r === o.$_pfocustrap_firsthiddenfocusableelement || !((n = this.$el) !== null && n !== void 0 && n.contains(r)) ? wn(o.parentElement, this.getComputedSelector(o.$_pfocustrap_focusableselector)) : o.$_pfocustrap_firsthiddenfocusableelement;
      N(i);
    },
    createHiddenFocusableElements: function(e, n) {
      var o = this, r = n.value || {}, i = r.tabIndex, l = i === void 0 ? 0 : i, u = r.firstFocusableSelector, s = u === void 0 ? "" : u, a = r.lastFocusableSelector, d = a === void 0 ? "" : a, c = function(k) {
        return Nt("span", {
          class: "p-hidden-accessible p-hidden-focusable",
          tabIndex: l,
          role: "presentation",
          "aria-hidden": !0,
          "data-p-hidden-accessible": !0,
          "data-p-hidden-focusable": !0,
          onFocus: k?.bind(o)
        });
      }, m = c(this.onFirstHiddenElementFocus), y = c(this.onLastHiddenElementFocus);
      m.$_pfocustrap_lasthiddenfocusableelement = y, m.$_pfocustrap_focusableselector = s, m.setAttribute("data-pc-section", "firstfocusableelement"), y.$_pfocustrap_firsthiddenfocusableelement = m, y.$_pfocustrap_focusableselector = d, y.setAttribute("data-pc-section", "lastfocusableelement"), e.prepend(m), e.append(y);
    }
  }
});
function Ct() {
  Cn({
    variableName: Ut("scrollbar.width").name
  });
}
function Pt() {
  xn({
    variableName: Ut("scrollbar.width").name
  });
}
var pr = `
    .p-dialog {
        max-height: 90%;
        transform: scale(1);
        border-radius: dt('dialog.border.radius');
        box-shadow: dt('dialog.shadow');
        background: dt('dialog.background');
        border: 1px solid dt('dialog.border.color');
        color: dt('dialog.color');
    }

    .p-dialog-content {
        overflow-y: auto;
        padding: dt('dialog.content.padding');
    }

    .p-dialog-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('dialog.header.padding');
    }

    .p-dialog-title {
        font-weight: dt('dialog.title.font.weight');
        font-size: dt('dialog.title.font.size');
    }

    .p-dialog-footer {
        flex-shrink: 0;
        padding: dt('dialog.footer.padding');
        display: flex;
        justify-content: flex-end;
        gap: dt('dialog.footer.gap');
    }

    .p-dialog-header-actions {
        display: flex;
        align-items: center;
        gap: dt('dialog.header.gap');
    }

    .p-dialog-top .p-dialog,
    .p-dialog-bottom .p-dialog,
    .p-dialog-left .p-dialog,
    .p-dialog-right .p-dialog,
    .p-dialog-topleft .p-dialog,
    .p-dialog-topright .p-dialog,
    .p-dialog-bottomleft .p-dialog,
    .p-dialog-bottomright .p-dialog {
        margin: 0.75rem;
        transform: translate3d(0px, 0px, 0px);
    }

    .p-dialog-top .p-dialog-enter-active,
    .p-dialog-top .p-dialog-leave-active,
    .p-dialog-bottom .p-dialog-enter-active,
    .p-dialog-bottom .p-dialog-leave-active,
    .p-dialog-left .p-dialog-enter-active,
    .p-dialog-left .p-dialog-leave-active,
    .p-dialog-right .p-dialog-enter-active,
    .p-dialog-right .p-dialog-leave-active,
    .p-dialog-topleft .p-dialog-enter-active,
    .p-dialog-topleft .p-dialog-leave-active,
    .p-dialog-topright .p-dialog-enter-active,
    .p-dialog-topright .p-dialog-leave-active,
    .p-dialog-bottomleft .p-dialog-enter-active,
    .p-dialog-bottomleft .p-dialog-leave-active,
    .p-dialog-bottomright .p-dialog-enter-active,
    .p-dialog-bottomright .p-dialog-leave-active {
        transition: all 0.3s ease-out;
    }

    .p-dialog-top .p-dialog-enter-from,
    .p-dialog-top .p-dialog-leave-to {
        transform: translate3d(0px, -100%, 0px);
    }

    .p-dialog-bottom .p-dialog-enter-from,
    .p-dialog-bottom .p-dialog-leave-to {
        transform: translate3d(0px, 100%, 0px);
    }

    .p-dialog-left .p-dialog-enter-from,
    .p-dialog-left .p-dialog-leave-to,
    .p-dialog-topleft .p-dialog-enter-from,
    .p-dialog-topleft .p-dialog-leave-to,
    .p-dialog-bottomleft .p-dialog-enter-from,
    .p-dialog-bottomleft .p-dialog-leave-to {
        transform: translate3d(-100%, 0px, 0px);
    }

    .p-dialog-right .p-dialog-enter-from,
    .p-dialog-right .p-dialog-leave-to,
    .p-dialog-topright .p-dialog-enter-from,
    .p-dialog-topright .p-dialog-leave-to,
    .p-dialog-bottomright .p-dialog-enter-from,
    .p-dialog-bottomright .p-dialog-leave-to {
        transform: translate3d(100%, 0px, 0px);
    }

    .p-dialog-left:dir(rtl) .p-dialog-enter-from,
    .p-dialog-left:dir(rtl) .p-dialog-leave-to,
    .p-dialog-topleft:dir(rtl) .p-dialog-enter-from,
    .p-dialog-topleft:dir(rtl) .p-dialog-leave-to,
    .p-dialog-bottomleft:dir(rtl) .p-dialog-enter-from,
    .p-dialog-bottomleft:dir(rtl) .p-dialog-leave-to {
        transform: translate3d(100%, 0px, 0px);
    }

    .p-dialog-right:dir(rtl) .p-dialog-enter-from,
    .p-dialog-right:dir(rtl) .p-dialog-leave-to,
    .p-dialog-topright:dir(rtl) .p-dialog-enter-from,
    .p-dialog-topright:dir(rtl) .p-dialog-leave-to,
    .p-dialog-bottomright:dir(rtl) .p-dialog-enter-from,
    .p-dialog-bottomright:dir(rtl) .p-dialog-leave-to {
        transform: translate3d(-100%, 0px, 0px);
    }

    .p-dialog-maximized {
        width: 100vw !important;
        height: 100vh !important;
        top: 0px !important;
        left: 0px !important;
        max-height: 100%;
        height: 100%;
        border-radius: 0;
    }

    .p-dialog-maximized .p-dialog-content {
        flex-grow: 1;
    }

    .p-dialog .p-resizable-handle {
        position: absolute;
        font-size: 0.1px;
        display: block;
        cursor: se-resize;
        width: 12px;
        height: 12px;
        right: 1px;
        bottom: 1px;
    }

    .p-dialog-enter-active {
        animation: p-animate-dialog-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-dialog-leave-active {
        animation: p-animate-dialog-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    @keyframes p-animate-dialog-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-dialog-leave {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`, mr = {
  mask: function(e) {
    var n = e.position, o = e.modal;
    return {
      position: "fixed",
      height: "100%",
      width: "100%",
      left: 0,
      top: 0,
      display: "flex",
      justifyContent: n === "left" || n === "topleft" || n === "bottomleft" ? "flex-start" : n === "right" || n === "topright" || n === "bottomright" ? "flex-end" : "center",
      alignItems: n === "top" || n === "topleft" || n === "topright" ? "flex-start" : n === "bottom" || n === "bottomleft" || n === "bottomright" ? "flex-end" : "center",
      pointerEvents: o ? "auto" : "none"
    };
  },
  root: {
    display: "flex",
    flexDirection: "column",
    pointerEvents: "auto"
  }
}, fr = {
  mask: function(e) {
    var n = e.props, o = ["left", "right", "top", "topleft", "topright", "bottom", "bottomleft", "bottomright"], r = o.find(function(i) {
      return i === n.position;
    });
    return ["p-dialog-mask", {
      "p-overlay-mask p-overlay-mask-enter": n.modal
    }, r ? "p-dialog-".concat(r) : ""];
  },
  root: function(e) {
    var n = e.props, o = e.instance;
    return ["p-dialog p-component", {
      "p-dialog-maximized": n.maximizable && o.maximized
    }];
  },
  header: "p-dialog-header",
  title: "p-dialog-title",
  headerActions: "p-dialog-header-actions",
  pcMaximizeButton: "p-dialog-maximize-button",
  pcCloseButton: "p-dialog-close-button",
  content: "p-dialog-content",
  footer: "p-dialog-footer"
}, gr = D.extend({
  name: "dialog",
  style: pr,
  classes: fr,
  inlineStyles: mr
}), br = {
  name: "BaseDialog",
  extends: Z,
  props: {
    header: {
      type: null,
      default: null
    },
    footer: {
      type: null,
      default: null
    },
    visible: {
      type: Boolean,
      default: !1
    },
    modal: {
      type: Boolean,
      default: null
    },
    contentStyle: {
      type: null,
      default: null
    },
    contentClass: {
      type: String,
      default: null
    },
    contentProps: {
      type: null,
      default: null
    },
    maximizable: {
      type: Boolean,
      default: !1
    },
    dismissableMask: {
      type: Boolean,
      default: !1
    },
    closable: {
      type: Boolean,
      default: !0
    },
    closeOnEscape: {
      type: Boolean,
      default: !0
    },
    showHeader: {
      type: Boolean,
      default: !0
    },
    blockScroll: {
      type: Boolean,
      default: !1
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    autoZIndex: {
      type: Boolean,
      default: !0
    },
    position: {
      type: String,
      default: "center"
    },
    breakpoints: {
      type: Object,
      default: null
    },
    draggable: {
      type: Boolean,
      default: !0
    },
    keepInViewport: {
      type: Boolean,
      default: !0
    },
    minX: {
      type: Number,
      default: 0
    },
    minY: {
      type: Number,
      default: 0
    },
    appendTo: {
      type: [String, Object],
      default: "body"
    },
    closeIcon: {
      type: String,
      default: void 0
    },
    maximizeIcon: {
      type: String,
      default: void 0
    },
    minimizeIcon: {
      type: String,
      default: void 0
    },
    closeButtonProps: {
      type: Object,
      default: function() {
        return {
          severity: "secondary",
          text: !0,
          rounded: !0
        };
      }
    },
    maximizeButtonProps: {
      type: Object,
      default: function() {
        return {
          severity: "secondary",
          text: !0,
          rounded: !0
        };
      }
    },
    _instance: null
  },
  style: gr,
  provide: function() {
    return {
      $pcDialog: this,
      $parentInstance: this
    };
  }
}, an = {
  name: "Dialog",
  extends: br,
  inheritAttrs: !1,
  emits: ["update:visible", "show", "hide", "after-hide", "maximize", "unmaximize", "dragstart", "dragend"],
  provide: function() {
    var e = this;
    return {
      dialogRef: q(function() {
        return e._instance;
      })
    };
  },
  data: function() {
    return {
      containerVisible: this.visible,
      maximized: !1,
      focusableMax: null,
      focusableClose: null,
      target: null
    };
  },
  documentKeydownListener: null,
  container: null,
  mask: null,
  content: null,
  headerContainer: null,
  footerContainer: null,
  maximizableButton: null,
  closeButton: null,
  styleElement: null,
  dragging: null,
  documentDragListener: null,
  documentDragEndListener: null,
  lastPageX: null,
  lastPageY: null,
  maskMouseDownTarget: null,
  updated: function() {
    this.visible && (this.containerVisible = this.visible);
  },
  beforeUnmount: function() {
    this.unbindDocumentState(), this.unbindGlobalListeners(), this.destroyStyle(), this.mask && this.autoZIndex && ue.clear(this.mask), this.container = null, this.mask = null;
  },
  mounted: function() {
    this.breakpoints && this.createStyle();
  },
  methods: {
    close: function() {
      this.$emit("update:visible", !1);
    },
    onEnter: function() {
      this.$emit("show"), this.target = document.activeElement, this.enableDocumentSettings(), this.bindGlobalListeners(), this.autoZIndex && ue.set("modal", this.mask, this.baseZIndex + this.$primevue.config.zIndex.modal);
    },
    onAfterEnter: function() {
      this.focus();
    },
    onBeforeLeave: function() {
      this.modal && !this.isUnstyled && Bt(this.mask, "p-overlay-mask-leave"), this.dragging && this.documentDragEndListener && this.documentDragEndListener();
    },
    onLeave: function() {
      this.$emit("hide"), N(this.target), this.target = null, this.focusableClose = null, this.focusableMax = null;
    },
    onAfterLeave: function() {
      this.autoZIndex && ue.clear(this.mask), this.containerVisible = !1, this.unbindDocumentState(), this.unbindGlobalListeners(), this.$emit("after-hide");
    },
    onMaskMouseDown: function(e) {
      this.maskMouseDownTarget = e.target;
    },
    onMaskMouseUp: function() {
      this.dismissableMask && this.modal && this.mask === this.maskMouseDownTarget && this.close();
    },
    focus: function() {
      var e = function(r) {
        return r && r.querySelector("[autofocus]");
      }, n = this.$slots.footer && e(this.footerContainer);
      n || (n = this.$slots.header && e(this.headerContainer), n || (n = this.$slots.default && e(this.content), n || (this.maximizable ? (this.focusableMax = !0, n = this.maximizableButton) : (this.focusableClose = !0, n = this.closeButton)))), n && N(n, {
        focusVisible: !0
      });
    },
    maximize: function(e) {
      this.maximized ? (this.maximized = !1, this.$emit("unmaximize", e)) : (this.maximized = !0, this.$emit("maximize", e)), this.modal || (this.maximized ? Ct() : Pt());
    },
    enableDocumentSettings: function() {
      (this.modal || !this.modal && this.blockScroll || this.maximizable && this.maximized) && Ct();
    },
    unbindDocumentState: function() {
      (this.modal || !this.modal && this.blockScroll || this.maximizable && this.maximized) && Pt();
    },
    onKeyDown: function(e) {
      e.code === "Escape" && this.closeOnEscape && this.close();
    },
    bindDocumentKeyDownListener: function() {
      this.documentKeydownListener || (this.documentKeydownListener = this.onKeyDown.bind(this), window.document.addEventListener("keydown", this.documentKeydownListener));
    },
    unbindDocumentKeyDownListener: function() {
      this.documentKeydownListener && (window.document.removeEventListener("keydown", this.documentKeydownListener), this.documentKeydownListener = null);
    },
    containerRef: function(e) {
      this.container = e;
    },
    maskRef: function(e) {
      this.mask = e;
    },
    contentRef: function(e) {
      this.content = e;
    },
    headerContainerRef: function(e) {
      this.headerContainer = e;
    },
    footerContainerRef: function(e) {
      this.footerContainer = e;
    },
    maximizableRef: function(e) {
      this.maximizableButton = e ? e.$el : void 0;
    },
    closeButtonRef: function(e) {
      this.closeButton = e ? e.$el : void 0;
    },
    createStyle: function() {
      if (!this.styleElement && !this.isUnstyled) {
        var e;
        this.styleElement = document.createElement("style"), this.styleElement.type = "text/css", _n(this.styleElement, "nonce", (e = this.$primevue) === null || e === void 0 || (e = e.config) === null || e === void 0 || (e = e.csp) === null || e === void 0 ? void 0 : e.nonce), document.head.appendChild(this.styleElement);
        var n = "";
        for (var o in this.breakpoints)
          n += `
                        @media screen and (max-width: `.concat(o, `) {
                            .p-dialog[`).concat(this.$attrSelector, `] {
                                width: `).concat(this.breakpoints[o], ` !important;
                            }
                        }
                    `);
        this.styleElement.innerHTML = n;
      }
    },
    destroyStyle: function() {
      this.styleElement && (document.head.removeChild(this.styleElement), this.styleElement = null);
    },
    initDrag: function(e) {
      e.target.closest("div").getAttribute("data-pc-section") !== "headeractions" && this.draggable && (this.dragging = !0, this.lastPageX = e.pageX, this.lastPageY = e.pageY, this.container.style.margin = "0", document.body.setAttribute("data-p-unselectable-text", "true"), !this.isUnstyled && Rt(document.body, {
        "user-select": "none"
      }), this.$emit("dragstart", e));
    },
    bindGlobalListeners: function() {
      this.draggable && (this.bindDocumentDragListener(), this.bindDocumentDragEndListener()), this.closeOnEscape && this.bindDocumentKeyDownListener();
    },
    unbindGlobalListeners: function() {
      this.unbindDocumentDragListener(), this.unbindDocumentDragEndListener(), this.unbindDocumentKeyDownListener();
    },
    bindDocumentDragListener: function() {
      var e = this;
      this.documentDragListener = function(n) {
        if (e.dragging) {
          var o = ge(e.container), r = Ft(e.container), i = n.pageX - e.lastPageX, l = n.pageY - e.lastPageY, u = e.container.getBoundingClientRect(), s = u.left + i, a = u.top + l, d = Pn(), c = getComputedStyle(e.container), m = parseFloat(c.marginLeft), y = parseFloat(c.marginTop);
          e.container.style.position = "fixed", e.keepInViewport ? (s >= e.minX && s + o < d.width && (e.lastPageX = n.pageX, e.container.style.left = s - m + "px"), a >= e.minY && a + r < d.height && (e.lastPageY = n.pageY, e.container.style.top = a - y + "px")) : (e.lastPageX = n.pageX, e.container.style.left = s - m + "px", e.lastPageY = n.pageY, e.container.style.top = a - y + "px");
        }
      }, window.document.addEventListener("mousemove", this.documentDragListener);
    },
    unbindDocumentDragListener: function() {
      this.documentDragListener && (window.document.removeEventListener("mousemove", this.documentDragListener), this.documentDragListener = null);
    },
    bindDocumentDragEndListener: function() {
      var e = this;
      this.documentDragEndListener = function(n) {
        e.dragging && (e.dragging = !1, document.body.removeAttribute("data-p-unselectable-text"), !e.isUnstyled && (document.body.style["user-select"] = ""), e.$emit("dragend", n));
      }, window.document.addEventListener("mouseup", this.documentDragEndListener);
    },
    unbindDocumentDragEndListener: function() {
      this.documentDragEndListener && (window.document.removeEventListener("mouseup", this.documentDragEndListener), this.documentDragEndListener = null);
    }
  },
  computed: {
    maximizeIconComponent: function() {
      return this.maximized ? this.minimizeIcon ? "span" : "WindowMinimizeIcon" : this.maximizeIcon ? "span" : "WindowMaximizeIcon";
    },
    ariaLabelledById: function() {
      return this.header != null || this.$attrs["aria-labelledby"] !== null ? this.$id + "_header" : null;
    },
    closeAriaLabel: function() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : void 0;
    },
    dataP: function() {
      return Q({
        maximized: this.maximized,
        modal: this.modal
      });
    }
  },
  directives: {
    ripple: Ne,
    focustrap: cr
  },
  components: {
    Button: R,
    Portal: at,
    WindowMinimizeIcon: rn,
    WindowMaximizeIcon: on,
    TimesIcon: st
  }
};
function Ce(t) {
  "@babel/helpers - typeof";
  return Ce = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ce(t);
}
function _t(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function Lt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? _t(Object(n), !0).forEach(function(o) {
      hr(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : _t(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function hr(t, e, n) {
  return (e = vr(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function vr(t) {
  var e = yr(t, "string");
  return Ce(e) == "symbol" ? e : e + "";
}
function yr(t, e) {
  if (Ce(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (Ce(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var kr = ["data-p"], $r = ["aria-labelledby", "aria-modal", "data-p"], Ir = ["id"], Sr = ["data-p"];
function wr(t, e, n, o, r, i) {
  var l = G("Button"), u = G("Portal"), s = je("focustrap");
  return p(), C(u, {
    appendTo: t.appendTo
  }, {
    default: S(function() {
      return [r.containerVisible ? (p(), h("div", b({
        key: 0,
        ref: i.maskRef,
        class: t.cx("mask"),
        style: t.sx("mask", !0, {
          position: t.position,
          modal: t.modal
        }),
        onMousedown: e[1] || (e[1] = function() {
          return i.onMaskMouseDown && i.onMaskMouseDown.apply(i, arguments);
        }),
        onMouseup: e[2] || (e[2] = function() {
          return i.onMaskMouseUp && i.onMaskMouseUp.apply(i, arguments);
        }),
        "data-p": i.dataP
      }, t.ptm("mask")), [L(Ee, b({
        name: "p-dialog",
        onEnter: i.onEnter,
        onAfterEnter: i.onAfterEnter,
        onBeforeLeave: i.onBeforeLeave,
        onLeave: i.onLeave,
        onAfterLeave: i.onAfterLeave,
        appear: ""
      }, t.ptm("transition")), {
        default: S(function() {
          return [t.visible ? Ve((p(), h("div", b({
            key: 0,
            ref: i.containerRef,
            class: t.cx("root"),
            style: t.sx("root"),
            role: "dialog",
            "aria-labelledby": i.ariaLabelledById,
            "aria-modal": t.modal,
            "data-p": i.dataP
          }, t.ptmi("root")), [t.$slots.container ? _(t.$slots, "container", {
            key: 0,
            closeCallback: i.close,
            maximizeCallback: function(d) {
              return i.maximize(d);
            },
            initDragCallback: i.initDrag
          }) : (p(), h(fe, {
            key: 1
          }, [t.showHeader ? (p(), h("div", b({
            key: 0,
            ref: i.headerContainerRef,
            class: t.cx("header"),
            onMousedown: e[0] || (e[0] = function() {
              return i.initDrag && i.initDrag.apply(i, arguments);
            })
          }, t.ptm("header")), [_(t.$slots, "header", {
            class: X(t.cx("title"))
          }, function() {
            return [t.header ? (p(), h("span", b({
              key: 0,
              id: i.ariaLabelledById,
              class: t.cx("title")
            }, t.ptm("title")), F(t.header), 17, Ir)) : x("", !0)];
          }), g("div", b({
            class: t.cx("headerActions")
          }, t.ptm("headerActions")), [t.maximizable ? _(t.$slots, "maximizebutton", {
            key: 0,
            maximized: r.maximized,
            maximizeCallback: function(d) {
              return i.maximize(d);
            }
          }, function() {
            return [L(l, b({
              ref: i.maximizableRef,
              autofocus: r.focusableMax,
              class: t.cx("pcMaximizeButton"),
              onClick: i.maximize,
              tabindex: t.maximizable ? "0" : "-1",
              unstyled: t.unstyled
            }, t.maximizeButtonProps, {
              pt: t.ptm("pcMaximizeButton"),
              "data-pc-group-section": "headericon"
            }), {
              icon: S(function(a) {
                return [_(t.$slots, "maximizeicon", {
                  maximized: r.maximized
                }, function() {
                  return [(p(), C(ae(i.maximizeIconComponent), b({
                    class: [a.class, r.maximized ? t.minimizeIcon : t.maximizeIcon]
                  }, t.ptm("pcMaximizeButton").icon), null, 16, ["class"]))];
                })];
              }),
              _: 3
            }, 16, ["autofocus", "class", "onClick", "tabindex", "unstyled", "pt"])];
          }) : x("", !0), t.closable ? _(t.$slots, "closebutton", {
            key: 1,
            closeCallback: i.close
          }, function() {
            return [L(l, b({
              ref: i.closeButtonRef,
              autofocus: r.focusableClose,
              class: t.cx("pcCloseButton"),
              onClick: i.close,
              "aria-label": i.closeAriaLabel,
              unstyled: t.unstyled
            }, t.closeButtonProps, {
              pt: t.ptm("pcCloseButton"),
              "data-pc-group-section": "headericon"
            }), {
              icon: S(function(a) {
                return [_(t.$slots, "closeicon", {}, function() {
                  return [(p(), C(ae(t.closeIcon ? "span" : "TimesIcon"), b({
                    class: [t.closeIcon, a.class]
                  }, t.ptm("pcCloseButton").icon), null, 16, ["class"]))];
                })];
              }),
              _: 3
            }, 16, ["autofocus", "class", "onClick", "aria-label", "unstyled", "pt"])];
          }) : x("", !0)], 16)], 16)) : x("", !0), g("div", b({
            ref: i.contentRef,
            class: [t.cx("content"), t.contentClass],
            style: t.contentStyle,
            "data-p": i.dataP
          }, Lt(Lt({}, t.contentProps), t.ptm("content"))), [_(t.$slots, "default")], 16, Sr), t.footer || t.$slots.footer ? (p(), h("div", b({
            key: 1,
            ref: i.footerContainerRef,
            class: t.cx("footer")
          }, t.ptm("footer")), [_(t.$slots, "footer", {}, function() {
            return [H(F(t.footer), 1)];
          })], 16)) : x("", !0)], 64))], 16, $r)), [[s, {
            disabled: !t.modal
          }]]) : x("", !0)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onBeforeLeave", "onLeave", "onAfterLeave"])], 16, kr)) : x("", !0)];
    }),
    _: 3
  }, 8, ["appendTo"]);
}
an.render = wr;
const xr = { class: "dialog-loader" }, Cr = { class: "flex flex-col justify-center" }, Pr = {
  key: 0,
  class: "mt-8 text-center"
}, ls = /* @__PURE__ */ j({
  __name: "DialogLoader",
  props: {
    visible: { type: Boolean },
    headerText: {},
    loadingText: {}
  },
  setup(t) {
    return (e, n) => (p(), h("div", xr, [
      L(z(an), {
        visible: t.visible,
        modal: !0,
        dismissableMask: !1,
        closable: !1,
        showHeader: !0,
        header: t.headerText,
        showFooter: !1,
        closeOnEscape: !1,
        "pt:mask:style": "background-color: rgba(0, 0, 0, 0.9) !important"
      }, {
        default: S(() => [
          g("div", Cr, [
            L(z(it)),
            t.loadingText ? (p(), h("div", Pr, F(t.loadingText), 1)) : x("", !0)
          ])
        ]),
        _: 1
      }, 8, ["visible", "header"])
    ]));
  }
});
var _r = `
    .p-skeleton {
        display: block;
        overflow: hidden;
        background: dt('skeleton.background');
        border-radius: dt('skeleton.border.radius');
    }

    .p-skeleton::after {
        content: '';
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), dt('skeleton.animation.background'), rgba(255, 255, 255, 0));
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
`, Lr = {
  root: {
    position: "relative"
  }
}, Tr = {
  root: function(e) {
    var n = e.props;
    return ["p-skeleton p-component", {
      "p-skeleton-circle": n.shape === "circle",
      "p-skeleton-animation-none": n.animation === "none"
    }];
  }
}, Er = D.extend({
  name: "skeleton",
  style: _r,
  classes: Tr,
  inlineStyles: Lr
}), Or = {
  name: "BaseSkeleton",
  extends: Z,
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
  style: Er,
  provide: function() {
    return {
      $pcSkeleton: this,
      $parentInstance: this
    };
  }
};
function Pe(t) {
  "@babel/helpers - typeof";
  return Pe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Pe(t);
}
function zr(t, e, n) {
  return (e = Ar(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Ar(t) {
  var e = Mr(t, "string");
  return Pe(e) == "symbol" ? e : e + "";
}
function Mr(t, e) {
  if (Pe(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (Pe(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var et = {
  name: "Skeleton",
  extends: Or,
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
      return Q(zr({}, this.shape, this.shape));
    }
  }
}, Dr = ["data-p"];
function jr(t, e, n, o, r, i) {
  return p(), h("div", b({
    class: t.cx("root"),
    style: [t.sx("root"), i.containerStyle],
    "aria-hidden": "true"
  }, t.ptmi("root"), {
    "data-p": i.dataP
  }), null, 16, Dr);
}
et.render = jr;
const Vr = {
  key: 0,
  class: "vstack-sm"
}, Fr = {
  key: 0,
  class: "flex flex-col sm:flex-row gap-0 sm:gap-2"
}, Br = { class: "text-primary break-all" }, Nr = {
  key: 1,
  class: "flex flex-col sm:flex-row gap-0 sm:gap-2"
}, Kr = { class: "text-primary break-all sm:pl-2" }, Rr = {
  key: 1,
  class: "vstack-sm"
}, us = /* @__PURE__ */ j({
  __name: "UserAccountInfo",
  props: {
    isLoading: { type: Boolean },
    userId: {},
    userEmail: {}
  },
  setup(t) {
    return (e, n) => (p(), C(z(re), null, {
      title: S(() => [
        _(e.$slots, "default", { id: "header" }, () => [
          n[0] || (n[0] = g("h2", { class: "h2 text-color" }, "Your details", -1))
        ])
      ]),
      content: S(() => [
        t.isLoading ? (p(), h("div", Rr, [
          L(z(et), { height: "2rem" }),
          L(z(et), { height: "2rem" })
        ])) : (p(), h("div", Vr, [
          t.userId ? (p(), h("div", Fr, [
            n[1] || (n[1] = g("div", { class: "block sm:flex font-bold" }, [
              g("span", null, "ID"),
              g("span", { class: "hidden sm:block" }, ":")
            ], -1)),
            g("div", null, [
              g("code", Br, F(t.userId), 1)
            ])
          ])) : x("", !0),
          t.userEmail ? (p(), h("div", Nr, [
            n[2] || (n[2] = g("div", { class: "block sm:flex font-bold" }, [
              g("span", null, "Email"),
              g("span", { class: "hidden sm:block" }, ":")
            ], -1)),
            g("div", null, [
              g("strong", Kr, F(t.userEmail), 1)
            ])
          ])) : x("", !0)
        ]))
      ]),
      _: 3
    }));
  }
});
var Ur = {
  name: "BaseEditableHolder",
  extends: Z,
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
      d_value: this.defaultValue !== void 0 ? this.defaultValue : this.modelValue
    };
  },
  watch: {
    modelValue: {
      deep: !0,
      handler: function(e) {
        this.d_value = e;
      }
    },
    defaultValue: function(e) {
      this.d_value = e;
    },
    $formName: {
      immediate: !0,
      handler: function(e) {
        var n, o;
        this.formField = ((n = this.$pcForm) === null || n === void 0 || (o = n.register) === null || o === void 0 ? void 0 : o.call(n, e, this.$formControl)) || {};
      }
    },
    $formControl: {
      immediate: !0,
      handler: function(e) {
        var n, o;
        this.formField = ((n = this.$pcForm) === null || n === void 0 || (o = n.register) === null || o === void 0 ? void 0 : o.call(n, this.$formName, e)) || {};
      }
    },
    $formDefaultValue: {
      immediate: !0,
      handler: function(e) {
        this.d_value !== e && (this.d_value = e);
      }
    },
    $formValue: {
      immediate: !1,
      handler: function(e) {
        var n;
        (n = this.$pcForm) !== null && n !== void 0 && n.getFieldState(this.$formName) && e !== this.d_value && (this.d_value = e);
      }
    }
  },
  formField: {},
  methods: {
    writeValue: function(e, n) {
      var o, r;
      this.controlled && (this.d_value = e, this.$emit("update:modelValue", e)), this.$emit("value-change", e), (o = (r = this.formField).onChange) === null || o === void 0 || o.call(r, {
        originalEvent: n,
        value: e
      });
    },
    // @todo move to @primeuix/utils
    findNonEmpty: function() {
      for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
        n[o] = arguments[o];
      return n.find(W);
    }
  },
  computed: {
    $filled: function() {
      return W(this.d_value);
    },
    $invalid: function() {
      var e, n;
      return !this.$formNovalidate && this.findNonEmpty(this.invalid, (e = this.$pcFormField) === null || e === void 0 || (e = e.$field) === null || e === void 0 ? void 0 : e.invalid, (n = this.$pcForm) === null || n === void 0 || (n = n.getFieldState(this.$formName)) === null || n === void 0 ? void 0 : n.invalid);
    },
    $formName: function() {
      var e;
      return this.$formNovalidate ? void 0 : this.name || ((e = this.$formControl) === null || e === void 0 ? void 0 : e.name);
    },
    $formControl: function() {
      var e;
      return this.formControl || ((e = this.$pcFormField) === null || e === void 0 ? void 0 : e.formControl);
    },
    $formNovalidate: function() {
      var e;
      return (e = this.$formControl) === null || e === void 0 ? void 0 : e.novalidate;
    },
    $formDefaultValue: function() {
      var e, n;
      return this.findNonEmpty(this.d_value, (e = this.$pcFormField) === null || e === void 0 ? void 0 : e.initialValue, (n = this.$pcForm) === null || n === void 0 || (n = n.initialValues) === null || n === void 0 ? void 0 : n[this.$formName]);
    },
    $formValue: function() {
      var e, n;
      return this.findNonEmpty((e = this.$pcFormField) === null || e === void 0 || (e = e.$field) === null || e === void 0 ? void 0 : e.value, (n = this.$pcForm) === null || n === void 0 || (n = n.getFieldState(this.$formName)) === null || n === void 0 ? void 0 : n.value);
    },
    controlled: function() {
      return this.$inProps.hasOwnProperty("modelValue") || !this.$inProps.hasOwnProperty("modelValue") && !this.$inProps.hasOwnProperty("defaultValue");
    },
    // @deprecated use $filled instead
    filled: function() {
      return this.$filled;
    }
  }
}, sn = {
  name: "BaseInput",
  extends: Ur,
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
      var e;
      return (e = this.variant) !== null && e !== void 0 ? e : this.$primevue.config.inputStyle || this.$primevue.config.inputVariant;
    },
    $fluid: function() {
      var e;
      return (e = this.fluid) !== null && e !== void 0 ? e : !!this.$pcFluid;
    },
    // @deprecated use $fluid instead
    hasFluid: function() {
      return this.$fluid;
    }
  }
}, Wr = `
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`, Hr = {
  root: function(e) {
    var n = e.instance, o = e.props;
    return ["p-inputtext p-component", {
      "p-filled": n.$filled,
      "p-inputtext-sm p-inputfield-sm": o.size === "small",
      "p-inputtext-lg p-inputfield-lg": o.size === "large",
      "p-invalid": n.$invalid,
      "p-variant-filled": n.$variant === "filled",
      "p-inputtext-fluid": n.$fluid
    }];
  }
}, Gr = D.extend({
  name: "inputtext",
  style: Wr,
  classes: Hr
}), qr = {
  name: "BaseInputText",
  extends: sn,
  style: Gr,
  provide: function() {
    return {
      $pcInputText: this,
      $parentInstance: this
    };
  }
};
function _e(t) {
  "@babel/helpers - typeof";
  return _e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, _e(t);
}
function Zr(t, e, n) {
  return (e = Yr(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Yr(t) {
  var e = Xr(t, "string");
  return _e(e) == "symbol" ? e : e + "";
}
function Xr(t, e) {
  if (_e(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (_e(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Re = {
  name: "InputText",
  extends: qr,
  inheritAttrs: !1,
  methods: {
    onInput: function(e) {
      this.writeValue(e.target.value, e);
    }
  },
  computed: {
    attrs: function() {
      return b(this.ptmi("root", {
        context: {
          filled: this.$filled,
          disabled: this.disabled
        }
      }), this.formField);
    },
    dataP: function() {
      return Q(Zr({
        invalid: this.$invalid,
        fluid: this.$fluid,
        filled: this.$variant === "filled"
      }, this.size, this.size));
    }
  }
}, Jr = ["value", "name", "disabled", "aria-invalid", "data-p"];
function Qr(t, e, n, o, r, i) {
  return p(), h("input", b({
    type: "text",
    class: t.cx("root"),
    value: t.d_value,
    name: t.name,
    disabled: t.disabled,
    "aria-invalid": t.$invalid || void 0,
    "data-p": i.dataP,
    onInput: e[0] || (e[0] = function() {
      return i.onInput && i.onInput.apply(i, arguments);
    })
  }, i.attrs), null, 16, Jr);
}
Re.render = Qr;
var ea = `
    .p-message {
        display: grid;
        grid-template-rows: 1fr;
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content-wrapper {
        min-height: 0;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }

    .p-message-enter-active {
        animation: p-animate-message-enter 0.3s ease-out forwards;
        overflow: hidden;
    }

    .p-message-leave-active {
        animation: p-animate-message-leave 0.15s ease-in forwards;
        overflow: hidden;
    }

    @keyframes p-animate-message-enter {
        from {
            opacity: 0;
            grid-template-rows: 0fr;
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-message-leave {
        from {
            opacity: 1;
            grid-template-rows: 1fr;
        }
        to {
            opacity: 0;
            margin: 0;
            grid-template-rows: 0fr;
        }
    }
`, ta = {
  root: function(e) {
    var n = e.props;
    return ["p-message p-component p-message-" + n.severity, {
      "p-message-outlined": n.variant === "outlined",
      "p-message-simple": n.variant === "simple",
      "p-message-sm": n.size === "small",
      "p-message-lg": n.size === "large"
    }];
  },
  contentWrapper: "p-message-content-wrapper",
  content: "p-message-content",
  icon: "p-message-icon",
  text: "p-message-text",
  closeButton: "p-message-close-button",
  closeIcon: "p-message-close-icon"
}, na = D.extend({
  name: "message",
  style: ea,
  classes: ta
}), oa = {
  name: "BaseMessage",
  extends: Z,
  props: {
    severity: {
      type: String,
      default: "info"
    },
    closable: {
      type: Boolean,
      default: !1
    },
    life: {
      type: Number,
      default: null
    },
    icon: {
      type: String,
      default: void 0
    },
    closeIcon: {
      type: String,
      default: void 0
    },
    closeButtonProps: {
      type: null,
      default: null
    },
    size: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: null
    }
  },
  style: na,
  provide: function() {
    return {
      $pcMessage: this,
      $parentInstance: this
    };
  }
};
function Le(t) {
  "@babel/helpers - typeof";
  return Le = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Le(t);
}
function Tt(t, e, n) {
  return (e = ia(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function ia(t) {
  var e = ra(t, "string");
  return Le(e) == "symbol" ? e : e + "";
}
function ra(t, e) {
  if (Le(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (Le(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var lt = {
  name: "Message",
  extends: oa,
  inheritAttrs: !1,
  emits: ["close", "life-end"],
  timeout: null,
  data: function() {
    return {
      visible: !0
    };
  },
  mounted: function() {
    var e = this;
    this.life && setTimeout(function() {
      e.visible = !1, e.$emit("life-end");
    }, this.life);
  },
  methods: {
    close: function(e) {
      this.visible = !1, this.$emit("close", e);
    }
  },
  computed: {
    closeAriaLabel: function() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : void 0;
    },
    dataP: function() {
      return Q(Tt(Tt({
        outlined: this.variant === "outlined",
        simple: this.variant === "simple"
      }, this.severity, this.severity), this.size, this.size));
    }
  },
  directives: {
    ripple: Ne
  },
  components: {
    TimesIcon: st
  }
};
function Te(t) {
  "@babel/helpers - typeof";
  return Te = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Te(t);
}
function Et(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function Ot(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Et(Object(n), !0).forEach(function(o) {
      aa(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Et(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function aa(t, e, n) {
  return (e = sa(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function sa(t) {
  var e = la(t, "string");
  return Te(e) == "symbol" ? e : e + "";
}
function la(t, e) {
  if (Te(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (Te(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var ua = ["data-p"], da = ["data-p"], ca = ["data-p"], pa = ["aria-label", "data-p"], ma = ["data-p"];
function fa(t, e, n, o, r, i) {
  var l = G("TimesIcon"), u = je("ripple");
  return p(), C(Ee, b({
    name: "p-message",
    appear: ""
  }, t.ptmi("transition")), {
    default: S(function() {
      return [r.visible ? (p(), h("div", b({
        key: 0,
        class: t.cx("root"),
        role: "alert",
        "aria-live": "assertive",
        "aria-atomic": "true",
        "data-p": i.dataP
      }, t.ptm("root")), [g("div", b({
        class: t.cx("contentWrapper")
      }, t.ptm("contentWrapper")), [t.$slots.container ? _(t.$slots, "container", {
        key: 0,
        closeCallback: i.close
      }) : (p(), h("div", b({
        key: 1,
        class: t.cx("content"),
        "data-p": i.dataP
      }, t.ptm("content")), [_(t.$slots, "icon", {
        class: X(t.cx("icon"))
      }, function() {
        return [(p(), C(ae(t.icon ? "span" : null), b({
          class: [t.cx("icon"), t.icon],
          "data-p": i.dataP
        }, t.ptm("icon")), null, 16, ["class", "data-p"]))];
      }), t.$slots.default ? (p(), h("div", b({
        key: 0,
        class: t.cx("text"),
        "data-p": i.dataP
      }, t.ptm("text")), [_(t.$slots, "default")], 16, ca)) : x("", !0), t.closable ? Ve((p(), h("button", b({
        key: 1,
        class: t.cx("closeButton"),
        "aria-label": i.closeAriaLabel,
        type: "button",
        onClick: e[0] || (e[0] = function(s) {
          return i.close(s);
        }),
        "data-p": i.dataP
      }, Ot(Ot({}, t.closeButtonProps), t.ptm("closeButton"))), [_(t.$slots, "closeicon", {}, function() {
        return [t.closeIcon ? (p(), h("i", b({
          key: 0,
          class: [t.cx("closeIcon"), t.closeIcon],
          "data-p": i.dataP
        }, t.ptm("closeIcon")), null, 16, ma)) : (p(), C(l, b({
          key: 1,
          class: [t.cx("closeIcon"), t.closeIcon],
          "data-p": i.dataP
        }, t.ptm("closeIcon")), null, 16, ["class", "data-p"]))];
      })], 16, pa)), [[u]]) : x("", !0)], 16, da))], 16)], 16, ua)) : x("", !0)];
    }),
    _: 3
  }, 16);
}
lt.render = fa;
const ga = { class: "flex flex-col gap-1" }, ba = ["for"], ha = {
  key: 1,
  class: "text-sm text-gray-500"
}, va = { class: "mt-1" }, ut = /* @__PURE__ */ j({
  __name: "FormField",
  props: {
    id: {},
    label: {},
    helper: {},
    error: {}
  },
  setup(t) {
    return (e, n) => (p(), h("div", ga, [
      t.label ? (p(), h("label", {
        key: 0,
        for: t.id,
        class: "font-medium"
      }, F(t.label), 9, ba)) : x("", !0),
      t.helper ? (p(), h("p", ha, F(t.helper), 1)) : x("", !0),
      g("div", va, [
        _(e.$slots, "default")
      ]),
      t.error ? (p(), C(z(lt), {
        key: 2,
        "data-test": `${t.id}-error-message`,
        class: "mt-1",
        severity: "error",
        size: "small",
        variant: "simple"
      }, {
        default: S(() => [
          H(F(t.error), 1)
        ]),
        _: 1
      }, 8, ["data-test"])) : x("", !0)
    ]));
  }
}), ya = "Please enter a valid email address", ln = /* @__PURE__ */ j({
  __name: "EmailInput",
  props: /* @__PURE__ */ ie({
    isSubmitClicked: { type: Boolean },
    labelText: {}
  }, {
    email: { required: !0 },
    emailModifiers: {}
  }),
  emits: /* @__PURE__ */ ie(["validity-changed"], ["update:email"]),
  setup(t, { emit: e }) {
    function n(s) {
      return Ht.string().email().safeParse(s).success;
    }
    const o = Fe(t, "email"), r = t, i = e;
    de(() => {
      i("validity-changed", n(o.value));
    });
    const l = q(() => r.isSubmitClicked && !n(o.value));
    function u(s) {
      const a = (s ?? "").trim();
      o.value = a, i("validity-changed", n(a));
    }
    return (s, a) => (p(), C(ut, {
      id: "email",
      label: t.labelText,
      error: l.value ? ya : void 0
    }, {
      default: S(() => [
        L(z(Re), {
          id: "email",
          modelValue: o.value,
          invalid: l.value,
          placeholder: "Email",
          required: "",
          class: "w-full",
          "data-test": "auth-email-field",
          "onUpdate:modelValue": u
        }, null, 8, ["modelValue", "invalid"])
      ]),
      _: 1
    }, 8, ["label", "error"]));
  }
}), ka = { class: "flex flex-col items-center gap-4 text-center" }, $a = { class: "flex flex-col gap-2" }, un = /* @__PURE__ */ j({
  __name: "ActionConfirmMsg",
  props: {
    iconClass: {}
  },
  setup(t) {
    return (e, n) => (p(), h("div", ka, [
      g("i", {
        class: X([t.iconClass, "border-2 p-4 rounded-full text-primary"]),
        style: { "font-size": "1.2rem !important" }
      }, null, 2),
      g("div", $a, [
        _(e.$slots, "default")
      ])
    ]));
  }
}), Ia = { key: 0 }, Sa = { class: "text-primary break-all px-2" }, ds = /* @__PURE__ */ j({
  __name: "ChangeEmailRequest",
  props: /* @__PURE__ */ ie({
    isEmailSent: { type: Boolean },
    isLoading: { type: Boolean }
  }, {
    email: { default: "" },
    emailModifiers: {}
  }),
  emits: /* @__PURE__ */ ie(["requestEmailChange"], ["update:email"]),
  setup(t, { emit: e }) {
    const n = e, o = Fe(t, "email"), r = M(!1), i = M(!1);
    function l(s) {
      i.value = s;
    }
    function u() {
      r.value = !0, i.value && n("requestEmailChange", { email: o.value });
    }
    return (s, a) => (p(), C(z(re), null, {
      title: S(() => [
        _(s.$slots, "default", { id: "header" }, () => [
          a[1] || (a[1] = g("h2", { class: "h2" }, "Change your email", -1))
        ])
      ]),
      content: S(() => [
        t.isEmailSent ? (p(), C(un, {
          key: 1,
          iconClass: "pi pi-envelope",
          class: "w-full max-w-lg mx-auto"
        }, {
          default: S(() => [
            g("p", null, [
              a[4] || (a[4] = g("span", { class: "block text-wrap" }, "We have sent a verification email to:", -1)),
              g("strong", Sa, F(o.value), 1),
              a[5] || (a[5] = g("span", { class: "block mt-8" }, " Please check the inbox of your new email and click on the verification link to change your email. ", -1))
            ])
          ]),
          _: 1
        })) : (p(), h("div", Ia, [
          g("form", {
            class: "vstack-form",
            onSubmit: Be(u, ["prevent"])
          }, [
            L(ln, {
              email: o.value,
              "onUpdate:email": a[0] || (a[0] = (d) => o.value = d),
              isSubmitClicked: r.value,
              labelText: "Enter your new email",
              onValidityChanged: l
            }, null, 8, ["email", "isSubmitClicked"]),
            a[3] || (a[3] = g("p", { class: "text-sm" }, " You will receive an email to your old email to verify your new email address. Please click on the email link to update your email. ", -1)),
            L(z(R), {
              type: "submit",
              loading: t.isLoading
            }, {
              default: S(() => [...a[2] || (a[2] = [
                H("Change email", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ], 32)
        ]))
      ]),
      _: 3
    }));
  }
}), wa = {
  key: 0,
  class: "vstack-form"
}, cs = /* @__PURE__ */ j({
  __name: "DeleteAccountRequest",
  props: {
    isDeleteEmailSent: { type: Boolean },
    isLoading: { type: Boolean }
  },
  emits: ["sendDeleteEmail"],
  setup(t, { emit: e }) {
    const n = t, o = e;
    function r() {
      o("sendDeleteEmail");
    }
    return (i, l) => (p(), C(z(re), null, {
      title: S(() => [
        _(i.$slots, "default", { id: "header" }, () => [
          l[0] || (l[0] = g("h2", { class: "h2" }, "Delete your account", -1))
        ])
      ]),
      content: S(() => [
        n.isDeleteEmailSent ? (p(), C(un, {
          key: 1,
          iconClass: "pi pi-envelope"
        }, {
          default: S(() => [...l[3] || (l[3] = [
            g("p", null, " We have sent you an email to verify your account deletion. Please check your inbox and click on the verification link. ", -1)
          ])]),
          _: 1
        })) : (p(), h("div", wa, [
          l[2] || (l[2] = g("p", null, " You will receive an email to verify your account deletion. Please click on the email link to delete your account. ", -1)),
          L(z(R), {
            type: "button",
            loading: n.isLoading,
            onClick: r
          }, {
            default: S(() => [...l[1] || (l[1] = [
              H(" Send deletion email ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ]))
      ]),
      _: 3
    }));
  }
});
async function xa(t) {
  const e = await fetch(`${t}/profile/config`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include"
  }), n = await e.json();
  if (!e.ok)
    throw new nt("Failed to get profile configuration", e, n);
  return n;
}
async function Ca(t) {
  const e = await fetch(`${t}/user/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include"
  }), n = await e.json();
  if (!e.ok)
    throw new nt("Failed to get profile", e, n);
  return n;
}
async function Pa(t, e) {
  const n = await fetch(`${e}/user/profile`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify({ ...t })
  }), o = await n.json();
  if (!n.ok)
    throw new nt("Failed to update profile", n, o);
  return o;
}
const De = { getProfile: Ca, updateProfile: Pa, getProfileConfig: xa }, _a = { class: "vstack-form" }, La = "Name can be letters only, at least 2 characters and max 50 characters", zt = /* @__PURE__ */ j({
  __name: "NameInput",
  props: /* @__PURE__ */ ie({
    isSubmitClicked: { type: Boolean },
    nameType: {}
  }, {
    name: { required: !0 },
    nameModifiers: {}
  }),
  emits: /* @__PURE__ */ ie(["validity-changed"], ["update:name"]),
  setup(t, { emit: e }) {
    const n = e, o = t, r = Fe(t, "name");
    de(() => {
      n("validity-changed", u());
    });
    const i = q(() => o.isSubmitClicked && !u()), l = q(() => o.nameType === "first" ? "First name" : "Last name");
    function u() {
      return Ht.string().min(2).max(50).safeParse(r.value).success;
    }
    function s(a) {
      const d = a ?? "";
      r.value = d, n("validity-changed", u());
    }
    return (a, d) => (p(), h("div", _a, [
      L(ut, {
        id: "profile_name",
        label: l.value,
        error: i.value ? La : ""
      }, {
        default: S(() => [
          L(z(Re), {
            id: "profile_name",
            modelValue: r.value,
            invalid: i.value,
            placeholder: l.value,
            required: "",
            class: "w-full",
            "onUpdate:modelValue": s
          }, null, 8, ["modelValue", "invalid", "placeholder"])
        ]),
        _: 1
      }, 8, ["label", "error"])
    ]));
  }
}), ps = /* @__PURE__ */ j({
  __name: "Profile",
  emits: ["profileLoadError", "profileSubmitSuccess", "profileSubmitError"],
  setup(t, { emit: e }) {
    const n = e, o = tt(ot), r = M(null), i = M(!1), l = M(!1), u = M(!1), s = M(null), a = M(!1), d = M(!1);
    de(async () => {
      await y();
    });
    const c = q(() => {
      const v = { isActive: !1, isRequired: !1 }, $ = r.value?.find((A) => A.category === "name");
      if (!$) return v;
      const E = $.fields.find((A) => A.type === "first_name");
      return E && (v.isActive = !0, v.isRequired = E.isRequired), v;
    }), m = q(() => {
      const v = { isActive: !1, isRequired: !1 }, $ = r.value?.find((A) => A.category === "name");
      if (!$) return v;
      const E = $.fields.find((A) => A.type === "last_name");
      return E && (v.isActive = !0, v.isRequired = E.isRequired), v;
    });
    async function y() {
      try {
        i.value = !0;
        const { data: v } = await De.getProfileConfig(o), { data: $ } = await De.getProfile(o);
        r.value = { ...v }, s.value = { ...$.fields };
      } catch (v) {
        n("profileLoadError", {
          type: "unexpected",
          severity: "error",
          summary: V.error.somethingWentWrong.summary,
          detail: V.error.somethingWentWrong.detail,
          json: K(v)
        });
      } finally {
        i.value = !1;
      }
    }
    async function f() {
      return !(c.value.isActive && !a.value || m.value.isActive && !d.value);
    }
    async function k() {
      u.value = !0, l.value = !0;
      try {
        if (!f())
          return;
        await De.updateProfile(s.value, o), n("profileSubmitSuccess");
      } catch (v) {
        n("profileSubmitError", {
          type: "unexpected",
          severity: "error",
          summary: V.error.somethingWentWrong.summary,
          detail: V.error.somethingWentWrong.detail,
          json: K(v)
        });
      } finally {
        u.value = !1;
      }
    }
    return (v, $) => (p(), C(rt, { isLoading: i.value }, {
      default: S(() => [
        r.value && s.value ? (p(), C(z(re), {
          key: 0,
          class: "max-w-xl card-p-lg w-full"
        }, {
          title: S(() => [...$[5] || ($[5] = [
            g("h1", { class: "h1" }, "Profile", -1)
          ])]),
          content: S(() => [
            g("section", null, [
              g("form", {
                class: "vstack-form",
                onSubmit: $[4] || ($[4] = Be(() => {
                }, ["prevent"]))
              }, [
                $[6] || ($[6] = g("p", null, " We need a few basic details for essential purposes—like personalising emails with your name. ", -1)),
                c.value.isActive ? (p(), C(zt, {
                  key: 0,
                  name: s.value.firstName,
                  "onUpdate:name": $[0] || ($[0] = (E) => s.value.firstName = E),
                  nameType: "first",
                  isSubmitClicked: l.value,
                  onValidityChanged: $[1] || ($[1] = (E) => {
                    a.value = E;
                  })
                }, null, 8, ["name", "isSubmitClicked"])) : x("", !0),
                m.value.isActive ? (p(), C(zt, {
                  key: 1,
                  name: s.value.lastName,
                  "onUpdate:name": $[2] || ($[2] = (E) => s.value.lastName = E),
                  nameType: "last",
                  isSubmitClicked: l.value,
                  onValidityChanged: $[3] || ($[3] = (E) => {
                    d.value = E;
                  })
                }, null, 8, ["name", "isSubmitClicked"])) : x("", !0),
                L(z(R), {
                  label: "Save profile",
                  submit: "submit",
                  loading: u.value,
                  onClick: k
                }, null, 8, ["loading"])
              ], 32)
            ])
          ]),
          _: 1
        })) : x("", !0)
      ]),
      _: 1
    }, 8, ["isLoading"]));
  }
}), ms = /* @__PURE__ */ j({
  __name: "ProfileCheck",
  emits: ["profileCheckError", "profileIsComplete", "profileNotComplete"],
  setup(t, { emit: e }) {
    const n = Gt(), o = qt(), r = e, i = M(!0), l = tt(ot);
    de(async () => {
      u();
    });
    async function u() {
      try {
        const { data: s } = await De.getProfile(l);
        if (s.isCompleted) {
          const a = En(n.query);
          a ? o.push(a) : o.push({ name: "home" });
        } else
          n.query.redirect ? o.push({
            name: "profile",
            query: n.query
          }) : o.push({
            name: "profile",
            query: {
              ...n.query,
              redirect: "home"
            }
          });
      } catch (s) {
        console.error("Error checking profile completion: ", s), r("profileCheckError");
      }
    }
    return (s, a) => (p(), C(rt, {
      isLoading: i.value,
      loadingText: "Redirecting, do not close the window."
    }, null, 8, ["isLoading"]));
  }
}), Ta = { class: "gsi-material-button-content-wrapper" }, Ea = { class: "gsi-material-button-icon" }, Oa = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  style: { display: "block" }
}, za = { class: "gsi-material-button-contents" }, Aa = { style: { display: "none" } }, Ma = /* @__PURE__ */ j({
  __name: "GoogleAuthIcon",
  props: {
    authType: { default: "Sign in" },
    apiDomain: {}
  },
  emits: ["googleSignInError", "googleSignInSuccess"],
  setup(t, { emit: e }) {
    const n = e, o = t;
    async function r() {
      const i = "Failed to sign in with Google", l = "Please try again later.";
      try {
        const u = await Wt.getAuthorisationURLWithQueryParamsAndSetState({
          thirdPartyId: "google",
          // This is where Google should redirect the user back after login or error.
          // This URL goes on the Google's dashboard as well: https://support.google.com/cloud/answer/6158849?hl=en
          frontendRedirectURI: `${o.apiDomain}/signup?thirdPartyId=google`
        });
        window.location.assign(u);
      } catch (u) {
        n("googleSignInError", {
          type: "unexpected",
          severity: "error",
          summary: i,
          detail: l,
          json: u
        });
      }
    }
    return (i, l) => (p(), h("button", {
      class: "gsi-material-button",
      onClick: r
    }, [
      l[1] || (l[1] = g("div", { class: "gsi-material-button-state" }, null, -1)),
      g("div", Ta, [
        g("div", Ea, [
          (p(), h("svg", Oa, [...l[0] || (l[0] = [
            At('<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" data-v-b8cb838c></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" data-v-b8cb838c></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" data-v-b8cb838c></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" data-v-b8cb838c></path><path fill="none" d="M0 0h48v48H0z" data-v-b8cb838c></path>', 5)
          ])]))
        ]),
        g("span", za, F(t.authType) + " with Google", 1),
        g("span", Aa, F(t.authType) + " with Google", 1)
      ])
    ]));
  }
}), Da = /* @__PURE__ */ Ke(Ma, [["__scopeId", "data-v-b8cb838c"]]), ja = { class: "h1" }, Va = { key: 0 }, Fa = { key: 1 }, Ba = /* @__PURE__ */ j({
  __name: "SignInUpForm",
  props: /* @__PURE__ */ ie({
    pageAuthType: {},
    apiDomain: {},
    signupInviteOnly: { type: Boolean }
  }, {
    email: { required: !0 },
    emailModifiers: {}
  }),
  emits: /* @__PURE__ */ ie(["sendCodeSuccess", "signupStartError", "googleSignInError"], ["update:email"]),
  setup(t, { emit: e }) {
    const n = e, o = M(!1), r = Fe(t, "email"), i = M(!1), l = M(!1);
    async function u() {
      if (l.value = !0, !!i.value)
        try {
          o.value = !0;
          const s = await te.createCode({
            email: r.value,
            shouldTryLinkingWithSessionUser: !1,
            // If true, SuperTokens will attempt to link the passwordless code to an existing session user
            userContext: {}
            // Optionally include user context
          });
          s.status === "SIGN_IN_UP_NOT_ALLOWED" ? n("signupStartError", {
            type: "sign_in_up_not_allowed",
            severity: "error",
            summary: V.error.somethingWentWrong.summary,
            detail: V.error.somethingWentWrong.detail,
            json: {
              status: s.status,
              reason: s.reason,
              responseDetails: K(s.fetchResponse)
            }
          }) : n("sendCodeSuccess", !0);
        } catch (s) {
          n("signupStartError", {
            type: "unexpected",
            severity: "error",
            summary: V.error.somethingWentWrong.summary,
            detail: V.error.somethingWentWrong.detail,
            json: K(s)
          });
        } finally {
          o.value = !1;
        }
    }
    return (s, a) => (p(), C(z(re), { class: "max-w-xl p-12 w-full" }, {
      title: S(() => [
        g("h1", ja, F(t.pageAuthType), 1)
      ]),
      content: S(() => [
        t.signupInviteOnly && t.pageAuthType === "Sign up" ? (p(), h("div", Va, [
          L(z(lt), { severity: "info" }, {
            default: S(() => [...a[4] || (a[4] = [
              H(" Sign up is currently by invite only during the beta period. ", -1)
            ])]),
            _: 1
          })
        ])) : (p(), h("section", Fa, [
          L(Da, {
            apiDomain: t.apiDomain,
            authType: t.pageAuthType,
            onGoogleSignInError: a[0] || (a[0] = (...d) => s.$emit("googleSignInError", ...d))
          }, null, 8, ["apiDomain", "authType"]),
          a[6] || (a[6] = g("div", { class: "flex items-center my-10" }, [
            g("hr", { class: "flex-1 border-gray-300" }),
            g("span", { class: "px-4 text-gray-500 uppercase" }, "Or"),
            g("hr", { class: "flex-1 border-gray-300" })
          ], -1)),
          g("form", {
            class: "vstack-form",
            "data-test": "auth-form",
            onSubmit: a[3] || (a[3] = Be(() => {
            }, ["prevent"]))
          }, [
            a[5] || (a[5] = g("p", { class: "mb-2" }, " This website offers a Passwordless Sign-In option. Instead of remembering a password, you'll receive a one-time code via email each time you sign in. ", -1)),
            L(ln, {
              email: r.value,
              "onUpdate:email": a[1] || (a[1] = (d) => r.value = d),
              isSubmitClicked: l.value,
              "data-test": "auth-email-input",
              onValidityChanged: a[2] || (a[2] = (d) => {
                i.value = d;
              })
            }, null, 8, ["email", "isSubmitClicked"]),
            L(z(R), {
              label: t.pageAuthType,
              submit: "submit",
              loading: o.value,
              "data-test": "auth-send-code-button",
              onClick: u
            }, null, 8, ["label", "loading"])
          ], 32)
        ]))
      ]),
      _: 1
    }));
  }
});
var Na = `
    .p-inputotp {
        display: flex;
        align-items: center;
        gap: dt('inputotp.gap');
    }

    .p-inputotp-input {
        text-align: center;
        width: dt('inputotp.input.width');
    }

    .p-inputotp-input.p-inputtext-sm {
        text-align: center;
        width: dt('inputotp.input.sm.width');
    }

    .p-inputotp-input.p-inputtext-lg {
        text-align: center;
        width: dt('inputotp.input.lg.width');
    }
`, Ka = {
  root: "p-inputotp p-component",
  pcInputText: "p-inputotp-input"
}, Ra = D.extend({
  name: "inputotp",
  style: Na,
  classes: Ka
}), Ua = {
  name: "BaseInputOtp",
  extends: sn,
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
  style: Ra,
  provide: function() {
    return {
      $pcInputOtp: this,
      $parentInstance: this
    };
  }
}, dn = {
  name: "InputOtp",
  extends: Ua,
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
      var n = this;
      return {
        input: function(r) {
          return n.onInput(r, e);
        },
        keydown: function(r) {
          return n.onKeyDown(r);
        },
        focus: function(r) {
          return n.onFocus(r);
        },
        blur: function(r) {
          return n.onBlur(r);
        },
        paste: function(r) {
          return n.onPaste(r);
        }
      };
    },
    onInput: function(e, n) {
      this.tokens[n] = e.target.value, this.updateModel(e), e.inputType === "deleteContentBackward" ? this.moveToPrev(e) : (e.inputType === "insertText" || e.inputType === "deleteContentForward" || Kt() && e instanceof CustomEvent) && this.moveToNext(e);
    },
    updateModel: function(e) {
      var n = this.tokens.join("");
      this.writeValue(n, e), this.$emit("change", {
        originalEvent: e,
        value: n
      });
    },
    moveToPrev: function(e) {
      var n = this.findPrevInput(e.target);
      n && (n.focus(), n.select());
    },
    moveToNext: function(e) {
      var n = this.findNextInput(e.target);
      n && (n.focus(), n.select());
    },
    findNextInput: function(e) {
      var n = e.nextElementSibling;
      if (n)
        return n.nodeName === "INPUT" ? n : this.findNextInput(n);
    },
    findPrevInput: function(e) {
      var n = e.previousElementSibling;
      if (n)
        return n.nodeName === "INPUT" ? n : this.findPrevInput(n);
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
        switch (e.key) {
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
          case "Tab":
            break;
          default:
            var n = e.target, o = n.selectionStart !== n.selectionEnd, r = this.tokens.join("").length >= this.length, i = this.integerOnly ? /^[0-9]$/.test(e.key) : !0;
            (!i || r && e.key !== "Delete" && !o) && e.preventDefault();
            break;
        }
    },
    onPaste: function(e) {
      var n = e.clipboardData.getData("text");
      if (n.length) {
        var o = n.substring(0, this.length);
        (!this.integerOnly || !isNaN(o)) && (this.tokens = o.split(""), this.updateModel(e));
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
    OtpInputText: Re
  }
};
function Wa(t, e, n, o, r, i) {
  var l = G("OtpInputText");
  return p(), h("div", b({
    class: t.cx("root")
  }, t.ptmi("root")), [(p(!0), h(fe, null, Mt(t.length, function(u) {
    return _(t.$slots, "default", {
      key: u,
      events: i.getTemplateEvents(u - 1),
      attrs: i.getTemplateAttrs(u - 1),
      index: u
    }, function() {
      return [L(l, {
        value: r.tokens[u - 1],
        type: i.inputType,
        class: X(t.cx("pcInputText")),
        name: t.$formName,
        inputmode: i.inputMode,
        variant: t.variant,
        readonly: t.readonly,
        disabled: t.disabled,
        size: t.size,
        invalid: t.invalid,
        tabindex: t.tabindex,
        unstyled: t.unstyled,
        onInput: function(a) {
          return i.onInput(a, u - 1);
        },
        onFocus: e[0] || (e[0] = function(s) {
          return i.onFocus(s);
        }),
        onBlur: e[1] || (e[1] = function(s) {
          return i.onBlur(s);
        }),
        onPaste: e[2] || (e[2] = function(s) {
          return i.onPaste(s);
        }),
        onKeydown: e[3] || (e[3] = function(s) {
          return i.onKeyDown(s);
        }),
        onClick: e[4] || (e[4] = function(s) {
          return i.onClick(s);
        }),
        pt: t.ptm("pcInputText")
      }, null, 8, ["value", "type", "class", "name", "inputmode", "variant", "readonly", "disabled", "size", "invalid", "tabindex", "unstyled", "onInput", "pt"])];
    });
  }), 128))], 16);
}
dn.render = Wa;
const Ha = { class: "px-4 py-8 sm:p-8" }, Ga = { class: "flex flex-col items-stretch gap-4 sm:flex-row sm:items-start" }, qa = { class: "vstack-form" }, Za = { class: "vstack-form" }, Ya = /* @__PURE__ */ j({
  __name: "VerifyCode",
  props: {
    pageAuthType: {}
  },
  emits: [
    "verificationCodeSuccess",
    "verificationCodeError",
    "resendCodeSuccess",
    "resendCodeError",
    "restartFlow"
  ],
  setup(t, { emit: e }) {
    const n = e, o = M(""), r = M(null), i = M(0), l = M(0), u = M(!1), s = M(!1);
    mn(o, () => {
      r.value !== null && (r.value = null);
    });
    const a = q(() => o.value.length < 6 ? "Please enter a valid code length" : l.value > 0 && i.value > 0 && i.value < l.value ? `Invalid code. You have ${l.value - i.value} attempts left.` : "");
    async function d() {
      const y = "Unable to process your OTP code", f = "Please try again later.";
      if (r.value = !0, o.value.length < 6) {
        r.value = !1;
        return;
      }
      try {
        u.value = !0;
        const k = await te.consumeCode({ userInputCode: o.value });
        k.status === "OK" ? (await te.clearLoginAttemptInfo(), k.createdNewRecipeUser && k.user.loginMethods.length === 1 ? console.info("New user signed up successfully") : console.info("Existing user signed in successfully"), r.value = !0, n("verificationCodeSuccess", {
          summary: "Code verified",
          detail: "You have successfully signed in."
        })) : (console.error("Submit code failed: ", k), k.status === "INCORRECT_USER_INPUT_CODE_ERROR" ? (i.value = k.failedCodeInputAttemptCount, l.value = k.maximumCodeInputAttempts, r.value = !1) : (await te.clearLoginAttemptInfo(), n("verificationCodeError", {
          type: "input_code_invalid",
          severity: "error",
          summary: y,
          detail: f,
          json: {
            status: k.status,
            responseDetails: K(k.fetchResponse)
          }
        })));
      } catch (k) {
        n("verificationCodeError", {
          type: "unexpected",
          severity: "error",
          summary: V.error.somethingWentWrong.summary,
          detail: V.error.somethingWentWrong.detail,
          json: K(k)
        });
      } finally {
        u.value = !1;
      }
    }
    async function c() {
      const y = "Resend OTP failed", f = "Please try again later.";
      try {
        s.value = !0;
        const k = await te.resendCode();
        k.status === "RESTART_FLOW_ERROR" ? (await te.clearLoginAttemptInfo(), n("resendCodeError", {
          type: "restart_flow_error",
          severity: "error",
          summary: y,
          detail: f,
          json: {
            status: k.status,
            responseDetails: K(k.fetchResponse)
          }
        })) : n("resendCodeSuccess", {
          summary: "Code re-sent",
          detail: "Please check your email for the new code."
        });
      } catch (k) {
        n("resendCodeError", {
          type: "unexpected",
          severity: "error",
          summary: V.error.somethingWentWrong.summary,
          detail: V.error.somethingWentWrong.detail,
          json: K(k)
        });
      } finally {
        s.value = !1;
      }
    }
    function m() {
      te.clearLoginAttemptInfo(), n("restartFlow");
    }
    return (y, f) => (p(), h("div", Ha, [
      L(z(re), { class: "max-w-xl p-0 sm:p-12 w-full mx-auto" }, {
        title: S(() => [
          g("div", Ga, [
            L(z(R), {
              class: "me-4 sm:me-0",
              type: "button",
              variant: "outlined",
              icon: "pi pi-arrow-left",
              "aria-label": "Start over",
              "data-test": "auth-change-email",
              onClick: m
            }),
            f[2] || (f[2] = g("h1", { class: "h1 mt-0 sm:mt-0" }, "Input validation code", -1))
          ])
        ]),
        content: S(() => [
          g("form", {
            class: "vstack-lg",
            onSubmit: f[1] || (f[1] = Be(() => {
            }, ["prevent"]))
          }, [
            g("div", qa, [
              f[4] || (f[4] = g("p", null, " To finish the signup process, enter the code that was emailed to you. Note that the code is only valid for 10 minutes. ", -1)),
              L(ut, {
                id: "magic-code-input",
                error: r.value === !1 ? a.value : "",
                "data-test": "auth-error-message"
              }, {
                default: S(() => [
                  L(z(dn), {
                    id: "magic-code-input",
                    modelValue: o.value,
                    "onUpdate:modelValue": f[0] || (f[0] = (k) => o.value = k),
                    length: 6,
                    class: "w-50",
                    type: "text",
                    placeholder: "Input email code",
                    required: "",
                    invalid: r.value === !1,
                    "data-test": "auth-code-input"
                  }, null, 8, ["modelValue", "invalid"])
                ]),
                _: 1
              }, 8, ["error"]),
              L(z(R), {
                class: "w-fit",
                type: "submit",
                loading: u.value,
                "data-test": "auth-verify-button",
                onClick: d
              }, {
                default: S(() => [...f[3] || (f[3] = [
                  H(" Submit code ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])
            ]),
            g("div", Za, [
              f[6] || (f[6] = g("p", null, " If you didnt receive an email, please check your Junk folder or resend another code. ", -1)),
              L(z(R), {
                class: "w-fit",
                type: "button",
                loading: s.value,
                "data-test": "auth-resend-code",
                onClick: c
              }, {
                default: S(() => [...f[5] || (f[5] = [
                  H(" Resend code ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])
            ])
          ], 32)
        ]),
        _: 1
      })
    ]));
  }
}), fs = /* @__PURE__ */ j({
  __name: "SignInUp",
  props: {
    signupInviteOnly: { type: Boolean, default: !0 }
  },
  emits: [
    "signupStartError",
    "checkMagicLinkSentError",
    "resendCodeSuccess",
    "resendCodeError",
    "verificationCodeSuccess",
    "verificationCodeError",
    "googleCallbackSuccess",
    "googleCallbackError",
    "googleSignInError"
  ],
  setup(t, { emit: e }) {
    const n = Gt(), o = qt(), r = e, i = M(!0), l = M(!1), u = M(""), s = tt(ot);
    de(async () => {
      l.value = !!await d(), o.currentRoute.value.query.thirdPartyId === "google" && await c();
    });
    const a = q(() => n.name === "signup" ? "Sign up" : "Sign in");
    async function d() {
      i.value = !0;
      try {
        const f = await te.getLoginAttemptInfo();
        return f && console.info("Code already sent: ", f), f !== void 0;
      } catch (f) {
        r("checkMagicLinkSentError", {
          type: "unexpected",
          severity: "error",
          summary: V.error.somethingWentWrong.summary,
          detail: V.error.somethingWentWrong.detail,
          json: K(f)
        });
      } finally {
        i.value = !1;
      }
    }
    async function c() {
      const f = "Failed to sign in with Google", k = "Please try again later or try another form of login.";
      try {
        i.value = !0;
        const v = await Wt.signInAndUp();
        v.status === "OK" ? (v.createdNewRecipeUser && v.user.loginMethods.length, r("googleCallbackSuccess")) : v.status === "SIGN_IN_UP_NOT_ALLOWED" ? r("googleCallbackError", {
          type: "sign_in_up_not_allowed",
          severity: "error",
          summary: f,
          detail: k,
          json: {
            status: v.status,
            reason: v.reason,
            responseDetails: K(v)
          }
        }) : r("googleCallbackError", {
          type: "no_user_email",
          severity: "error",
          summary: f,
          detail: k,
          json: { status: v.status, responseDetails: K(v) }
        });
      } catch (v) {
        r("googleCallbackError", {
          type: "unexpected",
          severity: "error",
          summary: V.error.somethingWentWrong.summary,
          detail: V.error.somethingWentWrong.detail,
          json: K(v)
        });
      } finally {
        i.value = !1;
      }
    }
    function m(f) {
      f.type === "input_code_invalid" && (l.value = !1), r("verificationCodeError", f);
    }
    function y(f) {
      f.type === "restart_flow_error" && (l.value = !1), r("resendCodeError", f);
    }
    return (f, k) => (p(), C(rt, { isLoading: i.value }, {
      default: S(() => [
        l.value ? (p(), C(Ya, {
          key: 1,
          pageAuthType: a.value,
          onVerificationCodeSuccess: k[4] || (k[4] = (...v) => f.$emit("verificationCodeSuccess", ...v)),
          onVerificationCodeError: m,
          onResendCodeSuccess: k[5] || (k[5] = (...v) => f.$emit("resendCodeSuccess", ...v)),
          onResendCodeError: y,
          onRestartFlow: k[6] || (k[6] = () => l.value = !1)
        }, null, 8, ["pageAuthType"])) : (p(), C(Ba, {
          key: 0,
          email: u.value,
          "onUpdate:email": k[0] || (k[0] = (v) => u.value = v),
          pageAuthType: a.value,
          signupInviteOnly: t.signupInviteOnly,
          apiDomain: z(s),
          onSendCodeSuccess: k[1] || (k[1] = () => l.value = !0),
          onSignupStartError: k[2] || (k[2] = (v) => f.$emit("signupStartError", v)),
          onGoogleSignInError: k[3] || (k[3] = (v) => f.$emit("googleSignInError", v))
        }, null, 8, ["email", "pageAuthType", "signupInviteOnly", "apiDomain"]))
      ]),
      _: 1
    }, 8, ["isLoading"]));
  }
});
export {
  as as AppErrorInfo,
  ds as ChangeEmailRequest,
  cs as DeleteAccountRequest,
  ls as DialogLoader,
  ut as FormField,
  ss as PageInfiniteLoader,
  rt as PageLoader,
  ps as Profile,
  ms as ProfileCheck,
  fs as SignInUp,
  rs as SiteNavigation,
  Qo as ThemeToggle,
  us as UserAccountInfo
};
