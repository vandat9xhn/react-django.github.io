(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_user_profile_user_pages_photo__main_ProfilePhoto_js"],{

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


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _useRouteLoaded3 = __webpack_require__(/*! ../../../../../_custom_hooks/useRouteLoaded */ "./src/_custom_hooks/useRouteLoaded.js");

var _RouteLoaded = __webpack_require__(/*! ../../../../../component/_route/route_loaded/RouteLoaded */ "./src/component/_route/route_loaded/RouteLoaded.js");

var _RouteLoaded2 = _interopRequireDefault(_RouteLoaded);

var _ProfileSkeleton = __webpack_require__(/*! ../../../__common/skeleton/ProfileSkeleton */ "./src/pages/user_profile/__common/skeleton/ProfileSkeleton.js");

var _ProfileSkeleton2 = _interopRequireDefault(_ProfileSkeleton);

var _routes = __webpack_require__(/*! ../__common/routes/routes */ "./src/pages/user_profile/user_pages/photo/__common/routes/routes.js");

__webpack_require__(/*! ./ProfilePhoto.scss */ "./src/pages/user_profile/user_pages/photo/_main/ProfilePhoto.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var group_photo_arr = [{
    search: 'all',
    title: 'Your Photos'
}, {
    search: 'album',
    title: 'Album'
}];

//
ProfilePhoto.propTypes = {};

//
function ProfilePhoto(props) {
    //
    var _useRouteLoaded = (0, _useRouteLoaded3.useRouteLoaded)({
        part_location: 'search',
        allowed_routes: _routes.photos_search_arr
    }),
        _useRouteLoaded2 = _slicedToArray(_useRouteLoaded, 1),
        route_loaded_arr = _useRouteLoaded2[0];

    //


    return _react2.default.createElement(
        'div',
        { className: 'ProfilePhoto bg-primary padding-8px brs-8px-md margin-auto' },
        _react2.default.createElement(
            'h2',
            { className: 'ProfilePhoto_title margin-0' },
            'Photos'
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                { className: 'display-flex' },
                group_photo_arr.map(function (item, ix) {
                    return _react2.default.createElement(
                        'div',
                        {
                            key: 'ProfilePhoto_group_' + ix,
                            className: 'padding-8px'
                        },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            {
                                to: '?sk=photos_' + item.search,
                                className: 'normal-text',
                                replace: true
                            },
                            _react2.default.createElement(
                                'div',
                                {
                                    className: 'label-field hv-cl-blue ' + ('?sk=photos_' + item.search == location.search ? 'text-blue' : '')
                                },
                                item.title
                            )
                        )
                    );
                })
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_RouteLoaded2.default, {
                    route_arr: _routes.PhotosRoutes,
                    part_location: 'search',
                    route_loaded_arr: route_loaded_arr,
                    fallback: _react2.default.createElement(_ProfileSkeleton2.default, null)
                })
            )
        )
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
___CSS_LOADER_EXPORT___.push([module.id, ".ProfilePhoto {\n  width: 900px;\n  max-width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/pages/user_profile/user_pages/photo/_main/ProfilePhoto.scss"],"names":[],"mappings":"AACA;EACI,YAAA;EACA,eAAA;AAAJ","sourcesContent":["\r\n.ProfilePhoto{\r\n    width: 900px;\r\n    max-width: 100%;\r\n}\r\n\r\n"],"sourceRoot":""}]);
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