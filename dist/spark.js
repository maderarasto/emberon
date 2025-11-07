/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./example/img/logo.png":
/*!******************************!*\
  !*** ./example/img/logo.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "fe2a0e4dcaced4754339d6903fa34adb.png");

/***/ }),

/***/ "./node_modules/html-tags/html-tags.json":
/*!***********************************************!*\
  !*** ./node_modules/html-tags/html-tags.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","script","search","section","select","selectedcontent","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"]');

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _public_img_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @public/img/logo.png */ "./example/img/logo.png");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/component */ "./src/component.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Header */ "./src/Header.jsx");
/* harmony import */ var _spark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/spark */ "./src/spark.js");
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
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }




var listItems = [{
  id: 1,
  name: 'HTML'
}, {
  id: 2,
  name: 'CSS'
}, {
  id: 3,
  name: 'Javascript'
}, {
  id: 4,
  name: 'Node.js'
}];
var App = /*#__PURE__*/function (_Component) {
  function App(props) {
    var _this;
    _classCallCheck(this, App);
    _this = _callSuper(this, App, [props]);
    _this.state = {
      id: 1
    };
    _this.inputRef = (0,_spark__WEBPACK_IMPORTED_MODULE_3__.createRef)(null);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleTextChange = _this.handleTextChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }
  _inherits(App, _Component);
  return _createClass(App, [{
    key: "mounted",
    value: function mounted() {
      if (this.inputRef.current) {
        this.inputRef.current.focus();
      }
    }
  }, {
    key: "updated",
    value: function () {
      var _updated = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              return _context.a(2);
          }
        }, _callee);
      }));
      function updated() {
        return _updated.apply(this, arguments);
      }
      return updated;
    }()
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.setState({
        id: this.state.id + 1
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(ev) {
      ev.preventDefault();
      console.log(ev);
    }
  }, {
    key: "handleTextChange",
    value: function handleTextChange(ev) {
      console.log(ev);
    }
  }, {
    key: "render",
    value: function render() {
      return {
        elementName: "div",
        attributes: {
          style: {
            fontSize: '1rem',
            color: 'black'
          }
        },
        children: [this.state.id % 2 === 0 ? {
          elementName: _Header__WEBPACK_IMPORTED_MODULE_2__["default"],
          attributes: {
            title: "Title ".concat(this.state.id)
          },
          children: null
        } : '', {
          elementName: "div",
          attributes: {
            id: "top-header",
            "class": "class-1 class-2"
          },
          children: [{
            elementName: "nav",
            attributes: {},
            children: ["Navigation"]
          }]
        }, {
          elementName: "p",
          attributes: {},
          children: ["State: ", this.state.id]
        }, {
          elementName: "ul",
          attributes: {},
          children: [listItems.map(function (item, i) {
            return {
              elementName: "li",
              attributes: {
                key: item.id
              },
              children: [item.name]
            };
          })]
        }, {
          elementName: "form",
          attributes: {
            onSubmit: this.handleSubmit
          },
          children: [{
            elementName: "input",
            attributes: {
              ref: this.inputRef,
              type: "text",
              onInput: this.handleTextChange
            },
            children: null
          }, {
            elementName: "input",
            attributes: {
              type: "submit"
            },
            children: null
          }]
        }, {
          elementName: "img",
          attributes: {
            src: _public_img_logo_png__WEBPACK_IMPORTED_MODULE_0__["default"],
            alt: ""
          },
          children: null
        }, {
          elementName: "button",
          attributes: {
            onClick: this.handleClick
          },
          children: ["Click"]
        }]
      };
    }
  }]);
}(_component__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/Header.jsx":
/*!************************!*\
  !*** ./src/Header.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/component */ "./src/component.js");
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
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var Header = /*#__PURE__*/function (_Component) {
  function Header(props) {
    _classCallCheck(this, Header);
    return _callSuper(this, Header, [props]);
  }
  _inherits(Header, _Component);
  return _createClass(Header, [{
    key: "mounted",
    value: function mounted() {
      console.log('Header mounted');
    }
  }, {
    key: "updated",
    value: function () {
      var _updated = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              console.log('Header updated');
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }));
      function updated() {
        return _updated.apply(this, arguments);
      }
      return updated;
    }()
  }, {
    key: "destroyed",
    value: function () {
      var _destroyed = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              console.log('Header destroyed');
            case 1:
              return _context2.a(2);
          }
        }, _callee2);
      }));
      function destroyed() {
        return _destroyed.apply(this, arguments);
      }
      return destroyed;
    }()
  }, {
    key: "render",
    value: function render() {
      return {
        elementName: "h1",
        attributes: {},
        children: [this.props.title]
      };
    }
  }]);
}(_component__WEBPACK_IMPORTED_MODULE_0__["default"]);


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
      $app.onStateChanged(this);
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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   unmountNode: () => (/* binding */ unmountNode),
/* harmony export */   updateElement: () => (/* binding */ updateElement)
/* harmony export */ });
/* harmony import */ var _virtual_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/virtual-node */ "./src/virtual-node.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ "./src/utils.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



/**
 *
 * @param {VirtualNode} node
 * @param {string} propName
 * @param {any} propValue
 */
function handleAddingProps(node, propName, propValue) {
  if (propName.startsWith('on')) {
    node.addEventListener(propName.substring(2).toLowerCase(), propValue);
    return;
  }
  if (propName === 'class') {
    propValue = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.resolveClassName)(propValue);
  } else if (propName === 'style') {
    propValue = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.resolveStyle)(propValue);
  }
  node.elementRef.setAttribute(propName, propValue);
}

/**
 *
 * @param {VirtualNode} node
 */
function resolveElementAttributes(node) {
  for (var _i = 0, _Object$entries = Object.entries(node.pendingProps); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    handleAddingProps(node, key, value);
  }
}

/**
 *
 * @param {VirtualNode} node
 * @param {string} propName
 * @param {any} propValue
 */
function handleUpdatingProps(node, propName, propValue) {
  if (propName.startsWith('on')) {
    var eventName = propName.substring(2).toLowerCase();
    node.removeEventListener(eventName, node.oldProps[eventName]);
    node.addEventListener(eventName, propValue);
  } else if (propName === 'class') {
    propValue = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.resolveClassName)(propValue);
  } else if (propName === 'style') {
    propValue = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.resolveStyle)(propValue);
  }
  if (!propName.startsWith('on')) {
    node.elementRef.setAttribute(propName, propValue);
  }
}

/**
 *
 * @param {VirtualNode} renderNode
 * @param {string} propName
 * @param {any} propValue
 */
function handleRemovingProps(renderNode, propName, propValue) {
  if (propName.startsWith('on')) {
    renderNode.removeEventListener(propName.substring(2).toLowerCase(), propValue);
  } else {
    renderNode.elementRef.removeAttribute(propName);
  }
}

/**
 * Unmount virtual node and it's children.
 * If virtual node represents HTML element it will remove all event listeners and then remove HTML element.
 * If virtual node represents a component instance it will trigger hook for destroying component.
 *
 * @param {VirtualNode} node
 */
function unmountNode(node) {
  node.children.forEach(function (child) {
    unmountNode(child);
  });
  if (node.elementRef) {
    node.cleanListeners();
    node.elementRef.parentNode.removeChild(node.elementRef);
  }
  if (node.isType('Component')) {
    node.instance.destroyed();
  }
}

/**
 * Creates an HTML element or text node in DOM with its arguments.
 *
 * @param {VirtualNode} node
 * @param {number} position
 */
function createElement(node, position) {
  if (node.isType('Text')) {
    node.elementRef = document.createTextNode(node.tag);
  } else if (node.isType('Element')) {
    var _ref, _node$pendingProps$xm;
    var closestWithNS = (0,_virtual_node__WEBPACK_IMPORTED_MODULE_0__.findClosestNode)(node, '[xmlns]');
    var xmlns = (_ref = (_node$pendingProps$xm = node.pendingProps.xmlns) !== null && _node$pendingProps$xm !== void 0 ? _node$pendingProps$xm : closestWithNS === null || closestWithNS === void 0 ? void 0 : closestWithNS.pendingProps.xmlns) !== null && _ref !== void 0 ? _ref : '';
    if (xmlns) {
      node.elementRef = document.createElementNS(xmlns, node.tag);
    } else {
      node.elementRef = document.createElement(node.tag);
    }
    resolveElementAttributes(node);
  }
  var parentEl = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.findClosestDOMNode)(node);
  var childAt = parentEl.children[position];
  parentEl.insertBefore(node.elementRef, childAt);
}

/**
 *
 * @param {VirtualNode} node
 */
function updateElement(node) {
  var diffedProps = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.diffProps)(node.oldProps, node.pendingProps);
  diffedProps.forEach(function (prop) {
    if (prop.type === 'Remove') {
      handleRemovingProps(node, prop.name, prop.value);
    } else if (prop.type === 'Add') {
      handleAddingProps(node, prop.name, prop.value);
    } else if (prop.type === 'Update') {
      handleUpdatingProps(node, prop.name, prop.value);
    }
  });
}

/***/ }),

/***/ "./src/reconciler.js":
/*!***************************!*\
  !*** ./src/reconciler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanNodes: () => (/* binding */ cleanNodes),
/* harmony export */   reconcile: () => (/* binding */ reconcile),
/* harmony export */   resolveEffectsFromNodes: () => (/* binding */ resolveEffectsFromNodes),
/* harmony export */   resolveLastMountedNode: () => (/* binding */ resolveLastMountedNode)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils */ "./src/utils.js");
/* harmony import */ var _virtual_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/virtual-node */ "./src/virtual-node.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



/** @type {VirtualNode|null} */
var lastMountedVirtualNode = null;

/**
 * Build and mount whole subtree of virtual node.
 *
 * @param {VirtualNode} node
 */
function mountVirtualSubtree(node) {
  node.effect = 'Placement';
  lastMountedVirtualNode = node;
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
    var _currentNode$oldProps, _currentNode$elementR;
    newNode.oldProps = (_currentNode$oldProps = currentNode.oldProps) !== null && _currentNode$oldProps !== void 0 ? _currentNode$oldProps : _utils__WEBPACK_IMPORTED_MODULE_0__.EmptyObject;
    newNode.elementRef = (_currentNode$elementR = currentNode.elementRef) !== null && _currentNode$elementR !== void 0 ? _currentNode$elementR : null;
    if (newNode.isType('Component')) {
      var _newNode$pendingProps;
      newNode.instance = currentNode.instance;
      newNode.instance.props = (_newNode$pendingProps = newNode.pendingProps) !== null && _newNode$pendingProps !== void 0 ? _newNode$pendingProps : _utils__WEBPACK_IMPORTED_MODULE_0__.EmptyObject;
      newNode.state = currentNode.state;
      newNode.stateChanged = currentNode.stateChanged;
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
function resolveLastMountedNode() {
  return lastMountedVirtualNode;
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
    processedChildren.push(matchingChild);
  });
  currentNode.children.forEach(function (childNode, index) {
    if (!processedChildren.includes(childNode)) {
      childNode.effect = 'Deletion';
    }
  });
}

/**
 * Traverse through all virtual nodes in virtual tree and resolve effects that needs to be processed.
 *
 * @param {VirtualNode} node
 * @param {number} position
 * @returns {SparkJS.Effect[]}
 */
function resolveEffectsFromNodes(node) {
  var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  /** @type {SparkJS.Effect[]} */
  var effects = [];
  if (!node) {
    return effects;
  }
  if (node.effect !== '') {
    effects.push({
      type: node.effect,
      parent: node.parent,
      nodeRef: node,
      position: position
    });
    node.effect = '';
  }
  node.children.forEach(function (child, index) {
    effects = [].concat(_toConsumableArray(effects), _toConsumableArray(resolveEffectsFromNodes(child, index)));
  });
  return effects;
}

/**
 * Cleans all indicators and effects from virtual true.
 *
 * @param {VirtualNode} node
 */
function cleanNodes(node) {
  node.effect = '';
  node.stateChanged = false;
  if (!compareProps(node.oldProps, node.pendingProps)) {
    node.oldProps = node.pendingProps;
  }
  node.children.forEach(function (child) {
    cleanNodes(child);
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
/* harmony export */   Spark: () => (/* binding */ Spark),
/* harmony export */   createRef: () => (/* binding */ createRef)
/* harmony export */ });
/* harmony import */ var _virtual_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/virtual-node */ "./src/virtual-node.js");
/* harmony import */ var _reconciler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/reconciler */ "./src/reconciler.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/dom */ "./src/dom.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




/**
 * Checks if component nodes are ready to trigger hooks for mounting or updating.
 * Which hook to trigger depends on given action.
 *
 * @param {VirtualNode[]} componentNodes
 * @param {'mount'|'update'}action
 */
function processComponentNodes(componentNodes) {
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'mount';
  if (!['mount', 'update'].includes(action)) {
    action = 'mount';
  }
  while (componentNodes.length > 0) {
    if (action === 'mount' && !componentNodes[0].allChildrenMounted()) {
      break;
    } else if (action === 'update' && !componentNodes[0].allChildrenUpdated()) {
      break;
    }
    if (action === 'mount') {
      componentNodes[0].mounted = true;
      componentNodes[0].instance.mounted();
    } else if (action === 'update') {
      componentNodes[0].instance.updated();
    }
    componentNodes.shift();
  }
}

/**
 * Handles effect for placing a new HTML element or text node.
 *
 * @param {SparkJS.Effect} effect
 * @param {VirtualNode[]} componentNodes
 */
function handlePlacement(effect, componentNodes) {
  if (effect.nodeRef.isType('Component')) {
    componentNodes.unshift(effect.nodeRef);
  }
  if (effect.nodeRef.isType('Element') || effect.nodeRef.isType('Text')) {
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.createElement)(effect.nodeRef, effect.position);
    if (effect.nodeRef.ref) {
      effect.nodeRef.ref.current = effect.nodeRef.elementRef;
    }
  }
  processComponentNodes(componentNodes, 'mount');
}

/**
 * Handles effect for updating existing HTML element.
 *
 * @param {SparkJS.Effect} effect
 * @param {VirtualNode[]} componentNodes
 */
