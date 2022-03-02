(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_group_page_pages_members__main_GroupPageMembers_js"],{

/***/ "./src/_default/fb_group/member.js":
/*!*****************************************!*\
  !*** ./src/_default/fb_group/member.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default_fb_group_member_arr = exports.default_fb_group_member_obj = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _action_user_case = __webpack_require__(/*! ../_common/action_user_case */ "./src/_default/_common/action_user_case.js");

var _default_bool = __webpack_require__(/*! ../_common/default_bool */ "./src/_default/_common/default_bool.js");

var _default_id = __webpack_require__(/*! ../_common/default_id */ "./src/_default/_common/default_id.js");

var _default_image = __webpack_require__(/*! ../_common/default_image */ "./src/_default/_common/default_image.js");

var _default_name = __webpack_require__(/*! ../_common/default_name */ "./src/_default/_common/default_name.js");

var _getDefaultArr = __webpack_require__(/*! ../_common/getDefaultArr */ "./src/_default/_common/getDefaultArr.js");

var _getRandomFromArr = __webpack_require__(/*! ../_common/getRandomFromArr */ "./src/_default/_common/getRandomFromArr.js");

//
var default_fb_group_member_obj = exports.default_fb_group_member_obj = function default_fb_group_member_obj() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { is_friend: false };
    var is_friend = params.is_friend;


    var type_user = (0, _default_bool.getRandomBool)() ? 'person' : 'page';

    var common_obj = {
        id: (0, _default_id.getRandomId)(),
        picture: (0, _default_image.getRandomImg)(),
        type_user: type_user,

        badge_arr: [],
        badge_count: 0
    };

    if (type_user == 'person') {
        return _extends({}, common_obj, {
            first_name: (0, _default_name.getRandomName)(),
            last_name: (0, _default_name.getRandomName)(),

            info_1: 'abc',
            info_2: 'efg',

            action_case: is_friend ? _action_user_case.default_action_user_case_obj.chat : (0, _getRandomFromArr.getRandomFromArr)([_action_user_case.default_action_user_case_obj.chat, _action_user_case.default_action_user_case_obj.follow, _action_user_case.default_action_user_case_obj.add_friend, ''])
        });
    }

    return _extends({}, common_obj, {
        name: (0, _default_name.getRandomPageName)(),

        info_1: 'abc',
        info_2: 'efg',

        action_name: 'like',
        has_liked: (0, _default_bool.getRandomBool)(),
        has_followed: false
    });
};

var default_fb_group_member_arr = exports.default_fb_group_member_arr = function default_fb_group_member_arr(_ref) {
    var _ref$type = _ref.type,
        type = _ref$type === undefined ? '' : _ref$type;

    return (0, _getDefaultArr.getDefaultArr)(default_fb_group_member_obj, type == 'new' ? 15 : 0, 15);
};

/***/ }),

/***/ "./src/_default/fb_group/page_member.js":
/*!**********************************************!*\
  !*** ./src/_default/fb_group/page_member.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default_fb_group_page_member_obj = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
//


var _DefaultLogin = __webpack_require__(/*! ../login/DefaultLogin */ "./src/_default/login/DefaultLogin.js");

var _default_id = __webpack_require__(/*! ../_common/default_id */ "./src/_default/_common/default_id.js");

var _getDefaultArr = __webpack_require__(/*! ../_common/getDefaultArr */ "./src/_default/_common/getDefaultArr.js");

var _member = __webpack_require__(/*! ./member */ "./src/_default/fb_group/member.js");

//
var getMemberArr = function getMemberArr(min, max, is_friend) {
    return (0, _getDefaultArr.getDefaultArr)(function () {
        return (0, _member.default_fb_group_member_obj)({ is_friend: is_friend });
    }, min, max);
};

var getArrCount = function getArrCount(min, max_arr, max_count, is_friend) {
    var arr = getMemberArr(min, max_arr, is_friend);
    var count = (0, _default_id.getRandomNumber)(arr.length, arr.length < max_arr ? arr.length : max_count);

    return [arr, count];
};

//
var default_fb_group_page_member_obj = exports.default_fb_group_page_member_obj = function default_fb_group_page_member_obj() {
    var _getArrCount = getArrCount(1, 4, 7),
        _getArrCount2 = _slicedToArray(_getArrCount, 2),
        admin_arr = _getArrCount2[0],
        admin_count = _getArrCount2[1];

    var _getArrCount3 = getArrCount(0, 4, 7),
        _getArrCount4 = _slicedToArray(_getArrCount3, 2),
        expert_arr = _getArrCount4[0],
        expert_count = _getArrCount4[1];

    var _getArrCount5 = getArrCount(0, 4, 10, true),
        _getArrCount6 = _slicedToArray(_getArrCount5, 2),
        friend_arr = _getArrCount6[0],
        friend_count = _getArrCount6[1];

    var _getArrCount7 = getArrCount(4, 6, 20),
        _getArrCount8 = _slicedToArray(_getArrCount7, 2),
        same_arr = _getArrCount8[0],
        same_count = _getArrCount8[1];

    var _getArrCount9 = getArrCount(2, 4, 8),
        _getArrCount10 = _slicedToArray(_getArrCount9, 2),
        near_arr = _getArrCount10[0],
        near_count = _getArrCount10[1];

    var _getArrCount11 = getArrCount(8, 8, 40),
        _getArrCount12 = _slicedToArray(_getArrCount11, 2),
        new_arr = _getArrCount12[0],
        new_count = _getArrCount12[1];

    var you_obj = _extends({}, (0, _member.default_fb_group_member_obj)(), _DefaultLogin.default_define_user);

    if (you_obj.type_user == 'person') {
        you_obj.action_case = '';
    } else {
        you_obj.action_name = '';
    }

    return {
        you_obj: you_obj,

        admin_arr: admin_arr,
        admin_count: admin_count,

        expert_arr: expert_arr,
        expert_count: expert_count,

        friend_arr: friend_arr,
        friend_count: friend_count,

        same_arr: same_arr,
        same_count: same_count,

        near_arr: near_arr,
        near_count: near_count,

        new_arr: new_arr,
        new_count: new_count
    };
};

/***/ }),

