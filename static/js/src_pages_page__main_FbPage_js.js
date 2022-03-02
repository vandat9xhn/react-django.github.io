(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_page__main_FbPage_js"],{

/***/ "./src/_default/fb_page/page.js":
/*!**************************************!*\
  !*** ./src/_default/fb_page/page.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default_fb_page_obj = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _default_bool = __webpack_require__(/*! ../_common/default_bool */ "./src/_default/_common/default_bool.js");

var _default_image = __webpack_require__(/*! ../_common/default_image */ "./src/_default/_common/default_image.js");

var _default_user = __webpack_require__(/*! ../_common/default_user */ "./src/_default/_common/default_user.js");

var _getRandomPageType = __webpack_require__(/*! ../_common/getRandomPageType */ "./src/_default/_common/getRandomPageType.js");

//
var default_fb_page_obj = exports.default_fb_page_obj = function default_fb_page_obj() {
    var _getRandomPage = (0, _default_user.getRandomPage)(),
        page_obj = _getRandomPage.page_obj;

    //


    return _extends({}, page_obj, {
        cover: (0, _default_image.getRandomImg)(),
        has_new_story: (0, _default_bool.getRandomBool)(),

        info_extra_1: {
            title: '@' + page_obj.name.toLowerCase().replace(' ', ''),
            has_link: false,
            link_to: ''
        },
        info_extra_2: {
            title: (0, _getRandomPageType.getRandomPageType)(),
            has_link: false,
            link_to: ''
        },

        action_main_arr: ['learn_more'],
        action_arr: ['like', 'chat'],
        has_liked: (0, _default_bool.getRandomBool)(),
        has_followed: (0, _default_bool.getRandomBool)()
    });
};

/***/ }),

/***/ "./src/_handle_api/fb_page/page.js":
/*!*****************************************!*\
  !*** ./src/_handle_api/fb_page/page.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handle_API_FbPage_R = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var handle_API_FbPage_R = exports.handle_API_FbPage_R = function () {
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
                        return (0, _page.API_FbPage_R)(_extends({
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

    return function handle_API_FbPage_R(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _page = __webpack_require__(/*! ../../api/api_django/fb_page/page */ "./src/api/api_django/fb_page/page.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/_initial/page/page.js":
/*!***********************************!*\
  !*** ./src/_initial/page/page.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
//
var initial_fb_page = exports.initial_fb_page = function initial_fb_page() {
    return {
        name: '',
        picture: '',
        cover: '',
        has_new_story: false,
        has_seen_story: false,

        info_extra_1: { title: '', has_link: false, link_to: '' },
        info_extra_2: { title: '', has_link: false, link_to: '' },

        action_main_arr: [],
        action_arr: [],

        has_liked: false,
        has_followed: false
    };
};

/***/ }),

/***/ "./src/api/api_django/fb_page/page.js":
/*!********************************************!*\
  !*** ./src/api/api_django/fb_page/page.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.API_FbPage_R = undefined;

var _AxiosDjango = __webpack_require__(/*! ../_axios/AxiosDjango */ "./src/api/api_django/_axios/AxiosDjango.js");

var _AxiosDjango2 = _interopRequireDefault(_AxiosDjango);

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _page = __webpack_require__(/*! ../../../_default/fb_page/page */ "./src/_default/fb_page/page.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
var API_FbPage_R = exports.API_FbPage_R = function API_FbPage_R(params) {
    return (0, _ConstAPI.API_FakeReal)((0, _page.default_fb_page_obj)(), function () {
        return (0, _AxiosDjango2.default)({
            url: 'api/facebook/fb-page-r/',
            method: 'GET',
            params: params
        });
    }, params);
};
//

/***/ }),

/***/ "./src/component/profile_layout/picture/ProfileLayoutPicture.js":
/*!**********************************************************************!*\
  !*** ./src/component/profile_layout/picture/ProfileLayoutPicture.js ***!
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _HasLinkOrNot = __webpack_require__(/*! ../../link/has_link_or_not/HasLinkOrNot */ "./src/component/link/has_link_or_not/HasLinkOrNot.js");

var _HasLinkOrNot2 = _interopRequireDefault(_HasLinkOrNot);

var _ActionsMultiList = __webpack_require__(/*! ../../actions_multi_list/_main/ActionsMultiList */ "./src/component/actions_multi_list/_main/ActionsMultiList.js");

var _ActionsMultiList2 = _interopRequireDefault(_ActionsMultiList);

var _ActionsMultiListItem = __webpack_require__(/*! ../../actions_multi_list/item/ActionsMultiListItem */ "./src/component/actions_multi_list/item/ActionsMultiListItem.js");

var _ActionsMultiListItem2 = _interopRequireDefault(_ActionsMultiListItem);

