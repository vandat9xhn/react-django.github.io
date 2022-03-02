(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_watch_pages_home__main_WatchHome_js"],{

/***/ "./src/_default/fb_watch/new.js":
/*!**************************************!*\
  !*** ./src/_default/fb_watch/new.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default_fb_watch_new_arr = undefined;

var _default_bool = __webpack_require__(/*! ../_common/default_bool */ "./src/_default/_common/default_bool.js");

var _default_id = __webpack_require__(/*! ../_common/default_id */ "./src/_default/_common/default_id.js");

var _default_image = __webpack_require__(/*! ../_common/default_image */ "./src/_default/_common/default_image.js");

var _default_name = __webpack_require__(/*! ../_common/default_name */ "./src/_default/_common/default_name.js");

var _getDefaultArr = __webpack_require__(/*! ../_common/getDefaultArr */ "./src/_default/_common/getDefaultArr.js");

//
var default_fb_watch_new_obj = function default_fb_watch_new_obj() {
    var name = (0, _default_name.getRandomPageName)();

    return {
        id: (0, _default_id.getRandomId)(),
        name: name,
        picture: (0, _default_image.getRandomImg)(),

        title: 'New video from ' + name,
        link_to: '/watch/latest/' + name.toLowerCase().replace(/ /g, ''),
        time_str: (0, _default_id.getRandomNumber)(2, 16) + ' hours ago'
    };
};

var default_fb_watch_new_arr = exports.default_fb_watch_new_arr = function default_fb_watch_new_arr() {
    var count = (0, _default_bool.getRandomBool)() ? (0, _default_id.getRandomNumber)(0, 8) : 0;

    return (0, _getDefaultArr.getDefaultArr)(default_fb_watch_new_obj, count, count);
};

/***/ }),

/***/ "./src/_default/fb_watch/posts.js":
/*!****************************************!*\
  !*** ./src/_default/fb_watch/posts.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default_fb_watch_post_arr = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
//


var _DefaultPosts = __webpack_require__(/*! ../post/DefaultPosts */ "./src/_default/post/DefaultPosts.js");

var _default_image = __webpack_require__(/*! ../_common/default_image */ "./src/_default/_common/default_image.js");

var _default_id = __webpack_require__(/*! ../_common/default_id */ "./src/_default/_common/default_id.js");

var _getDefaultArr = __webpack_require__(/*! ../_common/getDefaultArr */ "./src/_default/_common/getDefaultArr.js");

var _default_bool = __webpack_require__(/*! ../_common/default_bool */ "./src/_default/_common/default_bool.js");

var _getRandomFromArr = __webpack_require__(/*! ../_common/getRandomFromArr */ "./src/_default/_common/getRandomFromArr.js");

//

//
var default_fb_watch_post_obj = function default_fb_watch_post_obj() {
    var post_obj = (0, _DefaultPosts.default_post_obj)({ post_where: 'page' });
    return _extends({}, post_obj, {
        is_live: (0, _default_bool.getRandomBool)(),
        vid_pic_count: 1,
        vid_pics: [{
            id: (0, _default_id.getRandomId)(),
            vid_pic: (0, _getRandomFromArr.getRandomFromArr)(_default_image.default_video_arr),
            content: ''
        }],

        bg_obj: null
    });
};

var default_fb_watch_post_arr = exports.default_fb_watch_post_arr = function default_fb_watch_post_arr() {
    return (0, _getDefaultArr.getDefaultArr)(default_fb_watch_post_obj, 10, 10);
};

/***/ }),