/***/ "./src/_handle_api/fb_group/member.js":
/*!********************************************!*\
  !*** ./src/_handle_api/fb_group/member.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handle_API_FbGroupMember_L = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var handle_API_FbGroupMember_L = exports.handle_API_FbGroupMember_L = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
        var _ref2$c_count = _ref2.c_count,
            c_count = _ref2$c_count === undefined ? 0 : _ref2$c_count,
            _ref2$group_id = _ref2.group_id,
            group_id = _ref2$group_id === undefined ? 0 : _ref2$group_id,
            _ref2$type = _ref2.type,
            type = _ref2$type === undefined ? '' : _ref2$type,
            _ref2$params = _ref2.params,
            params = _ref2$params === undefined ? {} : _ref2$params;
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _member.FbGroupMember_L)(_extends({
                            page: 1,
                            size: 20,
                            c_count: c_count,

                            group_model: group_id,
                            type: type
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

    return function handle_API_FbGroupMember_L(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _member = __webpack_require__(/*! ../../api/api_django/fb_group/member */ "./src/api/api_django/fb_group/member.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/_handle_api/fb_group/page_member.js":
/*!*************************************************!*\
  !*** ./src/_handle_api/fb_group/page_member.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handle_API_FBGroupPageMember_R = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var handle_API_FBGroupPageMember_R = exports.handle_API_FBGroupPageMember_R = function () {
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
                        return (0, _page_member.API_FBGroupPageMember_R)(_extends({
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

    return function handle_API_FBGroupPageMember_R(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _page_member = __webpack_require__(/*! ../../api/api_django/fb_group/page_member */ "./src/api/api_django/fb_group/page_member.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/_some_function/FormatNum.js":
/*!*****************************************!*\
  !*** ./src/_some_function/FormatNum.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
// 
var formatNum = exports.formatNum = function formatNum(num) {
    return new Intl.NumberFormat('en').format(num);
};

/***/ }),

/***/ "./src/api/api_django/fb_group/member.js":
/*!***********************************************!*\
  !*** ./src/api/api_django/fb_group/member.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.FbGroupMember_L = undefined;

var _AxiosDjango = __webpack_require__(/*! ../_axios/AxiosDjango */ "./src/api/api_django/_axios/AxiosDjango.js");

var _AxiosDjango2 = _interopRequireDefault(_AxiosDjango);

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _member = __webpack_require__(/*! ../../../_default/fb_group/member */ "./src/_default/fb_group/member.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
var FbGroupMember_L = exports.FbGroupMember_L = function FbGroupMember_L(params) {
    return (0, _ConstAPI.API_FakeReal)((0, _member.default_fb_group_member_arr)({ type: params['type'] }), function () {
        return (0, _AxiosDjango2.default)({
            url: 'api/facebook/group-member-l/',
            method: 'GET',
            params: params
        });
    }, params);
};
//

/***/ }),

/***/ "./src/api/api_django/fb_group/page_member.js":
/*!****************************************************!*\
  !*** ./src/api/api_django/fb_group/page_member.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.API_FBGroupPageMember_R = undefined;

var _AxiosDjango = __webpack_require__(/*! ../_axios/AxiosDjango */ "./src/api/api_django/_axios/AxiosDjango.js");

var _AxiosDjango2 = _interopRequireDefault(_AxiosDjango);

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _page_member = __webpack_require__(/*! ../../../_default/fb_group/page_member */ "./src/_default/fb_group/page_member.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
var API_FBGroupPageMember_R = exports.API_FBGroupPageMember_R = function API_FBGroupPageMember_R(params) {
    return (0, _ConstAPI.API_FakeReal)((0, _page_member.default_fb_group_page_member_obj)(), function () {
        return (0, _AxiosDjango2.default)({
            url: 'api/facebook/fb-group-page-member-r/',
            method: 'GET',
            params: params
        });
    }, params);
};
//

/***/ }),

/***/ "./src/component/actions_page/_case/ActionsPageCase.js":
/*!*************************************************************!*\
  !*** ./src/component/actions_page/_case/ActionsPageCase.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BtnPageLike = __webpack_require__(/*! ../../button/page_actions/like/BtnPageLike */ "./src/component/button/page_actions/like/BtnPageLike.js");

var _BtnPageLike2 = _interopRequireDefault(_BtnPageLike);

var _BtnPageFollow = __webpack_require__(/*! ../../button/page_actions/follow/BtnPageFollow */ "./src/component/button/page_actions/follow/BtnPageFollow.js");

var _BtnPageFollow2 = _interopRequireDefault(_BtnPageFollow);

var _BtnPageChat = __webpack_require__(/*! ../../button/page_actions/chat/BtnPageChat */ "./src/component/button/page_actions/chat/BtnPageChat.js");

var _BtnPageChat2 = _interopRequireDefault(_BtnPageChat);

var _BtnPageContact = __webpack_require__(/*! ../../button/page_actions/contact/BtnPageContact */ "./src/component/button/page_actions/contact/BtnPageContact.js");

var _BtnPageContact2 = _interopRequireDefault(_BtnPageContact);

var _BtnPageLearnMore = __webpack_require__(/*! ../../button/page_actions/learn_more/BtnPageLearnMore */ "./src/component/button/page_actions/learn_more/BtnPageLearnMore.js");

var _BtnPageLearnMore2 = _interopRequireDefault(_BtnPageLearnMore);

var _ActionsPageOther = __webpack_require__(/*! ../other/ActionsPageOther */ "./src/component/actions_page/other/ActionsPageOther.js");

var _ActionsPageOther2 = _interopRequireDefault(_ActionsPageOther);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
ActionsPageCase.propTypes = {};

//
function ActionsPageCase(_ref) {
    var action_name = _ref.action_name,
        use_title = _ref.use_title,
        page_id = _ref.page_id,
        has_liked = _ref.has_liked,
        has_followed = _ref.has_followed,
        class_action_contain = _ref.class_action_contain,
        is_at_body = _ref.is_at_body,
        handleAction = _ref.handleAction;

    //
    if (action_name == 'like') {
        return _react2.default.createElement(_BtnPageLike2.default, {
            use_title: use_title,
            has_liked: has_liked,
            handleAction: handleAction
        });
    }

    //
    if (action_name == 'follow') {
        return _react2.default.createElement(_BtnPageFollow2.default, {
            use_title: use_title,
            has_followed: has_followed,
            handleAction: handleAction
        });
    }

    //
    if (action_name == 'chat') {
        return _react2.default.createElement(_BtnPageChat2.default, { page_id: page_id, use_title: use_title });
    }

    //
    if (action_name == 'contact') {
        return _react2.default.createElement(_BtnPageContact2.default, { use_title: use_title, handleAction: handleAction });
    }

    //
    if (action_name == 'learn_more') {
        return _react2.default.createElement(_BtnPageLearnMore2.default, {
            use_title: use_title,
            handleAction: handleAction
        });
    }

    //
    if (action_name == 'other') {
        return _react2.default.createElement(_ActionsPageOther2.default, {
            page_id: page_id,
            class_action_contain: class_action_contain,
            is_at_body: is_at_body,
            handleAction: handleAction
        });
    }

    //
    return null;
}

