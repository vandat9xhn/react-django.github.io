(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src__handle_api_fb_group_topics_js-src_pages_group_page__components_topic_action_GroupPageTop-0350eb"],{

/***/ "./src/_default/_common/hag_tag.js":
/*!*****************************************!*\
  !*** ./src/_default/_common/hag_tag.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getRandomHashTag = undefined;

var _getRandomFromArr = __webpack_require__(/*! ./getRandomFromArr */ "./src/_default/_common/getRandomFromArr.js");

// HASH TAG
var default_arr_hash_tag = ['challenge', 'try_hard', 'racing', 'harry_potter', 'lmht', 'garena', 'cf'];

//
var getRandomHashTag = exports.getRandomHashTag = function getRandomHashTag() {
    return (0, _getRandomFromArr.getRandomFromArr)(default_arr_hash_tag);
};

/***/ }),

/***/ "./src/_default/fb_group/topics.js":
/*!*****************************************!*\
  !*** ./src/_default/fb_group/topics.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default_fb_group_topic_arr = undefined;

var _default_bool = __webpack_require__(/*! ../_common/default_bool */ "./src/_default/_common/default_bool.js");

var _default_id = __webpack_require__(/*! ../_common/default_id */ "./src/_default/_common/default_id.js");

var _getDefaultArr = __webpack_require__(/*! ../_common/getDefaultArr */ "./src/_default/_common/getDefaultArr.js");

var _hag_tag = __webpack_require__(/*! ../_common/hag_tag */ "./src/_default/_common/hag_tag.js");

//
var default_fb_group_topic_obj = function default_fb_group_topic_obj(_ref) {
    var visible = _ref.visible,
        pinned = _ref.pinned;

    return {
        id: (0, _default_id.getRandomId)(),
        hash_tag: (0, _hag_tag.getRandomHashTag)(),
        post_count: (0, _default_id.getRandomNumber)(1, 200),
        is_hidden: visible ? false : (0, _default_bool.getRandomBool)(),
        pinned: pinned
    };
};

var default_fb_group_topic_arr = exports.default_fb_group_topic_arr = function default_fb_group_topic_arr(_ref2) {
    var _ref2$size = _ref2.size,
        size = _ref2$size === undefined ? 0 : _ref2$size,
        _ref2$c_count = _ref2.c_count,
        c_count = _ref2$c_count === undefined ? 0 : _ref2$c_count;

    return (0, _getDefaultArr.getDefaultArr)(function () {
        return default_fb_group_topic_obj({
            visible: size == 3,
            pinned: c_count == 0
        });
    }, size == 3 ? 0 : size, size);
};

/***/ }),

/***/ "./src/_handle_api/fb_group/topics.js":
/*!********************************************!*\
  !*** ./src/_handle_api/fb_group/topics.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handle_API_FbGroupTopic_L = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var handle_API_FbGroupTopic_L = exports.handle_API_FbGroupTopic_L = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
        var _ref2$c_count = _ref2.c_count,
            c_count = _ref2$c_count === undefined ? 0 : _ref2$c_count,
            _ref2$params = _ref2.params,
            params = _ref2$params === undefined ? {} : _ref2$params;
        var res, new_data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _topics.API_FbGroupTopic_L)(_extends({
                            page: 1,
                            size: 20,
                            c_count: c_count
                        }, params));

                    case 2:
                        res = _context.sent;


                        //
                        new_data = res.data.data;


                        if (params['size'] == 3) {
                            new_data.forEach(function (item, ix) {
                                if (ix == 0) {
                                    item.pinned = true;
                                } else {
                                    item.pinned = false;
                                }
                            });
                        }

                        // 
                        return _context.abrupt('return', _extends({}, res.data, {
                            data: new_data
                        }));

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function handle_API_FbGroupTopic_L(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _topics = __webpack_require__(/*! ../../api/api_django/fb_group/topics */ "./src/api/api_django/fb_group/topics.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/_icons_svg/pinned/IconPinned.js":
/*!*********************************************!*\
  !*** ./src/_icons_svg/pinned/IconPinned.js ***!
  \*********************************************/
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
// import './IconPinned.scss';

//
IconPinned.propTypes = {
    class_icon: _propTypes2.default.string,
    x: _propTypes2.default.number,
    y: _propTypes2.default.number,
    size_icon: _propTypes2.default.string,

    stroke: _propTypes2.default.string,
    stroke_width: _propTypes2.default.number,
    fill: _propTypes2.default.string
};

