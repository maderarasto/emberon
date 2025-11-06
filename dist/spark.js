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

/***/ "./src/reconciler.js":
/*!***************************!*\
  !*** ./src/reconciler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reconcile: () => (/* binding */ reconcile)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils */ "./src/utils.js");
/* harmony import */ var _virtual_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/virtual-node */ "./src/virtual-node.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



/**
 * Build and mount whole subtree of virtual node.
 *
 * @param {VirtualNode} node
 */
function mountVirtualSubtree(node) {
  node.effect = 'Placement';
  if (node.isType('Component')) {
    node.createComponent();
    var renderResult = node.instance.render();
    renderResult = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.flattenRenderResultChildren)(renderResult);
    var subtree = (0,_virtual_node__WEBPACK_IMPORTED_MODULE_1__.buildVirtualTree)(renderResult);
    if (subtree) {
      node.appendChild(subtree);
    }
  }
  node.children.forEach(function (childNode) {
    childNode.effect = 'Placement';
    mountVirtualSubtree(childNode);
  });
}

/**
 * Copy references such element reference, props or component instance.
 *
 * @param {VirtualNode} currentNode
 * @param {VirtualNode} newNode
 * @param {boolean} recursive
 */
function copyNodeReferences(currentNode, newNode) {
  var recursive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (currentNode.tag === newNode.tag) {
    var _newNode$oldProps, _newNode$elementRef;
    newNode.oldProps = (_newNode$oldProps = newNode.oldProps) !== null && _newNode$oldProps !== void 0 ? _newNode$oldProps : _utils__WEBPACK_IMPORTED_MODULE_0__.EmptyObject;
    newNode.elementRef = (_newNode$elementRef = newNode.elementRef) !== null && _newNode$elementRef !== void 0 ? _newNode$elementRef : null;
    if (newNode.isType('Component')) {
      var _newNode$pendingProps;
      newNode.instance = currentNode.instance;
      newNode.instance.props = (_newNode$pendingProps = newNode.pendingProps) !== null && _newNode$pendingProps !== void 0 ? _newNode$pendingProps : _utils__WEBPACK_IMPORTED_MODULE_0__.EmptyObject;
      // TODO: copy state and indicator if state changed
    }
  }
  if (recursive) {
    newNode.children.forEach(function (childNode, index) {
      copyNodeReferences(currentNode.children[index], childNode, recursive);
    });
  }
}

/**
 * Checks if pending props are different from old props.
 * It's shallow comparison so object-like props are compared through reference.
 *
 * @param {SparkJS.Props} oldProps
 * @param {SparkJS.Props} pendingProps
 */
function compareProps(oldProps, pendingProps) {
  if (_typeof(oldProps) !== 'object' || _typeof(pendingProps) !== 'object') {
    return false;
  }
  if (Object.keys(oldProps).length !== Object.keys(pendingProps).length) {
    return false;
  }
  return Object.entries(pendingProps).every(function (_ref, index) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    return value === oldProps[key];
  });
}

/**
 * Checks if virtual node should be updated.
 * Virtual node should update if node's props are changed.
 *
 * @param {VirtualNode} node
 * @returns {boolean}
 */
function shouldUpdateNode(node) {
  return !compareProps(node.oldProps, node.pendingProps);
}

/**
 * Updates virtual node and if it is component then try to get new render result.
 *
 * @param {VirtualNode} node
 */
function updateNode(node) {
  node.effect = 'Update';
  node.pendingUpdate = true;
  if (!node.isType('Component')) {
    return;
  }
  var renderResult = node.instance.render();
  renderResult = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.flattenRenderResultChildren)(renderResult);
  var subtree = (0,_virtual_node__WEBPACK_IMPORTED_MODULE_1__.buildVirtualTree)(renderResult);
  if (subtree) {
    node.empty();
    node.appendChild(subtree);
  }
}

/**
 * Reuse current virtual node with children of new virtual node.
 *
 * @param {VirtualNode} currentNode
 * @param {VirtualNode} newNode
 */
function reuseNode(currentNode, newNode) {
  var clonedCurrentNode = currentNode.clone();
  if (newNode.isType('Component')) {
    var renderResult = newNode.instance.render();
    renderResult = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.flattenRenderResultChildren)(renderResult);
    var subtree = (0,_virtual_node__WEBPACK_IMPORTED_MODULE_1__.buildVirtualTree)(renderResult);
    if (subtree) {
      newNode.empty();
      newNode.appendChild(subtree);
    }
  }
  clonedCurrentNode.parent = newNode.parent;
  clonedCurrentNode.children = newNode.children;
  newNode.copyFrom(clonedCurrentNode);
}

/**
 * Finds a virtual node based on it's defined key.
 *
 * @param {VirtualNode} node
 * @param {string} key
 */
function findNodeWithKey(node, key) {
  var _iterator = _createForOfIteratorHelper(node.children),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var child = _step.value;
      if (child.key === key) {
        return child;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return null;
}

/**
 * Finds a matching child in current node based on position or key.
 *
 * @param {VirtualNode} currentNode
 * @param {VirtualNode} newChildNode
 * @param {number} position
 */
function findMatchingChildNode(currentNode, newChildNode, position) {
  /** @type {VirtualNode} */
  var foundNode = null;
  if (!currentNode) {
    return null;
  }
  if (newChildNode.key) {
    foundNode = findNodeWithKey(currentNode, newChildNode.key);
  }
  if (foundNode) {
    return foundNode;
  }
  if (currentNode.children.length <= position) {
    return null;
  }
  return currentNode.children[position];
}

/**
 * Compares nodes at the same position in two different trees and marks effects
 * that needs to be later processed.
 *
 * Possible effects:
 * - Placement (marked for placing as new DOM element)
 * - Update (marked for updating props of DOM element)
 * - Deletion (marked for removing DOM element)
 *
 * @param {VirtualNode} currentNode
 * @param {VirtualNode} newNode
 */
function reconcile(currentNode, newNode) {
  if (currentNode && currentNode.tag !== newNode.tag) {
    currentNode.effect = 'Deletion';
    mountVirtualSubtree(newNode);
    return;
  }
  if (!currentNode) {
    mountVirtualSubtree(newNode);
    return;
  } else if (!newNode.isType('Root')) {
    copyNodeReferences(currentNode, newNode);
    if (shouldUpdateNode(newNode)) {
      updateNode(newNode);
    } else {
      reuseNode(currentNode, newNode);
    }
  }
  var processedChildren = [];
  newNode.children.forEach(function (childNode, index) {
    var matchingChild = findMatchingChildNode(currentNode, childNode, index);
    reconcile(matchingChild, childNode);
    processedChildren.push(childNode);
  });
  currentNode.children.forEach(function (childNode, index) {
    if (!processedChildren.includes(childNode)) {
      childNode.effect = 'Deletion';
    }
  });
}

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
/* harmony import */ var _reconciler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/reconciler */ "./src/reconciler.js");
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
      (0,_reconciler__WEBPACK_IMPORTED_MODULE_2__.reconcile)(this._virtualTree, newVirtualTree);
      console.log(newVirtualTree);
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
/* harmony export */   EmptyObject: () => (/* binding */ EmptyObject),
/* harmony export */   flattenRenderResultChildren: () => (/* binding */ flattenRenderResultChildren)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var EmptyObject = {};

/**
 * Flatten children of render result if any of them is type of array.
 *
 * @param {SparkJS.RenderResult} renderResult
 * @returns {SparkJS.RenderResult}
 */
