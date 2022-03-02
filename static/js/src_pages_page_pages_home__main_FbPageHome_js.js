(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_page_pages_home__main_FbPageHome_js"],{

/***/ "./src/_default/fb_page/page_home_preview.js":
/*!***************************************************!*\
  !*** ./src/_default/fb_page/page_home_preview.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default_fb_page_home_preview_obj = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _default_content = __webpack_require__(/*! ../_common/default_content */ "./src/_default/_common/default_content.js");

var _default_id = __webpack_require__(/*! ../_common/default_id */ "./src/_default/_common/default_id.js");

var _default_image = __webpack_require__(/*! ../_common/default_image */ "./src/_default/_common/default_image.js");

var _getDefaultArr = __webpack_require__(/*! ../_common/getDefaultArr */ "./src/_default/_common/getDefaultArr.js");

var _page_about = __webpack_require__(/*! ./page_about */ "./src/_default/fb_page/page_about.js");

//
var default_fb_page_home_preview_obj = exports.default_fb_page_home_preview_obj = function default_fb_page_home_preview_obj() {
    //
    return _extends({}, (0, _page_about.default_fb_page_about_obj)(), {

        pic_arr: (0, _getDefaultArr.getDefaultArr)(function () {
            return {
                id: (0, _default_id.getRandomId)(),
                img: (0, _default_image.getRandomImg)()
            };
        }, 4, 9),
        video_obj: {
            id: (0, _default_id.getRandomNumber)(),
            content: (0, _default_content.getRandomContent)().slice(0, 100),
            thumbnail: (0, _default_image.getRandomImg)(),
            video_time: '4:22',

            view_count: (0, _default_id.getRandomNumber)(1, 20) * 10000,
            created_time_str: 'a day ago',

            reacted_ix_arr: [0, 1, 2],
            reacted_count: (0, _default_id.getRandomNumber)(1, 20) * 1000,
            user_reacted_ix: 1,
            reacted_count_arr: [{ reacted_ix: 0, count: 500 }, { reacted_ix: 1, count: 1500 }, { reacted_ix: 2, count: 300 }]
        }
    });
};

/***/ }),

/***/ "./src/_default/fb_page/page_pinned_post.js":
/*!**************************************************!*\
  !*** ./src/_default/fb_page/page_pinned_post.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default_fb_page_pinned_post_obj = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _DefaultPosts = __webpack_require__(/*! ../post/DefaultPosts */ "./src/_default/post/DefaultPosts.js");

var _default_bool = __webpack_require__(/*! ../_common/default_bool */ "./src/_default/_common/default_bool.js");

//
var default_fb_page_pinned_post_obj = exports.default_fb_page_pinned_post_obj = function default_fb_page_pinned_post_obj() {
    var post_obj = (0, _DefaultPosts.default_post_obj)({ post_where: 'page' });

    if ((0, _default_bool.getRandomBool)()) {
        return _extends({}, post_obj);
    }

    return null;
};

/***/ }),

/***/ "./src/_default/fb_page/page_posts.js":
/*!********************************************!*\
  !*** ./src/_default/fb_page/page_posts.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default_fb_page_post_arr = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _DefaultPosts = __webpack_require__(/*! ../post/DefaultPosts */ "./src/_default/post/DefaultPosts.js");

var _getDefaultArr = __webpack_require__(/*! ../_common/getDefaultArr */ "./src/_default/_common/getDefaultArr.js");

//
var default_fb_page_post_obj = function default_fb_page_post_obj() {
    var post_obj = (0, _DefaultPosts.default_post_obj)({ post_where: 'page' });
    return _extends({}, post_obj);
};

var default_fb_page_post_arr = exports.default_fb_page_post_arr = function default_fb_page_post_arr() {
    return (0, _getDefaultArr.getDefaultArr)(default_fb_page_post_obj, 10, 10);
};

/***/ }),

/***/ "./src/_handle_api/fb_page/page_home_preview.js":
/*!******************************************************!*\
  !*** ./src/_handle_api/fb_page/page_home_preview.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handle_API_FbPageHomePreview_R = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var handle_API_FbPageHomePreview_R = exports.handle_API_FbPageHomePreview_R = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
        var _ref2$page_id = _ref2.page_id,
            page_id = _ref2$page_id === undefined ? 0 : _ref2$page_id,
            _ref2$params = _ref2.params,
            params = _ref2$params === undefined ? {} : _ref2$params;
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _page_home_preview.API_FbPageHomePreview_R)(_extends({
                            page_model: page_id
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

    return function handle_API_FbPageHomePreview_R(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _page_home_preview = __webpack_require__(/*! ../../api/api_django/fb_page/page_home_preview */ "./src/api/api_django/fb_page/page_home_preview.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/_handle_api/fb_page/page_pinned_post.js":
/*!*****************************************************!*\
  !*** ./src/_handle_api/fb_page/page_pinned_post.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handle_API_FbPagePinnedPost_R = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var handle_API_FbPagePinnedPost_R = exports.handle_API_FbPagePinnedPost_R = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
        var _ref2$page_id = _ref2.page_id,
            page_id = _ref2$page_id === undefined ? 0 : _ref2$page_id,
            _ref2$params = _ref2.params,
            params = _ref2$params === undefined ? {} : _ref2$params;
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _page_pinned_post.API_FbPagePinnedPost_R)(_extends({
                            page_model: page_id
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

    return function handle_API_FbPagePinnedPost_R(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _page_pinned_post = __webpack_require__(/*! ../../api/api_django/fb_page/page_pinned_post */ "./src/api/api_django/fb_page/page_pinned_post.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/_handle_api/fb_page/page_posts.js":
/*!***********************************************!*\
  !*** ./src/_handle_api/fb_page/page_posts.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handle_API_FbPagePost_L = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var handle_API_FbPagePost_L = exports.handle_API_FbPagePost_L = function () {
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
                        return (0, _page_posts.API_FbPagePost_L)(_extends({
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

    return function handle_API_FbPagePost_L(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _page_posts = __webpack_require__(/*! ../../api/api_django/fb_page/page_posts */ "./src/api/api_django/fb_page/page_posts.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/_hooks/useStickyAuto.js":
/*!*************************************!*\
  !*** ./src/_hooks/useStickyAuto.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useStickyAuto = useStickyAuto;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Constant = __webpack_require__(/*! ../_constant/Constant */ "./src/_constant/Constant.js");

var _useMounted = __webpack_require__(/*! ./useMounted */ "./src/_hooks/useMounted.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var isInnerWidthOk = function isInnerWidthOk() {
    return innerWidth > 900;
};

//

var isHrefOk = function isHrefOk(sticky_location) {
    return location.href.search(sticky_location) >= 0;
};

function getScrollTop() {
    return document.getElementsByTagName('html')[0].scrollTop;
}

function handleScrollTo() {
    var new_pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    document.getElementsByTagName('html')[0].scrollTop = new_pos;
}

