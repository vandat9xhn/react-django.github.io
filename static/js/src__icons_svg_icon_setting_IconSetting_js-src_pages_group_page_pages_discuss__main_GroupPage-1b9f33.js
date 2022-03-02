(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src__icons_svg_icon_setting_IconSetting_js-src_pages_group_page_pages_discuss__main_GroupPage-1b9f33"],{

/***/ "./src/_default/fb_group/about_preview.js":
/*!************************************************!*\
  !*** ./src/_default/fb_group/about_preview.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default_fb_group_about_preview_obj = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _IconGroup = __webpack_require__(/*! ../../_icons_svg/icon_group/IconGroup */ "./src/_icons_svg/icon_group/IconGroup.js");

var _IconGroup2 = _interopRequireDefault(_IconGroup);

var _default_content = __webpack_require__(/*! ../_common/default_content */ "./src/_default/_common/default_content.js");

var _getRandomFromArr = __webpack_require__(/*! ../_common/getRandomFromArr */ "./src/_default/_common/getRandomFromArr.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
var default_fb_group_about_preview_obj = exports.default_fb_group_about_preview_obj = function default_fb_group_about_preview_obj() {
    return {
        description: (0, _default_content.getRandomContent)(),
        visibility: (0, _getRandomFromArr.getRandomFromArr)(['Visible', 'Hidden']),
        type_obj: { name: 'general', title: 'General', Icon: _react2.default.createElement(_IconGroup2.default, null) },
        privacy: (0, _getRandomFromArr.getRandomFromArr)(['Public', 'Private'])
    };
};
//

/***/ }),

/***/ "./src/_default/fb_group/media.js":
/*!****************************************!*\
  !*** ./src/_default/fb_group/media.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default_fb_group_media_arr = undefined;

var _default_id = __webpack_require__(/*! ../_common/default_id */ "./src/_default/_common/default_id.js");

var _default_image = __webpack_require__(/*! ../_common/default_image */ "./src/_default/_common/default_image.js");

var _getDefaultArr = __webpack_require__(/*! ../_common/getDefaultArr */ "./src/_default/_common/getDefaultArr.js");

//
var default_fb_group_media_obj = function default_fb_group_media_obj() {
    return {
        id: (0, _default_id.getRandomId)(),
        img: (0, _default_image.getRandomImg)()
    };
};

var default_fb_group_media_arr = exports.default_fb_group_media_arr = function default_fb_group_media_arr(_ref) {
    var _ref$size = _ref.size,
        size = _ref$size === undefined ? 0 : _ref$size;

    return (0, _getDefaultArr.getDefaultArr)(default_fb_group_media_obj, size == 4 ? 4 : size, size);
};

/***/ }),

/***/ "./src/_handle_api/fb_group/about_preview.js":
/*!***************************************************!*\
  !*** ./src/_handle_api/fb_group/about_preview.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handle_API_GroupAboutPreview_R = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var handle_API_GroupAboutPreview_R = exports.handle_API_GroupAboutPreview_R = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
        var _ref2$group_id = _ref2.group_id,
            group_id = _ref2$group_id === undefined ? 0 : _ref2$group_id,
            _ref2$params = _ref2.params,
            params = _ref2$params === undefined ? {} : _ref2$params;
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _about_preview.API_GroupAboutPreview_R)(_extends({
                            group_model: group_id
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

    return function handle_API_GroupAboutPreview_R(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _about_preview = __webpack_require__(/*! ../../api/api_django/fb_group/about_preview */ "./src/api/api_django/fb_group/about_preview.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/_handle_api/fb_group/media.js":
/*!*******************************************!*\
  !*** ./src/_handle_api/fb_group/media.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handle_API_FbGroupMedia_L = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var handle_API_FbGroupMedia_L = exports.handle_API_FbGroupMedia_L = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
        var _ref2$c_count = _ref2.c_count,
            c_count = _ref2$c_count === undefined ? 0 : _ref2$c_count,
            _ref2$group_id = _ref2.group_id,
            group_id = _ref2$group_id === undefined ? 0 : _ref2$group_id,
            _ref2$params = _ref2.params,
            params = _ref2$params === undefined ? {} : _ref2$params;
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _media.FbGroupMedia_L)(_extends({
                            page: 1,
                            size: 20,
                            c_count: c_count,
                            group_model: group_id
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

    return function handle_API_FbGroupMedia_L(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _media = __webpack_require__(/*! ../../api/api_django/fb_group/media */ "./src/api/api_django/fb_group/media.js");

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

/***/ "./src/_icons_svg/icon_setting/IconSetting.js":
/*!****************************************************!*\
  !*** ./src/_icons_svg/icon_setting/IconSetting.js ***!
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

__webpack_require__(/*! ./IconSetting.scss */ "./src/_icons_svg/icon_setting/IconSetting.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
IconSetting.propTypes = {
    fill: _propTypes2.default.string,
    size_icon: _propTypes2.default.string,
    stroke: _propTypes2.default.string,
    stroke_width: _propTypes2.default.number
};
//


IconSetting.defaultProps = {
    fill: 'none',
    size_icon: '1rem',
    stroke: 'var(--md-color)',
    stroke_width: 10
};

//
function IconSetting(_ref) {
    var size_icon = _ref.size_icon,
        fill = _ref.fill,
        stroke = _ref.stroke,
        stroke_width = _ref.stroke_width;

    //
    return _react2.default.createElement(
        'svg',
        {
            className: 'IconSetting',
            width: size_icon,
            height: size_icon,
            viewBox: '0 0 200 200',
            fill: fill,
            strokeWidth: stroke_width,
            stroke: stroke,
            strokeLinecap: 'round',
            strokeLinejoin: 'round'
        },
        _react2.default.createElement('path', { d: 'M113.576 20C113.576 20 114.534 35.5711 116.97 39.3189L132.821 45.7585L147.515 32.3839L166.92 52.1981L154.303 67.908L160.1 85.7408H180V113.622L160.1 116.736L154.303 132.941L166.92 148.297L147.03 168.111L132.821 154.737L115.771 160.469L113.576 180H86.4242L85.4545 160.469L69.4545 154.737L53.4545 168.111L33.9327 148.297L47.1515 132.941L40.3263 116.736L20 113.622V85.7408H40.3263L47.1515 67.908L33.9327 52.1981L53.4545 32.3839L69.4545 45.7585L85.4545 39.3189L86.4242 20H113.576Z' }),
        _react2.default.createElement('circle', {
            className: 'IconSetting_circle',
            cx: '100',
            cy: '100',
            r: '30',
            fill: 'none'
        })
    );
}

exports.default = IconSetting;

/***/ }),

/***/ "./src/api/api_django/fb_group/about_preview.js":
/*!******************************************************!*\
  !*** ./src/api/api_django/fb_group/about_preview.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.API_GroupAboutPreview_R = undefined;

var _AxiosDjango = __webpack_require__(/*! ../_axios/AxiosDjango */ "./src/api/api_django/_axios/AxiosDjango.js");

