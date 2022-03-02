(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src__groups_icon_permission_GroupIconPermission_js-src_pages_user_profile_user_pages_about_ri-e52457"],{

/***/ "./src/_data/profile/overview.js":
/*!***************************************!*\
  !*** ./src/_data/profile/overview.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.data_about_overview_icon_arr = undefined;

var _GroupIconProfileAbout = __webpack_require__(/*! ../../_groups_icon/about/GroupIconProfileAbout */ "./src/_groups_icon/about/GroupIconProfileAbout.js");

// 
var data_about_overview_icon_arr = exports.data_about_overview_icon_arr = [{
    Icon: _GroupIconProfileAbout.IconsProfileAbout.work,
    key_data: 'work',
    search: 'work_edu'
}, {
    Icon: _GroupIconProfileAbout.IconsProfileAbout.university,
    key_data: 'university',
    search: 'work_edu'
}, {
    Icon: _GroupIconProfileAbout.IconsProfileAbout.school,
    key_data: 'school',
    search: 'work_edu'
}, {
    Icon: _GroupIconProfileAbout.IconsProfileAbout.town,
    key_data: 'town',
    search: 'place_lived'
}, {
    Icon: _GroupIconProfileAbout.IconsProfileAbout.city,
    key_data: 'city',
    search: 'place_lived'
}, {
    Icon: _GroupIconProfileAbout.IconsProfileAbout.address,
    key_data: 'address',
    search: 'contact'
}];

/***/ }),

/***/ "./src/_groups_icon/permission/GroupIconPermission.js":
/*!************************************************************!*\
  !*** ./src/_groups_icon/permission/GroupIconPermission.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.IconsPermission = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _IconFriend = __webpack_require__(/*! ../../_icons_svg/icon_friend/IconFriend */ "./src/_icons_svg/icon_friend/IconFriend.js");

var _IconFriend2 = _interopRequireDefault(_IconFriend);

var _IconFriends = __webpack_require__(/*! ../../_icons_svg/icon_friends/IconFriends */ "./src/_icons_svg/icon_friends/IconFriends.js");

var _IconFriends2 = _interopRequireDefault(_IconFriends);

var _IconPrivate = __webpack_require__(/*! ../../_icons_svg/icon_private/IconPrivate */ "./src/_icons_svg/icon_private/IconPrivate.js");

var _IconPrivate2 = _interopRequireDefault(_IconPrivate);

var _IconPublic = __webpack_require__(/*! ../../_icons_svg/icon_public/IconPublic */ "./src/_icons_svg/icon_public/IconPublic.js");

var _IconPublic2 = _interopRequireDefault(_IconPublic);

var _IconSetting = __webpack_require__(/*! ../../_icons_svg/icon_setting/IconSetting */ "./src/_icons_svg/icon_setting/IconSetting.js");

var _IconSetting2 = _interopRequireDefault(_IconSetting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var IconsPermission = exports.IconsPermission = [{ Icon: _react2.default.createElement(_IconPublic2.default, null), title: 'Public' }, { Icon: _react2.default.createElement(_IconFriend2.default, null), title: 'Friend' }, { Icon: _react2.default.createElement(_IconFriends2.default, null), title: 'Friend of friend' }, { Icon: _react2.default.createElement(_IconSetting2.default, null), title: 'Setting' }, { Icon: _react2.default.createElement(_IconPrivate2.default, null), title: 'Private' }];
//

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/overview/_main/PfAboutOverview.js":
/*!*****************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/overview/_main/PfAboutOverview.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
//

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

var _GetIdSlug = __webpack_require__(/*! ../../../../../../../_some_function/GetIdSlug */ "./src/_some_function/GetIdSlug.js");

var _about = __webpack_require__(/*! ../../../../../../../_initial/profile/about */ "./src/_initial/profile/about.js");

var _overview = __webpack_require__(/*! ../../../../../../../_data/profile/overview */ "./src/_data/profile/overview.js");

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _ComponentSkeleton = __webpack_require__(/*! ../../../../../../../component/skeleton/component_skeleton/ComponentSkeleton */ "./src/component/skeleton/component_skeleton/ComponentSkeleton.js");

var _ComponentSkeleton2 = _interopRequireDefault(_ComponentSkeleton);

var _PfAboutOverviewItem = __webpack_require__(/*! ../item/PfAboutOverviewItem */ "./src/pages/user_profile/user_pages/about/right/overview/item/PfAboutOverviewItem.js");

var _PfAboutOverviewItem2 = _interopRequireDefault(_PfAboutOverviewItem);

var _PfAbOvSkeleton = __webpack_require__(/*! ../skeleton/PfAbOvSkeleton */ "./src/pages/user_profile/user_pages/about/right/overview/skeleton/PfAbOvSkeleton.js");

var _PfAbOvSkeleton2 = _interopRequireDefault(_PfAbOvSkeleton);

