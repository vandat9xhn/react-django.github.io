(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src__icons_svg_icon_private_IconPrivate_js-src_component_actions_group_other_ActionsGroupOthe-2fddc5"],{

/***/ "./src/_data/fb_group/actions.js":
/*!***************************************!*\
  !*** ./src/_data/fb_group/actions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
// OTHER

var data_fb_group_action_other_obj = exports.data_fb_group_action_other_obj = {
    your_content: {
        name: 'your_content',
        title: 'Your content',
        info: ''
    },
    share: {
        name: 'share',
        title: 'Share',
        info: ''
    },
    pin: {
        name: 'pin',
        title: 'Pin group',
        info: ''
    },
    report: {
        name: 'report',
        title: 'Report group',
        info: ''
    }
};

// JOINED

//
var data_fb_group_action_joined_obj = exports.data_fb_group_action_joined_obj = {
    notice: {
        name: 'notice',
        title: 'Mange notifications',
        info: ''
    },
    unfollow: {
        name: 'unfollow',
        title: 'Unfollow group',
        info: ''
    },
    leave: {
        name: 'leave',
        title: 'Leave group',
        info: ''
    }
};

/***/ }),

/***/ "./src/_default/fb_group/actions_joined.js":
/*!*************************************************!*\
  !*** ./src/_default/fb_group/actions_joined.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default_fb_group_joined_action_arr = undefined;

var _actions = __webpack_require__(/*! ../../_data/fb_group/actions */ "./src/_data/fb_group/actions.js");

//
var default_fb_group_joined_action_arr = exports.default_fb_group_joined_action_arr = function default_fb_group_joined_action_arr() {
    return [[_actions.data_fb_group_action_joined_obj.notice, _actions.data_fb_group_action_joined_obj.unfollow], [_actions.data_fb_group_action_joined_obj.leave]];
};

/***/ }),

/***/ "./src/_default/fb_group/actions_other.js":
/*!************************************************!*\
  !*** ./src/_default/fb_group/actions_other.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default_fb_group_other_action_arr = undefined;

var _actions = __webpack_require__(/*! ../../_data/fb_group/actions */ "./src/_data/fb_group/actions.js");

//
var default_fb_group_other_action_arr = exports.default_fb_group_other_action_arr = function default_fb_group_other_action_arr() {
    return [[_actions.data_fb_group_action_other_obj.your_content, _actions.data_fb_group_action_other_obj.pin, _actions.data_fb_group_action_other_obj.share, _actions.data_fb_group_action_other_obj.report]];
};

/***/ }),

/***/ "./src/_handle_api/fb_group/action.js":
/*!********************************************!*\
  !*** ./src/_handle_api/fb_group/action.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handle_API_GroupActions_L = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var handle_API_GroupActions_L = exports.handle_API_GroupActions_L = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
        var _ref2$group_id = _ref2.group_id,
            group_id = _ref2$group_id === undefined ? 0 : _ref2$group_id,
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
                        return (0, _action.API_GroupActions_L)(_extends({
                            group_model: group_id,
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

    return function handle_API_GroupActions_L(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _action = __webpack_require__(/*! ../../api/api_django/fb_group/action */ "./src/api/api_django/fb_group/action.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/_icons_svg/icon_private/IconPrivate.js":
/*!****************************************************!*\
  !*** ./src/_icons_svg/icon_private/IconPrivate.js ***!
  \****************************************************/
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
IconPrivate.propTypes = {
    size_icon: _propTypes2.default.string,
    stroke: _propTypes2.default.string
};

IconPrivate.defaultProps = {
    size_icon: '1rem',
    stroke: 'var(--md-color)'
};

//
function IconPrivate(_ref) {
    var size_icon = _ref.size_icon,
        stroke = _ref.stroke;

    //
    return _react2.default.createElement(
        'svg',
        {
            width: size_icon,
            height: size_icon,
            viewBox: '0 0 200 200',
            stroke: stroke,
            strokeLinejoin: 'round'
        },
        _react2.default.createElement('path', {
            d: 'M35 185V83.2216H165V185H35Z',
            fill: stroke,
            strokeWidth: '15'
        }),
        _react2.default.createElement('path', {
            d: 'M139.342 83.2217C139.342 83.2217 139.342 65.5908 139.342 49.5627C139.342 33.0701 119.263\r 16.3218 101.711 15.1023C81.8786 13.7244 57.2368 26.3219 57.2368 49.5627C57.2368 67.0889\r 57.2368 83.2217 57.2368 83.2217',
            strokeWidth: '20',
            fill: 'none'
        }),
        _react2.default.createElement('path', {
            d: 'M80.2326 158L90.876 136.877C90.876 136.877 78.1384 126.503 80.2326 119.004C82.3196\r 111.531 89.3841 106.21 99.3907 106.006C109.712 105.795 116.989 111.382 119.613\r 119.004C122.052  126.088 109.5 136.877 109.5 136.877L119.613 158H80.2326Z',
            fill: 'white'
        })
    );
}

exports.default = IconPrivate;

/***/ }),

/***/ "./src/api/api_django/fb_group/action.js":
/*!***********************************************!*\
  !*** ./src/api/api_django/fb_group/action.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.API_GroupActions_L = undefined;

var _AxiosDjango = __webpack_require__(/*! ../_axios/AxiosDjango */ "./src/api/api_django/_axios/AxiosDjango.js");

