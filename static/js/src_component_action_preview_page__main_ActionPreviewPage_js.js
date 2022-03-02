(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_component_action_preview_page__main_ActionPreviewPage_js"],{

/***/ "./src/_default/fb_page/preview.js":
/*!*****************************************!*\
  !*** ./src/_default/fb_page/preview.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default_fb_page_preview_arr = exports.default_fb_page_preview_obj = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _default_bool = __webpack_require__(/*! ../_common/default_bool */ "./src/_default/_common/default_bool.js");

var _default_content = __webpack_require__(/*! ../_common/default_content */ "./src/_default/_common/default_content.js");

var _default_id = __webpack_require__(/*! ../_common/default_id */ "./src/_default/_common/default_id.js");

var _default_user = __webpack_require__(/*! ../_common/default_user */ "./src/_default/_common/default_user.js");

var _getDefaultArr = __webpack_require__(/*! ../_common/getDefaultArr */ "./src/_default/_common/getDefaultArr.js");

var _getRandomFromArr = __webpack_require__(/*! ../_common/getRandomFromArr */ "./src/_default/_common/getRandomFromArr.js");

var _getRandomPageType = __webpack_require__(/*! ../_common/getRandomPageType */ "./src/_default/_common/getRandomPageType.js");

//
var default_fb_page_preview_obj = exports.default_fb_page_preview_obj = function default_fb_page_preview_obj() {
    var has_followed = (0, _default_bool.getRandomBool)();
    var has_liked = (0, _default_bool.getRandomBool)();

    // -----

    var action_case_arr = [];

    if (has_liked) {
        action_case_arr.push('like');
    } else if (has_followed) {
        action_case_arr.push('follow');
        (0, _default_bool.getRandomBool)() && action_case_arr.push('chat');
    } else {
        action_case_arr.push((0, _getRandomFromArr.getRandomFromArr)(['like', 'chat']));
    }

    if (action_case_arr.length == 1 && (0, _default_bool.getRandomBool)()) {
        action_case_arr.push((0, _getRandomFromArr.getRandomFromArr)(['learn_more', 'contact']));
    }

    // ------

    return _extends({}, (0, _default_user.getRandomPage)().page_obj, {

        following_count: (0, _default_id.getRandomNumber)(1, 20) * 1000,
        like_count: (0, _default_id.getRandomNumber)(1, 20) * 1000,
        has_followed: has_followed,
        has_liked: has_liked,

        type: (0, _getRandomPageType.getRandomPageType)(),
        description: (0, _default_content.getRandomContent)().slice(0, 50),
        web_link: 'https://fbshopeetgdd.web.app',
        phone: '0123456789',

        action_case_arr: action_case_arr.map(function (item) {
            return {
                action_name: item
            };
        })
    });
};

var default_fb_page_preview_arr = exports.default_fb_page_preview_arr = function default_fb_page_preview_arr() {
    return (0, _getDefaultArr.getDefaultArr)(default_fb_page_preview_obj, 16, 16);
};

/***/ }),

/***/ "./src/_handle_api/fb_page/preview.js":
/*!********************************************!*\
  !*** ./src/_handle_api/fb_page/preview.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handle_API_PagePreview_R = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var handle_API_PagePreview_R = exports.handle_API_PagePreview_R = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
        var _ref2$page_id = _ref2.page_id,
            page_id = _ref2$page_id === undefined ? 0 : _ref2$page_id,
            _ref2$params = _ref2.params,
            params = _ref2$params === undefined ? {} : _ref2$params;
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _preview.API_PagePreview_R)(_extends({
                            page_model: page_id
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

    return function handle_API_PagePreview_R(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _preview = __webpack_require__(/*! ../../api/api_django/fb_page/preview */ "./src/api/api_django/fb_page/preview.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/_icons_svg/icon_public/IconPublic.js":
/*!**************************************************!*\
  !*** ./src/_icons_svg/icon_public/IconPublic.js ***!
  \**************************************************/
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
IconPublic.propTypes = {
    size_icon: _propTypes2.default.string,
    stroke: _propTypes2.default.string
};

IconPublic.defaultProps = {
    size_icon: '1rem',
    stroke: 'var(--md-color)'
};

