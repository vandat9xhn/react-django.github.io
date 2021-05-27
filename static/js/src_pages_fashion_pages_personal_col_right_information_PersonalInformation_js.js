(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_fashion_pages_personal_col_right_information_PersonalInformation_js"],{

/***/ "./src/pages/fashion/pages/personal/col_right/information/PersonalInformation.js":
/*!***************************************************************************************!*\
  !*** ./src/pages/fashion/pages/personal/col_right/information/PersonalInformation.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ./PersonalInformation.scss */ "./src/pages/fashion/pages/personal/col_right/information/PersonalInformation.scss");

var _SkeletonDiv = __webpack_require__(/*! ../../../../../../component/skeleton/skeleton_div/SkeletonDiv */ "./src/component/skeleton/skeleton_div/SkeletonDiv.js");

var _SkeletonDiv2 = _interopRequireDefault(_SkeletonDiv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var data_user_info = {
    name: 'My My',
    address: 'Vinh Phuc',
    phone: '0123456789',
    birth_day: '22-04-2001',
    mail: 'mymy@gmail.com'
    //
};PersonalInformation.propTypes = {};

//
function PersonalInformation(props) {
    var _useState = (0, _react.useState)({}),
        _useState2 = _slicedToArray(_useState, 2),
        user_info = _useState2[0],
        setUserInfo = _useState2[1];
    //


    var mounted = (0, _react.useRef)(true);
    //
    (0, _react.useEffect)(function () {
        setTimeout(function () {
            if (mounted.current) {
                var data = getDataInfo();
                setUserInfo(data);
            }
        }, 1000);

        return function () {
            mounted.current = false;
        };
    }, []);
    //
    function getDataInfo() {
        return data_user_info;
    }

    //
    var name = user_info.name,
        address = user_info.address,
        phone = user_info.phone,
        birth_day = user_info.birth_day,
        mail = user_info.mail;

    //

    return _react2.default.createElement(
        'div',
        { className: 'PersonalInformation' },
        _react2.default.createElement(
            'div',
            { className: 'PersonalInformation_contain' },
            _react2.default.createElement(
                'div',
                { className: 'PersonalInformation_title fashion_title' },
                'Personal information'
            ),
            _react2.default.createElement(
                'div',
                { className: name == undefined ? 'display-none' : '' },
                _react2.default.createElement(
                    'div',
                    { className: 'PersonalInformation_block fashion_padding' },
                    _react2.default.createElement(
                        'div',
                        { className: 'label-field' },
                        'Full name:'
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        name
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'PersonalInformation_block fashion_padding' },
                    _react2.default.createElement(
                        'div',
                        { className: 'label-field' },
                        'Address:'
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        address
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'PersonalInformation_block fashion_padding' },
                    _react2.default.createElement(
                        'div',
                        { className: 'label-field' },
                        'Birth Day:'
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        birth_day
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'PersonalInformation_block fashion_padding' },
                    _react2.default.createElement(
                        'div',
                        { className: 'label-field' },
                        'Phone:'
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        phone
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'PersonalInformation_block fashion_padding' },
                    _react2.default.createElement(
                        'div',
                        { className: 'label-field' },
                        'Mail:'
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        mail
                    )
                )
            ),
            name == undefined && _react2.default.createElement(
                'div',
                { className: 'PersonalInformation_skeleton' },
                _react2.default.createElement(_SkeletonDiv2.default, { num: 10 })
            )
        )
    );
}

exports.default = PersonalInformation;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/fashion/pages/personal/col_right/information/PersonalInformation.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/fashion/pages/personal/col_right/information/PersonalInformation.scss ***!
  \**************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PersonalInformation_title {\n  border-bottom: 1px solid var(--md-bg-blur);\n  text-align: center;\n}\n\n.PersonalInformation_skeleton .SkeletonDiv_div {\n  margin: 1rem 0.5rem;\n}\n.PersonalInformation_skeleton .SkeletonDiv_div:nth-child(2n+1) {\n  width: 8rem;\n}\n.PersonalInformation_skeleton .SkeletonDiv_div:nth-child(2n) {\n  width: 12rem;\n  margin-bottom: 1.5rem;\n}\n.PersonalInformation_skeleton .SkeletonDiv_div:not(:nth-child(-1)) {\n  max-width: 100vw;\n}", "",{"version":3,"sources":["webpack://./src/pages/fashion/pages/personal/col_right/information/PersonalInformation.scss"],"names":[],"mappings":"AAEA;EACI,0CAAA;EACA,kBAAA;AADJ;;AAWI;EACI,mBAAA;AARR;AASQ;EACI,WAAA;AAPZ;AASQ;EACI,YAAA;EACA,qBAAA;AAPZ;AASQ;EACI,gBAAA;AAPZ","sourcesContent":["\r\n//\r\n.PersonalInformation_title{\r\n    border-bottom: 1px solid var(--md-bg-blur);\r\n    text-align: center;\r\n}\r\n\r\n//\r\n// .PersonalInformation_block{\r\n//     margin: 0.5rem;\r\n// }\r\n\r\n//\r\n.PersonalInformation_skeleton{\r\n    .SkeletonDiv_div{\r\n        margin: 1rem 0.5rem;\r\n        &:nth-child(2n + 1){\r\n            width: 8rem;\r\n        }\r\n        &:nth-child(2n){\r\n            width: 12rem;\r\n            margin-bottom: 1.5rem;\r\n        }\r\n        &:not(:nth-child(-1)){\r\n            max-width: 100vw;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/fashion/pages/personal/col_right/information/PersonalInformation.scss":
/*!*****************************************************************************************!*\
  !*** ./src/pages/fashion/pages/personal/col_right/information/PersonalInformation.scss ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PersonalInformation_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./PersonalInformation.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/fashion/pages/personal/col_right/information/PersonalInformation.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PersonalInformation_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PersonalInformation_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_fashion_pages_personal_col_right_information_PersonalInformation_js.js.map