(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src__some_function_GetIdSlug_js-src_pages_user_profile_user_pages_photo_albums__main_ProfileP-2ec813"],{

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

/***/ "./src/pages/user_profile/user_pages/photo/_component/create/ProfilePhotoCreateBtnLink.js":
/*!************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/photo/_component/create/ProfilePhotoCreateBtnLink.js ***!
  \************************************************************************************************/
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
ProfilePhotoCreateBtnLink.propTypes = {};

//
function ProfilePhotoCreateBtnLink(_ref) {
    var title = _ref.title,
        link_to = _ref.link_to,
        children = _ref.children;

    //
    return _react2.default.createElement(
        _reactRouterDom.Link,
        {
            className: 'ProfilePhotoCreateBtnLink display-block padding-4px text-secondary hv-underline',
            to: link_to
        },
        _react2.default.createElement(
            'div',
            { className: 'pos-rel padding-top-100per brs-8px border-blur bg-ccc' },
            _react2.default.createElement(
                'div',
                { className: 'pos-abs-center w-100per' },
                title
            )
        ),
        children
    );
}

exports.default = ProfilePhotoCreateBtnLink;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/photo/albums/_main/ProfilePhotoAlbum.js":
/*!***********************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/photo/albums/_main/ProfilePhotoAlbum.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _ProfilePhotoMain = __webpack_require__(/*! ../../_component/_main/ProfilePhotoMain */ "./src/pages/user_profile/user_pages/photo/_component/_main/ProfilePhotoMain.js");

var _ProfilePhotoMain2 = _interopRequireDefault(_ProfilePhotoMain);

var _ProfilePhotoAlbumCreate = __webpack_require__(/*! ../create/ProfilePhotoAlbumCreate */ "./src/pages/user_profile/user_pages/photo/albums/create/ProfilePhotoAlbumCreate.js");

var _ProfilePhotoAlbumCreate2 = _interopRequireDefault(_ProfilePhotoAlbumCreate);

var _ProfilePhotoAlbumItem = __webpack_require__(/*! ../item/ProfilePhotoAlbumItem */ "./src/pages/user_profile/user_pages/photo/albums/item/ProfilePhotoAlbumItem.js");

var _ProfilePhotoAlbumItem2 = _interopRequireDefault(_ProfilePhotoAlbumItem);

__webpack_require__(/*! ./ProfilePhotoAlbum.scss */ "./src/pages/user_profile/user_pages/photo/albums/_main/ProfilePhotoAlbum.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
ProfilePhotoAlbum.propTypes = {};

//

//

//
function ProfilePhotoAlbum(_ref) {
    var is_your = _ref.is_your;

    //
    return _react2.default.createElement(
        'div',
        { className: 'ProfilePhotoAlbum' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_ProfilePhotoMain2.default, {
                initial_photo_state: [{
                    id: 0,
                    name: '',
                    vid_pic: '',
                    count: 0
                }],
                has_create: is_your,
                CreateElm: _react2.default.createElement(_ProfilePhotoAlbumCreate2.default, null)
                //
                , title_show_more: 'See more album'
                //
                , handle_API_Photo_L: _ProfileHandleAPI.handle_API_AlbumVidPic_L,
                ProfilePhotoItem: _ProfilePhotoAlbumItem2.default,
                ProfilePhotoMainSkeleton: _react2.default.createElement('div', { className: 'h-100vh' })
            })
        )
    );
}

exports.default = ProfilePhotoAlbum;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/photo/albums/create/ProfilePhotoAlbumCreate.js":
/*!******************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/photo/albums/create/ProfilePhotoAlbumCreate.js ***!
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

var _IconPlusSubtract = __webpack_require__(/*! ../../../../../../_icons_svg/_icon_plus_subtract/IconPlusSubtract */ "./src/_icons_svg/_icon_plus_subtract/IconPlusSubtract.js");

var _IconPlusSubtract2 = _interopRequireDefault(_IconPlusSubtract);

var _ProfilePhotoCreateBtnLink = __webpack_require__(/*! ../../_component/create/ProfilePhotoCreateBtnLink */ "./src/pages/user_profile/user_pages/photo/_component/create/ProfilePhotoCreateBtnLink.js");

