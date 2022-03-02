(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_group_page_pages_about__main_GroupPageAbout_js"],{

/***/ "./src/_default/fb_group/page_about.js":
/*!*********************************************!*\
  !*** ./src/_default/fb_group/page_about.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default_fb_group_page_about_obj = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// 

// 


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _IconGroup = __webpack_require__(/*! ../../_icons_svg/icon_group/IconGroup */ "./src/_icons_svg/icon_group/IconGroup.js");

var _IconGroup2 = _interopRequireDefault(_IconGroup);

var _default_bool = __webpack_require__(/*! ../_common/default_bool */ "./src/_default/_common/default_bool.js");

var _default_content = __webpack_require__(/*! ../_common/default_content */ "./src/_default/_common/default_content.js");

var _default_id = __webpack_require__(/*! ../_common/default_id */ "./src/_default/_common/default_id.js");

var _default_user = __webpack_require__(/*! ../_common/default_user */ "./src/_default/_common/default_user.js");

var _getDefaultArr = __webpack_require__(/*! ../_common/getDefaultArr */ "./src/_default/_common/getDefaultArr.js");

var _getRandomFromArr = __webpack_require__(/*! ../_common/getRandomFromArr */ "./src/_default/_common/getRandomFromArr.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var getRandomUserPage = function getRandomUserPage() {
    return (0, _default_bool.getRandomBool)() ? _extends({}, (0, _default_user.getRandomUser)().user, {
        type: 'user'
    }) : _extends({}, (0, _default_user.getRandomPage)().page_obj, {
        type: 'page'
    });
};

//
var default_fb_group_page_about_obj = exports.default_fb_group_page_about_obj = function default_fb_group_page_about_obj() {
    var member_count = (0, _default_id.getRandomNumber)(2, 200);

    var friend_arr = (0, _getDefaultArr.getDefaultArr)(getRandomUserPage, member_count <= 7 ? 0 : 1, member_count <= 7 ? member_count : 7);
    var friend_name_str = 'Nguyen and My are members.';

    var admin_arr = (0, _getDefaultArr.getDefaultArr)(getRandomUserPage, member_count <= 7 ? 0 : 1, member_count <= 7 ? member_count : 7);
    var admin_name_str = 'Nam is admin. Phuong is moderate.';

    return {
        id: (0, _default_id.getRandomId)(),
        description: (0, _default_content.getRandomContent)(),
        privacy: (0, _getRandomFromArr.getRandomFromArr)(['Public', 'Private']),
        visibility: (0, _getRandomFromArr.getRandomFromArr)(['Visible', 'Invisible']),
        type_obj: { name: 'general', title: 'General', Icon: _react2.default.createElement(_IconGroup2.default, null) },

        member_count: member_count,
        created_time: new Date(2018, 2).toString(),
        recommended_count: (0, _default_id.getRandomNumber)(4, 6),

        friend_arr: friend_arr,
        friend_name_str: friend_name_str,
        admin_arr: admin_arr,
        admin_name_str: admin_name_str,

        post_day_count: (0, _default_id.getRandomNumber)(5, 10),
        post_month_count: (0, _default_id.getRandomNumber)(150, 300),
        member_week_count: (0, _default_id.getRandomNumber)(0, member_count - 1)
    };
};

/***/ }),

/***/ "./src/_handle_api/fb_group/page_about.js":
/*!************************************************!*\
  !*** ./src/_handle_api/fb_group/page_about.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handle_API_FbGroupAbout_R = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var handle_API_FbGroupAbout_R = exports.handle_API_FbGroupAbout_R = function () {
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
                        return (0, _page_about.API_FbGroupAbout_R)(_extends({
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

    return function handle_API_FbGroupAbout_R(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _page_about = __webpack_require__(/*! ../../api/api_django/fb_group/page_about */ "./src/api/api_django/fb_group/page_about.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/api/api_django/fb_group/page_about.js":