var _AxiosDjango2 = _interopRequireDefault(_AxiosDjango);

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _actions_other = __webpack_require__(/*! ../../../_default/fb_group/actions_other */ "./src/_default/fb_group/actions_other.js");

var _actions_joined = __webpack_require__(/*! ../../../_default/fb_group/actions_joined */ "./src/_default/fb_group/actions_joined.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
var API_GroupActions_L = exports.API_GroupActions_L = function API_GroupActions_L() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0, _ConstAPI.API_FakeReal)(params['type'] == 'other' ? (0, _actions_other.default_fb_group_other_action_arr)() : params['type'] == 'joined' ? (0, _actions_joined.default_fb_group_joined_action_arr)() : null, function () {
        return (0, _AxiosDjango2.default)({
            url: 'api/facebook/group-other-action-l',
            method: 'GET',
            params: params
        });
    });
};
//

/***/ }),

/***/ "./src/component/actions_group/other/ActionsGroupOther.js":
/*!****************************************************************!*\
  !*** ./src/component/actions_group/other/ActionsGroupOther.js ***!
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

var _action = __webpack_require__(/*! ../../../_handle_api/fb_group/action */ "./src/_handle_api/fb_group/action.js");

var _BtnGroupOther = __webpack_require__(/*! ../../button/group_actions/other/BtnGroupOther */ "./src/component/button/group_actions/other/BtnGroupOther.js");

var _BtnGroupOther2 = _interopRequireDefault(_BtnGroupOther);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//

//


//
ActionsGroupOther.propTypes = {};

//
function ActionsGroupOther(_ref) {
    //
    var getData_GroupActionsOther = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _action.handle_API_GroupActions_L)({
                                group_id: group_id,
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

        return function getData_GroupActionsOther() {
            return _ref2.apply(this, arguments);
        };
    }();

    //


    var group_id = _ref.group_id,
        class_action_contain = _ref.class_action_contain,
        is_at_body = _ref.is_at_body,
        handleAction = _ref.handleAction;
    return _react2.default.createElement(_BtnGroupOther2.default, {
        is_at_body: is_at_body,
        class_action_contain: class_action_contain
        //
        , handle_API_L: getData_GroupActionsOther,
        handleAction: handleAction
    });
}

exports.default = ActionsGroupOther;

/***/ }),

/***/ "./src/component/button/group_actions/join/BtnGroupJoin.js":
/*!*****************************************************************!*\
  !*** ./src/component/button/group_actions/join/BtnGroupJoin.js ***!
  \*****************************************************************/
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

var _IconGroup = __webpack_require__(/*! ../../../../_icons_svg/icon_group/IconGroup */ "./src/_icons_svg/icon_group/IconGroup.js");

var _IconGroup2 = _interopRequireDefault(_IconGroup);

var _BtnActions = __webpack_require__(/*! ../../actions/BtnActions */ "./src/component/button/actions/BtnActions.js");

var _BtnActions2 = _interopRequireDefault(_BtnActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
BtnGroupJoin.propTypes = _extends({}, _BtnActions2.default.propTypes);

BtnGroupJoin.defaultProps = {
    className: 'bg-ccc',
    title: 'Join Group',
    Icon: _react2.default.createElement(_IconGroup2.default, null)
};

//
function BtnGroupJoin(_ref) {
    var className = _ref.className,
        title = _ref.title,
        Icon = _ref.Icon,
        handleAction = _ref.handleAction;

    //
    function requestJoinGroup() {
        handleAction('join');
    }

    //
    return _react2.default.createElement(_BtnActions2.default, {
        className: 'BtnGroupJoin ' + className,
        title: title,
        Icon: Icon,
        handleClick: requestJoinGroup
    });
}

exports.default = BtnGroupJoin;

/***/ }),

/***/ "./src/component/button/group_actions/other/BtnGroupOther.js":
/*!*******************************************************************!*\
  !*** ./src/component/button/group_actions/other/BtnGroupOther.js ***!
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

var _BtnActionsOther = __webpack_require__(/*! ../../actions_other/BtnActionsOther */ "./src/component/button/actions_other/BtnActionsOther.js");

var _BtnActionsOther2 = _interopRequireDefault(_BtnActionsOther);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
BtnGroupOther.propTypes = {};

//

//
function BtnGroupOther(_ref) {
    var class_action_contain = _ref.class_action_contain,
        is_at_body = _ref.is_at_body,
        handle_API_L = _ref.handle_API_L,
        handleAction = _ref.handleAction;

    //
    return _react2.default.createElement(_BtnActionsOther2.default, {
        class_main: 'BtnGroupOther',
        class_btn: 'BtnGroupOther_btn',
        class_action_contain: class_action_contain,
        is_at_body: is_at_body
        // 
        , handle_API_L: handle_API_L,
        handleAction: handleAction
    });
}

exports.default = BtnGroupOther;

/***/ })

}]);
//# sourceMappingURL=src__icons_svg_icon_private_IconPrivate_js-src_component_actions_group_other_ActionsGroupOthe-2fddc5.js.map