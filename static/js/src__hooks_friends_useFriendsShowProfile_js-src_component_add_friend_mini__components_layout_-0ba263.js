(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src__hooks_friends_useFriendsShowProfile_js-src_component_add_friend_mini__components_layout_-0ba263"],{

/***/ "./src/_hooks/friends/useFriendsShowProfile.js":
/*!*****************************************************!*\
  !*** ./src/_hooks/friends/useFriendsShowProfile.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useFriendsShowProfile = useFriendsShowProfile;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _ContextAPI = __webpack_require__(/*! ../../_context/ContextAPI */ "./src/_context/ContextAPI.js");

var _Constant = __webpack_require__(/*! ../../_constant/Constant */ "./src/_constant/Constant.js");

//

//
function useFriendsShowProfile(_ref) {
    var friends_pathname = _ref.friends_pathname;

    //
    var use_history = (0, _reactRouterDom.useHistory)();

    //

    var _useContext = (0, _react.useContext)(_ContextAPI.context_api),
        profile_friends_pathname = _useContext.profile_friends_pathname;

    //


    (0, _react.useEffect)(function () {
        if (!_Constant.IS_MOBILE) {
            var new_profile_id = history.state.state ? history.state.state['profile_id'] : -1;

            showProfile(new_profile_id);
        }
    }, []);

    // -----

    //
    function showProfile() {
        var new_profile_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

        if (_Constant.IS_MOBILE) {
            use_history.push('/profile/' + new_profile_id);

            return;
        }

        if (new_profile_id > 0) {
            profile_friends_pathname.current = friends_pathname;
            use_history.push('/profile/' + new_profile_id);
        }
    }

    //
    return {
        showProfile: showProfile
    };
}
//

/***/ }),

/***/ "./src/_some_function/testRegexProfile.js":
/*!************************************************!*\
  !*** ./src/_some_function/testRegexProfile.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.testRegexProfile = testRegexProfile;
//
function testRegexProfile() {
    var profile_pathname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location.pathname;

    return (/^\/profile\/\d+/.test(profile_pathname)
    );
}

/***/ }),

/***/ "./src/component/add_friend_mini/_components/layout/AddFriendMiniLayout.js":
/*!*********************************************************************************!*\
  !*** ./src/component/add_friend_mini/_components/layout/AddFriendMiniLayout.js ***!
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

var _useBool2 = __webpack_require__(/*! ../../../../_hooks/useBool */ "./src/_hooks/useBool.js");

__webpack_require__(/*! ./AddFriendMiniLayout.scss */ "./src/component/add_friend_mini/_components/layout/AddFriendMiniLayout.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

// 
AddFriendMiniLayout.propTypes = {};

//

// 
function AddFriendMiniLayout(_ref) {
    var picture = _ref.picture,
        children = _ref.children,
        showProfile = _ref.showProfile;

    //
    var _useBool = (0, _useBool2.useBool)(),
        is_true = _useBool.is_true,
        setIsTrue = _useBool.setIsTrue;

    // ----

    //


    function handleMouseEnter() {
        setIsTrue(true);
    }

    //
    function handleMouseLeave() {
        setIsTrue(false);
    }

    //
    return _react2.default.createElement(
        'div',
        {
            className: 'AddFriendMiniLayout pos-rel padding-x-8px brs-6px ' + (is_true ? 'bg-fb' : '')
        },
        _react2.default.createElement('div', {
            className: 'AddFriendMiniLayout_bg pos-abs-100 cursor-pointer',
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            onClick: showProfile
        }),
        _react2.default.createElement(
            'div',
            { className: 'display-flex' },
            _react2.default.createElement('img', {
                className: 'AddFriendMiniLayout_pic flex-shrink-0 margin-right-12px margin-y-8px brs-50 object-fit-cover',
                src: picture,
                alt: '',
                width: '60',
                height: '60'
            }),
            _react2.default.createElement(
                'div',
                { className: 'flex-grow-1' },
                children
            )
        )
    );
}

exports.default = AddFriendMiniLayout;

/***/ }),

/***/ "./src/pages/add_friend/_components/left_head/FriendsLeftHead.js":
/*!***********************************************************************!*\
  !*** ./src/pages/add_friend/_components/left_head/FriendsLeftHead.js ***!
  \***********************************************************************/
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

var _Constant = __webpack_require__(/*! ../../../../_constant/Constant */ "./src/_constant/Constant.js");

var _IconsArrow = __webpack_require__(/*! ../../../../_icons_svg/icons_arrow/IconsArrow */ "./src/_icons_svg/icons_arrow/IconsArrow.js");

var _IconsArrow2 = _interopRequireDefault(_IconsArrow);

__webpack_require__(/*! ./FriendsLeftHead.scss */ "./src/pages/add_friend/_components/left_head/FriendsLeftHead.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
FriendsLeftHead.propTypes = {};

//

//

//
function FriendsLeftHead(_ref) {
    var title = _ref.title;

    //
    function handleBack(e) {
        if (_Constant.IS_MOBILE) {
            e.preventDefault();
            history.back();
        }
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'FriendsLeftHead padding-x-8px padding-top-15px padding-bottom-8px' },
        _react2.default.createElement(
            'div',
            { className: 'FriendsLeftHead_row display-flex align-items-center' },
            _react2.default.createElement(
                _reactRouterDom.Link,
                {
                    className: 'color-inherit',
                    to: '/friends',
                    onClick: handleBack
                },
                _react2.default.createElement(
                    'div',
                    { className: 'FriendsLeftHead_back btn-icon-36px margin-right-12px cursor-pointer hv-bg-hv' },
                    _react2.default.createElement(_IconsArrow2.default, { x: 200, y: 200, size_icon: '20px' })
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'FriendsLeftHead_right' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        {
                            className: 'font-13px text-third hv-underline',
                            to: '/friends',
                            onClick: handleBack
                        },
                        'Friends'
                    )
                ),
                _react2.default.createElement(
                    'h1',
                    { className: 'FriendsLeftHead_title font-24px font-700' },
                    title
                )
            )
        )
    );
}