//
function useStickyAuto(_ref) {
    var _ref$sticky_location = _ref.sticky_location,
        sticky_location = _ref$sticky_location === undefined ? /./ : _ref$sticky_location,
        _ref$header_head = _ref.header_head,
        header_head = _ref$header_head === undefined ? _Constant.HEADER_HEAD + 10 : _ref$header_head;

    //
    var ref_main_elm = (0, _react.useRef)(null);
    var ref_fake_elm = (0, _react.useRef)(null);
    var ref_preview_elm = (0, _react.useRef)(null);

    var ref_is_innerWidth_ok = (0, _react.useRef)(isInnerWidthOk());
    var ref_is_href_ok = (0, _react.useRef)(isHrefOk(sticky_location));
    var has_event_scroll = (0, _react.useRef)(false);

    var ref_more_height = (0, _react.useRef)(0);
    var ref_has_more_height = (0, _react.useRef)(false);
    var ref_scroll_y = (0, _react.useRef)(0);
    var ref_is_last_scroll_down = (0, _react.useRef)(true);

    //
    var mounted = (0, _useMounted.useMounted)();

    //
    (0, _react.useEffect)(function () {
        window.addEventListener('resize', handleResize);

        return function () {
            window.removeEventListener('resize', handleResize);
            window.onscroll = null;
        };
    }, []);

    (0, _react.useEffect)(function () {
        handleChangeHref();
    }, [location.href]);

    /* --------- COMMON --------- */

    //
    function getNewMoreHeight() {
        var _ref_preview_elm$curr = ref_preview_elm.current.getBoundingClientRect(),
            height = _ref_preview_elm$curr.height;

        ref_has_more_height.current = height + header_head > innerHeight;

        return height - innerHeight;
    }

    //
    function handleRefWhenMoreHeightNotOk() {
        ref_preview_elm.current.style.position = 'sticky';
        ref_preview_elm.current.style.top = header_head + 'px';
        ref_fake_elm.current.style.height = '0px';
    }

    //
    function handleRefWhenInnerWidthNotOk() {
        ref_preview_elm.current.style.position = 'static';
        ref_fake_elm.current.style.height = '0px';
        ref_is_innerWidth_ok.current = false;
    }

    //
    function handleRemoveScroll() {
        if (has_event_scroll.current) {
            window.onscroll = null;
            has_event_scroll.current = false;
        }
    }

    //
    function handleAddScroll() {
        if (!has_event_scroll.current) {
            window.onscroll = handleScroll;
            has_event_scroll.current = true;

            setTimeout(function () {
                handleScrollTo(getScrollTop() + 1);
            }, 0);
        }
    }

    /* ------------ */

    //
    function handleInnerWidthToOk() {
        ref_more_height.current = getNewMoreHeight();
        ref_is_innerWidth_ok.current = true;

        if (ref_has_more_height.current) {
            ref_preview_elm.current.style.position = 'sticky';
            handleAddScroll();
        } else {
            handleRefWhenMoreHeightNotOk();
        }

        ref_scroll_y.current = scrollY - 296 - ref_preview_elm.current.getBoundingClientRect().height;
    }

    //
    function handleInnerWidthToNotOk() {
        handleRemoveScroll();
        handleRefWhenInnerWidthNotOk();
        ref_scroll_y.current = scrollY + 16 + ref_preview_elm.current.getBoundingClientRect().height;
    }

    //
    function calculateAgain() {
        if (!ref_preview_elm.current) {
            return;
        }

        ref_is_href_ok.current = isHrefOk(sticky_location);
        ref_is_innerWidth_ok.current = isInnerWidthOk();
        ref_more_height.current = getNewMoreHeight();

        if (ref_is_innerWidth_ok.current) {
            if (!ref_has_more_height.current) {
                handleRefWhenMoreHeightNotOk();
            }
        } else {
            handleRefWhenInnerWidthNotOk();
        }

        if (ref_has_more_height.current && ref_is_href_ok.current && ref_is_innerWidth_ok.current) {
            handleAddScroll();
        } else {
            handleRemoveScroll();
        }
    }

    /* ---------- */

    //
    function handleScroll() {
        if (!ref_preview_elm.current) {
            return;
        }

        var _ref_preview_elm$curr2 = ref_preview_elm.current.getBoundingClientRect(),
            top = _ref_preview_elm$curr2.top,
            bottom = _ref_preview_elm$curr2.bottom;

        var hide_height_main = -ref_main_elm.current.getBoundingClientRect().top;

        var is_scroll_down = scrollY - ref_scroll_y.current > 0;
        var at_bottom = bottom <= innerHeight;
        var at_last_top = hide_height_main <= header_head;
        var at_temp_top = top >= 0;

        // scroll down
        if (is_scroll_down) {
            if (!ref_is_last_scroll_down.current) {
                if (at_last_top) {
                    ref_fake_elm.current.style.height = '0px';
                } else if (at_temp_top) {
                    ref_fake_elm.current.style.height = hide_height_main + header_head + 'px';
                }
            }

            ref_preview_elm.current.style.top = -ref_more_height.current + 'px';
            ref_preview_elm.current.style.bottom = 'auto';

            ref_is_last_scroll_down.current = true;
        }

        //  scroll up
        else {
                if (ref_is_last_scroll_down.current) {
                    if (at_bottom) {
                        ref_fake_elm.current.style.height = hide_height_main - ref_more_height.current + 'px';
                    }
                }

                ref_preview_elm.current.style.top = 'auto';
                ref_preview_elm.current.style.bottom = -ref_more_height.current - header_head + 'px';

                ref_is_last_scroll_down.current = false;
            }

        ref_scroll_y.current = scrollY;
    }

    //
    function handleResize() {
        if (!ref_is_href_ok.current) {
            return;
        }

        var new_innerWidth_ok = isInnerWidthOk();

        if (new_innerWidth_ok) {
            if (!ref_is_innerWidth_ok.current) {
                handleInnerWidthToOk();
                handleScrollTo(ref_scroll_y.current);
            } else {
                ref_more_height.current = getNewMoreHeight();

                if (!ref_has_more_height.current) {
                    handleRefWhenMoreHeightNotOk();
                    handleRemoveScroll();
                } else {
                    handleAddScroll();
                }
            }
        } else if (!new_innerWidth_ok && ref_is_innerWidth_ok.current) {
            handleInnerWidthToNotOk();
            handleScrollTo(ref_scroll_y.current);
        }
    }

    //
    function handleChangeHref() {
        setTimeout(function () {
            if (mounted) {
                calculateAgain();
            }
        }, 0);
    }

    //
    return {
        calculateAgain: calculateAgain,
        ref_main_elm: ref_main_elm,
        ref_preview_elm: ref_preview_elm,
        ref_fake_elm: ref_fake_elm
    };
}

/***/ }),

