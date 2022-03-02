(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src__icons_svg_icon_public_IconPublic_js-src_pages_page_pages_about__main_FbPageAbout_js"],{

/***/ "./src/_handle_api/fb_page/page_about.js":
/*!***********************************************!*\
  !*** ./src/_handle_api/fb_page/page_about.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handle_API_FbPageAbout_R = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var handle_API_FbPageAbout_R = exports.handle_API_FbPageAbout_R = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
        var _ref2$page_id = _ref2.page_id,
            page_id = _ref2$page_id === undefined ? 0 : _ref2$page_id,
            _ref2$params = _ref2.params,
            params = _ref2$params === undefined ? {} : _ref2$params;
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _page_about.API_FbPageAbout_R)(_extends({
                            page_model: page_id
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

    return function handle_API_FbPageAbout_R(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _page_about = __webpack_require__(/*! ../../api/api_django/fb_page/page_about */ "./src/api/api_django/fb_page/page_about.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/_icons_svg/icon_public/IconPublic.js":
/*!**************************************************!*\
  !*** ./src/_icons_svg/icon_public/IconPublic.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
IconPublic.propTypes = {
    size_icon: _propTypes2.default.string,
    stroke: _propTypes2.default.string
};

IconPublic.defaultProps = {
    size_icon: '1rem',
    stroke: 'var(--md-color)'
};

//
function IconPublic(_ref) {
    var size_icon = _ref.size_icon,
        stroke = _ref.stroke;

    //
    return _react2.default.createElement(
        'svg',
        {
            width: size_icon,
            height: size_icon,
            viewBox: '0 0 200 200',
            fill: 'none',
            strokeWidth: '5',
            stroke: stroke
        },
        _react2.default.createElement('circle', { cx: '100', cy: '100', r: '85', strokeWidth: '10' }),
        _react2.default.createElement('line', {
            x1: '99.3965',
            y1: '16.1017',
            x2: '99.3965',
            y2: '183.898',
            stroke: 'black'
        }),
        _react2.default.createElement('line', { x1: '10', y1: '97.5', x2: '184.569', y2: '97.5' }),
        _react2.default.createElement('path', {
            d: 'M55.1915 101.148C55.1915 64.7981 61.6037 18.555 99.4181 18.4258C137.303 18.2964 144.809\r 64.595 144.809 101.148C144.809 137.701 137.301 184.26 99.4181 183.87C61.7454 183.482 55.1915\r 137.498 55.1915 101.148Z'
        }),
        _react2.default.createElement('path', {
            d: 'M44.1027 34.5106C44.1027 34.5106 63.6271 62.4681 100.771 62.4681C137.915 62.4681 158.596\r 34.5106 158.596 34.5106M44.1027 163.957C44.1027 163.957 58.2654 140.895 100.771 140.596C143.277\r 140.297 158.596 163.957 158.596 163.957'
        })
    );
}

exports.default = IconPublic;

/***/ }),

/***/ "./src/api/api_django/fb_page/page_about.js":
/*!**************************************************!*\
  !*** ./src/api/api_django/fb_page/page_about.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.API_FbPageAbout_R = undefined;

var _AxiosDjango = __webpack_require__(/*! ../_axios/AxiosDjango */ "./src/api/api_django/_axios/AxiosDjango.js");

var _AxiosDjango2 = _interopRequireDefault(_AxiosDjango);

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _page_about = __webpack_require__(/*! ../../../_default/fb_page/page_about */ "./src/_default/fb_page/page_about.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
var API_FbPageAbout_R = exports.API_FbPageAbout_R = function API_FbPageAbout_R(params) {
    return (0, _ConstAPI.API_FakeReal)((0, _page_about.default_fb_page_about_obj)(), function () {
        return (0, _AxiosDjango2.default)({
            url: 'api/facebook/fb-page-about-r/',
            method: 'GET',
            params: params
        });
    }, params);
};
//

/***/ }),

/***/ "./src/pages/page/pages/about/_components/head/FbPageAboutHead.js":
/*!************************************************************************!*\
  !*** ./src/pages/page/pages/about/_components/head/FbPageAboutHead.js ***!
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

__webpack_require__(/*! ./FbPageAboutHead.scss */ "./src/pages/page/pages/about/_components/head/FbPageAboutHead.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
FbPageAboutHead.propTypes = {};

//

