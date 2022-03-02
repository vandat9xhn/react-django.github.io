(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_add_friend_suggested__main_FriendsSuggest_js"],{

/***/ "./src/component/add_friend_mini/suggest/_main/AddFriendMiniSuggest.js":
/*!*****************************************************************************!*\
  !*** ./src/component/add_friend_mini/suggest/_main/AddFriendMiniSuggest.js ***!
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

var _AddFriendMini = __webpack_require__(/*! ../../_main/AddFriendMini */ "./src/component/add_friend_mini/_main/AddFriendMini.js");

var _AddFriendMini2 = _interopRequireDefault(_AddFriendMini);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
AddFriendMiniSuggest.propTypes = {};

//

//
function AddFriendMiniSuggest(_ref) {
    var profile = _ref.profile,
        sent = _ref.sent,
        addFriend = _ref.addFriend,
        removeFriend = _ref.removeFriend,
        showProfile = _ref.showProfile;

    //

    //
    return _react2.default.createElement(
        'div',
        { className: 'AddFriendMiniSuggest' },
        _react2.default.createElement(_AddFriendMini2.default, {
            profile: profile,
            has_requested: sent,
            title_request: 'Request sent',
            showProfile: showProfile
            //
            , has_first_btn: !sent,
            first_btn_title: 'Add Friend',
            first_btn_class: 'bg-blue text-white',
            handleFirstBtn: addFriend
            //
            , has_second_btn: true,
            second_btn_title: sent ? 'Cancel' : 'Remove',
            second_btn_class: 'bg-ccc',
            handleSecondBtn: removeFriend
        })
    );
}

exports.default = AddFriendMiniSuggest;

/***/ }),

/***/ "./src/pages/add_friend/suggested/_main/FriendsSuggest.js":
/*!****************************************************************!*\
  !*** ./src/pages/add_friend/suggested/_main/FriendsSuggest.js ***!
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

var _useFriendsShowProfile = __webpack_require__(/*! ../../../../_hooks/friends/useFriendsShowProfile */ "./src/_hooks/friends/useFriendsShowProfile.js");

var _FriendsLayOut = __webpack_require__(/*! ../../_components/layout/_main/FriendsLayOut */ "./src/pages/add_friend/_components/layout/_main/FriendsLayOut.js");

var _FriendsLayOut2 = _interopRequireDefault(_FriendsLayOut);

var _FriendsLeftHead = __webpack_require__(/*! ../../_components/left_head/FriendsLeftHead */ "./src/pages/add_friend/_components/left_head/FriendsLeftHead.js");

var _FriendsLeftHead2 = _interopRequireDefault(_FriendsLeftHead);

var _FriendsSuggestLeft = __webpack_require__(/*! ../left/_main/FriendsSuggestLeft */ "./src/pages/add_friend/suggested/left/_main/FriendsSuggestLeft.js");

var _FriendsSuggestLeft2 = _interopRequireDefault(_FriendsSuggestLeft);

var _FriendsShowProfile = __webpack_require__(/*! ../../_components/profile/_main/FriendsShowProfile */ "./src/pages/add_friend/_components/profile/_main/FriendsShowProfile.js");

var _FriendsShowProfile2 = _interopRequireDefault(_FriendsShowProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
FriendsSuggest.propTypes = {};

//

//
function FriendsSuggest(props) {
    //
    var _useFriendsShowProfil = (0, _useFriendsShowProfile.useFriendsShowProfile)({
        friends_pathname: '/friends/suggestions'
    }),
        showProfile = _useFriendsShowProfil.showProfile;

    //


    return _react2.default.createElement(_FriendsLayOut2.default, {
        ComponentLeftHead: _react2.default.createElement(_FriendsLeftHead2.default, { title: 'Suggestions' }),
        ComponentLeftContain: _react2.default.createElement(_FriendsSuggestLeft2.default, { showProfile: showProfile }),
        ComponentRight: _react2.default.createElement(_FriendsShowProfile2.default, null)
    });
}

exports.default = FriendsSuggest;

/***/ }),

