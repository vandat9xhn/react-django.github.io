(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_home__main_Home_js"],{

/***/ "./src/_default/city/DefaultCity.js":
/*!******************************************!*\
  !*** ./src/_default/city/DefaultCity.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default_city_history_arr = exports.default_city_history_obj = exports.default_city_arr = exports.default_city_obj = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _default_bool = __webpack_require__(/*! ../_common/default_bool */ "./src/_default/_common/default_bool.js");

var _default_id = __webpack_require__(/*! ../_common/default_id */ "./src/_default/_common/default_id.js");

var _default_image = __webpack_require__(/*! ../_common/default_image */ "./src/_default/_common/default_image.js");

var _default_user = __webpack_require__(/*! ../_common/default_user */ "./src/_default/_common/default_user.js");

var _getDefaultArr = __webpack_require__(/*! ../_common/getDefaultArr */ "./src/_default/_common/getDefaultArr.js");

var _getRandomFromArr = __webpack_require__(/*! ../_common/getRandomFromArr */ "./src/_default/_common/getRandomFromArr.js");

/* ------------------ CITY --------------- */

//
var city_name_arr = ['Ha Noi', 'Ha Nam', 'Nam Dinh', 'Da Lat', 'Da Nang', 'Can Tho', 'Ho Chi Minh'];

var street_name_arr = ['Nguyen Trai', 'Ha Dong', 'Nguyen Hue', 'Tran Khat Tran', 'Hai Ba Trung', 'Khuat Duy Tien', 'Cau Giay', 'To Huu'];

// const bg_color_arr = [
//     'bg-linear-45-success-tear.text-white',
//     'bg-primary.text-primary',
//     'bg-fb-active.text-secondary',
//     'bg-green.color-react',
// ];

var quote_arr = ['This is a street of Ha Noi', 'This is a street of Ha Nam', 'This is a street of Nam Dinh', 'This is a street of Da Nang', 'This is a street of Da Lat', 'This is a street of Can Tho', 'This is a street of Ho Chi Minh'];

var getRandomCommonCityObj = function getRandomCommonCityObj() {
    return {
        city: (0, _getRandomFromArr.getRandomFromArr)(city_name_arr),
        street: (0, _getRandomFromArr.getRandomFromArr)(street_name_arr),
        quote: (0, _getRandomFromArr.getRandomFromArr)(quote_arr),
        bg_color: (0, _default_id.getRandomNumber)(0, 3)
    };
};

//
var default_city_obj = exports.default_city_obj = function default_city_obj() {
    return _extends({
        id: (0, _default_id.getRandomId)()
    }, (0, _default_user.getRandomUser)(), getRandomCommonCityObj(), {
        image: (0, _default_image.getRandomImg)(),
        is_user: (0, _default_bool.getRandomBool)(),
        count_his: 2
    });
};

var default_city_arr = exports.default_city_arr = function default_city_arr() {
    return (0, _getDefaultArr.getDefaultArr)(default_city_obj, 4, 4);
};

//
var default_city_history_obj = exports.default_city_history_obj = function default_city_history_obj() {
    return _extends({
        id: (0, _default_id.getRandomId)()
    }, getRandomCommonCityObj(), {
        image: (0, _default_image.getRandomImgOrNull)(),
        created_time: '2021-06-29T06:51:05.370Z'
    });
};

var default_city_history_arr = exports.default_city_history_arr = function default_city_history_arr() {
    return (0, _getDefaultArr.getDefaultArr)(default_city_history_obj, 3, 4);
};

/***/ }),

