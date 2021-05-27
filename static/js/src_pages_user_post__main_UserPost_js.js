(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_user_post__main_UserPost_js"],{

/***/ "./src/pages/user_post/_main/UserPost.js":
/*!***********************************************!*\
  !*** ./src/pages/user_post/_main/UserPost.js ***!
  \***********************************************/
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

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _UserPost = __webpack_require__(/*! ../../../api/api_django/user/user_post/UserPost */ "./src/api/api_django/user/user_post/UserPost.js");

var _useMounted = __webpack_require__(/*! ../../../_custom_hooks/useMounted */ "./src/_custom_hooks/useMounted.js");

var _PostsWs = __webpack_require__(/*! ../../../component/posts/_posts/_main/PostsWs */ "./src/component/posts/_posts/_main/PostsWs.js");

var _PostsWs2 = _interopRequireDefault(_PostsWs);

__webpack_require__(/*! ./UserPost.scss */ "./src/pages/user_post/_main/UserPost.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
UserPost.propTypes = {};

//
function UserPost(props) {

    //
    var getData_API_Post = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _UserPost.API_Post_RD)(1, 'GET');

                        case 2:
                            res = _context.sent;

                            mounted && setPostState({
                                post: [res.data],
                                has_fetched: true
                            });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function getData_API_Post() {
            return _ref.apply(this, arguments);
        };
    }();

    //


    var _useState = (0, _react.useState)({
        post: [],
        has_fetched: false
    }),
        _useState2 = _slicedToArray(_useState, 2),
        post_state = _useState2[0],
        setPostState = _useState2[1];

    var post = post_state.post,
        has_fetched = post_state.has_fetched;

    //

    var mounted = (0, _useMounted.useMounted)();

    //
    (0, _react.useEffect)(function () {
        getData_API_Post();
    }, []);return _react2.default.createElement(
        'div',
        { className: 'UserPost' },
        _react2.default.createElement(
            'div',
            { className: 'UserPost_contain bg-fb' },
            _react2.default.createElement(
                'div',
                { className: 'UserPost_posts' },
                _react2.default.createElement(_PostsWs2.default, {
                    posts: post,
                    has_add_new: false,
                    has_fetched: has_fetched,
                    is_fetching: false
                })
            )
        )
    );
}

exports.default = UserPost;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_post/_main/UserPost.scss":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_post/_main/UserPost.scss ***!
  \**********************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".UserPost_contain {\n  padding-top: 1rem;\n}\n\n@media (max-width: 330px) {\n  .UserPost_contain {\n    padding-top: 0;\n  }\n}", "",{"version":3,"sources":["webpack://./src/pages/user_post/_main/UserPost.scss"],"names":[],"mappings":"AACA;EACI,iBAAA;AAAJ;;AAKA;EACI;IACI,cAAA;EAFN;AACF","sourcesContent":["\r\n.UserPost_contain{\r\n    padding-top: 1rem;\r\n}\r\n\r\n\r\n// \r\n@media (max-width: 330px) {\r\n    .UserPost_contain{\r\n        padding-top: 0;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/user_post/_main/UserPost.scss":
/*!*************************************************!*\
  !*** ./src/pages/user_post/_main/UserPost.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_UserPost_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./UserPost.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_post/_main/UserPost.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_UserPost_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_UserPost_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_user_post__main_UserPost_js.js.map