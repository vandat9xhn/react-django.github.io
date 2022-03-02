(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src__hooks_useMouseMoveX_js-src__some_function_AppTouchNoneTemp_js-src__some_function_FormatN-2f92ec"],{

/***/ "./src/_hooks/useMouseDownToWindowUp.js":
/*!**********************************************!*\
  !*** ./src/_hooks/useMouseDownToWindowUp.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useMouseDownToWindowUp = undefined;

var _reactCommonsTs = __webpack_require__(/*! react-commons-ts */ "./node_modules/react-commons-ts/dist/index.modern.js");

//
exports.useMouseDownToWindowUp = _reactCommonsTs.useMouseDownToWindowUp;

/***/ }),

/***/ "./src/_hooks/useMouseMoveX.js":
/*!*************************************!*\
  !*** ./src/_hooks/useMouseMoveX.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useMouseMoveX = useMouseMoveX;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _getClientXY3 = __webpack_require__(/*! ../_some_function/getClientXY */ "./src/_some_function/getClientXY.js");

var _useMouseDownToWindowUp = __webpack_require__(/*! ./useMouseDownToWindowUp */ "./src/_hooks/useMouseDownToWindowUp.js");

//

//
function useMouseMoveX(_ref) {
    var _ref$handleMouseDown = _ref.handleMouseDown,
        handleMouseDown = _ref$handleMouseDown === undefined ? function () {} : _ref$handleMouseDown,
        _ref$handleMouseMove = _ref.handleMouseMove,
        handleMouseMove = _ref$handleMouseMove === undefined ? function () {} : _ref$handleMouseMove,
        _ref$handleMouseEnd = _ref.handleMouseEnd,
        handleMouseEnd = _ref$handleMouseEnd === undefined ? function () {} : _ref$handleMouseEnd;

    //
    var is_run = (0, _react.useRef)(false);
    var first_orientation = (0, _react.useRef)('');

    var client_x = (0, _react.useRef)(0);
    var client_y = (0, _react.useRef)(0);

    //

    var _useMouseDownToWindow = (0, _useMouseDownToWindowUp.useMouseDownToWindowUp)({
        handleDown: handleMouseDown,
        handleMove: handleMove,
        handleEnd: handleEnd
    }),
        onDown = _useMouseDownToWindow.onDown;

    // -----

    //


    function handleStart(e) {
        e.stopPropagation();

        is_run.current = true;

        var _getClientXY = (0, _getClientXY3.getClientXY)(e),
            new_client_x = _getClientXY.client_x,
            new_client_y = _getClientXY.client_y;

        client_x.current = new_client_x;
        client_y.current = new_client_y;

        onDown(e);
    }

    //
    function handleMove(e) {
        if (!is_run.current) {
            return;
        }

        var _getClientXY2 = (0, _getClientXY3.getClientXY)(e),
            new_client_x = _getClientXY2.client_x,
            new_client_y = _getClientXY2.client_y;

        var client_change_x = new_client_x - client_x.current;
        var client_change_y = new_client_y - client_y.current;

        if (first_orientation.current == '') {
            first_orientation.current = Math.abs(client_change_x) >= Math.abs(client_change_y) ? 'x' : 'y';
        }

        handleMouseMove(client_change_x);

        client_x.current = new_client_x;
        client_y.current = new_client_y;
    }

    //
    function handleEnd() {
        is_run.current = false;
        handleMouseEnd();
        first_orientation.current = '';
    }

    //
    return {
        is_run: is_run,
        client_x: client_x,
        client_y: client_y,
        first_orientation: first_orientation,

        handleStart: handleStart,
        handleMove: handleMove,
        handleEnd: handleEnd
    };
}
//

/***/ }),

/***/ "./src/_hooks/useObserveVidPic.js":
/*!****************************************!*\
  !*** ./src/_hooks/useObserveVidPic.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useObserveVidPic = useObserveVidPic;

var _reactObserverTs = __webpack_require__(/*! react-observer-ts */ "./node_modules/react-observer-ts/dist/index.modern.js");

//
function useObserveVidPic(ref_elm) {
    //
    return (0, _reactObserverTs.useObserveVidPic)({
        ref_elm: ref_elm,
        class_hide: 'vid_pic-observe opacity-0',
        class_show: 'vid_pic-observe opacity-1'
    });
}

/***/ }),

