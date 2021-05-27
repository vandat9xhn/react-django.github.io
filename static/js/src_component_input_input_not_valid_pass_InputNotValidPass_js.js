(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_component_input_input_not_valid_pass_InputNotValidPass_js"],{

/***/ "./src/_icons_svg/icons_eye/IconsEye.js":
/*!**********************************************!*\
  !*** ./src/_icons_svg/icons_eye/IconsEye.js ***!
  \**********************************************/
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

// import './IconsEye.scss';

//
IconsEye.propTypes = {
    size_icon: _propTypes2.default.string,
    color: _propTypes2.default.string,
    x: _propTypes2.default.number,
    y: _propTypes2.default.number,
    close_eye: _propTypes2.default.bool
};

IconsEye.defaultProps = {
    x: 0,
    y: 0,
    size_icon: '1.5rem',
    close_eye: true
};

/**
    IconsEye: (x, y)
        1. Eye show password: (200, 200)
*/
function IconsEye(props) {
    var size_icon = props.size_icon,
        x = props.x,
        y = props.y,
        close_eye = props.close_eye;

    return _react2.default.createElement(
        'svg',
        {
            className: 'IconsEye',
            height: size_icon,
            width: size_icon,
            viewBox: x + ' ' + y + ' 200 200',
            stroke: 'var(--black-brown)',
            fill: 'var(--black-brown)',
            strokeLinecap: 'round'
        },
        _react2.default.createElement('path', {
            d: 'M200,300 Q300,200 400,300 Q300,400 200,300',
            fill: 'none',
            strokeWidth: '10'
        }),
        _react2.default.createElement('circle', {
            className: close_eye ? 'display-none' : '',
            cx: '300',
            cy: '300',
            r: '30'
        }),
        _react2.default.createElement(
            'g',
            { className: close_eye ? '' : 'display-none' },
            _react2.default.createElement('path', { d: 'M200,300 Q300,350 400,300', fill: 'none', strokeWidth: '20' }),
            _react2.default.createElement('line', { x1: '210', y1: '210', x2: '390', y2: '390', strokeWidth: '30' })
        )
    );
};

exports.default = IconsEye;

/***/ }),

/***/ "./src/component/input/input_not_valid/InputNotValid.js":
/*!**************************************************************!*\
  !*** ./src/component/input/input_not_valid/InputNotValid.js ***!
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

__webpack_require__(/*! ./InputNotValid.scss */ "./src/component/input/input_not_valid/InputNotValid.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
InputNotValid.propTypes = {
    name: _propTypes2.default.string,
    type: _propTypes2.default.string,
    placeholder: _propTypes2.default.string,
    max_length: _propTypes2.default.number,
    //
    value: _propTypes2.default.string,
    handleChange: _propTypes2.default.func
};
//


InputNotValid.defaultProps = {
    type: 'text',
    placeholder: 'Placeholder',
    max_length: 100

    // 
};function InputNotValid(props) {
    var name = props.name,
        value = props.value,
        type = props.type,
        placeholder = props.placeholder,
        max_length = props.max_length,
        handleChange = props.handleChange;


    return _react2.default.createElement(
        'div',
        {
            className: 'InputNotValid ' + (value !== '' ? 'InputNotValid_text' : '')
        },
        _react2.default.createElement('input', {
            className: 'InputNotValid_input brs-5px',
            name: name,
            type: type,
            maxLength: max_length
            //
            , value: value,
            onChange: handleChange
        }),
        _react2.default.createElement(
            'div',
            { className: 'InputNotValid_placeholder' },
            placeholder
        )
    );
}

exports.default = InputNotValid;

/***/ }),

/***/ "./src/component/input/input_not_valid_pass/InputNotValidPass.js":
/*!***********************************************************************!*\
  !*** ./src/component/input/input_not_valid_pass/InputNotValidPass.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
//

//

//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconsEye = __webpack_require__(/*! ../../../_icons_svg/icons_eye/IconsEye */ "./src/_icons_svg/icons_eye/IconsEye.js");

var _IconsEye2 = _interopRequireDefault(_IconsEye);

var _InputNotValid = __webpack_require__(/*! ../input_not_valid/InputNotValid */ "./src/component/input/input_not_valid/InputNotValid.js");

var _InputNotValid2 = _interopRequireDefault(_InputNotValid);