// 
function FbPageAboutHead(_ref) {
    var title = _ref.title;

    //
    return _react2.default.createElement(
        'div',
        { className: 'FbPageAboutHead padding-bottom-5px border-bottom-blur' },
        _react2.default.createElement(
            'div',
            { className: 'FbPageAboutHead_title line-20px font-17px font-600 text-third' },
            title
        )
    );
}

exports.default = FbPageAboutHead;

/***/ }),

/***/ "./src/pages/page/pages/about/_main/FbPageAbout.js":
/*!*********************************************************!*\
  !*** ./src/pages/page/pages/about/_main/FbPageAbout.js ***!
  \*********************************************************/
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

// 

// 


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _page_home_preview = __webpack_require__(/*! ../../../../../_initial/page/page_home_preview */ "./src/_initial/page/page_home_preview.js");

var _page_about = __webpack_require__(/*! ../../../../../_handle_api/fb_page/page_about */ "./src/_handle_api/fb_page/page_about.js");

__webpack_require__(/*! ./FbPageAboutCommon.scss */ "./src/pages/page/pages/about/_main/FbPageAboutCommon.scss");

var _FbPageAboutContact = __webpack_require__(/*! ../contact/_main/FbPageAboutContact */ "./src/pages/page/pages/about/contact/_main/FbPageAboutContact.js");

var _FbPageAboutContact2 = _interopRequireDefault(_FbPageAboutContact);

var _FbPageAboutMore = __webpack_require__(/*! ../more/_main/FbPageAboutMore */ "./src/pages/page/pages/about/more/_main/FbPageAboutMore.js");

var _FbPageAboutMore2 = _interopRequireDefault(_FbPageAboutMore);

var _FbPageAboutGeneral = __webpack_require__(/*! ../general/_main/FbPageAboutGeneral */ "./src/pages/page/pages/about/general/_main/FbPageAboutGeneral.js");

var _FbPageAboutGeneral2 = _interopRequireDefault(_FbPageAboutGeneral);

__webpack_require__(/*! ./FbPageAbout.scss */ "./src/pages/page/pages/about/_main/FbPageAbout.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
FbPageAbout.propTypes = {};

//
function FbPageAbout(_ref) {

    // -----

    //
    var getData_API = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _page_about.handle_API_FbPageAbout_R)({ page_id: page_id });

                        case 2:
                            data = _context.sent;


                            setStateObj(function (state_obj) {
                                return _extends({}, state_obj, {
                                    about_obj: data,
                                    has_fetched: true,
                                    is_fetching: false
                                });
                            });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function getData_API() {
            return _ref2.apply(this, arguments);
        };
    }();

    // ----

    var page_id = _ref.page_id;

    //
    var _useState = (0, _react.useState)({
        about_obj: (0, _page_home_preview.initial_fb_page_hone_about)(),
        has_fetched: false,
        is_fetching: true
    }),
        _useState2 = _slicedToArray(_useState, 2),
        state_obj = _useState2[0],
        setStateObj = _useState2[1];

    var about_obj = state_obj.about_obj,
        has_fetched = state_obj.has_fetched,
        is_fetching = state_obj.is_fetching;
    var info_obj = about_obj.info_obj,
        like_obj = about_obj.like_obj,
        follow_obj = about_obj.follow_obj,
        site_obj = about_obj.site_obj,
        phone_obj = about_obj.phone_obj;

    //

    (0, _react.useEffect)(function () {
        getData_API();
    }, []);if (!has_fetched) {
        return null;
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'FbPageAbout margin-auto w-620px padding-y-16px padding-x-20px brs-8px-pc bg-primary box-shadow-1' },
        _react2.default.createElement(
            'div',
            { className: 'FbPageAbout_part' },
            _react2.default.createElement(_FbPageAboutGeneral2.default, {
                like_obj: like_obj,
                follow_obj: follow_obj
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'FbPageAbout_part' },
            _react2.default.createElement(_FbPageAboutContact2.default, {
                site_obj: site_obj,
                phone_obj: phone_obj,
                page_id: page_id
            })
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_FbPageAboutMore2.default, { info_obj: info_obj })
        )
    );
}

exports.default = FbPageAbout;

/***/ }),

