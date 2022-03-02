(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_group_pc_pages_discover__main_GroupDiscover_js"],{

/***/ "./src/component/separate_line_scroll_toggle/SeparateLineScrollToggle.js":
/*!*******************************************************************************!*\
  !*** ./src/component/separate_line_scroll_toggle/SeparateLineScrollToggle.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _useBool2 = __webpack_require__(/*! ../../_hooks/useBool */ "./src/_hooks/useBool.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
SeparateLineScrollToggle.propTypes = {};

//

//
function SeparateLineScrollToggle(_ref) {
    var ref_scroll_elm = _ref.ref_scroll_elm;

    //
    var _useBool = (0, _useBool2.useBool)(),
        is_true = _useBool.is_true,
        setIsTrue = _useBool.setIsTrue;

    //


    (0, _react.useEffect)(function () {
        ref_scroll_elm.current.addEventListener('scroll', handleScroll);

        return function () {
            ref_scroll_elm.current && ref_scroll_elm.current.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // ----

    //
    function handleScroll(e) {
        setIsTrue(e.target.scrollTop > 0);
    }

    //
    return _react2.default.createElement('div', {
        className: 'SeparateLineScrollToggle h-1px bg-blur ' + (is_true ? '' : 'display-none')
    });
}

exports.default = SeparateLineScrollToggle;

/***/ }),

/***/ "./src/pages/group/pc/_components/_layout/_main/GroupLayout.js":
/*!*********************************************************************!*\
  !*** ./src/pages/group/pc/_components/_layout/_main/GroupLayout.js ***!
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

var _GroupLayoutLeft = __webpack_require__(/*! ../left/_main/GroupLayoutLeft */ "./src/pages/group/pc/_components/_layout/left/_main/GroupLayoutLeft.js");

var _GroupLayoutLeft2 = _interopRequireDefault(_GroupLayoutLeft);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GroupLayout.propTypes = {};

//

//
function GroupLayout(_ref) {
    var children = _ref.children;

    //
    var ref_scroll = (0, _react.useRef)(null);

    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupLayout' },
        _react2.default.createElement(
            'div',
            { className: 'display-flex' },
            _react2.default.createElement(
                'div',
                { className: 'GroupLayout_left flex-shrink-0 left-bar-sticky' },
                _react2.default.createElement(_GroupLayoutLeft2.default, { ref_scroll: ref_scroll })
            ),
            _react2.default.createElement(
                'div',
                { className: 'GroupLayout_right flex-grow-1' },
                children
            )
        )
    );
}

exports.default = GroupLayout;

/***/ }),

/***/ "./src/pages/group/pc/_components/_layout/left/_main/GroupLayoutLeft.js":
/*!******************************************************************************!*\
  !*** ./src/pages/group/pc/_components/_layout/left/_main/GroupLayoutLeft.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GroupLayoutLeftHead = __webpack_require__(/*! ../head/_main/GroupLayoutLeftHead */ "./src/pages/group/pc/_components/_layout/left/head/_main/GroupLayoutLeftHead.js");

var _GroupLayoutLeftHead2 = _interopRequireDefault(_GroupLayoutLeftHead);

var _GroupLayoutLeftNav = __webpack_require__(/*! ../nav/GroupLayoutLeftNav */ "./src/pages/group/pc/_components/_layout/left/nav/GroupLayoutLeftNav.js");

var _GroupLayoutLeftNav2 = _interopRequireDefault(_GroupLayoutLeftNav);

var _GroupLeftJoined = __webpack_require__(/*! ../joined/_main/GroupLeftJoined */ "./src/pages/group/pc/_components/_layout/left/joined/_main/GroupLeftJoined.js");

var _GroupLeftJoined2 = _interopRequireDefault(_GroupLeftJoined);

var _GroupLeftManage = __webpack_require__(/*! ../manage/_main/GroupLeftManage */ "./src/pages/group/pc/_components/_layout/left/manage/_main/GroupLeftManage.js");

var _GroupLeftManage2 = _interopRequireDefault(_GroupLeftManage);

var _SeparateLineScrollToggle = __webpack_require__(/*! ../../../../../../../component/separate_line_scroll_toggle/SeparateLineScrollToggle */ "./src/component/separate_line_scroll_toggle/SeparateLineScrollToggle.js");

var _SeparateLineScrollToggle2 = _interopRequireDefault(_SeparateLineScrollToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GroupLayoutLeft.propTypes = {};

//

//
function GroupLayoutLeft(_ref) {
    var ref_scroll = _ref.ref_scroll;

    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupLayoutLeft display-flex flex-col h-100per' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_GroupLayoutLeftHead2.default, null)
        ),
        _react2.default.createElement(
            'div',
            { className: 'padding-x-8px' },
            _react2.default.createElement(_SeparateLineScrollToggle2.default, { ref_scroll_elm: ref_scroll })
        ),
        _react2.default.createElement(
            'div',
            {
                ref: ref_scroll,
                className: 'flex-grow-1 flex-basis-1rem overflow-y-auto scroll-thin'
            },
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_GroupLayoutLeftNav2.default, { ref_scroll_elm: ref_scroll })
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_GroupLeftManage2.default, { ref_scroll: ref_scroll })
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_GroupLeftJoined2.default, { ref_scroll: ref_scroll })
            )
        )
    );
}

exports.default = GroupLayoutLeft;

/***/ }),

/***/ "./src/pages/group/pc/pages/discover/_main/GroupDiscover.js":
/*!******************************************************************!*\
  !*** ./src/pages/group/pc/pages/discover/_main/GroupDiscover.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GroupLayout = __webpack_require__(/*! ../../../_components/_layout/_main/GroupLayout */ "./src/pages/group/pc/_components/_layout/_main/GroupLayout.js");

var _GroupLayout2 = _interopRequireDefault(_GroupLayout);

var _GroupDiscoverRight = __webpack_require__(/*! ../right/_main/GroupDiscoverRight */ "./src/pages/group/pc/pages/discover/right/_main/GroupDiscoverRight.js");

var _GroupDiscoverRight2 = _interopRequireDefault(_GroupDiscoverRight);

__webpack_require__(/*! ./GroupDiscover.scss */ "./src/pages/group/pc/pages/discover/_main/GroupDiscover.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GroupDiscover.propTypes = {};

//

// 

//
function GroupDiscover(props) {
    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupDiscover' },
        _react2.default.createElement(
            _GroupLayout2.default,
            null,
            _react2.default.createElement(
                'div',
                { className: 'GroupDiscover_right padding-top-20px' },
                _react2.default.createElement(_GroupDiscoverRight2.default, null)
            )
        )
    );
}

exports.default = GroupDiscover;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/pc/pages/discover/_main/GroupDiscover.scss":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/pc/pages/discover/_main/GroupDiscover.scss ***!
  \*****************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".GroupDiscover .GroupLayout_right {\n  overflow: hidden;\n}", "",{"version":3,"sources":["webpack://./src/pages/group/pc/pages/discover/_main/GroupDiscover.scss"],"names":[],"mappings":"AACI;EACI,gBAAA;AAAR","sourcesContent":[".GroupDiscover {\r\n    .GroupLayout_right {\r\n        overflow: hidden;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/group/pc/pages/discover/_main/GroupDiscover.scss":
/*!********************************************************************!*\
  !*** ./src/pages/group/pc/pages/discover/_main/GroupDiscover.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupDiscover_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./GroupDiscover.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/pc/pages/discover/_main/GroupDiscover.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupDiscover_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupDiscover_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_group_pc_pages_discover__main_GroupDiscover_js.js.map