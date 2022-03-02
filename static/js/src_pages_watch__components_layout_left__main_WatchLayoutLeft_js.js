(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_watch__components_layout_left__main_WatchLayoutLeft_js"],{

/***/ "./src/_default/fb_watch/list.js":
/*!***************************************!*\
  !*** ./src/_default/fb_watch/list.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default_fb_watchlist_arr = undefined;

var _default_bool = __webpack_require__(/*! ../_common/default_bool */ "./src/_default/_common/default_bool.js");

var _default_id = __webpack_require__(/*! ../_common/default_id */ "./src/_default/_common/default_id.js");

var _default_image = __webpack_require__(/*! ../_common/default_image */ "./src/_default/_common/default_image.js");

var _default_name = __webpack_require__(/*! ../_common/default_name */ "./src/_default/_common/default_name.js");

var _getDefaultArr = __webpack_require__(/*! ../_common/getDefaultArr */ "./src/_default/_common/getDefaultArr.js");

//
var default_fb_watchlist_obj = function default_fb_watchlist_obj() {
    var has_follow = (0, _default_bool.getRandomBool)();
    var name = (0, _default_name.getRandomPageName)();

    return {
        id: (0, _default_id.getRandomId)(),
        name: name,
        picture: (0, _default_image.getRandomImg)(),

        count_new: (0, _default_bool.getRandomBool)() ? (0, _default_id.getRandomNumber)(0, 20) : 0,
        link_to: '/watch/' + name.toLowerCase().replace(/ /g, ''),
        has_notice: !has_follow ? false : (0, _default_bool.getRandomBool)(),
        has_follow: has_follow
    };
};

var default_fb_watchlist_arr = exports.default_fb_watchlist_arr = function default_fb_watchlist_arr() {
    return (0, _getDefaultArr.getDefaultArr)(default_fb_watchlist_obj, 16, 16);
};

/***/ }),

/***/ "./src/_handle_api/fb_watch/list.js":
/*!******************************************!*\
  !*** ./src/_handle_api/fb_watch/list.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handle_API_WatchList_L = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var handle_API_WatchList_L = exports.handle_API_WatchList_L = function () {
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
                        return (0, _list.API_WatchList_L)(_extends({
                            c_count: c_count,
                            size: 16,
                            page: 1
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

    return function handle_API_WatchList_L(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _list = __webpack_require__(/*! ../../api/api_django/fb_watch/list */ "./src/api/api_django/fb_watch/list.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/api/api_django/fb_watch/list.js":
/*!*********************************************!*\
  !*** ./src/api/api_django/fb_watch/list.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.API_WatchList_L = undefined;

var _AxiosDjango = __webpack_require__(/*! ../_axios/AxiosDjango */ "./src/api/api_django/_axios/AxiosDjango.js");

var _AxiosDjango2 = _interopRequireDefault(_AxiosDjango);

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _list = __webpack_require__(/*! ../../../_default/fb_watch/list */ "./src/_default/fb_watch/list.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
var API_WatchList_L = exports.API_WatchList_L = function API_WatchList_L(params) {
    return (0, _ConstAPI.API_FakeReal)((0, _list.default_fb_watchlist_arr)(), function () {
        return (0, _AxiosDjango2.default)({
            url: 'api/facebook/fb-watchlist-l/',
            method: 'GET',
            params: params
        });
    }, params, true);
};
//

/***/ }),

/***/ "./src/component/dot_count_new/DotCountNew.js":
/*!****************************************************!*\
  !*** ./src/component/dot_count_new/DotCountNew.js ***!
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
DotCountNew.propTypes = {};

//
function DotCountNew(_ref) {
    var title = _ref.title;

    //
    return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement('span', { className: 'inline-block padding-4px brs-50 bg-blue' }),
        _react2.default.createElement(
            'span',
            { className: 'margin-left-5px' },
            title
        )
    );
}

exports.default = DotCountNew;

/***/ }),

/***/ "./src/component/fb_search/input/_main/FbSearchInput.js":
/*!**************************************************************!*\
  !*** ./src/component/fb_search/input/_main/FbSearchInput.js ***!
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

var _useFbSearchInput2 = __webpack_require__(/*! ../../../../_hooks/search/useFbSearchInput */ "./src/_hooks/search/useFbSearchInput.js");

var _FbSearchInputElm = __webpack_require__(/*! ../elm/FbSearchInputElm */ "./src/component/fb_search/input/elm/FbSearchInputElm.js");

var _FbSearchInputElm2 = _interopRequireDefault(_FbSearchInputElm);

