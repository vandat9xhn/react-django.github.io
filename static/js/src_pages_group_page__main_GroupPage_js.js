(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_group_page__main_GroupPage_js"],{

/***/ "./src/_default/fb_group/page.js":
/*!***************************************!*\
  !*** ./src/_default/fb_group/page.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default_fb_group_page_obj = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _default_bool = __webpack_require__(/*! ../_common/default_bool */ "./src/_default/_common/default_bool.js");

var _default_id = __webpack_require__(/*! ../_common/default_id */ "./src/_default/_common/default_id.js");

var _default_image = __webpack_require__(/*! ../_common/default_image */ "./src/_default/_common/default_image.js");

var _default_name = __webpack_require__(/*! ../_common/default_name */ "./src/_default/_common/default_name.js");

var _default_user = __webpack_require__(/*! ../_common/default_user */ "./src/_default/_common/default_user.js");

var _getDefaultArr = __webpack_require__(/*! ../_common/getDefaultArr */ "./src/_default/_common/getDefaultArr.js");

var _getRandomFromArr = __webpack_require__(/*! ../_common/getRandomFromArr */ "./src/_default/_common/getRandomFromArr.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
var GROUP_COLOR_ARR = [{
    bg: '',
    bg_btn: '#0091DA',
    color: '#57BCEF'
}, {
    bg: '#B6C8DE',
    bg_btn: '#2F9A48',
    color: '#72BF84'
}, {
    bg: '#B6C8DE',
    bg_btn: '#0091DA',
    color: '#57BCEF'
}, {
    bg: '#E1BEC0',
    bg_btn: '#EF5370',
    color: '#FD90A5'
}];

//
var default_fb_group_page_obj = exports.default_fb_group_page_obj = function default_fb_group_page_obj() {
    var joined = (0, _default_bool.getRandomBool)();
    var member_arr = (0, _getDefaultArr.getDefaultArr)(function () {
        return (0, _default_user.getRandomUser)().user;
    }, 6, 8);
    var affiliation_to = (0, _getRandomFromArr.getRandomFromArr)(['person', 'page']);

    var is_admin = !!((0, _default_bool.getRandomBool)() * (0, _default_bool.getRandomBool)());
    var is_moderate = is_admin ? false : !!((0, _default_bool.getRandomBool)() * (0, _default_bool.getRandomBool)());

    return _extends({}, (0, _default_user.getRandomGroup)().group_obj, _defineProperty({

        color_obj: (0, _getRandomFromArr.getRandomFromArr)(GROUP_COLOR_ARR),
        affiliation_obj: (0, _default_bool.getRandomBool)() ? {
            to: affiliation_to,
            id: (0, _default_id.getRandomId)(),
            name: affiliation_to == 'person' ? (0, _default_name.getRandomName)() : (0, _default_name.getRandomPageName)(),
            picture: (0, _default_image.getRandomImg)()
        } : { to: '', id: 0, name: '', picture: '' },

        is_admin: is_admin,
        is_moderate: is_moderate,
        privacy: (0, _default_bool.getRandomBool)() ? 'Public' : (0, _getRandomFromArr.getRandomFromArr)(['Public', 'Private']),
        joined: joined,

        member_count: (0, _default_id.getRandomNumber)(1, 20) * 1000,
        // friend_arr: friend_arr,
        // friend_count: friend_count,

        action_name: joined ? 'joined' : 'join',

        member_arr: member_arr
    }, 'member_count', (0, _default_id.getRandomNumber)(1, 20) * 10000));
};

/***/ }),

/***/ "./src/_handle_api/fb_group/page.js":
/*!******************************************!*\
  !*** ./src/_handle_api/fb_group/page.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handle_API_GroupPage_R = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var handle_API_GroupPage_R = exports.handle_API_GroupPage_R = function () {
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
                        return (0, _page.API_GroupPage_R)(_extends({
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

    return function handle_API_GroupPage_R(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _page = __webpack_require__(/*! ../../api/api_django/fb_group/page */ "./src/api/api_django/fb_group/page.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/_initial/group/page.js":
/*!************************************!*\
  !*** ./src/_initial/group/page.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
        value: true
}));
exports.initial_group_page_about = exports.initial_group_page = undefined;

var _initialUser = __webpack_require__(/*! ../user/initialUser */ "./src/_initial/user/initialUser.js");

// COMMON
var initial_group_page = exports.initial_group_page = function initial_group_page() {
        return {
                id: 0,
                name: '',
                picture: '',

                color_obj: { bg: '', bg_btn: '', color: '' },
                affiliation_obj: {
                        to: 'person' || 0,
                        id: 0,
                        name: '',
                        picture: ''
                },

                joined: false,
                privacy: '',

                member_arr: [],
                member_count: 0,

                action_name: ''
        };
};

// ABOUT
var initial_group_page_about = exports.initial_group_page_about = function initial_group_page_about() {
        return {
                description: '',
                privacy: '',
                visibility: '',
                type_obj: { Icon: null, title: '' },

                member_count: 0,
                created_time: new Date().toString(),
                recommended_count: 0,

                friend_arr: [(0, _initialUser.initial_user)(), (0, _initialUser.initial_page)()],
                friend_name_str: '',
                admin_arr: [(0, _initialUser.initial_user)(), (0, _initialUser.initial_page)()],
                admin_name_str: '',

                post_day_count: 0,
                post_month_count: 0,
                member_week_count: 0
        };
};

/***/ }),

/***/ "./src/api/api_django/fb_group/page.js":
/*!*********************************************!*\
  !*** ./src/api/api_django/fb_group/page.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.API_GroupPage_R = undefined;

var _AxiosDjango = __webpack_require__(/*! ../_axios/AxiosDjango */ "./src/api/api_django/_axios/AxiosDjango.js");

var _AxiosDjango2 = _interopRequireDefault(_AxiosDjango);

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _page = __webpack_require__(/*! ../../../_default/fb_group/page */ "./src/_default/fb_group/page.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
var API_GroupPage_R = exports.API_GroupPage_R = function API_GroupPage_R(params) {
    return (0, _ConstAPI.API_FakeReal)((0, _page.default_fb_group_page_obj)(), function () {
        return (0, _AxiosDjango2.default)({
            url: 'api/facebook/fb-group-page-r/',
            method: 'GET',
            params: params
        });
    }, params);
};
//

/***/ }),

/***/ "./src/component/actions_group/_case/ActionsGroupCase.js":
/*!***************************************************************!*\
  !*** ./src/component/actions_group/_case/ActionsGroupCase.js ***!
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

var _BtnGroupJoin = __webpack_require__(/*! ../../button/group_actions/join/BtnGroupJoin */ "./src/component/button/group_actions/join/BtnGroupJoin.js");

var _BtnGroupJoin2 = _interopRequireDefault(_BtnGroupJoin);

var _ActionsGroupJoined = __webpack_require__(/*! ../joined/ActionsGroupJoined */ "./src/component/actions_group/joined/ActionsGroupJoined.js");

var _ActionsGroupJoined2 = _interopRequireDefault(_ActionsGroupJoined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
ActionsGroupCase.propTypes = {};

//
function ActionsGroupCase(_ref) {
    var action_name = _ref.action_name,
        group_id = _ref.group_id,
        handleAction = _ref.handleAction;

    //
    if (action_name == 'join') {
        return _react2.default.createElement(_BtnGroupJoin2.default
        // className={''}
        // title={title}
        // Icon={Icon}
        , { handleAction: handleAction
        });
    }

    //
    if (action_name == 'joined') {
        return _react2.default.createElement(_ActionsGroupJoined2.default, {
            group_id: group_id,
            handleAction: handleAction
        });
    }

    //
    return null;
}

exports.default = ActionsGroupCase;

/***/ }),

