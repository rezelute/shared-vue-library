import { a as Dt, _ as zt } from "../SignInUp.vue_vue_type_script_setup_true_lang-V9puaooh.js";
import { defineComponent as _, ref as $, computed as Z, createBlock as g, openBlock as l, unref as v, createElementBlock as h, mergeProps as d, createElementVNode as p, resolveComponent as C, resolveDirective as ee, Fragment as A, renderList as U, createCommentVNode as I, withDirectives as te, resolveDynamicComponent as S, normalizeClass as M, toDisplayString as D, normalizeStyle as be, renderSlot as w, createVNode as L, normalizeProps as Ie, guardReactiveProps as pe, Teleport as ge, Transition as ne, withCtx as y, onMounted as ve, createTextVNode as N } from "vue";
import { a as E, h as q, R as ie, f as R, s as ye } from "../index-R7LR5p2Z.js";
import { B as re, b as P, f as F, c as z, i as se, d as K, e as k, g as oe, r as B, h as ke, E as Le, j as Pe, k as xe, l as H, m as we, n as Ce, S as Me, t as Q } from "../toastContent-DuextbwO.js";
import { u as Se } from "../userStore-CK5Y1-0c.js";
import { _ as Ke } from "../_plugin-vue_export-helper-CHgC5LLL.js";
import { _ as Rt } from "../Account.vue_vue_type_script_setup_true_lang-CbaaLZ0n.js";
function Ae() {
  let t = [];
  const e = (u, c, a = 999) => {
    const o = s(u, c, a), m = o.value + (o.key === u ? 0 : a) + 1;
    return t.push({ key: u, value: m }), m;
  }, n = (u) => {
    t = t.filter((c) => c.value !== u);
  }, r = (u, c) => s(u).value, s = (u, c, a = 0) => [...t].reverse().find((o) => !0) || { key: u, value: a }, i = (u) => u && parseInt(u.style.zIndex, 10) || 0;
  return {
    get: i,
    set: (u, c, a) => {
      c && (c.style.zIndex = String(e(u, !0, a)));
    },
    clear: (u) => {
      u && (n(i(u)), u.style.zIndex = "");
    },
    getCurrent: (u) => r(u)
  };
}
var T = Ae();
const Ee = /* @__PURE__ */ _({
  __name: "ThemeToggle",
  setup(t) {
    const e = localStorage.getItem("theme") || "light", n = $(e);
    document.documentElement.classList.toggle("dark", e === "dark");
    const r = Z(() => n.value === "light" ? "pi pi-sun" : "pi pi-moon");
    function s() {
      const i = n.value === "light" ? "dark" : "light";
      localStorage.setItem("theme", i), n.value = i, document.documentElement.classList.toggle("dark", i === "dark");
    }
    return (i, u) => (l(), g(v(E), {
      id: "themeToggle",
      icon: v(r),
      variant: "outlined",
      "aria-label": "Toggle theme",
      onClick: u[0] || (u[0] = (c) => s())
    }, null, 8, ["icon"]));
  }
});
var ae = {
  name: "BarsIcon",
  extends: q
};
function Fe(t, e, n, r, s, i) {
  return l(), h("svg", d({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t.pti()), e[0] || (e[0] = [p("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
ae.render = Fe;
var Te = ({ dt: t }) => `
.p-menubar {
    display: flex;
    align-items: center;
    background: ${t("menubar.background")};
    border: 1px solid ${t("menubar.border.color")};
    border-radius: ${t("menubar.border.radius")};
    color: ${t("menubar.color")};
    padding: ${t("menubar.padding")};
    gap: ${t("menubar.gap")};
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
    gap: ${t("menubar.gap")};
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: ${t("menubar.base.item.border.radius")};
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: ${t("menubar.base.item.padding")};
}

.p-menubar-item-content {
    transition: background ${t("menubar.transition.duration")}, color ${t("menubar.transition.duration")};
    border-radius: ${t("menubar.item.border.radius")};
    color: ${t("menubar.item.color")};
}

.p-menubar-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${t("menubar.item.padding")};
    gap: ${t("menubar.item.gap")};
    user-select: none;
    outline: 0 none;
}

.p-menubar-item-label {
    line-height: 1;
}

.p-menubar-item-icon {
    color: ${t("menubar.item.icon.color")};
}

.p-menubar-submenu-icon {
    color: ${t("menubar.submenu.icon.color")};
    margin-left: auto;
    font-size: ${t("menubar.submenu.icon.size")};
    width: ${t("menubar.submenu.icon.size")};
    height: ${t("menubar.submenu.icon.size")};
}

.p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-item.p-focus > .p-menubar-item-content {
    color: ${t("menubar.item.focus.color")};
    background: ${t("menubar.item.focus.background")};
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
    color: ${t("menubar.item.icon.focus.color")};
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
    color: ${t("menubar.submenu.icon.focus.color")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
    color: ${t("menubar.item.focus.color")};
    background: ${t("menubar.item.focus.background")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
    color: ${t("menubar.item.icon.focus.color")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
    color: ${t("menubar.submenu.icon.focus.color")};
}

.p-menubar-item-active > .p-menubar-item-content {
    color: ${t("menubar.item.active.color")};
    background: ${t("menubar.item.active.background")};
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
    color: ${t("menubar.item.icon.active.color")};
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    color: ${t("menubar.submenu.icon.active.color")};
}

.p-menubar-submenu {
    display: none;
    position: absolute;
    min-width: 12.5rem;
    z-index: 1;
    background: ${t("menubar.submenu.background")};
    border: 1px solid ${t("menubar.submenu.border.color")};
    border-radius: ${t("menubar.submenu.border.radius")};
    box-shadow: ${t("menubar.submenu.shadow")};
    color: ${t("menubar.submenu.color")};
    flex-direction: column;
    padding: ${t("menubar.submenu.padding")};
    gap: ${t("menubar.submenu.gap")};
}

.p-menubar-submenu .p-menubar-separator {
    border-block-start: 1px solid ${t("menubar.separator.border.color")};
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
    width: ${t("menubar.mobile.button.size")};
    height: ${t("menubar.mobile.button.size")};
    position: relative;
    color: ${t("menubar.mobile.button.color")};
    border: 0 none;
    background: transparent;
    border-radius: ${t("menubar.mobile.button.border.radius")};
    transition: background ${t("menubar.transition.duration")}, color ${t("menubar.transition.duration")}, outline-color ${t("menubar.transition.duration")};
    outline-color: transparent;
}

.p-menubar-button:hover {
    color: ${t("menubar.mobile.button.hover.color")};
    background: ${t("menubar.mobile.button.hover.background")};
}

.p-menubar-button:focus-visible {
    box-shadow: ${t("menubar.mobile.button.focus.ring.shadow")};
    outline: ${t("menubar.mobile.button.focus.ring.width")} ${t("menubar.mobile.button.focus.ring.style")} ${t("menubar.mobile.button.focus.ring.color")};
    outline-offset: ${t("menubar.mobile.button.focus.ring.offset")};
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
    padding: ${t("menubar.submenu.padding")};
    background: ${t("menubar.submenu.background")};
    border: 1px solid ${t("menubar.submenu.border.color")};
    box-shadow: ${t("menubar.submenu.shadow")};
    border-radius: ${t("menubar.submenu.border.radius")};
    gap: ${t("menubar.submenu.gap")};
}

.p-menubar-mobile .p-menubar-root-list:dir(rtl) {
    left: auto;
    right: 0;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: ${t("menubar.item.padding")};
}

.p-menubar-mobile-active .p-menubar-root-list {
    display: flex;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-item {
    width: 100%;
    position: static;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
    border-block-start: 1px solid ${t("menubar.separator.border.color")};
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
    padding-inline-start: ${t("menubar.submenu.mobile.indent")};
    padding-inline-end: 0;
}
`, Oe = {
  submenu: function(e) {
    var n = e.instance, r = e.processedItem;
    return {
      display: n.isItemActive(r) ? "flex" : "none"
    };
  }
}, Ve = {
  root: function(e) {
    var n = e.instance;
    return ["p-menubar p-component", {
      "p-menubar-mobile": n.queryMatches,
      "p-menubar-mobile-active": n.mobileActive
    }];
  },
  start: "p-menubar-start",
  button: "p-menubar-button",
  rootList: "p-menubar-root-list",
  item: function(e) {
    var n = e.instance, r = e.processedItem;
    return ["p-menubar-item", {
      "p-menubar-item-active": n.isItemActive(r),
      "p-focus": n.isItemFocused(r),
      "p-disabled": n.isItemDisabled(r)
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
}, $e = re.extend({
  name: "menubar",
  style: Te,
  classes: Ve,
  inlineStyles: Oe
}), ue = {
  name: "AngleDownIcon",
  extends: q
};
function De(t, e, n, r, s, i) {
  return l(), h("svg", d({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t.pti()), e[0] || (e[0] = [p("path", {
    d: "M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
ue.render = De;
var W = {
  name: "AngleRightIcon",
  extends: q
};
function ze(t, e, n, r, s, i) {
  return l(), h("svg", d({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t.pti()), e[0] || (e[0] = [p("path", {
    d: "M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
W.render = ze;
var _e = {
  name: "BaseMenubar",
  extends: R,
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
  style: $e,
  provide: function() {
    return {
      $pcMenubar: this,
      $parentInstance: this
    };
  }
}, le = {
  name: "MenubarSub",
  hostName: "Menubar",
  extends: R,
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
    getItemId: function(e) {
      return "".concat(this.menuId, "_").concat(e.key);
    },
    getItemKey: function(e) {
      return this.getItemId(e);
    },
    getItemProp: function(e, n, r) {
      return e && e.item ? B(e.item[n], r) : void 0;
    },
    getItemLabel: function(e) {
      return this.getItemProp(e, "label");
    },
    getItemLabelId: function(e) {
      return "".concat(this.menuId, "_").concat(e.key, "_label");
    },
    getPTOptions: function(e, n, r) {
      return this.ptm(r, {
        context: {
          item: e.item,
          index: n,
          active: this.isItemActive(e),
          focused: this.isItemFocused(e),
          disabled: this.isItemDisabled(e),
          level: this.level
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
      return P(e.items);
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
    getAriaPosInset: function(e) {
      return e - this.calculateAriaSetSize.slice(0, e).length + 1;
    },
    getMenuItemProps: function(e, n) {
      return {
        action: d({
          class: this.cx("itemLink"),
          tabindex: -1
        }, this.getPTOptions(e, n, "itemLink")),
        icon: d({
          class: [this.cx("itemIcon"), this.getItemProp(e, "icon")]
        }, this.getPTOptions(e, n, "itemIcon")),
        label: d({
          class: this.cx("itemLabel")
        }, this.getPTOptions(e, n, "itemLabel")),
        submenuicon: d({
          class: this.cx("submenuIcon")
        }, this.getPTOptions(e, n, "submenuIcon"))
      };
    }
  },
  computed: {
    calculateAriaSetSize: function() {
      var e = this;
      return this.items.filter(function(n) {
        return e.isItemVisible(n) && e.getItemProp(n, "separator");
      });
    },
    getAriaSetSize: function() {
      var e = this;
      return this.items.filter(function(n) {
        return e.isItemVisible(n) && !e.getItemProp(n, "separator");
      }).length;
    }
  },
  components: {
    AngleRightIcon: W,
    AngleDownIcon: ue
  },
  directives: {
    ripple: ie
  }
}, Re = ["id", "aria-label", "aria-disabled", "aria-expanded", "aria-haspopup", "aria-level", "aria-setsize", "aria-posinset", "data-p-active", "data-p-focused", "data-p-disabled"], Be = ["onClick", "onMouseenter", "onMousemove"], Ge = ["href", "target"], je = ["id"], Ne = ["id"];
function He(t, e, n, r, s, i) {
  var u = C("MenubarSub", !0), c = ee("ripple");
  return l(), h("ul", d({
    class: n.level === 0 ? t.cx("rootList") : t.cx("submenu")
  }, n.level === 0 ? t.ptm("rootList") : t.ptm("submenu")), [(l(!0), h(A, null, U(n.items, function(a, o) {
    return l(), h(A, {
      key: i.getItemKey(a)
    }, [i.isItemVisible(a) && !i.getItemProp(a, "separator") ? (l(), h("li", d({
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
      "aria-setsize": i.getAriaSetSize,
      "aria-posinset": i.getAriaPosInset(o),
      ref_for: !0
    }, i.getPTOptions(a, o, "item"), {
      "data-p-active": i.isItemActive(a),
      "data-p-focused": i.isItemFocused(a),
      "data-p-disabled": i.isItemDisabled(a)
    }), [p("div", d({
      class: t.cx("itemContent"),
      onClick: function(b) {
        return i.onItemClick(b, a);
      },
      onMouseenter: function(b) {
        return i.onItemMouseEnter(b, a);
      },
      onMousemove: function(b) {
        return i.onItemMouseMove(b, a);
      },
      ref_for: !0
    }, i.getPTOptions(a, o, "itemContent")), [n.templates.item ? (l(), g(S(n.templates.item), {
      key: 1,
      item: a.item,
      root: n.root,
      hasSubmenu: i.getItemProp(a, "items"),
      label: i.getItemLabel(a),
      props: i.getMenuItemProps(a, o)
    }, null, 8, ["item", "root", "hasSubmenu", "label", "props"])) : te((l(), h("a", d({
      key: 0,
      href: i.getItemProp(a, "url"),
      class: t.cx("itemLink"),
      target: i.getItemProp(a, "target"),
      tabindex: "-1",
      ref_for: !0
    }, i.getPTOptions(a, o, "itemLink")), [n.templates.itemicon ? (l(), g(S(n.templates.itemicon), {
      key: 0,
      item: a.item,
      class: M(t.cx("itemIcon"))
    }, null, 8, ["item", "class"])) : i.getItemProp(a, "icon") ? (l(), h("span", d({
      key: 1,
      class: [t.cx("itemIcon"), i.getItemProp(a, "icon")],
      ref_for: !0
    }, i.getPTOptions(a, o, "itemIcon")), null, 16)) : I("", !0), p("span", d({
      id: i.getItemLabelId(a),
      class: t.cx("itemLabel"),
      ref_for: !0
    }, i.getPTOptions(a, o, "itemLabel")), D(i.getItemLabel(a)), 17, je), i.getItemProp(a, "items") ? (l(), h(A, {
      key: 2
    }, [n.templates.submenuicon ? (l(), g(S(n.templates.submenuicon), {
      key: 0,
      root: n.root,
      active: i.isItemActive(a),
      class: M(t.cx("submenuIcon"))
    }, null, 8, ["root", "active", "class"])) : (l(), g(S(n.root ? "AngleDownIcon" : "AngleRightIcon"), d({
      key: 1,
      class: t.cx("submenuIcon"),
      ref_for: !0
    }, i.getPTOptions(a, o, "submenuIcon")), null, 16, ["class"]))], 64)) : I("", !0)], 16, Ge)), [[c]])], 16, Be), i.isItemVisible(a) && i.isItemGroup(a) ? (l(), g(u, {
      key: 0,
      id: i.getItemId(a) + "_list",
      menuId: n.menuId,
      role: "menu",
      style: be(t.sx("submenu", !0, {
        processedItem: a
      })),
      focusedItemId: n.focusedItemId,
      items: a.items,
      mobileActive: n.mobileActive,
      activeItemPath: n.activeItemPath,
      templates: n.templates,
      level: n.level + 1,
      "aria-labelledby": i.getItemLabelId(a),
      pt: t.pt,
      unstyled: t.unstyled,
      onItemClick: e[0] || (e[0] = function(m) {
        return t.$emit("item-click", m);
      }),
      onItemMouseenter: e[1] || (e[1] = function(m) {
        return t.$emit("item-mouseenter", m);
      }),
      onItemMousemove: e[2] || (e[2] = function(m) {
        return t.$emit("item-mousemove", m);
      })
    }, null, 8, ["id", "menuId", "style", "focusedItemId", "items", "mobileActive", "activeItemPath", "templates", "level", "aria-labelledby", "pt", "unstyled"])) : I("", !0)], 16, Re)) : I("", !0), i.isItemVisible(a) && i.getItemProp(a, "separator") ? (l(), h("li", d({
      key: 1,
      id: i.getItemId(a),
      class: [t.cx("separator"), i.getItemProp(a, "class")],
      style: i.getItemProp(a, "style"),
      role: "separator",
      ref_for: !0
    }, t.ptm("separator")), null, 16, Ne)) : I("", !0)], 64);
  }), 128))], 16);
}
le.render = He;
var me = {
  name: "Menubar",
  extends: _e,
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
    activeItemPath: function(e) {
      P(e) ? (this.bindOutsideClickListener(), this.bindResizeListener()) : (this.unbindOutsideClickListener(), this.unbindResizeListener());
    }
  },
  outsideClickListener: null,
  container: null,
  menubar: null,
  mounted: function() {
    this.bindMatchMediaListener();
  },
  beforeUnmount: function() {
    this.mobileActive = !1, this.unbindOutsideClickListener(), this.unbindResizeListener(), this.unbindMatchMediaListener(), this.container && T.clear(this.container), this.container = null;
  },
  methods: {
    getItemProp: function(e, n) {
      return e ? B(e[n]) : void 0;
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
      return P(this.getItemProp(e, "items"));
    },
    isItemSeparator: function(e) {
      return this.getItemProp(e, "separator");
    },
    getProccessedItemLabel: function(e) {
      return e ? this.getItemLabel(e.item) : void 0;
    },
    isProccessedItemGroup: function(e) {
      return e && P(e.items);
    },
    toggle: function(e) {
      var n = this;
      this.mobileActive ? (this.mobileActive = !1, T.clear(this.menubar), this.hide()) : (this.mobileActive = !0, T.set("menu", this.menubar, this.$primevue.config.zIndex.menu), setTimeout(function() {
        n.show();
      }, 1)), this.bindOutsideClickListener(), e.preventDefault();
    },
    show: function() {
      k(this.menubar);
    },
    hide: function(e, n) {
      var r = this;
      this.mobileActive && (this.mobileActive = !1, setTimeout(function() {
        k(r.$refs.menubutton);
      }, 0)), this.activeItemPath = [], this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      }, n && k(this.menubar), this.dirty = !1;
    },
    onFocus: function(e) {
      this.focused = !0, this.focusedItemInfo = this.focusedItemInfo.index !== -1 ? this.focusedItemInfo : {
        index: this.findFirstFocusedItemIndex(),
        level: 0,
        parentKey: ""
      }, this.$emit("focus", e);
    },
    onBlur: function(e) {
      this.focused = !1, this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      }, this.searchValue = "", this.dirty = !1, this.$emit("blur", e);
    },
    onKeyDown: function(e) {
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
          !n && oe(e.key) && this.searchItems(e, e.key);
          break;
      }
    },
    onItemChange: function(e, n) {
      var r = e.processedItem, s = e.isFocus;
      if (!K(r)) {
        var i = r.index, u = r.key, c = r.level, a = r.parentKey, o = r.items, m = P(o), b = this.activeItemPath.filter(function(f) {
          return f.parentKey !== a && f.parentKey !== u;
        });
        m && b.push(r), this.focusedItemInfo = {
          index: i,
          level: c,
          parentKey: a
        }, m && (this.dirty = !0), s && k(this.menubar), !(n === "hover" && this.queryMatches) && (this.activeItemPath = b);
      }
    },
    onItemClick: function(e) {
      var n = e.originalEvent, r = e.processedItem, s = this.isProccessedItemGroup(r), i = K(r.parent), u = this.isSelected(r);
      if (u) {
        var c = r.index, a = r.key, o = r.level, m = r.parentKey;
        this.activeItemPath = this.activeItemPath.filter(function(f) {
          return a !== f.key && a.startsWith(f.key);
        }), this.focusedItemInfo = {
          index: c,
          level: o,
          parentKey: m
        }, this.dirty = !i, k(this.menubar);
      } else if (s)
        this.onItemChange(e);
      else {
        var b = i ? r : this.activeItemPath.find(function(f) {
          return f.parentKey === "";
        });
        this.hide(n), this.changeFocusedItemIndex(n, b ? b.index : -1), this.mobileActive = !1, k(this.menubar);
      }
    },
    onItemMouseEnter: function(e) {
      this.dirty && this.onItemChange(e, "hover");
    },
    onItemMouseMove: function(e) {
      this.focused && this.changeFocusedItemIndex(e, e.processedItem.index);
    },
    menuButtonClick: function(e) {
      this.toggle(e);
    },
    menuButtonKeydown: function(e) {
      (e.code === "Enter" || e.code === "NumpadEnter" || e.code === "Space") && this.menuButtonClick(e);
    },
    onArrowDownKey: function(e) {
      var n = this.visibleItems[this.focusedItemInfo.index], r = n ? K(n.parent) : null;
      if (r) {
        var s = this.isProccessedItemGroup(n);
        s && (this.onItemChange({
          originalEvent: e,
          processedItem: n
        }), this.focusedItemInfo = {
          index: -1,
          parentKey: n.key
        }, this.onArrowRightKey(e));
      } else {
        var i = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();
        this.changeFocusedItemIndex(e, i);
      }
      e.preventDefault();
    },
    onArrowUpKey: function(e) {
      var n = this, r = this.visibleItems[this.focusedItemInfo.index], s = K(r.parent);
      if (s) {
        var i = this.isProccessedItemGroup(r);
        if (i) {
          this.onItemChange({
            originalEvent: e,
            processedItem: r
          }), this.focusedItemInfo = {
            index: -1,
            parentKey: r.key
          };
          var u = this.findLastItemIndex();
          this.changeFocusedItemIndex(e, u);
        }
      } else {
        var c = this.activeItemPath.find(function(o) {
          return o.key === r.parentKey;
        });
        if (this.focusedItemInfo.index === 0)
          this.focusedItemInfo = {
            index: -1,
            parentKey: c ? c.parentKey : ""
          }, this.searchValue = "", this.onArrowLeftKey(e), this.activeItemPath = this.activeItemPath.filter(function(o) {
            return o.parentKey !== n.focusedItemInfo.parentKey;
          });
        else {
          var a = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
          this.changeFocusedItemIndex(e, a);
        }
      }
      e.preventDefault();
    },
    onArrowLeftKey: function(e) {
      var n = this, r = this.visibleItems[this.focusedItemInfo.index], s = r ? this.activeItemPath.find(function(u) {
        return u.key === r.parentKey;
      }) : null;
      if (s)
        this.onItemChange({
          originalEvent: e,
          processedItem: s
        }), this.activeItemPath = this.activeItemPath.filter(function(u) {
          return u.parentKey !== n.focusedItemInfo.parentKey;
        }), e.preventDefault();
      else {
        var i = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemIndex(e, i), e.preventDefault();
      }
    },
    onArrowRightKey: function(e) {
      var n = this.visibleItems[this.focusedItemInfo.index], r = n ? this.activeItemPath.find(function(u) {
        return u.key === n.parentKey;
      }) : null;
      if (r) {
        var s = this.isProccessedItemGroup(n);
        s && (this.onItemChange({
          originalEvent: e,
          processedItem: n
        }), this.focusedItemInfo = {
          index: -1,
          parentKey: n.key
        }, this.onArrowDownKey(e));
      } else {
        var i = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();
        this.changeFocusedItemIndex(e, i), e.preventDefault();
      }
    },
    onHomeKey: function(e) {
      this.changeFocusedItemIndex(e, this.findFirstItemIndex()), e.preventDefault();
    },
    onEndKey: function(e) {
      this.changeFocusedItemIndex(e, this.findLastItemIndex()), e.preventDefault();
    },
    onEnterKey: function(e) {
      if (this.focusedItemInfo.index !== -1) {
        var n = F(this.menubar, 'li[id="'.concat("".concat(this.focusedItemId), '"]')), r = n && F(n, 'a[data-pc-section="itemlink"]');
        r ? r.click() : n && n.click();
        var s = this.visibleItems[this.focusedItemInfo.index], i = this.isProccessedItemGroup(s);
        !i && (this.focusedItemInfo.index = this.findFirstFocusedItemIndex());
      }
      e.preventDefault();
    },
    onSpaceKey: function(e) {
      this.onEnterKey(e);
    },
    onEscapeKey: function(e) {
      if (this.focusedItemInfo.level !== 0) {
        var n = this.focusedItemInfo;
        this.hide(e, !1), this.focusedItemInfo = {
          index: Number(n.parentKey.split("_")[0]),
          level: 0,
          parentKey: ""
        };
      }
      e.preventDefault();
    },
    onTabKey: function(e) {
      if (this.focusedItemInfo.index !== -1) {
        var n = this.visibleItems[this.focusedItemInfo.index], r = this.isProccessedItemGroup(n);
        !r && this.onItemChange({
          originalEvent: e,
          processedItem: n
        });
      }
      this.hide();
    },
    bindOutsideClickListener: function() {
      var e = this;
      this.outsideClickListener || (this.outsideClickListener = function(n) {
        var r = e.container && !e.container.contains(n.target), s = !(e.target && (e.target === n.target || e.target.contains(n.target)));
        r && s && e.hide();
      }, document.addEventListener("click", this.outsideClickListener, !0));
    },
    unbindOutsideClickListener: function() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener, !0), this.outsideClickListener = null);
    },
    bindResizeListener: function() {
      var e = this;
      this.resizeListener || (this.resizeListener = function(n) {
        se() || e.hide(n, !0), e.mobileActive = !1;
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
          e.queryMatches = n.matches, e.mobileActive = !1;
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
      return z(this.visibleItems, function(n) {
        return e.isValidItem(n);
      });
    },
    findNextItemIndex: function(e) {
      var n = this, r = e < this.visibleItems.length - 1 ? this.visibleItems.slice(e + 1).findIndex(function(s) {
        return n.isValidItem(s);
      }) : -1;
      return r > -1 ? r + e + 1 : e;
    },
    findPrevItemIndex: function(e) {
      var n = this, r = e > 0 ? z(this.visibleItems.slice(0, e), function(s) {
        return n.isValidItem(s);
      }) : -1;
      return r > -1 ? r : e;
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
      var r = this;
      this.searchValue = (this.searchValue || "") + n;
      var s = -1, i = !1;
      return this.focusedItemInfo.index !== -1 ? (s = this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(u) {
        return r.isItemMatched(u);
      }), s = s === -1 ? this.visibleItems.slice(0, this.focusedItemInfo.index).findIndex(function(u) {
        return r.isItemMatched(u);
      }) : s + this.focusedItemInfo.index) : s = this.visibleItems.findIndex(function(u) {
        return r.isItemMatched(u);
      }), s !== -1 && (i = !0), s === -1 && this.focusedItemInfo.index === -1 && (s = this.findFirstFocusedItemIndex()), s !== -1 && this.changeFocusedItemIndex(e, s), this.searchTimeout && clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout(function() {
        r.searchValue = "", r.searchTimeout = null;
      }, 500), i;
    },
    changeFocusedItemIndex: function(e, n) {
      this.focusedItemInfo.index !== n && (this.focusedItemInfo.index = n, this.scrollInView());
    },
    scrollInView: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1, n = e !== -1 ? "".concat(this.$id, "_").concat(e) : this.focusedItemId, r = F(this.menubar, 'li[id="'.concat(n, '"]'));
      r && r.scrollIntoView && r.scrollIntoView({
        block: "nearest",
        inline: "start"
      });
    },
    createProcessedItems: function(e) {
      var n = this, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "", u = [];
      return e && e.forEach(function(c, a) {
        var o = (i !== "" ? i + "_" : "") + a, m = {
          item: c,
          index: a,
          level: r,
          key: o,
          parent: s,
          parentKey: i
        };
        m.items = n.createProcessedItems(c.items, r + 1, m, o), u.push(m);
      }), u;
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
      var e = this, n = this.activeItemPath.find(function(r) {
        return r.key === e.focusedItemInfo.parentKey;
      });
      return n ? n.items : this.processedItems;
    },
    focusedItemId: function() {
      return this.focusedItemInfo.index !== -1 ? "".concat(this.$id).concat(P(this.focusedItemInfo.parentKey) ? "_" + this.focusedItemInfo.parentKey : "", "_").concat(this.focusedItemInfo.index) : null;
    }
  },
  components: {
    MenubarSub: le,
    BarsIcon: ae
  }
};
function O(t) {
  "@babel/helpers - typeof";
  return O = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, O(t);
}
function X(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Y(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? X(Object(n), !0).forEach(function(r) {
      Ze(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : X(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Ze(t, e, n) {
  return (e = Ue(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Ue(t) {
  var e = qe(t, "string");
  return O(e) == "symbol" ? e : e + "";
}
function qe(t, e) {
  if (O(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (O(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var We = ["aria-haspopup", "aria-expanded", "aria-controls", "aria-label"];
function Je(t, e, n, r, s, i) {
  var u = C("BarsIcon"), c = C("MenubarSub");
  return l(), h("div", d({
    ref: i.containerRef,
    class: t.cx("root")
  }, t.ptmi("root")), [t.$slots.start ? (l(), h("div", d({
    key: 0,
    class: t.cx("start")
  }, t.ptm("start")), [w(t.$slots, "start")], 16)) : I("", !0), w(t.$slots, t.$slots.button ? "button" : "menubutton", {
    id: t.$id,
    class: M(t.cx("button")),
    toggleCallback: function(o) {
      return i.menuButtonClick(o);
    }
  }, function() {
    var a;
    return [t.model && t.model.length > 0 ? (l(), h("a", d({
      key: 0,
      ref: "menubutton",
      role: "button",
      tabindex: "0",
      class: t.cx("button"),
      "aria-haspopup": !!(t.model.length && t.model.length > 0),
      "aria-expanded": s.mobileActive,
      "aria-controls": t.$id,
      "aria-label": (a = t.$primevue.config.locale.aria) === null || a === void 0 ? void 0 : a.navigation,
      onClick: e[0] || (e[0] = function(o) {
        return i.menuButtonClick(o);
      }),
      onKeydown: e[1] || (e[1] = function(o) {
        return i.menuButtonKeydown(o);
      })
    }, Y(Y({}, t.buttonProps), t.ptm("button"))), [w(t.$slots, t.$slots.buttonicon ? "buttonicon" : "menubuttonicon", {}, function() {
      return [L(u, Ie(pe(t.ptm("buttonicon"))), null, 16)];
    })], 16, We)) : I("", !0)];
  }), L(c, {
    ref: i.menubarRef,
    id: t.$id + "_list",
    role: "menubar",
    items: i.processedItems,
    templates: t.$slots,
    root: !0,
    mobileActive: s.mobileActive,
    tabindex: "0",
    "aria-activedescendant": s.focused ? i.focusedItemId : void 0,
    menuId: t.$id,
    focusedItemId: s.focused ? i.focusedItemId : void 0,
    activeItemPath: s.activeItemPath,
    level: 0,
    "aria-labelledby": t.ariaLabelledby,
    "aria-label": t.ariaLabel,
    pt: t.pt,
    unstyled: t.unstyled,
    onFocus: i.onFocus,
    onBlur: i.onBlur,
    onKeydown: i.onKeyDown,
    onItemClick: i.onItemClick,
    onItemMouseenter: i.onItemMouseEnter,
    onItemMousemove: i.onItemMouseMove
  }, null, 8, ["id", "items", "templates", "mobileActive", "aria-activedescendant", "menuId", "focusedItemId", "activeItemPath", "aria-labelledby", "aria-label", "pt", "unstyled", "onFocus", "onBlur", "onKeydown", "onItemClick", "onItemMouseenter", "onItemMousemove"]), t.$slots.end ? (l(), h("div", d({
    key: 1,
    class: t.cx("end")
  }, t.ptm("end")), [w(t.$slots, "end")], 16)) : I("", !0)], 16);
}
me.render = Je;
function V(t) {
  "@babel/helpers - typeof";
  return V = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, V(t);
}
function Qe(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function Xe(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, et(r.key), r);
  }
}
function Ye(t, e, n) {
  return e && Xe(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function et(t) {
  var e = tt(t, "string");
  return V(e) == "symbol" ? e : e + "";
}
function tt(t, e) {
  if (V(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (V(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var nt = /* @__PURE__ */ function() {
  function t(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
    };
    Qe(this, t), this.element = e, this.listener = n;
  }
  return Ye(t, [{
    key: "bindScrollListener",
    value: function() {
      this.scrollableParents = ke(this.element);
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
}(), it = Le(), de = {
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
    this.mounted = Pe();
  },
  computed: {
    inline: function() {
      return this.disabled || this.appendTo === "self";
    }
  }
};
function rt(t, e, n, r, s, i) {
  return i.inline ? w(t.$slots, "default", {
    key: 0
  }) : s.mounted ? (l(), g(ge, {
    key: 1,
    to: n.appendTo
  }, [w(t.$slots, "default")], 8, ["to"])) : I("", !0);
}
de.render = rt;
var st = ({ dt: t }) => `
.p-tieredmenu {
    background: ${t("tieredmenu.background")};
    color: ${t("tieredmenu.color")};
    border: 1px solid ${t("tieredmenu.border.color")};
    border-radius: ${t("tieredmenu.border.radius")};
    min-width: 12.5rem;
}

.p-tieredmenu-root-list,
.p-tieredmenu-submenu {
    margin: 0;
    padding: ${t("tieredmenu.list.padding")};
    list-style: none;
    outline: 0 none;
    display: flex;
    flex-direction: column;
    gap: ${t("tieredmenu.list.gap")};
}

.p-tieredmenu-submenu {
    position: absolute;
    min-width: 100%;
    z-index: 1;
    background: ${t("tieredmenu.background")};
    color: ${t("tieredmenu.color")};
    border: 1px solid ${t("tieredmenu.border.color")};
    border-radius: ${t("tieredmenu.border.radius")};
    box-shadow: ${t("tieredmenu.shadow")};
}

.p-tieredmenu-item {
    position: relative;
}

.p-tieredmenu-item-content {
    transition: background ${t("tieredmenu.transition.duration")}, color ${t("tieredmenu.transition.duration")};
    border-radius: ${t("tieredmenu.item.border.radius")};
    color: ${t("tieredmenu.item.color")};
}

.p-tieredmenu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${t("tieredmenu.item.padding")};
    gap: ${t("tieredmenu.item.gap")};
    user-select: none;
    outline: 0 none;
}

.p-tieredmenu-item-label {
    line-height: 1;
}

.p-tieredmenu-item-icon {
    color: ${t("tieredmenu.item.icon.color")};
}

.p-tieredmenu-submenu-icon {
    color: ${t("tieredmenu.submenu.icon.color")};
    margin-left: auto;
    font-size: ${t("tieredmenu.submenu.icon.size")};
    width: ${t("tieredmenu.submenu.icon.size")};
    height: ${t("tieredmenu.submenu.icon.size")};
}

.p-tieredmenu-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content {
    color: ${t("tieredmenu.item.focus.color")};
    background: ${t("tieredmenu.item.focus.background")};
}

.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
    color: ${t("tieredmenu.item.icon.focus.color")};
}

.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
    color: ${t("tieredmenu.submenu.icon.focus.color")};
}

.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover {
    color: ${t("tieredmenu.item.focus.color")};
    background: ${t("tieredmenu.item.focus.background")};
}

.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-item-icon {
    color: ${t("tieredmenu.item.icon.focus.color")};
}

.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-submenu-icon {
    color: ${t("tieredmenu.submenu.icon.focus.color")};
}

.p-tieredmenu-item-active > .p-tieredmenu-item-content {
    color: ${t("tieredmenu.item.active.color")};
    background: ${t("tieredmenu.item.active.background")};
}

.p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
    color: ${t("tieredmenu.item.icon.active.color")};
}

.p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
    color: ${t("tieredmenu.submenu.icon.active.color")};
}

.p-tieredmenu-separator {
    border-block-start: 1px solid ${t("tieredmenu.separator.border.color")};
}

.p-tieredmenu-overlay {
    box-shadow: ${t("tieredmenu.shadow")};
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
    padding-inline-start: ${t("tieredmenu.submenu.mobile.indent")};
    padding-inline-end: 0;
}

.p-tieredmenu-mobile .p-tieredmenu-submenu:dir(rtl) {
    padding-inline-start: 0;
    padding-inline-end: ${t("tieredmenu.submenu.mobile.indent")};
}

.p-tieredmenu-mobile .p-tieredmenu-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-tieredmenu-mobile .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
    transform: rotate(-90deg);
}
`, ot = {
  submenu: function(e) {
    var n = e.instance, r = e.processedItem;
    return {
      display: n.isItemActive(r) ? "flex" : "none"
    };
  }
}, at = {
  root: function(e) {
    var n = e.props, r = e.instance;
    return ["p-tieredmenu p-component", {
      "p-tieredmenu-overlay": n.popup,
      "p-tieredmenu-mobile": r.queryMatches
    }];
  },
  start: "p-tieredmenu-start",
  rootList: "p-tieredmenu-root-list",
  item: function(e) {
    var n = e.instance, r = e.processedItem;
    return ["p-tieredmenu-item", {
      "p-tieredmenu-item-active": n.isItemActive(r),
      "p-focus": n.isItemFocused(r),
      "p-disabled": n.isItemDisabled(r)
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
}, ut = re.extend({
  name: "tieredmenu",
  style: st,
  classes: at,
  inlineStyles: ot
}), lt = {
  name: "BaseTieredMenu",
  extends: R,
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
  style: ut,
  provide: function() {
    return {
      $pcTieredMenu: this,
      $parentInstance: this
    };
  }
}, ce = {
  name: "TieredMenuSub",
  hostName: "TieredMenu",
  extends: R,
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
    getItemProp: function(e, n, r) {
      return e && e.item ? B(e.item[n], r) : void 0;
    },
    getItemLabel: function(e) {
      return this.getItemProp(e, "label");
    },
    getItemLabelId: function(e) {
      return "".concat(this.menuId, "_").concat(e.key, "_label");
    },
    getPTOptions: function(e, n, r) {
      return this.ptm(r, {
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
      return P(e.items);
    },
    onEnter: function() {
      Ce(this.container, this.level);
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
      return e - this.items.slice(0, e).filter(function(r) {
        return n.isItemVisible(r) && n.getItemProp(r, "separator");
      }).length + 1;
    },
    getMenuItemProps: function(e, n) {
      return {
        action: d({
          class: this.cx("itemLink"),
          tabindex: -1
        }, this.getPTOptions(e, n, "itemLink")),
        icon: d({
          class: [this.cx("itemIcon"), this.getItemProp(e, "icon")]
        }, this.getPTOptions(e, n, "itemIcon")),
        label: d({
          class: this.cx("itemLabel")
        }, this.getPTOptions(e, n, "itemLabel")),
        submenuicon: d({
          class: this.cx("submenuIcon")
        }, this.getPTOptions(e, n, "submenuIcon"))
      };
    },
    containerRef: function(e) {
      this.container = e;
    }
  },
  components: {
    AngleRightIcon: W
  },
  directives: {
    ripple: ie
  }
}, mt = ["tabindex"], dt = ["id", "aria-label", "aria-disabled", "aria-expanded", "aria-haspopup", "aria-level", "aria-setsize", "aria-posinset", "data-p-active", "data-p-focused", "data-p-disabled"], ct = ["onClick", "onMouseenter", "onMousemove"], ft = ["href", "target"], ht = ["id"], bt = ["id"];
function It(t, e, n, r, s, i) {
  var u = C("AngleRightIcon"), c = C("TieredMenuSub", !0), a = ee("ripple");
  return l(), g(ne, d({
    name: "p-tieredmenu",
    onEnter: i.onEnter
  }, t.ptm("menu.transition")), {
    default: y(function() {
      return [n.level === 0 || n.visible ? (l(), h("ul", {
        key: 0,
        ref: i.containerRef,
        tabindex: n.tabindex
      }, [(l(!0), h(A, null, U(n.items, function(o, m) {
        return l(), h(A, {
          key: i.getItemKey(o)
        }, [i.isItemVisible(o) && !i.getItemProp(o, "separator") ? (l(), h("li", d({
          key: 0,
          id: i.getItemId(o),
          style: i.getItemProp(o, "style"),
          class: [t.cx("item", {
            processedItem: o
          }), i.getItemProp(o, "class")],
          role: "menuitem",
          "aria-label": i.getItemLabel(o),
          "aria-disabled": i.isItemDisabled(o) || void 0,
          "aria-expanded": i.isItemGroup(o) ? i.isItemActive(o) : void 0,
          "aria-haspopup": i.isItemGroup(o) && !i.getItemProp(o, "to") ? "menu" : void 0,
          "aria-level": n.level + 1,
          "aria-setsize": i.getAriaSetSize(),
          "aria-posinset": i.getAriaPosInset(m),
          ref_for: !0
        }, i.getPTOptions(o, m, "item"), {
          "data-p-active": i.isItemActive(o),
          "data-p-focused": i.isItemFocused(o),
          "data-p-disabled": i.isItemDisabled(o)
        }), [p("div", d({
          class: t.cx("itemContent"),
          onClick: function(f) {
            return i.onItemClick(f, o);
          },
          onMouseenter: function(f) {
            return i.onItemMouseEnter(f, o);
          },
          onMousemove: function(f) {
            return i.onItemMouseMove(f, o);
          },
          ref_for: !0
        }, i.getPTOptions(o, m, "itemContent")), [n.templates.item ? (l(), g(S(n.templates.item), {
          key: 1,
          item: o.item,
          hasSubmenu: i.getItemProp(o, "items"),
          label: i.getItemLabel(o),
          props: i.getMenuItemProps(o, m)
        }, null, 8, ["item", "hasSubmenu", "label", "props"])) : te((l(), h("a", d({
          key: 0,
          href: i.getItemProp(o, "url"),
          class: t.cx("itemLink"),
          target: i.getItemProp(o, "target"),
          tabindex: "-1",
          ref_for: !0
        }, i.getPTOptions(o, m, "itemLink")), [n.templates.itemicon ? (l(), g(S(n.templates.itemicon), {
          key: 0,
          item: o.item,
          class: M(t.cx("itemIcon"))
        }, null, 8, ["item", "class"])) : i.getItemProp(o, "icon") ? (l(), h("span", d({
          key: 1,
          class: [t.cx("itemIcon"), i.getItemProp(o, "icon")],
          ref_for: !0
        }, i.getPTOptions(o, m, "itemIcon")), null, 16)) : I("", !0), p("span", d({
          id: i.getItemLabelId(o),
          class: t.cx("itemLabel"),
          ref_for: !0
        }, i.getPTOptions(o, m, "itemLabel")), D(i.getItemLabel(o)), 17, ht), i.getItemProp(o, "items") ? (l(), h(A, {
          key: 2
        }, [n.templates.submenuicon ? (l(), g(S(n.templates.submenuicon), d({
          key: 0,
          class: t.cx("submenuIcon"),
          active: i.isItemActive(o),
          ref_for: !0
        }, i.getPTOptions(o, m, "submenuIcon")), null, 16, ["class", "active"])) : (l(), g(u, d({
          key: 1,
          class: t.cx("submenuIcon"),
          ref_for: !0
        }, i.getPTOptions(o, m, "submenuIcon")), null, 16, ["class"]))], 64)) : I("", !0)], 16, ft)), [[a]])], 16, ct), i.isItemVisible(o) && i.isItemGroup(o) ? (l(), g(c, d({
          key: 0,
          id: i.getItemId(o) + "_list",
          class: t.cx("submenu"),
          style: t.sx("submenu", !0, {
            processedItem: o
          }),
          "aria-labelledby": i.getItemLabelId(o),
          role: "menu",
          menuId: n.menuId,
          focusedItemId: n.focusedItemId,
          items: o.items,
          templates: n.templates,
          activeItemPath: n.activeItemPath,
          level: n.level + 1,
          visible: i.isItemActive(o) && i.isItemGroup(o),
          pt: t.pt,
          unstyled: t.unstyled,
          onItemClick: e[0] || (e[0] = function(b) {
            return t.$emit("item-click", b);
          }),
          onItemMouseenter: e[1] || (e[1] = function(b) {
            return t.$emit("item-mouseenter", b);
          }),
          onItemMousemove: e[2] || (e[2] = function(b) {
            return t.$emit("item-mousemove", b);
          }),
          ref_for: !0
        }, t.ptm("submenu")), null, 16, ["id", "class", "style", "aria-labelledby", "menuId", "focusedItemId", "items", "templates", "activeItemPath", "level", "visible", "pt", "unstyled"])) : I("", !0)], 16, dt)) : I("", !0), i.isItemVisible(o) && i.getItemProp(o, "separator") ? (l(), h("li", d({
          key: 1,
          id: i.getItemId(o),
          style: i.getItemProp(o, "style"),
          class: [t.cx("separator"), i.getItemProp(o, "class")],
          role: "separator",
          ref_for: !0
        }, t.ptm("separator")), null, 16, bt)) : I("", !0)], 64);
      }), 128))], 8, mt)) : I("", !0)];
    }),
    _: 1
  }, 16, ["onEnter"]);
}
ce.render = It;
var fe = {
  name: "TieredMenu",
  extends: lt,
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
      this.popup || (P(e) ? (this.bindOutsideClickListener(), this.bindResizeListener()) : (this.unbindOutsideClickListener(), this.unbindResizeListener()));
    }
  },
  mounted: function() {
    this.bindMatchMediaListener();
  },
  beforeUnmount: function() {
    this.unbindOutsideClickListener(), this.unbindResizeListener(), this.unbindMatchMediaListener(), this.scrollHandler && (this.scrollHandler.destroy(), this.scrollHandler = null), this.container && this.autoZIndex && T.clear(this.container), this.target = null, this.container = null;
  },
  methods: {
    getItemProp: function(e, n) {
      return e ? B(e[n]) : void 0;
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
      return P(this.getItemProp(e, "items"));
    },
    isItemSeparator: function(e) {
      return this.getItemProp(e, "separator");
    },
    getProccessedItemLabel: function(e) {
      return e ? this.getItemLabel(e.item) : void 0;
    },
    isProccessedItemGroup: function(e) {
      return e && P(e.items);
    },
    toggle: function(e) {
      this.visible ? this.hide(e, !0) : this.show(e);
    },
    show: function(e, n) {
      this.popup && (this.$emit("before-show"), this.visible = !0, this.target = this.target || e.currentTarget, this.relatedTarget = e.relatedTarget || null), n && k(this.menubar);
    },
    hide: function(e, n) {
      this.popup && (this.$emit("before-hide"), this.visible = !1), this.activeItemPath = [], this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      }, n && k(this.relatedTarget || this.target || this.menubar), this.dirty = !1;
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
          !n && oe(e.key) && this.searchItems(e, e.key);
          break;
      }
    },
    onItemChange: function(e, n) {
      var r = e.processedItem, s = e.isFocus;
      if (!K(r)) {
        var i = r.index, u = r.key, c = r.level, a = r.parentKey, o = r.items, m = P(o), b = this.activeItemPath.filter(function(f) {
          return f.parentKey !== a && f.parentKey !== u;
        });
        m && (b.push(r), this.submenuVisible = !0), this.focusedItemInfo = {
          index: i,
          level: c,
          parentKey: a
        }, m && (this.dirty = !0), s && k(this.menubar), !(n === "hover" && this.queryMatches) && (this.activeItemPath = b);
      }
    },
    onOverlayClick: function(e) {
      it.emit("overlay-click", {
        originalEvent: e,
        target: this.target
      });
    },
    onItemClick: function(e) {
      var n = e.originalEvent, r = e.processedItem, s = this.isProccessedItemGroup(r), i = K(r.parent), u = this.isSelected(r);
      if (u) {
        var c = r.index, a = r.key, o = r.level, m = r.parentKey;
        this.activeItemPath = this.activeItemPath.filter(function(f) {
          return a !== f.key && a.startsWith(f.key);
        }), this.focusedItemInfo = {
          index: c,
          level: o,
          parentKey: m
        }, this.dirty = !i, k(this.menubar);
      } else if (s)
        this.onItemChange(e);
      else {
        var b = i ? r : this.activeItemPath.find(function(f) {
          return f.parentKey === "";
        });
        this.hide(n), this.changeFocusedItemIndex(n, b ? b.index : -1), k(this.menubar);
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
          var n = this.visibleItems[this.focusedItemInfo.index], r = this.isProccessedItemGroup(n);
          !r && this.onItemChange({
            originalEvent: e,
            processedItem: n
          });
        }
        this.popup && this.hide(e, !0), e.preventDefault();
      } else {
        var s = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemIndex(e, s), e.preventDefault();
      }
    },
    onArrowLeftKey: function(e) {
      var n = this, r = this.visibleItems[this.focusedItemInfo.index], s = this.activeItemPath.find(function(u) {
        return u.key === r.parentKey;
      }), i = K(r.parent);
      i || (this.focusedItemInfo = {
        index: -1,
        parentKey: s ? s.parentKey : ""
      }, this.searchValue = "", this.onArrowDownKey(e)), this.activeItemPath = this.activeItemPath.filter(function(u) {
        return u.parentKey !== n.focusedItemInfo.parentKey;
      }), e.preventDefault();
    },
    onArrowRightKey: function(e) {
      var n = this.visibleItems[this.focusedItemInfo.index], r = this.isProccessedItemGroup(n);
      r && (this.onItemChange({
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
        var n = F(this.menubar, 'li[id="'.concat("".concat(this.focusedItemId), '"]')), r = n && F(n, '[data-pc-section="itemlink"]');
        if (r ? r.click() : n && n.click(), !this.popup) {
          var s = this.visibleItems[this.focusedItemInfo.index], i = this.isProccessedItemGroup(s);
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
        }, this.popup && k(this.target);
      }
      e.preventDefault();
    },
    onTabKey: function(e) {
      if (this.focusedItemInfo.index !== -1) {
        var n = this.visibleItems[this.focusedItemInfo.index], r = this.isProccessedItemGroup(n);
        !r && this.onItemChange({
          originalEvent: e,
          processedItem: n
        });
      }
      this.hide();
    },
    onEnter: function(e) {
      this.autoZIndex && T.set("menu", e, this.baseZIndex + this.$primevue.config.zIndex.menu), we(e, {
        position: "absolute",
        top: "0"
      }), this.alignOverlay(), k(this.menubar), this.scrollInView();
    },
    onAfterEnter: function() {
      this.bindOutsideClickListener(), this.bindScrollListener(), this.bindResizeListener(), this.$emit("show");
    },
    onLeave: function() {
      this.unbindOutsideClickListener(), this.unbindScrollListener(), this.unbindResizeListener(), this.$emit("hide"), this.container = null, this.dirty = !1;
    },
    onAfterLeave: function(e) {
      this.autoZIndex && T.clear(e);
    },
    alignOverlay: function() {
      xe(this.container, this.target);
      var e = H(this.target);
      e > H(this.container) && (this.container.style.minWidth = H(this.target) + "px");
    },
    bindOutsideClickListener: function() {
      var e = this;
      this.outsideClickListener || (this.outsideClickListener = function(n) {
        var r = e.container && !e.container.contains(n.target), s = e.popup ? !(e.target && (e.target === n.target || e.target.contains(n.target))) : !0;
        r && s && e.hide();
      }, document.addEventListener("click", this.outsideClickListener, !0));
    },
    unbindOutsideClickListener: function() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener, !0), this.outsideClickListener = null);
    },
    bindScrollListener: function() {
      var e = this;
      this.scrollHandler || (this.scrollHandler = new nt(this.target, function(n) {
        e.hide(n, !0);
      })), this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function() {
      this.scrollHandler && this.scrollHandler.unbindScrollListener();
    },
    bindResizeListener: function() {
      var e = this;
      this.resizeListener || (this.resizeListener = function(n) {
        se() || e.hide(n, !0);
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
      return z(this.visibleItems, function(n) {
        return e.isValidItem(n);
      });
    },
    findNextItemIndex: function(e) {
      var n = this, r = e < this.visibleItems.length - 1 ? this.visibleItems.slice(e + 1).findIndex(function(s) {
        return n.isValidItem(s);
      }) : -1;
      return r > -1 ? r + e + 1 : e;
    },
    findPrevItemIndex: function(e) {
      var n = this, r = e > 0 ? z(this.visibleItems.slice(0, e), function(s) {
        return n.isValidItem(s);
      }) : -1;
      return r > -1 ? r : e;
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
      var r = this;
      this.searchValue = (this.searchValue || "") + n;
      var s = -1, i = !1;
      return this.focusedItemInfo.index !== -1 ? (s = this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(u) {
        return r.isItemMatched(u);
      }), s = s === -1 ? this.visibleItems.slice(0, this.focusedItemInfo.index).findIndex(function(u) {
        return r.isItemMatched(u);
      }) : s + this.focusedItemInfo.index) : s = this.visibleItems.findIndex(function(u) {
        return r.isItemMatched(u);
      }), s !== -1 && (i = !0), s === -1 && this.focusedItemInfo.index === -1 && (s = this.findFirstFocusedItemIndex()), s !== -1 && this.changeFocusedItemIndex(e, s), this.searchTimeout && clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout(function() {
        r.searchValue = "", r.searchTimeout = null;
      }, 500), i;
    },
    changeFocusedItemIndex: function(e, n) {
      this.focusedItemInfo.index !== n && (this.focusedItemInfo.index = n, this.scrollInView());
    },
    scrollInView: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1, n = e !== -1 ? "".concat(this.$id, "_").concat(e) : this.focusedItemId, r = F(this.menubar, 'li[id="'.concat(n, '"]'));
      r && r.scrollIntoView && r.scrollIntoView({
        block: "nearest",
        inline: "start"
      });
    },
    createProcessedItems: function(e) {
      var n = this, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "", u = [];
      return e && e.forEach(function(c, a) {
        var o = (i !== "" ? i + "_" : "") + a, m = {
          item: c,
          index: a,
          level: r,
          key: o,
          parent: s,
          parentKey: i
        };
        m.items = n.createProcessedItems(c.items, r + 1, m, o), u.push(m);
      }), u;
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
      var e = this, n = this.activeItemPath.find(function(r) {
        return r.key === e.focusedItemInfo.parentKey;
      });
      return n ? n.items : this.processedItems;
    },
    focusedItemId: function() {
      return this.focusedItemInfo.index !== -1 ? "".concat(this.$id).concat(P(this.focusedItemInfo.parentKey) ? "_" + this.focusedItemInfo.parentKey : "", "_").concat(this.focusedItemInfo.index) : null;
    }
  },
  components: {
    TieredMenuSub: ce,
    Portal: de
  }
}, pt = ["id"];
function gt(t, e, n, r, s, i) {
  var u = C("TieredMenuSub"), c = C("Portal");
  return l(), g(c, {
    appendTo: t.appendTo,
    disabled: !t.popup
  }, {
    default: y(function() {
      return [L(ne, d({
        name: "p-connected-overlay",
        onEnter: i.onEnter,
        onAfterEnter: i.onAfterEnter,
        onLeave: i.onLeave,
        onAfterLeave: i.onAfterLeave
      }, t.ptm("transition")), {
        default: y(function() {
          return [s.visible ? (l(), h("div", d({
            key: 0,
            ref: i.containerRef,
            id: t.$id,
            class: t.cx("root"),
            onClick: e[0] || (e[0] = function() {
              return i.onOverlayClick && i.onOverlayClick.apply(i, arguments);
            })
          }, t.ptmi("root")), [t.$slots.start ? (l(), h("div", d({
            key: 0,
            class: t.cx("start")
          }, t.ptm("start")), [w(t.$slots, "start")], 16)) : I("", !0), L(u, d({
            ref: i.menubarRef,
            id: t.$id + "_list",
            class: t.cx("rootList"),
            tabindex: t.disabled ? -1 : t.tabindex,
            role: "menubar",
            "aria-label": t.ariaLabel,
            "aria-labelledby": t.ariaLabelledby,
            "aria-disabled": t.disabled || void 0,
            "aria-orientation": "vertical",
            "aria-activedescendant": s.focused ? i.focusedItemId : void 0,
            menuId: t.$id,
            focusedItemId: s.focused ? i.focusedItemId : void 0,
            items: i.processedItems,
            templates: t.$slots,
            activeItemPath: s.activeItemPath,
            level: 0,
            visible: s.submenuVisible,
            pt: t.pt,
            unstyled: t.unstyled,
            onFocus: i.onFocus,
            onBlur: i.onBlur,
            onKeydown: i.onKeyDown,
            onItemClick: i.onItemClick,
            onItemMouseenter: i.onItemMouseEnter,
            onItemMousemove: i.onItemMouseMove
          }, t.ptm("rootList")), null, 16, ["id", "class", "tabindex", "aria-label", "aria-labelledby", "aria-disabled", "aria-activedescendant", "menuId", "focusedItemId", "items", "templates", "activeItemPath", "visible", "pt", "unstyled", "onFocus", "onBlur", "onKeydown", "onItemClick", "onItemMouseenter", "onItemMousemove"]), t.$slots.end ? (l(), h("div", d({
            key: 1,
            class: t.cx("end")
          }, t.ptm("end")), [w(t.$slots, "end")], 16)) : I("", !0)], 16, pt)) : I("", !0)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo", "disabled"]);
}
fe.render = gt;
const vt = { class: "bg-surface-0 dark:bg-surface-900" }, yt = { class: "container" }, kt = { class: "flex gap-5" }, Lt = { class: "hidden lg:flex items-center gap-5" }, Pt = { class: "lg:hidden" }, xt = { class: "ml-2" }, Ft = /* @__PURE__ */ _({
  __name: "SiteNavigation",
  props: {
    items: {},
    userSignedIn: { type: Boolean, default: !1 }
  },
  emits: ["signoutSuccess", "notify"],
  setup(t, { emit: e }) {
    const n = e, r = t, s = Se(), i = $(!1), u = $(null), c = $([
      { label: "Sign in", icon: "pi pi-sign-in", to: "/signin" },
      { label: "Sign up", icon: "pi pi-user-plus", to: "/signup" }
    ]), a = Z(() => r.userSignedIn ? r.items : [...r.items || [], ...c.value]), o = Z(() => [...a.value]), m = (f) => {
      var G;
      (G = u.value) == null || G.toggle(f);
    };
    async function b() {
      try {
        i.value = !0, await Me.signOut(), s.updateAuth(), window.location.assign("signin");
      } catch (f) {
        n("notify", {
          type: "unexpected",
          severity: "error",
          summary: Q.error.somethingWentWrong.summary,
          detail: Q.error.somethingWentWrong.detail,
          json: f
        });
      } finally {
        i.value = !1;
      }
    }
    return (f, G) => {
      const J = C("RouterLink"), he = C("router-link");
      return l(), h("header", vt, [
        p("div", yt, [
          L(v(me), { model: [] }, {
            start: y(() => [
              L(v(E), {
                asChild: "",
                variant: "link"
              }, {
                default: y((x) => [
                  L(J, {
                    to: f.userSignedIn ? "/home" : "/",
                    class: M(x.class)
                  }, {
                    default: y(() => [
                      w(f.$slots, "logo")
                    ]),
                    _: 2
                  }, 1032, ["to", "class"])
                ]),
                _: 3
              })
            ]),
            end: y(() => [
              p("div", kt, [
                p("div", Lt, [
                  (l(!0), h(A, null, U(v(a), (x) => (l(), h("div", {
                    key: x.label
                  }, [
                    L(v(E), {
                      asChild: "",
                      variant: "outlined"
                    }, {
                      default: y((j) => [
                        L(J, {
                          to: x.to,
                          class: M(j.class)
                        }, {
                          default: y(() => [
                            p("i", {
                              class: M(x.icon)
                            }, null, 2),
                            p("span", null, D(x.label), 1)
                          ]),
                          _: 2
                        }, 1032, ["to", "class"])
                      ]),
                      _: 2
                    }, 1024)
                  ]))), 128)),
                  f.userSignedIn ? (l(), g(v(E), {
                    key: 0,
                    icon: "pi pi-sign-out",
                    "aria-label": "Sign out",
                    variant: "outlined",
                    loading: v(i),
                    onClick: b
                  }, null, 8, ["loading"])) : I("", !0)
                ]),
                p("div", Pt, [
                  L(v(E), {
                    icon: "pi pi-bars",
                    "aria-label": "Navigation menu",
                    "aria-haspopup": "true",
                    "aria-controls": "overlay_tmenu",
                    onClick: m
                  }),
                  L(v(fe), {
                    id: "overlay_tmenu",
                    ref_key: "tieredMenu",
                    ref: u,
                    model: v(o),
                    popup: ""
                  }, {
                    item: y(({ item: x, props: j }) => [
                      x.to ? (l(), g(he, d({
                        key: 0,
                        to: x.to
                      }, j.action), {
                        default: y(() => [
                          p("span", {
                            class: M(x.icon)
                          }, null, 2),
                          p("span", xt, D(x.label), 1)
                        ]),
                        _: 2
                      }, 1040, ["to"])) : I("", !0),
                      f.userSignedIn ? (l(), g(v(E), {
                        key: 1,
                        icon: "pi pi-sign-out",
                        "aria-label": "Sign out",
                        variant: "outlined",
                        loading: v(i),
                        onClick: b
                      }, null, 8, ["loading"])) : I("", !0)
                    ]),
                    _: 1
                  }, 8, ["model"])
                ]),
                L(Ee, { class: "ms-2" })
              ])
            ]),
            _: 3
          })
        ])
      ]);
    };
  }
}), Tt = /* @__PURE__ */ _({
  __name: "AppErrorInfo",
  props: {
    error: {}
  },
  setup(t) {
    const e = t;
    return ve(() => {
      console.error("App error: ", e.error);
    }), (n, r) => (l(), g(v(ye), { class: "p-10" }, {
      title: y(() => r[0] || (r[0] = [
        p("h2", { class: "text-4xl font-semibold text-gray-800 text-center" }, [
          N(" Oops "),
          p("i", { class: "text-4xl not-italic" }, "🥲")
        ], -1)
      ])),
      content: y(() => r[1] || (r[1] = [
        p("p", { class: "mt-10 text-xl" }, [
          N(" Something went wrong! We have been notified about this. In the meantime, please try visiting the "),
          p("a", {
            href: "/",
            class: "underline"
          }, "homepage"),
          N(" or try again later. ")
        ], -1)
      ])),
      _: 1
    }));
  }
}), wt = {
  key: 0,
  class: "bar"
}, Ct = /* @__PURE__ */ _({
  __name: "PageInfiniteLoader",
  props: {
    isLoading: { type: Boolean }
  },
  setup(t) {
    return (e, n) => e.isLoading ? (l(), h("div", wt, n[0] || (n[0] = [
      p("div", null, null, -1)
    ]))) : I("", !0);
  }
}), Ot = /* @__PURE__ */ Ke(Ct, [["__scopeId", "data-v-a36ba306"]]);
export {
  Rt as Account,
  Tt as AppErrorInfo,
  Ot as PageInfiniteLoader,
  Dt as PageLoader,
  zt as SignInUp,
  Ft as SiteNavigation,
  Ee as ThemeToggle
};
