(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src__handle_api_post_HandleAPIPost_js-src__handle_api_post_cu_user_tag_js-src__some_function_-94dbb5"],{

/***/ "./src/_data/post/actions.js":
/*!***********************************!*\
  !*** ./src/_data/post/actions.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
//
var data_fb_post_action_obj = exports.data_fb_post_action_obj = {
    save: {
        name: 'save',
        title: 'Save Post',
        info: 'Add this to your save items.'
    },

    //
    history: {
        name: 'history',
        title: 'View edit history',
        info: ''
    },

    //
    notification_off: {
        name: 'notification_off',
        title: 'Turn off notification for post',
        info: ''
    },
    notification_on: {
        name: 'notification_on',
        title: 'Turn on notification for post',
        info: ''
    },

    unfollow: {
        name: 'unfollow',
        title: 'Unfollow',
        info: 'Stop seeing posts from this Page.'
    },

    hide_post: {
        name: 'hide_post',
        title: 'Hide post',
        info: 'See fewer posts like this'
    },

    support_report: {
        name: 'support_report',
        title: 'Find support or report post.',
        info: "I'm concerned about this post."
    }
};

//
var data_fb_user_post_action_obj = exports.data_fb_user_post_action_obj = {
    pin: {
        name: 'pin',
        title: 'Pin post',
        info: ''
    },

    edit: {
        name: 'edit',
        title: 'Edit post',
        info: ''
    },

    edit_audience: {
        name: 'edit_audience',
        title: 'Edit audience',
        info: ''
    },

    translation_off: {
        name: 'translation_off',
        title: 'Turn off translation for post',
        info: ''
    },
    translation_on: {
        name: 'translation_on',
        title: 'Turn on translation for post',
        info: ''
    },

    remove: {
        name: 'remove',
        title: 'Move to recycle bin',
        info: ''
    },

    hide: {
        name: 'hide',
        title: 'Hide from profile',
        info: ''
    }
};

//
var data_fb_page_post_action_obj = exports.data_fb_page_post_action_obj = {};

//
var data_fb_group_post_action_obj = exports.data_fb_group_post_action_obj = {
    report_to_admins: {
        name: 'report_to_admins',
        title: 'Report post to group admins',
        info: ''
    }
};

/***/ }),

/***/ "./src/_default/post/actions.js":
/*!**************************************!*\
  !*** ./src/_default/post/actions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default_post_action_arr = undefined;

var _actions = __webpack_require__(/*! ../../_data/post/actions */ "./src/_data/post/actions.js");

var _default_bool = __webpack_require__(/*! ../_common/default_bool */ "./src/_default/_common/default_bool.js");

//
var default_post_action_arr = exports.default_post_action_arr = function default_post_action_arr(_ref) {
    var _ref$type = _ref.type,
        type = _ref$type === undefined ? '' : _ref$type;

    if (type == 'page') {
        return default_page_post_action_list_arr();
    }

    if (type == 'group') {
        return default_group_post_action_list_arr();
    }

    if ((0, _default_bool.getRandomBool)()) {
        return default_user_post_action_list_arr();
    }

    return default_friend_post_action_list_arr();
};

//
var default_user_post_action_list_arr = function default_user_post_action_list_arr() {
    return [[_actions.data_fb_user_post_action_obj.pin, _actions.data_fb_post_action_obj.save], [_actions.data_fb_post_action_obj.history, _actions.data_fb_user_post_action_obj.edit, _actions.data_fb_user_post_action_obj.edit_audience, _actions.data_fb_post_action_obj.notification_off, _actions.data_fb_user_post_action_obj.translation_off], [_actions.data_fb_user_post_action_obj.remove]];
};

//
var default_friend_post_action_list_arr = function default_friend_post_action_list_arr() {
    return [[_actions.data_fb_post_action_obj.save], [_actions.data_fb_post_action_obj.history, _actions.data_fb_post_action_obj.notification_on], [_actions.data_fb_post_action_obj.hide_post,
    // data_fb_post_action_obj.unfollow,
    _actions.data_fb_post_action_obj.support_report]];
};

//
var default_page_post_action_list_arr = function default_page_post_action_list_arr() {
    return [[_actions.data_fb_post_action_obj.save], [_actions.data_fb_post_action_obj.history, _actions.data_fb_post_action_obj.notification_on], [_actions.data_fb_post_action_obj.hide_post, _actions.data_fb_post_action_obj.unfollow, _actions.data_fb_post_action_obj.support_report]];
};

//
var default_group_post_action_list_arr = function default_group_post_action_list_arr() {
    return [[_actions.data_fb_post_action_obj.save], [_actions.data_fb_post_action_obj.history, _actions.data_fb_post_action_obj.notification_on], [_actions.data_fb_group_post_action_obj.report_to_admins, _actions.data_fb_post_action_obj.hide_post,
    // data_fb_post_action_obj.unfollow,
    _actions.data_fb_post_action_obj.support_report]];
};

/***/ }),

/***/ "./src/_handle_api/post/HandleAPIPost.js":
/*!***********************************************!*\
  !*** ./src/_handle_api/post/HandleAPIPost.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handle_API_ContentMoreHistory_R = exports.handle_API_History_L = exports.handle_API_Share_L = exports.handle_API_PostReactedInfo_L = exports.handle_API_Like_L = exports.handle_API_Post_U = exports.handle_API_MoreContent_R = exports.handle_API_Post_C = exports.handle_API_PostUpdate_R = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var handle_API_PostUpdate_R = exports.handle_API_PostUpdate_R = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var post_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _UserPost.API_Post_RD)(post_id, 'GET', _PostParams.params_post_update);

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

    return function handle_API_PostUpdate_R() {
        return _ref.apply(this, arguments);
    };
}();

var handle_API_Post_C = exports.handle_API_Post_C = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
        var res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return (0, _UserPost.API_Post_C)((0, _makeFormData2.default)(data));

                    case 2:
                        res = _context2.sent;
                        return _context2.abrupt('return', res.data);

                    case 4:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function handle_API_Post_C(_x3) {
        return _ref2.apply(this, arguments);
    };
}();

var handle_API_MoreContent_R = exports.handle_API_MoreContent_R = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var post_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var res, content_more;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return (0, _UserPost.API_PostMoreContent_R)(post_id, _PostParams.params_more_content_post);

                    case 2:
                        res = _context3.sent;
                        content_more = res.data.content_obj.content_more;
                        return _context3.abrupt('return', content_more);

                    case 5:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function handle_API_MoreContent_R() {
        return _ref3.apply(this, arguments);
    };
}();

var handle_API_Post_U = exports.handle_API_Post_U = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var post_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var data = arguments[1];
        var res;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return (0, _UserPost.API_Post_U)(post_id, (0, _makeFormData2.default)(data));

                    case 2:
                        res = _context4.sent;
                        return _context4.abrupt('return', res.data);

                    case 4:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function handle_API_Post_U() {
        return _ref4.apply(this, arguments);
    };
}();

var handle_API_Like_L = exports.handle_API_Like_L = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var post_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var c_count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var type_like = arguments[2];
        var res;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.next = 2;
                        return (0, _UserPost.API_PostLike_L)(_extends({}, _PostParams.params_like_post_l, {
                            post_model: post_id,
                            c_count: c_count,
                            type_like: type_like
                        }));

                    case 2:
                        res = _context5.sent;
                        return _context5.abrupt('return', res.data);

                    case 4:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, this);
    }));

    return function handle_API_Like_L() {
        return _ref5.apply(this, arguments);
    };
}();

//


var handle_API_PostReactedInfo_L = exports.handle_API_PostReactedInfo_L = function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref7) {
        var _ref7$id = _ref7.id,
            id = _ref7$id === undefined ? 0 : _ref7$id,
            _ref7$is_vid_pic = _ref7.is_vid_pic,
            is_vid_pic = _ref7$is_vid_pic === undefined ? false : _ref7$is_vid_pic;
        var res;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        _context6.next = 2;
                        return (0, _UserPost.API_PostReactedInfo_L)(_defineProperty({
                            page: 1,
                            size: 6
                        }, is_vid_pic ? 'vid_pic_model' : 'post_model', id), is_vid_pic);

                    case 2:
                        res = _context6.sent;
                        return _context6.abrupt('return', res.data);

                    case 4:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, _callee6, this);
    }));

    return function handle_API_PostReactedInfo_L(_x10) {
        return _ref6.apply(this, arguments);
    };
}();

// export async function handle_API_Like_C(post_id=0) {
//     const res = await API_();
//     return;
// }

var handle_API_Share_L = exports.handle_API_Share_L = function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var post_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var c_count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var res;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        _context7.next = 2;
                        return (0, _UserPost.API_PostShare_L)(_extends({}, _PostParams.params_share_post_l, {
                            post_model: post_id,
                            c_count: c_count
                        }));

                    case 2:
                        res = _context7.sent;
                        return _context7.abrupt('return', res.data);

                    case 4:
                    case 'end':
                        return _context7.stop();
                }
            }
        }, _callee7, this);
    }));

    return function handle_API_Share_L() {
        return _ref8.apply(this, arguments);
    };
}();

// export async function handle_API_Share_C(post_id=0) {
//     const res = await API_();
//     return;
// }

var handle_API_History_L = exports.handle_API_History_L = function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var post_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var c_count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var res;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        _context8.next = 2;
                        return (0, _UserPost.API_PostHistory_L)(_extends({}, _PostParams.params_history_post_l, {
                            post_model: post_id,
                            c_count: c_count
                        }));

                    case 2:
                        res = _context8.sent;
                        return _context8.abrupt('return', res.data);

                    case 4:
                    case 'end':
                        return _context8.stop();
                }
            }
        }, _callee8, this);
    }));

    return function handle_API_History_L() {
        return _ref9.apply(this, arguments);
    };
}();

var handle_API_ContentMoreHistory_R = exports.handle_API_ContentMoreHistory_R = function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        var his_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var res, content_more;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
                switch (_context9.prev = _context9.next) {
                    case 0:
                        _context9.next = 2;
                        return (0, _UserPost.API_PostHistory_R)(_extends({}, _PostParams.params_more_content_history_post, {
                            his_model: his_id
                        }));

                    case 2:
                        res = _context9.sent;
                        content_more = res.data.content_obj.content_more;
                        return _context9.abrupt('return', content_more);

                    case 5:
                    case 'end':
                        return _context9.stop();
                }
            }
        }, _callee9, this);
    }));

    return function handle_API_ContentMoreHistory_R() {
        return _ref10.apply(this, arguments);
    };
}();

exports.handle_API_Post_D = handle_API_Post_D;
exports.handle_API_Permission_U = handle_API_Permission_U;

var _UserPost = __webpack_require__(/*! ../../api/api_django/user/user_post/UserPost */ "./src/api/api_django/user/user_post/UserPost.js");

