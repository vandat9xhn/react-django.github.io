(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src__hooks_useMouseMoveXY_js-src__icons_svg_icon_private_IconPrivate_js-src__icons_svg_icon_p-541c0d0"],{

/***/ "./src/_hooks/useMouseMoveXY.js":
/*!**************************************!*\
  !*** ./src/_hooks/useMouseMoveXY.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useMouseMoveXY = useMouseMoveXY;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _Constant = __webpack_require__(/*! ../_constant/Constant */ "./src/_constant/Constant.js");

var _getClientXY3 = __webpack_require__(/*! ../_some_function/getClientXY */ "./src/_some_function/getClientXY.js");

//
function useMouseMoveXY(_ref) {
    var _ref$handleMouseMove = _ref.handleMouseMove,
        handleMouseMove = _ref$handleMouseMove === undefined ? function () {} : _ref$handleMouseMove,
        _ref$handleMouseEnd = _ref.handleMouseEnd,
        handleMouseEnd = _ref$handleMouseEnd === undefined ? function () {} : _ref$handleMouseEnd;

    //
    var is_run = (0, _react.useRef)(false);

    var client_x = (0, _react.useRef)(0);
    var client_y = (0, _react.useRef)(0);

    //
    function handleStart(e) {
        e.stopPropagation();

        is_run.current = true;

        var _getClientXY = (0, _getClientXY3.getClientXY)(e),
            new_client_x = _getClientXY.client_x,
            new_client_y = _getClientXY.client_y;

        client_x.current = new_client_x;
        client_y.current = new_client_y;

        if (_Constant.IS_MOBILE) {
            window.ontouchmove = handleMove;
            window.ontouchend = handleEnd;
        } else {
            window.onmousemove = handleMove;
            window.onmouseup = handleEnd;
        }
    }

    //
    function handleMove(e) {
        if (!is_run.current) {
            return;
        }

        if (e.touches && e.touches.length > 1) {
            window.onmousemove = null;
            window.onmouseup = null;
            return;
        }

        var _getClientXY2 = (0, _getClientXY3.getClientXY)(e),
            new_client_x = _getClientXY2.client_x,
            new_client_y = _getClientXY2.client_y;

        handleMouseMove({
            old_client_x: client_x.current,
            old_client_y: client_y.current,

            new_client_x: new_client_x,
            new_client_y: new_client_y,

            client_x_change: new_client_x - client_x.current,
            client_y_change: new_client_y - client_y.current
        });

        client_x.current = new_client_x;
        client_y.current = new_client_y;
    }

    //
    function handleEnd() {
        is_run.current = false;
        handleMouseEnd();

        if (_Constant.IS_MOBILE) {
            window.ontouchmove = null;
            window.ontouchend = null;
        } else {
            window.onmousemove = null;
            window.onmouseup = null;
        }
    }

    //
    return {
        handleStart: handleStart
    };
}
//

/***/ }),

/***/ "./src/_icons_svg/icon_private/IconPrivate.js":
/*!****************************************************!*\
  !*** ./src/_icons_svg/icon_private/IconPrivate.js ***!
  \****************************************************/
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
IconPrivate.propTypes = {
    size_icon: _propTypes2.default.string,
    stroke: _propTypes2.default.string
};

IconPrivate.defaultProps = {
    size_icon: '1rem',
    stroke: 'var(--md-color)'
};

//
function IconPrivate(_ref) {
    var size_icon = _ref.size_icon,
        stroke = _ref.stroke;

    //
    return _react2.default.createElement(
        'svg',
        {
            width: size_icon,
            height: size_icon,
            viewBox: '0 0 200 200',
            stroke: stroke,
            strokeLinejoin: 'round'
        },
        _react2.default.createElement('path', {
            d: 'M35 185V83.2216H165V185H35Z',
            fill: stroke,
            strokeWidth: '15'
        }),
        _react2.default.createElement('path', {
            d: 'M139.342 83.2217C139.342 83.2217 139.342 65.5908 139.342 49.5627C139.342 33.0701 119.263\r 16.3218 101.711 15.1023C81.8786 13.7244 57.2368 26.3219 57.2368 49.5627C57.2368 67.0889\r 57.2368 83.2217 57.2368 83.2217',
            strokeWidth: '20',
            fill: 'none'
        }),
        _react2.default.createElement('path', {
            d: 'M80.2326 158L90.876 136.877C90.876 136.877 78.1384 126.503 80.2326 119.004C82.3196\r 111.531 89.3841 106.21 99.3907 106.006C109.712 105.795 116.989 111.382 119.613\r 119.004C122.052  126.088 109.5 136.877 109.5 136.877L119.613 158H80.2326Z',
            fill: 'white'
        })
    );
}

exports.default = IconPrivate;

/***/ }),

