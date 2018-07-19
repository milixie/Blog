webpackJsonp([5],{

/***/ "+qWx":
/***/ (function(module, exports) {

module.exports = vendor;

/***/ }),

/***/ "1SSN":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("g1U/")


/***/ }),

/***/ "7+p3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.AppContainer = __webpack_require__("LE4k");

/***/ }),

/***/ "LE4k":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable global-require */

if (true) {
  module.exports = __webpack_require__("RREE");
} else {
  module.exports = require('./AppContainer.dev');
}

/***/ }),

/***/ "O3uV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("RFtt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_css__ = __webpack_require__("tWcb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__header_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('----Header componentDidMount-----');
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'header',
        { className: 'header' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { href: '/', className: 'router-link-active' },
              'Egg+React'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'ul',
            { className: 'nav' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { className: 'nav-item' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: '/' },
                'Server-Render'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { className: 'nav-item' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: '/client' },
                'Client-Render'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { className: 'nav-item' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: '/css/module' },
                'Css-Module'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { className: 'nav-item' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: '/spa/redux' },
                'SPA-CSR'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { className: 'nav-item' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: '/spa/ssr' },
                'SPA-SSR'
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Header;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Header, 'Header', '/Users/caoli/dev/github/eggjs/egg-react-webpack-boilerplate/app/web/component/header/header.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/caoli/dev/github/eggjs/egg-react-webpack-boilerplate/app/web/component/header/header.jsx');
}();

;

/***/ }),

/***/ "Q/yb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("+qWx"))("Q/yb");

/***/ }),

/***/ "RREE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/prop-types */

var React = __webpack_require__("RFtt");

var Component = React.Component;

var AppContainer = function (_Component) {
  _inherits(AppContainer, _Component);

  function AppContainer() {
    _classCallCheck(this, AppContainer);

    return _possibleConstructorReturn(this, (AppContainer.__proto__ || Object.getPrototypeOf(AppContainer)).apply(this, arguments));
  }

  _createClass(AppContainer, [{
    key: 'render',
    value: function render() {
      if (this.props.component) {
        return React.createElement(this.props.component, this.props.props);
      }

      return React.Children.only(this.props.children);
    }
  }]);

  return AppContainer;
}(Component);

module.exports = AppContainer;

/***/ }),

/***/ "g1U/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable global-require */

if (true) {
  module.exports = __webpack_require__("7+p3");
} else {
  module.exports = require('./index.dev');
}

/***/ }),

/***/ "gLyg":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "k876":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: delegated ./node_modules/_react@16.4.1@react/index.js from dll-reference vendor
var _react_16_4_1_reactfrom_dll_reference_vendor = __webpack_require__("RFtt");
var _react_16_4_1_reactfrom_dll_reference_vendor_default = /*#__PURE__*/__webpack_require__.n(_react_16_4_1_reactfrom_dll_reference_vendor);

// EXTERNAL MODULE: delegated ./node_modules/_react-dom@16.4.1@react-dom/index.js from dll-reference vendor
var _react_dom_16_4_1_react_domfrom_dll_reference_vendor = __webpack_require__("Q/yb");
var _react_dom_16_4_1_react_domfrom_dll_reference_vendor_default = /*#__PURE__*/__webpack_require__.n(_react_dom_16_4_1_react_domfrom_dll_reference_vendor);

// EXTERNAL MODULE: ./node_modules/_react-hot-loader@3.1.3@react-hot-loader/index.js
var _react_hot_loader_3_1_3_react_hot_loader = __webpack_require__("1SSN");
var _react_hot_loader_3_1_3_react_hot_loader_default = /*#__PURE__*/__webpack_require__.n(_react_hot_loader_3_1_3_react_hot_loader);

// EXTERNAL MODULE: ./app/web/component/header/header.jsx
var header = __webpack_require__("O3uV");

