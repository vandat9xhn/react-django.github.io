(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_component_overlap_pics__main_OverlapPics_js-src_pages_group_pc_pages_discover_right__main-3e819d"],{

/***/ "./src/component/overlap_pics/_main/OverlapPics.js":
/*!*********************************************************!*\
  !*** ./src/component/overlap_pics/_main/OverlapPics.js ***!
  \*********************************************************/
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

var _IconThreeDot = __webpack_require__(/*! ../../../_icons_svg/icon_three_dot/IconThreeDot */ "./src/_icons_svg/icon_three_dot/IconThreeDot.js");

var _IconThreeDot2 = _interopRequireDefault(_IconThreeDot);

var _OverlapPicsItem = __webpack_require__(/*! ../item/OverlapPicsItem */ "./src/component/overlap_pics/item/OverlapPicsItem.js");

var _OverlapPicsItem2 = _interopRequireDefault(_OverlapPicsItem);

__webpack_require__(/*! ./OverlapPics.scss */ "./src/component/overlap_pics/_main/OverlapPics.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
OverlapPics.propTypes = {
    pic_arr: _propTypes2.default.array,
    has_more: _propTypes2.default.bool,

    ItemComponent: _propTypes2.default.func,
    item_props: _propTypes2.default.object,
    clickMore: _propTypes2.default.func
};

OverlapPics.defaultProps = {
    ItemComponent: _OverlapPicsItem2.default,
    item_props: {}
};

//
function OverlapPics(_ref) {
    var pic_arr = _ref.pic_arr,
        has_more = _ref.has_more,
        ItemComponent = _ref.ItemComponent,
        item_props = _ref.item_props,
        clickMore = _ref.clickMore;

    //
    return _react2.default.createElement(
        'div',
        { className: 'flex-end row-reverse' },
        has_more && _react2.default.createElement(
            'div',
            { className: 'OverlapPics_item' },
            _react2.default.createElement(
                'div',
                { className: 'OverlapPics_item_img pos-rel' },
                _react2.default.createElement(ItemComponent, _extends({ item: pic_arr[0] }, item_props)),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'pos-abs-0 display-flex-center wh-100 brs-50 bg-shadow-2',
                        onClick: clickMore
                    },
                    _react2.default.createElement(_IconThreeDot2.default, {
                        size_icon: '15px',
                        color: 'var(--md-bg-blur)'
                    })
                )
            )
        ),
        pic_arr.slice(has_more ? 1 : 0).map(function (item, ix) {
            return _react2.default.createElement(
                'div',
                { key: ix, className: 'OverlapPics_item' },
                _react2.default.createElement(
                    'div',
                    { className: 'OverlapPics_item_img' },
                    _react2.default.createElement(ItemComponent, _extends({ item: item }, item_props))
                )
            );
        })
    );
}

exports.default = OverlapPics;

/***/ }),

/***/ "./src/component/overlap_pics/item/OverlapPicsItem.js":
/*!************************************************************!*\
  !*** ./src/component/overlap_pics/item/OverlapPicsItem.js ***!
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
OverlapPicsItem.propTypes = {};

//
function OverlapPicsItem(_ref) {
    var item = _ref.item;

    //
    return _react2.default.createElement('img', {
        className: 'OverlapPicsItem wh-100 brs-50 object-fit-cover',
        src: item.picture,
        alt: ''
    });
}

exports.default = OverlapPicsItem;

/***/ }),

/***/ "./src/pages/group/pc/pages/discover/right/_main/GroupDiscoverRight.js":
/*!*****************************************************************************!*\
  !*** ./src/pages/group/pc/pages/discover/right/_main/GroupDiscoverRight.js ***!
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

var _GroupDiscoverRow = __webpack_require__(/*! ../row/GroupDiscoverRow */ "./src/pages/group/pc/pages/discover/right/row/GroupDiscoverRow.js");

var _GroupDiscoverRow2 = _interopRequireDefault(_GroupDiscoverRow);

var _GroupDiscoverMoreSuggestions = __webpack_require__(/*! ../more_suggestions/GroupDiscoverMoreSuggestions */ "./src/pages/group/pc/pages/discover/right/more_suggestions/GroupDiscoverMoreSuggestions.js");

var _GroupDiscoverMoreSuggestions2 = _interopRequireDefault(_GroupDiscoverMoreSuggestions);