/***/ "./src/component/actions_group/joined/ActionsGroupJoined.js":
/*!******************************************************************!*\
  !*** ./src/component/actions_group/joined/ActionsGroupJoined.js ***!
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

var _action = __webpack_require__(/*! ../../../_handle_api/fb_group/action */ "./src/_handle_api/fb_group/action.js");

var _ActionsMultiList = __webpack_require__(/*! ../../actions_multi_list/_main/ActionsMultiList */ "./src/component/actions_multi_list/_main/ActionsMultiList.js");

var _ActionsMultiList2 = _interopRequireDefault(_ActionsMultiList);

var _BtnGroupJoined = __webpack_require__(/*! ../../button/group_actions/joined/BtnGroupJoined */ "./src/component/button/group_actions/joined/BtnGroupJoined.js");

var _BtnGroupJoined2 = _interopRequireDefault(_BtnGroupJoined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
ActionsGroupJoined.propTypes = {};

//

//
function ActionsGroupJoined(_ref) {
    var group_id = _ref.group_id,
        handleAction = _ref.handleAction;

    //
    function handle_API_L() {
        return (0, _action.handle_API_GroupActions_L)({
            group_id: group_id,
            type: 'joined'
        });
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'ActionsGroupJoined' },
        _react2.default.createElement(_ActionsMultiList2.default, {
            title_action: _react2.default.createElement(_BtnGroupJoined2.default
            // className={''}
            // title={btn_title}
            // Icon={BtnIcon}
            // handleAction={handleAction}
            , null),
            handle_API_L: handle_API_L,
            handleAction: handleAction
        })
    );
}

exports.default = ActionsGroupJoined;

/***/ }),

/***/ "./src/component/button/group_actions/invite/BtnGroupInvite.js":
/*!*********************************************************************!*\
  !*** ./src/component/button/group_actions/invite/BtnGroupInvite.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
//

//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconPlusSubtract = __webpack_require__(/*! ../../../../_icons_svg/_icon_plus_subtract/IconPlusSubtract */ "./src/_icons_svg/_icon_plus_subtract/IconPlusSubtract.js");

var _IconPlusSubtract2 = _interopRequireDefault(_IconPlusSubtract);

var _BtnActions = __webpack_require__(/*! ../../actions/BtnActions */ "./src/component/button/actions/BtnActions.js");

var _BtnActions2 = _interopRequireDefault(_BtnActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
BtnGroupInvite.propTypes = _extends({}, _BtnActions2.default.propTypes);

BtnGroupInvite.defaultProps = {
    className: 'bg-blue text-white',
    title: 'Invite',
    Icon: _react2.default.createElement(_IconPlusSubtract2.default, { stroke: 'currentColor' })
};

//
function BtnGroupInvite(_ref) {
    var className = _ref.className,
        title = _ref.title,
        Icon = _ref.Icon,
        btn_props = _ref.btn_props,
        handleAction = _ref.handleAction;

    //
    function inviteFriend() {
        handleAction('invite');
    }

    //
    return _react2.default.createElement(_BtnActions2.default, {
        className: 'BtnGroupInvite ' + className,
        title: title,
        Icon: Icon,
        btn_props: btn_props,
        handleClick: inviteFriend
    });
}

exports.default = BtnGroupInvite;

/***/ }),

/***/ "./src/component/button/group_actions/joined/BtnGroupJoined.js":
/*!*********************************************************************!*\
  !*** ./src/component/button/group_actions/joined/BtnGroupJoined.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
//

//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconGroup = __webpack_require__(/*! ../../../../_icons_svg/icon_group/IconGroup */ "./src/_icons_svg/icon_group/IconGroup.js");

var _IconGroup2 = _interopRequireDefault(_IconGroup);

var _BtnActions = __webpack_require__(/*! ../../actions/BtnActions */ "./src/component/button/actions/BtnActions.js");

var _BtnActions2 = _interopRequireDefault(_BtnActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
BtnGroupJoined.propTypes = _extends({}, _BtnActions2.default.propTypes);

BtnGroupJoined.defaultProps = {
    className: 'bg-ccc',
    title: 'Joined',
    Icon: _react2.default.createElement(_IconGroup2.default, null)
};

//
function BtnGroupJoined(_ref) {
    var className = _ref.className,
        title = _ref.title,
        Icon = _ref.Icon,
        handleAction = _ref.handleAction;

    //
    function handleClick() {
        handleAction && handleAction('joined');
    }

    //
    return _react2.default.createElement(_BtnActions2.default, {
        className: 'BtnGroupJoined ' + className,
        title: title,
        Icon: Icon,
        handleClick: handleClick
    });
}

exports.default = BtnGroupJoined;

/***/ }),

/***/ "./src/component/button/key_search/BtnKeySearch.js":
/*!*********************************************************!*\
  !*** ./src/component/button/key_search/BtnKeySearch.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconsInput = __webpack_require__(/*! ../../../_icons_svg/Icons_input/IconsInput */ "./src/_icons_svg/Icons_input/IconsInput.js");

var _IconsInput2 = _interopRequireDefault(_IconsInput);

var _BtnActions = __webpack_require__(/*! ../actions/BtnActions */ "./src/component/button/actions/BtnActions.js");

var _BtnActions2 = _interopRequireDefault(_BtnActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
BtnKeySearch.propTypes = {};

//

//
function BtnKeySearch(_ref) {
    var handleClick = _ref.handleClick;

    //
    return _react2.default.createElement(_BtnActions2.default, {
        className: 'bg-ccc',
        Icon: _react2.default.createElement(_IconsInput2.default, { y: 200 }),
        title: '',
        use_title: false
        //  use_icon
        , handleClick: handleClick
    });
}

exports.default = BtnKeySearch;

/***/ }),

/***/ "./src/pages/group_page/_components/info/_main/GroupPageInfo.js":
/*!**********************************************************************!*\
  !*** ./src/pages/group_page/_components/info/_main/GroupPageInfo.js ***!
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

var _GroupPageCover = __webpack_require__(/*! ../cover/_main/GroupPageCover */ "./src/pages/group_page/_components/info/cover/_main/GroupPageCover.js");

var _GroupPageCover2 = _interopRequireDefault(_GroupPageCover);

var _GroupPageName = __webpack_require__(/*! ../name/GroupPageName */ "./src/pages/group_page/_components/info/name/GroupPageName.js");

var _GroupPageName2 = _interopRequireDefault(_GroupPageName);

var _GroupPageMembers = __webpack_require__(/*! ../members/_main/GroupPageMembers */ "./src/pages/group_page/_components/info/members/_main/GroupPageMembers.js");

var _GroupPageMembers2 = _interopRequireDefault(_GroupPageMembers);

var _GroupPageActions = __webpack_require__(/*! ../actions/_main/GroupPageActions */ "./src/pages/group_page/_components/info/actions/_main/GroupPageActions.js");

var _GroupPageActions2 = _interopRequireDefault(_GroupPageActions);

