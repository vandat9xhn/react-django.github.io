(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_phone_laptop_pages__product_detail__main_PhoneLaptopDetail_js"],{

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

/***/ "./src/component/button/button_ripple/ButtonRipple.js":
/*!************************************************************!*\
  !*** ./src/component/button/button_ripple/ButtonRipple.js ***!
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

__webpack_require__(/*! ./ButtonRipple.scss */ "./src/component/button/button_ripple/ButtonRipple.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
ButtonRipple.propTypes = {
    type: _propTypes2.default.string,
    title: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    ripple_type: _propTypes2.default.string,

    children: _propTypes2.default.any,
    onClick: _propTypes2.default.func
};
//


ButtonRipple.defaultProps = {
    title: '',
    type: 'text',
    ripple_type: 'right',
    disabled: false
};

//
function ButtonRipple(props) {
    // ripple_type is one of ['right', 'left', 'center']
    var children = props.children,
        onClick = props.onClick,
        type = props.type,
        disabled = props.disabled,
        ripple_type = props.ripple_type,
        title = props.title;

    //

    return _react2.default.createElement(
        'button',
        {
            className: 'ButtonRipple label-field ' + (disabled ? 'opacity-5 pointer-events-none' : 'cursor-pointer'),
            type: type,
            title: title,
            disabled: disabled,
            onClick: onClick
        },
        _react2.default.createElement('div', {
            className: 'ButtonRipple_common ButtonRipple_' + ripple_type + ' ' + (disabled ? 'display-none' : '')
        }),
        children
    );
}

exports.default = ButtonRipple;

/***/ }),

/***/ "./src/component/some_div/notice_div/NoticeDiv.js":
/*!********************************************************!*\
  !*** ./src/component/some_div/notice_div/NoticeDiv.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ./NoticeDiv.scss */ "./src/component/some_div/notice_div/NoticeDiv.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
NoticeDiv.propTypes = {
    children: _propTypes2.default.element
};
//
function NoticeDiv(props) {
    return _react2.default.createElement(
        'div',
        { className: 'NoticeDiv' },
        props.children
    );
}

exports.default = NoticeDiv;

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

/***/ "./src/pages/phone_laptop/pages/_product_detail/_main/PhoneLaptopDetail.js":
/*!*********************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/_product_detail/_main/PhoneLaptopDetail.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
//

// 

// 

// 


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _makeFormData = __webpack_require__(/*! ../../../../../_some_function/makeFormData */ "./src/_some_function/makeFormData.js");

var _makeFormData2 = _interopRequireDefault(_makeFormData);

var _PhoneLaptopAPI = __webpack_require__(/*! ../../../../../api/api_django_no_token/phone_laptop/PhoneLaptopAPI */ "./src/api/api_django_no_token/phone_laptop/PhoneLaptopAPI.js");

var _BlurFetchingDiv = __webpack_require__(/*! ../../../../../component/some_div/fetching/BlurFetchingDiv */ "./src/component/some_div/fetching/BlurFetchingDiv.js");

var _BlurFetchingDiv2 = _interopRequireDefault(_BlurFetchingDiv);

var _FetchingDiv = __webpack_require__(/*! ../../../../../component/some_div/fetching/FetchingDiv */ "./src/component/some_div/fetching/FetchingDiv.js");

var _FetchingDiv2 = _interopRequireDefault(_FetchingDiv);

var _NoticeDiv = __webpack_require__(/*! ../../../../../component/some_div/notice_div/NoticeDiv */ "./src/component/some_div/notice_div/NoticeDiv.js");

var _NoticeDiv2 = _interopRequireDefault(_NoticeDiv);

var _ProductDetail = __webpack_require__(/*! ../detail/ProductDetail */ "./src/pages/phone_laptop/pages/_product_detail/detail/ProductDetail.js");

var _ProductDetail2 = _interopRequireDefault(_ProductDetail);

var _RelativeProducts = __webpack_require__(/*! ../relative/RelativeProducts */ "./src/pages/phone_laptop/pages/_product_detail/relative/RelativeProducts.js");

var _RelativeProducts2 = _interopRequireDefault(_RelativeProducts);

var _PhoneLaptopType = __webpack_require__(/*! ../type_buy/_main/PhoneLaptopType */ "./src/pages/phone_laptop/pages/_product_detail/type_buy/_main/PhoneLaptopType.js");

var _PhoneLaptopType2 = _interopRequireDefault(_PhoneLaptopType);

var _PhoneLaptopConfirmBuy = __webpack_require__(/*! ../confirm_buy/PhoneLaptopConfirmBuy */ "./src/pages/phone_laptop/pages/_product_detail/confirm_buy/PhoneLaptopConfirmBuy.js");

var _PhoneLaptopConfirmBuy2 = _interopRequireDefault(_PhoneLaptopConfirmBuy);