// CONCATENATED MODULE: ./app/web/component/home/list.jsx


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var list_List = function (_Component) {
  _inherits(List, _Component);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('----List componentDidMount-----', this.props);
      window.addEventListener('scroll', function () {}, false);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react_16_4_1_reactfrom_dll_reference_vendor_default.a.createElement(
        'div',
        { className: 'container smart-container' },
        _react_16_4_1_reactfrom_dll_reference_vendor_default.a.createElement(
          'div',
          { className: 'row row-offcanvas row-offcanvas-right' },
          _react_16_4_1_reactfrom_dll_reference_vendor_default.a.createElement(
            'div',
            { className: 'col-xs-12 col-sm-9' },
            _react_16_4_1_reactfrom_dll_reference_vendor_default.a.createElement(
              'ul',
              { className: 'smart-artiles', id: 'articleList' },
              this.props.list.map(function (item) {
                return _react_16_4_1_reactfrom_dll_reference_vendor_default.a.createElement(
                  'li',
                  { key: item.id },
                  _react_16_4_1_reactfrom_dll_reference_vendor_default.a.createElement(
                    'div',
                    { className: 'point' },
                    '+',
                    item.hits
                  ),
                  _react_16_4_1_reactfrom_dll_reference_vendor_default.a.createElement(
                    'div',
                    { className: 'card' },
                    _react_16_4_1_reactfrom_dll_reference_vendor_default.a.createElement(
                      'h2',
                      null,
                      _react_16_4_1_reactfrom_dll_reference_vendor_default.a.createElement(
                        'a',
                        { href: item.url, target: '_blank' },
                        item.title
                      )
                    ),
                    _react_16_4_1_reactfrom_dll_reference_vendor_default.a.createElement(
                      'div',
                      null,
                      _react_16_4_1_reactfrom_dll_reference_vendor_default.a.createElement(
                        'ul',
                        { className: 'actions' },
                        _react_16_4_1_reactfrom_dll_reference_vendor_default.a.createElement(
                          'li',
                          null,
                          _react_16_4_1_reactfrom_dll_reference_vendor_default.a.createElement(
                            'time',
                            { className: 'timeago' },
                            item.moduleName
                          )
                        ),
                        _react_16_4_1_reactfrom_dll_reference_vendor_default.a.createElement(
                          'li',
                          { className: 'tauthor' },
                          _react_16_4_1_reactfrom_dll_reference_vendor_default.a.createElement(
                            'a',
                            { href: '#', target: '_blank', className: 'get' },
                            'Sky'
                          )
                        ),
                        _react_16_4_1_reactfrom_dll_reference_vendor_default.a.createElement(
                          'li',
                          null,
                          _react_16_4_1_reactfrom_dll_reference_vendor_default.a.createElement(
                            'a',
                            null,
                            '+\u6536\u85CF'
                          )
                        ),
                        _react_16_4_1_reactfrom_dll_reference_vendor_default.a.createElement(
                          'li',
                          null,
                          _react_16_4_1_reactfrom_dll_reference_vendor_default.a.createElement(
                            'span',
                            { className: 'timeago' },
                            item.summary
                          )
                        ),
                        _react_16_4_1_reactfrom_dll_reference_vendor_default.a.createElement(
                          'li',
                          null,
                          _react_16_4_1_reactfrom_dll_reference_vendor_default.a.createElement('span', { className: 'timeago' })
                        )
                      )
                    )
                  )
                );
              })
            )
          )
        )
      );
    }
  }]);

  return List;
}(_react_16_4_1_reactfrom_dll_reference_vendor["Component"]);

var _default = list_List;
/* harmony default export */ var list = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(list_List, 'List', '/Users/caoli/dev/github/eggjs/egg-react-webpack-boilerplate/app/web/component/home/list.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/caoli/dev/github/eggjs/egg-react-webpack-boilerplate/app/web/component/home/list.jsx');
}();

;
// EXTERNAL MODULE: ./app/web/page/home/home.css
var home = __webpack_require__("gLyg");
var home_default = /*#__PURE__*/__webpack_require__.n(home);

// CONCATENATED MODULE: ./app/web/page/home/home.jsx
var home__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function home__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function home__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function home__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var home_Home = function (_Component) {
  home__inherits(Home, _Component);

  function Home() {
    home__classCallCheck(this, Home);

    return home__possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  home__createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('----componentDidMount-----');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react_16_4_1_reactfrom_dll_reference_vendor_default.a.createElement(
        'div',
        null,
        _react_16_4_1_reactfrom_dll_reference_vendor_default.a.createElement(header["a" /* default */], null),
        _react_16_4_1_reactfrom_dll_reference_vendor_default.a.createElement(
          'div',
          { className: 'main' },
          _react_16_4_1_reactfrom_dll_reference_vendor_default.a.createElement(
            'div',
            { className: 'page-container page-component' },
            _react_16_4_1_reactfrom_dll_reference_vendor_default.a.createElement(list, { list: this.props.list })
          )
        )
      );
    }
  }]);

  return Home;
}(_react_16_4_1_reactfrom_dll_reference_vendor["Component"]);

var home__default = home_Home;
/* harmony default export */ var home_home = (home__default);
;

var home__temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(home_Home, 'Home', '/Users/caoli/dev/github/eggjs/egg-react-webpack-boilerplate/app/web/page/home/home.jsx');

  __REACT_HOT_LOADER__.register(home__default, 'default', '/Users/caoli/dev/github/eggjs/egg-react-webpack-boilerplate/app/web/page/home/home.jsx');
}();

;
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./app/web/framework/entry/client-loader.js!./app/web/page/home/home.jsx





var state = window.__INITIAL_STATE__;
var home_render = function render(App) {
  _react_dom_16_4_1_react_domfrom_dll_reference_vendor_default.a.hydrate( false ? React.createElement(
    AppContainer,
    null,
    React.createElement(App, state)
  ) : _react_16_4_1_reactfrom_dll_reference_vendor_default.a.createElement(App, state), document.getElementById('app'));
};

if (false) {
  module.hot.accept('/Users/caoli/dev/github/eggjs/egg-react-webpack-boilerplate/app/web/page/home/home.jsx', function () {
    home_render(Entry);
  });
}
home_render(home_home);
;

var home_home__temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(state, 'state', '/Users/caoli/dev/github/eggjs/egg-react-webpack-boilerplate/app/web/page/home/home.jsx');

  __REACT_HOT_LOADER__.register(home_render, 'render', '/Users/caoli/dev/github/eggjs/egg-react-webpack-boilerplate/app/web/page/home/home.jsx');
}();

;

/***/ }),

/***/ "tWcb":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["k876"]);