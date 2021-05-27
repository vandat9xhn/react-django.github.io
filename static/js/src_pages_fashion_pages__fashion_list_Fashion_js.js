(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_fashion_pages__fashion_list_Fashion_js"],{

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

/***/ "./src/pages/fashion/components/banner/banner_carousel/_main/FashionBC.js":
/*!********************************************************************************!*\
  !*** ./src/pages/fashion/components/banner/banner_carousel/_main/FashionBC.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Carousel = __webpack_require__(/*! ../../../../../../component/carousel/_main/Carousel */ "./src/component/carousel/_main/Carousel.js");

var _Carousel2 = _interopRequireDefault(_Carousel);

var _FashionBCR = __webpack_require__(/*! ../right/FashionBCR */ "./src/pages/fashion/components/banner/banner_carousel/right/FashionBCR.js");

var _FashionBCR2 = _interopRequireDefault(_FashionBCR);

__webpack_require__(/*! ./FashionBC.scss */ "./src/pages/fashion/components/banner/banner_carousel/_main/FashionBC.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

// 
FashionBC.propTypes = {};

//

// 

// 
function FashionBC(props) {
    var images = props.images;


    return _react2.default.createElement(
        'div',
        { className: 'FashionBC' },
        _react2.default.createElement(
            'div',
            { className: 'FashionBC_contain' },
            _react2.default.createElement(
                'div',
                { className: 'FashionBC_row' },
                _react2.default.createElement(
                    'div',
                    { className: 'FashionBC_carousel' },
                    _react2.default.createElement(_Carousel2.default, { vid_pics: images })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_FashionBCR2.default, null)
                )
            )
        )
    );
}

exports.default = FashionBC;

/***/ }),

/***/ "./src/pages/fashion/components/banner/banner_carousel/right/FashionBCR.js":
/*!*********************************************************************************!*\
  !*** ./src/pages/fashion/components/banner/banner_carousel/right/FashionBCR.js ***!
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

var _image_loading = __webpack_require__(/*! ../../../../../../../image/image_loading.svg */ "./image/image_loading.svg");

var _image_loading2 = _interopRequireDefault(_image_loading);

__webpack_require__(/*! ./FashionBCR.scss */ "./src/pages/fashion/components/banner/banner_carousel/right/FashionBCR.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
FashionBCR.propTypes = {};

//
function FashionBCR(props) {
    return _react2.default.createElement(
        'div',
        { className: 'FashionBCR' },
        _react2.default.createElement(
            'div',
            { className: 'FashionBCR_contain' },
            _react2.default.createElement('img', { src: _image_loading2.default, alt: '', width: '300', height: '200' })
        )
    );
}

exports.default = FashionBCR;

/***/ }),

/***/ "./src/pages/fashion/components/banner/list_names/FashionLN.js":
/*!*********************************************************************!*\
  !*** ./src/pages/fashion/components/banner/list_names/FashionLN.js ***!
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

__webpack_require__(/*! ./FashionLN.scss */ "./src/pages/fashion/components/banner/list_names/FashionLN.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var list_names = [{ name: 'Shop mall', link: 'mall' }, { name: 'Extra ship', link: 'extra-ship' }, { name: 'Premium', link: 'premium' }, { name: 'Brand discount', link: 'brand-discount' }, { name: 'Brand name', link: 'brand-1' }, { name: 'Brand name', link: 'brand-1' }, { name: 'Brand name', link: 'brand-1' }, { name: 'Brand name', link: 'brand-1' }, { name: 'Brand name', link: 'brand-1' }];

//
FashionLN.propTypes = {};

//
function FashionLN(props) {

    return _react2.default.createElement(
        'div',
        { className: 'FashionLN' },
        _react2.default.createElement(
            'ul',
            { className: 'FashionLN_list list-none' },
            list_names.map(function (item, ix) {
                return _react2.default.createElement(
                    'li',
                    { key: 'FashionLN_' + ix, className: 'FashionLN_item' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/fashion/' + item.link },
                        _react2.default.createElement(
                            'div',
                            { className: 'FashionLN_title brs-5px label-field' },
                            item.name
                        )
                    )
                );
            })
        )
    );
}

exports.default = FashionLN;

/***/ }),

/***/ "./src/pages/fashion/components/categories/FashionCtg.js":
/*!***************************************************************!*\
  !*** ./src/pages/fashion/components/categories/FashionCtg.js ***!
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _image_loading = __webpack_require__(/*! ../../../../../image/image_loading.svg */ "./image/image_loading.svg");

