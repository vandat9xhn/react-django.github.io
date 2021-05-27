(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_phone_laptop_pages___home_page__main_PhoneLaptop_js"],{

/***/ "./src/_some_function/getWidthTransform.js":
/*!*************************************************!*\
  !*** ./src/_some_function/getWidthTransform.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
/**
 * get width to transform and max width transform base on row and item
 */
function getWidthTransform() {
    var class_row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var class_item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var total_item = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    var width_row = document.getElementsByClassName(class_row)[0].getBoundingClientRect().width;
    var width_item = document.getElementsByClassName(class_item)[0].getBoundingClientRect().width;
    var width_total = width_item * total_item;
    //
    var width_transform = Math.floor(width_row / width_item) * width_item;
    var max_width_transform = width_total - width_row;
    // 
    return [width_transform, max_width_transform];
}

exports.default = getWidthTransform;

/***/ }),

/***/ "./src/_some_function/observerAppearance.js":
/*!**************************************************!*\
  !*** ./src/_some_function/observerAppearance.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var observerAppearance = function observerAppearance(elm) {
    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.dataset.appearance = true;
                observer.unobserve(entry.target);
            } else {
                if (entry.target.dataset.appearance) {
                    entry.target.dataset.appearance = false;
                    observer.unobserve(entry.target);
                }
            }
        });
    }, {
        threshold: 0.9
    });
    //
    observer.observe(elm);
};

exports.default = observerAppearance;

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

/***/ "./src/pages/phone_laptop/components/content/ProductContent.js":
/*!*********************************************************************!*\
  !*** ./src/pages/phone_laptop/components/content/ProductContent.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ProductItem = __webpack_require__(/*! ../../../../component/products/product_item/ProductItem */ "./src/component/products/product_item/ProductItem.js");

var _ProductItem2 = _interopRequireDefault(_ProductItem);