__webpack_require__(/*! ./ProfileLayoutPicture.scss */ "./src/component/profile_layout/picture/ProfileLayoutPicture.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
var ProfilePicture = function ProfilePicture(_ref) {
    var picture = _ref.picture,
        has_new_story = _ref.has_new_story,
        has_seen_story = _ref.has_seen_story;

    return _react2.default.createElement(
        'div',
        {
            className: 'ProfileLayoutPicture_pic pos-abs-100 brs-50 box-shadow-1 ' + (has_new_story ? 'ProfileLayoutPicture_pic-story cursor-pointer active-scale-sm ' + (has_seen_story ? 'ProfileLayoutPicture_pic-story_seen' : 'ProfileLayoutPicture_pic-story_new') : '')
        },
        _react2.default.createElement(
            'div',
            { className: 'ProfileLayoutPicture_pic_contain wh-100 brs-50' },
            _react2.default.createElement('img', {
                className: 'ProfileLayoutPicture_img wh-100 brs-50 bg-primary object-fit-cover',
                src: picture,
                alt: ''
            })
        )
    );
};

//

//
var ComponentItem = function ComponentItem(_ref2) {
    var name = _ref2.name,
        Icon = _ref2.Icon,
        title = _ref2.title,
        info = _ref2.info,
        link_to = _ref2.link_to,
        handleAction = _ref2.handleAction,
        handleClose = _ref2.handleClose;

    return _react2.default.createElement(
        _reactRouterDom.Link,
        { className: 'color-inherit', to: link_to },
        _react2.default.createElement(_ActionsMultiListItem2.default, {
            name: name,
            Icon: Icon,
            title: title,
            info: info
            //
            , stop_propagation: false
            //
            , handleAction: handleAction,
            handleClose: handleClose
        })
    );
};

//
ProfileLayoutPicture.propTypes = {};

//
function ProfileLayoutPicture(_ref3) {
    var link_to = _ref3.link_to,
        picture = _ref3.picture,
        has_new_story = _ref3.has_new_story,
        has_seen_story = _ref3.has_seen_story,
        handleAction = _ref3.handleAction;

    //
    function handle_API_L() {
        return [[{
            name: 'view_story',
            title: 'View story',
            link_to: '/stories?i=1'
        }, {
            name: 'view_picture',
            title: 'View profile picture',
            link_to: '/posts/1'
        }]];
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'ProfileLayoutPicture pos-rel h-100per' },
        _react2.default.createElement(
            'div',
            { className: 'ProfileLayoutPicture_contain pos-abs left-0 w-100per' },
            _react2.default.createElement(
                _HasLinkOrNot2.default,
                {
                    class_link: 'ProfileLayoutPicture_link',
                    has_link: !!link_to,
                    link_to: link_to
                },
                _react2.default.createElement(
                    'div',
                    { className: 'pos-rel padding-top-100per' },
                    has_new_story ? _react2.default.createElement(_ActionsMultiList2.default, {
                        title_action: _react2.default.createElement(ProfilePicture, {
                            picture: picture,
                            has_new_story: has_new_story,
                            has_seen_story: has_seen_story
                        }),
                        y_always: 'top',
                        ComponentItem: ComponentItem
                        //
                        , handleAction: handleAction,
                        handle_API_L: handle_API_L
                    }) : _react2.default.createElement(ProfilePicture, {
                        picture: picture,
                        has_new_story: has_new_story,
                        has_seen_story: has_seen_story
                    })
                )
            )
        )
    );
}

exports.default = ProfileLayoutPicture;

/***/ }),

/***/ "./src/pages/page/_components/info/_main/FbPageInfo.js":
/*!*************************************************************!*\
  !*** ./src/pages/page/_components/info/_main/FbPageInfo.js ***!
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

var _VirtualScroll = __webpack_require__(/*! ../../../../../component/virtual_scroll/VirtualScroll */ "./src/component/virtual_scroll/VirtualScroll.js");

var _VirtualScroll2 = _interopRequireDefault(_VirtualScroll);

var _FbPageCover = __webpack_require__(/*! ../cover/FbPageCover */ "./src/pages/page/_components/info/cover/FbPageCover.js");

var _FbPageCover2 = _interopRequireDefault(_FbPageCover);

var _FbPageInfoExtra = __webpack_require__(/*! ../extra/FbPageInfoExtra */ "./src/pages/page/_components/info/extra/FbPageInfoExtra.js");

var _FbPageInfoExtra2 = _interopRequireDefault(_FbPageInfoExtra);

var _FbPageActions = __webpack_require__(/*! ../actions/FbPageActions */ "./src/pages/page/_components/info/actions/FbPageActions.js");

var _FbPageActions2 = _interopRequireDefault(_FbPageActions);

var _FbPagePicture = __webpack_require__(/*! ../picture/FbPagePicture */ "./src/pages/page/_components/info/picture/FbPagePicture.js");

var _FbPagePicture2 = _interopRequireDefault(_FbPagePicture);

var _FbPageName = __webpack_require__(/*! ../name/FbPageName */ "./src/pages/page/_components/info/name/FbPageName.js");

var _FbPageName2 = _interopRequireDefault(_FbPageName);