__webpack_require__(/*! ./PhoneLaptopDetail.scss */ "./src/pages/phone_laptop/pages/_product_detail/_main/PhoneLaptopDetail.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
function PhoneLaptopDetail() {
    var _this = this;

    //
    var sendOrderBuy = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
            var formData;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            formData = (0, _makeFormData2.default)(data);
                            _context2.next = 3;
                            return (0, _PhoneLaptopAPI.API_PhoneOrder_C)(formData);

                        case 3:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        return function sendOrderBuy(_x2) {
            return _ref2.apply(this, arguments);
        };
    }();

    //


    //
    var link_id = (0, _reactRouterDom.useParams)().id;
    //

    var _useState = (0, _react.useState)({}),
        _useState2 = _slicedToArray(_useState, 2),
        product = _useState2[0],
        setProduct = _useState2[1];

    var _useState3 = (0, _react.useState)([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]),
        _useState4 = _slicedToArray(_useState3, 2),
        relative_products = _useState4[0],
        setRelativeProducts = _useState4[1];

    var _useState5 = (0, _react.useState)(''),
        _useState6 = _slicedToArray(_useState5, 2),
        actions_buying = _useState6[0],
        setActionsBuying = _useState6[1];

    var _useState7 = (0, _react.useState)(false),
        _useState8 = _slicedToArray(_useState7, 2),
        show_discount_type = _useState8[0],
        setShowDiscountType = _useState8[1];

    var _useState9 = (0, _react.useState)(false),
        _useState10 = _slicedToArray(_useState9, 2),
        is_buying = _useState10[0],
        setIsBuying = _useState10[1];

    var _useState11 = (0, _react.useState)(false),
        _useState12 = _slicedToArray(_useState11, 2),
        notice_success = _useState12[0],
        setNoticeSuccess = _useState12[1];

    var _useState13 = (0, _react.useState)(0),
        _useState14 = _slicedToArray(_useState13, 2),
        type_ix = _useState14[0],
        setTypeIx = _useState14[1];

    //


    (0, _react.useEffect)(function () {
        getPhoneAndRelativeProducts(link_id);
        window.scrollTo(0, 0);
    }, [link_id]);

    // get product detail
    var getPhoneAndRelativeProducts = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(link_id) {
            var res1, new_product, type_product, name, new_price, res2;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return (0, _PhoneLaptopAPI.API_PhoneLaptop_R)(link_id);

                        case 3:
                            res1 = _context.sent;
                            new_product = res1.data;

                            setProduct(new_product);
                            // relative products
                            type_product = new_product.type_product, name = new_product.name, new_price = new_product.new_price;

                            document.title = name;
                            //
                            _context.next = 10;
                            return (0, _PhoneLaptopAPI.API_PhoneLaptop_L)({
                                pk: link_id,
                                type_product: type_product,
                                gte_price: new_price - 2000000,
                                lte_price: new_price + 2000000,
                                in_stock: '',
                                is_hot: [1, 2],
                                page: 1,
                                size: 10
                            });

                        case 10:
                            res2 = _context.sent;

                            setRelativeProducts(res2.data.data);

                            _context.next = 17;
                            break;

                        case 14:
                            _context.prev = 14;
                            _context.t0 = _context['catch'](0);

                            console.log(_context.t0);

                        case 17:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this, [[0, 14]]);
        }));

        return function getPhoneAndRelativeProducts(_x) {
            return _ref.apply(this, arguments);
        };
    }();

    /* --------------------------- TYPE BUY -------------------------- */

    //
    var openTypeBuy = function openTypeBuy() {
        setActionsBuying('type_buy');
    };

    //
    var handleChangeTypeBuy = function handleChangeTypeBuy(ix) {
        if (type_ix !== ix) {
            setTypeIx(ix);
        }
    };

    //
    var toggleDiscountType = function toggleDiscountType() {
        setShowDiscountType(!show_discount_type);
    };

    //
    var closeTypeBuy = function closeTypeBuy() {
        setActionsBuying('');
    };

    /* --------------------------- CONFIRM BUY -------------------------- */

    //
    var openConfirmBuy = function openConfirmBuy() {
        setActionsBuying('confirm_buy');
    };

    //
    var closeConfirmBuy = function closeConfirmBuy() {
        setActionsBuying('type_buy');
    };

    //
    var handleConfirmBuy = function handleConfirmBuy(e) {
        e.preventDefault();
        setIsBuying(true);
        var full_name = e.target.children[0].children[1].children[0].value;
        var address = e.target.children[1].children[1].children[0].value;
        var phone = e.target.children[2].children[1].children[0].value;

        setTimeout(function () {
            console.log('name: ', full_name, 'dia chi: ', address, 'phone: ', phone, 'type: ', type_ix);
            sendOrderBuy({
                'full_name': full_name,
                'address': address,
                'phone_number': phone,
                // 'phone_color': type_ix,
                'phone_model': link_id,
                'quantity': 1,
                'status': 'order'
            });
            setIsBuying(false);
            setActionsBuying('');
            setNoticeSuccess(true);
            setTimeout(function () {
                setNoticeSuccess(false);
            }, 800);
        }, 1000);
    };return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_ProductDetail2.default, { product: product, openTypeBuy: openTypeBuy }),
        _react2.default.createElement('hr', { className: 'App_hr-bg' }),
        _react2.default.createElement(_RelativeProducts2.default, { relative_products: relative_products }),
        _react2.default.createElement(
            'div',
            { className: actions_buying == '' ? 'display-none' : 'screen-blur' },
            _react2.default.createElement(
                'div',
                { className: actions_buying == 'type_buy' ? 'form-fixed' : 'display-none' },
                _react2.default.createElement(_PhoneLaptopType2.default, {
                    product: product,
                    show_discount_type: show_discount_type,
                    toggleDiscountType: toggleDiscountType,
                    handleChangeTypeBuy: handleChangeTypeBuy,
                    openConfirmBuy: openConfirmBuy,
                    closeTypeBuy: closeTypeBuy
                })
            ),
            _react2.default.createElement(
                'div',
                { className: actions_buying == 'confirm_buy' ? 'form-fixed' : 'display-none' },
                _react2.default.createElement(_PhoneLaptopConfirmBuy2.default, {
                    closeConfirmBuy: closeConfirmBuy,
                    onSubmit: handleConfirmBuy,
                    is_buying: is_buying
                })
            )
        ),
        _react2.default.createElement(_BlurFetchingDiv2.default, { FetchingComponent: _FetchingDiv2.default, open_fetching: is_buying }),
        notice_success && _react2.default.createElement(
            _NoticeDiv2.default,
            null,
            _react2.default.createElement(
                'div',
                { className: 'PhoneLaptopDetail_notice-success brs-5px bg-loader' },
                'Order successfully'
            )
        )
    );
}

PhoneLaptopDetail.propTypes = {};

exports.default = PhoneLaptopDetail;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/_product_detail/buying/PhoneLaptopBuying.js":
/*!**********************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/_product_detail/buying/PhoneLaptopBuying.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ./PhoneLaptopBuying.scss */ "./src/pages/phone_laptop/pages/_product_detail/buying/PhoneLaptopBuying.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PhoneLaptopBuying.propTypes = {};

//
function PhoneLaptopBuying(props) {
    var openTypeBuy = props.openTypeBuy;

    //

    return _react2.default.createElement(
        'div',
        { className: 'PhoneLaptopBuying' },
        _react2.default.createElement(
            'div',
            { className: 'PhoneLaptopBuying_row-btn' },
            _react2.default.createElement(
                'div',
                { className: 'PhoneLaptopBuying_btn brs-5px', onClick: openTypeBuy },
                'Buy now'
            ),
            _react2.default.createElement(
                'div',
                { className: 'font-italic' },
                'Delivery or receive at supermarket'
            )
        )
    );
}

exports.default = PhoneLaptopBuying;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/_product_detail/confirm_buy/PhoneLaptopConfirmBuy.js":
/*!*******************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/_product_detail/confirm_buy/PhoneLaptopConfirmBuy.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconsArrow = __webpack_require__(/*! ../../../../../_icons_svg/icons_arrow/IconsArrow */ "./src/_icons_svg/icons_arrow/IconsArrow.js");

