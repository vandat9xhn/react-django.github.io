(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_group_page_pages_topics__main_GroupPageTopics_js"],{

/***/ "./src/component/close_div_pc_mb/CloseDivPcMb.js":
/*!*******************************************************!*\
  !*** ./src/component/close_div_pc_mb/CloseDivPcMb.js ***!
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

var _Constant = __webpack_require__(/*! ../../_constant/Constant */ "./src/_constant/Constant.js");

var _PortalAtBody = __webpack_require__(/*! ../portal/at_body/PortalAtBody */ "./src/component/portal/at_body/PortalAtBody.js");

var _PortalAtBody2 = _interopRequireDefault(_PortalAtBody);

var _CloseDiv = __webpack_require__(/*! ../some_div/close_div/CloseDiv */ "./src/component/some_div/close_div/CloseDiv.js");

var _CloseDiv2 = _interopRequireDefault(_CloseDiv);

var _ActionsContainMb = __webpack_require__(/*! ../actions/mobile/contain/ActionsContainMb */ "./src/component/actions/mobile/contain/ActionsContainMb.js");

var _ActionsContainMb2 = _interopRequireDefault(_ActionsContainMb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
CloseDivPcMb.propTypes = {};

//

//
function CloseDivPcMb(_ref) {
    var class_actions = _ref.class_actions,
        _ref$class_action_con = _ref.class_action_contain_mb,
        class_action_contain_mb = _ref$class_action_con === undefined ? 'action-contain-mb-bottom' : _ref$class_action_con,
        refs_target = _ref.refs_target,
        children = _ref.children,
        handleClose = _ref.handleClose,
        callbackOpen = _ref.callbackOpen,
        makeDivHidden = _ref.makeDivHidden;

    //
    return _Constant.IS_MOBILE ? _react2.default.createElement(
        _PortalAtBody2.default,
        null,
        _react2.default.createElement(
            _ActionsContainMb2.default,
            {
                class_actions: class_actions,
                class_action_contain_mb: class_action_contain_mb,
                handleClose: handleClose,
                callbackOpen: callbackOpen
            },
            children
        )
    ) : _react2.default.createElement(
        _CloseDiv2.default,
        { makeDivHidden: makeDivHidden, refs_target: refs_target },
        _react2.default.createElement(
            'div',
            { className: 'CloseDivPcMb_pos-pc pos-abs top-100per right-0 z-index-1 w-250px' },
            children
        )
    );
}

exports.default = CloseDivPcMb;

/***/ }),

/***/ "./src/pages/group_page/pages/topics/_main/GroupPageTopics.js":
/*!********************************************************************!*\
  !*** ./src/pages/group_page/pages/topics/_main/GroupPageTopics.js ***!
  \********************************************************************/
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

var _topics = __webpack_require__(/*! ../../../../../_handle_api/fb_group/topics */ "./src/_handle_api/fb_group/topics.js");

var _useObserverShowMore2 = __webpack_require__(/*! ../../../../../_hooks/useObserverShowMore */ "./src/_hooks/useObserverShowMore.js");

var _GPTopicsSettings = __webpack_require__(/*! ../settings/_main/GPTopicsSettings */ "./src/pages/group_page/pages/topics/settings/_main/GPTopicsSettings.js");

var _GPTopicsSettings2 = _interopRequireDefault(_GPTopicsSettings);

var _GroupPageTopicsFilter = __webpack_require__(/*! ../filter/_main/GroupPageTopicsFilter */ "./src/pages/group_page/pages/topics/filter/_main/GroupPageTopicsFilter.js");

var _GroupPageTopicsFilter2 = _interopRequireDefault(_GroupPageTopicsFilter);

var _GroupPageTopic = __webpack_require__(/*! ../item/GroupPageTopic */ "./src/pages/group_page/pages/topics/item/GroupPageTopic.js");

var _GroupPageTopic2 = _interopRequireDefault(_GroupPageTopic);

