(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_home__main_Home_js"],{

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

/***/ "./src/api/api_django_no_token/api01/API01NoToken.js":
/*!***********************************************************!*\
  !*** ./src/api/api_django_no_token/api01/API01NoToken.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.API_CityHistory_L = exports.API_City_R = exports.API_City_L = undefined;

var _DefaultCity = __webpack_require__(/*! ../../../pages/city_street/__default/DefaultCity */ "./src/pages/city_street/__default/DefaultCity.js");

var _API_IsLogin = __webpack_require__(/*! ../../_common/API_IsLogin */ "./src/api/_common/API_IsLogin.js");

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _AxiosNoToken = __webpack_require__(/*! ../_axios/AxiosNoToken */ "./src/api/api_django_no_token/_axios/AxiosNoToken.js");

var _AxiosNoToken2 = _interopRequireDefault(_AxiosNoToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var API_City_L = exports.API_City_L = function API_City_L(params) {
    return (0, _ConstAPI.API_FakeReal)(Array(6).fill(_DefaultCity.default_arr_city[0]), function () {
        return (0, _API_IsLogin.API_IsLogin_URL)({
            method: 'GET',
            params: params
        }, '/api01/l-city-token/', '/api01/l-city-no-token/');
    }, params);
};

//
var API_City_R = exports.API_City_R = function API_City_R(pk) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return (0, _AxiosNoToken2.default)({
        url: '/api01/r-city/' + pk + '/',
        method: 'GET',
        params: params
    });
};

//
var API_CityHistory_L = exports.API_CityHistory_L = function API_CityHistory_L(params) {
    return (0, _ConstAPI.API_FakeReal)(Array(6).fill(_DefaultCity.default_arr_city[0]), function () {
        return (0, _AxiosNoToken2.default)({
            url: '/api01/l-city-history/',
            method: 'GET',
            params: params
        });
    }, params);
};

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

/***/ "./src/api/api_django_no_token/phone_laptop/PhoneLaptopAPI.js":
/*!********************************************************************!*\
  !*** ./src/api/api_django_no_token/phone_laptop/PhoneLaptopAPI.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.API_PhoneOrder_C = exports.CreateFilterAllProducts = exports.API_PhoneLaptop_R = exports.API_FilterPhoneLaptop_L = exports.API_PhoneLaptop_L = undefined;

var _DefaultPhone = __webpack_require__(/*! ../../../pages/phone_laptop/__default/DefaultPhone */ "./src/pages/phone_laptop/__default/DefaultPhone.js");

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _AxiosNoToken = __webpack_require__(/*! ../_axios/AxiosNoToken */ "./src/api/api_django_no_token/_axios/AxiosNoToken.js");

var _AxiosNoToken2 = _interopRequireDefault(_AxiosNoToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// list
var API_PhoneLaptop_L = exports.API_PhoneLaptop_L = function API_PhoneLaptop_L(params) {
    return (0, _ConstAPI.API_FakeReal)(Array(12).fill(_DefaultPhone.default_phone_arr[0]), function () {
        return (0, _AxiosNoToken2.default)({
            url: '/phone/list/',
            params: params
        });
    }, params);
};

// list filter
var API_FilterPhoneLaptop_L = exports.API_FilterPhoneLaptop_L = function API_FilterPhoneLaptop_L(params) {
    return (0, _ConstAPI.API_FakeReal)(Array(12).fill(_DefaultPhone.default_phone_arr[0]), function () {
        return (0, _AxiosNoToken2.default)({
            url: '/phone/list-filter/',
            params: params
        });
    }, params);
};

// retrieve
var API_PhoneLaptop_R = exports.API_PhoneLaptop_R = function API_PhoneLaptop_R(id) {
    return (0, _ConstAPI.API_FakeReal)(_DefaultPhone.default_phone_arr[0], function () {
        return (0, _AxiosNoToken2.default)({
            url: '/phone/' + id + '/'
        });
    });
};

// create - just for testing, it will not create anything
var CreateFilterAllProducts = exports.CreateFilterAllProducts = function CreateFilterAllProducts(data) {
    return (0, _AxiosNoToken2.default)({
        method: 'POST',
        url: '/phone/create/',
        data: data
    });
};

// order
var API_PhoneOrder_C = exports.API_PhoneOrder_C = function API_PhoneOrder_C(data) {
    return (0, _AxiosNoToken2.default)({
        url: '/phone/order-c/',
        method: 'POST',
        data: data
    });
};

/***/ }),