//
function IconPublic(_ref) {
    var size_icon = _ref.size_icon,
        stroke = _ref.stroke;

    //
    return _react2.default.createElement(
        'svg',
        {
            width: size_icon,
            height: size_icon,
            viewBox: '0 0 200 200',
            fill: 'none',
            strokeWidth: '5',
            stroke: stroke
        },
        _react2.default.createElement('circle', { cx: '100', cy: '100', r: '85', strokeWidth: '10' }),
        _react2.default.createElement('line', {
            x1: '99.3965',
            y1: '16.1017',
            x2: '99.3965',
            y2: '183.898',
            stroke: 'black'
        }),
        _react2.default.createElement('line', { x1: '10', y1: '97.5', x2: '184.569', y2: '97.5' }),
        _react2.default.createElement('path', {
            d: 'M55.1915 101.148C55.1915 64.7981 61.6037 18.555 99.4181 18.4258C137.303 18.2964 144.809\r 64.595 144.809 101.148C144.809 137.701 137.301 184.26 99.4181 183.87C61.7454 183.482 55.1915\r 137.498 55.1915 101.148Z'
        }),
        _react2.default.createElement('path', {
            d: 'M44.1027 34.5106C44.1027 34.5106 63.6271 62.4681 100.771 62.4681C137.915 62.4681 158.596\r 34.5106 158.596 34.5106M44.1027 163.957C44.1027 163.957 58.2654 140.895 100.771 140.596C143.277\r 140.297 158.596 163.957 158.596 163.957'
        })
    );
}

exports.default = IconPublic;

/***/ }),

/***/ "./src/_initial/page/preview.js":
/*!**************************************!*\
  !*** ./src/_initial/page/preview.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
        value: true
}));
//
var initial_page_preview = exports.initial_page_preview = function initial_page_preview() {
        return {
                id: 0,
                name: '',
                picture: '',

                following_count: 0,
                like_count: 0,
                has_followed: false,
                has_liked: false,

                type: '',
                description: '',
                web_link: '',
                phone: '',

                action_case_arr: []
        };
};

/***/ }),

/***/ "./src/api/api_django/fb_page/preview.js":
/*!***********************************************!*\
  !*** ./src/api/api_django/fb_page/preview.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.API_PagePreview_R = undefined;

var _AxiosDjango = __webpack_require__(/*! ../_axios/AxiosDjango */ "./src/api/api_django/_axios/AxiosDjango.js");

var _AxiosDjango2 = _interopRequireDefault(_AxiosDjango);

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _preview = __webpack_require__(/*! ../../../_default/fb_page/preview */ "./src/_default/fb_page/preview.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
var API_PagePreview_R = exports.API_PagePreview_R = function API_PagePreview_R(params) {
    return (0, _ConstAPI.API_FakeReal)((0, _preview.default_fb_page_preview_obj)(), function () {
        return (0, _AxiosDjango2.default)({
            url: 'api/facebook/fb-page-preview-r/',
            method: 'GET',
            params: params
        });
    }, params);
};
//

/***/ }),

/***/ "./src/component/action_preview_page/_main/ActionPreviewPage.js":
/*!**********************************************************************!*\
  !*** ./src/component/action_preview_page/_main/ActionPreviewPage.js ***!
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

var _Constant = __webpack_require__(/*! ../../../_constant/Constant */ "./src/_constant/Constant.js");

var _ActionPreviewPagePc = __webpack_require__(/*! ../pc/ActionPreviewPagePc */ "./src/component/action_preview_page/pc/ActionPreviewPagePc.js");

var _ActionPreviewPagePc2 = _interopRequireDefault(_ActionPreviewPagePc);

var _PageTick = __webpack_require__(/*! ../../page_name_tick/tick/PageTick */ "./src/component/page_name_tick/tick/PageTick.js");

