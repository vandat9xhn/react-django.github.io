(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_phone_laptop_pages_home__main_PLHome_js"],{

/***/ "./src/_default/phone/home_banner_hot.js":
/*!***********************************************!*\
  !*** ./src/_default/phone/home_banner_hot.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default_pl_home_banner_hot_obj = exports.default_pl_home_hot_arr = exports.default_pl_home_banner_arr = undefined;

var _default_id = __webpack_require__(/*! ../_common/default_id */ "./src/_default/_common/default_id.js");

var _default_image = __webpack_require__(/*! ../_common/default_image */ "./src/_default/_common/default_image.js");

var _getDefaultArr = __webpack_require__(/*! ../_common/getDefaultArr */ "./src/_default/_common/getDefaultArr.js");

var _getRandomFromArr = __webpack_require__(/*! ../_common/getRandomFromArr */ "./src/_default/_common/getRandomFromArr.js");

var _preorder_iphone = __webpack_require__(/*! ../../../image/preorder_iphone13.png */ "./image/preorder_iphone13.png");

var _preorder_iphone2 = _interopRequireDefault(_preorder_iphone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var default_pl_home_banner_obj = function default_pl_home_banner_obj() {
    return {
        id: (0, _default_id.getRandomId)(),
        vid_pic: (0, _default_image.getRandomImg)(),
        link_to: '/phone-laptop',
        title_1: (0, _getRandomFromArr.getRandomFromArr)(['Đặt Trước Vivo X70Pro', 'asda dasd as', '32 23 324 234', '2as asd3 adfas d']),
        title_2: (0, _getRandomFromArr.getRandomFromArr)(['Tặng ngay 3 triệu', 'ada asd asd', 'Giá từ 2 triệu'])
    };
};
//
var default_pl_home_banner_arr = exports.default_pl_home_banner_arr = function default_pl_home_banner_arr() {
    return (0, _getDefaultArr.getDefaultArr)(default_pl_home_banner_obj, 10, 10);
};

//
var default_pl_home_hot_obj = function default_pl_home_hot_obj() {
    return {
        id: (0, _default_id.getRandomId)(),
        img: (0, _default_image.getRandomImg)(),
        link_to: '/phone-laptop'
    };
};

var default_pl_home_hot_arr = exports.default_pl_home_hot_arr = function default_pl_home_hot_arr() {
    return (0, _getDefaultArr.getDefaultArr)(default_pl_home_hot_obj, 4, 4);
};

//
var default_pl_home_banner_hot_obj = exports.default_pl_home_banner_hot_obj = function default_pl_home_banner_hot_obj() {
    return {
        banner_arr: default_pl_home_banner_arr(),
        hot_arr: default_pl_home_hot_arr(),
        img_event: _preorder_iphone2.default
    };
};

/***/ }),

/***/ "./src/_handle_api/phone/home_banner_hot.js":
/*!**************************************************!*\
  !*** ./src/_handle_api/phone/home_banner_hot.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handle_API_PLBannerHot_R = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var handle_API_PLBannerHot_R = exports.handle_API_PLBannerHot_R = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
        var _ref2$params = _ref2.params,
            params = _ref2$params === undefined ? {} : _ref2$params;
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _home_banner_hot.API_PLBannerHot_R)(_extends({}, params));

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

    return function handle_API_PLBannerHot_R(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _home_banner_hot = __webpack_require__(/*! ../../api/api_django_no_token/phone_laptop/home_banner_hot */ "./src/api/api_django_no_token/phone_laptop/home_banner_hot.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/_handle_api/phone/list.js":
/*!***************************************!*\
  !*** ./src/_handle_api/phone/list.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handle_API_PhoneLaptop_L = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var handle_API_PhoneLaptop_L = exports.handle_API_PhoneLaptop_L = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
        var _ref2$c_count = _ref2.c_count,
            c_count = _ref2$c_count === undefined ? 0 : _ref2$c_count,
            _ref2$params = _ref2.params,
            params = _ref2$params === undefined ? {} : _ref2$params;
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _PhoneLaptopAPI.API_PhoneLaptop_L)(_extends({
                            c_count: c_count,
                            page: 1,
                            size: 20
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

    return function handle_API_PhoneLaptop_L(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _PhoneLaptopAPI = __webpack_require__(/*! ../../api/api_django_no_token/phone_laptop/PhoneLaptopAPI */ "./src/api/api_django_no_token/phone_laptop/PhoneLaptopAPI.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/_initial/phone/InitialPhone.js":
/*!********************************************!*\
  !*** ./src/_initial/phone/InitialPhone.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
        value: true
}));
//
var initial_phone_arr = exports.initial_phone_arr = function initial_phone_arr() {
        return [{
                id: 0,
                name: '',

                cpu: '',
                os: '',
                ram: '',
                internal_memory: '',
                camera: '',
                memory_stick: '',
                product_type: '',

                new_price: 0,
                old_price: 0,
                discount: '',
                installment: '',

                is_coming: false,
                in_stock: false,

                type_arr: [{ img: '', title: '' }],

                rating_avg: 0,
                rating_count: 0,

                gift_str: '',
                cheap_price: 0
        }];
};

/***/ }),

/***/ "./src/_some_function/getCarouselList.js":
/*!***********************************************!*\
  !*** ./src/_some_function/getCarouselList.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getCarouselList = getCarouselList;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//
function getCarouselList(_ref) {
    var _ref$list = _ref.list,
        list = _ref$list === undefined ? [] : _ref$list;

    return [list.slice(-1)[0]].concat(_toConsumableArray(list), [list[0]]);
}

/***/ }),

/***/ "./src/api/api_django_no_token/phone_laptop/home_banner_hot.js":
/*!*********************************************************************!*\
  !*** ./src/api/api_django_no_token/phone_laptop/home_banner_hot.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.API_PLBannerHot_R = undefined;

var _AxiosNoToken = __webpack_require__(/*! ../_axios/AxiosNoToken */ "./src/api/api_django_no_token/_axios/AxiosNoToken.js");

var _AxiosNoToken2 = _interopRequireDefault(_AxiosNoToken);

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _home_banner_hot = __webpack_require__(/*! ../../../_default/phone/home_banner_hot */ "./src/_default/phone/home_banner_hot.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
var API_PLBannerHot_R = exports.API_PLBannerHot_R = function API_PLBannerHot_R() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0, _ConstAPI.API_FakeReal)((0, _home_banner_hot.default_pl_home_banner_hot_obj)(), function () {
        return (0, _AxiosNoToken2.default)({
            url: 'api/phone/banner-hot-r/',
            method: 'GET',
            params: params
        });
    });
};
//

/***/ }),

/***/ "./src/pages/phone_laptop/components/links/PLLinks.js":
/*!************************************************************!*\
  !*** ./src/pages/phone_laptop/components/links/PLLinks.js ***!
  \************************************************************/
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

__webpack_require__(/*! ./PLLinks.scss */ "./src/pages/phone_laptop/components/links/PLLinks.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PLLinks.propTypes = {};

//

//
function PLLinks(_ref) {
    var link_arr = _ref.link_arr,
        class_main = _ref.class_main,
        class_row = _ref.class_row,
        class_item = _ref.class_item;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLLinks ' + class_main },
        _react2.default.createElement(
            'div',
            { className: 'PLLinks_row display-flex ' + class_row },
            link_arr.map(function (item, ix) {
                return _react2.default.createElement(
                    _reactRouterDom.Link,
                    {
                        key: ix,
                        to: item.link_to,
                        className: 'PLLinks_item padding-x-10px padding-y-5px border-blur color-inherit hv-cl-blue ' + class_item
                    },
                    item.name
                );
            })
        )
    );
}

exports.default = PLLinks;

/***/ }),

/***/ "./src/pages/phone_laptop/components/row_products/_main/PLRowProducts.js":
/*!*******************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/row_products/_main/PLRowProducts.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Constant = __webpack_require__(/*! ../../../../../_constant/Constant */ "./src/_constant/Constant.js");

var _useScrollToX2 = __webpack_require__(/*! ../../../../../_hooks/useScrollToX */ "./src/_hooks/useScrollToX.js");

var _NextPrevDiv = __webpack_require__(/*! ../../../../../component/some_div/next_prev_div/NextPrevDiv */ "./src/component/some_div/next_prev_div/NextPrevDiv.js");

var _NextPrevDiv2 = _interopRequireDefault(_NextPrevDiv);

var _PLProduct = __webpack_require__(/*! ../../../../../component/pl_product/_main/PLProduct */ "./src/component/pl_product/_main/PLProduct.js");

var _PLProduct2 = _interopRequireDefault(_PLProduct);

__webpack_require__(/*! ./PLRowProducts.scss */ "./src/pages/phone_laptop/components/row_products/_main/PLRowProducts.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PLRowProducts.propTypes = {};

//

//

//

//
function PLRowProducts(_ref) {
    var product_arr = _ref.product_arr,
        use_compare = _ref.use_compare,
        use_type = _ref.use_type;

    //
    var ref_scroll_elm = (0, _react.useRef)(null);

    //

    var _useScrollToX = (0, _useScrollToX2.useScrollToX)({
        ref_scroll_elm: ref_scroll_elm,
        getItemElm: function getItemElm() {
            return ref_scroll_elm.current.getElementsByClassName('PLRowProducts_item')[0];
        }
    }),
        is_has_next = _useScrollToX.is_has_next,
        is_has_prev = _useScrollToX.is_has_prev,
        handleNext = _useScrollToX.handleNext,
        handlePrev = _useScrollToX.handlePrev,
        hasNextPrev = _useScrollToX.hasNextPrev;

    //


    (0, _react.useEffect)(function () {
        hasNextPrev();
    }, [product_arr.length]);

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLRowProducts pos-rel' },
        _react2.default.createElement(
            'div',
            {
                ref: ref_scroll_elm,
                className: 'PLRowProducts_contain overflow-x-auto scroll-height-0'
            },
            _react2.default.createElement(
                'div',
                { className: 'PLRowProducts_row display-flex' },
                product_arr.map(function (product_obj, index) {
                    return _react2.default.createElement(
                        'div',
                        {
                            key: product_obj.id,
                            className: 'PLRowProducts_item flex-shrink-0 border-blur'
                        },
                        _react2.default.createElement(_PLProduct2.default, {
                            product_obj: product_obj,
                            use_compare: use_compare,
                            use_type: use_type
                        })
                    );
                })
            )
        ),
        _Constant.IS_MOBILE ? null : _react2.default.createElement(
            'div',
            { className: 'text-white' },
            _react2.default.createElement(_NextPrevDiv2.default, {
                is_btn_circle: false,
                is_has_next: is_has_next,
                is_has_prev: is_has_prev
                // size_icon={size_icon}
                , handleNext: handleNext,
                handlePrev: handlePrev
            })
        )
    );
}

