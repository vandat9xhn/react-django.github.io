(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_component__screen_components_frame_blur_ScreenBlur_js-src_component_actions_hold_pc_Actio-abb0f1"],{

/***/ "./src/component/_screen/components/frame/blur/ScreenBlur.js":
/*!*******************************************************************!*\
  !*** ./src/component/_screen/components/frame/blur/ScreenBlur.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _useMakeBodyHidden = __webpack_require__(/*! ../../../../../_hooks/useMakeBodyHidden */ "./src/_hooks/useMakeBodyHidden.js");

var _ScreenBlurFetching = __webpack_require__(/*! ../../../../_screen_once/fetching/ScreenBlurFetching */ "./src/component/_screen_once/fetching/ScreenBlurFetching.js");

var _ScreenBlurFetching2 = _interopRequireDefault(_ScreenBlurFetching);

__webpack_require__(/*! ./ScreenBlur.scss */ "./src/component/_screen/components/frame/blur/ScreenBlur.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
ScreenBlur.propTypes = {
    closeScreen: _propTypes2.default.func,
    children: _propTypes2.default.element,

    use_body_hidden: _propTypes2.default.bool,
    screen_center: _propTypes2.default.bool,
    waiting: _propTypes2.default.bool,
    use_scale: _propTypes2.default.bool,
    FetchingComponent: _propTypes2.default.func
};
//

//


ScreenBlur.defaultProps = {
    use_body_hidden: false,
    screen_center: false,
    waiting: false,
    use_scale: false
};

//
function ScreenBlur(_ref) {
    var closeScreen = _ref.closeScreen,
        children = _ref.children,
        screen_center = _ref.screen_center,
        waiting = _ref.waiting,
        use_body_hidden = _ref.use_body_hidden,
        use_scale = _ref.use_scale,
        FetchingComponent = _ref.FetchingComponent;

    //
    (0, _useMakeBodyHidden.useMakeBodyHidden)({
        hidden_app: use_body_hidden
        // blur_header: true,
    });

    //
    return _react2.default.createElement(
        'div',
        {
            className: 'ScreenBlur ' + (screen_center ? 'ScreenBlur_center display-flex-center' : '')
        },
        _react2.default.createElement(
            'div',
            { className: '' + (waiting ? 'width-0 height-0' : 'App_Form') },
            _react2.default.createElement(
                'div',
                {
                    className: 'ScreenBlur_contain bg-primary brs-5px-md box-shadow-fb ' + (waiting ? 'ScreenBlur_contain-waiting' : '') + ' ' + (use_scale ? 'ScreenBlur_contain-scale' : '') + ' ' + (screen_center ? '' : 'ScreenBlur_contain-normal')
                },
                children
            )
        ),
        _react2.default.createElement(
            'div',
            {
                className: 'ScreenBlur_waiting pos-fixed-100v ' + (waiting ? '' : 'display-none')
            },
            _react2.default.createElement(_ScreenBlurFetching2.default, { FetchingComponent: FetchingComponent })
        )
    );
}

exports.default = ScreenBlur;

/***/ }),

/***/ "./src/component/actions_hold/pc/ActionsHoldPc.js":
/*!********************************************************!*\
  !*** ./src/component/actions_hold/pc/ActionsHoldPc.js ***!
  \********************************************************/
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

var _useHold3 = __webpack_require__(/*! ../../../_hooks/useHold */ "./src/_hooks/useHold.js");

var _ActionsPc = __webpack_require__(/*! ../../actions/pc/_main/ActionsPc */ "./src/component/actions/pc/_main/ActionsPc.js");

