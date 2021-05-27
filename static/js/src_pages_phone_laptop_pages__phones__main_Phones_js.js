(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_phone_laptop_pages__phones__main_Phones_js"],{

/***/ "./src/pages/phone_laptop/pages/_phones/_main/Phones.js":
/*!**************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/_phones/_main/Phones.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ./Phones.scss */ "./src/pages/phone_laptop/pages/_phones/_main/Phones.scss");

var _AllProducts = __webpack_require__(/*! ../../../components/all_product/AllProducts */ "./src/pages/phone_laptop/components/all_product/AllProducts.js");

var _AllProducts2 = _interopRequireDefault(_AllProducts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
function Phones() {
    //
    (0, _react.useEffect)(function () {
        document.title = "Phone";
    }, []);

    //
    return _react2.default.createElement(
        'div',
        { className: 'Phones' },
        _react2.default.createElement(_AllProducts2.default, {
            arr_brands: ['samsung', 'iphone', 'oppo', 'xiaomi', 'realme', 'nokia', 'vivo'],
            arr_prices: ['< 2tr', '2tr- 4tr', '4tr - 8tr', '8tr - 12tr', '12tr - 20tr', '> 20tr'],
            arr_memories: ['< 4G', '4 - 8G', '8 - 16G', '16 - 32G', '> 32G'],
            arr_rams: ['< 2G', '2 - 4G', '4 - 6G', '> 6G'],
            arr_sorts: ['Hot product', 'New product', 'Ascending price', 'Descending price'],
            arr_oses: ['android', 'iphone'],
            arr_cpus: ['Snapdragon', 'Helio', '4 nhân', '8 nhân']
        })
    );
}

Phones.propTypes = {};

exports.default = Phones;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/_phones/_main/Phones.scss":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/_phones/_main/Phones.scss ***!
  \*************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _image_banner_phone_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../image/banner_phone.jpg */ "./image/banner_phone.jpg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_image_banner_phone_jpg__WEBPACK_IMPORTED_MODULE_3__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Phones .AllProducts_banner {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-size: cover;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/_phones/_main/Phones.scss"],"names":[],"mappings":"AAGI;EACI,yDAAA;EACA,2BAAA;EACA,sBAAA;AAFR","sourcesContent":["\r\n//\r\n.Phones{\r\n    .AllProducts_banner{\r\n        background-image: url('/image/banner_phone.jpg');\r\n        background-position: center;\r\n        background-size: cover;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./image/banner_phone.jpg":
/*!********************************!*\
  !*** ./image/banner_phone.jpg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/images_icons/87be516742680e90f05c6989cdc1e685.jpg");

/***/ }),

/***/ "./src/pages/phone_laptop/pages/_phones/_main/Phones.scss":
/*!****************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/_phones/_main/Phones.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Phones_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./Phones.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/_phones/_main/Phones.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Phones_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Phones_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_phone_laptop_pages__phones__main_Phones_js.js.map