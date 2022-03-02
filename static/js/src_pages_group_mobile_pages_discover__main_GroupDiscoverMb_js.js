(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_group_mobile_pages_discover__main_GroupDiscoverMb_js"],{

/***/ "./src/pages/group/mobile/pages/discover/_main/GroupDiscoverMb.js":
/*!************************************************************************!*\
  !*** ./src/pages/group/mobile/pages/discover/_main/GroupDiscoverMb.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GroupDiscoverRight = __webpack_require__(/*! ../../../../pc/pages/discover/right/_main/GroupDiscoverRight */ "./src/pages/group/pc/pages/discover/right/_main/GroupDiscoverRight.js");

var _GroupDiscoverRight2 = _interopRequireDefault(_GroupDiscoverRight);

__webpack_require__(/*! ./GroupDiscoverMb.scss */ "./src/pages/group/mobile/pages/discover/_main/GroupDiscoverMb.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
GroupDiscoverMb.propTypes = {};

//

// 
function GroupDiscoverMb(props) {
    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupDiscoverMb' },
        _react2.default.createElement(_GroupDiscoverRight2.default, null)
    );
}

exports.default = GroupDiscoverMb;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/mobile/pages/discover/_main/GroupDiscoverMb.scss":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/mobile/pages/discover/_main/GroupDiscoverMb.scss ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".GroupDiscoverMb .GroupDiscoverRow {\n  padding: 0;\n}\n.GroupDiscoverMb .GroupDiscoverRow_head {\n  margin: 0;\n  padding: 8px;\n}\n.GroupDiscoverMb .GroupDiscoverRow_title {\n  font-size: 16px;\n}\n.GroupDiscoverMb .GroupDiscoverRow_info {\n  font-size: unset;\n}\n.GroupDiscoverMb .GroupDiscoverRight_separate {\n  margin: 16px 8px;\n}\n.GroupDiscoverMb .GroupDiscoverMoreSuggestions {\n  padding: 0;\n}\n.GroupDiscoverMb .GroupDiscoverMoreSuggestions_title {\n  margin: 0;\n  padding: 8px;\n  font-size: 16px;\n}\n\n@media (max-width: 480px) {\n  .GroupDiscoverMb .GroupDiscoverMoreSuggestions_item {\n    width: 100%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/pages/group/mobile/pages/discover/_main/GroupDiscoverMb.scss"],"names":[],"mappings":"AAGI;EACI,UAAA;AAFR;AAKI;EACI,SAAA;EACA,YAAA;AAHR;AAMI;EACI,eAAA;AAJR;AAOI;EACI,gBAAA;AALR;AAUI;EACI,gBAAA;AARR;AAaI;EACI,UAAA;AAXR;AAcI;EACI,SAAA;EACA,YAAA;EACA,eAAA;AAZR;;AAkBA;EAEQ;IACI,WAAA;EAhBV;AACF","sourcesContent":[".GroupDiscoverMb {\r\n    // -----\r\n\r\n    .GroupDiscoverRow {\r\n        padding: 0;\r\n    }\r\n\r\n    .GroupDiscoverRow_head {\r\n        margin: 0;\r\n        padding: 8px;\r\n    }\r\n    // .\r\n    .GroupDiscoverRow_title {\r\n        font-size: 16px;\r\n    }\r\n    // .\r\n    .GroupDiscoverRow_info {\r\n        font-size: unset;\r\n    }\r\n\r\n    // ------\r\n\r\n    .GroupDiscoverRight_separate {\r\n        margin: 16px 8px;\r\n    }\r\n\r\n    // ------\r\n\r\n    .GroupDiscoverMoreSuggestions {\r\n        padding: 0;\r\n    }\r\n\r\n    .GroupDiscoverMoreSuggestions_title {\r\n        margin: 0;\r\n        padding: 8px;\r\n        font-size: 16px;\r\n    }\r\n}\r\n\r\n// -----\r\n\r\n@media (max-width: 480px) {\r\n    .GroupDiscoverMb {\r\n        .GroupDiscoverMoreSuggestions_item {\r\n            width: 100%;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/group/mobile/pages/discover/_main/GroupDiscoverMb.scss":
/*!**************************************************************************!*\
  !*** ./src/pages/group/mobile/pages/discover/_main/GroupDiscoverMb.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupDiscoverMb_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./GroupDiscoverMb.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/mobile/pages/discover/_main/GroupDiscoverMb.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupDiscoverMb_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupDiscoverMb_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_group_mobile_pages_discover__main_GroupDiscoverMb_js.js.map