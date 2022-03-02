(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src__initial_post_InitialPosts_js-src_component_posts_common_add_new_post__main_AddNewPost_js"],{

/***/ "./src/_initial/post/InitialPosts.js":
/*!*******************************************!*\
  !*** ./src/_initial/post/InitialPosts.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
//
var initial_posts = exports.initial_posts = function initial_posts() {
    return [{
        id: 0,
        user: {
            id: 0,
            picture: '',
            first_name: '',
            last_name: '',
            is_online: false
        },

        user_tag_arr: [],
        user_tag_count: 0,
        emoji_obj: {},

        content_obj: {
            content_more: '',
            has_more_content: false,
            content: ''
        },
        vid_pics: [{
            id: 0,
            likes: [],
            arr_unique_like: [],
            count_like: 0,
            vid_pic: '',
            content_obj: {
                content_more: '',
                has_more_content: false,
                content: ''
            },
            comments: [],
            count_comment: 0,
            histories: [],
            created_time: '2021-04-01T07:48:48.176630Z',
            updated_time: '2021-04-01T15:18:30.339347Z'
        }],
        vid_pic_count: 0,
        likes: [],
        count_like: 0,
        user_reacted_ix: -1,
        shares: [],
        count_share: 0,
        count_unique_share: 0,
        count_user_shared: 0,
        comments: [],
        count_comment: 0,
        histories: [],
        count_history: 0,
        permission_post: 0,
        created_time: '2021-04-01T07:48:48.176630Z',
        updated_time: '2021-04-01T15:18:30.339347Z'
    }];
};

/***/ }),

/***/ "./src/component/posts/common/add_new_post/_main/AddNewPost.js":
/*!*********************************************************************!*\
  !*** ./src/component/posts/common/add_new_post/_main/AddNewPost.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
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

var _ContextAPI = __webpack_require__(/*! ../../../../../_context/ContextAPI */ "./src/_context/ContextAPI.js");

var _Constant = __webpack_require__(/*! ../../../../../_constant/Constant */ "./src/_constant/Constant.js");

var _ScreenWithElm = __webpack_require__(/*! ../../../../_screen/type/with_elm/ScreenWithElm */ "./src/component/_screen/type/with_elm/ScreenWithElm.js");

var _IconsProfile = __webpack_require__(/*! ../../../../../_icons_svg/icons_profile/IconsProfile */ "./src/_icons_svg/icons_profile/IconsProfile.js");

var _IconsProfile2 = _interopRequireDefault(_IconsProfile);

var _IconsInput = __webpack_require__(/*! ../../../../../_icons_svg/Icons_input/IconsInput */ "./src/_icons_svg/Icons_input/IconsInput.js");

var _IconsInput2 = _interopRequireDefault(_IconsInput);

var _IconFaceGray = __webpack_require__(/*! ../../../../../_icons_svg/icons_like/_Icon_face_gray/IconFaceGray */ "./src/_icons_svg/icons_like/_Icon_face_gray/IconFaceGray.js");

var _IconFaceGray2 = _interopRequireDefault(_IconFaceGray);

var _CUPost = __webpack_require__(/*! ../../create_update_post/_main/CUPost */ "./src/component/posts/common/create_update_post/_main/CUPost.js");

var _CUPost2 = _interopRequireDefault(_CUPost);

var _CUPostMb = __webpack_require__(/*! ../../cu_post_mobile/_main/CUPostMb */ "./src/component/posts/common/cu_post_mobile/_main/CUPostMb.js");

var _CUPostMb2 = _interopRequireDefault(_CUPostMb);