var _AxiosDjango2 = _interopRequireDefault(_AxiosDjango);

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _about_preview = __webpack_require__(/*! ../../../_default/fb_group/about_preview */ "./src/_default/fb_group/about_preview.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
var API_GroupAboutPreview_R = exports.API_GroupAboutPreview_R = function API_GroupAboutPreview_R() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0, _ConstAPI.API_FakeReal)((0, _about_preview.default_fb_group_about_preview_obj)(), function () {
        return (0, _AxiosDjango2.default)({
            url: 'api/facebook/group-about-preview-r',
            method: 'GET',
            params: params
        });
    });
};
//

/***/ }),

/***/ "./src/api/api_django/fb_group/media.js":
/*!**********************************************!*\
  !*** ./src/api/api_django/fb_group/media.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.FbGroupMedia_L = undefined;

var _AxiosDjango = __webpack_require__(/*! ../_axios/AxiosDjango */ "./src/api/api_django/_axios/AxiosDjango.js");

var _AxiosDjango2 = _interopRequireDefault(_AxiosDjango);

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _media = __webpack_require__(/*! ../../../_default/fb_group/media */ "./src/_default/fb_group/media.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
var FbGroupMedia_L = exports.FbGroupMedia_L = function FbGroupMedia_L(params) {
    return (0, _ConstAPI.API_FakeReal)((0, _media.default_fb_group_media_arr)({ size: params['size'] }), function () {
        return (0, _AxiosDjango2.default)({
            url: 'api/facebook/group-media-l/',
            method: 'GET',
            params: params
        });
    }, params);
};
//

/***/ }),

/***/ "./src/pages/group_page/_components/about_description/GPAboutDescription.js":
/*!**********************************************************************************!*\
  !*** ./src/pages/group_page/_components/about_description/GPAboutDescription.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _useBool2 = __webpack_require__(/*! ../../../../_hooks/useBool */ "./src/_hooks/useBool.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GPAboutDescription.propTypes = {};

//

//
function GPAboutDescription(_ref) {
    var description = _ref.description,
        handleReady = _ref.handleReady;

    //
    var _useBool = (0, _useBool2.useBool)(),
        is_true = _useBool.is_true,
        toggleBool = _useBool.toggleBool;

    // -----

    //


    function onToggleBool() {
        handleReady && handleReady();
        toggleBool();
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'GPAboutDescription' },
        _react2.default.createElement(
            'span',
            null,
            description.slice(0, is_true ? undefined : 100)
        ),
        ' ',
        description.length <= 100 ? null : _react2.default.createElement(
            'span',
            {
                className: 'font-500 cursor-pointer hv-underline',
                onClick: onToggleBool
            },
            'See ',
            is_true ? 'less' : 'more'
        )
    );
}

exports.default = GPAboutDescription;

/***/ }),

/***/ "./src/pages/group_page/_components/about_part/GroupPageAboutPart.js":
/*!***************************************************************************!*\
  !*** ./src/pages/group_page/_components/about_part/GroupPageAboutPart.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ./GroupPageAboutPart.scss */ "./src/pages/group_page/_components/about_part/GroupPageAboutPart.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GroupPageAboutPart.propTypes = {};

//

//
function GroupPageAboutPart(_ref) {
    var Icon = _ref.Icon,
        title = _ref.title,
        info = _ref.info;

    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupPageAboutPart' },
        _react2.default.createElement(
            'div',
            { className: 'display-flex align-items-start' },
            _react2.default.createElement(
                'div',
                { className: 'padding-x-6px padding-top-10px font-12px line-16px' },
                Icon
            ),
            _react2.default.createElement(
                'div',
                { className: 'padding-6px' },
                _react2.default.createElement(
                    'div',
                    { className: 'font-17px font-500' },
                    title
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'font-13px' },
                    info
                )
            )
        )
    );
}

exports.default = GroupPageAboutPart;

/***/ }),

/***/ "./src/pages/group_page/_components/about_privacy/GPAboutPrivacy.js":
/*!**************************************************************************!*\
  !*** ./src/pages/group_page/_components/about_privacy/GPAboutPrivacy.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconPublic = __webpack_require__(/*! ../../../../_icons_svg/icon_public/IconPublic */ "./src/_icons_svg/icon_public/IconPublic.js");

var _IconPublic2 = _interopRequireDefault(_IconPublic);

var _IconPrivate = __webpack_require__(/*! ../../../../_icons_svg/icon_private/IconPrivate */ "./src/_icons_svg/icon_private/IconPrivate.js");

var _IconPrivate2 = _interopRequireDefault(_IconPrivate);

var _GroupPageAboutPart = __webpack_require__(/*! ../about_part/GroupPageAboutPart */ "./src/pages/group_page/_components/about_part/GroupPageAboutPart.js");

var _GroupPageAboutPart2 = _interopRequireDefault(_GroupPageAboutPart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GPAboutPrivacy.propTypes = {};

//

//

//
function GPAboutPrivacy(_ref) {
    var privacy = _ref.privacy;

    //
    var is_public = privacy.toUpperCase() == 'PUBLIC';

    //
    return _react2.default.createElement(
        'div',
        { className: 'GPAboutPrivacy' },
        _react2.default.createElement(_GroupPageAboutPart2.default, {
            Icon: is_public ? _react2.default.createElement(_IconPublic2.default, null) : _react2.default.createElement(_IconPrivate2.default, null),
            title: privacy,
            info: is_public ? "Anyone can see who's in the group and what they post." : "Only members can see who's in the group and what they post."
        })
    );
}

exports.default = GPAboutPrivacy;

/***/ }),

/***/ "./src/pages/group_page/_components/about_see_all/GroupPageAboutSeeAll.js":
/*!********************************************************************************!*\
  !*** ./src/pages/group_page/_components/about_see_all/GroupPageAboutSeeAll.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GroupPageAboutSeeAll.propTypes = {};

//
function GroupPageAboutSeeAll(_ref) {
    var link_to = _ref.link_to;

    // 
    return _react2.default.createElement(
        _reactRouterDom.Link,
        {
            className: 'display-flex-center h-36px brs-6px bg-ccc color-inherit font-600 hv-bg-hv',
            to: link_to
        },
        'See All'
    );
}

exports.default = GroupPageAboutSeeAll;

/***/ }),

/***/ "./src/pages/group_page/_components/about_visibility/GPAboutVisibility.js":
/*!********************************************************************************!*\
  !*** ./src/pages/group_page/_components/about_visibility/GPAboutVisibility.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconsEye = __webpack_require__(/*! ../../../../_icons_svg/icons_eye/IconsEye */ "./src/_icons_svg/icons_eye/IconsEye.js");

var _IconsEye2 = _interopRequireDefault(_IconsEye);

var _GroupPageAboutPart = __webpack_require__(/*! ../about_part/GroupPageAboutPart */ "./src/pages/group_page/_components/about_part/GroupPageAboutPart.js");

var _GroupPageAboutPart2 = _interopRequireDefault(_GroupPageAboutPart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
GPAboutVisibility.propTypes = {};

//

// 
function GPAboutVisibility(_ref) {
    var visibility = _ref.visibility;

    //
    var is_visible = visibility.toUpperCase() == 'VISIBLE';

    //
    return _react2.default.createElement(
        'div',
        { className: 'GPAboutVisibility' },
        _react2.default.createElement(_GroupPageAboutPart2.default, {
            Icon: _react2.default.createElement(_IconsEye2.default, { close_eye: !is_visible }),
            title: visibility,
            info: is_visible ? 'Anyone can find this group.' : 'Only members can find this group.'
        })
    );
}

exports.default = GPAboutVisibility;

/***/ }),