/***/ "./src/_icons_svg/icons_star/IconsStar.js":
/*!************************************************!*\
  !*** ./src/_icons_svg/icons_star/IconsStar.js ***!
  \************************************************/
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
IconsStar.propTypes = {
    size_icon: _propTypes2.default.string,
    color: _propTypes2.default.string
};
IconsStar.defaultProps = {
    size_icon: '1rem',
    color: 'var(--gold)'
};

//
function IconsStar(_ref) {
    var size_icon = _ref.size_icon,
        color = _ref.color;

    //
    return _react2.default.createElement(
        'svg',
        {
            className: 'IconsStar',
            width: size_icon,
            height: size_icon,
            viewBox: '0 0 200 200',
            stroke: 'none'
        },
        _react2.default.createElement('path', {
            className: 'IconsStar_normal',
            d: 'M100 10L120.206 72.1885H185.595L132.694 110.623L152.901 \r 172.812L100 134.377L47.0993 172.812L67.3056 110.623L14.4049 \r 72.1885H79.7937L100 10Z',
            fill: color
        })
    );
}

exports.default = IconsStar;

/***/ }),

/***/ "./src/_some_function/AppTouchNoneTemp.js":
/*!************************************************!*\
  !*** ./src/_some_function/AppTouchNoneTemp.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.toggleAppTouchNone = toggleAppTouchNone;
//
function toggleAppTouchNone(_ref) {
    var _ref$touch_none = _ref.touch_none,
        touch_none = _ref$touch_none === undefined ? false : _ref$touch_none;

    var html = document.getElementsByTagName('html')[0];

    if (touch_none) {
        if (!html.dataset.touchNone) {
            html.dataset.touchNone = 1;
        }
    } else {
        html.removeAttribute('data-touch-none');
    }
}

/***/ }),

/***/ "./src/_some_function/FormatNum.js":
/*!*****************************************!*\
  !*** ./src/_some_function/FormatNum.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
// 
var formatNum = exports.formatNum = function formatNum(num) {
    return new Intl.NumberFormat('en').format(num);
};

/***/ }),

/***/ "./src/_some_function/getClientXY.js":
/*!*******************************************!*\
  !*** ./src/_some_function/getClientXY.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getClientX = getClientX;
exports.getClientY = getClientY;
exports.getClientXY = getClientXY;
exports.getTouchClientXY = getTouchClientXY;

var _Constant = __webpack_require__(/*! ../_constant/Constant */ "./src/_constant/Constant.js");

//
function getClientX(e) {
    return _Constant.IS_MOBILE ? e.touches[0].clientX : e.clientX;
}

//
function getClientY(e) {
    return _Constant.IS_MOBILE ? e.touches[0].clientY : e.clientY;
}

//
function getClientXY(e) {
    return _Constant.IS_MOBILE ? { client_x: e.touches[0].clientX, client_y: e.touches[0].clientY } : { client_x: e.clientX, client_y: e.clientY };
}

//
function getTouchClientXY(e, touche_ix) {
    return {
        client_x: e.touches[touche_ix].clientX,
        client_y: e.touches[touche_ix].clientY
    };
}

/***/ }),

/***/ "./src/component/stars_rate/_main/StarsRate.js":
/*!*****************************************************!*\
  !*** ./src/component/stars_rate/_main/StarsRate.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _StarRate = __webpack_require__(/*! ../star_rate/StarRate */ "./src/component/stars_rate/star_rate/StarRate.js");

var _StarRate2 = _interopRequireDefault(_StarRate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
StarsRate.propTypes = {
    rate_avg: _propTypes2.default.number,
    size_icon: _propTypes2.default.string,
    handleChangeRate: _propTypes2.default.func
};
//

StarsRate.defaultProps = {
    rate_avg: 5
};

//
function StarsRate(_ref) {
    var rate_avg = _ref.rate_avg,
        size_icon = _ref.size_icon,
        color = _ref.color,
        handleChangeRate = _ref.handleChangeRate;

    //
    var rates_icon = [1, 2, 3, 4, 5].map(function (item) {
        var rate = rate_avg + 1 - item;

        return rate <= 0 ? 0 : rate >= 1 ? 1 : rate;
    });

    //
    return _react2.default.createElement(
        'div',
        { className: 'StarsRate' },
        _react2.default.createElement(
            'div',
            { className: 'display-flex align-items-center' },
            rates_icon.map(function (rate, ix) {
                return _react2.default.createElement(_StarRate2.default, {
                    key: '' + ix,
                    rate_icon: rate,
                    star_ix: ix + 1,
                    size_icon: size_icon,
                    color: color,
                    handleChangeRate: handleChangeRate
                });
            })
        )
    );
}

exports.default = StarsRate;

/***/ }),