__webpack_require__(/*! ./InputNotValidPass.scss */ "./src/component/input/input_not_valid_pass/InputNotValidPass.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
InputNotValidPass.propTypes = {
    password: _propTypes2.default.string,
    name: _propTypes2.default.string,
    placeholder: _propTypes2.default.string,
    max_length: _propTypes2.default.number,

    handleChange: _propTypes2.default.func
};

InputNotValidPass.defaultProps = {
    placeholder: 'Password',
    max_length: 100

    //
};function InputNotValidPass(props) {
    var password = props.password,
        name = props.name,
        placeholder = props.placeholder,
        max_length = props.max_length,
        handleChange = props.handleChange;

    // 

    var _useState = (0, _react.useState)('password'),
        _useState2 = _slicedToArray(_useState, 2),
        type = _useState2[0],
        setType = _useState2[1];

    //


    function toggleType() {
        setType(type == 'password' ? 'text' : 'password');
    }

    // 
    return _react2.default.createElement(
        'div',
        { className: 'InputNotValidPass' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_InputNotValid2.default, {
                name: name,
                type: type,
                placeholder: placeholder,
                max_length: max_length
                //
                , value: password,
                handleChange: handleChange
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'InputNotValidPass_eye' },
            _react2.default.createElement(
                'div',
                {
                    className: 'InputNotValidPass_eye-contain hv-opacity',
                    onClick: toggleType
                },
                _react2.default.createElement(_IconsEye2.default, { x: 200, y: 200, close_eye: type == 'password' })
            )
        )
    );
}

exports.default = InputNotValidPass;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/input/input_not_valid/InputNotValid.scss":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/input/input_not_valid/InputNotValid.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".InputNotValid_text .InputNotValid_placeholder, .InputNotValid_input:focus + .InputNotValid_placeholder {\n  top: 0;\n  line-height: 12px;\n  padding: 0 0.25rem;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.InputNotValid {\n  position: relative;\n}\n\n.InputNotValid_placeholder {\n  position: absolute;\n  top: 50%;\n  left: 10px;\n  transform: translateY(-50%);\n  transition: top 200ms, font-size 200ms;\n  background-color: var(--color-react);\n  font-size: 16px;\n  color: var(--md-color-secondary);\n  pointer-events: none;\n}\n\n.InputNotValid_input {\n  width: 100%;\n  padding: 0.8rem;\n  background-color: transparent;\n  border: 1px solid var(--md-color-secondary);\n}\n.InputNotValid_input:focus {\n  border: 1px solid var(--blue);\n  outline: none;\n}\n.InputNotValid_input:focus + .InputNotValid_placeholder {\n  color: var(--blue);\n}", "",{"version":3,"sources":["webpack://./src/component/input/input_not_valid/InputNotValid.scss"],"names":[],"mappings":"AACA;EACI,MAAA;EAEA,iBAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;AADJ;;AAKA;EACI,kBAAA;AAFJ;;AAMA;EACI,kBAAA;EACA,QAAA;EACA,UAAA;EACA,2BAAA;EACA,sCAAA;EAEA,oCAAA;EACA,eAAA;EACA,gCAAA;EAEA,oBAAA;AALJ;;AASA;EACI,WAAA;EACA,eAAA;EACA,6BAAA;EACA,2CAAA;AANJ;AAOI;EACI,6BAAA;EACA,aAAA;AALR;AAOQ;EAEI,kBAAA;AANZ","sourcesContent":["//\r\n%placeholder-move{\r\n    top: 0;\r\n\r\n    line-height: 12px;\r\n    padding: 0 0.25rem;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n}\r\n\r\n//\r\n.InputNotValid{\r\n    position: relative;\r\n}\r\n\r\n//\r\n.InputNotValid_placeholder{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 10px;\r\n    transform: translateY(-50%);\r\n    transition: top 200ms, font-size 200ms;\r\n\r\n    background-color: var(--color-react);\r\n    font-size: 16px;\r\n    color: var(--md-color-secondary);\r\n\r\n    pointer-events: none;\r\n}\r\n\r\n//\r\n.InputNotValid_input{\r\n    width: 100%;\r\n    padding: 0.8rem;\r\n    background-color: transparent;\r\n    border: 1px solid var(--md-color-secondary);\r\n    &:focus{\r\n        border: 1px solid var(--blue);\r\n        outline: none;\r\n\r\n        &+.InputNotValid_placeholder{\r\n            @extend %placeholder-move;\r\n            color: var(--blue);\r\n        }\r\n    }\r\n}\r\n\r\n//\r\n.InputNotValid_text{\r\n    .InputNotValid_placeholder{\r\n        @extend %placeholder-move;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/input/input_not_valid_pass/InputNotValidPass.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/input/input_not_valid_pass/InputNotValidPass.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".InputNotValidPass {\n  position: relative;\n}\n\n.InputNotValidPass_eye {\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  transform: translateY(-50%);\n}\n\n.InputNotValidPass_eye-contain {\n  padding: 0;\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/component/input/input_not_valid_pass/InputNotValidPass.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;AACJ;;AAGA;EACI,kBAAA;EACA,QAAA;EACA,WAAA;EACA,2BAAA;AAAJ;;AAGA;EACI,UAAA;EACA,eAAA;AAAJ","sourcesContent":[".InputNotValidPass{\r\n    position: relative;\r\n}\r\n\r\n//\r\n.InputNotValidPass_eye{\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 10px;\r\n    transform: translateY(-50%);\r\n}\r\n//\r\n.InputNotValidPass_eye-contain{\r\n    padding: 0;\r\n    cursor: pointer;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/component/input/input_not_valid/InputNotValid.scss":
/*!****************************************************************!*\
  !*** ./src/component/input/input_not_valid/InputNotValid.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_InputNotValid_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./InputNotValid.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/input/input_not_valid/InputNotValid.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_InputNotValid_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_InputNotValid_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/input/input_not_valid_pass/InputNotValidPass.scss":
/*!*************************************************************************!*\
  !*** ./src/component/input/input_not_valid_pass/InputNotValidPass.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_InputNotValidPass_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./InputNotValidPass.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/input/input_not_valid_pass/InputNotValidPass.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_InputNotValidPass_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_InputNotValidPass_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_component_input_input_not_valid_pass_InputNotValidPass_js.js.map