(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src__some_function_getClientXY_js-src_component_fb_search_page_right_video__main_FbSearchPage-075742"],{

/***/ "./src/_default/fb_search/videos.js":
/*!******************************************!*\
  !*** ./src/_default/fb_search/videos.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default_fb_search_video_arr = undefined;

var _default_content = __webpack_require__(/*! ../_common/default_content */ "./src/_default/_common/default_content.js");

var _default_id = __webpack_require__(/*! ../_common/default_id */ "./src/_default/_common/default_id.js");

var _default_image = __webpack_require__(/*! ../_common/default_image */ "./src/_default/_common/default_image.js");

var _getDefaultArr = __webpack_require__(/*! ../_common/getDefaultArr */ "./src/_default/_common/getDefaultArr.js");

//
var default_fb_search_video_obj = function default_fb_search_video_obj() {
    return {
        id: (0, _default_id.getRandomId)(),
        title: 'Video title',
        img: (0, _default_image.getRandomImg)(),
        description: (0, _default_content.getRandomContent)().slice(0, 100),

        total_time_str: '5:11',
        count_view: (0, _default_id.getRandomNumber)(10, 50) * 1000,

        page_name: 'Page name',
        page_link: '/watch/page_link',

        created_time: new Date().toDateString()
    };
};

var default_fb_search_video_arr = exports.default_fb_search_video_arr = function default_fb_search_video_arr() {
    return (0, _getDefaultArr.getDefaultArr)(default_fb_search_video_obj, 16, 16);
};

/***/ }),

/***/ "./src/_handle_api/fb_search/videos.js":
/*!*********************************************!*\
  !*** ./src/_handle_api/fb_search/videos.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handle_API_FbSearchVideo_L = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var handle_API_FbSearchVideo_L = exports.handle_API_FbSearchVideo_L = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
        var _ref2$c_count = _ref2.c_count,
            c_count = _ref2$c_count === undefined ? 0 : _ref2$c_count,
            _ref2$params = _ref2.params,
            params = _ref2$params === undefined ? {} : _ref2$params;
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _videos.API_FbSearchVideo_L)(_extends({
                            c_count: c_count,
                            size: 16,
                            page: 1
                        }, params));

                    case 2:
                        res = _context.sent;
                        return _context.abrupt("return", res.data);

                    case 4:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function handle_API_FbSearchVideo_L(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _videos = __webpack_require__(/*! ../../api/api_django/fb_search/videos */ "./src/api/api_django/fb_search/videos.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/_hooks/search/useObserverMoreSearch.js":
/*!****************************************************!*\
  !*** ./src/_hooks/search/useObserverMoreSearch.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
//


exports.useObserverMoreSearch = useObserverMoreSearch;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _useObserverShowMore = __webpack_require__(/*! ../useObserverShowMore */ "./src/_hooks/useObserverShowMore.js");

//
function useObserverMoreSearch(_ref) {
    var handle_API_L = _ref.handle_API_L;

    //
    var ref_fake_elm = (0, _react.useRef)(null);

    //
    var data = (0, _useObserverShowMore.useObserverShowMore)({
        handle_API_L: handle_API_L
    });

    //
    (0, _react.useEffect)(function () {
        data.refreshData_API();
    }, [location.search]);

    //
    (0, _react.useEffect)(function () {
        data.observerShowMore({
            fake_elm_end: ref_fake_elm.current,
            rootMargin: '0px 0px 250px 0px',
            way_scroll: 'to_bottom',
            margin: 250
        });
    }, []);

    //
    return _extends({ ref_fake_elm: ref_fake_elm }, data);
}

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

/***/ "./src/api/api_django/fb_search/videos.js":
/*!************************************************!*\
  !*** ./src/api/api_django/fb_search/videos.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.API_FbSearchVideo_L = undefined;

var _AxiosDjango = __webpack_require__(/*! ../_axios/AxiosDjango */ "./src/api/api_django/_axios/AxiosDjango.js");

var _AxiosDjango2 = _interopRequireDefault(_AxiosDjango);

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _videos = __webpack_require__(/*! ../../../_default/fb_search/videos */ "./src/_default/fb_search/videos.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
var API_FbSearchVideo_L = exports.API_FbSearchVideo_L = function API_FbSearchVideo_L(params) {
    return (0, _ConstAPI.API_FakeReal)((0, _videos.default_fb_search_video_arr)(), function () {
        return (0, _AxiosDjango2.default)({
            url: 'api/facebook/fb-search-video-l/',
            method: 'GET',
            params: params
        });
    }, params);
};
//

/***/ }),