var _IconsArrow2 = _interopRequireDefault(_IconsArrow);

__webpack_require__(/*! ./PhoneLaptopConfirmBuy.scss */ "./src/pages/phone_laptop/pages/_product_detail/confirm_buy/PhoneLaptopConfirmBuy.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PhoneLaptopConfirmBuy.propTypes = {};

function PhoneLaptopConfirmBuy(props) {
    var onSubmit = props.onSubmit,
        is_buying = props.is_buying,
        closeConfirmBuy = props.closeConfirmBuy;


    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'PhoneLaptopConfirmBuy_contain scroll-thin brs-5px box-shadow-1' },
            _react2.default.createElement(
                'form',
                { onSubmit: onSubmit, autoComplete: 'off' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'label-field' },
                        'Full name'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'PhoneLaptopConfirmBuy__input' },
                        _react2.default.createElement('input', { type: 'text', name: 'full_name', required: true })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'label-field' },
                        'Address'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'PhoneLaptopConfirmBuy__input' },
                        _react2.default.createElement('input', { type: 'text', name: 'address', required: true })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'label-field' },
                        'Phone'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'PhoneLaptopConfirmBuy__input' },
                        _react2.default.createElement('input', {
                            type: 'tel',
                            name: 'phone',
                            pattern: '[0-9]{3}[0-9]{3}[0-9]{4}',
                            placeholder: '0123456789',
                            required: true
                        })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'PhoneLaptopConfirmBuy_submit' },
                    _react2.default.createElement(
                        'button',
                        { type: 'submit', disabled: is_buying },
                        'Send information'
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'PhoneLaptopConfirmBuy_close' },
                _react2.default.createElement(
                    'div',
                    { className: 'PhoneLaptopConfirmBuy_close-icon brs-50 hv-opacity', onClick: closeConfirmBuy },
                    _react2.default.createElement(_IconsArrow2.default, { y: 400, size_icon: '1rem' })
                )
            )
        )
    );
}

exports.default = PhoneLaptopConfirmBuy;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/_product_detail/detail/ProductDetail.js":
/*!******************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/_product_detail/detail/ProductDetail.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ./ProductDetail.scss */ "./src/pages/phone_laptop/pages/_product_detail/detail/ProductDetail.scss");

var _SkeletonDiv = __webpack_require__(/*! ../../../../../component/skeleton/skeleton_div/SkeletonDiv */ "./src/component/skeleton/skeleton_div/SkeletonDiv.js");

var _SkeletonDiv2 = _interopRequireDefault(_SkeletonDiv);

var _PhoneLaptopBuying = __webpack_require__(/*! ../buying/PhoneLaptopBuying */ "./src/pages/phone_laptop/pages/_product_detail/buying/PhoneLaptopBuying.js");

var _PhoneLaptopBuying2 = _interopRequireDefault(_PhoneLaptopBuying);

var _image_loading = __webpack_require__(/*! ../../../../../../image/image_loading.svg */ "./image/image_loading.svg");

var _image_loading2 = _interopRequireDefault(_image_loading);

var _FormatNum = __webpack_require__(/*! ../../../../../_some_function/FormatNum */ "./src/_some_function/FormatNum.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
function ProductDetail(props) {
    var _props$product = props.product,
        url = _props$product.url,
        name = _props$product.name,
        new_price = _props$product.new_price,
        old_price = _props$product.old_price,
        in_stock = _props$product.in_stock,
        discount = _props$product.discount,
        installment = _props$product.installment,
        promotion = _props$product.promotion,
        gift = _props$product.gift,
        product_sets = _props$product.product_sets,
        cpu = _props$product.cpu,
        os = _props$product.os,
        ram = _props$product.ram,
        internal_memory = _props$product.internal_memory,
        camera = _props$product.camera,
        memory_stick = _props$product.memory_stick;
    var openTypeBuy = props.openTypeBuy;


    var product_specifications = cpu ? [{ name: 'CPU', value: cpu }, { name: 'OS', value: os }, { name: 'RAM', value: ram }, { name: 'Internal memory', value: internal_memory }, { name: 'Camera', value: camera }, { name: 'Memory stick', value: memory_stick }] : undefined;

    return _react2.default.createElement(
        'div',
        { className: 'ProductDetail' },
        _react2.default.createElement(
            'div',
            { className: 'ProductDetail_name' },
            name
        ),
        _react2.default.createElement('hr', { className: 'App_hr-bg' }),
        _react2.default.createElement(
            'div',
            { className: 'ProductDetail_contain' },
            _react2.default.createElement(
                'div',
                { className: 'ProductDetail_row' },
                _react2.default.createElement(
                    'div',
                    { className: 'ProductDetail_col' },
                    _react2.default.createElement(
                        'div',
                        { className: 'ProductDetail_image' },
                        _react2.default.createElement(
                            'div',
                            { className: 'ProductDetail__img' },
                            _react2.default.createElement('img', { src: url || _image_loading2.default, alt: '' }),
                            _react2.default.createElement(
                                'div',
                                { className: 'ProductDetail__discount' },
                                '-',
                                discount,
                                '%'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'ProductDetail__installment' },
                                'Installment ',
                                installment,
                                '%'
                            )
                        ),
                        new_price ? _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'div',
                                null,
                                (0, _FormatNum.formatNum)(new_price),
                                ' VND ',
                                _react2.default.createElement(
                                    'del',
                                    null,
                                    (0, _FormatNum.formatNum)(old_price)
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'text-red' },
                                in_stock
                            )
                        ) : _react2.default.createElement(_SkeletonDiv2.default, { num: 2 })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'ProductDetail_col' },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'label-field' },
                            '* Promotion: '
                        ),
                        promotion ? promotion.split('\n').map(function (item, index) {
                            return _react2.default.createElement(
                                'div',
                                {
                                    key: 'ProductDetail_promotion_' + index
                                },
                                item
                            );
                        }) : _react2.default.createElement(_SkeletonDiv2.default, { num: 6 })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        gift
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'ProductDetail_col' },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'label-field' },
                            '* Product sets: '
                        ),
                        product_sets ? product_sets.split('\n').map(function (item, index) {
                            return _react2.default.createElement(
                                'div',
                                {
                                    key: 'ProductDetail_product_sets_' + index
                                },
                                item
                            );
                        }) : _react2.default.createElement(_SkeletonDiv2.default, { num: 6 })
                    )
                )
            )
        ),
        _react2.default.createElement('hr', { className: 'App_hr-bg' }),
        _react2.default.createElement(
            'div',
            { className: 'ProductDetail_specs' },
            _react2.default.createElement(
                'div',
                { className: 'label-field' },
                '* Product specifications:'
            ),
            product_specifications ? product_specifications.map(function (item, index) {
                return _react2.default.createElement(
                    'div',
                    { key: 'ProductDetail_product_specs_' + index },
                    '- ',
                    item.name,
                    ': ',
                    item.value
                );
            }) : _react2.default.createElement(_SkeletonDiv2.default, { num: 6 })
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_PhoneLaptopBuying2.default, { openTypeBuy: openTypeBuy })
        )
    );
}