/***/ "./src/_handle_api/city/CityHandleAPI.js":
/*!***********************************************!*\
  !*** ./src/_handle_api/city/CityHandleAPI.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handle_API_CityHistory_L = exports.handle_API_City_L = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var handle_API_City_L = exports.handle_API_City_L = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var c_count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _API01NoToken.API_City_L)(_extends({}, _CityParams.params_city_l, {
                            q: search,
                            c_count: c_count
                        }));

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

    return function handle_API_City_L() {
        return _ref.apply(this, arguments);
    };
}();

// history


var handle_API_CityHistory_L = exports.handle_API_CityHistory_L = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(city_id) {
        var c_count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return (0, _API01NoToken.API_CityHistory_L)(_extends({}, _CityParams.params_history_city, {
                            city_model: city_id,
                            c_count: c_count
                        }));

                    case 2:
                        res = _context2.sent;
                        return _context2.abrupt('return', res.data);

                    case 4:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function handle_API_CityHistory_L(_x3) {
        return _ref2.apply(this, arguments);
    };
}();

var _API01NoToken = __webpack_require__(/*! ../../api/api_django_no_token/api01/API01NoToken */ "./src/api/api_django_no_token/api01/API01NoToken.js");

var _CityParams = __webpack_require__(/*! ../../_params/city/CityParams */ "./src/_params/city/CityParams.js");

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

/***/ "./src/_params/city/CityParams.js":
/*!****************************************!*\
  !*** ./src/_params/city/CityParams.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
// 
var default_size = 5;

//
var params_city_l = exports.params_city_l = {
    page: 1,
    size: default_size
};

//
var params_history_city = exports.params_history_city = {
    page: 1,
    size: default_size
};

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

var _AxiosNoToken = __webpack_require__(/*! ../_axios/AxiosNoToken */ "./src/api/api_django_no_token/_axios/AxiosNoToken.js");

var _AxiosNoToken2 = _interopRequireDefault(_AxiosNoToken);

var _API_IsLogin = __webpack_require__(/*! ../../_common/API_IsLogin */ "./src/api/_common/API_IsLogin.js");

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _DefaultCity = __webpack_require__(/*! ../../../_default/city/DefaultCity */ "./src/_default/city/DefaultCity.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var API_City_L = exports.API_City_L = function API_City_L(params) {
    return (0, _ConstAPI.API_FakeReal)((0, _DefaultCity.default_city_arr)(), function () {
        return (0, _API_IsLogin.API_IsLogin_URL)({
            method: 'GET',
            params: params
        }, 'api/city/city-l/', 'api/city/city-no-token-l/');
    }, params);
};

//

//

//
var API_City_R = exports.API_City_R = function API_City_R(pk) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return (0, _AxiosNoToken2.default)({
        url: '/city/city-r/' + pk + '/',
        method: 'GET',
        params: params
    });
};

//
var API_CityHistory_L = exports.API_CityHistory_L = function API_CityHistory_L(params) {
    return (0, _ConstAPI.API_FakeReal)((0, _DefaultCity.default_city_history_arr)(), function () {
        return (0, _AxiosNoToken2.default)({
            url: '/city/history-l/',
            method: 'GET',
            params: params
        });
    }, params);
};

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

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _HomeFeed = __webpack_require__(/*! ../feed/_main/HomeFeed */ "./src/pages/home/feed/_main/HomeFeed.js");

var _HomeFeed2 = _interopRequireDefault(_HomeFeed);

var _HomeFashion = __webpack_require__(/*! ../fashion/_main/HomeFashion */ "./src/pages/home/fashion/_main/HomeFashion.js");

var _HomeFashion2 = _interopRequireDefault(_HomeFashion);

var _HomePhone = __webpack_require__(/*! ../phone/_main/HomePhone */ "./src/pages/home/phone/_main/HomePhone.js");

var _HomePhone2 = _interopRequireDefault(_HomePhone);

var _HomeCity = __webpack_require__(/*! ../city/_main/HomeCity */ "./src/pages/home/city/_main/HomeCity.js");

var _HomeCity2 = _interopRequireDefault(_HomeCity);

__webpack_require__(/*! ./Home.scss */ "./src/pages/home/_main/Home.scss");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
Home.propTypes = {};

