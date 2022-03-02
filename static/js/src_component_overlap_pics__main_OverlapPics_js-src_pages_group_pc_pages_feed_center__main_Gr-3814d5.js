(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_component_overlap_pics__main_OverlapPics_js-src_pages_group_pc_pages_feed_center__main_Gr-3814d5"],{

/***/ "./src/_default/fb_group/post.js":
/*!***************************************!*\
  !*** ./src/_default/fb_group/post.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default_post_group_arr = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
//


var _getDefaultArr = __webpack_require__(/*! ../_common/getDefaultArr */ "./src/_default/_common/getDefaultArr.js");

var _DefaultPosts = __webpack_require__(/*! ../post/DefaultPosts */ "./src/_default/post/DefaultPosts.js");

var _getRandomFromArr = __webpack_require__(/*! ../_common/getRandomFromArr */ "./src/_default/_common/getRandomFromArr.js");

//
var default_post_group_obj = function default_post_group_obj() {
    var group_type_arr = [{
        name: 'suggested_public',
        title_at_head: 'Suggested for you from a public group'
    }, {
        name: 'joined',
        title_at_head: ''
    }];

    var group_type_obj = (0, _getRandomFromArr.getRandomFromArr)(group_type_arr);

    var data_group_obj = (0, _DefaultPosts.default_post_obj)({ post_where: 'group' });

    return _extends({}, data_group_obj, {
        group_obj: _extends({}, data_group_obj.group_obj, {
            type: group_type_obj.name,
            title_at_head: group_type_obj.title_at_head
        })
    });
};

var default_post_group_arr = exports.default_post_group_arr = function default_post_group_arr() {
    return (0, _getDefaultArr.getDefaultArr)(default_post_group_obj, 8, 10);
};

/***/ }),

/***/ "./src/_handle_api/fb_group/post.js":
/*!******************************************!*\
  !*** ./src/_handle_api/fb_group/post.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handle_API_PostGroup_L = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var handle_API_PostGroup_L = exports.handle_API_PostGroup_L = function () {
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
                        return (0, _post.API_PostGroup_L)(_extends({
                            page: 1,
                            size: 20,
                            c_count: c_count,
                            post_where: 'group'
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

    return function handle_API_PostGroup_L(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _post = __webpack_require__(/*! ../../api/api_django/fb_group/post */ "./src/api/api_django/fb_group/post.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/_hooks/useCardsRowCenter.js":
/*!*****************************************!*\
  !*** ./src/_hooks/useCardsRowCenter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.useCardsRowCenter = useCardsRowCenter;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _Constant = __webpack_require__(/*! ../_constant/Constant */ "./src/_constant/Constant.js");

var _html_elm = __webpack_require__(/*! ../_initial/htm_elm/html_elm */ "./src/_initial/htm_elm/html_elm.js");

var _useDataShowMore = __webpack_require__(/*! ./useDataShowMore */ "./src/_hooks/useDataShowMore.js");

var _useScrollToXCenter = __webpack_require__(/*! ./useScrollToXCenter */ "./src/_hooks/useScrollToXCenter.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//

//


//
function useCardsRowCenter(_ref) {

    // -------

    //
    var getData_API_AtFirst = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return getData_API();

                        case 2:

                            handleFetched && handleFetched();

                            if (!_Constant.IS_MOBILE) {
                                hasNextPrev();
                                ref_first_item.current = !ref_scroll_elm.current ? null : getItemElm();
                                changeItemSideWidth();
                            }

                        case 4:
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

    var _ref$count_item_cente = _ref.count_item_center,
        count_item_center = _ref$count_item_cente === undefined ? 1 : _ref$count_item_cente,
        _ref$handle_API_L = _ref.handle_API_L,
        handle_API_L = _ref$handle_API_L === undefined ? function () {
        return new Promise();
    } : _ref$handle_API_L,
        _ref$getItemElm = _ref.getItemElm,
        getItemElm = _ref$getItemElm === undefined ? function () {
        return _html_elm.initial_div_elm;
    } : _ref$getItemElm,
        _ref$handleFetched = _ref.handleFetched,
        handleFetched = _ref$handleFetched === undefined ? function () {} : _ref$handleFetched;

    //
    var data_scroll_x = (0, _useScrollToXCenter.useScrollToXCenter)({
        count_item_center: count_item_center
    });

    var ref_scroll_elm = data_scroll_x.ref_scroll_elm,
        ref_first_item = data_scroll_x.ref_first_item,
        changeItemSideWidth = data_scroll_x.changeItemSideWidth,
        hasNextPrev = data_scroll_x.hasNextPrev;

    //

    var data_show_more = (0, _useDataShowMore.useDataShowMore)({
        handle_API_L: handle_API_L
    });

    var getData_API = data_show_more.getData_API;

    //

    (0, _react.useEffect)(function () {
        getData_API_AtFirst();
    }, []);return _extends({}, data_scroll_x, data_show_more);
}

/***/ }),