exports.default = PLRowProducts;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/_main/PLHome.js":
/*!***********************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/_main/PLHome.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Constant = __webpack_require__(/*! ../../../../../_constant/Constant */ "./src/_constant/Constant.js");

var _PLHomeBannerHot = __webpack_require__(/*! ../banner_hot/_main/PLHomeBannerHot */ "./src/pages/phone_laptop/pages/home/banner_hot/_main/PLHomeBannerHot.js");

var _PLHomeBannerHot2 = _interopRequireDefault(_PLHomeBannerHot);

var _PLHomeOnlineSale = __webpack_require__(/*! ../online_sale/_main/PLHomeOnlineSale */ "./src/pages/phone_laptop/pages/home/online_sale/_main/PLHomeOnlineSale.js");

var _PLHomeOnlineSale2 = _interopRequireDefault(_PLHomeOnlineSale);

var _PLHomeSeen = __webpack_require__(/*! ../seen/_main/PLHomeSeen */ "./src/pages/phone_laptop/pages/home/seen/_main/PLHomeSeen.js");

var _PLHomeSeen2 = _interopRequireDefault(_PLHomeSeen);

var _PLHomeBestPhones = __webpack_require__(/*! ../best_phones/_main/PLHomeBestPhones */ "./src/pages/phone_laptop/pages/home/best_phones/_main/PLHomeBestPhones.js");

var _PLHomeBestPhones2 = _interopRequireDefault(_PLHomeBestPhones);

var _PLHomeBestLaptops = __webpack_require__(/*! ../best_laptops/_main/PLHomeBestLaptops */ "./src/pages/phone_laptop/pages/home/best_laptops/_main/PLHomeBestLaptops.js");

var _PLHomeBestLaptops2 = _interopRequireDefault(_PLHomeBestLaptops);

var _PLHomeBrands = __webpack_require__(/*! ../brands/_main/PLHomeBrands */ "./src/pages/phone_laptop/pages/home/brands/_main/PLHomeBrands.js");

var _PLHomeBrands2 = _interopRequireDefault(_PLHomeBrands);

var _PLHomeNew = __webpack_require__(/*! ../new/_main/PLHomeNew */ "./src/pages/phone_laptop/pages/home/new/_main/PLHomeNew.js");

var _PLHomeNew2 = _interopRequireDefault(_PLHomeNew);

var _PLHomeTech = __webpack_require__(/*! ../tech/_main/PLHomeTech */ "./src/pages/phone_laptop/pages/home/tech/_main/PLHomeTech.js");

var _PLHomeTech2 = _interopRequireDefault(_PLHomeTech);

var _PLHomeNav = __webpack_require__(/*! ../nav/_main/PLHomeNav */ "./src/pages/phone_laptop/pages/home/nav/_main/PLHomeNav.js");

var _PLHomeNav2 = _interopRequireDefault(_PLHomeNav);

__webpack_require__(/*! ./PLHome.scss */ "./src/pages/phone_laptop/pages/home/_main/PLHome.scss");

__webpack_require__(/*! ./PLHomeCommon.scss */ "./src/pages/phone_laptop/pages/home/_main/PLHomeCommon.scss");

__webpack_require__(/*! ../_mobile_css/PLHomeMb.scss */ "./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeMb.scss");

__webpack_require__(/*! ../_mobile_css/PLHomeBannerHotMb.scss */ "./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeBannerHotMb.scss");

__webpack_require__(/*! ../_mobile_css/PLHomeBestLaptopsMb.scss */ "./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeBestLaptopsMb.scss");

__webpack_require__(/*! ../_mobile_css/PLHomeBestPhonesMb.scss */ "./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeBestPhonesMb.scss");

__webpack_require__(/*! ../_mobile_css/PLHomeBrandsMb.scss */ "./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeBrandsMb.scss");

__webpack_require__(/*! ../_mobile_css/PLHomeNewMb.scss */ "./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeNewMb.scss");

__webpack_require__(/*! ../_mobile_css/PLHomeOnlineSaleMb.scss */ "./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeOnlineSaleMb.scss");

__webpack_require__(/*! ../_mobile_css/PLHomeTechMb.scss */ "./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeTechMb.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//

//
PLHome.propTypes = {};

//

//
function PLHome(props) {
    //
    (0, _react.useEffect)(function () {
        document.title = 'Phone Laptop';
    }, []);

    //
    return _react2.default.createElement(
        'div',
        {
            className: 'PLHome bg-primary ' + (_Constant.IS_MOBILE ? 'PLHome-mobile' : '')
        },
        _react2.default.createElement(
            'div',
            { className: 'fashion-width' },
            _react2.default.createElement(
                'div',
                { className: 'PLHome_part PLHome_banner padding-top-20px' },
                _react2.default.createElement(_PLHomeBannerHot2.default, null)
            ),
            _Constant.IS_MOBILE ? _react2.default.createElement(
                'div',
                { className: 'PLHome_part' },
                _react2.default.createElement(_PLHomeNav2.default, null)
            ) : null,
            _react2.default.createElement(
                'div',
                { className: 'PLHome_part' },
                _react2.default.createElement(_PLHomeOnlineSale2.default, null)
            ),
            _react2.default.createElement(
                'div',
                { className: 'PLHome_part' },
                _react2.default.createElement(_PLHomeSeen2.default, null)
            ),
            _react2.default.createElement(
                'div',
                { className: 'PLHome_part' },
                _react2.default.createElement(_PLHomeBestPhones2.default, null)
            ),
            _react2.default.createElement(
                'div',
                { className: 'PLHome_part' },
                _react2.default.createElement(_PLHomeBestLaptops2.default, null)
            ),
            _react2.default.createElement(
                'div',
                { className: 'PLHome_part' },
                _react2.default.createElement(_PLHomeBrands2.default, null)
            ),
            _react2.default.createElement(
                'div',
                { className: 'PLHome_part' },
                _react2.default.createElement(_PLHomeNew2.default, null)
            ),
            _react2.default.createElement(
                'div',
                { className: 'PLHome_part' },
                _react2.default.createElement(
                    'div',
                    { className: 'PLHome_tech_app display-flex' },
                    _react2.default.createElement(
                        'div',
                        { className: 'PLHome_tech' },
                        _react2.default.createElement(_PLHomeTech2.default, null)
                    ),
                    _react2.default.createElement('div', { className: 'PLHome_app' })
                )
            )
        )
    );
}

exports.default = PLHome;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/banner_hot/_main/PLHomeBannerHot.js":
/*!*******************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/banner_hot/_main/PLHomeBannerHot.js ***!
  \*******************************************************************************/
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

var _home_banner_hot = __webpack_require__(/*! ../../../../../../_handle_api/phone/home_banner_hot */ "./src/_handle_api/phone/home_banner_hot.js");

var _PLHomeBanner = __webpack_require__(/*! ../banner/_main/PLHomeBanner */ "./src/pages/phone_laptop/pages/home/banner_hot/banner/_main/PLHomeBanner.js");

var _PLHomeBanner2 = _interopRequireDefault(_PLHomeBanner);

var _PLHomeHot = __webpack_require__(/*! ../hot/_main/PLHomeHot */ "./src/pages/phone_laptop/pages/home/banner_hot/hot/_main/PLHomeHot.js");

var _PLHomeHot2 = _interopRequireDefault(_PLHomeHot);

__webpack_require__(/*! ./PLHomeBannerHot.scss */ "./src/pages/phone_laptop/pages/home/banner_hot/_main/PLHomeBannerHot.scss");

var _Constant = __webpack_require__(/*! ../../../../../../_constant/Constant */ "./src/_constant/Constant.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
PLHomeBannerHot.propTypes = {};

_PLHomeHot2.default;
//
function PLHomeBannerHot(props) {

    // ---- API

    //
    var getData_BannerHot = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _home_banner_hot.handle_API_PLBannerHot_R)({});

                        case 2:
                            data = _context.sent;


                            // console.log(data);

                            setStateObj(_extends({}, state_obj, {
                                banner_arr: data.banner_arr,
                                hot_arr: data.hot_arr,
                                img_event: data.img_event,
                                has_fetched: true
                            }));

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function getData_BannerHot() {
            return _ref.apply(this, arguments);
        };
    }();

    //


    //
    var _useState = (0, _react.useState)({
        banner_arr: [] || 0,
        hot_arr: [] || 0,
        img_event: '',

        has_fetched: false
    }),
        _useState2 = _slicedToArray(_useState, 2),
        state_obj = _useState2[0],
        setStateObj = _useState2[1];

    var banner_arr = state_obj.banner_arr,
        hot_arr = state_obj.hot_arr,
        img_event = state_obj.img_event,
        has_fetched = state_obj.has_fetched;

    //

    (0, _react.useEffect)(function () {
        getData_BannerHot();
    }, []);return _react2.default.createElement(
        'div',
        { className: 'PLHomeBannerHot' },
        has_fetched ? _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(
                'div',
                { className: 'PLHomeBannerHot_row display-flex' },
                _react2.default.createElement(
                    'div',
                    { className: 'PLHomeBannerHot_left flex-grow-1 margin-right-10px' },
                    _react2.default.createElement(_PLHomeBanner2.default, {
                        banner_arr: banner_arr,
                        has_fetched: has_fetched
                    })
                ),
                _Constant.IS_MOBILE ? null : _react2.default.createElement(
                    'div',
                    { className: 'PLHomeBannerHot_right flex-shrink-0' },
                    _react2.default.createElement(_PLHomeHot2.default, { hot_arr: hot_arr })
                )
            ),
            _react2.default.createElement('img', {
                className: 'PLHomeBannerHot_waiting w-100per',
                src: img_event,
                alt: ''
            })
        ) : _react2.default.createElement('div', { className: 'PLHomeBannerHot_not_fetched' })
    );
}

exports.default = PLHomeBannerHot;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/banner_hot/banner/_main/PLHomeBanner.js":
/*!***********************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/banner_hot/banner/_main/PLHomeBanner.js ***!
  \***********************************************************************************/
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

var _Constant = __webpack_require__(/*! ../../../../../../../_constant/Constant */ "./src/_constant/Constant.js");

var _getCarouselList = __webpack_require__(/*! ../../../../../../../_some_function/getCarouselList */ "./src/_some_function/getCarouselList.js");

var _Carousel = __webpack_require__(/*! ../../../../../../../component/carousel/_main/Carousel */ "./src/component/carousel/_main/Carousel.js");

var _Carousel2 = _interopRequireDefault(_Carousel);

var _PLHomeCarouselTitle = __webpack_require__(/*! ../carousel_title/PLHomeCarouselTitle */ "./src/pages/phone_laptop/pages/home/banner_hot/banner/carousel_title/PLHomeCarouselTitle.js");

var _PLHomeCarouselTitle2 = _interopRequireDefault(_PLHomeCarouselTitle);