//
function Home(props) {
    //
    return _react2.default.createElement(
        'div',
        { className: 'Home fashion-width padding-top-20px' },
        _react2.default.createElement(
            'div',
            { className: 'Home_part' },
            _react2.default.createElement(_HomeFeed2.default, null)
        ),
        _react2.default.createElement(
            'div',
            { className: 'Home_part' },
            _react2.default.createElement(_HomeFashion2.default, null)
        ),
        _react2.default.createElement(
            'div',
            { className: 'Home_part' },
            _react2.default.createElement(_HomePhone2.default, null)
        ),
        _react2.default.createElement(
            'div',
            { className: 'Home_part' },
            _react2.default.createElement(_HomeCity2.default, null)
        ),
        _react2.default.createElement(
            'div',
            { className: 'margin-bottom-20px' },
            _react2.default.createElement(
                _reactRouterDom.Link,
                {
                    className: 'color-inherit font-600 font-16px hv-underline hv-cl-blue',
                    to: '/learn-html'
                },
                'Learn'
            )
        )
    );
}

exports.default = Home;

/***/ }),

/***/ "./src/pages/home/city/_main/HomeCity.js":
/*!***********************************************!*\
  !*** ./src/pages/home/city/_main/HomeCity.js ***!
  \***********************************************/
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

var _CityHandleAPI = __webpack_require__(/*! ../../../../_handle_api/city/CityHandleAPI */ "./src/_handle_api/city/CityHandleAPI.js");

var _FavWithLetter = __webpack_require__(/*! ../../../../component/fav_with_letter/FavWithLetter */ "./src/component/fav_with_letter/FavWithLetter.js");

var _FavWithLetter2 = _interopRequireDefault(_FavWithLetter);

var _Carousel = __webpack_require__(/*! ../../../../component/carousel/_main/Carousel */ "./src/component/carousel/_main/Carousel.js");

var _Carousel2 = _interopRequireDefault(_Carousel);

__webpack_require__(/*! ./HomeCity.scss */ "./src/pages/home/city/_main/HomeCity.scss");

var _getDefaultArr = __webpack_require__(/*! ../../../../_default/_common/getDefaultArr */ "./src/_default/_common/getDefaultArr.js");

var _default_image = __webpack_require__(/*! ../../../../_default/_common/default_image */ "./src/_default/_common/default_image.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
//

//

// 


//


//
var VID_PICS = (0, _getDefaultArr.getDefaultArr)(_default_image.getRandomImg, 3, 5);

//
HomeCity.propTypes = {};

//
function HomeCity(props) {
    //
    return _react2.default.createElement(
        'div',
        { className: 'HomeCity' },
        _react2.default.createElement(
            'div',
            { className: 'home-title display-flex align-items-center' },
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/city-street' },
                    _react2.default.createElement(_FavWithLetter2.default, { letter: 'C', class_letter: 'text-green' })
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'flex-grow-1 padding-left-15px' },
                'Chia s\u1EBB t\u1EDBi t\u1EA5t c\u1EA3 m\u1ECDi ng\u01B0\u1EDDi v\u1EC1 th\xE0nh ph\u1ED1 c\u1EE7a b\u1EA1n'
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'HomeCity_body pos-rel' },
            _react2.default.createElement(
                'div',
                { className: 'pos-abs-100 padding-10px' },
                _react2.default.createElement(_Carousel2.default, {
                    vid_pics: [VID_PICS.slice(-1)[0]].concat(_toConsumableArray(VID_PICS), [VID_PICS[0]])
                })
            )
        )
    );
}

exports.default = HomeCity;

/***/ }),

/***/ "./src/pages/home/fashion/_main/HomeFashion.js":
/*!*****************************************************!*\
  !*** ./src/pages/home/fashion/_main/HomeFashion.js ***!
  \*****************************************************/
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

var _FashionHandleAPI = __webpack_require__(/*! ../../../../_handle_api/fashion/FashionHandleAPI */ "./src/_handle_api/fashion/FashionHandleAPI.js");

var _FavWithLetter = __webpack_require__(/*! ../../../../component/fav_with_letter/FavWithLetter */ "./src/component/fav_with_letter/FavWithLetter.js");

var _FavWithLetter2 = _interopRequireDefault(_FavWithLetter);

