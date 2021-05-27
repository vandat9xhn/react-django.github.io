(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_component_some_div_search_animate_div_SearchAnimateDiv_js"],{

/***/ "./src/component/some_div/search_animate_div/SearchAnimateDiv.js":
/*!***********************************************************************!*\
  !*** ./src/component/some_div/search_animate_div/SearchAnimateDiv.js ***!
  \***********************************************************************/
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

var _IconsInput = __webpack_require__(/*! ../../../_icons_svg/Icons_input/IconsInput */ "./src/_icons_svg/Icons_input/IconsInput.js");

var _IconsInput2 = _interopRequireDefault(_IconsInput);

var _IconsArrow = __webpack_require__(/*! ../../../_icons_svg/icons_arrow/IconsArrow */ "./src/_icons_svg/icons_arrow/IconsArrow.js");

var _IconsArrow2 = _interopRequireDefault(_IconsArrow);

__webpack_require__(/*! ./SearchAnimateDiv.scss */ "./src/component/some_div/search_animate_div/SearchAnimateDiv.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
SearchAnimateDiv.propTypes = {
    value: _propTypes2.default.string,
    handleChange: _propTypes2.default.func,
    handleSearch: _propTypes2.default.func,
    placeholder: _propTypes2.default.string
};
SearchAnimateDiv.defaultProps = {
    value: '',
    placeholder: 'Search...'

    //
};function SearchAnimateDiv(props) {
    var value = props.value,
        placeholder = props.placeholder,
        handleChange = props.handleChange,
        handleSearch = props.handleSearch;
    //

    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        is_open = _useState2[0],
        setIsOpen = _useState2[1];

    //


    function onClick() {
        if (is_open) {
            handleSearch();
        } else {
            setIsOpen(true);
        }
    }
    //
    function handleClose() {
        setIsOpen(false);
    }

    //
    function onChange(e) {
        handleChange(e.target.value);
    }
    //
    function onKeyDown(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            handleSearch();
        }
    }
    //
    function handleClear() {
        handleChange('');
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'SearchAnimateDiv position-rel ' + (is_open ? '' : 'SearchAnimateDiv_close') },
        _react2.default.createElement(
            'div',
            { className: 'SearchAnimateDiv_key' },
            _react2.default.createElement(
                'div',
                {
                    className: 'SearchAnimateDiv_key-contain display-flex justify-content-center align-items-center cursor-pointer ' + (is_open ? 'nav-active' : ''),
                    onClick: onClick
                },
                _react2.default.createElement(_IconsInput2.default, { y: 200 })
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'SearchAnimateDiv_input' },
            _react2.default.createElement('input', {
                type: 'text',
                value: value,
                placeholder: placeholder,
                onChange: onChange,
                onKeyDown: onKeyDown
            }),
            _react2.default.createElement(
                'div',
                {
                    className: 'SearchAnimateDiv_input-clear',
                    onClick: handleClear
                },
                _react2.default.createElement(_IconsArrow2.default, { y: 400, size_icon: '0.8rem' })
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'SearchAnimateDiv_right' },
            _react2.default.createElement(
                'div',
                { className: 'SearchAnimateDiv_icon-close display-flex justify-content-center align-items-center' },
                _react2.default.createElement(
                    'div',
                    {
                        className: 'close-icon-small brs-50 cursor-pointer',
                        onClick: handleClose
                    },
                    _react2.default.createElement(_IconsArrow2.default, { y: 400, size_icon: '1rem' })
                )
            )
        )
    );
}