__webpack_require__(/*! ./GroupPageInfo.scss */ "./src/pages/group_page/_components/info/_main/GroupPageInfo.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GroupPageInfo.propTypes = {};

//

//

//
function GroupPageInfo(_ref) {
    var group_id = _ref.group_id,
        name = _ref.name,
        picture = _ref.picture,
        color_obj = _ref.color_obj,
        affiliation_obj = _ref.affiliation_obj,
        privacy = _ref.privacy,
        action_name = _ref.action_name,
        member_arr = _ref.member_arr,
        member_count = _ref.member_count,
        openCoverPicture = _ref.openCoverPicture,
        toggleRelatedGroup = _ref.toggleRelatedGroup,
        handleAction = _ref.handleAction;

    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupPageInfo' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_GroupPageCover2.default, {
                picture: picture,
                affiliation_obj: affiliation_obj,
                bg_btn: color_obj.bg_btn,
                openCoverPicture: openCoverPicture
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'GroupPageInfo_foot fb-profile-width-contain padding-top-16px' },
            _react2.default.createElement(
                'div',
                { className: 'GroupPageInfo_foot_row display-flex space-between' },
                _react2.default.createElement(
                    'div',
                    { className: 'padding-bottom-16px padding-top-6px padding-x-6px' },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_GroupPageName2.default, { name: name })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'GroupPageInfo_member font-17px' },
                        _react2.default.createElement(_GroupPageMembers2.default, {
                            group_id: group_id,
                            privacy: privacy,
                            member_arr: member_arr,
                            member_count: member_count
                        })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'align-self-end padding-bottom-16px padding-top-6px padding-x-6px' },
                    _react2.default.createElement(_GroupPageActions2.default, {
                        action_name: action_name,
                        group_id: group_id,
                        bg_btn: color_obj.bg_btn
                        //
                        , handleAction: handleAction,
                        toggleRelatedGroup: toggleRelatedGroup
                    })
                )
            )
        )
    );
}

exports.default = GroupPageInfo;

/***/ }),

/***/ "./src/pages/group_page/_components/info/actions/_main/GroupPageActions.js":
/*!*********************************************************************************!*\
  !*** ./src/pages/group_page/_components/info/actions/_main/GroupPageActions.js ***!
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

var _IconsArrow = __webpack_require__(/*! ../../../../../../_icons_svg/icons_arrow/IconsArrow */ "./src/_icons_svg/icons_arrow/IconsArrow.js");

var _IconsArrow2 = _interopRequireDefault(_IconsArrow);

var _BtnGroupInvite = __webpack_require__(/*! ../../../../../../component/button/group_actions/invite/BtnGroupInvite */ "./src/component/button/group_actions/invite/BtnGroupInvite.js");

var _BtnGroupInvite2 = _interopRequireDefault(_BtnGroupInvite);

var _BtnActions = __webpack_require__(/*! ../../../../../../component/button/actions/BtnActions */ "./src/component/button/actions/BtnActions.js");

var _BtnActions2 = _interopRequireDefault(_BtnActions);

var _ActionsGroupCase = __webpack_require__(/*! ../../../../../../component/actions_group/_case/ActionsGroupCase */ "./src/component/actions_group/_case/ActionsGroupCase.js");

var _ActionsGroupCase2 = _interopRequireDefault(_ActionsGroupCase);

__webpack_require__(/*! ./GroupPageActions.scss */ "./src/pages/group_page/_components/info/actions/_main/GroupPageActions.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
GroupPageActions.propTypes = {};

//

//

//
function GroupPageActions(_ref) {
    var action_name = _ref.action_name,
        group_id = _ref.group_id,
        bg_btn = _ref.bg_btn,
        handleAction = _ref.handleAction,
        toggleRelatedGroup = _ref.toggleRelatedGroup;

    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupPageActions' },
        _react2.default.createElement(
            'div',
            { className: 'GroupPageActions_row display-flex align-items-center' },
            _react2.default.createElement(
                'div',
                { className: 'GroupPageActions_btn margin-right-8px' },
                _react2.default.createElement(_ActionsGroupCase2.default, {
                    action_name: action_name,
                    group_id: group_id,
                    handleAction: handleAction
                })
            ),
            action_name == 'joined' ? _react2.default.createElement(
                'div',
                { className: 'GroupPageActions_btn margin-right-8px' },
                _react2.default.createElement(_BtnGroupInvite2.default, {
                    className: 'text-white',
                    btn_props: { style: { backgroundColor: bg_btn } },
                    handleAction: handleAction
                })
            ) : null,
            _Constant.IS_MOBILE || action_name != 'joined' ? null : _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_BtnActions2.default, {
                    className: 'bg-ccc padding-x-16px',
                    Icon: _react2.default.createElement(_IconsArrow2.default, {
                        class_icon: 'rotate-90',
                        x: 200,
                        size_icon: '12px'
                    }),
                    title: '',
                    use_title: false
                    //  use_icon
                    , handleClick: toggleRelatedGroup
                })
            )
        )
    );
}

exports.default = GroupPageActions;

/***/ }),

/***/ "./src/pages/group_page/_components/info/cover/_main/GroupPageCover.js":
/*!*****************************************************************************!*\
  !*** ./src/pages/group_page/_components/info/cover/_main/GroupPageCover.js ***!
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

var _ProfileLayoutCover = __webpack_require__(/*! ../../../../../../component/profile_layout/cover/_main/ProfileLayoutCover */ "./src/component/profile_layout/cover/_main/ProfileLayoutCover.js");

var _ProfileLayoutCover2 = _interopRequireDefault(_ProfileLayoutCover);

var _GroupPageAffiliation = __webpack_require__(/*! ../affiliation/GroupPageAffiliation */ "./src/pages/group_page/_components/info/cover/affiliation/GroupPageAffiliation.js");

var _GroupPageAffiliation2 = _interopRequireDefault(_GroupPageAffiliation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
GroupPageCover.propTypes = {};

//
function GroupPageCover(_ref) {
    var picture = _ref.picture,
        bg_btn = _ref.bg_btn,
        affiliation_obj = _ref.affiliation_obj,
        openCoverPicture = _ref.openCoverPicture;

    //
    return _react2.default.createElement(
        _ProfileLayoutCover2.default,
        {
            cover: picture,
            link_to: '/post/1',
            openCoverPicture: openCoverPicture
        },
        affiliation_obj.id > 0 ? _react2.default.createElement(
            'div',
            { className: 'pos-abs bottom-0 left-0 w-100per' },
            _react2.default.createElement(_GroupPageAffiliation2.default, {
                bg_btn: bg_btn,
                affiliation_obj: affiliation_obj
            })
        ) : null
    );
}

exports.default = GroupPageCover;

/***/ }),

/***/ "./src/pages/group_page/_components/info/cover/affiliation/GroupPageAffiliation.js":
/*!*****************************************************************************************!*\
  !*** ./src/pages/group_page/_components/info/cover/affiliation/GroupPageAffiliation.js ***!
  \*****************************************************************************************/
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

var _ActionPreviewProfile = __webpack_require__(/*! ../../../../../../component/action_preview_profile/_main/ActionPreviewProfile */ "./src/component/action_preview_profile/_main/ActionPreviewProfile.js");

var _ActionPreviewProfile2 = _interopRequireDefault(_ActionPreviewProfile);

var _ActionPreviewPage = __webpack_require__(/*! ../../../../../../component/action_preview_page/_main/ActionPreviewPage */ "./src/component/action_preview_page/_main/ActionPreviewPage.js");

var _ActionPreviewPage2 = _interopRequireDefault(_ActionPreviewPage);

