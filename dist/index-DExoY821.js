import { ref as le, readonly as ht, getCurrentInstance as ve, onMounted as yt, nextTick as gt, watch as vt } from "vue";
var bt = Object.defineProperty, be = Object.getOwnPropertySymbols, St = Object.prototype.hasOwnProperty, $t = Object.prototype.propertyIsEnumerable, Se = (e, t, n) => t in e ? bt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, wt = (e, t) => {
  for (var n in t || (t = {})) St.call(t, n) && Se(e, n, t[n]);
  if (be) for (var n of be(t)) $t.call(t, n) && Se(e, n, t[n]);
  return e;
};
function he(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && typeof e == "object" && Object.keys(e).length === 0;
}
function Ot(e) {
  return typeof e == "function" && "call" in e && "apply" in e;
}
function y(e) {
  return !he(e);
}
function T(e, t = !0) {
  return e instanceof Object && e.constructor === Object && (t || Object.keys(e).length !== 0);
}
function Ve(e = {}, t = {}) {
  let n = wt({}, e);
  return Object.keys(t).forEach((r) => {
    let o = r;
    T(t[o]) && o in e && T(e[o]) ? n[o] = Ve(e[o], t[o]) : n[o] = t[o];
  }), n;
}
function kt(...e) {
  return e.reduce((t, n, r) => r === 0 ? n : Ve(t, n), {});
}
function vn(e, t) {
  let n = -1;
  if (y(e)) try {
    n = e.findLastIndex(t);
  } catch {
    n = e.lastIndexOf([...e].reverse().find(t));
  }
  return n;
}
function k(e, ...t) {
  return Ot(e) ? e(...t) : e;
}
function E(e, t = !0) {
  return typeof e == "string" && (t || e !== "");
}
function $e(e) {
  return E(e) ? e.replace(/(-|_)/g, "").toLowerCase() : e;
}
function _t(e, t = "", n = {}) {
  let r = $e(t).split("."), o = r.shift();
  if (o) {
    if (T(e)) {
      let l = Object.keys(e).find((a) => $e(a) === o) || "";
      return _t(k(e[l], n), r.join("."), n);
    }
    return;
  }
  return k(e, n);
}
function bn(e, t = !0) {
  return Array.isArray(e) && (t || e.length !== 0);
}
function xt(e) {
  return y(e) && !isNaN(e);
}
function Sn(e = "") {
  return y(e) && e.length === 1 && !!e.match(/\S| /);
}
function K(e, t) {
  if (t) {
    let n = t.test(e);
    return t.lastIndex = 0, n;
  }
  return !1;
}
function $n(...e) {
  return kt(...e);
}
function Q(e) {
  return e && e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function wn(e) {
  return E(e, !1) ? e[0].toUpperCase() + e.slice(1) : e;
}
function We(e) {
  return E(e) ? e.replace(/(_)/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : e;
}
function Me() {
  let e = /* @__PURE__ */ new Map();
  return { on(t, n) {
    let r = e.get(t);
    return r ? r.push(n) : r = [n], e.set(t, r), this;
  }, off(t, n) {
    let r = e.get(t);
    return r && r.splice(r.indexOf(n) >>> 0, 1), this;
  }, emit(t, n) {
    let r = e.get(t);
    r && r.forEach((o) => {
      o(n);
    });
  }, clear() {
    e.clear();
  } };
}
function jt(e, t) {
  return e ? e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className) : !1;
}
function we(e, t) {
  if (e && t) {
    let n = (r) => {
      jt(e, r) || (e.classList ? e.classList.add(r) : e.className += " " + r);
    };
    [t].flat().filter(Boolean).forEach((r) => r.split(" ").forEach(n));
  }
}
function Ct() {
  return window.innerWidth - document.documentElement.offsetWidth;
}
function On(e) {
  typeof e == "string" ? we(document.body, e || "p-overflow-hidden") : (e != null && e.variableName && document.body.style.setProperty(e.variableName, Ct() + "px"), we(document.body, e?.className || "p-overflow-hidden"));
}
function Oe(e, t) {
  if (e && t) {
    let n = (r) => {
      e.classList ? e.classList.remove(r) : e.className = e.className.replace(new RegExp("(^|\\b)" + r.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [t].flat().filter(Boolean).forEach((r) => r.split(" ").forEach(n));
  }
}
function kn(e) {
  typeof e == "string" ? Oe(document.body, e || "p-overflow-hidden") : (e != null && e.variableName && document.body.style.removeProperty(e.variableName), Oe(document.body, e?.className || "p-overflow-hidden"));
}
function ke(e) {
  for (let t of document?.styleSheets) try {
    for (let n of t?.cssRules) for (let r of n?.style) if (e.test(r)) return { name: r, value: n.style.getPropertyValue(r).trim() };
  } catch {
  }
  return null;
}
function Pt(e) {
  let t = { width: 0, height: 0 };
  if (e) {
    let [n, r] = [e.style.visibility, e.style.display], o = e.getBoundingClientRect();
    e.style.visibility = "hidden", e.style.display = "block", t.width = o.width || e.offsetWidth, t.height = o.height || e.offsetHeight, e.style.display = r, e.style.visibility = n;
  }
  return t;
}
function De() {
  let e = window, t = document, n = t.documentElement, r = t.getElementsByTagName("body")[0], o = e.innerWidth || n.clientWidth || r.clientWidth, l = e.innerHeight || n.clientHeight || r.clientHeight;
  return { width: o, height: l };
}
function me(e) {
  return e ? Math.abs(e.scrollLeft) : 0;
}
function Lt() {
  let e = document.documentElement;
  return (window.pageXOffset || me(e)) - (e.clientLeft || 0);
}
function Nt() {
  let e = document.documentElement;
  return (window.pageYOffset || e.scrollTop) - (e.clientTop || 0);
}
function Tt(e) {
  return e ? getComputedStyle(e).direction === "rtl" : !1;
}
function _n(e, t, n = !0) {
  var r, o, l, a;
  if (e) {
    let s = e.offsetParent ? { width: e.offsetWidth, height: e.offsetHeight } : Pt(e), i = s.height, u = s.width, d = t.offsetHeight, f = t.offsetWidth, c = t.getBoundingClientRect(), m = Nt(), p = Lt(), g = De(), h, v, b = "top";
    c.top + d + i > g.height ? (h = c.top + m - i, b = "bottom", h < 0 && (h = m)) : h = d + c.top + m, c.left + u > g.width ? v = Math.max(0, c.left + p + f - u) : v = c.left + p, Tt(e) ? e.style.insetInlineEnd = v + "px" : e.style.insetInlineStart = v + "px", e.style.top = h + "px", e.style.transformOrigin = b, n && (e.style.marginTop = b === "bottom" ? `calc(${(o = (r = ke(/-anchor-gutter$/)) == null ? void 0 : r.value) != null ? o : "2px"} * -1)` : (a = (l = ke(/-anchor-gutter$/)) == null ? void 0 : l.value) != null ? a : "");
  }
}
function Et(e, t) {
  e && (typeof t == "string" ? e.style.cssText = t : Object.entries(t || {}).forEach(([n, r]) => e.style[n] = r));
}
function At(e, t) {
  return e instanceof HTMLElement ? e.offsetWidth : 0;
}
function ze(e) {
  if (e) {
    let t = e.parentNode;
    return t && t instanceof ShadowRoot && t.host && (t = t.host), t;
  }
  return null;
}
function Rt(e) {
  return !!(e !== null && typeof e < "u" && e.nodeName && ze(e));
}
function J(e) {
  return typeof Element < "u" ? e instanceof Element : e !== null && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
}
var ue;
function _e(e) {
  {
    if (ue != null) return ue;
    let t = document.createElement("div");
    Et(t, { width: "100px", height: "100px", overflow: "scroll", position: "absolute", top: "-9999px" }), document.body.appendChild(t);
    let n = t.offsetWidth - t.clientWidth;
    return document.body.removeChild(t), ue = n, n;
  }
}
function ie(e, t = {}) {
  if (J(e)) {
    let n = (r, o) => {
      var l, a;
      let s = (l = e?.$attrs) != null && l[r] ? [(a = e?.$attrs) == null ? void 0 : a[r]] : [];
      return [o].flat().reduce((i, u) => {
        if (u != null) {
          let d = typeof u;
          if (d === "string" || d === "number") i.push(u);
          else if (d === "object") {
            let f = Array.isArray(u) ? n(r, u) : Object.entries(u).map(([c, m]) => r === "style" && (m || m === 0) ? `${c.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${m}` : m ? c : void 0);
            i = f.length ? i.concat(f.filter((c) => !!c)) : i;
          }
        }
        return i;
      }, s);
    };
    Object.entries(t).forEach(([r, o]) => {
      if (o != null) {
        let l = r.match(/^on(.+)/);
        l ? e.addEventListener(l[1].toLowerCase(), o) : r === "p-bind" || r === "pBind" ? ie(e, o) : (o = r === "class" ? [...new Set(n("class", o))].join(" ").trim() : r === "style" ? n("style", o).join(";").trim() : o, (e.$attrs = e.$attrs || {}) && (e.$attrs[r] = o), e.setAttribute(r, o));
      }
    });
  }
}
function xn(e, t = {}, ...n) {
  {
    let r = document.createElement(e);
    return ie(r, t), r.append(...n), r;
  }
}
function It(e, t) {
  return J(e) ? Array.from(e.querySelectorAll(t)) : [];
}
function Vt(e, t) {
  return J(e) ? e.matches(t) ? e : e.querySelector(t) : null;
}
function jn(e, t) {
  e && document.activeElement !== e && e.focus(t);
}
function Cn(e, t) {
  if (J(e)) {
    let n = e.getAttribute(t);
    return isNaN(n) ? n === "true" || n === "false" ? n === "true" : n : +n;
  }
}
function He(e, t = "") {
  let n = It(e, `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [href]:not([tabindex = "-1"]):not([style*="display:none"]):not([hidden])${t},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`), r = [];
  for (let o of n) getComputedStyle(o).display != "none" && getComputedStyle(o).visibility != "hidden" && r.push(o);
  return r;
}
function Pn(e, t) {
  let n = He(e, t);
  return n.length > 0 ? n[0] : null;
}
function Ln(e) {
  if (e) {
    let t = e.offsetHeight, n = getComputedStyle(e);
    return t -= parseFloat(n.paddingTop) + parseFloat(n.paddingBottom) + parseFloat(n.borderTopWidth) + parseFloat(n.borderBottomWidth), t;
  }
  return 0;
}
function Wt(e) {
  if (e) {
    let [t, n] = [e.style.visibility, e.style.display];
    e.style.visibility = "hidden", e.style.display = "block";
    let r = e.offsetHeight;
    return e.style.display = n, e.style.visibility = t, r;
  }
  return 0;
}
function Mt(e) {
  if (e) {
    let [t, n] = [e.style.visibility, e.style.display];
    e.style.visibility = "hidden", e.style.display = "block";
    let r = e.offsetWidth;
    return e.style.display = n, e.style.visibility = t, r;
  }
  return 0;
}
function Nn(e, t) {
  let n = He(e, t);
  return n.length > 0 ? n[n.length - 1] : null;
}
function Dt(e) {
  if (e) {
    let t = e.getBoundingClientRect();
    return { top: t.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0), left: t.left + (window.pageXOffset || me(document.documentElement) || me(document.body) || 0) };
  }
  return { top: "auto", left: "auto" };
}
function zt(e, t) {
  return e ? e.offsetHeight : 0;
}
function Be(e, t = []) {
  let n = ze(e);
  return n === null ? t : Be(n, t.concat([n]));
}
function Tn(e) {
  let t = [];
  if (e) {
    let n = Be(e), r = /(auto|scroll)/, o = (l) => {
      try {
        let a = window.getComputedStyle(l, null);
        return r.test(a.getPropertyValue("overflow")) || r.test(a.getPropertyValue("overflowX")) || r.test(a.getPropertyValue("overflowY"));
      } catch {
        return !1;
      }
    };
    for (let l of n) {
      let a = l.nodeType === 1 && l.dataset.scrollselectors;
      if (a) {
        let s = a.split(",");
        for (let i of s) {
          let u = Vt(l, i);
          u && o(u) && t.push(u);
        }
      }
      l.nodeType !== 9 && o(l) && t.push(l);
    }
  }
  return t;
}
function En(e) {
  if (e) {
    let t = e.offsetWidth, n = getComputedStyle(e);
    return t -= parseFloat(n.paddingLeft) + parseFloat(n.paddingRight) + parseFloat(n.borderLeftWidth) + parseFloat(n.borderRightWidth), t;
  }
  return 0;
}
function Ht() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function An(e, t = "") {
  return J(e) ? e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`) : !1;
}
function Rn() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
function In(e, t) {
  var n, r;
  if (e) {
    let o = e.parentElement, l = Dt(o), a = De(), s = e.offsetParent ? e.offsetWidth : Mt(e), i = e.offsetParent ? e.offsetHeight : Wt(e), u = At((n = o?.children) == null ? void 0 : n[0]), d = zt((r = o?.children) == null ? void 0 : r[0]), f = "", c = "";
    l.left + u + s > a.width - _e() ? l.left < s ? t % 2 === 1 ? f = l.left ? "-" + l.left + "px" : "100%" : t % 2 === 0 && (f = a.width - s - _e() + "px") : f = "-100%" : f = "100%", e.getBoundingClientRect().top + d + i > a.height ? c = `-${i - d}px` : c = "0px", e.style.top = c, e.style.insetInlineStart = f;
  }
}
function Bt(e, t = "", n) {
  J(e) && n !== null && n !== void 0 && e.setAttribute(t, n);
}
var Kt = Object.defineProperty, Ft = Object.defineProperties, Ut = Object.getOwnPropertyDescriptors, se = Object.getOwnPropertySymbols, Ke = Object.prototype.hasOwnProperty, Fe = Object.prototype.propertyIsEnumerable, xe = (e, t, n) => t in e ? Kt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, w = (e, t) => {
  for (var n in t || (t = {})) Ke.call(t, n) && xe(e, n, t[n]);
  if (se) for (var n of se(t)) Fe.call(t, n) && xe(e, n, t[n]);
  return e;
}, de = (e, t) => Ft(e, Ut(t)), x = (e, t) => {
  var n = {};
  for (var r in e) Ke.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && se) for (var r of se(e)) t.indexOf(r) < 0 && Fe.call(e, r) && (n[r] = e[r]);
  return n;
}, Yt = Me(), B = Yt, ee = /{([^}]*)}/g, Ue = /(\d+\s+[\+\-\*\/]\s+\d+)/g, Ye = /var\([^)]+\)/g;
function je(e) {
  return E(e) ? e.replace(/[A-Z]/g, (t, n) => n === 0 ? t : "." + t.toLowerCase()).toLowerCase() : e;
}
function qt(e) {
  return T(e) && e.hasOwnProperty("$value") && e.hasOwnProperty("$type") ? e.$value : e;
}
function Zt(e) {
  return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function fe(e = "", t = "") {
  return Zt(`${E(e, !1) && E(t, !1) ? `${e}-` : e}${t}`);
}
function qe(e = "", t = "") {
  return `--${fe(e, t)}`;
}
function Xt(e = "") {
  let t = (e.match(/{/g) || []).length, n = (e.match(/}/g) || []).length;
  return (t + n) % 2 !== 0;
}
function Ze(e, t = "", n = "", r = [], o) {
  if (E(e)) {
    let l = e.trim();
    if (Xt(l)) return;
    if (K(l, ee)) {
      let a = l.replaceAll(ee, (s) => {
        let i = s.replace(/{|}/g, "").split(".").filter((u) => !r.some((d) => K(u, d)));
        return `var(${qe(n, We(i.join("-")))}${y(o) ? `, ${o}` : ""})`;
      });
      return K(a.replace(Ye, "0"), Ue) ? `calc(${a})` : a;
    }
    return l;
  } else if (xt(e)) return e;
}
function Gt(e, t, n) {
  E(t, !1) && e.push(`${t}:${n};`);
}
function G(e, t) {
  return e ? `${e}{${t}}` : "";
}
function Xe(e, t) {
  if (e.indexOf("dt(") === -1) return e;
  function n(a, s) {
    let i = [], u = 0, d = "", f = null, c = 0;
    for (; u <= a.length; ) {
      let m = a[u];
      if ((m === '"' || m === "'" || m === "`") && a[u - 1] !== "\\" && (f = f === m ? null : m), !f && (m === "(" && c++, m === ")" && c--, (m === "," || u === a.length) && c === 0)) {
        let p = d.trim();
        p.startsWith("dt(") ? i.push(Xe(p, s)) : i.push(r(p)), d = "", u++;
        continue;
      }
      m !== void 0 && (d += m), u++;
    }
    return i;
  }
  function r(a) {
    let s = a[0];
    if ((s === '"' || s === "'" || s === "`") && a[a.length - 1] === s) return a.slice(1, -1);
    let i = Number(a);
    return isNaN(i) ? a : i;
  }
  let o = [], l = [];
  for (let a = 0; a < e.length; a++) if (e[a] === "d" && e.slice(a, a + 3) === "dt(") l.push(a), a += 2;
  else if (e[a] === ")" && l.length > 0) {
    let s = l.pop();
    l.length === 0 && o.push([s, a]);
  }
  if (!o.length) return e;
  for (let a = o.length - 1; a >= 0; a--) {
    let [s, i] = o[a], u = e.slice(s + 3, i), d = n(u, t), f = t(...d);
    e = e.slice(0, s) + f + e.slice(i + 1);
  }
  return e;
}
var Vn = (e) => {
  var t;
  let n = S.getTheme(), r = pe(n, e, void 0, "variable"), o = (t = r?.match(/--[\w-]+/g)) == null ? void 0 : t[0], l = pe(n, e, void 0, "value");
  return { name: o, variable: r, value: l };
}, F = (...e) => pe(S.getTheme(), ...e), pe = (e = {}, t, n, r) => {
  if (t) {
    let { variable: o, options: l } = S.defaults || {}, { prefix: a, transform: s } = e?.options || l || {}, i = K(t, ee) ? t : `{${t}}`;
    return r === "value" || he(r) && s === "strict" ? S.getTokenValue(t) : Ze(i, void 0, a, [o.excludedKeyRegex], n);
  }
  return "";
};
function oe(e, ...t) {
  if (e instanceof Array) {
    let n = e.reduce((r, o, l) => {
      var a;
      return r + o + ((a = k(t[l], { dt: F })) != null ? a : "");
    }, "");
    return Xe(n, F);
  }
  return k(e, { dt: F });
}
function Jt(e, t = {}) {
  let n = S.defaults.variable, { prefix: r = n.prefix, selector: o = n.selector, excludedKeyRegex: l = n.excludedKeyRegex } = t, a = [], s = [], i = [{ node: e, path: r }];
  for (; i.length; ) {
    let { node: d, path: f } = i.pop();
    for (let c in d) {
      let m = d[c], p = qt(m), g = K(c, l) ? fe(f) : fe(f, We(c));
      if (T(p)) i.push({ node: p, path: g });
      else {
        let h = qe(g), v = Ze(p, g, r, [l]);
        Gt(s, h, v);
        let b = g;
        r && b.startsWith(r + "-") && (b = b.slice(r.length + 1)), a.push(b.replace(/-/g, "."));
      }
    }
  }
  let u = s.join("");
  return { value: s, tokens: a, declarations: u, css: G(o, u) };
}
var $ = { regex: { rules: { class: { pattern: /^\.([a-zA-Z][\w-]*)$/, resolve(e) {
  return { type: "class", selector: e, matched: this.pattern.test(e.trim()) };
} }, attr: { pattern: /^\[(.*)\]$/, resolve(e) {
  return { type: "attr", selector: `:root${e},:host${e}`, matched: this.pattern.test(e.trim()) };
} }, media: { pattern: /^@media (.*)$/, resolve(e) {
  return { type: "media", selector: e, matched: this.pattern.test(e.trim()) };
} }, system: { pattern: /^system$/, resolve(e) {
  return { type: "system", selector: "@media (prefers-color-scheme: dark)", matched: this.pattern.test(e.trim()) };
} }, custom: { resolve(e) {
  return { type: "custom", selector: e, matched: !0 };
} } }, resolve(e) {
  let t = Object.keys(this.rules).filter((n) => n !== "custom").map((n) => this.rules[n]);
  return [e].flat().map((n) => {
    var r;
    return (r = t.map((o) => o.resolve(n)).find((o) => o.matched)) != null ? r : this.rules.custom.resolve(n);
  });
} }, _toVariables(e, t) {
  return Jt(e, { prefix: t?.prefix });
}, getCommon({ name: e = "", theme: t = {}, params: n, set: r, defaults: o }) {
  var l, a, s, i, u, d, f;
  let { preset: c, options: m } = t, p, g, h, v, b, A, R;
  if (y(c) && m.transform !== "strict") {
    let { primitive: U, semantic: I, extend: j } = c, C = I || {}, { colorScheme: P } = C, V = x(C, ["colorScheme"]), L = j || {}, { colorScheme: W } = L, M = x(L, ["colorScheme"]), N = P || {}, { dark: D } = N, Y = x(N, ["dark"]), z = W || {}, { dark: q } = z, Z = x(z, ["dark"]), _ = y(U) ? this._toVariables({ primitive: U }, m) : {}, O = y(V) ? this._toVariables({ semantic: V }, m) : {}, H = y(Y) ? this._toVariables({ light: Y }, m) : {}, re = y(D) ? this._toVariables({ dark: D }, m) : {}, X = y(M) ? this._toVariables({ semantic: M }, m) : {}, ye = y(Z) ? this._toVariables({ light: Z }, m) : {}, ge = y(q) ? this._toVariables({ dark: q }, m) : {}, [Ge, Je] = [(l = _.declarations) != null ? l : "", _.tokens], [Qe, et] = [(a = O.declarations) != null ? a : "", O.tokens || []], [tt, nt] = [(s = H.declarations) != null ? s : "", H.tokens || []], [rt, ot] = [(i = re.declarations) != null ? i : "", re.tokens || []], [at, it] = [(u = X.declarations) != null ? u : "", X.tokens || []], [st, lt] = [(d = ye.declarations) != null ? d : "", ye.tokens || []], [ut, dt] = [(f = ge.declarations) != null ? f : "", ge.tokens || []];
    p = this.transformCSS(e, Ge, "light", "variable", m, r, o), g = Je;
    let ct = this.transformCSS(e, `${Qe}${tt}`, "light", "variable", m, r, o), mt = this.transformCSS(e, `${rt}`, "dark", "variable", m, r, o);
    h = `${ct}${mt}`, v = [.../* @__PURE__ */ new Set([...et, ...nt, ...ot])];
    let ft = this.transformCSS(e, `${at}${st}color-scheme:light`, "light", "variable", m, r, o), pt = this.transformCSS(e, `${ut}color-scheme:dark`, "dark", "variable", m, r, o);
    b = `${ft}${pt}`, A = [.../* @__PURE__ */ new Set([...it, ...lt, ...dt])], R = k(c.css, { dt: F });
  }
  return { primitive: { css: p, tokens: g }, semantic: { css: h, tokens: v }, global: { css: b, tokens: A }, style: R };
}, getPreset({ name: e = "", preset: t = {}, options: n, params: r, set: o, defaults: l, selector: a }) {
  var s, i, u;
  let d, f, c;
  if (y(t) && n.transform !== "strict") {
    let m = e.replace("-directive", ""), p = t, { colorScheme: g, extend: h, css: v } = p, b = x(p, ["colorScheme", "extend", "css"]), A = h || {}, { colorScheme: R } = A, U = x(A, ["colorScheme"]), I = g || {}, { dark: j } = I, C = x(I, ["dark"]), P = R || {}, { dark: V } = P, L = x(P, ["dark"]), W = y(b) ? this._toVariables({ [m]: w(w({}, b), U) }, n) : {}, M = y(C) ? this._toVariables({ [m]: w(w({}, C), L) }, n) : {}, N = y(j) ? this._toVariables({ [m]: w(w({}, j), V) }, n) : {}, [D, Y] = [(s = W.declarations) != null ? s : "", W.tokens || []], [z, q] = [(i = M.declarations) != null ? i : "", M.tokens || []], [Z, _] = [(u = N.declarations) != null ? u : "", N.tokens || []], O = this.transformCSS(m, `${D}${z}`, "light", "variable", n, o, l, a), H = this.transformCSS(m, Z, "dark", "variable", n, o, l, a);
    d = `${O}${H}`, f = [.../* @__PURE__ */ new Set([...Y, ...q, ..._])], c = k(v, { dt: F });
  }
  return { css: d, tokens: f, style: c };
}, getPresetC({ name: e = "", theme: t = {}, params: n, set: r, defaults: o }) {
  var l;
  let { preset: a, options: s } = t, i = (l = a?.components) == null ? void 0 : l[e];
  return this.getPreset({ name: e, preset: i, options: s, params: n, set: r, defaults: o });
}, getPresetD({ name: e = "", theme: t = {}, params: n, set: r, defaults: o }) {
  var l, a;
  let s = e.replace("-directive", ""), { preset: i, options: u } = t, d = ((l = i?.components) == null ? void 0 : l[s]) || ((a = i?.directives) == null ? void 0 : a[s]);
  return this.getPreset({ name: s, preset: d, options: u, params: n, set: r, defaults: o });
}, applyDarkColorScheme(e) {
  return !(e.darkModeSelector === "none" || e.darkModeSelector === !1);
}, getColorSchemeOption(e, t) {
  var n;
  return this.applyDarkColorScheme(e) ? this.regex.resolve(e.darkModeSelector === !0 ? t.options.darkModeSelector : (n = e.darkModeSelector) != null ? n : t.options.darkModeSelector) : [];
}, getLayerOrder(e, t = {}, n, r) {
  let { cssLayer: o } = t;
  return o ? `@layer ${k(o.order || o.name || "primeui", n)}` : "";
}, getCommonStyleSheet({ name: e = "", theme: t = {}, params: n, props: r = {}, set: o, defaults: l }) {
  let a = this.getCommon({ name: e, theme: t, params: n, set: o, defaults: l }), s = Object.entries(r).reduce((i, [u, d]) => i.push(`${u}="${d}"`) && i, []).join(" ");
  return Object.entries(a || {}).reduce((i, [u, d]) => {
    if (T(d) && Object.hasOwn(d, "css")) {
      let f = Q(d.css), c = `${u}-variables`;
      i.push(`<style type="text/css" data-primevue-style-id="${c}" ${s}>${f}</style>`);
    }
    return i;
  }, []).join("");
}, getStyleSheet({ name: e = "", theme: t = {}, params: n, props: r = {}, set: o, defaults: l }) {
  var a;
  let s = { name: e, theme: t, params: n, set: o, defaults: l }, i = (a = e.includes("-directive") ? this.getPresetD(s) : this.getPresetC(s)) == null ? void 0 : a.css, u = Object.entries(r).reduce((d, [f, c]) => d.push(`${f}="${c}"`) && d, []).join(" ");
  return i ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${u}>${Q(i)}</style>` : "";
}, createTokens(e = {}, t, n = "", r = "", o = {}) {
  let l = function(s, i = {}, u = []) {
    if (u.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: s, path: this.path, paths: i, value: void 0 };
    u.push(this.path), i.name = this.path, i.binding || (i.binding = {});
    let d = this.value;
    if (typeof this.value == "string" && ee.test(this.value)) {
      let f = this.value.trim().replace(ee, (c) => {
        var m;
        let p = c.slice(1, -1), g = this.tokens[p];
        if (!g) return console.warn(`Token not found for path: ${p}`), "__UNRESOLVED__";
        let h = g.computed(s, i, u);
        return Array.isArray(h) && h.length === 2 ? `light-dark(${h[0].value},${h[1].value})` : (m = h?.value) != null ? m : "__UNRESOLVED__";
      });
      d = Ue.test(f.replace(Ye, "0")) ? `calc(${f})` : f;
    }
    return he(i.binding) && delete i.binding, u.pop(), { colorScheme: s, path: this.path, paths: i, value: d.includes("__UNRESOLVED__") ? void 0 : d };
  }, a = (s, i, u) => {
    Object.entries(s).forEach(([d, f]) => {
      let c = K(d, t.variable.excludedKeyRegex) ? i : i ? `${i}.${je(d)}` : je(d), m = u ? `${u}.${d}` : d;
      T(f) ? a(f, c, m) : (o[c] || (o[c] = { paths: [], computed: (p, g = {}, h = []) => {
        if (o[c].paths.length === 1) return o[c].paths[0].computed(o[c].paths[0].scheme, g.binding, h);
        if (p && p !== "none") for (let v = 0; v < o[c].paths.length; v++) {
          let b = o[c].paths[v];
          if (b.scheme === p) return b.computed(p, g.binding, h);
        }
        return o[c].paths.map((v) => v.computed(v.scheme, g[v.scheme], h));
      } }), o[c].paths.push({ path: m, value: f, scheme: m.includes("colorScheme.light") ? "light" : m.includes("colorScheme.dark") ? "dark" : "none", computed: l, tokens: o }));
    });
  };
  return a(e, n, r), o;
}, getTokenValue(e, t, n) {
  var r;
  let o = ((s) => s.split(".").filter((i) => !K(i.toLowerCase(), n.variable.excludedKeyRegex)).join("."))(t), l = t.includes("colorScheme.light") ? "light" : t.includes("colorScheme.dark") ? "dark" : void 0, a = [(r = e[o]) == null ? void 0 : r.computed(l)].flat().filter((s) => s);
  return a.length === 1 ? a[0].value : a.reduce((s = {}, i) => {
    let u = i, { colorScheme: d } = u, f = x(u, ["colorScheme"]);
    return s[d] = f, s;
  }, void 0);
}, getSelectorRule(e, t, n, r) {
  return n === "class" || n === "attr" ? G(y(t) ? `${e}${t},${e} ${t}` : e, r) : G(e, G(t ?? ":root,:host", r));
}, transformCSS(e, t, n, r, o = {}, l, a, s) {
  if (y(t)) {
    let { cssLayer: i } = o;
    if (r !== "style") {
      let u = this.getColorSchemeOption(o, a);
      t = n === "dark" ? u.reduce((d, { type: f, selector: c }) => (y(c) && (d += c.includes("[CSS]") ? c.replace("[CSS]", t) : this.getSelectorRule(c, s, f, t)), d), "") : G(s ?? ":root,:host", t);
    }
    if (i) {
      let u = { name: "primeui" };
      T(i) && (u.name = k(i.name, { name: e, type: r })), y(u.name) && (t = G(`@layer ${u.name}`, t), l?.layerNames(u.name));
    }
    return t;
  }
  return "";
} }, S = { defaults: { variable: { prefix: "p", selector: ":root,:host", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: !1 } }, _theme: void 0, _layerNames: /* @__PURE__ */ new Set(), _loadedStyleNames: /* @__PURE__ */ new Set(), _loadingStyles: /* @__PURE__ */ new Set(), _tokens: {}, update(e = {}) {
  let { theme: t } = e;
  t && (this._theme = de(w({}, t), { options: w(w({}, this.defaults.options), t.options) }), this._tokens = $.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
}, get theme() {
  return this._theme;
}, get preset() {
  var e;
  return ((e = this.theme) == null ? void 0 : e.preset) || {};
}, get options() {
  var e;
  return ((e = this.theme) == null ? void 0 : e.options) || {};
}, get tokens() {
  return this._tokens;
}, getTheme() {
  return this.theme;
}, setTheme(e) {
  this.update({ theme: e }), B.emit("theme:change", e);
}, getPreset() {
  return this.preset;
}, setPreset(e) {
  this._theme = de(w({}, this.theme), { preset: e }), this._tokens = $.createTokens(e, this.defaults), this.clearLoadedStyleNames(), B.emit("preset:change", e), B.emit("theme:change", this.theme);
}, getOptions() {
  return this.options;
}, setOptions(e) {
  this._theme = de(w({}, this.theme), { options: e }), this.clearLoadedStyleNames(), B.emit("options:change", e), B.emit("theme:change", this.theme);
}, getLayerNames() {
  return [...this._layerNames];
}, setLayerNames(e) {
  this._layerNames.add(e);
}, getLoadedStyleNames() {
  return this._loadedStyleNames;
}, isStyleNameLoaded(e) {
  return this._loadedStyleNames.has(e);
}, setLoadedStyleName(e) {
  this._loadedStyleNames.add(e);
}, deleteLoadedStyleName(e) {
  this._loadedStyleNames.delete(e);
}, clearLoadedStyleNames() {
  this._loadedStyleNames.clear();
}, getTokenValue(e) {
  return $.getTokenValue(this.tokens, e, this.defaults);
}, getCommon(e = "", t) {
  return $.getCommon({ name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getComponent(e = "", t) {
  let n = { name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return $.getPresetC(n);
}, getDirective(e = "", t) {
  let n = { name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return $.getPresetD(n);
}, getCustomPreset(e = "", t, n, r) {
  let o = { name: e, preset: t, options: this.options, selector: n, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return $.getPreset(o);
}, getLayerOrderCSS(e = "") {
  return $.getLayerOrder(e, this.options, { names: this.getLayerNames() }, this.defaults);
}, transformCSS(e = "", t, n = "style", r) {
  return $.transformCSS(e, t, r, n, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
}, getCommonStyleSheet(e = "", t, n = {}) {
  return $.getCommonStyleSheet({ name: e, theme: this.theme, params: t, props: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getStyleSheet(e, t, n = {}) {
  return $.getStyleSheet({ name: e, theme: this.theme, params: t, props: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, onStyleMounted(e) {
  this._loadingStyles.add(e);
}, onStyleUpdated(e) {
  this._loadingStyles.add(e);
}, onStyleLoaded(e, { name: t }) {
  this._loadingStyles.size && (this._loadingStyles.delete(t), B.emit(`theme:${t}:load`, e), !this._loadingStyles.size && B.emit("theme:load"));
} }, Qt = `
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    .p-collapsible-enter-active {
        animation: p-animate-collapsible-expand 0.2s ease-out;
        overflow: hidden;
    }

    .p-collapsible-leave-active {
        animation: p-animate-collapsible-collapse 0.2s ease-out;
        overflow: hidden;
    }

    @keyframes p-animate-collapsible-expand {
        from {
            grid-template-rows: 0fr;
        }
        to {
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-collapsible-collapse {
        from {
            grid-template-rows: 1fr;
        }
        to {
            grid-template-rows: 0fr;
        }
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: dt('mask.background');
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter {
        animation: p-animate-overlay-mask-enter dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave {
        animation: p-animate-overlay-mask-leave dt('mask.transition.duration') forwards;
    }

    @keyframes p-animate-overlay-mask-enter {
        from {
            background: transparent;
        }
        to {
            background: dt('mask.background');
        }
    }
    @keyframes p-animate-overlay-mask-leave {
        from {
            background: dt('mask.background');
        }
        to {
            background: transparent;
        }
    }

    .p-anchored-overlay-enter-active {
        animation: p-animate-anchored-overlay-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-anchored-overlay-leave-active {
        animation: p-animate-anchored-overlay-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    @keyframes p-animate-anchored-overlay-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-anchored-overlay-leave {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`;
function te(e) {
  "@babel/helpers - typeof";
  return te = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, te(e);
}
function Ce(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Pe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ce(Object(n), !0).forEach(function(r) {
      en(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ce(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function en(e, t, n) {
  return (t = tn(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function tn(e) {
  var t = nn(e, "string");
  return te(t) == "symbol" ? t : t + "";
}
function nn(e, t) {
  if (te(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (te(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function rn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  ve() && ve().components ? yt(e) : t ? e() : gt(e);
}
var on = 0;
function an(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = le(!1), r = le(e), o = le(null), l = Ht() ? window.document : void 0, a = t.document, s = a === void 0 ? l : a, i = t.immediate, u = i === void 0 ? !0 : i, d = t.manual, f = d === void 0 ? !1 : d, c = t.name, m = c === void 0 ? "style_".concat(++on) : c, p = t.id, g = p === void 0 ? void 0 : p, h = t.media, v = h === void 0 ? void 0 : h, b = t.nonce, A = b === void 0 ? void 0 : b, R = t.first, U = R === void 0 ? !1 : R, I = t.onMounted, j = I === void 0 ? void 0 : I, C = t.onUpdated, P = C === void 0 ? void 0 : C, V = t.onLoad, L = V === void 0 ? void 0 : V, W = t.props, M = W === void 0 ? {} : W, N = function() {
  }, D = function(q) {
    var Z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (s) {
      var _ = Pe(Pe({}, M), Z), O = _.name || m, H = _.id || g, re = _.nonce || A;
      o.value = s.querySelector('style[data-primevue-style-id="'.concat(O, '"]')) || s.getElementById(H) || s.createElement("style"), o.value.isConnected || (r.value = q || e, ie(o.value, {
        type: "text/css",
        id: H,
        media: v,
        nonce: re
      }), U ? s.head.prepend(o.value) : s.head.appendChild(o.value), Bt(o.value, "data-primevue-style-id", O), ie(o.value, _), o.value.onload = function(X) {
        return L?.(X, {
          name: O
        });
      }, j?.(O)), !n.value && (N = vt(r, function(X) {
        o.value.textContent = X, P?.(O);
      }, {
        immediate: !0
      }), n.value = !0);
    }
  }, Y = function() {
    !s || !n.value || (N(), Rt(o.value) && s.head.removeChild(o.value), n.value = !1, o.value = null);
  };
  return u && !f && rn(D), {
    id: g,
    name: m,
    el: o,
    css: r,
    unload: Y,
    load: D,
    isLoaded: ht(n)
  };
}
function ne(e) {
  "@babel/helpers - typeof";
  return ne = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ne(e);
}
var Le, Ne, Te, Ee;
function Ae(e, t) {
  return dn(e) || un(e, t) || ln(e, t) || sn();
}
function sn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ln(e, t) {
  if (e) {
    if (typeof e == "string") return Re(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Re(e, t) : void 0;
  }
}
function Re(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function un(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, l, a, s = [], i = !0, u = !1;
    try {
      if (l = (n = n.call(e)).next, t !== 0) for (; !(i = (r = l.call(n)).done) && (s.push(r.value), s.length !== t); i = !0) ;
    } catch (d) {
      u = !0, o = d;
    } finally {
      try {
        if (!i && n.return != null && (a = n.return(), Object(a) !== a)) return;
      } finally {
        if (u) throw o;
      }
    }
    return s;
  }
}
function dn(e) {
  if (Array.isArray(e)) return e;
}
function Ie(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ce(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ie(Object(n), !0).forEach(function(r) {
      cn(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ie(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function cn(e, t, n) {
  return (t = mn(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function mn(e) {
  var t = fn(e, "string");
  return ne(t) == "symbol" ? t : t + "";
}
function fn(e, t) {
  if (ne(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (ne(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ae(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var pn = function(t) {
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
}, hn = {}, yn = {}, Wn = {
  name: "base",
  css: pn,
  style: Qt,
  classes: hn,
  inlineStyles: yn,
  load: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(l) {
      return l;
    }, o = r(oe(Le || (Le = ae(["", ""])), t));
    return y(o) ? an(Q(o), ce({
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
      return S.transformCSS(n.name || t.name, "".concat(o).concat(oe(Ne || (Ne = ae(["", ""])), r)));
    });
  },
  getCommonTheme: function(t) {
    return S.getCommon(this.name, t);
  },
  getComponentTheme: function(t) {
    return S.getComponent(this.name, t);
  },
  getDirectiveTheme: function(t) {
    return S.getDirective(this.name, t);
  },
  getPresetTheme: function(t, n, r) {
    return S.getCustomPreset(this.name, t, n, r);
  },
  getLayerOrderThemeCSS: function() {
    return S.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var r = k(this.css, {
        dt: F
      }) || "", o = Q(oe(Te || (Te = ae(["", "", ""])), r, t)), l = Object.entries(n).reduce(function(a, s) {
        var i = Ae(s, 2), u = i[0], d = i[1];
        return a.push("".concat(u, '="').concat(d, '"')) && a;
      }, []).join(" ");
      return y(o) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(l, ">").concat(o, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return S.getCommonStyleSheet(this.name, t, n);
  },
  getThemeStyleSheet: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [S.getStyleSheet(this.name, t, n)];
    if (this.style) {
      var o = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), l = oe(Ee || (Ee = ae(["", ""])), k(this.style, {
        dt: F
      })), a = Q(S.transformCSS(o, l)), s = Object.entries(n).reduce(function(i, u) {
        var d = Ae(u, 2), f = d[0], c = d[1];
        return i.push("".concat(f, '="').concat(c, '"')) && i;
      }, []).join(" ");
      y(a) && r.push('<style type="text/css" data-primevue-style-id="'.concat(o, '" ').concat(s, ">").concat(a, "</style>"));
    }
    return r.join("");
  },
  extend: function(t) {
    return ce(ce({}, this), {}, {
      css: void 0,
      style: void 0
    }, t);
  }
}, Mn = Me();
export {
  Tn as A,
  Wn as B,
  bn as C,
  _n as D,
  _t as F,
  $n as H,
  An as I,
  Sn as J,
  Dt as K,
  Nn as L,
  vn as M,
  B as N,
  Mn as P,
  Cn as Q,
  En as R,
  S,
  Ln as T,
  xn as U,
  we as W,
  Rn as Y,
  Bt as _,
  E as a,
  J as b,
  Ot as c,
  Oe as d,
  zt as e,
  Me as f,
  $e as g,
  Et as h,
  T as i,
  jn as j,
  In as k,
  he as l,
  k as m,
  wn as n,
  Pn as o,
  kn as p,
  On as q,
  Vn as r,
  y as s,
  Ht as t,
  De as u,
  At as v,
  Vt as z
};