/***/ "./src/_hooks/useScrollToXCenter.js":
/*!******************************************!*\
  !*** ./src/_hooks/useScrollToXCenter.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useScrollToXCenter = useScrollToXCenter;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _waitingToDoLast = __webpack_require__(/*! ../_some_function/waitingToDoLast */ "./src/_some_function/waitingToDoLast.js");

var _useScrollToX2 = __webpack_require__(/*! ./useScrollToX */ "./src/_hooks/useScrollToX.js");

//

//
function useScrollToXCenter(_ref) {
    var _ref$count_item_cente = _ref.count_item_center,
        count_item_center = _ref$count_item_cente === undefined ? 1 : _ref$count_item_cente;

    //
    var ref_scroll_elm = (0, _react.useRef)(null);
    var ref_first_item = (0, _react.useRef)(null);

    var ref_side_width = (0, _react.useRef)(0);
    var ref_item_width = (0, _react.useRef)(null);

    var ref_interval = (0, _react.useRef)(null);

    //

    var _useScrollToX = (0, _useScrollToX2.useScrollToX)({
        ref_scroll_elm: ref_scroll_elm,
        custom_scroll_x: true,
        getCustomScrollX: getCustomScrollX
    }),
        is_has_next = _useScrollToX.is_has_next,
        is_has_prev = _useScrollToX.is_has_prev,
        handleNext = _useScrollToX.handleNext,
        handlePrev = _useScrollToX.handlePrev,
        hasNextPrev = _useScrollToX.hasNextPrev;

    //


    (0, _react.useEffect)(function () {
        window.addEventListener('resize', changeItemSideWidth);

        return function () {
            window.removeEventListener('resize', changeItemSideWidth);
        };
    }, []);

    // ------

    //
    function changeItemSideWidth() {
        (0, _waitingToDoLast.waitingToDoLast)({
            ref_interval: ref_interval,
            callback: function callback() {
                ref_item_width.current = ref_first_item.current.getBoundingClientRect().width;

                ref_side_width.current = (ref_scroll_elm.current.clientWidth - ref_item_width.current * count_item_center) / 2;
            }
        });
    }

    //
    function getCustomScrollX() {
        var is_next = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        if (!is_has_prev && is_next || !is_has_next && !is_next) {
            return ref_item_width.current * count_item_center - ref_side_width.current;
        }

        return ref_item_width.current * count_item_center;
    }

    // ----
    return {
        ref_scroll_elm: ref_scroll_elm,
        ref_first_item: ref_first_item,

        is_has_next: is_has_next,
        is_has_prev: is_has_prev,

        changeItemSideWidth: changeItemSideWidth,

        handleNext: handleNext,
        handlePrev: handlePrev,
        hasNextPrev: hasNextPrev
    };
}
//

/***/ }),

/***/ "./src/_initial/group/notice.js":
/*!**************************************!*\
  !*** ./src/_initial/group/notice.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.initial_fb_group_notice_obj = undefined;

var _initialUser = __webpack_require__(/*! ../user/initialUser */ "./src/_initial/user/initialUser.js");

//
var initial_fb_group_notice_obj = exports.initial_fb_group_notice_obj = function initial_fb_group_notice_obj() {
    return {
        id: 0,
        user: (0, _initialUser.initial_user)(),
        group_obj: {
            id: 0,
            name: '',
            picture: ''
        },

        notice_type: '',
        has_seen: false,
        created_time: new Date().toString()
    };
};

/***/ }),

/***/ "./src/api/api_django/fb_group/post.js":
/*!*********************************************!*\
  !*** ./src/api/api_django/fb_group/post.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.API_PostGroup_L = undefined;

var _AxiosDjango = __webpack_require__(/*! ../_axios/AxiosDjango */ "./src/api/api_django/_axios/AxiosDjango.js");