__webpack_require__(/*! ./GroupPageAffiliation.scss */ "./src/pages/group_page/_components/info/cover/affiliation/GroupPageAffiliation.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GroupPageAffiliation.propTypes = {};

//

//

//
function GroupPageAffiliation(_ref) {
    var bg_btn = _ref.bg_btn,
        affiliation_obj = _ref.affiliation_obj;

    //
    var to = affiliation_obj.to,
        id = affiliation_obj.id,
        name = affiliation_obj.name;

    //

    return _react2.default.createElement(
        'div',
        {
            className: 'GroupPageAffiliation padding-x-16px padding-y-10px font-600 bg-blue text-white',
            style: {
                backgroundColor: bg_btn || undefined,
                color: bg_btn ? 'white' : undefined
            }
        },
        _react2.default.createElement(
            'div',
            { className: 'display-flex' },
            _react2.default.createElement(
                'div',
                { className: 'margin-right-8px' },
                'Group by'
            ),
            _react2.default.createElement(
                'div',
                null,
                to == 'person' ? _react2.default.createElement(_ActionPreviewProfile2.default, {
                    user_id: id,
                    title_action: _react2.default.createElement(
                        _reactRouterDom.Link,
                        {
                            className: 'color-inherit hv-underline',
                            to: '/profile/' + id
                        },
                        name
                    )
                }) : _react2.default.createElement(_ActionPreviewPage2.default, {
                    page_id: id,
                    title_action: _react2.default.createElement(
                        _reactRouterDom.Link,
                        {
                            className: 'color-inherit hv-underline',
                            to: '/page/' + id
                        },
                        name
                    )
                })
            )
        )
    );
}

exports.default = GroupPageAffiliation;

/***/ }),

/***/ "./src/pages/group_page/_components/info/members/_main/GroupPageMembers.js":
/*!*********************************************************************************!*\
  !*** ./src/pages/group_page/_components/info/members/_main/GroupPageMembers.js ***!
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

var _GroupPageMemberCount = __webpack_require__(/*! ../count/GroupPageMemberCount */ "./src/pages/group_page/_components/info/members/count/GroupPageMemberCount.js");

var _GroupPageMemberCount2 = _interopRequireDefault(_GroupPageMemberCount);

var _GroupPageMemberPics = __webpack_require__(/*! ../pics/GroupPageMemberPics */ "./src/pages/group_page/_components/info/members/pics/GroupPageMemberPics.js");

var _GroupPageMemberPics2 = _interopRequireDefault(_GroupPageMemberPics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
GroupPageMembers.propTypes = {};

//
function GroupPageMembers(_ref) {
    var group_id = _ref.group_id,
        privacy = _ref.privacy,
        member_arr = _ref.member_arr,
        member_count = _ref.member_count;

    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupPageMembers' },
        _react2.default.createElement(
            'div',
            { className: 'margin-top-8px margin-bottom-12px' },
            _react2.default.createElement(_GroupPageMemberCount2.default, {
                privacy: privacy,
                member_count: member_count
            })
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_GroupPageMemberPics2.default, {
                group_id: group_id,
                member_arr: member_arr,
                member_count: member_count
            })
        )
    );
}

exports.default = GroupPageMembers;

/***/ }),

/***/ "./src/pages/group_page/_components/info/members/count/GroupPageMemberCount.js":
/*!*************************************************************************************!*\
  !*** ./src/pages/group_page/_components/info/members/count/GroupPageMemberCount.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _UnitNumber = __webpack_require__(/*! ../../../../../../_some_function/UnitNumber */ "./src/_some_function/UnitNumber.js");

var _IconPrivate = __webpack_require__(/*! ../../../../../../_icons_svg/icon_private/IconPrivate */ "./src/_icons_svg/icon_private/IconPrivate.js");

var _IconPrivate2 = _interopRequireDefault(_IconPrivate);

var _IconPublic = __webpack_require__(/*! ../../../../../../_icons_svg/icon_public/IconPublic */ "./src/_icons_svg/icon_public/IconPublic.js");

var _IconPublic2 = _interopRequireDefault(_IconPublic);

__webpack_require__(/*! ./GroupPageMemberCount.scss */ "./src/pages/group_page/_components/info/members/count/GroupPageMemberCount.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
GroupPageMemberCount.propTypes = {};

//

//

//
function GroupPageMemberCount(_ref) {
    var privacy = _ref.privacy,
        member_count = _ref.member_count;

    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupPageMemberCount text-secondary' },
        _react2.default.createElement(
            'div',
            { className: 'GroupPageMemberCount_row display-flex align-items-center' },
            _react2.default.createElement(
                'div',
                { className: 'display-flex align-items-center' },
                privacy.toUpperCase() == 'PRIVATE' ? _react2.default.createElement(_IconPrivate2.default, { stroke: 'currentColor' }) : _react2.default.createElement(_IconPublic2.default, { stroke: 'currentColor' }),
                _react2.default.createElement(
                    'div',
                    { className: 'margin-left-5px' },
                    privacy,
                    ' group'
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'margin-x-5px' },
                '\xB7'
            ),
            _react2.default.createElement(
                'div',
                null,
                (0, _UnitNumber.UnitNumber)(member_count),
                ' member',
                member_count >= 2 ? 's' : ''
            )
        )
    );
}

exports.default = GroupPageMemberCount;

/***/ }),

/***/ "./src/pages/group_page/_components/info/members/pics/GroupPageMemberPics.js":
/*!***********************************************************************************!*\
  !*** ./src/pages/group_page/_components/info/members/pics/GroupPageMemberPics.js ***!
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

var _ProfileLayoutOverlapFriends = __webpack_require__(/*! ../../../../../../component/profile_layout/overlap_friends/_main/ProfileLayoutOverlapFriends */ "./src/component/profile_layout/overlap_friends/_main/ProfileLayoutOverlapFriends.js");

var _ProfileLayoutOverlapFriends2 = _interopRequireDefault(_ProfileLayoutOverlapFriends);

__webpack_require__(/*! ./GroupPageMemberPics.scss */ "./src/pages/group_page/_components/info/members/pics/GroupPageMemberPics.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
GroupPageMemberPics.propTypes = {};

//

//
function GroupPageMemberPics(_ref) {
    var group_id = _ref.group_id,
        member_arr = _ref.member_arr,
        member_count = _ref.member_count;

    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupPageMemberPics' },
        _react2.default.createElement(_ProfileLayoutOverlapFriends2.default, {
            link_to: '/group/' + group_id + '/members',
            friend_arr: member_arr,
            has_more_friend: member_arr < member_count
        })
    );
}

exports.default = GroupPageMemberPics;

/***/ }),

/***/ "./src/pages/group_page/_components/info/name/GroupPageName.js":
/*!*********************************************************************!*\
  !*** ./src/pages/group_page/_components/info/name/GroupPageName.js ***!
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

var _ProfileLayoutName = __webpack_require__(/*! ../../../../../component/profile_layout/name/ProfileLayoutName */ "./src/component/profile_layout/name/ProfileLayoutName.js");

var _ProfileLayoutName2 = _interopRequireDefault(_ProfileLayoutName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GroupPageName.propTypes = {};

//

//
function GroupPageName(_ref) {
    var name = _ref.name;

    //
    return _react2.default.createElement(_ProfileLayoutName2.default, { name: name });
}

exports.default = GroupPageName;

/***/ }),