exports.default = ActionsPageCase;

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

/***/ "./src/pages/group_page/pages/members/_components/part_list/_main/GPMemPartList.js":
/*!*****************************************************************************************!*\
  !*** ./src/pages/group_page/pages/members/_components/part_list/_main/GPMemPartList.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GPMemsPartTitle = __webpack_require__(/*! ../../part_title/GPMemsPartTitle */ "./src/pages/group_page/pages/members/_components/part_title/GPMemsPartTitle.js");

var _GPMemsPartTitle2 = _interopRequireDefault(_GPMemsPartTitle);

var _GPMemUserPage = __webpack_require__(/*! ../../user_page/_main/GPMemUserPage */ "./src/pages/group_page/pages/members/_components/user_page/_main/GPMemUserPage.js");

var _GPMemUserPage2 = _interopRequireDefault(_GPMemUserPage);

var _GroupPageAboutSeeAll = __webpack_require__(/*! ../../../../../_components/about_see_all/GroupPageAboutSeeAll */ "./src/pages/group_page/_components/about_see_all/GroupPageAboutSeeAll.js");

var _GroupPageAboutSeeAll2 = _interopRequireDefault(_GroupPageAboutSeeAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GPMemPartList.propTypes = {};

//

//
function GPMemPartList(_ref) {
    var group_id = _ref.group_id,
        title = _ref.title,
        _ref$show_count_on_ti = _ref.show_count_on_title,
        show_count_on_title = _ref$show_count_on_ti === undefined ? true : _ref$show_count_on_ti,
        info = _ref.info,
        has_learn_more = _ref.has_learn_more,
        link_learn_more = _ref.link_learn_more,
        user_page_arr = _ref.user_page_arr,
        user_page_count = _ref.user_page_count,
        link_all = _ref.link_all;

    //
    function handleAction(params) {
        console.log(params);
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'GPMemPartList' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_GPMemsPartTitle2.default, {
                title: title,
                count: user_page_count,
                show_count: show_count_on_title,
                info: info
                // 
                , has_learn_more: has_learn_more,
                link_learn_more: link_learn_more
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'margin-top-10px' },
            user_page_arr.map(function (item, ix) {
                return _react2.default.createElement(
                    'div',
                    { key: item.id },
                    _react2.default.createElement(_GPMemUserPage2.default, {
                        group_id: group_id,
                        has_action_other: true,
                        item: item,
                        handleAction: handleAction
                    })
                );
            })
        ),
        user_page_count > user_page_arr.length ? _react2.default.createElement(
            'div',
            { className: 'margin-top-10px' },
            _react2.default.createElement(_GroupPageAboutSeeAll2.default, { link_to: link_all })
        ) : null
    );
}

exports.default = GPMemPartList;

/***/ }),

/***/ "./src/pages/group_page/pages/members/_components/part_title/GPMemsPartTitle.js":
/*!**************************************************************************************!*\
  !*** ./src/pages/group_page/pages/members/_components/part_title/GPMemsPartTitle.js ***!
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GPMemsPartTitle.propTypes = {};

//
function GPMemsPartTitle(_ref) {
    var title = _ref.title,
        count = _ref.count,
        _ref$show_count = _ref.show_count,
        show_count = _ref$show_count === undefined ? true : _ref$show_count,
        info = _ref.info,
        has_learn_more = _ref.has_learn_more,
        link_learn_more = _ref.link_learn_more;

    //
    return _react2.default.createElement(
        'div',
        { className: 'GPMemsPartTitle' },
        _react2.default.createElement(
            'h3',
            { className: 'font-15px' },
            _react2.default.createElement(
                'span',
                { className: 'font-600' },
                title
            ),
            show_count ? _react2.default.createElement(
                'span',
                { className: 'text-secondary' },
                ' \xB7 ',
                count
            ) : false
        ),
        _react2.default.createElement(
            'div',
            { className: 'font-13px text-secondary' },
            info,
            ' ',
            has_learn_more ? _react2.default.createElement(
                _reactRouterDom.Link,
                { className: 'hv-underline', to: link_learn_more },
                'Learn more'
            ) : null
        )
    );
}

exports.default = GPMemsPartTitle;

/***/ }),

/***/ "./src/pages/group_page/pages/members/_components/user_page/_layout/GPMemUserPageLayout.js":
/*!*************************************************************************************************!*\
  !*** ./src/pages/group_page/pages/members/_components/user_page/_layout/GPMemUserPageLayout.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BtnActionsOther = __webpack_require__(/*! ../../../../../../../component/button/actions_other/BtnActionsOther */ "./src/component/button/actions_other/BtnActionsOther.js");

var _BtnActionsOther2 = _interopRequireDefault(_BtnActionsOther);

__webpack_require__(/*! ./GPMemUserPageLayout.scss */ "./src/pages/group_page/pages/members/_components/user_page/_layout/GPMemUserPageLayout.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
GPMemUserPageLayout.propTypes = {};

//

//
function GPMemUserPageLayout(_ref) {
    var name = _ref.name,
        picture = _ref.picture,
        badge_arr = _ref.badge_arr,
        badge_count = _ref.badge_count,
        info_1 = _ref.info_1,
        info_2 = _ref.info_2,
        action_elm = _ref.action_elm,
        has_action_other = _ref.has_action_other,
        handle_API_ActionOther_L = _ref.handle_API_ActionOther_L,
        handleActionOther = _ref.handleActionOther;

    //
    return _react2.default.createElement(
        'div',
        { className: 'GPMemUserPageLayout padding-y-8px break-word' },
        _react2.default.createElement(
            'div',
            { className: 'GPMemUserPageLayout_row display-flex align-items-center' },
            _react2.default.createElement(
                'div',
                { className: 'GPMemUserPageLayout_left flex-shrink-0 margin-right-12px' },
                picture
            ),
            _react2.default.createElement(
                'div',
                { className: 'GPMemUserPageLayout_right flex-grow-1 flex-between-center' },
                _react2.default.createElement(
                    'div',
                    { className: 'display-flex flex-col space-between padding-right-8px' },
                    _react2.default.createElement(
                        'div',
                        null,
                        name
                    ),
                    badge_count > 0 ? _react2.default.createElement(
                        'div',
                        { className: 'display-flex align-items-center font-13px' },
                        badge_arr.map(function (item) {
                            return _react2.default.createElement(
                                'div',
                                { className: 'margin-right-4px bg-fb-active text-blue' },
                                item.title
                            );
                        }),
                        badge_count - badge_arr.length ? _react2.default.createElement(
                            'div',
                            { className: 'padding-x-4px padding-y-2px bg-ccc brs-6px' },
                            '+',
                            badge_count - badge_arr.length
                        ) : null
                    ) : null,
                    _react2.default.createElement(
                        'div',
                        { className: 'font-500 font-12px text-secondary' },
                        info_1
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'font-12px text-secondary' },
                        info_2
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'display-flex' },
                    action_elm ? _react2.default.createElement(
                        'div',
                        null,
                        action_elm
                    ) : null,
                    has_action_other ? _react2.default.createElement(
                        'div',
                        { className: 'margin-left-5px' },
                        _react2.default.createElement(_BtnActionsOther2.default, {
                            handle_API_L: handle_API_ActionOther_L,
                            handleAction: handleActionOther
                        })
                    ) : null
                )
            )
        )
    );
}