__webpack_require__(/*! ./ProductContent.scss */ "./src/pages/phone_laptop/components/content/ProductContent.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
function ProductContent(props) {
    var products = props.products;

    // 

    return _react2.default.createElement(
        'div',
        { className: 'ProductContent' },
        _react2.default.createElement(
            'div',
            { className: 'ProductContent_row' },
            products.map(function (item, index) {
                return _react2.default.createElement(
                    'div',
                    { key: index, className: 'ProductContent_item' },
                    _react2.default.createElement(_ProductItem2.default, {
                        link: '/phone-laptop:' + item.id,
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
    );
}
//


ProductContent.propTypes = {
    products: _propTypes2.default.array
};

exports.default = ProductContent;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/__home_page/_main/PhoneLaptop.js":
/*!***********************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/__home_page/_main/PhoneLaptop.js ***!
  \***********************************************************************/
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

var _PhoneLaptopAPI = __webpack_require__(/*! ../../../../../api/api_django_no_token/phone_laptop/PhoneLaptopAPI */ "./src/api/api_django_no_token/phone_laptop/PhoneLaptopAPI.js");

var _useMounted = __webpack_require__(/*! ../../../../../_custom_hooks/useMounted */ "./src/_custom_hooks/useMounted.js");

var _observerToDo = __webpack_require__(/*! ../../../../../_some_function/observerToDo */ "./src/_some_function/observerToDo.js");

var _observerToDo2 = _interopRequireDefault(_observerToDo);

var _ProductsAnimate = __webpack_require__(/*! ../products_animate/ProductsAnimate */ "./src/pages/phone_laptop/pages/__home_page/products_animate/ProductsAnimate.js");

var _ProductsAnimate2 = _interopRequireDefault(_ProductsAnimate);

var _SpecProducts = __webpack_require__(/*! ../products_spec/SpecProducts */ "./src/pages/phone_laptop/pages/__home_page/products_spec/SpecProducts.js");

var _SpecProducts2 = _interopRequireDefault(_SpecProducts);

__webpack_require__(/*! ./PhoneLaptop.scss */ "./src/pages/phone_laptop/pages/__home_page/_main/PhoneLaptop.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// const
var skeleton_arr = [1, 2, 3, 4, 5, 6];
var hot_products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var initial_params = {
    pk: -1,
    gte_price: 0,
    lte_price: 100000000,
    in_stock: '',
    page: 1
};

//
PhoneLaptop.propTypes = {};

//
function PhoneLaptop(props) {

    /* ------------------- GET API --------------------*/

    var getPhonesLaptops = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params, setState) {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return (0, _PhoneLaptopAPI.API_PhoneLaptop_L)(_extends({}, initial_params, params));

                        case 3:
                            res = _context.sent;

                            mounted && setState(res.data.data);
                            //
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

        return function getPhonesLaptops(_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }();

    //


    //
    var _useState = (0, _react.useState)(hot_products),
        _useState2 = _slicedToArray(_useState, 2),
        hot_product_arr = _useState2[0],
        setHotProductArr = _useState2[1];

    var _useState3 = (0, _react.useState)(skeleton_arr),
        _useState4 = _slicedToArray(_useState3, 2),
        phone_arr = _useState4[0],
        setPhoneArr = _useState4[1];

    var _useState5 = (0, _react.useState)(skeleton_arr),
        _useState6 = _slicedToArray(_useState5, 2),
        laptop_arr = _useState6[0],
        setLaptopArr = _useState6[1];

    //


    var ref_hot = (0, _react.useRef)(null);
    var ref_phone = (0, _react.useRef)(null);
    var ref_lap = (0, _react.useRef)(null);

    //
    var mounted = (0, _useMounted.useMounted)();

    //
    (0, _react.useEffect)(function () {
        document.title = 'Phone Laptop';
        getAPIWhenCDM();
    }, []);

    //
    function getAPIWhenCDM() {
        (0, _observerToDo2.default)(ref_hot.current, function () {
            return getPhonesLaptops({
                is_hot: 1,
                size: 12
            }, setHotProductArr);
        }, 0);

        (0, _observerToDo2.default)(ref_phone.current, function () {
            return getPhonesLaptops({
                type_product: 'phone',
                size: 15
            }, setPhoneArr);
        }, 0);

        (0, _observerToDo2.default)(ref_lap.current, function () {
            return getPhonesLaptops({
                type_product: 'laptop',
                size: 15
            }, setLaptopArr);
        }, 0);
    }return _react2.default.createElement(
        'div',
        { className: 'PhoneLaptop' },
        _react2.default.createElement(
            'div',
            { ref: ref_hot, className: 'PhoneLaptop_banner' },
            _react2.default.createElement(_ProductsAnimate2.default, { products: hot_product_arr })
        ),
        _react2.default.createElement(
            'div',
            { ref: ref_phone, className: 'PhoneLaptop_phone' },
            _react2.default.createElement(_SpecProducts2.default, {
                products: phone_arr,
                title: 'Phone',
                link: '/phone-laptop-phones'
            })
        ),
        _react2.default.createElement(
            'div',
            { ref: ref_lap, className: 'PhoneLaptop_laptop' },
            _react2.default.createElement(_SpecProducts2.default, {
                products: laptop_arr,
                title: 'Laptop',
                link: '/phone-laptop-laptops'
            })
        )
    );
}

exports.default = PhoneLaptop;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/__home_page/products_animate/ProductsAnimate.js":
/*!**************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/__home_page/products_animate/ProductsAnimate.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconsArrow = __webpack_require__(/*! ../../../../../_icons_svg/icons_arrow/IconsArrow */ "./src/_icons_svg/icons_arrow/IconsArrow.js");

var _IconsArrow2 = _interopRequireDefault(_IconsArrow);

var _ProductItem = __webpack_require__(/*! ../../../../../component/products/product_item/ProductItem */ "./src/component/products/product_item/ProductItem.js");

var _ProductItem2 = _interopRequireDefault(_ProductItem);

var _getWidthTransform5 = __webpack_require__(/*! ../../../../../_some_function/getWidthTransform */ "./src/_some_function/getWidthTransform.js");

var _getWidthTransform6 = _interopRequireDefault(_getWidthTransform5);

var _observerAppearance = __webpack_require__(/*! ../../../../../_some_function/observerAppearance */ "./src/_some_function/observerAppearance.js");

var _observerAppearance2 = _interopRequireDefault(_observerAppearance);

__webpack_require__(/*! ./ProductsAnimate.scss */ "./src/pages/phone_laptop/pages/__home_page/products_animate/ProductsAnimate.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//

//


// class
var ProductsAnimate = function (_Component) {
    _inherits(ProductsAnimate, _Component);

    function ProductsAnimate() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ProductsAnimate);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProductsAnimate.__proto__ || Object.getPrototypeOf(ProductsAnimate)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            translateX: 0
        }, _this.makeBtnDisabled = function () {
            _this.stop_auto = true;
            _this.just_click = true;
            setTimeout(function () {
                _this.just_click = false;
            }, 1000);
        }, _this.nextPhones = function () {
            if (_this.just_click) {
                return;
            }

            var _getWidthTransform = (0, _getWidthTransform6.default)('ProductsAnimate_row', 'ProductsAnimate__0', _this.props.products.length),
                _getWidthTransform2 = _slicedToArray(_getWidthTransform, 2),
                width_transform = _getWidthTransform2[0],
                max_width_transform = _getWidthTransform2[1];

            var translateX = _this.state.translateX;
            //

            _this.setState({
                translateX: translateX >= max_width_transform ? 0 : translateX + width_transform < max_width_transform ? translateX + width_transform : max_width_transform
            });
            //
            _this.makeBtnDisabled();
        }, _this.prevPhones = function () {
            if (_this.just_click) {
                return;
            }

            var _getWidthTransform3 = (0, _getWidthTransform6.default)('ProductsAnimate_row', 'ProductsAnimate__0', _this.props.products.length),
                _getWidthTransform4 = _slicedToArray(_getWidthTransform3, 2),
                width_transform = _getWidthTransform4[0],
                max_width_transform = _getWidthTransform4[1];

            var translateX = _this.state.translateX;
            //

            _this.setState({
                translateX: translateX == 0 ? max_width_transform : translateX - width_transform < 0 ? 0 : translateX - width_transform
            });
            //
            _this.makeBtnDisabled();
        }, _this.autoNext = function () {
            if (_this.mounted) {
                var elm = document.getElementsByClassName('ProductsAnimate_contain')[0];
                var appearance = elm.dataset.appearance;
                //

                if (appearance != 'false') {
                    if (!_this.stop_auto) {
                        _this.nextPhones();
                        // reason: nextPhones() make this.stop = true
                        _this.stop_auto = false;
                    } else {
                        _this.stop_auto = false;
                    }
                }
                // call autoNext again
                setTimeout(function () {
                    (0, _observerAppearance2.default)(elm);
                    setTimeout(function () {
                        _this.autoNext();
                    }, 1000);
                }, 7000);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ProductsAnimate, [{
        key: 'componentDidMount',


        // cdm
        value: function componentDidMount() {
            this.mounted = true;
            this.just_click = false;
            this.stop_auto = true;

            this.autoNext();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.mounted = false;
        }

        /* --------------------------- NEXT PREV ---------------------------------- */

        //


        // next


        // prev


        // auto next

    }, {
        key: 'render',


        // render
        value: function render() {
            var translateX = this.state.translateX;
            var products = this.props.products;


            return _react2.default.createElement(
                'div',
                { className: 'ProductsAnimate' },
                _react2.default.createElement(
                    'div',
                    { className: 'ProductsAnimate_title App_title' },
                    'HOT PRODUCTS'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'ProductsAnimate_margin' },
                    _react2.default.createElement(
                        'div',
                        {
                            className: 'ProductsAnimate_contain brs-5px box-shadow-1',
                            'data-appearance': 'false'
                        },
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'ProductsAnimate_row',
                                style: {
                                    transform: 'translateX(' + -translateX + 'px)'
                                }
                            },
                            products.map(function (item, index) {
                                return _react2.default.createElement(
                                    'div',
                                    {
                                        className: 'ProductsAnimate__' + index,
                                        key: 'ProductsAnimate__' + index
                                    },
                                    _react2.default.createElement(_ProductItem2.default, {
                                        link: '/phone-laptop:' + item.id,
                                        img: item.url,
                                        name: item.name,
                                        in_stock: item.in_stock,
                                        new_price: item.new_price,
                                        old_price: item.old_price,
                                        discount: item.discount,
                                        installment: item.installment,
                                        img_or_dataset: index < 6
                                    })
                                );
                            })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'ProductsAnimate_next' },
                            _react2.default.createElement(
                                'div',
                                {
                                    className: 'cursor-pointer hv-opacity',
                                    onClick: this.nextPhones,
                                    title: 'next'
                                },
                                _react2.default.createElement(_IconsArrow2.default, { x: 200 })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'ProductsAnimate_prev' },
                            _react2.default.createElement(
                                'div',
                                {
                                    className: 'cursor-pointer hv-opacity',
                                    onClick: this.prevPhones,
                                    title: 'previous'
                                },
                                _react2.default.createElement(_IconsArrow2.default, { x: 400 })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ProductsAnimate;
}(_react.Component);

ProductsAnimate.propTypes = {
    products: _propTypes2.default.array
};

exports.default = ProductsAnimate;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/__home_page/products_spec/SpecProducts.js":
/*!********************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/__home_page/products_spec/SpecProducts.js ***!
  \********************************************************************************/
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

__webpack_require__(/*! ./SpecProducts.scss */ "./src/pages/phone_laptop/pages/__home_page/products_spec/SpecProducts.scss");

var _ProductContent = __webpack_require__(/*! ../../../components/content/ProductContent */ "./src/pages/phone_laptop/components/content/ProductContent.js");

var _ProductContent2 = _interopRequireDefault(_ProductContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
function SpecProducts(props) {
    var products = props.products,
        title = props.title,
        link = props.link;


    return _react2.default.createElement(
        'div',
        { className: 'SpecProducts' },
        _react2.default.createElement(
            'div',
            { className: 'SpecProducts_title box-shadow-1' },
            _react2.default.createElement(
                'div',
                { className: 'App_title' },
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { className: 'SpecProducts_text normal-text', to: link },
                    title
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'SpecProducts_list' },
            _react2.default.createElement(_ProductContent2.default, { products: products })
        )
    );
}

SpecProducts.propTypes = {
    products: _propTypes2.default.array
};

exports.default = SpecProducts;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/content/ProductContent.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/content/ProductContent.scss ***!
  \********************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".ProductContent {\n  padding: 0.5rem;\n  background-color: var(--md-bg-primary);\n}\n\n.ProductContent_row {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.ProductContent_item {\n  padding: 0.25rem;\n  border: 1px solid var(--md-bg-ccc);\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/components/content/ProductContent.scss"],"names":[],"mappings":"AACA;EACI,eAAA;EACA,sCAAA;AAAJ;;AAGA;EACI,aAAA;EACA,eAAA;EACA,uBAAA;AAAJ;;AAGA;EACI,gBAAA;EACA,kCAAA;AAAJ","sourcesContent":["\r\n.ProductContent{\r\n    padding: 0.5rem;\r\n    background-color: var(--md-bg-primary);\r\n}\r\n// .\r\n.ProductContent_row{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n// ..\r\n.ProductContent_item{\r\n    padding: 0.25rem;\r\n    border: 1px solid var(--md-bg-ccc);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/__home_page/_main/PhoneLaptop.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/__home_page/_main/PhoneLaptop.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _image_banner_laptop_phone_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../image/banner_laptop_phone.jpg */ "./image/banner_laptop_phone.jpg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_image_banner_laptop_phone_jpg__WEBPACK_IMPORTED_MODULE_3__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".PhoneLaptop_banner {\n  margin-bottom: 1rem;\n  height: 20rem;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n.PhoneLaptop_phone {\n  margin-bottom: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/__home_page/_main/PhoneLaptop.scss"],"names":[],"mappings":"AAGA;EACI,mBAAA;EACA,aAAA;EAEA,yDAAA;EACA,4BAAA;EACA,2BAAA;EACA,sBAAA;AAHJ;;AAMA;EACI,mBAAA;AAHJ","sourcesContent":["\r\n\r\n//\r\n.PhoneLaptop_banner{\r\n    margin-bottom: 1rem;\r\n    height: 20rem;\r\n\r\n    background-image: url('/image/banner_laptop_phone.jpg');\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n\r\n.PhoneLaptop_phone{\r\n    margin-bottom: 1rem;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/__home_page/products_animate/ProductsAnimate.scss":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/__home_page/products_animate/ProductsAnimate.scss ***!
  \*************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".ProductsAnimate_prev, .ProductsAnimate_next {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.ProductsAnimate_prev > div, .ProductsAnimate_next > div {\n  padding: 0.5rem 0.3rem;\n  background-color: var(--md-bg-ccc);\n}\n\n/* --------------------------------- */\n.ProductsAnimate {\n  width: 100%;\n}\n\n.ProductsAnimate_margin {\n  margin-bottom: 2rem;\n}\n\n.ProductsAnimate_contain {\n  position: relative;\n  margin: auto;\n  width: 60rem;\n  max-width: 98vw;\n  overflow: hidden;\n  background-color: var(--md-bg-through);\n}\n\n.ProductsAnimate_title {\n  background-color: var(--danger);\n  color: white;\n}\n\n.ProductsAnimate_row {\n  display: flex;\n  flex-wrap: nowrap;\n  position: relative;\n  transition: transform 1s;\n}\n\n.ProductsAnimate_next {\n  right: 0;\n}\n.ProductsAnimate_next > div {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.ProductsAnimate_prev {\n  left: 0;\n}\n.ProductsAnimate_prev > div {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n@media (orientation: portrait) and (max-width: 500px) {\n  .ProductsAnimate_next > div, .ProductsAnimate_prev > div {\n    padding: 0.25rem;\n  }\n  .ProductsAnimate_next svg, .ProductsAnimate_prev svg {\n    width: 1rem;\n    height: 1rem;\n  }\n}\n@media (max-width: 959px) {\n  .ProductsAnimate_contain {\n    width: 48rem;\n  }\n}\n@media (max-width: 767px) {\n  .ProductsAnimate_contain {\n    width: 36rem;\n  }\n}\n@media (max-width: 500px) {\n  .ProductsAnimate_contain {\n    width: 24rem;\n  }\n}\n@media (max-width: 350px) {\n  .ProductsAnimate_contain {\n    width: 14rem;\n  }\n}\n@media (max-width: 280px) {\n  .ProductsAnimate_contain {\n    width: 13rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/__home_page/products_animate/ProductsAnimate.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,QAAA;EACA,2BAAA;AACJ;AAAI;EACI,sBAAA;EACA,kCAAA;AAER;;AAEA,sCAAA;AACA;EACI,WAAA;AACJ;;AAEA;EACI,mBAAA;AACJ;;AACA;EACI,kBAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;EAEA,sCAAA;AACJ;;AAEA;EACI,+BAAA;EACA,YAAA;AACJ;;AAEA;EACI,aAAA;EACA,iBAAA;EACA,kBAAA;EAEA,wBAAA;AAAJ;;AAGA;EACI,QAAA;AAAJ;AAEI;EACI,2BAAA;EACA,8BAAA;AAAR;;AAGA;EACI,OAAA;AAAJ;AAEI;EACI,4BAAA;EACA,+BAAA;AAAR;;AAMA;EAEQ;IACI,gBAAA;EAJV;EAMM;IACI,WAAA;IACA,YAAA;EAJV;AACF;AAQA;EACI;IACI,YAAA;EANN;AACF;AASA;EACI;IACI,YAAA;EAPN;AACF;AAUA;EACI;IACI,YAAA;EARN;AACF;AAWA;EACI;IACI,YAAA;EATN;AACF;AAYA;EAEI;IACI,YAAA;EAXN;AACF","sourcesContent":["%top-center {\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    & > div {\r\n        padding: 0.5rem 0.3rem;\r\n        background-color: var(--md-bg-ccc);\r\n    }\r\n}\r\n\r\n/* --------------------------------- */\r\n.ProductsAnimate {\r\n    width: 100%;\r\n}\r\n\r\n.ProductsAnimate_margin{\r\n    margin-bottom: 2rem;\r\n}\r\n.ProductsAnimate_contain {\r\n    position: relative;\r\n    margin: auto;\r\n    width: 60rem;\r\n    max-width: 98vw;\r\n    overflow: hidden;\r\n\r\n    background-color: var(--md-bg-through);\r\n}\r\n\r\n.ProductsAnimate_title {\r\n    background-color: var(--danger);\r\n    color: white;\r\n}\r\n\r\n.ProductsAnimate_row {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    position: relative;\r\n\r\n    transition: transform 1s;\r\n}\r\n\r\n.ProductsAnimate_next {\r\n    right: 0;\r\n    @extend %top-center;\r\n    &>div{\r\n        border-top-left-radius: 5px;\r\n        border-bottom-left-radius: 5px;\r\n    }\r\n}\r\n.ProductsAnimate_prev {\r\n    left: 0;\r\n    @extend %top-center;\r\n    &>div{\r\n        border-top-right-radius: 5px;\r\n        border-bottom-right-radius: 5px;\r\n    }\r\n}\r\n\r\n\r\n//\r\n@media (orientation: portrait) and (max-width: 500px) {\r\n    .ProductsAnimate_next, .ProductsAnimate_prev{\r\n        &>div{\r\n            padding: 0.25rem;\r\n        }\r\n        svg{\r\n            width: 1rem;\r\n            height: 1rem;\r\n        }\r\n    }\r\n}\r\n\r\n@media (max-width: 959px){\r\n    .ProductsAnimate_contain{\r\n        width: 48rem;\r\n    }\r\n}\r\n\r\n@media (max-width: 767px){\r\n    .ProductsAnimate_contain{\r\n        width: 36rem;\r\n    }\r\n}\r\n\r\n@media (max-width: 500px){\r\n    .ProductsAnimate_contain{\r\n        width: 24rem;\r\n    }\r\n}\r\n\r\n@media (max-width: 350px){\r\n    .ProductsAnimate_contain{\r\n        width: 14rem;\r\n    }\r\n}\r\n\r\n@media (max-width: 280px){\r\n    //\r\n    .ProductsAnimate_contain{\r\n        width: 13rem;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/__home_page/products_spec/SpecProducts.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/__home_page/products_spec/SpecProducts.scss ***!
  \*******************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/* title */\n.SpecProducts_title {\n  background-color: var(--gold);\n}\n\n.SpecProducts_text {\n  color: white;\n}\n.SpecProducts_text:hover {\n  color: var(--blue);\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/__home_page/products_spec/SpecProducts.scss"],"names":[],"mappings":"AAAA,UAAA;AACA;EACI,6BAAA;AACJ;;AAEA;EACI,YAAA;AACJ;AAAI;EACI,kBAAA;AAER","sourcesContent":["/* title */\r\n.SpecProducts_title {\r\n    background-color: var(--gold);\r\n}\r\n\r\n.SpecProducts_text {\r\n    color: white;\r\n    &:hover {\r\n        color: var(--blue);\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./image/banner_laptop_phone.jpg":
/*!***************************************!*\
  !*** ./image/banner_laptop_phone.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/images_icons/ce965b9391dc04900379806e858f4881.jpg");

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

/***/ "./src/pages/phone_laptop/components/content/ProductContent.scss":
/*!***********************************************************************!*\
  !*** ./src/pages/phone_laptop/components/content/ProductContent.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProductContent_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ProductContent.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/content/ProductContent.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProductContent_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProductContent_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/__home_page/_main/PhoneLaptop.scss":
/*!*************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/__home_page/_main/PhoneLaptop.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PhoneLaptop_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PhoneLaptop.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/__home_page/_main/PhoneLaptop.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PhoneLaptop_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PhoneLaptop_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/__home_page/products_animate/ProductsAnimate.scss":
/*!****************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/__home_page/products_animate/ProductsAnimate.scss ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProductsAnimate_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./ProductsAnimate.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/__home_page/products_animate/ProductsAnimate.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProductsAnimate_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProductsAnimate_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/__home_page/products_spec/SpecProducts.scss":
/*!**********************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/__home_page/products_spec/SpecProducts.scss ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_SpecProducts_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./SpecProducts.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/__home_page/products_spec/SpecProducts.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_SpecProducts_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_SpecProducts_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_phone_laptop_pages___home_page__main_PhoneLaptop_js.js.map