__webpack_require__(/*! ./FbPageInfo.scss */ "./src/pages/page/_components/info/_main/FbPageInfo.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
FbPageInfo.propTypes = {};

//

//

//
function FbPageInfo(_ref) {
    var page_id = _ref.page_id,
        name = _ref.name,
        picture = _ref.picture,
        cover = _ref.cover,
        has_new_story = _ref.has_new_story,
        has_seen_story = _ref.has_seen_story,
        info_extra_1 = _ref.info_extra_1,
        info_extra_2 = _ref.info_extra_2,
        action_main_arr = _ref.action_main_arr,
        action_arr = _ref.action_arr,
        has_liked = _ref.has_liked,
        has_followed = _ref.has_followed,
        openCoverPicture = _ref.openCoverPicture,
        handleActionPicture = _ref.handleActionPicture,
        handleAction = _ref.handleAction;

    //
    return _react2.default.createElement(
        _VirtualScroll2.default,
        null,
        _react2.default.createElement(
            'div',
            { className: 'FbPageInfo bg-primary' },
            _react2.default.createElement(
                'div',
                { className: 'FbPageInfo_cover' },
                _react2.default.createElement(_FbPageCover2.default, {
                    cover: cover,
                    openCoverPicture: openCoverPicture
                })
            ),
            _react2.default.createElement(
                'div',
                { className: 'FbPageInfo_user_action display-flex space-between fb-profile-width-contain' },
                _react2.default.createElement(
                    'div',
                    { className: 'FbPageInfo_user display-flex' },
                    _react2.default.createElement(
                        'div',
                        { className: 'flex-shrink-0' },
                        _react2.default.createElement(_FbPagePicture2.default, {
                            picture: picture,
                            has_new_story: has_new_story,
                            has_seen_story: has_seen_story,
                            handleActionPicture: handleActionPicture
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'FbPageInfo_name_extra margin-left-16px' },
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(_FbPageName2.default, { name: name })
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(_FbPageInfoExtra2.default, {
                                info_extra_1: info_extra_1,
                                info_extra_2: info_extra_2
                            })
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'FbPageInfo_actions align-self-end' },
                    _react2.default.createElement(_FbPageActions2.default, {
                        page_id: page_id,
                        action_main_arr: action_main_arr,
                        action_arr: action_arr,
                        has_liked: has_liked,
                        has_followed: has_followed,
                        handleAction: handleAction
                    })
                )
            )
        )
    );
}

exports.default = FbPageInfo;

/***/ }),

/***/ "./src/pages/page/_components/info/actions/FbPageActions.js":
/*!******************************************************************!*\
  !*** ./src/pages/page/_components/info/actions/FbPageActions.js ***!
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

var _Constant = __webpack_require__(/*! ../../../../../_constant/Constant */ "./src/_constant/Constant.js");

var _BtnPageCase = __webpack_require__(/*! ../../../../../component/button/page_actions/_case/BtnPageCase */ "./src/component/button/page_actions/_case/BtnPageCase.js");

var _BtnPageCase2 = _interopRequireDefault(_BtnPageCase);

var _ActionsPageOther = __webpack_require__(/*! ../../../../../component/actions_page/other/ActionsPageOther */ "./src/component/actions_page/other/ActionsPageOther.js");

var _ActionsPageOther2 = _interopRequireDefault(_ActionsPageOther);

__webpack_require__(/*! ./FbPageActions.scss */ "./src/pages/page/_components/info/actions/FbPageActions.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
FbPageActions.propTypes = {};

//

//

//
function FbPageActions(_ref) {
    var page_id = _ref.page_id,
        action_main_arr = _ref.action_main_arr,
        action_arr = _ref.action_arr,
        has_liked = _ref.has_liked,
        has_followed = _ref.has_followed,
        handleAction = _ref.handleAction;

    //
    return _Constant.IS_MOBILE ? _react2.default.createElement(
        'div',
        { className: 'FbPageActionsMb display-flex flex-wrap' },
        _react2.default.createElement(
            'div',
            { className: 'flex-grow-1 padding-4px' },
            _react2.default.createElement(_BtnPageCase2.default, {
                action_name: action_arr[0]
                // use_title={use_title}
                // use_icon={use_icon}
                , page_id: page_id,
                has_liked: has_liked,
                has_followed: has_followed,
                handleAction: handleAction
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'flex-grow-1 display-flex flex-wrap' },
            action_arr[1] ? _react2.default.createElement(
                'div',
                { className: 'flex-grow-1 padding-4px' },
                _react2.default.createElement(_BtnPageCase2.default, {
                    action_name: action_arr[1]
                    // use_title={use_title}
                    // use_icon={use_icon}
                    , page_id: page_id,
                    has_liked: has_liked,
                    has_followed: has_followed,
                    handleAction: handleAction
                })
            ) : null,
            _react2.default.createElement(
                'div',
                { className: 'padding-4px' },
                _react2.default.createElement(_ActionsPageOther2.default, {
                    page_id: page_id,
                    handleAction: handleAction
                })
            )
        )
    ) : _react2.default.createElement(
        'div',
        { className: 'FbPageActions' },
        _react2.default.createElement(_BtnPageCase2.default, {
            action_name: action_main_arr[0]
            // use_title={use_title}
            // use_icon={use_icon}
            , page_id: page_id,
            has_liked: has_liked,
            has_followed: has_followed,
            handleAction: handleAction
        })
    );
}

exports.default = FbPageActions;

/***/ }),

/***/ "./src/pages/page/_components/info/cover/FbPageCover.js":
/*!**************************************************************!*\
  !*** ./src/pages/page/_components/info/cover/FbPageCover.js ***!
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

var _ProfileLayoutCover = __webpack_require__(/*! ../../../../../component/profile_layout/cover/_main/ProfileLayoutCover */ "./src/component/profile_layout/cover/_main/ProfileLayoutCover.js");

var _ProfileLayoutCover2 = _interopRequireDefault(_ProfileLayoutCover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
FbPageCover.propTypes = {};

//

//
function FbPageCover(_ref) {
    var cover = _ref.cover,
        openCoverPicture = _ref.openCoverPicture;

    //
    return _react2.default.createElement(_ProfileLayoutCover2.default, {
        cover: cover,
        link_to: '/posts/1',
        openCoverPicture: openCoverPicture
    });
}

exports.default = FbPageCover;

/***/ }),

/***/ "./src/pages/page/_components/info/extra/FbPageInfoExtra.js":
/*!******************************************************************!*\
  !*** ./src/pages/page/_components/info/extra/FbPageInfoExtra.js ***!
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

var _HasLinkOrNot = __webpack_require__(/*! ../../../../../component/link/has_link_or_not/HasLinkOrNot */ "./src/component/link/has_link_or_not/HasLinkOrNot.js");

