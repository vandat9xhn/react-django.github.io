(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_group_page_pages_media_albums__main_GPMediaAlbums_js"],{

/***/ "./src/_default/fb_group/page_media_albums.js":
/*!****************************************************!*\
  !*** ./src/_default/fb_group/page_media_albums.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default_fb_group_page_media_album_arr = undefined;

var _default_bool = __webpack_require__(/*! ../_common/default_bool */ "./src/_default/_common/default_bool.js");

var _default_content = __webpack_require__(/*! ../_common/default_content */ "./src/_default/_common/default_content.js");

var _default_id = __webpack_require__(/*! ../_common/default_id */ "./src/_default/_common/default_id.js");

var _default_image = __webpack_require__(/*! ../_common/default_image */ "./src/_default/_common/default_image.js");

var _getDefaultArr = __webpack_require__(/*! ../_common/getDefaultArr */ "./src/_default/_common/getDefaultArr.js");

//
var default_fb_group_page_media_album_obj = function default_fb_group_page_media_album_obj() {
    var id = (0, _default_id.getRandomId)();

    return {
        id: id,
        title: (0, _default_content.getRandomContent)().slice(0, (0, _default_id.getRandomNumber)(20, 50)),
        img: (0, _default_image.getRandomImg)(),
        link_to: '/post/album/' + id,

        photo_count: (0, _default_id.getRandomNumber)(1, 3),
        video_count: (0, _default_bool.getRandomBool)() ? (0, _default_id.getRandomNumber)(0, 3) : 0
    };
};

var default_fb_group_page_media_album_arr = exports.default_fb_group_page_media_album_arr = function default_fb_group_page_media_album_arr() {
    return (0, _getDefaultArr.getDefaultArr)(default_fb_group_page_media_album_obj, 15, 15);
};

/***/ }),

/***/ "./src/_handle_api/fb_group/page_media_albums.js":
/*!*******************************************************!*\
  !*** ./src/_handle_api/fb_group/page_media_albums.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handle_API_FbGroupMediaAlbum_L = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var handle_API_FbGroupMediaAlbum_L = exports.handle_API_FbGroupMediaAlbum_L = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
        var _ref2$c_count = _ref2.c_count,
            c_count = _ref2$c_count === undefined ? 0 : _ref2$c_count,
            _ref2$group_id = _ref2.group_id,
            group_id = _ref2$group_id === undefined ? 0 : _ref2$group_id,
            _ref2$params = _ref2.params,
            params = _ref2$params === undefined ? {} : _ref2$params;
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _page_media_albums.API_FbGroupMediaAlbum_L)(_extends({
                            page: 1,
                            size: 20,

                            c_count: c_count,
                            group_model: group_id
                        }, params));

                    case 2:
                        res = _context.sent;
                        return _context.abrupt('return', res.data);

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function handle_API_FbGroupMediaAlbum_L(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _page_media_albums = __webpack_require__(/*! ../../api/api_django/fb_group/page_media_albums */ "./src/api/api_django/fb_group/page_media_albums.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/api/api_django/fb_group/page_media_albums.js":
/*!**********************************************************!*\
  !*** ./src/api/api_django/fb_group/page_media_albums.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.API_FbGroupMediaAlbum_L = undefined;

var _AxiosDjango = __webpack_require__(/*! ../_axios/AxiosDjango */ "./src/api/api_django/_axios/AxiosDjango.js");

var _AxiosDjango2 = _interopRequireDefault(_AxiosDjango);

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _page_media_albums = __webpack_require__(/*! ../../../_default/fb_group/page_media_albums */ "./src/_default/fb_group/page_media_albums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 

//
var API_FbGroupMediaAlbum_L = exports.API_FbGroupMediaAlbum_L = function API_FbGroupMediaAlbum_L(params) {
    return (0, _ConstAPI.API_FakeReal)((0, _page_media_albums.default_fb_group_page_media_album_arr)(), function () {
        return (0, _AxiosDjango2.default)({
            url: 'api/facebook/group-media-album-l/',
            method: 'GET',
            params: params
        });
    }, params);
};
//

/***/ }),

/***/ "./src/pages/group_page/_components/media_pics/item/GPMediaPicsItem.js":
/*!*****************************************************************************!*\
  !*** ./src/pages/group_page/_components/media_pics/item/GPMediaPicsItem.js ***!
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

__webpack_require__(/*! ./GPMediaPicsItem.scss */ "./src/pages/group_page/_components/media_pics/item/GPMediaPicsItem.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GPMediaPicsItem.propTypes = {};

//

//
function GPMediaPicsItem(_ref) {
    var img = _ref.img,
        link_to = _ref.link_to,
        children = _ref.children;

    //
    return _react2.default.createElement(
        _reactRouterDom.Link,
        {
            className: 'GPMediaPicsItem display-block h-100per brs-8px color-inherit hv-after-shadow-05',
            to: link_to
        },
        _react2.default.createElement(
            'div',
            { className: 'padding-top-100per pos-rel' },
            _react2.default.createElement('img', {
                className: 'pos-abs-100 brs-8px border-blur object-fit-cover',
                src: img,
                alt: ''
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'GPMediaPicsItem_title' },
            children
        )
    );
}

exports.default = GPMediaPicsItem;

/***/ }),