var _PageTick2 = _interopRequireDefault(_PageTick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
ActionPreviewPage.propTypes = {};

//

//
function ActionPreviewPage(_ref) {
    var page_id = _ref.page_id,
        has_tick = _ref.has_tick,
        title_action = _ref.title_action,
        pos_orientation = _ref.pos_orientation,
        x_always = _ref.x_always,
        y_always = _ref.y_always;

    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _Constant.IS_MOBILE ? title_action : _react2.default.createElement(_ActionPreviewPagePc2.default, {
            page_id: page_id,
            title_action: title_action
            //
            , pos_orientation: pos_orientation,
            x_always: x_always,
            y_always: y_always
        }),
        has_tick ? _react2.default.createElement(
            'span',
            { className: 'inline-flex align-items-center margin-left-5px' },
            _react2.default.createElement(_PageTick2.default, null)
        ) : null
    );
}

exports.default = ActionPreviewPage;

/***/ }),

/***/ "./src/component/action_preview_page/pc/ActionPreviewPagePc.js":
/*!*********************************************************************!*\
  !*** ./src/component/action_preview_page/pc/ActionPreviewPagePc.js ***!
  \*********************************************************************/
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

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _preview = __webpack_require__(/*! ../../../_initial/page/preview */ "./src/_initial/page/preview.js");

var _preview2 = __webpack_require__(/*! ../../../_handle_api/fb_page/preview */ "./src/_handle_api/fb_page/preview.js");

var _useMounted = __webpack_require__(/*! ../../../_hooks/useMounted */ "./src/_hooks/useMounted.js");

var _IconPublic = __webpack_require__(/*! ../../../_icons_svg/icon_public/IconPublic */ "./src/_icons_svg/icon_public/IconPublic.js");

var _IconPublic2 = _interopRequireDefault(_IconPublic);

var _IconTablePhone = __webpack_require__(/*! ../../../_icons_svg/icon_table_phone/IconTablePhone */ "./src/_icons_svg/icon_table_phone/IconTablePhone.js");

var _IconTablePhone2 = _interopRequireDefault(_IconTablePhone);

var _ActionPreviewPc = __webpack_require__(/*! ../../action_preview/pc/ActionPreviewPc */ "./src/component/action_preview/pc/ActionPreviewPc.js");

var _ActionPreviewPc2 = _interopRequireDefault(_ActionPreviewPc);

var _ActionsPreviewInfo = __webpack_require__(/*! ../../action_preview/info/ActionsPreviewInfo */ "./src/component/action_preview/info/ActionsPreviewInfo.js");

var _ActionsPreviewInfo2 = _interopRequireDefault(_ActionsPreviewInfo);

var _ActionsPageOther = __webpack_require__(/*! ../../actions_page/other/ActionsPageOther */ "./src/component/actions_page/other/ActionsPageOther.js");

var _ActionsPageOther2 = _interopRequireDefault(_ActionsPageOther);

var _BtnPageCase = __webpack_require__(/*! ../../button/page_actions/_case/BtnPageCase */ "./src/component/button/page_actions/_case/BtnPageCase.js");

var _BtnPageCase2 = _interopRequireDefault(_BtnPageCase);

var _PageTickBtn = __webpack_require__(/*! ../../page_name_tick/tick/PageTickBtn */ "./src/component/page_name_tick/tick/PageTickBtn.js");

var _PageTickBtn2 = _interopRequireDefault(_PageTickBtn);