/***/ "./src/pages/page/pages/about/contact/_main/FbPageAboutContact.js":
/*!************************************************************************!*\
  !*** ./src/pages/page/pages/about/contact/_main/FbPageAboutContact.js ***!
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

var _FPHomeAboutSite = __webpack_require__(/*! ../../../home/left/about/site/FPHomeAboutSite */ "./src/pages/page/pages/home/left/about/site/FPHomeAboutSite.js");

var _FPHomeAboutSite2 = _interopRequireDefault(_FPHomeAboutSite);

var _FPHomeAboutPhone = __webpack_require__(/*! ../../../home/left/about/phone/FPHomeAboutPhone */ "./src/pages/page/pages/home/left/about/phone/FPHomeAboutPhone.js");

var _FPHomeAboutPhone2 = _interopRequireDefault(_FPHomeAboutPhone);

var _FPHomeAboutChat = __webpack_require__(/*! ../../../home/left/about/chat/FPHomeAboutChat */ "./src/pages/page/pages/home/left/about/chat/FPHomeAboutChat.js");

var _FPHomeAboutChat2 = _interopRequireDefault(_FPHomeAboutChat);

var _FbPageAboutHead = __webpack_require__(/*! ../../_components/head/FbPageAboutHead */ "./src/pages/page/pages/about/_components/head/FbPageAboutHead.js");

var _FbPageAboutHead2 = _interopRequireDefault(_FbPageAboutHead);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
FbPageAboutContact.propTypes = {};

//
function FbPageAboutContact(_ref) {
    var site_obj = _ref.site_obj,
        phone_obj = _ref.phone_obj,
        page_id = _ref.page_id;

    //
    return _react2.default.createElement(
        'div',
        { className: 'FbPageAboutContact' },
        _react2.default.createElement(
            'div',
            { className: 'fb-page-about-head' },
            _react2.default.createElement(_FbPageAboutHead2.default, { title: 'ADDITIONAL CONTACT INFO' })
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                { className: 'fb-page-about-item' },
                _react2.default.createElement(_FPHomeAboutSite2.default, { site_obj: site_obj })
            ),
            _react2.default.createElement(
                'div',
                { className: 'fb-page-about-item' },
                _react2.default.createElement(_FPHomeAboutPhone2.default, { phone_obj: phone_obj })
            ),
            _react2.default.createElement(
                'div',
                { className: 'fb-page-about-item' },
                _react2.default.createElement(_FPHomeAboutChat2.default, { page_id: page_id })
            )
        )
    );
}

exports.default = FbPageAboutContact;

/***/ }),

/***/ "./src/pages/page/pages/about/general/_main/FbPageAboutGeneral.js":
/*!************************************************************************!*\
  !*** ./src/pages/page/pages/about/general/_main/FbPageAboutGeneral.js ***!
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

var _FPHomeAboutLike = __webpack_require__(/*! ../../../home/left/about/like/FPHomeAboutLike */ "./src/pages/page/pages/home/left/about/like/FPHomeAboutLike.js");

var _FPHomeAboutLike2 = _interopRequireDefault(_FPHomeAboutLike);

var _FPHomeAboutFollow = __webpack_require__(/*! ../../../home/left/about/follow/FPHomeAboutFollow */ "./src/pages/page/pages/home/left/about/follow/FPHomeAboutFollow.js");

var _FPHomeAboutFollow2 = _interopRequireDefault(_FPHomeAboutFollow);

var _FbPageAboutHead = __webpack_require__(/*! ../../_components/head/FbPageAboutHead */ "./src/pages/page/pages/about/_components/head/FbPageAboutHead.js");

var _FbPageAboutHead2 = _interopRequireDefault(_FbPageAboutHead);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
FbPageAboutGeneral.propTypes = {};

//

//
function FbPageAboutGeneral(_ref) {
    var like_obj = _ref.like_obj,
        follow_obj = _ref.follow_obj;

    //
    return _react2.default.createElement(
        'div',
        { className: 'FbPageAboutGeneral' },
        _react2.default.createElement(
            'div',
            { className: 'fb-page-about-head' },
            _react2.default.createElement(_FbPageAboutHead2.default, { title: 'GENERAL' })
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                { className: 'fb-page-about-item' },
                _react2.default.createElement(_FPHomeAboutLike2.default, { like_obj: like_obj })
            ),
            _react2.default.createElement(
                'div',
                { className: 'fb-page-about-item' },
                _react2.default.createElement(_FPHomeAboutFollow2.default, { follow_obj: follow_obj })
            )
        )
    );
}