var _ProfilePhotoCreateBtnLink2 = _interopRequireDefault(_ProfilePhotoCreateBtnLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
ProfilePhotoAlbumCreate.propTypes = {};

//

//
function ProfilePhotoAlbumCreate(props) {
    //
    return _react2.default.createElement(
        _ProfilePhotoCreateBtnLink2.default,
        {
            title: _react2.default.createElement(
                'div',
                { className: 'display-flex-center' },
                _react2.default.createElement(_IconPlusSubtract2.default, { size_icon: '30px' })
            ),
            link_to: '/media/set/create'
        },
        _react2.default.createElement(
            'div',
            { className: 'padding-5px line-20px font-600 text-secondary' },
            'Create'
        )
    );
}

exports.default = ProfilePhotoAlbumCreate;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/photo/albums/item/ProfilePhotoAlbumItem.js":
/*!**************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/photo/albums/item/ProfilePhotoAlbumItem.js ***!
  \**************************************************************************************/
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

var _PicSquareDiv = __webpack_require__(/*! ../../../../../../component/some_div/pic_square_div/PicSquareDiv */ "./src/component/some_div/pic_square_div/PicSquareDiv.js");

var _PicSquareDiv2 = _interopRequireDefault(_PicSquareDiv);

__webpack_require__(/*! ./ProfilePhotoAlbumItem.scss */ "./src/pages/user_profile/user_pages/photo/albums/item/ProfilePhotoAlbumItem.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
ProfilePhotoAlbumItem.propTypes = {};

//

//
function ProfilePhotoAlbumItem(_ref) {
    var item = _ref.item;
    var id = item.id,
        name = item.name,
        vid_pic = item.vid_pic,
        count = item.count;

    //

    return _react2.default.createElement(
        _reactRouterDom.Link,
        {
            className: 'ProfilePhotoAlbumItem display-block padding-4px text-secondary hv-underline',
            to: '?sk=album_photo&album_id=' + id
        },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_PicSquareDiv2.default, { vid_pic: vid_pic })
        ),
        _react2.default.createElement(
            'div',
            { className: 'padding-5px line-20px' },
            _react2.default.createElement(
                'div',
                { className: 'font-500' },
                name
            ),
            _react2.default.createElement(
                'div',
                { className: 'font-13px' },
                count,
                ' item',
                count >= 2 ? 's' : ''
            )
        )
    );
}

exports.default = ProfilePhotoAlbumItem;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/photo/albums/_main/ProfilePhotoAlbum.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/photo/albums/_main/ProfilePhotoAlbum.scss ***!
  \**********************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".ProfilePhotoAlbum_current {\n  border-top: 2px solid var(--md-bg-ccc);\n}", "",{"version":3,"sources":["webpack://./src/pages/user_profile/user_pages/photo/albums/_main/ProfilePhotoAlbum.scss"],"names":[],"mappings":"AAAA;EACI,sCAAA;AACJ","sourcesContent":[".ProfilePhotoAlbum_current{\r\n    border-top: 2px solid var(--md-bg-ccc);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/photo/albums/item/ProfilePhotoAlbumItem.scss":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/photo/albums/item/ProfilePhotoAlbumItem.scss ***!
  \*************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/user_profile/user_pages/photo/albums/_main/ProfilePhotoAlbum.scss":
/*!*************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/photo/albums/_main/ProfilePhotoAlbum.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePhotoAlbum_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./ProfilePhotoAlbum.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/photo/albums/_main/ProfilePhotoAlbum.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePhotoAlbum_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePhotoAlbum_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/user_profile/user_pages/photo/albums/item/ProfilePhotoAlbumItem.scss":
/*!****************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/photo/albums/item/ProfilePhotoAlbumItem.scss ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePhotoAlbumItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./ProfilePhotoAlbumItem.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/photo/albums/item/ProfilePhotoAlbumItem.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePhotoAlbumItem_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePhotoAlbumItem_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src__some_function_GetIdSlug_js-src_pages_user_profile_user_pages_photo_albums__main_ProfileP-2ec813.js.map