var _RowProducts = __webpack_require__(/*! ../../../fashion/components/row_products/_main/RowProducts */ "./src/pages/fashion/components/row_products/_main/RowProducts.js");

var _RowProducts2 = _interopRequireDefault(_RowProducts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
HomeFashion.propTypes = {};

//

//
function HomeFashion(props) {
    //
    return _react2.default.createElement(
        'div',
        { className: 'HomeFashion font-for-fashion' },
        _react2.default.createElement(
            'div',
            { className: 'home-title display-flex align-items-center' },
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/fashion' },
                    _react2.default.createElement(_FavWithLetter2.default, {
                        letter: 'S',
                        class_letter: 'color-fashion'
                    })
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'flex-grow-1 padding-left-15px' },
                'Mua g\xEC c\u0169ng c\xF3, gi\xE1 si\xEAu r\u1EBB, v\u1EADn chuy\u1EC3n nhanh'
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'pos-rel' },
            _react2.default.createElement(_RowProducts2.default, {
                handle_API_L: _FashionHandleAPI.handle_API_FsProduct_L,
                use_limit_count: true,
                limit_count: 20
            })
        )
    );
}

exports.default = HomeFashion;

/***/ }),

/***/ "./src/pages/home/feed/_main/HomeFeed.js":
/*!***********************************************!*\
  !*** ./src/pages/home/feed/_main/HomeFeed.js ***!
  \***********************************************/
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

var _ContextAPI = __webpack_require__(/*! ../../../../_context/ContextAPI */ "./src/_context/ContextAPI.js");

var _Carousel = __webpack_require__(/*! ../../../../component/carousel/_main/Carousel */ "./src/component/carousel/_main/Carousel.js");

var _Carousel2 = _interopRequireDefault(_Carousel);

var _FavWithLetter = __webpack_require__(/*! ../../../../component/fav_with_letter/FavWithLetter */ "./src/component/fav_with_letter/FavWithLetter.js");

var _FavWithLetter2 = _interopRequireDefault(_FavWithLetter);

__webpack_require__(/*! ./HomeFeed.scss */ "./src/pages/home/feed/_main/HomeFeed.scss");

var _getDefaultArr = __webpack_require__(/*! ../../../../_default/_common/getDefaultArr */ "./src/_default/_common/getDefaultArr.js");

var _default_image = __webpack_require__(/*! ../../../../_default/_common/default_image */ "./src/_default/_common/default_image.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
//

//

//


//


var VID_PICS = (0, _getDefaultArr.getDefaultArr)(_default_image.getRandomImg, 3, 5);

//
HomeFeed.propTypes = {};

//
function HomeFeed(props) {
    //
    var _useContext = (0, _react.useContext)(_ContextAPI.context_api),
        user = _useContext.user;

    //


    return _react2.default.createElement(
        'div',
        { className: 'HomeFeed' },
        _react2.default.createElement(
            'div',
            { className: 'home-title display-flex align-items-center' },
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '' + (user.id > 0 ? '/new-feed' : '/login-form') },
                    _react2.default.createElement(_FavWithLetter2.default, { letter: 'F', class_letter: 'text-blue' })
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'flex-grow-1 padding-left-15px' },
                'Giao l\u01B0u, chia s\u1EBB, tr\xF2 chuy\u1EC7n, h\u1ECDc t\u1EADp v\xE0 l\xE0m vi\u1EC7c'
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'HomeFeed_body pos-rel' },
            _react2.default.createElement(
                'div',
                { className: 'pos-abs-100 padding-10px' },
                _react2.default.createElement(_Carousel2.default, {
                    vid_pics: [VID_PICS.slice(-1)[0]].concat(_toConsumableArray(VID_PICS), [VID_PICS[0]])
                })
            )
        ),
        user.id > 0 ? null : _react2.default.createElement(
            'div',
            { className: 'display-flex-center padding-y-15px' },
            _react2.default.createElement(
                'div',
                { className: 'margin-right-10px' },
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { className: 'text-white', to: '/login-form' },
                    _react2.default.createElement(
                        'div',
                        { className: 'padding-x-10px padding-y-5px brs-3px bg-blue' },
                        '\u0110\u0103ng nh\u1EADp'
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { className: 'text-white', to: '/registration-form' },
                    _react2.default.createElement(
                        'div',
                        { className: 'padding-x-10px padding-y-5px brs-3px bg-green' },
                        '\u0110\u0103ng k\xED ngay'
                    )
                )
            )
        )
    );
}

