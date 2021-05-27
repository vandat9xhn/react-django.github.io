(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src__custom_hooks_UseForceUpdate_js-src_component_actions_common_actions_delete_ActionDelete_-20b5cc"],{

/***/ "./src/_custom_hooks/UseForceUpdate.js":
/*!*********************************************!*\
  !*** ./src/_custom_hooks/UseForceUpdate.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useForceUpdate = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

// 
var useForceUpdate = exports.useForceUpdate = function useForceUpdate() {
    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        force_update = _useState2[0],
        setForceUpdate = _useState2[1];
    // 


    function forceUpdate() {
        setForceUpdate(!force_update);
    }

    return forceUpdate;
};

/***/ }),

/***/ "./src/_icons_svg/icon_update/IconUpdate.js":
/*!**************************************************!*\
  !*** ./src/_icons_svg/icon_update/IconUpdate.js ***!
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 

// 
IconUpdate.propTypes = {
    size_icon: _propTypes2.default.string,
    x: _propTypes2.default.number,
    y: _propTypes2.default.number,
    stroke: _propTypes2.default.string
};

IconUpdate.defaultProps = {
    size_icon: '1rem',
    x: 0,
    y: 0,
    stroke: 'var(--md-color)'

    // 
};function IconUpdate(props) {
    var size_icon = props.size_icon,
        x = props.x,
        y = props.y,
        stroke = props.stroke;


    return _react2.default.createElement(
        'svg',
        {
            width: size_icon,
            height: size_icon,
            viewBox: x + ' ' + y + ' 200 200'
        },
        _react2.default.createElement('path', {
            d: 'M25,75 A65,50 0 0 1 170,75 M185,25 175,75 125,60\r M25,125 A65,50 0 0 0 170,125 M10,175 20,125 70,140',
            fill: 'none',
            stroke: stroke,
            strokeWidth: '20',
            strokeLinejoin: 'round',
            strokeLinecap: 'round'
        })
    );
}

exports.default = IconUpdate;

/***/ }),

/***/ "./src/component/actions/common_actions/delete/ActionDelete.js":
/*!*********************************************************************!*\
  !*** ./src/component/actions/common_actions/delete/ActionDelete.js ***!
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

var _IconsAction = __webpack_require__(/*! ../../../../_icons_svg/icons_action/IconsAction */ "./src/_icons_svg/icons_action/IconsAction.js");

var _IconsAction2 = _interopRequireDefault(_IconsAction);

var _IconDiv = __webpack_require__(/*! ../../../some_div/icon_div/IconDiv */ "./src/component/some_div/icon_div/IconDiv.js");

var _IconDiv2 = _interopRequireDefault(_IconDiv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
ActionDelete.propTypes = {
    title: _propTypes2.default.string,
    handleDelete: _propTypes2.default.func
};

ActionDelete.defaultProps = {
    title: 'Delete'
};

//
function ActionDelete(props) {
    var handleDelete = props.handleDelete,
        title = props.title;
    //

    return _react2.default.createElement(
        'div',
        { className: 'action-item', onClick: handleDelete, title: 'Delete' },
        _react2.default.createElement(
            _IconDiv2.default,
            { Icon: _IconsAction2.default },
            title
        )
    );
}

exports.default = ActionDelete;

/***/ }),

/***/ "./src/component/actions/common_actions/history/ActionHistory.js":
/*!***********************************************************************!*\
  !*** ./src/component/actions/common_actions/history/ActionHistory.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconsAction = __webpack_require__(/*! ../../../../_icons_svg/icons_action/IconsAction */ "./src/_icons_svg/icons_action/IconsAction.js");

var _IconsAction2 = _interopRequireDefault(_IconsAction);

var _IconDiv = __webpack_require__(/*! ../../../some_div/icon_div/IconDiv */ "./src/component/some_div/icon_div/IconDiv.js");

var _IconDiv2 = _interopRequireDefault(_IconDiv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
ActionHistory.propTypes = {
    title: _propTypes2.default.string,
    handleOpenHistory: _propTypes2.default.func
};

ActionHistory.defaultProps = {
    title: 'History'
};

//
function ActionHistory(props) {
    var handleOpenHistory = props.handleOpenHistory,
        title = props.title;
    //

    return _react2.default.createElement(
        'div',
        { className: 'action-item', onClick: handleOpenHistory, title: 'History' },
        _react2.default.createElement(
            _IconDiv2.default,
            { Icon: _IconsAction2.default, y: 400 },
            title
        )
    );
}

exports.default = ActionHistory;

/***/ }),