exports.default = GPMemUserPageLayout;

/***/ }),

/***/ "./src/pages/group_page/pages/members/_components/user_page/_main/GPMemUserPage.js":
/*!*****************************************************************************************!*\
  !*** ./src/pages/group_page/pages/members/_components/user_page/_main/GPMemUserPage.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GPMemUser = __webpack_require__(/*! ../user/GPMemUser */ "./src/pages/group_page/pages/members/_components/user_page/user/GPMemUser.js");

var _GPMemUser2 = _interopRequireDefault(_GPMemUser);

var _GPMemPage = __webpack_require__(/*! ../page/GPMemPage */ "./src/pages/group_page/pages/members/_components/user_page/page/GPMemPage.js");

var _GPMemPage2 = _interopRequireDefault(_GPMemPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
GPMemUserPage.propTypes = {};

//
function GPMemUserPage(_ref) {
    var group_id = _ref.group_id,
        has_action_other = _ref.has_action_other,
        item = _ref.item,
        use_title = _ref.use_title,
        handleAction = _ref.handleAction;

    //
    if (item.type_user == 'person') {
        return _react2.default.createElement(_GPMemUser2.default, {
            group_id: group_id,
            has_action_other: has_action_other,
            member_user_obj: item,
            use_title: use_title,
            handleAction: handleAction
        });
    }

    //
    return _react2.default.createElement(_GPMemPage2.default, {
        group_id: group_id,
        has_action_other: has_action_other,
        member_page_obj: item,
        use_title: use_title,
        handleAction: handleAction
    });
}

exports.default = GPMemUserPage;

/***/ }),

/***/ "./src/pages/group_page/pages/members/_components/user_page/page/GPMemPage.js":
/*!************************************************************************************!*\
  !*** ./src/pages/group_page/pages/members/_components/user_page/page/GPMemPage.js ***!
  \************************************************************************************/
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

var _Constant = __webpack_require__(/*! ../../../../../../../_constant/Constant */ "./src/_constant/Constant.js");

var _ActionsPageCase = __webpack_require__(/*! ../../../../../../../component/actions_page/_case/ActionsPageCase */ "./src/component/actions_page/_case/ActionsPageCase.js");

var _ActionsPageCase2 = _interopRequireDefault(_ActionsPageCase);

var _ActionPreviewPage = __webpack_require__(/*! ../../../../../../../component/action_preview_page/_main/ActionPreviewPage */ "./src/component/action_preview_page/_main/ActionPreviewPage.js");

var _ActionPreviewPage2 = _interopRequireDefault(_ActionPreviewPage);

var _GPMemUserPageLayout = __webpack_require__(/*! ../_layout/GPMemUserPageLayout */ "./src/pages/group_page/pages/members/_components/user_page/_layout/GPMemUserPageLayout.js");

var _GPMemUserPageLayout2 = _interopRequireDefault(_GPMemUserPageLayout);

var _GPMemUserPagePic = __webpack_require__(/*! ../picture/GPMemUserPagePic */ "./src/pages/group_page/pages/members/_components/user_page/picture/GPMemUserPagePic.js");

var _GPMemUserPagePic2 = _interopRequireDefault(_GPMemUserPagePic);

var _action = __webpack_require__(/*! ../../../../../../../_handle_api/fb_page/action */ "./src/_handle_api/fb_page/action.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
GPMemPage.propTypes = {};

//

//

//
function GPMemPage(_ref) {
    var group_id = _ref.group_id,
        member_page_obj = _ref.member_page_obj,
        has_action_other = _ref.has_action_other,
        use_title = _ref.use_title,
        handleAction = _ref.handleAction;
    var id = member_page_obj.id,
        name = member_page_obj.name,
        picture = member_page_obj.picture,
        badge_arr = member_page_obj.badge_arr,
        badge_count = member_page_obj.badge_count,
        info_1 = member_page_obj.info_1,
        info_2 = member_page_obj.info_2,
        action_name = member_page_obj.action_name,
        has_liked = member_page_obj.has_liked,
        has_followed = member_page_obj.has_followed;

    // ------

    //

    function handle_API_ActionOther_L() {
        return (0, _action.handle_API_PageActions_L)({
            page_id: id,
            type: 'other',
            params: {}
        });
    }

    //
    function handleActionOther(params) {
        console.log(params);
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'GPMemPage' },
        _react2.default.createElement(_GPMemUserPageLayout2.default, {
            name: _react2.default.createElement(_ActionPreviewPage2.default, {
                page_id: id,
                title_action: _react2.default.createElement(
                    _reactRouterDom.Link,
                    {
                        className: 'color-inherit font-600',
                        to: '/page/' + id
                    },
                    name
                )
            }),
            picture: _react2.default.createElement(_ActionPreviewPage2.default, {
                page_id: id,
                title_action: _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/page/' + id },
                    _react2.default.createElement(_GPMemUserPagePic2.default, { picture: picture })
                )
            }),
            badge_arr: badge_arr,
            badge_count: badge_count
            //
            , info_1: info_1,
            info_2: info_2
            //
            , action_elm: _react2.default.createElement(_ActionsPageCase2.default, {
                action_name: action_name,
                page_id: id,
                has_liked: has_liked,
                has_followed: has_followed
                //
                , use_title: _Constant.IS_MOBILE ? false : use_title,
                handleAction: handleAction
            }),
            has_action_other: has_action_other,
            handle_API_ActionOther_L: handle_API_ActionOther_L,
            handleActionOther: handleActionOther
        })
    );
}

