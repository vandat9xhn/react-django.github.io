(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_api_api_django_no_token_fashion_APIFashionNoToken_js-src_component_carousel__main_Carouse-b3336e"],{

/***/ "./src/_custom_hooks/UseInterval.js":
/*!******************************************!*\
  !*** ./src/_custom_hooks/UseInterval.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useInterval = useInterval;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

//
function useInterval(time) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

    var skip_interval = (0, _react.useRef)(false);
    var mounted = (0, _react.useRef)(true);
    //
    (0, _react.useEffect)(function () {
        StartInterval();

        return function () {
            mounted.current = false;
        };
    }, []);
    //
    function StartInterval() {
        var interval = setInterval(function () {
            if (!mounted.current) {
                clearInterval(interval);
            } else if (!skip_interval.current) {
                callback();
            } else {
                skip_interval.current = false;
            }
        }, time);
    }

    function doSkipInterval() {
        skip_interval.current = true;
    }

    return [doSkipInterval];
}

/***/ }),

/***/ "./src/api/_common/API_IsLogin.js":
/*!****************************************!*\
  !*** ./src/api/_common/API_IsLogin.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// 


exports.API_IsLogin = API_IsLogin;
exports.API_IsLogin_URL = API_IsLogin_URL;

var _AxiosDjango = __webpack_require__(/*! ../api_django/_axios/AxiosDjango */ "./src/api/api_django/_axios/AxiosDjango.js");

var _AxiosDjango2 = _interopRequireDefault(_AxiosDjango);

var _AxiosNoToken = __webpack_require__(/*! ../api_django_no_token/_axios/AxiosNoToken */ "./src/api/api_django_no_token/_axios/AxiosNoToken.js");

var _AxiosNoToken2 = _interopRequireDefault(_AxiosNoToken);

var _ConstAPI = __webpack_require__(/*! ../_ConstAPI */ "./src/api/_ConstAPI.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
function API_IsLogin() {
    var conf_token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var conf_no_token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return localStorage.is_login && !_ConstAPI.is_api_fake ? (0, _AxiosDjango2.default)(conf_token) : (0, _AxiosNoToken2.default)(conf_no_token);
}

//
function API_IsLogin_URL() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var url_token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var url_no_token = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return API_IsLogin(_extends({}, config, { url: url_token }), _extends({}, config, { url: url_no_token }));
}

/***/ }),

/***/ "./src/api/api_django_no_token/fashion/APIFashionNoToken.js":
/*!******************************************************************!*\
  !*** ./src/api/api_django_no_token/fashion/APIFashionNoToken.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.API_FashionComment_L = exports.API_FashionRate_L = exports.API_FashionProduct_R = exports.API_FashionProduct_L = exports.API_FashionHotImage_L = exports.API_FashionShop_R = exports.API_FashionShop_L = undefined;

var _AxiosNoToken = __webpack_require__(/*! ../_axios/AxiosNoToken */ "./src/api/api_django_no_token/_axios/AxiosNoToken.js");

var _AxiosNoToken2 = _interopRequireDefault(_AxiosNoToken);

var _API_IsLogin = __webpack_require__(/*! ../../_common/API_IsLogin */ "./src/api/_common/API_IsLogin.js");

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _FashionDefault = __webpack_require__(/*! ../../../pages/fashion/_default/FashionDefault */ "./src/pages/fashion/_default/FashionDefault.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// list shop
var API_FashionShop_L = exports.API_FashionShop_L = function API_FashionShop_L() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0, _ConstAPI.API_FakeReal)(Array(6).fill(_FashionDefault.default_arr_shop[0]), function () {
        return (0, _AxiosNoToken2.default)({
            url: '/fashion-api/l-shop/',
            method: 'GET',
            params: params
        });
    }, params);
};
// retrieve shop
var API_FashionShop_R = exports.API_FashionShop_R = function API_FashionShop_R(id) {
    return (0, _ConstAPI.API_FakeReal)(_FashionDefault.default_arr_shop[0], function () {
        return (0, _AxiosNoToken2.default)({
            url: '/fashion-api/r-shop/' + id + '/',
            method: 'GET'
        });
    });
};

// hot image
var API_FashionHotImage_L = exports.API_FashionHotImage_L = function API_FashionHotImage_L() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0, _ConstAPI.API_FakeReal)(_FashionDefault.default_arr_hot_image, function () {
        return (0, _AxiosNoToken2.default)({
            url: '/fashion-api/l-hot-image/',
            method: 'GET',
            params: params
        });
    });
};

