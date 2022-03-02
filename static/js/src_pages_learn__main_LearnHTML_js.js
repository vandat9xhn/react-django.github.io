(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_learn__main_LearnHTML_js"],{

/***/ "./src/component/vid_pic/video_live/_main/MyVideoLive.js":
/*!***************************************************************!*\
  !*** ./src/component/vid_pic/video_live/_main/MyVideoLive.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactVideoTs = __webpack_require__(/*! react-video-ts */ "./node_modules/react-video-ts/dist/index.modern.js");

__webpack_require__(/*! react-video-ts/dist/index.css */ "./node_modules/react-video-ts/dist/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
MyVideoLive.propTypes = {};

//
function MyVideoLive(_ref) {
    var video = _ref.video,
        total_view = _ref.total_view,
        face_video_elm = _ref.face_video_elm,
        stop_when_over = _ref.stop_when_over,
        _ref$max_zoom_lv = _ref.max_zoom_lv,
        max_zoom_lv = _ref$max_zoom_lv === undefined ? 0 : _ref$max_zoom_lv,
        _ref$use_fullscreen = _ref.use_fullscreen,
        use_fullscreen = _ref$use_fullscreen === undefined ? false : _ref$use_fullscreen,
        initial_is_play = _ref.initial_is_play,
        initial_zoom_lv = _ref.initial_zoom_lv,
        initial_volume = _ref.initial_volume,
        initial_is_mute = _ref.initial_is_mute,
        initial_c_time = _ref.initial_c_time,
        initial_total_time = _ref.initial_total_time,
        beforeTogglePlay = _ref.beforeTogglePlay,
        afterTogglePlay = _ref.afterTogglePlay,
        beforeChangeVolume = _ref.beforeChangeVolume,
        afterChangeVolume = _ref.afterChangeVolume,
        beforeToggleMute = _ref.beforeToggleMute,
        afterToggleMute = _ref.afterToggleMute,
        beforeChangeZoomLv = _ref.beforeChangeZoomLv,
        afterChangeZoomLv = _ref.afterChangeZoomLv,
        beforeChangeTime = _ref.beforeChangeTime,
        afterChangeTime = _ref.afterChangeTime;

    //
    return _react2.default.createElement(_reactVideoTs.VideoLive, {
        video: video,
        total_view: total_view,
        face_video_elm: face_video_elm
        //
        , stop_when_over: stop_when_over,
        max_zoom_lv: max_zoom_lv,
        use_fullscreen: use_fullscreen
        //
        , initial_is_play: initial_is_play,
        initial_zoom_lv: initial_zoom_lv,
        initial_volume: initial_volume,
        initial_is_mute: initial_is_mute,
        initial_c_time: initial_c_time,
        initial_total_time: initial_total_time
        //
        , beforeTogglePlay: beforeTogglePlay,
        afterTogglePlay: afterTogglePlay,
        beforeChangeVolume: beforeChangeVolume,
        afterChangeVolume: afterChangeVolume,
        beforeToggleMute: beforeToggleMute,
        afterToggleMute: afterToggleMute,
        beforeChangeZoomLv: beforeChangeZoomLv,
        afterChangeZoomLv: afterChangeZoomLv,
        beforeChangeTime: beforeChangeTime,
        afterChangeTime: afterChangeTime
    });
}

exports.default = MyVideoLive;

/***/ }),

/***/ "./src/pages/learn/_main/LearnHTML.js":
/*!********************************************!*\
  !*** ./src/pages/learn/_main/LearnHTML.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
            value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ./LearnHTML.scss */ "./src/pages/learn/_main/LearnHTML.scss");

var _LearnVideo = __webpack_require__(/*! ../video/LearnVideo */ "./src/pages/learn/video/LearnVideo.js");