exports.default = SearchAnimateDiv;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/some_div/search_animate_div/SearchAnimateDiv.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/some_div/search_animate_div/SearchAnimateDiv.scss ***!
  \**********************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".SearchAnimateDiv_right, .SearchAnimateDiv_key {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n/* ------------------------ */\n.SearchAnimateDiv {\n  width: 100%;\n  padding: 0.5rem 2.5rem;\n  background-color: var(--md-bg-primary);\n  border-radius: 20px;\n  overflow: hidden;\n  transition: all 250ms;\n}\n\n.SearchAnimateDiv_close {\n  width: 2.5rem;\n  padding: 0.5rem 1.3rem;\n}\n.SearchAnimateDiv_close .SearchAnimateDiv_input {\n  opacity: 0;\n}\n.SearchAnimateDiv_close .SearchAnimateDiv_input input {\n  padding: 0;\n}\n.SearchAnimateDiv_close .SearchAnimateDiv_right {\n  opacity: 0;\n}\n\n.SearchAnimateDiv_key {\n  left: 0;\n  z-index: 1;\n}\n\n.SearchAnimateDiv_key-contain {\n  padding: 0.5rem;\n}\n\n.SearchAnimateDiv_input {\n  position: relative;\n}\n.SearchAnimateDiv_input input {\n  padding: 0.25rem 1rem 0.25rem 0.25rem;\n  width: 100%;\n  border: none;\n}\n.SearchAnimateDiv_input input:focus {\n  outline: none;\n}\n\n.SearchAnimateDiv_input-clear {\n  position: absolute;\n  right: 2px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: default;\n}\n.SearchAnimateDiv_input-clear:hover {\n  opacity: 0.8;\n}\n.SearchAnimateDiv_input-clear .IconsArrow_close {\n  stroke: black;\n}\n\n.SearchAnimateDiv_right {\n  right: 0;\n}\n\n.SearchAnimateDiv_icon-close {\n  padding: 0.5rem;\n}\n\n@media (max-width: 500px) {\n  .SearchAnimateDiv {\n    padding: 0.25rem 2rem;\n  }\n  .SearchAnimateDiv .IconsInput {\n    width: 1.25rem;\n    height: 1.25rem;\n  }\n  .SearchAnimateDiv .close-icon-small {\n    width: 1.25rem;\n    height: 1.25rem;\n  }\n\n  .SearchAnimateDiv_close {\n    width: 0;\n    padding: 0.25rem 1.1rem;\n  }\n}\n@media (max-width: 300px) {\n  .SearchAnimateDiv_close {\n    padding: 0.3rem 1.1rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/component/some_div/search_animate_div/SearchAnimateDiv.scss"],"names":[],"mappings":"AACA;EACI,kBAAA;EACA,QAAA;EACA,2BAAA;AAAJ;;AAIA,6BAAA;AAEA;EACI,WAAA;EACA,sBAAA;EACA,sCAAA;EACA,mBAAA;EACA,gBAAA;EACA,qBAAA;AAFJ;;AAIA;EACI,aAAA;EACA,sBAAA;AADJ;AAEI;EACI,UAAA;AAAR;AACQ;EACI,UAAA;AACZ;AAEI;EACI,UAAA;AAAR;;AAIA;EAEI,OAAA;EACA,UAAA;AAFJ;;AAKA;EACI,eAAA;AAFJ;;AAKA;EACI,kBAAA;AAFJ;AAGI;EACI,qCAAA;EACA,WAAA;EACA,YAAA;AADR;AAIQ;EACI,aAAA;AAFZ;;AAOA;EACI,kBAAA;EACA,UAAA;EACA,QAAA;EACA,2BAAA;EAEA,eAAA;AALJ;AAMI;EACI,YAAA;AAJR;AAMI;EACI,aAAA;AAJR;;AAQA;EAEI,QAAA;AANJ;;AASA;EACI,eAAA;AANJ;;AAUA;EACI;IACI,qBAAA;EAPN;EAQM;IACI,cAAA;IACA,eAAA;EANV;EAQM;IACI,cAAA;IACA,eAAA;EANV;;EASE;IACI,QAAA;IACA,uBAAA;EANN;AACF;AASA;EACI;IACI,sBAAA;EAPN;AACF","sourcesContent":["// \r\n%key-close{\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n}\r\n\r\n\r\n/* ------------------------ */\r\n\r\n.SearchAnimateDiv{\r\n    width: 100%;\r\n    padding: 0.5rem 2.5rem;\r\n    background-color: var(--md-bg-primary);\r\n    border-radius: 20px;\r\n    overflow: hidden;\r\n    transition: all 250ms;\r\n}\r\n.SearchAnimateDiv_close{\r\n    width: 2.5rem;\r\n    padding: 0.5rem 1.3rem;\r\n    .SearchAnimateDiv_input{\r\n        opacity: 0;\r\n        input{\r\n            padding: 0;\r\n        }\r\n    }\r\n    .SearchAnimateDiv_right{\r\n        opacity: 0\r\n    }\r\n}\r\n\r\n.SearchAnimateDiv_key{\r\n    @extend %key-close;\r\n    left: 0;\r\n    z-index: 1;\r\n}\r\n// .\r\n.SearchAnimateDiv_key-contain{\r\n    padding: 0.5rem;\r\n}\r\n\r\n.SearchAnimateDiv_input{\r\n    position: relative;\r\n    input{\r\n        padding: 0.25rem 1rem 0.25rem 0.25rem;\r\n        width: 100%;\r\n        border: none;\r\n        // border: 1px solid var(--md-bg-ccc);\r\n        // border-radius: 5px;\r\n        &:focus{\r\n            outline: none;\r\n        }\r\n    }\r\n}\r\n// .\r\n.SearchAnimateDiv_input-clear{\r\n    position: absolute;\r\n    right: 2px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n\r\n    cursor: default;\r\n    &:hover{\r\n        opacity: 0.8;\r\n    }\r\n    .IconsArrow_close{\r\n        stroke: black;\r\n    }\r\n}\r\n\r\n.SearchAnimateDiv_right{\r\n    @extend %key-close;\r\n    right: 0;\r\n}\r\n// .\r\n.SearchAnimateDiv_icon-close{\r\n    padding: 0.5rem;\r\n}\r\n\r\n\r\n@media (max-width: 500px){\r\n    .SearchAnimateDiv{\r\n        padding: 0.25rem 2rem;\r\n        .IconsInput{\r\n            width: 1.25rem;\r\n            height: 1.25rem;\r\n        }\r\n        .close-icon-small{\r\n            width: 1.25rem;\r\n            height: 1.25rem;\r\n        }\r\n    }\r\n    .SearchAnimateDiv_close{\r\n        width: 0;\r\n        padding: 0.25rem 1.1rem;\r\n    }\r\n}\r\n\r\n@media (max-width: 300px){\r\n    .SearchAnimateDiv_close {\r\n        padding: 0.3rem 1.1rem;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/component/some_div/search_animate_div/SearchAnimateDiv.scss":
/*!*************************************************************************!*\
  !*** ./src/component/some_div/search_animate_div/SearchAnimateDiv.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_SearchAnimateDiv_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./SearchAnimateDiv.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/some_div/search_animate_div/SearchAnimateDiv.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_SearchAnimateDiv_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_SearchAnimateDiv_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_component_some_div_search_animate_div_SearchAnimateDiv_js.js.map