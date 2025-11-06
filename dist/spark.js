/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    value: function render() {}

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

var CORDOVA_DEVICE_READY = 'deviceready';

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
  document.addEventListener(CORDOVA_DEVICE_READY, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sQ0FBQ0MsSUFBSSxDQUFDZCxlQUFlLENBQUNZLE1BQU0sQ0FBQ2xDLE1BQU0sQ0FBQztFQUUxQzBCLFFBQVEsQ0FBQ1csZ0JBQWdCLENBQUNMLG9CQUFvQixFQUFFLFlBQU07SUFDcERJLElBQUksQ0FBQ1osS0FBSyxDQUFDVSxNQUFNLENBQUNULE9BQU8sQ0FBQztFQUM1QixDQUFDLENBQUM7QUFDSjtBQUVBUSxTQUFTLENBQUM7RUFDUlIsT0FBTyxFQUFFLE1BQU07RUFDZnpCLE1BQU0sV0FBTkEsTUFBTUEsQ0FBQSxFQUFHO0lBQ1A7TUFBQXNDLFdBQUE7TUFBQUMsVUFBQTtNQUFBQyxRQUFBO0lBQUE7RUFDRjtBQUNGLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3Bhcmtqcy8uL3NyYy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vc3Bhcmtqcy8uL3NyYy9zcGFyay5qcyIsIndlYnBhY2s6Ly9zcGFya2pzLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL3NwYXJranMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3Bhcmtqcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3Bhcmtqcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NwYXJranMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zcGFya2pzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RW1wdHlPYmplY3R9IGZyb20gXCJAL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemVzIGEgY29tcG9uZW50IHdpdGggcHJvcHMgYW5kIGVtcHR5IHN0YXRlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTcGFya0pTLlByb3BzfSBwcm9wc1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICB0aGlzLnN0YXRlID0gRW1wdHlPYmplY3RcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgYSBuZXcgc3RhdGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIGFueT59IHN0YXRlXHJcbiAgICovXHJcbiAgc2V0U3RhdGUoc3RhdGUpIHtcclxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgIC8vIFRPRE86IGNhbGwgaG9vayBvblN0YXRlQ2hhbmdlZFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVuZGVycyBjb21wb25lbnQgYXMgSlNYIHN0cnVjdHVyZS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtTcGFya0pTLlJlbmRlclJlc3VsdH1cclxuICAgKi9cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgaG9vayBpcyB0cmlnZ2VyZWQgd2hlbiBjb21wb25lbnQgaXMgbW91bnRlZCBpbnRvIERPTS5cclxuICAgKi9cclxuICBhc3luYyBtb3VudGVkKCkge31cclxuXHJcbiAgLyoqXHJcbiAgICogYSBob29rIGlzIHRyaWdnZXJlZCB3aGVuIGFwcGxpY2F0aW9uIGlzIHJlc3VtZWQgaW50byBjb21wb25lbnQuXHJcbiAgICovXHJcbiAgYXN5bmMgcmVzdW1lZCgpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgaG9vayBpcyB0cmlnZ2VyZWQgd2hlbiBjb21wb25lbnQgaXMgcmUtcmVuZGVyZWQuXHJcbiAgICovXHJcbiAgYXN5bmMgdXBkYXRlZCgpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgaG9vayBpcyB0cmlnZ2VyZWQgYmVmb3JlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuXHJcbiAgICovXHJcbiAgYXN5bmMgZGVzdHJveWVkKCkge31cclxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwYXJrIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovXHJcbiAgICB0aGlzLl9yb290RWwgPSBudWxsO1xyXG4gICAgLyoqIEB0eXBlIHtTcGFya0pTLlJlbmRlckNhbGxiYWNrfSAqL1xyXG4gICAgdGhpcy5fcm9vdEZ1bmMgPSBudWxsO1xyXG4gICAgLyoqIEB0eXBlIHt9ICovXHJcbiAgICB0aGlzLl92aXJ0dWFsVHJlZSA9IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm4gSlNYIHN0cnVjdHVyZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7KCkgPT4gU3BhcmtKUy5SZW5kZXJSZXN1bHR9IHJvb3RGblxyXG4gICAqL1xyXG4gIHNldFJvb3RGdW5jdGlvbihyb290Rm4pIHtcclxuICAgIHRoaXMuX3Jvb3RGdW5jID0gcm9vdEZuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTW91bnRzIGFwcGxpY2F0aW9uIHRvIEhUTUwgZWxlbWVudCBhbmQgdHJpZ2dlciByZW5kZXIuXHJcbiAgICogSXQgdGhyb3dzIGVycm9yIGlmIHJvb3QgZWxlbWVudCBpc24ndCBmb3VuZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8c3RyaW5nfSBtb3VudEVsXHJcbiAgICovXHJcbiAgbW91bnQobW91bnRFbCkge1xyXG4gICAgaWYgKHR5cGVvZiBtb3VudEVsID09PSAnc3RyaW5nJykge1xyXG4gICAgICB0aGlzLl9yb290RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1vdW50RWwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fcm9vdEVsID0gbW91bnRFbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoISh0aGlzLl9yb290RWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBhIHJvb3QgZWxlbWVudCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50XHJcbiAgICovXHJcbiAgb25TdGF0ZUNoYW5nZWQoY29tcG9uZW50KSB7XHJcblxyXG4gIH1cclxufSIsImV4cG9ydCBjb25zdCBFbXB0eU9iamVjdCA9IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtTcGFya30gZnJvbSBcIkAvc3BhcmtcIjtcclxuXHJcbmNvbnN0IENPUkRPVkFfREVWSUNFX1JFQURZID0gJ2RldmljZXJlYWR5JztcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwYXJrSlMuQXBwQ29uZmlnfSBjb25maWdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBcHAoY29uZmlnKSB7XHJcbiAgaWYgKHR5cGVvZiBjb25maWcgIT09IFwib2JqZWN0XCIpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBuZWNlc3Nhcnkgb3B0aW9ucyBkZWZpbmVkIGluIGdpdmVuIGNvbmZpZy4nKTtcclxuICB9XHJcblxyXG4gIHdpbmRvdy4kYXBwID0gbmV3IFNwYXJrKCk7XHJcbiAgd2luZG93LiRhcHAuc2V0Um9vdEZ1bmN0aW9uKGNvbmZpZy5yZW5kZXIpO1xyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKENPUkRPVkFfREVWSUNFX1JFQURZLCAoKSA9PiB7XHJcbiAgICAkYXBwLm1vdW50KGNvbmZpZy5tb3VudEVsKTtcclxuICB9KTtcclxufVxyXG5cclxuY3JlYXRlQXBwKHtcclxuICBtb3VudEVsOiAnI2FwcCcsXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxkaXY+QXBwPC9kaXY+XHJcbiAgfVxyXG59KSJdLCJuYW1lcyI6WyJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9jbGFzc0NhbGxDaGVjayIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJFbXB0eU9iamVjdCIsIkNvbXBvbmVudCIsInByb3BzIiwic3RhdGUiLCJzZXRTdGF0ZSIsInJlbmRlciIsIl9tb3VudGVkIiwiX2NhbGxlZSIsIl9jb250ZXh0IiwibW91bnRlZCIsIl9yZXN1bWVkIiwiX2NhbGxlZTIiLCJfY29udGV4dDIiLCJyZXN1bWVkIiwiX3VwZGF0ZWQiLCJfY2FsbGVlMyIsIl9jb250ZXh0MyIsInVwZGF0ZWQiLCJfZGVzdHJveWVkIiwiX2NhbGxlZTQiLCJfY29udGV4dDQiLCJkZXN0cm95ZWQiLCJkZWZhdWx0IiwiU3BhcmsiLCJfcm9vdEVsIiwiX3Jvb3RGdW5jIiwiX3ZpcnR1YWxUcmVlIiwic2V0Um9vdEZ1bmN0aW9uIiwicm9vdEZuIiwibW91bnQiLCJtb3VudEVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiSFRNTEVsZW1lbnQiLCJFcnJvciIsIm9uU3RhdGVDaGFuZ2VkIiwiY29tcG9uZW50IiwiQ09SRE9WQV9ERVZJQ0VfUkVBRFkiLCJjcmVhdGVBcHAiLCJjb25maWciLCJ3aW5kb3ciLCIkYXBwIiwiYWRkRXZlbnRMaXN0ZW5lciIsImVsZW1lbnROYW1lIiwiYXR0cmlidXRlcyIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==