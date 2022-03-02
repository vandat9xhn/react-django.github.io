(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_city_street_pages__add_new_city__main_AddNewCity_js"],{

/***/ "./src/pages/city_street/pages/_add_new_city/_main/AddNewCity.js":
/*!***********************************************************************!*\
  !*** ./src/pages/city_street/pages/_add_new_city/_main/AddNewCity.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _API = __webpack_require__(/*! ../../../../../api/api_django/api01/API01 */ "./src/api/api_django/api01/API01.js");

var _UseScreenFetching = __webpack_require__(/*! ../../../../../_hooks/UseScreenFetching */ "./src/_hooks/UseScreenFetching.js");

var _makeFormData = __webpack_require__(/*! ../../../../../_some_function/makeFormData */ "./src/_some_function/makeFormData.js");

var _makeFormData2 = _interopRequireDefault(_makeFormData);

var _CityInitial = __webpack_require__(/*! ../../../../../_initial/city/CityInitial */ "./src/_initial/city/CityInitial.js");

var _CityForm = __webpack_require__(/*! ../../../component/form_yup/_main/CityForm */ "./src/pages/city_street/component/form_yup/_main/CityForm.js");

var _CityForm2 = _interopRequireDefault(_CityForm);

__webpack_require__(/*! ./AddNewCity.scss */ "./src/pages/city_street/pages/_add_new_city/_main/AddNewCity.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//

// 

// 

//

// 

//


//
function AddNewCity() {

    // 
    var handleSubmit = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
            var city, street, file, bg_color, formData;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            city = data.city, street = data.street, file = data.file, bg_color = data.bg_color;
                            formData = (0, _makeFormData2.default)({
                                city: city,
                                street: street,
                                image: file,
                                bg_color: bg_color,
                                profile_model: 1
                            });
                            _context.next = 5;
                            return handleScreenFetching(function () {
                                return (0, _API.API_City_C)(formData);
                            });

                        case 5:

                            use_history.push('/city-street');
                            _context.next = 11;
                            break;

                        case 8:
                            _context.prev = 8;
                            _context.t0 = _context['catch'](0);

                            console.log(_context.t0);

                        case 11:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[0, 8]]);
        }));

        return function handleSubmit(_x) {
            return _ref.apply(this, arguments);
        };
    }();

    //


    // 
    var use_history = (0, _reactRouterDom.useHistory)();

    var handleScreenFetching = (0, _UseScreenFetching.useScreenFetching)();

    //
    (0, _react.useEffect)(function () {
        document.title = 'Add new city';
    }, []);return _react2.default.createElement(
        'div',
        { className: 'AddNewCity' },
        _react2.default.createElement(
            'h3',
            { className: 'font-500 text-align-center' },
            'Let\'s create a post about your city now!'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_CityForm2.default, {
                initialValues: _CityInitial.initialValues,
                handleSubmit: handleSubmit
            })
        )
    );
}

exports.default = AddNewCity;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/city_street/pages/_add_new_city/_main/AddNewCity.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/city_street/pages/_add_new_city/_main/AddNewCity.scss ***!
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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".AddNewCity {\n  padding: 1rem 0;\n}", "",{"version":3,"sources":["webpack://./src/pages/city_street/pages/_add_new_city/_main/AddNewCity.scss"],"names":[],"mappings":"AAEA;EACI,eAAA;AADJ","sourcesContent":["\r\n//\r\n.AddNewCity{\r\n    padding: 1rem 0;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/city_street/pages/_add_new_city/_main/AddNewCity.scss":
/*!*************************************************************************!*\
  !*** ./src/pages/city_street/pages/_add_new_city/_main/AddNewCity.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_AddNewCity_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./AddNewCity.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/city_street/pages/_add_new_city/_main/AddNewCity.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_AddNewCity_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_AddNewCity_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_city_street_pages__add_new_city__main_AddNewCity_js.js.map