__webpack_require__(/*! ./GroupDiscoverRight.scss */ "./src/pages/group/pc/pages/discover/right/_main/GroupDiscoverRight.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GroupDiscoverRight.propTypes = {};

//

//

//
function GroupDiscoverRight(props) {
    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupDiscoverRight' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_GroupDiscoverRow2.default, {
                title: 'Suggested for you',
                info: 'Groups you might be interested in.',
                params_api: { type: 'suggested' },
                link_all: '/group/categories?type=suggested'
            })
        ),
        _react2.default.createElement('div', { className: 'GroupDiscoverRight_separate' }),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_GroupDiscoverRow2.default, {
                title: 'Friend\'s groups',
                info: 'Groups your friends are in.',
                params_api: { type: 'friend_group' },
                link_all: '/group/categories?type=friend_group'
            })
        ),
        _react2.default.createElement('div', { className: 'GroupDiscoverRight_separate' }),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_GroupDiscoverMoreSuggestions2.default, null)
        )
    );
}

exports.default = GroupDiscoverRight;

/***/ }),

/***/ "./src/pages/group/pc/pages/discover/right/more_suggestions/GroupDiscoverMoreSuggestions.js":
/*!**************************************************************************************************!*\
  !*** ./src/pages/group/pc/pages/discover/right/more_suggestions/GroupDiscoverMoreSuggestions.js ***!
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

var _suggested = __webpack_require__(/*! ../../../../../../../_handle_api/fb_group/suggested */ "./src/_handle_api/fb_group/suggested.js");

var _useObserverShowMore2 = __webpack_require__(/*! ../../../../../../../_hooks/useObserverShowMore */ "./src/_hooks/useObserverShowMore.js");

var _GroupCard = __webpack_require__(/*! ../../../../../_components/group_card/_main/GroupCard */ "./src/pages/group/_components/group_card/_main/GroupCard.js");

var _GroupCard2 = _interopRequireDefault(_GroupCard);

__webpack_require__(/*! ./GroupDiscoverMoreSuggestions.scss */ "./src/pages/group/pc/pages/discover/right/more_suggestions/GroupDiscoverMoreSuggestions.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }
//

//

//

//


//
GroupDiscoverMoreSuggestions.propTypes = {};

//
function GroupDiscoverMoreSuggestions(_ref) {

    // ----

    //
    var getData_API_AtFirst = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return getData_API();

                        case 2:

                            if (!is_max.current) {
                                observerShowMore({
                                    fake_elm_end: ref_fake_elm.current,
                                    rootMargin: '0px 0px 500px 0px',
                                    way_scroll: 'to_bottom',
                                    margin: 500
                                });
                            }

                        case 3:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function getData_API_AtFirst() {
            return _ref2.apply(this, arguments);
        };
    }();

    //


    _objectDestructuringEmpty(_ref);

    //
    var ref_main_elm = (0, _react.useRef)(null);
    var ref_fake_elm = (0, _react.useRef)(null);

    //

    var _useObserverShowMore = (0, _useObserverShowMore2.useObserverShowMore)({
        handle_API_L: function handle_API_L(c_count) {
            return (0, _suggested.handle_API_FbGroupSuggested_L)({
                c_count: c_count,
                params: {
                    size: 5,
                    type: 'more_suggestions'
                }
            });
        }
    }),
        data_state = _useObserverShowMore.data_state,
        is_max = _useObserverShowMore.is_max,
        observerShowMore = _useObserverShowMore.observerShowMore,
        getData_API = _useObserverShowMore.getData_API;

    var data_arr = data_state.data_arr,
        has_fetched = data_state.has_fetched;

    //

    (0, _react.useEffect)(function () {
        getData_API_AtFirst();
    }, []);return _react2.default.createElement(
        'div',
        {
            ref: ref_main_elm,
            className: 'GroupDiscoverMoreSuggestions pos-rel'
        },
        _react2.default.createElement(
            'h2',
            { className: 'GroupDiscoverMoreSuggestions_title margin-bottom-16px padding-x-3px font-20px font-700' },
            'More suggestions'
        ),
        _react2.default.createElement(
            'ul',
            { className: 'display-flex flex-wrap list-none' },
            data_arr.map(function (item, ix) {
                return _react2.default.createElement(
                    'li',
                    {
                        key: item.id,
                        className: 'GroupDiscoverMoreSuggestions_item w-50per padding-3px flex-shrink-0'
                    },
                    _react2.default.createElement(_GroupCard2.default, {
                        id: item.id,
                        name: item.name,
                        picture: item.picture
                        //
                        , member_count: item.member_count,
                        post_count: item.post_count,
                        post_unit: item.post_unit
                        //
                        , friend_arr: item.friend_arr,
                        friend_count: item.friend_count,
                        has_more_friend: item.has_more_friend
                        //
                        , BtnElm: _react2.default.createElement(
                            'div',
                            { className: 'display-flex-center wh-100 bg-ccc' },
                            'Join Group'
                        )
                        // removeGroupCard
                    })
                );
            })
        ),
        is_max.current ? null : _react2.default.createElement('div', { className: 'GroupDiscoverMoreSuggestions_not_fetched' }),
        _react2.default.createElement('div', { ref: ref_fake_elm, className: 'padding-1px' })
    );
}