var _AxiosDjango2 = _interopRequireDefault(_AxiosDjango);

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _post = __webpack_require__(/*! ../../../_default/fb_group/post */ "./src/_default/fb_group/post.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 

//
var API_PostGroup_L = exports.API_PostGroup_L = function API_PostGroup_L(params) {
    return (0, _ConstAPI.API_FakeReal)((0, _post.default_post_group_arr)(), function () {
        return (0, _AxiosDjango2.default)({
            url: 'api/facebook/post-l/',
            method: 'GET',
            params: params
        });
    }, params);
};
//

/***/ }),

/***/ "./src/component/cards_row/center/_main/CardsRowCenter.js":
/*!****************************************************************!*\
  !*** ./src/component/cards_row/center/_main/CardsRowCenter.js ***!
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

var _useCardsRowCenter2 = __webpack_require__(/*! ../../../../_hooks/useCardsRowCenter */ "./src/_hooks/useCardsRowCenter.js");

var _CardsRowCenterContain = __webpack_require__(/*! ../contain/CardsRowCenterContain */ "./src/component/cards_row/center/contain/CardsRowCenterContain.js");

var _CardsRowCenterContain2 = _interopRequireDefault(_CardsRowCenterContain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// import './CardsRowCenter.scss';

//

//
CardsRowCenter.propTypes = {};

//

//
function CardsRowCenter(_ref) {
    var ItemComponent = _ref.ItemComponent,
        item_props = _ref.item_props,
        has_blur_side = _ref.has_blur_side,
        handle_API_L = _ref.handle_API_L,
        handleFetched = _ref.handleFetched;

    //
    var _useCardsRowCenter = (0, _useCardsRowCenter2.useCardsRowCenter)({
        handle_API_L: handle_API_L,
        getItemElm: getItemElm,
        handleFetched: handleFetched
    }),
        ref_scroll_elm = _useCardsRowCenter.ref_scroll_elm,
        is_has_next = _useCardsRowCenter.is_has_next,
        is_has_prev = _useCardsRowCenter.is_has_prev,
        data_state = _useCardsRowCenter.data_state,
        handleNext = _useCardsRowCenter.handleNext,
        handlePrev = _useCardsRowCenter.handlePrev;

    // -----


    //


    function getItemElm() {
        return ref_scroll_elm.current.getElementsByTagName('li')[0];
    }

    // -----


    //
    return _react2.default.createElement(_CardsRowCenterContain2.default, {
        ItemComponent: ItemComponent,
        item_props: item_props,
        ref_scroll_elm: ref_scroll_elm,
        data_arr: data_state.data_arr
        // 
        , has_blur_side: has_blur_side,
        is_has_next: is_has_next,
        is_has_prev: is_has_prev,
        handleNext: handleNext,
        handlePrev: handlePrev
    });
}

exports.default = CardsRowCenter;

/***/ }),

/***/ "./src/component/cards_row/center/contain/CardsRowCenterContain.js":
/*!*************************************************************************!*\
  !*** ./src/component/cards_row/center/contain/CardsRowCenterContain.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
//

//

//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Constant = __webpack_require__(/*! ../../../../_constant/Constant */ "./src/_constant/Constant.js");

var _VirtualScroll = __webpack_require__(/*! ../../../virtual_scroll/VirtualScroll */ "./src/component/virtual_scroll/VirtualScroll.js");

var _VirtualScroll2 = _interopRequireDefault(_VirtualScroll);

var _NextPrevDiv = __webpack_require__(/*! ../../../some_div/next_prev_div/NextPrevDiv */ "./src/component/some_div/next_prev_div/NextPrevDiv.js");

var _NextPrevDiv2 = _interopRequireDefault(_NextPrevDiv);