var _HasLinkOrNot2 = _interopRequireDefault(_HasLinkOrNot);

__webpack_require__(/*! ./FbPageInfoExtra.scss */ "./src/pages/page/_components/info/extra/FbPageInfoExtra.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
function FbPageInfoExtraItem(_ref) {
    var title = _ref.title,
        has_link = _ref.has_link,
        link_to = _ref.link_to;

    //
    return _react2.default.createElement(
        _HasLinkOrNot2.default,
        {
            class_link: '' + (has_link ? 'font-500' : ''),
            has_link: has_link,
            link_to: link_to
        },
        title
    );
}

//

// 
FbPageInfoExtra.propTypes = {};

//
function FbPageInfoExtra(_ref2) {
    var info_extra_1 = _ref2.info_extra_1,
        info_extra_2 = _ref2.info_extra_2;

    //
    return _react2.default.createElement(
        'div',
        { className: 'FbPageInfoExtra text-secondary font-17px' },
        _react2.default.createElement(FbPageInfoExtraItem, info_extra_1),
        ' · ',
        _react2.default.createElement(FbPageInfoExtraItem, info_extra_2)
    );
}

exports.default = FbPageInfoExtra;

/***/ }),

/***/ "./src/pages/page/_components/info/name/FbPageName.js":
/*!************************************************************!*\
  !*** ./src/pages/page/_components/info/name/FbPageName.js ***!
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

var _ProfileLayoutName = __webpack_require__(/*! ../../../../../component/profile_layout/name/ProfileLayoutName */ "./src/component/profile_layout/name/ProfileLayoutName.js");

var _ProfileLayoutName2 = _interopRequireDefault(_ProfileLayoutName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
FbPageName.propTypes = {};

//

//
function FbPageName(_ref) {
    var name = _ref.name;

    //
    return _react2.default.createElement(_ProfileLayoutName2.default, { name: name });
}

exports.default = FbPageName;

/***/ }),

/***/ "./src/pages/page/_components/info/picture/FbPagePicture.js":
/*!******************************************************************!*\
  !*** ./src/pages/page/_components/info/picture/FbPagePicture.js ***!
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

var _ProfileLayoutPicture = __webpack_require__(/*! ../../../../../component/profile_layout/picture/ProfileLayoutPicture */ "./src/component/profile_layout/picture/ProfileLayoutPicture.js");

var _ProfileLayoutPicture2 = _interopRequireDefault(_ProfileLayoutPicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
FbPagePicture.propTypes = {};

//

//
function FbPagePicture(_ref) {
    var picture = _ref.picture,
        has_new_story = _ref.has_new_story,
        has_seen_story = _ref.has_seen_story,
        handleActionPicture = _ref.handleActionPicture;

    //
    return _react2.default.createElement(_ProfileLayoutPicture2.default, {
        link_to: has_new_story ? '' : '/posts/1',
        picture: picture,
        has_new_story: has_new_story,
        has_seen_story: has_seen_story,
        handleAction: handleActionPicture
    });
}

exports.default = FbPagePicture;

/***/ }),

/***/ "./src/pages/page/_components/nav/_main/FbPageNav.js":
/*!***********************************************************!*\
  !*** ./src/pages/page/_components/nav/_main/FbPageNav.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Constant = __webpack_require__(/*! ../../../../../_constant/Constant */ "./src/_constant/Constant.js");

var _useStickyOver = __webpack_require__(/*! ../../../../../_hooks/useStickyOver */ "./src/_hooks/useStickyOver.js");

var _BtnPageCase = __webpack_require__(/*! ../../../../../component/button/page_actions/_case/BtnPageCase */ "./src/component/button/page_actions/_case/BtnPageCase.js");

var _BtnPageCase2 = _interopRequireDefault(_BtnPageCase);

var _ActionsPageOther = __webpack_require__(/*! ../../../../../component/actions_page/other/ActionsPageOther */ "./src/component/actions_page/other/ActionsPageOther.js");

var _ActionsPageOther2 = _interopRequireDefault(_ActionsPageOther);

var _ProfileLayoutUserSticky = __webpack_require__(/*! ../../../../../component/profile_layout/user_sticky/ProfileLayoutUserSticky */ "./src/component/profile_layout/user_sticky/ProfileLayoutUserSticky.js");

var _ProfileLayoutUserSticky2 = _interopRequireDefault(_ProfileLayoutUserSticky);

var _ProfileLayoutNav = __webpack_require__(/*! ../../../../../component/profile_layout/nav/_layout/ProfileLayoutNav */ "./src/component/profile_layout/nav/_layout/ProfileLayoutNav.js");

var _ProfileLayoutNav2 = _interopRequireDefault(_ProfileLayoutNav);

var _FbPageNavMore = __webpack_require__(/*! ../more/FbPageNavMore */ "./src/pages/page/_components/nav/more/FbPageNavMore.js");

var _FbPageNavMore2 = _interopRequireDefault(_FbPageNavMore);

var _FbPageNavItem = __webpack_require__(/*! ../item/FbPageNavItem */ "./src/pages/page/_components/nav/item/FbPageNavItem.js");

var _FbPageNavItem2 = _interopRequireDefault(_FbPageNavItem);

