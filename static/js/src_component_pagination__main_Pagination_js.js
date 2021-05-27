(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_component_pagination__main_Pagination_js"],{

/***/ "./src/component/pagination/_main/Pagination.js":
/*!******************************************************!*\
  !*** ./src/component/pagination/_main/Pagination.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
// 

// 


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PaginationItem = __webpack_require__(/*! ../page_item/PaginationItem */ "./src/component/pagination/page_item/PaginationItem.js");

var _PaginationItem2 = _interopRequireDefault(_PaginationItem);

var _FuncPagination3 = __webpack_require__(/*! ../func_page/FuncPagination */ "./src/component/pagination/func_page/FuncPagination.js");

__webpack_require__(/*! ./Pagination.scss */ "./src/component/pagination/_main/Pagination.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
Pagination.propTypes = {
    count: _propTypes2.default.number,
    num_side_center: _propTypes2.default.number,
    current: _propTypes2.default.number,
    handleChangePage: _propTypes2.default.func
};

/**
 * num_center = num_side_center * 2 + 1
 */
function Pagination(props) {
    var count = props.count,
        num_side_center = props.num_side_center,
        current = props.current,
        handleChangePage = props.handleChangePage;
    //

    var _FuncPagination = (0, _FuncPagination3.FuncPagination)(count, num_side_center, current),
        _FuncPagination2 = _slicedToArray(_FuncPagination, 3),
        arr_center = _FuncPagination2[0],
        more_left = _FuncPagination2[1],
        more_right = _FuncPagination2[2];

    //


    return _react2.default.createElement(
        'div',
        { className: 'Pagination' },
        _react2.default.createElement(
            'div',
            { className: 'Pagination_contain' },
            _react2.default.createElement(
                'div',
                { className: 'Pagination_row display-flex' },
                _react2.default.createElement(_PaginationItem2.default, {
                    num_page: 1,
                    is_active: 1 == current,
                    handleChangePage: handleChangePage
                }),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: more_left ? '' : 'display-none' },
                        '...'
                    )
                ),
                arr_center.map(function (num_page) {
                    return _react2.default.createElement(_PaginationItem2.default, {
                        key: 'Pagination_' + num_page,
                        num_page: num_page,
                        is_active: num_page == current,
                        handleChangePage: handleChangePage
                    });
                }),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        {
                            className: more_right ? '' : 'display-none'
                        },
                        '...'
                    )
                ),
                count > 1 && _react2.default.createElement(_PaginationItem2.default, {
                    num_page: count,
                    is_active: count == current,
                    handleChangePage: handleChangePage
                })
            )
        )
    );
}

exports.default = Pagination;

/***/ }),

/***/ "./src/component/pagination/func_page/FuncPagination.js":
/*!**************************************************************!*\
  !*** ./src/component/pagination/func_page/FuncPagination.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.FuncPagination = FuncPagination;
/**
 * @return
 * [arr_center, more_left, more_right]
 */
function FuncPagination(count, num_side_center, current) {
    var num_center = num_side_center * 2 + 1;
    //
    if (count <= 2) {
        return [[], false, false];
    }
    //
    if (count <= num_center + 2) {
        return [Array.from({ length: count - 2 }, function (_, k) {
            return k + 2;
        }), false, false];
    }
    //
    if (current <= num_side_center + 2) {
        return [Array.from({ length: num_center }, function (_, k) {
            return k + 2;
        }), false, true];
    }
    //
    if (current >= count - num_side_center - 1) {
        return [Array.from({ length: num_center }, function (_, k) {
            return count + k - num_center;
        }), true, false];
    }
    //
    return [Array.from({ length: num_center }, function (_, k) {
        return current + k - num_side_center;
    }), true, true];
}

/***/ }),

/***/ "./src/component/pagination/page_item/PaginationItem.js":
/*!**************************************************************!*\
  !*** ./src/component/pagination/page_item/PaginationItem.js ***!
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

__webpack_require__(/*! ./PaginationItem.scss */ "./src/component/pagination/page_item/PaginationItem.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PaginationItem.propTypes = {};

