(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_learn__main_LearnHTML_js"],{

/***/ "./src/_custom_hooks/useHoldPress.js":
/*!*******************************************!*\
  !*** ./src/_custom_hooks/useHoldPress.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useHoldPress = useHoldPress;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

//
function useHoldPress(time) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

    var stop_hold = (0, _react.useRef)(true);
    //
    function StartHoldPress() {
        stop_hold.current = false;
        var x = 0;
        var interval = setInterval(function () {
            x++;
            if (x == time) {
                callback();
                clearInterval(interval);
            } else if (stop_hold.current) {
                clearInterval(interval);
            }
        }, 100);
    }

    function StopHoldPress() {
        stop_hold.current = true;
    }

    return [StartHoldPress, StopHoldPress];
}

/***/ }),

/***/ "./src/component/posts/__context_post/ContextPost.js":
/*!***********************************************************!*\
  !*** ./src/component/posts/__context_post/ContextPost.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.context_post = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

//
var context_post = exports.context_post = _react2.default.createContext();

//
var ContextPost = function ContextPost(props) {
    var children = props.children,
        rest_props = _objectWithoutProperties(props, ['children']);

    return _react2.default.createElement(
        context_post.Provider,
        {
            value: _extends({}, rest_props)
        },
        children
    );
};

exports.default = ContextPost;

/***/ }),

/***/ "./src/pages/learn/_main/LearnHTML.js":
/*!********************************************!*\
  !*** ./src/pages/learn/_main/LearnHTML.js ***!
  \********************************************/
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

var _TestHook = __webpack_require__(/*! ../test_hook/TestHook */ "./src/pages/learn/test_hook/TestHook.js");

var _TestHook2 = _interopRequireDefault(_TestHook);

var _TestWs = __webpack_require__(/*! ../test_ws/TestWs */ "./src/pages/learn/test_ws/TestWs.js");

var _TestWs2 = _interopRequireDefault(_TestWs);

var _TestPagination = __webpack_require__(/*! ../test_pagination/TestPagination */ "./src/pages/learn/test_pagination/TestPagination.js");

var _TestPagination2 = _interopRequireDefault(_TestPagination);

__webpack_require__(/*! ./LearnHTML.scss */ "./src/pages/learn/_main/LearnHTML.scss");

var _TestSearchAnimate = __webpack_require__(/*! ../test_search_animate/TestSearchAnimate */ "./src/pages/learn/test_search_animate/TestSearchAnimate.js");

var _TestSearchAnimate2 = _interopRequireDefault(_TestSearchAnimate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
LearnHTML.propTypes = {};

//
function LearnHTML() {
    var _useState = (0, _react.useState)([0, 1]),
        _useState2 = _slicedToArray(_useState, 2),
        arr = _useState2[0],
        setArr = _useState2[1];
    // iframe


    var refIframe = (0, _react.useRef)(null);

    // use effect
    (0, _react.useEffect)(function () {
        document.title = 'Learn HTML';
        runHTML();
    }, []);

    // use effect
    (0, _react.useEffect)(function () {
        window.addEventListener('keydown', handleMobileBack);

        return function () {
            window.removeEventListener('keydown', handleMobileBack);
        };
    }, []);
    function handleMobileBack(e) {
        alert(e.keyCode);
    }

    // run html
    var runHTML = function runHTML() {
        var iframe = refIframe.current.contentWindow.document;
        var text = document.getElementsByClassName('LearnHTML__html')[0].innerText;
        iframe.open();
        iframe.write(text);
        iframe.close();

        var body = iframe.getElementsByTagName('BODY')[0];
        body.style.setProperty('font-size', '17px');
        body.style.setProperty('color', localStorage.light_mode == 1 ? 'black' : 'rgba(236, 229, 229, 0.8)');
    };

    var testDelArr = function testDelArr(ix) {
        setArr(arr.filter(function (item) {
            return item != ix;
        }));
    };

    // render
    return _react2.default.createElement(
        'div',
        { className: 'LearnHTML' },
        _react2.default.createElement(
            'div',
            { className: 'LearnHTML_contain' },
            _react2.default.createElement(
                'div',
                { className: 'LearnHTML_row-title' },
                _react2.default.createElement(
                    'div',
                    { className: 'LearnHTML__run', onClick: runHTML },
                    'Run >>'
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'LearnHTML_row-learn display-flex' },
                _react2.default.createElement(
                    'div',
                    { className: 'LearnHTML_col' },
                    _react2.default.createElement(
                        'div',
                        { className: 'LearnHTML__html' },
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'LearnHTML__editable',
                                contentEditable: true, suppressContentEditableWarning: true,
                                spellCheck: false
                            },
                            _react2.default.createElement(
                                'b',
                                null,
                                "<!DOCTYPE html>"
                            ),
                            _react2.default.createElement('br', null),
                            "<html>",
                            ' ',
                            _react2.default.createElement('br', null),
                            "<head>",
                            ' ',
                            _react2.default.createElement('br', null),
                            "<style>",
                            ' ',
                            _react2.default.createElement('br', null),
                            ' ',
                            _react2.default.createElement('br', null),
                            "</style>",
                            ' ',
                            _react2.default.createElement('br', null),
                            "</head>",
                            ' ',
                            _react2.default.createElement('br', null),
                            "<body>",
                            ' ',
                            _react2.default.createElement('br', null),
                            ' ',
                            _react2.default.createElement('br', null),
                            'Hello ',
                            _react2.default.createElement('br', null),
                            ' ',
                            _react2.default.createElement('br', null),
                            "</body>",
                            ' ',
                            _react2.default.createElement('br', null),
                            "</html>",
                            ' ',
                            _react2.default.createElement('br', null)
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'LearnHTML_col' },
                    _react2.default.createElement(
                        'div',
                        { className: 'LearnHTML__iframe scroll-thin' },
                        _react2.default.createElement('iframe', {
                            ref: refIframe,
                            id: 'LearnHTML__iframe',
                            src: '',
                            frameBorder: '0'
                        })
                    )
                )
            )
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_TestHook2.default, null)
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_TestSearchAnimate2.default, null)
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_TestPagination2.default, null)
        ),
        _react2.default.createElement(_TestWs2.default, null)
    );
}

