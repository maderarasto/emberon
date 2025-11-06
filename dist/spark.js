/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/html-tags/html-tags.json":
/*!***********************************************!*\
  !*** ./node_modules/html-tags/html-tags.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","script","search","section","select","selectedcontent","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"]');

/***/ }),

/***/ "./src/component.js":
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils */ "./src/utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Component = /*#__PURE__*/function () {
  /**
   * Initializes a component with props and empty state.
   *
   * @param {SparkJS.Props} props
   */
  function Component(props) {
    _classCallCheck(this, Component);
    this.props = props;
    this.state = _utils__WEBPACK_IMPORTED_MODULE_0__.EmptyObject;
  }

  /**
   * Sets a new state.
   *
   * @param {Record<string, any>} state
   */
  return _createClass(Component, [{
    key: "setState",
    value: function setState(state) {
      this.state = state;
      // TODO: call hook onStateChanged
    }

    /**
     * Renders component as JSX structure.
     *
     * @returns {SparkJS.RenderResult}
     */
  }, {
    key: "render",
    value: function render() {
      return null;
    }

    /**
     * A hook is triggered when component is mounted into DOM.
     */
  }, {
    key: "mounted",
    value: (function () {
      var _mounted = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              return _context.a(2);
          }
        }, _callee);
      }));
      function mounted() {
        return _mounted.apply(this, arguments);
      }
      return mounted;
    }()
    /**
     * a hook is triggered when application is resumed into component.
     */
    )
  }, {
    key: "resumed",
    value: (function () {
      var _resumed = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              return _context2.a(2);
          }
        }, _callee2);
      }));
      function resumed() {
        return _resumed.apply(this, arguments);
      }
      return resumed;
    }()
    /**
     * A hook is triggered when component is re-rendered.
     */
    )
  }, {
    key: "updated",
    value: (function () {
      var _updated = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              return _context3.a(2);
          }
        }, _callee3);
      }));
      function updated() {
        return _updated.apply(this, arguments);
      }
      return updated;
    }()
    /**
     * A hook is triggered before component is destroyed.
     */
    )
  }, {
    key: "destroyed",
    value: (function () {
      var _destroyed = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              return _context4.a(2);
          }
        }, _callee4);
      }));
      function destroyed() {
        return _destroyed.apply(this, arguments);
      }
      return destroyed;
    }())
  }]);
}();


/***/ }),

/***/ "./src/spark.js":
/*!**********************!*\
  !*** ./src/spark.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Spark: () => (/* binding */ Spark)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/component.js");
/* harmony import */ var _virtual_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/virtual-node */ "./src/virtual-node.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var Spark = /*#__PURE__*/function () {
  function Spark() {
    _classCallCheck(this, Spark);
    /** @type {HTMLElement} */
    this._rootEl = null;
    /** @type {SparkJS.RenderCallback} */
    this._rootFunc = null;
    /** @type {} */
    this._virtualTree = null;
  }

  /**
   * Sets a function that return JSX structure.
   *
   * @param {() => SparkJS.RenderResult} rootFn
   */
  return _createClass(Spark, [{
    key: "setRootFunction",
    value: function setRootFunction(rootFn) {
      this._rootFunc = rootFn;
    }

    /**
     * Mounts application to HTML element and trigger render.
     * It throws error if root element isn't found.
     *
     * @param {HTMLElement|string} mountEl
     */
  }, {
    key: "mount",
    value: function mount(mountEl) {
      if (typeof mountEl === 'string') {
        this._rootEl = document.querySelector(mountEl);
      } else {
        this._rootEl = mountEl;
      }
      if (!(this._rootEl instanceof HTMLElement)) {
        throw new Error('Could not find a root element');
      }
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      if (!this._rootEl) {
        throw new Error('Could not find a root element');
      }
      var renderResult = this._rootFunc();
      var newVirtualTree = (0,_virtual_node__WEBPACK_IMPORTED_MODULE_1__.buildVirtualTreeRoot)(renderResult);
      console.log(newVirtualTree);
      // TODO: reconcile between current and new virtual tree
      // TODO: resolve effects in both trees
      // TODO: handle deletion effects
      // TODO: store new virtual tree as current virtual tree
      // TODO: handle placement and update effects
      // TODO: clean all effects
    }

    /**
     *
     * @param {Component} component
     */
  }, {
    key: "onStateChanged",
    value: function onStateChanged(component) {}
  }]);
}();

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyObject: () => (/* binding */ EmptyObject)
/* harmony export */ });
var EmptyObject = {};

/***/ }),

/***/ "./src/virtual-node.js":
/*!*****************************!*\
  !*** ./src/virtual-node.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildVirtualTree: () => (/* binding */ buildVirtualTree),