/***/ "./src/api/api_django/fb_page/page_home_preview.js":
/*!*********************************************************!*\
  !*** ./src/api/api_django/fb_page/page_home_preview.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.API_FbPageHomePreview_R = undefined;

var _AxiosDjango = __webpack_require__(/*! ../_axios/AxiosDjango */ "./src/api/api_django/_axios/AxiosDjango.js");

var _AxiosDjango2 = _interopRequireDefault(_AxiosDjango);

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _page_home_preview = __webpack_require__(/*! ../../../_default/fb_page/page_home_preview */ "./src/_default/fb_page/page_home_preview.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
var API_FbPageHomePreview_R = exports.API_FbPageHomePreview_R = function API_FbPageHomePreview_R(params) {
    return (0, _ConstAPI.API_FakeReal)((0, _page_home_preview.default_fb_page_home_preview_obj)(), function () {
        return (0, _AxiosDjango2.default)({
            url: 'api/facebook/fb-page-home-preview-r/',
            method: 'GET',
            params: params
        });
    }, params);
};
//

/***/ }),

/***/ "./src/api/api_django/fb_page/page_pinned_post.js":
/*!********************************************************!*\
  !*** ./src/api/api_django/fb_page/page_pinned_post.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.API_FbPagePinnedPost_R = undefined;

var _AxiosDjango = __webpack_require__(/*! ../_axios/AxiosDjango */ "./src/api/api_django/_axios/AxiosDjango.js");

var _AxiosDjango2 = _interopRequireDefault(_AxiosDjango);

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _page_pinned_post = __webpack_require__(/*! ../../../_default/fb_page/page_pinned_post */ "./src/_default/fb_page/page_pinned_post.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
var API_FbPagePinnedPost_R = exports.API_FbPagePinnedPost_R = function API_FbPagePinnedPost_R(params) {
    return (0, _ConstAPI.API_FakeReal)((0, _page_pinned_post.default_fb_page_pinned_post_obj)(), function () {
        return (0, _AxiosDjango2.default)({
            url: 'api/facebook/fb-page-pinned-post-r/',
            method: 'GET',
            params: params
        });
    });
};
//

/***/ }),

/***/ "./src/api/api_django/fb_page/page_posts.js":
/*!**************************************************!*\
  !*** ./src/api/api_django/fb_page/page_posts.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.API_FbPagePost_L = undefined;

var _AxiosDjango = __webpack_require__(/*! ../_axios/AxiosDjango */ "./src/api/api_django/_axios/AxiosDjango.js");

var _AxiosDjango2 = _interopRequireDefault(_AxiosDjango);

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _page_posts = __webpack_require__(/*! ../../../_default/fb_page/page_posts */ "./src/_default/fb_page/page_posts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
var API_FbPagePost_L = exports.API_FbPagePost_L = function API_FbPagePost_L() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0, _ConstAPI.API_FakeReal)((0, _page_posts.default_fb_page_post_arr)(), function () {
        return (0, _AxiosDjango2.default)({
            url: 'api/facebook/page-post-l',
            method: 'GET',
            params: params
        });
    }, params);
};
//

/***/ }),

/***/ "./src/component/profile_layout/home_preview_video/_main/PrLayoutHomePreviewVideo.js":
/*!*******************************************************************************************!*\
  !*** ./src/component/profile_layout/home_preview_video/_main/PrLayoutHomePreviewVideo.js ***!
  \*******************************************************************************************/
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

var _UnitNumber = __webpack_require__(/*! ../../../../_some_function/UnitNumber */ "./src/_some_function/UnitNumber.js");

var _title_reacted = __webpack_require__(/*! ../../../../_some_function/post/title_reacted */ "./src/_some_function/post/title_reacted.js");

var _ListUniqueLike = __webpack_require__(/*! ../../../like/List_unique_like/_main/ListUniqueLike */ "./src/component/like/List_unique_like/_main/ListUniqueLike.js");

var _ListUniqueLike2 = _interopRequireDefault(_ListUniqueLike);

__webpack_require__(/*! ./PrLayoutHomePreviewVideo.scss */ "./src/component/profile_layout/home_preview_video/_main/PrLayoutHomePreviewVideo.scss");

var _ProfileLayoutHomePreview = __webpack_require__(/*! ../../home_preview/ProfileLayoutHomePreview */ "./src/component/profile_layout/home_preview/ProfileLayoutHomePreview.js");

var _ProfileLayoutHomePreview2 = _interopRequireDefault(_ProfileLayoutHomePreview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PrLayoutHomePreviewVideo.propTypes = {};

//

//

//
function PrLayoutHomePreviewVideo(_ref) {
    var title = _ref.title,
        link_to = _ref.link_to,
        is_fetching = _ref.is_fetching,
        ProfilePrSkeleton = _ref.ProfilePrSkeleton,
        link_to_item = _ref.link_to_item,
        content = _ref.content,
        thumbnail = _ref.thumbnail,
        video_time = _ref.video_time,
        view_count = _ref.view_count,
        created_time_str = _ref.created_time_str,
        reacted_ix_arr = _ref.reacted_ix_arr,
        reacted_count = _ref.reacted_count,
        user_reacted_ix = _ref.user_reacted_ix,
        on_API_Like_L = _ref.on_API_Like_L,
        onOpenDetailLike = _ref.onOpenDetailLike;

    //
    return _react2.default.createElement(
        _ProfileLayoutHomePreview2.default,
        {
            title: title,
            link_to: link_to,
            is_fetching: is_fetching,
            ProfilePrSkeleton: ProfilePrSkeleton
        },
        _react2.default.createElement(
            'div',
            { className: 'PrLayoutHomePreviewVideo line-20px' },
            _react2.default.createElement(
                _reactRouterDom.Link,
                {
                    className: 'PrLayoutHomePreviewVideo_thumbnail display-block pos-rel color-inherit hv-after-shadow-05',
                    to: link_to_item
                },
                _react2.default.createElement('img', {
                    className: 'pos-abs-100 object-fit-cover',
                    src: thumbnail,
                    alt: ''
                }),
                _react2.default.createElement(
                    'div',
                    { className: 'pos-abs right-0 bottom-0 padding-8px' },
                    _react2.default.createElement(
                        'div',
                        { className: 'padding-x-8px padding-y-5px brs-8px bg-shadow-5 text-white font-500' },
                        video_time
                    )
                )
            ),
            _react2.default.createElement(
                _reactRouterDom.Link,
                {
                    className: 'display-block padding-y-5px text-nowrap font-17px font-600 color-inherit hv-underline',
                    to: link_to_item
                },
                content
            ),
            _react2.default.createElement(
                'div',
                { className: 'font-13px' },
                _react2.default.createElement(_ListUniqueLike2.default, {
                    title: (0, _title_reacted.getPostTitleReacted)({
                        reacted_count: reacted_count,
                        user_reacted_ix: user_reacted_ix
                    }),
                    count_like: reacted_count,
                    arr_unique_like: reacted_ix_arr
                    // div_fix_width={175}
                    //
                    , on_API_Like_L: on_API_Like_L,
                    onOpenDetailLike: onOpenDetailLike
                })
            ),
            _react2.default.createElement(
                _reactRouterDom.Link,
                { className: 'color-inherit hv-underline', to: link_to_item },
                _react2.default.createElement(
                    'div',
                    { className: 'font-13px' },
                    (0, _UnitNumber.UnitNumber)(view_count),
                    ' view',
                    view_count >= 2 ? 's' : '',
                    ' \xB7 ',
                    created_time_str
                )
            )
        )
    );
}

exports.default = PrLayoutHomePreviewVideo;

/***/ }),

