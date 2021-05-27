(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_new_feed__main_NewFeed_js"],{

/***/ "./src/_custom_hooks/useScrollDown.js":
/*!********************************************!*\
  !*** ./src/_custom_hooks/useScrollDown.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useScrollDown = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _ConstAPI = __webpack_require__(/*! ../api/_ConstAPI */ "./src/api/_ConstAPI.js");

var _useMounted = __webpack_require__(/*! ./useMounted */ "./src/_custom_hooks/useMounted.js");

var _ScrollDown = __webpack_require__(/*! ../_some_function/ScrollDown */ "./src/_some_function/ScrollDown.js");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
var useScrollDown = exports.useScrollDown = function useScrollDown() {
    var initial_data_arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var handle_API_L = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
        return new Promise();
    };

    /*---------------------------- GET API ---------------------------------*/

    // get post
    var getData_API = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var start_obj_state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var _ref2, data, new_count;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;

                            setDataState(function (data_state) {
                                return _extends({}, data_state, {
                                    is_fetching: true
                                }, start_obj_state);
                            });

                            _context.next = 4;
                            return handle_API_L(data_count.current);

                        case 4:
                            _ref2 = _context.sent;
                            data = _ref2.data;
                            new_count = _ref2.count;


                            mounted && setDataState(function (data_state) {
                                var has_fetched = data_state.has_fetched,
                                    data_arr = data_state.data_arr,
                                    count = data_state.count;


                                data_count.current += data.length;
                                is_max.current = has_fetched ? count <= data_arr.length + new_count : new_count <= data.length;

                                return {
                                    data_arr: has_fetched ? [].concat(_toConsumableArray(data_arr), _toConsumableArray(data)) : data,
                                    count: has_fetched ? count : new_count,
                                    is_fetching: false,
                                    has_fetched: true
                                };
                            });
                            _context.next = 13;
                            break;

                        case 10:
                            _context.prev = 10;
                            _context.t0 = _context['catch'](0);

                            console.log(_context.t0);

                        case 13:
                            _context.prev = 13;

                            just_fetching.current = false;
                            return _context.finish(13);

                        case 16:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[0, 10, 13, 16]]);
        }));

        return function getData_API() {
            return _ref.apply(this, arguments);
        };
    }();

    /* --------------------------------------------- */

    //


    var thresh_hold = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.7;

    // state
    var _useState = (0, _react.useState)({
        data_arr: initial_data_arr,
        count: 0,
        is_fetching: false,
        has_fetched: false
    }),
        _useState2 = _slicedToArray(_useState, 2),
        data_state = _useState2[0],
        setDataState = _useState2[1];

    // ref


    var pos = (0, _react.useRef)(0);
    var is_max = (0, _react.useRef)(false);
    var just_fetching = (0, _react.useRef)(true);
    var data_count = (0, _react.useRef)(0);

    //
    var mounted = (0, _useMounted.useMounted)();

    //
    (0, _react.useEffect)(function () {
        window.addEventListener('scroll', handleScroll);

        return function () {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);function handleGetMoreData() {
        pos.current = window.pageYOffset;
        just_fetching.current = true;
        getData_API();
    }

    //
    function handleScroll() {
        if (data_count.current == 0) {
            return;
        }

        if ((0, _ScrollDown.WindowScrollDownBool)(pos.current, just_fetching.current, _ConstAPI.is_api_fake ? false : is_max.current, thresh_hold)) {
            handleGetMoreData();
        }
    }

    //
    function getData_API_at_first() {
        getData_API({
            data_arr: [],
            count: 0,
            has_fetched: false
        });
    }

    // 
    function resetStopScrollDown() {
        pos.current = 0;
        data_count.current = 0;
    }

    return [data_state, setDataState, getData_API_at_first, resetStopScrollDown];
};

/***/ }),