exports.default = LearnHTML;

/***/ }),

/***/ "./src/pages/learn/test_hook/TestHook.js":
/*!***********************************************!*\
  !*** ./src/pages/learn/test_hook/TestHook.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _useHoldPress3 = __webpack_require__(/*! ../../../_custom_hooks/useHoldPress */ "./src/_custom_hooks/useHoldPress.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
TestHook.propTypes = {};

//
function TestHook(props) {
    //
    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        hold_success = _useState2[0],
        setHoldSuccess = _useState2[1];
    //


    var _useHoldPress = (0, _useHoldPress3.useHoldPress)(6, function () {
        setHoldSuccess(true);
    }),
        _useHoldPress2 = _slicedToArray(_useHoldPress, 2),
        StartHoldPress = _useHoldPress2[0],
        StopHoldPress = _useHoldPress2[1];
    //


    function handleMouseDown() {
        StartHoldPress();
    }
    //
    function handleMouseUp() {
        StopHoldPress();
    }
    //
    function handleReset() {
        setHoldSuccess(false);
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                {
                    className: 'cursor-pointer',
                    onMouseDown: handleMouseDown,
                    onMouseUp: handleMouseUp,
                    onTouchStart: handleMouseDown,
                    onTouchEnd: handleMouseUp
                },
                'Hold press'
            ),
            _react2.default.createElement(
                'div',
                { className: hold_success ? '' : 'display-none' },
                'Hold success'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
                'div',
                { onClick: handleReset },
                'Reset'
            )
        )
    );
}

exports.default = TestHook;

/***/ }),

/***/ "./src/pages/learn/test_pagination/TestPagination.js":
/*!***********************************************************!*\
  !*** ./src/pages/learn/test_pagination/TestPagination.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Pagination = __webpack_require__(/*! ../../../component/pagination/_main/Pagination */ "./src/component/pagination/_main/Pagination.js");

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

TestPagination.propTypes = {};

function TestPagination(props) {
    //
    var _useState = (0, _react.useState)(1),
        _useState2 = _slicedToArray(_useState, 2),
        current_page = _useState2[0],
        setCurrentPage = _useState2[1];
    //


    function handleChangePage(new_page) {
        setCurrentPage(new_page);
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Pagination2.default, {
            count: 8,
            num_side_center: 1,
            current: current_page,
            handleChangePage: handleChangePage
        })
    );
}

exports.default = TestPagination;

/***/ }),

/***/ "./src/pages/learn/test_search_animate/TestSearchAnimate.js":
/*!******************************************************************!*\
  !*** ./src/pages/learn/test_search_animate/TestSearchAnimate.js ***!
  \******************************************************************/
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

var _SearchAnimateDiv = __webpack_require__(/*! ../../../component/some_div/search_animate_div/SearchAnimateDiv */ "./src/component/some_div/search_animate_div/SearchAnimateDiv.js");

