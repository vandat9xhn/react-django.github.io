(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_fb_header_chat__main_FbHeaderChat_js"],{

/***/ "./src/pages/fb_header_chat/_main/FbHeaderChat.js":
/*!********************************************************!*\
  !*** ./src/pages/fb_header_chat/_main/FbHeaderChat.js ***!
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

var _Constant = __webpack_require__(/*! ../../../_constant/Constant */ "./src/_constant/Constant.js");

var _FbHeaderChatMb = __webpack_require__(/*! ../mobile/_main/FbHeaderChatMb */ "./src/pages/fb_header_chat/mobile/_main/FbHeaderChatMb.js");

var _FbHeaderChatMb2 = _interopRequireDefault(_FbHeaderChatMb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
FbHeaderChat.propTypes = {};

//

//
function FbHeaderChat(props) {
    //
    return _Constant.IS_MOBILE ? _react2.default.createElement(_FbHeaderChatMb2.default, null) : null;
}

exports.default = FbHeaderChat;

/***/ }),

/***/ "./src/pages/fb_header_chat/mobile/_main/FbHeaderChatMb.js":
/*!*****************************************************************!*\
  !*** ./src/pages/fb_header_chat/mobile/_main/FbHeaderChatMb.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _HeaderMessContain = __webpack_require__(/*! ../../../../component/_header_pc/header_right/message/contain/_main/HeaderMessContain */ "./src/component/_header_pc/header_right/message/contain/_main/HeaderMessContain.js");

var _HeaderMessContain2 = _interopRequireDefault(_HeaderMessContain);

__webpack_require__(/*! ./FbHeaderChatMb.scss */ "./src/pages/fb_header_chat/mobile/_main/FbHeaderChatMb.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
FbHeaderChatMb.propTypes = {};

//

// 
function FbHeaderChatMb(props) {
    //
    return _react2.default.createElement(
        'div',
        { className: 'FbHeaderChatMb' },
        _react2.default.createElement(
            'div',
            { className: 'FbHeaderChatMb_contain bg-primary' },
            _react2.default.createElement(_HeaderMessContain2.default, { ref_scroll_elm: { current: null } })
        )
    );
}

exports.default = FbHeaderChatMb;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/fb_header_chat/mobile/_main/FbHeaderChatMb.scss":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/fb_header_chat/mobile/_main/FbHeaderChatMb.scss ***!
  \****************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".FbHeaderChatMb_contain {\n  min-height: calc(100vh - var(--height-header));\n}\n.FbHeaderChatMb_contain .HeaderMessContain_title {\n  position: sticky;\n  top: var(--height-header);\n  z-index: 1;\n  background: var(--md-bg-primary);\n  border-bottom: 1px solid var(--md-bg-blur);\n}", "",{"version":3,"sources":["webpack://./src/pages/fb_header_chat/mobile/_main/FbHeaderChatMb.scss"],"names":[],"mappings":"AAAA;EACI,8CAAA;AACJ;AACI;EACI,gBAAA;EACA,yBAAA;EACA,UAAA;EAEA,gCAAA;EACA,0CAAA;AAAR","sourcesContent":[".FbHeaderChatMb_contain {\r\n    min-height: calc(100vh - var(--height-header));\r\n\r\n    .HeaderMessContain_title {\r\n        position: sticky;\r\n        top: var(--height-header);\r\n        z-index: 1;\r\n\r\n        background: var(--md-bg-primary);\r\n        border-bottom: 1px solid var(--md-bg-blur);\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/fb_header_chat/mobile/_main/FbHeaderChatMb.scss":
/*!*******************************************************************!*\
  !*** ./src/pages/fb_header_chat/mobile/_main/FbHeaderChatMb.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbHeaderChatMb_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./FbHeaderChatMb.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/fb_header_chat/mobile/_main/FbHeaderChatMb.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbHeaderChatMb_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbHeaderChatMb_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_fb_header_chat__main_FbHeaderChat_js.js.map