/***/ "./src/pages/page/pages/home/_main/FbPageHome.js":
/*!*******************************************************!*\
  !*** ./src/pages/page/pages/home/_main/FbPageHome.js ***!
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

var _Constant = __webpack_require__(/*! ../../../../../_constant/Constant */ "./src/_constant/Constant.js");

var _FbPageHomeRight = __webpack_require__(/*! ../right/_main/FbPageHomeRight */ "./src/pages/page/pages/home/right/_main/FbPageHomeRight.js");

var _FbPageHomeRight2 = _interopRequireDefault(_FbPageHomeRight);

var _FPHomeLeft = __webpack_require__(/*! ../left/_main/FPHomeLeft */ "./src/pages/page/pages/home/left/_main/FPHomeLeft.js");

var _FPHomeLeft2 = _interopRequireDefault(_FPHomeLeft);

__webpack_require__(/*! ./FbPageHome.scss */ "./src/pages/page/pages/home/_main/FbPageHome.scss");

__webpack_require__(/*! ./FbPageHomeRes.scss */ "./src/pages/page/pages/home/_main/FbPageHomeRes.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
FbPageHome.propTypes = {};

//

//
function FbPageHome(_ref) {
    var page_id = _ref.page_id;

    //
    return _react2.default.createElement(
        'div',
        { className: 'FbPageHome' },
        _react2.default.createElement(
            'div',
            { className: 'FbPageHome_row display-flex justify-content-center' },
            _Constant.IS_MOBILE ? null : _react2.default.createElement(
                'div',
                { className: 'FbPageHome_left w-360px margin-right-15px' },
                _react2.default.createElement(_FPHomeLeft2.default, { page_id: page_id })
            ),
            _react2.default.createElement(
                'div',
                { className: 'FbPageHome_right w-500px max-w-100per' },
                _react2.default.createElement(_FbPageHomeRight2.default, { page_id: page_id })
            )
        )
    );
}

exports.default = FbPageHome;

/***/ }),

/***/ "./src/pages/page/pages/home/left/_main/FPHomeLeft.js":
/*!************************************************************!*\
  !*** ./src/pages/page/pages/home/left/_main/FPHomeLeft.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
//

//

//

//

//

//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Constant = __webpack_require__(/*! ../../../../../../_constant/Constant */ "./src/_constant/Constant.js");

var _page_home_preview = __webpack_require__(/*! ../../../../../../_initial/page/page_home_preview */ "./src/_initial/page/page_home_preview.js");

var _page_home_preview2 = __webpack_require__(/*! ../../../../../../_handle_api/fb_page/page_home_preview */ "./src/_handle_api/fb_page/page_home_preview.js");

var _useStickyAuto2 = __webpack_require__(/*! ../../../../../../_hooks/useStickyAuto */ "./src/_hooks/useStickyAuto.js");

var _FPHomeAbout = __webpack_require__(/*! ../about/_main/FPHomeAbout */ "./src/pages/page/pages/home/left/about/_main/FPHomeAbout.js");

var _FPHomeAbout2 = _interopRequireDefault(_FPHomeAbout);

var _FPHomeVideos = __webpack_require__(/*! ../videos/_main/FPHomeVideos */ "./src/pages/page/pages/home/left/videos/_main/FPHomeVideos.js");

var _FPHomeVideos2 = _interopRequireDefault(_FPHomeVideos);

var _FPHomePhotos = __webpack_require__(/*! ../photos/_main/FPHomePhotos */ "./src/pages/page/pages/home/left/photos/_main/FPHomePhotos.js");

var _FPHomePhotos2 = _interopRequireDefault(_FPHomePhotos);

__webpack_require__(/*! ./FPHomeLeft.scss */ "./src/pages/page/pages/home/left/_main/FPHomeLeft.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
FPHomeLeft.propTypes = {};

//
function FPHomeLeft(_ref) {

    // -----

    //
    var getData_API = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _page_home_preview2.handle_API_FbPageHomePreview_R)({ page_id: page_id });

                        case 2:
                            data = _context.sent;


                            setStateObj(function (state_obj) {
                                return _extends({}, state_obj, {
                                    page_preview_obj: data,
                                    has_fetched: true,
                                    is_fetching: false
                                });
                            });

                            setTimeout(function () {
                                if (!_Constant.IS_MOBILE) {
                                    calculateAgain();
                                }
                            }, 100);

                        case 5:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function getData_API() {
            return _ref2.apply(this, arguments);
        };
    }();

    //


    var page_id = _ref.page_id;

    //
    var _useState = (0, _react.useState)({
        page_preview_obj: (0, _page_home_preview.initial_fb_page_home_preview)(),
        has_fetched: false,
        is_fetching: true
    }),
        _useState2 = _slicedToArray(_useState, 2),
        state_obj = _useState2[0],
        setStateObj = _useState2[1];

    var page_preview_obj = state_obj.page_preview_obj,
        has_fetched = state_obj.has_fetched,
        is_fetching = state_obj.is_fetching;
    var info_obj = page_preview_obj.info_obj,
        like_obj = page_preview_obj.like_obj,
        follow_obj = page_preview_obj.follow_obj,
        site_obj = page_preview_obj.site_obj,
        phone_obj = page_preview_obj.phone_obj,
        pic_arr = page_preview_obj.pic_arr,
        video_obj = page_preview_obj.video_obj;

    //

    var _useStickyAuto = (0, _useStickyAuto2.useStickyAuto)({
        sticky_location: /\/page\/\d+\/home$/,
        header_head: _Constant.HEADER_HEAD + 70
    }),
        calculateAgain = _useStickyAuto.calculateAgain,
        ref_main_elm = _useStickyAuto.ref_main_elm,
        ref_preview_elm = _useStickyAuto.ref_preview_elm,
        ref_fake_elm = _useStickyAuto.ref_fake_elm;

    //


    (0, _react.useEffect)(function () {
        getData_API();
    }, []);return _react2.default.createElement(
        'div',
        { ref: ref_main_elm, className: 'FPHomeLeft h-100per' },
        _react2.default.createElement('div', { ref: ref_fake_elm }),
        _react2.default.createElement(
            'div',
            {
                ref: ref_preview_elm,
                className: 'FPHomeLeft_preview pos-sticky padding-bottom-10px'
            },
            _react2.default.createElement(
                'div',
                { className: 'FPHomeLeft_item' },
                _react2.default.createElement(_FPHomeAbout2.default, {
                    page_id: page_id,
                    is_fetching: is_fetching
                    //
                    , info_obj: info_obj,
                    like_obj: like_obj,
                    follow_obj: follow_obj,
                    site_obj: site_obj,
                    phone_obj: phone_obj
                })
            ),
            _react2.default.createElement(
                'div',
                { className: 'FPHomeLeft_pic FPHomeLeft_item' },
                _react2.default.createElement(_FPHomePhotos2.default, {
                    page_id: page_id,
                    pic_arr: pic_arr,
                    is_fetching: is_fetching
                })
            ),
            _react2.default.createElement(
                'div',
                { className: 'FPHomeLeft_item' },
                _react2.default.createElement(_FPHomeVideos2.default, {
                    page_id: page_id,
                    is_fetching: is_fetching,
                    video_obj: video_obj
                })
            )
        )
    );
}

