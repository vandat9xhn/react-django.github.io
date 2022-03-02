(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_group_pc_pages_feed__main_GroupFeed_js"],{

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

/***/ "./src/component/separate_line_scroll_toggle/SeparateLineScrollToggle.js":
/*!*******************************************************************************!*\
  !*** ./src/component/separate_line_scroll_toggle/SeparateLineScrollToggle.js ***!
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

var _useBool2 = __webpack_require__(/*! ../../_hooks/useBool */ "./src/_hooks/useBool.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
SeparateLineScrollToggle.propTypes = {};

//

//
function SeparateLineScrollToggle(_ref) {
    var ref_scroll_elm = _ref.ref_scroll_elm;

    //
    var _useBool = (0, _useBool2.useBool)(),
        is_true = _useBool.is_true,
        setIsTrue = _useBool.setIsTrue;

    //


    (0, _react.useEffect)(function () {
        ref_scroll_elm.current.addEventListener('scroll', handleScroll);

        return function () {
            ref_scroll_elm.current && ref_scroll_elm.current.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // ----

    //
    function handleScroll(e) {
        setIsTrue(e.target.scrollTop > 0);
    }

    //
    return _react2.default.createElement('div', {
        className: 'SeparateLineScrollToggle h-1px bg-blur ' + (is_true ? '' : 'display-none')
    });
}

exports.default = SeparateLineScrollToggle;

/***/ }),

/***/ "./src/pages/group/pc/_components/_layout/_main/GroupLayout.js":
/*!*********************************************************************!*\
  !*** ./src/pages/group/pc/_components/_layout/_main/GroupLayout.js ***!
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

var _GroupLayoutLeft = __webpack_require__(/*! ../left/_main/GroupLayoutLeft */ "./src/pages/group/pc/_components/_layout/left/_main/GroupLayoutLeft.js");

var _GroupLayoutLeft2 = _interopRequireDefault(_GroupLayoutLeft);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GroupLayout.propTypes = {};

//

//
function GroupLayout(_ref) {
    var children = _ref.children;

    //
    var ref_scroll = (0, _react.useRef)(null);

    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupLayout' },
        _react2.default.createElement(
            'div',
            { className: 'display-flex' },
            _react2.default.createElement(
                'div',
                { className: 'GroupLayout_left flex-shrink-0 left-bar-sticky' },
                _react2.default.createElement(_GroupLayoutLeft2.default, { ref_scroll: ref_scroll })
            ),
            _react2.default.createElement(
                'div',
                { className: 'GroupLayout_right flex-grow-1' },
                children
            )
        )
    );
}

exports.default = GroupLayout;

/***/ }),

/***/ "./src/pages/group/pc/_components/_layout/left/_main/GroupLayoutLeft.js":
/*!******************************************************************************!*\
  !*** ./src/pages/group/pc/_components/_layout/left/_main/GroupLayoutLeft.js ***!
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

var _GroupLayoutLeftHead = __webpack_require__(/*! ../head/_main/GroupLayoutLeftHead */ "./src/pages/group/pc/_components/_layout/left/head/_main/GroupLayoutLeftHead.js");

var _GroupLayoutLeftHead2 = _interopRequireDefault(_GroupLayoutLeftHead);

var _GroupLayoutLeftNav = __webpack_require__(/*! ../nav/GroupLayoutLeftNav */ "./src/pages/group/pc/_components/_layout/left/nav/GroupLayoutLeftNav.js");

var _GroupLayoutLeftNav2 = _interopRequireDefault(_GroupLayoutLeftNav);

var _GroupLeftJoined = __webpack_require__(/*! ../joined/_main/GroupLeftJoined */ "./src/pages/group/pc/_components/_layout/left/joined/_main/GroupLeftJoined.js");

var _GroupLeftJoined2 = _interopRequireDefault(_GroupLeftJoined);

var _GroupLeftManage = __webpack_require__(/*! ../manage/_main/GroupLeftManage */ "./src/pages/group/pc/_components/_layout/left/manage/_main/GroupLeftManage.js");

var _GroupLeftManage2 = _interopRequireDefault(_GroupLeftManage);

var _SeparateLineScrollToggle = __webpack_require__(/*! ../../../../../../../component/separate_line_scroll_toggle/SeparateLineScrollToggle */ "./src/component/separate_line_scroll_toggle/SeparateLineScrollToggle.js");