__webpack_require__(/*! ./CardsRowCenterContain.scss */ "./src/component/cards_row/center/contain/CardsRowCenterContain.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
CardsRowCenterContain.propTypes = {};

//
function CardsRowCenterContain(_ref) {
    var ItemComponent = _ref.ItemComponent,
        item_props = _ref.item_props,
        ref_scroll_elm = _ref.ref_scroll_elm,
        data_arr = _ref.data_arr,
        _ref$has_blur_side = _ref.has_blur_side,
        has_blur_side = _ref$has_blur_side === undefined ? !_Constant.IS_MOBILE : _ref$has_blur_side,
        is_has_next = _ref.is_has_next,
        is_has_prev = _ref.is_has_prev,
        handleNext = _ref.handleNext,
        handlePrev = _ref.handlePrev;

    return _react2.default.createElement(
        'div',
        { className: 'CardsRowCenterContain pos-rel' },
        _react2.default.createElement(
            'div',
            {
                ref: ref_scroll_elm,
                className: 'CardsRowCenterContain_contain wh-100 overflow-x-auto scroll-height-0'
            },
            _react2.default.createElement(
                'ul',
                { className: 'display-flex list-none' },
                data_arr.map(function (item, ix) {
                    return _react2.default.createElement(
                        'li',
                        {
                            key: item.id,
                            className: 'CardsRowCenterContain_item flex-shrink-0'
                        },
                        _react2.default.createElement(
                            _VirtualScroll2.default,
                            { ref_root: ref_scroll_elm },
                            _react2.default.createElement(ItemComponent, _extends({
                                item: item,
                                ix: ix
                            }, item_props))
                        )
                    );
                })
            )
        ),
        has_blur_side ? _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement('div', {
                className: 'CardsRowCenterContain_side left-0 ' + (!is_has_next ? 'CardsRowCenterContain_side-left-only' : '') + ' ' + (!is_has_prev ? 'CardsRowCenterContain_side-left-none' : ''),
                onClick: handlePrev
            }),
            _react2.default.createElement('div', {
                className: 'CardsRowCenterContain_side right-0 ' + (!is_has_prev ? 'CardsRowCenterContain_side-right-only' : '') + ' ' + (!is_has_next ? 'CardsRowCenterContain_side-right-none' : ''),
                onClick: handleNext
            })
        ) : null,
        _Constant.IS_MOBILE ? null : _react2.default.createElement(
            'div',
            { className: 'text-secondary' },
            _react2.default.createElement(_NextPrevDiv2.default, {
                is_btn_circle: true,
                is_has_next: is_has_next,
                is_has_prev: is_has_prev
                // size_icon
                , handleNext: handleNext,
                handlePrev: handlePrev
            })
        )
    );
}

exports.default = CardsRowCenterContain;

/***/ }),

/***/ "./src/component/overlap_pics/_main/OverlapPics.js":
/*!*********************************************************!*\
  !*** ./src/component/overlap_pics/_main/OverlapPics.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
//

//

//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconThreeDot = __webpack_require__(/*! ../../../_icons_svg/icon_three_dot/IconThreeDot */ "./src/_icons_svg/icon_three_dot/IconThreeDot.js");

var _IconThreeDot2 = _interopRequireDefault(_IconThreeDot);

var _OverlapPicsItem = __webpack_require__(/*! ../item/OverlapPicsItem */ "./src/component/overlap_pics/item/OverlapPicsItem.js");

var _OverlapPicsItem2 = _interopRequireDefault(_OverlapPicsItem);

__webpack_require__(/*! ./OverlapPics.scss */ "./src/component/overlap_pics/_main/OverlapPics.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
OverlapPics.propTypes = {
    pic_arr: _propTypes2.default.array,
    has_more: _propTypes2.default.bool,

    ItemComponent: _propTypes2.default.func,
    item_props: _propTypes2.default.object,
    clickMore: _propTypes2.default.func
};

OverlapPics.defaultProps = {
    ItemComponent: _OverlapPicsItem2.default,
    item_props: {}
};

//
function OverlapPics(_ref) {
    var pic_arr = _ref.pic_arr,
        has_more = _ref.has_more,
        ItemComponent = _ref.ItemComponent,
        item_props = _ref.item_props,
        clickMore = _ref.clickMore;

    //
    return _react2.default.createElement(
        'div',
        { className: 'flex-end row-reverse' },
        has_more && _react2.default.createElement(
            'div',
            { className: 'OverlapPics_item' },
            _react2.default.createElement(
                'div',
                { className: 'OverlapPics_item_img pos-rel' },
                _react2.default.createElement(ItemComponent, _extends({ item: pic_arr[0] }, item_props)),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'pos-abs-0 display-flex-center wh-100 brs-50 bg-shadow-2',
                        onClick: clickMore
                    },
                    _react2.default.createElement(_IconThreeDot2.default, {
                        size_icon: '15px',
                        color: 'var(--md-bg-blur)'
                    })
                )
            )
        ),
        pic_arr.slice(has_more ? 1 : 0).map(function (item, ix) {
            return _react2.default.createElement(
                'div',
                { key: ix, className: 'OverlapPics_item' },
                _react2.default.createElement(
                    'div',
                    { className: 'OverlapPics_item_img' },
                    _react2.default.createElement(ItemComponent, _extends({ item: item }, item_props))
                )
            );
        })
    );
}

exports.default = OverlapPics;