exports.default = FPHomeLeft;

/***/ }),

/***/ "./src/pages/page/pages/home/left/about/_main/FPHomeAbout.js":
/*!*******************************************************************!*\
  !*** ./src/pages/page/pages/home/left/about/_main/FPHomeAbout.js ***!
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

var _ProfileLayoutHomePreview = __webpack_require__(/*! ../../../../../../../component/profile_layout/home_preview/ProfileLayoutHomePreview */ "./src/component/profile_layout/home_preview/ProfileLayoutHomePreview.js");

var _ProfileLayoutHomePreview2 = _interopRequireDefault(_ProfileLayoutHomePreview);

var _SkeletonDiv = __webpack_require__(/*! ../../../../../../../component/skeleton/skeleton_div/SkeletonDiv */ "./src/component/skeleton/skeleton_div/SkeletonDiv.js");

var _SkeletonDiv2 = _interopRequireDefault(_SkeletonDiv);

var _FPHomeAboutInfo = __webpack_require__(/*! ../info/FPHomeAboutInfo */ "./src/pages/page/pages/home/left/about/info/FPHomeAboutInfo.js");

var _FPHomeAboutInfo2 = _interopRequireDefault(_FPHomeAboutInfo);

var _FPHomeAboutLike = __webpack_require__(/*! ../like/FPHomeAboutLike */ "./src/pages/page/pages/home/left/about/like/FPHomeAboutLike.js");

var _FPHomeAboutLike2 = _interopRequireDefault(_FPHomeAboutLike);

var _FPHomeAboutFollow = __webpack_require__(/*! ../follow/FPHomeAboutFollow */ "./src/pages/page/pages/home/left/about/follow/FPHomeAboutFollow.js");

var _FPHomeAboutFollow2 = _interopRequireDefault(_FPHomeAboutFollow);

var _FPHomeAboutSite = __webpack_require__(/*! ../site/FPHomeAboutSite */ "./src/pages/page/pages/home/left/about/site/FPHomeAboutSite.js");

var _FPHomeAboutSite2 = _interopRequireDefault(_FPHomeAboutSite);

var _FPHomeAboutPhone = __webpack_require__(/*! ../phone/FPHomeAboutPhone */ "./src/pages/page/pages/home/left/about/phone/FPHomeAboutPhone.js");

var _FPHomeAboutPhone2 = _interopRequireDefault(_FPHomeAboutPhone);

var _FPHomeAboutChat = __webpack_require__(/*! ../chat/FPHomeAboutChat */ "./src/pages/page/pages/home/left/about/chat/FPHomeAboutChat.js");

var _FPHomeAboutChat2 = _interopRequireDefault(_FPHomeAboutChat);

__webpack_require__(/*! ./FPHomeAbout.scss */ "./src/pages/page/pages/home/left/about/_main/FPHomeAbout.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }
//

//

//


//
function FPHomeAboutSkeleton(_ref) {
    _objectDestructuringEmpty(_ref);

    return _react2.default.createElement(_SkeletonDiv2.default, { num: 6 });
}

//
FPHomeAbout.propTypes = {};

//
function FPHomeAbout(_ref2) {
    var page_id = _ref2.page_id,
        is_fetching = _ref2.is_fetching,
        info_obj = _ref2.info_obj,
        like_obj = _ref2.like_obj,
        follow_obj = _ref2.follow_obj,
        site_obj = _ref2.site_obj,
        phone_obj = _ref2.phone_obj;

    //
    return _react2.default.createElement(
        _ProfileLayoutHomePreview2.default,
        {
            title: 'About',
            link_to: '/page/' + page_id + '/about',
            is_fetching: is_fetching,
            ProfilePrSkeleton: FPHomeAboutSkeleton
        },
        _react2.default.createElement(
            'div',
            { className: 'FPHomeAbout' },
            _react2.default.createElement(
                'div',
                { className: 'FPHomeAbout_item' },
                _react2.default.createElement(_FPHomeAboutInfo2.default, { info_obj: info_obj })
            ),
            _react2.default.createElement(
                'div',
                { className: 'FPHomeAbout_item' },
                _react2.default.createElement(_FPHomeAboutLike2.default, { like_obj: like_obj })
            ),
            _react2.default.createElement(
                'div',
                { className: 'FPHomeAbout_item' },
                _react2.default.createElement(_FPHomeAboutFollow2.default, { follow_obj: follow_obj })
            ),
            _react2.default.createElement(
                'div',
                { className: 'FPHomeAbout_item' },
                _react2.default.createElement(_FPHomeAboutSite2.default, { site_obj: site_obj })
            ),
            _react2.default.createElement(
                'div',
                { className: 'FPHomeAbout_item' },
                _react2.default.createElement(_FPHomeAboutPhone2.default, { phone_obj: phone_obj })
            ),
            _react2.default.createElement(
                'div',
                { className: 'FPHomeAbout_item' },
                _react2.default.createElement(_FPHomeAboutChat2.default, { page_id: page_id })
            )
        )
    );
}

exports.default = FPHomeAbout;

/***/ }),

/***/ "./src/pages/page/pages/home/left/photos/_main/FPHomePhotos.js":
/*!*********************************************************************!*\
  !*** ./src/pages/page/pages/home/left/photos/_main/FPHomePhotos.js ***!
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

var _PrLayoutHomePreviewPics = __webpack_require__(/*! ../../../../../../../component/profile_layout/home_preview_pics/PrLayoutHomePreviewPics */ "./src/component/profile_layout/home_preview_pics/PrLayoutHomePreviewPics.js");