var _SeparateLineScrollToggle2 = _interopRequireDefault(_SeparateLineScrollToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GroupLayoutLeft.propTypes = {};

//

//
function GroupLayoutLeft(_ref) {
    var ref_scroll = _ref.ref_scroll;

    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupLayoutLeft display-flex flex-col h-100per' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_GroupLayoutLeftHead2.default, null)
        ),
        _react2.default.createElement(
            'div',
            { className: 'padding-x-8px' },
            _react2.default.createElement(_SeparateLineScrollToggle2.default, { ref_scroll_elm: ref_scroll })
        ),
        _react2.default.createElement(
            'div',
            {
                ref: ref_scroll,
                className: 'flex-grow-1 flex-basis-1rem overflow-y-auto scroll-thin'
            },
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_GroupLayoutLeftNav2.default, { ref_scroll_elm: ref_scroll })
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_GroupLeftManage2.default, { ref_scroll: ref_scroll })
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_GroupLeftJoined2.default, { ref_scroll: ref_scroll })
            )
        )
    );
}

exports.default = GroupLayoutLeft;

/***/ }),

/***/ "./src/pages/group/pc/pages/feed/_main/GroupFeed.js":
/*!**********************************************************!*\
  !*** ./src/pages/group/pc/pages/feed/_main/GroupFeed.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GroupLayout = __webpack_require__(/*! ../../../_components/_layout/_main/GroupLayout */ "./src/pages/group/pc/_components/_layout/_main/GroupLayout.js");

var _GroupLayout2 = _interopRequireDefault(_GroupLayout);

var _GroupFeedRight = __webpack_require__(/*! ../right/_main/GroupFeedRight */ "./src/pages/group/pc/pages/feed/right/_main/GroupFeedRight.js");

var _GroupFeedRight2 = _interopRequireDefault(_GroupFeedRight);

var _GroupFeedCenter = __webpack_require__(/*! ../center/_main/GroupFeedCenter */ "./src/pages/group/pc/pages/feed/center/_main/GroupFeedCenter.js");

var _GroupFeedCenter2 = _interopRequireDefault(_GroupFeedCenter);

__webpack_require__(/*! ./GroupFeed.scss */ "./src/pages/group/pc/pages/feed/_main/GroupFeed.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
GroupFeed.propTypes = {};

//

//
function GroupFeed(props) {
    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupFeed' },
        _react2.default.createElement(
            _GroupLayout2.default,
            null,
            _react2.default.createElement(
                'div',
                { className: 'GroupFeed_center_right padding-top-16px' },
                _react2.default.createElement(
                    'div',
                    { className: 'display-flex justify-content-center' },
                    _react2.default.createElement(
                        'div',
                        { className: 'GroupFeed_center margin-8px w-500px' },
                        _react2.default.createElement(_GroupFeedCenter2.default, null)
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'GroupFeed_right margin-8px w-360px' },
                        _react2.default.createElement(_GroupFeedRight2.default, null)
                    )
                )
            )
        )
    );
}

exports.default = GroupFeed;

/***/ }),

/***/ "./src/pages/group/pc/pages/feed/right/_main/GroupFeedRight.js":
/*!*********************************************************************!*\
  !*** ./src/pages/group/pc/pages/feed/right/_main/GroupFeedRight.js ***!
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

var _Constant = __webpack_require__(/*! ../../../../../../../_constant/Constant */ "./src/_constant/Constant.js");

var _useStickyAuto2 = __webpack_require__(/*! ../../../../../../../_hooks/useStickyAuto */ "./src/_hooks/useStickyAuto.js");

var _GroupFeedSuggested = __webpack_require__(/*! ../suggested/GroupFeedSuggested */ "./src/pages/group/pc/pages/feed/right/suggested/GroupFeedSuggested.js");

var _GroupFeedSuggested2 = _interopRequireDefault(_GroupFeedSuggested);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
GroupFeedRight.propTypes = {};

//

//

//
function GroupFeedRight(props) {
    //
    var _useStickyAuto = (0, _useStickyAuto2.useStickyAuto)({
        sticky_location: /\/group\/feed$/
    }),
        calculateAgain = _useStickyAuto.calculateAgain,
        ref_main_elm = _useStickyAuto.ref_main_elm,
        ref_preview_elm = _useStickyAuto.ref_preview_elm,
        ref_fake_elm = _useStickyAuto.ref_fake_elm;

    //


    function handleReady() {
        if (_Constant.IS_MOBILE) {
            return;
        }

        calculateAgain();
    }

    //
    return _react2.default.createElement(
        'div',
        { ref: ref_main_elm, className: 'GroupFeedRight h-100per' },
        _react2.default.createElement('div', { ref: ref_fake_elm }),
        _react2.default.createElement(
            'div',
            { ref: ref_preview_elm, className: 'pos-sticky' },
            _react2.default.createElement(
                'div',
                { className: 'GroupFeedRight_suggested' },
                _react2.default.createElement(_GroupFeedSuggested2.default, { handleReady: handleReady })
            )
        )
    );
}

exports.default = GroupFeedRight;

/***/ }),

/***/ "./src/pages/group/pc/pages/feed/right/suggested/GroupFeedSuggested.js":
/*!*****************************************************************************!*\
  !*** ./src/pages/group/pc/pages/feed/right/suggested/GroupFeedSuggested.js ***!
  \*****************************************************************************/
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _GroupRowCardsFit = __webpack_require__(/*! ../../../../../_components/row_cards/fit/GroupRowCardsFit */ "./src/pages/group/_components/row_cards/fit/GroupRowCardsFit.js");