/***/ "./src/_handle_api/fb_watch/new.js":
/*!*****************************************!*\
  !*** ./src/_handle_api/fb_watch/new.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handle_API_WatchNew_L = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var handle_API_WatchNew_L = exports.handle_API_WatchNew_L = function () {
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
                        return (0, _new.API_WatchNew_L)(_extends({
                            c_count: c_count,
                            size: 16,
                            page: 1
                        }, params));

                    case 2:
                        res = _context.sent;
                        return _context.abrupt('return', res.data);

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function handle_API_WatchNew_L(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _new = __webpack_require__(/*! ../../api/api_django/fb_watch/new */ "./src/api/api_django/fb_watch/new.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/_handle_api/fb_watch/posts.js":
/*!*******************************************!*\
  !*** ./src/_handle_api/fb_watch/posts.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handle_API_WatchPost_L = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var handle_API_WatchPost_L = exports.handle_API_WatchPost_L = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
        var _ref2$page_id = _ref2.page_id,
            page_id = _ref2$page_id === undefined ? 0 : _ref2$page_id,
            _ref2$c_count = _ref2.c_count,
            c_count = _ref2$c_count === undefined ? 0 : _ref2$c_count,
            _ref2$params = _ref2.params,
            params = _ref2$params === undefined ? {} : _ref2$params;
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _posts.API_WatchPost_L)(_extends({
                            page_model: page_id,
                            c_count: c_count,
                            page: 1,
                            size: 10
                        }, params));

                    case 2:
                        res = _context.sent;
                        return _context.abrupt('return', res.data);

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function handle_API_WatchPost_L(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _posts = __webpack_require__(/*! ../../api/api_django/fb_watch/posts */ "./src/api/api_django/fb_watch/posts.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/api/api_django/fb_watch/new.js":
/*!********************************************!*\
  !*** ./src/api/api_django/fb_watch/new.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.API_WatchNew_L = undefined;

var _AxiosDjango = __webpack_require__(/*! ../_axios/AxiosDjango */ "./src/api/api_django/_axios/AxiosDjango.js");

var _AxiosDjango2 = _interopRequireDefault(_AxiosDjango);

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _new = __webpack_require__(/*! ../../../_default/fb_watch/new */ "./src/_default/fb_watch/new.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
var API_WatchNew_L = exports.API_WatchNew_L = function API_WatchNew_L(params) {
    return (0, _ConstAPI.API_FakeReal)((0, _new.default_fb_watch_new_arr)(), function () {
        return (0, _AxiosDjango2.default)({
            url: 'api/facebook/fb-watch-new-l/',
            method: 'GET',
            params: params
        });
    }, params, true);
};
//

/***/ }),

/***/ "./src/api/api_django/fb_watch/posts.js":
/*!**********************************************!*\
  !*** ./src/api/api_django/fb_watch/posts.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.API_WatchPost_L = undefined;

var _AxiosDjango = __webpack_require__(/*! ../_axios/AxiosDjango */ "./src/api/api_django/_axios/AxiosDjango.js");

var _AxiosDjango2 = _interopRequireDefault(_AxiosDjango);

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _posts = __webpack_require__(/*! ../../../_default/fb_watch/posts */ "./src/_default/fb_watch/posts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
var API_WatchPost_L = exports.API_WatchPost_L = function API_WatchPost_L() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0, _ConstAPI.API_FakeReal)((0, _posts.default_fb_watch_post_arr)(), function () {
        return (0, _AxiosDjango2.default)({
            url: 'api/facebook/watch-post-l',
            method: 'GET',
            params: params
        });
    }, params);
};
//

/***/ }),

/***/ "./src/pages/watch/pages/home/_main/WatchHome.js":
/*!*******************************************************!*\
  !*** ./src/pages/watch/pages/home/_main/WatchHome.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _WatchHomeNew = __webpack_require__(/*! ../new/_main/WatchHomeNew */ "./src/pages/watch/pages/home/new/_main/WatchHomeNew.js");

var _WatchHomeNew2 = _interopRequireDefault(_WatchHomeNew);

var _WatchHomePosts = __webpack_require__(/*! ../posts/_main/WatchHomePosts */ "./src/pages/watch/pages/home/posts/_main/WatchHomePosts.js");

var _WatchHomePosts2 = _interopRequireDefault(_WatchHomePosts);

