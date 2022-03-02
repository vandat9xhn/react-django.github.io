(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_watch__main_Watch_js"],{

/***/ "./src/pages/watch/_components/layout/_main/WatchLayout.js":
/*!*****************************************************************!*\
  !*** ./src/pages/watch/_components/layout/_main/WatchLayout.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Constant = __webpack_require__(/*! ../../../../../_constant/Constant */ "./src/_constant/Constant.js");

var _WatchLayoutLeft = __webpack_require__(/*! ../left/_main/WatchLayoutLeft */ "./src/pages/watch/_components/layout/left/_main/WatchLayoutLeft.js");

var _WatchLayoutLeft2 = _interopRequireDefault(_WatchLayoutLeft);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
WatchLayout.propTypes = {};

//

// 
function WatchLayout(_ref) {
    var children = _ref.children;

    //
    if (_Constant.IS_MOBILE) {
        return children;
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'WatchLayout' },
        _react2.default.createElement(
            'div',
            { className: 'display-flex' },
            _react2.default.createElement(
                'div',
                { className: 'WatchLayout_left flex-shrink-0 left-bar-sticky max-w-100per' },
                _react2.default.createElement(_WatchLayoutLeft2.default, null)
            ),
            _react2.default.createElement(
                'div',
                { className: 'WatchLayout_right flex-grow-1' },
                children
            )
        )
    );
}

exports.default = WatchLayout;

/***/ }),

/***/ "./src/pages/watch/_main/Watch.js":
/*!****************************************!*\
  !*** ./src/pages/watch/_main/Watch.js ***!
  \****************************************/
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

var _main = __webpack_require__(/*! ../_routes/_main */ "./src/pages/watch/_routes/_main.js");

var _WatchLayout = __webpack_require__(/*! ../_components/layout/_main/WatchLayout */ "./src/pages/watch/_components/layout/_main/WatchLayout.js");

var _WatchLayout2 = _interopRequireDefault(_WatchLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
Watch.propTypes = {};

//

//
function Watch(props) {
    //
    return _react2.default.createElement(
        'div',
        { className: 'Watch' },
        _react2.default.createElement(
            _WatchLayout2.default,
            null,
            _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _main.watchRoutes.map(function (item, ix) {
                    return _react2.default.createElement(_reactRouterDom.Route, {
                        key: ix,
                        path: item.path,
                        component: item.component,
                        exact: item.exact
                    });
                })
            )
        )
    );
}

exports.default = Watch;

/***/ }),

/***/ "./src/pages/watch/_routes/_main.js":
/*!******************************************!*\
  !*** ./src/pages/watch/_routes/_main.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.watchRoutes = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var WatchHome = _react2.default.lazy(function () {
    return Promise.all(/*! import() */[__webpack_require__.e("src_component__screen_type_permission__main_ScreenPermission_js"), __webpack_require__.e("src_component_posts_common_mouse_enter_leave_info__main_MouseEnterLeaveInfo_js"), __webpack_require__.e("src_component_action_preview_page__main_ActionPreviewPage_js"), __webpack_require__.e("src__params_post_PostParams_js-src_component__screen_type_like__main_ScreenLike_js-src_compon-619f7a"), __webpack_require__.e("src__default__common_getRandomPageType_js-src_component_actions_page_other_ActionsPageOther_j-fcc849"), __webpack_require__.e("src__some_function_getClientXY_js-src_component_action_preview_group__main_ActionPreviewGroup_js"), __webpack_require__.e("src__icons_svg_icon_private_IconPrivate_js-src_component_actions_group_other_ActionsGroupOthe-2fddc5"), __webpack_require__.e("src__handle_api_post_HandleAPIPost_js-src__handle_api_post_cu_user_tag_js-src__some_function_-94dbb5"), __webpack_require__.e("src_component_posts__zoom_post_zoom_vid_pic__main_ZoomVidPicItem_js"), __webpack_require__.e("src_component_posts__posts__main_Posts_js"), __webpack_require__.e("src_pages_watch_pages_home__main_WatchHome_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/home/_main/WatchHome */ "./src/pages/watch/pages/home/_main/WatchHome.js"));
});

//
var watchRoutes = exports.watchRoutes = [{
    path: '/watch',
    component: WatchHome,
    exact: true
}];

/***/ })

}]);
//# sourceMappingURL=src_pages_watch__main_Watch_js.js.map