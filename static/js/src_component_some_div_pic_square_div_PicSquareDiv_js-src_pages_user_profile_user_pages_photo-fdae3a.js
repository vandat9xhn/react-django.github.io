(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_component_some_div_pic_square_div_PicSquareDiv_js-src_pages_user_profile_user_pages_photo-fdae3a"],{

/***/ "./src/component/some_div/pic_square_div/PicSquareDiv.js":
/*!***************************************************************!*\
  !*** ./src/component/some_div/pic_square_div/PicSquareDiv.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _VideoOrImage = __webpack_require__(/*! ../../../_some_function/VideoOrImage */ "./src/_some_function/VideoOrImage.js");

__webpack_require__(/*! ./PicSquareDiv.scss */ "./src/component/some_div/pic_square_div/PicSquareDiv.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PicSquareDiv.propTypes = {
    vid_pic: _propTypes2.default.string
};

//

//
function PicSquareDiv(_ref) {
    var vid_pic = _ref.vid_pic;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PicSquareDiv pos-rel w-100per padding-top-100per brs-8px border-blur overflow-hidden' },
        _react2.default.createElement(
            'div',
            { className: 'pos-abs-100' },
            (0, _VideoOrImage.VideoOrImage)(vid_pic, '')
        )
    );
}

exports.default = PicSquareDiv;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/photo/_component/_main/ProfilePhotoMain.js":
/*!**************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/photo/_component/_main/ProfilePhotoMain.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
//

//

//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GetIdSlug = __webpack_require__(/*! ../../../../../../_some_function/GetIdSlug */ "./src/_some_function/GetIdSlug.js");

var _observerToDo = __webpack_require__(/*! ../../../../../../_some_function/observerToDo */ "./src/_some_function/observerToDo.js");

var _observerToDo2 = _interopRequireDefault(_observerToDo);

var _ComponentSkeleton = __webpack_require__(/*! ../../../../../../component/skeleton/component_skeleton/ComponentSkeleton */ "./src/component/skeleton/component_skeleton/ComponentSkeleton.js");

var _ComponentSkeleton2 = _interopRequireDefault(_ComponentSkeleton);

var _ScreenBlurShowMore = __webpack_require__(/*! ../../../../../../component/_screen/components/part/foot/ScreenBlurShowMore */ "./src/component/_screen/components/part/foot/ScreenBlurShowMore.js");

var _ScreenBlurShowMore2 = _interopRequireDefault(_ScreenBlurShowMore);

var _NoItem = __webpack_require__(/*! ../../../../../../component/some_div/no_item/NoItem */ "./src/component/some_div/no_item/NoItem.js");

var _NoItem2 = _interopRequireDefault(_NoItem);

__webpack_require__(/*! ./ProfilePhotoMain.scss */ "./src/pages/user_profile/user_pages/photo/_component/_main/ProfilePhotoMain.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
ProfilePhotoMain.propTypes = {
    initial_photo_arr: _propTypes2.default.array,
    initial_photo_count: _propTypes2.default.number,
    item_props: _propTypes2.default.object,
    has_create: _propTypes2.default.bool,
    CreateElm: _propTypes2.default.element,

    title_show_more: _propTypes2.default.string,
    title_no_item: _propTypes2.default.string,

    handle_API_Photo_L: _propTypes2.default.func,
    ProfilePhotoItem: _propTypes2.default.func,
    ProfilePhotoMainSkeleton: _propTypes2.default.element
};

ProfilePhotoMain.defaultProps = {
    initial_photo_arr: [],
    initial_photo_count: 0,
    item_props: {},
    has_create: false,
    CreateElm: _react2.default.createElement('div', null),

    title_show_more: 'See more photos',
    title_no_item: 'No items to show'
};

//
function ProfilePhotoMain(_ref) {

    //
    var getData_API_Photo = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _ref3, data, count;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            setPhotoState(_extends({}, photo_state, {
                                is_fetching: true
                            }));

                            _context.next = 3;
                            return handle_API_Photo_L(id, has_fetched ? photo_arr.length : 0);

                        case 3:
                            _ref3 = _context.sent;
                            data = _ref3.data;
                            count = _ref3.count;


                            setPhotoState(function (photo_state) {
                                var photo_arr = photo_state.photo_arr,
                                    photo_count = photo_state.photo_count,
                                    has_fetched = photo_state.has_fetched;


                                return {
                                    photo_arr: has_fetched ? [].concat(_toConsumableArray(photo_arr), _toConsumableArray(data)) : data,
                                    photo_count: has_fetched ? photo_count : count,
                                    has_fetched: true,
                                    is_fetching: false
                                };
                            });

                        case 7:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function getData_API_Photo() {
            return _ref2.apply(this, arguments);
        };
    }();

    //


    var initial_photo_arr = _ref.initial_photo_arr,
        initial_photo_count = _ref.initial_photo_count,
        item_props = _ref.item_props,
        has_create = _ref.has_create,
        CreateElm = _ref.CreateElm,
        title_show_more = _ref.title_show_more,
        title_no_item = _ref.title_no_item,
        handle_API_Photo_L = _ref.handle_API_Photo_L,
        ProfilePhotoItem = _ref.ProfilePhotoItem,
        ProfilePhotoMainSkeleton = _ref.ProfilePhotoMainSkeleton;

    //
    var id = (0, _GetIdSlug.GetIdSlug)();

    //

    var _useState = (0, _react.useState)({
        photo_arr: initial_photo_arr,
        photo_count: initial_photo_count,
        has_fetched: initial_photo_arr.length > 0,
        is_fetching: false
    }),
        _useState2 = _slicedToArray(_useState, 2),
        photo_state = _useState2[0],
        setPhotoState = _useState2[1];

    var photo_arr = photo_state.photo_arr,
        photo_count = photo_state.photo_count,
        has_fetched = photo_state.has_fetched,
        is_fetching = photo_state.is_fetching;

    //

    var ref_main = (0, _react.useRef)(null);

    //
    (0, _react.useEffect)(function () {
        initial_photo_arr.length == 0 && (0, _observerToDo2.default)({
            elm: ref_main.current,
            callback: function callback() {
                getData_API_Photo();
            }
        });
    }, []);function handleShowMorePhotos() {
        getData_API_Photo();
    }

    //
    return _react2.default.createElement(
        'div',
        { ref: ref_main, className: 'ProfilePhotoMain' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                { className: 'display-flex flex-wrap' },
                has_create ? _react2.default.createElement(
                    'div',
                    { className: 'ProfilePhotoMain_item' },
                    CreateElm
                ) : null,
                photo_arr.map(function (item) {
                    return _react2.default.createElement(
                        'div',
                        { key: item.id, className: 'ProfilePhotoMain_item' },
                        _react2.default.createElement(ProfilePhotoItem, _extends({ item: item }, item_props))
                    );
                })
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'padding-top-10px' },
            _react2.default.createElement(_ScreenBlurShowMore2.default, {
                title: title_show_more,
                is_show_more: photo_count > photo_arr.length,
                is_fetching: is_fetching && has_fetched,
                handleShowMore: handleShowMorePhotos
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'text-align-center font-700 font-18px text-third' },
            _react2.default.createElement(_NoItem2.default, {
                no_item: has_fetched && photo_arr.length == 0,
                title: title_no_item
            })
        ),
        _react2.default.createElement(_ComponentSkeleton2.default, {
            has_fetched: has_fetched,
            component: ProfilePhotoMainSkeleton
        })
    );
}