/*!***************************************************!*\
  !*** ./src/api/api_django/fb_group/page_about.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.API_FbGroupAbout_R = undefined;

var _AxiosDjango = __webpack_require__(/*! ../_axios/AxiosDjango */ "./src/api/api_django/_axios/AxiosDjango.js");

var _AxiosDjango2 = _interopRequireDefault(_AxiosDjango);

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _page_about = __webpack_require__(/*! ../../../_default/fb_group/page_about */ "./src/_default/fb_group/page_about.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
var API_FbGroupAbout_R = exports.API_FbGroupAbout_R = function API_FbGroupAbout_R(params) {
    return (0, _ConstAPI.API_FakeReal)((0, _page_about.default_fb_group_page_about_obj)(), function () {
        return (0, _AxiosDjango2.default)({
            url: 'api/facebook/fb-group-page-about-r/',
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

/***/ "./src/pages/group_page/pages/about/_main/GroupPageAbout.js":
/*!******************************************************************!*\
  !*** ./src/pages/group_page/pages/about/_main/GroupPageAbout.js ***!
  \******************************************************************/
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


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _page = __webpack_require__(/*! ../../../../../_initial/group/page */ "./src/_initial/group/page.js");

var _page_about = __webpack_require__(/*! ../../../../../_handle_api/fb_group/page_about */ "./src/_handle_api/fb_group/page_about.js");

__webpack_require__(/*! ./GroupPageAboutCommon.scss */ "./src/pages/group_page/pages/about/_main/GroupPageAboutCommon.scss");

var _GPAboutGroup = __webpack_require__(/*! ../group/_main/GPAboutGroup */ "./src/pages/group_page/pages/about/group/_main/GPAboutGroup.js");

var _GPAboutGroup2 = _interopRequireDefault(_GPAboutGroup);

var _GPAbTransparency = __webpack_require__(/*! ../transparency/_main/GPAbTransparency */ "./src/pages/group_page/pages/about/transparency/_main/GPAbTransparency.js");

var _GPAbTransparency2 = _interopRequireDefault(_GPAbTransparency);

var _GPAbRecommended = __webpack_require__(/*! ../recommended/_main/GPAbRecommended */ "./src/pages/group_page/pages/about/recommended/_main/GPAbRecommended.js");

var _GPAbRecommended2 = _interopRequireDefault(_GPAbRecommended);

var _GPAbMembers = __webpack_require__(/*! ../members/_main/GPAbMembers */ "./src/pages/group_page/pages/about/members/_main/GPAbMembers.js");

var _GPAbMembers2 = _interopRequireDefault(_GPAbMembers);

var _GPAbActivity = __webpack_require__(/*! ../activity/_main/GPAbActivity */ "./src/pages/group_page/pages/about/activity/_main/GPAbActivity.js");

var _GPAbActivity2 = _interopRequireDefault(_GPAbActivity);

__webpack_require__(/*! ./GroupPageAbout.scss */ "./src/pages/group_page/pages/about/_main/GroupPageAbout.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
GroupPageAbout.propTypes = {};

//
function GroupPageAbout(_ref) {

    // -------

    //
    var getData_API = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _page_about.handle_API_FbGroupAbout_R)({ group_id: group_id });

                        case 2:
                            data = _context.sent;


                            setStateObj(function (state_obj) {
                                return _extends({}, state_obj, {
                                    group_obj: data,
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

    // ------

    var group_id = _ref.group_id;

    //
    var _useState = (0, _react.useState)({
        group_obj: (0, _page.initial_group_page_about)(),
        has_fetched: false
    }),
        _useState2 = _slicedToArray(_useState, 2),
        state_obj = _useState2[0],
        setStateObj = _useState2[1];

    var group_obj = state_obj.group_obj,
        has_fetched = state_obj.has_fetched;
    var description = group_obj.description,
        privacy = group_obj.privacy,
        visibility = group_obj.visibility,
        type_obj = group_obj.type_obj,
        member_count = group_obj.member_count,
        created_time = group_obj.created_time,
        recommended_count = group_obj.recommended_count,
        friend_arr = group_obj.friend_arr,
        friend_name_str = group_obj.friend_name_str,
        admin_arr = group_obj.admin_arr,
        admin_name_str = group_obj.admin_name_str,
        post_day_count = group_obj.post_day_count,
        post_month_count = group_obj.post_month_count,
        member_week_count = group_obj.member_week_count;

    //

    (0, _react.useEffect)(function () {
        getData_API();
    }, []);if (!has_fetched) {
        return _react2.default.createElement('div', { className: 'h-100vh' });
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupPageAbout margin-auto w-680px' },
        _react2.default.createElement(
            'div',
            { className: 'GroupPageAbout_part' },
            _react2.default.createElement(_GPAboutGroup2.default, {
                description: description,
                privacy: privacy,
                visibility: visibility,
                type_obj: type_obj,
                has_fetched: has_fetched
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'GroupPageAbout_part' },
            _react2.default.createElement(_GPAbTransparency2.default, { created_time: created_time })
        ),
        _react2.default.createElement(
            'div',
            { className: 'GroupPageAbout_part' },
            _react2.default.createElement(_GPAbRecommended2.default, { recommended_count: recommended_count })
        ),
        _react2.default.createElement(
            'div',
            { className: 'GroupPageAbout_part' },
            _react2.default.createElement(_GPAbMembers2.default, {
                group_id: group_id,
                member_count: member_count,
                friend_arr: friend_arr,
                friend_name_str: friend_name_str,
                admin_arr: admin_arr,
                admin_name_str: admin_name_str
            })
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_GPAbActivity2.default, {
                post_day_count: post_day_count,
                post_month_count: post_month_count,
                member_count: member_count,
                member_week_count: member_week_count,
                created_time: created_time
            })
        )
    );
}

exports.default = GroupPageAbout;

/***/ }),

/***/ "./src/pages/group_page/pages/about/activity/_main/GPAbActivity.js":
/*!*************************************************************************!*\
  !*** ./src/pages/group_page/pages/about/activity/_main/GPAbActivity.js ***!
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

var _UnitTime = __webpack_require__(/*! ../../../../../../_some_function/UnitTime */ "./src/_some_function/UnitTime.js");

var _GroupPageAboutPart = __webpack_require__(/*! ../../../../_components/about_part/GroupPageAboutPart */ "./src/pages/group_page/_components/about_part/GroupPageAboutPart.js");

var _GroupPageAboutPart2 = _interopRequireDefault(_GroupPageAboutPart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
GPAbActivity.propTypes = {};

//

//
function GPAbActivity(_ref) {
    var post_day_count = _ref.post_day_count,
        post_month_count = _ref.post_month_count,
        member_count = _ref.member_count,
        member_week_count = _ref.member_week_count,
        created_time = _ref.created_time;

    //
    var _getTimeAndUnit = (0, _UnitTime.getTimeAndUnit)({ c_time: created_time }),
        time = _getTimeAndUnit.time,
        unit = _getTimeAndUnit.unit;

    //


    return _react2.default.createElement(
        'div',
        { className: 'GPAbActivity gr-page-about-part' },
        _react2.default.createElement(
            'h2',
            { className: 'gr-page-about-title' },
            'Activity'
        ),
        _react2.default.createElement('hr', { className: 'gr-page-hr' }),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_GroupPageAboutPart2.default, {
                title: (post_day_count || 'No') + ' new post' + (post_day_count == 1 ? '' : 's') + ' today',
                info: (post_month_count || 'No') + ' in the last month'
            })
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_GroupPageAboutPart2.default, {
                title: member_count + ' total member' + (member_count >= 2 ? 's' : '') + ' ',
                info: '+ ' + member_week_count + ' in the last week'
            })
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_GroupPageAboutPart2.default, {
                title: 'Created on ' + time + ' ' + unit + (time >= 2 ? 's' : '') + ' ago'
            })
        )
    );
}

exports.default = GPAbActivity;

/***/ }),

/***/ "./src/pages/group_page/pages/about/group/_main/GPAboutGroup.js":
/*!**********************************************************************!*\
  !*** ./src/pages/group_page/pages/about/group/_main/GPAboutGroup.js ***!
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

var _GPAbGroupContain = __webpack_require__(/*! ../contain/GPAbGroupContain */ "./src/pages/group_page/pages/about/group/contain/GPAbGroupContain.js");

var _GPAbGroupContain2 = _interopRequireDefault(_GPAbGroupContain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GPAboutGroup.propTypes = {};

//

//
function GPAboutGroup(_ref) {
    var description = _ref.description,
        privacy = _ref.privacy,
        visibility = _ref.visibility,
        type_obj = _ref.type_obj,
        has_fetched = _ref.has_fetched;

    //
    return _react2.default.createElement(
        'div',
        { className: 'GPAboutGroup gr-page-about-part' },
        _react2.default.createElement(
            'h2',
            { className: 'gr-page-about-title' },
            'About this group'
        ),
        _react2.default.createElement('hr', { className: 'gr-page-hr' }),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_GPAbGroupContain2.default, {
                description: description,
                privacy: privacy,
                visibility: visibility,
                type_obj: type_obj,
                has_fetched: has_fetched
                //
                // handleReady={handleReady}
            })
        )
    );
}