/***/ "./src/pages/city_street/__default/DefaultCity.js":
/*!********************************************************!*\
  !*** ./src/pages/city_street/__default/DefaultCity.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default_arr_city = exports.initialValues = exports.validationSchema = undefined;

var _yup = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");

var Yup = _interopRequireWildcard(_yup);

var _my_image = __webpack_require__(/*! ../../../../image/my_image.png */ "./image/my_image.png");

var _my_image2 = _interopRequireDefault(_my_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/* ------------------ FORMIK YUP--------------- */

// validation schema
var validationSchema = exports.validationSchema = Yup.object().shape({
    city: Yup.string().required('City is required').min(3, 'At least 3 letters').max(50, 'max 50 letters'),

    street: Yup.string().required('City is required').min(3, 'At least 3 letters').max(50, 'max 50 letters'),
    image: Yup.mixed().required('Image is required')
});

// initial values

// 
var initialValues = exports.initialValues = {
    city: '',
    street: '',
    image: ''
};

/* ------------------ CITY --------------- */

//
var default_arr_city = exports.default_arr_city = [{
    user: {
        id: 1,
        first_name: 'My',
        last_name: 'My',
        picture: _my_image2.default
    },
    city: 'Ha Noi',
    street: 'Duong lua',
    image: _my_image2.default,
    is_user: true,
    count_his: 2
}];

/***/ }),

/***/ "./src/pages/home/_main/Home.js":
/*!**************************************!*\
  !*** ./src/pages/home/_main/Home.js ***!
  \**************************************/
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _API01NoToken = __webpack_require__(/*! ../../../api/api_django_no_token/api01/API01NoToken */ "./src/api/api_django_no_token/api01/API01NoToken.js");

var _APIFashionNoToken = __webpack_require__(/*! ../../../api/api_django_no_token/fashion/APIFashionNoToken */ "./src/api/api_django_no_token/fashion/APIFashionNoToken.js");

var _PhoneLaptopAPI = __webpack_require__(/*! ../../../api/api_django_no_token/phone_laptop/PhoneLaptopAPI */ "./src/api/api_django_no_token/phone_laptop/PhoneLaptopAPI.js");

var _ProductItem = __webpack_require__(/*! ../../../component/products/product_item/ProductItem */ "./src/component/products/product_item/ProductItem.js");

var _ProductItem2 = _interopRequireDefault(_ProductItem);

var _useMounted = __webpack_require__(/*! ../../../_custom_hooks/useMounted */ "./src/_custom_hooks/useMounted.js");

var _observerToDo = __webpack_require__(/*! ../../../_some_function/observerToDo */ "./src/_some_function/observerToDo.js");

var _observerToDo2 = _interopRequireDefault(_observerToDo);

