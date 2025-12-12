import { useId as Ht, mergeProps as y, createElementBlock as v, openBlock as p, createElementVNode as g, renderSlot as z, createTextVNode as q, toDisplayString as R, resolveComponent as H, resolveDirective as Ze, withDirectives as Je, createBlock as P, resolveDynamicComponent as ce, withCtx as w, createCommentVNode as T, normalizeClass as J, createStaticVNode as yt, defineComponent as N, Transition as Oe, createVNode as L, unref as O, ref as x, computed as G, Teleport as Gt, Fragment as Ce, renderList as kt, onMounted as re, mergeModels as Ae, useModel as It, withModifiers as Me, watch as $t, inject as ze } from "vue";
import { m as pe, B as D, a as le, C as St, s as W, g as te, F as wt, N as Q, S as B, c as xt, z as Te, b as Yt, l as se, n as Zt, i as nt, P as _e, Q as Jt, d as Re, T as ot, R as rt, v as Ee, e as Xt, K as Qt, W as en, U as tn, A as nn, f as on, t as rn, M as it, Y as _t, D as an, h as sn, j as ae, J as ln, k as un } from "../index-C4p6nNC_.js";
import { S as Xe, t as Pt, p as ee } from "../supertokens-vendor-Dsnq9j4O.js";
import { t as j } from "../toastContent-Cmim6dQm.js";
import { u as dn } from "../userStore-DKVnZxFM.js";
import { A as je, g as cn } from "../url-DdycvR3T.js";
import { z as Ct } from "zod";
import { useRoute as Tt, useRouter as Et } from "vue-router";
function oe(...t) {
  if (t) {
    let e = [];
    for (let n = 0; n < t.length; n++) {
      let o = t[n];
      if (!o) continue;
      let i = typeof o;
      if (i === "string" || i === "number") e.push(o);
      else if (i === "object") {
        let r = Array.isArray(o) ? [oe(...o)] : Object.entries(o).map(([l, u]) => u ? l : void 0);
        e = r.length ? e.concat(r.filter((l) => !!l)) : e;
      }
    }
    return e.join(" ").trim();
  }
}
var Pe = {};
function pn(t = "pui_id_") {
  return Object.hasOwn(Pe, t) || (Pe[t] = 0), Pe[t]++, `${t}${Pe[t]}`;
}
function mn() {
  let t = [], e = (l, u, a = 999) => {
    let s = i(l, u, a), d = s.value + (s.key === l ? 0 : a) + 1;
    return t.push({ key: l, value: d }), d;
  }, n = (l) => {
    t = t.filter((u) => u.value !== l);
  }, o = (l, u) => i(l).value, i = (l, u, a = 0) => [...t].reverse().find((s) => !0) || { key: l, value: a }, r = (l) => l && parseInt(l.style.zIndex, 10) || 0;
  return { get: r, set: (l, u, a) => {
    u && (u.style.zIndex = String(e(l, !0, a)));
  }, clear: (l) => {
    l && (n(r(l)), l.style.zIndex = "");
  }, getCurrent: (l) => o(l) };
}
var Be = mn(), ne = {
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
function fn() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pc", e = Ht();
  return "".concat(t).concat(e.replace("v-", "").replaceAll("-", "_"));
}
var at = D.extend({
  name: "common"
});
function me(t) {
  "@babel/helpers - typeof";
  return me = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, me(t);
}
function gn(t) {
  return Ot(t) || hn(t) || At(t) || Lt();
}
function hn(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function ue(t, e) {
  return Ot(t) || bn(t, e) || At(t, e) || Lt();
}
function Lt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function At(t, e) {
  if (t) {
    if (typeof t == "string") return Ke(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ke(t, e) : void 0;
  }
}
function Ke(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function bn(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var o, i, r, l, u = [], a = !0, s = !1;
    try {
      if (r = (n = n.call(t)).next, e === 0) {
        if (Object(n) !== n) return;
        a = !1;
      } else for (; !(a = (o = r.call(n)).done) && (u.push(o.value), u.length !== e); a = !0) ;
    } catch (d) {
      s = !0, i = d;
    } finally {
      try {
        if (!a && n.return != null && (l = n.return(), Object(l) !== l)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function Ot(t) {
  if (Array.isArray(t)) return t;
}
function st(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function _(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? st(Object(n), !0).forEach(function(o) {
      de(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : st(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function de(t, e, n) {
  return (e = vn(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function vn(t) {
  var e = yn(t, "string");
  return me(e) == "symbol" ? e : e + "";
}
function yn(t, e) {
  if (me(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (me(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Y = {
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
        Q.off("theme:change", this._loadCoreStyles), e || (this._loadCoreStyles(), this._themeChangeListener(this._loadCoreStyles));
      }
    },
    dt: {
      immediate: !0,
      handler: function(e, n) {
        var o = this;
        Q.off("theme:change", this._themeScopedListener), e ? (this._loadScopedThemeStyles(e), this._themeScopedListener = function() {
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
    var e, n, o, i, r, l, u, a, s, d, c, m = (e = this.pt) === null || e === void 0 ? void 0 : e._usept, f = m ? (n = this.pt) === null || n === void 0 || (n = n.originalValue) === null || n === void 0 ? void 0 : n[this.$.type.name] : void 0, h = m ? (o = this.pt) === null || o === void 0 || (o = o.value) === null || o === void 0 ? void 0 : o[this.$.type.name] : this.pt;
    (i = h || f) === null || i === void 0 || (i = i.hooks) === null || i === void 0 || (r = i.onBeforeCreate) === null || r === void 0 || r.call(i);
    var b = (l = this.$primevueConfig) === null || l === void 0 || (l = l.pt) === null || l === void 0 ? void 0 : l._usept, $ = b ? (u = this.$primevue) === null || u === void 0 || (u = u.config) === null || u === void 0 || (u = u.pt) === null || u === void 0 ? void 0 : u.originalValue : void 0, k = b ? (a = this.$primevue) === null || a === void 0 || (a = a.config) === null || a === void 0 || (a = a.pt) === null || a === void 0 ? void 0 : a.value : (s = this.$primevue) === null || s === void 0 || (s = s.config) === null || s === void 0 ? void 0 : s.pt;
    (d = k || $) === null || d === void 0 || (d = d[this.$.type.name]) === null || d === void 0 || (d = d.hooks) === null || d === void 0 || (c = d.onBeforeCreate) === null || c === void 0 || c.call(d), this.$attrSelector = fn(), this.uid = this.$attrs.id || this.$attrSelector.replace("pc", "pv_id_");
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    var e;
    this.rootEl = Te(Yt(this.$el) ? this.$el : (e = this.$el) === null || e === void 0 ? void 0 : e.parentElement, "[".concat(this.$attrSelector, "]")), this.rootEl && (this.rootEl.$pc = _({
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
      for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
        o[i - 1] = arguments[i];
      return xt(e) ? e.apply(void 0, o) : y.apply(void 0, o);
    },
    _load: function() {
      ne.isStyleNameLoaded("base") || (D.loadCSS(this.$styleOptions), this._loadGlobalStyles(), ne.setLoadedStyleName("base")), this._loadThemeStyles();
    },
    _loadStyles: function() {
      this._load(), this._themeChangeListener(this._load);
    },
    _loadCoreStyles: function() {
      var e, n;
      !ne.isStyleNameLoaded((e = this.$style) === null || e === void 0 ? void 0 : e.name) && (n = this.$style) !== null && n !== void 0 && n.name && (at.loadCSS(this.$styleOptions), this.$options.style && this.$style.loadCSS(this.$styleOptions), ne.setLoadedStyleName(this.$style.name));
    },
    _loadGlobalStyles: function() {
      var e = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      W(e) && D.load(e, _({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function() {
      var e, n;
      if (!(this.isUnstyled || this.$theme === "none")) {
        if (!B.isStyleNameLoaded("common")) {
          var o, i, r = ((o = this.$style) === null || o === void 0 || (i = o.getCommonTheme) === null || i === void 0 ? void 0 : i.call(o)) || {}, l = r.primitive, u = r.semantic, a = r.global, s = r.style;
          D.load(l?.css, _({
            name: "primitive-variables"
          }, this.$styleOptions)), D.load(u?.css, _({
            name: "semantic-variables"
          }, this.$styleOptions)), D.load(a?.css, _({
            name: "global-variables"
          }, this.$styleOptions)), D.loadStyle(_({
            name: "global-style"
          }, this.$styleOptions), s), B.setLoadedStyleName("common");
        }
        if (!B.isStyleNameLoaded((e = this.$style) === null || e === void 0 ? void 0 : e.name) && (n = this.$style) !== null && n !== void 0 && n.name) {
          var d, c, m, f, h = ((d = this.$style) === null || d === void 0 || (c = d.getComponentTheme) === null || c === void 0 ? void 0 : c.call(d)) || {}, b = h.css, $ = h.style;
          (m = this.$style) === null || m === void 0 || m.load(b, _({
            name: "".concat(this.$style.name, "-variables")
          }, this.$styleOptions)), (f = this.$style) === null || f === void 0 || f.loadStyle(_({
            name: "".concat(this.$style.name, "-style")
          }, this.$styleOptions), $), B.setLoadedStyleName(this.$style.name);
        }
        if (!B.isStyleNameLoaded("layer-order")) {
          var k, E, M = (k = this.$style) === null || k === void 0 || (E = k.getLayerOrderThemeCSS) === null || E === void 0 ? void 0 : E.call(k);
          D.load(M, _({
            name: "layer-order",
            first: !0
          }, this.$styleOptions)), B.setLoadedStyleName("layer-order");
        }
      }
    },
    _loadScopedThemeStyles: function(e) {
      var n, o, i, r = ((n = this.$style) === null || n === void 0 || (o = n.getPresetTheme) === null || o === void 0 ? void 0 : o.call(n, e, "[".concat(this.$attrSelector, "]"))) || {}, l = r.css, u = (i = this.$style) === null || i === void 0 ? void 0 : i.load(l, _({
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
      ne.clearLoadedStyleNames(), Q.on("theme:change", e);
    },
    _removeThemeListeners: function() {
      Q.off("theme:change", this._loadCoreStyles), Q.off("theme:change", this._load), Q.off("theme:change", this._themeScopedListener);
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
      return wt(e, n, o);
    },
    _getPTValue: function() {
      var e, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, l = /./g.test(o) && !!i[o.split(".")[0]], u = this._getPropValue("ptOptions") || ((e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.ptOptions) || {}, a = u.mergeSections, s = a === void 0 ? !0 : a, d = u.mergeProps, c = d === void 0 ? !1 : d, m = r ? l ? this._useGlobalPT(this._getPTClassValue, o, i) : this._useDefaultPT(this._getPTClassValue, o, i) : void 0, f = l ? void 0 : this._getPTSelf(n, this._getPTClassValue, o, _(_({}, i), {}, {
        global: m || {}
      })), h = this._getPTDatasets(o);
      return s || !s && f ? c ? this._mergeProps(c, m, f, h) : _(_(_({}, m), f), h) : _(_({}, f), h);
    },
    _getPTSelf: function() {
      for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
        o[i - 1] = arguments[i];
      return y(
        this._usePT.apply(this, [this._getPT(e, this.$name)].concat(o)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(o))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function() {
      var e, n, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", i = "data-pc-", r = o === "root" && W((e = this.pt) === null || e === void 0 ? void 0 : e["data-pc-section"]);
      return o !== "transition" && _(_({}, o === "root" && _(_(de({}, "".concat(i, "name"), te(r ? (n = this.pt) === null || n === void 0 ? void 0 : n["data-pc-section"] : this.$.type.name)), r && de({}, "".concat(i, "extend"), te(this.$.type.name))), {}, de({}, "".concat(this.$attrSelector), ""))), {}, de({}, "".concat(i, "section"), te(o)));
    },
    _getPTClassValue: function() {
      var e = this._getOptionValue.apply(this, arguments);
      return le(e) || St(e) ? {
        class: e
      } : e;
    },
    _getPT: function(e) {
      var n = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", i = arguments.length > 2 ? arguments[2] : void 0, r = function(u) {
        var a, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, d = i ? i(u) : u, c = te(o), m = te(n.$name);
        return (a = s ? c !== m ? d?.[c] : void 0 : d?.[c]) !== null && a !== void 0 ? a : d;
      };
      return e != null && e.hasOwnProperty("_usept") ? {
        _usept: e._usept,
        originalValue: r(e.originalValue),
        value: r(e.value)
      } : r(e, !0);
    },
    _usePT: function(e, n, o, i) {
      var r = function(b) {
        return n(b, o, i);
      };
      if (e != null && e.hasOwnProperty("_usept")) {
        var l, u = e._usept || ((l = this.$primevueConfig) === null || l === void 0 ? void 0 : l.ptOptions) || {}, a = u.mergeSections, s = a === void 0 ? !0 : a, d = u.mergeProps, c = d === void 0 ? !1 : d, m = r(e.originalValue), f = r(e.value);
        return m === void 0 && f === void 0 ? void 0 : le(f) ? f : le(m) ? m : s || !s && f ? c ? this._mergeProps(c, m, f) : _(_({}, m), f) : f;
      }
      return r(e);
    },
    _useGlobalPT: function(e, n, o) {
      return this._usePT(this.globalPT, e, n, o);
    },
    _useDefaultPT: function(e, n, o) {
      return this._usePT(this.defaultPT, e, n, o);
    },
    ptm: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, e, _(_({}, this.$params), n));
    },
    ptmi: function() {
      var e, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = y(this.$_attrsWithoutPT, this.ptm(n, o));
      return i?.hasOwnProperty("id") && ((e = i.id) !== null && e !== void 0 || (i.id = this.$id)), i;
    },
    ptmo: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(e, n, _({
        instance: this
      }, o), !1);
    },
    cx: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.isUnstyled ? void 0 : this._getOptionValue(this.$style.classes, e, _(_({}, this.$params), n));
    },
    sx: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (n) {
        var i = this._getOptionValue(this.$style.inlineStyles, e, _(_({}, this.$params), o)), r = this._getOptionValue(at.inlineStyles, e, _(_({}, this.$params), o));
        return [r, i];
      }
    }
  },
  computed: {
    globalPT: function() {
      var e, n = this;
      return this._getPT((e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.pt, void 0, function(o) {
        return pe(o, {
          instance: n
        });
      });
    },
    defaultPT: function() {
      var e, n = this;
      return this._getPT((e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.pt, void 0, function(o) {
        return n._getOptionValue(o, n.$name, _({}, n.$params)) || pe(o, _({}, n.$params));
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
        var i = ue(o, 1), r = i[0];
        return n?.includes(r);
      }));
    },
    $theme: function() {
      var e;
      return (e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.theme;
    },
    $style: function() {
      return _(_({
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
        var n = ue(e, 1), o = n[0];
        return o?.startsWith("pt:");
      }).reduce(function(e, n) {
        var o = ue(n, 2), i = o[0], r = o[1], l = i.split(":"), u = gn(l), a = Ke(u).slice(1);
        return a?.reduce(function(s, d, c, m) {
          return !s[d] && (s[d] = c === m.length - 1 ? r : {}), s[d];
        }, e), e;
      }, {});
    },
    $_attrsWithoutPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(e) {
        var n = ue(e, 1), o = n[0];
        return !(o != null && o.startsWith("pt:"));
      }).reduce(function(e, n) {
        var o = ue(n, 2), i = o[0], r = o[1];
        return e[i] = r, e;
      }, {});
    }
  }
}, kn = `
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
`, In = D.extend({
  name: "baseicon",
  css: kn
});
function fe(t) {
  "@babel/helpers - typeof";
  return fe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, fe(t);
}
function lt(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function ut(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? lt(Object(n), !0).forEach(function(o) {
      $n(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : lt(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function $n(t, e, n) {
  return (e = Sn(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Sn(t) {
  var e = wn(t, "string");
  return fe(e) == "symbol" ? e : e + "";
}
function wn(t, e) {
  if (fe(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (fe(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Qe = {
  name: "BaseIcon",
  extends: Y,
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
  style: In,
  provide: function() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function() {
      var e = se(this.label);
      return ut(ut({}, !this.isUnstyled && {
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
}, Mt = {
  name: "SpinnerIcon",
  extends: Qe
};
function xn(t) {
  return Tn(t) || Cn(t) || Pn(t) || _n();
}
function _n() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pn(t, e) {
  if (t) {
    if (typeof t == "string") return We(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? We(t, e) : void 0;
  }
}
function Cn(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Tn(t) {
  if (Array.isArray(t)) return We(t);
}
function We(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function En(t, e, n, o, i, r) {
  return p(), v("svg", y({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t.pti()), xn(e[0] || (e[0] = [g("path", {
    d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
Mt.render = En;
var Ln = `
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
`, An = {
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
}, On = D.extend({
  name: "badge",
  style: Ln,
  classes: An
}), Mn = {
  name: "BaseBadge",
  extends: Y,
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
  style: On,
  provide: function() {
    return {
      $pcBadge: this,
      $parentInstance: this
    };
  }
};
function ge(t) {
  "@babel/helpers - typeof";
  return ge = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ge(t);
}
function dt(t, e, n) {
  return (e = zn(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function zn(t) {
  var e = jn(t, "string");
  return ge(e) == "symbol" ? e : e + "";
}
function jn(t, e) {
  if (ge(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (ge(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var zt = {
  name: "Badge",
  extends: Mn,
  inheritAttrs: !1,
  computed: {
    dataP: function() {
      return oe(dt(dt({
        circle: this.value != null && String(this.value).length === 1,
        empty: this.value == null && !this.$slots.default
      }, this.severity, this.severity), this.size, this.size));
    }
  }
}, Dn = ["data-p"];
function Vn(t, e, n, o, i, r) {
  return p(), v("span", y({
    class: t.cx("root"),
    "data-p": r.dataP
  }, t.ptmi("root")), [z(t.$slots, "default", {}, function() {
    return [q(R(t.value), 1)];
  })], 16, Dn);
}
zt.render = Vn;
function he(t) {
  "@babel/helpers - typeof";
  return he = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, he(t);
}
function ct(t, e) {
  return Bn(t) || Rn(t, e) || Fn(t, e) || Nn();
}
function Nn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fn(t, e) {
  if (t) {
    if (typeof t == "string") return pt(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? pt(t, e) : void 0;
  }
}
function pt(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function Rn(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var o, i, r, l, u = [], a = !0, s = !1;
    try {
      if (r = (n = n.call(t)).next, e !== 0) for (; !(a = (o = r.call(n)).done) && (u.push(o.value), u.length !== e); a = !0) ;
    } catch (d) {
      s = !0, i = d;
    } finally {
      try {
        if (!a && n.return != null && (l = n.return(), Object(l) !== l)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function Bn(t) {
  if (Array.isArray(t)) return t;
}
function mt(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function C(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? mt(Object(n), !0).forEach(function(o) {
      Ue(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : mt(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function Ue(t, e, n) {
  return (e = Kn(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Kn(t) {
  var e = Wn(t, "string");
  return he(e) == "symbol" ? e : e + "";
}
function Wn(t, e) {
  if (he(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (he(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var S = {
  _getMeta: function() {
    return [nt(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], pe(nt(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(e, n) {
    var o, i, r;
    return (o = (e == null || (i = e.instance) === null || i === void 0 ? void 0 : i.$primevue) || (n == null || (r = n.ctx) === null || r === void 0 || (r = r.appContext) === null || r === void 0 || (r = r.config) === null || r === void 0 || (r = r.globalProperties) === null || r === void 0 ? void 0 : r.$primevue)) === null || o === void 0 ? void 0 : o.config;
  },
  _getOptionValue: wt,
  _getPTValue: function() {
    var e, n, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, a = function() {
      var E = S._getOptionValue.apply(S, arguments);
      return le(E) || St(E) ? {
        class: E
      } : E;
    }, s = ((e = o.binding) === null || e === void 0 || (e = e.value) === null || e === void 0 ? void 0 : e.ptOptions) || ((n = o.$primevueConfig) === null || n === void 0 ? void 0 : n.ptOptions) || {}, d = s.mergeSections, c = d === void 0 ? !0 : d, m = s.mergeProps, f = m === void 0 ? !1 : m, h = u ? S._useDefaultPT(o, o.defaultPT(), a, r, l) : void 0, b = S._usePT(o, S._getPT(i, o.$name), a, r, C(C({}, l), {}, {
      global: h || {}
    })), $ = S._getPTDatasets(o, r);
    return c || !c && b ? f ? S._mergeProps(o, f, h, b, $) : C(C(C({}, h), b), $) : C(C({}, b), $);
  },
  _getPTDatasets: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = "data-pc-";
    return C(C({}, n === "root" && Ue({}, "".concat(o, "name"), te(e.$name))), {}, Ue({}, "".concat(o, "section"), te(n)));
  },
  _getPT: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 ? arguments[2] : void 0, i = function(l) {
      var u, a = o ? o(l) : l, s = te(n);
      return (u = a?.[s]) !== null && u !== void 0 ? u : a;
    };
    return e && Object.hasOwn(e, "_usept") ? {
      _usept: e._usept,
      originalValue: i(e.originalValue),
      value: i(e.value)
    } : i(e);
  },
  _usePT: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, o = arguments.length > 2 ? arguments[2] : void 0, i = arguments.length > 3 ? arguments[3] : void 0, r = arguments.length > 4 ? arguments[4] : void 0, l = function($) {
      return o($, i, r);
    };
    if (n && Object.hasOwn(n, "_usept")) {
      var u, a = n._usept || ((u = e.$primevueConfig) === null || u === void 0 ? void 0 : u.ptOptions) || {}, s = a.mergeSections, d = s === void 0 ? !0 : s, c = a.mergeProps, m = c === void 0 ? !1 : c, f = l(n.originalValue), h = l(n.value);
      return f === void 0 && h === void 0 ? void 0 : le(h) ? h : le(f) ? f : d || !d && h ? m ? S._mergeProps(e, m, f, h) : C(C({}, f), h) : h;
    }
    return l(n);
  },
  _useDefaultPT: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 ? arguments[2] : void 0, i = arguments.length > 3 ? arguments[3] : void 0, r = arguments.length > 4 ? arguments[4] : void 0;
    return S._usePT(e, n, o, i, r);
  },
  _loadStyles: function() {
    var e, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0, i = arguments.length > 2 ? arguments[2] : void 0, r = S._getConfig(o, i), l = {
      nonce: r == null || (e = r.csp) === null || e === void 0 ? void 0 : e.nonce
    };
    S._loadCoreStyles(n, l), S._loadThemeStyles(n, l), S._loadScopedThemeStyles(n, l), S._removeThemeListeners(n), n.$loadStyles = function() {
      return S._loadThemeStyles(n, l);
    }, S._themeChangeListener(n.$loadStyles);
  },
  _loadCoreStyles: function() {
    var e, n, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
    if (!ne.isStyleNameLoaded((e = o.$style) === null || e === void 0 ? void 0 : e.name) && (n = o.$style) !== null && n !== void 0 && n.name) {
      var r;
      D.loadCSS(i), (r = o.$style) === null || r === void 0 || r.loadCSS(i), ne.setLoadedStyleName(o.$style.name);
    }
  },
  _loadThemeStyles: function() {
    var e, n, o, i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    if (!(i != null && i.isUnstyled() || (i == null || (e = i.theme) === null || e === void 0 ? void 0 : e.call(i)) === "none")) {
      if (!B.isStyleNameLoaded("common")) {
        var l, u, a = ((l = i.$style) === null || l === void 0 || (u = l.getCommonTheme) === null || u === void 0 ? void 0 : u.call(l)) || {}, s = a.primitive, d = a.semantic, c = a.global, m = a.style;
        D.load(s?.css, C({
          name: "primitive-variables"
        }, r)), D.load(d?.css, C({
          name: "semantic-variables"
        }, r)), D.load(c?.css, C({
          name: "global-variables"
        }, r)), D.loadStyle(C({
          name: "global-style"
        }, r), m), B.setLoadedStyleName("common");
      }
      if (!B.isStyleNameLoaded((n = i.$style) === null || n === void 0 ? void 0 : n.name) && (o = i.$style) !== null && o !== void 0 && o.name) {
        var f, h, b, $, k = ((f = i.$style) === null || f === void 0 || (h = f.getDirectiveTheme) === null || h === void 0 ? void 0 : h.call(f)) || {}, E = k.css, M = k.style;
        (b = i.$style) === null || b === void 0 || b.load(E, C({
          name: "".concat(i.$style.name, "-variables")
        }, r)), ($ = i.$style) === null || $ === void 0 || $.loadStyle(C({
          name: "".concat(i.$style.name, "-style")
        }, r), M), B.setLoadedStyleName(i.$style.name);
      }
      if (!B.isStyleNameLoaded("layer-order")) {
        var I, A, Z = (I = i.$style) === null || I === void 0 || (A = I.getLayerOrderThemeCSS) === null || A === void 0 ? void 0 : A.call(I);
        D.load(Z, C({
          name: "layer-order",
          first: !0
        }, r)), B.setLoadedStyleName("layer-order");
      }
    }
  },
  _loadScopedThemeStyles: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, o = e.preset();
    if (o && e.$attrSelector) {
      var i, r, l, u = ((i = e.$style) === null || i === void 0 || (r = i.getPresetTheme) === null || r === void 0 ? void 0 : r.call(i, o, "[".concat(e.$attrSelector, "]"))) || {}, a = u.css, s = (l = e.$style) === null || l === void 0 ? void 0 : l.load(a, C({
        name: "".concat(e.$attrSelector, "-").concat(e.$style.name)
      }, n));
      e.scopedStyleEl = s.el;
    }
  },
  _themeChangeListener: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    ne.clearLoadedStyleNames(), Q.on("theme:change", e);
  },
  _removeThemeListeners: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Q.off("theme:change", e.$loadStyles), e.$loadStyles = void 0;
  },
  _hook: function(e, n, o, i, r, l) {
    var u, a, s = "on".concat(Zt(n)), d = S._getConfig(i, r), c = o?.$instance, m = S._usePT(c, S._getPT(i == null || (u = i.value) === null || u === void 0 ? void 0 : u.pt, e), S._getOptionValue, "hooks.".concat(s)), f = S._useDefaultPT(c, d == null || (a = d.pt) === null || a === void 0 || (a = a.directives) === null || a === void 0 ? void 0 : a[e], S._getOptionValue, "hooks.".concat(s)), h = {
      el: o,
      binding: i,
      vnode: r,
      prevVnode: l
    };
    m?.(c, h), f?.(c, h);
  },
  /* eslint-disable-next-line no-unused-vars */
  _mergeProps: function() {
    for (var e = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
      o[i - 2] = arguments[i];
    return xt(e) ? e.apply(void 0, o) : y.apply(void 0, o);
  },
  _extend: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = function(u, a, s, d, c) {
      var m, f, h, b;
      a._$instances = a._$instances || {};
      var $ = S._getConfig(s, d), k = a._$instances[e] || {}, E = se(k) ? C(C({}, n), n?.methods) : {};
      a._$instances[e] = C(C({}, k), {}, {
        /* new instance variables to pass in directive methods */
        $name: e,
        $host: a,
        $binding: s,
        $modifiers: s?.modifiers,
        $value: s?.value,
        $el: k.$el || a || void 0,
        $style: C({
          classes: void 0,
          inlineStyles: void 0,
          load: function() {
          },
          loadCSS: function() {
          },
          loadStyle: function() {
          }
        }, n?.style),
        $primevueConfig: $,
        $attrSelector: (m = a.$pd) === null || m === void 0 || (m = m[e]) === null || m === void 0 ? void 0 : m.attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return S._getPT($?.pt, void 0, function(I) {
            var A;
            return I == null || (A = I.directives) === null || A === void 0 ? void 0 : A[e];
          });
        },
        isUnstyled: function() {
          var I, A;
          return ((I = a._$instances[e]) === null || I === void 0 || (I = I.$binding) === null || I === void 0 || (I = I.value) === null || I === void 0 ? void 0 : I.unstyled) !== void 0 ? (A = a._$instances[e]) === null || A === void 0 || (A = A.$binding) === null || A === void 0 || (A = A.value) === null || A === void 0 ? void 0 : A.unstyled : $?.unstyled;
        },
        theme: function() {
          var I;
          return (I = a._$instances[e]) === null || I === void 0 || (I = I.$primevueConfig) === null || I === void 0 ? void 0 : I.theme;
        },
        preset: function() {
          var I;
          return (I = a._$instances[e]) === null || I === void 0 || (I = I.$binding) === null || I === void 0 || (I = I.value) === null || I === void 0 ? void 0 : I.dt;
        },
        /* instance's methods */
        ptm: function() {
          var I, A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", Z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return S._getPTValue(a._$instances[e], (I = a._$instances[e]) === null || I === void 0 || (I = I.$binding) === null || I === void 0 || (I = I.value) === null || I === void 0 ? void 0 : I.pt, A, C({}, Z));
        },
        ptmo: function() {
          var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", Z = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return S._getPTValue(a._$instances[e], I, A, Z, !1);
        },
        cx: function() {
          var I, A, Z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", Fe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (I = a._$instances[e]) !== null && I !== void 0 && I.isUnstyled() ? void 0 : S._getOptionValue((A = a._$instances[e]) === null || A === void 0 || (A = A.$style) === null || A === void 0 ? void 0 : A.classes, Z, C({}, Fe));
        },
        sx: function() {
          var I, A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", Z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, Fe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return Z ? S._getOptionValue((I = a._$instances[e]) === null || I === void 0 || (I = I.$style) === null || I === void 0 ? void 0 : I.inlineStyles, A, C({}, Fe)) : void 0;
        }
      }, E), a.$instance = a._$instances[e], (f = (h = a.$instance)[u]) === null || f === void 0 || f.call(h, a, s, d, c), a["$".concat(e)] = a.$instance, S._hook(e, u, a, s, d, c), a.$pd || (a.$pd = {}), a.$pd[e] = C(C({}, (b = a.$pd) === null || b === void 0 ? void 0 : b[e]), {}, {
        name: e,
        instance: a._$instances[e]
      });
    }, i = function(u) {
      var a, s, d, c = u._$instances[e], m = c?.watch, f = function($) {
        var k, E = $.newValue, M = $.oldValue;
        return m == null || (k = m.config) === null || k === void 0 ? void 0 : k.call(c, E, M);
      }, h = function($) {
        var k, E = $.newValue, M = $.oldValue;
        return m == null || (k = m["config.ripple"]) === null || k === void 0 ? void 0 : k.call(c, E, M);
      };
      c.$watchersCallback = {
        config: f,
        "config.ripple": h
      }, m == null || (a = m.config) === null || a === void 0 || a.call(c, c?.$primevueConfig), _e.on("config:change", f), m == null || (s = m["config.ripple"]) === null || s === void 0 || s.call(c, c == null || (d = c.$primevueConfig) === null || d === void 0 ? void 0 : d.ripple), _e.on("config:ripple:change", h);
    }, r = function(u) {
      var a = u._$instances[e].$watchersCallback;
      a && (_e.off("config:change", a.config), _e.off("config:ripple:change", a["config.ripple"]), u._$instances[e].$watchersCallback = void 0);
    };
    return {
      created: function(u, a, s, d) {
        u.$pd || (u.$pd = {}), u.$pd[e] = {
          name: e,
          attrSelector: pn("pd")
        }, o("created", u, a, s, d);
      },
      beforeMount: function(u, a, s, d) {
        var c;
        S._loadStyles((c = u.$pd[e]) === null || c === void 0 ? void 0 : c.instance, a, s), o("beforeMount", u, a, s, d), i(u);
      },
      mounted: function(u, a, s, d) {
        var c;
        S._loadStyles((c = u.$pd[e]) === null || c === void 0 ? void 0 : c.instance, a, s), o("mounted", u, a, s, d);
      },
      beforeUpdate: function(u, a, s, d) {
        o("beforeUpdate", u, a, s, d);
      },
      updated: function(u, a, s, d) {
        var c;
        S._loadStyles((c = u.$pd[e]) === null || c === void 0 ? void 0 : c.instance, a, s), o("updated", u, a, s, d);
      },
      beforeUnmount: function(u, a, s, d) {
        var c;
        r(u), S._removeThemeListeners((c = u.$pd[e]) === null || c === void 0 ? void 0 : c.instance), o("beforeUnmount", u, a, s, d);
      },
      unmounted: function(u, a, s, d) {
        var c;
        (c = u.$pd[e]) === null || c === void 0 || (c = c.instance) === null || c === void 0 || (c = c.scopedStyleEl) === null || c === void 0 || (c = c.value) === null || c === void 0 || c.remove(), o("unmounted", u, a, s, d);
      }
    };
  },
  extend: function() {
    var e = S._getMeta.apply(S, arguments), n = ct(e, 2), o = n[0], i = n[1];
    return C({
      extend: function() {
        var l = S._getMeta.apply(S, arguments), u = ct(l, 2), a = u[0], s = u[1];
        return S.extend(a, C(C(C({}, i), i?.methods), s));
      }
    }, S._extend(o, i));
  }
}, Un = `
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
`, qn = {
  root: "p-ink"
}, Hn = D.extend({
  name: "ripple-directive",
  style: Un,
  classes: qn
}), Gn = S.extend({
  style: Hn
});
function be(t) {
  "@babel/helpers - typeof";
  return be = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, be(t);
}
function Yn(t) {
  return Qn(t) || Xn(t) || Jn(t) || Zn();
}
function Zn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Jn(t, e) {
  if (t) {
    if (typeof t == "string") return qe(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? qe(t, e) : void 0;
  }
}
function Xn(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Qn(t) {
  if (Array.isArray(t)) return qe(t);
}
function qe(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function ft(t, e, n) {
  return (e = eo(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function eo(t) {
  var e = to(t, "string");
  return be(e) == "symbol" ? e : e + "";
}
function to(t, e) {
  if (be(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (be(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var et = Gn.extend("ripple", {
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
      n || (n = tn("span", ft(ft({
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
      var n = this, o = e.currentTarget, i = this.getInk(o);
      if (!(!i || getComputedStyle(i, null).display === "none")) {
        if (!this.isUnstyled() && Re(i, "p-ink-active"), i.setAttribute("data-p-ink-active", "false"), !ot(i) && !rt(i)) {
          var r = Math.max(Ee(o), Xt(o));
          i.style.height = r + "px", i.style.width = r + "px";
        }
        var l = Qt(o), u = e.pageX - l.left + document.body.scrollTop - rt(i) / 2, a = e.pageY - l.top + document.body.scrollLeft - ot(i) / 2;
        i.style.top = a + "px", i.style.left = u + "px", !this.isUnstyled() && en(i, "p-ink-active"), i.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          i && (!n.isUnstyled() && Re(i, "p-ink-active"), i.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(e) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && Re(e.currentTarget, "p-ink-active"), e.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(e) {
      return e && e.children ? Yn(e.children).find(function(n) {
        return Jt(n, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
}), no = `
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
function ve(t) {
  "@babel/helpers - typeof";
  return ve = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ve(t);
}
function U(t, e, n) {
  return (e = oo(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function oo(t) {
  var e = ro(t, "string");
  return ve(e) == "symbol" ? e : e + "";
}
function ro(t, e) {
  if (ve(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (ve(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var io = {
  root: function(e) {
    var n = e.instance, o = e.props;
    return ["p-button p-component", U(U(U(U(U(U(U(U(U({
      "p-button-icon-only": n.hasIcon && !o.label && !o.badge,
      "p-button-vertical": (o.iconPos === "top" || o.iconPos === "bottom") && o.label,
      "p-button-loading": o.loading,
      "p-button-link": o.link || o.variant === "link"
    }, "p-button-".concat(o.severity), o.severity), "p-button-raised", o.raised), "p-button-rounded", o.rounded), "p-button-text", o.text || o.variant === "text"), "p-button-outlined", o.outlined || o.variant === "outlined"), "p-button-sm", o.size === "small"), "p-button-lg", o.size === "large"), "p-button-plain", o.plain), "p-button-fluid", n.hasFluid)];
  },
  loadingIcon: "p-button-loading-icon",
  icon: function(e) {
    var n = e.props;
    return ["p-button-icon", U({}, "p-button-icon-".concat(n.iconPos), n.label)];
  },
  label: "p-button-label"
}, ao = D.extend({
  name: "button",
  style: no,
  classes: io
}), so = {
  name: "BaseButton",
  extends: Y,
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
  style: ao,
  provide: function() {
    return {
      $pcButton: this,
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
function F(t, e, n) {
  return (e = lo(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function lo(t) {
  var e = uo(t, "string");
  return ye(e) == "symbol" ? e : e + "";
}
function uo(t, e) {
  if (ye(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (ye(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var K = {
  name: "Button",
  extends: so,
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
      return y(this.asAttrs, this.a11yAttrs, this.getPTOptions("root"));
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
      return oe(F(F(F(F(F(F(F(F(F(F({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge), "loading", this.loading), "fluid", this.hasFluid), "rounded", this.rounded), "raised", this.raised), "outlined", this.outlined || this.variant === "outlined"), "text", this.text || this.variant === "text"), "link", this.link || this.variant === "link"), "vertical", (this.iconPos === "top" || this.iconPos === "bottom") && this.label));
    },
    dataIconP: function() {
      return oe(F(F({}, this.iconPos, this.iconPos), this.size, this.size));
    },
    dataLabelP: function() {
      return oe(F(F({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge));
    }
  },
  components: {
    SpinnerIcon: Mt,
    Badge: zt
  },
  directives: {
    ripple: et
  }
}, co = ["data-p"], po = ["data-p"];
function mo(t, e, n, o, i, r) {
  var l = H("SpinnerIcon"), u = H("Badge"), a = Ze("ripple");
  return t.asChild ? z(t.$slots, "default", {
    key: 1,
    class: J(t.cx("root")),
    a11yAttrs: r.a11yAttrs
  }) : Je((p(), P(ce(t.as), y({
    key: 0,
    class: t.cx("root"),
    "data-p": r.dataP
  }, r.attrs), {
    default: w(function() {
      return [z(t.$slots, "default", {}, function() {
        return [t.loading ? z(t.$slots, "loadingicon", y({
          key: 0,
          class: [t.cx("loadingIcon"), t.cx("icon")]
        }, t.ptm("loadingIcon")), function() {
          return [t.loadingIcon ? (p(), v("span", y({
            key: 0,
            class: [t.cx("loadingIcon"), t.cx("icon"), t.loadingIcon]
          }, t.ptm("loadingIcon")), null, 16)) : (p(), P(l, y({
            key: 1,
            class: [t.cx("loadingIcon"), t.cx("icon")],
            spin: ""
          }, t.ptm("loadingIcon")), null, 16, ["class"]))];
        }) : z(t.$slots, "icon", y({
          key: 1,
          class: [t.cx("icon")]
        }, t.ptm("icon")), function() {
          return [t.icon ? (p(), v("span", y({
            key: 0,
            class: [t.cx("icon"), t.icon, t.iconClass],
            "data-p": r.dataIconP
          }, t.ptm("icon")), null, 16, co)) : T("", !0)];
        }), t.label ? (p(), v("span", y({
          key: 2,
          class: t.cx("label")
        }, t.ptm("label"), {
          "data-p": r.dataLabelP
        }), R(t.label), 17, po)) : T("", !0), t.badge ? (p(), P(u, {
          key: 3,
          value: t.badge,
          class: J(t.badgeClass),
          severity: t.badgeSeverity,
          unstyled: t.unstyled,
          pt: t.ptm("pcBadge")
        }, null, 8, ["value", "class", "severity", "unstyled", "pt"])) : T("", !0)];
      })];
    }),
    _: 3
  }, 16, ["class", "data-p"])), [[a]]);
}
K.render = mo;
var fo = `
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
`, go = {
  root: "p-progressspinner",
  spin: "p-progressspinner-spin",
  circle: "p-progressspinner-circle"
}, ho = D.extend({
  name: "progressspinner",
  style: fo,
  classes: go
}), bo = {
  name: "BaseProgressSpinner",
  extends: Y,
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
  style: ho,
  provide: function() {
    return {
      $pcProgressSpinner: this,
      $parentInstance: this
    };
  }
}, jt = {
  name: "ProgressSpinner",
  extends: bo,
  inheritAttrs: !1,
  computed: {
    svgStyle: function() {
      return {
        "animation-duration": this.animationDuration
      };
    }
  }
}, vo = ["fill", "stroke-width"];
function yo(t, e, n, o, i, r) {
  return p(), v("div", y({
    class: t.cx("root"),
    role: "progressbar"
  }, t.ptmi("root")), [(p(), v("svg", y({
    class: t.cx("spin"),
    viewBox: "25 25 50 50",
    style: r.svgStyle
  }, t.ptm("spin")), [g("circle", y({
    class: t.cx("circle"),
    cx: "50",
    cy: "50",
    r: "20",
    fill: t.fill,
    "stroke-width": t.strokeWidth,
    strokeMiterlimit: "10"
  }, t.ptm("circle")), null, 16, vo)], 16))], 16);
}
jt.render = yo;
const De = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, i] of e)
    n[o] = i;
  return n;
}, ko = {}, Io = {
  x: "0px",
  y: "0px",
  viewBox: "0 0 500 450",
  style: { "enable-background": "new 0 0 500 450" }
};
function $o(t, e) {
  return p(), v("div", null, [
    (p(), v("svg", Io, [...e[0] || (e[0] = [
      yt(`<g id="BACKGROUND"><rect style="fill:none;stroke-miterlimit:10;" width="500" height="450"></rect><g><polygon style="fill:#cad2f9;" points="388.296,114.275 382.231,114.275 382.231,108.21 377.927,108.21 377.927,114.275
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
const So = /* @__PURE__ */ De(ko, [["render", $o]]), wo = {
  key: "loading",
  class: "w-full",
  role: "status",
  "aria-live": "polite"
}, xo = { class: "vstack-sm p-12" }, _o = {
  key: "error",
  class: "w-full"
}, Po = { class: "vstack-sm p-12 text-center items-center" }, Co = { class: "w-96" }, To = { key: "loaded" }, Eo = /* @__PURE__ */ N({
  __name: "PageLoader",
  props: {
    isLoading: { type: Boolean, default: !1 },
    showPreloadSlot: { type: Boolean, default: !1 },
    isError: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (e, n) => (p(), P(Oe, {
      name: "fade",
      mode: "out-in"
    }, {
      default: w(() => [
        t.showPreloadSlot && t.isLoading ? (p(), v("div", wo, [
          g("div", xo, [
            z(e.$slots, "preloader", {}, () => [
              L(O(jt), { "aria-label": "Loading" }),
              n[1] || (n[1] = g("span", { class: "sr-only" }, "Loading...", -1))
            ], !0)
          ])
        ])) : t.isError ? (p(), v("div", _o, [
          z(e.$slots, "error", {}, () => [
            g("div", Po, [
              g("div", Co, [
                L(So)
              ]),
              n[3] || (n[3] = g("p", null, "Something went wrong, please try again later.", -1)),
              L(O(K), {
                type: "button",
                class: "btn mt-4 w-fit",
                onClick: n[0] || (n[0] = (o) => e.$emit("retry"))
              }, {
                default: w(() => [...n[2] || (n[2] = [
                  q("Retry", -1)
                ])]),
                _: 1
              })
            ])
          ], !0)
        ])) : (p(), v("div", To, [
          z(e.$slots, "default", {}, void 0, !0)
        ]))
      ]),
      _: 3
    }));
  }
}), Ve = /* @__PURE__ */ De(Eo, [["__scopeId", "data-v-99664872"]]), Lo = /* @__PURE__ */ N({
  __name: "ThemeToggle",
  setup(t) {
    const e = localStorage.getItem("theme") || "light", n = x(e);
    document.documentElement.classList.toggle("dark", e === "dark");
    const o = G(() => n.value === "light" ? "pi pi-sun" : "pi pi-moon");
    function i() {
      const r = n.value === "light" ? "dark" : "light";
      localStorage.setItem("theme", r), n.value = r, document.documentElement.classList.toggle("dark", r === "dark");
    }
    return (r, l) => (p(), P(O(K), {
      id: "themeToggle",
      icon: o.value,
      variant: "outlined",
      "aria-label": "Toggle theme",
      onClick: l[0] || (l[0] = (u) => i())
    }, null, 8, ["icon"]));
  }
});
function ke(t) {
  "@babel/helpers - typeof";
  return ke = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ke(t);
}
function Ao(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function Oo(t, e) {
  for (var n = 0; n < e.length; n++) {
    var o = e[n];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, zo(o.key), o);
  }
}
function Mo(t, e, n) {
  return e && Oo(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function zo(t) {
  var e = jo(t, "string");
  return ke(e) == "symbol" ? e : e + "";
}
function jo(t, e) {
  if (ke(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (ke(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Do = /* @__PURE__ */ (function() {
  function t(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
    };
    Ao(this, t), this.element = e, this.listener = n;
  }
  return Mo(t, [{
    key: "bindScrollListener",
    value: function() {
      this.scrollableParents = nn(this.element);
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
})(), Vo = on(), Dt = {
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
    this.mounted = rn();
  },
  computed: {
    inline: function() {
      return this.disabled || this.appendTo === "self";
    }
  }
};
function No(t, e, n, o, i, r) {
  return r.inline ? z(t.$slots, "default", {
    key: 0
  }) : i.mounted ? (p(), P(Gt, {
    key: 1,
    to: n.appendTo
  }, [z(t.$slots, "default")], 8, ["to"])) : T("", !0);
}
Dt.render = No;
var Fo = `
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
`, Ro = {
  submenu: function(e) {
    var n = e.instance, o = e.processedItem;
    return {
      display: n.isItemActive(o) ? "flex" : "none"
    };
  }
}, Bo = {
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
}, Ko = D.extend({
  name: "tieredmenu",
  style: Fo,
  classes: Bo,
  inlineStyles: Ro
}), Vt = {
  name: "AngleRightIcon",
  extends: Qe
};
function Wo(t) {
  return Go(t) || Ho(t) || qo(t) || Uo();
}
function Uo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qo(t, e) {
  if (t) {
    if (typeof t == "string") return He(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? He(t, e) : void 0;
  }
}
function Ho(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Go(t) {
  if (Array.isArray(t)) return He(t);
}
function He(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function Yo(t, e, n, o, i, r) {
  return p(), v("svg", y({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t.pti()), Wo(e[0] || (e[0] = [g("path", {
    d: "M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
Vt.render = Yo;
var Zo = {
  name: "BaseTieredMenu",
  extends: Y,
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
  style: Ko,
  provide: function() {
    return {
      $pcTieredMenu: this,
      $parentInstance: this
    };
  }
}, Nt = {
  name: "TieredMenuSub",
  hostName: "TieredMenu",
  extends: Y,
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
      return e && e.item ? pe(e.item[n], o) : void 0;
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
      un(this.container, this.level);
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
        action: y({
          class: this.cx("itemLink"),
          tabindex: -1
        }, this.getPTOptions(e, n, "itemLink")),
        icon: y({
          class: [this.cx("itemIcon"), this.getItemProp(e, "icon")]
        }, this.getPTOptions(e, n, "itemIcon")),
        label: y({
          class: this.cx("itemLabel")
        }, this.getPTOptions(e, n, "itemLabel")),
        submenuicon: y({
          class: this.cx("submenuIcon")
        }, this.getPTOptions(e, n, "submenuIcon"))
      };
    },
    containerRef: function(e) {
      this.container = e;
    }
  },
  components: {
    AngleRightIcon: Vt
  },
  directives: {
    ripple: et
  }
}, Jo = ["tabindex"], Xo = ["id", "aria-label", "aria-disabled", "aria-expanded", "aria-haspopup", "aria-level", "aria-setsize", "aria-posinset", "data-p-active", "data-p-focused", "data-p-disabled"], Qo = ["onClick", "onMouseenter", "onMousemove"], er = ["href", "target"], tr = ["id"], nr = ["id"];
function or(t, e, n, o, i, r) {
  var l = H("AngleRightIcon"), u = H("TieredMenuSub", !0), a = Ze("ripple");
  return p(), P(Oe, y({
    name: "p-tieredmenu",
    onEnter: r.onEnter
  }, t.ptm("menu.transition")), {
    default: w(function() {
      return [n.level === 0 || n.visible ? (p(), v("ul", {
        key: 0,
        ref: r.containerRef,
        tabindex: n.tabindex
      }, [(p(!0), v(Ce, null, kt(n.items, function(s, d) {
        return p(), v(Ce, {
          key: r.getItemKey(s)
        }, [r.isItemVisible(s) && !r.getItemProp(s, "separator") ? (p(), v("li", y({
          key: 0,
          id: r.getItemId(s),
          style: r.getItemProp(s, "style"),
          class: [t.cx("item", {
            processedItem: s
          }), r.getItemProp(s, "class")],
          role: "menuitem",
          "aria-label": r.getItemLabel(s),
          "aria-disabled": r.isItemDisabled(s) || void 0,
          "aria-expanded": r.isItemGroup(s) ? r.isItemActive(s) : void 0,
          "aria-haspopup": r.isItemGroup(s) && !r.getItemProp(s, "to") ? "menu" : void 0,
          "aria-level": n.level + 1,
          "aria-setsize": r.getAriaSetSize(),
          "aria-posinset": r.getAriaPosInset(d)
        }, {
          ref_for: !0
        }, r.getPTOptions(s, d, "item"), {
          "data-p-active": r.isItemActive(s),
          "data-p-focused": r.isItemFocused(s),
          "data-p-disabled": r.isItemDisabled(s)
        }), [g("div", y({
          class: t.cx("itemContent"),
          onClick: function(m) {
            return r.onItemClick(m, s);
          },
          onMouseenter: function(m) {
            return r.onItemMouseEnter(m, s);
          },
          onMousemove: function(m) {
            return r.onItemMouseMove(m, s);
          }
        }, {
          ref_for: !0
        }, r.getPTOptions(s, d, "itemContent")), [n.templates.item ? (p(), P(ce(n.templates.item), {
          key: 1,
          item: s.item,
          hasSubmenu: r.getItemProp(s, "items"),
          label: r.getItemLabel(s),
          props: r.getMenuItemProps(s, d)
        }, null, 8, ["item", "hasSubmenu", "label", "props"])) : Je((p(), v("a", y({
          key: 0,
          href: r.getItemProp(s, "url"),
          class: t.cx("itemLink"),
          target: r.getItemProp(s, "target"),
          tabindex: "-1"
        }, {
          ref_for: !0
        }, r.getPTOptions(s, d, "itemLink")), [n.templates.itemicon ? (p(), P(ce(n.templates.itemicon), {
          key: 0,
          item: s.item,
          class: J(t.cx("itemIcon"))
        }, null, 8, ["item", "class"])) : r.getItemProp(s, "icon") ? (p(), v("span", y({
          key: 1,
          class: [t.cx("itemIcon"), r.getItemProp(s, "icon")]
        }, {
          ref_for: !0
        }, r.getPTOptions(s, d, "itemIcon")), null, 16)) : T("", !0), g("span", y({
          id: r.getItemLabelId(s),
          class: t.cx("itemLabel")
        }, {
          ref_for: !0
        }, r.getPTOptions(s, d, "itemLabel")), R(r.getItemLabel(s)), 17, tr), r.getItemProp(s, "items") ? (p(), v(Ce, {
          key: 2
        }, [n.templates.submenuicon ? (p(), P(ce(n.templates.submenuicon), y({
          key: 0,
          class: t.cx("submenuIcon"),
          active: r.isItemActive(s)
        }, {
          ref_for: !0
        }, r.getPTOptions(s, d, "submenuIcon")), null, 16, ["class", "active"])) : (p(), P(l, y({
          key: 1,
          class: t.cx("submenuIcon")
        }, {
          ref_for: !0
        }, r.getPTOptions(s, d, "submenuIcon")), null, 16, ["class"]))], 64)) : T("", !0)], 16, er)), [[a]])], 16, Qo), r.isItemVisible(s) && r.isItemGroup(s) ? (p(), P(u, y({
          key: 0,
          id: r.getItemId(s) + "_list",
          class: t.cx("submenu"),
          style: t.sx("submenu", !0, {
            processedItem: s
          }),
          "aria-labelledby": r.getItemLabelId(s),
          role: "menu",
          menuId: n.menuId,
          focusedItemId: n.focusedItemId,
          items: s.items,
          templates: n.templates,
          activeItemPath: n.activeItemPath,
          level: n.level + 1,
          visible: r.isItemActive(s) && r.isItemGroup(s),
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
        }, t.ptm("submenu")), null, 16, ["id", "class", "style", "aria-labelledby", "menuId", "focusedItemId", "items", "templates", "activeItemPath", "level", "visible", "pt", "unstyled"])) : T("", !0)], 16, Xo)) : T("", !0), r.isItemVisible(s) && r.getItemProp(s, "separator") ? (p(), v("li", y({
          key: 1,
          id: r.getItemId(s),
          style: r.getItemProp(s, "style"),
          class: [t.cx("separator"), r.getItemProp(s, "class")],
          role: "separator"
        }, {
          ref_for: !0
        }, t.ptm("separator")), null, 16, nr)) : T("", !0)], 64);
      }), 128))], 8, Jo)) : T("", !0)];
    }),
    _: 1
  }, 16, ["onEnter"]);
}
Nt.render = or;
var Ft = {
  name: "TieredMenu",
  extends: Zo,
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
    this.unbindOutsideClickListener(), this.unbindResizeListener(), this.unbindMatchMediaListener(), this.scrollHandler && (this.scrollHandler.destroy(), this.scrollHandler = null), this.container && this.autoZIndex && Be.clear(this.container), this.target = null, this.container = null;
  },
  methods: {
    getItemProp: function(e, n) {
      return e ? pe(e[n]) : void 0;
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
      this.popup && (this.$emit("before-show"), this.visible = !0, this.target = this.target || e.currentTarget, this.relatedTarget = e.relatedTarget || null), n && ae(this.menubar);
    },
    hide: function(e, n) {
      this.popup && (this.$emit("before-hide"), this.visible = !1), this.activeItemPath = [], this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      }, n && ae(this.relatedTarget || this.target || this.menubar), this.dirty = !1;
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
          !n && ln(e.key) && this.searchItems(e, e.key);
          break;
      }
    },
    onItemChange: function(e, n) {
      var o = e.processedItem, i = e.isFocus;
      if (!se(o)) {
        var r = o.index, l = o.key, u = o.level, a = o.parentKey, s = o.items, d = W(s), c = this.activeItemPath.filter(function(m) {
          return m.parentKey !== a && m.parentKey !== l;
        });
        d && (c.push(o), this.submenuVisible = !0), this.focusedItemInfo = {
          index: r,
          level: u,
          parentKey: a
        }, d && (this.dirty = !0), i && ae(this.menubar), !(n === "hover" && this.queryMatches) && (this.activeItemPath = c);
      }
    },
    onOverlayClick: function(e) {
      Vo.emit("overlay-click", {
        originalEvent: e,
        target: this.target
      });
    },
    onItemClick: function(e) {
      var n = e.originalEvent, o = e.processedItem, i = this.isProccessedItemGroup(o), r = se(o.parent), l = this.isSelected(o);
      if (l) {
        var u = o.index, a = o.key, s = o.level, d = o.parentKey;
        this.activeItemPath = this.activeItemPath.filter(function(m) {
          return a !== m.key && a.startsWith(m.key);
        }), this.focusedItemInfo = {
          index: u,
          level: s,
          parentKey: d
        }, this.dirty = !r, ae(this.menubar);
      } else if (i)
        this.onItemChange(e);
      else {
        var c = r ? o : this.activeItemPath.find(function(m) {
          return m.parentKey === "";
        });
        this.hide(n), this.changeFocusedItemIndex(n, c ? c.index : -1), ae(this.menubar);
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
        var i = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemIndex(e, i), e.preventDefault();
      }
    },
    onArrowLeftKey: function(e) {
      var n = this, o = this.visibleItems[this.focusedItemInfo.index], i = this.activeItemPath.find(function(l) {
        return l.key === o.parentKey;
      }), r = se(o.parent);
      r || (this.focusedItemInfo = {
        index: -1,
        parentKey: i ? i.parentKey : ""
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
        var n = Te(this.menubar, 'li[id="'.concat("".concat(this.focusedItemId), '"]')), o = n && Te(n, '[data-pc-section="itemlink"]');
        if (o ? o.click() : n && n.click(), !this.popup) {
          var i = this.visibleItems[this.focusedItemInfo.index], r = this.isProccessedItemGroup(i);
          !r && (this.focusedItemInfo.index = this.findFirstFocusedItemIndex());
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
        }, this.popup && ae(this.target);
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
      this.autoZIndex && Be.set("menu", e, this.baseZIndex + this.$primevue.config.zIndex.menu), sn(e, {
        position: "absolute",
        top: "0"
      }), this.alignOverlay(), ae(this.menubar), this.scrollInView();
    },
    onAfterEnter: function() {
      this.bindOutsideClickListener(), this.bindScrollListener(), this.bindResizeListener(), this.$emit("show");
    },
    onLeave: function() {
      this.unbindOutsideClickListener(), this.unbindScrollListener(), this.unbindResizeListener(), this.$emit("hide"), this.container = null, this.dirty = !1;
    },
    onAfterLeave: function(e) {
      this.autoZIndex && Be.clear(e);
    },
    alignOverlay: function() {
      an(this.container, this.target);
      var e = Ee(this.target);
      e > Ee(this.container) && (this.container.style.minWidth = Ee(this.target) + "px");
    },
    bindOutsideClickListener: function() {
      var e = this;
      this.outsideClickListener || (this.outsideClickListener = function(n) {
        var o = e.container && !e.container.contains(n.target), i = e.popup ? !(e.target && (e.target === n.target || e.target.contains(n.target))) : !0;
        o && i && e.hide();
      }, document.addEventListener("click", this.outsideClickListener, !0));
    },
    unbindOutsideClickListener: function() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener, !0), this.outsideClickListener = null);
    },
    bindScrollListener: function() {
      var e = this;
      this.scrollHandler || (this.scrollHandler = new Do(this.target, function(n) {
        e.hide(n, !0);
      })), this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function() {
      this.scrollHandler && this.scrollHandler.unbindScrollListener();
    },
    bindResizeListener: function() {
      var e = this;
      this.resizeListener || (this.resizeListener = function(n) {
        _t() || e.hide(n, !0);
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
      return it(this.visibleItems, function(n) {
        return e.isValidItem(n);
      });
    },
    findNextItemIndex: function(e) {
      var n = this, o = e < this.visibleItems.length - 1 ? this.visibleItems.slice(e + 1).findIndex(function(i) {
        return n.isValidItem(i);
      }) : -1;
      return o > -1 ? o + e + 1 : e;
    },
    findPrevItemIndex: function(e) {
      var n = this, o = e > 0 ? it(this.visibleItems.slice(0, e), function(i) {
        return n.isValidItem(i);
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
      var i = -1, r = !1;
      return this.focusedItemInfo.index !== -1 ? (i = this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(l) {
        return o.isItemMatched(l);
      }), i = i === -1 ? this.visibleItems.slice(0, this.focusedItemInfo.index).findIndex(function(l) {
        return o.isItemMatched(l);
      }) : i + this.focusedItemInfo.index) : i = this.visibleItems.findIndex(function(l) {
        return o.isItemMatched(l);
      }), i !== -1 && (r = !0), i === -1 && this.focusedItemInfo.index === -1 && (i = this.findFirstFocusedItemIndex()), i !== -1 && this.changeFocusedItemIndex(e, i), this.searchTimeout && clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout(function() {
        o.searchValue = "", o.searchTimeout = null;
      }, 500), r;
    },
    changeFocusedItemIndex: function(e, n) {
      this.focusedItemInfo.index !== n && (this.focusedItemInfo.index = n, this.scrollInView());
    },
    scrollInView: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1, n = e !== -1 ? "".concat(this.$id, "_").concat(e) : this.focusedItemId, o = Te(this.menubar, 'li[id="'.concat(n, '"]'));
      o && o.scrollIntoView && o.scrollIntoView({
        block: "nearest",
        inline: "start"
      });
    },
    createProcessedItems: function(e) {
      var n = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "", l = [];
      return e && e.forEach(function(u, a) {
        var s = (r !== "" ? r + "_" : "") + a, d = {
          item: u,
          index: a,
          level: o,
          key: s,
          parent: i,
          parentKey: r
        };
        d.items = n.createProcessedItems(u.items, o + 1, d, s), l.push(d);
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
    TieredMenuSub: Nt,
    Portal: Dt
  }
}, rr = ["id"];
function ir(t, e, n, o, i, r) {
  var l = H("TieredMenuSub"), u = H("Portal");
  return p(), P(u, {
    appendTo: t.appendTo,
    disabled: !t.popup
  }, {
    default: w(function() {
      return [L(Oe, y({
        name: "p-anchored-overlay",
        onEnter: r.onEnter,
        onAfterEnter: r.onAfterEnter,
        onLeave: r.onLeave,
        onAfterLeave: r.onAfterLeave
      }, t.ptm("transition")), {
        default: w(function() {
          return [i.visible ? (p(), v("div", y({
            key: 0,
            ref: r.containerRef,
            id: t.$id,
            class: t.cx("root"),
            onClick: e[0] || (e[0] = function() {
              return r.onOverlayClick && r.onOverlayClick.apply(r, arguments);
            })
          }, t.ptmi("root")), [t.$slots.start ? (p(), v("div", y({
            key: 0,
            class: t.cx("start")
          }, t.ptm("start")), [z(t.$slots, "start")], 16)) : T("", !0), L(l, y({
            ref: r.menubarRef,
            id: t.$id + "_list",
            class: t.cx("rootList"),
            tabindex: t.disabled ? -1 : t.tabindex,
            role: "menubar",
            "aria-label": t.ariaLabel,
            "aria-labelledby": t.ariaLabelledby,
            "aria-disabled": t.disabled || void 0,
            "aria-orientation": "vertical",
            "aria-activedescendant": i.focused ? r.focusedItemId : void 0,
            menuId: t.$id,
            focusedItemId: i.focused ? r.focusedItemId : void 0,
            items: r.processedItems,
            templates: t.$slots,
            activeItemPath: i.activeItemPath,
            level: 0,
            visible: i.submenuVisible,
            pt: t.pt,
            unstyled: t.unstyled,
            onFocus: r.onFocus,
            onBlur: r.onBlur,
            onKeydown: r.onKeyDown,
            onItemClick: r.onItemClick,
            onItemMouseenter: r.onItemMouseEnter,
            onItemMousemove: r.onItemMouseMove
          }, t.ptm("rootList")), null, 16, ["id", "class", "tabindex", "aria-label", "aria-labelledby", "aria-disabled", "aria-activedescendant", "menuId", "focusedItemId", "items", "templates", "activeItemPath", "visible", "pt", "unstyled", "onFocus", "onBlur", "onKeydown", "onItemClick", "onItemMouseenter", "onItemMousemove"]), t.$slots.end ? (p(), v("div", y({
            key: 1,
            class: t.cx("end")
          }, t.ptm("end")), [z(t.$slots, "end")], 16)) : T("", !0)], 16, rr)) : T("", !0)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo", "disabled"]);
}
Ft.render = ir;
function V(t) {
  if (t instanceof Error)
    return {
      name: t.name,
      message: t.message,
      stack: t.stack
    };
  if (t instanceof Response)
    return {
      status: t.status,
      statusText: t.statusText,
      url: t.url,
      headers: ar(t.headers)
    };
  if (typeof t == "object" && t !== null)
    try {
      return JSON.parse(JSON.stringify(t));
    } catch {
      return { message: "Non-serializable object error", original: String(t) };
    }
  return { message: String(t) };
}
function ar(t) {
  const e = {};
  return t.forEach((n, o) => {
    e[o] = n;
  }), e;
}
const sr = { class: "bg-surface-0 dark:bg-surface-900" }, lr = { class: "container" }, ur = { class: "flex py-4" }, dr = { class: "flex gap-3 sm:gap-5 ml-auto h-12 items-center" }, cr = { class: "ml-2" }, pr = ["aria-label", "onClick"], mr = { class: "ml-2" }, Ia = /* @__PURE__ */ N({
  name: "SiteNavigation",
  __name: "SiteNavigation",
  props: {
    items: {},
    userSignedIn: { type: Boolean, default: !1 }
  },
  emits: ["signoutSuccess", "signoutError"],
  setup(t, { emit: e }) {
    const n = e, o = t, i = dn(), r = x(!1), l = x(null), u = x([
      { type: "link", label: "Sign in", icon: "pi pi-sign-in", to: "/signin" },
      { type: "link", label: "Sign up", icon: "pi pi-user-plus", to: "/signup" }
    ]), a = x([
      {
        type: "button",
        label: "Sign Out",
        icon: "pi pi-sign-out",
        "aria-label": "Sign out",
        command: m
      }
    ]), s = G(() => !o.items || !o.items.length ? [] : o.items.map((f) => ({
      ...f,
      type: "link"
    }))), d = G(() => o.userSignedIn ? [...s.value, ...a.value] : [...s.value, ...u.value]), c = (f) => {
      l.value?.toggle(f);
    };
    async function m() {
      try {
        r.value = !0, await Xe.signOut(), i.updateAuth(), console.log("emitting signoutSuccess"), n("signoutSuccess");
      } catch (f) {
        n("signoutError", {
          type: "unexpected",
          severity: "error",
          summary: j.error.somethingWentWrong.summary,
          detail: j.error.somethingWentWrong.detail,
          json: V(f)
        });
      } finally {
        r.value = !1;
      }
    }
    return (f, h) => {
      const b = H("RouterLink"), $ = H("router-link");
      return p(), v("header", sr, [
        g("div", lr, [
          g("nav", ur, [
            L(O(K), {
              asChild: "",
              variant: "link"
            }, {
              default: w((k) => [
                L(b, {
                  to: t.userSignedIn ? "/home" : "/",
                  class: J([k.class, "!p-0"])
                }, {
                  default: w(() => [
                    z(f.$slots, "logo")
                  ]),
                  _: 3
                }, 8, ["to", "class"])
              ]),
              _: 3
            }),
            g("div", dr, [
              L(O(K), {
                icon: "pi pi-bars",
                "aria-label": "Navigation menu",
                "aria-haspopup": "true",
                "aria-controls": "overlay_tmenu",
                onClick: c
              }),
              L(O(Ft), {
                id: "overlay_tmenu",
                ref_key: "tieredMenu",
                ref: l,
                model: d.value,
                popup: ""
              }, {
                item: w(({ item: k, props: E }) => [
                  k.type === "link" ? (p(), P($, y({
                    key: 0,
                    to: k.to
                  }, E.action), {
                    default: w(() => [
                      g("span", {
                        class: J(k.icon)
                      }, null, 2),
                      g("span", cr, R(k.label), 1)
                    ]),
                    _: 2
                  }, 1040, ["to"])) : k.type === "button" ? (p(), v("button", {
                    key: 1,
                    "aria-label": k["aria-label"],
                    class: "p-tieredmenu-item-link",
                    onClick: (M) => k.command?.({ originalEvent: M, item: k })
                  }, [
                    g("span", {
                      class: J(k.icon)
                    }, null, 2),
                    g("span", mr, R(k.label), 1)
                  ], 8, pr)) : T("", !0)
                ]),
                _: 1
              }, 8, ["model"]),
              L(Lo)
            ])
          ])
        ])
      ]);
    };
  }
});
var fr = `
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
`, gr = {
  root: "p-card p-component",
  header: "p-card-header",
  body: "p-card-body",
  caption: "p-card-caption",
  title: "p-card-title",
  subtitle: "p-card-subtitle",
  content: "p-card-content",
  footer: "p-card-footer"
}, hr = D.extend({
  name: "card",
  style: fr,
  classes: gr
}), br = {
  name: "BaseCard",
  extends: Y,
  style: hr,
  provide: function() {
    return {
      $pcCard: this,
      $parentInstance: this
    };
  }
}, ie = {
  name: "Card",
  extends: br,
  inheritAttrs: !1
};
function vr(t, e, n, o, i, r) {
  return p(), v("div", y({
    class: t.cx("root")
  }, t.ptmi("root")), [t.$slots.header ? (p(), v("div", y({
    key: 0,
    class: t.cx("header")
  }, t.ptm("header")), [z(t.$slots, "header")], 16)) : T("", !0), g("div", y({
    class: t.cx("body")
  }, t.ptm("body")), [t.$slots.title || t.$slots.subtitle ? (p(), v("div", y({
    key: 0,
    class: t.cx("caption")
  }, t.ptm("caption")), [t.$slots.title ? (p(), v("div", y({
    key: 0,
    class: t.cx("title")
  }, t.ptm("title")), [z(t.$slots, "title")], 16)) : T("", !0), t.$slots.subtitle ? (p(), v("div", y({
    key: 1,
    class: t.cx("subtitle")
  }, t.ptm("subtitle")), [z(t.$slots, "subtitle")], 16)) : T("", !0)], 16)) : T("", !0), g("div", y({
    class: t.cx("content")
  }, t.ptm("content")), [z(t.$slots, "content")], 16), t.$slots.footer ? (p(), v("div", y({
    key: 1,
    class: t.cx("footer")
  }, t.ptm("footer")), [z(t.$slots, "footer")], 16)) : T("", !0)], 16)], 16);
}
ie.render = vr;
const $a = /* @__PURE__ */ N({
  __name: "AppErrorInfo",
  props: {
    error: {}
  },
  setup(t) {
    const e = t;
    return re(() => {
      console.error("App error: ", e.error);
    }), (n, o) => (p(), P(O(ie), { class: "p-10" }, {
      title: w(() => [...o[0] || (o[0] = [
        g("h2", { class: "text-4xl font-semibold text-gray-800 text-center" }, [
          q(" Oops "),
          g("i", { class: "text-4xl not-italic" }, "🥲")
        ], -1)
      ])]),
      content: w(() => [...o[1] || (o[1] = [
        g("p", { class: "mt-10 text-xl" }, [
          q(" Something went wrong! We have been notified about this. In the meantime, please try visiting the "),
          g("a", {
            href: "/",
            class: "underline"
          }, "homepage"),
          q(" or try again later. ")
        ], -1)
      ])]),
      _: 1
    }));
  }
}), yr = {
  key: 0,
  class: "bar"
}, kr = /* @__PURE__ */ N({
  __name: "PageInfiniteLoader",
  props: {
    isLoading: { type: Boolean }
  },
  setup(t) {
    return (e, n) => t.isLoading ? (p(), v("div", yr, [...n[0] || (n[0] = [
      g("div", null, null, -1)
    ])])) : T("", !0);
  }
}), Sa = /* @__PURE__ */ De(kr, [["__scopeId", "data-v-84824e66"]]);
class X extends Error {
  response;
  data;
  constructor(e, n, o) {
    super(e), this.name = "ApiResponseError", this.response = {
      status: n.status,
      statusText: n.statusText,
      url: n.url
    }, this.data = o;
  }
}
async function Ir(t) {
  const e = await fetch(`${t}/user/email`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  }), n = await e.json();
  if (!e.ok)
    throw new X("Failed to get email", e, n);
  return n;
}
async function $r(t, e) {
  const n = await fetch(`${e}/user/email/request-change`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify({ email: t })
  }), o = await n.json();
  if (!n.ok)
    throw new X("Failed to request email change", n, o);
  return o;
}
async function Sr(t, e) {
  const n = await fetch(`${e}/auth/user/email/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify({ token: t })
  }), o = await n.json();
  if (!n.ok)
    throw new X("Failed to update email", n, o);
  return o;
}
async function wr(t) {
  const e = await fetch(`${t}/account/request-delete`, {
    method: "POST",
    credentials: "include"
  }), n = await e.json();
  if (!e.ok)
    throw new X("Failed to request account deletion", e, n);
  return n;
}
async function xr(t, e) {
  const n = await fetch(`${e}/account`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "X-Delete-Token": t,
      "Content-Type": "application/json"
    }
  }), o = await n.json();
  if (!n.ok)
    throw new X("Failed to delete account", n, o);
  return o;
}
const xe = { getEmail: Ir, updateEmail: Sr, requestEmailChange: $r, requestDelete: wr, deleteAccount: xr };
function _r(t) {
  async function e(n, o, i) {
    const r = "We failed to delete your account!", l = "Something went wrong while deleting your account. Please try again or contact us to let us know about this issue.";
    try {
      await xe.deleteAccount(n, t), await Xe.signOut(), o();
    } catch (u) {
      i({
        type: "unexpected",
        severity: "error",
        summary: r,
        detail: l,
        json: V(u)
      });
    }
  }
  return {
    deleteAccount: e
  };
}
function Pr(t) {
  async function e(n, o, i) {
    const r = "Failed to update your email!", l = "Something went wrong while updating your email. Please try again or contact us to let us know about this issue.", u = "The email verification token is invalid or has expired. Please try again.";
    try {
      const a = await xe.updateEmail(n, t);
      if (a.status === "OK")
        o({
          type: "email_already_verified",
          severity: "success",
          summary: "updateEmailSuccessSummary",
          detail: "updateEmailSuccessDetail"
        });
      else if (a.status === "EMAIL_VERIFICATION_INVALID_TOKEN_ERROR")
        i({
          type: "email_verification_invalid_token",
          severity: "error",
          summary: r,
          detail: u,
          json: a
        });
      else
        throw new Error(
          `Unexpected response status: ${a.status}. Expected 'OK' or 'EMAIL_VERIFICATION_INVALID_TOKEN_ERROR'.`
        );
    } catch (a) {
      i({
        type: "unexpected",
        severity: "error",
        summary: r,
        detail: l,
        json: V(a)
      });
    }
  }
  return {
    updateEmail: e
  };
}
var Cr = {
  name: "BaseEditableHolder",
  extends: Y,
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
      var o, i;
      this.controlled && (this.d_value = e, this.$emit("update:modelValue", e)), this.$emit("value-change", e), (o = (i = this.formField).onChange) === null || o === void 0 || o.call(i, {
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
}, Rt = {
  name: "BaseInput",
  extends: Cr,
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
}, Tr = `
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
`, Er = {
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
}, Lr = D.extend({
  name: "inputtext",
  style: Tr,
  classes: Er
}), Ar = {
  name: "BaseInputText",
  extends: Rt,
  style: Lr,
  provide: function() {
    return {
      $pcInputText: this,
      $parentInstance: this
    };
  }
};
function Ie(t) {
  "@babel/helpers - typeof";
  return Ie = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ie(t);
}
function Or(t, e, n) {
  return (e = Mr(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Mr(t) {
  var e = zr(t, "string");
  return Ie(e) == "symbol" ? e : e + "";
}
function zr(t, e) {
  if (Ie(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (Ie(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Ne = {
  name: "InputText",
  extends: Ar,
  inheritAttrs: !1,
  methods: {
    onInput: function(e) {
      this.writeValue(e.target.value, e);
    }
  },
  computed: {
    attrs: function() {
      return y(this.ptmi("root", {
        context: {
          filled: this.$filled,
          disabled: this.disabled
        }
      }), this.formField);
    },
    dataP: function() {
      return oe(Or({
        invalid: this.$invalid,
        fluid: this.$fluid,
        filled: this.$variant === "filled"
      }, this.size, this.size));
    }
  }
}, jr = ["value", "name", "disabled", "aria-invalid", "data-p"];
function Dr(t, e, n, o, i, r) {
  return p(), v("input", y({
    type: "text",
    class: t.cx("root"),
    value: t.d_value,
    name: t.name,
    disabled: t.disabled,
    "aria-invalid": t.$invalid || void 0,
    "data-p": r.dataP,
    onInput: e[0] || (e[0] = function() {
      return r.onInput && r.onInput.apply(r, arguments);
    })
  }, r.attrs), null, 16, jr);
}
Ne.render = Dr;
var Bt = {
  name: "TimesIcon",
  extends: Qe
};
function Vr(t) {
  return Br(t) || Rr(t) || Fr(t) || Nr();
}
function Nr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fr(t, e) {
  if (t) {
    if (typeof t == "string") return Ge(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ge(t, e) : void 0;
  }
}
function Rr(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Br(t) {
  if (Array.isArray(t)) return Ge(t);
}
function Ge(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function Kr(t, e, n, o, i, r) {
  return p(), v("svg", y({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t.pti()), Vr(e[0] || (e[0] = [g("path", {
    d: "M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
Bt.render = Kr;
var Wr = `
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
`, Ur = {
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
}, qr = D.extend({
  name: "message",
  style: Wr,
  classes: Ur
}), Hr = {
  name: "BaseMessage",
  extends: Y,
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
  style: qr,
  provide: function() {
    return {
      $pcMessage: this,
      $parentInstance: this
    };
  }
};
function $e(t) {
  "@babel/helpers - typeof";
  return $e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, $e(t);
}
function gt(t, e, n) {
  return (e = Gr(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Gr(t) {
  var e = Yr(t, "string");
  return $e(e) == "symbol" ? e : e + "";
}
function Yr(t, e) {
  if ($e(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if ($e(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Kt = {
  name: "Message",
  extends: Hr,
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
      return oe(gt(gt({
        outlined: this.variant === "outlined",
        simple: this.variant === "simple"
      }, this.severity, this.severity), this.size, this.size));
    }
  },
  directives: {
    ripple: et
  },
  components: {
    TimesIcon: Bt
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
function ht(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function bt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ht(Object(n), !0).forEach(function(o) {
      Zr(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ht(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function Zr(t, e, n) {
  return (e = Jr(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Jr(t) {
  var e = Xr(t, "string");
  return Se(e) == "symbol" ? e : e + "";
}
function Xr(t, e) {
  if (Se(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (Se(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Qr = ["data-p"], ei = ["data-p"], ti = ["data-p"], ni = ["aria-label", "data-p"], oi = ["data-p"];
function ri(t, e, n, o, i, r) {
  var l = H("TimesIcon"), u = Ze("ripple");
  return p(), P(Oe, y({
    name: "p-message",
    appear: ""
  }, t.ptmi("transition")), {
    default: w(function() {
      return [i.visible ? (p(), v("div", y({
        key: 0,
        class: t.cx("root"),
        role: "alert",
        "aria-live": "assertive",
        "aria-atomic": "true",
        "data-p": r.dataP
      }, t.ptm("root")), [g("div", y({
        class: t.cx("contentWrapper")
      }, t.ptm("contentWrapper")), [t.$slots.container ? z(t.$slots, "container", {
        key: 0,
        closeCallback: r.close
      }) : (p(), v("div", y({
        key: 1,
        class: t.cx("content"),
        "data-p": r.dataP
      }, t.ptm("content")), [z(t.$slots, "icon", {
        class: J(t.cx("icon"))
      }, function() {
        return [(p(), P(ce(t.icon ? "span" : null), y({
          class: [t.cx("icon"), t.icon],
          "data-p": r.dataP
        }, t.ptm("icon")), null, 16, ["class", "data-p"]))];
      }), t.$slots.default ? (p(), v("div", y({
        key: 0,
        class: t.cx("text"),
        "data-p": r.dataP
      }, t.ptm("text")), [z(t.$slots, "default")], 16, ti)) : T("", !0), t.closable ? Je((p(), v("button", y({
        key: 1,
        class: t.cx("closeButton"),
        "aria-label": r.closeAriaLabel,
        type: "button",
        onClick: e[0] || (e[0] = function(a) {
          return r.close(a);
        }),
        "data-p": r.dataP
      }, bt(bt({}, t.closeButtonProps), t.ptm("closeButton"))), [z(t.$slots, "closeicon", {}, function() {
        return [t.closeIcon ? (p(), v("i", y({
          key: 0,
          class: [t.cx("closeIcon"), t.closeIcon],
          "data-p": r.dataP
        }, t.ptm("closeIcon")), null, 16, oi)) : (p(), P(l, y({
          key: 1,
          class: [t.cx("closeIcon"), t.closeIcon],
          "data-p": r.dataP
        }, t.ptm("closeIcon")), null, 16, ["class", "data-p"]))];
      })], 16, ni)), [[u]]) : T("", !0)], 16, ei))], 16)], 16, Qr)) : T("", !0)];
    }),
    _: 3
  }, 16);
}
Kt.render = ri;
const ii = { class: "flex flex-col gap-1" }, ai = ["for"], si = {
  key: 1,
  class: "text-sm text-gray-500"
}, li = { class: "mt-1" }, tt = /* @__PURE__ */ N({
  __name: "FormField",
  props: {
    id: {},
    label: {},
    helper: {},
    error: {}
  },
  setup(t) {
    return (e, n) => (p(), v("div", ii, [
      t.label ? (p(), v("label", {
        key: 0,
        for: t.id,
        class: "font-medium"
      }, R(t.label), 9, ai)) : T("", !0),
      t.helper ? (p(), v("p", si, R(t.helper), 1)) : T("", !0),
      g("div", li, [
        z(e.$slots, "default")
      ]),
      t.error ? (p(), P(O(Kt), {
        key: 2,
        "data-test": `form-field-error-${t.id}`,
        class: "mt-1",
        severity: "error",
        size: "small",
        variant: "simple"
      }, {
        default: w(() => [
          q(R(t.error), 1)
        ]),
        _: 1
      }, 8, ["data-test"])) : T("", !0)
    ]));
  }
}), ui = "Please enter a valid email address", Wt = /* @__PURE__ */ N({
  __name: "EmailInput",
  props: /* @__PURE__ */ Ae({
    isSubmitClicked: { type: Boolean },
    labelText: {}
  }, {
    email: { required: !0 },
    emailModifiers: {}
  }),
  emits: /* @__PURE__ */ Ae(["validity-changed"], ["update:email"]),
  setup(t, { emit: e }) {
    function n(a) {
      return Ct.string().email().safeParse(a).success;
    }
    const o = It(t, "email"), i = t, r = e;
    re(() => {
      r("validity-changed", n(o.value));
    });
    const l = G(() => i.isSubmitClicked && !n(o.value));
    function u(a) {
      const s = a ?? "";
      o.value = s, r("validity-changed", n(s));
    }
    return (a, s) => (p(), P(tt, {
      id: "email",
      label: t.labelText,
      error: l.value ? ui : void 0
    }, {
      default: w(() => [
        L(O(Ne), {
          id: "email",
          modelValue: o.value,
          invalid: l.value,
          placeholder: "Email",
          required: "",
          class: "w-full",
          "onUpdate:modelValue": u
        }, null, 8, ["modelValue", "invalid"])
      ]),
      _: 1
    }, 8, ["label", "error"]));
  }
}), di = { class: "flex flex-col items-center gap-4 text-center" }, ci = { class: "flex flex-col gap-2" }, Ut = /* @__PURE__ */ N({
  __name: "ActionConfirmMsg",
  props: {
    iconClass: {}
  },
  setup(t) {
    return (e, n) => (p(), v("div", di, [
      g("i", {
        class: J([t.iconClass, "border-2 p-4 rounded-full text-primary"]),
        style: { "font-size": "1.2rem !important" }
      }, null, 2),
      g("div", ci, [
        z(e.$slots, "default")
      ])
    ]));
  }
}), pi = { key: 0 }, mi = { class: "text-primary break-all px-2" }, fi = "No changes have been made", gi = "The new email address you provided is the same as the current one. Please enter a different email address.", hi = "Email updated successfully", bi = "We have updated your email address successfully.", vi = /* @__PURE__ */ N({
  __name: "ChangeEmailRequest",
  props: {
    apiDomain: {}
  },
  emits: ["changeEmailRequestError", "changeEmailActionSuccess"],
  setup(t, { emit: e }) {
    const n = t, o = e, i = x("mytestemail1235667@gmail.com"), r = x(!1), l = x(!1), u = x(!1), a = x(!1);
    async function s() {
      if (a.value = !0, !!u.value)
        try {
          r.value = !0, (await xe.requestEmailChange(i.value, n.apiDomain)).message === "Email updated" ? o("changeEmailActionSuccess", {
            type: "email_already_verified",
            severity: "success",
            summary: hi,
            detail: bi
          }) : l.value = !0;
        } catch (d) {
          l.value = !1, d instanceof X ? d.data.error === "EMAIL_SAME_AS_CURRENT" && o("changeEmailRequestError", {
            type: "email_same_as_current",
            severity: "info",
            summary: fi,
            detail: gi,
            json: d
          }) : o("changeEmailRequestError", {
            type: "unexpected",
            severity: "error",
            summary: j.error.somethingWentWrong.summary,
            detail: j.error.somethingWentWrong.detail,
            json: V(d)
          });
        } finally {
          r.value = !1;
        }
    }
    return (d, c) => (p(), P(O(ie), null, {
      title: w(() => [...c[2] || (c[2] = [
        g("h2", { class: "h2" }, "Change your email", -1)
      ])]),
      content: w(() => [
        l.value ? (p(), P(Ut, {
          key: 1,
          iconClass: "pi pi-envelope"
        }, {
          default: w(() => [
            g("p", null, [
              c[5] || (c[5] = g("span", { class: "block text-wrap" }, "We have a verification email to:", -1)),
              g("strong", mi, R(i.value), 1),
              c[6] || (c[6] = g("span", { class: "block" }, " Please check the inbox of your new email and click on the verification link to change your email. ", -1))
            ])
          ]),
          _: 1
        })) : (p(), v("div", pi, [
          g("form", {
            class: "vstack-form",
            onSubmit: Me(s, ["prevent"])
          }, [
            c[4] || (c[4] = g("p", null, " You will receive an email to your old email to verify your new email address. Please click on the email link to update your email. ", -1)),
            L(Wt, {
              email: i.value,
              "onUpdate:email": c[0] || (c[0] = (m) => i.value = m),
              isSubmitClicked: a.value,
              labelText: "Enter your new email",
              onValidityChanged: c[1] || (c[1] = (m) => {
                u.value = m;
              })
            }, null, 8, ["email", "isSubmitClicked"]),
            L(O(K), {
              type: "submit",
              loading: r.value
            }, {
              default: w(() => [...c[3] || (c[3] = [
                q("Change email", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ], 32)
        ]))
      ]),
      _: 1
    }));
  }
}), yi = {
  key: 0,
  class: "vstack-form"
}, ki = /* @__PURE__ */ N({
  __name: "DeleteAccountRequest",
  props: {
    apiDomain: {}
  },
  emits: ["deleteAccountRequestError", "deleteAccountRequestSuccess"],
  setup(t, { emit: e }) {
    const n = t, o = e, i = x(!1), r = x(!1);
    async function l() {
      try {
        r.value = !0, await xe.requestDelete(n.apiDomain), i.value = !0, o("deleteAccountRequestSuccess");
      } catch (u) {
        i.value = !1, o("deleteAccountRequestError", {
          type: "unexpected",
          severity: "error",
          summary: j.error.somethingWentWrong.summary,
          detail: j.error.somethingWentWrong.detail,
          json: V(u)
        });
      } finally {
        r.value = !1;
      }
    }
    return (u, a) => (p(), P(O(ie), null, {
      title: w(() => [...a[0] || (a[0] = [
        g("h2", { class: "h2" }, "Delete your account", -1)
      ])]),
      content: w(() => [
        i.value ? (p(), P(Ut, {
          key: 1,
          iconClass: "pi pi-envelope"
        }, {
          default: w(() => [...a[3] || (a[3] = [
            g("p", null, " We have sent you an email to verify your account deletion. Please check your inbox and click on the verification link. ", -1)
          ])]),
          _: 1
        })) : (p(), v("div", yi, [
          a[2] || (a[2] = g("p", null, " You will receive an email to verify your account deletion. Please click on the email link to delete your account. ", -1)),
          L(O(K), {
            type: "button",
            isLoading: r.value,
            onClick: l
          }, {
            default: w(() => [...a[1] || (a[1] = [
              q("Send deletion email", -1)
            ])]),
            _: 1
          }, 8, ["isLoading"])
        ]))
      ]),
      _: 1
    }));
  }
});
var Ii = `
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
`, $i = {
  root: {
    position: "relative"
  }
}, Si = {
  root: function(e) {
    var n = e.props;
    return ["p-skeleton p-component", {
      "p-skeleton-circle": n.shape === "circle",
      "p-skeleton-animation-none": n.animation === "none"
    }];
  }
}, wi = D.extend({
  name: "skeleton",
  style: Ii,
  classes: Si,
  inlineStyles: $i
}), xi = {
  name: "BaseSkeleton",
  extends: Y,
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
  style: wi,
  provide: function() {
    return {
      $pcSkeleton: this,
      $parentInstance: this
    };
  }
};
function we(t) {
  "@babel/helpers - typeof";
  return we = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, we(t);
}
function _i(t, e, n) {
  return (e = Pi(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Pi(t) {
  var e = Ci(t, "string");
  return we(e) == "symbol" ? e : e + "";
}
function Ci(t, e) {
  if (we(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (we(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Ye = {
  name: "Skeleton",
  extends: xi,
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
      return oe(_i({}, this.shape, this.shape));
    }
  }
}, Ti = ["data-p"];
function Ei(t, e, n, o, i, r) {
  return p(), v("div", y({
    class: t.cx("root"),
    style: [t.sx("root"), r.containerStyle],
    "aria-hidden": "true"
  }, t.ptmi("root"), {
    "data-p": r.dataP
  }), null, 16, Ti);
}
Ye.render = Ei;
const Li = {
  key: 0,
  class: "vstack-sm"
}, Ai = {
  key: 0,
  class: "flex flex-col sm:flex-row gap-0 sm:gap-2"
}, Oi = { class: "text-primary break-all" }, Mi = {
  key: 1,
  class: "flex flex-col sm:flex-row gap-0 sm:gap-2"
}, zi = { class: "text-primary break-all sm:pl-2" }, ji = {
  key: 1,
  class: "vstack-sm"
}, Di = /* @__PURE__ */ N({
  __name: "UserAccountInfo",
  props: {
    apiDomain: {},
    updatedEmailDate: {}
  },
  emits: ["getUserIdError", "getUserEmailError"],
  setup(t, { emit: e }) {
    const n = e, o = x(""), i = x(""), r = x(!1), l = t;
    re(async () => {
      await a(), await u();
    }), $t(
      () => l.updatedEmailDate,
      async () => {
        await u();
      }
    );
    async function u() {
      try {
        r.value = !0;
        const { data: s } = await xe.getEmail(l.apiDomain);
        i.value = s.email;
      } catch (s) {
        n("getUserEmailError", {
          type: "unexpected",
          severity: "error",
          summary: j.error.somethingWentWrong.summary,
          detail: j.error.somethingWentWrong.detail,
          json: V(s)
        });
      } finally {
        r.value = !1;
      }
    }
    async function a() {
      try {
        r.value = !0, o.value = await Xe.getUserId();
      } catch (s) {
        n("getUserIdError", {
          type: "unexpected",
          severity: "error",
          summary: j.error.somethingWentWrong.summary,
          detail: j.error.somethingWentWrong.detail,
          json: V(s)
        });
      } finally {
        r.value = !1;
      }
    }
    return (s, d) => !r.value && (o.value || i.value) || r.value ? (p(), P(O(ie), { key: 0 }, {
      title: w(() => [...d[0] || (d[0] = [
        g("h2", { class: "h2" }, "Your details", -1)
      ])]),
      content: w(() => [
        r.value ? (p(), v("div", ji, [
          L(O(Ye), { height: "2rem" }),
          L(O(Ye), { height: "2rem" })
        ])) : (p(), v("div", Li, [
          o.value ? (p(), v("div", Ai, [
            d[1] || (d[1] = g("div", { class: "block sm:flex font-bold" }, [
              g("span", null, "ID"),
              g("span", { class: "hidden sm:block" }, ":")
            ], -1)),
            g("div", null, [
              g("code", Oi, R(o.value), 1)
            ])
          ])) : T("", !0),
          i.value ? (p(), v("div", Mi, [
            d[2] || (d[2] = g("div", { class: "block sm:flex font-bold" }, [
              g("span", null, "Email"),
              g("span", { class: "hidden sm:block" }, ":")
            ], -1)),
            g("div", null, [
              g("strong", zi, R(i.value), 1)
            ])
          ])) : T("", !0)
        ]))
      ]),
      _: 1
    })) : T("", !0);
  }
}), Vi = { key: 0 }, Ni = { key: 1 }, Fi = { key: 2 }, Ri = {
  key: 0,
  class: "max-w-xl"
}, Bi = { class: "vstack-page" }, wa = /* @__PURE__ */ N({
  __name: "Account",
  props: {
    deleteToken: {},
    updateEmailToken: {}
  },
  emits: [
    "deleteAccountRequestError",
    "deleteAccountRequestSuccess",
    "changeEmailRequestError",
    "changeEmailRequestSuccess",
    "changeEmailActionError",
    "changeEmailActionSuccess",
    "deleteAccountError",
    "deleteAccountSuccess"
  ],
  setup(t, { emit: e }) {
    const n = ze(je), o = e, i = t, r = x(null), l = x(!1), { updateEmail: u } = Pr(n), { deleteAccount: a } = _r(n);
    re(async () => {
      i.updateEmailToken ? (l.value = !0, await u(
        i.updateEmailToken,
        (d) => o("changeEmailActionSuccess", d),
        (d) => o("changeEmailActionError", d)
      )) : i.deleteToken && (l.value = !0, await a(
        i.deleteToken,
        () => o("deleteAccountSuccess"),
        (d) => o("deleteAccountError", d)
      ));
    });
    function s(d) {
      r.value = /* @__PURE__ */ new Date(), o("changeEmailActionSuccess", d);
    }
    return (d, c) => (p(), P(Ve, { isLoading: l.value }, {
      loadingText: w(() => [
        t.deleteToken ? (p(), v("span", Vi, "Deleting your account...")) : t.updateEmailToken ? (p(), v("span", Ni, "Updating your email...")) : (p(), v("span", Fi, "Loading your account..."))
      ]),
      default: w(() => [
        !t.deleteToken && !t.updateEmailToken ? (p(), v("div", Ri, [
          z(d.$slots, "default", { id: "header" }, () => [
            c[3] || (c[3] = g("h1", { class: "h1 text-color" }, "Your account", -1))
          ]),
          g("div", Bi, [
            L(Di, {
              class: "card-p-sm",
              updatedEmailDate: r.value,
              apiDomain: O(n)
            }, null, 8, ["updatedEmailDate", "apiDomain"]),
            L(vi, {
              class: "card-p-sm",
              apiDomain: O(n),
              onChangeEmailRequestError: c[0] || (c[0] = (...m) => d.$emit("changeEmailRequestError", ...m)),
              onChangeEmailActionSuccess: s
            }, null, 8, ["apiDomain"]),
            L(ki, {
              class: "card-p-sm",
              apiDomain: O(n),
              onDeleteAccountRequestError: c[1] || (c[1] = (...m) => d.$emit("deleteAccountRequestError", ...m)),
              onDeleteAccountRequestSuccess: c[2] || (c[2] = (...m) => d.$emit("deleteAccountRequestSuccess", ...m))
            }, null, 8, ["apiDomain"])
          ])
        ])) : T("", !0)
      ]),
      _: 3
    }, 8, ["isLoading"]));
  }
});
async function Ki(t) {
  const e = await fetch(`${t}/profile/config`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include"
  }), n = await e.json();
  if (!e.ok)
    throw new X("Failed to get profile configuration", e, n);
  return n;
}
async function Wi(t) {
  const e = await fetch(`${t}/user/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include"
  }), n = await e.json();
  if (!e.ok)
    throw new X("Failed to get profile", e, n);
  return n;
}
async function Ui(t, e) {
  const n = await fetch(`${e}/user/profile`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify({ ...t })
  }), o = await n.json();
  if (!n.ok)
    throw new X("Failed to update profile", n, o);
  return o;
}
const Le = { getProfile: Wi, updateProfile: Ui, getProfileConfig: Ki }, qi = { class: "vstack-form" }, Hi = "Name can be letters only, at least 2 characters and max 50 characters", vt = /* @__PURE__ */ N({
  __name: "NameInput",
  props: /* @__PURE__ */ Ae({
    isSubmitClicked: { type: Boolean },
    nameType: {}
  }, {
    name: { required: !0 },
    nameModifiers: {}
  }),
  emits: /* @__PURE__ */ Ae(["validity-changed"], ["update:name"]),
  setup(t, { emit: e }) {
    const n = e, o = t, i = It(t, "name");
    re(() => {
      n("validity-changed", u());
    });
    const r = G(() => o.isSubmitClicked && !u()), l = G(() => o.nameType === "first" ? "First name" : "Last name");
    function u() {
      return Ct.string().min(2).max(50).safeParse(i.value).success;
    }
    function a(s) {
      const d = s ?? "";
      i.value = d, n("validity-changed", u());
    }
    return (s, d) => (p(), v("div", qi, [
      L(tt, {
        id: "profile_name",
        label: l.value,
        error: r.value ? Hi : ""
      }, {
        default: w(() => [
          L(O(Ne), {
            id: "profile_name",
            modelValue: i.value,
            invalid: r.value,
            placeholder: l.value,
            required: "",
            class: "w-full",
            "onUpdate:modelValue": a
          }, null, 8, ["modelValue", "invalid", "placeholder"])
        ]),
        _: 1
      }, 8, ["label", "error"])
    ]));
  }
}), xa = /* @__PURE__ */ N({
  __name: "Profile",
  emits: ["profileLoadError", "profileSubmitSuccess", "profileSubmitError"],
  setup(t, { emit: e }) {
    const n = e, o = ze(je), i = x(null), r = x(!1), l = x(!1), u = x(!1), a = x(null), s = x(!1), d = x(!1);
    re(async () => {
      await f();
    });
    const c = G(() => {
      const $ = { isActive: !1, isRequired: !1 }, k = i.value?.find((M) => M.category === "name");
      if (!k) return $;
      const E = k.fields.find((M) => M.type === "first_name");
      return E && ($.isActive = !0, $.isRequired = E.isRequired), $;
    }), m = G(() => {
      const $ = { isActive: !1, isRequired: !1 }, k = i.value?.find((M) => M.category === "name");
      if (!k) return $;
      const E = k.fields.find((M) => M.type === "last_name");
      return E && ($.isActive = !0, $.isRequired = E.isRequired), $;
    });
    async function f() {
      try {
        r.value = !0;
        const { data: $ } = await Le.getProfileConfig(o), { data: k } = await Le.getProfile(o);
        i.value = { ...$ }, a.value = { ...k.fields };
      } catch ($) {
        n("profileLoadError", {
          type: "unexpected",
          severity: "error",
          summary: j.error.somethingWentWrong.summary,
          detail: j.error.somethingWentWrong.detail,
          json: V($)
        });
      } finally {
        r.value = !1;
      }
    }
    async function h() {
      return !(c.value.isActive && !s.value || m.value.isActive && !d.value);
    }
    async function b() {
      u.value = !0, l.value = !0;
      try {
        if (!h())
          return;
        await Le.updateProfile(a.value, o), n("profileSubmitSuccess");
      } catch ($) {
        n("profileSubmitError", {
          type: "unexpected",
          severity: "error",
          summary: j.error.somethingWentWrong.summary,
          detail: j.error.somethingWentWrong.detail,
          json: V($)
        });
      } finally {
        u.value = !1;
      }
    }
    return ($, k) => (p(), P(Ve, { isLoading: r.value }, {
      default: w(() => [
        i.value && a.value ? (p(), P(O(ie), {
          key: 0,
          class: "max-w-xl card-p-lg w-full"
        }, {
          title: w(() => [...k[5] || (k[5] = [
            g("h1", { class: "h1" }, "Profile", -1)
          ])]),
          content: w(() => [
            g("section", null, [
              g("form", {
                class: "vstack-form",
                onSubmit: k[4] || (k[4] = Me(() => {
                }, ["prevent"]))
              }, [
                k[6] || (k[6] = g("p", null, " We need a few basic details for essential purposes—like personalising emails with your name. ", -1)),
                c.value.isActive ? (p(), P(vt, {
                  key: 0,
                  name: a.value.firstName,
                  "onUpdate:name": k[0] || (k[0] = (E) => a.value.firstName = E),
                  nameType: "first",
                  isSubmitClicked: l.value,
                  onValidityChanged: k[1] || (k[1] = (E) => {
                    s.value = E;
                  })
                }, null, 8, ["name", "isSubmitClicked"])) : T("", !0),
                m.value.isActive ? (p(), P(vt, {
                  key: 1,
                  name: a.value.lastName,
                  "onUpdate:name": k[2] || (k[2] = (E) => a.value.lastName = E),
                  nameType: "last",
                  isSubmitClicked: l.value,
                  onValidityChanged: k[3] || (k[3] = (E) => {
                    d.value = E;
                  })
                }, null, 8, ["name", "isSubmitClicked"])) : T("", !0),
                L(O(K), {
                  label: "Save profile",
                  submit: "submit",
                  loading: u.value,
                  onClick: b
                }, null, 8, ["loading"])
              ], 32)
            ])
          ]),
          _: 1
        })) : T("", !0)
      ]),
      _: 1
    }, 8, ["isLoading"]));
  }
}), _a = /* @__PURE__ */ N({
  __name: "ProfileCheck",
  emits: ["profileCheckError", "profileIsComplete", "profileNotComplete"],
  setup(t, { emit: e }) {
    const n = Tt(), o = Et(), i = e, r = x(!0), l = ze(je);
    re(async () => {
      u();
    });
    async function u() {
      try {
        const { data: a } = await Le.getProfile(l);
        if (a.isCompleted) {
          const s = cn(n.query);
          s ? o.push(s) : o.push({ name: "home" });
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
      } catch (a) {
        console.error("Error checking profile completion: ", a), i("profileCheckError");
      }
    }
    return (a, s) => (p(), P(Ve, {
      isLoading: r.value,
      loadingText: "Redirecting, do not close the window."
    }, null, 8, ["isLoading"]));
  }
}), Gi = { class: "gsi-material-button-content-wrapper" }, Yi = { class: "gsi-material-button-icon" }, Zi = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  style: { display: "block" }
}, Ji = { class: "gsi-material-button-contents" }, Xi = { style: { display: "none" } }, Qi = /* @__PURE__ */ N({
  __name: "GoogleAuthIcon",
  props: {
    authType: { default: "Sign in" },
    apiDomain: {}
  },
  emits: ["googleSignInError", "googleSignInSuccess"],
  setup(t, { emit: e }) {
    const n = e, o = t;
    async function i() {
      const r = "Failed to sign in with Google", l = "Please try again later.";
      try {
        const u = await Pt.getAuthorisationURLWithQueryParamsAndSetState({
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
          summary: r,
          detail: l,
          json: u
        });
      }
    }
    return (r, l) => (p(), v("button", {
      class: "gsi-material-button",
      onClick: i
    }, [
      l[1] || (l[1] = g("div", { class: "gsi-material-button-state" }, null, -1)),
      g("div", Gi, [
        g("div", Yi, [
          (p(), v("svg", Zi, [...l[0] || (l[0] = [
            yt('<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" data-v-a7255a5b></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" data-v-a7255a5b></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" data-v-a7255a5b></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" data-v-a7255a5b></path><path fill="none" d="M0 0h48v48H0z" data-v-a7255a5b></path>', 5)
          ])]))
        ]),
        g("span", Ji, R(t.authType) + " with Google", 1),
        g("span", Xi, R(t.authType) + " with Google", 1)
      ])
    ]));
  }
}), ea = /* @__PURE__ */ De(Qi, [["__scopeId", "data-v-a7255a5b"]]), ta = { class: "h1" }, na = /* @__PURE__ */ N({
  __name: "SignInUpForm",
  props: {
    pageAuthType: {},
    apiDomain: {}
  },
  emits: ["sendCodeSuccess", "signupStartError", "googleSignInError"],
  setup(t, { emit: e }) {
    const n = e, o = x(!1), i = x("mytestemail1235667@gmail.com"), r = x(!1), l = x(!1);
    async function u() {
      if (l.value = !0, !!r.value)
        try {
          o.value = !0;
          const a = await ee.createCode({
            email: i.value,
            shouldTryLinkingWithSessionUser: !1,
            // If true, SuperTokens will attempt to link the passwordless code to an existing session user
            userContext: {}
            // Optionally include user context
          });
          console.log("Create code response: ", a), a.status === "SIGN_IN_UP_NOT_ALLOWED" ? n("signupStartError", {
            type: "sign_in_up_not_allowed",
            severity: "error",
            summary: j.error.somethingWentWrong.summary,
            detail: j.error.somethingWentWrong.detail,
            json: {
              status: a.status,
              reason: a.reason,
              responseDetails: V(a.fetchResponse)
            }
          }) : n("sendCodeSuccess", !0);
        } catch (a) {
          n("signupStartError", {
            type: "unexpected",
            severity: "error",
            summary: j.error.somethingWentWrong.summary,
            detail: j.error.somethingWentWrong.detail,
            json: V(a)
          });
        } finally {
          o.value = !1;
        }
    }
    return (a, s) => (p(), P(O(ie), { class: "max-w-xl p-12 w-full" }, {
      title: w(() => [
        g("h1", ta, R(t.pageAuthType), 1)
      ]),
      content: w(() => [
        g("section", null, [
          L(ea, {
            apiDomain: t.apiDomain,
            authType: t.pageAuthType,
            onGoogleSignInError: s[0] || (s[0] = (...d) => a.$emit("googleSignInError", ...d))
          }, null, 8, ["apiDomain", "authType"]),
          s[5] || (s[5] = g("div", { class: "flex items-center my-10" }, [
            g("hr", { class: "flex-1 border-gray-300" }),
            g("span", { class: "px-4 text-gray-500 uppercase" }, "Or"),
            g("hr", { class: "flex-1 border-gray-300" })
          ], -1)),
          g("form", {
            class: "vstack-form",
            onSubmit: s[3] || (s[3] = Me(() => {
            }, ["prevent"]))
          }, [
            s[4] || (s[4] = g("p", { class: "mb-2" }, " This website offers a Passwordless Sign-In option. Instead of remembering a password, you'll receive a one-time code via email each time you sign in. ", -1)),
            L(Wt, {
              email: i.value,
              "onUpdate:email": s[1] || (s[1] = (d) => i.value = d),
              isSubmitClicked: l.value,
              onValidityChanged: s[2] || (s[2] = (d) => {
                console.log("val is now", d), r.value = d;
              })
            }, null, 8, ["email", "isSubmitClicked"]),
            L(O(K), {
              label: t.pageAuthType,
              submit: "submit",
              loading: o.value,
              onClick: u
            }, null, 8, ["label", "loading"])
          ], 32)
        ])
      ]),
      _: 1
    }));
  }
});
var oa = `
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
`, ra = {
  root: "p-inputotp p-component",
  pcInputText: "p-inputotp-input"
}, ia = D.extend({
  name: "inputotp",
  style: oa,
  classes: ra
}), aa = {
  name: "BaseInputOtp",
  extends: Rt,
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
  style: ia,
  provide: function() {
    return {
      $pcInputOtp: this,
      $parentInstance: this
    };
  }
}, qt = {
  name: "InputOtp",
  extends: aa,
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
        input: function(i) {
          return n.onInput(i, e);
        },
        keydown: function(i) {
          return n.onKeyDown(i);
        },
        focus: function(i) {
          return n.onFocus(i);
        },
        blur: function(i) {
          return n.onBlur(i);
        },
        paste: function(i) {
          return n.onPaste(i);
        }
      };
    },
    onInput: function(e, n) {
      this.tokens[n] = e.target.value, this.updateModel(e), e.inputType === "deleteContentBackward" ? this.moveToPrev(e) : (e.inputType === "insertText" || e.inputType === "deleteContentForward" || _t() && e instanceof CustomEvent) && this.moveToNext(e);
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
            var n = e.target, o = n.selectionStart !== n.selectionEnd, i = this.tokens.join("").length >= this.length, r = this.integerOnly ? /^[0-9]$/.test(e.key) : !0;
            (!r || i && e.key !== "Delete" && !o) && e.preventDefault();
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
    OtpInputText: Ne
  }
};
function sa(t, e, n, o, i, r) {
  var l = H("OtpInputText");
  return p(), v("div", y({
    class: t.cx("root")
  }, t.ptmi("root")), [(p(!0), v(Ce, null, kt(t.length, function(u) {
    return z(t.$slots, "default", {
      key: u,
      events: r.getTemplateEvents(u - 1),
      attrs: r.getTemplateAttrs(u - 1),
      index: u
    }, function() {
      return [L(l, {
        value: i.tokens[u - 1],
        type: r.inputType,
        class: J(t.cx("pcInputText")),
        name: t.$formName,
        inputmode: r.inputMode,
        variant: t.variant,
        readonly: t.readonly,
        disabled: t.disabled,
        size: t.size,
        invalid: t.invalid,
        tabindex: t.tabindex,
        unstyled: t.unstyled,
        onInput: function(s) {
          return r.onInput(s, u - 1);
        },
        onFocus: e[0] || (e[0] = function(a) {
          return r.onFocus(a);
        }),
        onBlur: e[1] || (e[1] = function(a) {
          return r.onBlur(a);
        }),
        onPaste: e[2] || (e[2] = function(a) {
          return r.onPaste(a);
        }),
        onKeydown: e[3] || (e[3] = function(a) {
          return r.onKeyDown(a);
        }),
        onClick: e[4] || (e[4] = function(a) {
          return r.onClick(a);
        }),
        pt: t.ptm("pcInputText")
      }, null, 8, ["value", "type", "class", "name", "inputmode", "variant", "readonly", "disabled", "size", "invalid", "tabindex", "unstyled", "onInput", "pt"])];
    });
  }), 128))], 16);
}
qt.render = sa;
const la = { class: "px-4 py-8 sm:p-8" }, ua = { class: "flex flex-col items-stretch gap-4 sm:flex-row sm:items-start" }, da = { class: "vstack-form" }, ca = { class: "vstack-form" }, pa = /* @__PURE__ */ N({
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
    const n = e, o = x(""), i = x(null), r = x(0), l = x(0), u = x(!1), a = x(!1);
    $t(o, () => {
      i.value !== null && (i.value = null);
    });
    const s = G(() => o.value.length < 6 ? "Please enter a valid code length" : l.value > 0 && r.value > 0 && r.value < l.value ? `Invalid code. You have ${l.value - r.value} attempts left.` : "");
    async function d() {
      const f = "Unable to process your OTP code", h = "Please try again later.";
      if (i.value = !0, o.value.length < 6) {
        i.value = !1;
        return;
      }
      try {
        u.value = !0;
        const b = await ee.consumeCode({ userInputCode: o.value });
        b.status === "OK" ? (await ee.clearLoginAttemptInfo(), b.createdNewRecipeUser && b.user.loginMethods.length === 1 ? console.info("New user signed up successfully") : console.info("Existing user signed in successfully"), i.value = !0, n("verificationCodeSuccess", {
          summary: "Code verified",
          detail: "You have successfully signed in."
        })) : (console.error("Submit code: ", b), b.status === "INCORRECT_USER_INPUT_CODE_ERROR" ? (r.value = b.failedCodeInputAttemptCount, l.value = b.maximumCodeInputAttempts, i.value = !1) : (await ee.clearLoginAttemptInfo(), n("verificationCodeError", {
          type: "input_code_invalid",
          severity: "error",
          summary: f,
          detail: h,
          json: {
            status: b.status,
            responseDetails: V(b.fetchResponse)
          }
        })));
      } catch (b) {
        n("verificationCodeError", {
          type: "unexpected",
          severity: "error",
          summary: j.error.somethingWentWrong.summary,
          detail: j.error.somethingWentWrong.detail,
          json: V(b)
        });
      } finally {
        u.value = !1;
      }
    }
    async function c() {
      const f = "Resend OTP failed", h = "Please try again later.";
      try {
        a.value = !0;
        const b = await ee.resendCode();
        console.log("resend code response: ", b), b.status === "RESTART_FLOW_ERROR" ? (await ee.clearLoginAttemptInfo(), n("resendCodeError", {
          type: "restart_flow_error",
          severity: "error",
          summary: f,
          detail: h,
          json: {
            status: b.status,
            responseDetails: V(b.fetchResponse)
          }
        })) : n("resendCodeSuccess", {
          summary: "Code re-sent",
          detail: "Please check your email for the new code."
        });
      } catch (b) {
        n("resendCodeError", {
          type: "unexpected",
          severity: "error",
          summary: j.error.somethingWentWrong.summary,
          detail: j.error.somethingWentWrong.detail,
          json: V(b)
        });
      } finally {
        a.value = !1;
      }
    }
    function m() {
      ee.clearLoginAttemptInfo(), n("restartFlow");
    }
    return (f, h) => (p(), v("div", la, [
      L(O(ie), { class: "max-w-xl p-0 sm:p-12 w-full mx-auto" }, {
        title: w(() => [
          g("div", ua, [
            L(O(K), {
              class: "me-4 sm:me-0",
              type: "button",
              variant: "outlined",
              icon: "pi pi-arrow-left",
              "aria-label": "Start over",
              onClick: m
            }),
            h[2] || (h[2] = g("h1", { class: "h1 mt-0 sm:mt-0" }, "Input validation code", -1))
          ])
        ]),
        content: w(() => [
          g("form", {
            class: "vstack-lg",
            onSubmit: h[1] || (h[1] = Me(() => {
            }, ["prevent"]))
          }, [
            g("div", da, [
              h[4] || (h[4] = g("p", null, " To finish the signup process, enter the code that was emailed to you. Note that the code is only valid for 10 minutes. ", -1)),
              L(tt, {
                id: "magic-code-input",
                error: i.value === !1 ? s.value : ""
              }, {
                default: w(() => [
                  L(O(qt), {
                    id: "magic-code-input",
                    modelValue: o.value,
                    "onUpdate:modelValue": h[0] || (h[0] = (b) => o.value = b),
                    length: 6,
                    class: "w-50",
                    type: "text",
                    placeholder: "Input email code",
                    required: "",
                    invalid: i.value === !1
                  }, null, 8, ["modelValue", "invalid"])
                ]),
                _: 1
              }, 8, ["error"]),
              L(O(K), {
                class: "w-fit",
                type: "submit",
                loading: u.value,
                onClick: d
              }, {
                default: w(() => [...h[3] || (h[3] = [
                  q(" Submit code ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])
            ]),
            g("div", ca, [
              h[6] || (h[6] = g("p", null, "If you didnt receive an email, please check your Junk folder or resend another code.", -1)),
              L(O(K), {
                class: "w-fit",
                type: "button",
                loading: a.value,
                onClick: c
              }, {
                default: w(() => [...h[5] || (h[5] = [
                  q(" Resend code ", -1)
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
}), Pa = /* @__PURE__ */ N({
  __name: "SignInUp",
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
    const n = e, o = Tt(), i = Et(), r = x(!0), l = x(!1), u = ze(je);
    re(async () => {
      l.value = !!await s(), i.currentRoute.value.query.thirdPartyId === "google" && await d();
    });
    const a = G(() => o.name === "signup" ? "Sign up" : "Sign in");
    async function s() {
      r.value = !0;
      try {
        const f = await ee.getLoginAttemptInfo();
        return f && console.info("Code already sent: ", f), f !== void 0;
      } catch (f) {
        n("checkMagicLinkSentError", {
          type: "unexpected",
          severity: "error",
          summary: j.error.somethingWentWrong.summary,
          detail: j.error.somethingWentWrong.detail,
          json: V(f)
        });
      } finally {
        r.value = !1;
      }
    }
    async function d() {
      const f = "Failed to sign in with Google", h = "Please try again later or try another form of login.";
      try {
        r.value = !0;
        const b = await Pt.signInAndUp();
        b.status === "OK" ? (console.log("handleGoogleCallback> ", b.user), b.createdNewRecipeUser && b.user.loginMethods.length === 1 ? console.log("New user signed up successfully") : console.log("Existing user signed in successfully"), n("googleCallbackSuccess")) : b.status === "SIGN_IN_UP_NOT_ALLOWED" ? n("googleCallbackError", {
          type: "sign_in_up_not_allowed",
          severity: "error",
          summary: f,
          detail: h,
          json: {
            status: b.status,
            reason: b.reason,
            responseDetails: V(b)
          }
        }) : n("googleCallbackError", {
          type: "no_user_email",
          severity: "error",
          summary: f,
          detail: h,
          json: { status: b.status, responseDetails: V(b) }
        });
      } catch (b) {
        n("googleCallbackError", {
          type: "unexpected",
          severity: "error",
          summary: j.error.somethingWentWrong.summary,
          detail: j.error.somethingWentWrong.detail,
          json: V(b)
        });
      } finally {
        r.value = !1;
      }
    }
    function c(f) {
      f.type === "input_code_invalid" && (l.value = !1), n("verificationCodeError", f);
    }
    function m(f) {
      f.type === "restart_flow_error" && (l.value = !1), n("resendCodeError", f);
    }
    return (f, h) => (p(), P(Ve, { isLoading: r.value }, {
      default: w(() => [
        l.value ? (p(), P(pa, {
          key: 1,
          pageAuthType: a.value,
          onVerificationCodeSuccess: h[3] || (h[3] = (...b) => f.$emit("verificationCodeSuccess", ...b)),
          onVerificationCodeError: c,
          onResendCodeSuccess: h[4] || (h[4] = (...b) => f.$emit("resendCodeSuccess", ...b)),
          onResendCodeError: m,
          onRestartFlow: h[5] || (h[5] = () => l.value = !1)
        }, null, 8, ["pageAuthType"])) : (p(), P(na, {
          key: 0,
          pageAuthType: a.value,
          apiDomain: O(u),
          onSendCodeSuccess: h[0] || (h[0] = () => l.value = !0),
          onSignupStartError: h[1] || (h[1] = (b) => f.$emit("signupStartError", b)),
          onGoogleSignInError: h[2] || (h[2] = (b) => f.$emit("googleSignInError", b))
        }, null, 8, ["pageAuthType", "apiDomain"]))
      ]),
      _: 1
    }, 8, ["isLoading"]));
  }
});
export {
  wa as Account,
  $a as AppErrorInfo,
  tt as FormField,
  Sa as PageInfiniteLoader,
  Ve as PageLoader,
  xa as Profile,
  _a as ProfileCheck,
  Pa as SignInUp,
  Ia as SiteNavigation,
  Lo as ThemeToggle
};
