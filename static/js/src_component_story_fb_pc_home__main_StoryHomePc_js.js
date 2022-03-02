(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_component_story_fb_pc_home__main_StoryHomePc_js"],{

/***/ "./src/_initial/story/InitialStory.js":
/*!********************************************!*\
  !*** ./src/_initial/story/InitialStory.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.initial_story_menu_obj = exports.initial_story_obj = undefined;

var _initialUser = __webpack_require__(/*! ../user/initialUser */ "./src/_initial/user/initialUser.js");

//
var initial_story_obj = exports.initial_story_obj = function initial_story_obj() {
    return {
        user: (0, _initialUser.initial_user)(),
        list: [{
            id: 0,
            vid_pic: '',
            created_time: '0' || 0,

            text: '',
            top_text: '',
            left_text: '',
            color_text_ix: 0,
            scale_text: 1
        }],
        count_new: 0,
        count: 0
    };
};

//
var initial_story_menu_obj = exports.initial_story_menu_obj = function initial_story_menu_obj() {
    return {
        user: (0, _initialUser.initial_user)(),
        list: [{
            id: 0,
            vid_pic: '',
            created_time: '0' || 0,

            text: '',
            top_text: '',
            left_text: '',
            color_text_ix: 0,
            scale_text: 1
        }],
        count_new: 0,
        count: 0,

        active_step: 0,
        active_item_ix: 0
    };
};

/***/ }),

/***/ "./src/component/_screen/type/story/pc/create/ScreenStoryCreatePc.js":
/*!***************************************************************************!*\
  !*** ./src/component/_screen/type/story/pc/create/ScreenStoryCreatePc.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.openScreenCreateStoryPc = openScreenCreateStoryPc;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _useMakeBodyHidden = __webpack_require__(/*! ../../../../../../_hooks/useMakeBodyHidden */ "./src/_hooks/useMakeBodyHidden.js");

var _StoryCreatePc = __webpack_require__(/*! ../../../../../story_fb/pc/create/_main/StoryCreatePc */ "./src/component/story_fb/pc/create/_main/StoryCreatePc.js");

var _StoryCreatePc2 = _interopRequireDefault(_StoryCreatePc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

// 
function openScreenCreateStoryPc(_ref) {
    var _ref$openScreenFloor = _ref.openScreenFloor,
        openScreenFloor = _ref$openScreenFloor === undefined ? function () {} : _ref$openScreenFloor,
        _ref$has_history = _ref.has_history,
        has_history = _ref$has_history === undefined ? true : _ref$has_history,
        _ref$hidden_before = _ref.hidden_before,
        hidden_before = _ref$hidden_before === undefined ? false : _ref$hidden_before;

    openScreenFloor({
        FloorComponent: ScreenStoryCreate,
        has_history: has_history,
        hidden_before: hidden_before
    });
}

//

// 
ScreenStoryCreate.propTypes = {};

//
function ScreenStoryCreate(_ref2) {
    var closeScreen = _ref2.closeScreen;

    //
    (0, _useMakeBodyHidden.useMakeBodyHidden)({
        hidden_app: true,
        hidden_header: true
        // blur_header: true,
    });

    //
    return _react2.default.createElement(_StoryCreatePc2.default, { show_fav: true, closeScreen: closeScreen });
}

exports.default = ScreenStoryCreate;

/***/ }),

/***/ "./src/component/story_fb/_components/menu/pc/_main/StoryMenuPartPc.js":
/*!*****************************************************************************!*\
  !*** ./src/component/story_fb/_components/menu/pc/_main/StoryMenuPartPc.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _UnitTime = __webpack_require__(/*! ../../../../../../_some_function/UnitTime */ "./src/_some_function/UnitTime.js");

var _UnitTime2 = _interopRequireDefault(_UnitTime);

var _ComponentSkeleton = __webpack_require__(/*! ../../../../../skeleton/component_skeleton/ComponentSkeleton */ "./src/component/skeleton/component_skeleton/ComponentSkeleton.js");

var _ComponentSkeleton2 = _interopRequireDefault(_ComponentSkeleton);

var _SkeletonPicContent = __webpack_require__(/*! ../../../../../skeleton/some_skeleton/pic_content/SkeletonPicContent */ "./src/component/skeleton/some_skeleton/pic_content/SkeletonPicContent.js");

var _SkeletonPicContent2 = _interopRequireDefault(_SkeletonPicContent);

var _PicNameContent = __webpack_require__(/*! ../../../../../picture_name/pic_name_content/PicNameContent */ "./src/component/picture_name/pic_name_content/PicNameContent.js");

var _PicNameContent2 = _interopRequireDefault(_PicNameContent);