/***/ "./src/pages/add_friend/suggested/left/_main/FriendsSuggestLeft.js":
/*!*************************************************************************!*\
  !*** ./src/pages/add_friend/suggested/left/_main/FriendsSuggestLeft.js ***!
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

var _useFriendsSuggest2 = __webpack_require__(/*! ../../../../../_hooks/friends/useFriendsSuggest */ "./src/_hooks/friends/useFriendsSuggest.js");

var _AddFriendMiniSuggest = __webpack_require__(/*! ../../../../../component/add_friend_mini/suggest/_main/AddFriendMiniSuggest */ "./src/component/add_friend_mini/suggest/_main/AddFriendMiniSuggest.js");

var _AddFriendMiniSuggest2 = _interopRequireDefault(_AddFriendMiniSuggest);

__webpack_require__(/*! ./FriendsSuggestLeft.scss */ "./src/pages/add_friend/suggested/left/_main/FriendsSuggestLeft.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
FriendsSuggestLeft.propTypes = {};

//

//

//
function FriendsSuggestLeft(_ref) {
    var _showProfile = _ref.showProfile;

    //
    var _useFriendsSuggest = (0, _useFriendsSuggest2.useFriendsSuggest)({}),
        ref_root = _useFriendsSuggest.ref_root,
        ref_fake_elm = _useFriendsSuggest.ref_fake_elm,
        data_state = _useFriendsSuggest.data_state,
        addFriendRequest = _useFriendsSuggest.addFriendRequest,
        removeFriendRequest = _useFriendsSuggest.removeFriendRequest;

    var data_arr = data_state.data_arr;

    //

    return _react2.default.createElement(
        'div',
        { className: 'FriendsSuggestLeft h-100per padding-left-8px' },
        _react2.default.createElement(
            'div',
            {
                ref: ref_root,
                className: 'max-h-100per overflow-y-auto scroll-thin'
            },
            _react2.default.createElement(
                'div',
                { className: 'padding-x-8px padding-y-5px font-17px font-600' },
                'People you may know'
            ),
            _react2.default.createElement(
                'div',
                null,
                data_arr.map(function (profile, ix) {
                    return _react2.default.createElement(
                        'div',
                        { key: profile.id },
                        _react2.default.createElement(_AddFriendMiniSuggest2.default, {
                            profile: profile,
                            sent: profile.sent,
                            addFriend: function addFriend() {
                                return addFriendRequest(ix);
                            },
                            removeFriend: function removeFriend() {
                                return removeFriendRequest(ix);
                            },
                            showProfile: function showProfile() {
                                return _showProfile(profile.id);
                            }
                        })
                    );
                }),
                _react2.default.createElement('div', { ref: ref_fake_elm, className: 'padding-1px' })
            )
        )
    );
}

exports.default = FriendsSuggestLeft;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/add_friend/suggested/left/_main/FriendsSuggestLeft.scss":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/add_friend/suggested/left/_main/FriendsSuggestLeft.scss ***!
  \************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".device-mobile .FriendsSuggestLeft {\n  padding-left: 0;\n}", "",{"version":3,"sources":["webpack://./src/pages/add_friend/suggested/left/_main/FriendsSuggestLeft.scss"],"names":[],"mappings":"AACI;EACI,eAAA;AAAR","sourcesContent":[".device-mobile{\r\n    .FriendsSuggestLeft{\r\n        padding-left: 0;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/add_friend/suggested/left/_main/FriendsSuggestLeft.scss":
/*!***************************************************************************!*\
  !*** ./src/pages/add_friend/suggested/left/_main/FriendsSuggestLeft.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FriendsSuggestLeft_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./FriendsSuggestLeft.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/add_friend/suggested/left/_main/FriendsSuggestLeft.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FriendsSuggestLeft_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FriendsSuggestLeft_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_add_friend_suggested__main_FriendsSuggest_js.js.map