/* harmony export */   buildVirtualTreeRoot: () => (/* binding */ buildVirtualTreeRoot),
/* harmony export */   "default": () => (/* binding */ VirtualNode)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils */ "./src/utils.js");
/* harmony import */ var html_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-tags */ "./node_modules/html-tags/html-tags.json");
var _excluded = ["key"];
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var VirtualNode = /*#__PURE__*/function () {
  /**
   * Initializes virtual node with type, tag and properties.
   *
   * @param {SparkJS.NodeType} type
   * @param {SparkJS.NodeTag} tag
   * @param {SparkJS.NodeProps} props
   */
  function VirtualNode(type, tag) {
    var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    _classCallCheck(this, VirtualNode);
    var _ref = props !== null && props !== void 0 ? props : {},
      key = _ref.key,
      otherProps = _objectWithoutProperties(_ref, _excluded);

    /** @type {string|undefined} */
    this.key = key;
    this.type = type;
    this.tag = tag;

    // Reference properties
    /** @type {SparkJS.Props} */
    this.oldProps = _utils__WEBPACK_IMPORTED_MODULE_0__.EmptyObject;
    /** @type {SparkJS.Props} */
    this.pendingProps = props !== null && props !== void 0 ? props : _utils__WEBPACK_IMPORTED_MODULE_0__.EmptyObject;
    // /** @type {Record<string, any>} */
    // this.state = EmptyObject; TODO: add support for states
    /** @type {Component|null} */
    this.instance = null;
    /** @type {HTMLElement|null} */
    this.elementRef = null;
    /** @type {Record<string, SparkJS.EventListener[]>} */
    this.listeners = _utils__WEBPACK_IMPORTED_MODULE_0__.EmptyObject;

    // Indicator properties
    /** @type {SparkJS.EffectType} */
    this.effect = '';
    /** @type {boolean} */
    this.mounted = false;
    /** @type {boolean} */
    this.pendingUpdate = false;
    /** @type {boolean} */
    // this.stateChanged = false; TODO: add support for states

    // Node properties
    /** @type {VirtualNode|null} */
    this.parent = null;
    /** @type {VirtualNode[]} */
    this.children = [];
  }

  /**
   * Checks if virtual node is of certain type.
   *
   * @param {SparkJS.NodeType} type
   */
  return _createClass(VirtualNode, [{
    key: "isType",
    value: function isType(type) {
      return this.type === type;
    }

    /**
     * Checks if all children were mounted into DOM.
     *
     * @returns {boolean}
     */
  }, {
    key: "allChildrenMounted",
    value: function allChildrenMounted() {
      return this.children.reduce(function (count, childNode) {
        var result = false;
        if (childNode.isType('Element') || childNode.isType('Text')) {
          result = childNode.elementRef !== null;
        } else if (childNode.isType('Component')) {
          result = childNode.mounted;
        }
        return count + (result && childNode.allChildrenMounted() ? 1 : 0);
      }, 0) === this.children.length;
    }

    /**
     * Checks if all children were updated in DOM.
     *
     * @returns {boolean}
     */
  }, {
    key: "allChildrenUpdated",
    value: function allChildrenUpdated() {
      return this.children.reduce(function (count, childNode) {
        return count + (!childNode.pendingUpdate && childNode.allChildrenUpdated() ? 1 : 0);
      }, 0) === this.children.length;
    }

    /**
     * Adds a listener to HTML element and store it's reference into listeners of virtual node.
     *
     * @param {string} type
     * @param {SparkJS.EventListener} listener
     */
  }, {
    key: "addEventListener",
    value: function addEventListener(type, listener) {
      if (!this.elementRef) {
        return;
      }
      if (!this.listeners[type]) {
        this.listeners[type] = [];
      }
      this.elementRef.addEventListener(type, listener);
      this.listeners[type].push(listener);
    }

    /**
     * Removes an event listener from HTML element and from listeners of virtual node.
     *
     * @param {string} type
     * @param {SparkJS.EventListener} listener
     */
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, listener) {
      var _this$listeners$type;
      /** @type {EventListener[]} */
      var listenersWithType = (_this$listeners$type = this.listeners[type]) !== null && _this$listeners$type !== void 0 ? _this$listeners$type : [];
      if (listenersWithType.length === 0) {
        return;
      }
      var foundListenerIndex = -1;
      var foundListener = listenersWithType.find(function (anotherListener, index) {
        if (anotherListener === listener) {
          foundListenerIndex = index;
          return true;
        }
        return false;
      });
      if (!foundListener) {
        throw new Error("An event listener for ".concat(type, " on node ").concat(this.tag, " not found. Cause: event listener probably wasn't bound in constructor."));
      }
      this.elementRef.removeEventListener(type, listener);
      listenersWithType.splice(foundListenerIndex, 1);
    }

    /**
     * Cleans all listeners from HTML element and from listeners of virtual node.
     */
  }, {
    key: "cleanListeners",
    value: function cleanListeners() {
      var _this = this;
      var _loop = function _loop() {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            type = _Object$entries$_i[0],
            listeners = _Object$entries$_i[1];
          if (!_this.elementRef) {
            return {
              v: void 0
            };
          }
          listeners.forEach(function (listener) {
            _this.elementRef.removeEventListener(type, listener);
          });
        },
        _ret;
      for (var _i = 0, _Object$entries = Object.entries(this.listeners); _i < _Object$entries.length; _i++) {
        _ret = _loop();
        if (_ret) return _ret.v;
      }
      this.listeners = _utils__WEBPACK_IMPORTED_MODULE_0__.EmptyObject;
    }

    /**
     * Creates an instance of component and copy it's state into virtual ode's state.
     */
  }, {
    key: "createComponent",
    value: function createComponent() {
      this.instance = new this.tag(this.pendingProps);
      this.state = this.instance.state;
    }

    /**
     * Appends a child node into current node.
     *
     * @param {VirtualNode} node
     */
  }, {
    key: "appendChild",
    value: function appendChild(node) {
      node.parent = this;
      this.children.push(node);
    }

    /**
     * Replaces a child node in current node with a new node.
     *
     * @param {VirtualNode} newNode
     * @param {VirtualNode} oldNode
     */
  }, {
    key: "replaceChild",
    value: function replaceChild(newNode, oldNode) {
      var indexOf = this.children.indexOf(oldNode);
      if (indexOf >= 0) {
        newNode.parent = this;
        this.children[indexOf].parent = null;
        this.children[indexOf] = newNode;
      }
    }

    /**
     * Removes a child node from current node.
     *
     * @param {VirtualNode} node
     */
  }, {
    key: "removeChild",
    value: function removeChild(node) {
      var indexOf = this.children.indexOf(node);
      if (indexOf >= 0) {
        node.parent = null;
        this.children.splice(indexOf, 1);
      }
    }

    /**
     * Removes all children from current node.
     */
  }, {
    key: "empty",
    value: function empty() {
      this.children.forEach(function (node) {
        node.parent = null;
      });
      this.children = [];
    }

    /**
     * Copy all data from source virtual node.
     *
     * @param {VirtualNode} sourceNode
     */
  }, {
    key: "copyFrom",
    value: function copyFrom(sourceNode) {
      this.key = sourceNode.key;
      this.type = sourceNode.type;
      this.tag = sourceNode.tag;

      // Reference properties
      this.oldProps = sourceNode.oldProps;
      this.pendingProps = sourceNode.pendingProps;
      // this.state = sourceNode.state; TODO: add support for states
      this.instance = sourceNode.instance;
      this.elementRef = sourceNode.elementRef;
      this.listeners = sourceNode.listeners;

      // Indicator properties
      this.effect = sourceNode.effect;
      this.mounted = sourceNode.mounted;
      this.pendingUpdate = sourceNode.pendingUpdate;
      // this.stateChanged = sourceNode.stateChanged; TODO: add support for states

      // Node properties
      this.parent = sourceNode.parent;
      this.children = sourceNode.children;
    }

    /**
     * Create another instance with same properties.
     *
     * @returns {VirtualNode}
     */
  }, {
    key: "clone",
    value: function clone() {
      var cloned = new VirtualNode(this.type, this.tag, _objectSpread({
        key: this.key
      }, this.pendingProps));

      // Reference properties
      cloned.oldProps = this.oldProps;
      cloned.pendingProps = this.pendingProps;
      // cloned.state = this.state; TODO: add support for states
      cloned.instance = this.instance;
      cloned.elementRef = this.elementRef;
      cloned.listeners = this.listeners;

      // Indicator properties
      cloned.effect = this.effect;
      cloned.mounted = this.mounted;
      cloned.pendingUpdate = this.pendingUpdate;
      // cloned.stateChanged = this.stateChanged; TODO: add support for states

      // Node properties
      cloned.parent = this.parent;
      cloned.children = this.children;
      return cloned;
    }
  }]);
}();
/**
 *
 * @param {JSX[]} jsxArray
 */

