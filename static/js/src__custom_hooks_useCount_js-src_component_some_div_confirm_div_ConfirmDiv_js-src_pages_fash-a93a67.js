(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src__custom_hooks_useCount_js-src_component_some_div_confirm_div_ConfirmDiv_js-src_pages_fash-a93a67"],{

/***/ "./src/_custom_hooks/useCount.js":
/*!***************************************!*\
  !*** ./src/_custom_hooks/useCount.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useNewCount = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

//
var useNewCount = exports.useNewCount = function useNewCount(initial_count, initial_min, initial_max, callback) {
    // state
    var _useState = (0, _react.useState)(initial_count),
        _useState2 = _slicedToArray(_useState, 2),
        count = _useState2[0],
        setCount = _useState2[1];
    // ref


    var min = (0, _react.useRef)(initial_min);
    var max = (0, _react.useRef)(initial_max);
    var value_before = (0, _react.useRef)(count);

    /* ---------------- COMMON FUNC ------------------ */
    // 
    function handleSetCount(value) {
        setCount(value);
        callback && callback(value);
    }
    //
    function changeMax(new_max) {
        max.current = new_max;
        if (new_max < count) {
            handleSetCount(new_max);
        }
    }
    //
    function changeMin(new_min) {
        min.current = new_min;
        if (new_min > count) {
            handleSetCount(new_min);
        }
    }

    /* ---------------- COUNT ------------------ */

    //
    function countUp() {
        if (count < max.current) {
            handleSetCount(+count + 1);
        }
    }
    //
    function countDown() {
        if (count > min.current) {
            handleSetCount(count - 1);
        }
    }
    //
    function beforeCountNum(value) {
        value_before.current = value;
    }
    //
    function countNum(value) {
        if (value >= min.current && value <= max.current || value == '') {
            setCount(value);
        }
    }
    //
    function countNumDone(value) {
        if (value_before.current == value) {
            return;
        }
        // 
        if (value < min.current) {
            handleSetCount(min.current);
        } else if (value > max.current) {
            handleSetCount(max.current);
        } else {
            handleSetCount(+value);
        }
    }
    //
    return [count, countUp, countDown, beforeCountNum, countNum, countNumDone, changeMax, changeMin];
};

/***/ }),

/***/ "./src/component/some_div/confirm_div/ConfirmDiv.js":
/*!**********************************************************!*\
  !*** ./src/component/some_div/confirm_div/ConfirmDiv.js ***!
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

__webpack_require__(/*! ./ConfirmDiv.scss */ "./src/component/some_div/confirm_div/ConfirmDiv.scss");

var _WaitingCell = __webpack_require__(/*! ../../waiting/waiting_cell/WaitingCell */ "./src/component/waiting/waiting_cell/WaitingCell.js");

var _WaitingCell2 = _interopRequireDefault(_WaitingCell);

var _IconsArrow = __webpack_require__(/*! ../../../_icons_svg/icons_arrow/IconsArrow */ "./src/_icons_svg/icons_arrow/IconsArrow.js");

var _IconsArrow2 = _interopRequireDefault(_IconsArrow);

var _IconFav = __webpack_require__(/*! ../../../_icons_svg/_icon_fav/IconFav */ "./src/_icons_svg/_icon_fav/IconFav.js");

var _IconFav2 = _interopRequireDefault(_IconFav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
function ConfirmDiv(props) {
    var open_confirm = props.open_confirm,
        closeConfirm = props.closeConfirm,
        confirmYes = props.confirmYes,
        children = props.children;


    return _react2.default.createElement(
        'div',
        { className: 'ConfirmDiv ' + (open_confirm ? '' : 'display-none') },
        _react2.default.createElement('div', { className: 'screen-blur', onClick: closeConfirm }),
        _react2.default.createElement(
            'div',
            { className: 'ConfirmDiv_contain brs-5px App_box_shadow form-fixed' },
            _react2.default.createElement(
                'div',
                { className: 'ConfirmDiv_top' },
                _react2.default.createElement(
                    'div',
                    { className: 'ConfirmDiv__title' },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_IconFav2.default, { size_icon: '2.5rem' })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        open_confirm && _react2.default.createElement(_WaitingCell2.default, null)
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'ConfirmDiv__close brs-5px', onClick: closeConfirm },
                    _react2.default.createElement(_IconsArrow2.default, { y: 400, size_icon: '1.5rem' })
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'ConfirmDiv_mid' },
                children
            ),
            _react2.default.createElement(
                'div',
                { className: 'ConfirmDiv_bot' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'ConfirmDiv__yes', onClick: confirmYes },
                        'Yes'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'ConfirmDiv__no', onClick: closeConfirm },
                        'No'
                    )
                )
            )
        )
    );
}