__webpack_require__(/*! ./StoryMenuPartPc.scss */ "./src/component/story_fb/_components/menu/pc/_main/StoryMenuPartPc.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
StoryMenuPartPc.propTypes = {};

//

//

//
function StoryMenuPartPc(_ref) {
    var heading = _ref.heading,
        story_menu_obj = _ref.story_menu_obj,
        is_active_type = _ref.is_active_type,
        active_ix = _ref.active_ix,
        ref_fake_elm = _ref.ref_fake_elm,
        handleChangeStory = _ref.handleChangeStory;

    //
    var has_fetched = story_menu_obj.has_fetched,
        story_arr = story_menu_obj.story_arr,
        count_story = story_menu_obj.count_story;

    //

    return _react2.default.createElement(
        'div',
        { className: 'StoryMenuPartPc' },
        story_arr.length ? _react2.default.createElement(
            'h2',
            { className: 'margin-0 font-20px padding-10px' },
            heading
        ) : null,
        _react2.default.createElement(
            'div',
            { className: '' + (has_fetched ? '' : 'display-none') },
            story_arr.map(function (item, ix) {
                return _react2.default.createElement(
                    'div',
                    {
                        key: item.user.id,
                        className: 'padding-5px brs-6px ' + (is_active_type && active_ix == ix ? 'bg-fb-active pointer-events-none' : 'hv-bg-blur cursor-pointer'),
                        onClick: function onClick() {
                            return handleChangeStory(ix);
                        }
                    },
                    _react2.default.createElement(_PicNameContent2.default, {
                        user: item.user,
                        content: _react2.default.createElement(
                            'span',
                            { className: 'line-14px font-12px text-third' },
                            (0, _UnitTime2.default)(new Date().getTime() - new Date(item.list.slice(-1)[0].created_time))
                        )
                    })
                );
            })
        ),
        _react2.default.createElement('div', { ref: ref_fake_elm, className: 'padding-1px' }),
        _react2.default.createElement(_ComponentSkeleton2.default, {
            has_fetched: has_fetched && count_story <= story_arr.length,
            component: _react2.default.createElement(_SkeletonPicContent2.default, null),
            num: 2
        })
    );
}

exports.default = StoryMenuPartPc;

/***/ }),

/***/ "./src/component/story_fb/_components/menu/pc/action/StoryMenuPcAction.js":
/*!********************************************************************************!*\
  !*** ./src/component/story_fb/_components/menu/pc/action/StoryMenuPcAction.js ***!
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

var _IconsArrow = __webpack_require__(/*! ../../../../../../_icons_svg/icons_arrow/IconsArrow */ "./src/_icons_svg/icons_arrow/IconsArrow.js");

var _IconsArrow2 = _interopRequireDefault(_IconsArrow);

__webpack_require__(/*! ./StoryMenuPcAction.scss */ "./src/component/story_fb/_components/menu/pc/action/StoryMenuPcAction.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
StoryMenuPcAction.propTypes = {};

//

//
function StoryMenuPcAction(_ref) {
    var is_show = _ref.is_show,
        has_close = _ref.has_close,
        handleClose = _ref.handleClose,
        handleToggle = _ref.handleToggle;

    //
    return _react2.default.createElement(
        'div',
        { className: 'pos-rel' },
        _react2.default.createElement(
            'div',
            { className: 'display-flex align-items-center' },
            has_close ? _react2.default.createElement(
                'div',
                { className: 'StoryMenuPcAction_close' },
                _react2.default.createElement(
                    'div',
                    {
                        className: 'StoryMenuPcAction_close_contain cursor-pointer',
                        onClick: handleClose,
                        title: 'Close stories'
                    },
                    _react2.default.createElement(_IconsArrow2.default, { y: 400 })
                )
            ) : null,
            _react2.default.createElement(
                'div',
                { className: 'StoryMenuPcAction_toggle' },
                _react2.default.createElement(
                    'div',
                    {
                        className: 'StoryMenuPcAction_toggle_contain display-flex-center cursor-pointer ' + (is_show ? 'StoryMenuPcAction_toggle_contain-show' : 'StoryMenuPcAction_toggle_contain-hide'),
                        onClick: handleToggle,
                        title: is_show ? 'Hide menu' : 'Show menu'
                    },
                    _react2.default.createElement(_IconsArrow2.default, { y: 200, size_icon: '1rem' })
                )
            )
        )
    );
}

exports.default = StoryMenuPcAction;

/***/ }),

/***/ "./src/component/story_fb/_components/menu/pc/btn_create/StoryBtnCreatePc.js":
/*!***********************************************************************************!*\
  !*** ./src/component/story_fb/_components/menu/pc/btn_create/StoryBtnCreatePc.js ***!
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

var _ContextAPI = __webpack_require__(/*! ../../../../../../_context/ContextAPI */ "./src/_context/ContextAPI.js");

var _ScreenStoryCreatePc = __webpack_require__(/*! ../../../../../_screen/type/story/pc/create/ScreenStoryCreatePc */ "./src/component/_screen/type/story/pc/create/ScreenStoryCreatePc.js");

var _IconsArrow = __webpack_require__(/*! ../../../../../../_icons_svg/icons_arrow/IconsArrow */ "./src/_icons_svg/icons_arrow/IconsArrow.js");

