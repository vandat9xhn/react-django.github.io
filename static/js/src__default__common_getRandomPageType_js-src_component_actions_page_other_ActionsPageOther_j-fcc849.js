(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src__default__common_getRandomPageType_js-src_component_actions_page_other_ActionsPageOther_j-fcc849"],{

/***/ "./src/_data/fb_page/actions.js":
/*!**************************************!*\
  !*** ./src/_data/fb_page/actions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
//
var data_fb_page_action_other_obj = exports.data_fb_page_action_other_obj = {
    follow: {
        name: 'follow',
        title: 'Follow',
        info: ''
    },
    save: {
        name: 'save',
        title: 'Save',
        info: ''
    },
    share: {
        name: 'share',
        title: 'Share',
        info: ''
    },
    block: {
        name: 'block',
        title: 'Block Page',
        info: ''
    },
    support_report: {
        name: 'support_report',
        title: 'Find support or report page',
        info: ''
    }
};

/***/ }),

/***/ "./src/_default/_common/getRandomPageType.js":
/*!***************************************************!*\
  !*** ./src/_default/_common/getRandomPageType.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getRandomPageType = getRandomPageType;

var _getRandomFromArr = __webpack_require__(/*! ./getRandomFromArr */ "./src/_default/_common/getRandomFromArr.js");

//
function getRandomPageType() {
    return (0, _getRandomFromArr.getRandomFromArr)(['supermarket', 'Just for fun', 'Community', 'School/university']);
}

/***/ }),

/***/ "./src/_default/fb_page/actions_other.js":
/*!***********************************************!*\
  !*** ./src/_default/fb_page/actions_other.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default_fb_page_other_action_arr = undefined;

var _actions = __webpack_require__(/*! ../../_data/fb_page/actions */ "./src/_data/fb_page/actions.js");

//
var default_fb_page_other_action_arr = exports.default_fb_page_other_action_arr = function default_fb_page_other_action_arr() {
    return [[_actions.data_fb_page_action_other_obj.follow, _actions.data_fb_page_action_other_obj.save, _actions.data_fb_page_action_other_obj.share, _actions.data_fb_page_action_other_obj.block, _actions.data_fb_page_action_other_obj.support_report]];
};

/***/ }),

/***/ "./src/_handle_api/fb_page/action.js":
/*!*******************************************!*\
  !*** ./src/_handle_api/fb_page/action.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handle_API_PageActions_L = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var handle_API_PageActions_L = exports.handle_API_PageActions_L = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
        var _ref2$page_id = _ref2.page_id,
            page_id = _ref2$page_id === undefined ? 0 : _ref2$page_id,
            _ref2$type = _ref2.type,
            type = _ref2$type === undefined ? '' : _ref2$type,
            _ref2$params = _ref2.params,
            params = _ref2$params === undefined ? {} : _ref2$params;
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _action.API_PageActions_L)(_extends({
                            page_model: page_id,
                            type: type
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

    return function handle_API_PageActions_L(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _action = __webpack_require__(/*! ../../api/api_django/fb_page/action */ "./src/api/api_django/fb_page/action.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/api/api_django/fb_page/action.js":
/*!**********************************************!*\
  !*** ./src/api/api_django/fb_page/action.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.API_PageActions_L = undefined;

var _AxiosDjango = __webpack_require__(/*! ../_axios/AxiosDjango */ "./src/api/api_django/_axios/AxiosDjango.js");

var _AxiosDjango2 = _interopRequireDefault(_AxiosDjango);

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _actions_other = __webpack_require__(/*! ../../../_default/fb_page/actions_other */ "./src/_default/fb_page/actions_other.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
var API_PageActions_L = exports.API_PageActions_L = function API_PageActions_L() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0, _ConstAPI.API_FakeReal)((0, _actions_other.default_fb_page_other_action_arr)(), function () {
        return (0, _AxiosDjango2.default)({
            url: 'api/facebook/page-other-action-l',
            method: 'GET',
            params: params
        });
    });
};
//

/***/ }),