exports.default = GPMemPage;

/***/ }),

/***/ "./src/pages/group_page/pages/members/_components/user_page/picture/GPMemUserPagePic.js":
/*!**********************************************************************************************!*\
  !*** ./src/pages/group_page/pages/members/_components/user_page/picture/GPMemUserPagePic.js ***!
  \**********************************************************************************************/
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
GPMemUserPagePic.propTypes = {};

//
function GPMemUserPagePic(_ref) {
    var picture = _ref.picture;

    //
    return _react2.default.createElement('img', {
        className: 'brs-50 object-fit-cover',
        src: picture,
        alt: '',
        width: '60',
        height: '60'
    });
}

exports.default = GPMemUserPagePic;

/***/ }),

/***/ "./src/pages/group_page/pages/members/_components/user_page/user/GPMemUser.js":
/*!************************************************************************************!*\
  !*** ./src/pages/group_page/pages/members/_components/user_page/user/GPMemUser.js ***!
  \************************************************************************************/
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

var _Constant = __webpack_require__(/*! ../../../../../../../_constant/Constant */ "./src/_constant/Constant.js");

var _ActionsProfileCase = __webpack_require__(/*! ../../../../../../../component/actions_profile/case/_main/ActionsProfileCase */ "./src/component/actions_profile/case/_main/ActionsProfileCase.js");

var _ActionsProfileCase2 = _interopRequireDefault(_ActionsProfileCase);

var _ActionPreviewProfile = __webpack_require__(/*! ../../../../../../../component/action_preview_profile/_main/ActionPreviewProfile */ "./src/component/action_preview_profile/_main/ActionPreviewProfile.js");

var _ActionPreviewProfile2 = _interopRequireDefault(_ActionPreviewProfile);

var _GPMemUserPageLayout = __webpack_require__(/*! ../_layout/GPMemUserPageLayout */ "./src/pages/group_page/pages/members/_components/user_page/_layout/GPMemUserPageLayout.js");

var _GPMemUserPageLayout2 = _interopRequireDefault(_GPMemUserPageLayout);

var _GPMemUserPagePic = __webpack_require__(/*! ../picture/GPMemUserPagePic */ "./src/pages/group_page/pages/members/_components/user_page/picture/GPMemUserPagePic.js");

var _GPMemUserPagePic2 = _interopRequireDefault(_GPMemUserPagePic);

var _action = __webpack_require__(/*! ../../../../../../../_handle_api/profile/action */ "./src/_handle_api/profile/action.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
GPMemUser.propTypes = {};

//

//

//
function GPMemUser(_ref) {
    var group_id = _ref.group_id,
        has_action_other = _ref.has_action_other,
        member_user_obj = _ref.member_user_obj,
        use_title = _ref.use_title,
        handleAction = _ref.handleAction;
    var id = member_user_obj.id,
        first_name = member_user_obj.first_name,
        last_name = member_user_obj.last_name,
        picture = member_user_obj.picture,
        badge_arr = member_user_obj.badge_arr,
        badge_count = member_user_obj.badge_count,
        info_1 = member_user_obj.info_1,
        info_2 = member_user_obj.info_2,
        action_case = member_user_obj.action_case;

    // ------

    //

    function handle_API_ActionOther_L() {
        return (0, _action.handle_API_ProfileActions_L)({ user_id: id, type: 'other' });
    }

    //
    function handleActionOther(params) {
        console.log(params);
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'GPMemUser' },
        _react2.default.createElement(_GPMemUserPageLayout2.default, {
            name: _react2.default.createElement(_ActionPreviewProfile2.default, {
                user_id: id,
                title_action: _react2.default.createElement(
                    _reactRouterDom.Link,
                    {
                        className: 'color-inherit font-600',
                        to: '/profile/' + id
                    },
                    first_name,
                    ' ',
                    last_name
                )
            }),
            picture: _react2.default.createElement(_ActionPreviewProfile2.default, {
                user_id: id,
                title_action: _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/profile/' + id },
                    _react2.default.createElement(_GPMemUserPagePic2.default, { picture: picture })
                )
            }),
            badge_arr: badge_arr,
            badge_count: badge_count
            //
            , info_1: info_1,
            info_2: info_2
            //
            , action_elm: _react2.default.createElement(_ActionsProfileCase2.default, {
                action_case: action_case,
                user_id: id,
                use_title: _Constant.IS_MOBILE ? false : use_title,
                handleAction: handleAction
            }),
            has_action_other: has_action_other,
            handle_API_ActionOther_L: handle_API_ActionOther_L,
            handleActionOther: handleActionOther
        })
    );
}

exports.default = GPMemUser;

/***/ }),

/***/ "./src/pages/group_page/pages/members/_main/GroupPageMembers.js":
/*!**********************************************************************!*\
  !*** ./src/pages/group_page/pages/members/_main/GroupPageMembers.js ***!
  \**********************************************************************/
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


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _page_member = __webpack_require__(/*! ../../../../../_handle_api/fb_group/page_member */ "./src/_handle_api/fb_group/page_member.js");

var _GPMemHead = __webpack_require__(/*! ../head/_main/GPMemHead */ "./src/pages/group_page/pages/members/head/_main/GPMemHead.js");

var _GPMemHead2 = _interopRequireDefault(_GPMemHead);

var _GPMemYou = __webpack_require__(/*! ../you/GPMemYou */ "./src/pages/group_page/pages/members/you/GPMemYou.js");

var _GPMemYou2 = _interopRequireDefault(_GPMemYou);

var _GPMemAdmins = __webpack_require__(/*! ../admins/_main/GPMemAdmins */ "./src/pages/group_page/pages/members/admins/_main/GPMemAdmins.js");

var _GPMemAdmins2 = _interopRequireDefault(_GPMemAdmins);

var _GPMemExperts = __webpack_require__(/*! ../experts/_main/GPMemExperts */ "./src/pages/group_page/pages/members/experts/_main/GPMemExperts.js");

var _GPMemExperts2 = _interopRequireDefault(_GPMemExperts);

var _GPMemSame = __webpack_require__(/*! ../same/_main/GPMemSame */ "./src/pages/group_page/pages/members/same/_main/GPMemSame.js");