var _image_loading2 = _interopRequireDefault(_image_loading);

__webpack_require__(/*! ./FashionCtg.scss */ "./src/pages/fashion/components/categories/FashionCtg.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var categories = [{ name: 'Fashion man', img: _image_loading2.default.png, link: 'man' }, { name: 'Fashion woman', img: _image_loading2.default.png, link: 'woman' }, { name: 'Laptop & phone', img: _image_loading2.default.png, link: 'laptop-phone' }, { name: 'Watch', img: _image_loading2.default.png, link: 'watch' }, { name: 'Shoes', img: _image_loading2.default.png, link: 'shoes' }, { name: 'Mom & baby', img: _image_loading2.default.png, link: 'mom-baby' }, { name: 'Wallet', img: _image_loading2.default.png, link: 'wallet' }, { name: 'House', img: _image_loading2.default.png, link: 'house' }];

//
FashionCtg.propTypes = {};

//
function FashionCtg(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'ul',
            { className: 'FashionCtg_list list-none' },
            categories.map(function (item, ix) {
                return _react2.default.createElement(
                    'li',
                    { key: 'FashionCtg_' + ix },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/fashion/search?q=' + item.link },
                        _react2.default.createElement(
                            'div',
                            { className: 'FashionCtg_item brs-5px' },
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement('img', { src: item.img, alt: '', width: '50', height: '50' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'FashionCtg_item-name' },
                                item.name
                            )
                        )
                    )
                );
            })
        )
    );
}

exports.default = FashionCtg;

/***/ }),

/***/ "./src/pages/fashion/pages/_fashion_list/Fashion.js":
/*!**********************************************************!*\
  !*** ./src/pages/fashion/pages/_fashion_list/Fashion.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _APIFashionNoToken = __webpack_require__(/*! ../../../../api/api_django_no_token/fashion/APIFashionNoToken */ "./src/api/api_django_no_token/fashion/APIFashionNoToken.js");

var _ButtonRipple = __webpack_require__(/*! ../../../../component/button/button_ripple/ButtonRipple */ "./src/component/button/button_ripple/ButtonRipple.js");

var _ButtonRipple2 = _interopRequireDefault(_ButtonRipple);

var _WaitingBall = __webpack_require__(/*! ../../../../component/waiting/waiting_ball/WaitingBall */ "./src/component/waiting/waiting_ball/WaitingBall.js");

var _WaitingBall2 = _interopRequireDefault(_WaitingBall);

var _ProductItem = __webpack_require__(/*! ../../../../component/products/product_item/ProductItem */ "./src/component/products/product_item/ProductItem.js");

var _ProductItem2 = _interopRequireDefault(_ProductItem);

var _FashionBC = __webpack_require__(/*! ../../components/banner/banner_carousel/_main/FashionBC */ "./src/pages/fashion/components/banner/banner_carousel/_main/FashionBC.js");

var _FashionBC2 = _interopRequireDefault(_FashionBC);

var _FashionLN = __webpack_require__(/*! ../../components/banner/list_names/FashionLN */ "./src/pages/fashion/components/banner/list_names/FashionLN.js");

var _FashionLN2 = _interopRequireDefault(_FashionLN);

var _FashionCtg = __webpack_require__(/*! ../../components/categories/FashionCtg */ "./src/pages/fashion/components/categories/FashionCtg.js");

var _FashionCtg2 = _interopRequireDefault(_FashionCtg);

var _FashionH = __webpack_require__(/*! ../../components/head/_main/FashionH */ "./src/pages/fashion/components/head/_main/FashionH.js");

var _FashionH2 = _interopRequireDefault(_FashionH);

var _image_loading = __webpack_require__(/*! ../../../../../image/image_loading.svg */ "./image/image_loading.svg");

var _image_loading2 = _interopRequireDefault(_image_loading);