/***/ "./src/pages/group_page/pages/discuss/_main/GroupPageDiscuss.js":
/*!**********************************************************************!*\
  !*** ./src/pages/group_page/pages/discuss/_main/GroupPageDiscuss.js ***!
  \**********************************************************************/
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

var _GroupPageDiscussLeft = __webpack_require__(/*! ../left/_main/GroupPageDiscussLeft */ "./src/pages/group_page/pages/discuss/left/_main/GroupPageDiscussLeft.js");

var _GroupPageDiscussLeft2 = _interopRequireDefault(_GroupPageDiscussLeft);

var _GroupPageDiscussRight = __webpack_require__(/*! ../right/_main/GroupPageDiscussRight */ "./src/pages/group_page/pages/discuss/right/_main/GroupPageDiscussRight.js");

var _GroupPageDiscussRight2 = _interopRequireDefault(_GroupPageDiscussRight);

var _GroupPageDiscussPrivate = __webpack_require__(/*! ../private/GroupPageDiscussPrivate */ "./src/pages/group_page/pages/discuss/private/GroupPageDiscussPrivate.js");

var _GroupPageDiscussPrivate2 = _interopRequireDefault(_GroupPageDiscussPrivate);

__webpack_require__(/*! ./GroupPageDiscuss.scss */ "./src/pages/group_page/pages/discuss/_main/GroupPageDiscuss.scss");

__webpack_require__(/*! ./GroupPageDiscussRes.scss */ "./src/pages/group_page/pages/discuss/_main/GroupPageDiscussRes.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
GroupPageDiscuss.propTypes = {};

//

// 
function GroupPageDiscuss(_ref) {
    var group_id = _ref.group_id,
        is_admin = _ref.is_admin,
        bg_btn = _ref.bg_btn,
        no_permission = _ref.no_permission;

    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupPageDiscuss' },
        _react2.default.createElement(
            'div',
            { className: 'GroupPageDiscuss_row display-flex justify-content-center' },
            _react2.default.createElement(
                'div',
                { className: 'GroupPageDiscuss_left w-500px margin-right-15px' },
                no_permission ? _react2.default.createElement(_GroupPageDiscussPrivate2.default, null) : _react2.default.createElement(_GroupPageDiscussLeft2.default, {
                    group_id: group_id,
                    bg_btn: bg_btn
                })
            ),
            _Constant.IS_MOBILE ? null : _react2.default.createElement(
                'div',
                { className: 'GroupPageDiscuss_right w-360px' },
                _react2.default.createElement(_GroupPageDiscussRight2.default, {
                    group_id: group_id,
                    is_admin: is_admin,
                    no_permission: no_permission
                })
            )
        )
    );
}

exports.default = GroupPageDiscuss;

/***/ }),

/***/ "./src/pages/group_page/pages/discuss/left/_main/GroupPageDiscussLeft.js":
/*!*******************************************************************************!*\
  !*** ./src/pages/group_page/pages/discuss/left/_main/GroupPageDiscussLeft.js ***!
  \*******************************************************************************/
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

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _useObserverShowMore2 = __webpack_require__(/*! ../../../../../../_hooks/useObserverShowMore */ "./src/_hooks/useObserverShowMore.js");

var _GroupPageDiscussCreate = __webpack_require__(/*! ../create/GroupPageDiscussCreate */ "./src/pages/group_page/pages/discuss/left/create/GroupPageDiscussCreate.js");

var _GroupPageDiscussCreate2 = _interopRequireDefault(_GroupPageDiscussCreate);

var _GroupPageDiscussPosts = __webpack_require__(/*! ../posts/_main/GroupPageDiscussPosts */ "./src/pages/group_page/pages/discuss/left/posts/_main/GroupPageDiscussPosts.js");

var _GroupPageDiscussPosts2 = _interopRequireDefault(_GroupPageDiscussPosts);

var _GroupPageDiscussSort = __webpack_require__(/*! ../sort/GroupPageDiscussSort */ "./src/pages/group_page/pages/discuss/left/sort/GroupPageDiscussSort.js");

var _GroupPageDiscussSort2 = _interopRequireDefault(_GroupPageDiscussSort);

__webpack_require__(/*! ./GroupPageDiscussLeft.scss */ "./src/pages/group_page/pages/discuss/left/_main/GroupPageDiscussLeft.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
GroupPageDiscussLeft.propTypes = {};

//

//

//

//
function GroupPageDiscussLeft(_ref) {
    var group_id = _ref.group_id,
        bg_btn = _ref.bg_btn;

    //
    var ref_fake_elm_end = (0, _react.useRef)(null);
    var ref_sort_obj = (0, _react.useRef)({
        name: 'new',
        title: 'New activity'
    });

    //

    var _useObserverShowMore = (0, _useObserverShowMore2.useObserverShowMore)({
        initial_data_arr: (0, _InitialPosts.initial_posts)(),
        handle_API_L: function handle_API_L(c_count) {
            return (0, _ProfileHandleAPI.handle_API_ProfilePost_L)({
                c_count: c_count,
                group_id: group_id
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

    // -----

    //
    function handleChangeSort() {
        var new_sort_obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ref_sort_obj.current;

        if (new_sort_obj.name == ref_sort_obj.current.name) {
            return;
        }

        ref_sort_obj.current = new_sort_obj;
        refreshData_API();
    }

    //
    function handleCreatePost() {
        for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
            params[_key] = arguments[_key];
        }

        console.log(params);
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupPageDiscussLeft' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_GroupPageDiscussCreate2.default, { handleCreatePost: handleCreatePost })
        ),
        _react2.default.createElement(
            'div',
            {
                className: 'margin-top-15px ' + (is_fetching || !has_fetched ? 'pointer-events-none' : '')
            },
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_GroupPageDiscussSort2.default, {
                    sort_obj: ref_sort_obj.current,
                    bg_btn: bg_btn,
                    handleChangeSort: handleChangeSort
                })
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_GroupPageDiscussPosts2.default, {
                    post_arr: data_arr,
                    has_fetched: has_fetched,
                    is_fetching: is_fetching
                })
            ),
            _react2.default.createElement('div', { ref: ref_fake_elm_end, className: 'padding-1px' }),
            is_max.current ? null : _react2.default.createElement('div', { className: 'GroupPageDiscussLeft_skeleton' })
        )
    );
}

exports.default = GroupPageDiscussLeft;

/***/ }),

/***/ "./src/pages/group_page/pages/discuss/left/create/GroupPageDiscussCreate.js":
/*!**********************************************************************************!*\
  !*** ./src/pages/group_page/pages/discuss/left/create/GroupPageDiscussCreate.js ***!
  \**********************************************************************************/
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
GroupPageDiscussCreate.propTypes = {};

//

//
function GroupPageDiscussCreate(_ref) {
    var handleCreatePost = _ref.handleCreatePost;

    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupPageDiscussCreate' },
        _react2.default.createElement(_AddNewPost2.default
        // title=""
        , { handleCreatePost: handleCreatePost
        })
    );
}

exports.default = GroupPageDiscussCreate;

/***/ }),