exports.default = HomeFeed;

/***/ }),

/***/ "./src/pages/home/phone/_main/HomePhone.js":
/*!*************************************************!*\
  !*** ./src/pages/home/phone/_main/HomePhone.js ***!
  \*************************************************/
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

var _Constant = __webpack_require__(/*! ../../../../_constant/Constant */ "./src/_constant/Constant.js");

var _observerToDo = __webpack_require__(/*! ../../../../_some_function/observerToDo */ "./src/_some_function/observerToDo.js");

var _observerToDo2 = _interopRequireDefault(_observerToDo);

var _list = __webpack_require__(/*! ../../../../_handle_api/phone/list */ "./src/_handle_api/phone/list.js");

var _useDataShowMore2 = __webpack_require__(/*! ../../../../_hooks/useDataShowMore */ "./src/_hooks/useDataShowMore.js");

var _FavWithLetter = __webpack_require__(/*! ../../../../component/fav_with_letter/FavWithLetter */ "./src/component/fav_with_letter/FavWithLetter.js");

var _FavWithLetter2 = _interopRequireDefault(_FavWithLetter);

var _PLProduct = __webpack_require__(/*! ../../../../component/pl_product/_main/PLProduct */ "./src/component/pl_product/_main/PLProduct.js");

var _PLProduct2 = _interopRequireDefault(_PLProduct);

__webpack_require__(/*! ./HomePhone.scss */ "./src/pages/home/phone/_main/HomePhone.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
HomePhone.propTypes = {};

//

//

//

//

//
function HomePhone(props) {
    //
    var ref_main_elm = (0, _react.useRef)(null);

    //

    var _useDataShowMore = (0, _useDataShowMore2.useDataShowMore)({
        handle_API_L: _list.handle_API_PhoneLaptop_L
    }),
        data_state = _useDataShowMore.data_state,
        getData_API = _useDataShowMore.getData_API;

    //


    (0, _react.useEffect)(function () {
        (0, _observerToDo2.default)({
            elm: ref_main_elm.current,
            callback: getData_API
        });
    }, []);

    //
    return _react2.default.createElement(
        'div',
        { ref: ref_main_elm, className: 'HomePhone' },
        _react2.default.createElement(
            'div',
            { className: 'home-title display-flex align-items-center' },
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/phone-laptop' },
                    _react2.default.createElement(_FavWithLetter2.default, { letter: 'P', class_letter: 'text-gold' })
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'flex-grow-1 padding-left-15px' },
                '\u0110i\u1EC7n tho\u1EA1i, Laptop, ph\u1EE5 ki\u1EC7n'
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'pos-rel' },
            _react2.default.createElement(
                'ul',
                { className: 'display-flex flex-wrap list-none' },
                data_state.data_arr.slice(0, 6).map(function (product_obj) {
                    return _react2.default.createElement(
                        'li',
                        {
                            key: product_obj.id,
                            className: 'HomePhone_item ' + (_Constant.IS_MOBILE ? 'HomePhone_item-mobile' : '')
                        },
                        _react2.default.createElement(_PLProduct2.default, {
                            product_obj: product_obj,
                            use_compare: false,
                            use_type: false
                        })
                    );
                })
            )
        )
    );
}