/***/ "./src/component/actions_page/other/ActionsPageOther.js":
/*!**************************************************************!*\
  !*** ./src/component/actions_page/other/ActionsPageOther.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _action = __webpack_require__(/*! ../../../_handle_api/fb_page/action */ "./src/_handle_api/fb_page/action.js");

var _BtnActionsOther = __webpack_require__(/*! ../../button/actions_other/BtnActionsOther */ "./src/component/button/actions_other/BtnActionsOther.js");

var _BtnActionsOther2 = _interopRequireDefault(_BtnActionsOther);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//

//


//
ActionsPageOther.propTypes = {};

//
function ActionsPageOther(_ref) {
    //
    var getData_PageActionsOther = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _action.handle_API_PageActions_L)({
                                page_id: page_id,
                                type: 'other'
                            });

                        case 2:
                            data = _context.sent;
                            return _context.abrupt('return', data);

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function getData_PageActionsOther() {
            return _ref2.apply(this, arguments);
        };
    }();

    //


    var page_id = _ref.page_id,
        class_action_contain = _ref.class_action_contain,
        is_at_body = _ref.is_at_body,
        handleAction = _ref.handleAction;
    return _react2.default.createElement(_BtnActionsOther2.default, {
        class_main: 'BtnPageOther',
        class_btn: 'BtnPageOther_btn'
        //
        , is_at_body: is_at_body,
        class_action_contain: class_action_contain
        //
        , handle_API_L: getData_PageActionsOther,
        handleAction: handleAction
    });
}

exports.default = ActionsPageOther;

/***/ }),

/***/ "./src/component/button/page_actions/_case/BtnPageCase.js":
/*!****************************************************************!*\
  !*** ./src/component/button/page_actions/_case/BtnPageCase.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BtnPageLike = __webpack_require__(/*! ../../../button/page_actions/like/BtnPageLike */ "./src/component/button/page_actions/like/BtnPageLike.js");

var _BtnPageLike2 = _interopRequireDefault(_BtnPageLike);

var _BtnPageFollow = __webpack_require__(/*! ../../../button/page_actions/follow/BtnPageFollow */ "./src/component/button/page_actions/follow/BtnPageFollow.js");

var _BtnPageFollow2 = _interopRequireDefault(_BtnPageFollow);

var _BtnPageChat = __webpack_require__(/*! ../../../button/page_actions/chat/BtnPageChat */ "./src/component/button/page_actions/chat/BtnPageChat.js");

var _BtnPageChat2 = _interopRequireDefault(_BtnPageChat);

var _BtnPageContact = __webpack_require__(/*! ../../../button/page_actions/contact/BtnPageContact */ "./src/component/button/page_actions/contact/BtnPageContact.js");

var _BtnPageContact2 = _interopRequireDefault(_BtnPageContact);

var _BtnPageLearnMore = __webpack_require__(/*! ../../../button/page_actions/learn_more/BtnPageLearnMore */ "./src/component/button/page_actions/learn_more/BtnPageLearnMore.js");

var _BtnPageLearnMore2 = _interopRequireDefault(_BtnPageLearnMore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
BtnPageCase.propTypes = {};

//

//
function BtnPageCase(_ref) {
    var action_name = _ref.action_name,
        use_title = _ref.use_title,
        use_icon = _ref.use_icon,
        page_id = _ref.page_id,
        has_liked = _ref.has_liked,
        has_followed = _ref.has_followed,
        handleAction = _ref.handleAction;

    //
    if (action_name == 'like') {
        return _react2.default.createElement(_BtnPageLike2.default, {
            use_title: use_title,
            use_icon: use_icon,
            has_liked: has_liked,
            handleAction: handleAction
        });
    }

    //
    if (action_name == 'follow') {
        return _react2.default.createElement(_BtnPageFollow2.default, {
            use_title: use_title,
            use_icon: use_icon,
            has_followed: has_followed,
            handleAction: handleAction
        });
    }

    //
    if (action_name == 'chat') {
        return _react2.default.createElement(_BtnPageChat2.default, {
            page_id: page_id,
            use_title: use_title,
            use_icon: use_icon
        });
    }

    //
    if (action_name == 'contact') {
        return _react2.default.createElement(_BtnPageContact2.default, {
            use_title: use_title,
            use_icon: use_icon,
            handleAction: handleAction
        });
    }

    //
    if (action_name == 'learn_more') {
        return _react2.default.createElement(_BtnPageLearnMore2.default, {
            use_title: use_title,
            use_icon: use_icon,
            handleAction: handleAction
        });
    }

    //
    return null;
}

exports.default = BtnPageCase;

/***/ }),