/***/ "./src/pages/group_page/pages/discuss/left/posts/_main/GroupPageDiscussPosts.js":
/*!**************************************************************************************!*\
  !*** ./src/pages/group_page/pages/discuss/left/posts/_main/GroupPageDiscussPosts.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Posts = __webpack_require__(/*! ../../../../../../../component/posts/_posts/_main/Posts */ "./src/component/posts/_posts/_main/Posts.js");

var _Posts2 = _interopRequireDefault(_Posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GroupPageDiscussPosts.propTypes = {};

//

// 
function GroupPageDiscussPosts(_ref) {
    var post_arr = _ref.post_arr,
        has_fetched = _ref.has_fetched,
        is_fetching = _ref.is_fetching;

    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupPageDiscussPosts' },
        _react2.default.createElement(_Posts2.default, {
            posts: post_arr,
            has_fetched: has_fetched,
            is_fetching: is_fetching
        })
    );
}

exports.default = GroupPageDiscussPosts;

/***/ }),

/***/ "./src/pages/group_page/pages/discuss/left/sort/GroupPageDiscussSort.js":
/*!******************************************************************************!*\
  !*** ./src/pages/group_page/pages/discuss/left/sort/GroupPageDiscussSort.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconCaret = __webpack_require__(/*! ../../../../../../_icons_svg/_icon_caret/IconCaret */ "./src/_icons_svg/_icon_caret/IconCaret.js");

var _IconCaret2 = _interopRequireDefault(_IconCaret);

var _IconSent = __webpack_require__(/*! ../../../../../../_icons_svg/icons_status_message/icon_sent/IconSent */ "./src/_icons_svg/icons_status_message/icon_sent/IconSent.js");

var _IconSent2 = _interopRequireDefault(_IconSent);

var _ActionsMultiList = __webpack_require__(/*! ../../../../../../component/actions_multi_list/_main/ActionsMultiList */ "./src/component/actions_multi_list/_main/ActionsMultiList.js");

var _ActionsMultiList2 = _interopRequireDefault(_ActionsMultiList);

var _ActionsMultiListItem = __webpack_require__(/*! ../../../../../../component/actions_multi_list/item/ActionsMultiListItem */ "./src/component/actions_multi_list/item/ActionsMultiListItem.js");

var _ActionsMultiListItem2 = _interopRequireDefault(_ActionsMultiListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
var ComponentItem = function ComponentItem(props) {
    //
    return _react2.default.createElement(
        'div',
        { className: 'flex-between-center' },
        _react2.default.createElement(
            'div',
            { className: 'flex-grow-1 margin-right-5px' },
            _react2.default.createElement(_ActionsMultiListItem2.default, props)
        ),
        _react2.default.createElement(_IconSent2.default, {
            stroke: '' + (props.is_active ? 'var(--blue)' : 'transparent')
        })
    );
};

//
GroupPageDiscussSort.propTypes = {};

//
function GroupPageDiscussSort(_ref) {
    var sort_obj = _ref.sort_obj,
        bg_btn = _ref.bg_btn,
        handleChangeSort = _ref.handleChangeSort;

    //
    var ref_list = (0, _react.useRef)([[]]);

    // -----

    //
    function handle_API_L() {
        var action_arr = [[{
            name: 'new',
            title: 'New activity',
            info: 'See posts with recent comments first',
            is_active: sort_obj.name == 'new'
        }, {
            name: 'recent',
            title: 'Recent posts',
            info: 'See most recent posts first',
            is_active: sort_obj.name == 'recent'
        }]];

        ref_list.current = action_arr;

        return action_arr;
    }

    //
    function onAction() {
        var action_name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        var new_sort_obj = ref_list.current[0].find(function (item) {
            return item.name == action_name;
        });

        handleChangeSort({
            name: new_sort_obj.name,
            title: new_sort_obj.title
        });
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupPageDiscussSort display-flex' },
        _react2.default.createElement(_ActionsMultiList2.default, {
            title_action: _react2.default.createElement(
                'div',
                {
                    className: 'display-flex font-600 font-17px',
                    style: { color: bg_btn }
                },
                _react2.default.createElement(
                    'div',
                    { className: 'padding-8px cursor-pointer' },
                    _react2.default.createElement(
                        'div',
                        { className: 'inline-block margin-right-8px' },
                        sort_obj.title
                    ),
                    _react2.default.createElement(_IconCaret2.default, { fill: 'currentColor', size_icon: '12px' })
                )
            )
            //
            , deps_reset_api: [sort_obj.name],
            ComponentItem: ComponentItem
            //
            , handle_API_L: handle_API_L,
            handleAction: onAction
        })
    );
}

exports.default = GroupPageDiscussSort;

/***/ }),

/***/ "./src/pages/group_page/pages/discuss/private/GroupPageDiscussPrivate.js":
/*!*******************************************************************************!*\
  !*** ./src/pages/group_page/pages/discuss/private/GroupPageDiscussPrivate.js ***!
  \*******************************************************************************/
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

GroupPageDiscussPrivate.propTypes = {};

function GroupPageDiscussPrivate(props) {
    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupPageDiscussPrivate h-360px brs-8px-pc bg-primary box-shadow-1 text-secondary' },
        _react2.default.createElement(
            'div',
            { className: 'display-flex-center flex-col h-100per text-align-center' },
            _react2.default.createElement(
                'div',
                { className: 'margin-bottom-10px font-20px font-700' },
                'This group is private'
            ),
            _react2.default.createElement(
                'div',
                { className: 'font-17px' },
                'Join this group to view or participate in discussions.'
            )
        )
    );
}

exports.default = GroupPageDiscussPrivate;

/***/ }),

/***/ "./src/pages/group_page/pages/discuss/right/_main/GroupPageDiscussRight.js":
/*!*********************************************************************************!*\
  !*** ./src/pages/group_page/pages/discuss/right/_main/GroupPageDiscussRight.js ***!
  \*********************************************************************************/
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

var _useStickyAuto = __webpack_require__(/*! ../../../../../../_hooks/useStickyAuto */ "./src/_hooks/useStickyAuto.js");

__webpack_require__(/*! ./GroupPageDiscussRightCommon.scss */ "./src/pages/group_page/pages/discuss/right/_main/GroupPageDiscussRightCommon.scss");

var _GroupPageDiscussAbout = __webpack_require__(/*! ../about/_main/GroupPageDiscussAbout */ "./src/pages/group_page/pages/discuss/right/about/_main/GroupPageDiscussAbout.js");

var _GroupPageDiscussAbout2 = _interopRequireDefault(_GroupPageDiscussAbout);

var _GPDTopics = __webpack_require__(/*! ../topics/_main/GPDTopics */ "./src/pages/group_page/pages/discuss/right/topics/_main/GPDTopics.js");

var _GPDTopics2 = _interopRequireDefault(_GPDTopics);

var _GPDMedia = __webpack_require__(/*! ../media/_main/GPDMedia */ "./src/pages/group_page/pages/discuss/right/media/_main/GPDMedia.js");

var _GPDMedia2 = _interopRequireDefault(_GPDMedia);