/***/ "./src/component/stars_rate/star_rate/StarRate.js":
/*!********************************************************!*\
  !*** ./src/component/stars_rate/star_rate/StarRate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconsStar = __webpack_require__(/*! ../../../_icons_svg/icons_star/IconsStar */ "./src/_icons_svg/icons_star/IconsStar.js");

var _IconsStar2 = _interopRequireDefault(_IconsStar);

__webpack_require__(/*! ./StarRate.scss */ "./src/component/stars_rate/star_rate/StarRate.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
StarRate.propTypes = {
    rate_avg: _propTypes2.default.number,
    star_ix: _propTypes2.default.number,
    size_icon: _propTypes2.default.string,
    handleChangeRate: _propTypes2.default.func
};
//

StarRate.defaultProps = {
    handleChangeRate: function handleChangeRate() {}
};

//
function StarRate(_ref) {
    var star_ix = _ref.star_ix,
        rate_icon = _ref.rate_icon,
        size_icon = _ref.size_icon,
        color = _ref.color,
        handleChangeRate = _ref.handleChangeRate;

    //
    function onChangeRate() {
        handleChangeRate(star_ix);
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'StarRate pos-rel', onClick: onChangeRate },
        _react2.default.createElement(_IconsStar2.default, { color: 'var(--md-bg-ccc)', size_icon: size_icon }),
        _react2.default.createElement(
            'div',
            {
                className: 'StarRate_rate pos-abs top-0 left-0 overflow-hidden ' + (rate_icon ? '' : 'display-none'),
                style: {
                    width: rate_icon ? // ? rate_icon * size_icon.replace('rem', '') + 'rem'
                    rate_icon * 100 + '%' : undefined
                }
            },
            _react2.default.createElement(_IconsStar2.default, { size_icon: size_icon, color: color })
        )
    );
}

exports.default = StarRate;

/***/ }),

/***/ "./src/component/vid_pic/observe/VidPicObserve.js":
/*!********************************************************!*\
  !*** ./src/component/vid_pic/observe/VidPicObserve.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
//

//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _useObserveVidPic = __webpack_require__(/*! ../../../_hooks/useObserveVidPic */ "./src/_hooks/useObserveVidPic.js");

var _VideoOrImage = __webpack_require__(/*! ../../../_some_function/VideoOrImage */ "./src/_some_function/VideoOrImage.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
VidPicObserve.propTypes = {
    vid_pic: _propTypes2.default.string,
    type: _propTypes2.default.string,
    video_props: _propTypes2.default.object,
    img_props: _propTypes2.default.object
};

VidPicObserve.defaultProps = {
    video_props: {},
    img_props: {}
};

//
function VidPicObserve(_ref) {
    var vid_pic = _ref.vid_pic,
        type = _ref.type,
        video_props = _ref.video_props,
        img_props = _ref.img_props;

    //
    var type_vid_pic = (0, _VideoOrImage.getTypeVidOrPic)(vid_pic, type);

    //
    var ref_vid_pic = (0, _react.useRef)(null);

    //
    var class_vid_pic = (0, _useObserveVidPic.useObserveVidPic)(ref_vid_pic);

    //
    (0, _react.useEffect)(function () {
        if (ref_vid_pic.current && ref_vid_pic.current.src) {
            ref_vid_pic.current.src = vid_pic;
        }
    }, [vid_pic]);

    //
    return type_vid_pic == 'img' ? _react2.default.createElement('img', _extends({
        ref: ref_vid_pic,
        className: '' + class_vid_pic,
        'data-src': vid_pic,
        alt: ''
    }, img_props)) : type_vid_pic == 'video' ? _react2.default.createElement('video', _extends({
        ref: ref_vid_pic,
        className: '' + class_vid_pic,
        'data-src': vid_pic
    }, video_props)) : null;
}

exports.default = VidPicObserve;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/stars_rate/star_rate/StarRate.scss":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/stars_rate/star_rate/StarRate.scss ***!
  \*******************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/component/stars_rate/star_rate/StarRate.scss":
/*!**********************************************************!*\
  !*** ./src/component/stars_rate/star_rate/StarRate.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StarRate_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./StarRate.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/stars_rate/star_rate/StarRate.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StarRate_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StarRate_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src__hooks_useMouseMoveX_js-src__some_function_AppTouchNoneTemp_js-src__some_function_FormatN-2f92ec.js.map