exports.default = GPAboutGroup;

/***/ }),

/***/ "./src/pages/group_page/pages/about/group/contain/GPAbGroupContain.js":
/*!****************************************************************************!*\
  !*** ./src/pages/group_page/pages/about/group/contain/GPAbGroupContain.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GPAboutDescription = __webpack_require__(/*! ../../../../_components/about_description/GPAboutDescription */ "./src/pages/group_page/_components/about_description/GPAboutDescription.js");

var _GPAboutDescription2 = _interopRequireDefault(_GPAboutDescription);

var _GPAboutPrivacy = __webpack_require__(/*! ../../../../_components/about_privacy/GPAboutPrivacy */ "./src/pages/group_page/_components/about_privacy/GPAboutPrivacy.js");

var _GPAboutPrivacy2 = _interopRequireDefault(_GPAboutPrivacy);

var _GPAboutVisibility = __webpack_require__(/*! ../../../../_components/about_visibility/GPAboutVisibility */ "./src/pages/group_page/_components/about_visibility/GPAboutVisibility.js");

var _GPAboutVisibility2 = _interopRequireDefault(_GPAboutVisibility);

var _GroupPageAboutPart = __webpack_require__(/*! ../../../../_components/about_part/GroupPageAboutPart */ "./src/pages/group_page/_components/about_part/GroupPageAboutPart.js");