__webpack_require__(/*! ./GroupPageDiscussRight.scss */ "./src/pages/group_page/pages/discuss/right/_main/GroupPageDiscussRight.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
GroupPageDiscussRight.propTypes = {};

//

//

//

//
function GroupPageDiscussRight(_ref) {
    var group_id = _ref.group_id,
        is_admin = _ref.is_admin,
        no_permission = _ref.no_permission;

    //
    var _ref2 = !_Constant.IS_MOBILE ? (0, _useStickyAuto.useStickyAuto)({
        sticky_location: /\/group\/\d+\/discuss$/,
        header_head: _Constant.HEADER_HEAD + 70
    }) : {},
        calculateAgain = _ref2.calculateAgain,
        ref_main_elm = _ref2.ref_main_elm,
        ref_preview_elm = _ref2.ref_preview_elm,
        ref_fake_elm = _ref2.ref_fake_elm;

    // ------

    //


    function handleReady() {
        if (_Constant.IS_MOBILE) {
            return;
        }

        setTimeout(function () {
            calculateAgain();
        }, 0);
    }

    //
    return _react2.default.createElement(
        'div',
        { ref: ref_main_elm, className: 'GroupPageDiscussRight h-100per' },
        _react2.default.createElement('div', { ref: ref_fake_elm }),
        _react2.default.createElement(
            'div',
            {
                ref: ref_preview_elm,
                className: 'GroupPageDiscussRight_contain pos-sticky padding-bottom-10px'
            },
            _react2.default.createElement(
                'div',
                { className: 'margin-bottom-15px' },
                _react2.default.createElement(_GroupPageDiscussAbout2.default, {
                    group_id: group_id,
                    handleReady: handleReady
                })
            ),
            no_permission ? null : _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'margin-bottom-15px' },
                    _react2.default.createElement(_GPDTopics2.default, {
                        group_id: group_id,
                        is_admin: is_admin,
                        handleReady: handleReady
                    })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_GPDMedia2.default, {
                        group_id: group_id,
                        handleReady: handleReady
                    })
                )
            )
        )
    );
}

exports.default = GroupPageDiscussRight;

/***/ }),

/***/ "./src/pages/group_page/pages/discuss/right/about/_main/GroupPageDiscussAbout.js":
/*!***************************************************************************************!*\
  !*** ./src/pages/group_page/pages/discuss/right/about/_main/GroupPageDiscussAbout.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
//

//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _about_preview = __webpack_require__(/*! ../../../../../../../_handle_api/fb_group/about_preview */ "./src/_handle_api/fb_group/about_preview.js");

var _GPDAboutContain = __webpack_require__(/*! ../contain/GPDAboutContain */ "./src/pages/group_page/pages/discuss/right/about/contain/GPDAboutContain.js");

var _GPDAboutContain2 = _interopRequireDefault(_GPDAboutContain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
GroupPageDiscussAbout.propTypes = {};

//
function GroupPageDiscussAbout(_ref) {

    // ------

    //
    var getData_API = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _about_preview.handle_API_GroupAboutPreview_R)({
                                group_id: group_id
                            });

                        case 2:
                            data = _context.sent;


                            setStateObj(function (state_obj) {
                                return _extends({}, state_obj, {
                                    about_obj: data,
                                    has_fetched: true
                                });
                            });

                            handleReady();

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


    var group_id = _ref.group_id,
        handleReady = _ref.handleReady;

    //
    var _useState = (0, _react.useState)({
        about_obj: {
            description: '',
            privacy: '',
            visibility: '',
            type_obj: { name: '', title: '', Icon: null }
        },
        has_fetched: false
    }),
        _useState2 = _slicedToArray(_useState, 2),
        state_obj = _useState2[0],
        setStateObj = _useState2[1];

    var about_obj = state_obj.about_obj,
        has_fetched = state_obj.has_fetched;
    var description = about_obj.description,
        privacy = about_obj.privacy,
        visibility = about_obj.visibility,
        type_obj = about_obj.type_obj;

    //

    (0, _react.useEffect)(function () {
        getData_API();
    }, []);return _react2.default.createElement(
        'div',
        { className: 'GroupPageDiscussAbout GroupPageDiscussRight_part_contain' },
        _react2.default.createElement(
            'h2',
            { className: 'GroupPageDiscussRight_part_title margin-bottom-8px' },
            'About'
        ),
        _react2.default.createElement(_GPDAboutContain2.default, {
            description: description,
            privacy: privacy,
            visibility: visibility,
            type_obj: type_obj,
            has_fetched: has_fetched
            //
            , handleReady: handleReady
        })
    );
}

exports.default = GroupPageDiscussAbout;

/***/ }),

/***/ "./src/pages/group_page/pages/discuss/right/about/contain/GPDAboutContain.js":
/*!***********************************************************************************!*\
  !*** ./src/pages/group_page/pages/discuss/right/about/contain/GPDAboutContain.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GPAboutDescription = __webpack_require__(/*! ../../../../../_components/about_description/GPAboutDescription */ "./src/pages/group_page/_components/about_description/GPAboutDescription.js");

var _GPAboutDescription2 = _interopRequireDefault(_GPAboutDescription);

var _GPAboutPrivacy = __webpack_require__(/*! ../../../../../_components/about_privacy/GPAboutPrivacy */ "./src/pages/group_page/_components/about_privacy/GPAboutPrivacy.js");

var _GPAboutPrivacy2 = _interopRequireDefault(_GPAboutPrivacy);

var _GPAboutVisibility = __webpack_require__(/*! ../../../../../_components/about_visibility/GPAboutVisibility */ "./src/pages/group_page/_components/about_visibility/GPAboutVisibility.js");

var _GPAboutVisibility2 = _interopRequireDefault(_GPAboutVisibility);

var _GroupPageAboutPart = __webpack_require__(/*! ../../../../../_components/about_part/GroupPageAboutPart */ "./src/pages/group_page/_components/about_part/GroupPageAboutPart.js");

var _GroupPageAboutPart2 = _interopRequireDefault(_GroupPageAboutPart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
GPDAboutContain.propTypes = {};

//
function GPDAboutContain(_ref) {
    var description = _ref.description,
        privacy = _ref.privacy,
        visibility = _ref.visibility,
        type_obj = _ref.type_obj,
        has_fetched = _ref.has_fetched,
        handleReady = _ref.handleReady;

    //
    return _react2.default.createElement(
        'div',
        { className: '' + (has_fetched ? '' : 'h-360px') },
        description ? _react2.default.createElement(
            'div',
            { className: 'GPDAboutContain_part' },
            _react2.default.createElement(_GPAboutDescription2.default, {
                description: description,
                handleReady: handleReady
            })
        ) : null,
        _react2.default.createElement(
            'div',
            { className: 'GPDAboutContain_part' },
            _react2.default.createElement(_GPAboutPrivacy2.default, { privacy: privacy })
        ),
        _react2.default.createElement(
            'div',
            { className: 'GPDAboutContain_part' },
            _react2.default.createElement(_GPAboutVisibility2.default, { visibility: visibility })
        ),
        _react2.default.createElement(
            'div',
            { className: 'GPDAboutContain_part' },
            _react2.default.createElement(_GroupPageAboutPart2.default, {
                Icon: type_obj.Icon,
                title: type_obj.title
            })
        )
    );
}

exports.default = GPDAboutContain;

/***/ }),

