(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src__handle_api_fb_group_notifications_js-src_pages_group_pc__components_notice_list_GroupNot-9bc432"],{

/***/ "./src/_default/fb_group/notifications.js":
/*!************************************************!*\
  !*** ./src/_default/fb_group/notifications.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default_fb_group_notice_arr = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _default_bool = __webpack_require__(/*! ../_common/default_bool */ "./src/_default/_common/default_bool.js");

var _default_id = __webpack_require__(/*! ../_common/default_id */ "./src/_default/_common/default_id.js");

var _default_user = __webpack_require__(/*! ../_common/default_user */ "./src/_default/_common/default_user.js");

var _getDefaultArr = __webpack_require__(/*! ../_common/getDefaultArr */ "./src/_default/_common/getDefaultArr.js");

//
var default_fb_group_notice_obj = function default_fb_group_notice_obj() {
    return _extends({
        id: (0, _default_id.getRandomId)()
    }, (0, _default_user.getRandomUser)(), (0, _default_user.getRandomGroup)(), {
        type: 'posted',
        has_seen: (0, _default_bool.getRandomBool)(),
        created_time: new Date().toString()
    });
};

var default_fb_group_notice_arr = exports.default_fb_group_notice_arr = function default_fb_group_notice_arr() {
    return (0, _getDefaultArr.getDefaultArr)(default_fb_group_notice_obj, 4, 10);
};

/***/ }),

/***/ "./src/_handle_api/fb_group/notifications.js":
/*!***************************************************!*\
  !*** ./src/_handle_api/fb_group/notifications.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handle_API_GroupNotice_L = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var handle_API_GroupNotice_L = exports.handle_API_GroupNotice_L = function () {
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
                        return (0, _notifications.API_GroupNotice_L)(_extends({
                            page: 1,
                            size: 20,
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

    return function handle_API_GroupNotice_L(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _notifications = __webpack_require__(/*! ../../api/api_django/fb_group/notifications */ "./src/api/api_django/fb_group/notifications.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/api/api_django/fb_group/notifications.js":
/*!******************************************************!*\
  !*** ./src/api/api_django/fb_group/notifications.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.API_GroupNotice_L = undefined;

var _AxiosDjango = __webpack_require__(/*! ../_axios/AxiosDjango */ "./src/api/api_django/_axios/AxiosDjango.js");

var _AxiosDjango2 = _interopRequireDefault(_AxiosDjango);

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _notifications = __webpack_require__(/*! ../../../_default/fb_group/notifications */ "./src/_default/fb_group/notifications.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 

//
var API_GroupNotice_L = exports.API_GroupNotice_L = function API_GroupNotice_L(params) {
    return (0, _ConstAPI.API_FakeReal)((0, _notifications.default_fb_group_notice_arr)(), function () {
        return (0, _AxiosDjango2.default)({
            url: 'api/facebook/group-notice-l/',
            method: 'GET',
            params: params
        });
    }, params, true);
};
//

/***/ }),

/***/ "./src/pages/group/pc/_components/notice_item/GroupNoticeItem.js":
/*!***********************************************************************!*\
  !*** ./src/pages/group/pc/_components/notice_item/GroupNoticeItem.js ***!
  \***********************************************************************/
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

var _UnitTime = __webpack_require__(/*! ../../../../../_some_function/UnitTime */ "./src/_some_function/UnitTime.js");

var _UnitTime2 = _interopRequireDefault(_UnitTime);

__webpack_require__(/*! ./GroupNoticeItem.scss */ "./src/pages/group/pc/_components/notice_item/GroupNoticeItem.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
GroupNoticeItem.propTypes = {};

//

// 
function GroupNoticeItem(_ref) {
    var item = _ref.item;

    //
    var id = item.id,
        user = item.user,
        group_obj = item.group_obj,
        notice_type = item.notice_type,
        has_seen = item.has_seen,
        created_time = item.created_time;

    //

    return _react2.default.createElement(
        _reactRouterDom.Link,
        {
            className: 'GroupNoticeItem display-block padding-8px brs-6px hv-bg-fb ' + (has_seen ? 'text-secondary' : 'color-inherit'),
            to: '/group/' + group_obj.id + '?post=' + id
        },
        _react2.default.createElement(
            'div',
            { className: 'display-flex align-items-center' },
            _react2.default.createElement('img', {
                className: 'flex-shrink-0 brs-50 border-blur object-fit-cover',
                src: user.picture,
                alt: '',
                width: '60',
                height: '60'
            }),
            _react2.default.createElement(
                'div',
                { className: 'flex-grow-1 overflow-hidden margin-left-12px' },
                _react2.default.createElement(
                    'div',
                    { className: 'text-nowrap' },
                    _react2.default.createElement(
                        'span',
                        { className: 'font-600' },
                        user.first_name,
                        ' ',
                        user.last_name
                    ),
                    _react2.default.createElement(
                        'span',
                        null,
                        ' posted in '
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'font-600' },
                        group_obj.name
                    )
                ),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'line-16px font-13px ' + (has_seen ? '' : 'text-blue')
                    },
                    _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement('span', {
                            className: 'inline-block padding-4px brs-50 ' + (has_seen ? 'bg-ccc' : 'bg-current')
                        }),
                        _react2.default.createElement(
                            'span',
                            { className: 'margin-left-5px' },
                            (0, _UnitTime2.default)(new Date() - new Date(created_time), '1min'),
                            ' ',
                            'ago'
                        )
                    )
                )
            )
        )
    );
}