var _SearchAnimateDiv2 = _interopRequireDefault(_SearchAnimateDiv);

__webpack_require__(/*! ./TestSearchAnimate.scss */ "./src/pages/learn/test_search_animate/TestSearchAnimate.scss");

var _ContextPost = __webpack_require__(/*! ../../../component/posts/__context_post/ContextPost */ "./src/component/posts/__context_post/ContextPost.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 
TestSearchAnimate.propTypes = {};

// 
function TestSearchAnimate(props) {
    var _useState = (0, _react.useState)(''),
        _useState2 = _slicedToArray(_useState, 2),
        value = _useState2[0],
        setValue = _useState2[1];
    // 


    console.log((0, _react.useContext)(_ContextPost.context_post));

    // 
    function handleChange(new_value) {
        setValue(new_value);
    }
    //
    function handleSearch() {
        console.log(value);
    }

    // 
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'TestSearchAnimate_search' },
            _react2.default.createElement(_SearchAnimateDiv2.default, {
                value: value,
                handleChange: handleChange,
                handleSearch: handleSearch
            })
        )
    );
}

exports.default = TestSearchAnimate;

/***/ }),

/***/ "./src/pages/learn/test_ws/TestWs.js":
/*!*******************************************!*\
  !*** ./src/pages/learn/test_ws/TestWs.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TestWsChild = __webpack_require__(/*! ./child/TestWsChild */ "./src/pages/learn/test_ws/child/TestWsChild.js");

var _TestWsChild2 = _interopRequireDefault(_TestWsChild);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//


//
var TestWs = function (_Component) {
    _inherits(TestWs, _Component);

    function TestWs() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, TestWs);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TestWs.__proto__ || Object.getPrototypeOf(TestWs)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            arr: [1, 2, 3]
        }, _this.handleTestParent = function () {
            var arr = _this.state.arr;

            arr.push(arr.length + 1);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TestWs, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {}
    }, {
        key: 'render',
        value: function render() {
            var arr = this.state.arr;


            console.log(this.state.arr);
            //
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { onClick: this.handleTestParent },
                    'Test parent'
                ),
                _react2.default.createElement(_TestWsChild2.default, { arr: arr })
            );
        }
    }]);

    return TestWs;
}(_react.Component);

TestWs.propTypes = {};

exports.default = TestWs;

/***/ }),

/***/ "./src/pages/learn/test_ws/child/TestWsChild.js":
/*!******************************************************!*\
  !*** ./src/pages/learn/test_ws/child/TestWsChild.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
// 


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GetAPI = __webpack_require__(/*! ../../../../api/api_heroku/get_api/GetAPI */ "./src/api/api_heroku/get_api/GetAPI.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// 
TestWsChild.propTypes = {};

// 
function TestWsChild(props) {

    // 
    var getDataHeroku_Phone = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _GetAPI.API_Heroku1_Phone_L)({
                                page: 1,
                                size: 10
                            });

                        case 2:
                            res = _context.sent;


                            console.log(res);

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function getDataHeroku_Phone() {
            return _ref.apply(this, arguments);
        };
    }();

    // 


    var arr = props.arr;
    // 

    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        force_update = _useState2[0],
        setForceUpdate = _useState2[1];

    // 


    (0, _react.useEffect)(function () {
        getDataHeroku_Phone();
    }, []);function handleTestUpdate() {
        arr.push(arr.length + 1);
        setForceUpdate(!force_update);
    }

    console.log(arr);
    // 
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'cursor-pointer', onClick: handleTestUpdate },
            'Test update'
        ),
        _react2.default.createElement(
            'div',
            null,
            arr.map(function (item) {
                return _react2.default.createElement(
                    'div',
                    { key: 'TestWsChild_' + item },
                    item
                );
            })
        )
    );
}