var _GroupPageAboutPart2 = _interopRequireDefault(_GroupPageAboutPart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
GPAbGroupContain.propTypes = {};

//
function GPAbGroupContain(_ref) {
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
            { className: 'GPAbGroupContain_part' },
            _react2.default.createElement(_GPAboutDescription2.default, {
                description: description,
                handleReady: handleReady
            })
        ) : null,
        _react2.default.createElement(
            'div',
            { className: 'GPAbGroupContain_part' },
            _react2.default.createElement(_GPAboutPrivacy2.default, { privacy: privacy })
        ),
        _react2.default.createElement(
            'div',
            { className: 'GPAbGroupContain_part' },
            _react2.default.createElement(_GPAboutVisibility2.default, { visibility: visibility })
        ),
        _react2.default.createElement(
            'div',
            { className: 'GPAbGroupContain_part' },
            _react2.default.createElement(_GroupPageAboutPart2.default, {
                Icon: type_obj.Icon,
                title: type_obj.title
            })
        )
    );
}

exports.default = GPAbGroupContain;

/***/ }),

/***/ "./src/pages/group_page/pages/about/members/_main/GPAbMembers.js":
/*!***********************************************************************!*\
  !*** ./src/pages/group_page/pages/about/members/_main/GPAbMembers.js ***!
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

var _UnitNumber = __webpack_require__(/*! ../../../../../../_some_function/UnitNumber */ "./src/_some_function/UnitNumber.js");