var _PrLayoutHomePreviewPics2 = _interopRequireDefault(_PrLayoutHomePreviewPics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
FPHomePhotos.propTypes = {};

//

//
function FPHomePhotos(_ref) {
    var page_id = _ref.page_id,
        pic_arr = _ref.pic_arr,
        is_fetching = _ref.is_fetching;

    //
    function getLinkItem(item) {
        return '/page/' + page_id + '/photos/' + item.id;
    }

    //
    return _react2.default.createElement(_PrLayoutHomePreviewPics2.default, {
        title: 'Photos',
        link_to: '/page/' + page_id + '/photos',
        is_fetching: is_fetching
        // ProfilePrSkeleton={ProfilePrPicSkeleton}
        , pic_arr: pic_arr,
        getLinkItem: getLinkItem
    });
}

exports.default = FPHomePhotos;

/***/ }),

/***/ "./src/pages/page/pages/home/left/videos/_main/FPHomeVideos.js":
/*!*********************************************************************!*\
  !*** ./src/pages/page/pages/home/left/videos/_main/FPHomeVideos.js ***!
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

var _ContextAPI = __webpack_require__(/*! ../../../../../../../_context/ContextAPI */ "./src/_context/ContextAPI.js");

var _ScreenLike = __webpack_require__(/*! ../../../../../../../component/_screen/type/like/_main/ScreenLike */ "./src/component/_screen/type/like/_main/ScreenLike.js");

var _HandleAPIVidPic = __webpack_require__(/*! ../../../../../../../_handle_api/post/HandleAPIVidPic */ "./src/_handle_api/post/HandleAPIVidPic.js");

var _PrLayoutHomePreviewVideo = __webpack_require__(/*! ../../../../../../../component/profile_layout/home_preview_video/_main/PrLayoutHomePreviewVideo */ "./src/component/profile_layout/home_preview_video/_main/PrLayoutHomePreviewVideo.js");

var _PrLayoutHomePreviewVideo2 = _interopRequireDefault(_PrLayoutHomePreviewVideo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
FPHomeVideos.propTypes = {};

//

//

//
function FPHomeVideos(_ref) {
    var page_id = _ref.page_id,
        is_fetching = _ref.is_fetching,
        video_obj = _ref.video_obj;

    //
    var _useContext = (0, _react.useContext)(_ContextAPI.context_api),
        openScreenFloor = _useContext.openScreenFloor;

    //


    var id = video_obj.id,
        content = video_obj.content,
        thumbnail = video_obj.thumbnail,
        video_time = video_obj.video_time,
        view_count = video_obj.view_count,
        created_time_str = video_obj.created_time_str,
        reacted_ix_arr = video_obj.reacted_ix_arr,
        reacted_count = video_obj.reacted_count,
        user_reacted_ix = video_obj.user_reacted_ix,
        reacted_count_arr = video_obj.reacted_count_arr;

    // -----

    //

    function on_API_Like_L(type_like) {
        return (0, _HandleAPIVidPic.handle_API_PostVidPicLike_L)(id);
    }

    //
    function onOpenDetailLike(type_like) {
        (0, _ScreenLike.openScreenLike)({
            openScreenFloor: openScreenFloor,
            type_like: type_like,
            reacted_count_arr: reacted_count_arr,
            handle_API_Like_L: function handle_API_Like_L(c_count) {
                return (0, _HandleAPIVidPic.handle_API_PostVidPicLike_L)(id, c_count);
            }
        });
    }

    //
    return _react2.default.createElement(_PrLayoutHomePreviewVideo2.default, {
        title: 'Videos',
        link_to: '/page/' + page_id + '/videos',
        is_fetching: is_fetching,
        link_to_item: '/page/' + page_id + '/videos/' + id
        //
        , content: content,
        thumbnail: thumbnail,
        video_time: video_time,
        view_count: view_count,
        created_time_str: created_time_str
        //
        , reacted_ix_arr: reacted_ix_arr,
        reacted_count: reacted_count,
        user_reacted_ix: user_reacted_ix
        //

        //
        , on_API_Like_L: on_API_Like_L,
        onOpenDetailLike: onOpenDetailLike
    });
}

exports.default = FPHomeVideos;

/***/ }),

/***/ "./src/pages/page/pages/home/right/_main/FbPageHomeRight.js":
/*!******************************************************************!*\
  !*** ./src/pages/page/pages/home/right/_main/FbPageHomeRight.js ***!
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

var _InitialPosts = __webpack_require__(/*! ../../../../../../_initial/post/InitialPosts */ "./src/_initial/post/InitialPosts.js");

var _page_posts = __webpack_require__(/*! ../../../../../../_handle_api/fb_page/page_posts */ "./src/_handle_api/fb_page/page_posts.js");

var _useObserverShowMore2 = __webpack_require__(/*! ../../../../../../_hooks/useObserverShowMore */ "./src/_hooks/useObserverShowMore.js");

__webpack_require__(/*! ./FbPageHomeRightCommon.scss */ "./src/pages/page/pages/home/right/_main/FbPageHomeRightCommon.scss");

var _FPHomeCreate = __webpack_require__(/*! ../create/FPHomeCreate */ "./src/pages/page/pages/home/right/create/FPHomeCreate.js");

var _FPHomeCreate2 = _interopRequireDefault(_FPHomeCreate);

var _FPHomePosts = __webpack_require__(/*! ../posts/FPHomePosts */ "./src/pages/page/pages/home/right/posts/FPHomePosts.js");

var _FPHomePosts2 = _interopRequireDefault(_FPHomePosts);

var _FbPageHomePostsPinned = __webpack_require__(/*! ../posts_pinned/_main/FbPageHomePostsPinned */ "./src/pages/page/pages/home/right/posts_pinned/_main/FbPageHomePostsPinned.js");

var _FbPageHomePostsPinned2 = _interopRequireDefault(_FbPageHomePostsPinned);

__webpack_require__(/*! ./FbPageHomeRight.scss */ "./src/pages/page/pages/home/right/_main/FbPageHomeRight.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

// 

// 

//
FbPageHomeRight.propTypes = {};

//

//

//

//
function FbPageHomeRight(_ref) {
    var page_id = _ref.page_id;

    //
    var ref_fake_elm_end = (0, _react.useRef)(null);

    //

    var _useObserverShowMore = (0, _useObserverShowMore2.useObserverShowMore)({
        initial_data_arr: (0, _InitialPosts.initial_posts)(),
        handle_API_L: function handle_API_L(c_count) {
            return (0, _page_posts.handle_API_FbPagePost_L)({
                c_count: c_count,
                page_id: page_id
            });
        }
    }),
        data_state = _useObserverShowMore.data_state,
        setDataState = _useObserverShowMore.setDataState,
        is_max = _useObserverShowMore.is_max,
        refreshData_API = _useObserverShowMore.refreshData_API,
        observerShowMore = _useObserverShowMore.observerShowMore;

    var data_arr = data_state.data_arr,
        is_fetching = data_state.is_fetching,
        has_fetched = data_state.has_fetched;

    //

    (0, _react.useEffect)(function () {
        refreshData_API();

        observerShowMore({
            fake_elm_end: ref_fake_elm_end.current,
            rootMargin: '0px 0px 500px 0px',
            way_scroll: 'to_bottom',
            margin: 500
        });
    }, []);

    //
    return _react2.default.createElement(
        'div',
        { className: 'FbPageHomeRight' },
        _react2.default.createElement(
            'div',
            { className: 'FbPageHomeRight_part' },
            _react2.default.createElement(_FPHomeCreate2.default, null)
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_FbPageHomePostsPinned2.default, { page_id: page_id })
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_FPHomePosts2.default, {
                post_arr: data_arr,
                has_fetched: has_fetched,
                is_fetching: is_fetching
            })
        ),
        _react2.default.createElement('div', { ref: ref_fake_elm_end, className: 'h-1px' }),
        is_max.current ? null : _react2.default.createElement('div', { className: 'h-360px' })
    );
}