__webpack_require__(/*! ./Fashion.scss */ "./src/pages/fashion/pages/_fashion_list/Fashion.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//

//

//

//


// class
var Fashion = function (_Component) {
    _inherits(Fashion, _Component);

    function Fashion() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        _classCallCheck(this, Fashion);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Fashion.__proto__ || Object.getPrototypeOf(Fashion)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            list: [],
            hot_images: [],
            has_fetched: false,
            is_fetching: false,
            count: 0
        }, _this.getListHotImage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var res, hot_images;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _APIFashionNoToken.API_FashionHotImage_L)();

                        case 2:
                            res = _context.sent;
                            hot_images = res.data.map(function (item) {
                                return item.vid_pic;
                            });
                            //

                            _this.setState({
                                hot_images: [hot_images[hot_images.length - 1]].concat(_toConsumableArray(hot_images), [hot_images[0]]),
                                has_fetched: _this.state.list.length ? true : false
                            });

                        case 5:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _this.getListProductFashion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this$state, count, list, has_fetched, c_count, res;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _this$state = _this.state, count = _this$state.count, list = _this$state.list, has_fetched = _this$state.has_fetched;
                            c_count = list.length;
                            //

                            if (!(has_fetched && count <= c_count)) {
                                _context2.next = 4;
                                break;
                            }

                            return _context2.abrupt('return');

                        case 4:
                            //
                            has_fetched && _this.setState({
                                is_fetching: true
                            });
                            //
                            _context2.prev = 5;
                            _context2.next = 8;
                            return (0, _APIFashionNoToken.API_FashionProduct_L)({
                                page: 1,
                                size: 20,
                                c_count: c_count
                            });

                        case 8:
                            res = _context2.sent;

                            //
                            if (_this.mounted) {
                                list.push.apply(list, _toConsumableArray(res.data.data));
                                _this.setState({
                                    is_fetching: false,
                                    count: has_fetched ? count : res.data.count,
                                    has_fetched: _this.state.hot_images.length ? true : false
                                });
                            }
                            //
                            _context2.next = 15;
                            break;

                        case 12:
                            _context2.prev = 12;
                            _context2.t0 = _context2['catch'](5);

                            console.log(_context2.t0);

                        case 15:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2, [[5, 12]]);
        })), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Fashion, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.title = 'Fashion';
            this.mounted = true;
            // get api
            this.getListHotImage();
            this.getListProductFashion();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.mounted = false;
        }

        /* -------------------- GET API ------------------------ */

        //


        //

    }, {
        key: 'render',


        // render
        value: function render() {
            var _state = this.state,
                is_fetching = _state.is_fetching,
                has_fetched = _state.has_fetched,
                list = _state.list,
                hot_images = _state.hot_images,
                count = _state.count;


            return _react2.default.createElement(
                'div',
                { className: 'Fashion' },
                _react2.default.createElement(
                    'div',
                    { className: 'Fashion_head' },
                    _react2.default.createElement(_FashionH2.default, null)
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'Fashion_body' },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'Fashion_carousel' },
                            _react2.default.createElement(_FashionBC2.default, {
                                images: has_fetched ? hot_images : [_image_loading2.default, _image_loading2.default, _image_loading2.default]
                            })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'Fashion_banner' },
                            _react2.default.createElement(_FashionLN2.default, null),
                            _react2.default.createElement(_FashionCtg2.default, null)
                        )
                    ),
                    _react2.default.createElement('hr', { className: 'App_hr-bg' }),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'ul',
                            { className: 'Fashion__list' },
                            (has_fetched ? list : new Array(5).fill({ vid_pics: [] })).map(function (item, index) {
                                var id = item.id,
                                    vid_pics = item.vid_pics,
                                    name = item.name,
                                    new_price = item.new_price,
                                    old_price = item.old_price;

                                return _react2.default.createElement(
                                    'li',
                                    { key: index, className: 'Fashion__item' },
                                    _react2.default.createElement(_ProductItem2.default, {
                                        link: '/fashion:' + id,
                                        img: vid_pics.length ? vid_pics[0].vid_pic : undefined,
                                        name: name,
                                        new_price: new_price,
                                        old_price: old_price
                                    })
                                );
                            })
                        )
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'div',
                        {
                            className: count > list.length && has_fetched ? 'Fashion_more' : 'display-none'
                        },
                        _react2.default.createElement(_WaitingBall2.default, { is_animate: is_fetching }),
                        _react2.default.createElement(
                            _ButtonRipple2.default,
                            {
                                disabled: is_fetching,
                                onClick: this.getListProductFashion,
                                ripple_type: 'center'
                            },
                            'More product...'
                        )
                    ),
                    _react2.default.createElement('br', null)
                )
            );
        }
    }]);

    return Fashion;
}(_react.Component);