var _makeFormData = __webpack_require__(/*! ../../_some_function/makeFormData */ "./src/_some_function/makeFormData.js");

var _makeFormData2 = _interopRequireDefault(_makeFormData);

var _PostParams = __webpack_require__(/*! ../../_params/post/PostParams */ "./src/_params/post/PostParams.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//

//


function handle_API_Post_D() {
    var post_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    return (0, _UserPost.API_Post_RD)(post_id, 'DELETE');
}

function handle_API_Permission_U() {
    var post_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var permission_post = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    return (0, _UserPost.API_Post_U)(post_id, (0, _makeFormData2.default)({
        permission_post: permission_post
    }));
}

/***/ }),

/***/ "./src/_handle_api/post/cu_user_tag.js":
/*!*********************************************!*\
  !*** ./src/_handle_api/post/cu_user_tag.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handle_API_FbUserTagDetail_L = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var handle_API_FbUserTagDetail_L = exports.handle_API_FbUserTagDetail_L = function () {
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
                        return (0, _user_tag.API_FbUserTagDetail_L)({
                            params: _extends({
                                c_count: c_count,
                                page: 1,
                                size: 20
                            }, params)
                        });

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

    return function handle_API_FbUserTagDetail_L(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _user_tag = __webpack_require__(/*! ../../api/api_django/cu_post/user_tag */ "./src/api/api_django/cu_post/user_tag.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/_handle_api/post/post_action.js":
/*!*********************************************!*\
  !*** ./src/_handle_api/post/post_action.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handle_API_PostAction_L = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var handle_API_PostAction_L = exports.handle_API_PostAction_L = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
        var _ref2$params = _ref2.params,
            params = _ref2$params === undefined ? {} : _ref2$params;
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _post_action.API_PostAction_L)({
                            params: _extends({}, params)
                        });

                    case 2:
                        res = _context.sent;
                        return _context.abrupt("return", res.data);

                    case 4:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function handle_API_PostAction_L(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _post_action = __webpack_require__(/*! ../../api/api_django/user/user_post/post_action */ "./src/api/api_django/user/user_post/post_action.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/_some_function/getBgColorOrImg.js":
/*!***********************************************!*\
  !*** ./src/_some_function/getBgColorOrImg.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getBgColorOrImg = getBgColorOrImg;
//
function getBgColorOrImg(_ref) {
    var _ref$bg = _ref.bg,
        bg = _ref$bg === undefined ? '' : _ref$bg,
        _ref$is_bg_img = _ref.is_bg_img,
        is_bg_img = _ref$is_bg_img === undefined ? false : _ref$is_bg_img;

    if (is_bg_img) {
        return {
            backgroundImage: 'url(' + bg + ')'
        };
    }

    return {
        backgroundColor: bg
    };
}

/***/ }),

/***/ "./src/_some_function/post/title_reacted.js":
/*!**************************************************!*\
  !*** ./src/_some_function/post/title_reacted.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getPostTitleReacted = getPostTitleReacted;

var _UnitNumber = __webpack_require__(/*! ../UnitNumber */ "./src/_some_function/UnitNumber.js");

//
function getPostTitleReacted(_ref) {
    var reacted_count = _ref.reacted_count,
        user_reacted_ix = _ref.user_reacted_ix;

    return reacted_count > 1 ? user_reacted_ix >= 0 ? 'You and ' + (0, _UnitNumber.UnitNumber)(reacted_count - 1) + ' others' : '' + (0, _UnitNumber.UnitNumber)(reacted_count) : user_reacted_ix >= 0 ? 'You' : '' + (0, _UnitNumber.UnitNumber)(reacted_count);
}

/***/ }),

/***/ "./src/api/api_django/cu_post/user_tag.js":
/*!************************************************!*\
  !*** ./src/api/api_django/cu_post/user_tag.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.API_FbUserTagDetail_L = undefined;

var _AxiosDjango = __webpack_require__(/*! ../_axios/AxiosDjango */ "./src/api/api_django/_axios/AxiosDjango.js");

var _AxiosDjango2 = _interopRequireDefault(_AxiosDjango);

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _cu_user_tag = __webpack_require__(/*! ../../../_default/post/cu_user_tag */ "./src/_default/post/cu_user_tag.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
var API_FbUserTagDetail_L = exports.API_FbUserTagDetail_L = function API_FbUserTagDetail_L(_ref) {
    var _ref$params = _ref.params,
        params = _ref$params === undefined ? {} : _ref$params;
    return (0, _ConstAPI.API_FakeReal)((0, _cu_user_tag.default_post_user_tag_detail_arr)(), function () {
        return (0, _AxiosDjango2.default)({
            url: 'api/facebook/user-tag-detail-l/',
            method: 'GET',
            params: params
        });
    }, params, true);
};
//

/***/ }),

/***/ "./src/api/api_django/user/user_post/post_action.js":
/*!**********************************************************!*\
  !*** ./src/api/api_django/user/user_post/post_action.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.API_PostAction_L = undefined;

var _AxiosDjango = __webpack_require__(/*! ../../_axios/AxiosDjango */ "./src/api/api_django/_axios/AxiosDjango.js");

var _AxiosDjango2 = _interopRequireDefault(_AxiosDjango);

var _ConstAPI = __webpack_require__(/*! ../../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _actions = __webpack_require__(/*! ../../../../_default/post/actions */ "./src/_default/post/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

// 
var API_PostAction_L = exports.API_PostAction_L = function API_PostAction_L(_ref) {
    var _ref$params = _ref.params,
        params = _ref$params === undefined ? {} : _ref$params;
    return (0, _ConstAPI.API_FakeReal)((0, _actions.default_post_action_arr)({ type: params['type'] }), function () {
        return (0, _AxiosDjango2.default)({
            url: 'api/facebook/post-action-l/',
            params: params
        });
    }, params);
};
//

/***/ }),

/***/ "./src/component/_screen/type/user_add/_main/ScreenUserAdd.js":
/*!********************************************************************!*\
  !*** ./src/component/_screen/type/user_add/_main/ScreenUserAdd.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.openScreenUserAdd = openScreenUserAdd;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _useDataShowMore2 = __webpack_require__(/*! ../../../../../_hooks/useDataShowMore */ "./src/_hooks/useDataShowMore.js");

var _UserAdd = __webpack_require__(/*! ../../../../user_add/UserAdd */ "./src/component/user_add/UserAdd.js");

var _UserAdd2 = _interopRequireDefault(_UserAdd);

var _ScreenBlur = __webpack_require__(/*! ../../../components/frame/blur/ScreenBlur */ "./src/component/_screen/components/frame/blur/ScreenBlur.js");

var _ScreenBlur2 = _interopRequireDefault(_ScreenBlur);

var _ScreenBlurHead = __webpack_require__(/*! ../../../components/part/head/ScreenBlurHead */ "./src/component/_screen/components/part/head/ScreenBlurHead.js");

var _ScreenBlurHead2 = _interopRequireDefault(_ScreenBlurHead);

var _ScreenBlurShowMore = __webpack_require__(/*! ../../../components/part/foot/ScreenBlurShowMore */ "./src/component/_screen/components/part/foot/ScreenBlurShowMore.js");

var _ScreenBlurShowMore2 = _interopRequireDefault(_ScreenBlurShowMore);

__webpack_require__(/*! ./ScreenUserAdd.scss */ "./src/component/_screen/type/user_add/_main/ScreenUserAdd.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
function openScreenUserAdd(_ref) {
    var openScreenFloor = _ref.openScreenFloor,
        title = _ref.title,
        _ref$is_center = _ref.is_center,
        is_center = _ref$is_center === undefined ? true : _ref$is_center,
        handle_API_UserAdd_L = _ref.handle_API_UserAdd_L;

    openScreenFloor({
        FloorComponent: ScreenUserAdd,
        title: title,
        is_center: is_center,
        handle_API_UserAdd_L: handle_API_UserAdd_L
    });
}

//

//

//
ScreenUserAdd.propTypes = {};

//
function ScreenUserAdd(_ref2) {
    var title = _ref2.title,
        is_center = _ref2.is_center,
        handle_API_UserAdd_L = _ref2.handle_API_UserAdd_L,
        closeScreen = _ref2.closeScreen;

    //
    var _useDataShowMore = (0, _useDataShowMore2.useDataShowMore)({
        initial_arr: [],
        handle_API_L: handle_API_UserAdd_L
    }),
        data_state = _useDataShowMore.data_state,
        getData_API = _useDataShowMore.getData_API;

    var data_arr = data_state.data_arr,
        count = data_state.count,
        is_fetching = data_state.is_fetching,
        has_fetched = data_state.has_fetched;

    //

    (0, _react.useEffect)(function () {
        getData_API();
    }, []);

    //
    function showMoreUserAdd() {
        getData_API();
    }

    //
    function handleSendAddFriend(friend_id) {
        console.log(friend_id);
    }

    //
    return _react2.default.createElement(
        _ScreenBlur2.default,
        { closeScreen: closeScreen },
        _react2.default.createElement(
            'div',
            { className: 'ScreenUserAdd_contain' },
            _react2.default.createElement(_ScreenBlurHead2.default, {
                is_center: is_center,
                title: title,
                closeScreenBlur: closeScreen
            }),
            _react2.default.createElement(
                'div',
                {
                    className: 'ScreenBlur_body ' + (has_fetched ? '' : 'display-none')
                },
                _react2.default.createElement(
                    'div',
                    { className: 'ScreenBlur_body_contain scroll-thin' },
                    data_arr.map(function (item, ix) {
                        return _react2.default.createElement(_UserAdd2.default, {
                            key: ix,
                            user: item.user,
                            action_name: item.action_name,
                            handleSendAddFriend: handleSendAddFriend
                        });
                    })
                )
            ),
            _react2.default.createElement(_ScreenBlurShowMore2.default, {
                is_show_more: count > data_arr.length,
                is_fetching: is_fetching,
                handleShowMore: showMoreUserAdd
            })
        )
    );
}

exports.default = ScreenUserAdd;

/***/ }),

