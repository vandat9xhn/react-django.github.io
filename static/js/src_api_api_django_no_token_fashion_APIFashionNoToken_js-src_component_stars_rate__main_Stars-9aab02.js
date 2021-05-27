(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_api_api_django_no_token_fashion_APIFashionNoToken_js-src_component_stars_rate__main_Stars-9aab02"],{

/***/ "./src/_icons_svg/icons_star/IconsStar.js":
/*!************************************************!*\
  !*** ./src/_icons_svg/icons_star/IconsStar.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
IconsStar.propTypes = {
    size_icon: _propTypes2.default.string,
    x: _propTypes2.default.number,
    y: _propTypes2.default.number,
    color: _propTypes2.default.string
};
IconsStar.defaultProps = {
    size_icon: '1rem',
    x: 0,
    y: 0,
    color: 'var(--gold)'

    /**
     *  icons star:(x, y)
     *  @1. normal star: (0, 0)
     */
};function IconsStar(props) {
    var size_icon = props.size_icon,
        x = props.x,
        y = props.y,
        color = props.color;

    //

    return _react2.default.createElement(
        'svg',
        {
            className: 'IconsStar',
            width: size_icon,
            height: size_icon,
            viewBox: x + ' ' + y + ' 200 200',
            stroke: 'none'
        },
        _react2.default.createElement('path', {
            className: 'IconsStar_normal',
            d: 'M100 10L120.206 72.1885H185.595L132.694 110.623L152.901 \r 172.812L100 134.377L47.0993 172.812L67.3056 110.623L14.4049 \r 72.1885H79.7937L100 10Z',
            fill: color
        })
    );
}

exports.default = IconsStar;

/***/ }),

/***/ "./src/api/_common/API_IsLogin.js":
/*!****************************************!*\
  !*** ./src/api/_common/API_IsLogin.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// 


exports.API_IsLogin = API_IsLogin;
exports.API_IsLogin_URL = API_IsLogin_URL;

var _AxiosDjango = __webpack_require__(/*! ../api_django/_axios/AxiosDjango */ "./src/api/api_django/_axios/AxiosDjango.js");

var _AxiosDjango2 = _interopRequireDefault(_AxiosDjango);

var _AxiosNoToken = __webpack_require__(/*! ../api_django_no_token/_axios/AxiosNoToken */ "./src/api/api_django_no_token/_axios/AxiosNoToken.js");

var _AxiosNoToken2 = _interopRequireDefault(_AxiosNoToken);

var _ConstAPI = __webpack_require__(/*! ../_ConstAPI */ "./src/api/_ConstAPI.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
function API_IsLogin() {
    var conf_token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var conf_no_token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return localStorage.is_login && !_ConstAPI.is_api_fake ? (0, _AxiosDjango2.default)(conf_token) : (0, _AxiosNoToken2.default)(conf_no_token);
}

//
function API_IsLogin_URL() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var url_token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var url_no_token = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return API_IsLogin(_extends({}, config, { url: url_token }), _extends({}, config, { url: url_no_token }));
}

/***/ }),

/***/ "./src/api/api_django_no_token/fashion/APIFashionNoToken.js":
/*!******************************************************************!*\
  !*** ./src/api/api_django_no_token/fashion/APIFashionNoToken.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.API_FashionComment_L = exports.API_FashionRate_L = exports.API_FashionProduct_R = exports.API_FashionProduct_L = exports.API_FashionHotImage_L = exports.API_FashionShop_R = exports.API_FashionShop_L = undefined;

var _AxiosNoToken = __webpack_require__(/*! ../_axios/AxiosNoToken */ "./src/api/api_django_no_token/_axios/AxiosNoToken.js");

var _AxiosNoToken2 = _interopRequireDefault(_AxiosNoToken);

var _API_IsLogin = __webpack_require__(/*! ../../_common/API_IsLogin */ "./src/api/_common/API_IsLogin.js");

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _FashionDefault = __webpack_require__(/*! ../../../pages/fashion/_default/FashionDefault */ "./src/pages/fashion/_default/FashionDefault.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// list shop
var API_FashionShop_L = exports.API_FashionShop_L = function API_FashionShop_L() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0, _ConstAPI.API_FakeReal)(Array(6).fill(_FashionDefault.default_arr_shop[0]), function () {
        return (0, _AxiosNoToken2.default)({
            url: '/fashion-api/l-shop/',
            method: 'GET',
            params: params
        });
    }, params);
};
// retrieve shop
var API_FashionShop_R = exports.API_FashionShop_R = function API_FashionShop_R(id) {
    return (0, _ConstAPI.API_FakeReal)(_FashionDefault.default_arr_shop[0], function () {
        return (0, _AxiosNoToken2.default)({
            url: '/fashion-api/r-shop/' + id + '/',
            method: 'GET'
        });
    });
};

// hot image
var API_FashionHotImage_L = exports.API_FashionHotImage_L = function API_FashionHotImage_L() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0, _ConstAPI.API_FakeReal)(_FashionDefault.default_arr_hot_image, function () {
        return (0, _AxiosNoToken2.default)({
            url: '/fashion-api/l-hot-image/',
            method: 'GET',
            params: params
        });
    });
};