__webpack_require__(/*! ./GroupPageTopics.scss */ "./src/pages/group_page/pages/topics/_main/GroupPageTopics.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//

//

//

//


//
GroupPageTopics.propTypes = {};

//
function GroupPageTopics(_ref) {

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
        is_admin = _ref.is_admin;

    //
    var ref_fake_elm = (0, _react.useRef)(null);

    //

    var _useObserverShowMore = (0, _useObserverShowMore2.useObserverShowMore)({
        handle_API_L: function handle_API_L(c_count) {
            return (0, _topics.handle_API_FbGroupTopic_L)({
                group_id: group_id,
                c_count: c_count
            });
        }
    }),
        data_state = _useObserverShowMore.data_state,
        setDataState = _useObserverShowMore.setDataState,
        is_max = _useObserverShowMore.is_max,
        refreshData_API = _useObserverShowMore.refreshData_API,
        observerShowMore = _useObserverShowMore.observerShowMore;

    var data_arr = data_state.data_arr,
        count = data_state.count,
        has_fetched = data_state.has_fetched;

    //

    (0, _react.useEffect)(function () {
        getData_API_AtFirst();

        observerShowMore({
            fake_elm_end: ref_fake_elm.current,
            rootMargin: '0px',
            way_scroll: 'to_bottom',
            margin: 0
        });
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

    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupPageTopics margin-auto w-680px max-w-100per' },
        is_admin ? _react2.default.createElement(
            'div',
            { className: 'GroupPageTopics_contain margin-bottom-16px' },
            _react2.default.createElement(_GPTopicsSettings2.default, null)
        ) : null,
        _react2.default.createElement(
            'div',
            { className: 'GroupPageTopics_contain' },
            _react2.default.createElement(
                'div',
                { className: 'flex-between-center' },
                _react2.default.createElement(
                    'h2',
                    { className: 'GroupPageTopics_title' },
                    'Group topics'
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_GroupPageTopicsFilter2.default, null)
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'margin-top-10px' },
                _react2.default.createElement(
                    'ul',
                    { className: 'list-none' },
                    data_arr.map(function (item, ix) {
                        return _react2.default.createElement(
                            'li',
                            { key: item.id, className: 'GroupPageTopics_item' },
                            _react2.default.createElement(_GroupPageTopic2.default, {
                                ix: ix,
                                group_id: group_id,
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
            _react2.default.createElement('div', { ref: ref_fake_elm, className: 'h-1px' }),
            is_max.current ? count == 0 ? _react2.default.createElement(
                'div',
                { className: 'padding-y-20px text-align-center font-20px font-700 text-secondary' },
                'No hash tag'
            ) : null : _react2.default.createElement('div', { className: 'h-250px' })
        )
    );
}

exports.default = GroupPageTopics;

/***/ }),

/***/ "./src/pages/group_page/pages/topics/filter/_main/GroupPageTopicsFilter.js":
/*!*********************************************************************************!*\
  !*** ./src/pages/group_page/pages/topics/filter/_main/GroupPageTopicsFilter.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _useBool2 = __webpack_require__(/*! ../../../../../../_hooks/useBool */ "./src/_hooks/useBool.js");

var _IconCaret = __webpack_require__(/*! ../../../../../../_icons_svg/_icon_caret/IconCaret */ "./src/_icons_svg/_icon_caret/IconCaret.js");

var _IconCaret2 = _interopRequireDefault(_IconCaret);

var _CloseDivPcMb = __webpack_require__(/*! ../../../../../../component/close_div_pc_mb/CloseDivPcMb */ "./src/component/close_div_pc_mb/CloseDivPcMb.js");

var _CloseDivPcMb2 = _interopRequireDefault(_CloseDivPcMb);

var _BtnActions = __webpack_require__(/*! ../../../../../../component/button/actions/BtnActions */ "./src/component/button/actions/BtnActions.js");

var _BtnActions2 = _interopRequireDefault(_BtnActions);

var _GPTpFilterContain = __webpack_require__(/*! ../contain/GPTpFilterContain */ "./src/pages/group_page/pages/topics/filter/contain/GPTpFilterContain.js");

var _GPTpFilterContain2 = _interopRequireDefault(_GPTpFilterContain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }
//

//

//

//


//
var FILTER_ARR = [{ title: 'All' }, { title: 'Pinned' }];

//
GroupPageTopicsFilter.propTypes = {};

//
function GroupPageTopicsFilter(_ref) {
    _objectDestructuringEmpty(_ref);

    //
    var _useState = (0, _react.useState)(0),
        _useState2 = _slicedToArray(_useState, 2),
        filter_ix = _useState2[0],
        setFilterIx = _useState2[1];

    //


    var ref_btn = (0, _react.useRef)(null);

    //

    var _useBool = (0, _useBool2.useBool)(),
        is_true = _useBool.is_true,
        setIsTrue = _useBool.setIsTrue,
        toggleBool = _useBool.toggleBool;

    // ------

    //


    function chooseFilter() {
        var new_filter_ix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        setIsTrue(false);
        setFilterIx(new_filter_ix);
    }

    //
    function makeDivHidden() {
        is_true && setIsTrue(false);
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupPageTopicsFilter pos-rel' },
        _react2.default.createElement(
            'div',
            { ref: ref_btn },
            _react2.default.createElement(_BtnActions2.default, {
                className: 'bg-ccc',
                title: FILTER_ARR[filter_ix].title,
                Icon: _react2.default.createElement(_IconCaret2.default, null),
                icon_on_left: false,
                handleClick: toggleBool
            })
        ),
        is_true ? _react2.default.createElement(
            _CloseDivPcMb2.default,
            {
                refs_target: [ref_btn],
                handleClose: makeDivHidden,
                makeDivHidden: makeDivHidden
            },
            _react2.default.createElement(_GPTpFilterContain2.default, {
                filter_arr: FILTER_ARR,
                filter_ix: filter_ix,
                chooseFilter: chooseFilter
            })
        ) : null
    );
}

exports.default = GroupPageTopicsFilter;

/***/ }),

/***/ "./src/pages/group_page/pages/topics/filter/contain/GPTpFilterContain.js":
/*!*******************************************************************************!*\
  !*** ./src/pages/group_page/pages/topics/filter/contain/GPTpFilterContain.js ***!
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

var _GPTpFilterItem = __webpack_require__(/*! ../item/GPTpFilterItem */ "./src/pages/group_page/pages/topics/filter/item/GPTpFilterItem.js");

var _GPTpFilterItem2 = _interopRequireDefault(_GPTpFilterItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GPTpFilterContain.propTypes = {};

//

//
function GPTpFilterContain(_ref) {
    var filter_arr = _ref.filter_arr,
        filter_ix = _ref.filter_ix,
        chooseFilter = _ref.chooseFilter;

    return _react2.default.createElement(
        'div',
        { className: 'GPTpFilterContain padding-8px brs-8px-pc bg-primary box-shadow-fb' },
        filter_arr.map(function (item, ix) {
            return _react2.default.createElement(
                'div',
                { key: ix },
                _react2.default.createElement(_GPTpFilterItem2.default, {
                    title: item.title,
                    ix: ix,
                    is_active: filter_ix == ix,
                    chooseFilter: chooseFilter
                })
            );
        })
    );
}

exports.default = GPTpFilterContain;

/***/ }),

/***/ "./src/pages/group_page/pages/topics/filter/item/GPTpFilterItem.js":
/*!*************************************************************************!*\
  !*** ./src/pages/group_page/pages/topics/filter/item/GPTpFilterItem.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconSent = __webpack_require__(/*! ../../../../../../_icons_svg/icons_status_message/icon_sent/IconSent */ "./src/_icons_svg/icons_status_message/icon_sent/IconSent.js");