exports.default = FriendsLeftHead;

/***/ }),

/***/ "./src/pages/add_friend/_components/profile/_main/FriendsShowProfile.js":
/*!******************************************************************************!*\
  !*** ./src/pages/add_friend/_components/profile/_main/FriendsShowProfile.js ***!
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _ContextAPI = __webpack_require__(/*! ../../../../../_context/ContextAPI */ "./src/_context/ContextAPI.js");

var _testRegexProfile = __webpack_require__(/*! ../../../../../_some_function/testRegexProfile */ "./src/_some_function/testRegexProfile.js");

var _Profile = __webpack_require__(/*! ../../../../user_profile/_main/Profile */ "./src/pages/user_profile/_main/Profile.js");

var _Profile2 = _interopRequireDefault(_Profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }
//

//

//


//
FriendsShowProfile.propTypes = {};

//
function FriendsShowProfile(_ref) {
    _objectDestructuringEmpty(_ref);

    //
    (0, _reactRouterDom.useParams)();

    //

    var _useContext = (0, _react.useContext)(_ContextAPI.context_api),
        profile_friends_pathname = _useContext.profile_friends_pathname;

    //


    if (!(0, _testRegexProfile.testRegexProfile)() || !profile_friends_pathname.current) {
        return null;
    }

    //
    return _react2.default.createElement(
        'div',
        { key: location.pathname },
        _react2.default.createElement(_Profile2.default, null)
    );
}

exports.default = FriendsShowProfile;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/add_friend_mini/_components/layout/AddFriendMiniLayout.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/add_friend_mini/_components/layout/AddFriendMiniLayout.scss ***!
  \********************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".device-mobile .AddFriendMiniLayout_pic {\n  margin: 8px 8px 8px 0;\n  width: 30px;\n  height: 30px;\n}", "",{"version":3,"sources":["webpack://./src/component/add_friend_mini/_components/layout/AddFriendMiniLayout.scss"],"names":[],"mappings":"AACI;EACI,qBAAA;EAEA,WAAA;EACA,YAAA;AADR","sourcesContent":[".device-mobile {\r\n    .AddFriendMiniLayout_pic {\r\n        margin: 8px 8px 8px 0;\r\n\r\n        width: 30px;\r\n        height: 30px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/add_friend/_components/left_head/FriendsLeftHead.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/add_friend/_components/left_head/FriendsLeftHead.scss ***!
  \**********************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".FriendsLeftHead_back .IconsArrow_back-prev {\n  stroke: currentColor;\n}\n\n.FriendsLeftHead_title {\n  line-height: 26px;\n}\n\n.device-mobile .FriendsLeftHead {\n  padding: 8px;\n  border-bottom: 1px solid var(--md-bg-blur);\n}\n.device-mobile .FriendsLeftHead_right {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row-reverse;\n  width: 100%;\n}\n.device-mobile .FriendsLeftHead_title {\n  font-size: 16px;\n  line-height: unset;\n}", "",{"version":3,"sources":["webpack://./src/pages/add_friend/_components/left_head/FriendsLeftHead.scss"],"names":[],"mappings":"AACI;EACI,oBAAA;AAAR;;AAIA;EACI,iBAAA;AADJ;;AAOI;EACI,YAAA;EACA,0CAAA;AAJR;AAOI;EACI,aAAA;EACA,8BAAA;EACA,2BAAA;EAEA,WAAA;AANR;AASI;EACI,eAAA;EACA,kBAAA;AAPR","sourcesContent":[".FriendsLeftHead_back {\r\n    .IconsArrow_back-prev {\r\n        stroke: currentColor;\r\n    }\r\n}\r\n\r\n.FriendsLeftHead_title {\r\n    line-height: 26px;\r\n}\r\n\r\n// -----\r\n\r\n.device-mobile{\r\n    .FriendsLeftHead {\r\n        padding: 8px;\r\n        border-bottom: 1px solid var(--md-bg-blur);\r\n    }\r\n\r\n    .FriendsLeftHead_right{\r\n        display: flex;\r\n        justify-content: space-between;\r\n        flex-direction: row-reverse;\r\n\r\n        width: 100%;\r\n    }\r\n    // .\r\n    .FriendsLeftHead_title {\r\n        font-size: 16px;\r\n        line-height: unset;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/component/add_friend_mini/_components/layout/AddFriendMiniLayout.scss":
/*!***********************************************************************************!*\
  !*** ./src/component/add_friend_mini/_components/layout/AddFriendMiniLayout.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_AddFriendMiniLayout_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./AddFriendMiniLayout.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/add_friend_mini/_components/layout/AddFriendMiniLayout.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_AddFriendMiniLayout_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_AddFriendMiniLayout_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/add_friend/_components/left_head/FriendsLeftHead.scss":
/*!*************************************************************************!*\
  !*** ./src/pages/add_friend/_components/left_head/FriendsLeftHead.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FriendsLeftHead_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./FriendsLeftHead.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/add_friend/_components/left_head/FriendsLeftHead.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FriendsLeftHead_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FriendsLeftHead_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src__hooks_friends_useFriendsShowProfile_js-src_component_add_friend_mini__components_layout_-0ba263.js.map