var _LearnVideo2 = _interopRequireDefault(_LearnVideo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import LearnPreviewProfile from '../preview_profile/LearnPreviewProfile';
// import LearnGroupCard from '../group_card/LearnGroupCard';
// import LearnCmt from '../cmt/LearnCmt';
// import TestSearchAnimate from '../test_search_animate/TestSearchAnimate';
// import FbLogin from '../fb/test_login/FbLogin';
// import LearnSelectColorBg from '../color_bg/LearnSelectColorBg';
// import LearnAppearancePosition from '../appearance_position/LearnAppearancePosition';
// import LearnScreen from '../screen/LearnScreen';
// import LearnWaitingToken from '../waiting_token/LearnWaitingToken';
// import LearnDnD from '../dnd/LearnDnD';
// import LearnObserverScroll from '../observer_scroll/LearnObserverScroll';
// import LearnChild from '../child_state/_main/LearnChild';
// import LearnPortalModel from '../portal/LearnPortalModel';
// import LearnAPIHeroku from '../api_heroku/LearnAPIHeroku';
// import LearnStoryItem from '../story_item/LearnStoryItem';
// import LearnWriteHtml from '../write_html/LearnWriteHtml';
// import LearnResizeRotate from '../resize_rotate/LearnResizeRotate';
// import LearnColorThief from '../color_thief/LearnColorThief';
// import LearnTouches from '../touches/LearnTouches';
// import LearnSaveScroll from '../save_scroll/LearnSaveScroll';
// import LearnFashion from '../fashion/LearnFashion';
// import LearnFsCartItem from '../fashion/LearnFsCartItem';
// import LearnFsCartSummary from '../fashion/LearnFsCartSummary';
// import LearnFsAddAddress from '../fs_add_address/LearnFsAddAddress';
// import LearnNewPost from '../new_post/LearnNewPost';
// import LearnPLChooseAddress from '../pl_choose_address/LearnPLChooseAddress';
// import LearnCropPic from '../crop_pic/LearnCropPic';
// import LearnSwitch2Rect from '../switch_2_rect/LearnSwitch2Rect';

//

//
// import TestHook from '../test_hook/TestHook';
// import TestWs from '../test_ws/TestWs';
// import TestPagination from '../test_pagination/TestPagination';
//
LearnHTML.propTypes = {};

//
function LearnHTML() {
            //
            return _react2.default.createElement(
                        'div',
                        { className: 'LearnHTML' },
                        _react2.default.createElement('br', null),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(_LearnVideo2.default, null),
                        _react2.default.createElement('div', { className: 'h-100vh' })
            );
}

exports.default = LearnHTML;

/***/ }),

/***/ "./src/pages/learn/video/LearnVideo.js":
/*!*********************************************!*\
  !*** ./src/pages/learn/video/LearnVideo.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _MyVideoLive = __webpack_require__(/*! ../../../component/vid_pic/video_live/_main/MyVideoLive */ "./src/component/vid_pic/video_live/_main/MyVideoLive.js");

var _MyVideoLive2 = _interopRequireDefault(_MyVideoLive);