__webpack_require__(/*! ./FbSearchInput.scss */ "./src/component/fb_search/input/_main/FbSearchInput.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
FbSearchInput.propTypes = {};

//

//

//
function FbSearchInput(_ref) {
    var _ref$initial_value = _ref.initial_value,
        initial_value = _ref$initial_value === undefined ? '' : _ref$initial_value,
        _ref$initial_open = _ref.initial_open,
        initial_open = _ref$initial_open === undefined ? false : _ref$initial_open,
        _ref$always_open = _ref.always_open,
        always_open = _ref$always_open === undefined ? false : _ref$always_open,
        placeholder = _ref.placeholder,
        class_input = _ref.class_input,
        use_back = _ref.use_back,
        params_api = _ref.params_api;

    //
    var _useFbSearchInput = (0, _useFbSearchInput2.useFbSearchInput)({
        initial_value: initial_value,
        initial_open: initial_open,
        always_open: always_open
    }),
        is_open = _useFbSearchInput.is_open,
        show_contain = _useFbSearchInput.show_contain,
        value = _useFbSearchInput.value,
        handleFocus = _useFbSearchInput.handleFocus,
        handleChange = _useFbSearchInput.handleChange,
        handleClose = _useFbSearchInput.handleClose,
        onSearch = _useFbSearchInput.onSearch;

    //


    return _react2.default.createElement(_FbSearchInputElm2.default, {
        value: value,
        placeholder: placeholder,
        class_input: class_input
        //
        , is_open: is_open,
        show_contain: show_contain,
        use_back: use_back,
        params_api: params_api
        //
        , handleFocus: handleFocus,
        handleChange: handleChange,
        onSearch: onSearch,
        handleClose: handleClose
    });
}

exports.default = FbSearchInput;

/***/ }),

/***/ "./src/component/fb_settings/title/FbSettingsTitle.js":
/*!************************************************************!*\
  !*** ./src/component/fb_settings/title/FbSettingsTitle.js ***!
  \************************************************************/
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
FbSettingsTitle.propTypes = {};

//
function FbSettingsTitle(_ref) {
    var title = _ref.title,
        info = _ref.info;

    //
    return _react2.default.createElement(
        'div',
        { className: 'FbSettingsTitle' },
        _react2.default.createElement(
            'h2',
            { className: 'margin-bottom-5px font-17px font-600 line-20px' },
            title
        ),
        _react2.default.createElement(
            'div',
            { className: 'font-13px text-secondary line-16px' },
            info
        )
    );
}

exports.default = FbSettingsTitle;

/***/ }),

/***/ "./src/component/separate_line_scroll_toggle/SeparateLineScrollToggle.js":
/*!*******************************************************************************!*\
  !*** ./src/component/separate_line_scroll_toggle/SeparateLineScrollToggle.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _useBool2 = __webpack_require__(/*! ../../_hooks/useBool */ "./src/_hooks/useBool.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
SeparateLineScrollToggle.propTypes = {};

//

//
function SeparateLineScrollToggle(_ref) {
    var ref_scroll_elm = _ref.ref_scroll_elm;

    //
    var _useBool = (0, _useBool2.useBool)(),
        is_true = _useBool.is_true,
        setIsTrue = _useBool.setIsTrue;

    //


    (0, _react.useEffect)(function () {
        ref_scroll_elm.current.addEventListener('scroll', handleScroll);

        return function () {
            ref_scroll_elm.current && ref_scroll_elm.current.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // ----

    //
    function handleScroll(e) {
        setIsTrue(e.target.scrollTop > 0);
    }

    //
    return _react2.default.createElement('div', {
        className: 'SeparateLineScrollToggle h-1px bg-blur ' + (is_true ? '' : 'display-none')
    });
}

exports.default = SeparateLineScrollToggle;

/***/ }),

/***/ "./src/pages/watch/_components/layout/left/_components/list_title/WatchLayoutLeftListTitle.js":
/*!****************************************************************************************************!*\
  !*** ./src/pages/watch/_components/layout/left/_components/list_title/WatchLayoutLeftListTitle.js ***!
  \****************************************************************************************************/
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
WatchLayoutLeftListTitle.propTypes = {};

//
function WatchLayoutLeftListTitle(_ref) {
    var title = _ref.title,
        manage_name = _ref.manage_name,
        toggleMangeList = _ref.toggleMangeList;

    //
    return _react2.default.createElement(
        'div',
        { className: 'WatchLayoutLeftListTitle flex-between-center padding-left-8px' },
        _react2.default.createElement(
            'div',
            { className: 'font-17px font-600' },
            title
        ),
        _react2.default.createElement(
            'div',
            {
                className: 'padding-x-8px padding-y-6px brs-4px text-blue cursor-pointer hv-bg-blur',
                onClick: toggleMangeList
            },
            manage_name
        )
    );
}

exports.default = WatchLayoutLeftListTitle;

/***/ }),

/***/ "./src/pages/watch/_components/layout/left/_main/WatchLayoutLeft.js":
/*!**************************************************************************!*\
  !*** ./src/pages/watch/_components/layout/left/_main/WatchLayoutLeft.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _WatchLayoutHead = __webpack_require__(/*! ../head/_main/WatchLayoutHead */ "./src/pages/watch/_components/layout/left/head/_main/WatchLayoutHead.js");

