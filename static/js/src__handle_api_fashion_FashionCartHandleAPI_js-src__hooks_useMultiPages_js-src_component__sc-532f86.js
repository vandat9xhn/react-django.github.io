(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src__handle_api_fashion_FashionCartHandleAPI_js-src__hooks_useMultiPages_js-src_component__sc-532f86"],{

/***/ "./src/_handle_api/fashion/FashionCartHandleAPI.js":
/*!*********************************************************!*\
  !*** ./src/_handle_api/fashion/FashionCartHandleAPI.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handle_API_FashionCart_D = exports.handle_API_FashionCart_C = exports.handle_API_FashionCart_L = undefined;

//
var handle_API_FashionCart_L = exports.handle_API_FashionCart_L = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _APIFashionToken.API_FashionCart_LC)('GET', {});

                    case 2:
                        res = _context.sent;
                        return _context.abrupt('return', res);

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function handle_API_FashionCart_L() {
        return _ref.apply(this, arguments);
    };
}();

//


var handle_API_FashionCart_C = exports.handle_API_FashionCart_C = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
        var _ref3$product_model = _ref3.product_model,
            product_model = _ref3$product_model === undefined ? 0 : _ref3$product_model,
            _ref3$model_id = _ref3.model_id,
            model_id = _ref3$model_id === undefined ? 0 : _ref3$model_id,
            _ref3$quantity = _ref3.quantity,
            quantity = _ref3$quantity === undefined ? 0 : _ref3$quantity;
        var res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return (0, _APIFashionToken.API_FashionCart_LC)('POST', {}, (0, _makeFormData2.default)({
                            product_model: product_model,
                            model_model: model_id,
                            quantity: quantity
                        }));

                    case 2:
                        res = _context2.sent;
                        return _context2.abrupt('return', res);

                    case 4:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function handle_API_FashionCart_C(_x) {
        return _ref2.apply(this, arguments);
    };
}();

//


var handle_API_FashionCart_D = exports.handle_API_FashionCart_D = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref5) {
        var _ref5$product_model = _ref5.product_model,
            product_model = _ref5$product_model === undefined ? 0 : _ref5$product_model,
            _ref5$model_id = _ref5.model_id,
            model_id = _ref5$model_id === undefined ? 0 : _ref5$model_id;
        var res;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return (0, _APIFashionToken.API_FashionCart_UD)('DELETE', (0, _makeFormData2.default)({
                            product_model: product_model,
                            model_model: model_id
                        }));

                    case 2:
                        res = _context3.sent;
                        return _context3.abrupt('return', res);

                    case 4:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function handle_API_FashionCart_D(_x2) {
        return _ref4.apply(this, arguments);
    };
}();

var _makeFormData = __webpack_require__(/*! ../../_some_function/makeFormData */ "./src/_some_function/makeFormData.js");

var _makeFormData2 = _interopRequireDefault(_makeFormData);

var _APIFashionToken = __webpack_require__(/*! ../../api/api_django/fashion/APIFashionToken */ "./src/api/api_django/fashion/APIFashionToken.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//

/***/ }),

/***/ "./src/_hooks/useMultiPages.js":
/*!*************************************!*\
  !*** ./src/_hooks/useMultiPages.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.useMultiPages = useMultiPages;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
function useMultiPages(_ref) {

    //
    var getData_API = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var new_page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial_page;
            var start_obj_state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var _ref3, data, new_count, new_pages;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            setStateObj(function (state_obj) {
                                return _extends({}, state_obj, {
                                    page: new_page,
                                    page_obj: _extends({}, state_obj.page_obj, _defineProperty({}, new_page, state_obj.page_obj[new_page] || [])),
                                    is_fetching: true
                                }, start_obj_state);
                            });

                            _context.next = 3;
                            return handle_API_L(new_page);

                        case 3:
                            _ref3 = _context.sent;
                            data = _ref3.data;
                            new_count = _ref3.count;
                            new_pages = _ref3.pages;


                            setStateObj(function (state_obj) {
                                return _extends({}, state_obj, {
                                    page_obj: _extends({}, state_obj.page_obj, _defineProperty({}, new_page, data))
                                }, state_obj.has_fetched ? {} : { count: new_count, pages: new_pages }, {

                                    has_fetched: true,
                                    is_fetching: false
                                });
                            });

                        case 8:
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

    //


    var _ref$initial_page = _ref.initial_page,
        initial_page = _ref$initial_page === undefined ? 1 : _ref$initial_page,
        handle_API_L = _ref.handle_API_L,
        _ref$other_state = _ref.other_state,
        other_state = _ref$other_state === undefined ? {} : _ref$other_state;

    //
    var _useState = (0, _react.useState)(_extends({
        page_obj: _defineProperty({}, initial_page, []),
        page: initial_page,
        pages: 1,
        count: 0,

        has_fetched: false,
        is_fetching: false

    }, other_state)),
        _useState2 = _slicedToArray(_useState, 2),
        state_obj = _useState2[0],
        setStateObj = _useState2[1];

    var page_obj = state_obj.page_obj,
        page = state_obj.page,
        has_fetched = state_obj.has_fetched;
    function handleChangePage(new_page) {
        if (page == new_page) {
            return;
        }

        if (page_obj[new_page]) {
            setStateObj(_extends({}, state_obj, {
                page: new_page
            }));

            return;
        }

        getData_API(new_page);
    }

    //
    function refreshData_API(_ref4) {
        var new_page = _ref4.new_page,
            _ref4$start_obj_state = _ref4.start_obj_state,
            start_obj_state = _ref4$start_obj_state === undefined ? {} : _ref4$start_obj_state;

        getData_API(new_page, _extends({
            has_fetched: false,
            page_obj: _defineProperty({}, new_page, []),
            pages: 1,
            count: 0

        }, start_obj_state));
    }

    //
    return {
        state_obj: state_obj,
        setStateObj: setStateObj,
        getData_API: getData_API,
        refreshData_API: refreshData_API,
        handleChangePage: handleChangePage
    };
}

/***/ }),

/***/ "./src/component/_screen_once/notice/ScreenNotice.js":
/*!***********************************************************!*\
  !*** ./src/component/_screen_once/notice/ScreenNotice.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.openScreenNotice = openScreenNotice;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _NoticeDiv = __webpack_require__(/*! ../../some_div/notice_div/NoticeDiv */ "./src/component/some_div/notice_div/NoticeDiv.js");

var _NoticeDiv2 = _interopRequireDefault(_NoticeDiv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
function openScreenNotice(_ref) {
    var openScreenOnce = _ref.openScreenOnce,
        ComponentNotice = _ref.ComponentNotice;

    openScreenOnce({
        ScreenOneComponent: _react2.default.createElement(ScreenNotice, { ComponentNotice: ComponentNotice })
    });
}

//

// 
ScreenNotice.propTypes = {};

//
function ScreenNotice(_ref2) {
    var ComponentNotice = _ref2.ComponentNotice;

    //
    return _react2.default.createElement(
        _NoticeDiv2.default,
        null,
        ComponentNotice
    );
}

exports.default = ScreenNotice;

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

//
function NoticeDiv(_ref) {
    var children = _ref.children;

    return _react2.default.createElement(
        'div',
        { className: 'NoticeDiv' },
        children
    );
}

exports.default = NoticeDiv;

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

/***/ })

}]);
//# sourceMappingURL=src__handle_api_fashion_FashionCartHandleAPI_js-src__hooks_useMultiPages_js-src_component__sc-532f86.js.map