var _GPMemSame2 = _interopRequireDefault(_GPMemSame);

var _GPMemNear = __webpack_require__(/*! ../near/_main/GPMemNear */ "./src/pages/group_page/pages/members/near/_main/GPMemNear.js");

var _GPMemNear2 = _interopRequireDefault(_GPMemNear);

var _GPMemNew = __webpack_require__(/*! ../new/_main/GPMemNew */ "./src/pages/group_page/pages/members/new/_main/GPMemNew.js");

var _GPMemNew2 = _interopRequireDefault(_GPMemNew);

var _GPMemFriends = __webpack_require__(/*! ../friends/_main/GPMemFriends */ "./src/pages/group_page/pages/members/friends/_main/GPMemFriends.js");

var _GPMemFriends2 = _interopRequireDefault(_GPMemFriends);

__webpack_require__(/*! ./GroupPageMembers.scss */ "./src/pages/group_page/pages/members/_main/GroupPageMembers.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
GroupPageMembers.propTypes = {};

//
function GroupPageMembers(_ref) {

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
                            return (0, _page_member.handle_API_FBGroupPageMember_R)({
                                group_id: group_id
                            });

                        case 2:
                            data = _context.sent;


                            setStateObj(function (state_obj) {
                                return _extends({}, state_obj, {
                                    group_member_obj: data,
                                    has_fetched: true
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
            return _ref2.apply(this, arguments);
        };
    }();

    // -----

    //


    var group_id = _ref.group_id,
        is_admin = _ref.is_admin,
        is_moderate = _ref.is_moderate,
        member_count = _ref.member_count,
        member_recent_count = _ref.member_recent_count;

    //
    var _useState = (0, _react.useState)({
        group_member_obj: {},
        has_fetched: false
    }),
        _useState2 = _slicedToArray(_useState, 2),
        state_obj = _useState2[0],
        setStateObj = _useState2[1];

    var group_member_obj = state_obj.group_member_obj,
        has_fetched = state_obj.has_fetched;
    var you_obj = group_member_obj.you_obj,
        admin_arr = group_member_obj.admin_arr,
        admin_count = group_member_obj.admin_count,
        expert_arr = group_member_obj.expert_arr,
        expert_count = group_member_obj.expert_count,
        friend_arr = group_member_obj.friend_arr,
        friend_count = group_member_obj.friend_count,
        same_arr = group_member_obj.same_arr,
        same_count = group_member_obj.same_count,
        near_arr = group_member_obj.near_arr,
        near_count = group_member_obj.near_count,
        new_arr = group_member_obj.new_arr,
        new_count = group_member_obj.new_count;

    //

    (0, _react.useEffect)(function () {
        getData_API();
    }, []);if (!has_fetched) {
        return _react2.default.createElement('div', { className: 'h-100vh' });
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupPageMembers display-flex justify-content-center' },
        _react2.default.createElement(
            'div',
            {
                className: 'GroupPageMembers_contain max-w-100per padding-16px brs-8px-pc bg-primary box-shadow-1 ' + (is_admin && member_recent_count ? 'w-500px' : 'w-680px')
            },
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_GPMemHead2.default, { member_count: member_count })
            ),
            _react2.default.createElement('hr', { className: 'GroupPageMembers_hr gr-page-hr' }),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_GPMemYou2.default, { you_obj: you_obj })
            ),
            _react2.default.createElement('hr', { className: 'GroupPageMembers_hr gr-page-hr' }),
            admin_count ? _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_GPMemAdmins2.default, {
                    group_id: group_id,
                    admin_arr: admin_arr,
                    admin_count: admin_count
                }),
                _react2.default.createElement('hr', { className: 'GroupPageMembers_hr gr-page-hr' })
            ) : null,
            !expert_count ? null : _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_GPMemExperts2.default, {
                    group_id: group_id,
                    expert_arr: expert_arr,
                    expert_count: expert_count
                }),
                _react2.default.createElement('hr', { className: 'GroupPageMembers_hr gr-page-hr' })
            ),
            !friend_count ? null : _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_GPMemFriends2.default, {
                    group_id: group_id,
                    friend_arr: friend_arr,
                    friend_count: friend_count
                }),
                _react2.default.createElement('hr', { className: 'GroupPageMembers_hr gr-page-hr' })
            ),
            !same_count ? null : _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_GPMemSame2.default, {
                    group_id: group_id,
                    same_arr: same_arr,
                    same_count: same_count
                }),
                _react2.default.createElement('hr', { className: 'GroupPageMembers_hr gr-page-hr' })
            ),
            !near_count ? null : _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_GPMemNear2.default, {
                    group_id: group_id,
                    near_arr: near_arr,
                    near_count: near_count
                }),
                _react2.default.createElement('hr', { className: 'GroupPageMembers_hr gr-page-hr' })
            ),
            !new_count ? null : _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_GPMemNew2.default, {
                    group_id: group_id,
                    new_arr: new_arr,
                    new_count: new_count
                })
            )
        )
    );
}

exports.default = GroupPageMembers;

/***/ }),

/***/ "./src/pages/group_page/pages/members/admins/_main/GPMemAdmins.js":
/*!************************************************************************!*\
  !*** ./src/pages/group_page/pages/members/admins/_main/GPMemAdmins.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GPMemPartList = __webpack_require__(/*! ../../_components/part_list/_main/GPMemPartList */ "./src/pages/group_page/pages/members/_components/part_list/_main/GPMemPartList.js");

var _GPMemPartList2 = _interopRequireDefault(_GPMemPartList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GPMemAdmins.propTypes = {};

//

//
function GPMemAdmins(_ref) {
    var group_id = _ref.group_id,
        admin_arr = _ref.admin_arr,
        admin_count = _ref.admin_count;

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_GPMemPartList2.default, {
            group_id: group_id
            //
            , title: 'Admins & moderators',
            info: '',
            has_learn_more: false,
            link_learn_more: ''
            //
            , user_page_arr: admin_arr,
            user_page_count: admin_count,
            link_all: '/group/members/admins'
        })
    );
}

exports.default = GPMemAdmins;

/***/ }),

/***/ "./src/pages/group_page/pages/members/experts/_main/GPMemExperts.js":
/*!**************************************************************************!*\
  !*** ./src/pages/group_page/pages/members/experts/_main/GPMemExperts.js ***!
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

var _GPMemPartList = __webpack_require__(/*! ../../_components/part_list/_main/GPMemPartList */ "./src/pages/group_page/pages/members/_components/part_list/_main/GPMemPartList.js");