var _WatchLayoutHead2 = _interopRequireDefault(_WatchLayoutHead);

var _WatchLayoutLeftNav = __webpack_require__(/*! ../nav/WatchLayoutLeftNav */ "./src/pages/watch/_components/layout/left/nav/WatchLayoutLeftNav.js");

var _WatchLayoutLeftNav2 = _interopRequireDefault(_WatchLayoutLeftNav);

var _SeparateLineScrollToggle = __webpack_require__(/*! ../../../../../../component/separate_line_scroll_toggle/SeparateLineScrollToggle */ "./src/component/separate_line_scroll_toggle/SeparateLineScrollToggle.js");

var _SeparateLineScrollToggle2 = _interopRequireDefault(_SeparateLineScrollToggle);

var _WatchLayoutLeftList = __webpack_require__(/*! ../list/_main/WatchLayoutLeftList */ "./src/pages/watch/_components/layout/left/list/_main/WatchLayoutLeftList.js");

var _WatchLayoutLeftList2 = _interopRequireDefault(_WatchLayoutLeftList);

__webpack_require__(/*! ./WatchLayoutLeft.scss */ "./src/pages/watch/_components/layout/left/_main/WatchLayoutLeft.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
WatchLayoutLeft.propTypes = {};

//

// 

//
function WatchLayoutLeft(props) {
    //
    var ref_scroll_elm = (0, _react.useRef)(null);

    //
    return _react2.default.createElement(
        'div',
        { className: 'WatchLayoutLeft display-flex flex-col h-100per' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_WatchLayoutHead2.default, null)
        ),
        _react2.default.createElement(
            'div',
            { className: 'padding-x-8px' },
            _react2.default.createElement(_SeparateLineScrollToggle2.default, { ref_scroll_elm: ref_scroll_elm })
        ),
        _react2.default.createElement(
            'div',
            {
                ref: ref_scroll_elm,
                className: 'flex-grow-1 flex-basis-1rem overflow-y-auto scroll-thin'
            },
            _react2.default.createElement(_WatchLayoutLeftNav2.default, { ref_scroll_elm: ref_scroll_elm }),
            _react2.default.createElement(
                'div',
                { className: 'margin-top-12px padding-x-8px' },
                _react2.default.createElement(_WatchLayoutLeftList2.default, { ref_scroll_elm: ref_scroll_elm })
            )
        )
    );
}

exports.default = WatchLayoutLeft;

/***/ }),

/***/ "./src/pages/watch/_components/layout/left/head/_main/WatchLayoutHead.js":
/*!*******************************************************************************!*\
  !*** ./src/pages/watch/_components/layout/left/head/_main/WatchLayoutHead.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FbSearchInput = __webpack_require__(/*! ../../../../../../../component/fb_search/input/_main/FbSearchInput */ "./src/component/fb_search/input/_main/FbSearchInput.js");

var _FbSearchInput2 = _interopRequireDefault(_FbSearchInput);

var _LeftBarTitleSettings = __webpack_require__(/*! ../../../../../../../component/side_bar/left/title_settings/LeftBarTitleSettings */ "./src/component/side_bar/left/title_settings/LeftBarTitleSettings.js");

var _LeftBarTitleSettings2 = _interopRequireDefault(_LeftBarTitleSettings);

var _WatchLayoutHeadSettings = __webpack_require__(/*! ../settings/_main/WatchLayoutHeadSettings */ "./src/pages/watch/_components/layout/left/head/settings/_main/WatchLayoutHeadSettings.js");

var _WatchLayoutHeadSettings2 = _interopRequireDefault(_WatchLayoutHeadSettings);

__webpack_require__(/*! ./WatchLayoutHead.scss */ "./src/pages/watch/_components/layout/left/head/_main/WatchLayoutHead.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
WatchLayoutHead.propTypes = {};

//

//
function WatchLayoutHead(props) {
    //
    return _react2.default.createElement(
        'div',
        { className: 'WatchLayoutHead padding-bottom-16px' },
        _react2.default.createElement(
            'div',
            { className: 'WatchLayoutHead_settings' },
            _react2.default.createElement(_LeftBarTitleSettings2.default, {
                title: 'Watch',
                setting_elm: _react2.default.createElement(_WatchLayoutHeadSettings2.default, null)
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'WatchLayoutHead_search left-bar-search' },
            _react2.default.createElement(_FbSearchInput2.default, {
                placeholder: 'Search videos',
                always_open: true,
                class_input: 'PostInputSearch_input-36px',
                use_back: false,
                params_api: { search_in: 'videos' }
            })
        )
    );
}

exports.default = WatchLayoutHead;

/***/ }),