var _IconsArrow2 = _interopRequireDefault(_IconsArrow);

__webpack_require__(/*! ./StoryBtnCreatePc.scss */ "./src/component/story_fb/_components/menu/pc/btn_create/StoryBtnCreatePc.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

// 

//
StoryBtnCreatePc.propTypes = {};

//

//

//
function StoryBtnCreatePc(props) {
    //
    var _useContext = (0, _react.useContext)(_ContextAPI.context_api),
        openScreenFloor = _useContext.openScreenFloor;

    // 


    function openScreenCreateStory() {
        (0, _ScreenStoryCreatePc.openScreenCreateStoryPc)({
            openScreenFloor: openScreenFloor,
            show_fav: true,
            hidden_before: true
        });

        history.pushState('', '', '/story/create');
    }

    //
    return _react2.default.createElement(
        'div',
        {
            className: 'StoryBtnCreatePc padding-8px cursor-pointer',
            onClick: openScreenCreateStory
        },
        _react2.default.createElement(
            'div',
            { className: 'display-flex align-items-center' },
            _react2.default.createElement(
                'div',
                { className: 'StoryBtnCreatePc_left' },
                _react2.default.createElement(
                    'div',
                    { className: 'StoryBtnCreatePc_left_contain display-flex-center bg-ccc brs-50' },
                    _react2.default.createElement(_IconsArrow2.default, { y: 400, size_icon: '1.25rem' })
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'StoryBtnCreatePc_right' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'span',
                        { className: 'font-500' },
                        'Create a story'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'span',
                        { className: 'font-12px' },
                        'Share a photo or write something.'
                    )
                )
            )
        )
    );
}

exports.default = StoryBtnCreatePc;

/***/ }),

/***/ "./src/component/story_fb/pc/home/_main/StoryHomePc.js":
/*!*************************************************************!*\
  !*** ./src/component/story_fb/pc/home/_main/StoryHomePc.js ***!
  \*************************************************************/
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

var _InitialStory = __webpack_require__(/*! ../../../../../_initial/story/InitialStory */ "./src/_initial/story/InitialStory.js");

var _HandleAPIStory = __webpack_require__(/*! ../../../../../_handle_api/feed/HandleAPIStory */ "./src/_handle_api/feed/HandleAPIStory.js");

var _useObserverGetData2 = __webpack_require__(/*! ../../../../../_hooks/useObserverGetData */ "./src/_hooks/useObserverGetData.js");

var _IconsArrow = __webpack_require__(/*! ../../../../../_icons_svg/icons_arrow/IconsArrow */ "./src/_icons_svg/icons_arrow/IconsArrow.js");

var _IconsArrow2 = _interopRequireDefault(_IconsArrow);

var _CircleLoading = __webpack_require__(/*! ../../../../waiting/circle_loading/CircleLoading */ "./src/component/waiting/circle_loading/CircleLoading.js");

var _CircleLoading2 = _interopRequireDefault(_CircleLoading);

var _StoryMenuPc = __webpack_require__(/*! ../menu/StoryMenuPc */ "./src/component/story_fb/pc/home/menu/StoryMenuPc.js");

var _StoryMenuPc2 = _interopRequireDefault(_StoryMenuPc);

var _StoryItemPc = __webpack_require__(/*! ../item/StoryItemPc */ "./src/component/story_fb/pc/home/item/StoryItemPc.js");

var _StoryItemPc2 = _interopRequireDefault(_StoryItemPc);