exports.default = Fashion;

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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/fashion/components/banner/banner_carousel/_main/FashionBC.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/fashion/components/banner/banner_carousel/_main/FashionBC.scss ***!
  \*******************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".FashionBC {\n  user-select: none;\n}\n\n.FashionBC_row {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.FashionBC_carousel {\n  width: 40rem;\n  max-width: 95vw;\n  height: 15rem;\n}", "",{"version":3,"sources":["webpack://./src/pages/fashion/components/banner/banner_carousel/_main/FashionBC.scss"],"names":[],"mappings":"AACA;EACI,iBAAA;AAAJ;;AAGA;EACI,aAAA;EACA,eAAA;EACA,6BAAA;EACA,mBAAA;AAAJ;;AAGA;EACI,YAAA;EACA,eAAA;EACA,aAAA;AAAJ","sourcesContent":["\r\n.FashionBC{\r\n    user-select: none;\r\n}\r\n\r\n.FashionBC_row{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n// \r\n.FashionBC_carousel{\r\n    width: 40rem;\r\n    max-width: 95vw;\r\n    height: 15rem;\r\n}\r\n\r\n\r\n//\r\n@media (max-width: 42rem){\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/fashion/components/banner/banner_carousel/right/FashionBCR.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/fashion/components/banner/banner_carousel/right/FashionBCR.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".FashionBCR_contain {\n  padding: 0.5rem;\n}", "",{"version":3,"sources":["webpack://./src/pages/fashion/components/banner/banner_carousel/right/FashionBCR.scss"],"names":[],"mappings":"AAAA;EACI,eAAA;AACJ","sourcesContent":[".FashionBCR_contain{\r\n    padding: 0.5rem;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/fashion/components/banner/list_names/FashionLN.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/fashion/components/banner/list_names/FashionLN.scss ***!
  \********************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".FashionLN_list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.FashionLN_item {\n  margin: 0.5rem;\n}\n\n.FashionLN_title {\n  padding: 0.5rem;\n  background-color: var(--white-blur);\n}\n.FashionLN_title:hover {\n  background-color: var(--white);\n}", "",{"version":3,"sources":["webpack://./src/pages/fashion/components/banner/list_names/FashionLN.scss"],"names":[],"mappings":"AAEA;EACI,aAAA;EACA,eAAA;EACA,uBAAA;AADJ;;AAGA;EACI,cAAA;AAAJ;;AAEA;EACI,eAAA;EACA,mCAAA;AACJ;AAAI;EACI,8BAAA;AAER","sourcesContent":["\r\n\r\n.FashionLN_list{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n.FashionLN_item{\r\n    margin: 0.5rem;\r\n}\r\n.FashionLN_title{\r\n    padding: 0.5rem;\r\n    background-color: var(--white-blur);\r\n    &:hover{\r\n        background-color: var(--white);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/fashion/components/categories/FashionCtg.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/fashion/components/categories/FashionCtg.scss ***!
  \**************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".FashionCtg_list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.FashionCtg_item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0.5rem;\n  width: 6rem;\n  padding: 0.5rem;\n  background-color: var(--white-blur);\n  border: 1px solid var(--md-bg-blur);\n}\n.FashionCtg_item:hover {\n  background-color: var(--white);\n}\n\n.FashionCtg_item-name {\n  height: 3rem;\n  overflow: hidden;\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/pages/fashion/components/categories/FashionCtg.scss"],"names":[],"mappings":"AAEA;EACI,aAAA;EACA,eAAA;EACA,uBAAA;AADJ;;AAGA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EAEA,cAAA;EACA,WAAA;EACA,eAAA;EACA,mCAAA;EACA,mCAAA;AADJ;AAEI;EACI,8BAAA;AAAR;;AAGA;EACI,YAAA;EACA,gBAAA;EACA,kBAAA;AAAJ","sourcesContent":["\r\n//\r\n.FashionCtg_list{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n.FashionCtg_item{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n    margin: 0.5rem;\r\n    width: 6rem;\r\n    padding: 0.5rem;\r\n    background-color: var(--white-blur);\r\n    border: 1px solid var(--md-bg-blur);\r\n    &:hover{\r\n        background-color: var(--white);\r\n    }\r\n}\r\n.FashionCtg_item-name{\r\n    height: 3rem;\r\n    overflow: hidden;\r\n    text-align: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/fashion/pages/_fashion_list/Fashion.scss":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/fashion/pages/_fashion_list/Fashion.scss ***!
  \*********************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _image_banner_shopping_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../image/banner_shopping.jpg */ "./image/banner_shopping.jpg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_image_banner_shopping_jpg__WEBPACK_IMPORTED_MODULE_3__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* ------------------------------------------ */\n.Fashion_body {\n  margin: 0 0.5rem;\n}\n\n.Fashion_head {\n  margin-bottom: 0.5rem;\n}\n\n.Fashion_carousel {\n  margin: 1rem 0;\n}\n\n.Fashion_banner {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-size: cover;\n}\n\n.Fashion__list {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: auto;\n  width: 52rem;\n  padding: 0;\n  list-style-type: none;\n}\n\n.Fashion_more {\n  text-align: center;\n}\n\n@media (max-width: 500px) {\n  .Fashion__list {\n    width: 100%;\n  }\n}\n@media (max-width: 300px) {\n  .Fashion_body {\n    margin: 0 0.25rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/pages/fashion/pages/_fashion_list/Fashion.scss"],"names":[],"mappings":"AACA,+CAAA;AAEA;EACI,gBAAA;AADJ;;AAKA;EACI,qBAAA;AAFJ;;AAIA;EACI,cAAA;AADJ;;AAIA;EACI,yDAAA;EACA,2BAAA;EACA,sBAAA;AADJ;;AAIA;EACI,aAAA;EACA,uBAAA;EACA,eAAA;EAEA,YAAA;EACA,YAAA;EACA,UAAA;EACA,qBAAA;AAFJ;;AAIA;EACI,kBAAA;AADJ;;AAKA;EACI;IACI,WAAA;EAFN;AACF;AAMA;EACI;IACI,iBAAA;EAJN;AACF","sourcesContent":["\r\n/* ------------------------------------------ */\r\n//\r\n.Fashion_body{\r\n    margin: 0 0.5rem;\r\n}\r\n\r\n//\r\n.Fashion_head{\r\n    margin-bottom: 0.5rem;\r\n}\r\n.Fashion_carousel{\r\n    margin: 1rem 0;\r\n}\r\n\r\n.Fashion_banner{\r\n    background-image: url('/image/banner_shopping.jpg');\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n\r\n.Fashion__list{\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    \r\n    margin: auto;\r\n    width: 52rem;\r\n    padding: 0;\r\n    list-style-type: none;\r\n}\r\n.Fashion_more{\r\n    text-align: center;\r\n}\r\n\r\n//\r\n@media (max-width: 500px){\r\n    .Fashion__list{\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n//\r\n@media (max-width: 300px){\r\n    .Fashion_body{\r\n        margin: 0 0.25rem;\r\n    }\r\n}\r\n\r\n"],"sourceRoot":""}]);
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