/***/ "./src/pages/group_page/pages/discuss/right/media/_main/GPDMedia.js":
/*!**************************************************************************!*\
  !*** ./src/pages/group_page/pages/discuss/right/media/_main/GPDMedia.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _media = __webpack_require__(/*! ../../../../../../../_handle_api/fb_group/media */ "./src/_handle_api/fb_group/media.js");

var _useDataShowMore2 = __webpack_require__(/*! ../../../../../../../_hooks/useDataShowMore */ "./src/_hooks/useDataShowMore.js");

var _GroupPageAboutSeeAll = __webpack_require__(/*! ../../../../../_components/about_see_all/GroupPageAboutSeeAll */ "./src/pages/group_page/_components/about_see_all/GroupPageAboutSeeAll.js");

var _GroupPageAboutSeeAll2 = _interopRequireDefault(_GroupPageAboutSeeAll);

__webpack_require__(/*! ./GPDMedia.scss */ "./src/pages/group_page/pages/discuss/right/media/_main/GPDMedia.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//

//

//

//


//
GPDMedia.propTypes = {};

//
function GPDMedia(_ref) {

    // ------

    //
    var getData_API_AtFirst = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return refreshData_API();

                        case 2:

                            handleReady();

                        case 3:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function getData_API_AtFirst() {
            return _ref2.apply(this, arguments);
        };
    }();

    // ----

    var group_id = _ref.group_id,
        handleReady = _ref.handleReady;

    //
    var _useDataShowMore = (0, _useDataShowMore2.useDataShowMore)({
        handle_API_L: function handle_API_L() {
            return (0, _media.handle_API_FbGroupMedia_L)({
                group_id: group_id,
                params: { size: 4 }
            });
        }
    }),
        data_state = _useDataShowMore.data_state,
        refreshData_API = _useDataShowMore.refreshData_API;

    var data_arr = data_state.data_arr,
        count = data_state.count,
        has_fetched = data_state.has_fetched;

    //

    (0, _react.useEffect)(function () {
        getData_API_AtFirst();
    }, []);if (has_fetched && count == 0) {
        return null;
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'GPDMedia GroupPageDiscussRight_part_contain' },
        _react2.default.createElement(
            'h2',
            { className: 'GroupPageDiscussRight_part_title margin-bottom-8px' },
            'Recent media'
        ),
        _react2.default.createElement(
            'div',
            { className: 'brs-8px border-blur overflow-hidden' },
            _react2.default.createElement(
                'ul',
                { className: 'display-flex space-between flex-wrap list-none' },
                data_arr.map(function (item, ix) {
                    return _react2.default.createElement(
                        'li',
                        {
                            key: item.id,
                            className: 'GPDMedia_item pos-rel ' + (ix >= 3 ? 'margin-top-4px' : '')
                        },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            {
                                className: 'display-block padding-top-100per',
                                to: '/post/photos/' + item.id
                            },
                            _react2.default.createElement('img', {
                                className: 'pos-abs-100 object-fit-cover',
                                src: item.img,
                                alt: ''
                            })
                        )
                    );
                })
            )
        ),
        count > data_arr.length ? _react2.default.createElement(
            'div',
            { className: 'margin-top-10px' },
            _react2.default.createElement(_GroupPageAboutSeeAll2.default, {
                link_to: '/group/' + group_id + '/media'
            })
        ) : null
    );
}

exports.default = GPDMedia;

/***/ }),

/***/ "./src/pages/group_page/pages/discuss/right/topics/_main/GPDTopics.js":
/*!****************************************************************************!*\
  !*** ./src/pages/group_page/pages/discuss/right/topics/_main/GPDTopics.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _topics = __webpack_require__(/*! ../../../../../../../_handle_api/fb_group/topics */ "./src/_handle_api/fb_group/topics.js");

var _useDataShowMore2 = __webpack_require__(/*! ../../../../../../../_hooks/useDataShowMore */ "./src/_hooks/useDataShowMore.js");

var _IconsAction = __webpack_require__(/*! ../../../../../../../_icons_svg/icons_action/IconsAction */ "./src/_icons_svg/icons_action/IconsAction.js");

var _IconsAction2 = _interopRequireDefault(_IconsAction);

var _GPDTopic = __webpack_require__(/*! ../item/_main/GPDTopic */ "./src/pages/group_page/pages/discuss/right/topics/item/_main/GPDTopic.js");

var _GPDTopic2 = _interopRequireDefault(_GPDTopic);

var _GroupPageAboutSeeAll = __webpack_require__(/*! ../../../../../_components/about_see_all/GroupPageAboutSeeAll */ "./src/pages/group_page/_components/about_see_all/GroupPageAboutSeeAll.js");

var _GroupPageAboutSeeAll2 = _interopRequireDefault(_GroupPageAboutSeeAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//

//

//

//


//
GPDTopics.propTypes = {};

//
function GPDTopics(_ref) {

    // ------

    //
    var getData_API_AtFirst = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return refreshData_API();

                        case 2:

                            handleReady();

                        case 3:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function getData_API_AtFirst() {
            return _ref2.apply(this, arguments);
        };
    }();

    // ------

    //


    var group_id = _ref.group_id,
        is_admin = _ref.is_admin,
        handleReady = _ref.handleReady;

    //
    var _useDataShowMore = (0, _useDataShowMore2.useDataShowMore)({
        handle_API_L: function handle_API_L() {
            return (0, _topics.handle_API_FbGroupTopic_L)({
                group_id: group_id,
                params: { size: 3 }
            });
        }
    }),
        data_state = _useDataShowMore.data_state,
        setDataState = _useDataShowMore.setDataState,
        refreshData_API = _useDataShowMore.refreshData_API;

    var data_arr = data_state.data_arr,
        count = data_state.count,
        has_fetched = data_state.has_fetched;

    //

    (0, _react.useEffect)(function () {
        getData_API_AtFirst();
    }, []);function handleAction(_ref3) {
        var _ref3$ix = _ref3.ix,
            ix = _ref3$ix === undefined ? 0 : _ref3$ix,
            _ref3$action_name = _ref3.action_name,
            action_name = _ref3$action_name === undefined ? '' : _ref3$action_name;

        if (['hide', 'unhide'].includes(action_name)) {
            setDataState(function (data_state) {
                var new_data_arr = [].concat(_toConsumableArray(data_state.data_arr));
                new_data_arr[ix].is_hidden = !new_data_arr[ix].is_hidden;

                return _extends({}, data_state, {
                    data_arr: new_data_arr
                });
            });
        }
    }

    // ----

    if (has_fetched && count == 0) {
        return null;
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'GPDTopics GroupPageDiscussRight_part_contain' },
        _react2.default.createElement(
            'h2',
            { className: 'GroupPageDiscussRight_part_title margin-bottom-8px' },
            _react2.default.createElement(
                'div',
                { className: 'inline-block margin-right-5px' },
                'Popular topics in this group'
            ),
            _react2.default.createElement(_IconsAction2.default, { x: 600, size_icon: '20px' })
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'ul',
                { className: 'list-none' },
                data_arr.map(function (item, ix) {
                    return _react2.default.createElement(
                        'li',
                        { key: item.id, className: 'margin-top-6px' },
                        _react2.default.createElement(_GPDTopic2.default, {
                            ix: ix
                            //
                            , group_id: group_id,
                            is_admin: is_admin
                            //
                            , hash_tag: item.hash_tag,
                            post_count: item.post_count,
                            is_hidden: item.is_hidden,
                            pinned: item.pinned
                            //
                            , handleAction: handleAction
                        })
                    );
                })
            )
        ),
        count > data_arr.length ? _react2.default.createElement(
            'div',
            { className: 'margin-top-10px' },
            _react2.default.createElement(_GroupPageAboutSeeAll2.default, {
                link_to: '/group/' + group_id + '/topics'
            })
        ) : null
    );
}