exports.default = HomePhone;

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
___CSS_LOADER_EXPORT___.push([module.id, ".Home_part {\n  margin-bottom: 20px;\n  padding: 20px;\n  background-color: var(--md-bg-primary);\n  border-radius: 5px;\n  border-bottom: 1px solid var(--md-bg-blur);\n}\n\n@media (max-width: 500px) {\n  .home-title {\n    padding: 10px;\n    font-size: 14px;\n  }\n\n  .Home_part {\n    padding: 0;\n    border-radius: 0;\n  }\n\n  .HomeFeed_body {\n    padding-top: 50%;\n  }\n\n  .HomeCity_body {\n    padding-top: 50%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/pages/home/_main/Home.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,aAAA;EACA,sCAAA;EAEA,kBAAA;EACA,0CAAA;AAAJ;;AAIA;EAGI;IACI,aAAA;IACA,eAAA;EAHN;;EAQE;IACI,UAAA;IACA,gBAAA;EALN;;EAQE;IACI,gBAAA;EALN;;EAOE;IACI,gBAAA;EAJN;AACF","sourcesContent":[".Home_part {\r\n    margin-bottom: 20px;\r\n    padding: 20px;\r\n    background-color: var(--md-bg-primary);\r\n\r\n    border-radius: 5px;\r\n    border-bottom: 1px solid var(--md-bg-blur);\r\n}\r\n\r\n//\r\n@media (max-width: 500px) {\r\n    // ----\r\n\r\n    .home-title {\r\n        padding: 10px;\r\n        font-size: 14px;\r\n    }\r\n\r\n    // ----\r\n\r\n    .Home_part {\r\n        padding: 0;\r\n        border-radius: 0;\r\n    }\r\n\r\n    .HomeFeed_body {\r\n        padding-top: 50%;\r\n    }\r\n    .HomeCity_body {\r\n        padding-top: 50%;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/city/_main/HomeCity.scss":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/city/_main/HomeCity.scss ***!
  \**********************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".HomeCity_body {\n  padding-top: 33%;\n}", "",{"version":3,"sources":["webpack://./src/pages/home/city/_main/HomeCity.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;AACJ","sourcesContent":[".HomeCity_body{\r\n    padding-top: 33%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/feed/_main/HomeFeed.scss":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/feed/_main/HomeFeed.scss ***!
  \**********************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".HomeFeed_body {\n  padding-top: 33%;\n}", "",{"version":3,"sources":["webpack://./src/pages/home/feed/_main/HomeFeed.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;AACJ","sourcesContent":[".HomeFeed_body{\r\n    padding-top: 33%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/phone/_main/HomePhone.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/phone/_main/HomePhone.scss ***!
  \************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".HomePhone_item {\n  width: calc(100% / 6);\n}\n\n.HomePhone_item-mobile {\n  width: 33%;\n}\n\n@media (max-width: 450px) {\n  .HomePhone_item {\n    width: 50%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/pages/home/phone/_main/HomePhone.scss"],"names":[],"mappings":"AAAA;EACI,qBAAA;AACJ;;AACA;EACI,UAAA;AAEJ;;AAEA;EACI;IACI,UAAA;EACN;AACF","sourcesContent":[".HomePhone_item {\r\n    width: calc(100% / 6);\r\n}\r\n.HomePhone_item-mobile {\r\n    width: 33%;\r\n}\r\n\r\n//\r\n@media (max-width: 450px) {\r\n    .HomePhone_item {\r\n        width: 50%;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ }),

/***/ "./src/pages/home/city/_main/HomeCity.scss":
/*!*************************************************!*\
  !*** ./src/pages/home/city/_main/HomeCity.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_HomeCity_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./HomeCity.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/city/_main/HomeCity.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_HomeCity_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_HomeCity_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/home/feed/_main/HomeFeed.scss":
/*!*************************************************!*\
  !*** ./src/pages/home/feed/_main/HomeFeed.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_HomeFeed_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./HomeFeed.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/feed/_main/HomeFeed.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_HomeFeed_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_HomeFeed_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/home/phone/_main/HomePhone.scss":
/*!***************************************************!*\
  !*** ./src/pages/home/phone/_main/HomePhone.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_HomePhone_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./HomePhone.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/phone/_main/HomePhone.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_HomePhone_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_HomePhone_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_home__main_Home_js.js.map