ProductDetail.propTypes = {
    product: _propTypes2.default.object
};

exports.default = ProductDetail;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/_product_detail/relative/RelativeProducts.js":
/*!***********************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/_product_detail/relative/RelativeProducts.js ***!
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

__webpack_require__(/*! ./RelativeProducts.scss */ "./src/pages/phone_laptop/pages/_product_detail/relative/RelativeProducts.scss");

var _ProductItem = __webpack_require__(/*! ../../../../../component/products/product_item/ProductItem */ "./src/component/products/product_item/ProductItem.js");

var _ProductItem2 = _interopRequireDefault(_ProductItem);

var _image_loading = __webpack_require__(/*! ../../../../../../image/image_loading.svg */ "./image/image_loading.svg");

var _image_loading2 = _interopRequireDefault(_image_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
function RelativeProducts(props) {
    var relative_products = props.relative_products;

    //

    return _react2.default.createElement(
        'div',
        { className: 'RelativeProducts brs-5px' },
        _react2.default.createElement(
            'div',
            { className: 'RelativeProducts_contain' },
            _react2.default.createElement(
                'div',
                { className: 'label-field' },
                'Relative Products'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
                'div',
                { className: 'RelativeProducts_row' },
                relative_products.map(function (item, index) {
                    return _react2.default.createElement(
                        'div',
                        { key: 'RelativeProducts__' + index, className: 'RelativeProducts_col' },
                        _react2.default.createElement(_ProductItem2.default, {
                            link: '/phone-laptop:' + item.id,
                            img: item.url || _image_loading2.default,
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
    );
}

RelativeProducts.propTypes = {
    // list relative phones
    relative_products: _propTypes2.default.array,
    // click link new phone
    onClick: _propTypes2.default.func
};

RelativeProducts.defaultProps = {
    relative_products: [1, 2, 3, 4, 5]
};

exports.default = RelativeProducts;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/_product_detail/type_buy/_main/PhoneLaptopType.js":
/*!****************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/_product_detail/type_buy/_main/PhoneLaptopType.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ButtonRipple = __webpack_require__(/*! ../../../../../../component/button/button_ripple/ButtonRipple */ "./src/component/button/button_ripple/ButtonRipple.js");

var _ButtonRipple2 = _interopRequireDefault(_ButtonRipple);

var _IconsArrow = __webpack_require__(/*! ../../../../../../_icons_svg/icons_arrow/IconsArrow */ "./src/_icons_svg/icons_arrow/IconsArrow.js");

var _IconsArrow2 = _interopRequireDefault(_IconsArrow);

var _TypeItem = __webpack_require__(/*! ../type_item/TypeItem */ "./src/pages/phone_laptop/pages/_product_detail/type_buy/type_item/TypeItem.js");

var _TypeItem2 = _interopRequireDefault(_TypeItem);

__webpack_require__(/*! ./PhoneLaptopType.scss */ "./src/pages/phone_laptop/pages/_product_detail/type_buy/_main/PhoneLaptopType.scss");

var _FormatNum = __webpack_require__(/*! ../../../../../../_some_function/FormatNum */ "./src/_some_function/FormatNum.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PhoneLaptopType.propTypes = {
    types: _propTypes2.default.array
};

PhoneLaptopType.defaultProps = {
    types: []

    //
};function PhoneLaptopType(props) {
    var product = props.product,
        show_discount_type = props.show_discount_type,
        toggleDiscountType = props.toggleDiscountType,
        handleChangeTypeBuy = props.handleChangeTypeBuy,
        openConfirmBuy = props.openConfirmBuy,
        closeTypeBuy = props.closeTypeBuy;
    var name = product.name,
        new_price = product.new_price,
        old_price = product.old_price,
        types = product.types,
        promotion = product.promotion;


    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'PhoneLaptopType_contain scroll-thin brs-5px box-shadow-1' },
            _react2.default.createElement(
                'div',
                { className: 'PhoneLaptopType_head' },
                _react2.default.createElement(
                    'div',
                    { className: 'label-field' },
                    name
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'span',
                        { className: 'PhoneLaptopType_new-price' },
                        (0, _FormatNum.formatNum)(new_price),
                        ' vnd'
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'PhoneLaptopType_old-price' },
                        (0, _FormatNum.formatNum)(old_price),
                        ' vnd'
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'PhoneLaptopType_body' },
                _react2.default.createElement(
                    'div',
                    { className: 'PhoneLaptopType_body-title label-field' },
                    'Choose type:'
                ),
                _react2.default.createElement(
                    'ul',
                    { className: 'PhoneLaptopType_list display-flex list-none' },
                    types && types.map(function (type, ix) {
                        return _react2.default.createElement(
                            'li',
                            { key: 'PhoneLaptopType_' + ix },
                            _react2.default.createElement(_TypeItem2.default, {
                                type_ix: ix,
                                url: type.url,
                                title: type.title,
                                handleChangeTypeBuy: handleChangeTypeBuy
                            })
                        );
                    })
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'PhoneLaptopType_bottom' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'label-field width-fit-content cursor-pointer font-italic', onClick: toggleDiscountType },
                        show_discount_type ? 'Hide discount' : 'Show more discount'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: show_discount_type ? '' : 'display-none' },
                    promotion
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'PhoneLaptopType_buy App_submit' },
                _react2.default.createElement(
                    _ButtonRipple2.default,
                    {
                        type: 'text',
                        title: 'Buy now',
                        onClick: openConfirmBuy
                    },
                    'Buy now'
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'PhoneLaptopType_close' },
                _react2.default.createElement(
                    'div',
                    { className: 'PhoneLaptopType_close-icon brs-50 hv-opacity cursor-pointer', onClick: closeTypeBuy },
                    _react2.default.createElement(_IconsArrow2.default, { y: 400, size_icon: '1rem' })
                )
            )
        )
    );
}

exports.default = PhoneLaptopType;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/_product_detail/type_buy/type_item/TypeItem.js":
/*!*************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/_product_detail/type_buy/type_item/TypeItem.js ***!
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

__webpack_require__(/*! ./TypeItem.scss */ "./src/pages/phone_laptop/pages/_product_detail/type_buy/type_item/TypeItem.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
TypeItem.propTypes = {};

//
function TypeItem(props) {
    var type_ix = props.type_ix,
        url = props.url,
        title = props.title,
        handleChangeTypeBuy = props.handleChangeTypeBuy;
    //

    function onChangeTypeBuy() {
        handleChangeTypeBuy(type_ix);
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'TypeItem' },
        _react2.default.createElement(
            'div',
            { className: 'TypeItem_contain' },
            _react2.default.createElement(
                'div',
                { className: 'TypeItem_row' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement('img', { src: url, alt: '', width: '30', height: '40' })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement('input', { type: 'radio', name: 'type_buy', onClick: onChangeTypeBuy })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    title
                )
            )
        )
    );
}