IconPinned.defaultProps = {
    class_icon: '',
    x: 0,
    y: 0,
    size_icon: '1rem',

    stroke: 'none',
    stroke_width: 0,
    fill: 'currentColor'
};

//
function IconPinned(_ref) {
    var class_icon = _ref.class_icon,
        x = _ref.x,
        y = _ref.y,
        size_icon = _ref.size_icon,
        stroke = _ref.stroke,
        stroke_width = _ref.stroke_width,
        fill = _ref.fill;

    //
    return _react2.default.createElement(
        'svg',
        {
            className: 'IconPinned rotate-45 ' + class_icon,
            viewBox: x + ' ' + y + ' 200 200',
            width: size_icon,
            height: size_icon,
            stroke: stroke,
            fill: fill,
            strokeLinecap: 'round',
            strokeWidth: stroke_width
        },
        _react2.default.createElement('path', { d: 'M53.0673 24.2403C56.9307 21.1799 66.0385 20.2021 66.0385 20.2021C95.4672 19.779 109.426 20.1421 131.976 20.2021C131.976 20.2021 140.546 21.3292 144.226 24.2403C151.133 29.7032 144.226 44.1429 144.226 44.1429C144.226 44.1429 132.773 50.8565 128.012 56.8343C116.741 70.9867 128.012 99.8123 128.012 99.8123L148.55 115.388C148.55 115.388 151.813 123.558 148.55 127.503C145.871 130.741 137.741 132.406 137.741 132.406C109.721 133.653 94.0509 133.59 66.0385 132.406C66.0385 132.406 56.1455 131.25 53.0673 127.503C49.8199 123.55 53.0673 115.388 53.0673 115.388L69.2813 99.8123C69.2813 99.8123 80.5522 70.9867 69.2813 56.8343C64.5206 50.8565 53.0673 44.1429 53.0673 44.1429C53.0673 44.1429 46.1659 29.7073 53.0673 24.2403Z' }),
        _react2.default.createElement('path', { d: 'M91.6206 143C91.6206 143 96.3591 136.072 101.349 136C106.447 135.927 111.438 143 111.438 143V172.211C111.438 172.211 107.331 180.085 101.349 179.999C95.4586 179.915 91.6206 172.211 91.6206 172.211V143Z' })
    );
}

exports.default = IconPinned;

/***/ }),

/***/ "./src/api/api_django/fb_group/topics.js":
/*!***********************************************!*\
  !*** ./src/api/api_django/fb_group/topics.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.API_FbGroupTopic_L = undefined;

var _AxiosDjango = __webpack_require__(/*! ../_axios/AxiosDjango */ "./src/api/api_django/_axios/AxiosDjango.js");

var _AxiosDjango2 = _interopRequireDefault(_AxiosDjango);

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _topics = __webpack_require__(/*! ../../../_default/fb_group/topics */ "./src/_default/fb_group/topics.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
var API_FbGroupTopic_L = exports.API_FbGroupTopic_L = function API_FbGroupTopic_L(params) {
    return (0, _ConstAPI.API_FakeReal)((0, _topics.default_fb_group_topic_arr)({ size: params['size'] }), function () {
        return (0, _AxiosDjango2.default)({
            url: 'api/facebook/group-topic-l/',
            method: 'GET',
            params: params
        });
    }, params);
};
//

/***/ }),

/***/ "./src/pages/group_page/_components/topic_action/GroupPageTopicAction.js":
/*!*******************************************************************************!*\
  !*** ./src/pages/group_page/_components/topic_action/GroupPageTopicAction.js ***!
  \*******************************************************************************/
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

var _useActionsMultiList2 = __webpack_require__(/*! ../../../../_hooks/useActionsMultiList */ "./src/_hooks/useActionsMultiList.js");

var _Actions = __webpack_require__(/*! ../../../../component/actions/_main/Actions */ "./src/component/actions/_main/Actions.js");

var _Actions2 = _interopRequireDefault(_Actions);

var _ActionsMultiListContain = __webpack_require__(/*! ../../../../component/actions_multi_list/contain/ActionsMultiListContain */ "./src/component/actions_multi_list/contain/ActionsMultiListContain.js");