var _GroupRowCardsFit2 = _interopRequireDefault(_GroupRowCardsFit);

__webpack_require__(/*! ./GroupFeedSuggested.scss */ "./src/pages/group/pc/pages/feed/right/suggested/GroupFeedSuggested.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GroupFeedSuggested.propTypes = {};

//
function GroupFeedSuggested(_ref) {
    var handleReady = _ref.handleReady;

    //
    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        has_fetched = _useState2[0],
        setHasFetched = _useState2[1];

    // ----

    //


    function handleFetched() {
        setHasFetched(true);

        setTimeout(function () {
            handleReady();
        }, 0);
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupFeedSuggested brs-8px bg-primary box-shadow-1 text-secondary' },
        _react2.default.createElement(
            'div',
            { className: 'GroupFeedSuggested_head padding-x-16px padding-y-20px' },
            _react2.default.createElement(
                'div',
                { className: 'flex-between-center' },
                _react2.default.createElement(
                    'h2',
                    { className: 'font-17px font-600' },
                    'Suggested for you'
                ),
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/group/discover' },
                    'See more'
                )
            ),
            _react2.default.createElement(
                'div',
                null,
                'Groups you might be interested in.'
            )
        ),
        _react2.default.createElement(
            'div',
            {
                className: 'GroupFeedSuggested_body padding-bottom-20px ' + (has_fetched ? '' : 'display-none')
            },
            _react2.default.createElement(_GroupRowCardsFit2.default, {
                handleFetched: handleFetched,
                params_api: { type: 'suggested' }
            })
        ),
        has_fetched ? null : _react2.default.createElement('div', { className: 'padding-top-100per' })
    );
}

exports.default = GroupFeedSuggested;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/pc/pages/feed/_main/GroupFeed.scss":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/pc/pages/feed/_main/GroupFeed.scss ***!
  \*********************************************************************************************************************************************************************/
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/pc/pages/feed/right/suggested/GroupFeedSuggested.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/pc/pages/feed/right/suggested/GroupFeedSuggested.scss ***!
  \****************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".GroupFeedSuggested_body {\n  padding-left: 32px;\n  padding-right: 32px;\n}\n.GroupFeedSuggested_body .NextPrevDiv_next {\n  transform: translate(50%, -50%);\n  z-index: 2;\n}\n.GroupFeedSuggested_body .NextPrevDiv_prev {\n  transform: translate(-50%, -50%);\n  z-index: 2;\n}\n.GroupFeedSuggested_body .NextPrevDiv_icon-circle {\n  width: 36px;\n  height: 36px;\n}\n.GroupFeedSuggested_body .BtnNexPrev {\n  border: 1px solid var(--md-bg-blur);\n}", "",{"version":3,"sources":["webpack://./src/pages/group/pc/pages/feed/right/suggested/GroupFeedSuggested.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,mBAAA;AACJ;AAEI;EACI,+BAAA;EACA,UAAA;AAAR;AAGI;EACI,gCAAA;EACA,UAAA;AADR;AAII;EACI,WAAA;EACA,YAAA;AAFR;AAKI;EACI,mCAAA;AAHR","sourcesContent":[".GroupFeedSuggested_body {\r\n    padding-left: 32px;\r\n    padding-right: 32px;\r\n\r\n    // ----\r\n    .NextPrevDiv_next {\r\n        transform: translate(50%, -50%);\r\n        z-index: 2;\r\n    }\r\n\r\n    .NextPrevDiv_prev {\r\n        transform: translate(-50%, -50%);\r\n        z-index: 2;\r\n    }\r\n\r\n    .NextPrevDiv_icon-circle{\r\n        width: 36px;\r\n        height: 36px;\r\n    }\r\n\r\n    .BtnNexPrev  {\r\n        border: 1px solid var(--md-bg-blur);\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/group/pc/pages/feed/_main/GroupFeed.scss":
/*!************************************************************!*\
  !*** ./src/pages/group/pc/pages/feed/_main/GroupFeed.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupFeed_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./GroupFeed.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/pc/pages/feed/_main/GroupFeed.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupFeed_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupFeed_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/group/pc/pages/feed/right/suggested/GroupFeedSuggested.scss":
/*!*******************************************************************************!*\
  !*** ./src/pages/group/pc/pages/feed/right/suggested/GroupFeedSuggested.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupFeedSuggested_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../node_modules/sass-loader/dist/cjs.js!./GroupFeedSuggested.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/pc/pages/feed/right/suggested/GroupFeedSuggested.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupFeedSuggested_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupFeedSuggested_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_group_pc_pages_feed__main_GroupFeed_js.js.map