__webpack_require__(/*! ./PLHomeBanner.scss */ "./src/pages/phone_laptop/pages/home/banner_hot/banner/_main/PLHomeBanner.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLHomeBanner.propTypes = {};

//
function PLHomeBanner(_ref) {
    var banner_arr = _ref.banner_arr;

    //
    var _useState = (0, _react.useState)({
        vid_pic_arr: (0, _getCarouselList.getCarouselList)({
            list: banner_arr.map(function (item) {
                return item.vid_pic;
            })
        }),
        link_to_arr: (0, _getCarouselList.getCarouselList)({
            list: banner_arr.map(function (item) {
                return item.link_to;
            })
        }),
        active_id: banner_arr[0].id
    }),
        _useState2 = _slicedToArray(_useState, 2),
        state_obj = _useState2[0],
        setStateObj = _useState2[1];

    var vid_pic_arr = state_obj.vid_pic_arr,
        link_to_arr = state_obj.link_to_arr,
        active_id = state_obj.active_id;

    // -----

    //

    function handleChangeActiveId(new_ix) {
        setStateObj(function (state_obj) {
            return _extends({}, state_obj, {
                active_id: (0, _getCarouselList.getCarouselList)({ list: banner_arr })[new_ix].id
            });
        });
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLHomeBanner display-flex flex-col h-100per' },
        _react2.default.createElement(
            'div',
            { className: 'PLHomeBanner_pics flex-grow-1' },
            _react2.default.createElement(_Carousel2.default, {
                vid_pics: vid_pic_arr,
                link_to_arr: link_to_arr,
                has_fetched: true,
                handleCarouselMove: handleChangeActiveId
            })
        ),
        _Constant.IS_MOBILE ? null : _react2.default.createElement(
            'div',
            { className: 'PLHomeBanner_title line-14px font-12px text-align-center' },
            _react2.default.createElement(_PLHomeCarouselTitle2.default, {
                title_arr: banner_arr,
                active_id: active_id
            })
        )
    );
}

exports.default = PLHomeBanner;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/banner_hot/banner/carousel_title/PLHomeCarouselTitle.js":
/*!***************************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/banner_hot/banner/carousel_title/PLHomeCarouselTitle.js ***!
  \***************************************************************************************************/
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

__webpack_require__(/*! ./PLHomeCarouselTitle.scss */ "./src/pages/phone_laptop/pages/home/banner_hot/banner/carousel_title/PLHomeCarouselTitle.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLHomeCarouselTitle.propTypes = {};

//

//
function PLHomeCarouselTitle(_ref) {
    var title_arr = _ref.title_arr,
        active_id = _ref.active_id;

    //
    var ref_scroll_elm = (0, _react.useRef)(null);

    //
    (0, _react.useEffect)(function () {
        var active_ix = title_arr.findIndex(function (item) {
            return item.id == active_id;
        });

        ref_scroll_elm.current.scrollTo(active_ix <= 4 ? 0 : (active_ix - 4) * ref_scroll_elm.current.getBoundingClientRect().width * 0.2, 0);
    }, [active_id]);

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLHomeCarouselTitle pos-rel' },
        _react2.default.createElement(
            'ul',
            {
                ref: ref_scroll_elm,
                className: 'PLHomeCarouselTitle_row display-flex list-none overflow-x-auto scroll-height-0'
            },
            title_arr.map(function (item) {
                return _react2.default.createElement(
                    'li',
                    {
                        key: item.id,
                        className: 'PLHomeCarouselTitle_item flex-shrink-0 padding-x-5px padding-y-10px ' + (active_id == item.id ? 'PLHomeCarouselTitle_item-active font-700' : 'font-500')
                    },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { className: 'color-inherit', to: item.link_to },
                        _react2.default.createElement(
                            'div',
                            { className: 'PLHomeCarouselTitle_item_contain' },
                            _react2.default.createElement(
                                'div',
                                null,
                                item.title_1
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                item.title_2
                            )
                        )
                    )
                );
            })
        )
    );
}

exports.default = PLHomeCarouselTitle;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/banner_hot/hot/_main/PLHomeHot.js":
/*!*****************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/banner_hot/hot/_main/PLHomeHot.js ***!
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLHomeHot.propTypes = {};

//
function PLHomeHot(_ref) {
    var hot_arr = _ref.hot_arr;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLHomeHot' },
        _react2.default.createElement(
            'ul',
            { className: 'PLHomeHot_row display-flex flex-wrap list-none' },
            hot_arr.map(function (item, ix) {
                return _react2.default.createElement(
                    'li',
                    { key: item.id, className: 'PLHomeHot_item w-50per margin-bottom-10px padding-left-10px' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: item.link_to },
                        _react2.default.createElement('img', {
                            className: 'brs-4px object-fit-cover',
                            src: item.img,
                            alt: '',
                            width: '170',
                            height: '170'
                        })
                    )
                );
            })
        )
    );
}

exports.default = PLHomeHot;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/best_laptops/_main/PLHomeBestLaptops.js":
/*!***********************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/best_laptops/_main/PLHomeBestLaptops.js ***!
  \***********************************************************************************/
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

//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Constant = __webpack_require__(/*! ../../../../../../_constant/Constant */ "./src/_constant/Constant.js");

var _observerToDo = __webpack_require__(/*! ../../../../../../_some_function/observerToDo */ "./src/_some_function/observerToDo.js");

var _observerToDo2 = _interopRequireDefault(_observerToDo);

var _InitialPhone = __webpack_require__(/*! ../../../../../../_initial/phone/InitialPhone */ "./src/_initial/phone/InitialPhone.js");

var _list = __webpack_require__(/*! ../../../../../../_handle_api/phone/list */ "./src/_handle_api/phone/list.js");

var _PLRowProducts = __webpack_require__(/*! ../../../../components/row_products/_main/PLRowProducts */ "./src/pages/phone_laptop/components/row_products/_main/PLRowProducts.js");

var _PLRowProducts2 = _interopRequireDefault(_PLRowProducts);

var _PLHBestLaptopsLinks = __webpack_require__(/*! ../links/PLHBestLaptopsLinks */ "./src/pages/phone_laptop/pages/home/best_laptops/links/PLHBestLaptopsLinks.js");

var _PLHBestLaptopsLinks2 = _interopRequireDefault(_PLHBestLaptopsLinks);

var _PLHBestLaptopsContainMb = __webpack_require__(/*! ../contain_mobile/PLHBestLaptopsContainMb */ "./src/pages/phone_laptop/pages/home/best_laptops/contain_mobile/PLHBestLaptopsContainMb.js");

var _PLHBestLaptopsContainMb2 = _interopRequireDefault(_PLHBestLaptopsContainMb);

__webpack_require__(/*! ./PLHomeBestLaptops.scss */ "./src/pages/phone_laptop/pages/home/best_laptops/_main/PLHomeBestLaptops.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
PLHomeBestLaptops.propTypes = {};

//
function PLHomeBestLaptops(props) {

    // ----

    //
    var getData_BestLaptops = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _ref2, data;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _list.handle_API_PhoneLaptop_L)({
                                params: {
                                    type: ['laptop', 'tablet'],
                                    form: 'best',
                                    size: 10
                                }
                            });

                        case 2:
                            _ref2 = _context.sent;
                            data = _ref2.data;


                            setStateObj(_extends({}, state_obj, {
                                product_arr: data.slice(0, _Constant.IS_MOBILE ? 6 : 10),
                                count_laptop: 80,
                                count_tablet: 42,
                                link_arr: [{
                                    name: 'Laptop Asus',
                                    link_to: '/phone-laptop/1'
                                }, {
                                    name: 'Laptop HP',
                                    link_to: '/phone-laptop/2'
                                }, {
                                    name: 'iPad Air 4 Wifi 64GB',
                                    link_to: '/phone-laptop/3'
                                }],
                                has_fetched: true
                            }));

                        case 5:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function getData_BestLaptops() {
            return _ref.apply(this, arguments);
        };
    }();

    //


    //
    var _useState = (0, _react.useState)({
        product_arr: [] || 0,
        count: 0,
        link_arr: [] || 0,
        has_fetched: false
    }),
        _useState2 = _slicedToArray(_useState, 2),
        state_obj = _useState2[0],
        setStateObj = _useState2[1];

    var product_arr = state_obj.product_arr,
        count_laptop = state_obj.count_laptop,
        count_tablet = state_obj.count_tablet,
        link_arr = state_obj.link_arr,
        has_fetched = state_obj.has_fetched;

    //

    var ref_main_elm = (0, _react.useRef)(null);

    //
    (0, _react.useEffect)(function () {
        (0, _observerToDo2.default)({
            elm: ref_main_elm.current,
            callback: getData_BestLaptops
        });
    }, []);return _react2.default.createElement(
        'div',
        { ref: ref_main_elm, className: 'PLHomeBestLaptops' },
        _react2.default.createElement(
            'div',
            { className: 'PLHomeBestLaptops_head flex-between-center margin-bottom-15px' },
            _react2.default.createElement(
                'h2',
                { className: 'PLHomeBestLaptops_title pl-home-title' },
                'LAPTOP, TABLET N\u1ED4I B\u1EACT NH\u1EA4T'
            ),
            _react2.default.createElement(_PLHBestLaptopsLinks2.default, {
                link_arr: link_arr,
                count_laptop: count_laptop,
                count_tablet: count_tablet
            })
        ),
        has_fetched ? _react2.default.createElement(
            'div',
            { className: 'PLHomeBestLaptops_contain' },
            _Constant.IS_MOBILE ? _react2.default.createElement(_PLHBestLaptopsContainMb2.default, {
                product_arr: product_arr,
                count_laptop: count_laptop,
                count_tablet: count_tablet
            }) : _react2.default.createElement(_PLRowProducts2.default, {
                product_arr: product_arr,
                use_type: false,
                use_compare: false
            })
        ) : _react2.default.createElement('div', { className: 'PLHomeBestLaptops_not_fetched' })
    );
}

exports.default = PLHomeBestLaptops;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/best_laptops/contain_mobile/PLHBestLaptopsContainMb.js":
/*!**************************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/best_laptops/contain_mobile/PLHBestLaptopsContainMb.js ***!
  \**************************************************************************************************/
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

var _PLProduct = __webpack_require__(/*! ../../../../../../component/pl_product/_main/PLProduct */ "./src/component/pl_product/_main/PLProduct.js");

var _PLProduct2 = _interopRequireDefault(_PLProduct);