var _ActionsMultiListContain2 = _interopRequireDefault(_ActionsMultiListContain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GroupPageTopicAction.propTypes = {};

//
function GroupPageTopicAction(_ref) {
    var ix = _ref.ix,
        is_hidden = _ref.is_hidden,
        handleAction = _ref.handleAction;

    //
    var _useActionsMultiList = (0, _useActionsMultiList2.useActionsMultiList)({
        handle_API_L: handle_API_L
    }),
        list_action_arr = _useActionsMultiList.list_action_arr,
        is_fetching = _useActionsMultiList.is_fetching,
        has_fetched = _useActionsMultiList.has_fetched,
        is_true = _useActionsMultiList.is_true,
        setStateObj = _useActionsMultiList.setStateObj,
        toggleBool = _useActionsMultiList.toggleBool,
        handleClose = _useActionsMultiList.handleClose,
        callbackOpen = _useActionsMultiList.callbackOpen,
        callbackClose = _useActionsMultiList.callbackClose;

    // --------

    //


    function handle_API_L() {
        return is_hidden ? [[{ name: 'unhide', title: 'Unhide topic' }]] : [[{ name: 'hide', title: 'Hide topic' }]];
    }

    //
    function onAction() {
        var action_name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        handleAction({ ix: ix, action_name: action_name });
    }

    //
    (0, _react.useEffect)(function () {
        if (has_fetched) {
            setStateObj(function (state_obj) {
                return _extends({}, state_obj, {
                    list_action_arr: is_hidden ? [[{ name: 'unhide', title: 'Unhide topic' }]] : [[{ name: 'hide', title: 'Hide topic' }]]
                });
            });
        }
    }, [is_hidden]);

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _Actions2.default,
            {
                class_action_contain: 'action-contain-pc',
                class_action_contain_mb: 'action-contain-mb-bottom',
                is_show: is_true
                //
                , x_always: 'right'
                //
                , toggleShow: toggleBool,
                handleClose: handleClose,
                callbackOpen: callbackOpen,
                callbackClose: callbackClose
            },
            _react2.default.createElement(_ActionsMultiListContain2.default, {
                list_action_arr: list_action_arr,
                is_fetching: is_fetching,
                class_separate: 'h-1px'
                //
                // ComponentItem={ComponentItem}
                , handleAction: onAction,
                handleClose: handleClose
            })
        )
    );
}

exports.default = GroupPageTopicAction;

/***/ }),

/***/ "./src/pages/group_page/_components/topic_info/GroupPageTopicInfo.js":
/*!***************************************************************************!*\
  !*** ./src/pages/group_page/_components/topic_info/GroupPageTopicInfo.js ***!
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
GroupPageTopicInfo.propTypes = {};

//
function GroupPageTopicInfo(_ref) {
    var post_count = _ref.post_count,
        is_hidden = _ref.is_hidden,
        pinned = _ref.pinned;

    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupPageTopicInfo' },
        is_hidden ? 'Hidden by admin · ' : pinned ? 'Pinned by admin · ' : '',
        post_count,
        ' post',
        post_count >= 2 ? 's' : ''
    );
}

exports.default = GroupPageTopicInfo;

/***/ }),

/***/ "./src/pages/group_page/_components/topic_title/GroupPageTopicTitle.js":
/*!*****************************************************************************!*\
  !*** ./src/pages/group_page/_components/topic_title/GroupPageTopicTitle.js ***!
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

var _IconPinned = __webpack_require__(/*! ../../../../_icons_svg/pinned/IconPinned */ "./src/_icons_svg/pinned/IconPinned.js");

var _IconPinned2 = _interopRequireDefault(_IconPinned);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GroupPageTopicTitle.propTypes = {};

//

//
function GroupPageTopicTitle(_ref) {
    var group_id = _ref.group_id,
        hash_tag = _ref.hash_tag,
        is_hidden = _ref.is_hidden,
        pinned = _ref.pinned,
        _ref$use_hash_charact = _ref.use_hash_character,
        use_hash_character = _ref$use_hash_charact === undefined ? true : _ref$use_hash_charact,
        size_icon = _ref.size_icon;

    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupPageTopicTitle' },
        _react2.default.createElement(
            _reactRouterDom.Link,
            {
                className: 'inline-block margin-right-5px color-inherit font-600 hv-underline ' + (is_hidden ? 'opacity-04' : ''),
                to: '/hashtag?q=' + hash_tag + '&group_id=' + group_id
            },
            use_hash_character ? '#' : '',
            hash_tag
        ),
        pinned ? _react2.default.createElement(_IconPinned2.default, { class_icon: 'inline-block', size_icon: size_icon }) : null
    );
}

exports.default = GroupPageTopicTitle;

/***/ })

}]);
//# sourceMappingURL=src__handle_api_fb_group_topics_js-src_pages_group_page__components_topic_action_GroupPageTop-0350eb.js.map