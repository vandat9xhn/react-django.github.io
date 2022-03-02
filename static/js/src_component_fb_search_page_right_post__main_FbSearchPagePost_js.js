(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_component_fb_search_page_right_post__main_FbSearchPagePost_js"],{

/***/ "./src/_hooks/search/useObserverMoreSearch.js":
/*!****************************************************!*\
  !*** ./src/_hooks/search/useObserverMoreSearch.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
//


exports.useObserverMoreSearch = useObserverMoreSearch;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _useObserverShowMore = __webpack_require__(/*! ../useObserverShowMore */ "./src/_hooks/useObserverShowMore.js");

//
function useObserverMoreSearch(_ref) {
    var handle_API_L = _ref.handle_API_L;

    //
    var ref_fake_elm = (0, _react.useRef)(null);

    //
    var data = (0, _useObserverShowMore.useObserverShowMore)({
        handle_API_L: handle_API_L
    });

    //
    (0, _react.useEffect)(function () {
        data.refreshData_API();
    }, [location.search]);

    //
    (0, _react.useEffect)(function () {
        data.observerShowMore({
            fake_elm_end: ref_fake_elm.current,
            rootMargin: '0px 0px 250px 0px',
            way_scroll: 'to_bottom',
            margin: 250
        });
    }, []);

    //
    return _extends({ ref_fake_elm: ref_fake_elm }, data);
}

/***/ }),

/***/ "./src/component/fb_search/page/right/post/_main/FbSearchPagePost.js":
/*!***************************************************************************!*\
  !*** ./src/component/fb_search/page/right/post/_main/FbSearchPagePost.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ParseLocationSearch = __webpack_require__(/*! ../../../../../../_some_function/ParseLocationSearch */ "./src/_some_function/ParseLocationSearch.js");

var _UserPost = __webpack_require__(/*! ../../../../../../api/api_django/user/user_post/UserPost */ "./src/api/api_django/user/user_post/UserPost.js");

var _useObserverMoreSearch = __webpack_require__(/*! ../../../../../../_hooks/search/useObserverMoreSearch */ "./src/_hooks/search/useObserverMoreSearch.js");

var _FbScPagePostItem = __webpack_require__(/*! ../item/_main/FbScPagePostItem */ "./src/component/fb_search/page/right/post/item/_main/FbScPagePostItem.js");

var _FbScPagePostItem2 = _interopRequireDefault(_FbScPagePostItem);

var _FbSearchPageLayout = __webpack_require__(/*! ../../../_components/_layout/FbSearchPageLayout */ "./src/component/fb_search/page/_components/_layout/FbSearchPageLayout.js");

var _FbSearchPageLayout2 = _interopRequireDefault(_FbSearchPageLayout);

__webpack_require__(/*! ./FbSearchPagePost.scss */ "./src/component/fb_search/page/right/post/_main/FbSearchPagePost.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//

//

//

//

//


//
FbSearchPagePost.propTypes = {};

//
function FbSearchPagePost(props) {

    // ------

    //
    var handle_API_PostSearch_L = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(c_count) {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _UserPost.API_Post_L)(_extends({
                                page: 1,
                                size: 10,
                                c_count: c_count
                            }, (0, _ParseLocationSearch.ParseLocationSearch)()));

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

        return function handle_API_PostSearch_L(_x) {
            return _ref.apply(this, arguments);
        };
    }();

    //


    //
    var _useObserverMoreSearc = (0, _useObserverMoreSearch.useObserverMoreSearch)({
        handle_API_L: handle_API_PostSearch_L
    }),
        ref_fake_elm = _useObserverMoreSearc.ref_fake_elm,
        data_state = _useObserverMoreSearc.data_state,
        data_count = _useObserverMoreSearc.data_count;

    var data_arr = data_state.data_arr,
        has_fetched = data_state.has_fetched;
    return _react2.default.createElement(
        'div',
        { className: 'FbSearchPagePost' },
        _react2.default.createElement(_FbSearchPageLayout2.default, {
            right_elm: _react2.default.createElement(
                'div',
                { className: 'fb-search-page-right-contain display-flex-center' },
                _react2.default.createElement(
                    'div',
                    { className: 'w-680px' },
                    _react2.default.createElement(
                        'div',
                        null,
                        data_arr.map(function (post, ix) {
                            return _react2.default.createElement(
                                'div',
                                {
                                    key: post.id,
                                    className: 'fb-search-page-right-item'
                                },
                                _react2.default.createElement(_FbScPagePostItem2.default, { post: post })
                            );
                        })
                    ),
                    _react2.default.createElement('div', {
                        ref: ref_fake_elm,
                        className: 'padding-1px'
                    })
                )
            ),
            no_result: has_fetched && data_count.current == 0,
            title: 'Posts'
        })
    );
}

exports.default = FbSearchPagePost;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/fb_search/page/right/post/_main/FbSearchPagePost.scss":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/fb_search/page/right/post/_main/FbSearchPagePost.scss ***!
  \**************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/component/fb_search/page/right/post/_main/FbSearchPagePost.scss":
/*!*****************************************************************************!*\
  !*** ./src/component/fb_search/page/right/post/_main/FbSearchPagePost.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbSearchPagePost_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./FbSearchPagePost.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/fb_search/page/right/post/_main/FbSearchPagePost.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbSearchPagePost_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbSearchPagePost_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_component_fb_search_page_right_post__main_FbSearchPagePost_js.js.map