exports.default = GroupDiscoverMoreSuggestions;

/***/ }),

/***/ "./src/pages/group/pc/pages/discover/right/row/GroupDiscoverRow.js":
/*!*************************************************************************!*\
  !*** ./src/pages/group/pc/pages/discover/right/row/GroupDiscoverRow.js ***!
  \*************************************************************************/
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GroupRowCardsFit = __webpack_require__(/*! ../../../../../_components/row_cards/fit/GroupRowCardsFit */ "./src/pages/group/_components/row_cards/fit/GroupRowCardsFit.js");

var _GroupRowCardsFit2 = _interopRequireDefault(_GroupRowCardsFit);

__webpack_require__(/*! ./GroupDiscoverRow.scss */ "./src/pages/group/pc/pages/discover/right/row/GroupDiscoverRow.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GroupDiscoverRow.propTypes = {};

//
function GroupDiscoverRow(_ref) {
    var title = _ref.title,
        info = _ref.info,
        link_all = _ref.link_all,
        params_api = _ref.params_api;

    //
    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        has_fetched = _useState2[0],
        setHasFetched = _useState2[1];

    // ----

    //


    function handleFetched() {
        setHasFetched(true);
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupDiscoverRow' },
        _react2.default.createElement(
            'div',
            { className: 'GroupDiscoverRow_head margin-bottom-16px' },
            _react2.default.createElement(
                'div',
                { className: 'flex-between-center' },
                _react2.default.createElement(
                    'h2',
                    { className: 'GroupDiscoverRow_title font-20px font-700' },
                    title
                ),
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: link_all },
                    'See all'
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'GroupDiscoverRow_info text-secondary font-17px' },
                info
            )
        ),
        _react2.default.createElement(
            'div',
            { className: '' + (has_fetched ? '' : 'display-none') },
            _react2.default.createElement(_GroupRowCardsFit2.default, {
                params_api: params_api,
                BtnElm: _react2.default.createElement(
                    'div',
                    { className: 'display-flex-center wh-100 bg-ccc' },
                    'Join Group'
                ),
                handleFetched: handleFetched
            })
        ),
        has_fetched ? null : _react2.default.createElement('div', { className: 'GroupDiscoverRow_not_fetched' })
    );
}