__webpack_require__(/*! ./Home.scss */ "./src/pages/home/_main/Home.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// const
var initial_arr = [1, 2, 3, 4, 5];

// Home
function Home() {

    /* ----------------- GET API ------------------ */

    //
    var getAPI_Common = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(API_GetData, params, callback) {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return API_GetData(params);

                        case 3:
                            res = _context.sent;

                            mounted && callback(res.data.data);
                            _context.next = 10;
                            break;

                        case 7:
                            _context.prev = 7;
                            _context.t0 = _context['catch'](0);

                            console.log(_context.t0);

                        case 10:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[0, 7]]);
        }));

        return function getAPI_Common(_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }();

    // phone


    //
    var _useState = (0, _react.useState)(initial_arr),
        _useState2 = _slicedToArray(_useState, 2),
        phones = _useState2[0],
        setPhones = _useState2[1];

    var _useState3 = (0, _react.useState)(initial_arr),
        _useState4 = _slicedToArray(_useState3, 2),
        clothes = _useState4[0],
        setClothes = _useState4[1];

    var _useState5 = (0, _react.useState)(initial_arr),
        _useState6 = _slicedToArray(_useState5, 2),
        cities = _useState6[0],
        setCities = _useState6[1];

    // 


    var ref_phone = (0, _react.useRef)(null);
    var ref_cloth = (0, _react.useRef)(null);
    var ref_city = (0, _react.useRef)(null);

    //
    var mounted = (0, _useMounted.useMounted)();

    //
    (0, _react.useEffect)(function () {
        document.title = 'Home';
        getAPIWhenCDM();
    }, []);

    //
    function getAPIWhenCDM() {
        (0, _observerToDo2.default)(ref_phone.current, getPhones, 0);
        (0, _observerToDo2.default)(ref_cloth.current, getClothes, 0);
        (0, _observerToDo2.default)(ref_city.current, getCities, 0);
    }function getPhones() {
        getAPI_Common(_PhoneLaptopAPI.API_PhoneLaptop_L, {
            page: 1,
            size: 10,
            is_hot: 1,
            pk: -1,
            type_product: '',
            gte_price: 0,
            lte_price: 100000000,
            in_stock: ''
        }, function (data) {
            return setPhones(data);
        });
    }

    // cloth
    function getClothes() {
        getAPI_Common(_APIFashionNoToken.API_FashionProduct_L, { page: 1, size: 10 }, function (data) {
            return setClothes(data);
        });
    }

    // city
    function getCities() {
        getAPI_Common(_API01NoToken.API_City_L, { page: 1, size: 10 }, function (data) {
            return setCities(data);
        });
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'Home' },
        _react2.default.createElement(
            'div',
            { ref: ref_phone, className: 'Home_products' },
            _react2.default.createElement(
                'div',
                { className: 'Home_products_contain box-shadow-1 brs-5px' },
                _react2.default.createElement(
                    'div',
                    { className: 'Home_phone_title App_title' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        {
                            to: '/phone-laptop',
                            className: 'Home__main_link',
                            title: 'See more phones laptops'
                        },
                        'Phone-Laptop'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'Home_products_row' },
                    phones.map(function (item, index) {
                        return _react2.default.createElement(
                            'div',
                            {
                                key: 'phone_' + index,
                                className: 'Home_products_item'
                            },
                            _react2.default.createElement(_ProductItem2.default, {
                                link: '/phone-laptop:' + item.id,
                                index: index,
                                img: item.url,
                                name: item.name,
                                in_stock: item.in_stock,
                                new_price: item.new_price,
                                old_price: item.old_price,
                                discount: item.discount,
                                installment: item.installment
                            })
                        );
                    })
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { ref: ref_cloth, className: 'Home_products' },
            _react2.default.createElement(
                'div',
                { className: 'Home_products_contain box-shadow-1 brs-5px' },
                _react2.default.createElement(
                    'div',
                    { className: 'Home_cloth_title App_title' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        {
                            to: '/fashion',
                            className: 'Home__main_link',
                            title: 'See more products in shopping'
                        },
                        'Shopping'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'Home_products_row' },
                    clothes.map(function (item, index) {
                        return _react2.default.createElement(
                            'div',
                            {
                                key: 'clothes_' + index,
                                className: 'Home_products_item'
                            },
                            _react2.default.createElement(_ProductItem2.default, {
                                link: '/fashion:' + item.id,
                                index: index,
                                img: item.vid_pics ? item.vid_pics[0].vid_pic : undefined,
                                name: item.name,
                                new_price: item.new_price,
                                old_price: item.old_price,
                                discount: item.discount
                            })
                        );
                    })
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { ref: ref_city, className: 'Home_products' },
            _react2.default.createElement(
                'div',
                { className: 'Home_products_contain box-shadow-1 brs-5px' },
                _react2.default.createElement(
                    'div',
                    { className: 'Home_city_title App_title' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        {
                            to: '/city-street',
                            className: 'Home__main_link',
                            title: 'See more cities'
                        },
                        'City'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'Home_products_row' },
                    cities.map(function (item, index) {
                        return _react2.default.createElement(
                            'div',
                            {
                                key: 'city_' + index,
                                className: 'Home_products_item'
                            },
                            _react2.default.createElement(_ProductItem2.default, {
                                link: '/city-street',
                                img: item.image,
                                name: item.city,
                                index: index
                            })
                        );
                    })
                )
            )
        )
    );
}

exports.default = Home;

/***/ }),

/***/ "./src/pages/phone_laptop/__default/DefaultPhone.js":
/*!**********************************************************!*\
  !*** ./src/pages/phone_laptop/__default/DefaultPhone.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default_phone_arr = undefined;

var _phone_jpg = __webpack_require__(/*! ../../../../image/phone_jpg.jpg */ "./image/phone_jpg.jpg");