exports.default = GroupNoticeItem;

/***/ }),

/***/ "./src/pages/group/pc/_components/notice_list/GroupNoticeList.js":
/*!***********************************************************************!*\
  !*** ./src/pages/group/pc/_components/notice_list/GroupNoticeList.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GroupNoticeItem = __webpack_require__(/*! ../notice_item/GroupNoticeItem */ "./src/pages/group/pc/_components/notice_item/GroupNoticeItem.js");

var _GroupNoticeItem2 = _interopRequireDefault(_GroupNoticeItem);

__webpack_require__(/*! ./GroupNoticeList.scss */ "./src/pages/group/pc/_components/notice_list/GroupNoticeList.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
GroupNoticeList.propTypes = {};

//

// 
function GroupNoticeList(_ref) {
    var title = _ref.title,
        notice_arr = _ref.notice_arr;

    //
    if (notice_arr.length == 0) {
        return null;
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupNoticeList padding-y-20px brs-8px-pc bg-primary box-shadow-1' },
        _react2.default.createElement(
            'h2',
            { className: 'GroupNoticeList_title margin-bottom-5px padding-x-16px font-600 font-20px' },
            title
        ),
        _react2.default.createElement(
            'div',
            { className: 'GroupNoticeList_contain padding-x-8px' },
            notice_arr.map(function (item, ix) {
                return _react2.default.createElement(
                    'div',
                    { key: item.id },
                    _react2.default.createElement(_GroupNoticeItem2.default, { item: item })
                );
            })
        )
    );
}

exports.default = GroupNoticeList;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/pc/_components/notice_item/GroupNoticeItem.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/pc/_components/notice_item/GroupNoticeItem.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".device-mobile .GroupNoticeItem img {\n  width: 30px;\n  height: 30px;\n}", "",{"version":3,"sources":["webpack://./src/pages/group/pc/_components/notice_item/GroupNoticeItem.scss"],"names":[],"mappings":"AAIQ;EACI,WAAA;EACA,YAAA;AAHZ","sourcesContent":["// -----\r\n\r\n.device-mobile{\r\n    .GroupNoticeItem{\r\n        img{\r\n            width: 30px;\r\n            height: 30px;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/pc/_components/notice_list/GroupNoticeList.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/pc/_components/notice_list/GroupNoticeList.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".device-mobile .GroupNoticeList {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.device-mobile .GroupNoticeList_title {\n  padding-left: 8px;\n  padding-right: 8px;\n  font-size: 18px;\n}\n.device-mobile .GroupNoticeList_contain {\n  padding: 0;\n}", "",{"version":3,"sources":["webpack://./src/pages/group/pc/_components/notice_list/GroupNoticeList.scss"],"names":[],"mappings":"AAGI;EACI,gBAAA;EACA,mBAAA;AAFR;AAKI;EACI,iBAAA;EACA,kBAAA;EAEA,eAAA;AAJR;AAOI;EACI,UAAA;AALR","sourcesContent":["// ------\r\n\r\n.device-mobile{\r\n    .GroupNoticeList{\r\n        padding-top: 8px;\r\n        padding-bottom: 8px;\r\n    }\r\n\r\n    .GroupNoticeList_title{\r\n        padding-left: 8px;\r\n        padding-right: 8px;\r\n\r\n        font-size: 18px;\r\n    }\r\n\r\n    .GroupNoticeList_contain{\r\n        padding: 0;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/group/pc/_components/notice_item/GroupNoticeItem.scss":
/*!*************************************************************************!*\
  !*** ./src/pages/group/pc/_components/notice_item/GroupNoticeItem.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupNoticeItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./GroupNoticeItem.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/pc/_components/notice_item/GroupNoticeItem.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupNoticeItem_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupNoticeItem_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/group/pc/_components/notice_list/GroupNoticeList.scss":
/*!*************************************************************************!*\
  !*** ./src/pages/group/pc/_components/notice_list/GroupNoticeList.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupNoticeList_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./GroupNoticeList.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/pc/_components/notice_list/GroupNoticeList.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupNoticeList_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupNoticeList_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src__handle_api_fb_group_notifications_js-src_pages_group_pc__components_notice_list_GroupNot-9bc432.js.map