__webpack_require__(/*! ./StoryHomePc.scss */ "./src/component/story_fb/pc/home/_main/StoryHomePc.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
StoryHomePc.propTypes = {
    story_arr_followed: _propTypes2.default.array,
    count_story_followed: _propTypes2.default.number,
    has_fetched_followed: _propTypes2.default.bool,

    story_arr_yours: _propTypes2.default.array,
    count_story_yours: _propTypes2.default.number,
    has_fetched_yours: _propTypes2.default.bool,

    old_active_ix: _propTypes2.default.number,
    old_story_type: _propTypes2.default.string,
    has_close: _propTypes2.default.bool,
    closeScreen: _propTypes2.default.func
};

StoryHomePc.defaultProps = {
    story_arr_followed: [],
    count_story_followed: 0,
    has_fetched_followed: false,

    story_arr_yours: [],
    count_story_yours: 0,
    has_fetched_yours: false,

    old_active_ix: 0,
    old_story_type: 'followed',
    has_close: false
};

//
function StoryHomePc(_ref) {

    /* ----------- */

    //
    var getData_Story = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref3) {
            var _ref3$new_story_type = _ref3.new_story_type,
                new_story_type = _ref3$new_story_type === undefined ? story_type : _ref3$new_story_type,
                _ref3$new_active_ix = _ref3.new_active_ix,
                new_active_ix = _ref3$new_active_ix === undefined ? active_ix : _ref3$new_active_ix;

            var _ref4, data, count;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (!ref_is_fetching.current[new_story_type]) {
                                _context.next = 2;
                                break;
                            }

                            return _context.abrupt('return');

                        case 2:

                            ref_is_fetching.current[new_story_type] = true;

                            // setStateObj((state_obj) => {
                            //     return {
                            //         ...state_obj,
                            //         active_ix: new_active_ix,
                            //     };
                            // });

                            _context.next = 5;
                            return (0, _HandleAPIStory.handle_API_FeedStory_L)(ref_c_count.current[new_story_type], new_story_type);

                        case 5:
                            _ref4 = _context.sent;
                            data = _ref4.data;
                            count = _ref4.count;


                            ref_is_fetching.current[new_story_type] = false;

                            setStateObj(function (state_obj) {
                                var _state_obj$new_story_ = state_obj[new_story_type],
                                    story_arr = _state_obj$new_story_.story_arr,
                                    count_story = _state_obj$new_story_.count_story,
                                    has_fetched = _state_obj$new_story_.has_fetched;


                                var new_count_story = has_fetched ? count_story : count;
                                var new_story_arr = [].concat(_toConsumableArray(story_arr), _toConsumableArray(data)).slice(0, new_count_story);

                                ref_c_count.current[new_story_type] = new_story_arr.length;
                                ref_is_max.current[new_story_type] = new_count_story <= story_arr.length;

                                return _extends({}, state_obj, _defineProperty({
                                    active_ix: new_active_ix
                                }, new_story_type, {
                                    story_arr: new_story_arr,
                                    count_story: new_count_story,
                                    has_fetched: true
                                }));
                            });

                        case 10:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function getData_Story(_x) {
            return _ref2.apply(this, arguments);
        };
    }();

    // ----- NEXT PREV

    //


    var story_arr_followed = _ref.story_arr_followed,
        count_story_followed = _ref.count_story_followed,
        has_fetched_followed = _ref.has_fetched_followed,
        story_arr_yours = _ref.story_arr_yours,
        count_story_yours = _ref.count_story_yours,
        has_fetched_yours = _ref.has_fetched_yours,
        old_active_ix = _ref.old_active_ix,
        old_story_type = _ref.old_story_type,
        has_close = _ref.has_close,
        closeScreen = _ref.closeScreen;

    //
    var _useState = (0, _react.useState)({
        active_ix: old_active_ix,
        story_type: old_story_type,
        is_show_menu: true,

        followed: {
            story_arr: story_arr_followed || [(0, _InitialStory.initial_story_menu_obj)()],
            count_story: count_story_followed,
            has_fetched: has_fetched_followed
        },
        yours: {
            story_arr: story_arr_yours || [(0, _InitialStory.initial_story_menu_obj)()],
            count_story: count_story_yours,
            has_fetched: has_fetched_yours
        }
    }),
        _useState2 = _slicedToArray(_useState, 2),
        state_obj = _useState2[0],
        setStateObj = _useState2[1];

    var active_ix = state_obj.active_ix,
        story_type = state_obj.story_type,
        is_show_menu = state_obj.is_show_menu,
        followed = state_obj.followed,
        yours = state_obj.yours;
    var _state_obj$story_type = state_obj[story_type],
        story_arr = _state_obj$story_type.story_arr,
        count_story = _state_obj$story_type.count_story,
        has_fetched = _state_obj$story_type.has_fetched;

    //

    var ref_is_fetching = (0, _react.useRef)({ followed: false, yours: false });
    var ref_c_count = (0, _react.useRef)({ followed: 0, yours: 0 });
    var ref_is_max = (0, _react.useRef)({
        followed: false,
        yours: false
    });

    var ref_menu = (0, _react.useRef)(null);
    var ref_fake_elm_followed = (0, _react.useRef)(null);

    //

    var _useObserverGetData = (0, _useObserverGetData2.useObserverGetData)({
        getData_API: function getData_API() {
            return getData_Story({});
        },
        getIsMax: function getIsMax() {
            return ref_is_max.current.followed;
        },
        getIsFetching: function getIsFetching() {
            return ref_is_fetching.current.followed;
        }
    }),
        observerShowMore = _useObserverGetData.observerShowMore;

    //


    (0, _react.useEffect)(function () {
        !has_fetched_yours && getData_Story({ new_story_type: 'yours' });

        observerShowMore({
            fake_elm_end: ref_fake_elm_followed.current,
            root: ref_menu.current,
            rootMargin: '0px',
            way_scroll: 'to_bottom',
            margin: 0
        });
    }, []);

    //
    (0, _react.useEffect)(function () {
        if (ref_c_count.current['followed'] <= 10) {
            getData_Story({ new_story_type: 'followed' });
        }
    }, [ref_c_count.current['followed']]);function handleNextStoryUser() {
        var new_active_ix = active_ix + 1;

        if (new_active_ix >= story_arr.length) {
            getData_Story({
                new_active_ix: new_active_ix
            });
        } else {
            setStateObj(_extends({}, state_obj, {
                active_ix: new_active_ix
            }));
        }
    }

    //
    function handlePrevStoryUser() {
        setStateObj(_extends({}, state_obj, {
            active_ix: active_ix - 1
        }));
    }

    /* ---------- */

    //
    function handleChangeStory(new_active_ix, new_story_type) {
        if (new_active_ix == active_ix && story_type == new_story_type) {
            return;
        }

        setStateObj(_extends({}, state_obj, {
            active_ix: new_active_ix,
            story_type: new_story_type
        }));
    }

    //
    function handleChangeUserStory(new_active_ix) {
        handleChangeStory(new_active_ix, 'followed');
    }

    //
    function handleChangeYourStory(new_active_ix) {
        handleChangeStory(new_active_ix, 'yours');
    }

    /* ---------- */

    //
    function handleClose() {
        history.back();
    }

    //
    function handleToggleMenu() {
        setStateObj(function (state_obj) {
            return _extends({}, state_obj, {
                is_show_menu: !is_show_menu
            });
        });
    }

    //
    return _react2.default.createElement(
        'div',
        {
            className: 'StoryHomePc ' + (has_close ? 'wh-100v' : 'StoryHomePc-has_head')
        },
        _react2.default.createElement(
            'div',
            { className: 'display-flex h-100per' },
            _react2.default.createElement(
                'div',
                {
                    className: 'StoryHomePc_left pos-rel ' + (is_show_menu ? 'StoryHomePc_left-show' : 'StoryHomePc_left-hide')
                },
                _react2.default.createElement(_StoryMenuPc2.default, {
                    story_type: story_type,
                    active_ix: active_ix,
                    is_show_menu: is_show_menu,
                    has_close: has_close
                    //
                    , story_followed_obj: followed,
                    story_your_obj: yours
                    //
                    , ref_menu: ref_menu,
                    ref_fake_elm_followed: ref_fake_elm_followed
                    //
                    , handleChangeUserStory: handleChangeUserStory,
                    handleChangeYourStory: handleChangeYourStory,
                    handleClose: handleClose,
                    handleToggleMenu: handleToggleMenu
                })
            ),
            _react2.default.createElement(
                'div',
                { className: 'flex-grow-1 pos-rel' },
                has_fetched && story_arr.length > 0 ? _react2.default.createElement(_StoryItemPc2.default, {
                    count_story: count_story,
                    story_arr: story_arr,
                    active_ix: active_ix,
                    story_type: story_type,
                    handleNextStoryUser: handleNextStoryUser,
                    handlePrevStoryUser: handlePrevStoryUser
                }) : null
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'StoryHomePc_close display-none' },
            _react2.default.createElement(
                'div',
                { className: 'cursor-pointer', onClick: handleClose },
                _react2.default.createElement(_IconsArrow2.default, { y: 400 })
            )
        )
    );
}