/***/ "./src/component/posts/_post/head/_components/_layout/PostHeadLayout.js":
/*!******************************************************************************!*\
  !*** ./src/component/posts/_post/head/_components/_layout/PostHeadLayout.js ***!
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

__webpack_require__(/*! ./PostHeadLayout.scss */ "./src/component/posts/_post/head/_components/_layout/PostHeadLayout.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PostHeadLayout.propTypes = {};

//

//
function PostHeadLayout(_ref) {
    var left_elm = _ref.left_elm,
        center_top_elm = _ref.center_top_elm,
        center_bottom_elm = _ref.center_bottom_elm,
        right_elm = _ref.right_elm;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PostHeadLayout padding-10px' },
        _react2.default.createElement(
            'div',
            { className: 'PostHeadLayout_row display-flex' },
            _react2.default.createElement(
                'div',
                { className: 'PostHeadLayout_left' },
                left_elm
            ),
            _react2.default.createElement(
                'div',
                { className: 'PostHeadLayout_center flex-grow-1 padding-x-10px line-20px' },
                _react2.default.createElement(
                    'div',
                    { className: 'PostHeadLayout_center_top' },
                    center_top_elm
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'PostHeadLayout_center_bottom font-13px text-secondary' },
                    center_bottom_elm
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'PostHeadLayout_right' },
                right_elm
            )
        )
    );
}

exports.default = PostHeadLayout;

/***/ }),

/***/ "./src/component/posts/_post/head/_components/action/_main/PostHeadAction.js":
/*!***********************************************************************************!*\
  !*** ./src/component/posts/_post/head/_components/action/_main/PostHeadAction.js ***!
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

var _Constant = __webpack_require__(/*! ../../../../../../../_constant/Constant */ "./src/_constant/Constant.js");

var _post_action = __webpack_require__(/*! ../../../../../../../_handle_api/post/post_action */ "./src/_handle_api/post/post_action.js");

var _ActionsMultiList = __webpack_require__(/*! ../../../../../../actions_multi_list/_main/ActionsMultiList */ "./src/component/actions_multi_list/_main/ActionsMultiList.js");

var _ActionsMultiList2 = _interopRequireDefault(_ActionsMultiList);

__webpack_require__(/*! ./PostHeadAction.scss */ "./src/component/posts/_post/head/_components/action/_main/PostHeadAction.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
PostHeadAction.propTypes = {};

//

//

//
function PostHeadAction(_ref) {
    var post_id = _ref.post_id,
        post_type = _ref.post_type,
        handleAction = _ref.handleAction;

    //
    function handle_API_Action_L() {
        return (0, _post_action.handle_API_PostAction_L)({
            params: { post_id: post_id, type: post_type }
        });
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'PostHeadAction' },
        _react2.default.createElement(_ActionsMultiList2.default, {
            class_action_contain: _Constant.IS_MOBILE ? 'PostHeadAction_list-mb pos-abs bottom-0 left-0 w-100per bg-primary overflow-y-auto scroll-width-0' : 'PostHeadAction_list-pc brs-8px bg-primary box-shadow-fb',
            x_always: 'right'
            //
            , handle_API_L: handle_API_Action_L,
            handleAction: handleAction
        })
    );
}

exports.default = PostHeadAction;

/***/ }),

/***/ "./src/component/posts/_post/head/_components/emoji/PostHeadEmoji.js":
/*!***************************************************************************!*\
  !*** ./src/component/posts/_post/head/_components/emoji/PostHeadEmoji.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PostHeadEmoji.propTypes = {};

//
function PostHeadEmoji(_ref) {
    var emoji_obj = _ref.emoji_obj;

    //
    if (!emoji_obj || !emoji_obj.id) {
        return null;
    }

    //
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            'span',
            { className: 'text-third' },
            emoji_obj.type,
            ' '
        ),
        _react2.default.createElement(
            'span',
            { className: 'text-222' },
            emoji_obj.name
        )
    );
}

exports.default = PostHeadEmoji;

/***/ }),

/***/ "./src/component/posts/_post/head/_components/picture_circle/PostHeadLayoutPictureCircle.js":
/*!**************************************************************************************************!*\
  !*** ./src/component/posts/_post/head/_components/picture_circle/PostHeadLayoutPictureCircle.js ***!
  \**************************************************************************************************/
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

__webpack_require__(/*! ./PostHeadLayoutPictureCircle.scss */ "./src/component/posts/_post/head/_components/picture_circle/PostHeadLayoutPictureCircle.scss");

var _PicNameImg = __webpack_require__(/*! ../../../../../picture_name/_components/img/_main/PicNameImg */ "./src/component/picture_name/_components/img/_main/PicNameImg.js");

var _PicNameImg2 = _interopRequireDefault(_PicNameImg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PostHeadLayoutPictureCircle.propTypes = {};

//
function PostHeadLayoutPictureCircle(_ref) {
    var link_to = _ref.link_to,
        picture = _ref.picture,
        has_new_story = _ref.has_new_story,
        has_seen_story = _ref.has_seen_story;

    //
    return _react2.default.createElement(
        _reactRouterDom.Link,
        {
            className: 'PostHeadLayoutPictureCircle flex-shrink-0',
            to: link_to
        },
        _react2.default.createElement(_PicNameImg2.default, {
            picture: picture,
            use_time_online: false
            // time_online={time_online}
            , use_new_story: true,
            has_new_story: has_new_story,
            has_seen_story: has_seen_story
        })
    );
}

exports.default = PostHeadLayoutPictureCircle;

/***/ }),

/***/ "./src/component/posts/_post/head/_components/tag/PostHeadTag.js":
/*!***********************************************************************!*\
  !*** ./src/component/posts/_post/head/_components/tag/PostHeadTag.js ***!
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

var _ActionPreviewProfile = __webpack_require__(/*! ../../../../../action_preview_profile/_main/ActionPreviewProfile */ "./src/component/action_preview_profile/_main/ActionPreviewProfile.js");

var _ActionPreviewProfile2 = _interopRequireDefault(_ActionPreviewProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PostHeadTag.propTypes = {};

//

// 
function PostHeadTag(_ref) {
    var user_tag_arr = _ref.user_tag_arr,
        user_tag_rest_count = _ref.user_tag_rest_count,
        openTagUser = _ref.openTagUser;

    //
    if (!user_tag_arr || user_tag_arr.length == 0) {
        return null;
    }

    //
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            'span',
            null,
            ' with '
        ),
        user_tag_arr.map(function (user_tag_obj, ix) {
            return _react2.default.createElement(
                _react2.default.Fragment,
                { key: user_tag_obj.id },
                ix == 0 ? '' : ', ',
                _react2.default.createElement(
                    'span',
                    { className: 'font-600' },
                    _react2.default.createElement(_ActionPreviewProfile2.default, {
                        user_id: user_tag_obj.profile_model,
                        title_action: _react2.default.createElement(
                            _reactRouterDom.Link,
                            {
                                className: 'color-inherit hv-underline',
                                to: '/profile/' + user_tag_obj.profile_model
                            },
                            user_tag_obj.first_name,
                            ' ',
                            user_tag_obj.last_name
                        )
                    })
                )
            );
        }),
        user_tag_rest_count > 0 ? _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(
                'span',
                { className: 'text-third' },
                ' and '
            ),
            _react2.default.createElement(
                'span',
                {
                    className: 'cursor-pointer font-600 hv-underline',
                    onClick: openTagUser
                },
                user_tag_rest_count,
                ' other',
                user_tag_rest_count == 1 ? '' : 's'
            )
        ) : null
    );
}

exports.default = PostHeadTag;

/***/ }),

/***/ "./src/component/posts/_post/head/_components/time_permission/PostHeadTimePermission.js":
/*!**********************************************************************************************!*\
  !*** ./src/component/posts/_post/head/_components/time_permission/PostHeadTimePermission.js ***!
  \**********************************************************************************************/
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

var _UnitTime = __webpack_require__(/*! ../../../../../../_some_function/UnitTime */ "./src/_some_function/UnitTime.js");

var _UnitTime2 = _interopRequireDefault(_UnitTime);

var _GroupIconPermission = __webpack_require__(/*! ../../../../../../_groups_icon/permission/GroupIconPermission */ "./src/_groups_icon/permission/GroupIconPermission.js");

__webpack_require__(/*! ./PostHeadTimePermission.scss */ "./src/component/posts/_post/head/_components/time_permission/PostHeadTimePermission.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PostHeadTimePermission.propTypes = {};

//

//

//
function PostHeadTimePermission(_ref) {
    var post_id = _ref.post_id,
        permission = _ref.permission,
        updated_time = _ref.updated_time;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PostHeadTimePermission display-flex align-items-center' },
        _react2.default.createElement(
            _reactRouterDom.Link,
            {
                to: '/posts/' + post_id,
                className: 'color-inherit hv-underline'
            },
            (0, _UnitTime2.default)(new Date().getTime() - new Date(updated_time).getTime())
        ),
        _react2.default.createElement(
            'span',
            { className: 'margin-x-4px' },
            '\xB7'
        ),
        _react2.default.createElement(
            'span',
            null,
            _GroupIconPermission.IconsPermission[permission].Icon
        )
    );
}

exports.default = PostHeadTimePermission;

/***/ }),

/***/ "./src/component/posts/_post/head/_main/PostHead.js":
/*!**********************************************************!*\
  !*** ./src/component/posts/_post/head/_main/PostHead.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PostHeadUser = __webpack_require__(/*! ../user/_main/PostHeadUser */ "./src/component/posts/_post/head/user/_main/PostHeadUser.js");

var _PostHeadUser2 = _interopRequireDefault(_PostHeadUser);

var _PostHeadPage = __webpack_require__(/*! ../page/_main/PostHeadPage */ "./src/component/posts/_post/head/page/_main/PostHeadPage.js");

var _PostHeadPage2 = _interopRequireDefault(_PostHeadPage);

var _PostHeadGroup = __webpack_require__(/*! ../group/_main/PostHeadGroup */ "./src/component/posts/_post/head/group/_main/PostHeadGroup.js");

var _PostHeadGroup2 = _interopRequireDefault(_PostHeadGroup);

var _PostHeadToUser = __webpack_require__(/*! ../to_user/_main/PostHeadToUser */ "./src/component/posts/_post/head/to_user/_main/PostHeadToUser.js");