// product
var API_FashionProduct_L = exports.API_FashionProduct_L = function API_FashionProduct_L() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0, _ConstAPI.API_FakeReal)(Array(10).fill(_FashionDefault.default_arr_product[0]), function () {
        return (0, _AxiosNoToken2.default)({
            url: '/fashion-api/l-product/',
            method: 'GET',
            params: params
        });
    }, params);
};
//
var API_FashionProduct_R = exports.API_FashionProduct_R = function API_FashionProduct_R(id) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return (0, _ConstAPI.API_FakeReal)(_FashionDefault.default_arr_product[0], function () {
        return (0, _API_IsLogin.API_IsLogin_URL)({
            method: 'GET',
            params: params
        }, '/fashion-api/r-product-token/' + id + '/', '/fashion-api/r-product/' + id + '/');
    });
};

// rate
var API_FashionRate_L = exports.API_FashionRate_L = function API_FashionRate_L(params) {
    return (0, _AxiosNoToken2.default)({
        url: '/fashion-api/l-rate/',
        method: 'GET',
        params: params
    });
};

// comment
var API_FashionComment_L = exports.API_FashionComment_L = function API_FashionComment_L(params) {
    return (0, _ConstAPI.API_FakeReal)(_FashionDefault.default_arr_cmt, function () {
        return (0, _AxiosNoToken2.default)({
            url: '/fashion-api/l-comment/',
            method: 'GET',
            params: params
        });
    }, params);
};

/***/ }),

/***/ "./src/component/stars_rate/_main/StarsRate.js":
/*!*****************************************************!*\
  !*** ./src/component/stars_rate/_main/StarsRate.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _StarRate = __webpack_require__(/*! ../star_rate/StarRate */ "./src/component/stars_rate/star_rate/StarRate.js");

var _StarRate2 = _interopRequireDefault(_StarRate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
StarsRate.propTypes = {
    rate_avg: _propTypes2.default.number,
    size_icon: _propTypes2.default.string,
    handleChangeRate: _propTypes2.default.func
};
// 

StarsRate.defaultProps = {
    rate_avg: 5

    /**
     *  stars for rate:
     * @props: rate_avg, size_icon, handleChangeRate
     */
};function StarsRate(props) {
    var rate_avg = props.rate_avg,
        size_icon = props.size_icon,
        handleChangeRate = props.handleChangeRate;

    var rates_icon = [1, 2, 3, 4, 5].map(function (item) {
        var rate = rate_avg + 1 - item;
        if (rate <= 0) {
            return 0;
        }
        if (rate >= 1) {
            return 1;
        }
        return rate;
    });

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'display-flex align-items-center' },
            rates_icon.map(function (item, ix) {
                return _react2.default.createElement(_StarRate2.default, {
                    key: 'StarsRate_' + ix,
                    rate_icon: item,
                    star_ix: ix + 1,
                    size_icon: size_icon,
                    handleChangeRate: handleChangeRate
                });
            })
        )
    );
}

exports.default = StarsRate;

/***/ }),

/***/ "./src/component/stars_rate/star_rate/StarRate.js":
/*!********************************************************!*\
  !*** ./src/component/stars_rate/star_rate/StarRate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ./StarRate.scss */ "./src/component/stars_rate/star_rate/StarRate.scss");

var _IconsStar = __webpack_require__(/*! ../../../_icons_svg/icons_star/IconsStar */ "./src/_icons_svg/icons_star/IconsStar.js");

var _IconsStar2 = _interopRequireDefault(_IconsStar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
StarRate.propTypes = {
    rate_avg: _propTypes2.default.number,
    star_ix: _propTypes2.default.number,
    size_icon: _propTypes2.default.string,
    handleChangeRate: _propTypes2.default.func
};
StarRate.defaultProps = {
    handleChangeRate: function handleChangeRate() {}

    //
};function StarRate(props) {
    var star_ix = props.star_ix,
        rate_icon = props.rate_icon,
        size_icon = props.size_icon,
        handleChangeRate = props.handleChangeRate;
    //

    function onChangeRate() {
        handleChangeRate && handleChangeRate(star_ix);
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'StarRate' },
        _react2.default.createElement(
            'div',
            { className: 'StarRate_contain', onClick: onChangeRate },
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_IconsStar2.default, { color: 'var(--md-bg-ccc)', size_icon: size_icon })
            ),
            _react2.default.createElement(
                'div',
                {
                    className: 'StarRate_rate ' + (rate_icon ? '' : 'display-none'),
                    style: { width: rate_icon ? rate_icon * size_icon.replace('rem', '') + 'rem' : undefined }
                },
                _react2.default.createElement(_IconsStar2.default, { size_icon: size_icon })
            )
        )
    );
}

exports.default = StarRate;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/stars_rate/star_rate/StarRate.scss":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/stars_rate/star_rate/StarRate.scss ***!
  \*******************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".StarRate {\n  position: relative;\n}\n\n.StarRate_rate {\n  position: absolute;\n  top: 0;\n  overflow: hidden;\n}", "",{"version":3,"sources":["webpack://./src/component/stars_rate/star_rate/StarRate.scss"],"names":[],"mappings":"AAGA;EACI,kBAAA;AAFJ;;AAMA;EACI,kBAAA;EACA,MAAA;EACA,gBAAA;AAHJ","sourcesContent":["\r\n\r\n//\r\n.StarRate{\r\n    position: relative;\r\n}\r\n\r\n//\r\n.StarRate_rate{\r\n    position: absolute;\r\n    top: 0;\r\n    overflow: hidden;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/component/stars_rate/star_rate/StarRate.scss":
/*!**********************************************************!*\
  !*** ./src/component/stars_rate/star_rate/StarRate.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StarRate_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./StarRate.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/stars_rate/star_rate/StarRate.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StarRate_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StarRate_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_api_api_django_no_token_fashion_APIFashionNoToken_js-src_component_stars_rate__main_Stars-9aab02.js.map