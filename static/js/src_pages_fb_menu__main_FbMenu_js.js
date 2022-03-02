(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_fb_menu__main_FbMenu_js"],{

/***/ "./src/pages/fb_menu/_main/FbMenu.js":
/*!*******************************************!*\
  !*** ./src/pages/fb_menu/_main/FbMenu.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _IconsInput = __webpack_require__(/*! ../../../_icons_svg/Icons_input/IconsInput */ "./src/_icons_svg/Icons_input/IconsInput.js");

var _IconsInput2 = _interopRequireDefault(_IconsInput);

var _HeaderMenuContain = __webpack_require__(/*! ../../../component/_header_menu/contain/_main/HeaderMenuContain */ "./src/component/_header_menu/contain/_main/HeaderMenuContain.js");

var _HeaderMenuContain2 = _interopRequireDefault(_HeaderMenuContain);

__webpack_require__(/*! ./FbMenu.scss */ "./src/pages/fb_menu/_main/FbMenu.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

// 
FbMenu.propTypes = {};

//

//

//
function FbMenu(props) {
    //
    return _react2.default.createElement(
        'div',
        { className: 'FbMenu bg-primary' },
        _react2.default.createElement(
            'div',
            { className: 'FbMenu_head pos-sticky top-header z-index-1 padding-8px bg-primary' },
            _react2.default.createElement(
                'div',
                { className: 'flex-between-center' },
                _react2.default.createElement(
                    'h1',
                    { className: 'font-20px font-700' },
                    'Menu'
                ),
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { className: 'btn-icon-36px bg-ccc text-secondary', to: '/fb-search' },
                    _react2.default.createElement(_IconsInput2.default, { y: 200, size_icon: '18px' })
                )
            )
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_HeaderMenuContain2.default, null)
        )
    );
}

exports.default = FbMenu;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/fb_menu/_main/FbMenu.scss":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/fb_menu/_main/FbMenu.scss ***!
  \******************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".FbMenu {\n  min-height: calc(100vh - var(--height-header));\n}", "",{"version":3,"sources":["webpack://./src/pages/fb_menu/_main/FbMenu.scss"],"names":[],"mappings":"AAAA;EACI,8CAAA;AACJ","sourcesContent":[".FbMenu {\r\n    min-height: calc(100vh - var(--height-header));\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/fb_menu/_main/FbMenu.scss":
/*!*********************************************!*\
  !*** ./src/pages/fb_menu/_main/FbMenu.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbMenu_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./FbMenu.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/fb_menu/_main/FbMenu.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbMenu_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbMenu_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_fb_menu__main_FbMenu_js.js.map