ConfirmDiv.propTypes = {
    children: _propTypes2.default.any,
    // perform func when choosing ""yes""
    confirmYes: _propTypes2.default.func,
    // close component
    closeConfirm: _propTypes2.default.func,
    // open or close confirm
    open_confirm: _propTypes2.default.bool
};

ConfirmDiv.defaultProps = {};

exports.default = ConfirmDiv;

/***/ }),

/***/ "./src/component/waiting/waiting_cell/WaitingCell.js":
/*!***********************************************************!*\
  !*** ./src/component/waiting/waiting_cell/WaitingCell.js ***!
  \***********************************************************/
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
WaitingCell.propTypes = {
    size_icon: _propTypes2.default.string,
    color1: _propTypes2.default.string,
    color2: _propTypes2.default.string,
    color3: _propTypes2.default.string
};

WaitingCell.defaultProps = {
    size_icon: '1.5rem',
    color1: 'var(--black-brown)',
    color2: 'var(--blue)',
    color3: 'var(--danger)'
};

//
function WaitingCell(props) {
    var size_icon = props.size_icon,
        color1 = props.color1,
        color2 = props.color2,
        color3 = props.color3;


    return _react2.default.createElement(
        'svg',
        {
            className: 'icon_width-height',
            width: size_icon,
            height: size_icon,
            viewBox: '0 0 200 200',
            strokeLinecap: 'round'
        },
        _react2.default.createElement('line', {
            id: 'WaitingCell_line1',
            x1: '0',
            y1: '20',
            x2: '0',
            y2: '20',
            stroke: color1,
            strokeWidth: '40'
        }),
        _react2.default.createElement('line', {
            id: 'WaitingCell_line2',
            x1: '0',
            y1: '100',
            x2: '0',
            y2: '100',
            stroke: color2,
            strokeWidth: '40'
        }),
        _react2.default.createElement('line', {
            id: 'WaitingCell_line3',
            x1: '0',
            y1: '180',
            x2: '0',
            y2: '180',
            stroke: color3,
            strokeWidth: '40'
        }),
        _react2.default.createElement('animate', {
            attributeName: 'x2',
            values: '0;200;0',
            dur: '1s',
            begin: '0s',
            repeatCount: 'indefinite',
            href: '#WaitingCell_line1'
        }),
        _react2.default.createElement('animate', {
            attributeName: 'x2',
            values: '0;200;0',
            dur: '1s',
            begin: '0.2s',
            repeatCount: 'indefinite',
            href: '#WaitingCell_line2'
        }),
        _react2.default.createElement('animate', {
            attributeName: 'x2',
            values: '0;200;0',
            dur: '1s',
            begin: '0.4s',
            repeatCount: 'indefinite',
            href: '#WaitingCell_line3'
        })
    );
}