__webpack_require__(/*! ./PLHBestLaptopsContainMb.scss */ "./src/pages/phone_laptop/pages/home/best_laptops/contain_mobile/PLHBestLaptopsContainMb.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PLHBestLaptopsContainMb.propTypes = {};

//

// 
function PLHBestLaptopsContainMb(_ref) {
    var product_arr = _ref.product_arr,
        count_laptop = _ref.count_laptop,
        count_tablet = _ref.count_tablet;

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'ul',
            { className: 'display-flex flex-wrap list-none' },
            product_arr.map(function (product_obj) {
                return _react2.default.createElement(
                    'li',
                    { key: product_obj.id, className: 'PLHBestLaptopsContainMb_item' },
                    _react2.default.createElement(_PLProduct2.default, {
                        product_obj: product_obj,
                        use_type: false,
                        use_compare: false
                    })
                );
            })
        ),
        [{
            count: count_laptop,
            name: 'laptop',
            link_to: '/phone-laptop-laptops'
        }, { count: count_tablet, name: 'tablet', link_to: '' }].map(function (item, ix) {
            return _react2.default.createElement(
                _reactRouterDom.Link,
                {
                    key: ix,
                    className: 'display-block margin-top-10px margin-x-10px padding-y-8px border-blur brs-4px text-align-center color-inherit cursor-pointer',
                    to: item.link_to
                },
                'Xem t\u1EA5t c\u1EA3 ',
                _react2.default.createElement(
                    'b',
                    null,
                    item.count
                ),
                ' ',
                item.name
            );
        })
    );
}

exports.default = PLHBestLaptopsContainMb;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/best_laptops/links/PLHBestLaptopsLinks.js":
/*!*************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/best_laptops/links/PLHBestLaptopsLinks.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PLLinks = __webpack_require__(/*! ../../../../components/links/PLLinks */ "./src/pages/phone_laptop/components/links/PLLinks.js");

var _PLLinks2 = _interopRequireDefault(_PLLinks);

__webpack_require__(/*! ./PLHBestLaptopsLinks.scss */ "./src/pages/phone_laptop/pages/home/best_laptops/links/PLHBestLaptopsLinks.scss");

var _Constant = __webpack_require__(/*! ../../../../../../_constant/Constant */ "./src/_constant/Constant.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
//

//


//
PLHBestLaptopsLinks.propTypes = {};

//
function PLHBestLaptopsLinks(_ref) {
    var link_arr = _ref.link_arr,
        count_laptop = _ref.count_laptop,
        count_tablet = _ref.count_tablet;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLHBestLaptopsLinks' },
        _react2.default.createElement(_PLLinks2.default, {
            link_arr: [].concat(_toConsumableArray(link_arr), _toConsumableArray(_Constant.IS_MOBILE ? [] : [{
                link_to: '/phone-laptop-phones',
                name: _react2.default.createElement(
                    'span',
                    null,
                    'Xem t\u1EA5t c\u1EA3 ',
                    _react2.default.createElement(
                        'b',
                        null,
                        count_laptop
                    ),
                    ' ',
                    'laptop'
                )
            }, {
                link_to: '/phone-laptop-phones',
                name: _react2.default.createElement(
                    'span',
                    null,
                    'Xem t\u1EA5t c\u1EA3 ',
                    _react2.default.createElement(
                        'b',
                        null,
                        count_tablet
                    ),
                    ' ',
                    'tablet'
                )
            }])),
            class_item: 'PLHBestLaptopsLinks_item margin-left-10px'
        })
    );
}

exports.default = PLHBestLaptopsLinks;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/best_phones/_main/PLHomeBestPhones.js":
/*!*********************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/best_phones/_main/PLHomeBestPhones.js ***!
  \*********************************************************************************/
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

//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Constant = __webpack_require__(/*! ../../../../../../_constant/Constant */ "./src/_constant/Constant.js");

var _observerToDo = __webpack_require__(/*! ../../../../../../_some_function/observerToDo */ "./src/_some_function/observerToDo.js");

var _observerToDo2 = _interopRequireDefault(_observerToDo);

var _InitialPhone = __webpack_require__(/*! ../../../../../../_initial/phone/InitialPhone */ "./src/_initial/phone/InitialPhone.js");

var _list = __webpack_require__(/*! ../../../../../../_handle_api/phone/list */ "./src/_handle_api/phone/list.js");

var _PLProduct = __webpack_require__(/*! ../../../../../../component/pl_product/_main/PLProduct */ "./src/component/pl_product/_main/PLProduct.js");

var _PLProduct2 = _interopRequireDefault(_PLProduct);

var _PLHBestPhonesLinks = __webpack_require__(/*! ../links/PLHBestPhonesLinks */ "./src/pages/phone_laptop/pages/home/best_phones/links/PLHBestPhonesLinks.js");

var _PLHBestPhonesLinks2 = _interopRequireDefault(_PLHBestPhonesLinks);

__webpack_require__(/*! ./PLHomeBestPhones.scss */ "./src/pages/phone_laptop/pages/home/best_phones/_main/PLHomeBestPhones.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
PLHomeBestPhones.propTypes = {};

//
function PLHomeBestPhones(props) {

    // ----

    //
    var getData_BestPhones = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _ref2, data, new_count;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _list.handle_API_PhoneLaptop_L)({
                                params: {
                                    type: 'phone',
                                    form: 'best',
                                    size: 10
                                }
                            });

                        case 2:
                            _ref2 = _context.sent;
                            data = _ref2.data;
                            new_count = _ref2.count;


                            setStateObj(_extends({}, state_obj, {
                                product_arr: data.slice(0, _Constant.IS_MOBILE ? 6 : 10),
                                count: new_count,
                                link_arr: [{
                                    name: 'Samsung Galaxy A72',
                                    link_to: '/phone-laptop/1'
                                }, {
                                    name: 'iPhone 12 Pro Max 128GB',
                                    link_to: '/phone-laptop/2'
                                }, {
                                    name: 'Oppo Reno6 Z 5G',
                                    link_to: '/phone-laptop/3'
                                }],
                                has_fetched: true
                            }));

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function getData_BestPhones() {
            return _ref.apply(this, arguments);
        };
    }();

    //


    //
    var _useState = (0, _react.useState)({
        product_arr: [] || 0,
        count: 0,
        link_arr: [] || 0,
        has_fetched: false
    }),
        _useState2 = _slicedToArray(_useState, 2),
        state_obj = _useState2[0],
        setStateObj = _useState2[1];

    var product_arr = state_obj.product_arr,
        count = state_obj.count,
        link_arr = state_obj.link_arr,
        has_fetched = state_obj.has_fetched;

    //

    var ref_main_elm = (0, _react.useRef)(null);

    //
    (0, _react.useEffect)(function () {
        (0, _observerToDo2.default)({
            elm: ref_main_elm.current,
            callback: getData_BestPhones
        });
    }, []);return _react2.default.createElement(
        'div',
        { ref: ref_main_elm, className: 'PLHomeBestPhones' },
        _react2.default.createElement(
            'div',
            { className: 'PLHomeBestPhones_head flex-between-center margin-bottom-15px' },
            _react2.default.createElement(
                'h2',
                { className: 'PLHomeBestPhones_title pl-home-title' },
                '\u0110I\u1EC6N THO\u1EA0I N\u1ED4I B\u1EACT NH\u1EA4T'
            ),
            _react2.default.createElement(_PLHBestPhonesLinks2.default, { link_arr: link_arr, count: count })
        ),
        has_fetched ? _react2.default.createElement(
            'div',
            { className: 'PLHomeBestPhones_contain' },
            _react2.default.createElement(
                'ul',
                { className: 'PLHomeBestPhones_row display-flex flex-wrap list-none' },
                product_arr.map(function (product_obj) {
                    return _react2.default.createElement(
                        'li',
                        {
                            key: product_obj.id,
                            className: 'PLHomeBestPhones_item'
                        },
                        _react2.default.createElement(_PLProduct2.default, {
                            product_obj: product_obj,
                            use_type: false,
                            use_compare: false
                        })
                    );
                })
            )
        ) : _react2.default.createElement('div', { className: 'PLHomeBestPhones_not_fetched' })
    );
}

exports.default = PLHomeBestPhones;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/best_phones/links/PLHBestPhonesLinks.js":
/*!***********************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/best_phones/links/PLHBestPhonesLinks.js ***!
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

var _Constant = __webpack_require__(/*! ../../../../../../_constant/Constant */ "./src/_constant/Constant.js");

var _PLLinks = __webpack_require__(/*! ../../../../components/links/PLLinks */ "./src/pages/phone_laptop/components/links/PLLinks.js");

var _PLLinks2 = _interopRequireDefault(_PLLinks);

__webpack_require__(/*! ./PLHBestPhonesLinks.scss */ "./src/pages/phone_laptop/pages/home/best_phones/links/PLHBestPhonesLinks.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
//

//

//


//
PLHBestPhonesLinks.propTypes = {};

//
function PLHBestPhonesLinks(_ref) {
    var link_arr = _ref.link_arr,
        count = _ref.count;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLHBestPhonesLinks' },
        _react2.default.createElement(_PLLinks2.default, {
            link_arr: _Constant.IS_MOBILE ? link_arr : [].concat(_toConsumableArray(link_arr), [{
                link_to: '/phone-laptop-phones',
                name: _react2.default.createElement(
                    'span',
                    null,
                    'Xem t\u1EA5t c\u1EA3 ',
                    _react2.default.createElement(
                        'b',
                        null,
                        count
                    ),
                    ' \u0111i\u1EC7n tho\u1EA1i'
                )
            }]),
            class_item: 'PLHBestPhonesLinks_item margin-left-10px'
        })
    );
}

exports.default = PLHBestPhonesLinks;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/brands/_main/PLHomeBrands.js":
/*!************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/brands/_main/PLHomeBrands.js ***!
  \************************************************************************/
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _list = __webpack_require__(/*! ../../../../../../_handle_api/phone/list */ "./src/_handle_api/phone/list.js");

__webpack_require__(/*! ./PLHomeBrands.scss */ "./src/pages/phone_laptop/pages/home/brands/_main/PLHomeBrands.scss");

var _getDefaultArr = __webpack_require__(/*! ../../../../../../_default/_common/getDefaultArr */ "./src/_default/_common/getDefaultArr.js");

var _default_image = __webpack_require__(/*! ../../../../../../_default/_common/default_image */ "./src/_default/_common/default_image.js");