/***/ "./src/pages/group_page/_components/nav/_main/GroupPageNav.js":
/*!********************************************************************!*\
  !*** ./src/pages/group_page/_components/nav/_main/GroupPageNav.js ***!
  \********************************************************************/
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

var _Constant = __webpack_require__(/*! ../../../../../_constant/Constant */ "./src/_constant/Constant.js");

var _ActionsGroupCase = __webpack_require__(/*! ../../../../../component/actions_group/_case/ActionsGroupCase */ "./src/component/actions_group/_case/ActionsGroupCase.js");

var _ActionsGroupCase2 = _interopRequireDefault(_ActionsGroupCase);

var _BtnGroupInvite = __webpack_require__(/*! ../../../../../component/button/group_actions/invite/BtnGroupInvite */ "./src/component/button/group_actions/invite/BtnGroupInvite.js");

var _BtnGroupInvite2 = _interopRequireDefault(_BtnGroupInvite);

var _ProfileLayoutNav = __webpack_require__(/*! ../../../../../component/profile_layout/nav/_layout/ProfileLayoutNav */ "./src/component/profile_layout/nav/_layout/ProfileLayoutNav.js");

var _ProfileLayoutNav2 = _interopRequireDefault(_ProfileLayoutNav);

var _GroupPageNavMore = __webpack_require__(/*! ../more/_main/GroupPageNavMore */ "./src/pages/group_page/_components/nav/more/_main/GroupPageNavMore.js");

var _GroupPageNavMore2 = _interopRequireDefault(_GroupPageNavMore);

var _GroupPageNavItem = __webpack_require__(/*! ../item/GroupPageNavItem */ "./src/pages/group_page/_components/nav/item/GroupPageNavItem.js");

var _GroupPageNavItem2 = _interopRequireDefault(_GroupPageNavItem);

var _GroupPageBtnSearch = __webpack_require__(/*! ../btn_search/GroupPageBtnSearch */ "./src/pages/group_page/_components/nav/btn_search/GroupPageBtnSearch.js");

var _GroupPageBtnSearch2 = _interopRequireDefault(_GroupPageBtnSearch);

var _GroupPageActionOther = __webpack_require__(/*! ../action_other/GroupPageActionOther */ "./src/pages/group_page/_components/nav/action_other/GroupPageActionOther.js");

var _GroupPageActionOther2 = _interopRequireDefault(_GroupPageActionOther);

var _GPNavGroup = __webpack_require__(/*! ../group/GPNavGroup */ "./src/pages/group_page/_components/nav/group/GPNavGroup.js");

var _GPNavGroup2 = _interopRequireDefault(_GPNavGroup);

__webpack_require__(/*! ./GroupPageNav.scss */ "./src/pages/group_page/_components/nav/_main/GroupPageNav.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
//

//

//

//


//
var MORE_LINK_ARR = function MORE_LINK_ARR(_ref) {
    var _ref$group_id = _ref.group_id,
        group_id = _ref$group_id === undefined ? 0 : _ref$group_id;
    return [{
        title: 'Media',
        link_to: '/group/' + group_id + '/media'
    }, {
        title: 'Files',
        link_to: '/group/' + group_id + '/files'
    }];
};

//
var NAV_LINK_ARR = function NAV_LINK_ARR(_ref2) {
    var _ref2$group_id = _ref2.group_id,
        group_id = _ref2$group_id === undefined ? 0 : _ref2$group_id;
    return [{
        title: 'About',
        link_to: '/group/' + group_id + '/about'
    }, {
        title: 'Discussion',
        link_to: '/group/' + group_id + '/discuss'
    }, {
        title: 'Members',
        link_to: '/group/' + group_id + '/members'
    }, {
        title: 'Topics',
        link_to: '/group/' + group_id + '/topics'
    }].concat(_toConsumableArray(_Constant.IS_MOBILE ? MORE_LINK_ARR({ group_id: group_id }) : []));
};

//
GroupPageNav.propTypes = {};

//
function GroupPageNav(_ref3) {
    var group_id = _ref3.group_id,
        color = _ref3.color,
        bg_btn = _ref3.bg_btn,
        name = _ref3.name,
        picture = _ref3.picture,
        link_to = _ref3.link_to,
        action_name = _ref3.action_name,
        no_permission = _ref3.no_permission,
        handleAction = _ref3.handleAction;

    //
    var _useState = (0, _react.useState)({
        nav_arr: NAV_LINK_ARR({ group_id: group_id }),
        nav_more_arr: _Constant.IS_MOBILE ? [] : MORE_LINK_ARR({ group_id: group_id })
    }),
        _useState2 = _slicedToArray(_useState, 2),
        state_obj = _useState2[0],
        setStateObj = _useState2[1];

    //


    return _react2.default.createElement(_ProfileLayoutNav2.default, {
        left_main_elm: _react2.default.createElement(
            'ul',
            { className: 'display-flex list-none h-100per padding-top-3px' },
            state_obj.nav_arr.slice(0, no_permission ? 2 : undefined).map(function (item, ix) {
                return _react2.default.createElement(
                    'li',
                    { key: ix, className: 'GroupPageNav_item' },
                    _react2.default.createElement(_GroupPageNavItem2.default, {
                        title: item.title,
                        link_to: item.link_to,
                        color_active: color,
                        border_active: bg_btn
                    })
                );
            }),
            _Constant.IS_MOBILE || no_permission ? null : _react2.default.createElement(
                'li',
                { className: 'GroupPageNav_item' },
                _react2.default.createElement(_GroupPageNavMore2.default, {
                    color: color,
                    bg_btn: bg_btn,
                    more_link_arr: state_obj.nav_more_arr
                })
            )
        ),
        left_sticky_elm: _react2.default.createElement(
            'div',
            { className: 'flex-between-center h-100per' },
            _react2.default.createElement(
                'div',
                { className: 'flex-grow-1 h-100per padding-y-2px overflow-hidden' },
                _react2.default.createElement(_GPNavGroup2.default, {
                    name: name,
                    picture: picture,
                    link_to: link_to
                })
            ),
            _react2.default.createElement(
                'div',
                { className: 'display-flex align-items-center' },
                _react2.default.createElement(
                    'div',
                    { className: 'margin-left-8px' },
                    _react2.default.createElement(_ActionsGroupCase2.default, {
                        action_name: action_name,
                        group_id: group_id,
                        handleAction: handleAction
                    })
                ),
                action_name == 'joined' ? _react2.default.createElement(
                    'div',
                    { className: 'margin-left-8px' },
                    _react2.default.createElement(_BtnGroupInvite2.default, {
                        className: 'text-white',
                        btn_props: {
                            style: {
                                backgroundColor: bg_btn
                            }
                        },
                        handleAction: handleAction
                    })
                ) : null
            )
        ),
        right_elm: _react2.default.createElement(
            'div',
            { className: 'display-flex align-items-center h-100per' },
            no_permission ? null : _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_GroupPageBtnSearch2.default, null)
            ),
            _react2.default.createElement(
                'div',
                { className: 'margin-left-8px' },
                _react2.default.createElement(_GroupPageActionOther2.default, {
                    group_id: group_id,
                    handleAction: handleAction
                })
            )
        )
    });
}

exports.default = GroupPageNav;

/***/ }),

/***/ "./src/pages/group_page/_components/nav/action_other/GroupPageActionOther.js":
/*!***********************************************************************************!*\
  !*** ./src/pages/group_page/_components/nav/action_other/GroupPageActionOther.js ***!
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

var _ActionsGroupOther = __webpack_require__(/*! ../../../../../component/actions_group/other/ActionsGroupOther */ "./src/component/actions_group/other/ActionsGroupOther.js");