/***/ "./image/banner_shopping.jpg":
/*!***********************************!*\
  !*** ./image/banner_shopping.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/images_icons/c7c66650a58cb3a870a84ecaa62d573f.jpg");

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

/***/ "./src/pages/fashion/components/banner/banner_carousel/_main/FashionBC.scss":
/*!**********************************************************************************!*\
  !*** ./src/pages/fashion/components/banner/banner_carousel/_main/FashionBC.scss ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FashionBC_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./FashionBC.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/fashion/components/banner/banner_carousel/_main/FashionBC.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FashionBC_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FashionBC_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/fashion/components/banner/banner_carousel/right/FashionBCR.scss":
/*!***********************************************************************************!*\
  !*** ./src/pages/fashion/components/banner/banner_carousel/right/FashionBCR.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FashionBCR_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./FashionBCR.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/fashion/components/banner/banner_carousel/right/FashionBCR.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FashionBCR_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FashionBCR_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/fashion/components/banner/list_names/FashionLN.scss":
/*!***********************************************************************!*\
  !*** ./src/pages/fashion/components/banner/list_names/FashionLN.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FashionLN_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./FashionLN.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/fashion/components/banner/list_names/FashionLN.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FashionLN_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FashionLN_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/fashion/components/categories/FashionCtg.scss":
/*!*****************************************************************!*\
  !*** ./src/pages/fashion/components/categories/FashionCtg.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FashionCtg_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./FashionCtg.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/fashion/components/categories/FashionCtg.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FashionCtg_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FashionCtg_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/fashion/pages/_fashion_list/Fashion.scss":
/*!************************************************************!*\
  !*** ./src/pages/fashion/pages/_fashion_list/Fashion.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Fashion_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./Fashion.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/fashion/pages/_fashion_list/Fashion.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Fashion_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Fashion_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_fashion_pages__fashion_list_Fashion_js.js.map