__webpack_require__(/*! ./AddNewPost.scss */ "./src/component/posts/common/add_new_post/_main/AddNewPost.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var FOOT_ARR = _Constant.IS_MOBILE ? [{
    Icon: _react2.default.createElement(_IconsInput2.default, { size_icon: '14px' }),
    title: 'Text',
    component_props: {}
}, {
    Icon: _react2.default.createElement(_IconsInput2.default, { size_icon: '14px' }),
    title: 'Live video',
    component_props: {}
}, {
    Icon: _react2.default.createElement(_IconsProfile2.default, { size_icon: '14px' }),
    title: 'Location',
    component_props: {}
}] : [{
    Icon: _react2.default.createElement(_IconsInput2.default, { size_icon: '24px' }),
    title: 'Live video',
    component_props: {}
}, {
    Icon: _react2.default.createElement(_IconsInput2.default, { size_icon: '24px' }),
    title: 'Photo/Video',
    component_props: { chosen_vid_pic: true }
}, {
    Icon: _react2.default.createElement(_IconFaceGray2.default, { size_icon: '24px', stroke: 'var(--gold)' }),
    title: 'Feeling/Activity',
    component_props: { chosen_emoji: true }
}];

//
AddNewPost.propTypes = {
    title: _propTypes2.default.string,
    handleCreatePost: _propTypes2.default.func
};
AddNewPost.defaultProps = {
    title: "What's on your mind?"
};

//
function AddNewPost(_ref) {
    var title = _ref.title,
        handleCreatePost = _ref.handleCreatePost;

    var _useContext = (0, _react.useContext)(_ContextAPI.context_api),
        user = _useContext.user,
        openScreenFloor = _useContext.openScreenFloor;

    //


    function onOpenScreenUpdate() {
        var component_props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var ComponentCUPost = _Constant.IS_MOBILE ? _CUPostMb2.default : _CUPost2.default;
        (0, _ScreenWithElm.openScreenWithElm)({
            openScreenFloor: openScreenFloor,
            elm: _react2.default.createElement(ComponentCUPost, _extends({
                title: 'Create post',
                main_content: '',
                vid_pics: [],
                title_action: 'Post',
                user_tag_arr: [],
                handleCUPost: handleCreatePost
            }, component_props))
        });
    }

    //
    function openWithChoosePhoto() {
        onOpenScreenUpdate({ chosen_vid_pic: true });
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'AddNewPost padding-x-16px padding-y-12px bg-primary brs-8px' },
        _react2.default.createElement(
            'div',
            { className: 'AddNewPost_head display-flex align-items-center padding-bottom-12px border-bottom-blur' },
            _react2.default.createElement(
                _reactRouterDom.Link,
                {
                    className: 'display-block brs-50 hv-after-shadow-05',
                    to: '/profile/' + user.id
                },
                _react2.default.createElement('img', {
                    className: 'border-blur brs-50 object-fit-cover',
                    src: user.picture,
                    alt: '',
                    width: '40',
                    height: '40'
                })
            ),
            _react2.default.createElement(
                'div',
                {
                    className: 'AddNewPost_title flex-grow-1 margin-left-12px padding-x-12px padding-y-8px bg-fb text-nowrap text-third font-17px cursor-pointer hv-bg-hv',
                    onClick: onOpenScreenUpdate
                },
                title
            ),
            _Constant.IS_MOBILE ? _react2.default.createElement(
                'div',
                { className: 'padding-y-8px font-12px text-third font-600' },
                _react2.default.createElement(
                    'div',
                    {
                        className: 'AddNewPost_photo display-flex-center flex-col padding-x-10px',
                        onClick: openWithChoosePhoto
                    },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_IconsInput2.default, { size_icon: '18px' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'margin-top-5px' },
                        'Photo'
                    )
                )
            ) : null
        ),
        _react2.default.createElement(
            'div',
            { className: 'AddNewPost_foot flex-between-center margin-top-10px font-600 text-third' },
            FOOT_ARR.map(function (item, ix) {
                return _react2.default.createElement(
                    'div',
                    {
                        key: ix,
                        className: 'AddNewPost_foot_part display-flex-center padding-y-8px brs-5px cursor-pointer hv-bg-hv',
                        onClick: function onClick() {
                            return onOpenScreenUpdate(item.component_props);
                        }
                    },
                    item.Icon,
                    _react2.default.createElement(
                        'div',
                        { className: 'margin-left-10px' },
                        item.title
                    )
                );
            })
        )
    );
}