exports.default = ProfilePhotoMain;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/some_div/pic_square_div/PicSquareDiv.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/some_div/pic_square_div/PicSquareDiv.scss ***!
  \**************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PicSquareDiv img,\n.PicSquareDiv video {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}", "",{"version":3,"sources":["webpack://./src/component/some_div/pic_square_div/PicSquareDiv.scss"],"names":[],"mappings":"AACI;;EAEI,WAAA;EACA,YAAA;EACA,iBAAA;AAAR","sourcesContent":[".PicSquareDiv {\r\n    img,\r\n    video {\r\n        width: 100%;\r\n        height: 100%;\r\n        object-fit: cover;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/photo/_component/_main/ProfilePhotoMain.scss":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/photo/_component/_main/ProfilePhotoMain.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".ProfilePhotoMain_item {\n  width: 20%;\n}\n\n@media (max-width: 700px) {\n  .ProfilePhotoMain_item {\n    width: 25%;\n  }\n}\n@media (max-width: 500px) {\n  .ProfilePhotoMain_item {\n    width: 33.3%;\n  }\n}\n@media (max-width: 300px) {\n  .ProfilePhotoMain_item {\n    width: 50%;\n  }\n}\n@media (max-width: 150px) {\n  .ProfilePhotoMain_item {\n    width: 100%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/pages/user_profile/user_pages/photo/_component/_main/ProfilePhotoMain.scss"],"names":[],"mappings":"AAAA;EACI,UAAA;AACJ;;AAGA;EACI;IACI,UAAA;EAAN;AACF;AAGA;EACI;IACI,YAAA;EADN;AACF;AAIA;EACI;IACI,UAAA;EAFN;AACF;AAKA;EACI;IACI,WAAA;EAHN;AACF","sourcesContent":[".ProfilePhotoMain_item {\r\n    width: 20%;\r\n}\r\n\r\n//\r\n@media (max-width: 700px) {\r\n    .ProfilePhotoMain_item {\r\n        width: 25%;\r\n    }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n    .ProfilePhotoMain_item {\r\n        width: 33.3%;\r\n    }\r\n}\r\n\r\n@media (max-width: 300px) {\r\n    .ProfilePhotoMain_item {\r\n        width: 50%;\r\n    }\r\n}\r\n\r\n@media (max-width: 150px) {\r\n    .ProfilePhotoMain_item {\r\n        width: 100%;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/component/some_div/pic_square_div/PicSquareDiv.scss":
/*!*****************************************************************!*\
  !*** ./src/component/some_div/pic_square_div/PicSquareDiv.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PicSquareDiv_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./PicSquareDiv.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/some_div/pic_square_div/PicSquareDiv.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PicSquareDiv_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PicSquareDiv_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/user_profile/user_pages/photo/_component/_main/ProfilePhotoMain.scss":
/*!****************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/photo/_component/_main/ProfilePhotoMain.scss ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePhotoMain_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./ProfilePhotoMain.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/photo/_component/_main/ProfilePhotoMain.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePhotoMain_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePhotoMain_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_component_some_div_pic_square_div_PicSquareDiv_js-src_pages_user_profile_user_pages_photo-fdae3a.js.map