/***/ "./src/pages/watch/_components/layout/left/head/settings/_main/WatchLayoutHeadSettings.js":
/*!************************************************************************************************!*\
  !*** ./src/pages/watch/_components/layout/left/head/settings/_main/WatchLayoutHeadSettings.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FbSettingsItemSwitchNotice = __webpack_require__(/*! ../../../../../../../../component/fb_settings/item/switch_notice/FbSettingsItemSwitchNotice */ "./src/component/fb_settings/item/switch_notice/FbSettingsItemSwitchNotice.js");

var _FbSettingsItemSwitchNotice2 = _interopRequireDefault(_FbSettingsItemSwitchNotice);

var _FbSettingsTitle = __webpack_require__(/*! ../../../../../../../../component/fb_settings/title/FbSettingsTitle */ "./src/component/fb_settings/title/FbSettingsTitle.js");

var _FbSettingsTitle2 = _interopRequireDefault(_FbSettingsTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
WatchLayoutHeadSettings.propTypes = {};

//
function WatchLayoutHeadSettings(props) {
    // ----

    // 
    function callbackSwitch() {}

    //
    return _react2.default.createElement(
        'div',
        { className: 'WatchLayoutHeadSettings padding-top-16px padding-bottom-8px padding-x-8px brs-8px bg-primary box-shadow-fb' },
        _react2.default.createElement(
            'div',
            { className: 'padding-x-8px padding-bottom-12px border-bottom-blur' },
            _react2.default.createElement(_FbSettingsTitle2.default, {
                title: 'Notification settings',
                info: 'You can manage how you are notified about Watch updates.'
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'padding-top-5px' },
            _react2.default.createElement(_FbSettingsItemSwitchNotice2.default, { callbackSwitch: callbackSwitch }),
            ';'
        )
    );
}

exports.default = WatchLayoutHeadSettings;

/***/ }),

/***/ "./src/pages/watch/_components/layout/left/list/_main/WatchLayoutLeftList.js":
/*!***********************************************************************************!*\
  !*** ./src/pages/watch/_components/layout/left/list/_main/WatchLayoutLeftList.js ***!
  \***********************************************************************************/
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

var _list = __webpack_require__(/*! ../../../../../../../_handle_api/fb_watch/list */ "./src/_handle_api/fb_watch/list.js");

var _useObserverShowMore2 = __webpack_require__(/*! ../../../../../../../_hooks/useObserverShowMore */ "./src/_hooks/useObserverShowMore.js");

var _useBool2 = __webpack_require__(/*! ../../../../../../../_hooks/useBool */ "./src/_hooks/useBool.js");

var _WatchLayoutLeftManage = __webpack_require__(/*! ../manage/_main/WatchLayoutLeftManage */ "./src/pages/watch/_components/layout/left/list/manage/_main/WatchLayoutLeftManage.js");

var _WatchLayoutLeftManage2 = _interopRequireDefault(_WatchLayoutLeftManage);

var _WatchLayoutLeftWatch = __webpack_require__(/*! ../watch/_main/WatchLayoutLeftWatch */ "./src/pages/watch/_components/layout/left/list/watch/_main/WatchLayoutLeftWatch.js");

