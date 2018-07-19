webpackJsonp([8],{

/***/ "+qWx":
/***/ (function(module, exports) {

module.exports = vendor;

/***/ }),

/***/ "a+d1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("RFtt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "html",
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "head",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "title",
            null,
            this.props.title
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { charSet: "utf-8" }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "viewport", content: "initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui" }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "keywords", content: this.props.keywords }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "description", content: this.props.description }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { rel: "shortcut icon", href: "/favicon.ico", type: "image/x-icon" })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "body",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { id: "app" },
            this.props.children
          )
        )
      );
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Layout;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Layout, "Layout", "/Users/caoli/dev/github/eggjs/egg-react-webpack-boilerplate/app/web/framework/layout/layout.jsx");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/caoli/dev/github/eggjs/egg-react-webpack-boilerplate/app/web/framework/layout/layout.jsx");
}();

;

/***/ })

},["a+d1"]);