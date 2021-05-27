(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_user_profile_user_pages_about_right_work_edu__main_PfAboutWorkEdu_js"],{

/***/ "./src/component/some_div/add_div/AddDiv.js":
/*!**************************************************!*\
  !*** ./src/component/some_div/add_div/AddDiv.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconsArrow = __webpack_require__(/*! ../../../_icons_svg/icons_arrow/IconsArrow */ "./src/_icons_svg/icons_arrow/IconsArrow.js");

var _IconsArrow2 = _interopRequireDefault(_IconsArrow);

var _IconDiv = __webpack_require__(/*! ../icon_div/IconDiv */ "./src/component/some_div/icon_div/IconDiv.js");

var _IconDiv2 = _interopRequireDefault(_IconDiv);

__webpack_require__(/*! ./AddDiv.scss */ "./src/component/some_div/add_div/AddDiv.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
AddDiv.propTypes = {
    children: _propTypes2.default.any,
    onClick: _propTypes2.default.func
};

//

//

//
function AddDiv(_ref) {
    var children = _ref.children,
        onClick = _ref.onClick;

    return _react2.default.createElement(
        'div',
        { className: 'AddDiv cursor-pointer label-field', onClick: onClick },
        _react2.default.createElement(
            _IconDiv2.default,
            { Icon: _IconsArrow2.default, y: 400, size_icon: '1rem' },
            children
        )
    );
}

exports.default = AddDiv;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/work_edu/_main/PfAboutWorkEdu.js":
/*!****************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/work_edu/_main/PfAboutWorkEdu.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PfAboutWork = __webpack_require__(/*! ../work/_main/PfAboutWork */ "./src/pages/user_profile/user_pages/about/right/work_edu/work/_main/PfAboutWork.js");

var _PfAboutWork2 = _interopRequireDefault(_PfAboutWork);

var _PfAboutuniversity = __webpack_require__(/*! ../university/_main/PfAboutuniversity */ "./src/pages/user_profile/user_pages/about/right/work_edu/university/_main/PfAboutuniversity.js");

var _PfAboutuniversity2 = _interopRequireDefault(_PfAboutuniversity);

var _PfAboutSchool = __webpack_require__(/*! ../high_school/_main/PfAboutSchool */ "./src/pages/user_profile/user_pages/about/right/work_edu/high_school/_main/PfAboutSchool.js");

var _PfAboutSchool2 = _interopRequireDefault(_PfAboutSchool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 
PfAboutWorkEdu.propTypes = {};

// 

// 
function PfAboutWorkEdu(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'PfAbout_part' },
            _react2.default.createElement(_PfAboutWork2.default, null)
        ),
        _react2.default.createElement(
            'div',
            { className: 'PfAbout_part' },
            _react2.default.createElement(_PfAboutuniversity2.default, null)
        ),
        _react2.default.createElement(
            'div',
            { className: 'PfAbout_part' },
            _react2.default.createElement(_PfAboutSchool2.default, null)
        )
    );
}

exports.default = PfAboutWorkEdu;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/work_edu/high_school/_main/PfAboutSchool.js":
/*!***************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/work_edu/high_school/_main/PfAboutSchool.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AddDiv = __webpack_require__(/*! ../../../../../../../../component/some_div/add_div/AddDiv */ "./src/component/some_div/add_div/AddDiv.js");

var _AddDiv2 = _interopRequireDefault(_AddDiv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 
PfAboutSchool.propTypes = {};

// 

// 
function PfAboutSchool(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            { className: 'PfAbout_title' },
            'High school'
        ),
        _react2.default.createElement(
            'div',
            { className: 'PfAbout_add' },
            _react2.default.createElement(
                _AddDiv2.default,
                null,
                'Add a high school'
            )
        )
    );
}

exports.default = PfAboutSchool;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/work_edu/university/_main/PfAboutuniversity.js":
/*!******************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/work_edu/university/_main/PfAboutuniversity.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AddDiv = __webpack_require__(/*! ../../../../../../../../component/some_div/add_div/AddDiv */ "./src/component/some_div/add_div/AddDiv.js");

var _AddDiv2 = _interopRequireDefault(_AddDiv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 
PfAboutUniversity.propTypes = {};

// 

// 
function PfAboutUniversity(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            { className: 'PfAbout_title' },
            'university'
        ),
        _react2.default.createElement(
            'div',
            { className: 'PfAbout_add' },
            _react2.default.createElement(
                _AddDiv2.default,
                null,
                'Add a university'
            )
        )
    );
}

exports.default = PfAboutUniversity;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/work_edu/work/_main/PfAboutWork.js":
/*!******************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/work_edu/work/_main/PfAboutWork.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AddDiv = __webpack_require__(/*! ../../../../../../../../component/some_div/add_div/AddDiv */ "./src/component/some_div/add_div/AddDiv.js");

var _AddDiv2 = _interopRequireDefault(_AddDiv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 
PfAboutWork.propTypes = {};

// 

// 
function PfAboutWork(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            { className: 'PfAbout_title' },
            'Work'
        ),
        _react2.default.createElement(
            'div',
            { className: 'PfAbout_add' },
            _react2.default.createElement(
                _AddDiv2.default,
                null,
                'Add a workplace'
            )
        )
    );
}

exports.default = PfAboutWork;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/some_div/add_div/AddDiv.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/some_div/add_div/AddDiv.scss ***!
  \*************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".AddDiv {\n  color: var(--blue);\n}\n.AddDiv:hover {\n  text-decoration: 1px solid underline;\n}\n.AddDiv .IconDiv_left {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  border: 1px solid var(--blue);\n  transform: rotate(45deg);\n}\n.AddDiv .IconsArrow_close {\n  stroke: var(--blue);\n}", "",{"version":3,"sources":["webpack://./src/component/some_div/add_div/AddDiv.scss"],"names":[],"mappings":"AACA;EACI,kBAAA;AAAJ;AAEI;EACI,oCAAA;AAAR;AAGI;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EAEA,aAAA;EACA,cAAA;EACA,kBAAA;EACA,6BAAA;EAEA,wBAAA;AAHR;AAMI;EACI,mBAAA;AAJR","sourcesContent":["\r\n.AddDiv{\r\n    color: var(--blue);\r\n\r\n    &:hover{\r\n        text-decoration: 1px solid underline;\r\n    }\r\n\r\n    .IconDiv_left{\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n\r\n        width: 1.5rem;\r\n        height: 1.5rem;\r\n        border-radius: 50%;\r\n        border: 1px solid var(--blue);\r\n\r\n        transform: rotate(45deg);\r\n    }\r\n\r\n    .IconsArrow_close{\r\n        stroke: var(--blue);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/component/some_div/add_div/AddDiv.scss":
/*!****************************************************!*\
  !*** ./src/component/some_div/add_div/AddDiv.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_AddDiv_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./AddDiv.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/some_div/add_div/AddDiv.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_AddDiv_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_AddDiv_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_user_profile_user_pages_about_right_work_edu__main_PfAboutWorkEdu_js.js.map