/***/ "./src/component/posts/__common/InitialPosts.js":
/*!******************************************************!*\
  !*** ./src/component/posts/__common/InitialPosts.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
//
var initial_posts = exports.initial_posts = [{
    id: 0,
    user: {
        id: 0,
        picture: '',
        first_name: '',
        last_name: '',
        is_online: false
    },
    content_obj: {
        has_more_content: false,
        content: ''
    },
    vid_pics: [{
        id: 0,
        likes: [],
        arr_unique_like: [],
        count_like: 0,
        vid_pic: '',
        content_obj: {
            has_more_content: false,
            content: ''
        },
        comments: [],
        count_comment: 0,
        histories: [],
        created_time: '2021-04-01T07:48:48.176630Z',
        updated_time: '2021-04-01T15:18:30.339347Z'
    }],
    count_vid_pic: 0,
    likes: [],
    count_like: 0,
    user_type_like: -1,
    shares: [],
    count_share: 0,
    count_unique_share: 0,
    count_user_shared: 0,
    comments: [],
    count_comment: 0,
    histories: [],
    count_history: 0,
    permission_post: 0,
    created_time: '2021-04-01T07:48:48.176630Z',
    updated_time: '2021-04-01T15:18:30.339347Z'
}];

/***/ }),

/***/ "./src/pages/new_feed/__handle_api/NewFeedHandleAPI.js":
/*!*************************************************************!*\
  !*** ./src/pages/new_feed/__handle_api/NewFeedHandleAPI.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handle_API_NewFeedPost_L = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var handle_API_NewFeedPost_L = exports.handle_API_NewFeedPost_L = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(c_count) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _UserPost.API_Post_L)(_extends({}, _NewFeedParams.params_new_feed_post_l, {
                            c_count: c_count
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

    return function handle_API_NewFeedPost_L(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _UserPost = __webpack_require__(/*! ../../../api/api_django/user/user_post/UserPost */ "./src/api/api_django/user/user_post/UserPost.js");

var _NewFeedParams = __webpack_require__(/*! ../__params/NewFeedParams */ "./src/pages/new_feed/__params/NewFeedParams.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//

/***/ }),

/***/ "./src/pages/new_feed/__params/NewFeedParams.js":
/*!******************************************************!*\
  !*** ./src/pages/new_feed/__params/NewFeedParams.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


// 
var params_new_feed_post_l = exports.params_new_feed_post_l = {
    page: 1,
    size: 6,
    is_profile: 0
};

/***/ }),

/***/ "./src/pages/new_feed/_main/NewFeed.js":
/*!*********************************************!*\
  !*** ./src/pages/new_feed/_main/NewFeed.js ***!
  \*********************************************/
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

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _useScrollDown3 = __webpack_require__(/*! ../../../_custom_hooks/useScrollDown */ "./src/_custom_hooks/useScrollDown.js");

var _FetchingDiv = __webpack_require__(/*! ../../../component/some_div/fetching/FetchingDiv */ "./src/component/some_div/fetching/FetchingDiv.js");

var _FetchingDiv2 = _interopRequireDefault(_FetchingDiv);

var _InitialPosts = __webpack_require__(/*! ../../../component/posts/__common/InitialPosts */ "./src/component/posts/__common/InitialPosts.js");

var _PostsWs = __webpack_require__(/*! ../../../component/posts/_posts/_main/PostsWs */ "./src/component/posts/_posts/_main/PostsWs.js");

var _PostsWs2 = _interopRequireDefault(_PostsWs);

var _NewFeedHandleAPI = __webpack_require__(/*! ../__handle_api/NewFeedHandleAPI */ "./src/pages/new_feed/__handle_api/NewFeedHandleAPI.js");

var _NewFeedSearch = __webpack_require__(/*! ../search/NewFeedSearch */ "./src/pages/new_feed/search/NewFeedSearch.js");

var _NewFeedSearch2 = _interopRequireDefault(_NewFeedSearch);

__webpack_require__(/*! ./NewFeed.scss */ "./src/pages/new_feed/_main/NewFeed.scss");