exports.default = GroupDiscoverRow;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/overlap_pics/_main/OverlapPics.scss":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/overlap_pics/_main/OverlapPics.scss ***!
  \********************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".OverlapPics_item {\n  position: relative;\n  width: 24px;\n  height: 24px;\n}\n\n.OverlapPics_item_img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 36px;\n  height: 36px;\n  border: 2px solid var(--white);\n  border-radius: 50%;\n}", "",{"version":3,"sources":["webpack://./src/component/overlap_pics/_main/OverlapPics.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EAEA,WAAA;EACA,YAAA;AAAJ;;AAGA;EACI,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EAEA,WAAA;EACA,YAAA;EACA,8BAAA;EACA,kBAAA;AADJ","sourcesContent":[".OverlapPics_item{\r\n    position: relative;\r\n\r\n    width: 24px;\r\n    height: 24px;\r\n}\r\n\r\n.OverlapPics_item_img{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n\r\n    width: 36px;\r\n    height: 36px;\r\n    border: 2px solid var(--white);\r\n    border-radius: 50%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/pc/pages/discover/right/_main/GroupDiscoverRight.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/pc/pages/discover/right/_main/GroupDiscoverRight.scss ***!
  \****************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".GroupDiscoverRight_separate {\n  margin: 32px 64px;\n  height: 1px;\n  background-color: var(--md-bg-blur);\n}", "",{"version":3,"sources":["webpack://./src/pages/group/pc/pages/discover/right/_main/GroupDiscoverRight.scss"],"names":[],"mappings":"AAAA;EACI,iBAAA;EACA,WAAA;EACA,mCAAA;AACJ","sourcesContent":[".GroupDiscoverRight_separate {\r\n    margin: 32px 64px;\r\n    height: 1px;\r\n    background-color: var(--md-bg-blur);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/pc/pages/discover/right/more_suggestions/GroupDiscoverMoreSuggestions.scss":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/pc/pages/discover/right/more_suggestions/GroupDiscoverMoreSuggestions.scss ***!
  \*************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".GroupDiscoverMoreSuggestions {\n  padding-right: 61px;\n  padding-left: 61px;\n}\n\n.GroupDiscoverMoreSuggestions_not_fetched {\n  height: 450px;\n}", "",{"version":3,"sources":["webpack://./src/pages/group/pc/pages/discover/right/more_suggestions/GroupDiscoverMoreSuggestions.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,kBAAA;AACJ;;AAEA;EACI,aAAA;AACJ","sourcesContent":[".GroupDiscoverMoreSuggestions{\r\n    padding-right: 61px;\r\n    padding-left: 61px;\r\n}\r\n\r\n.GroupDiscoverMoreSuggestions_not_fetched {\r\n    height: 450px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/pc/pages/discover/right/row/GroupDiscoverRow.scss":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/pc/pages/discover/right/row/GroupDiscoverRow.scss ***!
  \************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".GroupDiscoverRow {\n  padding-left: 64px;\n  padding-right: 64px;\n}\n.GroupDiscoverRow .CardsRowFitContain_item {\n  width: 50%;\n  min-width: 240px;\n  padding-right: 5px;\n}\n\n.GroupDiscoverRow_not_fetched {\n  height: 450px;\n}", "",{"version":3,"sources":["webpack://./src/pages/group/pc/pages/discover/right/row/GroupDiscoverRow.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,mBAAA;AACJ;AACI;EACI,UAAA;EACA,gBAAA;EACA,kBAAA;AACR;;AAGA;EACI,aAAA;AAAJ","sourcesContent":[".GroupDiscoverRow {\r\n    padding-left: 64px;\r\n    padding-right: 64px;\r\n\r\n    .CardsRowFitContain_item  {\r\n        width: 50%;\r\n        min-width: 240px;\r\n        padding-right: 5px;\r\n    }\r\n}\r\n\r\n.GroupDiscoverRow_not_fetched {\r\n    height: 450px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/component/overlap_pics/_main/OverlapPics.scss":
/*!***********************************************************!*\
  !*** ./src/component/overlap_pics/_main/OverlapPics.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_OverlapPics_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./OverlapPics.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/overlap_pics/_main/OverlapPics.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_OverlapPics_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_OverlapPics_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/group/pc/pages/discover/right/_main/GroupDiscoverRight.scss":
/*!*******************************************************************************!*\
  !*** ./src/pages/group/pc/pages/discover/right/_main/GroupDiscoverRight.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupDiscoverRight_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../node_modules/sass-loader/dist/cjs.js!./GroupDiscoverRight.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/pc/pages/discover/right/_main/GroupDiscoverRight.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupDiscoverRight_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupDiscoverRight_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/group/pc/pages/discover/right/more_suggestions/GroupDiscoverMoreSuggestions.scss":
/*!****************************************************************************************************!*\
  !*** ./src/pages/group/pc/pages/discover/right/more_suggestions/GroupDiscoverMoreSuggestions.scss ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupDiscoverMoreSuggestions_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../node_modules/sass-loader/dist/cjs.js!./GroupDiscoverMoreSuggestions.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/pc/pages/discover/right/more_suggestions/GroupDiscoverMoreSuggestions.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupDiscoverMoreSuggestions_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupDiscoverMoreSuggestions_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/group/pc/pages/discover/right/row/GroupDiscoverRow.scss":
/*!***************************************************************************!*\
  !*** ./src/pages/group/pc/pages/discover/right/row/GroupDiscoverRow.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupDiscoverRow_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../node_modules/sass-loader/dist/cjs.js!./GroupDiscoverRow.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/group/pc/pages/discover/right/row/GroupDiscoverRow.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupDiscoverRow_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_GroupDiscoverRow_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_component_overlap_pics__main_OverlapPics_js-src_pages_group_pc_pages_discover_right__main-3e819d.js.map