var _PostHeadToUser2 = _interopRequireDefault(_PostHeadToUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PostHead.propTypes = {};

//
function PostHead(_ref) {
    var post_id = _ref.post_id,
        post_where = _ref.post_where,
        permission = _ref.permission,
        updated_time = _ref.updated_time,
        user = _ref.user,
        to_user = _ref.to_user,
        group_obj = _ref.group_obj,
        page_obj = _ref.page_obj,
        emoji_obj = _ref.emoji_obj,
        user_tag_arr = _ref.user_tag_arr,
        user_tag_rest_count = _ref.user_tag_rest_count,
        openTagUser = _ref.openTagUser,
        handleAction = _ref.handleAction;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PostHead' },
        post_where == 'group' ? _react2.default.createElement(_PostHeadGroup2.default, {
            post_id: post_id,
            user: user,
            group_obj: group_obj,
            permission: permission,
            updated_time: updated_time
            //
            , emoji_obj: emoji_obj,
            user_tag_arr: user_tag_arr,
            user_tag_rest_count: user_tag_rest_count
            //
            , openTagUser: openTagUser,
            handleAction: handleAction
        }) : post_where == 'page' ? _react2.default.createElement(_PostHeadPage2.default, {
            post_id: post_id,
            page_obj: page_obj,
            permission: permission,
            emoji_obj: emoji_obj,
            updated_time: updated_time
            //
            , handleAction: handleAction
        }) : to_user ? _react2.default.createElement(_PostHeadToUser2.default, {
            post_id: post_id,
            user: user,
            to_user: to_user
            //
            , permission: permission,
            updated_time: updated_time
            //
            , handleAction: handleAction
        }) : _react2.default.createElement(_PostHeadUser2.default, {
            post_id: post_id,
            user: user
            //
            , permission: permission,
            updated_time: updated_time
            //
            , emoji_obj: emoji_obj,
            user_tag_arr: user_tag_arr,
            user_tag_rest_count: user_tag_rest_count
            //
            , openTagUser: openTagUser,
            handleAction: handleAction
        })
    );
}

exports.default = PostHead;

/***/ }),

/***/ "./src/component/posts/_post/head/group/_main/PostHeadGroup.js":
/*!*********************************************************************!*\
  !*** ./src/component/posts/_post/head/group/_main/PostHeadGroup.js ***!
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

var _PostHeadLayout = __webpack_require__(/*! ../../_components/_layout/PostHeadLayout */ "./src/component/posts/_post/head/_components/_layout/PostHeadLayout.js");

var _PostHeadLayout2 = _interopRequireDefault(_PostHeadLayout);

var _PostHeadAction = __webpack_require__(/*! ../../_components/action/_main/PostHeadAction */ "./src/component/posts/_post/head/_components/action/_main/PostHeadAction.js");

var _PostHeadAction2 = _interopRequireDefault(_PostHeadAction);

var _PostHeadGroupLeft = __webpack_require__(/*! ../left/PostHeadGroupLeft */ "./src/component/posts/_post/head/group/left/PostHeadGroupLeft.js");

var _PostHeadGroupLeft2 = _interopRequireDefault(_PostHeadGroupLeft);

var _PostHeadGroupCenterTop = __webpack_require__(/*! ../center_top/PostHeadGroupCenterTop */ "./src/component/posts/_post/head/group/center_top/PostHeadGroupCenterTop.js");

var _PostHeadGroupCenterTop2 = _interopRequireDefault(_PostHeadGroupCenterTop);

var _PostHeadGroupCenterBottom = __webpack_require__(/*! ../center_bottom/PostHeadGroupCenterBottom */ "./src/component/posts/_post/head/group/center_bottom/PostHeadGroupCenterBottom.js");

var _PostHeadGroupCenterBottom2 = _interopRequireDefault(_PostHeadGroupCenterBottom);

__webpack_require__(/*! ./PostHeadGroup.scss */ "./src/component/posts/_post/head/group/_main/PostHeadGroup.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
PostHeadGroup.propTypes = {};

//

//
function PostHeadGroup(_ref) {
    var post_id = _ref.post_id,
        group_obj = _ref.group_obj,
        user = _ref.user,
        updated_time = _ref.updated_time,
        emoji_obj = _ref.emoji_obj,
        user_tag_arr = _ref.user_tag_arr,
        user_tag_rest_count = _ref.user_tag_rest_count,
        openTagUser = _ref.openTagUser,
        handleAction = _ref.handleAction;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PostHeadGroup' },
        group_obj.title_at_head ? _react2.default.createElement(
            'div',
            { className: 'margin-x-10px padding-y-10px border-bottom-blur text-secondary' },
            group_obj.title_at_head
        ) : null,
        _react2.default.createElement(_PostHeadLayout2.default, {
            left_elm: _react2.default.createElement(_PostHeadGroupLeft2.default, { group_obj: group_obj, user: user }),
            center_top_elm: _react2.default.createElement(_PostHeadGroupCenterTop2.default, {
                group_obj: group_obj,
                emoji_obj: emoji_obj,
                user_tag_arr: user_tag_arr,
                user_tag_rest_count: user_tag_rest_count,
                openTagUser: openTagUser
            }),
            center_bottom_elm: _react2.default.createElement(_PostHeadGroupCenterBottom2.default, {
                post_id: post_id,
                user: user,
                privacy: group_obj.privacy,
                updated_time: updated_time
            }),
            right_elm: _react2.default.createElement(_PostHeadAction2.default, {
                post_id: post_id,
                post_type: 'group',
                handleAction: handleAction
            })
        })
    );
}

exports.default = PostHeadGroup;

/***/ }),

/***/ "./src/component/posts/_post/head/group/center_bottom/PostHeadGroupCenterBottom.js":
/*!*****************************************************************************************!*\
  !*** ./src/component/posts/_post/head/group/center_bottom/PostHeadGroupCenterBottom.js ***!
  \*****************************************************************************************/
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

var _UnitTime = __webpack_require__(/*! ../../../../../../_some_function/UnitTime */ "./src/_some_function/UnitTime.js");

var _UnitTime2 = _interopRequireDefault(_UnitTime);

var _IconPublic = __webpack_require__(/*! ../../../../../../_icons_svg/icon_public/IconPublic */ "./src/_icons_svg/icon_public/IconPublic.js");

var _IconPublic2 = _interopRequireDefault(_IconPublic);

var _IconGroup = __webpack_require__(/*! ../../../../../../_icons_svg/icon_group/IconGroup */ "./src/_icons_svg/icon_group/IconGroup.js");

var _IconGroup2 = _interopRequireDefault(_IconGroup);

var _ActionPreviewProfile = __webpack_require__(/*! ../../../../../action_preview_profile/_main/ActionPreviewProfile */ "./src/component/action_preview_profile/_main/ActionPreviewProfile.js");

var _ActionPreviewProfile2 = _interopRequireDefault(_ActionPreviewProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
PostHeadGroupCenterBottom.propTypes = {};

//

//

//
function PostHeadGroupCenterBottom(_ref) {
    var post_id = _ref.post_id,
        user = _ref.user,
        privacy = _ref.privacy,
        updated_time = _ref.updated_time;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PostHeadGroupCenterBottom display-flex align-items-center' },
        _react2.default.createElement(_ActionPreviewProfile2.default, {
            user_id: user.id,
            title_action: _react2.default.createElement(
                _reactRouterDom.Link,
                {
                    className: 'color-inherit font-500 hv-underline',
                    to: '/profile/' + user.id
                },
                user.first_name,
                ' ',
                user.last_name
            )
        }),
        _react2.default.createElement(
            'div',
            { className: 'margin-x-4px' },
            '\xB7'
        ),
        _react2.default.createElement(
            _reactRouterDom.Link,
            {
                to: '/posts/' + post_id,
                className: 'color-inherit hv-underline'
            },
            (0, _UnitTime2.default)(new Date().getTime() - new Date(updated_time).getTime())
        ),
        _react2.default.createElement(
            'div',
            { className: 'margin-x-4px' },
            '\xB7'
        ),
        privacy == 'Public' ? _react2.default.createElement(_IconPublic2.default, null) : _react2.default.createElement(_IconGroup2.default, { stroke_width_circle: 10 })
    );
}

exports.default = PostHeadGroupCenterBottom;

/***/ }),

/***/ "./src/component/posts/_post/head/group/center_top/PostHeadGroupCenterTop.js":
/*!***********************************************************************************!*\
  !*** ./src/component/posts/_post/head/group/center_top/PostHeadGroupCenterTop.js ***!
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _ActionPreviewGroup = __webpack_require__(/*! ../../../../../action_preview_group/_main/ActionPreviewGroup */ "./src/component/action_preview_group/_main/ActionPreviewGroup.js");

var _ActionPreviewGroup2 = _interopRequireDefault(_ActionPreviewGroup);

var _PostHeadEmoji = __webpack_require__(/*! ../../_components/emoji/PostHeadEmoji */ "./src/component/posts/_post/head/_components/emoji/PostHeadEmoji.js");

var _PostHeadEmoji2 = _interopRequireDefault(_PostHeadEmoji);

var _PostHeadTag = __webpack_require__(/*! ../../_components/tag/PostHeadTag */ "./src/component/posts/_post/head/_components/tag/PostHeadTag.js");

var _PostHeadTag2 = _interopRequireDefault(_PostHeadTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PostHeadGroupCenterTop.propTypes = {};

//

//
function PostHeadGroupCenterTop(_ref) {
    var group_obj = _ref.group_obj,
        emoji_obj = _ref.emoji_obj,
        user_tag_arr = _ref.user_tag_arr,
        user_tag_rest_count = _ref.user_tag_rest_count,
        openTagUser = _ref.openTagUser,
        joinGroup = _ref.joinGroup;


    //
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            'span',
            { className: 'font-600' },
            _react2.default.createElement(_ActionPreviewGroup2.default, {
                group_id: group_obj.id,
                title_action: _react2.default.createElement(
                    _reactRouterDom.Link,
                    {
                        className: 'color-inherit hv-cl-blue',
                        to: '/group/' + group_obj.id
                    },
                    group_obj.name
                )
            })
        ),
        emoji_obj.id || user_tag_arr.length ? _react2.default.createElement(
            'span',
            { className: 'text-third' },
            ' is '
        ) : null,
        _react2.default.createElement(_PostHeadEmoji2.default, { emoji_obj: emoji_obj }),
        _react2.default.createElement(_PostHeadTag2.default, {
            user_tag_arr: user_tag_arr,
            user_tag_rest_count: user_tag_rest_count,
            openTagUser: openTagUser
        }),
        group_obj.type == 'suggested_public' ? _react2.default.createElement(
            _react2.default.Fragment,
            null,
            ' · ',
            _react2.default.createElement(
                'span',
                {
                    className: 'font-500 text-blue cursor-pointer',
                    onClick: joinGroup
                },
                'Join'
            )
        ) : null
    );
}

