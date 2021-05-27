(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_user_profile_user_pages_photo_albums__main_ProfilePhotoAlbum_js"],{

/***/ "./src/pages/user_profile/user_pages/photo/albums/_main/ProfilePhotoAlbum.js":
/*!***********************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/photo/albums/_main/ProfilePhotoAlbum.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
//

// 

//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CircleLoading = __webpack_require__(/*! ../../../../../../component/waiting/circle_loading/CircleLoading */ "./src/component/waiting/circle_loading/CircleLoading.js");

var _CircleLoading2 = _interopRequireDefault(_CircleLoading);

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../__handle_api/ProfileHandleAPI */ "./src/pages/user_profile/__handle_api/ProfileHandleAPI.js");

var _ProfilePhotoMain = __webpack_require__(/*! ../../_component/_main/ProfilePhotoMain */ "./src/pages/user_profile/user_pages/photo/_component/_main/ProfilePhotoMain.js");

var _ProfilePhotoMain2 = _interopRequireDefault(_ProfilePhotoMain);

var _ProfilePhotoAlbumItem = __webpack_require__(/*! ../item/ProfilePhotoAlbumItem */ "./src/pages/user_profile/user_pages/photo/albums/item/ProfilePhotoAlbumItem.js");

var _ProfilePhotoAlbumItem2 = _interopRequireDefault(_ProfilePhotoAlbumItem);

var _ProfilePhotoList = __webpack_require__(/*! ../../_component/list/_main/ProfilePhotoList */ "./src/pages/user_profile/user_pages/photo/_component/list/_main/ProfilePhotoList.js");

var _ProfilePhotoList2 = _interopRequireDefault(_ProfilePhotoList);

__webpack_require__(/*! ./ProfilePhotoAlbum.scss */ "./src/pages/user_profile/user_pages/photo/albums/_main/ProfilePhotoAlbum.scss");

var _handleScrollSmooth = __webpack_require__(/*! ../../../../../../_some_function/handleScrollSmooth */ "./src/_some_function/handleScrollSmooth.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
ProfilePhotoAlbum.propTypes = {};

//
function ProfilePhotoAlbum(props) {
    //
    var _useState = (0, _react.useState)({
        album_model: 0,
        album_name: '',
        is_fetching: false
    }),
        _useState2 = _slicedToArray(_useState, 2),
        album_state = _useState2[0],
        setAlbumState = _useState2[1];

    var album_model = album_state.album_model,
        album_name = album_state.album_name,
        is_fetching = album_state.is_fetching;

    //

    var ref_photos_in_album = (0, _react.useRef)(null);

    //
    function handleChooseAlbum(new_album_model, new_album_name) {
        setAlbumState({
            album_model: 0,
            album_name: '',
            is_fetching: true
        });

        setTimeout(function () {
            setAlbumState({
                album_model: new_album_model,
                album_name: new_album_name,
                is_fetching: false
            });

            (0, _handleScrollSmooth.handleScrollSmooth)(function () {
                ref_photos_in_album.current.scrollIntoView();
            });
        }, 100);
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_ProfilePhotoMain2.default, {
                initial_photo_state: [{
                    id: 0,
                    name: '',
                    vid_pics: [{ vid_pic: '' }]
                }],
                item_props: { handleChooseAlbum: handleChooseAlbum },
                title_show_more: 'See more album'
                //
                , handle_API_Photo_L: _ProfileHandleAPI.handle_API_AlbumVidPic_L,
                ProfilePhotoItem: _ProfilePhotoAlbumItem2.default,
                ProfilePhotoMainSkeleton: _react2.default.createElement('div', { className: 'height-100vh' })
            })
        ),
        _react2.default.createElement(
            'div',
            { ref: ref_photos_in_album },
            _react2.default.createElement('br', null)
        ),
        album_model ? _react2.default.createElement(
            'div',
            {
                id: '#ProfilePhotoAlbumItem_' + album_model,
                className: 'ProfilePhotoAlbum_current'
            },
            _react2.default.createElement(
                'h3',
                null,
                album_name,
                ' ',
                album_model
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_ProfilePhotoList2.default, {
                    album_model: album_model,
                    ProfilePhotoMainSkeleton: _react2.default.createElement(
                        'div',
                        { className: 'width-fit-content margin-auto height-100vh' },
                        _react2.default.createElement(_CircleLoading2.default, { open_fetching: true })
                    )
                })
            )
        ) : _react2.default.createElement('div', {
            className: 'height-100vh ' + (is_fetching ? '' : 'display-none')
        })
    );
}

exports.default = ProfilePhotoAlbum;

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
    var item = _ref.item,
        handleChooseAlbum = _ref.handleChooseAlbum;
    var id = item.id,
        name = item.name,
        vid_pics = item.vid_pics;

    // 

    function onChooseAlbum() {
        handleChooseAlbum(id, name);
    }
    //
    return _react2.default.createElement(
        'div',
        { className: 'ProfilePhotoAlbumItem', onClick: onChooseAlbum },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_PicSquareDiv2.default, { vid_pic: vid_pics[0].vid_pic })
        ),
        _react2.default.createElement(
            'div',
            null,
            name
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
___CSS_LOADER_EXPORT___.push([module.id, ".ProfilePhotoAlbumItem {\n  padding: 0 5px 12px;\n  cursor: pointer;\n}\n.ProfilePhotoAlbumItem:hover {\n  text-decoration: 1px underline solid;\n}", "",{"version":3,"sources":["webpack://./src/pages/user_profile/user_pages/photo/albums/item/ProfilePhotoAlbumItem.scss"],"names":[],"mappings":"AACA;EACI,mBAAA;EACA,eAAA;AAAJ;AAEI;EACI,oCAAA;AAAR","sourcesContent":["\r\n.ProfilePhotoAlbumItem{\r\n    padding: 0 5px 12px;\r\n    cursor: pointer;\r\n\r\n    &:hover{\r\n        text-decoration: 1px underline solid;\r\n    }\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=src_pages_user_profile_user_pages_photo_albums__main_ProfilePhotoAlbum_js.js.map