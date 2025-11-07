/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./example/img/logo.png":
/*!******************************!*\
  !*** ./example/img/logo.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
module.exports = /*#__PURE__*/JSON.parse('["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","script","search","section","select","selectedcontent","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"]');

/***/ }),

/***/ "./node_modules/svg-tags/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/svg-tags/lib/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./svg-tags.json */ "./node_modules/svg-tags/lib/svg-tags.json");

/***/ }),

/***/ "./node_modules/svg-tags/lib/svg-tags.json":
/*!*************************************************!*\
  !*** ./node_modules/svg-tags/lib/svg-tags.json ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"]');

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
          elementName: "svg",
          attributes: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "407.273",
            height: "720",
            viewBox: "0 0 407.273 720",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            role: "img",
            artist: "Katerina Limpitsouni",
            source: "https://undraw.co/"
          },
          children: [{
            elementName: "g",
            attributes: {
              transform: "translate(-704.356 -232.671)"
            },
            children: [{
              elementName: "rect",
              attributes: {
                width: "395.152",
                height: "720",
                rx: "58.728",
                transform: "translate(711.022 232.671)",
                fill: "#3f3d56"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M732.338,221.859V799.483A64.6,64.6,0,0,1,667.817,864H415.041a64.6,64.6,0,0,1-64.521-64.521V221.859a64.6,64.6,0,0,1,64.521-64.521H448.1v11.418a19.492,19.492,0,0,0,19.49,19.491H615.272a19.492,19.492,0,0,0,19.491-19.49V157.338h33.055a64.6,64.6,0,0,1,64.521,64.521Z",
                transform: "translate(367.169 82.003)",
                fill: "#fff"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M344.368,275.729a4.854,4.854,0,0,1-4.849-4.848v-9.7a4.848,4.848,0,0,1,9.7,0v9.7A4.854,4.854,0,0,1,344.368,275.729Z",
                transform: "translate(364.836 103.002)",
                fill: "#3f3d56"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M344.368,319.725a4.854,4.854,0,0,1-4.848-4.849V288.184a4.848,4.848,0,0,1,9.7,0v26.693a4.854,4.854,0,0,1-4.848,4.848Z",
                transform: "translate(364.836 108.729)",
                fill: "#3f3d56"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M344.368,352.7a4.854,4.854,0,0,1-4.848-4.849V321.162a4.848,4.848,0,0,1,9.7,0v26.693a4.854,4.854,0,0,1-4.848,4.848Z",
                transform: "translate(364.836 115.725)",
                fill: "#3f3d56"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M672.368,341.43a4.854,4.854,0,0,1-4.848-4.848V271.45a4.849,4.849,0,0,1,9.7,0v65.131a4.854,4.854,0,0,1-4.849,4.848Z",
                transform: "translate(434.412 105.18)",
                fill: "#3f3d56"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M523.718,171.242H486.143a3.03,3.03,0,0,1,0-6.061h37.576a3.03,3.03,0,0,1,0,6.061Z",
                transform: "translate(395.295 83.666)",
                fill: "#fff"
              },
              children: null
            }, {
              elementName: "circle",
              attributes: {
                cx: "2.424",
                cy: "2.424",
                r: "2.424",
                transform: "translate(935.982 249.454)",
                fill: "#fff"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M451.1,317.426H409a22.005,22.005,0,0,1-21.98-21.98v-42.1A22.005,22.005,0,0,1,409,231.365h42.1a22.005,22.005,0,0,1,21.98,21.98v42.1a22.005,22.005,0,0,1-21.98,21.98ZM409,233.789a19.579,19.579,0,0,0-19.556,19.556v42.1A19.579,19.579,0,0,0,409,315h42.1a19.579,19.579,0,0,0,19.556-19.556v-42.1A19.579,19.579,0,0,0,451.1,233.789Z",
                transform: "translate(374.912 97.705)",
                fill: "#090814"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M536.6,317.926H494.5a22.005,22.005,0,0,1-21.98-21.98v-42.1a22.005,22.005,0,0,1,21.98-21.98h42.1a22.005,22.005,0,0,1,21.98,21.98v42.1A22.005,22.005,0,0,1,536.6,317.926Zm-42.1-83.636a19.579,19.579,0,0,0-19.556,19.556v42.1A19.579,19.579,0,0,0,494.5,315.5h42.1a19.579,19.579,0,0,0,19.556-19.556v-42.1A19.578,19.578,0,0,0,536.6,234.289Z",
                transform: "translate(393.048 97.811)",
                fill: "#090814"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M622.1,318.426H580a22.005,22.005,0,0,1-21.98-21.98v-42.1A22.005,22.005,0,0,1,580,232.365h42.1a22.005,22.005,0,0,1,21.98,21.98v42.1a22.005,22.005,0,0,1-21.98,21.98ZM580,234.789a19.579,19.579,0,0,0-19.556,19.556v42.1A19.579,19.579,0,0,0,580,316h42.1a19.578,19.578,0,0,0,19.556-19.556v-42.1A19.578,19.578,0,0,0,622.1,234.789Z",
                transform: "translate(411.184 97.918)",
                fill: "#090814"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M451.1,416.426H409a22.005,22.005,0,0,1-21.98-21.98v-42.1A22.005,22.005,0,0,1,409,330.365h42.1a22.005,22.005,0,0,1,21.98,21.98v42.1a22.005,22.005,0,0,1-21.98,21.98ZM409,332.789a19.579,19.579,0,0,0-19.556,19.556v42.1A19.579,19.579,0,0,0,409,414h42.1a19.579,19.579,0,0,0,19.556-19.556v-42.1A19.579,19.579,0,0,0,451.1,332.789Z",
                transform: "translate(374.912 118.705)",
                fill: "#090814"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M536.6,416.926H494.5a22.005,22.005,0,0,1-21.98-21.98v-42.1a22.005,22.005,0,0,1,21.98-21.98h42.1a22.005,22.005,0,0,1,21.98,21.98v42.1a22.005,22.005,0,0,1-21.98,21.98Zm-42.1-83.636a19.579,19.579,0,0,0-19.556,19.556v42.1A19.579,19.579,0,0,0,494.5,414.5h42.1a19.579,19.579,0,0,0,19.556-19.556v-42.1A19.578,19.578,0,0,0,536.6,333.289Z",
                transform: "translate(393.048 118.811)",
                fill: "#090814"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M622.1,417.426H580a22.005,22.005,0,0,1-21.98-21.98v-42.1A22.005,22.005,0,0,1,580,331.365h42.1a22.005,22.005,0,0,1,21.98,21.98v42.1a22,22,0,0,1-21.98,21.98ZM580,333.79a19.579,19.579,0,0,0-19.556,19.556v42.1A19.579,19.579,0,0,0,580,415h42.1a19.578,19.578,0,0,0,19.556-19.556v-42.1A19.578,19.578,0,0,0,622.1,333.789Z",
                transform: "translate(411.184 118.918)",
                fill: "#090814"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M450.888,716h-42.1a20.792,20.792,0,0,1-20.768-20.768v-42.1a20.792,20.792,0,0,1,20.768-20.768h42.1a20.792,20.792,0,0,1,20.768,20.768v42.1A20.792,20.792,0,0,1,450.888,716Z",
                transform: "translate(375.124 182.766)",
                fill: "#6c63ff"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M536.388,716.5h-42.1a20.791,20.791,0,0,1-20.768-20.768v-42.1a20.791,20.791,0,0,1,20.768-20.768h42.1a20.792,20.792,0,0,1,20.768,20.768v42.1A20.792,20.792,0,0,1,536.388,716.5Z",
                transform: "translate(393.26 182.872)",
                fill: "#f2f2f2"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M621.888,717h-42.1a20.791,20.791,0,0,1-20.768-20.768v-42.1a20.791,20.791,0,0,1,20.768-20.768h42.1a20.791,20.791,0,0,1,20.768,20.768v42.1A20.792,20.792,0,0,1,621.888,717Z",
                transform: "translate(411.397 182.978)",
                fill: "#f2f2f2"
              },
              children: null
            }, {
              elementName: "circle",
              attributes: {
                cx: "6.061",
                cy: "6.061",
                r: "6.061",
                transform: "translate(880.719 768.465)",
                fill: "#ccc"
              },
              children: null
            }, {
              elementName: "circle",
              attributes: {
                cx: "6.061",
                cy: "6.061",
                r: "6.061",
                transform: "translate(902.537 768.465)",
                fill: "#e6e6e6"
              },
              children: null
            }, {
              elementName: "circle",
              attributes: {
                cx: "6.061",
                cy: "6.061",
                r: "6.061",
                transform: "translate(924.355 768.465)",
                fill: "#e6e6e6"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M682.642,732.381H393.059a24.934,24.934,0,0,1-24.906-24.905v-61.7a24.934,24.934,0,0,1,24.906-24.905H682.642a24.934,24.934,0,0,1,24.906,24.905v61.7a24.934,24.934,0,0,1-24.906,24.905ZM393.059,623.29a22.507,22.507,0,0,0-22.482,22.481v61.7a22.507,22.507,0,0,0,22.482,22.481H682.642a22.507,22.507,0,0,0,22.482-22.481v-61.7a22.507,22.507,0,0,0-22.482-22.481Z",
                transform: "translate(370.91 180.327)",
                fill: "#e6e6e6"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M425.893,183.03H393.166a6.061,6.061,0,0,1,0-12.121h32.727a6.061,6.061,0,1,1,0,12.121Z",
                transform: "translate(374.93 84.881)",
                fill: "#e6e6e6"
              },
              children: null
            }, {
              elementName: "circle",
              attributes: {
                cx: "5.455",
                cy: "5.455",
                r: "5.455",
                transform: "translate(1010.416 256.396)",
                fill: "#e6e6e6"
              },
              children: null
            }, {
              elementName: "circle",
              attributes: {
                cx: "5.455",
                cy: "5.455",
                r: "5.455",
                transform: "translate(1027.386 256.396)",
                fill: "#e6e6e6"
              },
              children: null
            }, {
              elementName: "circle",
              attributes: {
                cx: "5.455",
                cy: "5.455",
                r: "5.455",
                transform: "translate(1044.355 256.396)",
                fill: "#e6e6e6"
              },
              children: null
            }, {
              elementName: "circle",
              attributes: {
                cx: "14.545",
                cy: "14.545",
                r: "14.545",
                transform: "translate(824.46 441.851)",
                fill: "#6c63ff"
              },
              children: null
            }, {
              elementName: "circle",
              attributes: {
                cx: "14.545",
                cy: "14.545",
                r: "14.545",
                transform: "translate(929.914 810.335)",
                fill: "#6c63ff"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M451.1,515.426H409a22.005,22.005,0,0,1-21.98-21.98v-42.1A22.005,22.005,0,0,1,409,429.365h42.1a22.005,22.005,0,0,1,21.98,21.98v42.1a22.005,22.005,0,0,1-21.98,21.98ZM409,431.789a19.579,19.579,0,0,0-19.556,19.556v42.1A19.578,19.578,0,0,0,409,513h42.1a19.578,19.578,0,0,0,19.556-19.556v-42.1A19.579,19.579,0,0,0,451.1,431.789Z",
                transform: "translate(374.912 139.705)",
                fill: "#090814"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M536.6,515.926H494.5a22.005,22.005,0,0,1-21.98-21.98v-42.1a22.005,22.005,0,0,1,21.98-21.98h42.1a22.005,22.005,0,0,1,21.98,21.98v42.1A22.005,22.005,0,0,1,536.6,515.926Zm-42.1-83.636a19.579,19.579,0,0,0-19.556,19.556v42.1A19.578,19.578,0,0,0,494.5,513.5h42.1a19.578,19.578,0,0,0,19.556-19.556v-42.1A19.578,19.578,0,0,0,536.6,432.289Z",
                transform: "translate(393.048 139.811)",
                fill: "#090814"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M622.1,516.426H580a22.005,22.005,0,0,1-21.98-21.98v-42.1A22.005,22.005,0,0,1,580,430.365h42.1a22.005,22.005,0,0,1,21.98,21.98v42.1a22.005,22.005,0,0,1-21.98,21.98ZM580,432.789a19.579,19.579,0,0,0-19.556,19.556v42.1A19.578,19.578,0,0,0,580,514h42.1a19.578,19.578,0,0,0,19.556-19.556v-42.1A19.578,19.578,0,0,0,622.1,432.789Z",
                transform: "translate(411.184 139.918)",
                fill: "#090814"
              },
              children: null
            }, {
              elementName: "circle",
              attributes: {
                cx: "14.545",
                cy: "14.545",
                r: "14.545",
                transform: "translate(929.914 564.275)",
                fill: "#6c63ff"
              },
              children: null
            }]
          }]
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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
/* harmony import */ var svg_tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svg-tags */ "./node_modules/svg-tags/lib/index.js");
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
  } else if (_toConsumableArray(html_tags__WEBPACK_IMPORTED_MODULE_1__).includes(elementName) || _toConsumableArray(svg_tags__WEBPACK_IMPORTED_MODULE_2__).includes(elementName)) {
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
    if (!currentNode.parent.isType('Element')) {
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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFDZnhLLE1BQU0sV0FBTkEsTUFBTUEsQ0FBQSxFQUFHO0lBQ1A7TUFBQUMsV0FBQSxFQUFBdEIsNENBQUE7TUFBQXVCLFVBQUE7TUFBQUksUUFBQTtJQUFBO0VBR0Y7QUFDRixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NwYXJranMvLi9leGFtcGxlL2ltZy9sb2dvLnBuZyIsIndlYnBhY2s6Ly9zcGFya2pzLy4vbm9kZV9tb2R1bGVzL3N2Zy10YWdzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zcGFya2pzLy4vc3JjL0FwcC5qc3giLCJ3ZWJwYWNrOi8vc3Bhcmtqcy8uL3NyYy9IZWFkZXIuanN4Iiwid2VicGFjazovL3NwYXJranMvLi9zcmMvY29tcG9uZW50LmpzIiwid2VicGFjazovL3NwYXJranMvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3NwYXJranMvLi9zcmMvcmVjb25jaWxlci5qcyIsIndlYnBhY2s6Ly9zcGFya2pzLy4vc3JjL3NwYXJrLmpzIiwid2VicGFjazovL3NwYXJranMvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vc3Bhcmtqcy8uL3NyYy92aXJ0dWFsLW5vZGUuanMiLCJ3ZWJwYWNrOi8vc3Bhcmtqcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zcGFya2pzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zcGFya2pzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vc3Bhcmtqcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NwYXJranMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zcGFya2pzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3NwYXJranMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZlMmEwZTRkY2FjZWQ0NzU0MzM5ZDY5MDNmYTM0YWRiLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSggJy4vc3ZnLXRhZ3MuanNvbicgKTsiLCJpbXBvcnQgaW1nIGZyb20gJ0BwdWJsaWMvaW1nL2xvZ28ucG5nJztcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiQC9jb21wb25lbnRcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiQC9IZWFkZXJcIjtcclxuaW1wb3J0IHtjcmVhdGVSZWZ9IGZyb20gXCJAL3NwYXJrXCI7XHJcblxyXG5jb25zdCBsaXN0SXRlbXMgPSBbXHJcbiAgeyBpZDogMSwgbmFtZTogJ0hUTUwnIH0sXHJcbiAgeyBpZDogMiwgbmFtZTogJ0NTUycgfSxcclxuICB7IGlkOiAzLCBuYW1lOiAnSmF2YXNjcmlwdCcgfSxcclxuICB7IGlkOiA0LCBuYW1lOiAnTm9kZS5qcycgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpZDogMSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5pbnB1dFJlZiA9IGNyZWF0ZVJlZihudWxsKTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVUZXh0Q2hhbmdlID0gdGhpcy5oYW5kbGVUZXh0Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBtb3VudGVkKCkge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRSZWYuY3VycmVudCkge1xyXG4gICAgICB0aGlzLmlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHVwZGF0ZWQoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmlucHV0UmVmKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlkOiB0aGlzLnN0YXRlLmlkICsgMSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0KGV2KSB7XHJcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coZXYpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlVGV4dENoYW5nZShldikge1xyXG4gICAgY29uc29sZS5sb2coZXYpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogJzFyZW0nLCBjb2xvcjogJ2JsYWNrJyB9fT5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5pZCAlIDIgPT09IDAgPyAoXHJcbiAgICAgICAgICA8SGVhZGVyIHRpdGxlPXtgVGl0bGUgJHt0aGlzLnN0YXRlLmlkfWB9IC8+XHJcbiAgICAgICAgKSA6ICcnfVxyXG4gICAgICAgIDxkaXYgaWQ9XCJ0b3AtaGVhZGVyXCIgY2xhc3M9e2BjbGFzcy0xIGNsYXNzLTJgfT5cclxuICAgICAgICAgIDxuYXY+TmF2aWdhdGlvbjwvbmF2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwPlN0YXRlOiB7dGhpcy5zdGF0ZS5pZH08L3A+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAge2xpc3RJdGVtcy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+e2l0ZW0ubmFtZX08L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgPGlucHV0IHJlZj17dGhpcy5pbnB1dFJlZn0gdHlwZT1cInRleHRcIiBvbklucHV0PXt0aGlzLmhhbmRsZVRleHRDaGFuZ2V9IC8+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxpbWcgc3JjPXtpbWd9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI0MDcuMjczXCIgaGVpZ2h0PVwiNzIwXCIgdmlld0JveD1cIjAgMCA0MDcuMjczIDcyMFwiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHJvbGU9XCJpbWdcIiBhcnRpc3Q9XCJLYXRlcmluYSBMaW1waXRzb3VuaVwiIHNvdXJjZT1cImh0dHBzOi8vdW5kcmF3LmNvL1wiPjxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNzA0LjM1NiAtMjMyLjY3MSlcIj48cmVjdCB3aWR0aD1cIjM5NS4xNTJcIiBoZWlnaHQ9XCI3MjBcIiByeD1cIjU4LjcyOFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg3MTEuMDIyIDIzMi42NzEpXCIgZmlsbD1cIiMzZjNkNTZcIi8+PHBhdGggZD1cIk03MzIuMzM4LDIyMS44NTlWNzk5LjQ4M0E2NC42LDY0LjYsMCwwLDEsNjY3LjgxNyw4NjRINDE1LjA0MWE2NC42LDY0LjYsMCwwLDEtNjQuNTIxLTY0LjUyMVYyMjEuODU5YTY0LjYsNjQuNiwwLDAsMSw2NC41MjEtNjQuNTIxSDQ0OC4xdjExLjQxOGExOS40OTIsMTkuNDkyLDAsMCwwLDE5LjQ5LDE5LjQ5MUg2MTUuMjcyYTE5LjQ5MiwxOS40OTIsMCwwLDAsMTkuNDkxLTE5LjQ5VjE1Ny4zMzhoMzMuMDU1YTY0LjYsNjQuNiwwLDAsMSw2NC41MjEsNjQuNTIxWlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzNjcuMTY5IDgyLjAwMylcIiBmaWxsPVwiI2ZmZlwiLz48cGF0aCBkPVwiTTM0NC4zNjgsMjc1LjcyOWE0Ljg1NCw0Ljg1NCwwLDAsMS00Ljg0OS00Ljg0OHYtOS43YTQuODQ4LDQuODQ4LDAsMCwxLDkuNywwdjkuN0E0Ljg1NCw0Ljg1NCwwLDAsMSwzNDQuMzY4LDI3NS43MjlaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM2NC44MzYgMTAzLjAwMilcIiBmaWxsPVwiIzNmM2Q1NlwiLz48cGF0aCBkPVwiTTM0NC4zNjgsMzE5LjcyNWE0Ljg1NCw0Ljg1NCwwLDAsMS00Ljg0OC00Ljg0OVYyODguMTg0YTQuODQ4LDQuODQ4LDAsMCwxLDkuNywwdjI2LjY5M2E0Ljg1NCw0Ljg1NCwwLDAsMS00Ljg0OCw0Ljg0OFpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzY0LjgzNiAxMDguNzI5KVwiIGZpbGw9XCIjM2YzZDU2XCIvPjxwYXRoIGQ9XCJNMzQ0LjM2OCwzNTIuN2E0Ljg1NCw0Ljg1NCwwLDAsMS00Ljg0OC00Ljg0OVYzMjEuMTYyYTQuODQ4LDQuODQ4LDAsMCwxLDkuNywwdjI2LjY5M2E0Ljg1NCw0Ljg1NCwwLDAsMS00Ljg0OCw0Ljg0OFpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzY0LjgzNiAxMTUuNzI1KVwiIGZpbGw9XCIjM2YzZDU2XCIvPjxwYXRoIGQ9XCJNNjcyLjM2OCwzNDEuNDNhNC44NTQsNC44NTQsMCwwLDEtNC44NDgtNC44NDhWMjcxLjQ1YTQuODQ5LDQuODQ5LDAsMCwxLDkuNywwdjY1LjEzMWE0Ljg1NCw0Ljg1NCwwLDAsMS00Ljg0OSw0Ljg0OFpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNDM0LjQxMiAxMDUuMTgpXCIgZmlsbD1cIiMzZjNkNTZcIi8+PHBhdGggZD1cIk01MjMuNzE4LDE3MS4yNDJINDg2LjE0M2EzLjAzLDMuMDMsMCwwLDEsMC02LjA2MWgzNy41NzZhMy4wMywzLjAzLDAsMCwxLDAsNi4wNjFaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM5NS4yOTUgODMuNjY2KVwiIGZpbGw9XCIjZmZmXCIvPjxjaXJjbGUgY3g9XCIyLjQyNFwiIGN5PVwiMi40MjRcIiByPVwiMi40MjRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTM1Ljk4MiAyNDkuNDU0KVwiIGZpbGw9XCIjZmZmXCIvPjxwYXRoIGQ9XCJNNDUxLjEsMzE3LjQyNkg0MDlhMjIuMDA1LDIyLjAwNSwwLDAsMS0yMS45OC0yMS45OHYtNDIuMUEyMi4wMDUsMjIuMDA1LDAsMCwxLDQwOSwyMzEuMzY1aDQyLjFhMjIuMDA1LDIyLjAwNSwwLDAsMSwyMS45OCwyMS45OHY0Mi4xYTIyLjAwNSwyMi4wMDUsMCwwLDEtMjEuOTgsMjEuOThaTTQwOSwyMzMuNzg5YTE5LjU3OSwxOS41NzksMCwwLDAtMTkuNTU2LDE5LjU1NnY0Mi4xQTE5LjU3OSwxOS41NzksMCwwLDAsNDA5LDMxNWg0Mi4xYTE5LjU3OSwxOS41NzksMCwwLDAsMTkuNTU2LTE5LjU1NnYtNDIuMUExOS41NzksMTkuNTc5LDAsMCwwLDQ1MS4xLDIzMy43ODlaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM3NC45MTIgOTcuNzA1KVwiIGZpbGw9XCIjMDkwODE0XCIvPjxwYXRoIGQ9XCJNNTM2LjYsMzE3LjkyNkg0OTQuNWEyMi4wMDUsMjIuMDA1LDAsMCwxLTIxLjk4LTIxLjk4di00Mi4xYTIyLjAwNSwyMi4wMDUsMCwwLDEsMjEuOTgtMjEuOThoNDIuMWEyMi4wMDUsMjIuMDA1LDAsMCwxLDIxLjk4LDIxLjk4djQyLjFBMjIuMDA1LDIyLjAwNSwwLDAsMSw1MzYuNiwzMTcuOTI2Wm0tNDIuMS04My42MzZhMTkuNTc5LDE5LjU3OSwwLDAsMC0xOS41NTYsMTkuNTU2djQyLjFBMTkuNTc5LDE5LjU3OSwwLDAsMCw0OTQuNSwzMTUuNWg0Mi4xYTE5LjU3OSwxOS41NzksMCwwLDAsMTkuNTU2LTE5LjU1NnYtNDIuMUExOS41NzgsMTkuNTc4LDAsMCwwLDUzNi42LDIzNC4yODlaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM5My4wNDggOTcuODExKVwiIGZpbGw9XCIjMDkwODE0XCIvPjxwYXRoIGQ9XCJNNjIyLjEsMzE4LjQyNkg1ODBhMjIuMDA1LDIyLjAwNSwwLDAsMS0yMS45OC0yMS45OHYtNDIuMUEyMi4wMDUsMjIuMDA1LDAsMCwxLDU4MCwyMzIuMzY1aDQyLjFhMjIuMDA1LDIyLjAwNSwwLDAsMSwyMS45OCwyMS45OHY0Mi4xYTIyLjAwNSwyMi4wMDUsMCwwLDEtMjEuOTgsMjEuOThaTTU4MCwyMzQuNzg5YTE5LjU3OSwxOS41NzksMCwwLDAtMTkuNTU2LDE5LjU1NnY0Mi4xQTE5LjU3OSwxOS41NzksMCwwLDAsNTgwLDMxNmg0Mi4xYTE5LjU3OCwxOS41NzgsMCwwLDAsMTkuNTU2LTE5LjU1NnYtNDIuMUExOS41NzgsMTkuNTc4LDAsMCwwLDYyMi4xLDIzNC43ODlaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDQxMS4xODQgOTcuOTE4KVwiIGZpbGw9XCIjMDkwODE0XCIvPjxwYXRoIGQ9XCJNNDUxLjEsNDE2LjQyNkg0MDlhMjIuMDA1LDIyLjAwNSwwLDAsMS0yMS45OC0yMS45OHYtNDIuMUEyMi4wMDUsMjIuMDA1LDAsMCwxLDQwOSwzMzAuMzY1aDQyLjFhMjIuMDA1LDIyLjAwNSwwLDAsMSwyMS45OCwyMS45OHY0Mi4xYTIyLjAwNSwyMi4wMDUsMCwwLDEtMjEuOTgsMjEuOThaTTQwOSwzMzIuNzg5YTE5LjU3OSwxOS41NzksMCwwLDAtMTkuNTU2LDE5LjU1NnY0Mi4xQTE5LjU3OSwxOS41NzksMCwwLDAsNDA5LDQxNGg0Mi4xYTE5LjU3OSwxOS41NzksMCwwLDAsMTkuNTU2LTE5LjU1NnYtNDIuMUExOS41NzksMTkuNTc5LDAsMCwwLDQ1MS4xLDMzMi43ODlaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM3NC45MTIgMTE4LjcwNSlcIiBmaWxsPVwiIzA5MDgxNFwiLz48cGF0aCBkPVwiTTUzNi42LDQxNi45MjZINDk0LjVhMjIuMDA1LDIyLjAwNSwwLDAsMS0yMS45OC0yMS45OHYtNDIuMWEyMi4wMDUsMjIuMDA1LDAsMCwxLDIxLjk4LTIxLjk4aDQyLjFhMjIuMDA1LDIyLjAwNSwwLDAsMSwyMS45OCwyMS45OHY0Mi4xYTIyLjAwNSwyMi4wMDUsMCwwLDEtMjEuOTgsMjEuOThabS00Mi4xLTgzLjYzNmExOS41NzksMTkuNTc5LDAsMCwwLTE5LjU1NiwxOS41NTZ2NDIuMUExOS41NzksMTkuNTc5LDAsMCwwLDQ5NC41LDQxNC41aDQyLjFhMTkuNTc5LDE5LjU3OSwwLDAsMCwxOS41NTYtMTkuNTU2di00Mi4xQTE5LjU3OCwxOS41NzgsMCwwLDAsNTM2LjYsMzMzLjI4OVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzkzLjA0OCAxMTguODExKVwiIGZpbGw9XCIjMDkwODE0XCIvPjxwYXRoIGQ9XCJNNjIyLjEsNDE3LjQyNkg1ODBhMjIuMDA1LDIyLjAwNSwwLDAsMS0yMS45OC0yMS45OHYtNDIuMUEyMi4wMDUsMjIuMDA1LDAsMCwxLDU4MCwzMzEuMzY1aDQyLjFhMjIuMDA1LDIyLjAwNSwwLDAsMSwyMS45OCwyMS45OHY0Mi4xYTIyLDIyLDAsMCwxLTIxLjk4LDIxLjk4Wk01ODAsMzMzLjc5YTE5LjU3OSwxOS41NzksMCwwLDAtMTkuNTU2LDE5LjU1NnY0Mi4xQTE5LjU3OSwxOS41NzksMCwwLDAsNTgwLDQxNWg0Mi4xYTE5LjU3OCwxOS41NzgsMCwwLDAsMTkuNTU2LTE5LjU1NnYtNDIuMUExOS41NzgsMTkuNTc4LDAsMCwwLDYyMi4xLDMzMy43ODlaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDQxMS4xODQgMTE4LjkxOClcIiBmaWxsPVwiIzA5MDgxNFwiLz48cGF0aCBkPVwiTTQ1MC44ODgsNzE2aC00Mi4xYTIwLjc5MiwyMC43OTIsMCwwLDEtMjAuNzY4LTIwLjc2OHYtNDIuMWEyMC43OTIsMjAuNzkyLDAsMCwxLDIwLjc2OC0yMC43NjhoNDIuMWEyMC43OTIsMjAuNzkyLDAsMCwxLDIwLjc2OCwyMC43Njh2NDIuMUEyMC43OTIsMjAuNzkyLDAsMCwxLDQ1MC44ODgsNzE2WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzNzUuMTI0IDE4Mi43NjYpXCIgZmlsbD1cIiM2YzYzZmZcIi8+PHBhdGggZD1cIk01MzYuMzg4LDcxNi41aC00Mi4xYTIwLjc5MSwyMC43OTEsMCwwLDEtMjAuNzY4LTIwLjc2OHYtNDIuMWEyMC43OTEsMjAuNzkxLDAsMCwxLDIwLjc2OC0yMC43NjhoNDIuMWEyMC43OTIsMjAuNzkyLDAsMCwxLDIwLjc2OCwyMC43Njh2NDIuMUEyMC43OTIsMjAuNzkyLDAsMCwxLDUzNi4zODgsNzE2LjVaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM5My4yNiAxODIuODcyKVwiIGZpbGw9XCIjZjJmMmYyXCIvPjxwYXRoIGQ9XCJNNjIxLjg4OCw3MTdoLTQyLjFhMjAuNzkxLDIwLjc5MSwwLDAsMS0yMC43NjgtMjAuNzY4di00Mi4xYTIwLjc5MSwyMC43OTEsMCwwLDEsMjAuNzY4LTIwLjc2OGg0Mi4xYTIwLjc5MSwyMC43OTEsMCwwLDEsMjAuNzY4LDIwLjc2OHY0Mi4xQTIwLjc5MiwyMC43OTIsMCwwLDEsNjIxLjg4OCw3MTdaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDQxMS4zOTcgMTgyLjk3OClcIiBmaWxsPVwiI2YyZjJmMlwiLz48Y2lyY2xlIGN4PVwiNi4wNjFcIiBjeT1cIjYuMDYxXCIgcj1cIjYuMDYxXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDg4MC43MTkgNzY4LjQ2NSlcIiBmaWxsPVwiI2NjY1wiLz48Y2lyY2xlIGN4PVwiNi4wNjFcIiBjeT1cIjYuMDYxXCIgcj1cIjYuMDYxXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkwMi41MzcgNzY4LjQ2NSlcIiBmaWxsPVwiI2U2ZTZlNlwiLz48Y2lyY2xlIGN4PVwiNi4wNjFcIiBjeT1cIjYuMDYxXCIgcj1cIjYuMDYxXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkyNC4zNTUgNzY4LjQ2NSlcIiBmaWxsPVwiI2U2ZTZlNlwiLz48cGF0aCBkPVwiTTY4Mi42NDIsNzMyLjM4MUgzOTMuMDU5YTI0LjkzNCwyNC45MzQsMCwwLDEtMjQuOTA2LTI0LjkwNXYtNjEuN2EyNC45MzQsMjQuOTM0LDAsMCwxLDI0LjkwNi0yNC45MDVINjgyLjY0MmEyNC45MzQsMjQuOTM0LDAsMCwxLDI0LjkwNiwyNC45MDV2NjEuN2EyNC45MzQsMjQuOTM0LDAsMCwxLTI0LjkwNiwyNC45MDVaTTM5My4wNTksNjIzLjI5YTIyLjUwNywyMi41MDcsMCwwLDAtMjIuNDgyLDIyLjQ4MXY2MS43YTIyLjUwNywyMi41MDcsMCwwLDAsMjIuNDgyLDIyLjQ4MUg2ODIuNjQyYTIyLjUwNywyMi41MDcsMCwwLDAsMjIuNDgyLTIyLjQ4MXYtNjEuN2EyMi41MDcsMjIuNTA3LDAsMCwwLTIyLjQ4Mi0yMi40ODFaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM3MC45MSAxODAuMzI3KVwiIGZpbGw9XCIjZTZlNmU2XCIvPjxwYXRoIGQ9XCJNNDI1Ljg5MywxODMuMDNIMzkzLjE2NmE2LjA2MSw2LjA2MSwwLDAsMSwwLTEyLjEyMWgzMi43MjdhNi4wNjEsNi4wNjEsMCwxLDEsMCwxMi4xMjFaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM3NC45MyA4NC44ODEpXCIgZmlsbD1cIiNlNmU2ZTZcIi8+PGNpcmNsZSBjeD1cIjUuNDU1XCIgY3k9XCI1LjQ1NVwiIHI9XCI1LjQ1NVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMDEwLjQxNiAyNTYuMzk2KVwiIGZpbGw9XCIjZTZlNmU2XCIvPjxjaXJjbGUgY3g9XCI1LjQ1NVwiIGN5PVwiNS40NTVcIiByPVwiNS40NTVcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTAyNy4zODYgMjU2LjM5NilcIiBmaWxsPVwiI2U2ZTZlNlwiLz48Y2lyY2xlIGN4PVwiNS40NTVcIiBjeT1cIjUuNDU1XCIgcj1cIjUuNDU1XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEwNDQuMzU1IDI1Ni4zOTYpXCIgZmlsbD1cIiNlNmU2ZTZcIi8+PGNpcmNsZSBjeD1cIjE0LjU0NVwiIGN5PVwiMTQuNTQ1XCIgcj1cIjE0LjU0NVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg4MjQuNDYgNDQxLjg1MSlcIiBmaWxsPVwiIzZjNjNmZlwiLz48Y2lyY2xlIGN4PVwiMTQuNTQ1XCIgY3k9XCIxNC41NDVcIiByPVwiMTQuNTQ1XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkyOS45MTQgODEwLjMzNSlcIiBmaWxsPVwiIzZjNjNmZlwiLz48cGF0aCBkPVwiTTQ1MS4xLDUxNS40MjZINDA5YTIyLjAwNSwyMi4wMDUsMCwwLDEtMjEuOTgtMjEuOTh2LTQyLjFBMjIuMDA1LDIyLjAwNSwwLDAsMSw0MDksNDI5LjM2NWg0Mi4xYTIyLjAwNSwyMi4wMDUsMCwwLDEsMjEuOTgsMjEuOTh2NDIuMWEyMi4wMDUsMjIuMDA1LDAsMCwxLTIxLjk4LDIxLjk4Wk00MDksNDMxLjc4OWExOS41NzksMTkuNTc5LDAsMCwwLTE5LjU1NiwxOS41NTZ2NDIuMUExOS41NzgsMTkuNTc4LDAsMCwwLDQwOSw1MTNoNDIuMWExOS41NzgsMTkuNTc4LDAsMCwwLDE5LjU1Ni0xOS41NTZ2LTQyLjFBMTkuNTc5LDE5LjU3OSwwLDAsMCw0NTEuMSw0MzEuNzg5WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzNzQuOTEyIDEzOS43MDUpXCIgZmlsbD1cIiMwOTA4MTRcIi8+PHBhdGggZD1cIk01MzYuNiw1MTUuOTI2SDQ5NC41YTIyLjAwNSwyMi4wMDUsMCwwLDEtMjEuOTgtMjEuOTh2LTQyLjFhMjIuMDA1LDIyLjAwNSwwLDAsMSwyMS45OC0yMS45OGg0Mi4xYTIyLjAwNSwyMi4wMDUsMCwwLDEsMjEuOTgsMjEuOTh2NDIuMUEyMi4wMDUsMjIuMDA1LDAsMCwxLDUzNi42LDUxNS45MjZabS00Mi4xLTgzLjYzNmExOS41NzksMTkuNTc5LDAsMCwwLTE5LjU1NiwxOS41NTZ2NDIuMUExOS41NzgsMTkuNTc4LDAsMCwwLDQ5NC41LDUxMy41aDQyLjFhMTkuNTc4LDE5LjU3OCwwLDAsMCwxOS41NTYtMTkuNTU2di00Mi4xQTE5LjU3OCwxOS41NzgsMCwwLDAsNTM2LjYsNDMyLjI4OVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzkzLjA0OCAxMzkuODExKVwiIGZpbGw9XCIjMDkwODE0XCIvPjxwYXRoIGQ9XCJNNjIyLjEsNTE2LjQyNkg1ODBhMjIuMDA1LDIyLjAwNSwwLDAsMS0yMS45OC0yMS45OHYtNDIuMUEyMi4wMDUsMjIuMDA1LDAsMCwxLDU4MCw0MzAuMzY1aDQyLjFhMjIuMDA1LDIyLjAwNSwwLDAsMSwyMS45OCwyMS45OHY0Mi4xYTIyLjAwNSwyMi4wMDUsMCwwLDEtMjEuOTgsMjEuOThaTTU4MCw0MzIuNzg5YTE5LjU3OSwxOS41NzksMCwwLDAtMTkuNTU2LDE5LjU1NnY0Mi4xQTE5LjU3OCwxOS41NzgsMCwwLDAsNTgwLDUxNGg0Mi4xYTE5LjU3OCwxOS41NzgsMCwwLDAsMTkuNTU2LTE5LjU1NnYtNDIuMUExOS41NzgsMTkuNTc4LDAsMCwwLDYyMi4xLDQzMi43ODlaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDQxMS4xODQgMTM5LjkxOClcIiBmaWxsPVwiIzA5MDgxNFwiLz48Y2lyY2xlIGN4PVwiMTQuNTQ1XCIgY3k9XCIxNC41NDVcIiByPVwiMTQuNTQ1XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkyOS45MTQgNTY0LjI3NSlcIiBmaWxsPVwiIzZjNjNmZlwiLz48L2c+PC9zdmc+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5DbGljazwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCJAL2NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdIZWFkZXIgbW91bnRlZCcpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgdXBkYXRlZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdIZWFkZXIgdXBkYXRlZCcpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZGVzdHJveWVkKCkge1xyXG4gICAgY29uc29sZS5sb2coJ0hlYWRlciBkZXN0cm95ZWQnKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxoMT57dGhpcy5wcm9wcy50aXRsZX08L2gxPlxyXG4gICAgKVxyXG4gIH1cclxufSIsImltcG9ydCB7RW1wdHlPYmplY3R9IGZyb20gXCJAL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemVzIGEgY29tcG9uZW50IHdpdGggcHJvcHMgYW5kIGVtcHR5IHN0YXRlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTcGFya0pTLlByb3BzfSBwcm9wc1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICB0aGlzLnN0YXRlID0gRW1wdHlPYmplY3RcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgYSBuZXcgc3RhdGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIGFueT59IHN0YXRlXHJcbiAgICovXHJcbiAgc2V0U3RhdGUoc3RhdGUpIHtcclxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgICRhcHAub25TdGF0ZUNoYW5nZWQodGhpcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW5kZXJzIGNvbXBvbmVudCBhcyBKU1ggc3RydWN0dXJlLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1NwYXJrSlMuUmVuZGVyUmVzdWx0fVxyXG4gICAqL1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBob29rIGlzIHRyaWdnZXJlZCB3aGVuIGNvbXBvbmVudCBpcyBtb3VudGVkIGludG8gRE9NLlxyXG4gICAqL1xyXG4gIGFzeW5jIG1vdW50ZWQoKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBhIGhvb2sgaXMgdHJpZ2dlcmVkIHdoZW4gYXBwbGljYXRpb24gaXMgcmVzdW1lZCBpbnRvIGNvbXBvbmVudC5cclxuICAgKi9cclxuICBhc3luYyByZXN1bWVkKCkge31cclxuXHJcbiAgLyoqXHJcbiAgICogQSBob29rIGlzIHRyaWdnZXJlZCB3aGVuIGNvbXBvbmVudCBpcyByZS1yZW5kZXJlZC5cclxuICAgKi9cclxuICBhc3luYyB1cGRhdGVkKCkge31cclxuXHJcbiAgLyoqXHJcbiAgICogQSBob29rIGlzIHRyaWdnZXJlZCBiZWZvcmUgY29tcG9uZW50IGlzIGRlc3Ryb3llZC5cclxuICAgKi9cclxuICBhc3luYyBkZXN0cm95ZWQoKSB7fVxyXG59IiwiaW1wb3J0IHtmaW5kQ2xvc2VzdE5vZGV9IGZyb20gXCJAL3ZpcnR1YWwtbm9kZVwiO1xyXG5pbXBvcnQge2RpZmZQcm9wcywgZmluZENsb3Nlc3RET01Ob2RlLCByZXNvbHZlQ2xhc3NOYW1lLCByZXNvbHZlU3R5bGV9IGZyb20gXCJAL3V0aWxzXCI7XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbm9kZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcE5hbWVcclxuICogQHBhcmFtIHthbnl9IHByb3BWYWx1ZVxyXG4gKi9cclxuZnVuY3Rpb24gaGFuZGxlQWRkaW5nUHJvcHMobm9kZSwgcHJvcE5hbWUsIHByb3BWYWx1ZSkge1xyXG4gIGlmIChwcm9wTmFtZS5zdGFydHNXaXRoKCdvbicpKSB7XHJcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIocHJvcE5hbWUuc3Vic3RyaW5nKDIpLnRvTG93ZXJDYXNlKCksIHByb3BWYWx1ZSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAocHJvcE5hbWUgPT09ICdjbGFzcycpIHtcclxuICAgIHByb3BWYWx1ZSA9IHJlc29sdmVDbGFzc05hbWUocHJvcFZhbHVlKTtcclxuICB9IGVsc2UgaWYgKHByb3BOYW1lID09PSAnc3R5bGUnKSB7XHJcbiAgICBwcm9wVmFsdWUgPSByZXNvbHZlU3R5bGUocHJvcFZhbHVlKTtcclxuICB9XHJcblxyXG4gIG5vZGUuZWxlbWVudFJlZi5zZXRBdHRyaWJ1dGUocHJvcE5hbWUsIHByb3BWYWx1ZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBub2RlXHJcbiAqL1xyXG5mdW5jdGlvbiByZXNvbHZlRWxlbWVudEF0dHJpYnV0ZXMobm9kZSkge1xyXG4gIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhub2RlLnBlbmRpbmdQcm9wcykpIHtcclxuICAgIGhhbmRsZUFkZGluZ1Byb3BzKG5vZGUsIGtleSwgdmFsdWUpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BOYW1lXHJcbiAqIEBwYXJhbSB7YW55fSBwcm9wVmFsdWVcclxuICovXHJcbmZ1bmN0aW9uIGhhbmRsZVVwZGF0aW5nUHJvcHMobm9kZSwgcHJvcE5hbWUsIHByb3BWYWx1ZSkge1xyXG4gIGlmIChwcm9wTmFtZS5zdGFydHNXaXRoKCdvbicpKSB7XHJcbiAgICBjb25zdCBldmVudE5hbWUgPSBwcm9wTmFtZS5zdWJzdHJpbmcoMikudG9Mb3dlckNhc2UoKTtcclxuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIG5vZGUub2xkUHJvcHNbZXZlbnROYW1lXSk7XHJcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBwcm9wVmFsdWUpO1xyXG4gIH0gZWxzZSBpZiAocHJvcE5hbWUgPT09ICdjbGFzcycpIHtcclxuICAgIHByb3BWYWx1ZSA9IHJlc29sdmVDbGFzc05hbWUocHJvcFZhbHVlKTtcclxuICB9IGVsc2UgaWYgKHByb3BOYW1lID09PSAnc3R5bGUnKSB7XHJcbiAgICBwcm9wVmFsdWUgPSByZXNvbHZlU3R5bGUocHJvcFZhbHVlKTtcclxuICB9XHJcblxyXG4gIGlmICghcHJvcE5hbWUuc3RhcnRzV2l0aCgnb24nKSkge1xyXG4gICAgbm9kZS5lbGVtZW50UmVmLnNldEF0dHJpYnV0ZShwcm9wTmFtZSwgcHJvcFZhbHVlKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSByZW5kZXJOb2RlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wTmFtZVxyXG4gKiBAcGFyYW0ge2FueX0gcHJvcFZhbHVlXHJcbiAqL1xyXG5mdW5jdGlvbiBoYW5kbGVSZW1vdmluZ1Byb3BzKHJlbmRlck5vZGUsIHByb3BOYW1lLCBwcm9wVmFsdWUpIHtcclxuICBpZiAocHJvcE5hbWUuc3RhcnRzV2l0aCgnb24nKSkge1xyXG4gICAgcmVuZGVyTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKHByb3BOYW1lLnN1YnN0cmluZygyKS50b0xvd2VyQ2FzZSgpLCBwcm9wVmFsdWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZW5kZXJOb2RlLmVsZW1lbnRSZWYucmVtb3ZlQXR0cmlidXRlKHByb3BOYW1lKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVbm1vdW50IHZpcnR1YWwgbm9kZSBhbmQgaXQncyBjaGlsZHJlbi5cclxuICogSWYgdmlydHVhbCBub2RlIHJlcHJlc2VudHMgSFRNTCBlbGVtZW50IGl0IHdpbGwgcmVtb3ZlIGFsbCBldmVudCBsaXN0ZW5lcnMgYW5kIHRoZW4gcmVtb3ZlIEhUTUwgZWxlbWVudC5cclxuICogSWYgdmlydHVhbCBub2RlIHJlcHJlc2VudHMgYSBjb21wb25lbnQgaW5zdGFuY2UgaXQgd2lsbCB0cmlnZ2VyIGhvb2sgZm9yIGRlc3Ryb3lpbmcgY29tcG9uZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBub2RlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudE5vZGUobm9kZSkge1xyXG4gIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgIHVubW91bnROb2RlKGNoaWxkKTtcclxuICB9KTtcclxuXHJcbiAgaWYgKG5vZGUuZWxlbWVudFJlZikge1xyXG4gICAgbm9kZS5jbGVhbkxpc3RlbmVycygpO1xyXG4gICAgbm9kZS5lbGVtZW50UmVmLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZS5lbGVtZW50UmVmKTtcclxuICB9XHJcblxyXG4gIGlmIChub2RlLmlzVHlwZSgnQ29tcG9uZW50JykpIHtcclxuICAgIG5vZGUuaW5zdGFuY2UuZGVzdHJveWVkKCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhbiBIVE1MIGVsZW1lbnQgb3IgdGV4dCBub2RlIGluIERPTSB3aXRoIGl0cyBhcmd1bWVudHMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChub2RlLCBwb3NpdGlvbikge1xyXG4gIGlmIChub2RlLmlzVHlwZSgnVGV4dCcpKSB7XHJcbiAgICBub2RlLmVsZW1lbnRSZWYgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShub2RlLnRhZyk7XHJcbiAgfSBlbHNlIGlmIChub2RlLmlzVHlwZSgnRWxlbWVudCcpKSB7XHJcbiAgICBjb25zdCBjbG9zZXN0V2l0aE5TID0gZmluZENsb3Nlc3ROb2RlKG5vZGUsICdbeG1sbnNdJyk7XHJcbiAgICBjb25zdCB4bWxucyA9IG5vZGUucGVuZGluZ1Byb3BzLnhtbG5zID8/IGNsb3Nlc3RXaXRoTlM/LnBlbmRpbmdQcm9wcy54bWxucyA/PyAnJztcclxuXHJcbiAgICBpZiAoeG1sbnMpIHtcclxuICAgICAgbm9kZS5lbGVtZW50UmVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCBub2RlLnRhZyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBub2RlLmVsZW1lbnRSZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGUudGFnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlRWxlbWVudEF0dHJpYnV0ZXMobm9kZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXJlbnRFbCA9IGZpbmRDbG9zZXN0RE9NTm9kZShub2RlKTtcclxuICBjb25zdCBjaGlsZEF0ID0gcGFyZW50RWwuY2hpbGRyZW5bcG9zaXRpb25dO1xyXG5cclxuICBwYXJlbnRFbC5pbnNlcnRCZWZvcmUobm9kZS5lbGVtZW50UmVmLCBjaGlsZEF0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVFbGVtZW50KG5vZGUpIHtcclxuICBjb25zdCBkaWZmZWRQcm9wcyA9IGRpZmZQcm9wcyhub2RlLm9sZFByb3BzLCBub2RlLnBlbmRpbmdQcm9wcyk7XHJcblxyXG4gIGRpZmZlZFByb3BzLmZvckVhY2goKHByb3ApID0+IHtcclxuICAgIGlmIChwcm9wLnR5cGUgPT09ICdSZW1vdmUnICkge1xyXG4gICAgICBoYW5kbGVSZW1vdmluZ1Byb3BzKG5vZGUsIHByb3AubmFtZSwgcHJvcC52YWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHByb3AudHlwZSA9PT0gJ0FkZCcgKSB7XHJcbiAgICAgIGhhbmRsZUFkZGluZ1Byb3BzKG5vZGUsIHByb3AubmFtZSwgcHJvcC52YWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHByb3AudHlwZSA9PT0gJ1VwZGF0ZScgKSB7XHJcbiAgICAgIGhhbmRsZVVwZGF0aW5nUHJvcHMobm9kZSwgcHJvcC5uYW1lLCBwcm9wLnZhbHVlKTtcclxuICAgIH1cclxuICB9KTtcclxufSIsImltcG9ydCB7RW1wdHlPYmplY3QsIGZsYXR0ZW5SZW5kZXJSZXN1bHRDaGlsZHJlbn0gZnJvbSBcIkAvdXRpbHNcIjtcclxuaW1wb3J0IHtidWlsZFZpcnR1YWxUcmVlfSBmcm9tIFwiQC92aXJ0dWFsLW5vZGVcIjtcclxuXHJcbi8qKiBAdHlwZSB7VmlydHVhbE5vZGV8bnVsbH0gKi9cclxubGV0IGxhc3RNb3VudGVkVmlydHVhbE5vZGUgPSBudWxsO1xyXG5cclxuLyoqXHJcbiAqIEJ1aWxkIGFuZCBtb3VudCB3aG9sZSBzdWJ0cmVlIG9mIHZpcnR1YWwgbm9kZS5cclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbm9kZVxyXG4gKi9cclxuZnVuY3Rpb24gbW91bnRWaXJ0dWFsU3VidHJlZShub2RlKSB7XHJcbiAgbm9kZS5lZmZlY3QgPSAnUGxhY2VtZW50JztcclxuICBsYXN0TW91bnRlZFZpcnR1YWxOb2RlID0gbm9kZTtcclxuXHJcbiAgaWYgKG5vZGUuaXNUeXBlKCdDb21wb25lbnQnKSkge1xyXG4gICAgbm9kZS5jcmVhdGVDb21wb25lbnQoKTtcclxuXHJcbiAgICBsZXQgcmVuZGVyUmVzdWx0ID0gbm9kZS5pbnN0YW5jZS5yZW5kZXIoKTtcclxuICAgIHJlbmRlclJlc3VsdCA9IGZsYXR0ZW5SZW5kZXJSZXN1bHRDaGlsZHJlbihyZW5kZXJSZXN1bHQpO1xyXG4gICAgbGV0IHN1YnRyZWUgPSBidWlsZFZpcnR1YWxUcmVlKHJlbmRlclJlc3VsdClcclxuXHJcbiAgICBpZiAoc3VidHJlZSkge1xyXG4gICAgICBub2RlLmFwcGVuZENoaWxkKHN1YnRyZWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcclxuICAgIGNoaWxkTm9kZS5lZmZlY3QgPSAnUGxhY2VtZW50JztcclxuICAgIG1vdW50VmlydHVhbFN1YnRyZWUoY2hpbGROb2RlKTtcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvcHkgcmVmZXJlbmNlcyBzdWNoIGVsZW1lbnQgcmVmZXJlbmNlLCBwcm9wcyBvciBjb21wb25lbnQgaW5zdGFuY2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IGN1cnJlbnROb2RlXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5ld05vZGVcclxuICogQHBhcmFtIHtib29sZWFufSByZWN1cnNpdmVcclxuICovXHJcbmZ1bmN0aW9uIGNvcHlOb2RlUmVmZXJlbmNlcyhjdXJyZW50Tm9kZSwgbmV3Tm9kZSwgcmVjdXJzaXZlID0gZmFsc2UpIHtcclxuICBpZiAoY3VycmVudE5vZGUudGFnID09PSBuZXdOb2RlLnRhZykge1xyXG4gICAgbmV3Tm9kZS5vbGRQcm9wcyA9IGN1cnJlbnROb2RlLm9sZFByb3BzID8/IEVtcHR5T2JqZWN0O1xyXG4gICAgbmV3Tm9kZS5lbGVtZW50UmVmID0gY3VycmVudE5vZGUuZWxlbWVudFJlZiA/PyBudWxsO1xyXG5cclxuICAgIGlmIChuZXdOb2RlLmlzVHlwZSgnQ29tcG9uZW50JykpIHtcclxuICAgICAgbmV3Tm9kZS5pbnN0YW5jZSA9IGN1cnJlbnROb2RlLmluc3RhbmNlO1xyXG4gICAgICBuZXdOb2RlLmluc3RhbmNlLnByb3BzID0gbmV3Tm9kZS5wZW5kaW5nUHJvcHMgPz8gRW1wdHlPYmplY3Q7XHJcbiAgICAgIG5ld05vZGUuc3RhdGUgPSBjdXJyZW50Tm9kZS5zdGF0ZTtcclxuICAgICAgbmV3Tm9kZS5zdGF0ZUNoYW5nZWQgPSBjdXJyZW50Tm9kZS5zdGF0ZUNoYW5nZWQ7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHJlY3Vyc2l2ZSkge1xyXG4gICAgbmV3Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvcHlOb2RlUmVmZXJlbmNlcyhjdXJyZW50Tm9kZS5jaGlsZHJlbltpbmRleF0sIGNoaWxkTm9kZSwgcmVjdXJzaXZlKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiBwZW5kaW5nIHByb3BzIGFyZSBkaWZmZXJlbnQgZnJvbSBvbGQgcHJvcHMuXHJcbiAqIEl0J3Mgc2hhbGxvdyBjb21wYXJpc29uIHNvIG9iamVjdC1saWtlIHByb3BzIGFyZSBjb21wYXJlZCB0aHJvdWdoIHJlZmVyZW5jZS5cclxuICpcclxuICogQHBhcmFtIHtTcGFya0pTLlByb3BzfSBvbGRQcm9wc1xyXG4gKiBAcGFyYW0ge1NwYXJrSlMuUHJvcHN9IHBlbmRpbmdQcm9wc1xyXG4gKi9cclxuZnVuY3Rpb24gY29tcGFyZVByb3BzKG9sZFByb3BzLCBwZW5kaW5nUHJvcHMpIHtcclxuICBpZiAodHlwZW9mIG9sZFByb3BzICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgcGVuZGluZ1Byb3BzICE9PSAnb2JqZWN0Jykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKE9iamVjdC5rZXlzKG9sZFByb3BzKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKHBlbmRpbmdQcm9wcykubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmVudHJpZXMocGVuZGluZ1Byb3BzKS5ldmVyeSgoW2tleSwgdmFsdWVdLCBpbmRleCkgPT4ge1xyXG4gICAgcmV0dXJuIHZhbHVlID09PSBvbGRQcm9wc1trZXldO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIHZpcnR1YWwgbm9kZSBzaG91bGQgYmUgdXBkYXRlZC5cclxuICogVmlydHVhbCBub2RlIHNob3VsZCB1cGRhdGUgaWYgbm9kZSdzIHByb3BzIGFyZSBjaGFuZ2VkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBub2RlXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gc2hvdWxkVXBkYXRlTm9kZShub2RlKSB7XHJcbiAgcmV0dXJuICFjb21wYXJlUHJvcHMobm9kZS5vbGRQcm9wcywgbm9kZS5wZW5kaW5nUHJvcHMpO1xyXG59XHJcblxyXG4vKipcclxuICogVXBkYXRlcyB2aXJ0dWFsIG5vZGUgYW5kIGlmIGl0IGlzIGNvbXBvbmVudCB0aGVuIHRyeSB0byBnZXQgbmV3IHJlbmRlciByZXN1bHQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICovXHJcbmZ1bmN0aW9uIHVwZGF0ZU5vZGUobm9kZSkge1xyXG4gIG5vZGUuZWZmZWN0ID0gJ1VwZGF0ZSc7XHJcbiAgbm9kZS5wZW5kaW5nVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgaWYgKCFub2RlLmlzVHlwZSgnQ29tcG9uZW50JykpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGxldCByZW5kZXJSZXN1bHQgPSBub2RlLmluc3RhbmNlLnJlbmRlcigpO1xyXG4gIHJlbmRlclJlc3VsdCA9IGZsYXR0ZW5SZW5kZXJSZXN1bHRDaGlsZHJlbihyZW5kZXJSZXN1bHQpO1xyXG4gIGNvbnN0IHN1YnRyZWUgPSBidWlsZFZpcnR1YWxUcmVlKHJlbmRlclJlc3VsdClcclxuXHJcbiAgaWYgKHN1YnRyZWUpIHtcclxuICAgIG5vZGUuZW1wdHkoKTtcclxuICAgIG5vZGUuYXBwZW5kQ2hpbGQoc3VidHJlZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogUmV1c2UgY3VycmVudCB2aXJ0dWFsIG5vZGUgd2l0aCBjaGlsZHJlbiBvZiBuZXcgdmlydHVhbCBub2RlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBjdXJyZW50Tm9kZVxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBuZXdOb2RlXHJcbiAqL1xyXG5mdW5jdGlvbiByZXVzZU5vZGUoY3VycmVudE5vZGUsIG5ld05vZGUpIHtcclxuICBjb25zdCBjbG9uZWRDdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLmNsb25lKCk7XHJcblxyXG4gIGlmIChuZXdOb2RlLmlzVHlwZSgnQ29tcG9uZW50JykpIHtcclxuICAgIGxldCByZW5kZXJSZXN1bHQgPSBuZXdOb2RlLmluc3RhbmNlLnJlbmRlcigpO1xyXG4gICAgcmVuZGVyUmVzdWx0ID0gZmxhdHRlblJlbmRlclJlc3VsdENoaWxkcmVuKHJlbmRlclJlc3VsdCk7XHJcbiAgICBjb25zdCBzdWJ0cmVlID0gYnVpbGRWaXJ0dWFsVHJlZShyZW5kZXJSZXN1bHQpXHJcblxyXG4gICAgaWYgKHN1YnRyZWUpIHtcclxuICAgICAgbmV3Tm9kZS5lbXB0eSgpO1xyXG4gICAgICBuZXdOb2RlLmFwcGVuZENoaWxkKHN1YnRyZWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvbmVkQ3VycmVudE5vZGUucGFyZW50ID0gbmV3Tm9kZS5wYXJlbnQ7XHJcbiAgY2xvbmVkQ3VycmVudE5vZGUuY2hpbGRyZW4gPSBuZXdOb2RlLmNoaWxkcmVuO1xyXG5cclxuICBuZXdOb2RlLmNvcHlGcm9tKGNsb25lZEN1cnJlbnROb2RlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZpbmRzIGEgdmlydHVhbCBub2RlIGJhc2VkIG9uIGl0J3MgZGVmaW5lZCBrZXkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxyXG4gKi9cclxuZnVuY3Rpb24gZmluZE5vZGVXaXRoS2V5KG5vZGUsIGtleSkge1xyXG4gIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xyXG4gICAgaWYgKGNoaWxkLmtleSA9PT0ga2V5KSB7XHJcbiAgICAgIHJldHVybiBjaGlsZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogRmluZHMgYSBtYXRjaGluZyBjaGlsZCBpbiBjdXJyZW50IG5vZGUgYmFzZWQgb24gcG9zaXRpb24gb3Iga2V5LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBjdXJyZW50Tm9kZVxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBuZXdDaGlsZE5vZGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uXHJcbiAqL1xyXG5mdW5jdGlvbiBmaW5kTWF0Y2hpbmdDaGlsZE5vZGUoY3VycmVudE5vZGUsIG5ld0NoaWxkTm9kZSwgcG9zaXRpb24pIHtcclxuICAvKiogQHR5cGUge1ZpcnR1YWxOb2RlfSAqL1xyXG4gIGxldCBmb3VuZE5vZGUgPSBudWxsXHJcblxyXG4gIGlmICghY3VycmVudE5vZGUpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgaWYgKG5ld0NoaWxkTm9kZS5rZXkpIHtcclxuICAgIGZvdW5kTm9kZSA9IGZpbmROb2RlV2l0aEtleShjdXJyZW50Tm9kZSwgbmV3Q2hpbGROb2RlLmtleSk7XHJcbiAgfVxyXG5cclxuICBpZiAoZm91bmROb2RlKSB7XHJcbiAgICByZXR1cm4gZm91bmROb2RlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA8PSBwb3NpdGlvbikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY3VycmVudE5vZGUuY2hpbGRyZW5bcG9zaXRpb25dO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUxhc3RNb3VudGVkTm9kZSgpIHtcclxuICByZXR1cm4gbGFzdE1vdW50ZWRWaXJ0dWFsTm9kZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbXBhcmVzIG5vZGVzIGF0IHRoZSBzYW1lIHBvc2l0aW9uIGluIHR3byBkaWZmZXJlbnQgdHJlZXMgYW5kIG1hcmtzIGVmZmVjdHNcclxuICogdGhhdCBuZWVkcyB0byBiZSBsYXRlciBwcm9jZXNzZWQuXHJcbiAqXHJcbiAqIFBvc3NpYmxlIGVmZmVjdHM6XHJcbiAqIC0gUGxhY2VtZW50IChtYXJrZWQgZm9yIHBsYWNpbmcgYXMgbmV3IERPTSBlbGVtZW50KVxyXG4gKiAtIFVwZGF0ZSAobWFya2VkIGZvciB1cGRhdGluZyBwcm9wcyBvZiBET00gZWxlbWVudClcclxuICogLSBEZWxldGlvbiAobWFya2VkIGZvciByZW1vdmluZyBET00gZWxlbWVudClcclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gY3VycmVudE5vZGVcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbmV3Tm9kZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlY29uY2lsZShjdXJyZW50Tm9kZSwgbmV3Tm9kZSkge1xyXG4gIGlmIChjdXJyZW50Tm9kZSAmJiBjdXJyZW50Tm9kZS50YWcgIT09IG5ld05vZGUudGFnKSB7XHJcbiAgICBjdXJyZW50Tm9kZS5lZmZlY3QgPSAnRGVsZXRpb24nO1xyXG4gICAgbW91bnRWaXJ0dWFsU3VidHJlZShuZXdOb2RlKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmICghY3VycmVudE5vZGUpIHtcclxuICAgIG1vdW50VmlydHVhbFN1YnRyZWUobmV3Tm9kZSk7XHJcbiAgICByZXR1cm47XHJcbiAgfSBlbHNlIGlmICghbmV3Tm9kZS5pc1R5cGUoJ1Jvb3QnKSkge1xyXG4gICAgY29weU5vZGVSZWZlcmVuY2VzKGN1cnJlbnROb2RlLCBuZXdOb2RlKTtcclxuXHJcbiAgICBpZiAoc2hvdWxkVXBkYXRlTm9kZShuZXdOb2RlKSkge1xyXG4gICAgICB1cGRhdGVOb2RlKG5ld05vZGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV1c2VOb2RlKGN1cnJlbnROb2RlLCBuZXdOb2RlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHByb2Nlc3NlZENoaWxkcmVuID0gW107XHJcbiAgbmV3Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBtYXRjaGluZ0NoaWxkID0gZmluZE1hdGNoaW5nQ2hpbGROb2RlKGN1cnJlbnROb2RlLCBjaGlsZE5vZGUsIGluZGV4KTtcclxuXHJcbiAgICByZWNvbmNpbGUobWF0Y2hpbmdDaGlsZCwgY2hpbGROb2RlKTtcclxuICAgIHByb2Nlc3NlZENoaWxkcmVuLnB1c2gobWF0Y2hpbmdDaGlsZCk7XHJcbiAgfSk7XHJcblxyXG4gIGN1cnJlbnROb2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcclxuICAgIGlmICghcHJvY2Vzc2VkQ2hpbGRyZW4uaW5jbHVkZXMoY2hpbGROb2RlKSkge1xyXG4gICAgICBjaGlsZE5vZGUuZWZmZWN0ID0gJ0RlbGV0aW9uJztcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRyYXZlcnNlIHRocm91Z2ggYWxsIHZpcnR1YWwgbm9kZXMgaW4gdmlydHVhbCB0cmVlIGFuZCByZXNvbHZlIGVmZmVjdHMgdGhhdCBuZWVkcyB0byBiZSBwcm9jZXNzZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uXHJcbiAqIEByZXR1cm5zIHtTcGFya0pTLkVmZmVjdFtdfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVFZmZlY3RzRnJvbU5vZGVzKG5vZGUsIHBvc2l0aW9uID0gMCkge1xyXG4gIC8qKiBAdHlwZSB7U3BhcmtKUy5FZmZlY3RbXX0gKi9cclxuICBsZXQgZWZmZWN0cyA9IFtdO1xyXG5cclxuICBpZiAoIW5vZGUpIHtcclxuICAgIHJldHVybiBlZmZlY3RzO1xyXG4gIH1cclxuXHJcbiAgaWYgKG5vZGUuZWZmZWN0ICE9PSAnJykge1xyXG4gICAgZWZmZWN0cy5wdXNoKHtcclxuICAgICAgdHlwZTogbm9kZS5lZmZlY3QsXHJcbiAgICAgIHBhcmVudDogbm9kZS5wYXJlbnQsXHJcbiAgICAgIG5vZGVSZWY6IG5vZGUsXHJcbiAgICAgIHBvc2l0aW9uLFxyXG4gICAgfSk7XHJcbiAgICBub2RlLmVmZmVjdCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcclxuICAgIGVmZmVjdHMgPSBbXHJcbiAgICAgIC4uLmVmZmVjdHMsXHJcbiAgICAgIC4uLnJlc29sdmVFZmZlY3RzRnJvbU5vZGVzKGNoaWxkLCBpbmRleCksXHJcbiAgICBdO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZWZmZWN0cztcclxufVxyXG5cclxuLyoqXHJcbiAqIENsZWFucyBhbGwgaW5kaWNhdG9ycyBhbmQgZWZmZWN0cyBmcm9tIHZpcnR1YWwgdHJ1ZS5cclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbm9kZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuTm9kZXMobm9kZSkge1xyXG4gIG5vZGUuZWZmZWN0ID0gJyc7XHJcbiAgbm9kZS5zdGF0ZUNoYW5nZWQgPSBmYWxzZTtcclxuXHJcbiAgaWYgKCFjb21wYXJlUHJvcHMobm9kZS5vbGRQcm9wcywgbm9kZS5wZW5kaW5nUHJvcHMpKSB7XHJcbiAgICBub2RlLm9sZFByb3BzID0gbm9kZS5wZW5kaW5nUHJvcHM7XHJcbiAgfVxyXG5cclxuICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICBjbGVhbk5vZGVzKGNoaWxkKTtcclxuICB9KTtcclxufSIsImltcG9ydCB7YnVpbGRWaXJ0dWFsVHJlZVJvb3QsIGZpbmROb2RlQnlDb21wb25lbnR9IGZyb20gXCJAL3ZpcnR1YWwtbm9kZVwiO1xyXG5pbXBvcnQge2NsZWFuTm9kZXMsIHJlY29uY2lsZSwgcmVzb2x2ZUVmZmVjdHNGcm9tTm9kZXMsIHJlc29sdmVMYXN0TW91bnRlZE5vZGV9IGZyb20gXCJAL3JlY29uY2lsZXJcIjtcclxuaW1wb3J0IHtjcmVhdGVFbGVtZW50LCB1bm1vdW50Tm9kZSwgdXBkYXRlRWxlbWVudH0gZnJvbSBcIkAvZG9tXCI7XHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIGNvbXBvbmVudCBub2RlcyBhcmUgcmVhZHkgdG8gdHJpZ2dlciBob29rcyBmb3IgbW91bnRpbmcgb3IgdXBkYXRpbmcuXHJcbiAqIFdoaWNoIGhvb2sgdG8gdHJpZ2dlciBkZXBlbmRzIG9uIGdpdmVuIGFjdGlvbi5cclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZVtdfSBjb21wb25lbnROb2Rlc1xyXG4gKiBAcGFyYW0geydtb3VudCd8J3VwZGF0ZSd9YWN0aW9uXHJcbiAqL1xyXG5mdW5jdGlvbiBwcm9jZXNzQ29tcG9uZW50Tm9kZXMoY29tcG9uZW50Tm9kZXMsIGFjdGlvbiA9ICdtb3VudCcpIHtcclxuICBpZiAoIVsnbW91bnQnLCAndXBkYXRlJ10uaW5jbHVkZXMoYWN0aW9uKSkge1xyXG4gICAgYWN0aW9uID0gJ21vdW50JztcclxuICB9XHJcblxyXG4gIHdoaWxlIChjb21wb25lbnROb2Rlcy5sZW5ndGggPiAwKSB7XHJcbiAgICBpZiAoYWN0aW9uID09PSAnbW91bnQnICYmICFjb21wb25lbnROb2Rlc1swXS5hbGxDaGlsZHJlbk1vdW50ZWQoKSkge1xyXG4gICAgICBicmVhaztcclxuICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSAndXBkYXRlJyAmJiAhY29tcG9uZW50Tm9kZXNbMF0uYWxsQ2hpbGRyZW5VcGRhdGVkKCkpIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbiA9PT0gJ21vdW50Jykge1xyXG4gICAgICBjb21wb25lbnROb2Rlc1swXS5tb3VudGVkID0gdHJ1ZTtcclxuICAgICAgY29tcG9uZW50Tm9kZXNbMF0uaW5zdGFuY2UubW91bnRlZCgpO1xyXG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICd1cGRhdGUnKSB7XHJcbiAgICAgIGNvbXBvbmVudE5vZGVzWzBdLmluc3RhbmNlLnVwZGF0ZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnROb2Rlcy5zaGlmdCgpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEhhbmRsZXMgZWZmZWN0IGZvciBwbGFjaW5nIGEgbmV3IEhUTUwgZWxlbWVudCBvciB0ZXh0IG5vZGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BhcmtKUy5FZmZlY3R9IGVmZmVjdFxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlW119IGNvbXBvbmVudE5vZGVzXHJcbiAqL1xyXG5mdW5jdGlvbiBoYW5kbGVQbGFjZW1lbnQoZWZmZWN0LCBjb21wb25lbnROb2Rlcykge1xyXG4gIGlmIChlZmZlY3Qubm9kZVJlZi5pc1R5cGUoJ0NvbXBvbmVudCcpKSB7XHJcbiAgICBjb21wb25lbnROb2Rlcy51bnNoaWZ0KGVmZmVjdC5ub2RlUmVmKTtcclxuICB9XHJcblxyXG4gIGlmIChlZmZlY3Qubm9kZVJlZi5pc1R5cGUoJ0VsZW1lbnQnKSB8fCBlZmZlY3Qubm9kZVJlZi5pc1R5cGUoJ1RleHQnKSkge1xyXG4gICAgY3JlYXRlRWxlbWVudChlZmZlY3Qubm9kZVJlZiwgZWZmZWN0LnBvc2l0aW9uKTtcclxuXHJcbiAgICBpZiAoZWZmZWN0Lm5vZGVSZWYucmVmKSB7XHJcbiAgICAgIGVmZmVjdC5ub2RlUmVmLnJlZi5jdXJyZW50ID0gZWZmZWN0Lm5vZGVSZWYuZWxlbWVudFJlZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb2Nlc3NDb21wb25lbnROb2Rlcyhjb21wb25lbnROb2RlcywgJ21vdW50Jyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBIYW5kbGVzIGVmZmVjdCBmb3IgdXBkYXRpbmcgZXhpc3RpbmcgSFRNTCBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwYXJrSlMuRWZmZWN0fSBlZmZlY3RcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZVtdfSBjb21wb25lbnROb2Rlc1xyXG4gKi9cclxuZnVuY3Rpb24gaGFuZGxlVXBkYXRlKGVmZmVjdCwgY29tcG9uZW50Tm9kZXMpIHtcclxuICBlZmZlY3Qubm9kZVJlZi5wZW5kaW5nVXBkYXRlID0gZmFsc2U7XHJcblxyXG4gIGlmIChlZmZlY3Qubm9kZVJlZi5pc1R5cGUoJ0NvbXBvbmVudCcpKSB7XHJcbiAgICBjb21wb25lbnROb2Rlcy51bnNoaWZ0KGVmZmVjdC5ub2RlUmVmKTtcclxuICB9XHJcblxyXG4gIGlmIChlZmZlY3Qubm9kZVJlZi5pc1R5cGUoJ0VsZW1lbnQnKSkge1xyXG4gICAgdXBkYXRlRWxlbWVudChlZmZlY3Qubm9kZVJlZik7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzQ29tcG9uZW50Tm9kZXMoY29tcG9uZW50Tm9kZXMsICd1cGRhdGUnKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwYXJrIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovXHJcbiAgICB0aGlzLl9yb290RWwgPSBudWxsO1xyXG4gICAgLyoqIEB0eXBlIHtTcGFya0pTLlJlbmRlckNhbGxiYWNrfSAqL1xyXG4gICAgdGhpcy5fcm9vdEZ1bmMgPSBudWxsO1xyXG4gICAgLyoqIEB0eXBlIHtWaXJ0dWFsTm9kZX0gKi9cclxuICAgIHRoaXMuX3ZpcnR1YWxUcmVlID0gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgYSBmdW5jdGlvbiB0aGF0IHJldHVybiBKU1ggc3RydWN0dXJlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsoKSA9PiBTcGFya0pTLlJlbmRlclJlc3VsdH0gcm9vdEZuXHJcbiAgICovXHJcbiAgc2V0Um9vdEZ1bmN0aW9uKHJvb3RGbikge1xyXG4gICAgdGhpcy5fcm9vdEZ1bmMgPSByb290Rm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNb3VudHMgYXBwbGljYXRpb24gdG8gSFRNTCBlbGVtZW50IGFuZCB0cmlnZ2VyIHJlbmRlci5cclxuICAgKiBJdCB0aHJvd3MgZXJyb3IgaWYgcm9vdCBlbGVtZW50IGlzbid0IGZvdW5kLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxzdHJpbmd9IG1vdW50RWxcclxuICAgKi9cclxuICBtb3VudChtb3VudEVsKSB7XHJcbiAgICBpZiAodHlwZW9mIG1vdW50RWwgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRoaXMuX3Jvb3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobW91bnRFbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9yb290RWwgPSBtb3VudEVsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghKHRoaXMuX3Jvb3RFbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGEgcm9vdCBlbGVtZW50Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICghdGhpcy5fcm9vdEVsKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgYSByb290IGVsZW1lbnQnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW5kZXJSZXN1bHQgPSB0aGlzLl9yb290RnVuYygpO1xyXG4gICAgY29uc3QgbmV3VmlydHVhbFRyZWUgPSBidWlsZFZpcnR1YWxUcmVlUm9vdChyZW5kZXJSZXN1bHQpO1xyXG5cclxuICAgIHJlY29uY2lsZSh0aGlzLl92aXJ0dWFsVHJlZSwgbmV3VmlydHVhbFRyZWUpO1xyXG5cclxuICAgIGNvbnN0IGRlbGV0aW9ucyA9IHJlc29sdmVFZmZlY3RzRnJvbU5vZGVzKHRoaXMuX3ZpcnR1YWxUcmVlKTtcclxuICAgIGNvbnN0IG5ld0NoYW5nZXMgPSByZXNvbHZlRWZmZWN0c0Zyb21Ob2RlcyhuZXdWaXJ0dWFsVHJlZSk7XHJcblxyXG4gICAgZGVsZXRpb25zLmZvckVhY2goKGVmZmVjdCkgPT4ge1xyXG4gICAgICBpZiAoZWZmZWN0LnR5cGUgPT09ICdEZWxldGlvbicpIHtcclxuICAgICAgICB1bm1vdW50Tm9kZShlZmZlY3Qubm9kZVJlZik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX3ZpcnR1YWxUcmVlID0gbmV3VmlydHVhbFRyZWU7XHJcbiAgICB0aGlzLl92aXJ0dWFsVHJlZS5lbGVtZW50UmVmID0gdGhpcy5fcm9vdEVsO1xyXG5cclxuICAgIC8qKiBAdHlwZSB7VmlydHVhbE5vZGVbXX0gKi9cclxuICAgIGNvbnN0IG1vdW50ZWRDb21wb25lbnROb2RlcyA9IFtdO1xyXG4gICAgLyoqIEB0eXBlIHtWaXJ0dWFsTm9kZVtdfSAqL1xyXG4gICAgY29uc3QgdXBkYXRlZENvbXBvbmVudE5vZGVzID0gW107XHJcblxyXG4gICAgbmV3Q2hhbmdlcy5mb3JFYWNoKChlZmZlY3QpID0+IHtcclxuICAgICAgaWYgKGVmZmVjdC50eXBlID09PSAnUGxhY2VtZW50Jykge1xyXG4gICAgICAgIGhhbmRsZVBsYWNlbWVudChlZmZlY3QsIG1vdW50ZWRDb21wb25lbnROb2Rlcyk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZWZmZWN0LnR5cGUgPT09ICdVcGRhdGUnKSB7XHJcbiAgICAgICAgaGFuZGxlVXBkYXRlKGVmZmVjdCwgdXBkYXRlZENvbXBvbmVudE5vZGVzKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY2xlYW5Ob2Rlcyh0aGlzLl92aXJ0dWFsVHJlZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnRcclxuICAgKi9cclxuICBvblN0YXRlQ2hhbmdlZChjb21wb25lbnQpIHtcclxuICAgIGNvbnN0IGZvdW5kTm9kZSA9IGZpbmROb2RlQnlDb21wb25lbnQodGhpcy5fdmlydHVhbFRyZWUsIGNvbXBvbmVudCk7XHJcblxyXG4gICAgaWYgKCFmb3VuZE5vZGUpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdTa2lwcGluZyByZW5kZXIuIEEgcmVuZGVyIG5vZGUgbm90IGZvdW5kIGZvciBjb21wb25lbnQ6ICcgKyBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXF1ZXN0IHRvIHJlLXJlbmRlciBhcHBsaWNhdGlvbi5cclxuICAgIGZvdW5kTm9kZS5zdGF0ZUNoYW5nZWQgPSB0cnVlO1xyXG4gICAgZm91bmROb2RlLnN0YXRlID0gY29tcG9uZW50LnN0YXRlO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWYodmFsdWUpIHtcclxuICBjb25zdCBsYXN0TW91bnRlZE5vZGUgPSByZXNvbHZlTGFzdE1vdW50ZWROb2RlKCk7XHJcblxyXG4gIGlmICghbGFzdE1vdW50ZWROb2RlKSB7XHJcbiAgICBjb25zb2xlLndhcm4oJ1NraXBwaW5nIGNyZWF0ZVJlZi4gTGFzdCBtb3VudGVkIHZpcnR1YWwgbm9kZSBub3QgZm91bmQuIENhdXNlOiBwcm9iYWJseSBjYWxsaW5nIGNyZWF0ZVJlZiBvdXRzaWRlIG9mIGNvbnN0cnVjdG9yLicpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVmID0ge1xyXG4gICAgY3VycmVudDogdmFsdWVcclxuICB9XHJcblxyXG4gIGxhc3RNb3VudGVkTm9kZS5yZWZzLnB1c2gocmVmKTtcclxuICByZXR1cm4gcmVmO1xyXG59IiwiZXhwb3J0IGNvbnN0IEVtcHR5T2JqZWN0ID0ge307XHJcblxyXG4vKipcclxuICogRmxhdHRlbiBjaGlsZHJlbiBvZiByZW5kZXIgcmVzdWx0IGlmIGFueSBvZiB0aGVtIGlzIHR5cGUgb2YgYXJyYXkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BhcmtKUy5SZW5kZXJSZXN1bHR9IHJlbmRlclJlc3VsdFxyXG4gKiBAcmV0dXJucyB7U3BhcmtKUy5SZW5kZXJSZXN1bHR9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlblJlbmRlclJlc3VsdENoaWxkcmVuKHJlbmRlclJlc3VsdCkge1xyXG4gIGlmICh0eXBlb2YgcmVuZGVyUmVzdWx0ID09PSAnc3RyaW5nJykge1xyXG4gICAgcmV0dXJuIHJlbmRlclJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8qKiBAdHlwZSB7UmVuZGVyUmVzdWx0W119ICovXHJcbiAgbGV0IGNoaWxkcmVuID0gW107XHJcbiAgcmVuZGVyUmVzdWx0LmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGNoaWxkKSkge1xyXG4gICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNoaWxkcmVuID0gW1xyXG4gICAgICAuLi5jaGlsZHJlbixcclxuICAgICAgLi4uY2hpbGQsXHJcbiAgICBdO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLi4ucmVuZGVyUmVzdWx0LFxyXG4gICAgY2hpbGRyZW4sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUNsYXNzTmFtZSh2YWx1ZSkge1xyXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XHJcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIGxldCBjbGFzc1Rva2VucyA9ICFBcnJheS5pc0FycmF5KHZhbHVlKSA/IE9iamVjdC5rZXlzKHZhbHVlKS5maWx0ZXIoKGNsYXNzTmFtZSkgPT4ge1xyXG4gICAgcmV0dXJuIHZhbHVlW2NsYXNzTmFtZV07XHJcbiAgfSkgOiB2YWx1ZTtcclxuXHJcbiAgY2xhc3NUb2tlbnMgPSBjbGFzc1Rva2Vucy5maWx0ZXIoKGNsYXNzTmFtZSwgaW5kZXgsIHRva2VucykgPT4ge1xyXG4gICAgcmV0dXJuIHRva2Vucy5pbmRleE9mKGNsYXNzTmFtZSkgPT09IGluZGV4O1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY2xhc3NUb2tlbnMuam9pbignICcpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVN0eWxlKHZhbHVlKSB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0eWxlIGNhbm5vdCBiZSB1c2UgYXMgYXJyYXkhJyk7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xyXG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmVudHJpZXModmFsdWUpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICBpZiAoL15bYS16XSpbQS1aXS8udGVzdChrZXkpKSB7XHJcbiAgICAgIGNvbnN0IGtleVRva2VucyA9IGtleS5zcGxpdCgvKD89W0EtWl0pLykubWFwKCh0b2tlbikgPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2tlbi50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGtleSA9IGtleVRva2Vucy5qb2luKCctJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGAke2tleX06ICR7dmFsdWV9YDtcclxuICB9KS5qb2luKCc7ICcpO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtTcGFya0pTLlByb3BzfSBvbGRQcm9wc1xyXG4gKiBAcGFyYW0ge1NwYXJrSlMuUHJvcHN9IHBlbmRpbmdQcm9wc1xyXG4gKiBAcmV0dXJucyB7U3BhcmtKUy5Qcm9wc0RpZmZbXX1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkaWZmUHJvcHMob2xkUHJvcHMsIHBlbmRpbmdQcm9wcykge1xyXG4gIC8qKiBAdHlwZSB7U3BhcmtKUy5Qcm9wc0RpZmZbXX0gKi9cclxuICBjb25zdCBwcm9wRGlmZnMgPSBbXTtcclxuXHJcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocGVuZGluZ1Byb3BzKSkge1xyXG4gICAgaWYgKG9sZFByb3BzW2tleV0gPT09IHVuZGVmaW5lZCB8fCBvbGRQcm9wc1trZXldID09PSBudWxsKSB7XHJcbiAgICAgIHByb3BEaWZmcy5wdXNoKHsgdHlwZTogJ0FkZCcsIG5hbWU6IGtleSwgdmFsdWUgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlICE9PSBvbGRQcm9wc1trZXldKSB7XHJcbiAgICAgIHByb3BEaWZmcy5wdXNoKHsgdHlwZTogJ1VwZGF0ZScsIG5hbWU6IGtleSwgdmFsdWUsIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2xkUHJvcHMpKSB7XHJcbiAgICBpZiAocGVuZGluZ1Byb3BzW2tleV0gPT09IHVuZGVmaW5lZCB8fCBwZW5kaW5nUHJvcHNba2V5XSA9PT0gbnVsbCkge1xyXG4gICAgICBwcm9wRGlmZnMucHVzaCh7IHR5cGU6ICdSZW1vdmUnLCBuYW1lOiBrZXksIHZhbHVlIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHByb3BEaWZmcztcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ2xvc2VzdERPTU5vZGUobm9kZSkge1xyXG4gIGxldCBjdXJyZW50Tm9kZSA9IG5vZGU7XHJcblxyXG4gIHdoaWxlIChjdXJyZW50Tm9kZSAmJiBjdXJyZW50Tm9kZS5wYXJlbnQpIHtcclxuICAgIGlmIChjdXJyZW50Tm9kZS5wYXJlbnQuZWxlbWVudFJlZikge1xyXG4gICAgICByZXR1cm4gY3VycmVudE5vZGUucGFyZW50LmVsZW1lbnRSZWY7XHJcbiAgICB9XHJcblxyXG4gICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufSIsImltcG9ydCB7RW1wdHlPYmplY3R9IGZyb20gXCJAL3V0aWxzXCI7XHJcbmltcG9ydCBodG1sVGFncyBmcm9tIFwiaHRtbC10YWdzXCI7XHJcbmltcG9ydCBzdmdUYWdzIGZyb20gXCJzdmctdGFnc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlydHVhbE5vZGUge1xyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemVzIHZpcnR1YWwgbm9kZSB3aXRoIHR5cGUsIHRhZyBhbmQgcHJvcGVydGllcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3BhcmtKUy5Ob2RlVHlwZX0gdHlwZVxyXG4gICAqIEBwYXJhbSB7U3BhcmtKUy5Ob2RlVGFnfSB0YWdcclxuICAgKiBAcGFyYW0ge1NwYXJrSlMuTm9kZVByb3BzfSBwcm9wc1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHR5cGUsIHRhZywgcHJvcHMgPSB7fSkge1xyXG4gICAgY29uc3QgeyBrZXksIHJlZiwgLi4ub3RoZXJQcm9wcyB9ID0gcHJvcHM7XHJcblxyXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd8dW5kZWZpbmVkfSAqL1xyXG4gICAgdGhpcy5rZXkgPSBrZXk7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy50YWcgPSB0YWc7XHJcblxyXG4gICAgLy8gUmVmZXJlbmNlIHByb3BlcnRpZXNcclxuICAgIC8qKiBAdHlwZSB7U3BhcmtKUy5Qcm9wc30gKi9cclxuICAgIHRoaXMub2xkUHJvcHMgPSBFbXB0eU9iamVjdDtcclxuICAgIC8qKiBAdHlwZSB7U3BhcmtKUy5Qcm9wc30gKi9cclxuICAgIHRoaXMucGVuZGluZ1Byb3BzID0gb3RoZXJQcm9wcyA/PyBFbXB0eU9iamVjdDtcclxuICAgIC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgYW55Pn0gKi9cclxuICAgIHRoaXMuc3RhdGUgPSBFbXB0eU9iamVjdDtcclxuICAgIC8qKiBAdHlwZSB7U3BhcmtKUy5SZWZPYmplY3RbXX0gKi9cclxuICAgIHRoaXMucmVmcyA9IFtdO1xyXG4gICAgLyoqIEB0eXBlIHtTcGFya0pTLlJlZk9iamVjdHxudWxsfSAqL1xyXG4gICAgdGhpcy5yZWYgPSByZWY7XHJcbiAgICAvKiogQHR5cGUge0NvbXBvbmVudHxudWxsfSAqL1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XHJcbiAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50fG51bGx9ICovXHJcbiAgICB0aGlzLmVsZW1lbnRSZWYgPSBudWxsO1xyXG4gICAgLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBTcGFya0pTLkV2ZW50TGlzdGVuZXJbXT59ICovXHJcbiAgICB0aGlzLmxpc3RlbmVycyA9IEVtcHR5T2JqZWN0O1xyXG5cclxuICAgIC8vIEluZGljYXRvciBwcm9wZXJ0aWVzXHJcbiAgICAvKiogQHR5cGUge1NwYXJrSlMuRWZmZWN0VHlwZX0gKi9cclxuICAgIHRoaXMuZWZmZWN0ID0gJyc7XHJcbiAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cclxuICAgIHRoaXMucGVuZGluZ1VwZGF0ZSA9IGZhbHNlO1xyXG4gICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xyXG4gICAgdGhpcy5zdGF0ZUNoYW5nZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBOb2RlIHByb3BlcnRpZXNcclxuICAgIC8qKiBAdHlwZSB7VmlydHVhbE5vZGV8bnVsbH0gKi9cclxuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcclxuICAgIC8qKiBAdHlwZSB7VmlydHVhbE5vZGVbXX0gKi9cclxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiB2aXJ0dWFsIG5vZGUgaXMgb2YgY2VydGFpbiB0eXBlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTcGFya0pTLk5vZGVUeXBlfSB0eXBlXHJcbiAgICovXHJcbiAgaXNUeXBlKHR5cGUpIHtcclxuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IHR5cGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgYWxsIGNoaWxkcmVuIHdlcmUgbW91bnRlZCBpbnRvIERPTS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAqL1xyXG4gIGFsbENoaWxkcmVuTW91bnRlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLnJlZHVjZSgoY291bnQsIGNoaWxkTm9kZSkgPT4ge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcblxyXG4gICAgICBpZiAoY2hpbGROb2RlLmlzVHlwZSgnRWxlbWVudCcpIHx8IGNoaWxkTm9kZS5pc1R5cGUoJ1RleHQnKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IGNoaWxkTm9kZS5lbGVtZW50UmVmICE9PSBudWxsO1xyXG4gICAgICB9IGVsc2UgaWYgKGNoaWxkTm9kZS5pc1R5cGUoJ0NvbXBvbmVudCcpKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gY2hpbGROb2RlLm1vdW50ZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBjb3VudCArIChyZXN1bHQgJiYgY2hpbGROb2RlLmFsbENoaWxkcmVuTW91bnRlZCgpID8gMSA6IDApO1xyXG4gICAgfSwgMCkgPT09IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIGFsbCBjaGlsZHJlbiB3ZXJlIHVwZGF0ZWQgaW4gRE9NLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgYWxsQ2hpbGRyZW5VcGRhdGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ucmVkdWNlKChjb3VudCwgY2hpbGROb2RlKSA9PiB7XHJcbiAgICAgIHJldHVybiBjb3VudCArICghY2hpbGROb2RlLnBlbmRpbmdVcGRhdGUgJiYgY2hpbGROb2RlLmFsbENoaWxkcmVuVXBkYXRlZCgpID8gMSA6IDApO1xyXG4gICAgfSwgMCkgPT09IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhIGxpc3RlbmVyIHRvIEhUTUwgZWxlbWVudCBhbmQgc3RvcmUgaXQncyByZWZlcmVuY2UgaW50byBsaXN0ZW5lcnMgb2YgdmlydHVhbCBub2RlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcclxuICAgKiBAcGFyYW0ge1NwYXJrSlMuRXZlbnRMaXN0ZW5lcn0gbGlzdGVuZXJcclxuICAgKi9cclxuICBhZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XHJcbiAgICBpZiAoIXRoaXMuZWxlbWVudFJlZikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmxpc3RlbmVyc1t0eXBlXSkge1xyXG4gICAgICB0aGlzLmxpc3RlbmVyc1t0eXBlXSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZWxlbWVudFJlZi5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKTtcclxuICAgIHRoaXMubGlzdGVuZXJzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBhbiBldmVudCBsaXN0ZW5lciBmcm9tIEhUTUwgZWxlbWVudCBhbmQgZnJvbSBsaXN0ZW5lcnMgb2YgdmlydHVhbCBub2RlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcclxuICAgKiBAcGFyYW0ge1NwYXJrSlMuRXZlbnRMaXN0ZW5lcn0gbGlzdGVuZXJcclxuICAgKi9cclxuICByZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XHJcbiAgICAvKiogQHR5cGUge0V2ZW50TGlzdGVuZXJbXX0gKi9cclxuICAgIGNvbnN0IGxpc3RlbmVyc1dpdGhUeXBlID0gdGhpcy5saXN0ZW5lcnNbdHlwZV0gPz8gW107XHJcblxyXG4gICAgaWYgKGxpc3RlbmVyc1dpdGhUeXBlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZvdW5kTGlzdGVuZXJJbmRleCA9IC0xO1xyXG4gICAgY29uc3QgZm91bmRMaXN0ZW5lciA9IGxpc3RlbmVyc1dpdGhUeXBlLmZpbmQoKGFub3RoZXJMaXN0ZW5lciwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGFub3RoZXJMaXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcclxuICAgICAgICBmb3VuZExpc3RlbmVySW5kZXggPSBpbmRleDtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFmb3VuZExpc3RlbmVyKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gZXZlbnQgbGlzdGVuZXIgZm9yICR7dHlwZX0gb24gbm9kZSAke3RoaXMudGFnfSBub3QgZm91bmQuIENhdXNlOiBldmVudCBsaXN0ZW5lciBwcm9iYWJseSB3YXNuJ3QgYm91bmQgaW4gY29uc3RydWN0b3IuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbGVtZW50UmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpO1xyXG4gICAgbGlzdGVuZXJzV2l0aFR5cGUuc3BsaWNlKGZvdW5kTGlzdGVuZXJJbmRleCwgMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhbnMgYWxsIGxpc3RlbmVycyBmcm9tIEhUTUwgZWxlbWVudCBhbmQgZnJvbSBsaXN0ZW5lcnMgb2YgdmlydHVhbCBub2RlLlxyXG4gICAqL1xyXG4gIGNsZWFuTGlzdGVuZXJzKCkge1xyXG4gICAgZm9yIChjb25zdCBbdHlwZSwgbGlzdGVuZXJzXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLmxpc3RlbmVycykpIHtcclxuICAgICAgaWYgKCF0aGlzLmVsZW1lbnRSZWYpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5saXN0ZW5lcnMgPSBFbXB0eU9iamVjdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgY29tcG9uZW50IGFuZCBjb3B5IGl0J3Mgc3RhdGUgaW50byB2aXJ0dWFsIG9kZSdzIHN0YXRlLlxyXG4gICAqL1xyXG4gIGNyZWF0ZUNvbXBvbmVudCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgdGhpcy50YWcodGhpcy5wZW5kaW5nUHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuaW5zdGFuY2Uuc3RhdGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBcHBlbmRzIGEgY2hpbGQgbm9kZSBpbnRvIGN1cnJlbnQgbm9kZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICAgKi9cclxuICBhcHBlbmRDaGlsZChub2RlKSB7XHJcbiAgICBub2RlLnBhcmVudCA9IHRoaXM7XHJcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2gobm9kZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXBsYWNlcyBhIGNoaWxkIG5vZGUgaW4gY3VycmVudCBub2RlIHdpdGggYSBuZXcgbm9kZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5ld05vZGVcclxuICAgKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBvbGROb2RlXHJcbiAgICovXHJcbiAgcmVwbGFjZUNoaWxkKG5ld05vZGUsIG9sZE5vZGUpIHtcclxuICAgIGNvbnN0IGluZGV4T2YgPSB0aGlzLmNoaWxkcmVuLmluZGV4T2Yob2xkTm9kZSk7XHJcblxyXG4gICAgaWYgKGluZGV4T2YgPj0gMCkge1xyXG4gICAgICBuZXdOb2RlLnBhcmVudCA9IHRoaXM7XHJcbiAgICAgIHRoaXMuY2hpbGRyZW5baW5kZXhPZl0ucGFyZW50ID0gbnVsbDtcclxuICAgICAgdGhpcy5jaGlsZHJlbltpbmRleE9mXSA9IG5ld05vZGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGEgY2hpbGQgbm9kZSBmcm9tIGN1cnJlbnQgbm9kZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICAgKi9cclxuICByZW1vdmVDaGlsZChub2RlKSB7XHJcbiAgICBjb25zdCBpbmRleE9mID0gdGhpcy5jaGlsZHJlbi5pbmRleE9mKG5vZGUpO1xyXG5cclxuICAgIGlmIChpbmRleE9mID49IDApIHtcclxuICAgICAgbm9kZS5wYXJlbnQgPSBudWxsO1xyXG4gICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpbmRleE9mLCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYWxsIGNoaWxkcmVuIGZyb20gY3VycmVudCBub2RlLlxyXG4gICAqL1xyXG4gIGVtcHR5KCkge1xyXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgIG5vZGUucGFyZW50ID0gbnVsbDtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhbm90aGVyIGluc3RhbmNlIHdpdGggc2FtZSBwcm9wZXJ0aWVzLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1ZpcnR1YWxOb2RlfVxyXG4gICAqL1xyXG4gIGNsb25lKCkge1xyXG4gICAgY29uc3QgY2xvbmVkID0gbmV3IFZpcnR1YWxOb2RlKHRoaXMudHlwZSwgdGhpcy50YWcsIHtcclxuICAgICAga2V5OiB0aGlzLmtleSxcclxuICAgICAgLi4udGhpcy5wZW5kaW5nUHJvcHNcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJlZmVyZW5jZSBwcm9wZXJ0aWVzXHJcbiAgICBjbG9uZWQub2xkUHJvcHMgPSB0aGlzLm9sZFByb3BzO1xyXG4gICAgY2xvbmVkLnBlbmRpbmdQcm9wcyA9IHRoaXMucGVuZGluZ1Byb3BzO1xyXG4gICAgY2xvbmVkLnN0YXRlID0gdGhpcy5zdGF0ZTtcclxuICAgIGNsb25lZC5pbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2U7XHJcbiAgICBjbG9uZWQuZWxlbWVudFJlZiA9IHRoaXMuZWxlbWVudFJlZjtcclxuICAgIGNsb25lZC5saXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycztcclxuXHJcbiAgICAvLyBJbmRpY2F0b3IgcHJvcGVydGllc1xyXG4gICAgY2xvbmVkLmVmZmVjdCA9IHRoaXMuZWZmZWN0O1xyXG4gICAgY2xvbmVkLm1vdW50ZWQgPSB0aGlzLm1vdW50ZWQ7XHJcbiAgICBjbG9uZWQucGVuZGluZ1VwZGF0ZSA9IHRoaXMucGVuZGluZ1VwZGF0ZTtcclxuICAgIGNsb25lZC5zdGF0ZUNoYW5nZWQgPSB0aGlzLnN0YXRlQ2hhbmdlZDtcclxuXHJcbiAgICAvLyBOb2RlIHByb3BlcnRpZXNcclxuICAgIGNsb25lZC5wYXJlbnQgPSB0aGlzLnBhcmVudDtcclxuICAgIGNsb25lZC5jaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW47XHJcblxyXG4gICAgcmV0dXJuIGNsb25lZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvcHkgYWxsIGRhdGEgZnJvbSBzb3VyY2UgdmlydHVhbCBub2RlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gc291cmNlTm9kZVxyXG4gICAqL1xyXG4gIGNvcHlGcm9tKHNvdXJjZU5vZGUpIHtcclxuICAgIHRoaXMua2V5ID0gc291cmNlTm9kZS5rZXk7XHJcbiAgICB0aGlzLnR5cGUgPSBzb3VyY2VOb2RlLnR5cGU7XHJcbiAgICB0aGlzLnRhZyA9IHNvdXJjZU5vZGUudGFnO1xyXG5cclxuICAgIC8vIFJlZmVyZW5jZSBwcm9wZXJ0aWVzXHJcbiAgICB0aGlzLm9sZFByb3BzID0gc291cmNlTm9kZS5vbGRQcm9wcztcclxuICAgIHRoaXMucGVuZGluZ1Byb3BzID0gc291cmNlTm9kZS5wZW5kaW5nUHJvcHM7XHJcbiAgICB0aGlzLnN0YXRlID0gc291cmNlTm9kZS5zdGF0ZTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBzb3VyY2VOb2RlLmluc3RhbmNlO1xyXG4gICAgdGhpcy5lbGVtZW50UmVmID0gc291cmNlTm9kZS5lbGVtZW50UmVmO1xyXG4gICAgdGhpcy5saXN0ZW5lcnMgPSBzb3VyY2VOb2RlLmxpc3RlbmVycztcclxuXHJcbiAgICAvLyBJbmRpY2F0b3IgcHJvcGVydGllc1xyXG4gICAgdGhpcy5lZmZlY3QgPSBzb3VyY2VOb2RlLmVmZmVjdDtcclxuICAgIHRoaXMubW91bnRlZCA9IHNvdXJjZU5vZGUubW91bnRlZDtcclxuICAgIHRoaXMucGVuZGluZ1VwZGF0ZSA9IHNvdXJjZU5vZGUucGVuZGluZ1VwZGF0ZTtcclxuICAgIHRoaXMuc3RhdGVDaGFuZ2VkID0gc291cmNlTm9kZS5zdGF0ZUNoYW5nZWQ7XHJcblxyXG4gICAgLy8gTm9kZSBwcm9wZXJ0aWVzXHJcbiAgICB0aGlzLnBhcmVudCA9IHNvdXJjZU5vZGUucGFyZW50O1xyXG4gICAgdGhpcy5jaGlsZHJlbiA9IHNvdXJjZU5vZGUuY2hpbGRyZW47XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtKU1hbXX0ganN4QXJyYXlcclxuICovXHJcbmZ1bmN0aW9uIGNoZWNrS2V5c0luSnN4QXJyYXkoanN4QXJyYXkpIHtcclxuICBjb25zdCB1c2VkS2V5cyA9IFtdO1xyXG5cclxuICByZXR1cm4ganN4QXJyYXkuZXZlcnkoKGl0ZW0pID0+IHtcclxuICAgIGlmICghaXRlbS5hdHRyaWJ1dGVzIHx8ICFpdGVtLmF0dHJpYnV0ZXMua2V5IHx8IHVzZWRLZXlzLmluY2x1ZGVzKGl0ZW0uYXR0cmlidXRlcy5rZXkpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VkS2V5cy5wdXNoKGl0ZW0uYXR0cmlidXRlcy5rZXkpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwYXJrSlMuUmVuZGVyUmVzdWx0fSByZW5kZXJSZXN1bHRcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZXxudWxsfSBwYXJlbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZFZpcnR1YWxUcmVlKHJlbmRlclJlc3VsdCwgcGFyZW50ID0gbnVsbCkge1xyXG4gIGxldCB7XHJcbiAgICBlbGVtZW50TmFtZSA9IHJlbmRlclJlc3VsdCA/PyAnJyxcclxuICAgIGF0dHJpYnV0ZXMgPSB7fSxcclxuICAgIGNoaWxkcmVuID0gW11cclxuICB9ID0gcmVuZGVyUmVzdWx0ID8/IHt9O1xyXG5cclxuICAvKiogQHR5cGUge1ZpcnR1YWxOb2RlfSAqL1xyXG4gIGxldCBub2RlO1xyXG5cclxuICBpZiAodHlwZW9mIGVsZW1lbnROYW1lID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBub2RlID0gbmV3IFZpcnR1YWxOb2RlKCdDb21wb25lbnQnLCBlbGVtZW50TmFtZSwgeyBjaGlsZHJlbiwgLi4uYXR0cmlidXRlcyB9KTtcclxuICAgIGNoaWxkcmVuID0gW107XHJcbiAgfSBlbHNlIGlmIChbLi4uaHRtbFRhZ3NdLmluY2x1ZGVzKGVsZW1lbnROYW1lKSB8fCBbLi4uc3ZnVGFnc10uaW5jbHVkZXMoZWxlbWVudE5hbWUpKSB7IC8vIFRPRE86IGFkZCBzdXBwb3J0IGZvciBTVkcgZWxlbWVudHNcclxuICAgIG5vZGUgPSBuZXcgVmlydHVhbE5vZGUoJ0VsZW1lbnQnLCBlbGVtZW50TmFtZSwgYXR0cmlidXRlcyk7XHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudE5hbWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ09iamVjdCBjYW5ub3QgYmUgcmVuZGVyZWQgYXMgSlNYIG5vZGUhJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG5vZGUgPSBuZXcgVmlydHVhbE5vZGUoJ1RleHQnLCBlbGVtZW50TmFtZSk7XHJcbiAgfVxyXG5cclxuICBpZiAocGFyZW50KSB7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XHJcbiAgfVxyXG5cclxuICBpZiAoIWNoaWxkcmVuKSB7XHJcbiAgICBjaGlsZHJlbiA9IFtdO1xyXG4gIH1cclxuXHJcbiAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZE5vZGUgPT4ge1xyXG4gICAgaWYgKCFjaGlsZE5vZGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkTm9kZSkpIHtcclxuICAgICAgaWYgKCFjaGVja0tleXNJbkpzeEFycmF5KGNoaWxkTm9kZSkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYER5bmFtaWNhbGx5IG1hcHBlZCBub2RlcyBpbiBsb29wIG11c3QgaGF2ZSB1bmlxdWUga2V5cyBzcGVjaWZpZWQgaW4gXCJrZXlcIiBwcm9wLmApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjaGlsZE5vZGUuZm9yRWFjaChhbm90aGVyQ2hpbGROb2RlID0+IHtcclxuICAgICAgICBidWlsZFZpcnR1YWxUcmVlKGFub3RoZXJDaGlsZE5vZGUsIG5vZGUpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJ1aWxkVmlydHVhbFRyZWUoY2hpbGROb2RlLCBub2RlKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIG5vZGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGaW5kcyBjbG9zZXN0IHBhcmVudCBiYXNlZCBvbiBzZWxlY3Rvci5cclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbm9kZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ2xvc2VzdE5vZGUobm9kZSwgc2VsZWN0b3IpIHtcclxuICBpZiAoIXNlbGVjdG9yKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Egc2VsZWN0b3IgY2FuXFwndCBiZSBlbXB0eSBzdHJpbmcnKTtcclxuICB9XHJcblxyXG4gIGxldCBjdXJyZW50Tm9kZSA9IG5vZGU7XHJcblxyXG4gIHdoaWxlIChjdXJyZW50Tm9kZT8ucGFyZW50KSB7XHJcbiAgICBjb25zdCBwYXJlbnRQcm9wcyA9IGN1cnJlbnROb2RlLnBhcmVudC5wZW5kaW5nUHJvcHMgPz8gRW1wdHlPYmplY3Q7XHJcblxyXG4gICAgaWYgKCFjdXJyZW50Tm9kZS5wYXJlbnQuaXNUeXBlKCdFbGVtZW50JykpIHtcclxuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnQ7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZWxlY3Rvci5zdGFydHNXaXRoKCcjJykgJiYgcGFyZW50UHJvcHMuaWQgPT09IHNlbGVjdG9yLnN1YnN0cmluZygxKSkge1xyXG4gICAgICByZXR1cm4gIGN1cnJlbnROb2RlLnBhcmVudDtcclxuICAgIH0gZWxzZSBpZiAoc2VsZWN0b3Iuc3RhcnRzV2l0aCgnLicpICYmIHBhcmVudFByb3BzLmNsYXNzID09PSBzZWxlY3Rvci5zdWJzdHJpbmcoMSkpIHtcclxuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlLnBhcmVudDtcclxuICAgIH0gZWxzZSBpZiAoL1tbYS16QS1aMC05XFwtX10qKD86PVwiW2EtekEtWjAtOVxcLV9dKlwiKT9dLy50ZXN0KHNlbGVjdG9yKSkge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHNlbGVjdG9yLnJlcGxhY2UoJ1snLCAnJykucmVwbGFjZSgnXScsICcnKTtcclxuXHJcbiAgICAgIGlmIChjdXJyZW50Tm9kZS5wYXJlbnQucGVuZGluZ1Byb3BzW3ZhbHVlXSkge1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50Tm9kZS5wYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoY3VycmVudE5vZGUucGFyZW50LnRhZyA9PT0gc2VsZWN0b3IpIHtcclxuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlLnBhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudDtcclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogRmluZHMgYSB2aXJ0dWFsIG5vZGUgdGhhdCBpcyBmb3VuZCBieSBnaXZlbiBjb21wb25lbnQgaW5zdGFuY2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICogQHBhcmFtICB7Q29tcG9uZW50fSBjb21wb25lbnRcclxuICogQHJldHVybnMge1ZpcnR1YWxOb2RlfG51bGx9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmluZE5vZGVCeUNvbXBvbmVudChub2RlLCBjb21wb25lbnQpIHtcclxuICBsZXQgZm91bmROb2RlID0gbnVsbDtcclxuXHJcbiAgaWYgKG5vZGUuaW5zdGFuY2UgPT09IGNvbXBvbmVudCkge1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICBmb3VuZE5vZGUgPSBmaW5kTm9kZUJ5Q29tcG9uZW50KGNoaWxkLCBjb21wb25lbnQpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZm91bmROb2RlO1xyXG59XHJcblxyXG4vKipcclxuICogQnVpbGQgdmlydHVhbCB0cmVlIGZyb20gcm9vdCBub2RlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwYXJrSlMuUmVuZGVyUmVzdWx0fSByZW5kZXJSZXN1bHRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZFZpcnR1YWxUcmVlUm9vdChyZW5kZXJSZXN1bHQpIHtcclxuICBjb25zdCByb290Tm9kZSA9IG5ldyBWaXJ0dWFsTm9kZSgnUm9vdCcsICcnKTtcclxuICBjb25zdCBjaGlsZE5vZGUgPSBidWlsZFZpcnR1YWxUcmVlKHJlbmRlclJlc3VsdCk7XHJcblxyXG4gIGlmIChjaGlsZE5vZGUpIHtcclxuICAgIHJvb3ROb2RlLmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm9vdE5vZGU7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC9eYmxvYjovLCBcIlwiKS5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHtTcGFya30gZnJvbSBcIkAvc3BhcmtcIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiQC9BcHBcIjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwYXJrSlMuQXBwQ29uZmlnfSBjb25maWdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBcHAoY29uZmlnKSB7XHJcbiAgaWYgKHR5cGVvZiBjb25maWcgIT09IFwib2JqZWN0XCIpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBuZWNlc3Nhcnkgb3B0aW9ucyBkZWZpbmVkIGluIGdpdmVuIGNvbmZpZy4nKTtcclxuICB9XHJcblxyXG4gIHdpbmRvdy4kYXBwID0gbmV3IFNwYXJrKCk7XHJcbiAgd2luZG93LiRhcHAuc2V0Um9vdEZ1bmN0aW9uKGNvbmZpZy5yZW5kZXIpO1xyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgJGFwcC5tb3VudChjb25maWcubW91bnRFbCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmNyZWF0ZUFwcCh7XHJcbiAgbW91bnRFbDogJyNhcHAnLFxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxBcHAgLz5cclxuICAgIClcclxuICB9XHJcbn0pIl0sIm5hbWVzIjpbImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2RlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsIl90b1ByaW1pdGl2ZSIsIl90eXBlb2YiLCJ0b1ByaW1pdGl2ZSIsIlN0cmluZyIsIk51bWJlciIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiUmVmZXJlbmNlRXJyb3IiLCJCb29sZWFuIiwidmFsdWVPZiIsIl9pbmhlcml0cyIsIl9zZXRQcm90b3R5cGVPZiIsImltZyIsIkNvbXBvbmVudCIsIkhlYWRlciIsImNyZWF0ZVJlZiIsImxpc3RJdGVtcyIsImlkIiwibmFtZSIsIkFwcCIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwic3RhdGUiLCJpbnB1dFJlZiIsImhhbmRsZUNsaWNrIiwiaGFuZGxlVGV4dENoYW5nZSIsImhhbmRsZVN1Ym1pdCIsIm1vdW50ZWQiLCJjdXJyZW50IiwiZm9jdXMiLCJfdXBkYXRlZCIsIl9jYWxsZWUiLCJfY29udGV4dCIsInVwZGF0ZWQiLCJzZXRTdGF0ZSIsImV2IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwiZWxlbWVudE5hbWUiLCJhdHRyaWJ1dGVzIiwic3R5bGUiLCJmb250U2l6ZSIsImNvbG9yIiwiY2hpbGRyZW4iLCJ0aXRsZSIsImNvbmNhdCIsIm1hcCIsIml0ZW0iLCJvblN1Ym1pdCIsInJlZiIsInR5cGUiLCJvbklucHV0Iiwic3JjIiwiYWx0IiwieG1sbnMiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJyb2xlIiwiYXJ0aXN0Iiwic291cmNlIiwidHJhbnNmb3JtIiwicngiLCJmaWxsIiwiY3giLCJjeSIsIm9uQ2xpY2siLCJkZWZhdWx0IiwiX2Rlc3Ryb3llZCIsIl9jYWxsZWUyIiwiX2NvbnRleHQyIiwiZGVzdHJveWVkIiwiRW1wdHlPYmplY3QiLCIkYXBwIiwib25TdGF0ZUNoYW5nZWQiLCJfbW91bnRlZCIsIl9yZXN1bWVkIiwicmVzdW1lZCIsIl9jYWxsZWUzIiwiX2NvbnRleHQzIiwiX2NhbGxlZTQiLCJfY29udGV4dDQiLCJmaW5kQ2xvc2VzdE5vZGUiLCJkaWZmUHJvcHMiLCJmaW5kQ2xvc2VzdERPTU5vZGUiLCJyZXNvbHZlQ2xhc3NOYW1lIiwicmVzb2x2ZVN0eWxlIiwiaGFuZGxlQWRkaW5nUHJvcHMiLCJub2RlIiwicHJvcE5hbWUiLCJwcm9wVmFsdWUiLCJzdGFydHNXaXRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN1YnN0cmluZyIsInRvTG93ZXJDYXNlIiwiZWxlbWVudFJlZiIsInNldEF0dHJpYnV0ZSIsInJlc29sdmVFbGVtZW50QXR0cmlidXRlcyIsIl9pIiwiX09iamVjdCRlbnRyaWVzIiwiZW50cmllcyIsInBlbmRpbmdQcm9wcyIsIl9PYmplY3QkZW50cmllcyRfaSIsIl9zbGljZWRUb0FycmF5IiwiaGFuZGxlVXBkYXRpbmdQcm9wcyIsImV2ZW50TmFtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbGRQcm9wcyIsImhhbmRsZVJlbW92aW5nUHJvcHMiLCJyZW5kZXJOb2RlIiwicmVtb3ZlQXR0cmlidXRlIiwidW5tb3VudE5vZGUiLCJmb3JFYWNoIiwiY2hpbGQiLCJjbGVhbkxpc3RlbmVycyIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImlzVHlwZSIsImluc3RhbmNlIiwiY3JlYXRlRWxlbWVudCIsInBvc2l0aW9uIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsInRhZyIsIl9yZWYiLCJfbm9kZSRwZW5kaW5nUHJvcHMkeG0iLCJjbG9zZXN0V2l0aE5TIiwiY3JlYXRlRWxlbWVudE5TIiwicGFyZW50RWwiLCJjaGlsZEF0IiwiaW5zZXJ0QmVmb3JlIiwidXBkYXRlRWxlbWVudCIsImRpZmZlZFByb3BzIiwicHJvcCIsImZsYXR0ZW5SZW5kZXJSZXN1bHRDaGlsZHJlbiIsImJ1aWxkVmlydHVhbFRyZWUiLCJsYXN0TW91bnRlZFZpcnR1YWxOb2RlIiwibW91bnRWaXJ0dWFsU3VidHJlZSIsImVmZmVjdCIsImNyZWF0ZUNvbXBvbmVudCIsInJlbmRlclJlc3VsdCIsInN1YnRyZWUiLCJhcHBlbmRDaGlsZCIsImNoaWxkTm9kZSIsImNvcHlOb2RlUmVmZXJlbmNlcyIsImN1cnJlbnROb2RlIiwibmV3Tm9kZSIsInJlY3Vyc2l2ZSIsInVuZGVmaW5lZCIsIl9jdXJyZW50Tm9kZSRvbGRQcm9wcyIsIl9jdXJyZW50Tm9kZSRlbGVtZW50UiIsIl9uZXdOb2RlJHBlbmRpbmdQcm9wcyIsInN0YXRlQ2hhbmdlZCIsImluZGV4IiwiY29tcGFyZVByb3BzIiwia2V5cyIsImV2ZXJ5IiwiX3JlZjIiLCJzaG91bGRVcGRhdGVOb2RlIiwidXBkYXRlTm9kZSIsInBlbmRpbmdVcGRhdGUiLCJlbXB0eSIsInJldXNlTm9kZSIsImNsb25lZEN1cnJlbnROb2RlIiwiY2xvbmUiLCJwYXJlbnQiLCJjb3B5RnJvbSIsImZpbmROb2RlV2l0aEtleSIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwiZXJyIiwiZmluZE1hdGNoaW5nQ2hpbGROb2RlIiwibmV3Q2hpbGROb2RlIiwiZm91bmROb2RlIiwicmVzb2x2ZUxhc3RNb3VudGVkTm9kZSIsInJlY29uY2lsZSIsInByb2Nlc3NlZENoaWxkcmVuIiwibWF0Y2hpbmdDaGlsZCIsInB1c2giLCJpbmNsdWRlcyIsInJlc29sdmVFZmZlY3RzRnJvbU5vZGVzIiwiZWZmZWN0cyIsIm5vZGVSZWYiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJjbGVhbk5vZGVzIiwiYnVpbGRWaXJ0dWFsVHJlZVJvb3QiLCJmaW5kTm9kZUJ5Q29tcG9uZW50IiwicHJvY2Vzc0NvbXBvbmVudE5vZGVzIiwiY29tcG9uZW50Tm9kZXMiLCJhY3Rpb24iLCJhbGxDaGlsZHJlbk1vdW50ZWQiLCJhbGxDaGlsZHJlblVwZGF0ZWQiLCJzaGlmdCIsImhhbmRsZVBsYWNlbWVudCIsInVuc2hpZnQiLCJoYW5kbGVVcGRhdGUiLCJTcGFyayIsIl9yb290RWwiLCJfcm9vdEZ1bmMiLCJfdmlydHVhbFRyZWUiLCJzZXRSb290RnVuY3Rpb24iLCJyb290Rm4iLCJtb3VudCIsIm1vdW50RWwiLCJxdWVyeVNlbGVjdG9yIiwiSFRNTEVsZW1lbnQiLCJFcnJvciIsIm5ld1ZpcnR1YWxUcmVlIiwiZGVsZXRpb25zIiwibmV3Q2hhbmdlcyIsIm1vdW50ZWRDb21wb25lbnROb2RlcyIsInVwZGF0ZWRDb21wb25lbnROb2RlcyIsImNvbXBvbmVudCIsIndhcm4iLCJsYXN0TW91bnRlZE5vZGUiLCJyZWZzIiwiQXJyYXkiLCJpc0FycmF5IiwiX29iamVjdFNwcmVhZCIsInRvU3RyaW5nIiwiY2xhc3NUb2tlbnMiLCJmaWx0ZXIiLCJjbGFzc05hbWUiLCJ0b2tlbnMiLCJpbmRleE9mIiwiam9pbiIsInRlc3QiLCJrZXlUb2tlbnMiLCJzcGxpdCIsInRva2VuIiwicHJvcERpZmZzIiwiX2kyIiwiX09iamVjdCRlbnRyaWVzMiIsIl9PYmplY3QkZW50cmllczIkX2kiLCJodG1sVGFncyIsInN2Z1RhZ3MiLCJWaXJ0dWFsTm9kZSIsIm90aGVyUHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJsaXN0ZW5lcnMiLCJyZWR1Y2UiLCJjb3VudCIsInJlc3VsdCIsImxpc3RlbmVyIiwiX3RoaXMkbGlzdGVuZXJzJHR5cGUiLCJsaXN0ZW5lcnNXaXRoVHlwZSIsImZvdW5kTGlzdGVuZXJJbmRleCIsImZvdW5kTGlzdGVuZXIiLCJmaW5kIiwiYW5vdGhlckxpc3RlbmVyIiwic3BsaWNlIiwiX2xvb3AiLCJfcmV0IiwicmVwbGFjZUNoaWxkIiwib2xkTm9kZSIsImNsb25lZCIsInNvdXJjZU5vZGUiLCJjaGVja0tleXNJbkpzeEFycmF5IiwianN4QXJyYXkiLCJ1c2VkS2V5cyIsIl9yZWYkZWxlbWVudE5hbWUiLCJfcmVmJGF0dHJpYnV0ZXMiLCJfcmVmJGNoaWxkcmVuIiwiYW5vdGhlckNoaWxkTm9kZSIsInNlbGVjdG9yIiwiX2N1cnJlbnROb2RlIiwiX2N1cnJlbnROb2RlJHBhcmVudCRwIiwicGFyZW50UHJvcHMiLCJyZXBsYWNlIiwicm9vdE5vZGUiLCJjcmVhdGVBcHAiLCJjb25maWciLCJ3aW5kb3ciXSwic291cmNlUm9vdCI6IiJ9