// product
var API_FashionProduct_L = exports.API_FashionProduct_L = function API_FashionProduct_L() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0, _ConstAPI.API_FakeReal)(Array(10).fill(_FashionDefault.default_arr_product[0]), function () {
        return (0, _AxiosNoToken2.default)({
            url: '/fashion-api/l-product/',
            method: 'GET',
            params: params
        });
    }, params);
};
//
var API_FashionProduct_R = exports.API_FashionProduct_R = function API_FashionProduct_R(id) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return (0, _ConstAPI.API_FakeReal)(_FashionDefault.default_arr_product[0], function () {
        return (0, _API_IsLogin.API_IsLogin_URL)({
            method: 'GET',
            params: params
        }, '/fashion-api/r-product-token/' + id + '/', '/fashion-api/r-product/' + id + '/');
    });
};

// rate
var API_FashionRate_L = exports.API_FashionRate_L = function API_FashionRate_L(params) {
    return (0, _AxiosNoToken2.default)({
        url: '/fashion-api/l-rate/',
        method: 'GET',
        params: params
    });
};

// comment
var API_FashionComment_L = exports.API_FashionComment_L = function API_FashionComment_L(params) {
    return (0, _ConstAPI.API_FakeReal)(_FashionDefault.default_arr_cmt, function () {
        return (0, _AxiosNoToken2.default)({
            url: '/fashion-api/l-comment/',
            method: 'GET',
            params: params
        });
    }, params);
};

/***/ }),

/***/ "./src/component/carousel/_main/Carousel.js":
/*!**************************************************!*\
  !*** ./src/component/carousel/_main/Carousel.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
//

//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _UseInterval = __webpack_require__(/*! ../../../_custom_hooks/UseInterval */ "./src/_custom_hooks/UseInterval.js");

var _useMounted = __webpack_require__(/*! ../../../_custom_hooks/useMounted */ "./src/_custom_hooks/useMounted.js");

var _IconsArrow = __webpack_require__(/*! ../../../_icons_svg/icons_arrow/IconsArrow */ "./src/_icons_svg/icons_arrow/IconsArrow.js");

var _IconsArrow2 = _interopRequireDefault(_IconsArrow);

__webpack_require__(/*! ./Carousel.scss */ "./src/component/carousel/_main/Carousel.scss");

var _CarouselItem = __webpack_require__(/*! ../item/CarouselItem */ "./src/component/carousel/item/CarouselItem.js");