var _GPMemPartList2 = _interopRequireDefault(_GPMemPartList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GPMemExperts.propTypes = {};

//

//
function GPMemExperts(_ref) {
    var group_id = _ref.group_id,
        expert_arr = _ref.expert_arr,
        expert_count = _ref.expert_count;

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_GPMemPartList2.default, {
            group_id: group_id
            //
            , title: 'Group experts',
            info: "Group experts are chosen by admins and know a lot about the group's topic. They get a badge next to their name and help answer questions.",
            has_learn_more: true,
            link_learn_more: '/help/group-experts'
            //
            , user_page_arr: expert_arr,
            user_page_count: expert_count,
            link_all: '/group/members/experts'
        })
    );
}

exports.default = GPMemExperts;

/***/ }),

/***/ "./src/pages/group_page/pages/members/friends/_main/GPMemFriends.js":
/*!**************************************************************************!*\
  !*** ./src/pages/group_page/pages/members/friends/_main/GPMemFriends.js ***!
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

var _GPMemPartList = __webpack_require__(/*! ../../_components/part_list/_main/GPMemPartList */ "./src/pages/group_page/pages/members/_components/part_list/_main/GPMemPartList.js");

var _GPMemPartList2 = _interopRequireDefault(_GPMemPartList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GPMemFriends.propTypes = {};

//

//
function GPMemFriends(_ref) {
    var group_id = _ref.group_id,
        friend_arr = _ref.friend_arr,
        friend_count = _ref.friend_count;

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_GPMemPartList2.default, {
            group_id: group_id
            //
            , title: 'Friends',
            info: '',
            has_learn_more: false,
            link_learn_more: ''
            //
            , user_page_arr: friend_arr,
            user_page_count: friend_count,
            link_all: '/group/members/friends'
        })
    );
}

exports.default = GPMemFriends;

/***/ }),

/***/ "./src/pages/group_page/pages/members/head/_main/GPMemHead.js":
/*!********************************************************************!*\
  !*** ./src/pages/group_page/pages/members/head/_main/GPMemHead.js ***!
  \********************************************************************/
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

var _FormatNum = __webpack_require__(/*! ../../../../../../_some_function/FormatNum */ "./src/_some_function/FormatNum.js");

var _PostInputSearch = __webpack_require__(/*! ../../../../../../component/posts/common/input_search/PostInputSearch */ "./src/component/posts/common/input_search/PostInputSearch.js");

var _PostInputSearch2 = _interopRequireDefault(_PostInputSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
GPMemHead.propTypes = {};

//

//
function GPMemHead(_ref) {
    var member_count = _ref.member_count,
        value_search = _ref.value_search,
        changeSearch = _ref.changeSearch;

    //
    return _react2.default.createElement(
        'div',
        { className: 'GPMemHead' },
        _react2.default.createElement(
            'div',
            { className: 'margin-bottom-10px' },
            _react2.default.createElement(
                'h2',
                { className: 'font-17px font-600' },
                'Members',
                _react2.default.createElement(
                    'span',
                    { className: 'text-secondary' },
                    ' ',
                    '\xB7 ',
                    (0, _FormatNum.formatNum)(member_count)
                )
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'span',
                    { className: 'text-secondary' },
                    'New people and Pages that join this group will appear here.'
                ),
                ' ',
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    {
                        className: 'font-500 color-inherit hv-underline',
                        to: '/group/help'
                    },
                    'Learn more'
                )
            )
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_PostInputSearch2.default, {
                value: value_search,
                changeSearch: changeSearch,
                placeholder: 'Find a member',
                hide_key_when_focus: false
            })
        )
    );
}

exports.default = GPMemHead;

/***/ }),

/***/ "./src/pages/group_page/pages/members/near/_main/GPMemNear.js":
/*!********************************************************************!*\
  !*** ./src/pages/group_page/pages/members/near/_main/GPMemNear.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GPMemPartList = __webpack_require__(/*! ../../_components/part_list/_main/GPMemPartList */ "./src/pages/group_page/pages/members/_components/part_list/_main/GPMemPartList.js");

var _GPMemPartList2 = _interopRequireDefault(_GPMemPartList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GPMemNear.propTypes = {};

//

//
function GPMemNear(_ref) {
    var group_id = _ref.group_id,
        near_arr = _ref.near_arr,
        near_count = _ref.near_count;

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_GPMemPartList2.default, {
            group_id: group_id
            //
            , title: 'Members near you',
            info: '',
            has_learn_more: false,
            link_learn_more: ''
            //
            , user_page_arr: near_arr,
            user_page_count: near_count,
            link_all: '/group/members/near'
        })
    );
}

exports.default = GPMemNear;

/***/ }),

/***/ "./src/pages/group_page/pages/members/new/_main/GPMemNew.js":
/*!******************************************************************!*\
  !*** ./src/pages/group_page/pages/members/new/_main/GPMemNew.js ***!
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

var _member = __webpack_require__(/*! ../../../../../../_handle_api/fb_group/member */ "./src/_handle_api/fb_group/member.js");

var _useObserverShowMore2 = __webpack_require__(/*! ../../../../../../_hooks/useObserverShowMore */ "./src/_hooks/useObserverShowMore.js");

var _GPMemsPartTitle = __webpack_require__(/*! ../../_components/part_title/GPMemsPartTitle */ "./src/pages/group_page/pages/members/_components/part_title/GPMemsPartTitle.js");

var _GPMemsPartTitle2 = _interopRequireDefault(_GPMemsPartTitle);

var _GPMemUserPage = __webpack_require__(/*! ../../_components/user_page/_main/GPMemUserPage */ "./src/pages/group_page/pages/members/_components/user_page/_main/GPMemUserPage.js");