__webpack_require__(/*! ./NewFeedRes.scss */ "./src/pages/new_feed/_main/NewFeedRes.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
function NewFeed() {
    //
    var params_api = (0, _react.useRef)({});

    //

    var _useScrollDown = (0, _useScrollDown3.useScrollDown)(_InitialPosts.initial_posts, function (c_count) {
        return (0, _NewFeedHandleAPI.handle_API_NewFeedPost_L)(c_count, params_api.current);
    }),
        _useScrollDown2 = _slicedToArray(_useScrollDown, 3),
        post_obj = _useScrollDown2[0],
        setPostObj = _useScrollDown2[1],
        getData_API_Post_first = _useScrollDown2[2];

    var post_arr = post_obj.data_arr,
        is_fetching = post_obj.is_fetching,
        has_fetched = post_obj.has_fetched;

    //

    (0, _react.useEffect)(function () {
        getData_API_Post_first();
    }, []);

    /* ---------------------- SEARCH --------------------- */

    var handleSearch = function handleSearch(search) {
        params_api.current = {
            search: search
        };
        getData_API_Post_first();
        console.log(search);
    };

    //
    return _react2.default.createElement(
        'div',
        { className: 'NewFeed' },
        _react2.default.createElement(
            'div',
            { className: 'NewFeed_contain bg-fb' },
            _react2.default.createElement(
                'div',
                { className: 'NewFeed_search' },
                _react2.default.createElement(_NewFeedSearch2.default, { handleSearch: handleSearch })
            ),
            _react2.default.createElement(
                'div',
                { className: 'NewFeed_row' },
                _react2.default.createElement('div', { className: 'NewFeed_col-left' }),
                _react2.default.createElement(
                    'div',
                    { className: 'NewFeed_col-center' },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_PostsWs2.default, {
                            posts: has_fetched ? post_arr : [],
                            has_fetched: has_fetched,
                            is_fetching: is_fetching
                        })
                    )
                ),
                _react2.default.createElement('div', { className: 'NewFeed_col-right' })
            )
        )
    );
}

NewFeed.propTypes = {};

exports.default = NewFeed;

/***/ }),

/***/ "./src/pages/new_feed/search/NewFeedSearch.js":
/*!****************************************************!*\
  !*** ./src/pages/new_feed/search/NewFeedSearch.js ***!
  \****************************************************/
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

__webpack_require__(/*! ./NewFeedSearch.scss */ "./src/pages/new_feed/search/NewFeedSearch.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
NewFeedSearch.propTypes = {
    handleSearch: _propTypes2.default.func
};

//
function NewFeedSearch(props) {
    var handleSearch = props.handleSearch;
    //

    var _useState = (0, _react.useState)(''),
        _useState2 = _slicedToArray(_useState, 2),
        value = _useState2[0],
        setValue = _useState2[1];

    //


    function handleChange(new_value) {
        setValue(new_value);
    }
    //
    function onSearch() {
        handleSearch(value);
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'NewFeedSearch' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_SearchAnimateDiv2.default, {
                value: value,
                placeholder: 'Search...',
                handleChange: handleChange,
                handleSearch: onSearch
            })
        )
    );
}

