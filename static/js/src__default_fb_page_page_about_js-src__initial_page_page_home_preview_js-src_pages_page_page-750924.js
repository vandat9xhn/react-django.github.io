(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src__default_fb_page_page_about_js-src__initial_page_page_home_preview_js-src_pages_page_page-750924"],{

/***/ "./src/_default/fb_page/page_about.js":
/*!********************************************!*\
  !*** ./src/_default/fb_page/page_about.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default_fb_page_about_obj = undefined;

var _default_bool = __webpack_require__(/*! ../_common/default_bool */ "./src/_default/_common/default_bool.js");

var _default_content = __webpack_require__(/*! ../_common/default_content */ "./src/_default/_common/default_content.js");

var _default_id = __webpack_require__(/*! ../_common/default_id */ "./src/_default/_common/default_id.js");

//
var default_fb_page_about_obj = exports.default_fb_page_about_obj = function default_fb_page_about_obj() {
    var info_has_link = (0, _default_bool.getRandomBool)();

    //
    return {
        info_obj: {
            content: (0, _default_content.getRandomContent)().slice(0, 100),
            link_to: info_has_link ? 'https://fbshopeetgdd.web.app/' : '',
            link_title: info_has_link ? 'fbshopeetgdd.web.app/' : ''
        },
        like_obj: {
            count: (0, _default_id.getRandomNumber)(1, 20) * 1000,
            friend_arr: [],
            friend_count: 0
        },
        follow_obj: { count: (0, _default_id.getRandomNumber)(10, 30) * 1000 },
        site_obj: {
            link_to: 'https://fbshopeetgdd.web.app/',
            link_title: 'fbshopeetgdd.web.app/'
        },
        phone_obj: { num_phone: '0123456789' }
    };
};

/***/ }),

/***/ "./src/_initial/page/page_home_preview.js":
/*!************************************************!*\
  !*** ./src/_initial/page/page_home_preview.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var initial_fb_page_hone_about = exports.initial_fb_page_hone_about = function initial_fb_page_hone_about() {
    //
    return {
        info_obj: {
            content: '',
            link_to: '',
            link_title: ''
        },
        like_obj: {
            count: 0,
            friend_arr: [],
            friend_count: 0
        },
        follow_obj: { count: 0 },
        site_obj: {
            link_to: '',
            link_title: ''
        },
        phone_obj: { num_phone: '' }

    };
};

//
var initial_fb_page_home_preview = exports.initial_fb_page_home_preview = function initial_fb_page_home_preview() {
    //
    return _extends({}, initial_fb_page_hone_about(), {

        pic_arr: [''],
        video_obj: {
            id: 0,
            content: '',
            thumbnail: '',
            video_time: '',

            view_count: 0,
            created_time_str: '',

            reacted_ix_arr: [0],
            reacted_count: 0,
            user_reacted_ix: -1,
            reacted_count_arr: [{ reacted_ix: 0, count: 0 }]
        }
    });
};

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

/***/ "./src/component/profile_layout/about_preview_item/ProfileLayoutAboutPreviewItem.js":
/*!******************************************************************************************!*\
  !*** ./src/component/profile_layout/about_preview_item/ProfileLayoutAboutPreviewItem.js ***!
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

__webpack_require__(/*! ./ProfileLayoutAboutPreviewItem.scss */ "./src/component/profile_layout/about_preview_item/ProfileLayoutAboutPreviewItem.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 
ProfileLayoutAboutPreviewItem.propTypes = {};

// 

// 
function ProfileLayoutAboutPreviewItem(_ref) {
    var Icon = _ref.Icon,
        children = _ref.children;

    // 
    return _react2.default.createElement(
        'div',
        { className: 'ProfileLayoutAboutPreviewItem' },
        _react2.default.createElement(
            'div',
            { className: 'display-flex align-items-start' },
            _react2.default.createElement(
                'div',
                { className: 'ProfileLayoutAboutPreviewItem_icon padding-6px' },
                Icon
            ),
            _react2.default.createElement(
                'div',
                { className: 'padding-6px' },
                children
            )
        )
    );
}

exports.default = ProfileLayoutAboutPreviewItem;