function checkKeysInJsxArray(jsxArray) {
  var usedKeys = [];
  return jsxArray.every(function (item) {
    if (!item.attributes || !item.attributes.key || usedKeys.includes(item.attributes.key)) {
      return false;
    }
    usedKeys.push(item.attributes.key);
    return true;
  });
}

/**
 *
 * @param {SparkJS.RenderResult} renderResult
 * @param {VirtualNode|null} parent
 */
function buildVirtualTree(renderResult) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var _ref2 = renderResult !== null && renderResult !== void 0 ? renderResult : {},
    _ref2$elementName = _ref2.elementName,
    elementName = _ref2$elementName === void 0 ? renderResult !== null && renderResult !== void 0 ? renderResult : '' : _ref2$elementName,
    _ref2$attributes = _ref2.attributes,
    attributes = _ref2$attributes === void 0 ? {} : _ref2$attributes,
    _ref2$children = _ref2.children,
    children = _ref2$children === void 0 ? [] : _ref2$children;

  /** @type {VirtualNode} */
  var node;
  if (typeof elementName === 'function') {
    node = new VirtualNode('Component', elementName, _objectSpread({
      children: children
    }, attributes));
    children = [];
  } else if (_toConsumableArray(html_tags__WEBPACK_IMPORTED_MODULE_1__).includes(elementName)) {
    // TODO: add support for SVG elements
    node = new VirtualNode('Element', elementName, attributes);
  } else if (_typeof(elementName) === 'object') {
    throw new Error('Object cannot be rendered as JSX node!');
  } else {
    node = new VirtualNode('Text', elementName);
  }
  if (parent) {
    parent.appendChild(node);
  }
  if (!children) {
    children = [];
  }
  children.forEach(function (childNode) {
    if (!childNode) {
      return;
    }
    if (Array.isArray(childNode)) {
      if (!checkKeysInJsxArray(childNode)) {
        throw new Error("Dynamically mapped nodes in loop must have unique keys specified in \"key\" prop.");
      }
      childNode.forEach(function (anotherChildNode) {
        buildVirtualTree(anotherChildNode, node);
      });
    } else {
      buildVirtualTree(childNode, node);
    }
  });
  return node;
}

/**
 * Build virtual tree from root node.
 *
 * @param {SparkJS.RenderResult} renderResult
 */
function buildVirtualTreeRoot(renderResult) {
  var rootNode = new VirtualNode('Root', '');
  var childNode = buildVirtualTree(renderResult);
  if (childNode) {
    rootNode.appendChild(childNode);
  }
  return rootNode;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createApp: () => (/* binding */ createApp)
/* harmony export */ });
/* harmony import */ var _spark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/spark */ "./src/spark.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }


/**
 *
 * @param {SparkJS.AppConfig} config
 */