/***/ "./src/component/fb_search/page/right/video/_main/FbSearchPageVideo.js":
/*!*****************************************************************************!*\
  !*** ./src/component/fb_search/page/right/video/_main/FbSearchPageVideo.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
//

//

//

//

//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ParseLocationSearch = __webpack_require__(/*! ../../../../../../_some_function/ParseLocationSearch */ "./src/_some_function/ParseLocationSearch.js");

var _videos = __webpack_require__(/*! ../../../../../../_handle_api/fb_search/videos */ "./src/_handle_api/fb_search/videos.js");

var _useObserverMoreSearch = __webpack_require__(/*! ../../../../../../_hooks/search/useObserverMoreSearch */ "./src/_hooks/search/useObserverMoreSearch.js");

var _FbSearchPageLayout = __webpack_require__(/*! ../../../_components/_layout/FbSearchPageLayout */ "./src/component/fb_search/page/_components/_layout/FbSearchPageLayout.js");

var _FbSearchPageLayout2 = _interopRequireDefault(_FbSearchPageLayout);

var _FbSearchPageVideoItem = __webpack_require__(/*! ../item/FbSearchPageVideoItem */ "./src/component/fb_search/page/right/video/item/FbSearchPageVideoItem.js");

var _FbSearchPageVideoItem2 = _interopRequireDefault(_FbSearchPageVideoItem);

__webpack_require__(/*! ./FbSearchPageVideo.scss */ "./src/component/fb_search/page/right/video/_main/FbSearchPageVideo.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
FbSearchPageVideo.propTypes = {};

//
function FbSearchPageVideo(props) {
    var _useObserverMoreSearc = (0, _useObserverMoreSearch.useObserverMoreSearch)({
        handle_API_L: function handle_API_L(c_count) {
            return (0, _videos.handle_API_FbSearchVideo_L)({
                c_count: c_count,
                params: _extends({}, (0, _ParseLocationSearch.ParseLocationSearch)())
            });
        }
    }),
        ref_fake_elm = _useObserverMoreSearc.ref_fake_elm,
        data_state = _useObserverMoreSearc.data_state,
        data_count = _useObserverMoreSearc.data_count;

    var data_arr = data_state.data_arr,
        has_fetched = data_state.has_fetched;

    //

    return _react2.default.createElement(
        'div',
        { className: 'FbSearchPageVideo' },
        _react2.default.createElement(_FbSearchPageLayout2.default, {
            right_elm: _react2.default.createElement(
                'div',
                { className: 'fb-search-page-right-contain display-flex-center' },
                _react2.default.createElement(
                    'div',
                    { className: 'w-680px' },
                    _react2.default.createElement(
                        'div',
                        null,
                        data_arr.map(function (video_obj, ix) {
                            return _react2.default.createElement(
                                'div',
                                {
                                    key: video_obj.id,
                                    className: 'fb-search-page-right-item'
                                },
                                _react2.default.createElement(_FbSearchPageVideoItem2.default, {
                                    video_obj: video_obj
                                })
                            );
                        })
                    ),
                    _react2.default.createElement('div', {
                        ref: ref_fake_elm,
                        className: 'padding-1px'
                    })
                )
            ),
            no_result: has_fetched && data_count.current == 0,
            title: 'Videos'
        })
    );
}

exports.default = FbSearchPageVideo;

/***/ }),

/***/ "./src/component/fb_search/page/right/video/item/FbSearchPageVideoItem.js":
/*!********************************************************************************!*\
  !*** ./src/component/fb_search/page/right/video/item/FbSearchPageVideoItem.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _UnitNumber = __webpack_require__(/*! ../../../../../../_some_function/UnitNumber */ "./src/_some_function/UnitNumber.js");

var _ActionsMultiList = __webpack_require__(/*! ../../../../../actions_multi_list/_main/ActionsMultiList */ "./src/component/actions_multi_list/_main/ActionsMultiList.js");

var _ActionsMultiList2 = _interopRequireDefault(_ActionsMultiList);