exports.default = FbPageAboutGeneral;

/***/ }),

/***/ "./src/pages/page/pages/about/more/_main/FbPageAboutMore.js":
/*!******************************************************************!*\
  !*** ./src/pages/page/pages/about/more/_main/FbPageAboutMore.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FPHomeAboutInfo = __webpack_require__(/*! ../../../home/left/about/info/FPHomeAboutInfo */ "./src/pages/page/pages/home/left/about/info/FPHomeAboutInfo.js");

var _FPHomeAboutInfo2 = _interopRequireDefault(_FPHomeAboutInfo);

var _FbPageAboutHead = __webpack_require__(/*! ../../_components/head/FbPageAboutHead */ "./src/pages/page/pages/about/_components/head/FbPageAboutHead.js");

var _FbPageAboutHead2 = _interopRequireDefault(_FbPageAboutHead);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
FbPageAboutMore.propTypes = {};

//
function FbPageAboutMore(_ref) {
    var info_obj = _ref.info_obj;

    //
    return _react2.default.createElement(
        'div',
        { className: 'FbPageAboutMore' },
        _react2.default.createElement(
            'div',
            { className: 'fb-page-about-head' },
            _react2.default.createElement(_FbPageAboutHead2.default, { title: 'MORE INFO' })
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                { className: 'fb-page-about-item' },
                _react2.default.createElement(_FPHomeAboutInfo2.default, { info_obj: info_obj })
            )
        )
    );
}

exports.default = FbPageAboutMore;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/pages/about/_components/head/FbPageAboutHead.scss":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/pages/about/_components/head/FbPageAboutHead.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".device-mobile .FbPageAboutHead_title {\n  font-size: 15px;\n}", "",{"version":3,"sources":["webpack://./src/pages/page/pages/about/_components/head/FbPageAboutHead.scss"],"names":[],"mappings":"AAGI;EACI,eAAA;AAFR","sourcesContent":["// -----\r\n\r\n.device-mobile{\r\n    .FbPageAboutHead_title{\r\n        font-size: 15px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/pages/about/_main/FbPageAbout.scss":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/pages/about/_main/FbPageAbout.scss ***!
  \********************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".FbPageAbout_part {\n  margin-bottom: 30px;\n}\n\n.device-mobile .FbPageAbout {\n  width: 100%;\n  padding: 8px;\n}\n.device-mobile .FbPageAbout_part {\n  margin-bottom: 20px;\n}", "",{"version":3,"sources":["webpack://./src/pages/page/pages/about/_main/FbPageAbout.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;AACJ;;AAKI;EACI,WAAA;EACA,YAAA;AAFR;AAKI;EACI,mBAAA;AAHR","sourcesContent":[".FbPageAbout_part{\r\n    margin-bottom: 30px\r\n}\r\n\r\n// ------\r\n\r\n.device-mobile{\r\n    .FbPageAbout{\r\n        width: 100%;\r\n        padding: 8px;\r\n    }\r\n\r\n    .FbPageAbout_part{\r\n        margin-bottom: 20px\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/pages/about/_main/FbPageAboutCommon.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/pages/about/_main/FbPageAboutCommon.scss ***!
  \**************************************************************************************************************************************************************************/
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

/***/ "./src/pages/page/pages/about/_components/head/FbPageAboutHead.scss":
/*!**************************************************************************!*\
  !*** ./src/pages/page/pages/about/_components/head/FbPageAboutHead.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageAboutHead_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./FbPageAboutHead.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/pages/about/_components/head/FbPageAboutHead.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageAboutHead_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageAboutHead_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/page/pages/about/_main/FbPageAbout.scss":
/*!***********************************************************!*\
  !*** ./src/pages/page/pages/about/_main/FbPageAbout.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageAbout_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./FbPageAbout.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/pages/about/_main/FbPageAbout.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageAbout_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageAbout_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/page/pages/about/_main/FbPageAboutCommon.scss":
/*!*****************************************************************!*\
  !*** ./src/pages/page/pages/about/_main/FbPageAboutCommon.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageAboutCommon_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./FbPageAboutCommon.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/page/pages/about/_main/FbPageAboutCommon.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageAboutCommon_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbPageAboutCommon_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src__icons_svg_icon_public_IconPublic_js-src_pages_page_pages_about__main_FbPageAbout_js.js.map