//
function PaginationItem(props) {
    var num_page = props.num_page,
        is_active = props.is_active,
        handleChangePage = props.handleChangePage;
    //

    function onChangePage() {
        if (!is_active) {
            handleChangePage(num_page);
        }
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'PaginationItem' },
        _react2.default.createElement(
            'div',
            {
                className: 'PaginationItem_contain brs-5px ' + (is_active ? 'PaginationItem_contain-active' : ''),
                onClick: onChangePage
            },
            num_page
        )
    );
}

exports.default = PaginationItem;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/pagination/_main/Pagination.scss":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/pagination/_main/Pagination.scss ***!
  \*****************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".Pagination_contain {\n  width: fit-content;\n  max-width: 96%;\n  overflow-x: auto;\n  margin: auto;\n}\n\n@media (max-width: 230px) {\n  .Pagination_row {\n    flex-wrap: wrap;\n  }\n}", "",{"version":3,"sources":["webpack://./src/component/pagination/_main/Pagination.scss"],"names":[],"mappings":"AAEA;EACI,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,YAAA;AADJ;;AAMA;EACI;IACI,eAAA;EAHN;AACF","sourcesContent":["\r\n\r\n.Pagination_contain{\r\n    width: fit-content;\r\n    max-width: 96%;\r\n    overflow-x: auto;\r\n    margin: auto;\r\n\r\n}\r\n\r\n//\r\n@media (max-width: 230px) {\r\n    .Pagination_row{\r\n        flex-wrap: wrap;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/pagination/page_item/PaginationItem.scss":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/pagination/page_item/PaginationItem.scss ***!
  \*************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PaginationItem {\n  margin: 0.25rem;\n}\n\n.PaginationItem_contain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 2rem;\n  height: 2rem;\n  padding: 0.5rem;\n  background-color: var(--border-fashion);\n  color: black;\n  user-select: none;\n  cursor: pointer;\n}\n.PaginationItem_contain:hover {\n  background-color: var(--fashion-hover);\n}\n\n.PaginationItem_contain-active {\n  border: 1px solid var(--danger);\n  color: var(--white);\n  font-weight: 500;\n}\n\n@media (max-width: 350px) {\n  .PaginationItem {\n    margin: 0.1rem;\n  }\n\n  .PaginationItem_contain {\n    width: 1.65rem;\n    height: 1.65rem;\n    padding: 0.25rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/component/pagination/page_item/PaginationItem.scss"],"names":[],"mappings":"AACA;EACI,eAAA;AAAJ;;AAIA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EAEA,WAAA;EACA,YAAA;EACA,eAAA;EACA,uCAAA;EAEA,YAAA;EACA,iBAAA;EACA,eAAA;AAHJ;AAII;EACI,sCAAA;AAFR;;AAKA;EACI,+BAAA;EACA,mBAAA;EACA,gBAAA;AAFJ;;AAMA;EACI;IACI,cAAA;EAHN;;EAOE;IACI,cAAA;IACA,eAAA;IACA,gBAAA;EAJN;AACF","sourcesContent":["//\r\n.PaginationItem {\r\n    margin: 0.25rem;\r\n}\r\n\r\n//\r\n.PaginationItem_contain {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    width: 2rem;\r\n    height: 2rem;\r\n    padding: 0.5rem;\r\n    background-color: var(--border-fashion);\r\n\r\n    color: black;\r\n    user-select: none;\r\n    cursor: pointer;\r\n    &:hover {\r\n        background-color: var(--fashion-hover);\r\n    }\r\n}\r\n.PaginationItem_contain-active {\r\n    border: 1px solid var(--danger);\r\n    color: var(--white);\r\n    font-weight: 500;\r\n}\r\n\r\n//\r\n@media (max-width: 350px) {\r\n    .PaginationItem {\r\n        margin: 0.1rem;\r\n    }\r\n\r\n    //\r\n    .PaginationItem_contain {\r\n        width: 1.65rem;\r\n        height: 1.65rem;\r\n        padding: 0.25rem;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/component/pagination/_main/Pagination.scss":
/*!********************************************************!*\
  !*** ./src/component/pagination/_main/Pagination.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Pagination_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Pagination.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/pagination/_main/Pagination.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Pagination_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Pagination_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/pagination/page_item/PaginationItem.scss":
/*!****************************************************************!*\
  !*** ./src/component/pagination/page_item/PaginationItem.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PaginationItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./PaginationItem.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/pagination/page_item/PaginationItem.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PaginationItem_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PaginationItem_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_component_pagination__main_Pagination_js.js.map