__webpack_require__(/*! ./WatchHome.scss */ "./src/pages/watch/pages/home/_main/WatchHome.scss");

__webpack_require__(/*! ./WatchHomeCommon.scss */ "./src/pages/watch/pages/home/_main/WatchHomeCommon.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
WatchHome.propTypes = {};

//
function WatchHome(props) {
    //
    return _react2.default.createElement(
        'div',
        { className: 'WatchHome' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_WatchHomeNew2.default, null)
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_WatchHomePosts2.default, null)
        )
    );
}

exports.default = WatchHome;

/***/ }),

/***/ "./src/pages/watch/pages/home/new/_main/WatchHomeNew.js":
/*!**************************************************************!*\
  !*** ./src/pages/watch/pages/home/new/_main/WatchHomeNew.js ***!
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

var _Constant = __webpack_require__(/*! ../../../../../../_constant/Constant */ "./src/_constant/Constant.js");

var _new = __webpack_require__(/*! ../../../../../../_handle_api/fb_watch/new */ "./src/_handle_api/fb_watch/new.js");

var _useScrollToX2 = __webpack_require__(/*! ../../../../../../_hooks/useScrollToX */ "./src/_hooks/useScrollToX.js");

var _useObserverShowMore2 = __webpack_require__(/*! ../../../../../../_hooks/useObserverShowMore */ "./src/_hooks/useObserverShowMore.js");

var _NextPrevDiv = __webpack_require__(/*! ../../../../../../component/some_div/next_prev_div/NextPrevDiv */ "./src/component/some_div/next_prev_div/NextPrevDiv.js");

var _NextPrevDiv2 = _interopRequireDefault(_NextPrevDiv);

var _WatchHomeNewItem = __webpack_require__(/*! ../item/_main/WatchHomeNewItem */ "./src/pages/watch/pages/home/new/item/_main/WatchHomeNewItem.js");

var _WatchHomeNewItem2 = _interopRequireDefault(_WatchHomeNewItem);

__webpack_require__(/*! ./WatchHomeNew.scss */ "./src/pages/watch/pages/home/new/_main/WatchHomeNew.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
WatchHomeNew.propTypes = {};

//

//

//

//

//
function WatchHomeNew(props) {
    //
    var ref_scroll_elm = (0, _react.useRef)(null);
    var ref_fake_elm = (0, _react.useRef)(null);

    //

    var _useScrollToX = (0, _useScrollToX2.useScrollToX)({
        ref_scroll_elm: ref_scroll_elm,
        getItemElm: getItemElm
    }),
        is_has_next = _useScrollToX.is_has_next,
        is_has_prev = _useScrollToX.is_has_prev,
        handleNext = _useScrollToX.handleNext,
        handlePrev = _useScrollToX.handlePrev,
        hasNextPrev = _useScrollToX.hasNextPrev;

    //


    var _useObserverShowMore = (0, _useObserverShowMore2.useObserverShowMore)({
        initial_arr: [],
        handle_API_L: function handle_API_L(c_count) {
            return (0, _new.handle_API_WatchNew_L)({ c_count: c_count });
        }
    }),
        data_state = _useObserverShowMore.data_state,
        is_max = _useObserverShowMore.is_max,
        getData_API = _useObserverShowMore.getData_API,
        observerShowMore = _useObserverShowMore.observerShowMore;

    var data_arr = data_state.data_arr,
        count = data_state.count,
        has_fetched = data_state.has_fetched;

    //

    (0, _react.useEffect)(function () {
        getData_API();
    }, []);

    //
    (0, _react.useEffect)(function () {
        has_fetched && !is_max.current && observerShowMore({
            fake_elm_end: ref_fake_elm.current,
            root: ref_scroll_elm.current,
            rootMargin: '0px 500px',
            way_scroll: 'to_right',
            margin: 800
        });
    }, [has_fetched]);

    //
    (0, _react.useEffect)(function () {
        hasNextPrev();
    }, [data_arr.length]);

    // ----

    //
    function getItemElm() {
        return ref_scroll_elm.current.getElementsByTagName('li')[0];
    }

    // ----

    //
    if (!has_fetched || count == 0) {
        return null;
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'WatchHomeNew watch-home-part padding-y-16px brs-8px-pc bg-primary box-shadow-1' },
        _react2.default.createElement(
            'div',
            { className: 'WatchHomeNew_title margin-bottom-8px padding-x-16px font-20px font-700' },
            'New for you \xB7 ',
            count
        ),
        _react2.default.createElement(
            'div',
            { className: 'WatchHomeNew_list pos-rel padding-x-16px' },
            _react2.default.createElement(
                'ul',
                {
                    ref: ref_scroll_elm,
                    className: 'display-flex list-none overflow-x-auto scroll-height-0'
                },
                data_arr.map(function (item, ix) {
                    return _react2.default.createElement(
                        'li',
                        {
                            key: item.id,
                            className: 'WatchHomeNew_item flex-shrink-0 w-50per'
                        },
                        _react2.default.createElement(_WatchHomeNewItem2.default, { item: item })
                    );
                }),
                _react2.default.createElement('div', { ref: ref_fake_elm, className: 'w-1px' })
            ),
            _Constant.IS_MOBILE ? null : _react2.default.createElement(
                'div',
                { className: 'text-third' },
                _react2.default.createElement(_NextPrevDiv2.default, {
                    is_btn_circle: true,
                    is_has_next: is_has_next,
                    is_has_prev: is_has_prev
                    // size_icon={}
                    , handleNext: handleNext,
                    handlePrev: handlePrev
                })
            )
        )
    );
}