var _WatchLayoutLeftWatch2 = _interopRequireDefault(_WatchLayoutLeftWatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
//

//

//


//
var LATEST_OBJ = {
    id: 0,
    name: 'Latest',
    picture: '',
    count_new: 0,
    link_to: '/watch/latest',
    has_follow: true,
    has_notice: true
};

//
WatchLayoutLeftList.propTypes = {};

//
function WatchLayoutLeftList(_ref) {
    var ref_scroll_elm = _ref.ref_scroll_elm;

    //
    var ref_fake_elm = (0, _react.useRef)(null);

    //

    var _useBool = (0, _useBool2.useBool)(),
        on_mange = _useBool.is_true,
        toggleOnManage = _useBool.toggleBool;

    //


    var _useObserverShowMore = (0, _useObserverShowMore2.useObserverShowMore)({
        initial_arr: [],
        handle_API_L: function handle_API_L(c_count) {
            return (0, _list.handle_API_WatchList_L)({ c_count: c_count });
        }
    }),
        data_state = _useObserverShowMore.data_state,
        setDataState = _useObserverShowMore.setDataState,
        is_max = _useObserverShowMore.is_max,
        getData_API = _useObserverShowMore.getData_API,
        observerShowMore = _useObserverShowMore.observerShowMore;

    var data_arr = data_state.data_arr;

    //

    (0, _react.useEffect)(function () {
        getData_API();

        observerShowMore({
            fake_elm_end: ref_fake_elm.current,
            root: ref_scroll_elm.current,
            way_scroll: 'to_bottom',
            margin: 0,
            rootMargin: '0px'
        });
    }, []);

    // ----

    //
    function toggleMangeList() {
        toggleOnManage();
    }

    //
    function toggleNotice(ix) {
        setDataState(function (data_state) {
            var new_data_arr = [].concat(_toConsumableArray(data_state.data_arr));
            new_data_arr[ix].has_notice = !new_data_arr[ix].has_notice;

            return _extends({}, data_state, {
                data_arr: new_data_arr
            });
        });
    }

    //
    function handleFollowVideos(ix) {
        setDataState(function (data_state) {
            var new_data_arr = [].concat(_toConsumableArray(data_state.data_arr));
            new_data_arr[ix].has_follow = true;

            return _extends({}, data_state, {
                data_arr: new_data_arr
            });
        });
    }

    //
    function handleUnFollowVideos(ix) {
        setDataState(function (data_state) {
            var new_data_arr = [].concat(_toConsumableArray(data_state.data_arr));
            new_data_arr[ix].has_follow = false;
            new_data_arr[ix].has_notice = false;

            return _extends({}, data_state, {
                data_arr: new_data_arr
            });
        });
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'WatchLayoutLeftList padding-y-10px border-top-blur' },
        on_mange ? _react2.default.createElement(_WatchLayoutLeftManage2.default, {
            watch_arr: data_arr,
            toggleMangeList: toggleMangeList,
            toggleNotice: toggleNotice,
            handleFollowVideos: handleFollowVideos,
            handleUnFollowVideos: handleUnFollowVideos
        }) : _react2.default.createElement(_WatchLayoutLeftWatch2.default, {
            watch_arr: [LATEST_OBJ].concat(_toConsumableArray(data_arr.filter(function (item) {
                return item.has_follow;
            }))),
            toggleMangeList: toggleMangeList
        }),
        _react2.default.createElement('div', { ref: ref_fake_elm, className: 'h-1px' }),
        is_max.current ? null : _react2.default.createElement('div', { className: 'h-250px' })
    );
}

exports.default = WatchLayoutLeftList;

/***/ }),

/***/ "./src/pages/watch/_components/layout/left/list/manage/_main/WatchLayoutLeftManage.js":
/*!********************************************************************************************!*\
  !*** ./src/pages/watch/_components/layout/left/list/manage/_main/WatchLayoutLeftManage.js ***!
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

var _WatchLayoutLeftListTitle = __webpack_require__(/*! ../../../_components/list_title/WatchLayoutLeftListTitle */ "./src/pages/watch/_components/layout/left/_components/list_title/WatchLayoutLeftListTitle.js");

var _WatchLayoutLeftListTitle2 = _interopRequireDefault(_WatchLayoutLeftListTitle);

var _WatchLayoutLeftManageItem = __webpack_require__(/*! ../item/WatchLayoutLeftManageItem */ "./src/pages/watch/_components/layout/left/list/manage/item/WatchLayoutLeftManageItem.js");

var _WatchLayoutLeftManageItem2 = _interopRequireDefault(_WatchLayoutLeftManageItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
WatchLayoutLeftManage.propTypes = {};

//
function WatchLayoutLeftManage(_ref) {
    var watch_arr = _ref.watch_arr,
        toggleMangeList = _ref.toggleMangeList,
        toggleNotice = _ref.toggleNotice,
        handleFollowVideos = _ref.handleFollowVideos,
        handleUnFollowVideos = _ref.handleUnFollowVideos;

    //
    return _react2.default.createElement(
        'div',
        { className: 'WatchLayoutLeftManage' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_WatchLayoutLeftListTitle2.default, {
                title: 'Your watchlist',
                manage_name: 'Done',
                toggleMangeList: toggleMangeList
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'margin-top-8px margin-bottom-20px padding-left-8px font-13px text-secondary' },
            'You can remove Pages from your watchlist or choose which you get updates from.'
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'ul',
                { className: 'list-none' },
                watch_arr.map(function (item, ix) {
                    return _react2.default.createElement(
                        'li',
                        { key: item.id },
                        _react2.default.createElement(_WatchLayoutLeftManageItem2.default, {
                            item: item,
                            ix: ix
                            //
                            , toggleNotice: toggleNotice,
                            handleFollowVideos: handleFollowVideos,
                            handleUnFollowVideos: handleUnFollowVideos
                        })
                    );
                })
            )
        )
    );
}

exports.default = WatchLayoutLeftManage;

/***/ }),

/***/ "./src/pages/watch/_components/layout/left/list/manage/item/WatchLayoutLeftManageItem.js":
/*!***********************************************************************************************!*\
  !*** ./src/pages/watch/_components/layout/left/list/manage/item/WatchLayoutLeftManageItem.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconBell = __webpack_require__(/*! ../../../../../../../../_icons_svg/icon_bell/IconBell */ "./src/_icons_svg/icon_bell/IconBell.js");

var _IconBell2 = _interopRequireDefault(_IconBell);