/***/ }),

/***/ "./src/pages/page/pages/home/left/about/chat/FPHomeAboutChat.js":
/*!**********************************************************************!*\
  !*** ./src/pages/page/pages/home/left/about/chat/FPHomeAboutChat.js ***!
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

var _ContextAPI = __webpack_require__(/*! ../../../../../../../_context/ContextAPI */ "./src/_context/ContextAPI.js");

var _IconsMenu = __webpack_require__(/*! ../../../../../../../_icons_svg/icons_menu/IconsMenu */ "./src/_icons_svg/icons_menu/IconsMenu.js");

var _IconsMenu2 = _interopRequireDefault(_IconsMenu);

var _ProfileLayoutAboutPreviewItem = __webpack_require__(/*! ../../../../../../../component/profile_layout/about_preview_item/ProfileLayoutAboutPreviewItem */ "./src/component/profile_layout/about_preview_item/ProfileLayoutAboutPreviewItem.js");

var _ProfileLayoutAboutPreviewItem2 = _interopRequireDefault(_ProfileLayoutAboutPreviewItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
FPHomeAboutChat.propTypes = {};

//

//

//
function FPHomeAboutChat(_ref) {
    var page_id = _ref.page_id;

    //
    var _useContext = (0, _react.useContext)(_ContextAPI.context_api),
        openRoomChat = _useContext.openRoomChat;

    // -----

    //


    function openChat() {
        openRoomChat(page_id);
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'FPHomeAboutChat' },
        _react2.default.createElement(
            _ProfileLayoutAboutPreviewItem2.default,
            { Icon: _react2.default.createElement(_IconsMenu2.default, { x: 200, y: 200 }) },
            _react2.default.createElement(
                'div',
                {
                    className: 'text-blue cursor-pointer hv-underline',
                    onClick: openChat
                },
                'Send message'
            )
        )
    );
}

exports.default = FPHomeAboutChat;

/***/ }),

/***/ "./src/pages/page/pages/home/left/about/follow/FPHomeAboutFollow.js":
/*!**************************************************************************!*\
  !*** ./src/pages/page/pages/home/left/about/follow/FPHomeAboutFollow.js ***!
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

var _UnitNumber = __webpack_require__(/*! ../../../../../../../_some_function/UnitNumber */ "./src/_some_function/UnitNumber.js");

var _IconFollow = __webpack_require__(/*! ../../../../../../../_icons_svg/follow/IconFollow */ "./src/_icons_svg/follow/IconFollow.js");

var _IconFollow2 = _interopRequireDefault(_IconFollow);

var _ProfileLayoutAboutPreviewItem = __webpack_require__(/*! ../../../../../../../component/profile_layout/about_preview_item/ProfileLayoutAboutPreviewItem */ "./src/component/profile_layout/about_preview_item/ProfileLayoutAboutPreviewItem.js");

var _ProfileLayoutAboutPreviewItem2 = _interopRequireDefault(_ProfileLayoutAboutPreviewItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
FPHomeAboutFollow.propTypes = {};

//

//

//
function FPHomeAboutFollow(_ref) {
    var follow_obj = _ref.follow_obj;

    //
    var count = follow_obj.count;

    //

    return _react2.default.createElement(
        'div',
        { className: 'FPHomeAboutFollow' },
        _react2.default.createElement(
            _ProfileLayoutAboutPreviewItem2.default,
            { Icon: _react2.default.createElement(_IconFollow2.default, null) },
            _react2.default.createElement(
                'div',
                null,
                (0, _UnitNumber.UnitNumber)(count),
                ' people follow this'
            )
        )
    );
}

exports.default = FPHomeAboutFollow;

/***/ }),

/***/ "./src/pages/page/pages/home/left/about/info/FPHomeAboutInfo.js":
/*!**********************************************************************!*\
  !*** ./src/pages/page/pages/home/left/about/info/FPHomeAboutInfo.js ***!
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

var _IconsAction = __webpack_require__(/*! ../../../../../../../_icons_svg/icons_action/IconsAction */ "./src/_icons_svg/icons_action/IconsAction.js");