exports.default = PostHeadGroupCenterTop;

/***/ }),

/***/ "./src/component/posts/_post/head/group/left/PostHeadGroupLeft.js":
/*!************************************************************************!*\
  !*** ./src/component/posts/_post/head/group/left/PostHeadGroupLeft.js ***!
  \************************************************************************/
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

var _ActionPreviewProfile = __webpack_require__(/*! ../../../../../action_preview_profile/_main/ActionPreviewProfile */ "./src/component/action_preview_profile/_main/ActionPreviewProfile.js");

var _ActionPreviewProfile2 = _interopRequireDefault(_ActionPreviewProfile);

var _ActionPreviewGroup = __webpack_require__(/*! ../../../../../action_preview_group/_main/ActionPreviewGroup */ "./src/component/action_preview_group/_main/ActionPreviewGroup.js");

var _ActionPreviewGroup2 = _interopRequireDefault(_ActionPreviewGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PostHeadGroupLeft.propTypes = {};

//
function PostHeadGroupLeft(_ref) {
    var group_obj = _ref.group_obj,
        user = _ref.user;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PostHeadGroupLeft pos-rel wh-40px' },
        _react2.default.createElement(
            'div',
            { className: 'PostHeadGroupLeft_group pos-abs-0' },
            _react2.default.createElement(_ActionPreviewGroup2.default, {
                group_id: group_obj.id,
                title_action: _react2.default.createElement(
                    _reactRouterDom.Link,
                    {
                        className: 'flex-shrink-0',
                        to: '/group/' + group_obj.id
                    },
                    _react2.default.createElement(
                        'div',
                        { className: 'hv-after-shadow-05' },
                        _react2.default.createElement('img', {
                            className: 'PostHeadGroupLeft_group_picture brs-8px object-fit-cover',
                            src: group_obj.picture,
                            alt: '',
                            width: '36',
                            height: '36'
                        })
                    )
                )
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'PostHeadGroupLeft_user pos-abs right-0 bottom-0' },
            _react2.default.createElement(_ActionPreviewProfile2.default, {
                user_id: user.id,
                title_action: _react2.default.createElement(
                    _reactRouterDom.Link,
                    {
                        className: 'flex-shrink-0',
                        to: '/profile/' + user.id
                    },
                    _react2.default.createElement(
                        'div',
                        { className: 'hv-after-shadow-05' },
                        _react2.default.createElement('img', {
                            className: 'PostHeadGroupLeft_user_picture brs-50 object-fit-cover',
                            src: user.picture,
                            alt: '',
                            width: '24',
                            height: '24'
                        })
                    )
                )
            })
        )
    );
}

exports.default = PostHeadGroupLeft;

/***/ }),

/***/ "./src/component/posts/_post/head/page/_main/PostHeadPage.js":
/*!*******************************************************************!*\
  !*** ./src/component/posts/_post/head/page/_main/PostHeadPage.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PostHeadLayout = __webpack_require__(/*! ../../_components/_layout/PostHeadLayout */ "./src/component/posts/_post/head/_components/_layout/PostHeadLayout.js");

var _PostHeadLayout2 = _interopRequireDefault(_PostHeadLayout);

var _PostHeadAction = __webpack_require__(/*! ../../_components/action/_main/PostHeadAction */ "./src/component/posts/_post/head/_components/action/_main/PostHeadAction.js");

var _PostHeadAction2 = _interopRequireDefault(_PostHeadAction);

var _PostHeadPageLeft = __webpack_require__(/*! ../left/PostHeadPageLeft */ "./src/component/posts/_post/head/page/left/PostHeadPageLeft.js");

var _PostHeadPageLeft2 = _interopRequireDefault(_PostHeadPageLeft);

var _PostHeadPageCenterTop = __webpack_require__(/*! ../center_top/PostHeadPageCenterTop */ "./src/component/posts/_post/head/page/center_top/PostHeadPageCenterTop.js");

var _PostHeadPageCenterTop2 = _interopRequireDefault(_PostHeadPageCenterTop);

var _PostHeadPageCenterBottom = __webpack_require__(/*! ../center_bottom/PostHeadPageCenterBottom */ "./src/component/posts/_post/head/page/center_bottom/PostHeadPageCenterBottom.js");

var _PostHeadPageCenterBottom2 = _interopRequireDefault(_PostHeadPageCenterBottom);

__webpack_require__(/*! ./PostHeadPage.scss */ "./src/component/posts/_post/head/page/_main/PostHeadPage.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
PostHeadPage.propTypes = {};

//

//
function PostHeadPage(_ref) {
    var post_id = _ref.post_id,
        page_obj = _ref.page_obj,
        emoji_obj = _ref.emoji_obj,
        permission = _ref.permission,
        updated_time = _ref.updated_time,
        handleAction = _ref.handleAction;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PostHeadPage' },
        page_obj.title_at_head ? _react2.default.createElement(
            'div',
            { className: 'margin-x-10px padding-y-10px border-bottom-blur text-secondary' },
            page_obj.title_at_head
        ) : null,
        _react2.default.createElement(_PostHeadLayout2.default, {
            left_elm: _react2.default.createElement(_PostHeadPageLeft2.default, { page_obj: page_obj }),
            center_top_elm: _react2.default.createElement(_PostHeadPageCenterTop2.default, {
                page_obj: page_obj,
                emoji_obj: emoji_obj
            }),
            center_bottom_elm: _react2.default.createElement(_PostHeadPageCenterBottom2.default, {
                post_id: post_id,
                page_obj: page_obj,
                permission: permission,
                updated_time: updated_time
            }),
            right_elm: _react2.default.createElement(_PostHeadAction2.default, {
                post_id: post_id,
                post_type: 'page',
                handleAction: handleAction
            })
        })
    );
}

exports.default = PostHeadPage;

/***/ }),

/***/ "./src/component/posts/_post/head/page/center_bottom/PostHeadPageCenterBottom.js":
/*!***************************************************************************************!*\
  !*** ./src/component/posts/_post/head/page/center_bottom/PostHeadPageCenterBottom.js ***!
  \***************************************************************************************/
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

var _IconPublic = __webpack_require__(/*! ../../../../../../_icons_svg/icon_public/IconPublic */ "./src/_icons_svg/icon_public/IconPublic.js");

var _IconPublic2 = _interopRequireDefault(_IconPublic);

var _PostHeadTimePermission = __webpack_require__(/*! ../../_components/time_permission/PostHeadTimePermission */ "./src/component/posts/_post/head/_components/time_permission/PostHeadTimePermission.js");

var _PostHeadTimePermission2 = _interopRequireDefault(_PostHeadTimePermission);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PostHeadPageCenterBottom.propTypes = {};

//

// 
function PostHeadPageCenterBottom(_ref) {
    var post_id = _ref.post_id,
        page_obj = _ref.page_obj,
        permission = _ref.permission,
        updated_time = _ref.updated_time;

    //
    return page_obj.title_at_time ? _react2.default.createElement(
        'div',
        { className: 'PostHeadPageCenterBottom display-flex align-items-center' },
        _react2.default.createElement(
            _reactRouterDom.Link,
            {
                to: page_obj.link_title_at_time,
                className: 'color-inherit hv-underline'
            },
            page_obj.title_at_time
        ),
        _react2.default.createElement(
            'span',
            { className: 'margin-x-4px' },
            '\xB7'
        ),
        _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(_IconPublic2.default, { size_icon: '12px' })
        )
    ) : _react2.default.createElement(_PostHeadTimePermission2.default, {
        post_id: post_id,
        permission: permission,
        updated_time: updated_time
    });
}

exports.default = PostHeadPageCenterBottom;

/***/ }),

/***/ "./src/component/posts/_post/head/page/center_top/PostHeadPageCenterTop.js":
/*!*********************************************************************************!*\
  !*** ./src/component/posts/_post/head/page/center_top/PostHeadPageCenterTop.js ***!
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _ActionPreviewPage = __webpack_require__(/*! ../../../../../action_preview_page/_main/ActionPreviewPage */ "./src/component/action_preview_page/_main/ActionPreviewPage.js");

var _ActionPreviewPage2 = _interopRequireDefault(_ActionPreviewPage);

var _PostHeadEmoji = __webpack_require__(/*! ../../_components/emoji/PostHeadEmoji */ "./src/component/posts/_post/head/_components/emoji/PostHeadEmoji.js");

var _PostHeadEmoji2 = _interopRequireDefault(_PostHeadEmoji);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PostHeadPageCenterTop.propTypes = {};

//
function PostHeadPageCenterTop(_ref) {
    var page_obj = _ref.page_obj,
        emoji_obj = _ref.emoji_obj;

    //
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            'span',
            { className: 'font-600' },
            _react2.default.createElement(_ActionPreviewPage2.default, {
                page_id: page_obj.id,
                has_tick: page_obj.has_tick,
                title_action: _react2.default.createElement(
                    _reactRouterDom.Link,
                    {
                        className: 'break-word  color-inherit font-600',
                        to: '/page/' + page_obj.id
                    },
                    page_obj.name
                )
            })
        ),
        emoji_obj.id ? _react2.default.createElement(
            'span',
            { className: 'text-third' },
            ' is '
        ) : null,
        _react2.default.createElement(_PostHeadEmoji2.default, { emoji_obj: emoji_obj })
    );
}

exports.default = PostHeadPageCenterTop;

/***/ }),

/***/ "./src/component/posts/_post/head/page/left/PostHeadPageLeft.js":
/*!**********************************************************************!*\
  !*** ./src/component/posts/_post/head/page/left/PostHeadPageLeft.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PostHeadLayoutPictureCircle = __webpack_require__(/*! ../../_components/picture_circle/PostHeadLayoutPictureCircle */ "./src/component/posts/_post/head/_components/picture_circle/PostHeadLayoutPictureCircle.js");

var _PostHeadLayoutPictureCircle2 = _interopRequireDefault(_PostHeadLayoutPictureCircle);

var _ActionPreviewPage = __webpack_require__(/*! ../../../../../action_preview_page/_main/ActionPreviewPage */ "./src/component/action_preview_page/_main/ActionPreviewPage.js");