exports.default = GPDTopics;

/***/ }),

/***/ "./src/pages/group_page/pages/discuss/right/topics/item/_main/GPDTopic.js":
/*!********************************************************************************!*\
  !*** ./src/pages/group_page/pages/discuss/right/topics/item/_main/GPDTopic.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _IconPinned = __webpack_require__(/*! ../../../../../../../../_icons_svg/pinned/IconPinned */ "./src/_icons_svg/pinned/IconPinned.js");

var _IconPinned2 = _interopRequireDefault(_IconPinned);

var _GPDTopicAction = __webpack_require__(/*! ../action/GPDTopicAction */ "./src/pages/group_page/pages/discuss/right/topics/item/action/GPDTopicAction.js");

var _GPDTopicAction2 = _interopRequireDefault(_GPDTopicAction);

var _GroupPageTopicTitle = __webpack_require__(/*! ../../../../../../_components/topic_title/GroupPageTopicTitle */ "./src/pages/group_page/_components/topic_title/GroupPageTopicTitle.js");

var _GroupPageTopicTitle2 = _interopRequireDefault(_GroupPageTopicTitle);

var _GroupPageTopicInfo = __webpack_require__(/*! ../../../../../../_components/topic_info/GroupPageTopicInfo */ "./src/pages/group_page/_components/topic_info/GroupPageTopicInfo.js");

var _GroupPageTopicInfo2 = _interopRequireDefault(_GroupPageTopicInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
GPDAboutTopic.propTypes = {};

//

//
function GPDAboutTopic(_ref) {
    var ix = _ref.ix,
        group_id = _ref.group_id,
        is_admin = _ref.is_admin,
        hash_tag = _ref.hash_tag,
        post_count = _ref.post_count,
        is_hidden = _ref.is_hidden,
        pinned = _ref.pinned,
        handleAction = _ref.handleAction;

    //
    return _react2.default.createElement(
        'div',
        { className: 'GPDAboutTopic' },
        _react2.default.createElement(
            'div',
            { className: 'flex-between-center' },
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'font-17px' },
                    _react2.default.createElement(_GroupPageTopicTitle2.default, {
                        group_id: group_id,
                        hash_tag: hash_tag,
                        is_hidden: is_hidden,
                        pinned: pinned,
                        size_icon: '14px'
                    })
                ),
                _react2.default.createElement(_GroupPageTopicInfo2.default, {
                    is_admin: is_admin,
                    is_hidden: is_hidden,
                    post_count: post_count
                })
            ),
            is_admin ? _react2.default.createElement(_GPDTopicAction2.default, {
                ix: ix,
                is_hidden: is_hidden,
                handleAction: handleAction
            }) : _react2.default.createElement('div', null)
        )
    );
}

exports.default = GPDAboutTopic;

/***/ }),

/***/ "./src/pages/group_page/pages/discuss/right/topics/item/action/GPDTopicAction.js":
/*!***************************************************************************************!*\
  !*** ./src/pages/group_page/pages/discuss/right/topics/item/action/GPDTopicAction.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GroupPageTopicAction = __webpack_require__(/*! ../../../../../../_components/topic_action/GroupPageTopicAction */ "./src/pages/group_page/_components/topic_action/GroupPageTopicAction.js");

