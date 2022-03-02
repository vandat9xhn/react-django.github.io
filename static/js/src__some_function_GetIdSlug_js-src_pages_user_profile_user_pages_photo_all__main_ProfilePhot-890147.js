(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src__some_function_GetIdSlug_js-src_pages_user_profile_user_pages_photo_all__main_ProfilePhot-890147"],{

/***/ "./src/_some_function/GetIdSlug.js":
/*!*****************************************!*\
  !*** ./src/_some_function/GetIdSlug.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.GetIdSlug = GetIdSlug;

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

//
function GetIdSlug() {
    var is_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var id_slug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';

    try {
        var params = (0, _reactRouterDom.useParams)();

        return is_id ? +params[id_slug] : params[id_slug];
    } catch (err) {
        if (is_id) {
            return parseInt(location.pathname.split('/').slice(-1)[0]);
        }

        return location.pathname.split('/').slice(-1)[0];
    }
}

/***/ }),

/***/ "./src/pages/user_profile/user_pages/photo/_component/list/_main/ProfilePhotoList.js":
/*!*******************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/photo/_component/list/_main/ProfilePhotoList.js ***!
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

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _ProfilePhotoMain = __webpack_require__(/*! ../../_main/ProfilePhotoMain */ "./src/pages/user_profile/user_pages/photo/_component/_main/ProfilePhotoMain.js");

var _ProfilePhotoMain2 = _interopRequireDefault(_ProfilePhotoMain);

var _ProfilePhotoItem = __webpack_require__(/*! ../item/ProfilePhotoItem */ "./src/pages/user_profile/user_pages/photo/_component/list/item/ProfilePhotoItem.js");

var _ProfilePhotoItem2 = _interopRequireDefault(_ProfilePhotoItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// import './ProfilePhotoList.scss';

//
ProfilePhotoList.propTypes = {
    album_model: _propTypes2.default.number,
    ProfilePhotoMainSkeleton: _propTypes2.default.element
};
//


ProfilePhotoList.defaultProps = {
    album_model: 0
};

//
function ProfilePhotoList(_ref) {
    var album_model = _ref.album_model,
        ProfilePhotoMainSkeleton = _ref.ProfilePhotoMainSkeleton;

    //
    function on_API_VidPic_L(user_id, c_count) {
        return (0, _ProfileHandleAPI.handle_API_VidPic_L)(user_id, c_count, album_model);
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'ProfilePhotoList' },
        _react2.default.createElement(_ProfilePhotoMain2.default, {
            initial_photo_state: [{
                id: 0,
                img: ''
            }],
            handle_API_Photo_L: on_API_VidPic_L,
            ProfilePhotoItem: _ProfilePhotoItem2.default,
            ProfilePhotoMainSkeleton: ProfilePhotoMainSkeleton
        })
    );
}

exports.default = ProfilePhotoList;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/photo/_component/list/item/ProfilePhotoItem.js":
/*!******************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/photo/_component/list/item/ProfilePhotoItem.js ***!
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _PicSquareDiv = __webpack_require__(/*! ../../../../../../../component/some_div/pic_square_div/PicSquareDiv */ "./src/component/some_div/pic_square_div/PicSquareDiv.js");

var _PicSquareDiv2 = _interopRequireDefault(_PicSquareDiv);

__webpack_require__(/*! ./ProfilePhotoItem.scss */ "./src/pages/user_profile/user_pages/photo/_component/list/item/ProfilePhotoItem.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
ProfilePhotoItem.propTypes = {
    item: _propTypes2.default.shape({
        id: _propTypes2.default.number,
        img: _propTypes2.default.string
    })
};

//

//
function ProfilePhotoItem(_ref) {
    var item = _ref.item;
    var id = item.id,
        img = item.img;

    //

    return _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/post/photos/' + id, className: 'w-100per' },
        _react2.default.createElement(
            'div',
            { className: 'ProfilePhotoItem' },
            _react2.default.createElement(_PicSquareDiv2.default, { vid_pic: img })
        )
    );
}

exports.default = ProfilePhotoItem;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/photo/all/_main/ProfilePhotoAll.js":
/*!******************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/photo/all/_main/ProfilePhotoAll.js ***!
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

var _ProfilePhotoList = __webpack_require__(/*! ../../_component/list/_main/ProfilePhotoList */ "./src/pages/user_profile/user_pages/photo/_component/list/_main/ProfilePhotoList.js");

var _ProfilePhotoList2 = _interopRequireDefault(_ProfilePhotoList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
ProfilePhotoAll.propTypes = {};

//

//
function ProfilePhotoAll(props) {
    return _react2.default.createElement(
        'div',
        { className: 'ProfilePhotoAll' },
        _react2.default.createElement(_ProfilePhotoList2.default, null)
    );
}

exports.default = ProfilePhotoAll;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/photo/_component/list/item/ProfilePhotoItem.scss":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/photo/_component/list/item/ProfilePhotoItem.scss ***!
  \*****************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".ProfilePhotoItem {\n  padding: 4px;\n}", "",{"version":3,"sources":["webpack://./src/pages/user_profile/user_pages/photo/_component/list/item/ProfilePhotoItem.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;AACJ","sourcesContent":[".ProfilePhotoItem{\r\n    padding: 4px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/user_profile/user_pages/photo/_component/list/item/ProfilePhotoItem.scss":
/*!********************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/photo/_component/list/item/ProfilePhotoItem.scss ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePhotoItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../node_modules/sass-loader/dist/cjs.js!./ProfilePhotoItem.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/photo/_component/list/item/ProfilePhotoItem.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePhotoItem_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePhotoItem_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src__some_function_GetIdSlug_js-src_pages_user_profile_user_pages_photo_all__main_ProfilePhot-890147.js.map