/***/ "./src/component/actions/common_actions/report/ActionReport.js":
/*!*********************************************************************!*\
  !*** ./src/component/actions/common_actions/report/ActionReport.js ***!
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

var _IconsAction = __webpack_require__(/*! ../../../../_icons_svg/icons_action/IconsAction */ "./src/_icons_svg/icons_action/IconsAction.js");

var _IconsAction2 = _interopRequireDefault(_IconsAction);

var _IconDiv = __webpack_require__(/*! ../../../some_div/icon_div/IconDiv */ "./src/component/some_div/icon_div/IconDiv.js");

var _IconDiv2 = _interopRequireDefault(_IconDiv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
ActionReport.propTypes = {
    title: _propTypes2.default.string,
    handleOpenReport: _propTypes2.default.func
};

ActionReport.defaultProps = {
    title: 'Report'
};

//
function ActionReport(props) {
    var handleOpenReport = props.handleOpenReport,
        title = props.title;
    //

    return _react2.default.createElement(
        'div',
        { className: 'action-item', onClick: handleOpenReport, title: 'Report' },
        _react2.default.createElement(
            _IconDiv2.default,
            { Icon: _IconsAction2.default, x: 400, y: 400 },
            title
        )
    );
}

exports.default = ActionReport;

/***/ }),

/***/ "./src/component/actions/common_actions/update/ActionUpdate.js":
/*!*********************************************************************!*\
  !*** ./src/component/actions/common_actions/update/ActionUpdate.js ***!
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

var _IconDiv = __webpack_require__(/*! ../../../some_div/icon_div/IconDiv */ "./src/component/some_div/icon_div/IconDiv.js");

var _IconDiv2 = _interopRequireDefault(_IconDiv);

var _IconUpdate = __webpack_require__(/*! ../../../../_icons_svg/icon_update/IconUpdate */ "./src/_icons_svg/icon_update/IconUpdate.js");

var _IconUpdate2 = _interopRequireDefault(_IconUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
ActionUpdate.propTypes = {
    title: _propTypes2.default.string,
    handleUpdate: _propTypes2.default.func
};

ActionUpdate.defaultProps = {
    title: 'Update'
};

//
function ActionUpdate(props) {
    var handleUpdate = props.handleUpdate,
        title = props.title;
    //

    return _react2.default.createElement(
        'div',
        { className: 'action-item', onClick: handleUpdate, title: 'Update' },
        _react2.default.createElement(
            _IconDiv2.default,
            { Icon: _IconUpdate2.default, size_icon: '0.85rem' },
            title
        )
    );
}

exports.default = ActionUpdate;

/***/ }),

/***/ "./src/component/button/button_ripple/ButtonRipple.js":
/*!************************************************************!*\
  !*** ./src/component/button/button_ripple/ButtonRipple.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ./ButtonRipple.scss */ "./src/component/button/button_ripple/ButtonRipple.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
ButtonRipple.propTypes = {
    type: _propTypes2.default.string,
    title: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    ripple_type: _propTypes2.default.string,

    children: _propTypes2.default.any,
    onClick: _propTypes2.default.func
};
//


ButtonRipple.defaultProps = {
    title: '',
    type: 'text',
    ripple_type: 'right',
    disabled: false
};

//
function ButtonRipple(props) {
    // ripple_type is one of ['right', 'left', 'center']
    var children = props.children,
        onClick = props.onClick,
        type = props.type,
        disabled = props.disabled,
        ripple_type = props.ripple_type,
        title = props.title;

    //

    return _react2.default.createElement(
        'button',
        {
            className: 'ButtonRipple label-field ' + (disabled ? 'opacity-5 pointer-events-none' : 'cursor-pointer'),
            type: type,
            title: title,
            disabled: disabled,
            onClick: onClick
        },
        _react2.default.createElement('div', {
            className: 'ButtonRipple_common ButtonRipple_' + ripple_type + ' ' + (disabled ? 'display-none' : '')
        }),
        children
    );
}