var _ActionsPc2 = _interopRequireDefault(_ActionsPc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
ActionsHoldPc.propTypes = {};

//
function ActionsHoldPc(_ref) {
    var title_action = _ref.title_action,
        class_action_contain = _ref.class_action_contain,
        children = _ref.children,
        scroll_elm = _ref.scroll_elm,
        x_always = _ref.x_always,
        transform_x_more = _ref.transform_x_more,
        y_always = _ref.y_always,
        transform_y_more = _ref.transform_y_more,
        _ref$time_hold = _ref.time_hold,
        time_hold = _ref$time_hold === undefined ? 500 : _ref$time_hold,
        _ref$time_leave = _ref.time_leave,
        time_leave = _ref$time_leave === undefined ? 800 : _ref$time_leave,
        force_close = _ref.force_close,
        use_caret = _ref.use_caret,
        callbackOpen = _ref.callbackOpen,
        callbackClose = _ref.callbackClose;

    //
    var _useState = (0, _react.useState)(0),
        _useState2 = _slicedToArray(_useState, 2),
        show_count = _useState2[0],
        setShowCount = _useState2[1];

    //


    var _useHold = (0, _useHold3.useHold)({
        time: time_hold
    }),
        StartHoldEnter = _useHold.StartHold,
        StopHoldEnter = _useHold.StopHold;

    var _useHold2 = (0, _useHold3.useHold)({
        time: time_leave
    }),
        StartHoldLeave = _useHold2.StartHold,
        StopHoldLeave = _useHold2.StopHold;

    //


    (0, _react.useEffect)(function () {
        StopHoldEnter();
        setShowCount(0);
    }, [force_close]);

    // -----

    //
    function handleChangeShowCount() {
        var is_up = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        setShowCount(function (show_count) {
            var new_show_count = show_count + (is_up ? 1 : -1);

            return new_show_count <= 0 ? 0 : 1;
        });
    }

    // ------

    //
    function handleMouseEnter() {
        StopHoldLeave();

        StartHoldEnter(function () {
            handleChangeShowCount(true);
        });
    }

    //
    function handleMouseLeave() {
        StopHoldEnter();

        StartHoldLeave(function () {
            handleChangeShowCount(false);
        });
    }

    //
    return _react2.default.createElement(
        _ActionsPc2.default,
        {
            title_action: _react2.default.createElement(
                'div',
                {
                    className: 'ActionsHoldPc_title display-inherit cursor-pointer hv-underline',
                    onMouseEnter: handleMouseEnter,
                    onMouseLeave: handleMouseLeave
                },
                title_action
            ),
            class_action_contain: class_action_contain,
            use_own_title: true,
            is_show: show_count > 0
            //
            , scroll_elm: scroll_elm
            //
            , x_always: x_always,
            transform_x_more: transform_x_more,
            y_always: y_always,
            transform_y_more: transform_y_more
            // 
            , use_caret: use_caret
            //
            // toggleShow={toggleShow}
            , callbackOpen: callbackOpen,
            callbackClose: callbackClose
        },
        _react2.default.createElement(
            'div',
            {
                className: 'ActionsHoldPc_contain',
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave
            },
            children
        )
    );
}

exports.default = ActionsHoldPc;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/_screen/components/frame/blur/ScreenBlur.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/_screen/components/frame/blur/ScreenBlur.scss ***!
  \******************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".ScreenBlur {\n  min-height: 100vh;\n  padding: 5rem 0;\n}\n\n.ScreenBlur_center {\n  padding: 0;\n}\n\n.ScreenBlur_contain {\n  transition: all 500ms ease;\n}\n\n.ScreenBlur_contain-waiting {\n  transform: scale(0);\n}\n\n.ScreenBlur_contain-scale {\n  transform: scale(0);\n  animation: screen-contain-scale 500ms ease forwards;\n}\n\n.ScreenBlur_waiting .ScreenBlurFetching {\n  background-color: transparent;\n}\n\n.ScreenBlur_body_contain {\n  min-height: 5rem;\n}\n\n/* ---------------- LIST ---------------- */\n.ScreenBlur_list {\n  margin: 0.5rem 0 0 0;\n  padding-left: 1.5rem;\n  list-style-type: circle;\n}\n\n.ScreenBlur_item {\n  margin-bottom: 0.5rem;\n}\n.ScreenBlur_item::marker {\n  font-weight: 500;\n}\n\n.ScreenBlurItem {\n  padding: 0.25rem;\n}\n\n.ScreenBlurItem_time {\n  font-size: 12px;\n  font-style: italic;\n  font-weight: bold;\n}\n\n@keyframes screen-contain-scale {\n  to {\n    transform: scale(1);\n  }\n}\n@media (max-width: 400px) {\n  .ScreenBlur {\n    padding: 0;\n  }\n\n  .ScreenBlur_contain-normal {\n    min-height: 100vh;\n  }\n}", "",{"version":3,"sources":["webpack://./src/component/_screen/components/frame/blur/ScreenBlur.scss"],"names":[],"mappings":"AAAA;EACI,iBAAA;EACA,eAAA;AACJ;;AACA;EACI,UAAA;AAEJ;;AACA;EACI,0BAAA;AAEJ;;AAAA;EACI,mBAAA;AAGJ;;AADA;EACI,mBAAA;EACA,mDAAA;AAIJ;;AACI;EACI,6BAAA;AAER;;AAGA;EACI,gBAAA;AAAJ;;AAGA,2CAAA;AAEA;EACI,oBAAA;EACA,oBAAA;EACA,uBAAA;AADJ;;AAIA;EACI,qBAAA;AADJ;AAEI;EACI,gBAAA;AAAR;;AAIA;EACI,gBAAA;AADJ;;AAIA;EACI,eAAA;EACA,kBAAA;EACA,iBAAA;AADJ;;AAKA;EACI;IACI,mBAAA;EAFN;AACF;AAMA;EACI;IACI,UAAA;EAJN;;EAOE;IACI,iBAAA;EAJN;AACF","sourcesContent":[".ScreenBlur {\r\n    min-height: 100vh;\r\n    padding: 5rem 0;\r\n}\r\n.ScreenBlur_center {\r\n    padding: 0;\r\n}\r\n\r\n.ScreenBlur_contain {\r\n    transition: all 500ms ease;\r\n}\r\n.ScreenBlur_contain-waiting {\r\n    transform: scale(0);\r\n}\r\n.ScreenBlur_contain-scale {\r\n    transform: scale(0);\r\n    animation: screen-contain-scale 500ms ease forwards;\r\n}\r\n\r\n//\r\n.ScreenBlur_waiting {\r\n    .ScreenBlurFetching {\r\n        background-color: transparent;\r\n    }\r\n}\r\n\r\n// .\r\n.ScreenBlur_body_contain {\r\n    min-height: 5rem;\r\n}\r\n\r\n/* ---------------- LIST ---------------- */\r\n\r\n.ScreenBlur_list {\r\n    margin: 0.5rem 0 0 0;\r\n    padding-left: 1.5rem;\r\n    list-style-type: circle;\r\n}\r\n// .\r\n.ScreenBlur_item {\r\n    margin-bottom: 0.5rem;\r\n    &::marker {\r\n        font-weight: 500;\r\n    }\r\n}\r\n\r\n.ScreenBlurItem {\r\n    padding: 0.25rem;\r\n}\r\n\r\n.ScreenBlurItem_time {\r\n    font-size: 12px;\r\n    font-style: italic;\r\n    font-weight: bold;\r\n}\r\n\r\n//\r\n@keyframes screen-contain-scale {\r\n    to {\r\n        transform: scale(1);\r\n    }\r\n}\r\n\r\n//\r\n@media (max-width: 400px) {\r\n    .ScreenBlur {\r\n        padding: 0;\r\n    }\r\n    \r\n    .ScreenBlur_contain-normal {\r\n        min-height: 100vh;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/component/_screen/components/frame/blur/ScreenBlur.scss":
/*!*********************************************************************!*\
  !*** ./src/component/_screen/components/frame/blur/ScreenBlur.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ScreenBlur_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./ScreenBlur.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/_screen/components/frame/blur/ScreenBlur.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ScreenBlur_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ScreenBlur_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_component__screen_components_frame_blur_ScreenBlur_js-src_component_actions_hold_pc_Actio-abb0f1.js.map