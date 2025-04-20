import { x as be, m as A, y as fe, E as he, B as X, R as Y, s as R, k as ee, n as te, z as pe, A as j, C as Ie, D as k, F as T, G as E, H as G, I as U, j as S, J as q, K as z, L as ge, u as ve, S as ye, l as ke, _ as Le } from "../PageLoader.vue_vue_type_script_setup_true_lang-CpVC9aun.js";
import { o as zt } from "../PageLoader.vue_vue_type_script_setup_true_lang-CpVC9aun.js";
import { renderSlot as x, createBlock as I, createCommentVNode as p, openBlock as u, Teleport as xe, defineComponent as _, ref as D, computed as N, unref as g, mergeProps as d, resolveDirective as ne, createElementBlock as c, createElementVNode as h, withDirectives as ie, resolveDynamicComponent as O, normalizeClass as C, toDisplayString as H, resolveComponent as K, withCtx as L, createVNode as y, Transition as Pe, Fragment as P, renderList as B, createTextVNode as V, normalizeStyle as Ce, normalizeProps as we, guardReactiveProps as Se, onMounted as Oe } from "vue";
function Me() {
  let t = [];
  const e = (a, b, s = 999) => {
    const l = o(a, b, s), m = l.value + (l.key === a ? 0 : s) + 1;
    return t.push({ key: a, value: m }), m;
  }, n = (a) => {
    t = t.filter((b) => b.value !== a);
  }, r = (a, b) => o(a).value, o = (a, b, s = 0) => [...t].reverse().find((l) => !0) || { key: a, value: s }, i = (a) => a && parseInt(a.style.zIndex, 10) || 0;
  return {
    get: i,
    set: (a, b, s) => {
      b && (b.style.zIndex = String(e(a, !0, s)));
    },
    clear: (a) => {
      a && (n(i(a)), a.style.zIndex = "");
    },
    getCurrent: (a) => r(a)
  };
}
var M = Me(), re = {
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
    this.mounted = be();
  },
  computed: {
    inline: function() {
      return this.disabled || this.appendTo === "self";
    }
  }
};
function Ke(t, e, n, r, o, i) {
  return i.inline ? x(t.$slots, "default", {
    key: 0
  }) : o.mounted ? (u(), I(xe, {
    key: 1,
    to: n.appendTo
  }, [x(t.$slots, "default")], 8, ["to"])) : p("", !0);
}
re.render = Ke;
const Kt = /* @__PURE__ */ _({
  __name: "ThemeToggle",
  setup(t) {
    const e = localStorage.getItem("theme") || "light", n = D(e);
    document.documentElement.classList.toggle("dark", e === "dark");
    const r = N(() => n.value === "light" ? "pi pi-sun" : "pi pi-moon");
    function o() {
      const i = n.value === "light" ? "dark" : "light";
      localStorage.setItem("theme", i), n.value = i, document.documentElement.classList.toggle("dark", i === "dark");
    }
    return (i, a) => (u(), I(g(A), {
      icon: g(r),
      id: "themeToggle",
      onClick: a[0] || (a[0] = (b) => o()),
      variant: "outlined",
      "aria-label": "Toggle theme"
    }, null, 8, ["icon"]));
  }
});
function $(t) {
  "@babel/helpers - typeof";
  return $ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, $(t);
}
function Ae(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function Ee(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Fe(r.key), r);
  }
}
function $e(t, e, n) {
  return e && Ee(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function Fe(t) {
  var e = Te(t, "string");
  return $(e) == "symbol" ? e : e + "";
}
function Te(t, e) {
  if ($(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if ($(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var ze = /* @__PURE__ */ function() {
  function t(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
    };
    Ae(this, t), this.element = e, this.listener = n;
  }
  return $e(t, [{
    key: "bindScrollListener",
    value: function() {
      this.scrollableParents = fe(this.element);
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
}(), De = he(), Ve = ({ dt: t }) => `
.p-menu {
    background: ${t("menu.background")};
    color: ${t("menu.color")};
    border: 1px solid ${t("menu.border.color")};
    border-radius: ${t("menu.border.radius")};
    min-width: 12.5rem;
}

.p-menu-list {
    margin: 0;
    padding: ${t("menu.list.padding")};
    outline: 0 none;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: ${t("menu.list.gap")};
}

.p-menu-item-content {
    transition: background ${t("menu.transition.duration")}, color ${t("menu.transition.duration")};
    border-radius: ${t("menu.item.border.radius")};
    color: ${t("menu.item.color")};
}

.p-menu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${t("menu.item.padding")};
    gap: ${t("menu.item.gap")};
    user-select: none;
    outline: 0 none;
}

.p-menu-item-label {
    line-height: 1;
}

.p-menu-item-icon {
    color: ${t("menu.item.icon.color")};
}

.p-menu-item.p-focus .p-menu-item-content {
    color: ${t("menu.item.focus.color")};
    background: ${t("menu.item.focus.background")};
}

.p-menu-item.p-focus .p-menu-item-icon {
    color: ${t("menu.item.icon.focus.color")};
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
    color: ${t("menu.item.focus.color")};
    background: ${t("menu.item.focus.background")};
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
    color: ${t("menu.item.icon.focus.color")};
}

.p-menu-overlay {
    box-shadow: ${t("menu.shadow")};
}

.p-menu-submenu-label {
    background: ${t("menu.submenu.label.background")};
    padding: ${t("menu.submenu.label.padding")};
    color: ${t("menu.submenu.label.color")};
    font-weight: ${t("menu.submenu.label.font.weight")};
}

.p-menu-separator {
    border-block-start: 1px solid ${t("menu.separator.border.color")};
}
`, Be = {
  root: function(e) {
    var n = e.props;
    return ["p-menu p-component", {
      "p-menu-overlay": n.popup
    }];
  },
  start: "p-menu-start",
  list: "p-menu-list",
  submenuLabel: "p-menu-submenu-label",
  separator: "p-menu-separator",
  end: "p-menu-end",
  item: function(e) {
    var n = e.instance;
    return ["p-menu-item", {
      "p-focus": n.id === n.focusedOptionId,
      "p-disabled": n.disabled()
    }];
  },
  itemContent: "p-menu-item-content",
  itemLink: "p-menu-item-link",
  itemIcon: "p-menu-item-icon",
  itemLabel: "p-menu-item-label"
}, Re = X.extend({
  name: "menu",
  style: Ve,
  classes: Be
}), _e = {
  name: "BaseMenu",
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
    autoZIndex: {
      type: Boolean,
      default: !0
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    tabindex: {
      type: Number,
      default: 0
    },
    ariaLabel: {
      type: String,
      default: null
    },
    ariaLabelledby: {
      type: String,
      default: null
    }
  },
  style: Re,
  provide: function() {
    return {
      $pcMenu: this,
      $parentInstance: this
    };
  }
}, se = {
  name: "Menuitem",
  hostName: "Menu",
  extends: R,
  inheritAttrs: !1,
  emits: ["item-click", "item-mousemove"],
  props: {
    item: null,
    templates: null,
    id: null,
    focusedOptionId: null,
    index: null
  },
  methods: {
    getItemProp: function(e, n) {
      return e && e.item ? G(e.item[n]) : void 0;
    },
    getPTOptions: function(e) {
      return this.ptm(e, {
        context: {
          item: this.item,
          index: this.index,
          focused: this.isItemFocused(),
          disabled: this.disabled()
        }
      });
    },
    isItemFocused: function() {
      return this.focusedOptionId === this.id;
    },
    onItemClick: function(e) {
      var n = this.getItemProp(this.item, "command");
      n && n({
        originalEvent: e,
        item: this.item.item
      }), this.$emit("item-click", {
        originalEvent: e,
        item: this.item,
        id: this.id
      });
    },
    onItemMouseMove: function(e) {
      this.$emit("item-mousemove", {
        originalEvent: e,
        item: this.item,
        id: this.id
      });
    },
    visible: function() {
      return typeof this.item.visible == "function" ? this.item.visible() : this.item.visible !== !1;
    },
    disabled: function() {
      return typeof this.item.disabled == "function" ? this.item.disabled() : this.item.disabled;
    },
    label: function() {
      return typeof this.item.label == "function" ? this.item.label() : this.item.label;
    },
    getMenuItemProps: function(e) {
      return {
        action: d({
          class: this.cx("itemLink"),
          tabindex: "-1"
        }, this.getPTOptions("itemLink")),
        icon: d({
          class: [this.cx("itemIcon"), e.icon]
        }, this.getPTOptions("itemIcon")),
        label: d({
          class: this.cx("itemLabel")
        }, this.getPTOptions("itemLabel"))
      };
    }
  },
  computed: {
    dataP: function() {
      return ee({
        focus: this.isItemFocused(),
        disabled: this.disabled()
      });
    }
  },
  directives: {
    ripple: Y
  }
}, He = ["id", "aria-label", "aria-disabled", "data-p-focused", "data-p-disabled", "data-p"], je = ["data-p"], Ne = ["href", "target"], Ze = ["data-p"], Ge = ["data-p"];
function Ue(t, e, n, r, o, i) {
  var a = ne("ripple");
  return i.visible() ? (u(), c("li", d({
    key: 0,
    id: n.id,
    class: [t.cx("item"), n.item.class],
    role: "menuitem",
    style: n.item.style,
    "aria-label": i.label(),
    "aria-disabled": i.disabled(),
    "data-p-focused": i.isItemFocused(),
    "data-p-disabled": i.disabled() || !1,
    "data-p": i.dataP
  }, i.getPTOptions("item")), [h("div", d({
    class: t.cx("itemContent"),
    onClick: e[0] || (e[0] = function(b) {
      return i.onItemClick(b);
    }),
    onMousemove: e[1] || (e[1] = function(b) {
      return i.onItemMouseMove(b);
    }),
    "data-p": i.dataP
  }, i.getPTOptions("itemContent")), [n.templates.item ? n.templates.item ? (u(), I(O(n.templates.item), {
    key: 1,
    item: n.item,
    label: i.label(),
    props: i.getMenuItemProps(n.item)
  }, null, 8, ["item", "label", "props"])) : p("", !0) : ie((u(), c("a", d({
    key: 0,
    href: n.item.url,
    class: t.cx("itemLink"),
    target: n.item.target,
    tabindex: "-1"
  }, i.getPTOptions("itemLink")), [n.templates.itemicon ? (u(), I(O(n.templates.itemicon), {
    key: 0,
    item: n.item,
    class: C(t.cx("itemIcon"))
  }, null, 8, ["item", "class"])) : n.item.icon ? (u(), c("span", d({
    key: 1,
    class: [t.cx("itemIcon"), n.item.icon],
    "data-p": i.dataP
  }, i.getPTOptions("itemIcon")), null, 16, Ze)) : p("", !0), h("span", d({
    class: t.cx("itemLabel"),
    "data-p": i.dataP
  }, i.getPTOptions("itemLabel")), H(i.label()), 17, Ge)], 16, Ne)), [[a]])], 16, je)], 16, He)) : p("", !0);
}
se.render = Ue;
function W(t) {
  return Qe(t) || Je(t) || We(t) || qe();
}
function qe() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function We(t, e) {
  if (t) {
    if (typeof t == "string") return Z(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Z(t, e) : void 0;
  }
}
function Je(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Qe(t) {
  if (Array.isArray(t)) return Z(t);
}
function Z(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
  return r;
}
var oe = {
  name: "Menu",
  extends: _e,
  inheritAttrs: !1,
  emits: ["show", "hide", "focus", "blur"],
  data: function() {
    return {
      overlayVisible: !1,
      focused: !1,
      focusedOptionIndex: -1,
      selectedOptionIndex: -1
    };
  },
  target: null,
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  container: null,
  list: null,
  mounted: function() {
    this.popup || (this.bindResizeListener(), this.bindOutsideClickListener());
  },
  beforeUnmount: function() {
    this.unbindResizeListener(), this.unbindOutsideClickListener(), this.scrollHandler && (this.scrollHandler.destroy(), this.scrollHandler = null), this.target = null, this.container && this.autoZIndex && M.clear(this.container), this.container = null;
  },
  methods: {
    itemClick: function(e) {
      var n = e.item;
      this.disabled(n) || (n.command && n.command(e), this.overlayVisible && this.hide(), !this.popup && this.focusedOptionIndex !== e.id && (this.focusedOptionIndex = e.id));
    },
    itemMouseMove: function(e) {
      this.focused && (this.focusedOptionIndex = e.id);
    },
    onListFocus: function(e) {
      this.focused = !0, !this.popup && this.changeFocusedOptionIndex(0), this.$emit("focus", e);
    },
    onListBlur: function(e) {
      this.focused = !1, this.focusedOptionIndex = -1, this.$emit("blur", e);
    },
    onListKeyDown: function(e) {
      switch (e.code) {
        case "ArrowDown":
          this.onArrowDownKey(e);
          break;
        case "ArrowUp":
          this.onArrowUpKey(e);
          break;
        case "Home":
          this.onHomeKey(e);
          break;
        case "End":
          this.onEndKey(e);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(e);
          break;
        case "Space":
          this.onSpaceKey(e);
          break;
        case "Escape":
          this.popup && (k(this.target), this.hide());
        case "Tab":
          this.overlayVisible && this.hide();
          break;
      }
    },
    onArrowDownKey: function(e) {
      var n = this.findNextOptionIndex(this.focusedOptionIndex);
      this.changeFocusedOptionIndex(n), e.preventDefault();
    },
    onArrowUpKey: function(e) {
      if (e.altKey && this.popup)
        k(this.target), this.hide(), e.preventDefault();
      else {
        var n = this.findPrevOptionIndex(this.focusedOptionIndex);
        this.changeFocusedOptionIndex(n), e.preventDefault();
      }
    },
    onHomeKey: function(e) {
      this.changeFocusedOptionIndex(0), e.preventDefault();
    },
    onEndKey: function(e) {
      this.changeFocusedOptionIndex(T(this.container, 'li[data-pc-section="item"][data-p-disabled="false"]').length - 1), e.preventDefault();
    },
    onEnterKey: function(e) {
      var n = E(this.list, 'li[id="'.concat("".concat(this.focusedOptionIndex), '"]')), r = n && E(n, 'a[data-pc-section="itemlink"]');
      this.popup && k(this.target), r ? r.click() : n && n.click(), e.preventDefault();
    },
    onSpaceKey: function(e) {
      this.onEnterKey(e);
    },
    findNextOptionIndex: function(e) {
      var n = T(this.container, 'li[data-pc-section="item"][data-p-disabled="false"]'), r = W(n).findIndex(function(o) {
        return o.id === e;
      });
      return r > -1 ? r + 1 : 0;
    },
    findPrevOptionIndex: function(e) {
      var n = T(this.container, 'li[data-pc-section="item"][data-p-disabled="false"]'), r = W(n).findIndex(function(o) {
        return o.id === e;
      });
      return r > -1 ? r - 1 : 0;
    },
    changeFocusedOptionIndex: function(e) {
      var n = T(this.container, 'li[data-pc-section="item"][data-p-disabled="false"]'), r = e >= n.length ? n.length - 1 : e < 0 ? 0 : e;
      r > -1 && (this.focusedOptionIndex = n[r].getAttribute("id"));
    },
    toggle: function(e) {
      this.overlayVisible ? this.hide() : this.show(e);
    },
    show: function(e) {
      this.overlayVisible = !0, this.target = e.currentTarget;
    },
    hide: function() {
      this.overlayVisible = !1, this.target = null;
    },
    onEnter: function(e) {
      Ie(e, {
        position: "absolute",
        top: "0"
      }), this.alignOverlay(), this.bindOutsideClickListener(), this.bindResizeListener(), this.bindScrollListener(), this.autoZIndex && M.set("menu", e, this.baseZIndex + this.$primevue.config.zIndex.menu), this.popup && k(this.list), this.$emit("show");
    },
    onLeave: function() {
      this.unbindOutsideClickListener(), this.unbindResizeListener(), this.unbindScrollListener(), this.$emit("hide");
    },
    onAfterLeave: function(e) {
      this.autoZIndex && M.clear(e);
    },
    alignOverlay: function() {
      pe(this.container, this.target);
      var e = j(this.target);
      e > j(this.container) && (this.container.style.minWidth = j(this.target) + "px");
    },
    bindOutsideClickListener: function() {
      var e = this;
      this.outsideClickListener || (this.outsideClickListener = function(n) {
        var r = e.container && !e.container.contains(n.target), o = !(e.target && (e.target === n.target || e.target.contains(n.target)));
        e.overlayVisible && r && o ? e.hide() : !e.popup && r && o && (e.focusedOptionIndex = -1);
      }, document.addEventListener("click", this.outsideClickListener, !0));
    },
    unbindOutsideClickListener: function() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener, !0), this.outsideClickListener = null);
    },
    bindScrollListener: function() {
      var e = this;
      this.scrollHandler || (this.scrollHandler = new ze(this.target, function() {
        e.overlayVisible && e.hide();
      })), this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function() {
      this.scrollHandler && this.scrollHandler.unbindScrollListener();
    },
    bindResizeListener: function() {
      var e = this;
      this.resizeListener || (this.resizeListener = function() {
        e.overlayVisible && !te() && e.hide();
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener: function() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    },
    visible: function(e) {
      return typeof e.visible == "function" ? e.visible() : e.visible !== !1;
    },
    disabled: function(e) {
      return typeof e.disabled == "function" ? e.disabled() : e.disabled;
    },
    label: function(e) {
      return typeof e.label == "function" ? e.label() : e.label;
    },
    onOverlayClick: function(e) {
      De.emit("overlay-click", {
        originalEvent: e,
        target: this.target
      });
    },
    containerRef: function(e) {
      this.container = e;
    },
    listRef: function(e) {
      this.list = e;
    }
  },
  computed: {
    focusedOptionId: function() {
      return this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : null;
    },
    dataP: function() {
      return ee({
        popup: this.popup
      });
    }
  },
  components: {
    PVMenuitem: se,
    Portal: re
  }
}, Xe = ["id", "data-p"], Ye = ["id", "tabindex", "aria-activedescendant", "aria-label", "aria-labelledby"], et = ["id"];
function tt(t, e, n, r, o, i) {
  var a = K("PVMenuitem"), b = K("Portal");
  return u(), I(b, {
    appendTo: t.appendTo,
    disabled: !t.popup
  }, {
    default: L(function() {
      return [y(Pe, d({
        name: "p-connected-overlay",
        onEnter: i.onEnter,
        onLeave: i.onLeave,
        onAfterLeave: i.onAfterLeave
      }, t.ptm("transition")), {
        default: L(function() {
          return [!t.popup || o.overlayVisible ? (u(), c("div", d({
            key: 0,
            ref: i.containerRef,
            id: t.$id,
            class: t.cx("root"),
            onClick: e[3] || (e[3] = function() {
              return i.onOverlayClick && i.onOverlayClick.apply(i, arguments);
            }),
            "data-p": i.dataP
          }, t.ptmi("root")), [t.$slots.start ? (u(), c("div", d({
            key: 0,
            class: t.cx("start")
          }, t.ptm("start")), [x(t.$slots, "start")], 16)) : p("", !0), h("ul", d({
            ref: i.listRef,
            id: t.$id + "_list",
            class: t.cx("list"),
            role: "menu",
            tabindex: t.tabindex,
            "aria-activedescendant": o.focused ? i.focusedOptionId : void 0,
            "aria-label": t.ariaLabel,
            "aria-labelledby": t.ariaLabelledby,
            onFocus: e[0] || (e[0] = function() {
              return i.onListFocus && i.onListFocus.apply(i, arguments);
            }),
            onBlur: e[1] || (e[1] = function() {
              return i.onListBlur && i.onListBlur.apply(i, arguments);
            }),
            onKeydown: e[2] || (e[2] = function() {
              return i.onListKeyDown && i.onListKeyDown.apply(i, arguments);
            })
          }, t.ptm("list")), [(u(!0), c(P, null, B(t.model, function(s, l) {
            return u(), c(P, {
              key: i.label(s) + l.toString()
            }, [s.items && i.visible(s) && !s.separator ? (u(), c(P, {
              key: 0
            }, [s.items ? (u(), c("li", d({
              key: 0,
              id: t.$id + "_" + l,
              class: [t.cx("submenuLabel"), s.class],
              role: "none",
              ref_for: !0
            }, t.ptm("submenuLabel")), [x(t.$slots, t.$slots.submenulabel ? "submenulabel" : "submenuheader", {
              item: s
            }, function() {
              return [V(H(i.label(s)), 1)];
            })], 16, et)) : p("", !0), (u(!0), c(P, null, B(s.items, function(m, f) {
              return u(), c(P, {
                key: m.label + l + "_" + f
              }, [i.visible(m) && !m.separator ? (u(), I(a, {
                key: 0,
                id: t.$id + "_" + l + "_" + f,
                item: m,
                templates: t.$slots,
                focusedOptionId: i.focusedOptionId,
                unstyled: t.unstyled,
                onItemClick: i.itemClick,
                onItemMousemove: i.itemMouseMove,
                pt: t.pt
              }, null, 8, ["id", "item", "templates", "focusedOptionId", "unstyled", "onItemClick", "onItemMousemove", "pt"])) : i.visible(m) && m.separator ? (u(), c("li", d({
                key: "separator" + l + f,
                class: [t.cx("separator"), s.class],
                style: m.style,
                role: "separator",
                ref_for: !0
              }, t.ptm("separator")), null, 16)) : p("", !0)], 64);
            }), 128))], 64)) : i.visible(s) && s.separator ? (u(), c("li", d({
              key: "separator" + l.toString(),
              class: [t.cx("separator"), s.class],
              style: s.style,
              role: "separator",
              ref_for: !0
            }, t.ptm("separator")), null, 16)) : (u(), I(a, {
              key: i.label(s) + l.toString(),
              id: t.$id + "_" + l,
              item: s,
              index: l,
              templates: t.$slots,
              focusedOptionId: i.focusedOptionId,
              unstyled: t.unstyled,
              onItemClick: i.itemClick,
              onItemMousemove: i.itemMouseMove,
              pt: t.pt
            }, null, 8, ["id", "item", "index", "templates", "focusedOptionId", "unstyled", "onItemClick", "onItemMousemove", "pt"]))], 64);
          }), 128))], 16, Ye), t.$slots.end ? (u(), c("div", d({
            key: 1,
            class: t.cx("end")
          }, t.ptm("end")), [x(t.$slots, "end")], 16)) : p("", !0)], 16, Xe)) : p("", !0)];
        }),
        _: 3
      }, 16, ["onEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo", "disabled"]);
}
oe.render = tt;
var ae = {
  name: "BarsIcon",
  extends: U
};
function nt(t, e, n, r, o, i) {
  return u(), c("svg", d({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t.pti()), e[0] || (e[0] = [h("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
ae.render = nt;
var it = ({ dt: t }) => `
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
`, rt = {
  submenu: function(e) {
    var n = e.instance, r = e.processedItem;
    return {
      display: n.isItemActive(r) ? "flex" : "none"
    };
  }
}, st = {
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
}, ot = X.extend({
  name: "menubar",
  style: it,
  classes: st,
  inlineStyles: rt
}), ue = {
  name: "AngleDownIcon",
  extends: U
};
function at(t, e, n, r, o, i) {
  return u(), c("svg", d({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t.pti()), e[0] || (e[0] = [h("path", {
    d: "M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
ue.render = at;
var le = {
  name: "AngleRightIcon",
  extends: U
};
function ut(t, e, n, r, o, i) {
  return u(), c("svg", d({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t.pti()), e[0] || (e[0] = [h("path", {
    d: "M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
le.render = ut;
var lt = {
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
  style: ot,
  provide: function() {
    return {
      $pcMenubar: this,
      $parentInstance: this
    };
  }
}, me = {
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
      return e && e.item ? G(e.item[n], r) : void 0;
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
      return S(e.items);
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
    AngleRightIcon: le,
    AngleDownIcon: ue
  },
  directives: {
    ripple: Y
  }
}, mt = ["id", "aria-label", "aria-disabled", "aria-expanded", "aria-haspopup", "aria-level", "aria-setsize", "aria-posinset", "data-p-active", "data-p-focused", "data-p-disabled"], dt = ["onClick", "onMouseenter", "onMousemove"], ct = ["href", "target"], bt = ["id"], ft = ["id"];
function ht(t, e, n, r, o, i) {
  var a = K("MenubarSub", !0), b = ne("ripple");
  return u(), c("ul", d({
    class: n.level === 0 ? t.cx("rootList") : t.cx("submenu")
  }, n.level === 0 ? t.ptm("rootList") : t.ptm("submenu")), [(u(!0), c(P, null, B(n.items, function(s, l) {
    return u(), c(P, {
      key: i.getItemKey(s)
    }, [i.isItemVisible(s) && !i.getItemProp(s, "separator") ? (u(), c("li", d({
      key: 0,
      id: i.getItemId(s),
      style: i.getItemProp(s, "style"),
      class: [t.cx("item", {
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
    }), [h("div", d({
      class: t.cx("itemContent"),
      onClick: function(f) {
        return i.onItemClick(f, s);
      },
      onMouseenter: function(f) {
        return i.onItemMouseEnter(f, s);
      },
      onMousemove: function(f) {
        return i.onItemMouseMove(f, s);
      },
      ref_for: !0
    }, i.getPTOptions(s, l, "itemContent")), [n.templates.item ? (u(), I(O(n.templates.item), {
      key: 1,
      item: s.item,
      root: n.root,
      hasSubmenu: i.getItemProp(s, "items"),
      label: i.getItemLabel(s),
      props: i.getMenuItemProps(s, l)
    }, null, 8, ["item", "root", "hasSubmenu", "label", "props"])) : ie((u(), c("a", d({
      key: 0,
      href: i.getItemProp(s, "url"),
      class: t.cx("itemLink"),
      target: i.getItemProp(s, "target"),
      tabindex: "-1",
      ref_for: !0
    }, i.getPTOptions(s, l, "itemLink")), [n.templates.itemicon ? (u(), I(O(n.templates.itemicon), {
      key: 0,
      item: s.item,
      class: C(t.cx("itemIcon"))
    }, null, 8, ["item", "class"])) : i.getItemProp(s, "icon") ? (u(), c("span", d({
      key: 1,
      class: [t.cx("itemIcon"), i.getItemProp(s, "icon")],
      ref_for: !0
    }, i.getPTOptions(s, l, "itemIcon")), null, 16)) : p("", !0), h("span", d({
      id: i.getItemLabelId(s),
      class: t.cx("itemLabel"),
      ref_for: !0
    }, i.getPTOptions(s, l, "itemLabel")), H(i.getItemLabel(s)), 17, bt), i.getItemProp(s, "items") ? (u(), c(P, {
      key: 2
    }, [n.templates.submenuicon ? (u(), I(O(n.templates.submenuicon), {
      key: 0,
      root: n.root,
      active: i.isItemActive(s),
      class: C(t.cx("submenuIcon"))
    }, null, 8, ["root", "active", "class"])) : (u(), I(O(n.root ? "AngleDownIcon" : "AngleRightIcon"), d({
      key: 1,
      class: t.cx("submenuIcon"),
      ref_for: !0
    }, i.getPTOptions(s, l, "submenuIcon")), null, 16, ["class"]))], 64)) : p("", !0)], 16, ct)), [[b]])], 16, dt), i.isItemVisible(s) && i.isItemGroup(s) ? (u(), I(a, {
      key: 0,
      id: i.getItemId(s) + "_list",
      menuId: n.menuId,
      role: "menu",
      style: Ce(t.sx("submenu", !0, {
        processedItem: s
      })),
      focusedItemId: n.focusedItemId,
      items: s.items,
      mobileActive: n.mobileActive,
      activeItemPath: n.activeItemPath,
      templates: n.templates,
      level: n.level + 1,
      "aria-labelledby": i.getItemLabelId(s),
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
    }, null, 8, ["id", "menuId", "style", "focusedItemId", "items", "mobileActive", "activeItemPath", "templates", "level", "aria-labelledby", "pt", "unstyled"])) : p("", !0)], 16, mt)) : p("", !0), i.isItemVisible(s) && i.getItemProp(s, "separator") ? (u(), c("li", d({
      key: 1,
      id: i.getItemId(s),
      class: [t.cx("separator"), i.getItemProp(s, "class")],
      style: i.getItemProp(s, "style"),
      role: "separator",
      ref_for: !0
    }, t.ptm("separator")), null, 16, ft)) : p("", !0)], 64);
  }), 128))], 16);
}
me.render = ht;
var de = {
  name: "Menubar",
  extends: lt,
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
      S(e) ? (this.bindOutsideClickListener(), this.bindResizeListener()) : (this.unbindOutsideClickListener(), this.unbindResizeListener());
    }
  },
  outsideClickListener: null,
  container: null,
  menubar: null,
  mounted: function() {
    this.bindMatchMediaListener();
  },
  beforeUnmount: function() {
    this.mobileActive = !1, this.unbindOutsideClickListener(), this.unbindResizeListener(), this.unbindMatchMediaListener(), this.container && M.clear(this.container), this.container = null;
  },
  methods: {
    getItemProp: function(e, n) {
      return e ? G(e[n]) : void 0;
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
      return S(this.getItemProp(e, "items"));
    },
    isItemSeparator: function(e) {
      return this.getItemProp(e, "separator");
    },
    getProccessedItemLabel: function(e) {
      return e ? this.getItemLabel(e.item) : void 0;
    },
    isProccessedItemGroup: function(e) {
      return e && S(e.items);
    },
    toggle: function(e) {
      var n = this;
      this.mobileActive ? (this.mobileActive = !1, M.clear(this.menubar), this.hide()) : (this.mobileActive = !0, M.set("menu", this.menubar, this.$primevue.config.zIndex.menu), setTimeout(function() {
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
          !n && ge(e.key) && this.searchItems(e, e.key);
          break;
      }
    },
    onItemChange: function(e, n) {
      var r = e.processedItem, o = e.isFocus;
      if (!z(r)) {
        var i = r.index, a = r.key, b = r.level, s = r.parentKey, l = r.items, m = S(l), f = this.activeItemPath.filter(function(v) {
          return v.parentKey !== s && v.parentKey !== a;
        });
        m && f.push(r), this.focusedItemInfo = {
          index: i,
          level: b,
          parentKey: s
        }, m && (this.dirty = !0), o && k(this.menubar), !(n === "hover" && this.queryMatches) && (this.activeItemPath = f);
      }
    },
    onItemClick: function(e) {
      var n = e.originalEvent, r = e.processedItem, o = this.isProccessedItemGroup(r), i = z(r.parent), a = this.isSelected(r);
      if (a) {
        var b = r.index, s = r.key, l = r.level, m = r.parentKey;
        this.activeItemPath = this.activeItemPath.filter(function(v) {
          return s !== v.key && s.startsWith(v.key);
        }), this.focusedItemInfo = {
          index: b,
          level: l,
          parentKey: m
        }, this.dirty = !i, k(this.menubar);
      } else if (o)
        this.onItemChange(e);
      else {
        var f = i ? r : this.activeItemPath.find(function(v) {
          return v.parentKey === "";
        });
        this.hide(n), this.changeFocusedItemIndex(n, f ? f.index : -1), this.mobileActive = !1, k(this.menubar);
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
      var n = this.visibleItems[this.focusedItemInfo.index], r = n ? z(n.parent) : null;
      if (r) {
        var o = this.isProccessedItemGroup(n);
        o && (this.onItemChange({
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
      var n = this, r = this.visibleItems[this.focusedItemInfo.index], o = z(r.parent);
      if (o) {
        var i = this.isProccessedItemGroup(r);
        if (i) {
          this.onItemChange({
            originalEvent: e,
            processedItem: r
          }), this.focusedItemInfo = {
            index: -1,
            parentKey: r.key
          };
          var a = this.findLastItemIndex();
          this.changeFocusedItemIndex(e, a);
        }
      } else {
        var b = this.activeItemPath.find(function(l) {
          return l.key === r.parentKey;
        });
        if (this.focusedItemInfo.index === 0)
          this.focusedItemInfo = {
            index: -1,
            parentKey: b ? b.parentKey : ""
          }, this.searchValue = "", this.onArrowLeftKey(e), this.activeItemPath = this.activeItemPath.filter(function(l) {
            return l.parentKey !== n.focusedItemInfo.parentKey;
          });
        else {
          var s = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
          this.changeFocusedItemIndex(e, s);
        }
      }
      e.preventDefault();
    },
    onArrowLeftKey: function(e) {
      var n = this, r = this.visibleItems[this.focusedItemInfo.index], o = r ? this.activeItemPath.find(function(a) {
        return a.key === r.parentKey;
      }) : null;
      if (o)
        this.onItemChange({
          originalEvent: e,
          processedItem: o
        }), this.activeItemPath = this.activeItemPath.filter(function(a) {
          return a.parentKey !== n.focusedItemInfo.parentKey;
        }), e.preventDefault();
      else {
        var i = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemIndex(e, i), e.preventDefault();
      }
    },
    onArrowRightKey: function(e) {
      var n = this.visibleItems[this.focusedItemInfo.index], r = n ? this.activeItemPath.find(function(a) {
        return a.key === n.parentKey;
      }) : null;
      if (r) {
        var o = this.isProccessedItemGroup(n);
        o && (this.onItemChange({
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
        var n = E(this.menubar, 'li[id="'.concat("".concat(this.focusedItemId), '"]')), r = n && E(n, 'a[data-pc-section="itemlink"]');
        r ? r.click() : n && n.click();
        var o = this.visibleItems[this.focusedItemInfo.index], i = this.isProccessedItemGroup(o);
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
        var r = e.container && !e.container.contains(n.target), o = !(e.target && (e.target === n.target || e.target.contains(n.target)));
        r && o && e.hide();
      }, document.addEventListener("click", this.outsideClickListener, !0));
    },
    unbindOutsideClickListener: function() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener, !0), this.outsideClickListener = null);
    },
    bindResizeListener: function() {
      var e = this;
      this.resizeListener || (this.resizeListener = function(n) {
        te() || e.hide(n, !0), e.mobileActive = !1;
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
      return q(this.visibleItems, function(n) {
        return e.isValidItem(n);
      });
    },
    findNextItemIndex: function(e) {
      var n = this, r = e < this.visibleItems.length - 1 ? this.visibleItems.slice(e + 1).findIndex(function(o) {
        return n.isValidItem(o);
      }) : -1;
      return r > -1 ? r + e + 1 : e;
    },
    findPrevItemIndex: function(e) {
      var n = this, r = e > 0 ? q(this.visibleItems.slice(0, e), function(o) {
        return n.isValidItem(o);
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
      var o = -1, i = !1;
      return this.focusedItemInfo.index !== -1 ? (o = this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(a) {
        return r.isItemMatched(a);
      }), o = o === -1 ? this.visibleItems.slice(0, this.focusedItemInfo.index).findIndex(function(a) {
        return r.isItemMatched(a);
      }) : o + this.focusedItemInfo.index) : o = this.visibleItems.findIndex(function(a) {
        return r.isItemMatched(a);
      }), o !== -1 && (i = !0), o === -1 && this.focusedItemInfo.index === -1 && (o = this.findFirstFocusedItemIndex()), o !== -1 && this.changeFocusedItemIndex(e, o), this.searchTimeout && clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout(function() {
        r.searchValue = "", r.searchTimeout = null;
      }, 500), i;
    },
    changeFocusedItemIndex: function(e, n) {
      this.focusedItemInfo.index !== n && (this.focusedItemInfo.index = n, this.scrollInView());
    },
    scrollInView: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1, n = e !== -1 ? "".concat(this.$id, "_").concat(e) : this.focusedItemId, r = E(this.menubar, 'li[id="'.concat(n, '"]'));
      r && r.scrollIntoView && r.scrollIntoView({
        block: "nearest",
        inline: "start"
      });
    },
    createProcessedItems: function(e) {
      var n = this, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "", a = [];
      return e && e.forEach(function(b, s) {
        var l = (i !== "" ? i + "_" : "") + s, m = {
          item: b,
          index: s,
          level: r,
          key: l,
          parent: o,
          parentKey: i
        };
        m.items = n.createProcessedItems(b.items, r + 1, m, l), a.push(m);
      }), a;
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
      return this.focusedItemInfo.index !== -1 ? "".concat(this.$id).concat(S(this.focusedItemInfo.parentKey) ? "_" + this.focusedItemInfo.parentKey : "", "_").concat(this.focusedItemInfo.index) : null;
    }
  },
  components: {
    MenubarSub: me,
    BarsIcon: ae
  }
};
function F(t) {
  "@babel/helpers - typeof";
  return F = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, F(t);
}
function J(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Q(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? J(Object(n), !0).forEach(function(r) {
      pt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : J(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function pt(t, e, n) {
  return (e = It(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function It(t) {
  var e = gt(t, "string");
  return F(e) == "symbol" ? e : e + "";
}
function gt(t, e) {
  if (F(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (F(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var vt = ["aria-haspopup", "aria-expanded", "aria-controls", "aria-label"];
function yt(t, e, n, r, o, i) {
  var a = K("BarsIcon"), b = K("MenubarSub");
  return u(), c("div", d({
    ref: i.containerRef,
    class: t.cx("root")
  }, t.ptmi("root")), [t.$slots.start ? (u(), c("div", d({
    key: 0,
    class: t.cx("start")
  }, t.ptm("start")), [x(t.$slots, "start")], 16)) : p("", !0), x(t.$slots, t.$slots.button ? "button" : "menubutton", {
    id: t.$id,
    class: C(t.cx("button")),
    toggleCallback: function(l) {
      return i.menuButtonClick(l);
    }
  }, function() {
    var s;
    return [t.model && t.model.length > 0 ? (u(), c("a", d({
      key: 0,
      ref: "menubutton",
      role: "button",
      tabindex: "0",
      class: t.cx("button"),
      "aria-haspopup": !!(t.model.length && t.model.length > 0),
      "aria-expanded": o.mobileActive,
      "aria-controls": t.$id,
      "aria-label": (s = t.$primevue.config.locale.aria) === null || s === void 0 ? void 0 : s.navigation,
      onClick: e[0] || (e[0] = function(l) {
        return i.menuButtonClick(l);
      }),
      onKeydown: e[1] || (e[1] = function(l) {
        return i.menuButtonKeydown(l);
      })
    }, Q(Q({}, t.buttonProps), t.ptm("button"))), [x(t.$slots, t.$slots.buttonicon ? "buttonicon" : "menubuttonicon", {}, function() {
      return [y(a, we(Se(t.ptm("buttonicon"))), null, 16)];
    })], 16, vt)) : p("", !0)];
  }), y(b, {
    ref: i.menubarRef,
    id: t.$id + "_list",
    role: "menubar",
    items: i.processedItems,
    templates: t.$slots,
    root: !0,
    mobileActive: o.mobileActive,
    tabindex: "0",
    "aria-activedescendant": o.focused ? i.focusedItemId : void 0,
    menuId: t.$id,
    focusedItemId: o.focused ? i.focusedItemId : void 0,
    activeItemPath: o.activeItemPath,
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
  }, null, 8, ["id", "items", "templates", "mobileActive", "aria-activedescendant", "menuId", "focusedItemId", "activeItemPath", "aria-labelledby", "aria-label", "pt", "unstyled", "onFocus", "onBlur", "onKeydown", "onItemClick", "onItemMouseenter", "onItemMousemove"]), t.$slots.end ? (u(), c("div", d({
    key: 1,
    class: t.cx("end")
  }, t.ptm("end")), [x(t.$slots, "end")], 16)) : p("", !0)], 16);
}
de.render = yt;
const kt = { class: "bg-surface-0 dark:bg-surface-900" }, Lt = { class: "container" }, xt = { class: "border" }, Pt = { class: "hidden lg:flex items-center gap-5" }, Ct = { class: "lg:hidden" }, At = /* @__PURE__ */ _({
  __name: "SiteNavigation",
  props: {
    items: {},
    userSignedIn: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = t, n = ve(), r = D(!1), o = D(null), i = D([
      { label: "Sign in", icon: "pi pi-sign-in", to: "/signin" },
      { label: "Sign up", icon: "pi pi-user-plus", to: "/signup" }
    ]), a = N(() => e.userSignedIn ? e.items : [...e.items || [], ...i.value]), b = N(() => [
      ...a.value,
      ...e.userSignedIn ? [
        {
          label: "Sign out",
          icon: "pi pi-sign-out",
          command: () => l()
        }
      ] : []
      // If not logged in, this returns an empty array (no item added)
    ]), s = (m) => {
      var f;
      (f = o.value) == null || f.toggle(m);
    };
    async function l() {
      try {
        r.value = !0, await ye.signOut(), n.updateAuth(), window.location.assign("signin");
      } catch {
      } finally {
        r.value = !1;
      }
    }
    return (m, f) => {
      const v = K("RouterLink");
      return u(), c("header", kt, [
        h("div", Lt, [
          f[0] || (f[0] = h("div", { class: "border border-primary-300" }, "HELLO", -1)),
          y(g(de), { model: [] }, {
            start: L(() => [
              y(g(A), {
                asChild: "",
                variant: "link"
              }, {
                default: L((w) => [
                  y(v, {
                    to: m.userSignedIn ? "/home" : "/",
                    class: C(w.class)
                  }, {
                    default: L(() => [
                      x(m.$slots, "logo")
                    ]),
                    _: 2
                  }, 1032, ["to", "class"])
                ]),
                _: 3
              })
            ]),
            end: L(() => [
              h("div", xt, [
                h("div", Pt, [
                  (u(!0), c(P, null, B(g(a), (w) => (u(), c("div", {
                    key: w.label
                  }, [
                    y(g(A), {
                      asChild: "",
                      variant: "outlined"
                    }, {
                      default: L((ce) => [
                        y(v, {
                          to: w.to,
                          class: C(ce.class)
                        }, {
                          default: L(() => [
                            h("i", {
                              class: C(w.icon)
                            }, null, 2),
                            h("span", null, H(w.label), 1)
                          ]),
                          _: 2
                        }, 1032, ["to", "class"])
                      ]),
                      _: 2
                    }, 1024)
                  ]))), 128)),
                  m.userSignedIn ? (u(), I(g(A), {
                    key: 0,
                    onClick: l,
                    icon: "pi pi-sign-out",
                    "aria-label": "Sign out",
                    variant: "outlined",
                    loading: g(r)
                  }, null, 8, ["loading"])) : p("", !0)
                ]),
                h("div", Ct, [
                  y(g(A), {
                    icon: "pi pi-bars",
                    onClick: s,
                    "aria-label": "Navigation menu",
                    "aria-haspopup": "true",
                    "aria-controls": "overlay_menu"
                  }),
                  y(g(oe), {
                    ref_key: "menu",
                    ref: o,
                    id: "overlay_menu",
                    model: g(b),
                    popup: ""
                  }, null, 8, ["model"])
                ])
              ])
            ]),
            _: 3
          })
        ])
      ]);
    };
  }
}), Et = /* @__PURE__ */ _({
  __name: "AppErrorInfo",
  props: {
    error: {}
  },
  setup(t) {
    const e = t;
    return Oe(() => {
      console.error("App error: ", e.error);
    }), (n, r) => (u(), I(g(ke), { class: "p-10" }, {
      title: L(() => r[0] || (r[0] = [
        h("h2", { class: "text-4xl font-semibold text-gray-800 text-center" }, [
          V(" Oops "),
          h("i", { class: "text-4xl not-italic" }, "🥲")
        ], -1)
      ])),
      content: L(() => r[1] || (r[1] = [
        h("p", { class: "mt-10 text-xl" }, [
          V(" Something went wrong! We have been notified about this. In the meantime, please try visiting the "),
          h("a", {
            href: "/",
            class: "underline"
          }, "homepage"),
          V(" or try again later. ")
        ], -1)
      ])),
      _: 1
    }));
  }
}), wt = {
  key: 0,
  class: "bar"
}, St = /* @__PURE__ */ _({
  __name: "PageInfiniteLoader",
  props: {
    isLoading: { type: Boolean }
  },
  setup(t) {
    return (e, n) => e.isLoading ? (u(), c("div", wt, n[0] || (n[0] = [
      h("div", null, null, -1)
    ]))) : p("", !0);
  }
}), $t = /* @__PURE__ */ Le(St, [["__scopeId", "data-v-a36ba306"]]);
export {
  Et as AppErrorInfo,
  $t as PageInfiniteLoader,
  zt as PageLoader,
  At as SiteNavigation,
  Kt as ThemeToggle
};