var _GPMemUserPage2 = _interopRequireDefault(_GPMemUserPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
GPMemNew.propTypes = {};

//

// 
function GPMemNew(_ref) {
    var group_id = _ref.group_id,
        new_arr = _ref.new_arr,
        new_count = _ref.new_count;

    //
    var ref_fake_elm = (0, _react.useRef)(null);

    //

    var _useObserverShowMore = (0, _useObserverShowMore2.useObserverShowMore)({
        initial_arr: new_arr,
        handle_API_L: function handle_API_L(c_count) {
            return (0, _member.handle_API_FbGroupMember_L)({
                c_count: c_count,
                group_id: group_id,
                type: 'new'
            });
        }
    }),
        data_state = _useObserverShowMore.data_state,
        is_max = _useObserverShowMore.is_max,
        observerShowMore = _useObserverShowMore.observerShowMore;

    var data_arr = data_state.data_arr;

    //

    (0, _react.useEffect)(function () {
        // console.log(new_count, new_arr.length);
        // new_count > new_arr.length &&
        observerShowMore({
            fake_elm_end: ref_fake_elm.current,
            rootMargin: '0px',
            way_scroll: 'to_bottom',
            margin: 0
        });
    }, []);

    // ------

    // 
    function handleAction(params) {
        console.log(params);
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'GPMemNew' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_GPMemsPartTitle2.default, {
                title: 'New to the group',
                count: 0,
                show_count: false,
                info: "This list includes people who've joined the group, as well as people who are previewing the group. Anyone who's been invited and approved can preview the content in the group.",
                has_learn_more: false,
                link_learn_more: ''
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'margin-top-10px' },
            data_arr.map(function (item, ix) {
                return _react2.default.createElement(
                    'div',
                    { key: item.id },
                    _react2.default.createElement(_GPMemUserPage2.default, {
                        group_id: group_id,
                        has_action_other: true,
                        item: item,
                        handleAction: handleAction
                    })
                );
            })
        ),
        _react2.default.createElement('div', { ref: ref_fake_elm, className: 'h-1px' }),
        is_max.current ? null : _react2.default.createElement('div', { className: 'h-250px' })
    );
}

exports.default = GPMemNew;

/***/ }),

/***/ "./src/pages/group_page/pages/members/same/_main/GPMemSame.js":
/*!********************************************************************!*\
  !*** ./src/pages/group_page/pages/members/same/_main/GPMemSame.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GPMemPartList = __webpack_require__(/*! ../../_components/part_list/_main/GPMemPartList */ "./src/pages/group_page/pages/members/_components/part_list/_main/GPMemPartList.js");

var _GPMemPartList2 = _interopRequireDefault(_GPMemPartList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GPMemSame.propTypes = {};

//

//
function GPMemSame(_ref) {
    var group_id = _ref.group_id,
        same_arr = _ref.same_arr,
        same_count = _ref.same_count;

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_GPMemPartList2.default, {
            group_id: group_id
            //
            , title: 'Members with things in common',
            show_count_on_title: false,
            info: '',
            has_learn_more: false,
            link_learn_more: ''
            //
            , user_page_arr: same_arr,
            user_page_count: same_count,
            link_all: '/group/members/sames'
        })
    );
}

exports.default = GPMemSame;

/***/ }),

/***/ "./src/pages/group_page/pages/members/you/GPMemYou.js":
/*!************************************************************!*\
  !*** ./src/pages/group_page/pages/members/you/GPMemYou.js ***!
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

var _GPMemUserPage = __webpack_require__(/*! ../_components/user_page/_main/GPMemUserPage */ "./src/pages/group_page/pages/members/_components/user_page/_main/GPMemUserPage.js");

var _GPMemUserPage2 = _interopRequireDefault(_GPMemUserPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GPMemYou.propTypes = {};

//

//
function GPMemYou(_ref) {
    var group_id = _ref.group_id,
        you_obj = _ref.you_obj;

    //
    // function handleAction(action_name = '') {
    //     console.log(action_name);
    // }

    //
    return _react2.default.createElement(
        'div',
        { className: 'GPMemYou' },
        _react2.default.createElement(_GPMemUserPage2.default, {
            group_id: group_id,
            has_action_other: true,
            item: you_obj
            // handleAction={handleAction}
        })
    );
}

exports.default = GPMemYou;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/members/_components/user_page/_layout/GPMemUserPageLayout.scss":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/members/_components/user_page/_layout/GPMemUserPageLayout.scss ***!
  \************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".device-mobile .GPMemUserPageLayout_row {\n  align-items: flex-start;\n}\n.device-mobile .GPMemUserPageLayout_left img {\n  width: 40px;\n  height: 40px;\n}\n.device-mobile .GPMemUserPageLayout_right .BtnActions {\n  height: 30px;\n  width: 30px;\n  padding: 0;\n  border-radius: 50%;\n}", "",{"version":3,"sources":["webpack://./src/pages/group_page/pages/members/_components/user_page/_layout/GPMemUserPageLayout.scss"],"names":[],"mappings":"AACI;EACI,uBAAA;AAAR;AAIQ;EACI,WAAA;EACA,YAAA;AAFZ;AAOQ;EACI,YAAA;EACA,WAAA;EACA,UAAA;EAEA,kBAAA;AANZ","sourcesContent":[".device-mobile{\r\n    .GPMemUserPageLayout_row{\r\n        align-items: flex-start;\r\n    }\r\n\r\n    .GPMemUserPageLayout_left{\r\n        img{\r\n            width: 40px;\r\n            height: 40px;\r\n        }\r\n    }\r\n\r\n    .GPMemUserPageLayout_right{\r\n        .BtnActions {\r\n            height: 30px;\r\n            width: 30px;\r\n            padding: 0;\r\n\r\n            border-radius: 50%;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/members/_main/GroupPageMembers.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/members/_main/GroupPageMembers.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".GroupPageMembers_hr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.device-mobile .GroupPageMembers_contain {\n  padding: 8px;\n}", "",{"version":3,"sources":["webpack://./src/pages/group_page/pages/members/_main/GroupPageMembers.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;EACA,mBAAA;AACJ;;AAKI;EACI,YAAA;AAFR","sourcesContent":[".GroupPageMembers_hr {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n// ------\r\n\r\n.device-mobile{\r\n    .GroupPageMembers_contain{\r\n        padding: 8px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/group_page/pages/members/_components/user_page/_layout/GPMemUserPageLayout.scss":
/*!***************************************************************************************************!*\
  !*** ./src/pages/group_page/pages/members/_components/user_page/_layout/GPMemUserPageLayout.scss ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GPMemUserPageLayout_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../node_modules/sass-loader/dist/cjs.js!./GPMemUserPageLayout.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/members/_components/user_page/_layout/GPMemUserPageLayout.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GPMemUserPageLayout_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GPMemUserPageLayout_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/group_page/pages/members/_main/GroupPageMembers.scss":
/*!************************************************************************!*\
  !*** ./src/pages/group_page/pages/members/_main/GroupPageMembers.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageMembers_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./GroupPageMembers.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/members/_main/GroupPageMembers.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageMembers_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageMembers_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_group_page_pages_members__main_GroupPageMembers_js.js.map