var _IconPlusSubtract = __webpack_require__(/*! ../../../../../../../../_icons_svg/_icon_plus_subtract/IconPlusSubtract */ "./src/_icons_svg/_icon_plus_subtract/IconPlusSubtract.js");

var _IconPlusSubtract2 = _interopRequireDefault(_IconPlusSubtract);

__webpack_require__(/*! ./WatchLayoutLeftManageItem.scss */ "./src/pages/watch/_components/layout/left/list/manage/item/WatchLayoutLeftManageItem.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
WatchLayoutLeftManageItem.propTypes = {};

//

//

//
function WatchLayoutLeftManageItem(_ref) {
    var item = _ref.item,
        ix = _ref.ix,
        toggleNotice = _ref.toggleNotice,
        handleFollowVideos = _ref.handleFollowVideos,
        handleUnFollowVideos = _ref.handleUnFollowVideos;

    //
    var name = item.name,
        picture = item.picture,
        has_notice = item.has_notice,
        has_follow = item.has_follow;

    // ----

    //

    function onToggleNotice() {
        toggleNotice(ix);
    }

    //
    function onFollowVideos() {
        handleFollowVideos(ix);
    }

    //
    function onUnFollowVideos() {
        handleUnFollowVideos(ix);
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'WatchLayoutLeftManageItem flex-between-center padding-8px' },
        _react2.default.createElement(
            'div',
            { className: 'WatchLayoutLeftManageItem_left display-flex align-items-center' },
            _react2.default.createElement('img', {
                className: 'margin-right-12px brs-50 object-fit-cover',
                src: picture,
                alt: '',
                width: 36,
                height: 36
            }),
            _react2.default.createElement(
                'div',
                { className: 'font-600' },
                name
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'WatchLayoutLeftManageItem_right' },
            has_follow ? _react2.default.createElement(
                'div',
                { className: 'display-flex align-items-center' },
                _react2.default.createElement(
                    'div',
                    {
                        className: 'WatchLayoutLeftManageItem_icon ' + (has_notice ? 'WatchLayoutLeftManageItem_bell-active' : 'WatchLayoutLeftManageItem_bell-inactive'),
                        onClick: onToggleNotice
                    },
                    _react2.default.createElement(_IconBell2.default, null)
                ),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'WatchLayoutLeftManageItem_icon',
                        onClick: onUnFollowVideos
                    },
                    _react2.default.createElement(_IconPlusSubtract2.default, { class_icon: 'rotate-45' })
                )
            ) : _react2.default.createElement(
                'div',
                {
                    className: 'WatchLayoutLeftManageItem_icon',
                    onClick: onFollowVideos
                },
                _react2.default.createElement(_IconPlusSubtract2.default, null)
            )
        )
    );
}

exports.default = WatchLayoutLeftManageItem;

/***/ }),

/***/ "./src/pages/watch/_components/layout/left/list/watch/_main/WatchLayoutLeftWatch.js":
/*!******************************************************************************************!*\
  !*** ./src/pages/watch/_components/layout/left/list/watch/_main/WatchLayoutLeftWatch.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _WatchLayoutLeftListTitle = __webpack_require__(/*! ../../../_components/list_title/WatchLayoutLeftListTitle */ "./src/pages/watch/_components/layout/left/_components/list_title/WatchLayoutLeftListTitle.js");

var _WatchLayoutLeftListTitle2 = _interopRequireDefault(_WatchLayoutLeftListTitle);

var _WatchLayoutLeftWatchItem = __webpack_require__(/*! ../item/WatchLayoutLeftWatchItem */ "./src/pages/watch/_components/layout/left/list/watch/item/WatchLayoutLeftWatchItem.js");

var _WatchLayoutLeftWatchItem2 = _interopRequireDefault(_WatchLayoutLeftWatchItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
WatchLayoutLeftWatch.propTypes = {};

//
function WatchLayoutLeftWatch(_ref) {
    var watch_arr = _ref.watch_arr,
        toggleMangeList = _ref.toggleMangeList;

    //
    return _react2.default.createElement(
        'div',
        { className: 'WatchLayoutLeftWatch' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_WatchLayoutLeftListTitle2.default, {
                title: 'Your watchlist',
                manage_name: 'Manage',
                toggleMangeList: toggleMangeList
            })
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'ul',
                { className: 'list-none' },
                watch_arr.map(function (item, ix) {
                    return _react2.default.createElement(
                        'li',
                        { key: item.id },
                        _react2.default.createElement(_WatchLayoutLeftWatchItem2.default, { item: item })
                    );
                })
            )
        )
    );
}

exports.default = WatchLayoutLeftWatch;

/***/ }),

