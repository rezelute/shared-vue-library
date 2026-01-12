import { a as P, S as R, P as L, T as _ } from "./supertokens-vendor-Dsnq9j4O.js";
import { H as D, N as A, P as m, S as b, B as s } from "./index-DExoY821.js";
import { reactive as I, ref as C, watch as f } from "vue";
var n = {
  STARTS_WITH: "startsWith",
  CONTAINS: "contains",
  NOT_CONTAINS: "notContains",
  ENDS_WITH: "endsWith",
  EQUALS: "equals",
  NOT_EQUALS: "notEquals",
  LESS_THAN: "lt",
  LESS_THAN_OR_EQUAL_TO: "lte",
  GREATER_THAN: "gt",
  GREATER_THAN_OR_EQUAL_TO: "gte",
  DATE_IS: "dateIs",
  DATE_IS_NOT: "dateIsNot",
  DATE_BEFORE: "dateBefore",
  DATE_AFTER: "dateAfter"
};
function c(e) {
  "@babel/helpers - typeof";
  return c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, c(e);
}
function N(e, t) {
  var o = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(h) {
      return Object.getOwnPropertyDescriptor(e, h).enumerable;
    })), o.push.apply(o, a);
  }
  return o;
}
function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? arguments[t] : {};
    t % 2 ? N(Object(o), !0).forEach(function(a) {
      F(e, a, o[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : N(Object(o)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(o, a));
    });
  }
  return e;
}
function F(e, t, o) {
  return (t = x(t)) in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e;
}
function x(e) {
  var t = H(e, "string");
  return c(t) == "symbol" ? t : t + "";
}
function H(e, t) {
  if (c(e) != "object" || !e) return e;
  var o = e[Symbol.toPrimitive];
  if (o !== void 0) {
    var a = o.call(e, t);
    if (c(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var W = {
  ripple: !1,
  inputStyle: null,
  inputVariant: null,
  locale: {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    upload: "Upload",
    cancel: "Cancel",
    completed: "Completed",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    today: "Today",
    weekHeader: "Wk",
    firstDayOfWeek: 0,
    showMonthAfterYear: !1,
    dateFormat: "mm/dd/yy",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyFilterMessage: "No results found",
    searchMessage: "{0} results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    fileChosenMessage: "{0} files",
    noFileChosenMessage: "No file chosen",
    emptyMessage: "No available options",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "Page {page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List"
    }
  },
  filterMatchModeOptions: {
    text: [n.STARTS_WITH, n.CONTAINS, n.NOT_CONTAINS, n.ENDS_WITH, n.EQUALS, n.NOT_EQUALS],
    numeric: [n.EQUALS, n.NOT_EQUALS, n.LESS_THAN, n.LESS_THAN_OR_EQUAL_TO, n.GREATER_THAN, n.GREATER_THAN_OR_EQUAL_TO],
    date: [n.DATE_IS, n.DATE_IS_NOT, n.DATE_BEFORE, n.DATE_AFTER]
  },
  zIndex: {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  },
  theme: void 0,
  unstyled: !1,
  pt: void 0,
  ptOptions: {
    mergeSections: !0,
    mergeProps: !1
  },
  csp: {
    nonce: void 0
  }
}, j = Symbol();
function B(e, t) {
  var o = {
    config: I(t)
  };
  return e.config.globalProperties.$primevue = o, e.provide(j, o), U(), k(e, o), o;
}
var u = [];
function U() {
  A.clear(), u.forEach(function(e) {
    return e?.();
  }), u = [];
}
function k(e, t) {
  var o = C(!1), a = function() {
    var i;
    if (((i = t.config) === null || i === void 0 ? void 0 : i.theme) !== "none" && !b.isStyleNameLoaded("common")) {
      var g, l, p = ((g = s.getCommonTheme) === null || g === void 0 ? void 0 : g.call(s)) || {}, S = p.primitive, T = p.semantic, y = p.global, w = p.style, d = {
        nonce: (l = t.config) === null || l === void 0 || (l = l.csp) === null || l === void 0 ? void 0 : l.nonce
      };
      s.load(S?.css, v({
        name: "primitive-variables"
      }, d)), s.load(T?.css, v({
        name: "semantic-variables"
      }, d)), s.load(y?.css, v({
        name: "global-variables"
      }, d)), s.loadStyle(v({
        name: "global-style"
      }, d), w), b.setLoadedStyleName("common");
    }
  };
  A.on("theme:change", function(r) {
    o.value || (e.config.globalProperties.$primevue.config.theme = r, o.value = !0);
  });
  var h = f(t.config, function(r, i) {
    m.emit("config:change", {
      newValue: r,
      oldValue: i
    });
  }, {
    immediate: !0,
    deep: !0
  }), E = f(function() {
    return t.config.ripple;
  }, function(r, i) {
    m.emit("config:ripple:change", {
      newValue: r,
      oldValue: i
    });
  }, {
    immediate: !0,
    deep: !0
  }), M = f(function() {
    return t.config.theme;
  }, function(r, i) {
    o.value || b.setTheme(r), t.config.unstyled || a(), o.value = !1, m.emit("config:theme:change", {
      newValue: r,
      oldValue: i
    });
  }, {
    immediate: !0,
    deep: !1
  }), O = f(function() {
    return t.config.unstyled;
  }, function(r, i) {
    !r && t.config.theme && a(), m.emit("config:unstyled:change", {
      newValue: r,
      oldValue: i
    });
  }, {
    immediate: !0,
    deep: !0
  });
  u.push(h), u.push(E), u.push(M), u.push(O);
}
var Q = {
  install: function(t, o) {
    var a = D(W, o);
    B(t, a);
  }
};
function J(e, t) {
  e.use(Q, {
    theme: {
      preset: t,
      // MyPreset,
      options: {
        darkModeSelector: ".dark"
      }
    }
  });
}
const z = (e) => {
  P.init({
    appInfo: {
      appName: e.appInfo.appName,
      apiDomain: e.appInfo.apiDomain,
      apiBasePath: e.appInfo.apiBasePath || "/auth"
    },
    recipeList: [R.init(), L.init({}), _.init()]
  });
};
export {
  z as initializeSuperTokens,
  J as setupPrimeVue
};
