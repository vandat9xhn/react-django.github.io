(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src__icons_svg_icon_setting_IconSetting_js-src_component_dot_count_new_DotCountNew_js"],{

/***/ "./src/_icons_svg/icon_setting/IconSetting.js":
/*!****************************************************!*\
  !*** ./src/_icons_svg/icon_setting/IconSetting.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ./IconSetting.scss */ "./src/_icons_svg/icon_setting/IconSetting.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
IconSetting.propTypes = {
    fill: _propTypes2.default.string,
    size_icon: _propTypes2.default.string,
    stroke: _propTypes2.default.string,
    stroke_width: _propTypes2.default.number
};
//


IconSetting.defaultProps = {
    fill: 'none',
    size_icon: '1rem',
    stroke: 'var(--md-color)',
    stroke_width: 10
};

//
function IconSetting(_ref) {
    var size_icon = _ref.size_icon,
        fill = _ref.fill,
        stroke = _ref.stroke,
        stroke_width = _ref.stroke_width;

    //
    return _react2.default.createElement(
        'svg',
        {
            className: 'IconSetting',
            width: size_icon,
            height: size_icon,
            viewBox: '0 0 200 200',
            fill: fill,
            strokeWidth: stroke_width,
            stroke: stroke,
            strokeLinecap: 'round',
            strokeLinejoin: 'round'
        },
        _react2.default.createElement('path', { d: 'M113.576 20C113.576 20 114.534 35.5711 116.97 39.3189L132.821 45.7585L147.515 32.3839L166.92 52.1981L154.303 67.908L160.1 85.7408H180V113.622L160.1 116.736L154.303 132.941L166.92 148.297L147.03 168.111L132.821 154.737L115.771 160.469L113.576 180H86.4242L85.4545 160.469L69.4545 154.737L53.4545 168.111L33.9327 148.297L47.1515 132.941L40.3263 116.736L20 113.622V85.7408H40.3263L47.1515 67.908L33.9327 52.1981L53.4545 32.3839L69.4545 45.7585L85.4545 39.3189L86.4242 20H113.576Z' }),
        _react2.default.createElement('circle', {
            className: 'IconSetting_circle',
            cx: '100',
            cy: '100',
            r: '30',
            fill: 'none'
        })
    );
}

exports.default = IconSetting;

/***/ }),

/***/ "./src/component/dot_count_new/DotCountNew.js":
/*!****************************************************!*\
  !*** ./src/component/dot_count_new/DotCountNew.js ***!
  \****************************************************/
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
DotCountNew.propTypes = {};

//
function DotCountNew(_ref) {
    var title = _ref.title;

    //
    return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement('span', { className: 'inline-block padding-4px brs-50 bg-blue' }),
        _react2.default.createElement(
            'span',
            { className: 'margin-left-5px' },
            title
        )
    );
}

exports.default = DotCountNew;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/_icons_svg/icon_setting/IconSetting.scss":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/_icons_svg/icon_setting/IconSetting.scss ***!
  \***************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nav-active .IconSetting {\n  stroke: var(--blue);\n  fill: var(--blue);\n}\n.nav-active .IconSetting_circle {\n  fill: var(--md-bg-fb-active);\n}", "",{"version":3,"sources":["webpack://./src/_icons_svg/icon_setting/IconSetting.scss"],"names":[],"mappings":"AACI;EAEI,mBAAA;EACA,iBAAA;AADR;AAII;EACI,4BAAA;AAFR","sourcesContent":[".nav-active{\r\n    .IconSetting{\r\n        // stroke: var(--blue);\r\n        stroke: var(--blue);\r\n        fill: var(--blue);\r\n    }\r\n\r\n    .IconSetting_circle{\r\n        fill: var(--md-bg-fb-active);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/_icons_svg/icon_setting/IconSetting.scss":
/*!******************************************************!*\
  !*** ./src/_icons_svg/icon_setting/IconSetting.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_IconSetting_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./IconSetting.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/_icons_svg/icon_setting/IconSetting.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_IconSetting_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_IconSetting_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src__icons_svg_icon_setting_IconSetting_js-src_component_dot_count_new_DotCountNew_js.js.map