function handleUpdate(effect, componentNodes) {
  effect.nodeRef.pendingUpdate = false;
  if (effect.nodeRef.isType('Component')) {
    componentNodes.unshift(effect.nodeRef);
  }
  if (effect.nodeRef.isType('Element')) {
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.updateElement)(effect.nodeRef);
  }
  processComponentNodes(componentNodes, 'update');
}
var Spark = /*#__PURE__*/function () {
  function Spark() {
    _classCallCheck(this, Spark);
    /** @type {HTMLElement} */
    this._rootEl = null;
    /** @type {SparkJS.RenderCallback} */
    this._rootFunc = null;
    /** @type {VirtualNode} */
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
      var newVirtualTree = (0,_virtual_node__WEBPACK_IMPORTED_MODULE_0__.buildVirtualTreeRoot)(renderResult);
      (0,_reconciler__WEBPACK_IMPORTED_MODULE_1__.reconcile)(this._virtualTree, newVirtualTree);
      var deletions = (0,_reconciler__WEBPACK_IMPORTED_MODULE_1__.resolveEffectsFromNodes)(this._virtualTree);
      var newChanges = (0,_reconciler__WEBPACK_IMPORTED_MODULE_1__.resolveEffectsFromNodes)(newVirtualTree);
      deletions.forEach(function (effect) {
        if (effect.type === 'Deletion') {
          (0,_dom__WEBPACK_IMPORTED_MODULE_2__.unmountNode)(effect.nodeRef);
        }
      });
      this._virtualTree = newVirtualTree;
      this._virtualTree.elementRef = this._rootEl;

      /** @type {VirtualNode[]} */
      var mountedComponentNodes = [];
      /** @type {VirtualNode[]} */
      var updatedComponentNodes = [];
      console.log(newChanges);
      newChanges.forEach(function (effect) {
        if (effect.type === 'Placement') {
          handlePlacement(effect, mountedComponentNodes);
        } else if (effect.type === 'Update') {
          handleUpdate(effect, updatedComponentNodes);
        }
      });
      (0,_reconciler__WEBPACK_IMPORTED_MODULE_1__.cleanNodes)(this._virtualTree);
    }

    /**
     *
     * @param {Component} component
     */
  }, {
    key: "onStateChanged",
    value: function onStateChanged(component) {
      var foundNode = (0,_virtual_node__WEBPACK_IMPORTED_MODULE_0__.findNodeByComponent)(this._virtualTree, component);
      if (!foundNode) {
        console.warn('Skipping render. A render node not found for component: ' + component.constructor.name);
        return;
      }

      // Request to re-render application.
      foundNode.stateChanged = true;
      foundNode.state = component.state;
      this.render();
    }
  }]);
}();
function createRef(value) {
  var lastMountedNode = (0,_reconciler__WEBPACK_IMPORTED_MODULE_1__.resolveLastMountedNode)();
  if (!lastMountedNode) {
    console.warn('Skipping createRef. Last mounted virtual node not found. Cause: probably calling createRef outside of constructor.');
    return;
  }
  var ref = {
    current: value
  };
  lastMountedNode.refs.push(ref);
  return ref;
}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyObject: () => (/* binding */ EmptyObject),
/* harmony export */   diffProps: () => (/* binding */ diffProps),
/* harmony export */   findClosestDOMNode: () => (/* binding */ findClosestDOMNode),
/* harmony export */   flattenRenderResultChildren: () => (/* binding */ flattenRenderResultChildren),
/* harmony export */   resolveClassName: () => (/* binding */ resolveClassName),
/* harmony export */   resolveStyle: () => (/* binding */ resolveStyle)
/* harmony export */ });
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
function resolveClassName(value) {
  if (_typeof(value) !== 'object') {
    return value.toString();
  }
  var classTokens = !Array.isArray(value) ? Object.keys(value).filter(function (className) {
    return value[className];
  }) : value;
  classTokens = classTokens.filter(function (className, index, tokens) {
    return tokens.indexOf(className) === index;
  });
  return classTokens.join(' ');
}
function resolveStyle(value) {
  if (Array.isArray(value)) {
    throw new Error('Style cannot be use as array!');
  }
  if (_typeof(value) !== 'object') {
    return value.toString();
  }
  return Object.entries(value).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    if (/^[a-z]*[A-Z]/.test(key)) {
      var keyTokens = key.split(/(?=[A-Z])/).map(function (token) {
        return token.toLowerCase();
      });
      key = keyTokens.join('-');
    }
    return "".concat(key, ": ").concat(value);
  }).join('; ');
}

/**
 *
 * @param {SparkJS.Props} oldProps
 * @param {SparkJS.Props} pendingProps
 * @returns {SparkJS.PropsDiff[]}
 */
function diffProps(oldProps, pendingProps) {
  /** @type {SparkJS.PropsDiff[]} */
  var propDiffs = [];
  for (var _i = 0, _Object$entries = Object.entries(pendingProps); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    if (oldProps[key] === undefined || oldProps[key] === null) {
      propDiffs.push({
        type: 'Add',
        name: key,
        value: value
      });
    } else if (value !== oldProps[key]) {
      propDiffs.push({
        type: 'Update',
        name: key,
        value: value
      });
    }
  }
  for (var _i2 = 0, _Object$entries2 = Object.entries(oldProps); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
      _key = _Object$entries2$_i[0],
      _value = _Object$entries2$_i[1];
    if (pendingProps[_key] === undefined || pendingProps[_key] === null) {
      propDiffs.push({
        type: 'Remove',
        name: _key,
        value: _value
      });
    }
  }
  return propDiffs;
}

/**
 *
 * @param {VirtualNode} node
 */
function findClosestDOMNode(node) {
  var currentNode = node;
  while (currentNode && currentNode.parent) {
    if (currentNode.parent.elementRef) {
      return currentNode.parent.elementRef;
    }
    currentNode = currentNode.parent;
  }
  return null;
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
/* harmony export */   "default": () => (/* binding */ VirtualNode),
/* harmony export */   findClosestNode: () => (/* binding */ findClosestNode),
/* harmony export */   findNodeByComponent: () => (/* binding */ findNodeByComponent)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils */ "./src/utils.js");
/* harmony import */ var html_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-tags */ "./node_modules/html-tags/html-tags.json");
var _excluded = ["key", "ref"];
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
    var key = props.key,
      ref = props.ref,
      otherProps = _objectWithoutProperties(props, _excluded);

    /** @type {string|undefined} */
    this.key = key;
    this.type = type;
    this.tag = tag;

    // Reference properties
    /** @type {SparkJS.Props} */
    this.oldProps = _utils__WEBPACK_IMPORTED_MODULE_0__.EmptyObject;
    /** @type {SparkJS.Props} */
    this.pendingProps = otherProps !== null && otherProps !== void 0 ? otherProps : _utils__WEBPACK_IMPORTED_MODULE_0__.EmptyObject;
    /** @type {Record<string, any>} */
    this.state = _utils__WEBPACK_IMPORTED_MODULE_0__.EmptyObject;
    /** @type {SparkJS.RefObject[]} */
    this.refs = [];
    /** @type {SparkJS.RefObject|null} */
    this.ref = ref;
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
    this.stateChanged = false;

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
      cloned.state = this.state;
      cloned.instance = this.instance;
      cloned.elementRef = this.elementRef;
      cloned.listeners = this.listeners;

      // Indicator properties
      cloned.effect = this.effect;
      cloned.mounted = this.mounted;
      cloned.pendingUpdate = this.pendingUpdate;
      cloned.stateChanged = this.stateChanged;

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
      this.state = sourceNode.state;
      this.instance = sourceNode.instance;
      this.elementRef = sourceNode.elementRef;
      this.listeners = sourceNode.listeners;

      // Indicator properties
      this.effect = sourceNode.effect;
      this.mounted = sourceNode.mounted;
      this.pendingUpdate = sourceNode.pendingUpdate;
      this.stateChanged = sourceNode.stateChanged;

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
  var _ref = renderResult !== null && renderResult !== void 0 ? renderResult : {},
    _ref$elementName = _ref.elementName,
    elementName = _ref$elementName === void 0 ? renderResult !== null && renderResult !== void 0 ? renderResult : '' : _ref$elementName,
    _ref$attributes = _ref.attributes,
    attributes = _ref$attributes === void 0 ? {} : _ref$attributes,
    _ref$children = _ref.children,
    children = _ref$children === void 0 ? [] : _ref$children;

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
 * Finds closest parent based on selector.
 *
 * @param {VirtualNode} node
 * @param {string} selector
 */
function findClosestNode(node, selector) {
  if (!selector) {
    throw new Error('A selector can\'t be empty string');
  }
  var currentNode = node;
  while ((_currentNode = currentNode) !== null && _currentNode !== void 0 && _currentNode.parent) {
    var _currentNode, _currentNode$parent$p;
    var parentProps = (_currentNode$parent$p = currentNode.parent.pendingProps) !== null && _currentNode$parent$p !== void 0 ? _currentNode$parent$p : _utils__WEBPACK_IMPORTED_MODULE_0__.EmptyObject;
    if (currentNode.parent.type !== 'element') {
      currentNode = currentNode.parent;
      continue;
    }
    if (selector.startsWith('#') && parentProps.id === selector.substring(1)) {
      return currentNode.parent;
    } else if (selector.startsWith('.') && parentProps["class"] === selector.substring(1)) {
      return currentNode.parent;
    } else if (/[[a-zA-Z0-9\-_]*(?:="[a-zA-Z0-9\-_]*")?]/.test(selector)) {
      var value = selector.replace('[', '').replace(']', '');
      if (currentNode.parent.pendingProps[value]) {
        return currentNode.parent;
      }
    } else if (currentNode.parent.tag === selector) {
      return currentNode.parent;
    }
    currentNode = currentNode.parent;
  }
  return null;
}

/**
 * Finds a virtual node that is found by given component instance.
 *
 * @param {VirtualNode} node
 * @param  {Component} component
 * @returns {VirtualNode|null}
 */