/***/ "./src/component/button/page_actions/chat/BtnPageChat.js":
/*!***************************************************************!*\
  !*** ./src/component/button/page_actions/chat/BtnPageChat.js ***!
  \***************************************************************/
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

var _ContextAPI = __webpack_require__(/*! ../../../../_context/ContextAPI */ "./src/_context/ContextAPI.js");

var _IconsMenu = __webpack_require__(/*! ../../../../_icons_svg/icons_menu/IconsMenu */ "./src/_icons_svg/icons_menu/IconsMenu.js");

var _IconsMenu2 = _interopRequireDefault(_IconsMenu);

var _BtnActions = __webpack_require__(/*! ../../actions/BtnActions */ "./src/component/button/actions/BtnActions.js");

var _BtnActions2 = _interopRequireDefault(_BtnActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
BtnPageChat.propTypes = _extends({}, _BtnActions2.default.propTypes);

BtnPageChat.defaultProps = {
    Icon: _react2.default.createElement(_IconsMenu2.default, { x: 200, y: 200 }),
    title: 'Message',
    className: 'bg-ccc'
};

//
function BtnPageChat(_ref) {
    var page_id = _ref.page_id,
        className = _ref.className,
        Icon = _ref.Icon,
        title = _ref.title,
        use_title = _ref.use_title,
        use_icon = _ref.use_icon;

    //
    var _useContext = (0, _react.useContext)(_ContextAPI.context_api),
        openRoomChat = _useContext.openRoomChat;

    //


    function onChat() {
        openRoomChat(page_id);
    }

    //
    return _react2.default.createElement(_BtnActions2.default, {
        className: 'BtnPageChat ' + className,
        Icon: Icon,
        title: title,
        use_title: use_title,
        use_icon: use_icon,
        handleClick: onChat
    });
}

exports.default = BtnPageChat;

/***/ }),

/***/ "./src/component/button/page_actions/contact/BtnPageContact.js":
/*!*********************************************************************!*\
  !*** ./src/component/button/page_actions/contact/BtnPageContact.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BtnActions = __webpack_require__(/*! ../../actions/BtnActions */ "./src/component/button/actions/BtnActions.js");

var _BtnActions2 = _interopRequireDefault(_BtnActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
BtnPageContact.propTypes = _extends({}, _BtnActions2.default.propTypes);

BtnPageContact.defaultProps = {
    Icon: null,
    title: 'Contact',
    className: 'bg-ccc'
};

//
function BtnPageContact(_ref) {
    var className = _ref.className,
        Icon = _ref.Icon,
        title = _ref.title,
        use_title = _ref.use_title,
        use_icon = _ref.use_icon,
        handleAction = _ref.handleAction;

    //
    function onContact() {
        handleAction('contact');
    }

    //
    return _react2.default.createElement(_BtnActions2.default, {
        className: 'BtnPageContact ' + className,
        Icon: Icon,
        title: title,
        use_title: use_title,
        use_icon: use_icon,
        handleClick: onContact
    });
}

exports.default = BtnPageContact;

/***/ }),

/***/ "./src/component/button/page_actions/follow/BtnPageFollow.js":
/*!*******************************************************************!*\
  !*** ./src/component/button/page_actions/follow/BtnPageFollow.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
//

// 


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconFollow = __webpack_require__(/*! ../../../../_icons_svg/follow/IconFollow */ "./src/_icons_svg/follow/IconFollow.js");

var _IconFollow2 = _interopRequireDefault(_IconFollow);

var _BtnActions = __webpack_require__(/*! ../../actions/BtnActions */ "./src/component/button/actions/BtnActions.js");