var _IconsAction2 = _interopRequireDefault(_IconsAction);

var _ProfileLayoutAboutPreviewItem = __webpack_require__(/*! ../../../../../../../component/profile_layout/about_preview_item/ProfileLayoutAboutPreviewItem */ "./src/component/profile_layout/about_preview_item/ProfileLayoutAboutPreviewItem.js");

var _ProfileLayoutAboutPreviewItem2 = _interopRequireDefault(_ProfileLayoutAboutPreviewItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
FPHomeAboutInfo.propTypes = {};

//

//
function FPHomeAboutInfo(_ref) {
    var info_obj = _ref.info_obj;

    //
    var content = info_obj.content,
        link_to = info_obj.link_to,
        link_title = info_obj.link_title;

    //

    return _react2.default.createElement(
        'div',
        { className: 'FPHomeAboutInfo' },
        _react2.default.createElement(
            _ProfileLayoutAboutPreviewItem2.default,
            { Icon: _react2.default.createElement(_IconsAction2.default, { x: 600 }) },
            _react2.default.createElement(
                'div',
                null,
                content
            ),
            link_to ? _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'a',
                    {
                        className: 'hv-underline',
                        href: link_to,
                        target: '_blank'
                    },
                    link_title
                )
            ) : null
        )
    );
}

exports.default = FPHomeAboutInfo;

/***/ }),

/***/ "./src/pages/page/pages/home/left/about/like/FPHomeAboutLike.js":
/*!**********************************************************************!*\
  !*** ./src/pages/page/pages/home/left/about/like/FPHomeAboutLike.js ***!
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

var _UnitNumber = __webpack_require__(/*! ../../../../../../../_some_function/UnitNumber */ "./src/_some_function/UnitNumber.js");

var _IconLike = __webpack_require__(/*! ../../../../../../../_icons_svg/icons_like/icon_like/IconLike */ "./src/_icons_svg/icons_like/icon_like/IconLike.js");

var _IconLike2 = _interopRequireDefault(_IconLike);

var _ProfileLayoutAboutPreviewItem = __webpack_require__(/*! ../../../../../../../component/profile_layout/about_preview_item/ProfileLayoutAboutPreviewItem */ "./src/component/profile_layout/about_preview_item/ProfileLayoutAboutPreviewItem.js");

var _ProfileLayoutAboutPreviewItem2 = _interopRequireDefault(_ProfileLayoutAboutPreviewItem);

var _OverlapPics = __webpack_require__(/*! ../../../../../../../component/overlap_pics/_main/OverlapPics */ "./src/component/overlap_pics/_main/OverlapPics.js");

var _OverlapPics2 = _interopRequireDefault(_OverlapPics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
FPHomeAboutLike.propTypes = {};

//

//
function FPHomeAboutLike(_ref) {
    var like_obj = _ref.like_obj;

    //
    var count = like_obj.count,
        friend_arr = like_obj.friend_arr,
        friend_count = like_obj.friend_count;

    //

    return _react2.default.createElement(
        'div',
        { className: 'FPHomeAboutLike' },
        _react2.default.createElement(
            _ProfileLayoutAboutPreviewItem2.default,
            { Icon: _react2.default.createElement(_IconLike2.default, null) },
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'span',
                        null,
                        (0, _UnitNumber.UnitNumber)(count),
                        ' people like this'
                    ),
                    friend_count == 0 ? null : _react2.default.createElement(
                        'span',
                        null,
                        ', including ',
                        friend_count,
                        ' of your friend',
                        friend_count >= 2 ? 's' : ''
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_OverlapPics2.default, { pic_arr: friend_arr })
                )
            )
        )
    );
}

exports.default = FPHomeAboutLike;

/***/ }),

/***/ "./src/pages/page/pages/home/left/about/phone/FPHomeAboutPhone.js":
/*!************************************************************************!*\
  !*** ./src/pages/page/pages/home/left/about/phone/FPHomeAboutPhone.js ***!
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

var _IconTablePhone = __webpack_require__(/*! ../../../../../../../_icons_svg/icon_table_phone/IconTablePhone */ "./src/_icons_svg/icon_table_phone/IconTablePhone.js");