function findNodeByComponent(node, component) {
  var foundNode = null;
  if (node.instance === component) {
    return node;
  }
  node.children.forEach(function (child) {
    foundNode = findNodeByComponent(child, component);
  });
  return foundNode;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/App */ "./src/App.jsx");
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
      elementName: _App__WEBPACK_IMPORTED_MODULE_1__["default"],
      attributes: {},
      children: null
    };
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7RUFDekI0RSxNQUFNLENBQUMxTSxJQUFJLENBQUNrSSxlQUFlLENBQUN1RSxNQUFNLENBQUNqTyxNQUFNLENBQUM7RUFFMUN3RSxRQUFRLENBQUM3QixnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0lBQ2xEbkIsSUFBSSxDQUFDb0ksS0FBSyxDQUFDcUUsTUFBTSxDQUFDcEUsT0FBTyxDQUFDO0VBQzVCLENBQUMsQ0FBQztBQUNKO0FBRUFtRSxTQUFTLENBQUM7RUFDUm5FLE9BQU8sRUFBRSxNQUFNO0VBQ2Y3SixNQUFNLFdBQU5BLE1BQU1BLENBQUEsRUFBRztJQUNQO01BQUFDLFdBQUEsRUFBQXRCLDRDQUFBO01BQUF1QixVQUFBO01BQUFJLFFBQUE7SUFBQTtFQUNGO0FBQ0YsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGFya2pzLy4vZXhhbXBsZS9pbWcvbG9nby5wbmciLCJ3ZWJwYWNrOi8vc3Bhcmtqcy8uL3NyYy9BcHAuanN4Iiwid2VicGFjazovL3NwYXJranMvLi9zcmMvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly9zcGFya2pzLy4vc3JjL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9zcGFya2pzLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9zcGFya2pzLy4vc3JjL3JlY29uY2lsZXIuanMiLCJ3ZWJwYWNrOi8vc3Bhcmtqcy8uL3NyYy9zcGFyay5qcyIsIndlYnBhY2s6Ly9zcGFya2pzLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL3NwYXJranMvLi9zcmMvdmlydHVhbC1ub2RlLmpzIiwid2VicGFjazovL3NwYXJranMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3Bhcmtqcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3Bhcmtqcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3NwYXJranMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zcGFya2pzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3Bhcmtqcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9zcGFya2pzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmZTJhMGU0ZGNhY2VkNDc1NDMzOWQ2OTAzZmEzNGFkYi5wbmdcIjsiLCJpbXBvcnQgaW1nIGZyb20gJ0BwdWJsaWMvaW1nL2xvZ28ucG5nJztcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiQC9jb21wb25lbnRcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiQC9IZWFkZXJcIjtcclxuaW1wb3J0IHtjcmVhdGVSZWZ9IGZyb20gXCJAL3NwYXJrXCI7XHJcblxyXG5jb25zdCBsaXN0SXRlbXMgPSBbXHJcbiAgeyBpZDogMSwgbmFtZTogJ0hUTUwnIH0sXHJcbiAgeyBpZDogMiwgbmFtZTogJ0NTUycgfSxcclxuICB7IGlkOiAzLCBuYW1lOiAnSmF2YXNjcmlwdCcgfSxcclxuICB7IGlkOiA0LCBuYW1lOiAnTm9kZS5qcycgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpZDogMSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5pbnB1dFJlZiA9IGNyZWF0ZVJlZihudWxsKTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVUZXh0Q2hhbmdlID0gdGhpcy5oYW5kbGVUZXh0Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBtb3VudGVkKCkge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRSZWYuY3VycmVudCkge1xyXG4gICAgICB0aGlzLmlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHVwZGF0ZWQoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmlucHV0UmVmKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlkOiB0aGlzLnN0YXRlLmlkICsgMSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0KGV2KSB7XHJcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coZXYpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlVGV4dENoYW5nZShldikge1xyXG4gICAgY29uc29sZS5sb2coZXYpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogJzFyZW0nLCBjb2xvcjogJ2JsYWNrJyB9fT5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5pZCAlIDIgPT09IDAgPyAoXHJcbiAgICAgICAgICA8SGVhZGVyIHRpdGxlPXtgVGl0bGUgJHt0aGlzLnN0YXRlLmlkfWB9IC8+XHJcbiAgICAgICAgKSA6ICcnfVxyXG4gICAgICAgIDxkaXYgaWQ9XCJ0b3AtaGVhZGVyXCIgY2xhc3M9e2BjbGFzcy0xIGNsYXNzLTJgfT5cclxuICAgICAgICAgIDxuYXY+TmF2aWdhdGlvbjwvbmF2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwPlN0YXRlOiB7dGhpcy5zdGF0ZS5pZH08L3A+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAge2xpc3RJdGVtcy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+e2l0ZW0ubmFtZX08L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgPGlucHV0IHJlZj17dGhpcy5pbnB1dFJlZn0gdHlwZT1cInRleHRcIiBvbklucHV0PXt0aGlzLmhhbmRsZVRleHRDaGFuZ2V9IC8+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxpbWcgc3JjPXtpbWd9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5DbGljazwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCJAL2NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdIZWFkZXIgbW91bnRlZCcpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgdXBkYXRlZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdIZWFkZXIgdXBkYXRlZCcpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZGVzdHJveWVkKCkge1xyXG4gICAgY29uc29sZS5sb2coJ0hlYWRlciBkZXN0cm95ZWQnKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxoMT57dGhpcy5wcm9wcy50aXRsZX08L2gxPlxyXG4gICAgKVxyXG4gIH1cclxufSIsImltcG9ydCB7RW1wdHlPYmplY3R9IGZyb20gXCJAL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemVzIGEgY29tcG9uZW50IHdpdGggcHJvcHMgYW5kIGVtcHR5IHN0YXRlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTcGFya0pTLlByb3BzfSBwcm9wc1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICB0aGlzLnN0YXRlID0gRW1wdHlPYmplY3RcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgYSBuZXcgc3RhdGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIGFueT59IHN0YXRlXHJcbiAgICovXHJcbiAgc2V0U3RhdGUoc3RhdGUpIHtcclxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgICRhcHAub25TdGF0ZUNoYW5nZWQodGhpcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW5kZXJzIGNvbXBvbmVudCBhcyBKU1ggc3RydWN0dXJlLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1NwYXJrSlMuUmVuZGVyUmVzdWx0fVxyXG4gICAqL1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBob29rIGlzIHRyaWdnZXJlZCB3aGVuIGNvbXBvbmVudCBpcyBtb3VudGVkIGludG8gRE9NLlxyXG4gICAqL1xyXG4gIGFzeW5jIG1vdW50ZWQoKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBhIGhvb2sgaXMgdHJpZ2dlcmVkIHdoZW4gYXBwbGljYXRpb24gaXMgcmVzdW1lZCBpbnRvIGNvbXBvbmVudC5cclxuICAgKi9cclxuICBhc3luYyByZXN1bWVkKCkge31cclxuXHJcbiAgLyoqXHJcbiAgICogQSBob29rIGlzIHRyaWdnZXJlZCB3aGVuIGNvbXBvbmVudCBpcyByZS1yZW5kZXJlZC5cclxuICAgKi9cclxuICBhc3luYyB1cGRhdGVkKCkge31cclxuXHJcbiAgLyoqXHJcbiAgICogQSBob29rIGlzIHRyaWdnZXJlZCBiZWZvcmUgY29tcG9uZW50IGlzIGRlc3Ryb3llZC5cclxuICAgKi9cclxuICBhc3luYyBkZXN0cm95ZWQoKSB7fVxyXG59IiwiaW1wb3J0IHtmaW5kQ2xvc2VzdE5vZGV9IGZyb20gXCJAL3ZpcnR1YWwtbm9kZVwiO1xyXG5pbXBvcnQge2RpZmZQcm9wcywgZmluZENsb3Nlc3RET01Ob2RlLCByZXNvbHZlQ2xhc3NOYW1lLCByZXNvbHZlU3R5bGV9IGZyb20gXCJAL3V0aWxzXCI7XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbm9kZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcE5hbWVcclxuICogQHBhcmFtIHthbnl9IHByb3BWYWx1ZVxyXG4gKi9cclxuZnVuY3Rpb24gaGFuZGxlQWRkaW5nUHJvcHMobm9kZSwgcHJvcE5hbWUsIHByb3BWYWx1ZSkge1xyXG4gIGlmIChwcm9wTmFtZS5zdGFydHNXaXRoKCdvbicpKSB7XHJcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIocHJvcE5hbWUuc3Vic3RyaW5nKDIpLnRvTG93ZXJDYXNlKCksIHByb3BWYWx1ZSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAocHJvcE5hbWUgPT09ICdjbGFzcycpIHtcclxuICAgIHByb3BWYWx1ZSA9IHJlc29sdmVDbGFzc05hbWUocHJvcFZhbHVlKTtcclxuICB9IGVsc2UgaWYgKHByb3BOYW1lID09PSAnc3R5bGUnKSB7XHJcbiAgICBwcm9wVmFsdWUgPSByZXNvbHZlU3R5bGUocHJvcFZhbHVlKTtcclxuICB9XHJcblxyXG4gIG5vZGUuZWxlbWVudFJlZi5zZXRBdHRyaWJ1dGUocHJvcE5hbWUsIHByb3BWYWx1ZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBub2RlXHJcbiAqL1xyXG5mdW5jdGlvbiByZXNvbHZlRWxlbWVudEF0dHJpYnV0ZXMobm9kZSkge1xyXG4gIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhub2RlLnBlbmRpbmdQcm9wcykpIHtcclxuICAgIGhhbmRsZUFkZGluZ1Byb3BzKG5vZGUsIGtleSwgdmFsdWUpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BOYW1lXHJcbiAqIEBwYXJhbSB7YW55fSBwcm9wVmFsdWVcclxuICovXHJcbmZ1bmN0aW9uIGhhbmRsZVVwZGF0aW5nUHJvcHMobm9kZSwgcHJvcE5hbWUsIHByb3BWYWx1ZSkge1xyXG4gIGlmIChwcm9wTmFtZS5zdGFydHNXaXRoKCdvbicpKSB7XHJcbiAgICBjb25zdCBldmVudE5hbWUgPSBwcm9wTmFtZS5zdWJzdHJpbmcoMikudG9Mb3dlckNhc2UoKTtcclxuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIG5vZGUub2xkUHJvcHNbZXZlbnROYW1lXSk7XHJcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBwcm9wVmFsdWUpO1xyXG4gIH0gZWxzZSBpZiAocHJvcE5hbWUgPT09ICdjbGFzcycpIHtcclxuICAgIHByb3BWYWx1ZSA9IHJlc29sdmVDbGFzc05hbWUocHJvcFZhbHVlKTtcclxuICB9IGVsc2UgaWYgKHByb3BOYW1lID09PSAnc3R5bGUnKSB7XHJcbiAgICBwcm9wVmFsdWUgPSByZXNvbHZlU3R5bGUocHJvcFZhbHVlKTtcclxuICB9XHJcblxyXG4gIGlmICghcHJvcE5hbWUuc3RhcnRzV2l0aCgnb24nKSkge1xyXG4gICAgbm9kZS5lbGVtZW50UmVmLnNldEF0dHJpYnV0ZShwcm9wTmFtZSwgcHJvcFZhbHVlKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSByZW5kZXJOb2RlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wTmFtZVxyXG4gKiBAcGFyYW0ge2FueX0gcHJvcFZhbHVlXHJcbiAqL1xyXG5mdW5jdGlvbiBoYW5kbGVSZW1vdmluZ1Byb3BzKHJlbmRlck5vZGUsIHByb3BOYW1lLCBwcm9wVmFsdWUpIHtcclxuICBpZiAocHJvcE5hbWUuc3RhcnRzV2l0aCgnb24nKSkge1xyXG4gICAgcmVuZGVyTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKHByb3BOYW1lLnN1YnN0cmluZygyKS50b0xvd2VyQ2FzZSgpLCBwcm9wVmFsdWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZW5kZXJOb2RlLmVsZW1lbnRSZWYucmVtb3ZlQXR0cmlidXRlKHByb3BOYW1lKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVbm1vdW50IHZpcnR1YWwgbm9kZSBhbmQgaXQncyBjaGlsZHJlbi5cclxuICogSWYgdmlydHVhbCBub2RlIHJlcHJlc2VudHMgSFRNTCBlbGVtZW50IGl0IHdpbGwgcmVtb3ZlIGFsbCBldmVudCBsaXN0ZW5lcnMgYW5kIHRoZW4gcmVtb3ZlIEhUTUwgZWxlbWVudC5cclxuICogSWYgdmlydHVhbCBub2RlIHJlcHJlc2VudHMgYSBjb21wb25lbnQgaW5zdGFuY2UgaXQgd2lsbCB0cmlnZ2VyIGhvb2sgZm9yIGRlc3Ryb3lpbmcgY29tcG9uZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBub2RlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudE5vZGUobm9kZSkge1xyXG4gIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgIHVubW91bnROb2RlKGNoaWxkKTtcclxuICB9KTtcclxuXHJcbiAgaWYgKG5vZGUuZWxlbWVudFJlZikge1xyXG4gICAgbm9kZS5jbGVhbkxpc3RlbmVycygpO1xyXG4gICAgbm9kZS5lbGVtZW50UmVmLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZS5lbGVtZW50UmVmKTtcclxuICB9XHJcblxyXG4gIGlmIChub2RlLmlzVHlwZSgnQ29tcG9uZW50JykpIHtcclxuICAgIG5vZGUuaW5zdGFuY2UuZGVzdHJveWVkKCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhbiBIVE1MIGVsZW1lbnQgb3IgdGV4dCBub2RlIGluIERPTSB3aXRoIGl0cyBhcmd1bWVudHMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChub2RlLCBwb3NpdGlvbikge1xyXG4gIGlmIChub2RlLmlzVHlwZSgnVGV4dCcpKSB7XHJcbiAgICBub2RlLmVsZW1lbnRSZWYgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShub2RlLnRhZyk7XHJcbiAgfSBlbHNlIGlmIChub2RlLmlzVHlwZSgnRWxlbWVudCcpKSB7XHJcbiAgICBjb25zdCBjbG9zZXN0V2l0aE5TID0gZmluZENsb3Nlc3ROb2RlKG5vZGUsICdbeG1sbnNdJyk7XHJcbiAgICBjb25zdCB4bWxucyA9IG5vZGUucGVuZGluZ1Byb3BzLnhtbG5zID8/IGNsb3Nlc3RXaXRoTlM/LnBlbmRpbmdQcm9wcy54bWxucyA/PyAnJztcclxuXHJcbiAgICBpZiAoeG1sbnMpIHtcclxuICAgICAgbm9kZS5lbGVtZW50UmVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCBub2RlLnRhZyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBub2RlLmVsZW1lbnRSZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGUudGFnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlRWxlbWVudEF0dHJpYnV0ZXMobm9kZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXJlbnRFbCA9IGZpbmRDbG9zZXN0RE9NTm9kZShub2RlKTtcclxuICBjb25zdCBjaGlsZEF0ID0gcGFyZW50RWwuY2hpbGRyZW5bcG9zaXRpb25dO1xyXG5cclxuICBwYXJlbnRFbC5pbnNlcnRCZWZvcmUobm9kZS5lbGVtZW50UmVmLCBjaGlsZEF0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVFbGVtZW50KG5vZGUpIHtcclxuICBjb25zdCBkaWZmZWRQcm9wcyA9IGRpZmZQcm9wcyhub2RlLm9sZFByb3BzLCBub2RlLnBlbmRpbmdQcm9wcyk7XHJcblxyXG4gIGRpZmZlZFByb3BzLmZvckVhY2goKHByb3ApID0+IHtcclxuICAgIGlmIChwcm9wLnR5cGUgPT09ICdSZW1vdmUnICkge1xyXG4gICAgICBoYW5kbGVSZW1vdmluZ1Byb3BzKG5vZGUsIHByb3AubmFtZSwgcHJvcC52YWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHByb3AudHlwZSA9PT0gJ0FkZCcgKSB7XHJcbiAgICAgIGhhbmRsZUFkZGluZ1Byb3BzKG5vZGUsIHByb3AubmFtZSwgcHJvcC52YWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHByb3AudHlwZSA9PT0gJ1VwZGF0ZScgKSB7XHJcbiAgICAgIGhhbmRsZVVwZGF0aW5nUHJvcHMobm9kZSwgcHJvcC5uYW1lLCBwcm9wLnZhbHVlKTtcclxuICAgIH1cclxuICB9KTtcclxufSIsImltcG9ydCB7RW1wdHlPYmplY3QsIGZsYXR0ZW5SZW5kZXJSZXN1bHRDaGlsZHJlbn0gZnJvbSBcIkAvdXRpbHNcIjtcclxuaW1wb3J0IHtidWlsZFZpcnR1YWxUcmVlfSBmcm9tIFwiQC92aXJ0dWFsLW5vZGVcIjtcclxuXHJcbi8qKiBAdHlwZSB7VmlydHVhbE5vZGV8bnVsbH0gKi9cclxubGV0IGxhc3RNb3VudGVkVmlydHVhbE5vZGUgPSBudWxsO1xyXG5cclxuLyoqXHJcbiAqIEJ1aWxkIGFuZCBtb3VudCB3aG9sZSBzdWJ0cmVlIG9mIHZpcnR1YWwgbm9kZS5cclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbm9kZVxyXG4gKi9cclxuZnVuY3Rpb24gbW91bnRWaXJ0dWFsU3VidHJlZShub2RlKSB7XHJcbiAgbm9kZS5lZmZlY3QgPSAnUGxhY2VtZW50JztcclxuICBsYXN0TW91bnRlZFZpcnR1YWxOb2RlID0gbm9kZTtcclxuXHJcbiAgaWYgKG5vZGUuaXNUeXBlKCdDb21wb25lbnQnKSkge1xyXG4gICAgbm9kZS5jcmVhdGVDb21wb25lbnQoKTtcclxuXHJcbiAgICBsZXQgcmVuZGVyUmVzdWx0ID0gbm9kZS5pbnN0YW5jZS5yZW5kZXIoKTtcclxuICAgIHJlbmRlclJlc3VsdCA9IGZsYXR0ZW5SZW5kZXJSZXN1bHRDaGlsZHJlbihyZW5kZXJSZXN1bHQpO1xyXG4gICAgbGV0IHN1YnRyZWUgPSBidWlsZFZpcnR1YWxUcmVlKHJlbmRlclJlc3VsdClcclxuXHJcbiAgICBpZiAoc3VidHJlZSkge1xyXG4gICAgICBub2RlLmFwcGVuZENoaWxkKHN1YnRyZWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcclxuICAgIGNoaWxkTm9kZS5lZmZlY3QgPSAnUGxhY2VtZW50JztcclxuICAgIG1vdW50VmlydHVhbFN1YnRyZWUoY2hpbGROb2RlKTtcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvcHkgcmVmZXJlbmNlcyBzdWNoIGVsZW1lbnQgcmVmZXJlbmNlLCBwcm9wcyBvciBjb21wb25lbnQgaW5zdGFuY2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IGN1cnJlbnROb2RlXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5ld05vZGVcclxuICogQHBhcmFtIHtib29sZWFufSByZWN1cnNpdmVcclxuICovXHJcbmZ1bmN0aW9uIGNvcHlOb2RlUmVmZXJlbmNlcyhjdXJyZW50Tm9kZSwgbmV3Tm9kZSwgcmVjdXJzaXZlID0gZmFsc2UpIHtcclxuICBpZiAoY3VycmVudE5vZGUudGFnID09PSBuZXdOb2RlLnRhZykge1xyXG4gICAgbmV3Tm9kZS5vbGRQcm9wcyA9IGN1cnJlbnROb2RlLm9sZFByb3BzID8/IEVtcHR5T2JqZWN0O1xyXG4gICAgbmV3Tm9kZS5lbGVtZW50UmVmID0gY3VycmVudE5vZGUuZWxlbWVudFJlZiA/PyBudWxsO1xyXG5cclxuICAgIGlmIChuZXdOb2RlLmlzVHlwZSgnQ29tcG9uZW50JykpIHtcclxuICAgICAgbmV3Tm9kZS5pbnN0YW5jZSA9IGN1cnJlbnROb2RlLmluc3RhbmNlO1xyXG4gICAgICBuZXdOb2RlLmluc3RhbmNlLnByb3BzID0gbmV3Tm9kZS5wZW5kaW5nUHJvcHMgPz8gRW1wdHlPYmplY3Q7XHJcbiAgICAgIG5ld05vZGUuc3RhdGUgPSBjdXJyZW50Tm9kZS5zdGF0ZTtcclxuICAgICAgbmV3Tm9kZS5zdGF0ZUNoYW5nZWQgPSBjdXJyZW50Tm9kZS5zdGF0ZUNoYW5nZWQ7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHJlY3Vyc2l2ZSkge1xyXG4gICAgbmV3Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvcHlOb2RlUmVmZXJlbmNlcyhjdXJyZW50Tm9kZS5jaGlsZHJlbltpbmRleF0sIGNoaWxkTm9kZSwgcmVjdXJzaXZlKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiBwZW5kaW5nIHByb3BzIGFyZSBkaWZmZXJlbnQgZnJvbSBvbGQgcHJvcHMuXHJcbiAqIEl0J3Mgc2hhbGxvdyBjb21wYXJpc29uIHNvIG9iamVjdC1saWtlIHByb3BzIGFyZSBjb21wYXJlZCB0aHJvdWdoIHJlZmVyZW5jZS5cclxuICpcclxuICogQHBhcmFtIHtTcGFya0pTLlByb3BzfSBvbGRQcm9wc1xyXG4gKiBAcGFyYW0ge1NwYXJrSlMuUHJvcHN9IHBlbmRpbmdQcm9wc1xyXG4gKi9cclxuZnVuY3Rpb24gY29tcGFyZVByb3BzKG9sZFByb3BzLCBwZW5kaW5nUHJvcHMpIHtcclxuICBpZiAodHlwZW9mIG9sZFByb3BzICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgcGVuZGluZ1Byb3BzICE9PSAnb2JqZWN0Jykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKE9iamVjdC5rZXlzKG9sZFByb3BzKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKHBlbmRpbmdQcm9wcykubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmVudHJpZXMocGVuZGluZ1Byb3BzKS5ldmVyeSgoW2tleSwgdmFsdWVdLCBpbmRleCkgPT4ge1xyXG4gICAgcmV0dXJuIHZhbHVlID09PSBvbGRQcm9wc1trZXldO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIHZpcnR1YWwgbm9kZSBzaG91bGQgYmUgdXBkYXRlZC5cclxuICogVmlydHVhbCBub2RlIHNob3VsZCB1cGRhdGUgaWYgbm9kZSdzIHByb3BzIGFyZSBjaGFuZ2VkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBub2RlXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gc2hvdWxkVXBkYXRlTm9kZShub2RlKSB7XHJcbiAgcmV0dXJuICFjb21wYXJlUHJvcHMobm9kZS5vbGRQcm9wcywgbm9kZS5wZW5kaW5nUHJvcHMpO1xyXG59XHJcblxyXG4vKipcclxuICogVXBkYXRlcyB2aXJ0dWFsIG5vZGUgYW5kIGlmIGl0IGlzIGNvbXBvbmVudCB0aGVuIHRyeSB0byBnZXQgbmV3IHJlbmRlciByZXN1bHQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICovXHJcbmZ1bmN0aW9uIHVwZGF0ZU5vZGUobm9kZSkge1xyXG4gIG5vZGUuZWZmZWN0ID0gJ1VwZGF0ZSc7XHJcbiAgbm9kZS5wZW5kaW5nVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgaWYgKCFub2RlLmlzVHlwZSgnQ29tcG9uZW50JykpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGxldCByZW5kZXJSZXN1bHQgPSBub2RlLmluc3RhbmNlLnJlbmRlcigpO1xyXG4gIHJlbmRlclJlc3VsdCA9IGZsYXR0ZW5SZW5kZXJSZXN1bHRDaGlsZHJlbihyZW5kZXJSZXN1bHQpO1xyXG4gIGNvbnN0IHN1YnRyZWUgPSBidWlsZFZpcnR1YWxUcmVlKHJlbmRlclJlc3VsdClcclxuXHJcbiAgaWYgKHN1YnRyZWUpIHtcclxuICAgIG5vZGUuZW1wdHkoKTtcclxuICAgIG5vZGUuYXBwZW5kQ2hpbGQoc3VidHJlZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogUmV1c2UgY3VycmVudCB2aXJ0dWFsIG5vZGUgd2l0aCBjaGlsZHJlbiBvZiBuZXcgdmlydHVhbCBub2RlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBjdXJyZW50Tm9kZVxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBuZXdOb2RlXHJcbiAqL1xyXG5mdW5jdGlvbiByZXVzZU5vZGUoY3VycmVudE5vZGUsIG5ld05vZGUpIHtcclxuICBjb25zdCBjbG9uZWRDdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLmNsb25lKCk7XHJcblxyXG4gIGlmIChuZXdOb2RlLmlzVHlwZSgnQ29tcG9uZW50JykpIHtcclxuICAgIGxldCByZW5kZXJSZXN1bHQgPSBuZXdOb2RlLmluc3RhbmNlLnJlbmRlcigpO1xyXG4gICAgcmVuZGVyUmVzdWx0ID0gZmxhdHRlblJlbmRlclJlc3VsdENoaWxkcmVuKHJlbmRlclJlc3VsdCk7XHJcbiAgICBjb25zdCBzdWJ0cmVlID0gYnVpbGRWaXJ0dWFsVHJlZShyZW5kZXJSZXN1bHQpXHJcblxyXG4gICAgaWYgKHN1YnRyZWUpIHtcclxuICAgICAgbmV3Tm9kZS5lbXB0eSgpO1xyXG4gICAgICBuZXdOb2RlLmFwcGVuZENoaWxkKHN1YnRyZWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvbmVkQ3VycmVudE5vZGUucGFyZW50ID0gbmV3Tm9kZS5wYXJlbnQ7XHJcbiAgY2xvbmVkQ3VycmVudE5vZGUuY2hpbGRyZW4gPSBuZXdOb2RlLmNoaWxkcmVuO1xyXG5cclxuICBuZXdOb2RlLmNvcHlGcm9tKGNsb25lZEN1cnJlbnROb2RlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZpbmRzIGEgdmlydHVhbCBub2RlIGJhc2VkIG9uIGl0J3MgZGVmaW5lZCBrZXkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxyXG4gKi9cclxuZnVuY3Rpb24gZmluZE5vZGVXaXRoS2V5KG5vZGUsIGtleSkge1xyXG4gIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xyXG4gICAgaWYgKGNoaWxkLmtleSA9PT0ga2V5KSB7XHJcbiAgICAgIHJldHVybiBjaGlsZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogRmluZHMgYSBtYXRjaGluZyBjaGlsZCBpbiBjdXJyZW50IG5vZGUgYmFzZWQgb24gcG9zaXRpb24gb3Iga2V5LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBjdXJyZW50Tm9kZVxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBuZXdDaGlsZE5vZGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uXHJcbiAqL1xyXG5mdW5jdGlvbiBmaW5kTWF0Y2hpbmdDaGlsZE5vZGUoY3VycmVudE5vZGUsIG5ld0NoaWxkTm9kZSwgcG9zaXRpb24pIHtcclxuICAvKiogQHR5cGUge1ZpcnR1YWxOb2RlfSAqL1xyXG4gIGxldCBmb3VuZE5vZGUgPSBudWxsXHJcblxyXG4gIGlmICghY3VycmVudE5vZGUpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgaWYgKG5ld0NoaWxkTm9kZS5rZXkpIHtcclxuICAgIGZvdW5kTm9kZSA9IGZpbmROb2RlV2l0aEtleShjdXJyZW50Tm9kZSwgbmV3Q2hpbGROb2RlLmtleSk7XHJcbiAgfVxyXG5cclxuICBpZiAoZm91bmROb2RlKSB7XHJcbiAgICByZXR1cm4gZm91bmROb2RlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA8PSBwb3NpdGlvbikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY3VycmVudE5vZGUuY2hpbGRyZW5bcG9zaXRpb25dO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUxhc3RNb3VudGVkTm9kZSgpIHtcclxuICByZXR1cm4gbGFzdE1vdW50ZWRWaXJ0dWFsTm9kZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbXBhcmVzIG5vZGVzIGF0IHRoZSBzYW1lIHBvc2l0aW9uIGluIHR3byBkaWZmZXJlbnQgdHJlZXMgYW5kIG1hcmtzIGVmZmVjdHNcclxuICogdGhhdCBuZWVkcyB0byBiZSBsYXRlciBwcm9jZXNzZWQuXHJcbiAqXHJcbiAqIFBvc3NpYmxlIGVmZmVjdHM6XHJcbiAqIC0gUGxhY2VtZW50IChtYXJrZWQgZm9yIHBsYWNpbmcgYXMgbmV3IERPTSBlbGVtZW50KVxyXG4gKiAtIFVwZGF0ZSAobWFya2VkIGZvciB1cGRhdGluZyBwcm9wcyBvZiBET00gZWxlbWVudClcclxuICogLSBEZWxldGlvbiAobWFya2VkIGZvciByZW1vdmluZyBET00gZWxlbWVudClcclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gY3VycmVudE5vZGVcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbmV3Tm9kZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlY29uY2lsZShjdXJyZW50Tm9kZSwgbmV3Tm9kZSkge1xyXG4gIGlmIChjdXJyZW50Tm9kZSAmJiBjdXJyZW50Tm9kZS50YWcgIT09IG5ld05vZGUudGFnKSB7XHJcbiAgICBjdXJyZW50Tm9kZS5lZmZlY3QgPSAnRGVsZXRpb24nO1xyXG4gICAgbW91bnRWaXJ0dWFsU3VidHJlZShuZXdOb2RlKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmICghY3VycmVudE5vZGUpIHtcclxuICAgIG1vdW50VmlydHVhbFN1YnRyZWUobmV3Tm9kZSk7XHJcbiAgICByZXR1cm47XHJcbiAgfSBlbHNlIGlmICghbmV3Tm9kZS5pc1R5cGUoJ1Jvb3QnKSkge1xyXG4gICAgY29weU5vZGVSZWZlcmVuY2VzKGN1cnJlbnROb2RlLCBuZXdOb2RlKTtcclxuXHJcbiAgICBpZiAoc2hvdWxkVXBkYXRlTm9kZShuZXdOb2RlKSkge1xyXG4gICAgICB1cGRhdGVOb2RlKG5ld05vZGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV1c2VOb2RlKGN1cnJlbnROb2RlLCBuZXdOb2RlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHByb2Nlc3NlZENoaWxkcmVuID0gW107XHJcbiAgbmV3Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBtYXRjaGluZ0NoaWxkID0gZmluZE1hdGNoaW5nQ2hpbGROb2RlKGN1cnJlbnROb2RlLCBjaGlsZE5vZGUsIGluZGV4KTtcclxuXHJcbiAgICByZWNvbmNpbGUobWF0Y2hpbmdDaGlsZCwgY2hpbGROb2RlKTtcclxuICAgIHByb2Nlc3NlZENoaWxkcmVuLnB1c2gobWF0Y2hpbmdDaGlsZCk7XHJcbiAgfSk7XHJcblxyXG4gIGN1cnJlbnROb2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcclxuICAgIGlmICghcHJvY2Vzc2VkQ2hpbGRyZW4uaW5jbHVkZXMoY2hpbGROb2RlKSkge1xyXG4gICAgICBjaGlsZE5vZGUuZWZmZWN0ID0gJ0RlbGV0aW9uJztcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRyYXZlcnNlIHRocm91Z2ggYWxsIHZpcnR1YWwgbm9kZXMgaW4gdmlydHVhbCB0cmVlIGFuZCByZXNvbHZlIGVmZmVjdHMgdGhhdCBuZWVkcyB0byBiZSBwcm9jZXNzZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uXHJcbiAqIEByZXR1cm5zIHtTcGFya0pTLkVmZmVjdFtdfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVFZmZlY3RzRnJvbU5vZGVzKG5vZGUsIHBvc2l0aW9uID0gMCkge1xyXG4gIC8qKiBAdHlwZSB7U3BhcmtKUy5FZmZlY3RbXX0gKi9cclxuICBsZXQgZWZmZWN0cyA9IFtdO1xyXG5cclxuICBpZiAoIW5vZGUpIHtcclxuICAgIHJldHVybiBlZmZlY3RzO1xyXG4gIH1cclxuXHJcbiAgaWYgKG5vZGUuZWZmZWN0ICE9PSAnJykge1xyXG4gICAgZWZmZWN0cy5wdXNoKHtcclxuICAgICAgdHlwZTogbm9kZS5lZmZlY3QsXHJcbiAgICAgIHBhcmVudDogbm9kZS5wYXJlbnQsXHJcbiAgICAgIG5vZGVSZWY6IG5vZGUsXHJcbiAgICAgIHBvc2l0aW9uLFxyXG4gICAgfSk7XHJcbiAgICBub2RlLmVmZmVjdCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcclxuICAgIGVmZmVjdHMgPSBbXHJcbiAgICAgIC4uLmVmZmVjdHMsXHJcbiAgICAgIC4uLnJlc29sdmVFZmZlY3RzRnJvbU5vZGVzKGNoaWxkLCBpbmRleCksXHJcbiAgICBdO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZWZmZWN0cztcclxufVxyXG5cclxuLyoqXHJcbiAqIENsZWFucyBhbGwgaW5kaWNhdG9ycyBhbmQgZWZmZWN0cyBmcm9tIHZpcnR1YWwgdHJ1ZS5cclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbm9kZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuTm9kZXMobm9kZSkge1xyXG4gIG5vZGUuZWZmZWN0ID0gJyc7XHJcbiAgbm9kZS5zdGF0ZUNoYW5nZWQgPSBmYWxzZTtcclxuXHJcbiAgaWYgKCFjb21wYXJlUHJvcHMobm9kZS5vbGRQcm9wcywgbm9kZS5wZW5kaW5nUHJvcHMpKSB7XHJcbiAgICBub2RlLm9sZFByb3BzID0gbm9kZS5wZW5kaW5nUHJvcHM7XHJcbiAgfVxyXG5cclxuICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICBjbGVhbk5vZGVzKGNoaWxkKTtcclxuICB9KTtcclxufSIsImltcG9ydCB7YnVpbGRWaXJ0dWFsVHJlZVJvb3QsIGZpbmROb2RlQnlDb21wb25lbnR9IGZyb20gXCJAL3ZpcnR1YWwtbm9kZVwiO1xyXG5pbXBvcnQge2NsZWFuTm9kZXMsIHJlY29uY2lsZSwgcmVzb2x2ZUVmZmVjdHNGcm9tTm9kZXMsIHJlc29sdmVMYXN0TW91bnRlZE5vZGV9IGZyb20gXCJAL3JlY29uY2lsZXJcIjtcclxuaW1wb3J0IHtjcmVhdGVFbGVtZW50LCB1bm1vdW50Tm9kZSwgdXBkYXRlRWxlbWVudH0gZnJvbSBcIkAvZG9tXCI7XHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIGNvbXBvbmVudCBub2RlcyBhcmUgcmVhZHkgdG8gdHJpZ2dlciBob29rcyBmb3IgbW91bnRpbmcgb3IgdXBkYXRpbmcuXHJcbiAqIFdoaWNoIGhvb2sgdG8gdHJpZ2dlciBkZXBlbmRzIG9uIGdpdmVuIGFjdGlvbi5cclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZVtdfSBjb21wb25lbnROb2Rlc1xyXG4gKiBAcGFyYW0geydtb3VudCd8J3VwZGF0ZSd9YWN0aW9uXHJcbiAqL1xyXG5mdW5jdGlvbiBwcm9jZXNzQ29tcG9uZW50Tm9kZXMoY29tcG9uZW50Tm9kZXMsIGFjdGlvbiA9ICdtb3VudCcpIHtcclxuICBpZiAoIVsnbW91bnQnLCAndXBkYXRlJ10uaW5jbHVkZXMoYWN0aW9uKSkge1xyXG4gICAgYWN0aW9uID0gJ21vdW50JztcclxuICB9XHJcblxyXG4gIHdoaWxlIChjb21wb25lbnROb2Rlcy5sZW5ndGggPiAwKSB7XHJcbiAgICBpZiAoYWN0aW9uID09PSAnbW91bnQnICYmICFjb21wb25lbnROb2Rlc1swXS5hbGxDaGlsZHJlbk1vdW50ZWQoKSkge1xyXG4gICAgICBicmVhaztcclxuICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSAndXBkYXRlJyAmJiAhY29tcG9uZW50Tm9kZXNbMF0uYWxsQ2hpbGRyZW5VcGRhdGVkKCkpIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbiA9PT0gJ21vdW50Jykge1xyXG4gICAgICBjb21wb25lbnROb2Rlc1swXS5tb3VudGVkID0gdHJ1ZTtcclxuICAgICAgY29tcG9uZW50Tm9kZXNbMF0uaW5zdGFuY2UubW91bnRlZCgpO1xyXG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICd1cGRhdGUnKSB7XHJcbiAgICAgIGNvbXBvbmVudE5vZGVzWzBdLmluc3RhbmNlLnVwZGF0ZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnROb2Rlcy5zaGlmdCgpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEhhbmRsZXMgZWZmZWN0IGZvciBwbGFjaW5nIGEgbmV3IEhUTUwgZWxlbWVudCBvciB0ZXh0IG5vZGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BhcmtKUy5FZmZlY3R9IGVmZmVjdFxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlW119IGNvbXBvbmVudE5vZGVzXHJcbiAqL1xyXG5mdW5jdGlvbiBoYW5kbGVQbGFjZW1lbnQoZWZmZWN0LCBjb21wb25lbnROb2Rlcykge1xyXG4gIGlmIChlZmZlY3Qubm9kZVJlZi5pc1R5cGUoJ0NvbXBvbmVudCcpKSB7XHJcbiAgICBjb21wb25lbnROb2Rlcy51bnNoaWZ0KGVmZmVjdC5ub2RlUmVmKTtcclxuICB9XHJcblxyXG4gIGlmIChlZmZlY3Qubm9kZVJlZi5pc1R5cGUoJ0VsZW1lbnQnKSB8fCBlZmZlY3Qubm9kZVJlZi5pc1R5cGUoJ1RleHQnKSkge1xyXG4gICAgY3JlYXRlRWxlbWVudChlZmZlY3Qubm9kZVJlZiwgZWZmZWN0LnBvc2l0aW9uKTtcclxuXHJcbiAgICBpZiAoZWZmZWN0Lm5vZGVSZWYucmVmKSB7XHJcbiAgICAgIGVmZmVjdC5ub2RlUmVmLnJlZi5jdXJyZW50ID0gZWZmZWN0Lm5vZGVSZWYuZWxlbWVudFJlZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb2Nlc3NDb21wb25lbnROb2Rlcyhjb21wb25lbnROb2RlcywgJ21vdW50Jyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBIYW5kbGVzIGVmZmVjdCBmb3IgdXBkYXRpbmcgZXhpc3RpbmcgSFRNTCBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwYXJrSlMuRWZmZWN0fSBlZmZlY3RcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZVtdfSBjb21wb25lbnROb2Rlc1xyXG4gKi9cclxuZnVuY3Rpb24gaGFuZGxlVXBkYXRlKGVmZmVjdCwgY29tcG9uZW50Tm9kZXMpIHtcclxuICBlZmZlY3Qubm9kZVJlZi5wZW5kaW5nVXBkYXRlID0gZmFsc2U7XHJcblxyXG4gIGlmIChlZmZlY3Qubm9kZVJlZi5pc1R5cGUoJ0NvbXBvbmVudCcpKSB7XHJcbiAgICBjb21wb25lbnROb2Rlcy51bnNoaWZ0KGVmZmVjdC5ub2RlUmVmKTtcclxuICB9XHJcblxyXG4gIGlmIChlZmZlY3Qubm9kZVJlZi5pc1R5cGUoJ0VsZW1lbnQnKSkge1xyXG4gICAgdXBkYXRlRWxlbWVudChlZmZlY3Qubm9kZVJlZik7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzQ29tcG9uZW50Tm9kZXMoY29tcG9uZW50Tm9kZXMsICd1cGRhdGUnKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwYXJrIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovXHJcbiAgICB0aGlzLl9yb290RWwgPSBudWxsO1xyXG4gICAgLyoqIEB0eXBlIHtTcGFya0pTLlJlbmRlckNhbGxiYWNrfSAqL1xyXG4gICAgdGhpcy5fcm9vdEZ1bmMgPSBudWxsO1xyXG4gICAgLyoqIEB0eXBlIHtWaXJ0dWFsTm9kZX0gKi9cclxuICAgIHRoaXMuX3ZpcnR1YWxUcmVlID0gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgYSBmdW5jdGlvbiB0aGF0IHJldHVybiBKU1ggc3RydWN0dXJlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsoKSA9PiBTcGFya0pTLlJlbmRlclJlc3VsdH0gcm9vdEZuXHJcbiAgICovXHJcbiAgc2V0Um9vdEZ1bmN0aW9uKHJvb3RGbikge1xyXG4gICAgdGhpcy5fcm9vdEZ1bmMgPSByb290Rm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNb3VudHMgYXBwbGljYXRpb24gdG8gSFRNTCBlbGVtZW50IGFuZCB0cmlnZ2VyIHJlbmRlci5cclxuICAgKiBJdCB0aHJvd3MgZXJyb3IgaWYgcm9vdCBlbGVtZW50IGlzbid0IGZvdW5kLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxzdHJpbmd9IG1vdW50RWxcclxuICAgKi9cclxuICBtb3VudChtb3VudEVsKSB7XHJcbiAgICBpZiAodHlwZW9mIG1vdW50RWwgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRoaXMuX3Jvb3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobW91bnRFbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9yb290RWwgPSBtb3VudEVsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghKHRoaXMuX3Jvb3RFbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGEgcm9vdCBlbGVtZW50Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICghdGhpcy5fcm9vdEVsKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgYSByb290IGVsZW1lbnQnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW5kZXJSZXN1bHQgPSB0aGlzLl9yb290RnVuYygpO1xyXG4gICAgY29uc3QgbmV3VmlydHVhbFRyZWUgPSBidWlsZFZpcnR1YWxUcmVlUm9vdChyZW5kZXJSZXN1bHQpO1xyXG5cclxuICAgIHJlY29uY2lsZSh0aGlzLl92aXJ0dWFsVHJlZSwgbmV3VmlydHVhbFRyZWUpO1xyXG5cclxuICAgIGNvbnN0IGRlbGV0aW9ucyA9IHJlc29sdmVFZmZlY3RzRnJvbU5vZGVzKHRoaXMuX3ZpcnR1YWxUcmVlKTtcclxuICAgIGNvbnN0IG5ld0NoYW5nZXMgPSByZXNvbHZlRWZmZWN0c0Zyb21Ob2RlcyhuZXdWaXJ0dWFsVHJlZSk7XHJcblxyXG4gICAgZGVsZXRpb25zLmZvckVhY2goKGVmZmVjdCkgPT4ge1xyXG4gICAgICBpZiAoZWZmZWN0LnR5cGUgPT09ICdEZWxldGlvbicpIHtcclxuICAgICAgICB1bm1vdW50Tm9kZShlZmZlY3Qubm9kZVJlZik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX3ZpcnR1YWxUcmVlID0gbmV3VmlydHVhbFRyZWU7XHJcbiAgICB0aGlzLl92aXJ0dWFsVHJlZS5lbGVtZW50UmVmID0gdGhpcy5fcm9vdEVsO1xyXG5cclxuICAgIC8qKiBAdHlwZSB7VmlydHVhbE5vZGVbXX0gKi9cclxuICAgIGNvbnN0IG1vdW50ZWRDb21wb25lbnROb2RlcyA9IFtdO1xyXG4gICAgLyoqIEB0eXBlIHtWaXJ0dWFsTm9kZVtdfSAqL1xyXG4gICAgY29uc3QgdXBkYXRlZENvbXBvbmVudE5vZGVzID0gW107XHJcbiAgICBjb25zb2xlLmxvZyhuZXdDaGFuZ2VzKTtcclxuICAgIG5ld0NoYW5nZXMuZm9yRWFjaCgoZWZmZWN0KSA9PiB7XHJcbiAgICAgIGlmIChlZmZlY3QudHlwZSA9PT0gJ1BsYWNlbWVudCcpIHtcclxuICAgICAgICBoYW5kbGVQbGFjZW1lbnQoZWZmZWN0LCBtb3VudGVkQ29tcG9uZW50Tm9kZXMpO1xyXG4gICAgICB9IGVsc2UgaWYgKGVmZmVjdC50eXBlID09PSAnVXBkYXRlJykge1xyXG4gICAgICAgIGhhbmRsZVVwZGF0ZShlZmZlY3QsIHVwZGF0ZWRDb21wb25lbnROb2Rlcyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNsZWFuTm9kZXModGhpcy5fdmlydHVhbFRyZWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50XHJcbiAgICovXHJcbiAgb25TdGF0ZUNoYW5nZWQoY29tcG9uZW50KSB7XHJcbiAgICBjb25zdCBmb3VuZE5vZGUgPSBmaW5kTm9kZUJ5Q29tcG9uZW50KHRoaXMuX3ZpcnR1YWxUcmVlLCBjb21wb25lbnQpO1xyXG5cclxuICAgIGlmICghZm91bmROb2RlKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignU2tpcHBpbmcgcmVuZGVyLiBBIHJlbmRlciBub2RlIG5vdCBmb3VuZCBmb3IgY29tcG9uZW50OiAnICsgY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVxdWVzdCB0byByZS1yZW5kZXIgYXBwbGljYXRpb24uXHJcbiAgICBmb3VuZE5vZGUuc3RhdGVDaGFuZ2VkID0gdHJ1ZTtcclxuICAgIGZvdW5kTm9kZS5zdGF0ZSA9IGNvbXBvbmVudC5zdGF0ZTtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVmKHZhbHVlKSB7XHJcbiAgY29uc3QgbGFzdE1vdW50ZWROb2RlID0gcmVzb2x2ZUxhc3RNb3VudGVkTm9kZSgpO1xyXG5cclxuICBpZiAoIWxhc3RNb3VudGVkTm9kZSkge1xyXG4gICAgY29uc29sZS53YXJuKCdTa2lwcGluZyBjcmVhdGVSZWYuIExhc3QgbW91bnRlZCB2aXJ0dWFsIG5vZGUgbm90IGZvdW5kLiBDYXVzZTogcHJvYmFibHkgY2FsbGluZyBjcmVhdGVSZWYgb3V0c2lkZSBvZiBjb25zdHJ1Y3Rvci4nKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlZiA9IHtcclxuICAgIGN1cnJlbnQ6IHZhbHVlXHJcbiAgfVxyXG5cclxuICBsYXN0TW91bnRlZE5vZGUucmVmcy5wdXNoKHJlZik7XHJcbiAgcmV0dXJuIHJlZjtcclxufSIsImV4cG9ydCBjb25zdCBFbXB0eU9iamVjdCA9IHt9O1xyXG5cclxuLyoqXHJcbiAqIEZsYXR0ZW4gY2hpbGRyZW4gb2YgcmVuZGVyIHJlc3VsdCBpZiBhbnkgb2YgdGhlbSBpcyB0eXBlIG9mIGFycmF5LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwYXJrSlMuUmVuZGVyUmVzdWx0fSByZW5kZXJSZXN1bHRcclxuICogQHJldHVybnMge1NwYXJrSlMuUmVuZGVyUmVzdWx0fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW5SZW5kZXJSZXN1bHRDaGlsZHJlbihyZW5kZXJSZXN1bHQpIHtcclxuICBpZiAodHlwZW9mIHJlbmRlclJlc3VsdCA9PT0gJ3N0cmluZycpIHtcclxuICAgIHJldHVybiByZW5kZXJSZXN1bHQ7XHJcbiAgfVxyXG5cclxuICAvKiogQHR5cGUge1JlbmRlclJlc3VsdFtdfSAqL1xyXG4gIGxldCBjaGlsZHJlbiA9IFtdO1xyXG4gIHJlbmRlclJlc3VsdC5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcclxuICAgICAgY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjaGlsZHJlbiA9IFtcclxuICAgICAgLi4uY2hpbGRyZW4sXHJcbiAgICAgIC4uLmNoaWxkLFxyXG4gICAgXTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnJlbmRlclJlc3VsdCxcclxuICAgIGNoaWxkcmVuLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVDbGFzc05hbWUodmFsdWUpIHtcclxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xyXG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBsZXQgY2xhc3NUb2tlbnMgPSAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyBPYmplY3Qua2V5cyh2YWx1ZSkuZmlsdGVyKChjbGFzc05hbWUpID0+IHtcclxuICAgIHJldHVybiB2YWx1ZVtjbGFzc05hbWVdO1xyXG4gIH0pIDogdmFsdWU7XHJcblxyXG4gIGNsYXNzVG9rZW5zID0gY2xhc3NUb2tlbnMuZmlsdGVyKChjbGFzc05hbWUsIGluZGV4LCB0b2tlbnMpID0+IHtcclxuICAgIHJldHVybiB0b2tlbnMuaW5kZXhPZihjbGFzc05hbWUpID09PSBpbmRleDtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGNsYXNzVG9rZW5zLmpvaW4oJyAnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVTdHlsZSh2YWx1ZSkge1xyXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdTdHlsZSBjYW5ub3QgYmUgdXNlIGFzIGFycmF5IScpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcclxuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHZhbHVlKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgaWYgKC9eW2Etel0qW0EtWl0vLnRlc3Qoa2V5KSkge1xyXG4gICAgICBjb25zdCBrZXlUb2tlbnMgPSBrZXkuc3BsaXQoLyg/PVtBLVpdKS8pLm1hcCgodG9rZW4pID0+IHtcclxuICAgICAgICByZXR1cm4gdG9rZW4udG9Mb3dlckNhc2UoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBrZXkgPSBrZXlUb2tlbnMuam9pbignLScpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgJHtrZXl9OiAke3ZhbHVlfWA7XHJcbiAgfSkuam9pbignOyAnKTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BhcmtKUy5Qcm9wc30gb2xkUHJvcHNcclxuICogQHBhcmFtIHtTcGFya0pTLlByb3BzfSBwZW5kaW5nUHJvcHNcclxuICogQHJldHVybnMge1NwYXJrSlMuUHJvcHNEaWZmW119XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGlmZlByb3BzKG9sZFByb3BzLCBwZW5kaW5nUHJvcHMpIHtcclxuICAvKiogQHR5cGUge1NwYXJrSlMuUHJvcHNEaWZmW119ICovXHJcbiAgY29uc3QgcHJvcERpZmZzID0gW107XHJcblxyXG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHBlbmRpbmdQcm9wcykpIHtcclxuICAgIGlmIChvbGRQcm9wc1trZXldID09PSB1bmRlZmluZWQgfHwgb2xkUHJvcHNba2V5XSA9PT0gbnVsbCkge1xyXG4gICAgICBwcm9wRGlmZnMucHVzaCh7IHR5cGU6ICdBZGQnLCBuYW1lOiBrZXksIHZhbHVlIH0pO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gb2xkUHJvcHNba2V5XSkge1xyXG4gICAgICBwcm9wRGlmZnMucHVzaCh7IHR5cGU6ICdVcGRhdGUnLCBuYW1lOiBrZXksIHZhbHVlLCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9sZFByb3BzKSkge1xyXG4gICAgaWYgKHBlbmRpbmdQcm9wc1trZXldID09PSB1bmRlZmluZWQgfHwgcGVuZGluZ1Byb3BzW2tleV0gPT09IG51bGwpIHtcclxuICAgICAgcHJvcERpZmZzLnB1c2goeyB0eXBlOiAnUmVtb3ZlJywgbmFtZToga2V5LCB2YWx1ZSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBwcm9wRGlmZnM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBub2RlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmluZENsb3Nlc3RET01Ob2RlKG5vZGUpIHtcclxuICBsZXQgY3VycmVudE5vZGUgPSBub2RlO1xyXG5cclxuICB3aGlsZSAoY3VycmVudE5vZGUgJiYgY3VycmVudE5vZGUucGFyZW50KSB7XHJcbiAgICBpZiAoY3VycmVudE5vZGUucGFyZW50LmVsZW1lbnRSZWYpIHtcclxuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlLnBhcmVudC5lbGVtZW50UmVmO1xyXG4gICAgfVxyXG5cclxuICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn0iLCJpbXBvcnQge0VtcHR5T2JqZWN0fSBmcm9tIFwiQC91dGlsc1wiO1xyXG5pbXBvcnQgaHRtbFRhZ3MgZnJvbSBcImh0bWwtdGFnc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlydHVhbE5vZGUge1xyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemVzIHZpcnR1YWwgbm9kZSB3aXRoIHR5cGUsIHRhZyBhbmQgcHJvcGVydGllcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3BhcmtKUy5Ob2RlVHlwZX0gdHlwZVxyXG4gICAqIEBwYXJhbSB7U3BhcmtKUy5Ob2RlVGFnfSB0YWdcclxuICAgKiBAcGFyYW0ge1NwYXJrSlMuTm9kZVByb3BzfSBwcm9wc1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHR5cGUsIHRhZywgcHJvcHMgPSB7fSkge1xyXG4gICAgY29uc3QgeyBrZXksIHJlZiwgLi4ub3RoZXJQcm9wcyB9ID0gcHJvcHM7XHJcblxyXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd8dW5kZWZpbmVkfSAqL1xyXG4gICAgdGhpcy5rZXkgPSBrZXk7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy50YWcgPSB0YWc7XHJcblxyXG4gICAgLy8gUmVmZXJlbmNlIHByb3BlcnRpZXNcclxuICAgIC8qKiBAdHlwZSB7U3BhcmtKUy5Qcm9wc30gKi9cclxuICAgIHRoaXMub2xkUHJvcHMgPSBFbXB0eU9iamVjdDtcclxuICAgIC8qKiBAdHlwZSB7U3BhcmtKUy5Qcm9wc30gKi9cclxuICAgIHRoaXMucGVuZGluZ1Byb3BzID0gb3RoZXJQcm9wcyA/PyBFbXB0eU9iamVjdDtcclxuICAgIC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgYW55Pn0gKi9cclxuICAgIHRoaXMuc3RhdGUgPSBFbXB0eU9iamVjdDtcclxuICAgIC8qKiBAdHlwZSB7U3BhcmtKUy5SZWZPYmplY3RbXX0gKi9cclxuICAgIHRoaXMucmVmcyA9IFtdO1xyXG4gICAgLyoqIEB0eXBlIHtTcGFya0pTLlJlZk9iamVjdHxudWxsfSAqL1xyXG4gICAgdGhpcy5yZWYgPSByZWY7XHJcbiAgICAvKiogQHR5cGUge0NvbXBvbmVudHxudWxsfSAqL1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XHJcbiAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50fG51bGx9ICovXHJcbiAgICB0aGlzLmVsZW1lbnRSZWYgPSBudWxsO1xyXG4gICAgLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBTcGFya0pTLkV2ZW50TGlzdGVuZXJbXT59ICovXHJcbiAgICB0aGlzLmxpc3RlbmVycyA9IEVtcHR5T2JqZWN0O1xyXG5cclxuICAgIC8vIEluZGljYXRvciBwcm9wZXJ0aWVzXHJcbiAgICAvKiogQHR5cGUge1NwYXJrSlMuRWZmZWN0VHlwZX0gKi9cclxuICAgIHRoaXMuZWZmZWN0ID0gJyc7XHJcbiAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cclxuICAgIHRoaXMucGVuZGluZ1VwZGF0ZSA9IGZhbHNlO1xyXG4gICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xyXG4gICAgdGhpcy5zdGF0ZUNoYW5nZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBOb2RlIHByb3BlcnRpZXNcclxuICAgIC8qKiBAdHlwZSB7VmlydHVhbE5vZGV8bnVsbH0gKi9cclxuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcclxuICAgIC8qKiBAdHlwZSB7VmlydHVhbE5vZGVbXX0gKi9cclxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiB2aXJ0dWFsIG5vZGUgaXMgb2YgY2VydGFpbiB0eXBlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTcGFya0pTLk5vZGVUeXBlfSB0eXBlXHJcbiAgICovXHJcbiAgaXNUeXBlKHR5cGUpIHtcclxuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IHR5cGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgYWxsIGNoaWxkcmVuIHdlcmUgbW91bnRlZCBpbnRvIERPTS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAqL1xyXG4gIGFsbENoaWxkcmVuTW91bnRlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLnJlZHVjZSgoY291bnQsIGNoaWxkTm9kZSkgPT4ge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcblxyXG4gICAgICBpZiAoY2hpbGROb2RlLmlzVHlwZSgnRWxlbWVudCcpIHx8IGNoaWxkTm9kZS5pc1R5cGUoJ1RleHQnKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IGNoaWxkTm9kZS5lbGVtZW50UmVmICE9PSBudWxsO1xyXG4gICAgICB9IGVsc2UgaWYgKGNoaWxkTm9kZS5pc1R5cGUoJ0NvbXBvbmVudCcpKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gY2hpbGROb2RlLm1vdW50ZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBjb3VudCArIChyZXN1bHQgJiYgY2hpbGROb2RlLmFsbENoaWxkcmVuTW91bnRlZCgpID8gMSA6IDApO1xyXG4gICAgfSwgMCkgPT09IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIGFsbCBjaGlsZHJlbiB3ZXJlIHVwZGF0ZWQgaW4gRE9NLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgYWxsQ2hpbGRyZW5VcGRhdGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ucmVkdWNlKChjb3VudCwgY2hpbGROb2RlKSA9PiB7XHJcbiAgICAgIHJldHVybiBjb3VudCArICghY2hpbGROb2RlLnBlbmRpbmdVcGRhdGUgJiYgY2hpbGROb2RlLmFsbENoaWxkcmVuVXBkYXRlZCgpID8gMSA6IDApO1xyXG4gICAgfSwgMCkgPT09IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhIGxpc3RlbmVyIHRvIEhUTUwgZWxlbWVudCBhbmQgc3RvcmUgaXQncyByZWZlcmVuY2UgaW50byBsaXN0ZW5lcnMgb2YgdmlydHVhbCBub2RlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcclxuICAgKiBAcGFyYW0ge1NwYXJrSlMuRXZlbnRMaXN0ZW5lcn0gbGlzdGVuZXJcclxuICAgKi9cclxuICBhZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XHJcbiAgICBpZiAoIXRoaXMuZWxlbWVudFJlZikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmxpc3RlbmVyc1t0eXBlXSkge1xyXG4gICAgICB0aGlzLmxpc3RlbmVyc1t0eXBlXSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZWxlbWVudFJlZi5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKTtcclxuICAgIHRoaXMubGlzdGVuZXJzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBhbiBldmVudCBsaXN0ZW5lciBmcm9tIEhUTUwgZWxlbWVudCBhbmQgZnJvbSBsaXN0ZW5lcnMgb2YgdmlydHVhbCBub2RlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcclxuICAgKiBAcGFyYW0ge1NwYXJrSlMuRXZlbnRMaXN0ZW5lcn0gbGlzdGVuZXJcclxuICAgKi9cclxuICByZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XHJcbiAgICAvKiogQHR5cGUge0V2ZW50TGlzdGVuZXJbXX0gKi9cclxuICAgIGNvbnN0IGxpc3RlbmVyc1dpdGhUeXBlID0gdGhpcy5saXN0ZW5lcnNbdHlwZV0gPz8gW107XHJcblxyXG4gICAgaWYgKGxpc3RlbmVyc1dpdGhUeXBlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZvdW5kTGlzdGVuZXJJbmRleCA9IC0xO1xyXG4gICAgY29uc3QgZm91bmRMaXN0ZW5lciA9IGxpc3RlbmVyc1dpdGhUeXBlLmZpbmQoKGFub3RoZXJMaXN0ZW5lciwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGFub3RoZXJMaXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcclxuICAgICAgICBmb3VuZExpc3RlbmVySW5kZXggPSBpbmRleDtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFmb3VuZExpc3RlbmVyKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gZXZlbnQgbGlzdGVuZXIgZm9yICR7dHlwZX0gb24gbm9kZSAke3RoaXMudGFnfSBub3QgZm91bmQuIENhdXNlOiBldmVudCBsaXN0ZW5lciBwcm9iYWJseSB3YXNuJ3QgYm91bmQgaW4gY29uc3RydWN0b3IuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbGVtZW50UmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpO1xyXG4gICAgbGlzdGVuZXJzV2l0aFR5cGUuc3BsaWNlKGZvdW5kTGlzdGVuZXJJbmRleCwgMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhbnMgYWxsIGxpc3RlbmVycyBmcm9tIEhUTUwgZWxlbWVudCBhbmQgZnJvbSBsaXN0ZW5lcnMgb2YgdmlydHVhbCBub2RlLlxyXG4gICAqL1xyXG4gIGNsZWFuTGlzdGVuZXJzKCkge1xyXG4gICAgZm9yIChjb25zdCBbdHlwZSwgbGlzdGVuZXJzXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLmxpc3RlbmVycykpIHtcclxuICAgICAgaWYgKCF0aGlzLmVsZW1lbnRSZWYpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5saXN0ZW5lcnMgPSBFbXB0eU9iamVjdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgY29tcG9uZW50IGFuZCBjb3B5IGl0J3Mgc3RhdGUgaW50byB2aXJ0dWFsIG9kZSdzIHN0YXRlLlxyXG4gICAqL1xyXG4gIGNyZWF0ZUNvbXBvbmVudCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgdGhpcy50YWcodGhpcy5wZW5kaW5nUHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuaW5zdGFuY2Uuc3RhdGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBcHBlbmRzIGEgY2hpbGQgbm9kZSBpbnRvIGN1cnJlbnQgbm9kZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICAgKi9cclxuICBhcHBlbmRDaGlsZChub2RlKSB7XHJcbiAgICBub2RlLnBhcmVudCA9IHRoaXM7XHJcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2gobm9kZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXBsYWNlcyBhIGNoaWxkIG5vZGUgaW4gY3VycmVudCBub2RlIHdpdGggYSBuZXcgbm9kZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5ld05vZGVcclxuICAgKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBvbGROb2RlXHJcbiAgICovXHJcbiAgcmVwbGFjZUNoaWxkKG5ld05vZGUsIG9sZE5vZGUpIHtcclxuICAgIGNvbnN0IGluZGV4T2YgPSB0aGlzLmNoaWxkcmVuLmluZGV4T2Yob2xkTm9kZSk7XHJcblxyXG4gICAgaWYgKGluZGV4T2YgPj0gMCkge1xyXG4gICAgICBuZXdOb2RlLnBhcmVudCA9IHRoaXM7XHJcbiAgICAgIHRoaXMuY2hpbGRyZW5baW5kZXhPZl0ucGFyZW50ID0gbnVsbDtcclxuICAgICAgdGhpcy5jaGlsZHJlbltpbmRleE9mXSA9IG5ld05vZGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGEgY2hpbGQgbm9kZSBmcm9tIGN1cnJlbnQgbm9kZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICAgKi9cclxuICByZW1vdmVDaGlsZChub2RlKSB7XHJcbiAgICBjb25zdCBpbmRleE9mID0gdGhpcy5jaGlsZHJlbi5pbmRleE9mKG5vZGUpO1xyXG5cclxuICAgIGlmIChpbmRleE9mID49IDApIHtcclxuICAgICAgbm9kZS5wYXJlbnQgPSBudWxsO1xyXG4gICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpbmRleE9mLCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYWxsIGNoaWxkcmVuIGZyb20gY3VycmVudCBub2RlLlxyXG4gICAqL1xyXG4gIGVtcHR5KCkge1xyXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgIG5vZGUucGFyZW50ID0gbnVsbDtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhbm90aGVyIGluc3RhbmNlIHdpdGggc2FtZSBwcm9wZXJ0aWVzLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1ZpcnR1YWxOb2RlfVxyXG4gICAqL1xyXG4gIGNsb25lKCkge1xyXG4gICAgY29uc3QgY2xvbmVkID0gbmV3IFZpcnR1YWxOb2RlKHRoaXMudHlwZSwgdGhpcy50YWcsIHtcclxuICAgICAga2V5OiB0aGlzLmtleSxcclxuICAgICAgLi4udGhpcy5wZW5kaW5nUHJvcHNcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJlZmVyZW5jZSBwcm9wZXJ0aWVzXHJcbiAgICBjbG9uZWQub2xkUHJvcHMgPSB0aGlzLm9sZFByb3BzO1xyXG4gICAgY2xvbmVkLnBlbmRpbmdQcm9wcyA9IHRoaXMucGVuZGluZ1Byb3BzO1xyXG4gICAgY2xvbmVkLnN0YXRlID0gdGhpcy5zdGF0ZTtcclxuICAgIGNsb25lZC5pbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2U7XHJcbiAgICBjbG9uZWQuZWxlbWVudFJlZiA9IHRoaXMuZWxlbWVudFJlZjtcclxuICAgIGNsb25lZC5saXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycztcclxuXHJcbiAgICAvLyBJbmRpY2F0b3IgcHJvcGVydGllc1xyXG4gICAgY2xvbmVkLmVmZmVjdCA9IHRoaXMuZWZmZWN0O1xyXG4gICAgY2xvbmVkLm1vdW50ZWQgPSB0aGlzLm1vdW50ZWQ7XHJcbiAgICBjbG9uZWQucGVuZGluZ1VwZGF0ZSA9IHRoaXMucGVuZGluZ1VwZGF0ZTtcclxuICAgIGNsb25lZC5zdGF0ZUNoYW5nZWQgPSB0aGlzLnN0YXRlQ2hhbmdlZDtcclxuXHJcbiAgICAvLyBOb2RlIHByb3BlcnRpZXNcclxuICAgIGNsb25lZC5wYXJlbnQgPSB0aGlzLnBhcmVudDtcclxuICAgIGNsb25lZC5jaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW47XHJcblxyXG4gICAgcmV0dXJuIGNsb25lZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvcHkgYWxsIGRhdGEgZnJvbSBzb3VyY2UgdmlydHVhbCBub2RlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gc291cmNlTm9kZVxyXG4gICAqL1xyXG4gIGNvcHlGcm9tKHNvdXJjZU5vZGUpIHtcclxuICAgIHRoaXMua2V5ID0gc291cmNlTm9kZS5rZXk7XHJcbiAgICB0aGlzLnR5cGUgPSBzb3VyY2VOb2RlLnR5cGU7XHJcbiAgICB0aGlzLnRhZyA9IHNvdXJjZU5vZGUudGFnO1xyXG5cclxuICAgIC8vIFJlZmVyZW5jZSBwcm9wZXJ0aWVzXHJcbiAgICB0aGlzLm9sZFByb3BzID0gc291cmNlTm9kZS5vbGRQcm9wcztcclxuICAgIHRoaXMucGVuZGluZ1Byb3BzID0gc291cmNlTm9kZS5wZW5kaW5nUHJvcHM7XHJcbiAgICB0aGlzLnN0YXRlID0gc291cmNlTm9kZS5zdGF0ZTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBzb3VyY2VOb2RlLmluc3RhbmNlO1xyXG4gICAgdGhpcy5lbGVtZW50UmVmID0gc291cmNlTm9kZS5lbGVtZW50UmVmO1xyXG4gICAgdGhpcy5saXN0ZW5lcnMgPSBzb3VyY2VOb2RlLmxpc3RlbmVycztcclxuXHJcbiAgICAvLyBJbmRpY2F0b3IgcHJvcGVydGllc1xyXG4gICAgdGhpcy5lZmZlY3QgPSBzb3VyY2VOb2RlLmVmZmVjdDtcclxuICAgIHRoaXMubW91bnRlZCA9IHNvdXJjZU5vZGUubW91bnRlZDtcclxuICAgIHRoaXMucGVuZGluZ1VwZGF0ZSA9IHNvdXJjZU5vZGUucGVuZGluZ1VwZGF0ZTtcclxuICAgIHRoaXMuc3RhdGVDaGFuZ2VkID0gc291cmNlTm9kZS5zdGF0ZUNoYW5nZWQ7XHJcblxyXG4gICAgLy8gTm9kZSBwcm9wZXJ0aWVzXHJcbiAgICB0aGlzLnBhcmVudCA9IHNvdXJjZU5vZGUucGFyZW50O1xyXG4gICAgdGhpcy5jaGlsZHJlbiA9IHNvdXJjZU5vZGUuY2hpbGRyZW47XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtKU1hbXX0ganN4QXJyYXlcclxuICovXHJcbmZ1bmN0aW9uIGNoZWNrS2V5c0luSnN4QXJyYXkoanN4QXJyYXkpIHtcclxuICBjb25zdCB1c2VkS2V5cyA9IFtdO1xyXG5cclxuICByZXR1cm4ganN4QXJyYXkuZXZlcnkoKGl0ZW0pID0+IHtcclxuICAgIGlmICghaXRlbS5hdHRyaWJ1dGVzIHx8ICFpdGVtLmF0dHJpYnV0ZXMua2V5IHx8IHVzZWRLZXlzLmluY2x1ZGVzKGl0ZW0uYXR0cmlidXRlcy5rZXkpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VkS2V5cy5wdXNoKGl0ZW0uYXR0cmlidXRlcy5rZXkpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwYXJrSlMuUmVuZGVyUmVzdWx0fSByZW5kZXJSZXN1bHRcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZXxudWxsfSBwYXJlbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZFZpcnR1YWxUcmVlKHJlbmRlclJlc3VsdCwgcGFyZW50ID0gbnVsbCkge1xyXG4gIGxldCB7XHJcbiAgICBlbGVtZW50TmFtZSA9IHJlbmRlclJlc3VsdCA/PyAnJyxcclxuICAgIGF0dHJpYnV0ZXMgPSB7fSxcclxuICAgIGNoaWxkcmVuID0gW11cclxuICB9ID0gcmVuZGVyUmVzdWx0ID8/IHt9O1xyXG5cclxuICAvKiogQHR5cGUge1ZpcnR1YWxOb2RlfSAqL1xyXG4gIGxldCBub2RlO1xyXG5cclxuICBpZiAodHlwZW9mIGVsZW1lbnROYW1lID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBub2RlID0gbmV3IFZpcnR1YWxOb2RlKCdDb21wb25lbnQnLCBlbGVtZW50TmFtZSwgeyBjaGlsZHJlbiwgLi4uYXR0cmlidXRlcyB9KTtcclxuICAgIGNoaWxkcmVuID0gW107XHJcbiAgfSBlbHNlIGlmIChbLi4uaHRtbFRhZ3NdLmluY2x1ZGVzKGVsZW1lbnROYW1lKSkgeyAvLyBUT0RPOiBhZGQgc3VwcG9ydCBmb3IgU1ZHIGVsZW1lbnRzXHJcbiAgICBub2RlID0gbmV3IFZpcnR1YWxOb2RlKCdFbGVtZW50JywgZWxlbWVudE5hbWUsIGF0dHJpYnV0ZXMpO1xyXG4gIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnROYW1lID09PSAnb2JqZWN0Jykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdPYmplY3QgY2Fubm90IGJlIHJlbmRlcmVkIGFzIEpTWCBub2RlIScpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBub2RlID0gbmV3IFZpcnR1YWxOb2RlKCdUZXh0JywgZWxlbWVudE5hbWUpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHBhcmVudCkge1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG5vZGUpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFjaGlsZHJlbikge1xyXG4gICAgY2hpbGRyZW4gPSBbXTtcclxuICB9XHJcblxyXG4gIGNoaWxkcmVuLmZvckVhY2goY2hpbGROb2RlID0+IHtcclxuICAgIGlmICghY2hpbGROb2RlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZE5vZGUpKSB7XHJcbiAgICAgIGlmICghY2hlY2tLZXlzSW5Kc3hBcnJheShjaGlsZE5vZGUpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEeW5hbWljYWxseSBtYXBwZWQgbm9kZXMgaW4gbG9vcCBtdXN0IGhhdmUgdW5pcXVlIGtleXMgc3BlY2lmaWVkIGluIFwia2V5XCIgcHJvcC5gKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY2hpbGROb2RlLmZvckVhY2goYW5vdGhlckNoaWxkTm9kZSA9PiB7XHJcbiAgICAgICAgYnVpbGRWaXJ0dWFsVHJlZShhbm90aGVyQ2hpbGROb2RlLCBub2RlKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBidWlsZFZpcnR1YWxUcmVlKGNoaWxkTm9kZSwgbm9kZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBub2RlO1xyXG59XHJcblxyXG4vKipcclxuICogRmluZHMgY2xvc2VzdCBwYXJlbnQgYmFzZWQgb24gc2VsZWN0b3IuXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmluZENsb3Nlc3ROb2RlKG5vZGUsIHNlbGVjdG9yKSB7XHJcbiAgaWYgKCFzZWxlY3Rvcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdBIHNlbGVjdG9yIGNhblxcJ3QgYmUgZW1wdHkgc3RyaW5nJyk7XHJcbiAgfVxyXG5cclxuICBsZXQgY3VycmVudE5vZGUgPSBub2RlO1xyXG5cclxuICB3aGlsZSAoY3VycmVudE5vZGU/LnBhcmVudCkge1xyXG4gICAgY29uc3QgcGFyZW50UHJvcHMgPSBjdXJyZW50Tm9kZS5wYXJlbnQucGVuZGluZ1Byb3BzID8/IEVtcHR5T2JqZWN0O1xyXG5cclxuICAgIGlmIChjdXJyZW50Tm9kZS5wYXJlbnQudHlwZSAhPT0gJ2VsZW1lbnQnKSB7XHJcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50O1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2VsZWN0b3Iuc3RhcnRzV2l0aCgnIycpICYmIHBhcmVudFByb3BzLmlkID09PSBzZWxlY3Rvci5zdWJzdHJpbmcoMSkpIHtcclxuICAgICAgcmV0dXJuICBjdXJyZW50Tm9kZS5wYXJlbnQ7XHJcbiAgICB9IGVsc2UgaWYgKHNlbGVjdG9yLnN0YXJ0c1dpdGgoJy4nKSAmJiBwYXJlbnRQcm9wcy5jbGFzcyA9PT0gc2VsZWN0b3Iuc3Vic3RyaW5nKDEpKSB7XHJcbiAgICAgIHJldHVybiBjdXJyZW50Tm9kZS5wYXJlbnQ7XHJcbiAgICB9IGVsc2UgaWYgKC9bW2EtekEtWjAtOVxcLV9dKig/Oj1cIlthLXpBLVowLTlcXC1fXSpcIik/XS8udGVzdChzZWxlY3RvcikpIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBzZWxlY3Rvci5yZXBsYWNlKCdbJywgJycpLnJlcGxhY2UoJ10nLCAnJyk7XHJcblxyXG4gICAgICBpZiAoY3VycmVudE5vZGUucGFyZW50LnBlbmRpbmdQcm9wc1t2YWx1ZV0pIHtcclxuICAgICAgICByZXR1cm4gY3VycmVudE5vZGUucGFyZW50O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnROb2RlLnBhcmVudC50YWcgPT09IHNlbGVjdG9yKSB7XHJcbiAgICAgIHJldHVybiBjdXJyZW50Tm9kZS5wYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZpbmRzIGEgdmlydHVhbCBub2RlIHRoYXQgaXMgZm91bmQgYnkgZ2l2ZW4gY29tcG9uZW50IGluc3RhbmNlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBub2RlXHJcbiAqIEBwYXJhbSAge0NvbXBvbmVudH0gY29tcG9uZW50XHJcbiAqIEByZXR1cm5zIHtWaXJ0dWFsTm9kZXxudWxsfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmROb2RlQnlDb21wb25lbnQobm9kZSwgY29tcG9uZW50KSB7XHJcbiAgbGV0IGZvdW5kTm9kZSA9IG51bGw7XHJcblxyXG4gIGlmIChub2RlLmluc3RhbmNlID09PSBjb21wb25lbnQpIHtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgZm91bmROb2RlID0gZmluZE5vZGVCeUNvbXBvbmVudChjaGlsZCwgY29tcG9uZW50KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGZvdW5kTm9kZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEJ1aWxkIHZpcnR1YWwgdHJlZSBmcm9tIHJvb3Qgbm9kZS5cclxuICpcclxuICogQHBhcmFtIHtTcGFya0pTLlJlbmRlclJlc3VsdH0gcmVuZGVyUmVzdWx0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRWaXJ0dWFsVHJlZVJvb3QocmVuZGVyUmVzdWx0KSB7XHJcbiAgY29uc3Qgcm9vdE5vZGUgPSBuZXcgVmlydHVhbE5vZGUoJ1Jvb3QnLCAnJyk7XHJcbiAgY29uc3QgY2hpbGROb2RlID0gYnVpbGRWaXJ0dWFsVHJlZShyZW5kZXJSZXN1bHQpO1xyXG5cclxuICBpZiAoY2hpbGROb2RlKSB7XHJcbiAgICByb290Tm9kZS5hcHBlbmRDaGlsZChjaGlsZE5vZGUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvb3ROb2RlO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvXmJsb2I6LywgXCJcIikucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7U3Bhcmt9IGZyb20gXCJAL3NwYXJrXCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIkAvQXBwXCI7XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtTcGFya0pTLkFwcENvbmZpZ30gY29uZmlnXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQXBwKGNvbmZpZykge1xyXG4gIGlmICh0eXBlb2YgY29uZmlnICE9PSBcIm9iamVjdFwiKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgbmVjZXNzYXJ5IG9wdGlvbnMgZGVmaW5lZCBpbiBnaXZlbiBjb25maWcuJyk7XHJcbiAgfVxyXG5cclxuICB3aW5kb3cuJGFwcCA9IG5ldyBTcGFyaygpO1xyXG4gIHdpbmRvdy4kYXBwLnNldFJvb3RGdW5jdGlvbihjb25maWcucmVuZGVyKTtcclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgICRhcHAubW91bnQoY29uZmlnLm1vdW50RWwpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5jcmVhdGVBcHAoe1xyXG4gIG1vdW50RWw6ICcjYXBwJyxcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPEFwcCAvPlxyXG4gIH1cclxufSkiXSwibmFtZXMiOlsiZSIsInQiLCJyIiwiU3ltYm9sIiwibiIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiaSIsImMiLCJwcm90b3R5cGUiLCJHZW5lcmF0b3IiLCJ1IiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsImYiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibGVuZ3RoIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJkb25lIiwidmFsdWUiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfY2xhc3NDYWxsQ2hlY2siLCJfZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwiX3RvUHJpbWl0aXZlIiwiX3R5cGVvZiIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTnVtYmVyIiwiX2NhbGxTdXBlciIsIl9nZXRQcm90b3R5cGVPZiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJSZWZlcmVuY2VFcnJvciIsIkJvb2xlYW4iLCJ2YWx1ZU9mIiwiX2luaGVyaXRzIiwiX3NldFByb3RvdHlwZU9mIiwiaW1nIiwiQ29tcG9uZW50IiwiSGVhZGVyIiwiY3JlYXRlUmVmIiwibGlzdEl0ZW1zIiwiaWQiLCJuYW1lIiwiQXBwIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJzdGF0ZSIsImlucHV0UmVmIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVUZXh0Q2hhbmdlIiwiaGFuZGxlU3VibWl0IiwibW91bnRlZCIsImN1cnJlbnQiLCJmb2N1cyIsIl91cGRhdGVkIiwiX2NhbGxlZSIsIl9jb250ZXh0IiwidXBkYXRlZCIsInNldFN0YXRlIiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJlbGVtZW50TmFtZSIsImF0dHJpYnV0ZXMiLCJzdHlsZSIsImZvbnRTaXplIiwiY29sb3IiLCJjaGlsZHJlbiIsInRpdGxlIiwiY29uY2F0IiwibWFwIiwiaXRlbSIsIm9uU3VibWl0IiwicmVmIiwidHlwZSIsIm9uSW5wdXQiLCJzcmMiLCJhbHQiLCJvbkNsaWNrIiwiZGVmYXVsdCIsIl9kZXN0cm95ZWQiLCJfY2FsbGVlMiIsIl9jb250ZXh0MiIsImRlc3Ryb3llZCIsIkVtcHR5T2JqZWN0IiwiJGFwcCIsIm9uU3RhdGVDaGFuZ2VkIiwiX21vdW50ZWQiLCJfcmVzdW1lZCIsInJlc3VtZWQiLCJfY2FsbGVlMyIsIl9jb250ZXh0MyIsIl9jYWxsZWU0IiwiX2NvbnRleHQ0IiwiZmluZENsb3Nlc3ROb2RlIiwiZGlmZlByb3BzIiwiZmluZENsb3Nlc3RET01Ob2RlIiwicmVzb2x2ZUNsYXNzTmFtZSIsInJlc29sdmVTdHlsZSIsImhhbmRsZUFkZGluZ1Byb3BzIiwibm9kZSIsInByb3BOYW1lIiwicHJvcFZhbHVlIiwic3RhcnRzV2l0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdWJzdHJpbmciLCJ0b0xvd2VyQ2FzZSIsImVsZW1lbnRSZWYiLCJzZXRBdHRyaWJ1dGUiLCJyZXNvbHZlRWxlbWVudEF0dHJpYnV0ZXMiLCJfaSIsIl9PYmplY3QkZW50cmllcyIsImVudHJpZXMiLCJwZW5kaW5nUHJvcHMiLCJfT2JqZWN0JGVudHJpZXMkX2kiLCJfc2xpY2VkVG9BcnJheSIsImhhbmRsZVVwZGF0aW5nUHJvcHMiLCJldmVudE5hbWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib2xkUHJvcHMiLCJoYW5kbGVSZW1vdmluZ1Byb3BzIiwicmVuZGVyTm9kZSIsInJlbW92ZUF0dHJpYnV0ZSIsInVubW91bnROb2RlIiwiZm9yRWFjaCIsImNoaWxkIiwiY2xlYW5MaXN0ZW5lcnMiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJpc1R5cGUiLCJpbnN0YW5jZSIsImNyZWF0ZUVsZW1lbnQiLCJwb3NpdGlvbiIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJ0YWciLCJfcmVmIiwiX25vZGUkcGVuZGluZ1Byb3BzJHhtIiwiY2xvc2VzdFdpdGhOUyIsInhtbG5zIiwiY3JlYXRlRWxlbWVudE5TIiwicGFyZW50RWwiLCJjaGlsZEF0IiwiaW5zZXJ0QmVmb3JlIiwidXBkYXRlRWxlbWVudCIsImRpZmZlZFByb3BzIiwicHJvcCIsImZsYXR0ZW5SZW5kZXJSZXN1bHRDaGlsZHJlbiIsImJ1aWxkVmlydHVhbFRyZWUiLCJsYXN0TW91bnRlZFZpcnR1YWxOb2RlIiwibW91bnRWaXJ0dWFsU3VidHJlZSIsImVmZmVjdCIsImNyZWF0ZUNvbXBvbmVudCIsInJlbmRlclJlc3VsdCIsInN1YnRyZWUiLCJhcHBlbmRDaGlsZCIsImNoaWxkTm9kZSIsImNvcHlOb2RlUmVmZXJlbmNlcyIsImN1cnJlbnROb2RlIiwibmV3Tm9kZSIsInJlY3Vyc2l2ZSIsInVuZGVmaW5lZCIsIl9jdXJyZW50Tm9kZSRvbGRQcm9wcyIsIl9jdXJyZW50Tm9kZSRlbGVtZW50UiIsIl9uZXdOb2RlJHBlbmRpbmdQcm9wcyIsInN0YXRlQ2hhbmdlZCIsImluZGV4IiwiY29tcGFyZVByb3BzIiwia2V5cyIsImV2ZXJ5IiwiX3JlZjIiLCJzaG91bGRVcGRhdGVOb2RlIiwidXBkYXRlTm9kZSIsInBlbmRpbmdVcGRhdGUiLCJlbXB0eSIsInJldXNlTm9kZSIsImNsb25lZEN1cnJlbnROb2RlIiwiY2xvbmUiLCJwYXJlbnQiLCJjb3B5RnJvbSIsImZpbmROb2RlV2l0aEtleSIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwiZXJyIiwiZmluZE1hdGNoaW5nQ2hpbGROb2RlIiwibmV3Q2hpbGROb2RlIiwiZm91bmROb2RlIiwicmVzb2x2ZUxhc3RNb3VudGVkTm9kZSIsInJlY29uY2lsZSIsInByb2Nlc3NlZENoaWxkcmVuIiwibWF0Y2hpbmdDaGlsZCIsInB1c2giLCJpbmNsdWRlcyIsInJlc29sdmVFZmZlY3RzRnJvbU5vZGVzIiwiZWZmZWN0cyIsIm5vZGVSZWYiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJjbGVhbk5vZGVzIiwiYnVpbGRWaXJ0dWFsVHJlZVJvb3QiLCJmaW5kTm9kZUJ5Q29tcG9uZW50IiwicHJvY2Vzc0NvbXBvbmVudE5vZGVzIiwiY29tcG9uZW50Tm9kZXMiLCJhY3Rpb24iLCJhbGxDaGlsZHJlbk1vdW50ZWQiLCJhbGxDaGlsZHJlblVwZGF0ZWQiLCJzaGlmdCIsImhhbmRsZVBsYWNlbWVudCIsInVuc2hpZnQiLCJoYW5kbGVVcGRhdGUiLCJTcGFyayIsIl9yb290RWwiLCJfcm9vdEZ1bmMiLCJfdmlydHVhbFRyZWUiLCJzZXRSb290RnVuY3Rpb24iLCJyb290Rm4iLCJtb3VudCIsIm1vdW50RWwiLCJxdWVyeVNlbGVjdG9yIiwiSFRNTEVsZW1lbnQiLCJFcnJvciIsIm5ld1ZpcnR1YWxUcmVlIiwiZGVsZXRpb25zIiwibmV3Q2hhbmdlcyIsIm1vdW50ZWRDb21wb25lbnROb2RlcyIsInVwZGF0ZWRDb21wb25lbnROb2RlcyIsImNvbXBvbmVudCIsIndhcm4iLCJsYXN0TW91bnRlZE5vZGUiLCJyZWZzIiwiQXJyYXkiLCJpc0FycmF5IiwiX29iamVjdFNwcmVhZCIsInRvU3RyaW5nIiwiY2xhc3NUb2tlbnMiLCJmaWx0ZXIiLCJjbGFzc05hbWUiLCJ0b2tlbnMiLCJpbmRleE9mIiwiam9pbiIsInRlc3QiLCJrZXlUb2tlbnMiLCJzcGxpdCIsInRva2VuIiwicHJvcERpZmZzIiwiX2kyIiwiX09iamVjdCRlbnRyaWVzMiIsIl9PYmplY3QkZW50cmllczIkX2kiLCJodG1sVGFncyIsIlZpcnR1YWxOb2RlIiwib3RoZXJQcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImxpc3RlbmVycyIsInJlZHVjZSIsImNvdW50IiwicmVzdWx0IiwibGlzdGVuZXIiLCJfdGhpcyRsaXN0ZW5lcnMkdHlwZSIsImxpc3RlbmVyc1dpdGhUeXBlIiwiZm91bmRMaXN0ZW5lckluZGV4IiwiZm91bmRMaXN0ZW5lciIsImZpbmQiLCJhbm90aGVyTGlzdGVuZXIiLCJzcGxpY2UiLCJfbG9vcCIsIl9yZXQiLCJyZXBsYWNlQ2hpbGQiLCJvbGROb2RlIiwiY2xvbmVkIiwic291cmNlTm9kZSIsImNoZWNrS2V5c0luSnN4QXJyYXkiLCJqc3hBcnJheSIsInVzZWRLZXlzIiwiX3JlZiRlbGVtZW50TmFtZSIsIl9yZWYkYXR0cmlidXRlcyIsIl9yZWYkY2hpbGRyZW4iLCJhbm90aGVyQ2hpbGROb2RlIiwic2VsZWN0b3IiLCJfY3VycmVudE5vZGUiLCJfY3VycmVudE5vZGUkcGFyZW50JHAiLCJwYXJlbnRQcm9wcyIsInJlcGxhY2UiLCJyb290Tm9kZSIsImNyZWF0ZUFwcCIsImNvbmZpZyIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=