var _default_id = __webpack_require__(/*! ../../../../../../_default/_common/default_id */ "./src/_default/_common/default_id.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
PLHomeBrands.propTypes = {};

//
function PLHomeBrands(props) {

    // ----

    //
    var getData_New = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _list.handle_API_PhoneLaptop_L)({
                                params: {}
                            });

                        case 2:
                            res = _context.sent;


                            setStateObj(_extends({}, state_obj, {
                                new_arr: (0, _getDefaultArr.getDefaultArr)(_default_image.getRandomImg, 3, 3).map(function (item) {
                                    return {
                                        id: (0, _default_id.getRandomId)(),
                                        img: item,
                                        link_to: '/phone-laptop'
                                    };
                                }),
                                has_fetched: true
                            }));

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function getData_New() {
            return _ref.apply(this, arguments);
        };
    }();

    //


    //
    var _useState = (0, _react.useState)({
        new_arr: [] || 0,

        has_fetched: false
    }),
        _useState2 = _slicedToArray(_useState, 2),
        state_obj = _useState2[0],
        setStateObj = _useState2[1];

    var new_arr = state_obj.new_arr,
        has_fetched = state_obj.has_fetched;

    //

    (0, _react.useEffect)(function () {
        getData_New();
    }, []);return _react2.default.createElement(
        'div',
        { className: 'PLHomeBrands' },
        _react2.default.createElement(
            'h2',
            { className: 'PLHomeBrands_title pl-home-title-md margin-bottom-15px' },
            'CHUY\xCAN TRANG TH\u01AF\u01A0NG HI\u1EC6U'
        ),
        _react2.default.createElement(
            'div',
            { className: 'PLHomeBrands_contain' },
            _react2.default.createElement(
                'ul',
                { className: 'PLHomeBrands_row flex-between-center list-none overflow-x-auto' },
                new_arr.map(function (item, ix) {
                    return _react2.default.createElement(
                        'li',
                        { key: item.id, className: 'PLHomeBrands_item flex-shrink-0' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            {
                                className: 'PLHomeBrands_item_contain pos-rel display-block',
                                to: item.link_to
                            },
                            _react2.default.createElement('img', {
                                className: 'pos-abs top-0 left-0 wh-100 object-fit-cover brs-4px',
                                src: item.img,
                                alt: ''
                            })
                        )
                    );
                })
            )
        )
    );
}

exports.default = PLHomeBrands;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/nav/_main/PLHomeNav.js":
/*!******************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/nav/_main/PLHomeNav.js ***!
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

__webpack_require__(/*! ./PLHomeNav.scss */ "./src/pages/phone_laptop/pages/home/nav/_main/PLHomeNav.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var NAV_ARR = [{
    name: 'Điện thoại',
    label: null,
    link_to: '/phone-laptop-phones'
}, {
    name: 'Laptop',
    label: null,
    link_to: '/phone-laptop-laptops'
}, {
    name: 'Tablet',
    label: null,
    link_to: ''
}, {
    name: 'Phụ kiện',
    label: null,
    link_to: ''
}, {
    name: 'Đồng hồ\nthông minh',
    label: null,
    link_to: ''
}, {
    name: 'Đồng hồ\nthời trang',
    label: null,
    link_to: ''
}, {
    name: 'Pc\nMáy in',
    label: null,
    link_to: ''
}, {
    name: 'Máy cũ\ngiá rẻ',
    label: null,
    link_to: ''
}, {
    name: 'Sim\nthẻ cào',
    label: '-5%',
    link_to: ''
}, {
    name: 'Điện nước\ntrả góp',
    label: null,
    link_to: ''
}];

//

//
PLHomeNav.propTypes = {};

//
function PLHomeNav(props) {
    //
    return _react2.default.createElement(
        'div',
        { className: 'PLHomeNav padding-x-10px text-align-center line-16px font-12px' },
        _react2.default.createElement(
            'nav',
            { className: 'display-flex space-between flex-wrap' },
            NAV_ARR.map(function (item, ix) {
                return _react2.default.createElement(
                    _reactRouterDom.Link,
                    {
                        key: ix,
                        className: 'PLHomeNav_item pos-rel display-block margin-bottom-6px padding-y-5px brs-4px border-blur color-inherit',
                        to: item.link_to
                    },
                    _react2.default.createElement(
                        'div',
                        { className: 'wh-100 display-flex-center' },
                        item.name
                    ),
                    item.label ? _react2.default.createElement(
                        'div',
                        { className: 'pos-abs right-0 top-0 padding-x-2px brs-3px bg-fashion-mall line-11px font-9px text-white' },
                        item.label
                    ) : null
                );
            })
        )
    );
}

exports.default = PLHomeNav;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/new/_main/PLHomeNew.js":
/*!******************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/new/_main/PLHomeNew.js ***!
  \******************************************************************/
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _list = __webpack_require__(/*! ../../../../../../_handle_api/phone/list */ "./src/_handle_api/phone/list.js");

__webpack_require__(/*! ./PLHomeNew.scss */ "./src/pages/phone_laptop/pages/home/new/_main/PLHomeNew.scss");

var _getDefaultArr = __webpack_require__(/*! ../../../../../../_default/_common/getDefaultArr */ "./src/_default/_common/getDefaultArr.js");

var _default_image = __webpack_require__(/*! ../../../../../../_default/_common/default_image */ "./src/_default/_common/default_image.js");

var _default_id = __webpack_require__(/*! ../../../../../../_default/_common/default_id */ "./src/_default/_common/default_id.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
PLHomeNew.propTypes = {};

//
function PLHomeNew(props) {

    // ----

    //
    var getData_New = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _list.handle_API_PhoneLaptop_L)({
                                params: {}
                            });

                        case 2:
                            res = _context.sent;


                            setStateObj(_extends({}, state_obj, {
                                new_arr: (0, _getDefaultArr.getDefaultArr)(_default_image.getRandomImg, 3, 3).map(function (item) {
                                    return {
                                        id: (0, _default_id.getRandomId)(),
                                        img: item,
                                        link_to: '/phone-laptop'
                                    };
                                }),
                                has_fetched: true
                            }));

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function getData_New() {
            return _ref.apply(this, arguments);
        };
    }();

    //


    //
    var _useState = (0, _react.useState)({
        new_arr: [] || 0,

        has_fetched: false
    }),
        _useState2 = _slicedToArray(_useState, 2),
        state_obj = _useState2[0],
        setStateObj = _useState2[1];

    var new_arr = state_obj.new_arr,
        has_fetched = state_obj.has_fetched;

    //

    (0, _react.useEffect)(function () {
        getData_New();
    }, []);return _react2.default.createElement(
        'div',
        { className: 'PLHomeNew' },
        _react2.default.createElement(
            'h2',
            { className: 'PLHomeNew_title pl-home-title-md margin-bottom-15px' },
            'S\u1EA2N PH\u1EA8M M\u1EDAI'
        ),
        _react2.default.createElement(
            'div',
            { className: 'PLHomeNew_contain' },
            _react2.default.createElement(
                'ul',
                { className: 'PLHomeNew_row flex-between-center list-none overflow-x-auto' },
                new_arr.map(function (item, ix) {
                    return _react2.default.createElement(
                        'li',
                        {
                            key: item.id,
                            className: 'PLHomeNew_item flex-shrink-0'
                        },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            {
                                className: 'PLHomeNew_item_contain pos-rel display-block',
                                to: item.link_to
                            },
                            _react2.default.createElement('img', {
                                className: 'pos-abs top-0 left-0 wh-100 object-fit-cover brs-4px',
                                src: item.img,
                                alt: ''
                            })
                        )
                    );
                })
            )
        )
    );
}

exports.default = PLHomeNew;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/online_sale/_main/PLHomeOnlineSale.js":
/*!*********************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/online_sale/_main/PLHomeOnlineSale.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _list = __webpack_require__(/*! ../../../../../../_handle_api/phone/list */ "./src/_handle_api/phone/list.js");

var _useDataShowMore2 = __webpack_require__(/*! ../../../../../../_hooks/useDataShowMore */ "./src/_hooks/useDataShowMore.js");

var _PLRowProducts = __webpack_require__(/*! ../../../../components/row_products/_main/PLRowProducts */ "./src/pages/phone_laptop/components/row_products/_main/PLRowProducts.js");

var _PLRowProducts2 = _interopRequireDefault(_PLRowProducts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PLHomeOnlineSale.propTypes = {};

//

//

//
function PLHomeOnlineSale(props) {
    //
    var _useDataShowMore = (0, _useDataShowMore2.useDataShowMore)({
        initial_arr: [],
        handle_API_L: function handle_API_L(c_count) {
            return (0, _list.handle_API_PhoneLaptop_L)({
                c_count: c_count,
                params: {
                    form: 'online_sale'
                }
            });
        }
    }),
        data_state = _useDataShowMore.data_state,
        getData_API = _useDataShowMore.getData_API;

    var data_arr = data_state.data_arr,
        has_fetched = data_state.has_fetched;

    //

    (0, _react.useEffect)(function () {
        getData_API();
    }, []);

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLHomeOnlineSale bg-gold brs-4px overflow-hidden' },
        _react2.default.createElement(
            'h2',
            { className: 'PLHomeOnlineSale_title pl-home-title padding-8px font-italic' },
            'S\u0103n Sale Online M\u1ED7i Ng\xE0y'
        ),
        has_fetched ? _react2.default.createElement(
            'div',
            { className: 'PLHomeOnlineSale_contain' },
            _react2.default.createElement(_PLRowProducts2.default, {
                product_arr: data_arr,
                use_type: false,
                use_compare: false
            })
        ) : _react2.default.createElement('div', { className: 'PLHomeOnlineSale_not_fetched' })
    );
}

exports.default = PLHomeOnlineSale;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/seen/_main/PLHomeSeen.js":
/*!********************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/seen/_main/PLHomeSeen.js ***!
  \********************************************************************/
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _list = __webpack_require__(/*! ../../../../../../_handle_api/phone/list */ "./src/_handle_api/phone/list.js");

var _useScrollToX2 = __webpack_require__(/*! ../../../../../../_hooks/useScrollToX */ "./src/_hooks/useScrollToX.js");

var _PLLinks = __webpack_require__(/*! ../../../../components/links/PLLinks */ "./src/pages/phone_laptop/components/links/PLLinks.js");

var _PLLinks2 = _interopRequireDefault(_PLLinks);

var _PLHomeSeenItem = __webpack_require__(/*! ../item/PLHomeSeenItem */ "./src/pages/phone_laptop/pages/home/seen/item/PLHomeSeenItem.js");

var _PLHomeSeenItem2 = _interopRequireDefault(_PLHomeSeenItem);

var _NextPrevDiv = __webpack_require__(/*! ../../../../../../component/some_div/next_prev_div/NextPrevDiv */ "./src/component/some_div/next_prev_div/NextPrevDiv.js");

var _NextPrevDiv2 = _interopRequireDefault(_NextPrevDiv);

var _observerToDo = __webpack_require__(/*! ../../../../../../_some_function/observerToDo */ "./src/_some_function/observerToDo.js");

var _observerToDo2 = _interopRequireDefault(_observerToDo);