exports.default = StoryHomePc;

/***/ }),

/***/ "./src/component/story_fb/pc/home/item/StoryItemPc.js":
/*!************************************************************!*\
  !*** ./src/component/story_fb/pc/home/item/StoryItemPc.js ***!
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

var _StoryItem = __webpack_require__(/*! ../../../_components/item/_main/StoryItem */ "./src/component/story_fb/_components/item/_main/StoryItem.js");

var _StoryItem2 = _interopRequireDefault(_StoryItem);

__webpack_require__(/*! ./StoryItemPc.scss */ "./src/component/story_fb/pc/home/item/StoryItemPc.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
StoryItemPc.propTypes = {};

//

//
function StoryItemPc(_ref) {
    var story_arr = _ref.story_arr,
        count_story = _ref.count_story,
        active_ix = _ref.active_ix,
        story_type = _ref.story_type,
        handleNextStoryUser = _ref.handleNextStoryUser,
        handlePrevStoryUser = _ref.handlePrevStoryUser;

    //
    return _react2.default.createElement(
        'div',
        { className: 'StoryItemPc h-100per bg-shadow-9 pos-rel' },
        _react2.default.createElement(_StoryItem2.default, {
            story_arr: story_arr,
            count_story: count_story,
            active_ix: active_ix,
            story_type: story_type
            // 
            , handleNextStoryUser: handleNextStoryUser,
            handlePrevStoryUser: handlePrevStoryUser
        })
    );
}

exports.default = StoryItemPc;

/***/ }),

/***/ "./src/component/story_fb/pc/home/menu/StoryMenuPc.js":
/*!************************************************************!*\
  !*** ./src/component/story_fb/pc/home/menu/StoryMenuPc.js ***!
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

var _StoryMenuPartPc = __webpack_require__(/*! ../../../_components/menu/pc/_main/StoryMenuPartPc */ "./src/component/story_fb/_components/menu/pc/_main/StoryMenuPartPc.js");