var _ActionPreviewPage2 = _interopRequireDefault(_ActionPreviewPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PostHeadPageLeft.propTypes = {};

//
function PostHeadPageLeft(_ref) {
    var page_obj = _ref.page_obj;

    //
    return _react2.default.createElement(_ActionPreviewPage2.default, {
        page_id: page_obj.id,
        title_action: _react2.default.createElement(_PostHeadLayoutPictureCircle2.default, {
            link_to: '/page/' + page_obj.id,
            picture: page_obj.picture,
            has_new_story: page_obj.has_new_story,
            has_seen_story: page_obj.has_seen_story
        })
    });
}

exports.default = PostHeadPageLeft;

/***/ }),

/***/ "./src/component/posts/_post/head/to_user/_main/PostHeadToUser.js":
/*!************************************************************************!*\
  !*** ./src/component/posts/_post/head/to_user/_main/PostHeadToUser.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PostHeadLayout = __webpack_require__(/*! ../../_components/_layout/PostHeadLayout */ "./src/component/posts/_post/head/_components/_layout/PostHeadLayout.js");

var _PostHeadLayout2 = _interopRequireDefault(_PostHeadLayout);

var _PostHeadAction = __webpack_require__(/*! ../../_components/action/_main/PostHeadAction */ "./src/component/posts/_post/head/_components/action/_main/PostHeadAction.js");

var _PostHeadAction2 = _interopRequireDefault(_PostHeadAction);

var _UserToUser = __webpack_require__(/*! ../../../../common/name_to_name/user/UserToUser */ "./src/component/posts/common/name_to_name/user/UserToUser.js");

var _UserToUser2 = _interopRequireDefault(_UserToUser);

var _PostHeadToUserLeft = __webpack_require__(/*! ../left/PostHeadToUserLeft */ "./src/component/posts/_post/head/to_user/left/PostHeadToUserLeft.js");

var _PostHeadToUserLeft2 = _interopRequireDefault(_PostHeadToUserLeft);

var _PostHeadToUserCenterBottom = __webpack_require__(/*! ../center_bottom/PostHeadToUserCenterBottom */ "./src/component/posts/_post/head/to_user/center_bottom/PostHeadToUserCenterBottom.js");

var _PostHeadToUserCenterBottom2 = _interopRequireDefault(_PostHeadToUserCenterBottom);

__webpack_require__(/*! ./PostHeadToUser.scss */ "./src/component/posts/_post/head/to_user/_main/PostHeadToUser.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PostHeadToUser.propTypes = {};

//

//

//
function PostHeadToUser(_ref) {
    var post_id = _ref.post_id,
        user = _ref.user,
        to_user = _ref.to_user,
        permission = _ref.permission,
        updated_time = _ref.updated_time,
        handleAction = _ref.handleAction;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PostHeadToUser' },
        _react2.default.createElement(_PostHeadLayout2.default, {
            left_elm: _react2.default.createElement(_PostHeadToUserLeft2.default, { user: user }),
            center_top_elm: _react2.default.createElement(_UserToUser2.default, { user: user, to_user: to_user }),
            center_bottom_elm: _react2.default.createElement(_PostHeadToUserCenterBottom2.default, {
                post_id: post_id,
                permission: permission,
                updated_time: updated_time
            })
            //
            , right_elm: _react2.default.createElement(_PostHeadAction2.default, {
                post_id: post_id,
                post_type: 'friend',
                handleAction: handleAction
            })
        })
    );
}

exports.default = PostHeadToUser;

/***/ }),

/***/ "./src/component/posts/_post/head/to_user/center_bottom/PostHeadToUserCenterBottom.js":
/*!********************************************************************************************!*\
  !*** ./src/component/posts/_post/head/to_user/center_bottom/PostHeadToUserCenterBottom.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PostHeadTimePermission = __webpack_require__(/*! ../../_components/time_permission/PostHeadTimePermission */ "./src/component/posts/_post/head/_components/time_permission/PostHeadTimePermission.js");

var _PostHeadTimePermission2 = _interopRequireDefault(_PostHeadTimePermission);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PostHeadToUserCenterBottom.propTypes = {};

//

//
function PostHeadToUserCenterBottom(_ref) {
    var post_id = _ref.post_id,
        permission = _ref.permission,
        updated_time = _ref.updated_time;

    //
    return _react2.default.createElement(_PostHeadTimePermission2.default, {
        post_id: post_id,
        permission: permission,
        updated_time: updated_time
    });
}

exports.default = PostHeadToUserCenterBottom;

/***/ }),

/***/ "./src/component/posts/_post/head/to_user/left/PostHeadToUserLeft.js":
/*!***************************************************************************!*\
  !*** ./src/component/posts/_post/head/to_user/left/PostHeadToUserLeft.js ***!
  \***************************************************************************/
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

var _ActionPreviewProfile = __webpack_require__(/*! ../../../../../action_preview_profile/_main/ActionPreviewProfile */ "./src/component/action_preview_profile/_main/ActionPreviewProfile.js");

var _ActionPreviewProfile2 = _interopRequireDefault(_ActionPreviewProfile);

var _PostHeadLayoutPictureCircle = __webpack_require__(/*! ../../_components/picture_circle/PostHeadLayoutPictureCircle */ "./src/component/posts/_post/head/_components/picture_circle/PostHeadLayoutPictureCircle.js");

var _PostHeadLayoutPictureCircle2 = _interopRequireDefault(_PostHeadLayoutPictureCircle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PostHeadToUserLeft.propTypes = {};

//
function PostHeadToUserLeft(_ref) {
    var user = _ref.user;

    //
    return _react2.default.createElement(_ActionPreviewProfile2.default, {
        user_id: user.id,
        title_action: _react2.default.createElement(_PostHeadLayoutPictureCircle2.default, {
            link_to: '/profile/' + user.id,
            picture: user.picture,
            has_new_story: user.has_new_story,
            has_seen_story: user.has_seen_story
        })
    });
}

exports.default = PostHeadToUserLeft;

/***/ }),

/***/ "./src/component/posts/_post/head/user/_main/PostHeadUser.js":
/*!*******************************************************************!*\
  !*** ./src/component/posts/_post/head/user/_main/PostHeadUser.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PostHeadLayout = __webpack_require__(/*! ../../_components/_layout/PostHeadLayout */ "./src/component/posts/_post/head/_components/_layout/PostHeadLayout.js");

var _PostHeadLayout2 = _interopRequireDefault(_PostHeadLayout);

var _PostHeadAction = __webpack_require__(/*! ../../_components/action/_main/PostHeadAction */ "./src/component/posts/_post/head/_components/action/_main/PostHeadAction.js");

var _PostHeadAction2 = _interopRequireDefault(_PostHeadAction);

var _PostHeadUserLeft = __webpack_require__(/*! ../left/PostHeadUserLeft */ "./src/component/posts/_post/head/user/left/PostHeadUserLeft.js");

var _PostHeadUserLeft2 = _interopRequireDefault(_PostHeadUserLeft);

var _PostHeadUserCenterTop = __webpack_require__(/*! ../center_top/PostHeadUserCenterTop */ "./src/component/posts/_post/head/user/center_top/PostHeadUserCenterTop.js");

var _PostHeadUserCenterTop2 = _interopRequireDefault(_PostHeadUserCenterTop);

var _PostHeadUserCenterBottom = __webpack_require__(/*! ../center_bottom/PostHeadUserCenterBottom */ "./src/component/posts/_post/head/user/center_bottom/PostHeadUserCenterBottom.js");

var _PostHeadUserCenterBottom2 = _interopRequireDefault(_PostHeadUserCenterBottom);

__webpack_require__(/*! ./PostHeadUser.scss */ "./src/component/posts/_post/head/user/_main/PostHeadUser.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
PostHeadUser.propTypes = {};

//

//
function PostHeadUser(_ref) {
    var post_id = _ref.post_id,
        user = _ref.user,
        permission = _ref.permission,
        updated_time = _ref.updated_time,
        emoji_obj = _ref.emoji_obj,
        user_tag_arr = _ref.user_tag_arr,
        user_tag_rest_count = _ref.user_tag_rest_count,
        openTagUser = _ref.openTagUser,
        handleAction = _ref.handleAction;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PostHeadUser' },
        _react2.default.createElement(_PostHeadLayout2.default, {
            left_elm: _react2.default.createElement(_PostHeadUserLeft2.default, { user: user }),
            center_top_elm: _react2.default.createElement(_PostHeadUserCenterTop2.default, {
                user: user,
                emoji_obj: emoji_obj,
                user_tag_arr: user_tag_arr,
                user_tag_rest_count: user_tag_rest_count,
                openTagUser: openTagUser
            }),
            center_bottom_elm: _react2.default.createElement(_PostHeadUserCenterBottom2.default, {
                post_id: post_id,
                permission: permission,
                updated_time: updated_time
            }),
            right_elm: _react2.default.createElement(_PostHeadAction2.default, {
                post_id: post_id,
                post_type: 'friend',
                handleAction: handleAction
            })
        })
    );
}

exports.default = PostHeadUser;

/***/ }),

/***/ "./src/component/posts/_post/head/user/center_bottom/PostHeadUserCenterBottom.js":
/*!***************************************************************************************!*\
  !*** ./src/component/posts/_post/head/user/center_bottom/PostHeadUserCenterBottom.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PostHeadTimePermission = __webpack_require__(/*! ../../_components/time_permission/PostHeadTimePermission */ "./src/component/posts/_post/head/_components/time_permission/PostHeadTimePermission.js");

var _PostHeadTimePermission2 = _interopRequireDefault(_PostHeadTimePermission);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PostHeadUserCenterBottom.propTypes = {};

//

//
function PostHeadUserCenterBottom(_ref) {
    var post_id = _ref.post_id,
        permission = _ref.permission,
        updated_time = _ref.updated_time;

    //
    return _react2.default.createElement(_PostHeadTimePermission2.default, {
        post_id: post_id,
        permission: permission,
        updated_time: updated_time
    });
}

exports.default = PostHeadUserCenterBottom;

/***/ }),

/***/ "./src/component/posts/_post/head/user/center_top/PostHeadUserCenterTop.js":
/*!*********************************************************************************!*\
  !*** ./src/component/posts/_post/head/user/center_top/PostHeadUserCenterTop.js ***!
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _ActionPreviewProfile = __webpack_require__(/*! ../../../../../action_preview_profile/_main/ActionPreviewProfile */ "./src/component/action_preview_profile/_main/ActionPreviewProfile.js");

var _ActionPreviewProfile2 = _interopRequireDefault(_ActionPreviewProfile);

var _PostHeadEmoji = __webpack_require__(/*! ../../_components/emoji/PostHeadEmoji */ "./src/component/posts/_post/head/_components/emoji/PostHeadEmoji.js");