exports.default = FbPageHomeRight;

/***/ }),

/***/ "./src/pages/page/pages/home/right/create/FPHomeCreate.js":
/*!****************************************************************!*\
  !*** ./src/pages/page/pages/home/right/create/FPHomeCreate.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AddNewPost = __webpack_require__(/*! ../../../../../../component/posts/common/add_new_post/_main/AddNewPost */ "./src/component/posts/common/add_new_post/_main/AddNewPost.js");

var _AddNewPost2 = _interopRequireDefault(_AddNewPost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 
FPHomeCreate.propTypes = {};

// 

// 
function FPHomeCreate(props) {

    // ------

    // 
    function handleCreatePost(params) {
        console.log(params);
    }

    // 
    return _react2.default.createElement(
        'div',
        { className: 'FPHomeCreate' },
        _react2.default.createElement(_AddNewPost2.default, { handleCreatePost: handleCreatePost })
    );
}

exports.default = FPHomeCreate;

/***/ }),

/***/ "./src/pages/page/pages/home/right/posts/FPHomePosts.js":
/*!**************************************************************!*\
  !*** ./src/pages/page/pages/home/right/posts/FPHomePosts.js ***!
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

var _Posts = __webpack_require__(/*! ../../../../../../component/posts/_posts/_main/Posts */ "./src/component/posts/_posts/_main/Posts.js");

var _Posts2 = _interopRequireDefault(_Posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
FPHomePosts.propTypes = {};

//

//
function FPHomePosts(_ref) {
    var post_arr = _ref.post_arr,
        has_fetched = _ref.has_fetched,
        is_fetching = _ref.is_fetching;

    //
    return _react2.default.createElement(
        'div',
        { className: 'FPHomePosts' },
        _react2.default.createElement(
            'h2',
            { className: 'fb-page-home-title-post' },
            'Other posts'
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_Posts2.default, {
                posts: post_arr,
                has_fetched: has_fetched,
                is_fetching: is_fetching
            })
        )
    );
}

exports.default = FPHomePosts;

/***/ }),

/***/ "./src/pages/page/pages/home/right/posts_pinned/_main/FbPageHomePostsPinned.js":
/*!*************************************************************************************!*\
  !*** ./src/pages/page/pages/home/right/posts_pinned/_main/FbPageHomePostsPinned.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
//

//

//

//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _InitialPosts = __webpack_require__(/*! ../../../../../../../_initial/post/InitialPosts */ "./src/_initial/post/InitialPosts.js");

var _page_pinned_post = __webpack_require__(/*! ../../../../../../../_handle_api/fb_page/page_pinned_post */ "./src/_handle_api/fb_page/page_pinned_post.js");

var _useMounted = __webpack_require__(/*! ../../../../../../../_hooks/useMounted */ "./src/_hooks/useMounted.js");

var _Posts = __webpack_require__(/*! ../../../../../../../component/posts/_posts/_main/Posts */ "./src/component/posts/_posts/_main/Posts.js");

var _Posts2 = _interopRequireDefault(_Posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
FbPageHomePostsPinned.propTypes = {};

//
function FbPageHomePostsPinned(_ref) {

    // --------

    //
    var getData_API_Post = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            setPostState(_extends({}, post_state, {
                                post_arr: [],
                                has_fetched: false,
                                is_fetching: true
                            }));

                            _context.next = 3;
                            return (0, _page_pinned_post.handle_API_FbPagePinnedPost_R)({
                                page_id: page_id,
                                type: 'pinned'
                            });

                        case 3:
                            data = _context.sent;


                            mounted && setPostState({
                                post_arr: data ? [data] : [],
                                has_fetched: true,
                                is_fetching: false
                            });

                        case 5:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function getData_API_Post() {
            return _ref2.apply(this, arguments);
        };
    }();

    // -----

    //


    var page_id = _ref.page_id;

    //
    var _useState = (0, _react.useState)({
        post_arr: [] || 0,
        has_fetched: false,
        is_fetching: false
    }),
        _useState2 = _slicedToArray(_useState, 2),
        post_state = _useState2[0],
        setPostState = _useState2[1];

    var post_arr = post_state.post_arr,
        has_fetched = post_state.has_fetched,
        is_fetching = post_state.is_fetching;

    //

    var mounted = (0, _useMounted.useMounted)();

    //
    (0, _react.useEffect)(function () {
        getData_API_Post();
    }, []);if (post_arr.length == 0) {
        return null;
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'FbPageHomePostsPinned' },
        _react2.default.createElement(
            'h2',
            { className: 'fb-page-home-title-post' },
            'Pinned post'
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_Posts2.default, {
                posts: post_arr,
                has_fetched: has_fetched,
                is_fetching: is_fetching
            })
        )
    );
}