exports.default = WatchHomeNew;

/***/ }),

/***/ "./src/pages/watch/pages/home/new/item/_main/WatchHomeNewItem.js":
/*!***********************************************************************!*\
  !*** ./src/pages/watch/pages/home/new/item/_main/WatchHomeNewItem.js ***!
  \***********************************************************************/
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

var _DotCountNew = __webpack_require__(/*! ../../../../../../../component/dot_count_new/DotCountNew */ "./src/component/dot_count_new/DotCountNew.js");

var _DotCountNew2 = _interopRequireDefault(_DotCountNew);

__webpack_require__(/*! ./WatchHomeNewItem.scss */ "./src/pages/watch/pages/home/new/item/_main/WatchHomeNewItem.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
WatchHomeNewItem.propTypes = {};

//

// 
function WatchHomeNewItem(_ref) {
    var item = _ref.item;

    //
    var title = item.title,
        picture = item.picture,
        time_str = item.time_str,
        link_to = item.link_to;

    //

    return _react2.default.createElement(
        _reactRouterDom.Link,
        {
            className: 'WatchHomeNewItem display-flex align-items-center h-100per padding-8px brs-6px hv-bg-blur color-inherit',
            to: link_to
        },
        _react2.default.createElement(
            'div',
            { className: 'margin-right-12px' },
            _react2.default.createElement('img', {
                className: 'WatchHomeNewItem_img brs-50 object-fit-cover',
                src: picture,
                alt: '',
                width: 60,
                height: 60
            })
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                { className: 'WatchHomeNewItem_title font-17px' },
                title
            ),
            _react2.default.createElement(
                'div',
                { className: 'font-12px text-blue' },
                _react2.default.createElement(_DotCountNew2.default, { title: time_str })
            )
        )
    );
}

exports.default = WatchHomeNewItem;

/***/ }),

/***/ "./src/pages/watch/pages/home/posts/_main/WatchHomePosts.js":
/*!******************************************************************!*\
  !*** ./src/pages/watch/pages/home/posts/_main/WatchHomePosts.js ***!
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

var _posts = __webpack_require__(/*! ../../../../../../_handle_api/fb_watch/posts */ "./src/_handle_api/fb_watch/posts.js");

var _useObserverShowMore2 = __webpack_require__(/*! ../../../../../../_hooks/useObserverShowMore */ "./src/_hooks/useObserverShowMore.js");