exports.default = AddNewPost;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/add_new_post/_main/AddNewPost.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/add_new_post/_main/AddNewPost.scss ***!
  \********************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".AddNewPost {\n  box-shadow: 0 1px 4px var(--shadow-1);\n}\n\n.AddNewPost_title {\n  border-radius: 15px;\n}\n\n.AddNewPost_foot_part {\n  width: 33%;\n}\n\n@media (max-width: 500px) {\n  .AddNewPost {\n    padding: 0;\n    border-radius: 0;\n  }\n}\n.device-mobile .AddNewPost_head {\n  padding: 0 0 0 10px;\n}\n.device-mobile .AddNewPost_head img {\n  width: 35px;\n  height: 35px;\n}\n.device-mobile .AddNewPost_title {\n  margin-left: 0;\n  background-color: transparent;\n  border-radius: 0;\n  font-size: 15px;\n}\n.device-mobile .AddNewPost_foot {\n  margin-top: 0;\n  padding: 5px 0;\n}\n.device-mobile .AddNewPost_foot_part {\n  padding: 3px 0;\n}\n.device-mobile .AddNewPost_foot_part:not(:first-child) {\n  border-left: 1px solid var(--md-bg-blur);\n}\n\n.AddNewPost_photo {\n  border-left: 1px solid var(--md-bg-blur);\n}", "",{"version":3,"sources":["webpack://./src/component/posts/common/add_new_post/_main/AddNewPost.scss"],"names":[],"mappings":"AAAA;EACI,qCAAA;AACJ;;AAGA;EACI,mBAAA;AAAJ;;AAIA;EACI,UAAA;AADJ;;AAKA;EACI;IACI,UAAA;IACA,gBAAA;EAFN;AACF;AAOI;EACI,mBAAA;AALR;AAOQ;EACI,WAAA;EACA,YAAA;AALZ;AASI;EACI,cAAA;EACA,6BAAA;EACA,gBAAA;EAEA,eAAA;AARR;AAWI;EACI,aAAA;EACA,cAAA;AATR;AAYI;EACI,cAAA;AAVR;AAWQ;EACI,wCAAA;AATZ;;AAcA;EACI,wCAAA;AAXJ","sourcesContent":[".AddNewPost {\r\n    box-shadow: 0 1px 4px var(--shadow-1);\r\n}\r\n\r\n// .\r\n.AddNewPost_title {\r\n    border-radius: 15px;\r\n}\r\n\r\n// .\r\n.AddNewPost_foot_part {\r\n    width: 33%;\r\n}\r\n\r\n// -----\r\n@media (max-width: 500px) {\r\n    .AddNewPost {\r\n        padding: 0;\r\n        border-radius: 0;\r\n    }\r\n}\r\n\r\n//\r\n.device-mobile {\r\n    .AddNewPost_head {\r\n        padding: 0 0 0 10px;\r\n\r\n        img {\r\n            width: 35px;\r\n            height: 35px;\r\n        }\r\n    }\r\n    // .\r\n    .AddNewPost_title {\r\n        margin-left: 0;\r\n        background-color: transparent;\r\n        border-radius: 0;\r\n\r\n        font-size: 15px;\r\n    }\r\n\r\n    .AddNewPost_foot {\r\n        margin-top: 0;\r\n        padding: 5px 0;\r\n    }\r\n    // .\r\n    .AddNewPost_foot_part {\r\n        padding: 3px 0;\r\n        &:not(:first-child) {\r\n            border-left: 1px solid var(--md-bg-blur);\r\n        }\r\n    }\r\n}\r\n\r\n.AddNewPost_photo {\r\n    border-left: 1px solid var(--md-bg-blur);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/component/posts/common/add_new_post/_main/AddNewPost.scss":
/*!***********************************************************************!*\
  !*** ./src/component/posts/common/add_new_post/_main/AddNewPost.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_AddNewPost_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./AddNewPost.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/add_new_post/_main/AddNewPost.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_AddNewPost_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_AddNewPost_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src__initial_post_InitialPosts_js-src_component_posts_common_add_new_post__main_AddNewPost_js.js.map