var _GroupPageAboutSeeAll = __webpack_require__(/*! ../../../../_components/about_see_all/GroupPageAboutSeeAll */ "./src/pages/group_page/_components/about_see_all/GroupPageAboutSeeAll.js");

var _GroupPageAboutSeeAll2 = _interopRequireDefault(_GroupPageAboutSeeAll);

var _GPAbMembersPics = __webpack_require__(/*! ../pics/GPAbMembersPics */ "./src/pages/group_page/pages/about/members/pics/GPAbMembersPics.js");

var _GPAbMembersPics2 = _interopRequireDefault(_GPAbMembersPics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
GPAbMembers.propTypes = {};

//

//
function GPAbMembers(_ref) {
    var group_id = _ref.group_id,
        member_count = _ref.member_count,
        friend_arr = _ref.friend_arr,
        friend_name_str = _ref.friend_name_str,
        admin_arr = _ref.admin_arr,
        admin_name_str = _ref.admin_name_str;

    //
    return _react2.default.createElement(
        'div',
        { className: 'GPAbMembers gr-page-about-part' },
        _react2.default.createElement(
            'h2',
            { className: 'gr-page-about-title' },
            'Members \xB7 ',
            (0, _UnitNumber.UnitNumber)(member_count)
        ),
        _react2.default.createElement('hr', { className: 'gr-page-hr' }),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_GPAbMembersPics2.default, {
                member_arr: friend_arr,
                member_name_str: friend_name_str
            })
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_GPAbMembersPics2.default, {
                member_arr: admin_arr,
                member_name_str: admin_name_str
            })
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_GroupPageAboutSeeAll2.default, { link_to: '/group/' + group_id + '/members' })
        )
    );
}

exports.default = GPAbMembers;

/***/ }),

/***/ "./src/pages/group_page/pages/about/members/pics/GPAbMembersPics.js":
/*!**************************************************************************!*\
  !*** ./src/pages/group_page/pages/about/members/pics/GPAbMembersPics.js ***!
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

var _ActionPreviewProfile = __webpack_require__(/*! ../../../../../../component/action_preview_profile/_main/ActionPreviewProfile */ "./src/component/action_preview_profile/_main/ActionPreviewProfile.js");

var _ActionPreviewProfile2 = _interopRequireDefault(_ActionPreviewProfile);

var _ActionPreviewPage = __webpack_require__(/*! ../../../../../../component/action_preview_page/_main/ActionPreviewPage */ "./src/component/action_preview_page/_main/ActionPreviewPage.js");

var _ActionPreviewPage2 = _interopRequireDefault(_ActionPreviewPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
function TitleAction(_ref) {
    var link_to = _ref.link_to,
        picture = _ref.picture;

    return _react2.default.createElement(
        _reactRouterDom.Link,
        { to: link_to },
        _react2.default.createElement('img', {
            className: 'brs-50 object-fit-cover',
            src: picture,
            alt: '',
            width: '32',
            height: '32'
        })
    );
}

//
GPAbMembersPics.propTypes = {};

//
function GPAbMembersPics(_ref2) {
    var member_arr = _ref2.member_arr,
        member_name_str = _ref2.member_name_str;

    //
    return _react2.default.createElement(
        'div',
        { className: 'GPAbMembersPics padding-bottom-16px' },
        _react2.default.createElement(
            'div',
            { className: 'padding-y-10px' },
            _react2.default.createElement(
                'ul',
                { className: 'display-flex list-none' },
                member_arr.map(function (item, ix) {
                    return _react2.default.createElement(
                        'li',
                        { key: item.id, className: 'margin-right-4px' },
                        item.type == 'user' ? _react2.default.createElement(_ActionPreviewProfile2.default, {
                            user_id: item.id,
                            title_action: _react2.default.createElement(TitleAction, {
                                link_to: '/profile/' + item.id,
                                picture: item.picture
                            })
                        }) : _react2.default.createElement(_ActionPreviewPage2.default, {
                            page_id: item.id,
                            title_action: _react2.default.createElement(TitleAction, {
                                link_to: '/page/' + item.id,
                                picture: item.picture
                            })
                        })
                    );
                })
            )
        ),
        _react2.default.createElement(
            'div',
            null,
            member_name_str
        )
    );
}

exports.default = GPAbMembersPics;

/***/ }),

