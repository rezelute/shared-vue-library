import { H as R, N, P as m, S as b, B as s } from "./index-DExoY821.js";
import { reactive as P, ref as L, watch as f } from "vue";
var r = {
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
function c(t) {
  "@babel/helpers - typeof";
  return c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, c(t);
}
function A(t, e) {
  var o = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    e && (a = a.filter(function(h) {
      return Object.getOwnPropertyDescriptor(t, h).enumerable;
    })), o.push.apply(o, a);
  }
  return o;
}
function v(t) {
  for (var e = 1; e < arguments.length; e++) {
    var o = arguments[e] != null ? arguments[e] : {};
    e % 2 ? A(Object(o), !0).forEach(function(a) {
      _(t, a, o[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : A(Object(o)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(o, a));
    });
  }
  return t;
}
function _(t, e, o) {
  return (e = D(e)) in t ? Object.defineProperty(t, e, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = o, t;
}
function D(t) {
  var e = C(t, "string");
  return c(e) == "symbol" ? e : e + "";
}
function C(t, e) {
  if (c(t) != "object" || !t) return t;
  var o = t[Symbol.toPrimitive];
  if (o !== void 0) {
    var a = o.call(t, e);
    if (c(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var F = {
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
    text: [r.STARTS_WITH, r.CONTAINS, r.NOT_CONTAINS, r.ENDS_WITH, r.EQUALS, r.NOT_EQUALS],
    numeric: [r.EQUALS, r.NOT_EQUALS, r.LESS_THAN, r.LESS_THAN_OR_EQUAL_TO, r.GREATER_THAN, r.GREATER_THAN_OR_EQUAL_TO],
    date: [r.DATE_IS, r.DATE_IS_NOT, r.DATE_BEFORE, r.DATE_AFTER]
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
}, I = Symbol();
function x(t, e) {
  var o = {
    config: P(e)
  };
  return t.config.globalProperties.$primevue = o, t.provide(I, o), H(), W(t, o), o;
}
var u = [];
function H() {
  N.clear(), u.forEach(function(t) {
    return t?.();
  }), u = [];
}
function W(t, e) {
  var o = L(!1), a = function() {
    var i;
    if (((i = e.config) === null || i === void 0 ? void 0 : i.theme) !== "none" && !b.isStyleNameLoaded("common")) {
      var g, l, d = ((g = s.getCommonTheme) === null || g === void 0 ? void 0 : g.call(s)) || {}, S = d.primitive, T = d.semantic, y = d.global, w = d.style, p = {
        nonce: (l = e.config) === null || l === void 0 || (l = l.csp) === null || l === void 0 ? void 0 : l.nonce
      };
      s.load(S?.css, v({
        name: "primitive-variables"
      }, p)), s.load(T?.css, v({
        name: "semantic-variables"
      }, p)), s.load(y?.css, v({
        name: "global-variables"
      }, p)), s.loadStyle(v({
        name: "global-style"
      }, p), w), b.setLoadedStyleName("common");
    }
  };
  N.on("theme:change", function(n) {
    o.value || (t.config.globalProperties.$primevue.config.theme = n, o.value = !0);
  });
  var h = f(e.config, function(n, i) {
    m.emit("config:change", {
      newValue: n,
      oldValue: i
    });
  }, {
    immediate: !0,
    deep: !0
  }), E = f(function() {
    return e.config.ripple;
  }, function(n, i) {
    m.emit("config:ripple:change", {
      newValue: n,
      oldValue: i
    });
  }, {
    immediate: !0,
    deep: !0
  }), M = f(function() {
    return e.config.theme;
  }, function(n, i) {
    o.value || b.setTheme(n), e.config.unstyled || a(), o.value = !1, m.emit("config:theme:change", {
      newValue: n,
      oldValue: i
    });
  }, {
    immediate: !0,
    deep: !1
  }), O = f(function() {
    return e.config.unstyled;
  }, function(n, i) {
    !n && e.config.theme && a(), m.emit("config:unstyled:change", {
      newValue: n,
      oldValue: i
    });
  }, {
    immediate: !0,
    deep: !0
  });
  u.push(h), u.push(E), u.push(M), u.push(O);
}
var j = {
  install: function(e, o) {
    var a = R(F, o);
    x(e, a);
  }
};
function Q(t, e) {
  t.use(j, {
    theme: {
      preset: e,
      // MyPreset,
      options: {
        darkModeSelector: ".dark"
      }
    }
  });
}
export {
  Q as setupPrimeVue
};
