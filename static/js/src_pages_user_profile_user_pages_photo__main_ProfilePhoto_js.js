(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_user_profile_user_pages_photo__main_ProfilePhoto_js"],{

/***/ "./src/pages/user_profile/user_pages/photo/__common/routes/routes.js":
/*!***************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/photo/__common/routes/routes.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.PhotosRoutes = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var ProfilePhotoAll = _react2.default.lazy(function () {
    return Promise.all(/*! import() */[__webpack_require__.e("src_component_some_div_pic_square_div_PicSquareDiv_js-src_pages_user_profile_user_pages_photo-fdae3a"), __webpack_require__.e("src__some_function_GetIdSlug_js-src_pages_user_profile_user_pages_photo_all__main_ProfilePhot-890147")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../all/_main/ProfilePhotoAll */ "./src/pages/user_profile/user_pages/photo/all/_main/ProfilePhotoAll.js"));
});
var ProfilePhotoAlbum = _react2.default.lazy(function () {
    return Promise.all(/*! import() */[__webpack_require__.e("src_component_some_div_pic_square_div_PicSquareDiv_js-src_pages_user_profile_user_pages_photo-fdae3a"), __webpack_require__.e("src__some_function_GetIdSlug_js-src_pages_user_profile_user_pages_photo_albums__main_ProfileP-2ec813")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../albums/_main/ProfilePhotoAlbum */ "./src/pages/user_profile/user_pages/photo/albums/_main/ProfilePhotoAlbum.js"));
});

//
var PhotosRoutes = exports.PhotosRoutes = [{
    component: ProfilePhotoAll,
    search: '?sk=photos_all'
}, {
    component: ProfilePhotoAlbum,
    search: '?sk=photos_albums'
}];

/***/ }),

/***/ "./src/pages/user_profile/user_pages/photo/_main/ProfilePhoto.js":
/*!***********************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/photo/_main/ProfilePhoto.js ***!
  \***********************************************************************/
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


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _useRouteFollowSearch2 = __webpack_require__(/*! ../../../../../_hooks/useRouteFollowSearch */ "./src/_hooks/useRouteFollowSearch.js");

var _routes = __webpack_require__(/*! ../__common/routes/routes */ "./src/pages/user_profile/user_pages/photo/__common/routes/routes.js");

var _RouteFollowSearch = __webpack_require__(/*! ../../../../../component/_route/follow_search/RouteFollowSearch */ "./src/component/_route/follow_search/RouteFollowSearch.js");

var _RouteFollowSearch2 = _interopRequireDefault(_RouteFollowSearch);

var _ProfileSkeleton = __webpack_require__(/*! ../../../__common/skeleton/ProfileSkeleton */ "./src/pages/user_profile/__common/skeleton/ProfileSkeleton.js");

var _ProfileSkeleton2 = _interopRequireDefault(_ProfileSkeleton);

var _ProfileLayoutNavItem = __webpack_require__(/*! ../../../../../component/profile_layout/nav/item/ProfileLayoutNavItem */ "./src/component/profile_layout/nav/item/ProfileLayoutNavItem.js");

var _ProfileLayoutNavItem2 = _interopRequireDefault(_ProfileLayoutNavItem);

__webpack_require__(/*! ./ProfilePhoto.scss */ "./src/pages/user_profile/user_pages/photo/_main/ProfilePhoto.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
ProfilePhoto.propTypes = {};

//
function ProfilePhoto(_ref) {
    var user_id = _ref.user_id,
        name = _ref.name,
        is_your = _ref.is_your;

    //
    var use_history = (0, _reactRouterDom.useHistory)();

    //

    var _useState = (0, _react.useState)([{
        search: 'all',
        title: is_your ? 'Your Photos' : name.split(' ')[0] + '\'s Photos'
    }, {
        search: 'albums',
        title: 'Albums'
    }]),
        _useState2 = _slicedToArray(_useState, 2),
        photo_arr = _useState2[0],
        setPhotoArr = _useState2[1];

    //


    var _useRouteFollowSearch = (0, _useRouteFollowSearch2.useRouteFollowSearch)({
        base_path: /\/profile\/\d+\?sk=photo/,
        route_arr: _routes.PhotosRoutes,
        is_exact: false,

        getRouteProps: getRouteProps,
        handleNotFound: handleNotFound
    }),
        route_ix = _useRouteFollowSearch.route_ix,
        route_props = _useRouteFollowSearch.route_props;

    // -----

    //


    function getRouteProps() {
        return {
            user_id: user_id,
            name: name,
            is_your: is_your
        };
    }

    //
    function handleNotFound() {
        use_history.replace('' + location.pathname + _routes.PhotosRoutes[0].search);
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'ProfilePhoto profile-route-contain padding-y-16px' },
        _react2.default.createElement(
            'h2',
            { className: 'ProfilePhoto_title profile-route-title padding-x-8px' },
            'Photos'
        ),
        _react2.default.createElement(
            'div',
            { className: 'display-flex margin-y-15px' },
            photo_arr.map(function (item, ix) {
                return _react2.default.createElement(
                    'div',
                    { key: ix, className: 'h-52px font-600 text-secondary' },
                    _react2.default.createElement(_ProfileLayoutNavItem2.default, {
                        title: item.title,
                        link_to: '?sk=photos_' + item.search,
                        IsActive: function IsActive() {
                            return '?sk=photos_' + item.search == location.search;
                        }
                    })
                );
            })
        ),
        _react2.default.createElement(_RouteFollowSearch2.default, {
            RouteComponent: _routes.PhotosRoutes[route_ix].component,
            route_props: route_props,
            fallback: _react2.default.createElement(_ProfileSkeleton2.default, null)
        })
    );
}

exports.default = ProfilePhoto;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/photo/_main/ProfilePhoto.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/photo/_main/ProfilePhoto.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/user_profile/user_pages/photo/_main/ProfilePhoto.scss":
/*!*************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/photo/_main/ProfilePhoto.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePhoto_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./ProfilePhoto.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/photo/_main/ProfilePhoto.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePhoto_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePhoto_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_user_profile_user_pages_photo__main_ProfilePhoto_js.js.map