__webpack_require__(/*! ./LearnVideo.scss */ "./src/pages/learn/video/LearnVideo.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
var video = 'http://media.w3.org/2010/05/sintel/trailer.webm';

//

// 
LearnVideo.propTypes = {};

//
function LearnVideo(props) {
    //
    return _react2.default.createElement(
        'div',
        { className: 'LearnVideo margin-auto border-blur bg-shadow-8' },
        _react2.default.createElement(_MyVideoLive2.default, {
            video: video,
            total_view: 20
            //
            , initial_is_play: false
            // initial_zoom_lv={0}
            // initial_volume={0}
            , initial_is_mute: true,
            initial_c_time: 0
            // initial_total_time={0}
        })
    );
}

exports.default = LearnVideo;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/learn/_main/LearnHTML.scss":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/learn/_main/LearnHTML.scss ***!
  \*******************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".LearnHTML_contain {\n  padding: 0.5rem;\n}\n@media (max-width: 500px) {\n  .LearnHTML_contain {\n    padding: 0;\n  }\n}\n\n.LearnHTML_row-title {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--md-bg-ccc);\n}\n.LearnHTML_row-title .LearnHTML__run {\n  padding: 0.5rem;\n  background-color: var(--success);\n  color: white;\n  cursor: pointer;\n}\n.LearnHTML_row-title .LearnHTML__run:hover {\n  opacity: 0.8;\n}\n\n.LearnHTML_col {\n  width: 50%;\n  border: 2px solid var(--bg-blur);\n  overflow-y: auto;\n  word-wrap: break-word;\n}\n.LearnHTML_col .LearnHTML__editable {\n  height: 90vh;\n  max-height: 30rem;\n  outline: none;\n}\n.LearnHTML_col .LearnHTML__editable:focus {\n  outline: none;\n}\n.LearnHTML_col .LearnHTML__iframe {\n  height: 90vh;\n  max-height: 30rem;\n}\n.LearnHTML_col iframe {\n  width: 100%;\n  height: 100%;\n}\n\n@media (max-width: 500px) {\n  .LearnHTML_row-learn {\n    display: block;\n  }\n\n  .LearnHTML_col {\n    width: 100%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/pages/learn/_main/LearnHTML.scss"],"names":[],"mappings":"AAQA;EACI,eAAA;AAPJ;AAAI;EAMJ;IAGQ,UAAA;EALN;AACF;;AASA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kCAAA;AANJ;AASI;EACI,eAAA;EACA,gCAAA;EACA,YAAA;EACA,eAAA;AAPR;AAQQ;EACI,YAAA;AANZ;;AAYA;EACI,UAAA;EAEA,gCAAA;EACA,gBAAA;EACA,qBAAA;AAVJ;AAWI;EACI,YAAA;EACA,iBAAA;EACA,aAAA;AATR;AAUQ;EACI,aAAA;AARZ;AAWI;EACI,YAAA;EACA,iBAAA;AATR;AAWI;EACI,WAAA;EACA,YAAA;AATR;;AAeA;EACI;IACI,cAAA;EAZN;;EAcE;IACI,WAAA;EAXN;AACF","sourcesContent":["// mixin media\r\n@mixin sm-media{\r\n    @media (max-width: 500px){\r\n        @content\r\n    }\r\n}\r\n\r\n// \r\n.LearnHTML_contain {\r\n    padding: 0.5rem;\r\n    @include sm-media() {\r\n        padding: 0;\r\n    }\r\n}\r\n\r\n// row title\r\n.LearnHTML_row-title {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: var(--md-bg-ccc);\r\n\r\n    // btn run\r\n    .LearnHTML__run {\r\n        padding: 0.5rem;\r\n        background-color: var(--success);\r\n        color: white;\r\n        cursor: pointer;\r\n        &:hover {\r\n            opacity: 0.8;\r\n        }\r\n    }\r\n}\r\n\r\n// col learn\r\n.LearnHTML_col {\r\n    width: 50%;\r\n\r\n    border: 2px solid var(--bg-blur);\r\n    overflow-y: auto;\r\n    word-wrap: break-word;\r\n    .LearnHTML__editable {\r\n        height: 90vh;\r\n        max-height: 30rem;\r\n        outline: none;\r\n        &:focus{\r\n            outline: none;\r\n        }\r\n    }\r\n    .LearnHTML__iframe {\r\n        height: 90vh;\r\n        max-height: 30rem;\r\n    }\r\n    iframe {\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n}\r\n\r\n\r\n//\r\n@media (max-width: 500px){\r\n    .LearnHTML_row-learn{\r\n        display: block;\r\n    }\r\n    .LearnHTML_col{\r\n        width: 100%;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/learn/video/LearnVideo.scss":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/learn/video/LearnVideo.scss ***!
  \********************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".LearnVideo {\n  width: 740px;\n  max-width: 100%;\n  height: 400px;\n}", "",{"version":3,"sources":["webpack://./src/pages/learn/video/LearnVideo.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,eAAA;EACA,aAAA;AACJ","sourcesContent":[".LearnVideo{\r\n    width: 740px;\r\n    max-width: 100%;\r\n    height: 400px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/learn/_main/LearnHTML.scss":
/*!**********************************************!*\
  !*** ./src/pages/learn/_main/LearnHTML.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_LearnHTML_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./LearnHTML.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/learn/_main/LearnHTML.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_LearnHTML_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_LearnHTML_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/learn/video/LearnVideo.scss":
/*!***********************************************!*\
  !*** ./src/pages/learn/video/LearnVideo.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_LearnVideo_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./LearnVideo.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/learn/video/LearnVideo.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_LearnVideo_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_LearnVideo_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_learn__main_LearnHTML_js.js.map