var _ActionsGroupOther2 = _interopRequireDefault(_ActionsGroupOther);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GroupPageActionOther.propTypes = {};

//

//
function GroupPageActionOther(_ref) {
    var group_id = _ref.group_id,
        handleAction = _ref.handleAction;

    //
    //
    return _react2.default.createElement(_ActionsGroupOther2.default, { group_id: group_id, handleAction: handleAction });
}

exports.default = GroupPageActionOther;

/***/ }),

/***/ "./src/pages/group_page/_components/nav/btn_search/GroupPageBtnSearch.js":
/*!*******************************************************************************!*\
  !*** ./src/pages/group_page/_components/nav/btn_search/GroupPageBtnSearch.js ***!
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

var _BtnKeySearch = __webpack_require__(/*! ../../../../../component/button/key_search/BtnKeySearch */ "./src/component/button/key_search/BtnKeySearch.js");

var _BtnKeySearch2 = _interopRequireDefault(_BtnKeySearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GroupPageBtnSearch.propTypes = {};

//

//
function GroupPageBtnSearch(_ref) {
    var openGroupSearch = _ref.openGroupSearch;

    //
    return _react2.default.createElement(_BtnKeySearch2.default, { handleClick: openGroupSearch });
}

exports.default = GroupPageBtnSearch;

/***/ }),

/***/ "./src/pages/group_page/_components/nav/group/GPNavGroup.js":
/*!******************************************************************!*\
  !*** ./src/pages/group_page/_components/nav/group/GPNavGroup.js ***!
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _ProfileLayoutUserSticky = __webpack_require__(/*! ../../../../../component/profile_layout/user_sticky/ProfileLayoutUserSticky */ "./src/component/profile_layout/user_sticky/ProfileLayoutUserSticky.js");

var _ProfileLayoutUserSticky2 = _interopRequireDefault(_ProfileLayoutUserSticky);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GPNavGroup.propTypes = {};

//

// 
function GPNavGroup(_ref) {
    var link_to = _ref.link_to,
        picture = _ref.picture,
        name = _ref.name;

    //
    return _react2.default.createElement(_ProfileLayoutUserSticky2.default, {
        link_to: link_to,
        picture: picture,
        name: name
    });
}

exports.default = GPNavGroup;

/***/ }),

/***/ "./src/pages/group_page/_components/nav/item/GroupPageNavItem.js":
/*!***********************************************************************!*\
  !*** ./src/pages/group_page/_components/nav/item/GroupPageNavItem.js ***!
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

var _ProfileLayoutNavItem = __webpack_require__(/*! ../../../../../component/profile_layout/nav/item/ProfileLayoutNavItem */ "./src/component/profile_layout/nav/item/ProfileLayoutNavItem.js");

var _ProfileLayoutNavItem2 = _interopRequireDefault(_ProfileLayoutNavItem);

__webpack_require__(/*! ./GroupPageNavItem.scss */ "./src/pages/group_page/_components/nav/item/GroupPageNavItem.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
GroupPageNavItem.propTypes = {};

//

//
function GroupPageNavItem(_ref) {
    var title = _ref.title,
        link_to = _ref.link_to,
        color_active = _ref.color_active,
        border_active = _ref.border_active;

    //
    return _react2.default.createElement(_ProfileLayoutNavItem2.default, {
        title: title,
        link_to: link_to,
        color_active: color_active,
        border_active: border_active
    });
}

exports.default = GroupPageNavItem;

/***/ }),

/***/ "./src/pages/group_page/_components/nav/more/_main/GroupPageNavMore.js":
/*!*****************************************************************************!*\
  !*** ./src/pages/group_page/_components/nav/more/_main/GroupPageNavMore.js ***!
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

var _ProfileLayoutNavMore = __webpack_require__(/*! ../../../../../../component/profile_layout/nav/more/_main/ProfileLayoutNavMore */ "./src/component/profile_layout/nav/more/_main/ProfileLayoutNavMore.js");

var _ProfileLayoutNavMore2 = _interopRequireDefault(_ProfileLayoutNavMore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GroupPageNavMore.propTypes = {};

//

//
function GroupPageNavMore(_ref) {
    var color = _ref.color,
        bg_btn = _ref.bg_btn,
        more_link_arr = _ref.more_link_arr;

    var is_active = more_link_arr.some(function (item) {
        return location.pathname.startsWith(item.link_to);
    });

    //
    return _react2.default.createElement(_ProfileLayoutNavMore2.default, {
        color: color,
        bg_btn: bg_btn,
        more_link_arr: more_link_arr,
        is_active: is_active
    });
}

exports.default = GroupPageNavMore;

/***/ }),

/***/ "./src/pages/group_page/_main/GroupPage.js":
/*!*************************************************!*\
  !*** ./src/pages/group_page/_main/GroupPage.js ***!
  \*************************************************/
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _page = __webpack_require__(/*! ../../../_initial/group/page */ "./src/_initial/group/page.js");

var _page2 = __webpack_require__(/*! ../../../_handle_api/fb_group/page */ "./src/_handle_api/fb_group/page.js");

var _main = __webpack_require__(/*! ../_routes/_main */ "./src/pages/group_page/_routes/_main.js");

__webpack_require__(/*! ./GroupPageCommon.scss */ "./src/pages/group_page/_main/GroupPageCommon.scss");

var _GroupPageInfo = __webpack_require__(/*! ../_components/info/_main/GroupPageInfo */ "./src/pages/group_page/_components/info/_main/GroupPageInfo.js");

var _GroupPageInfo2 = _interopRequireDefault(_GroupPageInfo);

var _GroupPageNav = __webpack_require__(/*! ../_components/nav/_main/GroupPageNav */ "./src/pages/group_page/_components/nav/_main/GroupPageNav.js");

var _GroupPageNav2 = _interopRequireDefault(_GroupPageNav);