exports.default = ButtonRipple;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/button/button_ripple/ButtonRipple.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/button/button_ripple/ButtonRipple.scss ***!
  \***********************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/******** Button *******/\n.ButtonRipple {\n  position: relative;\n  height: 2.5rem;\n  background-color: var(--blue);\n  border-radius: 5px;\n  overflow: hidden;\n  color: whitesmoke;\n  /****** Button Ripple Common ******/\n  /****** Ripple type ******/\n}\n.ButtonRipple:hover {\n  opacity: 0.8;\n}\n.ButtonRipple:focus {\n  outline: none;\n}\n.ButtonRipple:active .ButtonRipple_common {\n  opacity: 1;\n  transition: 0s;\n}\n.ButtonRipple:active .ButtonRipple_center {\n  transform: translate(-50%, -50%) scale(0);\n}\n.ButtonRipple:active .ButtonRipple_right, .ButtonRipple:active .ButtonRipple_left {\n  width: 0%;\n}\n.ButtonRipple .ButtonRipple_common {\n  position: absolute;\n  width: 120%;\n  height: 100%;\n  background-color: white;\n  border-radius: 5px;\n  opacity: 0;\n  transition: all 0.3s;\n}\n.ButtonRipple .ButtonRipple_right {\n  top: 0;\n  left: 0;\n}\n.ButtonRipple .ButtonRipple_left {\n  top: 0;\n  right: 0;\n}\n.ButtonRipple .ButtonRipple_center {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(1);\n}", "",{"version":3,"sources":["webpack://./src/component/button/button_ripple/ButtonRipple.scss"],"names":[],"mappings":"AAEA,wBAAA;AACA;EACI,kBAAA;EACA,cAAA;EAEA,6BAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EAqBA,mCAAA;EAaA,0BAAA;AAlCJ;AAEI;EACI,YAbE;AAaV;AAEI;EACI,aAAA;AAAR;AAGQ;EACI,UAAA;EACA,cAAA;AADZ;AAGQ;EACI,yCAAA;AADZ;AAGQ;EACI,SAAA;AADZ;AAMI;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EAEA,uBAAA;EACA,kBAAA;EACA,UAAA;EAEA,oBAAA;AANR;AAUI;EACI,MAAA;EACA,OAAA;AARR;AAUI;EACI,MAAA;EACA,QAAA;AARR;AAUI;EACI,QAAA;EACA,SAAA;EACA,yCAAA;AARR","sourcesContent":["$opacity: 0.8;\r\n\r\n/******** Button *******/\r\n.ButtonRipple{\r\n    position: relative;\r\n    height: 2.5rem;\r\n\r\n    background-color: var(--blue);\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n    color: whitesmoke;\r\n\r\n    &:hover{\r\n        opacity: $opacity;\r\n    }\r\n    &:focus{\r\n        outline: none;\r\n    }\r\n    &:active{\r\n        .ButtonRipple_common{\r\n            opacity: 1;\r\n            transition: 0s;\r\n        }\r\n        .ButtonRipple_center{\r\n            transform: translate(-50%, -50%) scale(0);\r\n        }\r\n        .ButtonRipple_right, .ButtonRipple_left{\r\n            width: 0%;\r\n        }\r\n    }\r\n    \r\n    /****** Button Ripple Common ******/\r\n    .ButtonRipple_common{\r\n        position: absolute;\r\n        width: 120%;\r\n        height: 100%;\r\n    \r\n        background-color: white;\r\n        border-radius: 5px;\r\n        opacity: 0;\r\n    \r\n        transition: all 0.3s;\r\n    }\r\n    \r\n    /****** Ripple type ******/\r\n    .ButtonRipple_right{\r\n        top: 0;\r\n        left: 0;\r\n    }\r\n    .ButtonRipple_left{\r\n        top: 0;\r\n        right: 0;\r\n    }\r\n    .ButtonRipple_center{\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%) scale(1);\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/component/button/button_ripple/ButtonRipple.scss":
/*!**************************************************************!*\
  !*** ./src/component/button/button_ripple/ButtonRipple.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ButtonRipple_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./ButtonRipple.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/button/button_ripple/ButtonRipple.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ButtonRipple_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ButtonRipple_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src__custom_hooks_UseForceUpdate_js-src_component_actions_common_actions_delete_ActionDelete_-20b5cc.js.map