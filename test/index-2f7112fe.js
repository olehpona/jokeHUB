"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e3) { throw _e3; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e4) { didErr = true; err = _e4; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var te = function te(e, t, n) {
  if (!t.has(e)) throw TypeError("Cannot " + n);
};
var be = function be(e, t, n) {
    return te(e, t, "read from private field"), n ? n.call(e) : t.get(e);
  },
  M = function M(e, t, n) {
    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, n);
  },
  we = function we(e, t, n, r) {
    return te(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n;
  };
var N = function N(e, t, n) {
  return te(e, t, "access private method"), n;
};
(function () {
  var t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  var _iterator = _createForOfIteratorHelper(document.querySelectorAll('link[rel="modulepreload"]')),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var s = _step.value;
      r(s);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  new MutationObserver(function (s) {
    var _iterator2 = _createForOfIteratorHelper(s),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var o = _step2.value;
        if (o.type === "childList") {
          var _iterator3 = _createForOfIteratorHelper(o.addedNodes),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var i = _step3.value;
              i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }).observe(document, {
    childList: !0,
    subtree: !0
  });
  function n(s) {
    var o = {};
    return s.integrity && (o.integrity = s.integrity), s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? o.credentials = "include" : s.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    var o = n(s);
    fetch(s.href, o);
  }
})();
function De(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
var at = Object.prototype.toString,
  he = Object.getPrototypeOf,
  X = function (e) {
    return function (t) {
      var n = at.call(t);
      return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
    };
  }(Object.create(null)),
  R = function R(e) {
    return e = e.toLowerCase(), function (t) {
      return X(t) === e;
    };
  },
  Q = function Q(e) {
    return function (t) {
      return _typeof(t) === e;
    };
  },
  v = Array.isArray,
  F = Q("undefined");
function lt(e) {
  return e !== null && !F(e) && e.constructor !== null && !F(e.constructor) && k(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
var Ue = R("ArrayBuffer");
function ct(e) {
  var t;
  return (typeof ArrayBuffer === "undefined" ? "undefined" : _typeof(ArrayBuffer)) < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ue(e.buffer), t;
}
var dt = Q("string"),
  k = Q("function"),
  qe = Q("number"),
  Z = function Z(e) {
    return e !== null && _typeof(e) == "object";
  },
  ut = function ut(e) {
    return e === !0 || e === !1;
  },
  z = function z(e) {
    if (X(e) !== "object") return !1;
    var t = he(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
  },
  ft = R("Date"),
  mt = R("File"),
  ht = R("Blob"),
  pt = R("FileList"),
  yt = function yt(e) {
    return Z(e) && k(e.pipe);
  },
  gt = function gt(e) {
    var t;
    return e && (typeof FormData == "function" && e instanceof FormData || k(e.append) && ((t = X(e)) === "formdata" || t === "object" && k(e.toString) && e.toString() === "[object FormData]"));
  },
  _t = R("URLSearchParams"),
  Et = function Et(e) {
    return e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  };
function U(e, t) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref$allOwnKeys = _ref.allOwnKeys,
    n = _ref$allOwnKeys === void 0 ? !1 : _ref$allOwnKeys;
  if (e === null || _typeof(e) > "u") return;
  var r, s;
  if (_typeof(e) != "object" && (e = [e]), v(e)) for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);else {
    var o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    var l;
    for (r = 0; r < i; r++) l = o[r], t.call(null, e[l], l, e);
  }
}
function He(e, t) {
  t = t.toLowerCase();
  var n = Object.keys(e);
  var r = n.length,
    s;
  for (; r-- > 0;) if (s = n[r], t === s.toLowerCase()) return s;
  return null;
}
var Me = function () {
    return (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) < "u" ? globalThis : (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" ? self : (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" ? window : global;
  }(),
  Je = function Je(e) {
    return !F(e) && e !== Me;
  };
function ae() {
  var _ref2 = Je(this) && this || {},
    e = _ref2.caseless,
    t = {},
    n = function n(r, s) {
      var o = e && He(t, s) || s;
      z(t[o]) && z(r) ? t[o] = ae(t[o], r) : z(r) ? t[o] = ae({}, r) : v(r) ? t[o] = r.slice() : t[o] = r;
    };
  for (var r = 0, s = arguments.length; r < s; r++) arguments[r] && U(arguments[r], n);
  return t;
}
var bt = function bt(e, t, n) {
    var _ref3 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
      r = _ref3.allOwnKeys;
    return U(t, function (s, o) {
      n && k(s) ? e[o] = De(s, n) : e[o] = s;
    }, {
      allOwnKeys: r
    }), e;
  },
  wt = function wt(e) {
    return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
  },
  St = function St(e, t, n, r) {
    e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
      value: t.prototype
    }), n && Object.assign(e.prototype, n);
  },
  kt = function kt(e, t, n, r) {
    var s, o, i;
    var l = {};
    if (t = t || {}, e == null) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0;) i = s[o], (!r || r(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
      e = n !== !1 && he(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Lt = function Lt(e, t, n) {
    e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
    var r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Ot = function Ot(e) {
    if (!e) return null;
    if (v(e)) return e;
    var t = e.length;
    if (!qe(t)) return null;
    var n = new Array(t);
    for (; t-- > 0;) n[t] = e[t];
    return n;
  },
  At = function (e) {
    return function (t) {
      return e && t instanceof e;
    };
  }((typeof Uint8Array === "undefined" ? "undefined" : _typeof(Uint8Array)) < "u" && he(Uint8Array)),
  Rt = function Rt(e, t) {
    var r = (e && e[Symbol.iterator]).call(e);
    var s;
    for (; (s = r.next()) && !s.done;) {
      var o = s.value;
      t.call(e, o[0], o[1]);
    }
  },
  Tt = function Tt(e, t) {
    var n;
    var r = [];
    for (; (n = e.exec(t)) !== null;) r.push(n);
    return r;
  },
  Bt = R("HTMLFormElement"),
  xt = function xt(e) {
    return e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    });
  },
  Se = function (_ref4) {
    var e = _ref4.hasOwnProperty;
    return function (t, n) {
      return e.call(t, n);
    };
  }(Object.prototype),
  It = R("RegExp"),
  ze = function ze(e, t) {
    var n = Object.getOwnPropertyDescriptors(e),
      r = {};
    U(n, function (s, o) {
      var i;
      (i = t(s, o, e)) !== !1 && (r[o] = i || s);
    }), Object.defineProperties(e, r);
  },
  vt = function vt(e) {
    ze(e, function (t, n) {
      if (k(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
      var r = e[n];
      if (k(r)) {
        if (t.enumerable = !1, "writable" in t) {
          t.writable = !1;
          return;
        }
        t.set || (t.set = function () {
          throw Error("Can not rewrite read-only method '" + n + "'");
        });
      }
    });
  },
  Nt = function Nt(e, t) {
    var n = {},
      r = function r(s) {
        s.forEach(function (o) {
          n[o] = !0;
        });
      };
    return v(e) ? r(e) : r(String(e).split(t)), n;
  },
  Pt = function Pt() {},
  Ct = function Ct(e, t) {
    return e = +e, Number.isFinite(e) ? e : t;
  },
  ne = "abcdefghijklmnopqrstuvwxyz",
  ke = "0123456789",
  $e = {
    DIGIT: ke,
    ALPHA: ne,
    ALPHA_DIGIT: ne + ne.toUpperCase() + ke
  },
  jt = function jt() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $e.ALPHA_DIGIT;
    var n = "";
    var r = t.length;
    for (; e--;) n += t[Math.random() * r | 0];
    return n;
  };
function Ft(e) {
  return !!(e && k(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
var Dt = function Dt(e) {
    var t = new Array(10),
      n = function n(r, s) {
        if (Z(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[s] = r;
            var o = v(r) ? [] : {};
            return U(r, function (i, l) {
              var u = n(i, s + 1);
              !F(u) && (o[l] = u);
            }), t[s] = void 0, o;
          }
        }
        return r;
      };
    return n(e, 0);
  },
  Ut = R("AsyncFunction"),
  qt = function qt(e) {
    return e && (Z(e) || k(e)) && k(e.then) && k(e["catch"]);
  },
  a = {
    isArray: v,
    isArrayBuffer: Ue,
    isBuffer: lt,
    isFormData: gt,
    isArrayBufferView: ct,
    isString: dt,
    isNumber: qe,
    isBoolean: ut,
    isObject: Z,
    isPlainObject: z,
    isUndefined: F,
    isDate: ft,
    isFile: mt,
    isBlob: ht,
    isRegExp: It,
    isFunction: k,
    isStream: yt,
    isURLSearchParams: _t,
    isTypedArray: At,
    isFileList: pt,
    forEach: U,
    merge: ae,
    extend: bt,
    trim: Et,
    stripBOM: wt,
    inherits: St,
    toFlatObject: kt,
    kindOf: X,
    kindOfTest: R,
    endsWith: Lt,
    toArray: Ot,
    forEachEntry: Rt,
    matchAll: Tt,
    isHTMLForm: Bt,
    hasOwnProperty: Se,
    hasOwnProp: Se,
    reduceDescriptors: ze,
    freezeMethods: vt,
    toObjectSet: Nt,
    toCamelCase: xt,
    noop: Pt,
    toFiniteNumber: Ct,
    findKey: He,
    global: Me,
    isContextDefined: Je,
    ALPHABET: $e,
    generateString: jt,
    isSpecCompliantForm: Ft,
    toJSONObject: Dt,
    isAsyncFn: Ut,
    isThenable: qt
  };
function p(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
a.inherits(p, Error, {
  toJSON: function toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var Ve = p.prototype,
  Ke = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(function (e) {
  Ke[e] = {
    value: e
  };
});
Object.defineProperties(p, Ke);
Object.defineProperty(Ve, "isAxiosError", {
  value: !0
});
p.from = function (e, t, n, r, s, o) {
  var i = Object.create(Ve);
  return a.toFlatObject(e, i, function (u) {
    return u !== Error.prototype;
  }, function (l) {
    return l !== "isAxiosError";
  }), p.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
var Ht = null;
function le(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function We(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Le(e, t, n) {
  return e ? e.concat(t).map(function (s, o) {
    return s = We(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Mt(e) {
  return a.isArray(e) && !e.some(le);
}
var Jt = a.toFlatObject(a, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Y(e, t, n) {
  if (!a.isObject(e)) throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function (d, y) {
    return !a.isUndefined(y[d]);
  });
  var r = n.metaTokens,
    s = n.visitor || c,
    o = n.dots,
    i = n.indexes,
    u = (n.Blob || (typeof Blob === "undefined" ? "undefined" : _typeof(Blob)) < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s)) throw new TypeError("visitor must be a function");
  function m(f) {
    if (f === null) return "";
    if (a.isDate(f)) return f.toISOString();
    if (!u && a.isBlob(f)) throw new p("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(f) || a.isTypedArray(f) ? u && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function c(f, d, y) {
    var w = f;
    if (f && !y && _typeof(f) == "object") {
      if (a.endsWith(d, "{}")) d = r ? d : d.slice(0, -2), f = JSON.stringify(f);else if (a.isArray(f) && Mt(f) || (a.isFileList(f) || a.endsWith(d, "[]")) && (w = a.toArray(f))) return d = We(d), w.forEach(function (H, it) {
        !(a.isUndefined(H) || H === null) && t.append(i === !0 ? Le([d], it, o) : i === null ? d : d + "[]", m(H));
      }), !1;
    }
    return le(f) ? !0 : (t.append(Le(y, d, o), m(f)), !1);
  }
  var h = [],
    g = Object.assign(Jt, {
      defaultVisitor: c,
      convertValue: m,
      isVisitable: le
    });
  function E(f, d) {
    if (!a.isUndefined(f)) {
      if (h.indexOf(f) !== -1) throw Error("Circular reference detected in " + d.join("."));
      h.push(f), a.forEach(f, function (w, O) {
        (!(a.isUndefined(w) || w === null) && s.call(t, w, a.isString(O) ? O.trim() : O, d, g)) === !0 && E(w, d ? d.concat(O) : [O]);
      }), h.pop();
    }
  }
  if (!a.isObject(e)) throw new TypeError("data must be an object");
  return E(e), t;
}
function Oe(e) {
  var t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function pe(e, t) {
  this._pairs = [], e && Y(e, this, t);
}
var Ge = pe.prototype;
Ge.append = function (t, n) {
  this._pairs.push([t, n]);
};
Ge.toString = function (t) {
  var n = t ? function (r) {
    return t.call(this, r, Oe);
  } : Oe;
  return this._pairs.map(function (s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function zt(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Xe(e, t, n) {
  if (!t) return e;
  var r = n && n.encode || zt,
    s = n && n.serialize;
  var o;
  if (s ? o = s(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new pe(t, n).toString(r), o) {
    var i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
var $t = /*#__PURE__*/function () {
  function $t() {
    _classCallCheck(this, $t);
    this.handlers = [];
  }
  _createClass($t, [{
    key: "use",
    value: function use(t, n, r) {
      return this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null
      }), this.handlers.length - 1;
    }
  }, {
    key: "eject",
    value: function eject(t) {
      this.handlers[t] && (this.handlers[t] = null);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.handlers && (this.handlers = []);
    }
  }, {
    key: "forEach",
    value: function forEach(t) {
      a.forEach(this.handlers, function (r) {
        r !== null && t(r);
      });
    }
  }]);
  return $t;
}();
var Ae = $t,
  Qe = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
  },
  Vt = (typeof URLSearchParams === "undefined" ? "undefined" : _typeof(URLSearchParams)) < "u" ? URLSearchParams : pe,
  Kt = (typeof FormData === "undefined" ? "undefined" : _typeof(FormData)) < "u" ? FormData : null,
  Wt = (typeof Blob === "undefined" ? "undefined" : _typeof(Blob)) < "u" ? Blob : null,
  Gt = function () {
    var e;
    return (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" && (typeof document === "undefined" ? "undefined" : _typeof(document)) < "u";
  }(),
  Xt = function () {
    return (typeof WorkerGlobalScope === "undefined" ? "undefined" : _typeof(WorkerGlobalScope)) < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function";
  }(),
  A = {
    isBrowser: !0,
    classes: {
      URLSearchParams: Vt,
      FormData: Kt,
      Blob: Wt
    },
    isStandardBrowserEnv: Gt,
    isStandardBrowserWebWorkerEnv: Xt,
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };
function Qt(e, t) {
  return Y(e, new A.classes.URLSearchParams(), Object.assign({
    visitor: function visitor(n, r, s, o) {
      return A.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Zt(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map(function (t) {
    return t[0] === "[]" ? "" : t[1] || t[0];
  });
}
function Yt(e) {
  var t = {},
    n = Object.keys(e);
  var r;
  var s = n.length;
  var o;
  for (r = 0; r < s; r++) o = n[r], t[o] = e[o];
  return t;
}
function Ze(e) {
  function t(n, r, s, o) {
    var i = n[o++];
    var l = Number.isFinite(+i),
      u = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, u ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !l) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = Yt(s[i])), !l);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    var n = {};
    return a.forEachEntry(e, function (r, s) {
      t(Zt(r), s, n, 0);
    }), n;
  }
  return null;
}
function en(e, t, n) {
  if (a.isString(e)) try {
    return (t || JSON.parse)(e), a.trim(e);
  } catch (r) {
    if (r.name !== "SyntaxError") throw r;
  }
  return (n || JSON.stringify)(e);
}
var ye = {
  transitional: Qe,
  adapter: ["xhr", "http"],
  transformRequest: [function (t, n) {
    var r = n.getContentType() || "",
      s = r.indexOf("application/json") > -1,
      o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t)) return s && s ? JSON.stringify(Ze(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t)) return t;
    if (a.isArrayBufferView(t)) return t.buffer;
    if (a.isURLSearchParams(t)) return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    var l;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1) return Qt(t, this.formSerializer).toString();
      if ((l = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        var u = this.env && this.env.FormData;
        return Y(l ? {
          "files[]": t
        } : t, u && new u(), this.formSerializer);
      }
    }
    return o || s ? (n.setContentType("application/json", !1), en(t)) : t;
  }],
  transformResponse: [function (t) {
    var n = this.transitional || ye.transitional,
      r = n && n.forcedJSONParsing,
      s = this.responseType === "json";
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      var i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (i) throw l.name === "SyntaxError" ? p.from(l, p.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: A.classes.FormData,
    Blob: A.classes.Blob
  },
  validateStatus: function validateStatus(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], function (e) {
  ye.headers[e] = {};
});
var ge = ye,
  tn = a.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
  nn = function nn(e) {
    var t = {};
    var n, r, s;
    return e && e.split("\n").forEach(function (i) {
      s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && tn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
    }), t;
  },
  Re = Symbol("internals");
function P(e) {
  return e && String(e).trim().toLowerCase();
}
function $(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map($) : String(e);
}
function rn(e) {
  var t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  var r;
  for (; r = n.exec(e);) t[r[1]] = r[2];
  return t;
}
var sn = function sn(e) {
  return /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
};
function re(e, t, n, r, s) {
  if (a.isFunction(r)) return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r)) return t.indexOf(r) !== -1;
    if (a.isRegExp(r)) return r.test(t);
  }
}
function on(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, function (t, n, r) {
    return n.toUpperCase() + r;
  });
}
function an(e, t) {
  var n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach(function (r) {
    Object.defineProperty(e, r + n, {
      value: function value(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
var ee = /*#__PURE__*/function (_Symbol$iterator, _Symbol$toStringTag) {
  function ee(t) {
    _classCallCheck(this, ee);
    t && this.set(t);
  }
  _createClass(ee, [{
    key: "set",
    value: function set(t, n, r) {
      var s = this;
      function o(l, u, m) {
        var c = P(u);
        if (!c) throw new Error("header name must be a non-empty string");
        var h = a.findKey(s, c);
        (!h || s[h] === void 0 || m === !0 || m === void 0 && s[h] !== !1) && (s[h || u] = $(l));
      }
      var i = function i(l, u) {
        return a.forEach(l, function (m, c) {
          return o(m, c, u);
        });
      };
      return a.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : a.isString(t) && (t = t.trim()) && !sn(t) ? i(nn(t), n) : t != null && o(n, t, r), this;
    }
  }, {
    key: "get",
    value: function get(t, n) {
      if (t = P(t), t) {
        var r = a.findKey(this, t);
        if (r) {
          var s = this[r];
          if (!n) return s;
          if (n === !0) return rn(s);
          if (a.isFunction(n)) return n.call(this, s, r);
          if (a.isRegExp(n)) return n.exec(s);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
  }, {
    key: "has",
    value: function has(t, n) {
      if (t = P(t), t) {
        var r = a.findKey(this, t);
        return !!(r && this[r] !== void 0 && (!n || re(this, this[r], r, n)));
      }
      return !1;
    }
  }, {
    key: "delete",
    value: function _delete(t, n) {
      var r = this;
      var s = !1;
      function o(i) {
        if (i = P(i), i) {
          var l = a.findKey(r, i);
          l && (!n || re(r, r[l], l, n)) && (delete r[l], s = !0);
        }
      }
      return a.isArray(t) ? t.forEach(o) : o(t), s;
    }
  }, {
    key: "clear",
    value: function clear(t) {
      var n = Object.keys(this);
      var r = n.length,
        s = !1;
      for (; r--;) {
        var o = n[r];
        (!t || re(this, this[o], o, t, !0)) && (delete this[o], s = !0);
      }
      return s;
    }
  }, {
    key: "normalize",
    value: function normalize(t) {
      var n = this,
        r = {};
      return a.forEach(this, function (s, o) {
        var i = a.findKey(r, o);
        if (i) {
          n[i] = $(s), delete n[o];
          return;
        }
        var l = t ? on(o) : String(o).trim();
        l !== o && delete n[o], n[l] = $(s), r[l] = !0;
      }), this;
    }
  }, {
    key: "concat",
    value: function concat() {
      var _this$constructor;
      for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
        t[_key] = arguments[_key];
      }
      return (_this$constructor = this.constructor).concat.apply(_this$constructor, [this].concat(t));
    }
  }, {
    key: "toJSON",
    value: function toJSON(t) {
      var n = Object.create(null);
      return a.forEach(this, function (r, s) {
        r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
      }), n;
    }
  }, {
    key: _Symbol$iterator,
    value: function value() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
  }, {
    key: "toString",
    value: function toString() {
      return Object.entries(this.toJSON()).map(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
          t = _ref6[0],
          n = _ref6[1];
        return t + ": " + n;
      }).join("\n");
    }
  }, {
    key: _Symbol$toStringTag,
    get: function get() {
      return "AxiosHeaders";
    }
  }], [{
    key: "from",
    value: function from(t) {
      return t instanceof this ? t : new this(t);
    }
  }, {
    key: "concat",
    value: function concat(t) {
      var r = new this(t);
      for (var _len2 = arguments.length, n = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        n[_key2 - 1] = arguments[_key2];
      }
      return n.forEach(function (s) {
        return r.set(s);
      }), r;
    }
  }, {
    key: "accessor",
    value: function accessor(t) {
      var r = (this[Re] = this[Re] = {
          accessors: {}
        }).accessors,
        s = this.prototype;
      function o(i) {
        var l = P(i);
        r[l] || (an(s, i), r[l] = !0);
      }
      return a.isArray(t) ? t.forEach(o) : o(t), this;
    }
  }]);
  return ee;
}(Symbol.iterator, Symbol.toStringTag);
ee.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(ee.prototype, function (_ref7, t) {
  var e = _ref7.value;
  var n = t[0].toUpperCase() + t.slice(1);
  return {
    get: function get() {
      return e;
    },
    set: function set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(ee);
var T = ee;
function se(e, t) {
  var n = this || ge,
    r = t || n,
    s = T.from(r.headers);
  var o = r.data;
  return a.forEach(e, function (l) {
    o = l.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Ye(e) {
  return !!(e && e.__CANCEL__);
}
function q(e, t, n) {
  p.call(this, e !== null && e !== void 0 ? e : "canceled", p.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(q, p, {
  __CANCEL__: !0
});
function ln(e, t, n) {
  var r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new p("Request failed with status code " + n.status, [p.ERR_BAD_REQUEST, p.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n));
}
var cn = A.isStandardBrowserEnv ? function () {
  return {
    write: function write(n, r, s, o, i, l) {
      var u = [];
      u.push(n + "=" + encodeURIComponent(r)), a.isNumber(s) && u.push("expires=" + new Date(s).toGMTString()), a.isString(o) && u.push("path=" + o), a.isString(i) && u.push("domain=" + i), l === !0 && u.push("secure"), document.cookie = u.join("; ");
    },
    read: function read(n) {
      var r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
      return r ? decodeURIComponent(r[3]) : null;
    },
    remove: function remove(n) {
      this.write(n, "", Date.now() - 864e5);
    }
  };
}() : function () {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();
function dn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function un(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function et(e, t) {
  return e && !dn(t) ? un(e, t) : t;
}
var fn = A.isStandardBrowserEnv ? function () {
  var t = /(msie|trident)/i.test(navigator.userAgent),
    n = document.createElement("a");
  var r;
  function s(o) {
    var i = o;
    return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
      href: n.href,
      protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
      host: n.host,
      search: n.search ? n.search.replace(/^\?/, "") : "",
      hash: n.hash ? n.hash.replace(/^#/, "") : "",
      hostname: n.hostname,
      port: n.port,
      pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
    };
  }
  return r = s(window.location.href), function (i) {
    var l = a.isString(i) ? s(i) : i;
    return l.protocol === r.protocol && l.host === r.host;
  };
}() : function () {
  return function () {
    return !0;
  };
}();
function mn(e) {
  var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function hn(e, t) {
  e = e || 10;
  var n = new Array(e),
    r = new Array(e);
  var s = 0,
    o = 0,
    i;
  return t = t !== void 0 ? t : 1e3, function (u) {
    var m = Date.now(),
      c = r[o];
    i || (i = m), n[s] = u, r[s] = m;
    var h = o,
      g = 0;
    for (; h !== s;) g += n[h++], h = h % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), m - i < t) return;
    var E = c && m - c;
    return E ? Math.round(g * 1e3 / E) : void 0;
  };
}
function Te(e, t) {
  var n = 0;
  var r = hn(50, 250);
  return function (s) {
    var o = s.loaded,
      i = s.lengthComputable ? s.total : void 0,
      l = o - n,
      u = r(l),
      m = o <= i;
    n = o;
    var c = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: l,
      rate: u || void 0,
      estimated: u && i && m ? (i - o) / u : void 0,
      event: s
    };
    c[t ? "download" : "upload"] = !0, e(c);
  };
}
var pn = (typeof XMLHttpRequest === "undefined" ? "undefined" : _typeof(XMLHttpRequest)) < "u",
  yn = pn && function (e) {
    return new Promise(function (n, r) {
      var s = e.data;
      var o = T.from(e.headers).normalize(),
        i = e.responseType;
      var l;
      function u() {
        e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
      }
      var m;
      a.isFormData(s) && (A.isStandardBrowserEnv || A.isStandardBrowserWebWorkerEnv ? o.setContentType(!1) : o.getContentType(/^\s*multipart\/form-data/) ? a.isString(m = o.getContentType()) && o.setContentType(m.replace(/^\s*(multipart\/form-data);+/, "$1")) : o.setContentType("multipart/form-data"));
      var c = new XMLHttpRequest();
      if (e.auth) {
        var f = e.auth.username || "",
          d = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
        o.set("Authorization", "Basic " + btoa(f + ":" + d));
      }
      var h = et(e.baseURL, e.url);
      c.open(e.method.toUpperCase(), Xe(h, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
      function g() {
        if (!c) return;
        var f = T.from("getAllResponseHeaders" in c && c.getAllResponseHeaders()),
          y = {
            data: !i || i === "text" || i === "json" ? c.responseText : c.response,
            status: c.status,
            statusText: c.statusText,
            headers: f,
            config: e,
            request: c
          };
        ln(function (O) {
          n(O), u();
        }, function (O) {
          r(O), u();
        }, y), c = null;
      }
      if ("onloadend" in c ? c.onloadend = g : c.onreadystatechange = function () {
        !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(g);
      }, c.onabort = function () {
        c && (r(new p("Request aborted", p.ECONNABORTED, e, c)), c = null);
      }, c.onerror = function () {
        r(new p("Network Error", p.ERR_NETWORK, e, c)), c = null;
      }, c.ontimeout = function () {
        var d = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
        var y = e.transitional || Qe;
        e.timeoutErrorMessage && (d = e.timeoutErrorMessage), r(new p(d, y.clarifyTimeoutError ? p.ETIMEDOUT : p.ECONNABORTED, e, c)), c = null;
      }, A.isStandardBrowserEnv) {
        var _f = (e.withCredentials || fn(h)) && e.xsrfCookieName && cn.read(e.xsrfCookieName);
        _f && o.set(e.xsrfHeaderName, _f);
      }
      s === void 0 && o.setContentType(null), "setRequestHeader" in c && a.forEach(o.toJSON(), function (d, y) {
        c.setRequestHeader(y, d);
      }), a.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), i && i !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", Te(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", Te(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = function l(f) {
        c && (r(!f || f.type ? new q(null, e, c) : f), c.abort(), c = null);
      }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
      var E = mn(h);
      if (E && A.protocols.indexOf(E) === -1) {
        r(new p("Unsupported protocol " + E + ":", p.ERR_BAD_REQUEST, e));
        return;
      }
      c.send(s || null);
    });
  },
  ce = {
    http: Ht,
    xhr: yn
  };
a.forEach(ce, function (e, t) {
  if (e) {
    try {
      Object.defineProperty(e, "name", {
        value: t
      });
    } catch (_unused) {}
    Object.defineProperty(e, "adapterName", {
      value: t
    });
  }
});
var Be = function Be(e) {
    return "- ".concat(e);
  },
  gn = function gn(e) {
    return a.isFunction(e) || e === null || e === !1;
  },
  tt = {
    getAdapter: function getAdapter(e) {
      e = a.isArray(e) ? e : [e];
      var _e2 = e,
        t = _e2.length;
      var n, r;
      var s = {};
      for (var o = 0; o < t; o++) {
        n = e[o];
        var i = void 0;
        if (r = n, !gn(n) && (r = ce[(i = String(n)).toLowerCase()], r === void 0)) throw new p("Unknown adapter '".concat(i, "'"));
        if (r) break;
        s[i || "#" + o] = r;
      }
      if (!r) {
        var _o = Object.entries(s).map(function (_ref8) {
          var _ref9 = _slicedToArray(_ref8, 2),
            l = _ref9[0],
            u = _ref9[1];
          return "adapter ".concat(l, " ") + (u === !1 ? "is not supported by the environment" : "is not available in the build");
        });
        var _i = t ? _o.length > 1 ? "since :\n" + _o.map(Be).join("\n") : " " + Be(_o[0]) : "as no adapter specified";
        throw new p("There is no suitable adapter to dispatch the request " + _i, "ERR_NOT_SUPPORT");
      }
      return r;
    },
    adapters: ce
  };
function oe(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new q(null, e);
}
function xe(e) {
  return oe(e), e.headers = T.from(e.headers), e.data = se.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), tt.getAdapter(e.adapter || ge.adapter)(e).then(function (r) {
    return oe(e), r.data = se.call(e, e.transformResponse, r), r.headers = T.from(r.headers), r;
  }, function (r) {
    return Ye(r) || (oe(e), r && r.response && (r.response.data = se.call(e, e.transformResponse, r.response), r.response.headers = T.from(r.response.headers))), Promise.reject(r);
  });
}
var Ie = function Ie(e) {
  return e instanceof T ? e.toJSON() : e;
};
function I(e, t) {
  t = t || {};
  var n = {};
  function r(m, c, h) {
    return a.isPlainObject(m) && a.isPlainObject(c) ? a.merge.call({
      caseless: h
    }, m, c) : a.isPlainObject(c) ? a.merge({}, c) : a.isArray(c) ? c.slice() : c;
  }
  function s(m, c, h) {
    if (a.isUndefined(c)) {
      if (!a.isUndefined(m)) return r(void 0, m, h);
    } else return r(m, c, h);
  }
  function o(m, c) {
    if (!a.isUndefined(c)) return r(void 0, c);
  }
  function i(m, c) {
    if (a.isUndefined(c)) {
      if (!a.isUndefined(m)) return r(void 0, m);
    } else return r(void 0, c);
  }
  function l(m, c, h) {
    if (h in t) return r(m, c);
    if (h in e) return r(void 0, m);
  }
  var u = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l,
    headers: function headers(m, c) {
      return s(Ie(m), Ie(c), !0);
    }
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
    var h = u[c] || s,
      g = h(e[c], t[c], c);
    a.isUndefined(g) && h !== l || (n[c] = g);
  }), n;
}
var nt = "1.5.1",
  _e = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function (e, t) {
  _e[e] = function (r) {
    return _typeof(r) === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
var ve = {};
_e.transitional = function (t, n, r) {
  function s(o, i) {
    return "[Axios v" + nt + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return function (o, i, l) {
    if (t === !1) throw new p(s(i, " has been removed" + (n ? " in " + n : "")), p.ERR_DEPRECATED);
    return n && !ve[i] && (ve[i] = !0, console.warn(s(i, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(o, i, l) : !0;
  };
};
function _n(e, t, n) {
  if (_typeof(e) != "object") throw new p("options must be an object", p.ERR_BAD_OPTION_VALUE);
  var r = Object.keys(e);
  var s = r.length;
  for (; s-- > 0;) {
    var o = r[s],
      i = t[o];
    if (i) {
      var l = e[o],
        u = l === void 0 || i(l, o, e);
      if (u !== !0) throw new p("option " + o + " must be " + u, p.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new p("Unknown option " + o, p.ERR_BAD_OPTION);
  }
}
var de = {
    assertOptions: _n,
    validators: _e
  },
  B = de.validators;
var W = /*#__PURE__*/function () {
  function W(t) {
    _classCallCheck(this, W);
    this.defaults = t, this.interceptors = {
      request: new Ae(),
      response: new Ae()
    };
  }
  _createClass(W, [{
    key: "request",
    value: function request(t, n) {
      typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = I(this.defaults, n);
      var _n2 = n,
        r = _n2.transitional,
        s = _n2.paramsSerializer,
        o = _n2.headers;
      r !== void 0 && de.assertOptions(r, {
        silentJSONParsing: B.transitional(B["boolean"]),
        forcedJSONParsing: B.transitional(B["boolean"]),
        clarifyTimeoutError: B.transitional(B["boolean"])
      }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
        serialize: s
      } : de.assertOptions(s, {
        encode: B["function"],
        serialize: B["function"]
      }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
      var i = o && a.merge(o.common, o[n.method]);
      o && a.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (f) {
        delete o[f];
      }), n.headers = T.concat(i, o);
      var l = [];
      var u = !0;
      this.interceptors.request.forEach(function (d) {
        typeof d.runWhen == "function" && d.runWhen(n) === !1 || (u = u && d.synchronous, l.unshift(d.fulfilled, d.rejected));
      });
      var m = [];
      this.interceptors.response.forEach(function (d) {
        m.push(d.fulfilled, d.rejected);
      });
      var c,
        h = 0,
        g;
      if (!u) {
        var f = [xe.bind(this), void 0];
        for (f.unshift.apply(f, l), f.push.apply(f, m), g = f.length, c = Promise.resolve(n); h < g;) c = c.then(f[h++], f[h++]);
        return c;
      }
      g = l.length;
      var E = n;
      for (h = 0; h < g;) {
        var _f2 = l[h++],
          d = l[h++];
        try {
          E = _f2(E);
        } catch (y) {
          d.call(this, y);
          break;
        }
      }
      try {
        c = xe.call(this, E);
      } catch (f) {
        return Promise.reject(f);
      }
      for (h = 0, g = m.length; h < g;) c = c.then(m[h++], m[h++]);
      return c;
    }
  }, {
    key: "getUri",
    value: function getUri(t) {
      t = I(this.defaults, t);
      var n = et(t.baseURL, t.url);
      return Xe(n, t.params, t.paramsSerializer);
    }
  }]);
  return W;
}();
a.forEach(["delete", "get", "head", "options"], function (t) {
  W.prototype[t] = function (n, r) {
    return this.request(I(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, i, l) {
      return this.request(I(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  W.prototype[t] = n(), W.prototype[t + "Form"] = n(!0);
});
var V = W;
var Ee = /*#__PURE__*/function () {
  function Ee(t) {
    _classCallCheck(this, Ee);
    if (typeof t != "function") throw new TypeError("executor must be a function.");
    var n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    var r = this;
    this.promise.then(function (s) {
      if (!r._listeners) return;
      var o = r._listeners.length;
      for (; o-- > 0;) r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = function (s) {
      var o;
      var i = new Promise(function (l) {
        r.subscribe(l), o = l;
      }).then(s);
      return i.cancel = function () {
        r.unsubscribe(o);
      }, i;
    }, t(function (o, i, l) {
      r.reason || (r.reason = new q(o, i, l), n(r.reason));
    });
  }
  _createClass(Ee, [{
    key: "throwIfRequested",
    value: function throwIfRequested() {
      if (this.reason) throw this.reason;
    }
  }, {
    key: "subscribe",
    value: function subscribe(t) {
      if (this.reason) {
        t(this.reason);
        return;
      }
      this._listeners ? this._listeners.push(t) : this._listeners = [t];
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(t) {
      if (!this._listeners) return;
      var n = this._listeners.indexOf(t);
      n !== -1 && this._listeners.splice(n, 1);
    }
  }], [{
    key: "source",
    value: function source() {
      var t;
      return {
        token: new Ee(function (s) {
          t = s;
        }),
        cancel: t
      };
    }
  }]);
  return Ee;
}();
var En = Ee;
function bn(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function wn(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
var ue = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(ue).forEach(function (_ref10) {
  var _ref11 = _slicedToArray(_ref10, 2),
    e = _ref11[0],
    t = _ref11[1];
  ue[t] = e;
});
var Sn = ue;
function rt(e) {
  var t = new V(e),
    n = De(V.prototype.request, t);
  return a.extend(n, V.prototype, t, {
    allOwnKeys: !0
  }), a.extend(n, t, null, {
    allOwnKeys: !0
  }), n.create = function (s) {
    return rt(I(e, s));
  }, n;
}
var _ = rt(ge);
_.Axios = V;
_.CanceledError = q;
_.CancelToken = En;
_.isCancel = Ye;
_.VERSION = nt;
_.toFormData = Y;
_.AxiosError = p;
_.Cancel = _.CanceledError;
_.all = function (t) {
  return Promise.all(t);
};
_.spread = bn;
_.isAxiosError = wn;
_.mergeConfig = I;
_.AxiosHeaders = T;
_.formToJSON = function (e) {
  return Ze(a.isHTMLForm(e) ? new FormData(e) : e);
};
_.getAdapter = tt.getAdapter;
_.HttpStatusCode = Sn;
_["default"] = _;
var b = _;
var D, G, st, x, K;
var kn = /*#__PURE__*/function () {
  function kn(t, n) {
    var _this = this;
    _classCallCheck(this, kn);
    M(this, G);
    M(this, x);
    M(this, D, void 0);
    this.text = "", this.category = "all", this.elementId = t, N(this, G, st).call(this).then(function (r) {
      we(_this, D, r.data), n();
    });
  }
  _createClass(kn, [{
    key: "categories",
    get: function get() {
      return be(this, D);
    }
  }, {
    key: "randomJoke",
    value: function () {
      var _randomJoke = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var t, _t2;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(this.category === "all")) {
                _context.next = 7;
                break;
              }
              _context.next = 3;
              return b({
                method: "GET",
                url: "https://api.chucknorris.io/jokes/random"
              });
            case 3:
              t = _context.sent;
              N(this, x, K).call(this, "one", t.data);
              _context.next = 11;
              break;
            case 7:
              _context.next = 9;
              return b({
                method: "GET",
                url: "https://api.chucknorris.io/jokes/random?category=".concat(this.category)
              });
            case 9:
              _t2 = _context.sent;
              N(this, x, K).call(this, "one", _t2.data);
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function randomJoke() {
        return _randomJoke.apply(this, arguments);
      }
      return randomJoke;
    }()
  }, {
    key: "searchedJoke",
    value: function () {
      var _searchedJoke = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var t;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(this.text !== "")) {
                _context2.next = 7;
                break;
              }
              _context2.next = 3;
              return b({
                method: "GET",
                url: "https://api.chucknorris.io/jokes/search?query=".concat(this.text)
              });
            case 3:
              t = _context2.sent;
              N(this, x, K).call(this, "multi", t.data);
              _context2.next = 8;
              break;
            case 7:
              return _context2.abrupt("return", {
                status: "bad"
              });
            case 8:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function searchedJoke() {
        return _searchedJoke.apply(this, arguments);
      }
      return searchedJoke;
    }()
  }, {
    key: "prepareChuckJokeTypes",
    value: function prepareChuckJokeTypes(t) {
      var n = document.getElementById(t);
      var _iterator4 = _createForOfIteratorHelper(this.categories),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var r = _step4.value;
          n.innerHTML += "<option value=\"".concat(r, "\">").concat(r, "</option>");
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }]);
  return kn;
}();
D = new WeakMap(), G = new WeakSet(), st = function st() {
  return b({
    method: "GET",
    url: "https://api.chucknorris.io/jokes/categories"
  });
}, x = new WeakSet(), K = function K(t, n) {
  var r = document.getElementById(this.elementId);
  if (t === "one") r.innerHTML = "<div class=\"w-full chuck__card p-4 h-fit rounded-lg m-3\">\n            <div class=\"h-fit\">\n                <p>".concat(n.value, "</p>\n            </div>\n        </div>");else {
    r.innerHTML = "";
    var _iterator5 = _createForOfIteratorHelper(n.result.flat()),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var s = _step5.value;
        r.innerHTML += "<div class=\"w-full chuck__card p-4 h-fit rounded-lg m-3\">\n                <div class=\"h-fit\">\n                    <p>".concat(s.value, "</p>\n                </div>\n            </div>");
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }
};
var L = "http://localhost:3000/";
function Ln(_x) {
  return _Ln.apply(this, arguments);
}
function _Ln() {
  _Ln = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(e) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          return _context6.abrupt("return", b.post(L + "api/add", e, {
            headers: {
              Authorization: localStorage.getItem("token")
            }
          }));
        case 1:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _Ln.apply(this, arguments);
}
function On(_x2) {
  return _On.apply(this, arguments);
}
function _On() {
  _On = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(e) {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          return _context7.abrupt("return", b.post(L + "api/delete", {
            id: e
          }, {
            headers: {
              Authorization: localStorage.getItem("token")
            }
          }));
        case 1:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _On.apply(this, arguments);
}
function An(_x3, _x4, _x5) {
  return _An.apply(this, arguments);
}
function _An() {
  _An = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(e, t, n) {
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          return _context8.abrupt("return", b.post(L + "api/jokes", {
            id: e,
            type: t,
            sort: n
          }, {
            headers: {
              Authorization: localStorage.getItem("token")
            }
          }));
        case 1:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return _An.apply(this, arguments);
}
function Rn(_x6, _x7) {
  return _Rn.apply(this, arguments);
}
function _Rn() {
  _Rn = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(e, t) {
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          return _context9.abrupt("return", b.post(L + "api/update", {
            id: e,
            data: t
          }, {
            headers: {
              Authorization: localStorage.getItem("token")
            }
          }));
        case 1:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return _Rn.apply(this, arguments);
}
function Tn(_x8, _x9, _x10, _x11) {
  return _Tn.apply(this, arguments);
}
function _Tn() {
  _Tn = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(e, t, n, r) {
    var s;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return b.post(L + "user/create", {
            email: e,
            password: t
          });
        case 2:
          s = _context10.sent;
          s.data.status === "OK" ? r(s.data) : n(s.data.status);
        case 4:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return _Tn.apply(this, arguments);
}
function Ne(_x12, _x13, _x14, _x15) {
  return _Ne.apply(this, arguments);
}
function _Ne() {
  _Ne = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(e, t, n, r) {
    var s, _s;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          if (!localStorage.getItem("token")) {
            _context11.next = 13;
            break;
          }
          _context11.next = 3;
          return b.post(L + "user/login", {}, {
            headers: {
              Authorization: localStorage.getItem("token")
            }
          });
        case 3:
          s = _context11.sent;
          if (!(s.data.status === "OK")) {
            _context11.next = 9;
            break;
          }
          _context11.next = 7;
          return r(s.data);
        case 7:
          _context11.next = 11;
          break;
        case 9:
          _context11.next = 11;
          return n(s.data.status);
        case 11:
          _context11.next = 23;
          break;
        case 13:
          _context11.next = 15;
          return b.post(L + "user/login", {
            email: e,
            password: t
          });
        case 15:
          _s = _context11.sent;
          if (!(_s.data.status === "OK")) {
            _context11.next = 21;
            break;
          }
          _context11.next = 19;
          return r(_s.data);
        case 19:
          _context11.next = 23;
          break;
        case 21:
          _context11.next = 23;
          return n(_s.data.status);
        case 23:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return _Ne.apply(this, arguments);
}
function Pe(_x16, _x17) {
  return _Pe.apply(this, arguments);
}
function _Pe() {
  _Pe = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(e, t) {
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return b.post(L + "api/rating", {
            type: e,
            id: t
          }, {
            headers: {
              Authorization: localStorage.getItem("token")
            }
          });
        case 2:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return _Pe.apply(this, arguments);
}
function Bn(_x18) {
  return _Bn.apply(this, arguments);
}
function _Bn() {
  _Bn = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(e) {
    var t;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return b.post(L + "user/add_like", {
            liked_id: e
          }, {
            headers: {
              Authorization: localStorage.getItem("token")
            }
          });
        case 2:
          t = _context13.sent;
          localStorage.setItem("liked", JSON.stringify(t.data.likes));
        case 4:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return _Bn.apply(this, arguments);
}
function Ce(_x19) {
  return _Ce.apply(this, arguments);
}
function _Ce() {
  _Ce = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(e) {
    var t;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return b.post(L + "user/remove_like", {
            liked_id: e
          }, {
            headers: {
              Authorization: localStorage.getItem("token")
            }
          });
        case 2:
          t = _context14.sent;
          localStorage.setItem("liked", JSON.stringify(t.data.likes));
        case 4:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return _Ce.apply(this, arguments);
}
function ie() {
  return _ie.apply(this, arguments);
}
function _ie() {
  _ie = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
    var e;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return b.post(L + "user/liked", {}, {
            headers: {
              Authorization: localStorage.getItem("token")
            }
          });
        case 2:
          e = _context15.sent;
          localStorage.setItem("liked", JSON.stringify(e.data.likes));
        case 4:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return _ie.apply(this, arguments);
}
var C = new kn("chuck__joke__body", xn);
var j = "all",
  fe = "all",
  ot = "none";
var me = {
    opacity: [0, 1]
  },
  J = {
    opacity: [1, 0]
  },
  je = {
    height: ["3rem", "100%"]
  },
  Fe = {
    height: ["100%", "3rem"]
  };
localStorage.getItem("token") ? Ne("", "", function () {
  localStorage.removeItem("token");
}, /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          localStorage.setItem("token", e.token);
          _context3.next = 3;
          return ie();
        case 3:
          _context3.next = 5;
          return S();
        case 5:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x20) {
    return _ref12.apply(this, arguments);
  };
}()) : (document.getElementById("login_modal").style.display = "block", document.getElementById("login_modal_login").addEventListener("click", function (e) {
  Ne(document.getElementById("modal__login_login").value, document.getElementById("modal__login_password").value, function (t) {
    localStorage.removeItem("token"), document.getElementById("modal__login__error").classList.remove("hidden"), document.getElementById("modal__login__error").innerText = t;
  }, /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(t) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            localStorage.setItem("token", t.token);
            document.getElementById("modal__login__error").classList.add("hidden");
            document.getElementById("login_modal").style.display = "none";
            _context4.next = 5;
            return ie();
          case 5:
            S();
          case 6:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function (_x21) {
      return _ref13.apply(this, arguments);
    };
  }());
}), document.getElementById("login_modal_signup").addEventListener("click", function (e) {
  Tn(document.getElementById("modal__login_login").value, document.getElementById("modal__login_password").value, function (t) {
    localStorage.removeItem("token"), document.getElementById("modal__login__error").classList.remove("hidden"), document.getElementById("modal__login__error").innerText = t;
  }, /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(t) {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            localStorage.setItem("token", t.token);
            document.getElementById("modal__login__error").classList.add("hidden");
            document.getElementById("login_modal").style.display = "none";
            _context5.next = 5;
            return ie();
          case 5:
            S();
          case 6:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function (_x22) {
      return _ref14.apply(this, arguments);
    };
  }());
}));
function xn() {
  var e = document.getElementById("joke_open"),
    t = document.getElementById("joke_body"),
    n = document.getElementById("chuckNoris_open"),
    r = document.getElementById("chuck_body"),
    s = function s() {
      n.classList.add("open"), n.parentElement.animate(je, {
        duration: 500
      }), e.classList.remove("open"), r.classList.remove("hidden"), t.parentElement.animate(Fe, {
        duration: 500
      }), Promise.all(e.parentElement.getAnimations().map(function (d) {
        return d.finished;
      })).then(function () {
        t.classList.add("hidden"), e.parentElement.classList.remove("h-full"), e.parentElement.classList.add("h-fit");
      }), Promise.all(n.parentElement.getAnimations().map(function (d) {
        return d.finished;
      })).then(function () {
        n.parentElement.classList.remove("h-fit"), n.parentElement.classList.add("h-full");
      }), t.parentElement.classList.remove("h-full"), t.parentElement.classList.add("h-fit");
    },
    o = function o() {
      e.classList.add("open"), e.parentElement.animate(je, {
        duration: 500
      }), n.classList.remove("open"), t.classList.remove("hidden"), n.parentElement.animate(Fe, {
        duration: 500
      }), Promise.all(n.parentElement.getAnimations().map(function (d) {
        return d.finished;
      })).then(function () {
        r.classList.add("hidden"), n.parentElement.classList.remove("h-full"), n.parentElement.classList.add("h-fit");
      }), Promise.all(e.parentElement.getAnimations().map(function (d) {
        return d.finished;
      })).then(function () {
        e.parentElement.classList.remove("h-fit"), e.parentElement.classList.add("h-full");
      }), r.parentElement.classList.remove("h-full"), r.parentElement.classList.add("h-fit");
    };
  n.addEventListener("click", function (d) {
    r.parentElement.getAnimations().length === 0 && (console.log(r.getAnimations()), d.target.classList.contains("open") ? o() : s());
  }), e.addEventListener("click", function (d) {
    r.parentElement.getAnimations().length === 0 && (d.target.classList.contains("open") ? s() : o());
  }), C.prepareChuckJokeTypes("chuck__joke_type"), document.getElementById("chuck__joke_type").addEventListener("change", function (d) {
    C.category = d.target.value;
  }), document.getElementById("chuck__joke_get_random").addEventListener("click", function (d) {
    return C.randomJoke();
  }), document.getElementById("chuck__joke_key").addEventListener("change", function (d) {
    return C.text = d.target.value;
  }), document.getElementById("chuck__joke_get_searched").addEventListener("click", function (d) {
    return C.searchedJoke();
  });
  var i = document.getElementById("sorting_select");
  i.selectedIndex = 0, i.addEventListener("change", function (d) {
    ot = i.value, S();
  }), document.getElementById("edit_btn").addEventListener("click", function (d) {
    var _iterator6 = _createForOfIteratorHelper(document.querySelectorAll(".main__card__more")),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var y = _step6.value;
        y.classList.toggle("open");
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  });
  var l = document.getElementById("create_modal");
  document.getElementById("create_btn").addEventListener("click", function (d) {
    l.classList.remove("hidden"), l.animate(me, {
      duration: 300
    });
  });
  var _iterator7 = _createForOfIteratorHelper(l.querySelectorAll(".modal__close")),
    _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var d = _step7.value;
      d.addEventListener("click", function (y) {
        l.animate(J, {
          duration: 300
        }), Promise.all(l.getAnimations().map(function (w) {
          return w.finished;
        })).then(function () {
          return l.classList.add("hidden");
        });
      });
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  document.getElementById("create_modal_save").addEventListener("click", function (d) {
    /\S+\s+\(\S+@\S+\.\S+\)/g.test(document.getElementById("modal__joke_author").value) ? (In(), l.animate(J, {
      duration: 300
    }), Promise.all(l.getAnimations().map(function (y) {
      return y.finished;
    })).then(function () {
      return l.classList.add("hidden");
    })) : alert("Invalid Author. Please type author like 'Author (Email)'");
  });
  var u = document.getElementById("detail_modal");
  u.querySelector(".modal__close").addEventListener("click", function (d) {
    u.animate(J, {
      duration: 300
    }), Promise.all(u.getAnimations().map(function (y) {
      return y.finished;
    })).then(function () {
      return u.classList.add("hidden");
    });
  });
  var m = document.getElementById("like_btn"),
    c = function c() {
      m.classList.contains("selected") ? (fe = "all", S(), m.classList.remove("selected")) : (m.classList.add("selected"), JSON.parse(localStorage.getItem("liked")) !== null ? (fe = JSON.parse(localStorage.getItem("liked")), S()) : document.getElementById("card_container").innerHTML = '<img alt="loading" class="w-full h-full" src="public/loading.gif">');
    };
  m.addEventListener("click", c), m.querySelector(".btn__svg").addEventListener("click", c);
  var h = document.getElementById("light_btn"),
    g = document.getElementById("dark_btn"),
    E = function E(d) {
      h.classList.contains("selected") ? (j = "all", S()) : (g.classList.remove("selected"), j = "light", S());
    },
    f = function f(d) {
      g.classList.contains("selected") ? (j = "all", S()) : (j = "dark", h.classList.remove("selected"), S());
    };
  h.addEventListener("click", E), g.addEventListener("click", f), h.querySelector(".btn__svg").addEventListener("click", E), g.querySelector(".btn__svg").addEventListener("click", f);
  var _iterator8 = _createForOfIteratorHelper(document.querySelectorAll(".nav__button.toggle")),
    _step8;
  try {
    var _loop = function _loop() {
      var d = _step8.value;
      d.addEventListener("click", function (y) {
        return d.classList.toggle("selected");
      }), d.querySelector(".btn__svg").addEventListener("click", function (y) {
        return d.classList.toggle("selected");
      });
    };
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
  document.getElementById("create_detail_save").addEventListener("click", function (d) {
    if (/\S+\s+\(\S+@\S+\.\S+\)/g.test(document.getElementById("detail__joke_author").value)) {
      var y = {
        name: document.getElementById("detail__joke_name").value,
        author: document.getElementById("detail__joke_author").value,
        text: document.getElementById("detail__joke_text").value,
        type: document.getElementById("detail__joke_type").value
      };
      Rn(document.getElementById("detail__id").value, y), u.animate(J, {
        duration: 300
      }), Promise.all(u.getAnimations().map(function (w) {
        return w.finished;
      })).then(function () {
        return u.classList.add("hidden");
      }), S();
    } else alert("Invalid Author. Please type author like 'Author (Email)'");
  });
}
function S() {
  return _S.apply(this, arguments);
}
function _S() {
  _S = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
    var e,
      t,
      n,
      r,
      s,
      o,
      i,
      _iterator10,
      _step10,
      _loop2,
      _args17 = arguments;
    return _regeneratorRuntime().wrap(function _callee16$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          e = _args17.length > 0 && _args17[0] !== undefined ? _args17[0] : fe;
          t = localStorage.getItem("liked");
          n = document.getElementById("card_container");
          document.getElementById("edit_btn").classList.remove("selected"), n.innerHTML = '<img alt="loading" class="w-full h-full" src="public/loading.gif">';
          _context17.prev = 4;
          _context17.next = 7;
          return An(e, j, ot);
        case 7:
          r = _context17.sent;
          _context17.next = 14;
          break;
        case 10:
          _context17.prev = 10;
          _context17.t0 = _context17["catch"](4);
          n.innerHTML = "<p>".concat(_context17.t0.message, " occurred, try later</p>");
          return _context17.abrupt("return");
        case 14:
          if (!(r.status !== 200)) {
            _context17.next = 17;
            break;
          }
          n.innerHTML = "<p>Error occurred, try later</p>";
          return _context17.abrupt("return");
        case 17:
          n.innerHTML = "";
          s = r.data;
          o = document.getElementById("detail_modal"), i = function i(l, u, m) {
            document.getElementById("detail__joke_name").value = m.name, document.getElementById("detail__joke_author").value = m.author, document.getElementById("detail__joke_text").value = m.body, document.getElementById("detail__joke_type").value = m.type, document.getElementById("detail__id").value = m.id;
            var _iterator9 = _createForOfIteratorHelper(o.querySelectorAll(".modal__input")),
              _step9;
            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var c = _step9.value;
                c.disabled = u;
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
            o.querySelector(".modal__inner__header__title").innerText = l, o.animate(me, {
              duration: 300
            }), o.classList.remove("hidden");
          };
          _iterator10 = _createForOfIteratorHelper(s);
          _context17.prev = 21;
          _loop2 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop2() {
            var l, u;
            return _regeneratorRuntime().wrap(function _loop2$(_context16) {
              while (1) switch (_context16.prev = _context16.next) {
                case 0:
                  l = _step10.value;
                  u = document.createElement("div");
                  u.innerHTML = "<div class=\"w-56 main__card h-fit p-4 rounded-lg m-3\">\n                <div class=\"main__card__body flex  items-stretch justify-stretch flex-col\">\n                    <header class=\"h-1/5 mb-4 \">\n                        <h4 class=\"font-medium truncate  mb-0.5\">".concat(l.author, "</h4>\n                        <h3 class=\"h-4/6 overflow-hidden text-ellipsis\">").concat(l.name, "</h3>\n                        <p>likes: ").concat(l.likes, "</p>\n                    </header>\n                    <div class=\"h-3/5 text-ellipsis overflow-hidden\">\n                        <p>").concat(l.body, "</p>\n                    </div>\n                    <div class=\"h-1/5 flex mt-3\">\n                        <button class=\"flex items-center px-3 justify-start basis-4/5 main__card__button mr-2 rounded-lg main__card__detail_btn\">\n                            Detail\n                        </button>\n                        <button class=\"basis-1/5 main__card__button rounded-lg flex justify-center items-center like_btn\">\n                            <svg fill=\"#000000\" height=\"90%\" width=\"90%\"\n                                 xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                                 viewBox=\"0 0 471.701 471.701\" xml:space=\"preserve\">\n                        <g>\n                            <path d=\"M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z\"/>\n                        </g>\n                                <rect class=\"btn__svg\" x=\"0\" y=\"0\" width=\"10\" height=\"10\"  />\n                        </svg>\n                        </button>\n                    </div>\n                </div>\n                <div class=\"mt-2 justify-center rounded-b-lg  main__card__more h-8\">\n                    <button class=\"flex items-center px-3 justify-start basis-3/6 main__card__button mr-2 rounded-lg main__card__more__delete\">\n                        Delete\n                    </button>\n                    <button class=\"basis-3/6 main__card__button rounded-lg flex justify-center items-center main__card__more__edit\">\n                        Edit\n                    </button>\n                </div>\n            </div>"), u = u.firstElementChild, u.querySelector(".main__card__detail_btn").addEventListener("click", function (m) {
                    i("Detail", !0, l), o.querySelector(".detail_edit").classList.remove("flex"), o.querySelector(".detail_edit").classList.add("hidden");
                  }), u.querySelector(".main__card__more__edit").addEventListener("click", function (m) {
                    i("Edit", !1, l), o.querySelector(".detail_edit").classList.remove("hidden"), o.querySelector(".detail_edit").classList.add("flex"), o.classList.remove("hidden"), o.animate(me, {
                      duration: 300
                    });
                  }), u.querySelector(".main__card__more__delete").addEventListener("click", function (m) {
                    On(l.id), Ce(l.id), S();
                  }), t.includes(l.id) && u.querySelector(".like_btn").classList.add("liked"), u.querySelector(".like_btn").addEventListener("click", function (m) {
                    u.querySelector(".like_btn").classList.contains("liked") ? (u.querySelector(".like_btn").classList.remove("liked"), Ce(l.id), Pe("down", l.id)) : (u.querySelector(".like_btn").classList.add("liked"), Bn(l.id), Pe("up", l.id));
                  }), n.appendChild(u);
                case 3:
                case "end":
                  return _context16.stop();
              }
            }, _loop2);
          });
          _iterator10.s();
        case 24:
          if ((_step10 = _iterator10.n()).done) {
            _context17.next = 28;
            break;
          }
          return _context17.delegateYield(_loop2(), "t1", 26);
        case 26:
          _context17.next = 24;
          break;
        case 28:
          _context17.next = 33;
          break;
        case 30:
          _context17.prev = 30;
          _context17.t2 = _context17["catch"](21);
          _iterator10.e(_context17.t2);
        case 33:
          _context17.prev = 33;
          _iterator10.f();
          return _context17.finish(33);
        case 36:
        case "end":
          return _context17.stop();
      }
    }, _callee16, null, [[4, 10], [21, 30, 33, 36]]);
  }));
  return _S.apply(this, arguments);
}
function In() {
  var e = {
    author: document.getElementById("modal__joke_author").value,
    name: document.getElementById("modal__joke_name").value,
    body: document.getElementById("modal__joke_text").value,
    type: document.getElementById("modal__joke_type").value
  };
  console.log(Ln(e)), S();
}