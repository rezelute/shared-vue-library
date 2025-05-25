import { ref as j, readonly as po, getCurrentInstance as zt, onMounted as je, nextTick as fo, watch as hn, useId as ho, mergeProps as b, createElementBlock as y, openBlock as f, createElementVNode as v, renderSlot as V, createTextVNode as Q, toDisplayString as R, resolveComponent as X, resolveDirective as dt, withDirectives as De, createBlock as T, resolveDynamicComponent as le, withCtx as L, createCommentVNode as P, normalizeClass as Y, defineComponent as B, createVNode as O, unref as $, computed as Ee, Fragment as be, renderList as ct, normalizeStyle as bo, normalizeProps as go, guardReactiveProps as vo, Teleport as yo, Transition as xt, vShow as $o, mergeModels as Dt, useModel as Io, withModifiers as _t, isRef as Pt, createStaticVNode as ko } from "vue";
import { S as Ct, t as bn, p as fe } from "../index-uWjXttH_.js";
import { u as So } from "../userStore-Ct_RuWBK.js";
import { t as z } from "../toastContent-Cmim6dQm.js";
import { useRoute as wo, useRouter as xo } from "vue-router";
function ge(...e) {
  if (e) {
    let t = [];
    for (let n = 0; n < e.length; n++) {
      const o = e[n];
      if (!o)
        continue;
      const r = typeof o;
      if (r === "string" || r === "number")
        t.push(o);
      else if (r === "object") {
        const i = Array.isArray(o) ? [ge(...o)] : Object.entries(o).map(([a, u]) => u ? a : void 0);
        t = i.length ? t.concat(i.filter((a) => !!a)) : t;
      }
    }
    return t.join(" ").trim();
  }
}
function _o(e, t) {
  return e ? e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className) : !1;
}
function Po(e, t) {
  if (e && t) {
    const n = (o) => {
      _o(e, o) || (e.classList ? e.classList.add(o) : e.className += " " + o);
    };
    [t].flat().filter(Boolean).forEach((o) => o.split(" ").forEach(n));
  }
}
function ht(e, t) {
  if (e && t) {
    const n = (o) => {
      e.classList ? e.classList.remove(o) : e.className = e.className.replace(new RegExp("(^|\\b)" + o.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [t].flat().filter(Boolean).forEach((o) => o.split(" ").forEach(n));
  }
}
function Ft(e) {
  for (const t of document == null ? void 0 : document.styleSheets)
    try {
      for (const n of t == null ? void 0 : t.cssRules)
        for (const o of n == null ? void 0 : n.style)
          if (e.test(o))
            return { name: o, value: n.style.getPropertyValue(o).trim() };
    } catch {
    }
  return null;
}
function Co(e) {
  const t = { width: 0, height: 0 };
  return e && (e.style.visibility = "hidden", e.style.display = "block", t.width = e.offsetWidth, t.height = e.offsetHeight, e.style.display = "none", e.style.visibility = "visible"), t;
}
function gn() {
  const e = window, t = document, n = t.documentElement, o = t.getElementsByTagName("body")[0], r = e.innerWidth || n.clientWidth || o.clientWidth, i = e.innerHeight || n.clientHeight || o.clientHeight;
  return { width: r, height: i };
}
function $t(e) {
  return e ? Math.abs(e.scrollLeft) : 0;
}
function Lo() {
  const e = document.documentElement;
  return (window.pageXOffset || $t(e)) - (e.clientLeft || 0);
}
function To() {
  const e = document.documentElement;
  return (window.pageYOffset || e.scrollTop) - (e.clientTop || 0);
}
function Oo(e) {
  return e ? getComputedStyle(e).direction === "rtl" : !1;
}
function Ao(e, t, n = !0) {
  var o, r, i, a;
  if (e) {
    const u = e.offsetParent ? { width: e.offsetWidth, height: e.offsetHeight } : Co(e), s = u.height, l = u.width, d = t.offsetHeight, c = t.offsetWidth, m = t.getBoundingClientRect(), p = To(), h = Lo(), I = gn();
    let k, S, E = "top";
    m.top + d + s > I.height ? (k = m.top + p - s, E = "bottom", k < 0 && (k = p)) : k = d + m.top + p, m.left + l > I.width ? S = Math.max(0, m.left + h + c - l) : S = m.left + h, Oo(e) ? e.style.insetInlineEnd = S + "px" : e.style.insetInlineStart = S + "px", e.style.top = k + "px", e.style.transformOrigin = E, n && (e.style.marginTop = E === "bottom" ? `calc(${(r = (o = Ft(/-anchor-gutter$/)) == null ? void 0 : o.value) != null ? r : "2px"} * -1)` : (a = (i = Ft(/-anchor-gutter$/)) == null ? void 0 : i.value) != null ? a : "");
  }
}
function vn(e, t) {
  e && (typeof t == "string" ? e.style.cssText = t : Object.entries(t || {}).forEach(([n, o]) => e.style[n] = o));
}
function Ke(e, t) {
  return e instanceof HTMLElement ? e.offsetWidth : 0;
}
function yn(e) {
  if (e) {
    let t = e.parentNode;
    return t && t instanceof ShadowRoot && t.host && (t = t.host), t;
  }
  return null;
}
function Eo(e) {
  return !!(e !== null && typeof e < "u" && e.nodeName && yn(e));
}
function nt(e) {
  return typeof Element < "u" ? e instanceof Element : e !== null && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
}
var bt = void 0;
function Rt(e) {
  {
    if (bt != null) return bt;
    const t = document.createElement("div");
    vn(t, {
      width: "100px",
      height: "100px",
      overflow: "scroll",
      position: "absolute",
      top: "-9999px"
    }), document.body.appendChild(t);
    const n = t.offsetWidth - t.clientWidth;
    return document.body.removeChild(t), bt = n, n;
  }
}
function at(e, t = {}) {
  if (nt(e)) {
    const n = (o, r) => {
      var i, a;
      const u = (i = e == null ? void 0 : e.$attrs) != null && i[o] ? [(a = e == null ? void 0 : e.$attrs) == null ? void 0 : a[o]] : [];
      return [r].flat().reduce((s, l) => {
        if (l != null) {
          const d = typeof l;
          if (d === "string" || d === "number")
            s.push(l);
          else if (d === "object") {
            const c = Array.isArray(l) ? n(o, l) : Object.entries(l).map(([m, p]) => o === "style" && (p || p === 0) ? `${m.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${p}` : p ? m : void 0);
            s = c.length ? s.concat(c.filter((m) => !!m)) : s;
          }
        }
        return s;
      }, u);
    };
    Object.entries(t).forEach(([o, r]) => {
      if (r != null) {
        const i = o.match(/^on(.+)/);
        i ? e.addEventListener(i[1].toLowerCase(), r) : o === "p-bind" || o === "pBind" ? at(e, r) : (r = o === "class" ? [...new Set(n("class", r))].join(" ").trim() : o === "style" ? n("style", r).join(";").trim() : r, (e.$attrs = e.$attrs || {}) && (e.$attrs[o] = r), e.setAttribute(o, r));
      }
    });
  }
}
function jo(e, t = {}, ...n) {
  {
    const o = document.createElement(e);
    return at(o, t), o.append(...n), o;
  }
}
function ve(e, t) {
  return nt(e) ? e.matches(t) ? e : e.querySelector(t) : null;
}
function q(e, t) {
  e && document.activeElement !== e && e.focus(t);
}
function Mo(e, t) {
  if (nt(e)) {
    const n = e.getAttribute(t);
    return isNaN(n) ? n === "true" || n === "false" ? n === "true" : n : +n;
  }
}
function Bt(e) {
  if (e) {
    let t = e.offsetHeight;
    const n = getComputedStyle(e);
    return t -= parseFloat(n.paddingTop) + parseFloat(n.paddingBottom) + parseFloat(n.borderTopWidth) + parseFloat(n.borderBottomWidth), t;
  }
  return 0;
}
function Vo(e) {
  if (e) {
    e.style.visibility = "hidden", e.style.display = "block";
    const t = e.offsetHeight;
    return e.style.display = "none", e.style.visibility = "visible", t;
  }
  return 0;
}
function Ko(e) {
  if (e) {
    e.style.visibility = "hidden", e.style.display = "block";
    const t = e.offsetWidth;
    return e.style.display = "none", e.style.visibility = "visible", t;
  }
  return 0;
}
function $n(e) {
  if (e) {
    const t = e.getBoundingClientRect();
    return {
      top: t.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: t.left + (window.pageXOffset || $t(document.documentElement) || $t(document.body) || 0)
    };
  }
  return {
    top: "auto",
    left: "auto"
  };
}
function In(e, t) {
  return e ? e.offsetHeight : 0;
}
function kn(e, t = []) {
  const n = yn(e);
  return n === null ? t : kn(n, t.concat([n]));
}
function No(e) {
  const t = [];
  if (e) {
    const n = kn(e), o = /(auto|scroll)/, r = (i) => {
      try {
        const a = window.getComputedStyle(i, null);
        return o.test(a.getPropertyValue("overflow")) || o.test(a.getPropertyValue("overflowX")) || o.test(a.getPropertyValue("overflowY"));
      } catch {
        return !1;
      }
    };
    for (const i of n) {
      const a = i.nodeType === 1 && i.dataset.scrollselectors;
      if (a) {
        const u = a.split(",");
        for (const s of u) {
          const l = ve(i, s);
          l && r(l) && t.push(l);
        }
      }
      i.nodeType !== 9 && r(i) && t.push(i);
    }
  }
  return t;
}
function Wt(e) {
  if (e) {
    let t = e.offsetWidth;
    const n = getComputedStyle(e);
    return t -= parseFloat(n.paddingLeft) + parseFloat(n.paddingRight) + parseFloat(n.borderLeftWidth) + parseFloat(n.borderRightWidth), t;
  }
  return 0;
}
function Sn() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Lt() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
function zo(e, t) {
  var n, o;
  if (e) {
    const r = e.parentElement, i = $n(r), a = gn(), u = e.offsetParent ? e.offsetWidth : Ko(e), s = e.offsetParent ? e.offsetHeight : Vo(e), l = Ke((n = r == null ? void 0 : r.children) == null ? void 0 : n[0]), d = In((o = r == null ? void 0 : r.children) == null ? void 0 : o[0]);
    let c = "", m = "";
    i.left + l + u > a.width - Rt() ? i.left < u ? t % 2 === 1 ? c = i.left ? "-" + i.left + "px" : "100%" : t % 2 === 0 && (c = a.width - u - Rt() + "px") : c = "-100%" : c = "100%", e.getBoundingClientRect().top + d + s > a.height ? m = `-${s - d}px` : m = "0px", e.style.top = m, e.style.insetInlineStart = c;
  }
}
function Do(e, t = "", n) {
  nt(e) && n !== null && n !== void 0 && e.setAttribute(t, n);
}
function Tt() {
  const e = /* @__PURE__ */ new Map();
  return {
    on(t, n) {
      let o = e.get(t);
      return o ? o.push(n) : o = [n], e.set(t, o), this;
    },
    off(t, n) {
      const o = e.get(t);
      return o && o.splice(o.indexOf(n) >>> 0, 1), this;
    },
    emit(t, n) {
      const o = e.get(t);
      o && o.forEach((r) => {
        r(n);
      });
    },
    clear() {
      e.clear();
    }
  };
}
function G(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && typeof e == "object" && Object.keys(e).length === 0;
}
function Ot(e) {
  return typeof e == "function" && "call" in e && "apply" in e;
}
function w(e) {
  return !G(e);
}
function ye(e, t = !0) {
  return e instanceof Object && e.constructor === Object && (t || Object.keys(e).length !== 0);
}
function lt(e, t) {
  let n = -1;
  if (w(e))
    try {
      n = e.findLastIndex(t);
    } catch {
      n = e.lastIndexOf([...e].reverse().find(t));
    }
  return n;
}
function F(e, ...t) {
  return Ot(e) ? e(...t) : e;
}
function Z(e, t = !0) {
  return typeof e == "string" && (t || e !== "");
}
function re(e) {
  return Z(e) ? e.replace(/(-|_)/g, "").toLowerCase() : e;
}
function At(e, t = "", n = {}) {
  const o = re(t).split("."), r = o.shift();
  if (r) {
    if (ye(e)) {
      const i = Object.keys(e).find((a) => re(a) === r) || "";
      return At(F(e[i], n), o.join("."), n);
    }
    return;
  }
  return F(e, n);
}
function mt(e, t = !0) {
  return Array.isArray(e) && (t || e.length !== 0);
}
function Fo(e) {
  return w(e) && !isNaN(e);
}
function wn(e = "") {
  return w(e) && e.length === 1 && !!e.match(/\S| /);
}
function ue(e, t) {
  if (t) {
    const n = t.test(e);
    return t.lastIndex = 0, n;
  }
  return !1;
}
function Ne(e) {
  return e && e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":");
}
function Ro(e) {
  return Z(e, !1) ? e[0].toUpperCase() + e.slice(1) : e;
}
function xn(e) {
  return Z(e) ? e.replace(/(_)/g, "-").replace(/[A-Z]/g, (t, n) => n === 0 ? t : "-" + t.toLowerCase()).toLowerCase() : e;
}
function Ut(e) {
  return Z(e) ? e.replace(/[A-Z]/g, (t, n) => n === 0 ? t : "." + t.toLowerCase()).toLowerCase() : e;
}
var rt = {};
function Bo(e = "pui_id_") {
  return Object.hasOwn(rt, e) || (rt[e] = 0), rt[e]++, `${e}${rt[e]}`;
}
function Wo() {
  let e = [];
  const t = (a, u, s = 999) => {
    const l = r(a, u, s), d = l.value + (l.key === a ? 0 : s) + 1;
    return e.push({ key: a, value: d }), d;
  }, n = (a) => {
    e = e.filter((u) => u.value !== a);
  }, o = (a, u) => r(a).value, r = (a, u, s = 0) => [...e].reverse().find((l) => !0) || { key: a, value: s }, i = (a) => a && parseInt(a.style.zIndex, 10) || 0;
  return {
    get: i,
    set: (a, u, s) => {
      u && (u.style.zIndex = String(t(a, !0, s)));
    },
    clear: (a) => {
      a && (n(i(a)), a.style.zIndex = "");
    },
    getCurrent: (a) => o(a)
  };
}
var Ae = Wo(), Uo = Object.defineProperty, Ho = Object.defineProperties, Go = Object.getOwnPropertyDescriptors, ut = Object.getOwnPropertySymbols, _n = Object.prototype.hasOwnProperty, Pn = Object.prototype.propertyIsEnumerable, Ht = (e, t, n) => t in e ? Uo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ne = (e, t) => {
  for (var n in t || (t = {}))
    _n.call(t, n) && Ht(e, n, t[n]);
  if (ut)
    for (var n of ut(t))
      Pn.call(t, n) && Ht(e, n, t[n]);
  return e;
}, gt = (e, t) => Ho(e, Go(t)), ae = (e, t) => {
  var n = {};
  for (var o in e)
    _n.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && ut)
    for (var o of ut(e))
      t.indexOf(o) < 0 && Pn.call(e, o) && (n[o] = e[o]);
  return n;
}, Zo = Tt(), W = Zo;
function Gt(e, t) {
  mt(e) ? e.push(...t || []) : ye(e) && Object.assign(e, t);
}
function qo(e) {
  return ye(e) && e.hasOwnProperty("$value") && e.hasOwnProperty("$type") ? e.$value : e;
}
function Yo(e) {
  return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function It(e = "", t = "") {
  return Yo(`${Z(e, !1) && Z(t, !1) ? `${e}-` : e}${t}`);
}
function Cn(e = "", t = "") {
  return `--${It(e, t)}`;
}
function Xo(e = "") {
  const t = (e.match(/{/g) || []).length, n = (e.match(/}/g) || []).length;
  return (t + n) % 2 !== 0;
}
function Ln(e, t = "", n = "", o = [], r) {
  if (Z(e)) {
    const i = /{([^}]*)}/g, a = e.trim();
    if (Xo(a))
      return;
    if (ue(a, i)) {
      const u = a.replaceAll(i, (d) => {
        const m = d.replace(/{|}/g, "").split(".").filter((p) => !o.some((h) => ue(p, h)));
        return `var(${Cn(n, xn(m.join("-")))}${w(r) ? `, ${r}` : ""})`;
      }), s = /(\d+\s+[\+\-\*\/]\s+\d+)/g, l = /var\([^)]+\)/g;
      return ue(u.replace(l, "0"), s) ? `calc(${u})` : u;
    }
    return a;
  } else if (Fo(e))
    return e;
}
function Jo(e, t, n) {
  Z(t, !1) && e.push(`${t}:${n};`);
}
function Oe(e, t) {
  return e ? `${e}{${t}}` : "";
}
var ze = (...e) => Qo(N.getTheme(), ...e), Qo = (e = {}, t, n, o) => {
  if (t) {
    const { variable: r, options: i } = N.defaults || {}, { prefix: a, transform: u } = (e == null ? void 0 : e.options) || i || {}, l = ue(t, /{([^}]*)}/g) ? t : `{${t}}`;
    return o === "value" || G(o) && u === "strict" ? N.getTokenValue(t) : Ln(l, void 0, a, [r.excludedKeyRegex], n);
  }
  return "";
};
function ei(e, t = {}) {
  const n = N.defaults.variable, { prefix: o = n.prefix, selector: r = n.selector, excludedKeyRegex: i = n.excludedKeyRegex } = t, a = (l, d = "") => Object.entries(l).reduce(
    (c, [m, p]) => {
      const h = ue(m, i) ? It(d) : It(d, xn(m)), I = qo(p);
      if (ye(I)) {
        const { variables: k, tokens: S } = a(I, h);
        Gt(c.tokens, S), Gt(c.variables, k);
      } else
        c.tokens.push((o ? h.replace(`${o}-`, "") : h).replaceAll("-", ".")), Jo(c.variables, Cn(h), Ln(I, h, o, [i]));
      return c;
    },
    { variables: [], tokens: [] }
  ), { variables: u, tokens: s } = a(e, o);
  return {
    value: u,
    tokens: s,
    declarations: u.join(""),
    css: Oe(r, u.join(""))
  };
}
var te = {
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
        var o;
        return (o = t.map((r) => r.resolve(n)).find((r) => r.matched)) != null ? o : this.rules.custom.resolve(n);
      });
    }
  },
  _toVariables(e, t) {
    return ei(e, { prefix: t == null ? void 0 : t.prefix });
  },
  getCommon({ name: e = "", theme: t = {}, params: n, set: o, defaults: r }) {
    var i, a, u, s, l, d, c;
    const { preset: m, options: p } = t;
    let h, I, k, S, E, M, g;
    if (w(m) && p.transform !== "strict") {
      const { primitive: _, semantic: D, extend: J } = m, de = D || {}, { colorScheme: ce } = de, Ie = ae(de, ["colorScheme"]), me = J || {}, { colorScheme: ke } = me, Se = ae(me, ["colorScheme"]), pe = ce || {}, { dark: we } = pe, Pe = ae(pe, ["dark"]), xe = ke || {}, { dark: Ce } = xe, Le = ae(xe, ["dark"]), se = w(_) ? this._toVariables({ primitive: _ }, p) : {}, oe = w(Ie) ? this._toVariables({ semantic: Ie }, p) : {}, _e = w(Pe) ? this._toVariables({ light: Pe }, p) : {}, it = w(we) ? this._toVariables({ dark: we }, p) : {}, Te = w(Se) ? this._toVariables({ semantic: Se }, p) : {}, Kt = w(Le) ? this._toVariables({ light: Le }, p) : {}, Nt = w(Ce) ? this._toVariables({ dark: Ce }, p) : {}, [Zn, qn] = [(i = se.declarations) != null ? i : "", se.tokens], [Yn, Xn] = [(a = oe.declarations) != null ? a : "", oe.tokens || []], [Jn, Qn] = [(u = _e.declarations) != null ? u : "", _e.tokens || []], [eo, to] = [(s = it.declarations) != null ? s : "", it.tokens || []], [no, oo] = [(l = Te.declarations) != null ? l : "", Te.tokens || []], [io, ro] = [(d = Kt.declarations) != null ? d : "", Kt.tokens || []], [so, ao] = [(c = Nt.declarations) != null ? c : "", Nt.tokens || []];
      h = this.transformCSS(e, Zn, "light", "variable", p, o, r), I = qn;
      const lo = this.transformCSS(e, `${Yn}${Jn}`, "light", "variable", p, o, r), uo = this.transformCSS(e, `${eo}`, "dark", "variable", p, o, r);
      k = `${lo}${uo}`, S = [.../* @__PURE__ */ new Set([...Xn, ...Qn, ...to])];
      const co = this.transformCSS(e, `${no}${io}color-scheme:light`, "light", "variable", p, o, r), mo = this.transformCSS(e, `${so}color-scheme:dark`, "dark", "variable", p, o, r);
      E = `${co}${mo}`, M = [.../* @__PURE__ */ new Set([...oo, ...ro, ...ao])], g = F(m.css, { dt: ze });
    }
    return {
      primitive: {
        css: h,
        tokens: I
      },
      semantic: {
        css: k,
        tokens: S
      },
      global: {
        css: E,
        tokens: M
      },
      style: g
    };
  },
  getPreset({ name: e = "", preset: t = {}, options: n, params: o, set: r, defaults: i, selector: a }) {
    var u, s, l;
    let d, c, m;
    if (w(t) && n.transform !== "strict") {
      const p = e.replace("-directive", ""), h = t, { colorScheme: I, extend: k, css: S } = h, E = ae(h, ["colorScheme", "extend", "css"]), M = k || {}, { colorScheme: g } = M, _ = ae(M, ["colorScheme"]), D = I || {}, { dark: J } = D, de = ae(D, ["dark"]), ce = g || {}, { dark: Ie } = ce, me = ae(ce, ["dark"]), ke = w(E) ? this._toVariables({ [p]: ne(ne({}, E), _) }, n) : {}, Se = w(de) ? this._toVariables({ [p]: ne(ne({}, de), me) }, n) : {}, pe = w(J) ? this._toVariables({ [p]: ne(ne({}, J), Ie) }, n) : {}, [we, Pe] = [(u = ke.declarations) != null ? u : "", ke.tokens || []], [xe, Ce] = [(s = Se.declarations) != null ? s : "", Se.tokens || []], [Le, se] = [(l = pe.declarations) != null ? l : "", pe.tokens || []], oe = this.transformCSS(p, `${we}${xe}`, "light", "variable", n, r, i, a), _e = this.transformCSS(p, Le, "dark", "variable", n, r, i, a);
      d = `${oe}${_e}`, c = [.../* @__PURE__ */ new Set([...Pe, ...Ce, ...se])], m = F(S, { dt: ze });
    }
    return {
      css: d,
      tokens: c,
      style: m
    };
  },
  getPresetC({ name: e = "", theme: t = {}, params: n, set: o, defaults: r }) {
    var i;
    const { preset: a, options: u } = t, s = (i = a == null ? void 0 : a.components) == null ? void 0 : i[e];
    return this.getPreset({ name: e, preset: s, options: u, params: n, set: o, defaults: r });
  },
  // @deprecated - use getPresetC instead
  getPresetD({ name: e = "", theme: t = {}, params: n, set: o, defaults: r }) {
    var i, a;
    const u = e.replace("-directive", ""), { preset: s, options: l } = t, d = ((i = s == null ? void 0 : s.components) == null ? void 0 : i[u]) || ((a = s == null ? void 0 : s.directives) == null ? void 0 : a[u]);
    return this.getPreset({ name: u, preset: d, options: l, params: n, set: o, defaults: r });
  },
  applyDarkColorScheme(e) {
    return !(e.darkModeSelector === "none" || e.darkModeSelector === !1);
  },
  getColorSchemeOption(e, t) {
    var n;
    return this.applyDarkColorScheme(e) ? this.regex.resolve(e.darkModeSelector === !0 ? t.options.darkModeSelector : (n = e.darkModeSelector) != null ? n : t.options.darkModeSelector) : [];
  },
  getLayerOrder(e, t = {}, n, o) {
    const { cssLayer: r } = t;
    return r ? `@layer ${F(r.order || "primeui", n)}` : "";
  },
  getCommonStyleSheet({ name: e = "", theme: t = {}, params: n, props: o = {}, set: r, defaults: i }) {
    const a = this.getCommon({ name: e, theme: t, params: n, set: r, defaults: i }), u = Object.entries(o).reduce((s, [l, d]) => s.push(`${l}="${d}"`) && s, []).join(" ");
    return Object.entries(a || {}).reduce((s, [l, d]) => {
      if (d != null && d.css) {
        const c = Ne(d == null ? void 0 : d.css), m = `${l}-variables`;
        s.push(`<style type="text/css" data-primevue-style-id="${m}" ${u}>${c}</style>`);
      }
      return s;
    }, []).join("");
  },
  getStyleSheet({ name: e = "", theme: t = {}, params: n, props: o = {}, set: r, defaults: i }) {
    var a;
    const u = { name: e, theme: t, params: n, set: r, defaults: i }, s = (a = e.includes("-directive") ? this.getPresetD(u) : this.getPresetC(u)) == null ? void 0 : a.css, l = Object.entries(o).reduce((d, [c, m]) => d.push(`${c}="${m}"`) && d, []).join(" ");
    return s ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${l}>${Ne(s)}</style>` : "";
  },
  createTokens(e = {}, t, n = "", o = "", r = {}) {
    return Object.entries(e).forEach(([i, a]) => {
      const u = ue(i, t.variable.excludedKeyRegex) ? n : n ? `${n}.${Ut(i)}` : Ut(i), s = o ? `${o}.${i}` : i;
      ye(a) ? this.createTokens(a, t, u, s, r) : (r[u] || (r[u] = {
        paths: [],
        computed(l, d = {}) {
          var c, m;
          return this.paths.length === 1 ? (c = this.paths[0]) == null ? void 0 : c.computed(this.paths[0].scheme, d.binding) : l && l !== "none" ? (m = this.paths.find((p) => p.scheme === l)) == null ? void 0 : m.computed(l, d.binding) : this.paths.map((p) => p.computed(p.scheme, d[p.scheme]));
        }
      }), r[u].paths.push({
        path: s,
        value: a,
        scheme: s.includes("colorScheme.light") ? "light" : s.includes("colorScheme.dark") ? "dark" : "none",
        computed(l, d = {}) {
          const c = /{([^}]*)}/g;
          let m = a;
          if (d.name = this.path, d.binding || (d.binding = {}), ue(a, c)) {
            const h = a.trim().replaceAll(c, (S) => {
              var E;
              const M = S.replace(/{|}/g, ""), g = (E = r[M]) == null ? void 0 : E.computed(l, d);
              return mt(g) && g.length === 2 ? `light-dark(${g[0].value},${g[1].value})` : g == null ? void 0 : g.value;
            }), I = /(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g, k = /var\([^)]+\)/g;
            m = ue(h.replace(k, "0"), I) ? `calc(${h})` : h;
          }
          return G(d.binding) && delete d.binding, {
            colorScheme: l,
            path: this.path,
            paths: d,
            value: m.includes("undefined") ? void 0 : m
          };
        }
      }));
    }), r;
  },
  getTokenValue(e, t, n) {
    var o;
    const i = ((s) => s.split(".").filter((d) => !ue(d.toLowerCase(), n.variable.excludedKeyRegex)).join("."))(t), a = t.includes("colorScheme.light") ? "light" : t.includes("colorScheme.dark") ? "dark" : void 0, u = [(o = e[i]) == null ? void 0 : o.computed(a)].flat().filter((s) => s);
    return u.length === 1 ? u[0].value : u.reduce((s = {}, l) => {
      const d = l, { colorScheme: c } = d, m = ae(d, ["colorScheme"]);
      return s[c] = m, s;
    }, void 0);
  },
  getSelectorRule(e, t, n, o) {
    return n === "class" || n === "attr" ? Oe(w(t) ? `${e}${t},${e} ${t}` : e, o) : Oe(e, w(t) ? Oe(t, o) : o);
  },
  transformCSS(e, t, n, o, r = {}, i, a, u) {
    if (w(t)) {
      const { cssLayer: s } = r;
      if (o !== "style") {
        const l = this.getColorSchemeOption(r, a);
        t = n === "dark" ? l.reduce((d, { type: c, selector: m }) => (w(m) && (d += m.includes("[CSS]") ? m.replace("[CSS]", t) : this.getSelectorRule(m, u, c, t)), d), "") : Oe(u ?? ":root", t);
      }
      if (s) {
        const l = {
          name: "primeui"
        };
        ye(s) && (l.name = F(s.name, { name: e, type: o })), w(l.name) && (t = Oe(`@layer ${l.name}`, t), i == null || i.layerNames(l.name));
      }
      return t;
    }
    return "";
  }
}, N = {
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
    t && (this._theme = gt(ne({}, t), {
      options: ne(ne({}, this.defaults.options), t.options)
    }), this._tokens = te.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
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
    this.update({ theme: e }), W.emit("theme:change", e);
  },
  getPreset() {
    return this.preset;
  },
  setPreset(e) {
    this._theme = gt(ne({}, this.theme), { preset: e }), this._tokens = te.createTokens(e, this.defaults), this.clearLoadedStyleNames(), W.emit("preset:change", e), W.emit("theme:change", this.theme);
  },
  getOptions() {
    return this.options;
  },
  setOptions(e) {
    this._theme = gt(ne({}, this.theme), { options: e }), this.clearLoadedStyleNames(), W.emit("options:change", e), W.emit("theme:change", this.theme);
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
    return te.getTokenValue(this.tokens, e, this.defaults);
  },
  getCommon(e = "", t) {
    return te.getCommon({ name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getComponent(e = "", t) {
    const n = { name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return te.getPresetC(n);
  },
  // @deprecated - use getComponent instead
  getDirective(e = "", t) {
    const n = { name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return te.getPresetD(n);
  },
  getCustomPreset(e = "", t, n, o) {
    const r = { name: e, preset: t, options: this.options, selector: n, params: o, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return te.getPreset(r);
  },
  getLayerOrderCSS(e = "") {
    return te.getLayerOrder(e, this.options, { names: this.getLayerNames() }, this.defaults);
  },
  transformCSS(e = "", t, n = "style", o) {
    return te.transformCSS(e, t, o, n, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
  },
  getCommonStyleSheet(e = "", t, n = {}) {
    return te.getCommonStyleSheet({ name: e, theme: this.theme, params: t, props: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getStyleSheet(e, t, n = {}) {
    return te.getStyleSheet({ name: e, theme: this.theme, params: t, props: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  onStyleMounted(e) {
    this._loadingStyles.add(e);
  },
  onStyleUpdated(e) {
    this._loadingStyles.add(e);
  },
  onStyleLoaded(e, { name: t }) {
    this._loadingStyles.size && (this._loadingStyles.delete(t), W.emit(`theme:${t}:load`, e), !this._loadingStyles.size && W.emit("theme:load"));
  }
}, he = {
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
}, ti = ({ dt: e }) => `
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
function Fe(e) {
  "@babel/helpers - typeof";
  return Fe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fe(e);
}
function Zt(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function qt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zt(Object(n), !0).forEach(function(o) {
      ni(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zt(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function ni(e, t, n) {
  return (t = oi(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function oi(e) {
  var t = ii(e, "string");
  return Fe(t) == "symbol" ? t : t + "";
}
function ii(e, t) {
  if (Fe(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (Fe(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ri(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  zt() && zt().components ? je(e) : t ? e() : fo(e);
}
var si = 0;
function ai(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = j(!1), o = j(e), r = j(null), i = Sn() ? window.document : void 0, a = t.document, u = a === void 0 ? i : a, s = t.immediate, l = s === void 0 ? !0 : s, d = t.manual, c = d === void 0 ? !1 : d, m = t.name, p = m === void 0 ? "style_".concat(++si) : m, h = t.id, I = h === void 0 ? void 0 : h, k = t.media, S = k === void 0 ? void 0 : k, E = t.nonce, M = E === void 0 ? void 0 : E, g = t.first, _ = g === void 0 ? !1 : g, D = t.onMounted, J = D === void 0 ? void 0 : D, de = t.onUpdated, ce = de === void 0 ? void 0 : de, Ie = t.onLoad, me = Ie === void 0 ? void 0 : Ie, ke = t.props, Se = ke === void 0 ? {} : ke, pe = function() {
  }, we = function(Ce) {
    var Le = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (u) {
      var se = qt(qt({}, Se), Le), oe = se.name || p, _e = se.id || I, it = se.nonce || M;
      r.value = u.querySelector('style[data-primevue-style-id="'.concat(oe, '"]')) || u.getElementById(_e) || u.createElement("style"), r.value.isConnected || (o.value = Ce || e, at(r.value, {
        type: "text/css",
        id: _e,
        media: S,
        nonce: it
      }), _ ? u.head.prepend(r.value) : u.head.appendChild(r.value), Do(r.value, "data-primevue-style-id", oe), at(r.value, se), r.value.onload = function(Te) {
        return me == null ? void 0 : me(Te, {
          name: oe
        });
      }, J == null || J(oe)), !n.value && (pe = hn(o, function(Te) {
        r.value.textContent = Te, ce == null || ce(oe);
      }, {
        immediate: !0
      }), n.value = !0);
    }
  }, Pe = function() {
    !u || !n.value || (pe(), Eo(r.value) && u.head.removeChild(r.value), n.value = !1, r.value = null);
  };
  return l && !c && ri(we), {
    id: I,
    name: p,
    el: r,
    css: o,
    unload: Pe,
    load: we,
    isLoaded: po(n)
  };
}
function Re(e) {
  "@babel/helpers - typeof";
  return Re = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Re(e);
}
function Yt(e, t) {
  return ci(e) || di(e, t) || ui(e, t) || li();
}
function li() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ui(e, t) {
  if (e) {
    if (typeof e == "string") return Xt(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Xt(e, t) : void 0;
  }
}
function Xt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function di(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var o, r, i, a, u = [], s = !0, l = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0) for (; !(s = (o = i.call(n)).done) && (u.push(o.value), u.length !== t); s = !0) ;
    } catch (d) {
      l = !0, r = d;
    } finally {
      try {
        if (!s && n.return != null && (a = n.return(), Object(a) !== a)) return;
      } finally {
        if (l) throw r;
      }
    }
    return u;
  }
}
function ci(e) {
  if (Array.isArray(e)) return e;
}
function Jt(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function vt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jt(Object(n), !0).forEach(function(o) {
      mi(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Jt(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function mi(e, t, n) {
  return (t = pi(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function pi(e) {
  var t = fi(e, "string");
  return Re(t) == "symbol" ? t : t + "";
}
function fi(e, t) {
  if (Re(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (Re(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var hi = function(t) {
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
}, bi = {}, gi = {}, K = {
  name: "base",
  css: hi,
  style: ti,
  classes: bi,
  inlineStyles: gi,
  load: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(i) {
      return i;
    }, r = o(F(t, {
      dt: ze
    }));
    return w(r) ? ai(Ne(r), vt({
      name: this.name
    }, n)) : {};
  },
  loadCSS: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, t);
  },
  loadStyle: function() {
    var t = this, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return this.load(this.style, n, function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return N.transformCSS(n.name || t.name, "".concat(r).concat(o));
    });
  },
  getCommonTheme: function(t) {
    return N.getCommon(this.name, t);
  },
  getComponentTheme: function(t) {
    return N.getComponent(this.name, t);
  },
  getDirectiveTheme: function(t) {
    return N.getDirective(this.name, t);
  },
  getPresetTheme: function(t, n, o) {
    return N.getCustomPreset(this.name, t, n, o);
  },
  getLayerOrderThemeCSS: function() {
    return N.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var o = F(this.css, {
        dt: ze
      }) || "", r = Ne("".concat(o).concat(t)), i = Object.entries(n).reduce(function(a, u) {
        var s = Yt(u, 2), l = s[0], d = s[1];
        return a.push("".concat(l, '="').concat(d, '"')) && a;
      }, []).join(" ");
      return w(r) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(i, ">").concat(r, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return N.getCommonStyleSheet(this.name, t, n);
  },
  getThemeStyleSheet: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = [N.getStyleSheet(this.name, t, n)];
    if (this.style) {
      var r = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), i = F(this.style, {
        dt: ze
      }), a = Ne(N.transformCSS(r, i)), u = Object.entries(n).reduce(function(s, l) {
        var d = Yt(l, 2), c = d[0], m = d[1];
        return s.push("".concat(c, '="').concat(m, '"')) && s;
      }, []).join(" ");
      w(a) && o.push('<style type="text/css" data-primevue-style-id="'.concat(r, '" ').concat(u, ">").concat(a, "</style>"));
    }
    return o.join("");
  },
  extend: function(t) {
    return vt(vt({}, this), {}, {
      css: void 0,
      style: void 0
    }, t);
  }
};
function vi() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pc", t = ho();
  return "".concat(e).concat(t.replace("v-", "").replaceAll("-", "_"));
}
var Qt = K.extend({
  name: "common"
});
function Be(e) {
  "@babel/helpers - typeof";
  return Be = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Be(e);
}
function yi(e) {
  return An(e) || $i(e) || On(e) || Tn();
}
function $i(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Me(e, t) {
  return An(e) || Ii(e, t) || On(e, t) || Tn();
}
function Tn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function On(e, t) {
  if (e) {
    if (typeof e == "string") return en(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? en(e, t) : void 0;
  }
}
function en(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function Ii(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var o, r, i, a, u = [], s = !0, l = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        s = !1;
      } else for (; !(s = (o = i.call(n)).done) && (u.push(o.value), u.length !== t); s = !0) ;
    } catch (d) {
      l = !0, r = d;
    } finally {
      try {
        if (!s && n.return != null && (a = n.return(), Object(a) !== a)) return;
      } finally {
        if (l) throw r;
      }
    }
    return u;
  }
}
function An(e) {
  if (Array.isArray(e)) return e;
}
function tn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tn(Object(n), !0).forEach(function(o) {
      Ve(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tn(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function Ve(e, t, n) {
  return (t = ki(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ki(e) {
  var t = Si(e, "string");
  return Be(t) == "symbol" ? t : t + "";
}
function Si(e, t) {
  if (Be(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (Be(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ee = {
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
        W.off("theme:change", this._loadCoreStyles), t || (this._loadCoreStyles(), this._themeChangeListener(this._loadCoreStyles));
      }
    },
    dt: {
      immediate: !0,
      handler: function(t, n) {
        var o = this;
        W.off("theme:change", this._themeScopedListener), t ? (this._loadScopedThemeStyles(t), this._themeScopedListener = function() {
          return o._loadScopedThemeStyles(t);
        }, this._themeChangeListener(this._themeScopedListener)) : this._unloadScopedThemeStyles();
      }
    }
  },
  scopedStyleEl: void 0,
  rootEl: void 0,
  uid: void 0,
  $attrSelector: void 0,
  beforeCreate: function() {
    var t, n, o, r, i, a, u, s, l, d, c, m = (t = this.pt) === null || t === void 0 ? void 0 : t._usept, p = m ? (n = this.pt) === null || n === void 0 || (n = n.originalValue) === null || n === void 0 ? void 0 : n[this.$.type.name] : void 0, h = m ? (o = this.pt) === null || o === void 0 || (o = o.value) === null || o === void 0 ? void 0 : o[this.$.type.name] : this.pt;
    (r = h || p) === null || r === void 0 || (r = r.hooks) === null || r === void 0 || (i = r.onBeforeCreate) === null || i === void 0 || i.call(r);
    var I = (a = this.$primevueConfig) === null || a === void 0 || (a = a.pt) === null || a === void 0 ? void 0 : a._usept, k = I ? (u = this.$primevue) === null || u === void 0 || (u = u.config) === null || u === void 0 || (u = u.pt) === null || u === void 0 ? void 0 : u.originalValue : void 0, S = I ? (s = this.$primevue) === null || s === void 0 || (s = s.config) === null || s === void 0 || (s = s.pt) === null || s === void 0 ? void 0 : s.value : (l = this.$primevue) === null || l === void 0 || (l = l.config) === null || l === void 0 ? void 0 : l.pt;
    (d = S || k) === null || d === void 0 || (d = d[this.$.type.name]) === null || d === void 0 || (d = d.hooks) === null || d === void 0 || (c = d.onBeforeCreate) === null || c === void 0 || c.call(d), this.$attrSelector = vi(), this.uid = this.$attrs.id || this.$attrSelector.replace("pc", "pv_id_");
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    var t;
    this.rootEl = ve(nt(this.$el) ? this.$el : (t = this.$el) === null || t === void 0 ? void 0 : t.parentElement, "[".concat(this.$attrSelector, "]")), this.rootEl && (this.rootEl.$pc = C({
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
        var n = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, "hooks.".concat(t)), o = this._useDefaultPT(this._getOptionValue, "hooks.".concat(t));
        n == null || n(), o == null || o();
      }
    },
    _mergeProps: function(t) {
      for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
        o[r - 1] = arguments[r];
      return Ot(t) ? t.apply(void 0, o) : b.apply(void 0, o);
    },
    _load: function() {
      he.isStyleNameLoaded("base") || (K.loadCSS(this.$styleOptions), this._loadGlobalStyles(), he.setLoadedStyleName("base")), this._loadThemeStyles();
    },
    _loadStyles: function() {
      this._load(), this._themeChangeListener(this._load);
    },
    _loadCoreStyles: function() {
      var t, n;
      !he.isStyleNameLoaded((t = this.$style) === null || t === void 0 ? void 0 : t.name) && (n = this.$style) !== null && n !== void 0 && n.name && (Qt.loadCSS(this.$styleOptions), this.$options.style && this.$style.loadCSS(this.$styleOptions), he.setLoadedStyleName(this.$style.name));
    },
    _loadGlobalStyles: function() {
      var t = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      w(t) && K.load(t, C({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function() {
      var t, n;
      if (!(this.isUnstyled || this.$theme === "none")) {
        if (!N.isStyleNameLoaded("common")) {
          var o, r, i = ((o = this.$style) === null || o === void 0 || (r = o.getCommonTheme) === null || r === void 0 ? void 0 : r.call(o)) || {}, a = i.primitive, u = i.semantic, s = i.global, l = i.style;
          K.load(a == null ? void 0 : a.css, C({
            name: "primitive-variables"
          }, this.$styleOptions)), K.load(u == null ? void 0 : u.css, C({
            name: "semantic-variables"
          }, this.$styleOptions)), K.load(s == null ? void 0 : s.css, C({
            name: "global-variables"
          }, this.$styleOptions)), K.loadStyle(C({
            name: "global-style"
          }, this.$styleOptions), l), N.setLoadedStyleName("common");
        }
        if (!N.isStyleNameLoaded((t = this.$style) === null || t === void 0 ? void 0 : t.name) && (n = this.$style) !== null && n !== void 0 && n.name) {
          var d, c, m, p, h = ((d = this.$style) === null || d === void 0 || (c = d.getComponentTheme) === null || c === void 0 ? void 0 : c.call(d)) || {}, I = h.css, k = h.style;
          (m = this.$style) === null || m === void 0 || m.load(I, C({
            name: "".concat(this.$style.name, "-variables")
          }, this.$styleOptions)), (p = this.$style) === null || p === void 0 || p.loadStyle(C({
            name: "".concat(this.$style.name, "-style")
          }, this.$styleOptions), k), N.setLoadedStyleName(this.$style.name);
        }
        if (!N.isStyleNameLoaded("layer-order")) {
          var S, E, M = (S = this.$style) === null || S === void 0 || (E = S.getLayerOrderThemeCSS) === null || E === void 0 ? void 0 : E.call(S);
          K.load(M, C({
            name: "layer-order",
            first: !0
          }, this.$styleOptions)), N.setLoadedStyleName("layer-order");
        }
      }
    },
    _loadScopedThemeStyles: function(t) {
      var n, o, r, i = ((n = this.$style) === null || n === void 0 || (o = n.getPresetTheme) === null || o === void 0 ? void 0 : o.call(n, t, "[".concat(this.$attrSelector, "]"))) || {}, a = i.css, u = (r = this.$style) === null || r === void 0 ? void 0 : r.load(a, C({
        name: "".concat(this.$attrSelector, "-").concat(this.$style.name)
      }, this.$styleOptions));
      this.scopedStyleEl = u.el;
    },
    _unloadScopedThemeStyles: function() {
      var t;
      (t = this.scopedStyleEl) === null || t === void 0 || (t = t.value) === null || t === void 0 || t.remove();
    },
    _themeChangeListener: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      };
      he.clearLoadedStyleNames(), W.on("theme:change", t);
    },
    _removeThemeListeners: function() {
      W.off("theme:change", this._loadCoreStyles), W.off("theme:change", this._load), W.off("theme:change", this._themeScopedListener);
    },
    _getHostInstance: function(t) {
      return t ? this.$options.hostName ? t.$.type.name === this.$options.hostName ? t : this._getHostInstance(t.$parentInstance) : t.$parentInstance : void 0;
    },
    _getPropValue: function(t) {
      var n;
      return this[t] || ((n = this._getHostInstance(this)) === null || n === void 0 ? void 0 : n[t]);
    },
    _getOptionValue: function(t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return At(t, n, o);
    },
    _getPTValue: function() {
      var t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, a = /./g.test(o) && !!r[o.split(".")[0]], u = this._getPropValue("ptOptions") || ((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.ptOptions) || {}, s = u.mergeSections, l = s === void 0 ? !0 : s, d = u.mergeProps, c = d === void 0 ? !1 : d, m = i ? a ? this._useGlobalPT(this._getPTClassValue, o, r) : this._useDefaultPT(this._getPTClassValue, o, r) : void 0, p = a ? void 0 : this._getPTSelf(n, this._getPTClassValue, o, C(C({}, r), {}, {
        global: m || {}
      })), h = this._getPTDatasets(o);
      return l || !l && p ? c ? this._mergeProps(c, m, p, h) : C(C(C({}, m), p), h) : C(C({}, p), h);
    },
    _getPTSelf: function() {
      for (var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
        o[r - 1] = arguments[r];
      return b(
        this._usePT.apply(this, [this._getPT(t, this.$name)].concat(o)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(o))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function() {
      var t, n, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = "data-pc-", i = o === "root" && w((t = this.pt) === null || t === void 0 ? void 0 : t["data-pc-section"]);
      return o !== "transition" && C(C({}, o === "root" && C(C(Ve({}, "".concat(r, "name"), re(i ? (n = this.pt) === null || n === void 0 ? void 0 : n["data-pc-section"] : this.$.type.name)), i && Ve({}, "".concat(r, "extend"), re(this.$.type.name))), {}, Ve({}, "".concat(this.$attrSelector), ""))), {}, Ve({}, "".concat(r, "section"), re(o)));
    },
    _getPTClassValue: function() {
      var t = this._getOptionValue.apply(this, arguments);
      return Z(t) || mt(t) ? {
        class: t
      } : t;
    },
    _getPT: function(t) {
      var n = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 ? arguments[2] : void 0, i = function(u) {
        var s, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, d = r ? r(u) : u, c = re(o), m = re(n.$name);
        return (s = l ? c !== m ? d == null ? void 0 : d[c] : void 0 : d == null ? void 0 : d[c]) !== null && s !== void 0 ? s : d;
      };
      return t != null && t.hasOwnProperty("_usept") ? {
        _usept: t._usept,
        originalValue: i(t.originalValue),
        value: i(t.value)
      } : i(t, !0);
    },
    _usePT: function(t, n, o, r) {
      var i = function(I) {
        return n(I, o, r);
      };
      if (t != null && t.hasOwnProperty("_usept")) {
        var a, u = t._usept || ((a = this.$primevueConfig) === null || a === void 0 ? void 0 : a.ptOptions) || {}, s = u.mergeSections, l = s === void 0 ? !0 : s, d = u.mergeProps, c = d === void 0 ? !1 : d, m = i(t.originalValue), p = i(t.value);
        return m === void 0 && p === void 0 ? void 0 : Z(p) ? p : Z(m) ? m : l || !l && p ? c ? this._mergeProps(c, m, p) : C(C({}, m), p) : p;
      }
      return i(t);
    },
    _useGlobalPT: function(t, n, o) {
      return this._usePT(this.globalPT, t, n, o);
    },
    _useDefaultPT: function(t, n, o) {
      return this._usePT(this.defaultPT, t, n, o);
    },
    ptm: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, t, C(C({}, this.$params), n));
    },
    ptmi: function() {
      var t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = b(this.$_attrsWithoutPT, this.ptm(n, o));
      return r != null && r.hasOwnProperty("id") && ((t = r.id) !== null && t !== void 0 || (r.id = this.$id)), r;
    },
    ptmo: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(t, n, C({
        instance: this
      }, o), !1);
    },
    cx: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.isUnstyled ? void 0 : this._getOptionValue(this.$style.classes, t, C(C({}, this.$params), n));
    },
    sx: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (n) {
        var r = this._getOptionValue(this.$style.inlineStyles, t, C(C({}, this.$params), o)), i = this._getOptionValue(Qt.inlineStyles, t, C(C({}, this.$params), o));
        return [i, r];
      }
    }
  },
  computed: {
    globalPT: function() {
      var t, n = this;
      return this._getPT((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.pt, void 0, function(o) {
        return F(o, {
          instance: n
        });
      });
    },
    defaultPT: function() {
      var t, n = this;
      return this._getPT((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.pt, void 0, function(o) {
        return n._getOptionValue(o, n.$name, C({}, n.$params)) || F(o, C({}, n.$params));
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
      return Object.fromEntries(Object.entries(this.$props).filter(function(o) {
        var r = Me(o, 1), i = r[0];
        return n == null ? void 0 : n.includes(i);
      }));
    },
    $theme: function() {
      var t;
      return (t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.theme;
    },
    $style: function() {
      return C(C({
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
        var n = Me(t, 1), o = n[0];
        return o == null ? void 0 : o.startsWith("pt:");
      }).reduce(function(t, n) {
        var o = Me(n, 2), r = o[0], i = o[1], a = r.split(":"), u = yi(a), s = u.slice(1);
        return s == null || s.reduce(function(l, d, c, m) {
          return !l[d] && (l[d] = c === m.length - 1 ? i : {}), l[d];
        }, t), t;
      }, {});
    },
    $_attrsWithoutPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(t) {
        var n = Me(t, 1), o = n[0];
        return !(o != null && o.startsWith("pt:"));
      }).reduce(function(t, n) {
        var o = Me(n, 2), r = o[0], i = o[1];
        return t[r] = i, t;
      }, {});
    }
  }
}, wi = `
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
`, xi = K.extend({
  name: "baseicon",
  css: wi
});
function We(e) {
  "@babel/helpers - typeof";
  return We = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, We(e);
}
function nn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function on(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nn(Object(n), !0).forEach(function(o) {
      _i(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nn(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function _i(e, t, n) {
  return (t = Pi(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Pi(e) {
  var t = Ci(e, "string");
  return We(t) == "symbol" ? t : t + "";
}
function Ci(e, t) {
  if (We(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (We(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ot = {
  name: "BaseIcon",
  extends: ee,
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
  style: xi,
  provide: function() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function() {
      var t = G(this.label);
      return on(on({}, !this.isUnstyled && {
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
}, En = {
  name: "SpinnerIcon",
  extends: ot
};
function Li(e, t, n, o, r, i) {
  return f(), y("svg", b({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), t[0] || (t[0] = [v("path", {
    d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
En.render = Li;
var Ti = ({ dt: e }) => `
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
`, Oi = {
  root: function(t) {
    var n = t.props, o = t.instance;
    return ["p-badge p-component", {
      "p-badge-circle": w(n.value) && String(n.value).length === 1,
      "p-badge-dot": G(n.value) && !o.$slots.default,
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
}, Ai = K.extend({
  name: "badge",
  style: Ti,
  classes: Oi
}), Ei = {
  name: "BaseBadge",
  extends: ee,
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
  style: Ai,
  provide: function() {
    return {
      $pcBadge: this,
      $parentInstance: this
    };
  }
};
function Ue(e) {
  "@babel/helpers - typeof";
  return Ue = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ue(e);
}
function rn(e, t, n) {
  return (t = ji(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ji(e) {
  var t = Mi(e, "string");
  return Ue(t) == "symbol" ? t : t + "";
}
function Mi(e, t) {
  if (Ue(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (Ue(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var jn = {
  name: "Badge",
  extends: Ei,
  inheritAttrs: !1,
  computed: {
    dataP: function() {
      return ge(rn(rn({
        circle: this.value != null && String(this.value).length === 1,
        empty: this.value == null && !this.$slots.default
      }, this.severity, this.severity), this.size, this.size));
    }
  }
}, Vi = ["data-p"];
function Ki(e, t, n, o, r, i) {
  return f(), y("span", b({
    class: e.cx("root"),
    "data-p": i.dataP
  }, e.ptmi("root")), [V(e.$slots, "default", {}, function() {
    return [Q(R(e.value), 1)];
  })], 16, Vi);
}
jn.render = Ki;
var st = Tt();
function He(e) {
  "@babel/helpers - typeof";
  return He = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, He(e);
}
function sn(e, t) {
  return Fi(e) || Di(e, t) || zi(e, t) || Ni();
}
function Ni() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zi(e, t) {
  if (e) {
    if (typeof e == "string") return an(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? an(e, t) : void 0;
  }
}
function an(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function Di(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var o, r, i, a, u = [], s = !0, l = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0) for (; !(s = (o = i.call(n)).done) && (u.push(o.value), u.length !== t); s = !0) ;
    } catch (d) {
      l = !0, r = d;
    } finally {
      try {
        if (!s && n.return != null && (a = n.return(), Object(a) !== a)) return;
      } finally {
        if (l) throw r;
      }
    }
    return u;
  }
}
function Fi(e) {
  if (Array.isArray(e)) return e;
}
function ln(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ln(Object(n), !0).forEach(function(o) {
      kt(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ln(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function kt(e, t, n) {
  return (t = Ri(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ri(e) {
  var t = Bi(e, "string");
  return He(t) == "symbol" ? t : t + "";
}
function Bi(e, t) {
  if (He(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (He(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var x = {
  _getMeta: function() {
    return [ye(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], F(ye(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(t, n) {
    var o, r, i;
    return (o = (t == null || (r = t.instance) === null || r === void 0 ? void 0 : r.$primevue) || (n == null || (i = n.ctx) === null || i === void 0 || (i = i.appContext) === null || i === void 0 || (i = i.config) === null || i === void 0 || (i = i.globalProperties) === null || i === void 0 ? void 0 : i.$primevue)) === null || o === void 0 ? void 0 : o.config;
  },
  _getOptionValue: At,
  _getPTValue: function() {
    var t, n, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, s = function() {
      var E = x._getOptionValue.apply(x, arguments);
      return Z(E) || mt(E) ? {
        class: E
      } : E;
    }, l = ((t = o.binding) === null || t === void 0 || (t = t.value) === null || t === void 0 ? void 0 : t.ptOptions) || ((n = o.$primevueConfig) === null || n === void 0 ? void 0 : n.ptOptions) || {}, d = l.mergeSections, c = d === void 0 ? !0 : d, m = l.mergeProps, p = m === void 0 ? !1 : m, h = u ? x._useDefaultPT(o, o.defaultPT(), s, i, a) : void 0, I = x._usePT(o, x._getPT(r, o.$name), s, i, A(A({}, a), {}, {
      global: h || {}
    })), k = x._getPTDatasets(o, i);
    return c || !c && I ? p ? x._mergeProps(o, p, h, I, k) : A(A(A({}, h), I), k) : A(A({}, I), k);
  },
  _getPTDatasets: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = "data-pc-";
    return A(A({}, n === "root" && kt({}, "".concat(o, "name"), re(t.$name))), {}, kt({}, "".concat(o, "section"), re(n)));
  },
  _getPT: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 ? arguments[2] : void 0, r = function(a) {
      var u, s = o ? o(a) : a, l = re(n);
      return (u = s == null ? void 0 : s[l]) !== null && u !== void 0 ? u : s;
    };
    return t && Object.hasOwn(t, "_usept") ? {
      _usept: t._usept,
      originalValue: r(t.originalValue),
      value: r(t.value)
    } : r(t);
  },
  _usePT: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, o = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0, a = function(k) {
      return o(k, r, i);
    };
    if (n && Object.hasOwn(n, "_usept")) {
      var u, s = n._usept || ((u = t.$primevueConfig) === null || u === void 0 ? void 0 : u.ptOptions) || {}, l = s.mergeSections, d = l === void 0 ? !0 : l, c = s.mergeProps, m = c === void 0 ? !1 : c, p = a(n.originalValue), h = a(n.value);
      return p === void 0 && h === void 0 ? void 0 : Z(h) ? h : Z(p) ? p : d || !d && h ? m ? x._mergeProps(t, m, p, h) : A(A({}, p), h) : h;
    }
    return a(n);
  },
  _useDefaultPT: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0;
    return x._usePT(t, n, o, r, i);
  },
  _loadStyles: function() {
    var t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0, i = x._getConfig(o, r), a = {
      nonce: i == null || (t = i.csp) === null || t === void 0 ? void 0 : t.nonce
    };
    x._loadCoreStyles(n, a), x._loadThemeStyles(n, a), x._loadScopedThemeStyles(n, a), x._removeThemeListeners(n), n.$loadStyles = function() {
      return x._loadThemeStyles(n, a);
    }, x._themeChangeListener(n.$loadStyles);
  },
  _loadCoreStyles: function() {
    var t, n, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    if (!he.isStyleNameLoaded((t = o.$style) === null || t === void 0 ? void 0 : t.name) && (n = o.$style) !== null && n !== void 0 && n.name) {
      var i;
      K.loadCSS(r), (i = o.$style) === null || i === void 0 || i.loadCSS(r), he.setLoadedStyleName(o.$style.name);
    }
  },
  _loadThemeStyles: function() {
    var t, n, o, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
    if (!(r != null && r.isUnstyled() || (r == null || (t = r.theme) === null || t === void 0 ? void 0 : t.call(r)) === "none")) {
      if (!N.isStyleNameLoaded("common")) {
        var a, u, s = ((a = r.$style) === null || a === void 0 || (u = a.getCommonTheme) === null || u === void 0 ? void 0 : u.call(a)) || {}, l = s.primitive, d = s.semantic, c = s.global, m = s.style;
        K.load(l == null ? void 0 : l.css, A({
          name: "primitive-variables"
        }, i)), K.load(d == null ? void 0 : d.css, A({
          name: "semantic-variables"
        }, i)), K.load(c == null ? void 0 : c.css, A({
          name: "global-variables"
        }, i)), K.loadStyle(A({
          name: "global-style"
        }, i), m), N.setLoadedStyleName("common");
      }
      if (!N.isStyleNameLoaded((n = r.$style) === null || n === void 0 ? void 0 : n.name) && (o = r.$style) !== null && o !== void 0 && o.name) {
        var p, h, I, k, S = ((p = r.$style) === null || p === void 0 || (h = p.getDirectiveTheme) === null || h === void 0 ? void 0 : h.call(p)) || {}, E = S.css, M = S.style;
        (I = r.$style) === null || I === void 0 || I.load(E, A({
          name: "".concat(r.$style.name, "-variables")
        }, i)), (k = r.$style) === null || k === void 0 || k.loadStyle(A({
          name: "".concat(r.$style.name, "-style")
        }, i), M), N.setLoadedStyleName(r.$style.name);
      }
      if (!N.isStyleNameLoaded("layer-order")) {
        var g, _, D = (g = r.$style) === null || g === void 0 || (_ = g.getLayerOrderThemeCSS) === null || _ === void 0 ? void 0 : _.call(g);
        K.load(D, A({
          name: "layer-order",
          first: !0
        }, i)), N.setLoadedStyleName("layer-order");
      }
    }
  },
  _loadScopedThemeStyles: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, o = t.preset();
    if (o && t.$attrSelector) {
      var r, i, a, u = ((r = t.$style) === null || r === void 0 || (i = r.getPresetTheme) === null || i === void 0 ? void 0 : i.call(r, o, "[".concat(t.$attrSelector, "]"))) || {}, s = u.css, l = (a = t.$style) === null || a === void 0 ? void 0 : a.load(s, A({
        name: "".concat(t.$attrSelector, "-").concat(t.$style.name)
      }, n));
      t.scopedStyleEl = l.el;
    }
  },
  _themeChangeListener: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    he.clearLoadedStyleNames(), W.on("theme:change", t);
  },
  _removeThemeListeners: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    W.off("theme:change", t.$loadStyles), t.$loadStyles = void 0;
  },
  _hook: function(t, n, o, r, i, a) {
    var u, s, l = "on".concat(Ro(n)), d = x._getConfig(r, i), c = o == null ? void 0 : o.$instance, m = x._usePT(c, x._getPT(r == null || (u = r.value) === null || u === void 0 ? void 0 : u.pt, t), x._getOptionValue, "hooks.".concat(l)), p = x._useDefaultPT(c, d == null || (s = d.pt) === null || s === void 0 || (s = s.directives) === null || s === void 0 ? void 0 : s[t], x._getOptionValue, "hooks.".concat(l)), h = {
      el: o,
      binding: r,
      vnode: i,
      prevVnode: a
    };
    m == null || m(c, h), p == null || p(c, h);
  },
  /* eslint-disable-next-line no-unused-vars */
  _mergeProps: function() {
    for (var t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
      o[r - 2] = arguments[r];
    return Ot(t) ? t.apply(void 0, o) : b.apply(void 0, o);
  },
  _extend: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = function(u, s, l, d, c) {
      var m, p, h, I;
      s._$instances = s._$instances || {};
      var k = x._getConfig(l, d), S = s._$instances[t] || {}, E = G(S) ? A(A({}, n), n == null ? void 0 : n.methods) : {};
      s._$instances[t] = A(A({}, S), {}, {
        /* new instance variables to pass in directive methods */
        $name: t,
        $host: s,
        $binding: l,
        $modifiers: l == null ? void 0 : l.modifiers,
        $value: l == null ? void 0 : l.value,
        $el: S.$el || s || void 0,
        $style: A({
          classes: void 0,
          inlineStyles: void 0,
          load: function() {
          },
          loadCSS: function() {
          },
          loadStyle: function() {
          }
        }, n == null ? void 0 : n.style),
        $primevueConfig: k,
        $attrSelector: (m = s.$pd) === null || m === void 0 || (m = m[t]) === null || m === void 0 ? void 0 : m.attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return x._getPT(k == null ? void 0 : k.pt, void 0, function(g) {
            var _;
            return g == null || (_ = g.directives) === null || _ === void 0 ? void 0 : _[t];
          });
        },
        isUnstyled: function() {
          var g, _;
          return ((g = s._$instances[t]) === null || g === void 0 || (g = g.$binding) === null || g === void 0 || (g = g.value) === null || g === void 0 ? void 0 : g.unstyled) !== void 0 ? (_ = s._$instances[t]) === null || _ === void 0 || (_ = _.$binding) === null || _ === void 0 || (_ = _.value) === null || _ === void 0 ? void 0 : _.unstyled : k == null ? void 0 : k.unstyled;
        },
        theme: function() {
          var g;
          return (g = s._$instances[t]) === null || g === void 0 || (g = g.$primevueConfig) === null || g === void 0 ? void 0 : g.theme;
        },
        preset: function() {
          var g;
          return (g = s._$instances[t]) === null || g === void 0 || (g = g.$binding) === null || g === void 0 || (g = g.value) === null || g === void 0 ? void 0 : g.dt;
        },
        /* instance's methods */
        ptm: function() {
          var g, _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return x._getPTValue(s._$instances[t], (g = s._$instances[t]) === null || g === void 0 || (g = g.$binding) === null || g === void 0 || (g = g.value) === null || g === void 0 ? void 0 : g.pt, _, A({}, D));
        },
        ptmo: function() {
          var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", D = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return x._getPTValue(s._$instances[t], g, _, D, !1);
        },
        cx: function() {
          var g, _, D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", J = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (g = s._$instances[t]) !== null && g !== void 0 && g.isUnstyled() ? void 0 : x._getOptionValue((_ = s._$instances[t]) === null || _ === void 0 || (_ = _.$style) === null || _ === void 0 ? void 0 : _.classes, D, A({}, J));
        },
        sx: function() {
          var g, _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, J = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return D ? x._getOptionValue((g = s._$instances[t]) === null || g === void 0 || (g = g.$style) === null || g === void 0 ? void 0 : g.inlineStyles, _, A({}, J)) : void 0;
        }
      }, E), s.$instance = s._$instances[t], (p = (h = s.$instance)[u]) === null || p === void 0 || p.call(h, s, l, d, c), s["$".concat(t)] = s.$instance, x._hook(t, u, s, l, d, c), s.$pd || (s.$pd = {}), s.$pd[t] = A(A({}, (I = s.$pd) === null || I === void 0 ? void 0 : I[t]), {}, {
        name: t,
        instance: s._$instances[t]
      });
    }, r = function(u) {
      var s, l, d, c = u._$instances[t], m = c == null ? void 0 : c.watch, p = function(k) {
        var S, E = k.newValue, M = k.oldValue;
        return m == null || (S = m.config) === null || S === void 0 ? void 0 : S.call(c, E, M);
      }, h = function(k) {
        var S, E = k.newValue, M = k.oldValue;
        return m == null || (S = m["config.ripple"]) === null || S === void 0 ? void 0 : S.call(c, E, M);
      };
      c.$watchersCallback = {
        config: p,
        "config.ripple": h
      }, m == null || (s = m.config) === null || s === void 0 || s.call(c, c == null ? void 0 : c.$primevueConfig), st.on("config:change", p), m == null || (l = m["config.ripple"]) === null || l === void 0 || l.call(c, c == null || (d = c.$primevueConfig) === null || d === void 0 ? void 0 : d.ripple), st.on("config:ripple:change", h);
    }, i = function(u) {
      var s = u._$instances[t].$watchersCallback;
      s && (st.off("config:change", s.config), st.off("config:ripple:change", s["config.ripple"]), u._$instances[t].$watchersCallback = void 0);
    };
    return {
      created: function(u, s, l, d) {
        u.$pd || (u.$pd = {}), u.$pd[t] = {
          name: t,
          attrSelector: Bo("pd")
        }, o("created", u, s, l, d);
      },
      beforeMount: function(u, s, l, d) {
        var c;
        x._loadStyles((c = u.$pd[t]) === null || c === void 0 ? void 0 : c.instance, s, l), o("beforeMount", u, s, l, d), r(u);
      },
      mounted: function(u, s, l, d) {
        var c;
        x._loadStyles((c = u.$pd[t]) === null || c === void 0 ? void 0 : c.instance, s, l), o("mounted", u, s, l, d);
      },
      beforeUpdate: function(u, s, l, d) {
        o("beforeUpdate", u, s, l, d);
      },
      updated: function(u, s, l, d) {
        var c;
        x._loadStyles((c = u.$pd[t]) === null || c === void 0 ? void 0 : c.instance, s, l), o("updated", u, s, l, d);
      },
      beforeUnmount: function(u, s, l, d) {
        var c;
        i(u), x._removeThemeListeners((c = u.$pd[t]) === null || c === void 0 ? void 0 : c.instance), o("beforeUnmount", u, s, l, d);
      },
      unmounted: function(u, s, l, d) {
        var c;
        (c = u.$pd[t]) === null || c === void 0 || (c = c.instance) === null || c === void 0 || (c = c.scopedStyleEl) === null || c === void 0 || (c = c.value) === null || c === void 0 || c.remove(), o("unmounted", u, s, l, d);
      }
    };
  },
  extend: function() {
    var t = x._getMeta.apply(x, arguments), n = sn(t, 2), o = n[0], r = n[1];
    return A({
      extend: function() {
        var a = x._getMeta.apply(x, arguments), u = sn(a, 2), s = u[0], l = u[1];
        return x.extend(s, A(A(A({}, r), r == null ? void 0 : r.methods), l));
      }
    }, x._extend(o, r));
  }
}, Wi = ({ dt: e }) => `
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
`, Ui = {
  root: "p-ink"
}, Hi = K.extend({
  name: "ripple-directive",
  style: Wi,
  classes: Ui
}), Gi = x.extend({
  style: Hi
});
function Ge(e) {
  "@babel/helpers - typeof";
  return Ge = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ge(e);
}
function Zi(e) {
  return Ji(e) || Xi(e) || Yi(e) || qi();
}
function qi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yi(e, t) {
  if (e) {
    if (typeof e == "string") return St(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? St(e, t) : void 0;
  }
}
function Xi(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Ji(e) {
  if (Array.isArray(e)) return St(e);
}
function St(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function un(e, t, n) {
  return (t = Qi(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Qi(e) {
  var t = er(e, "string");
  return Ge(t) == "symbol" ? t : t + "";
}
function er(e, t) {
  if (Ge(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (Ge(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var pt = Gi.extend("ripple", {
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
      n || (n = jo("span", un(un({
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
      var n = this, o = t.currentTarget, r = this.getInk(o);
      if (!(!r || getComputedStyle(r, null).display === "none")) {
        if (!this.isUnstyled() && ht(r, "p-ink-active"), r.setAttribute("data-p-ink-active", "false"), !Bt(r) && !Wt(r)) {
          var i = Math.max(Ke(o), In(o));
          r.style.height = i + "px", r.style.width = i + "px";
        }
        var a = $n(o), u = t.pageX - a.left + document.body.scrollTop - Wt(r) / 2, s = t.pageY - a.top + document.body.scrollLeft - Bt(r) / 2;
        r.style.top = s + "px", r.style.left = u + "px", !this.isUnstyled() && Po(r, "p-ink-active"), r.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          r && (!n.isUnstyled() && ht(r, "p-ink-active"), r.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(t) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && ht(t.currentTarget, "p-ink-active"), t.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(t) {
      return t && t.children ? Zi(t.children).find(function(n) {
        return Mo(n, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
}), tr = ({ dt: e }) => `
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
function Ze(e) {
  "@babel/helpers - typeof";
  return Ze = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ze(e);
}
function ie(e, t, n) {
  return (t = nr(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function nr(e) {
  var t = or(e, "string");
  return Ze(t) == "symbol" ? t : t + "";
}
function or(e, t) {
  if (Ze(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (Ze(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ir = {
  root: function(t) {
    var n = t.instance, o = t.props;
    return ["p-button p-component", ie(ie(ie(ie(ie(ie(ie(ie(ie({
      "p-button-icon-only": n.hasIcon && !o.label && !o.badge,
      "p-button-vertical": (o.iconPos === "top" || o.iconPos === "bottom") && o.label,
      "p-button-loading": o.loading,
      "p-button-link": o.link || o.variant === "link"
    }, "p-button-".concat(o.severity), o.severity), "p-button-raised", o.raised), "p-button-rounded", o.rounded), "p-button-text", o.text || o.variant === "text"), "p-button-outlined", o.outlined || o.variant === "outlined"), "p-button-sm", o.size === "small"), "p-button-lg", o.size === "large"), "p-button-plain", o.plain), "p-button-fluid", n.hasFluid)];
  },
  loadingIcon: "p-button-loading-icon",
  icon: function(t) {
    var n = t.props;
    return ["p-button-icon", ie({}, "p-button-icon-".concat(n.iconPos), n.label)];
  },
  label: "p-button-label"
}, rr = K.extend({
  name: "button",
  style: tr,
  classes: ir
}), sr = {
  name: "BaseButton",
  extends: ee,
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
  style: rr,
  provide: function() {
    return {
      $pcButton: this,
      $parentInstance: this
    };
  }
};
function qe(e) {
  "@babel/helpers - typeof";
  return qe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qe(e);
}
function U(e, t, n) {
  return (t = ar(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ar(e) {
  var t = lr(e, "string");
  return qe(t) == "symbol" ? t : t + "";
}
function lr(e, t) {
  if (qe(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (qe(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var H = {
  name: "Button",
  extends: sr,
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
      return G(this.fluid) ? !!this.$pcFluid : this.fluid;
    },
    dataP: function() {
      return ge(U(U(U(U(U(U(U(U(U(U({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge), "loading", this.loading), "fluid", this.hasFluid), "rounded", this.rounded), "raised", this.raised), "outlined", this.outlined || this.variant === "outlined"), "text", this.text || this.variant === "text"), "link", this.link || this.variant === "link"), "vertical", (this.iconPos === "top" || this.iconPos === "bottom") && this.label));
    },
    dataIconP: function() {
      return ge(U(U({}, this.iconPos, this.iconPos), this.size, this.size));
    },
    dataLabelP: function() {
      return ge(U(U({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge));
    }
  },
  components: {
    SpinnerIcon: En,
    Badge: jn
  },
  directives: {
    ripple: pt
  }
}, ur = ["data-p"], dr = ["data-p"];
function cr(e, t, n, o, r, i) {
  var a = X("SpinnerIcon"), u = X("Badge"), s = dt("ripple");
  return e.asChild ? V(e.$slots, "default", {
    key: 1,
    class: Y(e.cx("root")),
    a11yAttrs: i.a11yAttrs
  }) : De((f(), T(le(e.as), b({
    key: 0,
    class: e.cx("root"),
    "data-p": i.dataP
  }, i.attrs), {
    default: L(function() {
      return [V(e.$slots, "default", {}, function() {
        return [e.loading ? V(e.$slots, "loadingicon", b({
          key: 0,
          class: [e.cx("loadingIcon"), e.cx("icon")]
        }, e.ptm("loadingIcon")), function() {
          return [e.loadingIcon ? (f(), y("span", b({
            key: 0,
            class: [e.cx("loadingIcon"), e.cx("icon"), e.loadingIcon]
          }, e.ptm("loadingIcon")), null, 16)) : (f(), T(a, b({
            key: 1,
            class: [e.cx("loadingIcon"), e.cx("icon")],
            spin: ""
          }, e.ptm("loadingIcon")), null, 16, ["class"]))];
        }) : V(e.$slots, "icon", b({
          key: 1,
          class: [e.cx("icon")]
        }, e.ptm("icon")), function() {
          return [e.icon ? (f(), y("span", b({
            key: 0,
            class: [e.cx("icon"), e.icon, e.iconClass],
            "data-p": i.dataIconP
          }, e.ptm("icon")), null, 16, ur)) : P("", !0)];
        }), v("span", b({
          class: e.cx("label")
        }, e.ptm("label"), {
          "data-p": i.dataLabelP
        }), R(e.label || " "), 17, dr), e.badge ? (f(), T(u, {
          key: 2,
          value: e.badge,
          class: Y(e.badgeClass),
          severity: e.badgeSeverity,
          unstyled: e.unstyled,
          pt: e.ptm("pcBadge")
        }, null, 8, ["value", "class", "severity", "unstyled", "pt"])) : P("", !0)];
      })];
    }),
    _: 3
  }, 16, ["class", "data-p"])), [[s]]);
}
H.render = cr;
var mr = ({ dt: e }) => `
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
`, pr = {
  root: "p-progressspinner",
  spin: "p-progressspinner-spin",
  circle: "p-progressspinner-circle"
}, fr = K.extend({
  name: "progressspinner",
  style: mr,
  classes: pr
}), hr = {
  name: "BaseProgressSpinner",
  extends: ee,
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
  style: fr,
  provide: function() {
    return {
      $pcProgressSpinner: this,
      $parentInstance: this
    };
  }
}, Et = {
  name: "ProgressSpinner",
  extends: hr,
  inheritAttrs: !1,
  computed: {
    svgStyle: function() {
      return {
        "animation-duration": this.animationDuration
      };
    }
  }
}, br = ["fill", "stroke-width"];
function gr(e, t, n, o, r, i) {
  return f(), y("div", b({
    class: e.cx("root"),
    role: "progressbar"
  }, e.ptmi("root")), [(f(), y("svg", b({
    class: e.cx("spin"),
    viewBox: "25 25 50 50",
    style: i.svgStyle
  }, e.ptm("spin")), [v("circle", b({
    class: e.cx("circle"),
    cx: "50",
    cy: "50",
    r: "20",
    fill: e.fill,
    "stroke-width": e.strokeWidth,
    strokeMiterlimit: "10"
  }, e.ptm("circle")), null, 16, br)], 16))], 16);
}
Et.render = gr;
const vr = {
  key: 0,
  class: "border flex flex-grow items-center justify-center w-full"
}, yr = { key: 1 }, $r = /* @__PURE__ */ B({
  __name: "PageLoader",
  props: {
    isLoading: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, n) => t.isLoading ? (f(), y("div", vr, [
      Q(" isLoading2 " + R(t.isLoading) + " ", 1),
      O($(Et), { "aria-label": "Loading" }),
      O($(H), {
        type: "button",
        onClick: n[0] || (n[0] = () => {
          console.log("hello");
        })
      }, {
        default: L(() => n[1] || (n[1] = [
          Q("Send deletion email")
        ])),
        _: 1
      })
    ])) : (f(), y("div", yr, [
      V(t.$slots, "default")
    ]));
  }
}), Ir = /* @__PURE__ */ B({
  __name: "ThemeToggle",
  setup(e) {
    const t = localStorage.getItem("theme") || "light", n = j(t);
    document.documentElement.classList.toggle("dark", t === "dark");
    const o = Ee(() => n.value === "light" ? "pi pi-sun" : "pi pi-moon");
    function r() {
      const i = n.value === "light" ? "dark" : "light";
      localStorage.setItem("theme", i), n.value = i, document.documentElement.classList.toggle("dark", i === "dark");
    }
    return (i, a) => (f(), T($(H), {
      id: "themeToggle",
      icon: $(o),
      variant: "outlined",
      "aria-label": "Toggle theme",
      onClick: a[0] || (a[0] = (u) => r())
    }, null, 8, ["icon"]));
  }
});
var Mn = {
  name: "BarsIcon",
  extends: ot
};
function kr(e, t, n, o, r, i) {
  return f(), y("svg", b({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), t[0] || (t[0] = [v("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
Mn.render = kr;
var Sr = ({ dt: e }) => `
.p-menubar {
    display: flex;
    align-items: center;
    background: ${e("menubar.background")};
    border: 1px solid ${e("menubar.border.color")};
    border-radius: ${e("menubar.border.radius")};
    color: ${e("menubar.color")};
    padding: ${e("menubar.padding")};
    gap: ${e("menubar.gap")};
}

.p-menubar-start,
.p-megamenu-end {
    display: flex;
    align-items: center;
}

.p-menubar-root-list,
.p-menubar-submenu {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
}

.p-menubar-root-list {
    align-items: center;
    flex-wrap: wrap;
    gap: ${e("menubar.gap")};
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: ${e("menubar.base.item.border.radius")};
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: ${e("menubar.base.item.padding")};
}

.p-menubar-item-content {
    transition: background ${e("menubar.transition.duration")}, color ${e("menubar.transition.duration")};
    border-radius: ${e("menubar.item.border.radius")};
    color: ${e("menubar.item.color")};
}

.p-menubar-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${e("menubar.item.padding")};
    gap: ${e("menubar.item.gap")};
    user-select: none;
    outline: 0 none;
}

.p-menubar-item-label {
    line-height: 1;
}

.p-menubar-item-icon {
    color: ${e("menubar.item.icon.color")};
}

.p-menubar-submenu-icon {
    color: ${e("menubar.submenu.icon.color")};
    margin-left: auto;
    font-size: ${e("menubar.submenu.icon.size")};
    width: ${e("menubar.submenu.icon.size")};
    height: ${e("menubar.submenu.icon.size")};
}

.p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-item.p-focus > .p-menubar-item-content {
    color: ${e("menubar.item.focus.color")};
    background: ${e("menubar.item.focus.background")};
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
    color: ${e("menubar.item.icon.focus.color")};
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
    color: ${e("menubar.submenu.icon.focus.color")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
    color: ${e("menubar.item.focus.color")};
    background: ${e("menubar.item.focus.background")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
    color: ${e("menubar.item.icon.focus.color")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
    color: ${e("menubar.submenu.icon.focus.color")};
}

.p-menubar-item-active > .p-menubar-item-content {
    color: ${e("menubar.item.active.color")};
    background: ${e("menubar.item.active.background")};
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
    color: ${e("menubar.item.icon.active.color")};
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    color: ${e("menubar.submenu.icon.active.color")};
}

.p-menubar-submenu {
    display: none;
    position: absolute;
    min-width: 12.5rem;
    z-index: 1;
    background: ${e("menubar.submenu.background")};
    border: 1px solid ${e("menubar.submenu.border.color")};
    border-radius: ${e("menubar.submenu.border.radius")};
    box-shadow: ${e("menubar.submenu.shadow")};
    color: ${e("menubar.submenu.color")};
    flex-direction: column;
    padding: ${e("menubar.submenu.padding")};
    gap: ${e("menubar.submenu.gap")};
}

.p-menubar-submenu .p-menubar-separator {
    border-block-start: 1px solid ${e("menubar.separator.border.color")};
}

.p-menubar-submenu .p-menubar-item {
    position: relative;
}

.p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {
    display: block;
    left: 100%;
    top: 0;
}

.p-menubar-end {
    margin-left: auto;
    align-self: center;
}

.p-menubar-end:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: ${e("menubar.mobile.button.size")};
    height: ${e("menubar.mobile.button.size")};
    position: relative;
    color: ${e("menubar.mobile.button.color")};
    border: 0 none;
    background: transparent;
    border-radius: ${e("menubar.mobile.button.border.radius")};
    transition: background ${e("menubar.transition.duration")}, color ${e("menubar.transition.duration")}, outline-color ${e("menubar.transition.duration")};
    outline-color: transparent;
}

.p-menubar-button:hover {
    color: ${e("menubar.mobile.button.hover.color")};
    background: ${e("menubar.mobile.button.hover.background")};
}

.p-menubar-button:focus-visible {
    box-shadow: ${e("menubar.mobile.button.focus.ring.shadow")};
    outline: ${e("menubar.mobile.button.focus.ring.width")} ${e("menubar.mobile.button.focus.ring.style")} ${e("menubar.mobile.button.focus.ring.color")};
    outline-offset: ${e("menubar.mobile.button.focus.ring.offset")};
}

.p-menubar-mobile {
    position: relative;
}

.p-menubar-mobile .p-menubar-button {
    display: flex;
}

.p-menubar-mobile .p-menubar-root-list {
    position: absolute;
    display: none;
    width: 100%;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
    padding: ${e("menubar.submenu.padding")};
    background: ${e("menubar.submenu.background")};
    border: 1px solid ${e("menubar.submenu.border.color")};
    box-shadow: ${e("menubar.submenu.shadow")};
    border-radius: ${e("menubar.submenu.border.radius")};
    gap: ${e("menubar.submenu.gap")};
}

.p-menubar-mobile .p-menubar-root-list:dir(rtl) {
    left: auto;
    right: 0;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: ${e("menubar.item.padding")};
}

.p-menubar-mobile-active .p-menubar-root-list {
    display: flex;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-item {
    width: 100%;
    position: static;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
    border-block-start: 1px solid ${e("menubar.separator.border.color")};
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl),
.p-menubar-mobile .p-menubar-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-180deg);
}

.p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-menubar-mobile .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-90deg);
}

.p-menubar-mobile .p-menubar-submenu {
    width: 100%;
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-inline-start: ${e("menubar.submenu.mobile.indent")};
    padding-inline-end: 0;
}
`, wr = {
  submenu: function(t) {
    var n = t.instance, o = t.processedItem;
    return {
      display: n.isItemActive(o) ? "flex" : "none"
    };
  }
}, xr = {
  root: function(t) {
    var n = t.instance;
    return ["p-menubar p-component", {
      "p-menubar-mobile": n.queryMatches,
      "p-menubar-mobile-active": n.mobileActive
    }];
  },
  start: "p-menubar-start",
  button: "p-menubar-button",
  rootList: "p-menubar-root-list",
  item: function(t) {
    var n = t.instance, o = t.processedItem;
    return ["p-menubar-item", {
      "p-menubar-item-active": n.isItemActive(o),
      "p-focus": n.isItemFocused(o),
      "p-disabled": n.isItemDisabled(o)
    }];
  },
  itemContent: "p-menubar-item-content",
  itemLink: "p-menubar-item-link",
  itemIcon: "p-menubar-item-icon",
  itemLabel: "p-menubar-item-label",
  submenuIcon: "p-menubar-submenu-icon",
  submenu: "p-menubar-submenu",
  separator: "p-menubar-separator",
  end: "p-menubar-end"
}, _r = K.extend({
  name: "menubar",
  style: Sr,
  classes: xr,
  inlineStyles: wr
}), Vn = {
  name: "AngleDownIcon",
  extends: ot
};
function Pr(e, t, n, o, r, i) {
  return f(), y("svg", b({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), t[0] || (t[0] = [v("path", {
    d: "M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
Vn.render = Pr;
var jt = {
  name: "AngleRightIcon",
  extends: ot
};
function Cr(e, t, n, o, r, i) {
  return f(), y("svg", b({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), t[0] || (t[0] = [v("path", {
    d: "M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
jt.render = Cr;
var Lr = {
  name: "BaseMenubar",
  extends: ee,
  props: {
    model: {
      type: Array,
      default: null
    },
    buttonProps: {
      type: null,
      default: null
    },
    breakpoint: {
      type: String,
      default: "960px"
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
  style: _r,
  provide: function() {
    return {
      $pcMenubar: this,
      $parentInstance: this
    };
  }
}, Kn = {
  name: "MenubarSub",
  hostName: "Menubar",
  extends: ee,
  emits: ["item-mouseenter", "item-click", "item-mousemove"],
  props: {
    items: {
      type: Array,
      default: null
    },
    root: {
      type: Boolean,
      default: !1
    },
    popup: {
      type: Boolean,
      default: !1
    },
    mobileActive: {
      type: Boolean,
      default: !1
    },
    templates: {
      type: Object,
      default: null
    },
    level: {
      type: Number,
      default: 0
    },
    menuId: {
      type: String,
      default: null
    },
    focusedItemId: {
      type: String,
      default: null
    },
    activeItemPath: {
      type: Object,
      default: null
    }
  },
  list: null,
  methods: {
    getItemId: function(t) {
      return "".concat(this.menuId, "_").concat(t.key);
    },
    getItemKey: function(t) {
      return this.getItemId(t);
    },
    getItemProp: function(t, n, o) {
      return t && t.item ? F(t.item[n], o) : void 0;
    },
    getItemLabel: function(t) {
      return this.getItemProp(t, "label");
    },
    getItemLabelId: function(t) {
      return "".concat(this.menuId, "_").concat(t.key, "_label");
    },
    getPTOptions: function(t, n, o) {
      return this.ptm(o, {
        context: {
          item: t.item,
          index: n,
          active: this.isItemActive(t),
          focused: this.isItemFocused(t),
          disabled: this.isItemDisabled(t),
          level: this.level
        }
      });
    },
    isItemActive: function(t) {
      return this.activeItemPath.some(function(n) {
        return n.key === t.key;
      });
    },
    isItemVisible: function(t) {
      return this.getItemProp(t, "visible") !== !1;
    },
    isItemDisabled: function(t) {
      return this.getItemProp(t, "disabled");
    },
    isItemFocused: function(t) {
      return this.focusedItemId === this.getItemId(t);
    },
    isItemGroup: function(t) {
      return w(t.items);
    },
    onItemClick: function(t, n) {
      this.getItemProp(n, "command", {
        originalEvent: t,
        item: n.item
      }), this.$emit("item-click", {
        originalEvent: t,
        processedItem: n,
        isFocus: !0
      });
    },
    onItemMouseEnter: function(t, n) {
      this.$emit("item-mouseenter", {
        originalEvent: t,
        processedItem: n
      });
    },
    onItemMouseMove: function(t, n) {
      this.$emit("item-mousemove", {
        originalEvent: t,
        processedItem: n
      });
    },
    getAriaPosInset: function(t) {
      return t - this.calculateAriaSetSize.slice(0, t).length + 1;
    },
    getMenuItemProps: function(t, n) {
      return {
        action: b({
          class: this.cx("itemLink"),
          tabindex: -1
        }, this.getPTOptions(t, n, "itemLink")),
        icon: b({
          class: [this.cx("itemIcon"), this.getItemProp(t, "icon")]
        }, this.getPTOptions(t, n, "itemIcon")),
        label: b({
          class: this.cx("itemLabel")
        }, this.getPTOptions(t, n, "itemLabel")),
        submenuicon: b({
          class: this.cx("submenuIcon")
        }, this.getPTOptions(t, n, "submenuIcon"))
      };
    }
  },
  computed: {
    calculateAriaSetSize: function() {
      var t = this;
      return this.items.filter(function(n) {
        return t.isItemVisible(n) && t.getItemProp(n, "separator");
      });
    },
    getAriaSetSize: function() {
      var t = this;
      return this.items.filter(function(n) {
        return t.isItemVisible(n) && !t.getItemProp(n, "separator");
      }).length;
    }
  },
  components: {
    AngleRightIcon: jt,
    AngleDownIcon: Vn
  },
  directives: {
    ripple: pt
  }
}, Tr = ["id", "aria-label", "aria-disabled", "aria-expanded", "aria-haspopup", "aria-level", "aria-setsize", "aria-posinset", "data-p-active", "data-p-focused", "data-p-disabled"], Or = ["onClick", "onMouseenter", "onMousemove"], Ar = ["href", "target"], Er = ["id"], jr = ["id"];
function Mr(e, t, n, o, r, i) {
  var a = X("MenubarSub", !0), u = dt("ripple");
  return f(), y("ul", b({
    class: n.level === 0 ? e.cx("rootList") : e.cx("submenu")
  }, n.level === 0 ? e.ptm("rootList") : e.ptm("submenu")), [(f(!0), y(be, null, ct(n.items, function(s, l) {
    return f(), y(be, {
      key: i.getItemKey(s)
    }, [i.isItemVisible(s) && !i.getItemProp(s, "separator") ? (f(), y("li", b({
      key: 0,
      id: i.getItemId(s),
      style: i.getItemProp(s, "style"),
      class: [e.cx("item", {
        processedItem: s
      }), i.getItemProp(s, "class")],
      role: "menuitem",
      "aria-label": i.getItemLabel(s),
      "aria-disabled": i.isItemDisabled(s) || void 0,
      "aria-expanded": i.isItemGroup(s) ? i.isItemActive(s) : void 0,
      "aria-haspopup": i.isItemGroup(s) && !i.getItemProp(s, "to") ? "menu" : void 0,
      "aria-level": n.level + 1,
      "aria-setsize": i.getAriaSetSize,
      "aria-posinset": i.getAriaPosInset(l),
      ref_for: !0
    }, i.getPTOptions(s, l, "item"), {
      "data-p-active": i.isItemActive(s),
      "data-p-focused": i.isItemFocused(s),
      "data-p-disabled": i.isItemDisabled(s)
    }), [v("div", b({
      class: e.cx("itemContent"),
      onClick: function(c) {
        return i.onItemClick(c, s);
      },
      onMouseenter: function(c) {
        return i.onItemMouseEnter(c, s);
      },
      onMousemove: function(c) {
        return i.onItemMouseMove(c, s);
      },
      ref_for: !0
    }, i.getPTOptions(s, l, "itemContent")), [n.templates.item ? (f(), T(le(n.templates.item), {
      key: 1,
      item: s.item,
      root: n.root,
      hasSubmenu: i.getItemProp(s, "items"),
      label: i.getItemLabel(s),
      props: i.getMenuItemProps(s, l)
    }, null, 8, ["item", "root", "hasSubmenu", "label", "props"])) : De((f(), y("a", b({
      key: 0,
      href: i.getItemProp(s, "url"),
      class: e.cx("itemLink"),
      target: i.getItemProp(s, "target"),
      tabindex: "-1",
      ref_for: !0
    }, i.getPTOptions(s, l, "itemLink")), [n.templates.itemicon ? (f(), T(le(n.templates.itemicon), {
      key: 0,
      item: s.item,
      class: Y(e.cx("itemIcon"))
    }, null, 8, ["item", "class"])) : i.getItemProp(s, "icon") ? (f(), y("span", b({
      key: 1,
      class: [e.cx("itemIcon"), i.getItemProp(s, "icon")],
      ref_for: !0
    }, i.getPTOptions(s, l, "itemIcon")), null, 16)) : P("", !0), v("span", b({
      id: i.getItemLabelId(s),
      class: e.cx("itemLabel"),
      ref_for: !0
    }, i.getPTOptions(s, l, "itemLabel")), R(i.getItemLabel(s)), 17, Er), i.getItemProp(s, "items") ? (f(), y(be, {
      key: 2
    }, [n.templates.submenuicon ? (f(), T(le(n.templates.submenuicon), {
      key: 0,
      root: n.root,
      active: i.isItemActive(s),
      class: Y(e.cx("submenuIcon"))
    }, null, 8, ["root", "active", "class"])) : (f(), T(le(n.root ? "AngleDownIcon" : "AngleRightIcon"), b({
      key: 1,
      class: e.cx("submenuIcon"),
      ref_for: !0
    }, i.getPTOptions(s, l, "submenuIcon")), null, 16, ["class"]))], 64)) : P("", !0)], 16, Ar)), [[u]])], 16, Or), i.isItemVisible(s) && i.isItemGroup(s) ? (f(), T(a, {
      key: 0,
      id: i.getItemId(s) + "_list",
      menuId: n.menuId,
      role: "menu",
      style: bo(e.sx("submenu", !0, {
        processedItem: s
      })),
      focusedItemId: n.focusedItemId,
      items: s.items,
      mobileActive: n.mobileActive,
      activeItemPath: n.activeItemPath,
      templates: n.templates,
      level: n.level + 1,
      "aria-labelledby": i.getItemLabelId(s),
      pt: e.pt,
      unstyled: e.unstyled,
      onItemClick: t[0] || (t[0] = function(d) {
        return e.$emit("item-click", d);
      }),
      onItemMouseenter: t[1] || (t[1] = function(d) {
        return e.$emit("item-mouseenter", d);
      }),
      onItemMousemove: t[2] || (t[2] = function(d) {
        return e.$emit("item-mousemove", d);
      })
    }, null, 8, ["id", "menuId", "style", "focusedItemId", "items", "mobileActive", "activeItemPath", "templates", "level", "aria-labelledby", "pt", "unstyled"])) : P("", !0)], 16, Tr)) : P("", !0), i.isItemVisible(s) && i.getItemProp(s, "separator") ? (f(), y("li", b({
      key: 1,
      id: i.getItemId(s),
      class: [e.cx("separator"), i.getItemProp(s, "class")],
      style: i.getItemProp(s, "style"),
      role: "separator",
      ref_for: !0
    }, e.ptm("separator")), null, 16, jr)) : P("", !0)], 64);
  }), 128))], 16);
}
Kn.render = Mr;
var Nn = {
  name: "Menubar",
  extends: Lr,
  inheritAttrs: !1,
  emits: ["focus", "blur"],
  matchMediaListener: null,
  data: function() {
    return {
      mobileActive: !1,
      focused: !1,
      focusedItemInfo: {
        index: -1,
        level: 0,
        parentKey: ""
      },
      activeItemPath: [],
      dirty: !1,
      query: null,
      queryMatches: !1
    };
  },
  watch: {
    activeItemPath: function(t) {
      w(t) ? (this.bindOutsideClickListener(), this.bindResizeListener()) : (this.unbindOutsideClickListener(), this.unbindResizeListener());
    }
  },
  outsideClickListener: null,
  container: null,
  menubar: null,
  mounted: function() {
    this.bindMatchMediaListener();
  },
  beforeUnmount: function() {
    this.mobileActive = !1, this.unbindOutsideClickListener(), this.unbindResizeListener(), this.unbindMatchMediaListener(), this.container && Ae.clear(this.container), this.container = null;
  },
  methods: {
    getItemProp: function(t, n) {
      return t ? F(t[n]) : void 0;
    },
    getItemLabel: function(t) {
      return this.getItemProp(t, "label");
    },
    isItemDisabled: function(t) {
      return this.getItemProp(t, "disabled");
    },
    isItemVisible: function(t) {
      return this.getItemProp(t, "visible") !== !1;
    },
    isItemGroup: function(t) {
      return w(this.getItemProp(t, "items"));
    },
    isItemSeparator: function(t) {
      return this.getItemProp(t, "separator");
    },
    getProccessedItemLabel: function(t) {
      return t ? this.getItemLabel(t.item) : void 0;
    },
    isProccessedItemGroup: function(t) {
      return t && w(t.items);
    },
    toggle: function(t) {
      var n = this;
      this.mobileActive ? (this.mobileActive = !1, Ae.clear(this.menubar), this.hide()) : (this.mobileActive = !0, Ae.set("menu", this.menubar, this.$primevue.config.zIndex.menu), setTimeout(function() {
        n.show();
      }, 1)), this.bindOutsideClickListener(), t.preventDefault();
    },
    show: function() {
      q(this.menubar);
    },
    hide: function(t, n) {
      var o = this;
      this.mobileActive && (this.mobileActive = !1, setTimeout(function() {
        q(o.$refs.menubutton);
      }, 0)), this.activeItemPath = [], this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      }, n && q(this.menubar), this.dirty = !1;
    },
    onFocus: function(t) {
      this.focused = !0, this.focusedItemInfo = this.focusedItemInfo.index !== -1 ? this.focusedItemInfo : {
        index: this.findFirstFocusedItemIndex(),
        level: 0,
        parentKey: ""
      }, this.$emit("focus", t);
    },
    onBlur: function(t) {
      this.focused = !1, this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      }, this.searchValue = "", this.dirty = !1, this.$emit("blur", t);
    },
    onKeyDown: function(t) {
      var n = t.metaKey || t.ctrlKey;
      switch (t.code) {
        case "ArrowDown":
          this.onArrowDownKey(t);
          break;
        case "ArrowUp":
          this.onArrowUpKey(t);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(t);
          break;
        case "ArrowRight":
          this.onArrowRightKey(t);
          break;
        case "Home":
          this.onHomeKey(t);
          break;
        case "End":
          this.onEndKey(t);
          break;
        case "Space":
          this.onSpaceKey(t);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(t);
          break;
        case "Escape":
          this.onEscapeKey(t);
          break;
        case "Tab":
          this.onTabKey(t);
          break;
        case "PageDown":
        case "PageUp":
        case "Backspace":
        case "ShiftLeft":
        case "ShiftRight":
          break;
        default:
          !n && wn(t.key) && this.searchItems(t, t.key);
          break;
      }
    },
    onItemChange: function(t, n) {
      var o = t.processedItem, r = t.isFocus;
      if (!G(o)) {
        var i = o.index, a = o.key, u = o.level, s = o.parentKey, l = o.items, d = w(l), c = this.activeItemPath.filter(function(m) {
          return m.parentKey !== s && m.parentKey !== a;
        });
        d && c.push(o), this.focusedItemInfo = {
          index: i,
          level: u,
          parentKey: s
        }, d && (this.dirty = !0), r && q(this.menubar), !(n === "hover" && this.queryMatches) && (this.activeItemPath = c);
      }
    },
    onItemClick: function(t) {
      var n = t.originalEvent, o = t.processedItem, r = this.isProccessedItemGroup(o), i = G(o.parent), a = this.isSelected(o);
      if (a) {
        var u = o.index, s = o.key, l = o.level, d = o.parentKey;
        this.activeItemPath = this.activeItemPath.filter(function(m) {
          return s !== m.key && s.startsWith(m.key);
        }), this.focusedItemInfo = {
          index: u,
          level: l,
          parentKey: d
        }, this.dirty = !i, q(this.menubar);
      } else if (r)
        this.onItemChange(t);
      else {
        var c = i ? o : this.activeItemPath.find(function(m) {
          return m.parentKey === "";
        });
        this.hide(n), this.changeFocusedItemIndex(n, c ? c.index : -1), this.mobileActive = !1, q(this.menubar);
      }
    },
    onItemMouseEnter: function(t) {
      this.dirty && this.onItemChange(t, "hover");
    },
    onItemMouseMove: function(t) {
      this.focused && this.changeFocusedItemIndex(t, t.processedItem.index);
    },
    menuButtonClick: function(t) {
      this.toggle(t);
    },
    menuButtonKeydown: function(t) {
      (t.code === "Enter" || t.code === "NumpadEnter" || t.code === "Space") && this.menuButtonClick(t);
    },
    onArrowDownKey: function(t) {
      var n = this.visibleItems[this.focusedItemInfo.index], o = n ? G(n.parent) : null;
      if (o) {
        var r = this.isProccessedItemGroup(n);
        r && (this.onItemChange({
          originalEvent: t,
          processedItem: n
        }), this.focusedItemInfo = {
          index: -1,
          parentKey: n.key
        }, this.onArrowRightKey(t));
      } else {
        var i = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();
        this.changeFocusedItemIndex(t, i);
      }
      t.preventDefault();
    },
    onArrowUpKey: function(t) {
      var n = this, o = this.visibleItems[this.focusedItemInfo.index], r = G(o.parent);
      if (r) {
        var i = this.isProccessedItemGroup(o);
        if (i) {
          this.onItemChange({
            originalEvent: t,
            processedItem: o
          }), this.focusedItemInfo = {
            index: -1,
            parentKey: o.key
          };
          var a = this.findLastItemIndex();
          this.changeFocusedItemIndex(t, a);
        }
      } else {
        var u = this.activeItemPath.find(function(l) {
          return l.key === o.parentKey;
        });
        if (this.focusedItemInfo.index === 0)
          this.focusedItemInfo = {
            index: -1,
            parentKey: u ? u.parentKey : ""
          }, this.searchValue = "", this.onArrowLeftKey(t), this.activeItemPath = this.activeItemPath.filter(function(l) {
            return l.parentKey !== n.focusedItemInfo.parentKey;
          });
        else {
          var s = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
          this.changeFocusedItemIndex(t, s);
        }
      }
      t.preventDefault();
    },
    onArrowLeftKey: function(t) {
      var n = this, o = this.visibleItems[this.focusedItemInfo.index], r = o ? this.activeItemPath.find(function(a) {
        return a.key === o.parentKey;
      }) : null;
      if (r)
        this.onItemChange({
          originalEvent: t,
          processedItem: r
        }), this.activeItemPath = this.activeItemPath.filter(function(a) {
          return a.parentKey !== n.focusedItemInfo.parentKey;
        }), t.preventDefault();
      else {
        var i = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemIndex(t, i), t.preventDefault();
      }
    },
    onArrowRightKey: function(t) {
      var n = this.visibleItems[this.focusedItemInfo.index], o = n ? this.activeItemPath.find(function(a) {
        return a.key === n.parentKey;
      }) : null;
      if (o) {
        var r = this.isProccessedItemGroup(n);
        r && (this.onItemChange({
          originalEvent: t,
          processedItem: n
        }), this.focusedItemInfo = {
          index: -1,
          parentKey: n.key
        }, this.onArrowDownKey(t));
      } else {
        var i = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();
        this.changeFocusedItemIndex(t, i), t.preventDefault();
      }
    },
    onHomeKey: function(t) {
      this.changeFocusedItemIndex(t, this.findFirstItemIndex()), t.preventDefault();
    },
    onEndKey: function(t) {
      this.changeFocusedItemIndex(t, this.findLastItemIndex()), t.preventDefault();
    },
    onEnterKey: function(t) {
      if (this.focusedItemInfo.index !== -1) {
        var n = ve(this.menubar, 'li[id="'.concat("".concat(this.focusedItemId), '"]')), o = n && ve(n, 'a[data-pc-section="itemlink"]');
        o ? o.click() : n && n.click();
        var r = this.visibleItems[this.focusedItemInfo.index], i = this.isProccessedItemGroup(r);
        !i && (this.focusedItemInfo.index = this.findFirstFocusedItemIndex());
      }
      t.preventDefault();
    },
    onSpaceKey: function(t) {
      this.onEnterKey(t);
    },
    onEscapeKey: function(t) {
      if (this.focusedItemInfo.level !== 0) {
        var n = this.focusedItemInfo;
        this.hide(t, !1), this.focusedItemInfo = {
          index: Number(n.parentKey.split("_")[0]),
          level: 0,
          parentKey: ""
        };
      }
      t.preventDefault();
    },
    onTabKey: function(t) {
      if (this.focusedItemInfo.index !== -1) {
        var n = this.visibleItems[this.focusedItemInfo.index], o = this.isProccessedItemGroup(n);
        !o && this.onItemChange({
          originalEvent: t,
          processedItem: n
        });
      }
      this.hide();
    },
    bindOutsideClickListener: function() {
      var t = this;
      this.outsideClickListener || (this.outsideClickListener = function(n) {
        var o = t.container && !t.container.contains(n.target), r = !(t.target && (t.target === n.target || t.target.contains(n.target)));
        o && r && t.hide();
      }, document.addEventListener("click", this.outsideClickListener, !0));
    },
    unbindOutsideClickListener: function() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener, !0), this.outsideClickListener = null);
    },
    bindResizeListener: function() {
      var t = this;
      this.resizeListener || (this.resizeListener = function(n) {
        Lt() || t.hide(n, !0), t.mobileActive = !1;
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener: function() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    },
    bindMatchMediaListener: function() {
      var t = this;
      if (!this.matchMediaListener) {
        var n = matchMedia("(max-width: ".concat(this.breakpoint, ")"));
        this.query = n, this.queryMatches = n.matches, this.matchMediaListener = function() {
          t.queryMatches = n.matches, t.mobileActive = !1;
        }, this.query.addEventListener("change", this.matchMediaListener);
      }
    },
    unbindMatchMediaListener: function() {
      this.matchMediaListener && (this.query.removeEventListener("change", this.matchMediaListener), this.matchMediaListener = null);
    },
    isItemMatched: function(t) {
      var n;
      return this.isValidItem(t) && ((n = this.getProccessedItemLabel(t)) === null || n === void 0 ? void 0 : n.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()));
    },
    isValidItem: function(t) {
      return !!t && !this.isItemDisabled(t.item) && !this.isItemSeparator(t.item) && this.isItemVisible(t.item);
    },
    isValidSelectedItem: function(t) {
      return this.isValidItem(t) && this.isSelected(t);
    },
    isSelected: function(t) {
      return this.activeItemPath.some(function(n) {
        return n.key === t.key;
      });
    },
    findFirstItemIndex: function() {
      var t = this;
      return this.visibleItems.findIndex(function(n) {
        return t.isValidItem(n);
      });
    },
    findLastItemIndex: function() {
      var t = this;
      return lt(this.visibleItems, function(n) {
        return t.isValidItem(n);
      });
    },
    findNextItemIndex: function(t) {
      var n = this, o = t < this.visibleItems.length - 1 ? this.visibleItems.slice(t + 1).findIndex(function(r) {
        return n.isValidItem(r);
      }) : -1;
      return o > -1 ? o + t + 1 : t;
    },
    findPrevItemIndex: function(t) {
      var n = this, o = t > 0 ? lt(this.visibleItems.slice(0, t), function(r) {
        return n.isValidItem(r);
      }) : -1;
      return o > -1 ? o : t;
    },
    findSelectedItemIndex: function() {
      var t = this;
      return this.visibleItems.findIndex(function(n) {
        return t.isValidSelectedItem(n);
      });
    },
    findFirstFocusedItemIndex: function() {
      var t = this.findSelectedItemIndex();
      return t < 0 ? this.findFirstItemIndex() : t;
    },
    findLastFocusedItemIndex: function() {
      var t = this.findSelectedItemIndex();
      return t < 0 ? this.findLastItemIndex() : t;
    },
    searchItems: function(t, n) {
      var o = this;
      this.searchValue = (this.searchValue || "") + n;
      var r = -1, i = !1;
      return this.focusedItemInfo.index !== -1 ? (r = this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(a) {
        return o.isItemMatched(a);
      }), r = r === -1 ? this.visibleItems.slice(0, this.focusedItemInfo.index).findIndex(function(a) {
        return o.isItemMatched(a);
      }) : r + this.focusedItemInfo.index) : r = this.visibleItems.findIndex(function(a) {
        return o.isItemMatched(a);
      }), r !== -1 && (i = !0), r === -1 && this.focusedItemInfo.index === -1 && (r = this.findFirstFocusedItemIndex()), r !== -1 && this.changeFocusedItemIndex(t, r), this.searchTimeout && clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout(function() {
        o.searchValue = "", o.searchTimeout = null;
      }, 500), i;
    },
    changeFocusedItemIndex: function(t, n) {
      this.focusedItemInfo.index !== n && (this.focusedItemInfo.index = n, this.scrollInView());
    },
    scrollInView: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1, n = t !== -1 ? "".concat(this.$id, "_").concat(t) : this.focusedItemId, o = ve(this.menubar, 'li[id="'.concat(n, '"]'));
      o && o.scrollIntoView && o.scrollIntoView({
        block: "nearest",
        inline: "start"
      });
    },
    createProcessedItems: function(t) {
      var n = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "", a = [];
      return t && t.forEach(function(u, s) {
        var l = (i !== "" ? i + "_" : "") + s, d = {
          item: u,
          index: s,
          level: o,
          key: l,
          parent: r,
          parentKey: i
        };
        d.items = n.createProcessedItems(u.items, o + 1, d, l), a.push(d);
      }), a;
    },
    containerRef: function(t) {
      this.container = t;
    },
    menubarRef: function(t) {
      this.menubar = t ? t.$el : void 0;
    }
  },
  computed: {
    processedItems: function() {
      return this.createProcessedItems(this.model || []);
    },
    visibleItems: function() {
      var t = this, n = this.activeItemPath.find(function(o) {
        return o.key === t.focusedItemInfo.parentKey;
      });
      return n ? n.items : this.processedItems;
    },
    focusedItemId: function() {
      return this.focusedItemInfo.index !== -1 ? "".concat(this.$id).concat(w(this.focusedItemInfo.parentKey) ? "_" + this.focusedItemInfo.parentKey : "", "_").concat(this.focusedItemInfo.index) : null;
    }
  },
  components: {
    MenubarSub: Kn,
    BarsIcon: Mn
  }
};
function Ye(e) {
  "@babel/helpers - typeof";
  return Ye = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ye(e);
}
function dn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function cn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dn(Object(n), !0).forEach(function(o) {
      Vr(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dn(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function Vr(e, t, n) {
  return (t = Kr(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Kr(e) {
  var t = Nr(e, "string");
  return Ye(t) == "symbol" ? t : t + "";
}
function Nr(e, t) {
  if (Ye(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (Ye(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var zr = ["aria-haspopup", "aria-expanded", "aria-controls", "aria-label"];
function Dr(e, t, n, o, r, i) {
  var a = X("BarsIcon"), u = X("MenubarSub");
  return f(), y("div", b({
    ref: i.containerRef,
    class: e.cx("root")
  }, e.ptmi("root")), [e.$slots.start ? (f(), y("div", b({
    key: 0,
    class: e.cx("start")
  }, e.ptm("start")), [V(e.$slots, "start")], 16)) : P("", !0), V(e.$slots, e.$slots.button ? "button" : "menubutton", {
    id: e.$id,
    class: Y(e.cx("button")),
    toggleCallback: function(l) {
      return i.menuButtonClick(l);
    }
  }, function() {
    var s;
    return [e.model && e.model.length > 0 ? (f(), y("a", b({
      key: 0,
      ref: "menubutton",
      role: "button",
      tabindex: "0",
      class: e.cx("button"),
      "aria-haspopup": !!(e.model.length && e.model.length > 0),
      "aria-expanded": r.mobileActive,
      "aria-controls": e.$id,
      "aria-label": (s = e.$primevue.config.locale.aria) === null || s === void 0 ? void 0 : s.navigation,
      onClick: t[0] || (t[0] = function(l) {
        return i.menuButtonClick(l);
      }),
      onKeydown: t[1] || (t[1] = function(l) {
        return i.menuButtonKeydown(l);
      })
    }, cn(cn({}, e.buttonProps), e.ptm("button"))), [V(e.$slots, e.$slots.buttonicon ? "buttonicon" : "menubuttonicon", {}, function() {
      return [O(a, go(vo(e.ptm("buttonicon"))), null, 16)];
    })], 16, zr)) : P("", !0)];
  }), O(u, {
    ref: i.menubarRef,
    id: e.$id + "_list",
    role: "menubar",
    items: i.processedItems,
    templates: e.$slots,
    root: !0,
    mobileActive: r.mobileActive,
    tabindex: "0",
    "aria-activedescendant": r.focused ? i.focusedItemId : void 0,
    menuId: e.$id,
    focusedItemId: r.focused ? i.focusedItemId : void 0,
    activeItemPath: r.activeItemPath,
    level: 0,
    "aria-labelledby": e.ariaLabelledby,
    "aria-label": e.ariaLabel,
    pt: e.pt,
    unstyled: e.unstyled,
    onFocus: i.onFocus,
    onBlur: i.onBlur,
    onKeydown: i.onKeyDown,
    onItemClick: i.onItemClick,
    onItemMouseenter: i.onItemMouseEnter,
    onItemMousemove: i.onItemMouseMove
  }, null, 8, ["id", "items", "templates", "mobileActive", "aria-activedescendant", "menuId", "focusedItemId", "activeItemPath", "aria-labelledby", "aria-label", "pt", "unstyled", "onFocus", "onBlur", "onKeydown", "onItemClick", "onItemMouseenter", "onItemMousemove"]), e.$slots.end ? (f(), y("div", b({
    key: 1,
    class: e.cx("end")
  }, e.ptm("end")), [V(e.$slots, "end")], 16)) : P("", !0)], 16);
}
Nn.render = Dr;
function Xe(e) {
  "@babel/helpers - typeof";
  return Xe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xe(e);
}
function Fr(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Rr(e, t) {
  for (var n = 0; n < t.length; n++) {
    var o = t[n];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Wr(o.key), o);
  }
}
function Br(e, t, n) {
  return t && Rr(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Wr(e) {
  var t = Ur(e, "string");
  return Xe(t) == "symbol" ? t : t + "";
}
function Ur(e, t) {
  if (Xe(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (Xe(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Hr = /* @__PURE__ */ function() {
  function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
    };
    Fr(this, e), this.element = t, this.listener = n;
  }
  return Br(e, [{
    key: "bindScrollListener",
    value: function() {
      this.scrollableParents = No(this.element);
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
}(), Gr = Tt(), zn = {
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
    this.mounted = Sn();
  },
  computed: {
    inline: function() {
      return this.disabled || this.appendTo === "self";
    }
  }
};
function Zr(e, t, n, o, r, i) {
  return i.inline ? V(e.$slots, "default", {
    key: 0
  }) : r.mounted ? (f(), T(yo, {
    key: 1,
    to: n.appendTo
  }, [V(e.$slots, "default")], 8, ["to"])) : P("", !0);
}
zn.render = Zr;
var qr = ({ dt: e }) => `
.p-tieredmenu {
    background: ${e("tieredmenu.background")};
    color: ${e("tieredmenu.color")};
    border: 1px solid ${e("tieredmenu.border.color")};
    border-radius: ${e("tieredmenu.border.radius")};
    min-width: 12.5rem;
}

.p-tieredmenu-root-list,
.p-tieredmenu-submenu {
    margin: 0;
    padding: ${e("tieredmenu.list.padding")};
    list-style: none;
    outline: 0 none;
    display: flex;
    flex-direction: column;
    gap: ${e("tieredmenu.list.gap")};
}

.p-tieredmenu-submenu {
    position: absolute;
    min-width: 100%;
    z-index: 1;
    background: ${e("tieredmenu.background")};
    color: ${e("tieredmenu.color")};
    border: 1px solid ${e("tieredmenu.border.color")};
    border-radius: ${e("tieredmenu.border.radius")};
    box-shadow: ${e("tieredmenu.shadow")};
}

.p-tieredmenu-item {
    position: relative;
}

.p-tieredmenu-item-content {
    transition: background ${e("tieredmenu.transition.duration")}, color ${e("tieredmenu.transition.duration")};
    border-radius: ${e("tieredmenu.item.border.radius")};
    color: ${e("tieredmenu.item.color")};
}

.p-tieredmenu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${e("tieredmenu.item.padding")};
    gap: ${e("tieredmenu.item.gap")};
    user-select: none;
    outline: 0 none;
}

.p-tieredmenu-item-label {
    line-height: 1;
}

.p-tieredmenu-item-icon {
    color: ${e("tieredmenu.item.icon.color")};
}

.p-tieredmenu-submenu-icon {
    color: ${e("tieredmenu.submenu.icon.color")};
    margin-left: auto;
    font-size: ${e("tieredmenu.submenu.icon.size")};
    width: ${e("tieredmenu.submenu.icon.size")};
    height: ${e("tieredmenu.submenu.icon.size")};
}

.p-tieredmenu-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content {
    color: ${e("tieredmenu.item.focus.color")};
    background: ${e("tieredmenu.item.focus.background")};
}

.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
    color: ${e("tieredmenu.item.icon.focus.color")};
}

.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
    color: ${e("tieredmenu.submenu.icon.focus.color")};
}

.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover {
    color: ${e("tieredmenu.item.focus.color")};
    background: ${e("tieredmenu.item.focus.background")};
}

.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-item-icon {
    color: ${e("tieredmenu.item.icon.focus.color")};
}

.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-submenu-icon {
    color: ${e("tieredmenu.submenu.icon.focus.color")};
}

.p-tieredmenu-item-active > .p-tieredmenu-item-content {
    color: ${e("tieredmenu.item.active.color")};
    background: ${e("tieredmenu.item.active.background")};
}

.p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
    color: ${e("tieredmenu.item.icon.active.color")};
}

.p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
    color: ${e("tieredmenu.submenu.icon.active.color")};
}

.p-tieredmenu-separator {
    border-block-start: 1px solid ${e("tieredmenu.separator.border.color")};
}

.p-tieredmenu-overlay {
    box-shadow: ${e("tieredmenu.shadow")};
}

.p-tieredmenu-enter-from,
.p-tieredmenu-leave-active {
    opacity: 0;
}

.p-tieredmenu-enter-active {
    transition: opacity 250ms;
}

.p-tieredmenu-mobile .p-tieredmenu-submenu {
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-inline-start: ${e("tieredmenu.submenu.mobile.indent")};
    padding-inline-end: 0;
}

.p-tieredmenu-mobile .p-tieredmenu-submenu:dir(rtl) {
    padding-inline-start: 0;
    padding-inline-end: ${e("tieredmenu.submenu.mobile.indent")};
}

.p-tieredmenu-mobile .p-tieredmenu-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-tieredmenu-mobile .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
    transform: rotate(-90deg);
}
`, Yr = {
  submenu: function(t) {
    var n = t.instance, o = t.processedItem;
    return {
      display: n.isItemActive(o) ? "flex" : "none"
    };
  }
}, Xr = {
  root: function(t) {
    var n = t.props, o = t.instance;
    return ["p-tieredmenu p-component", {
      "p-tieredmenu-overlay": n.popup,
      "p-tieredmenu-mobile": o.queryMatches
    }];
  },
  start: "p-tieredmenu-start",
  rootList: "p-tieredmenu-root-list",
  item: function(t) {
    var n = t.instance, o = t.processedItem;
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
}, Jr = K.extend({
  name: "tieredmenu",
  style: qr,
  classes: Xr,
  inlineStyles: Yr
}), Qr = {
  name: "BaseTieredMenu",
  extends: ee,
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
  style: Jr,
  provide: function() {
    return {
      $pcTieredMenu: this,
      $parentInstance: this
    };
  }
}, Dn = {
  name: "TieredMenuSub",
  hostName: "TieredMenu",
  extends: ee,
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
    getItemId: function(t) {
      return "".concat(this.menuId, "_").concat(t.key);
    },
    getItemKey: function(t) {
      return this.getItemId(t);
    },
    getItemProp: function(t, n, o) {
      return t && t.item ? F(t.item[n], o) : void 0;
    },
    getItemLabel: function(t) {
      return this.getItemProp(t, "label");
    },
    getItemLabelId: function(t) {
      return "".concat(this.menuId, "_").concat(t.key, "_label");
    },
    getPTOptions: function(t, n, o) {
      return this.ptm(o, {
        context: {
          item: t.item,
          index: n,
          active: this.isItemActive(t),
          focused: this.isItemFocused(t),
          disabled: this.isItemDisabled(t)
        }
      });
    },
    isItemActive: function(t) {
      return this.activeItemPath.some(function(n) {
        return n.key === t.key;
      });
    },
    isItemVisible: function(t) {
      return this.getItemProp(t, "visible") !== !1;
    },
    isItemDisabled: function(t) {
      return this.getItemProp(t, "disabled");
    },
    isItemFocused: function(t) {
      return this.focusedItemId === this.getItemId(t);
    },
    isItemGroup: function(t) {
      return w(t.items);
    },
    onEnter: function() {
      zo(this.container, this.level);
    },
    onItemClick: function(t, n) {
      this.getItemProp(n, "command", {
        originalEvent: t,
        item: n.item
      }), this.$emit("item-click", {
        originalEvent: t,
        processedItem: n,
        isFocus: !0
      });
    },
    onItemMouseEnter: function(t, n) {
      this.$emit("item-mouseenter", {
        originalEvent: t,
        processedItem: n
      });
    },
    onItemMouseMove: function(t, n) {
      this.$emit("item-mousemove", {
        originalEvent: t,
        processedItem: n
      });
    },
    getAriaSetSize: function() {
      var t = this;
      return this.items.filter(function(n) {
        return t.isItemVisible(n) && !t.getItemProp(n, "separator");
      }).length;
    },
    getAriaPosInset: function(t) {
      var n = this;
      return t - this.items.slice(0, t).filter(function(o) {
        return n.isItemVisible(o) && n.getItemProp(o, "separator");
      }).length + 1;
    },
    getMenuItemProps: function(t, n) {
      return {
        action: b({
          class: this.cx("itemLink"),
          tabindex: -1
        }, this.getPTOptions(t, n, "itemLink")),
        icon: b({
          class: [this.cx("itemIcon"), this.getItemProp(t, "icon")]
        }, this.getPTOptions(t, n, "itemIcon")),
        label: b({
          class: this.cx("itemLabel")
        }, this.getPTOptions(t, n, "itemLabel")),
        submenuicon: b({
          class: this.cx("submenuIcon")
        }, this.getPTOptions(t, n, "submenuIcon"))
      };
    },
    containerRef: function(t) {
      this.container = t;
    }
  },
  components: {
    AngleRightIcon: jt
  },
  directives: {
    ripple: pt
  }
}, es = ["tabindex"], ts = ["id", "aria-label", "aria-disabled", "aria-expanded", "aria-haspopup", "aria-level", "aria-setsize", "aria-posinset", "data-p-active", "data-p-focused", "data-p-disabled"], ns = ["onClick", "onMouseenter", "onMousemove"], os = ["href", "target"], is = ["id"], rs = ["id"];
function ss(e, t, n, o, r, i) {
  var a = X("AngleRightIcon"), u = X("TieredMenuSub", !0), s = dt("ripple");
  return f(), T(xt, b({
    name: "p-tieredmenu",
    onEnter: i.onEnter
  }, e.ptm("menu.transition")), {
    default: L(function() {
      return [n.level === 0 || n.visible ? (f(), y("ul", {
        key: 0,
        ref: i.containerRef,
        tabindex: n.tabindex
      }, [(f(!0), y(be, null, ct(n.items, function(l, d) {
        return f(), y(be, {
          key: i.getItemKey(l)
        }, [i.isItemVisible(l) && !i.getItemProp(l, "separator") ? (f(), y("li", b({
          key: 0,
          id: i.getItemId(l),
          style: i.getItemProp(l, "style"),
          class: [e.cx("item", {
            processedItem: l
          }), i.getItemProp(l, "class")],
          role: "menuitem",
          "aria-label": i.getItemLabel(l),
          "aria-disabled": i.isItemDisabled(l) || void 0,
          "aria-expanded": i.isItemGroup(l) ? i.isItemActive(l) : void 0,
          "aria-haspopup": i.isItemGroup(l) && !i.getItemProp(l, "to") ? "menu" : void 0,
          "aria-level": n.level + 1,
          "aria-setsize": i.getAriaSetSize(),
          "aria-posinset": i.getAriaPosInset(d),
          ref_for: !0
        }, i.getPTOptions(l, d, "item"), {
          "data-p-active": i.isItemActive(l),
          "data-p-focused": i.isItemFocused(l),
          "data-p-disabled": i.isItemDisabled(l)
        }), [v("div", b({
          class: e.cx("itemContent"),
          onClick: function(m) {
            return i.onItemClick(m, l);
          },
          onMouseenter: function(m) {
            return i.onItemMouseEnter(m, l);
          },
          onMousemove: function(m) {
            return i.onItemMouseMove(m, l);
          },
          ref_for: !0
        }, i.getPTOptions(l, d, "itemContent")), [n.templates.item ? (f(), T(le(n.templates.item), {
          key: 1,
          item: l.item,
          hasSubmenu: i.getItemProp(l, "items"),
          label: i.getItemLabel(l),
          props: i.getMenuItemProps(l, d)
        }, null, 8, ["item", "hasSubmenu", "label", "props"])) : De((f(), y("a", b({
          key: 0,
          href: i.getItemProp(l, "url"),
          class: e.cx("itemLink"),
          target: i.getItemProp(l, "target"),
          tabindex: "-1",
          ref_for: !0
        }, i.getPTOptions(l, d, "itemLink")), [n.templates.itemicon ? (f(), T(le(n.templates.itemicon), {
          key: 0,
          item: l.item,
          class: Y(e.cx("itemIcon"))
        }, null, 8, ["item", "class"])) : i.getItemProp(l, "icon") ? (f(), y("span", b({
          key: 1,
          class: [e.cx("itemIcon"), i.getItemProp(l, "icon")],
          ref_for: !0
        }, i.getPTOptions(l, d, "itemIcon")), null, 16)) : P("", !0), v("span", b({
          id: i.getItemLabelId(l),
          class: e.cx("itemLabel"),
          ref_for: !0
        }, i.getPTOptions(l, d, "itemLabel")), R(i.getItemLabel(l)), 17, is), i.getItemProp(l, "items") ? (f(), y(be, {
          key: 2
        }, [n.templates.submenuicon ? (f(), T(le(n.templates.submenuicon), b({
          key: 0,
          class: e.cx("submenuIcon"),
          active: i.isItemActive(l),
          ref_for: !0
        }, i.getPTOptions(l, d, "submenuIcon")), null, 16, ["class", "active"])) : (f(), T(a, b({
          key: 1,
          class: e.cx("submenuIcon"),
          ref_for: !0
        }, i.getPTOptions(l, d, "submenuIcon")), null, 16, ["class"]))], 64)) : P("", !0)], 16, os)), [[s]])], 16, ns), i.isItemVisible(l) && i.isItemGroup(l) ? (f(), T(u, b({
          key: 0,
          id: i.getItemId(l) + "_list",
          class: e.cx("submenu"),
          style: e.sx("submenu", !0, {
            processedItem: l
          }),
          "aria-labelledby": i.getItemLabelId(l),
          role: "menu",
          menuId: n.menuId,
          focusedItemId: n.focusedItemId,
          items: l.items,
          templates: n.templates,
          activeItemPath: n.activeItemPath,
          level: n.level + 1,
          visible: i.isItemActive(l) && i.isItemGroup(l),
          pt: e.pt,
          unstyled: e.unstyled,
          onItemClick: t[0] || (t[0] = function(c) {
            return e.$emit("item-click", c);
          }),
          onItemMouseenter: t[1] || (t[1] = function(c) {
            return e.$emit("item-mouseenter", c);
          }),
          onItemMousemove: t[2] || (t[2] = function(c) {
            return e.$emit("item-mousemove", c);
          }),
          ref_for: !0
        }, e.ptm("submenu")), null, 16, ["id", "class", "style", "aria-labelledby", "menuId", "focusedItemId", "items", "templates", "activeItemPath", "level", "visible", "pt", "unstyled"])) : P("", !0)], 16, ts)) : P("", !0), i.isItemVisible(l) && i.getItemProp(l, "separator") ? (f(), y("li", b({
          key: 1,
          id: i.getItemId(l),
          style: i.getItemProp(l, "style"),
          class: [e.cx("separator"), i.getItemProp(l, "class")],
          role: "separator",
          ref_for: !0
        }, e.ptm("separator")), null, 16, rs)) : P("", !0)], 64);
      }), 128))], 8, es)) : P("", !0)];
    }),
    _: 1
  }, 16, ["onEnter"]);
}
Dn.render = ss;
var Fn = {
  name: "TieredMenu",
  extends: Qr,
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
    activeItemPath: function(t) {
      this.popup || (w(t) ? (this.bindOutsideClickListener(), this.bindResizeListener()) : (this.unbindOutsideClickListener(), this.unbindResizeListener()));
    }
  },
  mounted: function() {
    this.bindMatchMediaListener();
  },
  beforeUnmount: function() {
    this.unbindOutsideClickListener(), this.unbindResizeListener(), this.unbindMatchMediaListener(), this.scrollHandler && (this.scrollHandler.destroy(), this.scrollHandler = null), this.container && this.autoZIndex && Ae.clear(this.container), this.target = null, this.container = null;
  },
  methods: {
    getItemProp: function(t, n) {
      return t ? F(t[n]) : void 0;
    },
    getItemLabel: function(t) {
      return this.getItemProp(t, "label");
    },
    isItemDisabled: function(t) {
      return this.getItemProp(t, "disabled");
    },
    isItemVisible: function(t) {
      return this.getItemProp(t, "visible") !== !1;
    },
    isItemGroup: function(t) {
      return w(this.getItemProp(t, "items"));
    },
    isItemSeparator: function(t) {
      return this.getItemProp(t, "separator");
    },
    getProccessedItemLabel: function(t) {
      return t ? this.getItemLabel(t.item) : void 0;
    },
    isProccessedItemGroup: function(t) {
      return t && w(t.items);
    },
    toggle: function(t) {
      this.visible ? this.hide(t, !0) : this.show(t);
    },
    show: function(t, n) {
      this.popup && (this.$emit("before-show"), this.visible = !0, this.target = this.target || t.currentTarget, this.relatedTarget = t.relatedTarget || null), n && q(this.menubar);
    },
    hide: function(t, n) {
      this.popup && (this.$emit("before-hide"), this.visible = !1), this.activeItemPath = [], this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      }, n && q(this.relatedTarget || this.target || this.menubar), this.dirty = !1;
    },
    onFocus: function(t) {
      this.focused = !0, this.popup || (this.focusedItemInfo = this.focusedItemInfo.index !== -1 ? this.focusedItemInfo : {
        index: this.findFirstFocusedItemIndex(),
        level: 0,
        parentKey: ""
      }), this.$emit("focus", t);
    },
    onBlur: function(t) {
      this.focused = !1, this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      }, this.searchValue = "", this.dirty = !1, this.$emit("blur", t);
    },
    onKeyDown: function(t) {
      if (this.disabled) {
        t.preventDefault();
        return;
      }
      var n = t.metaKey || t.ctrlKey;
      switch (t.code) {
        case "ArrowDown":
          this.onArrowDownKey(t);
          break;
        case "ArrowUp":
          this.onArrowUpKey(t);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(t);
          break;
        case "ArrowRight":
          this.onArrowRightKey(t);
          break;
        case "Home":
          this.onHomeKey(t);
          break;
        case "End":
          this.onEndKey(t);
          break;
        case "Space":
          this.onSpaceKey(t);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(t);
          break;
        case "Escape":
          this.onEscapeKey(t);
          break;
        case "Tab":
          this.onTabKey(t);
          break;
        case "PageDown":
        case "PageUp":
        case "Backspace":
        case "ShiftLeft":
        case "ShiftRight":
          break;
        default:
          !n && wn(t.key) && this.searchItems(t, t.key);
          break;
      }
    },
    onItemChange: function(t, n) {
      var o = t.processedItem, r = t.isFocus;
      if (!G(o)) {
        var i = o.index, a = o.key, u = o.level, s = o.parentKey, l = o.items, d = w(l), c = this.activeItemPath.filter(function(m) {
          return m.parentKey !== s && m.parentKey !== a;
        });
        d && (c.push(o), this.submenuVisible = !0), this.focusedItemInfo = {
          index: i,
          level: u,
          parentKey: s
        }, d && (this.dirty = !0), r && q(this.menubar), !(n === "hover" && this.queryMatches) && (this.activeItemPath = c);
      }
    },
    onOverlayClick: function(t) {
      Gr.emit("overlay-click", {
        originalEvent: t,
        target: this.target
      });
    },
    onItemClick: function(t) {
      var n = t.originalEvent, o = t.processedItem, r = this.isProccessedItemGroup(o), i = G(o.parent), a = this.isSelected(o);
      if (a) {
        var u = o.index, s = o.key, l = o.level, d = o.parentKey;
        this.activeItemPath = this.activeItemPath.filter(function(m) {
          return s !== m.key && s.startsWith(m.key);
        }), this.focusedItemInfo = {
          index: u,
          level: l,
          parentKey: d
        }, this.dirty = !i, q(this.menubar);
      } else if (r)
        this.onItemChange(t);
      else {
        var c = i ? o : this.activeItemPath.find(function(m) {
          return m.parentKey === "";
        });
        this.hide(n), this.changeFocusedItemIndex(n, c ? c.index : -1), q(this.menubar);
      }
    },
    onItemMouseEnter: function(t) {
      this.dirty && this.onItemChange(t, "hover");
    },
    onItemMouseMove: function(t) {
      this.focused && this.changeFocusedItemIndex(t, t.processedItem.index);
    },
    onArrowDownKey: function(t) {
      var n = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();
      this.changeFocusedItemIndex(t, n), t.preventDefault();
    },
    onArrowUpKey: function(t) {
      if (t.altKey) {
        if (this.focusedItemInfo.index !== -1) {
          var n = this.visibleItems[this.focusedItemInfo.index], o = this.isProccessedItemGroup(n);
          !o && this.onItemChange({
            originalEvent: t,
            processedItem: n
          });
        }
        this.popup && this.hide(t, !0), t.preventDefault();
      } else {
        var r = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemIndex(t, r), t.preventDefault();
      }
    },
    onArrowLeftKey: function(t) {
      var n = this, o = this.visibleItems[this.focusedItemInfo.index], r = this.activeItemPath.find(function(a) {
        return a.key === o.parentKey;
      }), i = G(o.parent);
      i || (this.focusedItemInfo = {
        index: -1,
        parentKey: r ? r.parentKey : ""
      }, this.searchValue = "", this.onArrowDownKey(t)), this.activeItemPath = this.activeItemPath.filter(function(a) {
        return a.parentKey !== n.focusedItemInfo.parentKey;
      }), t.preventDefault();
    },
    onArrowRightKey: function(t) {
      var n = this.visibleItems[this.focusedItemInfo.index], o = this.isProccessedItemGroup(n);
      o && (this.onItemChange({
        originalEvent: t,
        processedItem: n
      }), this.focusedItemInfo = {
        index: -1,
        parentKey: n.key
      }, this.searchValue = "", this.onArrowDownKey(t)), t.preventDefault();
    },
    onHomeKey: function(t) {
      this.changeFocusedItemIndex(t, this.findFirstItemIndex()), t.preventDefault();
    },
    onEndKey: function(t) {
      this.changeFocusedItemIndex(t, this.findLastItemIndex()), t.preventDefault();
    },
    onEnterKey: function(t) {
      if (this.focusedItemInfo.index !== -1) {
        var n = ve(this.menubar, 'li[id="'.concat("".concat(this.focusedItemId), '"]')), o = n && ve(n, '[data-pc-section="itemlink"]');
        if (o ? o.click() : n && n.click(), !this.popup) {
          var r = this.visibleItems[this.focusedItemInfo.index], i = this.isProccessedItemGroup(r);
          !i && (this.focusedItemInfo.index = this.findFirstFocusedItemIndex());
        }
      }
      t.preventDefault();
    },
    onSpaceKey: function(t) {
      this.onEnterKey(t);
    },
    onEscapeKey: function(t) {
      if (this.popup || this.focusedItemInfo.level !== 0) {
        var n = this.focusedItemInfo;
        this.hide(t, !1), this.focusedItemInfo = {
          index: Number(n.parentKey.split("_")[0]),
          level: 0,
          parentKey: ""
        }, this.popup && q(this.target);
      }
      t.preventDefault();
    },
    onTabKey: function(t) {
      if (this.focusedItemInfo.index !== -1) {
        var n = this.visibleItems[this.focusedItemInfo.index], o = this.isProccessedItemGroup(n);
        !o && this.onItemChange({
          originalEvent: t,
          processedItem: n
        });
      }
      this.hide();
    },
    onEnter: function(t) {
      this.autoZIndex && Ae.set("menu", t, this.baseZIndex + this.$primevue.config.zIndex.menu), vn(t, {
        position: "absolute",
        top: "0"
      }), this.alignOverlay(), q(this.menubar), this.scrollInView();
    },
    onAfterEnter: function() {
      this.bindOutsideClickListener(), this.bindScrollListener(), this.bindResizeListener(), this.$emit("show");
    },
    onLeave: function() {
      this.unbindOutsideClickListener(), this.unbindScrollListener(), this.unbindResizeListener(), this.$emit("hide"), this.container = null, this.dirty = !1;
    },
    onAfterLeave: function(t) {
      this.autoZIndex && Ae.clear(t);
    },
    alignOverlay: function() {
      Ao(this.container, this.target);
      var t = Ke(this.target);
      t > Ke(this.container) && (this.container.style.minWidth = Ke(this.target) + "px");
    },
    bindOutsideClickListener: function() {
      var t = this;
      this.outsideClickListener || (this.outsideClickListener = function(n) {
        var o = t.container && !t.container.contains(n.target), r = t.popup ? !(t.target && (t.target === n.target || t.target.contains(n.target))) : !0;
        o && r && t.hide();
      }, document.addEventListener("click", this.outsideClickListener, !0));
    },
    unbindOutsideClickListener: function() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener, !0), this.outsideClickListener = null);
    },
    bindScrollListener: function() {
      var t = this;
      this.scrollHandler || (this.scrollHandler = new Hr(this.target, function(n) {
        t.hide(n, !0);
      })), this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function() {
      this.scrollHandler && this.scrollHandler.unbindScrollListener();
    },
    bindResizeListener: function() {
      var t = this;
      this.resizeListener || (this.resizeListener = function(n) {
        Lt() || t.hide(n, !0);
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener: function() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    },
    bindMatchMediaListener: function() {
      var t = this;
      if (!this.matchMediaListener) {
        var n = matchMedia("(max-width: ".concat(this.breakpoint, ")"));
        this.query = n, this.queryMatches = n.matches, this.matchMediaListener = function() {
          t.queryMatches = n.matches;
        }, this.query.addEventListener("change", this.matchMediaListener);
      }
    },
    unbindMatchMediaListener: function() {
      this.matchMediaListener && (this.query.removeEventListener("change", this.matchMediaListener), this.matchMediaListener = null);
    },
    isItemMatched: function(t) {
      var n;
      return this.isValidItem(t) && ((n = this.getProccessedItemLabel(t)) === null || n === void 0 ? void 0 : n.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()));
    },
    isValidItem: function(t) {
      return !!t && !this.isItemDisabled(t.item) && !this.isItemSeparator(t.item) && this.isItemVisible(t.item);
    },
    isValidSelectedItem: function(t) {
      return this.isValidItem(t) && this.isSelected(t);
    },
    isSelected: function(t) {
      return this.activeItemPath.some(function(n) {
        return n.key === t.key;
      });
    },
    findFirstItemIndex: function() {
      var t = this;
      return this.visibleItems.findIndex(function(n) {
        return t.isValidItem(n);
      });
    },
    findLastItemIndex: function() {
      var t = this;
      return lt(this.visibleItems, function(n) {
        return t.isValidItem(n);
      });
    },
    findNextItemIndex: function(t) {
      var n = this, o = t < this.visibleItems.length - 1 ? this.visibleItems.slice(t + 1).findIndex(function(r) {
        return n.isValidItem(r);
      }) : -1;
      return o > -1 ? o + t + 1 : t;
    },
    findPrevItemIndex: function(t) {
      var n = this, o = t > 0 ? lt(this.visibleItems.slice(0, t), function(r) {
        return n.isValidItem(r);
      }) : -1;
      return o > -1 ? o : t;
    },
    findSelectedItemIndex: function() {
      var t = this;
      return this.visibleItems.findIndex(function(n) {
        return t.isValidSelectedItem(n);
      });
    },
    findFirstFocusedItemIndex: function() {
      var t = this.findSelectedItemIndex();
      return t < 0 ? this.findFirstItemIndex() : t;
    },
    findLastFocusedItemIndex: function() {
      var t = this.findSelectedItemIndex();
      return t < 0 ? this.findLastItemIndex() : t;
    },
    searchItems: function(t, n) {
      var o = this;
      this.searchValue = (this.searchValue || "") + n;
      var r = -1, i = !1;
      return this.focusedItemInfo.index !== -1 ? (r = this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(a) {
        return o.isItemMatched(a);
      }), r = r === -1 ? this.visibleItems.slice(0, this.focusedItemInfo.index).findIndex(function(a) {
        return o.isItemMatched(a);
      }) : r + this.focusedItemInfo.index) : r = this.visibleItems.findIndex(function(a) {
        return o.isItemMatched(a);
      }), r !== -1 && (i = !0), r === -1 && this.focusedItemInfo.index === -1 && (r = this.findFirstFocusedItemIndex()), r !== -1 && this.changeFocusedItemIndex(t, r), this.searchTimeout && clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout(function() {
        o.searchValue = "", o.searchTimeout = null;
      }, 500), i;
    },
    changeFocusedItemIndex: function(t, n) {
      this.focusedItemInfo.index !== n && (this.focusedItemInfo.index = n, this.scrollInView());
    },
    scrollInView: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1, n = t !== -1 ? "".concat(this.$id, "_").concat(t) : this.focusedItemId, o = ve(this.menubar, 'li[id="'.concat(n, '"]'));
      o && o.scrollIntoView && o.scrollIntoView({
        block: "nearest",
        inline: "start"
      });
    },
    createProcessedItems: function(t) {
      var n = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "", a = [];
      return t && t.forEach(function(u, s) {
        var l = (i !== "" ? i + "_" : "") + s, d = {
          item: u,
          index: s,
          level: o,
          key: l,
          parent: r,
          parentKey: i
        };
        d.items = n.createProcessedItems(u.items, o + 1, d, l), a.push(d);
      }), a;
    },
    containerRef: function(t) {
      this.container = t;
    },
    menubarRef: function(t) {
      this.menubar = t ? t.$el : void 0;
    }
  },
  computed: {
    processedItems: function() {
      return this.createProcessedItems(this.model || []);
    },
    visibleItems: function() {
      var t = this, n = this.activeItemPath.find(function(o) {
        return o.key === t.focusedItemInfo.parentKey;
      });
      return n ? n.items : this.processedItems;
    },
    focusedItemId: function() {
      return this.focusedItemInfo.index !== -1 ? "".concat(this.$id).concat(w(this.focusedItemInfo.parentKey) ? "_" + this.focusedItemInfo.parentKey : "", "_").concat(this.focusedItemInfo.index) : null;
    }
  },
  components: {
    TieredMenuSub: Dn,
    Portal: zn
  }
}, as = ["id"];
function ls(e, t, n, o, r, i) {
  var a = X("TieredMenuSub"), u = X("Portal");
  return f(), T(u, {
    appendTo: e.appendTo,
    disabled: !e.popup
  }, {
    default: L(function() {
      return [O(xt, b({
        name: "p-connected-overlay",
        onEnter: i.onEnter,
        onAfterEnter: i.onAfterEnter,
        onLeave: i.onLeave,
        onAfterLeave: i.onAfterLeave
      }, e.ptm("transition")), {
        default: L(function() {
          return [r.visible ? (f(), y("div", b({
            key: 0,
            ref: i.containerRef,
            id: e.$id,
            class: e.cx("root"),
            onClick: t[0] || (t[0] = function() {
              return i.onOverlayClick && i.onOverlayClick.apply(i, arguments);
            })
          }, e.ptmi("root")), [e.$slots.start ? (f(), y("div", b({
            key: 0,
            class: e.cx("start")
          }, e.ptm("start")), [V(e.$slots, "start")], 16)) : P("", !0), O(a, b({
            ref: i.menubarRef,
            id: e.$id + "_list",
            class: e.cx("rootList"),
            tabindex: e.disabled ? -1 : e.tabindex,
            role: "menubar",
            "aria-label": e.ariaLabel,
            "aria-labelledby": e.ariaLabelledby,
            "aria-disabled": e.disabled || void 0,
            "aria-orientation": "vertical",
            "aria-activedescendant": r.focused ? i.focusedItemId : void 0,
            menuId: e.$id,
            focusedItemId: r.focused ? i.focusedItemId : void 0,
            items: i.processedItems,
            templates: e.$slots,
            activeItemPath: r.activeItemPath,
            level: 0,
            visible: r.submenuVisible,
            pt: e.pt,
            unstyled: e.unstyled,
            onFocus: i.onFocus,
            onBlur: i.onBlur,
            onKeydown: i.onKeyDown,
            onItemClick: i.onItemClick,
            onItemMouseenter: i.onItemMouseEnter,
            onItemMousemove: i.onItemMouseMove
          }, e.ptm("rootList")), null, 16, ["id", "class", "tabindex", "aria-label", "aria-labelledby", "aria-disabled", "aria-activedescendant", "menuId", "focusedItemId", "items", "templates", "activeItemPath", "visible", "pt", "unstyled", "onFocus", "onBlur", "onKeydown", "onItemClick", "onItemMouseenter", "onItemMousemove"]), e.$slots.end ? (f(), y("div", b({
            key: 1,
            class: e.cx("end")
          }, e.ptm("end")), [V(e.$slots, "end")], 16)) : P("", !0)], 16, as)) : P("", !0)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo", "disabled"]);
}
Fn.render = ls;
const us = { class: "bg-surface-0 dark:bg-surface-900" }, ds = { class: "container" }, cs = { class: "flex gap-5" }, ms = { class: "hidden lg:flex items-center gap-5" }, ps = { class: "lg:hidden" }, fs = { class: "ml-2" }, tl = /* @__PURE__ */ B({
  __name: "SiteNavigation",
  props: {
    items: {},
    userSignedIn: { type: Boolean, default: !1 }
  },
  emits: ["signoutSuccess", "notify"],
  setup(e, { emit: t }) {
    const n = t, o = e, r = So(), i = j(!1), a = j(null), u = j([
      { label: "Sign in", icon: "pi pi-sign-in", to: "/signin" },
      { label: "Sign up", icon: "pi pi-user-plus", to: "/signup" }
    ]), s = Ee(() => o.userSignedIn ? o.items : [...o.items || [], ...u.value]), l = Ee(() => [...s.value]), d = (m) => {
      var p;
      (p = a.value) == null || p.toggle(m);
    };
    async function c() {
      try {
        i.value = !0, await Ct.signOut(), r.updateAuth(), window.location.assign("signin");
      } catch (m) {
        n("notify", {
          type: "unexpected",
          severity: "error",
          summary: z.error.somethingWentWrong.summary,
          detail: z.error.somethingWentWrong.detail,
          json: m
        });
      } finally {
        i.value = !1;
      }
    }
    return (m, p) => {
      const h = X("RouterLink"), I = X("router-link");
      return f(), y("header", us, [
        v("div", ds, [
          O($(Nn), { model: [] }, {
            start: L(() => [
              O($(H), {
                asChild: "",
                variant: "link"
              }, {
                default: L((k) => [
                  O(h, {
                    to: m.userSignedIn ? "/home" : "/",
                    class: Y(k.class)
                  }, {
                    default: L(() => [
                      V(m.$slots, "logo")
                    ]),
                    _: 2
                  }, 1032, ["to", "class"])
                ]),
                _: 3
              })
            ]),
            end: L(() => [
              v("div", cs, [
                v("div", ms, [
                  (f(!0), y(be, null, ct($(s), (k) => (f(), y("div", {
                    key: k.label
                  }, [
                    O($(H), {
                      asChild: "",
                      variant: "outlined"
                    }, {
                      default: L((S) => [
                        O(h, {
                          to: k.to,
                          class: Y(S.class)
                        }, {
                          default: L(() => [
                            v("i", {
                              class: Y(k.icon)
                            }, null, 2),
                            v("span", null, R(k.label), 1)
                          ]),
                          _: 2
                        }, 1032, ["to", "class"])
                      ]),
                      _: 2
                    }, 1024)
                  ]))), 128)),
                  m.userSignedIn ? (f(), T($(H), {
                    key: 0,
                    icon: "pi pi-sign-out",
                    "aria-label": "Sign out",
                    variant: "outlined",
                    loading: $(i),
                    onClick: c
                  }, null, 8, ["loading"])) : P("", !0)
                ]),
                v("div", ps, [
                  O($(H), {
                    icon: "pi pi-bars",
                    "aria-label": "Navigation menu",
                    "aria-haspopup": "true",
                    "aria-controls": "overlay_tmenu",
                    onClick: d
                  }),
                  O($(Fn), {
                    id: "overlay_tmenu",
                    ref_key: "tieredMenu",
                    ref: a,
                    model: $(l),
                    popup: ""
                  }, {
                    item: L(({ item: k, props: S }) => [
                      k.to ? (f(), T(I, b({
                        key: 0,
                        to: k.to
                      }, S.action), {
                        default: L(() => [
                          v("span", {
                            class: Y(k.icon)
                          }, null, 2),
                          v("span", fs, R(k.label), 1)
                        ]),
                        _: 2
                      }, 1040, ["to"])) : P("", !0),
                      m.userSignedIn ? (f(), T($(H), {
                        key: 1,
                        icon: "pi pi-sign-out",
                        "aria-label": "Sign out",
                        variant: "outlined",
                        loading: $(i),
                        onClick: c
                      }, null, 8, ["loading"])) : P("", !0)
                    ]),
                    _: 1
                  }, 8, ["model"])
                ]),
                O(Ir, { class: "ms-2" })
              ])
            ]),
            _: 3
          })
        ])
      ]);
    };
  }
});
var hs = ({ dt: e }) => `
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
`, bs = {
  root: "p-card p-component",
  header: "p-card-header",
  body: "p-card-body",
  caption: "p-card-caption",
  title: "p-card-title",
  subtitle: "p-card-subtitle",
  content: "p-card-content",
  footer: "p-card-footer"
}, gs = K.extend({
  name: "card",
  style: hs,
  classes: bs
}), vs = {
  name: "BaseCard",
  extends: ee,
  style: gs,
  provide: function() {
    return {
      $pcCard: this,
      $parentInstance: this
    };
  }
}, $e = {
  name: "Card",
  extends: vs,
  inheritAttrs: !1
};
function ys(e, t, n, o, r, i) {
  return f(), y("div", b({
    class: e.cx("root")
  }, e.ptmi("root")), [e.$slots.header ? (f(), y("div", b({
    key: 0,
    class: e.cx("header")
  }, e.ptm("header")), [V(e.$slots, "header")], 16)) : P("", !0), v("div", b({
    class: e.cx("body")
  }, e.ptm("body")), [e.$slots.title || e.$slots.subtitle ? (f(), y("div", b({
    key: 0,
    class: e.cx("caption")
  }, e.ptm("caption")), [e.$slots.title ? (f(), y("div", b({
    key: 0,
    class: e.cx("title")
  }, e.ptm("title")), [V(e.$slots, "title")], 16)) : P("", !0), e.$slots.subtitle ? (f(), y("div", b({
    key: 1,
    class: e.cx("subtitle")
  }, e.ptm("subtitle")), [V(e.$slots, "subtitle")], 16)) : P("", !0)], 16)) : P("", !0), v("div", b({
    class: e.cx("content")
  }, e.ptm("content")), [V(e.$slots, "content")], 16), e.$slots.footer ? (f(), y("div", b({
    key: 1,
    class: e.cx("footer")
  }, e.ptm("footer")), [V(e.$slots, "footer")], 16)) : P("", !0)], 16)], 16);
}
$e.render = ys;
const nl = /* @__PURE__ */ B({
  __name: "AppErrorInfo",
  props: {
    error: {}
  },
  setup(e) {
    const t = e;
    return je(() => {
      console.error("App error: ", t.error);
    }), (n, o) => (f(), T($($e), { class: "p-10" }, {
      title: L(() => o[0] || (o[0] = [
        v("h2", { class: "text-4xl font-semibold text-gray-800 text-center" }, [
          Q(" Oops "),
          v("i", { class: "text-4xl not-italic" }, "🥲")
        ], -1)
      ])),
      content: L(() => o[1] || (o[1] = [
        v("p", { class: "mt-10 text-xl" }, [
          Q(" Something went wrong! We have been notified about this. In the meantime, please try visiting the "),
          v("a", {
            href: "/",
            class: "underline"
          }, "homepage"),
          Q(" or try again later. ")
        ], -1)
      ])),
      _: 1
    }));
  }
}), $s = {
  key: 0,
  class: "bar"
}, Is = /* @__PURE__ */ B({
  __name: "PageInfiniteLoader",
  props: {
    isLoading: { type: Boolean }
  },
  setup(e) {
    return (t, n) => t.isLoading ? (f(), y("div", $s, n[0] || (n[0] = [
      v("div", null, null, -1)
    ]))) : P("", !0);
  }
}), Rn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, ol = /* @__PURE__ */ Rn(Is, [["__scopeId", "data-v-a36ba306"]]);
var ks = {
  name: "BaseEditableHolder",
  extends: ee,
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
        var n, o;
        this.formField = ((n = this.$pcForm) === null || n === void 0 || (o = n.register) === null || o === void 0 ? void 0 : o.call(n, t, this.$formControl)) || {};
      }
    },
    $formControl: {
      immediate: !0,
      handler: function(t) {
        var n, o;
        this.formField = ((n = this.$pcForm) === null || n === void 0 || (o = n.register) === null || o === void 0 ? void 0 : o.call(n, this.$formName, t)) || {};
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
        var n;
        (n = this.$pcForm) !== null && n !== void 0 && n.getFieldState(this.$formName) && t !== this.d_value && (this.d_value = t);
      }
    }
  },
  formField: {},
  methods: {
    writeValue: function(t, n) {
      var o, r;
      this.controlled && (this.d_value = t, this.$emit("update:modelValue", t)), this.$emit("value-change", t), (o = (r = this.formField).onChange) === null || o === void 0 || o.call(r, {
        originalEvent: n,
        value: t
      });
    },
    // @todo move to @primeuix/utils
    findNonEmpty: function() {
      for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
        n[o] = arguments[o];
      return n.find(w);
    }
  },
  computed: {
    $filled: function() {
      return w(this.d_value);
    },
    $invalid: function() {
      var t, n;
      return !this.$formNovalidate && this.findNonEmpty(this.invalid, (t = this.$pcFormField) === null || t === void 0 || (t = t.$field) === null || t === void 0 ? void 0 : t.invalid, (n = this.$pcForm) === null || n === void 0 || (n = n.getFieldState(this.$formName)) === null || n === void 0 ? void 0 : n.invalid);
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
      var t, n;
      return this.findNonEmpty(this.d_value, (t = this.$pcFormField) === null || t === void 0 ? void 0 : t.initialValue, (n = this.$pcForm) === null || n === void 0 || (n = n.initialValues) === null || n === void 0 ? void 0 : n[this.$formName]);
    },
    $formValue: function() {
      var t, n;
      return this.findNonEmpty((t = this.$pcFormField) === null || t === void 0 || (t = t.$field) === null || t === void 0 ? void 0 : t.value, (n = this.$pcForm) === null || n === void 0 || (n = n.getFieldState(this.$formName)) === null || n === void 0 ? void 0 : n.value);
    },
    controlled: function() {
      return this.$inProps.hasOwnProperty("modelValue") || !this.$inProps.hasOwnProperty("modelValue") && !this.$inProps.hasOwnProperty("defaultValue");
    },
    // @deprecated use $filled instead
    filled: function() {
      return this.$filled;
    }
  }
}, Bn = {
  name: "BaseInput",
  extends: ks,
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
}, Ss = ({ dt: e }) => `
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
`, ws = {
  root: function(t) {
    var n = t.instance, o = t.props;
    return ["p-inputtext p-component", {
      "p-filled": n.$filled,
      "p-inputtext-sm p-inputfield-sm": o.size === "small",
      "p-inputtext-lg p-inputfield-lg": o.size === "large",
      "p-invalid": n.$invalid,
      "p-variant-filled": n.$variant === "filled",
      "p-inputtext-fluid": n.$fluid
    }];
  }
}, xs = K.extend({
  name: "inputtext",
  style: Ss,
  classes: ws
}), _s = {
  name: "BaseInputText",
  extends: Bn,
  style: xs,
  provide: function() {
    return {
      $pcInputText: this,
      $parentInstance: this
    };
  }
};
function Je(e) {
  "@babel/helpers - typeof";
  return Je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Je(e);
}
function Ps(e, t, n) {
  return (t = Cs(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Cs(e) {
  var t = Ls(e, "string");
  return Je(t) == "symbol" ? t : t + "";
}
function Ls(e, t) {
  if (Je(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (Je(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Mt = {
  name: "InputText",
  extends: _s,
  inheritAttrs: !1,
  methods: {
    onInput: function(t) {
      this.writeValue(t.target.value, t);
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
      return ge(Ps({
        invalid: this.$invalid,
        fluid: this.$fluid,
        filled: this.$variant === "filled"
      }, this.size, this.size));
    }
  }
}, Ts = ["value", "name", "disabled", "aria-invalid", "data-p"];
function Os(e, t, n, o, r, i) {
  return f(), y("input", b({
    type: "text",
    class: e.cx("root"),
    value: e.d_value,
    name: e.name,
    disabled: e.disabled,
    "aria-invalid": e.$invalid || void 0,
    "data-p": i.dataP,
    onInput: t[0] || (t[0] = function() {
      return i.onInput && i.onInput.apply(i, arguments);
    })
  }, i.attrs), null, 16, Ts);
}
Mt.render = Os;
var Wn = {
  name: "TimesIcon",
  extends: ot
};
function As(e, t, n, o, r, i) {
  return f(), y("svg", b({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), t[0] || (t[0] = [v("path", {
    d: "M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
Wn.render = As;
var Es = ({ dt: e }) => `
.p-message {
    border-radius: ${e("message.border.radius")};
    outline-width: ${e("message.border.width")};
    outline-style: solid;
}

.p-message-content {
    display: flex;
    align-items: center;
    padding: ${e("message.content.padding")};
    gap: ${e("message.content.gap")};
    height: 100%;
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
    width: ${e("message.close.button.width")};
    height: ${e("message.close.button.height")};
    border-radius: ${e("message.close.button.border.radius")};
    background: transparent;
    transition: background ${e("message.transition.duration")}, color ${e("message.transition.duration")}, outline-color ${e("message.transition.duration")}, box-shadow ${e("message.transition.duration")}, opacity 0.3s;
    outline-color: transparent;
    color: inherit;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-message-close-icon {
    font-size: ${e("message.close.icon.size")};
    width: ${e("message.close.icon.size")};
    height: ${e("message.close.icon.size")};
}

.p-message-close-button:focus-visible {
    outline-width: ${e("message.close.button.focus.ring.width")};
    outline-style: ${e("message.close.button.focus.ring.style")};
    outline-offset: ${e("message.close.button.focus.ring.offset")};
}

.p-message-info {
    background: ${e("message.info.background")};
    outline-color: ${e("message.info.border.color")};
    color: ${e("message.info.color")};
    box-shadow: ${e("message.info.shadow")};
}

.p-message-info .p-message-close-button:focus-visible {
    outline-color: ${e("message.info.close.button.focus.ring.color")};
    box-shadow: ${e("message.info.close.button.focus.ring.shadow")};
}

.p-message-info .p-message-close-button:hover {
    background: ${e("message.info.close.button.hover.background")};
}

.p-message-info.p-message-outlined {
    color: ${e("message.info.outlined.color")};
    outline-color: ${e("message.info.outlined.border.color")};
}

.p-message-info.p-message-simple {
    color: ${e("message.info.simple.color")};
}

.p-message-success {
    background: ${e("message.success.background")};
    outline-color: ${e("message.success.border.color")};
    color: ${e("message.success.color")};
    box-shadow: ${e("message.success.shadow")};
}

.p-message-success .p-message-close-button:focus-visible {
    outline-color: ${e("message.success.close.button.focus.ring.color")};
    box-shadow: ${e("message.success.close.button.focus.ring.shadow")};
}

.p-message-success .p-message-close-button:hover {
    background: ${e("message.success.close.button.hover.background")};
}

.p-message-success.p-message-outlined {
    color: ${e("message.success.outlined.color")};
    outline-color: ${e("message.success.outlined.border.color")};
}

.p-message-success.p-message-simple {
    color: ${e("message.success.simple.color")};
}

.p-message-warn {
    background: ${e("message.warn.background")};
    outline-color: ${e("message.warn.border.color")};
    color: ${e("message.warn.color")};
    box-shadow: ${e("message.warn.shadow")};
}

.p-message-warn .p-message-close-button:focus-visible {
    outline-color: ${e("message.warn.close.button.focus.ring.color")};
    box-shadow: ${e("message.warn.close.button.focus.ring.shadow")};
}

.p-message-warn .p-message-close-button:hover {
    background: ${e("message.warn.close.button.hover.background")};
}

.p-message-warn.p-message-outlined {
    color: ${e("message.warn.outlined.color")};
    outline-color: ${e("message.warn.outlined.border.color")};
}

.p-message-warn.p-message-simple {
    color: ${e("message.warn.simple.color")};
}

.p-message-error {
    background: ${e("message.error.background")};
    outline-color: ${e("message.error.border.color")};
    color: ${e("message.error.color")};
    box-shadow: ${e("message.error.shadow")};
}

.p-message-error .p-message-close-button:focus-visible {
    outline-color: ${e("message.error.close.button.focus.ring.color")};
    box-shadow: ${e("message.error.close.button.focus.ring.shadow")};
}

.p-message-error .p-message-close-button:hover {
    background: ${e("message.error.close.button.hover.background")};
}

.p-message-error.p-message-outlined {
    color: ${e("message.error.outlined.color")};
    outline-color: ${e("message.error.outlined.border.color")};
}

.p-message-error.p-message-simple {
    color: ${e("message.error.simple.color")};
}

.p-message-secondary {
    background: ${e("message.secondary.background")};
    outline-color: ${e("message.secondary.border.color")};
    color: ${e("message.secondary.color")};
    box-shadow: ${e("message.secondary.shadow")};
}

.p-message-secondary .p-message-close-button:focus-visible {
    outline-color: ${e("message.secondary.close.button.focus.ring.color")};
    box-shadow: ${e("message.secondary.close.button.focus.ring.shadow")};
}

.p-message-secondary .p-message-close-button:hover {
    background: ${e("message.secondary.close.button.hover.background")};
}

.p-message-secondary.p-message-outlined {
    color: ${e("message.secondary.outlined.color")};
    outline-color: ${e("message.secondary.outlined.border.color")};
}

.p-message-secondary.p-message-simple {
    color: ${e("message.secondary.simple.color")};
}

.p-message-contrast {
    background: ${e("message.contrast.background")};
    outline-color: ${e("message.contrast.border.color")};
    color: ${e("message.contrast.color")};
    box-shadow: ${e("message.contrast.shadow")};
}

.p-message-contrast .p-message-close-button:focus-visible {
    outline-color: ${e("message.contrast.close.button.focus.ring.color")};
    box-shadow: ${e("message.contrast.close.button.focus.ring.shadow")};
}

.p-message-contrast .p-message-close-button:hover {
    background: ${e("message.contrast.close.button.hover.background")};
}

.p-message-contrast.p-message-outlined {
    color: ${e("message.contrast.outlined.color")};
    outline-color: ${e("message.contrast.outlined.border.color")};
}

.p-message-contrast.p-message-simple {
    color: ${e("message.contrast.simple.color")};
}

.p-message-text {
    font-size: ${e("message.text.font.size")};
    font-weight: ${e("message.text.font.weight")};
}

.p-message-icon {
    font-size: ${e("message.icon.size")};
    width: ${e("message.icon.size")};
    height: ${e("message.icon.size")};
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;
}

.p-message-leave-active .p-message-close-button {
    opacity: 0;
}

.p-message-sm .p-message-content {
    padding: ${e("message.content.sm.padding")};
}

.p-message-sm .p-message-text {
    font-size: ${e("message.text.sm.font.size")};
}

.p-message-sm .p-message-icon {
    font-size: ${e("message.icon.sm.size")};
    width: ${e("message.icon.sm.size")};
    height: ${e("message.icon.sm.size")};
}

.p-message-sm .p-message-close-icon {
    font-size: ${e("message.close.icon.sm.size")};
    width: ${e("message.close.icon.sm.size")};
    height: ${e("message.close.icon.sm.size")};
}

.p-message-lg .p-message-content {
    padding: ${e("message.content.lg.padding")};
}

.p-message-lg .p-message-text {
    font-size: ${e("message.text.lg.font.size")};
}

.p-message-lg .p-message-icon {
    font-size: ${e("message.icon.lg.size")};
    width: ${e("message.icon.lg.size")};
    height: ${e("message.icon.lg.size")};
}

.p-message-lg .p-message-close-icon {
    font-size: ${e("message.close.icon.lg.size")};
    width: ${e("message.close.icon.lg.size")};
    height: ${e("message.close.icon.lg.size")};
}

.p-message-outlined {
    background: transparent;
    outline-width: ${e("message.outlined.border.width")};
}

.p-message-simple {
    background: transparent;
    outline-color: transparent;
    box-shadow: none;
}

.p-message-simple .p-message-content {
    padding: ${e("message.simple.content.padding")};
}

.p-message-outlined .p-message-close-button:hover,
.p-message-simple .p-message-close-button:hover {
    background: transparent;
}
`, js = {
  root: function(t) {
    var n = t.props;
    return ["p-message p-component p-message-" + n.severity, {
      "p-message-outlined": n.variant === "outlined",
      "p-message-simple": n.variant === "simple",
      "p-message-sm": n.size === "small",
      "p-message-lg": n.size === "large"
    }];
  },
  content: "p-message-content",
  icon: "p-message-icon",
  text: "p-message-text",
  closeButton: "p-message-close-button",
  closeIcon: "p-message-close-icon"
}, Ms = K.extend({
  name: "message",
  style: Es,
  classes: js
}), Vs = {
  name: "BaseMessage",
  extends: ee,
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
  style: Ms,
  provide: function() {
    return {
      $pcMessage: this,
      $parentInstance: this
    };
  }
};
function Qe(e) {
  "@babel/helpers - typeof";
  return Qe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qe(e);
}
function mn(e, t, n) {
  return (t = Ks(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ks(e) {
  var t = Ns(e, "string");
  return Qe(t) == "symbol" ? t : t + "";
}
function Ns(e, t) {
  if (Qe(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (Qe(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Vt = {
  name: "Message",
  extends: Vs,
  inheritAttrs: !1,
  emits: ["close", "life-end"],
  timeout: null,
  data: function() {
    return {
      visible: !0
    };
  },
  mounted: function() {
    var t = this;
    this.life && setTimeout(function() {
      t.visible = !1, t.$emit("life-end");
    }, this.life);
  },
  methods: {
    close: function(t) {
      this.visible = !1, this.$emit("close", t);
    }
  },
  computed: {
    closeAriaLabel: function() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : void 0;
    },
    dataP: function() {
      return ge(mn(mn({
        outlined: this.variant === "outlined",
        simple: this.variant === "simple"
      }, this.severity, this.severity), this.size, this.size));
    }
  },
  directives: {
    ripple: pt
  },
  components: {
    TimesIcon: Wn
  }
};
function et(e) {
  "@babel/helpers - typeof";
  return et = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, et(e);
}
function pn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function fn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pn(Object(n), !0).forEach(function(o) {
      zs(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pn(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function zs(e, t, n) {
  return (t = Ds(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ds(e) {
  var t = Fs(e, "string");
  return et(t) == "symbol" ? t : t + "";
}
function Fs(e, t) {
  if (et(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (et(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Rs = ["data-p"], Bs = ["data-p"], Ws = ["data-p"], Us = ["aria-label", "data-p"], Hs = ["data-p"];
function Gs(e, t, n, o, r, i) {
  var a = X("TimesIcon"), u = dt("ripple");
  return f(), T(xt, b({
    name: "p-message",
    appear: ""
  }, e.ptmi("transition")), {
    default: L(function() {
      return [De(v("div", b({
        class: e.cx("root"),
        role: "alert",
        "aria-live": "assertive",
        "aria-atomic": "true",
        "data-p": i.dataP
      }, e.ptm("root")), [e.$slots.container ? V(e.$slots, "container", {
        key: 0,
        closeCallback: i.close
      }) : (f(), y("div", b({
        key: 1,
        class: e.cx("content"),
        "data-p": i.dataP
      }, e.ptm("content")), [V(e.$slots, "icon", {
        class: Y(e.cx("icon"))
      }, function() {
        return [(f(), T(le(e.icon ? "span" : null), b({
          class: [e.cx("icon"), e.icon],
          "data-p": i.dataP
        }, e.ptm("icon")), null, 16, ["class", "data-p"]))];
      }), e.$slots.default ? (f(), y("div", b({
        key: 0,
        class: e.cx("text"),
        "data-p": i.dataP
      }, e.ptm("text")), [V(e.$slots, "default")], 16, Ws)) : P("", !0), e.closable ? De((f(), y("button", b({
        key: 1,
        class: e.cx("closeButton"),
        "aria-label": i.closeAriaLabel,
        type: "button",
        onClick: t[0] || (t[0] = function(s) {
          return i.close(s);
        }),
        "data-p": i.dataP
      }, fn(fn({}, e.closeButtonProps), e.ptm("closeButton"))), [V(e.$slots, "closeicon", {}, function() {
        return [e.closeIcon ? (f(), y("i", b({
          key: 0,
          class: [e.cx("closeIcon"), e.closeIcon],
          "data-p": i.dataP
        }, e.ptm("closeIcon")), null, 16, Hs)) : (f(), T(a, b({
          key: 1,
          class: [e.cx("closeIcon"), e.closeIcon],
          "data-p": i.dataP
        }, e.ptm("closeIcon")), null, 16, ["class", "data-p"]))];
      })], 16, Us)), [[u]]) : P("", !0)], 16, Bs))], 16, Rs), [[$o, r.visible]])];
    }),
    _: 3
  }, 16);
}
Vt.render = Gs;
function yt(e) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}
const Zs = {
  key: 0,
  for: "email"
}, qs = "Please enter a valid email address", Un = /* @__PURE__ */ B({
  __name: "EmailInput",
  props: /* @__PURE__ */ Dt({
    isSubmitClicked: { type: Boolean },
    labelText: {}
  }, {
    email: { required: !0 },
    emailModifiers: {}
  }),
  emits: /* @__PURE__ */ Dt(["validity-changed"], ["update:email"]),
  setup(e, { emit: t }) {
    const n = Io(e, "email"), o = e, r = t;
    je(() => {
      r("validity-changed", yt(n.value));
    });
    const i = Ee(() => o.isSubmitClicked && !yt(n.value));
    function a(u) {
      const s = u ?? "";
      n.value = s, r("validity-changed", yt(s));
    }
    return (u, s) => (f(), y("div", null, [
      u.labelText ? (f(), y("label", Zs, R(u.labelText), 1)) : P("", !0),
      O($(Mt), {
        id: "email",
        modelValue: n.value,
        invalid: $(i),
        placeholder: "Email",
        required: "",
        class: "w-full",
        "onUpdate:modelValue": a
      }, null, 8, ["modelValue", "invalid"]),
      $(i) ? (f(), T($(Vt), {
        key: 1,
        severity: "error",
        size: "small",
        variant: "simple"
      }, {
        default: L(() => [
          Q(R(qs))
        ]),
        _: 1
      })) : P("", !0)
    ]));
  }
}), Ys = async () => await fetch("https://localhost:443/auth/get-email", {
  method: "GET",
  credentials: "include",
  headers: {
    "Content-Type": "application/json"
  }
}), Xs = async (e) => await fetch("https://localhost:443/auth/change-email", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  credentials: "include",
  body: JSON.stringify({ email: e })
}), Js = async () => await fetch("https://localhost:443/auth/request-delete", {
  method: "POST",
  credentials: "include"
}), Qs = async (e) => await fetch("https://localhost:443/auth/delete-account", {
  method: "DELETE",
  credentials: "include",
  headers: {
    "X-Delete-Token": e,
    "Content-Type": "application/json"
  }
}), ft = { getEmail: Ys, changeEmail: Xs, requestDelete: Js, deleteAccount: Qs }, ea = { class: "flex flex-col items-center gap-4 text-center" }, ta = { class: "flex flex-col gap-2" }, Hn = /* @__PURE__ */ B({
  __name: "ActionConfirmMsg",
  props: {
    iconClass: {}
  },
  setup(e) {
    return (t, n) => (f(), y("div", ea, [
      v("i", {
        class: Y([t.iconClass, "border-2 p-4 rounded-full text-primary"]),
        style: { "font-size": "1.2rem !important" }
      }, null, 2),
      v("div", ta, [
        V(t.$slots, "default")
      ])
    ]));
  }
}), na = {
  key: 0,
  class: "spacing-elements"
}, oa = { class: "text-primary break-all px-2" }, ia = "No changes have been made", ra = "The new email address you provided is the same as the current one. Please enter a different email address.", sa = /* @__PURE__ */ B({
  __name: "ChangeEmail",
  emits: ["notify"],
  setup(e, { emit: t }) {
    const n = t, o = j("mytestemail1235667@gmail.com"), r = j(!1), i = j(!1), a = j(!1), u = j(!1);
    async function s() {
      if (u.value = !0, !!a.value)
        try {
          r.value = !0;
          const l = await ft.changeEmail(o.value);
          if (!l.ok)
            throw l;
          i.value = !0;
        } catch (l) {
          if (i.value = !1, l instanceof Response) {
            const d = await l.json();
            d.error === "EMAIL_SAME_AS_CURRENT" && n("notify", {
              type: "email_same_as_current",
              severity: "info",
              summary: ia,
              detail: ra,
              json: d
            });
          } else
            n("notify", {
              type: "unexpected",
              severity: "error",
              summary: z.error.somethingWentWrong.summary,
              detail: z.error.somethingWentWrong.detail,
              json: l
            });
        } finally {
          r.value = !1;
        }
    }
    return (l, d) => (f(), T($($e), null, {
      title: L(() => d[2] || (d[2] = [
        v("h2", { class: "h2" }, "Change your email", -1)
      ])),
      content: L(() => [
        $(i) ? (f(), T(Hn, {
          key: 1,
          iconClass: "pi pi-envelope"
        }, {
          default: L(() => [
            v("p", null, [
              d[5] || (d[5] = v("span", { class: "block text-wrap" }, "We have a verification email to:", -1)),
              v("strong", oa, R($(o)), 1),
              d[6] || (d[6] = v("span", { class: "block" }, " Please check the inbox of your new email and click on the verification link to change your email. ", -1))
            ])
          ]),
          _: 1
        })) : (f(), y("div", na, [
          d[4] || (d[4] = v("p", null, " You will receive an email to your old email to verify your new email address. Please click on the email link to update your email. ", -1)),
          v("form", {
            class: "spacing-form",
            onSubmit: _t(s, ["prevent"])
          }, [
            O(Un, {
              email: $(o),
              "onUpdate:email": d[0] || (d[0] = (c) => Pt(o) ? o.value = c : null),
              isSubmitClicked: $(u),
              labelText: "Enter your new email",
              onValidityChanged: d[1] || (d[1] = (c) => {
                a.value = c;
              })
            }, null, 8, ["email", "isSubmitClicked"]),
            O($(H), {
              type: "submit",
              loading: $(r)
            }, {
              default: L(() => d[3] || (d[3] = [
                Q("Change email")
              ])),
              _: 1
            }, 8, ["loading"])
          ], 32)
        ]))
      ]),
      _: 1
    }));
  }
}), aa = {
  key: 0,
  class: "spacing-elements"
}, la = /* @__PURE__ */ B({
  __name: "DeleteAccountRequest",
  emits: ["notify"],
  setup(e, { emit: t }) {
    const n = t, o = j(!1), r = j(!1);
    async function i() {
      try {
        r.value = !0;
        const a = await ft.requestDelete();
        if (a.ok)
          o.value = !0;
        else
          throw a;
      } catch (a) {
        o.value = !1, n("notify", {
          type: "unexpected",
          severity: "error",
          summary: z.error.somethingWentWrong.summary,
          detail: z.error.somethingWentWrong.detail,
          json: a
        });
      } finally {
        r.value = !1;
      }
    }
    return (a, u) => (f(), T($($e), null, {
      title: L(() => u[0] || (u[0] = [
        v("h2", { class: "h2" }, "Delete your account", -1)
      ])),
      content: L(() => [
        $(o) ? (f(), T(Hn, {
          key: 1,
          iconClass: "pi pi-envelope"
        }, {
          default: L(() => u[3] || (u[3] = [
            v("p", null, " We have sent you an email to verify your account deletion. Please check your inbox and click on the verification link. ", -1)
          ])),
          _: 1
        })) : (f(), y("div", aa, [
          u[2] || (u[2] = v("p", null, " You will receive an email to verify your account deletion. Please click on the email link to delete your account. ", -1)),
          O($(H), {
            type: "button",
            isLoading: $(r),
            onClick: i
          }, {
            default: L(() => u[1] || (u[1] = [
              Q("Send deletion email")
            ])),
            _: 1
          }, 8, ["isLoading"])
        ]))
      ]),
      _: 1
    }));
  }
}), ua = { class: "spacing-elements p-12" }, da = /* @__PURE__ */ B({
  __name: "DeleteAccountAction",
  props: {
    deleteToken: {}
  },
  emits: ["notify"],
  setup(e, { emit: t }) {
    const n = t, o = e;
    je(() => {
      o.deleteToken && r();
    });
    async function r() {
      const i = "We failed to delete your account!", a = "Something went wrong while deleting your account. Please try again or contact us to let us know about this issue.";
      try {
        const u = await ft.deleteAccount(o.deleteToken);
        if (!u.ok)
          throw u;
        await Ct.signOut(), window.location.href = "/goodbye";
      } catch (u) {
        n("notify", {
          type: "delete_account_fail",
          severity: "error",
          summary: i,
          detail: a,
          json: u
        });
      }
    }
    return (i, a) => (f(), T($($e), null, {
      content: L(() => [
        v("div", ua, [
          a[0] || (a[0] = v("p", { class: "text-2xl" }, "Deleting your account, please dont close this window.", -1)),
          O($(Et))
        ])
      ]),
      _: 1
    }));
  }
});
var ca = ({ dt: e }) => `
.p-skeleton {
    overflow: hidden;
    background: ${e("skeleton.background")};
    border-radius: ${e("skeleton.border.radius")};
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
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), ${e("skeleton.animation.background")}, rgba(255, 255, 255, 0));
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
`, ma = {
  root: {
    position: "relative"
  }
}, pa = {
  root: function(t) {
    var n = t.props;
    return ["p-skeleton p-component", {
      "p-skeleton-circle": n.shape === "circle",
      "p-skeleton-animation-none": n.animation === "none"
    }];
  }
}, fa = K.extend({
  name: "skeleton",
  style: ca,
  classes: pa,
  inlineStyles: ma
}), ha = {
  name: "BaseSkeleton",
  extends: ee,
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
  style: fa,
  provide: function() {
    return {
      $pcSkeleton: this,
      $parentInstance: this
    };
  }
};
function tt(e) {
  "@babel/helpers - typeof";
  return tt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tt(e);
}
function ba(e, t, n) {
  return (t = ga(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ga(e) {
  var t = va(e, "string");
  return tt(t) == "symbol" ? t : t + "";
}
function va(e, t) {
  if (tt(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (tt(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var wt = {
  name: "Skeleton",
  extends: ha,
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
      return ge(ba({}, this.shape, this.shape));
    }
  }
}, ya = ["data-p"];
function $a(e, t, n, o, r, i) {
  return f(), y("div", b({
    class: e.cx("root"),
    style: [e.sx("root"), i.containerStyle],
    "aria-hidden": "true"
  }, e.ptmi("root"), {
    "data-p": i.dataP
  }), null, 16, ya);
}
wt.render = $a;
const Ia = {
  key: 0,
  class: "spacing-elements"
}, ka = {
  key: 0,
  class: "flex flex-row gap-2"
}, Sa = { class: "text-primary break-all" }, wa = {
  key: 1,
  class: "flex flex-row gap-2"
}, xa = { class: "text-primary break-all px-2" }, _a = {
  key: 1,
  class: "spacing-elements"
}, Pa = /* @__PURE__ */ B({
  __name: "UserAccountInfo",
  setup(e) {
    const t = j(""), n = j(""), o = j(!1);
    je(() => {
      r();
    });
    async function r() {
      try {
        o.value = !0, t.value = await Ct.getUserId();
        const i = await ft.getEmail();
        if (!i.ok)
          throw new Error(`Error getting user email: ${i.status} - ${i.statusText}`);
        const a = await i.json();
        n.value = a.email;
      } catch (i) {
        console.error("Error fetching user getUserInfo: ", i);
      } finally {
        o.value = !1;
      }
    }
    return (i, a) => !$(o) && ($(t) || $(n)) || $(o) ? (f(), T($($e), { key: 0 }, {
      title: L(() => a[0] || (a[0] = [
        v("h2", { class: "h2" }, "Your details", -1)
      ])),
      content: L(() => [
        $(o) ? (f(), y("div", _a, [
          O($(wt), { height: "2rem" }),
          O($(wt), { height: "2rem" })
        ])) : (f(), y("div", Ia, [
          $(t) ? (f(), y("div", ka, [
            a[1] || (a[1] = v("div", null, "ID:", -1)),
            v("div", null, [
              v("code", Sa, R($(t)), 1)
            ])
          ])) : P("", !0),
          $(n) ? (f(), y("div", wa, [
            a[2] || (a[2] = v("div", null, "Email:", -1)),
            v("div", null, [
              v("strong", xa, R($(n)), 1)
            ])
          ])) : P("", !0)
        ]))
      ]),
      _: 1
    })) : P("", !0);
  }
}), Ca = {
  key: 0,
  class: "max-w-xl mt-10"
}, La = { class: "spacing-page-sections" }, Ta = { key: 1 }, il = /* @__PURE__ */ B({
  __name: "Account",
  props: {
    deleteToken: {}
  },
  setup(e) {
    return (t, n) => t.deleteToken ? (f(), y("div", Ta, [
      O(da, {
        deleteToken: t.deleteToken,
        onNotify: n[2] || (n[2] = (...o) => t.$emit("deleteAccountError", ...o))
      }, null, 8, ["deleteToken"])
    ])) : (f(), y("div", Ca, [
      V(t.$slots, "default", { id: "header" }, () => [
        n[3] || (n[3] = v("h1", { class: "h1 text-color" }, "Your account", -1))
      ]),
      v("div", La, [
        O(Pa),
        O(sa, {
          onNotify: n[0] || (n[0] = (...o) => t.$emit("changeEmailError", ...o))
        }),
        O(la, {
          onNotify: n[1] || (n[1] = (...o) => t.$emit("deleteAccountRequestError", ...o))
        })
      ])
    ]));
  }
}), Oa = { class: "gsi-material-button-content-wrapper" }, Aa = { class: "gsi-material-button-icon" }, Ea = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  style: { display: "block" }
}, ja = { class: "gsi-material-button-contents" }, Ma = { style: { display: "none" } }, Va = /* @__PURE__ */ B({
  __name: "GoogleAuthIcon",
  props: {
    authType: { default: "Sign in" }
  },
  setup(e) {
    async function t() {
      try {
        const n = await bn.getAuthorisationURLWithQueryParamsAndSetState({
          thirdPartyId: "google",
          // This is where Google should redirect the user back after login or error.
          // This URL goes on the Google's dashboard as well: https://support.google.com/cloud/answer/6158849?hl=en
          frontendRedirectURI: "https://localhost:5173/signup?thirdPartyId=google"
        });
        window.location.assign(n);
      } catch (n) {
        console.error("Google sign in: ", n.message);
      }
    }
    return (n, o) => (f(), y("button", {
      class: "gsi-material-button",
      onClick: t
    }, [
      o[1] || (o[1] = v("div", { class: "gsi-material-button-state" }, null, -1)),
      v("div", Oa, [
        v("div", Aa, [
          (f(), y("svg", Ea, o[0] || (o[0] = [
            ko('<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" data-v-521170bf></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" data-v-521170bf></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" data-v-521170bf></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" data-v-521170bf></path><path fill="none" d="M0 0h48v48H0z" data-v-521170bf></path>', 5)
          ])))
        ]),
        v("span", ja, R(n.authType) + " with Google", 1),
        v("span", Ma, R(n.authType) + " with Google", 1)
      ])
    ]));
  }
}), Ka = /* @__PURE__ */ Rn(Va, [["__scopeId", "data-v-521170bf"]]), Na = { class: "h1" }, za = /* @__PURE__ */ B({
  __name: "SignInUpForm",
  props: {
    pageAuthType: {}
  },
  emits: ["sendCodeSuccess", "notify"],
  setup(e, { emit: t }) {
    const n = t, o = j(!1), r = j("mytestemail1235667@gmail.com"), i = j(!1), a = j(!1);
    async function u() {
      if (a.value = !0, !!i.value)
        try {
          o.value = !0;
          const s = await fe.createCode({
            email: r.value,
            shouldTryLinkingWithSessionUser: !1,
            // If true, SuperTokens will attempt to link the passwordless code to an existing session user
            userContext: {}
            // Optionally include user context
          });
          console.log("Create code response: ", s), s.status === "SIGN_IN_UP_NOT_ALLOWED" ? n("notify", {
            type: "sign_in_up_not_allowed",
            severity: "error",
            summary: z.error.somethingWentWrong.summary,
            detail: z.error.somethingWentWrong.detail,
            json: s
          }) : n("sendCodeSuccess", !0);
        } catch (s) {
          n("notify", {
            type: "unexpected",
            severity: "error",
            summary: z.error.somethingWentWrong.summary,
            detail: z.error.somethingWentWrong.detail,
            json: s
          });
        } finally {
          o.value = !1;
        }
    }
    return (s, l) => (f(), T($($e), { class: "max-w-xl p-12 w-full" }, {
      title: L(() => [
        v("h1", Na, R(s.pageAuthType), 1)
      ]),
      content: L(() => [
        v("section", null, [
          O(Ka, { authType: s.pageAuthType }, null, 8, ["authType"]),
          l[4] || (l[4] = v("div", { class: "flex items-center my-10" }, [
            v("hr", { class: "flex-1 border-gray-300" }),
            v("span", { class: "px-4 text-gray-500 uppercase" }, "Or"),
            v("hr", { class: "flex-1 border-gray-300" })
          ], -1)),
          v("form", {
            class: "spacing-form",
            onSubmit: l[2] || (l[2] = _t(() => {
            }, ["prevent"]))
          }, [
            l[3] || (l[3] = v("p", null, " This website offers a Passwordless Sign-In option. Instead of remembering a password, you'll receive a one-time code via email each time you sign in. ", -1)),
            O(Un, {
              email: $(r),
              "onUpdate:email": l[0] || (l[0] = (d) => Pt(r) ? r.value = d : null),
              isSubmitClicked: $(a),
              onValidityChanged: l[1] || (l[1] = (d) => {
                console.log("val is now", d), i.value = d;
              })
            }, null, 8, ["email", "isSubmitClicked"]),
            O($(H), {
              label: s.pageAuthType,
              submit: "submit",
              loading: $(o),
              onClick: u
            }, null, 8, ["label", "loading"])
          ], 32)
        ])
      ]),
      _: 1
    }));
  }
});
var Da = ({ dt: e }) => `
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
`, Fa = {
  root: "p-inputotp p-component",
  pcInputText: "p-inputotp-input"
}, Ra = K.extend({
  name: "inputotp",
  style: Da,
  classes: Fa
}), Ba = {
  name: "BaseInputOtp",
  extends: Bn,
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
}, Gn = {
  name: "InputOtp",
  extends: Ba,
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
      var n = this;
      return {
        input: function(r) {
          return n.onInput(r, t);
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
    onInput: function(t, n) {
      this.tokens[n] = t.target.value, this.updateModel(t), t.inputType === "deleteContentBackward" ? this.moveToPrev(t) : (t.inputType === "insertText" || t.inputType === "deleteContentForward" || Lt() && t instanceof CustomEvent) && this.moveToNext(t);
    },
    updateModel: function(t) {
      var n = this.tokens.join("");
      this.writeValue(n, t), this.$emit("change", {
        originalEvent: t,
        value: n
      });
    },
    moveToPrev: function(t) {
      var n = this.findPrevInput(t.target);
      n && (n.focus(), n.select());
    },
    moveToNext: function(t) {
      var n = this.findNextInput(t.target);
      n && (n.focus(), n.select());
    },
    findNextInput: function(t) {
      var n = t.nextElementSibling;
      if (n)
        return n.nodeName === "INPUT" ? n : this.findNextInput(n);
    },
    findPrevInput: function(t) {
      var n = t.previousElementSibling;
      if (n)
        return n.nodeName === "INPUT" ? n : this.findPrevInput(n);
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
      var n = t.clipboardData.getData("text");
      if (n.length) {
        var o = n.substring(0, this.length);
        (!this.integerOnly || !isNaN(o)) && (this.tokens = o.split(""), this.updateModel(t));
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
    OtpInputText: Mt
  }
};
function Wa(e, t, n, o, r, i) {
  var a = X("OtpInputText");
  return f(), y("div", b({
    class: e.cx("root")
  }, e.ptmi("root")), [(f(!0), y(be, null, ct(e.length, function(u) {
    return V(e.$slots, "default", {
      key: u,
      events: i.getTemplateEvents(u - 1),
      attrs: i.getTemplateAttrs(u - 1),
      index: u
    }, function() {
      return [O(a, {
        value: r.tokens[u - 1],
        type: i.inputType,
        class: Y(e.cx("pcInputText")),
        name: e.$formName,
        inputmode: i.inputMode,
        variant: e.variant,
        readonly: e.readonly,
        disabled: e.disabled,
        size: e.size,
        invalid: e.invalid,
        tabindex: e.tabindex,
        unstyled: e.unstyled,
        onInput: function(l) {
          return i.onInput(l, u - 1);
        },
        onFocus: t[0] || (t[0] = function(s) {
          return i.onFocus(s);
        }),
        onBlur: t[1] || (t[1] = function(s) {
          return i.onBlur(s);
        }),
        onPaste: t[2] || (t[2] = function(s) {
          return i.onPaste(s);
        }),
        onKeydown: t[3] || (t[3] = function(s) {
          return i.onKeyDown(s);
        }),
        onClick: t[4] || (t[4] = function(s) {
          return i.onClick(s);
        }),
        pt: e.ptm("pcInputText")
      }, null, 8, ["value", "type", "class", "name", "inputmode", "variant", "readonly", "disabled", "size", "invalid", "tabindex", "unstyled", "onInput", "pt"])];
    });
  }), 128))], 16);
}
Gn.render = Wa;
const Ua = { class: "px-4 py-8 sm:p-8" }, Ha = { class: "flex flex-col items-stretch gap-4 sm:flex-row sm:items-start" }, Ga = { class: "spacing-form" }, Za = { class: "spacing-form" }, qa = /* @__PURE__ */ B({
  __name: "VerifyCode",
  props: {
    pageAuthType: {}
  },
  emits: ["verificationCodeSuccess", "resendCodeSuccess", "notify", "restartFlow"],
  setup(e, { emit: t }) {
    const n = t, o = j(""), r = j(null), i = j(0), a = j(0), u = j(!1), s = j(!1);
    hn(o, () => {
      r.value !== null && (r.value = null);
    });
    const l = Ee(() => {
      if (o.value.length < 6)
        return "Please enter a valid code length";
      if (a.value > 0 && i.value > 0 && i.value < a.value)
        return `Invalid code. You have ${a.value - i.value} attempts left.`;
    });
    async function d() {
      const p = "Unable to process your OTP code", h = "Please try again later.";
      if (r.value = !0, o.value.length < 6) {
        r.value = !1;
        return;
      }
      try {
        u.value = !0;
        const I = await fe.consumeCode({ userInputCode: o.value });
        I.status === "OK" ? (await fe.clearLoginAttemptInfo(), I.createdNewRecipeUser && I.user.loginMethods.length === 1 ? console.info("New user signed up successfully") : console.info("Existing user signed in successfully"), r.value = !0, n("verificationCodeSuccess", {
          summary: "Code verified",
          detail: "You have successfully signed in."
        })) : (console.error("Submit code: ", I), I.status === "INCORRECT_USER_INPUT_CODE_ERROR" ? (i.value = I.failedCodeInputAttemptCount, a.value = I.maximumCodeInputAttempts, r.value = !1) : (await fe.clearLoginAttemptInfo(), n("notify", {
          type: "input_code_invalid",
          severity: "error",
          summary: p,
          detail: h,
          json: I
        })));
      } catch (I) {
        n("notify", {
          type: "unexpected",
          severity: "error",
          summary: z.error.somethingWentWrong.summary,
          detail: z.error.somethingWentWrong.detail,
          json: I
        });
      } finally {
        u.value = !1;
      }
    }
    async function c() {
      const p = "Resend OTP failed", h = "Please try again later.";
      try {
        s.value = !0;
        const I = await fe.resendCode();
        console.log("resend code response: ", I), I.status === "RESTART_FLOW_ERROR" ? (await fe.clearLoginAttemptInfo(), n("notify", {
          type: "restart_flow_error",
          severity: "error",
          summary: p,
          detail: h,
          json: I
        })) : n("resendCodeSuccess", {
          summary: "Code re-sent",
          detail: "Please check your email for the new code."
        });
      } catch (I) {
        n("notify", {
          type: "unexpected",
          severity: "error",
          summary: z.error.somethingWentWrong.summary,
          detail: z.error.somethingWentWrong.detail,
          json: I
        });
      } finally {
        s.value = !1;
      }
    }
    function m() {
      fe.clearLoginAttemptInfo(), n("restartFlow");
    }
    return (p, h) => (f(), y("div", Ua, [
      O($($e), { class: "max-w-xl p-0 sm:p-12 w-full mx-auto" }, {
        title: L(() => [
          v("div", Ha, [
            O($(H), {
              class: "me-4 sm:me-0",
              type: "button",
              variant: "outlined",
              icon: "pi pi-arrow-left",
              "aria-label": "Start over",
              onClick: m
            }),
            h[2] || (h[2] = v("h1", { class: "h1 mt-0 sm:mt-0" }, "Input validation code", -1))
          ])
        ]),
        content: L(() => [
          v("form", {
            class: "spacing-groups",
            onSubmit: h[1] || (h[1] = _t(() => {
            }, ["prevent"]))
          }, [
            v("div", Ga, [
              h[4] || (h[4] = v("p", null, " To finish the signup process, enter the code that was emailed to you. Note that the code is only valid for 10 minutes. ", -1)),
              v("div", null, [
                O($(Gn), {
                  modelValue: $(o),
                  "onUpdate:modelValue": h[0] || (h[0] = (I) => Pt(o) ? o.value = I : null),
                  length: 6,
                  class: "w-50",
                  type: "text",
                  placeholder: "Input email code",
                  required: "",
                  invalid: $(r) === !1
                }, null, 8, ["modelValue", "invalid"]),
                $(r) === !1 ? (f(), T($(Vt), {
                  key: 0,
                  severity: "error",
                  size: "small",
                  variant: "simple"
                }, {
                  default: L(() => [
                    Q(R($(l)), 1)
                  ]),
                  _: 1
                })) : P("", !0)
              ]),
              O($(H), {
                class: "w-fit",
                type: "submit",
                loading: $(u),
                onClick: d
              }, {
                default: L(() => h[3] || (h[3] = [
                  Q(" Submit code ")
                ])),
                _: 1
              }, 8, ["loading"])
            ]),
            v("div", Za, [
              h[6] || (h[6] = v("p", null, "If you didnt receive an email, please check your Junk folder or resend another code.", -1)),
              O($(H), {
                class: "w-fit",
                type: "button",
                loading: $(s),
                onClick: c
              }, {
                default: L(() => h[5] || (h[5] = [
                  Q(" Resend code ")
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
}), rl = /* @__PURE__ */ B({
  __name: "SignInUp",
  emits: ["notify", "resendCodeSuccess"],
  setup(e, { emit: t }) {
    const n = t, o = wo(), r = xo(), i = j(!0), a = j(!1);
    je(async () => {
      a.value = !!await s(), r.currentRoute.value.query.thirdPartyId === "google" && await l();
    });
    const u = Ee(() => o.name === "signup" ? "Sign up" : "Sign in");
    async function s() {
      i.value = !0;
      try {
        const m = await fe.getLoginAttemptInfo();
        return m && console.info("Code already sent: ", m), m !== void 0;
      } catch (m) {
        n("notify", {
          type: "unexpected",
          severity: "error",
          summary: z.error.somethingWentWrong.summary,
          detail: z.error.somethingWentWrong.detail,
          json: m
        });
      } finally {
        i.value = !1;
      }
    }
    async function l() {
      const m = "Failed to sign in with Google", p = "Please try again later or try another form of login.";
      try {
        i.value = !0;
        const h = await bn.signInAndUp();
        h.status === "OK" ? (console.log("handleGoogleCallback> ", h.user), h.createdNewRecipeUser && h.user.loginMethods.length === 1 ? console.log("New user signed up successfully") : console.log("Existing user signed in successfully"), window.location.assign("/home")) : h.status === "SIGN_IN_UP_NOT_ALLOWED" ? n("notify", {
          type: "sign_in_up_not_allowed",
          severity: "error",
          summary: m,
          detail: p,
          json: h
        }) : (n("notify", {
          type: "unexpected",
          severity: "error",
          summary: m,
          detail: p,
          json: h
        }), window.location.assign("/signin"));
      } catch (h) {
        n("notify", {
          type: "unexpected",
          severity: "error",
          summary: z.error.somethingWentWrong.summary,
          detail: z.error.somethingWentWrong.detail,
          json: h
        });
      } finally {
        i.value = !1;
      }
    }
    function d(m) {
      window.location.href = "/home";
    }
    function c(m) {
      (m.type === "restart_flow_error" || m.type === "input_code_invalid") && (a.value = !1), n("notify", m);
    }
    return (m, p) => (f(), T($r, { isLoading: $(i) }, {
      default: L(() => [
        $(a) ? (f(), T(qa, {
          key: 1,
          pageAuthType: $(u),
          onVerificationCodeSuccess: d,
          onResendCodeSuccess: p[2] || (p[2] = (...h) => m.$emit("resendCodeSuccess", ...h)),
          onRestartFlow: p[3] || (p[3] = () => a.value = !1),
          onNotify: c
        }, null, 8, ["pageAuthType"])) : (f(), T(za, {
          key: 0,
          pageAuthType: $(u),
          onSendCodeSuccess: p[0] || (p[0] = () => a.value = !0),
          onNotify: p[1] || (p[1] = (h) => m.$emit("notify", h))
        }, null, 8, ["pageAuthType"]))
      ]),
      _: 1
    }, 8, ["isLoading"]));
  }
});
export {
  il as Account,
  nl as AppErrorInfo,
  ol as PageInfiniteLoader,
  $r as PageLoader,
  rl as SignInUp,
  tl as SiteNavigation,
  Ir as ThemeToggle
};