var _StoryMenuPartPc2 = _interopRequireDefault(_StoryMenuPartPc);

var _StoryMenuPcAction = __webpack_require__(/*! ../../../_components/menu/pc/action/StoryMenuPcAction */ "./src/component/story_fb/_components/menu/pc/action/StoryMenuPcAction.js");

var _StoryMenuPcAction2 = _interopRequireDefault(_StoryMenuPcAction);

var _StoryBtnCreatePc = __webpack_require__(/*! ../../../_components/menu/pc/btn_create/StoryBtnCreatePc */ "./src/component/story_fb/_components/menu/pc/btn_create/StoryBtnCreatePc.js");

var _StoryBtnCreatePc2 = _interopRequireDefault(_StoryBtnCreatePc);

__webpack_require__(/*! ./StoryMenuPc.scss */ "./src/component/story_fb/pc/home/menu/StoryMenuPc.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
StoryMenuPc.propTypes = {};

//

//
function StoryMenuPc(_ref) {
    var story_type = _ref.story_type,
        active_ix = _ref.active_ix,
        is_show_menu = _ref.is_show_menu,
        has_close = _ref.has_close,
        story_followed_obj = _ref.story_followed_obj,
        story_your_obj = _ref.story_your_obj,
        ref_menu = _ref.ref_menu,
        ref_fake_elm_followed = _ref.ref_fake_elm_followed,
        handleChangeUserStory = _ref.handleChangeUserStory,
        handleChangeYourStory = _ref.handleChangeYourStory,
        handleClose = _ref.handleClose,
        handleToggleMenu = _ref.handleToggleMenu;

    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            'div',
            {
                className: 'StoryMenuPc_action ' + (is_show_menu ? 'StoryMenuPc_action-show' : 'StoryMenuPc_action-hide')
            },
            _react2.default.createElement(_StoryMenuPcAction2.default, {
                is_show: is_show_menu,
                has_close: has_close,
                handleClose: handleClose,
                handleToggle: handleToggleMenu
            })
        ),
        _react2.default.createElement(
            'div',
            {
                ref: ref_menu,
                className: 'StoryMenuPc h-100per overflow-y-auto bg-primary ' + (is_show_menu ? 'StoryMenuPc_show' : 'StoryMenuPc_hide')
            },
            _react2.default.createElement(
                'h1',
                { className: 'StoryMenuPc_head pos-sticky top-0 z-index-lv1 padding-8px bg-primary font-22px font-600' },
                'Stories'
            ),
            _react2.default.createElement(
                'div',
                { className: 'padding-8px' },
                _react2.default.createElement(_StoryMenuPartPc2.default, {
                    heading: 'Your stories',
                    is_active_type: story_type == 'yours',
                    active_ix: active_ix,
                    story_menu_obj: story_your_obj,
                    handleChangeStory: handleChangeYourStory
                }),
                _react2.default.createElement(_StoryBtnCreatePc2.default, null)
            ),
            _react2.default.createElement(
                'div',
                { className: 'padding-8px' },
                _react2.default.createElement(_StoryMenuPartPc2.default, {
                    heading: 'All stories',
                    story_menu_obj: story_followed_obj,
                    is_active_type: story_type == 'followed',
                    active_ix: active_ix,
                    ref_fake_elm: ref_fake_elm_followed,
                    handleChangeStory: handleChangeUserStory
                })
            )
        )
    );
}