/***/ "./src/_icons_svg/icon_public/IconPublic.js":
/*!**************************************************!*\
  !*** ./src/_icons_svg/icon_public/IconPublic.js ***!
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
IconPublic.propTypes = {
    size_icon: _propTypes2.default.string,
    stroke: _propTypes2.default.string
};

IconPublic.defaultProps = {
    size_icon: '1rem',
    stroke: 'var(--md-color)'
};

//
function IconPublic(_ref) {
    var size_icon = _ref.size_icon,
        stroke = _ref.stroke;

    //
    return _react2.default.createElement(
        'svg',
        {
            width: size_icon,
            height: size_icon,
            viewBox: '0 0 200 200',
            fill: 'none',
            strokeWidth: '5',
            stroke: stroke
        },
        _react2.default.createElement('circle', { cx: '100', cy: '100', r: '85', strokeWidth: '10' }),
        _react2.default.createElement('line', {
            x1: '99.3965',
            y1: '16.1017',
            x2: '99.3965',
            y2: '183.898',
            stroke: 'black'
        }),
        _react2.default.createElement('line', { x1: '10', y1: '97.5', x2: '184.569', y2: '97.5' }),
        _react2.default.createElement('path', {
            d: 'M55.1915 101.148C55.1915 64.7981 61.6037 18.555 99.4181 18.4258C137.303 18.2964 144.809\r 64.595 144.809 101.148C144.809 137.701 137.301 184.26 99.4181 183.87C61.7454 183.482 55.1915\r 137.498 55.1915 101.148Z'
        }),
        _react2.default.createElement('path', {
            d: 'M44.1027 34.5106C44.1027 34.5106 63.6271 62.4681 100.771 62.4681C137.915 62.4681 158.596\r 34.5106 158.596 34.5106M44.1027 163.957C44.1027 163.957 58.2654 140.895 100.771 140.596C143.277\r 140.297 158.596 163.957 158.596 163.957'
        })
    );
}

exports.default = IconPublic;

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
};

//
function IconUpdate(_ref) {
    var size_icon = _ref.size_icon,
        x = _ref.x,
        y = _ref.y,
        stroke = _ref.stroke;

    //
    return _react2.default.createElement(
        'svg',
        { width: size_icon, height: size_icon, viewBox: x + ' ' + y + ' 200 200' },
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

/***/ "./src/_icons_svg/icons_post/IconsPost.js":
/*!************************************************!*\
  !*** ./src/_icons_svg/icons_post/IconsPost.js ***!
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

__webpack_require__(/*! ./IconsPost.scss */ "./src/_icons_svg/icons_post/IconsPost.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
IconsPost.propTypes = {
    size_icon: _propTypes2.default.string,
    x: _propTypes2.default.number,
    y: _propTypes2.default.number
};

IconsPost.defaultProps = {
    x: 0,
    y: 0,
    size_icon: '1.5rem'
};

/**
 *icons post: (x, y)
 *   @.icon tag: (0, 0)
 *   @.icon comment: (200, 0)
 *   @.icon share: (0, 200)
 */
function IconsPost(_ref) {
    var size_icon = _ref.size_icon,
        x = _ref.x,
        y = _ref.y;

    //
    return _react2.default.createElement(
        'svg',
        {
            className: 'IconsPost',
            viewBox: x + ' ' + y + ' 200 200',
            width: size_icon,
            height: size_icon
            //
            , fill: 'none',
            stroke: 'var(--md-color)',
            strokeLinecap: 'round'
        },
        _react2.default.createElement('path', {
            fill: 'var(--blue)',
            d: 'M10,95 L0,0 L95,10 L200,115 L115,200 Z'
        }),
        _react2.default.createElement(
            'g',
            { stroke: 'var(--blue)', fill: 'white', strokeWidth: '5' },
            _react2.default.createElement('circle', { cx: '50', cy: '50', r: '20' }),
            _react2.default.createElement('circle', { cx: '80', cy: '165', r: '30' }),
            _react2.default.createElement('line', { x1: '80', y1: '145', x2: '80', y2: '185' }),
            _react2.default.createElement('line', { x1: '100', y1: '165', x2: '60', y2: '165' })
        ),
        _react2.default.createElement(
            'g',
            { className: 'IconsPost_cmt', strokeWidth: '10' },
            _react2.default.createElement('path', {
                d: 'M230,190 L230,165 L230,165 Q210,165 210,130 L210,30 Q210,5 230,5\r L370,5 Q390,5 390,30 L390,130 Q390,165 360,165 L270,165 Z'
            }),
            _react2.default.createElement('line', { x1: '240', y1: '40', x2: '360', y2: '40' }),
            _react2.default.createElement('line', { x1: '240', y1: '80', x2: '360', y2: '80' }),
            _react2.default.createElement('line', { x1: '240', y1: '120', x2: '360', y2: '120' })
        ),
        _react2.default.createElement('path', {
            className: 'IconsPost_share',
            d: 'M180,300 L125,240 L125,280 Q40,290 25,380 Q40,330 125,320 L125,360 Z',
            strokeWidth: '10'
        })
    );
}

exports.default = IconsPost;

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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/_icons_svg/icons_post/IconsPost.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/_icons_svg/icons_post/IconsPost.scss ***!
  \***********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* media */\n@media (max-width: var(--sm)) {\n  .IconsPost {\n    width: 1.2rem;\n    height: 1.2rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/_icons_svg/icons_post/IconsPost.scss"],"names":[],"mappings":"AACA,UAAA;AAEA;EACI;IACI,aAAA;IACA,cAAA;EADN;AACF","sourcesContent":["\r\n/* media */\r\n\r\n@media (max-width: var(--sm)){\r\n    .IconsPost{\r\n        width: 1.2rem;\r\n        height: 1.2rem;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/_icons_svg/icons_post/IconsPost.scss":
/*!**************************************************!*\
  !*** ./src/_icons_svg/icons_post/IconsPost.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_IconsPost_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./IconsPost.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/_icons_svg/icons_post/IconsPost.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_IconsPost_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_IconsPost_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src__hooks_useMouseMoveXY_js-src__icons_svg_icon_private_IconPrivate_js-src__icons_svg_icon_p-541c0d0.js.map