__webpack_require__(/*! ./GroupPage.scss */ "./src/pages/group_page/_main/GroupPage.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
GroupPage.propTypes = {};

//
function GroupPage(props) {

    // -------

    //
    var getData_API = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _page2.handle_API_GroupPage_R)({ group_id: id });

                        case 2:
                            data = _context.sent;


                            setStateObj(function (state_obj) {
                                return _extends({}, state_obj, {
                                    group_obj: data,
                                    has_fetch: true
                                });
                            });

                        case 4:
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

    // ------

    //


    //
    var _useParams = (0, _reactRouterDom.useParams)(),
        id = _useParams.id;

    //


    var _useState = (0, _react.useState)({
        group_obj: (0, _page.initial_group_page)(),
        has_fetch: false
    }),
        _useState2 = _slicedToArray(_useState, 2),
        state_obj = _useState2[0],
        setStateObj = _useState2[1];

    var group_obj = state_obj.group_obj,
        has_fetch = state_obj.has_fetch;
    var name = group_obj.name,
        picture = group_obj.picture,
        color_obj = group_obj.color_obj,
        affiliation_obj = group_obj.affiliation_obj,
        is_admin = group_obj.is_admin,
        is_moderate = group_obj.is_moderate,
        privacy = group_obj.privacy,
        action_name = group_obj.action_name,
        member_arr = group_obj.member_arr,
        member_count = group_obj.member_count;


    var no_permission = action_name == 'join' && privacy.toUpperCase() == 'PRIVATE';

    //
    (0, _react.useEffect)(function () {
        getData_API();
    }, [id]);function openCoverPicture() {}

    //
    function toggleRelatedGroup() {}

    //
    function handleAction() {}

    // -----

    var route_props = {
        group_id: id,
        is_admin: is_admin,
        is_moderate: is_moderate,
        no_permission: no_permission,
        member_count: member_count
    };

    if (location.pathname.search(/\/group\/\d+\/discuss/) == 0) {
        route_props['bg_btn'] = color_obj.bg_btn;
    }

    // -----

    if (!has_fetch) {
        return null;
    }

    //
    return _react2.default.createElement(
        'div',
        { key: id, className: 'GroupPage' },
        _react2.default.createElement(
            'div',
            { className: 'bg-primary' },
            _react2.default.createElement(_GroupPageInfo2.default, {
                group_id: id,
                name: name,
                picture: picture
                //
                , color_obj: color_obj,
                affiliation_obj: affiliation_obj
                //
                , privacy: privacy,
                action_name: action_name,
                member_arr: member_arr,
                member_count: member_count
                //
                , openCoverPicture: openCoverPicture,
                toggleRelatedGroup: toggleRelatedGroup,
                handleAction: handleAction
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'fb-profile-nav' },
            _react2.default.createElement(
                'div',
                { className: 'GroupPage_nav_contain fb-profile-width-contain' },
                _react2.default.createElement(_GroupPageNav2.default, {
                    group_id: id,
                    color: color_obj.color,
                    bg_btn: color_obj.bg_btn
                    //
                    , no_permission: no_permission,
                    action_name: action_name
                    //
                    , name: name,
                    picture: picture,
                    link_to: '/group/' + id + '/discuss'
                })
            )
        ),
        _react2.default.createElement(
            'div',
            {
                className: 'padding-y-16px',
                style: { backgroundColor: color_obj.bg }
            },
            id > 0 ? _react2.default.createElement(
                _react.Suspense,
                { fallback: null },
                _react2.default.createElement(
                    _reactRouterDom.Switch,
                    null,
                    _main.GroupPageRoutes.slice(0, no_permission ? 2 : undefined).map(function (item, ix) {
                        return _react2.default.createElement(_reactRouterDom.Route, {
                            key: ix
                            // component={item.component}
                            , path: item.path,
                            render: function render(props) {
                                return _react2.default.createElement(item.component, _extends({}, props, route_props));
                            }
                        });
                    }),
                    _react2.default.createElement(_reactRouterDom.Redirect, { to: '/group/' + id + '/discuss' })
                )
            ) : null
        )
    );
}

exports.default = GroupPage;

/***/ }),

/***/ "./src/pages/group_page/_routes/_main.js":
/*!***********************************************!*\
  !*** ./src/pages/group_page/_routes/_main.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.GroupPageRoutes = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var GroupPageAbout = _react2.default.lazy(function () {
    return Promise.all(/*! import() */[__webpack_require__.e("src__handle_api_fb_group_suggested_js-src_pages_group__components_row_cards__components_item_-12d57d"), __webpack_require__.e("src_pages_group__components_row_cards_fit_GroupRowCardsFit_js"), __webpack_require__.e("src_pages_group_page_pages_about__main_GroupPageAbout_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/about/_main/GroupPageAbout */ "./src/pages/group_page/pages/about/_main/GroupPageAbout.js"));
});

var GroupPageDiscuss = _react2.default.lazy(function () {
    return Promise.all(/*! import() */[__webpack_require__.e("src_component__screen_type_permission__main_ScreenPermission_js"), __webpack_require__.e("src_component_posts_common_mouse_enter_leave_info__main_MouseEnterLeaveInfo_js"), __webpack_require__.e("src__params_post_PostParams_js-src_component__screen_type_like__main_ScreenLike_js-src_compon-619f7a"), __webpack_require__.e("src__some_function_getClientXY_js-src_component_action_preview_group__main_ActionPreviewGroup_js"), __webpack_require__.e("src__handle_api_post_HandleAPIPost_js-src__handle_api_post_cu_user_tag_js-src__some_function_-94dbb5"), __webpack_require__.e("src_component_posts__zoom_post_zoom_vid_pic__main_ZoomVidPicItem_js"), __webpack_require__.e("src_component_posts__posts__main_Posts_js"), __webpack_require__.e("src__initial_post_InitialPosts_js-src_component_posts_common_add_new_post__main_AddNewPost_js"), __webpack_require__.e("src__handle_api_fb_group_topics_js-src_pages_group_page__components_topic_action_GroupPageTop-0350eb"), __webpack_require__.e("src__icons_svg_icon_setting_IconSetting_js-src_pages_group_page_pages_discuss__main_GroupPage-1b9f33")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/discuss/_main/GroupPageDiscuss */ "./src/pages/group_page/pages/discuss/_main/GroupPageDiscuss.js"));
});

var GroupPageTopics = _react2.default.lazy(function () {
    return Promise.all(/*! import() */[__webpack_require__.e("src__handle_api_fb_group_topics_js-src_pages_group_page__components_topic_action_GroupPageTop-0350eb"), __webpack_require__.e("src_pages_group_page_pages_topics__main_GroupPageTopics_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/topics/_main/GroupPageTopics */ "./src/pages/group_page/pages/topics/_main/GroupPageTopics.js"));
});

var GroupPageMembers = _react2.default.lazy(function () {
    return __webpack_require__.e(/*! import() */ "src_pages_group_page_pages_members__main_GroupPageMembers_js").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/members/_main/GroupPageMembers */ "./src/pages/group_page/pages/members/_main/GroupPageMembers.js"));
});

var GroupPageMedia = _react2.default.lazy(function () {
    return __webpack_require__.e(/*! import() */ "src_pages_group_page_pages_media__main_GroupPageMedia_js").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/media/_main/GroupPageMedia */ "./src/pages/group_page/pages/media/_main/GroupPageMedia.js"));
});