exports.default = StoryMenuPc;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/story_fb/_components/menu/pc/_main/StoryMenuPartPc.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/story_fb/_components/menu/pc/_main/StoryMenuPartPc.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".StoryMenuPartPc_not_fetched {\n  height: 50px;\n}", "",{"version":3,"sources":["webpack://./src/component/story_fb/_components/menu/pc/_main/StoryMenuPartPc.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;AACJ","sourcesContent":[".StoryMenuPartPc_not_fetched{\r\n    height: 50px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/story_fb/_components/menu/pc/action/StoryMenuPcAction.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/story_fb/_components/menu/pc/action/StoryMenuPcAction.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".StoryMenuPcAction_close {\n  margin-right: 0.5rem;\n}\n.StoryMenuPcAction_close .IconsArrow_close {\n  stroke: var(--danger);\n}\n\n.StoryMenuPcAction_toggle_contain {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.StoryMenuPcAction_toggle_contain .IconsArrow_back-top {\n  fill: var(--blue);\n}\n\n.StoryMenuPcAction_toggle_contain-show {\n  transform: rotate(-90deg) scale(1.25, 0.9);\n}\n\n.StoryMenuPcAction_toggle_contain-hide {\n  transform: rotate(90deg) scale(1.25, 0.9);\n}", "",{"version":3,"sources":["webpack://./src/component/story_fb/_components/menu/pc/action/StoryMenuPcAction.scss"],"names":[],"mappings":"AACA;EACI,oBAAA;AAAJ;AACI;EACI,qBAAA;AACR;;AAIA;EACI,aAAA;EACA,cAAA;AADJ;AAGI;EACI,iBAAA;AADR;;AAIA;EACI,0CAAA;AADJ;;AAGA;EACI,yCAAA;AAAJ","sourcesContent":["// .\r\n.StoryMenuPcAction_close {\r\n    margin-right: 0.5rem;\r\n    .IconsArrow_close {\r\n        stroke: var(--danger);\r\n    }\r\n}\r\n\r\n// .\r\n.StoryMenuPcAction_toggle_contain {\r\n    width: 1.5rem;\r\n    height: 1.5rem;\r\n\r\n    .IconsArrow_back-top {\r\n        fill: var(--blue);\r\n    }\r\n}\r\n.StoryMenuPcAction_toggle_contain-show {\r\n    transform: rotate(-90deg) scale(1.25, 0.9);\r\n}\r\n.StoryMenuPcAction_toggle_contain-hide {\r\n    transform: rotate(90deg) scale(1.25, 0.9);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/story_fb/_components/menu/pc/btn_create/StoryBtnCreatePc.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/story_fb/_components/menu/pc/btn_create/StoryBtnCreatePc.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".StoryBtnCreatePc {\n  border-bottom: 1px solid var(--md-bg-ccc);\n}\n\n.StoryBtnCreatePc_left {\n  margin-right: 0.5rem;\n}\n\n.StoryBtnCreatePc_left_contain {\n  width: 3rem;\n  height: 3rem;\n  transform: rotate(45deg);\n}\n.StoryBtnCreatePc_left_contain .IconsArrow_close {\n  stroke: var(--blue);\n}", "",{"version":3,"sources":["webpack://./src/component/story_fb/_components/menu/pc/btn_create/StoryBtnCreatePc.scss"],"names":[],"mappings":"AAAA;EACI,yCAAA;AACJ;;AAEA;EACI,oBAAA;AACJ;;AAGA;EACI,WAAA;EACA,YAAA;EACA,wBAAA;AAAJ;AAEI;EACI,mBAAA;AAAR","sourcesContent":[".StoryBtnCreatePc{\r\n    border-bottom: 1px solid var(--md-bg-ccc);\r\n}\r\n\r\n.StoryBtnCreatePc_left{\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n// .\r\n.StoryBtnCreatePc_left_contain{\r\n    width: 3rem;\r\n    height: 3rem;\r\n    transform: rotate(45deg);\r\n\r\n    .IconsArrow_close{\r\n        stroke: var(--blue);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/story_fb/pc/home/_main/StoryHomePc.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/story_fb/pc/home/_main/StoryHomePc.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".StoryHomePc-has_head {\n  height: calc(100vh - var(--height-header));\n  margin-top: calc(var(--height-header));\n}\n\n.StoryHomePc_left {\n  flex-shrink: 0;\n  transition: all 250ms;\n  z-index: 1;\n}\n\n.StoryHomePc_left-show {\n  width: 350px;\n}\n\n.StoryHomePc_left-hide {\n  width: 0;\n}\n\n.StoryHomePc_close {\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 1;\n}\n\n@media (max-width: 700px) {\n  .StoryHomePc_left {\n    display: none;\n  }\n\n  .StoryHomePc_close {\n    display: block;\n  }\n}", "",{"version":3,"sources":["webpack://./src/component/story_fb/pc/home/_main/StoryHomePc.scss"],"names":[],"mappings":"AAAA;EACI,0CAAA;EACA,sCAAA;AACJ;;AAEA;EAEI,cAAA;EACA,qBAAA;EACA,UAAA;AAAJ;;AAEA;EACI,YAAA;AACJ;;AAEA;EACI,QAAA;AACJ;;AAGA;EACI,eAAA;EACA,QAAA;EACA,MAAA;EACA,UAAA;AAAJ;;AAIA;EACI;IACI,aAAA;EADN;;EAGE;IACI,cAAA;EAAN;AACF","sourcesContent":[".StoryHomePc-has_head{\r\n    height: calc(100vh - var(--height-header));\r\n    margin-top: calc(var(--height-header));\r\n}\r\n\r\n.StoryHomePc_left{\r\n    // width: 350px;\r\n    flex-shrink: 0;\r\n    transition: all 250ms;\r\n    z-index: 1;\r\n}\r\n.StoryHomePc_left-show{\r\n    width: 350px;\r\n    // transform: translateX(0%);\r\n}\r\n.StoryHomePc_left-hide{\r\n    width: 0;\r\n    // transform: translateX(-100%);\r\n}\r\n\r\n.StoryHomePc_close{\r\n    position: fixed;\r\n    right: 0;\r\n    top: 0;\r\n    z-index: 1;\r\n}\r\n\r\n// \r\n@media (max-width: 700px) {\r\n    .StoryHomePc_left{\r\n        display: none;\r\n    }\r\n    .StoryHomePc_close{\r\n        display: block;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/story_fb/pc/home/item/StoryItemPc.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/story_fb/pc/home/item/StoryItemPc.scss ***!
  \***********************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".StoryItemPc {\n  padding-top: 0.5rem;\n}", "",{"version":3,"sources":["webpack://./src/component/story_fb/pc/home/item/StoryItemPc.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;AACJ","sourcesContent":[".StoryItemPc{\r\n    padding-top: 0.5rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/story_fb/pc/home/menu/StoryMenuPc.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/story_fb/pc/home/menu/StoryMenuPc.scss ***!
  \***********************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".StoryMenuPc_action {\n  position: absolute;\n  top: 0.5rem;\n  z-index: 1;\n}\n\n.StoryMenuPc_action-show {\n  right: 1rem;\n}\n\n.StoryMenuPc_action-hide {\n  right: auto;\n  left: 100%;\n}\n\n.StoryMenuPc {\n  transition: all 250ms;\n}\n\n.StoryMenuPc_show {\n  transform: translateX(0);\n  overflow-y: auto;\n}\n\n.StoryMenuPc_hide {\n  transform: translateX(-100%);\n  overflow-y: hidden;\n}\n\n.StoryMenuPc_head {\n  margin: 0 0 1rem 0;\n}", "",{"version":3,"sources":["webpack://./src/component/story_fb/pc/home/menu/StoryMenuPc.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,WAAA;EACA,UAAA;AACJ;;AACA;EACI,WAAA;AAEJ;;AAAA;EACI,WAAA;EACA,UAAA;AAGJ;;AAAA;EACI,qBAAA;AAGJ;;AADA;EACI,wBAAA;EACA,gBAAA;AAIJ;;AAFA;EACI,4BAAA;EACA,kBAAA;AAKJ;;AAFA;EACI,kBAAA;AAKJ","sourcesContent":[".StoryMenuPc_action {\r\n    position: absolute;\r\n    top: 0.5rem;\r\n    z-index: 1;\r\n}\r\n.StoryMenuPc_action-show {\r\n    right: 1rem;\r\n}\r\n.StoryMenuPc_action-hide {\r\n    right: auto;\r\n    left: 100%;\r\n}\r\n\r\n.StoryMenuPc {\r\n    transition: all 250ms;\r\n}\r\n.StoryMenuPc_show {\r\n    transform: translateX(0);\r\n    overflow-y: auto;\r\n}\r\n.StoryMenuPc_hide {\r\n    transform: translateX(-100%);\r\n    overflow-y: hidden;\r\n}\r\n\r\n.StoryMenuPc_head {\r\n    margin: 0 0 1rem 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/component/story_fb/_components/menu/pc/_main/StoryMenuPartPc.scss":
/*!*******************************************************************************!*\
  !*** ./src/component/story_fb/_components/menu/pc/_main/StoryMenuPartPc.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StoryMenuPartPc_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./StoryMenuPartPc.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/story_fb/_components/menu/pc/_main/StoryMenuPartPc.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StoryMenuPartPc_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StoryMenuPartPc_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/story_fb/_components/menu/pc/action/StoryMenuPcAction.scss":
/*!**********************************************************************************!*\
  !*** ./src/component/story_fb/_components/menu/pc/action/StoryMenuPcAction.scss ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StoryMenuPcAction_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./StoryMenuPcAction.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/story_fb/_components/menu/pc/action/StoryMenuPcAction.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StoryMenuPcAction_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StoryMenuPcAction_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/story_fb/_components/menu/pc/btn_create/StoryBtnCreatePc.scss":
/*!*************************************************************************************!*\
  !*** ./src/component/story_fb/_components/menu/pc/btn_create/StoryBtnCreatePc.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StoryBtnCreatePc_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./StoryBtnCreatePc.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/story_fb/_components/menu/pc/btn_create/StoryBtnCreatePc.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StoryBtnCreatePc_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StoryBtnCreatePc_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/story_fb/pc/home/_main/StoryHomePc.scss":
/*!***************************************************************!*\
  !*** ./src/component/story_fb/pc/home/_main/StoryHomePc.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StoryHomePc_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./StoryHomePc.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/story_fb/pc/home/_main/StoryHomePc.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StoryHomePc_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StoryHomePc_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/story_fb/pc/home/item/StoryItemPc.scss":
/*!**************************************************************!*\
  !*** ./src/component/story_fb/pc/home/item/StoryItemPc.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StoryItemPc_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./StoryItemPc.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/story_fb/pc/home/item/StoryItemPc.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StoryItemPc_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StoryItemPc_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/story_fb/pc/home/menu/StoryMenuPc.scss":
/*!**************************************************************!*\
  !*** ./src/component/story_fb/pc/home/menu/StoryMenuPc.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StoryMenuPc_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./StoryMenuPc.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/story_fb/pc/home/menu/StoryMenuPc.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StoryMenuPc_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StoryMenuPc_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_component_story_fb_pc_home__main_StoryHomePc_js.js.map