/***/ }),

/***/ "./src/component/overlap_pics/item/OverlapPicsItem.js":
/*!************************************************************!*\
  !*** ./src/component/overlap_pics/item/OverlapPicsItem.js ***!
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
OverlapPicsItem.propTypes = {};

//
function OverlapPicsItem(_ref) {
    var item = _ref.item;

    //
    return _react2.default.createElement('img', {
        className: 'OverlapPicsItem wh-100 brs-50 object-fit-cover',
        src: item.picture,
        alt: ''
    });
}

exports.default = OverlapPicsItem;

/***/ }),

/***/ "./src/pages/group/_components/row_cards/center/_main/GroupRowCardsCenter.js":
/*!***********************************************************************************!*\
  !*** ./src/pages/group/_components/row_cards/center/_main/GroupRowCardsCenter.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
//

//

//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _suggested = __webpack_require__(/*! ../../../../../../_handle_api/fb_group/suggested */ "./src/_handle_api/fb_group/suggested.js");

var _CardsRowCenter = __webpack_require__(/*! ../../../../../../component/cards_row/center/_main/CardsRowCenter */ "./src/component/cards_row/center/_main/CardsRowCenter.js");

var _CardsRowCenter2 = _interopRequireDefault(_CardsRowCenter);

var _GroupItemCards = __webpack_require__(/*! ../../_components/item/GroupItemCards */ "./src/pages/group/_components/row_cards/_components/item/GroupItemCards.js");

var _GroupItemCards2 = _interopRequireDefault(_GroupItemCards);

__webpack_require__(/*! ./GroupRowCardsCenter.scss */ "./src/pages/group/_components/row_cards/center/_main/GroupRowCardsCenter.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GroupRowCardsCenter.propTypes = {};

//
function GroupRowCardsCenter(_ref) {
    var params_api = _ref.params_api,
        has_blur_side = _ref.has_blur_side,
        BtnElm = _ref.BtnElm,
        handleFetched = _ref.handleFetched;

    //
    function handle_API_L() {
        var c_count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        return (0, _suggested.handle_API_FbGroupSuggested_L)({
            c_count: c_count,
            params: _extends({
                size: 5
            }, params_api)
        });
    }

    //
    function removeGroupCard(params) {
        console.log(params);
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupRowCardsCenter pos-rel' },
        _react2.default.createElement(_CardsRowCenter2.default, {
            ItemComponent: _GroupItemCards2.default,
            item_props: {
                BtnElm: BtnElm,
                removeGroupCard: removeGroupCard
            },
            has_blur_side: has_blur_side
            //
            , handle_API_L: handle_API_L,
            handleFetched: handleFetched
        })
    );
}

exports.default = GroupRowCardsCenter;

/***/ }),

/***/ "./src/pages/group/pc/pages/feed/center/_main/GroupFeedCenter.js":
/*!***********************************************************************!*\
  !*** ./src/pages/group/pc/pages/feed/center/_main/GroupFeedCenter.js ***!
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

var _post = __webpack_require__(/*! ../../../../../../../_handle_api/fb_group/post */ "./src/_handle_api/fb_group/post.js");

var _useObserverShowMore2 = __webpack_require__(/*! ../../../../../../../_hooks/useObserverShowMore */ "./src/_hooks/useObserverShowMore.js");

var _Posts = __webpack_require__(/*! ../../../../../../../component/posts/_posts/_main/Posts */ "./src/component/posts/_posts/_main/Posts.js");

var _Posts2 = _interopRequireDefault(_Posts);

var _GroupFeedCenterSuggested = __webpack_require__(/*! ../suggested/_main/GroupFeedCenterSuggested */ "./src/pages/group/pc/pages/feed/center/suggested/_main/GroupFeedCenterSuggested.js");

var _GroupFeedCenterSuggested2 = _interopRequireDefault(_GroupFeedCenterSuggested);

var _GroupFeedCenterNew = __webpack_require__(/*! ../new/_main/GroupFeedCenterNew */ "./src/pages/group/pc/pages/feed/center/new/_main/GroupFeedCenterNew.js");

var _GroupFeedCenterNew2 = _interopRequireDefault(_GroupFeedCenterNew);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
GroupFeedCenter.propTypes = {};

//

//