var _IconSent2 = _interopRequireDefault(_IconSent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GPTpFilterItem.propTypes = {};

//

//
function GPTpFilterItem(_ref) {
    var title = _ref.title,
        ix = _ref.ix,
        is_active = _ref.is_active,
        chooseFilter = _ref.chooseFilter;

    //
    function handleClick() {
        chooseFilter(ix);
    }

    //
    return _react2.default.createElement(
        'div',
        {
            className: 'GPTpFilterItem h-36px padding-x-8px brs-6px font-600 cursor-pointer hv-bg-blur ' + (is_active ? 'border-blue bg-blur' : ''),
            onClick: handleClick
        },
        _react2.default.createElement(
            'div',
            { className: 'flex-between-center h-100per' },
            _react2.default.createElement(
                'div',
                null,
                title
            ),
            _react2.default.createElement(
                'div',
                null,
                is_active ? _react2.default.createElement(_IconSent2.default, { stroke: 'var(--blue)', size_icon: '17px' }) : null
            )
        )
    );
}

exports.default = GPTpFilterItem;

/***/ }),

/***/ "./src/pages/group_page/pages/topics/item/GroupPageTopic.js":
/*!******************************************************************!*\
  !*** ./src/pages/group_page/pages/topics/item/GroupPageTopic.js ***!
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

var _GroupPageTopicAction = __webpack_require__(/*! ../../../_components/topic_action/GroupPageTopicAction */ "./src/pages/group_page/_components/topic_action/GroupPageTopicAction.js");