__webpack_require__(/*! ./FbPageNav.scss */ "./src/pages/page/_components/nav/_main/FbPageNav.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
//

//

//

//

//


//
var MORE_LINK_ARR = function MORE_LINK_ARR(_ref) {
    var _ref$page_id = _ref.page_id,
        page_id = _ref$page_id === undefined ? 0 : _ref$page_id;
    return [{
        link_to: '/page/' + page_id + '/events',
        title: 'Events'
    }, {
        link_to: '/page/' + page_id + '/community',
        title: 'Community'
    }, {
        link_to: '/page/' + page_id + '/group',
        title: 'Group'
    }];
};

//
var NAV_LINK_ARR = function NAV_LINK_ARR(_ref2) {
    var _ref2$page_id = _ref2.page_id,
        page_id = _ref2$page_id === undefined ? 0 : _ref2$page_id;
    return [{
        link_to: '/page/' + page_id + '/home',
        title: 'Home'
    }, {
        link_to: '/page/' + page_id + '/about',
        title: 'About'
    }, {
        link_to: '/page/' + page_id + '/videos',
        title: 'Videos'
    }, {
        link_to: '/page/' + page_id + '/photos',
        title: 'Photos'
    }].concat(_toConsumableArray(_Constant.IS_MOBILE ? MORE_LINK_ARR({ page_id: page_id }) : []));
};

//
function FbPageNav(_ref3) {
    var page_id = _ref3.page_id,
        name = _ref3.name,
        picture = _ref3.picture,
        action_main_arr = _ref3.action_main_arr,
        action_arr = _ref3.action_arr,
        has_liked = _ref3.has_liked,
        has_followed = _ref3.has_followed,
        handleAction = _ref3.handleAction;

    //
    var _useState = (0, _react.useState)({
        nav_arr: NAV_LINK_ARR({ page_id: page_id }),
        nav_more_arr: _Constant.IS_MOBILE ? [] : MORE_LINK_ARR({ page_id: page_id })
    }),
        _useState2 = _slicedToArray(_useState, 2),
        state_obj = _useState2[0],
        setStateObj = _useState2[1];

    //


    var scroll_over_obj = (0, _useStickyOver.useStickyOver)({});

    //
    return _react2.default.createElement(_ProfileLayoutNav2.default, {
        has_scroll_over: true,
        scroll_over_obj: scroll_over_obj
        //
        , left_main_elm: _react2.default.createElement(
            'ul',
            { className: 'FbPageNav_list flex-grow-1 display-flex list-none h-100per padding-top-3px' },
            state_obj.nav_arr.map(function (item, ix) {
                return _react2.default.createElement(
                    'li',
                    { key: ix, className: 'FbPageNav_item' },
                    _react2.default.createElement(_FbPageNavItem2.default, {
                        link_to: item.link_to,
                        title: item.title
                    })
                );
            }),
            _Constant.IS_MOBILE ? null : _react2.default.createElement(
                'li',
                { className: 'FbPageNav_item' },
                _react2.default.createElement(_FbPageNavMore2.default, {
                    more_link_arr: state_obj.nav_more_arr
                })
            )
        ),
        left_sticky_elm: _react2.default.createElement(
            'div',
            { className: 'display-flex h-100per padding-y-2px' },
            _react2.default.createElement(_ProfileLayoutUserSticky2.default, {
                link_to: '/page/' + page_id + '/home',
                picture: picture,
                name: name
            })
        ),
        right_elm: _Constant.IS_MOBILE ? null : _react2.default.createElement(
            'div',
            { className: 'display-flex align-items-center h-100per' },
            [].concat(_toConsumableArray(scroll_over_obj.scroll_over ? action_main_arr : []), _toConsumableArray(action_arr)).map(function (item, ix) {
                return _react2.default.createElement(
                    'div',
                    { key: ix, className: 'margin-right-8px' },
                    _react2.default.createElement(_BtnPageCase2.default, {
                        action_name: item
                        // use_title={use_title}
                        // use_icon={use_icon}
                        , page_id: page_id,
                        has_liked: has_liked,
                        has_followed: has_followed,
                        handleAction: handleAction
                    })
                );
            }),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_ActionsPageOther2.default, {
                    page_id: page_id,
                    handleAction: handleAction
                })
            )
        )
    });
}

exports.default = FbPageNav;

/***/ }),

/***/ "./src/pages/page/_components/nav/item/FbPageNavItem.js":
/*!**************************************************************!*\
  !*** ./src/pages/page/_components/nav/item/FbPageNavItem.js ***!
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

var _ProfileLayoutNavItem = __webpack_require__(/*! ../../../../../component/profile_layout/nav/item/ProfileLayoutNavItem */ "./src/component/profile_layout/nav/item/ProfileLayoutNavItem.js");

var _ProfileLayoutNavItem2 = _interopRequireDefault(_ProfileLayoutNavItem);

__webpack_require__(/*! ./FbPageNavItem.scss */ "./src/pages/page/_components/nav/item/FbPageNavItem.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
FbPageNavItem.propTypes = {};

//

//
function FbPageNavItem(_ref) {
    var link_to = _ref.link_to,
        title = _ref.title;

    //
    return _react2.default.createElement(_ProfileLayoutNavItem2.default, { title: title, link_to: link_to });
}

exports.default = FbPageNavItem;

/***/ }),

/***/ "./src/pages/page/_components/nav/more/FbPageNavMore.js":
/*!**************************************************************!*\
  !*** ./src/pages/page/_components/nav/more/FbPageNavMore.js ***!
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

var _ProfileLayoutNavMore = __webpack_require__(/*! ../../../../../component/profile_layout/nav/more/_main/ProfileLayoutNavMore */ "./src/component/profile_layout/nav/more/_main/ProfileLayoutNavMore.js");