//
function GroupFeedCenter(props) {
    //
    var ref_fake_elm_end = (0, _react.useRef)(null);

    //

    var _useObserverShowMore = (0, _useObserverShowMore2.useObserverShowMore)({
        initial_data_arr: [],
        handle_API_L: function handle_API_L(c_count) {
            return (0, _post.handle_API_PostGroup_L)({
                c_count: c_count,
                params: {}
            });
        }
    }),
        data_state = _useObserverShowMore.data_state,
        setDataState = _useObserverShowMore.setDataState,
        is_max = _useObserverShowMore.is_max,
        data_count = _useObserverShowMore.data_count,
        getData_API = _useObserverShowMore.getData_API,
        observerShowMore = _useObserverShowMore.observerShowMore;

    var data_arr = data_state.data_arr,
        is_fetching = data_state.is_fetching,
        has_fetched = data_state.has_fetched;

    //

    (0, _react.useEffect)(function () {
        getData_API();

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
        { className: 'GroupFeedCenter' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_GroupFeedCenterNew2.default, null)
        ),
        _react2.default.createElement(
            'h2',
            { className: 'GroupFeedCenter_title padding-y-12px font-600 font-15px text-555' },
            'More from groups'
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_Posts2.default, {
                posts: data_arr,
                has_fetched: has_fetched,
                is_fetching: is_fetching,
                open_input_id_arr: []
                //
                , interleaved_elm_arr: [{
                    elm: _react2.default.createElement(_GroupFeedCenterSuggested2.default, null),
                    interleaved_ix: 4
                }]
            })
        ),
        is_max.current ? null : _react2.default.createElement('div', { className: 'h-250px' }),
        _react2.default.createElement('div', { ref: ref_fake_elm_end, className: 'padding-1px' })
    );
}

exports.default = GroupFeedCenter;

/***/ }),

/***/ "./src/pages/group/pc/pages/feed/center/new/_main/GroupFeedCenterNew.js":
/*!******************************************************************************!*\
  !*** ./src/pages/group/pc/pages/feed/center/new/_main/GroupFeedCenterNew.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
//

//

//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _notice = __webpack_require__(/*! ../../../../../../../../_initial/group/notice */ "./src/_initial/group/notice.js");

var _notifications = __webpack_require__(/*! ../../../../../../../../_handle_api/fb_group/notifications */ "./src/_handle_api/fb_group/notifications.js");

var _GroupNoticeList = __webpack_require__(/*! ../../../../../_components/notice_list/GroupNoticeList */ "./src/pages/group/pc/_components/notice_list/GroupNoticeList.js");

var _GroupNoticeList2 = _interopRequireDefault(_GroupNoticeList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
GroupFeedCenterNew.propTypes = {};

//
function GroupFeedCenterNew(props) {

    // ----

    //
    var getData_API = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _ref2, data;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _notifications.handle_API_GroupNotice_L)({
                                c_count: 0,
                                params: { time: 'new' }
                            });

                        case 2:
                            _ref2 = _context.sent;
                            data = _ref2.data;


                            setNoticeArr(data.slice(0, 1));

                        case 5:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function getData_API() {
            return _ref.apply(this, arguments);
        };
    }();

    //


    //
    var _useState = (0, _react.useState)([] || 0),
        _useState2 = _slicedToArray(_useState, 2),
        notice_arr = _useState2[0],
        setNoticeArr = _useState2[1];

    //


    (0, _react.useEffect)(function () {
        getData_API();
    }, []);return _react2.default.createElement(
        'div',
        { className: 'GroupFeedCenterNew' },
        _react2.default.createElement(_GroupNoticeList2.default, { title: 'New for you', notice_arr: notice_arr })
    );
}

exports.default = GroupFeedCenterNew;

/***/ }),

/***/ "./src/pages/group/pc/pages/feed/center/suggested/_main/GroupFeedCenterSuggested.js":
/*!******************************************************************************************!*\
  !*** ./src/pages/group/pc/pages/feed/center/suggested/_main/GroupFeedCenterSuggested.js ***!
  \******************************************************************************************/
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

var _IconGroup = __webpack_require__(/*! ../../../../../../../../_icons_svg/icon_group/IconGroup */ "./src/_icons_svg/icon_group/IconGroup.js");

var _IconGroup2 = _interopRequireDefault(_IconGroup);

var _GroupRowCardsCenter = __webpack_require__(/*! ../../../../../../_components/row_cards/center/_main/GroupRowCardsCenter */ "./src/pages/group/_components/row_cards/center/_main/GroupRowCardsCenter.js");