var _GroupPageTopicAction2 = _interopRequireDefault(_GroupPageTopicAction);

var _GroupPageTopicTitle = __webpack_require__(/*! ../../../_components/topic_title/GroupPageTopicTitle */ "./src/pages/group_page/_components/topic_title/GroupPageTopicTitle.js");

var _GroupPageTopicTitle2 = _interopRequireDefault(_GroupPageTopicTitle);

var _GroupPageTopicInfo = __webpack_require__(/*! ../../../_components/topic_info/GroupPageTopicInfo */ "./src/pages/group_page/_components/topic_info/GroupPageTopicInfo.js");

var _GroupPageTopicInfo2 = _interopRequireDefault(_GroupPageTopicInfo);

__webpack_require__(/*! ./GroupPageTopic.scss */ "./src/pages/group_page/pages/topics/item/GroupPageTopic.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
GroupPageTopic.propTypes = {};

//

//
function GroupPageTopic(_ref) {
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
        { className: 'GroupPageTopic padding-top=8px' },
        _react2.default.createElement(
            'div',
            { className: 'display-flex' },
            _react2.default.createElement(
                'div',
                { className: 'GroupPageTopic_left padding-6px font-600 text-secondary' },
                '#'
            ),
            _react2.default.createElement(
                'div',
                { className: 'GroupPageTopic_right flex-grow-1 padding-6px' },
                _react2.default.createElement(
                    'div',
                    { className: 'flex-between-center' },
                    _react2.default.createElement(_GroupPageTopicTitle2.default, {
                        group_id: group_id,
                        hash_tag: hash_tag,
                        is_hidden: is_hidden,
                        pinned: pinned
                        //
                        , use_hash_character: false,
                        size_icon: '14px'
                    }),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_GroupPageTopicAction2.default, {
                            ix: ix,
                            is_hidden: is_hidden,
                            handleAction: handleAction
                        })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'GroupPageTopic_info margin-top-12px font-13px' },
                    _react2.default.createElement(_GroupPageTopicInfo2.default, {
                        is_admin: is_admin,
                        is_hidden: is_hidden,
                        post_count: post_count
                    })
                ),
                _react2.default.createElement('div', { className: 'margin-top-8px h-1px bg-blur' })
            )
        )
    );
}

exports.default = GroupPageTopic;

/***/ }),

/***/ "./src/pages/group_page/pages/topics/settings/_main/GPTopicsSettings.js":
/*!******************************************************************************!*\
  !*** ./src/pages/group_page/pages/topics/settings/_main/GPTopicsSettings.js ***!
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

var _useBool2 = __webpack_require__(/*! ../../../../../../_hooks/useBool */ "./src/_hooks/useBool.js");

var _ToggleSwitch = __webpack_require__(/*! ../../../../../../component/some_div/switch_div/switch/ToggleSwitch */ "./src/component/some_div/switch_div/switch/ToggleSwitch.js");