var WorkingOnIt = _react2.default.lazy(function () {
    return __webpack_require__.e(/*! import() */ "src_component_working_on_it_WorkingOnIt_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../../component/working_on_it/WorkingOnIt */ "./src/component/working_on_it/WorkingOnIt.js"));
});

//
var GroupPageRoutes = exports.GroupPageRoutes = [{
    component: GroupPageAbout,
    path: '/group/:id/about'
}, {
    component: GroupPageDiscuss,
    path: '/group/:id/discuss'
}, {
    component: GroupPageMembers,
    path: '/group/:id/members'
}, {
    component: GroupPageTopics,
    path: '/group/:id/topics'
}, {
    component: GroupPageMedia,
    path: '/group/:id/media'
}, {
    component: WorkingOnIt,
    path: '/group/:id/files'
}];

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_components/info/_main/GroupPageInfo.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_components/info/_main/GroupPageInfo.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".device-mobile .GroupPageInfo_foot_row {\n  display: block;\n}\n.device-mobile .GroupPageInfo_member {\n  font-size: 16px;\n}", "",{"version":3,"sources":["webpack://./src/pages/group_page/_components/info/_main/GroupPageInfo.scss"],"names":[],"mappings":"AACI;EACI,cAAA;AAAR;AAGI;EACI,eAAA;AADR","sourcesContent":[".device-mobile{\r\n    .GroupPageInfo_foot_row{\r\n        display: block;\r\n    }   \r\n    // .\r\n    .GroupPageInfo_member{\r\n        font-size: 16px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_components/info/actions/_main/GroupPageActions.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_components/info/actions/_main/GroupPageActions.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".device-mobile .GroupPageActions_btn {\n  flex-grow: 1;\n  margin: 4px;\n}\n.device-mobile .GroupPageActions_btn .BtnActions {\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/pages/group_page/_components/info/actions/_main/GroupPageActions.scss"],"names":[],"mappings":"AACI;EACI,YAAA;EACA,WAAA;AAAR;AAEQ;EACI,WAAA;AAAZ","sourcesContent":[".device-mobile{\r\n    .GroupPageActions_btn{\r\n        flex-grow: 1;\r\n        margin: 4px;\r\n\r\n        .BtnActions {\r\n            width: 100%;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_components/info/cover/affiliation/GroupPageAffiliation.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_components/info/cover/affiliation/GroupPageAffiliation.scss ***!
  \****************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".GroupPageAffiliation {\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}", "",{"version":3,"sources":["webpack://./src/pages/group_page/_components/info/cover/affiliation/GroupPageAffiliation.scss"],"names":[],"mappings":"AAAA;EACI,+BAAA;EACA,gCAAA;AACJ","sourcesContent":[".GroupPageAffiliation{\r\n    border-bottom-left-radius: 10px;\r\n    border-bottom-right-radius: 10px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_components/info/members/count/GroupPageMemberCount.scss":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_components/info/members/count/GroupPageMemberCount.scss ***!
  \************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".device-mobile .GroupPageMemberCount_row {\n  justify-content: center;\n}", "",{"version":3,"sources":["webpack://./src/pages/group_page/_components/info/members/count/GroupPageMemberCount.scss"],"names":[],"mappings":"AACI;EACI,uBAAA;AAAR","sourcesContent":[".device-mobile{\r\n    .GroupPageMemberCount_row{\r\n        justify-content: center;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_components/info/members/pics/GroupPageMemberPics.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_components/info/members/pics/GroupPageMemberPics.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".device-mobile .GroupPageMemberPics {\n  padding: 0 8px;\n}\n.device-mobile .GroupPageMemberPics .OverlapPics_item {\n  width: 20px;\n  height: 20px;\n}\n.device-mobile .GroupPageMemberPics .OverlapPics_item_img {\n  width: 30px;\n  height: 30px;\n}", "",{"version":3,"sources":["webpack://./src/pages/group_page/_components/info/members/pics/GroupPageMemberPics.scss"],"names":[],"mappings":"AACI;EACI,cAAA;AAAR;AAEQ;EACI,WAAA;EACA,YAAA;AAAZ;AAGQ;EACI,WAAA;EACA,YAAA;AADZ","sourcesContent":[".device-mobile {\r\n    .GroupPageMemberPics {\r\n        padding: 0 8px;\r\n        \r\n        .OverlapPics_item {\r\n            width: 20px;\r\n            height: 20px;\r\n        }\r\n\r\n        .OverlapPics_item_img {\r\n            width: 30px;\r\n            height: 30px;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_components/nav/_main/GroupPageNav.scss":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_components/nav/_main/GroupPageNav.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".GroupPageNav_item {\n  height: 100%;\n}", "",{"version":3,"sources":["webpack://./src/pages/group_page/_components/nav/_main/GroupPageNav.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;AACJ","sourcesContent":[".GroupPageNav_item {\r\n    height: 100%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_components/nav/item/GroupPageNavItem.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_components/nav/item/GroupPageNavItem.scss ***!
  \**********************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".GroupPageNavItem-active .GroupPageNavItem_bottom {\n  display: block;\n}", "",{"version":3,"sources":["webpack://./src/pages/group_page/_components/nav/item/GroupPageNavItem.scss"],"names":[],"mappings":"AACI;EACI,cAAA;AAAR","sourcesContent":[".GroupPageNavItem-active {\r\n    .GroupPageNavItem_bottom {\r\n        display: block;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_main/GroupPage.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_main/GroupPage.scss ***!
  \************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_main/GroupPageCommon.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_main/GroupPageCommon.scss ***!
  \******************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".gr-page-hr {\n  border-bottom-color: transparent;\n  border-top-color: var(--shadow-1);\n}", "",{"version":3,"sources":["webpack://./src/pages/group_page/_main/GroupPageCommon.scss"],"names":[],"mappings":"AACA;EACI,gCAAA;EACA,iCAAA;AAAJ","sourcesContent":["//\r\n.gr-page-hr {\r\n    border-bottom-color: transparent;\r\n    border-top-color: var(--shadow-1);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/group_page/_components/info/_main/GroupPageInfo.scss":
/*!************************************************************************!*\
  !*** ./src/pages/group_page/_components/info/_main/GroupPageInfo.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageInfo_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./GroupPageInfo.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_components/info/_main/GroupPageInfo.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageInfo_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageInfo_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/group_page/_components/info/actions/_main/GroupPageActions.scss":
/*!***********************************************************************************!*\
  !*** ./src/pages/group_page/_components/info/actions/_main/GroupPageActions.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageActions_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./GroupPageActions.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_components/info/actions/_main/GroupPageActions.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageActions_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageActions_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/group_page/_components/info/cover/affiliation/GroupPageAffiliation.scss":
/*!*******************************************************************************************!*\
  !*** ./src/pages/group_page/_components/info/cover/affiliation/GroupPageAffiliation.scss ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageAffiliation_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./GroupPageAffiliation.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_components/info/cover/affiliation/GroupPageAffiliation.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageAffiliation_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageAffiliation_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/group_page/_components/info/members/count/GroupPageMemberCount.scss":
/*!***************************************************************************************!*\
  !*** ./src/pages/group_page/_components/info/members/count/GroupPageMemberCount.scss ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageMemberCount_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./GroupPageMemberCount.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_components/info/members/count/GroupPageMemberCount.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageMemberCount_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageMemberCount_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/group_page/_components/info/members/pics/GroupPageMemberPics.scss":
/*!*************************************************************************************!*\
  !*** ./src/pages/group_page/_components/info/members/pics/GroupPageMemberPics.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageMemberPics_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./GroupPageMemberPics.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_components/info/members/pics/GroupPageMemberPics.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageMemberPics_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageMemberPics_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/group_page/_components/nav/_main/GroupPageNav.scss":
/*!**********************************************************************!*\
  !*** ./src/pages/group_page/_components/nav/_main/GroupPageNav.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageNav_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./GroupPageNav.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_components/nav/_main/GroupPageNav.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageNav_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageNav_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/group_page/_components/nav/item/GroupPageNavItem.scss":
/*!*************************************************************************!*\
  !*** ./src/pages/group_page/_components/nav/item/GroupPageNavItem.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageNavItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./GroupPageNavItem.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_components/nav/item/GroupPageNavItem.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageNavItem_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageNavItem_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/group_page/_main/GroupPage.scss":
/*!***************************************************!*\
  !*** ./src/pages/group_page/_main/GroupPage.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPage_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./GroupPage.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_main/GroupPage.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPage_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPage_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/group_page/_main/GroupPageCommon.scss":
/*!*********************************************************!*\
  !*** ./src/pages/group_page/_main/GroupPageCommon.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageCommon_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./GroupPageCommon.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_main/GroupPageCommon.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageCommon_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageCommon_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_group_page__main_GroupPage_js.js.map