var _Constant = __webpack_require__(/*! ../../../../../../_constant/Constant */ "./src/_constant/Constant.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
PLHomeSeen.propTypes = {};

//
function PLHomeSeen(props) {

    // ---- API

    //
    var getData_ProductSeen = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _list.handle_API_PhoneLaptop_L)({
                                params: {
                                    type: 'phone',
                                    form: 'best',
                                    size: 10
                                }
                            });

                        case 2:
                            res = _context.sent;


                            setStateObj(_extends({}, state_obj, {
                                product_arr: res.data.data,
                                count: res.data.count,
                                link_arr: [{
                                    name: 'Laptop',
                                    link_to: '/phone-laptop-laptops'
                                }, {
                                    name: 'Điện thoại',
                                    link_to: '/phone-laptop-phones'
                                }, {
                                    name: 'Sản phẩm khuyến mãi',
                                    link_to: '/phone-laptop/discount'
                                }],
                                has_fetched: true
                            }));

                            hasNextPrev();

                        case 5:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function getData_ProductSeen() {
            return _ref.apply(this, arguments);
        };
    }();

    // -------

    //


    //
    var _useState = (0, _react.useState)({
        seen_arr: [] || 0,
        count: 0,
        link_arr: [] || 0,
        has_fetched: false
    }),
        _useState2 = _slicedToArray(_useState, 2),
        state_obj = _useState2[0],
        setStateObj = _useState2[1];

    var seen_arr = state_obj.seen_arr,
        count = state_obj.count,
        link_arr = state_obj.link_arr,
        has_fetched = state_obj.has_fetched;

    //

    var ref_main_elm = (0, _react.useRef)(null);
    var ref_scroll_elm = (0, _react.useRef)(null);

    //

    var _useScrollToX = (0, _useScrollToX2.useScrollToX)({
        ref_scroll_elm: ref_scroll_elm,
        getItemElm: function getItemElm() {
            return ref_scroll_elm.current.getElementsByClassName('PLHomeSeen_item')[0];
        }
    }),
        is_has_next = _useScrollToX.is_has_next,
        is_has_prev = _useScrollToX.is_has_prev,
        handleNext = _useScrollToX.handleNext,
        handlePrev = _useScrollToX.handlePrev,
        hasNextPrev = _useScrollToX.hasNextPrev;

    //


    (0, _react.useEffect)(function () {
        (0, _observerToDo2.default)({
            elm: ref_main_elm.current,
            callback: getData_ProductSeen
        });
    }, []);function handleDeleteSeen() {
        setStateObj(_extends({}, state_obj, {
            seen_arr: []
        }));
    }

    // ------

    //
    if (seen_arr.length == 0 && has_fetched) {
        return null;
    }

    //
    return _react2.default.createElement(
        'div',
        { ref: ref_main_elm, className: 'PLHomeSeen' },
        _react2.default.createElement(
            'div',
            { className: 'PLHomeSeen_head display-flex margin-bottom-15px' },
            _react2.default.createElement(
                'h2',
                { className: 'PLHomeSeen_title pl-home-title' },
                'B\u1EA0N \u0110\xC3 XEM'
            ),
            _Constant.IS_MOBILE ? _react2.default.createElement(
                'div',
                {
                    className: 'font-12px font-400 text-blue cursor-pointer',
                    onClick: handleDeleteSeen
                },
                'X\xF3a l\u1ECBch s\u1EED'
            ) : _react2.default.createElement(
                'div',
                { className: 'display-flex margin-left-10px' },
                _react2.default.createElement(_PLLinks2.default, { link_arr: link_arr }),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'margin-left-10px font-12px text-blue cursor-pointer',
                        onClick: handleDeleteSeen
                    },
                    'X\xF3a l\u1ECBch s\u1EED'
                )
            )
        ),
        _Constant.IS_MOBILE ? _react2.default.createElement(
            'div',
            { className: 'margin-bottom-10px' },
            _react2.default.createElement(_PLLinks2.default, { link_arr: link_arr }),
            ' '
        ) : null,
        _react2.default.createElement(
            'div',
            { className: 'PLHomeSeen_contain pos-rel' },
            _react2.default.createElement(
                'ul',
                {
                    ref: ref_scroll_elm,
                    className: 'display-flex list-none overflow-x-auto scroll-height-0'
                },
                seen_arr.map(function (item, ix) {
                    return _react2.default.createElement(
                        'li',
                        { key: item.id, className: 'PLHomeSeen_item' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/phone-laptop/' + item.id },
                            _react2.default.createElement(_PLHomeSeenItem2.default, {
                                name: item.name,
                                img: item.img
                            })
                        )
                    );
                })
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_NextPrevDiv2.default, {
                    is_btn_circle: false,
                    is_has_next: is_has_next,
                    is_has_prev: is_has_prev
                    // size_icon={size_icon}
                    , handleNext: handleNext,
                    handlePrev: handlePrev
                })
            )
        )
    );
}

exports.default = PLHomeSeen;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/seen/item/PLHomeSeenItem.js":
/*!***********************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/seen/item/PLHomeSeenItem.js ***!
  \***********************************************************************/
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
PLHomeSeenItem.propTypes = {};

//
function PLHomeSeenItem(_ref) {
    var name = _ref.name,
        img = _ref.img;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLHomeSeenItem' },
        _react2.default.createElement('img', {
            className: 'PLHomeSeenItem_img w-100per object-fit-cover',
            src: img,
            alt: '',
            height: '80px'
        }),
        _react2.default.createElement(
            'div',
            { className: 'PLHomeSeenItem_name margin-top-10px' },
            name
        )
    );
}

exports.default = PLHomeSeenItem;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/tech/_main/PLHomeTech.js":
/*!********************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/tech/_main/PLHomeTech.js ***!
  \********************************************************************/
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

var _Constant = __webpack_require__(/*! ../../../../../../_constant/Constant */ "./src/_constant/Constant.js");

var _default_image = __webpack_require__(/*! ../../../../../../_default/_common/default_image */ "./src/_default/_common/default_image.js");

__webpack_require__(/*! ./PLHomeTech.scss */ "./src/pages/phone_laptop/pages/home/tech/_main/PLHomeTech.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PLHomeTech.propTypes = {};

//

//

//
function PLHomeTech(props) {
    //
    var tech_arr = [{
        id: 1,
        content: 'dasda dsad asdasd asd asdasda ads adas dasd asd asd asd asd asd asdasda sdas dasd asd asd asda sda dd  ada dad ada dasda das dasd asd as',
        img: (0, _default_image.getRandomImg)(),
        link_to: '/phone-laptop',
        time_str: '6 giờ trước'
    }, {
        id: 2,
        content: 'dasda dsad asdasd asd asdasda',
        img: (0, _default_image.getRandomImg)(),
        link_to: '/phone-laptop',
        time_str: '6 giờ trước'
    }, {
        id: 3,
        content: 'dasda dsad asdasd asd asdasda',
        img: (0, _default_image.getRandomImg)(),
        link_to: '/phone-laptop',
        time_str: '6 giờ trước'
    }, {
        id: 4,
        content: 'dasda dsad asdasd asd asdasda',
        img: (0, _default_image.getRandomImg)(),
        link_to: '/phone-laptop',
        time_str: '6 giờ trước'
    }, {
        id: 5,
        content: 'dasda dsad asdasd asd asdasda',
        img: (0, _default_image.getRandomImg)(),
        link_to: '/phone-laptop',
        time_str: '6 giờ trước'
    }, {
        id: 6,
        content: 'dasda dsad asdasd asd asdasda',
        img: (0, _default_image.getRandomImg)(),
        link_to: '/phone-laptop',
        time_str: '6 giờ trước'
    }];

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLHomeTech' },
        _react2.default.createElement(
            'h2',
            { className: 'PLHomeTech_title margin-bottom-15px pl-home-title-md' },
            '24h C\xD4NG NGH\u1EC6'
        ),
        _react2.default.createElement(
            'div',
            { className: 'PLHomeTech_row display-flex' },
            _Constant.IS_MOBILE ? null : _react2.default.createElement(
                _reactRouterDom.Link,
                {
                    className: 'PLHomeTech_left color-inherit font-18px',
                    to: tech_arr[0].link_to
                },
                _react2.default.createElement('img', {
                    className: 'w-100per object-fit-cover',
                    src: tech_arr[0].img,
                    alt: '',
                    height: '300px'
                }),
                _react2.default.createElement(
                    'div',
                    { className: 'wk-box-vertical line-clamp-2 overflow-hidden margin-y-10px font-700' },
                    tech_arr[0].content
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'font-14px text-third' },
                    tech_arr[0].time_str
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'PLHomeTech_right padding-left-10px font-12px' },
                tech_arr.slice(_Constant.IS_MOBILE ? 0 : 1).map(function (item, ix) {
                    return _react2.default.createElement(
                        _reactRouterDom.Link,
                        {
                            key: item.id,
                            className: 'PLHomeTech_right_item display-flex margin-bottom-10px color-inherit',
                            to: item.link_to
                        },
                        _react2.default.createElement('img', {
                            className: 'object-fit-cover',
                            src: item.img,
                            alt: '',
                            width: '120',
                            height: '70'
                        }),
                        _react2.default.createElement(
                            'div',
                            { className: 'margin-left-10px' },
                            _react2.default.createElement(
                                'div',
                                { className: 'wk-box-vertical line-clamp-3 overflow-hidden margin-bottom-5px' },
                                item.content
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'font-10px text-third' },
                                item.time_str
                            )
                        )
                    );
                })
            )
        )
    );
}