var _ProfileLayoutNavMore2 = _interopRequireDefault(_ProfileLayoutNavMore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
FbPageNavMore.propTypes = {};

//

//
function FbPageNavMore(_ref) {
    var color = _ref.color,
        bg_btn = _ref.bg_btn,
        more_link_arr = _ref.more_link_arr;

    // 
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

exports.default = FbPageNavMore;

/***/ }),

/***/ "./src/pages/page/_main/FbPage.js":
/*!****************************************!*\
  !*** ./src/pages/page/_main/FbPage.js ***!
  \****************************************/
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _page = __webpack_require__(/*! ../../../_initial/page/page */ "./src/_initial/page/page.js");

var _page2 = __webpack_require__(/*! ../../../_handle_api/fb_page/page */ "./src/_handle_api/fb_page/page.js");

var _FbPageInfo = __webpack_require__(/*! ../_components/info/_main/FbPageInfo */ "./src/pages/page/_components/info/_main/FbPageInfo.js");

var _FbPageInfo2 = _interopRequireDefault(_FbPageInfo);

var _FbPageNav = __webpack_require__(/*! ../_components/nav/_main/FbPageNav */ "./src/pages/page/_components/nav/_main/FbPageNav.js");

var _FbPageNav2 = _interopRequireDefault(_FbPageNav);

var _main = __webpack_require__(/*! ../_route/_main */ "./src/pages/page/_route/_main.js");

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
FbPage.propTypes = {};

//
function FbPage(props) {

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
                            return (0, _page2.handle_API_FbPage_R)({ page_id: id });

                        case 2:
                            data = _context.sent;


                            setStateObj(function (state_obj) {
                                return _extends({}, state_obj, {
                                    page_obj: data,
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
        page_obj: (0, _page.initial_fb_page)(),
        has_fetch: false
    }),
        _useState2 = _slicedToArray(_useState, 2),
        state_obj = _useState2[0],
        setStateObj = _useState2[1];

    var page_obj = state_obj.page_obj,
        has_fetch = state_obj.has_fetch;
    var name = page_obj.name,
        picture = page_obj.picture,
        cover = page_obj.cover,
        has_new_story = page_obj.has_new_story,
        has_seen_story = page_obj.has_seen_story,
        info_extra_1 = page_obj.info_extra_1,
        info_extra_2 = page_obj.info_extra_2,
        action_main_arr = page_obj.action_main_arr,
        action_arr = page_obj.action_arr,
        has_liked = page_obj.has_liked,
        has_followed = page_obj.has_followed;

    //

    (0, _react.useEffect)(function () {
        getData_API();
    }, [id]);function openCoverPicture() {}

    //
    function handleActionPicture() {}

    //
    function handleAction() {}

    // -----

    if (!has_fetch) {
        return null;
    }

    //
    return _react2.default.createElement(
        'div',
        { key: id, className: 'FbPage' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_FbPageInfo2.default, {
                page_id: id,
                name: name,
                picture: picture,
                cover: cover,
                has_new_story: has_new_story,
                has_seen_story: has_seen_story
                // 
                , info_extra_1: info_extra_1,
                info_extra_2: info_extra_2
                //
                , action_main_arr: action_main_arr,
                action_arr: action_arr,
                has_liked: has_liked,
                has_followed: has_followed
                //
                , openCoverPicture: openCoverPicture,
                handleActionPicture: handleActionPicture,
                handleAction: handleAction
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'fb-profile-nav' },
            _react2.default.createElement(
                'div',
                { className: 'fb-profile-width-contain' },
                _react2.default.createElement(_FbPageNav2.default, {
                    page_id: id,
                    name: name,
                    picture: picture
                    //
                    , action_main_arr: action_main_arr,
                    action_arr: action_arr
                    // 
                    , has_liked: has_liked,
                    has_followed: has_followed
                    //
                    , handleAction: handleAction
                })
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'padding-y-16px' },
            id > 0 ? _react2.default.createElement(
                _react.Suspense,
                { fallback: null },
                _react2.default.createElement(
                    _reactRouterDom.Switch,
                    null,
                    _main2.default.map(function (item, ix) {
                        return _react2.default.createElement(_reactRouterDom.Route, {
                            key: ix
                            // component={item.component}
                            , path: item.path,
                            render: function render(props) {
                                return _react2.default.createElement(item.component, _extends({}, props, {
                                    page_id: id
                                }));
                            }
                        });
                    }),
                    _react2.default.createElement(_reactRouterDom.Redirect, { to: '/page/' + id + '/home' })
                )
            ) : null
        )
    );
}

exports.default = FbPage;

/***/ }),