exports.default = WaitingCell;

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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/some_div/confirm_div/ConfirmDiv.scss":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/some_div/confirm_div/ConfirmDiv.scss ***!
  \*********************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".ConfirmDiv__no, .ConfirmDiv__yes {\n  padding: 0.5rem 1.5rem;\n  border-radius: 5px;\n  cursor: pointer;\n  opacity: 0.8;\n}\n.ConfirmDiv__no:hover, .ConfirmDiv__yes:hover {\n  opacity: 1;\n}\n\n.ConfirmDiv_contain {\n  background-color: var(--md-bg-primary);\n}\n\n.ConfirmDiv_top {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid var(--md-border-blur);\n}\n\n.ConfirmDiv__title {\n  display: flex;\n  align-items: center;\n}\n.ConfirmDiv__title > div:first-child {\n  margin-right: 0.2rem;\n}\n\n.ConfirmDiv__close {\n  padding: 0.5rem;\n  background-color: var(--danger);\n  opacity: 0.8;\n  cursor: pointer;\n}\n.ConfirmDiv__close:hover {\n  opacity: 1;\n}\n\n.ConfirmDiv_mid {\n  min-height: 11rem;\n  padding: 0.5rem;\n  border-bottom: 1px solid var(--md-border-blur);\n  text-align: center;\n}\n\n.ConfirmDiv_bot {\n  display: flex;\n  justify-content: space-around;\n}\n\n.ConfirmDiv__yes {\n  background-color: var(--danger);\n}\n\n.ConfirmDiv__no {\n  background-color: var(--gray);\n}\n\n@media (max-width: 600px) {\n  .ConfirmDiv__mid {\n    min-height: 7rem;\n    padding: 0.3rem;\n  }\n\n  .ConfirmDiv__yes, .ConfirmDiv__no {\n    padding: 0.5rem 1.5rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/component/some_div/confirm_div/ConfirmDiv.scss"],"names":[],"mappings":"AACA;EACI,sBAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;AAAJ;AAEI;EACI,UAAA;AAAR;;AAKA;EACI,sCAAA;AAFJ;;AAMA;EACI,aAAA;EACA,8BAAA;EACA,8CAAA;AAHJ;;AAKA;EACI,aAAA;EACA,mBAAA;AAFJ;AAGI;EACI,oBAAA;AADR;;AAIA;EACI,eAAA;EACA,+BAAA;EACA,YAAA;EACA,eAAA;AADJ;AAEI;EACI,UAAA;AAAR;;AAKA;EACI,iBAAA;EACA,eAAA;EACA,8CAAA;EACA,kBAAA;AAFJ;;AAMA;EACI,aAAA;EACA,6BAAA;AAHJ;;AAKA;EAEI,+BAAA;AAHJ;;AAKA;EAEI,6BAAA;AAHJ;;AAQA;EACI;IACI,gBAAA;IACA,eAAA;EALN;;EAQE;IACI,sBAAA;EALN;AACF","sourcesContent":["// scss\r\n%btn-confirm{\r\n    padding: 0.5rem 1.5rem;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    opacity: 0.8;\r\n\r\n    &:hover{\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n//\r\n.ConfirmDiv_contain{\r\n    background-color: var(--md-bg-primary);\r\n}\r\n\r\n// top\r\n.ConfirmDiv_top{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    border-bottom: 1px solid var(--md-border-blur);\r\n}\r\n.ConfirmDiv__title{\r\n    display: flex;\r\n    align-items: center;\r\n    &>div:first-child{\r\n        margin-right: 0.2rem;\r\n    }\r\n}\r\n.ConfirmDiv__close{\r\n    padding: 0.5rem;\r\n    background-color: var(--danger);\r\n    opacity: 0.8;\r\n    cursor: pointer;\r\n    &:hover{\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n// mid\r\n.ConfirmDiv_mid{\r\n    min-height: 11rem;\r\n    padding: 0.5rem;\r\n    border-bottom: 1px solid var(--md-border-blur);\r\n    text-align: center;\r\n}\r\n\r\n// bot\r\n.ConfirmDiv_bot{\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n.ConfirmDiv__yes{\r\n    @extend %btn-confirm;\r\n    background-color: var(--danger);\r\n}\r\n.ConfirmDiv__no{\r\n    @extend %btn-confirm;\r\n    background-color: var(--gray);\r\n}\r\n\r\n\r\n//\r\n@media (max-width: 600px){\r\n    .ConfirmDiv__mid{\r\n        min-height: 7rem;\r\n        padding: 0.3rem;\r\n    }\r\n    \r\n    .ConfirmDiv__yes, .ConfirmDiv__no{\r\n        padding: 0.5rem 1.5rem;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/component/some_div/confirm_div/ConfirmDiv.scss":
/*!************************************************************!*\
  !*** ./src/component/some_div/confirm_div/ConfirmDiv.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ConfirmDiv_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./ConfirmDiv.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/some_div/confirm_div/ConfirmDiv.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ConfirmDiv_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ConfirmDiv_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src__custom_hooks_useCount_js-src_component_some_div_confirm_div_ConfirmDiv_js-src_pages_fash-a93a67.js.map