/***/ "./src/pages/group_page/pages/about/recommended/_main/GPAbRecommended.js":
/*!*******************************************************************************!*\
  !*** ./src/pages/group_page/pages/about/recommended/_main/GPAbRecommended.js ***!
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

var _GroupRowCardsFit = __webpack_require__(/*! ../../../../../group/_components/row_cards/fit/GroupRowCardsFit */ "./src/pages/group/_components/row_cards/fit/GroupRowCardsFit.js");

var _GroupRowCardsFit2 = _interopRequireDefault(_GroupRowCardsFit);

__webpack_require__(/*! ./GPAbRecommended.scss */ "./src/pages/group_page/pages/about/recommended/_main/GPAbRecommended.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
GPAbRecommended.propTypes = {};

//

// 
function GPAbRecommended(_ref) {
    var recommended_count = _ref.recommended_count,
        openRecommendedGroups = _ref.openRecommendedGroups;

    //
    return _react2.default.createElement(
        'div',
        { className: 'GPAbRecommended gr-page-about-part' },
        _react2.default.createElement(
            'h2',
            { className: 'gr-page-about-title' },
            'Recommended by the admins \xB7 ',
            recommended_count
        ),
        _react2.default.createElement('hr', { className: 'gr-page-hr' }),
        _react2.default.createElement(
            'div',
            { className: 'font-13px' },
            _react2.default.createElement(_GroupRowCardsFit2.default
            // has_handle_API_L={true}
            // handle_API_GroupCards_L={}
            , { params_api: {}
                // handleFetched={handleFetched}
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'margin-top-10px' },
            _react2.default.createElement(
                'button',
                {
                    className: 'display-flex-center w-100per h-36px btn btn-active brs-6px text-blue font-500 cursor-pointer hv-bg-s-through',
                    type: 'button',
                    onClick: openRecommendedGroups
                },
                'See All Groups'
            )
        )
    );
}

exports.default = GPAbRecommended;

/***/ }),

/***/ "./src/pages/group_page/pages/about/transparency/_main/GPAbTransparency.js":
/*!*********************************************************************************!*\
  !*** ./src/pages/group_page/pages/about/transparency/_main/GPAbTransparency.js ***!
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

var _GroupPageAboutPart = __webpack_require__(/*! ../../../../_components/about_part/GroupPageAboutPart */ "./src/pages/group_page/_components/about_part/GroupPageAboutPart.js");

var _GroupPageAboutPart2 = _interopRequireDefault(_GroupPageAboutPart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GPAbTransparency.propTypes = {};

//

//
function GPAbTransparency(_ref) {
    var created_time = _ref.created_time,
        openGroupHistory = _ref.openGroupHistory;

    //
    return _react2.default.createElement(
        'div',
        { className: 'GPAboutGroup gr-page-about-part' },
        _react2.default.createElement(
            'h2',
            { className: 'gr-page-about-title' },
            'Transparency'
        ),
        _react2.default.createElement('hr', { className: 'gr-page-hr' }),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_GroupPageAboutPart2.default, {
                Icon: null,
                title: 'History',
                info: 'Group created on ' + created_time
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'margin-top-10px' },
            _react2.default.createElement(
                'button',
                {
                    className: 'display-flex-center w-100per h-36px btn btn-active brs-6px bg-ccc font-600 cursor-pointer hv-bg-hv',
                    type: 'button',
                    onClick: openGroupHistory
                },
                'See All'
            )
        )
    );
}

