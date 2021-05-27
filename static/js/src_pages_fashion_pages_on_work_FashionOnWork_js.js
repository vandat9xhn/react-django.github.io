(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_fashion_pages_on_work_FashionOnWork_js"],{

/***/ "./src/pages/fashion/components/banner/list_names/FashionLN.js":
/*!*********************************************************************!*\
  !*** ./src/pages/fashion/components/banner/list_names/FashionLN.js ***!
  \*********************************************************************/
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

__webpack_require__(/*! ./FashionLN.scss */ "./src/pages/fashion/components/banner/list_names/FashionLN.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var list_names = [{ name: 'Shop mall', link: 'mall' }, { name: 'Extra ship', link: 'extra-ship' }, { name: 'Premium', link: 'premium' }, { name: 'Brand discount', link: 'brand-discount' }, { name: 'Brand name', link: 'brand-1' }, { name: 'Brand name', link: 'brand-1' }, { name: 'Brand name', link: 'brand-1' }, { name: 'Brand name', link: 'brand-1' }, { name: 'Brand name', link: 'brand-1' }];

//
FashionLN.propTypes = {};

//
function FashionLN(props) {

    return _react2.default.createElement(
        'div',
        { className: 'FashionLN' },
        _react2.default.createElement(
            'ul',
            { className: 'FashionLN_list list-none' },
            list_names.map(function (item, ix) {
                return _react2.default.createElement(
                    'li',
                    { key: 'FashionLN_' + ix, className: 'FashionLN_item' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/fashion/' + item.link },
                        _react2.default.createElement(
                            'div',
                            { className: 'FashionLN_title brs-5px label-field' },
                            item.name
                        )
                    )
                );
            })
        )
    );
}

exports.default = FashionLN;

/***/ }),

/***/ "./src/pages/fashion/components/head/_main/FashionH.js":
/*!*************************************************************!*\
  !*** ./src/pages/fashion/components/head/_main/FashionH.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
// 


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FashionHCommon = __webpack_require__(/*! ../__main_common/FashionHCommon */ "./src/pages/fashion/components/head/__main_common/FashionHCommon.js");

var _FashionHCommon2 = _interopRequireDefault(_FashionHCommon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
FashionH.propTypes = {};

//
function FashionH(props) {
    // state
    var _useState = (0, _react.useState)(''),
        _useState2 = _slicedToArray(_useState, 2),
        search = _useState2[0],
        setSearch = _useState2[1];

    //


    function handleSearchFashion(new_search) {
        new_search.trim() && setSearch(new_search);
    }

    //
    if (search) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/fashion/search?q=' + search, push: true });
    }
    //
    return _react2.default.createElement(
        'div',
        { className: 'FashionH' },
        _react2.default.createElement(_FashionHCommon2.default, {
            handled: false,
            handleSearchFashion: handleSearchFashion
        })
    );
}

exports.default = FashionH;

/***/ }),

/***/ "./src/pages/fashion/pages/on_work/FashionOnWork.js":
/*!**********************************************************!*\
  !*** ./src/pages/fashion/pages/on_work/FashionOnWork.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ./FashionOnWork.scss */ "./src/pages/fashion/pages/on_work/FashionOnWork.scss");

var _FashionH = __webpack_require__(/*! ../../components/head/_main/FashionH */ "./src/pages/fashion/components/head/_main/FashionH.js");

var _FashionH2 = _interopRequireDefault(_FashionH);

var _FashionLN = __webpack_require__(/*! ../../components/banner/list_names/FashionLN */ "./src/pages/fashion/components/banner/list_names/FashionLN.js");

var _FashionLN2 = _interopRequireDefault(_FashionLN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
FashionOnWork.propTypes = {};

function FashionOnWork(props) {
    return _react2.default.createElement(
        'div',
        { className: 'FashionOnWork' },
        _react2.default.createElement(_FashionH2.default, null),
        _react2.default.createElement(_FashionLN2.default, null),
        _react2.default.createElement(
            'div',
            { className: 'FashionOnWork_contain' },
            _react2.default.createElement(
                'div',
                { className: 'FashionOnWork_row' },
                _react2.default.createElement(
                    'div',
                    { className: 'fashion_title' },
                    'I am working on it'
                )
            )
        )
    );
}

exports.default = FashionOnWork;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/fashion/components/banner/list_names/FashionLN.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/fashion/components/banner/list_names/FashionLN.scss ***!
  \********************************************************************************************************************************************************************************/
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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".FashionLN_list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.FashionLN_item {\n  margin: 0.5rem;\n}\n\n.FashionLN_title {\n  padding: 0.5rem;\n  background-color: var(--white-blur);\n}\n.FashionLN_title:hover {\n  background-color: var(--white);\n}", "",{"version":3,"sources":["webpack://./src/pages/fashion/components/banner/list_names/FashionLN.scss"],"names":[],"mappings":"AAEA;EACI,aAAA;EACA,eAAA;EACA,uBAAA;AADJ;;AAGA;EACI,cAAA;AAAJ;;AAEA;EACI,eAAA;EACA,mCAAA;AACJ;AAAI;EACI,8BAAA;AAER","sourcesContent":["\r\n\r\n.FashionLN_list{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n.FashionLN_item{\r\n    margin: 0.5rem;\r\n}\r\n.FashionLN_title{\r\n    padding: 0.5rem;\r\n    background-color: var(--white-blur);\r\n    &:hover{\r\n        background-color: var(--white);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/fashion/pages/on_work/FashionOnWork.scss":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/fashion/pages/on_work/FashionOnWork.scss ***!
  \*********************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".FashionOnWork_row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 80vh;\n}", "",{"version":3,"sources":["webpack://./src/pages/fashion/pages/on_work/FashionOnWork.scss"],"names":[],"mappings":"AACA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,YAAA;AADJ","sourcesContent":["//\r\n.FashionOnWork_row{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    height: 80vh;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/fashion/components/banner/list_names/FashionLN.scss":
/*!***********************************************************************!*\
  !*** ./src/pages/fashion/components/banner/list_names/FashionLN.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FashionLN_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./FashionLN.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/fashion/components/banner/list_names/FashionLN.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FashionLN_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FashionLN_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/fashion/pages/on_work/FashionOnWork.scss":
/*!************************************************************!*\
  !*** ./src/pages/fashion/pages/on_work/FashionOnWork.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FashionOnWork_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./FashionOnWork.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/fashion/pages/on_work/FashionOnWork.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FashionOnWork_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FashionOnWork_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_fashion_pages_on_work_FashionOnWork_js.js.map