function flattenRenderResultChildren(renderResult) {
  if (typeof renderResult === 'string') {
    return renderResult;
  }

  /** @type {RenderResult[]} */
  var children = [];
  renderResult.children.forEach(function (child) {
    if (!Array.isArray(child)) {
      children.push(child);
      return;
    }
    children = [].concat(_toConsumableArray(children), _toConsumableArray(child));
  });
  return _objectSpread(_objectSpread({}, renderResult), {}, {
    children: children
  });
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTjhCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNDLFNBQVNBLENBQUNDLE1BQU0sRUFBRTtFQUNoQyxJQUFJNUosT0FBQSxDQUFPNEosTUFBTSxNQUFLLFFBQVEsRUFBRTtJQUM5QixNQUFNLElBQUkxRCxLQUFLLENBQUMsb0RBQW9ELENBQUM7RUFDdkU7RUFFQTJELE1BQU0sQ0FBQ0MsSUFBSSxHQUFHLElBQUl2RSx5Q0FBSyxDQUFDLENBQUM7RUFDekJzRSxNQUFNLENBQUNDLElBQUksQ0FBQ25FLGVBQWUsQ0FBQ2lFLE1BQU0sQ0FBQ25KLE1BQU0sQ0FBQztFQUUxQ3NGLFFBQVEsQ0FBQzBCLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07SUFDbERxQyxJQUFJLENBQUNqRSxLQUFLLENBQUMrRCxNQUFNLENBQUM5RCxPQUFPLENBQUM7RUFDNUIsQ0FBQyxDQUFDO0FBQ0o7QUFFQTZELFNBQVMsQ0FBQztFQUNSN0QsT0FBTyxFQUFFLE1BQU07RUFDZnJGLE1BQU0sV0FBTkEsTUFBTUEsQ0FBQSxFQUFHO0lBQ1A7TUFBQTZJLFdBQUE7TUFBQUYsVUFBQTtNQUFBOUcsUUFBQTtJQUFBO0VBQ0Y7QUFDRixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NwYXJranMvLi9zcmMvY29tcG9uZW50LmpzIiwid2VicGFjazovL3NwYXJranMvLi9zcmMvcmVjb25jaWxlci5qcyIsIndlYnBhY2s6Ly9zcGFya2pzLy4vc3JjL3NwYXJrLmpzIiwid2VicGFjazovL3NwYXJranMvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vc3Bhcmtqcy8uL3NyYy92aXJ0dWFsLW5vZGUuanMiLCJ3ZWJwYWNrOi8vc3Bhcmtqcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zcGFya2pzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zcGFya2pzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3Bhcmtqcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NwYXJranMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbXB0eU9iamVjdH0gZnJvbSBcIkAvdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZXMgYSBjb21wb25lbnQgd2l0aCBwcm9wcyBhbmQgZW1wdHkgc3RhdGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1NwYXJrSlMuUHJvcHN9IHByb3BzXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgIHRoaXMuc3RhdGUgPSBFbXB0eU9iamVjdFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBhIG5ldyBzdGF0ZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgYW55Pn0gc3RhdGVcclxuICAgKi9cclxuICBzZXRTdGF0ZShzdGF0ZSkge1xyXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgLy8gVE9ETzogY2FsbCBob29rIG9uU3RhdGVDaGFuZ2VkXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW5kZXJzIGNvbXBvbmVudCBhcyBKU1ggc3RydWN0dXJlLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1NwYXJrSlMuUmVuZGVyUmVzdWx0fVxyXG4gICAqL1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBob29rIGlzIHRyaWdnZXJlZCB3aGVuIGNvbXBvbmVudCBpcyBtb3VudGVkIGludG8gRE9NLlxyXG4gICAqL1xyXG4gIGFzeW5jIG1vdW50ZWQoKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBhIGhvb2sgaXMgdHJpZ2dlcmVkIHdoZW4gYXBwbGljYXRpb24gaXMgcmVzdW1lZCBpbnRvIGNvbXBvbmVudC5cclxuICAgKi9cclxuICBhc3luYyByZXN1bWVkKCkge31cclxuXHJcbiAgLyoqXHJcbiAgICogQSBob29rIGlzIHRyaWdnZXJlZCB3aGVuIGNvbXBvbmVudCBpcyByZS1yZW5kZXJlZC5cclxuICAgKi9cclxuICBhc3luYyB1cGRhdGVkKCkge31cclxuXHJcbiAgLyoqXHJcbiAgICogQSBob29rIGlzIHRyaWdnZXJlZCBiZWZvcmUgY29tcG9uZW50IGlzIGRlc3Ryb3llZC5cclxuICAgKi9cclxuICBhc3luYyBkZXN0cm95ZWQoKSB7fVxyXG59IiwiaW1wb3J0IHtFbXB0eU9iamVjdCwgZmxhdHRlblJlbmRlclJlc3VsdENoaWxkcmVufSBmcm9tIFwiQC91dGlsc1wiO1xyXG5pbXBvcnQge2J1aWxkVmlydHVhbFRyZWV9IGZyb20gXCJAL3ZpcnR1YWwtbm9kZVwiO1xyXG5cclxuLyoqXHJcbiAqIEJ1aWxkIGFuZCBtb3VudCB3aG9sZSBzdWJ0cmVlIG9mIHZpcnR1YWwgbm9kZS5cclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbm9kZVxyXG4gKi9cclxuZnVuY3Rpb24gbW91bnRWaXJ0dWFsU3VidHJlZShub2RlKSB7XHJcbiAgbm9kZS5lZmZlY3QgPSAnUGxhY2VtZW50JztcclxuXHJcbiAgaWYgKG5vZGUuaXNUeXBlKCdDb21wb25lbnQnKSkge1xyXG4gICAgbm9kZS5jcmVhdGVDb21wb25lbnQoKTtcclxuXHJcbiAgICBsZXQgcmVuZGVyUmVzdWx0ID0gbm9kZS5pbnN0YW5jZS5yZW5kZXIoKTtcclxuICAgIHJlbmRlclJlc3VsdCA9IGZsYXR0ZW5SZW5kZXJSZXN1bHRDaGlsZHJlbihyZW5kZXJSZXN1bHQpO1xyXG4gICAgbGV0IHN1YnRyZWUgPSBidWlsZFZpcnR1YWxUcmVlKHJlbmRlclJlc3VsdClcclxuXHJcbiAgICBpZiAoc3VidHJlZSkge1xyXG4gICAgICBub2RlLmFwcGVuZENoaWxkKHN1YnRyZWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcclxuICAgIGNoaWxkTm9kZS5lZmZlY3QgPSAnUGxhY2VtZW50JztcclxuICAgIG1vdW50VmlydHVhbFN1YnRyZWUoY2hpbGROb2RlKTtcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvcHkgcmVmZXJlbmNlcyBzdWNoIGVsZW1lbnQgcmVmZXJlbmNlLCBwcm9wcyBvciBjb21wb25lbnQgaW5zdGFuY2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IGN1cnJlbnROb2RlXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5ld05vZGVcclxuICogQHBhcmFtIHtib29sZWFufSByZWN1cnNpdmVcclxuICovXHJcbmZ1bmN0aW9uIGNvcHlOb2RlUmVmZXJlbmNlcyhjdXJyZW50Tm9kZSwgbmV3Tm9kZSwgcmVjdXJzaXZlID0gZmFsc2UpIHtcclxuICBpZiAoY3VycmVudE5vZGUudGFnID09PSBuZXdOb2RlLnRhZykge1xyXG4gICAgbmV3Tm9kZS5vbGRQcm9wcyA9IG5ld05vZGUub2xkUHJvcHMgPz8gRW1wdHlPYmplY3Q7XHJcbiAgICBuZXdOb2RlLmVsZW1lbnRSZWYgPSBuZXdOb2RlLmVsZW1lbnRSZWYgPz8gbnVsbDtcclxuXHJcbiAgICBpZiAobmV3Tm9kZS5pc1R5cGUoJ0NvbXBvbmVudCcpKSB7XHJcbiAgICAgIG5ld05vZGUuaW5zdGFuY2UgPSBjdXJyZW50Tm9kZS5pbnN0YW5jZTtcclxuICAgICAgbmV3Tm9kZS5pbnN0YW5jZS5wcm9wcyA9IG5ld05vZGUucGVuZGluZ1Byb3BzID8/IEVtcHR5T2JqZWN0O1xyXG4gICAgICAvLyBUT0RPOiBjb3B5IHN0YXRlIGFuZCBpbmRpY2F0b3IgaWYgc3RhdGUgY2hhbmdlZFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHJlY3Vyc2l2ZSkge1xyXG4gICAgbmV3Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvcHlOb2RlUmVmZXJlbmNlcyhjdXJyZW50Tm9kZS5jaGlsZHJlbltpbmRleF0sIGNoaWxkTm9kZSwgcmVjdXJzaXZlKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiBwZW5kaW5nIHByb3BzIGFyZSBkaWZmZXJlbnQgZnJvbSBvbGQgcHJvcHMuXHJcbiAqIEl0J3Mgc2hhbGxvdyBjb21wYXJpc29uIHNvIG9iamVjdC1saWtlIHByb3BzIGFyZSBjb21wYXJlZCB0aHJvdWdoIHJlZmVyZW5jZS5cclxuICpcclxuICogQHBhcmFtIHtTcGFya0pTLlByb3BzfSBvbGRQcm9wc1xyXG4gKiBAcGFyYW0ge1NwYXJrSlMuUHJvcHN9IHBlbmRpbmdQcm9wc1xyXG4gKi9cclxuZnVuY3Rpb24gY29tcGFyZVByb3BzKG9sZFByb3BzLCBwZW5kaW5nUHJvcHMpIHtcclxuICBpZiAodHlwZW9mIG9sZFByb3BzICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgcGVuZGluZ1Byb3BzICE9PSAnb2JqZWN0Jykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKE9iamVjdC5rZXlzKG9sZFByb3BzKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKHBlbmRpbmdQcm9wcykubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmVudHJpZXMocGVuZGluZ1Byb3BzKS5ldmVyeSgoW2tleSwgdmFsdWVdLCBpbmRleCkgPT4ge1xyXG4gICAgcmV0dXJuIHZhbHVlID09PSBvbGRQcm9wc1trZXldO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIHZpcnR1YWwgbm9kZSBzaG91bGQgYmUgdXBkYXRlZC5cclxuICogVmlydHVhbCBub2RlIHNob3VsZCB1cGRhdGUgaWYgbm9kZSdzIHByb3BzIGFyZSBjaGFuZ2VkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBub2RlXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gc2hvdWxkVXBkYXRlTm9kZShub2RlKSB7XHJcbiAgcmV0dXJuICFjb21wYXJlUHJvcHMobm9kZS5vbGRQcm9wcywgbm9kZS5wZW5kaW5nUHJvcHMpO1xyXG59XHJcblxyXG4vKipcclxuICogVXBkYXRlcyB2aXJ0dWFsIG5vZGUgYW5kIGlmIGl0IGlzIGNvbXBvbmVudCB0aGVuIHRyeSB0byBnZXQgbmV3IHJlbmRlciByZXN1bHQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICovXHJcbmZ1bmN0aW9uIHVwZGF0ZU5vZGUobm9kZSkge1xyXG4gIG5vZGUuZWZmZWN0ID0gJ1VwZGF0ZSc7XHJcbiAgbm9kZS5wZW5kaW5nVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgaWYgKCFub2RlLmlzVHlwZSgnQ29tcG9uZW50JykpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGxldCByZW5kZXJSZXN1bHQgPSBub2RlLmluc3RhbmNlLnJlbmRlcigpO1xyXG4gIHJlbmRlclJlc3VsdCA9IGZsYXR0ZW5SZW5kZXJSZXN1bHRDaGlsZHJlbihyZW5kZXJSZXN1bHQpO1xyXG4gIGNvbnN0IHN1YnRyZWUgPSBidWlsZFZpcnR1YWxUcmVlKHJlbmRlclJlc3VsdClcclxuXHJcbiAgaWYgKHN1YnRyZWUpIHtcclxuICAgIG5vZGUuZW1wdHkoKTtcclxuICAgIG5vZGUuYXBwZW5kQ2hpbGQoc3VidHJlZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogUmV1c2UgY3VycmVudCB2aXJ0dWFsIG5vZGUgd2l0aCBjaGlsZHJlbiBvZiBuZXcgdmlydHVhbCBub2RlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBjdXJyZW50Tm9kZVxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBuZXdOb2RlXHJcbiAqL1xyXG5mdW5jdGlvbiByZXVzZU5vZGUoY3VycmVudE5vZGUsIG5ld05vZGUpIHtcclxuICBjb25zdCBjbG9uZWRDdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLmNsb25lKCk7XHJcblxyXG4gIGlmIChuZXdOb2RlLmlzVHlwZSgnQ29tcG9uZW50JykpIHtcclxuICAgIGxldCByZW5kZXJSZXN1bHQgPSBuZXdOb2RlLmluc3RhbmNlLnJlbmRlcigpO1xyXG4gICAgcmVuZGVyUmVzdWx0ID0gZmxhdHRlblJlbmRlclJlc3VsdENoaWxkcmVuKHJlbmRlclJlc3VsdCk7XHJcbiAgICBjb25zdCBzdWJ0cmVlID0gYnVpbGRWaXJ0dWFsVHJlZShyZW5kZXJSZXN1bHQpXHJcblxyXG4gICAgaWYgKHN1YnRyZWUpIHtcclxuICAgICAgbmV3Tm9kZS5lbXB0eSgpO1xyXG4gICAgICBuZXdOb2RlLmFwcGVuZENoaWxkKHN1YnRyZWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvbmVkQ3VycmVudE5vZGUucGFyZW50ID0gbmV3Tm9kZS5wYXJlbnQ7XHJcbiAgY2xvbmVkQ3VycmVudE5vZGUuY2hpbGRyZW4gPSBuZXdOb2RlLmNoaWxkcmVuO1xyXG5cclxuICBuZXdOb2RlLmNvcHlGcm9tKGNsb25lZEN1cnJlbnROb2RlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZpbmRzIGEgdmlydHVhbCBub2RlIGJhc2VkIG9uIGl0J3MgZGVmaW5lZCBrZXkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxyXG4gKi9cclxuZnVuY3Rpb24gZmluZE5vZGVXaXRoS2V5KG5vZGUsIGtleSkge1xyXG4gIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xyXG4gICAgaWYgKGNoaWxkLmtleSA9PT0ga2V5KSB7XHJcbiAgICAgIHJldHVybiBjaGlsZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogRmluZHMgYSBtYXRjaGluZyBjaGlsZCBpbiBjdXJyZW50IG5vZGUgYmFzZWQgb24gcG9zaXRpb24gb3Iga2V5LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBjdXJyZW50Tm9kZVxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBuZXdDaGlsZE5vZGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uXHJcbiAqL1xyXG5mdW5jdGlvbiBmaW5kTWF0Y2hpbmdDaGlsZE5vZGUoY3VycmVudE5vZGUsIG5ld0NoaWxkTm9kZSwgcG9zaXRpb24pIHtcclxuICAvKiogQHR5cGUge1ZpcnR1YWxOb2RlfSAqL1xyXG4gIGxldCBmb3VuZE5vZGUgPSBudWxsXHJcblxyXG4gIGlmICghY3VycmVudE5vZGUpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgaWYgKG5ld0NoaWxkTm9kZS5rZXkpIHtcclxuICAgIGZvdW5kTm9kZSA9IGZpbmROb2RlV2l0aEtleShjdXJyZW50Tm9kZSwgbmV3Q2hpbGROb2RlLmtleSk7XHJcbiAgfVxyXG5cclxuICBpZiAoZm91bmROb2RlKSB7XHJcbiAgICByZXR1cm4gZm91bmROb2RlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA8PSBwb3NpdGlvbikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY3VycmVudE5vZGUuY2hpbGRyZW5bcG9zaXRpb25dO1xyXG59XHJcblxyXG4vKipcclxuICogQ29tcGFyZXMgbm9kZXMgYXQgdGhlIHNhbWUgcG9zaXRpb24gaW4gdHdvIGRpZmZlcmVudCB0cmVlcyBhbmQgbWFya3MgZWZmZWN0c1xyXG4gKiB0aGF0IG5lZWRzIHRvIGJlIGxhdGVyIHByb2Nlc3NlZC5cclxuICpcclxuICogUG9zc2libGUgZWZmZWN0czpcclxuICogLSBQbGFjZW1lbnQgKG1hcmtlZCBmb3IgcGxhY2luZyBhcyBuZXcgRE9NIGVsZW1lbnQpXHJcbiAqIC0gVXBkYXRlIChtYXJrZWQgZm9yIHVwZGF0aW5nIHByb3BzIG9mIERPTSBlbGVtZW50KVxyXG4gKiAtIERlbGV0aW9uIChtYXJrZWQgZm9yIHJlbW92aW5nIERPTSBlbGVtZW50KVxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBjdXJyZW50Tm9kZVxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBuZXdOb2RlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVjb25jaWxlKGN1cnJlbnROb2RlLCBuZXdOb2RlKSB7XHJcbiAgaWYgKGN1cnJlbnROb2RlICYmIGN1cnJlbnROb2RlLnRhZyAhPT0gbmV3Tm9kZS50YWcpIHtcclxuICAgIGN1cnJlbnROb2RlLmVmZmVjdCA9ICdEZWxldGlvbic7XHJcbiAgICBtb3VudFZpcnR1YWxTdWJ0cmVlKG5ld05vZGUpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFjdXJyZW50Tm9kZSkge1xyXG4gICAgbW91bnRWaXJ0dWFsU3VidHJlZShuZXdOb2RlKTtcclxuICAgIHJldHVybjtcclxuICB9IGVsc2UgaWYgKCFuZXdOb2RlLmlzVHlwZSgnUm9vdCcpKSB7XHJcbiAgICBjb3B5Tm9kZVJlZmVyZW5jZXMoY3VycmVudE5vZGUsIG5ld05vZGUpO1xyXG5cclxuICAgIGlmIChzaG91bGRVcGRhdGVOb2RlKG5ld05vZGUpKSB7XHJcbiAgICAgIHVwZGF0ZU5vZGUobmV3Tm9kZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXVzZU5vZGUoY3VycmVudE5vZGUsIG5ld05vZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvY2Vzc2VkQ2hpbGRyZW4gPSBbXTtcclxuICBuZXdOb2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IG1hdGNoaW5nQ2hpbGQgPSBmaW5kTWF0Y2hpbmdDaGlsZE5vZGUoY3VycmVudE5vZGUsIGNoaWxkTm9kZSwgaW5kZXgpO1xyXG5cclxuICAgIHJlY29uY2lsZShtYXRjaGluZ0NoaWxkLCBjaGlsZE5vZGUpO1xyXG4gICAgcHJvY2Vzc2VkQ2hpbGRyZW4ucHVzaChjaGlsZE5vZGUpO1xyXG4gIH0pO1xyXG5cclxuICBjdXJyZW50Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XHJcbiAgICBpZiAoIXByb2Nlc3NlZENoaWxkcmVuLmluY2x1ZGVzKGNoaWxkTm9kZSkpIHtcclxuICAgICAgY2hpbGROb2RlLmVmZmVjdCA9ICdEZWxldGlvbic7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcclxuaW1wb3J0IHtidWlsZFZpcnR1YWxUcmVlUm9vdH0gZnJvbSBcIkAvdmlydHVhbC1ub2RlXCI7XHJcbmltcG9ydCB7cmVjb25jaWxlfSBmcm9tIFwiQC9yZWNvbmNpbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3Bhcmsge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi9cclxuICAgIHRoaXMuX3Jvb3RFbCA9IG51bGw7XHJcbiAgICAvKiogQHR5cGUge1NwYXJrSlMuUmVuZGVyQ2FsbGJhY2t9ICovXHJcbiAgICB0aGlzLl9yb290RnVuYyA9IG51bGw7XHJcbiAgICAvKiogQHR5cGUge30gKi9cclxuICAgIHRoaXMuX3ZpcnR1YWxUcmVlID0gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgYSBmdW5jdGlvbiB0aGF0IHJldHVybiBKU1ggc3RydWN0dXJlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsoKSA9PiBTcGFya0pTLlJlbmRlclJlc3VsdH0gcm9vdEZuXHJcbiAgICovXHJcbiAgc2V0Um9vdEZ1bmN0aW9uKHJvb3RGbikge1xyXG4gICAgdGhpcy5fcm9vdEZ1bmMgPSByb290Rm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNb3VudHMgYXBwbGljYXRpb24gdG8gSFRNTCBlbGVtZW50IGFuZCB0cmlnZ2VyIHJlbmRlci5cclxuICAgKiBJdCB0aHJvd3MgZXJyb3IgaWYgcm9vdCBlbGVtZW50IGlzbid0IGZvdW5kLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxzdHJpbmd9IG1vdW50RWxcclxuICAgKi9cclxuICBtb3VudChtb3VudEVsKSB7XHJcbiAgICBpZiAodHlwZW9mIG1vdW50RWwgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRoaXMuX3Jvb3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobW91bnRFbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9yb290RWwgPSBtb3VudEVsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghKHRoaXMuX3Jvb3RFbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGEgcm9vdCBlbGVtZW50Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICghdGhpcy5fcm9vdEVsKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgYSByb290IGVsZW1lbnQnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW5kZXJSZXN1bHQgPSB0aGlzLl9yb290RnVuYygpO1xyXG4gICAgY29uc3QgbmV3VmlydHVhbFRyZWUgPSBidWlsZFZpcnR1YWxUcmVlUm9vdChyZW5kZXJSZXN1bHQpO1xyXG5cclxuICAgIHJlY29uY2lsZSh0aGlzLl92aXJ0dWFsVHJlZSwgbmV3VmlydHVhbFRyZWUpO1xyXG4gICAgY29uc29sZS5sb2cobmV3VmlydHVhbFRyZWUpO1xyXG4gICAgLy8gVE9ETzogcmVzb2x2ZSBlZmZlY3RzIGluIGJvdGggdHJlZXNcclxuICAgIC8vIFRPRE86IGhhbmRsZSBkZWxldGlvbiBlZmZlY3RzXHJcbiAgICAvLyBUT0RPOiBzdG9yZSBuZXcgdmlydHVhbCB0cmVlIGFzIGN1cnJlbnQgdmlydHVhbCB0cmVlXHJcbiAgICAvLyBUT0RPOiBoYW5kbGUgcGxhY2VtZW50IGFuZCB1cGRhdGUgZWZmZWN0c1xyXG4gICAgLy8gVE9ETzogY2xlYW4gYWxsIGVmZmVjdHNcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIG9uU3RhdGVDaGFuZ2VkKGNvbXBvbmVudCkge1xyXG5cclxuICB9XHJcbn0iLCJleHBvcnQgY29uc3QgRW1wdHlPYmplY3QgPSB7fTtcclxuXHJcbi8qKlxyXG4gKiBGbGF0dGVuIGNoaWxkcmVuIG9mIHJlbmRlciByZXN1bHQgaWYgYW55IG9mIHRoZW0gaXMgdHlwZSBvZiBhcnJheS5cclxuICpcclxuICogQHBhcmFtIHtTcGFya0pTLlJlbmRlclJlc3VsdH0gcmVuZGVyUmVzdWx0XHJcbiAqIEByZXR1cm5zIHtTcGFya0pTLlJlbmRlclJlc3VsdH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuUmVuZGVyUmVzdWx0Q2hpbGRyZW4ocmVuZGVyUmVzdWx0KSB7XHJcbiAgaWYgKHR5cGVvZiByZW5kZXJSZXN1bHQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICByZXR1cm4gcmVuZGVyUmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLyoqIEB0eXBlIHtSZW5kZXJSZXN1bHRbXX0gKi9cclxuICBsZXQgY2hpbGRyZW4gPSBbXTtcclxuICByZW5kZXJSZXN1bHQuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XHJcbiAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY2hpbGRyZW4gPSBbXHJcbiAgICAgIC4uLmNoaWxkcmVuLFxyXG4gICAgICAuLi5jaGlsZCxcclxuICAgIF07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5yZW5kZXJSZXN1bHQsXHJcbiAgICBjaGlsZHJlbixcclxuICB9XHJcbn0iLCJpbXBvcnQge0VtcHR5T2JqZWN0fSBmcm9tIFwiQC91dGlsc1wiO1xyXG5pbXBvcnQgaHRtbFRhZ3MgZnJvbSBcImh0bWwtdGFnc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlydHVhbE5vZGUge1xyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemVzIHZpcnR1YWwgbm9kZSB3aXRoIHR5cGUsIHRhZyBhbmQgcHJvcGVydGllcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3BhcmtKUy5Ob2RlVHlwZX0gdHlwZVxyXG4gICAqIEBwYXJhbSB7U3BhcmtKUy5Ob2RlVGFnfSB0YWdcclxuICAgKiBAcGFyYW0ge1NwYXJrSlMuTm9kZVByb3BzfSBwcm9wc1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHR5cGUsIHRhZywgcHJvcHMgPSB7fSkge1xyXG4gICAgY29uc3QgeyBrZXksIC4uLm90aGVyUHJvcHMgfSA9IHByb3BzID8/IHt9O1xyXG5cclxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfHVuZGVmaW5lZH0gKi9cclxuICAgIHRoaXMua2V5ID0ga2V5O1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMudGFnID0gdGFnO1xyXG5cclxuICAgIC8vIFJlZmVyZW5jZSBwcm9wZXJ0aWVzXHJcbiAgICAvKiogQHR5cGUge1NwYXJrSlMuUHJvcHN9ICovXHJcbiAgICB0aGlzLm9sZFByb3BzID0gRW1wdHlPYmplY3Q7XHJcbiAgICAvKiogQHR5cGUge1NwYXJrSlMuUHJvcHN9ICovXHJcbiAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IHByb3BzID8/IEVtcHR5T2JqZWN0O1xyXG4gICAgLy8gLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSAqL1xyXG4gICAgLy8gdGhpcy5zdGF0ZSA9IEVtcHR5T2JqZWN0OyBUT0RPOiBhZGQgc3VwcG9ydCBmb3Igc3RhdGVzXHJcbiAgICAvKiogQHR5cGUge0NvbXBvbmVudHxudWxsfSAqL1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XHJcbiAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50fG51bGx9ICovXHJcbiAgICB0aGlzLmVsZW1lbnRSZWYgPSBudWxsO1xyXG4gICAgLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBTcGFya0pTLkV2ZW50TGlzdGVuZXJbXT59ICovXHJcbiAgICB0aGlzLmxpc3RlbmVycyA9IEVtcHR5T2JqZWN0O1xyXG5cclxuICAgIC8vIEluZGljYXRvciBwcm9wZXJ0aWVzXHJcbiAgICAvKiogQHR5cGUge1NwYXJrSlMuRWZmZWN0VHlwZX0gKi9cclxuICAgIHRoaXMuZWZmZWN0ID0gJyc7XHJcbiAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cclxuICAgIHRoaXMucGVuZGluZ1VwZGF0ZSA9IGZhbHNlO1xyXG4gICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xyXG4gICAgLy8gdGhpcy5zdGF0ZUNoYW5nZWQgPSBmYWxzZTsgVE9ETzogYWRkIHN1cHBvcnQgZm9yIHN0YXRlc1xyXG5cclxuICAgIC8vIE5vZGUgcHJvcGVydGllc1xyXG4gICAgLyoqIEB0eXBlIHtWaXJ0dWFsTm9kZXxudWxsfSAqL1xyXG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xyXG4gICAgLyoqIEB0eXBlIHtWaXJ0dWFsTm9kZVtdfSAqL1xyXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHZpcnR1YWwgbm9kZSBpcyBvZiBjZXJ0YWluIHR5cGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1NwYXJrSlMuTm9kZVR5cGV9IHR5cGVcclxuICAgKi9cclxuICBpc1R5cGUodHlwZSkge1xyXG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gdHlwZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiBhbGwgY2hpbGRyZW4gd2VyZSBtb3VudGVkIGludG8gRE9NLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgYWxsQ2hpbGRyZW5Nb3VudGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ucmVkdWNlKChjb3VudCwgY2hpbGROb2RlKSA9PiB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmIChjaGlsZE5vZGUuaXNUeXBlKCdFbGVtZW50JykgfHwgY2hpbGROb2RlLmlzVHlwZSgnVGV4dCcpKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gY2hpbGROb2RlLmVsZW1lbnRSZWYgIT09IG51bGw7XHJcbiAgICAgIH0gZWxzZSBpZiAoY2hpbGROb2RlLmlzVHlwZSgnQ29tcG9uZW50JykpIHtcclxuICAgICAgICByZXN1bHQgPSBjaGlsZE5vZGUubW91bnRlZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGNvdW50ICsgKHJlc3VsdCAmJiBjaGlsZE5vZGUuYWxsQ2hpbGRyZW5Nb3VudGVkKCkgPyAxIDogMCk7XHJcbiAgICB9LCAwKSA9PT0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgYWxsIGNoaWxkcmVuIHdlcmUgdXBkYXRlZCBpbiBET00uXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBhbGxDaGlsZHJlblVwZGF0ZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5yZWR1Y2UoKGNvdW50LCBjaGlsZE5vZGUpID0+IHtcclxuICAgICAgcmV0dXJuIGNvdW50ICsgKCFjaGlsZE5vZGUucGVuZGluZ1VwZGF0ZSAmJiBjaGlsZE5vZGUuYWxsQ2hpbGRyZW5VcGRhdGVkKCkgPyAxIDogMCk7XHJcbiAgICB9LCAwKSA9PT0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIGEgbGlzdGVuZXIgdG8gSFRNTCBlbGVtZW50IGFuZCBzdG9yZSBpdCdzIHJlZmVyZW5jZSBpbnRvIGxpc3RlbmVycyBvZiB2aXJ0dWFsIG5vZGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxyXG4gICAqIEBwYXJhbSB7U3BhcmtKUy5FdmVudExpc3RlbmVyfSBsaXN0ZW5lclxyXG4gICAqL1xyXG4gIGFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcclxuICAgIGlmICghdGhpcy5lbGVtZW50UmVmKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMubGlzdGVuZXJzW3R5cGVdKSB7XHJcbiAgICAgIHRoaXMubGlzdGVuZXJzW3R5cGVdID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbGVtZW50UmVmLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpO1xyXG4gICAgdGhpcy5saXN0ZW5lcnNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGFuIGV2ZW50IGxpc3RlbmVyIGZyb20gSFRNTCBlbGVtZW50IGFuZCBmcm9tIGxpc3RlbmVycyBvZiB2aXJ0dWFsIG5vZGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxyXG4gICAqIEBwYXJhbSB7U3BhcmtKUy5FdmVudExpc3RlbmVyfSBsaXN0ZW5lclxyXG4gICAqL1xyXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcclxuICAgIC8qKiBAdHlwZSB7RXZlbnRMaXN0ZW5lcltdfSAqL1xyXG4gICAgY29uc3QgbGlzdGVuZXJzV2l0aFR5cGUgPSB0aGlzLmxpc3RlbmVyc1t0eXBlXSA/PyBbXTtcclxuXHJcbiAgICBpZiAobGlzdGVuZXJzV2l0aFR5cGUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZm91bmRMaXN0ZW5lckluZGV4ID0gLTE7XHJcbiAgICBjb25zdCBmb3VuZExpc3RlbmVyID0gbGlzdGVuZXJzV2l0aFR5cGUuZmluZCgoYW5vdGhlckxpc3RlbmVyLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoYW5vdGhlckxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xyXG4gICAgICAgIGZvdW5kTGlzdGVuZXJJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWZvdW5kTGlzdGVuZXIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBldmVudCBsaXN0ZW5lciBmb3IgJHt0eXBlfSBvbiBub2RlICR7dGhpcy50YWd9IG5vdCBmb3VuZC4gQ2F1c2U6IGV2ZW50IGxpc3RlbmVyIHByb2JhYmx5IHdhc24ndCBib3VuZCBpbiBjb25zdHJ1Y3Rvci5gKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVsZW1lbnRSZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcik7XHJcbiAgICBsaXN0ZW5lcnNXaXRoVHlwZS5zcGxpY2UoZm91bmRMaXN0ZW5lckluZGV4LCAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsZWFucyBhbGwgbGlzdGVuZXJzIGZyb20gSFRNTCBlbGVtZW50IGFuZCBmcm9tIGxpc3RlbmVycyBvZiB2aXJ0dWFsIG5vZGUuXHJcbiAgICovXHJcbiAgY2xlYW5MaXN0ZW5lcnMoKSB7XHJcbiAgICBmb3IgKGNvbnN0IFt0eXBlLCBsaXN0ZW5lcnNdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubGlzdGVuZXJzKSkge1xyXG4gICAgICBpZiAoIXRoaXMuZWxlbWVudFJlZikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxpc3RlbmVycyA9IEVtcHR5T2JqZWN0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBjb21wb25lbnQgYW5kIGNvcHkgaXQncyBzdGF0ZSBpbnRvIHZpcnR1YWwgb2RlJ3Mgc3RhdGUuXHJcbiAgICovXHJcbiAgY3JlYXRlQ29tcG9uZW50KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyB0aGlzLnRhZyh0aGlzLnBlbmRpbmdQcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5pbnN0YW5jZS5zdGF0ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFwcGVuZHMgYSBjaGlsZCBub2RlIGludG8gY3VycmVudCBub2RlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbm9kZVxyXG4gICAqL1xyXG4gIGFwcGVuZENoaWxkKG5vZGUpIHtcclxuICAgIG5vZGUucGFyZW50ID0gdGhpcztcclxuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChub2RlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcGxhY2VzIGEgY2hpbGQgbm9kZSBpbiBjdXJyZW50IG5vZGUgd2l0aCBhIG5ldyBub2RlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbmV3Tm9kZVxyXG4gICAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG9sZE5vZGVcclxuICAgKi9cclxuICByZXBsYWNlQ2hpbGQobmV3Tm9kZSwgb2xkTm9kZSkge1xyXG4gICAgY29uc3QgaW5kZXhPZiA9IHRoaXMuY2hpbGRyZW4uaW5kZXhPZihvbGROb2RlKTtcclxuXHJcbiAgICBpZiAoaW5kZXhPZiA+PSAwKSB7XHJcbiAgICAgIG5ld05vZGUucGFyZW50ID0gdGhpcztcclxuICAgICAgdGhpcy5jaGlsZHJlbltpbmRleE9mXS5wYXJlbnQgPSBudWxsO1xyXG4gICAgICB0aGlzLmNoaWxkcmVuW2luZGV4T2ZdID0gbmV3Tm9kZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYSBjaGlsZCBub2RlIGZyb20gY3VycmVudCBub2RlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbm9kZVxyXG4gICAqL1xyXG4gIHJlbW92ZUNoaWxkKG5vZGUpIHtcclxuICAgIGNvbnN0IGluZGV4T2YgPSB0aGlzLmNoaWxkcmVuLmluZGV4T2Yobm9kZSk7XHJcblxyXG4gICAgaWYgKGluZGV4T2YgPj0gMCkge1xyXG4gICAgICBub2RlLnBhcmVudCA9IG51bGw7XHJcbiAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGluZGV4T2YsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBhbGwgY2hpbGRyZW4gZnJvbSBjdXJyZW50IG5vZGUuXHJcbiAgICovXHJcbiAgZW1wdHkoKSB7XHJcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgbm9kZS5wYXJlbnQgPSBudWxsO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGFub3RoZXIgaW5zdGFuY2Ugd2l0aCBzYW1lIHByb3BlcnRpZXMuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7VmlydHVhbE5vZGV9XHJcbiAgICovXHJcbiAgY2xvbmUoKSB7XHJcbiAgICBjb25zdCBjbG9uZWQgPSBuZXcgVmlydHVhbE5vZGUodGhpcy50eXBlLCB0aGlzLnRhZywge1xyXG4gICAgICBrZXk6IHRoaXMua2V5LFxyXG4gICAgICAuLi50aGlzLnBlbmRpbmdQcm9wc1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUmVmZXJlbmNlIHByb3BlcnRpZXNcclxuICAgIGNsb25lZC5vbGRQcm9wcyA9IHRoaXMub2xkUHJvcHM7XHJcbiAgICBjbG9uZWQucGVuZGluZ1Byb3BzID0gdGhpcy5wZW5kaW5nUHJvcHM7XHJcbiAgICAvLyBjbG9uZWQuc3RhdGUgPSB0aGlzLnN0YXRlOyBUT0RPOiBhZGQgc3VwcG9ydCBmb3Igc3RhdGVzXHJcbiAgICBjbG9uZWQuaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlO1xyXG4gICAgY2xvbmVkLmVsZW1lbnRSZWYgPSB0aGlzLmVsZW1lbnRSZWY7XHJcbiAgICBjbG9uZWQubGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnM7XHJcblxyXG4gICAgLy8gSW5kaWNhdG9yIHByb3BlcnRpZXNcclxuICAgIGNsb25lZC5lZmZlY3QgPSB0aGlzLmVmZmVjdDtcclxuICAgIGNsb25lZC5tb3VudGVkID0gdGhpcy5tb3VudGVkO1xyXG4gICAgY2xvbmVkLnBlbmRpbmdVcGRhdGUgPSB0aGlzLnBlbmRpbmdVcGRhdGU7XHJcbiAgICAvLyBjbG9uZWQuc3RhdGVDaGFuZ2VkID0gdGhpcy5zdGF0ZUNoYW5nZWQ7IFRPRE86IGFkZCBzdXBwb3J0IGZvciBzdGF0ZXNcclxuXHJcbiAgICAvLyBOb2RlIHByb3BlcnRpZXNcclxuICAgIGNsb25lZC5wYXJlbnQgPSB0aGlzLnBhcmVudDtcclxuICAgIGNsb25lZC5jaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW47XHJcblxyXG4gICAgcmV0dXJuIGNsb25lZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvcHkgYWxsIGRhdGEgZnJvbSBzb3VyY2UgdmlydHVhbCBub2RlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gc291cmNlTm9kZVxyXG4gICAqL1xyXG4gIGNvcHlGcm9tKHNvdXJjZU5vZGUpIHtcclxuICAgIHRoaXMua2V5ID0gc291cmNlTm9kZS5rZXk7XHJcbiAgICB0aGlzLnR5cGUgPSBzb3VyY2VOb2RlLnR5cGU7XHJcbiAgICB0aGlzLnRhZyA9IHNvdXJjZU5vZGUudGFnO1xyXG5cclxuICAgIC8vIFJlZmVyZW5jZSBwcm9wZXJ0aWVzXHJcbiAgICB0aGlzLm9sZFByb3BzID0gc291cmNlTm9kZS5vbGRQcm9wcztcclxuICAgIHRoaXMucGVuZGluZ1Byb3BzID0gc291cmNlTm9kZS5wZW5kaW5nUHJvcHM7XHJcbiAgICAvLyB0aGlzLnN0YXRlID0gc291cmNlTm9kZS5zdGF0ZTsgVE9ETzogYWRkIHN1cHBvcnQgZm9yIHN0YXRlc1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IHNvdXJjZU5vZGUuaW5zdGFuY2U7XHJcbiAgICB0aGlzLmVsZW1lbnRSZWYgPSBzb3VyY2VOb2RlLmVsZW1lbnRSZWY7XHJcbiAgICB0aGlzLmxpc3RlbmVycyA9IHNvdXJjZU5vZGUubGlzdGVuZXJzO1xyXG5cclxuICAgIC8vIEluZGljYXRvciBwcm9wZXJ0aWVzXHJcbiAgICB0aGlzLmVmZmVjdCA9IHNvdXJjZU5vZGUuZWZmZWN0O1xyXG4gICAgdGhpcy5tb3VudGVkID0gc291cmNlTm9kZS5tb3VudGVkO1xyXG4gICAgdGhpcy5wZW5kaW5nVXBkYXRlID0gc291cmNlTm9kZS5wZW5kaW5nVXBkYXRlO1xyXG4gICAgLy8gdGhpcy5zdGF0ZUNoYW5nZWQgPSBzb3VyY2VOb2RlLnN0YXRlQ2hhbmdlZDsgVE9ETzogYWRkIHN1cHBvcnQgZm9yIHN0YXRlc1xyXG5cclxuICAgIC8vIE5vZGUgcHJvcGVydGllc1xyXG4gICAgdGhpcy5wYXJlbnQgPSBzb3VyY2VOb2RlLnBhcmVudDtcclxuICAgIHRoaXMuY2hpbGRyZW4gPSBzb3VyY2VOb2RlLmNoaWxkcmVuO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7SlNYW119IGpzeEFycmF5XHJcbiAqL1xyXG5mdW5jdGlvbiBjaGVja0tleXNJbkpzeEFycmF5KGpzeEFycmF5KSB7XHJcbiAgY29uc3QgdXNlZEtleXMgPSBbXTtcclxuXHJcbiAgcmV0dXJuIGpzeEFycmF5LmV2ZXJ5KChpdGVtKSA9PiB7XHJcbiAgICBpZiAoIWl0ZW0uYXR0cmlidXRlcyB8fCAhaXRlbS5hdHRyaWJ1dGVzLmtleSB8fCB1c2VkS2V5cy5pbmNsdWRlcyhpdGVtLmF0dHJpYnV0ZXMua2V5KSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlZEtleXMucHVzaChpdGVtLmF0dHJpYnV0ZXMua2V5KTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtTcGFya0pTLlJlbmRlclJlc3VsdH0gcmVuZGVyUmVzdWx0XHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV8bnVsbH0gcGFyZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRWaXJ0dWFsVHJlZShyZW5kZXJSZXN1bHQsIHBhcmVudCA9IG51bGwpIHtcclxuICBsZXQge1xyXG4gICAgZWxlbWVudE5hbWUgPSByZW5kZXJSZXN1bHQgPz8gJycsXHJcbiAgICBhdHRyaWJ1dGVzID0ge30sXHJcbiAgICBjaGlsZHJlbiA9IFtdXHJcbiAgfSA9IHJlbmRlclJlc3VsdCA/PyB7fTtcclxuXHJcbiAgLyoqIEB0eXBlIHtWaXJ0dWFsTm9kZX0gKi9cclxuICBsZXQgbm9kZTtcclxuXHJcbiAgaWYgKHR5cGVvZiBlbGVtZW50TmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgbm9kZSA9IG5ldyBWaXJ0dWFsTm9kZSgnQ29tcG9uZW50JywgZWxlbWVudE5hbWUsIHsgY2hpbGRyZW4sIC4uLmF0dHJpYnV0ZXMgfSk7XHJcbiAgICBjaGlsZHJlbiA9IFtdO1xyXG4gIH0gZWxzZSBpZiAoWy4uLmh0bWxUYWdzXS5pbmNsdWRlcyhlbGVtZW50TmFtZSkpIHsgLy8gVE9ETzogYWRkIHN1cHBvcnQgZm9yIFNWRyBlbGVtZW50c1xyXG4gICAgbm9kZSA9IG5ldyBWaXJ0dWFsTm9kZSgnRWxlbWVudCcsIGVsZW1lbnROYW1lLCBhdHRyaWJ1dGVzKTtcclxuICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50TmFtZSA9PT0gJ29iamVjdCcpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignT2JqZWN0IGNhbm5vdCBiZSByZW5kZXJlZCBhcyBKU1ggbm9kZSEnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbm9kZSA9IG5ldyBWaXJ0dWFsTm9kZSgnVGV4dCcsIGVsZW1lbnROYW1lKTtcclxuICB9XHJcblxyXG4gIGlmIChwYXJlbnQpIHtcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChub2RlKTtcclxuICB9XHJcblxyXG4gIGlmICghY2hpbGRyZW4pIHtcclxuICAgIGNoaWxkcmVuID0gW107XHJcbiAgfVxyXG5cclxuICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkTm9kZSA9PiB7XHJcbiAgICBpZiAoIWNoaWxkTm9kZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGROb2RlKSkge1xyXG4gICAgICBpZiAoIWNoZWNrS2V5c0luSnN4QXJyYXkoY2hpbGROb2RlKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRHluYW1pY2FsbHkgbWFwcGVkIG5vZGVzIGluIGxvb3AgbXVzdCBoYXZlIHVuaXF1ZSBrZXlzIHNwZWNpZmllZCBpbiBcImtleVwiIHByb3AuYCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNoaWxkTm9kZS5mb3JFYWNoKGFub3RoZXJDaGlsZE5vZGUgPT4ge1xyXG4gICAgICAgIGJ1aWxkVmlydHVhbFRyZWUoYW5vdGhlckNoaWxkTm9kZSwgbm9kZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnVpbGRWaXJ0dWFsVHJlZShjaGlsZE5vZGUsIG5vZGUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gbm9kZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEJ1aWxkIHZpcnR1YWwgdHJlZSBmcm9tIHJvb3Qgbm9kZS5cclxuICpcclxuICogQHBhcmFtIHtTcGFya0pTLlJlbmRlclJlc3VsdH0gcmVuZGVyUmVzdWx0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRWaXJ0dWFsVHJlZVJvb3QocmVuZGVyUmVzdWx0KSB7XHJcbiAgY29uc3Qgcm9vdE5vZGUgPSBuZXcgVmlydHVhbE5vZGUoJ1Jvb3QnLCAnJyk7XHJcbiAgY29uc3QgY2hpbGROb2RlID0gYnVpbGRWaXJ0dWFsVHJlZShyZW5kZXJSZXN1bHQpO1xyXG5cclxuICBpZiAoY2hpbGROb2RlKSB7XHJcbiAgICByb290Tm9kZS5hcHBlbmRDaGlsZChjaGlsZE5vZGUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvb3ROb2RlO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1NwYXJrfSBmcm9tIFwiQC9zcGFya1wiO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BhcmtKUy5BcHBDb25maWd9IGNvbmZpZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFwcChjb25maWcpIHtcclxuICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gXCJvYmplY3RcIikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIG5lY2Vzc2FyeSBvcHRpb25zIGRlZmluZWQgaW4gZ2l2ZW4gY29uZmlnLicpO1xyXG4gIH1cclxuXHJcbiAgd2luZG93LiRhcHAgPSBuZXcgU3BhcmsoKTtcclxuICB3aW5kb3cuJGFwcC5zZXRSb290RnVuY3Rpb24oY29uZmlnLnJlbmRlcik7XHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICAkYXBwLm1vdW50KGNvbmZpZy5tb3VudEVsKTtcclxuICB9KTtcclxufVxyXG5cclxuY3JlYXRlQXBwKHtcclxuICBtb3VudEVsOiAnI2FwcCcsXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxkaXY+QXBwPC9kaXY+XHJcbiAgfVxyXG59KSJdLCJuYW1lcyI6WyJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9jbGFzc0NhbGxDaGVjayIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJFbXB0eU9iamVjdCIsIkNvbXBvbmVudCIsInByb3BzIiwic3RhdGUiLCJzZXRTdGF0ZSIsInJlbmRlciIsIl9tb3VudGVkIiwiX2NhbGxlZSIsIl9jb250ZXh0IiwibW91bnRlZCIsIl9yZXN1bWVkIiwiX2NhbGxlZTIiLCJfY29udGV4dDIiLCJyZXN1bWVkIiwiX3VwZGF0ZWQiLCJfY2FsbGVlMyIsIl9jb250ZXh0MyIsInVwZGF0ZWQiLCJfZGVzdHJveWVkIiwiX2NhbGxlZTQiLCJfY29udGV4dDQiLCJkZXN0cm95ZWQiLCJkZWZhdWx0IiwiZmxhdHRlblJlbmRlclJlc3VsdENoaWxkcmVuIiwiYnVpbGRWaXJ0dWFsVHJlZSIsIm1vdW50VmlydHVhbFN1YnRyZWUiLCJub2RlIiwiZWZmZWN0IiwiaXNUeXBlIiwiY3JlYXRlQ29tcG9uZW50IiwicmVuZGVyUmVzdWx0IiwiaW5zdGFuY2UiLCJzdWJ0cmVlIiwiYXBwZW5kQ2hpbGQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJjb3B5Tm9kZVJlZmVyZW5jZXMiLCJjdXJyZW50Tm9kZSIsIm5ld05vZGUiLCJyZWN1cnNpdmUiLCJ1bmRlZmluZWQiLCJ0YWciLCJfbmV3Tm9kZSRvbGRQcm9wcyIsIl9uZXdOb2RlJGVsZW1lbnRSZWYiLCJvbGRQcm9wcyIsImVsZW1lbnRSZWYiLCJfbmV3Tm9kZSRwZW5kaW5nUHJvcHMiLCJwZW5kaW5nUHJvcHMiLCJpbmRleCIsImNvbXBhcmVQcm9wcyIsImtleXMiLCJlbnRyaWVzIiwiZXZlcnkiLCJfcmVmIiwiX3JlZjIiLCJfc2xpY2VkVG9BcnJheSIsInNob3VsZFVwZGF0ZU5vZGUiLCJ1cGRhdGVOb2RlIiwicGVuZGluZ1VwZGF0ZSIsImVtcHR5IiwicmV1c2VOb2RlIiwiY2xvbmVkQ3VycmVudE5vZGUiLCJjbG9uZSIsInBhcmVudCIsImNvcHlGcm9tIiwiZmluZE5vZGVXaXRoS2V5IiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJjaGlsZCIsImVyciIsImZpbmRNYXRjaGluZ0NoaWxkTm9kZSIsIm5ld0NoaWxkTm9kZSIsInBvc2l0aW9uIiwiZm91bmROb2RlIiwicmVjb25jaWxlIiwicHJvY2Vzc2VkQ2hpbGRyZW4iLCJtYXRjaGluZ0NoaWxkIiwicHVzaCIsImluY2x1ZGVzIiwiYnVpbGRWaXJ0dWFsVHJlZVJvb3QiLCJTcGFyayIsIl9yb290RWwiLCJfcm9vdEZ1bmMiLCJfdmlydHVhbFRyZWUiLCJzZXRSb290RnVuY3Rpb24iLCJyb290Rm4iLCJtb3VudCIsIm1vdW50RWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJIVE1MRWxlbWVudCIsIkVycm9yIiwibmV3VmlydHVhbFRyZWUiLCJjb25zb2xlIiwibG9nIiwib25TdGF0ZUNoYW5nZWQiLCJjb21wb25lbnQiLCJBcnJheSIsImlzQXJyYXkiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfb2JqZWN0U3ByZWFkIiwiaHRtbFRhZ3MiLCJWaXJ0dWFsTm9kZSIsInR5cGUiLCJvdGhlclByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwibGlzdGVuZXJzIiwiYWxsQ2hpbGRyZW5Nb3VudGVkIiwicmVkdWNlIiwiY291bnQiLCJyZXN1bHQiLCJhbGxDaGlsZHJlblVwZGF0ZWQiLCJhZGRFdmVudExpc3RlbmVyIiwibGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX3RoaXMkbGlzdGVuZXJzJHR5cGUiLCJsaXN0ZW5lcnNXaXRoVHlwZSIsImZvdW5kTGlzdGVuZXJJbmRleCIsImZvdW5kTGlzdGVuZXIiLCJmaW5kIiwiYW5vdGhlckxpc3RlbmVyIiwic3BsaWNlIiwiY2xlYW5MaXN0ZW5lcnMiLCJfdGhpcyIsIl9sb29wIiwiX09iamVjdCRlbnRyaWVzJF9pIiwiX09iamVjdCRlbnRyaWVzIiwiX2kiLCJfcmV0IiwicmVwbGFjZUNoaWxkIiwib2xkTm9kZSIsImluZGV4T2YiLCJyZW1vdmVDaGlsZCIsImNsb25lZCIsInNvdXJjZU5vZGUiLCJjaGVja0tleXNJbkpzeEFycmF5IiwianN4QXJyYXkiLCJ1c2VkS2V5cyIsIml0ZW0iLCJhdHRyaWJ1dGVzIiwiX3JlZjIkZWxlbWVudE5hbWUiLCJlbGVtZW50TmFtZSIsIl9yZWYyJGF0dHJpYnV0ZXMiLCJfcmVmMiRjaGlsZHJlbiIsImFub3RoZXJDaGlsZE5vZGUiLCJyb290Tm9kZSIsImNyZWF0ZUFwcCIsImNvbmZpZyIsIndpbmRvdyIsIiRhcHAiXSwic291cmNlUm9vdCI6IiJ9