/***/ "./src/pages/watch/_components/layout/left/list/watch/item/WatchLayoutLeftWatchItem.js":
/*!*********************************************************************************************!*\
  !*** ./src/pages/watch/_components/layout/left/list/watch/item/WatchLayoutLeftWatchItem.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DotCountNew = __webpack_require__(/*! ../../../../../../../../component/dot_count_new/DotCountNew */ "./src/component/dot_count_new/DotCountNew.js");

var _DotCountNew2 = _interopRequireDefault(_DotCountNew);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
WatchLayoutLeftWatchItem.propTypes = {};

//

//
function WatchLayoutLeftWatchItem(_ref) {
    var item = _ref.item;

    //
    var name = item.name,
        picture = item.picture,
        count_new = item.count_new,
        link_to = item.link_to;

    //

    return _react2.default.createElement(
        _reactRouterDom.NavLink,
        {
            className: 'display-flex align-items-center padding-8px brs-6px color-inherit hv-bg-blur',
            activeClassName: 'bg-blur',
            to: link_to
        },
        _react2.default.createElement(
            'div',
            { className: 'margin-right-12px' },
            _react2.default.createElement('img', {
                className: 'brs-50 object-fit-cover',
                src: picture,
                alt: '',
                width: 36,
                height: 36
            })
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                { className: 'font-600' },
                name
            ),
            count_new ? _react2.default.createElement(
                'div',
                { className: 'text-blue font-13px' },
                _react2.default.createElement(_DotCountNew2.default, {
                    title: (count_new <= 9 ? count_new : '9+') + ' video' + (count_new >= 2 ? 's' : '')
                })
            ) : null
        )
    );
}

exports.default = WatchLayoutLeftWatchItem;

/***/ }),

/***/ "./src/pages/watch/_components/layout/left/nav/WatchLayoutLeftNav.js":
/*!***************************************************************************!*\
  !*** ./src/pages/watch/_components/layout/left/nav/WatchLayoutLeftNav.js ***!
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

var _Constant = __webpack_require__(/*! ../../../../../../_constant/Constant */ "./src/_constant/Constant.js");

var _IconWatch = __webpack_require__(/*! ../../../../../../_icons_svg/watch/IconWatch */ "./src/_icons_svg/watch/IconWatch.js");

var _IconWatch2 = _interopRequireDefault(_IconWatch);

var _LeftBarNav = __webpack_require__(/*! ../../../../../../component/side_bar/left/nav/_main/LeftBarNav */ "./src/component/side_bar/left/nav/_main/LeftBarNav.js");

var _LeftBarNav2 = _interopRequireDefault(_LeftBarNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }
//

//

//


//
var watch_nav_arr = [{
    Icon: _react2.default.createElement(_IconWatch2.default, null),
    title: 'Home',
    link_to: _Constant.IS_MOBILE ? '/watch/home' : '/watch'
}, {
    Icon: null,
    title: 'Live',
    link_to: '/watch/live'
}, {
    Icon: null,
    title: 'Show',
    link_to: '/watch/show'
}, {
    Icon: null,
    title: 'Explore',
    link_to: '/watch/explore'
}, {
    Icon: null,
    title: 'Saved videos',
    link_to: '/watch/saved'
}];

//
WatchLayoutLeftNav.propTypes = {};

//
function WatchLayoutLeftNav(_ref) {
    _objectDestructuringEmpty(_ref);

    //
    return _react2.default.createElement(
        'div',
        { className: 'WatchLayoutLeftNav padding-x-8px' },
        _react2.default.createElement(_LeftBarNav2.default, { nav_arr: watch_nav_arr })
    );
}