__webpack_require__(/*! ./FbSearchPageVideoItem.scss */ "./src/component/fb_search/page/right/video/item/FbSearchPageVideoItem.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
FbSearchPageVideoItem.propTypes = {};

//

//

//
function FbSearchPageVideoItem(_ref) {
    var video_obj = _ref.video_obj;

    //
    var id = video_obj.id,
        title = video_obj.title,
        img = video_obj.img,
        description = video_obj.description,
        total_time_str = video_obj.total_time_str,
        count_view = video_obj.count_view,
        page_name = video_obj.page_name,
        page_link = video_obj.page_link,
        created_time = video_obj.created_time;

    //

    return _react2.default.createElement(
        'div',
        { className: 'FbSearchPageVideoItem fb-search-page-right-item-contain pos-rel padding-16px brs-8px bg-primary box-shadow-1' },
        _react2.default.createElement(_reactRouterDom.Link, {
            className: 'FbSearchPageVideoItem_link display-block pos-abs-100 z-index-1 brs-8px-pc cursor-pointer hv-bg-hv',
            to: '/watch?id=' + id
        }),
        _react2.default.createElement(
            'div',
            { className: 'display-flex' },
            _react2.default.createElement(
                'div',
                { className: ' margin-right-12px' },
                _react2.default.createElement(
                    'div',
                    { className: 'pos-rel' },
                    _react2.default.createElement('img', {
                        className: 'FbSearchPageVideoItem_thumbnail border-blur brs-8px object-fit-cover',
                        src: img,
                        alt: '',
                        width: '200',
                        height: '112'
                    }),
                    _react2.default.createElement(
                        'div',
                        { className: 'FbSearchPageVideoItem_time pos-abs right-0 bottom-0 padding-8px' },
                        _react2.default.createElement(
                            'div',
                            { className: 'padding-x-8px padding-y-4px brs-4px bg-shadow-5 line-16px text-white font-13px font-600' },
                            total_time_str
                        )
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'flex-grow-1 space-between' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'wk-box-vertical line-clamp-2 overflow-hidden line-20px font-600' },
                        title
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'wk-box-vertical line-clamp-2 overflow-hidden font-13px' },
                        description
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'display-flex font-13px text-secondary' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            {
                                className: 'color-inherit hv-underline',
                                to: '' + page_link
                            },
                            _react2.default.createElement(
                                'div',
                                { className: 'pos-rel z-index-1' },
                                page_name
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'font-13px text-secondary' },
                        _react2.default.createElement(
                            'span',
                            null,
                            created_time
                        ),
                        ' · ',
                        _react2.default.createElement(
                            'span',
                            null,
                            (0, _UnitNumber.UnitNumber)(count_view),
                            ' view',
                            count_view >= 2 ? 's' : ''
                        )
                    )
                ),
                _react2.default.createElement('div', null)
            )
        )
    );
}

exports.default = FbSearchPageVideoItem;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/fb_search/page/right/video/_main/FbSearchPageVideo.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/fb_search/page/right/video/_main/FbSearchPageVideo.scss ***!
  \****************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/fb_search/page/right/video/item/FbSearchPageVideoItem.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/fb_search/page/right/video/item/FbSearchPageVideoItem.scss ***!
  \*******************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".device-mobile .FbSearchPageVideoItem {\n  padding: 8px;\n  line-height: 18px;\n}\n.device-mobile .FbSearchPageVideoItem_thumbnail {\n  width: 100px;\n  height: 60px;\n}\n.device-mobile .FbSearchPageVideoItem_time {\n  padding: 2px;\n  font-size: 12px;\n}", "",{"version":3,"sources":["webpack://./src/component/fb_search/page/right/video/item/FbSearchPageVideoItem.scss"],"names":[],"mappings":"AACI;EACI,YAAA;EACA,iBAAA;AAAR;AAGI;EACI,YAAA;EACA,YAAA;AADR;AAGI;EACI,YAAA;EACA,eAAA;AADR","sourcesContent":[".device-mobile{\r\n    .FbSearchPageVideoItem {\r\n        padding: 8px;\r\n        line-height: 18px;\r\n    }\r\n\r\n    .FbSearchPageVideoItem_thumbnail{\r\n        width: 100px;\r\n        height: 60px;\r\n    }\r\n    .FbSearchPageVideoItem_time{\r\n        padding: 2px;\r\n        font-size: 12px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/component/fb_search/page/right/video/_main/FbSearchPageVideo.scss":
/*!*******************************************************************************!*\
  !*** ./src/component/fb_search/page/right/video/_main/FbSearchPageVideo.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbSearchPageVideo_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./FbSearchPageVideo.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/fb_search/page/right/video/_main/FbSearchPageVideo.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbSearchPageVideo_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbSearchPageVideo_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/fb_search/page/right/video/item/FbSearchPageVideoItem.scss":
/*!**********************************************************************************!*\
  !*** ./src/component/fb_search/page/right/video/item/FbSearchPageVideoItem.scss ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbSearchPageVideoItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./FbSearchPageVideoItem.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/fb_search/page/right/video/item/FbSearchPageVideoItem.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbSearchPageVideoItem_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbSearchPageVideoItem_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src__some_function_getClientXY_js-src_component_fb_search_page_right_video__main_FbSearchPage-075742.js.map