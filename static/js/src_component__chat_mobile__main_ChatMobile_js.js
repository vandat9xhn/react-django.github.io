(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_component__chat_mobile__main_ChatMobile_js"],{

/***/ "./src/_some_function/GetIdSlug.js":
/*!*****************************************!*\
  !*** ./src/_some_function/GetIdSlug.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.GetIdSlug = GetIdSlug;

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

//
function GetIdSlug() {
    var is_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var id_slug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';

    try {
        var params = (0, _reactRouterDom.useParams)();

        return is_id ? +params[id_slug] : params[id_slug];
    } catch (err) {
        if (is_id) {
            return parseInt(location.pathname.split('/').slice(-1)[0]);
        }

        return location.pathname.split('/').slice(-1)[0];
    }
}

/***/ }),

/***/ "./src/component/_chat/mobile/_main/ChatMobile.js":
/*!********************************************************!*\
  !*** ./src/component/_chat/mobile/_main/ChatMobile.js ***!
  \********************************************************/
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

// 

//

//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AppHiddenTemp = __webpack_require__(/*! ../../../../_some_function/AppHiddenTemp */ "./src/_some_function/AppHiddenTemp.js");

var _GetIdSlug = __webpack_require__(/*! ../../../../_some_function/GetIdSlug */ "./src/_some_function/GetIdSlug.js");

var _getRoomChatWs = __webpack_require__(/*! ../../_func/getRoomChatWs */ "./src/component/_chat/_func/getRoomChatWs.js");

var _makeNewChat = __webpack_require__(/*! ../../_func/makeNewChat */ "./src/component/_chat/_func/makeNewChat.js");

var _ChatInitial = __webpack_require__(/*! ../../../../_initial/chat/ChatInitial */ "./src/_initial/chat/ChatInitial.js");

var _ChatHandleAPI = __webpack_require__(/*! ../../../../_handle_api/chat/ChatHandleAPI */ "./src/_handle_api/chat/ChatHandleAPI.js");

var _UseScreenFetching = __webpack_require__(/*! ../../../../_hooks/UseScreenFetching */ "./src/_hooks/UseScreenFetching.js");

var _ChatShow = __webpack_require__(/*! ../../chat_window/show/_main/ChatShow */ "./src/component/_chat/chat_window/show/_main/ChatShow.js");

var _ChatShow2 = _interopRequireDefault(_ChatShow);

__webpack_require__(/*! ./ChatMobile.scss */ "./src/component/_chat/mobile/_main/ChatMobile.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
ChatMobile.propTypes = {};

//
function ChatMobile(props) {
    var _this = this;

    //
    var _useState = (0, _react.useState)({
        room_chat: (0, _GetIdSlug.GetIdSlug)(),
        chat_item: (0, _ChatInitial.initial_chat_item)(),
        ws: null,
        has_fetched: false
    }),
        _useState2 = _slicedToArray(_useState, 2),
        chat_obj = _useState2[0],
        setChatObj = _useState2[1];

    var room_chat = chat_obj.room_chat,
        chat_item = chat_obj.chat_item,
        ws = chat_obj.ws,
        has_fetched = chat_obj.has_fetched;

    //

    var _useParams = (0, _reactRouterDom.useParams)(),
        id = _useParams.id;

    //


    var handleScreenFetching = (0, _UseScreenFetching.useScreenFetching)();

    //
    (0, _react.useEffect)(function () {
        openRoomChat(room_chat);
    }, [id]);

    //
    var openRoomChat = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(new_room_chat) {
            var data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return handleScreenFetching(function () {
                                return (0, _ChatHandleAPI.handle_API_ChatZoom_R)(new_room_chat);
                            });

                        case 2:
                            data = _context.sent;


                            setChatObj(_extends({}, chat_obj, {
                                room_chat: new_room_chat,
                                chat_item: (0, _makeNewChat.makeNewChat)(data),
                                ws: (0, _getRoomChatWs.getRoomChatWebsocket)(new_room_chat),
                                has_fetched: true
                            }));

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }));

        return function openRoomChat(_x) {
            return _ref.apply(this, arguments);
        };
    }();

    //
    if (!has_fetched) {
        return null;
    }

    //
    return _react2.default.createElement(
        'div',
        { key: id, className: 'ChatMobile' },
        _react2.default.createElement(_ChatShow2.default, {
            chat_ix: 0,
            is_two_chat: false
            //
            , index: 0,
            ws: ws,
            scroll_y: 0,
            room_chat: room_chat,
            chat_item: chat_item
        })
    );
}

exports.default = ChatMobile;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/_chat/mobile/_main/ChatMobile.scss":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/_chat/mobile/_main/ChatMobile.scss ***!
  \*******************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".ChatMobile .ChatShow_contain {\n  padding-top: 48px;\n}\n.ChatMobile .ChatShow_head {\n  position: fixed;\n  width: 100%;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  background: var(--md-bg-primary);\n}", "",{"version":3,"sources":["webpack://./src/component/_chat/mobile/_main/ChatMobile.scss"],"names":[],"mappings":"AACI;EACI,iBAAA;AAAR;AAGI;EACI,eAAA;EACA,WAAA;EACA,OAAA;EACA,MAAA;EACA,UAAA;EAEA,gCAAA;AAFR","sourcesContent":[".ChatMobile {\r\n    .ChatShow_contain {\r\n        padding-top: 48px;\r\n    }\r\n\r\n    .ChatShow_head {\r\n        position: fixed;\r\n        width: 100%;\r\n        left: 0;\r\n        top: 0;\r\n        z-index: 1;\r\n\r\n        background: var(--md-bg-primary);\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/component/_chat/mobile/_main/ChatMobile.scss":
/*!**********************************************************!*\
  !*** ./src/component/_chat/mobile/_main/ChatMobile.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ChatMobile_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ChatMobile.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/_chat/mobile/_main/ChatMobile.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ChatMobile_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ChatMobile_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_component__chat_mobile__main_ChatMobile_js.js.map