__webpack_require__(/*! ./ActionPreviewPagePc.scss */ "./src/component/action_preview_page/pc/ActionPreviewPagePc.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
function ActionsCaseComponent(_ref) {
    var item = _ref.item,
        page_id = _ref.page_id,
        handleAction = _ref.handleAction;

    return _react2.default.createElement(_BtnPageCase2.default, {
        action_name: item.action_name,
        page_id: page_id,
        has_liked: item.has_liked,
        has_followed: item.has_followed
        //
        , handleAction: handleAction
    });
}

//
var ActionsOtherComponent = function ActionsOtherComponent(_ref2) {
    var page_id = _ref2.page_id,
        class_action_contain = _ref2.class_action_contain,
        handleAction = _ref2.handleAction;
    return _react2.default.createElement(_ActionsPageOther2.default, {
        page_id: page_id,
        is_at_body: true,
        class_action_contain: class_action_contain,
        handleAction: handleAction
    });
};

//
ActionPreviewPagePc.propTypes = {};

//
function ActionPreviewPagePc(_ref3) {

    // --------

    //
    var getPageInfo = function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            setPageState(_extends({}, page_state, {
                                is_fetching: true
                            }));

                            _context.next = 3;
                            return (0, _preview2.handle_API_PagePreview_R)({ page_id: page_id });

                        case 3:
                            data = _context.sent;

                            if (mounted) {
                                _context.next = 6;
                                break;
                            }

                            return _context.abrupt('return');

                        case 6:

                            setPageState(_extends({}, page_state, {
                                page: data,
                                is_fetching: false,
                                has_fetched: true
                            }));

                        case 7:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function getPageInfo() {
            return _ref4.apply(this, arguments);
        };
    }();

    //


    var page_id = _ref3.page_id,
        title_action = _ref3.title_action,
        pos_orientation = _ref3.pos_orientation,
        x_always = _ref3.x_always,
        y_always = _ref3.y_always;

    //
    var _useState = (0, _react.useState)({
        page: (0, _preview.initial_page_preview)(),
        is_fetching: false,
        has_fetched: false
    }),
        _useState2 = _slicedToArray(_useState, 2),
        page_state = _useState2[0],
        setPageState = _useState2[1];

    var page = page_state.page,
        is_fetching = page_state.is_fetching,
        has_fetched = page_state.has_fetched;
    var id = page.id,
        name = page.name,
        picture = page.picture,
        has_tick = page.has_tick,
        type = page.type,
        description = page.description,
        web_link = page.web_link,
        phone = page.phone,
        action_case_arr = page.action_case_arr;

    //

    var mounted = (0, _useMounted.useMounted)();function handleAction() {
        var action_name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        console.log(action_name);
    }

    // ------

    var page_preview_arr = [{
        component: _ActionsPreviewInfo2.default,
        can_show: true,
        props: {
            Icon: null,
            info: '',
            title: type
        }
    }, {
        component: _ActionsPreviewInfo2.default,
        can_show: true,
        props: {
            Icon: null,
            info: '',
            title: description
        }
    }, {
        component: _ActionsPreviewInfo2.default,
        can_show: web_link,
        props: {
            Icon: _react2.default.createElement(_IconPublic2.default, null),
            info: '',
            title: _react2.default.createElement(
                'a',
                { href: web_link, target: '_blank' },
                web_link.slice(8)
            )
        }
    }, {
        component: _ActionsPreviewInfo2.default,
        can_show: phone,
        props: {
            Icon: _react2.default.createElement(_IconTablePhone2.default, null),
            info: '',
            title: phone
        }
    }];

    //
    return _react2.default.createElement(_ActionPreviewPc2.default, {
        title_action: title_action,
        class_action_contain: 'ActionPreviewPagePc'
        //
        , pos_orientation: pos_orientation,
        x_always: x_always,
        y_always: y_always
        //
        , id: id,
        name: _react2.default.createElement(
            'span',
            null,
            name,
            ' ',
            has_tick ? _react2.default.createElement(
                'span',
                { className: 'ActionPreviewPagePc_tick inline-block' },
                _react2.default.createElement(_PageTickBtn2.default, { size_icon: '16px' })
            ) : null
        ),
        picture: picture,
        link_to: '/page/' + id
        //
        , is_fetching: is_fetching,
        has_fetched: has_fetched
        //
        , preview_arr: page_preview_arr,
        action_case_arr: action_case_arr,
        case_props: { page_id: id },
        other_case_props: { page_id: id }
        //
        , getData_API: getPageInfo,
        handleAction: handleAction,
        ActionsCaseComponent: ActionsCaseComponent,
        ActionsOtherComponent: ActionsOtherComponent
    });
}

exports.default = ActionPreviewPagePc;

/***/ }),

/***/ "./src/component/actions_hold/pc/ActionsHoldPc.js":
/*!********************************************************!*\
  !*** ./src/component/actions_hold/pc/ActionsHoldPc.js ***!
  \********************************************************/
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

var _useHold3 = __webpack_require__(/*! ../../../_hooks/useHold */ "./src/_hooks/useHold.js");

var _ActionsPc = __webpack_require__(/*! ../../actions/pc/_main/ActionsPc */ "./src/component/actions/pc/_main/ActionsPc.js");