exports.default = TestWsChild;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/learn/_main/LearnHTML.scss":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/learn/_main/LearnHTML.scss ***!
  \*******************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".LearnHTML_contain {\n  padding: 0.5rem;\n}\n@media (max-width: 500px) {\n  .LearnHTML_contain {\n    padding: 0;\n  }\n}\n\n.LearnHTML_row-title {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--md-bg-ccc);\n}\n.LearnHTML_row-title .LearnHTML__run {\n  padding: 0.5rem;\n  background-color: var(--success);\n  color: white;\n  cursor: pointer;\n}\n.LearnHTML_row-title .LearnHTML__run:hover {\n  opacity: 0.8;\n}\n\n.LearnHTML_col {\n  width: 50%;\n  border: 2px solid var(--bg-blur);\n  overflow-y: auto;\n  word-wrap: break-word;\n}\n.LearnHTML_col .LearnHTML__editable {\n  height: 90vh;\n  max-height: 30rem;\n  outline: none;\n}\n.LearnHTML_col .LearnHTML__editable:focus {\n  outline: none;\n}\n.LearnHTML_col .LearnHTML__iframe {\n  height: 90vh;\n  max-height: 30rem;\n}\n.LearnHTML_col iframe {\n  width: 100%;\n  height: 100%;\n}\n\n@media (max-width: 500px) {\n  .LearnHTML_row-learn {\n    display: block;\n  }\n\n  .LearnHTML_col {\n    width: 100%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/pages/learn/_main/LearnHTML.scss"],"names":[],"mappings":"AAQA;EACI,eAAA;AAPJ;AAAI;EAMJ;IAGQ,UAAA;EALN;AACF;;AASA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kCAAA;AANJ;AASI;EACI,eAAA;EACA,gCAAA;EACA,YAAA;EACA,eAAA;AAPR;AAQQ;EACI,YAAA;AANZ;;AAYA;EACI,UAAA;EAEA,gCAAA;EACA,gBAAA;EACA,qBAAA;AAVJ;AAWI;EACI,YAAA;EACA,iBAAA;EACA,aAAA;AATR;AAUQ;EACI,aAAA;AARZ;AAWI;EACI,YAAA;EACA,iBAAA;AATR;AAWI;EACI,WAAA;EACA,YAAA;AATR;;AAeA;EACI;IACI,cAAA;EAZN;;EAcE;IACI,WAAA;EAXN;AACF","sourcesContent":["// mixin media\r\n@mixin sm-media{\r\n    @media (max-width: 500px){\r\n        @content\r\n    }\r\n}\r\n\r\n// \r\n.LearnHTML_contain {\r\n    padding: 0.5rem;\r\n    @include sm-media() {\r\n        padding: 0;\r\n    }\r\n}\r\n\r\n// row title\r\n.LearnHTML_row-title {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: var(--md-bg-ccc);\r\n\r\n    // btn run\r\n    .LearnHTML__run {\r\n        padding: 0.5rem;\r\n        background-color: var(--success);\r\n        color: white;\r\n        cursor: pointer;\r\n        &:hover {\r\n            opacity: 0.8;\r\n        }\r\n    }\r\n}\r\n\r\n// col learn\r\n.LearnHTML_col {\r\n    width: 50%;\r\n\r\n    border: 2px solid var(--bg-blur);\r\n    overflow-y: auto;\r\n    word-wrap: break-word;\r\n    .LearnHTML__editable {\r\n        height: 90vh;\r\n        max-height: 30rem;\r\n        outline: none;\r\n        &:focus{\r\n            outline: none;\r\n        }\r\n    }\r\n    .LearnHTML__iframe {\r\n        height: 90vh;\r\n        max-height: 30rem;\r\n    }\r\n    iframe {\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n}\r\n\r\n\r\n//\r\n@media (max-width: 500px){\r\n    .LearnHTML_row-learn{\r\n        display: block;\r\n    }\r\n    .LearnHTML_col{\r\n        width: 100%;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/learn/test_search_animate/TestSearchAnimate.scss":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/learn/test_search_animate/TestSearchAnimate.scss ***!
  \*****************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".TestSearchAnimate_search {\n  width: 20rem;\n  max-width: 96vw;\n}", "",{"version":3,"sources":["webpack://./src/pages/learn/test_search_animate/TestSearchAnimate.scss"],"names":[],"mappings":"AACA;EACI,YAAA;EACA,eAAA;AAAJ","sourcesContent":["\r\n.TestSearchAnimate_search{\r\n    width: 20rem;\r\n    max-width: 96vw;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/learn/_main/LearnHTML.scss":
/*!**********************************************!*\
  !*** ./src/pages/learn/_main/LearnHTML.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_LearnHTML_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./LearnHTML.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/learn/_main/LearnHTML.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_LearnHTML_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_LearnHTML_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/learn/test_search_animate/TestSearchAnimate.scss":
/*!********************************************************************!*\
  !*** ./src/pages/learn/test_search_animate/TestSearchAnimate.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_TestSearchAnimate_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./TestSearchAnimate.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/learn/test_search_animate/TestSearchAnimate.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_TestSearchAnimate_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_TestSearchAnimate_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_learn__main_LearnHTML_js.js.map