/***/ "./src/pages/page/_route/_main.js":
/*!****************************************!*\
  !*** ./src/pages/page/_route/_main.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var FbPageHome = _react2.default.lazy(function () {
    return Promise.all(/*! import() */[__webpack_require__.e("src_component__screen_type_permission__main_ScreenPermission_js"), __webpack_require__.e("src_component_posts_common_mouse_enter_leave_info__main_MouseEnterLeaveInfo_js"), __webpack_require__.e("src_component_action_preview_page__main_ActionPreviewPage_js"), __webpack_require__.e("src__params_post_PostParams_js-src_component__screen_type_like__main_ScreenLike_js-src_compon-619f7a"), __webpack_require__.e("src__some_function_getClientXY_js-src_component_action_preview_group__main_ActionPreviewGroup_js"), __webpack_require__.e("src__icons_svg_icon_private_IconPrivate_js-src_component_actions_group_other_ActionsGroupOthe-2fddc5"), __webpack_require__.e("src__handle_api_post_HandleAPIPost_js-src__handle_api_post_cu_user_tag_js-src__some_function_-94dbb5"), __webpack_require__.e("src_component_posts__zoom_post_zoom_vid_pic__main_ZoomVidPicItem_js"), __webpack_require__.e("src_component_posts__posts__main_Posts_js"), __webpack_require__.e("src__initial_post_InitialPosts_js-src_component_posts_common_add_new_post__main_AddNewPost_js"), __webpack_require__.e("src__default_fb_page_page_about_js-src__initial_page_page_home_preview_js-src_pages_page_page-750924"), __webpack_require__.e("src__icons_svg_icon_setting_IconSetting_js-src_component_profile_layout_home_preview_pics_PrL-0bbec1"), __webpack_require__.e("src_pages_page_pages_home__main_FbPageHome_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/home/_main/FbPageHome */ "./src/pages/page/pages/home/_main/FbPageHome.js"));
});
var FbPageAbout = _react2.default.lazy(function () {
    return Promise.all(/*! import() */[__webpack_require__.e("src__default_fb_page_page_about_js-src__initial_page_page_home_preview_js-src_pages_page_page-750924"), __webpack_require__.e("src__icons_svg_icon_public_IconPublic_js-src_pages_page_pages_about__main_FbPageAbout_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/about/_main/FbPageAbout */ "./src/pages/page/pages/about/_main/FbPageAbout.js"));
});

var WorkingOnIt = _react2.default.lazy(function () {
    return __webpack_require__.e(/*! import() */ "src_component_working_on_it_WorkingOnIt_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../../component/working_on_it/WorkingOnIt */ "./src/component/working_on_it/WorkingOnIt.js"));
});

//
var FbPageRoutes = [{
    path: '/page/:id/home',
    component: FbPageHome
}, {
    path: '/page/:id/about',
    component: FbPageAbout
}, {
    path: '/page/:id/videos',
    component: WorkingOnIt
}, {
    path: '/page/:id/photos',
    component: WorkingOnIt
}, {
    path: '/page/:id/events',
    component: WorkingOnIt
}, {
    path: '/page/:id/community',
    component: WorkingOnIt
}, {
    path: '/page/:id/group',
    component: WorkingOnIt
}];

exports.default = FbPageRoutes;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/profile_layout/picture/ProfileLayoutPicture.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/profile_layout/picture/ProfileLayoutPicture.scss ***!
  \*********************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".ProfileLayoutPicture {\n  width: 168px;\n}\n\n.ProfileLayoutPicture_contain {\n  bottom: 5px;\n}\n\n.ProfileLayoutPicture_pic-story {\n  border: 4px solid white;\n}\n\n.ProfileLayoutPicture_pic-story_new .ProfileLayoutPicture_pic_contain {\n  border: 4px solid var(--blue);\n}\n\n.ProfileLayoutPicture_pic-story_seen .ProfileLayoutPicture_pic_contain {\n  border: 4px solid var(--md-bg-ccc);\n}\n\n.ProfileLayoutPicture_img {\n  border: 4px solid var(--white);\n}\n\n.device-mobile .ProfileLayoutPicture {\n  width: 100%;\n  height: 75px;\n}\n.device-mobile .ProfileLayoutPicture_contain {\n  transform: translateX(-50%);\n  left: 50%;\n  width: 140px;\n}", "",{"version":3,"sources":["webpack://./src/component/profile_layout/picture/ProfileLayoutPicture.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;AACJ;;AAEA;EACI,WAAA;AACJ;;AAEA;EACI,uBAAA;AACJ;;AAEI;EACI,6BAAA;AACR;;AAGI;EACI,kCAAA;AAAR;;AAIA;EACI,8BAAA;AADJ;;AAOI;EACI,WAAA;EACA,YAAA;AAJR;AAOI;EACI,2BAAA;EACA,SAAA;EACA,YAAA;AALR","sourcesContent":[".ProfileLayoutPicture {\r\n    width: 168px;\r\n}\r\n\r\n.ProfileLayoutPicture_contain {\r\n    bottom: 5px;\r\n}\r\n\r\n.ProfileLayoutPicture_pic-story {\r\n    border: 4px solid white;\r\n}\r\n.ProfileLayoutPicture_pic-story_new {\r\n    .ProfileLayoutPicture_pic_contain {\r\n        border: 4px solid var(--blue);\r\n    }\r\n}\r\n.ProfileLayoutPicture_pic-story_seen {\r\n    .ProfileLayoutPicture_pic_contain {\r\n        border: 4px solid var(--md-bg-ccc);\r\n    }\r\n}\r\n// .\r\n.ProfileLayoutPicture_img {\r\n    border: 4px solid var(--white);\r\n}\r\n\r\n// --------\r\n\r\n.device-mobile {\r\n    .ProfileLayoutPicture {\r\n        width: 100%;\r\n        height: 75px;\r\n    }\r\n\r\n    .ProfileLayoutPicture_contain {\r\n        transform: translateX(-50%);\r\n        left: 50%;\r\n        width: 140px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/_components/info/_main/FbPageInfo.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/_components/info/_main/FbPageInfo.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".FbPageInfo_name_extra {\n  margin: 32px 0 16px 16px;\n}\n\n.FbPageInfo_actions {\n  margin: 32px 0 16px 32px;\n}\n\n.device-mobile .FbPageInfo_user_action {\n  display: block;\n}\n.device-mobile .FbPageInfo_user {\n  display: block;\n}\n.device-mobile .FbPageInfo_name_extra {\n  margin: 10px 0;\n}\n.device-mobile .FbPageInfo_actions {\n  margin: 0;\n  padding: 10px 5px;\n}", "",{"version":3,"sources":["webpack://./src/pages/page/_components/info/_main/FbPageInfo.scss"],"names":[],"mappings":"AAAA;EACI,wBAAA;AACJ;;AAEA;EACI,wBAAA;AACJ;;AAKI;EACI,cAAA;AAFR;AAKI;EACI,cAAA;AAHR;AAMI;EACI,cAAA;AAJR;AAOI;EACI,SAAA;EACA,iBAAA;AALR","sourcesContent":[".FbPageInfo_name_extra {\r\n    margin: 32px 0 16px 16px;\r\n}\r\n\r\n.FbPageInfo_actions {\r\n    margin: 32px 0 16px 32px;\r\n}\r\n\r\n// ----\r\n\r\n.device-mobile {\r\n    .FbPageInfo_user_action {\r\n        display: block;\r\n    }\r\n    // .\r\n    .FbPageInfo_user {\r\n        display: block;\r\n    }\r\n    // ..\r\n    .FbPageInfo_name_extra {\r\n        margin: 10px 0;\r\n    }\r\n    // .\r\n    .FbPageInfo_actions {\r\n        margin: 0;\r\n        padding: 10px 5px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/_components/info/actions/FbPageActions.scss":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/_components/info/actions/FbPageActions.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".FbPageActions {\n  width: 300px;\n}\n.FbPageActions .BtnActions {\n  width: 100%;\n  height: 40px;\n  background-color: var(--blue);\n  color: var(--white);\n}\n\n.FbPageActionsMb .BtnActions {\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/pages/page/_components/info/actions/FbPageActions.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;AACJ;AACI;EACI,WAAA;EACA,YAAA;EACA,6BAAA;EACA,mBAAA;AACR;;AAII;EACI,WAAA;AADR","sourcesContent":[".FbPageActions {\r\n    width: 300px;\r\n\r\n    .BtnActions {\r\n        width: 100%;\r\n        height: 40px;\r\n        background-color: var(--blue);\r\n        color: var(--white);\r\n    }\r\n}\r\n\r\n.FbPageActionsMb {\r\n    .BtnActions {\r\n        width: 100%;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/_components/info/extra/FbPageInfoExtra.scss":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/_components/info/extra/FbPageInfoExtra.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".device-mobile .FbPageInfoExtra {\n  padding-top: 6px;\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/pages/page/_components/info/extra/FbPageInfoExtra.scss"],"names":[],"mappings":"AAGI;EACI,gBAAA;EACA,kBAAA;AAFR","sourcesContent":["// -----\r\n\r\n.device-mobile{\r\n    .FbPageInfoExtra{\r\n        padding-top: 6px;\r\n        text-align: center;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/_components/nav/_main/FbPageNav.scss":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/_components/nav/_main/FbPageNav.scss ***!
  \**********************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".FbPageNav_item {\n  height: 100%;\n}", "",{"version":3,"sources":["webpack://./src/pages/page/_components/nav/_main/FbPageNav.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;AACJ","sourcesContent":[".FbPageNav_item{\r\n    height: 100%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/_components/nav/item/FbPageNavItem.scss":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/_components/nav/item/FbPageNavItem.scss ***!
  \*************************************************************************************************************************************************************************/
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

/***/ "./src/component/profile_layout/picture/ProfileLayoutPicture.scss":
/*!************************************************************************!*\
  !*** ./src/component/profile_layout/picture/ProfileLayoutPicture.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProfileLayoutPicture_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./ProfileLayoutPicture.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/profile_layout/picture/ProfileLayoutPicture.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProfileLayoutPicture_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProfileLayoutPicture_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/page/_components/info/_main/FbPageInfo.scss":
/*!***************************************************************!*\
  !*** ./src/pages/page/_components/info/_main/FbPageInfo.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageInfo_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./FbPageInfo.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/_components/info/_main/FbPageInfo.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageInfo_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageInfo_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/page/_components/info/actions/FbPageActions.scss":
/*!********************************************************************!*\
  !*** ./src/pages/page/_components/info/actions/FbPageActions.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageActions_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./FbPageActions.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/_components/info/actions/FbPageActions.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageActions_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageActions_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/page/_components/info/extra/FbPageInfoExtra.scss":
/*!********************************************************************!*\
  !*** ./src/pages/page/_components/info/extra/FbPageInfoExtra.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageInfoExtra_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./FbPageInfoExtra.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/_components/info/extra/FbPageInfoExtra.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageInfoExtra_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageInfoExtra_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/page/_components/nav/_main/FbPageNav.scss":
/*!*************************************************************!*\
  !*** ./src/pages/page/_components/nav/_main/FbPageNav.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageNav_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./FbPageNav.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/_components/nav/_main/FbPageNav.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageNav_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageNav_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/page/_components/nav/item/FbPageNavItem.scss":
/*!****************************************************************!*\
  !*** ./src/pages/page/_components/nav/item/FbPageNavItem.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageNavItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./FbPageNavItem.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/_components/nav/item/FbPageNavItem.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageNavItem_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageNavItem_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_page__main_FbPage_js.js.map