var _GroupRowCardsCenter2 = _interopRequireDefault(_GroupRowCardsCenter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
GroupFeedCenterSuggested.propTypes = {};

//

//
function GroupFeedCenterSuggested(props) {
    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupFeedCenterSuggested padding-y-16px brs-8px-pc bg-primary box-shadow-1' },
        _react2.default.createElement(
            'h2',
            { className: 'margin-bottom-10px padding-x-12px font-17px font-600 text-secondary' },
            'More group'
        ),
        _react2.default.createElement(
            'div',
            { className: 'margin-bottom-16px padding-x-12px' },
            _react2.default.createElement(_GroupRowCardsCenter2.default, {
                params_api: {},
                BtnElm: _react2.default.createElement(
                    'div',
                    { className: 'display-flex-center wh-100 bg-fb-active text-blue' },
                    _react2.default.createElement(_IconGroup2.default, { size_icon: '18px', fill: 'currentColor' }),
                    _react2.default.createElement(
                        'span',
                        { className: 'margin-left-5px' },
                        'Join Group'
                    )
                )
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'display-flex-center' },
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/group/categories?q=suggestion' },
                'See more group'
            )
        )
    );
}

exports.default = GroupFeedCenterSuggested;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/cards_row/center/contain/CardsRowCenterContain.scss":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/cards_row/center/contain/CardsRowCenterContain.scss ***!
  \************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".CardsRowCenterContain:hover .CardsRowCenterContain_side {\n  opacity: 1;\n}\n.CardsRowCenterContain .VirtualScroll,\n.CardsRowCenterContain .VirtualScroll_contain {\n  height: 100%;\n}\n.CardsRowCenterContain .NextPrevDiv_next {\n  right: 6.25%;\n  transform: translate(50%, -50%);\n  z-index: 2;\n}\n.CardsRowCenterContain .NextPrevDiv_prev {\n  left: 6.25%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n}\n.CardsRowCenterContain .NextPrevDiv_icon-circle {\n  width: 48px;\n  height: 48px;\n}\n.CardsRowCenterContain .NextPrevDiv_icon-circle:hover {\n  transform: none;\n}\n.CardsRowCenterContain .BtnNexPrev {\n  border: 1px solid var(--md-bg-blur);\n}\n\n.CardsRowCenterContain_item {\n  width: 75%;\n  padding: 0 5px;\n}\n\n.CardsRowCenterContain_side {\n  position: absolute;\n  top: 0;\n  z-index: 2;\n  width: 12.5%;\n  height: 100%;\n  background-color: var(--md-bg-primary-5);\n  opacity: 0;\n  cursor: pointer;\n  transition: opacity 150ms ease-in;\n}\n\n.CardsRowCenterContain_side-left-only {\n  width: 25%;\n}\n\n.CardsRowCenterContain_side-left-none {\n  width: 0;\n}\n\n.CardsRowCenterContain_side-right-only {\n  width: 25%;\n}\n\n.CardsRowCenterContain_side-right-none {\n  width: 0;\n}", "",{"version":3,"sources":["webpack://./src/component/cards_row/center/contain/CardsRowCenterContain.scss"],"names":[],"mappings":"AAOQ;EACI,UAAA;AANZ;AAYI;;EAEI,YAAA;AAVR;AAcI;EACI,YAAA;EACA,+BAAA;EACA,UAAA;AAZR;AAeI;EACI,WAAA;EACA,gCAAA;EACA,UAAA;AAbR;AAgBI;EACI,WAAA;EACA,YAAA;AAdR;AAgBQ;EACI,eAAA;AAdZ;AAkBI;EACI,mCAAA;AAhBR;;AAqBA;EACI,UAAA;EACA,cAAA;AAlBJ;;AAsBA;EACI,kBAAA;EACA,MAAA;EACA,UAAA;EAEA,YAAA;EACA,YAAA;EACA,wCAAA;EAEA,UAAA;EACA,eAAA;EACA,iCAAA;AArBJ;;AAuBA;EACI,UAAA;AApBJ;;AAsBA;EACI,QAAA;AAnBJ;;AAqBA;EACI,UAAA;AAlBJ;;AAoBA;EACI,QAAA;AAjBJ","sourcesContent":["//\r\n$side-percent: 12.5%;\r\n\r\n// -----\r\n\r\n.CardsRowCenterContain {\r\n    &:hover {\r\n        .CardsRowCenterContain_side {\r\n            opacity: 1;\r\n        }\r\n    }\r\n\r\n    // ----\r\n\r\n    .VirtualScroll,\r\n    .VirtualScroll_contain {\r\n        height: 100%;\r\n    }\r\n\r\n    // ----\r\n    .NextPrevDiv_next {\r\n        right: #{$side-percent / 2};\r\n        transform: translate(50%, -50%);\r\n        z-index: 2;\r\n    }\r\n\r\n    .NextPrevDiv_prev {\r\n        left: #{$side-percent / 2};\r\n        transform: translate(-50%, -50%);\r\n        z-index: 2;\r\n    }\r\n\r\n    .NextPrevDiv_icon-circle {\r\n        width: 48px;\r\n        height: 48px;\r\n\r\n        &:hover {\r\n            transform: none;\r\n        }\r\n    }\r\n\r\n    .BtnNexPrev {\r\n        border: 1px solid var(--md-bg-blur);\r\n    }\r\n}\r\n\r\n// ..\r\n.CardsRowCenterContain_item {\r\n    width: #{100% - $side-percent * 2};\r\n    padding: 0 5px;\r\n}\r\n\r\n// .\r\n.CardsRowCenterContain_side {\r\n    position: absolute;\r\n    top: 0;\r\n    z-index: 2;\r\n\r\n    width: #{$side-percent};\r\n    height: 100%;\r\n    background-color: var(--md-bg-primary-5);\r\n\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    transition: opacity 150ms ease-in;\r\n}\r\n.CardsRowCenterContain_side-left-only {\r\n    width: #{$side-percent * 2};\r\n}\r\n.CardsRowCenterContain_side-left-none {\r\n    width: 0;\r\n}\r\n.CardsRowCenterContain_side-right-only {\r\n    width: #{$side-percent * 2};\r\n}\r\n.CardsRowCenterContain_side-right-none {\r\n    width: 0;\r\n}\r\n\r\n// ------\r\n\r\n.device-mobile {\r\n    // .CardsRowCenterContain_contain {\r\n    //     scroll-snap-type: x mandatory;\r\n    // }\r\n\r\n    // .CardsRowCenterContain_item {\r\n    //     scroll-snap-align: center;\r\n    // }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/overlap_pics/_main/OverlapPics.scss":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/overlap_pics/_main/OverlapPics.scss ***!
  \********************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".OverlapPics_item {\n  position: relative;\n  width: 24px;\n  height: 24px;\n}\n\n.OverlapPics_item_img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 36px;\n  height: 36px;\n  border: 2px solid var(--white);\n  border-radius: 50%;\n}", "",{"version":3,"sources":["webpack://./src/component/overlap_pics/_main/OverlapPics.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EAEA,WAAA;EACA,YAAA;AAAJ;;AAGA;EACI,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EAEA,WAAA;EACA,YAAA;EACA,8BAAA;EACA,kBAAA;AADJ","sourcesContent":[".OverlapPics_item{\r\n    position: relative;\r\n\r\n    width: 24px;\r\n    height: 24px;\r\n}\r\n\r\n.OverlapPics_item_img{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n\r\n    width: 36px;\r\n    height: 36px;\r\n    border: 2px solid var(--white);\r\n    border-radius: 50%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/_components/row_cards/center/_main/GroupRowCardsCenter.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/_components/row_cards/center/_main/GroupRowCardsCenter.scss ***!
  \**********************************************************************************************************************************************************************************************/
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

/***/ "./src/component/cards_row/center/contain/CardsRowCenterContain.scss":
/*!***************************************************************************!*\
  !*** ./src/component/cards_row/center/contain/CardsRowCenterContain.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CardsRowCenterContain_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./CardsRowCenterContain.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/cards_row/center/contain/CardsRowCenterContain.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CardsRowCenterContain_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CardsRowCenterContain_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/overlap_pics/_main/OverlapPics.scss":
/*!***********************************************************!*\
  !*** ./src/component/overlap_pics/_main/OverlapPics.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_OverlapPics_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./OverlapPics.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/overlap_pics/_main/OverlapPics.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_OverlapPics_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_OverlapPics_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/group/_components/row_cards/center/_main/GroupRowCardsCenter.scss":
/*!*************************************************************************************!*\
  !*** ./src/pages/group/_components/row_cards/center/_main/GroupRowCardsCenter.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupRowCardsCenter_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./GroupRowCardsCenter.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/_components/row_cards/center/_main/GroupRowCardsCenter.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupRowCardsCenter_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupRowCardsCenter_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_component_overlap_pics__main_OverlapPics_js-src_pages_group_pc_pages_feed_center__main_Gr-3814d5.js.map