__webpack_require__(/*! ./PfAboutOverview.scss */ "./src/pages/user_profile/user_pages/about/right/overview/_main/PfAboutOverview.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
PfAboutOverview.propTypes = {};

//
function PfAboutOverview(props) {

    //
    var getData_API_Overview = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _ProfileHandleAPI.handle_API_UserOverview_r)({ user_id: user_id });

                        case 2:
                            data = _context.sent;


                            setOverviewState({
                                overview_obj: data,
                                has_fetched: true
                            });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function getData_API_Overview() {
            return _ref.apply(this, arguments);
        };
    }();

    //


    var user_id = (0, _GetIdSlug.GetIdSlug)();

    //

    var _useState = (0, _react.useState)({
        overview_obj: (0, _about.initial_overview_obj)(),
        has_fetched: false
    }),
        _useState2 = _slicedToArray(_useState, 2),
        overview_state = _useState2[0],
        setOverviewState = _useState2[1];

    var overview_obj = overview_state.overview_obj,
        has_fetched = overview_state.has_fetched;

    //

    (0, _react.useEffect)(function () {
        getData_API_Overview();
    }, []);return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: has_fetched ? '' : 'display-none' },
            _overview.data_about_overview_icon_arr.map(function (item, ix) {
                return overview_obj[item.key_data + '_arr'] && overview_obj[item.key_data + '_arr'].length ? _react2.default.createElement(
                    'div',
                    {
                        key: 'PfAboutOverview_item' + ix,
                        className: 'PfAboutOverview_item'
                    },
                    _react2.default.createElement(_PfAboutOverviewItem2.default, {
                        link_to: '?sk=about_' + item.search,
                        Icon: item.Icon,
                        title: overview_obj[item.key_data + '_arr'][0].title,
                        permission: overview_obj[item.key_data + '_arr'][0].permission
                    })
                ) : _react2.default.createElement('div', { key: '' + ix });
            })
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_ComponentSkeleton2.default, {
                has_fetched: has_fetched,
                component: _react2.default.createElement(_PfAbOvSkeleton2.default, null)
            })
        )
    );
}

exports.default = PfAboutOverview;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/overview/item/PfAboutOverviewItem.js":
/*!********************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/overview/item/PfAboutOverviewItem.js ***!
  \********************************************************************************************/
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

var _FlexDiv = __webpack_require__(/*! ../../../../../../../component/some_div/flex_div/FlexDiv */ "./src/component/some_div/flex_div/FlexDiv.js");

var _FlexDiv2 = _interopRequireDefault(_FlexDiv);

var _PermissionDiv = __webpack_require__(/*! ../../../../../../../component/some_div/permission_div/PermissionDiv */ "./src/component/some_div/permission_div/PermissionDiv.js");

var _PermissionDiv2 = _interopRequireDefault(_PermissionDiv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutOverviewItem.propTypes = {
    link_to: _propTypes2.default.string,
    Icon: _propTypes2.default.element,
    title: _propTypes2.default.string,
    permission: _propTypes2.default.number
};

//
function PfAboutOverviewItem(_ref) {
    var link_to = _ref.link_to,
        Icon = _ref.Icon,
        title = _ref.title,
        permission = _ref.permission;

    //
    return _react2.default.createElement(
        _reactRouterDom.Link,
        {
            className: 'display-block color-inherit font-500 text-secondary',
            to: link_to,
            replace: true
        },
        _react2.default.createElement(_FlexDiv2.default, {
            space_between: true,
            ComponentLeft: _react2.default.createElement(_FlexDiv2.default, { ComponentLeft: Icon, ComponentRight: title }),
            ComponentRight: _react2.default.createElement(_PermissionDiv2.default, { permission: permission })
        })
    );
}

exports.default = PfAboutOverviewItem;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/overview/skeleton/PfAbOvSkeleton.js":
/*!*******************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/overview/skeleton/PfAbOvSkeleton.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SkeletonDiv = __webpack_require__(/*! ../../../../../../../component/skeleton/skeleton_div/SkeletonDiv */ "./src/component/skeleton/skeleton_div/SkeletonDiv.js");

var _SkeletonDiv2 = _interopRequireDefault(_SkeletonDiv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PfAbOvSkeleton.propTypes = {};

//

//
function PfAbOvSkeleton(props) {
    return _react2.default.createElement(
        'div',
        null,
        [1, 2, 3, 4].map(function (item) {
            return _react2.default.createElement(
                'div',
                { key: 'PfAbOvSkeleton_' + item, className: 'padding-8px' },
                _react2.default.createElement(_SkeletonDiv2.default, null)
            );
        })
    );
}

exports.default = PfAbOvSkeleton;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/about/right/overview/_main/PfAboutOverview.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/about/right/overview/_main/PfAboutOverview.scss ***!
  \****************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PfAboutOverview_item {\n  margin-bottom: 15px;\n}", "",{"version":3,"sources":["webpack://./src/pages/user_profile/user_pages/about/right/overview/_main/PfAboutOverview.scss"],"names":[],"mappings":"AACA;EACI,mBAAA;AAAJ","sourcesContent":["\r\n.PfAboutOverview_item{\r\n    margin-bottom: 15px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/overview/_main/PfAboutOverview.scss":
/*!*******************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/overview/_main/PfAboutOverview.scss ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PfAboutOverview_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../node_modules/sass-loader/dist/cjs.js!./PfAboutOverview.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/about/right/overview/_main/PfAboutOverview.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PfAboutOverview_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PfAboutOverview_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src__groups_icon_permission_GroupIconPermission_js-src_pages_user_profile_user_pages_about_ri-e52457.js.map