var _GroupPageTopicAction2 = _interopRequireDefault(_GroupPageTopicAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GPDTopicAction.propTypes = {};

//

//
function GPDTopicAction(_ref) {
    var ix = _ref.ix,
        is_hidden = _ref.is_hidden,
        handleAction = _ref.handleAction;

    //
    return _react2.default.createElement(
        'div',
        { className: 'GPDTopicAction' },
        _react2.default.createElement(_GroupPageTopicAction2.default, {
            ix: ix,
            is_hidden: is_hidden,
            handleAction: handleAction
        })
    );
}

exports.default = GPDTopicAction;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/_icons_svg/icon_setting/IconSetting.scss":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/_icons_svg/icon_setting/IconSetting.scss ***!
  \***************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".nav-active .IconSetting {\n  stroke: var(--blue);\n  fill: var(--blue);\n}\n.nav-active .IconSetting_circle {\n  fill: var(--md-bg-fb-active);\n}", "",{"version":3,"sources":["webpack://./src/_icons_svg/icon_setting/IconSetting.scss"],"names":[],"mappings":"AACI;EAEI,mBAAA;EACA,iBAAA;AADR;AAII;EACI,4BAAA;AAFR","sourcesContent":[".nav-active{\r\n    .IconSetting{\r\n        // stroke: var(--blue);\r\n        stroke: var(--blue);\r\n        fill: var(--blue);\r\n    }\r\n\r\n    .IconSetting_circle{\r\n        fill: var(--md-bg-fb-active);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_components/about_part/GroupPageAboutPart.scss":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_components/about_part/GroupPageAboutPart.scss ***!
  \**************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".GroupPageAboutPart svg {\n  width: 20px;\n  height: 20px;\n}", "",{"version":3,"sources":["webpack://./src/pages/group_page/_components/about_part/GroupPageAboutPart.scss"],"names":[],"mappings":"AACI;EACI,WAAA;EACA,YAAA;AAAR","sourcesContent":[".GroupPageAboutPart{\r\n    svg{\r\n        width: 20px;\r\n        height: 20px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/discuss/_main/GroupPageDiscuss.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/discuss/_main/GroupPageDiscuss.scss ***!
  \*********************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".device-mobile .GroupPageDiscuss_row {\n  flex-direction: column-reverse;\n}\n.device-mobile .GroupPageDiscuss_left {\n  margin-right: 0;\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/pages/group_page/pages/discuss/_main/GroupPageDiscuss.scss"],"names":[],"mappings":"AACI;EACI,8BAAA;AAAR;AAGI;EACI,eAAA;EACA,WAAA;AADR","sourcesContent":[".device-mobile {\r\n    .GroupPageDiscuss_row {\r\n        flex-direction: column-reverse;\r\n    }\r\n\r\n    .GroupPageDiscuss_left {\r\n        margin-right: 0;\r\n        width: 100%;\r\n    }\r\n\r\n    // .GroupPageDiscuss_right{\r\n    //     width: 100%;\r\n    // }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/discuss/_main/GroupPageDiscussRes.scss":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/discuss/_main/GroupPageDiscussRes.scss ***!
  \************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@media (max-width: 900px) {\n  .GroupPageDiscuss_row {\n    display: block;\n  }\n\n  .GroupPageDiscuss_right {\n    margin: auto auto 15px;\n    width: 500px;\n    max-width: 100%;\n  }\n\n  .GroupPageDiscuss_left {\n    margin: auto;\n  }\n}", "",{"version":3,"sources":["webpack://./src/pages/group_page/pages/discuss/_main/GroupPageDiscussRes.scss"],"names":[],"mappings":"AACA;EACI;IACI,cAAA;EAAN;;EAGE;IACI,sBAAA;IACA,YAAA;IACA,eAAA;EAAN;;EAGE;IACI,YAAA;EAAN;AACF","sourcesContent":["// \r\n@media (max-width: 900px) {\r\n    .GroupPageDiscuss_row{\r\n        display: block;\r\n    }\r\n    // .\r\n    .GroupPageDiscuss_right{\r\n        margin: auto auto 15px;\r\n        width: 500px;\r\n        max-width: 100%;\r\n    }\r\n    // .\r\n    .GroupPageDiscuss_left{\r\n        margin: auto;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/discuss/left/_main/GroupPageDiscussLeft.scss":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/discuss/left/_main/GroupPageDiscussLeft.scss ***!
  \******************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".GroupPageDiscussLeft_skeleton {\n  height: 500px;\n}", "",{"version":3,"sources":["webpack://./src/pages/group_page/pages/discuss/left/_main/GroupPageDiscussLeft.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;AACJ","sourcesContent":[".GroupPageDiscussLeft_skeleton{\r\n    height: 500px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/discuss/right/_main/GroupPageDiscussRight.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/discuss/right/_main/GroupPageDiscussRight.scss ***!
  \********************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".device-mobile .GroupPageDiscussRight_contain {\n  padding-bottom: 16px;\n}", "",{"version":3,"sources":["webpack://./src/pages/group_page/pages/discuss/right/_main/GroupPageDiscussRight.scss"],"names":[],"mappings":"AAGI;EACI,oBAAA;AAFR","sourcesContent":["// -----\r\n\r\n.device-mobile {\r\n    .GroupPageDiscussRight_contain {\r\n        padding-bottom: 16px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/discuss/right/_main/GroupPageDiscussRightCommon.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/discuss/right/_main/GroupPageDiscussRightCommon.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".GroupPageDiscussRight_part_contain {\n  padding: 20px;\n  border-radius: 8px;\n  background-color: var(--md-bg-primary);\n  box-shadow: var(--box-shadow-1);\n}\n\n.GroupPageDiscussRight_part_title {\n  font-size: 17px;\n  font-weight: 600;\n}\n\n.device-mobile .GroupPageDiscussRight_part_contain {\n  padding: 8px;\n  border-radius: 0;\n}\n.device-mobile .GroupPageDiscussRight_part_title {\n  font-size: 16px;\n}", "",{"version":3,"sources":["webpack://./src/pages/group_page/pages/discuss/right/_main/GroupPageDiscussRightCommon.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,kBAAA;EACA,sCAAA;EACA,+BAAA;AACJ;;AAEA;EACI,eAAA;EACA,gBAAA;AACJ;;AAKI;EACI,YAAA;EACA,gBAAA;AAFR;AAKI;EACI,eAAA;AAHR","sourcesContent":[".GroupPageDiscussRight_part_contain {\r\n    padding: 20px;\r\n    border-radius: 8px;\r\n    background-color: var(--md-bg-primary);\r\n    box-shadow: var(--box-shadow-1);\r\n}\r\n\r\n.GroupPageDiscussRight_part_title{\r\n    font-size: 17px;\r\n    font-weight: 600;\r\n}\r\n\r\n// -----\r\n\r\n.device-mobile{\r\n    .GroupPageDiscussRight_part_contain{\r\n        padding: 8px;\r\n        border-radius: 0;\r\n    }\r\n\r\n    .GroupPageDiscussRight_part_title{\r\n        font-size: 16px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/discuss/right/media/_main/GPDMedia.scss":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/discuss/right/media/_main/GPDMedia.scss ***!
  \*************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".GPDMedia_item {\n  width: calc((100% - 4px) / 2);\n}", "",{"version":3,"sources":["webpack://./src/pages/group_page/pages/discuss/right/media/_main/GPDMedia.scss"],"names":[],"mappings":"AAAA;EACI,6BAAA;AACJ","sourcesContent":[".GPDMedia_item {\r\n    width: calc((100% - 4px) / 2);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/_icons_svg/icon_setting/IconSetting.scss":
/*!******************************************************!*\
  !*** ./src/_icons_svg/icon_setting/IconSetting.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_IconSetting_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./IconSetting.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/_icons_svg/icon_setting/IconSetting.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_IconSetting_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_IconSetting_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/group_page/_components/about_part/GroupPageAboutPart.scss":
/*!*****************************************************************************!*\
  !*** ./src/pages/group_page/_components/about_part/GroupPageAboutPart.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageAboutPart_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./GroupPageAboutPart.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_components/about_part/GroupPageAboutPart.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageAboutPart_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageAboutPart_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/group_page/pages/discuss/_main/GroupPageDiscuss.scss":
/*!************************************************************************!*\
  !*** ./src/pages/group_page/pages/discuss/_main/GroupPageDiscuss.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageDiscuss_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./GroupPageDiscuss.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/discuss/_main/GroupPageDiscuss.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageDiscuss_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageDiscuss_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/group_page/pages/discuss/_main/GroupPageDiscussRes.scss":
/*!***************************************************************************!*\
  !*** ./src/pages/group_page/pages/discuss/_main/GroupPageDiscussRes.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageDiscussRes_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./GroupPageDiscussRes.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/discuss/_main/GroupPageDiscussRes.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageDiscussRes_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageDiscussRes_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/group_page/pages/discuss/left/_main/GroupPageDiscussLeft.scss":
/*!*********************************************************************************!*\
  !*** ./src/pages/group_page/pages/discuss/left/_main/GroupPageDiscussLeft.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageDiscussLeft_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./GroupPageDiscussLeft.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/discuss/left/_main/GroupPageDiscussLeft.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageDiscussLeft_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageDiscussLeft_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/group_page/pages/discuss/right/_main/GroupPageDiscussRight.scss":
/*!***********************************************************************************!*\
  !*** ./src/pages/group_page/pages/discuss/right/_main/GroupPageDiscussRight.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageDiscussRight_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./GroupPageDiscussRight.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/discuss/right/_main/GroupPageDiscussRight.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageDiscussRight_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageDiscussRight_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/group_page/pages/discuss/right/_main/GroupPageDiscussRightCommon.scss":
/*!*****************************************************************************************!*\
  !*** ./src/pages/group_page/pages/discuss/right/_main/GroupPageDiscussRightCommon.scss ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageDiscussRightCommon_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./GroupPageDiscussRightCommon.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/discuss/right/_main/GroupPageDiscussRightCommon.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageDiscussRightCommon_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageDiscussRightCommon_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/group_page/pages/discuss/right/media/_main/GPDMedia.scss":
/*!****************************************************************************!*\
  !*** ./src/pages/group_page/pages/discuss/right/media/_main/GPDMedia.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GPDMedia_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../node_modules/sass-loader/dist/cjs.js!./GPDMedia.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/discuss/right/media/_main/GPDMedia.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GPDMedia_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GPDMedia_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src__icons_svg_icon_setting_IconSetting_js-src_pages_group_page_pages_discuss__main_GroupPage-1b9f33.js.map