var _phone_jpg2 = _interopRequireDefault(_phone_jpg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var default_phone_arr = exports.default_phone_arr = [{
    id: 1,
    url: _phone_jpg2.default,
    in_stock: 'in stock',
    discount: 10,
    installment: 0,
    gift: 'asd asd\nad asd\nasd asd sad',
    product_sets: 'asd asd asd\nasdsadas\nasd asdsadas asd sad\nasd asd asda',
    cpu: '500',
    os: 'Android',
    ram: '3G',
    internal_memory: '32G',
    camera: 'Full HD',
    memory_stick: '120G',
    type_product: 'phone',
    name: 'Abc Xyz',
    new_price: 8000000,
    old_price: 8500000,
    types: [{ url: _phone_jpg2.default, title: 'Black' }, { url: _phone_jpg2.default, title: 'Blue' }, { url: _phone_jpg2.default, title: 'White' }],
    promotion: 'ad asd ad asd as asd asd ad ada d asda dsa dasd asd asd asd as asd asd asd asd'
}];

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/_main/Home.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/_main/Home.scss ***!
  \*************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".Home {\n  padding-top: 0.5rem;\n}\n.Home .App_title {\n  margin-bottom: 1rem;\n}\n\n.Home_phone_title {\n  background-color: var(--gold);\n}\n\n.Home_cloth_title {\n  background-color: var(--border-fashion);\n}\n\n.Home_city_title {\n  background-color: var(--green);\n}\n\n.Home__main_link {\n  color: white;\n}\n\n.Home_products {\n  margin-bottom: 1rem;\n}\n\n.Home_products_contain {\n  margin: auto;\n  width: 64rem;\n  padding: 0;\n  padding-bottom: 0.5rem;\n  background-color: var(--md-bg-primary);\n  border: 1px solid var(--bg-blur);\n  overflow: hidden;\n}\n\n.Home_products_row {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  list-style-type: none;\n}\n.Home_products_row .Home_products_item {\n  border: 0.2px solid var(--bg-blur);\n}\n\n@media (max-width: 500px), (orientation: landscape) and (max-width: 850px) and (max-height: 400px) {\n  .Home_products_contain {\n    width: 100%;\n    border-radius: 0;\n  }\n}", "",{"version":3,"sources":["webpack://./src/pages/home/_main/Home.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;AACJ;AAAI;EACI,mBAAA;AAER;;AAEA;EACI,6BAAA;AACJ;;AACA;EACI,uCAAA;AAEJ;;AAAA;EACI,8BAAA;AAGJ;;AAAA;EACI,YAAA;AAGJ;;AAAA;EACI,mBAAA;AAGJ;;AAAA;EACI,YAAA;EACA,YAAA;EACA,UAAA;EACA,sBAAA;EAEA,sCAAA;EACA,gCAAA;EAEA,gBAAA;AACJ;;AAEA;EACI,aAAA;EACA,uBAAA;EACA,eAAA;EAEA,qBAAA;AAAJ;AACI;EACI,kCAAA;AACR;;AAIA;EAEI;IACI,WAAA;IACA,gBAAA;EAFN;AACF","sourcesContent":[".Home{\r\n    padding-top: 0.5rem;\r\n    .App_title{\r\n        margin-bottom: 1rem;\r\n    }\r\n}\r\n\r\n.Home_phone_title{\r\n    background-color: var(--gold);\r\n}\r\n.Home_cloth_title{\r\n    background-color: var(--border-fashion);\r\n}\r\n.Home_city_title{\r\n    background-color: var(--green);\r\n}\r\n\r\n.Home__main_link{\r\n    color: white;\r\n}\r\n\r\n.Home_products {\r\n    margin-bottom: 1rem;\r\n}\r\n// .\r\n.Home_products_contain {\r\n    margin: auto;\r\n    width: 64rem;\r\n    padding: 0;\r\n    padding-bottom: 0.5rem;\r\n    \r\n    background-color: var(--md-bg-primary);\r\n    border: 1px solid var(--bg-blur);\r\n\r\n    overflow: hidden;\r\n}\r\n// ..\r\n.Home_products_row {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n\r\n    list-style-type: none;\r\n    .Home_products_item {\r\n        border: 0.2px solid var(--bg-blur);\r\n    }\r\n}\r\n\r\n// \r\n@media (max-width: 500px),\r\n    (orientation: landscape) and (max-width: 850px) and (max-height: 400px) {\r\n    .Home_products_contain {\r\n        width: 100%;\r\n        border-radius: 0;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./image/phone_jpg.jpg":
/*!*****************************!*\
  !*** ./image/phone_jpg.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/images_icons/324ce9c2345361017cf71de4d8fb070a.jpg");

/***/ }),

/***/ "./src/pages/home/_main/Home.scss":
/*!****************************************!*\
  !*** ./src/pages/home/_main/Home.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Home_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Home.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/_main/Home.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Home_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Home_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_home__main_Home_js.js.map