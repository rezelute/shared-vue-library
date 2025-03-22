import { hasInjectionContext as ps, inject as vr, getCurrentInstance as Qt, ref as ve, reactive as ba, markRaw as lt, effectScope as ms, isRef as br, isReactive as Vo, toRef as ao, toRaw as vs, nextTick as qt, computed as Se, getCurrentScope as bs, onScopeDispose as ys, watch as Jt, toRefs as an, readonly as ks, onMounted as Zt, useId as ws, mergeProps as fe, createElementBlock as ue, openBlock as Z, createElementVNode as z, renderSlot as Ae, createTextVNode as zt, toDisplayString as Ke, resolveComponent as To, resolveDirective as Cs, withDirectives as ya, createBlock as mr, resolveDynamicComponent as Ss, withCtx as Ie, createCommentVNode as cr, normalizeClass as Po, defineComponent as Ye, unref as re, shallowRef as $s, shallowReactive as _s, h as ka, provide as so, watchEffect as Rs, createVNode as Ge, withModifiers as wa, vModelText as Is, createStaticVNode as xs, Fragment as Ts, renderList as Ps } from "vue";
/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let ct;
const Wt = (e) => ct = e, Es = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function Dr(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var gt;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(gt || (gt = {}));
const dt = typeof window < "u";
function Ca(e, r) {
  for (const t in r) {
    const o = r[t];
    if (!(t in e))
      continue;
    const n = e[t];
    Dr(n) && Dr(o) && !br(o) && !Vo(o) ? e[t] = Ca(n, o) : e[t] = o;
  }
  return e;
}
const Sa = () => {
};
function sn(e, r, t, o = Sa) {
  e.push(r);
  const n = () => {
    const d = e.indexOf(r);
    d > -1 && (e.splice(d, 1), o());
  };
  return !t && bs() && ys(n), n;
}
function Nr(e, ...r) {
  e.slice().forEach((t) => {
    t(...r);
  });
}
const Os = (e) => e(), un = Symbol(), uo = Symbol();
function Eo(e, r) {
  e instanceof Map && r instanceof Map ? r.forEach((t, o) => e.set(o, t)) : e instanceof Set && r instanceof Set && r.forEach(e.add, e);
  for (const t in r) {
    if (!r.hasOwnProperty(t))
      continue;
    const o = r[t], n = e[t];
    Dr(n) && Dr(o) && e.hasOwnProperty(t) && !br(o) && !Vo(o) ? e[t] = Eo(n, o) : e[t] = o;
  }
  return e;
}
const As = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function Ds(e) {
  return !Dr(e) || !e.hasOwnProperty(As);
}
const { assign: Oe } = Object;
function ln(e) {
  return !!(br(e) && e.effect);
}
function cn(e, r, t, o) {
  const { state: n, actions: d, getters: f } = r, g = t.state.value[e];
  let c;
  function s() {
    !g && (process.env.NODE_ENV === "production" || !o) && (t.state.value[e] = n ? n() : {});
    const u = process.env.NODE_ENV !== "production" && o ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      an(ve(n ? n() : {}).value)
    ) : an(t.state.value[e]);
    return Oe(u, d, Object.keys(f || {}).reduce((l, a) => (process.env.NODE_ENV !== "production" && a in u && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${a}" in store "${e}".`), l[a] = lt(Se(() => {
      Wt(t);
      const i = t._s.get(e);
      return f[a].call(i, i);
    })), l), {}));
  }
  return c = Oo(e, s, r, t, o, !0), c;
}
function Oo(e, r, t = {}, o, n, d) {
  let f;
  const g = Oe({ actions: {} }, t);
  if (process.env.NODE_ENV !== "production" && !o._e.active)
    throw new Error("Pinia destroyed");
  const c = { deep: !0 };
  process.env.NODE_ENV !== "production" && (c.onTrigger = (x) => {
    s ? i = x : s == !1 && !S._hotUpdating && (Array.isArray(i) ? i.push(x) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let s, u, l = [], a = [], i;
  const h = o.state.value[e];
  !d && !h && (process.env.NODE_ENV === "production" || !n) && (o.state.value[e] = {});
  const m = ve({});
  let y;
  function p(x) {
    let _;
    s = u = !1, process.env.NODE_ENV !== "production" && (i = []), typeof x == "function" ? (x(o.state.value[e]), _ = {
      type: gt.patchFunction,
      storeId: e,
      events: i
    }) : (Eo(o.state.value[e], x), _ = {
      type: gt.patchObject,
      payload: x,
      storeId: e,
      events: i
    });
    const B = y = Symbol();
    qt().then(() => {
      y === B && (s = !0);
    }), u = !0, Nr(l, _, o.state.value[e]);
  }
  const b = d ? function() {
    const { state: _ } = t, B = _ ? _() : {};
    this.$patch((A) => {
      Oe(A, B);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : Sa
  );
  function w() {
    f.stop(), l = [], a = [], o._s.delete(e);
  }
  const v = (x, _ = "") => {
    if (un in x)
      return x[uo] = _, x;
    const B = function() {
      Wt(o);
      const A = Array.from(arguments), G = [], ee = [];
      function ge(U) {
        G.push(U);
      }
      function le(U) {
        ee.push(U);
      }
      Nr(a, {
        args: A,
        name: B[uo],
        store: S,
        after: ge,
        onError: le
      });
      let H;
      try {
        H = x.apply(this && this.$id === e ? this : S, A);
      } catch (U) {
        throw Nr(ee, U), U;
      }
      return H instanceof Promise ? H.then((U) => (Nr(G, U), U)).catch((U) => (Nr(ee, U), Promise.reject(U))) : (Nr(G, H), H);
    };
    return B[un] = !0, B[uo] = _, B;
  }, k = /* @__PURE__ */ lt({
    actions: {},
    getters: {},
    state: [],
    hotState: m
  }), C = {
    _p: o,
    // _s: scope,
    $id: e,
    $onAction: sn.bind(null, a),
    $patch: p,
    $reset: b,
    $subscribe(x, _ = {}) {
      const B = sn(l, x, _.detached, () => A()), A = f.run(() => Jt(() => o.state.value[e], (G) => {
        (_.flush === "sync" ? u : s) && x({
          storeId: e,
          type: gt.direct,
          events: i
        }, G);
      }, Oe({}, c, _)));
      return B;
    },
    $dispose: w
  }, S = ba(process.env.NODE_ENV !== "production" || process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && dt ? Oe(
    {
      _hmrPayload: k,
      _customProperties: lt(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    C
    // must be added later
    // setupStore
  ) : C);
  o._s.set(e, S);
  const I = (o._a && o._a.runWithContext || Os)(() => o._e.run(() => (f = ms()).run(() => r({ action: v }))));
  for (const x in I) {
    const _ = I[x];
    if (br(_) && !ln(_) || Vo(_))
      process.env.NODE_ENV !== "production" && n ? m.value[x] = ao(I, x) : d || (h && Ds(_) && (br(_) ? _.value = h[x] : Eo(_, h[x])), o.state.value[e][x] = _), process.env.NODE_ENV !== "production" && k.state.push(x);
    else if (typeof _ == "function") {
      const B = process.env.NODE_ENV !== "production" && n ? _ : v(_, x);
      I[x] = B, process.env.NODE_ENV !== "production" && (k.actions[x] = _), g.actions[x] = _;
    } else process.env.NODE_ENV !== "production" && ln(_) && (k.getters[x] = d ? (
      // @ts-expect-error
      t.getters[x]
    ) : _, dt && (I._getters || // @ts-expect-error: same
    (I._getters = lt([]))).push(x));
  }
  if (Oe(S, I), Oe(vs(S), I), Object.defineProperty(S, "$state", {
    get: () => process.env.NODE_ENV !== "production" && n ? m.value : o.state.value[e],
    set: (x) => {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error("cannot set hotState");
      p((_) => {
        Oe(_, x);
      });
    }
  }), process.env.NODE_ENV !== "production" && (S._hotUpdate = lt((x) => {
    S._hotUpdating = !0, x._hmrPayload.state.forEach((_) => {
      if (_ in S.$state) {
        const B = x.$state[_], A = S.$state[_];
        typeof B == "object" && Dr(B) && Dr(A) ? Ca(B, A) : x.$state[_] = A;
      }
      S[_] = ao(x.$state, _);
    }), Object.keys(S.$state).forEach((_) => {
      _ in x.$state || delete S[_];
    }), s = !1, u = !1, o.state.value[e] = ao(x._hmrPayload, "hotState"), u = !0, qt().then(() => {
      s = !0;
    });
    for (const _ in x._hmrPayload.actions) {
      const B = x[_];
      S[_] = //
      v(B, _);
    }
    for (const _ in x._hmrPayload.getters) {
      const B = x._hmrPayload.getters[_], A = d ? (
        // special handling of options api
        Se(() => (Wt(o), B.call(S, S)))
      ) : B;
      S[_] = //
      A;
    }
    Object.keys(S._hmrPayload.getters).forEach((_) => {
      _ in x._hmrPayload.getters || delete S[_];
    }), Object.keys(S._hmrPayload.actions).forEach((_) => {
      _ in x._hmrPayload.actions || delete S[_];
    }), S._hmrPayload = x._hmrPayload, S._getters = x._getters, S._hotUpdating = !1;
  })), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && dt) {
    const x = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((_) => {
      Object.defineProperty(S, _, Oe({ value: S[_] }, x));
    });
  }
  return o._p.forEach((x) => {
    if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && dt) {
      const _ = f.run(() => x({
        store: S,
        app: o._a,
        pinia: o,
        options: g
      }));
      Object.keys(_ || {}).forEach((B) => S._customProperties.add(B)), Oe(S, _);
    } else
      Oe(S, f.run(() => x({
        store: S,
        app: o._a,
        pinia: o,
        options: g
      })));
  }), process.env.NODE_ENV !== "production" && S.$state && typeof S.$state == "object" && typeof S.$state.constructor == "function" && !S.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${S.$id}".`), h && d && t.hydrate && t.hydrate(S.$state, h), s = !0, u = !0, S;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Bs(e, r, t) {
  let o;
  const n = typeof r == "function";
  o = n ? t : r;
  function d(f, g) {
    const c = ps();
    if (f = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && ct && ct._testing ? null : f) || (c ? vr(Es, null) : null), f && Wt(f), process.env.NODE_ENV !== "production" && !ct)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    f = ct, f._s.has(e) || (n ? Oo(e, r, o, f) : cn(e, o, f), process.env.NODE_ENV !== "production" && (d._pinia = f));
    const s = f._s.get(e);
    if (process.env.NODE_ENV !== "production" && g) {
      const u = "__hot:" + e, l = n ? Oo(u, r, o, f, !0) : cn(u, Oe({}, o), f, !0);
      g._hotUpdate(l), delete f.state.value[u], f._s.delete(u);
    }
    if (process.env.NODE_ENV !== "production" && dt) {
      const u = Qt();
      if (u && u.proxy && // avoid adding stores that are just built for hot module replacement
      !g) {
        const l = u.proxy, a = "_pStores" in l ? l._pStores : l._pStores = {};
        a[e] = s;
      }
    }
    return s;
  }
  return d.$id = e, d;
}
function Ns(e, r) {
  return e ? e.classList ? e.classList.contains(r) : new RegExp("(^| )" + r + "( |$)", "gi").test(e.className) : !1;
}
function Ls(e, r) {
  if (e && r) {
    const t = (o) => {
      Ns(e, o) || (e.classList ? e.classList.add(o) : e.className += " " + o);
    };
    [r].flat().filter(Boolean).forEach((o) => o.split(" ").forEach(t));
  }
}
function lo(e, r) {
  if (e && r) {
    const t = (o) => {
      e.classList ? e.classList.remove(o) : e.className = e.className.replace(new RegExp("(^|\\b)" + o.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [r].flat().filter(Boolean).forEach((o) => o.split(" ").forEach(t));
  }
}
function dn(e) {
  return e ? Math.abs(e.scrollLeft) : 0;
}
function Ms(e, r) {
  return e instanceof HTMLElement ? e.offsetWidth : 0;
}
function Us(e) {
  if (e) {
    let r = e.parentNode;
    return r && r instanceof ShadowRoot && r.host && (r = r.host), r;
  }
  return null;
}
function Hs(e) {
  return !!(e !== null && typeof e < "u" && e.nodeName && Us(e));
}
function Tt(e) {
  return typeof HTMLElement < "u" ? e instanceof HTMLElement : e !== null && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
}
function Gt(e, r = {}) {
  if (Tt(e)) {
    const t = (o, n) => {
      var d, f;
      const g = (d = e == null ? void 0 : e.$attrs) != null && d[o] ? [(f = e == null ? void 0 : e.$attrs) == null ? void 0 : f[o]] : [];
      return [n].flat().reduce((c, s) => {
        if (s != null) {
          const u = typeof s;
          if (u === "string" || u === "number")
            c.push(s);
          else if (u === "object") {
            const l = Array.isArray(s) ? t(o, s) : Object.entries(s).map(([a, i]) => o === "style" && (i || i === 0) ? `${a.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${i}` : i ? a : void 0);
            c = l.length ? c.concat(l.filter((a) => !!a)) : c;
          }
        }
        return c;
      }, g);
    };
    Object.entries(r).forEach(([o, n]) => {
      if (n != null) {
        const d = o.match(/^on(.+)/);
        d ? e.addEventListener(d[1].toLowerCase(), n) : o === "p-bind" || o === "pBind" ? Gt(e, n) : (n = o === "class" ? [...new Set(t("class", n))].join(" ").trim() : o === "style" ? t("style", n).join(";").trim() : n, (e.$attrs = e.$attrs || {}) && (e.$attrs[o] = n), e.setAttribute(o, n));
      }
    });
  }
}
function Fs(e, r = {}, ...t) {
  {
    const o = document.createElement(e);
    return Gt(o, r), o.append(...t), o;
  }
}
function js(e, r) {
  return Tt(e) ? e.matches(r) ? e : e.querySelector(r) : null;
}
function Vs(e, r) {
  if (Tt(e)) {
    const t = e.getAttribute(r);
    return isNaN(t) ? t === "true" || t === "false" ? t === "true" : t : +t;
  }
}
function fn(e) {
  if (e) {
    let r = e.offsetHeight;
    const t = getComputedStyle(e);
    return r -= parseFloat(t.paddingTop) + parseFloat(t.paddingBottom) + parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), r;
  }
  return 0;
}
function qs(e) {
  if (e) {
    const r = e.getBoundingClientRect();
    return {
      top: r.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: r.left + (window.pageXOffset || dn(document.documentElement) || dn(document.body) || 0)
    };
  }
  return {
    top: "auto",
    left: "auto"
  };
}
function zs(e, r) {
  return e ? e.offsetHeight : 0;
}
function gn(e) {
  if (e) {
    let r = e.offsetWidth;
    const t = getComputedStyle(e);
    return r -= parseFloat(t.paddingLeft) + parseFloat(t.paddingRight) + parseFloat(t.borderLeftWidth) + parseFloat(t.borderRightWidth), r;
  }
  return 0;
}
function Ws() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Gs() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
function Xs(e, r = "", t) {
  Tt(e) && t !== null && t !== void 0 && e.setAttribute(r, t);
}
function Gr(...e) {
  if (e) {
    let r = [];
    for (let t = 0; t < e.length; t++) {
      const o = e[t];
      if (!o)
        continue;
      const n = typeof o;
      if (n === "string" || n === "number")
        r.push(o);
      else if (n === "object") {
        const d = Array.isArray(o) ? [Gr(...o)] : Object.entries(o).map(([f, g]) => g ? f : void 0);
        r = d.length ? r.concat(d.filter((f) => !!f)) : r;
      }
    }
    return r.join(" ").trim();
  }
}
function $a() {
  const e = /* @__PURE__ */ new Map();
  return {
    on(r, t) {
      let o = e.get(r);
      return o ? o.push(t) : o = [t], e.set(r, o), this;
    },
    off(r, t) {
      const o = e.get(r);
      return o && o.splice(o.indexOf(t) >>> 0, 1), this;
    },
    emit(r, t) {
      const o = e.get(r);
      o && o.forEach((n) => {
        n(t);
      });
    },
    clear() {
      e.clear();
    }
  };
}
function Br(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && typeof e == "object" && Object.keys(e).length === 0;
}
function qo(e) {
  return typeof e == "function" && "call" in e && "apply" in e;
}
function se(e) {
  return !Br(e);
}
function yr(e, r = !0) {
  return e instanceof Object && e.constructor === Object && (r || Object.keys(e).length !== 0);
}
function De(e, ...r) {
  return qo(e) ? e(...r) : e;
}
function _e(e, r = !0) {
  return typeof e == "string" && (r || e !== "");
}
function Xe(e) {
  return _e(e) ? e.replace(/(-|_)/g, "").toLowerCase() : e;
}
function zo(e, r = "", t = {}) {
  const o = Xe(r).split("."), n = o.shift();
  if (n) {
    if (yr(e)) {
      const d = Object.keys(e).find((f) => Xe(f) === n) || "";
      return zo(De(e[d], t), o.join("."), t);
    }
    return;
  }
  return De(e, t);
}
function eo(e, r = !0) {
  return Array.isArray(e) && (r || e.length !== 0);
}
function Ks(e) {
  return se(e) && !isNaN(e);
}
function dr(e, r) {
  if (r) {
    const t = r.test(e);
    return r.lastIndex = 0, t;
  }
  return !1;
}
function ht(e) {
  return e && e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":");
}
function Ys(e) {
  return _e(e, !1) ? e[0].toUpperCase() + e.slice(1) : e;
}
function _a(e) {
  return _e(e) ? e.replace(/(_)/g, "-").replace(/[A-Z]/g, (r, t) => t === 0 ? r : "-" + r.toLowerCase()).toLowerCase() : e;
}
function hn(e) {
  return _e(e) ? e.replace(/[A-Z]/g, (r, t) => t === 0 ? r : "." + r.toLowerCase()).toLowerCase() : e;
}
var At = {};
function Qs(e = "pui_id_") {
  return Object.hasOwn(At, e) || (At[e] = 0), At[e]++, `${e}${At[e]}`;
}
var Js = Object.defineProperty, Zs = Object.defineProperties, eu = Object.getOwnPropertyDescriptors, Xt = Object.getOwnPropertySymbols, Ra = Object.prototype.hasOwnProperty, Ia = Object.prototype.propertyIsEnumerable, pn = (e, r, t) => r in e ? Js(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Le = (e, r) => {
  for (var t in r || (r = {}))
    Ra.call(r, t) && pn(e, t, r[t]);
  if (Xt)
    for (var t of Xt(r))
      Ia.call(r, t) && pn(e, t, r[t]);
  return e;
}, co = (e, r) => Zs(e, eu(r)), Qe = (e, r) => {
  var t = {};
  for (var o in e)
    Ra.call(e, o) && r.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && Xt)
    for (var o of Xt(e))
      r.indexOf(o) < 0 && Ia.call(e, o) && (t[o] = e[o]);
  return t;
}, ru = $a(), Ce = ru;
function mn(e, r) {
  eo(e) ? e.push(...r || []) : yr(e) && Object.assign(e, r);
}
function tu(e) {
  return yr(e) && e.hasOwnProperty("$value") && e.hasOwnProperty("$type") ? e.$value : e;
}
function ou(e) {
  return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function Ao(e = "", r = "") {
  return ou(`${_e(e, !1) && _e(r, !1) ? `${e}-` : e}${r}`);
}
function xa(e = "", r = "") {
  return `--${Ao(e, r)}`;
}
function nu(e = "") {
  const r = (e.match(/{/g) || []).length, t = (e.match(/}/g) || []).length;
  return (r + t) % 2 !== 0;
}
function Ta(e, r = "", t = "", o = [], n) {
  if (_e(e)) {
    const d = /{([^}]*)}/g, f = e.trim();
    if (nu(f))
      return;
    if (dr(f, d)) {
      const g = f.replaceAll(d, (u) => {
        const a = u.replace(/{|}/g, "").split(".").filter((i) => !o.some((h) => dr(i, h)));
        return `var(${xa(t, _a(a.join("-")))}${se(n) ? `, ${n}` : ""})`;
      }), c = /(\d+\s+[\+\-\*\/]\s+\d+)/g, s = /var\([^)]+\)/g;
      return dr(g.replace(s, "0"), c) ? `calc(${g})` : g;
    }
    return f;
  } else if (Ks(e))
    return e;
}
function iu(e, r, t) {
  _e(r, !1) && e.push(`${r}:${t};`);
}
function Wr(e, r) {
  return e ? `${e}{${r}}` : "";
}
var pt = (...e) => au(de.getTheme(), ...e), au = (e = {}, r, t, o) => {
  if (r) {
    const { variable: n, options: d } = de.defaults || {}, { prefix: f, transform: g } = (e == null ? void 0 : e.options) || d || {}, s = dr(r, /{([^}]*)}/g) ? r : `{${r}}`;
    return o === "value" || Br(o) && g === "strict" ? de.getTokenValue(r) : Ta(s, void 0, f, [n.excludedKeyRegex], t);
  }
  return "";
};
function su(e, r = {}) {
  const t = de.defaults.variable, { prefix: o = t.prefix, selector: n = t.selector, excludedKeyRegex: d = t.excludedKeyRegex } = r, f = (s, u = "") => Object.entries(s).reduce(
    (l, [a, i]) => {
      const h = dr(a, d) ? Ao(u) : Ao(u, _a(a)), m = tu(i);
      if (yr(m)) {
        const { variables: y, tokens: p } = f(m, h);
        mn(l.tokens, p), mn(l.variables, y);
      } else
        l.tokens.push((o ? h.replace(`${o}-`, "") : h).replaceAll("-", ".")), iu(l.variables, xa(h), Ta(m, h, o, [d]));
      return l;
    },
    { variables: [], tokens: [] }
  ), { variables: g, tokens: c } = f(e, o);
  return {
    value: g,
    tokens: c,
    declarations: g.join(""),
    css: Wr(n, g.join(""))
  };
}
var Ne = {
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
      const r = Object.keys(this.rules).filter((t) => t !== "custom").map((t) => this.rules[t]);
      return [e].flat().map((t) => {
        var o;
        return (o = r.map((n) => n.resolve(t)).find((n) => n.matched)) != null ? o : this.rules.custom.resolve(t);
      });
    }
  },
  _toVariables(e, r) {
    return su(e, { prefix: r == null ? void 0 : r.prefix });
  },
  getCommon({ name: e = "", theme: r = {}, params: t, set: o, defaults: n }) {
    var d, f, g, c, s, u, l;
    const { preset: a, options: i } = r;
    let h, m, y, p, b, w, v;
    if (se(a) && i.transform !== "strict") {
      const { primitive: k, semantic: C, extend: S } = a, T = C || {}, { colorScheme: I } = T, x = Qe(T, ["colorScheme"]), _ = S || {}, { colorScheme: B } = _, A = Qe(_, ["colorScheme"]), G = I || {}, { dark: ee } = G, ge = Qe(G, ["dark"]), le = B || {}, { dark: H } = le, U = Qe(le, ["dark"]), F = se(k) ? this._toVariables({ primitive: k }, i) : {}, j = se(x) ? this._toVariables({ semantic: x }, i) : {}, X = se(ge) ? this._toVariables({ light: ge }, i) : {}, oe = se(ee) ? this._toVariables({ dark: ee }, i) : {}, R = se(A) ? this._toVariables({ semantic: A }, i) : {}, D = se(U) ? this._toVariables({ light: U }, i) : {}, O = se(H) ? this._toVariables({ dark: H }, i) : {}, [$, P] = [(d = F.declarations) != null ? d : "", F.tokens], [E, L] = [(f = j.declarations) != null ? f : "", j.tokens || []], [N, q] = [(g = X.declarations) != null ? g : "", X.tokens || []], [M, V] = [(c = oe.declarations) != null ? c : "", oe.tokens || []], [W, be] = [(s = R.declarations) != null ? s : "", R.tokens || []], [ie, Re] = [(u = D.declarations) != null ? u : "", D.tokens || []], [Be, ae] = [(l = O.declarations) != null ? l : "", O.tokens || []];
      h = this.transformCSS(e, $, "light", "variable", i, o, n), m = P;
      const Te = this.transformCSS(e, `${E}${N}`, "light", "variable", i, o, n), Jr = this.transformCSS(e, `${M}`, "dark", "variable", i, o, n);
      y = `${Te}${Jr}`, p = [.../* @__PURE__ */ new Set([...L, ...q, ...V])];
      const fr = this.transformCSS(e, `${W}${ie}color-scheme:light`, "light", "variable", i, o, n), ye = this.transformCSS(e, `${Be}color-scheme:dark`, "dark", "variable", i, o, n);
      b = `${fr}${ye}`, w = [.../* @__PURE__ */ new Set([...be, ...Re, ...ae])], v = De(a.css, { dt: pt });
    }
    return {
      primitive: {
        css: h,
        tokens: m
      },
      semantic: {
        css: y,
        tokens: p
      },
      global: {
        css: b,
        tokens: w
      },
      style: v
    };
  },
  getPreset({ name: e = "", preset: r = {}, options: t, params: o, set: n, defaults: d, selector: f }) {
    var g, c, s;
    let u, l, a;
    if (se(r) && t.transform !== "strict") {
      const i = e.replace("-directive", ""), h = r, { colorScheme: m, extend: y, css: p } = h, b = Qe(h, ["colorScheme", "extend", "css"]), w = y || {}, { colorScheme: v } = w, k = Qe(w, ["colorScheme"]), C = m || {}, { dark: S } = C, T = Qe(C, ["dark"]), I = v || {}, { dark: x } = I, _ = Qe(I, ["dark"]), B = se(b) ? this._toVariables({ [i]: Le(Le({}, b), k) }, t) : {}, A = se(T) ? this._toVariables({ [i]: Le(Le({}, T), _) }, t) : {}, G = se(S) ? this._toVariables({ [i]: Le(Le({}, S), x) }, t) : {}, [ee, ge] = [(g = B.declarations) != null ? g : "", B.tokens || []], [le, H] = [(c = A.declarations) != null ? c : "", A.tokens || []], [U, F] = [(s = G.declarations) != null ? s : "", G.tokens || []], j = this.transformCSS(i, `${ee}${le}`, "light", "variable", t, n, d, f), X = this.transformCSS(i, U, "dark", "variable", t, n, d, f);
      u = `${j}${X}`, l = [.../* @__PURE__ */ new Set([...ge, ...H, ...F])], a = De(p, { dt: pt });
    }
    return {
      css: u,
      tokens: l,
      style: a
    };
  },
  getPresetC({ name: e = "", theme: r = {}, params: t, set: o, defaults: n }) {
    var d;
    const { preset: f, options: g } = r, c = (d = f == null ? void 0 : f.components) == null ? void 0 : d[e];
    return this.getPreset({ name: e, preset: c, options: g, params: t, set: o, defaults: n });
  },
  // @deprecated - use getPresetC instead
  getPresetD({ name: e = "", theme: r = {}, params: t, set: o, defaults: n }) {
    var d, f;
    const g = e.replace("-directive", ""), { preset: c, options: s } = r, u = ((d = c == null ? void 0 : c.components) == null ? void 0 : d[g]) || ((f = c == null ? void 0 : c.directives) == null ? void 0 : f[g]);
    return this.getPreset({ name: g, preset: u, options: s, params: t, set: o, defaults: n });
  },
  applyDarkColorScheme(e) {
    return !(e.darkModeSelector === "none" || e.darkModeSelector === !1);
  },
  getColorSchemeOption(e, r) {
    var t;
    return this.applyDarkColorScheme(e) ? this.regex.resolve(e.darkModeSelector === !0 ? r.options.darkModeSelector : (t = e.darkModeSelector) != null ? t : r.options.darkModeSelector) : [];
  },
  getLayerOrder(e, r = {}, t, o) {
    const { cssLayer: n } = r;
    return n ? `@layer ${De(n.order || "primeui", t)}` : "";
  },
  getCommonStyleSheet({ name: e = "", theme: r = {}, params: t, props: o = {}, set: n, defaults: d }) {
    const f = this.getCommon({ name: e, theme: r, params: t, set: n, defaults: d }), g = Object.entries(o).reduce((c, [s, u]) => c.push(`${s}="${u}"`) && c, []).join(" ");
    return Object.entries(f || {}).reduce((c, [s, u]) => {
      if (u != null && u.css) {
        const l = ht(u == null ? void 0 : u.css), a = `${s}-variables`;
        c.push(`<style type="text/css" data-primevue-style-id="${a}" ${g}>${l}</style>`);
      }
      return c;
    }, []).join("");
  },
  getStyleSheet({ name: e = "", theme: r = {}, params: t, props: o = {}, set: n, defaults: d }) {
    var f;
    const g = { name: e, theme: r, params: t, set: n, defaults: d }, c = (f = e.includes("-directive") ? this.getPresetD(g) : this.getPresetC(g)) == null ? void 0 : f.css, s = Object.entries(o).reduce((u, [l, a]) => u.push(`${l}="${a}"`) && u, []).join(" ");
    return c ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${s}>${ht(c)}</style>` : "";
  },
  createTokens(e = {}, r, t = "", o = "", n = {}) {
    return Object.entries(e).forEach(([d, f]) => {
      const g = dr(d, r.variable.excludedKeyRegex) ? t : t ? `${t}.${hn(d)}` : hn(d), c = o ? `${o}.${d}` : d;
      yr(f) ? this.createTokens(f, r, g, c, n) : (n[g] || (n[g] = {
        paths: [],
        computed(s, u = {}) {
          var l, a;
          return this.paths.length === 1 ? (l = this.paths[0]) == null ? void 0 : l.computed(this.paths[0].scheme, u.binding) : s && s !== "none" ? (a = this.paths.find((i) => i.scheme === s)) == null ? void 0 : a.computed(s, u.binding) : this.paths.map((i) => i.computed(i.scheme, u[i.scheme]));
        }
      }), n[g].paths.push({
        path: c,
        value: f,
        scheme: c.includes("colorScheme.light") ? "light" : c.includes("colorScheme.dark") ? "dark" : "none",
        computed(s, u = {}) {
          const l = /{([^}]*)}/g;
          let a = f;
          if (u.name = this.path, u.binding || (u.binding = {}), dr(f, l)) {
            const h = f.trim().replaceAll(l, (p) => {
              var b;
              const w = p.replace(/{|}/g, ""), v = (b = n[w]) == null ? void 0 : b.computed(s, u);
              return eo(v) && v.length === 2 ? `light-dark(${v[0].value},${v[1].value})` : v == null ? void 0 : v.value;
            }), m = /(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g, y = /var\([^)]+\)/g;
            a = dr(h.replace(y, "0"), m) ? `calc(${h})` : h;
          }
          return Br(u.binding) && delete u.binding, {
            colorScheme: s,
            path: this.path,
            paths: u,
            value: a.includes("undefined") ? void 0 : a
          };
        }
      }));
    }), n;
  },
  getTokenValue(e, r, t) {
    var o;
    const d = ((c) => c.split(".").filter((u) => !dr(u.toLowerCase(), t.variable.excludedKeyRegex)).join("."))(r), f = r.includes("colorScheme.light") ? "light" : r.includes("colorScheme.dark") ? "dark" : void 0, g = [(o = e[d]) == null ? void 0 : o.computed(f)].flat().filter((c) => c);
    return g.length === 1 ? g[0].value : g.reduce((c = {}, s) => {
      const u = s, { colorScheme: l } = u, a = Qe(u, ["colorScheme"]);
      return c[l] = a, c;
    }, void 0);
  },
  getSelectorRule(e, r, t, o) {
    return t === "class" || t === "attr" ? Wr(se(r) ? `${e}${r},${e} ${r}` : e, o) : Wr(e, se(r) ? Wr(r, o) : o);
  },
  transformCSS(e, r, t, o, n = {}, d, f, g) {
    if (se(r)) {
      const { cssLayer: c } = n;
      if (o !== "style") {
        const s = this.getColorSchemeOption(n, f);
        r = t === "dark" ? s.reduce((u, { type: l, selector: a }) => (se(a) && (u += a.includes("[CSS]") ? a.replace("[CSS]", r) : this.getSelectorRule(a, g, l, r)), u), "") : Wr(g ?? ":root", r);
      }
      if (c) {
        const s = {
          name: "primeui"
        };
        yr(c) && (s.name = De(c.name, { name: e, type: o })), se(s.name) && (r = Wr(`@layer ${s.name}`, r), d == null || d.layerNames(s.name));
      }
      return r;
    }
    return "";
  }
}, de = {
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
    const { theme: r } = e;
    r && (this._theme = co(Le({}, r), {
      options: Le(Le({}, this.defaults.options), r.options)
    }), this._tokens = Ne.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
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
    this.update({ theme: e }), Ce.emit("theme:change", e);
  },
  getPreset() {
    return this.preset;
  },
  setPreset(e) {
    this._theme = co(Le({}, this.theme), { preset: e }), this._tokens = Ne.createTokens(e, this.defaults), this.clearLoadedStyleNames(), Ce.emit("preset:change", e), Ce.emit("theme:change", this.theme);
  },
  getOptions() {
    return this.options;
  },
  setOptions(e) {
    this._theme = co(Le({}, this.theme), { options: e }), this.clearLoadedStyleNames(), Ce.emit("options:change", e), Ce.emit("theme:change", this.theme);
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
    return Ne.getTokenValue(this.tokens, e, this.defaults);
  },
  getCommon(e = "", r) {
    return Ne.getCommon({ name: e, theme: this.theme, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getComponent(e = "", r) {
    const t = { name: e, theme: this.theme, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return Ne.getPresetC(t);
  },
  // @deprecated - use getComponent instead
  getDirective(e = "", r) {
    const t = { name: e, theme: this.theme, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return Ne.getPresetD(t);
  },
  getCustomPreset(e = "", r, t, o) {
    const n = { name: e, preset: r, options: this.options, selector: t, params: o, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return Ne.getPreset(n);
  },
  getLayerOrderCSS(e = "") {
    return Ne.getLayerOrder(e, this.options, { names: this.getLayerNames() }, this.defaults);
  },
  transformCSS(e = "", r, t = "style", o) {
    return Ne.transformCSS(e, r, o, t, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
  },
  getCommonStyleSheet(e = "", r, t = {}) {
    return Ne.getCommonStyleSheet({ name: e, theme: this.theme, params: r, props: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getStyleSheet(e, r, t = {}) {
    return Ne.getStyleSheet({ name: e, theme: this.theme, params: r, props: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  onStyleMounted(e) {
    this._loadingStyles.add(e);
  },
  onStyleUpdated(e) {
    this._loadingStyles.add(e);
  },
  onStyleLoaded(e, { name: r }) {
    this._loadingStyles.size && (this._loadingStyles.delete(r), Ce.emit(`theme:${r}:load`, e), !this._loadingStyles.size && Ce.emit("theme:load"));
  }
}, pr = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames: function() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded: function(r) {
    return this._loadedStyleNames.has(r);
  },
  setLoadedStyleName: function(r) {
    this._loadedStyleNames.add(r);
  },
  deleteLoadedStyleName: function(r) {
    this._loadedStyleNames.delete(r);
  },
  clearLoadedStyleNames: function() {
    this._loadedStyleNames.clear();
  }
}, uu = ({ dt: e }) => `
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
function bt(e) {
  "@babel/helpers - typeof";
  return bt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, bt(e);
}
function vn(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function bn(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? vn(Object(t), !0).forEach(function(o) {
      lu(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : vn(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return e;
}
function lu(e, r, t) {
  return (r = cu(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function cu(e) {
  var r = du(e, "string");
  return bt(r) == "symbol" ? r : r + "";
}
function du(e, r) {
  if (bt(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(e, r);
    if (bt(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function fu(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  Qt() ? Zt(e) : r ? e() : qt(e);
}
var gu = 0;
function hu(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = ve(!1), o = ve(e), n = ve(null), d = Ws() ? window.document : void 0, f = r.document, g = f === void 0 ? d : f, c = r.immediate, s = c === void 0 ? !0 : c, u = r.manual, l = u === void 0 ? !1 : u, a = r.name, i = a === void 0 ? "style_".concat(++gu) : a, h = r.id, m = h === void 0 ? void 0 : h, y = r.media, p = y === void 0 ? void 0 : y, b = r.nonce, w = b === void 0 ? void 0 : b, v = r.first, k = v === void 0 ? !1 : v, C = r.onMounted, S = C === void 0 ? void 0 : C, T = r.onUpdated, I = T === void 0 ? void 0 : T, x = r.onLoad, _ = x === void 0 ? void 0 : x, B = r.props, A = B === void 0 ? {} : B, G = function() {
  }, ee = function(H) {
    var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (g) {
      var F = bn(bn({}, A), U), j = F.name || i, X = F.id || m, oe = F.nonce || w;
      n.value = g.querySelector('style[data-primevue-style-id="'.concat(j, '"]')) || g.getElementById(X) || g.createElement("style"), n.value.isConnected || (o.value = H || e, Gt(n.value, {
        type: "text/css",
        id: X,
        media: p,
        nonce: oe
      }), k ? g.head.prepend(n.value) : g.head.appendChild(n.value), Xs(n.value, "data-primevue-style-id", j), Gt(n.value, F), n.value.onload = function(R) {
        return _ == null ? void 0 : _(R, {
          name: j
        });
      }, S == null || S(j)), !t.value && (G = Jt(o, function(R) {
        n.value.textContent = R, I == null || I(j);
      }, {
        immediate: !0
      }), t.value = !0);
    }
  }, ge = function() {
    !g || !t.value || (G(), Hs(n.value) && g.head.removeChild(n.value), t.value = !1);
  };
  return s && !l && fu(ee), {
    id: m,
    name: i,
    el: n,
    css: o,
    unload: ge,
    load: ee,
    isLoaded: ks(t)
  };
}
function yt(e) {
  "@babel/helpers - typeof";
  return yt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, yt(e);
}
function yn(e, r) {
  return bu(e) || vu(e, r) || mu(e, r) || pu();
}
function pu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mu(e, r) {
  if (e) {
    if (typeof e == "string") return kn(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? kn(e, r) : void 0;
  }
}
function kn(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, o = Array(r); t < r; t++) o[t] = e[t];
  return o;
}
function vu(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var o, n, d, f, g = [], c = !0, s = !1;
    try {
      if (d = (t = t.call(e)).next, r !== 0) for (; !(c = (o = d.call(t)).done) && (g.push(o.value), g.length !== r); c = !0) ;
    } catch (u) {
      s = !0, n = u;
    } finally {
      try {
        if (!c && t.return != null && (f = t.return(), Object(f) !== f)) return;
      } finally {
        if (s) throw n;
      }
    }
    return g;
  }
}
function bu(e) {
  if (Array.isArray(e)) return e;
}
function wn(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function fo(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? wn(Object(t), !0).forEach(function(o) {
      yu(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : wn(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return e;
}
function yu(e, r, t) {
  return (r = ku(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function ku(e) {
  var r = wu(e, "string");
  return yt(r) == "symbol" ? r : r + "";
}
function wu(e, r) {
  if (yt(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(e, r);
    if (yt(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var Cu = function(r) {
  var t = r.dt;
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
}, Su = {}, $u = {}, pe = {
  name: "base",
  css: Cu,
  style: uu,
  classes: Su,
  inlineStyles: $u,
  load: function(r) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(d) {
      return d;
    }, n = o(De(r, {
      dt: pt
    }));
    return se(n) ? hu(ht(n), fo({
      name: this.name
    }, t)) : {};
  },
  loadCSS: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, r);
  },
  loadStyle: function() {
    var r = this, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return this.load(this.style, t, function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return de.transformCSS(t.name || r.name, "".concat(n).concat(o));
    });
  },
  getCommonTheme: function(r) {
    return de.getCommon(this.name, r);
  },
  getComponentTheme: function(r) {
    return de.getComponent(this.name, r);
  },
  getDirectiveTheme: function(r) {
    return de.getDirective(this.name, r);
  },
  getPresetTheme: function(r, t, o) {
    return de.getCustomPreset(this.name, r, t, o);
  },
  getLayerOrderThemeCSS: function() {
    return de.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var o = De(this.css, {
        dt: pt
      }) || "", n = ht("".concat(o).concat(r)), d = Object.entries(t).reduce(function(f, g) {
        var c = yn(g, 2), s = c[0], u = c[1];
        return f.push("".concat(s, '="').concat(u, '"')) && f;
      }, []).join(" ");
      return se(n) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(d, ">").concat(n, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function(r) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return de.getCommonStyleSheet(this.name, r, t);
  },
  getThemeStyleSheet: function(r) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = [de.getStyleSheet(this.name, r, t)];
    if (this.style) {
      var n = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), d = De(this.style, {
        dt: pt
      }), f = ht(de.transformCSS(n, d)), g = Object.entries(t).reduce(function(c, s) {
        var u = yn(s, 2), l = u[0], a = u[1];
        return c.push("".concat(l, '="').concat(a, '"')) && c;
      }, []).join(" ");
      se(f) && o.push('<style type="text/css" data-primevue-style-id="'.concat(n, '" ').concat(g, ">").concat(f, "</style>"));
    }
    return o.join("");
  },
  extend: function(r) {
    return fo(fo({}, this), {}, {
      css: void 0,
      style: void 0
    }, r);
  }
};
function _u() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pc", r = ws();
  return "".concat(e).concat(r.replace("v-", "").replaceAll("-", "_"));
}
var Cn = pe.extend({
  name: "common"
});
function kt(e) {
  "@babel/helpers - typeof";
  return kt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, kt(e);
}
function Ru(e) {
  return Oa(e) || Iu(e) || Ea(e) || Pa();
}
function Iu(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Zr(e, r) {
  return Oa(e) || xu(e, r) || Ea(e, r) || Pa();
}
function Pa() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ea(e, r) {
  if (e) {
    if (typeof e == "string") return Sn(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Sn(e, r) : void 0;
  }
}
function Sn(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, o = Array(r); t < r; t++) o[t] = e[t];
  return o;
}
function xu(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var o, n, d, f, g = [], c = !0, s = !1;
    try {
      if (d = (t = t.call(e)).next, r === 0) {
        if (Object(t) !== t) return;
        c = !1;
      } else for (; !(c = (o = d.call(t)).done) && (g.push(o.value), g.length !== r); c = !0) ;
    } catch (u) {
      s = !0, n = u;
    } finally {
      try {
        if (!c && t.return != null && (f = t.return(), Object(f) !== f)) return;
      } finally {
        if (s) throw n;
      }
    }
    return g;
  }
}
function Oa(e) {
  if (Array.isArray(e)) return e;
}
function $n(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function Q(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? $n(Object(t), !0).forEach(function(o) {
      ft(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $n(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return e;
}
function ft(e, r, t) {
  return (r = Tu(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function Tu(e) {
  var r = Pu(e, "string");
  return kt(r) == "symbol" ? r : r + "";
}
function Pu(e, r) {
  if (kt(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(e, r);
    if (kt(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var Pt = {
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
      handler: function(r) {
        Ce.off("theme:change", this._loadCoreStyles), r || (this._loadCoreStyles(), this._themeChangeListener(this._loadCoreStyles));
      }
    },
    dt: {
      immediate: !0,
      handler: function(r, t) {
        var o = this;
        Ce.off("theme:change", this._themeScopedListener), r ? (this._loadScopedThemeStyles(r), this._themeScopedListener = function() {
          return o._loadScopedThemeStyles(r);
        }, this._themeChangeListener(this._themeScopedListener)) : this._unloadScopedThemeStyles();
      }
    }
  },
  scopedStyleEl: void 0,
  rootEl: void 0,
  uid: void 0,
  $attrSelector: void 0,
  beforeCreate: function() {
    var r, t, o, n, d, f, g, c, s, u, l, a = (r = this.pt) === null || r === void 0 ? void 0 : r._usept, i = a ? (t = this.pt) === null || t === void 0 || (t = t.originalValue) === null || t === void 0 ? void 0 : t[this.$.type.name] : void 0, h = a ? (o = this.pt) === null || o === void 0 || (o = o.value) === null || o === void 0 ? void 0 : o[this.$.type.name] : this.pt;
    (n = h || i) === null || n === void 0 || (n = n.hooks) === null || n === void 0 || (d = n.onBeforeCreate) === null || d === void 0 || d.call(n);
    var m = (f = this.$primevueConfig) === null || f === void 0 || (f = f.pt) === null || f === void 0 ? void 0 : f._usept, y = m ? (g = this.$primevue) === null || g === void 0 || (g = g.config) === null || g === void 0 || (g = g.pt) === null || g === void 0 ? void 0 : g.originalValue : void 0, p = m ? (c = this.$primevue) === null || c === void 0 || (c = c.config) === null || c === void 0 || (c = c.pt) === null || c === void 0 ? void 0 : c.value : (s = this.$primevue) === null || s === void 0 || (s = s.config) === null || s === void 0 ? void 0 : s.pt;
    (u = p || y) === null || u === void 0 || (u = u[this.$.type.name]) === null || u === void 0 || (u = u.hooks) === null || u === void 0 || (l = u.onBeforeCreate) === null || l === void 0 || l.call(u), this.$attrSelector = _u(), this.uid = this.$attrs.id || this.$attrSelector.replace("pc", "pv_id_");
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    var r;
    this.rootEl = js(Tt(this.$el) ? this.$el : (r = this.$el) === null || r === void 0 ? void 0 : r.parentElement, "[".concat(this.$attrSelector, "]")), this.rootEl && (this.rootEl.$pc = Q({
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
    _hook: function(r) {
      if (!this.$options.hostName) {
        var t = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, "hooks.".concat(r)), o = this._useDefaultPT(this._getOptionValue, "hooks.".concat(r));
        t == null || t(), o == null || o();
      }
    },
    _mergeProps: function(r) {
      for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
        o[n - 1] = arguments[n];
      return qo(r) ? r.apply(void 0, o) : fe.apply(void 0, o);
    },
    _load: function() {
      pr.isStyleNameLoaded("base") || (pe.loadCSS(this.$styleOptions), this._loadGlobalStyles(), pr.setLoadedStyleName("base")), this._loadThemeStyles();
    },
    _loadStyles: function() {
      this._load(), this._themeChangeListener(this._load);
    },
    _loadCoreStyles: function() {
      var r, t;
      !pr.isStyleNameLoaded((r = this.$style) === null || r === void 0 ? void 0 : r.name) && (t = this.$style) !== null && t !== void 0 && t.name && (Cn.loadCSS(this.$styleOptions), this.$options.style && this.$style.loadCSS(this.$styleOptions), pr.setLoadedStyleName(this.$style.name));
    },
    _loadGlobalStyles: function() {
      var r = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      se(r) && pe.load(r, Q({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function() {
      var r, t;
      if (!(this.isUnstyled || this.$theme === "none")) {
        if (!de.isStyleNameLoaded("common")) {
          var o, n, d = ((o = this.$style) === null || o === void 0 || (n = o.getCommonTheme) === null || n === void 0 ? void 0 : n.call(o)) || {}, f = d.primitive, g = d.semantic, c = d.global, s = d.style;
          pe.load(f == null ? void 0 : f.css, Q({
            name: "primitive-variables"
          }, this.$styleOptions)), pe.load(g == null ? void 0 : g.css, Q({
            name: "semantic-variables"
          }, this.$styleOptions)), pe.load(c == null ? void 0 : c.css, Q({
            name: "global-variables"
          }, this.$styleOptions)), pe.loadStyle(Q({
            name: "global-style"
          }, this.$styleOptions), s), de.setLoadedStyleName("common");
        }
        if (!de.isStyleNameLoaded((r = this.$style) === null || r === void 0 ? void 0 : r.name) && (t = this.$style) !== null && t !== void 0 && t.name) {
          var u, l, a, i, h = ((u = this.$style) === null || u === void 0 || (l = u.getComponentTheme) === null || l === void 0 ? void 0 : l.call(u)) || {}, m = h.css, y = h.style;
          (a = this.$style) === null || a === void 0 || a.load(m, Q({
            name: "".concat(this.$style.name, "-variables")
          }, this.$styleOptions)), (i = this.$style) === null || i === void 0 || i.loadStyle(Q({
            name: "".concat(this.$style.name, "-style")
          }, this.$styleOptions), y), de.setLoadedStyleName(this.$style.name);
        }
        if (!de.isStyleNameLoaded("layer-order")) {
          var p, b, w = (p = this.$style) === null || p === void 0 || (b = p.getLayerOrderThemeCSS) === null || b === void 0 ? void 0 : b.call(p);
          pe.load(w, Q({
            name: "layer-order",
            first: !0
          }, this.$styleOptions)), de.setLoadedStyleName("layer-order");
        }
      }
    },
    _loadScopedThemeStyles: function(r) {
      var t, o, n, d = ((t = this.$style) === null || t === void 0 || (o = t.getPresetTheme) === null || o === void 0 ? void 0 : o.call(t, r, "[".concat(this.$attrSelector, "]"))) || {}, f = d.css, g = (n = this.$style) === null || n === void 0 ? void 0 : n.load(f, Q({
        name: "".concat(this.$attrSelector, "-").concat(this.$style.name)
      }, this.$styleOptions));
      this.scopedStyleEl = g.el;
    },
    _unloadScopedThemeStyles: function() {
      var r;
      (r = this.scopedStyleEl) === null || r === void 0 || (r = r.value) === null || r === void 0 || r.remove();
    },
    _themeChangeListener: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      };
      pr.clearLoadedStyleNames(), Ce.on("theme:change", r);
    },
    _removeThemeListeners: function() {
      Ce.off("theme:change", this._loadCoreStyles), Ce.off("theme:change", this._load), Ce.off("theme:change", this._themeScopedListener);
    },
    _getHostInstance: function(r) {
      return r ? this.$options.hostName ? r.$.type.name === this.$options.hostName ? r : this._getHostInstance(r.$parentInstance) : r.$parentInstance : void 0;
    },
    _getPropValue: function(r) {
      var t;
      return this[r] || ((t = this._getHostInstance(this)) === null || t === void 0 ? void 0 : t[r]);
    },
    _getOptionValue: function(r) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return zo(r, t, o);
    },
    _getPTValue: function() {
      var r, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, f = /./g.test(o) && !!n[o.split(".")[0]], g = this._getPropValue("ptOptions") || ((r = this.$primevueConfig) === null || r === void 0 ? void 0 : r.ptOptions) || {}, c = g.mergeSections, s = c === void 0 ? !0 : c, u = g.mergeProps, l = u === void 0 ? !1 : u, a = d ? f ? this._useGlobalPT(this._getPTClassValue, o, n) : this._useDefaultPT(this._getPTClassValue, o, n) : void 0, i = f ? void 0 : this._getPTSelf(t, this._getPTClassValue, o, Q(Q({}, n), {}, {
        global: a || {}
      })), h = this._getPTDatasets(o);
      return s || !s && i ? l ? this._mergeProps(l, a, i, h) : Q(Q(Q({}, a), i), h) : Q(Q({}, i), h);
    },
    _getPTSelf: function() {
      for (var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
        o[n - 1] = arguments[n];
      return fe(
        this._usePT.apply(this, [this._getPT(r, this.$name)].concat(o)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(o))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function() {
      var r, t, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = "data-pc-", d = o === "root" && se((r = this.pt) === null || r === void 0 ? void 0 : r["data-pc-section"]);
      return o !== "transition" && Q(Q({}, o === "root" && Q(Q(ft({}, "".concat(n, "name"), Xe(d ? (t = this.pt) === null || t === void 0 ? void 0 : t["data-pc-section"] : this.$.type.name)), d && ft({}, "".concat(n, "extend"), Xe(this.$.type.name))), {}, ft({}, "".concat(this.$attrSelector), ""))), {}, ft({}, "".concat(n, "section"), Xe(o)));
    },
    _getPTClassValue: function() {
      var r = this._getOptionValue.apply(this, arguments);
      return _e(r) || eo(r) ? {
        class: r
      } : r;
    },
    _getPT: function(r) {
      var t = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = arguments.length > 2 ? arguments[2] : void 0, d = function(g) {
        var c, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, u = n ? n(g) : g, l = Xe(o), a = Xe(t.$name);
        return (c = s ? l !== a ? u == null ? void 0 : u[l] : void 0 : u == null ? void 0 : u[l]) !== null && c !== void 0 ? c : u;
      };
      return r != null && r.hasOwnProperty("_usept") ? {
        _usept: r._usept,
        originalValue: d(r.originalValue),
        value: d(r.value)
      } : d(r, !0);
    },
    _usePT: function(r, t, o, n) {
      var d = function(m) {
        return t(m, o, n);
      };
      if (r != null && r.hasOwnProperty("_usept")) {
        var f, g = r._usept || ((f = this.$primevueConfig) === null || f === void 0 ? void 0 : f.ptOptions) || {}, c = g.mergeSections, s = c === void 0 ? !0 : c, u = g.mergeProps, l = u === void 0 ? !1 : u, a = d(r.originalValue), i = d(r.value);
        return a === void 0 && i === void 0 ? void 0 : _e(i) ? i : _e(a) ? a : s || !s && i ? l ? this._mergeProps(l, a, i) : Q(Q({}, a), i) : i;
      }
      return d(r);
    },
    _useGlobalPT: function(r, t, o) {
      return this._usePT(this.globalPT, r, t, o);
    },
    _useDefaultPT: function(r, t, o) {
      return this._usePT(this.defaultPT, r, t, o);
    },
    ptm: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, r, Q(Q({}, this.$params), t));
    },
    ptmi: function() {
      var r, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = fe(this.$_attrsWithoutPT, this.ptm(t, o));
      return n != null && n.hasOwnProperty("id") && ((r = n.id) !== null && r !== void 0 || (n.id = this.$id)), n;
    },
    ptmo: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(r, t, Q({
        instance: this
      }, o), !1);
    },
    cx: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.isUnstyled ? void 0 : this._getOptionValue(this.$style.classes, r, Q(Q({}, this.$params), t));
    },
    sx: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (t) {
        var n = this._getOptionValue(this.$style.inlineStyles, r, Q(Q({}, this.$params), o)), d = this._getOptionValue(Cn.inlineStyles, r, Q(Q({}, this.$params), o));
        return [d, n];
      }
    }
  },
  computed: {
    globalPT: function() {
      var r, t = this;
      return this._getPT((r = this.$primevueConfig) === null || r === void 0 ? void 0 : r.pt, void 0, function(o) {
        return De(o, {
          instance: t
        });
      });
    },
    defaultPT: function() {
      var r, t = this;
      return this._getPT((r = this.$primevueConfig) === null || r === void 0 ? void 0 : r.pt, void 0, function(o) {
        return t._getOptionValue(o, t.$name, Q({}, t.$params)) || De(o, Q({}, t.$params));
      });
    },
    isUnstyled: function() {
      var r;
      return this.unstyled !== void 0 ? this.unstyled : (r = this.$primevueConfig) === null || r === void 0 ? void 0 : r.unstyled;
    },
    $id: function() {
      return this.$attrs.id || this.uid;
    },
    $inProps: function() {
      var r, t = Object.keys(((r = this.$.vnode) === null || r === void 0 ? void 0 : r.props) || {});
      return Object.fromEntries(Object.entries(this.$props).filter(function(o) {
        var n = Zr(o, 1), d = n[0];
        return t == null ? void 0 : t.includes(d);
      }));
    },
    $theme: function() {
      var r;
      return (r = this.$primevueConfig) === null || r === void 0 ? void 0 : r.theme;
    },
    $style: function() {
      return Q(Q({
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
      var r;
      return {
        nonce: (r = this.$primevueConfig) === null || r === void 0 || (r = r.csp) === null || r === void 0 ? void 0 : r.nonce
      };
    },
    $primevueConfig: function() {
      var r;
      return (r = this.$primevue) === null || r === void 0 ? void 0 : r.config;
    },
    $name: function() {
      return this.$options.hostName || this.$.type.name;
    },
    $params: function() {
      var r = this._getHostInstance(this) || this.$parent;
      return {
        instance: this,
        props: this.$props,
        state: this.$data,
        attrs: this.$attrs,
        parent: {
          instance: r,
          props: r == null ? void 0 : r.$props,
          state: r == null ? void 0 : r.$data,
          attrs: r == null ? void 0 : r.$attrs
        }
      };
    },
    $_attrsPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(r) {
        var t = Zr(r, 1), o = t[0];
        return o == null ? void 0 : o.startsWith("pt:");
      }).reduce(function(r, t) {
        var o = Zr(t, 2), n = o[0], d = o[1], f = n.split(":"), g = Ru(f), c = g.slice(1);
        return c == null || c.reduce(function(s, u, l, a) {
          return !s[u] && (s[u] = l === a.length - 1 ? d : {}), s[u];
        }, r), r;
      }, {});
    },
    $_attrsWithoutPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(r) {
        var t = Zr(r, 1), o = t[0];
        return !(o != null && o.startsWith("pt:"));
      }).reduce(function(r, t) {
        var o = Zr(t, 2), n = o[0], d = o[1];
        return r[n] = d, r;
      }, {});
    }
  }
}, Dt = $a();
function wt(e) {
  "@babel/helpers - typeof";
  return wt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, wt(e);
}
function _n(e, r) {
  return Du(e) || Au(e, r) || Ou(e, r) || Eu();
}
function Eu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ou(e, r) {
  if (e) {
    if (typeof e == "string") return Rn(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Rn(e, r) : void 0;
  }
}
function Rn(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, o = Array(r); t < r; t++) o[t] = e[t];
  return o;
}
function Au(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var o, n, d, f, g = [], c = !0, s = !1;
    try {
      if (d = (t = t.call(e)).next, r !== 0) for (; !(c = (o = d.call(t)).done) && (g.push(o.value), g.length !== r); c = !0) ;
    } catch (u) {
      s = !0, n = u;
    } finally {
      try {
        if (!c && t.return != null && (f = t.return(), Object(f) !== f)) return;
      } finally {
        if (s) throw n;
      }
    }
    return g;
  }
}
function Du(e) {
  if (Array.isArray(e)) return e;
}
function In(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function te(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? In(Object(t), !0).forEach(function(o) {
      Do(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : In(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return e;
}
function Do(e, r, t) {
  return (r = Bu(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function Bu(e) {
  var r = Nu(e, "string");
  return wt(r) == "symbol" ? r : r + "";
}
function Nu(e, r) {
  if (wt(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(e, r);
    if (wt(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var K = {
  _getMeta: function() {
    return [yr(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], De(yr(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(r, t) {
    var o, n, d;
    return (o = (r == null || (n = r.instance) === null || n === void 0 ? void 0 : n.$primevue) || (t == null || (d = t.ctx) === null || d === void 0 || (d = d.appContext) === null || d === void 0 || (d = d.config) === null || d === void 0 || (d = d.globalProperties) === null || d === void 0 ? void 0 : d.$primevue)) === null || o === void 0 ? void 0 : o.config;
  },
  _getOptionValue: zo,
  _getPTValue: function() {
    var r, t, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, g = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, c = function() {
      var b = K._getOptionValue.apply(K, arguments);
      return _e(b) || eo(b) ? {
        class: b
      } : b;
    }, s = ((r = o.binding) === null || r === void 0 || (r = r.value) === null || r === void 0 ? void 0 : r.ptOptions) || ((t = o.$primevueConfig) === null || t === void 0 ? void 0 : t.ptOptions) || {}, u = s.mergeSections, l = u === void 0 ? !0 : u, a = s.mergeProps, i = a === void 0 ? !1 : a, h = g ? K._useDefaultPT(o, o.defaultPT(), c, d, f) : void 0, m = K._usePT(o, K._getPT(n, o.$name), c, d, te(te({}, f), {}, {
      global: h || {}
    })), y = K._getPTDatasets(o, d);
    return l || !l && m ? i ? K._mergeProps(o, i, h, m, y) : te(te(te({}, h), m), y) : te(te({}, m), y);
  },
  _getPTDatasets: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = "data-pc-";
    return te(te({}, t === "root" && Do({}, "".concat(o, "name"), Xe(r.$name))), {}, Do({}, "".concat(o, "section"), Xe(t)));
  },
  _getPT: function(r) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 ? arguments[2] : void 0, n = function(f) {
      var g, c = o ? o(f) : f, s = Xe(t);
      return (g = c == null ? void 0 : c[s]) !== null && g !== void 0 ? g : c;
    };
    return r && Object.hasOwn(r, "_usept") ? {
      _usept: r._usept,
      originalValue: n(r.originalValue),
      value: n(r.value)
    } : n(r);
  },
  _usePT: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, o = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0, d = arguments.length > 4 ? arguments[4] : void 0, f = function(y) {
      return o(y, n, d);
    };
    if (t && Object.hasOwn(t, "_usept")) {
      var g, c = t._usept || ((g = r.$primevueConfig) === null || g === void 0 ? void 0 : g.ptOptions) || {}, s = c.mergeSections, u = s === void 0 ? !0 : s, l = c.mergeProps, a = l === void 0 ? !1 : l, i = f(t.originalValue), h = f(t.value);
      return i === void 0 && h === void 0 ? void 0 : _e(h) ? h : _e(i) ? i : u || !u && h ? a ? K._mergeProps(r, a, i, h) : te(te({}, i), h) : h;
    }
    return f(t);
  },
  _useDefaultPT: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0, d = arguments.length > 4 ? arguments[4] : void 0;
    return K._usePT(r, t, o, n, d);
  },
  _loadStyles: function() {
    var r, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 ? arguments[2] : void 0, d = K._getConfig(o, n), f = {
      nonce: d == null || (r = d.csp) === null || r === void 0 ? void 0 : r.nonce
    };
    K._loadCoreStyles(t, f), K._loadThemeStyles(t, f), K._loadScopedThemeStyles(t, f), K._removeThemeListeners(t), t.$loadStyles = function() {
      return K._loadThemeStyles(t, f);
    }, K._themeChangeListener(t.$loadStyles);
  },
  _loadCoreStyles: function() {
    var r, t, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    if (!pr.isStyleNameLoaded((r = o.$style) === null || r === void 0 ? void 0 : r.name) && (t = o.$style) !== null && t !== void 0 && t.name) {
      var d;
      pe.loadCSS(n), (d = o.$style) === null || d === void 0 || d.loadCSS(n), pr.setLoadedStyleName(o.$style.name);
    }
  },
  _loadThemeStyles: function() {
    var r, t, o, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, d = arguments.length > 1 ? arguments[1] : void 0;
    if (!(n != null && n.isUnstyled() || (n == null || (r = n.theme) === null || r === void 0 ? void 0 : r.call(n)) === "none")) {
      if (!de.isStyleNameLoaded("common")) {
        var f, g, c = ((f = n.$style) === null || f === void 0 || (g = f.getCommonTheme) === null || g === void 0 ? void 0 : g.call(f)) || {}, s = c.primitive, u = c.semantic, l = c.global, a = c.style;
        pe.load(s == null ? void 0 : s.css, te({
          name: "primitive-variables"
        }, d)), pe.load(u == null ? void 0 : u.css, te({
          name: "semantic-variables"
        }, d)), pe.load(l == null ? void 0 : l.css, te({
          name: "global-variables"
        }, d)), pe.loadStyle(te({
          name: "global-style"
        }, d), a), de.setLoadedStyleName("common");
      }
      if (!de.isStyleNameLoaded((t = n.$style) === null || t === void 0 ? void 0 : t.name) && (o = n.$style) !== null && o !== void 0 && o.name) {
        var i, h, m, y, p = ((i = n.$style) === null || i === void 0 || (h = i.getDirectiveTheme) === null || h === void 0 ? void 0 : h.call(i)) || {}, b = p.css, w = p.style;
        (m = n.$style) === null || m === void 0 || m.load(b, te({
          name: "".concat(n.$style.name, "-variables")
        }, d)), (y = n.$style) === null || y === void 0 || y.loadStyle(te({
          name: "".concat(n.$style.name, "-style")
        }, d), w), de.setLoadedStyleName(n.$style.name);
      }
      if (!de.isStyleNameLoaded("layer-order")) {
        var v, k, C = (v = n.$style) === null || v === void 0 || (k = v.getLayerOrderThemeCSS) === null || k === void 0 ? void 0 : k.call(v);
        pe.load(C, te({
          name: "layer-order",
          first: !0
        }, d)), de.setLoadedStyleName("layer-order");
      }
    }
  },
  _loadScopedThemeStyles: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, o = r.preset();
    if (o && r.$attrSelector) {
      var n, d, f, g = ((n = r.$style) === null || n === void 0 || (d = n.getPresetTheme) === null || d === void 0 ? void 0 : d.call(n, o, "[".concat(r.$attrSelector, "]"))) || {}, c = g.css, s = (f = r.$style) === null || f === void 0 ? void 0 : f.load(c, te({
        name: "".concat(r.$attrSelector, "-").concat(r.$style.name)
      }, t));
      r.scopedStyleEl = s.el;
    }
  },
  _themeChangeListener: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    pr.clearLoadedStyleNames(), Ce.on("theme:change", r);
  },
  _removeThemeListeners: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ce.off("theme:change", r.$loadStyles);
  },
  _hook: function(r, t, o, n, d, f) {
    var g, c, s = "on".concat(Ys(t)), u = K._getConfig(n, d), l = o == null ? void 0 : o.$instance, a = K._usePT(l, K._getPT(n == null || (g = n.value) === null || g === void 0 ? void 0 : g.pt, r), K._getOptionValue, "hooks.".concat(s)), i = K._useDefaultPT(l, u == null || (c = u.pt) === null || c === void 0 || (c = c.directives) === null || c === void 0 ? void 0 : c[r], K._getOptionValue, "hooks.".concat(s)), h = {
      el: o,
      binding: n,
      vnode: d,
      prevVnode: f
    };
    a == null || a(l, h), i == null || i(l, h);
  },
  /* eslint-disable-next-line no-unused-vars */
  _mergeProps: function() {
    for (var r = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length, o = new Array(t > 2 ? t - 2 : 0), n = 2; n < t; n++)
      o[n - 2] = arguments[n];
    return qo(r) ? r.apply(void 0, o) : fe.apply(void 0, o);
  },
  _extend: function(r) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = function(g, c, s, u, l) {
      var a, i, h, m;
      c._$instances = c._$instances || {};
      var y = K._getConfig(s, u), p = c._$instances[r] || {}, b = Br(p) ? te(te({}, t), t == null ? void 0 : t.methods) : {};
      c._$instances[r] = te(te({}, p), {}, {
        /* new instance variables to pass in directive methods */
        $name: r,
        $host: c,
        $binding: s,
        $modifiers: s == null ? void 0 : s.modifiers,
        $value: s == null ? void 0 : s.value,
        $el: p.$el || c || void 0,
        $style: te({
          classes: void 0,
          inlineStyles: void 0,
          load: function() {
          },
          loadCSS: function() {
          },
          loadStyle: function() {
          }
        }, t == null ? void 0 : t.style),
        $primevueConfig: y,
        $attrSelector: (a = c.$pd) === null || a === void 0 || (a = a[r]) === null || a === void 0 ? void 0 : a.attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return K._getPT(y == null ? void 0 : y.pt, void 0, function(v) {
            var k;
            return v == null || (k = v.directives) === null || k === void 0 ? void 0 : k[r];
          });
        },
        isUnstyled: function() {
          var v, k;
          return ((v = c._$instances[r]) === null || v === void 0 || (v = v.$binding) === null || v === void 0 || (v = v.value) === null || v === void 0 ? void 0 : v.unstyled) !== void 0 ? (k = c._$instances[r]) === null || k === void 0 || (k = k.$binding) === null || k === void 0 || (k = k.value) === null || k === void 0 ? void 0 : k.unstyled : y == null ? void 0 : y.unstyled;
        },
        theme: function() {
          var v;
          return (v = c._$instances[r]) === null || v === void 0 || (v = v.$primevueConfig) === null || v === void 0 ? void 0 : v.theme;
        },
        preset: function() {
          var v;
          return (v = c._$instances[r]) === null || v === void 0 || (v = v.$binding) === null || v === void 0 || (v = v.value) === null || v === void 0 ? void 0 : v.dt;
        },
        /* instance's methods */
        ptm: function() {
          var v, k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return K._getPTValue(c._$instances[r], (v = c._$instances[r]) === null || v === void 0 || (v = v.$binding) === null || v === void 0 || (v = v.value) === null || v === void 0 ? void 0 : v.pt, k, te({}, C));
        },
        ptmo: function() {
          var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return K._getPTValue(c._$instances[r], v, k, C, !1);
        },
        cx: function() {
          var v, k, C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (v = c._$instances[r]) !== null && v !== void 0 && v.isUnstyled() ? void 0 : K._getOptionValue((k = c._$instances[r]) === null || k === void 0 || (k = k.$style) === null || k === void 0 ? void 0 : k.classes, C, te({}, S));
        },
        sx: function() {
          var v, k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, S = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return C ? K._getOptionValue((v = c._$instances[r]) === null || v === void 0 || (v = v.$style) === null || v === void 0 ? void 0 : v.inlineStyles, k, te({}, S)) : void 0;
        }
      }, b), c.$instance = c._$instances[r], (i = (h = c.$instance)[g]) === null || i === void 0 || i.call(h, c, s, u, l), c["$".concat(r)] = c.$instance, K._hook(r, g, c, s, u, l), c.$pd || (c.$pd = {}), c.$pd[r] = te(te({}, (m = c.$pd) === null || m === void 0 ? void 0 : m[r]), {}, {
        name: r,
        instance: c._$instances[r]
      });
    }, n = function(g) {
      var c, s, u, l = g._$instances[r], a = l == null ? void 0 : l.watch, i = function(y) {
        var p, b = y.newValue, w = y.oldValue;
        return a == null || (p = a.config) === null || p === void 0 ? void 0 : p.call(l, b, w);
      }, h = function(y) {
        var p, b = y.newValue, w = y.oldValue;
        return a == null || (p = a["config.ripple"]) === null || p === void 0 ? void 0 : p.call(l, b, w);
      };
      l.$watchersCallback = {
        config: i,
        "config.ripple": h
      }, a == null || (c = a.config) === null || c === void 0 || c.call(l, l == null ? void 0 : l.$primevueConfig), Dt.on("config:change", i), a == null || (s = a["config.ripple"]) === null || s === void 0 || s.call(l, l == null || (u = l.$primevueConfig) === null || u === void 0 ? void 0 : u.ripple), Dt.on("config:ripple:change", h);
    }, d = function(g) {
      var c = g._$instances[r].$watchersCallback;
      c && (Dt.off("config:change", c.config), Dt.off("config:ripple:change", c["config.ripple"]));
    };
    return {
      created: function(g, c, s, u) {
        g.$pd || (g.$pd = {}), g.$pd[r] = {
          name: r,
          attrSelector: Qs("pd")
        }, o("created", g, c, s, u);
      },
      beforeMount: function(g, c, s, u) {
        var l;
        K._loadStyles((l = g.$pd[r]) === null || l === void 0 ? void 0 : l.instance, c, s), o("beforeMount", g, c, s, u), n(g);
      },
      mounted: function(g, c, s, u) {
        var l;
        K._loadStyles((l = g.$pd[r]) === null || l === void 0 ? void 0 : l.instance, c, s), o("mounted", g, c, s, u);
      },
      beforeUpdate: function(g, c, s, u) {
        o("beforeUpdate", g, c, s, u);
      },
      updated: function(g, c, s, u) {
        var l;
        K._loadStyles((l = g.$pd[r]) === null || l === void 0 ? void 0 : l.instance, c, s), o("updated", g, c, s, u);
      },
      beforeUnmount: function(g, c, s, u) {
        var l;
        d(g), K._removeThemeListeners((l = g.$pd[r]) === null || l === void 0 ? void 0 : l.instance), o("beforeUnmount", g, c, s, u);
      },
      unmounted: function(g, c, s, u) {
        var l;
        (l = g.$pd[r]) === null || l === void 0 || (l = l.instance) === null || l === void 0 || (l = l.scopedStyleEl) === null || l === void 0 || (l = l.value) === null || l === void 0 || l.remove(), o("unmounted", g, c, s, u);
      }
    };
  },
  extend: function() {
    var r = K._getMeta.apply(K, arguments), t = _n(r, 2), o = t[0], n = t[1];
    return te({
      extend: function() {
        var f = K._getMeta.apply(K, arguments), g = _n(f, 2), c = g[0], s = g[1];
        return K.extend(c, te(te(te({}, n), n == null ? void 0 : n.methods), s));
      }
    }, K._extend(o, n));
  }
}, Lu = ({ dt: e }) => `
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
`, Mu = {
  root: "p-ink"
}, Uu = pe.extend({
  name: "ripple-directive",
  style: Lu,
  classes: Mu
}), Hu = K.extend({
  style: Uu
});
function Ct(e) {
  "@babel/helpers - typeof";
  return Ct = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Ct(e);
}
function Fu(e) {
  return zu(e) || qu(e) || Vu(e) || ju();
}
function ju() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vu(e, r) {
  if (e) {
    if (typeof e == "string") return Bo(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Bo(e, r) : void 0;
  }
}
function qu(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function zu(e) {
  if (Array.isArray(e)) return Bo(e);
}
function Bo(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, o = Array(r); t < r; t++) o[t] = e[t];
  return o;
}
function xn(e, r, t) {
  return (r = Wu(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function Wu(e) {
  var r = Gu(e, "string");
  return Ct(r) == "symbol" ? r : r + "";
}
function Gu(e, r) {
  if (Ct(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(e, r);
    if (Ct(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var Xu = Hu.extend("ripple", {
  watch: {
    "config.ripple": function(r) {
      r ? (this.createRipple(this.$host), this.bindEvents(this.$host), this.$host.setAttribute("data-pd-ripple", !0), this.$host.style.overflow = "hidden", this.$host.style.position = "relative") : (this.remove(this.$host), this.$host.removeAttribute("data-pd-ripple"));
    }
  },
  unmounted: function(r) {
    this.remove(r);
  },
  timeout: void 0,
  methods: {
    bindEvents: function(r) {
      r.addEventListener("mousedown", this.onMouseDown.bind(this));
    },
    unbindEvents: function(r) {
      r.removeEventListener("mousedown", this.onMouseDown.bind(this));
    },
    createRipple: function(r) {
      var t = this.getInk(r);
      t || (t = Fs("span", xn(xn({
        role: "presentation",
        "aria-hidden": !0,
        "data-p-ink": !0,
        "data-p-ink-active": !1,
        class: !this.isUnstyled() && this.cx("root"),
        onAnimationEnd: this.onAnimationEnd.bind(this)
      }, this.$attrSelector, ""), "p-bind", this.ptm("root"))), r.appendChild(t), this.$el = t);
    },
    remove: function(r) {
      var t = this.getInk(r);
      t && (this.$host.style.overflow = "", this.$host.style.position = "", this.unbindEvents(r), t.removeEventListener("animationend", this.onAnimationEnd), t.remove());
    },
    onMouseDown: function(r) {
      var t = this, o = r.currentTarget, n = this.getInk(o);
      if (!(!n || getComputedStyle(n, null).display === "none")) {
        if (!this.isUnstyled() && lo(n, "p-ink-active"), n.setAttribute("data-p-ink-active", "false"), !fn(n) && !gn(n)) {
          var d = Math.max(Ms(o), zs(o));
          n.style.height = d + "px", n.style.width = d + "px";
        }
        var f = qs(o), g = r.pageX - f.left + document.body.scrollTop - gn(n) / 2, c = r.pageY - f.top + document.body.scrollLeft - fn(n) / 2;
        n.style.top = c + "px", n.style.left = g + "px", !this.isUnstyled() && Ls(n, "p-ink-active"), n.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          n && (!t.isUnstyled() && lo(n, "p-ink-active"), n.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(r) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && lo(r.currentTarget, "p-ink-active"), r.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(r) {
      return r && r.children ? Fu(r.children).find(function(t) {
        return Vs(t, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
}), Ku = `
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
`, Yu = pe.extend({
  name: "baseicon",
  css: Ku
});
function St(e) {
  "@babel/helpers - typeof";
  return St = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, St(e);
}
function Tn(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function Pn(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Tn(Object(t), !0).forEach(function(o) {
      Qu(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Tn(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return e;
}
function Qu(e, r, t) {
  return (r = Ju(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function Ju(e) {
  var r = Zu(e, "string");
  return St(r) == "symbol" ? r : r + "";
}
function Zu(e, r) {
  if (St(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(e, r);
    if (St(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var el = {
  name: "BaseIcon",
  extends: Pt,
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
  style: Yu,
  provide: function() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function() {
      var r = Br(this.label);
      return Pn(Pn({}, !this.isUnstyled && {
        class: ["p-icon", {
          "p-icon-spin": this.spin
        }]
      }), {}, {
        role: r ? void 0 : "img",
        "aria-label": r ? void 0 : this.label,
        "aria-hidden": r
      });
    }
  }
}, Aa = {
  name: "SpinnerIcon",
  extends: el
};
function rl(e, r, t, o, n, d) {
  return Z(), ue("svg", fe({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), r[0] || (r[0] = [z("path", {
    d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
Aa.render = rl;
var tl = ({ dt: e }) => `
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
`, ol = {
  root: function(r) {
    var t = r.props, o = r.instance;
    return ["p-badge p-component", {
      "p-badge-circle": se(t.value) && String(t.value).length === 1,
      "p-badge-dot": Br(t.value) && !o.$slots.default,
      "p-badge-sm": t.size === "small",
      "p-badge-lg": t.size === "large",
      "p-badge-xl": t.size === "xlarge",
      "p-badge-info": t.severity === "info",
      "p-badge-success": t.severity === "success",
      "p-badge-warn": t.severity === "warn",
      "p-badge-danger": t.severity === "danger",
      "p-badge-secondary": t.severity === "secondary",
      "p-badge-contrast": t.severity === "contrast"
    }];
  }
}, nl = pe.extend({
  name: "badge",
  style: tl,
  classes: ol
}), il = {
  name: "BaseBadge",
  extends: Pt,
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
  style: nl,
  provide: function() {
    return {
      $pcBadge: this,
      $parentInstance: this
    };
  }
};
function $t(e) {
  "@babel/helpers - typeof";
  return $t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, $t(e);
}
function En(e, r, t) {
  return (r = al(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function al(e) {
  var r = sl(e, "string");
  return $t(r) == "symbol" ? r : r + "";
}
function sl(e, r) {
  if ($t(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(e, r);
    if ($t(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var Da = {
  name: "Badge",
  extends: il,
  inheritAttrs: !1,
  computed: {
    dataP: function() {
      return Gr(En(En({
        circle: this.value != null && String(this.value).length === 1,
        empty: this.value == null && !this.$slots.default
      }, this.severity, this.severity), this.size, this.size));
    }
  }
}, ul = ["data-p"];
function ll(e, r, t, o, n, d) {
  return Z(), ue("span", fe({
    class: e.cx("root"),
    "data-p": d.dataP
  }, e.ptmi("root")), [Ae(e.$slots, "default", {}, function() {
    return [zt(Ke(e.value), 1)];
  })], 16, ul);
}
Da.render = ll;
var cl = ({ dt: e }) => `
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
function _t(e) {
  "@babel/helpers - typeof";
  return _t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, _t(e);
}
function Ue(e, r, t) {
  return (r = dl(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function dl(e) {
  var r = fl(e, "string");
  return _t(r) == "symbol" ? r : r + "";
}
function fl(e, r) {
  if (_t(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(e, r);
    if (_t(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var gl = {
  root: function(r) {
    var t = r.instance, o = r.props;
    return ["p-button p-component", Ue(Ue(Ue(Ue(Ue(Ue(Ue(Ue(Ue({
      "p-button-icon-only": t.hasIcon && !o.label && !o.badge,
      "p-button-vertical": (o.iconPos === "top" || o.iconPos === "bottom") && o.label,
      "p-button-loading": o.loading,
      "p-button-link": o.link || o.variant === "link"
    }, "p-button-".concat(o.severity), o.severity), "p-button-raised", o.raised), "p-button-rounded", o.rounded), "p-button-text", o.text || o.variant === "text"), "p-button-outlined", o.outlined || o.variant === "outlined"), "p-button-sm", o.size === "small"), "p-button-lg", o.size === "large"), "p-button-plain", o.plain), "p-button-fluid", t.hasFluid)];
  },
  loadingIcon: "p-button-loading-icon",
  icon: function(r) {
    var t = r.props;
    return ["p-button-icon", Ue({}, "p-button-icon-".concat(t.iconPos), t.label)];
  },
  label: "p-button-label"
}, hl = pe.extend({
  name: "button",
  style: cl,
  classes: gl
}), pl = {
  name: "BaseButton",
  extends: Pt,
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
  style: hl,
  provide: function() {
    return {
      $pcButton: this,
      $parentInstance: this
    };
  }
};
function Rt(e) {
  "@babel/helpers - typeof";
  return Rt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Rt(e);
}
function $e(e, r, t) {
  return (r = ml(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function ml(e) {
  var r = vl(e, "string");
  return Rt(r) == "symbol" ? r : r + "";
}
function vl(e, r) {
  if (Rt(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(e, r);
    if (Rt(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var Vt = {
  name: "Button",
  extends: pl,
  inheritAttrs: !1,
  inject: {
    $pcFluid: {
      default: null
    }
  },
  methods: {
    getPTOptions: function(r) {
      var t = r === "root" ? this.ptmi : this.ptm;
      return t(r, {
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
      return fe(this.asAttrs, this.a11yAttrs, this.getPTOptions("root"));
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
      return Br(this.fluid) ? !!this.$pcFluid : this.fluid;
    },
    dataP: function() {
      return Gr($e($e($e($e($e($e($e($e($e($e({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge), "loading", this.loading), "fluid", this.hasFluid), "rounded", this.rounded), "raised", this.raised), "outlined", this.outlined || this.variant === "outlined"), "text", this.text || this.variant === "text"), "link", this.link || this.variant === "link"), "vertical", (this.iconPos === "top" || this.iconPos === "bottom") && this.label));
    },
    dataIconP: function() {
      return Gr($e($e({}, this.iconPos, this.iconPos), this.size, this.size));
    },
    dataLabelP: function() {
      return Gr($e($e({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge));
    }
  },
  components: {
    SpinnerIcon: Aa,
    Badge: Da
  },
  directives: {
    ripple: Xu
  }
}, bl = ["data-p"], yl = ["data-p"];
function kl(e, r, t, o, n, d) {
  var f = To("SpinnerIcon"), g = To("Badge"), c = Cs("ripple");
  return e.asChild ? Ae(e.$slots, "default", {
    key: 1,
    class: Po(e.cx("root")),
    a11yAttrs: d.a11yAttrs
  }) : ya((Z(), mr(Ss(e.as), fe({
    key: 0,
    class: e.cx("root"),
    "data-p": d.dataP
  }, d.attrs), {
    default: Ie(function() {
      return [Ae(e.$slots, "default", {}, function() {
        return [e.loading ? Ae(e.$slots, "loadingicon", fe({
          key: 0,
          class: [e.cx("loadingIcon"), e.cx("icon")]
        }, e.ptm("loadingIcon")), function() {
          return [e.loadingIcon ? (Z(), ue("span", fe({
            key: 0,
            class: [e.cx("loadingIcon"), e.cx("icon"), e.loadingIcon]
          }, e.ptm("loadingIcon")), null, 16)) : (Z(), mr(f, fe({
            key: 1,
            class: [e.cx("loadingIcon"), e.cx("icon")],
            spin: ""
          }, e.ptm("loadingIcon")), null, 16, ["class"]))];
        }) : Ae(e.$slots, "icon", fe({
          key: 1,
          class: [e.cx("icon")]
        }, e.ptm("icon")), function() {
          return [e.icon ? (Z(), ue("span", fe({
            key: 0,
            class: [e.cx("icon"), e.icon, e.iconClass],
            "data-p": d.dataIconP
          }, e.ptm("icon")), null, 16, bl)) : cr("", !0)];
        }), z("span", fe({
          class: e.cx("label")
        }, e.ptm("label"), {
          "data-p": d.dataLabelP
        }), Ke(e.label || " "), 17, yl), e.badge ? (Z(), mr(g, {
          key: 2,
          value: e.badge,
          class: Po(e.badgeClass),
          severity: e.badgeSeverity,
          unstyled: e.unstyled,
          pt: e.ptm("pcBadge")
        }, null, 8, ["value", "class", "severity", "unstyled", "pt"])) : cr("", !0)];
      })];
    }),
    _: 3
  }, 16, ["class", "data-p"])), [[c]]);
}
Vt.render = kl;
var wl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Cl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var go = {}, Cr = {}, ce = {}, ho = {}, po = {}, Lr = {}, Je = {}, On;
function Sl() {
  if (On) return Je;
  On = 1;
  var e = Je && Je.__awaiter || function(d, f, g, c) {
    function s(u) {
      return u instanceof g ? u : new g(function(l) {
        l(u);
      });
    }
    return new (g || (g = Promise))(function(u, l) {
      function a(m) {
        try {
          h(c.next(m));
        } catch (y) {
          l(y);
        }
      }
      function i(m) {
        try {
          h(c.throw(m));
        } catch (y) {
          l(y);
        }
      }
      function h(m) {
        m.done ? u(m.value) : s(m.value).then(a, i);
      }
      h((c = c.apply(d, f || [])).next());
    });
  }, r = Je && Je.__generator || function(d, f) {
    var g = {
      label: 0,
      sent: function() {
        if (u[0] & 1) throw u[1];
        return u[1];
      },
      trys: [],
      ops: []
    }, c, s, u, l;
    return l = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (l[Symbol.iterator] = function() {
      return this;
    }), l;
    function a(h) {
      return function(m) {
        return i([h, m]);
      };
    }
    function i(h) {
      if (c) throw new TypeError("Generator is already executing.");
      for (; g; )
        try {
          if (c = 1, s && (u = h[0] & 2 ? s.return : h[0] ? s.throw || ((u = s.return) && u.call(s), 0) : s.next) && !(u = u.call(s, h[1])).done)
            return u;
          switch (s = 0, u && (h = [h[0] & 2, u.value]), h[0]) {
            case 0:
            case 1:
              u = h;
              break;
            case 4:
              return g.label++, { value: h[1], done: !1 };
            case 5:
              g.label++, s = h[1], h = [0];
              continue;
            case 7:
              h = g.ops.pop(), g.trys.pop();
              continue;
            default:
              if (u = g.trys, !(u = u.length > 0 && u[u.length - 1]) && (h[0] === 6 || h[0] === 2)) {
                g = 0;
                continue;
              }
              if (h[0] === 3 && (!u || h[1] > u[0] && h[1] < u[3])) {
                g.label = h[1];
                break;
              }
              if (h[0] === 6 && g.label < u[1]) {
                g.label = u[1], u = h;
                break;
              }
              if (u && g.label < u[2]) {
                g.label = u[2], g.ops.push(h);
                break;
              }
              u[2] && g.ops.pop(), g.trys.pop();
              continue;
          }
          h = f.call(d, g);
        } catch (m) {
          h = [6, m], s = 0;
        } finally {
          c = u = 0;
        }
      if (h[0] & 5) throw h[1];
      return { value: h[0] ? h[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Je, "__esModule", { value: !0 }), Je.defaultWindowHandlerImplementation = void 0;
  function t() {
    if (typeof window > "u")
      throw Error(
        "If you are using this package with server-side rendering, please make sure that you are checking if the window object is defined."
      );
    return window;
  }
  var o = {
    key: function(d) {
      return e(this, void 0, void 0, function() {
        return r(this, function(f) {
          return [2, t().localStorage.key(d)];
        });
      });
    },
    clear: function() {
      return e(this, void 0, void 0, function() {
        return r(this, function(d) {
          return [2, t().localStorage.clear()];
        });
      });
    },
    getItem: function(d) {
      return e(this, void 0, void 0, function() {
        return r(this, function(f) {
          return [2, t().localStorage.getItem(d)];
        });
      });
    },
    removeItem: function(d) {
      return e(this, void 0, void 0, function() {
        return r(this, function(f) {
          return [2, t().localStorage.removeItem(d)];
        });
      });
    },
    setItem: function(d, f) {
      return e(this, void 0, void 0, function() {
        return r(this, function(g) {
          return [2, t().localStorage.setItem(d, f)];
        });
      });
    },
    keySync: function(d) {
      return t().localStorage.key(d);
    },
    clearSync: function() {
      return t().localStorage.clear();
    },
    getItemSync: function(d) {
      return t().localStorage.getItem(d);
    },
    removeItemSync: function(d) {
      return t().localStorage.removeItem(d);
    },
    setItemSync: function(d, f) {
      return t().localStorage.setItem(d, f);
    }
  }, n = {
    key: function(d) {
      return e(this, void 0, void 0, function() {
        return r(this, function(f) {
          return [2, t().sessionStorage.key(d)];
        });
      });
    },
    clear: function() {
      return e(this, void 0, void 0, function() {
        return r(this, function(d) {
          return [2, t().sessionStorage.clear()];
        });
      });
    },
    getItem: function(d) {
      return e(this, void 0, void 0, function() {
        return r(this, function(f) {
          return [2, t().sessionStorage.getItem(d)];
        });
      });
    },
    removeItem: function(d) {
      return e(this, void 0, void 0, function() {
        return r(this, function(f) {
          return [2, t().sessionStorage.removeItem(d)];
        });
      });
    },
    setItem: function(d, f) {
      return e(this, void 0, void 0, function() {
        return r(this, function(g) {
          return [2, t().sessionStorage.setItem(d, f)];
        });
      });
    },
    keySync: function(d) {
      return t().sessionStorage.key(d);
    },
    clearSync: function() {
      return t().sessionStorage.clear();
    },
    getItemSync: function(d) {
      return t().sessionStorage.getItem(d);
    },
    removeItemSync: function(d) {
      return t().sessionStorage.removeItem(d);
    },
    setItemSync: function(d, f) {
      return t().sessionStorage.setItem(d, f);
    }
  };
  return Je.defaultWindowHandlerImplementation = {
    history: {
      replaceState: function(d, f, g) {
        return t().history.replaceState(d, f, g);
      },
      getState: function() {
        return t().history.state;
      }
    },
    location: {
      getHref: function() {
        return t().location.href;
      },
      setHref: function(d) {
        t().location.href = d;
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
      assign: function(d) {
        t().location.assign(d);
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
    localStorage: o,
    sessionStorage: n
  }, Je;
}
var An;
function wr() {
  if (An) return Lr;
  An = 1, Object.defineProperty(Lr, "__esModule", { value: !0 }), Lr.WindowHandlerReference = void 0;
  var e = Sl(), r = (
    /** @class */
    function() {
      function t(o) {
        var n = function(d) {
          return d;
        };
        o !== void 0 && (n = o), this.windowHandler = n(e.defaultWindowHandlerImplementation);
      }
      return t.init = function(o) {
        t.instance === void 0 && (t.instance = new t(o));
      }, t.getReferenceOrThrow = function() {
        if (t.instance === void 0)
          throw new Error("SuperTokensWindowHandler must be initialized before calling this method.");
        return t.instance;
      }, t;
    }()
  );
  return Lr.WindowHandlerReference = r, Lr.default = r, Lr;
}
var Dn;
function $l() {
  return Dn || (Dn = 1, function(e) {
    function r(t) {
      for (var o in t) e.hasOwnProperty(o) || (e[o] = t[o]);
    }
    e.__esModule = !0, r(wr());
  }(po)), po;
}
var Bn;
function ro() {
  return Bn || (Bn = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.WindowHandlerReference = void 0;
    var r = $l();
    Object.defineProperty(e, "WindowHandlerReference", {
      enumerable: !0,
      get: function() {
        return r.WindowHandlerReference;
      }
    });
  }(ho)), ho;
}
var Sr = {}, Nn;
function _l() {
  return Nn || (Nn = 1, Object.defineProperty(Sr, "__esModule", { value: !0 }), Sr.SSR_ERROR = Sr.DEFAULT_API_BASE_PATH = void 0, Sr.DEFAULT_API_BASE_PATH = "/auth", Sr.SSR_ERROR = `
If you are trying to use this method doing server-side-rendering, please make sure you move this method inside a componentDidMount method or useEffect hook.`), Sr;
}
var Bt = {}, Ln;
function Rl() {
  if (Ln) return Bt;
  Ln = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  var e = (
    /** @class */
    /* @__PURE__ */ function() {
      function t(o) {
        var n = this;
        this.getAsStringDangerous = function() {
          return n.value;
        }, this.value = r(o);
      }
      return t;
    }()
  );
  Bt.default = e;
  function r(t, o) {
    o === void 0 && (o = !1);
    function n(f) {
      return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
        f
      );
    }
    t = t.trim();
    try {
      if (!t.startsWith("http://") && !t.startsWith("https://"))
        throw new Error("Error converting to proper URL");
      var d = new URL(t);
      return o ? d.hostname.startsWith("localhost") || n(d.hostname) ? t = "http://" + d.host : t = "https://" + d.host : t = d.protocol + "//" + d.host, t;
    } catch {
    }
    if (t.startsWith("/"))
      throw new Error("Please provide a valid domain name");
    if (t.indexOf(".") === 0 && (t = t.substr(1)), (t.indexOf(".") !== -1 || t.startsWith("localhost")) && !t.startsWith("http://") && !t.startsWith("https://")) {
      t = "https://" + t;
      try {
        return new URL(t), r(t, !0);
      } catch {
      }
    }
    throw new Error("Please provide a valid domain name");
  }
  return Bt;
}
var Nt = {}, Mn;
function Ba() {
  if (Mn) return Nt;
  Mn = 1, Object.defineProperty(Nt, "__esModule", { value: !0 });
  var e = (
    /** @class */
    /* @__PURE__ */ function() {
      function o(n) {
        var d = this;
        this.startsWith = function(f) {
          return d.value.startsWith(f.value);
        }, this.appendPath = function(f) {
          return new o(d.value + f.value);
        }, this.getAsStringDangerous = function() {
          return d.value;
        }, this.value = r(n);
      }
      return o;
    }()
  );
  Nt.default = e;
  function r(o) {
    o = o.trim();
    try {
      if (!o.startsWith("http://") && !o.startsWith("https://"))
        throw new Error("Error converting to proper URL");
      var n = new URL(o);
      return o = n.pathname, o.charAt(o.length - 1) === "/" ? o.substr(0, o.length - 1) : o;
    } catch {
    }
    if ((t(o) || o.startsWith("localhost")) && !o.startsWith("http://") && !o.startsWith("https://"))
      return o = "http://" + o, r(o);
    o.charAt(0) !== "/" && (o = "/" + o);
    try {
      return new URL("http://example.com" + o), r("http://example.com" + o);
    } catch {
      throw new Error("Please provide a valid URL path");
    }
  }
  function t(o) {
    if (o.indexOf(".") === -1 || o.startsWith("/"))
      return !1;
    try {
      var n = new URL(o);
      return n.hostname.indexOf(".") !== -1;
    } catch {
    }
    try {
      var n = new URL("http://" + o);
      return n.hostname.indexOf(".") !== -1;
    } catch {
    }
    return !1;
  }
  return Nt;
}
var mo = {}, et = {}, he = {}, Mr = {}, Un;
function Il() {
  if (Un) return Mr;
  Un = 1, Object.defineProperty(Mr, "__esModule", { value: !0 }), Mr.isAnIpAddress = void 0;
  function e(o) {
    return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      o
    );
  }
  Mr.isAnIpAddress = e;
  var r = (
    /** @class */
    /* @__PURE__ */ function() {
      function o(n) {
        var d = this;
        this.getAsStringDangerous = function() {
          return d.value;
        }, this.value = t(n);
      }
      return o;
    }()
  );
  Mr.default = r;
  function t(o, n) {
    n === void 0 && (n = !1), o = o.trim();
    try {
      if (!o.startsWith("http://") && !o.startsWith("https://"))
        throw new Error("converting to proper URL");
      var d = new URL(o);
      return n ? d.hostname.startsWith("localhost") || e(d.hostname) ? o = "http://" + d.host : o = "https://" + d.host : o = d.protocol + "//" + d.host, o;
    } catch {
    }
    if (o.startsWith("/"))
      throw new Error("Please provide a valid domain name");
    if (o.indexOf(".") === 0 && (o = o.substr(1)), (o.indexOf(".") !== -1 || o.startsWith("localhost")) && !o.startsWith("http://") && !o.startsWith("https://")) {
      o = "https://" + o;
      try {
        return new URL(o), t(o, !0);
      } catch {
      }
    }
    throw new Error("Please provide a valid domain name");
  }
  return Mr;
}
var Lt = {}, Hn;
function xl() {
  if (Hn) return Lt;
  Hn = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  var e = (
    /** @class */
    /* @__PURE__ */ function() {
      function o(n) {
        var d = this;
        this.startsWith = function(f) {
          return d.value.startsWith(f.value);
        }, this.appendPath = function(f) {
          return new o(d.value + f.value);
        }, this.getAsStringDangerous = function() {
          return d.value;
        }, this.value = r(n);
      }
      return o;
    }()
  );
  Lt.default = e;
  function r(o) {
    o = o.trim();
    try {
      if (!o.startsWith("http://") && !o.startsWith("https://"))
        throw new Error("converting to proper URL");
      var n = new URL(o);
      return o = n.pathname, o.charAt(o.length - 1) === "/" ? o.substr(0, o.length - 1) : o;
    } catch {
    }
    if ((t(o) || o.startsWith("localhost")) && !o.startsWith("http://") && !o.startsWith("https://"))
      return o = "http://" + o, r(o);
    o.charAt(0) !== "/" && (o = "/" + o);
    try {
      return new URL("http://example.com" + o), r("http://example.com" + o);
    } catch {
      throw new Error("Please provide a valid URL path");
    }
  }
  function t(o) {
    if (o.indexOf(".") === -1 || o.startsWith("/"))
      return !1;
    try {
      var n = new URL(o);
      return n.hostname.indexOf(".") !== -1;
    } catch {
    }
    try {
      var n = new URL("http://" + o);
      return n.hostname.indexOf(".") !== -1;
    } catch {
    }
    return !1;
  }
  return Lt;
}
var Fn;
function Wo() {
  if (Fn) return he;
  Fn = 1;
  var e = he && he.__assign || function() {
    return e = Object.assign || function(a) {
      for (var i, h = 1, m = arguments.length; h < m; h++) {
        i = arguments[h];
        for (var y in i) Object.prototype.hasOwnProperty.call(i, y) && (a[y] = i[y]);
      }
      return a;
    }, e.apply(this, arguments);
  }, r = he && he.__awaiter || function(a, i, h, m) {
    function y(p) {
      return p instanceof h ? p : new h(function(b) {
        b(p);
      });
    }
    return new (h || (h = Promise))(function(p, b) {
      function w(C) {
        try {
          k(m.next(C));
        } catch (S) {
          b(S);
        }
      }
      function v(C) {
        try {
          k(m.throw(C));
        } catch (S) {
          b(S);
        }
      }
      function k(C) {
        C.done ? p(C.value) : y(C.value).then(w, v);
      }
      k((m = m.apply(a, i || [])).next());
    });
  }, t = he && he.__generator || function(a, i) {
    var h = {
      label: 0,
      sent: function() {
        if (p[0] & 1) throw p[1];
        return p[1];
      },
      trys: [],
      ops: []
    }, m, y, p, b;
    return b = { next: w(0), throw: w(1), return: w(2) }, typeof Symbol == "function" && (b[Symbol.iterator] = function() {
      return this;
    }), b;
    function w(k) {
      return function(C) {
        return v([k, C]);
      };
    }
    function v(k) {
      if (m) throw new TypeError("Generator is already executing.");
      for (; h; )
        try {
          if (m = 1, y && (p = k[0] & 2 ? y.return : k[0] ? y.throw || ((p = y.return) && p.call(y), 0) : y.next) && !(p = p.call(y, k[1])).done)
            return p;
          switch (y = 0, p && (k = [k[0] & 2, p.value]), k[0]) {
            case 0:
            case 1:
              p = k;
              break;
            case 4:
              return h.label++, { value: k[1], done: !1 };
            case 5:
              h.label++, y = k[1], k = [0];
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
          k = i.call(a, h);
        } catch (C) {
          k = [6, C], y = 0;
        } finally {
          m = p = 0;
        }
      if (k[0] & 5) throw k[1];
      return { value: k[0] ? k[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(he, "__esModule", { value: !0 }), he.matchesDomainOrSubdomain = he.getNormalisedUserContext = he.validateAndNormaliseInputOrThrowError = he.normaliseSessionScopeOrThrowError = he.normaliseURLPathOrThrowError = he.normaliseURLDomainOrThrowError = void 0;
  var o = Il(), n = xl(), d = wr();
  function f(a) {
    var i = new o.default(a).getAsStringDangerous();
    return i;
  }
  he.normaliseURLDomainOrThrowError = f;
  function g(a) {
    return new n.default(a).getAsStringDangerous();
  }
  he.normaliseURLPathOrThrowError = g;
  function c(a) {
    function i(m) {
      m = m.trim().toLowerCase(), m.startsWith(".") && (m = m.substr(1)), !m.startsWith("http://") && !m.startsWith("https://") && (m = "http://" + m);
      try {
        var y = new URL(m);
        return m = y.hostname, m;
      } catch {
        throw new Error("Please provide a valid sessionScope");
      }
    }
    var h = i(a);
    return h === "localhost" || (0, o.isAnIpAddress)(h) ? h : a.startsWith(".") ? "." + h : h;
  }
  he.normaliseSessionScopeOrThrowError = c;
  function s(a) {
    var i = this, h = f(a.apiDomain), m = g("/auth");
    a.apiBasePath !== void 0 && (m = g(a.apiBasePath));
    var y = d.default.getReferenceOrThrow().windowHandler.location.getHostName(), p = c(
      a !== void 0 && a.sessionTokenFrontendDomain !== void 0 ? a.sessionTokenFrontendDomain : y
    ), b = 401;
    a.sessionExpiredStatusCode !== void 0 && (b = a.sessionExpiredStatusCode);
    var w = 403;
    if (a.invalidClaimStatusCode !== void 0 && (w = a.invalidClaimStatusCode), b === w)
      throw new Error("sessionExpiredStatusCode and invalidClaimStatusCode cannot be the same.");
    var v = !0;
    a.autoAddCredentials !== void 0 && (v = a.autoAddCredentials);
    var k = !1;
    a.isInIframe !== void 0 && (k = a.isInIframe);
    var C = void 0;
    a.sessionTokenBackendDomain !== void 0 && (C = c(a.sessionTokenBackendDomain));
    var S = 10;
    if (a.maxRetryAttemptsForSessionRefresh !== void 0) {
      if (a.maxRetryAttemptsForSessionRefresh < 0)
        throw new Error("maxRetryAttemptsForSessionRefresh must be greater than or equal to 0.");
      S = a.maxRetryAttemptsForSessionRefresh;
    }
    var T = function(B) {
      return r(i, void 0, void 0, function() {
        return t(this, function(A) {
          return [2, { url: B.url, requestInit: B.requestInit }];
        });
      });
    };
    a.preAPIHook !== void 0 && (T = a.preAPIHook);
    var I = function() {
      return r(i, void 0, void 0, function() {
        return t(this, function(B) {
          return [
            2
            /*return*/
          ];
        });
      });
    };
    a.postAPIHook !== void 0 && (I = a.postAPIHook);
    var x = function() {
    };
    a.onHandleEvent !== void 0 && (x = a.onHandleEvent);
    var _ = e(
      {
        functions: function(B) {
          return B;
        }
      },
      a.override
    );
    return {
      apiDomain: h,
      apiBasePath: m,
      sessionTokenFrontendDomain: p,
      sessionExpiredStatusCode: b,
      invalidClaimStatusCode: w,
      autoAddCredentials: v,
      isInIframe: k,
      tokenTransferMethod: a.tokenTransferMethod !== void 0 ? a.tokenTransferMethod : "cookie",
      sessionTokenBackendDomain: C,
      maxRetryAttemptsForSessionRefresh: S,
      preAPIHook: T,
      postAPIHook: I,
      onHandleEvent: x,
      override: _
    };
  }
  he.validateAndNormaliseInputOrThrowError = s;
  function u(a) {
    return a === void 0 ? {} : a;
  }
  he.getNormalisedUserContext = u;
  function l(a, i) {
    for (var h = a.split("."), m = 0; m < h.length; m++) {
      var y = h.slice(m).join(".");
      if (y === i || ".".concat(y) === i)
        return !0;
    }
    return !1;
  }
  return he.matchesDomainOrSubdomain = l, he;
}
var Ze = {}, $r = {}, jn;
function Go() {
  return jn || (jn = 1, function(e) {
    var r = $r && $r.__awaiter || function(n, d, f, g) {
      function c(s) {
        return s instanceof f ? s : new f(function(u) {
          u(s);
        });
      }
      return new (f || (f = Promise))(function(s, u) {
        function l(h) {
          try {
            i(g.next(h));
          } catch (m) {
            u(m);
          }
        }
        function a(h) {
          try {
            i(g.throw(h));
          } catch (m) {
            u(m);
          }
        }
        function i(h) {
          h.done ? s(h.value) : c(h.value).then(l, a);
        }
        i((g = g.apply(n, d || [])).next());
      });
    }, t = $r && $r.__generator || function(n, d) {
      var f = {
        label: 0,
        sent: function() {
          if (s[0] & 1) throw s[1];
          return s[1];
        },
        trys: [],
        ops: []
      }, g, c, s, u;
      return u = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
        return this;
      }), u;
      function l(i) {
        return function(h) {
          return a([i, h]);
        };
      }
      function a(i) {
        if (g) throw new TypeError("Generator is already executing.");
        for (; f; )
          try {
            if (g = 1, c && (s = i[0] & 2 ? c.return : i[0] ? c.throw || ((s = c.return) && s.call(c), 0) : c.next) && !(s = s.call(c, i[1])).done)
              return s;
            switch (c = 0, s && (i = [i[0] & 2, s.value]), i[0]) {
              case 0:
              case 1:
                s = i;
                break;
              case 4:
                return f.label++, { value: i[1], done: !1 };
              case 5:
                f.label++, c = i[1], i = [0];
                continue;
              case 7:
                i = f.ops.pop(), f.trys.pop();
                continue;
              default:
                if (s = f.trys, !(s = s.length > 0 && s[s.length - 1]) && (i[0] === 6 || i[0] === 2)) {
                  f = 0;
                  continue;
                }
                if (i[0] === 3 && (!s || i[1] > s[0] && i[1] < s[3])) {
                  f.label = i[1];
                  break;
                }
                if (i[0] === 6 && f.label < s[1]) {
                  f.label = s[1], s = i;
                  break;
                }
                if (s && f.label < s[2]) {
                  f.label = s[2], f.ops.push(i);
                  break;
                }
                s[2] && f.ops.pop(), f.trys.pop();
                continue;
            }
            i = d.call(n, f);
          } catch (h) {
            i = [6, h], c = 0;
          } finally {
            g = s = 0;
          }
        if (i[0] & 5) throw i[1];
        return { value: i[0] ? i[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ProcessState = e.PROCESS_STATE = void 0, function(n) {
      n[n.CALLING_INTERCEPTION_REQUEST = 0] = "CALLING_INTERCEPTION_REQUEST", n[n.CALLING_INTERCEPTION_RESPONSE = 1] = "CALLING_INTERCEPTION_RESPONSE";
    }(e.PROCESS_STATE || (e.PROCESS_STATE = {}));
    var o = (
      /** @class */
      function() {
        function n() {
          var d = this;
          this.history = [], this.addState = function(f) {
            try {
              process !== void 0 && process.env !== void 0 && process.env.TEST_MODE === "testing" && d.history.push(f);
            } catch {
            }
          }, this.getEventByLastEventByName = function(f) {
            for (var g = d.history.length - 1; g >= 0; g--)
              if (d.history[g] == f)
                return d.history[g];
          }, this.reset = function() {
            d.history = [];
          }, this.waitForEvent = function(f, g) {
            return g === void 0 && (g = 7e3), r(d, void 0, void 0, function() {
              var c, s = this;
              return t(this, function(u) {
                return c = Date.now(), [
                  2,
                  new Promise(function(l) {
                    var a = s;
                    function i() {
                      var h = a.getEventByLastEventByName(f);
                      h === void 0 ? Date.now() - c > g ? l(void 0) : setTimeout(i, 1e3) : l(h);
                    }
                    i();
                  })
                ];
              });
            });
          };
        }
        return n.getInstance = function() {
          return n.instance == null && (n.instance = new n()), n.instance;
        }, n;
      }()
    );
    e.ProcessState = o;
  }($r)), $r;
}
var _r = {}, Vn;
function Xo() {
  return Vn || (Vn = 1, Object.defineProperty(_r, "__esModule", { value: !0 }), _r.supported_fdi = _r.package_version = void 0, _r.package_version = "20.1.5", _r.supported_fdi = ["1.16", "1.17", "1.18", "1.19", "2.0", "3.0", "3.1", "4.0"]), _r;
}
var Ur = {}, er = {}, qn;
function Tl() {
  if (qn) return er;
  qn = 1;
  var e = er && er.__awaiter || function(o, n, d, f) {
    function g(c) {
      return c instanceof d ? c : new d(function(s) {
        s(c);
      });
    }
    return new (d || (d = Promise))(function(c, s) {
      function u(i) {
        try {
          a(f.next(i));
        } catch (h) {
          s(h);
        }
      }
      function l(i) {
        try {
          a(f.throw(i));
        } catch (h) {
          s(h);
        }
      }
      function a(i) {
        i.done ? c(i.value) : g(i.value).then(u, l);
      }
      a((f = f.apply(o, n || [])).next());
    });
  }, r = er && er.__generator || function(o, n) {
    var d = {
      label: 0,
      sent: function() {
        if (c[0] & 1) throw c[1];
        return c[1];
      },
      trys: [],
      ops: []
    }, f, g, c, s;
    return s = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
      return this;
    }), s;
    function u(a) {
      return function(i) {
        return l([a, i]);
      };
    }
    function l(a) {
      if (f) throw new TypeError("Generator is already executing.");
      for (; d; )
        try {
          if (f = 1, g && (c = a[0] & 2 ? g.return : a[0] ? g.throw || ((c = g.return) && c.call(g), 0) : g.next) && !(c = c.call(g, a[1])).done)
            return c;
          switch (g = 0, c && (a = [a[0] & 2, c.value]), a[0]) {
            case 0:
            case 1:
              c = a;
              break;
            case 4:
              return d.label++, { value: a[1], done: !1 };
            case 5:
              d.label++, g = a[1], a = [0];
              continue;
            case 7:
              a = d.ops.pop(), d.trys.pop();
              continue;
            default:
              if (c = d.trys, !(c = c.length > 0 && c[c.length - 1]) && (a[0] === 6 || a[0] === 2)) {
                d = 0;
                continue;
              }
              if (a[0] === 3 && (!c || a[1] > c[0] && a[1] < c[3])) {
                d.label = a[1];
                break;
              }
              if (a[0] === 6 && d.label < c[1]) {
                d.label = c[1], c = a;
                break;
              }
              if (c && d.label < c[2]) {
                d.label = c[2], d.ops.push(a);
                break;
              }
              c[2] && d.ops.pop(), d.trys.pop();
              continue;
          }
          a = n.call(o, d);
        } catch (i) {
          a = [6, i], g = 0;
        } finally {
          f = c = 0;
        }
      if (a[0] & 5) throw a[1];
      return { value: a[0] ? a[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(er, "__esModule", { value: !0 }), er.defaultCookieHandlerImplementation = void 0;
  var t = wr();
  return er.defaultCookieHandlerImplementation = {
    getCookie: function() {
      return e(this, void 0, void 0, function() {
        return r(this, function(o) {
          return [
            2,
            t.default.getReferenceOrThrow().windowHandler.getWindowUnsafe().document.cookie
          ];
        });
      });
    },
    setCookie: function(o) {
      return e(this, void 0, void 0, function() {
        return r(this, function(n) {
          return t.default.getReferenceOrThrow().windowHandler.getWindowUnsafe().document.cookie = o, [
            2
            /*return*/
          ];
        });
      });
    }
  }, er;
}
var zn;
function Ko() {
  if (zn) return Ur;
  zn = 1, Object.defineProperty(Ur, "__esModule", { value: !0 }), Ur.CookieHandlerReference = void 0;
  var e = Tl(), r = (
    /** @class */
    function() {
      function t(o) {
        var n = function(d) {
          return d;
        };
        o !== void 0 && (n = o), this.cookieHandler = n(e.defaultCookieHandlerImplementation);
      }
      return t.init = function(o) {
        t.instance === void 0 && (t.instance = new t(o));
      }, t.getReferenceOrThrow = function() {
        if (t.instance === void 0)
          throw new Error("SuperTokensCookieHandler must be initialized before calling this method.");
        return t.instance;
      }, t;
    }()
  );
  return Ur.CookieHandlerReference = r, Ur.default = r, Ur;
}
var Hr = {}, rr = {}, Mt = {}, Wn;
function Pl() {
  if (Wn) return Mt;
  Wn = 1, Object.defineProperty(Mt, "__esModule", { value: !0 });
  var e = (
    /** @class */
    function() {
      function t() {
        var o = this;
        this.locked = /* @__PURE__ */ new Map(), this.addToLocked = function(n, d) {
          var f = o.locked.get(n);
          f === void 0 ? d === void 0 ? o.locked.set(n, []) : o.locked.set(n, [d]) : d !== void 0 && (f.unshift(d), o.locked.set(n, f));
        }, this.isLocked = function(n) {
          return o.locked.has(n);
        }, this.lock = function(n) {
          return new Promise(function(d, f) {
            o.isLocked(n) ? o.addToLocked(n, d) : (o.addToLocked(n), d());
          });
        }, this.unlock = function(n) {
          var d = o.locked.get(n);
          if (d === void 0 || d.length === 0) {
            o.locked.delete(n);
            return;
          }
          var f = d.pop();
          o.locked.set(n, d), f !== void 0 && setTimeout(f, 0);
        };
      }
      return t.getInstance = function() {
        return t.instance === void 0 && (t.instance = new t()), t.instance;
      }, t;
    }()
  );
  function r() {
    return e.getInstance();
  }
  return Mt.default = r, Mt;
}
var Gn;
function El() {
  if (Gn) return rr;
  Gn = 1;
  var e = rr && rr.__awaiter || function(u, l, a, i) {
    return new (a || (a = Promise))(function(h, m) {
      function y(w) {
        try {
          b(i.next(w));
        } catch (v) {
          m(v);
        }
      }
      function p(w) {
        try {
          b(i.throw(w));
        } catch (v) {
          m(v);
        }
      }
      function b(w) {
        w.done ? h(w.value) : new a(function(v) {
          v(w.value);
        }).then(y, p);
      }
      b((i = i.apply(u, l || [])).next());
    });
  }, r = rr && rr.__generator || function(u, l) {
    var a = { label: 0, sent: function() {
      if (m[0] & 1) throw m[1];
      return m[1];
    }, trys: [], ops: [] }, i, h, m, y;
    return y = { next: p(0), throw: p(1), return: p(2) }, typeof Symbol == "function" && (y[Symbol.iterator] = function() {
      return this;
    }), y;
    function p(w) {
      return function(v) {
        return b([w, v]);
      };
    }
    function b(w) {
      if (i) throw new TypeError("Generator is already executing.");
      for (; a; ) try {
        if (i = 1, h && (m = w[0] & 2 ? h.return : w[0] ? h.throw || ((m = h.return) && m.call(h), 0) : h.next) && !(m = m.call(h, w[1])).done) return m;
        switch (h = 0, m && (w = [w[0] & 2, m.value]), w[0]) {
          case 0:
          case 1:
            m = w;
            break;
          case 4:
            return a.label++, { value: w[1], done: !1 };
          case 5:
            a.label++, h = w[1], w = [0];
            continue;
          case 7:
            w = a.ops.pop(), a.trys.pop();
            continue;
          default:
            if (m = a.trys, !(m = m.length > 0 && m[m.length - 1]) && (w[0] === 6 || w[0] === 2)) {
              a = 0;
              continue;
            }
            if (w[0] === 3 && (!m || w[1] > m[0] && w[1] < m[3])) {
              a.label = w[1];
              break;
            }
            if (w[0] === 6 && a.label < m[1]) {
              a.label = m[1], m = w;
              break;
            }
            if (m && a.label < m[2]) {
              a.label = m[2], a.ops.push(w);
              break;
            }
            m[2] && a.ops.pop(), a.trys.pop();
            continue;
        }
        w = l.call(u, a);
      } catch (v) {
        w = [6, v], h = 0;
      } finally {
        i = m = 0;
      }
      if (w[0] & 5) throw w[1];
      return { value: w[0] ? w[1] : void 0, done: !0 };
    }
  }, t = rr;
  Object.defineProperty(rr, "__esModule", { value: !0 });
  var o = Pl(), n = "browser-tabs-lock-key", d = {
    key: function(u) {
      return e(t, void 0, void 0, function() {
        return r(this, function(l) {
          throw new Error("Unsupported");
        });
      });
    },
    getItem: function(u) {
      return e(t, void 0, void 0, function() {
        return r(this, function(l) {
          throw new Error("Unsupported");
        });
      });
    },
    clear: function() {
      return e(t, void 0, void 0, function() {
        return r(this, function(u) {
          return [2, window.localStorage.clear()];
        });
      });
    },
    removeItem: function(u) {
      return e(t, void 0, void 0, function() {
        return r(this, function(l) {
          throw new Error("Unsupported");
        });
      });
    },
    setItem: function(u, l) {
      return e(t, void 0, void 0, function() {
        return r(this, function(a) {
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
    setItemSync: function(u, l) {
      return window.localStorage.setItem(u, l);
    }
  };
  function f(u) {
    return new Promise(function(l) {
      return setTimeout(l, u);
    });
  }
  function g(u) {
    for (var l = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", a = "", i = 0; i < u; i++) {
      var h = Math.floor(Math.random() * l.length);
      a += l[h];
    }
    return a;
  }
  function c() {
    return Date.now().toString() + g(15);
  }
  var s = (
    /** @class */
    function() {
      function u(l) {
        this.acquiredIatSet = /* @__PURE__ */ new Set(), this.storageHandler = void 0, this.id = c(), this.acquireLock = this.acquireLock.bind(this), this.releaseLock = this.releaseLock.bind(this), this.releaseLock__private__ = this.releaseLock__private__.bind(this), this.waitForSomethingToChange = this.waitForSomethingToChange.bind(this), this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(this), this.storageHandler = l, u.waiters === void 0 && (u.waiters = []);
      }
      return u.prototype.acquireLock = function(l, a) {
        return a === void 0 && (a = 5e3), e(this, void 0, void 0, function() {
          var i, h, m, y, p, b, w, v;
          return r(this, function(k) {
            switch (k.label) {
              case 0:
                i = Date.now() + g(4), h = Date.now() + a, m = n + "-" + l, y = this.storageHandler === void 0 ? d : this.storageHandler, k.label = 1;
              case 1:
                return Date.now() < h ? [4, f(30)] : [3, 8];
              case 2:
                return k.sent(), p = y.getItemSync(m), p !== null ? [3, 5] : (b = this.id + "-" + l + "-" + i, [4, f(Math.floor(Math.random() * 25))]);
              case 3:
                return k.sent(), y.setItemSync(m, JSON.stringify({
                  id: this.id,
                  iat: i,
                  timeoutKey: b,
                  timeAcquired: Date.now(),
                  timeRefreshed: Date.now()
                })), [4, f(30)];
              case 4:
                return k.sent(), w = y.getItemSync(m), w !== null && (v = JSON.parse(w), v.id === this.id && v.iat === i) ? (this.acquiredIatSet.add(i), this.refreshLockWhileAcquired(m, i), [2, !0]) : [3, 7];
              case 5:
                return u.lockCorrector(this.storageHandler === void 0 ? d : this.storageHandler), [4, this.waitForSomethingToChange(h)];
              case 6:
                k.sent(), k.label = 7;
              case 7:
                return i = Date.now() + g(4), [3, 1];
              case 8:
                return [2, !1];
            }
          });
        });
      }, u.prototype.refreshLockWhileAcquired = function(l, a) {
        return e(this, void 0, void 0, function() {
          var i = this;
          return r(this, function(h) {
            return setTimeout(function() {
              return e(i, void 0, void 0, function() {
                var m, y, p;
                return r(this, function(b) {
                  switch (b.label) {
                    case 0:
                      return [4, o.default().lock(a)];
                    case 1:
                      if (b.sent(), !this.acquiredIatSet.has(a))
                        return o.default().unlock(a), [
                          2
                          /*return*/
                        ];
                      if (m = this.storageHandler === void 0 ? d : this.storageHandler, y = m.getItemSync(l), y !== null)
                        p = JSON.parse(y), p.timeRefreshed = Date.now(), m.setItemSync(l, JSON.stringify(p)), o.default().unlock(a);
                      else
                        return o.default().unlock(a), [
                          2
                          /*return*/
                        ];
                      return this.refreshLockWhileAcquired(l, a), [
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
      }, u.prototype.waitForSomethingToChange = function(l) {
        return e(this, void 0, void 0, function() {
          return r(this, function(a) {
            switch (a.label) {
              case 0:
                return [4, new Promise(function(i) {
                  var h = !1, m = Date.now(), y = 50, p = !1;
                  function b() {
                    if (p || (window.removeEventListener("storage", b), u.removeFromWaiting(b), clearTimeout(w), p = !0), !h) {
                      h = !0;
                      var v = y - (Date.now() - m);
                      v > 0 ? setTimeout(i, v) : i(null);
                    }
                  }
                  window.addEventListener("storage", b), u.addToWaiting(b);
                  var w = setTimeout(b, Math.max(0, l - Date.now()));
                })];
              case 1:
                return a.sent(), [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, u.addToWaiting = function(l) {
        this.removeFromWaiting(l), u.waiters !== void 0 && u.waiters.push(l);
      }, u.removeFromWaiting = function(l) {
        u.waiters !== void 0 && (u.waiters = u.waiters.filter(function(a) {
          return a !== l;
        }));
      }, u.notifyWaiters = function() {
        if (u.waiters !== void 0) {
          var l = u.waiters.slice();
          l.forEach(function(a) {
            return a();
          });
        }
      }, u.prototype.releaseLock = function(l) {
        return e(this, void 0, void 0, function() {
          return r(this, function(a) {
            switch (a.label) {
              case 0:
                return [4, this.releaseLock__private__(l)];
              case 1:
                return [2, a.sent()];
            }
          });
        });
      }, u.prototype.releaseLock__private__ = function(l) {
        return e(this, void 0, void 0, function() {
          var a, i, h, m;
          return r(this, function(y) {
            switch (y.label) {
              case 0:
                return a = this.storageHandler === void 0 ? d : this.storageHandler, i = n + "-" + l, h = a.getItemSync(i), h === null ? [
                  2
                  /*return*/
                ] : (m = JSON.parse(h), m.id !== this.id ? [3, 2] : [4, o.default().lock(m.iat)]);
              case 1:
                y.sent(), this.acquiredIatSet.delete(m.iat), a.removeItemSync(i), o.default().unlock(m.iat), u.notifyWaiters(), y.label = 2;
              case 2:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, u.lockCorrector = function(l) {
        for (var a = Date.now() - 5e3, i = l, h = [], m = 0; ; ) {
          var y = i.keySync(m);
          if (y === null)
            break;
          h.push(y), m++;
        }
        for (var p = !1, b = 0; b < h.length; b++) {
          var w = h[b];
          if (w.includes(n)) {
            var v = i.getItemSync(w);
            if (v !== null) {
              var k = JSON.parse(v);
              (k.timeRefreshed === void 0 && k.timeAcquired < a || k.timeRefreshed !== void 0 && k.timeRefreshed < a) && (i.removeItemSync(w), p = !0);
            }
          }
        }
        p && u.notifyWaiters();
      }, u.waiters = void 0, u;
    }()
  );
  return rr.default = s, rr;
}
var Xn;
function Yo() {
  if (Xn) return Hr;
  Xn = 1, Object.defineProperty(Hr, "__esModule", { value: !0 }), Hr.LockFactoryReference = void 0;
  var e = El(), r = function(o) {
    return function() {
      return Promise.resolve(new e.default(o));
    };
  }, t = (
    /** @class */
    function() {
      function o(n) {
        this.lockFactory = n;
      }
      return o.init = function(n, d) {
        this.instance === void 0 && (this.instance = new o(
          n ?? r(d)
        ));
      }, o.getReferenceOrThrow = function() {
        if (o.instance === void 0)
          throw new Error("SuperTokensLockReference must be initialized before calling this method.");
        return o.instance;
      }, o;
    }()
  );
  return Hr.LockFactoryReference = t, Hr.default = t, Hr;
}
var tr = {}, Kn;
function Et() {
  if (Kn) return tr;
  Kn = 1, Object.defineProperty(tr, "__esModule", { value: !0 }), tr.logDebugMessage = tr.disableLogging = tr.enableLogging = void 0;
  var e = Xo(), r = "com.supertokens", t = !1;
  function o() {
    t = !0;
  }
  tr.enableLogging = o;
  function n() {
    t = !1;
  }
  tr.disableLogging = n;
  function d(f) {
    t && console.log(
      "".concat(r, ' {t: "').concat((/* @__PURE__ */ new Date()).toISOString(), '", message: "').concat(f, '", supertokens-website-ver: "').concat(e.package_version, '"}')
    );
  }
  return tr.logDebugMessage = d, tr;
}
var Fr = {}, rt = {}, Yn;
function Ol() {
  if (Yn) return rt;
  Yn = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.DateProvider = void 0;
  var e = wr(), r = (
    /** @class */
    function() {
      function t() {
        this.clockSkewInMillis = 0, this.thresholdInSeconds = 7;
      }
      return t.init = function() {
        if (t.instance === void 0) {
          t.instance = new t();
          var o = e.default.getReferenceOrThrow().windowHandler.localStorage, n = o.getItemSync(t.CLOCK_SKEW_KEY), d = n !== null ? parseInt(n, 10) : 0;
          t.instance.setClientClockSkewInMillis(d);
        }
      }, t.getReferenceOrThrow = function() {
        if (t.instance === void 0)
          throw new Error("DateProvider must be initialized before calling this method.");
        return t.instance;
      }, t.prototype.getThresholdInSeconds = function() {
        return this.thresholdInSeconds;
      }, t.prototype.setThresholdInSeconds = function(o) {
        this.thresholdInSeconds = o;
      }, t.prototype.setClientClockSkewInMillis = function(o) {
        this.clockSkewInMillis = Math.abs(o) >= this.thresholdInSeconds * 1e3 ? o : 0;
        var n = e.default.getReferenceOrThrow().windowHandler.localStorage;
        n.setItemSync(t.CLOCK_SKEW_KEY, String(o));
      }, t.prototype.getClientClockSkewInMillis = function() {
        return this.clockSkewInMillis;
      }, t.prototype.now = function() {
        return Date.now() + this.getClientClockSkewInMillis();
      }, t.CLOCK_SKEW_KEY = "__st_clockSkewInMillis", t;
    }()
  );
  return rt.DateProvider = r, rt;
}
var Qn;
function Yr() {
  if (Qn) return Fr;
  Qn = 1, Object.defineProperty(Fr, "__esModule", { value: !0 }), Fr.DateProviderReference = void 0;
  var e = Ol(), r = (
    /** @class */
    function() {
      function t(o) {
        o !== void 0 ? this.dateProvider = o() : (e.DateProvider.init(), this.dateProvider = e.DateProvider.getReferenceOrThrow());
      }
      return t.init = function(o) {
        t.instance === void 0 && (t.instance = new t(o));
      }, t.getReferenceOrThrow = function() {
        if (t.instance === void 0)
          throw new Error("SuperTokensDateProvider must be initialized before calling this method.");
        return t.instance;
      }, t;
    }()
  );
  return Fr.DateProviderReference = r, Fr.default = r, Fr;
}
var Jn;
function Ot() {
  return Jn || (Jn = 1, function(e) {
    var r = Ze && Ze.__assign || function() {
      return r = Object.assign || function(R) {
        for (var D, O = 1, $ = arguments.length; O < $; O++) {
          D = arguments[O];
          for (var P in D) Object.prototype.hasOwnProperty.call(D, P) && (R[P] = D[P]);
        }
        return R;
      }, r.apply(this, arguments);
    }, t = Ze && Ze.__awaiter || function(R, D, O, $) {
      function P(E) {
        return E instanceof O ? E : new O(function(L) {
          L(E);
        });
      }
      return new (O || (O = Promise))(function(E, L) {
        function N(V) {
          try {
            M($.next(V));
          } catch (W) {
            L(W);
          }
        }
        function q(V) {
          try {
            M($.throw(V));
          } catch (W) {
            L(W);
          }
        }
        function M(V) {
          V.done ? E(V.value) : P(V.value).then(N, q);
        }
        M(($ = $.apply(R, D || [])).next());
      });
    }, o = Ze && Ze.__generator || function(R, D) {
      var O = {
        label: 0,
        sent: function() {
          if (E[0] & 1) throw E[1];
          return E[1];
        },
        trys: [],
        ops: []
      }, $, P, E, L;
      return L = { next: N(0), throw: N(1), return: N(2) }, typeof Symbol == "function" && (L[Symbol.iterator] = function() {
        return this;
      }), L;
      function N(M) {
        return function(V) {
          return q([M, V]);
        };
      }
      function q(M) {
        if ($) throw new TypeError("Generator is already executing.");
        for (; O; )
          try {
            if ($ = 1, P && (E = M[0] & 2 ? P.return : M[0] ? P.throw || ((E = P.return) && E.call(P), 0) : P.next) && !(E = E.call(P, M[1])).done)
              return E;
            switch (P = 0, E && (M = [M[0] & 2, E.value]), M[0]) {
              case 0:
              case 1:
                E = M;
                break;
              case 4:
                return O.label++, { value: M[1], done: !1 };
              case 5:
                O.label++, P = M[1], M = [0];
                continue;
              case 7:
                M = O.ops.pop(), O.trys.pop();
                continue;
              default:
                if (E = O.trys, !(E = E.length > 0 && E[E.length - 1]) && (M[0] === 6 || M[0] === 2)) {
                  O = 0;
                  continue;
                }
                if (M[0] === 3 && (!E || M[1] > E[0] && M[1] < E[3])) {
                  O.label = M[1];
                  break;
                }
                if (M[0] === 6 && O.label < E[1]) {
                  O.label = E[1], E = M;
                  break;
                }
                if (E && O.label < E[2]) {
                  O.label = E[2], O.ops.push(M);
                  break;
                }
                E[2] && O.ops.pop(), O.trys.pop();
                continue;
            }
            M = D.call(R, O);
          } catch (V) {
            M = [6, V], P = 0;
          } finally {
            $ = E = 0;
          }
        if (M[0] & 5) throw M[1];
        return { value: M[0] ? M[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.updateClockSkewUsingFrontToken = e.fireSessionUpdateEventsIfNecessary = e.setFrontToken = e.getFrontToken = e.setAntiCSRF = e.saveLastAccessTokenUpdate = e.getTokenForHeaderAuth = e.setToken = e.getStorageNameForToken = e.getLocalSessionState = e.onInvalidClaimResponse = e.onTokenUpdate = e.onUnauthorisedResponse = e.FrontToken = e.AntiCsrfToken = void 0;
    var n = Go(), d = Xo(), f = Ko(), g = wr(), c = Yo(), s = Et(), u = Yr(), l = (
      /** @class */
      function() {
        function R() {
        }
        return R.getToken = function(D) {
          return t(this, void 0, void 0, function() {
            var O;
            return o(this, function($) {
              switch ($.label) {
                case 0:
                  return (0, s.logDebugMessage)("AntiCsrfToken.getToken: called"), D === void 0 ? (R.tokenInfo = void 0, (0, s.logDebugMessage)("AntiCsrfToken.getToken: returning undefined"), [2, void 0]) : R.tokenInfo !== void 0 ? [3, 2] : [4, ge()];
                case 1:
                  return O = $.sent(), O === null ? ((0, s.logDebugMessage)("AntiCsrfToken.getToken: returning undefined"), [2, void 0]) : (R.tokenInfo = {
                    antiCsrf: O,
                    associatedAccessTokenUpdate: D
                  }, [3, 4]);
                case 2:
                  return R.tokenInfo.associatedAccessTokenUpdate === D ? [3, 4] : (R.tokenInfo = void 0, [4, R.getToken(D)]);
                case 3:
                  return [2, $.sent()];
                case 4:
                  return (0, s.logDebugMessage)("AntiCsrfToken.getToken: returning: " + R.tokenInfo.antiCsrf), [2, R.tokenInfo.antiCsrf];
              }
            });
          });
        }, R.removeToken = function() {
          return t(this, void 0, void 0, function() {
            return o(this, function(D) {
              switch (D.label) {
                case 0:
                  return (0, s.logDebugMessage)("AntiCsrfToken.removeToken: called"), R.tokenInfo = void 0, [4, le(void 0)];
                case 1:
                  return D.sent(), [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, R.setItem = function(D, O) {
          return t(this, void 0, void 0, function() {
            return o(this, function($) {
              switch ($.label) {
                case 0:
                  return D === void 0 ? (R.tokenInfo = void 0, [
                    2
                    /*return*/
                  ]) : ((0, s.logDebugMessage)("AntiCsrfToken.setItem: called"), [4, le(O)]);
                case 1:
                  return $.sent(), R.tokenInfo = {
                    antiCsrf: O,
                    associatedAccessTokenUpdate: D
                  }, [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, R;
      }()
    );
    e.AntiCsrfToken = l;
    var a = (
      /** @class */
      function() {
        function R() {
        }
        return R.getTokenInfo = function() {
          return t(this, void 0, void 0, function() {
            var D, O;
            return o(this, function($) {
              switch ($.label) {
                case 0:
                  return (0, s.logDebugMessage)("FrontToken.getTokenInfo: called"), [4, F()];
                case 1:
                  return D = $.sent(), D !== null ? [3, 5] : [4, C(!1)];
                case 2:
                  return $.sent().status !== "EXISTS" ? [3, 4] : [
                    4,
                    new Promise(function(P) {
                      R.waiters.push(P);
                    })
                  ];
                case 3:
                  return $.sent(), [2, R.getTokenInfo()];
                case 4:
                  return [2, void 0];
                case 5:
                  return O = U(D), (0, s.logDebugMessage)("FrontToken.getTokenInfo: returning ate: " + O.ate), (0, s.logDebugMessage)("FrontToken.getTokenInfo: returning uid: " + O.uid), (0, s.logDebugMessage)("FrontToken.getTokenInfo: returning up: " + O.up), [2, O];
              }
            });
          });
        }, R.removeToken = function() {
          return t(this, void 0, void 0, function() {
            return o(this, function(D) {
              switch (D.label) {
                case 0:
                  return (0, s.logDebugMessage)("FrontToken.removeToken: called"), [4, j(void 0)];
                case 1:
                  return D.sent(), [4, T("access", "")];
                case 2:
                  return D.sent(), [4, T("refresh", "")];
                case 3:
                  return D.sent(), [4, l.removeToken()];
                case 4:
                  return D.sent(), R.waiters.forEach(function(O) {
                    return O(void 0);
                  }), R.waiters = [], [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, R.setItem = function(D) {
          return t(this, void 0, void 0, function() {
            return o(this, function(O) {
              switch (O.label) {
                case 0:
                  return [4, ee()];
                case 1:
                  return O.sent(), D === "remove" ? [2, R.removeToken()] : ((0, s.logDebugMessage)("FrontToken.setItem: called"), [4, j(D)]);
                case 2:
                  return O.sent(), R.waiters.forEach(function($) {
                    return $(void 0);
                  }), R.waiters = [], [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, R.doesTokenExists = function() {
          return t(this, void 0, void 0, function() {
            var D;
            return o(this, function(O) {
              switch (O.label) {
                case 0:
                  return [4, H()];
                case 1:
                  return D = O.sent(), [2, D !== null];
              }
            });
          });
        }, R.waiters = [], R;
      }()
    );
    e.FrontToken = a;
    var i = (
      /** @class */
      function() {
        function R() {
        }
        R.init = function(O, $) {
          (0, s.logDebugMessage)("init: called"), (0, s.logDebugMessage)("init: Input apiBasePath: " + O.apiBasePath), (0, s.logDebugMessage)("init: Input apiDomain: " + O.apiDomain), (0, s.logDebugMessage)("init: Input autoAddCredentials: " + O.autoAddCredentials), (0, s.logDebugMessage)("init: Input sessionTokenBackendDomain: " + O.sessionTokenBackendDomain), (0, s.logDebugMessage)("init: Input isInIframe: " + O.isInIframe), (0, s.logDebugMessage)("init: Input sessionExpiredStatusCode: " + O.sessionExpiredStatusCode), (0, s.logDebugMessage)("init: Input sessionTokenFrontendDomain: " + O.sessionTokenFrontendDomain), (0, s.logDebugMessage)("init: Input tokenTransferMethod: " + O.tokenTransferMethod);
          var P = g.default.getReferenceOrThrow().windowHandler.getWindowUnsafe();
          R.env = P === void 0 || P.fetch === void 0 ? wl : P, R.refreshTokenUrl = O.apiDomain + O.apiBasePath + "/session/refresh", R.signOutUrl = O.apiDomain + O.apiBasePath + "/signout", R.rid = "session", R.config = O, R.env.__supertokensOriginalFetch === void 0 && ((0, s.logDebugMessage)("init: __supertokensOriginalFetch is undefined"), R.env.__supertokensOriginalFetch = R.env.fetch.bind(R.env), R.env.__supertokensSessionRecipe = $, R.env.fetch = R.env.__supertokensSessionRecipe.addFetchInterceptorsAndReturnModifiedFetch({
            originalFetch: R.env.__supertokensOriginalFetch,
            userContext: {}
          }), R.env.__supertokensSessionRecipe.addXMLHttpRequestInterceptor({
            userContext: {}
          })), R.recipeImpl = R.env.__supertokensSessionRecipe, R.initCalled = !0;
        };
        var D;
        return D = R, R.initCalled = !1, R.doRequest = function(O, $, P) {
          return t(void 0, void 0, void 0, function() {
            var E, L, N, q, M, V, W, be, ie, Re, Be, ae, Te, Jr, fr;
            return o(D, function(ye) {
              switch (ye.label) {
                case 0:
                  if (!R.initCalled)
                    throw Error("init function not called");
                  (0, s.logDebugMessage)("doRequest: start of fetch interception"), E = !1;
                  try {
                    L = void 0, typeof P == "string" ? L = P : typeof P == "object" && (typeof P.url == "string" ? L = P.url : typeof P.href == "string" && (L = P.href)), E = !R.recipeImpl.shouldDoInterceptionBasedOnUrl(
                      L,
                      R.config.apiDomain,
                      R.config.sessionTokenBackendDomain
                    );
                  } catch (nn) {
                    if (nn.message === "Please provide a valid domain name")
                      (0, s.logDebugMessage)(
                        "doRequest: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                      ), E = !R.recipeImpl.shouldDoInterceptionBasedOnUrl(
                        g.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                        R.config.apiDomain,
                        R.config.sessionTokenBackendDomain
                      );
                    else
                      throw nn;
                  }
                  return (0, s.logDebugMessage)("doRequest: Value of doNotDoInterception: " + E), E ? ((0, s.logDebugMessage)("doRequest: Returning without interception"), [4, O($)]) : [3, 2];
                case 1:
                  return [2, ye.sent()];
                case 2:
                  return N = new Headers(
                    $ !== void 0 && $.headers !== void 0 ? $.headers : P.headers
                  ), N.has("Authorization") ? [4, x("access")] : [3, 5];
                case 3:
                  return q = ye.sent(), [4, x("refresh")];
                case 4:
                  M = ye.sent(), q !== void 0 && M !== void 0 && N.get("Authorization") === "Bearer ".concat(q) && ((0, s.logDebugMessage)(
                    "doRequest: Removing Authorization from user provided headers because it contains our access token"
                  ), N.delete("Authorization")), ye.label = 5;
                case 5:
                  (0, s.logDebugMessage)("doRequest: Interception started"), n.ProcessState.getInstance().addState(
                    n.PROCESS_STATE.CALLING_INTERCEPTION_REQUEST
                  ), V = 0, W = void 0, ye.label = 6;
                case 6:
                  return [4, C(!0)];
                case 7:
                  return be = ye.sent(), ie = new Headers(N), Re = r(r({}, $), { headers: ie }), be.status !== "EXISTS" ? [3, 9] : [4, l.getToken(be.lastAccessTokenUpdate)];
                case 8:
                  Be = ye.sent(), Be !== void 0 && ((0, s.logDebugMessage)("doRequest: Adding anti-csrf token to request"), ie.set("anti-csrf", Be)), ye.label = 9;
                case 9:
                  return R.config.autoAddCredentials && ((0, s.logDebugMessage)("doRequest: Adding credentials include"), Re === void 0 ? Re = {
                    credentials: "include"
                  } : Re.credentials === void 0 && (Re = r(r({}, Re), {
                    credentials: "include"
                  }))), ie.has("rid") ? (0, s.logDebugMessage)("doRequest: rid header was already there in request") : ((0, s.logDebugMessage)("doRequest: Adding rid header: anti-csrf"), ie.set("rid", "anti-csrf")), ae = R.config.tokenTransferMethod, (0, s.logDebugMessage)("doRequest: Adding st-auth-mode header: " + ae), ie.set("st-auth-mode", ae), [4, B(ie)];
                case 10:
                  return ye.sent(), (0, s.logDebugMessage)("doRequest: Making user's http call"), [4, O(Re)];
                case 11:
                  return Te = ye.sent(), (0, s.logDebugMessage)("doRequest: User's http call ended"), [4, A(Te)];
                case 12:
                  if (ye.sent(), X(
                    be.status === "EXISTS",
                    Te.status,
                    Te.headers.get("front-token")
                  ), Te.status !== R.config.sessionExpiredStatusCode)
                    return [3, 14];
                  if ((0, s.logDebugMessage)("doRequest: Status code is: " + Te.status), V >= R.config.maxRetryAttemptsForSessionRefresh)
                    throw (0, s.logDebugMessage)(
                      "doRequest: Maximum session refresh attempts reached. sessionRefreshAttempts: ".concat(V, ", maxRetryAttemptsForSessionRefresh: ").concat(R.config.maxRetryAttemptsForSessionRefresh)
                    ), Jr = "Received a 401 response from ".concat(
                      P,
                      ". Attempted to refresh the session and retry the request with the updated session tokens "
                    ).concat(
                      R.config.maxRetryAttemptsForSessionRefresh,
                      " times, but each attempt resulted in a 401 error. The maximum session refresh limit has been reached. Please investigate your API. To increase the session refresh attempts, update maxRetryAttemptsForSessionRefresh in the config."
                    ), console.error(Jr), new Error(Jr);
                  return [4, w(be)];
                case 13:
                  if (fr = ye.sent(), V++, (0, s.logDebugMessage)("doRequest: sessionRefreshAttempts: " + V), fr.result !== "RETRY") {
                    if ((0, s.logDebugMessage)("doRequest: Not retrying original request"), fr.error !== void 0)
                      if (fr.error instanceof Response)
                        W = fr.error;
                      else
                        throw fr.error;
                    else
                      W = Te;
                    return [3, 18];
                  }
                  return (0, s.logDebugMessage)("doRequest: Retrying original request"), [3, 17];
                case 14:
                  return Te.status !== R.config.invalidClaimStatusCode ? [3, 16] : [4, k(Te)];
                case 15:
                  ye.sent(), ye.label = 16;
                case 16:
                  return [2, Te];
                case 17:
                  return [3, 6];
                case 18:
                  return [2, W];
              }
            });
          });
        }, R.attemptRefreshingSession = function() {
          return t(void 0, void 0, void 0, function() {
            var O, $;
            return o(D, function(P) {
              switch (P.label) {
                case 0:
                  if (!R.initCalled)
                    throw Error("init function not called");
                  return [4, C(!1)];
                case 1:
                  return O = P.sent(), [4, w(O)];
                case 2:
                  if ($ = P.sent(), $.result === "API_ERROR")
                    throw $.error;
                  return [2, $.result === "RETRY"];
              }
            });
          });
        }, R;
      }()
    );
    e.default = i;
    var h = "st-last-access-token-update", m = "st-refresh-token", y = "st-access-token", p = "sAntiCsrf", b = "sFrontToken";
    function w(R) {
      return t(this, void 0, void 0, function() {
        var D, O, $, P, E, L, N, q, M, V, W, be, ie, Re, Be;
        return o(this, function(ae) {
          switch (ae.label) {
            case 0:
              return [4, c.default.getReferenceOrThrow().lockFactory()];
            case 1:
              D = ae.sent(), ae.label = 2;
            case 2:
              return (0, s.logDebugMessage)("onUnauthorisedResponse: trying to acquire lock"), [4, D.acquireLock("REFRESH_TOKEN_USE", 1e3)];
            case 3:
              if (!ae.sent()) return [3, 21];
              (0, s.logDebugMessage)("onUnauthorisedResponse: lock acquired"), ae.label = 4;
            case 4:
              return ae.trys.push([4, 17, 19, 21]), [4, C(!1)];
            case 5:
              return O = ae.sent(), O.status === "NOT_EXISTS" ? ((0, s.logDebugMessage)(
                "onUnauthorisedResponse: Not refreshing because local session state is NOT_EXISTS"
              ), i.config.onHandleEvent({
                action: "UNAUTHORISED",
                sessionExpiredOrRevoked: !1,
                userContext: {}
              }), [2, { result: "SESSION_EXPIRED" }]) : ($ = O.status === "EXISTS", P = R.status === "EXISTS", E = O.status !== R.status, L = "lastAccessTokenUpdate" in O && "lastAccessTokenUpdate" in R && O.lastAccessTokenUpdate !== R.lastAccessTokenUpdate, E && $ ? ((0, s.logDebugMessage)(
                "onUnauthorisedResponse: Retrying early because session status has changed and postLockLSS.status is EXISTS"
              ), [2, { result: "RETRY" }]) : $ && P && L ? ((0, s.logDebugMessage)(
                "onUnauthorisedResponse: Retrying early because pre and post lastAccessTokenUpdate don't match"
              ), [2, { result: "RETRY" }]) : (N = new Headers(), R.status !== "EXISTS" ? [3, 7] : [4, l.getToken(R.lastAccessTokenUpdate)]));
            case 6:
              q = ae.sent(), q !== void 0 && ((0, s.logDebugMessage)(
                "onUnauthorisedResponse: Adding anti-csrf token to refresh API call"
              ), N.set("anti-csrf", q)), ae.label = 7;
            case 7:
              return (0, s.logDebugMessage)("onUnauthorisedResponse: Adding rid and fdi-versions to refresh call header"), N.set("rid", i.rid), N.set("fdi-version", d.supported_fdi.join(",")), M = i.config.tokenTransferMethod, (0, s.logDebugMessage)("onUnauthorisedResponse: Adding st-auth-mode header: " + M), N.set("st-auth-mode", M), [4, B(N, !0)];
            case 8:
              return ae.sent(), (0, s.logDebugMessage)("onUnauthorisedResponse: Calling refresh pre API hook"), [
                4,
                i.config.preAPIHook({
                  action: "REFRESH_SESSION",
                  requestInit: {
                    method: "post",
                    credentials: "include",
                    headers: N
                  },
                  url: i.refreshTokenUrl,
                  userContext: {}
                })
              ];
            case 9:
              return V = ae.sent(), (0, s.logDebugMessage)("onUnauthorisedResponse: Making refresh call"), [
                4,
                i.env.__supertokensOriginalFetch(V.url, V.requestInit)
              ];
            case 10:
              return W = ae.sent(), (0, s.logDebugMessage)("onUnauthorisedResponse: Refresh call ended"), [4, A(W)];
            case 11:
              return ae.sent(), (0, s.logDebugMessage)("onUnauthorisedResponse: Refresh status code is: " + W.status), be = W.status === i.config.sessionExpiredStatusCode, W.headers.get("front-token") !== null ? [3, 14] : be ? [4, a.setItem("remove")] : [3, 13];
            case 12:
              return ae.sent(), [3, 14];
            case 13:
              if (W.status === 200)
                throw ie = "The 'front-token' header is missing from a successful refresh-session response. The most likely causes are proxy settings (e.g.: 'front-token' missing from 'access-control-expose-headers' or a proxy stripping this header). Please investigate your API.", console.error(ie), new Error(ie);
              ae.label = 14;
            case 14:
              if (X(
                R.status === "EXISTS",
                W.status,
                be && W.headers.get("front-token") === null ? "remove" : W.headers.get("front-token")
              ), W.status >= 300)
                throw W;
              return [
                4,
                i.config.postAPIHook({
                  action: "REFRESH_SESSION",
                  fetchResponse: W.clone(),
                  requestInit: V.requestInit,
                  url: V.url,
                  userContext: {}
                })
              ];
            case 15:
              return ae.sent(), [4, C(!1)];
            case 16:
              return ae.sent().status === "NOT_EXISTS" ? ((0, s.logDebugMessage)(
                "onUnauthorisedResponse: local session doesn't exist, so returning session expired"
              ), [2, { result: "SESSION_EXPIRED" }]) : (i.config.onHandleEvent({
                action: "REFRESH_SESSION",
                userContext: {}
              }), (0, s.logDebugMessage)("onUnauthorisedResponse: Sending RETRY signal"), [2, { result: "RETRY" }]);
            case 17:
              return Re = ae.sent(), [4, C(!1)];
            case 18:
              return ae.sent().status === "NOT_EXISTS" ? ((0, s.logDebugMessage)(
                "onUnauthorisedResponse: local session doesn't exist, so returning session expired"
              ), [2, { result: "SESSION_EXPIRED", error: Re }]) : ((0, s.logDebugMessage)("onUnauthorisedResponse: sending API_ERROR"), [2, { result: "API_ERROR", error: Re }]);
            case 19:
              return [4, D.releaseLock("REFRESH_TOKEN_USE")];
            case 20:
              return ae.sent(), (0, s.logDebugMessage)("onUnauthorisedResponse: Released lock"), [
                7
                /*endfinally*/
              ];
            case 21:
              return [4, C(!1)];
            case 22:
              return Be = ae.sent(), Be.status === "NOT_EXISTS" ? ((0, s.logDebugMessage)(
                "onUnauthorisedResponse: lock acquired failed and local session doesn't exist, so sending SESSION_EXPIRED"
              ), [2, { result: "SESSION_EXPIRED" }]) : Be.status !== R.status || Be.status === "EXISTS" && R.status === "EXISTS" && Be.lastAccessTokenUpdate !== R.lastAccessTokenUpdate ? ((0, s.logDebugMessage)(
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
    function v() {
      (0, s.logDebugMessage)("onTokenUpdate: firing ACCESS_TOKEN_PAYLOAD_UPDATED event"), i.config.onHandleEvent({
        action: "ACCESS_TOKEN_PAYLOAD_UPDATED",
        userContext: {}
      });
    }
    e.onTokenUpdate = v;
    function k(R) {
      return t(this, void 0, void 0, function() {
        var D;
        return o(this, function(O) {
          switch (O.label) {
            case 0:
              return O.trys.push([0, 2, , 3]), [
                4,
                i.recipeImpl.getInvalidClaimsFromResponse({
                  response: R,
                  userContext: {}
                })
              ];
            case 1:
              return D = O.sent(), D && i.config.onHandleEvent({
                action: "API_INVALID_CLAIM",
                claimValidationErrors: D,
                userContext: {}
              }), [3, 3];
            case 2:
              return O.sent(), [3, 3];
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
    function C(R) {
      return t(this, void 0, void 0, function() {
        var D, O, $, P, E, L, N;
        return o(this, function(q) {
          switch (q.label) {
            case 0:
              return (0, s.logDebugMessage)("getLocalSessionState: called"), [4, _(h)];
            case 1:
              return D = q.sent(), [4, a.doesTokenExists()];
            case 2:
              return O = q.sent(), O && D !== void 0 ? ((0, s.logDebugMessage)("getLocalSessionState: returning EXISTS since both frontToken and lastAccessTokenUpdate exists"), [2, { status: "EXISTS", lastAccessTokenUpdate: D }]) : [3, 3];
            case 3:
              return D ? ((0, s.logDebugMessage)("getLocalSessionState: returning NOT_EXISTS since frontToken was cleared but lastAccessTokenUpdate exists"), [2, { status: "NOT_EXISTS" }]) : [3, 4];
            case 4:
              return $ = {
                status: "MAY_EXIST"
              }, R ? ((0, s.logDebugMessage)("getLocalSessionState: trying to refresh"), [4, w($)]) : [3, 8];
            case 5:
              return P = q.sent(), P.result !== "RETRY" ? ((0, s.logDebugMessage)(
                "getLocalSessionState: return NOT_EXISTS in case error from backend" + P.result
              ), [
                2,
                {
                  status: "NOT_EXISTS"
                }
              ]) : [4, _(h)];
            case 6:
              return E = q.sent(), [4, a.doesTokenExists()];
            case 7:
              if (L = q.sent(), !L || E === void 0)
                throw N = "Failed to retrieve local session state from cookies after a successful session refresh. This indicates a configuration error or that the browser is preventing cookie writes.", console.error(N), new Error(N);
              return (0, s.logDebugMessage)("getLocalSessionState: returning EXISTS since both frontToken and lastAccessTokenUpdate exists post refresh"), [2, { status: "EXISTS", lastAccessTokenUpdate: E }];
            case 8:
              return (0, s.logDebugMessage)("getLocalSessionState: returning: " + $.status), [2, $];
          }
        });
      });
    }
    e.getLocalSessionState = C;
    function S(R) {
      switch (R) {
        case "access":
          return y;
        case "refresh":
          return m;
      }
    }
    e.getStorageNameForToken = S;
    function T(R, D) {
      var O = S(R);
      return D !== "" ? ((0, s.logDebugMessage)("setToken: saved ".concat(R, " token into cookies")), I(O, D, Date.now() + 31536e5)) : ((0, s.logDebugMessage)("setToken: cleared ".concat(R, " token from cookies")), I(O, D, 0));
    }
    e.setToken = T;
    function I(R, D, O) {
      var $ = "Fri, 31 Dec 9999 23:59:59 GMT";
      O !== Number.MAX_SAFE_INTEGER && ($ = new Date(O).toUTCString());
      var P = i.config.sessionTokenFrontendDomain;
      return P === "localhost" || P === g.default.getReferenceOrThrow().windowHandler.location.getHostName() ? f.default.getReferenceOrThrow().cookieHandler.setCookie(
        "".concat(R, "=").concat(D, ";expires=").concat($, ";path=/;samesite=").concat(i.config.isInIframe ? "none;secure" : "lax")
      ) : f.default.getReferenceOrThrow().cookieHandler.setCookie(
        "".concat(R, "=").concat(D, ";expires=").concat($, ";domain=").concat(P, ";path=/;samesite=").concat(i.config.isInIframe ? "none;secure" : "lax")
      );
    }
    function x(R) {
      return t(this, void 0, void 0, function() {
        var D;
        return o(this, function(O) {
          return D = S(R), [2, _(D)];
        });
      });
    }
    e.getTokenForHeaderAuth = x;
    function _(R) {
      return t(this, void 0, void 0, function() {
        var D, O, $, P;
        return o(this, function(E) {
          switch (E.label) {
            case 0:
              return O = "; ", [4, f.default.getReferenceOrThrow().cookieHandler.getCookie()];
            case 1:
              return D = O + E.sent(), $ = D.split("; " + R + "="), $.length >= 2 && (P = $.pop(), P !== void 0) ? [2, P.split(";").shift()] : [2, void 0];
          }
        });
      });
    }
    function B(R, D) {
      return D === void 0 && (D = !1), t(this, void 0, void 0, function() {
        var O, $;
        return o(this, function(P) {
          switch (P.label) {
            case 0:
              return (0, s.logDebugMessage)("setTokenHeaders: adding existing tokens as header"), [4, x("access")];
            case 1:
              return O = P.sent(), [4, x("refresh")];
            case 2:
              return $ = P.sent(), (D || O !== void 0) && $ !== void 0 ? R.has("Authorization") ? (0, s.logDebugMessage)(
                "setAuthorizationHeaderIfRequired: Authorization header defined by the user, not adding"
              ) : ((0, s.logDebugMessage)(
                "setAuthorizationHeaderIfRequired: added authorization header"
              ), R.set(
                "Authorization",
                "Bearer ".concat(D ? $ : O)
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
    function A(R) {
      return t(this, void 0, void 0, function() {
        var D, O, $, P, E;
        return o(this, function(L) {
          switch (L.label) {
            case 0:
              return (0, s.logDebugMessage)("saveTokensFromHeaders: Saving updated tokens from the response headers"), D = R.headers.get("st-refresh-token"), D === null ? [3, 2] : ((0, s.logDebugMessage)("saveTokensFromHeaders: saving new refresh token"), [4, T("refresh", D)]);
            case 1:
              L.sent(), L.label = 2;
            case 2:
              return O = R.headers.get("st-access-token"), O === null ? [3, 4] : ((0, s.logDebugMessage)("saveTokensFromHeaders: saving new access token"), [4, T("access", O)]);
            case 3:
              L.sent(), L.label = 4;
            case 4:
              return $ = R.headers.get("front-token"), $ === null ? [3, 6] : ((0, s.logDebugMessage)("saveTokensFromHeaders: Setting sFrontToken: " + $), [4, a.setItem($)]);
            case 5:
              L.sent(), (0, e.updateClockSkewUsingFrontToken)({ frontToken: $, responseHeaders: R.headers }), L.label = 6;
            case 6:
              return P = R.headers.get("anti-csrf"), P === null ? [3, 9] : [4, C(!1)];
            case 7:
              return E = L.sent(), E.status !== "EXISTS" ? [3, 9] : ((0, s.logDebugMessage)("saveTokensFromHeaders: Setting anti-csrf token"), [4, l.setItem(E.lastAccessTokenUpdate, P)]);
            case 8:
              L.sent(), L.label = 9;
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
    function ee() {
      return t(this, void 0, void 0, function() {
        var R;
        return o(this, function(D) {
          switch (D.label) {
            case 0:
              return (0, s.logDebugMessage)("saveLastAccessTokenUpdate: called"), R = Date.now().toString(), (0, s.logDebugMessage)("saveLastAccessTokenUpdate: setting " + R), [4, I(h, R, Number.MAX_SAFE_INTEGER)];
            case 1:
              return D.sent(), G !== void 0 ? [3, 3] : [4, _(h)];
            case 2:
              G = D.sent() === R, D.label = 3;
            case 3:
              return G === !1 && console.warn(
                "Saving to cookies was not successful, this indicates a configuration error or the browser preventing us from writing the cookies."
              ), [4, I("sIRTFrontend", "", 0)];
            case 4:
              return D.sent(), [
                2
                /*return*/
              ];
          }
        });
      });
    }
    e.saveLastAccessTokenUpdate = ee;
    function ge() {
      return t(this, void 0, void 0, function() {
        function R() {
          return t(this, void 0, void 0, function() {
            var O, $, P, E, L;
            return o(this, function(N) {
              switch (N.label) {
                case 0:
                  return $ = "; ", [
                    4,
                    f.default.getReferenceOrThrow().cookieHandler.getCookie()
                  ];
                case 1:
                  return O = $ + N.sent(), P = O.split("; " + p + "="), P.length >= 2 && (E = P.pop(), E !== void 0) ? (L = E.split(";").shift(), L === void 0 ? [2, null] : [2, L]) : [2, null];
              }
            });
          });
        }
        var D;
        return o(this, function(O) {
          switch (O.label) {
            case 0:
              return (0, s.logDebugMessage)("getAntiCSRFToken: called"), [4, C(!0)];
            case 1:
              return O.sent().status !== "EXISTS" ? ((0, s.logDebugMessage)(
                "getAntiCSRFToken: Returning because local session state != EXISTS"
              ), [2, null]) : [4, R()];
            case 2:
              return D = O.sent(), (0, s.logDebugMessage)("getAntiCSRFToken: returning: " + D), [2, D];
          }
        });
      });
    }
    function le(R) {
      return t(this, void 0, void 0, function() {
        return o(this, function(D) {
          switch (D.label) {
            case 0:
              return (0, s.logDebugMessage)("setAntiCSRF: called: " + R), R === void 0 ? [3, 2] : [4, I(p, R, Number.MAX_SAFE_INTEGER)];
            case 1:
              return D.sent(), [3, 4];
            case 2:
              return [4, I(p, "", 0)];
            case 3:
              D.sent(), D.label = 4;
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    e.setAntiCSRF = le;
    function H() {
      return t(this, void 0, void 0, function() {
        var R;
        return o(this, function(D) {
          switch (D.label) {
            case 0:
              return (0, s.logDebugMessage)("getFrontTokenFromCookie: called"), [4, _(b)];
            case 1:
              return R = D.sent(), [2, R === void 0 ? null : R];
          }
        });
      });
    }
    function U(R) {
      return JSON.parse(decodeURIComponent(escape(atob(R))));
    }
    function F() {
      return t(this, void 0, void 0, function() {
        var R;
        return o(this, function(D) {
          switch (D.label) {
            case 0:
              return (0, s.logDebugMessage)("getFrontToken: called"), [4, C(!0)];
            case 1:
              return D.sent().status !== "EXISTS" ? ((0, s.logDebugMessage)("getFrontToken: Returning because sIRTFrontend != EXISTS"), [2, null]) : [4, H()];
            case 2:
              return R = D.sent(), (0, s.logDebugMessage)("getFrontToken: returning: " + R), [2, R];
          }
        });
      });
    }
    e.getFrontToken = F;
    function j(R) {
      return t(this, void 0, void 0, function() {
        var D, O, $;
        return o(this, function(P) {
          switch (P.label) {
            case 0:
              return (0, s.logDebugMessage)("setFrontToken: called"), [4, H()];
            case 1:
              return D = P.sent(), D !== null && R !== void 0 && (O = U(D).up, $ = U(R).up, JSON.stringify(O) !== JSON.stringify($) && v()), R !== void 0 ? [3, 3] : [4, I(b, "", 0)];
            case 2:
              return P.sent(), [3, 5];
            case 3:
              return [4, I(b, R, Number.MAX_SAFE_INTEGER)];
            case 4:
              P.sent(), P.label = 5;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    e.setFrontToken = j;
    function X(R, D, O) {
      if (O == null) {
        (0, s.logDebugMessage)(
          "fireSessionUpdateEventsIfNecessary returning early because the front token was not updated"
        );
        return;
      }
      var $ = O !== "remove";
      (0, s.logDebugMessage)(
        "fireSessionUpdateEventsIfNecessary wasLoggedIn: ".concat(R, " frontTokenExistsAfter: ").concat($, " status: ").concat(D)
      ), R ? $ || (D === i.config.sessionExpiredStatusCode ? ((0, s.logDebugMessage)("onUnauthorisedResponse: firing UNAUTHORISED event"), i.config.onHandleEvent({
        action: "UNAUTHORISED",
        sessionExpiredOrRevoked: !0,
        userContext: {}
      })) : ((0, s.logDebugMessage)("onUnauthorisedResponse: firing SIGN_OUT event"), i.config.onHandleEvent({
        action: "SIGN_OUT",
        userContext: {}
      }))) : $ && ((0, s.logDebugMessage)("onUnauthorisedResponse: firing SESSION_CREATED event"), i.config.onHandleEvent({
        action: "SESSION_CREATED",
        userContext: {}
      }));
    }
    e.fireSessionUpdateEventsIfNecessary = X;
    var oe = function(R) {
      var D = R.frontToken, O = R.responseHeaders;
      if ((0, s.logDebugMessage)("updateClockSkewUsingFrontToken: frontToken: " + D), D == null || D === "remove") {
        (0, s.logDebugMessage)(
          "updateClockSkewUsingFrontToken: the access token payload wasn't updated or is being removed, skipping clock skew update"
        );
        return;
      }
      var $ = U(D), P = i.recipeImpl.calculateClockSkewInMillis({
        accessTokenPayload: $.up,
        responseHeaders: O
      });
      u.default.getReferenceOrThrow().dateProvider.setClientClockSkewInMillis(P), (0, s.logDebugMessage)("updateClockSkewUsingFrontToken: Client clock synchronized successfully");
    };
    e.updateClockSkewUsingFrontToken = oe;
  }(Ze)), Ze;
}
var jr = {}, Zn;
function Na() {
  if (Zn) return jr;
  Zn = 1, Object.defineProperty(jr, "__esModule", { value: !0 }), jr.SessionClaimValidatorStore = void 0;
  var e = (
    /** @class */
    function() {
      function r() {
      }
      return r.claimValidatorsAddedByOtherRecipes = [], r.addClaimValidatorFromOtherRecipe = function(t) {
        r.claimValidatorsAddedByOtherRecipes.push(t);
      }, r.getClaimValidatorsAddedByOtherRecipes = function() {
        return r.claimValidatorsAddedByOtherRecipes;
      }, r;
    }()
  );
  return jr.SessionClaimValidatorStore = e, jr.default = e, jr;
}
var ei;
function Al() {
  if (ei) return et;
  ei = 1, Object.defineProperty(et, "__esModule", { value: !0 }), et.getGlobalClaimValidators = void 0;
  var e = Wo(), r = Ot(), t = Na();
  function o(n, d) {
    var f = (0, e.getNormalisedUserContext)(d), g = t.default.getClaimValidatorsAddedByOtherRecipes(), c = r.default.recipeImpl.getGlobalClaimValidators({
      claimValidatorsAddedByOtherRecipes: g,
      userContext: f
    }), s = n !== void 0 ? n(c, f) : c;
    return s;
  }
  return et.getGlobalClaimValidators = o, et;
}
var ri;
function Dl() {
  return ri || (ri = 1, function(e) {
    function r(t) {
      for (var o in t) e.hasOwnProperty(o) || (e[o] = t[o]);
    }
    e.__esModule = !0, r(Al());
  }(mo)), mo;
}
var ti;
function Me() {
  if (ti) return ce;
  ti = 1, Object.defineProperty(ce, "__esModule", { value: !0 }), ce.normaliseUser = ce.normaliseUserResponse = ce.getGlobalClaimValidators = ce.getHashFromLocation = ce.getNormalisedUserContext = ce.checkForSSRErrorAndAppendIfNeeded = ce.getAllQueryParams = ce.getQueryParams = ce.isTest = ce.normaliseInputAppInfoOrThrowError = ce.appendQueryParamsToURL = void 0;
  var e = ro(), r = _l(), t = Rl(), o = Ba(), n = Dl();
  function d(p, b) {
    if (b === void 0)
      return p;
    try {
      var w = new URL(p);
      return Object.entries(b).forEach(function(C) {
        var S = C[0], T = C[1];
        w.searchParams.set(S, T);
      }), w.href;
    } catch {
      var v = p.startsWith("/") ? "http:localhost" : "http://localhost/", k = new URL("".concat(v).concat(p));
      return Object.entries(b).forEach(function(S) {
        var T = S[0], I = S[1];
        k.searchParams.set(T, I);
      }), "".concat(k.pathname).concat(k.search);
    }
  }
  ce.appendQueryParamsToURL = d;
  function f(p, b) {
    return b !== void 0 ? new o.default(b) : new o.default(p);
  }
  function g(p) {
    if (p === void 0)
      throw new Error("Please provide the appInfo object when calling supertokens.init");
    if (p.apiDomain === void 0)
      throw new Error("Please provide your apiDomain inside the appInfo object when calling supertokens.init");
    if (p.appName === void 0)
      throw new Error("Please provide your appName inside the appInfo object when calling supertokens.init");
    var b = new o.default("");
    return p.apiGatewayPath !== void 0 && (b = new o.default(p.apiGatewayPath)), {
      appName: p.appName,
      apiDomain: new t.default(p.apiDomain),
      apiBasePath: b.appendPath(
        f(r.DEFAULT_API_BASE_PATH, p.apiBasePath)
      )
    };
  }
  ce.normaliseInputAppInfoOrThrowError = g;
  function c() {
    try {
      return process.env.TEST_MODE === "testing";
    } catch {
      return !1;
    }
  }
  ce.isTest = c;
  function s(p) {
    var b = new URLSearchParams(
      e.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getSearch()
    ), w = b.get(p);
    if (w !== null)
      return w;
  }
  ce.getQueryParams = s;
  function u() {
    return new URLSearchParams(
      e.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getSearch()
    );
  }
  ce.getAllQueryParams = u;
  function l(p) {
    return typeof window > "u" && (p = p + r.SSR_ERROR), p;
  }
  ce.checkForSSRErrorAndAppendIfNeeded = l;
  function a(p) {
    return p === void 0 ? {} : p;
  }
  ce.getNormalisedUserContext = a;
  function i() {
    return e.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getHash().substring(1);
  }
  ce.getHashFromLocation = i;
  function h(p) {
    var b = p.overrideGlobalClaimValidators, w = p.userContext;
    return (0, n.getGlobalClaimValidators)(b, w);
  }
  ce.getGlobalClaimValidators = h;
  function m(p, b) {
    return "createdNewRecipeUser" in b ? b : {
      createdNewRecipeUser: b.createdNewUser,
      user: y(p, b.user)
    };
  }
  ce.normaliseUserResponse = m;
  function y(p, b) {
    if ("loginMethods" in b)
      return b;
    var w = b.email !== void 0 ? [b.email] : [], v = b.phoneNumber !== void 0 ? [b.phoneNumber] : [], k = b.thirdParty !== void 0 ? [b.thirdParty] : [];
    return {
      id: b.id,
      emails: w,
      phoneNumbers: v,
      thirdParty: k,
      isPrimaryUser: !1,
      tenantIds: b.tenantIds,
      timeJoined: b.timeJoined,
      loginMethods: [
        {
          recipeId: p,
          recipeUserId: b.id,
          timeJoined: b.timeJoined,
          tenantIds: b.tenantIds,
          email: b.email,
          phoneNumber: b.email
        }
      ]
    };
  }
  return ce.normaliseUser = y, ce;
}
var ke = {}, Ut = {}, oi;
function La() {
  if (oi) return Ut;
  oi = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  var e = (
    /** @class */
    /* @__PURE__ */ function() {
      function r(t) {
        this.config = t;
      }
      return r;
    }()
  );
  return Ut.default = e, Ut;
}
var vo = {}, Rr = {}, He = {}, we = {}, or = {}, ni;
function Bl() {
  if (ni) return or;
  ni = 1;
  var e = or && or.__awaiter || function(n, d, f, g) {
    function c(s) {
      return s instanceof f ? s : new f(function(u) {
        u(s);
      });
    }
    return new (f || (f = Promise))(function(s, u) {
      function l(h) {
        try {
          i(g.next(h));
        } catch (m) {
          u(m);
        }
      }
      function a(h) {
        try {
          i(g.throw(h));
        } catch (m) {
          u(m);
        }
      }
      function i(h) {
        h.done ? s(h.value) : c(h.value).then(l, a);
      }
      i((g = g.apply(n, d || [])).next());
    });
  }, r = or && or.__generator || function(n, d) {
    var f = {
      label: 0,
      sent: function() {
        if (s[0] & 1) throw s[1];
        return s[1];
      },
      trys: [],
      ops: []
    }, g, c, s, u;
    return u = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
      return this;
    }), u;
    function l(i) {
      return function(h) {
        return a([i, h]);
      };
    }
    function a(i) {
      if (g) throw new TypeError("Generator is already executing.");
      for (; f; )
        try {
          if (g = 1, c && (s = i[0] & 2 ? c.return : i[0] ? c.throw || ((s = c.return) && s.call(c), 0) : c.next) && !(s = s.call(c, i[1])).done)
            return s;
          switch (c = 0, s && (i = [i[0] & 2, s.value]), i[0]) {
            case 0:
            case 1:
              s = i;
              break;
            case 4:
              return f.label++, { value: i[1], done: !1 };
            case 5:
              f.label++, c = i[1], i = [0];
              continue;
            case 7:
              i = f.ops.pop(), f.trys.pop();
              continue;
            default:
              if (s = f.trys, !(s = s.length > 0 && s[s.length - 1]) && (i[0] === 6 || i[0] === 2)) {
                f = 0;
                continue;
              }
              if (i[0] === 3 && (!s || i[1] > s[0] && i[1] < s[3])) {
                f.label = i[1];
                break;
              }
              if (i[0] === 6 && f.label < s[1]) {
                f.label = s[1], s = i;
                break;
              }
              if (s && f.label < s[2]) {
                f.label = s[2], f.ops.push(i);
                break;
              }
              s[2] && f.ops.pop(), f.trys.pop();
              continue;
          }
          i = d.call(n, f);
        } catch (h) {
          i = [6, h], c = 0;
        } finally {
          g = s = 0;
        }
      if (i[0] & 5) throw i[1];
      return { value: i[0] ? i[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(or, "__esModule", { value: !0 }), or.createAxiosErrorFromFetchResp = void 0;
  function t(n, d, f, g, c) {
    return n.config = d, f && (n.code = f), n.request = g, n.response = c, n.isAxiosError = !0, n.toJSON = function() {
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
    }, n;
  }
  function o(n) {
    return e(this, void 0, void 0, function() {
      var d, f, g, c, s;
      return r(this, function(u) {
        switch (u.label) {
          case 0:
            if (d = {
              url: n.url,
              headers: n.headers
            }, f = "status" in n, !f) return [3, 12];
            if (c = n.headers.get("content-type"), s = void 0, c !== null) return [3, 5];
            u.label = 1;
          case 1:
            return u.trys.push([1, 3, , 4]), [4, n.text()];
          case 2:
            return s = u.sent(), [3, 4];
          case 3:
            return u.sent(), s = "", [3, 4];
          case 4:
            return [3, 11];
          case 5:
            return c.includes("application/json") ? [4, n.json()] : [3, 7];
          case 6:
            return s = u.sent(), [3, 11];
          case 7:
            return c.includes("text/") ? [4, n.text()] : [3, 9];
          case 8:
            return s = u.sent(), [3, 11];
          case 9:
            return [4, n.blob()];
          case 10:
            s = u.sent(), u.label = 11;
          case 11:
            g = {
              data: s,
              status: n.status,
              statusText: n.statusText,
              headers: n.headers,
              config: d,
              request: void 0
            }, u.label = 12;
          case 12:
            return [
              2,
              t(
                f ? new Error("Request failed with status code " + n.status) : n,
                d,
                n.code,
                void 0,
                g
              )
            ];
        }
      });
    });
  }
  return or.createAxiosErrorFromFetchResp = o, or;
}
var ii;
function Nl() {
  if (ii) return we;
  ii = 1;
  var e = we && we.__assign || function() {
    return e = Object.assign || function(b) {
      for (var w, v = 1, k = arguments.length; v < k; v++) {
        w = arguments[v];
        for (var C in w) Object.prototype.hasOwnProperty.call(w, C) && (b[C] = w[C]);
      }
      return b;
    }, e.apply(this, arguments);
  }, r = we && we.__awaiter || function(b, w, v, k) {
    function C(S) {
      return S instanceof v ? S : new v(function(T) {
        T(S);
      });
    }
    return new (v || (v = Promise))(function(S, T) {
      function I(B) {
        try {
          _(k.next(B));
        } catch (A) {
          T(A);
        }
      }
      function x(B) {
        try {
          _(k.throw(B));
        } catch (A) {
          T(A);
        }
      }
      function _(B) {
        B.done ? S(B.value) : C(B.value).then(I, x);
      }
      _((k = k.apply(b, w || [])).next());
    });
  }, t = we && we.__generator || function(b, w) {
    var v = {
      label: 0,
      sent: function() {
        if (S[0] & 1) throw S[1];
        return S[1];
      },
      trys: [],
      ops: []
    }, k, C, S, T;
    return T = { next: I(0), throw: I(1), return: I(2) }, typeof Symbol == "function" && (T[Symbol.iterator] = function() {
      return this;
    }), T;
    function I(_) {
      return function(B) {
        return x([_, B]);
      };
    }
    function x(_) {
      if (k) throw new TypeError("Generator is already executing.");
      for (; v; )
        try {
          if (k = 1, C && (S = _[0] & 2 ? C.return : _[0] ? C.throw || ((S = C.return) && S.call(C), 0) : C.next) && !(S = S.call(C, _[1])).done)
            return S;
          switch (C = 0, S && (_ = [_[0] & 2, S.value]), _[0]) {
            case 0:
            case 1:
              S = _;
              break;
            case 4:
              return v.label++, { value: _[1], done: !1 };
            case 5:
              v.label++, C = _[1], _ = [0];
              continue;
            case 7:
              _ = v.ops.pop(), v.trys.pop();
              continue;
            default:
              if (S = v.trys, !(S = S.length > 0 && S[S.length - 1]) && (_[0] === 6 || _[0] === 2)) {
                v = 0;
                continue;
              }
              if (_[0] === 3 && (!S || _[1] > S[0] && _[1] < S[3])) {
                v.label = _[1];
                break;
              }
              if (_[0] === 6 && v.label < S[1]) {
                v.label = S[1], S = _;
                break;
              }
              if (S && v.label < S[2]) {
                v.label = S[2], v.ops.push(_);
                break;
              }
              S[2] && v.ops.pop(), v.trys.pop();
              continue;
          }
          _ = w.call(b, v);
        } catch (B) {
          _ = [6, B], C = 0;
        } finally {
          k = S = 0;
        }
      if (_[0] & 5) throw _[1];
      return { value: _[0] ? _[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(we, "__esModule", { value: !0 }), we.responseErrorInterceptor = we.responseInterceptor = we.interceptorFunctionRequestFulfilled = void 0;
  var o = Bl(), n = Ot(), d = Go(), f = wr(), g = Et();
  function c(b) {
    b.__supertokensSessionRefreshAttempts === void 0 && (b.__supertokensSessionRefreshAttempts = 0), b.__supertokensSessionRefreshAttempts++;
  }
  function s(b) {
    return b.__supertokensSessionRefreshAttempts === void 0 && (b.__supertokensSessionRefreshAttempts = 0), b.__supertokensSessionRefreshAttempts >= n.default.config.maxRetryAttemptsForSessionRefresh;
  }
  function u(b) {
    var w = b.url === void 0 ? "" : b.url, v = b.baseURL;
    return v !== void 0 && (w.charAt(0) === "/" && v.charAt(v.length - 1) === "/" ? w = v + w.substr(1) : w.charAt(0) !== "/" && v.charAt(v.length - 1) !== "/" ? w = v + "/" + w : w = v + w), w;
  }
  function l(b) {
    return r(this, void 0, void 0, function() {
      var w, v, k, C, S, T;
      return t(this, function(I) {
        switch (I.label) {
          case 0:
            (0, g.logDebugMessage)("interceptorFunctionRequestFulfilled: started axios interception"), w = u(b), v = !1;
            try {
              v = typeof w == "string" && !n.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                w,
                n.default.config.apiDomain,
                n.default.config.sessionTokenBackendDomain
              );
            } catch (x) {
              if (x.message === "Please provide a valid domain name")
                (0, g.logDebugMessage)(
                  "interceptorFunctionRequestFulfilled: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                ), v = !n.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                  f.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                  n.default.config.apiDomain,
                  n.default.config.sessionTokenBackendDomain
                );
              else
                throw x;
            }
            return (0, g.logDebugMessage)("interceptorFunctionRequestFulfilled: Value of doNotDoInterception: " + v), v ? ((0, g.logDebugMessage)(
              "interceptorFunctionRequestFulfilled: Returning config unchanged"
            ), [2, b]) : ((0, g.logDebugMessage)("interceptorFunctionRequestFulfilled: Modifying config"), d.ProcessState.getInstance().addState(
              d.PROCESS_STATE.CALLING_INTERCEPTION_REQUEST
            ), [4, (0, n.getLocalSessionState)(!0)]);
          case 1:
            return k = I.sent(), C = b, k.status !== "EXISTS" ? [3, 3] : [4, n.AntiCsrfToken.getToken(k.lastAccessTokenUpdate)];
          case 2:
            S = I.sent(), S !== void 0 && ((0, g.logDebugMessage)(
              "interceptorFunctionRequestFulfilled: Adding anti-csrf token to request"
            ), C = e(e({}, C), {
              headers: C === void 0 ? {
                "anti-csrf": S
              } : e(e({}, C.headers), { "anti-csrf": S })
            })), I.label = 3;
          case 3:
            return n.default.config.autoAddCredentials && C.withCredentials === void 0 && ((0, g.logDebugMessage)(
              "interceptorFunctionRequestFulfilled: Adding credentials include"
            ), C = e(e({}, C), { withCredentials: !0 })), (0, g.logDebugMessage)("interceptorFunctionRequestFulfilled: Adding rid header: anti-csrf (it may be overriden by the user's provided rid)"), C = e(e({}, C), {
              headers: C === void 0 ? {
                rid: "anti-csrf"
              } : e({ rid: "anti-csrf" }, C.headers)
            }), T = n.default.config.tokenTransferMethod, (0, g.logDebugMessage)("interceptorFunctionRequestFulfilled: Adding st-auth-mode header: " + T), C.headers["st-auth-mode"] = T, [4, p(C)];
          case 4:
            return C = I.sent(), [4, m(C)];
          case 5:
            return I.sent(), (0, g.logDebugMessage)("interceptorFunctionRequestFulfilled: returning modified config"), [2, C];
        }
      });
    });
  }
  we.interceptorFunctionRequestFulfilled = l;
  function a(b) {
    var w = this;
    return function(v) {
      return r(w, void 0, void 0, function() {
        var k, C, S, T;
        return t(this, function(I) {
          switch (I.label) {
            case 0:
              if (k = !1, !n.default.initCalled)
                throw new Error("init function not called");
              (0, g.logDebugMessage)("responseInterceptor: started"), (0, g.logDebugMessage)("responseInterceptor: already intercepted: " + v.headers["x-supertokens-xhr-intercepted"]), C = u(v.config);
              try {
                k = typeof C == "string" && !n.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                  C,
                  n.default.config.apiDomain,
                  n.default.config.sessionTokenBackendDomain
                ) || !!v.headers["x-supertokens-xhr-intercepted"];
              } catch (x) {
                if (x.message === "Please provide a valid domain name")
                  (0, g.logDebugMessage)(
                    "responseInterceptor: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                  ), k = !n.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                    f.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                    n.default.config.apiDomain,
                    n.default.config.sessionTokenBackendDomain
                  ) || !!v.headers["x-supertokens-xhr-intercepted"];
                else
                  throw x;
              }
              return (0, g.logDebugMessage)("responseInterceptor: Value of doNotDoInterception: " + k), k ? ((0, g.logDebugMessage)("responseInterceptor: Returning without interception"), [2, v]) : ((0, g.logDebugMessage)("responseInterceptor: Interception started"), d.ProcessState.getInstance().addState(
                d.PROCESS_STATE.CALLING_INTERCEPTION_RESPONSE
              ), [4, (0, n.getLocalSessionState)(!1)]);
            case 1:
              return S = I.sent(), [4, y(v)];
            case 2:
              return I.sent(), (0, n.fireSessionUpdateEventsIfNecessary)(S.status === "EXISTS", v.status, v.headers["front-token"]), v.status !== n.default.config.sessionExpiredStatusCode ? [3, 3] : ((0, g.logDebugMessage)("responseInterceptor: Status code is: " + v.status), T = v.config, [
                2,
                h.doRequest(
                  function(x) {
                    return b(x);
                  },
                  T,
                  C,
                  v,
                  void 0,
                  !0
                )
              ]);
            case 3:
              return v.status !== n.default.config.invalidClaimStatusCode ? [3, 5] : [4, (0, n.onInvalidClaimResponse)(v)];
            case 4:
              I.sent(), I.label = 5;
            case 5:
              return [2, v];
          }
        });
      });
    };
  }
  we.responseInterceptor = a;
  function i(b) {
    var w = this;
    return function(v) {
      return r(w, void 0, void 0, function() {
        var k;
        return t(this, function(C) {
          switch (C.label) {
            case 0:
              if ((0, g.logDebugMessage)("responseErrorInterceptor: called"), (0, g.logDebugMessage)("responseErrorInterceptor: already intercepted: " + (v.response && v.response.headers["x-supertokens-xhr-intercepted"])), v.response === void 0 || v.response.headers["x-supertokens-xhr-intercepted"])
                throw v;
              return v.response !== void 0 && v.response.status === n.default.config.sessionExpiredStatusCode ? ((0, g.logDebugMessage)("responseErrorInterceptor: Status code is: " + v.response.status), k = v.config, [
                2,
                h.doRequest(
                  function(S) {
                    return b(S);
                  },
                  k,
                  u(k),
                  void 0,
                  v,
                  !0
                )
              ]) : [3, 1];
            case 1:
              return v.response !== void 0 && v.response.status === n.default.config.invalidClaimStatusCode ? [4, (0, n.onInvalidClaimResponse)(v.response)] : [3, 3];
            case 2:
              C.sent(), C.label = 3;
            case 3:
              throw v;
          }
        });
      });
    };
  }
  we.responseErrorInterceptor = i;
  var h = (
    /** @class */
    function() {
      function b() {
      }
      var w;
      return w = b, b.doRequest = function(v, k, C, S, T, I) {
        return I === void 0 && (I = !1), r(void 0, void 0, void 0, function() {
          var x, _, B, A, G, ee, ge, le, F, H, U, F, j, X, oe;
          return t(w, function(R) {
            switch (R.label) {
              case 0:
                if (!n.default.initCalled)
                  throw Error("init function not called");
                (0, g.logDebugMessage)("doRequest: called"), x = !1;
                try {
                  x = typeof C == "string" && !n.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                    C,
                    n.default.config.apiDomain,
                    n.default.config.sessionTokenBackendDomain
                  ) && I;
                } catch (D) {
                  if (D.message === "Please provide a valid domain name")
                    (0, g.logDebugMessage)(
                      "doRequest: Trying shouldDoInterceptionBasedOnUrl with location.origin"
                    ), x = !n.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
                      f.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
                      n.default.config.apiDomain,
                      n.default.config.sessionTokenBackendDomain
                    ) && I;
                  else
                    throw D;
                }
                if ((0, g.logDebugMessage)("doRequest: Value of doNotDoInterception: " + x), !x) return [3, 2];
                if ((0, g.logDebugMessage)("doRequest: Returning without interception"), T !== void 0)
                  throw T;
                return S !== void 0 ? [2, S] : [4, v(k)];
              case 1:
                return [2, R.sent()];
              case 2:
                return (0, g.logDebugMessage)("doRequest: Interception started"), [4, p(k)];
              case 3:
                k = R.sent(), _ = void 0, R.label = 4;
              case 4:
                return [4, (0, n.getLocalSessionState)(!0)];
              case 5:
                return B = R.sent(), A = k, B.status !== "EXISTS" ? [3, 7] : [4, n.AntiCsrfToken.getToken(B.lastAccessTokenUpdate)];
              case 6:
                G = R.sent(), G !== void 0 && ((0, g.logDebugMessage)("doRequest: Adding anti-csrf token to request"), A = e(e({}, A), {
                  headers: A === void 0 ? {
                    "anti-csrf": G
                  } : e(e({}, A.headers), {
                    "anti-csrf": G
                  })
                })), R.label = 7;
              case 7:
                return n.default.config.autoAddCredentials && A.withCredentials === void 0 && ((0, g.logDebugMessage)("doRequest: Adding credentials include"), A = e(e({}, A), { withCredentials: !0 })), (0, g.logDebugMessage)("doRequest: Adding rid header: anti-csrf (May get overriden by user's rid)"), A = e(e({}, A), {
                  headers: A === void 0 ? {
                    rid: "anti-csrf"
                  } : e({ rid: "anti-csrf" }, A.headers)
                }), ee = n.default.config.tokenTransferMethod, (0, g.logDebugMessage)("doRequest: Adding st-auth-mode header: " + ee), A.headers["st-auth-mode"] = ee, [4, m(A)];
              case 8:
                R.sent(), R.label = 9;
              case 9:
                if (R.trys.push([9, 14, , 27]), ge = T, le = S, T = void 0, S = void 0, ge !== void 0)
                  throw (0, g.logDebugMessage)(
                    "doRequest: Not making call because localPrevError is not undefined"
                  ), ge;
                return le !== void 0 ? (0, g.logDebugMessage)(
                  "doRequest: Not making call because localPrevResponse is not undefined"
                ) : (0, g.logDebugMessage)("doRequest: Making user's http call"), le !== void 0 ? [3, 11] : [4, v(A)];
              case 10:
                return H = R.sent(), [3, 12];
              case 11:
                H = le, R.label = 12;
              case 12:
                return F = H, (0, g.logDebugMessage)("doRequest: User's http call ended"), [4, y(F)];
              case 13:
                return R.sent(), (0, n.fireSessionUpdateEventsIfNecessary)(B.status === "EXISTS", F.status, F.headers["front-token"]), [2, F];
              case 14:
                return U = R.sent(), F = U.response, F === void 0 ? [3, 25] : [4, y(F)];
              case 15:
                if (R.sent(), (0, n.fireSessionUpdateEventsIfNecessary)(B.status === "EXISTS", F.status, F.headers["front-token"]), F.status !== n.default.config.sessionExpiredStatusCode)
                  return [3, 21];
                if ((0, g.logDebugMessage)("doRequest: Status code is: " + F.status), s(k))
                  throw (0, g.logDebugMessage)(
                    "doRequest: Maximum session refresh attempts reached. sessionRefreshAttempts: ".concat(
                      k.__supertokensSessionRefreshAttempts,
                      ", maxRetryAttemptsForSessionRefresh: "
                    ).concat(n.default.config.maxRetryAttemptsForSessionRefresh)
                  ), j = "Received a 401 response from ".concat(
                    C,
                    ". Attempted to refresh the session and retry the request with the updated session tokens "
                  ).concat(
                    n.default.config.maxRetryAttemptsForSessionRefresh,
                    " times, but each attempt resulted in a 401 error. The maximum session refresh limit has been reached. Please investigate your API. To increase the session refresh attempts, update maxRetryAttemptsForSessionRefresh in the config."
                  ), console.error(j), new Error(j);
                return [4, (0, n.onUnauthorisedResponse)(B)];
              case 16:
                return X = R.sent(), c(k), (0, g.logDebugMessage)("doRequest: sessionRefreshAttempts: " + k.__supertokensSessionRefreshAttempts), X.result === "RETRY" ? [3, 20] : ((0, g.logDebugMessage)("doRequest: Not retrying original request"), X.error === void 0 ? [3, 18] : [4, (0, o.createAxiosErrorFromFetchResp)(X.error)]);
              case 17:
                return oe = R.sent(), [3, 19];
              case 18:
                oe = U, R.label = 19;
              case 19:
                return _ = oe, [3, 28];
              case 20:
                return (0, g.logDebugMessage)("doRequest: Retrying original request"), [3, 24];
              case 21:
                return F.status !== n.default.config.invalidClaimStatusCode ? [3, 23] : [4, (0, n.onInvalidClaimResponse)(F)];
              case 22:
                R.sent(), R.label = 23;
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
                throw _;
            }
          });
        });
      }, b;
    }()
  );
  we.default = h;
  function m(b) {
    return r(this, void 0, void 0, function() {
      var w, v;
      return t(this, function(k) {
        switch (k.label) {
          case 0:
            return b.headers === void 0 && (b.headers = {}), (0, g.logDebugMessage)("setAuthorizationHeaderIfRequired: adding existing tokens as header"), [4, (0, n.getTokenForHeaderAuth)("access")];
          case 1:
            return w = k.sent(), [4, (0, n.getTokenForHeaderAuth)("refresh")];
          case 2:
            return v = k.sent(), w !== void 0 && v !== void 0 ? b.headers.Authorization !== void 0 || b.headers.authorization !== void 0 ? (0, g.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: Authorization header defined by the user, not adding"
            ) : ((0, g.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: added authorization header"
            ), b.headers = e(e({}, b.headers), {
              Authorization: "Bearer ".concat(w)
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
    return r(this, void 0, void 0, function() {
      var w, v, k, C, S, T;
      return t(this, function(I) {
        switch (I.label) {
          case 0:
            return (0, g.logDebugMessage)("saveTokensFromHeaders: Saving updated tokens from the response"), w = b.headers["st-refresh-token"], w === void 0 ? [3, 2] : ((0, g.logDebugMessage)("saveTokensFromHeaders: saving new refresh token"), [4, (0, n.setToken)("refresh", w)]);
          case 1:
            I.sent(), I.label = 2;
          case 2:
            return v = b.headers["st-access-token"], v === void 0 ? [3, 4] : ((0, g.logDebugMessage)("saveTokensFromHeaders: saving new access token"), [4, (0, n.setToken)("access", v)]);
          case 3:
            I.sent(), I.label = 4;
          case 4:
            return k = b.headers["front-token"], k === void 0 ? [3, 6] : ((0, g.logDebugMessage)("doRequest: Setting sFrontToken: " + k), [4, n.FrontToken.setItem(k)]);
          case 5:
            I.sent(), C = new Headers(), Object.entries(b.headers).forEach(function(x) {
              var _ = x[0], B = x[1];
              Array.isArray(B) ? B.forEach(function(A) {
                return C.append(_, A);
              }) : C.append(_, B);
            }), (0, n.updateClockSkewUsingFrontToken)({ frontToken: k, responseHeaders: C }), I.label = 6;
          case 6:
            return S = b.headers["anti-csrf"], S === void 0 ? [3, 9] : [4, (0, n.getLocalSessionState)(!1)];
          case 7:
            return T = I.sent(), T.status !== "EXISTS" ? [3, 9] : ((0, g.logDebugMessage)("doRequest: Setting anti-csrf token"), [4, n.AntiCsrfToken.setItem(T.lastAccessTokenUpdate, S)]);
          case 8:
            I.sent(), I.label = 9;
          case 9:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function p(b) {
    return r(this, void 0, void 0, function() {
      var w, v, k, C;
      return t(this, function(S) {
        switch (S.label) {
          case 0:
            return [4, (0, n.getTokenForHeaderAuth)("access")];
          case 1:
            return w = S.sent(), [4, (0, n.getTokenForHeaderAuth)("refresh")];
          case 2:
            return v = S.sent(), k = b.headers.Authorization || b.headers.authorization, w !== void 0 && v !== void 0 && (k === "Bearer ".concat(w) || "__supertokensAddedAuthHeader" in b) ? ((0, g.logDebugMessage)(
              "removeAuthHeaderIfMatchesLocalToken: Removing Authorization from user provided headers because it contains our access token"
            ), C = e(e({}, b), { headers: e({}, b.headers) }), delete C.headers.authorization, delete C.headers.Authorization, [2, C]) : [2, b];
        }
      });
    });
  }
  return we;
}
var Ir = {}, ai;
function Ma() {
  if (ai) return Ir;
  ai = 1;
  var e = Ir && Ir.__extends || /* @__PURE__ */ function() {
    var t = function(o, n) {
      return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, f) {
        d.__proto__ = f;
      } || function(d, f) {
        for (var g in f) Object.prototype.hasOwnProperty.call(f, g) && (d[g] = f[g]);
      }, t(o, n);
    };
    return function(o, n) {
      if (typeof n != "function" && n !== null)
        throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
      t(o, n);
      function d() {
        this.constructor = o;
      }
      o.prototype = n === null ? Object.create(n) : (d.prototype = n.prototype, new d());
    };
  }();
  Object.defineProperty(Ir, "__esModule", { value: !0 }), Ir.STGeneralError = void 0;
  var r = (
    /** @class */
    function(t) {
      e(o, t);
      function o(n) {
        var d = t.call(this, n) || this;
        return d.isSuperTokensGeneralError = !0, d;
      }
      return o.isThisError = function(n) {
        return n.isSuperTokensGeneralError === !0;
      }, o;
    }(Error)
  );
  return Ir.STGeneralError = r, Ir;
}
var nr = {}, si;
function Ll() {
  if (si) return nr;
  si = 1;
  var e = nr && nr.__awaiter || function(a, i, h, m) {
    function y(p) {
      return p instanceof h ? p : new h(function(b) {
        b(p);
      });
    }
    return new (h || (h = Promise))(function(p, b) {
      function w(C) {
        try {
          k(m.next(C));
        } catch (S) {
          b(S);
        }
      }
      function v(C) {
        try {
          k(m.throw(C));
        } catch (S) {
          b(S);
        }
      }
      function k(C) {
        C.done ? p(C.value) : y(C.value).then(w, v);
      }
      k((m = m.apply(a, i || [])).next());
    });
  }, r = nr && nr.__generator || function(a, i) {
    var h = {
      label: 0,
      sent: function() {
        if (p[0] & 1) throw p[1];
        return p[1];
      },
      trys: [],
      ops: []
    }, m, y, p, b;
    return b = { next: w(0), throw: w(1), return: w(2) }, typeof Symbol == "function" && (b[Symbol.iterator] = function() {
      return this;
    }), b;
    function w(k) {
      return function(C) {
        return v([k, C]);
      };
    }
    function v(k) {
      if (m) throw new TypeError("Generator is already executing.");
      for (; h; )
        try {
          if (m = 1, y && (p = k[0] & 2 ? y.return : k[0] ? y.throw || ((p = y.return) && p.call(y), 0) : y.next) && !(p = p.call(y, k[1])).done)
            return p;
          switch (y = 0, p && (k = [k[0] & 2, p.value]), k[0]) {
            case 0:
            case 1:
              p = k;
              break;
            case 4:
              return h.label++, { value: k[1], done: !1 };
            case 5:
              h.label++, y = k[1], k = [0];
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
          k = i.call(a, h);
        } catch (C) {
          k = [6, C], y = 0;
        } finally {
          m = p = 0;
        }
      if (k[0] & 5) throw k[1];
      return { value: k[0] ? k[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(nr, "__esModule", { value: !0 }), nr.addInterceptorsToXMLHttpRequest = void 0;
  var t = Ot(), o = Et(), n = wr(), d = Go(), f = ["readystatechange", "abort", "error", "load", "loadend", "loadstart", "progress", "timeout"];
  function g() {
    var a = new Promise(function(h) {
      return setTimeout(h, 0);
    }), i = XMLHttpRequest;
    (0, o.logDebugMessage)("addInterceptorsToXMLHttpRequest called"), XMLHttpRequest = function() {
      var h = new i(), m = this, y = [], p = [], b = {}, w, v = /* @__PURE__ */ new Map(), k = a;
      function C(H) {
        k = k.finally(function() {
          var U;
          return (U = H()) === null || U === void 0 ? void 0 : U.catch(function(F) {
            var j = new ProgressEvent("error");
            j.error = F, m.onerror !== void 0 && m.onerror !== null && m.onerror(j), B("error", j);
          });
        });
      }
      var S = "", T = !1, I = void 0, x, _ = 0;
      m.onload = null, m.onreadystatechange = null, m.onloadend = null, m.addEventListener = function(H, U, F) {
        var j = v.get(H);
        j === void 0 && (j = /* @__PURE__ */ new Set(), v.set(H, j)), j.add(U);
      }, m.removeEventListener = function(H, U) {
        var F = v.get(H);
        F === void 0 && (F = /* @__PURE__ */ new Set(), v.set(H, F)), F.delete(U);
      };
      function B(H, U) {
        var F = v.get(H);
        (0, o.logDebugMessage)(
          "XHRInterceptor dispatching ".concat(U.type, " to ").concat(F ? F.size : 0, " listeners")
        ), F && Array.from(F).forEach(function(j) {
          return j.apply(m, [U]);
        });
      }
      function A() {
        return e(this, void 0, void 0, function() {
          var H, U, F;
          return r(this, function(j) {
            switch (j.label) {
              case 0:
                if (I === void 0)
                  throw new Error("Should never come here..");
                if ((0, o.logDebugMessage)("XHRInterceptor.handleRetryPostRefreshing: preRequestLSS " + I.status), _ >= t.default.config.maxRetryAttemptsForSessionRefresh)
                  throw (0, o.logDebugMessage)(
                    "XHRInterceptor.handleRetryPostRefreshing: Maximum session refresh attempts reached. sessionRefreshAttempts: ".concat(_, ", maxRetryAttemptsForSessionRefresh: ").concat(t.default.config.maxRetryAttemptsForSessionRefresh)
                  ), b.status = 0, b.statusText = "", b.responseType = "", H = "Received a 401 response from ".concat(
                    S,
                    ". Attempted to refresh the session and retry the request with the updated session tokens "
                  ).concat(
                    t.default.config.maxRetryAttemptsForSessionRefresh,
                    " times, but each attempt resulted in a 401 error. The maximum session refresh limit has been reached. Please investigate your API. To increase the session refresh attempts, update maxRetryAttemptsForSessionRefresh in the config."
                  ), console.error(H), new Error(H);
                return [4, (0, t.onUnauthorisedResponse)(I)];
              case 1:
                if (U = j.sent(), _++, (0, o.logDebugMessage)("XHRInterceptor.handleRetryPostRefreshing: sessionRefreshAttempts: " + _), U.result !== "RETRY") {
                  if ((0, o.logDebugMessage)(
                    "XHRInterceptor.handleRetryPostRefreshing: Not retrying original request " + !!U.error
                  ), U.error !== void 0)
                    throw U.error;
                  return [2, !0];
                }
                return (0, o.logDebugMessage)("XHRInterceptor.handleRetryPostRefreshing: Retrying original request"), F = new i(), ge(m, F, !0), y.forEach(function(X) {
                  X(F);
                }), le(F, x), [2, !1];
            }
          });
        });
      }
      function G(H) {
        return e(this, void 0, void 0, function() {
          var U, F, j, X, oe;
          return r(this, function(R) {
            switch (R.label) {
              case 0:
                if (T)
                  return (0, o.logDebugMessage)(
                    "XHRInterceptor.handleResponse: Returning without interception"
                  ), [2, !0];
                R.label = 1;
              case 1:
                return R.trys.push([1, 7, , 11]), (0, o.logDebugMessage)("XHRInterceptor.handleResponse: Interception started"), d.ProcessState.getInstance().addState(
                  d.PROCESS_STATE.CALLING_INTERCEPTION_RESPONSE
                ), U = H.status, F = l(H), [4, u(F)];
              case 2:
                return R.sent(), (0, t.fireSessionUpdateEventsIfNecessary)(I.status === "EXISTS", U, F.get("front-token")), U !== t.default.config.sessionExpiredStatusCode ? [3, 4] : ((0, o.logDebugMessage)("responseInterceptor: Status code is: " + U), [4, A()]);
              case 3:
                return [2, R.sent()];
              case 4:
                return U !== t.default.config.invalidClaimStatusCode ? [3, 6] : [4, (0, t.onInvalidClaimResponse)({ data: H.responseText })];
              case 5:
                R.sent(), R.label = 6;
              case 6:
                return [2, !0];
              case 7:
                return j = R.sent(), (0, o.logDebugMessage)("XHRInterceptor.handleResponse: caught error"), j.status === void 0 ? [3, 9] : [4, c(j)];
              case 8:
                if (X = R.sent(), b.status = X.status, b.statusText = X.statusText, b.responseType = X.responseType, w = X.headers, X.responseType === "json")
                  try {
                    b.response = JSON.parse(X.responseText);
                  } catch {
                    b.response = X.responseText;
                  }
                else
                  b.response = X.responseText;
                return b.responseText = X.responseText, [3, 10];
              case 9:
                oe = new ProgressEvent("error"), oe.error = j, m.onerror !== void 0 && m.onerror !== null && m.onerror(oe), B("error", oe), R.label = 10;
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
      m.open = function(H, U) {
        (0, o.logDebugMessage)("XHRInterceptor.open called");
        var F = arguments;
        S = U;
        try {
          T = typeof S == "string" && !t.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
            S,
            t.default.config.apiDomain,
            t.default.config.sessionTokenBackendDomain
          ) || typeof S != "string" && !t.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
            S.toString(),
            t.default.config.apiDomain,
            t.default.config.sessionTokenBackendDomain
          );
        } catch (j) {
          if (j.message === "Please provide a valid domain name")
            (0, o.logDebugMessage)(
              "XHRInterceptor.open: Trying shouldDoInterceptionBasedOnUrl with location.origin"
            ), T = !t.default.recipeImpl.shouldDoInterceptionBasedOnUrl(
              n.default.getReferenceOrThrow().windowHandler.location.getOrigin(),
              t.default.config.apiDomain,
              t.default.config.sessionTokenBackendDomain
            );
          else
            throw j;
        }
        C(function() {
          y.push(function(j) {
            j.open.apply(j, F);
          }), h.open.apply(h, F);
        });
      }, m.send = function(H) {
        x = H, le(h, x);
      }, m.setRequestHeader = function(H, U) {
        var F = this;
        if ((0, o.logDebugMessage)("XHRInterceptor.setRequestHeader: Called with ".concat(H)), T) {
          C(function() {
            return h.setRequestHeader(H, U);
          });
          return;
        }
        H !== "anti-csrf" && C(function() {
          return e(F, void 0, void 0, function() {
            var j, X;
            return r(this, function(oe) {
              switch (oe.label) {
                case 0:
                  return H.toLowerCase() !== "authorization" ? [3, 3] : ((0, o.logDebugMessage)("XHRInterceptor.setRequestHeader: checking if user provided auth header matches local token"), [4, (0, t.getTokenForHeaderAuth)("access")]);
                case 1:
                  return j = oe.sent(), [4, (0, t.getTokenForHeaderAuth)("refresh")];
                case 2:
                  if (X = oe.sent(), j !== void 0 && X !== void 0 && U === "Bearer ".concat(j))
                    return (0, o.logDebugMessage)(
                      "XHRInterceptor.setRequestHeader: skipping Authorization from user provided headers because it contains our access token"
                    ), [
                      2
                      /*return*/
                    ];
                  oe.label = 3;
                case 3:
                  return y.push(function(R) {
                    R.setRequestHeader(H, U);
                  }), p.push({ name: H, value: U }), h.setRequestHeader(H, U), [
                    2
                    /*return*/
                  ];
              }
            });
          });
        });
      };
      var ee = void 0;
      ge(m, h, !1);
      function ge(H, U, F) {
        var j, X = ["load", "loadend", "readystatechange"];
        (0, o.logDebugMessage)("XHRInterceptor.setUpXHR called");
        for (var oe = function(N) {
          (0, o.logDebugMessage)("XHRInterceptor added listener for event ".concat(N)), U.addEventListener(N, function(q) {
            (0, o.logDebugMessage)("XHRInterceptor got event ".concat(N)), X.includes(N) || B(N, q);
          });
        }, R = 0, D = f; R < D.length; R++) {
          var O = D[R];
          oe(O);
        }
        if (U.onload = function(N) {
          j === void 0 && (j = G(U)), j.then(function(q) {
            q && (H.onload && H.onload(N), B("load", N));
          });
        }, U.onreadystatechange = function(N) {
          U.readyState === i.DONE ? (j === void 0 && (j = G(U)), j.then(function(q) {
            q && (H.onreadystatechange && H.onreadystatechange(N), B("readystatechange", N));
          })) : (H.onreadystatechange && H.onreadystatechange(N), B("readystatechange", N));
        }, U.onloadend = function(N) {
          j === void 0 && (j = G(U)), j.then(function(q) {
            q && (H.onloadend && H.onloadend(N), B("loadend", N));
          });
        }, H.getAllResponseHeaders = function() {
          var N;
          return w ? (N = "", w.forEach(function(q, M) {
            return N += "".concat(M, ": ").concat(q, `\r
`);
          })) : N = U.getAllResponseHeaders(), N + `x-supertokens-xhr-intercepted: true\r
`;
        }, H.getResponseHeader = function(N) {
          return N === "x-supertokens-xhr-intercepted" ? "true" : w ? w.get(N) : U.getResponseHeader(N);
        }, ee === void 0) {
          ee = [];
          for (var $ in U)
            $ in H || ee.push($);
        }
        for (var P = function(N) {
          typeof U[N] == "function" ? Object.defineProperty(H, N, {
            configurable: !0,
            value: function() {
              var q = arguments;
              return F || y.push(function(M) {
                M[N].apply(M, q);
              }), U[N].apply(U, q);
            }
          }) : Object.defineProperty(H, N, {
            configurable: !0,
            get: function() {
              return b[N] !== void 0 ? b[N] : U[N];
            },
            set: function(q) {
              F || y.push(function(M) {
                M[N] = q;
              }), (0, o.logDebugMessage)("XHRInterceptor.set[".concat(N, "] = ").concat(q)), U[N] = q;
            }
          });
        }, E = 0, L = ee; E < L.length; E++) {
          var $ = L[E];
          P($);
        }
      }
      function le(H, U) {
        var F = this;
        if ((0, o.logDebugMessage)("XHRInterceptor.send: called"), (0, o.logDebugMessage)("XHRInterceptor.send: Value of doNotDoInterception: " + T), T) {
          (0, o.logDebugMessage)("XHRInterceptor.send: Returning without interception"), C(function() {
            return H.send(U);
          });
          return;
        }
        (0, o.logDebugMessage)("XHRInterceptor.send: Interception started"), d.ProcessState.getInstance().addState(
          d.PROCESS_STATE.CALLING_INTERCEPTION_REQUEST
        ), C(function() {
          return e(F, void 0, void 0, function() {
            var j, X;
            return r(this, function(oe) {
              switch (oe.label) {
                case 0:
                  return [4, (0, t.getLocalSessionState)(!0)];
                case 1:
                  return I = oe.sent(), I.status !== "EXISTS" ? [3, 3] : [
                    4,
                    t.AntiCsrfToken.getToken(I.lastAccessTokenUpdate)
                  ];
                case 2:
                  j = oe.sent(), j !== void 0 && ((0, o.logDebugMessage)(
                    "XHRInterceptor.send: Adding anti-csrf token to request"
                  ), H.setRequestHeader("anti-csrf", j)), oe.label = 3;
                case 3:
                  return t.default.config.autoAddCredentials && ((0, o.logDebugMessage)("XHRInterceptor.send: Adding credentials include"), m.withCredentials = !0), p.some(function(R) {
                    return R.name === "rid";
                  }) ? (0, o.logDebugMessage)(
                    "XHRInterceptor.send: rid header was already there in request"
                  ) : ((0, o.logDebugMessage)("XHRInterceptor.send: Adding rid header: anti-csrf"), H.setRequestHeader("rid", "anti-csrf")), X = t.default.config.tokenTransferMethod, p.some(function(R) {
                    return R.name === "st-auth-mode";
                  }) ? (0, o.logDebugMessage)(
                    "XHRInterceptor.send: st-auth-mode header was already there in request"
                  ) : ((0, o.logDebugMessage)(
                    "XHRInterceptor.send: Adding st-auth-mode header: " + X
                  ), H.setRequestHeader("st-auth-mode", X)), [4, s(H, p)];
                case 4:
                  return oe.sent(), (0, o.logDebugMessage)("XHRInterceptor.send: Making user's http call"), [2, H.send(U)];
              }
            });
          });
        });
      }
    }, XMLHttpRequest.__interceptedBySuperTokens = !0, XMLHttpRequest.__original = i;
  }
  nr.addInterceptorsToXMLHttpRequest = g;
  function c(a) {
    return e(this, void 0, void 0, function() {
      var i, h, m, y, p;
      return r(this, function(b) {
        switch (b.label) {
          case 0:
            if (i = a.headers.get("content-type"), h = "", m = "text", i !== null) return [3, 5];
            b.label = 1;
          case 1:
            return b.trys.push([1, 3, , 4]), [4, a.text()];
          case 2:
            return h = b.sent(), [3, 4];
          case 3:
            return b.sent(), h = "", [3, 4];
          case 4:
            return [3, 9];
          case 5:
            return i.includes("application/json") ? (m = "json", p = (y = JSON).stringify, [4, a.json()]) : [3, 7];
          case 6:
            return h = p.apply(y, [b.sent()]), [3, 9];
          case 7:
            return i.includes("text/") ? [4, a.text()] : [3, 9];
          case 8:
            h = b.sent(), b.label = 9;
          case 9:
            return [
              2,
              {
                status: a.status,
                responseText: h,
                statusText: a.statusText,
                responseType: m,
                headers: a.headers
              }
            ];
        }
      });
    });
  }
  function s(a, i) {
    return e(this, void 0, void 0, function() {
      var h, m;
      return r(this, function(y) {
        switch (y.label) {
          case 0:
            return (0, o.logDebugMessage)("setAuthorizationHeaderIfRequired: adding existing tokens as header"), [4, (0, t.getTokenForHeaderAuth)("access")];
          case 1:
            return h = y.sent(), [4, (0, t.getTokenForHeaderAuth)("refresh")];
          case 2:
            return m = y.sent(), h !== void 0 && m !== void 0 ? i.some(function(p) {
              var b = p.name;
              return b.toLowerCase() === "authorization";
            }) ? (0, o.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: Authorization header defined by the user, not adding"
            ) : h !== void 0 && ((0, o.logDebugMessage)(
              "setAuthorizationHeaderIfRequired: added authorization header"
            ), a.setRequestHeader("Authorization", "Bearer ".concat(h))) : (0, o.logDebugMessage)(
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
      var i, h, m, y, p;
      return r(this, function(b) {
        switch (b.label) {
          case 0:
            return (0, o.logDebugMessage)("saveTokensFromHeaders: Saving updated tokens from the response"), i = a.get("st-refresh-token"), i === null ? [3, 2] : ((0, o.logDebugMessage)("saveTokensFromHeaders: saving new refresh token"), [4, (0, t.setToken)("refresh", i)]);
          case 1:
            b.sent(), b.label = 2;
          case 2:
            return h = a.get("st-access-token"), h === null ? [3, 4] : ((0, o.logDebugMessage)("saveTokensFromHeaders: saving new access token"), [4, (0, t.setToken)("access", h)]);
          case 3:
            b.sent(), b.label = 4;
          case 4:
            return m = a.get("front-token"), m === null ? [3, 6] : ((0, o.logDebugMessage)("saveTokensFromHeaders: Setting sFrontToken: " + m), [4, t.FrontToken.setItem(m)]);
          case 5:
            b.sent(), (0, t.updateClockSkewUsingFrontToken)({ frontToken: m, responseHeaders: a }), b.label = 6;
          case 6:
            return y = a.get("anti-csrf"), y === null ? [3, 9] : [4, (0, t.getLocalSessionState)(!1)];
          case 7:
            return p = b.sent(), p.status !== "EXISTS" ? [3, 9] : ((0, o.logDebugMessage)("saveTokensFromHeaders: Setting anti-csrf token"), [4, t.AntiCsrfToken.setItem(p.lastAccessTokenUpdate, y)]);
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
  function l(a) {
    return new Headers(
      a.getAllResponseHeaders().split(`\r
`).map(function(i) {
        var h = i.indexOf(": ");
        return h === -1 ? ["", ""] : [i.slice(0, h), i.slice(h + 2)];
      }).filter(function(i) {
        return i[0].length !== 0;
      })
    );
  }
  return nr;
}
var ui;
function Ml() {
  if (ui) return He;
  ui = 1;
  var e = He && He.__assign || function() {
    return e = Object.assign || function(m) {
      for (var y, p = 1, b = arguments.length; p < b; p++) {
        y = arguments[p];
        for (var w in y) Object.prototype.hasOwnProperty.call(y, w) && (m[w] = y[w]);
      }
      return m;
    }, e.apply(this, arguments);
  }, r = He && He.__awaiter || function(m, y, p, b) {
    function w(v) {
      return v instanceof p ? v : new p(function(k) {
        k(v);
      });
    }
    return new (p || (p = Promise))(function(v, k) {
      function C(I) {
        try {
          T(b.next(I));
        } catch (x) {
          k(x);
        }
      }
      function S(I) {
        try {
          T(b.throw(I));
        } catch (x) {
          k(x);
        }
      }
      function T(I) {
        I.done ? v(I.value) : w(I.value).then(C, S);
      }
      T((b = b.apply(m, y || [])).next());
    });
  }, t = He && He.__generator || function(m, y) {
    var p = {
      label: 0,
      sent: function() {
        if (v[0] & 1) throw v[1];
        return v[1];
      },
      trys: [],
      ops: []
    }, b, w, v, k;
    return k = { next: C(0), throw: C(1), return: C(2) }, typeof Symbol == "function" && (k[Symbol.iterator] = function() {
      return this;
    }), k;
    function C(T) {
      return function(I) {
        return S([T, I]);
      };
    }
    function S(T) {
      if (b) throw new TypeError("Generator is already executing.");
      for (; p; )
        try {
          if (b = 1, w && (v = T[0] & 2 ? w.return : T[0] ? w.throw || ((v = w.return) && v.call(w), 0) : w.next) && !(v = v.call(w, T[1])).done)
            return v;
          switch (w = 0, v && (T = [T[0] & 2, v.value]), T[0]) {
            case 0:
            case 1:
              v = T;
              break;
            case 4:
              return p.label++, { value: T[1], done: !1 };
            case 5:
              p.label++, w = T[1], T = [0];
              continue;
            case 7:
              T = p.ops.pop(), p.trys.pop();
              continue;
            default:
              if (v = p.trys, !(v = v.length > 0 && v[v.length - 1]) && (T[0] === 6 || T[0] === 2)) {
                p = 0;
                continue;
              }
              if (T[0] === 3 && (!v || T[1] > v[0] && T[1] < v[3])) {
                p.label = T[1];
                break;
              }
              if (T[0] === 6 && p.label < v[1]) {
                p.label = v[1], v = T;
                break;
              }
              if (v && p.label < v[2]) {
                p.label = v[2], p.ops.push(T);
                break;
              }
              v[2] && p.ops.pop(), p.trys.pop();
              continue;
          }
          T = y.call(m, p);
        } catch (I) {
          T = [6, I], w = 0;
        } finally {
          b = v = 0;
        }
      if (T[0] & 5) throw T[1];
      return { value: T[0] ? T[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(He, "__esModule", { value: !0 });
  var o = Ot(), n = Nl(), d = Xo(), f = Et(), g = Ma(), c = Ll(), s = Wo(), u = Yr(), l = Yo(), a = 100, i = "CLAIM_REFRESH_LOCK";
  function h(m) {
    return {
      addXMLHttpRequestInterceptor: function(y) {
        (0, f.logDebugMessage)("addXMLHttpRequestInterceptorAndReturnModified: called"), (0, c.addInterceptorsToXMLHttpRequest)();
      },
      addFetchInterceptorsAndReturnModifiedFetch: function(y) {
        return (0, f.logDebugMessage)("addFetchInterceptorsAndReturnModifiedFetch: called"), function(p, b) {
          return r(this, void 0, void 0, function() {
            return t(this, function(w) {
              switch (w.label) {
                case 0:
                  return [
                    4,
                    o.default.doRequest(
                      function(v) {
                        return y.originalFetch(
                          typeof p == "object" && "clone" in p ? p.clone() : p,
                          e({}, v)
                        );
                      },
                      b,
                      p
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
        for (var p = y.axiosInstance.interceptors.request, b = 0; b < p.handlers.length; b++)
          if (p.handlers[b].fulfilled === n.interceptorFunctionRequestFulfilled) {
            (0, f.logDebugMessage)(
              "addAxiosInterceptors: not adding because already added on this instance"
            );
            return;
          }
        y.axiosInstance.interceptors.request.use(n.interceptorFunctionRequestFulfilled, function(w) {
          return r(this, void 0, void 0, function() {
            return t(this, function(v) {
              throw w;
            });
          });
        }), y.axiosInstance.interceptors.response.use(
          (0, n.responseInterceptor)(y.axiosInstance),
          (0, n.responseErrorInterceptor)(y.axiosInstance)
        );
      },
      getUserId: function(y) {
        return r(this, void 0, void 0, function() {
          var p;
          return t(this, function(b) {
            switch (b.label) {
              case 0:
                return (0, f.logDebugMessage)("getUserId: called"), [4, o.FrontToken.getTokenInfo()];
              case 1:
                if (p = b.sent(), p === void 0)
                  throw new Error("No session exists");
                return (0, f.logDebugMessage)("getUserId: returning: " + p.uid), [2, p.uid];
            }
          });
        });
      },
      getAccessTokenPayloadSecurely: function(y) {
        return r(this, void 0, void 0, function() {
          var p, b;
          return t(this, function(w) {
            switch (w.label) {
              case 0:
                return (0, f.logDebugMessage)("getAccessTokenPayloadSecurely: called"), [4, o.FrontToken.getTokenInfo()];
              case 1:
                if (p = w.sent(), p === void 0)
                  throw new Error("No session exists");
                return p.ate < u.default.getReferenceOrThrow().dateProvider.now() ? ((0, f.logDebugMessage)("getAccessTokenPayloadSecurely: access token expired. Refreshing session"), [4, o.default.attemptRefreshingSession()]) : [3, 5];
              case 2:
                return b = w.sent(), b ? [
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
                return (0, f.logDebugMessage)("getAccessTokenPayloadSecurely: returning: " + JSON.stringify(p.up)), [2, p.up];
            }
          });
        });
      },
      doesSessionExist: function(y) {
        return r(this, void 0, void 0, function() {
          var p, b, w;
          return t(this, function(v) {
            switch (v.label) {
              case 0:
                return (0, f.logDebugMessage)("doesSessionExist: called"), [4, o.FrontToken.getTokenInfo()];
              case 1:
                return p = v.sent(), p === void 0 ? ((0, f.logDebugMessage)("doesSessionExist: access token does not exist locally"), [2, !1]) : p.ate < u.default.getReferenceOrThrow().dateProvider.now() ? ((0, f.logDebugMessage)("doesSessionExist: access token expired. Refreshing session"), [4, (0, o.getLocalSessionState)(!1)]) : [3, 4];
              case 2:
                return b = v.sent(), [4, (0, o.onUnauthorisedResponse)(b)];
              case 3:
                return w = v.sent(), [2, w.result === "RETRY"];
              case 4:
                return [2, !0];
            }
          });
        });
      },
      signOut: function(y) {
        return r(this, void 0, void 0, function() {
          var p, b, w, v;
          return t(this, function(k) {
            switch (k.label) {
              case 0:
                return (0, f.logDebugMessage)("signOut: called"), [4, this.doesSessionExist(y)];
              case 1:
                return k.sent() ? ((0, f.logDebugMessage)("signOut: Calling refresh pre API hook"), [
                  4,
                  m.preAPIHook({
                    action: "SIGN_OUT",
                    requestInit: {
                      method: "post",
                      headers: {
                        "fdi-version": d.supported_fdi.join(","),
                        rid: o.default.rid
                      }
                    },
                    url: o.default.signOutUrl,
                    userContext: y.userContext
                  })
                ]) : ((0, f.logDebugMessage)("signOut: exiting early because session does not exist"), (0, f.logDebugMessage)("signOut: firing SIGN_OUT event"), m.onHandleEvent({
                  action: "SIGN_OUT",
                  userContext: y.userContext
                }), [
                  2
                  /*return*/
                ]);
              case 2:
                return p = k.sent(), (0, f.logDebugMessage)("signOut: Calling API"), [4, fetch(p.url, p.requestInit)];
              case 3:
                if (b = k.sent(), (0, f.logDebugMessage)("signOut: API ended"), (0, f.logDebugMessage)("signOut: API responded with status code: " + b.status), b.status === m.sessionExpiredStatusCode)
                  return [
                    2
                    /*return*/
                  ];
                if (b.status >= 300)
                  throw b;
                return [
                  4,
                  m.postAPIHook({
                    action: "SIGN_OUT",
                    requestInit: p.requestInit,
                    url: p.url,
                    fetchResponse: b.clone(),
                    userContext: y.userContext
                  })
                ];
              case 4:
                return k.sent(), [4, b.clone().json()];
              case 5:
                if (w = k.sent(), w.status === "GENERAL_ERROR")
                  throw (0, f.logDebugMessage)("doRequest: Throwing general error"), v = w.message === void 0 ? "No Error Message Provided" : w.message, new g.STGeneralError(v);
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      },
      getInvalidClaimsFromResponse: function(y) {
        return r(this, void 0, void 0, function() {
          var p;
          return t(this, function(b) {
            switch (b.label) {
              case 0:
                return "body" in y.response ? [4, y.response.clone().json()] : [3, 2];
              case 1:
                return p = b.sent(), [3, 3];
              case 2:
                typeof y.response.data == "string" ? p = JSON.parse(y.response.data) : p = y.response.data, b.label = 3;
              case 3:
                return [2, p.claimValidationErrors];
            }
          });
        });
      },
      getGlobalClaimValidators: function(y) {
        return y.claimValidatorsAddedByOtherRecipes;
      },
      validateClaims: function(y) {
        return r(this, void 0, void 0, function() {
          var p, b, w, v, k, C, _, S, T, I, x, _, B;
          return t(this, function(A) {
            switch (A.label) {
              case 0:
                b = 0, A.label = 1;
              case 1:
                return ++b < a ? [4, l.default.getReferenceOrThrow().lockFactory()] : [3, 20];
              case 2:
                return w = A.sent(), (0, f.logDebugMessage)("validateClaims: trying to acquire claim refresh lock"), [4, w.acquireLock(i)];
              case 3:
                if (v = A.sent(), !v) return [3, 18];
                A.label = 4;
              case 4:
                return A.trys.push([4, , 15, 17]), [
                  4,
                  this.getAccessTokenPayloadSecurely({
                    userContext: y.userContext
                  })
                ];
              case 5:
                p = A.sent(), (0, f.logDebugMessage)("validateClaims: claim refresh lock acquired"), k = 0, C = y.claimValidators, A.label = 6;
              case 6:
                return k < C.length ? (_ = C[k], [4, _.shouldRefresh(p, y.userContext)]) : [3, 14];
              case 7:
                if (!A.sent()) return [3, 13];
                A.label = 8;
              case 8:
                return A.trys.push([8, 10, , 11]), [4, _.refresh(y.userContext)];
              case 9:
                return A.sent(), [3, 11];
              case 10:
                return S = A.sent(), console.error(
                  "Encountered an error while refreshing validator ".concat(_.id),
                  S
                ), [3, 11];
              case 11:
                return [
                  4,
                  this.getAccessTokenPayloadSecurely({
                    userContext: y.userContext
                  })
                ];
              case 12:
                p = A.sent(), A.label = 13;
              case 13:
                return k++, [3, 6];
              case 14:
                return [3, 17];
              case 15:
                return (0, f.logDebugMessage)("validateClaims: releasing claim refresh lock"), [4, w.releaseLock(i)];
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
                p = A.sent(), A.label = 22;
              case 22:
                T = [], I = 0, x = y.claimValidators, A.label = 23;
              case 23:
                return I < x.length ? (_ = x[I], [4, _.validate(p, y.userContext)]) : [3, 26];
              case 24:
                B = A.sent(), B.isValid || T.push({
                  id: _.id,
                  reason: B.reason
                }), A.label = 25;
              case 25:
                return I++, [3, 23];
              case 26:
                return [2, T];
            }
          });
        });
      },
      shouldDoInterceptionBasedOnUrl: function(y, p, b) {
        if ((0, f.logDebugMessage)(
          "shouldDoInterceptionBasedOnUrl: toCheckUrl: " + y + " apiDomain: " + p + " sessionTokenBackendDomain: " + b
        ), y.includes("superTokensDoNotDoInterception"))
          return !1;
        y = (0, s.normaliseURLDomainOrThrowError)(y);
        var w = new URL(y), v = w.hostname, k = !1;
        if (p !== "") {
          p = (0, s.normaliseURLDomainOrThrowError)(p);
          var C = new URL(p);
          k = v === C.hostname;
        }
        if (b === void 0 || k)
          return k;
        var S = (0, s.normaliseSessionScopeOrThrowError)(b);
        return (0, s.matchesDomainOrSubdomain)(v, S);
      },
      calculateClockSkewInMillis: function(y) {
        var p = y.accessTokenPayload;
        (0, f.logDebugMessage)("calculateClockSkewInMillis: called");
        var b = p == null ? void 0 : p.iat;
        if (b === void 0 || typeof b != "number")
          return (0, f.logDebugMessage)(
            "calculateClockSkewInMillis: payload iat is undefined or not a number. This may happen due to an unsupported backend sdk. Returning 0"
          ), 0;
        var w = b * 1e3, v = w - Date.now();
        return (0, f.logDebugMessage)("calculateClockSkewInMillis: returning " + v), v;
      }
    };
  }
  return He.default = h, He;
}
var Vr = {}, xr = {}, li;
function Ul() {
  if (li) return xr;
  li = 1;
  var e = xr && xr.__assign || function() {
    return e = Object.assign || function(t) {
      for (var o, n = 1, d = arguments.length; n < d; n++) {
        o = arguments[n];
        for (var f in o) Object.prototype.hasOwnProperty.call(o, f) && (t[f] = o[f]);
      }
      return t;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(xr, "__esModule", { value: !0 }), xr.getProxyObject = void 0;
  function r(t) {
    for (var o = e(e({}, t), { _call: function(s, u) {
      throw new Error("This function should only be called through the recipe object");
    } }), n = Object.keys(o), d = function(s) {
      s !== "_call" && (o[s] = function() {
        for (var u = [], l = 0; l < arguments.length; l++)
          u[l] = arguments[l];
        return this._call(s, u);
      });
    }, f = 0, g = n; f < g.length; f++) {
      var c = g[f];
      d(c);
    }
    return o;
  }
  return xr.getProxyObject = r, xr;
}
var ci;
function to() {
  if (ci) return Vr;
  ci = 1, Object.defineProperty(Vr, "__esModule", { value: !0 }), Vr.OverrideableBuilder = void 0;
  var e = Ul(), r = (
    /** @class */
    function() {
      function t(o) {
        this.layers = [o], this.proxies = [];
      }
      return t.prototype.override = function(o) {
        for (var n = (0, e.getProxyObject)(this.layers[0]), d = o(n, this), f = 0, g = Object.keys(this.layers[0]); f < g.length; f++) {
          var c = g[f];
          d[c] === n[c] || c === "_call" ? delete d[c] : d[c] === void 0 && (d[c] = null);
        }
        return this.layers.push(d), this.proxies.push(n), this;
      }, t.prototype.build = function() {
        var o = this;
        if (this.result)
          return this.result;
        this.result = {};
        for (var n = 0, d = this.layers; n < d.length; n++)
          for (var f = d[n], g = 0, c = Object.keys(f); g < c.length; g++) {
            var s = c[g], u = f[s];
            u !== void 0 && (u === null ? this.result[s] = void 0 : typeof u == "function" ? this.result[s] = u.bind(this.result) : this.result[s] = u);
          }
        for (var l = function(h) {
          var m = a.proxies[h];
          m._call = function(y, p) {
            for (var b = h; b >= 0; --b) {
              var w = o.layers[b][y];
              if (w != null)
                return w.bind(o.result).apply(void 0, p);
            }
          };
        }, a = this, i = 0; i < this.proxies.length; ++i)
          l(i);
        return this.result;
      }, t;
    }()
  );
  return Vr.OverrideableBuilder = r, Vr.default = r, Vr;
}
var tt = {}, di;
function Ua() {
  if (di) return tt;
  di = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.PrimitiveClaim = void 0;
  var e = Yr(), r = (
    /** @class */
    function() {
      function t(o) {
        var n = this;
        this.validators = {
          hasValue: function(d, f, g) {
            f === void 0 && (f = n.defaultMaxAgeInSeconds);
            var c = e.default.getReferenceOrThrow().dateProvider;
            return {
              id: g !== void 0 ? g : n.id,
              refresh: function(s) {
                return n.refresh(s);
              },
              shouldRefresh: function(s, u) {
                if (f !== void 0 && f < c.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      c.getThresholdInSeconds()
                    )
                  );
                return n.getValueFromPayload(s, u) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                f !== void 0 && s[n.id].t < c.now() - f * 1e3;
              },
              validate: function(s, u) {
                var l = n.getValueFromPayload(s, u);
                if (l === void 0)
                  return {
                    isValid: !1,
                    reason: { message: "value does not exist", expectedValue: d, actualValue: l }
                  };
                var a = (c.now() - n.getLastFetchedTime(s, u)) / 1e3;
                return f !== void 0 && a > f ? {
                  isValid: !1,
                  reason: {
                    message: "expired",
                    ageInSeconds: a,
                    maxAgeInSeconds: f
                  }
                } : l !== d ? {
                  isValid: !1,
                  reason: { message: "wrong value", expectedValue: d, actualValue: l }
                } : { isValid: !0 };
              }
            };
          }
        }, this.id = o.id, this.refresh = o.refresh, this.defaultMaxAgeInSeconds = o.defaultMaxAgeInSeconds;
      }
      return t.prototype.getValueFromPayload = function(o, n) {
        return o[this.id] !== void 0 ? o[this.id].v : void 0;
      }, t.prototype.getLastFetchedTime = function(o, n) {
        return o[this.id] !== void 0 ? o[this.id].t : void 0;
      }, t;
    }()
  );
  return tt.PrimitiveClaim = r, tt;
}
var ir = {}, fi;
function Hl() {
  if (fi) return ir;
  fi = 1;
  var e = ir && ir.__awaiter || function(n, d, f, g) {
    function c(s) {
      return s instanceof f ? s : new f(function(u) {
        u(s);
      });
    }
    return new (f || (f = Promise))(function(s, u) {
      function l(h) {
        try {
          i(g.next(h));
        } catch (m) {
          u(m);
        }
      }
      function a(h) {
        try {
          i(g.throw(h));
        } catch (m) {
          u(m);
        }
      }
      function i(h) {
        h.done ? s(h.value) : c(h.value).then(l, a);
      }
      i((g = g.apply(n, d || [])).next());
    });
  }, r = ir && ir.__generator || function(n, d) {
    var f = {
      label: 0,
      sent: function() {
        if (s[0] & 1) throw s[1];
        return s[1];
      },
      trys: [],
      ops: []
    }, g, c, s, u;
    return u = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
      return this;
    }), u;
    function l(i) {
      return function(h) {
        return a([i, h]);
      };
    }
    function a(i) {
      if (g) throw new TypeError("Generator is already executing.");
      for (; f; )
        try {
          if (g = 1, c && (s = i[0] & 2 ? c.return : i[0] ? c.throw || ((s = c.return) && s.call(c), 0) : c.next) && !(s = s.call(c, i[1])).done)
            return s;
          switch (c = 0, s && (i = [i[0] & 2, s.value]), i[0]) {
            case 0:
            case 1:
              s = i;
              break;
            case 4:
              return f.label++, { value: i[1], done: !1 };
            case 5:
              f.label++, c = i[1], i = [0];
              continue;
            case 7:
              i = f.ops.pop(), f.trys.pop();
              continue;
            default:
              if (s = f.trys, !(s = s.length > 0 && s[s.length - 1]) && (i[0] === 6 || i[0] === 2)) {
                f = 0;
                continue;
              }
              if (i[0] === 3 && (!s || i[1] > s[0] && i[1] < s[3])) {
                f.label = i[1];
                break;
              }
              if (i[0] === 6 && f.label < s[1]) {
                f.label = s[1], s = i;
                break;
              }
              if (s && f.label < s[2]) {
                f.label = s[2], f.ops.push(i);
                break;
              }
              s[2] && f.ops.pop(), f.trys.pop();
              continue;
          }
          i = d.call(n, f);
        } catch (h) {
          i = [6, h], c = 0;
        } finally {
          g = s = 0;
        }
      if (i[0] & 5) throw i[1];
      return { value: i[0] ? i[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(ir, "__esModule", { value: !0 }), ir.PrimitiveArrayClaim = void 0;
  var t = Yr(), o = (
    /** @class */
    function() {
      function n(d) {
        var f = this;
        this.validators = {
          includes: function(g, c, s) {
            c === void 0 && (c = f.defaultMaxAgeInSeconds);
            var u = t.default.getReferenceOrThrow().dateProvider;
            return {
              id: s !== void 0 ? s : f.id,
              refresh: function(l) {
                return f.refresh(l);
              },
              shouldRefresh: function(l, a) {
                if (c !== void 0 && c < u.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      u.getThresholdInSeconds()
                    )
                  );
                return f.getValueFromPayload(l, a) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                c !== void 0 && l[f.id].t < u.now() - c * 1e3;
              },
              validate: function(l, a) {
                return e(f, void 0, void 0, function() {
                  var i, h;
                  return r(this, function(m) {
                    return i = this.getValueFromPayload(l, a), i === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToInclude: g,
                          actualValue: i
                        }
                      }
                    ] : (h = (u.now() - this.getLastFetchedTime(l, a)) / 1e3, c !== void 0 && h > c ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: h,
                          maxAgeInSeconds: c
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
          excludes: function(g, c, s) {
            c === void 0 && (c = f.defaultMaxAgeInSeconds);
            var u = t.default.getReferenceOrThrow().dateProvider;
            return {
              id: s !== void 0 ? s : f.id,
              refresh: function(l) {
                return f.refresh(l);
              },
              shouldRefresh: function(l, a) {
                if (c !== void 0 && c < u.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      u.getThresholdInSeconds()
                    )
                  );
                return f.getValueFromPayload(l, a) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                c !== void 0 && l[f.id].t < u.now() - c * 1e3;
              },
              validate: function(l, a) {
                return e(f, void 0, void 0, function() {
                  var i, h;
                  return r(this, function(m) {
                    return i = this.getValueFromPayload(l, a), i === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToNotInclude: g,
                          actualValue: i
                        }
                      }
                    ] : (h = (u.now() - this.getLastFetchedTime(l, a)) / 1e3, c !== void 0 && h > c ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: h,
                          maxAgeInSeconds: c
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
          includesAll: function(g, c, s) {
            c === void 0 && (c = f.defaultMaxAgeInSeconds);
            var u = t.default.getReferenceOrThrow().dateProvider;
            return {
              id: s !== void 0 ? s : f.id,
              refresh: function(l) {
                return f.refresh(l);
              },
              shouldRefresh: function(l, a) {
                if (c !== void 0 && c < u.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      u.getThresholdInSeconds()
                    )
                  );
                return f.getValueFromPayload(l, a) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                c !== void 0 && l[f.id].t < u.now() - c * 1e3;
              },
              validate: function(l, a) {
                return e(f, void 0, void 0, function() {
                  var i, h, m, y;
                  return r(this, function(p) {
                    return i = this.getValueFromPayload(l, a), i === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToInclude: g,
                          actualValue: i
                        }
                      }
                    ] : (h = (u.now() - this.getLastFetchedTime(l, a)) / 1e3, c !== void 0 && h > c ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: h,
                          maxAgeInSeconds: c
                        }
                      }
                    ] : (m = new Set(i), y = g.every(function(b) {
                      return m.has(b);
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
          includesAny: function(g, c, s) {
            c === void 0 && (c = f.defaultMaxAgeInSeconds);
            var u = t.default.getReferenceOrThrow().dateProvider;
            return {
              id: s !== void 0 ? s : f.id,
              refresh: function(l) {
                return f.refresh(l);
              },
              shouldRefresh: function(l, a) {
                if (c !== void 0 && c < u.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      u.getThresholdInSeconds()
                    )
                  );
                return f.getValueFromPayload(l, a) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                c !== void 0 && l[f.id].t < u.now() - c * 1e3;
              },
              validate: function(l, a) {
                return e(f, void 0, void 0, function() {
                  var i, h, m, y;
                  return r(this, function(p) {
                    return i = this.getValueFromPayload(l, a), i === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToInclude: g,
                          actualValue: i
                        }
                      }
                    ] : (h = (u.now() - this.getLastFetchedTime(l, a)) / 1e3, c !== void 0 && h > c ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: h,
                          maxAgeInSeconds: c
                        }
                      }
                    ] : (m = new Set(i), y = g.some(function(b) {
                      return m.has(b);
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
          excludesAll: function(g, c, s) {
            c === void 0 && (c = f.defaultMaxAgeInSeconds);
            var u = t.default.getReferenceOrThrow().dateProvider;
            return {
              id: s !== void 0 ? s : f.id,
              refresh: function(l) {
                return f.refresh(l);
              },
              shouldRefresh: function(l, a) {
                if (c !== void 0 && c < u.getThresholdInSeconds())
                  throw new Error(
                    "maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(
                      u.getThresholdInSeconds()
                    )
                  );
                return f.getValueFromPayload(l, a) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                c !== void 0 && l[f.id].t < u.now() - c * 1e3;
              },
              validate: function(l, a) {
                return e(f, void 0, void 0, function() {
                  var i, h, m, y;
                  return r(this, function(p) {
                    return i = this.getValueFromPayload(l, a), i === void 0 ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "value does not exist",
                          expectedToNotInclude: g,
                          actualValue: i
                        }
                      }
                    ] : (h = (u.now() - this.getLastFetchedTime(l, a)) / 1e3, c !== void 0 && h > c ? [
                      2,
                      {
                        isValid: !1,
                        reason: {
                          message: "expired",
                          ageInSeconds: h,
                          maxAgeInSeconds: c
                        }
                      }
                    ] : (m = new Set(i), y = g.every(function(b) {
                      return !m.has(b);
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
        }, this.id = d.id, this.refresh = d.refresh, this.defaultMaxAgeInSeconds = d.defaultMaxAgeInSeconds;
      }
      return n.prototype.getValueFromPayload = function(d, f) {
        return d[this.id] !== void 0 ? d[this.id].v : void 0;
      }, n.prototype.getLastFetchedTime = function(d, f) {
        return d[this.id] !== void 0 ? d[this.id].t : void 0;
      }, n;
    }()
  );
  return ir.PrimitiveArrayClaim = o, ir;
}
var ar = {}, gi;
function Fl() {
  if (gi) return ar;
  gi = 1;
  var e = ar && ar.__extends || /* @__PURE__ */ function() {
    var n = function(d, f) {
      return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(g, c) {
        g.__proto__ = c;
      } || function(g, c) {
        for (var s in c) Object.prototype.hasOwnProperty.call(c, s) && (g[s] = c[s]);
      }, n(d, f);
    };
    return function(d, f) {
      if (typeof f != "function" && f !== null)
        throw new TypeError("Class extends value " + String(f) + " is not a constructor or null");
      n(d, f);
      function g() {
        this.constructor = d;
      }
      d.prototype = f === null ? Object.create(f) : (g.prototype = f.prototype, new g());
    };
  }(), r = ar && ar.__assign || function() {
    return r = Object.assign || function(n) {
      for (var d, f = 1, g = arguments.length; f < g; f++) {
        d = arguments[f];
        for (var c in d) Object.prototype.hasOwnProperty.call(d, c) && (n[c] = d[c]);
      }
      return n;
    }, r.apply(this, arguments);
  };
  Object.defineProperty(ar, "__esModule", { value: !0 }), ar.BooleanClaim = void 0;
  var t = Ua(), o = (
    /** @class */
    function(n) {
      e(d, n);
      function d(f) {
        var g = n.call(this, f) || this;
        return g.validators = r(r({}, g.validators), {
          isTrue: function(c) {
            return g.validators.hasValue(!0, c);
          },
          isFalse: function(c) {
            return g.validators.hasValue(!1, c);
          }
        }), g;
      }
      return d;
    }(t.PrimitiveClaim)
  );
  return ar.BooleanClaim = o, ar;
}
var hi;
function jl() {
  return hi || (hi = 1, function(e) {
    var r = Rr && Rr.__awaiter || function(p, b, w, v) {
      function k(C) {
        return C instanceof w ? C : new w(function(S) {
          S(C);
        });
      }
      return new (w || (w = Promise))(function(C, S) {
        function T(_) {
          try {
            x(v.next(_));
          } catch (B) {
            S(B);
          }
        }
        function I(_) {
          try {
            x(v.throw(_));
          } catch (B) {
            S(B);
          }
        }
        function x(_) {
          _.done ? C(_.value) : k(_.value).then(T, I);
        }
        x((v = v.apply(p, b || [])).next());
      });
    }, t = Rr && Rr.__generator || function(p, b) {
      var w = {
        label: 0,
        sent: function() {
          if (C[0] & 1) throw C[1];
          return C[1];
        },
        trys: [],
        ops: []
      }, v, k, C, S;
      return S = { next: T(0), throw: T(1), return: T(2) }, typeof Symbol == "function" && (S[Symbol.iterator] = function() {
        return this;
      }), S;
      function T(x) {
        return function(_) {
          return I([x, _]);
        };
      }
      function I(x) {
        if (v) throw new TypeError("Generator is already executing.");
        for (; w; )
          try {
            if (v = 1, k && (C = x[0] & 2 ? k.return : x[0] ? k.throw || ((C = k.return) && C.call(k), 0) : k.next) && !(C = C.call(k, x[1])).done)
              return C;
            switch (k = 0, C && (x = [x[0] & 2, C.value]), x[0]) {
              case 0:
              case 1:
                C = x;
                break;
              case 4:
                return w.label++, { value: x[1], done: !1 };
              case 5:
                w.label++, k = x[1], x = [0];
                continue;
              case 7:
                x = w.ops.pop(), w.trys.pop();
                continue;
              default:
                if (C = w.trys, !(C = C.length > 0 && C[C.length - 1]) && (x[0] === 6 || x[0] === 2)) {
                  w = 0;
                  continue;
                }
                if (x[0] === 3 && (!C || x[1] > C[0] && x[1] < C[3])) {
                  w.label = x[1];
                  break;
                }
                if (x[0] === 6 && w.label < C[1]) {
                  w.label = C[1], C = x;
                  break;
                }
                if (C && w.label < C[2]) {
                  w.label = C[2], w.ops.push(x);
                  break;
                }
                C[2] && w.ops.pop(), w.trys.pop();
                continue;
            }
            x = b.call(p, w);
          } catch (_) {
            x = [6, _], k = 0;
          } finally {
            v = C = 0;
          }
        if (x[0] & 5) throw x[1];
        return { value: x[0] ? x[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.BooleanClaim = e.PrimitiveArrayClaim = e.PrimitiveClaim = e.getInvalidClaimsFromResponse = e.getClaimValue = e.validateClaims = e.signOut = e.addAxiosInterceptors = e.doesSessionExist = e.attemptRefreshingSession = e.getAccessToken = e.getAccessTokenPayloadSecurely = e.getUserId = e.init = void 0;
    var o = Ot(), n = Ml(), d = to(), f = Wo(), g = Ko(), c = wr(), s = Yo(), u = Na(), l = Et(), a = Yr(), i = (
      /** @class */
      function() {
        function p() {
        }
        p.init = function(w) {
          g.default.init(w.cookieHandler), c.default.init(w.windowHandler), a.default.init(w.dateProvider), s.default.init(
            w.lockFactory,
            c.default.getReferenceOrThrow().windowHandler.localStorage
          );
          var v = (0, f.validateAndNormaliseInputOrThrowError)(w);
          w.enableDebugLogs !== void 0 && w.enableDebugLogs && (0, l.enableLogging)();
          var k = new d.default(
            (0, n.default)({
              onHandleEvent: v.onHandleEvent,
              preAPIHook: v.preAPIHook,
              postAPIHook: v.postAPIHook,
              sessionExpiredStatusCode: v.sessionExpiredStatusCode
            })
          ).override(v.override.functions).build();
          o.default.init(v, k), p.axiosInterceptorQueue.forEach(function(C) {
            C();
          }), p.axiosInterceptorQueue = [];
        }, p.getUserId = function(w) {
          return o.default.recipeImpl.getUserId({
            userContext: (0, f.getNormalisedUserContext)(w === void 0 ? void 0 : w.userContext)
          });
        }, p.getAccessTokenPayloadSecurely = function(w) {
          return r(this, void 0, void 0, function() {
            return t(this, function(v) {
              return [
                2,
                o.default.recipeImpl.getAccessTokenPayloadSecurely({
                  userContext: (0, f.getNormalisedUserContext)(
                    w === void 0 ? void 0 : w.userContext
                  )
                })
              ];
            });
          });
        };
        var b;
        return b = p, p.axiosInterceptorQueue = [], p.attemptRefreshingSession = function() {
          return r(void 0, void 0, void 0, function() {
            return t(b, function(w) {
              return [2, o.default.attemptRefreshingSession()];
            });
          });
        }, p.doesSessionExist = function(w) {
          return o.default.recipeImpl.doesSessionExist({
            userContext: (0, f.getNormalisedUserContext)(w === void 0 ? void 0 : w.userContext)
          });
        }, p.addAxiosInterceptors = function(w, v) {
          o.default.initCalled ? o.default.recipeImpl.addAxiosInterceptors({
            axiosInstance: w,
            userContext: (0, f.getNormalisedUserContext)(v)
          }) : p.axiosInterceptorQueue.push(function() {
            o.default.recipeImpl.addAxiosInterceptors({
              axiosInstance: w,
              userContext: (0, f.getNormalisedUserContext)(v)
            });
          });
        }, p.signOut = function(w) {
          return o.default.recipeImpl.signOut({
            userContext: (0, f.getNormalisedUserContext)(w === void 0 ? void 0 : w.userContext)
          });
        }, p.getInvalidClaimsFromResponse = function(w) {
          return r(this, void 0, void 0, function() {
            return t(this, function(v) {
              return [
                2,
                o.default.recipeImpl.getInvalidClaimsFromResponse({
                  response: w.response,
                  userContext: (0, f.getNormalisedUserContext)(w.userContext)
                })
              ];
            });
          });
        }, p.getClaimValue = function(w) {
          return r(this, void 0, void 0, function() {
            var v, k;
            return t(this, function(C) {
              switch (C.label) {
                case 0:
                  return v = (0, f.getNormalisedUserContext)(
                    w === void 0 ? void 0 : w.userContext
                  ), [
                    4,
                    p.getAccessTokenPayloadSecurely({ userContext: v })
                  ];
                case 1:
                  return k = C.sent(), [2, w.claim.getValueFromPayload(k, v)];
              }
            });
          });
        }, p.validateClaims = function(w, v) {
          var k = (0, f.getNormalisedUserContext)(v), C = u.SessionClaimValidatorStore.getClaimValidatorsAddedByOtherRecipes(), S = o.default.recipeImpl.getGlobalClaimValidators({
            claimValidatorsAddedByOtherRecipes: C,
            userContext: k
          }), T = w !== void 0 ? w(S, k) : S;
          return T.length === 0 ? [] : o.default.recipeImpl.validateClaims({
            claimValidators: T,
            userContext: (0, f.getNormalisedUserContext)(v)
          });
        }, p.getAccessToken = function(w) {
          return r(void 0, void 0, void 0, function() {
            return t(b, function(v) {
              switch (v.label) {
                case 0:
                  return [
                    4,
                    o.default.recipeImpl.doesSessionExist({
                      userContext: (0, f.getNormalisedUserContext)(
                        w === void 0 ? void 0 : w.userContext
                      )
                    })
                  ];
                case 1:
                  return v.sent() ? [2, (0, o.getTokenForHeaderAuth)("access")] : [2, void 0];
              }
            });
          });
        }, p;
      }()
    );
    e.default = i, e.init = i.init, e.getUserId = i.getUserId, e.getAccessTokenPayloadSecurely = i.getAccessTokenPayloadSecurely, e.getAccessToken = i.getAccessToken, e.attemptRefreshingSession = i.attemptRefreshingSession, e.doesSessionExist = i.doesSessionExist, e.addAxiosInterceptors = i.addAxiosInterceptors, e.signOut = i.signOut, e.validateClaims = i.validateClaims, e.getClaimValue = i.getClaimValue, e.getInvalidClaimsFromResponse = i.getInvalidClaimsFromResponse;
    var h = Ua();
    Object.defineProperty(e, "PrimitiveClaim", {
      enumerable: !0,
      get: function() {
        return h.PrimitiveClaim;
      }
    });
    var m = Hl();
    Object.defineProperty(e, "PrimitiveArrayClaim", {
      enumerable: !0,
      get: function() {
        return m.PrimitiveArrayClaim;
      }
    });
    var y = Fl();
    Object.defineProperty(e, "BooleanClaim", {
      enumerable: !0,
      get: function() {
        return y.BooleanClaim;
      }
    });
  }(Rr)), Rr;
}
var pi;
function Ha() {
  return pi || (pi = 1, function(e) {
    function r(t) {
      for (var o in t) e.hasOwnProperty(o) || (e[o] = t[o]);
    }
    e.__esModule = !0, r(jl());
  }(vo)), vo;
}
var ot = {}, mi;
function Vl() {
  return mi || (mi = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.EMAILVERIFICATION_CLAIM_ID = void 0, ot.EMAILVERIFICATION_CLAIM_ID = "st-ev"), ot;
}
var vi;
function Fa() {
  if (vi) return ke;
  vi = 1;
  var e = ke && ke.__extends || /* @__PURE__ */ function() {
    var l = function(a, i) {
      return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, m) {
        h.__proto__ = m;
      } || function(h, m) {
        for (var y in m) Object.prototype.hasOwnProperty.call(m, y) && (h[y] = m[y]);
      }, l(a, i);
    };
    return function(a, i) {
      if (typeof i != "function" && i !== null)
        throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
      l(a, i);
      function h() {
        this.constructor = a;
      }
      a.prototype = i === null ? Object.create(i) : (h.prototype = i.prototype, new h());
    };
  }(), r = ke && ke.__assign || function() {
    return r = Object.assign || function(l) {
      for (var a, i = 1, h = arguments.length; i < h; i++) {
        a = arguments[i];
        for (var m in a) Object.prototype.hasOwnProperty.call(a, m) && (l[m] = a[m]);
      }
      return l;
    }, r.apply(this, arguments);
  }, t = ke && ke.__awaiter || function(l, a, i, h) {
    function m(y) {
      return y instanceof i ? y : new i(function(p) {
        p(y);
      });
    }
    return new (i || (i = Promise))(function(y, p) {
      function b(k) {
        try {
          v(h.next(k));
        } catch (C) {
          p(C);
        }
      }
      function w(k) {
        try {
          v(h.throw(k));
        } catch (C) {
          p(C);
        }
      }
      function v(k) {
        k.done ? y(k.value) : m(k.value).then(b, w);
      }
      v((h = h.apply(l, a || [])).next());
    });
  }, o = ke && ke.__generator || function(l, a) {
    var i = {
      label: 0,
      sent: function() {
        if (y[0] & 1) throw y[1];
        return y[1];
      },
      trys: [],
      ops: []
    }, h, m, y, p;
    return p = { next: b(0), throw: b(1), return: b(2) }, typeof Symbol == "function" && (p[Symbol.iterator] = function() {
      return this;
    }), p;
    function b(v) {
      return function(k) {
        return w([v, k]);
      };
    }
    function w(v) {
      if (h) throw new TypeError("Generator is already executing.");
      for (; i; )
        try {
          if (h = 1, m && (y = v[0] & 2 ? m.return : v[0] ? m.throw || ((y = m.return) && y.call(m), 0) : m.next) && !(y = y.call(m, v[1])).done)
            return y;
          switch (m = 0, y && (v = [v[0] & 2, y.value]), v[0]) {
            case 0:
            case 1:
              y = v;
              break;
            case 4:
              return i.label++, { value: v[1], done: !1 };
            case 5:
              i.label++, m = v[1], v = [0];
              continue;
            case 7:
              v = i.ops.pop(), i.trys.pop();
              continue;
            default:
              if (y = i.trys, !(y = y.length > 0 && y[y.length - 1]) && (v[0] === 6 || v[0] === 2)) {
                i = 0;
                continue;
              }
              if (v[0] === 3 && (!y || v[1] > y[0] && v[1] < y[3])) {
                i.label = v[1];
                break;
              }
              if (v[0] === 6 && i.label < y[1]) {
                i.label = y[1], y = v;
                break;
              }
              if (y && i.label < y[2]) {
                i.label = y[2], i.ops.push(v);
                break;
              }
              y[2] && i.ops.pop(), i.trys.pop();
              continue;
          }
          v = a.call(l, i);
        } catch (k) {
          v = [6, k], m = 0;
        } finally {
          h = y = 0;
        }
      if (v[0] & 5) throw v[1];
      return { value: v[0] ? v[1] : void 0, done: !0 };
    }
  }, n = ke && ke.__spreadArray || function(l, a, i) {
    if (i || arguments.length === 2)
      for (var h = 0, m = a.length, y; h < m; h++)
        (y || !(h in a)) && (y || (y = Array.prototype.slice.call(a, 0, h)), y[h] = a[h]);
    return l.concat(y || Array.prototype.slice.call(a));
  };
  Object.defineProperty(ke, "__esModule", { value: !0 }), ke.Recipe = void 0;
  var d = La(), f = Ha(), g = Me(), c = Vl(), s = [c.EMAILVERIFICATION_CLAIM_ID], u = (
    /** @class */
    function(l) {
      e(a, l);
      function a(i) {
        var h = l.call(this, i) || this;
        return h.getUserId = function(m) {
          return f.default.getUserId({
            userContext: m.userContext
          });
        }, h.getAccessToken = function(m) {
          return t(h, void 0, void 0, function() {
            return o(this, function(y) {
              return [
                2,
                f.default.getAccessToken({
                  userContext: m.userContext
                })
              ];
            });
          });
        }, h.getAccessTokenPayloadSecurely = function(m) {
          return t(h, void 0, void 0, function() {
            return o(this, function(y) {
              return [
                2,
                f.default.getAccessTokenPayloadSecurely({
                  userContext: m.userContext
                })
              ];
            });
          });
        }, h.doesSessionExist = function(m) {
          return f.default.doesSessionExist({
            userContext: m.userContext
          });
        }, h.signOut = function(m) {
          return f.default.signOut({
            userContext: m.userContext
          });
        }, h.attemptRefreshingSession = function() {
          return t(h, void 0, void 0, function() {
            return o(this, function(m) {
              return [2, f.default.attemptRefreshingSession()];
            });
          });
        }, h.validateClaims = function(m) {
          return f.default.validateClaims(m.overrideGlobalClaimValidators, m.userContext);
        }, f.default.init(
          r(r({}, i), {
            override: {
              functions: function(m, y) {
                var p;
                return y.override(function(b) {
                  return r(r({}, b), {
                    getGlobalClaimValidators: function(w) {
                      var v = b.getGlobalClaimValidators(w);
                      return n(
                        n(
                          [],
                          v.filter(function(k) {
                            return s.includes(k.id);
                          }),
                          !0
                        ),
                        v.filter(function(k) {
                          return !s.includes(k.id);
                        }),
                        !0
                      );
                    }
                  });
                }), !((p = i.override) === null || p === void 0) && p.functions && y.override(i.override.functions), m;
              }
            },
            preAPIHook: function(m) {
              return t(h, void 0, void 0, function() {
                var y, p;
                return o(this, function(b) {
                  return y = new Headers(m.requestInit.headers), y.set("rid", i.recipeId), p = r(r({}, m), {
                    requestInit: r(r({}, m.requestInit), { headers: y })
                  }), i.preAPIHook === void 0 ? [2, p] : [2, i.preAPIHook(m)];
                });
              });
            },
            apiDomain: i.appInfo.apiDomain.getAsStringDangerous(),
            apiBasePath: i.appInfo.apiBasePath.getAsStringDangerous()
          })
        ), h;
      }
      return a.init = function(i) {
        return function(h, m, y) {
          return a.instance = new a(
            r(r({}, i), {
              appInfo: h,
              recipeId: a.RECIPE_ID,
              enableDebugLogs: y
            })
          ), a.instance;
        };
      }, a.prototype.getClaimValue = function(i) {
        return f.default.getClaimValue(i);
      }, a.prototype.getInvalidClaimsFromResponse = function(i) {
        return f.default.getInvalidClaimsFromResponse(i);
      }, a.addAxiosInterceptors = function(i, h) {
        return f.default.addAxiosInterceptors(i, h);
      }, a.getInstanceOrThrow = function() {
        if (a.instance === void 0) {
          var i = "No instance of Session found. Ensure that the 'Session.init' method is called within the 'SuperTokens.init' recipeList.";
          throw i = (0, g.checkForSSRErrorAndAppendIfNeeded)(i), Error(i);
        }
        return a.instance;
      }, a.reset = function() {
        (0, g.isTest)() && (a.instance = void 0);
      }, a.RECIPE_ID = "session", a;
    }(d.default)
  );
  return ke.Recipe = u, ke.default = u, ke;
}
var bi;
function ql() {
  return bi || (bi = 1, function(e) {
    var r = Cr && Cr.__awaiter || function(b, w, v, k) {
      function C(S) {
        return S instanceof v ? S : new v(function(T) {
          T(S);
        });
      }
      return new (v || (v = Promise))(function(S, T) {
        function I(B) {
          try {
            _(k.next(B));
          } catch (A) {
            T(A);
          }
        }
        function x(B) {
          try {
            _(k.throw(B));
          } catch (A) {
            T(A);
          }
        }
        function _(B) {
          B.done ? S(B.value) : C(B.value).then(I, x);
        }
        _((k = k.apply(b, w || [])).next());
      });
    }, t = Cr && Cr.__generator || function(b, w) {
      var v = {
        label: 0,
        sent: function() {
          if (S[0] & 1) throw S[1];
          return S[1];
        },
        trys: [],
        ops: []
      }, k, C, S, T;
      return T = { next: I(0), throw: I(1), return: I(2) }, typeof Symbol == "function" && (T[Symbol.iterator] = function() {
        return this;
      }), T;
      function I(_) {
        return function(B) {
          return x([_, B]);
        };
      }
      function x(_) {
        if (k) throw new TypeError("Generator is already executing.");
        for (; v; )
          try {
            if (k = 1, C && (S = _[0] & 2 ? C.return : _[0] ? C.throw || ((S = C.return) && S.call(C), 0) : C.next) && !(S = S.call(C, _[1])).done)
              return S;
            switch (C = 0, S && (_ = [_[0] & 2, S.value]), _[0]) {
              case 0:
              case 1:
                S = _;
                break;
              case 4:
                return v.label++, { value: _[1], done: !1 };
              case 5:
                v.label++, C = _[1], _ = [0];
                continue;
              case 7:
                _ = v.ops.pop(), v.trys.pop();
                continue;
              default:
                if (S = v.trys, !(S = S.length > 0 && S[S.length - 1]) && (_[0] === 6 || _[0] === 2)) {
                  v = 0;
                  continue;
                }
                if (_[0] === 3 && (!S || _[1] > S[0] && _[1] < S[3])) {
                  v.label = _[1];
                  break;
                }
                if (_[0] === 6 && v.label < S[1]) {
                  v.label = S[1], S = _;
                  break;
                }
                if (S && v.label < S[2]) {
                  v.label = S[2], v.ops.push(_);
                  break;
                }
                S[2] && v.ops.pop(), v.trys.pop();
                continue;
            }
            _ = w.call(b, v);
          } catch (B) {
            _ = [6, B], C = 0;
          } finally {
            k = S = 0;
          }
        if (_[0] & 5) throw _[1];
        return { value: _[0] ? _[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.getInvalidClaimsFromResponse = e.getClaimValue = e.validateClaims = e.signOut = e.addAxiosInterceptors = e.doesSessionExist = e.attemptRefreshingSession = e.getAccessToken = e.getAccessTokenPayloadSecurely = e.getUserId = e.init = e.BooleanClaim = e.PrimitiveArrayClaim = e.PrimitiveClaim = void 0;
    var o = Me(), n = Fa(), d = (
      /** @class */
      function() {
        function b() {
        }
        return b.init = function(w) {
          return n.default.init(w);
        }, b.getUserId = function(w) {
          return n.default.getInstanceOrThrow().getUserId({
            userContext: (0, o.getNormalisedUserContext)(
              w == null ? void 0 : w.userContext
            )
          });
        }, b.getAccessToken = function(w) {
          return n.default.getInstanceOrThrow().getAccessToken({
            userContext: (0, o.getNormalisedUserContext)(
              w == null ? void 0 : w.userContext
            )
          });
        }, b.getAccessTokenPayloadSecurely = function(w) {
          return r(this, void 0, void 0, function() {
            return t(this, function(v) {
              return [
                2,
                n.default.getInstanceOrThrow().getAccessTokenPayloadSecurely({
                  userContext: (0, o.getNormalisedUserContext)(
                    w == null ? void 0 : w.userContext
                  )
                })
              ];
            });
          });
        }, b.attemptRefreshingSession = function() {
          return r(this, void 0, void 0, function() {
            return t(this, function(w) {
              return [2, n.default.getInstanceOrThrow().attemptRefreshingSession()];
            });
          });
        }, b.doesSessionExist = function(w) {
          return n.default.getInstanceOrThrow().doesSessionExist({
            userContext: (0, o.getNormalisedUserContext)(
              w == null ? void 0 : w.userContext
            )
          });
        }, b.addAxiosInterceptors = function(w, v) {
          return n.default.addAxiosInterceptors(w, (0, o.getNormalisedUserContext)(v));
        }, b.signOut = function(w) {
          return n.default.getInstanceOrThrow().signOut({
            userContext: (0, o.getNormalisedUserContext)(
              w == null ? void 0 : w.userContext
            )
          });
        }, b.getClaimValue = function(w) {
          return n.default.getInstanceOrThrow().getClaimValue({
            claim: w.claim,
            userContext: (0, o.getNormalisedUserContext)(
              w == null ? void 0 : w.userContext
            )
          });
        }, b.validateClaims = function(w) {
          return n.default.getInstanceOrThrow().validateClaims({
            overrideGlobalClaimValidators: w == null ? void 0 : w.overrideGlobalClaimValidators,
            userContext: (0, o.getNormalisedUserContext)(
              w == null ? void 0 : w.userContext
            )
          });
        }, b.getInvalidClaimsFromResponse = function(w) {
          return n.default.getInstanceOrThrow().getInvalidClaimsFromResponse({
            response: w.response,
            userContext: (0, o.getNormalisedUserContext)(
              w == null ? void 0 : w.userContext
            )
          });
        }, b;
      }()
    );
    e.default = d;
    var f = d.init;
    e.init = f;
    var g = d.getUserId;
    e.getUserId = g;
    var c = d.getAccessTokenPayloadSecurely;
    e.getAccessTokenPayloadSecurely = c;
    var s = d.getAccessToken;
    e.getAccessToken = s;
    var u = d.attemptRefreshingSession;
    e.attemptRefreshingSession = u;
    var l = d.doesSessionExist;
    e.doesSessionExist = l;
    var a = d.addAxiosInterceptors;
    e.addAxiosInterceptors = a;
    var i = d.signOut;
    e.signOut = i;
    var h = d.validateClaims;
    e.validateClaims = h;
    var m = d.getClaimValue;
    e.getClaimValue = m;
    var y = d.getInvalidClaimsFromResponse;
    e.getInvalidClaimsFromResponse = y;
    var p = Ha();
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
  }(Cr)), Cr;
}
var yi;
function zl() {
  return yi || (yi = 1, function(e) {
    function r(t) {
      for (var o in t) e.hasOwnProperty(o) || (e[o] = t[o]);
    }
    e.__esModule = !0, r(ql());
  }(go)), go;
}
var Wl = zl();
const Qo = /* @__PURE__ */ Cl(Wl), ja = /* @__PURE__ */ Bs("userStore", () => {
  const e = ve(!1), r = localStorage.getItem("theme") || "light", t = ve(r);
  document.documentElement.classList.toggle("dark", r === "dark");
  function o() {
    const d = t.value === "light" ? "dark" : "light";
    localStorage.setItem("theme", d), t.value = d, document.documentElement.classList.toggle("dark", d === "dark");
  }
  async function n() {
    e.value = await Qo.doesSessionExist();
  }
  return {
    isSignedIn: e,
    updateAuth: n,
    theme: t,
    toggleTheme: o
  };
}), Gl = /* @__PURE__ */ Ye({
  __name: "ThemeToggle",
  setup(e) {
    const r = ja();
    return Se(() => r.theme === "light" ? "pi pi-sun" : "pi pi-moon"), (t, o) => (Z(), ue("button", null, Ke(re(r).isSignedIn), 1));
  }
});
function Xl() {
  return Va().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Va() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const Kl = typeof Proxy == "function", Yl = "devtools-plugin:setup", Ql = "plugin:settings:set";
let qr, No;
function Jl() {
  var e;
  return qr !== void 0 || (typeof window < "u" && window.performance ? (qr = !0, No = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (qr = !0, No = globalThis.perf_hooks.performance) : qr = !1), qr;
}
function Zl() {
  return Jl() ? No.now() : Date.now();
}
class ec {
  constructor(r, t) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = r, this.hook = t;
    const o = {};
    if (r.settings)
      for (const f in r.settings) {
        const g = r.settings[f];
        o[f] = g.defaultValue;
      }
    const n = `__vue-devtools-plugin-settings__${r.id}`;
    let d = Object.assign({}, o);
    try {
      const f = localStorage.getItem(n), g = JSON.parse(f);
      Object.assign(d, g);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return d;
      },
      setSettings(f) {
        try {
          localStorage.setItem(n, JSON.stringify(f));
        } catch {
        }
        d = f;
      },
      now() {
        return Zl();
      }
    }, t && t.on(Ql, (f, g) => {
      f === this.plugin.id && this.fallbacks.setSettings(g);
    }), this.proxiedOn = new Proxy({}, {
      get: (f, g) => this.target ? this.target.on[g] : (...c) => {
        this.onQueue.push({
          method: g,
          args: c
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (f, g) => this.target ? this.target[g] : g === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(g) ? (...c) => (this.targetQueue.push({
        method: g,
        args: c,
        resolve: () => {
        }
      }), this.fallbacks[g](...c)) : (...c) => new Promise((s) => {
        this.targetQueue.push({
          method: g,
          args: c,
          resolve: s
        });
      })
    });
  }
  async setRealTarget(r) {
    this.target = r;
    for (const t of this.onQueue)
      this.target.on[t.method](...t.args);
    for (const t of this.targetQueue)
      t.resolve(await this.target[t.method](...t.args));
  }
}
function rc(e, r) {
  const t = e, o = Va(), n = Xl(), d = Kl && t.enableEarlyProxy;
  if (n && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !d))
    n.emit(Yl, e, r);
  else {
    const f = d ? new ec(t, n) : null;
    (o.__VUE_DEVTOOLS_PLUGINS__ = o.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: t,
      setupFn: r,
      proxy: f
    }), f && r(f.proxiedTarget);
  }
}
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const lr = typeof document < "u";
function qa(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function tc(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || // support CF with dynamic imports that do not
  // add the Module string tag
  e.default && qa(e.default);
}
const ne = Object.assign;
function bo(e, r) {
  const t = {};
  for (const o in r) {
    const n = r[o];
    t[o] = xe(n) ? n.map(e) : e(n);
  }
  return t;
}
const mt = () => {
}, xe = Array.isArray;
function Y(e) {
  const r = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(r));
}
const za = /#/g, oc = /&/g, nc = /\//g, ic = /=/g, ac = /\?/g, Wa = /\+/g, sc = /%5B/g, uc = /%5D/g, Ga = /%5E/g, lc = /%60/g, Xa = /%7B/g, cc = /%7C/g, Ka = /%7D/g, dc = /%20/g;
function Jo(e) {
  return encodeURI("" + e).replace(cc, "|").replace(sc, "[").replace(uc, "]");
}
function fc(e) {
  return Jo(e).replace(Xa, "{").replace(Ka, "}").replace(Ga, "^");
}
function Lo(e) {
  return Jo(e).replace(Wa, "%2B").replace(dc, "+").replace(za, "%23").replace(oc, "%26").replace(lc, "`").replace(Xa, "{").replace(Ka, "}").replace(Ga, "^");
}
function gc(e) {
  return Lo(e).replace(ic, "%3D");
}
function hc(e) {
  return Jo(e).replace(za, "%23").replace(ac, "%3F");
}
function pc(e) {
  return e == null ? "" : hc(e).replace(nc, "%2F");
}
function Xr(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    process.env.NODE_ENV !== "production" && Y(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
const mc = /\/$/, vc = (e) => e.replace(mc, "");
function yo(e, r, t = "/") {
  let o, n = {}, d = "", f = "";
  const g = r.indexOf("#");
  let c = r.indexOf("?");
  return g < c && g >= 0 && (c = -1), c > -1 && (o = r.slice(0, c), d = r.slice(c + 1, g > -1 ? g : r.length), n = e(d)), g > -1 && (o = o || r.slice(0, g), f = r.slice(g, r.length)), o = kc(o ?? r, t), {
    fullPath: o + (d && "?") + d + f,
    path: o,
    query: n,
    hash: Xr(f)
  };
}
function bc(e, r) {
  const t = r.query ? e(r.query) : "";
  return r.path + (t && "?") + t + (r.hash || "");
}
function ki(e, r) {
  return !r || !e.toLowerCase().startsWith(r.toLowerCase()) ? e : e.slice(r.length) || "/";
}
function wi(e, r, t) {
  const o = r.matched.length - 1, n = t.matched.length - 1;
  return o > -1 && o === n && kr(r.matched[o], t.matched[n]) && Ya(r.params, t.params) && e(r.query) === e(t.query) && r.hash === t.hash;
}
function kr(e, r) {
  return (e.aliasOf || e) === (r.aliasOf || r);
}
function Ya(e, r) {
  if (Object.keys(e).length !== Object.keys(r).length)
    return !1;
  for (const t in e)
    if (!yc(e[t], r[t]))
      return !1;
  return !0;
}
function yc(e, r) {
  return xe(e) ? Ci(e, r) : xe(r) ? Ci(r, e) : e === r;
}
function Ci(e, r) {
  return xe(r) ? e.length === r.length && e.every((t, o) => t === r[o]) : e.length === 1 && e[0] === r;
}
function kc(e, r) {
  if (e.startsWith("/"))
    return e;
  if (process.env.NODE_ENV !== "production" && !r.startsWith("/"))
    return Y(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${r}". It should look like "/${r}".`), e;
  if (!e)
    return r;
  const t = r.split("/"), o = e.split("/"), n = o[o.length - 1];
  (n === ".." || n === ".") && o.push("");
  let d = t.length - 1, f, g;
  for (f = 0; f < o.length; f++)
    if (g = o[f], g !== ".")
      if (g === "..")
        d > 1 && d--;
      else
        break;
  return t.slice(0, d).join("/") + "/" + o.slice(f).join("/");
}
const gr = {
  path: "/",
  // TODO: could we use a symbol in the future?
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
var It;
(function(e) {
  e.pop = "pop", e.push = "push";
})(It || (It = {}));
var vt;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(vt || (vt = {}));
function wc(e) {
  if (!e)
    if (lr) {
      const r = document.querySelector("base");
      e = r && r.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), vc(e);
}
const Cc = /^[^#]+#/;
function Sc(e, r) {
  return e.replace(Cc, "#") + r;
}
function $c(e, r) {
  const t = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: r.behavior,
    left: o.left - t.left - (r.left || 0),
    top: o.top - t.top - (r.top || 0)
  };
}
const oo = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function _c(e) {
  let r;
  if ("el" in e) {
    const t = e.el, o = typeof t == "string" && t.startsWith("#");
    if (process.env.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const d = document.querySelector(e.el);
        if (o && d) {
          Y(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        Y(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const n = typeof t == "string" ? o ? document.getElementById(t.slice(1)) : document.querySelector(t) : t;
    if (!n) {
      process.env.NODE_ENV !== "production" && Y(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    r = $c(n, e);
  } else
    r = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(r) : window.scrollTo(r.left != null ? r.left : window.scrollX, r.top != null ? r.top : window.scrollY);
}
function Si(e, r) {
  return (history.state ? history.state.position - r : -1) + e;
}
const Mo = /* @__PURE__ */ new Map();
function Rc(e, r) {
  Mo.set(e, r);
}
function Ic(e) {
  const r = Mo.get(e);
  return Mo.delete(e), r;
}
let xc = () => location.protocol + "//" + location.host;
function Qa(e, r) {
  const { pathname: t, search: o, hash: n } = r, d = e.indexOf("#");
  if (d > -1) {
    let g = n.includes(e.slice(d)) ? e.slice(d).length : 1, c = n.slice(g);
    return c[0] !== "/" && (c = "/" + c), ki(c, "");
  }
  return ki(t, e) + o + n;
}
function Tc(e, r, t, o) {
  let n = [], d = [], f = null;
  const g = ({ state: a }) => {
    const i = Qa(e, location), h = t.value, m = r.value;
    let y = 0;
    if (a) {
      if (t.value = i, r.value = a, f && f === h) {
        f = null;
        return;
      }
      y = m ? a.position - m.position : 0;
    } else
      o(i);
    n.forEach((p) => {
      p(t.value, h, {
        delta: y,
        type: It.pop,
        direction: y ? y > 0 ? vt.forward : vt.back : vt.unknown
      });
    });
  };
  function c() {
    f = t.value;
  }
  function s(a) {
    n.push(a);
    const i = () => {
      const h = n.indexOf(a);
      h > -1 && n.splice(h, 1);
    };
    return d.push(i), i;
  }
  function u() {
    const { history: a } = window;
    a.state && a.replaceState(ne({}, a.state, { scroll: oo() }), "");
  }
  function l() {
    for (const a of d)
      a();
    d = [], window.removeEventListener("popstate", g), window.removeEventListener("beforeunload", u);
  }
  return window.addEventListener("popstate", g), window.addEventListener("beforeunload", u, {
    passive: !0
  }), {
    pauseListeners: c,
    listen: s,
    destroy: l
  };
}
function $i(e, r, t, o = !1, n = !1) {
  return {
    back: e,
    current: r,
    forward: t,
    replaced: o,
    position: window.history.length,
    scroll: n ? oo() : null
  };
}
function Pc(e) {
  const { history: r, location: t } = window, o = {
    value: Qa(e, t)
  }, n = { value: r.state };
  n.value || d(o.value, {
    back: null,
    current: o.value,
    forward: null,
    // the length is off by one, we need to decrease it
    position: r.length - 1,
    replaced: !0,
    // don't add a scroll as the user may have an anchor, and we want
    // scrollBehavior to be triggered without a saved position
    scroll: null
  }, !0);
  function d(c, s, u) {
    const l = e.indexOf("#"), a = l > -1 ? (t.host && document.querySelector("base") ? e : e.slice(l)) + c : xc() + e + c;
    try {
      r[u ? "replaceState" : "pushState"](s, "", a), n.value = s;
    } catch (i) {
      process.env.NODE_ENV !== "production" ? Y("Error with push/replace State", i) : console.error(i), t[u ? "replace" : "assign"](a);
    }
  }
  function f(c, s) {
    const u = ne({}, r.state, $i(
      n.value.back,
      // keep back and forward entries but override current position
      c,
      n.value.forward,
      !0
    ), s, { position: n.value.position });
    d(c, u, !0), o.value = c;
  }
  function g(c, s) {
    const u = ne(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      n.value,
      r.state,
      {
        forward: c,
        scroll: oo()
      }
    );
    process.env.NODE_ENV !== "production" && !r.state && Y(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state`), d(u.current, u, !0);
    const l = ne({}, $i(o.value, c, null), { position: u.position + 1 }, s);
    d(c, l, !1), o.value = c;
  }
  return {
    location: o,
    state: n,
    push: g,
    replace: f
  };
}
function Ec(e) {
  e = wc(e);
  const r = Pc(e), t = Tc(e, r.state, r.location, r.replace);
  function o(d, f = !0) {
    f || t.pauseListeners(), history.go(d);
  }
  const n = ne({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: Sc.bind(null, e)
  }, r, t);
  return Object.defineProperty(n, "location", {
    enumerable: !0,
    get: () => r.location.value
  }), Object.defineProperty(n, "state", {
    enumerable: !0,
    get: () => r.state.value
  }), n;
}
function Kt(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Ja(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Uo = Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var _i;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(_i || (_i = {}));
const Oc = {
  1({ location: e, currentLocation: r }) {
    return `No match for
 ${JSON.stringify(e)}${r ? `
while being at
` + JSON.stringify(r) : ""}`;
  },
  2({ from: e, to: r }) {
    return `Redirected from "${e.fullPath}" to "${Dc(r)}" via a navigation guard.`;
  },
  4({ from: e, to: r }) {
    return `Navigation aborted from "${e.fullPath}" to "${r.fullPath}" via a navigation guard.`;
  },
  8({ from: e, to: r }) {
    return `Navigation cancelled from "${e.fullPath}" to "${r.fullPath}" with a new navigation.`;
  },
  16({ from: e, to: r }) {
    return `Avoided redundant navigation to current location: "${e.fullPath}".`;
  }
};
function Kr(e, r) {
  return process.env.NODE_ENV !== "production" ? ne(new Error(Oc[e](r)), {
    type: e,
    [Uo]: !0
  }, r) : ne(new Error(), {
    type: e,
    [Uo]: !0
  }, r);
}
function sr(e, r) {
  return e instanceof Error && Uo in e && (r == null || !!(e.type & r));
}
const Ac = ["params", "query", "hash"];
function Dc(e) {
  if (typeof e == "string")
    return e;
  if (e.path != null)
    return e.path;
  const r = {};
  for (const t of Ac)
    t in e && (r[t] = e[t]);
  return JSON.stringify(r, null, 2);
}
const Ri = "[^/]+?", Bc = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Nc = /[.+*?^${}()[\]/\\]/g;
function Lc(e, r) {
  const t = ne({}, Bc, r), o = [];
  let n = t.start ? "^" : "";
  const d = [];
  for (const s of e) {
    const u = s.length ? [] : [
      90
      /* PathScore.Root */
    ];
    t.strict && !s.length && (n += "/");
    for (let l = 0; l < s.length; l++) {
      const a = s[l];
      let i = 40 + (t.sensitive ? 0.25 : 0);
      if (a.type === 0)
        l || (n += "/"), n += a.value.replace(Nc, "\\$&"), i += 40;
      else if (a.type === 1) {
        const { value: h, repeatable: m, optional: y, regexp: p } = a;
        d.push({
          name: h,
          repeatable: m,
          optional: y
        });
        const b = p || Ri;
        if (b !== Ri) {
          i += 10;
          try {
            new RegExp(`(${b})`);
          } catch (v) {
            throw new Error(`Invalid custom RegExp for param "${h}" (${b}): ` + v.message);
          }
        }
        let w = m ? `((?:${b})(?:/(?:${b}))*)` : `(${b})`;
        l || (w = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        y && s.length < 2 ? `(?:/${w})` : "/" + w), y && (w += "?"), n += w, i += 20, y && (i += -8), m && (i += -20), b === ".*" && (i += -50);
      }
      u.push(i);
    }
    o.push(u);
  }
  if (t.strict && t.end) {
    const s = o.length - 1;
    o[s][o[s].length - 1] += 0.7000000000000001;
  }
  t.strict || (n += "/?"), t.end ? n += "$" : t.strict && !n.endsWith("/") && (n += "(?:/|$)");
  const f = new RegExp(n, t.sensitive ? "" : "i");
  function g(s) {
    const u = s.match(f), l = {};
    if (!u)
      return null;
    for (let a = 1; a < u.length; a++) {
      const i = u[a] || "", h = d[a - 1];
      l[h.name] = i && h.repeatable ? i.split("/") : i;
    }
    return l;
  }
  function c(s) {
    let u = "", l = !1;
    for (const a of e) {
      (!l || !u.endsWith("/")) && (u += "/"), l = !1;
      for (const i of a)
        if (i.type === 0)
          u += i.value;
        else if (i.type === 1) {
          const { value: h, repeatable: m, optional: y } = i, p = h in s ? s[h] : "";
          if (xe(p) && !m)
            throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);
          const b = xe(p) ? p.join("/") : p;
          if (!b)
            if (y)
              a.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : l = !0);
            else
              throw new Error(`Missing required param "${h}"`);
          u += b;
        }
    }
    return u || "/";
  }
  return {
    re: f,
    score: o,
    keys: d,
    parse: g,
    stringify: c
  };
}
function Mc(e, r) {
  let t = 0;
  for (; t < e.length && t < r.length; ) {
    const o = r[t] - e[t];
    if (o)
      return o;
    t++;
  }
  return e.length < r.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > r.length ? r.length === 1 && r[0] === 80 ? 1 : -1 : 0;
}
function Za(e, r) {
  let t = 0;
  const o = e.score, n = r.score;
  for (; t < o.length && t < n.length; ) {
    const d = Mc(o[t], n[t]);
    if (d)
      return d;
    t++;
  }
  if (Math.abs(n.length - o.length) === 1) {
    if (Ii(o))
      return 1;
    if (Ii(n))
      return -1;
  }
  return n.length - o.length;
}
function Ii(e) {
  const r = e[e.length - 1];
  return e.length > 0 && r[r.length - 1] < 0;
}
const Uc = {
  type: 0,
  value: ""
}, Hc = /[a-zA-Z0-9_]/;
function Fc(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[Uc]];
  if (!e.startsWith("/"))
    throw new Error(process.env.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function r(i) {
    throw new Error(`ERR (${t})/"${s}": ${i}`);
  }
  let t = 0, o = t;
  const n = [];
  let d;
  function f() {
    d && n.push(d), d = [];
  }
  let g = 0, c, s = "", u = "";
  function l() {
    s && (t === 0 ? d.push({
      type: 0,
      value: s
    }) : t === 1 || t === 2 || t === 3 ? (d.length > 1 && (c === "*" || c === "+") && r(`A repeatable param (${s}) must be alone in its segment. eg: '/:ids+.`), d.push({
      type: 1,
      value: s,
      regexp: u,
      repeatable: c === "*" || c === "+",
      optional: c === "*" || c === "?"
    })) : r("Invalid state to consume buffer"), s = "");
  }
  function a() {
    s += c;
  }
  for (; g < e.length; ) {
    if (c = e[g++], c === "\\" && t !== 2) {
      o = t, t = 4;
      continue;
    }
    switch (t) {
      case 0:
        c === "/" ? (s && l(), f()) : c === ":" ? (l(), t = 1) : a();
        break;
      case 4:
        a(), t = o;
        break;
      case 1:
        c === "(" ? t = 2 : Hc.test(c) ? a() : (l(), t = 0, c !== "*" && c !== "?" && c !== "+" && g--);
        break;
      case 2:
        c === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + c : t = 3 : u += c;
        break;
      case 3:
        l(), t = 0, c !== "*" && c !== "?" && c !== "+" && g--, u = "";
        break;
      default:
        r("Unknown state");
        break;
    }
  }
  return t === 2 && r(`Unfinished custom RegExp for param "${s}"`), l(), f(), n;
}
function jc(e, r, t) {
  const o = Lc(Fc(e.path), t);
  if (process.env.NODE_ENV !== "production") {
    const d = /* @__PURE__ */ new Set();
    for (const f of o.keys)
      d.has(f.name) && Y(`Found duplicated params with name "${f.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), d.add(f.name);
  }
  const n = ne(o, {
    record: e,
    parent: r,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return r && !n.record.aliasOf == !r.record.aliasOf && r.children.push(n), n;
}
function Vc(e, r) {
  const t = [], o = /* @__PURE__ */ new Map();
  r = Ei({ strict: !1, end: !0, sensitive: !1 }, r);
  function n(l) {
    return o.get(l);
  }
  function d(l, a, i) {
    const h = !i, m = Ti(l);
    process.env.NODE_ENV !== "production" && Gc(m, a), m.aliasOf = i && i.record;
    const y = Ei(r, l), p = [m];
    if ("alias" in l) {
      const v = typeof l.alias == "string" ? [l.alias] : l.alias;
      for (const k of v)
        p.push(
          // we need to normalize again to ensure the `mods` property
          // being non enumerable
          Ti(ne({}, m, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: i ? i.record.components : m.components,
            path: k,
            // we might be the child of an alias
            aliasOf: i ? i.record : m
            // the aliases are always of the same kind as the original since they
            // are defined on the same record
          }))
        );
    }
    let b, w;
    for (const v of p) {
      const { path: k } = v;
      if (a && k[0] !== "/") {
        const C = a.record.path, S = C[C.length - 1] === "/" ? "" : "/";
        v.path = a.record.path + (k && S + k);
      }
      if (process.env.NODE_ENV !== "production" && v.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.`);
      if (b = jc(v, a, y), process.env.NODE_ENV !== "production" && a && k[0] === "/" && Kc(b, a), i ? (i.alias.push(b), process.env.NODE_ENV !== "production" && Wc(i, b)) : (w = w || b, w !== b && w.alias.push(b), h && l.name && !Pi(b) && (process.env.NODE_ENV !== "production" && Xc(l, a), f(l.name))), es(b) && c(b), m.children) {
        const C = m.children;
        for (let S = 0; S < C.length; S++)
          d(C[S], b, i && i.children[S]);
      }
      i = i || b;
    }
    return w ? () => {
      f(w);
    } : mt;
  }
  function f(l) {
    if (Ja(l)) {
      const a = o.get(l);
      a && (o.delete(l), t.splice(t.indexOf(a), 1), a.children.forEach(f), a.alias.forEach(f));
    } else {
      const a = t.indexOf(l);
      a > -1 && (t.splice(a, 1), l.record.name && o.delete(l.record.name), l.children.forEach(f), l.alias.forEach(f));
    }
  }
  function g() {
    return t;
  }
  function c(l) {
    const a = Yc(l, t);
    t.splice(a, 0, l), l.record.name && !Pi(l) && o.set(l.record.name, l);
  }
  function s(l, a) {
    let i, h = {}, m, y;
    if ("name" in l && l.name) {
      if (i = o.get(l.name), !i)
        throw Kr(1, {
          location: l
        });
      if (process.env.NODE_ENV !== "production") {
        const w = Object.keys(l.params || {}).filter((v) => !i.keys.find((k) => k.name === v));
        w.length && Y(`Discarded invalid param(s) "${w.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      y = i.record.name, h = ne(
        // paramsFromLocation is a new object
        xi(
          a.params,
          // only keep params that exist in the resolved location
          // only keep optional params coming from a parent record
          i.keys.filter((w) => !w.optional).concat(i.parent ? i.parent.keys.filter((w) => w.optional) : []).map((w) => w.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        l.params && xi(l.params, i.keys.map((w) => w.name))
      ), m = i.stringify(h);
    } else if (l.path != null)
      m = l.path, process.env.NODE_ENV !== "production" && !m.startsWith("/") && Y(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), i = t.find((w) => w.re.test(m)), i && (h = i.parse(m), y = i.record.name);
    else {
      if (i = a.name ? o.get(a.name) : t.find((w) => w.re.test(a.path)), !i)
        throw Kr(1, {
          location: l,
          currentLocation: a
        });
      y = i.record.name, h = ne({}, a.params, l.params), m = i.stringify(h);
    }
    const p = [];
    let b = i;
    for (; b; )
      p.unshift(b.record), b = b.parent;
    return {
      name: y,
      path: m,
      params: h,
      matched: p,
      meta: zc(p)
    };
  }
  e.forEach((l) => d(l));
  function u() {
    t.length = 0, o.clear();
  }
  return {
    addRoute: d,
    resolve: s,
    removeRoute: f,
    clearRoutes: u,
    getRoutes: g,
    getRecordMatcher: n
  };
}
function xi(e, r) {
  const t = {};
  for (const o of r)
    o in e && (t[o] = e[o]);
  return t;
}
function Ti(e) {
  const r = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: qc(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    // must be declared afterwards
    // mods: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
  return Object.defineProperty(r, "mods", {
    value: {}
  }), r;
}
function qc(e) {
  const r = {}, t = e.props || !1;
  if ("component" in e)
    r.default = t;
  else
    for (const o in e.components)
      r[o] = typeof t == "object" ? t[o] : t;
  return r;
}
function Pi(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function zc(e) {
  return e.reduce((r, t) => ne(r, t.meta), {});
}
function Ei(e, r) {
  const t = {};
  for (const o in e)
    t[o] = o in r ? r[o] : e[o];
  return t;
}
function Ho(e, r) {
  return e.name === r.name && e.optional === r.optional && e.repeatable === r.repeatable;
}
function Wc(e, r) {
  for (const t of e.keys)
    if (!t.optional && !r.keys.find(Ho.bind(null, t)))
      return Y(`Alias "${r.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${t.name}"`);
  for (const t of r.keys)
    if (!t.optional && !e.keys.find(Ho.bind(null, t)))
      return Y(`Alias "${r.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${t.name}"`);
}
function Gc(e, r) {
  r && r.record.name && !e.name && !e.path && Y(`The route named "${String(r.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function Xc(e, r) {
  for (let t = r; t; t = t.parent)
    if (t.record.name === e.name)
      throw new Error(`A route named "${String(e.name)}" has been added as a ${r === t ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
}
function Kc(e, r) {
  for (const t of r.keys)
    if (!e.keys.find(Ho.bind(null, t)))
      return Y(`Absolute path "${e.record.path}" must have the exact same param named "${t.name}" as its parent "${r.record.path}".`);
}
function Yc(e, r) {
  let t = 0, o = r.length;
  for (; t !== o; ) {
    const d = t + o >> 1;
    Za(e, r[d]) < 0 ? o = d : t = d + 1;
  }
  const n = Qc(e);
  return n && (o = r.lastIndexOf(n, o - 1), process.env.NODE_ENV !== "production" && o < 0 && Y(`Finding ancestor route "${n.record.path}" failed for "${e.record.path}"`)), o;
}
function Qc(e) {
  let r = e;
  for (; r = r.parent; )
    if (es(r) && Za(e, r) === 0)
      return r;
}
function es({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function Jc(e) {
  const r = {};
  if (e === "" || e === "?")
    return r;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let n = 0; n < o.length; ++n) {
    const d = o[n].replace(Wa, " "), f = d.indexOf("="), g = Xr(f < 0 ? d : d.slice(0, f)), c = f < 0 ? null : Xr(d.slice(f + 1));
    if (g in r) {
      let s = r[g];
      xe(s) || (s = r[g] = [s]), s.push(c);
    } else
      r[g] = c;
  }
  return r;
}
function Oi(e) {
  let r = "";
  for (let t in e) {
    const o = e[t];
    if (t = gc(t), o == null) {
      o !== void 0 && (r += (r.length ? "&" : "") + t);
      continue;
    }
    (xe(o) ? o.map((d) => d && Lo(d)) : [o && Lo(o)]).forEach((d) => {
      d !== void 0 && (r += (r.length ? "&" : "") + t, d != null && (r += "=" + d));
    });
  }
  return r;
}
function Zc(e) {
  const r = {};
  for (const t in e) {
    const o = e[t];
    o !== void 0 && (r[t] = xe(o) ? o.map((n) => n == null ? null : "" + n) : o == null ? o : "" + o);
  }
  return r;
}
const ed = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : ""), Ai = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : ""), no = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), Zo = Symbol(process.env.NODE_ENV !== "production" ? "route location" : ""), Fo = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function nt() {
  let e = [];
  function r(o) {
    return e.push(o), () => {
      const n = e.indexOf(o);
      n > -1 && e.splice(n, 1);
    };
  }
  function t() {
    e = [];
  }
  return {
    add: r,
    list: () => e.slice(),
    reset: t
  };
}
function hr(e, r, t, o, n, d = (f) => f()) {
  const f = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[n] = o.enterCallbacks[n] || []);
  return () => new Promise((g, c) => {
    const s = (a) => {
      a === !1 ? c(Kr(4, {
        from: t,
        to: r
      })) : a instanceof Error ? c(a) : Kt(a) ? c(Kr(2, {
        from: r,
        to: a
      })) : (f && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[n] === f && typeof a == "function" && f.push(a), g());
    }, u = d(() => e.call(o && o.instances[n], r, t, process.env.NODE_ENV !== "production" ? rd(s, r, t) : s));
    let l = Promise.resolve(u);
    if (e.length < 3 && (l = l.then(s)), process.env.NODE_ENV !== "production" && e.length > 2) {
      const a = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof u == "object" && "then" in u)
        l = l.then((i) => s._called ? i : (Y(a), Promise.reject(new Error("Invalid navigation guard"))));
      else if (u !== void 0 && !s._called) {
        Y(a), c(new Error("Invalid navigation guard"));
        return;
      }
    }
    l.catch((a) => c(a));
  });
}
function rd(e, r, t) {
  let o = 0;
  return function() {
    o++ === 1 && Y(`The "next" callback was called more than once in one navigation guard when going from "${t.fullPath}" to "${r.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function ko(e, r, t, o, n = (d) => d()) {
  const d = [];
  for (const f of e) {
    process.env.NODE_ENV !== "production" && !f.components && !f.children.length && Y(`Record with path "${f.path}" is either missing a "component(s)" or "children" property.`);
    for (const g in f.components) {
      let c = f.components[g];
      if (process.env.NODE_ENV !== "production") {
        if (!c || typeof c != "object" && typeof c != "function")
          throw Y(`Component "${g}" in record with path "${f.path}" is not a valid component. Received "${String(c)}".`), new Error("Invalid route component");
        if ("then" in c) {
          Y(`Component "${g}" in record with path "${f.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const s = c;
          c = () => s;
        } else c.__asyncLoader && // warn only once per component
        !c.__warnedDefineAsync && (c.__warnedDefineAsync = !0, Y(`Component "${g}" in record with path "${f.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(r !== "beforeRouteEnter" && !f.instances[g]))
        if (qa(c)) {
          const u = (c.__vccOpts || c)[r];
          u && d.push(hr(u, t, o, f, g, n));
        } else {
          let s = c();
          process.env.NODE_ENV !== "production" && !("catch" in s) && (Y(`Component "${g}" in record with path "${f.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), s = Promise.resolve(s)), d.push(() => s.then((u) => {
            if (!u)
              throw new Error(`Couldn't resolve component "${g}" at "${f.path}"`);
            const l = tc(u) ? u.default : u;
            f.mods[g] = u, f.components[g] = l;
            const i = (l.__vccOpts || l)[r];
            return i && hr(i, t, o, f, g, n)();
          }));
        }
    }
  }
  return d;
}
function Di(e) {
  const r = vr(no), t = vr(Zo);
  let o = !1, n = null;
  const d = Se(() => {
    const u = re(e.to);
    return process.env.NODE_ENV !== "production" && (!o || u !== n) && (Kt(u) || (o ? Y(`Invalid value for prop "to" in useLink()
- to:`, u, `
- previous to:`, n, `
- props:`, e) : Y(`Invalid value for prop "to" in useLink()
- to:`, u, `
- props:`, e)), n = u, o = !0), r.resolve(u);
  }), f = Se(() => {
    const { matched: u } = d.value, { length: l } = u, a = u[l - 1], i = t.matched;
    if (!a || !i.length)
      return -1;
    const h = i.findIndex(kr.bind(null, a));
    if (h > -1)
      return h;
    const m = Bi(u[l - 2]);
    return (
      // we are dealing with nested routes
      l > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Bi(a) === m && // avoid comparing the child with its parent
      i[i.length - 1].path !== m ? i.findIndex(kr.bind(null, u[l - 2])) : h
    );
  }), g = Se(() => f.value > -1 && id(t.params, d.value.params)), c = Se(() => f.value > -1 && f.value === t.matched.length - 1 && Ya(t.params, d.value.params));
  function s(u = {}) {
    if (nd(u)) {
      const l = r[re(e.replace) ? "replace" : "push"](
        re(e.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(mt);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => l), l;
    }
    return Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && lr) {
    const u = Qt();
    if (u) {
      const l = {
        route: d.value,
        isActive: g.value,
        isExactActive: c.value,
        error: null
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(l), Rs(() => {
        l.route = d.value, l.isActive = g.value, l.isExactActive = c.value, l.error = Kt(re(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: d,
    href: Se(() => d.value.href),
    isActive: g,
    isExactActive: c,
    navigate: s
  };
}
function td(e) {
  return e.length === 1 ? e[0] : e;
}
const od = /* @__PURE__ */ Ye({
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
  useLink: Di,
  setup(e, { slots: r }) {
    const t = ba(Di(e)), { options: o } = vr(no), n = Se(() => ({
      [Ni(e.activeClass, o.linkActiveClass, "router-link-active")]: t.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Ni(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: t.isExactActive
    }));
    return () => {
      const d = r.default && td(r.default(t));
      return e.custom ? d : ka("a", {
        "aria-current": t.isExactActive ? e.ariaCurrentValue : null,
        href: t.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: t.navigate,
        class: n.value
      }, d);
    };
  }
}), rs = od;
function nd(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const r = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(r))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function id(e, r) {
  for (const t in r) {
    const o = r[t], n = e[t];
    if (typeof o == "string") {
      if (o !== n)
        return !1;
    } else if (!xe(n) || n.length !== o.length || o.some((d, f) => d !== n[f]))
      return !1;
  }
  return !0;
}
function Bi(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Ni = (e, r, t) => e ?? r ?? t, ad = /* @__PURE__ */ Ye({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(e, { attrs: r, slots: t }) {
    process.env.NODE_ENV !== "production" && ud();
    const o = vr(Fo), n = Se(() => e.route || o.value), d = vr(Ai, 0), f = Se(() => {
      let s = re(d);
      const { matched: u } = n.value;
      let l;
      for (; (l = u[s]) && !l.components; )
        s++;
      return s;
    }), g = Se(() => n.value.matched[f.value]);
    so(Ai, Se(() => f.value + 1)), so(ed, g), so(Fo, n);
    const c = ve();
    return Jt(() => [c.value, g.value, e.name], ([s, u, l], [a, i, h]) => {
      u && (u.instances[l] = s, i && i !== u && s && s === a && (u.leaveGuards.size || (u.leaveGuards = i.leaveGuards), u.updateGuards.size || (u.updateGuards = i.updateGuards))), s && u && // if there is no instance but to and from are the same this might be
      // the first visit
      (!i || !kr(u, i) || !a) && (u.enterCallbacks[l] || []).forEach((m) => m(s));
    }, { flush: "post" }), () => {
      const s = n.value, u = e.name, l = g.value, a = l && l.components[u];
      if (!a)
        return Li(t.default, { Component: a, route: s });
      const i = l.props[u], h = i ? i === !0 ? s.params : typeof i == "function" ? i(s) : i : null, y = ka(a, ne({}, h, r, {
        onVnodeUnmounted: (p) => {
          p.component.isUnmounted && (l.instances[u] = null);
        },
        ref: c
      }));
      if (process.env.NODE_ENV !== "production" && lr && y.ref) {
        const p = {
          depth: f.value,
          name: l.name,
          path: l.path,
          meta: l.meta
        };
        (xe(y.ref) ? y.ref.map((w) => w.i) : [y.ref.i]).forEach((w) => {
          w.__vrv_devtools = p;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Li(t.default, { Component: y, route: s }) || y
      );
    };
  }
});
function Li(e, r) {
  if (!e)
    return null;
  const t = e(r);
  return t.length === 1 ? t[0] : t;
}
const sd = ad;
function ud() {
  const e = Qt(), r = e.parent && e.parent.type.name, t = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (r && (r === "KeepAlive" || r.includes("Transition")) && typeof t == "object" && t.name === "RouterView") {
    const o = r === "KeepAlive" ? "keep-alive" : "transition";
    Y(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function it(e, r) {
  const t = ne({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => yd(o, ["instances", "children", "aliasOf"]))
  });
  return {
    _custom: {
      type: null,
      readOnly: !0,
      display: e.fullPath,
      tooltip: r,
      value: t
    }
  };
}
function Ht(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let ld = 0;
function cd(e, r, t) {
  if (r.__hasDevtools)
    return;
  r.__hasDevtools = !0;
  const o = ld++;
  rc({
    id: "org.vuejs.router" + (o ? "." + o : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (n) => {
    typeof n.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.on.inspectComponent((u, l) => {
      u.instanceData && u.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: it(r.currentRoute.value, "Current Route")
      });
    }), n.on.visitComponentTree(({ treeNode: u, componentInstance: l }) => {
      if (l.__vrv_devtools) {
        const a = l.__vrv_devtools;
        u.tags.push({
          label: (a.name ? `${a.name.toString()}: ` : "") + a.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: ts
        });
      }
      xe(l.__vrl_devtools) && (l.__devtoolsApi = n, l.__vrl_devtools.forEach((a) => {
        let i = a.route.path, h = is, m = "", y = 0;
        a.error ? (i = a.error, h = pd, y = md) : a.isExactActive ? (h = ns, m = "This is exactly active") : a.isActive && (h = os, m = "This link is active"), u.tags.push({
          label: i,
          textColor: y,
          tooltip: m,
          backgroundColor: h
        });
      }));
    }), Jt(r.currentRoute, () => {
      c(), n.notifyComponentUpdate(), n.sendInspectorTree(g), n.sendInspectorState(g);
    });
    const d = "router:navigations:" + o;
    n.addTimelineLayer({
      id: d,
      label: `Router${o ? " " + o : ""} Navigations`,
      color: 4237508
    }), r.onError((u, l) => {
      n.addTimelineEvent({
        layerId: d,
        event: {
          title: "Error during Navigation",
          subtitle: l.fullPath,
          logType: "error",
          time: n.now(),
          data: { error: u },
          groupId: l.meta.__navigationId
        }
      });
    });
    let f = 0;
    r.beforeEach((u, l) => {
      const a = {
        guard: Ht("beforeEach"),
        from: it(l, "Current Location during this navigation"),
        to: it(u, "Target location")
      };
      Object.defineProperty(u.meta, "__navigationId", {
        value: f++
      }), n.addTimelineEvent({
        layerId: d,
        event: {
          time: n.now(),
          title: "Start of navigation",
          subtitle: u.fullPath,
          data: a,
          groupId: u.meta.__navigationId
        }
      });
    }), r.afterEach((u, l, a) => {
      const i = {
        guard: Ht("afterEach")
      };
      a ? (i.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: a ? a.message : "",
          tooltip: "Navigation Failure",
          value: a
        }
      }, i.status = Ht("❌")) : i.status = Ht("✅"), i.from = it(l, "Current Location during this navigation"), i.to = it(u, "Target location"), n.addTimelineEvent({
        layerId: d,
        event: {
          title: "End of navigation",
          subtitle: u.fullPath,
          time: n.now(),
          data: i,
          logType: a ? "warning" : "default",
          groupId: u.meta.__navigationId
        }
      });
    });
    const g = "router-inspector:" + o;
    n.addInspector({
      id: g,
      label: "Routes" + (o ? " " + o : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function c() {
      if (!s)
        return;
      const u = s;
      let l = t.getRoutes().filter((a) => !a.parent || // these routes have a parent with no component which will not appear in the view
      // therefore we still need to include them
      !a.parent.record.components);
      l.forEach(us), u.filter && (l = l.filter((a) => (
        // save matches state based on the payload
        jo(a, u.filter.toLowerCase())
      ))), l.forEach((a) => ss(a, r.currentRoute.value)), u.rootNodes = l.map(as);
    }
    let s;
    n.on.getInspectorTree((u) => {
      s = u, u.app === e && u.inspectorId === g && c();
    }), n.on.getInspectorState((u) => {
      if (u.app === e && u.inspectorId === g) {
        const a = t.getRoutes().find((i) => i.record.__vd_id === u.nodeId);
        a && (u.state = {
          options: fd(a)
        });
      }
    }), n.sendInspectorTree(g), n.sendInspectorState(g);
  });
}
function dd(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function fd(e) {
  const { record: r } = e, t = [
    { editable: !1, key: "path", value: r.path }
  ];
  return r.name != null && t.push({
    editable: !1,
    key: "name",
    value: r.name
  }), t.push({ editable: !1, key: "regexp", value: e.re }), e.keys.length && t.push({
    editable: !1,
    key: "keys",
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.keys.map((o) => `${o.name}${dd(o)}`).join(" "),
        tooltip: "Param keys",
        value: e.keys
      }
    }
  }), r.redirect != null && t.push({
    editable: !1,
    key: "redirect",
    value: r.redirect
  }), e.alias.length && t.push({
    editable: !1,
    key: "aliases",
    value: e.alias.map((o) => o.record.path)
  }), Object.keys(e.record.meta).length && t.push({
    editable: !1,
    key: "meta",
    value: e.record.meta
  }), t.push({
    key: "score",
    editable: !1,
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.score.map((o) => o.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: e.score
      }
    }
  }), t;
}
const ts = 15485081, os = 2450411, ns = 8702998, gd = 2282478, is = 16486972, hd = 6710886, pd = 16704226, md = 12131356;
function as(e) {
  const r = [], { record: t } = e;
  t.name != null && r.push({
    label: String(t.name),
    textColor: 0,
    backgroundColor: gd
  }), t.aliasOf && r.push({
    label: "alias",
    textColor: 0,
    backgroundColor: is
  }), e.__vd_match && r.push({
    label: "matches",
    textColor: 0,
    backgroundColor: ts
  }), e.__vd_exactActive && r.push({
    label: "exact",
    textColor: 0,
    backgroundColor: ns
  }), e.__vd_active && r.push({
    label: "active",
    textColor: 0,
    backgroundColor: os
  }), t.redirect && r.push({
    label: typeof t.redirect == "string" ? `redirect: ${t.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: hd
  });
  let o = t.__vd_id;
  return o == null && (o = String(vd++), t.__vd_id = o), {
    id: o,
    label: t.path,
    tags: r,
    children: e.children.map(as)
  };
}
let vd = 0;
const bd = /^\/(.*)\/([a-z]*)$/;
function ss(e, r) {
  const t = r.matched.length && kr(r.matched[r.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = t, t || (e.__vd_active = r.matched.some((o) => kr(o, e.record))), e.children.forEach((o) => ss(o, r));
}
function us(e) {
  e.__vd_match = !1, e.children.forEach(us);
}
function jo(e, r) {
  const t = String(e.re).match(bd);
  if (e.__vd_match = !1, !t || t.length < 3)
    return !1;
  if (new RegExp(t[1].replace(/\$$/, ""), t[2]).test(r))
    return e.children.forEach((f) => jo(f, r)), e.record.path !== "/" || r === "/" ? (e.__vd_match = e.re.test(r), !0) : !1;
  const n = e.record.path.toLowerCase(), d = Xr(n);
  return !r.startsWith("/") && (d.includes(r) || n.includes(r)) || d.startsWith(r) || n.startsWith(r) || e.record.name && String(e.record.name).includes(r) ? !0 : e.children.some((f) => jo(f, r));
}
function yd(e, r) {
  const t = {};
  for (const o in e)
    r.includes(o) || (t[o] = e[o]);
  return t;
}
function kd(e) {
  const r = Vc(e.routes, e), t = e.parseQuery || Jc, o = e.stringifyQuery || Oi, n = e.history;
  if (process.env.NODE_ENV !== "production" && !n)
    throw new Error('Provide the "history" option when calling "createRouter()": https://router.vuejs.org/api/interfaces/RouterOptions.html#history');
  const d = nt(), f = nt(), g = nt(), c = $s(gr);
  let s = gr;
  lr && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = bo.bind(null, ($) => "" + $), l = bo.bind(null, pc), a = (
    // @ts-expect-error: intentionally avoid the type check
    bo.bind(null, Xr)
  );
  function i($, P) {
    let E, L;
    return Ja($) ? (E = r.getRecordMatcher($), process.env.NODE_ENV !== "production" && !E && Y(`Parent route "${String($)}" not found when adding child route`, P), L = P) : L = $, r.addRoute(L, E);
  }
  function h($) {
    const P = r.getRecordMatcher($);
    P ? r.removeRoute(P) : process.env.NODE_ENV !== "production" && Y(`Cannot remove non-existent route "${String($)}"`);
  }
  function m() {
    return r.getRoutes().map(($) => $.record);
  }
  function y($) {
    return !!r.getRecordMatcher($);
  }
  function p($, P) {
    if (P = ne({}, P || c.value), typeof $ == "string") {
      const V = yo(t, $, P.path), W = r.resolve({ path: V.path }, P), be = n.createHref(V.fullPath);
      return process.env.NODE_ENV !== "production" && (be.startsWith("//") ? Y(`Location "${$}" resolved to "${be}". A resolved location cannot start with multiple slashes.`) : W.matched.length || Y(`No match found for location with path "${$}"`)), ne(V, W, {
        params: a(W.params),
        hash: Xr(V.hash),
        redirectedFrom: void 0,
        href: be
      });
    }
    if (process.env.NODE_ENV !== "production" && !Kt($))
      return Y(`router.resolve() was passed an invalid location. This will fail in production.
- Location:`, $), p({});
    let E;
    if ($.path != null)
      process.env.NODE_ENV !== "production" && "params" in $ && !("name" in $) && // @ts-expect-error: the type is never
      Object.keys($.params).length && Y(`Path "${$.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), E = ne({}, $, {
        path: yo(t, $.path, P.path).path
      });
    else {
      const V = ne({}, $.params);
      for (const W in V)
        V[W] == null && delete V[W];
      E = ne({}, $, {
        params: l(V)
      }), P.params = l(P.params);
    }
    const L = r.resolve(E, P), N = $.hash || "";
    process.env.NODE_ENV !== "production" && N && !N.startsWith("#") && Y(`A \`hash\` should always start with the character "#". Replace "${N}" with "#${N}".`), L.params = u(a(L.params));
    const q = bc(o, ne({}, $, {
      hash: fc(N),
      path: L.path
    })), M = n.createHref(q);
    return process.env.NODE_ENV !== "production" && (M.startsWith("//") ? Y(`Location "${$}" resolved to "${M}". A resolved location cannot start with multiple slashes.`) : L.matched.length || Y(`No match found for location with path "${$.path != null ? $.path : $}"`)), ne({
      fullPath: q,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: N,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === Oi ? Zc($.query) : $.query || {}
      )
    }, L, {
      redirectedFrom: void 0,
      href: M
    });
  }
  function b($) {
    return typeof $ == "string" ? yo(t, $, c.value.path) : ne({}, $);
  }
  function w($, P) {
    if (s !== $)
      return Kr(8, {
        from: P,
        to: $
      });
  }
  function v($) {
    return S($);
  }
  function k($) {
    return v(ne(b($), { replace: !0 }));
  }
  function C($) {
    const P = $.matched[$.matched.length - 1];
    if (P && P.redirect) {
      const { redirect: E } = P;
      let L = typeof E == "function" ? E($) : E;
      if (typeof L == "string" && (L = L.includes("?") || L.includes("#") ? L = b(L) : (
        // force empty params
        { path: L }
      ), L.params = {}), process.env.NODE_ENV !== "production" && L.path == null && !("name" in L))
        throw Y(`Invalid redirect found:
${JSON.stringify(L, null, 2)}
 when navigating to "${$.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return ne({
        query: $.query,
        hash: $.hash,
        // avoid transferring params if the redirect has a path
        params: L.path != null ? {} : $.params
      }, L);
    }
  }
  function S($, P) {
    const E = s = p($), L = c.value, N = $.state, q = $.force, M = $.replace === !0, V = C(E);
    if (V)
      return S(
        ne(b(V), {
          state: typeof V == "object" ? ne({}, N, V.state) : N,
          force: q,
          replace: M
        }),
        // keep original redirectedFrom if it exists
        P || E
      );
    const W = E;
    W.redirectedFrom = P;
    let be;
    return !q && wi(o, L, E) && (be = Kr(16, { to: W, from: L }), j(
      L,
      L,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (be ? Promise.resolve(be) : x(W, L)).catch((ie) => sr(ie) ? (
      // navigation redirects still mark the router as ready
      sr(
        ie,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? ie : F(ie)
    ) : (
      // reject any unknown error
      H(ie, W, L)
    )).then((ie) => {
      if (ie) {
        if (sr(
          ie,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return process.env.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          wi(o, p(ie.to), W) && // and we have done it a couple of times
          P && // @ts-expect-error: added only in dev
          (P._count = P._count ? (
            // @ts-expect-error
            P._count + 1
          ) : 1) > 30 ? (Y(`Detected a possibly infinite redirection in a navigation guard when going from "${L.fullPath}" to "${W.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : S(
            // keep options
            ne({
              // preserve an existing replacement but allow the redirect to override it
              replace: M
            }, b(ie.to), {
              state: typeof ie.to == "object" ? ne({}, N, ie.to.state) : N,
              force: q
            }),
            // preserve the original redirectedFrom if any
            P || W
          );
      } else
        ie = B(W, L, !0, M, N);
      return _(W, L, ie), ie;
    });
  }
  function T($, P) {
    const E = w($, P);
    return E ? Promise.reject(E) : Promise.resolve();
  }
  function I($) {
    const P = R.values().next().value;
    return P && typeof P.runWithContext == "function" ? P.runWithContext($) : $();
  }
  function x($, P) {
    let E;
    const [L, N, q] = wd($, P);
    E = ko(L.reverse(), "beforeRouteLeave", $, P);
    for (const V of L)
      V.leaveGuards.forEach((W) => {
        E.push(hr(W, $, P));
      });
    const M = T.bind(null, $, P);
    return E.push(M), O(E).then(() => {
      E = [];
      for (const V of d.list())
        E.push(hr(V, $, P));
      return E.push(M), O(E);
    }).then(() => {
      E = ko(N, "beforeRouteUpdate", $, P);
      for (const V of N)
        V.updateGuards.forEach((W) => {
          E.push(hr(W, $, P));
        });
      return E.push(M), O(E);
    }).then(() => {
      E = [];
      for (const V of q)
        if (V.beforeEnter)
          if (xe(V.beforeEnter))
            for (const W of V.beforeEnter)
              E.push(hr(W, $, P));
          else
            E.push(hr(V.beforeEnter, $, P));
      return E.push(M), O(E);
    }).then(() => ($.matched.forEach((V) => V.enterCallbacks = {}), E = ko(q, "beforeRouteEnter", $, P, I), E.push(M), O(E))).then(() => {
      E = [];
      for (const V of f.list())
        E.push(hr(V, $, P));
      return E.push(M), O(E);
    }).catch((V) => sr(
      V,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? V : Promise.reject(V));
  }
  function _($, P, E) {
    g.list().forEach((L) => I(() => L($, P, E)));
  }
  function B($, P, E, L, N) {
    const q = w($, P);
    if (q)
      return q;
    const M = P === gr, V = lr ? history.state : {};
    E && (L || M ? n.replace($.fullPath, ne({
      scroll: M && V && V.scroll
    }, N)) : n.push($.fullPath, N)), c.value = $, j($, P, E, M), F();
  }
  let A;
  function G() {
    A || (A = n.listen(($, P, E) => {
      const L = p($), N = C(L);
      if (N) {
        S(ne(N, { replace: !0, force: !0 }), L).catch(mt);
        return;
      }
      s = L;
      const q = c.value;
      lr && Rc(Si(q.fullPath, E.delta), oo()), x(L, q).catch((M) => sr(
        M,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? M : sr(
        M,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (S(
        ne(b(M.to), {
          force: !0
        }),
        L
        // avoid an uncaught rejection, let push call triggerError
      ).then((V) => {
        sr(
          V,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !E.delta && E.type === It.pop && n.go(-1, !1);
      }).catch(mt), Promise.reject()) : (E.delta && n.go(-E.delta, !1), H(M, L, q))).then((M) => {
        M = M || B(
          // after navigation, all matched components are resolved
          L,
          q,
          !1
        ), M && (E.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !sr(
          M,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? n.go(-E.delta, !1) : E.type === It.pop && sr(
          M,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && n.go(-1, !1)), _(L, q, M);
      }).catch(mt);
    }));
  }
  let ee = nt(), ge = nt(), le;
  function H($, P, E) {
    F($);
    const L = ge.list();
    return L.length ? L.forEach((N) => N($, P, E)) : (process.env.NODE_ENV !== "production" && Y("uncaught error during route navigation:"), console.error($)), Promise.reject($);
  }
  function U() {
    return le && c.value !== gr ? Promise.resolve() : new Promise(($, P) => {
      ee.add([$, P]);
    });
  }
  function F($) {
    return le || (le = !$, G(), ee.list().forEach(([P, E]) => $ ? E($) : P()), ee.reset()), $;
  }
  function j($, P, E, L) {
    const { scrollBehavior: N } = e;
    if (!lr || !N)
      return Promise.resolve();
    const q = !E && Ic(Si($.fullPath, 0)) || (L || !E) && history.state && history.state.scroll || null;
    return qt().then(() => N($, P, q)).then((M) => M && _c(M)).catch((M) => H(M, $, P));
  }
  const X = ($) => n.go($);
  let oe;
  const R = /* @__PURE__ */ new Set(), D = {
    currentRoute: c,
    listening: !0,
    addRoute: i,
    removeRoute: h,
    clearRoutes: r.clearRoutes,
    hasRoute: y,
    getRoutes: m,
    resolve: p,
    options: e,
    push: v,
    replace: k,
    go: X,
    back: () => X(-1),
    forward: () => X(1),
    beforeEach: d.add,
    beforeResolve: f.add,
    afterEach: g.add,
    onError: ge.add,
    isReady: U,
    install($) {
      const P = this;
      $.component("RouterLink", rs), $.component("RouterView", sd), $.config.globalProperties.$router = P, Object.defineProperty($.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => re(c)
      }), lr && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !oe && c.value === gr && (oe = !0, v(n.location).catch((N) => {
        process.env.NODE_ENV !== "production" && Y("Unexpected error when starting the router:", N);
      }));
      const E = {};
      for (const N in gr)
        Object.defineProperty(E, N, {
          get: () => c.value[N],
          enumerable: !0
        });
      $.provide(no, P), $.provide(Zo, _s(E)), $.provide(Fo, c);
      const L = $.unmount;
      R.add($), $.unmount = function() {
        R.delete($), R.size < 1 && (s = gr, A && A(), A = null, c.value = gr, oe = !1, le = !1), L();
      }, process.env.NODE_ENV !== "production" && lr && cd($, P, r);
    }
  };
  function O($) {
    return $.reduce((P, E) => P.then(() => I(E)), Promise.resolve());
  }
  return D;
}
function wd(e, r) {
  const t = [], o = [], n = [], d = Math.max(r.matched.length, e.matched.length);
  for (let f = 0; f < d; f++) {
    const g = r.matched[f];
    g && (e.matched.find((s) => kr(s, g)) ? o.push(g) : t.push(g));
    const c = e.matched[f];
    c && (r.matched.find((s) => kr(s, c)) || n.push(c));
  }
  return [t, o, n];
}
function ls() {
  return vr(no);
}
function Cd(e) {
  return vr(Zo);
}
const Qr = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [o, n] of r)
    t[o] = n;
  return t;
}, Sd = {}, $d = {
  class: "w-full flex flex-col items-center justify-center min-h-[55vh] md:min-h-[65vh] px-4",
  style: { "background-image": 'url("/images/landing-hero.jpg")', "background-size": "cover", "background-position": "center" }
};
function _d(e, r) {
  return Z(), ue("div", $d, r[0] || (r[0] = [
    z("h1", { class: "text-4xl md:text-6xl text-center font-bold text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.15)]" }, " Welcome to Nerdy Nutrient ", -1),
    z("h2", { class: "text-xl md:text-2xl max-w-2xl mt-10 text-white text-center bg-black/30 p-6 rounded-2xl" }, " Explore and compare the nutritional value of foods using official UK government data from the Composition of Foods Integrated Dataset. ", -1)
  ]));
}
const Rd = /* @__PURE__ */ Qr(Sd, [["render", _d]]);
var Id = ({ dt: e }) => `
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
`, xd = {
  root: "p-card p-component",
  header: "p-card-header",
  body: "p-card-body",
  caption: "p-card-caption",
  title: "p-card-title",
  subtitle: "p-card-subtitle",
  content: "p-card-content",
  footer: "p-card-footer"
}, Td = pe.extend({
  name: "card",
  style: Id,
  classes: xd
}), Pd = {
  name: "BaseCard",
  extends: Pt,
  style: Td,
  provide: function() {
    return {
      $pcCard: this,
      $parentInstance: this
    };
  }
}, Yt = {
  name: "Card",
  extends: Pd,
  inheritAttrs: !1
};
function Ed(e, r, t, o, n, d) {
  return Z(), ue("div", fe({
    class: e.cx("root")
  }, e.ptmi("root")), [e.$slots.header ? (Z(), ue("div", fe({
    key: 0,
    class: e.cx("header")
  }, e.ptm("header")), [Ae(e.$slots, "header")], 16)) : cr("", !0), z("div", fe({
    class: e.cx("body")
  }, e.ptm("body")), [e.$slots.title || e.$slots.subtitle ? (Z(), ue("div", fe({
    key: 0,
    class: e.cx("caption")
  }, e.ptm("caption")), [e.$slots.title ? (Z(), ue("div", fe({
    key: 0,
    class: e.cx("title")
  }, e.ptm("title")), [Ae(e.$slots, "title")], 16)) : cr("", !0), e.$slots.subtitle ? (Z(), ue("div", fe({
    key: 1,
    class: e.cx("subtitle")
  }, e.ptm("subtitle")), [Ae(e.$slots, "subtitle")], 16)) : cr("", !0)], 16)) : cr("", !0), z("div", fe({
    class: e.cx("content")
  }, e.ptm("content")), [Ae(e.$slots, "content")], 16), e.$slots.footer ? (Z(), ue("div", fe({
    key: 1,
    class: e.cx("footer")
  }, e.ptm("footer")), [Ae(e.$slots, "footer")], 16)) : cr("", !0)], 16)], 16);
}
Yt.render = Ed;
const Od = /* @__PURE__ */ Ye({
  __name: "HomePage",
  setup(e) {
    return (r, t) => (Z(), mr(re(Yt), null, {
      title: Ie(() => t[0] || (t[0] = [
        z("h1", null, "Home page", -1)
      ])),
      content: Ie(() => t[1] || (t[1] = [
        z("p", { class: "m-0" }, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! ", -1)
      ])),
      _: 1
    }));
  }
}), Ad = {};
function Dd(e, r) {
  return Z(), ue("div");
}
const cs = /* @__PURE__ */ Qr(Ad, [["render", Dd]]), Bd = {}, Nd = { class: "loader" };
function Ld(e, r) {
  return Z(), ue("div", Nd);
}
const Md = /* @__PURE__ */ Qr(Bd, [["render", Ld], ["__scopeId", "data-v-40957e17"]]), Ud = { class: "container" }, Hd = /* @__PURE__ */ Ye({
  __name: "PageLoader",
  props: {
    isLoading: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (r, t) => (Z(), ue("div", Ud, [
      r.isLoading ? (Z(), mr(Md, {
        key: 0,
        class: "loader"
      })) : Ae(r.$slots, "default", { key: 1 }, void 0, !0)
    ]));
  }
}), Fd = /* @__PURE__ */ Qr(Hd, [["__scopeId", "data-v-ae969c7d"]]), jd = { key: 0 }, Vd = { key: 0 }, qd = { key: 1 }, zd = /* @__PURE__ */ Ye({
  __name: "AccountPage",
  setup(e) {
    const r = ve(!0), o = Cd().query.del_token, n = ve(!1), d = ve({
      open: !1,
      title: "",
      description: ""
    }), f = ve("");
    Zt(() => {
      o && c();
    });
    async function g() {
      try {
        const u = await fetch("https://localhost:443/auth/request-delete", {
          method: "POST",
          credentials: "include"
        }), l = await u.json();
        if (!u.ok)
          throw new Error(l.error || "Failed to send deletion email.");
        if (!u.ok)
          throw new Error(l.error || "Failed to send deletion email.");
        n.value = !0;
      } catch (u) {
        n.value = !1, d.value = {
          open: !0,
          title: "Error",
          description: "Something went wrong, please try again later. We have been notified of the issue."
        }, u instanceof Error ? console.error(`Error sending deletion email: ${u.message}`) : console.error("Error sending deletion email: Unknown error occurred");
      }
    }
    async function c() {
      try {
        const u = await fetch("https://localhost:443/auth/delete-account", {
          method: "DELETE",
          credentials: "include",
          headers: {
            "X-Delete-Token": o,
            "Content-Type": "application/json"
          }
        }), l = await u.json();
        if (!u.ok)
          throw new Error(l.error || "Failed to delete account.");
        await Qo.signOut(), window.location.href = "/goodbye";
      } catch (u) {
        d.value = {
          open: !0,
          title: "Error",
          description: "Something went wrong, please try again later. We have been notified of the issue."
        }, console.error("Failed to delete account: ", u);
      }
    }
    async function s() {
      try {
        const u = await fetch("https://localhost:443/auth/change-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include",
          body: JSON.stringify({ email: f.value })
        }), l = await u.json();
        if (!u.ok)
          throw new Error(l.message || "Failed to update email");
        console.log("✅ Email change request sent:", l.message);
      } catch (u) {
        console.error("Error updating email:", u);
      }
    }
    return (u, l) => (Z(), mr(Fd, { isLoading: re(r) }, {
      default: Ie(() => [
        re(o) ? cr("", !0) : (Z(), ue("div", jd, [
          l[8] || (l[8] = z("h1", null, "Account", -1)),
          l[9] || (l[9] = z("p", null, "This is your account page.", -1)),
          z("section", null, [
            l[3] || (l[3] = z("h2", null, "Change your email", -1)),
            l[4] || (l[4] = z("p", null, " You will receive an email to your old email to verify your new email address. Please click on the email link to update your email. ", -1)),
            z("form", {
              onSubmit: wa(s, ["prevent"])
            }, [
              l[1] || (l[1] = z("label", { for: "email" }, "New email", -1)),
              ya(z("input", {
                "onUpdate:modelValue": l[0] || (l[0] = (a) => br(f) ? f.value = a : null),
                type: "email",
                id: "email",
                name: "email",
                required: ""
              }, null, 512), [
                [Is, re(f)]
              ]),
              l[2] || (l[2] = z("button", { type: "submit" }, "Change email", -1))
            ], 32)
          ]),
          z("section", null, [
            l[7] || (l[7] = z("h2", null, "Delete your account", -1)),
            re(n) ? (Z(), ue("div", qd, l[6] || (l[6] = [
              z("p", null, " We have sent you an email to verify your account deletion. Please check your inbox and click on the verification link. ", -1)
            ]))) : (Z(), ue("div", Vd, [
              l[5] || (l[5] = z("p", null, " You will receive an email to verify your account deletion. Please click on the email link to delete your account. ", -1)),
              z("button", {
                type: "submit",
                onClick: g
              }, "Send deletion email")
            ]))
          ]),
          Ge(cs, {
            title: re(d).title,
            isOpen: re(d).open
          }, {
            description: Ie(() => [
              z("p", null, Ke(re(d).description), 1)
            ]),
            _: 1
          }, 8, ["title", "isOpen"])
        ]))
      ]),
      _: 1
    }, 8, ["isLoading"]));
  }
});
var wo = {}, me = {}, Fe = {}, Tr = {}, at = {}, ur = {}, Mi;
function Wd() {
  if (Mi) return ur;
  Mi = 1;
  var e = ur && ur.__awaiter || function(o, n, d, f) {
    function g(c) {
      return c instanceof d ? c : new d(function(s) {
        s(c);
      });
    }
    return new (d || (d = Promise))(function(c, s) {
      function u(i) {
        try {
          a(f.next(i));
        } catch (h) {
          s(h);
        }
      }
      function l(i) {
        try {
          a(f.throw(i));
        } catch (h) {
          s(h);
        }
      }
      function a(i) {
        i.done ? c(i.value) : g(i.value).then(u, l);
      }
      a((f = f.apply(o, n || [])).next());
    });
  }, r = ur && ur.__generator || function(o, n) {
    var d = {
      label: 0,
      sent: function() {
        if (c[0] & 1) throw c[1];
        return c[1];
      },
      trys: [],
      ops: []
    }, f, g, c, s;
    return s = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
      return this;
    }), s;
    function u(a) {
      return function(i) {
        return l([a, i]);
      };
    }
    function l(a) {
      if (f) throw new TypeError("Generator is already executing.");
      for (; d; )
        try {
          if (f = 1, g && (c = a[0] & 2 ? g.return : a[0] ? g.throw || ((c = g.return) && c.call(g), 0) : g.next) && !(c = c.call(g, a[1])).done)
            return c;
          switch (g = 0, c && (a = [a[0] & 2, c.value]), a[0]) {
            case 0:
            case 1:
              c = a;
              break;
            case 4:
              return d.label++, { value: a[1], done: !1 };
            case 5:
              d.label++, g = a[1], a = [0];
              continue;
            case 7:
              a = d.ops.pop(), d.trys.pop();
              continue;
            default:
              if (c = d.trys, !(c = c.length > 0 && c[c.length - 1]) && (a[0] === 6 || a[0] === 2)) {
                d = 0;
                continue;
              }
              if (a[0] === 3 && (!c || a[1] > c[0] && a[1] < c[3])) {
                d.label = a[1];
                break;
              }
              if (a[0] === 6 && d.label < c[1]) {
                d.label = c[1], c = a;
                break;
              }
              if (c && d.label < c[2]) {
                d.label = c[2], d.ops.push(a);
                break;
              }
              c[2] && d.ops.pop(), d.trys.pop();
              continue;
          }
          a = n.call(o, d);
        } catch (i) {
          a = [6, i], g = 0;
        } finally {
          f = c = 0;
        }
      if (a[0] & 5) throw a[1];
      return { value: a[0] ? a[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(ur, "__esModule", { value: !0 }), ur.normaliseRecipeModuleConfig = void 0;
  function t(o) {
    var n = this, d = o.preAPIHook;
    d === void 0 && (d = function(g) {
      return e(n, void 0, void 0, function() {
        return r(this, function(c) {
          return [2, g];
        });
      });
    });
    var f = o.postAPIHook;
    return f === void 0 && (f = function() {
      return e(n, void 0, void 0, function() {
        return r(this, function(g) {
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
      preAPIHook: d,
      postAPIHook: f
    };
  }
  return ur.normaliseRecipeModuleConfig = t, ur;
}
var Ui;
function en() {
  if (Ui) return at;
  Ui = 1, Object.defineProperty(at, "__esModule", { value: !0 }), at.normaliseAuthRecipe = void 0;
  var e = Wd();
  function r(t) {
    return (0, e.normaliseRecipeModuleConfig)(t);
  }
  return at.normaliseAuthRecipe = r, at;
}
var Hi;
function Gd() {
  if (Hi) return Tr;
  Hi = 1;
  var e = Tr && Tr.__assign || function() {
    return e = Object.assign || function(o) {
      for (var n, d = 1, f = arguments.length; d < f; d++) {
        n = arguments[d];
        for (var g in n) Object.prototype.hasOwnProperty.call(n, g) && (o[g] = n[g]);
      }
      return o;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(Tr, "__esModule", { value: !0 }), Tr.normaliseUserInput = void 0;
  var r = en();
  function t(o) {
    var n = e(
      {
        functions: function(d) {
          return d;
        }
      },
      o.override
    );
    return e(e({}, (0, r.normaliseAuthRecipe)(o)), { override: n });
  }
  return Tr.normaliseUserInput = t, Tr;
}
var je = {}, Ve = {}, Pr = {}, Fi;
function Xd() {
  return Fi || (Fi = 1, Object.defineProperty(Pr, "__esModule", { value: !0 }), Pr.supported_fdi = Pr.package_version = void 0, Pr.package_version = "0.14.0", Pr.supported_fdi = ["3.1", "4.0"]), Pr;
}
var Ft = {}, Co = {}, ji;
function Kd() {
  return ji || (ji = 1, function(e) {
    function r(o) {
      for (var n in o) e.hasOwnProperty(n) || (e[n] = o[n]);
    }
    e.__esModule = !0;
    let t = Ma();
    t.default !== void 0 ? r(t) : r({
      default: t,
      ...t
    });
  }(Co)), Co;
}
var Vi;
function ds() {
  if (Vi) return Ft;
  Vi = 1, Object.defineProperty(Ft, "__esModule", { value: !0 });
  var e = Kd();
  return Ft.default = e.STGeneralError, Ft;
}
var qi;
function rn() {
  if (qi) return Ve;
  qi = 1;
  var e = Ve && Ve.__assign || function() {
    return e = Object.assign || function(g) {
      for (var c, s = 1, u = arguments.length; s < u; s++) {
        c = arguments[s];
        for (var l in c) Object.prototype.hasOwnProperty.call(c, l) && (g[l] = c[l]);
      }
      return g;
    }, e.apply(this, arguments);
  }, r = Ve && Ve.__awaiter || function(g, c, s, u) {
    function l(a) {
      return a instanceof s ? a : new s(function(i) {
        i(a);
      });
    }
    return new (s || (s = Promise))(function(a, i) {
      function h(p) {
        try {
          y(u.next(p));
        } catch (b) {
          i(b);
        }
      }
      function m(p) {
        try {
          y(u.throw(p));
        } catch (b) {
          i(b);
        }
      }
      function y(p) {
        p.done ? a(p.value) : l(p.value).then(h, m);
      }
      y((u = u.apply(g, c || [])).next());
    });
  }, t = Ve && Ve.__generator || function(g, c) {
    var s = {
      label: 0,
      sent: function() {
        if (a[0] & 1) throw a[1];
        return a[1];
      },
      trys: [],
      ops: []
    }, u, l, a, i;
    return i = { next: h(0), throw: h(1), return: h(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
      return this;
    }), i;
    function h(y) {
      return function(p) {
        return m([y, p]);
      };
    }
    function m(y) {
      if (u) throw new TypeError("Generator is already executing.");
      for (; s; )
        try {
          if (u = 1, l && (a = y[0] & 2 ? l.return : y[0] ? l.throw || ((a = l.return) && a.call(l), 0) : l.next) && !(a = a.call(l, y[1])).done)
            return a;
          switch (l = 0, a && (y = [y[0] & 2, a.value]), y[0]) {
            case 0:
            case 1:
              a = y;
              break;
            case 4:
              return s.label++, { value: y[1], done: !1 };
            case 5:
              s.label++, l = y[1], y = [0];
              continue;
            case 7:
              y = s.ops.pop(), s.trys.pop();
              continue;
            default:
              if (a = s.trys, !(a = a.length > 0 && a[a.length - 1]) && (y[0] === 6 || y[0] === 2)) {
                s = 0;
                continue;
              }
              if (y[0] === 3 && (!a || y[1] > a[0] && y[1] < a[3])) {
                s.label = y[1];
                break;
              }
              if (y[0] === 6 && s.label < a[1]) {
                s.label = a[1], a = y;
                break;
              }
              if (a && s.label < a[2]) {
                s.label = a[2], s.ops.push(y);
                break;
              }
              a[2] && s.ops.pop(), s.trys.pop();
              continue;
          }
          y = c.call(g, s);
        } catch (p) {
          y = [6, p], l = 0;
        } finally {
          u = a = 0;
        }
      if (y[0] & 5) throw y[1];
      return { value: y[0] ? y[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Ve, "__esModule", { value: !0 });
  var o = Ba(), n = Xd(), d = ds(), f = (
    /** @class */
    function() {
      function g(s, u) {
        var l = this;
        this.recipeId = s, this.appInfo = u, this.get = function(a, i, h, m, y, p) {
          return r(l, void 0, void 0, function() {
            var b, w;
            return t(this, function(v) {
              switch (v.label) {
                case 0:
                  return [
                    4,
                    this.fetch(
                      this.getFullUrl(a, i, m),
                      e({ method: "GET" }, h),
                      y,
                      p
                    )
                  ];
                case 1:
                  return b = v.sent(), [4, this.getResponseJsonOrThrowGeneralError(b)];
                case 2:
                  return w = v.sent(), [
                    2,
                    {
                      jsonBody: w,
                      fetchResponse: b
                    }
                  ];
              }
            });
          });
        }, this.post = function(a, i, h, m, y) {
          return r(l, void 0, void 0, function() {
            var p, b;
            return t(this, function(w) {
              switch (w.label) {
                case 0:
                  if (h.body === void 0)
                    throw new Error("Post request must have a body");
                  return [
                    4,
                    this.fetch(
                      this.getFullUrl(a, i),
                      e({ method: "POST" }, h),
                      m,
                      y
                    )
                  ];
                case 1:
                  return p = w.sent(), [4, this.getResponseJsonOrThrowGeneralError(p)];
                case 2:
                  return b = w.sent(), [
                    2,
                    {
                      jsonBody: b,
                      fetchResponse: p
                    }
                  ];
              }
            });
          });
        }, this.delete = function(a, i, h, m, y) {
          return r(l, void 0, void 0, function() {
            var p, b;
            return t(this, function(w) {
              switch (w.label) {
                case 0:
                  return [
                    4,
                    this.fetch(
                      this.getFullUrl(a, i),
                      e({ method: "DELETE" }, h),
                      m,
                      y
                    )
                  ];
                case 1:
                  return p = w.sent(), [4, this.getResponseJsonOrThrowGeneralError(p)];
                case 2:
                  return b = w.sent(), [
                    2,
                    {
                      jsonBody: b,
                      fetchResponse: p
                    }
                  ];
              }
            });
          });
        }, this.put = function(a, i, h, m, y) {
          return r(l, void 0, void 0, function() {
            var p, b;
            return t(this, function(w) {
              switch (w.label) {
                case 0:
                  return [
                    4,
                    this.fetch(
                      this.getFullUrl(a, i),
                      e({ method: "PUT" }, h),
                      m,
                      y
                    )
                  ];
                case 1:
                  return p = w.sent(), [4, this.getResponseJsonOrThrowGeneralError(p)];
                case 2:
                  return b = w.sent(), [
                    2,
                    {
                      jsonBody: b,
                      fetchResponse: p
                    }
                  ];
              }
            });
          });
        }, this.fetch = function(a, i, h, m) {
          return r(l, void 0, void 0, function() {
            var y, p, b, w, v, k;
            return t(this, function(C) {
              switch (C.label) {
                case 0:
                  return i === void 0 ? y = {} : y = i.headers, [
                    4,
                    this.callPreAPIHook({
                      preAPIHook: h,
                      url: a,
                      requestInit: e(e({}, i), {
                        headers: e(e({}, y), {
                          "fdi-version": n.supported_fdi.join(","),
                          "Content-Type": "application/json",
                          rid: this.recipeId
                        })
                      })
                    })
                  ];
                case 1:
                  return p = C.sent(), b = p.requestInit, w = p.url, [4, fetch(w, b)];
                case 2:
                  if (v = C.sent(), v.status >= 300)
                    throw v;
                  return m === void 0 ? [3, 4] : (k = v.clone(), [
                    4,
                    m({
                      requestInit: b,
                      url: a,
                      fetchResponse: k
                    })
                  ]);
                case 3:
                  C.sent(), C.label = 4;
                case 4:
                  return [2, v];
              }
            });
          });
        }, this.callPreAPIHook = function(a) {
          return r(l, void 0, void 0, function() {
            var i;
            return t(this, function(h) {
              switch (h.label) {
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
                  return i = h.sent(), [2, i];
              }
            });
          });
        }, this.getFullUrl = function(a, i, h) {
          var m = l.appInfo.apiBasePath.getAsStringDangerous();
          a !== void 0 && a !== "public" && (m = "".concat(m, "/").concat(a));
          var y = new o.default(i), p = "".concat(l.appInfo.apiDomain.getAsStringDangerous()).concat(m).concat(y.getAsStringDangerous());
          return h === void 0 ? p : p + "?" + new URLSearchParams(h);
        }, this.getResponseJsonOrThrowGeneralError = function(a) {
          return r(l, void 0, void 0, function() {
            var i, h;
            return t(this, function(m) {
              switch (m.label) {
                case 0:
                  return [4, a.clone().json()];
                case 1:
                  if (i = m.sent(), i.status === "GENERAL_ERROR")
                    throw h = i.message === void 0 ? "No Error Message Provided" : i.message, new d.default(h);
                  return [2, i];
              }
            });
          });
        };
      }
      var c;
      return c = g, g.preparePreAPIHook = function(s) {
        var u = s.recipePreAPIHook, l = s.action, a = s.options, i = s.userContext;
        return function(h) {
          return r(void 0, void 0, void 0, function() {
            var m;
            return t(c, function(y) {
              switch (y.label) {
                case 0:
                  return [
                    4,
                    u(
                      e(e({}, h), { action: l, userContext: i })
                    )
                  ];
                case 1:
                  return m = y.sent(), a === void 0 || a.preAPIHook === void 0 ? [2, m] : [
                    2,
                    a.preAPIHook({
                      url: m.url,
                      requestInit: m.requestInit,
                      userContext: i
                    })
                  ];
              }
            });
          });
        };
      }, g.preparePostAPIHook = function(s) {
        var u = s.recipePostAPIHook, l = s.action, a = s.userContext;
        return function(i) {
          return r(void 0, void 0, void 0, function() {
            return t(c, function(h) {
              switch (h.label) {
                case 0:
                  return [
                    4,
                    u(
                      e(e({}, i), { userContext: a, action: l })
                    )
                  ];
                case 1:
                  return h.sent(), [
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
  return Ve.default = f, Ve;
}
var zi;
function Yd() {
  if (zi) return je;
  zi = 1;
  var e = je && je.__awaiter || function(d, f, g, c) {
    function s(u) {
      return u instanceof g ? u : new g(function(l) {
        l(u);
      });
    }
    return new (g || (g = Promise))(function(u, l) {
      function a(m) {
        try {
          h(c.next(m));
        } catch (y) {
          l(y);
        }
      }
      function i(m) {
        try {
          h(c.throw(m));
        } catch (y) {
          l(y);
        }
      }
      function h(m) {
        m.done ? u(m.value) : s(m.value).then(a, i);
      }
      h((c = c.apply(d, f || [])).next());
    });
  }, r = je && je.__generator || function(d, f) {
    var g = {
      label: 0,
      sent: function() {
        if (u[0] & 1) throw u[1];
        return u[1];
      },
      trys: [],
      ops: []
    }, c, s, u, l;
    return l = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (l[Symbol.iterator] = function() {
      return this;
    }), l;
    function a(h) {
      return function(m) {
        return i([h, m]);
      };
    }
    function i(h) {
      if (c) throw new TypeError("Generator is already executing.");
      for (; g; )
        try {
          if (c = 1, s && (u = h[0] & 2 ? s.return : h[0] ? s.throw || ((u = s.return) && u.call(s), 0) : s.next) && !(u = u.call(s, h[1])).done)
            return u;
          switch (s = 0, u && (h = [h[0] & 2, u.value]), h[0]) {
            case 0:
            case 1:
              u = h;
              break;
            case 4:
              return g.label++, { value: h[1], done: !1 };
            case 5:
              g.label++, s = h[1], h = [0];
              continue;
            case 7:
              h = g.ops.pop(), g.trys.pop();
              continue;
            default:
              if (u = g.trys, !(u = u.length > 0 && u[u.length - 1]) && (h[0] === 6 || h[0] === 2)) {
                g = 0;
                continue;
              }
              if (h[0] === 3 && (!u || h[1] > u[0] && h[1] < u[3])) {
                g.label = h[1];
                break;
              }
              if (h[0] === 6 && g.label < u[1]) {
                g.label = u[1], u = h;
                break;
              }
              if (u && g.label < u[2]) {
                g.label = u[2], g.ops.push(h);
                break;
              }
              u[2] && g.ops.pop(), g.trys.pop();
              continue;
          }
          h = f.call(d, g);
        } catch (m) {
          h = [6, m], s = 0;
        } finally {
          c = u = 0;
        }
      if (h[0] & 5) throw h[1];
      return { value: h[0] ? h[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(je, "__esModule", { value: !0 }), je.getRecipeImplementation = void 0;
  var t = rn(), o = Me();
  function n(d) {
    var f = new t.default(d.recipeId, d.appInfo);
    return {
      getTenantId: function() {
        var g = (0, o.getQueryParams)("tenantId");
        if ((g == null ? void 0 : g.trim()) !== "")
          return g;
      },
      getLoginMethods: function(g) {
        var c = g.tenantId, s = g.options, u = g.userContext;
        return e(this, void 0, void 0, function() {
          var l, a, i, h, m;
          return r(this, function(y) {
            switch (y.label) {
              case 0:
                return l = {}, d.clientType !== void 0 && (l.clientType = d.clientType), [
                  4,
                  f.get(
                    c,
                    "/loginmethods",
                    {},
                    l,
                    t.default.preparePreAPIHook({
                      recipePreAPIHook: d.preAPIHook,
                      action: "GET_LOGIN_METHODS",
                      options: s,
                      userContext: u
                    }),
                    t.default.preparePostAPIHook({
                      recipePostAPIHook: d.postAPIHook,
                      action: "GET_LOGIN_METHODS",
                      userContext: u
                    })
                  )
                ];
              case 1:
                return a = y.sent(), i = a.jsonBody, h = a.fetchResponse, i.firstFactors === void 0 ? (m = [], i.emailPassword.enabled && m.push("emailpassword"), i.thirdParty.enabled && m.push("thirdparty"), i.passwordless.enabled && (m.push("otp-email"), m.push("otp-phone"), m.push("link-email"), m.push("link-phone"))) : m = i.firstFactors, [
                  2,
                  {
                    status: "OK",
                    thirdParty: {
                      providers: i.thirdParty.providers
                    },
                    firstFactors: m,
                    fetchResponse: h
                  }
                ];
            }
          });
        });
      }
    };
  }
  return je.default = n, je.getRecipeImplementation = n, je;
}
var qe = {}, Wi;
function tn() {
  if (Wi) return qe;
  Wi = 1;
  var e = qe && qe.__extends || /* @__PURE__ */ function() {
    var f = function(g, c) {
      return f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, u) {
        s.__proto__ = u;
      } || function(s, u) {
        for (var l in u) Object.prototype.hasOwnProperty.call(u, l) && (s[l] = u[l]);
      }, f(g, c);
    };
    return function(g, c) {
      if (typeof c != "function" && c !== null)
        throw new TypeError("Class extends value " + String(c) + " is not a constructor or null");
      f(g, c);
      function s() {
        this.constructor = g;
      }
      g.prototype = c === null ? Object.create(c) : (s.prototype = c.prototype, new s());
    };
  }(), r = qe && qe.__awaiter || function(f, g, c, s) {
    function u(l) {
      return l instanceof c ? l : new c(function(a) {
        a(l);
      });
    }
    return new (c || (c = Promise))(function(l, a) {
      function i(y) {
        try {
          m(s.next(y));
        } catch (p) {
          a(p);
        }
      }
      function h(y) {
        try {
          m(s.throw(y));
        } catch (p) {
          a(p);
        }
      }
      function m(y) {
        y.done ? l(y.value) : u(y.value).then(i, h);
      }
      m((s = s.apply(f, g || [])).next());
    });
  }, t = qe && qe.__generator || function(f, g) {
    var c = {
      label: 0,
      sent: function() {
        if (l[0] & 1) throw l[1];
        return l[1];
      },
      trys: [],
      ops: []
    }, s, u, l, a;
    return a = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
      return this;
    }), a;
    function i(m) {
      return function(y) {
        return h([m, y]);
      };
    }
    function h(m) {
      if (s) throw new TypeError("Generator is already executing.");
      for (; c; )
        try {
          if (s = 1, u && (l = m[0] & 2 ? u.return : m[0] ? u.throw || ((l = u.return) && l.call(u), 0) : u.next) && !(l = l.call(u, m[1])).done)
            return l;
          switch (u = 0, l && (m = [m[0] & 2, l.value]), m[0]) {
            case 0:
            case 1:
              l = m;
              break;
            case 4:
              return c.label++, { value: m[1], done: !1 };
            case 5:
              c.label++, u = m[1], m = [0];
              continue;
            case 7:
              m = c.ops.pop(), c.trys.pop();
              continue;
            default:
              if (l = c.trys, !(l = l.length > 0 && l[l.length - 1]) && (m[0] === 6 || m[0] === 2)) {
                c = 0;
                continue;
              }
              if (m[0] === 3 && (!l || m[1] > l[0] && m[1] < l[3])) {
                c.label = m[1];
                break;
              }
              if (m[0] === 6 && c.label < l[1]) {
                c.label = l[1], l = m;
                break;
              }
              if (l && c.label < l[2]) {
                c.label = l[2], c.ops.push(m);
                break;
              }
              l[2] && c.ops.pop(), c.trys.pop();
              continue;
          }
          m = g.call(f, c);
        } catch (y) {
          m = [6, y], u = 0;
        } finally {
          s = l = 0;
        }
      if (m[0] & 5) throw m[1];
      return { value: m[0] ? m[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(qe, "__esModule", { value: !0 });
  var o = La(), n = Fa(), d = (
    /** @class */
    function(f) {
      e(g, f);
      function g(c) {
        var s = f.call(this, c) || this;
        return s.signOut = function(u) {
          return r(s, void 0, void 0, function() {
            return t(this, function(l) {
              switch (l.label) {
                case 0:
                  return [
                    4,
                    n.default.getInstanceOrThrow().signOut({
                      userContext: u.userContext
                    })
                  ];
                case 1:
                  return [2, l.sent()];
              }
            });
          });
        }, s;
      }
      return g;
    }(o.default)
  );
  return qe.default = d, qe;
}
var Gi;
function io() {
  if (Gi) return Fe;
  Gi = 1;
  var e = Fe && Fe.__extends || /* @__PURE__ */ function() {
    var c = function(s, u) {
      return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(l, a) {
        l.__proto__ = a;
      } || function(l, a) {
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (l[i] = a[i]);
      }, c(s, u);
    };
    return function(s, u) {
      if (typeof u != "function" && u !== null)
        throw new TypeError("Class extends value " + String(u) + " is not a constructor or null");
      c(s, u);
      function l() {
        this.constructor = s;
      }
      s.prototype = u === null ? Object.create(u) : (l.prototype = u.prototype, new l());
    };
  }(), r = Fe && Fe.__assign || function() {
    return r = Object.assign || function(c) {
      for (var s, u = 1, l = arguments.length; u < l; u++) {
        s = arguments[u];
        for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (c[a] = s[a]);
      }
      return c;
    }, r.apply(this, arguments);
  };
  Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.Recipe = void 0;
  var t = Gd(), o = to(), n = Yd(), d = Me(), f = tn(), g = (
    /** @class */
    function(c) {
      e(s, c);
      function s(u) {
        var l = c.call(this, (0, t.normaliseUserInput)(u)) || this, a = new o.default(
          (0, n.default)({
            recipeId: l.config.recipeId,
            appInfo: l.config.appInfo,
            clientType: l.config.clientType,
            preAPIHook: l.config.preAPIHook,
            postAPIHook: l.config.postAPIHook
          })
        );
        return l.recipeImplementation = a.override(l.config.override.functions).build(), l;
      }
      return s.init = function(u) {
        return function(l, a) {
          return s.instance = new s(
            r(r({}, u), { recipeId: s.RECIPE_ID, appInfo: l, clientType: a })
          ), s.instance;
        };
      }, s.getInstanceOrThrow = function() {
        if (s.instance === void 0) {
          var u = "No instance of Multitenancy found. Ensure that 'SuperTokens.init' method has been called.";
          throw u = (0, d.checkForSSRErrorAndAppendIfNeeded)(u), Error(u);
        }
        return s.instance;
      }, s.reset = function() {
        (0, d.isTest)() && (s.instance = void 0);
      }, s.RECIPE_ID = "multitenancy", s;
    }(f.default)
  );
  return Fe.Recipe = g, Fe.default = g, Fe;
}
var ze = {}, Er = {}, Xi;
function Qd() {
  if (Xi) return Er;
  Xi = 1;
  var e = Er && Er.__assign || function() {
    return e = Object.assign || function(o) {
      for (var n, d = 1, f = arguments.length; d < f; d++) {
        n = arguments[d];
        for (var g in n) Object.prototype.hasOwnProperty.call(n, g) && (o[g] = n[g]);
      }
      return o;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(Er, "__esModule", { value: !0 }), Er.normaliseUserInput = void 0;
  var r = en();
  function t(o) {
    var n = e(
      {
        functions: function(d) {
          return d;
        }
      },
      o.override
    );
    return e(e({}, (0, r.normaliseAuthRecipe)(o)), { override: n });
  }
  return Er.normaliseUserInput = t, Er;
}
var Pe = {}, Ki;
function Jd() {
  if (Ki) return Pe;
  Ki = 1;
  var e = Pe && Pe.__assign || function() {
    return e = Object.assign || function(c) {
      for (var s, u = 1, l = arguments.length; u < l; u++) {
        s = arguments[u];
        for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (c[a] = s[a]);
      }
      return c;
    }, e.apply(this, arguments);
  }, r = Pe && Pe.__awaiter || function(c, s, u, l) {
    function a(i) {
      return i instanceof u ? i : new u(function(h) {
        h(i);
      });
    }
    return new (u || (u = Promise))(function(i, h) {
      function m(b) {
        try {
          p(l.next(b));
        } catch (w) {
          h(w);
        }
      }
      function y(b) {
        try {
          p(l.throw(b));
        } catch (w) {
          h(w);
        }
      }
      function p(b) {
        b.done ? i(b.value) : a(b.value).then(m, y);
      }
      p((l = l.apply(c, s || [])).next());
    });
  }, t = Pe && Pe.__generator || function(c, s) {
    var u = {
      label: 0,
      sent: function() {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: []
    }, l, a, i, h;
    return h = { next: m(0), throw: m(1), return: m(2) }, typeof Symbol == "function" && (h[Symbol.iterator] = function() {
      return this;
    }), h;
    function m(p) {
      return function(b) {
        return y([p, b]);
      };
    }
    function y(p) {
      if (l) throw new TypeError("Generator is already executing.");
      for (; u; )
        try {
          if (l = 1, a && (i = p[0] & 2 ? a.return : p[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, p[1])).done)
            return i;
          switch (a = 0, i && (p = [p[0] & 2, i.value]), p[0]) {
            case 0:
            case 1:
              i = p;
              break;
            case 4:
              return u.label++, { value: p[1], done: !1 };
            case 5:
              u.label++, a = p[1], p = [0];
              continue;
            case 7:
              p = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (i = u.trys, !(i = i.length > 0 && i[i.length - 1]) && (p[0] === 6 || p[0] === 2)) {
                u = 0;
                continue;
              }
              if (p[0] === 3 && (!i || p[1] > i[0] && p[1] < i[3])) {
                u.label = p[1];
                break;
              }
              if (p[0] === 6 && u.label < i[1]) {
                u.label = i[1], i = p;
                break;
              }
              if (i && u.label < i[2]) {
                u.label = i[2], u.ops.push(p);
                break;
              }
              i[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          p = s.call(c, u);
        } catch (b) {
          p = [6, b], a = 0;
        } finally {
          l = i = 0;
        }
      if (p[0] & 5) throw p[1];
      return { value: p[0] ? p[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Pe, "__esModule", { value: !0 }), Pe.getRecipeImplementation = void 0;
  var o = rn(), n = Me(), d = ds(), f = ro();
  function g(c) {
    var s = new o.default(c.recipeId, c.appInfo);
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
        return r(this, void 0, void 0, function() {
          var l;
          return t(this, function(a) {
            switch (a.label) {
              case 0:
                return l = JSON.stringify(e({}, u.state)), [
                  4,
                  f.WindowHandlerReference.getReferenceOrThrow().windowHandler.sessionStorage.setItem(
                    "supertokens-oauth-state-2",
                    l
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
        return r(this, void 0, void 0, function() {
          var l, a, i, h, m;
          return t(this, function(y) {
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
                return l = y.sent(), a = u.redirectURIOnProviderDashboard !== void 0 && u.frontendRedirectURI !== u.redirectURIOnProviderDashboard ? u.frontendRedirectURI : void 0, i = this.generateStateToSendToOAuthProvider({
                  frontendRedirectURI: a,
                  userContext: u.userContext
                }), h = Date.now() + 1e3 * 60 * 10, [
                  4,
                  this.setStateAndOtherInfoToStorage({
                    state: {
                      stateForAuthProvider: i,
                      thirdPartyId: u.thirdPartyId,
                      tenantId: u.tenantId,
                      expiresAt: h,
                      redirectURIOnProviderDashboard: u.redirectURIOnProviderDashboard || u.frontendRedirectURI,
                      shouldTryLinkingWithSessionUser: u.shouldTryLinkingWithSessionUser,
                      pkceCodeVerifier: l.pkceCodeVerifier
                    },
                    userContext: u.userContext
                  })
                ];
              case 2:
                return y.sent(), m = (0, n.appendQueryParamsToURL)(l.urlWithQueryParams, {
                  state: i
                }), [2, m];
            }
          });
        });
      },
      getAuthorisationURLFromBackend: function(u) {
        return r(this, void 0, void 0, function() {
          var l, a, i, h;
          return t(this, function(m) {
            switch (m.label) {
              case 0:
                return l = {
                  thirdPartyId: u.thirdPartyId,
                  redirectURIOnProviderDashboard: u.redirectURIOnProviderDashboard
                }, c.clientType !== void 0 && (l.clientType = c.clientType), [
                  4,
                  s.get(
                    u.tenantId,
                    "/authorisationurl",
                    {},
                    l,
                    o.default.preparePreAPIHook({
                      recipePreAPIHook: c.preAPIHook,
                      action: "GET_AUTHORISATION_URL",
                      options: u.options,
                      userContext: u.userContext
                    }),
                    o.default.preparePostAPIHook({
                      recipePostAPIHook: c.postAPIHook,
                      action: "GET_AUTHORISATION_URL",
                      userContext: u.userContext
                    })
                  )
                ];
              case 1:
                return a = m.sent(), i = a.jsonBody, h = a.fetchResponse, [
                  2,
                  {
                    status: "OK",
                    urlWithQueryParams: i.urlWithQueryParams,
                    pkceCodeVerifier: i.pkceCodeVerifier,
                    fetchResponse: h
                  }
                ];
            }
          });
        });
      },
      signInAndUp: function(u) {
        return r(this, void 0, void 0, function() {
          var l, a, i, h, m, y, p, b, w;
          return t(this, function(v) {
            switch (v.label) {
              case 0:
                return l = this.getStateAndOtherInfoFromStorage({
                  userContext: u.userContext
                }), a = this.getAuthStateFromURL({
                  userContext: u.userContext
                }), [
                  4,
                  this.verifyAndGetStateOrThrowError({
                    stateFromAuthProvider: a,
                    stateObjectFromStorage: l,
                    userContext: u.userContext
                  })
                ];
              case 1:
                if (i = v.sent(), h = this.getAuthErrorFromURL({
                  userContext: u.userContext
                }), h !== void 0)
                  throw new Error("Auth provider responded with error: ".concat(h));
                return m = (0, n.getAllQueryParams)(), y = Object.fromEntries(m), [
                  4,
                  s.post(
                    i.tenantId,
                    "/signinup",
                    {
                      body: JSON.stringify({
                        thirdPartyId: i.thirdPartyId,
                        clientType: c.clientType,
                        redirectURIInfo: {
                          redirectURIOnProviderDashboard: i.redirectURIOnProviderDashboard,
                          redirectURIQueryParams: y,
                          pkceCodeVerifier: i.pkceCodeVerifier
                        },
                        shouldTryLinkingWithSessionUser: i.shouldTryLinkingWithSessionUser
                      })
                    },
                    o.default.preparePreAPIHook({
                      recipePreAPIHook: c.preAPIHook,
                      action: "THIRD_PARTY_SIGN_IN_UP",
                      options: u.options,
                      userContext: u.userContext
                    }),
                    o.default.preparePostAPIHook({
                      recipePostAPIHook: c.postAPIHook,
                      action: "THIRD_PARTY_SIGN_IN_UP",
                      userContext: u.userContext
                    })
                  )
                ];
              case 2:
                if (p = v.sent(), b = p.jsonBody, w = p.fetchResponse, b.status === "FIELD_ERROR")
                  throw new d.default(b.error);
                return b.status !== "OK" ? [
                  2,
                  e(e({}, b), { fetchResponse: w })
                ] : [
                  2,
                  e(
                    e(
                      { status: "OK" },
                      (0, n.normaliseUserResponse)("thirdparty", b)
                    ),
                    { fetchResponse: w }
                  )
                ];
            }
          });
        });
      },
      generateStateToSendToOAuthProvider: function(u) {
        var l = {
          state: "".concat(1e20).replace(/[018]/g, function(a) {
            return (parseInt(a) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> parseInt(a) / 4).toString(16);
          })
        };
        return u !== void 0 && u.frontendRedirectURI !== void 0 && (l.frontendRedirectURI = u.frontendRedirectURI), btoa(JSON.stringify(l));
      },
      verifyAndGetStateOrThrowError: function(u) {
        return r(this, void 0, void 0, function() {
          return t(this, function(l) {
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
        return (0, n.getQueryParams)("error");
      },
      getAuthStateFromURL: function() {
        var u = (0, n.getQueryParams)("state");
        return u === void 0 ? "" : u;
      }
    };
  }
  return Pe.default = g, Pe.getRecipeImplementation = g, Pe;
}
var Yi;
function Zd() {
  if (Yi) return ze;
  Yi = 1;
  var e = ze && ze.__extends || /* @__PURE__ */ function() {
    var c = function(s, u) {
      return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(l, a) {
        l.__proto__ = a;
      } || function(l, a) {
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (l[i] = a[i]);
      }, c(s, u);
    };
    return function(s, u) {
      if (typeof u != "function" && u !== null)
        throw new TypeError("Class extends value " + String(u) + " is not a constructor or null");
      c(s, u);
      function l() {
        this.constructor = s;
      }
      s.prototype = u === null ? Object.create(u) : (l.prototype = u.prototype, new l());
    };
  }(), r = ze && ze.__assign || function() {
    return r = Object.assign || function(c) {
      for (var s, u = 1, l = arguments.length; u < l; u++) {
        s = arguments[u];
        for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (c[a] = s[a]);
      }
      return c;
    }, r.apply(this, arguments);
  };
  Object.defineProperty(ze, "__esModule", { value: !0 }), ze.Recipe = void 0;
  var t = Qd(), o = to(), n = Jd(), d = Me(), f = tn(), g = (
    /** @class */
    function(c) {
      e(s, c);
      function s(u) {
        var l = c.call(this, (0, t.normaliseUserInput)(u)) || this, a = new o.default(
          (0, n.default)({
            recipeId: l.config.recipeId,
            appInfo: l.config.appInfo,
            clientType: l.config.clientType,
            preAPIHook: l.config.preAPIHook,
            postAPIHook: l.config.postAPIHook
          })
        );
        return l.recipeImplementation = a.override(l.config.override.functions).build(), l;
      }
      return s.init = function(u) {
        return function(l, a) {
          return s.instance = new s(
            r(r({}, u), { recipeId: s.RECIPE_ID, appInfo: l, clientType: a })
          ), s.instance;
        };
      }, s.getInstanceOrThrow = function() {
        if (s.instance === void 0) {
          var u = "No instance of ThirdParty found. Ensure that the 'ThirdParty.init' method is called within the 'SuperTokens.init' recipeList.";
          throw u = (0, d.checkForSSRErrorAndAppendIfNeeded)(u), Error(u);
        }
        return s.instance;
      }, s.reset = function() {
        (0, d.isTest)() && (s.instance = void 0);
      }, s.RECIPE_ID = "thirdparty", s;
    }(f.default)
  );
  return ze.Recipe = g, ze.default = g, ze;
}
var Qi;
function ef() {
  if (Qi) return me;
  Qi = 1;
  var e = me && me.__assign || function() {
    return e = Object.assign || function(a) {
      for (var i, h = 1, m = arguments.length; h < m; h++) {
        i = arguments[h];
        for (var y in i) Object.prototype.hasOwnProperty.call(i, y) && (a[y] = i[y]);
      }
      return a;
    }, e.apply(this, arguments);
  }, r = me && me.__awaiter || function(a, i, h, m) {
    function y(p) {
      return p instanceof h ? p : new h(function(b) {
        b(p);
      });
    }
    return new (h || (h = Promise))(function(p, b) {
      function w(C) {
        try {
          k(m.next(C));
        } catch (S) {
          b(S);
        }
      }
      function v(C) {
        try {
          k(m.throw(C));
        } catch (S) {
          b(S);
        }
      }
      function k(C) {
        C.done ? p(C.value) : y(C.value).then(w, v);
      }
      k((m = m.apply(a, i || [])).next());
    });
  }, t = me && me.__generator || function(a, i) {
    var h = {
      label: 0,
      sent: function() {
        if (p[0] & 1) throw p[1];
        return p[1];
      },
      trys: [],
      ops: []
    }, m, y, p, b;
    return b = { next: w(0), throw: w(1), return: w(2) }, typeof Symbol == "function" && (b[Symbol.iterator] = function() {
      return this;
    }), b;
    function w(k) {
      return function(C) {
        return v([k, C]);
      };
    }
    function v(k) {
      if (m) throw new TypeError("Generator is already executing.");
      for (; h; )
        try {
          if (m = 1, y && (p = k[0] & 2 ? y.return : k[0] ? y.throw || ((p = y.return) && p.call(y), 0) : y.next) && !(p = p.call(y, k[1])).done)
            return p;
          switch (y = 0, p && (k = [k[0] & 2, p.value]), k[0]) {
            case 0:
            case 1:
              p = k;
              break;
            case 4:
              return h.label++, { value: k[1], done: !1 };
            case 5:
              h.label++, y = k[1], k = [0];
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
          k = i.call(a, h);
        } catch (C) {
          k = [6, C], y = 0;
        } finally {
          m = p = 0;
        }
      if (k[0] & 5) throw k[1];
      return { value: k[0] ? k[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(me, "__esModule", { value: !0 }), me.signOut = me.signInAndUp = me.getAuthorisationURLWithQueryParamsAndSetState = me.getStateAndOtherInfoFromStorage = me.init = void 0;
  var o = Me(), n = io(), d = Zd(), f = (
    /** @class */
    function() {
      function a() {
      }
      return a.init = function(i) {
        return d.default.init(i);
      }, a.signOut = function(i) {
        return d.default.getInstanceOrThrow().signOut({
          userContext: (0, o.getNormalisedUserContext)(
            i == null ? void 0 : i.userContext
          )
        });
      }, a.getStateAndOtherInfoFromStorage = function(i) {
        return d.default.getInstanceOrThrow().recipeImplementation.getStateAndOtherInfoFromStorage(
          e(e({}, i), {
            userContext: (0, o.getNormalisedUserContext)(
              i == null ? void 0 : i.userContext
            )
          })
        );
      }, a.getAuthorisationURLWithQueryParamsAndSetState = function(i) {
        return r(this, void 0, void 0, function() {
          var h, m, y;
          return t(this, function(p) {
            switch (p.label) {
              case 0:
                return h = (0, o.getNormalisedUserContext)(i.userContext), m = d.default.getInstanceOrThrow(), [
                  4,
                  n.default.getInstanceOrThrow().recipeImplementation.getTenantId({ userContext: h })
                ];
              case 1:
                return y = p.sent(), [
                  2,
                  m.recipeImplementation.getAuthorisationURLWithQueryParamsAndSetState(
                    e(e({ tenantId: y }, i), {
                      shouldTryLinkingWithSessionUser: i == null ? void 0 : i.shouldTryLinkingWithSessionUser,
                      userContext: h
                    })
                  )
                ];
            }
          });
        });
      }, a.signInAndUp = function(i) {
        return d.default.getInstanceOrThrow().recipeImplementation.signInAndUp(
          e(e({}, i), {
            userContext: (0, o.getNormalisedUserContext)(
              i == null ? void 0 : i.userContext
            )
          })
        );
      }, a;
    }()
  );
  me.default = f;
  var g = f.init;
  me.init = g;
  var c = f.getAuthorisationURLWithQueryParamsAndSetState;
  me.getAuthorisationURLWithQueryParamsAndSetState = c;
  var s = f.getStateAndOtherInfoFromStorage;
  me.getStateAndOtherInfoFromStorage = s;
  var u = f.signInAndUp;
  me.signInAndUp = u;
  var l = f.signOut;
  return me.signOut = l, me;
}
var Ji;
function rf() {
  return Ji || (Ji = 1, function(e) {
    function r(t) {
      for (var o in t) e.hasOwnProperty(o) || (e[o] = t[o]);
    }
    e.__esModule = !0, r(ef());
  }(wo)), wo;
}
var fs = rf();
const tf = { class: "gsi-material-button-content-wrapper" }, of = { class: "gsi-material-button-icon" }, nf = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  style: { display: "block" }
}, af = { class: "gsi-material-button-contents" }, sf = { style: { display: "none" } }, uf = /* @__PURE__ */ Ye({
  __name: "GoogleAuthIcon",
  props: {
    authType: { default: "Sign in" }
  },
  setup(e) {
    async function r() {
      try {
        const t = await fs.getAuthorisationURLWithQueryParamsAndSetState({
          thirdPartyId: "google",
          // This is where Google should redirect the user back after login or error.
          // This URL goes on the Google's dashboard as well: https://support.google.com/cloud/answer/6158849?hl=en
          frontendRedirectURI: "https://localhost:5173/signup?thirdPartyId=google"
        });
        window.location.assign(t);
      } catch (t) {
        console.error("Google sign in: ", t.message);
      }
    }
    return (t, o) => (Z(), ue("button", {
      class: "gsi-material-button",
      onClick: r
    }, [
      o[1] || (o[1] = z("div", { class: "gsi-material-button-state" }, null, -1)),
      z("div", tf, [
        z("div", of, [
          (Z(), ue("svg", nf, o[0] || (o[0] = [
            xs('<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" data-v-521170bf></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" data-v-521170bf></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" data-v-521170bf></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" data-v-521170bf></path><path fill="none" d="M0 0h48v48H0z" data-v-521170bf></path>', 5)
          ])))
        ]),
        z("span", af, Ke(t.authType) + " with Google", 1),
        z("span", sf, Ke(t.authType) + " with Google", 1)
      ])
    ]));
  }
}), lf = /* @__PURE__ */ Qr(uf, [["__scopeId", "data-v-521170bf"]]);
var cf = {
  name: "BaseEditableHolder",
  extends: Pt,
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
    modelValue: function(r) {
      this.d_value = r;
    },
    defaultValue: function(r) {
      this.d_value = r;
    },
    $formName: {
      immediate: !0,
      handler: function(r) {
        var t, o;
        this.formField = ((t = this.$pcForm) === null || t === void 0 || (o = t.register) === null || o === void 0 ? void 0 : o.call(t, r, this.$formControl)) || {};
      }
    },
    $formControl: {
      immediate: !0,
      handler: function(r) {
        var t, o;
        this.formField = ((t = this.$pcForm) === null || t === void 0 || (o = t.register) === null || o === void 0 ? void 0 : o.call(t, this.$formName, r)) || {};
      }
    },
    $formDefaultValue: {
      immediate: !0,
      handler: function(r) {
        this.d_value !== r && (this.d_value = r);
      }
    },
    $formValue: {
      immediate: !1,
      handler: function(r) {
        var t;
        (t = this.$pcForm) !== null && t !== void 0 && t.getFieldState(this.$formName) && r !== this.d_value && (this.d_value = r);
      }
    }
  },
  formField: {},
  methods: {
    writeValue: function(r, t) {
      var o, n;
      this.controlled && (this.d_value = r, this.$emit("update:modelValue", r)), this.$emit("value-change", r), (o = (n = this.formField).onChange) === null || o === void 0 || o.call(n, {
        originalEvent: t,
        value: r
      });
    },
    // @todo move to @primeuix/utils
    findNonEmpty: function() {
      for (var r = arguments.length, t = new Array(r), o = 0; o < r; o++)
        t[o] = arguments[o];
      return t.find(se);
    }
  },
  computed: {
    $filled: function() {
      return se(this.d_value);
    },
    $invalid: function() {
      var r, t;
      return !this.$formNovalidate && this.findNonEmpty(this.invalid, (r = this.$pcFormField) === null || r === void 0 || (r = r.$field) === null || r === void 0 ? void 0 : r.invalid, (t = this.$pcForm) === null || t === void 0 || (t = t.getFieldState(this.$formName)) === null || t === void 0 ? void 0 : t.invalid);
    },
    $formName: function() {
      var r;
      return this.$formNovalidate ? void 0 : this.name || ((r = this.$formControl) === null || r === void 0 ? void 0 : r.name);
    },
    $formControl: function() {
      var r;
      return this.formControl || ((r = this.$pcFormField) === null || r === void 0 ? void 0 : r.formControl);
    },
    $formNovalidate: function() {
      var r;
      return (r = this.$formControl) === null || r === void 0 ? void 0 : r.novalidate;
    },
    $formDefaultValue: function() {
      var r, t;
      return this.findNonEmpty(this.d_value, (r = this.$pcFormField) === null || r === void 0 ? void 0 : r.initialValue, (t = this.$pcForm) === null || t === void 0 || (t = t.initialValues) === null || t === void 0 ? void 0 : t[this.$formName]);
    },
    $formValue: function() {
      var r, t;
      return this.findNonEmpty((r = this.$pcFormField) === null || r === void 0 || (r = r.$field) === null || r === void 0 ? void 0 : r.value, (t = this.$pcForm) === null || t === void 0 || (t = t.getFieldState(this.$formName)) === null || t === void 0 ? void 0 : t.value);
    },
    controlled: function() {
      return this.$inProps.hasOwnProperty("modelValue") || !this.$inProps.hasOwnProperty("modelValue") && !this.$inProps.hasOwnProperty("defaultValue");
    },
    // @deprecated use $filled instead
    filled: function() {
      return this.$filled;
    }
  }
}, gs = {
  name: "BaseInput",
  extends: cf,
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
      var r;
      return (r = this.variant) !== null && r !== void 0 ? r : this.$primevue.config.inputStyle || this.$primevue.config.inputVariant;
    },
    $fluid: function() {
      var r;
      return (r = this.fluid) !== null && r !== void 0 ? r : !!this.$pcFluid;
    },
    // @deprecated use $fluid instead
    hasFluid: function() {
      return this.$fluid;
    }
  }
}, df = ({ dt: e }) => `
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
`, ff = {
  root: function(r) {
    var t = r.instance, o = r.props;
    return ["p-inputtext p-component", {
      "p-filled": t.$filled,
      "p-inputtext-sm p-inputfield-sm": o.size === "small",
      "p-inputtext-lg p-inputfield-lg": o.size === "large",
      "p-invalid": t.$invalid,
      "p-variant-filled": t.$variant === "filled",
      "p-inputtext-fluid": t.$fluid
    }];
  }
}, gf = pe.extend({
  name: "inputtext",
  style: df,
  classes: ff
}), hf = {
  name: "BaseInputText",
  extends: gs,
  style: gf,
  provide: function() {
    return {
      $pcInputText: this,
      $parentInstance: this
    };
  }
};
function xt(e) {
  "@babel/helpers - typeof";
  return xt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, xt(e);
}
function pf(e, r, t) {
  return (r = mf(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function mf(e) {
  var r = vf(e, "string");
  return xt(r) == "symbol" ? r : r + "";
}
function vf(e, r) {
  if (xt(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(e, r);
    if (xt(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var on = {
  name: "InputText",
  extends: hf,
  inheritAttrs: !1,
  methods: {
    onInput: function(r) {
      this.writeValue(r.target.value, r);
    }
  },
  computed: {
    attrs: function() {
      return fe(this.ptmi("root", {
        context: {
          filled: this.$filled,
          disabled: this.disabled
        }
      }), this.formField);
    },
    dataP: function() {
      return Gr(pf({
        invalid: this.$invalid,
        fluid: this.$fluid,
        filled: this.$variant === "filled"
      }, this.size, this.size));
    }
  }
}, bf = ["value", "name", "disabled", "aria-invalid", "data-p"];
function yf(e, r, t, o, n, d) {
  return Z(), ue("input", fe({
    type: "text",
    class: e.cx("root"),
    value: e.d_value,
    name: e.name,
    disabled: e.disabled,
    "aria-invalid": e.$invalid || void 0,
    "data-p": d.dataP,
    onInput: r[0] || (r[0] = function() {
      return d.onInput && d.onInput.apply(d, arguments);
    })
  }, d.attrs), null, 16, bf);
}
on.render = yf;
var kf = ({ dt: e }) => `
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
`, wf = {
  root: "p-inputotp p-component",
  pcInputText: "p-inputotp-input"
}, Cf = pe.extend({
  name: "inputotp",
  style: kf,
  classes: wf
}), Sf = {
  name: "BaseInputOtp",
  extends: gs,
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
  style: Cf,
  provide: function() {
    return {
      $pcInputOtp: this,
      $parentInstance: this
    };
  }
}, hs = {
  name: "InputOtp",
  extends: Sf,
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
      handler: function(r) {
        this.tokens = r ? r.split("") : new Array(this.length);
      }
    }
  },
  methods: {
    getTemplateAttrs: function(r) {
      return {
        value: this.tokens[r]
      };
    },
    getTemplateEvents: function(r) {
      var t = this;
      return {
        input: function(n) {
          return t.onInput(n, r);
        },
        keydown: function(n) {
          return t.onKeyDown(n);
        },
        focus: function(n) {
          return t.onFocus(n);
        },
        blur: function(n) {
          return t.onBlur(n);
        },
        paste: function(n) {
          return t.onPaste(n);
        }
      };
    },
    onInput: function(r, t) {
      this.tokens[t] = r.target.value, this.updateModel(r), r.inputType === "deleteContentBackward" ? this.moveToPrev(r) : (r.inputType === "insertText" || r.inputType === "deleteContentForward" || Gs() && r instanceof CustomEvent) && this.moveToNext(r);
    },
    updateModel: function(r) {
      var t = this.tokens.join("");
      this.writeValue(t, r), this.$emit("change", {
        originalEvent: r,
        value: t
      });
    },
    moveToPrev: function(r) {
      var t = this.findPrevInput(r.target);
      t && (t.focus(), t.select());
    },
    moveToNext: function(r) {
      var t = this.findNextInput(r.target);
      t && (t.focus(), t.select());
    },
    findNextInput: function(r) {
      var t = r.nextElementSibling;
      if (t)
        return t.nodeName === "INPUT" ? t : this.findNextInput(t);
    },
    findPrevInput: function(r) {
      var t = r.previousElementSibling;
      if (t)
        return t.nodeName === "INPUT" ? t : this.findPrevInput(t);
    },
    onFocus: function(r) {
      r.target.select(), this.$emit("focus", r);
    },
    onBlur: function(r) {
      this.$emit("blur", r);
    },
    onClick: function(r) {
      setTimeout(function() {
        return r.target.select();
      }, 1);
    },
    onKeyDown: function(r) {
      if (!(r.ctrlKey || r.metaKey))
        switch (r.code) {
          case "ArrowLeft":
            this.moveToPrev(r), r.preventDefault();
            break;
          case "ArrowUp":
          case "ArrowDown":
            r.preventDefault();
            break;
          case "Backspace":
            r.target.value.length === 0 && (this.moveToPrev(r), r.preventDefault());
            break;
          case "ArrowRight":
            this.moveToNext(r), r.preventDefault();
            break;
          case "Enter":
          case "NumpadEnter":
          case "Tab":
            break;
          default:
            (this.integerOnly && !(r.code !== "Space" && Number(r.key) >= 0 && Number(r.key) <= 9) || this.tokens.join("").length >= this.length && r.code !== "Delete") && r.preventDefault();
            break;
        }
    },
    onPaste: function(r) {
      var t = r.clipboardData.getData("text");
      if (t.length) {
        var o = t.substring(0, this.length);
        (!this.integerOnly || !isNaN(o)) && (this.tokens = o.split(""), this.updateModel(r));
      }
      r.preventDefault();
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
    OtpInputText: on
  }
};
function $f(e, r, t, o, n, d) {
  var f = To("OtpInputText");
  return Z(), ue("div", fe({
    class: e.cx("root")
  }, e.ptmi("root")), [(Z(!0), ue(Ts, null, Ps(e.length, function(g) {
    return Ae(e.$slots, "default", {
      key: g,
      events: d.getTemplateEvents(g - 1),
      attrs: d.getTemplateAttrs(g - 1),
      index: g
    }, function() {
      return [Ge(f, {
        value: n.tokens[g - 1],
        type: d.inputType,
        class: Po(e.cx("pcInputText")),
        name: e.$formName,
        inputmode: d.inputMode,
        variant: e.variant,
        readonly: e.readonly,
        disabled: e.disabled,
        size: e.size,
        invalid: e.invalid,
        tabindex: e.tabindex,
        unstyled: e.unstyled,
        onInput: function(s) {
          return d.onInput(s, g - 1);
        },
        onFocus: r[0] || (r[0] = function(c) {
          return d.onFocus(c);
        }),
        onBlur: r[1] || (r[1] = function(c) {
          return d.onBlur(c);
        }),
        onPaste: r[2] || (r[2] = function(c) {
          return d.onPaste(c);
        }),
        onKeydown: r[3] || (r[3] = function(c) {
          return d.onKeyDown(c);
        }),
        onClick: r[4] || (r[4] = function(c) {
          return d.onClick(c);
        }),
        pt: e.ptm("pcInputText")
      }, null, 8, ["value", "type", "class", "name", "inputmode", "variant", "readonly", "disabled", "size", "invalid", "tabindex", "unstyled", "onInput", "pt"])];
    });
  }), 128))], 16);
}
hs.render = $f;
var So = {}, J = {}, We = {}, Or = {}, Zi;
function _f() {
  if (Zi) return Or;
  Zi = 1;
  var e = Or && Or.__assign || function() {
    return e = Object.assign || function(o) {
      for (var n, d = 1, f = arguments.length; d < f; d++) {
        n = arguments[d];
        for (var g in n) Object.prototype.hasOwnProperty.call(n, g) && (o[g] = n[g]);
      }
      return o;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(Or, "__esModule", { value: !0 }), Or.normaliseUserInput = void 0;
  var r = en();
  function t(o) {
    var n = e(
      {
        functions: function(d) {
          return d;
        }
      },
      o.override
    );
    return e(e({}, (0, r.normaliseAuthRecipe)(o)), { override: n });
  }
  return Or.normaliseUserInput = t, Or;
}
var Ee = {}, st = {}, ea;
function Rf() {
  return ea || (ea = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY = void 0, st.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY = "supertokens-passwordless-loginAttemptInfo"), st;
}
var ra;
function If() {
  if (ra) return Ee;
  ra = 1;
  var e = Ee && Ee.__assign || function() {
    return e = Object.assign || function(s) {
      for (var u, l = 1, a = arguments.length; l < a; l++) {
        u = arguments[l];
        for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (s[i] = u[i]);
      }
      return s;
    }, e.apply(this, arguments);
  }, r = Ee && Ee.__awaiter || function(s, u, l, a) {
    function i(h) {
      return h instanceof l ? h : new l(function(m) {
        m(h);
      });
    }
    return new (l || (l = Promise))(function(h, m) {
      function y(w) {
        try {
          b(a.next(w));
        } catch (v) {
          m(v);
        }
      }
      function p(w) {
        try {
          b(a.throw(w));
        } catch (v) {
          m(v);
        }
      }
      function b(w) {
        w.done ? h(w.value) : i(w.value).then(y, p);
      }
      b((a = a.apply(s, u || [])).next());
    });
  }, t = Ee && Ee.__generator || function(s, u) {
    var l = {
      label: 0,
      sent: function() {
        if (h[0] & 1) throw h[1];
        return h[1];
      },
      trys: [],
      ops: []
    }, a, i, h, m;
    return m = { next: y(0), throw: y(1), return: y(2) }, typeof Symbol == "function" && (m[Symbol.iterator] = function() {
      return this;
    }), m;
    function y(b) {
      return function(w) {
        return p([b, w]);
      };
    }
    function p(b) {
      if (a) throw new TypeError("Generator is already executing.");
      for (; l; )
        try {
          if (a = 1, i && (h = b[0] & 2 ? i.return : b[0] ? i.throw || ((h = i.return) && h.call(i), 0) : i.next) && !(h = h.call(i, b[1])).done)
            return h;
          switch (i = 0, h && (b = [b[0] & 2, h.value]), b[0]) {
            case 0:
            case 1:
              h = b;
              break;
            case 4:
              return l.label++, { value: b[1], done: !1 };
            case 5:
              l.label++, i = b[1], b = [0];
              continue;
            case 7:
              b = l.ops.pop(), l.trys.pop();
              continue;
            default:
              if (h = l.trys, !(h = h.length > 0 && h[h.length - 1]) && (b[0] === 6 || b[0] === 2)) {
                l = 0;
                continue;
              }
              if (b[0] === 3 && (!h || b[1] > h[0] && b[1] < h[3])) {
                l.label = b[1];
                break;
              }
              if (b[0] === 6 && l.label < h[1]) {
                l.label = h[1], h = b;
                break;
              }
              if (h && l.label < h[2]) {
                l.label = h[2], l.ops.push(b);
                break;
              }
              h[2] && l.ops.pop(), l.trys.pop();
              continue;
          }
          b = u.call(s, l);
        } catch (w) {
          b = [6, w], i = 0;
        } finally {
          a = h = 0;
        }
      if (b[0] & 5) throw b[1];
      return { value: b[0] ? b[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.getRecipeImplementation = void 0;
  var o = ro(), n = rn(), d = Me(), f = io(), g = Rf();
  function c(s) {
    var u = new n.default(s.recipeId, s.appInfo);
    return {
      createCode: function(l) {
        return r(this, void 0, void 0, function() {
          var a, i, h, m, y, p;
          return t(this, function(b) {
            switch (b.label) {
              case 0:
                return "email" in l && (a = {
                  email: l.email,
                  shouldTryLinkingWithSessionUser: l.shouldTryLinkingWithSessionUser
                }), "phoneNumber" in l && (a = {
                  phoneNumber: l.phoneNumber,
                  shouldTryLinkingWithSessionUser: l.shouldTryLinkingWithSessionUser
                }), p = (y = u).post, [
                  4,
                  f.default.getInstanceOrThrow().recipeImplementation.getTenantId({
                    userContext: l.userContext
                  })
                ];
              case 1:
                return [
                  4,
                  p.apply(y, [
                    b.sent(),
                    "/signinup/code",
                    { body: JSON.stringify(a) },
                    n.default.preparePreAPIHook({
                      recipePreAPIHook: s.preAPIHook,
                      action: "PASSWORDLESS_CREATE_CODE",
                      userContext: l.userContext,
                      options: l.options
                    }),
                    n.default.preparePostAPIHook({
                      recipePostAPIHook: s.postAPIHook,
                      action: "PASSWORDLESS_CREATE_CODE",
                      userContext: l.userContext
                    })
                  ])
                ];
              case 2:
                return i = b.sent(), h = i.jsonBody, m = i.fetchResponse, [2, e(e({}, h), { fetchResponse: m })];
            }
          });
        });
      },
      resendCode: function(l) {
        return r(this, void 0, void 0, function() {
          var a, i, h, m;
          return t(this, function(y) {
            switch (y.label) {
              case 0:
                return a = {
                  deviceId: l.deviceId,
                  preAuthSessionId: l.preAuthSessionId,
                  shouldTryLinkingWithSessionUser: l.shouldTryLinkingWithSessionUser
                }, [
                  4,
                  u.post(
                    l.tenantId,
                    "/signinup/code/resend",
                    { body: JSON.stringify(a) },
                    n.default.preparePreAPIHook({
                      recipePreAPIHook: s.preAPIHook,
                      action: "PASSWORDLESS_RESEND_CODE",
                      userContext: l.userContext,
                      options: l.options
                    }),
                    n.default.preparePostAPIHook({
                      recipePostAPIHook: s.postAPIHook,
                      action: "PASSWORDLESS_RESEND_CODE",
                      userContext: l.userContext
                    })
                  )
                ];
              case 1:
                return i = y.sent(), h = i.jsonBody, m = i.fetchResponse, [
                  2,
                  {
                    status: h.status,
                    fetchResponse: m
                  }
                ];
            }
          });
        });
      },
      consumeCode: function(l) {
        return r(this, void 0, void 0, function() {
          var a, i, h, m;
          return t(this, function(y) {
            switch (y.label) {
              case 0:
                return "userInputCode" in l ? a = {
                  userInputCode: l.userInputCode,
                  deviceId: l.deviceId,
                  preAuthSessionId: l.preAuthSessionId,
                  shouldTryLinkingWithSessionUser: l.shouldTryLinkingWithSessionUser
                } : a = {
                  linkCode: l.linkCode,
                  preAuthSessionId: l.preAuthSessionId,
                  shouldTryLinkingWithSessionUser: l.shouldTryLinkingWithSessionUser
                }, [
                  4,
                  u.post(
                    l.tenantId,
                    "/signinup/code/consume",
                    { body: JSON.stringify(a) },
                    n.default.preparePreAPIHook({
                      recipePreAPIHook: s.preAPIHook,
                      action: "PASSWORDLESS_CONSUME_CODE",
                      userContext: l.userContext,
                      options: l.options
                    }),
                    n.default.preparePostAPIHook({
                      recipePostAPIHook: s.postAPIHook,
                      action: "PASSWORDLESS_CONSUME_CODE",
                      userContext: l.userContext
                    })
                  )
                ];
              case 1:
                return i = y.sent(), h = i.jsonBody, m = i.fetchResponse, h.status !== "OK" ? [
                  2,
                  e(e({}, h), { fetchResponse: m })
                ] : [
                  2,
                  e(
                    e(
                      { status: "OK" },
                      (0, d.normaliseUserResponse)("passwordless", h)
                    ),
                    { fetchResponse: m }
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
        var l = (0, d.getQueryParams)("preAuthSessionId");
        return l === void 0 ? "" : l;
      },
      doesEmailExist: function(l) {
        return r(this, void 0, void 0, function() {
          var a, i, h, m, y;
          return t(this, function(p) {
            switch (p.label) {
              case 0:
                return y = (m = u).get, [
                  4,
                  f.default.getInstanceOrThrow().recipeImplementation.getTenantId({
                    userContext: l.userContext
                  })
                ];
              case 1:
                return [
                  4,
                  y.apply(m, [
                    p.sent(),
                    "/passwordless/email/exists",
                    {},
                    { email: l.email },
                    n.default.preparePreAPIHook({
                      recipePreAPIHook: s.preAPIHook,
                      action: "EMAIL_EXISTS",
                      userContext: l.userContext,
                      options: l.options
                    }),
                    n.default.preparePostAPIHook({
                      recipePostAPIHook: s.postAPIHook,
                      action: "EMAIL_EXISTS",
                      userContext: l.userContext
                    })
                  ])
                ];
              case 2:
                return a = p.sent(), i = a.jsonBody, h = a.fetchResponse, [
                  2,
                  {
                    status: i.status,
                    doesExist: i.exists,
                    fetchResponse: h
                  }
                ];
            }
          });
        });
      },
      doesPhoneNumberExist: function(l) {
        return r(this, void 0, void 0, function() {
          var a, i, h, m, y;
          return t(this, function(p) {
            switch (p.label) {
              case 0:
                return y = (m = u).get, [
                  4,
                  f.default.getInstanceOrThrow().recipeImplementation.getTenantId({
                    userContext: l.userContext
                  })
                ];
              case 1:
                return [
                  4,
                  y.apply(m, [
                    p.sent(),
                    "/passwordless/phonenumber/exists",
                    {},
                    { phoneNumber: l.phoneNumber },
                    n.default.preparePreAPIHook({
                      recipePreAPIHook: s.preAPIHook,
                      action: "PHONE_NUMBER_EXISTS",
                      userContext: l.userContext,
                      options: l.options
                    }),
                    n.default.preparePostAPIHook({
                      recipePostAPIHook: s.postAPIHook,
                      action: "PHONE_NUMBER_EXISTS",
                      userContext: l.userContext
                    })
                  ])
                ];
              case 2:
                return a = p.sent(), i = a.jsonBody, h = a.fetchResponse, [
                  2,
                  {
                    status: i.status,
                    doesExist: i.exists,
                    fetchResponse: h
                  }
                ];
            }
          });
        });
      },
      getLoginAttemptInfo: function() {
        return r(this, void 0, void 0, function() {
          var l;
          return t(this, function(a) {
            switch (a.label) {
              case 0:
                return [
                  4,
                  o.WindowHandlerReference.getReferenceOrThrow().windowHandler.localStorage.getItem(
                    g.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY
                  )
                ];
              case 1:
                if (l = a.sent(), l === null)
                  return [2, void 0];
                try {
                  return [2, JSON.parse(l)];
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
      setLoginAttemptInfo: function(l) {
        return r(this, void 0, void 0, function() {
          return t(this, function(a) {
            switch (a.label) {
              case 0:
                return [
                  4,
                  o.WindowHandlerReference.getReferenceOrThrow().windowHandler.localStorage.setItem(
                    g.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY,
                    JSON.stringify(
                      e(
                        {
                          // This can make future changes/migrations a lot cleaner
                          version: 1
                        },
                        l.attemptInfo
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
        return r(this, void 0, void 0, function() {
          return t(this, function(l) {
            return o.WindowHandlerReference.getReferenceOrThrow().windowHandler.localStorage.removeItem(
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
  return Ee.default = c, Ee.getRecipeImplementation = c, Ee;
}
var ta;
function xf() {
  if (ta) return We;
  ta = 1;
  var e = We && We.__extends || /* @__PURE__ */ function() {
    var c = function(s, u) {
      return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(l, a) {
        l.__proto__ = a;
      } || function(l, a) {
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (l[i] = a[i]);
      }, c(s, u);
    };
    return function(s, u) {
      if (typeof u != "function" && u !== null)
        throw new TypeError("Class extends value " + String(u) + " is not a constructor or null");
      c(s, u);
      function l() {
        this.constructor = s;
      }
      s.prototype = u === null ? Object.create(u) : (l.prototype = u.prototype, new l());
    };
  }(), r = We && We.__assign || function() {
    return r = Object.assign || function(c) {
      for (var s, u = 1, l = arguments.length; u < l; u++) {
        s = arguments[u];
        for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (c[a] = s[a]);
      }
      return c;
    }, r.apply(this, arguments);
  };
  Object.defineProperty(We, "__esModule", { value: !0 }), We.Recipe = void 0;
  var t = to(), o = Me(), n = tn(), d = _f(), f = If(), g = (
    /** @class */
    function(c) {
      e(s, c);
      function s(u) {
        var l = c.call(this, (0, d.normaliseUserInput)(u)) || this, a = new t.default(
          (0, f.default)({
            recipeId: l.config.recipeId,
            appInfo: l.config.appInfo,
            clientType: l.config.clientType,
            preAPIHook: l.config.preAPIHook,
            postAPIHook: l.config.postAPIHook
          })
        );
        return l.recipeImplementation = a.override(l.config.override.functions).build(), l;
      }
      return s.init = function(u) {
        return function(l, a) {
          return s.instance = new s(
            r(r({}, u), { recipeId: s.RECIPE_ID, appInfo: l, clientType: a })
          ), s.instance;
        };
      }, s.getInstanceOrThrow = function() {
        if (s.instance === void 0) {
          var u = "No instance of Passwordless found. Ensure that the 'Passwordless.init' method is called within the 'SuperTokens.init' recipeList.";
          throw u = (0, o.checkForSSRErrorAndAppendIfNeeded)(u), Error(u);
        }
        return s.instance;
      }, s.reset = function() {
        (0, o.isTest)() && (s.instance = void 0);
      }, s.RECIPE_ID = "passwordless", s;
    }(n.default)
  );
  return We.Recipe = g, We.default = g, We;
}
var oa;
function Tf() {
  if (oa) return J;
  oa = 1;
  var e = J && J.__assign || function() {
    return e = Object.assign || function(v) {
      for (var k, C = 1, S = arguments.length; C < S; C++) {
        k = arguments[C];
        for (var T in k) Object.prototype.hasOwnProperty.call(k, T) && (v[T] = k[T]);
      }
      return v;
    }, e.apply(this, arguments);
  }, r = J && J.__awaiter || function(v, k, C, S) {
    function T(I) {
      return I instanceof C ? I : new C(function(x) {
        x(I);
      });
    }
    return new (C || (C = Promise))(function(I, x) {
      function _(G) {
        try {
          A(S.next(G));
        } catch (ee) {
          x(ee);
        }
      }
      function B(G) {
        try {
          A(S.throw(G));
        } catch (ee) {
          x(ee);
        }
      }
      function A(G) {
        G.done ? I(G.value) : T(G.value).then(_, B);
      }
      A((S = S.apply(v, k || [])).next());
    });
  }, t = J && J.__generator || function(v, k) {
    var C = {
      label: 0,
      sent: function() {
        if (I[0] & 1) throw I[1];
        return I[1];
      },
      trys: [],
      ops: []
    }, S, T, I, x;
    return x = { next: _(0), throw: _(1), return: _(2) }, typeof Symbol == "function" && (x[Symbol.iterator] = function() {
      return this;
    }), x;
    function _(A) {
      return function(G) {
        return B([A, G]);
      };
    }
    function B(A) {
      if (S) throw new TypeError("Generator is already executing.");
      for (; C; )
        try {
          if (S = 1, T && (I = A[0] & 2 ? T.return : A[0] ? T.throw || ((I = T.return) && I.call(T), 0) : T.next) && !(I = I.call(T, A[1])).done)
            return I;
          switch (T = 0, I && (A = [A[0] & 2, I.value]), A[0]) {
            case 0:
            case 1:
              I = A;
              break;
            case 4:
              return C.label++, { value: A[1], done: !1 };
            case 5:
              C.label++, T = A[1], A = [0];
              continue;
            case 7:
              A = C.ops.pop(), C.trys.pop();
              continue;
            default:
              if (I = C.trys, !(I = I.length > 0 && I[I.length - 1]) && (A[0] === 6 || A[0] === 2)) {
                C = 0;
                continue;
              }
              if (A[0] === 3 && (!I || A[1] > I[0] && A[1] < I[3])) {
                C.label = A[1];
                break;
              }
              if (A[0] === 6 && C.label < I[1]) {
                C.label = I[1], I = A;
                break;
              }
              if (I && C.label < I[2]) {
                C.label = I[2], C.ops.push(A);
                break;
              }
              I[2] && C.ops.pop(), C.trys.pop();
              continue;
          }
          A = k.call(v, C);
        } catch (G) {
          A = [6, G], T = 0;
        } finally {
          S = I = 0;
        }
      if (A[0] & 5) throw A[1];
      return { value: A[0] ? A[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(J, "__esModule", { value: !0 }), J.clearLoginAttemptInfo = J.setLoginAttemptInfo = J.getLoginAttemptInfo = J.getTenantIdFromURL = J.getPreAuthSessionIdFromURL = J.getLinkCodeFromURL = J.signOut = J.doesPhoneNumberExist = J.doesEmailExist = J.consumeCode = J.resendCode = J.createCode = J.init = void 0;
  var o = Me(), n = io(), d = xf(), f = (
    /** @class */
    function() {
      function v() {
      }
      return v.init = function(k) {
        return d.default.init(k);
      }, v.createCode = function(k) {
        var C, S;
        return r(this, void 0, void 0, function() {
          var T, I, x, _, B;
          return t(this, function(A) {
            switch (A.label) {
              case 0:
                return T = d.default.getInstanceOrThrow(), I = T.recipeImplementation, x = (0, o.getNormalisedUserContext)(k.userContext), [
                  4,
                  n.default.getInstanceOrThrow().recipeImplementation.getTenantId({
                    userContext: k.userContext
                  })
                ];
              case 1:
                return _ = A.sent(), [
                  4,
                  I.createCode(
                    e(e({}, k), {
                      shouldTryLinkingWithSessionUser: (C = k.shouldTryLinkingWithSessionUser) !== null && C !== void 0 ? C : !1,
                      userContext: x
                    })
                  )
                ];
              case 2:
                return B = A.sent(), B.status !== "OK" ? [3, 4] : [
                  4,
                  I.setLoginAttemptInfo({
                    attemptInfo: {
                      tenantId: _,
                      deviceId: B.deviceId,
                      preAuthSessionId: B.preAuthSessionId,
                      shouldTryLinkingWithSessionUser: (S = k.shouldTryLinkingWithSessionUser) !== null && S !== void 0 ? S : !1,
                      flowType: B.flowType
                    },
                    userContext: x
                  })
                ];
              case 3:
                A.sent(), A.label = 4;
              case 4:
                return [2, B];
            }
          });
        });
      }, v.resendCode = function(k) {
        return r(this, void 0, void 0, function() {
          var C, S, T, I;
          return t(this, function(x) {
            switch (x.label) {
              case 0:
                return C = d.default.getInstanceOrThrow(), S = C.recipeImplementation, T = (0, o.getNormalisedUserContext)(
                  k == null ? void 0 : k.userContext
                ), [
                  4,
                  S.getLoginAttemptInfo({
                    userContext: T
                  })
                ];
              case 1:
                return I = x.sent(), [
                  2,
                  S.resendCode(
                    e(e({}, k), {
                      tenantId: I == null ? void 0 : I.tenantId,
                      userContext: T,
                      deviceId: I === void 0 ? "" : I.deviceId,
                      preAuthSessionId: I === void 0 ? "" : I.preAuthSessionId,
                      shouldTryLinkingWithSessionUser: I == null ? void 0 : I.shouldTryLinkingWithSessionUser
                    })
                  )
                ];
            }
          });
        });
      }, v.consumeCode = function(k) {
        var C;
        return r(this, void 0, void 0, function() {
          var S, T, I, x, _, B, B, A, G, ee;
          return t(this, function(ge) {
            switch (ge.label) {
              case 0:
                return S = d.default.getInstanceOrThrow(), T = S.recipeImplementation, I = (0, o.getNormalisedUserContext)(
                  k == null ? void 0 : k.userContext
                ), k !== void 0 && "userInputCode" in k ? [
                  4,
                  T.getLoginAttemptInfo({
                    userContext: I
                  })
                ] : [3, 2];
              case 1:
                return _ = ge.sent(), B = (C = _ == null ? void 0 : _.shouldTryLinkingWithSessionUser) !== null && C !== void 0 ? C : !1, x = {
                  userInputCode: k.userInputCode,
                  deviceId: _ === void 0 ? "" : _.deviceId,
                  preAuthSessionId: _ === void 0 ? "" : _.preAuthSessionId,
                  shouldTryLinkingWithSessionUser: B,
                  tenantId: _ == null ? void 0 : _.tenantId
                }, [3, 3];
              case 2:
                B = !1, A = T.getLinkCodeFromURL({
                  userContext: I
                }), G = T.getTenantIdFromURL({
                  userContext: I
                }), ee = T.getPreAuthSessionIdFromURL({
                  userContext: I
                }), x = {
                  tenantId: G,
                  linkCode: A,
                  preAuthSessionId: ee,
                  shouldTryLinkingWithSessionUser: B
                }, ge.label = 3;
              case 3:
                return [
                  2,
                  T.consumeCode(
                    e(
                      {
                        userContext: I,
                        options: k == null ? void 0 : k.options
                      },
                      x
                    )
                  )
                ];
            }
          });
        });
      }, v.getLinkCodeFromURL = function(k) {
        return d.default.getInstanceOrThrow().recipeImplementation.getLinkCodeFromURL(
          e(e({}, k), {
            userContext: (0, o.getNormalisedUserContext)(
              k == null ? void 0 : k.userContext
            )
          })
        );
      }, v.getPreAuthSessionIdFromURL = function(k) {
        return d.default.getInstanceOrThrow().recipeImplementation.getPreAuthSessionIdFromURL(
          e(e({}, k), {
            userContext: (0, o.getNormalisedUserContext)(
              k == null ? void 0 : k.userContext
            )
          })
        );
      }, v.getTenantIdFromURL = function(k) {
        return d.default.getInstanceOrThrow().recipeImplementation.getTenantIdFromURL(
          e(e({}, k), {
            userContext: (0, o.getNormalisedUserContext)(
              k == null ? void 0 : k.userContext
            )
          })
        );
      }, v.doesEmailExist = function(k) {
        return d.default.getInstanceOrThrow().recipeImplementation.doesEmailExist(
          e(e({}, k), { userContext: (0, o.getNormalisedUserContext)(k.userContext) })
        );
      }, v.doesPhoneNumberExist = function(k) {
        return d.default.getInstanceOrThrow().recipeImplementation.doesPhoneNumberExist(
          e(e({}, k), { userContext: (0, o.getNormalisedUserContext)(k.userContext) })
        );
      }, v.getLoginAttemptInfo = function(k) {
        return d.default.getInstanceOrThrow().recipeImplementation.getLoginAttemptInfo(
          e(e({}, k), {
            userContext: (0, o.getNormalisedUserContext)(
              k == null ? void 0 : k.userContext
            )
          })
        );
      }, v.setLoginAttemptInfo = function(k) {
        return r(this, void 0, void 0, function() {
          var C, S, T;
          return t(this, function(I) {
            switch (I.label) {
              case 0:
                return C = (0, o.getNormalisedUserContext)(k.userContext), S = d.default.getInstanceOrThrow(), [
                  4,
                  n.default.getInstanceOrThrow().recipeImplementation.getTenantId({ userContext: C })
                ];
              case 1:
                return T = I.sent(), [
                  2,
                  S.recipeImplementation.setLoginAttemptInfo({
                    attemptInfo: e(
                      {
                        tenantId: T,
                        shouldTryLinkingWithSessionUser: k.attemptInfo.shouldTryLinkingWithSessionUser
                      },
                      k.attemptInfo
                    ),
                    userContext: C
                  })
                ];
            }
          });
        });
      }, v.clearLoginAttemptInfo = function(k) {
        return d.default.getInstanceOrThrow().recipeImplementation.clearLoginAttemptInfo(
          e(e({}, k), {
            userContext: (0, o.getNormalisedUserContext)(
              k == null ? void 0 : k.userContext
            )
          })
        );
      }, v.signOut = function(k) {
        return d.default.getInstanceOrThrow().signOut({
          userContext: (0, o.getNormalisedUserContext)(
            k == null ? void 0 : k.userContext
          )
        });
      }, v;
    }()
  );
  J.default = f;
  var g = f.init;
  J.init = g;
  var c = f.createCode;
  J.createCode = c;
  var s = f.resendCode;
  J.resendCode = s;
  var u = f.consumeCode;
  J.consumeCode = u;
  var l = f.doesEmailExist;
  J.doesEmailExist = l;
  var a = f.doesPhoneNumberExist;
  J.doesPhoneNumberExist = a;
  var i = f.signOut;
  J.signOut = i;
  var h = f.getLinkCodeFromURL;
  J.getLinkCodeFromURL = h;
  var m = f.getPreAuthSessionIdFromURL;
  J.getPreAuthSessionIdFromURL = m;
  var y = f.getTenantIdFromURL;
  J.getTenantIdFromURL = y;
  var p = f.getLoginAttemptInfo;
  J.getLoginAttemptInfo = p;
  var b = f.setLoginAttemptInfo;
  J.setLoginAttemptInfo = b;
  var w = f.clearLoginAttemptInfo;
  return J.clearLoginAttemptInfo = w, J;
}
var na;
function Pf() {
  return na || (na = 1, function(e) {
    function r(t) {
      for (var o in t) e.hasOwnProperty(o) || (e[o] = t[o]);
    }
    e.__esModule = !0, r(Tf());
  }(So)), So;
}
var Ar = Pf();
const Ef = { class: "mt-10" }, Of = { class: "h1" }, Af = { class: "flex-form" }, Df = { class: "flex-form" }, Bf = {
  key: 0,
  class: "validation"
}, Nf = { class: "mt-section-inner flex-form" }, ia = /* @__PURE__ */ Ye({
  __name: "AuthPage",
  props: {
    authType: {}
  },
  setup(e) {
    const r = e, t = ja(), o = ls(), n = ve("rez-mask@outlook.com"), d = ve({
      open: !1,
      title: "",
      description: ""
    }), f = ve(0), g = ve(!1), c = ve(""), s = ve(0), u = ve(0), l = ve(!1);
    Zt(async () => {
      g.value = await m(), o.currentRoute.value.query.thirdPartyId === "google" && await w();
    });
    const a = Se(() => `Invalid code. You have ${u.value - s.value} attempts left.`), i = Se(() => r.authType === "signin" ? "Sign in" : "Sign up");
    function h(v, k) {
      d.value.open = !1, d.value.title = v, d.value.description = k, window.clearTimeout(f.value), f.value = window.setTimeout(() => {
        d.value.open = !0;
      }, 100);
    }
    async function m() {
      const v = await Ar.getLoginAttemptInfo();
      return v && console.info("Code already sent: ", v), v !== void 0;
    }
    async function y() {
      const v = "Error processing your OTP code", k = "Please try again later.";
      l.value = !1;
      try {
        const C = await Ar.consumeCode({ userInputCode: c.value });
        C.status === "OK" ? (await Ar.clearLoginAttemptInfo(), C.createdNewRecipeUser && C.user.loginMethods.length === 1 ? console.info("New user signed up successfully") : console.info("Existing user signed in successfully"), t.updateAuth(), o.push({ name: "home" })) : (console.error("Submit code: ", C), C.status === "INCORRECT_USER_INPUT_CODE_ERROR" ? (s.value = C.failedCodeInputAttemptCount, u.value = C.maximumCodeInputAttempts, l.value = !0) : (await Ar.clearLoginAttemptInfo(), h(v, k), g.value = !1));
      } catch (C) {
        console.error("Submit code: ", C.message), h(v, k), g.value = !1;
      }
    }
    async function p() {
      const v = "Resend OTP failed", k = "Please try again later.";
      try {
        const C = await Ar.resendCode();
        console.log("resend code response: ", C), C.status === "RESTART_FLOW_ERROR" ? (await Ar.clearLoginAttemptInfo(), console.error("Resend code failed: ", C), h(v, k), g.value = !1) : (g.value = !0, h("Code re-sent", "Please check your email for the new code."));
      } catch (C) {
        console.error("Resend code failed: ", C.message), h(v, k), g.value = !1;
      }
    }
    async function b() {
      const v = "Error sending OTP code", k = "Please try again later.";
      try {
        const C = await Ar.createCode({
          email: n.value,
          shouldTryLinkingWithSessionUser: !1,
          // If true, SuperTokens will attempt to link the passwordless code to an existing session user
          userContext: {}
          // Optionally include user context
        });
        console.log("Create code response: ", C), C.status === "SIGN_IN_UP_NOT_ALLOWED" ? (console.error("Signup started: ", C.reason), h(v, k)) : g.value = !0;
      } catch (C) {
        console.error("Signup started: ", C.message), C.isSuperTokensGeneralError, h(v, k);
      }
    }
    async function w() {
      const v = "Failed to sign in with Google", k = "Please try again later.";
      try {
        const C = await fs.signInAndUp();
        C.status === "OK" ? (console.log("handleGoogleCallback> ", C.user), C.createdNewRecipeUser && C.user.loginMethods.length === 1 ? console.log("New user signed up successfully") : console.log("Existing user signed in successfully"), window.location.assign("/home")) : C.status === "SIGN_IN_UP_NOT_ALLOWED" ? (console.error("Google auth callback: ", C.reason), h(v, k)) : (console.error("Google auth callback: ", C), h(v, "No email provided by social login. Please use another form of login"), window.location.assign("/signin"));
      } catch (C) {
        console.error("Google auth callback: ", C.message), h(v, k);
      }
    }
    return (v, k) => (Z(), ue("div", Ef, [
      z("form", {
        onSubmit: k[2] || (k[2] = wa(() => {
        }, ["prevent"]))
      }, [
        re(g) ? (Z(), mr(re(Yt), {
          key: 1,
          class: "max-w-xl p-12 w-full mx-auto"
        }, {
          title: Ie(() => k[5] || (k[5] = [
            z("h1", { class: "h1" }, "Input validation code", -1)
          ])),
          content: Ie(() => [
            z("section", null, [
              z("div", Df, [
                k[7] || (k[7] = z("p", null, " To finish the signup process, enter the code that was emailed to you. Note that the code is only valid for 10 minutes. ", -1)),
                Ge(re(hs), {
                  length: 6,
                  class: "w-50",
                  modelValue: re(c),
                  "onUpdate:modelValue": k[1] || (k[1] = (C) => br(c) ? c.value = C : null),
                  type: "text",
                  placeholder: "Input email code",
                  required: ""
                }, null, 8, ["modelValue"]),
                re(l) ? (Z(), ue("p", Bf, Ke(re(a)), 1)) : cr("", !0),
                Ge(re(Vt), {
                  class: "w-fit",
                  type: "submit",
                  onClick: y
                }, {
                  default: Ie(() => k[6] || (k[6] = [
                    zt("Submit code")
                  ])),
                  _: 1
                })
              ]),
              z("div", Nf, [
                k[9] || (k[9] = z("p", null, " If you didnt receive an email, please check your Junk folder or resend another code. ", -1)),
                Ge(re(Vt), {
                  class: "w-fit",
                  type: "button",
                  onClick: p
                }, {
                  default: Ie(() => k[8] || (k[8] = [
                    zt("Resend code")
                  ])),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        })) : (Z(), mr(re(Yt), {
          key: 0,
          class: "max-w-xl p-12 w-full mx-auto"
        }, {
          title: Ie(() => [
            z("h1", Of, Ke(re(i)), 1)
          ]),
          content: Ie(() => [
            z("section", null, [
              Ge(lf, { authType: re(i) }, null, 8, ["authType"]),
              k[4] || (k[4] = z("div", { class: "flex items-center my-10" }, [
                z("hr", { class: "flex-1 border-gray-300" }),
                z("span", { class: "px-4 text-gray-500 uppercase" }, "Or"),
                z("hr", { class: "flex-1 border-gray-300" })
              ], -1)),
              z("div", Af, [
                k[3] || (k[3] = z("p", null, " This website offers a Passwordless Sign-In option. Instead of remembering a password, you'll receive a one-time code via email each time you sign in. ", -1)),
                Ge(re(on), {
                  modelValue: re(n),
                  "onUpdate:modelValue": k[0] || (k[0] = (C) => br(n) ? n.value = C : null),
                  placeholder: "Email",
                  required: ""
                }, null, 8, ["modelValue"]),
                Ge(re(Vt), {
                  label: re(i),
                  submit: "submit",
                  onClick: b
                }, null, 8, ["label"])
              ])
            ])
          ]),
          _: 1
        }))
      ], 32),
      Ge(cs, {
        title: re(d).title,
        isOpen: re(d).open
      }, {
        description: Ie(() => [
          z("p", null, Ke(re(d).description), 1)
        ]),
        _: 1
      }, 8, ["title", "isOpen"])
    ]));
  }
}), aa = 5e3, Lf = /* @__PURE__ */ Ye({
  __name: "GoodbyePage",
  setup(e) {
    const r = ls();
    return Zt(() => {
      setTimeout(() => {
        r.push("/");
      }, aa);
    }), (t, o) => (Z(), ue("div", null, [
      o[0] || (o[0] = z("h1", null, "Goodbye", -1)),
      o[1] || (o[1] = z("p", null, "Your account has been deleted, thank you for visiting!", -1)),
      z("p", null, "You will be redirected to the landing page in " + Ke(aa) + " seconds automatically.")
    ]));
  }
}), Mf = { class: "not-found-page" }, Uf = /* @__PURE__ */ Ye({
  __name: "NotFoundPage",
  setup(e) {
    return (r, t) => (Z(), ue("div", Mf, [
      t[1] || (t[1] = z("h1", null, "Page Not Found", -1)),
      t[2] || (t[2] = z("p", null, "Sorry, the page you are looking for does not exist.", -1)),
      Ge(re(rs), { to: "/" }, {
        default: Ie(() => t[0] || (t[0] = [
          zt("Go back to Home")
        ])),
        _: 1
      })
    ]));
  }
}), Hf = /* @__PURE__ */ Qr(Uf, [["__scopeId", "data-v-86d9ef49"]]), Ff = [
  {
    path: "/home",
    name: "home",
    component: Od,
    meta: { requiresAuth: !0 }
  },
  {
    path: "/account",
    name: "account",
    component: zd,
    meta: { requiresAuth: !0 }
  }
], jf = kd({
  history: Ec("/"),
  routes: [
    {
      path: "/",
      name: "landing",
      component: Rd
    },
    {
      path: "/goodbye",
      name: "goodbye",
      component: Lf
    },
    {
      path: "/signup",
      name: "signup",
      component: ia,
      props: { authType: "signup" },
      meta: { guestOnly: !0 }
      // Prevents logged-in users from accessing
    },
    {
      path: "/signin",
      name: "signin",
      component: ia,
      props: { authType: "signin" },
      meta: { guestOnly: !0 }
      // Prevents logged-in users from accessing
    },
    ...Ff,
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: Hf
    }
  ]
});
jf.beforeEach(async (e, r, t) => {
  const o = await Qo.doesSessionExist();
  e.meta.requiresAuth && !o ? t("/signin") : e.meta.guestOnly && o ? t("/home") : t();
});
var $o = {}, zr = {}, jt = {}, _o = {}, Ro = {}, sa;
function Vf() {
  return sa || (sa = 1, function(e) {
    function r(t) {
      for (var o in t) e.hasOwnProperty(o) || (e[o] = t[o]);
    }
    e.__esModule = !0, r(Ko());
  }(Ro)), Ro;
}
var ua;
function qf() {
  return ua || (ua = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CookieHandlerReference = void 0;
    var r = Vf();
    Object.defineProperty(e, "CookieHandlerReference", {
      enumerable: !0,
      get: function() {
        return r.CookieHandlerReference;
      }
    });
  }(_o)), _o;
}
var ut = {}, la;
function zf() {
  if (la) return ut;
  la = 1, Object.defineProperty(ut, "__esModule", { value: !0 }), ut.PostSuperTokensInitCallbacks = void 0;
  var e = (
    /** @class */
    function() {
      function r() {
      }
      return r.addPostInitCallback = function(t) {
        r.postInitCallbacks.push(t);
      }, r.runPostInitCallbacks = function() {
        for (var t = 0, o = r.postInitCallbacks; t < o.length; t++) {
          var n = o[t];
          n();
        }
      }, r.postInitCallbacks = [], r;
    }()
  );
  return ut.PostSuperTokensInitCallbacks = e, ut;
}
var Io = {}, xo = {}, ca;
function Wf() {
  return ca || (ca = 1, function(e) {
    function r(t) {
      for (var o in t) e.hasOwnProperty(o) || (e[o] = t[o]);
    }
    e.__esModule = !0, r(Yr());
  }(xo)), xo;
}
var da;
function Gf() {
  return da || (da = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.DateProviderReference = void 0;
    var r = Wf();
    Object.defineProperty(e, "DateProviderReference", {
      enumerable: !0,
      get: function() {
        return r.DateProviderReference;
      }
    });
  }(Io)), Io;
}
var fa;
function Xf() {
  if (fa) return jt;
  fa = 1, Object.defineProperty(jt, "__esModule", { value: !0 });
  var e = Me(), r = qf(), t = ro(), o = zf(), n = io(), d = Gf(), f = (
    /** @class */
    function() {
      function g(c) {
        var s = this;
        if (this.recipeList = [], this.appInfo = (0, e.normaliseInputAppInfoOrThrowError)(c.appInfo), c.recipeList === void 0 || c.recipeList.length === 0)
          throw new Error(
            "Please provide at least one recipe to the supertokens.init function call. See https://supertokens.io/docs/emailpassword/quick-setup/frontend"
          );
        var u = !1;
        c.enableDebugLogs !== void 0 && (u = c.enableDebugLogs);
        var l = !1;
        this.recipeList = c.recipeList.map(function(a) {
          var i = a(s.appInfo, c.clientType, u);
          return i.config.recipeId === n.Recipe.RECIPE_ID && (l = !0), i;
        }), l || this.recipeList.push(n.Recipe.init()(this.appInfo, c.clientType, u));
      }
      return g.init = function(c) {
        if (r.CookieHandlerReference.init(c.cookieHandler), t.WindowHandlerReference.init(c.windowHandler), d.DateProviderReference.init(c.dateProvider), g.instance !== void 0) {
          console.warn("SuperTokens was already initialized");
          return;
        }
        g.instance = new g(c), o.PostSuperTokensInitCallbacks.runPostInitCallbacks();
      }, g.getInstanceOrThrow = function() {
        if (g.instance === void 0) {
          var c = "SuperTokens must be initialized before calling this method.";
          throw c = (0, e.checkForSSRErrorAndAppendIfNeeded)(c), new Error(c);
        }
        return g.instance;
      }, g.reset = function() {
        if (!(0, e.isTest)()) {
          console.warn("Calling reset() is only supported during testing");
          return;
        }
        n.Recipe.reset(), g.instance = void 0;
      }, g;
    }()
  );
  return jt.default = f, jt;
}
var ga;
function Kf() {
  if (ga) return zr;
  ga = 1, Object.defineProperty(zr, "__esModule", { value: !0 }), zr.init = void 0;
  var e = Xf(), r = (
    /** @class */
    function() {
      function t() {
      }
      return t.init = function(o) {
        e.default.init(o);
      }, t;
    }()
  );
  return zr.default = r, zr.init = r.init, zr;
}
var ha;
function Yf() {
  return ha || (ha = 1, function(e) {
    function r(t) {
      for (var o in t) e.hasOwnProperty(o) || (e[o] = t[o]);
    }
    e.__esModule = !0, r(Kf());
  }($o)), $o;
}
Yf();
var Qf = { transitionDuration: "{transition.duration}" }, Jf = { borderWidth: "0", borderColor: "{content.border.color}" }, Zf = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", padding: "1.125rem", fontWeight: "700", borderRadius: "0", borderWidth: "0 1px 1px 1px", borderColor: "{content.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "1px" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } }, eg = { borderWidth: "0 1px 1px 1px", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "1.125rem" }, rg = { light: { header: { background: "{surface.50}", hoverBackground: "{surface.100}", activeBackground: "{surface.50}", activeHoverBackground: "{surface.100}" } }, dark: { header: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.800}", activeHoverBackground: "{surface.700}" } } }, tg = { root: Qf, panel: Jf, header: Zf, content: eg, colorScheme: rg }, og = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, ng = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, ig = { padding: "{list.padding}", gap: "{list.gap}" }, ag = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, sg = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, ug = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, lg = { borderRadius: "{border.radius.sm}" }, cg = { padding: "{list.option.padding}" }, dg = { light: { chip: { focusBackground: "{surface.200}", focusColor: "{surface.800}" }, dropdown: { background: "{surface.50}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", focusColor: "{surface.0}" }, dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } }, fg = { root: og, overlay: ng, list: ig, option: ag, optionGroup: sg, dropdown: ug, chip: lg, emptyMessage: cg, colorScheme: dg }, gg = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, hg = { size: "1rem" }, pg = { borderColor: "{content.background}", offset: "-0.75rem" }, mg = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } }, vg = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" } }, bg = { root: gg, icon: hg, group: pg, lg: mg, xl: vg }, yg = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" }, kg = { size: "0.5rem" }, wg = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" }, Cg = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" }, Sg = { fontSize: "1rem", minWidth: "2rem", height: "2rem" }, $g = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, _g = { root: yg, dot: kg, sm: wg, lg: Cg, xl: Sg, colorScheme: $g }, Rg = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } }, Ig = { transitionDuration: "0.2s", focusRing: { width: "0", style: "none", color: "transparent", offset: "0" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "2px", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.625rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.5rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.75rem" }, borderRadius: "{border.radius.md}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.5rem 0", gap: "0", header: { padding: "0.625rem 1rem 0 1rem" }, option: { padding: "0.625rem 1rem", borderRadius: "0" }, optionGroup: { padding: "0.625rem 1rem", fontWeight: "600" } }, content: { borderRadius: "{border.radius.md}" }, mask: { transitionDuration: "0.15s" }, navigation: { list: { padding: "0.5rem 0", gap: "0" }, item: { padding: "0.625rem 1rem", borderRadius: "0", gap: "0.5rem" }, submenuLabel: { padding: "0.625rem 1rem", fontWeight: "600" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.md}", shadow: "0 2px 12px 0 rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.md}", padding: "1rem", shadow: "0 1px 3px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xl}", padding: "1.5rem", shadow: "0 1px 3px rgba(0, 0, 0, 0.3)" }, navigation: { shadow: "0 2px 12px 0 rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.500}", contrastColor: "#ffffff", hoverColor: "{primary.600}", activeColor: "{primary.700}" }, highlight: { background: "{primary.50}", focusBackground: "{primary.100}", color: "{primary.700}", focusColor: "{primary.800}" }, focusRing: { shadow: "0 0 0 0.2rem {primary.200}" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.200}", filledBackground: "{surface.50}", filledHoverBackground: "{surface.50}", filledFocusBackground: "{surface.0}", borderColor: "{surface.300}", hoverBorderColor: "{primary.color}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.400}", color: "{surface.700}", disabledColor: "{surface.500}", placeholderColor: "{surface.500}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.500}", floatLabelFocusColor: "{primary.600}", floatLabelActiveColor: "{surface.500}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.500}", shadow: "none" }, text: { color: "{surface.700}", hoverColor: "{surface.800}", mutedColor: "{surface.500}", hoverMutedColor: "{surface.600}" }, content: { background: "{surface.0}", hoverBackground: "{surface.100}", borderColor: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.100}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}" } }, optionGroup: { background: "transparent", color: "{text.color}" } }, navigation: { item: { focusBackground: "{surface.100}", activeBackground: "{surface.100}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } }, submenuLabel: { background: "transparent", color: "{text.color}" }, submenuIcon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.400}", contrastColor: "{surface.900}", hoverColor: "{primary.300}", activeColor: "{primary.200}" }, highlight: { background: "color-mix(in srgb, {primary.400}, transparent 84%)", focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)", color: "rgba(255,255,255,.87)", focusColor: "rgba(255,255,255,.87)" }, focusRing: { shadow: "0 0 0 0.2rem color-mix(in srgb, {primary.color}, transparent 80%)" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.950}", borderColor: "{surface.600}", hoverBorderColor: "{primary.color}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.300}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "none" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.800}", borderColor: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.800}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}" } }, optionGroup: { background: "transparent", color: "{text.color}" } }, navigation: { item: { focusBackground: "{surface.800}", activeBackground: "{surface.800}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } }, submenuLabel: { background: "transparent", color: "{text.color}" }, submenuIcon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } } } } }, xg = { primitive: Rg, semantic: Ig }, Tg = { borderRadius: "{content.border.radius}" }, Pg = { root: Tg }, Eg = { padding: "1.25rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" }, Og = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ag = { color: "{navigation.item.icon.color}" }, Dg = { root: Eg, item: Og, separator: Ag }, Bg = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "1rem", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.75rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2.25rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3.25rem" }, label: { fontWeight: "600" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", offset: "{form.field.focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" }, Ng = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {primary.200}" } }, secondary: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{surface.100}", hoverBorderColor: "{surface.200}", activeBorderColor: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {surface.200}" } }, info: { background: "{sky.500}", hoverBackground: "{sky.600}", activeBackground: "{sky.700}", borderColor: "{sky.500}", hoverBorderColor: "{sky.600}", activeBorderColor: "{sky.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {sky.200}" } }, success: { background: "{green.500}", hoverBackground: "{green.600}", activeBackground: "{green.700}", borderColor: "{green.500}", hoverBorderColor: "{green.600}", activeBorderColor: "{green.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {green.200}" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.600}", activeBackground: "{orange.700}", borderColor: "{orange.500}", hoverBorderColor: "{orange.600}", activeBorderColor: "{orange.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {orange.200}" } }, help: { background: "{purple.500}", hoverBackground: "{purple.600}", activeBackground: "{purple.700}", borderColor: "{purple.500}", hoverBorderColor: "{purple.600}", activeBorderColor: "{purple.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {purple.200}" } }, danger: { background: "{red.500}", hoverBackground: "{red.600}", activeBackground: "{red.700}", borderColor: "{red.500}", hoverBorderColor: "{red.600}", activeBorderColor: "{red.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {red.200}" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {surface.400}" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.200}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.200}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.200}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.200}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.200}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.200}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.700}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.700}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.100}", activeBackground: "{surface.200}", color: "{surface.600}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.700}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {primary.color}, transparent 80%)" } }, secondary: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", borderColor: "{surface.800}", hoverBorderColor: "{surface.700}", activeBorderColor: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.300}, transparent 80%)" } }, info: { background: "{sky.400}", hoverBackground: "{sky.300}", activeBackground: "{sky.200}", borderColor: "{sky.400}", hoverBorderColor: "{sky.300}", activeBorderColor: "{sky.200}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {sky.400}, transparent 80%)" } }, success: { background: "{green.400}", hoverBackground: "{green.300}", activeBackground: "{green.200}", borderColor: "{green.400}", hoverBorderColor: "{green.300}", activeBorderColor: "{green.200}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {green.400}, transparent 80%)" } }, warn: { background: "{orange.400}", hoverBackground: "{orange.300}", activeBackground: "{orange.200}", borderColor: "{orange.400}", hoverBorderColor: "{orange.300}", activeBorderColor: "{orange.200}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {orange.400}, transparent 80%)" } }, help: { background: "{purple.400}", hoverBackground: "{purple.300}", activeBackground: "{purple.200}", borderColor: "{purple.400}", hoverBorderColor: "{purple.300}", activeBorderColor: "{purple.200}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {purple.400}, transparent 80%)" } }, danger: { background: "{red.400}", hoverBackground: "{red.300}", activeBackground: "{red.200}", borderColor: "{red.400}", hoverBorderColor: "{red.300}", activeBorderColor: "{red.200}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {red.400}, transparent 80%)" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.0}, transparent 80%)" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.700}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", borderColor: "{green.700}", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", borderColor: "{sky.700}", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", borderColor: "{orange.700}", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {help.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {help.400}, transparent 84%)", borderColor: "{purple.700}", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {danger.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {danger.400}, transparent 84%)", borderColor: "{red.700}", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.500}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.600}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } }, Lg = { root: Bg, colorScheme: Ng }, Mg = { background: "{content.background}", borderRadius: "{border.radius.lg}", color: "{content.color}", shadow: "0 .125rem .25rem rgba(0,0,0,.075)" }, Ug = { padding: "1.5rem", gap: "0.75rem" }, Hg = { gap: "0.5rem" }, Fg = { fontSize: "1.25rem", fontWeight: "700" }, jg = { color: "{text.muted.color}" }, Vg = { root: Mg, body: Ug, caption: Hg, title: Fg, subtitle: jg }, qg = { transitionDuration: "{transition.duration}" }, zg = { gap: "0.25rem" }, Wg = { padding: "1rem", gap: "0.5rem" }, Gg = { width: "1rem", height: "1rem", borderRadius: "50", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Xg = { light: { indicator: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{primary.color}" } } }, Kg = { root: qg, content: zg, indicatorList: Wg, indicator: Gg, colorScheme: Xg }, Yg = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Qg = { width: "2.5rem", color: "{form.field.icon.color}" }, Jg = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Zg = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1.25rem" }, eh = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } }, rh = { color: "{form.field.icon.color}" }, th = { root: Yg, dropdown: Qg, overlay: Jg, list: Zg, option: eh, clearIcon: rh }, oh = { borderRadius: "{border.radius.sm}", width: "1.5rem", height: "1.5rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1.25rem", height: "1.25rem" }, lg: { width: "1.75rem", height: "1.75rem" } }, nh = { size: "1rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1.25rem" } }, ih = { root: oh, icon: nh }, ah = { borderRadius: "16px", paddingX: "0.875rem", paddingY: "0.625rem", gap: "0.5rem", transitionDuration: "{transition.duration}" }, sh = { width: "2rem", height: "2rem" }, uh = { size: "1rem" }, lh = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ch = { light: { root: { background: "{surface.100}", color: "{surface.800}" }, icon: { color: "{surface.800}" }, removeIcon: { color: "{surface.800}" } }, dark: { root: { background: "{surface.800}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } }, dh = { root: ah, image: sh, icon: uh, removeIcon: lh, colorScheme: ch }, fh = { transitionDuration: "{transition.duration}" }, gh = { width: "1.75rem", height: "1.75rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, hh = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" }, ph = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } }, mh = { root: fh, preview: gh, panel: hh, colorScheme: ph }, vh = { size: "2rem", color: "{overlay.modal.color}" }, bh = { gap: "1rem" }, yh = { icon: vh, content: bh }, kh = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, wh = { padding: "{overlay.popover.padding}", gap: "1rem" }, Ch = { size: "1.5rem", color: "{overlay.popover.color}" }, Sh = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" }, $h = { root: kh, content: wh, icon: Ch, footer: Sh }, _h = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, Rh = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Ih = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, xh = { mobileIndent: "1.25rem" }, Th = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, Ph = { borderColor: "{content.border.color}" }, Eh = { root: _h, list: Rh, item: Ih, submenu: xh, submenuIcon: Th, separator: Ph }, Oh = { transitionDuration: "{transition.duration}" }, Ah = { borderColor: "{datatable.border.color}", borderWidth: "1px 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Dh = { selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Bh = { fontWeight: "700" }, Nh = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, Lh = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Mh = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Uh = { fontWeight: "700" }, Hh = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Fh = { color: "{primary.color}" }, jh = { width: "0.5rem" }, Vh = { width: "1px", color: "{primary.color}" }, qh = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, zh = { size: "2rem" }, Wh = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Gh = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } }, Xh = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, Kh = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, Yh = { light: { root: { borderColor: "{content.border.color}" }, header: { background: "{surface.50}", color: "{text.color}" }, headerCell: { background: "{surface.50}", hoverBackground: "{surface.100}", color: "{text.color}" }, footer: { background: "{surface.50}", color: "{text.color}" }, footerCell: { background: "{surface.50}", color: "{text.color}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, header: { background: "{surface.800}", color: "{text.color}" }, headerCell: { background: "{surface.800}", hoverBackground: "{surface.700}", color: "{text.color}" }, footer: { background: "{surface.800}", color: "{text.color}" }, footerCell: { background: "{surface.800}", color: "{text.color}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, Qh = { root: Oh, header: Ah, headerCell: Dh, columnTitle: Bh, row: Nh, bodyCell: Lh, footerCell: Mh, columnFooter: Uh, footer: Hh, dropPoint: Fh, columnResizer: jh, resizeIndicator: Vh, sortIcon: qh, loadingIcon: zh, rowToggleButton: Wh, filter: Gh, paginatorTop: Xh, paginatorBottom: Kh, colorScheme: Yh }, Jh = { borderColor: "{content.border.color}", borderWidth: "1px", borderRadius: "4px", padding: "0" }, Zh = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.875rem 1.125rem", borderRadius: "5px 5px 0 0" }, ep = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "5px" }, rp = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.875rem 1.125rem", borderRadius: "0 0 5px 5px" }, tp = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, op = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" }, np = { light: { header: { background: "{surface.50}", color: "{text.color}" } }, dark: { header: { background: "{surface.800}", color: "{text.color}" } } }, ip = { root: Jh, header: Zh, content: ep, footer: rp, paginatorTop: tp, paginatorBottom: op, colorScheme: np }, ap = { transitionDuration: "{transition.duration}" }, sp = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" }, up = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.75rem 0" }, lp = { gap: "0.5rem", fontWeight: "700" }, cp = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, dp = { color: "{form.field.icon.color}" }, fp = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.375rem 0.625rem", borderRadius: "{content.border.radius}" }, gp = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.375rem 0.625rem", borderRadius: "{content.border.radius}" }, hp = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" }, pp = { margin: "0.75rem 0 0 0" }, mp = { padding: "0.375rem", fontWeight: "700", color: "{content.color}" }, vp = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", padding: "0.375rem", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, bp = { margin: "0.75rem 0 0 0" }, yp = { padding: "0.5rem", borderRadius: "{content.border.radius}" }, kp = { margin: "0.75rem 0 0 0" }, wp = { padding: "0.5rem", borderRadius: "{content.border.radius}" }, Cp = { padding: "0.75rem 0 0 0", borderColor: "{content.border.color}" }, Sp = { padding: "0.75rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" }, $p = { light: { dropdown: { background: "{surface.50}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" }, today: { background: "{surface.700}", color: "{surface.0}" } } }, _p = { root: ap, panel: sp, header: up, title: lp, dropdown: cp, inputIcon: dp, selectMonth: fp, selectYear: gp, group: hp, dayView: pp, weekDay: mp, date: vp, monthView: bp, month: yp, yearView: kp, year: wp, buttonbar: Cp, timePicker: Sp, colorScheme: $p }, Rp = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" }, Ip = { padding: "{overlay.modal.padding}", gap: "0.5rem" }, xp = { fontSize: "1.25rem", fontWeight: "600" }, Tp = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, Pp = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" }, Ep = { root: Rp, header: Ip, title: xp, content: Tp, footer: Pp }, Op = { borderColor: "{content.border.color}" }, Ap = { background: "{content.background}", color: "{text.color}" }, Dp = { margin: "1.125rem 0", padding: "0 1.125rem", content: { padding: "0 0.625rem" } }, Bp = { margin: "0 1.125rem", padding: "1.125rem 0", content: { padding: "0.625rem 0" } }, Np = { root: Op, content: Ap, horizontal: Dp, vertical: Bp }, Lp = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.lg}" }, Mp = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Up = { root: Lp, item: Mp }, Hp = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" }, Fp = { padding: "{overlay.modal.padding}" }, jp = { fontSize: "1.5rem", fontWeight: "600" }, Vp = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, qp = { padding: "{overlay.modal.padding}" }, zp = { root: Hp, header: Fp, title: jp, content: Vp, footer: qp }, Wp = { borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" }, Gp = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, Xp = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" }, Kp = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Yp = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, Qp = { light: { toolbar: { background: "{surface.50}" } }, dark: { toolbar: { background: "{surface.800}" } } }, Jp = { toolbar: Wp, toolbarItem: Gp, overlay: Xp, overlayOption: Kp, content: Yp, colorScheme: Qp }, Zp = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0.75rem 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" }, e0 = { borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "{content.border.color}", padding: "0.625rem 0.875rem", gap: "0.5rem", fontWeight: "700", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, r0 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" }, t0 = { padding: "0" }, o0 = { light: { legend: { background: "{surface.50}", hoverBackground: "{surface.100}", color: "{text.color}", hoverColor: "{text.hover.color}" } }, dark: { legend: { background: "{surface.800}", hoverBackground: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" } } }, n0 = { root: Zp, legend: e0, toggleIcon: r0, content: t0, colorScheme: o0 }, i0 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, a0 = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", padding: "1.125rem", borderRadius: "5px 5px 0 0", gap: "0.5rem" }, s0 = { highlightBorderColor: "{primary.color}", padding: "1.125rem", gap: "1rem" }, u0 = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } }, l0 = { gap: "0.5rem" }, c0 = { height: "0.25rem" }, d0 = { gap: "0.5rem" }, f0 = { light: { header: { background: "{surface.50}", color: "{text.color}" } }, dark: { header: { background: "{surface.800}", color: "{text.color}" } } }, g0 = { root: i0, header: a0, content: s0, file: u0, fileList: l0, progressbar: c0, basic: d0, colorScheme: f0 }, h0 = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } }, p0 = { active: { top: "-1.375rem" } }, m0 = { input: { paddingTop: "1.875rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } }, v0 = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } }, b0 = { root: h0, over: p0, in: m0, on: v0 }, y0 = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, k0 = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0", prev: { borderRadius: "0 12px 12px 0" }, next: { borderRadius: "12px 0 0 12px" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, w0 = { size: "1.5rem" }, C0 = { padding: "1rem 0.25rem" }, S0 = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, $0 = { size: "1rem" }, _0 = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" }, R0 = { gap: "0.5rem", padding: "1rem" }, I0 = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, x0 = { background: "rgba(0, 0, 0, 0.5)" }, T0 = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" }, P0 = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, E0 = { size: "1.5rem" }, O0 = { light: { thumbnailsContent: { background: "{surface.50}" }, thumbnailNavButton: { hoverBackground: "{surface.100}", color: "{surface.600}", hoverColor: "{surface.700}" }, indicatorButton: { background: "{surface.200}", hoverBackground: "{surface.300}" } }, dark: { thumbnailsContent: { background: "{surface.800}" }, thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.400}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.700}", hoverBackground: "{surface.600}" } } }, A0 = { root: y0, navButton: k0, navIcon: w0, thumbnailsContent: C0, thumbnailNavButton: S0, thumbnailNavButtonIcon: $0, caption: _0, indicatorList: R0, indicatorButton: I0, insetIndicatorList: x0, insetIndicatorButton: T0, closeButton: P0, closeButtonIcon: E0, colorScheme: O0 }, D0 = { color: "{form.field.icon.color}" }, B0 = { icon: D0 }, N0 = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" }, L0 = { paddingTop: "1.875rem", paddingBottom: "{form.field.padding.y}" }, M0 = { root: N0, input: L0 }, U0 = { transitionDuration: "{transition.duration}" }, H0 = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } }, F0 = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "{content.border.radius}", padding: ".5rem", gap: "0.5rem" }, j0 = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, V0 = { root: U0, preview: H0, toolbar: F0, action: j0 }, q0 = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "rgba(255,255,255,0.3)", hoverBorderColor: "rgba(255,255,255,0.3)", borderWidth: "3px", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, z0 = { handle: q0 }, W0 = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" }, G0 = { fontWeight: "500" }, X0 = { size: "1.125rem" }, K0 = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "color-mix(in srgb, {blue.50}, transparent 5%)", color: "{blue.600}", shadow: "none" }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "color-mix(in srgb, {green.50}, transparent 5%)", color: "{green.600}", shadow: "none" }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "color-mix(in srgb,{yellow.50}, transparent 5%)", color: "{yellow.600}", shadow: "none" }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "color-mix(in srgb, {red.50}, transparent 5%)", color: "{red.600}", shadow: "none" }, secondary: { background: "{surface.100}", borderColor: "{surface.100}", color: "{surface.600}", shadow: "none" }, contrast: { background: "{surface.900}", borderColor: "{surface.900}", color: "{surface.50}", shadow: "none" } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.500}, transparent 84%)", color: "{blue.500}", shadow: "none" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.500}, transparent 84%)", color: "{green.500}", shadow: "none" }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.500}, transparent 84%)", color: "{yellow.500}", shadow: "none" }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.500}, transparent 84%)", color: "{red.500}", shadow: "none" }, secondary: { background: "{surface.800}", borderColor: "{surface.800}", color: "{surface.300}", shadow: "none" }, contrast: { background: "{surface.0}", borderColor: "{surface.0}", color: "{surface.950}", shadow: "none" } } }, Y0 = { root: W0, text: G0, icon: X0, colorScheme: K0 }, Q0 = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" }, J0 = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" }, Z0 = { root: Q0, display: J0 }, em = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, rm = { borderRadius: "{border.radius.sm}" }, tm = { light: { chip: { focusBackground: "{surface.200}", color: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", color: "{surface.0}" } } }, om = { root: em, chip: rm, colorScheme: tm }, nm = { borderRadius: "{form.field.border.radius}", padding: "0.625rem 0.5rem", minWidth: "2.75rem" }, im = { light: { addon: { background: "{surface.50}", borderColor: "{form.field.border.color}", color: "{text.muted.color}" } }, dark: { addon: { background: "{surface.800}", borderColor: "{form.field.border.color}", color: "{text.muted.color}" } } }, am = { addon: nm, colorScheme: im }, sm = { transitionDuration: "{transition.duration}" }, um = { width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" }, lm = { light: { button: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { button: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.500}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } }, cm = { root: sm, button: um, colorScheme: lm }, dm = { gap: "0.5rem" }, fm = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } }, gm = { root: dm, input: fm }, hm = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, pm = { root: hm }, mm = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, vm = { background: "{primary.color}" }, bm = { background: "{content.border.color}" }, ym = { color: "{text.muted.color}" }, km = { root: mm, value: vm, range: bm, text: ym }, wm = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" }, Cm = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, Sm = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, $m = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, _m = { color: "{list.option.color}", gutterStart: "-0.5rem", gutterEnd: "0.5rem" }, Rm = { padding: "{list.option.padding}" }, Im = { light: { option: { stripedBackground: "{surface.50}" } }, dark: { option: { stripedBackground: "{surface.900}" } } }, xm = { root: wm, list: Cm, option: Sm, optionGroup: $m, checkmark: _m, emptyMessage: Rm, colorScheme: Im }, Tm = { borderColor: "transparent", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.75rem 1rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" }, Pm = { borderRadius: "{content.border.radius}", padding: "0.75rem 1rem" }, Em = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Om = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" }, Am = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Dm = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background.}", color: "{navigation.submenu.label.color}" }, Bm = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, Nm = { borderColor: "{content.border.color}" }, Lm = { borderRadius: "50%", size: "2rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Mm = { light: { root: { background: "{surface.50}" } }, dark: { root: { background: "{surface.800}" } } }, Um = { root: Tm, baseItem: Pm, item: Em, overlay: Om, submenu: Am, submenuLabel: Dm, submenuIcon: Bm, separator: Nm, mobileButton: Lm, colorScheme: Mm }, Hm = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, Fm = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, jm = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, Vm = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background.}", color: "{navigation.submenu.label.color}" }, qm = { borderColor: "{content.border.color}" }, zm = { root: Hm, list: Fm, item: jm, submenuLabel: Vm, separator: qm }, Wm = { borderColor: "transparent", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem 1rem", transitionDuration: "{transition.duration}" }, Gm = { borderRadius: "{content.border.radius}", padding: "0.75rem 1rem" }, Xm = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Km = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1.25rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } }, Ym = { borderColor: "{content.border.color}" }, Qm = { borderRadius: "50%", size: "2rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Jm = { light: { root: { background: "{surface.50}" } }, dark: { root: { background: "{surface.800}" } } }, Zm = { root: Wm, baseItem: Gm, item: Xm, submenu: Km, separator: Ym, mobileButton: Qm, colorScheme: Jm }, ev = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, rv = { padding: "0.75rem 1rem", gap: "0.5rem", sm: { padding: "0.5rem 0.625rem" }, lg: { padding: "0.75rem 0.875rem" } }, tv = { fontSize: "1rem", fontWeight: "500", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } }, ov = { size: "1.25rem", sm: { size: "1rem" }, lg: { size: "1.5rem" } }, nv = { width: "2rem", height: "2rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, iv = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } }, av = { root: { borderWidth: "1px" } }, sv = { content: { padding: "0" } }, uv = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "transparent", color: "{blue.600}", shadow: "none", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {blue.200}" } }, outlined: { color: "{blue.600}", borderColor: "{blue.600}" }, simple: { color: "{blue.600}" } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "transparent", color: "{green.600}", shadow: "none", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {green.200}" } }, outlined: { color: "{green.600}", borderColor: "{green.600}" }, simple: { color: "{green.600}" } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "transparent", color: "{yellow.600}", shadow: "none", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {yellow.200}" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "transparent", color: "{red.600}", shadow: "none", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {red.200}" } }, outlined: { color: "{red.600}", borderColor: "{red.600}" }, simple: { color: "{red.600}" } }, secondary: { background: "{surface.100}", borderColor: "transparent", color: "{surface.600}", shadow: "none", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {surface.200}" } }, outlined: { color: "{surface.500}", borderColor: "{surface.500}" }, simple: { color: "{surface.500}" } }, contrast: { background: "{surface.900}", borderColor: "transparent", color: "{surface.50}", shadow: "none", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {surface.400}" } }, outlined: { color: "{surface.900}", borderColor: "{surface.900}" }, simple: { color: "{surface.900}" } } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "transparent", color: "{blue.500}", shadow: "none", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {blue.500}, transparent 80%)" } }, outlined: { color: "{blue.500}", borderColor: "{blue.500}" }, simple: { color: "{blue.500}" } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "transparent", color: "{green.500}", shadow: "none", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {green.500}, transparent 80%)" } }, outlined: { color: "{green.500}", borderColor: "{green.500}" }, simple: { color: "{green.500}" } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "transparent", color: "{yellow.500}", shadow: "none", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {yellow.500}, transparent 80%)" } }, outlined: { color: "{yellow.500}", borderColor: "{yellow.500}" }, simple: { color: "{yellow.500}" } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "transparent", color: "{red.500}", shadow: "none", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {red.500}, transparent 80%)" } }, outlined: { color: "{red.500}", borderColor: "{red.500}" }, simple: { color: "{red.500}" } }, secondary: { background: "{surface.800}", borderColor: "transparent", color: "{surface.300}", shadow: "none", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.300}, transparent 80%)" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "transparent", color: "{surface.950}", shadow: "none", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.950}, transparent 80%)" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } }, lv = { root: ev, content: rv, text: tv, icon: ov, closeButton: nv, closeIcon: iv, outlined: av, simple: sv, colorScheme: uv }, cv = { borderRadius: "{content.border.radius}", gap: "1rem" }, dv = { background: "{content.border.color}", size: "0.625rem" }, fv = { gap: "0.5rem" }, gv = { size: "0.5rem" }, hv = { size: "1rem" }, pv = { verticalGap: "0.5rem", horizontalGap: "1rem" }, mv = { root: cv, meters: dv, label: fv, labelMarker: gv, labelIcon: hv, labelList: pv }, vv = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, bv = { width: "2.5rem", color: "{form.field.icon.color}" }, yv = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, kv = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, wv = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" }, Cv = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Sv = { color: "{form.field.icon.color}" }, $v = { borderRadius: "{border.radius.sm}" }, _v = { padding: "{list.option.padding}" }, Rv = { root: vv, dropdown: bv, overlay: yv, list: kv, option: wv, optionGroup: Cv, chip: $v, clearIcon: Sv, emptyMessage: _v }, Iv = { gap: "1.125rem" }, xv = { gap: "0.5rem" }, Tv = { root: Iv, controls: xv }, Pv = { gutter: "0.75rem", transitionDuration: "{transition.duration}" }, Ev = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "1rem 1.25rem", toggleablePadding: "1rem 1.25rem 1.5rem 1.25rem", borderRadius: "{content.border.radius}" }, Ov = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Av = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" }, Dv = { root: Pv, node: Ev, nodeToggleButton: Ov, connector: Av }, Bv = { outline: { width: "2px", color: "{content.background}" } }, Nv = { root: Bv }, Lv = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" }, Mv = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Uv = { color: "{text.muted.color}" }, Hv = { maxWidth: "2.5rem" }, Fv = { root: Lv, navButton: Mv, currentPageReport: Uv, jumpToPageInput: Hv }, jv = { borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" }, Vv = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", padding: "1.125rem", borderRadius: "5px 5px 0 0" }, qv = { padding: "0.25rem 1.125rem" }, zv = { fontWeight: "700" }, Wv = { padding: "1.125rem" }, Gv = { padding: "1.125rem" }, Xv = { light: { header: { background: "{surface.50}", color: "{text.color}" } }, dark: { header: { background: "{surface.800}", color: "{text.color}" } } }, Kv = { root: jv, header: Vv, toggleableHeader: qv, title: zv, content: Wv, footer: Gv, colorScheme: Xv }, Yv = { gap: "0", transitionDuration: "{transition.duration}" }, Qv = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "0", first: { borderWidth: "1px 1px 0 1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "0 1px 1px 1px", bottomBorderRadius: "{content.border.radius}" } }, Jv = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, Zv = { indent: "1rem" }, eb = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" }, rb = { root: Yv, panel: Qv, item: Jv, submenu: Zv, submenuIcon: eb }, tb = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: ".75rem" }, ob = { color: "{form.field.icon.color}" }, nb = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" }, ib = { gap: "0.75rem" }, ab = { light: { strength: { weakBackground: "{red.500}", mediumBackground: "{amber.500}", strongBackground: "{green.500}" } }, dark: { strength: { weakBackground: "{red.400}", mediumBackground: "{amber.400}", strongBackground: "{green.400}" } } }, sb = { meter: tb, icon: ob, overlay: nb, content: ib, colorScheme: ab }, ub = { gap: "1.125rem" }, lb = { gap: "0.5rem" }, cb = { root: ub, controls: lb }, db = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, fb = { padding: "{overlay.popover.padding}" }, gb = { root: db, content: fb }, hb = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "1.5rem" }, pb = { background: "{primary.color}" }, mb = { color: "{primary.contrast.color}", fontSize: "0.875rem", fontWeight: "600" }, vb = { root: hb, value: pb, label: mb }, bb = { light: { root: { colorOne: "{pink.500}", colorTwo: "{sky.500}", colorThree: "{emerald.500}", colorFour: "{amber.500}" } }, dark: { root: { colorOne: "{pink.400}", colorTwo: "{sky.400}", colorThree: "{emerald.400}", colorFour: "{amber.400}" } } }, yb = { colorScheme: bb }, kb = { width: "1.5rem", height: "1.5rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1.25rem", height: "1.25rem" }, lg: { width: "1.75rem", height: "1.75rem" } }, wb = { size: "1rem", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1.25rem" } }, Cb = { root: kb, icon: wb }, Sb = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, $b = { size: "1.25rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" }, _b = { root: Sb, icon: $b }, Rb = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.3)" } } }, Ib = { colorScheme: Rb }, xb = { transitionDuration: "{transition.duration}" }, Tb = { size: "9px", borderRadius: "{border.radius.sm}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Pb = { light: { bar: { background: "{surface.200}" } }, dark: { bar: { background: "{surface.700}" } } }, Eb = { root: xb, bar: Tb, colorScheme: Pb }, Ob = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Ab = { width: "2.5rem", color: "{form.field.icon.color}" }, Db = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Bb = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, Nb = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Lb = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Mb = { color: "{form.field.icon.color}" }, Ub = { color: "{list.option.color}", gutterStart: "-0.5rem", gutterEnd: "0.5rem" }, Hb = { padding: "{list.option.padding}" }, Fb = { root: Ob, dropdown: Ab, overlay: Db, list: Bb, option: Nb, optionGroup: Lb, clearIcon: Mb, checkmark: Ub, emptyMessage: Hb }, jb = { borderRadius: "{form.field.border.radius}" }, Vb = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } }, qb = { root: jb, colorScheme: Vb }, zb = { borderRadius: "{content.border.radius}" }, Wb = { light: { root: { background: "{surface.200}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.06)", animationBackground: "rgba(255, 255, 255, 0.04)" } } }, Gb = { root: zb, colorScheme: Wb }, Xb = { transitionDuration: "{transition.duration}" }, Kb = { background: "{content.border.color}", borderRadius: "{content.border.radius}", size: "3px" }, Yb = { background: "{primary.color}" }, Qb = { width: "16px", height: "16px", borderRadius: "50%", background: "{primary.color}", hoverBackground: "{primary.color}", content: { borderRadius: "50%", hoverBackground: "{primary.color}", width: "12px", height: "12px", shadow: "none" }, focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, Jb = { light: { handle: { content: { background: "{surface.0}" } } }, dark: { handle: { content: { background: "{surface.950}" } } } }, Zb = { root: Xb, track: Kb, range: Yb, handle: Qb, colorScheme: Jb }, ey = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, ry = { root: ey }, ty = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" }, oy = { root: ty }, ny = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" }, iy = { background: "{content.border.color}" }, ay = { size: "24px", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, sy = { light: { handle: { background: "{surface.400}" } }, dark: { handle: { background: "{surface.600}" } } }, uy = { root: ny, gutter: iy, handle: ay, colorScheme: sy }, ly = { transitionDuration: "{transition.duration}" }, cy = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" }, dy = { padding: "0.5rem", gap: "1rem" }, fy = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, gy = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, hy = { background: "{content.background}", activeBackground: "{primary.color}", borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", activeColor: "{primary.contrast.color}", size: "2.25rem", fontSize: "1.125rem", fontWeight: "500", borderRadius: "50%", shadow: "none" }, py = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" }, my = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" }, vy = { root: ly, separator: cy, step: dy, stepHeader: fy, stepTitle: gy, stepNumber: hy, steppanels: py, steppanel: my }, by = { transitionDuration: "{transition.duration}" }, yy = { background: "{content.border.color}" }, ky = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, wy = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, Cy = { background: "{content.background}", activeBackground: "{primary.color}", borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", activeColor: "{primary.contrast.color}", size: "2.25rem", fontSize: "1.125rem", fontWeight: "500", borderRadius: "50%", shadow: "none" }, Sy = { root: by, separator: yy, itemLink: ky, itemLabel: wy, itemNumber: Cy }, $y = { transitionDuration: "{transition.duration}" }, _y = { borderWidth: "0", background: "{content.background}", borderColor: "{content.border.color}" }, Ry = { borderWidth: "2px 0 0 0", borderColor: "transparent", hoverBorderColor: "transparent", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.25rem", fontWeight: "600", margin: "0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Iy = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, xy = { height: "0", bottom: "0", background: "transparent" }, Ty = { light: { item: { background: "{surface.50}", hoverBackground: "{surface.100}", activeBackground: "{surface.0}" } }, dark: { item: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.900}" } } }, Py = { root: $y, tablist: _y, item: Ry, itemIcon: Iy, activeBar: xy, colorScheme: Ty }, Ey = { transitionDuration: "{transition.duration}" }, Oy = { borderWidth: "0", background: "{content.background}", borderColor: "{content.border.color}" }, Ay = { borderWidth: "2px 0 0 0", borderColor: "transparent", hoverBorderColor: "transparent", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.25rem", fontWeight: "700", margin: "0", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, Dy = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, By = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, Ny = { height: "0", bottom: "0", background: "transparent" }, Ly = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" }, tab: { background: "{surface.50}", hoverBackground: "{surface.100}", activeBackground: "{surface.0}" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" }, tab: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.900}" } } }, My = { root: Ey, tablist: Oy, tab: Ay, tabpanel: Dy, navButton: By, activeBar: Ny, colorScheme: Ly }, Uy = { transitionDuration: "{transition.duration}" }, Hy = { background: "{content.background}", borderColor: "{content.border.color}" }, Fy = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, jy = { background: "{content.background}", color: "{content.color}" }, Vy = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" }, qy = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, zy = { root: Uy, tabList: Hy, tab: Fy, tabPanel: jy, navButton: Vy, colorScheme: qy }, Wy = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" }, Gy = { size: "0.75rem" }, Xy = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, Ky = { root: Wy, icon: Gy, colorScheme: Xy }, Yy = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" }, Qy = { gap: "0.25rem" }, Jy = { margin: "2px 0" }, Zy = { root: Yy, prompt: Qy, commandResponse: Jy }, ek = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, rk = { root: ek }, tk = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, ok = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, nk = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, ik = { mobileIndent: "1.25rem" }, ak = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, sk = { borderColor: "{content.border.color}" }, uk = { root: tk, list: ok, item: nk, submenu: ik, submenuIcon: ak, separator: sk }, lk = { minHeight: "5rem" }, ck = { eventContent: { padding: "1rem 0" } }, dk = { eventContent: { padding: "0 1rem" } }, fk = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{content.background}", borderColor: "{primary.color}", content: { borderRadius: "50%", size: "0.375rem", background: "transparent", insetShadow: "none" } }, gk = { color: "{content.border.color}", size: "2px" }, hk = { event: lk, horizontal: ck, vertical: dk, eventMarker: fk, eventConnector: gk }, pk = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "0 0 0 6px", transitionDuration: "{transition.duration}" }, mk = { size: "1.25rem" }, vk = { padding: "{overlay.popover.padding}", gap: "0.5rem" }, bk = { gap: "0.5rem" }, yk = { fontWeight: "500", fontSize: "1rem" }, kk = { fontWeight: "500", fontSize: "0.875rem" }, wk = { width: "2rem", height: "2rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, Ck = { size: "1rem" }, Sk = { light: { blur: "1.5px", info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.500}", color: "{blue.600}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {blue.200}" } } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.500}", color: "{green.600}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {green.200}" } } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.500}", color: "{yellow.600}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {yellow.200}" } } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.500}", color: "{red.600}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {red.200}" } } }, secondary: { background: "{surface.100}", borderColor: "{surface.500}", color: "{surface.600}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {surface.200}" } } }, contrast: { background: "{surface.900}", borderColor: "{primary.color}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {surface.400}" } } } }, dark: { blur: "10px", info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {blue.500}, transparent 80%)" } } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {green.500}, transparent 80%)" } } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {yellow.500}, transparent 80%)" } } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {red.500}, transparent 80%)" } } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.300}, transparent 80%)" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.950}, transparent 80%)" } } } } }, $k = { root: pk, icon: mk, content: vk, text: bk, summary: yk, detail: kk, closeButton: wk, closeIcon: Ck, colorScheme: Sk }, _k = { padding: "0.625rem 1rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", hoverColor: "{form.field.color}", checkedBackground: "{highlight.background}", checkedColor: "{highlight.color}", checkedBorderColor: "{form.field.border.color}", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.5rem 0.75rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.75rem 1.25rem" } }, Rk = { color: "{text.muted.color}", hoverColor: "{text.muted.color}", checkedColor: "{highlight.color}", disabledColor: "{form.field.disabled.color}" }, Ik = { checkedBackground: "transparent", checkedShadow: "none", padding: "0", borderRadius: "0", sm: { padding: "0" }, lg: { padding: "0" } }, xk = { light: { root: { hoverBackground: "{surface.100}" } }, dark: { root: { hoverBackground: "{surface.800}" } } }, Tk = { root: _k, icon: Rk, content: Ik, colorScheme: xk }, Pk = { width: "3rem", height: "1.75rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s" }, Ek = { borderRadius: "50%", size: "1.25rem" }, Ok = { light: { root: { background: "{surface.300}", disabledBackground: "{form.field.disabled.background}", hoverBackground: "{surface.400}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.0}", disabledBackground: "{form.field.disabled.color}", hoverBackground: "{surface.0}", checkedBackground: "{surface.0}", checkedHoverBackground: "{surface.0}", color: "{text.muted.color}", hoverColor: "{text.color}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } }, dark: { root: { background: "{surface.700}", disabledBackground: "{surface.600}", hoverBackground: "{surface.600}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.400}", disabledBackground: "{surface.900}", hoverBackground: "{surface.300}", checkedBackground: "{surface.900}", checkedHoverBackground: "{surface.900}", color: "{surface.900}", hoverColor: "{surface.800}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } } }, Ak = { root: Pk, handle: Ek, colorScheme: Ok }, Dk = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" }, Bk = { light: { root: { background: "{surface.50}", color: "{content.color}" } }, dark: { root: { background: "{surface.800}", color: "{content.color}" } } }, Nk = { root: Dk, colorScheme: Bk }, Lk = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.625rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" }, Mk = { light: { root: { background: "{surface.700}", color: "{surface.0}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" } } }, Uk = { root: Lk, colorScheme: Mk }, Hk = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" }, Fk = { padding: "0.375rem 0.625rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" }, gap: "0.25rem" }, jk = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" }, Vk = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, qk = { size: "2rem" }, zk = { margin: "0 0 0.5rem 0" }, Wk = { root: Hk, node: Fk, nodeIcon: jk, nodeToggleButton: Vk, loadingIcon: qk, filter: zk }, Gk = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Xk = { width: "2.5rem", color: "{form.field.icon.color}" }, Kk = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Yk = { padding: "{list.padding}" }, Qk = { padding: "{list.option.padding}" }, Jk = { borderRadius: "{border.radius.sm}" }, Zk = { color: "{form.field.icon.color}" }, ew = { root: Gk, dropdown: Xk, overlay: Kk, tree: Yk, emptyMessage: Qk, chip: Jk, clearIcon: Zk }, rw = { transitionDuration: "{transition.duration}" }, tw = { borderColor: "{treetable.border.color}", borderWidth: "1px 0 1px 0", padding: "0.75rem 1rem" }, ow = { selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, nw = { fontWeight: "700" }, iw = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{sr.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, aw = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" }, sw = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem" }, uw = { fontWeight: "700" }, lw = { borderColor: "{treetable.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, cw = { width: "0.5rem" }, dw = { width: "1px", color: "{primary.color}" }, fw = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, gw = { size: "2rem" }, hw = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, pw = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, mw = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, vw = { light: { root: { borderColor: "{content.border.color}" }, header: { background: "{surface.50}", color: "{text.color}" }, headerCell: { background: "{surface.50}", hoverBackground: "{surface.100}", color: "{text.color}" }, footer: { background: "{surface.50}", color: "{text.color}" }, footerCell: { background: "{surface.50}", color: "{text.color}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, header: { background: "{surface.800}", color: "{text.color}" }, headerCell: { background: "{surface.800}", hoverBackground: "{surface.700}", color: "{text.color}" }, footer: { background: "{surface.800}", color: "{text.color}" }, footerCell: { background: "{surface.800}", color: "{text.color}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, bw = { root: rw, header: tw, headerCell: ow, columnTitle: nw, row: iw, bodyCell: aw, footerCell: sw, columnFooter: uw, footer: lw, columnResizer: cw, resizeIndicator: dw, sortIcon: fw, loadingIcon: gw, nodeToggleButton: hw, paginatorTop: pw, paginatorBottom: mw, colorScheme: vw }, yw = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } }, kw = { loader: yw }, ww = Object.defineProperty, Cw = Object.defineProperties, Sw = Object.getOwnPropertyDescriptors, pa = Object.getOwnPropertySymbols, $w = Object.prototype.hasOwnProperty, _w = Object.prototype.propertyIsEnumerable, ma = (e, r, t) => r in e ? ww(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, va;
va = ((e, r) => {
  for (var t in r || (r = {})) $w.call(r, t) && ma(e, t, r[t]);
  if (pa) for (var t of pa(r)) _w.call(r, t) && ma(e, t, r[t]);
  return e;
})({}, xg), Cw(va, Sw({ components: { accordion: tg, autocomplete: fg, avatar: bg, badge: _g, blockui: Pg, breadcrumb: Dg, button: Lg, datepicker: _p, card: Vg, carousel: Kg, cascadeselect: th, checkbox: ih, chip: dh, colorpicker: mh, confirmdialog: yh, confirmpopup: $h, contextmenu: Eh, dataview: ip, datatable: Qh, dialog: Ep, divider: Np, dock: Up, drawer: zp, editor: Jp, fieldset: n0, fileupload: g0, iftalabel: M0, floatlabel: b0, galleria: A0, iconfield: B0, image: V0, imagecompare: z0, inlinemessage: Y0, inplace: Z0, inputchips: om, inputgroup: am, inputnumber: cm, inputotp: gm, inputtext: pm, knob: km, listbox: xm, megamenu: Um, menu: zm, menubar: Zm, message: lv, metergroup: mv, multiselect: Rv, orderlist: Tv, organizationchart: Dv, overlaybadge: Nv, popover: gb, paginator: Fv, password: sb, panel: Kv, panelmenu: rb, picklist: cb, progressbar: vb, progressspinner: yb, radiobutton: Cb, rating: _b, ripple: Ib, scrollpanel: Eb, select: Fb, selectbutton: qb, skeleton: Gb, slider: Zb, speeddial: ry, splitter: uy, splitbutton: oy, stepper: vy, steps: Sy, tabmenu: Py, tabs: My, tabview: zy, textarea: rk, tieredmenu: uk, tag: Ky, terminal: Zy, timeline: hk, togglebutton: Tk, toggleswitch: Ak, tree: Wk, treeselect: ew, treetable: bw, toast: $k, toolbar: Nk, tooltip: Uk, virtualscroller: kw } }));
const Iw = {
  install: (e) => {
    e.component("ThemeToggle", Gl);
  }
};
export {
  Gl as ThemeToggle,
  Iw as default
};