function createApp(config) {
  if (_typeof(config) !== "object") {
    throw new Error('Missing necessary options defined in given config.');
  }
  window.$app = new _spark__WEBPACK_IMPORTED_MODULE_0__.Spark();
  window.$app.setRootFunction(config.render);
  document.addEventListener('DOMContentLoaded', function () {
    $app.mount(config.mountEl);
  });
}
createApp({
  mountEl: '#app',
  render: function render() {
    return {
      elementName: "div",
      attributes: {},
      children: ["App"]
    };
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLEdBQUcsSUFBSXJHLHlDQUFLLENBQUMsQ0FBQztFQUN6Qm9HLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDakcsZUFBZSxDQUFDK0YsTUFBTSxDQUFDdEgsTUFBTSxDQUFDO0VBRTFDMkIsUUFBUSxDQUFDbUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtJQUNsRDBELElBQUksQ0FBQy9GLEtBQUssQ0FBQzZGLE1BQU0sQ0FBQzVGLE9BQU8sQ0FBQztFQUM1QixDQUFDLENBQUM7QUFDSjtBQUVBMkYsU0FBUyxDQUFDO0VBQ1IzRixPQUFPLEVBQUUsTUFBTTtFQUNmMUIsTUFBTSxXQUFOQSxNQUFNQSxDQUFBLEVBQUc7SUFDUDtNQUFBNkcsV0FBQTtNQUFBTCxVQUFBO01BQUFsRCxRQUFBO0lBQUE7RUFDRjtBQUNGLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3Bhcmtqcy8uL3NyYy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vc3Bhcmtqcy8uL3NyYy9zcGFyay5qcyIsIndlYnBhY2s6Ly9zcGFya2pzLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL3NwYXJranMvLi9zcmMvdmlydHVhbC1ub2RlLmpzIiwid2VicGFjazovL3NwYXJranMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3Bhcmtqcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3Bhcmtqcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NwYXJranMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zcGFya2pzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RW1wdHlPYmplY3R9IGZyb20gXCJAL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemVzIGEgY29tcG9uZW50IHdpdGggcHJvcHMgYW5kIGVtcHR5IHN0YXRlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTcGFya0pTLlByb3BzfSBwcm9wc1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICB0aGlzLnN0YXRlID0gRW1wdHlPYmplY3RcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgYSBuZXcgc3RhdGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIGFueT59IHN0YXRlXHJcbiAgICovXHJcbiAgc2V0U3RhdGUoc3RhdGUpIHtcclxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgIC8vIFRPRE86IGNhbGwgaG9vayBvblN0YXRlQ2hhbmdlZFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVuZGVycyBjb21wb25lbnQgYXMgSlNYIHN0cnVjdHVyZS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtTcGFya0pTLlJlbmRlclJlc3VsdH1cclxuICAgKi9cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgaG9vayBpcyB0cmlnZ2VyZWQgd2hlbiBjb21wb25lbnQgaXMgbW91bnRlZCBpbnRvIERPTS5cclxuICAgKi9cclxuICBhc3luYyBtb3VudGVkKCkge31cclxuXHJcbiAgLyoqXHJcbiAgICogYSBob29rIGlzIHRyaWdnZXJlZCB3aGVuIGFwcGxpY2F0aW9uIGlzIHJlc3VtZWQgaW50byBjb21wb25lbnQuXHJcbiAgICovXHJcbiAgYXN5bmMgcmVzdW1lZCgpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgaG9vayBpcyB0cmlnZ2VyZWQgd2hlbiBjb21wb25lbnQgaXMgcmUtcmVuZGVyZWQuXHJcbiAgICovXHJcbiAgYXN5bmMgdXBkYXRlZCgpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgaG9vayBpcyB0cmlnZ2VyZWQgYmVmb3JlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuXHJcbiAgICovXHJcbiAgYXN5bmMgZGVzdHJveWVkKCkge31cclxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQnO1xyXG5pbXBvcnQge2J1aWxkVmlydHVhbFRyZWVSb290fSBmcm9tIFwiQC92aXJ0dWFsLW5vZGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTcGFyayB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqL1xyXG4gICAgdGhpcy5fcm9vdEVsID0gbnVsbDtcclxuICAgIC8qKiBAdHlwZSB7U3BhcmtKUy5SZW5kZXJDYWxsYmFja30gKi9cclxuICAgIHRoaXMuX3Jvb3RGdW5jID0gbnVsbDtcclxuICAgIC8qKiBAdHlwZSB7fSAqL1xyXG4gICAgdGhpcy5fdmlydHVhbFRyZWUgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJuIEpTWCBzdHJ1Y3R1cmUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0geygpID0+IFNwYXJrSlMuUmVuZGVyUmVzdWx0fSByb290Rm5cclxuICAgKi9cclxuICBzZXRSb290RnVuY3Rpb24ocm9vdEZuKSB7XHJcbiAgICB0aGlzLl9yb290RnVuYyA9IHJvb3RGbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1vdW50cyBhcHBsaWNhdGlvbiB0byBIVE1MIGVsZW1lbnQgYW5kIHRyaWdnZXIgcmVuZGVyLlxyXG4gICAqIEl0IHRocm93cyBlcnJvciBpZiByb290IGVsZW1lbnQgaXNuJ3QgZm91bmQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fHN0cmluZ30gbW91bnRFbFxyXG4gICAqL1xyXG4gIG1vdW50KG1vdW50RWwpIHtcclxuICAgIGlmICh0eXBlb2YgbW91bnRFbCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy5fcm9vdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihtb3VudEVsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3Jvb3RFbCA9IG1vdW50RWw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCEodGhpcy5fcm9vdEVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgYSByb290IGVsZW1lbnQnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYgKCF0aGlzLl9yb290RWwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBhIHJvb3QgZWxlbWVudCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbmRlclJlc3VsdCA9IHRoaXMuX3Jvb3RGdW5jKCk7XHJcbiAgICBjb25zdCBuZXdWaXJ0dWFsVHJlZSA9IGJ1aWxkVmlydHVhbFRyZWVSb290KHJlbmRlclJlc3VsdCk7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdWaXJ0dWFsVHJlZSk7XHJcbiAgICAvLyBUT0RPOiByZWNvbmNpbGUgYmV0d2VlbiBjdXJyZW50IGFuZCBuZXcgdmlydHVhbCB0cmVlXHJcbiAgICAvLyBUT0RPOiByZXNvbHZlIGVmZmVjdHMgaW4gYm90aCB0cmVlc1xyXG4gICAgLy8gVE9ETzogaGFuZGxlIGRlbGV0aW9uIGVmZmVjdHNcclxuICAgIC8vIFRPRE86IHN0b3JlIG5ldyB2aXJ0dWFsIHRyZWUgYXMgY3VycmVudCB2aXJ0dWFsIHRyZWVcclxuICAgIC8vIFRPRE86IGhhbmRsZSBwbGFjZW1lbnQgYW5kIHVwZGF0ZSBlZmZlY3RzXHJcbiAgICAvLyBUT0RPOiBjbGVhbiBhbGwgZWZmZWN0c1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50XHJcbiAgICovXHJcbiAgb25TdGF0ZUNoYW5nZWQoY29tcG9uZW50KSB7XHJcblxyXG4gIH1cclxufSIsImV4cG9ydCBjb25zdCBFbXB0eU9iamVjdCA9IHt9OyIsImltcG9ydCB7RW1wdHlPYmplY3R9IGZyb20gXCJAL3V0aWxzXCI7XHJcbmltcG9ydCBodG1sVGFncyBmcm9tIFwiaHRtbC10YWdzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaXJ0dWFsTm9kZSB7XHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZXMgdmlydHVhbCBub2RlIHdpdGggdHlwZSwgdGFnIGFuZCBwcm9wZXJ0aWVzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTcGFya0pTLk5vZGVUeXBlfSB0eXBlXHJcbiAgICogQHBhcmFtIHtTcGFya0pTLk5vZGVUYWd9IHRhZ1xyXG4gICAqIEBwYXJhbSB7U3BhcmtKUy5Ob2RlUHJvcHN9IHByb3BzXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IodHlwZSwgdGFnLCBwcm9wcyA9IHt9KSB7XHJcbiAgICBjb25zdCB7IGtleSwgLi4ub3RoZXJQcm9wcyB9ID0gcHJvcHMgPz8ge307XHJcblxyXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd8dW5kZWZpbmVkfSAqL1xyXG4gICAgdGhpcy5rZXkgPSBrZXk7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy50YWcgPSB0YWc7XHJcblxyXG4gICAgLy8gUmVmZXJlbmNlIHByb3BlcnRpZXNcclxuICAgIC8qKiBAdHlwZSB7U3BhcmtKUy5Qcm9wc30gKi9cclxuICAgIHRoaXMub2xkUHJvcHMgPSBFbXB0eU9iamVjdDtcclxuICAgIC8qKiBAdHlwZSB7U3BhcmtKUy5Qcm9wc30gKi9cclxuICAgIHRoaXMucGVuZGluZ1Byb3BzID0gcHJvcHMgPz8gRW1wdHlPYmplY3Q7XHJcbiAgICAvLyAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIGFueT59ICovXHJcbiAgICAvLyB0aGlzLnN0YXRlID0gRW1wdHlPYmplY3Q7IFRPRE86IGFkZCBzdXBwb3J0IGZvciBzdGF0ZXNcclxuICAgIC8qKiBAdHlwZSB7Q29tcG9uZW50fG51bGx9ICovXHJcbiAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcclxuICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR8bnVsbH0gKi9cclxuICAgIHRoaXMuZWxlbWVudFJlZiA9IG51bGw7XHJcbiAgICAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIFNwYXJrSlMuRXZlbnRMaXN0ZW5lcltdPn0gKi9cclxuICAgIHRoaXMubGlzdGVuZXJzID0gRW1wdHlPYmplY3Q7XHJcblxyXG4gICAgLy8gSW5kaWNhdG9yIHByb3BlcnRpZXNcclxuICAgIC8qKiBAdHlwZSB7U3BhcmtKUy5FZmZlY3RUeXBlfSAqL1xyXG4gICAgdGhpcy5lZmZlY3QgPSAnJztcclxuICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xyXG4gICAgdGhpcy5wZW5kaW5nVXBkYXRlID0gZmFsc2U7XHJcbiAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXHJcbiAgICAvLyB0aGlzLnN0YXRlQ2hhbmdlZCA9IGZhbHNlOyBUT0RPOiBhZGQgc3VwcG9ydCBmb3Igc3RhdGVzXHJcblxyXG4gICAgLy8gTm9kZSBwcm9wZXJ0aWVzXHJcbiAgICAvKiogQHR5cGUge1ZpcnR1YWxOb2RlfG51bGx9ICovXHJcbiAgICB0aGlzLnBhcmVudCA9IG51bGw7XHJcbiAgICAvKiogQHR5cGUge1ZpcnR1YWxOb2RlW119ICovXHJcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdmlydHVhbCBub2RlIGlzIG9mIGNlcnRhaW4gdHlwZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3BhcmtKUy5Ob2RlVHlwZX0gdHlwZVxyXG4gICAqL1xyXG4gIGlzVHlwZSh0eXBlKSB7XHJcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSB0eXBlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIGFsbCBjaGlsZHJlbiB3ZXJlIG1vdW50ZWQgaW50byBET00uXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBhbGxDaGlsZHJlbk1vdW50ZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5yZWR1Y2UoKGNvdW50LCBjaGlsZE5vZGUpID0+IHtcclxuICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xyXG5cclxuICAgICAgaWYgKGNoaWxkTm9kZS5pc1R5cGUoJ0VsZW1lbnQnKSB8fCBjaGlsZE5vZGUuaXNUeXBlKCdUZXh0JykpIHtcclxuICAgICAgICByZXN1bHQgPSBjaGlsZE5vZGUuZWxlbWVudFJlZiAhPT0gbnVsbDtcclxuICAgICAgfSBlbHNlIGlmIChjaGlsZE5vZGUuaXNUeXBlKCdDb21wb25lbnQnKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IGNoaWxkTm9kZS5tb3VudGVkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gY291bnQgKyAocmVzdWx0ICYmIGNoaWxkTm9kZS5hbGxDaGlsZHJlbk1vdW50ZWQoKSA/IDEgOiAwKTtcclxuICAgIH0sIDApID09PSB0aGlzLmNoaWxkcmVuLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiBhbGwgY2hpbGRyZW4gd2VyZSB1cGRhdGVkIGluIERPTS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAqL1xyXG4gIGFsbENoaWxkcmVuVXBkYXRlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLnJlZHVjZSgoY291bnQsIGNoaWxkTm9kZSkgPT4ge1xyXG4gICAgICByZXR1cm4gY291bnQgKyAoIWNoaWxkTm9kZS5wZW5kaW5nVXBkYXRlICYmIGNoaWxkTm9kZS5hbGxDaGlsZHJlblVwZGF0ZWQoKSA/IDEgOiAwKTtcclxuICAgIH0sIDApID09PSB0aGlzLmNoaWxkcmVuLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgYSBsaXN0ZW5lciB0byBIVE1MIGVsZW1lbnQgYW5kIHN0b3JlIGl0J3MgcmVmZXJlbmNlIGludG8gbGlzdGVuZXJzIG9mIHZpcnR1YWwgbm9kZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXHJcbiAgICogQHBhcmFtIHtTcGFya0pTLkV2ZW50TGlzdGVuZXJ9IGxpc3RlbmVyXHJcbiAgICovXHJcbiAgYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xyXG4gICAgaWYgKCF0aGlzLmVsZW1lbnRSZWYpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5saXN0ZW5lcnNbdHlwZV0pIHtcclxuICAgICAgdGhpcy5saXN0ZW5lcnNbdHlwZV0gPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVsZW1lbnRSZWYuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcik7XHJcbiAgICB0aGlzLmxpc3RlbmVyc1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYW4gZXZlbnQgbGlzdGVuZXIgZnJvbSBIVE1MIGVsZW1lbnQgYW5kIGZyb20gbGlzdGVuZXJzIG9mIHZpcnR1YWwgbm9kZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXHJcbiAgICogQHBhcmFtIHtTcGFya0pTLkV2ZW50TGlzdGVuZXJ9IGxpc3RlbmVyXHJcbiAgICovXHJcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xyXG4gICAgLyoqIEB0eXBlIHtFdmVudExpc3RlbmVyW119ICovXHJcbiAgICBjb25zdCBsaXN0ZW5lcnNXaXRoVHlwZSA9IHRoaXMubGlzdGVuZXJzW3R5cGVdID8/IFtdO1xyXG5cclxuICAgIGlmIChsaXN0ZW5lcnNXaXRoVHlwZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBmb3VuZExpc3RlbmVySW5kZXggPSAtMTtcclxuICAgIGNvbnN0IGZvdW5kTGlzdGVuZXIgPSBsaXN0ZW5lcnNXaXRoVHlwZS5maW5kKChhbm90aGVyTGlzdGVuZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChhbm90aGVyTGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XHJcbiAgICAgICAgZm91bmRMaXN0ZW5lckluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghZm91bmRMaXN0ZW5lcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIGV2ZW50IGxpc3RlbmVyIGZvciAke3R5cGV9IG9uIG5vZGUgJHt0aGlzLnRhZ30gbm90IGZvdW5kLiBDYXVzZTogZXZlbnQgbGlzdGVuZXIgcHJvYmFibHkgd2Fzbid0IGJvdW5kIGluIGNvbnN0cnVjdG9yLmApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZWxlbWVudFJlZi5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKTtcclxuICAgIGxpc3RlbmVyc1dpdGhUeXBlLnNwbGljZShmb3VuZExpc3RlbmVySW5kZXgsIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYW5zIGFsbCBsaXN0ZW5lcnMgZnJvbSBIVE1MIGVsZW1lbnQgYW5kIGZyb20gbGlzdGVuZXJzIG9mIHZpcnR1YWwgbm9kZS5cclxuICAgKi9cclxuICBjbGVhbkxpc3RlbmVycygpIHtcclxuICAgIGZvciAoY29uc3QgW3R5cGUsIGxpc3RlbmVyc10gb2YgT2JqZWN0LmVudHJpZXModGhpcy5saXN0ZW5lcnMpKSB7XHJcbiAgICAgIGlmICghdGhpcy5lbGVtZW50UmVmKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGlzdGVuZXJzID0gRW1wdHlPYmplY3Q7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIGNvbXBvbmVudCBhbmQgY29weSBpdCdzIHN0YXRlIGludG8gdmlydHVhbCBvZGUncyBzdGF0ZS5cclxuICAgKi9cclxuICBjcmVhdGVDb21wb25lbnQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IHRoaXMudGFnKHRoaXMucGVuZGluZ1Byb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmluc3RhbmNlLnN0YXRlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXBwZW5kcyBhIGNoaWxkIG5vZGUgaW50byBjdXJyZW50IG5vZGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBub2RlXHJcbiAgICovXHJcbiAgYXBwZW5kQ2hpbGQobm9kZSkge1xyXG4gICAgbm9kZS5wYXJlbnQgPSB0aGlzO1xyXG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKG5vZGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVwbGFjZXMgYSBjaGlsZCBub2RlIGluIGN1cnJlbnQgbm9kZSB3aXRoIGEgbmV3IG5vZGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBuZXdOb2RlXHJcbiAgICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gb2xkTm9kZVxyXG4gICAqL1xyXG4gIHJlcGxhY2VDaGlsZChuZXdOb2RlLCBvbGROb2RlKSB7XHJcbiAgICBjb25zdCBpbmRleE9mID0gdGhpcy5jaGlsZHJlbi5pbmRleE9mKG9sZE5vZGUpO1xyXG5cclxuICAgIGlmIChpbmRleE9mID49IDApIHtcclxuICAgICAgbmV3Tm9kZS5wYXJlbnQgPSB0aGlzO1xyXG4gICAgICB0aGlzLmNoaWxkcmVuW2luZGV4T2ZdLnBhcmVudCA9IG51bGw7XHJcbiAgICAgIHRoaXMuY2hpbGRyZW5baW5kZXhPZl0gPSBuZXdOb2RlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBhIGNoaWxkIG5vZGUgZnJvbSBjdXJyZW50IG5vZGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBub2RlXHJcbiAgICovXHJcbiAgcmVtb3ZlQ2hpbGQobm9kZSkge1xyXG4gICAgY29uc3QgaW5kZXhPZiA9IHRoaXMuY2hpbGRyZW4uaW5kZXhPZihub2RlKTtcclxuXHJcbiAgICBpZiAoaW5kZXhPZiA+PSAwKSB7XHJcbiAgICAgIG5vZGUucGFyZW50ID0gbnVsbDtcclxuICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaW5kZXhPZiwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGFsbCBjaGlsZHJlbiBmcm9tIGN1cnJlbnQgbm9kZS5cclxuICAgKi9cclxuICBlbXB0eSgpIHtcclxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICBub2RlLnBhcmVudCA9IG51bGw7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb3B5IGFsbCBkYXRhIGZyb20gc291cmNlIHZpcnR1YWwgbm9kZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IHNvdXJjZU5vZGVcclxuICAgKi9cclxuICBjb3B5RnJvbShzb3VyY2VOb2RlKSB7XHJcbiAgICB0aGlzLmtleSA9IHNvdXJjZU5vZGUua2V5O1xyXG4gICAgdGhpcy50eXBlID0gc291cmNlTm9kZS50eXBlO1xyXG4gICAgdGhpcy50YWcgPSBzb3VyY2VOb2RlLnRhZztcclxuXHJcbiAgICAvLyBSZWZlcmVuY2UgcHJvcGVydGllc1xyXG4gICAgdGhpcy5vbGRQcm9wcyA9IHNvdXJjZU5vZGUub2xkUHJvcHM7XHJcbiAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IHNvdXJjZU5vZGUucGVuZGluZ1Byb3BzO1xyXG4gICAgLy8gdGhpcy5zdGF0ZSA9IHNvdXJjZU5vZGUuc3RhdGU7IFRPRE86IGFkZCBzdXBwb3J0IGZvciBzdGF0ZXNcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBzb3VyY2VOb2RlLmluc3RhbmNlO1xyXG4gICAgdGhpcy5lbGVtZW50UmVmID0gc291cmNlTm9kZS5lbGVtZW50UmVmO1xyXG4gICAgdGhpcy5saXN0ZW5lcnMgPSBzb3VyY2VOb2RlLmxpc3RlbmVycztcclxuXHJcbiAgICAvLyBJbmRpY2F0b3IgcHJvcGVydGllc1xyXG4gICAgdGhpcy5lZmZlY3QgPSBzb3VyY2VOb2RlLmVmZmVjdDtcclxuICAgIHRoaXMubW91bnRlZCA9IHNvdXJjZU5vZGUubW91bnRlZDtcclxuICAgIHRoaXMucGVuZGluZ1VwZGF0ZSA9IHNvdXJjZU5vZGUucGVuZGluZ1VwZGF0ZTtcclxuICAgIC8vIHRoaXMuc3RhdGVDaGFuZ2VkID0gc291cmNlTm9kZS5zdGF0ZUNoYW5nZWQ7IFRPRE86IGFkZCBzdXBwb3J0IGZvciBzdGF0ZXNcclxuXHJcbiAgICAvLyBOb2RlIHByb3BlcnRpZXNcclxuICAgIHRoaXMucGFyZW50ID0gc291cmNlTm9kZS5wYXJlbnQ7XHJcbiAgICB0aGlzLmNoaWxkcmVuID0gc291cmNlTm9kZS5jaGlsZHJlbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhbm90aGVyIGluc3RhbmNlIHdpdGggc2FtZSBwcm9wZXJ0aWVzLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1ZpcnR1YWxOb2RlfVxyXG4gICAqL1xyXG4gIGNsb25lKCkge1xyXG4gICAgY29uc3QgY2xvbmVkID0gbmV3IFZpcnR1YWxOb2RlKHRoaXMudHlwZSwgdGhpcy50YWcsIHtcclxuICAgICAga2V5OiB0aGlzLmtleSxcclxuICAgICAgLi4udGhpcy5wZW5kaW5nUHJvcHNcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJlZmVyZW5jZSBwcm9wZXJ0aWVzXHJcbiAgICBjbG9uZWQub2xkUHJvcHMgPSB0aGlzLm9sZFByb3BzO1xyXG4gICAgY2xvbmVkLnBlbmRpbmdQcm9wcyA9IHRoaXMucGVuZGluZ1Byb3BzO1xyXG4gICAgLy8gY2xvbmVkLnN0YXRlID0gdGhpcy5zdGF0ZTsgVE9ETzogYWRkIHN1cHBvcnQgZm9yIHN0YXRlc1xyXG4gICAgY2xvbmVkLmluc3RhbmNlID0gdGhpcy5pbnN0YW5jZTtcclxuICAgIGNsb25lZC5lbGVtZW50UmVmID0gdGhpcy5lbGVtZW50UmVmO1xyXG4gICAgY2xvbmVkLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzO1xyXG5cclxuICAgIC8vIEluZGljYXRvciBwcm9wZXJ0aWVzXHJcbiAgICBjbG9uZWQuZWZmZWN0ID0gdGhpcy5lZmZlY3Q7XHJcbiAgICBjbG9uZWQubW91bnRlZCA9IHRoaXMubW91bnRlZDtcclxuICAgIGNsb25lZC5wZW5kaW5nVXBkYXRlID0gdGhpcy5wZW5kaW5nVXBkYXRlO1xyXG4gICAgLy8gY2xvbmVkLnN0YXRlQ2hhbmdlZCA9IHRoaXMuc3RhdGVDaGFuZ2VkOyBUT0RPOiBhZGQgc3VwcG9ydCBmb3Igc3RhdGVzXHJcblxyXG4gICAgLy8gTm9kZSBwcm9wZXJ0aWVzXHJcbiAgICBjbG9uZWQucGFyZW50ID0gdGhpcy5wYXJlbnQ7XHJcbiAgICBjbG9uZWQuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuO1xyXG5cclxuICAgIHJldHVybiBjbG9uZWQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtKU1hbXX0ganN4QXJyYXlcclxuICovXHJcbmZ1bmN0aW9uIGNoZWNrS2V5c0luSnN4QXJyYXkoanN4QXJyYXkpIHtcclxuICBjb25zdCB1c2VkS2V5cyA9IFtdO1xyXG5cclxuICByZXR1cm4ganN4QXJyYXkuZXZlcnkoKGl0ZW0pID0+IHtcclxuICAgIGlmICghaXRlbS5hdHRyaWJ1dGVzIHx8ICFpdGVtLmF0dHJpYnV0ZXMua2V5IHx8IHVzZWRLZXlzLmluY2x1ZGVzKGl0ZW0uYXR0cmlidXRlcy5rZXkpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VkS2V5cy5wdXNoKGl0ZW0uYXR0cmlidXRlcy5rZXkpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwYXJrSlMuUmVuZGVyUmVzdWx0fSByZW5kZXJSZXN1bHRcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZXxudWxsfSBwYXJlbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZFZpcnR1YWxUcmVlKHJlbmRlclJlc3VsdCwgcGFyZW50ID0gbnVsbCkge1xyXG4gIGxldCB7XHJcbiAgICBlbGVtZW50TmFtZSA9IHJlbmRlclJlc3VsdCA/PyAnJyxcclxuICAgIGF0dHJpYnV0ZXMgPSB7fSxcclxuICAgIGNoaWxkcmVuID0gW11cclxuICB9ID0gcmVuZGVyUmVzdWx0ID8/IHt9O1xyXG5cclxuICAvKiogQHR5cGUge1ZpcnR1YWxOb2RlfSAqL1xyXG4gIGxldCBub2RlO1xyXG5cclxuICBpZiAodHlwZW9mIGVsZW1lbnROYW1lID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBub2RlID0gbmV3IFZpcnR1YWxOb2RlKCdDb21wb25lbnQnLCBlbGVtZW50TmFtZSwgeyBjaGlsZHJlbiwgLi4uYXR0cmlidXRlcyB9KTtcclxuICAgIGNoaWxkcmVuID0gW107XHJcbiAgfSBlbHNlIGlmIChbLi4uaHRtbFRhZ3NdLmluY2x1ZGVzKGVsZW1lbnROYW1lKSkgeyAvLyBUT0RPOiBhZGQgc3VwcG9ydCBmb3IgU1ZHIGVsZW1lbnRzXHJcbiAgICBub2RlID0gbmV3IFZpcnR1YWxOb2RlKCdFbGVtZW50JywgZWxlbWVudE5hbWUsIGF0dHJpYnV0ZXMpO1xyXG4gIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnROYW1lID09PSAnb2JqZWN0Jykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdPYmplY3QgY2Fubm90IGJlIHJlbmRlcmVkIGFzIEpTWCBub2RlIScpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBub2RlID0gbmV3IFZpcnR1YWxOb2RlKCdUZXh0JywgZWxlbWVudE5hbWUpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHBhcmVudCkge1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG5vZGUpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFjaGlsZHJlbikge1xyXG4gICAgY2hpbGRyZW4gPSBbXTtcclxuICB9XHJcblxyXG4gIGNoaWxkcmVuLmZvckVhY2goY2hpbGROb2RlID0+IHtcclxuICAgIGlmICghY2hpbGROb2RlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZE5vZGUpKSB7XHJcbiAgICAgIGlmICghY2hlY2tLZXlzSW5Kc3hBcnJheShjaGlsZE5vZGUpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEeW5hbWljYWxseSBtYXBwZWQgbm9kZXMgaW4gbG9vcCBtdXN0IGhhdmUgdW5pcXVlIGtleXMgc3BlY2lmaWVkIGluIFwia2V5XCIgcHJvcC5gKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY2hpbGROb2RlLmZvckVhY2goYW5vdGhlckNoaWxkTm9kZSA9PiB7XHJcbiAgICAgICAgYnVpbGRWaXJ0dWFsVHJlZShhbm90aGVyQ2hpbGROb2RlLCBub2RlKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBidWlsZFZpcnR1YWxUcmVlKGNoaWxkTm9kZSwgbm9kZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBub2RlO1xyXG59XHJcblxyXG4vKipcclxuICogQnVpbGQgdmlydHVhbCB0cmVlIGZyb20gcm9vdCBub2RlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwYXJrSlMuUmVuZGVyUmVzdWx0fSByZW5kZXJSZXN1bHRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZFZpcnR1YWxUcmVlUm9vdChyZW5kZXJSZXN1bHQpIHtcclxuICBjb25zdCByb290Tm9kZSA9IG5ldyBWaXJ0dWFsTm9kZSgnUm9vdCcsICcnKTtcclxuICBjb25zdCBjaGlsZE5vZGUgPSBidWlsZFZpcnR1YWxUcmVlKHJlbmRlclJlc3VsdCk7XHJcblxyXG4gIGlmIChjaGlsZE5vZGUpIHtcclxuICAgIHJvb3ROb2RlLmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm9vdE5vZGU7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7U3Bhcmt9IGZyb20gXCJAL3NwYXJrXCI7XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtTcGFya0pTLkFwcENvbmZpZ30gY29uZmlnXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQXBwKGNvbmZpZykge1xyXG4gIGlmICh0eXBlb2YgY29uZmlnICE9PSBcIm9iamVjdFwiKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgbmVjZXNzYXJ5IG9wdGlvbnMgZGVmaW5lZCBpbiBnaXZlbiBjb25maWcuJyk7XHJcbiAgfVxyXG5cclxuICB3aW5kb3cuJGFwcCA9IG5ldyBTcGFyaygpO1xyXG4gIHdpbmRvdy4kYXBwLnNldFJvb3RGdW5jdGlvbihjb25maWcucmVuZGVyKTtcclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgICRhcHAubW91bnQoY29uZmlnLm1vdW50RWwpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5jcmVhdGVBcHAoe1xyXG4gIG1vdW50RWw6ICcjYXBwJyxcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGRpdj5BcHA8L2Rpdj5cclxuICB9XHJcbn0pIl0sIm5hbWVzIjpbImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2RlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsIl90b1ByaW1pdGl2ZSIsIl90eXBlb2YiLCJ0b1ByaW1pdGl2ZSIsIlN0cmluZyIsIk51bWJlciIsIkVtcHR5T2JqZWN0IiwiQ29tcG9uZW50IiwicHJvcHMiLCJzdGF0ZSIsInNldFN0YXRlIiwicmVuZGVyIiwiX21vdW50ZWQiLCJfY2FsbGVlIiwiX2NvbnRleHQiLCJtb3VudGVkIiwiX3Jlc3VtZWQiLCJfY2FsbGVlMiIsIl9jb250ZXh0MiIsInJlc3VtZWQiLCJfdXBkYXRlZCIsIl9jYWxsZWUzIiwiX2NvbnRleHQzIiwidXBkYXRlZCIsIl9kZXN0cm95ZWQiLCJfY2FsbGVlNCIsIl9jb250ZXh0NCIsImRlc3Ryb3llZCIsImRlZmF1bHQiLCJidWlsZFZpcnR1YWxUcmVlUm9vdCIsIlNwYXJrIiwiX3Jvb3RFbCIsIl9yb290RnVuYyIsIl92aXJ0dWFsVHJlZSIsInNldFJvb3RGdW5jdGlvbiIsInJvb3RGbiIsIm1vdW50IiwibW91bnRFbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkhUTUxFbGVtZW50IiwiRXJyb3IiLCJyZW5kZXJSZXN1bHQiLCJuZXdWaXJ0dWFsVHJlZSIsImNvbnNvbGUiLCJsb2ciLCJvblN0YXRlQ2hhbmdlZCIsImNvbXBvbmVudCIsImh0bWxUYWdzIiwiVmlydHVhbE5vZGUiLCJ0eXBlIiwidGFnIiwidW5kZWZpbmVkIiwiX3JlZiIsIm90aGVyUHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJvbGRQcm9wcyIsInBlbmRpbmdQcm9wcyIsImluc3RhbmNlIiwiZWxlbWVudFJlZiIsImxpc3RlbmVycyIsImVmZmVjdCIsInBlbmRpbmdVcGRhdGUiLCJwYXJlbnQiLCJjaGlsZHJlbiIsImlzVHlwZSIsImFsbENoaWxkcmVuTW91bnRlZCIsInJlZHVjZSIsImNvdW50IiwiY2hpbGROb2RlIiwicmVzdWx0IiwiYWxsQ2hpbGRyZW5VcGRhdGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxpc3RlbmVyIiwicHVzaCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfdGhpcyRsaXN0ZW5lcnMkdHlwZSIsImxpc3RlbmVyc1dpdGhUeXBlIiwiZm91bmRMaXN0ZW5lckluZGV4IiwiZm91bmRMaXN0ZW5lciIsImZpbmQiLCJhbm90aGVyTGlzdGVuZXIiLCJpbmRleCIsImNvbmNhdCIsInNwbGljZSIsImNsZWFuTGlzdGVuZXJzIiwiX3RoaXMiLCJfbG9vcCIsIl9PYmplY3QkZW50cmllcyRfaSIsIl9zbGljZWRUb0FycmF5IiwiX09iamVjdCRlbnRyaWVzIiwiX2kiLCJmb3JFYWNoIiwiX3JldCIsImVudHJpZXMiLCJjcmVhdGVDb21wb25lbnQiLCJhcHBlbmRDaGlsZCIsIm5vZGUiLCJyZXBsYWNlQ2hpbGQiLCJuZXdOb2RlIiwib2xkTm9kZSIsImluZGV4T2YiLCJyZW1vdmVDaGlsZCIsImVtcHR5IiwiY29weUZyb20iLCJzb3VyY2VOb2RlIiwiY2xvbmUiLCJjbG9uZWQiLCJfb2JqZWN0U3ByZWFkIiwiY2hlY2tLZXlzSW5Kc3hBcnJheSIsImpzeEFycmF5IiwidXNlZEtleXMiLCJldmVyeSIsIml0ZW0iLCJhdHRyaWJ1dGVzIiwiaW5jbHVkZXMiLCJidWlsZFZpcnR1YWxUcmVlIiwiX3JlZjIiLCJfcmVmMiRlbGVtZW50TmFtZSIsImVsZW1lbnROYW1lIiwiX3JlZjIkYXR0cmlidXRlcyIsIl9yZWYyJGNoaWxkcmVuIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiQXJyYXkiLCJpc0FycmF5IiwiYW5vdGhlckNoaWxkTm9kZSIsInJvb3ROb2RlIiwiY3JlYXRlQXBwIiwiY29uZmlnIiwid2luZG93IiwiJGFwcCJdLCJzb3VyY2VSb290IjoiIn0=