exports.default = GPAbTransparency;

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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/about/_main/GroupPageAbout.scss":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/about/_main/GroupPageAbout.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".GroupPageAbout {\n  max-width: 100%;\n}\n\n.GroupPageAbout_part {\n  margin-bottom: 16px;\n}", "",{"version":3,"sources":["webpack://./src/pages/group_page/pages/about/_main/GroupPageAbout.scss"],"names":[],"mappings":"AAAA;EACI,eAAA;AACJ;;AAEA;EACI,mBAAA;AACJ","sourcesContent":[".GroupPageAbout {\r\n    max-width: 100%;\r\n}\r\n\r\n.GroupPageAbout_part{\r\n    margin-bottom: 16px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/about/_main/GroupPageAboutCommon.scss":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/about/_main/GroupPageAboutCommon.scss ***!
  \***********************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".gr-page-about-part {\n  padding: 16px;\n  border-radius: 8px;\n  background-color: var(--md-bg-primary);\n  box-shadow: var(--box-shadow-1);\n}\n\n.gr-page-about-title {\n  font-size: 17px;\n  font-weight: 600;\n}\n\n.device-mobile .gr-page-about-part {\n  padding: 8px;\n  border-radius: 0;\n}\n.device-mobile .gr-page-about-title {\n  font-size: 16px;\n}", "",{"version":3,"sources":["webpack://./src/pages/group_page/pages/about/_main/GroupPageAboutCommon.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,kBAAA;EACA,sCAAA;EACA,+BAAA;AACJ;;AAEA;EACI,eAAA;EACA,gBAAA;AACJ;;AAKI;EACI,YAAA;EACA,gBAAA;AAFR;AAKI;EACI,eAAA;AAHR","sourcesContent":[".gr-page-about-part {\r\n    padding: 16px;\r\n    border-radius: 8px;\r\n    background-color: var(--md-bg-primary);\r\n    box-shadow: var(--box-shadow-1);\r\n}\r\n\r\n.gr-page-about-title {\r\n    font-size: 17px;\r\n    font-weight: 600;\r\n}\r\n\r\n// ----\r\n\r\n.device-mobile {\r\n    .gr-page-about-part {\r\n        padding: 8px;\r\n        border-radius: 0;\r\n    }\r\n\r\n    .gr-page-about-title {\r\n        font-size: 16px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/about/recommended/_main/GPAbRecommended.scss":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/about/recommended/_main/GPAbRecommended.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".GPAbRecommended .CardsRowFitContain_item {\n  width: 30%;\n  min-width: 240px;\n}", "",{"version":3,"sources":["webpack://./src/pages/group_page/pages/about/recommended/_main/GPAbRecommended.scss"],"names":[],"mappings":"AACI;EACI,UAAA;EACA,gBAAA;AAAR","sourcesContent":[".GPAbRecommended{\r\n    .CardsRowFitContain_item {\r\n        width: 30%;\r\n        min-width: 240px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./src/pages/group_page/pages/about/_main/GroupPageAbout.scss":
/*!********************************************************************!*\
  !*** ./src/pages/group_page/pages/about/_main/GroupPageAbout.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageAbout_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./GroupPageAbout.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/about/_main/GroupPageAbout.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageAbout_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageAbout_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/group_page/pages/about/_main/GroupPageAboutCommon.scss":
/*!**************************************************************************!*\
  !*** ./src/pages/group_page/pages/about/_main/GroupPageAboutCommon.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageAboutCommon_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./GroupPageAboutCommon.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/about/_main/GroupPageAboutCommon.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageAboutCommon_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupPageAboutCommon_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/group_page/pages/about/recommended/_main/GPAbRecommended.scss":
/*!*********************************************************************************!*\
  !*** ./src/pages/group_page/pages/about/recommended/_main/GPAbRecommended.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GPAbRecommended_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./GPAbRecommended.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/about/recommended/_main/GPAbRecommended.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GPAbRecommended_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GPAbRecommended_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_group_page_pages_about__main_GroupPageAbout_js.js.map