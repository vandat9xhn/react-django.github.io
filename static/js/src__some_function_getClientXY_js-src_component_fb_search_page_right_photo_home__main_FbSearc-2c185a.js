(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src__some_function_getClientXY_js-src_component_fb_search_page_right_photo_home__main_FbSearc-2c185a"],{

/***/ "./src/_some_function/getClientXY.js":
/*!*******************************************!*\
  !*** ./src/_some_function/getClientXY.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getClientX = getClientX;
exports.getClientY = getClientY;
exports.getClientXY = getClientXY;
exports.getTouchClientXY = getTouchClientXY;

var _Constant = __webpack_require__(/*! ../_constant/Constant */ "./src/_constant/Constant.js");

//
function getClientX(e) {
    return _Constant.IS_MOBILE ? e.touches[0].clientX : e.clientX;
}

//
function getClientY(e) {
    return _Constant.IS_MOBILE ? e.touches[0].clientY : e.clientY;
}

//
function getClientXY(e) {
    return _Constant.IS_MOBILE ? { client_x: e.touches[0].clientX, client_y: e.touches[0].clientY } : { client_x: e.clientX, client_y: e.clientY };
}

//
function getTouchClientXY(e, touche_ix) {
    return {
        client_x: e.touches[touche_ix].clientX,
        client_y: e.touches[touche_ix].clientY
    };
}

/***/ }),

/***/ "./src/component/fb_search/page/right/photo/home/_main/FbSearchPagePhotoHome.js":
/*!**************************************************************************************!*\
  !*** ./src/component/fb_search/page/right/photo/home/_main/FbSearchPagePhotoHome.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ParseLocationSearch = __webpack_require__(/*! ../../../../../../../_some_function/ParseLocationSearch */ "./src/_some_function/ParseLocationSearch.js");

var _FbSearchPagePhotoList = __webpack_require__(/*! ../../_components/list/_main/FbSearchPagePhotoList */ "./src/component/fb_search/page/right/photo/_components/list/_main/FbSearchPagePhotoList.js");

var _FbSearchPagePhotoList2 = _interopRequireDefault(_FbSearchPagePhotoList);

var _FbSearchPageLayout = __webpack_require__(/*! ../../../../_components/_layout/FbSearchPageLayout */ "./src/component/fb_search/page/_components/_layout/FbSearchPageLayout.js");

var _FbSearchPageLayout2 = _interopRequireDefault(_FbSearchPageLayout);

__webpack_require__(/*! ./FbSearchPagePhotoHome.scss */ "./src/component/fb_search/page/right/photo/home/_main/FbSearchPagePhotoHome.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
FbSearchPagePhotoHome.propTypes = {};

//

//

//
function FbSearchPagePhotoHome(props) {
    //
    var search_value = (0, _ParseLocationSearch.ParseLocationSearch)()['q'];

    //
    return _react2.default.createElement(
        'div',
        { className: 'FbSearchPagePhotoHome' },
        _react2.default.createElement(_FbSearchPageLayout2.default, {
            right_elm: _react2.default.createElement(
                'div',
                { className: 'fb-search-page-right-contain display-flex-center' },
                _react2.default.createElement(
                    'div',
                    { className: 'w-680px' },
                    _react2.default.createElement(
                        'div',
                        { className: 'margin-bottom-20px' },
                        _react2.default.createElement(_FbSearchPagePhotoList2.default, {
                            title: 'Photos from friends and groups',
                            title_no_results: 'No photos from friends and groups',
                            search_value: search_value,
                            type: 'friends_groups'
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_FbSearchPagePhotoList2.default, {
                            title: 'Public photos',
                            title_no_results: 'No photos from public',
                            search_value: search_value,
                            type: 'public'
                        })
                    )
                )
            ),
            title: 'Photos'
        })
    );
}

exports.default = FbSearchPagePhotoHome;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/fb_search/page/right/photo/home/_main/FbSearchPagePhotoHome.scss":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/fb_search/page/right/photo/home/_main/FbSearchPagePhotoHome.scss ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/component/fb_search/page/right/photo/home/_main/FbSearchPagePhotoHome.scss":
/*!****************************************************************************************!*\
  !*** ./src/component/fb_search/page/right/photo/home/_main/FbSearchPagePhotoHome.scss ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbSearchPagePhotoHome_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../node_modules/sass-loader/dist/cjs.js!./FbSearchPagePhotoHome.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/fb_search/page/right/photo/home/_main/FbSearchPagePhotoHome.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbSearchPagePhotoHome_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbSearchPagePhotoHome_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src__some_function_getClientXY_js-src_component_fb_search_page_right_photo_home__main_FbSearc-2c185a.js.map