/***/ "./src/pages/group_page/pages/media/albums/_main/GPMediaAlbums.js":
/*!************************************************************************!*\
  !*** ./src/pages/group_page/pages/media/albums/_main/GPMediaAlbums.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _page_media_albums = __webpack_require__(/*! ../../../../../../_handle_api/fb_group/page_media_albums */ "./src/_handle_api/fb_group/page_media_albums.js");

var _useObserverShowMore2 = __webpack_require__(/*! ../../../../../../_hooks/useObserverShowMore */ "./src/_hooks/useObserverShowMore.js");

var _GPMediaPicsItem = __webpack_require__(/*! ../../../../_components/media_pics/item/GPMediaPicsItem */ "./src/pages/group_page/_components/media_pics/item/GPMediaPicsItem.js");

var _GPMediaPicsItem2 = _interopRequireDefault(_GPMediaPicsItem);

__webpack_require__(/*! ./GPMediaAlbums.scss */ "./src/pages/group_page/pages/media/albums/_main/GPMediaAlbums.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
GPMediaAlbums.propTypes = {};

//

//

//
function GPMediaAlbums(_ref) {
    var group_id = _ref.group_id;

    //
    var ref_fake_elm = (0, _react.useRef)(null);

    //

    var _useObserverShowMore = (0, _useObserverShowMore2.useObserverShowMore)({ handle_API_L: handle_API_L }),
        data_state = _useObserverShowMore.data_state,
        is_max = _useObserverShowMore.is_max,
        getData_API = _useObserverShowMore.getData_API,
        observerShowMore = _useObserverShowMore.observerShowMore;

    var data_arr = data_state.data_arr,
        has_fetched = data_state.has_fetched;

    //

    (0, _react.useEffect)(function () {
        getData_API();

        observerShowMore({
            fake_elm_end: ref_fake_elm.current,
            rootMargin: '0px',
            way_scroll: 'to_bottom',
            margin: 0
        });
    }, []);

    //
    function handle_API_L(c_count) {
        return (0, _page_media_albums.handle_API_FbGroupMediaAlbum_L)({
            c_count: c_count,
            group_id: group_id
        });
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'GPMediaAlbums' },
        _react2.default.createElement(
            'ul',
            { className: 'display-flex flex-wrap list-none' },
            data_arr.map(function (item, ix) {
                return _react2.default.createElement(
                    'li',
                    {
                        key: item.id,
                        className: 'GPMediaAlbums_item gr-page-media-item'
                    },
                    _react2.default.createElement(
                        _GPMediaPicsItem2.default,
                        { img: item.img, link_to: item.link_to },
                        _react2.default.createElement(
                            'div',
                            { className: 'GPMediaAlbums_item_title padding-5px' },
                            _react2.default.createElement(
                                'div',
                                { className: 'line-20px font-600' },
                                item.title
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'font-13px line-16px text-secondary' },
                                item.video_count ? item.video_count + ' video' + (item.video_count >= 2 ? 's' : '') : null,
                                item.video_count && item.photo_count ? ' · ' : null,
                                item.photo_count ? item.photo_count + ' photo' + (item.photo_count >= 2 ? 's' : '') : null
                            )
                        )
                    )
                );
            })
        ),
        _react2.default.createElement('div', { ref: ref_fake_elm, className: 'h-1px' }),
        is_max.current ? null : _react2.default.createElement('div', { className: 'h-250px' })
    );
}

exports.default = GPMediaAlbums;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_components/media_pics/item/GPMediaPicsItem.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_components/media_pics/item/GPMediaPicsItem.scss ***!
  \****************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".GPMediaPicsItem:hover .GPMediaPicsItem_title {\n  text-decoration: underline;\n}", "",{"version":3,"sources":["webpack://./src/pages/group_page/_components/media_pics/item/GPMediaPicsItem.scss"],"names":[],"mappings":"AAEQ;EACI,0BAAA;AADZ","sourcesContent":[".GPMediaPicsItem{\r\n    &:hover{\r\n        .GPMediaPicsItem_title{\r\n            text-decoration: underline;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/media/albums/_main/GPMediaAlbums.scss":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/media/albums/_main/GPMediaAlbums.scss ***!
  \***********************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".GPMediaAlbums_item {\n  padding: 8px 4px;\n}", "",{"version":3,"sources":["webpack://./src/pages/group_page/pages/media/albums/_main/GPMediaAlbums.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;AACJ","sourcesContent":[".GPMediaAlbums_item {\r\n    padding: 8px 4px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/group_page/_components/media_pics/item/GPMediaPicsItem.scss":
/*!*******************************************************************************!*\
  !*** ./src/pages/group_page/_components/media_pics/item/GPMediaPicsItem.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GPMediaPicsItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./GPMediaPicsItem.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/_components/media_pics/item/GPMediaPicsItem.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GPMediaPicsItem_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GPMediaPicsItem_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/group_page/pages/media/albums/_main/GPMediaAlbums.scss":
/*!**************************************************************************!*\
  !*** ./src/pages/group_page/pages/media/albums/_main/GPMediaAlbums.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GPMediaAlbums_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./GPMediaAlbums.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group_page/pages/media/albums/_main/GPMediaAlbums.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GPMediaAlbums_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GPMediaAlbums_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_group_page_pages_media_albums__main_GPMediaAlbums_js.js.map