exports.default = WatchLayoutLeftNav;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/fb_search/input/_main/FbSearchInput.scss":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/fb_search/input/_main/FbSearchInput.scss ***!
  \*************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".FbSearchInput-open {\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  box-shadow: 0px 0px 4px var(--shadow-2);\n}\n\n.FbSearchInput_list {\n  max-height: 400px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  box-shadow: 0px 2px 4px var(--shadow-2);\n}", "",{"version":3,"sources":["webpack://./src/component/fb_search/input/_main/FbSearchInput.scss"],"names":[],"mappings":"AAAA;EACI,2BAAA;EACA,4BAAA;EACA,uCAAA;AACJ;;AAEA;EACI,iBAAA;EACA,8BAAA;EACA,+BAAA;EACA,uCAAA;AACJ","sourcesContent":[".FbSearchInput-open{\r\n    border-top-left-radius: 8px;\r\n    border-top-right-radius: 8px;\r\n    box-shadow: 0px 0px 4px var(--shadow-2);\r\n}\r\n\r\n.FbSearchInput_list{\r\n    max-height: 400px;\r\n    border-bottom-left-radius: 8px;\r\n    border-bottom-right-radius: 8px;\r\n    box-shadow: 0px 2px 4px var(--shadow-2);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/watch/_components/layout/left/_main/WatchLayoutLeft.scss":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/watch/_components/layout/left/_main/WatchLayoutLeft.scss ***!
  \*************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".device-mobile .WatchLayoutLeft {\n  background-color: var(--md-bg-primary);\n  height: calc(100vh - var(--height-header));\n}", "",{"version":3,"sources":["webpack://./src/pages/watch/_components/layout/left/_main/WatchLayoutLeft.scss"],"names":[],"mappings":"AACI;EACI,sCAAA;EACA,0CAAA;AAAR","sourcesContent":[".device-mobile {\r\n    .WatchLayoutLeft {\r\n        background-color: var(--md-bg-primary);\r\n        height: calc(100vh - var(--height-header));\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/watch/_components/layout/left/head/_main/WatchLayoutHead.scss":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/watch/_components/layout/left/head/_main/WatchLayoutHead.scss ***!
  \******************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/watch/_components/layout/left/list/manage/item/WatchLayoutLeftManageItem.scss":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/watch/_components/layout/left/list/manage/item/WatchLayoutLeftManageItem.scss ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".WatchLayoutLeftManageItem_right svg {\n  width: 16px;\n  height: 16px;\n}\n\n.WatchLayoutLeftManageItem_icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.WatchLayoutLeftManageItem_icon:hover {\n  background-color: var(--md-bg-blur);\n}\n\n.WatchLayoutLeftManageItem_bell-inactive {\n  position: relative;\n}\n.WatchLayoutLeftManageItem_bell-inactive::after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) rotate(-45deg);\n  width: 1px;\n  height: 75%;\n  background-color: var(--md-bg-blur);\n}", "",{"version":3,"sources":["webpack://./src/pages/watch/_components/layout/left/list/manage/item/WatchLayoutLeftManageItem.scss"],"names":[],"mappings":"AACI;EACI,WAAA;EACA,YAAA;AAAR;;AAIA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,WAAA;EACA,YAAA;EACA,kBAAA;EAEA,eAAA;AAHJ;AAII;EACI,mCAAA;AAFR;;AAMA;EACI,kBAAA;AAHJ;AAKI;EACI,WAAA;EAEA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,+CAAA;EAEA,UAAA;EACA,WAAA;EACA,mCAAA;AALR","sourcesContent":[".WatchLayoutLeftManageItem_right{\r\n    svg{\r\n        width: 16px;\r\n        height: 16px;\r\n    }\r\n}\r\n\r\n.WatchLayoutLeftManageItem_icon{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    width: 32px;\r\n    height: 32px;\r\n    border-radius: 50%;\r\n\r\n    cursor: pointer;\r\n    &:hover{\r\n        background-color: var(--md-bg-blur);\r\n    }\r\n}\r\n\r\n.WatchLayoutLeftManageItem_bell-inactive{\r\n    position: relative;\r\n\r\n    &::after{\r\n        content: '';\r\n\r\n        position: absolute;\r\n        left: 50%;\r\n        top: 50%;\r\n        transform: translate(-50%, -50%) rotate(-45deg);\r\n        \r\n        width: 1px;\r\n        height: 75%;\r\n        background-color: var(--md-bg-blur);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/component/fb_search/input/_main/FbSearchInput.scss":
/*!****************************************************************!*\
  !*** ./src/component/fb_search/input/_main/FbSearchInput.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbSearchInput_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./FbSearchInput.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/fb_search/input/_main/FbSearchInput.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbSearchInput_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FbSearchInput_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/watch/_components/layout/left/_main/WatchLayoutLeft.scss":
/*!****************************************************************************!*\
  !*** ./src/pages/watch/_components/layout/left/_main/WatchLayoutLeft.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_WatchLayoutLeft_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./WatchLayoutLeft.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/watch/_components/layout/left/_main/WatchLayoutLeft.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_WatchLayoutLeft_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_WatchLayoutLeft_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/watch/_components/layout/left/head/_main/WatchLayoutHead.scss":
/*!*********************************************************************************!*\
  !*** ./src/pages/watch/_components/layout/left/head/_main/WatchLayoutHead.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_WatchLayoutHead_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../node_modules/sass-loader/dist/cjs.js!./WatchLayoutHead.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/watch/_components/layout/left/head/_main/WatchLayoutHead.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_WatchLayoutHead_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_WatchLayoutHead_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/watch/_components/layout/left/list/manage/item/WatchLayoutLeftManageItem.scss":
/*!*************************************************************************************************!*\
  !*** ./src/pages/watch/_components/layout/left/list/manage/item/WatchLayoutLeftManageItem.scss ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_WatchLayoutLeftManageItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../../node_modules/sass-loader/dist/cjs.js!./WatchLayoutLeftManageItem.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/watch/_components/layout/left/list/manage/item/WatchLayoutLeftManageItem.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_WatchLayoutLeftManageItem_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_WatchLayoutLeftManageItem_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_watch__components_layout_left__main_WatchLayoutLeft_js.js.map