var _ActionsPc2 = _interopRequireDefault(_ActionsPc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
ActionsHoldPc.propTypes = {};

//
function ActionsHoldPc(_ref) {
    var title_action = _ref.title_action,
        class_action_contain = _ref.class_action_contain,
        children = _ref.children,
        scroll_elm = _ref.scroll_elm,
        x_always = _ref.x_always,
        transform_x_more = _ref.transform_x_more,
        y_always = _ref.y_always,
        transform_y_more = _ref.transform_y_more,
        _ref$time_hold = _ref.time_hold,
        time_hold = _ref$time_hold === undefined ? 500 : _ref$time_hold,
        _ref$time_leave = _ref.time_leave,
        time_leave = _ref$time_leave === undefined ? 800 : _ref$time_leave,
        force_close = _ref.force_close,
        use_caret = _ref.use_caret,
        callbackOpen = _ref.callbackOpen,
        callbackClose = _ref.callbackClose;

    //
    var _useState = (0, _react.useState)(0),
        _useState2 = _slicedToArray(_useState, 2),
        show_count = _useState2[0],
        setShowCount = _useState2[1];

    //


    var _useHold = (0, _useHold3.useHold)({
        time: time_hold
    }),
        StartHoldEnter = _useHold.StartHold,
        StopHoldEnter = _useHold.StopHold;

    var _useHold2 = (0, _useHold3.useHold)({
        time: time_leave
    }),
        StartHoldLeave = _useHold2.StartHold,
        StopHoldLeave = _useHold2.StopHold;

    //


    (0, _react.useEffect)(function () {
        StopHoldEnter();
        setShowCount(0);
    }, [force_close]);

    // -----

    //
    function handleChangeShowCount() {
        var is_up = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        setShowCount(function (show_count) {
            var new_show_count = show_count + (is_up ? 1 : -1);

            return new_show_count <= 0 ? 0 : 1;
        });
    }

    // ------

    //
    function handleMouseEnter() {
        StopHoldLeave();

        StartHoldEnter(function () {
            handleChangeShowCount(true);
        });
    }

    //
    function handleMouseLeave() {
        StopHoldEnter();

        StartHoldLeave(function () {
            handleChangeShowCount(false);
        });
    }

    //
    return _react2.default.createElement(
        _ActionsPc2.default,
        {
            title_action: _react2.default.createElement(
                'div',
                {
                    className: 'ActionsHoldPc_title display-inherit cursor-pointer hv-underline',
                    onMouseEnter: handleMouseEnter,
                    onMouseLeave: handleMouseLeave
                },
                title_action
            ),
            class_action_contain: class_action_contain,
            use_own_title: true,
            is_show: show_count > 0
            //
            , scroll_elm: scroll_elm
            //
            , x_always: x_always,
            transform_x_more: transform_x_more,
            y_always: y_always,
            transform_y_more: transform_y_more
            // 
            , use_caret: use_caret
            //
            // toggleShow={toggleShow}
            , callbackOpen: callbackOpen,
            callbackClose: callbackClose
        },
        _react2.default.createElement(
            'div',
            {
                className: 'ActionsHoldPc_contain',
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave
            },
            children
        )
    );
}

exports.default = ActionsHoldPc;

/***/ }),

/***/ "./src/component/page_name_tick/tick/PageTick.js":
/*!*******************************************************!*\
  !*** ./src/component/page_name_tick/tick/PageTick.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Constant = __webpack_require__(/*! ../../../_constant/Constant */ "./src/_constant/Constant.js");

var _ActionsHoldPc = __webpack_require__(/*! ../../actions_hold/pc/ActionsHoldPc */ "./src/component/actions_hold/pc/ActionsHoldPc.js");

var _ActionsHoldPc2 = _interopRequireDefault(_ActionsHoldPc);

var _PageTickBtn = __webpack_require__(/*! ./PageTickBtn */ "./src/component/page_name_tick/tick/PageTickBtn.js");

var _PageTickBtn2 = _interopRequireDefault(_PageTickBtn);