var _BtnActions2 = _interopRequireDefault(_BtnActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
BtnPageFollow.propTypes = _extends({}, _BtnActions2.default.propTypes);

BtnPageFollow.defaultProps = {
    Icon: _react2.default.createElement(_IconFollow2.default, null),
    title: 'Follow',
    className: 'bg-ccc',
    classNameActive: 'BtnPageFollow-active bg-fb-active text-blue'
};

//
function BtnPageFollow(_ref) {
    var className = _ref.className,
        classNameActive = _ref.classNameActive,
        Icon = _ref.Icon,
        title = _ref.title,
        use_title = _ref.use_title,
        use_icon = _ref.use_icon,
        has_followed = _ref.has_followed,
        handleAction = _ref.handleAction;

    //
    function onFollow() {
        handleAction('follow');
    }

    //
    return _react2.default.createElement(_BtnActions2.default, {
        className: 'BtnPageFollow ' + (has_followed ? classNameActive : className),
        Icon: Icon,
        title: title,
        use_title: use_title,
        use_icon: use_icon,
        handleClick: onFollow
    });
}

exports.default = BtnPageFollow;

/***/ }),

/***/ "./src/component/button/page_actions/learn_more/BtnPageLearnMore.js":
/*!**************************************************************************!*\
  !*** ./src/component/button/page_actions/learn_more/BtnPageLearnMore.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BtnActions = __webpack_require__(/*! ../../actions/BtnActions */ "./src/component/button/actions/BtnActions.js");

var _BtnActions2 = _interopRequireDefault(_BtnActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

BtnPageLearnMore.propTypes = _extends({}, _BtnActions2.default.propTypes);

BtnPageLearnMore.defaultProps = {
    Icon: null,
    title: 'Learn more',
    className: 'bg-ccc'
};

//
function BtnPageLearnMore(_ref) {
    var className = _ref.className,
        Icon = _ref.Icon,
        title = _ref.title,
        use_title = _ref.use_title,
        use_icon = _ref.use_icon,
        handleAction = _ref.handleAction;

    //
    function onLearnMore() {
        handleAction('learn_more');
    }

    //
    return _react2.default.createElement(_BtnActions2.default, {
        className: 'BtnPageLearnMore ' + className,
        Icon: Icon,
        title: title,
        use_title: use_title,
        use_icon: use_icon,
        handleClick: onLearnMore
    });
}

exports.default = BtnPageLearnMore;

/***/ }),

/***/ "./src/component/button/page_actions/like/BtnPageLike.js":
/*!***************************************************************!*\
  !*** ./src/component/button/page_actions/like/BtnPageLike.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
//

//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconLike = __webpack_require__(/*! ../../../../_icons_svg/icons_like/icon_like/IconLike */ "./src/_icons_svg/icons_like/icon_like/IconLike.js");

var _IconLike2 = _interopRequireDefault(_IconLike);

var _BtnActions = __webpack_require__(/*! ../../actions/BtnActions */ "./src/component/button/actions/BtnActions.js");

var _BtnActions2 = _interopRequireDefault(_BtnActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
BtnPageLike.propTypes = _extends({}, _BtnActions2.default.propTypes);

BtnPageLike.defaultProps = {
    Icon: _react2.default.createElement(_IconLike2.default, { fill: 'currentColor', stroke: 'currentColor' }),
    title: 'Like',
    className: 'bg-ccc',
    classNameActive: 'bg-fb-active text-blue'
};

//
function BtnPageLike(_ref) {
    var className = _ref.className,
        classNameActive = _ref.classNameActive,
        Icon = _ref.Icon,
        title = _ref.title,
        use_title = _ref.use_title,
        use_icon = _ref.use_icon,
        has_liked = _ref.has_liked,
        handleAction = _ref.handleAction;

    //
    function handleLike() {
        handleAction('like');
    }

    //
    return _react2.default.createElement(_BtnActions2.default, {
        className: 'BtnPageLike ' + (has_liked ? classNameActive : className),
        Icon: Icon,
        title: title,
        use_title: use_title,
        use_icon: use_icon,
        handleClick: handleLike
    });
}

exports.default = BtnPageLike;

/***/ })

}]);
//# sourceMappingURL=src__default__common_getRandomPageType_js-src_component_actions_page_other_ActionsPageOther_j-fcc849.js.map