exports.default = FbPageHomePostsPinned;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/profile_layout/home_preview_video/_main/PrLayoutHomePreviewVideo.scss":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/profile_layout/home_preview_video/_main/PrLayoutHomePreviewVideo.scss ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".PrLayoutHomePreviewVideo_thumbnail {\n  padding-top: 56%;\n}", "",{"version":3,"sources":["webpack://./src/component/profile_layout/home_preview_video/_main/PrLayoutHomePreviewVideo.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;AACJ","sourcesContent":[".PrLayoutHomePreviewVideo_thumbnail{\r\n    padding-top: 56%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/pages/home/_main/FbPageHome.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/pages/home/_main/FbPageHome.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/pages/home/_main/FbPageHomeRes.scss":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/pages/home/_main/FbPageHomeRes.scss ***!
  \*********************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@media (max-width: 900px) {\n  .FbPageHome_row {\n    display: block;\n  }\n\n  .FbPageHome_left {\n    margin: auto auto 15px;\n    width: 500px;\n    max-width: 100%;\n  }\n\n  .FbPageHome_right {\n    margin: auto;\n  }\n}", "",{"version":3,"sources":["webpack://./src/pages/page/pages/home/_main/FbPageHomeRes.scss"],"names":[],"mappings":"AACA;EACI;IACI,cAAA;EAAN;;EAGE;IACI,sBAAA;IACA,YAAA;IACA,eAAA;EAAN;;EAGE;IACI,YAAA;EAAN;AACF","sourcesContent":["// \r\n@media (max-width: 900px) {\r\n    .FbPageHome_row{\r\n        display: block;\r\n    }\r\n    // .\r\n    .FbPageHome_left{\r\n        margin: auto auto 15px;\r\n        width: 500px;\r\n        max-width: 100%;\r\n    }\r\n    // .\r\n    .FbPageHome_right{\r\n        margin: auto;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/pages/home/left/_main/FPHomeLeft.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/pages/home/left/_main/FPHomeLeft.scss ***!
  \***********************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".FPHomeLeft_pic {\n  margin: 16px 0;\n}\n\n.device-mobile .FPHomeLeft_preview {\n  padding-bottom: 0;\n}\n.device-mobile .FPHomeLeft_pic {\n  margin: 0;\n  border-top: 1px solid var(--md-bg-blur);\n  border-bottom: 1px solid var(--md-bg-blur);\n}", "",{"version":3,"sources":["webpack://./src/pages/page/pages/home/left/_main/FPHomeLeft.scss"],"names":[],"mappings":"AAAA;EACI,cAAA;AACJ;;AAKI;EACI,iBAAA;AAFR;AAKI;EACI,SAAA;EACA,uCAAA;EACA,0CAAA;AAHR","sourcesContent":[".FPHomeLeft_pic {\r\n    margin: 16px 0;\r\n}\r\n\r\n// ------\r\n\r\n.device-mobile {\r\n    .FPHomeLeft_preview {\r\n        padding-bottom: 0;\r\n    }\r\n\r\n    .FPHomeLeft_pic{\r\n        margin: 0;\r\n        border-top: 1px solid var(--md-bg-blur);\r\n        border-bottom: 1px solid var(--md-bg-blur);\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/pages/home/left/about/_main/FPHomeAbout.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/pages/home/left/about/_main/FPHomeAbout.scss ***!
  \******************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".FPHomeAbout_item {\n  padding: 8px 0;\n}", "",{"version":3,"sources":["webpack://./src/pages/page/pages/home/left/about/_main/FPHomeAbout.scss"],"names":[],"mappings":"AAAA;EACI,cAAA;AACJ","sourcesContent":[".FPHomeAbout_item{\r\n    padding: 8px 0;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/pages/home/right/_main/FbPageHomeRight.scss":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/pages/home/right/_main/FbPageHomeRight.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".FbPageHomeRight_part {\n  margin-bottom: 20px;\n}\n\n.device-mobile .FbPageHomeRight_part {\n  margin-bottom: 15px;\n}", "",{"version":3,"sources":["webpack://./src/pages/page/pages/home/right/_main/FbPageHomeRight.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;AACJ;;AAKI;EACI,mBAAA;AAFR","sourcesContent":[".FbPageHomeRight_part{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n// ------\r\n\r\n.device-mobile{\r\n    .FbPageHomeRight_part{\r\n        margin-bottom: 15px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/pages/home/right/_main/FbPageHomeRightCommon.scss":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/pages/home/right/_main/FbPageHomeRightCommon.scss ***!
  \***********************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".fb-page-home-title-post {\n  padding-bottom: 8px;\n  font-weight: 600;\n  font-size: 15px;\n  color: var(--md-color-secondary);\n  text-transform: uppercase;\n}\n\n.device-mobile .fb-page-home-title-post {\n  padding-left: 8px;\n  text-transform: capitalize;\n}", "",{"version":3,"sources":["webpack://./src/pages/page/pages/home/right/_main/FbPageHomeRightCommon.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EAEA,gBAAA;EACA,eAAA;EACA,gCAAA;EACA,yBAAA;AAAJ;;AAMI;EACI,iBAAA;EACA,0BAAA;AAHR","sourcesContent":[".fb-page-home-title-post{\r\n    padding-bottom: 8px;\r\n\r\n    font-weight: 600;\r\n    font-size: 15px;\r\n    color: var(--md-color-secondary);\r\n    text-transform: uppercase;\r\n}\r\n\r\n// ------\r\n\r\n.device-mobile{\r\n    .fb-page-home-title-post{\r\n        padding-left: 8px;\r\n        text-transform: capitalize;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/component/profile_layout/home_preview_video/_main/PrLayoutHomePreviewVideo.scss":
/*!*********************************************************************************************!*\
  !*** ./src/component/profile_layout/home_preview_video/_main/PrLayoutHomePreviewVideo.scss ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PrLayoutHomePreviewVideo_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./PrLayoutHomePreviewVideo.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/profile_layout/home_preview_video/_main/PrLayoutHomePreviewVideo.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PrLayoutHomePreviewVideo_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PrLayoutHomePreviewVideo_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/page/pages/home/_main/FbPageHome.scss":
/*!*********************************************************!*\
  !*** ./src/pages/page/pages/home/_main/FbPageHome.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageHome_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./FbPageHome.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/pages/home/_main/FbPageHome.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageHome_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageHome_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/page/pages/home/_main/FbPageHomeRes.scss":
/*!************************************************************!*\
  !*** ./src/pages/page/pages/home/_main/FbPageHomeRes.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageHomeRes_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./FbPageHomeRes.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/pages/home/_main/FbPageHomeRes.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageHomeRes_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageHomeRes_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/page/pages/home/left/_main/FPHomeLeft.scss":
/*!**************************************************************!*\
  !*** ./src/pages/page/pages/home/left/_main/FPHomeLeft.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FPHomeLeft_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./FPHomeLeft.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/pages/home/left/_main/FPHomeLeft.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FPHomeLeft_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FPHomeLeft_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/page/pages/home/left/about/_main/FPHomeAbout.scss":
/*!*********************************************************************!*\
  !*** ./src/pages/page/pages/home/left/about/_main/FPHomeAbout.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FPHomeAbout_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../node_modules/sass-loader/dist/cjs.js!./FPHomeAbout.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/pages/home/left/about/_main/FPHomeAbout.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FPHomeAbout_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FPHomeAbout_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/page/pages/home/right/_main/FbPageHomeRight.scss":
/*!********************************************************************!*\
  !*** ./src/pages/page/pages/home/right/_main/FbPageHomeRight.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageHomeRight_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./FbPageHomeRight.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/pages/home/right/_main/FbPageHomeRight.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageHomeRight_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageHomeRight_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/page/pages/home/right/_main/FbPageHomeRightCommon.scss":
/*!**************************************************************************!*\
  !*** ./src/pages/page/pages/home/right/_main/FbPageHomeRightCommon.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageHomeRightCommon_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./FbPageHomeRightCommon.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/pages/home/right/_main/FbPageHomeRightCommon.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageHomeRightCommon_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageHomeRightCommon_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_page_pages_home__main_FbPageHome_js.js.map