exports.default = PLHomeTech;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/links/PLLinks.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/links/PLLinks.scss ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".PLLinks {\n  white-space: nowrap;\n}\n\n.PLLinks_item {\n  border-radius: 15px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/components/links/PLLinks.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;AACJ;;AAEA;EACI,mBAAA;AACJ","sourcesContent":[".PLLinks{\r\n    white-space: nowrap;\r\n}\r\n\r\n.PLLinks_item{\r\n    border-radius: 15px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/row_products/_main/PLRowProducts.scss":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/row_products/_main/PLRowProducts.scss ***!
  \******************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLRowProducts_item {\n  width: 240px;\n  max-width: 48%;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/components/row_products/_main/PLRowProducts.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,cAAA;AACJ","sourcesContent":[".PLRowProducts_item{\r\n    width: 240px;\r\n    max-width: 48%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/_main/PLHome.scss":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/_main/PLHome.scss ***!
  \**********************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLHome_part {\n  margin-bottom: 30px;\n}\n\n.PLHome_tech {\n  width: 75%;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/home/_main/PLHome.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;AACJ;;AAEA;EACI,UAAA;AACJ","sourcesContent":[".PLHome_part{\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.PLHome_tech{\r\n    width: 75%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/_main/PLHomeCommon.scss":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/_main/PLHomeCommon.scss ***!
  \****************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".pl-home-title {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.pl-home-title-md {\n  font-size: 18px;\n  font-weight: bold;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/home/_main/PLHomeCommon.scss"],"names":[],"mappings":"AAAA;EACI,eAAA;EACA,iBAAA;AACJ;;AAEA;EACI,eAAA;EACA,iBAAA;AACJ","sourcesContent":[".pl-home-title{\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n}\r\n\r\n.pl-home-title-md{\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeBannerHotMb.scss":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeBannerHotMb.scss ***!
  \***************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLHome-mobile .PLHomeBannerHot_row {\n  margin-bottom: 0;\n}\n.PLHome-mobile .PLHomeBannerHot_left {\n  flex-grow: 0;\n  margin-right: 0;\n  width: 100%;\n  height: 40vw;\n}\n.PLHome-mobile .PLHomeBannerHot_waiting {\n  height: 40px;\n  object-fit: cover;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeBannerHotMb.scss"],"names":[],"mappings":"AACI;EACI,gBAAA;AAAR;AAGI;EACI,YAAA;EAEA,eAAA;EACA,WAAA;EACA,YAAA;AAFR;AAKI;EACI,YAAA;EACA,iBAAA;AAHR","sourcesContent":[".PLHome-mobile {\r\n    .PLHomeBannerHot_row {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    .PLHomeBannerHot_left {\r\n        flex-grow: 0;\r\n\r\n        margin-right: 0;\r\n        width: 100%;\r\n        height: 40vw;\r\n    }\r\n\r\n    .PLHomeBannerHot_waiting{\r\n        height: 40px;\r\n        object-fit: cover;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeBestLaptopsMb.scss":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeBestLaptopsMb.scss ***!
  \*****************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLHome-mobile .PLHomeBestLaptops_head {\n  display: block;\n  margin-bottom: 10px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeBestLaptopsMb.scss"],"names":[],"mappings":"AACI;EACI,cAAA;EACA,mBAAA;AAAR","sourcesContent":[".PLHome-mobile {\r\n    .PLHomeBestLaptops_head {\r\n        display: block;\r\n        margin-bottom: 10px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeBestPhonesMb.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeBestPhonesMb.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLHome-mobile .PLHomeBestPhones_head {\n  display: block;\n  margin-bottom: 10px;\n}\n.PLHome-mobile .PLHomeBestPhones_item {\n  width: 33.33%;\n}\n@media (max-width: 450px) {\n  .PLHome-mobile .PLHomeBestPhones_item {\n    width: 50%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeBestPhonesMb.scss"],"names":[],"mappings":"AACI;EACI,cAAA;EACA,mBAAA;AAAR;AAGI;EACI,aAAA;AADR;AAKI;EACI;IACI,UAAA;EAHV;AACF","sourcesContent":[".PLHome-mobile {\r\n    .PLHomeBestPhones_head {\r\n        display: block;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .PLHomeBestPhones_item {\r\n        width: 33.33%;\r\n    }\r\n\r\n    //\r\n    @media (max-width: 450px) {\r\n        .PLHomeBestPhones_item {\r\n            width: 50%;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeBrandsMb.scss":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeBrandsMb.scss ***!
  \************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLHome-mobile .PLHomeBrands_title {\n  margin-bottom: 0;\n}\n.PLHome-mobile .PLHomeBrands_item {\n  margin: 0 10px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeBrandsMb.scss"],"names":[],"mappings":"AACI;EACI,gBAAA;AAAR;AAGI;EACI,cAAA;AADR","sourcesContent":[".PLHome-mobile {\r\n    .PLHomeBrands_title {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    .PLHomeBrands_item {\r\n        margin: 0 10px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeMb.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeMb.scss ***!
  \******************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLHome-mobile .pl-home-title {\n  padding: 10px;\n  font-size: 16px;\n}\n.PLHome-mobile .pl-home-title-md {\n  padding: 10px;\n  font-size: 15px;\n}\n.PLHome-mobile .PLHome_part {\n  margin-bottom: 15px;\n}\n.PLHome-mobile .PLHome_banner {\n  padding-top: 0;\n}\n.PLHome-mobile .PLHome_tech_app {\n  display: block;\n}\n.PLHome-mobile .PLHome_tech {\n  width: 100%;\n}\n.PLHome-mobile .PLLinks {\n  font-size: 12px;\n  overflow-x: auto;\n}\n.PLHome-mobile .PLLinks_item {\n  padding: 2px 5px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeMb.scss"],"names":[],"mappings":"AAII;EACI,aAAA;EACA,eAAA;AAHR;AAMI;EACI,aAAA;EACA,eAAA;AAJR;AASI;EACI,mBAAA;AAPR;AAUI;EACI,cAAA;AARR;AAWI;EACI,cAAA;AATR;AAYI;EACI,WAAA;AAVR;AAeI;EACI,eAAA;EACA,gBAAA;AAbR;AAgBI;EACI,gBAAA;AAdR","sourcesContent":[".PLHome-mobile{\r\n\r\n    // -----\r\n\r\n    .pl-home-title{\r\n        padding: 10px;\r\n        font-size: 16px;\r\n    }\r\n\r\n    .pl-home-title-md{\r\n        padding: 10px;\r\n        font-size: 15px;\r\n    }\r\n\r\n    // -----\r\n\r\n    .PLHome_part{\r\n        margin-bottom: 15px;\r\n    }\r\n\r\n    .PLHome_banner{\r\n        padding-top: 0;\r\n    }\r\n\r\n    .PLHome_tech_app{\r\n        display: block;\r\n    }\r\n\r\n    .PLHome_tech{\r\n        width: 100%;\r\n    }\r\n\r\n    // ----\r\n\r\n    .PLLinks{\r\n        font-size: 12px;\r\n        overflow-x: auto;\r\n    }\r\n\r\n    .PLLinks_item {\r\n        padding: 2px 5px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeNewMb.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeNewMb.scss ***!
  \*********************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLHome-mobile .PLHomeNew_title {\n  margin-bottom: 0;\n}\n.PLHome-mobile .PLHomeNew_item {\n  margin: 0 10px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeNewMb.scss"],"names":[],"mappings":"AACI;EACI,gBAAA;AAAR;AAGI;EACI,cAAA;AADR","sourcesContent":[".PLHome-mobile {\r\n    .PLHomeNew_title {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    .PLHomeNew_item {\r\n        margin: 0 10px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeOnlineSaleMb.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeOnlineSaleMb.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLHome-mobile .PLHomeOnlineSale_title {\n  color: var(--white);\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeOnlineSaleMb.scss"],"names":[],"mappings":"AACI;EACI,mBAAA;AAAR","sourcesContent":[".PLHome-mobile {\r\n    .PLHomeOnlineSale_title {\r\n        color: var(--white);\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeTechMb.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeTechMb.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLHome-mobile .PLHomeTech_title {\n  margin-bottom: 0;\n}\n.PLHome-mobile .PLHomeTech_right {\n  display: flex;\n  width: 100%;\n  overflow-x: auto;\n}\n.PLHome-mobile .PLHomeTech_right_item {\n  flex-shrink: 0;\n  width: 200px;\n}\n.PLHome-mobile .PLHomeTech_right_item img {\n  width: 80px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeTechMb.scss"],"names":[],"mappings":"AACI;EACI,gBAAA;AAAR;AAGI;EACI,aAAA;EACA,WAAA;EACA,gBAAA;AADR;AAII;EACI,cAAA;EACA,YAAA;AAFR;AAIQ;EACI,WAAA;AAFZ","sourcesContent":[".PLHome-mobile {\r\n    .PLHomeTech_title {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    .PLHomeTech_right {\r\n        display: flex;\r\n        width: 100%;\r\n        overflow-x: auto;\r\n    }\r\n\r\n    .PLHomeTech_right_item{\r\n        flex-shrink: 0;\r\n        width: 200px;\r\n\r\n        img{\r\n            width: 80px;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/banner_hot/_main/PLHomeBannerHot.scss":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/banner_hot/_main/PLHomeBannerHot.scss ***!
  \******************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLHomeBannerHot_not_fetched {\n  height: 450px;\n}\n\n.PLHomeBannerHot_row {\n  margin-bottom: 30px;\n}\n\n.PLHomeBannerHot_left {\n  height: 360px;\n}\n\n.PLHomeBannerHot_right {\n  width: 360px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/home/banner_hot/_main/PLHomeBannerHot.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;AACJ;;AAEA;EACI,mBAAA;AACJ;;AAEA;EACI,aAAA;AACJ;;AAEA;EACI,YAAA;AACJ","sourcesContent":[".PLHomeBannerHot_not_fetched{\r\n    height: 450px;\r\n}\r\n\r\n.PLHomeBannerHot_row{\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.PLHomeBannerHot_left{\r\n    height: 360px;\r\n}\r\n\r\n.PLHomeBannerHot_right{\r\n    width: 360px;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/banner_hot/banner/_main/PLHomeBanner.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/banner_hot/banner/_main/PLHomeBanner.scss ***!
  \**********************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLHomeBanner_pics {\n  height: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/home/banner_hot/banner/_main/PLHomeBanner.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;AACJ","sourcesContent":[".PLHomeBanner_pics{\r\n    height: 1rem;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/banner_hot/banner/carousel_title/PLHomeCarouselTitle.scss":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/banner_hot/banner/carousel_title/PLHomeCarouselTitle.scss ***!
  \**************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLHomeCarouselTitle {\n  box-shadow: 0px 1px 1px 1px var(--shadow-2);\n}\n\n.PLHomeCarouselTitle_row {\n  scroll-behavior: smooth;\n}\n\n.PLHomeCarouselTitle_item {\n  width: 20%;\n  border-top: 4px solid transparent;\n}\n.PLHomeCarouselTitle_item:not(:first-child) .PLHomeCarouselTitle_item_contain {\n  border-left: 1px solid var(--md-bg-blur);\n}\n\n.PLHomeCarouselTitle_item-active {\n  border-top-color: var(--gold);\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/home/banner_hot/banner/carousel_title/PLHomeCarouselTitle.scss"],"names":[],"mappings":"AAAA;EACI,2CAAA;AACJ;;AAEA;EACI,uBAAA;AACJ;;AAEA;EACI,UAAA;EACA,iCAAA;AACJ;AAEQ;EACI,wCAAA;AAAZ;;AAIA;EACI,6BAAA;AADJ","sourcesContent":[".PLHomeCarouselTitle{\r\n    box-shadow: 0px 1px 1px 1px var(--shadow-2);\r\n}\r\n\r\n.PLHomeCarouselTitle_row{\r\n    scroll-behavior: smooth;\r\n}\r\n\r\n.PLHomeCarouselTitle_item {\r\n    width: 20%;\r\n    border-top: 4px solid transparent;\r\n\r\n    &:not(:first-child) {\r\n        .PLHomeCarouselTitle_item_contain{\r\n            border-left: 1px solid var(--md-bg-blur);\r\n        }\r\n    }\r\n}\r\n.PLHomeCarouselTitle_item-active {\r\n    border-top-color: var(--gold);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/best_laptops/_main/PLHomeBestLaptops.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/best_laptops/_main/PLHomeBestLaptops.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLHomeBestLaptops_not_fetched {\n  height: 800px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/home/best_laptops/_main/PLHomeBestLaptops.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;AACJ","sourcesContent":[".PLHomeBestLaptops_not_fetched{\r\n    height: 800px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/best_laptops/contain_mobile/PLHBestLaptopsContainMb.scss":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/best_laptops/contain_mobile/PLHBestLaptopsContainMb.scss ***!
  \*************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLHBestLaptopsContainMb_item {\n  width: 33.33%;\n}\n\n@media (max-width: 450px) {\n  .PLHBestLaptopsContainMb_item {\n    width: 50%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/home/best_laptops/contain_mobile/PLHBestLaptopsContainMb.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;AACJ;;AAGA;EACI;IACI,UAAA;EAAN;AACF","sourcesContent":[".PLHBestLaptopsContainMb_item {\r\n    width: 33.33%;\r\n}\r\n\r\n//\r\n@media (max-width: 450px) {\r\n    .PLHBestLaptopsContainMb_item {\r\n        width: 50%;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/best_laptops/links/PLHBestLaptopsLinks.scss":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/best_laptops/links/PLHBestLaptopsLinks.scss ***!
  \************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLHBestLaptopsLinks_item {\n  border-radius: 15px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/home/best_laptops/links/PLHBestLaptopsLinks.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;AACJ","sourcesContent":[".PLHBestLaptopsLinks_item{\r\n    border-radius: 15px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/best_phones/_main/PLHomeBestPhones.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/best_phones/_main/PLHomeBestPhones.scss ***!
  \********************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLHomeBestPhones_not_fetched {\n  height: 800px;\n}\n\n.PLHomeBestPhones_item {\n  width: 20%;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/home/best_phones/_main/PLHomeBestPhones.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;AACJ;;AAEA;EACI,UAAA;AACJ","sourcesContent":[".PLHomeBestPhones_not_fetched{\r\n    height: 800px;\r\n}\r\n\r\n.PLHomeBestPhones_item{\r\n    width: 20%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/best_phones/links/PLHBestPhonesLinks.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/best_phones/links/PLHBestPhonesLinks.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLHBestPhonesLinks_item {\n  border-radius: 15px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/home/best_phones/links/PLHBestPhonesLinks.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;AACJ","sourcesContent":[".PLHBestPhonesLinks_item{\r\n    border-radius: 15px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/brands/_main/PLHomeBrands.scss":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/brands/_main/PLHomeBrands.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLHomeBrands_item {\n  width: 32%;\n  min-width: 160px;\n}\n\n.PLHomeBrands_item_contain {\n  padding-top: 66%;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/home/brands/_main/PLHomeBrands.scss"],"names":[],"mappings":"AAAA;EACI,UAAA;EACA,gBAAA;AACJ;;AAEA;EACI,gBAAA;AACJ","sourcesContent":[".PLHomeBrands_item {\r\n    width: 32%;\r\n    min-width: 160px;\r\n}\r\n\r\n.PLHomeBrands_item_contain {\r\n    padding-top: 66%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/nav/_main/PLHomeNav.scss":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/nav/_main/PLHomeNav.scss ***!
  \*****************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLHomeNav {\n  white-space: pre-wrap;\n}\n\n.PLHomeNav_item {\n  width: calc(20% - 4px);\n  min-height: 40px;\n  box-shadow: 0px 2px 5px var(--shadow-1);\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/home/nav/_main/PLHomeNav.scss"],"names":[],"mappings":"AAAA;EACI,qBAAA;AACJ;;AAEA;EACI,sBAAA;EACA,gBAAA;EAEA,uCAAA;AAAJ","sourcesContent":[".PLHomeNav{\r\n    white-space: pre-wrap;\r\n}\r\n\r\n.PLHomeNav_item{\r\n    width: calc(20% - 4px);\r\n    min-height: 40px;\r\n\r\n    box-shadow: 0px 2px 5px var(--shadow-1);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/new/_main/PLHomeNew.scss":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/new/_main/PLHomeNew.scss ***!
  \*****************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLHomeNew_item {\n  width: 32%;\n  min-width: 160px;\n}\n\n.PLHomeNew_item_contain {\n  padding-top: 66%;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/home/new/_main/PLHomeNew.scss"],"names":[],"mappings":"AAAA;EACI,UAAA;EACA,gBAAA;AACJ;;AAEA;EACI,gBAAA;AACJ","sourcesContent":[".PLHomeNew_item{\r\n    width: 32%;\r\n    min-width: 160px;\r\n}\r\n\r\n.PLHomeNew_item_contain{\r\n    padding-top: 66%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/tech/_main/PLHomeTech.scss":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/tech/_main/PLHomeTech.scss ***!
  \*******************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLHomeTech_left {\n  width: 61%;\n}\n\n.PLHomeTech_right {\n  width: 39%;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/home/tech/_main/PLHomeTech.scss"],"names":[],"mappings":"AAAA;EACI,UAAA;AACJ;;AAEA;EACI,UAAA;AACJ","sourcesContent":[".PLHomeTech_left{\r\n    width: 61%;\r\n}\r\n\r\n.PLHomeTech_right{\r\n    width: 39%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./image/preorder_iphone13.png":
/*!*************************************!*\
  !*** ./image/preorder_iphone13.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/images_icons/0240c764199513a9a22a99c9351d6552.png");

/***/ }),

/***/ "./src/pages/phone_laptop/components/links/PLLinks.scss":
/*!**************************************************************!*\
  !*** ./src/pages/phone_laptop/components/links/PLLinks.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLLinks_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./PLLinks.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/links/PLLinks.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLLinks_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLLinks_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/components/row_products/_main/PLRowProducts.scss":
/*!*********************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/row_products/_main/PLRowProducts.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLRowProducts_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLRowProducts.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/row_products/_main/PLRowProducts.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLRowProducts_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLRowProducts_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/_main/PLHome.scss":
/*!*************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/_main/PLHome.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHome_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLHome.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/_main/PLHome.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHome_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHome_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/_main/PLHomeCommon.scss":
/*!*******************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/_main/PLHomeCommon.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeCommon_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLHomeCommon.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/_main/PLHomeCommon.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeCommon_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeCommon_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeBannerHotMb.scss":
/*!******************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeBannerHotMb.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeBannerHotMb_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLHomeBannerHotMb.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeBannerHotMb.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeBannerHotMb_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeBannerHotMb_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeBestLaptopsMb.scss":
/*!********************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeBestLaptopsMb.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeBestLaptopsMb_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLHomeBestLaptopsMb.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeBestLaptopsMb.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeBestLaptopsMb_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeBestLaptopsMb_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeBestPhonesMb.scss":
/*!*******************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeBestPhonesMb.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeBestPhonesMb_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLHomeBestPhonesMb.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeBestPhonesMb.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeBestPhonesMb_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeBestPhonesMb_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeBrandsMb.scss":
/*!***************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeBrandsMb.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeBrandsMb_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLHomeBrandsMb.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeBrandsMb.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeBrandsMb_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeBrandsMb_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeMb.scss":
/*!*********************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeMb.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeMb_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLHomeMb.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeMb.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeMb_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeMb_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeNewMb.scss":
/*!************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeNewMb.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeNewMb_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLHomeNewMb.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeNewMb.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeNewMb_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeNewMb_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeOnlineSaleMb.scss":
/*!*******************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeOnlineSaleMb.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeOnlineSaleMb_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLHomeOnlineSaleMb.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeOnlineSaleMb.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeOnlineSaleMb_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeOnlineSaleMb_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeTechMb.scss":
/*!*************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeTechMb.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeTechMb_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLHomeTechMb.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/_mobile_css/PLHomeTechMb.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeTechMb_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeTechMb_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/banner_hot/_main/PLHomeBannerHot.scss":
/*!*********************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/banner_hot/_main/PLHomeBannerHot.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeBannerHot_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLHomeBannerHot.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/banner_hot/_main/PLHomeBannerHot.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeBannerHot_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeBannerHot_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/banner_hot/banner/_main/PLHomeBanner.scss":
/*!*************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/banner_hot/banner/_main/PLHomeBanner.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeBanner_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLHomeBanner.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/banner_hot/banner/_main/PLHomeBanner.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeBanner_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeBanner_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/banner_hot/banner/carousel_title/PLHomeCarouselTitle.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/banner_hot/banner/carousel_title/PLHomeCarouselTitle.scss ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeCarouselTitle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLHomeCarouselTitle.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/banner_hot/banner/carousel_title/PLHomeCarouselTitle.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeCarouselTitle_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeCarouselTitle_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/best_laptops/_main/PLHomeBestLaptops.scss":
/*!*************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/best_laptops/_main/PLHomeBestLaptops.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeBestLaptops_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLHomeBestLaptops.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/best_laptops/_main/PLHomeBestLaptops.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeBestLaptops_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeBestLaptops_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/best_laptops/contain_mobile/PLHBestLaptopsContainMb.scss":
/*!****************************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/best_laptops/contain_mobile/PLHBestLaptopsContainMb.scss ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHBestLaptopsContainMb_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLHBestLaptopsContainMb.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/best_laptops/contain_mobile/PLHBestLaptopsContainMb.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHBestLaptopsContainMb_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHBestLaptopsContainMb_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/best_laptops/links/PLHBestLaptopsLinks.scss":
/*!***************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/best_laptops/links/PLHBestLaptopsLinks.scss ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHBestLaptopsLinks_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLHBestLaptopsLinks.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/best_laptops/links/PLHBestLaptopsLinks.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHBestLaptopsLinks_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHBestLaptopsLinks_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/best_phones/_main/PLHomeBestPhones.scss":
/*!***********************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/best_phones/_main/PLHomeBestPhones.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeBestPhones_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLHomeBestPhones.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/best_phones/_main/PLHomeBestPhones.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeBestPhones_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeBestPhones_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/best_phones/links/PLHBestPhonesLinks.scss":
/*!*************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/best_phones/links/PLHBestPhonesLinks.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHBestPhonesLinks_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLHBestPhonesLinks.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/best_phones/links/PLHBestPhonesLinks.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHBestPhonesLinks_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHBestPhonesLinks_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/brands/_main/PLHomeBrands.scss":
/*!**************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/brands/_main/PLHomeBrands.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeBrands_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLHomeBrands.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/brands/_main/PLHomeBrands.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeBrands_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeBrands_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/nav/_main/PLHomeNav.scss":
/*!********************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/nav/_main/PLHomeNav.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeNav_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLHomeNav.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/nav/_main/PLHomeNav.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeNav_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeNav_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/new/_main/PLHomeNew.scss":
/*!********************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/new/_main/PLHomeNew.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeNew_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLHomeNew.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/new/_main/PLHomeNew.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeNew_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeNew_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/home/tech/_main/PLHomeTech.scss":
/*!**********************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/home/tech/_main/PLHomeTech.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeTech_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLHomeTech.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/home/tech/_main/PLHomeTech.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeTech_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLHomeTech_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_phone_laptop_pages_home__main_PLHome_js.js.map