var _IconTablePhone2 = _interopRequireDefault(_IconTablePhone);

var _ProfileLayoutAboutPreviewItem = __webpack_require__(/*! ../../../../../../../component/profile_layout/about_preview_item/ProfileLayoutAboutPreviewItem */ "./src/component/profile_layout/about_preview_item/ProfileLayoutAboutPreviewItem.js");

var _ProfileLayoutAboutPreviewItem2 = _interopRequireDefault(_ProfileLayoutAboutPreviewItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
FPHomeAboutPhone.propTypes = {};

//

//
function FPHomeAboutPhone(_ref) {
    var phone_obj = _ref.phone_obj;

    //
    var num_phone = phone_obj.num_phone;

    //

    return _react2.default.createElement(
        'div',
        { className: 'FPHomeAboutPhone' },
        _react2.default.createElement(
            _ProfileLayoutAboutPreviewItem2.default,
            { Icon: _react2.default.createElement(_IconTablePhone2.default, null) },
            _react2.default.createElement(
                'div',
                null,
                num_phone
            )
        )
    );
}

exports.default = FPHomeAboutPhone;

/***/ }),

/***/ "./src/pages/page/pages/home/left/about/site/FPHomeAboutSite.js":
/*!**********************************************************************!*\
  !*** ./src/pages/page/pages/home/left/about/site/FPHomeAboutSite.js ***!
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

var _IconPublic = __webpack_require__(/*! ../../../../../../../_icons_svg/icon_public/IconPublic */ "./src/_icons_svg/icon_public/IconPublic.js");

var _IconPublic2 = _interopRequireDefault(_IconPublic);

var _ProfileLayoutAboutPreviewItem = __webpack_require__(/*! ../../../../../../../component/profile_layout/about_preview_item/ProfileLayoutAboutPreviewItem */ "./src/component/profile_layout/about_preview_item/ProfileLayoutAboutPreviewItem.js");

var _ProfileLayoutAboutPreviewItem2 = _interopRequireDefault(_ProfileLayoutAboutPreviewItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
FPHomeAboutSite.propTypes = {};

//

//
function FPHomeAboutSite(_ref) {
    var site_obj = _ref.site_obj;

    //
    var link_to = site_obj.link_to,
        link_title = site_obj.link_title;

    //

    return _react2.default.createElement(
        'div',
        { className: 'FPHomeAboutSite' },
        _react2.default.createElement(
            _ProfileLayoutAboutPreviewItem2.default,
            { Icon: _react2.default.createElement(_IconPublic2.default, null) },
            _react2.default.createElement(
                'a',
                { className: 'hv-underline', href: link_to, target: '_blank' },
                link_title
            )
        )
    );
}

exports.default = FPHomeAboutSite;

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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/profile_layout/about_preview_item/ProfileLayoutAboutPreviewItem.scss":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/profile_layout/about_preview_item/ProfileLayoutAboutPreviewItem.scss ***!
  \*****************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".ProfileLayoutAboutPreviewItem svg {\n  width: 20px;\n  height: 20px;\n}", "",{"version":3,"sources":["webpack://./src/component/profile_layout/about_preview_item/ProfileLayoutAboutPreviewItem.scss"],"names":[],"mappings":"AACI;EACI,WAAA;EACA,YAAA;AAAR","sourcesContent":[".ProfileLayoutAboutPreviewItem {\r\n    svg {\r\n        width: 20px;\r\n        height: 20px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./src/component/profile_layout/about_preview_item/ProfileLayoutAboutPreviewItem.scss":
/*!********************************************************************************************!*\
  !*** ./src/component/profile_layout/about_preview_item/ProfileLayoutAboutPreviewItem.scss ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProfileLayoutAboutPreviewItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./ProfileLayoutAboutPreviewItem.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/profile_layout/about_preview_item/ProfileLayoutAboutPreviewItem.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProfileLayoutAboutPreviewItem_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProfileLayoutAboutPreviewItem_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src__default_fb_page_page_about_js-src__initial_page_page_home_preview_js-src_pages_page_page-750924.js.map