exports.default = NewFeedSearch;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/new_feed/_main/NewFeed.scss":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/new_feed/_main/NewFeed.scss ***!
  \********************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".NewFeed_contain {\n  padding: 0 0.5rem;\n}\n\n.NewFeed_row {\n  display: flex;\n  justify-content: space-between;\n}\n\n.NewFeed_col-left {\n  width: 350px;\n  background-color: var(--md-bg-primary);\n}\n\n.NewFeed_col-center {\n  width: 500px;\n}\n\n.NewFeed_col-right {\n  width: 350px;\n  background-color: var(--md-bg-primary);\n}", "",{"version":3,"sources":["webpack://./src/pages/new_feed/_main/NewFeed.scss"],"names":[],"mappings":"AACA;EACI,iBAAA;AAAJ;;AAGA;EACI,aAAA;EACA,8BAAA;AAAJ;;AAGA;EACI,YAAA;EACA,sCAAA;AAAJ;;AAGA;EACI,YAAA;AAAJ;;AAGA;EACI,YAAA;EACA,sCAAA;AAAJ","sourcesContent":["\r\n.NewFeed_contain{\r\n    padding: 0 0.5rem;\r\n}\r\n\r\n.NewFeed_row {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n// .\r\n.NewFeed_col-left {\r\n    width: 350px;\r\n    background-color: var(--md-bg-primary);\r\n}\r\n// .\r\n.NewFeed_col-center{\r\n    width: 500px;\r\n}\r\n// .\r\n.NewFeed_col-right{\r\n    width: 350px;\r\n    background-color: var(--md-bg-primary);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/new_feed/_main/NewFeedRes.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/new_feed/_main/NewFeedRes.scss ***!
  \***********************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@media (max-width: 1200px) {\n  .NewFeed_col-right {\n    display: none;\n  }\n}\n@media (max-width: 900px) {\n  .NewFeed_row {\n    justify-content: center;\n  }\n\n  .NewFeed_col-left {\n    display: none;\n  }\n}\n@media (max-width: 500px) {\n  .NewFeed_col-center {\n    width: 96%;\n  }\n}\n@media (max-width: 300px) {\n  .NewFeed_contain {\n    padding: 0;\n  }\n\n  .NewFeed_col-center {\n    width: 100%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/pages/new_feed/_main/NewFeedRes.scss"],"names":[],"mappings":"AACA;EAEI;IACI,aAAA;EADN;AACF;AAIA;EACI;IACI,uBAAA;EAFN;;EAKE;IACI,aAAA;EAFN;AACF;AAKA;EACI;IACI,UAAA;EAHN;AACF;AAMA;EACI;IACI,UAAA;EAJN;;EAOE;IACI,WAAA;EAJN;AACF","sourcesContent":["\r\n@media (max-width: 1200px) {\r\n    // .\r\n    .NewFeed_col-right {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n    .NewFeed_row {\r\n        justify-content: center;\r\n    }\r\n    // .\r\n    .NewFeed_col-left {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n    .NewFeed_col-center {\r\n        width: 96%;\r\n    }\r\n}\r\n\r\n@media (max-width: 300px) {\r\n    .NewFeed_contain{\r\n        padding: 0;\r\n    }\r\n\r\n    .NewFeed_col-center {\r\n        width: 100%;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/new_feed/search/NewFeedSearch.scss":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/new_feed/search/NewFeedSearch.scss ***!
  \***************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".NewFeedSearch {\n  padding: 0.75rem 0 0.75rem 5px;\n  width: 20rem;\n  max-width: calc(100% - 5px);\n}", "",{"version":3,"sources":["webpack://./src/pages/new_feed/search/NewFeedSearch.scss"],"names":[],"mappings":"AACA;EACI,8BAAA;EACA,YAAA;EACA,2BAAA;AAAJ","sourcesContent":["\r\n.NewFeedSearch{\r\n    padding: 0.75rem 0 0.75rem 5px;\r\n    width: 20rem;\r\n    max-width: calc(100% - 5px);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/new_feed/_main/NewFeed.scss":
/*!***********************************************!*\
  !*** ./src/pages/new_feed/_main/NewFeed.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_NewFeed_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./NewFeed.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/new_feed/_main/NewFeed.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_NewFeed_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_NewFeed_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/new_feed/_main/NewFeedRes.scss":
/*!**************************************************!*\
  !*** ./src/pages/new_feed/_main/NewFeedRes.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_NewFeedRes_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./NewFeedRes.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/new_feed/_main/NewFeedRes.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_NewFeedRes_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_NewFeedRes_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/new_feed/search/NewFeedSearch.scss":
/*!******************************************************!*\
  !*** ./src/pages/new_feed/search/NewFeedSearch.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_NewFeedSearch_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./NewFeedSearch.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/new_feed/search/NewFeedSearch.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_NewFeedSearch_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_NewFeedSearch_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_new_feed__main_NewFeed_js.js.map