var _Posts = __webpack_require__(/*! ../../../../../../component/posts/_posts/_main/Posts */ "./src/component/posts/_posts/_main/Posts.js");

var _Posts2 = _interopRequireDefault(_Posts);

__webpack_require__(/*! ./WatchHomePosts.scss */ "./src/pages/watch/pages/home/posts/_main/WatchHomePosts.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
WatchHomePosts.propTypes = {};

//

// 

// 
function WatchHomePosts(props) {
    //
    var ref_fake_elm = (0, _react.useRef)(null);

    //

    var _useObserverShowMore = (0, _useObserverShowMore2.useObserverShowMore)({
        initial_arr: [],
        handle_API_L: function handle_API_L(c_count) {
            return (0, _posts.handle_API_WatchPost_L)({ c_count: c_count });
        }
    }),
        data_state = _useObserverShowMore.data_state,
        getData_API = _useObserverShowMore.getData_API,
        observerShowMore = _useObserverShowMore.observerShowMore;

    var data_arr = data_state.data_arr,
        has_fetched = data_state.has_fetched,
        is_fetching = data_state.is_fetching;

    //

    (0, _react.useEffect)(function () {
        getData_API();
        observerShowMore({
            fake_elm_end: ref_fake_elm.current,
            rootMargin: '800px 0px',
            way_scroll: 'to_bottom',
            margin: 800
        });
    }, []);

    //
    return _react2.default.createElement(
        'div',
        { className: 'WatchHomePosts watch-home-part' },
        _react2.default.createElement(_Posts2.default, {
            posts: data_arr,
            has_fetched: has_fetched,
            is_fetching: is_fetching
            // open_input_id_arr={open_input_id_arr}
            // interleaved_elm_arr={interleaved_elm_arr}
        }),
        _react2.default.createElement('div', { ref: ref_fake_elm, className: 'w-1px' })
    );
}

exports.default = WatchHomePosts;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/watch/pages/home/_main/WatchHome.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/watch/pages/home/_main/WatchHome.scss ***!
  \******************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".WatchHome {\n  margin: 4px auto;\n  width: 740px;\n}\n\n.device-mobile .WatchHome {\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/pages/watch/pages/home/_main/WatchHome.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;EACA,YAAA;AACJ;;AAKI;EACI,WAAA;AAFR","sourcesContent":[".WatchHome {\r\n    margin: 4px auto;\r\n    width: 740px;\r\n}\r\n\r\n// ----\r\n\r\n.device-mobile {\r\n    .WatchHome {\r\n        width: 100%;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/watch/pages/home/_main/WatchHomeCommon.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/watch/pages/home/_main/WatchHomeCommon.scss ***!
  \************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".watch-home-part {\n  margin: 20px 0;\n}\n\n.device-mobile .watch-home-part {\n  margin: 15px 0;\n}", "",{"version":3,"sources":["webpack://./src/pages/watch/pages/home/_main/WatchHomeCommon.scss"],"names":[],"mappings":"AAAA;EACI,cAAA;AACJ;;AAKI;EACI,cAAA;AAFR","sourcesContent":[".watch-home-part {\r\n    margin: 20px 0;\r\n}\r\n\r\n// ----\r\n\r\n.device-mobile {\r\n    .watch-home-part {\r\n        margin: 15px 0;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/watch/pages/home/new/_main/WatchHomeNew.scss":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/watch/pages/home/new/_main/WatchHomeNew.scss ***!
  \*************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".device-mobile .WatchHomeNew_title {\n  font-size: 15px;\n  padding: 0 8px;\n}\n.device-mobile .WatchHomeNew_list {\n  padding: 0 8px;\n}\n.device-mobile .WatchHomeNew_item {\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/pages/watch/pages/home/new/_main/WatchHomeNew.scss"],"names":[],"mappings":"AAGI;EACI,eAAA;EACA,cAAA;AAFR;AAKI;EACI,cAAA;AAHR;AAMI;EACI,WAAA;AAJR","sourcesContent":["// -----\r\n\r\n.device-mobile {\r\n    .WatchHomeNew_title{\r\n        font-size: 15px;\r\n        padding: 0 8px;\r\n    }\r\n\r\n    .WatchHomeNew_list{\r\n        padding: 0 8px;\r\n    }\r\n    // .\r\n    .WatchHomeNew_item {\r\n        width: 100%;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/watch/pages/home/new/item/_main/WatchHomeNewItem.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/watch/pages/home/new/item/_main/WatchHomeNewItem.scss ***!
  \**********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".device-mobile .WatchHomeNewItem {\n  padding: 0;\n}\n.device-mobile .WatchHomeNewItem_img {\n  width: 40px;\n  height: 40px;\n}\n.device-mobile .WatchHomeNewItem_title {\n  font-size: 15px;\n}", "",{"version":3,"sources":["webpack://./src/pages/watch/pages/home/new/item/_main/WatchHomeNewItem.scss"],"names":[],"mappings":"AAGI;EACI,UAAA;AAFR;AAKI;EACI,WAAA;EACA,YAAA;AAHR;AAMI;EACI,eAAA;AAJR","sourcesContent":["// ----\r\n\r\n.device-mobile {\r\n    .WatchHomeNewItem {\r\n        padding: 0;\r\n    }\r\n\r\n    .WatchHomeNewItem_img {\r\n        width: 40px;\r\n        height: 40px;\r\n    }\r\n\r\n    .WatchHomeNewItem_title {\r\n        font-size: 15px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/watch/pages/home/posts/_main/WatchHomePosts.scss":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/watch/pages/home/posts/_main/WatchHomePosts.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".WatchHomePosts .Post {\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/pages/watch/pages/home/posts/_main/WatchHomePosts.scss"],"names":[],"mappings":"AACI;EACI,WAAA;AAAR","sourcesContent":[".WatchHomePosts{\r\n    .Post{\r\n        width: 100%;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/watch/pages/home/_main/WatchHome.scss":
/*!*********************************************************!*\
  !*** ./src/pages/watch/pages/home/_main/WatchHome.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_WatchHome_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./WatchHome.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/watch/pages/home/_main/WatchHome.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_WatchHome_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_WatchHome_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/watch/pages/home/_main/WatchHomeCommon.scss":
/*!***************************************************************!*\
  !*** ./src/pages/watch/pages/home/_main/WatchHomeCommon.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_WatchHomeCommon_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./WatchHomeCommon.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/watch/pages/home/_main/WatchHomeCommon.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_WatchHomeCommon_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_WatchHomeCommon_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/watch/pages/home/new/_main/WatchHomeNew.scss":
/*!****************************************************************!*\
  !*** ./src/pages/watch/pages/home/new/_main/WatchHomeNew.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_WatchHomeNew_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./WatchHomeNew.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/watch/pages/home/new/_main/WatchHomeNew.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_WatchHomeNew_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_WatchHomeNew_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/watch/pages/home/new/item/_main/WatchHomeNewItem.scss":
/*!*************************************************************************!*\
  !*** ./src/pages/watch/pages/home/new/item/_main/WatchHomeNewItem.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_WatchHomeNewItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../node_modules/sass-loader/dist/cjs.js!./WatchHomeNewItem.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/watch/pages/home/new/item/_main/WatchHomeNewItem.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_WatchHomeNewItem_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_WatchHomeNewItem_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/watch/pages/home/posts/_main/WatchHomePosts.scss":
/*!********************************************************************!*\
  !*** ./src/pages/watch/pages/home/posts/_main/WatchHomePosts.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_WatchHomePosts_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./WatchHomePosts.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/watch/pages/home/posts/_main/WatchHomePosts.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_WatchHomePosts_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_WatchHomePosts_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_watch_pages_home__main_WatchHome_js.js.map