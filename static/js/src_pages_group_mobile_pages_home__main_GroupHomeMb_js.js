(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_group_mobile_pages_home__main_GroupHomeMb_js"],{

/***/ "./src/pages/group/mobile/pages/home/_main/GroupHomeMb.js":
/*!****************************************************************!*\
  !*** ./src/pages/group/mobile/pages/home/_main/GroupHomeMb.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Constant = __webpack_require__(/*! ../../../../../../_constant/Constant */ "./src/_constant/Constant.js");

var _GroupLayoutLeftHead = __webpack_require__(/*! ../../../../pc/_components/_layout/left/head/_main/GroupLayoutLeftHead */ "./src/pages/group/pc/_components/_layout/left/head/_main/GroupLayoutLeftHead.js");

var _GroupLayoutLeftHead2 = _interopRequireDefault(_GroupLayoutLeftHead);

var _GroupLayoutLeftNav = __webpack_require__(/*! ../../../../pc/_components/_layout/left/nav/GroupLayoutLeftNav */ "./src/pages/group/pc/_components/_layout/left/nav/GroupLayoutLeftNav.js");

var _GroupLayoutLeftNav2 = _interopRequireDefault(_GroupLayoutLeftNav);

var _GroupLeftJoined = __webpack_require__(/*! ../../../../pc/_components/_layout/left/joined/_main/GroupLeftJoined */ "./src/pages/group/pc/_components/_layout/left/joined/_main/GroupLeftJoined.js");

var _GroupLeftJoined2 = _interopRequireDefault(_GroupLeftJoined);

var _GroupLeftManage = __webpack_require__(/*! ../../../../pc/_components/_layout/left/manage/_main/GroupLeftManage */ "./src/pages/group/pc/_components/_layout/left/manage/_main/GroupLeftManage.js");

var _GroupLeftManage2 = _interopRequireDefault(_GroupLeftManage);

__webpack_require__(/*! ./GroupHomeMb.scss */ "./src/pages/group/mobile/pages/home/_main/GroupHomeMb.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
GroupHomeMb.propTypes = {};

//

//

//
function GroupHomeMb(props) {
    //
    if (!_Constant.IS_MOBILE) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/group/feed' });
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupHomeMb bg-primary' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_GroupLayoutLeftHead2.default, null)
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_GroupLayoutLeftNav2.default, null)
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_GroupLeftManage2.default, { ref_scroll: { current: null } })
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_GroupLeftJoined2.default, { ref_scroll: { current: null } })
        )
    );
}

exports.default = GroupHomeMb;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/mobile/pages/home/_main/GroupHomeMb.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/mobile/pages/home/_main/GroupHomeMb.scss ***!
  \***************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".GroupHomeMb .GroupLayoutLeftHead_head {\n  padding: 0 8px;\n}\n.GroupHomeMb .GroupLayoutLeftHead_title {\n  font-size: 20px;\n}\n.GroupHomeMb .GroupLayoutLeftHead_search .FbSearchInputElm {\n  padding: 0 8px;\n}\n.GroupHomeMb .GroupLayoutLeftNav {\n  padding: 8px 0;\n}\n.GroupHomeMb .GroupLeftGroupList {\n  margin: 0;\n}\n.GroupHomeMb .GroupLeftGroupItem img {\n  width: 48px;\n  height: 48px;\n}", "",{"version":3,"sources":["webpack://./src/pages/group/mobile/pages/home/_main/GroupHomeMb.scss"],"names":[],"mappings":"AAGI;EACI,cAAA;AAFR;AAKI;EACI,eAAA;AAHR;AAMI;EACI,cAAA;AAJR;AASI;EACI,cAAA;AAPR;AAYI;EACI,SAAA;AAVR;AAcQ;EACI,WAAA;EACA,YAAA;AAZZ","sourcesContent":[".GroupHomeMb {\r\n    // -----\r\n\r\n    .GroupLayoutLeftHead_head {\r\n        padding: 0 8px;\r\n    }\r\n    // .\r\n    .GroupLayoutLeftHead_title {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .GroupLayoutLeftHead_search .FbSearchInputElm {\r\n        padding: 0 8px;\r\n    }\r\n\r\n    // ----\r\n\r\n    .GroupLayoutLeftNav {\r\n        padding: 8px 0;\r\n    }\r\n\r\n    // ----\r\n\r\n    .GroupLeftGroupList {\r\n        margin: 0;\r\n    }\r\n\r\n    .GroupLeftGroupItem {\r\n        img {\r\n            width: 48px;\r\n            height: 48px;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/group/mobile/pages/home/_main/GroupHomeMb.scss":
/*!******************************************************************!*\
  !*** ./src/pages/group/mobile/pages/home/_main/GroupHomeMb.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupHomeMb_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./GroupHomeMb.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/mobile/pages/home/_main/GroupHomeMb.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupHomeMb_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupHomeMb_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_group_mobile_pages_home__main_GroupHomeMb_js.js.map