var _ToggleSwitch2 = _interopRequireDefault(_ToggleSwitch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
GPTopicsSettings.propTypes = {};

//

//
function GPTopicsSettings(props) {
    //
    var _useBool = (0, _useBool2.useBool)(),
        is_true = _useBool.is_true,
        toggleBool = _useBool.toggleBool;

    //


    return _react2.default.createElement(
        'div',
        { className: 'GPTopicsSettings' },
        _react2.default.createElement(
            'h2',
            { className: 'GroupPageTopics_title' },
            'Settings'
        ),
        _react2.default.createElement(
            'div',
            { className: 'flex-between-center margin-top-10px' },
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'font-600' },
                    'Show group topics list'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'font-12px text-secondary' },
                    'A section with the top three pinned or popular topics will appear as part of the group\'s feed.'
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'cursor-pointer', onClick: toggleBool },
                _react2.default.createElement(_ToggleSwitch2.default, { switch_on: is_true })
            )
        )
    );
}

exports.default = GPTopicsSettings;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/topics/_main/GroupPageTopics.scss":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/topics/_main/GroupPageTopics.scss ***!
  \*******************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".GroupPageTopics_contain {\n  padding: 16px;\n  border-radius: 8px;\n  background-color: var(--md-bg-primary);\n  box-shadow: var(--box-shadow-1);\n}\n\n.GroupPageTopics_title {\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.device-mobile .GroupPageTopics_contain {\n  padding: 8px;\n  border-radius: 0px;\n}\n.device-mobile .GroupPageTopics_title {\n  font-size: 17px;\n}", "",{"version":3,"sources":["webpack://./src/pages/group_page/pages/topics/_main/GroupPageTopics.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,kBAAA;EACA,sCAAA;EACA,+BAAA;AACJ;;AAEA;EACI,eAAA;EACA,gBAAA;AACJ;;AAKI;EACI,YAAA;EACA,kBAAA;AAFR;AAKI;EACI,eAAA;AAHR","sourcesContent":[".GroupPageTopics_contain {\r\n    padding: 16px;\r\n    border-radius: 8px;\r\n    background-color: var(--md-bg-primary);\r\n    box-shadow: var(--box-shadow-1);\r\n}\r\n\r\n.GroupPageTopics_title {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n}\r\n\r\n// -----\r\n\r\n.device-mobile {\r\n    .GroupPageTopics_contain {\r\n        padding: 8px;\r\n        border-radius: 0px;\r\n    }\r\n\r\n    .GroupPageTopics_title {\r\n        font-size: 17px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/topics/item/GroupPageTopic.scss":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/topics/item/GroupPageTopic.scss ***!
  \*****************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".GroupPageTopic_left {\n  font-size: 30px;\n}\n\n.device-mobile .GroupPageTopic_left {\n  font-size: 24px;\n}\n.device-mobile .GroupPageTopic_right {\n  padding: 0 6px;\n}\n.device-mobile .GroupPageTopic_info {\n  margin-top: 0;\n}", "",{"version":3,"sources":["webpack://./src/pages/group_page/pages/topics/item/GroupPageTopic.scss"],"names":[],"mappings":"AAAA;EACI,eAAA;AACJ;;AAKI;EACI,eAAA;AAFR;AAKI;EACI,cAAA;AAHR;AAMI;EACI,aAAA;AAJR","sourcesContent":[".GroupPageTopic_left{\r\n    font-size: 30px;\r\n}\r\n\r\n// ------\r\n\r\n.device-mobile{\r\n    .GroupPageTopic_left{\r\n        font-size: 24px;\r\n    }\r\n\r\n    .GroupPageTopic_right{\r\n        padding: 0 6px;\r\n    }\r\n    // .\r\n    .GroupPageTopic_info{\r\n        margin-top: 0;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/group_page/pages/topics/_main/GroupPageTopics.scss":
/*!**********************************************************************!*\
  !*** ./src/pages/group_page/pages/topics/_main/GroupPageTopics.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageTopics_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./GroupPageTopics.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/topics/_main/GroupPageTopics.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageTopics_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageTopics_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/group_page/pages/topics/item/GroupPageTopic.scss":
/*!********************************************************************!*\
  !*** ./src/pages/group_page/pages/topics/item/GroupPageTopic.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageTopic_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./GroupPageTopic.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/topics/item/GroupPageTopic.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageTopic_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageTopic_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_group_page_pages_topics__main_GroupPageTopics_js.js.map