var _PostHeadEmoji2 = _interopRequireDefault(_PostHeadEmoji);

var _PostHeadTag = __webpack_require__(/*! ../../_components/tag/PostHeadTag */ "./src/component/posts/_post/head/_components/tag/PostHeadTag.js");

var _PostHeadTag2 = _interopRequireDefault(_PostHeadTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PostHeadUserCenterTop.propTypes = {};

//

//
function PostHeadUserCenterTop(_ref) {
    var user = _ref.user,
        emoji_obj = _ref.emoji_obj,
        user_tag_arr = _ref.user_tag_arr,
        user_tag_rest_count = _ref.user_tag_rest_count,
        openTagUser = _ref.openTagUser;

    //
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            'span',
            { className: 'font-600' },
            _react2.default.createElement(_ActionPreviewProfile2.default, {
                user_id: user.id,
                title_action: _react2.default.createElement(
                    _reactRouterDom.Link,
                    {
                        className: 'color-inherit hv-underline',
                        to: '/profile/' + user.id
                    },
                    user.first_name + ' ' + user.last_name
                )
            })
        ),
        emoji_obj.id || user_tag_arr.length ? _react2.default.createElement(
            'span',
            { className: 'text-third' },
            ' is '
        ) : null,
        _react2.default.createElement(_PostHeadEmoji2.default, { emoji_obj: emoji_obj }),
        _react2.default.createElement(_PostHeadTag2.default, {
            user_tag_arr: user_tag_arr,
            user_tag_rest_count: user_tag_rest_count,
            openTagUser: openTagUser
        })
    );
}

exports.default = PostHeadUserCenterTop;

/***/ }),

/***/ "./src/component/posts/_post/head/user/left/PostHeadUserLeft.js":
/*!**********************************************************************!*\
  !*** ./src/component/posts/_post/head/user/left/PostHeadUserLeft.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ActionPreviewProfile = __webpack_require__(/*! ../../../../../action_preview_profile/_main/ActionPreviewProfile */ "./src/component/action_preview_profile/_main/ActionPreviewProfile.js");

var _ActionPreviewProfile2 = _interopRequireDefault(_ActionPreviewProfile);

var _PostHeadLayoutPictureCircle = __webpack_require__(/*! ../../_components/picture_circle/PostHeadLayoutPictureCircle */ "./src/component/posts/_post/head/_components/picture_circle/PostHeadLayoutPictureCircle.js");

var _PostHeadLayoutPictureCircle2 = _interopRequireDefault(_PostHeadLayoutPictureCircle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PostHeadUserLeft.propTypes = {};

//
function PostHeadUserLeft(_ref) {
    var user = _ref.user;

    //
    return _react2.default.createElement(_ActionPreviewProfile2.default, {
        user_id: user.id,
        title_action: _react2.default.createElement(_PostHeadLayoutPictureCircle2.default, {
            link_to: '/profile/' + user.id,
            picture: user.picture,
            has_new_story: user.has_new_story,
            has_seen_story: user.has_seen_story
        })
    });
}

exports.default = PostHeadUserLeft;

/***/ }),

/***/ "./src/component/posts/_post/tag_emoji/_main/PostTagAndEmoji.js":
/*!**********************************************************************!*\
  !*** ./src/component/posts/_post/tag_emoji/_main/PostTagAndEmoji.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PostHeadTag = __webpack_require__(/*! ../../head/_components/tag/PostHeadTag */ "./src/component/posts/_post/head/_components/tag/PostHeadTag.js");

var _PostHeadTag2 = _interopRequireDefault(_PostHeadTag);

var _PostHeadEmoji = __webpack_require__(/*! ../../head/_components/emoji/PostHeadEmoji */ "./src/component/posts/_post/head/_components/emoji/PostHeadEmoji.js");

var _PostHeadEmoji2 = _interopRequireDefault(_PostHeadEmoji);

__webpack_require__(/*! ./PostTagAndEmoji.scss */ "./src/component/posts/_post/tag_emoji/_main/PostTagAndEmoji.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PostTagAndEmoji.propTypes = {};

//

//

//
function PostTagAndEmoji(_ref) {
    var user_tag_arr = _ref.user_tag_arr,
        user_tag_rest_count = _ref.user_tag_rest_count,
        emoji_obj = _ref.emoji_obj,
        openTagUser = _ref.openTagUser;

    //
    if (!emoji_obj.id && user_tag_arr.length == 0) {
        return null;
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'PostTagAndEmoji padding-x-8px' },
        _react2.default.createElement('span', { className: 'PostTagAndEmoji_start pos-rel inline-block' }),
        _react2.default.createElement(_PostHeadEmoji2.default, { emoji_obj: emoji_obj }),
        _react2.default.createElement(_PostHeadTag2.default, {
            user_tag_arr: user_tag_arr,
            user_tag_rest_count: user_tag_rest_count,
            openTagUser: openTagUser
        })
    );
}

exports.default = PostTagAndEmoji;

/***/ }),

/***/ "./src/component/posts/_post/text/_main/PostText.js":
/*!**********************************************************!*\
  !*** ./src/component/posts/_post/text/_main/PostText.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
//

//

//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getBgColorOrImg = __webpack_require__(/*! ../../../../../_some_function/getBgColorOrImg */ "./src/_some_function/getBgColorOrImg.js");

var _Content_more = __webpack_require__(/*! ../../../../content_more/Content_more */ "./src/component/content_more/Content_more.js");

var _Content_more2 = _interopRequireDefault(_Content_more);

__webpack_require__(/*! ./PostText.scss */ "./src/component/posts/_post/text/_main/PostText.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PostText.propTypes = {};

//
function PostText(_ref) {
    var bg_obj = _ref.bg_obj,
        content_obj = _ref.content_obj,
        seeMoreContent = _ref.seeMoreContent;

    //
    return _react2.default.createElement(
        'div',
        {
            className: 'PostText padding-10px ' + (bg_obj && bg_obj.bg ? 'PostText-bg display-flex-center text-align-center font-16px font-700' : ''),
            style: _extends({}, bg_obj ? _extends({}, (0, _getBgColorOrImg.getBgColorOrImg)({
                is_bg_img: bg_obj.is_bg_img,
                bg: bg_obj.bg
            }), {
                color: bg_obj.color
            }) : {})
        },
        _react2.default.createElement(
            'div',
            { className: 'max-h-100per overflow-y-auto scroll-thin' },
            _react2.default.createElement(_Content_more2.default, {
                content_obj: content_obj,
                seeMoreContent: seeMoreContent
            })
        )
    );
}

exports.default = PostText;

/***/ }),

/***/ "./src/component/posts/common/info/cmt/InfoCmt.js":
/*!********************************************************!*\
  !*** ./src/component/posts/common/info/cmt/InfoCmt.js ***!
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
InfoCmt.propTypes = {};

//
function InfoCmt(_ref) {
    var count_comment = _ref.count_comment,
        handleClickBtnCmt = _ref.handleClickBtnCmt;

    //
    return count_comment ? _react2.default.createElement(
        'div',
        {
            className: 'Info_cmt cursor-pointer hv-underline',
            onClick: handleClickBtnCmt
        },
        _react2.default.createElement(
            'span',
            null,
            count_comment,
            ' comment',
            count_comment > 1 ? 's' : ''
        )
    ) : null;
}

exports.default = InfoCmt;

/***/ }),

/***/ "./src/component/posts/common/name_to_name/_layout/NameToNameLayout.js":
/*!*****************************************************************************!*\
  !*** ./src/component/posts/common/name_to_name/_layout/NameToNameLayout.js ***!
  \*****************************************************************************/
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

var _IconCaret = __webpack_require__(/*! ../../../../../_icons_svg/_icon_caret/IconCaret */ "./src/_icons_svg/_icon_caret/IconCaret.js");

var _IconCaret2 = _interopRequireDefault(_IconCaret);

var _ActionPreviewProfile = __webpack_require__(/*! ../../../../action_preview_profile/_main/ActionPreviewProfile */ "./src/component/action_preview_profile/_main/ActionPreviewProfile.js");

var _ActionPreviewProfile2 = _interopRequireDefault(_ActionPreviewProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
NameToNameLayout.propTypes = {};

//

//
function NameToNameLayout(_ref) {
    var user = _ref.user,
        right_elm = _ref.right_elm;

    //
    return _react2.default.createElement(
        'div',
        { className: 'NameToNameLayout' },
        _react2.default.createElement(
            'span',
            { className: 'font-600' },
            _react2.default.createElement(_ActionPreviewProfile2.default, {
                user_id: user.id,
                title_action: _react2.default.createElement(
                    _reactRouterDom.Link,
                    {
                        className: 'color-inherit hv-underline',
                        to: '/profile/' + user.id
                    },
                    user.first_name + ' ' + user.last_name
                )
            })
        ),
        ' ',
        _react2.default.createElement(
            'span',
            { className: 'text-third' },
            _react2.default.createElement(_IconCaret2.default, {
                class_icon: 'display-inherit rotate--90',
                size_icon: '12px',
                fill: 'currentColor'
            })
        ),
        ' ',
        _react2.default.createElement(
            'span',
            null,
            right_elm
        )
    );
}

exports.default = NameToNameLayout;

/***/ }),

/***/ "./src/component/posts/common/name_to_name/user/UserToUser.js":
/*!********************************************************************!*\
  !*** ./src/component/posts/common/name_to_name/user/UserToUser.js ***!
  \********************************************************************/
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

var _ActionPreviewProfile = __webpack_require__(/*! ../../../../action_preview_profile/_main/ActionPreviewProfile */ "./src/component/action_preview_profile/_main/ActionPreviewProfile.js");

var _ActionPreviewProfile2 = _interopRequireDefault(_ActionPreviewProfile);

var _NameToNameLayout = __webpack_require__(/*! ../_layout/NameToNameLayout */ "./src/component/posts/common/name_to_name/_layout/NameToNameLayout.js");