__webpack_require__(/*! ./PageTick.scss */ "./src/component/page_name_tick/tick/PageTick.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
PageTick.propTypes = {
    size_icon: _PageTickBtn2.default.propTypes.size_icon
};

//

//

//
function PageTick(_ref) {
    var size_icon = _ref.size_icon;

    //
    return _Constant.IS_MOBILE ? _react2.default.createElement(_PageTickBtn2.default, { size_icon: size_icon }) : _react2.default.createElement(
        'div',
        { className: 'PageTick' },
        _react2.default.createElement(
            _ActionsHoldPc2.default,
            {
                title_action: _react2.default.createElement(_PageTickBtn2.default, { size_icon: size_icon }),
                class_action_contain: 'w-360px padding-16px'
                //
                , x_always: 'left',
                transform_x_more: -12
                //
                , time_leave: 100
                // use_caret={false}
            },
            _react2.default.createElement(
                'div',
                null,
                'A verified badge confirms that this is an authentic Page for this public figure, media company or brand.'
            )
        )
    );
}

exports.default = PageTick;

/***/ }),

/***/ "./src/component/page_name_tick/tick/PageTickBtn.js":
/*!**********************************************************!*\
  !*** ./src/component/page_name_tick/tick/PageTickBtn.js ***!
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

var _IconSent = __webpack_require__(/*! ../../../_icons_svg/icons_status_message/icon_sent/IconSent */ "./src/_icons_svg/icons_status_message/icon_sent/IconSent.js");

var _IconSent2 = _interopRequireDefault(_IconSent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PageTickBtn.propTypes = {
    size_icon: _IconSent2.default.propTypes.size_icon
};
//


PageTickBtn.defaultProps = {
    size_icon: '10px'
};

//
function PageTickBtn(_ref) {
    var size_icon = _ref.size_icon;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PageTickBtn pos-rel brs-50 bg-blue' },
        _react2.default.createElement(
            'div',
            { className: 'pos-abs-100 z-index-lv1 display-flex-center' },
            _react2.default.createElement(_IconSent2.default, { size_icon: size_icon, stroke: 'var(--white)' })
        )
    );
}

exports.default = PageTickBtn;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/action_preview_page/pc/ActionPreviewPagePc.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/action_preview_page/pc/ActionPreviewPagePc.scss ***!
  \********************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".ActionPreviewPagePc_tick .PageTickBtn {\n  width: 18px;\n  height: 18px;\n}", "",{"version":3,"sources":["webpack://./src/component/action_preview_page/pc/ActionPreviewPagePc.scss"],"names":[],"mappings":"AACI;EACI,WAAA;EACA,YAAA;AAAR","sourcesContent":[".ActionPreviewPagePc_tick{\r\n    .PageTickBtn{\r\n        width: 18px;\r\n        height: 18px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/page_name_tick/tick/PageTick.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/page_name_tick/tick/PageTick.scss ***!
  \******************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PageTick .ActionsHoldPc_title {\n  cursor: default;\n}\n\n.PageTickBtn {\n  width: 12px;\n  height: 12px;\n}", "",{"version":3,"sources":["webpack://./src/component/page_name_tick/tick/PageTick.scss"],"names":[],"mappings":"AACI;EACI,eAAA;AAAR;;AAIA;EACI,WAAA;EACA,YAAA;AADJ","sourcesContent":[".PageTick{\r\n    .ActionsHoldPc_title {\r\n        cursor: default;\r\n    }\r\n}\r\n\r\n.PageTickBtn{\r\n    width: 12px;\r\n    height: 12px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/component/action_preview_page/pc/ActionPreviewPagePc.scss":
/*!***********************************************************************!*\
  !*** ./src/component/action_preview_page/pc/ActionPreviewPagePc.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ActionPreviewPagePc_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./ActionPreviewPagePc.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/action_preview_page/pc/ActionPreviewPagePc.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ActionPreviewPagePc_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ActionPreviewPagePc_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/page_name_tick/tick/PageTick.scss":
/*!*********************************************************!*\
  !*** ./src/component/page_name_tick/tick/PageTick.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PageTick_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./PageTick.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/page_name_tick/tick/PageTick.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PageTick_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PageTick_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_component_action_preview_page__main_ActionPreviewPage_js.js.map