var _CarouselItem2 = _interopRequireDefault(_CarouselItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
Carousel.propTypes = {
    vid_pics: _propTypes2.default.array.isRequired
};

//
function Carousel(props) {
    var vid_pics = props.vid_pics;
    //

    var _useInterval = (0, _UseInterval.useInterval)(6000, handleAutoNext),
        _useInterval2 = _slicedToArray(_useInterval, 1),
        doSkipInterval = _useInterval2[0];
    // state


    var _useState = (0, _react.useState)(1),
        _useState2 = _slicedToArray(_useState, 2),
        vid_pic_ix = _useState2[0],
        setVidPicIx = _useState2[1];
    // ref


    var mounted = (0, _useMounted.useMounted)();
    var btn_disable = (0, _react.useRef)(false);
    var transition_none = (0, _react.useRef)(false);
    var ref_count = (0, _react.useRef)(vid_pics.length);

    //
    (0, _react.useEffect)(function () {
        ref_count.current = vid_pics.length;
    }, [vid_pics]);

    /* --------------------- COMMON FUNC --------------------- */

    //
    function disableBtnNextPrev() {
        btn_disable.current = true;
        transition_none.current = false;
        //
        setTimeout(function () {
            btn_disable.current = false;
        }, 600);
    }
    //
    function startNextPrev() {
        disableBtnNextPrev();
        doSkipInterval();
    }

    //
    function changeImgIxNext() {
        setVidPicIx(function (vid_pic_ix) {
            if (vid_pic_ix == ref_count.current - 2) {
                setVidPicIx(ref_count.current - 1);
                //
                setTimeout(function () {
                    if (mounted) {
                        transition_none.current = true;
                        setVidPicIx(1);
                    }
                }, 501);
            } else if (vid_pic_ix < ref_count.current - 2) {
                setVidPicIx(vid_pic_ix + 1);
            }
        });
    }

    //
    function changeImgIxPrev() {
        setVidPicIx(function (vid_pic_ix) {
            if (vid_pic_ix == 1) {
                setVidPicIx(0);
                //
                setTimeout(function () {
                    transition_none.current = true;
                    setVidPicIx(ref_count.current - 2);
                }, 501);
            } else if (vid_pic_ix > 1) {
                setVidPicIx(vid_pic_ix - 1);
            }
        });
    }

    /* ------------------------- NEXT PREV ----------------------- */

    //
    function handleNext() {
        if (btn_disable.current) {
            return;
        }
        //
        startNextPrev();
        changeImgIxNext();
    }

    //
    function handlePrev() {
        if (btn_disable.current) {
            return;
        }
        //
        startNextPrev();
        changeImgIxPrev();
    }

    //
    function handleAutoNext() {
        if (btn_disable.current) {
            return;
        }
        //
        disableBtnNextPrev();
        changeImgIxNext();
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'Carousel position-rel wh-100' },
        _react2.default.createElement(
            'div',
            { className: 'Carousel_contain wh-100' },
            _react2.default.createElement(
                'div',
                {
                    className: 'Carousel_row position-rel display-flex ' + (transition_none.current ? 'Carousel_transition-none' : 'Carousel_transition'),
                    style: {
                        width: 100 * vid_pics.length + '%',
                        transform: 'translateX(-' + vid_pic_ix * 100 / vid_pics.length + '%)'
                    }
                },
                vid_pics.map(function (vid_pic, ix) {
                    return _react2.default.createElement(_CarouselItem2.default, {
                        key: 'Carousel_' + ix,
                        vid_pic: vid_pic,
                        width_vid_pic: 100 / vid_pics.length + '%'
                    });
                })
            ),
            _react2.default.createElement(
                'div',
                { className: 'Carousel_btn hv-opacity Carousel_btn-next' },
                _react2.default.createElement(
                    'div',
                    {
                        className: 'Carousel_icon Carousel_icon-next',
                        onClick: handleNext
                    },
                    _react2.default.createElement(_IconsArrow2.default, { x: 200, size_icon: '0.8rem' })
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'Carousel_btn hv-opacity Carousel_btn-prev' },
                _react2.default.createElement(
                    'div',
                    {
                        className: 'Carousel_icon Carousel_icon-pre',
                        onClick: handlePrev
                    },
                    _react2.default.createElement(_IconsArrow2.default, { x: 400, size_icon: '0.8rem' })
                )
            )
        )
    );
}

exports.default = Carousel;

/***/ }),

/***/ "./src/component/carousel/item/CarouselItem.js":
/*!*****************************************************!*\
  !*** ./src/component/carousel/item/CarouselItem.js ***!
  \*****************************************************/
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

__webpack_require__(/*! ./CarouselItem.scss */ "./src/component/carousel/item/CarouselItem.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 

// 
CarouselItem.propTypes = {
    vid_pic: _propTypes2.default.string,
    width_vid_pic: _propTypes2.default.string
};

// 

// 
function CarouselItem(props) {
    var vid_pic = props.vid_pic,
        width_vid_pic = props.width_vid_pic;

    // 

    return _react2.default.createElement(
        'div',
        {
            className: 'CarouselItem',
            style: { width: width_vid_pic }
        },
        (0, _VideoOrImage.VideoOrImage)(vid_pic)
    );
}

exports.default = CarouselItem;

/***/ }),

/***/ "./src/pages/fashion/components/head/_main/FashionH.js":
/*!*************************************************************!*\
  !*** ./src/pages/fashion/components/head/_main/FashionH.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
// 


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FashionHCommon = __webpack_require__(/*! ../__main_common/FashionHCommon */ "./src/pages/fashion/components/head/__main_common/FashionHCommon.js");

var _FashionHCommon2 = _interopRequireDefault(_FashionHCommon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
FashionH.propTypes = {};

//
function FashionH(props) {
    // state
    var _useState = (0, _react.useState)(''),
        _useState2 = _slicedToArray(_useState, 2),
        search = _useState2[0],
        setSearch = _useState2[1];

    //


    function handleSearchFashion(new_search) {
        new_search.trim() && setSearch(new_search);
    }

    //
    if (search) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/fashion/search?q=' + search, push: true });
    }
    //
    return _react2.default.createElement(
        'div',
        { className: 'FashionH' },
        _react2.default.createElement(_FashionHCommon2.default, {
            handled: false,
            handleSearchFashion: handleSearchFashion
        })
    );
}