exports.default = TypeItem;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/button/button_ripple/ButtonRipple.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/button/button_ripple/ButtonRipple.scss ***!
  \***********************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/******** Button *******/\n.ButtonRipple {\n  position: relative;\n  height: 2.5rem;\n  background-color: var(--blue);\n  border-radius: 5px;\n  overflow: hidden;\n  color: whitesmoke;\n  /****** Button Ripple Common ******/\n  /****** Ripple type ******/\n}\n.ButtonRipple:hover {\n  opacity: 0.8;\n}\n.ButtonRipple:focus {\n  outline: none;\n}\n.ButtonRipple:active .ButtonRipple_common {\n  opacity: 1;\n  transition: 0s;\n}\n.ButtonRipple:active .ButtonRipple_center {\n  transform: translate(-50%, -50%) scale(0);\n}\n.ButtonRipple:active .ButtonRipple_right, .ButtonRipple:active .ButtonRipple_left {\n  width: 0%;\n}\n.ButtonRipple .ButtonRipple_common {\n  position: absolute;\n  width: 120%;\n  height: 100%;\n  background-color: white;\n  border-radius: 5px;\n  opacity: 0;\n  transition: all 0.3s;\n}\n.ButtonRipple .ButtonRipple_right {\n  top: 0;\n  left: 0;\n}\n.ButtonRipple .ButtonRipple_left {\n  top: 0;\n  right: 0;\n}\n.ButtonRipple .ButtonRipple_center {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(1);\n}", "",{"version":3,"sources":["webpack://./src/component/button/button_ripple/ButtonRipple.scss"],"names":[],"mappings":"AAEA,wBAAA;AACA;EACI,kBAAA;EACA,cAAA;EAEA,6BAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EAqBA,mCAAA;EAaA,0BAAA;AAlCJ;AAEI;EACI,YAbE;AAaV;AAEI;EACI,aAAA;AAAR;AAGQ;EACI,UAAA;EACA,cAAA;AADZ;AAGQ;EACI,yCAAA;AADZ;AAGQ;EACI,SAAA;AADZ;AAMI;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EAEA,uBAAA;EACA,kBAAA;EACA,UAAA;EAEA,oBAAA;AANR;AAUI;EACI,MAAA;EACA,OAAA;AARR;AAUI;EACI,MAAA;EACA,QAAA;AARR;AAUI;EACI,QAAA;EACA,SAAA;EACA,yCAAA;AARR","sourcesContent":["$opacity: 0.8;\r\n\r\n/******** Button *******/\r\n.ButtonRipple{\r\n    position: relative;\r\n    height: 2.5rem;\r\n\r\n    background-color: var(--blue);\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n    color: whitesmoke;\r\n\r\n    &:hover{\r\n        opacity: $opacity;\r\n    }\r\n    &:focus{\r\n        outline: none;\r\n    }\r\n    &:active{\r\n        .ButtonRipple_common{\r\n            opacity: 1;\r\n            transition: 0s;\r\n        }\r\n        .ButtonRipple_center{\r\n            transform: translate(-50%, -50%) scale(0);\r\n        }\r\n        .ButtonRipple_right, .ButtonRipple_left{\r\n            width: 0%;\r\n        }\r\n    }\r\n    \r\n    /****** Button Ripple Common ******/\r\n    .ButtonRipple_common{\r\n        position: absolute;\r\n        width: 120%;\r\n        height: 100%;\r\n    \r\n        background-color: white;\r\n        border-radius: 5px;\r\n        opacity: 0;\r\n    \r\n        transition: all 0.3s;\r\n    }\r\n    \r\n    /****** Ripple type ******/\r\n    .ButtonRipple_right{\r\n        top: 0;\r\n        left: 0;\r\n    }\r\n    .ButtonRipple_left{\r\n        top: 0;\r\n        right: 0;\r\n    }\r\n    .ButtonRipple_center{\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%) scale(1);\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/some_div/notice_div/NoticeDiv.scss":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/some_div/notice_div/NoticeDiv.scss ***!
  \*******************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".NoticeDiv {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}", "",{"version":3,"sources":["webpack://./src/component/some_div/notice_div/NoticeDiv.scss"],"names":[],"mappings":"AAAA;EACI,eAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;AACJ","sourcesContent":[".NoticeDiv{\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/_product_detail/_main/PhoneLaptopDetail.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/_product_detail/_main/PhoneLaptopDetail.scss ***!
  \********************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PhoneLaptopDetail_notice-success {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 15rem;\n  max-width: 100vw;\n  height: 10rem;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--border-fashion);\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/_product_detail/_main/PhoneLaptopDetail.scss"],"names":[],"mappings":"AAGA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EAEA,YAAA;EACA,gBAAA;EACA,aAAA;EAEA,eAAA;EACA,gBAAA;EACA,4BAAA;AAJJ","sourcesContent":["\r\n\r\n//\r\n.PhoneLaptopDetail_notice-success{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    width: 15rem;\r\n    max-width: 100vw;\r\n    height: 10rem;\r\n\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    color: var(--border-fashion);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/_product_detail/buying/PhoneLaptopBuying.scss":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/_product_detail/buying/PhoneLaptopBuying.scss ***!
  \*********************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PhoneLaptopBuying {\n  margin: 1rem 0;\n}\n\n.PhoneLaptopBuying_row-btn {\n  width: 20rem;\n  max-width: calc(100vw - 1rem);\n  text-align: center;\n}\n\n.PhoneLaptopBuying_btn {\n  margin: auto;\n  padding: 0.75rem;\n  background-color: var(--btn-buy);\n  color: var(--white);\n  font-weight: 600;\n  cursor: pointer;\n}\n.PhoneLaptopBuying_btn:hover {\n  opacity: 0.95;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/_product_detail/buying/PhoneLaptopBuying.scss"],"names":[],"mappings":"AAEA;EACI,cAAA;AADJ;;AAIA;EACI,YAAA;EACA,6BAAA;EACA,kBAAA;AADJ;;AAIA;EACI,YAAA;EACA,gBAAA;EACA,gCAAA;EAEA,mBAAA;EACA,gBAAA;EACA,eAAA;AAFJ;AAGI;EACI,aAAA;AADR","sourcesContent":["\r\n//\r\n.PhoneLaptopBuying{\r\n    margin: 1rem 0;\r\n}\r\n//\r\n.PhoneLaptopBuying_row-btn{\r\n    width: 20rem;\r\n    max-width: calc(100vw - 1rem);\r\n    text-align: center;\r\n}\r\n//\r\n.PhoneLaptopBuying_btn{\r\n    margin: auto;\r\n    padding: 0.75rem;\r\n    background-color: var(--btn-buy);\r\n\r\n    color: var(--white);\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    &:hover{\r\n        opacity: 0.95;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/_product_detail/confirm_buy/PhoneLaptopConfirmBuy.scss":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/_product_detail/confirm_buy/PhoneLaptopConfirmBuy.scss ***!
  \******************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PhoneLaptopConfirmBuy_contain {\n  position: relative;\n  max-height: 96vh;\n  overflow: auto;\n  padding: 0.5rem;\n  background-color: var(--md-bg-primary);\n}\n\n.PhoneLaptopConfirmBuy__input {\n  margin: 0.5rem;\n}\n.PhoneLaptopConfirmBuy__input input {\n  width: 100%;\n  padding: 0.5rem;\n  border: 1px solid var(--md-bg-ccc);\n  border-radius: 5px;\n}\n.PhoneLaptopConfirmBuy__input input:focus {\n  outline: none;\n  border: 1px solid var(--blue);\n}\n\n.PhoneLaptopConfirmBuy_submit {\n  text-align: center;\n}\n.PhoneLaptopConfirmBuy_submit button {\n  margin-top: 0.5rem;\n  width: 100%;\n  padding: 0.75rem;\n  border: none;\n  background-color: var(--border-fashion);\n  border-radius: 5px;\n  color: white;\n  cursor: pointer;\n}\n.PhoneLaptopConfirmBuy_submit button:hover {\n  opacity: 0.9;\n}\n\n.PhoneLaptopConfirmBuy_close {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n}\n\n.PhoneLaptopConfirmBuy_close-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 1.5rem;\n  height: 1.5rem;\n  background-color: var(--danger);\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/_product_detail/confirm_buy/PhoneLaptopConfirmBuy.scss"],"names":[],"mappings":"AAGA;EACI,kBAAA;EACA,gBAAA;EACA,cAAA;EACA,eAAA;EACA,sCAAA;AAFJ;;AAMA;EACI,cAAA;AAHJ;AAII;EACI,WAAA;EACA,eAAA;EACA,kCAAA;EACA,kBAAA;AAFR;AAGQ;EACI,aAAA;EACA,6BAAA;AADZ;;AAOA;EACI,kBAAA;AAJJ;AAKI;EACI,kBAAA;EACA,WAAA;EACA,gBAAA;EAEA,YAAA;EACA,uCAAA;EACA,kBAAA;EAEA,YAAA;EACA,eAAA;AALR;AAMQ;EACI,YAAA;AAJZ;;AAUA;EACI,kBAAA;EACA,QAAA;EACA,UAAA;AAPJ;;AASA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EAEA,aAAA;EACA,cAAA;EACA,+BAAA;AAPJ","sourcesContent":["\r\n\r\n//\r\n.PhoneLaptopConfirmBuy_contain{\r\n    position: relative;\r\n    max-height: 96vh;\r\n    overflow: auto;\r\n    padding: 0.5rem;\r\n    background-color: var(--md-bg-primary);\r\n}\r\n\r\n//\r\n.PhoneLaptopConfirmBuy__input{\r\n    margin: 0.5rem;\r\n    input{\r\n        width: 100%;\r\n        padding: 0.5rem;\r\n        border: 1px solid var(--md-bg-ccc);\r\n        border-radius: 5px;\r\n        &:focus{\r\n            outline: none;\r\n            border: 1px solid var(--blue);\r\n        }\r\n    }\r\n}\r\n\r\n//\r\n.PhoneLaptopConfirmBuy_submit{\r\n    text-align: center;\r\n    button{\r\n        margin-top: 0.5rem;\r\n        width: 100%;\r\n        padding: 0.75rem;\r\n\r\n        border: none;\r\n        background-color: var(--border-fashion);\r\n        border-radius: 5px;\r\n\r\n        color: white;\r\n        cursor: pointer;\r\n        &:hover{\r\n            opacity: 0.9;\r\n        }\r\n    }\r\n}\r\n\r\n//\r\n.PhoneLaptopConfirmBuy_close{\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n}\r\n.PhoneLaptopConfirmBuy_close-icon{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    width: 1.5rem;\r\n    height: 1.5rem;\r\n    background-color: var(--danger);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/_product_detail/detail/ProductDetail.scss":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/_product_detail/detail/ProductDetail.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".ProductDetail_col .ProductDetail_image .ProductDetail__img .ProductDetail__installment, .ProductDetail_col .ProductDetail_image .ProductDetail__img .ProductDetail__discount {\n  position: absolute;\n  top: 0;\n  font-size: 11px;\n}\n\n.ProductDetail {\n  padding: 0 1rem;\n}\n.ProductDetail .SkeletonImg {\n  height: 33.3vw;\n}\n\n.ProductDetail_name {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.ProductDetail_row {\n  display: flex;\n}\n\n.ProductDetail_col {\n  width: 33.3%;\n  padding: 0 0.5rem;\n}\n.ProductDetail_col .ProductDetail_image .ProductDetail__img {\n  position: relative;\n}\n.ProductDetail_col .ProductDetail_image .ProductDetail__img img {\n  width: 100%;\n  height: 100%;\n}\n.ProductDetail_col .ProductDetail_image .ProductDetail__img .ProductDetail__discount {\n  right: 5%;\n  background-color: var(--danger);\n}\n.ProductDetail_col .ProductDetail_image .ProductDetail__img .ProductDetail__installment {\n  left: 5%;\n  background-color: var(--warning);\n}\n.ProductDetail_col .ProductDetail_image:nth-child(n+2) {\n  padding: 0.5rem;\n}\n\n.ProductDetail_specs {\n  width: fit-content;\n  width: 20rem;\n  max-width: calc(100vw - 1rem);\n}\n.ProductDetail_specs div {\n  padding: 0.5rem;\n  border-bottom: 1px solid var(--bg-blur);\n}\n\n@media (max-width: 500px) {\n  .ProductDetail {\n    padding: 0 0.5rem;\n  }\n  .ProductDetail .ProductDetail_contain .ProductDetail_row {\n    display: block;\n  }\n  .ProductDetail .ProductDetail_contain .ProductDetail_row .ProductDetail_col {\n    width: 100%;\n    padding: 0.5rem;\n  }\n  .ProductDetail .ProductDetail_contain .ProductDetail_row .ProductDetail_col:not(:last-child) {\n    border-bottom: 1px solid var(--bg-blur);\n  }\n  .ProductDetail .SkeletonImg {\n    width: 100%;\n    height: 100vw;\n  }\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/_product_detail/detail/ProductDetail.scss"],"names":[],"mappings":"AACA;EACI,kBAAA;EACA,MAAA;EACA,eAAA;AAAJ;;AAIA;EACI,eAAA;AADJ;AAGI;EACI,cAAA;AADR;;AAKA;EACI,iBAAA;EACA,iBAAA;AAFJ;;AAQA;EACI,aAAA;AALJ;;AAOA;EACI,YAAA;EACA,iBAAA;AAJJ;AAMQ;EACI,kBAAA;AAJZ;AAMY;EACI,WAAA;EACA,YAAA;AAJhB;AAQY;EAEI,SAAA;EACA,+BAAA;AAPhB;AASY;EAEI,QAAA;EACA,gCAAA;AARhB;AAaQ;EACI,eAAA;AAXZ;;AAiBA;EACI,kBAAA;EACA,YAAA;EACA,6BAAA;AAdJ;AAeI;EACI,eAAA;EACA,uCAAA;AAbR;;AAkBA;EAEI;IACI,iBAAA;EAhBN;EAmBU;IACI,cAAA;EAjBd;EAoBc;IACI,WAAA;IACA,eAAA;EAlBlB;EAmBkB;IACI,uCAAA;EAjBtB;EAuBM;IACI,WAAA;IACA,aAAA;EArBV;AACF","sourcesContent":["// placeholder discount and installment\r\n%discount-installment {\r\n    position: absolute;\r\n    top: 0;\r\n    font-size: 11px;\r\n}\r\n\r\n// Phone detail\r\n.ProductDetail {\r\n    padding: 0 1rem;\r\n    // SkeletonImg\r\n    .SkeletonImg {\r\n        height: 33.3vw;\r\n    }\r\n}\r\n// name\r\n.ProductDetail_name {\r\n    font-size: 1.5rem;\r\n    font-weight: bold;\r\n}\r\n\r\n// main\r\n\r\n// row\r\n.ProductDetail_row {\r\n    display: flex;\r\n}\r\n.ProductDetail_col {\r\n    width: 33.3%;\r\n    padding: 0 0.5rem;\r\n    .ProductDetail_image {\r\n        .ProductDetail__img {\r\n            position: relative;\r\n\r\n            img {\r\n                width: 100%;\r\n                height: 100%;\r\n            }\r\n\r\n            // discount installment\r\n            .ProductDetail__discount {\r\n                @extend %discount-installment;\r\n                right: 5%;\r\n                background-color: var(--danger);\r\n            }\r\n            .ProductDetail__installment {\r\n                @extend %discount-installment;\r\n                left: 5%;\r\n                background-color: var(--warning);\r\n            }\r\n        }\r\n\r\n        // price\r\n        &:nth-child(n + 2) {\r\n            padding: 0.5rem;\r\n        }\r\n    }\r\n}\r\n\r\n// product specs\r\n.ProductDetail_specs {\r\n    width: fit-content;\r\n    width: 20rem;\r\n    max-width: calc(100vw - 1rem);\r\n    div {\r\n        padding: 0.5rem;\r\n        border-bottom: 1px solid var(--bg-blur);\r\n    }\r\n}\r\n\r\n//\r\n@media (max-width: 500px) {\r\n    // Phone detail\r\n    .ProductDetail {\r\n        padding: 0 0.5rem;\r\n        .ProductDetail_contain {\r\n            // row\r\n            .ProductDetail_row {\r\n                display: block;\r\n\r\n                // col\r\n                .ProductDetail_col {\r\n                    width: 100%;\r\n                    padding: 0.5rem;\r\n                    &:not(:last-child) {\r\n                        border-bottom: 1px solid var(--bg-blur);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n        .SkeletonImg {\r\n            width: 100%;\r\n            height: 100vw;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/_product_detail/relative/RelativeProducts.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/_product_detail/relative/RelativeProducts.scss ***!
  \**********************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".RelativeProducts {\n  margin-top: 1rem;\n  padding: 0.5rem;\n}\n.RelativeProducts .RelativeProducts_contain {\n  width: 100%;\n}\n.RelativeProducts .RelativeProducts_contain .RelativeProducts_row {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.RelativeProducts .RelativeProducts_contain .RelativeProducts_row .RelativeProducts_col {\n  border: 1px solid var(--bg-blur);\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/_product_detail/relative/RelativeProducts.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;EACA,eAAA;AACJ;AAAI;EACI,WAAA;AAER;AADQ;EACI,aAAA;EACA,uBAAA;EACA,eAAA;AAGZ;AADY;EACI,gCAAA;AAGhB","sourcesContent":[".RelativeProducts{\r\n    margin-top: 1rem;\r\n    padding: 0.5rem;\r\n    .RelativeProducts_contain{\r\n        width: 100%;\r\n        .RelativeProducts_row{\r\n            display: flex;\r\n            justify-content: center;\r\n            flex-wrap: wrap;\r\n\r\n            .RelativeProducts_col{\r\n                border: 1px solid var(--bg-blur);\r\n            }\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/_product_detail/type_buy/_main/PhoneLaptopType.scss":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/_product_detail/type_buy/_main/PhoneLaptopType.scss ***!
  \***************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PhoneLaptopType_contain {\n  position: relative;\n  max-height: 96vh;\n  overflow: auto;\n  background-color: var(--md-bg-primary);\n}\n\n.PhoneLaptopType_head {\n  padding: 0.5rem;\n}\n\n.PhoneLaptopType_new-price {\n  margin-right: 0.5rem;\n}\n\n.PhoneLaptopType_old-price {\n  text-decoration: line-through;\n}\n\n.PhoneLaptopType_body-title {\n  padding: 0.5rem;\n}\n\n.PhoneLaptopType_list {\n  max-width: 100%;\n  overflow: auto;\n}\n\n.PhoneLaptopType_bottom {\n  padding: 0.5rem;\n}\n\n.PhoneLaptopType_close {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n}\n\n.PhoneLaptopType_close-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 1.5rem;\n  height: 1.5rem;\n  background-color: var(--danger);\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/_product_detail/type_buy/_main/PhoneLaptopType.scss"],"names":[],"mappings":"AAGA;EACI,kBAAA;EACA,gBAAA;EACA,cAAA;EACA,sCAAA;AAFJ;;AAMA;EACI,eAAA;AAHJ;;AAKA;EACI,oBAAA;AAFJ;;AAIA;EACI,6BAAA;AADJ;;AAKA;EACI,eAAA;AAFJ;;AAIA;EACI,eAAA;EACA,cAAA;AADJ;;AAKA;EACI,eAAA;AAFJ;;AAMA;EACI,kBAAA;EACA,QAAA;EACA,UAAA;AAHJ;;AAKA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EAEA,aAAA;EACA,cAAA;EACA,+BAAA;AAHJ","sourcesContent":["\r\n\r\n//\r\n.PhoneLaptopType_contain{\r\n    position: relative;\r\n    max-height: 96vh;\r\n    overflow: auto;\r\n    background-color: var(--md-bg-primary);\r\n}\r\n\r\n//\r\n.PhoneLaptopType_head{\r\n    padding: 0.5rem;\r\n}\r\n.PhoneLaptopType_new-price{\r\n    margin-right: 0.5rem;\r\n}\r\n.PhoneLaptopType_old-price{\r\n    text-decoration: line-through;\r\n}\r\n\r\n//\r\n.PhoneLaptopType_body-title{\r\n    padding: 0.5rem;\r\n}\r\n.PhoneLaptopType_list{\r\n    max-width: 100%;\r\n    overflow: auto;\r\n}\r\n\r\n//\r\n.PhoneLaptopType_bottom{\r\n    padding: 0.5rem;\r\n}\r\n\r\n//\r\n.PhoneLaptopType_close{\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n}\r\n.PhoneLaptopType_close-icon{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    \r\n    width: 1.5rem;\r\n    height: 1.5rem;\r\n    background-color: var(--danger);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/_product_detail/type_buy/type_item/TypeItem.scss":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/_product_detail/type_buy/type_item/TypeItem.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".TypeItem_contain {\n  padding: 0.5rem;\n}\n\n.TypeItem_row {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/_product_detail/type_buy/type_item/TypeItem.scss"],"names":[],"mappings":"AAEA;EACI,eAAA;AADJ;;AAKA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;AAFJ","sourcesContent":["\r\n//\r\n.TypeItem_contain{\r\n    padding: 0.5rem;\r\n}\r\n\r\n//\r\n.TypeItem_row{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/component/button/button_ripple/ButtonRipple.scss":
/*!**************************************************************!*\
  !*** ./src/component/button/button_ripple/ButtonRipple.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ButtonRipple_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./ButtonRipple.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/button/button_ripple/ButtonRipple.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ButtonRipple_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ButtonRipple_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/some_div/notice_div/NoticeDiv.scss":
/*!**********************************************************!*\
  !*** ./src/component/some_div/notice_div/NoticeDiv.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_NoticeDiv_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./NoticeDiv.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/some_div/notice_div/NoticeDiv.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_NoticeDiv_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_NoticeDiv_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/_product_detail/_main/PhoneLaptopDetail.scss":
/*!***********************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/_product_detail/_main/PhoneLaptopDetail.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PhoneLaptopDetail_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PhoneLaptopDetail.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/_product_detail/_main/PhoneLaptopDetail.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PhoneLaptopDetail_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PhoneLaptopDetail_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/_product_detail/buying/PhoneLaptopBuying.scss":
/*!************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/_product_detail/buying/PhoneLaptopBuying.scss ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PhoneLaptopBuying_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PhoneLaptopBuying.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/_product_detail/buying/PhoneLaptopBuying.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PhoneLaptopBuying_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PhoneLaptopBuying_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/_product_detail/confirm_buy/PhoneLaptopConfirmBuy.scss":
/*!*********************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/_product_detail/confirm_buy/PhoneLaptopConfirmBuy.scss ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PhoneLaptopConfirmBuy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PhoneLaptopConfirmBuy.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/_product_detail/confirm_buy/PhoneLaptopConfirmBuy.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PhoneLaptopConfirmBuy_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PhoneLaptopConfirmBuy_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/_product_detail/detail/ProductDetail.scss":
/*!********************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/_product_detail/detail/ProductDetail.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProductDetail_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./ProductDetail.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/_product_detail/detail/ProductDetail.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProductDetail_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProductDetail_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/_product_detail/relative/RelativeProducts.scss":
/*!*************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/_product_detail/relative/RelativeProducts.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_RelativeProducts_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./RelativeProducts.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/_product_detail/relative/RelativeProducts.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_RelativeProducts_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_RelativeProducts_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/_product_detail/type_buy/_main/PhoneLaptopType.scss":
/*!******************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/_product_detail/type_buy/_main/PhoneLaptopType.scss ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PhoneLaptopType_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./PhoneLaptopType.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/_product_detail/type_buy/_main/PhoneLaptopType.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PhoneLaptopType_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PhoneLaptopType_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/_product_detail/type_buy/type_item/TypeItem.scss":
/*!***************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/_product_detail/type_buy/type_item/TypeItem.scss ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_TypeItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./TypeItem.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/_product_detail/type_buy/type_item/TypeItem.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_TypeItem_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_TypeItem_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_phone_laptop_pages__product_detail__main_PhoneLaptopDetail_js.js.map