var _NameToNameLayout2 = _interopRequireDefault(_NameToNameLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
UserToUser.propTypes = {};

//

//
function UserToUser(_ref) {
    var user = _ref.user,
        to_user = _ref.to_user;

    //
    return _react2.default.createElement(_NameToNameLayout2.default, {
        user: user,
        right_elm: _react2.default.createElement(
            'span',
            { className: 'font-600' },
            _react2.default.createElement(_ActionPreviewProfile2.default, {
                user_id: to_user.id,
                title_action: _react2.default.createElement(
                    _reactRouterDom.Link,
                    {
                        className: 'color-inherit hv-underline',
                        to: '/profile/' + to_user.id
                    },
                    to_user.first_name + ' ' + to_user.last_name
                )
            })
        )
    });
}

exports.default = UserToUser;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/_screen/type/user_add/_main/ScreenUserAdd.scss":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/_screen/type/user_add/_main/ScreenUserAdd.scss ***!
  \*******************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/head/_components/_layout/PostHeadLayout.scss":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/head/_components/_layout/PostHeadLayout.scss ***!
  \*****************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".device-mobile .PostHeadLayout {\n  padding: 8px;\n}\n.device-mobile .PostHeadLayout_center {\n  padding-left: 8px;\n  padding-right: 8px;\n}", "",{"version":3,"sources":["webpack://./src/component/posts/_post/head/_components/_layout/PostHeadLayout.scss"],"names":[],"mappings":"AAGI;EACI,YAAA;AAFR;AAKI;EACI,iBAAA;EACA,kBAAA;AAHR","sourcesContent":["// ------\r\n\r\n.device-mobile {\r\n    .PostHeadLayout {\r\n        padding: 8px;\r\n    }\r\n\r\n    .PostHeadLayout_center {\r\n        padding-left: 8px;\r\n        padding-right: 8px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/head/_components/action/_main/PostHeadAction.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/head/_components/action/_main/PostHeadAction.scss ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".PostHeadAction_list-pc {\n  width: 18rem;\n  max-width: 100vw;\n}\n\n.PostHeadAction_list-mb {\n  max-height: calc(100% - 60px);\n}\n\n.device-mobile .PostHeadAction .ActionsBtnToggle_icon {\n  width: 27px;\n  height: 27px;\n}\n.device-mobile .PostHeadAction .IconThreeDot {\n  width: 16px;\n  height: 16px;\n}", "",{"version":3,"sources":["webpack://./src/component/posts/_post/head/_components/action/_main/PostHeadAction.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,gBAAA;AACJ;;AAEA;EACI,6BAAA;AACJ;;AAMQ;EACI,WAAA;EACA,YAAA;AAHZ;AAMQ;EACI,WAAA;EACA,YAAA;AAJZ","sourcesContent":[".PostHeadAction_list-pc {\r\n    width: 18rem;\r\n    max-width: 100vw;\r\n}\r\n\r\n.PostHeadAction_list-mb {\r\n    max-height: calc(100% - 60px);\r\n}\r\n\r\n// -----\r\n\r\n.device-mobile {\r\n    .PostHeadAction {\r\n        .ActionsBtnToggle_icon {\r\n            width: 27px;\r\n            height: 27px;\r\n        }\r\n\r\n        .IconThreeDot {\r\n            width: 16px;\r\n            height: 16px;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/head/_components/picture_circle/PostHeadLayoutPictureCircle.scss":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/head/_components/picture_circle/PostHeadLayoutPictureCircle.scss ***!
  \*************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".device-mobile .PostHeadLayoutPictureCircle_img {\n  width: 30px;\n  height: 30px;\n}", "",{"version":3,"sources":["webpack://./src/component/posts/_post/head/_components/picture_circle/PostHeadLayoutPictureCircle.scss"],"names":[],"mappings":"AACI;EACI,WAAA;EACA,YAAA;AAAR","sourcesContent":[".device-mobile{\r\n    .PostHeadLayoutPictureCircle_img{\r\n        width: 30px;\r\n        height: 30px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/head/_components/time_permission/PostHeadTimePermission.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/head/_components/time_permission/PostHeadTimePermission.scss ***!
  \*********************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PostHeadTimePermission svg {\n  width: 12px;\n  height: 12px;\n}", "",{"version":3,"sources":["webpack://./src/component/posts/_post/head/_components/time_permission/PostHeadTimePermission.scss"],"names":[],"mappings":"AACI;EACI,WAAA;EACA,YAAA;AAAR","sourcesContent":[".PostHeadTimePermission{\r\n    svg{\r\n        width: 12px;\r\n        height: 12px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/head/group/_main/PostHeadGroup.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/head/group/_main/PostHeadGroup.scss ***!
  \********************************************************************************************************************************************************************************/
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/head/page/_main/PostHeadPage.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/head/page/_main/PostHeadPage.scss ***!
  \******************************************************************************************************************************************************************************/
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/head/to_user/_main/PostHeadToUser.scss":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/head/to_user/_main/PostHeadToUser.scss ***!
  \***********************************************************************************************************************************************************************************/
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/head/user/_main/PostHeadUser.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/head/user/_main/PostHeadUser.scss ***!
  \******************************************************************************************************************************************************************************/
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/tag_emoji/_main/PostTagAndEmoji.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/tag_emoji/_main/PostTagAndEmoji.scss ***!
  \*********************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PostTagAndEmoji_start {\n  width: 28px;\n}\n.PostTagAndEmoji_start::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: -5px;\n  width: 25px;\n  height: 1px;\n  background-color: var(--md-bg-ccc);\n}", "",{"version":3,"sources":["webpack://./src/component/posts/_post/tag_emoji/_main/PostTagAndEmoji.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;AACJ;AACI;EACI,WAAA;EAEA,kBAAA;EACA,OAAA;EACA,SAAA;EAEA,WAAA;EACA,WAAA;EACA,kCAAA;AADR","sourcesContent":[".PostTagAndEmoji_start{\r\n    width: 28px;\r\n\r\n    &::after{\r\n        content: '';\r\n\r\n        position: absolute;\r\n        left: 0;\r\n        top: -5px;\r\n\r\n        width: 25px;\r\n        height: 1px;\r\n        background-color: var(--md-bg-ccc);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/text/_main/PostText.scss":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/text/_main/PostText.scss ***!
  \*********************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PostText-bg {\n  height: 350px;\n  max-height: 75vw;\n  padding: 10% 15%;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n}\n\n@media (max-width: 500px) {\n  .PostText-bg {\n    font-size: 15px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/component/posts/_post/text/_main/PostText.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,gBAAA;EACA,gBAAA;EAEA,0BAAA;EACA,4BAAA;AAAJ;;AAIA;EACI;IACI,eAAA;EADN;AACF","sourcesContent":[".PostText-bg {\r\n    height: 350px;\r\n    max-height: 75vw;\r\n    padding: 10% 15%;\r\n\r\n    background-size: 100% 100%;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n//\r\n@media (max-width: 500px) {\r\n    .PostText-bg {\r\n        font-size: 15px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/component/_screen/type/user_add/_main/ScreenUserAdd.scss":
/*!**********************************************************************!*\
  !*** ./src/component/_screen/type/user_add/_main/ScreenUserAdd.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ScreenUserAdd_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./ScreenUserAdd.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/_screen/type/user_add/_main/ScreenUserAdd.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ScreenUserAdd_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ScreenUserAdd_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/posts/_post/head/_components/_layout/PostHeadLayout.scss":
/*!********************************************************************************!*\
  !*** ./src/component/posts/_post/head/_components/_layout/PostHeadLayout.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostHeadLayout_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./PostHeadLayout.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/head/_components/_layout/PostHeadLayout.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostHeadLayout_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostHeadLayout_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/posts/_post/head/_components/action/_main/PostHeadAction.scss":
/*!*************************************************************************************!*\
  !*** ./src/component/posts/_post/head/_components/action/_main/PostHeadAction.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostHeadAction_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../node_modules/sass-loader/dist/cjs.js!./PostHeadAction.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/head/_components/action/_main/PostHeadAction.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostHeadAction_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostHeadAction_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/posts/_post/head/_components/picture_circle/PostHeadLayoutPictureCircle.scss":
/*!****************************************************************************************************!*\
  !*** ./src/component/posts/_post/head/_components/picture_circle/PostHeadLayoutPictureCircle.scss ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostHeadLayoutPictureCircle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./PostHeadLayoutPictureCircle.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/head/_components/picture_circle/PostHeadLayoutPictureCircle.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostHeadLayoutPictureCircle_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostHeadLayoutPictureCircle_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/posts/_post/head/_components/time_permission/PostHeadTimePermission.scss":
/*!************************************************************************************************!*\
  !*** ./src/component/posts/_post/head/_components/time_permission/PostHeadTimePermission.scss ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostHeadTimePermission_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./PostHeadTimePermission.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/head/_components/time_permission/PostHeadTimePermission.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostHeadTimePermission_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostHeadTimePermission_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/posts/_post/head/group/_main/PostHeadGroup.scss":
/*!***********************************************************************!*\
  !*** ./src/component/posts/_post/head/group/_main/PostHeadGroup.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostHeadGroup_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./PostHeadGroup.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/head/group/_main/PostHeadGroup.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostHeadGroup_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostHeadGroup_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/posts/_post/head/page/_main/PostHeadPage.scss":
/*!*********************************************************************!*\
  !*** ./src/component/posts/_post/head/page/_main/PostHeadPage.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostHeadPage_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./PostHeadPage.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/head/page/_main/PostHeadPage.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostHeadPage_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostHeadPage_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/posts/_post/head/to_user/_main/PostHeadToUser.scss":
/*!**************************************************************************!*\
  !*** ./src/component/posts/_post/head/to_user/_main/PostHeadToUser.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostHeadToUser_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./PostHeadToUser.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/head/to_user/_main/PostHeadToUser.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostHeadToUser_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostHeadToUser_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/posts/_post/head/user/_main/PostHeadUser.scss":
/*!*********************************************************************!*\
  !*** ./src/component/posts/_post/head/user/_main/PostHeadUser.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostHeadUser_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./PostHeadUser.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/head/user/_main/PostHeadUser.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostHeadUser_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostHeadUser_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/posts/_post/tag_emoji/_main/PostTagAndEmoji.scss":
/*!************************************************************************!*\
  !*** ./src/component/posts/_post/tag_emoji/_main/PostTagAndEmoji.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostTagAndEmoji_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PostTagAndEmoji.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/tag_emoji/_main/PostTagAndEmoji.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostTagAndEmoji_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostTagAndEmoji_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/posts/_post/text/_main/PostText.scss":
/*!************************************************************!*\
  !*** ./src/component/posts/_post/text/_main/PostText.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostText_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PostText.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/text/_main/PostText.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostText_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostText_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src__handle_api_post_HandleAPIPost_js-src__handle_api_post_cu_user_tag_js-src__some_function_-94dbb5.js.map