exports.default = FashionH;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/carousel/_main/Carousel.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/carousel/_main/Carousel.scss ***!
  \*************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".Carousel_contain {\n  overflow: hidden;\n}\n\n.Carousel_row {\n  height: 100%;\n}\n\n.Carousel_transition {\n  transition: transform 0.5s;\n}\n\n.Carousel_transition-none {\n  transition: none;\n}\n\n.Carousel_btn {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: var(--md-bg-primary);\n  border-radius: 50%;\n  transition: transform 0.3s;\n  box-shadow: 0 0 1px 1px var(--md-border-blur);\n  cursor: pointer;\n}\n.Carousel_btn:hover {\n  transform: translateY(-50%) scale(1.5);\n}\n\n.Carousel_btn-next {\n  right: 0;\n}\n\n.Carousel_btn-prev {\n  left: 0;\n}\n\n.Carousel_icon {\n  width: 1.5rem;\n  height: 1.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@media (max-width: 40rem) {\n  .Carousel {\n    width: 95vw;\n  }\n\n  .Carousel_img img {\n    width: 95vw;\n    height: 12.5rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/component/carousel/_main/Carousel.scss"],"names":[],"mappings":"AAEA;EACI,gBAAA;AADJ;;AAKA;EACI,YAAA;AAFJ;;AAIA;EACI,0BAAA;AADJ;;AAGA;EACI,gBAAA;AAAJ;;AAIA;EACI,kBAAA;EACA,QAAA;EACA,2BAAA;EAEA,sCAAA;EACA,kBAAA;EACA,0BAAA;EACA,6CAAA;EACA,eAAA;AAFJ;AAGI;EACI,sCAAA;AADR;;AAKA;EACI,QAAA;AAFJ;;AAIA;EACI,OAAA;AADJ;;AAIA;EACI,aAAA;EACA,cAAA;EAEA,aAAA;EACA,uBAAA;EACA,mBAAA;AAFJ;;AAMA;EACI;IACI,WAAA;EAHN;;EAMM;IACI,WAAA;IACA,eAAA;EAHV;AACF","sourcesContent":["\r\n//\r\n.Carousel_contain{\r\n    overflow: hidden;\r\n}\r\n\r\n//\r\n.Carousel_row{\r\n    height: 100%;\r\n}\r\n.Carousel_transition{\r\n    transition: transform 0.5s;\r\n}\r\n.Carousel_transition-none{\r\n    transition: none;\r\n}\r\n\r\n//\r\n.Carousel_btn{\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n\r\n    background-color: var(--md-bg-primary);\r\n    border-radius: 50%;\r\n    transition: transform 0.3s;\r\n    box-shadow: 0 0 1px 1px var(--md-border-blur);\r\n    cursor: pointer;\r\n    &:hover{\r\n        transform: translateY(-50%) scale(1.5);\r\n    }\r\n}\r\n//\r\n.Carousel_btn-next{\r\n    right: 0;\r\n}\r\n.Carousel_btn-prev{\r\n    left: 0;\r\n}\r\n//\r\n.Carousel_icon{\r\n    width: 1.5rem;\r\n    height: 1.5rem;\r\n    \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n//\r\n@media (max-width: 40rem){\r\n    .Carousel{\r\n        width: 95vw;\r\n    }\r\n    .Carousel_img{\r\n        img{\r\n            width: 95vw;\r\n            height: 12.5rem;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/carousel/item/CarouselItem.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/carousel/item/CarouselItem.scss ***!
  \****************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".CarouselItem {\n  height: 100%;\n}\n.CarouselItem img {\n  width: 100%;\n  height: 100%;\n}", "",{"version":3,"sources":["webpack://./src/component/carousel/item/CarouselItem.scss"],"names":[],"mappings":"AACA;EACI,YAAA;AAAJ;AACI;EACI,WAAA;EACA,YAAA;AACR","sourcesContent":["\r\n.CarouselItem{\r\n    height: 100%;\r\n    img{\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/component/carousel/_main/Carousel.scss":
/*!****************************************************!*\
  !*** ./src/component/carousel/_main/Carousel.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Carousel_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Carousel.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/carousel/_main/Carousel.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Carousel_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Carousel_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/carousel/item/CarouselItem.scss":
/*!*******************************************************!*\
  !*** ./src/component/carousel/item/CarouselItem.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CarouselItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./CarouselItem.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/carousel/item/CarouselItem.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CarouselItem_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CarouselItem_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_api_api_django_no_token_fashion_APIFashionNoToken_js-src_component_carousel__main_Carouse-b3336e.js.map